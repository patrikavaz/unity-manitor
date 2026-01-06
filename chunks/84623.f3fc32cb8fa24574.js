try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1d8970f3-6007-43da-9fbe-3bd697db5690", e._sentryDebugIdIdentifier = "sentry-dbid-1d8970f3-6007-43da-9fbe-3bd697db5690")
} catch (e) {} {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], {
        "_sentryBundlerPluginAppKey:hexagon-web": !0
    })
}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [84623], {
        83455: (e, t, a) => {
            a.d(t, {
                A: () => s
            });
            var r = a(53163),
                l = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                d = Object.prototype.propertyIsEnumerable,
                i = (e, t, a) => t in e ? l(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a;
            let f = (0, r.forwardRef)((e, t) => {
                let {
                    alt: a,
                    color: l = "currentColor",
                    size: f = "1em",
                    weight: s = "regular",
                    mirrored: c = !1,
                    children: p,
                    weights: u
                } = e, b = ((e, t) => {
                    var a = {};
                    for (var r in e) o.call(e, r) && 0 > t.indexOf(r) && (a[r] = e[r]);
                    if (null != e && n)
                        for (var r of n(e)) 0 > t.indexOf(r) && d.call(e, r) && (a[r] = e[r]);
                    return a
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return r.createElement("svg", ((e, t) => {
                    for (var a in t || (t = {})) o.call(t, a) && i(e, a, t[a]);
                    if (n)
                        for (var a of n(t)) d.call(t, a) && i(e, a, t[a]);
                    return e
                })({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: f,
                    height: f,
                    fill: l,
                    viewBox: "0 0 256 256",
                    transform: c ? "scale(-1, 1)" : void 0
                }, b), !!a && r.createElement("title", null, a), p, u.get(s))
            });
            f.displayName = "SSRBase";
            let s = f
        },
        84623: (e, t, a) => {
            a.r(t), a.d(t, {
                Book: () => u
            });
            var r = a(53163),
                l = a(83455);
            let n = new Map([
                ["bold", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M208,20H72A36,36,0,0,0,36,56V224a12,12,0,0,0,12,12H192a12,12,0,0,0,0-24H60v-4a12,12,0,0,1,12-12H208a12,12,0,0,0,12-12V32A12,12,0,0,0,208,20ZM196,172H72a35.59,35.59,0,0,0-12,2.06V56A12,12,0,0,1,72,44H196Z"
                }))],
                ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M208,32V192H72a24,24,0,0,0-24,24V56A24,24,0,0,1,72,32Z",
                    opacity: "0.2"
                }), r.createElement("path", {
                    d: "M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"
                }))],
                ["fill", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M216,32V192a8,8,0,0,1-8,8H72a16,16,0,0,0-16,16H192a8,8,0,0,1,0,16H48a8,8,0,0,1-8-8V56A32,32,0,0,1,72,24H208A8,8,0,0,1,216,32Z"
                }))],
                ["light", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M208,26H72A30,30,0,0,0,42,56V224a6,6,0,0,0,6,6H192a6,6,0,0,0,0-12H54v-2a18,18,0,0,1,18-18H208a6,6,0,0,0,6-6V32A6,6,0,0,0,208,26Zm-6,160H72a29.87,29.87,0,0,0-18,6V56A18,18,0,0,1,72,38H202Z"
                }))],
                ["regular", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"
                }))],
                ["thin", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M208,28H72A28,28,0,0,0,44,56V224a4,4,0,0,0,4,4H192a4,4,0,0,0,0-8H52v-4a20,20,0,0,1,20-20H208a4,4,0,0,0,4-4V32A4,4,0,0,0,208,28Zm-4,160H72a27.94,27.94,0,0,0-20,8.42V56A20,20,0,0,1,72,36H204Z"
                }))]
            ]);
            var o = Object.defineProperty,
                d = Object.defineProperties,
                i = Object.getOwnPropertyDescriptors,
                f = Object.getOwnPropertySymbols,
                s = Object.prototype.hasOwnProperty,
                c = Object.prototype.propertyIsEnumerable,
                p = (e, t, a) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a;
            let u = (0, r.forwardRef)((e, t) => r.createElement(l.A, d(((e, t) => {
                for (var a in t || (t = {})) s.call(t, a) && p(e, a, t[a]);
                if (f)
                    for (var a of f(t)) c.call(t, a) && p(e, a, t[a]);
                return e
            })({
                ref: t
            }, e), i({
                weights: n
            }))));
            u.displayName = "Book"
        }
    }
]);