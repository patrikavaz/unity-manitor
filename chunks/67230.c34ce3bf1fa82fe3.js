try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "deafd764-220f-438d-9136-5bf124bfca67", e._sentryDebugIdIdentifier = "sentry-dbid-deafd764-220f-438d-9136-5bf124bfca67")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [67230], {
        10863: (e, a, t) => {
            t.d(a, {
                A: () => d
            });
            var r = t(90337),
                l = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                h = (e, a, t) => a in e ? l(e, a, {
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
                    weight: d = "regular",
                    mirrored: f = !1,
                    children: s,
                    weights: V
                } = e, p = ((e, a) => {
                    var t = {};
                    for (var r in e) o.call(e, r) && 0 > a.indexOf(r) && (t[r] = e[r]);
                    if (null != e && n)
                        for (var r of n(e)) 0 > a.indexOf(r) && i.call(e, r) && (t[r] = e[r]);
                    return t
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return r.createElement("svg", ((e, a) => {
                    for (var t in a || (a = {})) o.call(a, t) && h(e, t, a[t]);
                    if (n)
                        for (var t of n(a)) i.call(a, t) && h(e, t, a[t]);
                    return e
                })({
                    ref: a,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: c,
                    height: c,
                    fill: l,
                    viewBox: "0 0 256 256",
                    transform: f ? "scale(-1, 1)" : void 0
                }, p), !!t && r.createElement("title", null, t), s, V.get(d))
            });
            c.displayName = "SSRBase";
            let d = c
        },
        67230: (e, a, t) => {
            t.r(a), t.d(a, {
                Chats: () => V
            });
            var r = t(90337),
                l = t(10863);
            let n = new Map([
                ["bold", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M216,76H188V48a20,20,0,0,0-20-20H40A20,20,0,0,0,20,48V176a12,12,0,0,0,19.54,9.33l28.46-23V184a20,20,0,0,0,20,20h92.17l36.29,29.33A12,12,0,0,0,236,224V96A20,20,0,0,0,216,76ZM44,150.87V52H164v80H71.58A12,12,0,0,0,64,134.67Zm168,48-20-16.2a12,12,0,0,0-7.54-2.67H92V156h76a20,20,0,0,0,20-20V100h24Z"
                }))],
                ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M224,96V224l-39.58-32H88a8,8,0,0,1-8-8V144h88a8,8,0,0,0,8-8V88h40A8,8,0,0,1,224,96Z",
                    opacity: "0.2"
                }), r.createElement("path", {
                    d: "M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z"
                }))],
                ["fill", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M232,96a16,16,0,0,0-16-16H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8Zm-42.55,89.78a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32V207.25Z"
                }))],
                ["light", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M216,82H182V48a14,14,0,0,0-14-14H40A14,14,0,0,0,26,48V176a6,6,0,0,0,3.42,5.41A5.86,5.86,0,0,0,32,182a6,6,0,0,0,3.77-1.33L73.71,150H74v34a14,14,0,0,0,14,14h94.29l37.94,30.67A6,6,0,0,0,224,230a5.86,5.86,0,0,0,2.58-.59A6,6,0,0,0,230,224V96A14,14,0,0,0,216,82ZM71.58,138a6,6,0,0,0-3.77,1.33L38,163.43V48a2,2,0,0,1,2-2H168a2,2,0,0,1,2,2v88a2,2,0,0,1-2,2ZM218,211.43l-29.81-24.1a6,6,0,0,0-3.77-1.33H88a2,2,0,0,1-2-2V150h82a14,14,0,0,0,14-14V94h34a2,2,0,0,1,2,2Z"
                }))],
                ["regular", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M216,80H184V48a16,16,0,0,0-16-16H40A16,16,0,0,0,24,48V176a8,8,0,0,0,13,6.22L72,154V184a16,16,0,0,0,16,16h93.59L219,230.22a8,8,0,0,0,5,1.78,8,8,0,0,0,8-8V96A16,16,0,0,0,216,80ZM66.55,137.78,40,159.25V48H168v88H71.58A8,8,0,0,0,66.55,137.78ZM216,207.25l-26.55-21.47a8,8,0,0,0-5-1.78H88V152h80a16,16,0,0,0,16-16V96h32Z"
                }))],
                ["thin", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M216,84H180V48a12,12,0,0,0-12-12H40A12,12,0,0,0,28,48V176a4,4,0,0,0,4,4,4,4,0,0,0,2.51-.89L73,148h3v36a12,12,0,0,0,12,12h95l38.49,31.11A4,4,0,0,0,224,228a4,4,0,0,0,4-4V96A12,12,0,0,0,216,84ZM71.58,140a4,4,0,0,0-2.51.89L36,167.62V48a4,4,0,0,1,4-4H168a4,4,0,0,1,4,4v88a4,4,0,0,1-4,4ZM220,215.62l-33.07-26.73a4,4,0,0,0-2.51-.89H88a4,4,0,0,1-4-4V148h84a12,12,0,0,0,12-12V92h36a4,4,0,0,1,4,4Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                h = Object.getOwnPropertyDescriptors,
                c = Object.getOwnPropertySymbols,
                d = Object.prototype.hasOwnProperty,
                f = Object.prototype.propertyIsEnumerable,
                s = (e, a, t) => a in e ? o(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t;
            let V = (0, r.forwardRef)((e, a) => r.createElement(l.A, i(((e, a) => {
                for (var t in a || (a = {})) d.call(a, t) && s(e, t, a[t]);
                if (c)
                    for (var t of c(a)) f.call(a, t) && s(e, t, a[t]);
                return e
            })({
                ref: a
            }, e), h({
                weights: n
            }))));
            V.displayName = "Chats"
        }
    }
]);