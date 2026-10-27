;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "a95ddf6d-df34-a954-b2cf-f005514d98a7")
    } catch (e) {}
}();
(() => {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 908497, 821522, e => {
        var t = e.i(617672),
            n = e.i(402390),
            r = e.i(528837),
            i = e.i(653374);
        let o = new Map,
            u = new Set;

        function a() {
            if ("u" < typeof window) return;

            function e(e) {
                return "propertyName" in e
            }
            let t = r => {
                let i = (0, n.t)(r);
                if (!e(r) || !i) return;
                let a = o.get(i);
                if (a && (a.delete(r.propertyName), 0 === a.size && (i.removeEventListener("transitioncancel", t), o.delete(i)), 0 === o.size)) {
                    for (let e of u) e();
                    u.clear()
                }
            };
            document.body.addEventListener("transitionrun", r => {
                let i = (0, n.t)(r);
                if (!e(r) || !i) return;
                let u = o.get(i);
                u || (u = new Set, o.set(i, u), i.addEventListener("transitioncancel", t, {
                    once: !0
                })), u.add(r.propertyName)
            }), document.body.addEventListener("transitionend", t)
        }

        function l(e) {
            requestAnimationFrame(() => {
                for (let [e] of o) "isConnected" in e && !e.isConnected && o.delete(e);
                0 === o.size ? e() : u.add(e)
            })
        }
        "u" > typeof document && ("loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a)), e.s(["f", 0, l], 821522), e.s(["f", 0, function(e) {
            if (!e.isConnected) return;
            let o = (0, i.o)(e);
            if ("virtual" === (0, r.E)()) {
                let r = (0, n.z)(o);
                l(() => {
                    let i = (0, n.z)(o);
                    (i === r || i === o.body) && e.isConnected && (0, t.f)(e)
                })
            } else(0, t.f)(e)
        }], 908497)
    }, 528837, e => {
        let t;
        var n = e.i(402390),
            r = e.i(653374),
            i = e.i(853225),
            o = e.i(902844),
            u = e.i(745638),
            a = e.i(372072),
            l = e.i(771518),
            s = e.i(495056);
        let c = null,
            d = "keyboard",
            f = new Set,
            p = new Map,
            v = !1,
            m = !1,
            b = {
                Tab: !0,
                Escape: !0
            };

        function E(e, t) {
            for (let n of f) n(e, t)
        }

        function y(e) {
            v = !0, a.v.isOpening || e.metaKey || !(0, o.F)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key || (c = "keyboard", d = "keyboard", E("keyboard", e))
        }

        function h(e) {
            c = "pointer", d = "pointerType" in e ? e.pointerType : "mouse", ("mousedown" === e.type || "pointerdown" === e.type) && (v = !0, E("pointer", e))
        }

        function g(e) {
            !a.v.isOpening && (0, u.E)(e) && (v = !0, c = "virtual", d = "virtual")
        }

        function L(e) {
            let t = (0, r.d)((0, n.t)(e)),
                o = (0, r.o)((0, n.t)(e));
            (0, n.t)(e) !== t && (0, n.t)(e) !== o && !i.v && e.isTrusted && (v || m || (c = "virtual", d = "virtual", E("virtual", e)), v = !1, m = !1)
        }

        function w() {
            i.v || (v = !1, m = !0)
        }

        function T(e) {
            if ("u" < typeof window || "u" < typeof document) return;
            let t = (0, r.d)(e),
                n = (0, r.o)(e);
            if (p.get(t)) return;
            let i = t.HTMLElement.prototype.focus;
            Reflect.defineProperty(t.HTMLElement.prototype, "focus", {
                configurable: !0,
                writable: !0,
                value: function() {
                    v = !0, i.apply(this, arguments)
                }
            }), n.addEventListener("keydown", y, !0), n.addEventListener("keyup", y, !0), n.addEventListener("click", g, !0), t.addEventListener("focus", L, !0), t.addEventListener("blur", w, !1), "u" > typeof PointerEvent && (n.addEventListener("pointerdown", h, !0), n.addEventListener("pointermove", h, !0), n.addEventListener("pointerup", h, !0)), t.addEventListener("beforeunload", () => {
                C(e)
            }, {
                once: !0
            }), p.set(t, {
                focus: i
            })
        }
        let C = (e, t) => {
            let n = (0, r.d)(e),
                i = (0, r.o)(e);
            t && i.removeEventListener("DOMContentLoaded", t), p.has(n) && (Reflect.defineProperty(n.HTMLElement.prototype, "focus", {
                configurable: !0,
                writable: !0,
                value: p.get(n).focus
            }), i.removeEventListener("keydown", y, !0), i.removeEventListener("keyup", y, !0), i.removeEventListener("click", g, !0), n.removeEventListener("focus", L, !0), n.removeEventListener("blur", w, !1), "u" > typeof PointerEvent && (i.removeEventListener("pointerdown", h, !0), i.removeEventListener("pointermove", h, !0), i.removeEventListener("pointerup", h, !0)), p.delete(n))
        };

        function A() {
            return "pointer" !== c
        }
        "u" > typeof document && ("loading" !== (t = (0, r.o)(void 0)).readyState ? T(void 0) : t.addEventListener("DOMContentLoaded", () => {
            T(void 0)
        }));
        let k = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
        e.s(["E", 0, function() {
            return c
        }, "M", 0, function() {
            return d
        }, "v", 0, A, "I", 0, function(e) {
            c = e, d = "pointer" === e ? "mouse" : e, E(e, null)
        }, "q", 0, function(e, t, i) {
            T(), (0, s.useEffect)(() => {
                if (i?.enabled === !1) return;
                let t = (t, o) => {
                    var u;
                    let a, l, s, c, d, f, p, v;
                    u = !!i?.isTextInput, a = o ? (0, n.t)(o) : void 0, l = (0, r.o)(a), c = void 0 !== (s = (0, r.d)(a)) ? s.HTMLInputElement : HTMLInputElement, d = void 0 !== s ? s.HTMLTextAreaElement : HTMLTextAreaElement, f = void 0 !== s ? s.HTMLElement : HTMLElement, p = void 0 !== s ? s.KeyboardEvent : KeyboardEvent, v = (0, n.z)(l), (u = u || v instanceof c && !k.has(v.type) || v instanceof d || v instanceof f && v.isContentEditable) && "keyboard" === t && o instanceof p && !b[o.key] || e(A())
                };
                return f.add(t), () => {
                    f.delete(t)
                }
            }, t)
        }, "Q", 0, function() {
            T();
            let [e, t] = (0, s.useState)(c);
            return (0, s.useEffect)(() => {
                let e = () => {
                    t(c)
                };
                return f.add(e), () => {
                    f.delete(e)
                }
            }, []), (0, l.t)() ? null : e
        }])
    }, 439343, e => {
        var t = e.i(853225),
            n = e.i(402390),
            r = e.i(653374),
            i = e.i(368099),
            o = e.i(495056);
        e.s(["f", 0, function(e) {
            let {
                isDisabled: u,
                onBlurWithin: a,
                onFocusWithin: l,
                onFocusWithinChange: s
            } = e, c = (0, o.useRef)({
                isFocusWithin: !1
            }), {
                addGlobalListener: d,
                removeAllGlobalListeners: f
            } = (0, i.f)(), p = (0, o.useCallback)(e => {
                (0, n.C)(e.currentTarget, (0, n.t)(e)) && c.current.isFocusWithin && !(0, n.C)(e.currentTarget, e.relatedTarget) && (c.current.isFocusWithin = !1, f(), a && a(e), s && s(!1))
            }, [a, s, c, f]), v = (0, t.f)(p), m = (0, o.useCallback)(e => {
                if (!(0, n.C)(e.currentTarget, (0, n.t)(e))) return;
                let i = (0, n.t)(e),
                    o = (0, r.o)(i),
                    u = (0, n.z)(o);
                if (!c.current.isFocusWithin && u === i) {
                    l && l(e), s && s(!0), c.current.isFocusWithin = !0, v(e);
                    let r = e.currentTarget;
                    d(o, "focus", e => {
                        let i = (0, n.t)(e);
                        if (c.current.isFocusWithin && !(0, n.C)(r, i)) {
                            let e = new o.defaultView.FocusEvent("blur", {
                                relatedTarget: i
                            });
                            (0, t.n)(e, r), p((0, t.Q)(e))
                        }
                    }, {
                        capture: !0
                    })
                }
            }, [l, s, v, d, p]);
            return u ? {
                focusWithinProps: {
                    onFocus: void 0,
                    onBlur: void 0
                }
            } : {
                focusWithinProps: {
                    onFocus: m,
                    onBlur: p
                }
            }
        }])
    }, 853225, e => {
        var t = e.i(617672),
            n = e.i(402390),
            r = e.i(653374),
            i = e.i(846261),
            o = e.i(708705),
            u = e.i(495056);

        function a(e) {
            return e.nativeEvent = e, e.isDefaultPrevented = () => e.defaultPrevented, e.isPropagationStopped = () => e.cancelBubble, e.persist = () => {}, e
        }
        let l = !1;
        e.s(["Q", 0, a, "v", () => l, "O", 0, function(e) {
            for (; e && !(0, i.x)(e, {
                    skipVisibilityCheck: !0
                });) e = e.parentElement;
            let o = (0, r.d)(e),
                u = o.document.activeElement;
            if (!u || u === e) return;
            l = !0;
            let a = !1,
                s = e => {
                    ((0, n.t)(e) === u || a) && e.stopImmediatePropagation()
                },
                c = r => {
                    ((0, n.t)(r) === u || a) && (r.stopImmediatePropagation(), e || a || (a = !0, (0, t.f)(u), p()))
                },
                d = t => {
                    ((0, n.t)(t) === e || a) && t.stopImmediatePropagation()
                },
                f = r => {
                    ((0, n.t)(r) === e || a) && (r.stopImmediatePropagation(), a || (a = !0, (0, t.f)(u), p()))
                };
            o.addEventListener("blur", s, !0), o.addEventListener("focusout", c, !0), o.addEventListener("focusin", f, !0), o.addEventListener("focus", d, !0);
            let p = () => {
                    cancelAnimationFrame(v), o.removeEventListener("blur", s, !0), o.removeEventListener("focusout", c, !0), o.removeEventListener("focusin", f, !0), o.removeEventListener("focus", d, !0), l = !1, a = !1
                },
                v = requestAnimationFrame(p);
            return p
        }, "n", 0, function(e, t) {
            Object.defineProperty(e, "target", {
                value: t
            }), Object.defineProperty(e, "currentTarget", {
                value: t
            })
        }, "f", 0, function(e) {
            let t = (0, u.useRef)({
                isFocused: !1,
                observer: null
            });
            return (0, o.f)(() => {
                let e = t.current;
                return () => {
                    e.observer && (e.observer.disconnect(), e.observer = null)
                }
            }, []), (0, u.useCallback)(r => {
                let i = (0, n.t)(r);
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
                        let e = i === (0, n.z)() ? null : (0, n.z)();
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
    }, 771518, e => {
        var t = e.i(495056);
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

        function l() {
            return !0
        }

        function s(e) {
            return () => {}
        }

        function c() {
            return "function" == typeof t.default.useSyncExternalStore ? t.default.useSyncExternalStore(s, a, l) : (0, t.useContext)(i)
        }
        e.s(["t", 0, c, "k", 0, u])
    }, 617672, e => {
        let t = null;
        e.s(["f", 0, function(e) {
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
    }, 846261, e => {
        var t = e.i(653374);
        let n = "u" > typeof Element && "checkVisibility" in Element.prototype;

        function r(e, i) {
            return n ? e.checkVisibility({
                visibilityProperty: !0
            }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
                let n = (0, t.d)(e);
                if (!(e instanceof n.HTMLElement) && !(e instanceof n.SVGElement)) return !1;
                let {
                    display: r,
                    visibility: i
                } = e.style, o = "none" !== r && "hidden" !== i && "collapse" !== i;
                if (o) {
                    let {
                        getComputedStyle: n
                    } = (0, t.d)(e), {
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
                if (n instanceof(0, t.d)(n).HTMLElement && n.inert) return !0;
                n = n.parentElement
            }
            return !1
        }
        e.s(["x", 0, function(e, t) {
            return e.matches(o) && !a(e) && (t?.skipVisibilityCheck || r(e))
        }, "m", 0, function(e) {
            return e.matches(u) && r(e) && !a(e)
        }], 846261)
    }, 745638, e => {
        var t = e.i(902844);
        e.s(["E", 0, function(e) {
            return "" === e.pointerType && !!e.isTrusted || ((0, t.B)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
        }, "$", 0, function(e) {
            return !(0, t.B)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
        }])
    }, 372072, e => {
        var t = e.i(617672),
            n = e.i(902844),
            r = e.i(495056);
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
                altKey: l,
                shiftKey: s
            } = r;
            (0, n.C)() && window.event?.type?.startsWith("key") && "_blank" === e.target && ((0, n.F)() ? o = !0 : a = !0);
            let c = (0, n.i)() && (0, n.F)() && !(0, n.X)() && 1 ? new KeyboardEvent("keydown", {
                keyIdentifier: "Enter",
                metaKey: o,
                ctrlKey: a,
                altKey: l,
                shiftKey: s
            }) : new MouseEvent("click", {
                metaKey: o,
                ctrlKey: a,
                altKey: l,
                shiftKey: s,
                detail: 1,
                bubbles: !0,
                cancelable: !0
            });
            u.isOpening = i, (0, t.f)(e), e.dispatchEvent(c), u.isOpening = !1
        }
        u.isOpening = !1, e.s(["x", 0, function(e, t, n, r) {
            var i;
            let o;
            !(!t.isNative && e.currentTarget instanceof HTMLAnchorElement) || !e.currentTarget.href || e.isDefaultPrevented() || (i = e.currentTarget, (o = i.getAttribute("target")) && "_self" !== o || i.origin !== location.origin || i.hasAttribute("download") || e.metaKey || e.ctrlKey || e.altKey || e.shiftKey) || !n || (e.preventDefault(), t.open(e.currentTarget, e, n, r))
        }, "v", 0, u, "J", 0, function(e) {
            let t = o().useHref(e?.href ?? ""),
                n = {};
            if (e)
                for (let r of ["href", "target", "rel", "download", "ping", "referrerPolicy"]) r in e && (n[r] = "href" === r ? t : e[r]);
            return n
        }, "U", 0, o])
    }, 902844, e => {
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
            l = r(function() {
                return i() || a()
            }),
            s = r(function() {
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
        e.s(["B", 0, d, "G", 0, l, "o", 0, c, "C", 0, f, "I", 0, a, "X", 0, u, "F", 0, i, "i", 0, s])
    }, 402390, 653374, 347781, e => {
        let t = e => e?.ownerDocument ?? document,
            n = e => e && "window" in e && e.window === e ? e : t(e).defaultView || window;

        function r(e) {
            return null !== e && "object" == typeof e && "nodeType" in e && "number" == typeof e.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e
        }

        function i() {
            return !1
        }
        e.s(["o", 0, t, "d", 0, n, "R", 0, r], 653374), e.s(["f", 0, i], 347781), e.s(["z", 0, (e = document) => {
            if (!i()) return e.activeElement;
            let t = e.activeElement;
            for (; t && "shadowRoot" in t && t.shadowRoot?.activeElement;) t = t.shadowRoot.activeElement;
            return t
        }, "t", 0, function(e) {
            if (i() && e.target instanceof Element && e.target.shadowRoot) {
                if ("composedPath" in e) return e.composedPath()[0] ?? null;
                else if ("composedPath" in e.nativeEvent) return e.nativeEvent.composedPath()[0] ?? null
            }
            return e.target
        }, "J", 0, function(e) {
            if (!e) return !1;
            let t = e.getRootNode(),
                r = n(e);
            if (!(t instanceof r.Document || t instanceof r.ShadowRoot)) return !1;
            let i = t.activeElement;
            return null != i && e.contains(i)
        }, "C", 0, function(e, t) {
            if (!i()) return !!t && !!e && e.contains(t);
            if (!e || !t) return !1;
            let n = t;
            for (; null !== n;) {
                if (n === e) return !0;
                n = "SLOT" === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : r(n) ? n.host : n.parentNode
            }
            return !1
        }], 402390)
    }, 111659, e => {
        var t = e.i(708705),
            n = e.i(495056);
        let r = n.default.useInsertionEffect ?? t.f;
        e.s(["f", 0, function(e) {
            let t = (0, n.useRef)(null);
            return r(() => {
                t.current = e
            }, [e]), (0, n.useCallback)((...e) => {
                let n = t.current;
                return n?.(...e)
            }, [])
        }])
    }, 368099, e => {
        var t = e.i(495056);
        e.s(["f", 0, function() {
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
    }, 708705, e => {
        var t = e.i(495056);
        let n = "u" > typeof document ? t.default.useLayoutEffect : () => {};
        e.s(["f", 0, n])
    }])
})();

//# debugId=a95ddf6d-df34-a954-b2cf-f005514d98a7