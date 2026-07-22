(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 467211, 476090, 185559, 726103, 823512, 402801, 429305, 838031, e => {
    "use strict";
    let t;

    function n(...e) {
        return (...t) => {
            for (let n of e) "function" == typeof n && n(...t)
        }
    }
    e.i(788727), e.s(["chain", 0, n], 476090);
    var r = e.i(3931);
    let i = "u" > typeof document ? r.default.useLayoutEffect : () => {};
    e.s(["useLayoutEffect", 0, i], 185559);
    let o = {
            prefix: String(Math.round(1e10 * Math.random())),
            current: 0
        },
        s = r.default.createContext(o),
        u = r.default.createContext(!1);
    "u" > typeof window && window.document && window.document.createElement;
    let a = new WeakMap,
        l = "function" == typeof r.default.useId ? function(e) {
            let t = r.default.useId(),
                [n] = (0, r.useState)(p()),
                i = n ? "react-aria" : `react-aria${o.prefix}`;
            return e || `${i}-${t}`
        } : function(e) {
            let t = (0, r.useContext)(s),
                n = function(e = !1) {
                    let t = (0, r.useContext)(s),
                        n = (0, r.useRef)(null);
                    if (null === n.current && !e) {
                        let e = r.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
                        if (e) {
                            let n = a.get(e);
                            null == n ? a.set(e, {
                                id: t.current,
                                state: e.memoizedState
                            }) : e.memoizedState !== n.state && (t.current = n.id, a.delete(e))
                        }
                        n.current = ++t.current
                    }
                    return n.current
                }(!!e),
                i = `react-aria${t.prefix}`;
            return e || `${i}-${n}`
        };

    function c() {
        return !1
    }

    function d() {
        return !0
    }

    function f(e) {
        return () => {}
    }

    function p() {
        return "function" == typeof r.default.useSyncExternalStore ? r.default.useSyncExternalStore(f, c, d) : (0, r.useContext)(u)
    }
    e.s(["useIsSSR", 0, p, "useSSRSafeId", 0, l], 726103);
    let g = !!("u" > typeof window && window.document && window.document.createElement),
        v = new Map;

    function y(e) {
        let [n, o] = (0, r.useState)(e), s = (0, r.useRef)(null), u = l(n), a = (0, r.useRef)(null);
        if (t && t.register(a, u), g) {
            let e = v.get(u);
            e && !e.includes(s) ? e.push(s) : v.set(u, [s])
        }
        return i(() => () => {
            t && t.unregister(a), v.delete(u)
        }, [u]), (0, r.useEffect)(() => {
            let e = s.current;
            return e && o(e), () => {
                e && (s.current = null)
            }
        }), u
    }

    function m(e, t) {
        if (e === t) return e;
        let n = v.get(e);
        if (n) return n.forEach(e => e.current = t), t;
        let r = v.get(t);
        return r ? (r.forEach(t => t.current = e), e) : t
    }

    function E(...e) {
        return 1 === e.length && e[0] ? e[0] : t => {
            let n = !1,
                r = e.map(e => {
                    let r = b(e, t);
                    return n ||= "function" == typeof r, r
                });
            if (n) return () => {
                r.forEach((t, n) => {
                    "function" == typeof t ? t() : b(e[n], null)
                })
            }
        }
    }

    function b(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }
    "u" > typeof FinalizationRegistry && (t = new FinalizationRegistry(e => {
        v.delete(e)
    })), e.s(["mergeIds", 0, m, "useId", 0, y, "useSlotId", 0, function(e = []) {
        let t = y(),
            [n, o] = function(e) {
                let [t, n] = (0, r.useState)(e), o = (0, r.useRef)(t), s = (0, r.useRef)(null), u = (0, r.useRef)(() => {
                    if (!s.current) return;
                    let e = s.current.next();
                    if (e.done) {
                        s.current = null;
                        return
                    }
                    o.current === e.value ? u.current() : n(e.value)
                });
                return i(() => {
                    o.current = t, s.current && u.current()
                }), [t, (0, r.useCallback)(e => {
                    s.current = e(o.current), u.current()
                }, [u])]
            }(t),
            s = (0, r.useCallback)(() => {
                o(function*() {
                    yield t, yield document.getElementById(t) ? t : void 0
                })
            }, [t, o]);
        return i(s, [t, s, ...e]), n
    }], 823512), e.s(["mergeRefs", 0, E], 402801);
    var T = e.i(7284);

    function h(...e) {
        let t = {
            ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
            let i = e[r];
            for (let e in i) {
                let r = t[e],
                    o = i[e];
                "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = n(r, o) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof r && "string" == typeof o ? t[e] = (0, T.default)(r, o) : "id" === e && r && o ? t.id = m(r, o) : "ref" === e && r && o ? t.ref = E(r, o) : t[e] = void 0 !== o ? o : r
            }
        }
        return t
    }

    function w(e) {
        let t = (0, r.useRef)(null),
            n = (0, r.useRef)(void 0),
            i = (0, r.useCallback)(t => {
                if ("function" == typeof e) {
                    let n = e(t);
                    return () => {
                        "function" == typeof n ? n() : e(null)
                    }
                }
                if (e) return e.current = t, () => {
                    e.current = null
                }
            }, [e]);
        return (0, r.useMemo)(() => ({
            get current() {
                return t.current
            },
            set current(value) {
                t.current = value, n.current && (n.current(), n.current = void 0), null != value && (n.current = i(value))
            }
        }), [i])
    }
    e.s(["mergeProps", 0, h], 429305), e.s(["useObjectRef", 0, w], 838031);
    let P = Symbol("default");

    function C(e, t) {
        let n = (0, r.useContext)(e);
        if (null === t) return null;
        if (n && "object" == typeof n && "slots" in n && n.slots) {
            let e = t || P;
            if (!n.slots[e]) {
                let e = new Intl.ListFormat().format(Object.keys(n.slots).map(e => `"${e}"`)),
                    r = t ? `Invalid slot "${t}".` : "A slot prop is required.";
                throw Error(`${r} Valid slot names are ${e}.`)
            }
            return n.slots[e]
        }
        return n
    }

    function S(e, t, n) {
        let {
            render: o,
            ...s
        } = t, u = (0, r.useRef)(null), a = (0, r.useMemo)(() => E(n, u), [n, u]);
        i(() => {}, [e, o]);
        let l = {
            ...s,
            ref: a
        };
        return o ? o(l, void 0) : r.default.createElement(e, l)
    }
    let L = {},
        k = new Proxy({}, {
            get(e, t) {
                if ("string" != typeof t) return;
                let n = L[t];
                return n || (n = (0, r.forwardRef)(S.bind(null, t)), L[t] = n), n
            }
        });
    e.s(["DEFAULT_SLOT", 0, P, "Provider", 0, function({
        values: e,
        children: t
    }) {
        for (let [n, i] of e) t = r.default.createElement(n.Provider, {
            value: i
        }, t);
        return t
    }, "composeRenderProps", 0, function(e, t) {
        return n => t("function" == typeof e ? e(n) : e, n)
    }, "dom", 0, k, "removeDataAttributes", 0, function(e) {
        let t = /^(data-.*)$/,
            n = {};
        for (let r in e) t.test(r) || (n[r] = e[r]);
        return n
    }, "useContextProps", 0, function(e, t, n) {
        let {
            ref: i,
            ...o
        } = C(n, e.slot) || {}, s = w((0, r.useMemo)(() => E(t, i), [t, i])), u = h(o, e);
        return "style" in o && o.style && "style" in e && e.style && ("function" == typeof o.style || "function" == typeof e.style ? u.style = t => {
            let n = "function" == typeof o.style ? o.style(t) : o.style,
                r = {
                    ...t.defaultStyle,
                    ...n
                },
                i = "function" == typeof e.style ? e.style({
                    ...t,
                    defaultStyle: r
                }) : e.style;
            return {
                ...r,
                ...i
            }
        } : u.style = {
            ...o.style,
            ...e.style
        }), [u, s]
    }, "useRenderProps", 0, function(e) {
        let {
            className: t,
            style: n,
            children: i,
            defaultClassName: o,
            defaultChildren: s,
            defaultStyle: u,
            values: a,
            render: l
        } = e;
        return (0, r.useMemo)(() => {
            let e, r, c;
            return e = "function" == typeof t ? t({
                ...a,
                defaultClassName: o
            }) : t, r = "function" == typeof n ? n({
                ...a,
                defaultStyle: u || {}
            }) : n, c = "function" == typeof i ? i({
                ...a,
                defaultChildren: s
            }) : null == i ? s : i, {
                className: e ?? o,
                style: r || u ? {
                    ...u,
                    ...r
                } : void 0,
                children: c ?? s,
                "data-rac": "",
                render: l ? e => l(e, a) : void 0
            }
        }, [t, n, i, o, s, u, a, l])
    }, "useSlot", 0, function(e = !0) {
        let [t, n] = (0, r.useState)(e), o = (0, r.useRef)(!1), s = (0, r.useCallback)(e => {
            o.current = !0, n(!!e)
        }, []);
        return i(() => {
            o.current || n(!1)
        }, []), [s, t]
    }, "useSlottedContext", 0, C], 467211)
}, 259457, e => {
    "use strict";
    let t = null;
    e.s(["focusWithoutScrolling", 0, function(e) {
        if (function() {
                if (null == t) {
                    t = !1;
                    try {
                        document.createElement("div").focus({
                            get preventScroll() {
                                return t = !0, !0
                            }
                        })
                    } catch {}
                }
                return t
            }()) e.focus({
            preventScroll: !0
        });
        else {
            let t = function(e) {
                let t = e.parentNode,
                    n = [],
                    r = document.scrollingElement || document.documentElement;
                for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
                    element: t,
                    scrollTop: t.scrollTop,
                    scrollLeft: t.scrollLeft
                }), t = t.parentNode;
                return r instanceof HTMLElement && n.push({
                    element: r,
                    scrollTop: r.scrollTop,
                    scrollLeft: r.scrollLeft
                }), n
            }(e);
            e.focus(),
                function(e) {
                    for (let {
                            element: t,
                            scrollTop: n,
                            scrollLeft: r
                        }
                        of e) t.scrollTop = n, t.scrollLeft = r
                }(t)
        }
    }])
}, 776050, 575414, 950011, e => {
    "use strict";
    let t = e => e?.ownerDocument ?? document,
        n = e => e && "window" in e && e.window === e ? e : t(e).defaultView || window;

    function r(e) {
        return null !== e && "object" == typeof e && "nodeType" in e && "number" == typeof e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e
    }

    function i() {
        return !1
    }
    e.s(["getOwnerDocument", 0, t, "getOwnerWindow", 0, n, "isShadowRoot", 0, r], 575414), e.s(["shadowDOM", 0, i], 950011), e.s(["getActiveElement", 0, (e = document) => {
        if (!i()) return e.activeElement;
        let t = e.activeElement;
        for (; t && "shadowRoot" in t && t.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
        return t
    }, "getEventTarget", 0, function(e) {
        if (i() && e.target instanceof Element && e.target.shadowRoot) {
            if ("composedPath" in e) return e.composedPath()[0] ?? null;
            else if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null
        }
        return e.target
    }, "isFocusWithin", 0, function(e) {
        if (!e) return !1;
        let t = e.getRootNode(),
            r = n(e);
        if (!(t instanceof r.Document || t instanceof r.ShadowRoot)) return !1;
        let i = t.activeElement;
        return null != i && e.contains(i)
    }, "nodeContains", 0, function(e, t) {
        if (!i()) return !!t && !!e && e.contains(t);
        if (!e || !t) return !1;
        let n = t;
        for (; null !== n;) {
            if (n === e) return !0;
            n = "SLOT" === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : r(n) ? n.host : n.parentNode
        }
        return !1
    }], 776050)
}, 242637, 424690, e => {
    "use strict";
    var t = e.i(259457),
        n = e.i(776050),
        r = e.i(575414);
    let i = "u" > typeof Element && "checkVisibility" in Element.prototype;

    function o(e, t) {
        return i ? e.checkVisibility({
            visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
            let t = (0, r.getOwnerWindow)(e);
            if (!(e instanceof t.HTMLElement) && !(e instanceof t.SVGElement)) return !1;
            let {
                display: n,
                visibility: i
            } = e.style, o = "none" !== n && "hidden" !== i && "collapse" !== i;
            if (o) {
                let {
                    getComputedStyle: t
                } = (0, r.getOwnerWindow)(e), {
                    display: n,
                    visibility: i
                } = t(e);
                o = "none" !== n && "hidden" !== i && "collapse" !== i
            }
            return o
        }(e) && !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open")) && (!e.parentElement || o(e.parentElement, e))
    }
    let s = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        u = s.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
    s.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
    let a = s.join(':not([hidden]):not([tabindex="-1"]),');

    function l(e, t) {
        return e.matches(u) && !c(e) && (t?.skipVisibilityCheck || o(e))
    }

    function c(e) {
        let t = e;
        for (; null != t;) {
            if (t instanceof(0, r.getOwnerWindow)(t).HTMLElement && t.inert) return !0;
            t = t.parentElement
        }
        return !1
    }
    e.s(["isFocusable", 0, l, "isTabbable", 0, function(e) {
        return e.matches(a) && o(e) && !c(e)
    }], 424690);
    var d = e.i(185559),
        f = e.i(3931);

    function p(e) {
        return e.nativeEvent = e, e.isDefaultPrevented = () => e.defaultPrevented, e.isPropagationStopped = () => e.cancelBubble, e.persist = () => {}, e
    }
    let g = !1;
    e.s(["createSyntheticEvent", 0, p, "ignoreFocusEvent", () => g, "preventFocus", 0, function(e) {
        for (; e && !l(e, {
                skipVisibilityCheck: !0
            });) e = e.parentElement;
        let i = (0, r.getOwnerWindow)(e),
            o = i.document.activeElement;
        if (!o || o === e) return;
        g = !0;
        let s = !1,
            u = e => {
                ((0, n.getEventTarget)(e) === o || s) && e.stopImmediatePropagation()
            },
            a = r => {
                ((0, n.getEventTarget)(r) === o || s) && (r.stopImmediatePropagation(), e || s || (s = !0, (0, t.focusWithoutScrolling)(o), f()))
            },
            c = t => {
                ((0, n.getEventTarget)(t) === e || s) && t.stopImmediatePropagation()
            },
            d = r => {
                ((0, n.getEventTarget)(r) === e || s) && (r.stopImmediatePropagation(), s || (s = !0, (0, t.focusWithoutScrolling)(o), f()))
            };
        i.addEventListener("blur", u, !0), i.addEventListener("focusout", a, !0), i.addEventListener("focusin", d, !0), i.addEventListener("focus", c, !0);
        let f = () => {
                cancelAnimationFrame(p), i.removeEventListener("blur", u, !0), i.removeEventListener("focusout", a, !0), i.removeEventListener("focusin", d, !0), i.removeEventListener("focus", c, !0), g = !1, s = !1
            },
            p = requestAnimationFrame(f);
        return f
    }, "setEventTarget", 0, function(e, t) {
        Object.defineProperty(e, "target", {
            value: t
        }), Object.defineProperty(e, "currentTarget", {
            value: t
        })
    }, "useSyntheticBlurEvent", 0, function(e) {
        let t = (0, f.useRef)({
            isFocused: !1,
            observer: null
        });
        return (0, d.useLayoutEffect)(() => {
            let e = t.current;
            return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
            }
        }, []), (0, f.useCallback)(r => {
            let i = (0, n.getEventTarget)(r);
            (i instanceof HTMLButtonElement || i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement || i instanceof HTMLSelectElement) && (t.current.isFocused = !0, i.addEventListener("focusout", n => {
                if (t.current.isFocused = !1, i.disabled) {
                    let t = p(n);
                    e?.(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
            }, {
                once: !0
            }), t.current.observer = new MutationObserver(() => {
                if (t.current.isFocused && i.disabled) {
                    t.current.observer?.disconnect();
                    let e = i === (0, n.getActiveElement)() ? null : (0, n.getActiveElement)();
                    i.dispatchEvent(new FocusEvent("blur", {
                        relatedTarget: e
                    })), i.dispatchEvent(new FocusEvent("focusout", {
                        bubbles: !0,
                        relatedTarget: e
                    }))
                }
            }), t.current.observer.observe(i, {
                attributes: !0,
                attributeFilter: ["disabled"]
            }))
        }, [e])
    }], 242637)
}, 904960, e => {
    "use strict";

    function t(e) {
        if ("u" < typeof window || null == window.navigator) return !1;
        let t = window.navigator.userAgentData?.brands;
        return Array.isArray(t) && t.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
    }

    function n(e) {
        return "u" > typeof window && null != window.navigator && e.test(window.navigator.userAgentData?.platform || window.navigator.platform)
    }

    function r(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
    }
    let i = r(function() {
            return n(/^Mac/i)
        }),
        o = r(function() {
            return n(/^iPhone/i)
        }),
        s = r(function() {
            return n(/^iPad/i) || i() && navigator.maxTouchPoints > 1
        }),
        u = r(function() {
            return o() || s()
        }),
        a = r(function() {
            return i() || u()
        }),
        l = r(function() {
            return t(/AppleWebKit/i) && !c()
        }),
        c = r(function() {
            return t(/Chrome/i)
        }),
        d = r(function() {
            return t(/Android/i)
        }),
        f = r(function() {
            return t(/Firefox/i)
        });
    e.s(["isAndroid", 0, d, "isAppleDevice", 0, a, "isChrome", 0, c, "isFirefox", 0, f, "isIOS", 0, u, "isIPad", 0, s, "isMac", 0, i, "isWebKit", 0, l])
}, 816862, 662764, 97584, e => {
    "use strict";
    let t;
    e.i(788727);
    var n = e.i(776050),
        r = e.i(575414),
        i = e.i(242637),
        o = e.i(904960);

    function s(e) {
        return "" === e.pointerType && !!e.isTrusted || ((0, o.isAndroid)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
    }
    e.s(["isVirtualClick", 0, s, "isVirtualPointerEvent", 0, function(e) {
        return !(0, o.isAndroid)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
    }], 662764);
    var u = e.i(259457),
        a = e.i(3931);
    let l = (0, a.createContext)({
        isNative: !0,
        open: function(e, t) {
            if (e instanceof HTMLAnchorElement) d(e, t);
            else if (e.hasAttribute("data-href")) {
                let n = document.createElement("a");
                n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), d(n, t), e.removeChild(n)
            }
        },
        useHref: e => e
    });

    function c() {
        return (0, a.useContext)(l)
    }

    function d(e, t, n = !0) {
        let {
            metaKey: r,
            ctrlKey: i,
            altKey: s,
            shiftKey: a
        } = t;
        (0, o.isFirefox)() && window.event?.type?.startsWith("key") && "_blank" === e.target && ((0, o.isMac)() ? r = !0 : i = !0);
        let l = (0, o.isWebKit)() && (0, o.isMac)() && !(0, o.isIPad)() && 1 ? new KeyboardEvent("keydown", {
            keyIdentifier: "Enter",
            metaKey: r,
            ctrlKey: i,
            altKey: s,
            shiftKey: a
        }) : new MouseEvent("click", {
            metaKey: r,
            ctrlKey: i,
            altKey: s,
            shiftKey: a,
            detail: 1,
            bubbles: !0,
            cancelable: !0
        });
        d.isOpening = n, (0, u.focusWithoutScrolling)(e), e.dispatchEvent(l), d.isOpening = !1
    }
    d.isOpening = !1, e.s(["handleLinkClick", 0, function(e, t, n, r) {
        var i;
        let o;
        !(!t.isNative && e.currentTarget instanceof HTMLAnchorElement) || !e.currentTarget.href || e.isDefaultPrevented() || (i = e.currentTarget, (o = i.getAttribute("target")) && "_self" !== o || i.origin !== location.origin || i.hasAttribute("download") || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) || !n || (e.preventDefault(), t.open(e.currentTarget, e, n, r))
    }, "openLink", 0, d, "useLinkProps", 0, function(e) {
        let t = c().useHref(e?.href ?? ""),
            n = {};
        if (e)
            for (let r of ["href", "target", "rel", "download", "ping", "referrerPolicy"]) r in e && (n[r] = "href" === r ? t : e[r]);
        return n
    }, "useRouter", 0, c], 97584);
    var f = e.i(726103);
    let p = null,
        g = "keyboard",
        v = new Set,
        y = new Map,
        m = !1,
        E = !1,
        b = {
            Tab: !0,
            Escape: !0
        };

    function T(e, t) {
        for (let n of v) n(e, t)
    }

    function h(e) {
        m = !0, d.isOpening || e.metaKey || !(0, o.isMac)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (p = "keyboard", g = "keyboard", T("keyboard", e))
    }

    function w(e) {
        p = "pointer", g = "pointerType" in e ? e.pointerType : "mouse", ("mousedown" === e.type || "pointerdown" === e.type) && (m = !0, T("pointer", e))
    }

    function P(e) {
        !d.isOpening && s(e) && (m = !0, p = "virtual", g = "virtual")
    }

    function C(e) {
        let t = (0, r.getOwnerWindow)((0, n.getEventTarget)(e)),
            o = (0, r.getOwnerDocument)((0, n.getEventTarget)(e));
        (0, n.getEventTarget)(e) !== t && (0, n.getEventTarget)(e) !== o && !i.ignoreFocusEvent && e.isTrusted && (m || E || (p = "virtual", g = "virtual", T("virtual", e)), m = !1, E = !1)
    }

    function S() {
        i.ignoreFocusEvent || (m = !1, E = !0)
    }

    function L(e) {
        if ("u" < typeof window || "u" < typeof document) return;
        let t = (0, r.getOwnerWindow)(e),
            n = (0, r.getOwnerDocument)(e);
        if (y.get(t)) return;
        let i = t.HTMLElement.prototype.focus;
        Reflect.defineProperty(t.HTMLElement.prototype, "focus", {
            configurable: !0,
            writable: !0,
            value: function() {
                m = !0, i.apply(this, arguments)
            }
        }), n.addEventListener("keydown", h, !0), n.addEventListener("keyup", h, !0), n.addEventListener("click", P, !0), t.addEventListener("focus", C, !0), t.addEventListener("blur", S, !1), "u" > typeof PointerEvent && (n.addEventListener("pointerdown", w, !0), n.addEventListener("pointermove", w, !0), n.addEventListener("pointerup", w, !0)), t.addEventListener("beforeunload", () => {
            k(e)
        }, {
            once: !0
        }), y.set(t, {
            focus: i
        })
    }
    let k = (e, t) => {
        let n = (0, r.getOwnerWindow)(e),
            i = (0, r.getOwnerDocument)(e);
        t && i.removeEventListener("DOMContentLoaded", t), y.has(n) && (Reflect.defineProperty(n.HTMLElement.prototype, "focus", {
            configurable: !0,
            writable: !0,
            value: y.get(n).focus
        }), i.removeEventListener("keydown", h, !0), i.removeEventListener("keyup", h, !0), i.removeEventListener("click", P, !0), n.removeEventListener("focus", C, !0), n.removeEventListener("blur", S, !1), "u" > typeof PointerEvent && (i.removeEventListener("pointerdown", w, !0), i.removeEventListener("pointermove", w, !0), i.removeEventListener("pointerup", w, !0)), y.delete(n))
    };

    function M() {
        return "pointer" !== p
    }
    "u" > typeof document && ("loading" !== (t = (0, r.getOwnerDocument)(void 0)).readyState ? L(void 0) : t.addEventListener("DOMContentLoaded", () => {
        L(void 0)
    }));
    let O = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
    e.s(["getInteractionModality", 0, function() {
        return p
    }, "getPointerType", 0, function() {
        return g
    }, "isFocusVisible", 0, M, "setInteractionModality", 0, function(e) {
        p = e, g = "pointer" === e ? "mouse" : e, T(e, null)
    }, "useFocusVisibleListener", 0, function(e, t, i) {
        L(), (0, a.useEffect)(() => {
            if (i?.enabled === !1) return;
            let t = (t, o) => {
                var s;
                let u, a, l, c, d, f, p, g;
                s = !!i?.isTextInput, u = o ? (0, n.getEventTarget)(o) : void 0, a = (0, r.getOwnerDocument)(u), c = void 0 !== (l = (0, r.getOwnerWindow)(u)) ? l.HTMLInputElement : HTMLInputElement, d = void 0 !== l ? l.HTMLTextAreaElement : HTMLTextAreaElement, f = void 0 !== l ? l.HTMLElement : HTMLElement, p = void 0 !== l ? l.KeyboardEvent : KeyboardEvent, g = (0, n.getActiveElement)(a), (s = s || g instanceof c && !O.has(g.type) || g instanceof d || g instanceof f && g.isContentEditable) && "keyboard" === t && o instanceof p && !b[o.key] || e(M())
            };
            return v.add(t), () => {
                v.delete(t)
            }
        }, t)
    }, "useInteractionModality", 0, function() {
        L();
        let [e, t] = (0, a.useState)(p);
        return (0, a.useEffect)(() => {
            let e = () => {
                t(p)
            };
            return v.add(e), () => {
                v.delete(e)
            }
        }, []), (0, f.useIsSSR)() ? null : e
    }], 816862)
}, 799163, 800278, e => {
    "use strict";
    var t = e.i(259457),
        n = e.i(776050),
        r = e.i(816862),
        i = e.i(575414);
    let o = new Map,
        s = new Set;

    function u() {
        if ("u" < typeof window) return;

        function e(e) {
            return "propertyName" in e
        }
        let t = r => {
            let i = (0, n.getEventTarget)(r);
            if (!e(r) || !i) return;
            let u = o.get(i);
            if (u && (u.delete(r.propertyName), 0 === u.size && (i.removeEventListener("transitioncancel", t), o.delete(i)), 0 === o.size)) {
                for (let e of s) e();
                s.clear()
            }
        };
        document.body.addEventListener("transitionrun", r => {
            let i = (0, n.getEventTarget)(r);
            if (!e(r) || !i) return;
            let s = o.get(i);
            s || (s = new Set, o.set(i, s), i.addEventListener("transitioncancel", t, {
                once: !0
            })), s.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
    }

    function a(e) {
        requestAnimationFrame(() => {
            for (let [e] of o) "isConnected" in e && !e.isConnected && o.delete(e);
            0 === o.size ? e() : s.add(e)
        })
    }
    "u" > typeof document && ("loading" !== document.readyState ? u() : document.addEventListener("DOMContentLoaded", u)), e.s(["runAfterTransition", 0, a], 800278), e.s(["focusSafely", 0, function(e) {
        if (!e.isConnected) return;
        let o = (0, i.getOwnerDocument)(e);
        if ("virtual" === (0, r.getInteractionModality)()) {
            let r = (0, n.getActiveElement)(o);
            a(() => {
                let i = (0, n.getActiveElement)(o);
                (i === r || i === o.body) && e.isConnected && (0, t.focusWithoutScrolling)(e)
            })
        } else(0, t.focusWithoutScrolling)(e)
    }], 799163)
}, 153393, e => {
    "use strict";
    var t = e.i(776050),
        n = e.i(575414),
        r = e.i(242637),
        i = e.i(3931);
    e.s(["useFocus", 0, function(e) {
        let {
            isDisabled: o,
            onFocus: s,
            onBlur: u,
            onFocusChange: a
        } = e, l = (0, i.useCallback)(e => {
            if ((0, t.getEventTarget)(e) === e.currentTarget) return u && u(e), a && a(!1), !0
        }, [u, a]), c = (0, r.useSyntheticBlurEvent)(l), d = (0, i.useCallback)(e => {
            let r = (0, t.getEventTarget)(e),
                i = (0, n.getOwnerDocument)(r),
                o = i ? (0, t.getActiveElement)(i) : (0, t.getActiveElement)();
            r === e.currentTarget && r === o && (s && s(e), a && a(!0), c(e))
        }, [a, s, c]);
        return {
            focusProps: {
                onFocus: !o && (s || a || u) ? d : void 0,
                onBlur: !o && (u || a) ? l : void 0
            }
        }
    }])
}, 513485, 290005, 996980, e => {
    "use strict";
    e.i(788727);
    var t = e.i(799163),
        n = e.i(429305),
        r = (e.i(402801), e.i(153393));

    function i(e) {
        if (!e) return;
        let t = !0;
        return n => {
            e({
                ...n,
                preventDefault() {
                    n.preventDefault()
                },
                isDefaultPrevented: () => n.isDefaultPrevented(),
                stopPropagation() {
                    t = !0
                },
                continuePropagation() {
                    t = !1, "function" == typeof n.continuePropagation && n.continuePropagation()
                },
                isPropagationStopped: () => t
            }), t && n.stopPropagation()
        }
    }

    function o(e) {
        return {
            keyboardProps: e.isDisabled ? {} : {
                onKeyDown: i(e.onKeyDown),
                onKeyUp: i(e.onKeyUp)
            }
        }
    }
    e.s(["useKeyboard", 0, o], 290005);
    var s = e.i(838031),
        u = e.i(185559);

    function a(e, t) {
        (0, u.useLayoutEffect)(() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
                e.ref && (e.ref.current = null)
            }
        })
    }
    e.s(["useSyncRef", 0, a], 996980);
    var l = e.i(3931);
    let c = l.default.createContext(null),
        d = l.default.forwardRef(function(e, t) {
            let {
                children: n,
                ...r
            } = e, i = (0, s.useObjectRef)(t), o = {
                ...r,
                ref: i
            };
            return l.default.createElement(c.Provider, {
                value: o
            }, n)
        });
    e.s(["FocusableContext", 0, c, "FocusableProvider", 0, d, "useFocusable", 0, function(e, i) {
        let {
            focusProps: s
        } = (0, r.useFocus)(e), {
            keyboardProps: u
        } = o(e), d = (0, n.mergeProps)(s, u), f = function(e) {
            let t = (0, l.useContext)(c) || {};
            a(t, e);
            let {
                ref: n,
                ...r
            } = t;
            return r
        }(i), p = e.isDisabled ? {} : f, g = (0, l.useRef)(e.autoFocus);
        (0, l.useEffect)(() => {
            g.current && i.current && (0, t.focusSafely)(i.current), g.current = !1
        }, [i]);
        let v = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (v = void 0), {
            focusableProps: (0, n.mergeProps)({
                ...d,
                tabIndex: v
            }, p)
        }
    }], 513485)
}, 870053, e => {
    "use strict";
    var t = e.i(3931);
    "u" > typeof HTMLTemplateElement && (Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.content.firstChild
        }
    }), Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
        configurable: !0,
        enumerable: !0,
        value: function(e) {
            return this.content.appendChild(e)
        }
    }), Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
        configurable: !0,
        enumerable: !0,
        value: function(e) {
            return this.content.removeChild(e)
        }
    }), Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
        configurable: !0,
        enumerable: !0,
        value: function(e, t) {
            return this.content.insertBefore(e, t)
        }
    }));
    let n = (0, t.createContext)(!1);
    e.s(["Hidden", 0, function(e) {
        if ((0, t.useContext)(n)) return t.default.createElement(t.default.Fragment, null, e.children);
        let r = t.default.createElement(n.Provider, {
            value: !0
        }, e.children);
        return t.default.createElement("template", null, r)
    }, "createHideableComponent", 0, function(e) {
        let r = (r, i) => (0, t.useContext)(n) ? null : e(r, i);
        return r.displayName = e.displayName || e.name, (0, t.forwardRef)(r)
    }, "useIsHidden", 0, function() {
        return (0, t.useContext)(n)
    }])
}, 600939, e => {
    "use strict";
    var t = e.i(185559),
        n = e.i(3931);
    let r = n.default.useInsertionEffect ?? t.useLayoutEffect;
    e.s(["useEffectEvent", 0, function(e) {
        let t = (0, n.useRef)(null);
        return r(() => {
            t.current = e
        }, [e]), (0, n.useCallback)((...e) => {
            let n = t.current;
            return n?.(...e)
        }, [])
    }])
}, 270170, e => {
    "use strict";
    var t = e.i(823512);
    e.s(["useLabels", 0, function(e, n) {
        let {
            id: r,
            "aria-label": i,
            "aria-labelledby": o
        } = e;
        return r = (0, t.useId)(r), o && i ? o = [...new Set([r, ...o.trim().split(/\s+/)])].join(" ") : o && (o = o.trim().split(/\s+/).join(" ")), i || o || !n || (i = n), {
            id: r,
            "aria-label": i,
            "aria-labelledby": o
        }
    }])
}, 803258, e => {
    "use strict";
    var t = e.i(3931);
    let n = "u" > typeof document ? t.default.useInsertionEffect ?? t.default.useLayoutEffect : () => {};
    e.s(["useControlledState", 0, function(e, r, i) {
        let [o, s] = (0, t.useState)(e || r), u = (0, t.useRef)(o), a = (0, t.useRef)(void 0 !== e), l = void 0 !== e;
        (0, t.useEffect)(() => {
            a.current, a.current = l
        }, [l]);
        let c = l ? e : o;
        n(() => {
            u.current = c
        });
        let [, d] = (0, t.useReducer)(() => ({}), {});
        return [c, (0, t.useCallback)((e, ...t) => {
            let n = "function" == typeof e ? e(u.current) : e;
            Object.is(u.current, n) || (u.current = n, s(n), d(), i?.(n, ...t))
        }, [i])]
    }])
}, 522455, e => {
    "use strict";
    var t = e.i(467211),
        n = e.i(870053),
        r = e.i(3931);
    let i = (0, r.createContext)({}),
        o = (0, n.createHideableComponent)(function(e, n) {
            [e, n] = (0, t.useContextProps)(e, n, i);
            let {
                elementType: o = "label",
                ...s
            } = e, u = t.dom[o];
            return r.default.createElement(u, {
                className: "react-aria-Label",
                ...s,
                ref: n
            })
        });
    e.s(["Label", 0, o, "LabelContext", 0, i])
}, 679933, e => {
    "use strict";
    let t = new Set(["id"]),
        n = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        r = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        i = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        o = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        s = /^(data-.*)$/;
    e.s(["filterDOMProps", 0, function(e, u = {}) {
        let {
            labelable: a,
            isLink: l,
            global: c,
            events: d = c,
            propNames: f
        } = u, p = {};
        for (let u in e) Object.prototype.hasOwnProperty.call(e, u) && (t.has(u) || a && n.has(u) || l && r.has(u) || c && i.has(u) || d && (o.has(u) || u.endsWith("Capture") && o.has(u.slice(0, -7))) || f?.has(u) || s.test(u)) && (p[u] = e[u]);
        return p
    }])
}, 961551, e => {
    "use strict";
    var t = e.i(823512),
        n = e.i(270170);
    e.s(["useLabel", 0, function(e) {
        let {
            id: r,
            label: i,
            "aria-labelledby": o,
            "aria-label": s,
            labelElementType: u = "label"
        } = e;
        r = (0, t.useId)(r);
        let a = (0, t.useId)(),
            l = {};
        return i && (o = o ? `${a} ${o}` : a, l = {
            id: a,
            htmlFor: "label" === u ? r : void 0
        }), {
            labelProps: l,
            fieldProps: (0, n.useLabels)({
                id: r,
                "aria-label": s,
                "aria-labelledby": o
            })
        }
    }])
}, 812018, 938280, 58824, e => {
    "use strict";
    var t = e.i(575414),
        n = e.i(904960),
        r = e.i(800278);
    let i = "default",
        o = "",
        s = new WeakMap;

    function u(e) {
        let t = e?.defaultView;
        return t?.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0
    }
    e.s(["disableTextSelection", 0, function(e) {
        if ((0, n.isIOS)()) {
            if ("default" === i) {
                let n = (0, t.getOwnerDocument)(e);
                o = n.documentElement.style.webkitUserSelect, n.documentElement.style.webkitUserSelect = "none"
            }
            i = "disabled"
        } else if (e instanceof HTMLElement || e instanceof SVGElement) {
            let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
            s.set(e, e.style[t]), e.style[t] = "none"
        }
    }, "restoreTextSelection", 0, function(e) {
        if ((0, n.isIOS)()) "disabled" === i && (i = "restoring", setTimeout(() => {
            (0, r.runAfterTransition)(() => {
                if ("restoring" === i) {
                    let n = (0, t.getOwnerDocument)(e);
                    "none" === n.documentElement.style.webkitUserSelect && (n.documentElement.style.webkitUserSelect = o || ""), o = "", i = "default"
                }
            })
        }, 300));
        else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && s.has(e)) {
            let t = s.get(e),
                n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
            "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), s.delete(e)
        }
    }], 812018);
    let a = new WeakMap;
    e.s(["getNonce", 0, function(e) {
        let n = e ?? ("u" > typeof document ? document : void 0);
        if (!n) return u(n);
        if (a.has(n)) return a.get(n);
        let r = n.querySelector('meta[property="csp-nonce"]'),
            i = r && r instanceof(0, t.getOwnerWindow)(r).HTMLMetaElement && (r.nonce || r.content) || u(n) || void 0;
        return void 0 !== i && a.set(n, i), i
    }], 938280);
    let l = e.i(3931).default.createContext({
        register: () => {}
    });
    l.displayName = "PressResponderContext", e.s(["PressResponderContext", 0, l], 58824)
}, 322660, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["useGlobalListeners", 0, function() {
        let e = (0, t.useRef)(new Map),
            n = (0, t.useCallback)((t, n, r, i) => {
                let o = i?.once ? (...t) => {
                    e.current.delete(r), r(...t)
                } : r;
                e.current.set(r, {
                    type: n,
                    eventTarget: t,
                    fn: o,
                    options: i
                }), t.addEventListener(n, o, i)
            }, []),
            r = (0, t.useCallback)((t, n, r, i) => {
                let o = e.current.get(r)?.fn || r;
                t.removeEventListener(n, o, i), e.current.delete(r)
            }, []),
            i = (0, t.useCallback)(() => {
                e.current.forEach((e, t) => {
                    r(e.eventTarget, e.type, t, e.options)
                })
            }, [r]);
        return (0, t.useEffect)(() => i, [i]), {
            addGlobalListener: n,
            removeGlobalListener: r,
            removeAllGlobalListeners: i
        }
    }])
}, 629959, e => {
    "use strict";
    var t = e.i(476090),
        n = e.i(242637),
        r = e.i(812018),
        i = e.i(259457),
        o = e.i(776050),
        s = e.i(938280),
        u = e.i(575414),
        a = e.i(904960),
        l = e.i(662764),
        c = e.i(429305),
        d = e.i(97584),
        f = e.i(58824),
        p = e.i(600939),
        g = e.i(322660),
        v = e.i(996980);
    e.i(973914);
    var y = e.i(3931);
    class m {
        #e;
        constructor(e, t, n, r) {
            this.#e = !0;
            let i = r?.target ?? n.currentTarget;
            const o = i?.getBoundingClientRect();
            let s, u = 0,
                a, l = null;
            null != n.clientX && null != n.clientY && (a = n.clientX, l = n.clientY), o && (null != a && null != l ? (s = a - o.left, u = l - o.top) : (s = o.width / 2, u = o.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = u, this.key = n.key
        }
        continuePropagation() {
            this.#e = !1
        }
        get shouldStopPropagation() {
            return this.#e
        }
    }
    let E = Symbol("linkClicked"),
        b = "react-aria-pressable-style",
        T = "data-react-aria-pressable";

    function h(e) {
        return "A" === e.tagName && e.hasAttribute("href")
    }

    function w(e, t) {
        let {
            key: n,
            code: r
        } = e, i = t.getAttribute("role");
        return ("Enter" === n || " " === n || "Spacebar" === n || "Space" === r) && !(t instanceof(0, u.getOwnerWindow)(t).HTMLInputElement && !L(t, n) || t instanceof(0, u.getOwnerWindow)(t).HTMLTextAreaElement || t.isContentEditable) && !(("link" === i || !i && h(t)) && "Enter" !== n)
    }

    function P(e, t) {
        let n = t.clientX,
            r = t.clientY;
        return {
            currentTarget: e,
            shiftKey: t.shiftKey,
            ctrlKey: t.ctrlKey,
            metaKey: t.metaKey,
            altKey: t.altKey,
            clientX: n,
            clientY: r,
            key: t.key
        }
    }

    function C(e, t) {
        return e instanceof HTMLInputElement ? !L(e, t) : !(e instanceof HTMLInputElement) && (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !h(e))
    }
    let S = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

    function L(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : S.has(e.type)
    }
    e.s(["usePress", 0, function(e) {
        let {
            onPress: S,
            onPressChange: L,
            onPressStart: k,
            onPressEnd: M,
            onPressUp: O,
            onClick: F,
            isDisabled: A,
            isPressed: x,
            preventFocusOnPress: D,
            shouldCancelOnPointerExit: K,
            allowTextSelectionOnPress: R,
            ref: I,
            ...H
        } = function(e) {
            let t = (0, y.useContext)(f.PressResponderContext);
            if (t) {
                let {
                    register: n,
                    ref: r,
                    ...i
                } = t;
                e = (0, c.mergeProps)(i, e), n()
            }
            return (0, v.useSyncRef)(t, e.ref), e
        }(e), [W, N] = (0, y.useState)(!1), _ = (0, y.useRef)({
            isPressed: !1,
            ignoreEmulatedMouseEvents: !1,
            didFirePressStart: !1,
            isTriggeringEvent: !1,
            activePointerId: null,
            target: null,
            isOverTarget: !1,
            pointerType: null,
            disposables: []
        }), {
            addGlobalListener: V,
            removeAllGlobalListeners: U
        } = (0, g.useGlobalListeners)(), j = (0, y.useCallback)((e, t) => {
            let n = _.current;
            if (A || n.didFirePressStart) return !1;
            let r = !0;
            if (n.isTriggeringEvent = !0, k) {
                let n = new m("pressstart", t, e);
                k(n), r = n.shouldStopPropagation
            }
            return L && L(!0), n.isTriggeringEvent = !1, n.didFirePressStart = !0, N(!0), r
        }, [A, k, L]), B = (0, y.useCallback)((e, t, n = !0) => {
            let r = _.current;
            if (!r.didFirePressStart) return !1;
            r.didFirePressStart = !1, r.isTriggeringEvent = !0;
            let i = !0;
            if (M) {
                let n = new m("pressend", t, e);
                M(n), i = n.shouldStopPropagation
            }
            if (L && L(!1), N(!1), S && n && !A) {
                let n = new m("press", t, e);
                S(n), i &&= n.shouldStopPropagation
            }
            return r.isTriggeringEvent = !1, i
        }, [A, M, L, S]), G = (0, p.useEffectEvent)(B), $ = (0, y.useCallback)((e, t) => {
            let n = _.current;
            if (A) return !1;
            if (O) {
                n.isTriggeringEvent = !0;
                let r = new m("pressup", t, e);
                return O(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
            }
            return !0
        }, [A, O]), z = (0, p.useEffectEvent)($), Y = (0, y.useCallback)(e => {
            let t = _.current;
            if (t.isPressed && t.target) {
                for (let n of (t.didFirePressStart && null != t.pointerType && B(P(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, U(), R || (0, r.restoreTextSelection)(t.target), t.disposables)) n();
                t.disposables = []
            }
        }, [R, U, B]), q = (0, p.useEffectEvent)(Y);
        (0, y.useEffect)(() => {
            A && _.current.isPressed && q({
                currentTarget: _.current.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
            })
        }, [A]);
        let X = (0, y.useCallback)(e => {
                K && Y(e)
            }, [K, Y]),
            J = (0, y.useCallback)(e => {
                A || F?.(e)
            }, [A, F]),
            Q = (0, y.useCallback)((e, t) => {
                if (!A && F) {
                    let r = new MouseEvent("click", e);
                    (0, n.setEventTarget)(r, t), F((0, n.createSyntheticEvent)(r))
                }
            }, [A, F]),
            Z = (0, y.useMemo)(() => {
                let e = _.current,
                    s = {
                        onKeyDown(n) {
                            if (w(n.nativeEvent, n.currentTarget) && (0, o.nodeContains)(n.currentTarget, (0, o.getEventTarget)(n))) {
                                C((0, o.getEventTarget)(n), n.key) && n.preventDefault();
                                let r = !0;
                                e.isPressed || n.repeat || (e.target = n.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", r = j(n, "keyboard"));
                                let i = n.currentTarget;
                                V((0, u.getOwnerDocument)(n.currentTarget), "keyup", (0, t.chain)(t => {
                                    w(t, i) && !t.repeat && (0, o.nodeContains)(i, (0, o.getEventTarget)(t)) && e.target && z(P(e.target, t), "keyboard")
                                }, c), !0), r && n.stopPropagation(), n.metaKey && (0, a.isMac)() && e.metaKeyEvents?.set(n.key, n.nativeEvent)
                            } else "Meta" === n.key && (e.metaKeyEvents = new Map)
                        },
                        onClick(t) {
                            if ((!t || (0, o.nodeContains)(t.currentTarget, (0, o.getEventTarget)(t))) && t && 0 === t.button && !e.isTriggeringEvent && !d.openLink.isOpening) {
                                let n = !0;
                                if (A && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || (0, l.isVirtualClick)(t.nativeEvent))) {
                                    let e = j(t, "virtual"),
                                        r = z(t, "virtual"),
                                        i = G(t, "virtual");
                                    J(t), n = e && r && i
                                } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                    let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                        i = z(P(t.currentTarget, t), r),
                                        o = G(P(t.currentTarget, t), r, !0);
                                    n = i && o, e.isOverTarget = !1, J(t), q(t)
                                }
                                e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                            }
                        }
                    },
                    c = t => {
                        if (e.isPressed && e.target && w(t, e.target)) {
                            C((0, o.getEventTarget)(t), t.key) && t.preventDefault();
                            let n = (0, o.getEventTarget)(t),
                                r = (0, o.nodeContains)(e.target, n);
                            G(P(e.target, t), "keyboard", r), r && Q(t, e.target), U(), "Enter" !== t.key && h(e.target) && (0, o.nodeContains)(e.target, n) && !t[E] && (t[E] = !0, (0, d.openLink)(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key)
                        } else if ("Meta" === t.key && e.metaKeyEvents?.size) {
                            let t = e.metaKeyEvents;
                            for (let n of (e.metaKeyEvents = void 0, t.values())) e.target?.dispatchEvent(new KeyboardEvent("keyup", n))
                        }
                    };
                if ("u" > typeof PointerEvent) {
                    s.onPointerDown = n => {
                        if (0 !== n.button || !(0, o.nodeContains)(n.currentTarget, (0, o.getEventTarget)(n))) return;
                        if ((0, l.isVirtualPointerEvent)(n.nativeEvent)) {
                            e.pointerType = "virtual";
                            return
                        }
                        e.pointerType = n.pointerType;
                        let i = !0;
                        if (!e.isPressed) {
                            e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = n.pointerId, e.target = n.currentTarget, R || (0, r.disableTextSelection)(e.target), i = j(n, e.pointerType);
                            let s = (0, o.getEventTarget)(n);
                            "releasePointerCapture" in s && ("hasPointerCapture" in s ? s.hasPointerCapture(n.pointerId) && s.releasePointerCapture(n.pointerId) : s.releasePointerCapture(n.pointerId)), V((0, u.getOwnerDocument)(n.currentTarget), "pointerup", t, !1), V((0, u.getOwnerDocument)(n.currentTarget), "pointercancel", a, !1)
                        }
                        i && n.stopPropagation()
                    }, s.onMouseDown = t => {
                        if ((0, o.nodeContains)(t.currentTarget, (0, o.getEventTarget)(t)) && 0 === t.button) {
                            if (D) {
                                let r = (0, n.preventFocus)(t.target);
                                r && e.disposables.push(r)
                            }
                            t.stopPropagation()
                        }
                    }, s.onPointerUp = t => {
                        (0, o.nodeContains)(t.currentTarget, (0, o.getEventTarget)(t)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || z(t, e.pointerType || t.pointerType))
                    }, s.onPointerEnter = t => {
                        t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, j(P(e.target, t), e.pointerType))
                    }, s.onPointerLeave = t => {
                        t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, G(P(e.target, t), e.pointerType, !1), X(t))
                    };
                    let t = t => {
                            if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                                if ((0, o.nodeContains)(e.target, (0, o.getEventTarget)(t)) && null != e.pointerType) {
                                    let n = !1,
                                        r = setTimeout(() => {
                                            e.isPressed && e.target instanceof HTMLElement && (n ? q(t) : ((0, i.focusWithoutScrolling)(e.target), e.target.click()))
                                        }, 80);
                                    V(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                                } else q(t);
                                e.isOverTarget = !1
                            }
                        },
                        a = e => {
                            q(e)
                        };
                    s.onDragStart = e => {
                        (0, o.nodeContains)(e.currentTarget, (0, o.getEventTarget)(e)) && q(e)
                    }
                }
                return s
            }, [V, A, D, U, R, X, j, J, Q]);
        return (0, y.useEffect)(() => {
            if (!I) return;
            let e = (0, u.getOwnerDocument)(I.current);
            if (!e || !e.head || e.getElementById(b)) return;
            let t = e.createElement("style");
            t.id = b;
            let n = (0, s.getNonce)(e);
            n && (t.nonce = n), t.textContent = `
@layer {
  [${T}] {
    touch-action: pan-x pan-y pinch-zoom;
  }
}
    `.trim(), e.head.prepend(t)
        }, [I]), (0, y.useEffect)(() => {
            let e = _.current;
            return () => {
                for (let t of (R || (0, r.restoreTextSelection)(e.target ?? void 0), e.disposables)) t();
                e.disposables = []
            }
        }, [R]), {
            isPressed: x || W,
            pressProps: (0, c.mergeProps)(H, Z, {
                [T]: !0
            })
        }
    }])
}, 768307, e => {
    "use strict";
    var t = e.i(242637),
        n = e.i(776050),
        r = e.i(575414),
        i = e.i(322660),
        o = e.i(3931);
    e.s(["useFocusWithin", 0, function(e) {
        let {
            isDisabled: s,
            onBlurWithin: u,
            onFocusWithin: a,
            onFocusWithinChange: l
        } = e, c = (0, o.useRef)({
            isFocusWithin: !1
        }), {
            addGlobalListener: d,
            removeAllGlobalListeners: f
        } = (0, i.useGlobalListeners)(), p = (0, o.useCallback)(e => {
            (0, n.nodeContains)(e.currentTarget, (0, n.getEventTarget)(e)) && c.current.isFocusWithin && !(0, n.nodeContains)(e.currentTarget, e.relatedTarget) && (c.current.isFocusWithin = !1, f(), u && u(e), l && l(!1))
        }, [u, l, c, f]), g = (0, t.useSyntheticBlurEvent)(p), v = (0, o.useCallback)(e => {
            if (!(0, n.nodeContains)(e.currentTarget, (0, n.getEventTarget)(e))) return;
            let i = (0, n.getEventTarget)(e),
                o = (0, r.getOwnerDocument)(i),
                s = (0, n.getActiveElement)(o);
            if (!c.current.isFocusWithin && s === i) {
                a && a(e), l && l(!0), c.current.isFocusWithin = !0, g(e);
                let r = e.currentTarget;
                d(o, "focus", e => {
                    let i = (0, n.getEventTarget)(e);
                    if (c.current.isFocusWithin && !(0, n.nodeContains)(r, i)) {
                        let e = new o.defaultView.FocusEvent("blur", {
                            relatedTarget: i
                        });
                        (0, t.setEventTarget)(e, r), p((0, t.createSyntheticEvent)(e))
                    }
                }, {
                    capture: !0
                })
            }
        }, [a, l, g, d, p]);
        return s ? {
            focusWithinProps: {
                onFocus: void 0,
                onBlur: void 0
            }
        } : {
            focusWithinProps: {
                onFocus: v,
                onBlur: p
            }
        }
    }])
}, 147333, e => {
    "use strict";
    var t = e.i(816862),
        n = e.i(153393),
        r = e.i(768307),
        i = e.i(3931);
    e.s(["useFocusRing", 0, function(e = {}) {
        let {
            autoFocus: o = !1,
            isTextInput: s,
            within: u
        } = e, a = (0, i.useRef)({
            isFocused: !1,
            isFocusVisible: o || (0, t.isFocusVisible)()
        }), [l, c] = (0, i.useState)(!1), [d, f] = (0, i.useState)(() => a.current.isFocused && a.current.isFocusVisible), p = (0, i.useCallback)(() => f(a.current.isFocused && a.current.isFocusVisible), []), g = (0, i.useCallback)(e => {
            a.current.isFocused = e, a.current.isFocusVisible = (0, t.isFocusVisible)(), c(e), p()
        }, [p]);
        (0, t.useFocusVisibleListener)(e => {
            a.current.isFocusVisible = e, p()
        }, [s, l], {
            enabled: l,
            isTextInput: s
        });
        let {
            focusProps: v
        } = (0, n.useFocus)({
            isDisabled: u,
            onFocusChange: g
        }), {
            focusWithinProps: y
        } = (0, r.useFocusWithin)({
            isDisabled: !u,
            onFocusWithinChange: g
        });
        return {
            isFocused: l,
            isFocusVisible: d,
            focusProps: u ? y : v
        }
    }])
}, 355770, e => {
    "use strict";
    var t = e.i(776050),
        n = e.i(575414),
        r = e.i(322660),
        i = e.i(3931);
    let o = !1,
        s = 0;

    function u(e) {
        "touch" === e.pointerType && (o = !0, setTimeout(() => {
            o = !1
        }, 500))
    }

    function a() {
        let e = (0, n.getOwnerDocument)(null);
        if (void 0 !== e) return 0 === s && "u" > typeof PointerEvent && e.addEventListener("pointerup", u), s++, () => {
            !(--s > 0) && "u" > typeof PointerEvent && e.removeEventListener("pointerup", u)
        }
    }
    e.s(["useHover", 0, function(e) {
        let {
            onHoverStart: s,
            onHoverChange: u,
            onHoverEnd: l,
            isDisabled: c
        } = e, [d, f] = (0, i.useState)(!1), p = (0, i.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null
        }).current;
        (0, i.useEffect)(a, []);
        let {
            addGlobalListener: g,
            removeAllGlobalListeners: v
        } = (0, r.useGlobalListeners)(), {
            hoverProps: y,
            triggerHoverEnd: m
        } = (0, i.useMemo)(() => {
            let e = (e, t) => {
                    let n = p.target;
                    p.pointerType = "", p.target = null, "touch" !== t && p.isHovered && n && (p.isHovered = !1, v(), l && l({
                        type: "hoverend",
                        target: n,
                        pointerType: t
                    }), u && u(!1), f(!1))
                },
                r = {};
            return "u" > typeof PointerEvent && (r.onPointerEnter = r => {
                o && "mouse" === r.pointerType || ((r, i) => {
                    if (p.pointerType = i, c || "touch" === i || p.isHovered || !(0, t.nodeContains)(r.currentTarget, (0, t.getEventTarget)(r))) return;
                    p.isHovered = !0;
                    let o = r.currentTarget;
                    p.target = o, g((0, n.getOwnerDocument)((0, t.getEventTarget)(r)), "pointerover", n => {
                        p.isHovered && p.target && !(0, t.nodeContains)(p.target, (0, t.getEventTarget)(n)) && e(n, n.pointerType)
                    }, {
                        capture: !0
                    }), s && s({
                        type: "hoverstart",
                        target: o,
                        pointerType: i
                    }), u && u(!0), f(!0)
                })(r, r.pointerType)
            }, r.onPointerLeave = n => {
                !c && (0, t.nodeContains)(n.currentTarget, (0, t.getEventTarget)(n)) && e(n, n.pointerType)
            }), {
                hoverProps: r,
                triggerHoverEnd: e
            }
        }, [s, u, l, c, p, g, v]);
        return (0, i.useEffect)(() => {
            c && m({
                currentTarget: p.target
            }, p.pointerType)
        }, [c]), {
            hoverProps: y,
            isHovered: d
        }
    }])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d02dd2fa-cb12-5876-b63a-c839adf8f5e2")
    } catch (e) {}
}();
//# debugId=d02dd2fa-cb12-5876-b63a-c839adf8f5e2