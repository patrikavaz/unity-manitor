;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "0ed56322-0510-8b31-3e80-f6ce1cfca2ae")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 675815, 193777, e => {
    "use strict";
    var t = e.i(776050),
        r = e.i(950011);
    class o {
        constructor(e, t, r, o) {
            this._walkerStack = [], this._currentSetFor = new Set, this._acceptNode = e => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    let t = e.shadowRoot;
                    if (t) {
                        let e = this._doc.createTreeWalker(t, this.whatToShow, {
                            acceptNode: this._acceptNode
                        });
                        return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT
                    }
                    if ("function" == typeof this.filter) return this.filter(e);
                    if (this.filter?.acceptNode) return this.filter.acceptNode(e);
                    else if (null === this.filter) return NodeFilter.FILTER_ACCEPT
                }
                return NodeFilter.FILTER_SKIP
            }, this._doc = e, this.root = t, this.filter = o ?? null, this.whatToShow = r ?? NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, r, this._acceptNode));
            const n = t.shadowRoot;
            if (n) {
                const e = this._doc.createTreeWalker(n, this.whatToShow, {
                    acceptNode: this._acceptNode
                });
                this._walkerStack.unshift(e)
            }
        }
        get currentNode() {
            return this._currentNode
        }
        set currentNode(e) {
            if (!(0, t.nodeContains)(this.root, e)) throw Error("Cannot set currentNode to a node that is not contained by the root node.");
            let r = [],
                o = e,
                n = e;
            for (this._currentNode = e; o && o !== this.root;)
                if (o.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    let e = o,
                        t = this._doc.createTreeWalker(e, this.whatToShow, {
                            acceptNode: this._acceptNode
                        });
                    r.push(t), t.currentNode = n, this._currentSetFor.add(t), o = n = e.host
                } else o = o.parentNode;
            let i = this._doc.createTreeWalker(this.root, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            r.push(i), i.currentNode = n, this._currentSetFor.add(i), this._walkerStack = r
        }
        get doc() {
            return this._doc
        }
        firstChild() {
            let e = this.currentNode,
                r = this.nextNode();
            return (0, t.nodeContains)(e, r) ? (r && (this.currentNode = r), r) : (this.currentNode = e, null)
        }
        lastChild() {
            let e = this._walkerStack[0].lastChild();
            return e && (this.currentNode = e), e
        }
        nextNode() {
            let e = this._walkerStack[0].nextNode();
            if (e) {
                if (e.shadowRoot) {
                    let t;
                    if ("function" == typeof this.filter ? t = this.filter(e) : this.filter?.acceptNode && (t = this.filter.acceptNode(e)), t === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
                    let r = this.nextNode();
                    return r && (this.currentNode = r), r
                }
                return e && (this.currentNode = e), e
            }
            if (!(this._walkerStack.length > 1)) return null;
            {
                this._walkerStack.shift();
                let e = this.nextNode();
                return e && (this.currentNode = e), e
            }
        }
        previousNode() {
            let e = this._walkerStack[0];
            if (e.currentNode === e.root) {
                if (this._currentSetFor.has(e) && (this._currentSetFor.delete(e), this._walkerStack.length > 1)) {
                    this._walkerStack.shift();
                    let e = this.previousNode();
                    return e && (this.currentNode = e), e
                }
                return null
            }
            let t = e.previousNode();
            if (t) {
                if (t.shadowRoot) {
                    let e;
                    if ("function" == typeof this.filter ? e = this.filter(t) : this.filter?.acceptNode && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
                    let r = this.lastChild();
                    return r && (this.currentNode = r), r
                }
                return t && (this.currentNode = t), t
            }
            if (!(this._walkerStack.length > 1)) return null;
            {
                this._walkerStack.shift();
                let e = this.previousNode();
                return e && (this.currentNode = e), e
            }
        }
        nextSibling() {
            return null
        }
        previousSibling() {
            return null
        }
        parentNode() {
            return null
        }
    }

    function n(e, t, n, i) {
        return (0, r.shadowDOM)() ? new o(e, t, n, i) : e.createTreeWalker(t, n, i)
    }
    e.s(["createShadowTreeWalker", 0, n], 193777);
    var i = e.i(799163),
        l = e.i(816862),
        c = e.i(575414),
        s = e.i(904960),
        u = e.i(424690),
        a = e.i(185559),
        f = e.i(409781);
    let d = f.default.createContext(null),
        p = "react-aria-focus-scope-restore",
        h = null;

    function m(e) {
        return e[0].parentElement
    }

    function g(e) {
        let t = x.getTreeNode(h);
        for (; t && t.scopeRef !== e;) {
            if (t.contain) return !1;
            t = t.parent
        }
        return !0
    }

    function v(e, r) {
        return !!e && !!r && r.some(r => (0, t.nodeContains)(r, e))
    }

    function b(e, t = null) {
        if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
        for (let {
                scopeRef: r
            }
            of x.traverse(x.getTreeNode(t)))
            if (r && v(e, r.current)) return !0;
        return !1
    }

    function N(e, t) {
        let r = x.getTreeNode(t)?.parent;
        for (; r;) {
            if (r.scopeRef === e) return !0;
            r = r.parent
        }
        return !1
    }

    function E(e, t = !1) {
        if (null == e || t) {
            if (null != e) try {
                e.focus()
            } catch {}
        } else try {
            (0, i.focusSafely)(e)
        } catch {}
    }

    function w(e, t = !0) {
        let r = e[0].previousElementSibling,
            o = m(e),
            n = L(o, {
                tabbable: t
            }, e);
        n.currentNode = r;
        let i = n.nextNode();
        return t && !i && ((n = L(o = m(e), {
            tabbable: !1
        }, e)).currentNode = r, i = n.nextNode()), i
    }

    function T(e, t = !0) {
        E(w(e, t))
    }

    function y(e) {
        let t = x.getTreeNode(h);
        for (; t && t.scopeRef !== e;) {
            if (t.nodeToRestore) return !1;
            t = t.parent
        }
        return t?.scopeRef === e
    }

    function R(e) {
        e.dispatchEvent(new CustomEvent(p, {
            bubbles: !0,
            cancelable: !0
        })) && E(e)
    }

    function L(e, r, o) {
        let i = r?.tabbable ? u.isTabbable : u.isFocusable,
            l = e?.nodeType === Node.ELEMENT_NODE ? e : null,
            s = (0, c.getOwnerDocument)(l),
            a = n(s, e || s, NodeFilter.SHOW_ELEMENT, {
                acceptNode: e => (0, t.nodeContains)(r?.from, e) || r?.tabbable && "INPUT" === e.tagName && "radio" === e.getAttribute("type") && (! function(e) {
                    if (e.checked) return !0;
                    let t = function(e) {
                        if (!e.form) return Array.from((0, c.getOwnerDocument)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                        let t = e.form.elements.namedItem(e.name),
                            r = (0, c.getOwnerWindow)(e);
                        return t instanceof r.RadioNodeList ? Array.from(t).filter(e => e instanceof r.HTMLInputElement) : t instanceof r.HTMLInputElement ? [t] : []
                    }(e);
                    return t.length > 0 && !t.some(e => e.checked)
                }(e) || "INPUT" === a.currentNode.tagName && "radio" === a.currentNode.type && a.currentNode.name === e.name) ? NodeFilter.FILTER_REJECT : i(e) && (!o || v(e, o)) && (!r?.accept || r.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            });
        return r?.from && (a.currentNode = r.from), a
    }

    function C(e) {
        let t, r;
        do(t = e.lastChild()) && (r = t); while (t) return r
    }
    class S {
        constructor(e) {
            this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
        addChild(e) {
            this.children.add(e), e.parent = this
        }
        removeChild(e) {
            this.children.delete(e), e.parent = void 0
        }
    }
    let x = new class e {
        constructor() {
            this.fastMap = new Map, this.root = new S({
                scopeRef: null
            }), this.fastMap.set(null, this.root)
        }
        get size() {
            return this.fastMap.size
        }
        getTreeNode(e) {
            return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
            let o = this.fastMap.get(t ?? null);
            if (!o) return;
            let n = new S({
                scopeRef: e
            });
            o.addChild(n), n.parent = o, this.fastMap.set(e, n), r && (n.nodeToRestore = r)
        }
        addNode(e) {
            this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
            if (null === e) return;
            let t = this.fastMap.get(e);
            if (!t) return;
            let r = t.parent;
            for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && v(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
            let o = t.children;
            r && (r.removeChild(t), o.size > 0 && o.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
            if (null != e.scopeRef && (yield e), e.children.size > 0)
                for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
            let t = new e;
            for (let e of this.traverse()) t.addTreeNode(e.scopeRef, e.parent?.scopeRef ?? null, e.nodeToRestore);
            return t
        }
    };
    e.s(["FocusScope", 0, function(e) {
        var r, o, n, i, u, C, O, k, _, F;
        let M, A, P, I, {
                children: z,
                contain: H,
                restoreFocus: D,
                autoFocus: W
            } = e,
            B = (0, f.useRef)(null),
            K = (0, f.useRef)(null),
            U = (0, f.useRef)([]),
            {
                parentNode: V
            } = (0, f.useContext)(d) || {},
            Y = (0, f.useMemo)(() => new S({
                scopeRef: U
            }), [U]);
        (0, a.useLayoutEffect)(() => {
            let e = V || x.root;
            if (x.getTreeNode(e.scopeRef) && h && !N(h, e.scopeRef)) {
                let t = x.getTreeNode(h);
                t && (e = t)
            }
            e.addChild(Y), x.addNode(Y)
        }, [Y, V]), (0, a.useLayoutEffect)(() => {
            let e = x.getTreeNode(U);
            e && (e.contain = !!H)
        }, [H]), (0, a.useLayoutEffect)(() => {
            let e = B.current?.nextSibling,
                t = [],
                r = e => e.stopPropagation();
            for (; e && e !== K.current;) t.push(e), e.addEventListener(p, r), e = e.nextSibling;
            return U.current = t, () => {
                for (let e of t) e.removeEventListener(p, r)
            }
        }, [z]), r = U, o = D, n = H, (0, a.useLayoutEffect)(() => {
            if (o || n) return;
            let e = r.current,
                i = (0, c.getOwnerDocument)(e ? e[0] : void 0),
                l = e => {
                    let o = (0, t.getEventTarget)(e);
                    v(o, r.current) ? h = r : b(o) || (h = null)
                };
            return i.addEventListener("focusin", l, !1), e?.forEach(e => e.addEventListener("focusin", l, !1)), () => {
                i.removeEventListener("focusin", l, !1), e?.forEach(e => e.removeEventListener("focusin", l, !1))
            }
        }, [r, o, n]), i = U, u = H, M = (0, f.useRef)(void 0), A = (0, f.useRef)(void 0), (0, a.useLayoutEffect)(() => {
            let e = i.current;
            if (!u) {
                A.current && (cancelAnimationFrame(A.current), A.current = void 0);
                return
            }
            let r = (0, c.getOwnerDocument)(e ? e[0] : void 0),
                o = e => {
                    if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey || !g(i) || e.isComposing) return;
                    let o = (0, t.getActiveElement)(r),
                        n = i.current;
                    if (!n || !v(o, n)) return;
                    let l = L(m(n), {
                        tabbable: !0
                    }, n);
                    if (!o) return;
                    l.currentNode = o;
                    let s = e.shiftKey ? l.previousNode() : l.nextNode();
                    s || (l.currentNode = e.shiftKey ? n[n.length - 1].nextElementSibling : n[0].previousElementSibling, s = e.shiftKey ? l.previousNode() : l.nextNode()), e.preventDefault(), s && (E(s, !0), s instanceof(0, c.getOwnerWindow)(s).HTMLInputElement && s.select())
                },
                n = e => {
                    (!h || N(h, i)) && v((0, t.getEventTarget)(e), i.current) ? (h = i, M.current = (0, t.getEventTarget)(e)) : g(i) && !b((0, t.getEventTarget)(e), i) ? M.current ? M.current.focus() : h && h.current && T(h.current) : g(i) && (M.current = (0, t.getEventTarget)(e))
                },
                a = e => {
                    A.current && cancelAnimationFrame(A.current), A.current = requestAnimationFrame(() => {
                        let o = (0, l.getInteractionModality)(),
                            n = ("virtual" === o || null === o) && (0, s.isAndroid)() && (0, s.isChrome)(),
                            c = (0, t.getActiveElement)(r);
                        if (!n && c && g(i) && !b(c, i)) {
                            h = i;
                            let r = (0, t.getEventTarget)(e);
                            r && r.isConnected ? (M.current = r, M.current?.focus()) : h.current && T(h.current)
                        }
                    })
                };
            return r.addEventListener("keydown", o, !1), r.addEventListener("focusin", n, !1), e?.forEach(e => e.addEventListener("focusin", n, !1)), e?.forEach(e => e.addEventListener("focusout", a, !1)), () => {
                r.removeEventListener("keydown", o, !1), r.removeEventListener("focusin", n, !1), e?.forEach(e => e.removeEventListener("focusin", n, !1)), e?.forEach(e => e.removeEventListener("focusout", a, !1))
            }
        }, [i, u]), (0, a.useLayoutEffect)(() => () => {
            A.current && cancelAnimationFrame(A.current)
        }, [A]), C = U, O = D, k = H, P = (0, f.useRef)("u" > typeof document ? (0, t.getActiveElement)((0, c.getOwnerDocument)(C.current ? C.current[0] : void 0)) : null), (0, a.useLayoutEffect)(() => {
            let e = C.current,
                r = (0, c.getOwnerDocument)(e ? e[0] : void 0);
            if (!O || k) return;
            let o = () => {
                (!h || N(h, C)) && v((0, t.getActiveElement)(r), C.current) && (h = C)
            };
            return r.addEventListener("focusin", o, !1), e?.forEach(e => e.addEventListener("focusin", o, !1)), () => {
                r.removeEventListener("focusin", o, !1), e?.forEach(e => e.removeEventListener("focusin", o, !1))
            }
        }, [C, k]), (0, a.useLayoutEffect)(() => {
            let e = (0, c.getOwnerDocument)(C.current ? C.current[0] : void 0);
            if (!O) return;
            let t = t => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !g(C) || t.isComposing) return;
                let r = e.activeElement;
                if (!b(r, C) || !y(C)) return;
                let o = x.getTreeNode(C);
                if (!o) return;
                let n = o.nodeToRestore,
                    i = L(e.body, {
                        tabbable: !0
                    });
                i.currentNode = r;
                let l = t.shiftKey ? i.previousNode() : i.nextNode();
                if (n && n.isConnected && n !== e.body || (n = void 0, o.nodeToRestore = void 0), (!l || !b(l, C)) && n) {
                    i.currentNode = n;
                    do l = t.shiftKey ? i.previousNode() : i.nextNode(); while (b(l, C))(t.preventDefault(), t.stopPropagation(), l) ? E(l, !0): b(n) ? E(n, !0) : r.blur()
                }
            };
            return k || e.addEventListener("keydown", t, !0), () => {
                k || e.removeEventListener("keydown", t, !0)
            }
        }, [C, O, k]), (0, a.useLayoutEffect)(() => {
            let e = (0, c.getOwnerDocument)(C.current ? C.current[0] : void 0);
            if (!O) return;
            let r = x.getTreeNode(C);
            if (r) return r.nodeToRestore = P.current ?? void 0, () => {
                let r = x.getTreeNode(C);
                if (!r) return;
                let o = r.nodeToRestore,
                    n = (0, t.getActiveElement)(e);
                if (O && o && (n && b(n, C) || n === e.body && y(C))) {
                    let t = x.clone();
                    requestAnimationFrame(() => {
                        if (e.activeElement === e.body) {
                            let e = t.getTreeNode(C);
                            for (; e;) {
                                if (e.nodeToRestore && e.nodeToRestore.isConnected) return void R(e.nodeToRestore);
                                e = e.parent
                            }
                            for (e = t.getTreeNode(C); e;) {
                                if (e.scopeRef && e.scopeRef.current && x.getTreeNode(e.scopeRef)) return void R(w(e.scopeRef.current, !0));
                                e = e.parent
                            }
                        }
                    })
                }
            }
        }, [C, O]), _ = U, F = W, I = f.default.useRef(F), (0, f.useEffect)(() => {
            if (I.current) {
                h = _;
                let e = (0, c.getOwnerDocument)(_.current ? _.current[0] : void 0);
                !v((0, t.getActiveElement)(e), h.current) && _.current && T(_.current)
            }
            I.current = !1
        }, [_]), (0, f.useEffect)(() => {
            let e = (0, t.getActiveElement)((0, c.getOwnerDocument)(U.current ? U.current[0] : void 0)),
                r = null;
            if (v(e, U.current)) {
                for (let t of x.traverse()) t.scopeRef && v(e, t.scopeRef.current) && (r = t);
                r === x.getTreeNode(U) && (h = r.scopeRef)
            }
        }, [U]), (0, a.useLayoutEffect)(() => () => {
            let e = x.getTreeNode(U)?.parent?.scopeRef ?? null;
            (U === h || N(U, h)) && (!e || x.getTreeNode(e)) && (h = e), x.removeTreeNode(U)
        }, [U]);
        let j = (0, f.useMemo)(() => {
                var e;
                return e = U, {
                    focusNext(r = {}) {
                        let o = e.current,
                            {
                                from: n,
                                tabbable: i,
                                wrap: l,
                                accept: s
                            } = r,
                            u = n || (0, t.getActiveElement)((0, c.getOwnerDocument)(o[0] ?? void 0)),
                            a = o[0].previousElementSibling,
                            f = L(m(o), {
                                tabbable: i,
                                accept: s
                            }, o);
                        f.currentNode = v(u, o) ? u : a;
                        let d = f.nextNode();
                        return !d && l && (f.currentNode = a, d = f.nextNode()), d && E(d, !0), d
                    },
                    focusPrevious(r = {}) {
                        let o = e.current,
                            {
                                from: n,
                                tabbable: i,
                                wrap: l,
                                accept: s
                            } = r,
                            u = n || (0, t.getActiveElement)((0, c.getOwnerDocument)(o[0] ?? void 0)),
                            a = o[o.length - 1].nextElementSibling,
                            f = L(m(o), {
                                tabbable: i,
                                accept: s
                            }, o);
                        f.currentNode = v(u, o) ? u : a;
                        let d = f.previousNode();
                        return !d && l && (f.currentNode = a, d = f.previousNode()), d && E(d, !0), d
                    },
                    focusFirst(t = {}) {
                        let r = e.current,
                            {
                                tabbable: o,
                                accept: n
                            } = t,
                            i = L(m(r), {
                                tabbable: o,
                                accept: n
                            }, r);
                        i.currentNode = r[0].previousElementSibling;
                        let l = i.nextNode();
                        return l && E(l, !0), l
                    },
                    focusLast(t = {}) {
                        let r = e.current,
                            {
                                tabbable: o,
                                accept: n
                            } = t,
                            i = L(m(r), {
                                tabbable: o,
                                accept: n
                            }, r);
                        i.currentNode = r[r.length - 1].nextElementSibling;
                        let l = i.previousNode();
                        return l && E(l, !0), l
                    }
                }
            }, []),
            q = (0, f.useMemo)(() => ({
                focusManager: j,
                parentNode: Y
            }), [Y, j]);
        return f.default.createElement(d.Provider, {
            value: q
        }, f.default.createElement("span", {
            "data-focus-scope-start": !0,
            hidden: !0,
            ref: B
        }), z, f.default.createElement("span", {
            "data-focus-scope-end": !0,
            hidden: !0,
            ref: K
        }))
    }, "createFocusManager", 0, function(e, r = {}) {
        return {
            focusNext(o = {}) {
                let n = e.current;
                if (!n) return null;
                let {
                    from: i,
                    tabbable: l = r.tabbable,
                    wrap: s = r.wrap,
                    accept: u = r.accept
                } = o, a = i || (0, t.getActiveElement)((0, c.getOwnerDocument)(n)), f = L(n, {
                    tabbable: l,
                    accept: u
                });
                (0, t.nodeContains)(n, a) && (f.currentNode = a);
                let d = f.nextNode();
                return !d && s && (f.currentNode = n, d = f.nextNode()), d && E(d, !0), d
            },
            focusPrevious(o = r) {
                let n = e.current;
                if (!n) return null;
                let {
                    from: i,
                    tabbable: l = r.tabbable,
                    wrap: s = r.wrap,
                    accept: u = r.accept
                } = o, a = i || (0, t.getActiveElement)((0, c.getOwnerDocument)(n)), f = L(n, {
                    tabbable: l,
                    accept: u
                });
                if ((0, t.nodeContains)(n, a)) f.currentNode = a;
                else {
                    let e = C(f);
                    return e && E(e, !0), e ?? null
                }
                let d = f.previousNode();
                if (!d && s) {
                    f.currentNode = n;
                    let e = C(f);
                    if (!e) return null;
                    d = e
                }
                return d && E(d, !0), d ?? null
            },
            focusFirst(t = r) {
                let o = e.current;
                if (!o) return null;
                let {
                    tabbable: n = r.tabbable,
                    accept: i = r.accept
                } = t, l = L(o, {
                    tabbable: n,
                    accept: i
                }).nextNode();
                return l && E(l, !0), l
            },
            focusLast(t = r) {
                let o = e.current;
                if (!o) return null;
                let {
                    tabbable: n = r.tabbable,
                    accept: i = r.accept
                } = t, l = C(L(o, {
                    tabbable: n,
                    accept: i
                }));
                return l && E(l, !0), l ?? null
            }
        }
    }, "getFocusableTreeWalker", 0, L, "isElementInChildOfActiveScope", 0, function(e) {
        return b(e, h)
    }], 675815)
}, 852120, e => {
    "use strict";
    var t = e.i(409781);
    let r = (0, t.createContext)({});
    e.s(["useUNSAFE_PortalContext", 0, function() {
        return (0, t.useContext)(r) ?? {}
    }])
}, 975950, e => {
    "use strict";
    var t = e.i(904960),
        r = e.i(776050),
        o = e.i(747922);
    let n = {
            top: "top",
            bottom: "top",
            left: "left",
            right: "left"
        },
        i = {
            top: "bottom",
            bottom: "top",
            left: "right",
            right: "left"
        },
        l = {
            top: "left",
            left: "top"
        },
        c = {
            top: "height",
            left: "width"
        },
        s = {
            width: "totalWidth",
            height: "totalHeight"
        },
        u = {};

    function a(e, r) {
        let o = 0,
            n = 0,
            i = 0,
            l = 0,
            c = 0,
            s = 0,
            u = {},
            a = (r?.scale ?? 1) > 1;
        if ("BODY" === e.tagName || "HTML" === e.tagName) {
            let t = document.documentElement;
            i = t.clientWidth, l = t.clientHeight, o = r?.width ?? i, n = r?.height ?? l, u.top = t.scrollTop || e.scrollTop, u.left = t.scrollLeft || e.scrollLeft, r && (c = r.offsetTop, s = r.offsetLeft)
        } else({
            width: o,
            height: n,
            top: c,
            left: s
        } = g(e, !1)), u.top = e.scrollTop, u.left = e.scrollLeft, i = o, l = n;
        return (0, t.isWebKit)() && ("BODY" === e.tagName || "HTML" === e.tagName) && a && (u.top = 0, u.left = 0, c = r?.pageTop ?? 0, s = r?.pageLeft ?? 0), {
            width: o,
            height: n,
            totalWidth: i,
            totalHeight: l,
            scroll: u,
            top: c,
            left: s
        }
    }

    function f(e, t, r, o, i, l, s) {
        let u = i.scroll[e] ?? 0,
            a = o[c[e]],
            f = s[e] + o.scroll[n[e]] + l,
            d = s[e] + o.scroll[n[e]] + a - l,
            p = t - u + o.scroll[n[e]] + s[e] - o[n[e]],
            h = t - u + r + o.scroll[n[e]] + s[e] - o[n[e]];
        return p < f ? f - p : h > d ? Math.max(d - h, f - p) : 0
    }

    function d(e) {
        if (u[e]) return u[e];
        let [t, r] = e.split(" "), o = n[t] || "right", i = l[o];
        n[r] || (r = "center");
        let s = c[o],
            a = c[i];
        return u[e] = {
            placement: t,
            crossPlacement: r,
            axis: o,
            crossAxis: i,
            size: s,
            crossSize: a
        }, u[e]
    }

    function p(e, t, r, n, l, c, u, a, f, d, p) {
        let {
            placement: h,
            crossPlacement: m,
            axis: g,
            crossAxis: v,
            size: b,
            crossSize: N
        } = n, E = {};
        E[v] = e[v] ?? 0, "center" === m ? E[v] += ((e[N] ?? 0) - (r[N] ?? 0)) / 2 : m !== v && (E[v] += (e[N] ?? 0) - (r[N] ?? 0)), E[v] += c;
        let w = e[v] - r[N] + f + d,
            T = e[v] + e[N] - f - d;
        if (E[v] = (0, o.clamp)(E[v], w, T), h === g) {
            let t = a ? p[b] : p[s[b]];
            E[i[g]] = Math.floor(t - e[g] + l)
        } else E[g] = Math.floor(e[g] + e[b] + l);
        return E
    }

    function h(e, t, r, o, n, l, c, s) {
        let {
            placement: u,
            axis: a,
            size: f
        } = l;
        return u === a ? Math.max(0, r[a] - (c.scroll[a] ?? 0) - (e[a] + (s ? t[a] : 0)) - (o[a] ?? 0) - o[i[a]] - n) : Math.max(0, e[f] + e[a] + (s ? t[a] : 0) - r[a] - r[f] + (c.scroll[a] ?? 0) - (o[a] ?? 0) - o[i[a]] - n)
    }

    function m(e, t) {
        let {
            top: r,
            left: o,
            width: n,
            height: i
        } = e.getBoundingClientRect();
        return t && e instanceof e.ownerDocument.defaultView.HTMLElement && (n = e.offsetWidth, i = e.offsetHeight), {
            top: r,
            left: o,
            width: n,
            height: i
        }
    }

    function g(e, t, r) {
        let {
            top: o,
            left: n,
            width: i,
            height: l
        } = r || m(e, t), {
            scrollTop: c,
            scrollLeft: s,
            clientTop: u,
            clientLeft: a
        } = document.documentElement;
        return {
            top: o + c - u,
            left: n + s - a,
            width: i,
            height: l
        }
    }

    function v(e, t, r, o) {
        let n, i = window.getComputedStyle(e);
        if ("fixed" === i.position) n = o || m(e, r);
        else {
            n = g(e, r, o);
            let i = g(t, r),
                l = window.getComputedStyle(t);
            i.top += (parseInt(l.borderTopWidth, 10) || 0) - t.scrollTop, i.left += (parseInt(l.borderLeftWidth, 10) || 0) - t.scrollLeft, n.top -= i.top, n.left -= i.left
        }
        return n.top -= parseInt(i.marginTop, 10) || 0, n.left -= parseInt(i.marginLeft, 10) || 0, n
    }

    function b(e) {
        let t = window.getComputedStyle(e);
        return "none" !== t.transform || /transform|perspective/.test(t.willChange) || "none" !== t.filter || "paint" === t.contain || "backdropFilter" in t && "none" !== t.backdropFilter || "WebkitBackdropFilter" in t && "none" !== t.WebkitBackdropFilter
    }
    e.s(["calculatePosition", 0, function(e) {
        let t, l, {
                placement: c,
                targetNode: u,
                overlayNode: N,
                scrollNode: E,
                padding: w,
                shouldFlip: T,
                boundaryElement: y,
                offset: R,
                crossOffset: L,
                maxHeight: C,
                arrowSize: S = 0,
                arrowBoundaryOffset: x = 0,
                targetRect: O
            } = e,
            k = "u" > typeof document ? window.visualViewport : null,
            _ = N instanceof HTMLElement ? function(e) {
                let t = e.offsetParent;
                if (t && t === document.body && "static" === window.getComputedStyle(t).position && !b(t) && (t = document.documentElement), null == t)
                    for (t = e.parentElement; t && !b(t);) t = t.parentElement;
                return t || document.documentElement
            }(N) : document.documentElement,
            F = _ === document.documentElement,
            M = window.getComputedStyle(_).position,
            A = F ? g(u, !1, O) : v(u, _, !1, O);
        if (!F) {
            let {
                marginTop: e,
                marginLeft: t
            } = window.getComputedStyle(u);
            A.top += parseInt(e, 10) || 0, A.left += parseInt(t, 10) || 0
        }
        let P = g(N, !0),
            I = {
                top: parseInt((t = window.getComputedStyle(N)).marginTop, 10) || 0,
                bottom: parseInt(t.marginBottom, 10) || 0,
                left: parseInt(t.marginLeft, 10) || 0,
                right: parseInt(t.marginRight, 10) || 0
            };
        P.width += (I.left ?? 0) + (I.right ?? 0), P.height += (I.top ?? 0) + (I.bottom ?? 0), E.scrollTop, E.scrollLeft, E.scrollWidth, E.scrollHeight;
        let z = a(y, k),
            H = a(_, k);
        if ("BODY" !== y.tagName && "HTML" !== y.tagName || F) l = ("BODY" === y.tagName || "HTML" === y.tagName) && F ? {
            top: 0,
            left: 0,
            width: 0,
            height: 0
        } : v(y, _, !1);
        else {
            let e = m(_, !1);
            l = {
                top: -(e.top - z.top),
                left: -(e.left - z.left),
                width: 0,
                height: 0
            }
        }
        return function(e, t, r, l, c, u, a, m, g, v, b, N, E, w, T, y, R) {
            var L, C, S;
            let x, O, k, _ = d(e),
                {
                    size: F,
                    crossAxis: M,
                    crossSize: A,
                    placement: P,
                    crossPlacement: I
                } = _,
                z = p(t, a, r, _, v, b, g, N, w, T, m),
                H = v,
                D = h(a, g, t, l, c + v, _, m, y);
            if (u && r[F] > D) {
                let e = d(`${i[P]} ${I}`),
                    o = p(t, a, r, e, v, b, g, N, w, T, m);
                h(a, g, t, l, c + v, e, m, y) > D && (_ = e, z = o, H = v)
            }
            let W = "bottom";
            "top" === _.axis ? "top" === _.placement ? W = "top" : "bottom" === _.placement && (W = "bottom") : "top" === _.crossAxis && ("top" === _.crossPlacement ? W = "bottom" : "bottom" === _.crossPlacement && (W = "top"));
            let B = f(M, z[M], r[A], a, m, c, g);
            z[M] += B;
            let K = (L = z, C = r.height, S = W, x = (null != L.top ? L.top : m[s.height] - (L.bottom ?? 0) - C) - (m.scroll.top ?? 0), O = y ? g.top : 0, k = {
                top: Math.max(a.top + O, (R?.offsetTop ?? a.top) + O),
                bottom: Math.min(a.top + a.height + O, (R?.offsetTop ?? 0) + (R?.height ?? 0))
            }, "top" !== S ? Math.max(0, k.bottom - x - ((l.top ?? 0) + (l.bottom ?? 0) + c)) : Math.max(0, x + C - k.top - ((l.top ?? 0) + (l.bottom ?? 0) + c)));
            E && E < K && (K = E), r.height = Math.min(r.height, K), B = f(M, (z = p(t, a, r, _, H, b, g, N, w, T, m))[M], r[A], a, m, c, g), z[M] += B;
            let U = {},
                V = t[M] - z[M] - l[n[M]],
                Y = V + .5 * t[A],
                j = w / 2 + T,
                q = "left" === n[M] ? (l.left ?? 0) + (l.right ?? 0) : (l.top ?? 0) + (l.bottom ?? 0),
                $ = r[A] - q - w / 2 - T,
                G = t[M] + w / 2 - (z[M] + l[n[M]]),
                J = t[M] + t[A] - w / 2 - (z[M] + l[n[M]]),
                Q = (0, o.clamp)(Y, G, J);
            U[M] = (0, o.clamp)(Q, j, $), ({
                placement: P,
                crossPlacement: I
            } = _), w ? V = U[M] : "right" === I ? V += t[A] : "center" === I && (V += t[A] / 2);
            let X = "left" === P || "top" === P ? r[F] : 0,
                Z = {
                    x: "top" === P || "bottom" === P ? V : X,
                    y: "left" === P || "right" === P ? V : X
                };
            return {
                position: z,
                maxHeight: K,
                arrowOffsetLeft: U.left,
                arrowOffsetTop: U.top,
                placement: P,
                triggerAnchorPoint: Z
            }
        }(c, A, P, I, w, T, z, H, l, R, L, !!M && "static" !== M, C, S, x, (0, r.nodeContains)(y, _), k)
    }, "getRect", 0, m])
}, 101933, e => {
    "use strict";
    var t = e.i(776050),
        r = e.i(409781);
    let o = new WeakMap;
    e.s(["onCloseMap", 0, o, "useCloseOnScroll", 0, function(e) {
        let {
            triggerRef: n,
            isOpen: i,
            onClose: l
        } = e;
        (0, r.useEffect)(() => {
            if (!i || null === l) return;
            let e = e => {
                let r = (0, t.getEventTarget)(e);
                if (!n.current || r instanceof Node && !(0, t.nodeContains)(r, n.current) || r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement) return;
                let i = l || o.get(n.current);
                i && i()
            };
            return window.addEventListener("scroll", e, !0), () => {
                window.removeEventListener("scroll", e, !0)
            }
        }, [i, l, n])
    }])
}, 879537, e => {
    "use strict";
    var t = e.i(975950),
        r = e.i(776050),
        o = e.i(101933),
        n = e.i(185559),
        i = e.i(876728),
        l = e.i(138381),
        c = e.i(409781);
    let s = "u" > typeof document ? window.visualViewport : null;
    e.s(["useOverlayPosition", 0, function(e) {
        var u;
        let {
            direction: a
        } = (0, i.useLocale)(), {
            arrowSize: f,
            targetRef: d,
            overlayRef: p,
            arrowRef: h,
            scrollRef: m = p,
            placement: g = "bottom",
            containerPadding: v = 12,
            shouldFlip: b = !0,
            boundaryElement: N = "u" > typeof document ? document.body : null,
            offset: E = 0,
            crossOffset: w = 0,
            shouldUpdatePosition: T = !0,
            isOpen: y = !0,
            onClose: R,
            maxHeight: L,
            arrowBoundaryOffset: C = 0,
            getTargetRect: S
        } = e, [x, O] = (0, c.useState)(null), k = [T, g, p.current, d.current, h?.current, m.current, v, b, N, E, w, y, a, L, C, f], _ = (0, c.useRef)(s?.scale);
        (0, c.useEffect)(() => {
            y && (_.current = s?.scale)
        }, [y]);
        let F = (0, c.useCallback)(() => {
            var e;
            if (!1 === T || !y || !p.current || !d.current || !N || s?.scale !== _.current) return;
            let o = null;
            if (m.current && (0, r.isFocusWithin)(m.current)) {
                let e = (0, r.getActiveElement)()?.getBoundingClientRect(),
                    t = m.current.getBoundingClientRect();
                (o = {
                    type: "top",
                    offset: (e?.top ?? 0) - t.top
                }).offset > t.height / 2 && (o.type = "bottom", o.offset = (e?.bottom ?? 0) - t.bottom)
            }
            let n = p.current;
            !L && p.current && (n.style.top = "0px", n.style.bottom = "", n.style.maxHeight = (window.visualViewport?.height ?? window.innerHeight) + "px");
            let i = (0, t.calculatePosition)({
                placement: (e = g, "rtl" === a ? e.replace("start", "right").replace("end", "left") : e.replace("start", "left").replace("end", "right")),
                overlayNode: p.current,
                targetNode: d.current,
                scrollNode: m.current || p.current,
                padding: v,
                shouldFlip: b,
                boundaryElement: N,
                offset: E,
                crossOffset: w,
                maxHeight: L,
                arrowSize: f ?? (h?.current ? (0, t.getRect)(h.current, !0).width : 0),
                arrowBoundaryOffset: C,
                targetRect: S?.(d.current)
            });
            if (!i.position) return;
            n.style.top = "", n.style.bottom = "", n.style.left = "", n.style.right = "", Object.keys(i.position).forEach(e => n.style[e] = i.position[e] + "px"), n.style.maxHeight = null != i.maxHeight ? i.maxHeight + "px" : "";
            let l = (0, r.getActiveElement)();
            if (o && l && m.current) {
                let e = l.getBoundingClientRect(),
                    t = m.current.getBoundingClientRect(),
                    r = e[o.type] - t[o.type];
                m.current.scrollTop += r - o.offset
            }
            O(i)
        }, k);
        (0, n.useLayoutEffect)(F, k), u = F, (0, n.useLayoutEffect)(() => (window.addEventListener("resize", u, !1), () => {
            window.removeEventListener("resize", u, !1)
        }), [u]), (0, l.useResizeObserver)({
            ref: p,
            onResize: F
        }), (0, l.useResizeObserver)({
            ref: d,
            onResize: F
        });
        let M = (0, c.useRef)(!1);
        (0, n.useLayoutEffect)(() => {
            let e, t = () => {
                    M.current = !0, clearTimeout(e), e = setTimeout(() => {
                        M.current = !1
                    }, 500), F()
                },
                r = () => {
                    M.current && t()
                };
            return s?.addEventListener("resize", t), s?.addEventListener("scroll", r), () => {
                s?.removeEventListener("resize", t), s?.removeEventListener("scroll", r)
            }
        }, [F]);
        let A = (0, c.useCallback)(() => {
            M.current || R?.()
        }, [R, M]);
        return (0, o.useCloseOnScroll)({
            triggerRef: d,
            isOpen: y,
            onClose: R && A
        }), {
            overlayProps: {
                style: {
                    position: x ? "absolute" : "fixed",
                    top: x ? void 0 : 0,
                    left: x ? void 0 : 0,
                    zIndex: 1e5,
                    ...x?.position,
                    maxHeight: x?.maxHeight ?? "100vh"
                }
            },
            placement: x?.placement ?? null,
            triggerAnchorPoint: x?.triggerAnchorPoint ?? null,
            arrowProps: {
                "aria-hidden": "true",
                role: "presentation",
                style: {
                    left: x?.arrowOffsetLeft,
                    top: x?.arrowOffsetTop
                }
            },
            updatePosition: F
        }
    }])
}, 964059, e => {
    "use strict";
    var t = e.i(600939),
        r = e.i(409781);
    e.s(["useEvent", 0, function(e, o, n, i) {
        let l = (0, t.useEffectEvent)(n),
            c = null == n;
        (0, r.useEffect)(() => {
            if (c || !e.current) return;
            let t = e.current;
            return t.addEventListener(o, l, i), () => {
                t.removeEventListener(o, l, i)
            }
        }, [e, o, i, c])
    }])
}, 138381, e => {
    "use strict";
    var t = e.i(600939),
        r = e.i(409781);
    e.s(["useResizeObserver", 0, function(e) {
        let {
            ref: o,
            box: n,
            onResize: i
        } = e, l = (0, t.useEffectEvent)(i);
        (0, r.useEffect)(() => {
            let e = o?.current;
            if (e)
                if (void 0 === window.ResizeObserver) return window.addEventListener("resize", l, !1), () => {
                    window.removeEventListener("resize", l, !1)
                };
                else {
                    let t = new window.ResizeObserver(e => {
                        e.length && l()
                    });
                    return t.observe(e, {
                        box: n
                    }), () => {
                        e && t.unobserve(e)
                    }
                }
        }, [o, n])
    }])
}, 512985, e => {
    "use strict";
    var t = e.i(803258),
        r = e.i(409781);
    e.s(["useOverlayTriggerState", 0, function(e) {
        let [o, n] = (0, t.useControlledState)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), i = (0, r.useCallback)(() => {
            n(!0)
        }, [n]), l = (0, r.useCallback)(() => {
            n(!1)
        }, [n]), c = (0, r.useCallback)(() => {
            n(!o)
        }, [n, o]);
        return {
            isOpen: o,
            setOpen: n,
            open: i,
            close: l,
            toggle: c
        }
    }])
}, 803258, e => {
    "use strict";
    var t = e.i(409781);
    let r = "u" > typeof document ? t.default.useInsertionEffect ?? t.default.useLayoutEffect : () => {};
    e.s(["useControlledState", 0, function(e, o, n) {
        let [i, l] = (0, t.useState)(e || o), c = (0, t.useRef)(i), s = (0, t.useRef)(void 0 !== e), u = void 0 !== e;
        (0, t.useEffect)(() => {
            s.current, s.current = u
        }, [u]);
        let a = u ? e : i;
        r(() => {
            c.current = a
        });
        let [, f] = (0, t.useReducer)(() => ({}), {});
        return [a, (0, t.useCallback)((e, ...t) => {
            let r = "function" == typeof e ? e(c.current) : e;
            Object.is(c.current, r) || (c.current = r, l(r), f(), n?.(r, ...t))
        }, [n])]
    }])
}]);

//# debugId=0ed56322-0510-8b31-3e80-f6ce1cfca2ae