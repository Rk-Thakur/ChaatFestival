export default function BackgroundLayer() {
  return (
    <div
      aria-hidden="true"
      className="hero-bg hero-bg-zoom fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
    >
      <div className="hero-overlay absolute inset-0" />
    </div>
  );
}
