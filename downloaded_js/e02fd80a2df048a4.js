(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 544789, e => {
    "use strict";
    var t = e.i(853712),
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
        variant: o = "default",
        children: i
    }) => {
        let l = n[o],
            a = (0, r.default)("relative mango-text-caption-md rounded-lg px-2 py-1 uppercase animated-border", "text-black dark:text-white", e);
        return (0, t.jsxs)("div", {
            "aria-label": i,
            style: {
                "--color-accent": l.accent,
                "--color-background": l.background,
                "--color-accent-dark": l.accentDark,
                "--color-background-dark": l.backgroundDark
            },
            className: a,
            children: [(0, t.jsx)("span", {
                className: "animated-border-glow"
            }), (0, t.jsx)("span", {
                className: "animated-border-background"
            }), (0, t.jsx)("span", {
                className: "animated-border-text",
                children: i
            })]
        })
    }], 544789)
}, 284606, e => {
    "use strict";
    e.i(329151);
    let t = (0, e.i(107579).createContext)({});
    e.s(["KeyboardContext", () => t])
}, 991769, e => {
    "use strict";
    var t = e.i(329151),
        r = e.i(894971),
        n = e.i(107579);
    let o = (0, n.createContext)({
            placement: "bottom"
        }),
        i = (0, n.forwardRef)(function(e, i) {
            [e, i] = (0, t.useContextProps)(e, i, o);
            let l = e.placement,
                a = {
                    position: "absolute",
                    transform: "top" === l || "bottom" === l ? "translateX(-50%)" : "translateY(-50%)"
                };
            null != l && (a[l] = "100%");
            let s = (0, t.useRenderProps)({
                ...e,
                defaultClassName: "react-aria-OverlayArrow",
                values: {
                    placement: l
                }
            });
            s.style && Object.keys(s.style).forEach(e => void 0 === s.style[e] && delete s.style[e]);
            let u = (0, r.filterDOMProps)(e);
            return n.default.createElement("div", {
                ...u,
                ...s,
                style: {
                    ...a,
                    ...s.style
                },
                ref: i,
                "data-placement": l
            })
        });
    e.s(["OverlayArrow", () => i, "OverlayArrowContext", () => o])
}, 556734, e => {
    "use strict";
    var t = e.i(96871),
        r = e.i(206276),
        n = e.i(107579);

    function o(e, r = !0) {
        let [i, a] = (0, n.useState)(!0), s = i && r;
        return (0, t.useLayoutEffect)(() => {
            if (s && e.current && "getAnimations" in e.current)
                for (let t of e.current.getAnimations()) t instanceof CSSTransition && t.cancel()
        }, [e, s]), l(e, s, (0, n.useCallback)(() => a(!1), [])), s
    }

    function i(e, t) {
        let [r, o] = (0, n.useState)(t ? "open" : "closed");
        switch (r) {
            case "open":
                t || o("exiting");
                break;
            case "closed":
            case "exiting":
                t && o("open")
        }
        let i = "exiting" === r;
        return l(e, i, (0, n.useCallback)(() => {
            o(e => "exiting" === e ? "closed" : e)
        }, [])), i
    }

    function l(e, n, o) {
        (0, t.useLayoutEffect)(() => {
            if (n && e.current) {
                if (!("getAnimations" in e.current)) return void o();
                let t = e.current.getAnimations();
                if (0 === t.length) return void o();
                let n = !1;
                return Promise.all(t.map(e => e.finished)).then(() => {
                    n || (0, r.flushSync)(() => {
                        o()
                    })
                }).catch(() => {}), () => {
                    n = !0
                }
            }
        }, [e, n, o])
    }
    e.s(["useEnterAnimation", () => o, "useExitAnimation", () => i])
}, 293723, e => {
    "use strict";
    e.s(["Popover", () => y, "PopoverContext", () => v]);
    var t = e.i(329151),
        r = e.i(991769),
        n = e.i(633781),
        o = e.i(416412),
        i = e.i(199593),
        l = e.i(912339),
        a = e.i(365666),
        s = e.i(556734),
        u = e.i(96871),
        c = e.i(336480),
        d = e.i(894971),
        p = e.i(210089),
        g = e.i(658734),
        f = e.i(107579),
        b = e.i(410495);
    let v = (0, f.createContext)(null),
        m = (0, f.createContext)(null),
        y = (0, f.forwardRef)(function(e, r) {
            [e, r] = (0, t.useContextProps)(e, r, v);
            let i = (0, f.useContext)(n.OverlayTriggerStateContext),
                l = (0, g.useOverlayTriggerState)(e),
                a = null == e.isOpen && null == e.defaultOpen && i ? i : l,
                u = (0, s.useExitAnimation)(r, a.isOpen) || e.isExiting || !1,
                c = (0, b.useIsHidden)(),
                {
                    direction: d
                } = (0, o.useLocale)();
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
            return !a || a.isOpen || u ? f.default.createElement(h, {
                ...e,
                triggerRef: e.triggerRef,
                state: a,
                popoverRef: r,
                isExiting: u,
                dir: d
            }) : null
        });

    function h({
        state: e,
        isExiting: n,
        UNSTABLE_portalContainer: o,
        clearContexts: g,
        ...b
    }) {
        var v, y;
        let h = (0, f.useRef)(null),
            [P, E] = (0, f.useState)(0),
            x = (0, f.useRef)(null),
            C = (0, f.useContext)(m),
            S = C && "SubmenuTrigger" === b.trigger;
        (0, u.useLayoutEffect)(() => {
            h.current && e.isOpen && E(h.current.getBoundingClientRect().width)
        }, [e.isOpen, h]);
        let {
            popoverProps: k,
            underlayProps: R,
            arrowProps: T,
            placement: O
        } = (0, i.usePopover)({
            ...b,
            offset: null != (v = b.offset) ? v : 8,
            arrowSize: P,
            groupRef: S ? C : x
        }, e), D = b.popoverRef, w = (0, s.useEnterAnimation)(D, !!O) || b.isEntering || !1, M = (0, t.useRenderProps)({
            ...b,
            defaultClassName: "react-aria-Popover",
            values: {
                trigger: b.trigger || null,
                placement: O,
                isEntering: w,
                isExiting: n
            }
        }), F = !b.isNonModal || "SubmenuTrigger" === b.trigger, [A, K] = (0, f.useState)(!1);
        (0, u.useLayoutEffect)(() => {
            D.current && K(F && !D.current.querySelector("[role=dialog]"))
        }, [D, F]), (0, f.useEffect)(() => {
            A && D.current && !D.current.contains(document.activeElement) && (0, p.focusSafely)(D.current)
        }, [A, D]);
        let L = (0, f.useMemo)(() => {
                let e = M.children;
                if (g)
                    for (let t of g) e = f.default.createElement(t.Provider, {
                        value: null
                    }, e);
                return e
            }, [M.children, g]),
            I = {
                ...k.style,
                ...M.style
            },
            B = f.default.createElement("div", {
                ...(0, c.mergeProps)((0, d.filterDOMProps)(b), k),
                ...M,
                role: A ? "dialog" : void 0,
                tabIndex: A ? -1 : void 0,
                "aria-label": b["aria-label"],
                "aria-labelledby": b["aria-labelledby"],
                ref: D,
                slot: b.slot || void 0,
                style: I,
                dir: b.dir,
                "data-trigger": b.trigger,
                "data-placement": O,
                "data-entering": w || void 0,
                "data-exiting": n || void 0
            }, !b.isNonModal && f.default.createElement(l.DismissButton, {
                onDismiss: e.close
            }), f.default.createElement(r.OverlayArrowContext.Provider, {
                value: {
                    ...T,
                    placement: O,
                    ref: h
                }
            }, L), f.default.createElement(l.DismissButton, {
                onDismiss: e.close
            }));
        return S ? f.default.createElement(a.Overlay, {
            ...b,
            shouldContainFocus: A,
            isExiting: n,
            portalContainer: null != (y = null != o ? o : null == C ? void 0 : C.current) ? y : void 0
        }, B) : f.default.createElement(a.Overlay, {
            ...b,
            shouldContainFocus: A,
            isExiting: n,
            portalContainer: o
        }, !b.isNonModal && e.isOpen && f.default.createElement("div", {
            "data-testid": "underlay",
            ...R,
            style: {
                position: "fixed",
                inset: 0
            }
        }), f.default.createElement("div", {
            ref: x,
            style: {
                display: "contents"
            }
        }, f.default.createElement(m.Provider, {
            value: x
        }, B)))
    }
}, 803265, e => {
    "use strict";
    var t = e.i(393632),
        r = e.i(894971),
        n = e.i(210089),
        o = e.i(107579),
        i = e.i(365666);

    function l(e, l) {
        let {
            role: a = "dialog"
        } = e, s = (0, t.useSlotId)();
        s = e["aria-label"] ? void 0 : s;
        let u = (0, o.useRef)(!1);
        return (0, o.useEffect)(() => {
            if (l.current && !l.current.contains(document.activeElement)) {
                (0, n.focusSafely)(l.current);
                let e = setTimeout(() => {
                    document.activeElement === l.current && (u.current = !0, l.current && (l.current.blur(), (0, n.focusSafely)(l.current)), u.current = !1)
                }, 500);
                return () => {
                    clearTimeout(e)
                }
            }
        }, [l]), (0, i.useOverlayFocusContain)(), {
            dialogProps: {
                ...(0, r.filterDOMProps)(e, {
                    labelable: !0
                }),
                role: a,
                tabIndex: -1,
                "aria-labelledby": e["aria-labelledby"] || s,
                onBlur: e => {
                    u.current && e.stopPropagation()
                }
            },
            titleProps: {
                id: s
            }
        }
    }
    e.s(["useDialog", () => l])
}, 924728, e => {
    "use strict";
    var t = e.i(658734),
        r = e.i(107579);

    function n(e) {
        let n = (0, t.useOverlayTriggerState)(e),
            [o, i] = (0, r.useState)(null),
            [l, a] = (0, r.useState)([]);
        return {
            focusStrategy: o,
            ...n,
            open(e = null) {
                i(e), n.open()
            },
            toggle(e = null) {
                i(e), n.toggle()
            },
            close() {
                a([]), n.close()
            },
            expandedKeysStack: l,
            openSubmenu: (e, t) => {
                a(r => t > r.length ? r : [...r.slice(0, t), e])
            },
            closeSubmenu: (e, t) => {
                a(r => r[t] === e ? r.slice(0, t) : r)
            }
        }
    }
    e.s(["useMenuTriggerState", () => n])
}, 633781, e => {
    "use strict";
    e.s(["Dialog", () => m, "DialogTrigger", () => v, "OverlayTriggerStateContext", () => b]);
    var t = e.i(614271),
        r = e.i(329151),
        n = e.i(643278),
        o = e.i(293723),
        i = e.i(946318),
        l = e.i(502514),
        a = e.i(393632),
        s = e.i(803265),
        u = e.i(20935),
        c = e.i(894971),
        d = e.i(924728),
        p = e.i(219641),
        g = e.i(107579);
    let f = (0, g.createContext)(null),
        b = (0, g.createContext)(null);

    function v(e) {
        let t = (0, d.useMenuTriggerState)(e),
            n = (0, g.useRef)(null),
            {
                triggerProps: s,
                overlayProps: c
            } = (0, l.useOverlayTrigger)({
                type: "dialog"
            }, t, n),
            [v, m] = (0, g.useState)(null),
            y = (0, g.useCallback)(() => {
                n.current && m(n.current.offsetWidth + "px")
            }, [n]);
        return (0, u.useResizeObserver)({
            ref: n,
            onResize: y
        }), s.id = (0, a.useId)(), c["aria-labelledby"] = s.id, g.default.createElement(r.Provider, {
            values: [
                [b, t],
                [i.RootMenuTriggerStateContext, t],
                [f, c],
                [o.PopoverContext, {
                    trigger: "DialogTrigger",
                    triggerRef: n,
                    "aria-labelledby": c["aria-labelledby"],
                    style: {
                        "--trigger-width": v
                    }
                }]
            ]
        }, g.default.createElement(p.PressResponder, {
            ...s,
            ref: n,
            isPressed: t.isOpen
        }, e.children))
    }
    let m = (0, g.forwardRef)(function(e, o) {
        let i = e["aria-labelledby"];
        [e, o] = (0, r.useContextProps)(e, o, f);
        let {
            dialogProps: l,
            titleProps: a
        } = (0, s.useDialog)({
            ...e,
            "aria-labelledby": i
        }, o), u = (0, g.useContext)(b);
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
            ref: o,
            slot: e.slot || void 0
        }, g.default.createElement(r.Provider, {
            values: [
                [n.HeadingContext, {
                    slots: {
                        [r.DEFAULT_SLOT]: {},
                        title: {
                            ...a,
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
}, 293992, 804211, 484254, 507589, e => {
    "use strict";
    e.i(252495);
    var t = e.i(107579),
        r = e.i(20935),
        n = e.i(249527),
        o = e.i(582759);
    let i = Math.PI / 12;
    var l = e.i(393632),
        a = e.i(96871),
        s = e.i(352),
        u = e.i(416412);

    function c(e, c, d) {
        var p;
        let {
            parentMenuRef: g,
            submenuRef: f,
            type: b = "menu",
            isDisabled: v,
            delay: m = 200,
            shouldUseVirtualFocus: y
        } = e, h = (0, l.useId)(), P = (0, l.useId)(), {
            direction: E
        } = (0, u.useLocale)(), x = (0, t.useRef)(void 0), C = (0, t.useCallback)(() => {
            x.current && (clearTimeout(x.current), x.current = void 0)
        }, [x]), S = (0, n.useEffectEvent)(e => {
            C(), c.open(e)
        }), k = (0, n.useEffectEvent)(() => {
            C(), c.close()
        });
        (0, a.useLayoutEffect)(() => () => {
            C()
        }, [C]);
        let R = {
            id: P,
            "aria-labelledby": h,
            submenuLevel: c.submenuLevel,
            ..."menu" === b && {
                onClose: c.closeAll,
                autoFocus: null != (p = c.focusStrategy) ? p : void 0,
                onKeyDown: e => {
                    if (e.currentTarget.contains(document.activeElement)) switch (e.key) {
                        case "ArrowLeft":
                            "ltr" === E && e.currentTarget.contains(e.target) && (e.preventDefault(), e.stopPropagation(), k(), !y && d.current && (0, s.focusWithoutScrolling)(d.current));
                            break;
                        case "ArrowRight":
                            "rtl" === E && e.currentTarget.contains(e.target) && (e.preventDefault(), e.stopPropagation(), k(), !y && d.current && (0, s.focusWithoutScrolling)(d.current));
                            break;
                        case "Escape":
                            var t;
                            (null == (t = f.current) ? void 0 : t.contains(e.target)) && (e.stopPropagation(), k(), !y && d.current && (0, s.focusWithoutScrolling)(d.current))
                    }
                }
            }
        };
        return ! function(e) {
            let {
                menuRef: l,
                submenuRef: a,
                isOpen: s,
                isDisabled: u
            } = e, c = (0, t.useRef)(void 0), d = (0, t.useRef)(void 0), p = (0, t.useRef)(0), g = (0, t.useRef)(void 0), f = (0, t.useRef)(void 0), b = (0, t.useRef)(void 0), v = (0, t.useRef)(2), [m, y] = (0, t.useState)(!1);
            (0, r.useResizeObserver)({
                ref: a,
                onResize: () => {
                    a.current && (d.current = a.current.getBoundingClientRect(), b.current = void 0)
                }
            });
            let h = () => {
                    y(!1), v.current = 2, c.current = void 0
                },
                P = (0, o.useInteractionModality)(),
                E = (0, n.useEffectEvent)(e => {
                    m && e.preventDefault()
                });
            (0, t.useEffect)(() => {
                m && l.current ? l.current.style.pointerEvents = "none" : l.current.style.pointerEvents = ""
            }, [l, m]), (0, t.useEffect)(() => {
                let e = a.current,
                    t = l.current;
                if (u || !e || !s || "pointer" !== P || !t) return void h();
                d.current = e.getBoundingClientRect();
                let r = e => {
                    if ("touch" === e.pointerType || "pen" === e.pointerType) return;
                    let r = Date.now();
                    if (r - p.current < 50) return;
                    clearTimeout(g.current), clearTimeout(f.current);
                    let {
                        clientX: n,
                        clientY: o
                    } = e;
                    if (!c.current) {
                        c.current = {
                            x: n,
                            y: o
                        };
                        return
                    }
                    if (!d.current) return;
                    if (b.current || (b.current = n > d.current.right ? "left" : "right"), n < t.getBoundingClientRect().left || n > t.getBoundingClientRect().right || o < t.getBoundingClientRect().top || o > t.getBoundingClientRect().bottom) return void h();
                    let l = c.current.x,
                        a = c.current.y,
                        s = "right" === b.current ? d.current.left - l : l - d.current.right,
                        u = Math.atan2(a - d.current.top, s) + i,
                        m = Math.atan2(a - d.current.bottom, s) - i,
                        P = Math.atan2(a - o, "left" === b.current ? -(n - l) : n - l),
                        E = P < u && P > m;
                    v.current = E ? Math.min(v.current + 1, 2) : Math.max(v.current - 1, 0), v.current >= 2 ? y(!0) : y(!1), p.current = r, c.current = {
                        x: n,
                        y: o
                    }, E && (g.current = setTimeout(() => {
                        h(), f.current = setTimeout(() => {
                            let e = document.elementFromPoint(n, o);
                            e && t.contains(e) && e.dispatchEvent(new PointerEvent("pointerover", {
                                bubbles: !0,
                                cancelable: !0
                            }))
                        }, 100)
                    }, 1e3))
                };
                return window.addEventListener("pointermove", r), window.addEventListener("pointerdown", E, !0), () => {
                    window.removeEventListener("pointermove", r), window.removeEventListener("pointerdown", E, !0), clearTimeout(g.current), clearTimeout(f.current), v.current = 2
                }
            }, [u, s, l, P, y, E, a])
        }({
            menuRef: g,
            submenuRef: f,
            isOpen: c.isOpen,
            isDisabled: v
        }), {
            submenuTriggerProps: {
                id: h,
                "aria-controls": c.isOpen ? P : void 0,
                "aria-haspopup": v ? void 0 : b,
                "aria-expanded": c.isOpen ? "true" : "false",
                onPressStart: e => {
                    v || "virtual" !== e.pointerType && "keyboard" !== e.pointerType || S("first")
                },
                onPress: e => {
                    v || "touch" !== e.pointerType && "mouse" !== e.pointerType || S()
                },
                onHoverChange: e => {
                    !v && (e && !c.isOpen ? x.current || (x.current = setTimeout(() => {
                        S()
                    }, m)) : e || C())
                },
                onKeyDown: e => {
                    switch (e.key) {
                        case "ArrowRight":
                            !v && ("ltr" === E ? (e.preventDefault(), c.isOpen || S("first"), "menu" === b && (null == f ? void 0 : f.current) && document.activeElement === (null == d ? void 0 : d.current) && (0, s.focusWithoutScrolling)(f.current)) : c.isOpen ? k() : e.continuePropagation());
                            break;
                        case "ArrowLeft":
                            !v && ("rtl" === E ? (e.preventDefault(), c.isOpen || S("first"), "menu" === b && (null == f ? void 0 : f.current) && document.activeElement === (null == d ? void 0 : d.current) && (0, s.focusWithoutScrolling)(f.current)) : c.isOpen ? k() : e.continuePropagation());
                            break;
                        default:
                            e.continuePropagation()
                    }
                },
                onBlur: e => {
                    var t;
                    c.isOpen && (null == (t = g.current) ? void 0 : t.contains(e.relatedTarget)) && k()
                },
                isOpen: c.isOpen
            },
            submenuProps: R,
            popoverProps: {
                isNonModal: !0,
                shouldCloseOnInteractOutside: e => e !== d.current
            }
        }
    }
    e.s(["useSubmenuTrigger", () => c], 293992);
    let d = new WeakMap;
    var p = e.i(894971),
        g = e.i(336480),
        f = e.i(209389);

    function b(e, t, r) {
        let {
            shouldFocusWrap: n = !0,
            onKeyDown: o,
            onKeyUp: i,
            ...l
        } = e, a = (0, p.filterDOMProps)(e, {
            labelable: !0
        }), {
            listProps: s
        } = (0, f.useSelectableList)({
            ...l,
            ref: r,
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            shouldFocusWrap: n,
            linkBehavior: "override"
        });
        return d.set(t, {
            onClose: e.onClose,
            onAction: e.onAction,
            shouldUseVirtualFocus: e.shouldUseVirtualFocus
        }), {
            menuProps: (0, g.mergeProps)(a, {
                onKeyDown: o,
                onKeyUp: i
            }, {
                role: "menu",
                ...s,
                onKeyDown: t => {
                    var r;
                    ("Escape" !== t.key || e.shouldUseVirtualFocus) && (null == (r = s.onKeyDown) || r.call(s, t))
                }
            })
        }
    }

    function v(e) {
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
    }
    e.s(["useMenu", () => b], 804211), e.s(["useMenuSection", () => v], 484254);
    var m = e.i(471730),
        y = e.i(816188),
        h = e.i(835207),
        P = e.i(804553),
        E = e.i(262233),
        x = e.i(536241),
        C = e.i(451670);

    function S(e, t, r) {
        var n, i;
        let {
            id: a,
            key: s,
            closeOnSelect: u,
            isVirtualized: c,
            "aria-haspopup": f,
            onPressStart: b,
            onPressUp: v,
            onPress: S,
            onPressChange: k,
            onPressEnd: R,
            onHoverStart: T,
            onHoverChange: O,
            onHoverEnd: D,
            onKeyDown: w,
            onKeyUp: M,
            onFocus: F,
            onFocusChange: A,
            onBlur: K,
            selectionManager: L = t.selectionManager
        } = e, I = !!f, B = I && "true" === e["aria-expanded"], U = null != (n = e.isDisabled) ? n : L.isDisabled(s), N = null != (i = e.isSelected) ? i : L.isSelected(s), V = d.get(t), H = t.collection.getItem(s), W = e.onClose || V.onClose, z = (0, m.useRouter)(), j = t => {
            var r;
            !I && ((null == H || null == (r = H.props) ? void 0 : r.onAction) ? H.props.onAction() : e.onAction && e.onAction(s), V.onAction && (0, V.onAction)(s), t.target instanceof HTMLAnchorElement && H && z.open(t.target, t, H.props.href, H.props.routerOptions))
        }, _ = "menuitem";
        I || ("single" === L.selectionMode ? _ = "menuitemradio" : "multiple" === L.selectionMode && (_ = "menuitemcheckbox"));
        let X = (0, l.useSlotId)(),
            Y = (0, l.useSlotId)(),
            q = (0, l.useSlotId)(),
            G = {
                id: a,
                "aria-disabled": U || void 0,
                role: _,
                "aria-label": e["aria-label"],
                "aria-labelledby": X,
                "aria-describedby": [Y, q].filter(Boolean).join(" ") || void 0,
                "aria-controls": e["aria-controls"],
                "aria-haspopup": f,
                "aria-expanded": e["aria-expanded"]
            };
        "none" === L.selectionMode || I || (G["aria-checked"] = N), c && (G["aria-posinset"] = null == H ? void 0 : H.index, G["aria-setsize"] = (0, y.getItemCount)(t.collection));
        let J = () => {
                !I && W && (null != u ? u : "multiple" !== L.selectionMode || L.isLink(s)) && W()
            },
            {
                itemProps: Q,
                isFocused: Z
            } = (0, C.useSelectableItem)({
                id: a,
                selectionManager: L,
                key: s,
                ref: r,
                shouldSelectOnPressUp: !0,
                allowsDifferentPressOrigin: !0,
                linkBehavior: "none",
                shouldUseVirtualFocus: V.shouldUseVirtualFocus
            }),
            {
                pressProps: $,
                isPressed: ee
            } = (0, h.usePress)({
                onPressStart: e => {
                    "keyboard" === e.pointerType && j(e), null == b || b(e)
                },
                onPress: e => {
                    "keyboard" !== e.pointerType && "mouse" !== e.pointerType && (j(e), J()), null == S || S(e)
                },
                onPressUp: e => {
                    "mouse" === e.pointerType && (j(e), J()), null == v || v(e)
                },
                onPressChange: k,
                onPressEnd: R,
                isDisabled: U
            }),
            {
                hoverProps: et
            } = (0, P.useHover)({
                isDisabled: U,
                onHoverStart(e) {
                    (0, o.isFocusVisible)() || B && f || (L.setFocused(!0), L.setFocusedKey(s)), null == T || T(e)
                },
                onHoverChange: O,
                onHoverEnd: D
            }),
            {
                keyboardProps: er
            } = (0, E.useKeyboard)({
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
                            I || e.continuePropagation(), null == w || w(e)
                    }
                },
                onKeyUp: M
            }),
            {
                focusProps: en
            } = (0, x.useFocus)({
                onBlur: K,
                onFocus: F,
                onFocusChange: A
            }),
            eo = (0, p.filterDOMProps)(null == H ? void 0 : H.props);
        delete eo.id;
        let ei = (0, m.useLinkProps)(null == H ? void 0 : H.props);
        return {
            menuItemProps: {
                ...G,
                ...(0, g.mergeProps)(eo, ei, I ? {
                    onFocus: Q.onFocus,
                    "data-collection": Q["data-collection"],
                    "data-key": Q["data-key"]
                } : Q, $, et, er, en, V.shouldUseVirtualFocus || I ? {
                    onMouseDown: e => e.preventDefault()
                } : void 0),
                tabIndex: null != Q.tabIndex && B && !V.shouldUseVirtualFocus ? -1 : Q.tabIndex
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
            isFocusVisible: Z && L.isFocused && (0, o.isFocusVisible)() && !B,
            isSelected: N,
            isPressed: ee,
            isDisabled: U
        }
    }
    e.s(["useMenuItem", () => S], 507589)
}, 946318, e => {
    "use strict";
    e.s(["MenuTrigger", () => P, "RootMenuTriggerStateContext", () => y], 946318);
    var t = e.i(274227),
        r = e.i(329151),
        n = e.i(227836);
    e.i(284606);
    var o = e.i(633781),
        i = e.i(293723);
    e.i(370838), e.i(406800), e.i(547353);
    var l = e.i(849775),
        a = (e.i(293992), e.i(804211), e.i(694421), e.i(484254));
    e.i(507589), e.i(804553), e.i(336480), e.i(962384);
    var s = e.i(924728),
        u = e.i(107579);
    Symbol.iterator;
    var c = e.i(471488),
        d = e.i(824580),
        p = (e.i(918541), e.i(923689), e.i(20935)),
        g = (e.i(629779), e.i(713317), e.i(894971)),
        f = d,
        b = e.i(219641);
    let v = (0, u.createContext)(null),
        m = (0, u.createContext)(null),
        y = (0, u.createContext)(null),
        h = (0, u.createContext)(null);

    function P(e) {
        let t = (0, s.useMenuTriggerState)(e),
            n = (0, u.useRef)(null),
            {
                menuTriggerProps: a,
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
        let m = (0, u.useRef)(null);
        return u.default.createElement(r.Provider, {
            values: [
                [v, {
                    ...c,
                    ref: m
                }],
                [o.OverlayTriggerStateContext, t],
                [y, t],
                [i.PopoverContext, {
                    trigger: "MenuTrigger",
                    triggerRef: n,
                    scrollRef: m,
                    placement: "bottom start",
                    style: {
                        "--trigger-width": d
                    },
                    "aria-labelledby": c["aria-labelledby"]
                }]
            ]
        }, u.default.createElement(b.PressResponder, {
            ...a,
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
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c0bb964c-0900-5384-9a18-da05c1f589e6")
    } catch (e) {}
}();
//# debugId=c0bb964c-0900-5384-9a18-da05c1f589e6