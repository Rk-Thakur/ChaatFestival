/**
 * Distant Temple Bell & Water ambience — synthesized entirely with the Web Audio
 * API so the toggle needs no external audio asset (and can never 404 or violate
 * an embedding policy). River noise runs through a slow-modulated lowpass filter;
 * the bell is a struck-metal envelope fired at randomized, unhurried intervals.
 */

let ctx: AudioContext | null = null;
let masterGain: GainNode | null = null;
let noiseSource: AudioBufferSourceNode | null = null;
let bellTimeoutId: ReturnType<typeof setTimeout> | null = null;
let running = false;
let bellCallback: (() => void) | null = null;

function ensureContext(): AudioContext {
  if (!ctx) {
    ctx = new AudioContext();
  }
  return ctx;
}

function buildRiverNoise(context: AudioContext, destination: AudioNode) {
  const bufferSeconds = 4;
  const buffer = context.createBuffer(
    2,
    context.sampleRate * bufferSeconds,
    context.sampleRate,
  );
  for (let channel = 0; channel < buffer.numberOfChannels; channel++) {
    const data = buffer.getChannelData(channel);
    let last = 0;
    for (let i = 0; i < data.length; i++) {
      const white = Math.random() * 2 - 1;
      // brown-ish noise: smoother, more water-like than raw white noise
      last = (last + 0.02 * white) / 1.02;
      data[i] = last * 3.2;
    }
  }

  const source = context.createBufferSource();
  source.buffer = buffer;
  source.loop = true;

  const filter = context.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 900;
  filter.Q.value = 0.6;

  const shimmer = context.createGain();
  shimmer.gain.value = 0.18;
  const lfo = context.createOscillator();
  lfo.frequency.value = 0.08;
  const lfoDepth = context.createGain();
  lfoDepth.gain.value = 0.06;
  lfo.connect(lfoDepth);
  lfoDepth.connect(shimmer.gain);
  lfo.start();

  source.connect(filter);
  filter.connect(shimmer);
  shimmer.connect(destination);
  source.start();

  return source;
}

function playBell(context: AudioContext, destination: AudioNode) {
  const now = context.currentTime;
  const fundamental = 320 + Math.random() * 40;

  const bellGain = context.createGain();
  bellGain.gain.setValueAtTime(0, now);
  bellGain.gain.linearRampToValueAtTime(0.35, now + 0.02);
  bellGain.gain.exponentialRampToValueAtTime(0.001, now + 4.5);

  const warmth = context.createBiquadFilter();
  warmth.type = "lowpass";
  warmth.frequency.value = 2600;

  bellGain.connect(warmth);
  warmth.connect(destination);

  [1, 2.4, 3.8].forEach((ratio, i) => {
    const osc = context.createOscillator();
    osc.type = "sine";
    osc.frequency.value = fundamental * ratio;
    const partialGain = context.createGain();
    partialGain.gain.value = 1 / (i + 1);
    osc.connect(partialGain);
    partialGain.connect(bellGain);
    osc.start(now);
    osc.stop(now + 5);
  });

  bellCallback?.();
}

function scheduleNextBell(context: AudioContext, destination: AudioNode) {
  const delay = 7000 + Math.random() * 9000;
  bellTimeoutId = setTimeout(() => {
    if (!running) return;
    playBell(context, destination);
    scheduleNextBell(context, destination);
  }, delay);
}

export function startAmbience(onBell?: () => void) {
  if (running) return;
  bellCallback = onBell ?? null;
  const context = ensureContext();
  if (context.state === "suspended") {
    void context.resume();
  }

  const gain = context.createGain();
  gain.gain.value = 0;
  gain.connect(context.destination);
  gain.gain.linearRampToValueAtTime(0.5, context.currentTime + 1.2);
  masterGain = gain;

  noiseSource = buildRiverNoise(context, gain);
  running = true;
  // First bell arrives a little sooner so the toggle feels alive immediately.
  bellTimeoutId = setTimeout(() => {
    if (!running) return;
    playBell(context, gain);
    scheduleNextBell(context, gain);
  }, 1800);
}

export function stopAmbience() {
  if (!running) return;
  running = false;
  bellCallback = null;

  if (bellTimeoutId) {
    clearTimeout(bellTimeoutId);
    bellTimeoutId = null;
  }

  if (masterGain && ctx) {
    const gain = masterGain;
    const context = ctx;
    gain.gain.cancelScheduledValues(context.currentTime);
    gain.gain.setValueAtTime(gain.gain.value, context.currentTime);
    gain.gain.linearRampToValueAtTime(0, context.currentTime + 0.6);
  }

  const source = noiseSource;
  setTimeout(() => {
    source?.stop();
    source?.disconnect();
  }, 700);
  noiseSource = null;
  masterGain = null;
}

export function isAmbiencePlaying() {
  return running;
}
