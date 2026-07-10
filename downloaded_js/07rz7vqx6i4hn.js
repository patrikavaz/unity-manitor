(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 741499, e => {
    "use strict";
    e.i(162696);
    let t = (0, e.i(3931).createContext)({});
    e.s(["KeyboardContext", 0, t])
}, 206956, 685171, e => {
    "use strict";
    var t = e.i(162696),
        r = e.i(339206),
        n = e.i(3931);
    let i = (0, n.createContext)({
            placement: "bottom"
        }),
        o = (0, n.forwardRef)(function(e, o) {
            [e, o] = (0, t.useContextProps)(e, o, i);
            let l = e.placement,
                s = {
                    position: "absolute",
                    transform: "top" === l || "bottom" === l ? "translateX(-50%)" : "translateY(-50%)"
                };
            null != l && (s[l] = "100%");
            let a = (0, t.useRenderProps)({
                ...e,
                defaultClassName: "react-aria-OverlayArrow",
                values: {
                    placement: l
                }
            });
            a.style && Object.keys(a.style).forEach(e => void 0 === a.style[e] && delete a.style[e]);
            let u = (0, r.filterDOMProps)(e);
            return n.default.createElement("div", {
                ...u,
                ...a,
                style: {
                    ...s,
                    ...a.style
                },
                ref: o,
                "data-placement": l
            })
        });
    e.s(["OverlayArrow", 0, o, "OverlayArrowContext", 0, i], 206956);
    var l = e.i(237483),
        s = e.i(973914);

    function a(e, t, r) {
        (0, l.useLayoutEffect)(() => {
            if (t && e.current) {
                if (!("getAnimations" in e.current)) return void r();
                let t = e.current.getAnimations();
                if (0 === t.length) return void r();
                let n = !1;
                return Promise.all(t.map(e => e.finished)).then(() => {
                    n || (0, s.flushSync)(() => {
                        r()
                    })
                }).catch(() => {}), () => {
                    n = !0
                }
            }
        }, [e, t, r])
    }
    e.s(["useEnterAnimation", 0, function(e, t = !0) {
        let [r, i] = (0, n.useState)(!0), o = r && t;
        return (0, l.useLayoutEffect)(() => {
            if (o && e.current && "getAnimations" in e.current)
                for (let t of e.current.getAnimations()) t instanceof CSSTransition && t.cancel()
        }, [e, o]), a(e, o, (0, n.useCallback)(() => i(!1), [])), o
    }, "useExitAnimation", 0, function(e, t) {
        let [r, i] = (0, n.useState)(t ? "open" : "closed");
        switch (r) {
            case "open":
                t || i("exiting");
                break;
            case "closed":
            case "exiting":
                t && i("open")
        }
        let o = "exiting" === r;
        return a(e, o, (0, n.useCallback)(() => {
            i(e => "exiting" === e ? "closed" : e)
        }, [])), o
    }], 685171)
}, 820374, e => {
    "use strict";
    e.s(["Popover", () => y, "PopoverContext", () => m]);
    var t = e.i(162696),
        r = e.i(206956),
        n = e.i(576855),
        i = e.i(754894),
        o = e.i(92257),
        l = e.i(23953),
        s = e.i(460261),
        a = e.i(685171),
        u = e.i(237483),
        c = e.i(604082),
        d = e.i(339206),
        p = e.i(743456),
        g = e.i(459236),
        f = e.i(3931),
        v = e.i(143822);
    let m = (0, f.createContext)(null),
        b = (0, f.createContext)(null),
        y = (0, f.forwardRef)(function(e, r) {
            [e, r] = (0, t.useContextProps)(e, r, m);
            let o = (0, f.useContext)(n.OverlayTriggerStateContext),
                l = (0, g.useOverlayTriggerState)(e),
                s = null == e.isOpen && null == e.defaultOpen && o ? o : l,
                u = (0, a.useExitAnimation)(r, s.isOpen) || e.isExiting || !1,
                c = (0, v.useIsHidden)(),
                {
                    direction: d
                } = (0, i.useLocale)();
            if (c) {
                let t = e.children;
                return "function" == typeof t && (t = t({
                    trigger: e.trigger || null,
                    placement: "bottom",
                    isEntering: !1,
                    isExiting: !1,
                    defaultChildren: null
                })), f.default.createElement(f.default.Fragment, null, t)
            }
            return !s || s.isOpen || u ? f.default.createElement(P, {
                ...e,
                triggerRef: e.triggerRef,
                state: s,
                popoverRef: r,
                isExiting: u,
                dir: d
            }) : null
        });

    function P({
        state: e,
        isExiting: n,
        UNSTABLE_portalContainer: i,
        clearContexts: g,
        ...v
    }) {
        var m, y;
        let h = (0, f.useRef)(null),
            [E, C] = (0, f.useState)(0),
            S = (0, f.useRef)(null),
            x = (0, f.useContext)(b),
            R = x && "SubmenuTrigger" === v.trigger;
        (0, u.useLayoutEffect)(() => {
            h.current && e.isOpen && C(h.current.getBoundingClientRect().width)
        }, [e.isOpen, h]);
        let {
            popoverProps: T,
            underlayProps: O,
            arrowProps: M,
            placement: w
        } = (0, o.usePopover)({
            ...v,
            offset: null != (m = v.offset) ? m : 8,
            arrowSize: E,
            groupRef: R ? x : S
        }, e), D = v.popoverRef, F = (0, a.useEnterAnimation)(D, !!w) || v.isEntering || !1, k = (0, t.useRenderProps)({
            ...v,
            defaultClassName: "react-aria-Popover",
            values: {
                trigger: v.trigger || null,
                placement: w,
                isEntering: F,
                isExiting: n
            }
        }), A = !v.isNonModal || "SubmenuTrigger" === v.trigger, [K, L] = (0, f.useState)(!1);
        (0, u.useLayoutEffect)(() => {
            D.current && L(A && !D.current.querySelector("[role=dialog]"))
        }, [D, A]), (0, f.useEffect)(() => {
            K && D.current && !D.current.contains(document.activeElement) && (0, p.focusSafely)(D.current)
        }, [K, D]);
        let I = (0, f.useMemo)(() => {
                let e = k.children;
                if (g)
                    for (let t of g) e = f.default.createElement(t.Provider, {
                        value: null
                    }, e);
                return e
            }, [k.children, g]),
            B = {
                ...T.style,
                ...k.style
            },
            U = f.default.createElement("div", {
                ...(0, c.mergeProps)((0, d.filterDOMProps)(v), T),
                ...k,
                role: K ? "dialog" : void 0,
                tabIndex: K ? -1 : void 0,
                "aria-label": v["aria-label"],
                "aria-labelledby": v["aria-labelledby"],
                ref: D,
                slot: v.slot || void 0,
                style: B,
                dir: v.dir,
                "data-trigger": v.trigger,
                "data-placement": w,
                "data-entering": F || void 0,
                "data-exiting": n || void 0
            }, !v.isNonModal && f.default.createElement(l.DismissButton, {
                onDismiss: e.close
            }), f.default.createElement(r.OverlayArrowContext.Provider, {
                value: {
                    ...M,
                    placement: w,
                    ref: h
                }
            }, I), f.default.createElement(l.DismissButton, {
                onDismiss: e.close
            }));
        return R ? f.default.createElement(s.Overlay, {
            ...v,
            shouldContainFocus: K,
            isExiting: n,
            portalContainer: null != (y = null != i ? i : null == x ? void 0 : x.current) ? y : void 0
        }, U) : f.default.createElement(s.Overlay, {
            ...v,
            shouldContainFocus: K,
            isExiting: n,
            portalContainer: i
        }, !v.isNonModal && e.isOpen && f.default.createElement("div", {
            "data-testid": "underlay",
            ...O,
            style: {
                position: "fixed",
                inset: 0
            }
        }), f.default.createElement("div", {
            ref: S,
            style: {
                display: "contents"
            }
        }, f.default.createElement(b.Provider, {
            value: S
        }, U)))
    }
}, 331942, e => {
    "use strict";
    var t = e.i(231781),
        r = e.i(339206),
        n = e.i(743456),
        i = e.i(3931),
        o = e.i(460261);
    e.s(["useDialog", 0, function(e, l) {
        let {
            role: s = "dialog"
        } = e, a = (0, t.useSlotId)();
        a = e["aria-label"] ? void 0 : a;
        let u = (0, i.useRef)(!1);
        return (0, i.useEffect)(() => {
            if (l.current && !l.current.contains(document.activeElement)) {
                (0, n.focusSafely)(l.current);
                let e = setTimeout(() => {
                    document.activeElement === l.current && (u.current = !0, l.current && (l.current.blur(), (0, n.focusSafely)(l.current)), u.current = !1)
                }, 500);
                return () => {
                    clearTimeout(e)
                }
            }
        }, [l]), (0, o.useOverlayFocusContain)(), {
            dialogProps: {
                ...(0, r.filterDOMProps)(e, {
                    labelable: !0
                }),
                role: s,
                tabIndex: -1,
                "aria-labelledby": e["aria-labelledby"] || a,
                onBlur: e => {
                    u.current && e.stopPropagation()
                }
            },
            titleProps: {
                id: a
            }
        }
    }])
}, 189668, e => {
    "use strict";
    var t = e.i(459236),
        r = e.i(3931);
    e.s(["useMenuTriggerState", 0, function(e) {
        let n = (0, t.useOverlayTriggerState)(e),
            [i, o] = (0, r.useState)(null),
            [l, s] = (0, r.useState)([]);
        return {
            focusStrategy: i,
            ...n,
            open(e = null) {
                o(e), n.open()
            },
            toggle(e = null) {
                o(e), n.toggle()
            },
            close() {
                s([]), n.close()
            },
            expandedKeysStack: l,
            openSubmenu: (e, t) => {
                s(r => t > r.length ? r : [...r.slice(0, t), e])
            },
            closeSubmenu: (e, t) => {
                s(r => r[t] === e ? r.slice(0, t) : r)
            }
        }
    }])
}, 576855, e => {
    "use strict";
    e.s(["Dialog", () => b, "DialogTrigger", () => m, "OverlayTriggerStateContext", () => v]);
    var t = e.i(433721),
        r = e.i(162696),
        n = e.i(619379),
        i = e.i(820374),
        o = e.i(596199),
        l = e.i(441157),
        s = e.i(231781),
        a = e.i(331942),
        u = e.i(506275),
        c = e.i(339206),
        d = e.i(189668),
        p = e.i(548878),
        g = e.i(3931);
    let f = (0, g.createContext)(null),
        v = (0, g.createContext)(null);

    function m(e) {
        let t = (0, d.useMenuTriggerState)(e),
            n = (0, g.useRef)(null),
            {
                triggerProps: a,
                overlayProps: c
            } = (0, l.useOverlayTrigger)({
                type: "dialog"
            }, t, n),
            [m, b] = (0, g.useState)(null),
            y = (0, g.useCallback)(() => {
                n.current && b(n.current.offsetWidth + "px")
            }, [n]);
        return (0, u.useResizeObserver)({
            ref: n,
            onResize: y
        }), a.id = (0, s.useId)(), c["aria-labelledby"] = a.id, g.default.createElement(r.Provider, {
            values: [
                [v, t],
                [o.RootMenuTriggerStateContext, t],
                [f, c],
                [i.PopoverContext, {
                    trigger: "DialogTrigger",
                    triggerRef: n,
                    "aria-labelledby": c["aria-labelledby"],
                    style: {
                        "--trigger-width": m
                    }
                }]
            ]
        }, g.default.createElement(p.PressResponder, {
            ...a,
            ref: n,
            isPressed: t.isOpen
        }, e.children))
    }
    let b = (0, g.forwardRef)(function(e, i) {
        let o = e["aria-labelledby"];
        [e, i] = (0, r.useContextProps)(e, i, f);
        let {
            dialogProps: l,
            titleProps: s
        } = (0, a.useDialog)({
            ...e,
            "aria-labelledby": o
        }, i), u = (0, g.useContext)(v);
        l["aria-label"] || l["aria-labelledby"] || e["aria-labelledby"] && (l["aria-labelledby"] = e["aria-labelledby"]);
        let d = (0, r.useRenderProps)({
            defaultClassName: "react-aria-Dialog",
            className: e.className,
            style: e.style,
            children: e.children,
            values: {
                close: (null == u ? void 0 : u.close) || (() => {})
            }
        });
        return g.default.createElement("section", {
            ...(0, c.filterDOMProps)(e),
            ...l,
            ...d,
            ref: i,
            slot: e.slot || void 0
        }, g.default.createElement(r.Provider, {
            values: [
                [n.HeadingContext, {
                    slots: {
                        [r.DEFAULT_SLOT]: {},
                        title: {
                            ...s,
                            level: 2
                        }
                    }
                }],
                [t.ButtonContext, {
                    slots: {
                        [r.DEFAULT_SLOT]: {},
                        close: {
                            onPress: () => null == u ? void 0 : u.close()
                        }
                    }
                }]
            ]
        }, d.children))
    })
}, 821887, 849635, 798340, 246637, e => {
    "use strict";
    e.i(788727);
    var t = e.i(3931),
        r = e.i(506275),
        n = e.i(123714),
        i = e.i(427651);
    let o = Math.PI / 12;
    var l = e.i(231781),
        s = e.i(237483),
        a = e.i(256630),
        u = e.i(754894);
    e.s(["useSubmenuTrigger", 0, function(e, c, d) {
        var p;
        let {
            parentMenuRef: g,
            submenuRef: f,
            type: v = "menu",
            isDisabled: m,
            delay: b = 200,
            shouldUseVirtualFocus: y
        } = e, P = (0, l.useId)(), h = (0, l.useId)(), {
            direction: E
        } = (0, u.useLocale)(), C = (0, t.useRef)(void 0), S = (0, t.useCallback)(() => {
            C.current && (clearTimeout(C.current), C.current = void 0)
        }, [C]), x = (0, n.useEffectEvent)(e => {
            S(), c.open(e)
        }), R = (0, n.useEffectEvent)(() => {
            S(), c.close()
        });
        (0, s.useLayoutEffect)(() => () => {
            S()
        }, [S]);
        let T = {
            id: h,
            "aria-labelledby": P,
            submenuLevel: c.submenuLevel,
            ..."menu" === v && {
                onClose: c.closeAll,
                autoFocus: null != (p = c.focusStrategy) ? p : void 0,
                onKeyDown: e => {
                    if (e.currentTarget.contains(document.activeElement)) switch (e.key) {
                        case "ArrowLeft":
                            "ltr" === E && e.currentTarget.contains(e.target) && (e.preventDefault(), e.stopPropagation(), R(), !y && d.current && (0, a.focusWithoutScrolling)(d.current));
                            break;
                        case "ArrowRight":
                            "rtl" === E && e.currentTarget.contains(e.target) && (e.preventDefault(), e.stopPropagation(), R(), !y && d.current && (0, a.focusWithoutScrolling)(d.current));
                            break;
                        case "Escape":
                            var t;
                            (null == (t = f.current) ? void 0 : t.contains(e.target)) && (e.stopPropagation(), R(), !y && d.current && (0, a.focusWithoutScrolling)(d.current))
                    }
                }
            }
        };
        return ! function(e) {
            let {
                menuRef: l,
                submenuRef: s,
                isOpen: a,
                isDisabled: u
            } = e, c = (0, t.useRef)(void 0), d = (0, t.useRef)(void 0), p = (0, t.useRef)(0), g = (0, t.useRef)(void 0), f = (0, t.useRef)(void 0), v = (0, t.useRef)(void 0), m = (0, t.useRef)(2), [b, y] = (0, t.useState)(!1);
            (0, r.useResizeObserver)({
                ref: s,
                onResize: () => {
                    s.current && (d.current = s.current.getBoundingClientRect(), v.current = void 0)
                }
            });
            let P = () => {
                    y(!1), m.current = 2, c.current = void 0
                },
                h = (0, i.useInteractionModality)(),
                E = (0, n.useEffectEvent)(e => {
                    b && e.preventDefault()
                });
            (0, t.useEffect)(() => {
                b && l.current ? l.current.style.pointerEvents = "none" : l.current.style.pointerEvents = ""
            }, [l, b]), (0, t.useEffect)(() => {
                let e = s.current,
                    t = l.current;
                if (u || !e || !a || "pointer" !== h || !t) return void P();
                d.current = e.getBoundingClientRect();
                let r = e => {
                    if ("touch" === e.pointerType || "pen" === e.pointerType) return;
                    let r = Date.now();
                    if (r - p.current < 50) return;
                    clearTimeout(g.current), clearTimeout(f.current);
                    let {
                        clientX: n,
                        clientY: i
                    } = e;
                    if (!c.current) {
                        c.current = {
                            x: n,
                            y: i
                        };
                        return
                    }
                    if (!d.current) return;
                    if (v.current || (v.current = n > d.current.right ? "left" : "right"), n < t.getBoundingClientRect().left || n > t.getBoundingClientRect().right || i < t.getBoundingClientRect().top || i > t.getBoundingClientRect().bottom) return void P();
                    let l = c.current.x,
                        s = c.current.y,
                        a = "right" === v.current ? d.current.left - l : l - d.current.right,
                        u = Math.atan2(s - d.current.top, a) + o,
                        b = Math.atan2(s - d.current.bottom, a) - o,
                        h = Math.atan2(s - i, "left" === v.current ? -(n - l) : n - l),
                        E = h < u && h > b;
                    m.current = E ? Math.min(m.current + 1, 2) : Math.max(m.current - 1, 0), m.current >= 2 ? y(!0) : y(!1), p.current = r, c.current = {
                        x: n,
                        y: i
                    }, E && (g.current = setTimeout(() => {
                        P(), f.current = setTimeout(() => {
                            let e = document.elementFromPoint(n, i);
                            e && t.contains(e) && e.dispatchEvent(new PointerEvent("pointerover", {
                                bubbles: !0,
                                cancelable: !0
                            }))
                        }, 100)
                    }, 1e3))
                };
                return window.addEventListener("pointermove", r), window.addEventListener("pointerdown", E, !0), () => {
                    window.removeEventListener("pointermove", r), window.removeEventListener("pointerdown", E, !0), clearTimeout(g.current), clearTimeout(f.current), m.current = 2
                }
            }, [u, a, l, h, y, E, s])
        }({
            menuRef: g,
            submenuRef: f,
            isOpen: c.isOpen,
            isDisabled: m
        }), {
            submenuTriggerProps: {
                id: P,
                "aria-controls": c.isOpen ? h : void 0,
                "aria-haspopup": m ? void 0 : v,
                "aria-expanded": c.isOpen ? "true" : "false",
                onPressStart: e => {
                    m || "virtual" !== e.pointerType && "keyboard" !== e.pointerType || x("first")
                },
                onPress: e => {
                    m || "touch" !== e.pointerType && "mouse" !== e.pointerType || x()
                },
                onHoverChange: e => {
                    !m && (e && !c.isOpen ? C.current || (C.current = setTimeout(() => {
                        x()
                    }, b)) : e || S())
                },
                onKeyDown: e => {
                    switch (e.key) {
                        case "ArrowRight":
                            !m && ("ltr" === E ? (e.preventDefault(), c.isOpen || x("first"), "menu" === v && (null == f ? void 0 : f.current) && document.activeElement === (null == d ? void 0 : d.current) && (0, a.focusWithoutScrolling)(f.current)) : c.isOpen ? R() : e.continuePropagation());
                            break;
                        case "ArrowLeft":
                            !m && ("rtl" === E ? (e.preventDefault(), c.isOpen || x("first"), "menu" === v && (null == f ? void 0 : f.current) && document.activeElement === (null == d ? void 0 : d.current) && (0, a.focusWithoutScrolling)(f.current)) : c.isOpen ? R() : e.continuePropagation());
                            break;
                        default:
                            e.continuePropagation()
                    }
                },
                onBlur: e => {
                    var t;
                    c.isOpen && (null == (t = g.current) ? void 0 : t.contains(e.relatedTarget)) && R()
                },
                isOpen: c.isOpen
            },
            submenuProps: T,
            popoverProps: {
                isNonModal: !0,
                shouldCloseOnInteractOutside: e => e !== d.current
            }
        }
    }], 821887);
    let c = new WeakMap;
    var d = e.i(339206),
        p = e.i(604082),
        g = e.i(699403);
    e.s(["useMenu", 0, function(e, t, r) {
        let {
            shouldFocusWrap: n = !0,
            onKeyDown: i,
            onKeyUp: o,
            ...l
        } = e, s = (0, d.filterDOMProps)(e, {
            labelable: !0
        }), {
            listProps: a
        } = (0, g.useSelectableList)({
            ...l,
            ref: r,
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            shouldFocusWrap: n,
            linkBehavior: "override"
        });
        return c.set(t, {
            onClose: e.onClose,
            onAction: e.onAction,
            shouldUseVirtualFocus: e.shouldUseVirtualFocus
        }), {
            menuProps: (0, p.mergeProps)(s, {
                onKeyDown: i,
                onKeyUp: o
            }, {
                role: "menu",
                ...a,
                onKeyDown: t => {
                    var r;
                    ("Escape" !== t.key || e.shouldUseVirtualFocus) && (null == (r = a.onKeyDown) || r.call(a, t))
                }
            })
        }
    }], 849635), e.s(["useMenuSection", 0, function(e) {
        let {
            heading: t,
            "aria-label": r
        } = e, n = (0, l.useId)();
        return {
            itemProps: {
                role: "presentation"
            },
            headingProps: t ? {
                id: n,
                role: "presentation"
            } : {},
            groupProps: {
                role: "group",
                "aria-label": r,
                "aria-labelledby": t ? n : void 0
            }
        }
    }], 798340);
    var f = e.i(376842),
        v = e.i(580867),
        m = e.i(212299),
        b = e.i(897884),
        y = e.i(349290),
        P = e.i(582374),
        h = e.i(389261);
    e.s(["useMenuItem", 0, function(e, t, r) {
        var n, o;
        let {
            id: s,
            key: a,
            closeOnSelect: u,
            isVirtualized: g,
            "aria-haspopup": E,
            onPressStart: C,
            onPressUp: S,
            onPress: x,
            onPressChange: R,
            onPressEnd: T,
            onHoverStart: O,
            onHoverChange: M,
            onHoverEnd: w,
            onKeyDown: D,
            onKeyUp: F,
            onFocus: k,
            onFocusChange: A,
            onBlur: K,
            selectionManager: L = t.selectionManager
        } = e, I = !!E, B = I && "true" === e["aria-expanded"], U = null != (n = e.isDisabled) ? n : L.isDisabled(a), V = null != (o = e.isSelected) ? o : L.isSelected(a), H = c.get(t), N = t.collection.getItem(a), W = e.onClose || H.onClose, z = (0, f.useRouter)(), j = t => {
            var r;
            !I && ((null == N || null == (r = N.props) ? void 0 : r.onAction) ? N.props.onAction() : e.onAction && e.onAction(a), H.onAction && (0, H.onAction)(a), t.target instanceof HTMLAnchorElement && N && z.open(t.target, t, N.props.href, N.props.routerOptions))
        }, _ = "menuitem";
        I || ("single" === L.selectionMode ? _ = "menuitemradio" : "multiple" === L.selectionMode && (_ = "menuitemcheckbox"));
        let X = (0, l.useSlotId)(),
            Y = (0, l.useSlotId)(),
            q = (0, l.useSlotId)(),
            G = {
                id: s,
                "aria-disabled": U || void 0,
                role: _,
                "aria-label": e["aria-label"],
                "aria-labelledby": X,
                "aria-describedby": [Y, q].filter(Boolean).join(" ") || void 0,
                "aria-controls": e["aria-controls"],
                "aria-haspopup": E,
                "aria-expanded": e["aria-expanded"]
            };
        "none" === L.selectionMode || I || (G["aria-checked"] = V), g && (G["aria-posinset"] = null == N ? void 0 : N.index, G["aria-setsize"] = (0, v.getItemCount)(t.collection));
        let J = () => {
                !I && W && (null != u ? u : "multiple" !== L.selectionMode || L.isLink(a)) && W()
            },
            {
                itemProps: Q,
                isFocused: Z
            } = (0, h.useSelectableItem)({
                id: s,
                selectionManager: L,
                key: a,
                ref: r,
                shouldSelectOnPressUp: !0,
                allowsDifferentPressOrigin: !0,
                linkBehavior: "none",
                shouldUseVirtualFocus: H.shouldUseVirtualFocus
            }),
            {
                pressProps: $,
                isPressed: ee
            } = (0, m.usePress)({
                onPressStart: e => {
                    "keyboard" === e.pointerType && j(e), null == C || C(e)
                },
                onPress: e => {
                    "keyboard" !== e.pointerType && "mouse" !== e.pointerType && (j(e), J()), null == x || x(e)
                },
                onPressUp: e => {
                    "mouse" === e.pointerType && (j(e), J()), null == S || S(e)
                },
                onPressChange: R,
                onPressEnd: T,
                isDisabled: U
            }),
            {
                hoverProps: et
            } = (0, b.useHover)({
                isDisabled: U,
                onHoverStart(e) {
                    (0, i.isFocusVisible)() || B && E || (L.setFocused(!0), L.setFocusedKey(a)), null == O || O(e)
                },
                onHoverChange: M,
                onHoverEnd: w
            }),
            {
                keyboardProps: er
            } = (0, y.useKeyboard)({
                onKeyDown: e => {
                    if (e.repeat) return void e.continuePropagation();
                    switch (e.key) {
                        case " ":
                            U || "none" !== L.selectionMode || I || !1 === u || !W || W();
                            break;
                        case "Enter":
                            U || !1 === u || I || !W || W();
                            break;
                        default:
                            I || e.continuePropagation(), null == D || D(e)
                    }
                },
                onKeyUp: F
            }),
            {
                focusProps: en
            } = (0, P.useFocus)({
                onBlur: K,
                onFocus: k,
                onFocusChange: A
            }),
            ei = (0, d.filterDOMProps)(null == N ? void 0 : N.props);
        delete ei.id;
        let eo = (0, f.useLinkProps)(null == N ? void 0 : N.props);
        return {
            menuItemProps: {
                ...G,
                ...(0, p.mergeProps)(ei, eo, I ? {
                    onFocus: Q.onFocus,
                    "data-collection": Q["data-collection"],
                    "data-key": Q["data-key"]
                } : Q, $, et, er, en, H.shouldUseVirtualFocus || I ? {
                    onMouseDown: e => e.preventDefault()
                } : void 0),
                tabIndex: null != Q.tabIndex && B && !H.shouldUseVirtualFocus ? -1 : Q.tabIndex
            },
            labelProps: {
                id: X
            },
            descriptionProps: {
                id: Y
            },
            keyboardShortcutProps: {
                id: q
            },
            isFocused: Z,
            isFocusVisible: Z && L.isFocused && (0, i.isFocusVisible)() && !B,
            isSelected: V,
            isPressed: ee,
            isDisabled: U
        }
    }], 246637)
}, 596199, e => {
    "use strict";
    e.s(["MenuTrigger", () => h, "RootMenuTriggerStateContext", () => y], 596199);
    var t = e.i(58067),
        r = e.i(162696),
        n = e.i(40717);
    e.i(741499);
    var i = e.i(576855),
        o = e.i(820374);
    e.i(974683), e.i(532969), e.i(369112);
    var l = e.i(841811),
        s = (e.i(821887), e.i(849635), e.i(102893), e.i(798340));
    e.i(246637), e.i(897884), e.i(604082), e.i(327143);
    var a = e.i(189668),
        u = e.i(3931);
    Symbol.iterator;
    var c = e.i(564306),
        d = e.i(666119),
        p = (e.i(240522), e.i(201373), e.i(506275)),
        g = (e.i(166010), e.i(356855), e.i(339206)),
        f = d,
        v = e.i(548878);
    let m = (0, u.createContext)(null),
        b = (0, u.createContext)(null),
        y = (0, u.createContext)(null),
        P = (0, u.createContext)(null);

    function h(e) {
        let t = (0, a.useMenuTriggerState)(e),
            n = (0, u.useRef)(null),
            {
                menuTriggerProps: s,
                menuProps: c
            } = (0, l.useMenuTrigger)({
                ...e,
                type: "menu"
            }, t, n),
            [d, g] = (0, u.useState)(null),
            f = (0, u.useCallback)(() => {
                n.current && g(n.current.offsetWidth + "px")
            }, [n]);
        (0, p.useResizeObserver)({
            ref: n,
            onResize: f
        });
        let b = (0, u.useRef)(null);
        return u.default.createElement(r.Provider, {
            values: [
                [m, {
                    ...c,
                    ref: b
                }],
                [i.OverlayTriggerStateContext, t],
                [y, t],
                [o.PopoverContext, {
                    trigger: "MenuTrigger",
                    triggerRef: n,
                    scrollRef: b,
                    placement: "bottom start",
                    style: {
                        "--trigger-width": d
                    },
                    "aria-labelledby": c["aria-labelledby"]
                }]
            ]
        }, u.default.createElement(v.PressResponder, {
            ...s,
            ref: n,
            isPressed: t.isOpen
        }, e.children))
    }
    class E extends f.SelectionManager {
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
        constructor(e, t) {
            super(e.collection, t), this.parent = e
        }
    }
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "58461c2a-0559-5695-82ae-619266e204c7")
    } catch (e) {}
}();
//# debugId=58461c2a-0559-5695-82ae-619266e204c7