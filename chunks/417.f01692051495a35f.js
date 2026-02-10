! function() {
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
    [417], {
        417: (e, t, r) => {
            r.r(t), r.d(t, {
                Flag: () => s
            });
            var a = r(3728),
                l = r(99273);
            let n = new Map([
                ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M40.14,46.88A12,12,0,0,0,36,56V224a12,12,0,0,0,24,0V181.72c22.84-17.12,42.1-9.12,70.68,5,16.23,8,34.74,17.2,54.8,17.2,14.72,0,30.28-4.94,46.38-18.88A12,12,0,0,0,236,176V56a12,12,0,0,0-19.86-9.07c-24.71,21.41-44.53,13.31-74.82-1.68C113.19,31.27,78.17,13.94,40.14,46.88ZM212,170.26c-22.84,17.13-42.1,9.11-70.68-5C118.16,153.76,90.33,140,60,153.87V61.69c22.84-17.12,42.1-9.12,70.68,5,16.23,8,34.74,17.2,54.8,17.2A63,63,0,0,0,212,78.08Z"
                }))],
                ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M224,56V176c-64,55.43-112-55.43-176,0V56C112,.57,160,111.43,224,56Z",
                    opacity: "0.2"
                }), a.createElement("path", {
                    d: "M42.76,50A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V56A8,8,0,0,0,218.76,50c-28,24.23-51.72,12.49-79.21-1.12C111.07,34.76,78.78,18.79,42.76,50ZM216,172.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V59.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z"
                }))],
                ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M232,56V176a8,8,0,0,1-2.76,6c-15.28,13.23-29.89,18-43.82,18-18.91,0-36.57-8.74-53-16.85C105.87,170,82.79,158.61,56,179.77V224a8,8,0,0,1-16,0V56a8,8,0,0,1,2.77-6h0c36-31.18,68.31-15.21,96.79-1.12C167,62.46,190.79,74.2,218.76,50A8,8,0,0,1,232,56Z"
                }))],
                ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M44.08,51.37A6,6,0,0,0,42,55.9V224a6,6,0,0,0,12,0V178.78c28.08-22.79,51.88-11,79.34,2.57,16.12,8,33.49,16.58,52,16.58,13.57,0,27.76-4.6,42.56-17.42A6,6,0,0,0,230,176V55.9a6,6,0,0,0-9.93-4.54c-29,25.12-53.28,13.09-81.41-.84C110.77,36.71,79,21.16,44.08,51.37ZM218,173.17c-28.08,22.8-51.88,11-79.34-2.58C113.4,158.08,85.09,144.07,54,164V58.72c28.08-22.8,51.88-11,79.34,2.56C158.6,73.79,186.91,87.8,218,67.91Z"
                }))],
                ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M42.76,50A8,8,0,0,0,40,56V224a8,8,0,0,0,16,0V179.77c26.79-21.16,49.87-9.75,76.45,3.41,16.4,8.11,34.06,16.85,53,16.85,13.93,0,28.54-4.75,43.82-18a8,8,0,0,0,2.76-6V56A8,8,0,0,0,218.76,50c-28,24.23-51.72,12.49-79.21-1.12C111.07,34.76,78.78,18.79,42.76,50ZM216,172.25c-26.79,21.16-49.87,9.74-76.45-3.41-25-12.35-52.81-26.13-83.55-8.4V59.79c26.79-21.16,49.87-9.75,76.45,3.4,25,12.35,52.82,26.13,83.55,8.4Z"
                }))],
                ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M45.39,53.06a4,4,0,0,0-1.39,3V224a4,4,0,0,0,8,0V177.87c29.41-24.39,55.08-11.69,82.23,1.73,16.5,8.17,33.33,16.5,51.13,16.5,13.14,0,26.81-4.55,41.26-17.06a4,4,0,0,0,1.38-3v-120a4,4,0,0,0-6.62-3c-30,26-56,13.07-83.61-.57C109.07,38.28,79.4,23.62,45.39,53.06ZM220,174.17c-29.41,24.4-55.08,11.7-82.23-1.73-26.82-13.27-54.5-27-85.77-4.66V57.92c29.41-24.4,55.08-11.7,82.23,1.73,26.82,13.27,54.5,27,85.77,4.66Z"
                }))]
            ]);
            var c = Object.defineProperty,
                o = Object.defineProperties,
                i = Object.getOwnPropertyDescriptors,
                d = Object.getOwnPropertySymbols,
                f = Object.prototype.hasOwnProperty,
                p = Object.prototype.propertyIsEnumerable,
                u = (e, t, r) => t in e ? c(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r;
            let s = (0, a.forwardRef)((e, t) => a.createElement(l.A, o(((e, t) => {
                for (var r in t || (t = {})) f.call(t, r) && u(e, r, t[r]);
                if (d)
                    for (var r of d(t)) p.call(t, r) && u(e, r, t[r]);
                return e
            })({
                ref: t
            }, e), i({
                weights: n
            }))));
            s.displayName = "Flag"
        },
        99273: (e, t, r) => {
            r.d(t, {
                A: () => f
            });
            var a = r(3728),
                l = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                c = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable,
                i = (e, t, r) => t in e ? l(e, t, {
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
                    mirrored: p = !1,
                    children: u,
                    weights: s
                } = e, m = ((e, t) => {
                    var r = {};
                    for (var a in e) c.call(e, a) && 0 > t.indexOf(a) && (r[a] = e[a]);
                    if (null != e && n)
                        for (var a of n(e)) 0 > t.indexOf(a) && o.call(e, a) && (r[a] = e[a]);
                    return r
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return a.createElement("svg", ((e, t) => {
                    for (var r in t || (t = {})) c.call(t, r) && i(e, r, t[r]);
                    if (n)
                        for (var r of n(t)) o.call(t, r) && i(e, r, t[r]);
                    return e
                })({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: d,
                    height: d,
                    fill: l,
                    viewBox: "0 0 256 256",
                    transform: p ? "scale(-1, 1)" : void 0
                }, m), !!r && a.createElement("title", null, r), u, s.get(f))
            });
            d.displayName = "SSRBase";
            let f = d
        }
    }
]);