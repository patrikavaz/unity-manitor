(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 233757, e => {
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
    var t = e.i(500783),
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
        variant: i = "default",
        children: o
    }) => {
        let l = n[i],
            a = (0, r.default)("relative mango-text-caption-md rounded-lg px-2 py-1 uppercase animated-border", "text-black dark:text-white", e);
        return (0, t.jsxs)("div", {
            "aria-label": o,
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
                children: o
            })]
        })
    }], 544789)
}, 741499, e => {
    "use strict";
    e.i(162696);
    let t = (0, e.i(3931).createContext)({});
    e.s(["KeyboardContext", 0, t])
}, 206956, e => {
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
                ref: o,
                "data-placement": l
            })
        });
    e.s(["OverlayArrow", 0, o, "OverlayArrowContext", 0, i])
}, 685171, e => {
    "use strict";
    var t = e.i(237483),
        r = e.i(973914),
        n = e.i(3931);

    function i(e, n, i) {
        (0, t.useLayoutEffect)(() => {
            if (n && e.current) {
                if (!("getAnimations" in e.current)) return void i();
                let t = e.current.getAnimations();
                if (0 === t.length) return void i();
                let n = !1;
                return Promise.all(t.map(e => e.finished)).then(() => {
                    n || (0, r.flushSync)(() => {
                        i()
                    })
                }).catch(() => {}), () => {
                    n = !0
                }
            }
        }, [e, n, i])
    }
    e.s(["useEnterAnimation", 0, function(e, r = !0) {
        let [o, l] = (0, n.useState)(!0), a = o && r;
        return (0, t.useLayoutEffect)(() => {
            if (a && e.current && "getAnimations" in e.current)
                for (let t of e.current.getAnimations()) t instanceof CSSTransition && t.cancel()
        }, [e, a]), i(e, a, (0, n.useCallback)(() => l(!1), [])), a
    }, "useExitAnimation", 0, function(e, t) {
        let [r, o] = (0, n.useState)(t ? "open" : "closed");
        switch (r) {
            case "open":
                t || o("exiting");
                break;
            case "closed":
            case "exiting":
                t && o("open")
        }
        let l = "exiting" === r;
        return i(e, l, (0, n.useCallback)(() => {
            o(e => "exiting" === e ? "closed" : e)
        }, [])), l
    }])
}, 820374, e => {
    "use strict";
    e.s(["Popover", () => y, "PopoverContext", () => v]);
    var t = e.i(162696),
        r = e.i(206956),
        n = e.i(576855),
        i = e.i(754894),
        o = e.i(92257),
        l = e.i(23953),
        a = e.i(460261),
        s = e.i(685171),
        u = e.i(237483),
        c = e.i(604082),
        d = e.i(339206),
        p = e.i(743456),
        g = e.i(459236),
        f = e.i(3931),
        b = e.i(143822);
    let v = (0, f.createContext)(null),
        m = (0, f.createContext)(null),
        y = (0, f.forwardRef)(function(e, r) {
            [e, r] = (0, t.useContextProps)(e, r, v);
            let o = (0, f.useContext)(n.OverlayTriggerStateContext),
                l = (0, g.useOverlayTriggerState)(e),
                a = null == e.isOpen && null == e.defaultOpen && o ? o : l,
                u = (0, s.useExitAnimation)(r, a.isOpen) || e.isExiting || !1,
                c = (0, b.useIsHidden)(),
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
        UNSTABLE_portalContainer: i,
        clearContexts: g,
        ...b
    }) {
        var v, y;
        let P = (0, f.useRef)(null),
            [E, x] = (0, f.useState)(0),
            C = (0, f.useRef)(null),
            S = (0, f.useContext)(m),
            k = S && "SubmenuTrigger" === b.trigger;
        (0, u.useLayoutEffect)(() => {
            P.current && e.isOpen && x(P.current.getBoundingClientRect().width)
        }, [e.isOpen, P]);
        let {
            popoverProps: R,
            underlayProps: O,
            arrowProps: T,
            placement: D
        } = (0, o.usePopover)({
            ...b,
            offset: null != (v = b.offset) ? v : 8,
            arrowSize: E,
            groupRef: k ? S : C
        }, e), w = b.popoverRef, M = (0, s.useEnterAnimation)(w, !!D) || b.isEntering || !1, F = (0, t.useRenderProps)({
            ...b,
            defaultClassName: "react-aria-Popover",
            values: {
                trigger: b.trigger || null,
                placement: D,
                isEntering: M,
                isExiting: n
            }
        }), A = !b.isNonModal || "SubmenuTrigger" === b.trigger, [K, L] = (0, f.useState)(!1);
        (0, u.useLayoutEffect)(() => {
            w.current && L(A && !w.current.querySelector("[role=dialog]"))
        }, [w, A]), (0, f.useEffect)(() => {
            K && w.current && !w.current.contains(document.activeElement) && (0, p.focusSafely)(w.current)
        }, [K, w]);
        let I = (0, f.useMemo)(() => {
                let e = F.children;
                if (g)
                    for (let t of g) e = f.default.createElement(t.Provider, {
                        value: null
                    }, e);
                return e
            }, [F.children, g]),
            U = {
                ...R.style,
                ...F.style
            },
            B = f.default.createElement("div", {
                ...(0, c.mergeProps)((0, d.filterDOMProps)(b), R),
                ...F,
                role: K ? "dialog" : void 0,
                tabIndex: K ? -1 : void 0,
                "aria-label": b["aria-label"],
                "aria-labelledby": b["aria-labelledby"],
                ref: w,
                slot: b.slot || void 0,
                style: U,
                dir: b.dir,
                "data-trigger": b.trigger,
                "data-placement": D,
                "data-entering": M || void 0,
                "data-exiting": n || void 0
            }, !b.isNonModal && f.default.createElement(l.DismissButton, {
                onDismiss: e.close
            }), f.default.createElement(r.OverlayArrowContext.Provider, {
                value: {
                    ...T,
                    placement: D,
                    ref: P
                }
            }, I), f.default.createElement(l.DismissButton, {
                onDismiss: e.close
            }));
        return k ? f.default.createElement(a.Overlay, {
            ...b,
            shouldContainFocus: K,
            isExiting: n,
            portalContainer: null != (y = null != i ? i : null == S ? void 0 : S.current) ? y : void 0
        }, B) : f.default.createElement(a.Overlay, {
            ...b,
            shouldContainFocus: K,
            isExiting: n,
            portalContainer: i
        }, !b.isNonModal && e.isOpen && f.default.createElement("div", {
            "data-testid": "underlay",
            ...O,
            style: {
                position: "fixed",
                inset: 0
            }
        }), f.default.createElement("div", {
            ref: C,
            style: {
                display: "contents"
            }
        }, f.default.createElement(m.Provider, {
            value: C
        }, B)))
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
            role: a = "dialog"
        } = e, s = (0, t.useSlotId)();
        s = e["aria-label"] ? void 0 : s;
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
    }])
}, 189668, e => {
    "use strict";
    var t = e.i(459236),
        r = e.i(3931);
    e.s(["useMenuTriggerState", 0, function(e) {
        let n = (0, t.useOverlayTriggerState)(e),
            [i, o] = (0, r.useState)(null),
            [l, a] = (0, r.useState)([]);
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
    }])
}, 576855, e => {
    "use strict";
    e.s(["Dialog", () => m, "DialogTrigger", () => v, "OverlayTriggerStateContext", () => b]);
    var t = e.i(433721),
        r = e.i(162696),
        n = e.i(619379),
        i = e.i(820374),
        o = e.i(596199),
        l = e.i(441157),
        a = e.i(231781),
        s = e.i(331942),
        u = e.i(506275),
        c = e.i(339206),
        d = e.i(189668),
        p = e.i(548878),
        g = e.i(3931);
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
                [o.RootMenuTriggerStateContext, t],
                [f, c],
                [i.PopoverContext, {
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
    let m = (0, g.forwardRef)(function(e, i) {
        let o = e["aria-labelledby"];
        [e, i] = (0, r.useContextProps)(e, i, f);
        let {
            dialogProps: l,
            titleProps: a
        } = (0, s.useDialog)({
            ...e,
            "aria-labelledby": o
        }, i), u = (0, g.useContext)(b);
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
}, 821887, 849635, 798340, 246637, e => {
    "use strict";
    e.i(788727);
    var t = e.i(3931),
        r = e.i(506275),
        n = e.i(123714),
        i = e.i(427651);
    let o = Math.PI / 12;
    var l = e.i(231781),
        a = e.i(237483),
        s = e.i(256630),
        u = e.i(754894);
    e.s(["useSubmenuTrigger", 0, function(e, c, d) {
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
                P = (0, i.useInteractionModality)(),
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
                    if (b.current || (b.current = n > d.current.right ? "left" : "right"), n < t.getBoundingClientRect().left || n > t.getBoundingClientRect().right || i < t.getBoundingClientRect().top || i > t.getBoundingClientRect().bottom) return void h();
                    let l = c.current.x,
                        a = c.current.y,
                        s = "right" === b.current ? d.current.left - l : l - d.current.right,
                        u = Math.atan2(a - d.current.top, s) + o,
                        m = Math.atan2(a - d.current.bottom, s) - o,
                        P = Math.atan2(a - i, "left" === b.current ? -(n - l) : n - l),
                        E = P < u && P > m;
                    v.current = E ? Math.min(v.current + 1, 2) : Math.max(v.current - 1, 0), v.current >= 2 ? y(!0) : y(!1), p.current = r, c.current = {
                        x: n,
                        y: i
                    }, E && (g.current = setTimeout(() => {
                        h(), f.current = setTimeout(() => {
                            let e = document.elementFromPoint(n, i);
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
        } = e, a = (0, d.filterDOMProps)(e, {
            labelable: !0
        }), {
            listProps: s
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
            menuProps: (0, p.mergeProps)(a, {
                onKeyDown: i,
                onKeyUp: o
            }, {
                role: "menu",
                ...s,
                onKeyDown: t => {
                    var r;
                    ("Escape" !== t.key || e.shouldUseVirtualFocus) && (null == (r = s.onKeyDown) || r.call(s, t))
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
        b = e.i(580867),
        v = e.i(212299),
        m = e.i(897884),
        y = e.i(349290),
        h = e.i(582374),
        P = e.i(389261);
    e.s(["useMenuItem", 0, function(e, t, r) {
        var n, o;
        let {
            id: a,
            key: s,
            closeOnSelect: u,
            isVirtualized: g,
            "aria-haspopup": E,
            onPressStart: x,
            onPressUp: C,
            onPress: S,
            onPressChange: k,
            onPressEnd: R,
            onHoverStart: O,
            onHoverChange: T,
            onHoverEnd: D,
            onKeyDown: w,
            onKeyUp: M,
            onFocus: F,
            onFocusChange: A,
            onBlur: K,
            selectionManager: L = t.selectionManager
        } = e, I = !!E, U = I && "true" === e["aria-expanded"], B = null != (n = e.isDisabled) ? n : L.isDisabled(s), N = null != (o = e.isSelected) ? o : L.isSelected(s), V = c.get(t), H = t.collection.getItem(s), z = e.onClose || V.onClose, W = (0, f.useRouter)(), j = t => {
            var r;
            !I && ((null == H || null == (r = H.props) ? void 0 : r.onAction) ? H.props.onAction() : e.onAction && e.onAction(s), V.onAction && (0, V.onAction)(s), t.target instanceof HTMLAnchorElement && H && W.open(t.target, t, H.props.href, H.props.routerOptions))
        }, _ = "menuitem";
        I || ("single" === L.selectionMode ? _ = "menuitemradio" : "multiple" === L.selectionMode && (_ = "menuitemcheckbox"));
        let X = (0, l.useSlotId)(),
            Y = (0, l.useSlotId)(),
            $ = (0, l.useSlotId)(),
            q = {
                id: a,
                "aria-disabled": B || void 0,
                role: _,
                "aria-label": e["aria-label"],
                "aria-labelledby": X,
                "aria-describedby": [Y, $].filter(Boolean).join(" ") || void 0,
                "aria-controls": e["aria-controls"],
                "aria-haspopup": E,
                "aria-expanded": e["aria-expanded"]
            };
        "none" === L.selectionMode || I || (q["aria-checked"] = N), g && (q["aria-posinset"] = null == H ? void 0 : H.index, q["aria-setsize"] = (0, b.getItemCount)(t.collection));
        let G = () => {
                !I && z && (null != u ? u : "multiple" !== L.selectionMode || L.isLink(s)) && z()
            },
            {
                itemProps: J,
                isFocused: Q
            } = (0, P.useSelectableItem)({
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
                pressProps: Z,
                isPressed: ee
            } = (0, v.usePress)({
                onPressStart: e => {
                    "keyboard" === e.pointerType && j(e), null == x || x(e)
                },
                onPress: e => {
                    "keyboard" !== e.pointerType && "mouse" !== e.pointerType && (j(e), G()), null == S || S(e)
                },
                onPressUp: e => {
                    "mouse" === e.pointerType && (j(e), G()), null == C || C(e)
                },
                onPressChange: k,
                onPressEnd: R,
                isDisabled: B
            }),
            {
                hoverProps: et
            } = (0, m.useHover)({
                isDisabled: B,
                onHoverStart(e) {
                    (0, i.isFocusVisible)() || U && E || (L.setFocused(!0), L.setFocusedKey(s)), null == O || O(e)
                },
                onHoverChange: T,
                onHoverEnd: D
            }),
            {
                keyboardProps: er
            } = (0, y.useKeyboard)({
                onKeyDown: e => {
                    if (e.repeat) return void e.continuePropagation();
                    switch (e.key) {
                        case " ":
                            B || "none" !== L.selectionMode || I || !1 === u || !z || z();
                            break;
                        case "Enter":
                            B || !1 === u || I || !z || z();
                            break;
                        default:
                            I || e.continuePropagation(), null == w || w(e)
                    }
                },
                onKeyUp: M
            }),
            {
                focusProps: en
            } = (0, h.useFocus)({
                onBlur: K,
                onFocus: F,
                onFocusChange: A
            }),
            ei = (0, d.filterDOMProps)(null == H ? void 0 : H.props);
        delete ei.id;
        let eo = (0, f.useLinkProps)(null == H ? void 0 : H.props);
        return {
            menuItemProps: {
                ...q,
                ...(0, p.mergeProps)(ei, eo, I ? {
                    onFocus: J.onFocus,
                    "data-collection": J["data-collection"],
                    "data-key": J["data-key"]
                } : J, Z, et, er, en, V.shouldUseVirtualFocus || I ? {
                    onMouseDown: e => e.preventDefault()
                } : void 0),
                tabIndex: null != J.tabIndex && U && !V.shouldUseVirtualFocus ? -1 : J.tabIndex
            },
            labelProps: {
                id: X
            },
            descriptionProps: {
                id: Y
            },
            keyboardShortcutProps: {
                id: $
            },
            isFocused: Q,
            isFocusVisible: Q && L.isFocused && (0, i.isFocusVisible)() && !U,
            isSelected: N,
            isPressed: ee,
            isDisabled: B
        }
    }], 246637)
}, 596199, e => {
    "use strict";
    e.s(["MenuTrigger", () => P, "RootMenuTriggerStateContext", () => y], 596199);
    var t = e.i(58067),
        r = e.i(162696),
        n = e.i(40717);
    e.i(741499);
    var i = e.i(576855),
        o = e.i(820374);
    e.i(974683), e.i(532969), e.i(369112);
    var l = e.i(841811),
        a = (e.i(821887), e.i(849635), e.i(102893), e.i(798340));
    e.i(246637), e.i(897884), e.i(604082), e.i(327143);
    var s = e.i(189668),
        u = e.i(3931);
    Symbol.iterator;
    var c = e.i(564306),
        d = e.i(666119),
        p = (e.i(240522), e.i(201373), e.i(506275)),
        g = (e.i(166010), e.i(356855), e.i(339206)),
        f = d,
        b = e.i(548878);
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
                [i.OverlayTriggerStateContext, t],
                [y, t],
                [o.PopoverContext, {
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
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3913e700-7657-5fc0-a8c8-a00ed24e4a34")
    } catch (e) {}
}();
//# debugId=3913e700-7657-5fc0-a8c8-a00ed24e4a34