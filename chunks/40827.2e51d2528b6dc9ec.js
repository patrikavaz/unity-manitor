try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        l = (new e.Error).stack;
    l && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[l] = "66c06854-e22e-4697-8bb7-e967f9006624", e._sentryDebugIdIdentifier = "sentry-dbid-66c06854-e22e-4697-8bb7-e967f9006624")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [40827], {
        40827: (e, l, a) => {
            a.r(l), a.d(l, {
                Code: () => s
            });
            var t = a(11698),
                r = a(54757);
            let n = new Map([
                ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M71.68,97.22,34.74,128l36.94,30.78a12,12,0,1,1-15.36,18.44l-48-40a12,12,0,0,1,0-18.44l48-40A12,12,0,0,1,71.68,97.22Zm176,21.56-48-40a12,12,0,1,0-15.36,18.44L221.26,128l-36.94,30.78a12,12,0,1,0,15.36,18.44l48-40a12,12,0,0,0,0-18.44ZM164.1,28.72a12,12,0,0,0-15.38,7.18l-64,176a12,12,0,0,0,7.18,15.37A11.79,11.79,0,0,0,96,228a12,12,0,0,0,11.28-7.9l64-176A12,12,0,0,0,164.1,28.72Z"
                }))],
                ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M240,128l-48,40H64L16,128,64,88H192Z",
                    opacity: "0.2"
                }), t.createElement("path", {
                    d: "M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
                }))],
                ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM92.8,145.6a8,8,0,1,1-9.6,12.8l-32-24a8,8,0,0,1,0-12.8l32-24a8,8,0,0,1,9.6,12.8L69.33,128Zm58.89-71.4-32,112a8,8,0,1,1-15.38-4.4l32-112a8,8,0,0,1,15.38,4.4Zm53.11,60.2-32,24a8,8,0,0,1-9.6-12.8L186.67,128,163.2,110.4a8,8,0,1,1,9.6-12.8l32,24a8,8,0,0,1,0,12.8Z"
                }))],
                ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M67.84,92.61,25.37,128l42.47,35.39a6,6,0,1,1-7.68,9.22l-48-40a6,6,0,0,1,0-9.22l48-40a6,6,0,0,1,7.68,9.22Zm176,30.78-48-40a6,6,0,1,0-7.68,9.22L230.63,128l-42.47,35.39a6,6,0,1,0,7.68,9.22l48-40a6,6,0,0,0,0-9.22Zm-81.79-89A6,6,0,0,0,154.36,38l-64,176A6,6,0,0,0,94,221.64a6.15,6.15,0,0,0,2,.36,6,6,0,0,0,5.64-3.95l64-176A6,6,0,0,0,162.05,34.36Z"
                }))],
                ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M69.12,94.15,28.5,128l40.62,33.85a8,8,0,1,1-10.24,12.29l-48-40a8,8,0,0,1,0-12.29l48-40a8,8,0,0,1,10.24,12.3Zm176,27.7-48-40a8,8,0,1,0-10.24,12.3L227.5,128l-40.62,33.85a8,8,0,1,0,10.24,12.29l48-40a8,8,0,0,0,0-12.29ZM162.73,32.48a8,8,0,0,0-10.25,4.79l-64,176a8,8,0,0,0,4.79,10.26A8.14,8.14,0,0,0,96,224a8,8,0,0,0,7.52-5.27l64-176A8,8,0,0,0,162.73,32.48Z"
                }))],
                ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                    d: "M66.56,91.07,22.25,128l44.31,36.93A4,4,0,0,1,64,172a3.94,3.94,0,0,1-2.56-.93l-48-40a4,4,0,0,1,0-6.14l48-40a4,4,0,0,1,5.12,6.14Zm176,33.86-48-40a4,4,0,1,0-5.12,6.14L233.75,128l-44.31,36.93a4,4,0,1,0,5.12,6.14l48-40a4,4,0,0,0,0-6.14ZM161.37,36.24a4,4,0,0,0-5.13,2.39l-64,176a4,4,0,0,0,2.39,5.13A4.12,4.12,0,0,0,96,220a4,4,0,0,0,3.76-2.63l64-176A4,4,0,0,0,161.37,36.24Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                c = Object.getOwnPropertyDescriptors,
                d = Object.getOwnPropertySymbols,
                f = Object.prototype.hasOwnProperty,
                m = Object.prototype.propertyIsEnumerable,
                p = (e, l, a) => l in e ? o(e, l, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[l] = a;
            let s = (0, t.forwardRef)((e, l) => t.createElement(r.A, i(((e, l) => {
                for (var a in l || (l = {})) f.call(l, a) && p(e, a, l[a]);
                if (d)
                    for (var a of d(l)) m.call(l, a) && p(e, a, l[a]);
                return e
            })({
                ref: l
            }, e), c({
                weights: n
            }))));
            s.displayName = "Code"
        },
        54757: (e, l, a) => {
            a.d(l, {
                A: () => f
            });
            var t = a(11698),
                r = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                c = (e, l, a) => l in e ? r(e, l, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[l] = a;
            let d = (0, t.forwardRef)((e, l) => {
                let {
                    alt: a,
                    color: r = "currentColor",
                    size: d = "1em",
                    weight: f = "regular",
                    mirrored: m = !1,
                    children: p,
                    weights: s
                } = e, b = ((e, l) => {
                    var a = {};
                    for (var t in e) o.call(e, t) && 0 > l.indexOf(t) && (a[t] = e[t]);
                    if (null != e && n)
                        for (var t of n(e)) 0 > l.indexOf(t) && i.call(e, t) && (a[t] = e[t]);
                    return a
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return t.createElement("svg", ((e, l) => {
                    for (var a in l || (l = {})) o.call(l, a) && c(e, a, l[a]);
                    if (n)
                        for (var a of n(l)) i.call(l, a) && c(e, a, l[a]);
                    return e
                })({
                    ref: l,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: d,
                    height: d,
                    fill: r,
                    viewBox: "0 0 256 256",
                    transform: m ? "scale(-1, 1)" : void 0
                }, b), !!a && t.createElement("title", null, a), p, s.get(f))
            });
            d.displayName = "SSRBase";
            let f = d
        }
    }
]);