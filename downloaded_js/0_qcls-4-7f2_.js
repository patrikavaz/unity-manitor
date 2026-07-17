(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 417158, e => {
    "use strict";
    e.i(467211);
    let t = (0, e.i(999721).createContext)({});
    e.s(["KeyboardContext", 0, t])
}, 243941, 666747, 672451, e => {
    "use strict";
    let t;
    var r = e.i(193777),
        n = e.i(575414),
        s = e.i(776050),
        i = e.i(950011);
    let o = "u" > typeof HTMLElement && "inert" in HTMLElement.prototype;

    function l(e) {
        return "true" === e.dataset.liveAnnouncer || void 0 !== e.dataset.reactAriaTopLayer
    }
    let a = new WeakMap,
        u = [];

    function c(e, t) {
        let c = (0, n.getOwnerWindow)(e?.[0]),
            d = t instanceof c.Element ? {
                root: t
            } : t,
            g = d?.root ?? document.body,
            p = d?.shouldUseInert && o,
            f = new Set(e),
            m = new Set,
            v = (e, t) => {
                p && e instanceof c.HTMLElement ? e.inert = t : t ? e.setAttribute("aria-hidden", "true") : (e.removeAttribute("aria-hidden"), e instanceof c.HTMLElement && (e.inert = !1))
            },
            b = new Set;
        if ((0, i.shadowDOM)())
            for (let t of e) {
                let e = t;
                for (; e && e !== g;) {
                    let t = e.getRootNode();
                    "shadowRoot" in t && b.add(t.shadowRoot), e = t.parentNode
                }
            }
        let y = e => {
                for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) f.add(t);
                let t = e => {
                        if (m.has(e) || f.has(e) || e.parentElement && m.has(e.parentElement) && "row" !== e.parentElement.getAttribute("role")) return NodeFilter.FILTER_REJECT;
                        for (let t of f)
                            if ((0, s.nodeContains)(e, t)) return NodeFilter.FILTER_SKIP;
                        return NodeFilter.FILTER_ACCEPT
                    },
                    i = (0, r.createShadowTreeWalker)((0, n.getOwnerDocument)(e), e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode: t
                    }),
                    o = t(e);
                if (o === NodeFilter.FILTER_ACCEPT && h(e), o !== NodeFilter.FILTER_REJECT) {
                    let e = i.nextNode();
                    for (; null != e;) h(e), e = i.nextNode()
                }
            },
            h = e => {
                let t = a.get(e) ?? 0;
                (p && e instanceof c.HTMLElement ? e.inert : "true" === e.getAttribute("aria-hidden")) && 0 === t || (0 === t && v(e, !0), m.add(e), a.set(e, t + 1))
            };
        u.length && u[u.length - 1].disconnect(), y(g);
        let P = new MutationObserver(e => {
            for (let t of e)
                if ("childList" === t.type) {
                    if (t.target.isConnected && ![...f, ...m].some(e => (0, s.nodeContains)(e, t.target)))
                        for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && l(e) ? f.add(e) : e instanceof Element && y(e);
                    if ((0, i.shadowDOM)()) {
                        for (let e of b)
                            if (!e.isConnected) {
                                P.disconnect();
                                break
                            }
                    }
                }
        });
        P.observe(g, {
            childList: !0,
            subtree: !0
        });
        let E = new Set;
        if ((0, i.shadowDOM)())
            for (let e of b) {
                let t = new MutationObserver(e => {
                    for (let t of e)
                        if ("childList" === t.type) {
                            if (t.target.isConnected && ![...f, ...m].some(e => (0, s.nodeContains)(e, t.target)))
                                for (let e of t.addedNodes)(e instanceof HTMLElement || e instanceof SVGElement) && l(e) ? f.add(e) : e instanceof Element && y(e);
                            if ((0, i.shadowDOM)()) {
                                for (let e of b)
                                    if (!e.isConnected) {
                                        P.disconnect();
                                        break
                                    }
                            }
                        }
                });
                t.observe(e, {
                    childList: !0,
                    subtree: !0
                }), E.add(t)
            }
        let C = {
            visibleNodes: f,
            hiddenNodes: m,
            observe() {
                P.observe(g, {
                    childList: !0,
                    subtree: !0
                })
            },
            disconnect() {
                P.disconnect()
            }
        };
        return u.push(C), () => {
            if (P.disconnect(), (0, i.shadowDOM)())
                for (let e of E) e.disconnect();
            for (let e of m) {
                let t = a.get(e);
                null != t && (1 === t ? (v(e, !1), a.delete(e)) : a.set(e, t - 1))
            }
            C === u[u.length - 1] ? (u.pop(), u.length && u[u.length - 1].observe()) : u.splice(u.indexOf(C), 1)
        }
    }

    function d(e) {
        let t = u[u.length - 1];
        if (t && !t.visibleNodes.has(e)) return t.visibleNodes.add(e), () => {
            t.visibleNodes.delete(e)
        }
    }
    e.s(["ariaHideOutside", 0, c, "keepVisible", 0, d], 666747);
    var g = e.i(879537),
        p = e.i(429305),
        f = e.i(675815),
        m = e.i(768307);
    e.i(621757);
    var v = e.i(600939),
        b = e.i(999721);

    function y(e, t) {
        if (e.button > 0) return !1;
        let r = (0, s.getEventTarget)(e);
        if (r) {
            let e = r.ownerDocument;
            if (!e || !(0, s.nodeContains)(e.documentElement, r) || r.closest("[data-react-aria-top-layer]")) return !1
        }
        return !!t.current && !e.composedPath().includes(t.current)
    }
    let h = [];
    var P = e.i(476090),
        E = e.i(938280),
        C = e.i(843485),
        S = e.i(904960),
        T = e.i(758759),
        M = e.i(185559),
        R = e.i(630877);
    let k = "u" > typeof document && window.visualViewport,
        O = 0;

    function D(e, t, r) {
        let n = e.style[t];
        return e.style[t] = r, () => {
            e.style[t] = n
        }
    }

    function w(e, t, r, n) {
        return e.addEventListener(t, r, n), () => {
            e.removeEventListener(t, r, n)
        }
    }

    function A(e, t) {
        t || !k ? x(e) : k.addEventListener("resize", () => x(e), {
            once: !0
        })
    }

    function x(e) {
        let t = document.scrollingElement || document.documentElement,
            r = e;
        for (; r && r !== t;) {
            let e = (0, C.getScrollParent)(r);
            if (e !== document.documentElement && e !== document.body && e !== r) {
                let t = e.getBoundingClientRect(),
                    n = r.getBoundingClientRect();
                if (n.top < t.top || n.bottom > t.top + r.clientHeight) {
                    let r = t.bottom;
                    k && (r = Math.min(r, k.offsetTop + k.height));
                    let s = n.top - t.top - ((r - t.top) / 2 - n.height / 2);
                    e.scrollTo({
                        top: Math.max(0, Math.min(e.scrollHeight - e.clientHeight, e.scrollTop + s)),
                        behavior: "smooth"
                    })
                }
            }
            r = e.parentElement
        }
    }
    e.s(["usePopover", 0, function(e, r) {
        let {
            triggerRef: i,
            popoverRef: o,
            groupRef: l,
            isNonModal: a,
            isKeyboardDismissDisabled: u,
            shouldCloseOnInteractOutside: k,
            ...x
        } = e, L = "SubmenuTrigger" === x.trigger, {
            overlayProps: F,
            underlayProps: I
        } = function(e, t) {
            let {
                onClose: r,
                shouldCloseOnBlur: i,
                isOpen: o,
                isDismissable: l = !1,
                isKeyboardDismissDisabled: a = !1,
                shouldCloseOnInteractOutside: u
            } = e, c = (0, b.useRef)(void 0);
            (0, b.useEffect)(() => {
                if (o && !h.includes(t)) return h.push(t), () => {
                    let e = h.indexOf(t);
                    e >= 0 && h.splice(e, 1)
                }
            }, [o, t]);
            let d = () => {
                h[h.length - 1] === t && r && r()
            };
            ! function(e) {
                let {
                    ref: t,
                    onInteractOutside: r,
                    isDisabled: s,
                    onInteractOutsideStart: i
                } = e, o = (0, b.useRef)({
                    isPointerDown: !1,
                    ignoreEmulatedMouseEvents: !1
                }), l = (0, v.useEffectEvent)(e => {
                    r && y(e, t) && (i && i(e), o.current.isPointerDown = !0)
                }), a = (0, v.useEffectEvent)(e => {
                    r && r(e)
                });
                (0, b.useEffect)(() => {
                    let e = o.current;
                    if (s) return;
                    let r = t.current,
                        i = (0, n.getOwnerDocument)(r);
                    if ("u" > typeof PointerEvent) {
                        let r = r => {
                            e.isPointerDown && y(r, t) && a(r), e.isPointerDown = !1
                        };
                        return i.addEventListener("pointerdown", l, !0), i.addEventListener("click", r, !0), () => {
                            i.removeEventListener("pointerdown", l, !0), i.removeEventListener("click", r, !0)
                        }
                    }
                }, [t, s])
            }({
                ref: t,
                onInteractOutside: l && o ? e => {
                    (!u || u((0, s.getEventTarget)(e))) && (h[h.length - 1] === t && e.stopPropagation(), c.current === t && d()), c.current = void 0
                } : void 0,
                onInteractOutsideStart: e => {
                    let r = h[h.length - 1];
                    c.current = r, (!u || u((0, s.getEventTarget)(e))) && r === t && e.stopPropagation()
                }
            });
            let {
                focusWithinProps: g
            } = (0, m.useFocusWithin)({
                isDisabled: !i,
                onBlurWithin: e => {
                    !(!e.relatedTarget || (0, f.isElementInChildOfActiveScope)(e.relatedTarget)) && (!u || u(e.relatedTarget)) && r?.()
                }
            });
            return {
                overlayProps: {
                    onKeyDown: e => {
                        "Escape" !== e.key || a || e.nativeEvent.isComposing || (e.stopPropagation(), e.preventDefault(), d())
                    },
                    ...g
                },
                underlayProps: {}
            }
        }({
            isOpen: r.isOpen,
            onClose: r.close,
            shouldCloseOnBlur: !0,
            isDismissable: !a || L,
            isKeyboardDismissDisabled: u,
            shouldCloseOnInteractOutside: k
        }, l ?? o), {
            overlayProps: N,
            arrowProps: K,
            placement: H,
            triggerAnchorPoint: U
        } = (0, g.useOverlayPosition)({
            ...x,
            targetRef: i,
            overlayRef: o,
            isOpen: r.isOpen,
            onClose: a && !L ? r.close : null
        });
        return ! function(e = {}) {
            let {
                isDisabled: r
            } = e;
            (0, M.useLayoutEffect)(() => {
                if (!r) {
                    let e, r, n, i, o, l, a, u;
                    return 1 == ++O && (t = (0, S.isIOS)() ? (r = D(document.documentElement, "overflow", "hidden"), n = !1, i = document.createElement("style"), (o = (0, E.getNonce)()) && (i.nonce = o), i.textContent = `
@layer {
  * {
    overscroll-behavior: contain;
  }
}`.trim(), document.head.prepend(i), l = HTMLElement.prototype.focus, HTMLElement.prototype.focus = function(e) {
                        let t = (0, s.getActiveElement)(),
                            r = null != t && (0, R.willOpenKeyboard)(t);
                        l.call(this, {
                            ...e,
                            preventScroll: !0
                        }), e && e.preventScroll || A(this, r)
                    }, a = (0, P.chain)(w(document, "touchstart", t => {
                        let r = (0, s.getEventTarget)(t);
                        e = (0, T.isScrollable)(r) ? r : (0, C.getScrollParent)(r, !0), n = !1;
                        let i = r.ownerDocument.defaultView.getSelection();
                        i && !i.isCollapsed && i.containsNode(r, !0) && (n = !0), t.composedPath().some(e => e instanceof HTMLInputElement && "range" === e.type) && (n = !0), "selectionStart" in r && "selectionEnd" in r && r.selectionStart < r.selectionEnd && r.ownerDocument.activeElement === r && (n = !0)
                    }, {
                        passive: !1,
                        capture: !0
                    }), w(document, "touchmove", t => {
                        if (2 !== t.touches.length && !n) {
                            if (!e || e === document.documentElement || e === document.body) return void t.preventDefault();
                            e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault()
                        }
                    }, {
                        passive: !1,
                        capture: !0
                    }), w(document, "blur", e => {
                        let t = (0, s.getEventTarget)(e),
                            r = e.relatedTarget;
                        if (r && (0, R.willOpenKeyboard)(r)) r.focus({
                            preventScroll: !0
                        }), A(r, (0, R.willOpenKeyboard)(t));
                        else if (!r) {
                            let e = t.parentElement?.closest("[tabindex]");
                            e?.focus({
                                preventScroll: !0
                            })
                        }
                    }, !0)), () => {
                        r(), a(), i.remove(), HTMLElement.prototype.focus = l
                    }) : (u = window.innerWidth - document.documentElement.clientWidth, (0, P.chain)(u > 0 && ("scrollbarGutter" in document.documentElement.style ? D(document.documentElement, "scrollbarGutter", "stable") : D(document.documentElement, "paddingRight", `${u}px`)), D(document.documentElement, "overflow", "hidden")))), () => {
                        0 == --O && t()
                    }
                }
            }, [r])
        }({
            isDisabled: a || !r.isOpen
        }), (0, b.useEffect)(() => {
            if (r.isOpen && o.current)
                if (a) return d(l?.current ?? o.current);
                else return c([l?.current ?? o.current], {
                    shouldUseInert: !0
                })
        }, [a, r.isOpen, o, l]), {
            popoverProps: (0, p.mergeProps)(F, N),
            arrowProps: K,
            underlayProps: I,
            placement: H,
            triggerAnchorPoint: U
        }
    }], 243941);
    var L = {};
    L = {
        "ar-AE": {
            dismiss: "تجاهل"
        },
        "bg-BG": {
            dismiss: "Отхвърляне"
        },
        "cs-CZ": {
            dismiss: "Odstranit"
        },
        "da-DK": {
            dismiss: "Luk"
        },
        "de-DE": {
            dismiss: "Schließen"
        },
        "el-GR": {
            dismiss: "Απόρριψη"
        },
        "en-US": {
            dismiss: "Dismiss"
        },
        "es-ES": {
            dismiss: "Descartar"
        },
        "et-EE": {
            dismiss: "Lõpeta"
        },
        "fi-FI": {
            dismiss: "Hylkää"
        },
        "fr-FR": {
            dismiss: "Rejeter"
        },
        "he-IL": {
            dismiss: "התעלם"
        },
        "hr-HR": {
            dismiss: "Odbaci"
        },
        "hu-HU": {
            dismiss: "Elutasítás"
        },
        "it-IT": {
            dismiss: "Ignora"
        },
        "ja-JP": {
            dismiss: "閉じる"
        },
        "ko-KR": {
            dismiss: "무시"
        },
        "lt-LT": {
            dismiss: "Atmesti"
        },
        "lv-LV": {
            dismiss: "Nerādīt"
        },
        "nb-NO": {
            dismiss: "Lukk"
        },
        "nl-NL": {
            dismiss: "Negeren"
        },
        "pl-PL": {
            dismiss: "Zignoruj"
        },
        "pt-BR": {
            dismiss: "Descartar"
        },
        "pt-PT": {
            dismiss: "Dispensar"
        },
        "ro-RO": {
            dismiss: "Revocare"
        },
        "ru-RU": {
            dismiss: "Пропустить"
        },
        "sk-SK": {
            dismiss: "Zrušiť"
        },
        "sl-SI": {
            dismiss: "Opusti"
        },
        "sr-SP": {
            dismiss: "Odbaci"
        },
        "sv-SE": {
            dismiss: "Avvisa"
        },
        "tr-TR": {
            dismiss: "Kapat"
        },
        "uk-UA": {
            dismiss: "Скасувати"
        },
        "zh-CN": {
            dismiss: "取消"
        },
        "zh-TW": {
            dismiss: "關閉"
        }
    };
    var F = e.i(270170),
        I = e.i(501427),
        N = e.i(458229);
    e.s(["DismissButton", 0, function(e) {
        var t;
        let {
            onDismiss: r,
            ...n
        } = e, s = (0, I.useLocalizedStringFormatter)((t = L) && t.__esModule ? t.default : t, "@react-aria/overlays"), i = (0, F.useLabels)(n, s.format("dismiss"));
        return b.default.createElement(N.VisuallyHidden, null, b.default.createElement("button", {
            ...i,
            tabIndex: -1,
            onClick: () => {
                r && r()
            },
            style: {
                width: 1,
                height: 1
            }
        }))
    }], 672451)
}, 286733, e => {
    "use strict";
    var t = e.i(429305),
        r = e.i(58824),
        n = e.i(838031),
        s = e.i(996980),
        i = e.i(999721);
    let o = i.default.forwardRef(({
        children: e,
        ...o
    }, l) => {
        let a = (0, i.useRef)(!1),
            u = (0, i.useContext)(r.PressResponderContext),
            c = (0, t.mergeProps)(u || {}, {
                ...o,
                register() {
                    a.current = !0, u && u.register()
                }
            });
        return c.ref = (0, n.useObjectRef)(l || u?.ref), (0, s.useSyncRef)(u, c.ref), (0, i.useEffect)(() => {
            a.current || (a.current = !0)
        }, []), i.default.createElement(r.PressResponderContext.Provider, {
            value: c
        }, e)
    });
    e.s(["ClearPressResponder", 0, function({
        children: e
    }) {
        let t = (0, i.useMemo)(() => ({
            register: () => {}
        }), []);
        return i.default.createElement(r.PressResponderContext.Provider, {
            value: t
        }, e)
    }, "PressResponder", 0, o])
}, 513976, e => {
    "use strict";
    var t = e.i(286733),
        r = e.i(675815),
        n = e.i(726103),
        s = e.i(185559),
        i = e.i(852120),
        o = e.i(999721),
        l = e.i(795816);
    let a = o.default.createContext(null);
    e.s(["Overlay", 0, function(e) {
        let s = (0, n.useIsSSR)(),
            {
                portalContainer: u = s ? null : document.body,
                isExiting: c
            } = e,
            [d, g] = (0, o.useState)(!1),
            p = (0, o.useMemo)(() => ({
                contain: d,
                setContain: g
            }), [d, g]),
            {
                getContainer: f
            } = (0, i.useUNSAFE_PortalContext)();
        if (!e.portalContainer && f && (u = f()), !u) return null;
        let m = e.children;
        return e.disableFocusManagement || (m = o.default.createElement(r.FocusScope, {
            restoreFocus: !0,
            contain: (e.shouldContainFocus || d) && !c
        }, m)), m = o.default.createElement(a.Provider, {
            value: p
        }, o.default.createElement(t.ClearPressResponder, null, m)), l.default.createPortal(m, u)
    }, "useOverlayFocusContain", 0, function() {
        let e = (0, o.useContext)(a),
            t = e?.setContain;
        (0, s.useLayoutEffect)(() => {
            t?.(!0)
        }, [t])
    }])
}, 618508, e => {
    "use strict";
    e.s(["Popover", () => E, "PopoverContext", () => h]);
    var t = e.i(467211),
        r = e.i(830146),
        n = e.i(279079),
        s = e.i(243941),
        i = e.i(672451),
        o = e.i(513976),
        l = e.i(679933),
        a = e.i(799163),
        u = e.i(816862),
        c = e.i(776050),
        d = e.i(429305),
        g = e.i(512985),
        p = e.i(999721),
        f = e.i(863304),
        m = e.i(870053),
        v = e.i(185559),
        b = e.i(876728),
        y = e.i(138381);
    let h = (0, p.createContext)(null),
        P = (0, p.createContext)(null),
        E = (0, p.forwardRef)(function(e, r) {
            [e, r] = (0, t.useContextProps)(e, r, h);
            let s = (0, p.useContext)(n.OverlayTriggerStateContext),
                i = (0, g.useOverlayTriggerState)(e),
                o = null == e.isOpen && null == e.defaultOpen && s ? s : i,
                l = (0, f.useExitAnimation)(r, o.isOpen) || e.isExiting || !1,
                a = (0, m.useIsHidden)(),
                {
                    direction: u
                } = (0, b.useLocale)();
            if (a) {
                let t = e.children;
                return "function" == typeof t && (t = t({
                    trigger: e.trigger || null,
                    placement: "bottom",
                    isEntering: !1,
                    isExiting: !1,
                    defaultChildren: null
                })), p.default.createElement(p.default.Fragment, null, t)
            }
            return !o || o.isOpen || l ? p.default.createElement(C, {
                ...e,
                triggerRef: e.triggerRef,
                state: o,
                popoverRef: r,
                isExiting: l,
                dir: u
            }) : null
        });

    function C({
        state: e,
        isExiting: n,
        UNSTABLE_portalContainer: g,
        clearContexts: m,
        ...b
    }) {
        let h = (0, p.useRef)(null),
            E = (0, p.useRef)(null),
            S = (0, p.useContext)(P),
            T = S && "SubmenuTrigger" === b.trigger,
            {
                popoverProps: M,
                underlayProps: R,
                arrowProps: k,
                placement: O,
                triggerAnchorPoint: D
            } = (0, s.usePopover)({
                ...b,
                offset: b.offset ?? 8,
                arrowRef: h,
                groupRef: T ? S : E
            }, e),
            w = b.popoverRef,
            A = (0, f.useEnterAnimation)(w, !!O) || b.isEntering || !1,
            x = (0, t.useRenderProps)({
                ...b,
                defaultClassName: "react-aria-Popover",
                values: {
                    trigger: b.trigger || null,
                    placement: O,
                    isEntering: A,
                    isExiting: n
                }
            }),
            L = !b.isNonModal || "SubmenuTrigger" === b.trigger,
            [F, I] = (0, p.useState)(!1);
        (0, v.useLayoutEffect)(() => {
            w.current && I(L && !w.current.querySelector("[role=dialog]"))
        }, [w, L]), (0, p.useEffect)(() => {
            F && ("SubmenuTrigger" !== b.trigger || "pointer" !== (0, u.getInteractionModality)()) && w.current && !(0, c.isFocusWithin)(w.current) && (0, a.focusSafely)(w.current)
        }, [F, w, b.trigger]);
        let N = (0, p.useMemo)(() => {
                let e = x.children;
                if (m)
                    for (let t of m) e = p.default.createElement(t.Provider, {
                        value: null
                    }, e);
                return e
            }, [x.children, m]),
            [K, H] = (0, p.useState)(null),
            U = (0, p.useCallback)(() => {
                b.triggerRef.current && H(b.triggerRef.current.getBoundingClientRect().width + "px")
            }, [b.triggerRef]);
        (0, v.useLayoutEffect)(U, [U]), (0, y.useResizeObserver)({
            ref: x.style?.["--trigger-width"] ? void 0 : b.triggerRef,
            onResize: U
        });
        let B = {
                ...M.style,
                "--trigger-anchor-point": D ? `${D.x}px ${D.y}px` : void 0,
                ...x.style,
                "--trigger-width": x.style?.["--trigger-width"] || K
            },
            z = p.default.createElement(t.dom.div, {
                ...(0, d.mergeProps)((0, l.filterDOMProps)(b, {
                    global: !0
                }), M),
                ...x,
                role: F ? "dialog" : void 0,
                tabIndex: F ? -1 : void 0,
                "aria-label": b["aria-label"],
                "aria-labelledby": b["aria-labelledby"],
                ref: w,
                slot: b.slot || void 0,
                style: B,
                dir: b.dir,
                "data-trigger": b.trigger,
                "data-placement": O,
                "data-entering": A || void 0,
                "data-exiting": n || void 0
            }, !b.isNonModal && p.default.createElement(i.DismissButton, {
                onDismiss: e.close
            }), p.default.createElement(r.OverlayArrowContext.Provider, {
                value: {
                    ...k,
                    placement: O,
                    ref: h
                }
            }, N), p.default.createElement(i.DismissButton, {
                onDismiss: e.close
            }));
        return T ? p.default.createElement(o.Overlay, {
            ...b,
            shouldContainFocus: F,
            isExiting: n,
            portalContainer: g ?? S?.current ?? void 0
        }, z) : p.default.createElement(o.Overlay, {
            ...b,
            shouldContainFocus: F,
            isExiting: n,
            portalContainer: g
        }, !b.isNonModal && e.isOpen && p.default.createElement("div", {
            "data-testid": "underlay",
            ...R,
            style: {
                position: "fixed",
                inset: 0
            }
        }), p.default.createElement("div", {
            ref: E,
            style: {
                display: "contents"
            }
        }, p.default.createElement(P.Provider, {
            value: E
        }, z)))
    }
}, 391330, e => {
    "use strict";
    var t = e.i(679933),
        r = e.i(799163),
        n = e.i(776050),
        s = e.i(513976),
        i = e.i(823512),
        o = e.i(999721);
    e.s(["useDialog", 0, function(e, l) {
        let {
            role: a = "dialog"
        } = e, u = (0, i.useSlotId)();
        u = e["aria-label"] ? void 0 : u;
        let c = (0, o.useRef)(!1);
        return (0, o.useEffect)(() => {
            if (l.current && !(0, n.isFocusWithin)(l.current)) {
                (0, r.focusSafely)(l.current);
                let e = setTimeout(() => {
                    ((0, n.getActiveElement)() === l.current || (0, n.getActiveElement)() === document.body) && (c.current = !0, l.current && (l.current.blur(), (0, r.focusSafely)(l.current)), c.current = !1)
                }, 500);
                return () => {
                    clearTimeout(e)
                }
            }
        }, [l]), (0, s.useOverlayFocusContain)(), (0, o.useRef)(!1), (0, o.useEffect)(() => {}), {
            dialogProps: {
                ...(0, t.filterDOMProps)(e, {
                    labelable: !0
                }),
                role: a,
                tabIndex: -1,
                "aria-labelledby": e["aria-labelledby"] || u,
                onBlur: e => {
                    c.current && e.stopPropagation()
                }
            },
            titleProps: {
                id: u
            }
        }
    }])
}, 662255, e => {
    "use strict";
    var t = e.i(512985),
        r = e.i(999721);
    e.s(["useMenuTriggerState", 0, function(e) {
        let n = (0, t.useOverlayTriggerState)(e),
            [s, i] = (0, r.useState)(null),
            [o, l] = (0, r.useState)([]);
        return {
            focusStrategy: s,
            ...n,
            open(e = null) {
                i(e), n.open()
            },
            toggle(e = null) {
                i(e), n.toggle()
            },
            close() {
                l([]), n.close()
            },
            expandedKeysStack: o,
            openSubmenu: (e, t) => {
                l(r => t > r.length ? r : [...r.slice(0, t), e])
            },
            closeSubmenu: (e, t) => {
                l(r => r[t] === e ? r.slice(0, t) : r)
            }
        }
    }])
}, 468689, e => {
    "use strict";
    var t = e.i(101933),
        r = e.i(823512),
        n = e.i(999721);
    e.s(["useOverlayTrigger", 0, function(e, s, i) {
        let o, {
                type: l
            } = e,
            {
                isOpen: a
            } = s;
        (0, n.useEffect)(() => {
            i && i.current && t.onCloseMap.set(i.current, s.close)
        }), "menu" === l ? o = !0 : "listbox" === l && (o = "listbox");
        let u = (0, r.useId)();
        return {
            triggerProps: {
                "aria-haspopup": o,
                "aria-expanded": a,
                "aria-controls": a ? u : void 0,
                onPress: s.toggle
            },
            overlayProps: {
                id: u
            }
        }
    }])
}, 279079, e => {
    "use strict";
    e.s(["Dialog", () => b, "DialogTrigger", () => v, "OverlayTriggerStateContext", () => m]);
    var t = e.i(27666),
        r = e.i(467211),
        n = e.i(885609),
        s = e.i(618508),
        i = e.i(138065),
        o = e.i(391330),
        l = e.i(679933),
        a = e.i(429305),
        u = e.i(286733),
        c = e.i(999721),
        d = e.i(823512),
        g = e.i(662255),
        p = e.i(468689);
    let f = (0, c.createContext)(null),
        m = (0, c.createContext)(null);

    function v(e) {
        let t = (0, g.useMenuTriggerState)(e),
            n = (0, c.useRef)(null),
            {
                triggerProps: o,
                overlayProps: l
            } = (0, p.useOverlayTrigger)({
                type: "dialog"
            }, t, n);
        return o.id = (0, d.useId)(), l["aria-labelledby"] = o.id, c.default.createElement(r.Provider, {
            values: [
                [m, t],
                [i.RootMenuTriggerStateContext, t],
                [f, l],
                [s.PopoverContext, {
                    trigger: "DialogTrigger",
                    triggerRef: n,
                    "aria-labelledby": l["aria-labelledby"]
                }]
            ]
        }, c.default.createElement(u.PressResponder, {
            ...o,
            ref: n,
            isPressed: t.isOpen
        }, e.children))
    }
    let b = (0, c.forwardRef)(function(e, s) {
        let i = e["aria-labelledby"];
        [e, s] = (0, r.useContextProps)(e, s, f);
        let {
            dialogProps: u,
            titleProps: d
        } = (0, o.useDialog)({
            ...e,
            "aria-labelledby": i
        }, s), g = (0, c.useContext)(m);
        u["aria-label"] || u["aria-labelledby"] || e["aria-labelledby"] && (u["aria-labelledby"] = e["aria-labelledby"]);
        let p = (0, r.useRenderProps)({
                defaultClassName: "react-aria-Dialog",
                className: e.className,
                style: e.style,
                children: e.children,
                values: {
                    close: g?.close || (() => {})
                }
            }),
            v = (0, l.filterDOMProps)(e, {
                global: !0
            });
        return c.default.createElement(r.dom.section, {
            ...(0, a.mergeProps)(v, p, u),
            render: e.render,
            ref: s,
            slot: e.slot || void 0
        }, c.default.createElement(r.Provider, {
            values: [
                [n.HeadingContext, {
                    slots: {
                        [r.DEFAULT_SLOT]: {},
                        title: {
                            ...d,
                            level: 2
                        }
                    }
                }],
                [t.ButtonContext, {
                    slots: {
                        [r.DEFAULT_SLOT]: {},
                        close: {
                            onPress: () => g?.close()
                        }
                    }
                }]
            ]
        }, p.children))
    })
}, 667304, e => {
    "use strict";
    var t = {};
    t = {
        "ar-AE": {
            longPressMessage: "اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة"
        },
        "bg-BG": {
            longPressMessage: "Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто"
        },
        "cs-CZ": {
            longPressMessage: "Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku"
        },
        "da-DK": {
            longPressMessage: "Langt tryk eller tryk på Alt + pil ned for at åbne menuen"
        },
        "de-DE": {
            longPressMessage: "Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen"
        },
        "el-GR": {
            longPressMessage: "Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού"
        },
        "en-US": {
            longPressMessage: "Long press or press Alt + ArrowDown to open menu"
        },
        "es-ES": {
            longPressMessage: "Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú"
        },
        "et-EE": {
            longPressMessage: "Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool"
        },
        "fi-FI": {
            longPressMessage: "Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli"
        },
        "fr-FR": {
            longPressMessage: "Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu."
        },
        "he-IL": {
            longPressMessage: "לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט"
        },
        "hr-HR": {
            longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika"
        },
        "hu-HU": {
            longPressMessage: "Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához"
        },
        "it-IT": {
            longPressMessage: "Premi a lungo o premi Alt + Freccia giù per aprire il menu"
        },
        "ja-JP": {
            longPressMessage: "長押しまたは Alt+下矢印キーでメニューを開く"
        },
        "ko-KR": {
            longPressMessage: "길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기"
        },
        "lt-LT": {
            longPressMessage: "Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“."
        },
        "lv-LV": {
            longPressMessage: "Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa"
        },
        "nb-NO": {
            longPressMessage: "Langt trykk eller trykk Alt + PilNed for å åpne menyen"
        },
        "nl-NL": {
            longPressMessage: "Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen"
        },
        "pl-PL": {
            longPressMessage: "Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu"
        },
        "pt-BR": {
            longPressMessage: "Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu"
        },
        "pt-PT": {
            longPressMessage: "Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu"
        },
        "ro-RO": {
            longPressMessage: "Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul"
        },
        "ru-RU": {
            longPressMessage: "Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню"
        },
        "sk-SK": {
            longPressMessage: "Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol"
        },
        "sl-SI": {
            longPressMessage: "Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol"
        },
        "sr-SP": {
            longPressMessage: "Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni"
        },
        "sv-SE": {
            longPressMessage: "Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn"
        },
        "tr-TR": {
            longPressMessage: "Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın"
        },
        "uk-UA": {
            longPressMessage: "Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню"
        },
        "zh-CN": {
            longPressMessage: "长按或按 Alt + 向下方向键以打开菜单"
        },
        "zh-TW": {
            longPressMessage: "長按或按 Alt+向下鍵以開啟功能表"
        }
    }, e.s(["default", 0, t], 667304)
}, 629080, 162336, 647354, 979235, 650868, e => {
    "use strict";
    var t = e.i(259457),
        r = e.i(667304),
        n = e.i(823512),
        s = e.i(501427),
        i = e.i(720728),
        o = e.i(468689);
    e.s(["useMenuTrigger", 0, function(e, l, a) {
        var u;
        let {
            type: c = "menu",
            isDisabled: d,
            trigger: g = "press"
        } = e, p = (0, n.useId)(), {
            triggerProps: f,
            overlayProps: m
        } = (0, o.useOverlayTrigger)({
            type: c
        }, l, a), v = (0, s.useLocalizedStringFormatter)((u = r.default) && u.__esModule ? u.default : u, "@react-aria/menu"), {
            longPressProps: b
        } = (0, i.useLongPress)({
            isDisabled: d || "longPress" !== g,
            accessibilityDescription: v.format("longPressMessage"),
            onLongPressStart() {
                l.close()
            },
            onLongPress() {
                l.open("first")
            }
        });
        return delete f.onPress, {
            menuTriggerProps: {
                ...f,
                ..."press" === g ? {
                    preventFocusOnPress: !0,
                    onPressStart(e) {
                        "touch" === e.pointerType || "keyboard" === e.pointerType || d || ((0, t.focusWithoutScrolling)(e.target), l.open("virtual" === e.pointerType ? "first" : null))
                    },
                    onPress(e) {
                        "touch" !== e.pointerType || d || ((0, t.focusWithoutScrolling)(e.target), l.toggle())
                    }
                } : b,
                id: p,
                onKeyDown: e => {
                    if (!d && ("longPress" !== g || e.altKey) && a && a.current) switch (e.key) {
                        case "Enter":
                        case " ":
                            if ("longPress" === g || e.isDefaultPrevented()) return;
                        case "ArrowDown":
                            "continuePropagation" in e || e.stopPropagation(), e.preventDefault(), l.toggle("first");
                            break;
                        case "ArrowUp":
                            "continuePropagation" in e || e.stopPropagation(), e.preventDefault(), l.toggle("last");
                            break;
                        default:
                            "continuePropagation" in e && e.continuePropagation()
                    }
                }
            },
            menuProps: {
                ...m,
                "aria-labelledby": p,
                autoFocus: l.focusStrategy || !0,
                onClose: l.close
            }
        }
    }], 629080);
    var l = e.i(776050),
        a = e.i(964059),
        u = e.i(185559),
        c = e.i(876728);
    e.i(621757);
    var d = e.i(600939),
        g = e.i(816862),
        p = e.i(138381),
        f = e.i(999721);
    let m = Math.PI / 12;
    e.s(["useSubmenuTrigger", 0, function(e, r, s) {
        let {
            parentMenuRef: i,
            submenuRef: o,
            type: v = "menu",
            isDisabled: b,
            delay: y = 200,
            shouldUseVirtualFocus: h
        } = e, P = (0, n.useId)(), E = (0, n.useId)(), {
            direction: C
        } = (0, c.useLocale)(), S = (0, f.useRef)(void 0), T = (0, f.useCallback)(() => {
            S.current && (clearTimeout(S.current), S.current = void 0)
        }, [S]), M = (0, f.useCallback)(e => {
            T(), r.open(e)
        }, [r, T]), R = (0, f.useCallback)(() => {
            T(), r.close()
        }, [r, T]);
        (0, u.useLayoutEffect)(() => () => {
            T()
        }, [T]);
        let k = {
            id: E,
            "aria-labelledby": P,
            submenuLevel: r.submenuLevel,
            ..."menu" === v && {
                onClose: r.closeAll,
                autoFocus: r.focusStrategy ?? void 0,
                onKeyDown: e => {
                    if ((0, l.isFocusWithin)(e.currentTarget)) switch (e.key) {
                        case "ArrowLeft":
                            "ltr" === C && (0, l.nodeContains)(e.currentTarget, (0, l.getEventTarget)(e)) && (e.preventDefault(), e.stopPropagation(), R(), !h && s.current && (0, t.focusWithoutScrolling)(s.current));
                            break;
                        case "ArrowRight":
                            "rtl" === C && (0, l.nodeContains)(e.currentTarget, (0, l.getEventTarget)(e)) && (e.preventDefault(), e.stopPropagation(), R(), !h && s.current && (0, t.focusWithoutScrolling)(s.current));
                            break;
                        case "Escape":
                            (0, l.nodeContains)(o.current, (0, l.getEventTarget)(e)) && (e.stopPropagation(), R(), !h && s.current && (0, t.focusWithoutScrolling)(s.current))
                    }
                }
            }
        };
        return (0, a.useEvent)(i, "focusin", e => {
            r.isOpen && (0, l.nodeContains)(i.current, (0, l.getEventTarget)(e)) && (0, l.getEventTarget)(e) !== s.current && R()
        }), ! function(e) {
            let {
                menuRef: t,
                submenuRef: r,
                isOpen: n,
                isDisabled: s
            } = e, i = (0, f.useRef)(void 0), o = (0, f.useRef)(void 0), a = (0, f.useRef)(0), c = (0, f.useRef)(void 0), v = (0, f.useRef)(void 0), b = (0, f.useRef)(void 0), y = (0, f.useRef)(2), [h, P] = (0, f.useState)(!1);
            (0, p.useResizeObserver)({
                ref: n ? r : void 0,
                onResize: () => {
                    r.current && (o.current = r.current.getBoundingClientRect(), b.current = void 0)
                }
            });
            let E = () => {
                    P(!1), y.current = 2, i.current = void 0
                },
                C = (0, g.useInteractionModality)(),
                S = (0, d.useEffectEvent)(e => {
                    h && e.preventDefault()
                });
            (0, f.useEffect)(() => {
                h && t.current ? t.current.style.pointerEvents = "none" : t.current.style.pointerEvents = ""
            }, [t, h]), (0, u.useLayoutEffect)(() => {
                let e = r.current,
                    u = t.current;
                if (s || !e || !n || "pointer" !== C || !u) return void E();
                o.current = e.getBoundingClientRect();
                let d = e => {
                    if ("touch" === e.pointerType || "pen" === e.pointerType) return;
                    let t = Date.now();
                    if (t - a.current < 50) return;
                    clearTimeout(c.current), clearTimeout(v.current);
                    let {
                        clientX: r,
                        clientY: n
                    } = e;
                    if (!i.current) {
                        i.current = {
                            x: r,
                            y: n
                        };
                        return
                    }
                    if (!o.current) return;
                    if (b.current || (b.current = r > o.current.right ? "left" : "right"), r < u.getBoundingClientRect().left || r > u.getBoundingClientRect().right || n < u.getBoundingClientRect().top || n > u.getBoundingClientRect().bottom) return void E();
                    let s = i.current.x,
                        d = i.current.y,
                        g = "right" === b.current ? o.current.left - s : s - o.current.right,
                        p = Math.atan2(d - o.current.top, g) + m,
                        f = Math.atan2(d - o.current.bottom, g) - m,
                        h = Math.atan2(d - n, "left" === b.current ? -(r - s) : r - s),
                        C = h < p && h > f;
                    y.current = C ? Math.min(y.current + 1, 2) : Math.max(y.current - 1, 0), y.current >= 2 ? P(!0) : P(!1), a.current = t, i.current = {
                        x: r,
                        y: n
                    }, C && (c.current = setTimeout(() => {
                        E(), v.current = setTimeout(() => {
                            let e = document.elementFromPoint(r, n);
                            e && (0, l.nodeContains)(u, e) && e.dispatchEvent(new PointerEvent("pointerover", {
                                bubbles: !0,
                                cancelable: !0
                            }))
                        }, 100)
                    }, 1e3))
                };
                return window.addEventListener("pointermove", d), window.addEventListener("pointerdown", S, !0), () => {
                    window.removeEventListener("pointermove", d), window.removeEventListener("pointerdown", S, !0), clearTimeout(c.current), clearTimeout(v.current), y.current = 2
                }
            }, [s, n, t, C, P, r])
        }({
            menuRef: i,
            submenuRef: o,
            isOpen: r.isOpen,
            isDisabled: b
        }), {
            submenuTriggerProps: {
                id: P,
                "aria-controls": r.isOpen ? E : void 0,
                "aria-haspopup": b ? void 0 : v,
                "aria-expanded": r.isOpen ? "true" : "false",
                onPressStart: e => {
                    b || "virtual" !== e.pointerType && "keyboard" !== e.pointerType || M("first")
                },
                onPress: e => {
                    b || "touch" !== e.pointerType && "mouse" !== e.pointerType || M()
                },
                onHoverChange: e => {
                    !b && (e && !r.isOpen ? S.current || (S.current = setTimeout(() => {
                        M()
                    }, y)) : e || T())
                },
                onKeyDown: e => {
                    switch (e.key) {
                        case "ArrowRight":
                            !b && ("ltr" === C ? (e.preventDefault(), r.isOpen || M("first"), "menu" === v && o?.current && (0, l.getActiveElement)() === s?.current && (0, t.focusWithoutScrolling)(o.current)) : r.isOpen ? R() : e.continuePropagation());
                            break;
                        case "ArrowLeft":
                            !b && ("rtl" === C ? (e.preventDefault(), r.isOpen || M("first"), "menu" === v && o?.current && (0, l.getActiveElement)() === s?.current && (0, t.focusWithoutScrolling)(o.current)) : r.isOpen ? R() : e.continuePropagation());
                            break;
                        default:
                            e.continuePropagation()
                    }
                },
                isOpen: r.isOpen
            },
            submenuProps: k,
            popoverProps: {
                isNonModal: !0,
                shouldCloseOnInteractOutside: e => e !== s.current
            }
        }
    }], 162336);
    var v = e.i(679933);
    let b = new WeakMap;
    var y = e.i(429305),
        h = e.i(493244);
    e.s(["useMenu", 0, function(e, t, r) {
        let {
            shouldFocusWrap: n = !0,
            onKeyDown: s,
            onKeyUp: i,
            ...o
        } = e, l = (0, v.filterDOMProps)(e, {
            labelable: !0
        }), {
            listProps: a
        } = (0, h.useSelectableList)({
            ...o,
            ref: r,
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            shouldFocusWrap: n,
            linkBehavior: "override"
        });
        return b.set(t, {
            onClose: e.onClose,
            onAction: e.onAction,
            shouldUseVirtualFocus: e.shouldUseVirtualFocus
        }), {
            menuProps: (0, y.mergeProps)(l, {
                onKeyDown: s,
                onKeyUp: i
            }, {
                role: "menu",
                ...a,
                onKeyDown: t => {
                    ("Escape" !== t.key || e.shouldUseVirtualFocus) && a.onKeyDown?.(t)
                }
            })
        }
    }], 647354), e.s(["useMenuSection", 0, function(e) {
        let {
            heading: t,
            "aria-label": r
        } = e, s = (0, n.useId)();
        return {
            itemProps: {
                role: "presentation"
            },
            headingProps: t ? {
                id: s,
                role: "presentation"
            } : {},
            groupProps: {
                role: "group",
                "aria-label": r,
                "aria-labelledby": t ? s : void 0
            }
        }
    }], 979235);
    var P = e.i(97584),
        E = e.i(513485),
        C = e.i(355770),
        S = e.i(290005),
        T = e.i(629959),
        M = e.i(515715),
        R = e.i(511607);
    e.s(["useMenuItem", 0, function(e, t, r) {
        let {
            id: s,
            key: i,
            closeOnSelect: o,
            shouldCloseOnSelect: a,
            isVirtualized: u,
            "aria-haspopup": c,
            onPressStart: d,
            onPressUp: p,
            onPress: m,
            onPressChange: h,
            onPressEnd: k,
            onClick: O,
            onHoverStart: D,
            onHoverChange: w,
            onHoverEnd: A,
            onKeyDown: x,
            onKeyUp: L,
            onFocus: F,
            onFocusChange: I,
            onBlur: N,
            selectionManager: K = t.selectionManager
        } = e, H = !!c, U = H && "true" === e["aria-expanded"], B = e.isDisabled ?? K.isDisabled(i), z = e.isSelected ?? K.isSelected(i), W = b.get(t), j = t.collection.getItem(i), V = e.onClose || W.onClose, _ = (0, P.useRouter)(), G = "menuitem";
        H || ("single" === K.selectionMode ? G = "menuitemradio" : "multiple" === K.selectionMode && (G = "menuitemcheckbox"));
        let Z = (0, n.useSlotId)(),
            J = (0, n.useSlotId)(),
            $ = (0, n.useSlotId)(),
            q = {
                id: s,
                "aria-disabled": B || void 0,
                role: G,
                "aria-label": e["aria-label"],
                "aria-labelledby": Z,
                "aria-describedby": [e["aria-describedby"], J, $].filter(Boolean).join(" ") || void 0,
                "aria-controls": e["aria-controls"],
                "aria-haspopup": c,
                "aria-expanded": e["aria-expanded"]
            };
        if ("none" === K.selectionMode || H || (q["aria-checked"] = z), u) {
            let e = Number(j?.index);
            q["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, q["aria-setsize"] = (0, R.getItemCount)(t.collection)
        }
        let X = (0, f.useRef)(!1),
            Y = (0, f.useRef)(null),
            {
                itemProps: Q,
                isFocused: ee
            } = (0, M.useSelectableItem)({
                id: s,
                selectionManager: K,
                key: i,
                ref: r,
                shouldSelectOnPressUp: !0,
                allowsDifferentPressOrigin: !0,
                linkBehavior: "none",
                shouldUseVirtualFocus: W.shouldUseVirtualFocus
            }),
            {
                pressProps: et,
                isPressed: er
            } = (0, T.usePress)({
                onPressStart: d,
                onPress: m,
                onPressUp: e => {
                    "keyboard" !== e.pointerType && (Y.current = {
                        pointerType: e.pointerType
                    }), "mouse" !== e.pointerType || X.current || e.target.click(), p?.(e)
                },
                onPressChange: e => {
                    h?.(e), X.current = e
                },
                onPressEnd: k,
                isDisabled: B
            }),
            {
                hoverProps: en
            } = (0, C.useHover)({
                isDisabled: B,
                onHoverStart(e) {
                    (0, g.isFocusVisible)() || U && c || (K.setFocused(!0), K.setFocusedKey(i)), D?.(e)
                },
                onHoverChange: w,
                onHoverEnd: A
            }),
            {
                keyboardProps: es
            } = (0, S.useKeyboard)({
                onKeyDown: e => {
                    if (e.repeat) return void e.continuePropagation();
                    switch (e.key) {
                        case " ":
                            Y.current = {
                                pointerType: "keyboard",
                                key: " "
                            }, (0, l.getEventTarget)(e).click(), (0, g.setInteractionModality)("keyboard");
                            break;
                        case "Enter":
                            Y.current = {
                                pointerType: "keyboard",
                                key: "Enter"
                            }, "A" !== (0, l.getEventTarget)(e).tagName && (0, l.getEventTarget)(e).click(), (0, g.setInteractionModality)("keyboard");
                            break;
                        default:
                            H || e.continuePropagation(), x?.(e)
                    }
                },
                onKeyUp: L
            }),
            {
                focusableProps: ei
            } = (0, E.useFocusable)({
                onBlur: N,
                onFocus: F,
                onFocusChange: I
            }, r),
            eo = (0, v.filterDOMProps)(j?.props);
        delete eo.id;
        let el = (0, P.useLinkProps)(j?.props);
        return {
            menuItemProps: {
                ...q,
                ...(0, y.mergeProps)(eo, el, H ? {
                    onFocus: Q.onFocus,
                    "data-collection": Q["data-collection"],
                    "data-key": Q["data-key"]
                } : Q, et, en, es, ei, W.shouldUseVirtualFocus || H ? {
                    onMouseDown: e => e.preventDefault()
                } : void 0, B ? void 0 : {
                    onClick: t => {
                        O?.(t), !H && (j?.props?.onAction ? j.props.onAction() : e.onAction && e.onAction(i), W.onAction && (0, W.onAction)(i, j?.value)), (0, P.handleLinkClick)(t, _, j.props.href, j?.props.routerOptions);
                        let r = Y.current?.pointerType === "keyboard" ? Y.current?.key === "Enter" || "none" === K.selectionMode || K.isLink(i) : "multiple" !== K.selectionMode || K.isLink(i);
                        r = a ?? o ?? r, V && !H && r && V(), Y.current = null
                    }
                }),
                tabIndex: null != Q.tabIndex && U && !W.shouldUseVirtualFocus ? -1 : Q.tabIndex
            },
            labelProps: {
                id: Z
            },
            descriptionProps: {
                id: J
            },
            keyboardShortcutProps: {
                id: $
            },
            isFocused: ee,
            isFocusVisible: ee && K.isFocused && (0, g.isFocusVisible)() && !U,
            isSelected: z,
            isPressed: er,
            isDisabled: B
        }
    }], 650868)
}, 17868, e => {
    "use strict";
    var t = e.i(999721);
    e.s(["useSubmenuTriggerState", 0, function(e, r) {
        let {
            triggerKey: n
        } = e, {
            expandedKeysStack: s,
            openSubmenu: i,
            closeSubmenu: o,
            close: l
        } = r, [a] = (0, t.useState)(s?.length), u = (0, t.useMemo)(() => s[a] === n, [s, n, a]), [c, d] = (0, t.useState)(null), g = (0, t.useCallback)(e => {
            d(e ?? null), i(n, a)
        }, [i, a, n]), p = (0, t.useCallback)(() => {
            d(null), o(n, a)
        }, [o, a, n]), f = (0, t.useCallback)(e => {
            d(e ?? null), u ? p() : g(e)
        }, [p, g, u]);
        return (0, t.useMemo)(() => ({
            focusStrategy: c,
            isOpen: u,
            open: g,
            close: p,
            closeAll: l,
            submenuLevel: a,
            setOpen: () => {},
            toggle: f
        }), [u, g, p, l, c, f, a])
    }])
}, 138065, e => {
    "use strict";
    e.s(["MenuTrigger", () => P, "RootMenuTriggerStateContext", () => y], 138065);
    var t = e.i(467211),
        r = e.i(312645),
        n = (e.i(185935), e.i(446246));
    e.i(417158);
    var s = e.i(279079),
        i = e.i(618508);
    e.i(526788), e.i(838123), e.i(605561), e.i(468069);
    var o = e.i(629080),
        l = (e.i(162336), e.i(647354), e.i(979235));
    e.i(650868);
    var a = e.i(897408),
        u = e.i(662255);
    e.i(17868), e.i(654995);
    var c = e.i(679933),
        d = (e.i(675815), e.i(429305)),
        g = e.i(286733),
        p = e.i(999721),
        f = e.i(85434);
    Symbol.iterator, e.i(485286), e.i(803258);
    e.i(184831);
    e.i(355770);
    var m = e.i(870053);
    e.i(838031);
    let v = (0, p.createContext)(null),
        b = (0, p.createContext)(null),
        y = (0, p.createContext)(null),
        h = (0, p.createContext)(null);

    function P(e) {
        let r = (0, u.useMenuTriggerState)(e),
            n = (0, p.useRef)(null),
            {
                menuTriggerProps: l,
                menuProps: a
            } = (0, o.useMenuTrigger)({
                ...e,
                type: "menu"
            }, r, n),
            c = (0, p.useRef)(null);
        return (0, m.useIsHidden)() ? null : p.default.createElement(t.Provider, {
            values: [
                [v, {
                    ...a,
                    ref: c
                }],
                [s.OverlayTriggerStateContext, r],
                [y, r],
                [i.PopoverContext, {
                    trigger: "MenuTrigger",
                    triggerRef: n,
                    scrollRef: c,
                    placement: "bottom start",
                    "aria-labelledby": a["aria-labelledby"]
                }]
            ]
        }, p.default.createElement(g.PressResponder, {
            ...l,
            ref: n,
            isPressed: r.isOpen
        }, e.children))
    }
    class E extends a.CollectionNode {
        static {
            this.type = "submenutrigger"
        }
        filter(e, t, r) {
            let n = e.getItem(this.firstChildKey);
            if (n && r(n.textValue, this)) {
                let r = this.clone();
                return t.addDescendants(r, e), r
            }
            return null
        }
    }
    class C extends f.SelectionManager {
        constructor(e, t) {
            super(e.collection, t), this.parent = e
        }
        get focusedKey() {
            return this.parent.focusedKey
        }
        get isFocused() {
            return this.parent.isFocused
        }
        setFocusedKey(e, t) {
            return this.parent.setFocusedKey(e, t)
        }
        setFocused(e) {
            this.parent.setFocused(e)
        }
        get childFocusStrategy() {
            return this.parent.childFocusStrategy
        }
    }
    a.SectionNode;
    a.ItemNode
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ddcfc664-3ec2-5c2e-96c4-c5d0922c9090")
    } catch (e) {}
}();
//# debugId=ddcfc664-3ec2-5c2e-96c4-c5d0922c9090