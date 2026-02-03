try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8ea39226-3472-4fbe-81bd-bfbce6f9d721", e._sentryDebugIdIdentifier = "sentry-dbid-8ea39226-3472-4fbe-81bd-bfbce6f9d721")
    }()
} catch (e) {}! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                if (null != n)
                    for (var l in n) n.hasOwnProperty(l) && (e[l] = n[l])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [25583], {
        40432: (e, t, n) => {
            n.d(t, {
                P: () => r
            });
            var l = n(53163);

            function r(e, t, n) {
                let [r, i] = (0, l.useState)(e || t), s = (0, l.useRef)(void 0 !== e), o = void 0 !== e;
                (0, l.useEffect)(() => {
                    s.current, s.current = o
                }, [o]);
                let u = o ? e : r,
                    c = (0, l.useCallback)((e, ...t) => {
                        let l = (e, ...t) => {
                            n && !Object.is(u, e) && n(e, ...t), o || (u = e)
                        };
                        "function" == typeof e ? i((n, ...r) => {
                            let i = e(o ? u : n, ...r);
                            return (l(i, ...t), o) ? n : i
                        }) : (o || i(e), l(e, ...t))
                    }, [o, u, n]);
                return [u, c]
            }
        },
        48625: (e, t, n) => {
            n.d(t, {
                RK: () => v
            });
            var l = n(32475);

            function r(e) {
                return "span" === e._type && "text" in e && "string" == typeof e.text && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
            }

            function i(e) {
                return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
            }

            function s(e) {
                return i(e) && "listItem" in e && "string" == typeof e.listItem && (typeof e.level > "u" || "number" == typeof e.level)
            }

            function o(e) {
                return "@list" === e._type
            }

            function u(e) {
                return "@span" === e._type
            }

            function c(e) {
                return "@text" === e._type
            }
            let a = ["strong", "em", "code", "underline", "strike-through"];

            function f(e, t, n) {
                if (!r(e) || !e.marks || !e.marks.length) return [];
                let l = e.marks.slice(),
                    i = {};
                return l.forEach(e => {
                    i[e] = 1;
                    for (let l = t + 1; l < n.length; l++) {
                        let t = n[l];
                        if (t && r(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) i[e]++;
                        else break
                    }
                }), l.sort((e, t) => (function(e, t, n) {
                    let l = e[t],
                        r = e[n];
                    if (l !== r) return r - l;
                    let i = a.indexOf(t),
                        s = a.indexOf(n);
                    return i !== s ? i - s : t.localeCompare(n)
                })(i, e, t))
            }

            function y(e, t, n) {
                return {
                    _type: "@list",
                    _key: `${e._key||`${t}`}-parent`,
                    mode: n,
                    level: e.level || 1,
                    listItem: e.listItem,
                    children: [e]
                }
            }

            function d(e, t) {
                let n = t.level || 1,
                    l = t.listItem || "normal",
                    i = "string" == typeof t.listItem;
                if (o(e) && (e.level || 1) === n && i && (e.listItem || "normal") === l) return e;
                if (!("children" in e)) return;
                let s = e.children[e.children.length - 1];
                return s && !r(s) ? d(s, t) : void 0
            }
            var p = n(53163);
            let h = {
                    textDecoration: "underline"
                },
                k = (e, t) => `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
                m = e => k(`block type "${e}"`, "types");

            function b(e) {
                console.warn(e)
            }
            let x = {
                    display: "none"
                },
                _ = {
                    types: {},
                    block: {
                        normal: ({
                            children: e
                        }) => (0, l.jsx)("p", {
                            children: e
                        }),
                        blockquote: ({
                            children: e
                        }) => (0, l.jsx)("blockquote", {
                            children: e
                        }),
                        h1: ({
                            children: e
                        }) => (0, l.jsx)("h1", {
                            children: e
                        }),
                        h2: ({
                            children: e
                        }) => (0, l.jsx)("h2", {
                            children: e
                        }),
                        h3: ({
                            children: e
                        }) => (0, l.jsx)("h3", {
                            children: e
                        }),
                        h4: ({
                            children: e
                        }) => (0, l.jsx)("h4", {
                            children: e
                        }),
                        h5: ({
                            children: e
                        }) => (0, l.jsx)("h5", {
                            children: e
                        }),
                        h6: ({
                            children: e
                        }) => (0, l.jsx)("h6", {
                            children: e
                        })
                    },
                    marks: {
                        em: ({
                            children: e
                        }) => (0, l.jsx)("em", {
                            children: e
                        }),
                        strong: ({
                            children: e
                        }) => (0, l.jsx)("strong", {
                            children: e
                        }),
                        code: ({
                            children: e
                        }) => (0, l.jsx)("code", {
                            children: e
                        }),
                        underline: ({
                            children: e
                        }) => (0, l.jsx)("span", {
                            style: h,
                            children: e
                        }),
                        "strike-through": ({
                            children: e
                        }) => (0, l.jsx)("del", {
                            children: e
                        }),
                        link: ({
                            children: e,
                            value: t
                        }) => (0, l.jsx)("a", {
                            href: null == t ? void 0 : t.href,
                            children: e
                        })
                    },
                    list: {
                        number: ({
                            children: e
                        }) => (0, l.jsx)("ol", {
                            children: e
                        }),
                        bullet: ({
                            children: e
                        }) => (0, l.jsx)("ul", {
                            children: e
                        })
                    },
                    listItem: ({
                        children: e
                    }) => (0, l.jsx)("li", {
                        children: e
                    }),
                    hardBreak: () => (0, l.jsx)("br", {}),
                    unknownType: ({
                        value: e,
                        isInline: t
                    }) => {
                        let n = m(e._type);
                        return t ? (0, l.jsx)("span", {
                            style: x,
                            children: n
                        }) : (0, l.jsx)("div", {
                            style: x,
                            children: n
                        })
                    },
                    unknownMark: ({
                        markType: e,
                        children: t
                    }) => (0, l.jsx)("span", {
                        className: `unknown__pt__mark__${e}`,
                        children: t
                    }),
                    unknownList: ({
                        children: e
                    }) => (0, l.jsx)("ul", {
                        children: e
                    }),
                    unknownListItem: ({
                        children: e
                    }) => (0, l.jsx)("li", {
                        children: e
                    }),
                    unknownBlockStyle: ({
                        children: e
                    }) => (0, l.jsx)("p", {
                        children: e
                    })
                };

            function g(e, t, n) {
                let l = t[n],
                    r = e[n];
                return "function" == typeof l || l && "function" == typeof r ? l : l ? {
                    ...r,
                    ...l
                } : r
            }

            function v({
                value: e,
                components: t,
                listNestingMode: n,
                onMissingComponent: r = b
            }) {
                let i = r || j,
                    o = function(e, t) {
                        let n, l = [];
                        for (let o = 0; o < e.length; o++) {
                            let u = e[o];
                            if (u) {
                                var r, i;
                                if (!s(u)) {
                                    l.push(u), n = void 0;
                                    continue
                                }
                                if (!n) {
                                    n = y(u, o, t), l.push(n);
                                    continue
                                }
                                if (r = u, i = n, (r.level || 1) === i.level && r.listItem === i.listItem) {
                                    n.children.push(u);
                                    continue
                                }
                                if ((u.level || 1) > n.level) {
                                    let e = y(u, o, t);
                                    if ("html" === t) {
                                        let t = n.children[n.children.length - 1],
                                            l = {
                                                ...t,
                                                children: [...t.children, e]
                                            };
                                        n.children[n.children.length - 1] = l
                                    } else n.children.push(e);
                                    n = e;
                                    continue
                                }
                                if ((u.level || 1) < n.level) {
                                    let e = l[l.length - 1],
                                        r = e && d(e, u);
                                    if (r) {
                                        (n = r).children.push(u);
                                        continue
                                    }
                                    n = y(u, o, t), l.push(n);
                                    continue
                                }
                                if (u.listItem !== n.listItem) {
                                    let e = l[l.length - 1],
                                        r = e && d(e, {
                                            level: u.level || 1
                                        });
                                    if (r && r.listItem === u.listItem) {
                                        (n = r).children.push(u);
                                        continue
                                    }
                                    n = y(u, o, t), l.push(n);
                                    continue
                                }
                                console.warn("Unknown state encountered for block", u), l.push(u)
                            }
                        }
                        return l
                    }(Array.isArray(e) ? e : [e], n || "html"),
                    u = (0, p.useMemo)(() => t ? function(e, t) {
                        let {
                            block: n,
                            list: l,
                            listItem: r,
                            marks: i,
                            types: s,
                            ...o
                        } = t;
                        return {
                            ...e,
                            block: g(e, t, "block"),
                            list: g(e, t, "list"),
                            listItem: g(e, t, "listItem"),
                            marks: g(e, t, "marks"),
                            types: g(e, t, "types"),
                            ...o
                        }
                    }(_, t) : _, [t]),
                    c = (0, p.useMemo)(() => I(u, i), [u, i]),
                    a = o.map((e, t) => c({
                        node: e,
                        index: t,
                        isInline: !1,
                        renderNode: c
                    }));
                return (0, l.jsx)(l.Fragment, {
                    children: a
                })
            }
            let I = (e, t) => function n(r) {
                let {
                    node: a,
                    index: f,
                    isInline: y
                } = r, d = a._key || `node-${f}`;
                return o(a) ? function(r, i, s) {
                    let o = r.children.map((e, t) => n({
                            node: e._key ? e : {
                                ...e,
                                _key: `li-${i}-${t}`
                            },
                            index: t,
                            isInline: !1
                        })),
                        u = e.list,
                        c = ("function" == typeof u ? u : u[r.listItem]) || e.unknownList;
                    if (c === e.unknownList) {
                        let e = r.listItem || "bullet";
                        t(k(`list style "${e}"`, "list"), {
                            nodeType: "listStyle",
                            type: e
                        })
                    }
                    return (0, l.jsx)(c, {
                        value: r,
                        index: i,
                        isInline: !1,
                        renderNode: n,
                        children: o
                    }, s)
                }(a, f, d) : s(a) ? function(r, i, s) {
                    let o = w({
                            node: r,
                            index: i,
                            isInline: !1,
                            renderNode: n
                        }),
                        u = e.listItem,
                        c = ("function" == typeof u ? u : u[r.listItem]) || e.unknownListItem;
                    if (c === e.unknownListItem) {
                        let e = r.listItem || "bullet";
                        t(k(`list item style "${e}"`, "listItem"), {
                            type: e,
                            nodeType: "listItemStyle"
                        })
                    }
                    let a = o.children;
                    if (r.style && "normal" !== r.style) {
                        let {
                            listItem: e,
                            ...t
                        } = r;
                        a = n({
                            node: t,
                            index: i,
                            isInline: !1
                        })
                    }
                    return (0, l.jsx)(c, {
                        value: r,
                        index: i,
                        isInline: !1,
                        renderNode: n,
                        children: a
                    }, s)
                }(a, f, d) : u(a) ? function(r, i, s) {
                    let {
                        markDef: o,
                        markType: a,
                        markKey: f
                    } = r, y = e.marks[a] || e.unknownMark, d = r.children.map((e, t) => n({
                        node: e,
                        index: t,
                        isInline: !0
                    }));
                    return y === e.unknownMark && t(k(`mark type "${a}"`, "marks"), {
                        nodeType: "mark",
                        type: a
                    }), (0, l.jsx)(y, {
                        text: function e(t) {
                            let n = "";
                            return t.children.forEach(t => {
                                c(t) ? n += t.text : u(t) && (n += e(t))
                            }), n
                        }(r),
                        value: o,
                        markType: a,
                        markKey: f,
                        renderNode: n,
                        children: d
                    }, s)
                }(a, 0, d) : a._type in e.types ? function(t, r, i, s) {
                    let o = e.types[t._type];
                    return o ? (0, l.jsx)(o, {
                        value: t,
                        isInline: s,
                        index: r,
                        renderNode: n
                    }, i) : null
                }(a, f, d, y) : i(a) ? function(r, i, s, o) {
                    let {
                        _key: u,
                        ...c
                    } = w({
                        node: r,
                        index: i,
                        isInline: o,
                        renderNode: n
                    }), a = c.node.style || "normal", f = ("function" == typeof e.block ? e.block : e.block[a]) || e.unknownBlockStyle;
                    return f === e.unknownBlockStyle && t(k(`block style "${a}"`, "block"), {
                        nodeType: "blockStyle",
                        type: a
                    }), (0, l.jsx)(f, {
                        ...c,
                        value: c.node,
                        renderNode: n
                    }, s)
                }(a, f, d, y) : c(a) ? function(t, n) {
                    if (t.text === `
`) {
                        let t = e.hardBreak;
                        return t ? (0, l.jsx)(t, {}, n) : `
`
                    }
                    return t.text
                }(a, d) : function(r, i, s, o) {
                    t(m(r._type), {
                        nodeType: "block",
                        type: r._type
                    });
                    let u = e.unknownType;
                    return (0, l.jsx)(u, {
                        value: r,
                        isInline: o,
                        index: i,
                        renderNode: n
                    }, s)
                }(a, f, d, y)
            };

            function w(e) {
                let {
                    node: t,
                    index: n,
                    isInline: l,
                    renderNode: i
                } = e, s = (function(e) {
                    var t;
                    let {
                        children: n
                    } = e, l = e.markDefs ?? [];
                    if (!n || !n.length) return [];
                    let i = n.map(f),
                        s = {
                            _type: "@span",
                            children: [],
                            markType: "<unknown>"
                        },
                        o = [s];
                    for (let e = 0; e < n.length; e++) {
                        let s = n[e];
                        if (!s) continue;
                        let u = i[e] || [],
                            c = 1;
                        if (o.length > 1)
                            for (; c < o.length; c++) {
                                let e = (null == (t = o[c]) ? void 0 : t.markKey) || "",
                                    n = u.indexOf(e);
                                if (-1 === n) break;
                                u.splice(n, 1)
                            }
                        let a = (o = o.slice(0, c))[o.length - 1];
                        if (a) {
                            for (let e of u) {
                                let t = null == l ? void 0 : l.find(t => t._key === e),
                                    n = t ? t._type : e,
                                    r = {
                                        _type: "@span",
                                        _key: s._key,
                                        children: [],
                                        markDef: t,
                                        markType: n,
                                        markKey: e
                                    };
                                a.children.push(r), o.push(r), a = r
                            }
                            if (r(s)) {
                                let e = s.text.split(`
`);
                                for (let t = e.length; t-- > 1;) e.splice(t, 0, `
`);
                                a.children = a.children.concat(e.map(e => ({
                                    _type: "@text",
                                    text: e
                                })))
                            } else a.children = a.children.concat(s)
                        }
                    }
                    return s.children
                })(t).map((e, t) => i({
                    node: e,
                    isInline: !0,
                    index: t,
                    renderNode: i
                }));
                return {
                    _key: t._key || `block-${n}`,
                    children: s,
                    index: n,
                    isInline: l,
                    node: t
                }
            }

            function j() {}
        },
        91903: (e, t, n) => {
            n.d(t, {
                T: () => i
            });
            var l = n(53163),
                r = n(40432);

            function i(e) {
                let [t, n] = (0, r.P)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), i = (0, l.useCallback)(() => {
                    n(!0)
                }, [n]), s = (0, l.useCallback)(() => {
                    n(!1)
                }, [n]), o = (0, l.useCallback)(() => {
                    n(!t)
                }, [n, t]);
                return {
                    isOpen: t,
                    setOpen: n,
                    open: i,
                    close: s,
                    toggle: o
                }
            }
        }
    }
]);