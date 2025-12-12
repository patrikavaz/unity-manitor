try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        a = (new e.Error).stack;
    a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "356e218b-d4ba-4296-9de1-4a012cb8a721", e._sentryDebugIdIdentifier = "sentry-dbid-356e218b-d4ba-4296-9de1-4a012cb8a721")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [14065], {
        14065: (e, a, t) => {
            t.r(a), t.d(a, {
                CalendarDots: () => Z
            });
            var r = t(11698),
                l = t(54757);
            let n = new Map([
                ["bold", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M208,28H188V24a12,12,0,0,0-24,0v4H92V24a12,12,0,0,0-24,0v4H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28ZM68,52a12,12,0,0,0,24,0h72a12,12,0,0,0,24,0h16V76H52V52ZM52,204V100H204V204Zm92-76a16,16,0,1,1-16-16A16,16,0,0,1,144,128Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,192,128ZM96,176a16,16,0,1,1-16-16A16,16,0,0,1,96,176Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,144,176Zm48,0a16,16,0,1,1-16-16A16,16,0,0,1,192,176Z"
                }))],
                ["duotone", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M216,48V88H40V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",
                    opacity: "0.2"
                }), r.createElement("path", {
                    d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"
                }))],
                ["fill", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM84,184a12,12,0,1,1,12-12A12,12,0,0,1,84,184Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,184Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,128,144Zm44,40a12,12,0,1,1,12-12A12,12,0,0,1,172,184Zm0-40a12,12,0,1,1,12-12A12,12,0,0,1,172,144Zm36-64H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24Z"
                }))],
                ["light", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M208,34H182V24a6,6,0,0,0-12,0V34H86V24a6,6,0,0,0-12,0V34H48A14,14,0,0,0,34,48V208a14,14,0,0,0,14,14H208a14,14,0,0,0,14-14V48A14,14,0,0,0,208,34ZM48,46H74V56a6,6,0,0,0,12,0V46h84V56a6,6,0,0,0,12,0V46h26a2,2,0,0,1,2,2V82H46V48A2,2,0,0,1,48,46ZM208,210H48a2,2,0,0,1-2-2V94H210V208A2,2,0,0,1,208,210Zm-70-78a10,10,0,1,1-10-10A10,10,0,0,1,138,132Zm44,0a10,10,0,1,1-10-10A10,10,0,0,1,182,132ZM94,172a10,10,0,1,1-10-10A10,10,0,0,1,94,172Zm44,0a10,10,0,1,1-10-10A10,10,0,0,1,138,172Zm44,0a10,10,0,1,1-10-10A10,10,0,0,1,182,172Z"
                }))],
                ["regular", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-68-76a12,12,0,1,1-12-12A12,12,0,0,1,140,132Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,132ZM96,172a12,12,0,1,1-12-12A12,12,0,0,1,96,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,140,172Zm44,0a12,12,0,1,1-12-12A12,12,0,0,1,184,172Z"
                }))],
                ["thin", r.createElement(r.Fragment, null, r.createElement("path", {
                    d: "M208,36H180V24a4,4,0,0,0-8,0V36H84V24a4,4,0,0,0-8,0V36H48A12,12,0,0,0,36,48V208a12,12,0,0,0,12,12H208a12,12,0,0,0,12-12V48A12,12,0,0,0,208,36ZM48,44H76V56a4,4,0,0,0,8,0V44h88V56a4,4,0,0,0,8,0V44h28a4,4,0,0,1,4,4V84H44V48A4,4,0,0,1,48,44ZM208,212H48a4,4,0,0,1-4-4V92H212V208A4,4,0,0,1,208,212Zm-72-80a8,8,0,1,1-8-8A8,8,0,0,1,136,132Zm44,0a8,8,0,1,1-8-8A8,8,0,0,1,180,132ZM92,172a8,8,0,1,1-8-8A8,8,0,0,1,92,172Zm44,0a8,8,0,1,1-8-8A8,8,0,0,1,136,172Zm44,0a8,8,0,1,1-8-8A8,8,0,0,1,180,172Z"
                }))]
            ]);
            var V = Object.defineProperty,
                o = Object.defineProperties,
                m = Object.getOwnPropertyDescriptors,
                i = Object.getOwnPropertySymbols,
                c = Object.prototype.hasOwnProperty,
                d = Object.prototype.propertyIsEnumerable,
                A = (e, a, t) => a in e ? V(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t;
            let Z = (0, r.forwardRef)((e, a) => r.createElement(l.A, o(((e, a) => {
                for (var t in a || (a = {})) c.call(a, t) && A(e, t, a[t]);
                if (i)
                    for (var t of i(a)) d.call(a, t) && A(e, t, a[t]);
                return e
            })({
                ref: a
            }, e), m({
                weights: n
            }))));
            Z.displayName = "CalendarDots"
        },
        54757: (e, a, t) => {
            t.d(a, {
                A: () => c
            });
            var r = t(11698),
                l = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                V = Object.prototype.hasOwnProperty,
                o = Object.prototype.propertyIsEnumerable,
                m = (e, a, t) => a in e ? l(e, a, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t
                }) : e[a] = t;
            let i = (0, r.forwardRef)((e, a) => {
                let {
                    alt: t,
                    color: l = "currentColor",
                    size: i = "1em",
                    weight: c = "regular",
                    mirrored: d = !1,
                    children: A,
                    weights: Z
                } = e, H = ((e, a) => {
                    var t = {};
                    for (var r in e) V.call(e, r) && 0 > a.indexOf(r) && (t[r] = e[r]);
                    if (null != e && n)
                        for (var r of n(e)) 0 > a.indexOf(r) && o.call(e, r) && (t[r] = e[r]);
                    return t
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return r.createElement("svg", ((e, a) => {
                    for (var t in a || (a = {})) V.call(a, t) && m(e, t, a[t]);
                    if (n)
                        for (var t of n(a)) o.call(a, t) && m(e, t, a[t]);
                    return e
                })({
                    ref: a,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: i,
                    height: i,
                    fill: l,
                    viewBox: "0 0 256 256",
                    transform: d ? "scale(-1, 1)" : void 0
                }, H), !!t && r.createElement("title", null, t), A, Z.get(c))
            });
            i.displayName = "SSRBase";
            let c = i
        }
    }
]);