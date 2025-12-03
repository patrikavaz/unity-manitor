try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "251d5ef5-bb61-40d1-8cf2-a747e5f6741f", e._sentryDebugIdIdentifier = "sentry-dbid-251d5ef5-bb61-40d1-8cf2-a747e5f6741f")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [95180], {
        10863: (e, t, r) => {
            r.d(t, {
                A: () => d
            });
            var l = r(90337),
                a = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                c = (e, t, r) => t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r;
            let f = (0, l.forwardRef)((e, t) => {
                let {
                    alt: r,
                    color: a = "currentColor",
                    size: f = "1em",
                    weight: d = "regular",
                    mirrored: p = !1,
                    children: s,
                    weights: b
                } = e, u = ((e, t) => {
                    var r = {};
                    for (var l in e) o.call(e, l) && 0 > t.indexOf(l) && (r[l] = e[l]);
                    if (null != e && n)
                        for (var l of n(e)) 0 > t.indexOf(l) && i.call(e, l) && (r[l] = e[l]);
                    return r
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return l.createElement("svg", ((e, t) => {
                    for (var r in t || (t = {})) o.call(t, r) && c(e, r, t[r]);
                    if (n)
                        for (var r of n(t)) i.call(t, r) && c(e, r, t[r]);
                    return e
                })({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: f,
                    height: f,
                    fill: a,
                    viewBox: "0 0 256 256",
                    transform: p ? "scale(-1, 1)" : void 0
                }, u), !!r && l.createElement("title", null, r), s, b.get(d))
            });
            f.displayName = "SSRBase";
            let d = f
        },
        95180: (e, t, r) => {
            r.r(t), r.d(t, {
                ArrowRight: () => b
            });
            var l = r(90337),
                a = r(10863);
            let n = new Map([
                ["bold", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
                }))],
                ["duotone", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M216,128l-72,72V56Z",
                    opacity: "0.2"
                }), l.createElement("path", {
                    d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"
                }))],
                ["fill", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"
                }))],
                ["light", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"
                }))],
                ["regular", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                }))],
                ["thin", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                c = Object.getOwnPropertyDescriptors,
                f = Object.getOwnPropertySymbols,
                d = Object.prototype.hasOwnProperty,
                p = Object.prototype.propertyIsEnumerable,
                s = (e, t, r) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r;
            let b = (0, l.forwardRef)((e, t) => l.createElement(a.A, i(((e, t) => {
                for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
                if (f)
                    for (var r of f(t)) p.call(t, r) && s(e, r, t[r]);
                return e
            })({
                ref: t
            }, e), c({
                weights: n
            }))));
            b.displayName = "ArrowRight"
        }
    }
]);