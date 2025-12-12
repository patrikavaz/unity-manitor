try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "2655bc2d-3e5b-4986-99fc-f929a58de2b9", e._sentryDebugIdIdentifier = "sentry-dbid-2655bc2d-3e5b-4986-99fc-f929a58de2b9")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [96466], {
        54757: (e, t, a) => {
            a.d(t, {
                A: () => f
            });
            var r = a(11698),
                l = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                c = Object.prototype.propertyIsEnumerable,
                i = (e, t, a) => t in e ? l(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a;
            let d = (0, r.forwardRef)((e, t) => {
                let {
                    alt: a,
                    color: l = "currentColor",
                    size: d = "1em",
                    weight: f = "regular",
                    mirrored: h = !1,
                    children: b,
                    weights: m
                } = e, p = ((e, t) => {
                    var a = {};
                    for (var r in e) o.call(e, r) && 0 > t.indexOf(r) && (a[r] = e[r]);
                    if (null != e && n)
                        for (var r of n(e)) 0 > t.indexOf(r) && c.call(e, r) && (a[r] = e[r]);
                    return a
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return r.createElement("svg", ((e, t) => {
                    for (var a in t || (t = {})) o.call(t, a) && i(e, a, t[a]);
                    if (n)
                        for (var a of n(t)) c.call(t, a) && i(e, a, t[a]);
                    return e
                })({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: d,
                    height: d,
                    fill: l,
                    viewBox: "0 0 256 256",
                    transform: h ? "scale(-1, 1)" : void 0
                }, p), !!a && r.createElement("title", null, a), b, m.get(f))
            });
            d.displayName = "SSRBase";
            let f = d
        },
        96466: (e, t, a) => {
            a.r(t), a.d(t, {
                FacebookLogo: () => m
            });
            var r = a(11698),
                l = a(54757);
            let n = new Map([
                ["bold", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm12,191.13V156h20a12,12,0,0,0,0-24H140V112a12,12,0,0,1,12-12h16a12,12,0,0,0,0-24H152a36,36,0,0,0-36,36v20H96a12,12,0,0,0,0,24h20v55.13a84,84,0,1,1,24,0Z"
                }))],
                ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                    opacity: "0.2"
                }), r.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                }))],
                ["fill", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M232,128a104.16,104.16,0,0,1-91.55,103.26,4,4,0,0,1-4.45-4V152h24a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,8-8.53A8.17,8.17,0,0,0,167.73,80H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0-8,8.53A8.17,8.17,0,0,0,96.27,152H120v75.28a4,4,0,0,1-4.44,4A104.15,104.15,0,0,1,24.07,124.09c2-54,45.74-97.9,99.78-100A104.12,104.12,0,0,1,232,128Z"
                }))],
                ["light", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm6,191.8V150h26a6,6,0,0,0,0-12H134V112a18,18,0,0,1,18-18h16a6,6,0,0,0,0-12H152a30,30,0,0,0-30,30v26H96a6,6,0,0,0,0,12h26v67.8a90,90,0,1,1,12,0Z"
                }))],
                ["regular", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                }))],
                ["thin", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm4,191.91V148h28a4,4,0,0,0,0-8H132V112a20,20,0,0,1,20-20h16a4,4,0,0,0,0-8H152a28,28,0,0,0-28,28v28H96a4,4,0,0,0,0,8h28v71.91a92,92,0,1,1,8,0Z"
                }))]
            ]);
            var o = Object.defineProperty,
                c = Object.defineProperties,
                i = Object.getOwnPropertyDescriptors,
                d = Object.getOwnPropertySymbols,
                f = Object.prototype.hasOwnProperty,
                h = Object.prototype.propertyIsEnumerable,
                b = (e, t, a) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: a
                }) : e[t] = a;
            let m = (0, r.forwardRef)((e, t) => r.createElement(l.A, c(((e, t) => {
                for (var a in t || (t = {})) f.call(t, a) && b(e, a, t[a]);
                if (d)
                    for (var a of d(t)) h.call(t, a) && b(e, a, t[a]);
                return e
            })({
                ref: t
            }, e), i({
                weights: n
            }))));
            m.displayName = "FacebookLogo"
        }
    }
]);