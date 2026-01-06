try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "53362321-63a1-4c5f-8830-163345164b13", e._sentryDebugIdIdentifier = "sentry-dbid-53362321-63a1-4c5f-8830-163345164b13")
} catch (e) {} {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], {
        "_sentryBundlerPluginAppKey:hexagon-web": !0
    })
}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [54366], {
        54366: (e, t, l) => {
            l.r(t), l.d(t, {
                XLogo: () => u
            });
            var r = l(53163),
                a = l(83455);
            let n = new Map([
                ["bold", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M218.12,209.56l-61-95.8,59.72-65.69a12,12,0,0,0-17.76-16.14L143.81,92.77,106.12,33.56A12,12,0,0,0,96,28H48A12,12,0,0,0,37.88,46.44l61,95.8L39.12,207.93a12,12,0,1,0,17.76,16.14l55.31-60.84,37.69,59.21A12,12,0,0,0,160,228h48a12,12,0,0,0,10.12-18.44ZM166.59,204,69.86,52H89.41l96.73,152Z"
                }))],
                ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M208,216H160L48,40H96Z",
                    opacity: "0.2"
                }), r.createElement("path", {
                    d: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"
                }))],
                ["fill", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M215,219.85a8,8,0,0,1-7,4.15H160a8,8,0,0,1-6.75-3.71l-40.49-63.63L53.92,221.38a8,8,0,0,1-11.84-10.76l61.77-68L41.25,44.3A8,8,0,0,1,48,32H96a8,8,0,0,1,6.75,3.71l40.49,63.63,58.84-64.72a8,8,0,0,1,11.84,10.76l-61.77,67.95,62.6,98.38A8,8,0,0,1,215,219.85Z"
                }))],
                ["light", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M213.06,212.78l-63.42-99.66L212.44,44A6,6,0,1,0,203.56,36L143,102.62l-41.9-65.84A6,6,0,0,0,96,34H48a6,6,0,0,0-5.06,9.22l63.42,99.66L43.56,212A6,6,0,0,0,52.44,220L113,153.38l41.9,65.84A6,6,0,0,0,160,222h48a6,6,0,0,0,5.06-9.22ZM163.29,210,58.93,46H92.71L197.07,210Z"
                }))],
                ["regular", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"
                }))],
                ["thin", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M211.37,213.85,147.13,112.9,211,42.69A4,4,0,0,0,205,37.31L142.68,105.9,99.38,37.85A4,4,0,0,0,96,36H48a4,4,0,0,0-3.37,6.15L108.87,143.1,45,213.31A4,4,0,1,0,51,218.69l62.36-68.59,43.3,68.05A4,4,0,0,0,160,220h48a4,4,0,0,0,3.37-6.15ZM162.2,212,55.29,44H93.8L200.71,212Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                d = Object.getOwnPropertyDescriptors,
                c = Object.getOwnPropertySymbols,
                f = Object.prototype.hasOwnProperty,
                s = Object.prototype.propertyIsEnumerable,
                p = (e, t, l) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : e[t] = l;
            let u = (0, r.forwardRef)((e, t) => r.createElement(a.A, i(((e, t) => {
                for (var l in t || (t = {})) f.call(t, l) && p(e, l, t[l]);
                if (c)
                    for (var l of c(t)) s.call(t, l) && p(e, l, t[l]);
                return e
            })({
                ref: t
            }, e), d({
                weights: n
            }))));
            u.displayName = "XLogo"
        },
        83455: (e, t, l) => {
            l.d(t, {
                A: () => f
            });
            var r = l(53163),
                a = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                d = (e, t, l) => t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : e[t] = l;
            let c = (0, r.forwardRef)((e, t) => {
                let {
                    alt: l,
                    color: a = "currentColor",
                    size: c = "1em",
                    weight: f = "regular",
                    mirrored: s = !1,
                    children: p,
                    weights: u
                } = e, g = ((e, t) => {
                    var l = {};
                    for (var r in e) o.call(e, r) && 0 > t.indexOf(r) && (l[r] = e[r]);
                    if (null != e && n)
                        for (var r of n(e)) 0 > t.indexOf(r) && i.call(e, r) && (l[r] = e[r]);
                    return l
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return r.createElement("svg", ((e, t) => {
                    for (var l in t || (t = {})) o.call(t, l) && d(e, l, t[l]);
                    if (n)
                        for (var l of n(t)) i.call(t, l) && d(e, l, t[l]);
                    return e
                })({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: c,
                    height: c,
                    fill: a,
                    viewBox: "0 0 256 256",
                    transform: s ? "scale(-1, 1)" : void 0
                }, g), !!l && r.createElement("title", null, l), p, u.get(f))
            });
            c.displayName = "SSRBase";
            let f = c
        }
    }
]);