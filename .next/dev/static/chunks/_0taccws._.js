(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/KolkataClock.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>KolkataClock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function formatIST(date) {
    const parts = new Intl.DateTimeFormat("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true
    }).formatToParts(date);
    return {
        hour: parts.find((p)=>p.type === "hour")?.value ?? "--",
        minute: parts.find((p)=>p.type === "minute")?.value ?? "--",
        dayPeriod: parts.find((p)=>p.type === "dayPeriod")?.value ?? ""
    };
}
function KolkataClock() {
    _s();
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "KolkataClock.useEffect": ()=>{
            setTime(formatIST(new Date()));
            const id = setInterval({
                "KolkataClock.useEffect.id": ()=>setTime(formatIST(new Date()))
            }["KolkataClock.useEffect.id"], 1000);
            return ({
                "KolkataClock.useEffect": ()=>clearInterval(id)
            })["KolkataClock.useEffect"];
        }
    }["KolkataClock.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col leading-tight",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-baseline gap-0.5 text-sm font-semibold tabular-nums text-sunset-gold sm:text-base",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: time?.hour ?? "--"
                    }, void 0, false, {
                        fileName: "[project]/components/KolkataClock.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "animate-blink-colon",
                        children: ":"
                    }, void 0, false, {
                        fileName: "[project]/components/KolkataClock.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: time?.minute ?? "--"
                    }, void 0, false, {
                        fileName: "[project]/components/KolkataClock.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1 text-[10px] font-medium text-white/60 sm:text-xs",
                        children: time?.dayPeriod ?? ""
                    }, void 0, false, {
                        fileName: "[project]/components/KolkataClock.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/KolkataClock.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-[10px] tracking-wider text-white/50 uppercase sm:text-[11px]",
                children: "IST · Ghat Time"
            }, void 0, false, {
                fileName: "[project]/components/KolkataClock.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/KolkataClock.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
_s(KolkataClock, "t5SmOhh13g3g0U8h9STA+7f4x44=");
_c = KolkataClock;
var _c;
__turbopack_context__.k.register(_c, "KolkataClock");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Player.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Player
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@vercel/analytics/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/tracks.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$youtube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/youtube.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const GLASS = "border border-amber-500/20 bg-gradient-to-b from-amber-950/30 via-slate-950/60 to-black/80 backdrop-blur-3xl backdrop-saturate-[1.8] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,200,100,0.25)]";
function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
    const total = Math.floor(seconds);
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
}
/* ---------------------------------------------------------------------- */ /* All sub-components below live at MODULE scope (not nested inside       */ /* Player) so React never re-mounts them on state changes — that would    */ /* kill the running CSS spin animation and destroy the YT iframe.         */ /* ---------------------------------------------------------------------- */ function VinylArt({ videoContainerRef, isPlaying }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-black ring-1 ring-amber-200/20 sm:h-20 sm:w-20",
        style: {
            animation: "spin-vinyl 10s linear infinite",
            animationPlayState: isPlaying ? "running" : "paused"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "aspect-video h-full w-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: videoContainerRef,
                        className: "h-full w-full"
                    }, void 0, false, {
                        fileName: "[project]/components/Player.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/Player.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 41,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pointer-events-none absolute inset-0 m-auto h-3 w-3 rounded-full bg-amber-500/80 ring-2 ring-orange-200/50"
            }, void 0, false, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Player.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
_c = VinylArt;
function TrackInfo({ track }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-w-0",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "truncate text-[15px] font-semibold text-amber-100",
                children: track.title
            }, void 0, false, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "truncate text-[12.5px] text-white/70",
                children: [
                    track.artist,
                    " · ",
                    track.phase
                ]
            }, void 0, true, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 55,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Player.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
_c1 = TrackInfo;
function SeekBar({ currentTime, duration, onSeek }) {
    _s();
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [dragTime, setDragTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const timeFromEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SeekBar.useCallback[timeFromEvent]": (e)=>{
            const el = trackRef.current;
            if (!el || duration <= 0) return 0;
            const rect = el.getBoundingClientRect();
            const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
            return ratio * duration;
        }
    }["SeekBar.useCallback[timeFromEvent]"], [
        duration
    ]);
    const handlePointerDown = (e)=>{
        e.currentTarget.setPointerCapture(e.pointerId);
        setDragTime(timeFromEvent(e));
    };
    const handlePointerMove = (e)=>{
        if (dragTime === null) return;
        setDragTime(timeFromEvent(e));
    };
    const handlePointerUp = (e)=>{
        if (dragTime === null) return;
        onSeek(timeFromEvent(e));
        setDragTime(null);
    };
    const displayTime = dragTime ?? currentTime;
    const pct = duration > 0 ? Math.min(100, displayTime / duration * 100) : 0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: trackRef,
        className: "seek-track group relative flex h-6 w-full touch-none items-center",
        onPointerDown: handlePointerDown,
        onPointerMove: handlePointerMove,
        onPointerUp: handlePointerUp,
        role: "slider",
        tabIndex: 0,
        "aria-label": "Seek",
        "aria-valuemin": 0,
        "aria-valuemax": Math.round(duration),
        "aria-valuenow": Math.round(displayTime),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-[3px] w-full overflow-hidden rounded-full bg-white/15",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full rounded-full bg-gradient-to-r from-saffron via-sunset-gold to-saffron shadow-[0_0_10px_rgba(255,184,0,0.65)]",
                    style: {
                        width: `${pct}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/components/Player.tsx",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 116,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "seek-thumb pointer-events-none absolute h-3 w-3 -translate-x-1/2 rounded-full bg-sunset-gold shadow-[0_0_8px_rgba(255,184,0,0.9)]",
                style: {
                    left: `${pct}%`
                }
            }, void 0, false, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Player.tsx",
        lineNumber: 103,
        columnNumber: 5
    }, this);
}
_s(SeekBar, "qMaGYmWoM9u4GC2sBW4wQaWq+bU=");
_c2 = SeekBar;
function TimeDisplay({ elapsed, duration }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "shrink-0 text-[10.5px] tabular-nums text-white/60",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sunset-gold",
                children: formatTime(elapsed)
            }, void 0, false, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 133,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mx-0.5",
                children: "/"
            }, void 0, false, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            formatTime(duration)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Player.tsx",
        lineNumber: 132,
        columnNumber: 5
    }, this);
}
_c3 = TimeDisplay;
function PrevIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M6 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Zm13.2.2a1 1 0 0 1 .8.98v11.64a1 1 0 0 1-1.54.84L9.3 12.84a1 1 0 0 1 0-1.68l9.16-5.82a1 1 0 0 1 .74-.14Z"
        }, void 0, false, {
            fileName: "[project]/components/Player.tsx",
            lineNumber: 143,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Player.tsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
}
_c4 = PrevIcon;
function NextIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M18 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1ZM4.8 5.2a1 1 0 0 1 .74.14l9.16 5.82a1 1 0 0 1 0 1.68l-9.16 5.82a1 1 0 0 1-1.54-.84V6.18a1 1 0 0 1 .8-.98Z"
        }, void 0, false, {
            fileName: "[project]/components/Player.tsx",
            lineNumber: 150,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Player.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
_c5 = NextIcon;
function PlayIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M8 5.14v13.72a1 1 0 0 0 1.53.85l10.86-6.86a1 1 0 0 0 0-1.7L9.53 4.29A1 1 0 0 0 8 5.14Z"
        }, void 0, false, {
            fileName: "[project]/components/Player.tsx",
            lineNumber: 157,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Player.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_c6 = PlayIcon;
function PauseIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "20",
        height: "20",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7 5a1.5 1.5 0 0 0-1.5 1.5v11a1.5 1.5 0 0 0 3 0v-11A1.5 1.5 0 0 0 7 5Zm10 0a1.5 1.5 0 0 0-1.5 1.5v11a1.5 1.5 0 0 0 3 0v-11A1.5 1.5 0 0 0 17 5Z"
        }, void 0, false, {
            fileName: "[project]/components/Player.tsx",
            lineNumber: 164,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Player.tsx",
        lineNumber: 163,
        columnNumber: 5
    }, this);
}
_c7 = PauseIcon;
function TransportControls({ isPlaying, onPrev, onPlayPause, onNext }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center gap-2 sm:justify-end sm:gap-1.5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onPrev,
                "aria-label": "Previous track",
                className: "flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-sunset-gold sm:h-8 sm:w-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PrevIcon, {}, void 0, false, {
                    fileName: "[project]/components/Player.tsx",
                    lineNumber: 188,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 182,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onPlayPause,
                "aria-label": isPlaying ? "Pause" : "Play",
                className: "flex h-[52px] w-[52px] items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-rose-600 text-white shadow-[0_0_25px_rgba(255,119,0,0.5)] ring-1 ring-amber-200/40 transition-transform active:scale-95 sm:h-11 sm:w-11",
                children: isPlaying ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PauseIcon, {}, void 0, false, {
                    fileName: "[project]/components/Player.tsx",
                    lineNumber: 196,
                    columnNumber: 22
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlayIcon, {}, void 0, false, {
                    fileName: "[project]/components/Player.tsx",
                    lineNumber: 196,
                    columnNumber: 38
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 190,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: onNext,
                "aria-label": "Next track",
                className: "flex h-11 w-11 items-center justify-center rounded-full text-white/70 transition-colors hover:text-sunset-gold sm:h-8 sm:w-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NextIcon, {}, void 0, false, {
                    fileName: "[project]/components/Player.tsx",
                    lineNumber: 204,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 198,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Player.tsx",
        lineNumber: 181,
        columnNumber: 5
    }, this);
}
_c8 = TransportControls;
function PlaylistTabs({ activeIndex, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "no-scrollbar max-w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex w-max gap-1 rounded-full border border-amber-500/20 bg-black/40 p-1 backdrop-blur-xl",
            children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAYLISTS"].map((playlist, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    onClick: ()=>onSelect(i),
                    "aria-pressed": i === activeIndex,
                    className: `rounded-full px-2.5 py-1 text-center text-[10px] font-medium tracking-wide whitespace-nowrap transition-colors sm:text-[11px] ${i === activeIndex ? "bg-gradient-to-r from-saffron to-vermillion text-white shadow-[0_0_12px_rgba(255,119,0,0.5)]" : "text-white/60 hover:text-white/85"}`,
                    children: playlist.name
                }, playlist.id, false, {
                    fileName: "[project]/components/Player.tsx",
                    lineNumber: 221,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/Player.tsx",
            lineNumber: 219,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Player.tsx",
        lineNumber: 218,
        columnNumber: 5
    }, this);
}
_c9 = PlaylistTabs;
function Player() {
    _s1();
    const [playlistIndex, setPlaylistIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [trackIndex, setTrackIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [playerReady, setPlayerReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [currentTime, setCurrentTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAYLISTS"][0].tracks[0].duration);
    const videoContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ytPlayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const playlistIndexRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(playlistIndex);
    const isFirstLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Player.useEffect": ()=>{
            playlistIndexRef.current = playlistIndex;
        }
    }["Player.useEffect"], [
        playlistIndex
    ]);
    const currentTrack = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAYLISTS"][playlistIndex].tracks[trackIndex];
    const handleNext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Player.useCallback[handleNext]": ()=>{
            setTrackIndex({
                "Player.useCallback[handleNext]": (prev)=>{
                    const len = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAYLISTS"][playlistIndexRef.current].tracks.length;
                    return (prev + 1) % len;
                }
            }["Player.useCallback[handleNext]"]);
        }
    }["Player.useCallback[handleNext]"], []);
    const handlePrev = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Player.useCallback[handlePrev]": ()=>{
            const p = ytPlayerRef.current;
            if (p && p.getCurrentTime() > 3) {
                p.seekTo(0, true);
                setCurrentTime(0);
                return;
            }
            setTrackIndex({
                "Player.useCallback[handlePrev]": (prev)=>{
                    const len = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAYLISTS"][playlistIndexRef.current].tracks.length;
                    return (prev - 1 + len) % len;
                }
            }["Player.useCallback[handlePrev]"]);
        }
    }["Player.useCallback[handlePrev]"], []);
    const handleReady = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Player.useCallback[handleReady]": (event)=>{
            ytPlayerRef.current = event.target;
            setPlayerReady(true);
            const d = event.target.getDuration();
            if (Number.isFinite(d) && d > 0) setDuration(d);
        }
    }["Player.useCallback[handleReady]"], []);
    const handleStateChange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Player.useCallback[handleStateChange]": (event)=>{
            if (event.data === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$youtube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YT_PLAYER_STATE"].PLAYING) {
                setIsPlaying(true);
                const d = ytPlayerRef.current?.getDuration();
                if (d && Number.isFinite(d) && d > 0) setDuration(d);
            } else if (event.data === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$youtube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YT_PLAYER_STATE"].PAUSED) {
                setIsPlaying(false);
            } else if (event.data === __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$youtube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YT_PLAYER_STATE"].ENDED) {
                handleNext();
            }
        }
    }["Player.useCallback[handleStateChange]"], [
        handleNext
    ]);
    const handleErrorEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Player.useCallback[handleErrorEvent]": (event)=>{
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$vercel$2f$analytics$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["track"])("chhath_player_video_error", {
                code: event.data
            });
            handleNext();
        }
    }["Player.useCallback[handleErrorEvent]"], [
        handleNext
    ]);
    // Create the YT.Player exactly once. Track/playlist switches below use
    // loadVideoById on this same instance instead of recreating it.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Player.useEffect": ()=>{
            let cancelled = false;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$youtube$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadYouTubeIframeAPI"])().then({
                "Player.useEffect": (YT)=>{
                    if (cancelled || !videoContainerRef.current) return;
                    ytPlayerRef.current = new YT.Player(videoContainerRef.current, {
                        videoId: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$tracks$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PLAYLISTS"][0].tracks[0].videoId,
                        playerVars: {
                            autoplay: 0,
                            controls: 0,
                            disablekb: 1,
                            modestbranding: 1,
                            playsinline: 1,
                            rel: 0,
                            fs: 0,
                            iv_load_policy: 3
                        },
                        events: {
                            onReady: handleReady,
                            onStateChange: handleStateChange,
                            onError: handleErrorEvent
                        }
                    });
                }
            }["Player.useEffect"]);
            return ({
                "Player.useEffect": ()=>{
                    cancelled = true;
                    ytPlayerRef.current?.destroy();
                    ytPlayerRef.current = null;
                }
            })["Player.useEffect"];
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Player.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Player.useEffect": ()=>{
            if (!playerReady || !ytPlayerRef.current) return;
            if (isFirstLoad.current) {
                isFirstLoad.current = false;
                return;
            }
            ytPlayerRef.current.loadVideoById(currentTrack.videoId);
            setCurrentTime(0);
            setDuration(currentTrack.duration);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Player.useEffect"], [
        currentTrack.id,
        playerReady
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Player.useEffect": ()=>{
            if (!isPlaying) return;
            const id = setInterval({
                "Player.useEffect.id": ()=>{
                    const p = ytPlayerRef.current;
                    if (p) setCurrentTime(p.getCurrentTime());
                }
            }["Player.useEffect.id"], 250);
            return ({
                "Player.useEffect": ()=>clearInterval(id)
            })["Player.useEffect"];
        }
    }["Player.useEffect"], [
        isPlaying
    ]);
    const handlePlayPause = ()=>{
        const p = ytPlayerRef.current;
        if (!p) return;
        if (isPlaying) p.pauseVideo();
        else p.playVideo();
    };
    const handleSeek = (time)=>{
        ytPlayerRef.current?.seekTo(time, true);
        setCurrentTime(time);
    };
    const handlePlaylistSelect = (index)=>{
        setPlaylistIndex(index);
        setTrackIndex(0);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "safe-pb relative z-20 flex w-full max-w-xl flex-col items-center gap-3 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlaylistTabs, {
                activeIndex: playlistIndex,
                onSelect: handlePlaylistSelect
            }, void 0, false, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 384,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `player-grid w-full rounded-[26px] p-4 sm:rounded-full sm:p-3 sm:pr-5 ${GLASS}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "area-art",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(VinylArt, {
                            videoContainerRef: videoContainerRef,
                            isPlaying: isPlaying
                        }, void 0, false, {
                            fileName: "[project]/components/Player.tsx",
                            lineNumber: 390,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Player.tsx",
                        lineNumber: 389,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "area-title flex flex-col justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrackInfo, {
                            track: currentTrack
                        }, void 0, false, {
                            fileName: "[project]/components/Player.tsx",
                            lineNumber: 394,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Player.tsx",
                        lineNumber: 393,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "area-seek flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SeekBar, {
                            currentTime: currentTime,
                            duration: duration,
                            onSeek: handleSeek
                        }, void 0, false, {
                            fileName: "[project]/components/Player.tsx",
                            lineNumber: 398,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Player.tsx",
                        lineNumber: 397,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "area-meta flex items-center justify-start sm:justify-start",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TimeDisplay, {
                            elapsed: currentTime,
                            duration: duration
                        }, void 0, false, {
                            fileName: "[project]/components/Player.tsx",
                            lineNumber: 402,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Player.tsx",
                        lineNumber: 401,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "area-controls flex items-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TransportControls, {
                            isPlaying: isPlaying,
                            onPrev: handlePrev,
                            onPlayPause: handlePlayPause,
                            onNext: handleNext
                        }, void 0, false, {
                            fileName: "[project]/components/Player.tsx",
                            lineNumber: 406,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Player.tsx",
                        lineNumber: 405,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Player.tsx",
                lineNumber: 386,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/Player.tsx",
        lineNumber: 383,
        columnNumber: 5
    }, this);
}
_s1(Player, "NPZO/bFoZ9NIrdWNbYKvrTvIJLc=");
_c10 = Player;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "VinylArt");
__turbopack_context__.k.register(_c1, "TrackInfo");
__turbopack_context__.k.register(_c2, "SeekBar");
__turbopack_context__.k.register(_c3, "TimeDisplay");
__turbopack_context__.k.register(_c4, "PrevIcon");
__turbopack_context__.k.register(_c5, "NextIcon");
__turbopack_context__.k.register(_c6, "PlayIcon");
__turbopack_context__.k.register(_c7, "PauseIcon");
__turbopack_context__.k.register(_c8, "TransportControls");
__turbopack_context__.k.register(_c9, "PlaylistTabs");
__turbopack_context__.k.register(_c10, "Player");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ShareAmbient.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ShareAmbient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ambientAudio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/ambientAudio.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function WaveIcon({ active }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 12c2 0 2-3 4-3s2 3 4 3 2-3 4-3 2 3 4 3 2-3 4-3",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                opacity: active ? 1 : 0.6
            }, void 0, false, {
                fileName: "[project]/components/ShareAmbient.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M2 17c2 0 2-3 4-3s2 3 4 3 2-3 4-3 2 3 4 3 2-3 4-3",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                opacity: active ? 0.6 : 0.3
            }, void 0, false, {
                fileName: "[project]/components/ShareAmbient.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ShareAmbient.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = WaveIcon;
function ShareIcon() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        width: "15",
        height: "15",
        viewBox: "0 0 24 24",
        fill: "none",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "5",
                r: "3",
                stroke: "currentColor",
                strokeWidth: "1.8"
            }, void 0, false, {
                fileName: "[project]/components/ShareAmbient.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "6",
                cy: "12",
                r: "3",
                stroke: "currentColor",
                strokeWidth: "1.8"
            }, void 0, false, {
                fileName: "[project]/components/ShareAmbient.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "18",
                cy: "19",
                r: "3",
                stroke: "currentColor",
                strokeWidth: "1.8"
            }, void 0, false, {
                fileName: "[project]/components/ShareAmbient.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.6 10.5l6.8-4M8.6 13.5l6.8 4",
                stroke: "currentColor",
                strokeWidth: "1.8",
                strokeLinecap: "round"
            }, void 0, false, {
                fileName: "[project]/components/ShareAmbient.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ShareAmbient.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c1 = ShareIcon;
function ShareAmbient() {
    _s();
    const [ambienceOn, setAmbienceOn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [justCopied, setJustCopied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleShare = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShareAmbient.useCallback[handleShare]": async ()=>{
            const shareData = {
                title: "Chhath Ghat — Nostalgia Music & Atmosphere",
                text: "Sitting by the ghat with Chhath geet and diya light. Join in:",
                url: ("TURBOPACK compile-time truthy", 1) ? window.location.href : "TURBOPACK unreachable"
            };
            if (typeof navigator !== "undefined" && navigator.share) {
                try {
                    await navigator.share(shareData);
                    return;
                } catch  {
                    return;
                }
            }
            try {
                await navigator.clipboard.writeText(shareData.url);
                setJustCopied(true);
                setTimeout({
                    "ShareAmbient.useCallback[handleShare]": ()=>setJustCopied(false)
                }["ShareAmbient.useCallback[handleShare]"], 2000);
            } catch  {
            // clipboard unavailable; nothing more we can do here
            }
        }
    }["ShareAmbient.useCallback[handleShare]"], []);
    const toggleAmbience = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ShareAmbient.useCallback[toggleAmbience]": ()=>{
            setAmbienceOn({
                "ShareAmbient.useCallback[toggleAmbience]": (prev)=>{
                    const next = !prev;
                    if (next) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ambientAudio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startAmbience"])();
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$ambientAudio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stopAmbience"])();
                    }
                    return next;
                }
            }["ShareAmbient.useCallback[toggleAmbience]"]);
        }
    }["ShareAmbient.useCallback[toggleAmbience]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: toggleAmbience,
                "aria-pressed": ambienceOn,
                "aria-label": "Toggle ambient river sound and temple bell",
                className: `flex h-8 w-8 items-center justify-center rounded-full border transition-colors sm:h-9 sm:w-9 ${ambienceOn ? "border-sunset-gold/50 bg-saffron/25 text-sunset-gold" : "border-white/15 bg-black/30 text-white/70"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WaveIcon, {
                    active: ambienceOn
                }, void 0, false, {
                    fileName: "[project]/components/ShareAmbient.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ShareAmbient.tsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: handleShare,
                "aria-label": "Share this ghat",
                className: "relative flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-black/30 text-white/70 transition-colors hover:text-sunset-gold sm:h-9 sm:w-9",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShareIcon, {}, void 0, false, {
                        fileName: "[project]/components/ShareAmbient.tsx",
                        lineNumber: 105,
                        columnNumber: 9
                    }, this),
                    justCopied && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-full mt-1.5 whitespace-nowrap rounded bg-black/80 px-2 py-0.5 text-[10px] text-white/90",
                        children: "Link copied"
                    }, void 0, false, {
                        fileName: "[project]/components/ShareAmbient.tsx",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ShareAmbient.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ShareAmbient.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_s(ShareAmbient, "6ZNadX9QfRfsZsjiTSYMhxDZ/Ks=");
_c2 = ShareAmbient;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "WaveIcon");
__turbopack_context__.k.register(_c1, "ShareIcon");
__turbopack_context__.k.register(_c2, "ShareAmbient");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/ambientAudio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isAmbiencePlaying",
    ()=>isAmbiencePlaying,
    "startAmbience",
    ()=>startAmbience,
    "stopAmbience",
    ()=>stopAmbience
]);
/**
 * Distant Temple Bell & Water ambience — synthesized entirely with the Web Audio
 * API so the toggle needs no external audio asset (and can never 404 or violate
 * an embedding policy). River noise runs through a slow-modulated lowpass filter;
 * the bell is a struck-metal envelope fired at randomized, unhurried intervals.
 */ let ctx = null;
let masterGain = null;
let noiseSource = null;
let bellTimeoutId = null;
let running = false;
function ensureContext() {
    if (!ctx) {
        ctx = new AudioContext();
    }
    return ctx;
}
function buildRiverNoise(context, destination) {
    const bufferSeconds = 4;
    const buffer = context.createBuffer(2, context.sampleRate * bufferSeconds, context.sampleRate);
    for(let channel = 0; channel < buffer.numberOfChannels; channel++){
        const data = buffer.getChannelData(channel);
        let last = 0;
        for(let i = 0; i < data.length; i++){
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
function playBell(context, destination) {
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
    [
        1,
        2.4,
        3.8
    ].forEach((ratio, i)=>{
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
}
function scheduleNextBell(context, destination) {
    const delay = 7000 + Math.random() * 9000;
    bellTimeoutId = setTimeout(()=>{
        if (!running) return;
        playBell(context, destination);
        scheduleNextBell(context, destination);
    }, delay);
}
function startAmbience() {
    if (running) return;
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
    bellTimeoutId = setTimeout(()=>{
        if (!running) return;
        playBell(context, gain);
        scheduleNextBell(context, gain);
    }, 1800);
}
function stopAmbience() {
    if (!running) return;
    running = false;
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
    setTimeout(()=>{
        source?.stop();
        source?.disconnect();
    }, 700);
    noiseSource = null;
    masterGain = null;
}
function isAmbiencePlaying() {
    return running;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/tracks.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PLAYLISTS",
    ()=>PLAYLISTS
]);
const PLAYLISTS = [
    {
        id: "sandhya-arghya-classics",
        name: "Sandhya Arghya Classics",
        tracks: [
            {
                id: "sa-1",
                title: "Suruj Bhaile Bihaan",
                artist: "Sharda Sinha",
                phase: "Sandhya Arghya",
                year: 2019,
                duration: 300,
                videoId: "u2rkSu5LYbk"
            },
            {
                id: "sa-2",
                title: "Chhath Pooja Geet Special",
                artist: "Sharda Sinha",
                phase: "Sandhya Arghya",
                year: 2020,
                duration: 280,
                videoId: "B4WSHkT6moc"
            },
            {
                id: "sa-3",
                title: "Chhath Geet",
                artist: "Sharda Sinha",
                phase: "Sandhya Arghya",
                year: 2018,
                duration: 260,
                videoId: "cC4ORxmpUDQ"
            }
        ]
    },
    {
        id: "morning-usha-arghya",
        name: "Morning Usha Arghya",
        tracks: [
            {
                id: "ua-1",
                title: "Uga Hai Suraj Dev",
                artist: "Anuradha Paudwal",
                phase: "Usha Arghya",
                year: 2017,
                duration: 270,
                videoId: "6e6Hp6R5SVU"
            },
            {
                id: "ua-2",
                title: "Chhath Pooja Ke Geet",
                artist: "Anuradha Paudwal, Sharda Sinha",
                phase: "Usha Arghya",
                year: 2019,
                duration: 290,
                videoId: "CGQ-3EFVZfA"
            },
            {
                id: "ua-3",
                title: "Non Stop Chhath Pooja Geet",
                artist: "Sharda Sinha, Anuradha Paudwal",
                phase: "Usha Arghya",
                year: 2021,
                duration: 310,
                videoId: "GMQGZjFn6-4"
            }
        ]
    },
    {
        id: "nostalgic-folk-memories",
        name: "Nostalgic Folk Memories",
        tracks: [
            {
                id: "vf-1",
                title: "Pahile Pahil Chhathi Maiya",
                artist: "Sharda Sinha",
                phase: "Village Folk",
                year: 2016,
                duration: 240,
                videoId: "DG8F-csoRAQ"
            },
            {
                id: "vf-2",
                title: "Top Chhath Pooja Geet",
                artist: "Sharda Sinha, Anuradha Paudwal",
                phase: "Village Folk",
                year: 2020,
                duration: 300,
                videoId: "XE3Xw21GFPI"
            },
            {
                id: "vf-3",
                title: "Chhathi Maiya Chhath Pooja Geet",
                artist: "Sharda Sinha",
                phase: "Village Folk",
                year: 2018,
                duration: 260,
                videoId: "BsAFCc901MM"
            }
        ]
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/youtube.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "YT_PLAYER_STATE",
    ()=>YT_PLAYER_STATE,
    "loadYouTubeIframeAPI",
    ()=>loadYouTubeIframeAPI
]);
const YT_PLAYER_STATE = {
    UNSTARTED: -1,
    ENDED: 0,
    PLAYING: 1,
    PAUSED: 2,
    BUFFERING: 3,
    CUED: 5
};
let apiPromise = null;
function loadYouTubeIframeAPI() {
    if (apiPromise) return apiPromise;
    apiPromise = new Promise((resolve)=>{
        if (window.YT?.Player) {
            resolve(window.YT);
            return;
        }
        const previous = window.onYouTubeIframeAPIReady;
        window.onYouTubeIframeAPIReady = ()=>{
            previous?.();
            resolve(window.YT);
        };
        if (!document.getElementById("youtube-iframe-api")) {
            const tag = document.createElement("script");
            tag.id = "youtube-iframe-api";
            tag.src = "https://www.youtube.com/iframe_api";
            document.head.appendChild(tag);
        }
    });
    return apiPromise;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@vercel/analytics/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "computeRoute",
    ()=>computeRoute,
    "default",
    ()=>generic_default,
    "inject",
    ()=>inject,
    "pageview",
    ()=>pageview,
    "track",
    ()=>track
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// package.json
var name = "@vercel/analytics";
var version = "1.6.1";
// src/queue.ts
var initQueue = ()=>{
    if (window.va) return;
    window.va = function a(...params) {
        (window.vaq = window.vaq || []).push(params);
    };
};
// src/utils.ts
function isBrowser() {
    return typeof window !== "undefined";
}
function detectEnvironment() {
    try {
        const env = ("TURBOPACK compile-time value", "development");
        if ("TURBOPACK compile-time truthy", 1) {
            return "development";
        }
    } catch (e) {}
    return "production";
}
function setMode(mode = "auto") {
    if (mode === "auto") {
        window.vam = detectEnvironment();
        return;
    }
    window.vam = mode;
}
function getMode() {
    const mode = isBrowser() ? window.vam : detectEnvironment();
    return mode || "production";
}
function isProduction() {
    return getMode() === "production";
}
function isDevelopment() {
    return getMode() === "development";
}
function removeKey(key, { [key]: _, ...rest }) {
    return rest;
}
function parseProperties(properties, options) {
    if (!properties) return void 0;
    let props = properties;
    const errorProperties = [];
    for (const [key, value] of Object.entries(properties)){
        if (typeof value === "object" && value !== null) {
            if (options.strip) {
                props = removeKey(key, props);
            } else {
                errorProperties.push(key);
            }
        }
    }
    if (errorProperties.length > 0 && !options.strip) {
        throw Error(`The following properties are not valid: ${errorProperties.join(", ")}. Only strings, numbers, booleans, and null are allowed.`);
    }
    return props;
}
function computeRoute(pathname, pathParams) {
    if (!pathname || !pathParams) {
        return pathname;
    }
    let result = pathname;
    try {
        const entries = Object.entries(pathParams);
        for (const [key, value] of entries){
            if (!Array.isArray(value)) {
                const matcher = turnValueToRegExp(value);
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[${key}]`);
                }
            }
        }
        for (const [key, value] of entries){
            if (Array.isArray(value)) {
                const matcher = turnValueToRegExp(value.join("/"));
                if (matcher.test(result)) {
                    result = result.replace(matcher, `/[...${key}]`);
                }
            }
        }
        return result;
    } catch (e) {
        return pathname;
    }
}
function turnValueToRegExp(value) {
    return new RegExp(`/${escapeRegExp(value)}(?=[/?#]|$)`);
}
function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function getScriptSrc(props) {
    if (props.scriptSrc) {
        return props.scriptSrc;
    }
    if (isDevelopment()) {
        return "https://va.vercel-scripts.com/v1/script.debug.js";
    }
    if (props.basePath) {
        return `${props.basePath}/insights/script.js`;
    }
    return "/_vercel/insights/script.js";
}
// src/generic.ts
function inject(props = {
    debug: true
}) {
    var _a;
    if (!isBrowser()) return;
    setMode(props.mode);
    initQueue();
    if (props.beforeSend) {
        (_a = window.va) == null ? void 0 : _a.call(window, "beforeSend", props.beforeSend);
    }
    const src = getScriptSrc(props);
    if (document.head.querySelector(`script[src*="${src}"]`)) return;
    const script = document.createElement("script");
    script.src = src;
    script.defer = true;
    script.dataset.sdkn = name + (props.framework ? `/${props.framework}` : "");
    script.dataset.sdkv = version;
    if (props.disableAutoTrack) {
        script.dataset.disableAutoTrack = "1";
    }
    if (props.endpoint) {
        script.dataset.endpoint = props.endpoint;
    } else if (props.basePath) {
        script.dataset.endpoint = `${props.basePath}/insights`;
    }
    if (props.dsn) {
        script.dataset.dsn = props.dsn;
    }
    script.onerror = ()=>{
        const errorMessage = isDevelopment() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
        console.log(`[Vercel Web Analytics] Failed to load script from ${src}. ${errorMessage}`);
    };
    if (isDevelopment() && props.debug === false) {
        script.dataset.debug = "false";
    }
    document.head.appendChild(script);
}
function track(name2, properties, options) {
    var _a, _b;
    if (!isBrowser()) {
        const msg = "[Vercel Web Analytics] Please import `track` from `@vercel/analytics/server` when using this function in a server environment";
        if (isProduction()) {
            console.warn(msg);
        } else {
            throw new Error(msg);
        }
        return;
    }
    if (!properties) {
        (_a = window.va) == null ? void 0 : _a.call(window, "event", {
            name: name2,
            options
        });
        return;
    }
    try {
        const props = parseProperties(properties, {
            strip: isProduction()
        });
        (_b = window.va) == null ? void 0 : _b.call(window, "event", {
            name: name2,
            data: props,
            options
        });
    } catch (err) {
        if (err instanceof Error && isDevelopment()) {
            console.error(err);
        }
    }
}
function pageview({ route, path }) {
    var _a;
    (_a = window.va) == null ? void 0 : _a.call(window, "pageview", {
        route,
        path
    });
}
var generic_default = {
    inject,
    track,
    computeRoute
};
;
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_0taccws._.js.map