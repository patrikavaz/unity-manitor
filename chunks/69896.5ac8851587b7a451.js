! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                if (null != t)
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [69896], {
        69896: (e, a, t) => {
            t.r(a), t.d(a, {
                Stamp: () => m
            });
            var r = t(53163),
                l = t(83455);
            let n = new Map([
                ["bold", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M228,224a12,12,0,0,1-12,12H40a12,12,0,0,1,0-24H216A12,12,0,0,1,228,224Zm0-80v32a20,20,0,0,1-20,20H48a20,20,0,0,1-20-20V144a20,20,0,0,1,20-20H96L83.55,54.33A36,36,0,0,1,119,12h18a36,36,0,0,1,35.44,42.33L160,124h48A20,20,0,0,1,228,144ZM107.17,50.11,120.37,124h15.26l13.2-73.89A12,12,0,0,0,137,36H119a12,12,0,0,0-11.82,14.11ZM204,148H52v24H204Z"
                }))],
                ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M159.46,53l-17.78,83H114.32L96.54,53A24,24,0,0,1,120,24h16A24,24,0,0,1,159.46,53Z",
                    opacity: "0.2"
                }), r.createElement("path", {
                    d: "M224,224a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,224Zm0-80v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V144a16,16,0,0,1,16-16h56.43L88.72,54.71A32,32,0,0,1,120,16h16a32,32,0,0,1,31.29,38.71L151.57,128H208A16,16,0,0,1,224,144ZM120.79,128h14.42l16.43-76.65A16,16,0,0,0,136,32H120a16,16,0,0,0-15.65,19.35ZM208,184V144H48v40H208Z"
                }))],
                ["fill", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M224,224a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,224Zm-16-96H151.57l15.71-73.29A32,32,0,0,0,136,16H120A32,32,0,0,0,88.72,54.71L104.43,128H48a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V144A16,16,0,0,0,208,128Z"
                }))],
                ["light", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M222,224a6,6,0,0,1-6,6H40a6,6,0,0,1,0-12H216A6,6,0,0,1,222,224Zm0-80v40a14,14,0,0,1-14,14H48a14,14,0,0,1-14-14V144a14,14,0,0,1,14-14h58.9L90.68,54.29A30,30,0,0,1,120,18h16a30,30,0,0,1,29.33,36.29L149.1,130H208A14,14,0,0,1,222,144ZM119.17,130h17.66l16.76-78.23A18,18,0,0,0,136,30H120a18,18,0,0,0-17.6,21.77ZM210,144a2,2,0,0,0-2-2H48a2,2,0,0,0-2,2v40a2,2,0,0,0,2,2H208a2,2,0,0,0,2-2Z"
                }))],
                ["regular", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M224,224a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,224Zm0-80v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V144a16,16,0,0,1,16-16h56.43L88.72,54.71A32,32,0,0,1,120,16h16a32,32,0,0,1,31.29,38.71L151.57,128H208A16,16,0,0,1,224,144ZM120.79,128h14.42l16.43-76.65A16,16,0,0,0,136,32H120a16,16,0,0,0-15.65,19.35ZM208,184V144H48v40H208Z"
                }))],
                ["thin", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M220,224a4,4,0,0,1-4,4H40a4,4,0,0,1,0-8H216A4,4,0,0,1,220,224Zm0-80v40a12,12,0,0,1-12,12H48a12,12,0,0,1-12-12V144a12,12,0,0,1,12-12h61.37L92.63,53.87A28,28,0,0,1,120,20h16a28,28,0,0,1,27.38,33.87L146.63,132H208A12,12,0,0,1,220,144ZM117.55,132h20.9l17.1-79.81A20,20,0,0,0,136,28H120a20,20,0,0,0-19.56,24.19ZM212,144a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4v40a4,4,0,0,0,4,4H208a4,4,0,0,0,4-4Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                c = Object.getOwnPropertyDescriptors,
                h = Object.getOwnPropertySymbols,
                d = Object.prototype.hasOwnProperty,
                f = Object.prototype.propertyIsEnumerable,
                p = (e, a, t) => a in e ? o(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t;
            let m = (0, r.forwardRef)((e, a) => r.createElement(l.A, i(((e, a) => {
                for (var t in a || (a = {})) d.call(a, t) && p(e, t, a[t]);
                if (h)
                    for (var t of h(a)) f.call(a, t) && p(e, t, a[t]);
                return e
            })({
                ref: a
            }, e), c({
                weights: n
            }))));
            m.displayName = "Stamp"
        },
        83455: (e, a, t) => {
            t.d(a, {
                A: () => d
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
            let h = (0, r.forwardRef)((e, a) => {
                let {
                    alt: t,
                    color: l = "currentColor",
                    size: h = "1em",
                    weight: d = "regular",
                    mirrored: f = !1,
                    children: p,
                    weights: m
                } = e, u = ((e, a) => {
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
                    width: h,
                    height: h,
                    fill: l,
                    viewBox: "0 0 256 256",
                    transform: f ? "scale(-1, 1)" : void 0
                }, u), !!t && r.createElement("title", null, t), p, m.get(d))
            });
            h.displayName = "SSRBase";
            let d = h
        }
    }
]);