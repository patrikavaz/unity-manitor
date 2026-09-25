(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 849141, e => {
    "use strict";
    e.i(913836);
    let a = async () => {
        let e = await fetch("https://api.unity.com/v1/oauth2/authorize/logined-users", {
                credentials: "include"
            }),
            a = await e.json();
        if (!e.ok) throw Error(`Fetching user failed with status ${e.status}. Reason: ${JSON.stringify(a.details)}`);
        return a.model
    };
    e.s(["getUserFromGenesis", 0, a])
}, 243306, e => {
    "use strict";
    var a = e.i(409781),
        t = e.i(848662);
    let r = new Map([
            ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"
            }))],
            ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M216,56V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V56A16,16,0,0,1,56,40H200A16,16,0,0,1,216,56Z",
                opacity: "0.2"
            }), a.createElement("path", {
                d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM181.66,170.34a8,8,0,0,1-11.32,11.32L128,139.31,85.66,181.66a8,8,0,0,1-11.32-11.32L116.69,128,74.34,85.66A8,8,0,0,1,85.66,74.34L128,116.69l42.34-42.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M204.24,195.76a6,6,0,1,1-8.48,8.48L128,136.49,60.24,204.24a6,6,0,0,1-8.48-8.48L119.51,128,51.76,60.24a6,6,0,0,1,8.48-8.48L128,119.51l67.76-67.75a6,6,0,0,1,8.48,8.48L136.49,128Z"
            }))],
            ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                d: "M202.83,197.17a4,4,0,0,1-5.66,5.66L128,133.66,58.83,202.83a4,4,0,0,1-5.66-5.66L122.34,128,53.17,58.83a4,4,0,0,1,5.66-5.66L128,122.34l69.17-69.17a4,4,0,1,1,5.66,5.66L133.66,128Z"
            }))]
        ]),
        n = a.forwardRef((e, n) => a.createElement(t.default, {
            ref: n,
            ...e,
            weights: r
        }));
    n.displayName = "XIcon", e.s(["X", 0, n, "XIcon", 0, n], 243306)
}, 979429, e => {
    "use strict";
    var a = e.i(467211),
        t = e.i(468069),
        r = e.i(679933),
        n = e.i(409781);
    let l = (0, n.createContext)(null),
        o = (0, n.forwardRef)(function(e, a) {
            let t = (0, n.useContext)(l);
            return t?.isInvalid ? n.default.createElement(i, {
                ...e,
                ref: a
            }) : null
        }),
        i = (0, n.forwardRef)((e, o) => {
            let i = (0, n.useContext)(l),
                {
                    elementType: d,
                    ...s
                } = e,
                c = (0, r.filterDOMProps)(s, {
                    global: !0
                }),
                m = (0, a.useRenderProps)({
                    ...s,
                    defaultClassName: "react-aria-FieldError",
                    defaultChildren: 0 === i.validationErrors.length ? void 0 : i.validationErrors.join(" "),
                    values: i
                });
            return null == m.children ? null : n.default.createElement(t.Text, {
                slot: "errorMessage",
                elementType: d,
                ...c,
                ...m,
                ref: o
            })
        });
    e.s(["FieldError", 0, o, "FieldErrorContext", 0, l])
}, 47232, e => {
    "use strict";
    e.i(467211), e.i(251635);
    let a = (0, e.i(409781).createContext)(null);
    e.s(["FormContext", 0, a])
}, 742482, e => {
    "use strict";
    var a = e.i(467211),
        t = e.i(312645),
        r = e.i(409781);
    let n = (0, r.createContext)({}),
        l = (0, r.createContext)(null),
        o = (0, r.forwardRef)(function(e, a) {
            let {
                render: t
            } = (0, r.useContext)(l);
            return r.default.createElement(r.default.Fragment, null, t(e, a))
        });

    function i(e, a) {
        let t = e?.renderDropIndicator,
            n = e?.isVirtualDragging?.(),
            l = (0, r.useCallback)(e => {
                if (n || a?.isDropTarget(e)) return t ? t(e) : r.default.createElement(o, {
                    target: e
                })
            }, [a?.target, n, t]);
        return e?.useDropIndicator ? l : void 0
    }
    var d = e.i(446246),
        s = e.i(185935),
        c = e.i(526788),
        m = e.i(838123),
        g = e.i(605561),
        u = e.i(468069),
        p = e.i(360375),
        f = e.i(823512),
        b = e.i(6390),
        h = e.i(654995),
        x = e.i(679933),
        E = e.i(675815),
        v = e.i(897408),
        y = e.i(455239),
        A = e.i(997007),
        M = e.i(843485),
        Z = e.i(600939),
        L = e.i(185559),
        k = e.i(429305),
        w = e.i(702985),
        C = e.i(153393),
        D = e.i(147333),
        F = e.i(355770),
        P = e.i(290005),
        S = e.i(876728),
        R = e.i(838031);
    let I = (0, r.createContext)(null),
        H = (0, r.createContext)(null),
        T = (0, r.forwardRef)(function(e, t) {
            [e, t] = (0, a.useContextProps)(e, t, I);
            let n = (0, r.useContext)(H);
            return n ? r.default.createElement(N, {
                state: n,
                props: e,
                listBoxRef: t
            }) : r.default.createElement(h.CollectionBuilder, {
                content: r.default.createElement(h.Collection, e)
            }, a => r.default.createElement(V, {
                props: e,
                listBoxRef: t,
                collection: a
            }))
        });

    function V({
        props: e,
        listBoxRef: a,
        collection: n
    }) {
        e = {
            ...e,
            collection: n,
            children: null,
            items: null
        };
        let {
            layoutDelegate: l
        } = (0, r.useContext)(t.CollectionRendererContext), o = (0, A.useListState)({
            ...e,
            layoutDelegate: l
        });
        return r.default.createElement(N, {
            state: o,
            props: e,
            listBoxRef: a
        })
    }

    function N({
        state: e,
        props: o,
        listBoxRef: d
    }) {
        let c, u, f;
        [o, d] = (0, a.useContextProps)(o, d, s.SelectableCollectionContext);
        let {
            dragAndDropHooks: b,
            layout: h = "stack",
            orientation: v = "vertical",
            filter: M
        } = o, Z = (0, A.UNSTABLE_useFilteredListState)(e, M), {
            collection: L,
            selectionManager: C
        } = Z, F = !!b?.useDraggableCollectionState, P = !!b?.useDroppableCollectionState, {
            direction: R
        } = (0, S.useLocale)(), {
            disabledBehavior: T,
            disabledKeys: V
        } = C, j = (0, w.useCollator)({
            usage: "search",
            sensitivity: "base"
        }), {
            isVirtualized: O,
            layoutDelegate: K,
            dropTargetDelegate: U,
            CollectionRoot: X
        } = (0, r.useContext)(t.CollectionRendererContext), $ = (0, r.useMemo)(() => o.keyboardDelegate || new(0, y.ListKeyboardDelegate)({
            collection: L,
            collator: j,
            ref: d,
            disabledKeys: V,
            disabledBehavior: T,
            layout: h,
            orientation: v,
            direction: R,
            layoutDelegate: K
        }), [L, j, d, T, V, v, R, o.keyboardDelegate, h, K]), {
            listBoxProps: _
        } = (0, p.useListBox)({
            ...o,
            shouldSelectOnPressUp: F || o.shouldSelectOnPressUp,
            keyboardDelegate: $,
            isVirtualized: O
        }, Z, d);
        (0, r.useRef)(F), (0, r.useRef)(P), (0, r.useEffect)(() => {}, [F, P]);
        let G = !1,
            J = null,
            W = (0, r.useRef)(null);
        if (F && b) {
            c = b.useDraggableCollectionState({
                collection: L,
                selectionManager: C,
                preview: b.renderDragPreview ? W : void 0
            }), b.useDraggableCollection({}, c, d);
            let e = b.DragPreview;
            J = b.renderDragPreview ? r.default.createElement(e, {
                ref: W
            }, b.renderDragPreview) : null
        }
        if (P && b) {
            u = b.useDroppableCollectionState({
                collection: L,
                selectionManager: C
            });
            let e = b.dropTargetDelegate || U || new b.ListDropTargetDelegate(L, d, {
                orientation: v,
                layout: h,
                direction: R
            });
            f = b.useDroppableCollection({
                keyboardDelegate: $,
                dropTargetDelegate: e
            }, u, d), G = u.isDropTarget({
                type: "root"
            })
        }
        let {
            focusProps: Y,
            isFocused: q,
            isFocusVisible: Q
        } = (0, D.useFocusRing)(), ee = 0 === Z.collection.size, ea = {
            isDropTarget: G,
            isEmpty: ee,
            isFocused: q,
            isFocusVisible: Q,
            layout: o.layout || "stack",
            orientation: v,
            state: Z
        }, et = (0, a.useRenderProps)({
            ...o,
            children: void 0,
            defaultClassName: "react-aria-ListBox",
            values: ea
        }), er = null;
        ee && o.renderEmptyState && (er = r.default.createElement("div", {
            role: "option",
            style: {
                display: "contents"
            }
        }, o.renderEmptyState(ea)));
        let en = (0, x.filterDOMProps)(o, {
            global: !0
        });
        return r.default.createElement(E.FocusScope, null, r.default.createElement(a.dom.div, {
            ...(0, k.mergeProps)(en, et, _, Y, f?.collectionProps),
            ref: d,
            slot: o.slot || void 0,
            onScroll: o.onScroll,
            "data-drop-target": G || void 0,
            "data-empty": ee || void 0,
            "data-focused": q || void 0,
            "data-focus-visible": Q || void 0,
            "data-layout": o.layout || "stack",
            "data-orientation": v
        }, r.default.createElement(a.Provider, {
            values: [
                [I, o],
                [H, Z],
                [n, {
                    dragAndDropHooks: b,
                    dragState: c,
                    dropState: u
                }],
                [m.SeparatorContext, {
                    elementType: "div"
                }],
                [l, {
                    render: z
                }],
                [t.SectionContext, {
                    name: "ListBoxSection",
                    render: B
                }]
            ]
        }, r.default.createElement(g.SharedElementTransition, null, r.default.createElement(X, {
            collection: L,
            scrollRef: d,
            persistedKeys: function(e, a, t) {
                let n = e.focusedKey,
                    l = null;
                if (a?.isVirtualDragging?.() && t?.target?.type === "item" && (l = t.target.key, "after" === t.target.dropPosition)) {
                    let e = t.collection.getKeyAfter(l),
                        a = null;
                    if (null != e) {
                        let r = t.collection.getItem(l)?.level ?? 0;
                        for (; null != e;) {
                            let n = t.collection.getItem(e);
                            if (!n) break;
                            if ("item" !== n.type) {
                                e = t.collection.getKeyAfter(e);
                                continue
                            }
                            if ((n.level ?? 0) <= r) break;
                            a = e, e = t.collection.getKeyAfter(e)
                        }
                    }
                    l = e ?? a ?? l
                }
                return (0, r.useMemo)(() => new Set([n, l].filter(e => null != e)), [n, l])
            }(C, b, u),
            renderDropIndicator: i(b, u)
        }))), er, J))
    }

    function B(e, l, o, s = "react-aria-ListBoxSection") {
        let c = (0, r.useContext)(H),
            {
                dragAndDropHooks: m,
                dropState: g
            } = (0, r.useContext)(n),
            {
                CollectionBranch: u
            } = (0, r.useContext)(t.CollectionRendererContext),
            [p, b] = (0, a.useSlot)(),
            {
                headingProps: h,
                groupProps: E
            } = function(e) {
                let {
                    heading: a,
                    "aria-label": t
                } = e, r = (0, f.useId)();
                return {
                    itemProps: {
                        role: "presentation"
                    },
                    headingProps: a ? {
                        id: r,
                        role: "presentation",
                        onMouseDown: e => {
                            e.preventDefault()
                        }
                    } : {},
                    groupProps: {
                        role: "group",
                        "aria-label": t,
                        "aria-labelledby": a ? r : void 0
                    }
                }
            }({
                heading: b,
                "aria-label": e["aria-label"] ?? void 0
            }),
            v = (0, a.useRenderProps)({
                ...e,
                id: void 0,
                children: void 0,
                defaultClassName: s,
                values: void 0
            }),
            y = (0, x.filterDOMProps)(e, {
                global: !0
            });
        return delete y.id, r.default.createElement(a.dom.section, {
            ...(0, k.mergeProps)(y, v, E),
            ref: l
        }, r.default.createElement(d.HeaderContext.Provider, {
            value: {
                ...h,
                ref: p
            }
        }, r.default.createElement(u, {
            collection: c.collection,
            parent: o,
            renderDropIndicator: i(m, g)
        })))
    }
    let j = (0, h.createBranchComponent)(v.SectionNode, B),
        O = (0, h.createLeafComponent)(v.ItemNode, function(e, t, l) {
            let o = (0, R.useObjectRef)(t),
                i = (0, r.useContext)(H),
                {
                    dragAndDropHooks: d,
                    dragState: s,
                    dropState: m
                } = (0, r.useContext)(n),
                g = s && !(s.isDisabled || s.selectionManager.isDisabled(l.key)),
                {
                    optionProps: p,
                    labelProps: f,
                    descriptionProps: h,
                    ...E
                } = (0, b.useOption)({
                    key: l.key,
                    "aria-label": e?.["aria-label"]
                }, i, o),
                {
                    hoverProps: v,
                    isHovered: y
                } = (0, F.useHover)({
                    isDisabled: !E.allowsSelection && !E.hasAction && !g,
                    onHoverStart: l.props.onHoverStart,
                    onHoverChange: l.props.onHoverChange,
                    onHoverEnd: l.props.onHoverEnd
                }),
                {
                    keyboardProps: A
                } = (0, P.useKeyboard)(e),
                {
                    focusProps: M
                } = (0, C.useFocus)(e),
                Z = null;
            s && d && (Z = d.useDraggableItem({
                key: l.key,
                hasAction: E.hasAction
            }, s));
            let L = null;
            m && d && (L = d.useDroppableItem({
                target: {
                    type: "item",
                    key: l.key,
                    dropPosition: "on"
                }
            }, m, o));
            let w = s && s.isDragging(l.key),
                D = (0, a.useRenderProps)({
                    ...e,
                    id: void 0,
                    children: e.children,
                    defaultClassName: "react-aria-ListBoxItem",
                    values: {
                        ...E,
                        isHovered: y,
                        selectionMode: i.selectionManager.selectionMode,
                        selectionBehavior: i.selectionManager.selectionBehavior,
                        allowsDragging: !!s,
                        isDragging: w,
                        isDropTarget: L?.isDropTarget
                    }
                });
            (0, r.useEffect)(() => {}, [l.textValue]);
            let S = e.href ? a.dom.a : a.dom.div,
                I = (0, x.filterDOMProps)(e, {
                    global: !0
                });
            return delete I.id, delete I.onClick, e.href && null == p.tabIndex && (p.tabIndex = -1), r.default.createElement(S, {
                ...(0, k.mergeProps)(I, D, p, v, A, M, Z?.dragProps, L?.dropProps),
                ref: o,
                "data-allows-dragging": !!s || void 0,
                "data-selected": E.isSelected || void 0,
                "data-disabled": E.isDisabled || void 0,
                "data-hovered": y || void 0,
                "data-focused": E.isFocused || void 0,
                "data-focus-visible": E.isFocusVisible || void 0,
                "data-pressed": E.isPressed || void 0,
                "data-dragging": w || void 0,
                "data-drop-target": L?.isDropTarget || void 0,
                "data-selection-mode": "none" === i.selectionManager.selectionMode ? void 0 : i.selectionManager.selectionMode
            }, r.default.createElement(a.Provider, {
                values: [
                    [u.TextContext, {
                        slots: {
                            [a.DEFAULT_SLOT]: f,
                            label: f,
                            description: h
                        }
                    }],
                    [c.SelectionIndicatorContext, {
                        isSelected: E.isSelected
                    }]
                ]
            }, D.children))
        });

    function z(e, a) {
        a = (0, R.useObjectRef)(a);
        let {
            dragAndDropHooks: t,
            dropState: l
        } = (0, r.useContext)(n), {
            dropIndicatorProps: o,
            isHidden: i,
            isDropTarget: d
        } = t.useDropIndicator(e, l, a);
        return i ? null : r.default.createElement(K, {
            ...e,
            dropIndicatorProps: o,
            isDropTarget: d,
            ref: a
        })
    }
    let K = (0, r.forwardRef)(function(e, t) {
        let {
            dropIndicatorProps: n,
            isDropTarget: l,
            ...o
        } = e, i = (0, a.useRenderProps)({
            ...o,
            defaultClassName: "react-aria-DropIndicator",
            values: {
                isDropTarget: l
            }
        });
        return r.default.createElement(r.default.Fragment, null, r.default.createElement(a.dom.div, {
            ...n,
            ...i,
            role: "option",
            ref: t,
            "data-drop-target": l || void 0
        }))
    });
    (0, h.createLeafComponent)(v.LoaderNode, function(e, t, n) {
        let l = (0, r.useContext)(H),
            {
                isLoading: o,
                onLoadMore: i,
                scrollOffset: d,
                ...s
            } = e,
            c = (0, r.useRef)(null);
        ! function(e, a) {
            let {
                collection: t,
                onLoadMore: n,
                scrollOffset: l = 1
            } = e, o = (0, r.useRef)(null), i = (0, Z.useEffectEvent)(e => {
                for (let a of e) a.isIntersecting && n && n()
            });
            (0, L.useLayoutEffect)(() => (a.current && (o.current = new IntersectionObserver(i, {
                root: (0, M.getScrollParent)(a?.current),
                rootMargin: `0px ${100*l}% ${100*l}% ${100*l}%`
            }), o.current.observe(a.current)), () => {
                o.current && o.current.disconnect()
            }), [t, a, l])
        }((0, r.useMemo)(() => ({
            onLoadMore: i,
            collection: l?.collection,
            sentinelRef: c,
            scrollOffset: d
        }), [i, d, l?.collection]), c);
        let m = (0, a.useRenderProps)({
            ...s,
            id: void 0,
            children: n.rendered,
            defaultClassName: "react-aria-ListBoxLoadingIndicator",
            values: void 0
        });
        return r.default.createElement(r.default.Fragment, null, r.default.createElement("div", {
            style: {
                position: "relative",
                width: 0,
                height: 0
            },
            inert: !!(parseInt(r.version.split(".")[0], 10) >= 19) || "true"
        }, r.default.createElement("div", {
            "data-testid": "loadMoreSentinel",
            ref: c,
            style: {
                position: "absolute",
                height: 1,
                width: 1
            }
        })), o && m.children && r.default.createElement(r.default.Fragment, null, r.default.createElement(a.dom.div, {
            ...(0, k.mergeProps)((0, x.filterDOMProps)(e, {
                global: !0
            }), {
                tabIndex: -1
            }),
            ...m,
            role: "option",
            ref: t
        }, m.children)))
    }), e.s(["ListBox", 0, T, "ListBoxContext", 0, I, "ListBoxItem", 0, O, "ListBoxSection", 0, j, "ListStateContext", 0, H], 742482)
}, 830146, 863304, e => {
    "use strict";
    var a = e.i(467211),
        t = e.i(679933),
        r = e.i(409781);
    let n = (0, r.createContext)({
            placement: "bottom"
        }),
        l = (0, r.forwardRef)(function(e, l) {
            [e, l] = (0, a.useContextProps)(e, l, n);
            let o = e.placement,
                i = {
                    position: "absolute",
                    transform: "top" === o || "bottom" === o ? "translateX(-50%)" : "translateY(-50%)"
                };
            null != o && (i[o] = "100%");
            let d = (0, a.useRenderProps)({
                ...e,
                defaultClassName: "react-aria-OverlayArrow",
                values: {
                    placement: o
                }
            });
            d.style && Object.keys(d.style).forEach(e => void 0 === d.style[e] && delete d.style[e]);
            let s = (0, t.filterDOMProps)(e);
            return r.default.createElement(a.dom.div, {
                ...s,
                ...d,
                style: {
                    ...i,
                    ...d.style
                },
                ref: l,
                "data-placement": o
            })
        });
    e.s(["OverlayArrow", 0, l, "OverlayArrowContext", 0, n], 830146);
    var o = e.i(185559),
        i = e.i(42246);

    function d(e, a, t) {
        (0, o.useLayoutEffect)(() => {
            if (a && e.current) {
                if (!("getAnimations" in e.current)) return void t();
                let a = e.current.getAnimations();
                if (0 === a.length) return void t();
                let r = !1;
                return Promise.allSettled(a.map(e => e.finished)).then(() => {
                    r || (0, i.flushSync)(() => {
                        t()
                    })
                }), () => {
                    r = !0
                }
            }
        }, [e, a, t])
    }
    e.s(["useEnterAnimation", 0, function(e, a = !0) {
        let [t, n] = (0, r.useState)(!0), l = t && a;
        return (0, o.useLayoutEffect)(() => {
            if (l && e.current && "getAnimations" in e.current)
                for (let a of e.current.getAnimations()) a instanceof CSSTransition && a.cancel()
        }, [e, l]), d(e, l, (0, r.useCallback)(() => n(!1), [])), l
    }, "useExitAnimation", 0, function(e, a) {
        let [t, n] = (0, r.useState)(a ? "open" : "closed");
        switch (t) {
            case "open":
                a || n("exiting");
                break;
            case "closed":
            case "exiting":
                a && n("open")
        }
        let l = "exiting" === t;
        return d(e, l, (0, r.useCallback)(() => {
            n(e => "exiting" === e ? "closed" : e)
        }, [])), l
    }], 863304)
}, 498149, e => {
    "use strict";
    var a = e.i(876728),
        t = e.i(409781);
    e.s(["useListFormatter", 0, function(e = {}) {
        let {
            locale: r
        } = (0, a.useLocale)();
        return (0, t.useMemo)(() => new Intl.ListFormat(r, e), [r, e])
    }])
}, 544789, e => {
    "use strict";
    var a = e.i(785328),
        t = e.i(722978);
    let r = {
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
        variant: n = "default",
        children: l
    }) => {
        let o = r[n],
            i = (0, t.default)("relative mango-text-caption-md rounded-lg px-2 py-1 uppercase animated-border", "text-black dark:text-white", e);
        return (0, a.jsxs)("div", {
            "aria-label": l,
            style: {
                "--color-accent": o.accent,
                "--color-background": o.background,
                "--color-accent-dark": o.accentDark,
                "--color-background-dark": o.backgroundDark
            },
            className: i,
            children: [(0, a.jsx)("span", {
                className: "animated-border-glow"
            }), (0, a.jsx)("span", {
                className: "animated-border-background"
            }), (0, a.jsx)("span", {
                className: "animated-border-text",
                children: l
            })]
        })
    }], 544789)
}, 65583, e => {
    "use strict";
    var a = e.i(837826);
    let t = (0, a.tv)({
        slots: {
            root: "mango:group/field mango:flex mango:w-full mango:flex-col",
            label: ["mango:mb-[0.6875rem] mango:flex mango:items-center mango:justify-between mango:gap-4", "mango:text-body-sm mango:text-black mango:dark:text-white", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"],
            labelText: "mango:min-w-0",
            necessity: ["mango:shrink-0 mango:text-gray-600 mango:dark:text-gray-400", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"],
            pill: ["mango:relative mango:box-border mango:flex mango:w-full mango:gap-3", "mango:border mango:bg-transparent", "mango:m-0 mango:appearance-none mango:text-start mango:font-sans", "mango:transition-colors mango:duration-300 mango:motion-reduce:transition-none", "mango:data-[disabled]:cursor-not-allowed", "mango:data-[disabled]:bg-gray-50 mango:dark:data-[disabled]:bg-gray-900", "mango:data-[disabled]:border-gray-200 mango:dark:data-[disabled]:border-gray-700", "mango:outline-hidden", "mango:data-[focus-visible]:before:pointer-events-none mango:data-[focus-visible]:before:absolute", "mango:data-[focus-visible]:before:box-border mango:data-[focus-visible]:before:-inset-1", "mango:data-[focus-visible]:before:border-2", "mango:data-[focus-visible]:before:border-blue-focus mango:data-[focus-visible]:before:content-['']"],
            input: ["mango:m-0 mango:w-full mango:min-w-0 mango:appearance-none mango:border-0 mango:bg-transparent mango:p-0", "mango:outline-hidden mango:font-sans mango:text-black mango:dark:text-white", "mango:placeholder:text-gray-600 mango:dark:placeholder:text-gray-400", "mango:data-[disabled]:cursor-not-allowed", "mango:data-[disabled]:text-gray-400 mango:dark:data-[disabled]:text-gray-600", "mango:data-[disabled]:placeholder:text-gray-400 mango:dark:data-[disabled]:placeholder:text-gray-600"],
            supportRow: "mango:mt-[0.6875rem] mango:flex mango:items-start mango:justify-between mango:gap-4",
            support: ["mango:text-body-sm mango:flex mango:items-center mango:gap-1.5", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"],
            icon: ["mango:flex mango:shrink-0", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"],
            resizeHandle: ["mango:pointer-events-none mango:absolute mango:right-2 mango:bottom-2 mango:size-3.5", "mango:text-black mango:dark:text-white", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"],
            counter: ["mango:text-body-sm mango:shrink-0 mango:text-gray-600 mango:dark:text-gray-400", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600"]
        },
        variants: {
            size: {
                xs: {
                    pill: "mango:p-3",
                    input: "mango:text-body-xs"
                },
                sm: {
                    pill: "mango:p-3",
                    input: "mango:text-body-xs"
                },
                md: {
                    pill: "mango:p-4",
                    input: "mango:text-body-sm"
                },
                lg: {
                    pill: "mango:px-5 mango:py-4",
                    input: "mango:text-body-base"
                }
            },
            multiline: {
                true: {
                    pill: "mango:items-start mango:rounded-md mango:data-[focus-visible]:before:rounded-md",
                    input: "mango:min-h-24"
                },
                false: {
                    pill: "mango:items-center mango:rounded-full mango:data-[focus-visible]:before:rounded-full"
                }
            },
            resizable: {
                true: {
                    input: "mango:resize-y mango:resizer-blank"
                },
                false: {
                    input: "mango:resize-none"
                }
            },
            validationState: {
                default: {
                    pill: ["mango:border-gray-200 mango:dark:border-gray-700", "mango:data-[hovered]:border-gray-300 mango:dark:data-[hovered]:border-gray-600", "mango:data-[focus-within]:border-blue-500 mango:dark:data-[focus-within]:border-blue-500", "mango:data-[focused]:border-blue-500 mango:dark:data-[focused]:border-blue-500", "mango:group-data-[open]/field:border-blue-500", "mango:dark:group-data-[open]/field:border-blue-500", "mango:data-[hovered]:data-[focus-within]:border-blue-500", "mango:dark:data-[hovered]:data-[focus-within]:border-blue-500", "mango:data-[hovered]:data-[focused]:border-blue-500", "mango:dark:data-[hovered]:data-[focused]:border-blue-500", "mango:group-data-[open]/field:data-[hovered]:border-blue-500", "mango:dark:group-data-[open]/field:data-[hovered]:border-blue-500"],
                    icon: "mango:text-gray-700 mango:dark:text-gray-300",
                    support: "mango:text-gray-600 mango:dark:text-gray-400"
                },
                warning: {
                    pill: "mango:border-warning",
                    icon: "mango:text-warning",
                    support: "mango:text-warning"
                },
                error: {
                    pill: "mango:border-error",
                    icon: "mango:text-error",
                    support: "mango:text-error"
                },
                success: {
                    pill: "mango:border-success",
                    icon: "mango:text-success",
                    support: "mango:text-success"
                }
            }
        },
        defaultVariants: {
            size: "md",
            validationState: "default",
            multiline: !1,
            resizable: !1
        }
    });
    (0, a.tv)({
        base: ["mango:-ml-1 mango:flex mango:shrink-0 mango:items-center mango:gap-1 mango:whitespace-nowrap", "mango:box-border mango:rounded-full mango:px-2 mango:py-1", "mango:font-sans mango:text-black mango:dark:text-white", "mango:group-data-[disabled]/field:text-gray-400 mango:dark:group-data-[disabled]/field:text-gray-600", "mango:data-[disabled]:text-gray-400 mango:dark:data-[disabled]:text-gray-600"],
        variants: {
            size: {
                xs: "mango:text-body-xs",
                sm: "mango:text-body-xs",
                md: "mango:text-body-sm",
                lg: "mango:text-body-base"
            },
            isInteractive: {
                true: ["mango:m-0 mango:-ml-1 mango:cursor-pointer mango:appearance-none mango:border-0 mango:bg-transparent", "mango:outline-hidden mango:transition-colors mango:duration-300 mango:motion-reduce:transition-none", "mango:data-[hovered]:bg-gray-100 mango:dark:data-[hovered]:bg-gray-800", "mango:data-[pressed]:bg-gray-200 mango:dark:data-[pressed]:bg-gray-700", "mango:data-[disabled]:cursor-not-allowed mango:data-[disabled]:bg-transparent"],
                false: ""
            }
        },
        defaultVariants: {
            size: "md",
            isInteractive: !1
        }
    }), e.s(["fieldStyles", 0, t])
}, 279632, e => {
    "use strict";
    var a = e.i(931026),
        t = e.i(804651),
        r = e.i(376819),
        n = e.i(146551),
        l = e.i(475859),
        o = e.i(65583),
        i = e.i(409781),
        d = e.i(785328),
        s = e.i(468069),
        c = e.i(979429);
    let m = "1rem";
    e.s(["FieldSupportText", 0, function({
        children: e,
        tone: g = "default",
        size: u,
        counter: p,
        className: f
    }) {
        let b = (0, i.useContext)(c.FieldErrorContext),
            h = b?.isInvalid ? b.validationErrors.join(" ") : "",
            x = h || e,
            E = h ? "error" : g,
            v = "processing" === E;
        if (null == x && null == p && !v) return null;
        let y = (0, o.fieldStyles)({
            size: u,
            validationState: "processing" === E ? "default" : E
        });
        return (0, d.jsxs)("div", {
            className: y.supportRow({
                className: f
            }),
            children: [(0, d.jsxs)("span", {
                className: y.support(),
                children: [(null != x || v) && (0, d.jsx)("span", {
                    "aria-hidden": !0,
                    className: y.icon(),
                    children: (e => {
                        switch (e) {
                            case "error":
                                return (0, d.jsx)(l.s, {
                                    size: m,
                                    weight: "fill"
                                });
                            case "warning":
                                return (0, d.jsx)(n.s, {
                                    size: m,
                                    weight: "fill"
                                });
                            case "success":
                                return (0, d.jsx)(a.s, {
                                    size: m,
                                    weight: "fill"
                                });
                            case "processing":
                                return (0, d.jsx)(t.s, {
                                    size: m,
                                    weight: "bold",
                                    className: "mango:animate-spin mango:motion-reduce:animate-none"
                                });
                            default:
                                return (0, d.jsx)(r.s, {
                                    size: m,
                                    weight: "fill"
                                })
                        }
                    })(E)
                }), "error" === E ? (0, d.jsx)(c.FieldError, {
                    children: x
                }) : null != x && (0, d.jsx)(s.Text, {
                    slot: "description",
                    children: x
                })]
            }), null != p && (0, d.jsx)("span", {
                className: y.counter(),
                children: p
            })]
        })
    }])
}, 818447, e => {
    "use strict";
    var a = e.i(437062),
        t = e.i(409781);
    let r = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM205.66,85.66l-96,96a8,8,0,0,1-11.32,0l-40-40a8,8,0,0,1,11.32-11.32L104,164.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M228.24,76.24l-128,128a6,6,0,0,1-8.48,0l-56-56a6,6,0,0,1,8.48-8.48L96,191.51,219.76,67.76a6,6,0,0,1,8.48,8.48Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M226.83,74.83l-128,128a4,4,0,0,1-5.66,0l-56-56a4,4,0,0,1,5.66-5.66L96,194.34,221.17,69.17a4,4,0,1,1,5.66,5.66Z"
            }))]
        ]),
        n = t.forwardRef((e, n) => t.createElement(a.w, {
            ref: n,
            ...e,
            weights: r
        }));
    n.displayName = "CheckIcon", e.s(["f", 0, n], 818447)
}, 931026, 804651, 376819, 146551, 475859, e => {
    "use strict";
    var a = e.i(437062),
        t = e.i(409781);
    let r = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.66,85.66-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35a8,8,0,0,1,11.32,11.32Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M172.24,99.76a6,6,0,0,1,0,8.48l-56,56a6,6,0,0,1-8.48,0l-24-24a6,6,0,0,1,8.48-8.48L112,151.51l51.76-51.75A6,6,0,0,1,172.24,99.76ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M170.83,101.17a4,4,0,0,1,0,5.66l-56,56a4,4,0,0,1-5.66,0l-24-24a4,4,0,0,1,5.66-5.66L112,154.34l53.17-53.17A4,4,0,0,1,170.83,101.17ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"
            }))]
        ]),
        n = t.forwardRef((e, n) => t.createElement(a.w, {
            ref: n,
            ...e,
            weights: r
        }));
    n.displayName = "CheckCircleIcon", e.s(["s", 0, n], 931026);
    let l = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M236,128a108,108,0,0,1-216,0c0-42.52,24.73-81.34,63-98.9A12,12,0,1,1,93,50.91C63.24,64.57,44,94.83,44,128a84,84,0,0,0,168,0c0-33.17-19.24-63.43-49-77.09A12,12,0,1,1,173,29.1C211.27,46.66,236,85.48,236,128Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,176A72,72,0,0,1,92,65.64a8,8,0,0,1,8,13.85,56,56,0,1,0,56,0,8,8,0,0,1,8-13.85A72,72,0,0,1,128,200Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M230,128a102,102,0,0,1-204,0c0-40.18,23.35-76.86,59.5-93.45a6,6,0,0,1,5,10.9C58.61,60.09,38,92.49,38,128a90,90,0,0,0,180,0c0-35.51-20.61-67.91-52.5-82.55a6,6,0,0,1,5-10.9C206.65,51.14,230,87.82,230,128Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M232,128a104,104,0,0,1-208,0c0-41,23.81-78.36,60.66-95.27a8,8,0,0,1,6.68,14.54C60.15,61.59,40,93.27,40,128a88,88,0,0,0,176,0c0-34.73-20.15-66.41-51.34-80.73a8,8,0,0,1,6.68-14.54C208.19,49.64,232,87,232,128Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M228,128a100,100,0,0,1-200,0c0-39.4,22.9-75.37,58.33-91.63a4,4,0,1,1,3.34,7.27C57.07,58.6,36,91.71,36,128a92,92,0,0,0,184,0c0-36.29-21.07-69.4-53.67-84.36a4,4,0,1,1,3.34-7.27C205.1,52.63,228,88.6,228,128Z"
            }))]
        ]),
        o = t.forwardRef((e, r) => t.createElement(a.w, {
            ref: r,
            ...e,
            weights: l
        }));
    o.displayName = "CircleNotchIcon", e.s(["s", 0, o], 804651);
    let i = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"
            }))]
        ]),
        d = t.forwardRef((e, r) => t.createElement(a.w, {
            ref: r,
            ...e,
            weights: i
        }));
    d.displayName = "InfoIcon", e.s(["s", 0, d], 376819);
    let s = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M240.26,186.1,152.81,34.23h0a28.74,28.74,0,0,0-49.62,0L15.74,186.1a27.45,27.45,0,0,0,0,27.71A28.31,28.31,0,0,0,40.55,228h174.9a28.31,28.31,0,0,0,24.79-14.19A27.45,27.45,0,0,0,240.26,186.1Zm-20.8,15.7a4.46,4.46,0,0,1-4,2.2H40.55a4.46,4.46,0,0,1-4-2.2,3.56,3.56,0,0,1,0-3.73L124,46.2a4.77,4.77,0,0,1,8,0l87.44,151.87A3.56,3.56,0,0,1,219.46,201.8ZM116,136V104a12,12,0,0,1,24,0v32a12,12,0,0,1-24,0Zm28,40a16,16,0,1,1-16-16A16,16,0,0,1,144,176Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22c6.3-11,22.52-11,28.82,0l87.46,151.87C236,202.79,228.08,216,215.46,216Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M235.07,189.09,147.61,37.22h0a22.75,22.75,0,0,0-39.22,0L20.93,189.09a21.53,21.53,0,0,0,0,21.72A22.35,22.35,0,0,0,40.55,222h174.9a22.35,22.35,0,0,0,19.6-11.19A21.53,21.53,0,0,0,235.07,189.09ZM224.66,204.8a10.46,10.46,0,0,1-9.21,5.2H40.55a10.46,10.46,0,0,1-9.21-5.2,9.51,9.51,0,0,1,0-9.72L118.79,43.21a10.75,10.75,0,0,1,18.42,0l87.46,151.87A9.51,9.51,0,0,1,224.66,204.8ZM122,144V104a6,6,0,0,1,12,0v40a6,6,0,0,1-12,0Zm16,36a10,10,0,1,1-10-10A10,10,0,0,1,138,180Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM222.93,203.8a8.5,8.5,0,0,1-7.48,4.2H40.55a8.5,8.5,0,0,1-7.48-4.2,7.59,7.59,0,0,1,0-7.72L120.52,44.21a8.75,8.75,0,0,1,15,0l87.45,151.87A7.59,7.59,0,0,1,222.93,203.8ZM120,144V104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm20,36a12,12,0,1,1-12-12A12,12,0,0,1,140,180Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M233.34,190.09,145.88,38.22h0a20.75,20.75,0,0,0-35.76,0L22.66,190.09a19.52,19.52,0,0,0,0,19.71A20.36,20.36,0,0,0,40.54,220H215.46a20.36,20.36,0,0,0,17.86-10.2A19.52,19.52,0,0,0,233.34,190.09ZM226.4,205.8a12.47,12.47,0,0,1-10.94,6.2H40.54a12.47,12.47,0,0,1-10.94-6.2,11.45,11.45,0,0,1,0-11.72L117.05,42.21a12.76,12.76,0,0,1,21.9,0L226.4,194.08A11.45,11.45,0,0,1,226.4,205.8ZM124,144V104a4,4,0,0,1,8,0v40a4,4,0,0,1-8,0Zm12,36a8,8,0,1,1-8-8A8,8,0,0,1,136,180Z"
            }))]
        ]),
        c = t.forwardRef((e, r) => t.createElement(a.w, {
            ref: r,
            ...e,
            weights: s
        }));
    c.displayName = "WarningIcon", e.s(["s", 0, c], 146551);
    let m = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M168.49,104.49,145,128l23.52,23.51a12,12,0,0,1-17,17L128,145l-23.51,23.52a12,12,0,0,1-17-17L111,128,87.51,104.49a12,12,0,0,1,17-17L128,111l23.51-23.52a12,12,0,0,1,17,17ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M164.24,100.24,136.48,128l27.76,27.76a6,6,0,1,1-8.48,8.48L128,136.48l-27.76,27.76a6,6,0,0,1-8.48-8.48L119.52,128,91.76,100.24a6,6,0,0,1,8.48-8.48L128,119.52l27.76-27.76a6,6,0,0,1,8.48,8.48ZM230,128A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M165.66,101.66,139.31,128l26.35,26.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M162.83,98.83,133.66,128l29.17,29.17a4,4,0,0,1-5.66,5.66L128,133.66,98.83,162.83a4,4,0,0,1-5.66-5.66L122.34,128,93.17,98.83a4,4,0,0,1,5.66-5.66L128,122.34l29.17-29.17a4,4,0,1,1,5.66,5.66ZM228,128A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"
            }))]
        ]),
        g = t.forwardRef((e, r) => t.createElement(a.w, {
            ref: r,
            ...e,
            weights: m
        }));
    g.displayName = "XCircleIcon", e.s(["s", 0, g], 475859)
}]);