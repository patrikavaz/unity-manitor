try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "cf3924d6-a624-4437-926a-fb43e4d5a002", e._sentryDebugIdIdentifier = "sentry-dbid-cf3924d6-a624-4437-926a-fb43e4d5a002")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [84366], {
        83455: (e, t, a) => {
            a.d(t, {
                A: () => f
            });
            var l = a(53163),
                r = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                c = (e, t, a) => t in e ? r(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a;
            let d = (0, l.forwardRef)((e, t) => {
                let {
                    alt: a,
                    color: r = "currentColor",
                    size: d = "1em",
                    weight: f = "regular",
                    mirrored: p = !1,
                    children: s,
                    weights: m
                } = e, u = ((e, t) => {
                    var a = {};
                    for (var l in e) o.call(e, l) && 0 > t.indexOf(l) && (a[l] = e[l]);
                    if (null != e && n)
                        for (var l of n(e)) 0 > t.indexOf(l) && i.call(e, l) && (a[l] = e[l]);
                    return a
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return l.createElement("svg", ((e, t) => {
                    for (var a in t || (t = {})) o.call(t, a) && c(e, a, t[a]);
                    if (n)
                        for (var a of n(t)) i.call(t, a) && c(e, a, t[a]);
                    return e
                })({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: d,
                    height: d,
                    fill: r,
                    viewBox: "0 0 256 256",
                    transform: p ? "scale(-1, 1)" : void 0
                }, u), !!a && l.createElement("title", null, a), s, m.get(f))
            });
            d.displayName = "SSRBase";
            let f = d
        },
        84366: (e, t, a) => {
            a.r(t), a.d(t, {
                Diamond: () => m
            });
            var l = a(53163),
                r = a(83455);
            let n = new Map([
                ["bold", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M238.16,113.89,142.1,17.83a20,20,0,0,0-28.21,0l-96,96.06a20,20,0,0,0,0,28.22l96.05,96.06h0a20,20,0,0,0,28.21,0l96-96.06a20,20,0,0,0,0-28.22ZM128,218.33,37.68,128,128,37.67,218.32,128Z"
                }))],
                ["duotone", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M229.67,133.62l-96,96a7.94,7.94,0,0,1-11.24,0l-96-96a7.94,7.94,0,0,1,0-11.24l96.05-96a7.94,7.94,0,0,1,11.24,0l96,96.05A7.94,7.94,0,0,1,229.67,133.62Z",
                    opacity: "0.2"
                }), l.createElement("path", {
                    d: "M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM128,224h0L32,128,128,32,224,128Z"
                }))],
                ["fill", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M240,128a15.85,15.85,0,0,1-4.67,11.28l-96.05,96.06a16,16,0,0,1-22.56,0h0l-96-96.06a16,16,0,0,1,0-22.56l96.05-96.06a16,16,0,0,1,22.56,0l96.05,96.06A15.85,15.85,0,0,1,240,128Z"
                }))],
                ["light", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M233.92,118.14,137.86,22.08a14,14,0,0,0-19.72,0L22.08,118.14a14,14,0,0,0,0,19.72l96.06,96.06h0a14,14,0,0,0,19.72,0l96-96.06a13.94,13.94,0,0,0,0-19.72Zm-8.49,11.24-96.05,96.06a2,2,0,0,1-2.76,0L30.57,129.38a2,2,0,0,1,0-2.76l96.05-96.06a2,2,0,0,1,2.76,0l96.05,96.06a2,2,0,0,1,0,2.76Z"
                }))],
                ["regular", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M235.33,116.72,139.28,20.66a16,16,0,0,0-22.56,0l-96,96.06a16,16,0,0,0,0,22.56l96.05,96.06h0a16,16,0,0,0,22.56,0l96.05-96.06a16,16,0,0,0,0-22.56ZM128,224h0L32,128,128,32,224,128Z"
                }))],
                ["thin", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M232.5,119.55,136.45,23.49a12,12,0,0,0-16.9,0l-96,96.06a12,12,0,0,0,0,16.9l96.05,96.06a12,12,0,0,0,16.9,0l96.05-96.06a12,12,0,0,0,0-16.9Zm-5.66,11.24-96.05,96.06a4,4,0,0,1-5.58,0l-96-96.06a3.94,3.94,0,0,1,0-5.58l96.05-96.06a4,4,0,0,1,5.58,0l96.05,96.06a3.94,3.94,0,0,1,0,5.58Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                c = Object.getOwnPropertyDescriptors,
                d = Object.getOwnPropertySymbols,
                f = Object.prototype.hasOwnProperty,
                p = Object.prototype.propertyIsEnumerable,
                s = (e, t, a) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a;
            let m = (0, l.forwardRef)((e, t) => l.createElement(r.A, i(((e, t) => {
                for (var a in t || (t = {})) f.call(t, a) && s(e, a, t[a]);
                if (d)
                    for (var a of d(t)) p.call(t, a) && s(e, a, t[a]);
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