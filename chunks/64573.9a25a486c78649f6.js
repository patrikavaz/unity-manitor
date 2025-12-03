try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7d236c2f-98ef-4ffa-9b43-f63d3d3bd6c2", e._sentryDebugIdIdentifier = "sentry-dbid-7d236c2f-98ef-4ffa-9b43-f63d3d3bd6c2")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [64573], {
        64573: (e, t, l) => {
            l.r(t), l.d(t, {
                Compass: () => p
            });
            var r = l(7787),
                a = l(84376);
            let n = new Map([
                ["bold", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM163.27,77l-56,24a12,12,0,0,0-6.3,6.3l-24,56A12,12,0,0,0,92.73,179l56-24a12,12,0,0,0,6.3-6.3l24-56A12,12,0,0,0,163.27,77Zm-28.41,57.89-24,10.29,10.29-24,24-10.29Z"
                }))],
                ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm16,112L80,176l32-64,64-32Z",
                    opacity: "0.2"
                }), r.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"
                }))],
                ["fill", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm51.58,57.79-32,64a4.08,4.08,0,0,1-1.79,1.79l-64,32a4,4,0,0,1-5.37-5.37l32-64a4.08,4.08,0,0,1,1.79-1.79l64-32A4,4,0,0,1,179.58,81.79Z"
                }))],
                ["light", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M128,26A102,102,0,1,0,230,128,102.12,102.12,0,0,0,128,26Zm0,192a90,90,0,1,1,90-90A90.1,90.1,0,0,1,128,218ZM173.32,74.63l-64,32a6,6,0,0,0-2.69,2.69l-32,64A6,6,0,0,0,80,182a6.06,6.06,0,0,0,2.68-.63l64-32a6,6,0,0,0,2.69-2.69l32-64a6,6,0,0,0-8.05-8.05Zm-33.79,64.9L93.42,162.58l23-46.11,46.11-23Z"
                }))],
                ["regular", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM172.42,72.84l-64,32a8.05,8.05,0,0,0-3.58,3.58l-32,64A8,8,0,0,0,80,184a8.1,8.1,0,0,0,3.58-.84l64-32a8.05,8.05,0,0,0,3.58-3.58l32-64a8,8,0,0,0-10.74-10.74ZM138,138,97.89,158.11,118,118l40.15-20.07Z"
                }))],
                ["thin", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M128,28A100,100,0,1,0,228,128,100.11,100.11,0,0,0,128,28Zm0,192a92,92,0,1,1,92-92A92.1,92.1,0,0,1,128,220ZM174.21,76.42l-64,32a4.08,4.08,0,0,0-1.79,1.79l-32,64A4,4,0,0,0,80,180a4.05,4.05,0,0,0,1.79-.42l64-32a4.08,4.08,0,0,0,1.79-1.79l32-64a4,4,0,0,0-5.37-5.37ZM141,141l-52.08,26L115,115l52.08-26Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                c = Object.getOwnPropertyDescriptors,
                d = Object.getOwnPropertySymbols,
                f = Object.prototype.hasOwnProperty,
                m = Object.prototype.propertyIsEnumerable,
                s = (e, t, l) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : e[t] = l;
            let p = (0, r.forwardRef)((e, t) => r.createElement(a.A, i(((e, t) => {
                for (var l in t || (t = {})) f.call(t, l) && s(e, l, t[l]);
                if (d)
                    for (var l of d(t)) m.call(t, l) && s(e, l, t[l]);
                return e
            })({
                ref: t
            }, e), c({
                weights: n
            }))));
            p.displayName = "Compass"
        },
        84376: (e, t, l) => {
            l.d(t, {
                A: () => f
            });
            var r = l(7787),
                a = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                c = (e, t, l) => t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: l
                }) : e[t] = l;
            let d = (0, r.forwardRef)((e, t) => {
                let {
                    alt: l,
                    color: a = "currentColor",
                    size: d = "1em",
                    weight: f = "regular",
                    mirrored: m = !1,
                    children: s,
                    weights: p
                } = e, b = ((e, t) => {
                    var l = {};
                    for (var r in e) o.call(e, r) && 0 > t.indexOf(r) && (l[r] = e[r]);
                    if (null != e && n)
                        for (var r of n(e)) 0 > t.indexOf(r) && i.call(e, r) && (l[r] = e[r]);
                    return l
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return r.createElement("svg", ((e, t) => {
                    for (var l in t || (t = {})) o.call(t, l) && c(e, l, t[l]);
                    if (n)
                        for (var l of n(t)) i.call(t, l) && c(e, l, t[l]);
                    return e
                })({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: d,
                    height: d,
                    fill: a,
                    viewBox: "0 0 256 256",
                    transform: m ? "scale(-1, 1)" : void 0
                }, b), !!l && r.createElement("title", null, l), s, p.get(f))
            });
            d.displayName = "SSRBase";
            let f = d
        }
    }
]);