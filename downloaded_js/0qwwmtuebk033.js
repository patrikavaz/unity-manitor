;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "a55d3786-7369-ab84-a776-db08961ccccc")
    } catch (e) {}
}();
(() => {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 712598, e => {
        var t = e.i(167358);

        function r(e) {
            return "span" === e._type && "text" in e && "string" == typeof e.text && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
        }

        function n(e) {
            return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
        }

        function o(e) {
            return n(e) && "listItem" in e && "string" == typeof e.listItem && (typeof e.level > "u" || "number" == typeof e.level)
        }

        function i(e) {
            return "@list" === e._type
        }

        function l(e) {
            return "@span" === e._type
        }

        function s(e) {
            return "@text" === e._type
        }
        let c = ["strong", "em", "code", "underline", "strike-through"];

        function u(e, t, n) {
            if (!r(e) || !e.marks || !e.marks.length) return [];
            let o = e.marks.slice(),
                i = {};
            return o.forEach(e => {
                i[e] = 1;
                for (let o = t + 1; o < n.length; o++) {
                    let t = n[o];
                    if (t && r(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) i[e]++;
                    else break
                }
            }), o.sort((e, t) => (function(e, t, r) {
                let n = e[t],
                    o = e[r];
                if (n !== o) return o - n;
                let i = c.indexOf(t),
                    l = c.indexOf(r);
                return i !== l ? i - l : t.localeCompare(r)
            })(i, e, t))
        }

        function a(e, t, r) {
            return {
                _type: "@list",
                _key: `${e._key||`${t}`}-parent`,
                mode: r,
                level: e.level || 1,
                listItem: e.listItem,
                children: [e]
            }
        }

        function d(e, t) {
            let n = t.level || 1,
                o = t.listItem || "normal",
                l = "string" == typeof t.listItem;
            if (i(e) && (e.level || 1) === n && l && (e.listItem || "normal") === o) return e;
            if (!("children" in e)) return;
            let s = e.children[e.children.length - 1];
            return s && !r(s) ? d(s, t) : void 0
        }
        var f = e.i(495056);
        let h = {
                textDecoration: "underline"
            },
            p = (e, t) => `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
            m = e => p(`block type "${e}"`, "types");

        function N(e) {
            console.warn(e)
        }
        let y = {
                display: "none"
            },
            v = {
                types: {},
                block: {
                    normal: ({
                        children: e
                    }) => (0, t.jsx)("p", {
                        children: e
                    }),
                    blockquote: ({
                        children: e
                    }) => (0, t.jsx)("blockquote", {
                        children: e
                    }),
                    h1: ({
                        children: e
                    }) => (0, t.jsx)("h1", {
                        children: e
                    }),
                    h2: ({
                        children: e
                    }) => (0, t.jsx)("h2", {
                        children: e
                    }),
                    h3: ({
                        children: e
                    }) => (0, t.jsx)("h3", {
                        children: e
                    }),
                    h4: ({
                        children: e
                    }) => (0, t.jsx)("h4", {
                        children: e
                    }),
                    h5: ({
                        children: e
                    }) => (0, t.jsx)("h5", {
                        children: e
                    }),
                    h6: ({
                        children: e
                    }) => (0, t.jsx)("h6", {
                        children: e
                    })
                },
                marks: {
                    em: ({
                        children: e
                    }) => (0, t.jsx)("em", {
                        children: e
                    }),
                    strong: ({
                        children: e
                    }) => (0, t.jsx)("strong", {
                        children: e
                    }),
                    code: ({
                        children: e
                    }) => (0, t.jsx)("code", {
                        children: e
                    }),
                    underline: ({
                        children: e
                    }) => (0, t.jsx)("span", {
                        style: h,
                        children: e
                    }),
                    "strike-through": ({
                        children: e
                    }) => (0, t.jsx)("del", {
                        children: e
                    }),
                    link: ({
                        children: e,
                        value: r
                    }) => (0, t.jsx)("a", {
                        href: null == r ? void 0 : r.href,
                        children: e
                    })
                },
                list: {
                    number: ({
                        children: e
                    }) => (0, t.jsx)("ol", {
                        children: e
                    }),
                    bullet: ({
                        children: e
                    }) => (0, t.jsx)("ul", {
                        children: e
                    })
                },
                listItem: ({
                    children: e
                }) => (0, t.jsx)("li", {
                    children: e
                }),
                hardBreak: () => (0, t.jsx)("br", {}),
                unknownType: ({
                    value: e,
                    isInline: r
                }) => {
                    let n = m(e._type);
                    return r ? (0, t.jsx)("span", {
                        style: y,
                        children: n
                    }) : (0, t.jsx)("div", {
                        style: y,
                        children: n
                    })
                },
                unknownMark: ({
                    markType: e,
                    children: r
                }) => (0, t.jsx)("span", {
                    className: `unknown__pt__mark__${e}`,
                    children: r
                }),
                unknownList: ({
                    children: e
                }) => (0, t.jsx)("ul", {
                    children: e
                }),
                unknownListItem: ({
                    children: e
                }) => (0, t.jsx)("li", {
                    children: e
                }),
                unknownBlockStyle: ({
                    children: e
                }) => (0, t.jsx)("p", {
                    children: e
                })
            };

        function b(e, t, r) {
            let n = t[r],
                o = e[r];
            return "function" == typeof n || n && "function" == typeof o ? n : n ? {
                ...o,
                ...n
            } : o
        }

        function k(e) {
            let {
                node: t,
                index: n,
                isInline: o,
                renderNode: i
            } = e, l = (function(e) {
                var t;
                let {
                    children: n
                } = e, o = e.markDefs ?? [];
                if (!n || !n.length) return [];
                let i = n.map(u),
                    l = {
                        _type: "@span",
                        children: [],
                        markType: "<unknown>"
                    },
                    s = [l];
                for (let e = 0; e < n.length; e++) {
                    let l = n[e];
                    if (!l) continue;
                    let c = i[e] || [],
                        u = 1;
                    if (s.length > 1)
                        for (; u < s.length; u++) {
                            let e = (null == (t = s[u]) ? void 0 : t.markKey) || "",
                                r = c.indexOf(e);
                            if (-1 === r) break;
                            c.splice(r, 1)
                        }
                    let a = (s = s.slice(0, u))[s.length - 1];
                    if (a) {
                        for (let e of c) {
                            let t = null == o ? void 0 : o.find(t => t._key === e),
                                r = t ? t._type : e,
                                n = {
                                    _type: "@span",
                                    _key: l._key,
                                    children: [],
                                    markDef: t,
                                    markType: r,
                                    markKey: e
                                };
                            a.children.push(n), s.push(n), a = n
                        }
                        if (r(l)) {
                            let e = l.text.split(`
`);
                            for (let t = e.length; t-- > 1;) e.splice(t, 0, `
`);
                            a.children = a.children.concat(e.map(e => ({
                                _type: "@text",
                                text: e
                            })))
                        } else a.children = a.children.concat(l)
                    }
                }
                return l.children
            })(t).map((e, t) => i({
                node: e,
                isInline: !0,
                index: t,
                renderNode: i
            }));
            return {
                _key: t._key || `block-${n}`,
                children: l,
                index: n,
                isInline: o,
                node: t
            }
        }

        function T() {}
        e.s(["f", 0, function({
            value: e,
            components: r,
            listNestingMode: c,
            onMissingComponent: u = N
        }) {
            let h = u || T,
                y = function(e, t) {
                    let r, n = [];
                    for (let s = 0; s < e.length; s++) {
                        let c = e[s];
                        if (c) {
                            var i, l;
                            if (!o(c)) {
                                n.push(c), r = void 0;
                                continue
                            }
                            if (!r) {
                                r = a(c, s, t), n.push(r);
                                continue
                            }
                            if (i = c, l = r, (i.level || 1) === l.level && i.listItem === l.listItem) {
                                r.children.push(c);
                                continue
                            }
                            if ((c.level || 1) > r.level) {
                                let e = a(c, s, t);
                                if ("html" === t) {
                                    let t = r.children[r.children.length - 1],
                                        n = {
                                            ...t,
                                            children: [...t.children, e]
                                        };
                                    r.children[r.children.length - 1] = n
                                } else r.children.push(e);
                                r = e;
                                continue
                            }
                            if ((c.level || 1) < r.level) {
                                let e = n[n.length - 1],
                                    o = e && d(e, c);
                                if (o) {
                                    (r = o).children.push(c);
                                    continue
                                }
                                r = a(c, s, t), n.push(r);
                                continue
                            }
                            if (c.listItem !== r.listItem) {
                                let e = n[n.length - 1],
                                    o = e && d(e, {
                                        level: c.level || 1
                                    });
                                if (o && o.listItem === c.listItem) {
                                    (r = o).children.push(c);
                                    continue
                                }
                                r = a(c, s, t), n.push(r);
                                continue
                            }
                            console.warn("Unknown state encountered for block", c), n.push(c)
                        }
                    }
                    return n
                }(Array.isArray(e) ? e : [e], c || "html"),
                E = (0, f.useMemo)(() => r ? function(e, t) {
                    let {
                        block: r,
                        list: n,
                        listItem: o,
                        marks: i,
                        types: l,
                        ...s
                    } = t;
                    return {
                        ...e,
                        block: b(e, t, "block"),
                        list: b(e, t, "list"),
                        listItem: b(e, t, "listItem"),
                        marks: b(e, t, "marks"),
                        types: b(e, t, "types"),
                        ...s
                    }
                }(v, r) : v, [r]),
                _ = (0, f.useMemo)(() => {
                    var e, r;
                    return e = E, r = h,
                        function c(u) {
                            var a, d, f, h, N, y, v, b;
                            let T, E, {
                                    node: _,
                                    index: g,
                                    isInline: x
                                } = u,
                                w = _._key || `node-${g}`;
                            return i(_) ? function(n, o, i) {
                                let l = n.children.map((e, t) => c({
                                        node: e._key ? e : {
                                            ...e,
                                            _key: `li-${o}-${t}`
                                        },
                                        index: t,
                                        isInline: !1
                                    })),
                                    s = e.list,
                                    u = ("function" == typeof s ? s : s[n.listItem]) || e.unknownList;
                                if (u === e.unknownList) {
                                    let e = n.listItem || "bullet";
                                    r(p(`list style "${e}"`, "list"), {
                                        nodeType: "listStyle",
                                        type: e
                                    })
                                }
                                return (0, t.jsx)(u, {
                                    value: n,
                                    index: o,
                                    isInline: !1,
                                    renderNode: c,
                                    children: l
                                }, i)
                            }(_, g, w) : o(_) ? function(n, o, i) {
                                let l = k({
                                        node: n,
                                        index: o,
                                        isInline: !1,
                                        renderNode: c
                                    }),
                                    s = e.listItem,
                                    u = ("function" == typeof s ? s : s[n.listItem]) || e.unknownListItem;
                                if (u === e.unknownListItem) {
                                    let e = n.listItem || "bullet";
                                    r(p(`list item style "${e}"`, "listItem"), {
                                        type: e,
                                        nodeType: "listItemStyle"
                                    })
                                }
                                let a = l.children;
                                if (n.style && "normal" !== n.style) {
                                    let {
                                        listItem: e,
                                        ...t
                                    } = n;
                                    a = c({
                                        node: t,
                                        index: o,
                                        isInline: !1
                                    })
                                }
                                return (0, t.jsx)(u, {
                                    value: n,
                                    index: o,
                                    isInline: !1,
                                    renderNode: c,
                                    children: a
                                }, i)
                            }(_, g, w) : l(_) ? function(n, o) {
                                let {
                                    markDef: i,
                                    markType: u,
                                    markKey: a
                                } = n, d = e.marks[u] || e.unknownMark, f = n.children.map((e, t) => c({
                                    node: e,
                                    index: t,
                                    isInline: !0
                                }));
                                return d === e.unknownMark && r(p(`mark type "${u}"`, "marks"), {
                                    nodeType: "mark",
                                    type: u
                                }), (0, t.jsx)(d, {
                                    text: function e(t) {
                                        let r = "";
                                        return t.children.forEach(t => {
                                            s(t) ? r += t.text : l(t) && (r += e(t))
                                        }), r
                                    }(n),
                                    value: i,
                                    markType: u,
                                    markKey: a,
                                    renderNode: c,
                                    children: f
                                }, o)
                            }(_, w) : _._type in e.types ? (a = _, d = g, f = w, h = x, (T = e.types[a._type]) ? (0, t.jsx)(T, {
                                value: a,
                                isInline: h,
                                index: d,
                                renderNode: c
                            }, f) : null) : n(_) ? function(n, o, i, l) {
                                let {
                                    _key: s,
                                    ...u
                                } = k({
                                    node: n,
                                    index: o,
                                    isInline: l,
                                    renderNode: c
                                }), a = u.node.style || "normal", d = ("function" == typeof e.block ? e.block : e.block[a]) || e.unknownBlockStyle;
                                return d === e.unknownBlockStyle && r(p(`block style "${a}"`, "block"), {
                                    nodeType: "blockStyle",
                                    type: a
                                }), (0, t.jsx)(d, {
                                    ...u,
                                    value: u.node,
                                    renderNode: c
                                }, i)
                            }(_, g, w, x) : s(_) ? function(r, n) {
                                if (r.text === `
`) {
                                    let r = e.hardBreak;
                                    return r ? (0, t.jsx)(r, {}, n) : `
`
                                }
                                return r.text
                            }(_, w) : (N = _, y = g, v = w, b = x, r(m(N._type), {
                                nodeType: "block",
                                type: N._type
                            }), E = e.unknownType, (0, t.jsx)(E, {
                                value: N,
                                isInline: b,
                                index: y,
                                renderNode: c
                            }, v))
                        }
                }, [E, h]),
                g = y.map((e, t) => _({
                    node: e,
                    index: t,
                    isInline: !1,
                    renderNode: _
                }));
            return (0, t.jsx)(t.Fragment, {
                children: g
            })
        }], 712598)
    }, 191199, 773425, e => {
        var t = e.i(402390),
            r = e.i(347781);
        class n {
            constructor(e, t, r, n) {
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
                }, this._doc = e, this.root = t, this.filter = n ?? null, this.whatToShow = r ?? NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, r, this._acceptNode));
                let o = t.shadowRoot;
                if (o) {
                    let e = this._doc.createTreeWalker(o, this.whatToShow, {
                        acceptNode: this._acceptNode
                    });
                    this._walkerStack.unshift(e)
                }
            }
            get currentNode() {
                return this._currentNode
            }
            set currentNode(e) {
                if (!(0, t.C)(this.root, e)) throw Error("Cannot set currentNode to a node that is not contained by the root node.");
                let r = [],
                    n = e,
                    o = e;
                for (this._currentNode = e; n && n !== this.root;)
                    if (n.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                        let e = n,
                            t = this._doc.createTreeWalker(e, this.whatToShow, {
                                acceptNode: this._acceptNode
                            });
                        r.push(t), t.currentNode = o, this._currentSetFor.add(t), n = o = e.host
                    } else n = n.parentNode;
                let i = this._doc.createTreeWalker(this.root, this.whatToShow, {
                    acceptNode: this._acceptNode
                });
                r.push(i), i.currentNode = o, this._currentSetFor.add(i), this._walkerStack = r
            }
            get doc() {
                return this._doc
            }
            firstChild() {
                let e = this.currentNode,
                    r = this.nextNode();
                return (0, t.C)(e, r) ? (r && (this.currentNode = r), r) : (this.currentNode = e, null)
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

        function o(e, t, o, i) {
            return (0, r.f)() ? new n(e, t, o, i) : e.createTreeWalker(t, o, i)
        }
        e.s(["f", 0, o], 773425);
        var i = e.i(908497),
            l = e.i(528837),
            s = e.i(653374),
            c = e.i(902844),
            u = e.i(846261),
            a = e.i(708705),
            d = e.i(495056);
        let f = d.default.createContext(null),
            h = "react-aria-focus-scope-restore",
            p = null;

        function m(e) {
            return e[0].parentElement
        }

        function N(e) {
            let t = S.getTreeNode(p);
            for (; t && t.scopeRef !== e;) {
                if (t.contain) return !1;
                t = t.parent
            }
            return !0
        }

        function y(e, r) {
            return !!e && !!r && r.some(r => (0, t.C)(r, e))
        }

        function v(e, t = null) {
            if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
            for (let {
                    scopeRef: r
                }
                of S.traverse(S.getTreeNode(t)))
                if (r && y(e, r.current)) return !0;
            return !1
        }

        function b(e, t) {
            let r = S.getTreeNode(t)?.parent;
            for (; r;) {
                if (r.scopeRef === e) return !0;
                r = r.parent
            }
            return !1
        }

        function k(e, t = !1) {
            if (null == e || t) {
                if (null != e) try {
                    e.focus()
                } catch {}
            } else try {
                (0, i.f)(e)
            } catch {}
        }

        function T(e, t = !0) {
            let r = e[0].previousElementSibling,
                n = m(e),
                o = x(n, {
                    tabbable: t
                }, e);
            o.currentNode = r;
            let i = o.nextNode();
            return t && !i && ((o = x(n = m(e), {
                tabbable: !1
            }, e)).currentNode = r, i = o.nextNode()), i
        }

        function E(e, t = !0) {
            k(T(e, t))
        }

        function _(e) {
            let t = S.getTreeNode(p);
            for (; t && t.scopeRef !== e;) {
                if (t.nodeToRestore) return !1;
                t = t.parent
            }
            return t?.scopeRef === e
        }

        function g(e) {
            e.dispatchEvent(new CustomEvent(h, {
                bubbles: !0,
                cancelable: !0
            })) && k(e)
        }

        function x(e, r, n) {
            let i = r?.tabbable ? u.m : u.x,
                l = e?.nodeType === Node.ELEMENT_NODE ? e : null,
                c = (0, s.o)(l),
                a = o(c, e || c, NodeFilter.SHOW_ELEMENT, {
                    acceptNode: e => (0, t.C)(r?.from, e) || r?.tabbable && "INPUT" === e.tagName && "radio" === e.getAttribute("type") && (! function(e) {
                        if (e.checked) return !0;
                        let t = function(e) {
                            if (!e.form) return Array.from((0, s.o)(e).querySelectorAll(`input[type="radio"][name="${CSS.escape(e.name)}"]`)).filter(e => !e.form);
                            let t = e.form.elements.namedItem(e.name),
                                r = (0, s.d)(e);
                            return t instanceof r.RadioNodeList ? Array.from(t).filter(e => e instanceof r.HTMLInputElement) : t instanceof r.HTMLInputElement ? [t] : []
                        }(e);
                        return t.length > 0 && !t.some(e => e.checked)
                    }(e) || "INPUT" === a.currentNode.tagName && "radio" === a.currentNode.type && a.currentNode.name === e.name) ? NodeFilter.FILTER_REJECT : i(e) && (!n || y(e, n)) && (!r?.accept || r.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                });
            return r?.from && (a.currentNode = r.from), a
        }

        function w(e) {
            let t, r;
            do(t = e.lastChild()) && (r = t); while (t) return r
        }
        class R {
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
        let S = new class e {
            constructor() {
                this.fastMap = new Map, this.root = new R({
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
                let n = this.fastMap.get(t ?? null);
                if (!n) return;
                let o = new R({
                    scopeRef: e
                });
                n.addChild(o), o.parent = n, this.fastMap.set(e, o), r && (o.nodeToRestore = r)
            }
            addNode(e) {
                this.fastMap.set(e.scopeRef, e)
            }
            removeTreeNode(e) {
                if (null === e) return;
                let t = this.fastMap.get(e);
                if (!t) return;
                let r = t.parent;
                for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && y(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
                let n = t.children;
                r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
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
        e.s(["v", 0, function(e) {
            var r, n, o, i, u, w, I, L, C, j;
            let F, A, M, K, {
                    children: P,
                    contain: z,
                    restoreFocus: $,
                    autoFocus: O
                } = e,
                D = (0, d.useRef)(null),
                B = (0, d.useRef)(null),
                U = (0, d.useRef)([]),
                {
                    parentNode: W
                } = (0, d.useContext)(f) || {},
                q = (0, d.useMemo)(() => new R({
                    scopeRef: U
                }), [U]);
            (0, a.f)(() => {
                let e = W || S.root;
                if (S.getTreeNode(e.scopeRef) && p && !b(p, e.scopeRef)) {
                    let t = S.getTreeNode(p);
                    t && (e = t)
                }
                e.addChild(q), S.addNode(q)
            }, [q, W]), (0, a.f)(() => {
                let e = S.getTreeNode(U);
                e && (e.contain = !!z)
            }, [z]), (0, a.f)(() => {
                let e = D.current?.nextSibling,
                    t = [],
                    r = e => e.stopPropagation();
                for (; e && e !== B.current;) t.push(e), e.addEventListener(h, r), e = e.nextSibling;
                return U.current = t, () => {
                    for (let e of t) e.removeEventListener(h, r)
                }
            }, [P]), r = U, n = $, o = z, (0, a.f)(() => {
                if (n || o) return;
                let e = r.current,
                    i = (0, s.o)(e ? e[0] : void 0),
                    l = e => {
                        let n = (0, t.t)(e);
                        y(n, r.current) ? p = r : v(n) || (p = null)
                    };
                return i.addEventListener("focusin", l, !1), e?.forEach(e => e.addEventListener("focusin", l, !1)), () => {
                    i.removeEventListener("focusin", l, !1), e?.forEach(e => e.removeEventListener("focusin", l, !1))
                }
            }, [r, n, o]), i = U, u = z, F = (0, d.useRef)(void 0), A = (0, d.useRef)(void 0), (0, a.f)(() => {
                let e = i.current;
                if (!u) {
                    A.current && (cancelAnimationFrame(A.current), A.current = void 0);
                    return
                }
                let r = (0, s.o)(e ? e[0] : void 0),
                    n = e => {
                        if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey || !N(i) || e.isComposing) return;
                        let n = (0, t.z)(r),
                            o = i.current;
                        if (!o || !y(n, o)) return;
                        let l = x(m(o), {
                            tabbable: !0
                        }, o);
                        if (!n) return;
                        l.currentNode = n;
                        let c = e.shiftKey ? l.previousNode() : l.nextNode();
                        c || (l.currentNode = e.shiftKey ? o[o.length - 1].nextElementSibling : o[0].previousElementSibling, c = e.shiftKey ? l.previousNode() : l.nextNode()), e.preventDefault(), c && (k(c, !0), c instanceof(0, s.d)(c).HTMLInputElement && c.select())
                    },
                    o = e => {
                        (!p || b(p, i)) && y((0, t.t)(e), i.current) ? (p = i, F.current = (0, t.t)(e)) : N(i) && !v((0, t.t)(e), i) ? F.current ? F.current.focus() : p && p.current && E(p.current) : N(i) && (F.current = (0, t.t)(e))
                    },
                    a = e => {
                        A.current && cancelAnimationFrame(A.current), A.current = requestAnimationFrame(() => {
                            let n = (0, l.E)(),
                                o = ("virtual" === n || null === n) && (0, c.B)() && (0, c.o)(),
                                s = (0, t.z)(r);
                            if (!o && s && N(i) && !v(s, i)) {
                                p = i;
                                let r = (0, t.t)(e);
                                r && r.isConnected ? (F.current = r, F.current?.focus()) : p.current && E(p.current)
                            }
                        })
                    };
                return r.addEventListener("keydown", n, !1), r.addEventListener("focusin", o, !1), e?.forEach(e => e.addEventListener("focusin", o, !1)), e?.forEach(e => e.addEventListener("focusout", a, !1)), () => {
                    r.removeEventListener("keydown", n, !1), r.removeEventListener("focusin", o, !1), e?.forEach(e => e.removeEventListener("focusin", o, !1)), e?.forEach(e => e.removeEventListener("focusout", a, !1))
                }
            }, [i, u]), (0, a.f)(() => () => {
                A.current && cancelAnimationFrame(A.current)
            }, [A]), w = U, I = $, L = z, M = (0, d.useRef)("u" > typeof document ? (0, t.z)((0, s.o)(w.current ? w.current[0] : void 0)) : null), (0, a.f)(() => {
                let e = w.current,
                    r = (0, s.o)(e ? e[0] : void 0);
                if (!I || L) return;
                let n = () => {
                    (!p || b(p, w)) && y((0, t.z)(r), w.current) && (p = w)
                };
                return r.addEventListener("focusin", n, !1), e?.forEach(e => e.addEventListener("focusin", n, !1)), () => {
                    r.removeEventListener("focusin", n, !1), e?.forEach(e => e.removeEventListener("focusin", n, !1))
                }
            }, [w, L]), (0, a.f)(() => {
                let e = (0, s.o)(w.current ? w.current[0] : void 0);
                if (!I) return;
                let t = t => {
                    if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !N(w) || t.isComposing) return;
                    let r = e.activeElement;
                    if (!v(r, w) || !_(w)) return;
                    let n = S.getTreeNode(w);
                    if (!n) return;
                    let o = n.nodeToRestore,
                        i = x(e.body, {
                            tabbable: !0
                        });
                    i.currentNode = r;
                    let l = t.shiftKey ? i.previousNode() : i.nextNode();
                    if (o && o.isConnected && o !== e.body || (o = void 0, n.nodeToRestore = void 0), (!l || !v(l, w)) && o) {
                        i.currentNode = o;
                        do l = t.shiftKey ? i.previousNode() : i.nextNode(); while (v(l, w))(t.preventDefault(), t.stopPropagation(), l) ? k(l, !0): v(o) ? k(o, !0) : r.blur()
                    }
                };
                return L || e.addEventListener("keydown", t, !0), () => {
                    L || e.removeEventListener("keydown", t, !0)
                }
            }, [w, I, L]), (0, a.f)(() => {
                let e = (0, s.o)(w.current ? w.current[0] : void 0);
                if (!I) return;
                let r = S.getTreeNode(w);
                if (r) return r.nodeToRestore = M.current ?? void 0, () => {
                    let r = S.getTreeNode(w);
                    if (!r) return;
                    let n = r.nodeToRestore,
                        o = (0, t.z)(e);
                    if (I && n && (o && v(o, w) || o === e.body && _(w))) {
                        let t = S.clone();
                        requestAnimationFrame(() => {
                            if (e.activeElement === e.body) {
                                let e = t.getTreeNode(w);
                                for (; e;) {
                                    if (e.nodeToRestore && e.nodeToRestore.isConnected) return void g(e.nodeToRestore);
                                    e = e.parent
                                }
                                for (e = t.getTreeNode(w); e;) {
                                    if (e.scopeRef && e.scopeRef.current && S.getTreeNode(e.scopeRef)) return void g(T(e.scopeRef.current, !0));
                                    e = e.parent
                                }
                            }
                        })
                    }
                }
            }, [w, I]), C = U, j = O, K = d.default.useRef(j), (0, d.useEffect)(() => {
                if (K.current) {
                    p = C;
                    let e = (0, s.o)(C.current ? C.current[0] : void 0);
                    !y((0, t.z)(e), p.current) && C.current && E(C.current)
                }
                K.current = !1
            }, [C]), (0, d.useEffect)(() => {
                let e = (0, t.z)((0, s.o)(U.current ? U.current[0] : void 0)),
                    r = null;
                if (y(e, U.current)) {
                    for (let t of S.traverse()) t.scopeRef && y(e, t.scopeRef.current) && (r = t);
                    r === S.getTreeNode(U) && (p = r.scopeRef)
                }
            }, [U]), (0, a.f)(() => () => {
                let e = S.getTreeNode(U)?.parent?.scopeRef ?? null;
                (U === p || b(U, p)) && (!e || S.getTreeNode(e)) && (p = e), S.removeTreeNode(U)
            }, [U]);
            let H = (0, d.useMemo)(() => {
                    var e;
                    return e = U, {
                        focusNext(r = {}) {
                            let n = e.current,
                                {
                                    from: o,
                                    tabbable: i,
                                    wrap: l,
                                    accept: c
                                } = r,
                                u = o || (0, t.z)((0, s.o)(n[0] ?? void 0)),
                                a = n[0].previousElementSibling,
                                d = x(m(n), {
                                    tabbable: i,
                                    accept: c
                                }, n);
                            d.currentNode = y(u, n) ? u : a;
                            let f = d.nextNode();
                            return !f && l && (d.currentNode = a, f = d.nextNode()), f && k(f, !0), f
                        },
                        focusPrevious(r = {}) {
                            let n = e.current,
                                {
                                    from: o,
                                    tabbable: i,
                                    wrap: l,
                                    accept: c
                                } = r,
                                u = o || (0, t.z)((0, s.o)(n[0] ?? void 0)),
                                a = n[n.length - 1].nextElementSibling,
                                d = x(m(n), {
                                    tabbable: i,
                                    accept: c
                                }, n);
                            d.currentNode = y(u, n) ? u : a;
                            let f = d.previousNode();
                            return !f && l && (d.currentNode = a, f = d.previousNode()), f && k(f, !0), f
                        },
                        focusFirst(t = {}) {
                            let r = e.current,
                                {
                                    tabbable: n,
                                    accept: o
                                } = t,
                                i = x(m(r), {
                                    tabbable: n,
                                    accept: o
                                }, r);
                            i.currentNode = r[0].previousElementSibling;
                            let l = i.nextNode();
                            return l && k(l, !0), l
                        },
                        focusLast(t = {}) {
                            let r = e.current,
                                {
                                    tabbable: n,
                                    accept: o
                                } = t,
                                i = x(m(r), {
                                    tabbable: n,
                                    accept: o
                                }, r);
                            i.currentNode = r[r.length - 1].nextElementSibling;
                            let l = i.previousNode();
                            return l && k(l, !0), l
                        }
                    }
                }, []),
                G = (0, d.useMemo)(() => ({
                    focusManager: H,
                    parentNode: q
                }), [q, H]);
            return d.default.createElement(f.Provider, {
                value: G
            }, d.default.createElement("span", {
                "data-focus-scope-start": !0,
                hidden: !0,
                ref: D
            }), P, d.default.createElement("span", {
                "data-focus-scope-end": !0,
                hidden: !0,
                ref: B
            }))
        }, "V", 0, function(e, r = {}) {
            return {
                focusNext(n = {}) {
                    let o = e.current;
                    if (!o) return null;
                    let {
                        from: i,
                        tabbable: l = r.tabbable,
                        wrap: c = r.wrap,
                        accept: u = r.accept
                    } = n, a = i || (0, t.z)((0, s.o)(o)), d = x(o, {
                        tabbable: l,
                        accept: u
                    });
                    (0, t.C)(o, a) && (d.currentNode = a);
                    let f = d.nextNode();
                    return !f && c && (d.currentNode = o, f = d.nextNode()), f && k(f, !0), f
                },
                focusPrevious(n = r) {
                    let o = e.current;
                    if (!o) return null;
                    let {
                        from: i,
                        tabbable: l = r.tabbable,
                        wrap: c = r.wrap,
                        accept: u = r.accept
                    } = n, a = i || (0, t.z)((0, s.o)(o)), d = x(o, {
                        tabbable: l,
                        accept: u
                    });
                    if ((0, t.C)(o, a)) d.currentNode = a;
                    else {
                        let e = w(d);
                        return e && k(e, !0), e ?? null
                    }
                    let f = d.previousNode();
                    if (!f && c) {
                        d.currentNode = o;
                        let e = w(d);
                        if (!e) return null;
                        f = e
                    }
                    return f && k(f, !0), f ?? null
                },
                focusFirst(t = r) {
                    let n = e.current;
                    if (!n) return null;
                    let {
                        tabbable: o = r.tabbable,
                        accept: i = r.accept
                    } = t, l = x(n, {
                        tabbable: o,
                        accept: i
                    }).nextNode();
                    return l && k(l, !0), l
                },
                focusLast(t = r) {
                    let n = e.current;
                    if (!n) return null;
                    let {
                        tabbable: o = r.tabbable,
                        accept: i = r.accept
                    } = t, l = w(x(n, {
                        tabbable: o,
                        accept: i
                    }));
                    return l && k(l, !0), l ?? null
                }
            }
        }, "E", 0, x, "t", 0, function(e) {
            return v(e, p)
        }], 191199)
    }, 283764, e => {
        var t = e.i(982391),
            r = e.i(495056);
        e.s(["f", 0, function(e = {}) {
            let {
                isReadOnly: n
            } = e, [o, i] = (0, t.f)(e.isSelected, e.defaultSelected || !1, e.onChange), [l] = (0, r.useState)(o);
            return {
                isSelected: o,
                defaultSelected: e.defaultSelected ?? l,
                setSelected: function(e) {
                    n || i(e)
                },
                toggle: function() {
                    n || i(!o)
                }
            }
        }])
    }, 805518, e => {
        var t = e.i(167358),
            r = e.i(495056),
            n = e.i(722978),
            o = e.i(199111);
        let i = (0, r.forwardRef)(function({
            children: e,
            className: r = ""
        }, i) {
            let l = (0, o.f)(i),
                s = (0, n.U)("text", r);
            return (0, t.jsx)("div", {
                ref: l,
                className: s,
                children: e
            })
        });
        e.s(["f", 0, i], 805518)
    }])
})();

//# debugId=a55d3786-7369-ab84-a776-db08961ccccc