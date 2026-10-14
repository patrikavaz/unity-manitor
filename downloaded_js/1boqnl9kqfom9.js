;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "a8238905-7d12-862e-4570-3f584be4a35a")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 799163, 800278, e => {
    "use strict";
    var t = e.i(259457),
        n = e.i(776050),
        r = e.i(816862),
        i = e.i(575414);
    let o = new Map,
        u = new Set;

    function a() {
        if ("u" < typeof window) return;

        function e(e) {
            return "propertyName" in e
        }
        let t = r => {
            let i = (0, n.getEventTarget)(r);
            if (!e(r) || !i) return;
            let a = o.get(i);
            if (a && (a.delete(r.propertyName), 0 === a.size && (i.removeEventListener("transitioncancel", t), o.delete(i)), 0 === o.size)) {
                for (let e of u) e();
                u.clear()
            }
        };
        document.body.addEventListener("transitionrun", r => {
            let i = (0, n.getEventTarget)(r);
            if (!e(r) || !i) return;
            let u = o.get(i);
            u || (u = new Set, o.set(i, u), i.addEventListener("transitioncancel", t, {
                once: !0
            })), u.add(r.propertyName)
        }), document.body.addEventListener("transitionend", t)
    }

    function s(e) {
        requestAnimationFrame(() => {
            for (let [e] of o) "isConnected" in e && !e.isConnected && o.delete(e);
            0 === o.size ? e() : u.add(e)
        })
    }
    "u" > typeof document && ("loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a)), e.s(["runAfterTransition", 0, s], 800278), e.s(["focusSafely", 0, function(e) {
        if (!e.isConnected) return;
        let o = (0, i.getOwnerDocument)(e);
        if ("virtual" === (0, r.getInteractionModality)()) {
            let r = (0, n.getActiveElement)(o);
            s(() => {
                let i = (0, n.getActiveElement)(o);
                (i === r || i === o.body) && e.isConnected && (0, t.focusWithoutScrolling)(e)
            })
        } else(0, t.focusWithoutScrolling)(e)
    }], 799163)
}, 816862, e => {
    "use strict";
    let t;
    var n = e.i(776050),
        r = e.i(575414),
        i = e.i(242637),
        o = e.i(904960),
        u = e.i(662764),
        a = e.i(97584),
        s = e.i(726103),
        l = e.i(409781);
    let c = null,
        d = "keyboard",
        f = new Set,
        v = new Map,
        p = !1,
        g = !1,
        m = {
            Tab: !0,
            Escape: !0
        };

    function E(e, t) {
        for (let n of f) n(e, t)
    }

    function b(e) {
        p = !0, a.openLink.isOpening || e.metaKey || !(0, o.isMac)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (c = "keyboard", d = "keyboard", E("keyboard", e))
    }

    function y(e) {
        c = "pointer", d = "pointerType" in e ? e.pointerType : "mouse", ("mousedown" === e.type || "pointerdown" === e.type) && (p = !0, E("pointer", e))
    }

    function h(e) {
        !a.openLink.isOpening && (0, u.isVirtualClick)(e) && (p = !0, c = "virtual", d = "virtual")
    }

    function w(e) {
        let t = (0, r.getOwnerWindow)((0, n.getEventTarget)(e)),
            o = (0, r.getOwnerDocument)((0, n.getEventTarget)(e));
        (0, n.getEventTarget)(e) !== t && (0, n.getEventTarget)(e) !== o && !i.ignoreFocusEvent && e.isTrusted && (p || g || (c = "virtual", d = "virtual", E("virtual", e)), p = !1, g = !1)
    }

    function T() {
        i.ignoreFocusEvent || (p = !1, g = !0)
    }

    function L(e) {
        if ("u" < typeof window || "u" < typeof document) return;
        let t = (0, r.getOwnerWindow)(e),
            n = (0, r.getOwnerDocument)(e);
        if (v.get(t)) return;
        let i = t.HTMLElement.prototype.focus;
        Reflect.defineProperty(t.HTMLElement.prototype, "focus", {
            configurable: !0,
            writable: !0,
            value: function() {
                p = !0, i.apply(this, arguments)
            }
        }), n.addEventListener("keydown", b, !0), n.addEventListener("keyup", b, !0), n.addEventListener("click", h, !0), t.addEventListener("focus", w, !0), t.addEventListener("blur", T, !1), "u" > typeof PointerEvent && (n.addEventListener("pointerdown", y, !0), n.addEventListener("pointermove", y, !0), n.addEventListener("pointerup", y, !0)), t.addEventListener("beforeunload", () => {
            A(e)
        }, {
            once: !0
        }), v.set(t, {
            focus: i
        })
    }
    let A = (e, t) => {
        let n = (0, r.getOwnerWindow)(e),
            i = (0, r.getOwnerDocument)(e);
        t && i.removeEventListener("DOMContentLoaded", t), v.has(n) && (Reflect.defineProperty(n.HTMLElement.prototype, "focus", {
            configurable: !0,
            writable: !0,
            value: v.get(n).focus
        }), i.removeEventListener("keydown", b, !0), i.removeEventListener("keyup", b, !0), i.removeEventListener("click", h, !0), n.removeEventListener("focus", w, !0), n.removeEventListener("blur", T, !1), "u" > typeof PointerEvent && (i.removeEventListener("pointerdown", y, !0), i.removeEventListener("pointermove", y, !0), i.removeEventListener("pointerup", y, !0)), v.delete(n))
    };

    function S() {
        return "pointer" !== c
    }
    "u" > typeof document && ("loading" !== (t = (0, r.getOwnerDocument)(void 0)).readyState ? L(void 0) : t.addEventListener("DOMContentLoaded", () => {
        L(void 0)
    }));
    let M = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
    e.s(["getInteractionModality", 0, function() {
        return c
    }, "getPointerType", 0, function() {
        return d
    }, "isFocusVisible", 0, S, "setInteractionModality", 0, function(e) {
        c = e, d = "pointer" === e ? "mouse" : e, E(e, null)
    }, "useFocusVisibleListener", 0, function(e, t, i) {
        L(), (0, l.useEffect)(() => {
            if (i?.enabled === !1) return;
            let t = (t, o) => {
                var u;
                let a, s, l, c, d, f, v, p;
                u = !!i?.isTextInput, a = o ? (0, n.getEventTarget)(o) : void 0, s = (0, r.getOwnerDocument)(a), c = void 0 !== (l = (0, r.getOwnerWindow)(a)) ? l.HTMLInputElement : HTMLInputElement, d = void 0 !== l ? l.HTMLTextAreaElement : HTMLTextAreaElement, f = void 0 !== l ? l.HTMLElement : HTMLElement, v = void 0 !== l ? l.KeyboardEvent : KeyboardEvent, p = (0, n.getActiveElement)(s), (u = u || p instanceof c && !M.has(p.type) || p instanceof d || p instanceof f && p.isContentEditable) && "keyboard" === t && o instanceof v && !m[o.key] || e(S())
            };
            return f.add(t), () => {
                f.delete(t)
            }
        }, t)
    }, "useInteractionModality", 0, function() {
        L();
        let [e, t] = (0, l.useState)(c);
        return (0, l.useEffect)(() => {
            let e = () => {
                t(c)
            };
            return f.add(e), () => {
                f.delete(e)
            }
        }, []), (0, s.useIsSSR)() ? null : e
    }])
}, 768307, e => {
    "use strict";
    var t = e.i(242637),
        n = e.i(776050),
        r = e.i(575414),
        i = e.i(322660),
        o = e.i(409781);
    e.s(["useFocusWithin", 0, function(e) {
        let {
            isDisabled: u,
            onBlurWithin: a,
            onFocusWithin: s,
            onFocusWithinChange: l
        } = e, c = (0, o.useRef)({
            isFocusWithin: !1
        }), {
            addGlobalListener: d,
            removeAllGlobalListeners: f
        } = (0, i.useGlobalListeners)(), v = (0, o.useCallback)(e => {
            (0, n.nodeContains)(e.currentTarget, (0, n.getEventTarget)(e)) && c.current.isFocusWithin && !(0, n.nodeContains)(e.currentTarget, e.relatedTarget) && (c.current.isFocusWithin = !1, f(), a && a(e), l && l(!1))
        }, [a, l, c, f]), p = (0, t.useSyntheticBlurEvent)(v), g = (0, o.useCallback)(e => {
            if (!(0, n.nodeContains)(e.currentTarget, (0, n.getEventTarget)(e))) return;
            let i = (0, n.getEventTarget)(e),
                o = (0, r.getOwnerDocument)(i),
                u = (0, n.getActiveElement)(o);
            if (!c.current.isFocusWithin && u === i) {
                s && s(e), l && l(!0), c.current.isFocusWithin = !0, p(e);
                let r = e.currentTarget;
                d(o, "focus", e => {
                    let i = (0, n.getEventTarget)(e);
                    if (c.current.isFocusWithin && !(0, n.nodeContains)(r, i)) {
                        let e = new o.defaultView.FocusEvent("blur", {
                            relatedTarget: i
                        });
                        (0, t.setEventTarget)(e, r), v((0, t.createSyntheticEvent)(e))
                    }
                }, {
                    capture: !0
                })
            }
        }, [s, l, p, d, v]);
        return u ? {
            focusWithinProps: {
                onFocus: void 0,
                onBlur: void 0
            }
        } : {
            focusWithinProps: {
                onFocus: g,
                onBlur: v
            }
        }
    }])
}, 242637, e => {
    "use strict";
    var t = e.i(259457),
        n = e.i(776050),
        r = e.i(575414),
        i = e.i(424690),
        o = e.i(185559),
        u = e.i(409781);

    function a(e) {
        return e.nativeEvent = e, e.isDefaultPrevented = () => e.defaultPrevented, e.isPropagationStopped = () => e.cancelBubble, e.persist = () => {}, e
    }
    let s = !1;
    e.s(["createSyntheticEvent", 0, a, "ignoreFocusEvent", () => s, "preventFocus", 0, function(e) {
        for (; e && !(0, i.isFocusable)(e, {
                skipVisibilityCheck: !0
            });) e = e.parentElement;
        let o = (0, r.getOwnerWindow)(e),
            u = o.document.activeElement;
        if (!u || u === e) return;
        s = !0;
        let a = !1,
            l = e => {
                ((0, n.getEventTarget)(e) === u || a) && e.stopImmediatePropagation()
            },
            c = r => {
                ((0, n.getEventTarget)(r) === u || a) && (r.stopImmediatePropagation(), e || a || (a = !0, (0, t.focusWithoutScrolling)(u), v()))
            },
            d = t => {
                ((0, n.getEventTarget)(t) === e || a) && t.stopImmediatePropagation()
            },
            f = r => {
                ((0, n.getEventTarget)(r) === e || a) && (r.stopImmediatePropagation(), a || (a = !0, (0, t.focusWithoutScrolling)(u), v()))
            };
        o.addEventListener("blur", l, !0), o.addEventListener("focusout", c, !0), o.addEventListener("focusin", f, !0), o.addEventListener("focus", d, !0);
        let v = () => {
                cancelAnimationFrame(p), o.removeEventListener("blur", l, !0), o.removeEventListener("focusout", c, !0), o.removeEventListener("focusin", f, !0), o.removeEventListener("focus", d, !0), s = !1, a = !1
            },
            p = requestAnimationFrame(v);
        return v
    }, "setEventTarget", 0, function(e, t) {
        Object.defineProperty(e, "target", {
            value: t
        }), Object.defineProperty(e, "currentTarget", {
            value: t
        })
    }, "useSyntheticBlurEvent", 0, function(e) {
        let t = (0, u.useRef)({
            isFocused: !1,
            observer: null
        });
        return (0, o.useLayoutEffect)(() => {
            let e = t.current;
            return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
            }
        }, []), (0, u.useCallback)(r => {
            let i = (0, n.getEventTarget)(r);
            (i instanceof HTMLButtonElement || i instanceof HTMLInputElement || i instanceof HTMLTextAreaElement || i instanceof HTMLSelectElement) && (t.current.isFocused = !0, i.addEventListener("focusout", n => {
                if (t.current.isFocused = !1, i.disabled) {
                    let t = a(n);
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
    }])
}, 726103, e => {
    "use strict";
    var t = e.i(409781);
    let n = {
            prefix: String(Math.round(1e10 * Math.random())),
            current: 0
        },
        r = t.default.createContext(n),
        i = t.default.createContext(!1);
    "u" > typeof window && window.document && window.document.createElement;
    let o = new WeakMap,
        u = "function" == typeof t.default.useId ? function(e) {
            let r = t.default.useId(),
                [i] = (0, t.useState)(c()),
                o = i ? "react-aria" : `react-aria${n.prefix}`;
            return e || `${o}-${r}`
        } : function(e) {
            let n = (0, t.useContext)(r),
                i = function(e = !1) {
                    let n = (0, t.useContext)(r),
                        i = (0, t.useRef)(null);
                    if (null === i.current && !e) {
                        let e = t.default.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?.ReactCurrentOwner?.current;
                        if (e) {
                            let t = o.get(e);
                            null == t ? o.set(e, {
                                id: n.current,
                                state: e.memoizedState
                            }) : e.memoizedState !== t.state && (n.current = t.id, o.delete(e))
                        }
                        i.current = ++n.current
                    }
                    return i.current
                }(!!e),
                u = `react-aria${n.prefix}`;
            return e || `${u}-${i}`
        };

    function a() {
        return !1
    }

    function s() {
        return !0
    }

    function l(e) {
        return () => {}
    }

    function c() {
        return "function" == typeof t.default.useSyncExternalStore ? t.default.useSyncExternalStore(l, a, s) : (0, t.useContext)(i)
    }
    e.s(["useIsSSR", 0, c, "useSSRSafeId", 0, u])
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
}, 424690, e => {
    "use strict";
    var t = e.i(575414);
    let n = "u" > typeof Element && "checkVisibility" in Element.prototype;

    function r(e, i) {
        return n ? e.checkVisibility({
            visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
            let n = (0, t.getOwnerWindow)(e);
            if (!(e instanceof n.HTMLElement) && !(e instanceof n.SVGElement)) return !1;
            let {
                display: r,
                visibility: i
            } = e.style, o = "none" !== r && "hidden" !== i && "collapse" !== i;
            if (o) {
                let {
                    getComputedStyle: n
                } = (0, t.getOwnerWindow)(e), {
                    display: r,
                    visibility: i
                } = n(e);
                o = "none" !== r && "hidden" !== i && "collapse" !== i
            }
            return o
        }(e) && !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !i || "SUMMARY" === i.nodeName || e.hasAttribute("open")) && (!e.parentElement || r(e.parentElement, e))
    }
    let i = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        o = i.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
    i.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
    let u = i.join(':not([hidden]):not([tabindex="-1"]),');

    function a(e) {
        let n = e;
        for (; null != n;) {
            if (n instanceof(0, t.getOwnerWindow)(n).HTMLElement && n.inert) return !0;
            n = n.parentElement
        }
        return !1
    }
    e.s(["isFocusable", 0, function(e, t) {
        return e.matches(o) && !a(e) && (t?.skipVisibilityCheck || r(e))
    }, "isTabbable", 0, function(e) {
        return e.matches(u) && r(e) && !a(e)
    }], 424690)
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
        r = e.i(409781);
    let i = (0, r.createContext)({
        isNative: !0,
        open: function(e, t) {
            if (e instanceof HTMLAnchorElement) u(e, t);
            else if (e.hasAttribute("data-href")) {
                let n = document.createElement("a");
                n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), u(n, t), e.removeChild(n)
            }
        },
        useHref: e => e
    });

    function o() {
        return (0, r.useContext)(i)
    }

    function u(e, r, i = !0) {
        let {
            metaKey: o,
            ctrlKey: a,
            altKey: s,
            shiftKey: l
        } = r;
        (0, n.isFirefox)() && window.event?.type?.startsWith("key") && "_blank" === e.target && ((0, n.isMac)() ? o = !0 : a = !0);
        let c = (0, n.isWebKit)() && (0, n.isMac)() && !(0, n.isIPad)() && 1 ? new KeyboardEvent("keydown", {
            keyIdentifier: "Enter",
            metaKey: o,
            ctrlKey: a,
            altKey: s,
            shiftKey: l
        }) : new MouseEvent("click", {
            metaKey: o,
            ctrlKey: a,
            altKey: s,
            shiftKey: l,
            detail: 1,
            bubbles: !0,
            cancelable: !0
        });
        u.isOpening = i, (0, t.focusWithoutScrolling)(e), e.dispatchEvent(c), u.isOpening = !1
    }
    u.isOpening = !1, e.s(["handleLinkClick", 0, function(e, t, n, r) {
        var i;
        let o;
        !(!t.isNative && e.currentTarget instanceof HTMLAnchorElement) || !e.currentTarget.href || e.isDefaultPrevented() || (i = e.currentTarget, (o = i.getAttribute("target")) && "_self" !== o || i.origin !== location.origin || i.hasAttribute("download") || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) || !n || (e.preventDefault(), t.open(e.currentTarget, e, n, r))
    }, "openLink", 0, u, "useLinkProps", 0, function(e) {
        let t = o().useHref(e?.href ?? ""),
            n = {};
        if (e)
            for (let r of ["href", "target", "rel", "download", "ping", "referrerPolicy"]) r in e && (n[r] = "href" === r ? t : e[r]);
        return n
    }, "useRouter", 0, o])
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
        u = r(function() {
            return n(/^iPad/i) || i() && navigator.maxTouchPoints > 1
        }),
        a = r(function() {
            return o() || u()
        }),
        s = r(function() {
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
    e.s(["isAndroid", 0, d, "isAppleDevice", 0, s, "isChrome", 0, c, "isFirefox", 0, f, "isIOS", 0, a, "isIPad", 0, u, "isMac", 0, i, "isWebKit", 0, l])
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
}, 600939, e => {
    "use strict";
    var t = e.i(185559),
        n = e.i(409781);
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
}, 322660, e => {
    "use strict";
    var t = e.i(409781);
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
}, 185559, e => {
    "use strict";
    var t = e.i(409781);
    let n = "u" > typeof document ? t.default.useLayoutEffect : () => {};
    e.s(["useLayoutEffect", 0, n])
}]);

//# debugId=a8238905-7d12-862e-4570-3f584be4a35a