(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 417158, e => {
    "use strict";
    e.i(467211);
    let t = (0, e.i(499531).createContext)({});
    e.s(["KeyboardContext", 0, t])
}, 764933, e => {
    "use strict";
    e.s(["Popover", () => C, "PopoverContext", () => h]);
    var t = e.i(467211),
        r = e.i(830146),
        n = e.i(279079),
        i = e.i(243941),
        o = e.i(672451),
        s = e.i(513976),
        l = e.i(679933),
        a = e.i(799163),
        u = e.i(816862),
        c = e.i(776050),
        d = e.i(429305),
        g = e.i(512985),
        p = e.i(499531),
        f = e.i(863304),
        v = e.i(870053),
        b = e.i(185559),
        y = e.i(876728),
        m = e.i(138381);
    let h = (0, p.createContext)(null),
        P = (0, p.createContext)(null),
        C = (0, p.forwardRef)(function(e, r) {
            [e, r] = (0, t.useContextProps)(e, r, h);
            let i = (0, p.useContext)(n.OverlayTriggerStateContext),
                o = (0, g.useOverlayTriggerState)(e),
                s = null == e.isOpen && null == e.defaultOpen && i ? i : o,
                l = (0, f.useExitAnimation)(r, s.isOpen) || e.isExiting || !1,
                a = (0, v.useIsHidden)(),
                {
                    direction: u
                } = (0, y.useLocale)();
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
            return !s || s.isOpen || l ? p.default.createElement(E, {
                ...e,
                triggerRef: e.triggerRef,
                state: s,
                popoverRef: r,
                isExiting: l,
                dir: u
            }) : null
        });

    function E({
        state: e,
        isExiting: n,
        UNSTABLE_portalContainer: g,
        clearContexts: v,
        ...y
    }) {
        let h = (0, p.useRef)(null),
            C = (0, p.useRef)(null),
            T = (0, p.useContext)(P),
            S = T && "SubmenuTrigger" === y.trigger,
            {
                popoverProps: x,
                underlayProps: R,
                arrowProps: O,
                placement: k,
                triggerAnchorPoint: M
            } = (0, i.usePopover)({
                ...y,
                offset: y.offset ?? 8,
                arrowRef: h,
                groupRef: S ? T : C
            }, e),
            F = y.popoverRef,
            D = (0, f.useEnterAnimation)(F, !!k) || y.isEntering || !1,
            w = (0, t.useRenderProps)({
                ...y,
                defaultClassName: "react-aria-Popover",
                values: {
                    trigger: y.trigger || null,
                    placement: k,
                    isEntering: D,
                    isExiting: n
                }
            }),
            I = !y.isNonModal || "SubmenuTrigger" === y.trigger,
            [A, K] = (0, p.useState)(!1);
        (0, b.useLayoutEffect)(() => {
            F.current && K(I && !F.current.querySelector("[role=dialog]"))
        }, [F, I]), (0, p.useEffect)(() => {
            A && ("SubmenuTrigger" !== y.trigger || "pointer" !== (0, u.getInteractionModality)()) && F.current && !(0, c.isFocusWithin)(F.current) && (0, a.focusSafely)(F.current)
        }, [A, F, y.trigger]);
        let L = (0, p.useMemo)(() => {
                let e = w.children;
                if (v)
                    for (let t of v) e = p.default.createElement(t.Provider, {
                        value: null
                    }, e);
                return e
            }, [w.children, v]),
            [U, B] = (0, p.useState)(null),
            N = (0, p.useCallback)(() => {
                y.triggerRef.current && B(y.triggerRef.current.getBoundingClientRect().width + "px")
            }, [y.triggerRef]);
        (0, b.useLayoutEffect)(N, [N]), (0, m.useResizeObserver)({
            ref: w.style?.["--trigger-width"] ? void 0 : y.triggerRef,
            onResize: N
        });
        let V = {
                ...x.style,
                "--trigger-anchor-point": M ? `${M.x}px ${M.y}px` : void 0,
                ...w.style,
                "--trigger-width": w.style?.["--trigger-width"] || U
            },
            H = p.default.createElement(t.dom.div, {
                ...(0, d.mergeProps)((0, l.filterDOMProps)(y, {
                    global: !0
                }), x),
                ...w,
                role: A ? "dialog" : void 0,
                tabIndex: A ? -1 : void 0,
                "aria-label": y["aria-label"],
                "aria-labelledby": y["aria-labelledby"],
                ref: F,
                slot: y.slot || void 0,
                style: V,
                dir: y.dir,
                "data-trigger": y.trigger,
                "data-placement": k,
                "data-entering": D || void 0,
                "data-exiting": n || void 0
            }, !y.isNonModal && p.default.createElement(o.DismissButton, {
                onDismiss: e.close
            }), p.default.createElement(r.OverlayArrowContext.Provider, {
                value: {
                    ...O,
                    placement: k,
                    ref: h
                }
            }, L), p.default.createElement(o.DismissButton, {
                onDismiss: e.close
            }));
        return S ? p.default.createElement(s.Overlay, {
            ...y,
            shouldContainFocus: A,
            isExiting: n,
            portalContainer: g ?? T?.current ?? void 0
        }, H) : p.default.createElement(s.Overlay, {
            ...y,
            shouldContainFocus: A,
            isExiting: n,
            portalContainer: g
        }, !y.isNonModal && e.isOpen && p.default.createElement("div", {
            "data-testid": "underlay",
            ...R,
            style: {
                position: "fixed",
                inset: 0
            }
        }), p.default.createElement("div", {
            ref: C,
            style: {
                display: "contents"
            }
        }, p.default.createElement(P.Provider, {
            value: C
        }, H)))
    }
}, 391330, e => {
    "use strict";
    var t = e.i(679933),
        r = e.i(799163),
        n = e.i(776050),
        i = e.i(513976),
        o = e.i(823512),
        s = e.i(499531);
    e.s(["useDialog", 0, function(e, l) {
        let {
            role: a = "dialog"
        } = e, u = (0, o.useSlotId)();
        u = e["aria-label"] ? void 0 : u;
        let c = (0, s.useRef)(!1);
        return (0, s.useEffect)(() => {
            if (l.current && !(0, n.isFocusWithin)(l.current)) {
                (0, r.focusSafely)(l.current);
                let e = setTimeout(() => {
                    ((0, n.getActiveElement)() === l.current || (0, n.getActiveElement)() === document.body) && (c.current = !0, l.current && (l.current.blur(), (0, r.focusSafely)(l.current)), c.current = !1)
                }, 500);
                return () => {
                    clearTimeout(e)
                }
            }
        }, [l]), (0, i.useOverlayFocusContain)(), (0, s.useRef)(!1), (0, s.useEffect)(() => {}), {
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
        r = e.i(499531);
    e.s(["useMenuTriggerState", 0, function(e) {
        let n = (0, t.useOverlayTriggerState)(e),
            [i, o] = (0, r.useState)(null),
            [s, l] = (0, r.useState)([]);
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
                l([]), n.close()
            },
            expandedKeysStack: s,
            openSubmenu: (e, t) => {
                l(r => t > r.length ? r : [...r.slice(0, t), e])
            },
            closeSubmenu: (e, t) => {
                l(r => r[t] === e ? r.slice(0, t) : r)
            }
        }
    }])
}, 279079, e => {
    "use strict";
    e.s(["Dialog", () => y, "DialogTrigger", () => b, "OverlayTriggerStateContext", () => v]);
    var t = e.i(27666),
        r = e.i(467211),
        n = e.i(885609),
        i = e.i(764933),
        o = e.i(138065),
        s = e.i(391330),
        l = e.i(679933),
        a = e.i(429305),
        u = e.i(686355),
        c = e.i(499531),
        d = e.i(823512),
        g = e.i(662255),
        p = e.i(468689);
    let f = (0, c.createContext)(null),
        v = (0, c.createContext)(null);

    function b(e) {
        let t = (0, g.useMenuTriggerState)(e),
            n = (0, c.useRef)(null),
            {
                triggerProps: s,
                overlayProps: l
            } = (0, p.useOverlayTrigger)({
                type: "dialog"
            }, t, n);
        return s.id = (0, d.useId)(), l["aria-labelledby"] = s.id, c.default.createElement(r.Provider, {
            values: [
                [v, t],
                [o.RootMenuTriggerStateContext, t],
                [f, l],
                [i.PopoverContext, {
                    trigger: "DialogTrigger",
                    triggerRef: n,
                    "aria-labelledby": l["aria-labelledby"]
                }]
            ]
        }, c.default.createElement(u.PressResponder, {
            ...s,
            ref: n,
            isPressed: t.isOpen
        }, e.children))
    }
    let y = (0, c.forwardRef)(function(e, i) {
        let o = e["aria-labelledby"];
        [e, i] = (0, r.useContextProps)(e, i, f);
        let {
            dialogProps: u,
            titleProps: d
        } = (0, s.useDialog)({
            ...e,
            "aria-labelledby": o
        }, i), g = (0, c.useContext)(v);
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
            b = (0, l.filterDOMProps)(e, {
                global: !0
            });
        return c.default.createElement(r.dom.section, {
            ...(0, a.mergeProps)(b, p, u),
            render: e.render,
            ref: i,
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
}, 162336, 647354, 979235, 650868, e => {
    "use strict";
    var t = e.i(259457),
        r = e.i(776050),
        n = e.i(964059),
        i = e.i(823512),
        o = e.i(185559),
        s = e.i(876728);
    e.i(203217);
    var l = e.i(600939),
        a = e.i(816862),
        u = e.i(138381),
        c = e.i(499531);
    let d = Math.PI / 12;
    e.s(["useSubmenuTrigger", 0, function(e, g, p) {
        let {
            parentMenuRef: f,
            submenuRef: v,
            type: b = "menu",
            isDisabled: y,
            delay: m = 200,
            shouldUseVirtualFocus: h
        } = e, P = (0, i.useId)(), C = (0, i.useId)(), {
            direction: E
        } = (0, s.useLocale)(), T = (0, c.useRef)(void 0), S = (0, c.useCallback)(() => {
            T.current && (clearTimeout(T.current), T.current = void 0)
        }, [T]), x = (0, c.useCallback)(e => {
            S(), g.open(e)
        }, [g, S]), R = (0, c.useCallback)(() => {
            S(), g.close()
        }, [g, S]);
        (0, o.useLayoutEffect)(() => () => {
            S()
        }, [S]);
        let O = {
            id: C,
            "aria-labelledby": P,
            submenuLevel: g.submenuLevel,
            ..."menu" === b && {
                onClose: g.closeAll,
                autoFocus: g.focusStrategy ?? void 0,
                onKeyDown: e => {
                    if ((0, r.isFocusWithin)(e.currentTarget)) switch (e.key) {
                        case "ArrowLeft":
                            "ltr" === E && (0, r.nodeContains)(e.currentTarget, (0, r.getEventTarget)(e)) && (e.preventDefault(), e.stopPropagation(), R(), !h && p.current && (0, t.focusWithoutScrolling)(p.current));
                            break;
                        case "ArrowRight":
                            "rtl" === E && (0, r.nodeContains)(e.currentTarget, (0, r.getEventTarget)(e)) && (e.preventDefault(), e.stopPropagation(), R(), !h && p.current && (0, t.focusWithoutScrolling)(p.current));
                            break;
                        case "Escape":
                            (0, r.nodeContains)(v.current, (0, r.getEventTarget)(e)) && (e.stopPropagation(), R(), !h && p.current && (0, t.focusWithoutScrolling)(p.current))
                    }
                }
            }
        };
        return (0, n.useEvent)(f, "focusin", e => {
            g.isOpen && (0, r.nodeContains)(f.current, (0, r.getEventTarget)(e)) && (0, r.getEventTarget)(e) !== p.current && R()
        }), ! function(e) {
            let {
                menuRef: t,
                submenuRef: n,
                isOpen: i,
                isDisabled: s
            } = e, g = (0, c.useRef)(void 0), p = (0, c.useRef)(void 0), f = (0, c.useRef)(0), v = (0, c.useRef)(void 0), b = (0, c.useRef)(void 0), y = (0, c.useRef)(void 0), m = (0, c.useRef)(2), [h, P] = (0, c.useState)(!1);
            (0, u.useResizeObserver)({
                ref: i ? n : void 0,
                onResize: () => {
                    n.current && (p.current = n.current.getBoundingClientRect(), y.current = void 0)
                }
            });
            let C = () => {
                    P(!1), m.current = 2, g.current = void 0
                },
                E = (0, a.useInteractionModality)(),
                T = (0, l.useEffectEvent)(e => {
                    h && e.preventDefault()
                });
            (0, c.useEffect)(() => {
                h && t.current ? t.current.style.pointerEvents = "none" : t.current.style.pointerEvents = ""
            }, [t, h]), (0, o.useLayoutEffect)(() => {
                let e = n.current,
                    o = t.current;
                if (s || !e || !i || "pointer" !== E || !o) return void C();
                p.current = e.getBoundingClientRect();
                let l = e => {
                    if ("touch" === e.pointerType || "pen" === e.pointerType) return;
                    let t = Date.now();
                    if (t - f.current < 50) return;
                    clearTimeout(v.current), clearTimeout(b.current);
                    let {
                        clientX: n,
                        clientY: i
                    } = e;
                    if (!g.current) {
                        g.current = {
                            x: n,
                            y: i
                        };
                        return
                    }
                    if (!p.current) return;
                    if (y.current || (y.current = n > p.current.right ? "left" : "right"), n < o.getBoundingClientRect().left || n > o.getBoundingClientRect().right || i < o.getBoundingClientRect().top || i > o.getBoundingClientRect().bottom) return void C();
                    let s = g.current.x,
                        l = g.current.y,
                        a = "right" === y.current ? p.current.left - s : s - p.current.right,
                        u = Math.atan2(l - p.current.top, a) + d,
                        c = Math.atan2(l - p.current.bottom, a) - d,
                        h = Math.atan2(l - i, "left" === y.current ? -(n - s) : n - s),
                        E = h < u && h > c;
                    m.current = E ? Math.min(m.current + 1, 2) : Math.max(m.current - 1, 0), m.current >= 2 ? P(!0) : P(!1), f.current = t, g.current = {
                        x: n,
                        y: i
                    }, E && (v.current = setTimeout(() => {
                        C(), b.current = setTimeout(() => {
                            let e = document.elementFromPoint(n, i);
                            e && (0, r.nodeContains)(o, e) && e.dispatchEvent(new PointerEvent("pointerover", {
                                bubbles: !0,
                                cancelable: !0
                            }))
                        }, 100)
                    }, 1e3))
                };
                return window.addEventListener("pointermove", l), window.addEventListener("pointerdown", T, !0), () => {
                    window.removeEventListener("pointermove", l), window.removeEventListener("pointerdown", T, !0), clearTimeout(v.current), clearTimeout(b.current), m.current = 2
                }
            }, [s, i, t, E, P, n])
        }({
            menuRef: f,
            submenuRef: v,
            isOpen: g.isOpen,
            isDisabled: y
        }), {
            submenuTriggerProps: {
                id: P,
                "aria-controls": g.isOpen ? C : void 0,
                "aria-haspopup": y ? void 0 : b,
                "aria-expanded": g.isOpen ? "true" : "false",
                onPressStart: e => {
                    y || "virtual" !== e.pointerType && "keyboard" !== e.pointerType || x("first")
                },
                onPress: e => {
                    y || "touch" !== e.pointerType && "mouse" !== e.pointerType || x()
                },
                onHoverChange: e => {
                    !y && (e && !g.isOpen ? T.current || (T.current = setTimeout(() => {
                        x()
                    }, m)) : e || S())
                },
                onKeyDown: e => {
                    switch (e.key) {
                        case "ArrowRight":
                            !y && ("ltr" === E ? (e.preventDefault(), g.isOpen || x("first"), "menu" === b && v?.current && (0, r.getActiveElement)() === p?.current && (0, t.focusWithoutScrolling)(v.current)) : g.isOpen ? R() : e.continuePropagation());
                            break;
                        case "ArrowLeft":
                            !y && ("rtl" === E ? (e.preventDefault(), g.isOpen || x("first"), "menu" === b && v?.current && (0, r.getActiveElement)() === p?.current && (0, t.focusWithoutScrolling)(v.current)) : g.isOpen ? R() : e.continuePropagation());
                            break;
                        default:
                            e.continuePropagation()
                    }
                },
                isOpen: g.isOpen
            },
            submenuProps: O,
            popoverProps: {
                isNonModal: !0,
                shouldCloseOnInteractOutside: e => e !== p.current
            }
        }
    }], 162336);
    var g = e.i(679933);
    let p = new WeakMap;
    var f = e.i(429305),
        v = e.i(493244);
    e.s(["useMenu", 0, function(e, t, r) {
        let {
            shouldFocusWrap: n = !0,
            onKeyDown: i,
            onKeyUp: o,
            ...s
        } = e, l = (0, g.filterDOMProps)(e, {
            labelable: !0
        }), {
            listProps: a
        } = (0, v.useSelectableList)({
            ...s,
            ref: r,
            selectionManager: t.selectionManager,
            collection: t.collection,
            disabledKeys: t.disabledKeys,
            shouldFocusWrap: n,
            linkBehavior: "override"
        });
        return p.set(t, {
            onClose: e.onClose,
            onAction: e.onAction,
            shouldUseVirtualFocus: e.shouldUseVirtualFocus
        }), {
            menuProps: (0, f.mergeProps)(l, {
                onKeyDown: i,
                onKeyUp: o
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
        } = e, n = (0, i.useId)();
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
    }], 979235);
    var b = e.i(97584),
        y = e.i(513485),
        m = e.i(355770),
        h = e.i(290005),
        P = e.i(629959),
        C = e.i(515715),
        E = e.i(511607);
    e.s(["useMenuItem", 0, function(e, t, n) {
        let {
            id: o,
            key: s,
            closeOnSelect: l,
            shouldCloseOnSelect: u,
            isVirtualized: d,
            "aria-haspopup": v,
            onPressStart: T,
            onPressUp: S,
            onPress: x,
            onPressChange: R,
            onPressEnd: O,
            onClick: k,
            onHoverStart: M,
            onHoverChange: F,
            onHoverEnd: D,
            onKeyDown: w,
            onKeyUp: I,
            onFocus: A,
            onFocusChange: K,
            onBlur: L,
            selectionManager: U = t.selectionManager
        } = e, B = !!v, N = B && "true" === e["aria-expanded"], V = e.isDisabled ?? U.isDisabled(s), H = e.isSelected ?? U.isSelected(s), W = p.get(t), z = t.collection.getItem(s), _ = e.onClose || W.onClose, j = (0, b.useRouter)(), $ = "menuitem";
        B || ("single" === U.selectionMode ? $ = "menuitemradio" : "multiple" === U.selectionMode && ($ = "menuitemcheckbox"));
        let q = (0, i.useSlotId)(),
            X = (0, i.useSlotId)(),
            Y = (0, i.useSlotId)(),
            G = {
                id: o,
                "aria-disabled": V || void 0,
                role: $,
                "aria-label": e["aria-label"],
                "aria-labelledby": q,
                "aria-describedby": [e["aria-describedby"], X, Y].filter(Boolean).join(" ") || void 0,
                "aria-controls": e["aria-controls"],
                "aria-haspopup": v,
                "aria-expanded": e["aria-expanded"]
            };
        if ("none" === U.selectionMode || B || (G["aria-checked"] = H), d) {
            let e = Number(z?.index);
            G["aria-posinset"] = Number.isNaN(e) ? void 0 : e + 1, G["aria-setsize"] = (0, E.getItemCount)(t.collection)
        }
        let J = (0, c.useRef)(!1),
            Q = (0, c.useRef)(null),
            {
                itemProps: Z,
                isFocused: ee
            } = (0, C.useSelectableItem)({
                id: o,
                selectionManager: U,
                key: s,
                ref: n,
                shouldSelectOnPressUp: !0,
                allowsDifferentPressOrigin: !0,
                linkBehavior: "none",
                shouldUseVirtualFocus: W.shouldUseVirtualFocus
            }),
            {
                pressProps: et,
                isPressed: er
            } = (0, P.usePress)({
                onPressStart: T,
                onPress: x,
                onPressUp: e => {
                    "keyboard" !== e.pointerType && (Q.current = {
                        pointerType: e.pointerType
                    }), "mouse" !== e.pointerType || J.current || e.target.click(), S?.(e)
                },
                onPressChange: e => {
                    R?.(e), J.current = e
                },
                onPressEnd: O,
                isDisabled: V
            }),
            {
                hoverProps: en
            } = (0, m.useHover)({
                isDisabled: V,
                onHoverStart(e) {
                    (0, a.isFocusVisible)() || N && v || (U.setFocused(!0), U.setFocusedKey(s)), M?.(e)
                },
                onHoverChange: F,
                onHoverEnd: D
            }),
            {
                keyboardProps: ei
            } = (0, h.useKeyboard)({
                onKeyDown: e => {
                    if (e.repeat) return void e.continuePropagation();
                    switch (e.key) {
                        case " ":
                            Q.current = {
                                pointerType: "keyboard",
                                key: " "
                            }, (0, r.getEventTarget)(e).click(), (0, a.setInteractionModality)("keyboard");
                            break;
                        case "Enter":
                            Q.current = {
                                pointerType: "keyboard",
                                key: "Enter"
                            }, "A" !== (0, r.getEventTarget)(e).tagName && (0, r.getEventTarget)(e).click(), (0, a.setInteractionModality)("keyboard");
                            break;
                        default:
                            B || e.continuePropagation(), w?.(e)
                    }
                },
                onKeyUp: I
            }),
            {
                focusableProps: eo
            } = (0, y.useFocusable)({
                onBlur: L,
                onFocus: A,
                onFocusChange: K
            }, n),
            es = (0, g.filterDOMProps)(z?.props);
        delete es.id;
        let el = (0, b.useLinkProps)(z?.props);
        return {
            menuItemProps: {
                ...G,
                ...(0, f.mergeProps)(es, el, B ? {
                    onFocus: Z.onFocus,
                    "data-collection": Z["data-collection"],
                    "data-key": Z["data-key"]
                } : Z, et, en, ei, eo, W.shouldUseVirtualFocus || B ? {
                    onMouseDown: e => e.preventDefault()
                } : void 0, V ? void 0 : {
                    onClick: t => {
                        k?.(t), !B && (z?.props?.onAction ? z.props.onAction() : e.onAction && e.onAction(s), W.onAction && (0, W.onAction)(s, z?.value)), (0, b.handleLinkClick)(t, j, z.props.href, z?.props.routerOptions);
                        let r = Q.current?.pointerType === "keyboard" ? Q.current?.key === "Enter" || "none" === U.selectionMode || U.isLink(s) : "multiple" !== U.selectionMode || U.isLink(s);
                        r = u ?? l ?? r, _ && !B && r && _(), Q.current = null
                    }
                }),
                tabIndex: null != Z.tabIndex && N && !W.shouldUseVirtualFocus ? -1 : Z.tabIndex
            },
            labelProps: {
                id: q
            },
            descriptionProps: {
                id: X
            },
            keyboardShortcutProps: {
                id: Y
            },
            isFocused: ee,
            isFocusVisible: ee && U.isFocused && (0, a.isFocusVisible)() && !N,
            isSelected: H,
            isPressed: er,
            isDisabled: V
        }
    }], 650868)
}, 138065, e => {
    "use strict";
    e.s(["MenuTrigger", () => P, "RootMenuTriggerStateContext", () => m], 138065);
    var t = e.i(467211),
        r = e.i(312645),
        n = (e.i(185935), e.i(446246));
    e.i(417158);
    var i = e.i(279079),
        o = e.i(764933);
    e.i(526788), e.i(838123), e.i(605561), e.i(468069);
    var s = e.i(629080),
        l = (e.i(162336), e.i(647354), e.i(979235));
    e.i(650868);
    var a = e.i(897408),
        u = e.i(662255),
        c = e.i(499531);
    e.i(654995);
    var d = e.i(679933),
        g = (e.i(675815), e.i(429305)),
        p = e.i(686355),
        f = e.i(85434);
    Symbol.iterator, e.i(485286), e.i(803258);
    e.i(184831);
    e.i(355770);
    var v = e.i(870053);
    e.i(838031);
    let b = (0, c.createContext)(null),
        y = (0, c.createContext)(null),
        m = (0, c.createContext)(null),
        h = (0, c.createContext)(null);

    function P(e) {
        let r = (0, u.useMenuTriggerState)(e),
            n = (0, c.useRef)(null),
            {
                menuTriggerProps: l,
                menuProps: a
            } = (0, s.useMenuTrigger)({
                ...e,
                type: "menu"
            }, r, n),
            d = (0, c.useRef)(null);
        return (0, v.useIsHidden)() ? null : c.default.createElement(t.Provider, {
            values: [
                [b, {
                    ...a,
                    ref: d
                }],
                [i.OverlayTriggerStateContext, r],
                [m, r],
                [o.PopoverContext, {
                    trigger: "MenuTrigger",
                    triggerRef: n,
                    scrollRef: d,
                    placement: "bottom start",
                    "aria-labelledby": a["aria-labelledby"]
                }]
            ]
        }, c.default.createElement(p.PressResponder, {
            ...l,
            ref: n,
            isPressed: r.isOpen
        }, e.children))
    }
    class C extends a.CollectionNode {
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
    class E extends f.SelectionManager {
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