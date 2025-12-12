try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "5187a8dc-44a0-49e6-9cec-566356aa589e", e._sentryDebugIdIdentifier = "sentry-dbid-5187a8dc-44a0-49e6-9cec-566356aa589e")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [20055], {
        20055: (e, a, t) => {
            t.r(a), t.d(a, {
                List: () => H
            });
            var r = t(53163),
                l = t(83455);
            let n = new Map([
                ["bold", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M228,128a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,128ZM40,76H216a12,12,0,0,0,0-24H40a12,12,0,0,0,0,24ZM216,180H40a12,12,0,0,0,0,24H216a12,12,0,0,0,0-24Z"
                }))],
                ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M216,64V192H40V64Z",
                    opacity: "0.2"
                }), r.createElement("path", {
                    d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
                }))],
                ["fill", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM192,184H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z"
                }))],
                ["light", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M222,128a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,128ZM40,70H216a6,6,0,0,0,0-12H40a6,6,0,0,0,0,12ZM216,186H40a6,6,0,0,0,0,12H216a6,6,0,0,0,0-12Z"
                }))],
                ["regular", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"
                }))],
                ["thin", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M220,128a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,128ZM40,68H216a4,4,0,0,0,0-8H40a4,4,0,0,0,0,8ZM216,188H40a4,4,0,0,0,0,8H216a4,4,0,0,0,0-8Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                c = Object.getOwnPropertyDescriptors,
                d = Object.getOwnPropertySymbols,
                s = Object.prototype.hasOwnProperty,
                f = Object.prototype.propertyIsEnumerable,
                p = (e, a, t) => a in e ? o(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t;
            let H = (0, r.forwardRef)((e, a) => r.createElement(l.A, i(((e, a) => {
                for (var t in a || (a = {})) s.call(a, t) && p(e, t, a[t]);
                if (d)
                    for (var t of d(a)) f.call(a, t) && p(e, t, a[t]);
                return e
            })({
                ref: a
            }, e), c({
                weights: n
            }))));
            H.displayName = "List"
        },
        83455: (e, a, t) => {
            t.d(a, {
                A: () => s
            });
            var r = t(53163),
                l = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                c = (e, a, t) => a in e ? l(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t;
            let d = (0, r.forwardRef)((e, a) => {
                let {
                    alt: t,
                    color: l = "currentColor",
                    size: d = "1em",
                    weight: s = "regular",
                    mirrored: f = !1,
                    children: p,
                    weights: H
                } = e, m = ((e, a) => {
                    var t = {};
                    for (var r in e) o.call(e, r) && 0 > a.indexOf(r) && (t[r] = e[r]);
                    if (null != e && n)
                        for (var r of n(e)) 0 > a.indexOf(r) && i.call(e, r) && (t[r] = e[r]);
                    return t
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return r.createElement("svg", ((e, a) => {
                    for (var t in a || (a = {})) o.call(a, t) && c(e, t, a[t]);
                    if (n)
                        for (var t of n(a)) i.call(a, t) && c(e, t, a[t]);
                    return e
                })({
                    ref: a,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: d,
                    height: d,
                    fill: l,
                    viewBox: "0 0 256 256",
                    transform: f ? "scale(-1, 1)" : void 0
                }, m), !!t && r.createElement("title", null, t), p, H.get(s))
            });
            d.displayName = "SSRBase";
            let s = d
        }
    }
]);