try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "be14e1fa-aa65-4d0d-8fa8-752c8b478f5f", e._sentryDebugIdIdentifier = "sentry-dbid-be14e1fa-aa65-4d0d-8fa8-752c8b478f5f")
} catch (e) {} {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
    e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[new e.Error().stack] = Object.assign({}, e._sentryModuleMetadata[new e.Error().stack], {
        "_sentryBundlerPluginAppKey:hexagon-web": !0
    })
}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [13976], {
        13976: (e, t, a) => {
            a.r(t), a.d(t, {
                Target: () => u
            });
            var r = a(53163),
                l = a(83455);
            let n = new Map([
                ["bold", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M229.26,90.4a108,108,0,0,1-177.63,114A108,108,0,0,1,195.41,43.63l20.1-20.11a12,12,0,0,1,17,17l-96,96a12,12,0,1,1-17-17l24-24a36,36,0,1,0,19.76,39.65,12,12,0,0,1,23.53,4.74,60,60,0,1,1-25.73-62L178.3,60.74a84,84,0,1,0,28.46,38,12,12,0,1,1,22.5-8.35Z"
                }))],
                ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z",
                    opacity: "0.2"
                }), r.createElement("path", {
                    d: "M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"
                }))],
                ["fill", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32L167.6,99.71h0l-37.71,37.71-23.95,23.95a40,40,0,0,0,62-35.67,8,8,0,1,1,16-.9,56,56,0,0,1-95.5,42.79h0a56,56,0,0,1,73.13-84.43L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"
                }))],
                ["light", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M220.06,84a102.06,102.06,0,1,1-24.31-32.27l24-24a6,6,0,0,1,8.48,8.49l-96,96a6,6,0,1,1-8.48-8.49l29.39-29.4a42,42,0,1,0,16.78,31.24,6,6,0,1,1,12-.68A54,54,0,1,1,161.7,85.83l25.54-25.55a89.91,89.91,0,1,0,22,28.93A6,6,0,1,1,220.06,84Z"
                }))],
                ["regular", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"
                }))],
                ["thin", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M218.26,84.89a100.16,100.16,0,1,1-22.44-30.37l25.35-25.35a4,4,0,1,1,5.66,5.66l-96,96a4,4,0,0,1-5.66-5.66l31-31a44,44,0,1,0,15.78,31.3,4,4,0,0,1,8-.46,52,52,0,1,1-18.1-36.51l28.34-28.33A92,92,0,0,0,63,193.05,92,92,0,0,0,211,88.33a4,4,0,1,1,7.22-3.44Z"
                }))]
            ]);
            var o = Object.defineProperty,
                d = Object.defineProperties,
                i = Object.getOwnPropertyDescriptors,
                f = Object.getOwnPropertySymbols,
                c = Object.prototype.hasOwnProperty,
                s = Object.prototype.propertyIsEnumerable,
                p = (e, t, a) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a;
            let u = (0, r.forwardRef)((e, t) => r.createElement(l.A, d(((e, t) => {
                for (var a in t || (t = {})) c.call(t, a) && p(e, a, t[a]);
                if (f)
                    for (var a of f(t)) s.call(t, a) && p(e, a, t[a]);
                return e
            })({
                ref: t
            }, e), i({
                weights: n
            }))));
            u.displayName = "Target"
        },
        83455: (e, t, a) => {
            a.d(t, {
                A: () => c
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
                    weight: c = "regular",
                    mirrored: s = !1,
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
                    transform: s ? "scale(-1, 1)" : void 0
                }, b), !!a && r.createElement("title", null, a), p, u.get(c))
            });
            f.displayName = "SSRBase";
            let c = f
        }
    }
]);