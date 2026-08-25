(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 239273, e => {
    "use strict";
    var t = e.i(409781);
    e.s(["default", 0, e => {
        let [r, n] = (0, t.useState)("");
        return (0, t.useEffect)(() => {
            n(document.cookie)
        }, []), [(0, t.useMemo)(() => r?.split("; ")?.find(t => t.includes(e)), [r, e])]
    }])
}, 475200, e => {
    "use strict";
    var t = e.i(409781);
    e.s(["default", 0, (e = 768) => {
        let [r, n] = (0, t.useState)(window.innerWidth <= e);
        return (0, t.useEffect)(() => {
            let t = () => {
                n(window.innerWidth <= e)
            };
            return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
        }, []), r
    }])
}, 649051, e => {
    "use strict";
    e.s(["storageAvailable", 0, e => {
        let t;
        try {
            t = window[e];
            let r = "__storage_test__";
            return t.setItem(r, r), t.removeItem(r), !0
        } catch (e) {
            return e instanceof DOMException && "QuotaExceededError" === e.name && t && 0 !== t.length
        }
    }])
}, 960851, e => {
    "use strict";
    var t = e.i(409781),
        r = e.i(848662);
    let n = new Map([
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
        o = t.forwardRef((e, o) => t.createElement(r.default, {
            ref: o,
            ...e,
            weights: n
        }));
    o.displayName = "InfoIcon", e.s(["Info", 0, o, "InfoIcon", 0, o], 960851)
}, 722990, e => {
    "use strict";
    var t = e.i(785328);

    function r(e) {
        return "span" === e._type && "text" in e && "string" == typeof e.text && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
    }

    function n(e) {
        return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
    }

    function o(e) {
        return n(e) && "listItem" in e && "string" == typeof e.listItem && (typeof e.level > "u" || "number" == typeof e.level)
    }

    function l(e) {
        return "@list" === e._type
    }

    function i(e) {
        return "@span" === e._type
    }

    function a(e) {
        return "@text" === e._type
    }
    let s = ["strong", "em", "code", "underline", "strike-through"];

    function u(e, t, n) {
        if (!r(e) || !e.marks || !e.marks.length) return [];
        let o = e.marks.slice(),
            l = {};
        return o.forEach(e => {
            l[e] = 1;
            for (let o = t + 1; o < n.length; o++) {
                let t = n[o];
                if (t && r(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) l[e]++;
                else break
            }
        }), o.sort((e, t) => (function(e, t, r) {
            let n = e[t],
                o = e[r];
            if (n !== o) return o - n;
            let l = s.indexOf(t),
                i = s.indexOf(r);
            return l !== i ? l - i : t.localeCompare(r)
        })(l, e, t))
    }

    function c(e, t, r) {
        return {
            _type: "@list",
            _key: `${e._key||`${t}`}-parent`,
            mode: r,
            level: e.level || 1,
            listItem: e.listItem,
            children: [e]
        }
    }

    function p(e, t) {
        let n = t.level || 1,
            o = t.listItem || "normal",
            i = "string" == typeof t.listItem;
        if (l(e) && (e.level || 1) === n && i && (e.listItem || "normal") === o) return e;
        if (!("children" in e)) return;
        let a = e.children[e.children.length - 1];
        return a && !r(a) ? p(a, t) : void 0
    }
    var d = e.i(409781);
    let f = {
            textDecoration: "underline"
        },
        y = (e, t) => `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
        m = e => y(`block type "${e}"`, "types");

    function h(e) {
        console.warn(e)
    }
    let x = {
            display: "none"
        },
        b = {
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
                    style: f,
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
                    style: x,
                    children: n
                }) : (0, t.jsx)("div", {
                    style: x,
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

    function v(e, t, r) {
        let n = t[r],
            o = e[r];
        return "function" == typeof n || n && "function" == typeof o ? n : n ? {
            ...o,
            ...n
        } : o
    }

    function C(e) {
        let {
            node: t,
            index: n,
            isInline: o,
            renderNode: l
        } = e, i = (function(e) {
            var t;
            let {
                children: n
            } = e, o = e.markDefs ?? [];
            if (!n || !n.length) return [];
            let l = n.map(u),
                i = {
                    _type: "@span",
                    children: [],
                    markType: "<unknown>"
                },
                a = [i];
            for (let e = 0; e < n.length; e++) {
                let i = n[e];
                if (!i) continue;
                let s = l[e] || [],
                    u = 1;
                if (a.length > 1)
                    for (; u < a.length; u++) {
                        let e = (null == (t = a[u]) ? void 0 : t.markKey) || "",
                            r = s.indexOf(e);
                        if (-1 === r) break;
                        s.splice(r, 1)
                    }
                let c = (a = a.slice(0, u))[a.length - 1];
                if (c) {
                    for (let e of s) {
                        let t = null == o ? void 0 : o.find(t => t._key === e),
                            r = t ? t._type : e,
                            n = {
                                _type: "@span",
                                _key: i._key,
                                children: [],
                                markDef: t,
                                markType: r,
                                markKey: e
                            };
                        c.children.push(n), a.push(n), c = n
                    }
                    if (r(i)) {
                        let e = i.text.split(`
`);
                        for (let t = e.length; t-- > 1;) e.splice(t, 0, `
`);
                        c.children = c.children.concat(e.map(e => ({
                            _type: "@text",
                            text: e
                        })))
                    } else c.children = c.children.concat(i)
                }
            }
            return i.children
        })(t).map((e, t) => l({
            node: e,
            isInline: !0,
            index: t,
            renderNode: l
        }));
        return {
            _key: t._key || `block-${n}`,
            children: i,
            index: n,
            isInline: o,
            node: t
        }
    }

    function g() {}
    e.s(["PortableText", 0, function({
        value: e,
        components: r,
        listNestingMode: s,
        onMissingComponent: u = h
    }) {
        let f = u || g,
            x = function(e, t) {
                let r, n = [];
                for (let a = 0; a < e.length; a++) {
                    let s = e[a];
                    if (s) {
                        var l, i;
                        if (!o(s)) {
                            n.push(s), r = void 0;
                            continue
                        }
                        if (!r) {
                            r = c(s, a, t), n.push(r);
                            continue
                        }
                        if (l = s, i = r, (l.level || 1) === i.level && l.listItem === i.listItem) {
                            r.children.push(s);
                            continue
                        }
                        if ((s.level || 1) > r.level) {
                            let e = c(s, a, t);
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
                        if ((s.level || 1) < r.level) {
                            let e = n[n.length - 1],
                                o = e && p(e, s);
                            if (o) {
                                (r = o).children.push(s);
                                continue
                            }
                            r = c(s, a, t), n.push(r);
                            continue
                        }
                        if (s.listItem !== r.listItem) {
                            let e = n[n.length - 1],
                                o = e && p(e, {
                                    level: s.level || 1
                                });
                            if (o && o.listItem === s.listItem) {
                                (r = o).children.push(s);
                                continue
                            }
                            r = c(s, a, t), n.push(r);
                            continue
                        }
                        console.warn("Unknown state encountered for block", s), n.push(s)
                    }
                }
                return n
            }(Array.isArray(e) ? e : [e], s || "html"),
            j = (0, d.useMemo)(() => r ? function(e, t) {
                let {
                    block: r,
                    list: n,
                    listItem: o,
                    marks: l,
                    types: i,
                    ...a
                } = t;
                return {
                    ...e,
                    block: v(e, t, "block"),
                    list: v(e, t, "list"),
                    listItem: v(e, t, "listItem"),
                    marks: v(e, t, "marks"),
                    types: v(e, t, "types"),
                    ...a
                }
            }(b, r) : b, [r]),
            k = (0, d.useMemo)(() => {
                var e, r;
                return e = j, r = f,
                    function s(u) {
                        var c, p, d, f, h, x, b, v;
                        let g, j, {
                                node: k,
                                index: w,
                                isInline: I
                            } = u,
                            A = k._key || `node-${w}`;
                        return l(k) ? function(n, o, l) {
                            let i = n.children.map((e, t) => s({
                                    node: e._key ? e : {
                                        ...e,
                                        _key: `li-${o}-${t}`
                                    },
                                    index: t,
                                    isInline: !1
                                })),
                                a = e.list,
                                u = ("function" == typeof a ? a : a[n.listItem]) || e.unknownList;
                            if (u === e.unknownList) {
                                let e = n.listItem || "bullet";
                                r(y(`list style "${e}"`, "list"), {
                                    nodeType: "listStyle",
                                    type: e
                                })
                            }
                            return (0, t.jsx)(u, {
                                value: n,
                                index: o,
                                isInline: !1,
                                renderNode: s,
                                children: i
                            }, l)
                        }(k, w, A) : o(k) ? function(n, o, l) {
                            let i = C({
                                    node: n,
                                    index: o,
                                    isInline: !1,
                                    renderNode: s
                                }),
                                a = e.listItem,
                                u = ("function" == typeof a ? a : a[n.listItem]) || e.unknownListItem;
                            if (u === e.unknownListItem) {
                                let e = n.listItem || "bullet";
                                r(y(`list item style "${e}"`, "listItem"), {
                                    type: e,
                                    nodeType: "listItemStyle"
                                })
                            }
                            let c = i.children;
                            if (n.style && "normal" !== n.style) {
                                let {
                                    listItem: e,
                                    ...t
                                } = n;
                                c = s({
                                    node: t,
                                    index: o,
                                    isInline: !1
                                })
                            }
                            return (0, t.jsx)(u, {
                                value: n,
                                index: o,
                                isInline: !1,
                                renderNode: s,
                                children: c
                            }, l)
                        }(k, w, A) : i(k) ? function(n, o) {
                            let {
                                markDef: l,
                                markType: u,
                                markKey: c
                            } = n, p = e.marks[u] || e.unknownMark, d = n.children.map((e, t) => s({
                                node: e,
                                index: t,
                                isInline: !0
                            }));
                            return p === e.unknownMark && r(y(`mark type "${u}"`, "marks"), {
                                nodeType: "mark",
                                type: u
                            }), (0, t.jsx)(p, {
                                text: function e(t) {
                                    let r = "";
                                    return t.children.forEach(t => {
                                        a(t) ? r += t.text : i(t) && (r += e(t))
                                    }), r
                                }(n),
                                value: l,
                                markType: u,
                                markKey: c,
                                renderNode: s,
                                children: d
                            }, o)
                        }(k, A) : k._type in e.types ? (c = k, p = w, d = A, f = I, (g = e.types[c._type]) ? (0, t.jsx)(g, {
                            value: c,
                            isInline: f,
                            index: p,
                            renderNode: s
                        }, d) : null) : n(k) ? function(n, o, l, i) {
                            let {
                                _key: a,
                                ...u
                            } = C({
                                node: n,
                                index: o,
                                isInline: i,
                                renderNode: s
                            }), c = u.node.style || "normal", p = ("function" == typeof e.block ? e.block : e.block[c]) || e.unknownBlockStyle;
                            return p === e.unknownBlockStyle && r(y(`block style "${c}"`, "block"), {
                                nodeType: "blockStyle",
                                type: c
                            }), (0, t.jsx)(p, {
                                ...u,
                                value: u.node,
                                renderNode: s
                            }, l)
                        }(k, w, A, I) : a(k) ? function(r, n) {
                            if (r.text === `
`) {
                                let r = e.hardBreak;
                                return r ? (0, t.jsx)(r, {}, n) : `
`
                            }
                            return r.text
                        }(k, A) : (h = k, x = w, b = A, v = I, r(m(h._type), {
                            nodeType: "block",
                            type: h._type
                        }), j = e.unknownType, (0, t.jsx)(j, {
                            value: h,
                            isInline: v,
                            index: x,
                            renderNode: s
                        }, b))
                    }
            }, [j, f]),
            w = x.map((e, t) => k({
                node: e,
                index: t,
                isInline: !1,
                renderNode: k
            }));
        return (0, t.jsx)(t.Fragment, {
            children: w
        })
    }], 722990)
}, 328042, (e, t, r) => {
    t.exports = e.r(78974).Symbol
}, 239145, (e, t, r) => {
    t.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n;) o[r] = t(e[r], r, e);
        return o
    }
}, 238591, (e, t, r) => {
    var n = e.r(416907),
        o = e.r(394022);
    t.exports = function(e) {
        return o(e) && "[object Arguments]" == n(e)
    }
}, 410090, (e, t, r) => {
    var n = e.r(238591),
        o = e.r(394022),
        l = Object.prototype,
        i = l.hasOwnProperty,
        a = l.propertyIsEnumerable;
    t.exports = n(function() {
        return arguments
    }()) ? n : function(e) {
        return o(e) && i.call(e, "callee") && !a.call(e, "callee")
    }
}, 143245, (e, t, r) => {
    var n = e.r(462931),
        o = e.r(799822),
        l = e.r(878524),
        i = e.r(908829),
        a = /^\[object .+?Constructor\]$/,
        s = Object.prototype,
        u = Function.prototype.toString,
        c = s.hasOwnProperty,
        p = RegExp("^" + u.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(e) {
        return !(!l(e) || o(e)) && (n(e) ? p : a).test(i(e))
    }
}, 92117, (e, t, r) => {
    t.exports = function(e, t) {
        return null == e ? void 0 : e[t]
    }
}, 581511, (e, t, r) => {
    var n = e.r(143245),
        o = e.r(92117);
    t.exports = function(e, t) {
        var r = o(e, t);
        return n(r) ? r : void 0
    }
}, 742112, (e, t, r) => {
    var n = e.r(416907),
        o = e.r(784800),
        l = e.r(394022),
        i = {};
    i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, t.exports = function(e) {
        return l(e) && o(e.length) && !!i[n(e)]
    }
}, 873021, (e, t, r) => {
    var n = e.r(328042),
        o = e.r(239145),
        l = e.r(778116),
        i = e.r(692558),
        a = 1 / 0,
        s = n ? n.prototype : void 0,
        u = s ? s.toString : void 0;
    t.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (l(t)) return o(t, e) + "";
        if (i(t)) return u ? u.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -a ? "-0" : r
    }
}, 553050, (e, t, r) => {
    var n = e.r(873021);
    t.exports = function(e) {
        return null == e ? "" : n(e)
    }
}, 585466, (e, t, r) => {
    t.exports = function(e) {
        return function(t) {
            return e(t)
        }
    }
}, 118309, (e, t, r) => {
    t.exports = e.r(78974)["__core-js_shared__"]
}, 799822, (e, t, r) => {
    var n, o = e.r(118309),
        l = (n = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
    t.exports = function(e) {
        return !!l && l in e
    }
}, 505918, (e, t, r) => {
    t.exports = e.g && e.g.Object === Object && e.g
}, 684435, (e, t, r) => {
    var n = e.r(328042),
        o = Object.prototype,
        l = o.hasOwnProperty,
        i = o.toString,
        a = n ? n.toStringTag : void 0;
    t.exports = function(e) {
        var t = l.call(e, a),
            r = e[a];
        try {
            e[a] = void 0;
            var n = !0
        } catch (e) {}
        var o = i.call(e);
        return n && (t ? e[a] = r : delete e[a]), o
    }
}, 933680, (e, t, r) => {
    var n = Object.prototype.toString;
    t.exports = function(e) {
        return n.call(e)
    }
}, 416907, (e, t, r) => {
    var n = e.r(328042),
        o = e.r(684435),
        l = e.r(933680),
        i = n ? n.toStringTag : void 0;
    t.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? o(e) : l(e)
    }
}, 820092, (e, t, r) => {
    var n = Object.prototype;
    t.exports = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || n)
    }
}, 394272, (e, t, r) => {
    t.exports = e.r(216158)(Object.keys, Object)
}, 668488, (e, t, r) => {
    var n = e.r(820092),
        o = e.r(394272),
        l = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        if (!n(e)) return o(e);
        var t = [];
        for (var r in Object(e)) l.call(e, r) && "constructor" != r && t.push(r);
        return t
    }
}, 91480, (e, t, r) => {
    var n = e.r(505918),
        o = r && !r.nodeType && r,
        l = o && t && !t.nodeType && t,
        i = l && l.exports === o && n.process;
    t.exports = function() {
        try {
            var e = l && l.require && l.require("util").types;
            if (e) return e;
            return i && i.binding && i.binding("util")
        } catch (e) {}
    }()
}, 905330, (e, t, r) => {
    var n = e.r(742112),
        o = e.r(585466),
        l = e.r(91480),
        i = l && l.isTypedArray;
    t.exports = i ? o(i) : n
}, 216158, (e, t, r) => {
    t.exports = function(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
}, 78974, (e, t, r) => {
    var n = e.r(505918),
        o = "object" == typeof self && self && self.Object === Object && self;
    t.exports = n || o || Function("return this")()
}, 908829, (e, t, r) => {
    var n = Function.prototype.toString;
    t.exports = function(e) {
        if (null != e) {
            try {
                return n.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
}, 343346, (e, t, r) => {
    t.exports = function(e, t) {
        return e === t || e != e && t != t
    }
}, 778116, (e, t, r) => {
    t.exports = Array.isArray
}, 622914, (e, t, r) => {
    var n = e.r(462931),
        o = e.r(784800);
    t.exports = function(e) {
        return null != e && o(e.length) && !n(e)
    }
}, 462931, (e, t, r) => {
    var n = e.r(416907),
        o = e.r(878524);
    t.exports = function(e) {
        if (!o(e)) return !1;
        var t = n(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
}, 784800, (e, t, r) => {
    t.exports = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff
    }
}, 878524, (e, t, r) => {
    t.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, 394022, (e, t, r) => {
    t.exports = function(e) {
        return null != e && "object" == typeof e
    }
}, 692558, (e, t, r) => {
    var n = e.r(416907),
        o = e.r(394022);
    t.exports = function(e) {
        return "symbol" == typeof e || o(e) && "[object Symbol]" == n(e)
    }
}, 756024, (e, t, r) => {
    t.exports = function() {
        return !1
    }
}, 432816, (e, t, r) => {
    var n = e.r(78974),
        o = e.r(756024),
        l = r && !r.nodeType && r,
        i = l && t && !t.nodeType && t,
        a = i && i.exports === l ? n.Buffer : void 0;
    t.exports = (a ? a.isBuffer : void 0) || o
}, 976989, e => {
    "use strict";
    var t = e.i(785328);
    e.s(["default", 0, ({
        className: e,
        width: r = 18,
        height: n = 18
    }) => (0, t.jsx)("svg", {
        className: e,
        width: r,
        height: n,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
            d: "M13.8001 10.7556L8.33444 1.26375C8.19785 1.0312 8.00287 0.838382 7.76881 0.704408C7.53476 0.570434 7.26975 0.499954 7.00006 0.499954C6.73037 0.499954 6.46536 0.570434 6.23131 0.704408C5.99725 0.838382 5.80227 1.0312 5.66569 1.26375L0.20006 10.7556C0.0686451 10.9805 -0.000610352 11.2364 -0.000610352 11.4969C-0.000610352 11.7574 0.0686451 12.0132 0.20006 12.2381C0.334892 12.4721 0.529541 12.6659 0.764036 12.7998C0.99853 12.9337 1.26442 13.0028 1.53444 13H12.4657C12.7355 13.0026 13.0011 12.9334 13.2354 12.7995C13.4696 12.6656 13.6641 12.4719 13.7988 12.2381C13.9304 12.0133 13.9999 11.7575 14.0001 11.497C14.0003 11.2365 13.9313 10.9807 13.8001 10.7556ZM6.50006 5.5C6.50006 5.36739 6.55274 5.24021 6.64651 5.14644C6.74027 5.05267 6.86745 5 7.00006 5C7.13267 5 7.25985 5.05267 7.35361 5.14644C7.44738 5.24021 7.50006 5.36739 7.50006 5.5V8C7.50006 8.1326 7.44738 8.25978 7.35361 8.35355C7.25985 8.44732 7.13267 8.5 7.00006 8.5C6.86745 8.5 6.74027 8.44732 6.64651 8.35355C6.55274 8.25978 6.50006 8.1326 6.50006 8V5.5ZM7.00006 11C6.85172 11 6.70672 10.956 6.58338 10.8736C6.46005 10.7912 6.36392 10.6741 6.30715 10.537C6.25038 10.4 6.23553 10.2492 6.26447 10.1037C6.29341 9.95819 6.36484 9.82455 6.46973 9.71967C6.57462 9.61478 6.70826 9.54335 6.85374 9.51441C6.99923 9.48547 7.15003 9.50032 7.28707 9.55709C7.42412 9.61385 7.54125 9.70998 7.62366 9.83332C7.70607 9.95665 7.75006 10.1017 7.75006 10.25C7.75006 10.4489 7.67104 10.6397 7.53039 10.7803C7.38974 10.921 7.19897 11 7.00006 11Z",
            fill: "currentColor"
        })
    })])
}, 620174, 117696, 441737, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781),
        n = e.i(722978),
        o = e.i(679933),
        l = e.i(776050),
        i = e.i(429305),
        a = e.i(260840),
        s = e.i(513485),
        u = e.i(869049),
        c = e.i(860700),
        p = e.i(803258),
        d = e.i(251635);

    function f(e, t) {
        let {
            inputElementType: n = "input",
            isDisabled: f = !1,
            isRequired: y = !1,
            isReadOnly: m = !1,
            type: h = "text",
            validationBehavior: x = "aria"
        } = e, [b, v] = (0, p.useControlledState)(e.value, e.defaultValue || "", e.onChange), {
            focusableProps: C
        } = (0, s.useFocusable)(e, t), g = (0, d.useFormValidationState)({
            ...e,
            value: b
        }), {
            isInvalid: j,
            validationErrors: k,
            validationDetails: w
        } = g.displayValidation, {
            labelProps: I,
            fieldProps: A,
            descriptionProps: _,
            errorMessageProps: M
        } = (0, a.useField)({
            ...e,
            isInvalid: j,
            errorMessage: e.errorMessage || k
        }), E = (0, o.filterDOMProps)(e, {
            labelable: !0
        }), O = {
            type: h,
            pattern: e.pattern
        }, [Z] = (0, r.useState)(b);
        return (0, u.useFormReset)(t, e.defaultValue ?? Z, v), (0, c.useFormValidation)(e, g, t), {
            labelProps: I,
            inputProps: (0, i.mergeProps)(E, "input" === n ? O : void 0, {
                disabled: f,
                readOnly: m,
                required: y && "native" === x,
                "aria-required": y && "aria" === x || void 0,
                "aria-invalid": j || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-activedescendant": e["aria-activedescendant"],
                "aria-autocomplete": e["aria-autocomplete"],
                "aria-haspopup": e["aria-haspopup"],
                "aria-controls": e["aria-controls"],
                value: b,
                onChange: e => v((0, l.getEventTarget)(e).value),
                autoComplete: e.autoComplete,
                autoCapitalize: e.autoCapitalize,
                maxLength: e.maxLength,
                minLength: e.minLength,
                name: e.name,
                form: e.form,
                placeholder: e.placeholder,
                inputMode: e.inputMode,
                autoCorrect: e.autoCorrect,
                spellCheck: e.spellCheck,
                [parseInt(r.default.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: e.enterKeyHint,
                onCopy: e.onCopy,
                onCut: e.onCut,
                onPaste: e.onPaste,
                onCompositionEnd: e.onCompositionEnd,
                onCompositionStart: e.onCompositionStart,
                onCompositionUpdate: e.onCompositionUpdate,
                onSelect: e.onSelect,
                onBeforeInput: e.onBeforeInput,
                onInput: e.onInput,
                ...C,
                ...A
            }),
            descriptionProps: _,
            errorMessageProps: M,
            isInvalid: j,
            validationErrors: k,
            validationDetails: w
        }
    }
    e.s(["useTextField", 0, f], 117696);
    var y = e.i(838031);
    let m = r.default.forwardRef((e, r) => {
        let {
            disabled: o,
            hasError: l,
            inputSize: i,
            hasWarning: a,
            isTextArea: s
        } = e, u = (0, y.useObjectRef)(r), {
            inputProps: c
        } = f({
            ...{
                ...e,
                autoCapitalize: "none"
            },
            inputElementType: "input"
        }, u), p = (0, n.default)("rounded-lg w-full border border-gray-200 outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 transition-all ease-out duration-400", "text-gray-900 dark:text-gray-400 dark:text-white", "placeholder-gray-600 dark:placeholder-gray-400", {
            "h-10 py-2.5 px-2": "small" === i,
            "h-12 py-3.5 px-3": "medium" === i,
            "h-14 py-5 px-4": "large" === i
        }, {
            "bg-gray-100 dark:bg-gray-800 cursor-not-allowed": o,
            "border-yellow-500 dark:border-yellow-500 border-2": a,
            "border-red-500 dark:border-red-500 border-2": l
        }, {
            "bg-gray-50 dark:bg-gray-900": !o,
            "border-gray-400 hover:border-gray-900 dark:border-gray-500 dark:hover:border-white": !l && !a
        }, {
            "min-h-[6rem]": s
        });
        return s ? (0, t.jsx)("textarea", {
            ...c,
            "aria-labelledby": e["aria-labelledby"] || c["aria-labelledby"],
            ref: u,
            className: p,
            disabled: o
        }) : (0, t.jsx)("input", {
            ...c,
            "aria-labelledby": e["aria-labelledby"] || c["aria-labelledby"],
            ref: u,
            className: p,
            disabled: o
        })
    });
    m.displayName = "InputField";
    var h = e.i(976989);
    let x = ({
            className: e,
            width: r = 18,
            height: n = 18
        }) => (0, t.jsx)("svg", {
            className: e,
            width: r,
            height: n,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M7 0.5C5.71442 0.5 4.45772 0.881218 3.3888 1.59545C2.31988 2.30968 1.48676 3.32484 0.994786 4.51256C0.502816 5.70028 0.374095 7.00721 0.624899 8.26809C0.875703 9.52896 1.49477 10.6872 2.40381 11.5962C3.31285 12.5052 4.47104 13.1243 5.73192 13.3751C6.99279 13.6259 8.29973 13.4972 9.48744 13.0052C10.6752 12.5132 11.6903 11.6801 12.4046 10.6112C13.1188 9.54229 13.5 8.28558 13.5 7C13.4982 5.27665 12.8128 3.62441 11.5942 2.40582C10.3756 1.18722 8.72335 0.50182 7 0.5ZM9.35375 8.64625C9.40021 8.69271 9.43706 8.74786 9.4622 8.80855C9.48734 8.86925 9.50028 8.9343 9.50028 9C9.50028 9.0657 9.48734 9.13075 9.4622 9.19145C9.43706 9.25214 9.40021 9.30729 9.35375 9.35375C9.3073 9.40021 9.25215 9.43705 9.19145 9.4622C9.13075 9.48734 9.0657 9.50028 9 9.50028C8.93431 9.50028 8.86925 9.48734 8.80855 9.4622C8.74786 9.43705 8.69271 9.40021 8.64625 9.35375L7 7.70687L5.35375 9.35375C5.3073 9.40021 5.25215 9.43705 5.19145 9.4622C5.13075 9.48734 5.0657 9.50028 5 9.50028C4.93431 9.50028 4.86925 9.48734 4.80855 9.4622C4.74786 9.43705 4.69271 9.40021 4.64625 9.35375C4.5998 9.30729 4.56295 9.25214 4.53781 9.19145C4.51266 9.13075 4.49972 9.0657 4.49972 9C4.49972 8.9343 4.51266 8.86925 4.53781 8.80855C4.56295 8.74786 4.5998 8.69271 4.64625 8.64625L6.29313 7L4.64625 5.35375C4.55243 5.25993 4.49972 5.13268 4.49972 5C4.49972 4.86732 4.55243 4.74007 4.64625 4.64625C4.74007 4.55243 4.86732 4.49972 5 4.49972C5.13268 4.49972 5.25993 4.55243 5.35375 4.64625L7 6.29313L8.64625 4.64625C8.69271 4.59979 8.74786 4.56294 8.80855 4.5378C8.86925 4.51266 8.93431 4.49972 9 4.49972C9.0657 4.49972 9.13075 4.51266 9.19145 4.5378C9.25215 4.56294 9.3073 4.59979 9.35375 4.64625C9.40021 4.6927 9.43706 4.74786 9.4622 4.80855C9.48734 4.86925 9.50028 4.9343 9.50028 5C9.50028 5.0657 9.48734 5.13075 9.4622 5.19145C9.43706 5.25214 9.40021 5.3073 9.35375 5.35375L7.70688 7L9.35375 8.64625Z",
                fill: "currentColor"
            })
        }),
        b = ({
            className: e,
            width: r = 18,
            height: n = 18
        }) => (0, t.jsx)("svg", {
            className: e,
            width: r,
            height: n,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM7.75 4.5C7.89834 4.5 8.04334 4.54399 8.16668 4.6264C8.29002 4.70881 8.38615 4.82594 8.44291 4.96299C8.49968 5.10003 8.51453 5.25083 8.48559 5.39632C8.45665 5.5418 8.38522 5.67544 8.28033 5.78033C8.17544 5.88522 8.04181 5.95665 7.89632 5.98559C7.75083 6.01453 7.60003 5.99968 7.46299 5.94291C7.32595 5.88614 7.20881 5.79001 7.1264 5.66668C7.04399 5.54334 7 5.39834 7 5.25C7 5.05109 7.07902 4.86032 7.21967 4.71967C7.36032 4.57902 7.55109 4.5 7.75 4.5ZM8.5 11.5C8.23479 11.5 7.98043 11.3946 7.7929 11.2071C7.60536 11.0196 7.5 10.7652 7.5 10.5V8C7.36739 8 7.24022 7.94732 7.14645 7.85355C7.05268 7.75979 7 7.63261 7 7.5C7 7.36739 7.05268 7.24021 7.14645 7.14645C7.24022 7.05268 7.36739 7 7.5 7C7.76522 7 8.01957 7.10536 8.20711 7.29289C8.39465 7.48043 8.5 7.73478 8.5 8V10.5C8.63261 10.5 8.75979 10.5527 8.85356 10.6464C8.94732 10.7402 9 10.8674 9 11C9 11.1326 8.94732 11.2598 8.85356 11.3536C8.75979 11.4473 8.63261 11.5 8.5 11.5Z",
                fill: "currentColor"
            })
        }),
        v = e => {
            let {
                helperText: n,
                hasError: o,
                hasWarning: l
            } = e, {
                descriptionProps: i
            } = f(e, (0, r.useRef)(null));
            return (0, t.jsxs)("div", {
                ...i,
                className: "align-items flex pt-2 text-xs",
                children: [o && (0, t.jsx)(x, {
                    className: "inline pr-1 text-red-600"
                }), l && (0, t.jsx)(h.default, {
                    className: "inline pr-1 text-yellow-600"
                }), !l && !o && (0, t.jsx)(b, {
                    className: "inline pr-1 text-gray-600 dark:text-gray-100"
                }), n]
            })
        };
    e.s(["default", 0, v], 441737);
    let C = ({
            className: e,
            ...r
        }) => (0, t.jsxs)("label", {
            id: r.id,
            htmlFor: r.for,
            className: e ?? "flex justify-between pb-2",
            children: [r.label, r.isRequired && (0, t.jsx)("span", {
                className: "text-sm text-gray-400",
                children: r.requiredText
            })]
        }),
        g = (0, r.forwardRef)(({
            helperText: e,
            ...n
        }, o) => {
            let l = (0, r.useId)();
            return (0, t.jsxs)("div", {
                ref: o,
                children: [(0, t.jsx)(C, {
                    ...n,
                    id: l
                }), (0, t.jsx)(m, {
                    ...n,
                    "aria-labelledby": l
                }), e && (0, t.jsx)(v, {
                    helperText: e,
                    ...n
                })]
            })
        });
    g.displayName = "Input", e.s(["default", 0, g], 620174)
}, 805518, e => {
    "use strict";
    let t = e.i(747624).default;
    e.s(["default", 0, t])
}]);