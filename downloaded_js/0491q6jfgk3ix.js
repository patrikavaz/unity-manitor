(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 496680, 664106, e => {
    "use strict";
    e.s(["CLEAR_FOCUS_EVENT", 0, "react-aria-clear-focus", "FOCUS_EVENT", 0, "react-aria-focus"], 496680);
    var t = e.i(776050),
        l = e.i(575414);

    function i(e, t) {
        e.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: t
        })), e.dispatchEvent(new FocusEvent("focusout", {
            bubbles: !0,
            relatedTarget: t
        }))
    }

    function s(e, t) {
        e.dispatchEvent(new FocusEvent("focus", {
            relatedTarget: t
        })), e.dispatchEvent(new FocusEvent("focusin", {
            bubbles: !0,
            relatedTarget: t
        }))
    }

    function r(e) {
        let l = (0, t.getActiveElement)(e),
            i = l?.getAttribute("aria-activedescendant");
        return i && e.getElementById(i) || l
    }
    e.s(["dispatchVirtualBlur", 0, i, "dispatchVirtualFocus", 0, s, "getVirtuallyFocusedElement", 0, r, "moveVirtualFocus", 0, function(e) {
        let t = r((0, l.getOwnerDocument)(e));
        t !== e && (t && i(t, e), e && s(e, t))
    }], 664106)
}, 720728, e => {
    "use strict";
    var t = e.i(259457),
        l = e.i(575414),
        i = e.i(429305),
        s = e.i(185559),
        r = e.i(499531);
    let n = 0,
        o = new Map;
    var c = e.i(322660),
        u = e.i(629959);
    e.s(["useLongPress", 0, function(e) {
        let {
            isDisabled: a,
            onLongPressStart: d,
            onLongPressEnd: h,
            onLongPress: y,
            threshold: f = 500,
            accessibilityDescription: g
        } = e, p = (0, r.useRef)(void 0), {
            addGlobalListener: K,
            removeGlobalListener: m
        } = (0, c.useGlobalListeners)(), {
            pressProps: S
        } = (0, u.usePress)({
            isDisabled: a,
            onPressStart(e) {
                if (e.continuePropagation(), ("mouse" === e.pointerType || "touch" === e.pointerType) && (d && d({
                        ...e,
                        type: "longpressstart"
                    }), p.current = setTimeout(() => {
                        e.target.dispatchEvent(new PointerEvent("pointercancel", {
                            bubbles: !0
                        })), (0, l.getOwnerDocument)(e.target).activeElement !== e.target && (0, t.focusWithoutScrolling)(e.target), y && y({
                            ...e,
                            type: "longpress"
                        }), p.current = void 0
                    }, f), "touch" === e.pointerType)) {
                    let t = e => {
                            e.preventDefault()
                        },
                        i = (0, l.getOwnerWindow)(e.target);
                    K(e.target, "contextmenu", t, {
                        once: !0
                    }), K(i, "pointerup", () => {
                        setTimeout(() => {
                            m(e.target, "contextmenu", t)
                        }, 30)
                    }, {
                        once: !0
                    })
                }
            },
            onPressEnd(e) {
                p.current && clearTimeout(p.current), h && ("mouse" === e.pointerType || "touch" === e.pointerType) && h({
                    ...e,
                    type: "longpressend"
                })
            }
        }), v = function(e) {
            let [t, l] = (0, r.useState)();
            return (0, s.useLayoutEffect)(() => {
                if (!e) return;
                let t = o.get(e);
                if (t) l(t.element.id);
                else {
                    let i = `react-aria-description-${n++}`;
                    l(i);
                    let s = document.createElement("div");
                    s.id = i, s.style.display = "none", s.textContent = e, document.body.appendChild(s), t = {
                        refCount: 0,
                        element: s
                    }, o.set(e, t)
                }
                return t.refCount++, () => {
                    t && 0 == --t.refCount && (t.element.remove(), o.delete(e))
                }
            }, [e]), {
                "aria-describedby": e ? t : void 0
            }
        }(y && !a ? g : void 0);
        return {
            longPressProps: (0, i.mergeProps)(S, v)
        }
    }], 720728)
}, 519320, e => {
    "use strict";
    var t = e.i(904960),
        l = e.i(823512);
    let i = new WeakMap;
    e.s(["getCollectionId", 0, function(e) {
        return i.get(e)
    }, "getItemElement", 0, function(e, t) {
        let l = `[data-key="${CSS.escape(String(t))}"]`,
            i = e.current?.dataset.collection;
        return i && (l = `[data-collection="${CSS.escape(i)}"]${l}`), e.current?.querySelector(l)
    }, "isNonContiguousSelectionModifier", 0, function(e) {
        return (0, t.isAppleDevice)() ? e.altKey : e.ctrlKey
    }, "useCollectionId", 0, function(e) {
        let t = (0, l.useId)();
        return i.set(e, t), t
    }])
}, 216650, e => {
    "use strict";
    e.i(203217);
    var t = e.i(758759);

    function l(e, l) {
        let i = [],
            s = document.scrollingElement || document.documentElement;
        for (; e && ((0, t.isScrollable)(e, l) && i.push(e), e !== s);) e = e.parentElement;
        return i
    }
    var i = e.i(904960);

    function s(e, t, l = {}) {
        let {
            block: r = "nearest",
            inline: n = "nearest"
        } = l;
        if (e === t) return;
        let o = e.scrollTop,
            c = e.scrollLeft,
            u = t.getBoundingClientRect(),
            a = e.getBoundingClientRect(),
            d = window.getComputedStyle(t),
            h = window.getComputedStyle(e),
            y = document.scrollingElement || document.documentElement,
            f = e === y,
            g = e === y ? 0 : a.top,
            p = e === y ? e.clientHeight : a.bottom,
            K = e === y ? 0 : a.left,
            m = e === y ? e.clientWidth : a.right,
            S = parseFloat(d.scrollMarginTop) || 0,
            v = parseFloat(d.scrollMarginBottom) || 0,
            b = parseFloat(d.scrollMarginLeft) || 0,
            F = parseFloat(d.scrollMarginRight) || 0,
            w = parseFloat(h.scrollPaddingTop) || 0,
            C = parseFloat(h.scrollPaddingBottom) || 0,
            E = parseFloat(h.scrollPaddingLeft) || 0,
            D = parseFloat(h.scrollPaddingRight) || 0,
            k = parseFloat(h.borderTopWidth) || 0,
            P = parseFloat(h.borderBottomWidth) || 0,
            I = parseFloat(h.borderLeftWidth) || 0,
            T = parseFloat(h.borderRightWidth) || 0,
            R = u.top - S,
            x = u.bottom + v,
            M = u.left - b,
            N = u.right + F,
            B = e === y ? 0 : I + T,
            L = e === y ? 0 : k + P,
            A = e === y ? 0 : e.offsetWidth - e.clientWidth - B,
            O = e === y ? 0 : e.offsetHeight - e.clientHeight - L,
            V = g + (f ? 0 : k) + w,
            z = p - (f ? 0 : P) - C - O,
            W = K + (f ? 0 : I) + E,
            U = m - (f ? 0 : T) - D;
        "rtl" !== h.direction || (0, i.isIOS)() ? U -= A : W += A;
        let $ = R < V || x > z,
            _ = M < W || N > U;
        if ($ && "start" === r) o += R - V;
        else if ($ && "center" === r) o += (R + x) / 2 - (V + z) / 2;
        else if ($ && "end" === r) o += x - z;
        else if ($ && "nearest" === r) {
            let e = R - V,
                t = x - z;
            o += Math.abs(e) <= Math.abs(t) ? e : t
        }
        if (_ && "start" === n) c += M - W;
        else if (_ && "center" === n) c += (M + N) / 2 - (W + U) / 2;
        else if (_ && "end" === n) c += N - U;
        else if (_ && "nearest" === n) {
            let e = M - W,
                t = N - U;
            c += Math.abs(e) <= Math.abs(t) ? e : t
        }
        e.scrollTo({
            left: c,
            top: o
        })
    }
    e.s(["scrollIntoView", 0, s, "scrollIntoViewport", 0, function(e, t = {}) {
        let {
            containingElement: i
        } = t;
        if (e && e.isConnected) {
            let t = document.scrollingElement || document.documentElement;
            if ("hidden" === window.getComputedStyle(t).overflow) {
                let {
                    left: t,
                    top: r
                } = e.getBoundingClientRect(), n = l(e, !0);
                for (let t of n) s(t, e);
                let {
                    left: o,
                    top: c
                } = e.getBoundingClientRect();
                if (Math.abs(t - o) > 1 || Math.abs(r - c) > 1) {
                    for (let e of n = i ? l(i, !0) : []) s(e, i, {
                        block: "center",
                        inline: "center"
                    });
                    for (let t of l(e, !0)) s(t, e)
                }
            } else {
                let {
                    left: t,
                    top: l
                } = e.getBoundingClientRect();
                e?.scrollIntoView?.({
                    block: "nearest"
                });
                let {
                    left: s,
                    top: r
                } = e.getBoundingClientRect();
                (Math.abs(t - s) > 1 || Math.abs(l - r) > 1) && (i?.scrollIntoView?.({
                    block: "center",
                    inline: "center"
                }), e.scrollIntoView?.({
                    block: "nearest"
                }))
            }
        }
    }], 216650)
}, 300671, e => {
    "use strict";
    var t = e.i(776050),
        l = e.i(499531);
    e.s(["useTypeSelect", 0, function(e) {
        let {
            keyboardDelegate: i,
            selectionManager: s,
            onTypeSelect: r
        } = e, n = (0, l.useRef)({
            search: "",
            timeout: void 0
        });
        return (0, l.useEffect)(() => {
            let e = n.current.timeout;
            return () => {
                clearTimeout(e)
            }
        }, [n]), {
            typeSelectProps: {
                onKeyDownCapture: i.getKeyForSearch ? e => {
                    if (n.current.search.length > 0 && " " === e.key) {
                        if (e.preventDefault(), "continuePropagation" in e && (!("continuePropagation" in e) || e.isPropagationStopped()) || e.stopPropagation(), n.current.search += " ", null != i.getKeyForSearch) {
                            let e = i.getKeyForSearch(n.current.search, s.focusedKey);
                            null == e && (e = i.getKeyForSearch(n.current.search)), null != e && (s.setFocusedKey(e), r && r(e))
                        }
                        clearTimeout(n.current.timeout), n.current.timeout = setTimeout(() => {
                            n.current.search = ""
                        }, 1e3)
                    }
                } : void 0,
                onKeyDown: i.getKeyForSearch ? e => {
                    var l;
                    let o = 1 !== (l = e.key).length && /^[A-Z]/i.test(l) ? "" : l;
                    if (o && !e.ctrlKey && !e.metaKey && !e.altKey && (0, t.nodeContains)(e.currentTarget, (0, t.getEventTarget)(e)) && (0 !== n.current.search.length || " " !== o)) {
                        if (n.current.search += o, null != i.getKeyForSearch) {
                            let t = i.getKeyForSearch(n.current.search, s.focusedKey);
                            if (null == t && (t = i.getKeyForSearch(n.current.search)), null != t) s.setFocusedKey(t), r && r(t), e.preventDefault(), "continuePropagation" in e || e.stopPropagation();
                            else {
                                n.current.search = "", clearTimeout(n.current.timeout), n.current.timeout = void 0;
                                return
                            }
                        }
                        clearTimeout(n.current.timeout), n.current.timeout = setTimeout(() => {
                            n.current.search = ""
                        }, 1e3)
                    }
                } : void 0
            }
        }
    }])
}, 660063, e => {
    "use strict";
    var t = e.i(496680),
        l = e.i(664106),
        i = e.i(799163),
        s = e.i(259457),
        r = e.i(776050),
        n = e.i(675815),
        o = e.i(816862),
        c = e.i(519320),
        u = e.i(630877),
        a = e.i(424690),
        d = e.i(429305),
        h = e.i(216650),
        y = e.i(964059),
        f = e.i(876728),
        g = e.i(97584),
        p = e.i(300671),
        K = e.i(185559),
        m = e.i(499531);

    function S(e, t) {
        let l = (0, m.useRef)(!0),
            i = (0, m.useRef)(null);
        (0, K.useLayoutEffect)(() => (l.current = !0, () => {
            l.current = !1
        }), []), (0, K.useLayoutEffect)(() => {
            l.current ? l.current = !1 : (!i.current || t.some((e, t) => !Object.is(e, i[t]))) && e(), i.current = t
        }, t)
    }
    var v = e.i(320666);
    e.s(["useSelectableCollection", 0, function(e) {
        let K, {
                selectionManager: b,
                keyboardDelegate: F,
                ref: w,
                autoFocus: C = !1,
                shouldFocusWrap: E = !1,
                disallowEmptySelection: D = !1,
                disallowSelectAll: k = !1,
                escapeKeyBehavior: P = "clearSelection",
                selectOnFocus: I = "replace" === b.selectionBehavior,
                disallowTypeAhead: T = !1,
                shouldUseVirtualFocus: R,
                allowsTabNavigation: x = !1,
                scrollRef: M = w,
                linkBehavior: N = "action",
                UNSTABLE_focusOnEntry: B
            } = e,
            {
                direction: L
            } = (0, f.useLocale)(),
            A = (0, g.useRouter)(),
            O = (0, m.useRef)({
                top: 0,
                left: 0
            });
        (0, y.useEvent)(M, "scroll", () => {
            O.current = {
                top: M.current?.scrollTop ?? 0,
                left: M.current?.scrollLeft ?? 0
            }
        });
        let V = (0, m.useRef)(!1);
        (0, y.useEvent)(w, t.FOCUS_EVENT, R ? e => {
            let {
                detail: t
            } = e;
            e.stopPropagation(), b.setFocused(!0), t?.focusStrategy === "first" && (V.current = !0)
        } : void 0);
        let z = F.getFirstKey?.() ?? null;
        S(() => {
            if (V.current)
                if (null == z) {
                    let e = (0, r.getActiveElement)();
                    (0, l.moveVirtualFocus)(w.current), (0, l.dispatchVirtualFocus)(e, null), b.collection.size > 0 && (V.current = !1)
                } else b.setFocusedKey(z), V.current = !1
        }, [z, b.collection.size]), S(() => {
            b.collection.size > 0 && (V.current = !1)
        }, [b.focusedKey]), (0, y.useEvent)(w, t.CLEAR_FOCUS_EVENT, R ? e => {
            e.stopPropagation(), b.setFocused(!1), e.detail?.clearFocusKey && b.setFocusedKey(null)
        } : void 0);
        let W = (0, m.useRef)(C),
            U = (0, m.useRef)(!1);
        (0, m.useEffect)(() => {
            if (W.current) {
                let e = null;
                "first" === C && (e = F.getFirstKey?.() ?? null), "last" === C && (e = F.getLastKey?.() ?? null);
                let t = b.selectedKeys;
                if (t.size) {
                    for (let l of t)
                        if (b.canSelectItem(l)) {
                            e = l;
                            break
                        }
                }
                b.setFocused(!0), b.setFocusedKey(e), null == e && !R && w.current && (0, i.focusSafely)(w.current), b.collection.size > 0 && (W.current = !1, U.current = !0)
            }
        });
        let $ = (0, m.useRef)(b.focusedKey),
            _ = (0, m.useRef)(null);
        (0, m.useEffect)(() => {
            if (b.isFocused && null != b.focusedKey && (b.focusedKey !== $.current || U.current) && M.current && w.current) {
                let e = (0, o.getInteractionModality)(),
                    t = (0, c.getItemElement)(w, b.focusedKey);
                if (!(t instanceof HTMLElement)) return;
                ("keyboard" === e || U.current) && (_.current && cancelAnimationFrame(_.current), _.current = requestAnimationFrame(() => {
                    M.current && ((0, h.scrollIntoView)(M.current, t), "virtual" !== e && (0, h.scrollIntoViewport)(t, {
                        containingElement: w.current
                    }))
                }))
            }!R && b.isFocused && null == b.focusedKey && null != $.current && w.current && (0, i.focusSafely)(w.current), $.current = b.focusedKey, U.current = !1
        }), (0, m.useEffect)(() => () => {
            _.current && cancelAnimationFrame(_.current)
        }, []), (0, y.useEvent)(w, "react-aria-focus-scope-restore", e => {
            e.preventDefault(), b.setFocused(!0)
        });
        let H = {
                onKeyDown: e => {
                    if (e.altKey && "Tab" === e.key && e.preventDefault(), !w.current || !(0, r.nodeContains)(w.current, (0, r.getEventTarget)(e))) return;
                    let t = (t, l) => {
                        if (null != t) {
                            if (b.isLink(t) && "selection" === N && I && !(0, c.isNonContiguousSelectionModifier)(e)) {
                                (0, v.flushSync)(() => {
                                    b.setFocusedKey(t, l)
                                });
                                let i = (0, c.getItemElement)(w, t),
                                    s = b.getItemProps(t);
                                i && A.open(i, e, s.href, s.routerOptions);
                                return
                            }
                            b.setFocusedKey(t, l), b.isLink(t) && "override" === N || (e.shiftKey && "multiple" === b.selectionMode ? b.extendSelection(t) : I && !(0, c.isNonContiguousSelectionModifier)(e) && b.replaceSelection(t))
                        }
                    };
                    switch (e.key) {
                        case "ArrowDown":
                            if (F.getKeyBelow) {
                                let l = null != b.focusedKey ? F.getKeyBelow?.(b.focusedKey) : F.getFirstKey?.();
                                null == l && E && (l = F.getFirstKey?.(b.focusedKey)), null != l && (e.preventDefault(), t(l))
                            }
                            break;
                        case "ArrowUp":
                            if (F.getKeyAbove) {
                                let l = null != b.focusedKey ? F.getKeyAbove?.(b.focusedKey) : F.getLastKey?.();
                                null == l && E && (l = F.getLastKey?.(b.focusedKey)), null != l && (e.preventDefault(), t(l))
                            }
                            break;
                        case "ArrowLeft":
                            if (F.getKeyLeftOf) {
                                let l = null != b.focusedKey ? F.getKeyLeftOf?.(b.focusedKey) : F.getFirstKey?.();
                                null == l && E && (l = "rtl" === L ? F.getFirstKey?.(b.focusedKey) : F.getLastKey?.(b.focusedKey)), null != l && (e.preventDefault(), t(l, "rtl" === L ? "first" : "last"))
                            }
                            break;
                        case "ArrowRight":
                            if (F.getKeyRightOf) {
                                let l = null != b.focusedKey ? F.getKeyRightOf?.(b.focusedKey) : F.getFirstKey?.();
                                null == l && E && (l = "rtl" === L ? F.getLastKey?.(b.focusedKey) : F.getFirstKey?.(b.focusedKey)), null != l && (e.preventDefault(), t(l, "rtl" === L ? "last" : "first"))
                            }
                            break;
                        case "Home":
                            if (F.getFirstKey) {
                                if (null === b.focusedKey && e.shiftKey) return;
                                e.preventDefault();
                                let t = F.getFirstKey(b.focusedKey, (0, u.isCtrlKeyPressed)(e));
                                b.setFocusedKey(t), null != t && ((0, u.isCtrlKeyPressed)(e) && e.shiftKey && "multiple" === b.selectionMode ? b.extendSelection(t) : I && b.replaceSelection(t))
                            }
                            break;
                        case "End":
                            if (F.getLastKey) {
                                if (null === b.focusedKey && e.shiftKey) return;
                                e.preventDefault();
                                let t = F.getLastKey(b.focusedKey, (0, u.isCtrlKeyPressed)(e));
                                b.setFocusedKey(t), null != t && ((0, u.isCtrlKeyPressed)(e) && e.shiftKey && "multiple" === b.selectionMode ? b.extendSelection(t) : I && b.replaceSelection(t))
                            }
                            break;
                        case "PageDown":
                            if (F.getKeyPageBelow && null != b.focusedKey) {
                                let l = F.getKeyPageBelow(b.focusedKey);
                                null != l && (e.preventDefault(), t(l))
                            }
                            break;
                        case "PageUp":
                            if (F.getKeyPageAbove && null != b.focusedKey) {
                                let l = F.getKeyPageAbove(b.focusedKey);
                                null != l && (e.preventDefault(), t(l))
                            }
                            break;
                        case "a":
                            (0, u.isCtrlKeyPressed)(e) && "multiple" === b.selectionMode && !0 !== k && (e.preventDefault(), b.selectAll());
                            break;
                        case "Escape":
                            "clearSelection" !== P || D || 0 === b.selectedKeys.size || (e.stopPropagation(), e.preventDefault(), b.clearSelection());
                            break;
                        case "Tab":
                            if (!x)
                                if (e.shiftKey) w.current.focus();
                                else {
                                    let e, t, l = (0, n.getFocusableTreeWalker)(w.current, {
                                        tabbable: !0
                                    });
                                    do(t = l.lastChild()) && (e = t); while (t) let i = (0, r.getActiveElement)();
                                    e && (!(0, r.isFocusWithin)(e) || i && !(0, a.isTabbable)(i)) && (0, s.focusWithoutScrolling)(e)
                                }
                    }
                },
                onFocus: e => {
                    if (b.isFocused) {
                        (0, r.nodeContains)(e.currentTarget, (0, r.getEventTarget)(e)) || b.setFocused(!1);
                        return
                    }
                    if (!(0, r.nodeContains)(e.currentTarget, (0, r.getEventTarget)(e))) return;
                    let t = (0, o.getInteractionModality)();
                    b.setFocused(!0);
                    let l = e => {
                        null != e && (b.setFocusedKey(e), I && !b.isSelected(e) && b.replaceSelection(e))
                    };
                    if (B && ("keyboard" === t || "virtual" === t)) l("first" === B ? F.getFirstKey?.() : F.getLastKey?.());
                    else if (null == b.focusedKey) {
                        let t = e.relatedTarget;
                        t && e.currentTarget.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? l(b.lastSelectedKey ?? F.getLastKey?.()) : l(b.firstSelectedKey ?? F.getFirstKey?.())
                    } else M.current && (M.current.scrollTop = O.current.top, M.current.scrollLeft = O.current.left);
                    if (null != b.focusedKey && M.current) {
                        let e = (0, c.getItemElement)(w, b.focusedKey);
                        e instanceof HTMLElement && ((0, r.isFocusWithin)(e) || R || (0, s.focusWithoutScrolling)(e), ("keyboard" === t || B && "virtual" === t) && (0, h.scrollIntoViewport)(e, {
                            containingElement: w.current
                        }))
                    }
                },
                onBlur: e => {
                    (0, r.nodeContains)(e.currentTarget, e.relatedTarget) || b.setFocused(!1)
                },
                onMouseDown(e) {
                    M.current === (0, r.getEventTarget)(e) && e.preventDefault()
                }
            },
            {
                typeSelectProps: j
            } = (0, p.useTypeSelect)({
                keyboardDelegate: F,
                selectionManager: b
            });
        T || (H = (0, d.mergeProps)(j, H)), R || (K = null == b.focusedKey ? 0 : -1);
        let G = (0, c.useCollectionId)(b.collection);
        return {
            collectionProps: (0, d.mergeProps)(H, {
                tabIndex: K,
                "data-collection": G
            })
        }
    }], 660063)
}, 455239, 702985, e => {
    "use strict";
    var t = e.i(519320);
    class l {
        constructor(e) {
            this.ref = e
        }
        getItemRect(e) {
            let l = this.ref.current;
            if (!l) return null;
            let i = null != e ? (0, t.getItemElement)(this.ref, e) : null;
            if (!i) return null;
            let s = l.getBoundingClientRect(),
                r = i.getBoundingClientRect();
            return {
                x: r.left - s.left - l.clientLeft + l.scrollLeft,
                y: r.top - s.top - l.clientTop + l.scrollTop,
                width: r.width,
                height: r.height
            }
        }
        getContentSize() {
            let e = this.ref.current;
            return {
                width: e?.scrollWidth ?? 0,
                height: e?.scrollHeight ?? 0
            }
        }
        getVisibleRect() {
            let e = this.ref.current;
            return {
                x: e?.scrollLeft ?? 0,
                y: e?.scrollTop ?? 0,
                width: e?.clientWidth ?? 0,
                height: e?.clientHeight ?? 0
            }
        }
    }
    var i = e.i(758759);
    e.s(["ListKeyboardDelegate", 0, class {
        constructor(...e) {
            if (1 === e.length) {
                let t = e[0];
                this.collection = t.collection, this.ref = t.ref, this.collator = t.collator, this.disabledKeys = t.disabledKeys || new Set, this.disabledBehavior = t.disabledBehavior || "all", this.orientation = t.orientation || "vertical", this.direction = t.direction, this.layout = t.layout || "stack", this.layoutDelegate = t.layoutDelegate || new l(t.ref)
            } else this.collection = e[0], this.disabledKeys = e[1], this.ref = e[2], this.collator = e[3], this.layout = "stack", this.orientation = "vertical", this.disabledBehavior = "all", this.layoutDelegate = new l(this.ref);
            "stack" === this.layout && "vertical" === this.orientation && (this.getKeyLeftOf = void 0, this.getKeyRightOf = void 0)
        }
        isDisabled(e) {
            return "all" === this.disabledBehavior && (e.props?.isDisabled || this.disabledKeys.has(e.key)) && e.props?.disabledBehavior !== "selection"
        }
        findNextNonDisabled(e, t, l = !1) {
            let i = e;
            for (; null != i;) {
                let e = this.collection.getItem(i);
                if (e?.type === "item" && (l || !this.isDisabled(e))) return i;
                i = t(i)
            }
            return null
        }
        getNextKey(e, t) {
            let l = e;
            return l = this.collection.getKeyAfter(l), this.findNextNonDisabled(l, e => this.collection.getKeyAfter(e), t?.includeDisabled)
        }
        getPreviousKey(e, t) {
            let l = e;
            return l = this.collection.getKeyBefore(l), this.findNextNonDisabled(l, e => this.collection.getKeyBefore(e), t?.includeDisabled)
        }
        findKey(e, t, l) {
            let i = e,
                s = this.layoutDelegate.getItemRect(i);
            if (!s || null == i) return null;
            let r = s;
            do {
                if (null == (i = t(i))) break;
                s = this.layoutDelegate.getItemRect(i)
            } while (s && l(r, s) && null != i) return i
        }
        isSameRow(e, t) {
            return e.y === t.y || e.x !== t.x
        }
        isSameColumn(e, t) {
            return e.x === t.x || e.y !== t.y
        }
        isReversed(e) {
            let l = this.getNextKey(e),
                i = (0, t.getItemElement)(this.ref, e);
            if (null != l) {
                let e = (0, t.getItemElement)(this.ref, l);
                return !!i && !!e && i.getBoundingClientRect().top > e.getBoundingClientRect().top
            }
            let s = this.getPreviousKey(e);
            if (null != s) {
                let e = (0, t.getItemElement)(this.ref, s);
                return !!i && !!e && e.getBoundingClientRect().top > i.getBoundingClientRect().top
            }
            return !1
        }
        getKeyBelow(e, t) {
            return "grid" === this.layout && "vertical" === this.orientation ? this.findKey(e, e => this.getNextKey(e, t), this.isSameRow) : "vertical" === this.orientation && this.isReversed(e) ? this.getPreviousKey(e, t) : this.getNextKey(e, t)
        }
        getKeyAbove(e, t) {
            return "grid" === this.layout && "vertical" === this.orientation ? this.findKey(e, e => this.getPreviousKey(e, t), this.isSameRow) : "vertical" === this.orientation && this.isReversed(e) ? this.getNextKey(e, t) : this.getPreviousKey(e, t)
        }
        getNextColumn(e, t, l) {
            return t ? this.getPreviousKey(e, l) : this.getNextKey(e, l)
        }
        getKeyRightOf(e, t) {
            let l = "ltr" === this.direction ? "getKeyRightOf" : "getKeyLeftOf";
            if (this.layoutDelegate[l]) return e = this.layoutDelegate[l](e), this.findNextNonDisabled(e, e => this.layoutDelegate[l](e), t?.includeDisabled);
            if ("grid" === this.layout)
                if ("vertical" === this.orientation) return this.getNextColumn(e, "rtl" === this.direction, t);
                else return this.findKey(e, e => this.getNextColumn(e, "rtl" === this.direction, t), this.isSameColumn);
            return "horizontal" === this.orientation ? this.getNextColumn(e, "rtl" === this.direction, t) : null
        }
        getKeyLeftOf(e, t) {
            let l = "ltr" === this.direction ? "getKeyLeftOf" : "getKeyRightOf";
            if (this.layoutDelegate[l]) return e = this.layoutDelegate[l](e), this.findNextNonDisabled(e, e => this.layoutDelegate[l](e), t?.includeDisabled);
            if ("grid" === this.layout)
                if ("vertical" === this.orientation) return this.getNextColumn(e, "ltr" === this.direction, t);
                else return this.findKey(e, e => this.getNextColumn(e, "ltr" === this.direction, t), this.isSameColumn);
            return "horizontal" === this.orientation ? this.getNextColumn(e, "ltr" === this.direction, t) : null
        }
        getFirstKey() {
            let e = this.collection.getFirstKey();
            return this.findNextNonDisabled(e, e => this.collection.getKeyAfter(e))
        }
        getLastKey() {
            let e = this.collection.getLastKey();
            return this.findNextNonDisabled(e, e => this.collection.getKeyBefore(e))
        }
        getKeyPageAbove(e) {
            let t = this.ref.current,
                l = this.layoutDelegate.getItemRect(e);
            if (!l) return null;
            let s = this.isReversed(e);
            if (t && !(0, i.isScrollable)(t)) return this.getFirstKey();
            let r = e;
            if ("horizontal" === this.orientation) {
                let e = Math.max(0, l.x + l.width - this.layoutDelegate.getVisibleRect().width);
                for (; l && l.x > e && null != r;) l = null == (r = this.getKeyAbove(r)) ? null : this.layoutDelegate.getItemRect(r)
            } else {
                let e = this.layoutDelegate.getVisibleRect(),
                    t = s ? l.y - e.height : Math.max(0, l.y + l.height - e.height);
                for (; l && l.y > t && null != r;) l = null == (r = this.getKeyAbove(r)) ? null : this.layoutDelegate.getItemRect(r)
            }
            return r ?? (s ? this.getLastKey() : this.getFirstKey())
        }
        getKeyPageBelow(e) {
            let t = this.ref.current,
                l = this.layoutDelegate.getItemRect(e);
            if (!l) return null;
            let s = this.isReversed(e);
            if (t && !(0, i.isScrollable)(t)) return this.getLastKey();
            let r = e;
            if ("horizontal" === this.orientation) {
                let e = Math.min(this.layoutDelegate.getContentSize().width, l.x - l.width + this.layoutDelegate.getVisibleRect().width);
                for (; l && l.x < e && null != r;) l = null == (r = this.getKeyBelow(r)) ? null : this.layoutDelegate.getItemRect(r)
            } else {
                let e = Math.min(this.layoutDelegate.getContentSize().height, l.y - l.height + this.layoutDelegate.getVisibleRect().height);
                for (; l && l.y < e && null != r;) l = null == (r = this.getKeyBelow(r)) ? null : this.layoutDelegate.getItemRect(r)
            }
            return r ?? (s ? this.getFirstKey() : this.getLastKey())
        }
        getKeyForSearch(e, t) {
            if (!this.collator) return null;
            let l = this.collection,
                i = t || this.getFirstKey();
            for (; null != i;) {
                let t = l.getItem(i);
                if (!t) break;
                let s = t.textValue.slice(0, e.length);
                if (t.textValue && 0 === this.collator.compare(s, e)) return i;
                i = this.getNextKey(i)
            }
            return null
        }
    }], 455239);
    var s = e.i(876728);
    let r = new Map;
    e.s(["useCollator", 0, function(e) {
        let {
            locale: t
        } = (0, s.useLocale)(), l = t + (e ? Object.entries(e).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
        if (r.has(l)) return r.get(l);
        let i = new Intl.Collator(t, e);
        return r.set(l, i), i
    }], 702985)
}, 493244, e => {
    "use strict";
    var t = e.i(660063),
        l = e.i(455239),
        i = e.i(702985),
        s = e.i(499531);
    e.s(["useSelectableList", 0, function(e) {
        let {
            selectionManager: r,
            collection: n,
            disabledKeys: o,
            ref: c,
            keyboardDelegate: u,
            layoutDelegate: a,
            orientation: d
        } = e, h = (0, i.useCollator)({
            usage: "search",
            sensitivity: "base"
        }), y = r.disabledBehavior, f = (0, s.useMemo)(() => u || new(0, l.ListKeyboardDelegate)({
            collection: n,
            disabledKeys: o,
            disabledBehavior: y,
            ref: c,
            collator: h,
            layoutDelegate: a,
            orientation: d
        }), [u, a, n, o, c, h, y, d]), {
            collectionProps: g
        } = (0, t.useSelectableCollection)({
            ...e,
            ref: c,
            selectionManager: r,
            keyboardDelegate: f
        });
        return {
            listProps: g
        }
    }])
}, 515715, e => {
    "use strict";
    var t = e.i(476090),
        l = e.i(799163),
        i = e.i(776050),
        s = e.i(519320),
        r = e.i(630877),
        n = e.i(429305),
        o = e.i(664106),
        c = e.i(97584),
        u = e.i(629959),
        a = e.i(823512),
        d = e.i(720728),
        h = e.i(499531);
    e.s(["useSelectableItem", 0, function(e) {
        let {
            id: y,
            selectionManager: f,
            key: g,
            ref: p,
            shouldSelectOnPressUp: K,
            shouldUseVirtualFocus: m,
            focus: S,
            isDisabled: v,
            onAction: b,
            allowsDifferentPressOrigin: F,
            linkBehavior: w = "action"
        } = e, C = (0, c.useRouter)();
        y = (0, a.useId)(y);
        let E = e => {
            if ("keyboard" === e.pointerType && (0, s.isNonContiguousSelectionModifier)(e)) f.toggleSelection(g);
            else {
                if ("none" === f.selectionMode) return;
                if (f.isLink(g)) {
                    if ("selection" === w && p.current) {
                        let t = f.getItemProps(g);
                        C.open(p.current, e, t.href, t.routerOptions), f.setSelectedKeys(f.selectedKeys);
                        return
                    } else if ("override" === w || "none" === w) return
                }
                "single" === f.selectionMode ? f.isSelected(g) && !f.disallowEmptySelection ? f.toggleSelection(g) : f.replaceSelection(g) : e && e.shiftKey ? f.extendSelection(g) : "toggle" === f.selectionBehavior || e && ((0, r.isCtrlKeyPressed)(e) || "touch" === e.pointerType || "virtual" === e.pointerType) ? f.toggleSelection(g) : f.replaceSelection(g)
            }
        };
        (0, h.useEffect)(() => {
            g === f.focusedKey && f.isFocused && (m ? (0, o.moveVirtualFocus)(p.current) : S ? S() : (0, i.getActiveElement)() !== p.current && p.current && (0, l.focusSafely)(p.current))
        }, [p, g, f.focusedKey, f.childFocusStrategy, f.isFocused, m]), v = v || f.isDisabled(g);
        let D = {};
        m || v ? v && (D.onMouseDown = e => {
            e.preventDefault()
        }) : D = {
            tabIndex: g === f.focusedKey ? 0 : -1,
            onFocus(e) {
                (0, i.getEventTarget)(e) === p.current && f.setFocusedKey(g)
            }
        }, (0, h.useEffect)(() => {
            v && f.focusedKey === g && f.setFocusedKey(null)
        }, [f, v, g]);
        let k = f.isLink(g) && "override" === w,
            P = b && "action" === e.UNSTABLE_itemBehavior,
            I = f.isLink(g) && "selection" !== w && "none" !== w,
            T = !v && f.canSelectItem(g) && !k && !P,
            R = (b || I) && !v,
            x = R && ("replace" === f.selectionBehavior ? !T : !T || f.isEmpty),
            M = R && T && "replace" === f.selectionBehavior,
            N = x || M,
            B = (0, h.useRef)(null),
            L = N && T,
            A = (0, h.useRef)(!1),
            O = (0, h.useRef)(!1),
            V = f.getItemProps(g),
            z = e => {
                b && (b(), p.current?.dispatchEvent(new CustomEvent("react-aria-item-action", {
                    bubbles: !0
                }))), I && p.current && C.open(p.current, e, V.href, V.routerOptions)
            },
            W = {
                ref: p
            };
        if (K ? (W.onPressStart = e => {
                B.current = e.pointerType, A.current = L, "keyboard" !== e.pointerType || N && " " !== e.key || E(e)
            }, F ? (W.onPressUp = x ? void 0 : e => {
                "mouse" === e.pointerType && T && E(e)
            }, W.onPress = x ? z : e => {
                "keyboard" !== e.pointerType && "mouse" !== e.pointerType && T && E(e)
            }) : W.onPress = e => {
                x || M && "mouse" !== e.pointerType ? ("keyboard" !== e.pointerType || "Enter" === e.key) && z(e) : "keyboard" !== e.pointerType && T && E(e)
            }) : (W.onPressStart = e => {
                B.current = e.pointerType, A.current = L, O.current = x, !T || ("mouse" !== e.pointerType || x) && ("keyboard" !== e.pointerType || R && " " !== e.key) || E(e)
            }, W.onPress = e => {
                ("touch" === e.pointerType || "pen" === e.pointerType || "virtual" === e.pointerType || "keyboard" === e.pointerType && N && "Enter" === e.key || "mouse" === e.pointerType && O.current) && (N ? z(e) : T && E(e))
            }), D["data-collection"] = (0, s.getCollectionId)(f.collection), D["data-key"] = g, W.preventFocusOnPress = m, m && (W = (0, n.mergeProps)(W, {
                onPressStart(e) {
                    "touch" !== e.pointerType && (f.setFocused(!0), f.setFocusedKey(g))
                },
                onPress(e) {
                    "touch" === e.pointerType && (f.setFocused(!0), f.setFocusedKey(g))
                }
            })), V)
            for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"]) V[e] && (W[e] = (0, t.chain)(W[e], V[e]));
        let {
            pressProps: U,
            isPressed: $
        } = (0, u.usePress)(W), _ = M ? e => {
            "mouse" === B.current && (e.stopPropagation(), e.preventDefault(), z(e))
        } : void 0, {
            longPressProps: H
        } = (0, d.useLongPress)({
            isDisabled: !L,
            onLongPress(e) {
                "touch" === e.pointerType && (E(e), f.setSelectionBehavior("toggle"))
            }
        }), j = "none" !== w && f.isLink(g) ? e => {
            c.openLink.isOpening || e.preventDefault()
        } : void 0;
        return {
            itemProps: (0, n.mergeProps)(D, T || x || m && !v ? U : {}, L ? H : {}, {
                onDoubleClick: _,
                onDragStartCapture: e => {
                    "touch" === B.current && A.current && e.preventDefault()
                },
                onClick: j,
                id: y
            }, m ? {
                onMouseDown: e => e.preventDefault()
            } : void 0),
            isPressed: $,
            isSelected: f.isSelected(g),
            isFocused: f.isFocused && f.focusedKey === g,
            isDisabled: v,
            allowsSelection: T,
            hasAction: N
        }
    }])
}, 419685, e => {
    "use strict";

    function t(e, t) {
        let l = [],
            i = t;
        for (; i?.parentKey != null;)(i = e.getItem(i.parentKey)) && l.unshift(i);
        return l
    }
    e.s(["compareNodeOrder", 0, function(e, l, i) {
        if (l.parentKey === i.parentKey) return l.index - i.index;
        let s = [...t(e, l), l],
            r = [...t(e, i), i],
            n = s.slice(0, r.length).findIndex((e, t) => e !== r[t]);
        return -1 !== n ? (l = s[n], i = r[n], l.index - i.index) : s.findIndex(e => e === i) >= 0 ? 1 : (r.findIndex(e => e === l), -1)
    }, "getChildNodes", 0, function(e, t) {
        return "function" == typeof t.getChildren ? t.getChildren(e.key) : e.childNodes
    }, "getFirstItem", 0, function(e) {
        var t = e;
        !1;
        let l = 0;
        for (let e of t) {
            if (0 === l) return e;
            l++
        }
    }])
}, 511607, e => {
    "use strict";
    var t = e.i(419685);
    let l = new WeakMap;
    e.s(["getItemCount", 0, function(e) {
        let i = l.get(e);
        if (null != i) return i;
        let s = 0,
            r = l => {
                for (let i of l) "section" === i.type ? r((0, t.getChildNodes)(i, e)) : "item" === i.type && s++
            };
        return r(e), l.set(e, s), s
    }])
}, 398824, e => {
    "use strict";
    class t extends Set {
        constructor(e, l, i) {
            super(e), e instanceof t ? (this.anchorKey = l ?? e.anchorKey, this.currentKey = i ?? e.currentKey) : (this.anchorKey = l ?? null, this.currentKey = i ?? null)
        }
    }
    e.s(["Selection", 0, t])
}, 85434, 485286, e => {
    "use strict";
    var t = e.i(419685),
        l = e.i(398824);
    class i {
        constructor(e, t, l) {
            this.collection = e, this.state = t, this.allowsCellSelection = l?.allowsCellSelection ?? !1, this._isSelectAll = null, this.layoutDelegate = l?.layoutDelegate || null, this.fullCollection = l?.fullCollection || null
        }
        get selectionMode() {
            return this.state.selectionMode
        }
        get disallowEmptySelection() {
            return this.state.disallowEmptySelection
        }
        get selectionBehavior() {
            return this.state.selectionBehavior
        }
        setSelectionBehavior(e) {
            this.state.setSelectionBehavior(e)
        }
        get isFocused() {
            return this.state.isFocused
        }
        setFocused(e) {
            this.state.setFocused(e)
        }
        get focusedKey() {
            return this.state.focusedKey
        }
        get childFocusStrategy() {
            return this.state.childFocusStrategy
        }
        setFocusedKey(e, t) {
            (null == e || this.collection.getItem(e)) && this.state.setFocusedKey(e, t)
        }
        get selectedKeys() {
            return "all" === this.state.selectedKeys ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys
        }
        get rawSelection() {
            return this.state.selectedKeys
        }
        isSelected(e) {
            if ("none" === this.state.selectionMode) return !1;
            let t = this.getKey(e);
            return null != t && ("all" === this.state.selectedKeys ? this.canSelectItem(t) : this.state.selectedKeys.has(t))
        }
        get isEmpty() {
            return "all" !== this.state.selectedKeys && 0 === this.state.selectedKeys.size
        }
        get isSelectAll() {
            if (this.isEmpty) return !1;
            if ("all" === this.state.selectedKeys) return !0;
            if (null != this._isSelectAll) return this._isSelectAll;
            let e = this.getSelectAllKeys(),
                t = this.state.selectedKeys;
            return this._isSelectAll = e.every(e => t.has(e)), this._isSelectAll
        }
        get firstSelectedKey() {
            let e = null;
            for (let l of this.state.selectedKeys) {
                let i = this.collection.getItem(l);
                (!e || i && 0 > (0, t.compareNodeOrder)(this.collection, i, e)) && (e = i)
            }
            return e?.key ?? null
        }
        get lastSelectedKey() {
            let e = null;
            for (let l of this.state.selectedKeys) {
                let i = this.collection.getItem(l);
                (!e || i && (0, t.compareNodeOrder)(this.collection, i, e) > 0) && (e = i)
            }
            return e?.key ?? null
        }
        get disabledKeys() {
            return this.state.disabledKeys
        }
        get disabledBehavior() {
            return this.state.disabledBehavior
        }
        extendSelection(e) {
            let t;
            if ("none" === this.selectionMode) return;
            if ("single" === this.selectionMode) return void this.replaceSelection(e);
            let i = this.getKey(e);
            if (null != i) {
                if ("all" === this.state.selectedKeys) t = new(0, l.Selection)([i], i, i);
                else {
                    let e = this.state.selectedKeys,
                        s = e.anchorKey ?? i;
                    for (let r of (t = new(0, l.Selection)(e, s, i), this.getKeyRange(s, e.currentKey ?? i))) t.delete(r);
                    for (let e of this.getKeyRange(i, s)) this.canSelectItem(e) && t.add(e)
                }
                this.state.setSelectedKeys(t)
            }
        }
        getKeyRange(e, l) {
            let i = this.collection.getItem(e),
                s = this.collection.getItem(l);
            return i && s ? 0 >= (0, t.compareNodeOrder)(this.collection, i, s) ? this.getKeyRangeInternal(e, l) : this.getKeyRangeInternal(l, e) : []
        }
        getKeyRangeInternal(e, t) {
            if (this.layoutDelegate?.getKeyRange) return this.layoutDelegate.getKeyRange(e, t);
            let l = [],
                i = e;
            for (; null != i;) {
                let e = this.collection.getItem(i);
                if (e && ("item" === e.type || "cell" === e.type && this.allowsCellSelection) && l.push(i), i === t) return l;
                i = this.collection.getKeyAfter(i)
            }
            return []
        }
        getKey(e) {
            let t = this.collection.getItem(e);
            if (!t || "cell" === t.type && this.allowsCellSelection) return e;
            for (; t && "item" !== t.type && null != t.parentKey;) t = this.collection.getItem(t.parentKey);
            return t && "item" === t.type ? t.key : null
        }
        toggleSelection(e) {
            if ("none" === this.selectionMode) return;
            if ("single" === this.selectionMode && !this.isSelected(e)) return void this.replaceSelection(e);
            let t = this.getKey(e);
            if (null == t) return;
            let i = new(0, l.Selection)("all" === this.state.selectedKeys ? this.getSelectAllKeys() : this.state.selectedKeys);
            i.has(t) ? i.delete(t) : this.canSelectItem(t) && (i.add(t), i.anchorKey = t, i.currentKey = t), this.disallowEmptySelection && 0 === i.size || this.state.setSelectedKeys(i)
        }
        replaceSelection(e) {
            if ("none" === this.selectionMode) return;
            let t = this.getKey(e);
            if (null == t) return;
            let i = this.canSelectItem(t) ? new(0, l.Selection)([t], t, t) : new(0, l.Selection);
            this.state.setSelectedKeys(i)
        }
        setSelectedKeys(e) {
            if ("none" === this.selectionMode) return;
            let t = new(0, l.Selection);
            for (let l of e) {
                let e = this.getKey(l);
                if (null != e && (t.add(e), "single" === this.selectionMode)) break
            }
            this.state.setSelectedKeys(t)
        }
        getSelectAllKeys() {
            let e = this.fullCollection ?? this.collection,
                l = [],
                i = s => {
                    for (; null != s;) {
                        if (this.canSelectItemIn(s, e)) {
                            let r = e.getItem(s);
                            r?.type === "item" && l.push(s), r?.hasChildNodes && (this.allowsCellSelection || "item" !== r.type) && i((0, t.getFirstItem)((0, t.getChildNodes)(r, e))?.key ?? null)
                        }
                        s = e.getKeyAfter(s)
                    }
                };
            return i(e.getFirstKey()), l
        }
        selectAll() {
            this.isSelectAll || "multiple" !== this.selectionMode || this.state.setSelectedKeys("all")
        }
        clearSelection() {
            !this.disallowEmptySelection && ("all" === this.state.selectedKeys || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new(0, l.Selection))
        }
        toggleSelectAll() {
            this.isSelectAll ? this.clearSelection() : this.selectAll()
        }
        select(e, t) {
            "none" !== this.selectionMode && ("single" === this.selectionMode ? this.isSelected(e) && !this.disallowEmptySelection ? this.toggleSelection(e) : this.replaceSelection(e) : "toggle" === this.selectionBehavior || t && ("touch" === t.pointerType || "virtual" === t.pointerType) ? this.toggleSelection(e) : this.replaceSelection(e))
        }
        isSelectionEqual(e) {
            if (e === this.state.selectedKeys) return !0;
            let t = this.selectedKeys;
            if (e.size !== t.size) return !1;
            for (let l of e)
                if (!t.has(l)) return !1;
            for (let l of t)
                if (!e.has(l)) return !1;
            return !0
        }
        canSelectItem(e) {
            return this.canSelectItemIn(e, this.collection)
        }
        canSelectItemIn(e, t) {
            if ("none" === this.state.selectionMode || this.state.disabledKeys.has(e)) return !1;
            let l = t.getItem(e);
            return !(!l || l?.props?.isDisabled) && ("cell" !== l.type || !!this.allowsCellSelection)
        }
        isDisabled(e) {
            let t = this.collection.getItem(e);
            return "all" === this.state.disabledBehavior && (this.state.disabledKeys.has(e) || !!t?.props?.isDisabled) && t?.props?.disabledBehavior !== "selection"
        }
        isLink(e) {
            return !!this.collection.getItem(e)?.props?.href
        }
        getItemProps(e) {
            return this.collection.getItem(e)?.props
        }
        withCollection(e) {
            return new i(e, this.state, {
                allowsCellSelection: this.allowsCellSelection,
                layoutDelegate: this.layoutDelegate || void 0,
                fullCollection: this.fullCollection ?? this.collection
            })
        }
    }
    e.s(["SelectionManager", 0, i], 85434);
    var s = e.i(499531);
    class r {
        build(e, t) {
            return this.context = t, n(() => this.iterateCollection(e))
        }* iterateCollection(e) {
            let {
                children: t,
                items: l
            } = e;
            if (s.default.isValidElement(t) && t.type === s.default.Fragment) yield* this.iterateCollection({
                children: t.props.children,
                items: l
            });
            else if ("function" == typeof t) {
                if (!l) throw Error("props.children was a function but props.items is missing");
                let e = 0;
                for (let i of l) yield* this.getFullNode({
                    value: i,
                    index: e
                }, {
                    renderer: t
                }), e++
            } else {
                let e = [];
                s.default.Children.forEach(t, t => {
                    t && e.push(t)
                });
                let l = 0;
                for (let t of e)
                    for (let e of this.getFullNode({
                            element: t,
                            index: l
                        }, {})) l++, yield e
            }
        }
        getKey(e, t, l, i) {
            if (null != e.key) return e.key;
            if ("cell" === t.type && null != t.key) return `${i}${t.key}`;
            let s = t.value;
            if (null != s) {
                let e = s.key ?? s.id;
                if (null == e) throw Error("No key found for item");
                return e
            }
            return i ? `${i}.${t.index}` : `$.${t.index}`
        }
        getChildState(e, t) {
            return {
                renderer: t.renderer || e.renderer
            }
        }* getFullNode(e, t, l, i) {
            if (s.default.isValidElement(e.element) && e.element.type === s.default.Fragment) {
                let r = [];
                s.default.Children.forEach(e.element.props.children, e => {
                    r.push(e)
                });
                let n = e.index ?? 0;
                for (let e of r) yield* this.getFullNode({
                    element: e,
                    index: n++
                }, t, l, i);
                return
            }
            let r = e.element;
            if (!r && e.value && t && t.renderer) {
                let l = this.cache.get(e.value);
                if (l && (!l.shouldInvalidate || !l.shouldInvalidate(this.context))) {
                    l.index = e.index, l.parentKey = i ? i.key : null, yield l;
                    return
                }
                r = t.renderer(e.value)
            }
            if (s.default.isValidElement(r)) {
                let s = r.type;
                if ("function" != typeof s && "function" != typeof s.getCollectionNode) {
                    let e = r.type;
                    throw Error(`Unknown element <${e}> in collection.`)
                }
                let n = s.getCollectionNode(r.props, this.context),
                    c = e.index ?? 0,
                    u = n.next();
                for (; !u.done && u.value;) {
                    let s = u.value;
                    e.index = c;
                    let a = s.key ?? null;
                    null == a && (a = s.element ? null : this.getKey(r, e, t, l));
                    let d = [...this.getFullNode({
                        ...s,
                        key: a,
                        index: c,
                        wrapper: function(e, t) {
                            return e && t ? l => e(t(l)) : e || t || void 0
                        }(e.wrapper, s.wrapper)
                    }, this.getChildState(t, s), l ? `${l}${r.key}` : r.key, i)];
                    for (let t of d) {
                        if (t.value = s.value ?? e.value ?? null, t.value && this.cache.set(t.value, t), e.type && t.type !== e.type) throw Error(`Unsupported type <${o(t.type)}> in <${o(i?.type??"unknown parent type")}>. Only <${o(e.type)}> is supported.`);
                        c++, yield t
                    }
                    u = n.next(d)
                }
                return
            }
            if (null == e.key || null == e.type) return;
            let c = this,
                u = {
                    type: e.type,
                    props: e.props,
                    key: e.key,
                    parentKey: i ? i.key : null,
                    value: e.value ?? null,
                    level: (i?.level ?? 0) + +(i?.type === "item"),
                    index: e.index,
                    rendered: e.rendered,
                    textValue: e.textValue ?? "",
                    "aria-label": e["aria-label"],
                    wrapper: e.wrapper,
                    shouldInvalidate: e.shouldInvalidate,
                    hasChildNodes: e.hasChildNodes || !1,
                    childNodes: n(function*() {
                        if (!e.hasChildNodes || !e.childNodes) return;
                        let l = 0;
                        for (let i of e.childNodes())
                            for (let e of (null != i.key && (i.key = `${u.key}${i.key}`), c.getFullNode({
                                    ...i,
                                    index: l
                                }, c.getChildState(t, i), u.key, u))) l++, yield e
                    })
                };
            yield u
        }
        constructor() {
            this.cache = new WeakMap
        }
    }

    function n(e) {
        let t = [],
            l = null;
        return {
            *[Symbol.iterator]() {
                for (let e of t) yield e;
                for (let i of (l || (l = e()), l)) t.push(i), yield i
            }
        }
    }

    function o(e) {
        return e[0].toUpperCase() + e.slice(1)
    }
    e.s(["useCollection", 0, function(e, t, l) {
        let i = (0, s.useMemo)(() => new r, []),
            {
                children: n,
                items: o,
                collection: c
            } = e;
        return (0, s.useMemo)(() => c || t(i.build({
            children: n,
            items: o
        }, l)), [i, n, o, c, l, t])
    }], 485286)
}, 184831, e => {
    "use strict";
    var t = e.i(398824),
        l = e.i(803258),
        i = e.i(499531);

    function s(e, l) {
        return e ? "all" === e ? "all" : new(0, t.Selection)(e) : l
    }
    e.s(["useMultipleSelectionState", 0, function(e) {
        let {
            selectionMode: r = "none",
            disallowEmptySelection: n = !1,
            allowDuplicateSelectionEvents: o,
            selectionBehavior: c = "toggle",
            disabledBehavior: u = "all"
        } = e, a = (0, i.useRef)(!1), [, d] = (0, i.useState)(!1), h = (0, i.useRef)(null), y = (0, i.useRef)(null), [, f] = (0, i.useState)(null), g = (0, i.useMemo)(() => s(e.selectedKeys), [e.selectedKeys]), p = (0, i.useMemo)(() => s(e.defaultSelectedKeys, new(0, t.Selection)), [e.defaultSelectedKeys]), [K, m] = (0, l.useControlledState)(g, p, e.onSelectionChange), S = (0, i.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), [v, b] = (0, i.useState)(c);
        "replace" === c && "toggle" === v && "object" == typeof K && 0 === K.size && b("replace");
        let F = (0, i.useRef)(c);
        return (0, i.useEffect)(() => {
            c !== F.current && (b(c), F.current = c)
        }, [c]), {
            selectionMode: r,
            disallowEmptySelection: n,
            selectionBehavior: v,
            setSelectionBehavior: b,
            get isFocused() {
                return a.current
            },
            setFocused(e) {
                a.current = e, d(e)
            },
            get focusedKey() {
                return h.current
            },
            get childFocusStrategy() {
                return y.current
            },
            setFocusedKey(e, t = "first") {
                h.current = e, y.current = t, f(e)
            },
            selectedKeys: K,
            setSelectedKeys(e) {
                (o || ! function(e, t) {
                    if (e.size !== t.size) return !1;
                    for (let l of e)
                        if (!t.has(l)) return !1;
                    return !0
                }(e, K)) && m(e)
            },
            disabledKeys: S,
            disabledBehavior: u
        }
    }])
}]);