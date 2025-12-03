try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "366f6458-705d-40bf-b059-cf5227220af2", e._sentryDebugIdIdentifier = "sentry-dbid-366f6458-705d-40bf-b059-cf5227220af2")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [40202], {
        10863: (e, t, r) => {
            r.d(t, {
                A: () => d
            });
            var l = r(90337),
                a = Object.defineProperty,
                n = Object.getOwnPropertySymbols,
                o = Object.prototype.hasOwnProperty,
                i = Object.prototype.propertyIsEnumerable,
                c = (e, t, r) => t in e ? a(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r;
            let f = (0, l.forwardRef)((e, t) => {
                let {
                    alt: r,
                    color: a = "currentColor",
                    size: f = "1em",
                    weight: d = "regular",
                    mirrored: p = !1,
                    children: s,
                    weights: b
                } = e, u = ((e, t) => {
                    var r = {};
                    for (var l in e) o.call(e, l) && 0 > t.indexOf(l) && (r[l] = e[l]);
                    if (null != e && n)
                        for (var l of n(e)) 0 > t.indexOf(l) && i.call(e, l) && (r[l] = e[l]);
                    return r
                })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
                return l.createElement("svg", ((e, t) => {
                    for (var r in t || (t = {})) o.call(t, r) && c(e, r, t[r]);
                    if (n)
                        for (var r of n(t)) i.call(t, r) && c(e, r, t[r]);
                    return e
                })({
                    ref: t,
                    xmlns: "http://www.w3.org/2000/svg",
                    width: f,
                    height: f,
                    fill: a,
                    viewBox: "0 0 256 256",
                    transform: p ? "scale(-1, 1)" : void 0
                }, u), !!r && l.createElement("title", null, r), s, b.get(d))
            });
            f.displayName = "SSRBase";
            let d = f
        },
        40202: (e, t, r) => {
            r.r(t), r.d(t, {
                Target: () => b
            });
            var l = r(90337),
                a = r(10863);
            let n = new Map([
                ["bold", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M229.26,90.4a108,108,0,0,1-177.63,114A108,108,0,0,1,195.41,43.63l20.1-20.11a12,12,0,0,1,17,17l-96,96a12,12,0,1,1-17-17l24-24a36,36,0,1,0,19.76,39.65,12,12,0,0,1,23.53,4.74,60,60,0,1,1-25.73-62L178.3,60.74a84,84,0,1,0,28.46,38,12,12,0,1,1,22.5-8.35Z"
                }))],
                ["duotone", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M176,128a48,48,0,1,1-48-48A48,48,0,0,1,176,128Z",
                    opacity: "0.2"
                }), l.createElement("path", {
                    d: "M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"
                }))],
                ["fill", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32L167.6,99.71h0l-37.71,37.71-23.95,23.95a40,40,0,0,0,62-35.67,8,8,0,1,1,16-.9,56,56,0,0,1-95.5,42.79h0a56,56,0,0,1,73.13-84.43L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"
                }))],
                ["light", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M220.06,84a102.06,102.06,0,1,1-24.31-32.27l24-24a6,6,0,0,1,8.48,8.49l-96,96a6,6,0,1,1-8.48-8.49l29.39-29.4a42,42,0,1,0,16.78,31.24,6,6,0,1,1,12-.68A54,54,0,1,1,161.7,85.83l25.54-25.55a89.91,89.91,0,1,0,22,28.93A6,6,0,1,1,220.06,84Z"
                }))],
                ["regular", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z"
                }))],
                ["thin", l.createElement(l.Fragment, null, l.createElement("path", {
                    d: "M218.26,84.89a100.16,100.16,0,1,1-22.44-30.37l25.35-25.35a4,4,0,1,1,5.66,5.66l-96,96a4,4,0,0,1-5.66-5.66l31-31a44,44,0,1,0,15.78,31.3,4,4,0,0,1,8-.46,52,52,0,1,1-18.1-36.51l28.34-28.33A92,92,0,0,0,63,193.05,92,92,0,0,0,211,88.33a4,4,0,1,1,7.22-3.44Z"
                }))]
            ]);
            var o = Object.defineProperty,
                i = Object.defineProperties,
                c = Object.getOwnPropertyDescriptors,
                f = Object.getOwnPropertySymbols,
                d = Object.prototype.hasOwnProperty,
                p = Object.prototype.propertyIsEnumerable,
                s = (e, t, r) => t in e ? o(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r;
            let b = (0, l.forwardRef)((e, t) => l.createElement(a.A, i(((e, t) => {
                for (var r in t || (t = {})) d.call(t, r) && s(e, r, t[r]);
                if (f)
                    for (var r of f(t)) p.call(t, r) && s(e, r, t[r]);
                return e
            })({
                ref: t
            }, e), c({
                weights: n
            }))));
            b.displayName = "Target"
        }
    }
]);