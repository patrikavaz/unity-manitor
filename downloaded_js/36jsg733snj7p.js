;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "09cd13e0-4738-44fc-e814-169dc7ab471c")
    } catch (e) {}
}();
(() => {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 789741, e => {
        var t = e.i(617672),
            l = e.i(653374),
            i = e.i(996471),
            r = e.i(708705),
            n = e.i(495056);
        let s = 0,
            o = new Map;
        var c = e.i(368099),
            a = e.i(837345);
        e.s(["f", 0, function(e) {
            let {
                isDisabled: u,
                onLongPressStart: d,
                onLongPressEnd: h,
                onLongPress: f,
                threshold: y = 500,
                accessibilityDescription: g
            } = e, p = (0, n.useRef)(void 0), {
                addGlobalListener: K,
                removeGlobalListener: m
            } = (0, c.f)(), {
                pressProps: v
            } = (0, a.f)({
                isDisabled: u,
                onPressStart(e) {
                    if (e.continuePropagation(), ("mouse" === e.pointerType || "touch" === e.pointerType) && (d && d({
                            ...e,
                            type: "longpressstart"
                        }), p.current = setTimeout(() => {
                            e.target.dispatchEvent(new PointerEvent("pointercancel", {
                                bubbles: !0
                            })), (0, l.o)(e.target).activeElement !== e.target && (0, t.f)(e.target), f && f({
                                ...e,
                                type: "longpress"
                            }), p.current = void 0
                        }, y), "touch" === e.pointerType)) {
                        let t = e => {
                                e.preventDefault()
                            },
                            i = (0, l.d)(e.target);
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
            }), S = function(e) {
                let [t, l] = (0, n.useState)();
                return (0, r.f)(() => {
                    if (!e) return;
                    let t = o.get(e);
                    if (t) l(t.element.id);
                    else {
                        let i = `react-aria-description-${s++}`;
                        l(i);
                        let r = document.createElement("div");
                        r.id = i, r.style.display = "none", r.textContent = e, document.body.appendChild(r), t = {
                            refCount: 0,
                            element: r
                        }, o.set(e, t)
                    }
                    return t.refCount++, () => {
                        t && 0 == --t.refCount && (t.element.remove(), o.delete(e))
                    }
                }, [e]), {
                    "aria-describedby": e ? t : void 0
                }
            }(f && !u ? g : void 0);
            return {
                longPressProps: (0, i.f)(v, S)
            }
        }], 789741)
    }, 737935, 347172, e => {
        var t = e.i(905988);
        class l {
            constructor(e) {
                this.ref = e
            }
            getItemRect(e) {
                let l = this.ref.current;
                if (!l) return null;
                let i = null != e ? (0, t.d)(this.ref, e) : null;
                if (!i) return null;
                let r = l.getBoundingClientRect(),
                    n = i.getBoundingClientRect();
                return {
                    x: n.left - r.left - l.clientLeft + l.scrollLeft,
                    y: n.top - r.top - l.clientTop + l.scrollTop,
                    width: n.width,
                    height: n.height
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
        var i = e.i(303522);
        e.s(["f", 0, class {
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
                    r = this.layoutDelegate.getItemRect(i);
                if (!r || null == i) return null;
                let n = r;
                do {
                    if (null == (i = t(i))) break;
                    r = this.layoutDelegate.getItemRect(i)
                } while (r && l(n, r) && null != i) return i
            }
            isSameRow(e, t) {
                return e.y === t.y || e.x !== t.x
            }
            isSameColumn(e, t) {
                return e.x === t.x || e.y !== t.y
            }
            isReversed(e) {
                let l = this.getNextKey(e),
                    i = (0, t.d)(this.ref, e);
                if (null != l) {
                    let e = (0, t.d)(this.ref, l);
                    return !!i && !!e && i.getBoundingClientRect().top > e.getBoundingClientRect().top
                }
                let r = this.getPreviousKey(e);
                if (null != r) {
                    let e = (0, t.d)(this.ref, r);
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
                let r = this.isReversed(e);
                if (t && !(0, i.f)(t)) return this.getFirstKey();
                let n = e;
                if ("horizontal" === this.orientation) {
                    let e = Math.max(0, l.x + l.width - this.layoutDelegate.getVisibleRect().width);
                    for (; l && l.x > e && null != n;) l = null == (n = this.getKeyAbove(n)) ? null : this.layoutDelegate.getItemRect(n)
                } else {
                    let e = this.layoutDelegate.getVisibleRect(),
                        t = r ? l.y - e.height : Math.max(0, l.y + l.height - e.height);
                    for (; l && l.y > t && null != n;) l = null == (n = this.getKeyAbove(n)) ? null : this.layoutDelegate.getItemRect(n)
                }
                return n ?? (r ? this.getLastKey() : this.getFirstKey())
            }
            getKeyPageBelow(e) {
                let t = this.ref.current,
                    l = this.layoutDelegate.getItemRect(e);
                if (!l) return null;
                let r = this.isReversed(e);
                if (t && !(0, i.f)(t)) return this.getLastKey();
                let n = e;
                if ("horizontal" === this.orientation) {
                    let e = Math.min(this.layoutDelegate.getContentSize().width, l.x - l.width + this.layoutDelegate.getVisibleRect().width);
                    for (; l && l.x < e && null != n;) l = null == (n = this.getKeyBelow(n)) ? null : this.layoutDelegate.getItemRect(n)
                } else {
                    let e = Math.min(this.layoutDelegate.getContentSize().height, l.y - l.height + this.layoutDelegate.getVisibleRect().height);
                    for (; l && l.y < e && null != n;) l = null == (n = this.getKeyBelow(n)) ? null : this.layoutDelegate.getItemRect(n)
                }
                return n ?? (r ? this.getFirstKey() : this.getLastKey())
            }
            getKeyForSearch(e, t) {
                if (!this.collator) return null;
                let l = this.collection,
                    i = t || this.getFirstKey();
                for (; null != i;) {
                    let t = l.getItem(i);
                    if (!t) break;
                    let r = t.textValue.slice(0, e.length);
                    if (t.textValue && 0 === this.collator.compare(r, e)) return i;
                    i = this.getNextKey(i)
                }
                return null
            }
        }], 737935);
        var r = e.i(718405);
        let n = new Map;
        e.s(["f", 0, function(e) {
            let {
                locale: t
            } = (0, r.f)(), l = t + (e ? Object.entries(e).sort((e, t) => e[0] < t[0] ? -1 : 1).join() : "");
            if (n.has(l)) return n.get(l);
            let i = new Intl.Collator(t, e);
            return n.set(l, i), i
        }], 347172)
    }, 760968, e => {
        var t = e.i(410950),
            l = e.i(620694),
            i = e.i(908497),
            r = e.i(617672),
            n = e.i(402390),
            s = e.i(191199),
            o = e.i(528837),
            c = e.i(905988),
            a = e.i(89732),
            u = e.i(846261),
            d = e.i(996471),
            h = e.i(216333),
            f = e.i(317767),
            y = e.i(718405),
            g = e.i(372072),
            p = e.i(252392),
            K = e.i(708705),
            m = e.i(495056);

        function v(e, t) {
            let l = (0, m.useRef)(!0),
                i = (0, m.useRef)(null);
            (0, K.f)(() => (l.current = !0, () => {
                l.current = !1
            }), []), (0, K.f)(() => {
                l.current ? l.current = !1 : (!i.current || t.some((e, t) => !Object.is(e, i[t]))) && e(), i.current = t
            }, t)
        }
        var S = e.i(228276);
        e.s(["f", 0, function(e) {
            let K, {
                    selectionManager: b,
                    keyboardDelegate: w,
                    ref: F,
                    autoFocus: D = !1,
                    shouldFocusWrap: k = !1,
                    disallowEmptySelection: C = !1,
                    disallowSelectAll: x = !1,
                    escapeKeyBehavior: P = "clearSelection",
                    selectOnFocus: T = "replace" === b.selectionBehavior,
                    disallowTypeAhead: R = !1,
                    shouldUseVirtualFocus: E,
                    allowsTabNavigation: I = !1,
                    scrollRef: B = F,
                    linkBehavior: M = "action",
                    UNSTABLE_focusOnEntry: N
                } = e,
                {
                    direction: L
                } = (0, y.f)(),
                A = (0, g.U)(),
                O = (0, m.useRef)({
                    top: 0,
                    left: 0
                });
            (0, f.f)(B, "scroll", () => {
                O.current = {
                    top: B.current?.scrollTop ?? 0,
                    left: B.current?.scrollLeft ?? 0
                }
            });
            let z = (0, m.useRef)(!1);
            (0, f.f)(F, t.m, E ? e => {
                let {
                    detail: t
                } = e;
                e.stopPropagation(), b.setFocused(!0), t?.focusStrategy === "first" && (z.current = !0)
            } : void 0);
            let U = w.getFirstKey?.() ?? null;
            v(() => {
                if (z.current)
                    if (null == U) {
                        let e = (0, n.z)();
                        (0, l.Q)(F.current), (0, l.r)(e, null), b.collection.size > 0 && (z.current = !1)
                    } else b.setFocusedKey(U), z.current = !1
            }, [U, b.collection.size]), v(() => {
                b.collection.size > 0 && (z.current = !1)
            }, [b.focusedKey]), (0, f.f)(F, t.b, E ? e => {
                e.stopPropagation(), b.setFocused(!1), e.detail?.clearFocusKey && b.setFocusedKey(null)
            } : void 0);
            let V = (0, m.useRef)(D),
                $ = (0, m.useRef)(!1);
            (0, m.useEffect)(() => {
                if (V.current) {
                    let e = null;
                    "first" === D && (e = w.getFirstKey?.() ?? null), "last" === D && (e = w.getLastKey?.() ?? null);
                    let t = b.selectedKeys;
                    if (t.size) {
                        for (let l of t)
                            if (b.canSelectItem(l)) {
                                e = l;
                                break
                            }
                    }
                    b.setFocused(!0), b.setFocusedKey(e), null == e && !E && F.current && (0, i.f)(F.current), b.collection.size > 0 && (V.current = !1, $.current = !0)
                }
            });
            let W = (0, m.useRef)(b.focusedKey),
                H = (0, m.useRef)(null);
            (0, m.useEffect)(() => {
                if (b.isFocused && null != b.focusedKey && (b.focusedKey !== W.current || $.current) && B.current && F.current) {
                    let e = (0, o.E)(),
                        t = (0, c.d)(F, b.focusedKey);
                    if (!(t instanceof HTMLElement)) return;
                    ("keyboard" === e || $.current) && (H.current && cancelAnimationFrame(H.current), H.current = requestAnimationFrame(() => {
                        B.current && ((0, h.F)(B.current, t), "virtual" !== e && (0, h.o)(t, {
                            containingElement: F.current
                        }))
                    }))
                }!E && b.isFocused && null == b.focusedKey && null != W.current && F.current && (0, i.f)(F.current), W.current = b.focusedKey, $.current = !1
            }), (0, m.useEffect)(() => () => {
                H.current && cancelAnimationFrame(H.current)
            }, []), (0, f.f)(F, "react-aria-focus-scope-restore", e => {
                e.preventDefault(), b.setFocused(!0)
            });
            let _ = {
                    onKeyDown: e => {
                        if (e.altKey && "Tab" === e.key && e.preventDefault(), !F.current || !(0, n.C)(F.current, (0, n.t)(e))) return;
                        let t = (t, l) => {
                            if (null != t) {
                                if (b.isLink(t) && "selection" === M && T && !(0, c.U)(e)) {
                                    (0, S.flushSync)(() => {
                                        b.setFocusedKey(t, l)
                                    });
                                    let i = (0, c.d)(F, t),
                                        r = b.getItemProps(t);
                                    i && A.open(i, e, r.href, r.routerOptions);
                                    return
                                }
                                b.setFocusedKey(t, l), b.isLink(t) && "override" === M || (e.shiftKey && "multiple" === b.selectionMode ? b.extendSelection(t) : T && !(0, c.U)(e) && b.replaceSelection(t))
                            }
                        };
                        switch (e.key) {
                            case "ArrowDown":
                                if (w.getKeyBelow) {
                                    let l = null != b.focusedKey ? w.getKeyBelow?.(b.focusedKey) : w.getFirstKey?.();
                                    null == l && k && (l = w.getFirstKey?.(b.focusedKey)), null != l && (e.preventDefault(), t(l))
                                }
                                break;
                            case "ArrowUp":
                                if (w.getKeyAbove) {
                                    let l = null != b.focusedKey ? w.getKeyAbove?.(b.focusedKey) : w.getLastKey?.();
                                    null == l && k && (l = w.getLastKey?.(b.focusedKey)), null != l && (e.preventDefault(), t(l))
                                }
                                break;
                            case "ArrowLeft":
                                if (w.getKeyLeftOf) {
                                    let l = null != b.focusedKey ? w.getKeyLeftOf?.(b.focusedKey) : w.getFirstKey?.();
                                    null == l && k && (l = "rtl" === L ? w.getFirstKey?.(b.focusedKey) : w.getLastKey?.(b.focusedKey)), null != l && (e.preventDefault(), t(l, "rtl" === L ? "first" : "last"))
                                }
                                break;
                            case "ArrowRight":
                                if (w.getKeyRightOf) {
                                    let l = null != b.focusedKey ? w.getKeyRightOf?.(b.focusedKey) : w.getFirstKey?.();
                                    null == l && k && (l = "rtl" === L ? w.getLastKey?.(b.focusedKey) : w.getFirstKey?.(b.focusedKey)), null != l && (e.preventDefault(), t(l, "rtl" === L ? "last" : "first"))
                                }
                                break;
                            case "Home":
                                if (w.getFirstKey) {
                                    if (null === b.focusedKey && e.shiftKey) return;
                                    e.preventDefault();
                                    let t = w.getFirstKey(b.focusedKey, (0, a.v)(e));
                                    b.setFocusedKey(t), null != t && ((0, a.v)(e) && e.shiftKey && "multiple" === b.selectionMode ? b.extendSelection(t) : T && b.replaceSelection(t))
                                }
                                break;
                            case "End":
                                if (w.getLastKey) {
                                    if (null === b.focusedKey && e.shiftKey) return;
                                    e.preventDefault();
                                    let t = w.getLastKey(b.focusedKey, (0, a.v)(e));
                                    b.setFocusedKey(t), null != t && ((0, a.v)(e) && e.shiftKey && "multiple" === b.selectionMode ? b.extendSelection(t) : T && b.replaceSelection(t))
                                }
                                break;
                            case "PageDown":
                                if (w.getKeyPageBelow && null != b.focusedKey) {
                                    let l = w.getKeyPageBelow(b.focusedKey);
                                    null != l && (e.preventDefault(), t(l))
                                }
                                break;
                            case "PageUp":
                                if (w.getKeyPageAbove && null != b.focusedKey) {
                                    let l = w.getKeyPageAbove(b.focusedKey);
                                    null != l && (e.preventDefault(), t(l))
                                }
                                break;
                            case "a":
                                (0, a.v)(e) && "multiple" === b.selectionMode && !0 !== x && (e.preventDefault(), b.selectAll());
                                break;
                            case "Escape":
                                "clearSelection" !== P || C || 0 === b.selectedKeys.size || (e.stopPropagation(), e.preventDefault(), b.clearSelection());
                                break;
                            case "Tab":
                                if (!I)
                                    if (e.shiftKey) F.current.focus();
                                    else {
                                        let e, t, l = (0, s.E)(F.current, {
                                            tabbable: !0
                                        });
                                        do(t = l.lastChild()) && (e = t); while (t) let i = (0, n.z)();
                                        e && (!(0, n.J)(e) || i && !(0, u.m)(i)) && (0, r.f)(e)
                                    }
                        }
                    },
                    onFocus: e => {
                        if (b.isFocused) {
                            (0, n.C)(e.currentTarget, (0, n.t)(e)) || b.setFocused(!1);
                            return
                        }
                        if (!(0, n.C)(e.currentTarget, (0, n.t)(e))) return;
                        let t = (0, o.E)();
                        b.setFocused(!0);
                        let l = e => {
                            null != e && (b.setFocusedKey(e), T && !b.isSelected(e) && b.replaceSelection(e))
                        };
                        if (N && ("keyboard" === t || "virtual" === t)) l("first" === N ? w.getFirstKey?.() : w.getLastKey?.());
                        else if (null == b.focusedKey) {
                            let t = e.relatedTarget;
                            t && e.currentTarget.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? l(b.lastSelectedKey ?? w.getLastKey?.()) : l(b.firstSelectedKey ?? w.getFirstKey?.())
                        } else B.current && (B.current.scrollTop = O.current.top, B.current.scrollLeft = O.current.left);
                        if (null != b.focusedKey && B.current) {
                            let e = (0, c.d)(F, b.focusedKey);
                            e instanceof HTMLElement && ((0, n.J)(e) || E || (0, r.f)(e), ("keyboard" === t || N && "virtual" === t) && (0, h.o)(e, {
                                containingElement: F.current
                            }))
                        }
                    },
                    onBlur: e => {
                        (0, n.C)(e.currentTarget, e.relatedTarget) || b.setFocused(!1)
                    },
                    onMouseDown(e) {
                        B.current === (0, n.t)(e) && e.preventDefault()
                    }
                },
                {
                    typeSelectProps: j
                } = (0, p.f)({
                    keyboardDelegate: w,
                    selectionManager: b
                });
            R || (_ = (0, d.f)(j, _)), E || (K = null == b.focusedKey ? 0 : -1);
            let G = (0, c.I)(b.collection);
            return {
                collectionProps: (0, d.f)(_, {
                    tabIndex: K,
                    "data-collection": G
                })
            }
        }], 760968)
    }, 309525, e => {
        var t = e.i(692936),
            l = e.i(908497),
            i = e.i(402390),
            r = e.i(905988),
            n = e.i(89732),
            s = e.i(996471),
            o = e.i(620694),
            c = e.i(372072),
            a = e.i(837345),
            u = e.i(81407),
            d = e.i(789741),
            h = e.i(495056);
        e.s(["f", 0, function(e) {
            let {
                id: f,
                selectionManager: y,
                key: g,
                ref: p,
                shouldSelectOnPressUp: K,
                shouldUseVirtualFocus: m,
                focus: v,
                isDisabled: S,
                onAction: b,
                allowsDifferentPressOrigin: w,
                linkBehavior: F = "action"
            } = e, D = (0, c.U)();
            f = (0, u.H)(f);
            let k = e => {
                if ("keyboard" === e.pointerType && (0, r.U)(e)) y.toggleSelection(g);
                else {
                    if ("none" === y.selectionMode) return;
                    if (y.isLink(g)) {
                        if ("selection" === F && p.current) {
                            let t = y.getItemProps(g);
                            D.open(p.current, e, t.href, t.routerOptions), y.setSelectedKeys(y.selectedKeys);
                            return
                        } else if ("override" === F || "none" === F) return
                    }
                    "single" === y.selectionMode ? y.isSelected(g) && !y.disallowEmptySelection ? y.toggleSelection(g) : y.replaceSelection(g) : e && e.shiftKey ? y.extendSelection(g) : "toggle" === y.selectionBehavior || e && ((0, n.v)(e) || "touch" === e.pointerType || "virtual" === e.pointerType) ? y.toggleSelection(g) : y.replaceSelection(g)
                }
            };
            (0, h.useEffect)(() => {
                g === y.focusedKey && y.isFocused && (m ? (0, o.Q)(p.current) : v ? v() : (0, i.z)() !== p.current && p.current && (0, l.f)(p.current))
            }, [p, g, y.focusedKey, y.childFocusStrategy, y.isFocused, m]), S = S || y.isDisabled(g);
            let C = {};
            m || S ? S && (C.onMouseDown = e => {
                e.preventDefault()
            }) : C = {
                tabIndex: g === y.focusedKey ? 0 : -1,
                onFocus(e) {
                    (0, i.t)(e) === p.current && y.setFocusedKey(g)
                }
            }, (0, h.useEffect)(() => {
                S && y.focusedKey === g && y.setFocusedKey(null)
            }, [y, S, g]);
            let x = y.isLink(g) && "override" === F,
                P = b && "action" === e.UNSTABLE_itemBehavior,
                T = y.isLink(g) && "selection" !== F && "none" !== F,
                R = !S && y.canSelectItem(g) && !x && !P,
                E = (b || T) && !S,
                I = E && ("replace" === y.selectionBehavior ? !R : !R || y.isEmpty),
                B = E && R && "replace" === y.selectionBehavior,
                M = I || B,
                N = (0, h.useRef)(null),
                L = M && R,
                A = (0, h.useRef)(!1),
                O = (0, h.useRef)(!1),
                z = y.getItemProps(g),
                U = e => {
                    b && (b(), p.current?.dispatchEvent(new CustomEvent("react-aria-item-action", {
                        bubbles: !0
                    }))), T && p.current && D.open(p.current, e, z.href, z.routerOptions)
                },
                V = {
                    ref: p
                };
            if (K ? (V.onPressStart = e => {
                    N.current = e.pointerType, A.current = L, "keyboard" !== e.pointerType || M && " " !== e.key || k(e)
                }, w ? (V.onPressUp = I ? void 0 : e => {
                    "mouse" === e.pointerType && R && k(e)
                }, V.onPress = I ? U : e => {
                    "keyboard" !== e.pointerType && "mouse" !== e.pointerType && R && k(e)
                }) : V.onPress = e => {
                    I || B && "mouse" !== e.pointerType ? ("keyboard" !== e.pointerType || "Enter" === e.key) && U(e) : "keyboard" !== e.pointerType && R && k(e)
                }) : (V.onPressStart = e => {
                    N.current = e.pointerType, A.current = L, O.current = I, !R || ("mouse" !== e.pointerType || I) && ("keyboard" !== e.pointerType || E && " " !== e.key) || k(e)
                }, V.onPress = e => {
                    ("touch" === e.pointerType || "pen" === e.pointerType || "virtual" === e.pointerType || "keyboard" === e.pointerType && M && "Enter" === e.key || "mouse" === e.pointerType && O.current) && (M ? U(e) : R && k(e))
                }), C["data-collection"] = (0, r.i)(y.collection), C["data-key"] = g, V.preventFocusOnPress = m, m && (V = (0, s.f)(V, {
                    onPressStart(e) {
                        "touch" !== e.pointerType && (y.setFocused(!0), y.setFocusedKey(g))
                    },
                    onPress(e) {
                        "touch" === e.pointerType && (y.setFocused(!0), y.setFocusedKey(g))
                    }
                })), z)
                for (let e of ["onPressStart", "onPressEnd", "onPressChange", "onPress", "onPressUp", "onClick"]) z[e] && (V[e] = (0, t.f)(V[e], z[e]));
            let {
                pressProps: $,
                isPressed: W
            } = (0, a.f)(V), H = B ? e => {
                "mouse" === N.current && (e.stopPropagation(), e.preventDefault(), U(e))
            } : void 0, {
                longPressProps: _
            } = (0, d.f)({
                isDisabled: !L,
                onLongPress(e) {
                    "touch" === e.pointerType && (k(e), y.setSelectionBehavior("toggle"))
                }
            }), j = "none" !== F && y.isLink(g) ? e => {
                c.v.isOpening || e.preventDefault()
            } : void 0;
            return {
                itemProps: (0, s.f)(C, R || I || m && !S ? $ : {}, L ? _ : {}, {
                    onDoubleClick: H,
                    onDragStartCapture: e => {
                        "touch" === N.current && A.current && e.preventDefault()
                    },
                    onClick: j,
                    id: f
                }, m ? {
                    onMouseDown: e => e.preventDefault()
                } : void 0),
                isPressed: W,
                isSelected: y.isSelected(g),
                isFocused: y.isFocused && y.focusedKey === g,
                isDisabled: S,
                allowsSelection: R,
                hasAction: M
            }
        }])
    }, 764038, e => {
        var t = e.i(760968),
            l = e.i(737935),
            i = e.i(347172),
            r = e.i(495056);
        e.s(["f", 0, function(e) {
            let {
                selectionManager: n,
                collection: s,
                disabledKeys: o,
                ref: c,
                keyboardDelegate: a,
                layoutDelegate: u,
                orientation: d
            } = e, h = (0, i.f)({
                usage: "search",
                sensitivity: "base"
            }), f = n.disabledBehavior, y = (0, r.useMemo)(() => a || new(0, l.f)({
                collection: s,
                disabledKeys: o,
                disabledBehavior: f,
                ref: c,
                collator: h,
                layoutDelegate: u,
                orientation: d
            }), [a, u, s, o, c, h, f, d]), {
                collectionProps: g
            } = (0, t.f)({
                ...e,
                ref: c,
                selectionManager: n,
                keyboardDelegate: y
            });
            return {
                listProps: g
            }
        }])
    }, 252392, e => {
        var t = e.i(402390),
            l = e.i(495056);
        e.s(["f", 0, function(e) {
            let {
                keyboardDelegate: i,
                selectionManager: r,
                onTypeSelect: n
            } = e, s = (0, l.useRef)({
                search: "",
                timeout: void 0
            });
            return (0, l.useEffect)(() => {
                let e = s.current.timeout;
                return () => {
                    clearTimeout(e)
                }
            }, [s]), {
                typeSelectProps: {
                    onKeyDownCapture: i.getKeyForSearch ? e => {
                        if (s.current.search.length > 0 && " " === e.key) {
                            if (e.preventDefault(), "continuePropagation" in e && (!("continuePropagation" in e) || e.isPropagationStopped()) || e.stopPropagation(), s.current.search += " ", null != i.getKeyForSearch) {
                                let e = i.getKeyForSearch(s.current.search, r.focusedKey);
                                null == e && (e = i.getKeyForSearch(s.current.search)), null != e && (r.setFocusedKey(e), n && n(e))
                            }
                            clearTimeout(s.current.timeout), s.current.timeout = setTimeout(() => {
                                s.current.search = ""
                            }, 1e3)
                        }
                    } : void 0,
                    onKeyDown: i.getKeyForSearch ? e => {
                        var l;
                        let o = 1 !== (l = e.key).length && /^[A-Z]/i.test(l) ? "" : l;
                        if (o && !e.ctrlKey && !e.metaKey && !e.altKey && (0, t.C)(e.currentTarget, (0, t.t)(e)) && (0 !== s.current.search.length || " " !== o)) {
                            if (s.current.search += o, null != i.getKeyForSearch) {
                                let t = i.getKeyForSearch(s.current.search, r.focusedKey);
                                if (null == t && (t = i.getKeyForSearch(s.current.search)), null != t) r.setFocusedKey(t), n && n(t), e.preventDefault(), "continuePropagation" in e || e.stopPropagation();
                                else {
                                    s.current.search = "", clearTimeout(s.current.timeout), s.current.timeout = void 0;
                                    return
                                }
                            }
                            clearTimeout(s.current.timeout), s.current.timeout = setTimeout(() => {
                                s.current.search = ""
                            }, 1e3)
                        }
                    } : void 0
                }
            }
        }])
    }, 905988, e => {
        var t = e.i(902844),
            l = e.i(81407);
        let i = new WeakMap;
        e.s(["i", 0, function(e) {
            return i.get(e)
        }, "d", 0, function(e, t) {
            let l = `[data-key="${CSS.escape(String(t))}"]`,
                i = e.current?.dataset.collection;
            return i && (l = `[data-collection="${CSS.escape(i)}"]${l}`), e.current?.querySelector(l)
        }, "U", 0, function(e) {
            return (0, t.G)() ? e.altKey : e.ctrlKey
        }, "I", 0, function(e) {
            let t = (0, l.H)();
            return i.set(e, t), t
        }])
    }, 410950, 620694, e => {
        e.s(["b", 0, "react-aria-clear-focus", "m", 0, "react-aria-focus"], 410950);
        var t = e.i(402390),
            l = e.i(653374);

        function i(e, t) {
            e.dispatchEvent(new FocusEvent("blur", {
                relatedTarget: t
            })), e.dispatchEvent(new FocusEvent("focusout", {
                bubbles: !0,
                relatedTarget: t
            }))
        }

        function r(e, t) {
            e.dispatchEvent(new FocusEvent("focus", {
                relatedTarget: t
            })), e.dispatchEvent(new FocusEvent("focusin", {
                bubbles: !0,
                relatedTarget: t
            }))
        }

        function n(e) {
            let l = (0, t.z)(e),
                i = l?.getAttribute("aria-activedescendant");
            return i && e.getElementById(i) || l
        }
        e.s(["j", 0, i, "r", 0, r, "R", 0, n, "Q", 0, function(e) {
            let t = n((0, l.o)(e));
            t !== e && (t && i(t, e), e && r(e, t))
        }], 620694)
    }, 216333, e => {
        var t = e.i(303522);

        function l(e, l) {
            let i = [],
                r = document.scrollingElement || document.documentElement;
            for (; e && ((0, t.f)(e, l) && i.push(e), e !== r);) e = e.parentElement;
            return i
        }
        var i = e.i(902844);

        function r(e, t, l = {}) {
            let {
                block: n = "nearest",
                inline: s = "nearest"
            } = l;
            if (e === t) return;
            let o = e.scrollTop,
                c = e.scrollLeft,
                a = t.getBoundingClientRect(),
                u = e.getBoundingClientRect(),
                d = window.getComputedStyle(t),
                h = window.getComputedStyle(e),
                f = document.scrollingElement || document.documentElement,
                y = e === f,
                g = e === f ? 0 : u.top,
                p = e === f ? e.clientHeight : u.bottom,
                K = e === f ? 0 : u.left,
                m = e === f ? e.clientWidth : u.right,
                v = parseFloat(d.scrollMarginTop) || 0,
                S = parseFloat(d.scrollMarginBottom) || 0,
                b = parseFloat(d.scrollMarginLeft) || 0,
                w = parseFloat(d.scrollMarginRight) || 0,
                F = parseFloat(h.scrollPaddingTop) || 0,
                D = parseFloat(h.scrollPaddingBottom) || 0,
                k = parseFloat(h.scrollPaddingLeft) || 0,
                C = parseFloat(h.scrollPaddingRight) || 0,
                x = parseFloat(h.borderTopWidth) || 0,
                P = parseFloat(h.borderBottomWidth) || 0,
                T = parseFloat(h.borderLeftWidth) || 0,
                R = parseFloat(h.borderRightWidth) || 0,
                E = a.top - v,
                I = a.bottom + S,
                B = a.left - b,
                M = a.right + w,
                N = e === f ? 0 : T + R,
                L = e === f ? 0 : x + P,
                A = e === f ? 0 : e.offsetWidth - e.clientWidth - N,
                O = e === f ? 0 : e.offsetHeight - e.clientHeight - L,
                z = g + (y ? 0 : x) + F,
                U = p - (y ? 0 : P) - D - O,
                V = K + (y ? 0 : T) + k,
                $ = m - (y ? 0 : R) - C;
            "rtl" !== h.direction || (0, i.I)() ? $ -= A : V += A;
            let W = E < z || I > U,
                H = B < V || M > $;
            if (W && "start" === n) o += E - z;
            else if (W && "center" === n) o += (E + I) / 2 - (z + U) / 2;
            else if (W && "end" === n) o += I - U;
            else if (W && "nearest" === n) {
                let e = E - z,
                    t = I - U;
                o += Math.abs(e) <= Math.abs(t) ? e : t
            }
            if (H && "start" === s) c += B - V;
            else if (H && "center" === s) c += (B + M) / 2 - (V + $) / 2;
            else if (H && "end" === s) c += M - $;
            else if (H && "nearest" === s) {
                let e = B - V,
                    t = M - $;
                c += Math.abs(e) <= Math.abs(t) ? e : t
            }
            e.scrollTo({
                left: c,
                top: o
            })
        }
        e.s(["F", 0, r, "o", 0, function(e, t = {}) {
            let {
                containingElement: i
            } = t;
            if (e && e.isConnected) {
                let t = document.scrollingElement || document.documentElement;
                if ("hidden" === window.getComputedStyle(t).overflow) {
                    let {
                        left: t,
                        top: n
                    } = e.getBoundingClientRect(), s = l(e, !0);
                    for (let t of s) r(t, e);
                    let {
                        left: o,
                        top: c
                    } = e.getBoundingClientRect();
                    if (Math.abs(t - o) > 1 || Math.abs(n - c) > 1) {
                        for (let e of s = i ? l(i, !0) : []) r(e, i, {
                            block: "center",
                            inline: "center"
                        });
                        for (let t of l(e, !0)) r(t, e)
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
                        left: r,
                        top: n
                    } = e.getBoundingClientRect();
                    (Math.abs(t - r) > 1 || Math.abs(l - n) > 1) && (i?.scrollIntoView?.({
                        block: "center",
                        inline: "center"
                    }), e.scrollIntoView?.({
                        block: "nearest"
                    }))
                }
            }
        }], 216333)
    }, 463624, e => {
        function t(e, t) {
            let l = [],
                i = t;
            for (; i?.parentKey != null;)(i = e.getItem(i.parentKey)) && l.unshift(i);
            return l
        }
        e.s(["o", 0, function(e, l, i) {
            if (l.parentKey === i.parentKey) return l.index - i.index;
            let r = [...t(e, l), l],
                n = [...t(e, i), i],
                s = r.slice(0, n.length).findIndex((e, t) => e !== n[t]);
            return -1 !== s ? (l = r[s], i = n[s], l.index - i.index) : r.findIndex(e => e === i) >= 0 ? 1 : (n.findIndex(e => e === l), -1)
        }, "V", 0, function(e, t) {
            return "function" == typeof t.getChildren ? t.getChildren(e.key) : e.childNodes
        }, "C", 0, function(e) {
            var t = e;
            !1;
            let l = 0;
            for (let e of t) {
                if (0 === l) return e;
                l++
            }
        }])
    }, 514808, e => {
        var t = e.i(463624);
        let l = new WeakMap;
        e.s(["f", 0, function(e) {
            let i = l.get(e);
            if (null != i) return i;
            let r = 0,
                n = l => {
                    for (let i of l) "section" === i.type ? n((0, t.V)(i, e)) : "item" === i.type && r++
                };
            return n(e), l.set(e, r), r
        }])
    }, 514169, e => {
        class t extends Set {
            constructor(e, l, i) {
                super(e), e instanceof t ? (this.anchorKey = l ?? e.anchorKey, this.currentKey = i ?? e.currentKey) : (this.anchorKey = l ?? null, this.currentKey = i ?? null)
            }
        }
        e.s(["f", 0, t])
    }, 187148, 131144, e => {
        var t = e.i(463624),
            l = e.i(514169);
        e.s(["f", 0, class e {
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
                    (!e || i && 0 > (0, t.o)(this.collection, i, e)) && (e = i)
                }
                return e?.key ?? null
            }
            get lastSelectedKey() {
                let e = null;
                for (let l of this.state.selectedKeys) {
                    let i = this.collection.getItem(l);
                    (!e || i && (0, t.o)(this.collection, i, e) > 0) && (e = i)
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
                    if ("all" === this.state.selectedKeys) t = new(0, l.f)([i], i, i);
                    else {
                        let e = this.state.selectedKeys,
                            r = e.anchorKey ?? i;
                        for (let n of (t = new(0, l.f)(e, r, i), this.getKeyRange(r, e.currentKey ?? i))) t.delete(n);
                        for (let e of this.getKeyRange(i, r)) this.canSelectItem(e) && t.add(e)
                    }
                    this.state.setSelectedKeys(t)
                }
            }
            getKeyRange(e, l) {
                let i = this.collection.getItem(e),
                    r = this.collection.getItem(l);
                return i && r ? 0 >= (0, t.o)(this.collection, i, r) ? this.getKeyRangeInternal(e, l) : this.getKeyRangeInternal(l, e) : []
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
                let i = new(0, l.f)("all" === this.state.selectedKeys ? this.getSelectAllKeys() : this.state.selectedKeys);
                i.has(t) ? i.delete(t) : this.canSelectItem(t) && (i.add(t), i.anchorKey = t, i.currentKey = t), this.disallowEmptySelection && 0 === i.size || this.state.setSelectedKeys(i)
            }
            replaceSelection(e) {
                if ("none" === this.selectionMode) return;
                let t = this.getKey(e);
                if (null == t) return;
                let i = this.canSelectItem(t) ? new(0, l.f)([t], t, t) : new(0, l.f);
                this.state.setSelectedKeys(i)
            }
            setSelectedKeys(e) {
                if ("none" === this.selectionMode) return;
                let t = new(0, l.f);
                for (let l of e) {
                    let e = this.getKey(l);
                    if (null != e && (t.add(e), "single" === this.selectionMode)) break
                }
                this.state.setSelectedKeys(t)
            }
            getSelectAllKeys() {
                let e = this.fullCollection ?? this.collection,
                    l = [],
                    i = r => {
                        for (; null != r;) {
                            if (this.canSelectItemIn(r, e)) {
                                let n = e.getItem(r);
                                n?.type === "item" && l.push(r), n?.hasChildNodes && (this.allowsCellSelection || "item" !== n.type) && i((0, t.C)((0, t.V)(n, e))?.key ?? null)
                            }
                            r = e.getKeyAfter(r)
                        }
                    };
                return i(e.getFirstKey()), l
            }
            selectAll() {
                this.isSelectAll || "multiple" !== this.selectionMode || this.state.setSelectedKeys("all")
            }
            clearSelection() {
                !this.disallowEmptySelection && ("all" === this.state.selectedKeys || this.state.selectedKeys.size > 0) && this.state.setSelectedKeys(new(0, l.f))
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
            withCollection(t) {
                return new e(t, this.state, {
                    allowsCellSelection: this.allowsCellSelection,
                    layoutDelegate: this.layoutDelegate || void 0,
                    fullCollection: this.fullCollection ?? this.collection
                })
            }
        }], 187148);
        var i = e.i(495056);
        class r {
            build(e, t) {
                return this.context = t, n(() => this.iterateCollection(e))
            }* iterateCollection(e) {
                let {
                    children: t,
                    items: l
                } = e;
                if (i.default.isValidElement(t) && t.type === i.default.Fragment) yield* this.iterateCollection({
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
                    i.default.Children.forEach(t, t => {
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
                let r = t.value;
                if (null != r) {
                    let e = r.key ?? r.id;
                    if (null == e) throw Error("No key found for item");
                    return e
                }
                return i ? `${i}.${t.index}` : `$.${t.index}`
            }
            getChildState(e, t) {
                return {
                    renderer: t.renderer || e.renderer
                }
            }* getFullNode(e, t, l, r) {
                if (i.default.isValidElement(e.element) && e.element.type === i.default.Fragment) {
                    let n = [];
                    i.default.Children.forEach(e.element.props.children, e => {
                        n.push(e)
                    });
                    let s = e.index ?? 0;
                    for (let e of n) yield* this.getFullNode({
                        element: e,
                        index: s++
                    }, t, l, r);
                    return
                }
                let o = e.element;
                if (!o && e.value && t && t.renderer) {
                    let l = this.cache.get(e.value);
                    if (l && (!l.shouldInvalidate || !l.shouldInvalidate(this.context))) {
                        l.index = e.index, l.parentKey = r ? r.key : null, yield l;
                        return
                    }
                    o = t.renderer(e.value)
                }
                if (i.default.isValidElement(o)) {
                    let i = o.type;
                    if ("function" != typeof i && "function" != typeof i.getCollectionNode) {
                        let e = o.type;
                        throw Error(`Unknown element <${e}> in collection.`)
                    }
                    let n = i.getCollectionNode(o.props, this.context),
                        c = e.index ?? 0,
                        a = n.next();
                    for (; !a.done && a.value;) {
                        let i = a.value;
                        e.index = c;
                        let u = i.key ?? null;
                        null == u && (u = i.element ? null : this.getKey(o, e, t, l));
                        let d = [...this.getFullNode({
                            ...i,
                            key: u,
                            index: c,
                            wrapper: function(e, t) {
                                return e && t ? l => e(t(l)) : e || t || void 0
                            }(e.wrapper, i.wrapper)
                        }, this.getChildState(t, i), l ? `${l}${o.key}` : o.key, r)];
                        for (let t of d) {
                            if (t.value = i.value ?? e.value ?? null, t.value && this.cache.set(t.value, t), e.type && t.type !== e.type) throw Error(`Unsupported type <${s(t.type)}> in <${s(r?.type??"unknown parent type")}>. Only <${s(e.type)}> is supported.`);
                            c++, yield t
                        }
                        a = n.next(d)
                    }
                    return
                }
                if (null == e.key || null == e.type) return;
                let c = this,
                    a = {
                        type: e.type,
                        props: e.props,
                        key: e.key,
                        parentKey: r ? r.key : null,
                        value: e.value ?? null,
                        level: (r?.level ?? 0) + +(r?.type === "item"),
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
                                for (let e of (null != i.key && (i.key = `${a.key}${i.key}`), c.getFullNode({
                                        ...i,
                                        index: l
                                    }, c.getChildState(t, i), a.key, a))) l++, yield e
                        })
                    };
                yield a
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

        function s(e) {
            return e[0].toUpperCase() + e.slice(1)
        }
        e.s(["f", 0, function(e, t, l) {
            let n = (0, i.useMemo)(() => new r, []),
                {
                    children: s,
                    items: o,
                    collection: c
                } = e;
            return (0, i.useMemo)(() => c || t(n.build({
                children: s,
                items: o
            }, l)), [n, s, o, c, l, t])
        }], 131144)
    }, 686359, e => {
        var t = e.i(514169),
            l = e.i(982391),
            i = e.i(495056);

        function r(e, l) {
            return e ? "all" === e ? "all" : new(0, t.f)(e) : l
        }
        e.s(["f", 0, function(e) {
            let {
                selectionMode: n = "none",
                disallowEmptySelection: s = !1,
                allowDuplicateSelectionEvents: o,
                selectionBehavior: c = "toggle",
                disabledBehavior: a = "all"
            } = e, u = (0, i.useRef)(!1), [, d] = (0, i.useState)(!1), h = (0, i.useRef)(null), f = (0, i.useRef)(null), [, y] = (0, i.useState)(null), g = (0, i.useMemo)(() => r(e.selectedKeys), [e.selectedKeys]), p = (0, i.useMemo)(() => r(e.defaultSelectedKeys, new(0, t.f)), [e.defaultSelectedKeys]), [K, m] = (0, l.f)(g, p, e.onSelectionChange), v = (0, i.useMemo)(() => e.disabledKeys ? new Set(e.disabledKeys) : new Set, [e.disabledKeys]), [S, b] = (0, i.useState)(c);
            "replace" === c && "toggle" === S && "object" == typeof K && 0 === K.size && b("replace");
            let w = (0, i.useRef)(c);
            return (0, i.useEffect)(() => {
                c !== w.current && (b(c), w.current = c)
            }, [c]), {
                selectionMode: n,
                disallowEmptySelection: s,
                selectionBehavior: S,
                setSelectionBehavior: b,
                get isFocused() {
                    return u.current
                },
                setFocused(e) {
                    u.current = e, d(e)
                },
                get focusedKey() {
                    return h.current
                },
                get childFocusStrategy() {
                    return f.current
                },
                setFocusedKey(e, t = "first") {
                    h.current = e, f.current = t, y(e)
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
                disabledKeys: v,
                disabledBehavior: a
            }
        }])
    }])
})();

//# debugId=09cd13e0-4738-44fc-e814-169dc7ab471c