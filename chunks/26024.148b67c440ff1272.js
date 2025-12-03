try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "435b5a6f-468d-4305-a800-dc738c22e3f9", e._sentryDebugIdIdentifier = "sentry-dbid-435b5a6f-468d-4305-a800-dc738c22e3f9")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [26024], {
        10863: (e, t, r) => {
            r.d(t, {
                A: () => f
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
            let d = (0, l.forwardRef)((e, t) => {
                let {
                    alt: r,
                    color: a = "currentColor",
                    size: d = "1em",
                    weight: f = "regular",
                    mirrored: p = !1,
                    children: s,
                    weights: u
                } = e, m = ((e, t) => {
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
                    width: d,
                    height: d,
                    fill: a,
                    viewBox: "0 0 256 256",
                    transform: p ? "scale(-1, 1)" : void 0
                }, m), !!r && l.createElement("title", null, r), s, u.get(f))
            });
            d.displayName = "SSRBase";
            let f = d
        },
        26024: (e, t, r) => {
            r.r(t), r.d(t, {
                ArrowDown: () => u
            });
            var l = r(90337),
                a = r(10863);
            let n = new Map([
                ["bold", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M208.49,152.49l-72,72a12,12,0,0,1-17,0l-72-72a12,12,0,0,1,17-17L116,187V40a12,12,0,0,1,24,0V187l51.51-51.52a12,12,0,0,1,17,17Z"
                }))],
                ["duotone", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M200,144l-72,72L56,144Z",
                    opacity: "0.2"
                }), l.createElement("path", {
                    d: "M207.39,140.94A8,8,0,0,0,200,136H136V40a8,8,0,0,0-16,0v96H56a8,8,0,0,0-5.66,13.66l72,72a8,8,0,0,0,11.32,0l72-72A8,8,0,0,0,207.39,140.94ZM128,204.69,75.31,152H180.69Z"
                }))],
                ["fill", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72A8,8,0,0,1,56,136h64V40a8,8,0,0,1,16,0v96h64a8,8,0,0,1,5.66,13.66Z"
                }))],
                ["light", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M204.24,148.24l-72,72a6,6,0,0,1-8.48,0l-72-72a6,6,0,0,1,8.48-8.48L122,201.51V40a6,6,0,0,1,12,0V201.51l61.76-61.75a6,6,0,0,1,8.48,8.48Z"
                }))],
                ["regular", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M205.66,149.66l-72,72a8,8,0,0,1-11.32,0l-72-72a8,8,0,0,1,11.32-11.32L120,196.69V40a8,8,0,0,1,16,0V196.69l58.34-58.35a8,8,0,0,1,11.32,11.32Z"
                }))],
                ["thin", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M202.83,146.83l-72,72a4,4,0,0,1-5.66,0l-72-72a4,4,0,0,1,5.66-5.66L124,206.34V40a4,4,0,0,1,8,0V206.34l65.17-65.17a4,4,0,0,1,5.66,5.66Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                c = Object.getOwnPropertyDescriptors,
                d = Object.getOwnPropertySymbols,
                f = Object.prototype.hasOwnProperty,
                p = Object.prototype.propertyIsEnumerable,
                s = (e, t, r) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r;
            let u = (0, l.forwardRef)((e, t) => l.createElement(a.A, i(((e, t) => {
                for (var r in t || (t = {})) f.call(t, r) && s(e, r, t[r]);
                if (d)
                    for (var r of d(t)) p.call(t, r) && s(e, r, t[r]);
                return e
            })({
                ref: t
            }, e), c({
                weights: n
            }))));
            u.displayName = "ArrowDown"
        }
    }
]);