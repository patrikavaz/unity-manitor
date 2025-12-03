try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "7eed71d7-274a-4e51-99c4-b13224d362fe", e._sentryDebugIdIdentifier = "sentry-dbid-7eed71d7-274a-4e51-99c4-b13224d362fe")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [24011], {
        10863: (e, a, t) => {
            t.d(a, {
                A: () => f
            });
            var r = t(90337),
                l = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                d = (e, a, t) => a in e ? l(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t;
            let c = (0, r.forwardRef)((e, a) => {
                let {
                    alt: t,
                    color: l = "currentColor",
                    size: c = "1em",
                    weight: f = "regular",
                    mirrored: m = !1,
                    children: p,
                    weights: s
                } = e, A = ((e, a) => {
                    var t = {};
                    for (var r in e) o.call(e, r) && 0 > a.indexOf(r) && (t[r] = e[r]);
                    if (null != e && n)
                        for (var r of n(e)) 0 > a.indexOf(r) && i.call(e, r) && (t[r] = e[r]);
                    return t
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return r.createElement("svg", ((e, a) => {
                    for (var t in a || (a = {})) o.call(a, t) && d(e, t, a[t]);
                    if (n)
                        for (var t of n(a)) i.call(a, t) && d(e, t, a[t]);
                    return e
                })({
                    ref: a,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: c,
                    height: c,
                    fill: l,
                    viewBox: "0 0 256 256",
                    transform: m ? "scale(-1, 1)" : void 0
                }, A), !!t && r.createElement("title", null, t), p, s.get(f))
            });
            c.displayName = "SSRBase";
            let f = c
        },
        24011: (e, a, t) => {
            t.r(a), t.d(a, {
                IdentificationBadge: () => s
            });
            var r = t(90337),
                l = t(10863);
            let n = new Map([
                ["bold", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M200,20H56A20,20,0,0,0,36,40V216a20,20,0,0,0,20,20H200a20,20,0,0,0,20-20V40A20,20,0,0,0,200,20Zm-4,192H60V44H196ZM84,68A12,12,0,0,1,96,56h64a12,12,0,0,1,0,24H96A12,12,0,0,1,84,68Zm8.8,127.37a48,48,0,0,1,70.4,0,12,12,0,0,0,17.6-16.32,72,72,0,0,0-19.21-14.68,44,44,0,1,0-67.19,0,72.12,72.12,0,0,0-19.2,14.68,12,12,0,0,0,17.6,16.32ZM128,116a20,20,0,1,1-20,20A20,20,0,0,1,128,116Z"
                }))],
                ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M200,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V40A8,8,0,0,0,200,32ZM128,168a32,32,0,1,1,32-32A32,32,0,0,1,128,168Z",
                    opacity: "0.2"
                }), r.createElement("path", {
                    d: "M75.19,198.4a8,8,0,0,0,11.21-1.6,52,52,0,0,1,83.2,0,8,8,0,1,0,12.8-9.6A67.88,67.88,0,0,0,155,165.51a40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,73.6,187.2,8,8,0,0,0,75.19,198.4ZM128,112a24,24,0,1,1-24,24A24,24,0,0,1,128,112Zm72-88H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200ZM88,64a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Z"
                }))],
                ["fill", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM96,48h64a8,8,0,0,1,0,16H96a8,8,0,0,1,0-16Zm84.81,150.4a8,8,0,0,1-11.21-1.6,52,52,0,0,0-83.2,0,8,8,0,1,1-12.8-9.6A67.88,67.88,0,0,1,101,165.51a40,40,0,1,1,53.94,0A67.88,67.88,0,0,1,182.4,187.2,8,8,0,0,1,180.81,198.4ZM152,136a24,24,0,1,1-24-24A24,24,0,0,1,152,136Z"
                }))],
                ["light", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M151.11,166.13a38,38,0,1,0-46.22,0A65.75,65.75,0,0,0,75.2,188.4a6,6,0,0,0,9.6,7.2,54,54,0,0,1,86.4,0,6,6,0,0,0,9.6-7.2A65.75,65.75,0,0,0,151.11,166.13ZM128,110a26,26,0,1,1-26,26A26,26,0,0,1,128,110Zm72-84H56A14,14,0,0,0,42,40V216a14,14,0,0,0,14,14H200a14,14,0,0,0,14-14V40A14,14,0,0,0,200,26Zm2,190a2,2,0,0,1-2,2H56a2,2,0,0,1-2-2V40a2,2,0,0,1,2-2H200a2,2,0,0,1,2,2ZM90,64a6,6,0,0,1,6-6h64a6,6,0,0,1,0,12H96A6,6,0,0,1,90,64Z"
                }))],
                ["regular", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M75.19,198.4a8,8,0,0,0,11.21-1.6,52,52,0,0,1,83.2,0,8,8,0,1,0,12.8-9.6A67.88,67.88,0,0,0,155,165.51a40,40,0,1,0-53.94,0A67.88,67.88,0,0,0,73.6,187.2,8,8,0,0,0,75.19,198.4ZM128,112a24,24,0,1,1-24,24A24,24,0,0,1,128,112Zm72-88H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm0,192H56V40H200ZM88,64a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H96A8,8,0,0,1,88,64Z"
                }))],
                ["thin", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M146.7,166.75a36,36,0,1,0-37.4,0A63.61,63.61,0,0,0,76.8,189.6a4,4,0,0,0,6.4,4.8,56,56,0,0,1,89.6,0,4,4,0,0,0,6.4-4.8A63.65,63.65,0,0,0,146.7,166.75ZM100,136a28,28,0,1,1,28,28A28,28,0,0,1,100,136ZM200,28H56A12,12,0,0,0,44,40V216a12,12,0,0,0,12,12H200a12,12,0,0,0,12-12V40A12,12,0,0,0,200,28Zm4,188a4,4,0,0,1-4,4H56a4,4,0,0,1-4-4V40a4,4,0,0,1,4-4H200a4,4,0,0,1,4,4ZM92,64a4,4,0,0,1,4-4h64a4,4,0,0,1,0,8H96A4,4,0,0,1,92,64Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                d = Object.getOwnPropertyDescriptors,
                c = Object.getOwnPropertySymbols,
                f = Object.prototype.hasOwnProperty,
                m = Object.prototype.propertyIsEnumerable,
                p = (e, a, t) => a in e ? o(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t;
            let s = (0, r.forwardRef)((e, a) => r.createElement(l.A, i(((e, a) => {
                for (var t in a || (a = {})) f.call(a, t) && p(e, t, a[t]);
                if (c)
                    for (var t of c(a)) m.call(a, t) && p(e, t, a[t]);
                return e
            })({
                ref: a
            }, e), d({
                weights: n
            }))));
            s.displayName = "IdentificationBadge"
        }
    }
]);