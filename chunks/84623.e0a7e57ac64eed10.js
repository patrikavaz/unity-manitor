try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1d8970f3-6007-43da-9fbe-3bd697db5690", e._sentryDebugIdIdentifier = "sentry-dbid-1d8970f3-6007-43da-9fbe-3bd697db5690")
    }()
} catch (e) {}! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                if (null != r)
                    for (var a in r) r.hasOwnProperty(a) && (e[a] = r[a])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [84623], {
        83455: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var a = r(53163),
                n = Object.defineProperty,
                l = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                d = Object.prototype.propertyIsEnumerable,
                i = (e, t, r) => t in e ? n(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r;
            let f = (0, a.forwardRef)((e, t) => {
                let {
                    alt: r,
                    color: n = "currentColor",
                    size: f = "1em",
                    weight: c = "regular",
                    mirrored: s = !1,
                    children: u,
                    weights: p
                } = e, b = ((e, t) => {
                    var r = {};
                    for (var a in e) o.call(e, a) && 0 > t.indexOf(a) && (r[a] = e[a]);
                    if (null != e && l)
                        for (var a of l(e)) 0 > t.indexOf(a) && d.call(e, a) && (r[a] = e[a]);
                    return r
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return a.createElement("svg", ((e, t) => {
                    for (var r in t || (t = {})) o.call(t, r) && i(e, r, t[r]);
                    if (l)
                        for (var r of l(t)) d.call(t, r) && i(e, r, t[r]);
                    return e
                })({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: f,
                    height: f,
                    fill: n,
                    viewBox: "0 0 256 256",
                    transform: s ? "scale(-1, 1)" : void 0
                }, b), !!r && a.createElement("title", null, r), u, p.get(c))
            });
            f.displayName = "SSRBase";
            let c = f
        },
        84623: (e, t, r) => {
            r.r(t), r.d(t, {
                Book: () => p
            });
            var a = r(53163),
                n = r(83455);
            let l = new Map([
                ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M208,20H72A36,36,0,0,0,36,56V224a12,12,0,0,0,12,12H192a12,12,0,0,0,0-24H60v-4a12,12,0,0,1,12-12H208a12,12,0,0,0,12-12V32A12,12,0,0,0,208,20ZM196,172H72a35.59,35.59,0,0,0-12,2.06V56A12,12,0,0,1,72,44H196Z"
                }))],
                ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M208,32V192H72a24,24,0,0,0-24,24V56A24,24,0,0,1,72,32Z",
                    opacity: "0.2"
                }), a.createElement("path", {
                    d: "M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"
                }))],
                ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M216,32V192a8,8,0,0,1-8,8H72a16,16,0,0,0-16,16H192a8,8,0,0,1,0,16H48a8,8,0,0,1-8-8V56A32,32,0,0,1,72,24H208A8,8,0,0,1,216,32Z"
                }))],
                ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M208,26H72A30,30,0,0,0,42,56V224a6,6,0,0,0,6,6H192a6,6,0,0,0,0-12H54v-2a18,18,0,0,1,18-18H208a6,6,0,0,0,6-6V32A6,6,0,0,0,208,26Zm-6,160H72a29.87,29.87,0,0,0-18,6V56A18,18,0,0,1,72,38H202Z"
                }))],
                ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M208,24H72A32,32,0,0,0,40,56V224a8,8,0,0,0,8,8H192a8,8,0,0,0,0-16H56a16,16,0,0,1,16-16H208a8,8,0,0,0,8-8V32A8,8,0,0,0,208,24Zm-8,160H72a31.82,31.82,0,0,0-16,4.29V56A16,16,0,0,1,72,40H200Z"
                }))],
                ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M208,28H72A28,28,0,0,0,44,56V224a4,4,0,0,0,4,4H192a4,4,0,0,0,0-8H52v-4a20,20,0,0,1,20-20H208a4,4,0,0,0,4-4V32A4,4,0,0,0,208,28Zm-4,160H72a27.94,27.94,0,0,0-20,8.42V56A20,20,0,0,1,72,36H204Z"
                }))]
            ]);
            var o = Object.defineProperty,
                d = Object.defineProperties,
                i = Object.getOwnPropertyDescriptors,
                f = Object.getOwnPropertySymbols,
                c = Object.prototype.hasOwnProperty,
                s = Object.prototype.propertyIsEnumerable,
                u = (e, t, r) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r;
            let p = (0, a.forwardRef)((e, t) => a.createElement(n.A, d(((e, t) => {
                for (var r in t || (t = {})) c.call(t, r) && u(e, r, t[r]);
                if (f)
                    for (var r of f(t)) s.call(t, r) && u(e, r, t[r]);
                return e
            })({
                ref: t
            }, e), i({
                weights: l
            }))));
            p.displayName = "Book"
        }
    }
]);