try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "2eb67821-bcdc-4905-9670-d3c13ad6d863", e._sentryDebugIdIdentifier = "sentry-dbid-2eb67821-bcdc-4905-9670-d3c13ad6d863")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [45692], {
        45692: (e, a, t) => {
            t.r(a), t.d(a, {
                Lifebuoy: () => s
            });
            var l = t(7787),
                r = t(84376);
            let n = new Map([
                ["bold", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm44.25,135.28a51.89,51.89,0,0,0,0-54.56l23-23a83.84,83.84,0,0,1,0,100.56ZM100,128a28,28,0,1,1,28,28A28,28,0,0,1,100,128Zm78.28-67.25-23,23a51.89,51.89,0,0,0-54.56,0l-23-23a83.84,83.84,0,0,1,100.56,0Zm-117.53,17,23,23a51.89,51.89,0,0,0,0,54.56l-23,23a83.84,83.84,0,0,1,0-100.56Zm17,117.53,23-23a51.89,51.89,0,0,0,54.56,0l23,23a83.84,83.84,0,0,1-100.56,0Z"
                }))],
                ["duotone", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M195.88,195.88l-39.6-39.6a40,40,0,0,0,0-56.56l39.6-39.6A96,96,0,0,1,195.88,195.88ZM60.12,60.12a96,96,0,0,0,0,135.76l39.6-39.6a40,40,0,0,1,0-56.56Z",
                    opacity: "0.2"
                }), l.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.1,131.79a47.84,47.84,0,0,0,0-55.58l28.5-28.49a87.83,87.83,0,0,1,0,112.56ZM96,128a32,32,0,1,1,32,32A32,32,0,0,1,96,128Zm88.28-67.6L155.79,88.9a47.84,47.84,0,0,0-55.58,0L71.72,60.4a87.83,87.83,0,0,1,112.56,0ZM60.4,71.72l28.5,28.49a47.84,47.84,0,0,0,0,55.58L60.4,184.28a87.83,87.83,0,0,1,0-112.56ZM71.72,195.6l28.49-28.5a47.84,47.84,0,0,0,55.58,0l28.49,28.5a87.83,87.83,0,0,1-112.56,0Z"
                }))],
                ["fill", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM96,128a32,32,0,1,1,32,32A32,32,0,0,1,96,128Zm88.28-67.6L155.79,88.9a47.84,47.84,0,0,0-55.58,0L71.72,60.4a87.83,87.83,0,0,1,112.56,0ZM71.72,195.6l28.49-28.5a47.84,47.84,0,0,0,55.58,0l28.49,28.5a87.83,87.83,0,0,1-112.56,0Z"
                }))],
                ["light", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm36.47,130a45.87,45.87,0,0,0,0-56l31.24-31.23a89.81,89.81,0,0,1,0,118.44ZM94,128a34,34,0,1,1,34,34A34,34,0,0,1,94,128Zm93.22-67.71L156,91.53a45.87,45.87,0,0,0-56,0L68.78,60.29a89.81,89.81,0,0,1,118.44,0ZM60.29,68.78,91.53,100a45.87,45.87,0,0,0,0,56L60.29,187.22a89.81,89.81,0,0,1,0-118.44Zm8.49,126.93L100,164.47a45.87,45.87,0,0,0,56,0l31.23,31.24a89.81,89.81,0,0,1-118.44,0Z"
                }))],
                ["regular", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.1,131.79a47.84,47.84,0,0,0,0-55.58l28.5-28.49a87.83,87.83,0,0,1,0,112.56ZM96,128a32,32,0,1,1,32,32A32,32,0,0,1,96,128Zm88.28-67.6L155.79,88.9a47.84,47.84,0,0,0-55.58,0L71.72,60.4a87.83,87.83,0,0,1,112.56,0ZM60.4,71.72l28.5,28.49a47.84,47.84,0,0,0,0,55.58L60.4,184.28a87.83,87.83,0,0,1,0-112.56ZM71.72,195.6l28.49-28.5a47.84,47.84,0,0,0,55.58,0l28.49,28.5a87.83,87.83,0,0,1-112.56,0Z"
                }))],
                ["thin", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm67.79,162.13-34-34a43.92,43.92,0,0,0,0-56.28l34-34a91.83,91.83,0,0,1,0,124.26ZM92,128a36,36,0,1,1,36,36A36,36,0,0,1,92,128Zm98.13-67.79-34,34a43.92,43.92,0,0,0-56.28,0l-34-34a91.83,91.83,0,0,1,124.26,0ZM60.21,65.87l34,34a43.92,43.92,0,0,0,0,56.28l-34,34a91.83,91.83,0,0,1,0-124.26Zm5.66,129.92,34-34a43.92,43.92,0,0,0,56.28,0l34,34a91.83,91.83,0,0,1-124.26,0Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                c = Object.getOwnPropertyDescriptors,
                d = Object.getOwnPropertySymbols,
                m = Object.prototype.hasOwnProperty,
                f = Object.prototype.propertyIsEnumerable,
                p = (e, a, t) => a in e ? o(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t;
            let s = (0, l.forwardRef)((e, a) => l.createElement(r.A, i(((e, a) => {
                for (var t in a || (a = {})) m.call(a, t) && p(e, t, a[t]);
                if (d)
                    for (var t of d(a)) f.call(a, t) && p(e, t, a[t]);
                return e
            })({
                ref: a
            }, e), c({
                weights: n
            }))));
            s.displayName = "Lifebuoy"
        },
        84376: (e, a, t) => {
            t.d(a, {
                A: () => m
            });
            var l = t(7787),
                r = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                c = (e, a, t) => a in e ? r(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t;
            let d = (0, l.forwardRef)((e, a) => {
                let {
                    alt: t,
                    color: r = "currentColor",
                    size: d = "1em",
                    weight: m = "regular",
                    mirrored: f = !1,
                    children: p,
                    weights: s
                } = e, b = ((e, a) => {
                    var t = {};
                    for (var l in e) o.call(e, l) && 0 > a.indexOf(l) && (t[l] = e[l]);
                    if (null != e && n)
                        for (var l of n(e)) 0 > a.indexOf(l) && i.call(e, l) && (t[l] = e[l]);
                    return t
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return l.createElement("svg", ((e, a) => {
                    for (var t in a || (a = {})) o.call(a, t) && c(e, t, a[t]);
                    if (n)
                        for (var t of n(a)) i.call(a, t) && c(e, t, a[t]);
                    return e
                })({
                    ref: a,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: d,
                    height: d,
                    fill: r,
                    viewBox: "0 0 256 256",
                    transform: f ? "scale(-1, 1)" : void 0
                }, b), !!t && l.createElement("title", null, t), p, s.get(m))
            });
            d.displayName = "SSRBase";
            let m = d
        }
    }
]);