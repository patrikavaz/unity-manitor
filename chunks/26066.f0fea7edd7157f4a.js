try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e203bba9-363c-4602-95c5-f04d16b3d3c0", e._sentryDebugIdIdentifier = "sentry-dbid-e203bba9-363c-4602-95c5-f04d16b3d3c0")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [26066], {
        26066: (e, t, r) => {
            r.r(t), r.d(t, {
                MagnifyingGlass: () => b
            });
            var a = r(53163),
                l = r(83455);
            let n = new Map([
                ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z"
                }))],
                ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M192,112a80,80,0,1,1-80-80A80,80,0,0,1,192,112Z",
                    opacity: "0.2"
                }), a.createElement("path", {
                    d: "M229.66,218.34,179.6,168.28a88.21,88.21,0,1,0-11.32,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                }))],
                ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M168,112a56,56,0,1,1-56-56A56,56,0,0,1,168,112Zm61.66,117.66a8,8,0,0,1-11.32,0l-50.06-50.07a88,88,0,1,1,11.32-11.31l50.06,50.06A8,8,0,0,1,229.66,229.66ZM112,184a72,72,0,1,0-72-72A72.08,72.08,0,0,0,112,184Z"
                }))],
                ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M228.24,219.76l-51.38-51.38a86.15,86.15,0,1,0-8.48,8.48l51.38,51.38a6,6,0,0,0,8.48-8.48ZM38,112a74,74,0,1,1,74,74A74.09,74.09,0,0,1,38,112Z"
                }))],
                ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                }))],
                ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M226.83,221.17l-52.7-52.7a84.1,84.1,0,1,0-5.66,5.66l52.7,52.7a4,4,0,0,0,5.66-5.66ZM36,112a76,76,0,1,1,76,76A76.08,76.08,0,0,1,36,112Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                c = Object.getOwnPropertyDescriptors,
                d = Object.getOwnPropertySymbols,
                f = Object.prototype.hasOwnProperty,
                s = Object.prototype.propertyIsEnumerable,
                p = (e, t, r) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r;
            let b = (0, a.forwardRef)((e, t) => a.createElement(l.A, i(((e, t) => {
                for (var r in t || (t = {})) f.call(t, r) && p(e, r, t[r]);
                if (d)
                    for (var r of d(t)) s.call(t, r) && p(e, r, t[r]);
                return e
            })({
                ref: t
            }, e), c({
                weights: n
            }))));
            b.displayName = "MagnifyingGlass"
        },
        83455: (e, t, r) => {
            r.d(t, {
                A: () => f
            });
            var a = r(53163),
                l = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                c = (e, t, r) => t in e ? l(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r;
            let d = (0, a.forwardRef)((e, t) => {
                let {
                    alt: r,
                    color: l = "currentColor",
                    size: d = "1em",
                    weight: f = "regular",
                    mirrored: s = !1,
                    children: p,
                    weights: b
                } = e, g = ((e, t) => {
                    var r = {};
                    for (var a in e) o.call(e, a) && 0 > t.indexOf(a) && (r[a] = e[a]);
                    if (null != e && n)
                        for (var a of n(e)) 0 > t.indexOf(a) && i.call(e, a) && (r[a] = e[a]);
                    return r
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return a.createElement("svg", ((e, t) => {
                    for (var r in t || (t = {})) o.call(t, r) && c(e, r, t[r]);
                    if (n)
                        for (var r of n(t)) i.call(t, r) && c(e, r, t[r]);
                    return e
                })({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: d,
                    height: d,
                    fill: l,
                    viewBox: "0 0 256 256",
                    transform: s ? "scale(-1, 1)" : void 0
                }, g), !!r && a.createElement("title", null, r), p, b.get(f))
            });
            d.displayName = "SSRBase";
            let f = d
        }
    }
]);