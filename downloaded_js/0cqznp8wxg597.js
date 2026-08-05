(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 454704, e => {
    "use strict";
    e.i(203217);
    var t = e.i(14666),
        r = e.i(499531),
        n = e.i(963864),
        a = e.i(416007),
        l = e.i(129766),
        o = e.i(820847),
        i = e.i(335029),
        s = r,
        u = e.i(481522);

    function c(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }
    class d extends s.Component {
        getSnapshotBeforeUpdate(e) {
            let t = this.props.childRef.current;
            if ((0, i.isHTMLElement)(t) && e.isPresent && !this.props.isPresent && !1 !== this.props.pop) {
                let e = t.offsetParent,
                    r = (0, i.isHTMLElement)(e) && e.offsetWidth || 0,
                    n = (0, i.isHTMLElement)(e) && e.offsetHeight || 0,
                    a = getComputedStyle(t),
                    l = this.props.sizeRef.current;
                l.height = parseFloat(a.height), l.width = parseFloat(a.width), l.top = t.offsetTop, l.left = t.offsetLeft, l.right = r - l.width - l.left, l.bottom = n - l.height - l.top, l.direction = a.direction
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }

    function f({
        children: e,
        isPresent: n,
        anchorX: a,
        anchorY: l,
        root: o,
        pop: i
    }) {
        let p = (0, s.useId)(),
            m = (0, s.useRef)(null),
            h = (0, s.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                direction: "ltr"
            }),
            {
                nonce: g
            } = (0, s.useContext)(u.MotionConfigContext),
            b = function(...e) {
                return r.useCallback(function(...e) {
                    return t => {
                        let r = !1,
                            n = e.map(e => {
                                let n = c(e, t);
                                return r || "function" != typeof n || (r = !0), n
                            });
                        if (r) return () => {
                            for (let t = 0; t < n.length; t++) {
                                let r = n[t];
                                "function" == typeof r ? r() : c(e[t], null)
                            }
                        }
                    }
                }(...e), e)
            }(m, e.props?.ref ?? e?.ref);
        return (0, s.useInsertionEffect)(() => {
            let {
                width: e,
                height: t,
                top: r,
                left: s,
                right: u,
                bottom: c,
                direction: d
            } = h.current;
            if (n || !1 === i || !m.current || !e || !t) return;
            let f = "rtl" === d,
                b = "left" === a ? f ? `right: ${u}` : `left: ${s}` : f ? `left: ${s}` : `right: ${u}`,
                y = "bottom" === l ? `bottom: ${c}` : `top: ${r}`;
            m.current.dataset.motionPopId = p;
            let L = document.createElement("style");
            g && (L.nonce = g);
            let v = o ?? document.head;
            return v.appendChild(L), L.sheet && L.sheet.insertRule(`
          [data-motion-pop-id="${p}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${b}px !important;
            ${y}px !important;
          }
        `), () => {
                m.current?.removeAttribute("data-motion-pop-id"), v.contains(L) && v.removeChild(L)
            }
        }, [n]), (0, t.jsx)(d, {
            isPresent: n,
            childRef: m,
            sizeRef: h,
            pop: i,
            children: !1 === i ? e : s.cloneElement(e, {
                ref: b
            })
        })
    }
    let p = ({
        children: e,
        initial: n,
        isPresent: i,
        onExitComplete: s,
        custom: u,
        presenceAffectsLayout: c,
        mode: d,
        anchorX: p,
        anchorY: h,
        root: g
    }) => {
        let b = (0, a.useConstant)(m),
            y = (0, r.useId)(),
            L = (0, r.useRef)(i),
            v = (0, r.useRef)(s);
        (0, l.useIsomorphicLayoutEffect)(() => {
            L.current = i, v.current = s
        });
        let E = !0,
            x = (0, r.useMemo)(() => (E = !1, {
                id: y,
                initial: n,
                isPresent: i,
                custom: u,
                onExitComplete: e => {
                    for (let t of (b.set(e, !0), b.values()))
                        if (!t) return;
                    s && s()
                },
                register: e => (b.set(e, !1), () => {
                    b.delete(e), L.current || b.size || v.current?.()
                })
            }), [i, b, s]);
        return c && E && (x = {
            ...x
        }), (0, r.useMemo)(() => {
            b.forEach((e, t) => b.set(t, !1))
        }, [i]), r.useEffect(() => {
            i || b.size || !s || s()
        }, [i]), e = (0, t.jsx)(f, {
            pop: "popLayout" === d,
            isPresent: i,
            anchorX: p,
            anchorY: h,
            root: g,
            children: e
        }), (0, t.jsx)(o.PresenceContext.Provider, {
            value: x,
            children: e
        })
    };

    function m() {
        return new Map
    }
    var h = e.i(25616);
    let g = e => e.key || "";

    function b(e) {
        let t = [];
        return r.Children.forEach(e, e => {
            (0, r.isValidElement)(e) && t.push(e)
        }), t
    }
    e.s(["AnimatePresence", 0, ({
        children: e,
        custom: o,
        initial: i = !0,
        onExitComplete: s,
        presenceAffectsLayout: u = !0,
        mode: c = "sync",
        propagate: d = !1,
        anchorX: f = "left",
        anchorY: m = "top",
        root: y
    }) => {
        let [L, v] = (0, h.usePresence)(d), E = (0, r.useMemo)(() => b(e), [e]), x = d && !L ? [] : E.map(g), w = (0, r.useRef)(!0), C = (0, r.useRef)(E), k = (0, a.useConstant)(() => new Map), P = (0, r.useRef)(new Set), [A, M] = (0, r.useState)(E), [j, R] = (0, r.useState)(E);
        (0, l.useIsomorphicLayoutEffect)(() => {
            w.current = !1, C.current = E;
            for (let e = 0; e < j.length; e++) {
                let t = g(j[e]);
                x.includes(t) ? (k.delete(t), P.current.delete(t)) : !0 !== k.get(t) && k.set(t, !1)
            }
        }, [j, x.length, x.join("-")]);
        let S = [];
        if (E !== A) {
            let e = [...E];
            for (let t = 0; t < j.length; t++) {
                let r = j[t],
                    n = g(r);
                x.includes(n) || (e.splice(t, 0, r), S.push(r))
            }
            return "wait" === c && S.length && (e = S), R(b(e)), M(E), null
        }
        let {
            forceRender: T
        } = (0, r.useContext)(n.LayoutGroupContext);
        return (0, t.jsx)(t.Fragment, {
            children: j.map(e => {
                let r = g(e),
                    n = (!d || !!L) && (E === j || x.includes(r));
                return (0, t.jsx)(p, {
                    isPresent: n,
                    initial: (!w.current || !!i) && void 0,
                    custom: o,
                    presenceAffectsLayout: u,
                    mode: c,
                    root: y,
                    onExitComplete: n ? void 0 : () => {
                        if (P.current.has(r) || !k.has(r)) return;
                        P.current.add(r), k.set(r, !0);
                        let e = !0;
                        k.forEach(t => {
                            t || (e = !1)
                        }), e && (T?.(), R(C.current), d && v?.(), s && s())
                    },
                    anchorX: f,
                    anchorY: m,
                    children: e
                }, r)
            })
        })
    }], 454704)
}, 913425, (e, t, r) => {
    t.exports = e.r(501229)
}, 279858, e => {
    "use strict";
    var t = e.i(679933),
        r = e.i(97584),
        n = e.i(429305),
        a = e.i(513485),
        l = e.i(629959);
    e.s(["useLink", 0, function(e, o) {
        let {
            elementType: i = "a",
            onPress: s,
            onPressStart: u,
            onPressEnd: c,
            onClick: d,
            isDisabled: f,
            ...p
        } = e, m = {};
        "a" !== i && (m = {
            role: "link",
            tabIndex: f ? void 0 : 0
        });
        let {
            focusableProps: h
        } = (0, a.useFocusable)(e, o), {
            pressProps: g,
            isPressed: b
        } = (0, l.usePress)({
            onPress: s,
            onPressStart: u,
            onPressEnd: c,
            onClick: d,
            isDisabled: f,
            ref: o
        }), y = (0, t.filterDOMProps)(p, {
            labelable: !0
        }), L = (0, n.mergeProps)(h, g), v = (0, r.useRouter)(), E = (0, r.useLinkProps)(e);
        return {
            isPressed: b,
            linkProps: (0, n.mergeProps)(y, E, {
                ...L,
                ...m,
                "aria-disabled": f || void 0,
                "aria-current": e["aria-current"],
                onClick: t => {
                    g.onClick?.(t), (0, r.handleLinkClick)(t, v, e.href, e.routerOptions)
                }
            })
        }
    }])
}, 357059, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(723221);

    function a({
        reason: e,
        children: t
    }) {
        if ("u" < typeof window) throw Object.defineProperty(new n.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return t
    }
}, 578959, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let n = e.r(14666),
        a = e.r(320666),
        l = e.r(451116),
        o = e.r(243285),
        i = e.r(61222);

    function s({
        moduleIds: e
    }) {
        if ("u" > typeof window) return null;
        let t = l.workAsyncStorage.getStore();
        if (void 0 === t) return null;
        let r = [];
        if (t.reactLoadableManifest && e) {
            let n = t.reactLoadableManifest;
            for (let t of e) {
                if (!n[t]) continue;
                let e = n[t].files;
                r.push(...e)
            }
        }
        if (0 === r.length) return null;
        let u = (0, i.getAssetTokenQuery)();
        return (0, n.jsx)(n.Fragment, {
            children: r.map(e => {
                let r = `${t.assetPrefix}/_next/${(0,o.encodeURIPath)(e)}${u}`;
                return e.endsWith(".css") ? (0, n.jsx)("link", {
                    precedence: "dynamic",
                    href: r,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce
                }, e) : ((0, a.preload)(r, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce
                }), null)
            })
        })
    }
}, 137953, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(14666),
        a = e.r(499531),
        l = e.r(357059),
        o = e.r(578959);

    function i(e) {
        return {
            default: e && "default" in e ? e.default : e
        }
    }
    let s = {
            loader: () => Promise.resolve(i(() => null)),
            loading: null,
            ssr: !0
        },
        u = function(e) {
            let t = {
                    ...s,
                    ...e
                },
                r = (0, a.lazy)(() => t.loader().then(i)),
                u = t.loading;

            function c(e) {
                let i = u ? (0, n.jsx)(u, {
                        isLoading: !0,
                        pastDelay: !0,
                        error: null
                    }) : null,
                    s = !t.ssr || !!t.loading,
                    c = s ? a.Suspense : a.Fragment,
                    d = t.ssr ? (0, n.jsxs)(n.Fragment, {
                        children: ["u" < typeof window ? (0, n.jsx)(o.PreloadChunks, {
                            moduleIds: t.modules
                        }) : null, (0, n.jsx)(r, {
                            ...e
                        })]
                    }) : (0, n.jsx)(l.BailoutToCSR, {
                        reason: "next/dynamic",
                        children: (0, n.jsx)(r, {
                            ...e
                        })
                    });
                return (0, n.jsx)(c, {
                    ...s ? {
                        fallback: i
                    } : {},
                    children: d
                })
            }
            return c.displayName = "LoadableComponent", c
        }
}, 10747, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(481258)._(e.r(137953));

    function a(e, t) {
        let r = {};
        "function" == typeof e && (r.loader = e);
        let a = {
            ...r,
            ...t
        };
        return (0, n.default)({
            ...a,
            modules: a.loadableGenerated?.modules
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 876728, e => {
    "use strict";
    let t = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        r = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
    var n = e.i(726103),
        a = e.i(499531);
    let l = Symbol.for("react-aria.i18n.locale");

    function o() {
        let e = "u" > typeof window && window[l] || "u" > typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
            Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
            e = "en-US"
        }
        return {
            locale: e,
            direction: ! function(e) {
                if (Intl.Locale) {
                    let r = new Intl.Locale(e).maximize(),
                        n = "function" == typeof r.getTextInfo ? r.getTextInfo() : r.textInfo;
                    if (n) return "rtl" === n.direction;
                    if (r.script) return t.has(r.script)
                }
                let n = e.split("-")[0];
                return r.has(n)
            }(e) ? "ltr" : "rtl"
        }
    }
    let i = o(),
        s = new Set;

    function u() {
        for (let e of (i = o(), s)) e(i)
    }
    let c = a.default.createContext(null);
    e.s(["useLocale", 0, function() {
        let e = function() {
            let e = (0, n.useIsSSR)(),
                [t, r] = (0, a.useState)(i);
            return ((0, a.useEffect)(() => (0 === s.size && window.addEventListener("languagechange", u), s.add(r), () => {
                s.delete(r), 0 === s.size && window.removeEventListener("languagechange", u)
            }), []), e) ? {
                locale: "u" > typeof window && window[l] || "en-US",
                direction: "ltr"
            } : t
        }();
        return (0, a.useContext)(c) || e
    }], 876728)
}, 961551, 270170, 747922, e => {
    "use strict";
    e.i(203217);
    var t = e.i(823512);

    function r(e, r) {
        let {
            id: n,
            "aria-label": a,
            "aria-labelledby": l
        } = e;
        return n = (0, t.useId)(n), l && a ? l = [...new Set([n, ...l.trim().split(/\s+/)])].join(" ") : l && (l = l.trim().split(/\s+/).join(" ")), a || l || !r || (a = r), {
            id: n,
            "aria-label": a,
            "aria-labelledby": l
        }
    }
    e.s(["useLabels", 0, r], 270170), e.s(["useLabel", 0, function(e) {
        let {
            id: n,
            label: a,
            "aria-labelledby": l,
            "aria-label": o,
            labelElementType: i = "label"
        } = e;
        n = (0, t.useId)(n);
        let s = (0, t.useId)(),
            u = {};
        return a && (l = l ? `${s} ${l}` : s, u = {
            id: s,
            htmlFor: "label" === i ? n : void 0
        }), {
            labelProps: u,
            fieldProps: r({
                id: n,
                "aria-label": o,
                "aria-labelledby": l
            })
        }
    }], 961551), e.s(["clamp", 0, function(e, t = -1 / 0, r = 1 / 0) {
        return Math.min(Math.max(e, t), r)
    }], 747922)
}, 248708, e => {
    "use strict";
    let t = null;
    class r {
        constructor() {
            this.node = null, this.assertiveLog = null, this.politeLog = null, "u" > typeof document && (this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
                border: 0,
                clip: "rect(0 0 0 0)",
                clipPath: "inset(50%)",
                height: "1px",
                margin: "-1px",
                overflow: "hidden",
                padding: 0,
                position: "absolute",
                width: "1px",
                whiteSpace: "nowrap"
            }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node))
        }
        isAttached() {
            return this.node?.isConnected
        }
        createLog(e) {
            let t = document.createElement("div");
            return t.setAttribute("role", "log"), t.setAttribute("aria-live", e), t.setAttribute("aria-relevant", "additions"), t
        }
        destroy() {
            this.node && (document.body.removeChild(this.node), this.node = null)
        }
        announce(e, t = "assertive", r = 7e3) {
            if (!this.node) return;
            let n = document.createElement("div");
            "object" == typeof e ? (n.setAttribute("role", "img"), n.setAttribute("aria-labelledby", e["aria-labelledby"])) : n.textContent = e, "assertive" === t ? this.assertiveLog?.appendChild(n) : this.politeLog?.appendChild(n), "" !== e && setTimeout(() => {
                n.remove()
            }, r)
        }
        clear(e) {
            this.node && ((!e || "assertive" === e) && this.assertiveLog && (this.assertiveLog.innerHTML = ""), (!e || "polite" === e) && this.politeLog && (this.politeLog.innerHTML = ""))
        }
    }
    e.s(["announce", 0, function(e, n = "assertive", a = 7e3) {
        t ? t.announce(e, n, a) : (t = new r, ("boolean" == typeof IS_REACT_ACT_ENVIRONMENT ? IS_REACT_ACT_ENVIRONMENT : "u" > typeof jest) ? t.announce(e, n, a) : setTimeout(() => {
            t?.isAttached() && t?.announce(e, n, a)
        }, 100))
    }])
}, 291158, e => {
    "use strict";
    let t = e.i(623295).default;
    e.s(["default", 0, t])
}, 590194, e => {
    "use strict";
    var t = e.i(499531),
        r = e.i(848662);
    let n = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M216,128l-72,72V56Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"
            }))]
        ]),
        a = t.forwardRef((e, a) => t.createElement(r.default, {
            ref: a,
            ...e,
            weights: n
        }));
    a.displayName = "ArrowRightIcon", e.s(["ArrowRight", 0, a, "ArrowRightIcon", 0, a], 590194)
}, 78070, e => {
    "use strict";
    let t = e.i(825585).default;
    e.s(["default", 0, t])
}, 885609, e => {
    "use strict";
    var t = e.i(467211),
        r = e.i(499531);
    let n = (0, r.createContext)({}),
        a = (0, r.forwardRef)(function(e, a) {
            [e, a] = (0, t.useContextProps)(e, a, n);
            let {
                children: l,
                level: o = 3,
                className: i,
                ...s
            } = e, u = t.dom[`h${o}`];
            return r.default.createElement(u, {
                ...s,
                ref: a,
                className: i ?? "react-aria-Heading"
            }, l)
        });
    e.s(["Heading", 0, a, "HeadingContext", 0, n])
}, 830146, 863304, e => {
    "use strict";
    var t = e.i(467211),
        r = e.i(679933),
        n = e.i(499531);
    let a = (0, n.createContext)({
            placement: "bottom"
        }),
        l = (0, n.forwardRef)(function(e, l) {
            [e, l] = (0, t.useContextProps)(e, l, a);
            let o = e.placement,
                i = {
                    position: "absolute",
                    transform: "top" === o || "bottom" === o ? "translateX(-50%)" : "translateY(-50%)"
                };
            null != o && (i[o] = "100%");
            let s = (0, t.useRenderProps)({
                ...e,
                defaultClassName: "react-aria-OverlayArrow",
                values: {
                    placement: o
                }
            });
            s.style && Object.keys(s.style).forEach(e => void 0 === s.style[e] && delete s.style[e]);
            let u = (0, r.filterDOMProps)(e);
            return n.default.createElement(t.dom.div, {
                ...u,
                ...s,
                style: {
                    ...i,
                    ...s.style
                },
                ref: l,
                "data-placement": o
            })
        });
    e.s(["OverlayArrow", 0, l, "OverlayArrowContext", 0, a], 830146);
    var o = e.i(185559),
        i = e.i(320666);

    function s(e, t, r) {
        (0, o.useLayoutEffect)(() => {
            if (t && e.current) {
                if (!("getAnimations" in e.current)) return void r();
                let t = e.current.getAnimations();
                if (0 === t.length) return void r();
                let n = !1;
                return Promise.allSettled(t.map(e => e.finished)).then(() => {
                    n || (0, i.flushSync)(() => {
                        r()
                    })
                }), () => {
                    n = !0
                }
            }
        }, [e, t, r])
    }
    e.s(["useEnterAnimation", 0, function(e, t = !0) {
        let [r, a] = (0, n.useState)(!0), l = r && t;
        return (0, o.useLayoutEffect)(() => {
            if (l && e.current && "getAnimations" in e.current)
                for (let t of e.current.getAnimations()) t instanceof CSSTransition && t.cancel()
        }, [e, l]), s(e, l, (0, n.useCallback)(() => a(!1), [])), l
    }, "useExitAnimation", 0, function(e, t) {
        let [r, a] = (0, n.useState)(t ? "open" : "closed");
        switch (r) {
            case "open":
                t || a("exiting");
                break;
            case "closed":
            case "exiting":
                t && a("open")
        }
        let l = "exiting" === r;
        return s(e, l, (0, n.useCallback)(() => {
            a(e => "exiting" === e ? "closed" : e)
        }, [])), l
    }], 863304)
}, 243306, e => {
    "use strict";
    var t = e.i(499531),
        r = e.i(848662);
    let n = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"
            }))]
        ]),
        a = t.forwardRef((e, a) => t.createElement(r.default, {
            ref: a,
            ...e,
            weights: n
        }));
    a.displayName = "XIcon", e.s(["X", 0, a, "XIcon", 0, a], 243306)
}, 468069, e => {
    "use strict";
    var t = e.i(467211),
        r = e.i(499531);
    let n = (0, r.createContext)({}),
        a = (0, r.forwardRef)(function(e, a) {
            [e, a] = (0, t.useContextProps)(e, a, n);
            let {
                elementType: l = "span",
                ...o
            } = e, i = t.dom[l];
            return r.default.createElement(i, {
                className: "react-aria-Text",
                ...o,
                ref: a
            })
        });
    e.s(["Text", 0, a, "TextContext", 0, n])
}, 849141, e => {
    "use strict";
    let t = async () => {
        let e = await fetch("https://api.unity.com/v1/oauth2/authorize/logined-users", {
                credentials: "include"
            }),
            t = await e.json();
        if (!e.ok) throw Error(`Fetching user failed with status ${e.status}. Reason: ${JSON.stringify(t.details)}`);
        return t.model
    };
    e.s(["getUserFromGenesis", 0, t])
}, 544789, e => {
    "use strict";
    var t = e.i(14666),
        r = e.i(722978);
    let n = {
        default: {
            accent: "rgb(0 0 0)",
            accentDark: "rgb(255 255 255)",
            background: "rgb(245 245 245)",
            backgroundDark: "rgb(38 38 38)"
        },
        red: {
            accent: "rgb(255 84 73)",
            accentDark: "rgb(255 84 73)",
            background: "rgb(245 245 245)",
            backgroundDark: "rgb(38 38 38)"
        },
        blue: {
            accent: "rgb(58 91 199)",
            accentDark: "rgb(58 91 199)",
            background: "rgb(245 245 245)",
            backgroundDark: "rgb(38 38 38)"
        },
        yellow: {
            accent: "rgb(255 176 23)",
            accentDark: "rgb(255 176 23)",
            background: "rgb(245 245 245)",
            backgroundDark: "rgb(38 38 38)"
        }
    };
    e.s(["default", 0, ({
        className: e,
        variant: a = "default",
        children: l
    }) => {
        let o = n[a],
            i = (0, r.default)("relative mango-text-caption-md rounded-lg px-2 py-1 uppercase animated-border", "text-black dark:text-white", e);
        return (0, t.jsxs)("div", {
            "aria-label": l,
            style: {
                "--color-accent": o.accent,
                "--color-background": o.background,
                "--color-accent-dark": o.accentDark,
                "--color-background-dark": o.backgroundDark
            },
            className: i,
            children: [(0, t.jsx)("span", {
                className: "animated-border-glow"
            }), (0, t.jsx)("span", {
                className: "animated-border-background"
            }), (0, t.jsx)("span", {
                className: "animated-border-text",
                children: l
            })]
        })
    }], 544789)
}]);