try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "70c0684d-72b7-4e32-ba04-2236d852e7c5", e._sentryDebugIdIdentifier = "sentry-dbid-70c0684d-72b7-4e32-ba04-2236d852e7c5")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [67317], {
        10863: (e, a, t) => {
            t.d(a, {
                A: () => d
            });
            var r = t(90337),
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
            let m = (0, r.forwardRef)((e, a) => {
                let {
                    alt: t,
                    color: l = "currentColor",
                    size: m = "1em",
                    weight: d = "regular",
                    mirrored: p = !1,
                    children: s,
                    weights: f
                } = e, h = ((e, a) => {
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
                    width: m,
                    height: m,
                    fill: l,
                    viewBox: "0 0 256 256",
                    transform: p ? "scale(-1, 1)" : void 0
                }, h), !!t && r.createElement("title", null, t), s, f.get(d))
            });
            m.displayName = "SSRBase";
            let d = m
        },
        67317: (e, a, t) => {
            t.r(a), t.d(a, {
                Newspaper: () => f
            });
            var r = t(90337),
                l = t(10863);
            let n = new Map([
                ["bold", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M92,108a12,12,0,0,1,12-12h72a12,12,0,0,1,0,24H104A12,12,0,0,1,92,108Zm12,52h72a12,12,0,0,0,0-24H104a12,12,0,0,0,0,24ZM236,64V184a28,28,0,0,1-28,28H36A32,32,0,0,1,4,180V88a12,12,0,0,1,24,0v92a8,8,0,0,0,16,0V64A20,20,0,0,1,64,44H216A20,20,0,0,1,236,64Zm-24,4H68V180a32,32,0,0,1-1,8H208a4,4,0,0,0,4-4Z"
                }))],
                ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M224,64V184a16,16,0,0,1-16,16H32a16,16,0,0,0,16-16V64a8,8,0,0,1,8-8H216A8,8,0,0,1,224,64Z",
                    opacity: "0.2"
                }), r.createElement("path", {
                    d: "M88,112a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H96A8,8,0,0,1,88,112Zm8,40h80a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM232,64V184a24,24,0,0,1-24,24H32A24,24,0,0,1,8,184.11V88a8,8,0,0,1,16,0v96a8,8,0,0,0,16,0V64A16,16,0,0,1,56,48H216A16,16,0,0,1,232,64Zm-16,0H56V184a23.84,23.84,0,0,1-1.37,8H208a8,8,0,0,0,8-8Z"
                }))],
                ["fill", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M216,48H56A16,16,0,0,0,40,64V184a8,8,0,0,1-16,0V88A8,8,0,0,0,8,88v96.11A24,24,0,0,0,32,208H208a24,24,0,0,0,24-24V64A16,16,0,0,0,216,48ZM176,152H96a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Z"
                }))],
                ["light", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M182,112a6,6,0,0,1-6,6H96a6,6,0,0,1,0-12h80A6,6,0,0,1,182,112Zm-6,26H96a6,6,0,0,0,0,12h80a6,6,0,0,0,0-12Zm54-74V184a22,22,0,0,1-22,22H32a22,22,0,0,1-22-21.91V88a6,6,0,0,1,12,0v96a10,10,0,0,0,20,0V64A14,14,0,0,1,56,50H216A14,14,0,0,1,230,64Zm-12,0a2,2,0,0,0-2-2H56a2,2,0,0,0-2,2V184a21.84,21.84,0,0,1-2.41,10H208a10,10,0,0,0,10-10Z"
                }))],
                ["regular", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M88,112a8,8,0,0,1,8-8h80a8,8,0,0,1,0,16H96A8,8,0,0,1,88,112Zm8,40h80a8,8,0,0,0,0-16H96a8,8,0,0,0,0,16ZM232,64V184a24,24,0,0,1-24,24H32A24,24,0,0,1,8,184.11V88a8,8,0,0,1,16,0v96a8,8,0,0,0,16,0V64A16,16,0,0,1,56,48H216A16,16,0,0,1,232,64Zm-16,0H56V184a23.84,23.84,0,0,1-1.37,8H208a8,8,0,0,0,8-8Z"
                }))],
                ["thin", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M180,112a4,4,0,0,1-4,4H96a4,4,0,0,1,0-8h80A4,4,0,0,1,180,112Zm-4,28H96a4,4,0,0,0,0,8h80a4,4,0,0,0,0-8Zm52-76V184a20,20,0,0,1-20,20H32a20,20,0,0,1-20-19.92V88a4,4,0,0,1,8,0v96a12,12,0,0,0,24,0V64A12,12,0,0,1,56,52H216A12,12,0,0,1,228,64Zm-8,0a4,4,0,0,0-4-4H56a4,4,0,0,0-4,4V184a19.86,19.86,0,0,1-4,12H208a12,12,0,0,0,12-12Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                c = Object.getOwnPropertyDescriptors,
                m = Object.getOwnPropertySymbols,
                d = Object.prototype.hasOwnProperty,
                p = Object.prototype.propertyIsEnumerable,
                s = (e, a, t) => a in e ? o(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t;
            let f = (0, r.forwardRef)((e, a) => r.createElement(l.A, i(((e, a) => {
                for (var t in a || (a = {})) d.call(a, t) && s(e, t, a[t]);
                if (m)
                    for (var t of m(a)) p.call(a, t) && s(e, t, a[t]);
                return e
            })({
                ref: a
            }, e), c({
                weights: n
            }))));
            f.displayName = "Newspaper"
        }
    }
]);