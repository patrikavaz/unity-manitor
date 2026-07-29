(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 476090, e => {
    "use strict";
    e.s(["chain", 0, function(...e) {
        return (...t) => {
            for (let n of e) "function" == typeof n && n(...t)
        }
    }])
}, 429305, 185559, 726103, 823512, 402801, e => {
    "use strict";
    let t;
    var n = e.i(476090),
        r = e.i(499531);
    let i = "u" > typeof document ? r.default.useLayoutEffect : () => {};
    e.s(["useLayoutEffect", 0, i], 185559), e.i(203217);
    let o = {
            prefix: String(Math.round(1e10 * Math.random())),
            current: 0
        },
        s = r.default.createContext(o),
        a = r.default.createContext(!1);
    "u" > typeof window && window.document && window.document.createElement;
    let u = new WeakMap,
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
                            let n = u.get(e);
                            null == n ? u.set(e, {
                                id: t.current,
                                state: e.memoizedState
                            }) : e.memoizedState !== n.state && (t.current = n.id, u.delete(e))
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
        return "function" == typeof r.default.useSyncExternalStore ? r.default.useSyncExternalStore(f, c, d) : (0, r.useContext)(a)
    }
    e.s(["useIsSSR", 0, p, "useSSRSafeId", 0, l], 726103);
    let g = !!("u" > typeof window && window.document && window.document.createElement),
        v = new Map;

    function y(e) {
        let [n, o] = (0, r.useState)(e), s = (0, r.useRef)(null), a = l(n), u = (0, r.useRef)(null);
        if (t && t.register(u, a), g) {
            let e = v.get(a);
            e && !e.includes(s) ? e.push(s) : v.set(a, [s])
        }
        return i(() => () => {
            t && t.unregister(u), v.delete(a)
        }, [a]), (0, r.useEffect)(() => {
            let e = s.current;
            return e && o(e), () => {
                e && (s.current = null)
            }
        }), a
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
                let [t, n] = (0, r.useState)(e), o = (0, r.useRef)(t), s = (0, r.useRef)(null), a = (0, r.useRef)(() => {
                    if (!s.current) return;
                    let e = s.current.next();
                    if (e.done) {
                        s.current = null;
                        return
                    }
                    o.current === e.value ? a.current() : n(e.value)
                });
                return i(() => {
                    o.current = t, s.current && a.current()
                }), [t, (0, r.useCallback)(e => {
                    s.current = e(o.current), a.current()
                }, [a])]
            }(t),
            s = (0, r.useCallback)(() => {
                o(function*() {
                    yield t, yield document.getElementById(t) ? t : void 0
                })
            }, [t, o]);
        return i(s, [t, s, ...e]), n
    }], 823512), e.s(["mergeRefs", 0, E], 402801);
    let T = function() {
        for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++)(e = arguments[n]) && (t = function e(t) {
            var n, r, i = "";
            if ("string" == typeof t || "number" == typeof t) i += t;
            else if ("object" == typeof t)
                if (Array.isArray(t)) {
                    var o = t.length;
                    for (n = 0; n < o; n++) t[n] && (r = e(t[n])) && (i && (i += " "), i += r)
                } else
                    for (r in t) t[r] && (i && (i += " "), i += r);
            return i
        }(e)) && (r && (r += " "), r += t);
        return r
    };
    e.s(["mergeProps", 0, function(...e) {
        let t = {
            ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
            let i = e[r];
            for (let e in i) {
                let r = t[e],
                    o = i[e];
                "function" == typeof r && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && 90 >= e.charCodeAt(2) ? t[e] = (0, n.chain)(r, o) : ("className" === e || "UNSAFE_className" === e) && "string" == typeof r && "string" == typeof o ? t[e] = T(r, o) : "id" === e && r && o ? t.id = m(r, o) : "ref" === e && r && o ? t.ref = E(r, o) : t[e] = void 0 !== o ? o : r
            }
        }
        return t
    }], 429305)
}, 838031, e => {
    "use strict";
    var t = e.i(499531);
    e.s(["useObjectRef", 0, function(e) {
        let n = (0, t.useRef)(null),
            r = (0, t.useRef)(void 0),
            i = (0, t.useCallback)(t => {
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
        return (0, t.useMemo)(() => ({
            get current() {
                return n.current
            },
            set current(value) {
                n.current = value, r.current && (r.current(), r.current = void 0), null != value && (r.current = i(value))
            }
        }), [i])
    }])
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
        a = s.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
    s.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
    let u = s.join(':not([hidden]):not([tabindex="-1"]),');

    function l(e, t) {
        return e.matches(a) && !c(e) && (t?.skipVisibilityCheck || o(e))
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
        return e.matches(u) && o(e) && !c(e)
    }], 424690);
    var d = e.i(185559),
        f = e.i(499531);

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
            a = e => {
                ((0, n.getEventTarget)(e) === o || s) && e.stopImmediatePropagation()
            },
            u = r => {
                ((0, n.getEventTarget)(r) === o || s) && (r.stopImmediatePropagation(), e || s || (s = !0, (0, t.focusWithoutScrolling)(o), f()))
            },
            c = t => {
                ((0, n.getEventTarget)(t) === e || s) && t.stopImmediatePropagation()
            },
            d = r => {
                ((0, n.getEventTarget)(r) === e || s) && (r.stopImmediatePropagation(), s || (s = !0, (0, t.focusWithoutScrolling)(o), f()))
            };
        i.addEventListener("blur", a, !0), i.addEventListener("focusout", u, !0), i.addEventListener("focusin", d, !0), i.addEventListener("focus", c, !0);
        let f = () => {
                cancelAnimationFrame(p), i.removeEventListener("blur", a, !0), i.removeEventListener("focusout", u, !0), i.removeEventListener("focusin", d, !0), i.removeEventListener("focus", c, !0), g = !1, s = !1
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
        a = r(function() {
            return o() || s()
        }),
        u = r(function() {
            return i() || a()
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
    e.s(["isAndroid", 0, d, "isAppleDevice", 0, u, "isChrome", 0, c, "isFirefox", 0, f, "isIOS", 0, a, "isIPad", 0, s, "isMac", 0, i, "isWebKit", 0, l])
}, 662764, e => {
    "use strict";
    var t = e.i(904960);
    e.s(["isVirtualClick", 0, function(e) {
        return "" === e.pointerType && !!e.isTrusted || ((0, t.isAndroid)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
    }, "isVirtualPointerEvent", 0, function(e) {
        return !(0, t.isAndroid)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
    }])
}, 97584, e => {
    "use strict";
    var t = e.i(259457),
        n = e.i(904960),
        r = e.i(499531);
    let i = (0, r.createContext)({
        isNative: !0,
        open: function(e, t) {
            if (e instanceof HTMLAnchorElement) s(e, t);
            else if (e.hasAttribute("data-href")) {
                let n = document.createElement("a");
                n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), s(n, t), e.removeChild(n)
            }
        },
        useHref: e => e
    });

    function o() {
        return (0, r.useContext)(i)
    }

    function s(e, r, i = !0) {
        let {
            metaKey: o,
            ctrlKey: a,
            altKey: u,
            shiftKey: l
        } = r;
        (0, n.isFirefox)() && window.event?.type?.startsWith("key") && "_blank" === e.target && ((0, n.isMac)() ? o = !0 : a = !0);
        let c = (0, n.isWebKit)() && (0, n.isMac)() && !(0, n.isIPad)() && 1 ? new KeyboardEvent("keydown", {
            keyIdentifier: "Enter",
            metaKey: o,
            ctrlKey: a,
            altKey: u,
            shiftKey: l
        }) : new MouseEvent("click", {
            metaKey: o,
            ctrlKey: a,
            altKey: u,
            shiftKey: l,
            detail: 1,
            bubbles: !0,
            cancelable: !0
        });
        s.isOpening = i, (0, t.focusWithoutScrolling)(e), e.dispatchEvent(c), s.isOpening = !1
    }
    s.isOpening = !1, e.s(["handleLinkClick", 0, function(e, t, n, r) {
        var i;
        let o;
        !(!t.isNative && e.currentTarget instanceof HTMLAnchorElement) || !e.currentTarget.href || e.isDefaultPrevented() || (i = e.currentTarget, (o = i.getAttribute("target")) && "_self" !== o || i.origin !== location.origin || i.hasAttribute("download") || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) || !n || (e.preventDefault(), t.open(e.currentTarget, e, n, r))
    }, "openLink", 0, s, "useLinkProps", 0, function(e) {
        let t = o().useHref(e?.href ?? ""),
            n = {};
        if (e)
            for (let r of ["href", "target", "rel", "download", "ping", "referrerPolicy"]) r in e && (n[r] = "href" === r ? t : e[r]);
        return n
    }, "useRouter", 0, o])
}, 816862, e => {
    "use strict";
    let t;
    var n = e.i(776050),
        r = e.i(575414),
        i = e.i(242637),
        o = e.i(904960),
        s = e.i(662764),
        a = e.i(97584),
        u = e.i(726103),
        l = e.i(499531);
    let c = null,
        d = "keyboard",
        f = new Set,
        p = new Map,
        g = !1,
        v = !1,
        y = {
            Tab: !0,
            Escape: !0
        };

    function m(e, t) {
        for (let n of f) n(e, t)
    }

    function E(e) {
        g = !0, a.openLink.isOpening || e.metaKey || !(0, o.isMac)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (c = "keyboard", d = "keyboard", m("keyboard", e))
    }

    function b(e) {
        c = "pointer", d = "pointerType" in e ? e.pointerType : "mouse", ("mousedown" === e.type || "pointerdown" === e.type) && (g = !0, m("pointer", e))
    }

    function T(e) {
        !a.openLink.isOpening && (0, s.isVirtualClick)(e) && (g = !0, c = "virtual", d = "virtual")
    }

    function h(e) {
        let t = (0, r.getOwnerWindow)((0, n.getEventTarget)(e)),
            o = (0, r.getOwnerDocument)((0, n.getEventTarget)(e));
        (0, n.getEventTarget)(e) !== t && (0, n.getEventTarget)(e) !== o && !i.ignoreFocusEvent && e.isTrusted && (g || v || (c = "virtual", d = "virtual", m("virtual", e)), g = !1, v = !1)
    }

    function P() {
        i.ignoreFocusEvent || (g = !1, v = !0)
    }

    function w(e) {
        if ("u" < typeof window || "u" < typeof document) return;
        let t = (0, r.getOwnerWindow)(e),
            n = (0, r.getOwnerDocument)(e);
        if (p.get(t)) return;
        let i = t.HTMLElement.prototype.focus;
        Reflect.defineProperty(t.HTMLElement.prototype, "focus", {
            configurable: !0,
            writable: !0,
            value: function() {
                g = !0, i.apply(this, arguments)
            }
        }), n.addEventListener("keydown", E, !0), n.addEventListener("keyup", E, !0), n.addEventListener("click", T, !0), t.addEventListener("focus", h, !0), t.addEventListener("blur", P, !1), "u" > typeof PointerEvent && (n.addEventListener("pointerdown", b, !0), n.addEventListener("pointermove", b, !0), n.addEventListener("pointerup", b, !0)), t.addEventListener("beforeunload", () => {
            S(e)
        }, {
            once: !0
        }), p.set(t, {
            focus: i
        })
    }
    let S = (e, t) => {
        let n = (0, r.getOwnerWindow)(e),
            i = (0, r.getOwnerDocument)(e);
        t && i.removeEventListener("DOMContentLoaded", t), p.has(n) && (Reflect.defineProperty(n.HTMLElement.prototype, "focus", {
            configurable: !0,
            writable: !0,
            value: p.get(n).focus
        }), i.removeEventListener("keydown", E, !0), i.removeEventListener("keyup", E, !0), i.removeEventListener("click", T, !0), n.removeEventListener("focus", h, !0), n.removeEventListener("blur", P, !1), "u" > typeof PointerEvent && (i.removeEventListener("pointerdown", b, !0), i.removeEventListener("pointermove", b, !0), i.removeEventListener("pointerup", b, !0)), p.delete(n))
    };

    function L() {
        return "pointer" !== c
    }
    "u" > typeof document && ("loading" !== (t = (0, r.getOwnerDocument)(void 0)).readyState ? w(void 0) : t.addEventListener("DOMContentLoaded", () => {
        w(void 0)
    }));
    let C = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
    e.s(["getInteractionModality", 0, function() {
        return c
    }, "getPointerType", 0, function() {
        return d
    }, "isFocusVisible", 0, L, "setInteractionModality", 0, function(e) {
        c = e, d = "pointer" === e ? "mouse" : e, m(e, null)
    }, "useFocusVisibleListener", 0, function(e, t, i) {
        w(), (0, l.useEffect)(() => {
            if (i?.enabled === !1) return;
            let t = (t, o) => {
                var s;
                let a, u, l, c, d, f, p, g;
                s = !!i?.isTextInput, a = o ? (0, n.getEventTarget)(o) : void 0, u = (0, r.getOwnerDocument)(a), c = void 0 !== (l = (0, r.getOwnerWindow)(a)) ? l.HTMLInputElement : HTMLInputElement, d = void 0 !== l ? l.HTMLTextAreaElement : HTMLTextAreaElement, f = void 0 !== l ? l.HTMLElement : HTMLElement, p = void 0 !== l ? l.KeyboardEvent : KeyboardEvent, g = (0, n.getActiveElement)(u), (s = s || g instanceof c && !C.has(g.type) || g instanceof d || g instanceof f && g.isContentEditable) && "keyboard" === t && o instanceof p && !y[o.key] || e(L())
            };
            return f.add(t), () => {
                f.delete(t)
            }
        }, t)
    }, "useInteractionModality", 0, function() {
        w();
        let [e, t] = (0, l.useState)(c);
        return (0, l.useEffect)(() => {
            let e = () => {
                t(c)
            };
            return f.add(e), () => {
                f.delete(e)
            }
        }, []), (0, u.useIsSSR)() ? null : e
    }])
}, 800278, e => {
    "use strict";
    var t = e.i(776050);
    let n = new Map,
        r = new Set;

    function i() {
        if ("u" < typeof window) return;

        function e(e) {
            return "propertyName" in e
        }
        let i = o => {
            let s = (0, t.getEventTarget)(o);
            if (!e(o) || !s) return;
            let a = n.get(s);
            if (a && (a.delete(o.propertyName), 0 === a.size && (s.removeEventListener("transitioncancel", i), n.delete(s)), 0 === n.size)) {
                for (let e of r) e();
                r.clear()
            }
        };
        document.body.addEventListener("transitionrun", r => {
            let o = (0, t.getEventTarget)(r);
            if (!e(r) || !o) return;
            let s = n.get(o);
            s || (s = new Set, n.set(o, s), o.addEventListener("transitioncancel", i, {
                once: !0
            })), s.add(r.propertyName)
        }), document.body.addEventListener("transitionend", i)
    }
    "u" > typeof document && ("loading" !== document.readyState ? i() : document.addEventListener("DOMContentLoaded", i)), e.s(["runAfterTransition", 0, function(e) {
        requestAnimationFrame(() => {
            for (let [e] of n) "isConnected" in e && !e.isConnected && n.delete(e);
            0 === n.size ? e() : r.add(e)
        })
    }])
}, 799163, e => {
    "use strict";
    var t = e.i(259457),
        n = e.i(776050),
        r = e.i(816862),
        i = e.i(575414),
        o = e.i(800278);
    e.s(["focusSafely", 0, function(e) {
        if (!e.isConnected) return;
        let s = (0, i.getOwnerDocument)(e);
        if ("virtual" === (0, r.getInteractionModality)()) {
            let r = (0, n.getActiveElement)(s);
            (0, o.runAfterTransition)(() => {
                let i = (0, n.getActiveElement)(s);
                (i === r || i === s.body) && e.isConnected && (0, t.focusWithoutScrolling)(e)
            })
        } else(0, t.focusWithoutScrolling)(e)
    }])
}, 153393, e => {
    "use strict";
    var t = e.i(776050),
        n = e.i(575414),
        r = e.i(242637),
        i = e.i(499531);
    e.s(["useFocus", 0, function(e) {
        let {
            isDisabled: o,
            onFocus: s,
            onBlur: a,
            onFocusChange: u
        } = e, l = (0, i.useCallback)(e => {
            if ((0, t.getEventTarget)(e) === e.currentTarget) return a && a(e), u && u(!1), !0
        }, [a, u]), c = (0, r.useSyntheticBlurEvent)(l), d = (0, i.useCallback)(e => {
            let r = (0, t.getEventTarget)(e),
                i = (0, n.getOwnerDocument)(r),
                o = i ? (0, t.getActiveElement)(i) : (0, t.getActiveElement)();
            r === e.currentTarget && r === o && (s && s(e), u && u(!0), c(e))
        }, [u, s, c]);
        return {
            focusProps: {
                onFocus: !o && (s || u || a) ? d : void 0,
                onBlur: !o && (a || u) ? l : void 0
            }
        }
    }])
}, 290005, e => {
    "use strict";

    function t(e) {
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
    e.i(203217), e.s(["useKeyboard", 0, function(e) {
        return {
            keyboardProps: e.isDisabled ? {} : {
                onKeyDown: t(e.onKeyDown),
                onKeyUp: t(e.onKeyUp)
            }
        }
    }], 290005)
}, 996980, e => {
    "use strict";
    var t = e.i(185559);
    e.s(["useSyncRef", 0, function(e, n) {
        (0, t.useLayoutEffect)(() => {
            if (e && e.ref && n) return e.ref.current = n.current, () => {
                e.ref && (e.ref.current = null)
            }
        })
    }])
}, 513485, e => {
    "use strict";
    var t = e.i(799163),
        n = e.i(429305),
        r = (e.i(402801), e.i(153393)),
        i = e.i(290005),
        o = e.i(838031),
        s = e.i(996980),
        a = e.i(499531);
    let u = a.default.createContext(null),
        l = a.default.forwardRef(function(e, t) {
            let {
                children: n,
                ...r
            } = e, i = (0, o.useObjectRef)(t), s = {
                ...r,
                ref: i
            };
            return a.default.createElement(u.Provider, {
                value: s
            }, n)
        });
    e.s(["FocusableContext", 0, u, "FocusableProvider", 0, l, "useFocusable", 0, function(e, o) {
        let {
            focusProps: l
        } = (0, r.useFocus)(e), {
            keyboardProps: c
        } = (0, i.useKeyboard)(e), d = (0, n.mergeProps)(l, c), f = function(e) {
            let t = (0, a.useContext)(u) || {};
            (0, s.useSyncRef)(t, e);
            let {
                ref: n,
                ...r
            } = t;
            return r
        }(o), p = e.isDisabled ? {} : f, g = (0, a.useRef)(e.autoFocus);
        (0, a.useEffect)(() => {
            g.current && o.current && (0, t.focusSafely)(o.current), g.current = !1
        }, [o]);
        let v = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (v = void 0), {
            focusableProps: (0, n.mergeProps)({
                ...d,
                tabIndex: v
            }, p)
        }
    }])
}, 600939, e => {
    "use strict";
    var t = e.i(185559),
        n = e.i(499531);
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
}, 679933, e => {
    "use strict";
    let t = new Set(["id"]),
        n = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        r = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        i = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        o = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        s = /^(data-.*)$/;
    e.s(["filterDOMProps", 0, function(e, a = {}) {
        let {
            labelable: u,
            isLink: l,
            global: c,
            events: d = c,
            propNames: f
        } = a, p = {};
        for (let a in e) Object.prototype.hasOwnProperty.call(e, a) && (t.has(a) || u && n.has(a) || l && r.has(a) || c && i.has(a) || d && (o.has(a) || a.endsWith("Capture") && o.has(a.slice(0, -7))) || f?.has(a) || s.test(a)) && (p[a] = e[a]);
        return p
    }])
}, 812018, e => {
    "use strict";
    var t = e.i(575414),
        n = e.i(904960),
        r = e.i(800278);
    let i = "default",
        o = "",
        s = new WeakMap;
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
    }])
}, 938280, e => {
    "use strict";
    var t = e.i(575414);

    function n(e) {
        let t = e?.defaultView;
        return t?.__webpack_nonce__ || globalThis.__webpack_nonce__ || void 0
    }
    let r = new WeakMap;
    e.s(["getNonce", 0, function(e) {
        let i = e ?? ("u" > typeof document ? document : void 0);
        if (!i) return n(i);
        if (r.has(i)) return r.get(i);
        let o = i.querySelector('meta[property="csp-nonce"]'),
            s = o && o instanceof(0, t.getOwnerWindow)(o).HTMLMetaElement && (o.nonce || o.content) || n(i) || void 0;
        return void 0 !== s && r.set(i, s), s
    }])
}, 58824, e => {
    "use strict";
    let t = e.i(499531).default.createContext({
        register: () => {}
    });
    t.displayName = "PressResponderContext", e.s(["PressResponderContext", 0, t])
}, 322660, e => {
    "use strict";
    var t = e.i(499531);
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
        a = e.i(575414),
        u = e.i(904960),
        l = e.i(662764),
        c = e.i(429305),
        d = e.i(97584),
        f = e.i(58824),
        p = e.i(600939),
        g = e.i(322660),
        v = e.i(996980);
    e.i(320666);
    var y = e.i(499531);
    class m {
        #e;
        constructor(e, t, n, r) {
            this.#e = !0;
            let i = r?.target ?? n.currentTarget;
            const o = i?.getBoundingClientRect();
            let s, a = 0,
                u, l = null;
            null != n.clientX && null != n.clientY && (u = n.clientX, l = n.clientY), o && (null != u && null != l ? (s = u - o.left, a = l - o.top) : (s = o.width / 2, a = o.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = a, this.key = n.key
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

    function P(e, t) {
        let {
            key: n,
            code: r
        } = e, i = t.getAttribute("role");
        return ("Enter" === n || " " === n || "Spacebar" === n || "Space" === r) && !(t instanceof(0, a.getOwnerWindow)(t).HTMLInputElement && !C(t, n) || t instanceof(0, a.getOwnerWindow)(t).HTMLTextAreaElement || t.isContentEditable) && !(("link" === i || !i && h(t)) && "Enter" !== n)
    }

    function w(e, t) {
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

    function S(e, t) {
        return e instanceof HTMLInputElement ? !C(e, t) : !(e instanceof HTMLInputElement) && (e instanceof HTMLButtonElement ? "submit" !== e.type && "reset" !== e.type : !h(e))
    }
    let L = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

    function C(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : L.has(e.type)
    }
    e.s(["usePress", 0, function(e) {
        let {
            onPress: L,
            onPressChange: C,
            onPressStart: k,
            onPressEnd: M,
            onPressUp: O,
            onClick: A,
            isDisabled: D,
            isPressed: K,
            preventFocusOnPress: F,
            shouldCancelOnPointerExit: x,
            allowTextSelectionOnPress: I,
            ref: R,
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
            addGlobalListener: U,
            removeAllGlobalListeners: V
        } = (0, g.useGlobalListeners)(), B = (0, y.useCallback)((e, t) => {
            let n = _.current;
            if (D || n.didFirePressStart) return !1;
            let r = !0;
            if (n.isTriggeringEvent = !0, k) {
                let n = new m("pressstart", t, e);
                k(n), r = n.shouldStopPropagation
            }
            return C && C(!0), n.isTriggeringEvent = !1, n.didFirePressStart = !0, N(!0), r
        }, [D, k, C]), G = (0, y.useCallback)((e, t, n = !0) => {
            let r = _.current;
            if (!r.didFirePressStart) return !1;
            r.didFirePressStart = !1, r.isTriggeringEvent = !0;
            let i = !0;
            if (M) {
                let n = new m("pressend", t, e);
                M(n), i = n.shouldStopPropagation
            }
            if (C && C(!1), N(!1), L && n && !D) {
                let n = new m("press", t, e);
                L(n), i &&= n.shouldStopPropagation
            }
            return r.isTriggeringEvent = !1, i
        }, [D, M, C, L]), j = (0, p.useEffectEvent)(G), z = (0, y.useCallback)((e, t) => {
            let n = _.current;
            if (D) return !1;
            if (O) {
                n.isTriggeringEvent = !0;
                let r = new m("pressup", t, e);
                return O(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
            }
            return !0
        }, [D, O]), $ = (0, p.useEffectEvent)(z), Y = (0, y.useCallback)(e => {
            let t = _.current;
            if (t.isPressed && t.target) {
                for (let n of (t.didFirePressStart && null != t.pointerType && G(w(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, V(), I || (0, r.restoreTextSelection)(t.target), t.disposables)) n();
                t.disposables = []
            }
        }, [I, V, G]), X = (0, p.useEffectEvent)(Y);
        (0, y.useEffect)(() => {
            D && _.current.isPressed && X({
                currentTarget: _.current.target,
                shiftKey: !1,
                ctrlKey: !1,
                metaKey: !1,
                altKey: !1
            })
        }, [D]);
        let q = (0, y.useCallback)(e => {
                x && Y(e)
            }, [x, Y]),
            J = (0, y.useCallback)(e => {
                D || A?.(e)
            }, [D, A]),
            Q = (0, y.useCallback)((e, t) => {
                if (!D && A) {
                    let r = new MouseEvent("click", e);
                    (0, n.setEventTarget)(r, t), A((0, n.createSyntheticEvent)(r))
                }
            }, [D, A]),
            Z = (0, y.useMemo)(() => {
                let e = _.current,
                    s = {
                        onKeyDown(n) {
                            if (P(n.nativeEvent, n.currentTarget) && (0, o.nodeContains)(n.currentTarget, (0, o.getEventTarget)(n))) {
                                S((0, o.getEventTarget)(n), n.key) && n.preventDefault();
                                let r = !0;
                                e.isPressed || n.repeat || (e.target = n.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", r = B(n, "keyboard"));
                                let i = n.currentTarget;
                                U((0, a.getOwnerDocument)(n.currentTarget), "keyup", (0, t.chain)(t => {
                                    P(t, i) && !t.repeat && (0, o.nodeContains)(i, (0, o.getEventTarget)(t)) && e.target && $(w(e.target, t), "keyboard")
                                }, c), !0), r && n.stopPropagation(), n.metaKey && (0, u.isMac)() && e.metaKeyEvents?.set(n.key, n.nativeEvent)
                            } else "Meta" === n.key && (e.metaKeyEvents = new Map)
                        },
                        onClick(t) {
                            if ((!t || (0, o.nodeContains)(t.currentTarget, (0, o.getEventTarget)(t))) && t && 0 === t.button && !e.isTriggeringEvent && !d.openLink.isOpening) {
                                let n = !0;
                                if (D && t.preventDefault(), !e.ignoreEmulatedMouseEvents && !e.isPressed && ("virtual" === e.pointerType || (0, l.isVirtualClick)(t.nativeEvent))) {
                                    let e = B(t, "virtual"),
                                        r = $(t, "virtual"),
                                        i = j(t, "virtual");
                                    J(t), n = e && r && i
                                } else if (e.isPressed && "keyboard" !== e.pointerType) {
                                    let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                                        i = $(w(t.currentTarget, t), r),
                                        o = j(w(t.currentTarget, t), r, !0);
                                    n = i && o, e.isOverTarget = !1, J(t), X(t)
                                }
                                e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                            }
                        }
                    },
                    c = t => {
                        if (e.isPressed && e.target && P(t, e.target)) {
                            S((0, o.getEventTarget)(t), t.key) && t.preventDefault();
                            let n = (0, o.getEventTarget)(t),
                                r = (0, o.nodeContains)(e.target, n);
                            j(w(e.target, t), "keyboard", r), r && Q(t, e.target), V(), "Enter" !== t.key && h(e.target) && (0, o.nodeContains)(e.target, n) && !t[E] && (t[E] = !0, (0, d.openLink)(e.target, t, !1)), e.isPressed = !1, e.metaKeyEvents?.delete(t.key)
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
                            e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = n.pointerId, e.target = n.currentTarget, I || (0, r.disableTextSelection)(e.target), i = B(n, e.pointerType);
                            let s = (0, o.getEventTarget)(n);
                            "releasePointerCapture" in s && ("hasPointerCapture" in s ? s.hasPointerCapture(n.pointerId) && s.releasePointerCapture(n.pointerId) : s.releasePointerCapture(n.pointerId)), U((0, a.getOwnerDocument)(n.currentTarget), "pointerup", t, !1), U((0, a.getOwnerDocument)(n.currentTarget), "pointercancel", u, !1)
                        }
                        i && n.stopPropagation()
                    }, s.onMouseDown = t => {
                        if ((0, o.nodeContains)(t.currentTarget, (0, o.getEventTarget)(t)) && 0 === t.button) {
                            if (F) {
                                let r = (0, n.preventFocus)(t.target);
                                r && e.disposables.push(r)
                            }
                            t.stopPropagation()
                        }
                    }, s.onPointerUp = t => {
                        (0, o.nodeContains)(t.currentTarget, (0, o.getEventTarget)(t)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || $(t, e.pointerType || t.pointerType))
                    }, s.onPointerEnter = t => {
                        t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, B(w(e.target, t), e.pointerType))
                    }, s.onPointerLeave = t => {
                        t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, j(w(e.target, t), e.pointerType, !1), q(t))
                    };
                    let t = t => {
                            if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                                if ((0, o.nodeContains)(e.target, (0, o.getEventTarget)(t)) && null != e.pointerType) {
                                    let n = !1,
                                        r = setTimeout(() => {
                                            e.isPressed && e.target instanceof HTMLElement && (n ? X(t) : ((0, i.focusWithoutScrolling)(e.target), e.target.click()))
                                        }, 80);
                                    U(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                                } else X(t);
                                e.isOverTarget = !1
                            }
                        },
                        u = e => {
                            X(e)
                        };
                    s.onDragStart = e => {
                        (0, o.nodeContains)(e.currentTarget, (0, o.getEventTarget)(e)) && X(e)
                    }
                }
                return s
            }, [U, D, F, V, I, q, B, J, Q]);
        return (0, y.useEffect)(() => {
            if (!R) return;
            let e = (0, a.getOwnerDocument)(R.current);
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
        }, [R]), (0, y.useEffect)(() => {
            let e = _.current;
            return () => {
                for (let t of (I || (0, r.restoreTextSelection)(e.target ?? void 0), e.disposables)) t();
                e.disposables = []
            }
        }, [I]), {
            isPressed: K || W,
            pressProps: (0, c.mergeProps)(H, Z, {
                [T]: !0
            })
        }
    }])
}, 611017, e => {
    "use strict";
    var t = e.i(679933),
        n = e.i(429305),
        r = e.i(513485),
        i = e.i(629959);
    e.s(["useButton", 0, function(e, o) {
        let s, {
            elementType: a = "button",
            isDisabled: u,
            onPress: l,
            onPressStart: c,
            onPressEnd: d,
            onPressUp: f,
            onPressChange: p,
            preventFocusOnPress: g,
            allowFocusWhenDisabled: v,
            onClick: y,
            href: m,
            target: E,
            rel: b,
            type: T = "button"
        } = e;
        s = "button" === a ? {
            type: T,
            disabled: u,
            form: e.form,
            formAction: e.formAction,
            formEncType: e.formEncType,
            formMethod: e.formMethod,
            formNoValidate: e.formNoValidate,
            formTarget: e.formTarget,
            name: e.name,
            value: e.value
        } : {
            role: "button",
            href: "a" !== a || u ? void 0 : m,
            target: "a" === a ? E : void 0,
            type: "input" === a ? T : void 0,
            disabled: "input" === a ? u : void 0,
            "aria-disabled": u && "input" !== a ? u : void 0,
            rel: "a" === a ? b : void 0
        };
        let {
            pressProps: h,
            isPressed: P
        } = (0, i.usePress)({
            onPressStart: c,
            onPressEnd: d,
            onPressChange: p,
            onPress: l,
            onPressUp: f,
            onClick: y,
            isDisabled: u,
            preventFocusOnPress: g,
            ref: o
        }), {
            focusableProps: w
        } = (0, r.useFocusable)(e, o);
        v && (w.tabIndex = u ? -1 : w.tabIndex);
        let S = (0, n.mergeProps)(w, h, (0, t.filterDOMProps)(e, {
            labelable: !0
        }));
        return {
            isPressed: P,
            buttonProps: (0, n.mergeProps)(s, S, {
                "aria-haspopup": e["aria-haspopup"],
                "aria-expanded": e["aria-expanded"],
                "aria-controls": e["aria-controls"],
                "aria-pressed": e["aria-pressed"],
                "aria-current": e["aria-current"],
                "aria-disabled": e["aria-disabled"]
            })
        }
    }])
}, 768307, e => {
    "use strict";
    var t = e.i(242637),
        n = e.i(776050),
        r = e.i(575414),
        i = e.i(322660),
        o = e.i(499531);
    e.s(["useFocusWithin", 0, function(e) {
        let {
            isDisabled: s,
            onBlurWithin: a,
            onFocusWithin: u,
            onFocusWithinChange: l
        } = e, c = (0, o.useRef)({
            isFocusWithin: !1
        }), {
            addGlobalListener: d,
            removeAllGlobalListeners: f
        } = (0, i.useGlobalListeners)(), p = (0, o.useCallback)(e => {
            (0, n.nodeContains)(e.currentTarget, (0, n.getEventTarget)(e)) && c.current.isFocusWithin && !(0, n.nodeContains)(e.currentTarget, e.relatedTarget) && (c.current.isFocusWithin = !1, f(), a && a(e), l && l(!1))
        }, [a, l, c, f]), g = (0, t.useSyntheticBlurEvent)(p), v = (0, o.useCallback)(e => {
            if (!(0, n.nodeContains)(e.currentTarget, (0, n.getEventTarget)(e))) return;
            let i = (0, n.getEventTarget)(e),
                o = (0, r.getOwnerDocument)(i),
                s = (0, n.getActiveElement)(o);
            if (!c.current.isFocusWithin && s === i) {
                u && u(e), l && l(!0), c.current.isFocusWithin = !0, g(e);
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
        }, [u, l, g, d, p]);
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
}, 355770, e => {
    "use strict";
    var t = e.i(776050),
        n = e.i(575414),
        r = e.i(322660),
        i = e.i(499531);
    let o = !1,
        s = 0;

    function a(e) {
        "touch" === e.pointerType && (o = !0, setTimeout(() => {
            o = !1
        }, 500))
    }

    function u() {
        let e = (0, n.getOwnerDocument)(null);
        if (void 0 !== e) return 0 === s && "u" > typeof PointerEvent && e.addEventListener("pointerup", a), s++, () => {
            !(--s > 0) && "u" > typeof PointerEvent && e.removeEventListener("pointerup", a)
        }
    }
    e.s(["useHover", 0, function(e) {
        let {
            onHoverStart: s,
            onHoverChange: a,
            onHoverEnd: l,
            isDisabled: c
        } = e, [d, f] = (0, i.useState)(!1), p = (0, i.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null
        }).current;
        (0, i.useEffect)(u, []);
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
                    }), a && a(!1), f(!1))
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
                    }), a && a(!0), f(!0)
                })(r, r.pointerType)
            }, r.onPointerLeave = n => {
                !c && (0, t.nodeContains)(n.currentTarget, (0, t.getEventTarget)(n)) && e(n, n.pointerType)
            }), {
                hoverProps: r,
                triggerHoverEnd: e
            }
        }, [s, a, l, c, p, g, v]);
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