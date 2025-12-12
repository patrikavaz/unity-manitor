try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "512985c6-6781-4952-838e-1ae5268ed42d", e._sentryDebugIdIdentifier = "sentry-dbid-512985c6-6781-4952-838e-1ae5268ed42d")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [82159], {
        54757: (e, t, l) => {
            l.d(t, {
                A: () => f
            });
            var a = l(11698),
                r = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                c = (e, t, l) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : e[t] = l;
            let d = (0, a.forwardRef)((e, t) => {
                let {
                    alt: l,
                    color: r = "currentColor",
                    size: d = "1em",
                    weight: f = "regular",
                    mirrored: p = !1,
                    children: s,
                    weights: m
                } = e, u = ((e, t) => {
                    var l = {};
                    for (var a in e) o.call(e, a) && 0 > t.indexOf(a) && (l[a] = e[a]);
                    if (null != e && n)
                        for (var a of n(e)) 0 > t.indexOf(a) && i.call(e, a) && (l[a] = e[a]);
                    return l
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return a.createElement("svg", ((e, t) => {
                    for (var l in t || (t = {})) o.call(t, l) && c(e, l, t[l]);
                    if (n)
                        for (var l of n(t)) i.call(t, l) && c(e, l, t[l]);
                    return e
                })({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: d,
                    height: d,
                    fill: r,
                    viewBox: "0 0 256 256",
                    transform: p ? "scale(-1, 1)" : void 0
                }, u), !!l && a.createElement("title", null, l), s, m.get(f))
            });
            d.displayName = "SSRBase";
            let f = d
        },
        82159: (e, t, l) => {
            l.r(t), l.d(t, {
                Diamond: () => m
            });
            var a = l(11698),
                r = l(54757);
            let n = new Map([
                ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M238.16,113.89,142.1,17.83a20,20,0,0,0-28.21,0l-96,96.06a20,20,0,0,0,0,28.22l96.05,96.06h0a20,20,0,0,0,28.21,0l96-96.06a20,20,0,0,0,0-28.22ZM128,218.33,37.68,128,128,37.67,218.32,128Z"
                }))],
                ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M229.67,133.62l-96,96a7.94,7.94,0,0,1-11.24,0l-96-96a7.94,7.94,0,0,1,0-11.24l96.05-96a7.94,7.94,0,0,1,11.24,0l96,96.05A7.94,7.94,0,0,1,229.67,133.62Z",
                    opacity: "0.2"
                }), a.createElement("path", {
                    d: "M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM128,224h0L32,128,128,32,224,128Z"
                }))],
                ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M240,128a15.85,15.85,0,0,1-4.67,11.28l-96.05,96.06a16,16,0,0,1-22.56,0h0l-96-96.06a16,16,0,0,1,0-22.56l96.05-96.06a16,16,0,0,1,22.56,0l96.05,96.06A15.85,15.85,0,0,1,240,128Z"
                }))],
                ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M233.92,118.14,137.86,22.08a14,14,0,0,0-19.72,0L22.08,118.14a14,14,0,0,0,0,19.72l96.06,96.06h0a14,14,0,0,0,19.72,0l96-96.06a13.94,13.94,0,0,0,0-19.72Zm-8.49,11.24-96.05,96.06a2,2,0,0,1-2.76,0L30.57,129.38a2,2,0,0,1,0-2.76l96.05-96.06a2,2,0,0,1,2.76,0l96.05,96.06a2,2,0,0,1,0,2.76Z"
                }))],
                ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM128,224h0L32,128,128,32,224,128Z"
                }))],
                ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M232.5,119.55,136.45,23.49a12,12,0,0,0-16.9,0l-96,96.06a12,12,0,0,0,0,16.9l96.05,96.06a12,12,0,0,0,16.9,0l96.05-96.06a12,12,0,0,0,0-16.9Zm-5.66,11.24-96.05,96.06a4,4,0,0,1-5.58,0l-96-96.06a3.94,3.94,0,0,1,0-5.58l96.05-96.06a4,4,0,0,1,5.58,0l96.05,96.06a3.94,3.94,0,0,1,0,5.58Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                c = Object.getOwnPropertyDescriptors,
                d = Object.getOwnPropertySymbols,
                f = Object.prototype.hasOwnProperty,
                p = Object.prototype.propertyIsEnumerable,
                s = (e, t, l) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : e[t] = l;
            let m = (0, a.forwardRef)((e, t) => a.createElement(r.A, i(((e, t) => {
                for (var l in t || (t = {})) f.call(t, l) && s(e, l, t[l]);
                if (d)
                    for (var l of d(t)) p.call(t, l) && s(e, l, t[l]);
                return e
            })({
                ref: t
            }, e), c({
                weights: n
            }))));
            m.displayName = "Diamond"
        }
    }
]);