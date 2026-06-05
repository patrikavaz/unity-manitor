(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 394225, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(722978);
    e.s(["default", 0, ({
        className: e,
        children: l,
        size: n = "medium",
        ...a
    }) => {
        let i = (0, r.default)("bg-gray-100 text-gray-600 text-tiny-bold dark:bg-gray-900 dark:text-gray-200 rounded-md", {
            small: "px-2 py-1",
            medium: "p-2"
        } [n], e);
        return (0, t.jsx)("span", {
            className: i,
            ...a,
            children: l
        })
    }], 394225)
}, 229696, e => {
    "use strict";
    var t, r, l = e.i(3931);

    function n() {
        return (n = Object.assign.bind()).apply(this, arguments)
    }
    let a = ["children", "options"],
        i = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), {
            for: "htmlFor"
        }),
        s = {
            amp: "&",
            apos: "'",
            gt: ">",
            lt: "<",
            nbsp: " ",
            quot: "“"
        },
        o = ["style", "script"],
        c = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
        d = /mailto:/i,
        u = /\n{2,}$/,
        f = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
        m = /^ *> ?/gm,
        p = /^ {2,}\n/,
        g = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
        h = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
        x = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        b = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        y = /^(?:\n *)*\n/,
        v = /\r\n?/g,
        k = /^\[\^([^\]]+)](:.*)\n/,
        j = /^\[\^([^\]]+)]/,
        w = /\f/g,
        N = /^\s*?\[(x|\s)\]/,
        C = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        L = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        T = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
        $ = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
        H = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        M = /^<!--[\s\S]*?(?:-->)/,
        O = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        S = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        A = /^\{.*\}$/,
        B = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        E = /^<([^ >]+@[^ >]+)>/,
        I = /^<([^ >]+:\/[^ >]+)>/,
        R = /-([a-z])?/gi,
        P = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
        _ = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        W = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        F = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        D = /(\[|\])/g,
        z = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
        G = /\t/g,
        U = /^ *\| */,
        X = /(^ *\||\| *$)/g,
        q = / *$/,
        V = /^ *:-+: *$/,
        Z = /^ *:-+ *$/,
        K = /^ *-+: *$/,
        Y = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
        Q = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
        J = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
        ee = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
        et = /^\\([^0-9A-Za-z\s])/,
        er = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
        el = /^\n+/,
        en = /^([ \t]*)/,
        ea = /\\([^\\])/g,
        ei = / *\n+$/,
        es = /(?:^|\n)( *)$/,
        eo = "(?:\\d+\\.)",
        ec = "(?:[*+-])";

    function ed(e) {
        return "( *)(" + (1 === e ? eo : ec) + ") +"
    }
    let eu = ed(1),
        ef = ed(2);

    function em(e) {
        return RegExp("^" + (1 === e ? eu : ef))
    }
    let ep = em(1),
        eg = em(2);

    function eh(e) {
        return RegExp("^" + (1 === e ? eu : ef) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? eo : ec) + " )[^\\n]*)*(\\n|$)", "gm")
    }
    let ex = eh(1),
        eb = eh(2);

    function ey(e) {
        let t = 1 === e ? eo : ec;
        return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)")
    }
    let ev = ey(1),
        ek = ey(2);

    function ej(e, t) {
        let l = 1 === t,
            n = l ? ev : ek,
            a = l ? ex : eb,
            i = l ? ep : eg;
        return {
            t(e, t, r) {
                let l = es.exec(r);
                return l && (t.o || !t._ && !t.u) ? n.exec(e = l[1] + e) : null
            },
            i: r.HIGH,
            l(e, t, r) {
                let n = l ? +e[2] : void 0,
                    s = e[0].replace(u, "\n").match(a),
                    o = !1;
                return {
                    p: s.map(function(e, l) {
                        let n, a = RegExp("^ {1," + i.exec(e)[0].length + "}", "gm"),
                            c = e.replace(a, "").replace(i, ""),
                            d = l === s.length - 1,
                            u = -1 !== c.indexOf("\n\n") || d && o;
                        o = u;
                        let f = r._,
                            m = r.o;
                        r.o = !0, u ? (r._ = !1, n = c.replace(ei, "\n\n")) : (r._ = !0, n = c.replace(ei, ""));
                        let p = t(n, r);
                        return r._ = f, r.o = m, p
                    }),
                    m: l,
                    g: n
                }
            },
            h: (t, r, l) => e(t.m ? "ol" : "ul", {
                key: l.k,
                start: t.g
            }, t.p.map(function(t, n) {
                return e("li", {
                    key: n
                }, r(t, l))
            }))
        }
    }
    let ew = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eN = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eC = [f, h, x, C, T, L, M, P, ex, ev, eb, ek],
        eL = [...eC, /^[^\n]+(?:  \n|\n{2,})/, $, S];

    function eT(e) {
        return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
    }

    function e$(e) {
        return K.test(e) ? "right" : V.test(e) ? "center" : Z.test(e) ? "left" : null
    }

    function eH(e, t, r) {
        let l = r.$;
        r.$ = !0;
        let n = t(e.trim(), r);
        r.$ = l;
        let a = [
            []
        ];
        return n.forEach(function(e, t) {
            "tableSeparator" === e.type ? 0 !== t && t !== n.length - 1 && a.push([]) : ("text" !== e.type || null != n[t + 1] && "tableSeparator" !== n[t + 1].type || (e.v = e.v.replace(q, "")), a[a.length - 1].push(e))
        }), a
    }

    function eM(e, t, r) {
        var l;
        r._ = !0;
        let n = eH(e[1], t, r),
            a = e[2].replace(X, "").split("|").map(e$),
            i = (l = e[3], l.trim().split("\n").map(function(e) {
                return eH(e, t, r)
            }));
        return r._ = !1, {
            S: a,
            A: i,
            L: n,
            type: "table"
        }
    }

    function eO(e, t) {
        return null == e.S[t] ? {} : {
            textAlign: e.S[t]
        }
    }

    function eS(e) {
        return function(t, r) {
            return r._ ? e.exec(t) : null
        }
    }

    function eA(e) {
        return function(t, r) {
            return r._ || r.u ? e.exec(t) : null
        }
    }

    function eB(e) {
        return function(t, r) {
            return r._ || r.u ? null : e.exec(t)
        }
    }

    function eE(e) {
        return function(t) {
            return e.exec(t)
        }
    }

    function eI(e, t, r) {
        if (t._ || t.u || r && !r.endsWith("\n")) return null;
        let l = "";
        e.split("\n").every(e => !eC.some(t => t.test(e)) && (l += e + "\n", e.trim()));
        let n = l.trimEnd();
        return "" == n ? null : [l, n]
    }

    function eR(e) {
        try {
            if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return
        } catch (e) {
            return null
        }
        return e
    }

    function eP(e) {
        return e.replace(ea, "$1")
    }

    function e_(e, t, r) {
        let l = r._ || !1,
            n = r.u || !1;
        r._ = !0, r.u = !0;
        let a = e(t, r);
        return r._ = l, r.u = n, a
    }

    function eW(e, t, r) {
        return r._ = !1, e(t, r)
    }
    let eF = (e, t, r) => ({
        v: e_(t, e[1], r)
    });

    function eD() {
        return {}
    }

    function ez() {
        return null
    }

    function eG(e, t, r) {
        let l = e,
            n = t.split(".");
        for (; n.length && void 0 !== (l = l[n[0]]);) n.shift();
        return l || r
    }(t = r || (r = {}))[t.MAX = 0] = "MAX", t[t.HIGH = 1] = "HIGH", t[t.MED = 2] = "MED", t[t.LOW = 3] = "LOW", t[t.MIN = 4] = "MIN", e.s(["default", 0, e => {
        let {
            children: t,
            options: u
        } = e, X = function(e, t) {
            if (null == e) return {};
            var r, l, n = {},
                a = Object.keys(e);
            for (l = 0; l < a.length; l++) t.indexOf(r = a[l]) >= 0 || (n[r] = e[r]);
            return n
        }(e, a);
        return l.cloneElement(function(e, t = {}) {
            var a;
            let u;
            t.overrides = t.overrides || {}, t.slugify = t.slugify || eT, t.namedCodesToUnicode = t.namedCodesToUnicode ? n({}, s, t.namedCodesToUnicode) : s;
            let X = t.createElement || l.createElement;

            function q(e, r, ...l) {
                var a;
                let i, s = eG(t.overrides, `${e}.props`, {});
                return X((i = eG(a = t.overrides, e)) ? "function" == typeof i || "object" == typeof i && "render" in i ? i : eG(a, `${e}.component`, e) : e, n({}, r, s, {
                    className: function(...e) {
                        return e.filter(Boolean).join(" ")
                    }(null == r ? void 0 : r.className, s.className) || void 0
                }), ...l)
            }

            function V(e) {
                let r, n = !1;
                t.forceInline ? n = !0 : t.forceBlock || (n = !1 === z.test(e));
                let a = eo(es(n ? e : `${e.trimEnd().replace(el,"")}

`, {
                    _: n
                }));
                for (;
                    "string" == typeof a[a.length - 1] && !a[a.length - 1].trim();) a.pop();
                if (null === t.wrapper) return a;
                let i = t.wrapper || (n ? "span" : "div");
                if (a.length > 1 || t.forceWrapper) r = a;
                else {
                    if (1 === a.length) return "string" == typeof(r = a[0]) ? q("span", {
                        key: "outer"
                    }, r) : r;
                    r = null
                }
                return l.createElement(i, {
                    key: "outer"
                }, r)
            }

            function Z(e) {
                let t = e.match(c);
                return t ? t.reduce(function(e, t, r) {
                    let n = t.indexOf("=");
                    if (-1 !== n) {
                        var a, s, o;
                        let c, d = (-1 !== (a = t.slice(0, n)).indexOf("-") && null === a.match(O) && (a = a.replace(R, function(e, t) {
                                return t.toUpperCase()
                            })), a).trim(),
                            u = ('"' === (c = (s = t.slice(n + 1).trim())[0]) || "'" === c) && s.length >= 2 && s[s.length - 1] === c ? s.slice(1, -1) : s,
                            f = i[d] || d,
                            m = e[f] = (o = u, "style" === d ? o.split(/;\s?/).reduce(function(e, t) {
                                let r = t.slice(0, t.indexOf(":"));
                                return e[r.replace(/(-[a-z])/g, e => e[1].toUpperCase())] = t.slice(r.length + 1).trim(), e
                            }, {}) : "href" === d ? eR(o) : (o.match(A) && (o = o.slice(1, o.length - 1)), "true" === o || "false" !== o && o));
                        "string" == typeof m && ($.test(m) || S.test(m)) && (e[f] = l.cloneElement(V(m.trim()), {
                            key: r
                        }))
                    } else "style" !== t && (e[i[t] || t] = !0);
                    return e
                }, {}) : null
            }
            let K = [],
                ea = {},
                ei = {
                    blockQuote: {
                        t: eB(f),
                        i: r.HIGH,
                        l: (e, t, r) => ({
                            v: t(e[0].replace(m, ""), r)
                        }),
                        h: (e, t, r) => q("blockquote", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    breakLine: {
                        t: eE(p),
                        i: r.HIGH,
                        l: eD,
                        h: (e, t, r) => q("br", {
                            key: r.k
                        })
                    },
                    breakThematic: {
                        t: eB(g),
                        i: r.HIGH,
                        l: eD,
                        h: (e, t, r) => q("hr", {
                            key: r.k
                        })
                    },
                    codeBlock: {
                        t: eB(x),
                        i: r.MAX,
                        l: e => ({
                            v: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
                            M: void 0
                        }),
                        h: (e, t, r) => q("pre", {
                            key: r.k
                        }, q("code", n({}, e.O, {
                            className: e.M ? `lang-${e.M}` : ""
                        }), e.v))
                    },
                    codeFenced: {
                        t: eB(h),
                        i: r.MAX,
                        l: e => ({
                            O: Z(e[3] || ""),
                            v: e[4],
                            M: e[2] || void 0,
                            type: "codeBlock"
                        })
                    },
                    codeInline: {
                        t: eA(b),
                        i: r.LOW,
                        l: e => ({
                            v: e[2]
                        }),
                        h: (e, t, r) => q("code", {
                            key: r.k
                        }, e.v)
                    },
                    footnote: {
                        t: eB(k),
                        i: r.MAX,
                        l: e => (K.push({
                            I: e[2],
                            j: e[1]
                        }), {}),
                        h: ez
                    },
                    footnoteReference: {
                        t: eS(j),
                        i: r.HIGH,
                        l: e => ({
                            v: e[1],
                            B: `#${t.slugify(e[1])}`
                        }),
                        h: (e, t, r) => q("a", {
                            key: r.k,
                            href: eR(e.B)
                        }, q("sup", {
                            key: r.k
                        }, e.v))
                    },
                    gfmTask: {
                        t: eS(N),
                        i: r.HIGH,
                        l: e => ({
                            R: "x" === e[1].toLowerCase()
                        }),
                        h: (e, t, r) => q("input", {
                            checked: e.R,
                            key: r.k,
                            readOnly: !0,
                            type: "checkbox"
                        })
                    },
                    heading: {
                        t: eB(t.enforceAtxHeadings ? L : C),
                        i: r.HIGH,
                        l: (e, r, l) => ({
                            v: e_(r, e[2], l),
                            T: t.slugify(e[2]),
                            C: e[1].length
                        }),
                        h: (e, t, r) => q(`h${e.C}`, {
                            id: e.T,
                            key: r.k
                        }, t(e.v, r))
                    },
                    headingSetext: {
                        t: eB(T),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: e_(t, e[1], r),
                            C: "=" === e[2] ? 1 : 2,
                            type: "heading"
                        })
                    },
                    htmlComment: {
                        t: eE(M),
                        i: r.HIGH,
                        l: () => ({}),
                        h: ez
                    },
                    image: {
                        t: eA(eN),
                        i: r.HIGH,
                        l: e => ({
                            D: e[1],
                            B: eP(e[2]),
                            F: e[3]
                        }),
                        h: (e, t, r) => q("img", {
                            key: r.k,
                            alt: e.D || void 0,
                            title: e.F || void 0,
                            src: eR(e.B)
                        })
                    },
                    link: {
                        t: eS(ew),
                        i: r.LOW,
                        l: (e, t, r) => {
                            var l;
                            let n, a, i;
                            return {
                                v: (l = e[1], n = r._ || !1, a = r.u || !1, r._ = !1, r.u = !0, i = t(l, r), r._ = n, r.u = a, i),
                                B: eP(e[2]),
                                F: e[3]
                            }
                        },
                        h: (e, t, r) => q("a", {
                            key: r.k,
                            href: eR(e.B),
                            title: e.F
                        }, t(e.v, r))
                    },
                    linkAngleBraceStyleDetector: {
                        t: eS(I),
                        i: r.MAX,
                        l: e => ({
                            v: [{
                                v: e[1],
                                type: "text"
                            }],
                            B: e[1],
                            type: "link"
                        })
                    },
                    linkBareUrlDetector: {
                        t: (e, t) => t.N ? null : eS(B)(e, t),
                        i: r.MAX,
                        l: e => ({
                            v: [{
                                v: e[1],
                                type: "text"
                            }],
                            B: e[1],
                            F: void 0,
                            type: "link"
                        })
                    },
                    linkMailtoDetector: {
                        t: eS(E),
                        i: r.MAX,
                        l(e) {
                            let t = e[1],
                                r = e[1];
                            return d.test(r) || (r = "mailto:" + r), {
                                v: [{
                                    v: t.replace("mailto:", ""),
                                    type: "text"
                                }],
                                B: r,
                                type: "link"
                            }
                        }
                    },
                    orderedList: ej(q, 1),
                    unorderedList: ej(q, 2),
                    newlineCoalescer: {
                        t: eB(y),
                        i: r.LOW,
                        l: eD,
                        h: () => "\n"
                    },
                    paragraph: {
                        t: eI,
                        i: r.LOW,
                        l: eF,
                        h: (e, t, r) => q("p", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    ref: {
                        t: eS(_),
                        i: r.MAX,
                        l: e => (ea[e[1]] = {
                            B: e[2],
                            F: e[4]
                        }, {}),
                        h: ez
                    },
                    refImage: {
                        t: eA(W),
                        i: r.MAX,
                        l: e => ({
                            D: e[1] || void 0,
                            P: e[2]
                        }),
                        h: (e, t, r) => q("img", {
                            key: r.k,
                            alt: e.D,
                            src: eR(ea[e.P].B),
                            title: ea[e.P].F
                        })
                    },
                    refLink: {
                        t: eS(F),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: t(e[1], r),
                            Z: t(e[0].replace(D, "\\$1"), r),
                            P: e[2]
                        }),
                        h: (e, t, r) => ea[e.P] ? q("a", {
                            key: r.k,
                            href: eR(ea[e.P].B),
                            title: ea[e.P].F
                        }, t(e.v, r)) : q("span", {
                            key: r.k
                        }, t(e.Z, r))
                    },
                    table: {
                        t: eB(P),
                        i: r.HIGH,
                        l: eM,
                        h: (e, t, r) => q("table", {
                            key: r.k
                        }, q("thead", null, q("tr", null, e.L.map(function(l, n) {
                            return q("th", {
                                key: n,
                                style: eO(e, n)
                            }, t(l, r))
                        }))), q("tbody", null, e.A.map(function(l, n) {
                            return q("tr", {
                                key: n
                            }, l.map(function(l, n) {
                                return q("td", {
                                    key: n,
                                    style: eO(e, n)
                                }, t(l, r))
                            }))
                        })))
                    },
                    tableSeparator: {
                        t: function(e, t) {
                            return t.$ ? (t._ = !0, U.exec(e)) : null
                        },
                        i: r.HIGH,
                        l: function() {
                            return {
                                type: "tableSeparator"
                            }
                        },
                        h: () => " | "
                    },
                    text: {
                        t: eE(er),
                        i: r.MIN,
                        l: e => ({
                            v: e[0].replace(H, (e, r) => t.namedCodesToUnicode[r] ? t.namedCodesToUnicode[r] : e)
                        }),
                        h: e => e.v
                    },
                    textBolded: {
                        t: eA(Y),
                        i: r.MED,
                        l: (e, t, r) => ({
                            v: t(e[2], r)
                        }),
                        h: (e, t, r) => q("strong", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textEmphasized: {
                        t: eA(Q),
                        i: r.LOW,
                        l: (e, t, r) => ({
                            v: t(e[2], r)
                        }),
                        h: (e, t, r) => q("em", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textEscaped: {
                        t: eA(et),
                        i: r.HIGH,
                        l: e => ({
                            v: e[1],
                            type: "text"
                        })
                    },
                    textMarked: {
                        t: eA(J),
                        i: r.LOW,
                        l: eF,
                        h: (e, t, r) => q("mark", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textStrikethroughed: {
                        t: eA(ee),
                        i: r.LOW,
                        l: eF,
                        h: (e, t, r) => q("del", {
                            key: r.k
                        }, t(e.v, r))
                    }
                };
            !0 !== t.disableParsingRawHTML && (ei.htmlBlock = {
                t: eE($),
                i: r.HIGH,
                l(e, t, r) {
                    let [, l] = e[3].match(en), n = RegExp(`^${l}`, "gm"), a = e[3].replace(n, ""), i = eL.some(e => e.test(a)) ? eW : e_, s = e[1].toLowerCase(), c = -1 !== o.indexOf(s);
                    r.N = r.N || "a" === s;
                    let d = c ? e[3] : i(t, a, r);
                    return r.N = !1, {
                        O: Z(e[2]),
                        v: d,
                        G: c,
                        H: c ? s : e[1]
                    }
                },
                h: (e, t, r) => q(e.H, n({
                    key: r.k
                }, e.O), e.G ? e.v : t(e.v, r))
            }, ei.htmlSelfClosing = {
                t: eE(S),
                i: r.HIGH,
                l: e => ({
                    O: Z(e[2] || ""),
                    H: e[1]
                }),
                h: (e, t, r) => q(e.H, n({}, e.O, {
                    key: r.k
                }))
            });
            let es = ((u = Object.keys(ei)).sort(function(e, t) {
                    let r = ei[e].i,
                        l = ei[t].i;
                    return r !== l ? r - l : e < t ? -1 : 1
                }), function(e, t) {
                    return function e(t, r) {
                        let l = [],
                            n = "";
                        for (; t;) {
                            let a = 0;
                            for (; a < u.length;) {
                                let i = u[a],
                                    s = ei[i],
                                    o = s.t(t, r, n);
                                if (o) {
                                    let a = o[0];
                                    t = t.substring(a.length);
                                    let c = s.l(o, e, r);
                                    null == c.type && (c.type = i), l.push(c), n = a;
                                    break
                                }
                                a++
                            }
                        }
                        return l
                    }(e.replace(v, "\n").replace(w, "").replace(G, "    "), t)
                }),
                eo = (a = function(e, t, r) {
                    return ei[e.type].h(e, t, r)
                }, function e(t, r = {}) {
                    if (Array.isArray(t)) {
                        let l = r.k,
                            n = [],
                            a = !1;
                        for (let l = 0; l < t.length; l++) {
                            r.k = l;
                            let i = e(t[l], r),
                                s = "string" == typeof i;
                            s && a ? n[n.length - 1] += i : null !== i && n.push(i), a = s
                        }
                        return r.k = l, n
                    }
                    return a(t, e, r)
                }),
                ec = V(e);
            return K.length ? q("div", null, ec, q("footer", {
                key: "footer"
            }, K.map(function(e) {
                return q("div", {
                    id: t.slugify(e.j),
                    key: e.j
                }, e.j, eo(es(e.I, {
                    _: !0
                })))
            }))) : ec
        }(t, u), X)
    }])
}, 452152, 929655, 539110, e => {
    "use strict";
    var t = e.i(3931),
        r = e.i(459236);
    let l = {},
        n = 0,
        a = !1,
        i = null,
        s = null;
    e.s(["useTooltipTriggerState", 0, function(e = {}) {
        let {
            delay: o = 1500,
            closeDelay: c = 500
        } = e, {
            isOpen: d,
            open: u,
            close: f
        } = (0, r.useOverlayTriggerState)(e), m = (0, t.useMemo)(() => `${++n}`, []), p = (0, t.useRef)(null), g = (0, t.useRef)(f), h = () => {
            l[m] = y
        }, x = () => {
            for (let e in l) e !== m && (l[e](!0), delete l[e])
        }, b = () => {
            p.current && clearTimeout(p.current), p.current = null, x(), h(), a = !0, u(), i && (clearTimeout(i), i = null), s && (clearTimeout(s), s = null)
        }, y = e => {
            e || c <= 0 ? (p.current && clearTimeout(p.current), p.current = null, g.current()) : p.current || (p.current = setTimeout(() => {
                p.current = null, g.current()
            }, c)), i && (clearTimeout(i), i = null), a && (s && clearTimeout(s), s = setTimeout(() => {
                delete l[m], s = null, a = !1
            }, Math.max(500, c)))
        };
        return (0, t.useEffect)(() => {
            g.current = f
        }, [f]), (0, t.useEffect)(() => () => {
            p.current && clearTimeout(p.current), l[m] && delete l[m]
        }, [m]), {
            isOpen: d,
            open: e => {
                e || !(o > 0) || p.current ? b() : (x(), h(), d || i || a ? d || b() : i = setTimeout(() => {
                    i = null, a = !0, b()
                }, o))
            },
            close: y
        }
    }], 452152);
    var o = e.i(339206),
        c = e.i(604082),
        d = e.i(897884);
    e.s(["useTooltip", 0, function(e, t) {
        let r = (0, o.filterDOMProps)(e, {
                labelable: !0
            }),
            {
                hoverProps: l
            } = (0, d.useHover)({
                onHoverStart: () => null == t ? void 0 : t.open(!0),
                onHoverEnd: () => null == t ? void 0 : t.close()
            });
        return {
            tooltipProps: (0, c.mergeProps)(r, l, {
                role: "tooltip"
            })
        }
    }], 929655);
    var u = e.i(427651),
        f = e.i(7180),
        m = e.i(231781);
    e.s(["useTooltipTrigger", 0, function(e, r, l) {
        let {
            isDisabled: n,
            trigger: a
        } = e, i = (0, m.useId)(), s = (0, t.useRef)(!1), o = (0, t.useRef)(!1), p = () => {
            (s.current || o.current) && r.open(o.current)
        }, g = e => {
            s.current || o.current || r.close(e)
        };
        (0, t.useEffect)(() => {
            let e = e => {
                l && l.current && "Escape" === e.key && (e.stopPropagation(), r.close(!0))
            };
            if (r.isOpen) return document.addEventListener("keydown", e, !0), () => {
                document.removeEventListener("keydown", e, !0)
            }
        }, [l, r]);
        let h = () => {
                o.current = !1, s.current = !1, g(!0)
            },
            {
                hoverProps: x
            } = (0, d.useHover)({
                isDisabled: n,
                onHoverStart: () => {
                    "focus" !== a && ("pointer" === (0, u.getInteractionModality)() ? s.current = !0 : s.current = !1, p())
                },
                onHoverEnd: () => {
                    "focus" !== a && (o.current = !1, s.current = !1, g())
                }
            }),
            {
                focusableProps: b
            } = (0, f.useFocusable)({
                isDisabled: n,
                onFocus: () => {
                    (0, u.isFocusVisible)() && (o.current = !0, p())
                },
                onBlur: () => {
                    o.current = !1, s.current = !1, g(!0)
                }
            }, l);
        return {
            triggerProps: {
                "aria-describedby": r.isOpen ? i : void 0,
                ...(0, c.mergeProps)(b, x, {
                    onPointerDown: h,
                    onKeyDown: h,
                    tabIndex: void 0
                })
            },
            tooltipProps: {
                id: i
            }
        }
    }], 539110)
}, 652955, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        l = e.i(452152),
        n = e.i(929655),
        a = e.i(539110),
        i = e.i(604082),
        s = e.i(722978);
    let o = ({
        state: e,
        content: r,
        hasArrow: l,
        placement: a,
        ...o
    }) => {
        let {
            tooltipProps: c
        } = (0, n.useTooltip)(o, e);
        return (0, t.jsx)("span", {
            className: (0, s.default)("text-tiny absolute z-10 w-max max-w-[180px] rounded-lg bg-white p-4 text-left text-gray-900 drop-shadow-lg dark:bg-gray-800 dark:text-gray-100", (e => {
                switch (e) {
                    case "top":
                        return "left-1/2 translate-x-[-50%] -top-1/2 translate-y-[-105%]";
                    case "left":
                        return "left-0 translate-x-[-105%] top-1/2 translate-y-[-50%]";
                    case "right":
                        return "left-[100%] top-1/2 translate-y-[-50%] ml-3.5";
                    default:
                        return "left-1/2 translate-x-[-50%] top-[100%] mt-3.5"
                }
            })(a), l && (e => {
                switch (e) {
                    case "top":
                        return "after:left-1/2 after:top-[100%] after:-translate-x-1/2 after:content-[''] after:absolute after:border-[6px] after:border-x-transparent after:border-b-transparent after:border-t-white dark:after:border-t-gray-800";
                    case "left":
                        return "after:content-[''] after:absolute after:top-1/2 after:right-0 after:translate-x-[12px] after:-translate-y-1/2 after:border-[6px] after:border-y-transparent after:border-r-transparent after:border-l-white dark:after:border-l-gray-800";
                    case "right":
                        return "before:content-[''] before:absolute before:top-1/2 before:right-[100%] before:-translate-y-1/2 before:border-[6px] before:border-y-transparent before:border-l-transparent before:border-r-white dark:before:border-r-gray-800";
                    default:
                        return "before:left-1/2 before:top-0 before:-translate-y-[12px]  before:-translate-x-1/2 before:content-[''] before:absolute before:border-[6px] before:border-x-transparent before:border-t-transparent before:border-b-white dark:before:border-b-gray-800"
                }
            })(a)),
            style: {
                wordBreak: "break-word",
                overflowWrap: "break-word"
            },
            ...(0, i.mergeProps)(o, c),
            children: r
        })
    };
    e.s(["default", 0, ({
        content: e,
        placement: n = "bottom",
        hasArrow: i = !0,
        tooltipOptions: s = {
            delay: 300,
            closeDelay: 0,
            isDisabled: !1
        },
        children: c
    }) => {
        let d = (0, l.useTooltipTriggerState)(s),
            u = (0, r.useRef)(null),
            {
                triggerProps: f,
                tooltipProps: m
            } = (0, a.useTooltipTrigger)(s, d, u);
        return (0, t.jsxs)("span", {
            className: "relative",
            children: [(0, t.jsx)("span", {
                ref: u,
                ...f,
                children: c
            }), d.isOpen && (0, t.jsx)(o, {
                state: d,
                content: e,
                placement: n,
                hasArrow: i,
                ...m
            })]
        })
    }], 652955)
}, 692558, (e, t, r) => {
    var l = e.r(416907),
        n = e.r(394022);
    t.exports = function(e) {
        return "symbol" == typeof e || n(e) && "[object Symbol]" == l(e)
    }
}, 369710, e => {
    "use strict";
    e.s(["resolveElements", 0, function(e, t, r) {
        if (e instanceof EventTarget) return [e];
        if ("string" == typeof e) {
            let l = document;
            t && (l = t.current);
            let n = r?.[e] ?? l.querySelectorAll(e);
            return n ? Array.from(n) : []
        }
        return Array.from(e)
    }])
}, 153348, e => {
    "use strict";
    var t = e.i(3931),
        r = e.i(369710);
    let l = {
        some: 0,
        all: 1
    };
    e.s(["useInView", 0, function(e, {
        root: n,
        margin: a,
        amount: i,
        once: s = !1,
        initial: o = !1
    } = {}) {
        let [c, d] = (0, t.useState)(o);
        return (0, t.useEffect)(() => {
            if (!e.current || s && c) return;
            let t = {
                root: n && n.current || void 0,
                margin: a,
                amount: i
            };
            return function(e, t, {
                root: n,
                margin: a,
                amount: i = "some"
            } = {}) {
                let s = (0, r.resolveElements)(e),
                    o = new WeakMap,
                    c = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = o.get(e.target);
                            if (!!r !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let r = t(e.target, e);
                                    "function" == typeof r ? o.set(e.target, r) : c.unobserve(e.target)
                                } else "function" == typeof r && (r(e), o.delete(e.target))
                        })
                    }, {
                        root: n,
                        rootMargin: a,
                        threshold: "number" == typeof i ? i : l[i]
                    });
                return s.forEach(e => c.observe(e)), () => c.disconnect()
            }(e.current, () => (d(!0), s ? void 0 : () => d(!1)), t)
        }, [n, e, a, s, i]), c
    }], 153348)
}, 52971, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.default = void 0, r.default = {
        hljs: {
            display: "block",
            overflowX: "auto",
            padding: "0.5em",
            background: "#272822",
            color: "#ddd"
        },
        "hljs-tag": {
            color: "#f92672"
        },
        "hljs-keyword": {
            color: "#f92672",
            fontWeight: "bold"
        },
        "hljs-selector-tag": {
            color: "#f92672",
            fontWeight: "bold"
        },
        "hljs-literal": {
            color: "#f92672",
            fontWeight: "bold"
        },
        "hljs-strong": {
            color: "#f92672"
        },
        "hljs-name": {
            color: "#f92672"
        },
        "hljs-code": {
            color: "#66d9ef"
        },
        "hljs-class .hljs-title": {
            color: "white"
        },
        "hljs-attribute": {
            color: "#bf79db"
        },
        "hljs-symbol": {
            color: "#bf79db"
        },
        "hljs-regexp": {
            color: "#bf79db"
        },
        "hljs-link": {
            color: "#bf79db"
        },
        "hljs-string": {
            color: "#a6e22e"
        },
        "hljs-bullet": {
            color: "#a6e22e"
        },
        "hljs-subst": {
            color: "#a6e22e"
        },
        "hljs-title": {
            color: "#a6e22e",
            fontWeight: "bold"
        },
        "hljs-section": {
            color: "#a6e22e",
            fontWeight: "bold"
        },
        "hljs-emphasis": {
            color: "#a6e22e"
        },
        "hljs-type": {
            color: "#a6e22e",
            fontWeight: "bold"
        },
        "hljs-built_in": {
            color: "#a6e22e"
        },
        "hljs-builtin-name": {
            color: "#a6e22e"
        },
        "hljs-selector-attr": {
            color: "#a6e22e"
        },
        "hljs-selector-pseudo": {
            color: "#a6e22e"
        },
        "hljs-addition": {
            color: "#a6e22e"
        },
        "hljs-variable": {
            color: "#a6e22e"
        },
        "hljs-template-tag": {
            color: "#a6e22e"
        },
        "hljs-template-variable": {
            color: "#a6e22e"
        },
        "hljs-comment": {
            color: "#75715e"
        },
        "hljs-quote": {
            color: "#75715e"
        },
        "hljs-deletion": {
            color: "#75715e"
        },
        "hljs-meta": {
            color: "#75715e"
        },
        "hljs-doctag": {
            fontWeight: "bold"
        },
        "hljs-selector-id": {
            fontWeight: "bold"
        }
    }
}, 570133, 210310, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(527714),
        l = e.i(52971),
        n = e.i(601198),
        a = e.i(810775),
        i = e.i(919406),
        s = e.i(864074),
        o = e.i(514683);
    r.Light.registerLanguage("csharp", n.default), r.Light.registerLanguage("javascript", a.default), r.Light.registerLanguage("xml", i.default), r.Light.registerLanguage("rust", s.default), r.Light.registerLanguage("css", o.default), e.s(["default", 0, ({
        code: e,
        language: n
    }) => (0, t.jsx)("div", {
        className: "text-white [&>pre]:rounded-xl [&>pre]:!p-4",
        children: (0, t.jsx)(r.Light, {
            style: l.default,
            language: n,
            children: e
        })
    })], 570133);
    var c = e.i(3931),
        d = e.i(749583),
        u = e.i(394225),
        f = e.i(652955),
        m = e.i(229696),
        p = e.i(722978),
        g = e.i(805518),
        h = e.i(363737);
    let x = ({
            className: e
        }) => (0, t.jsx)("svg", {
            className: e,
            width: "17",
            height: "16",
            viewBox: "0 0 17 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("g", {
                id: "ð· ArrowsOutSimple",
                children: (0, t.jsx)("path", {
                    id: "Vector",
                    d: "M13.7144 3V6C13.7144 6.13261 13.6617 6.25979 13.5679 6.35355C13.4741 6.44732 13.347 6.5 13.2144 6.5C13.0817 6.5 12.9546 6.44732 12.8608 6.35355C12.767 6.25979 12.7144 6.13261 12.7144 6V4.20687L9.56811 7.35375C9.47429 7.44757 9.34704 7.50028 9.21436 7.50028C9.08167 7.50028 8.95443 7.44757 8.86061 7.35375C8.76678 7.25993 8.71408 7.13268 8.71408 7C8.71408 6.86732 8.76678 6.74007 8.86061 6.64625L12.0075 3.5H10.2144C10.0817 3.5 9.95457 3.44732 9.8608 3.35355C9.76703 3.25979 9.71436 3.13261 9.71436 3C9.71436 2.86739 9.76703 2.74021 9.8608 2.64645C9.95457 2.55268 10.0817 2.5 10.2144 2.5H13.2144C13.347 2.5 13.4741 2.55268 13.5679 2.64645C13.6617 2.74021 13.7144 2.86739 13.7144 3ZM6.86061 8.64625L3.71436 11.7931V10C3.71436 9.86739 3.66168 9.74021 3.56791 9.64645C3.47414 9.55268 3.34696 9.5 3.21436 9.5C3.08175 9.5 2.95457 9.55268 2.8608 9.64645C2.76703 9.74021 2.71436 9.86739 2.71436 10V13C2.71436 13.1326 2.76703 13.2598 2.8608 13.3536C2.95457 13.4473 3.08175 13.5 3.21436 13.5H6.21436C6.34696 13.5 6.47414 13.4473 6.56791 13.3536C6.66168 13.2598 6.71436 13.1326 6.71436 13C6.71436 12.8674 6.66168 12.7402 6.56791 12.6464C6.47414 12.5527 6.34696 12.5 6.21436 12.5H4.42123L7.56811 9.35375C7.66193 9.25993 7.71463 9.13268 7.71463 9C7.71463 8.86732 7.66193 8.74007 7.56811 8.64625C7.47429 8.55243 7.34704 8.49972 7.21436 8.49972C7.08167 8.49972 6.95443 8.55243 6.86061 8.64625Z",
                    fill: "#3A5BC7"
                })
            })
        }),
        b = ({
            className: e
        }) => (0, t.jsx)("svg", {
            className: e,
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("g", {
                id: "ð· X",
                children: (0, t.jsx)("path", {
                    id: "Vector",
                    d: "M16.067 15.1828C16.1251 15.2409 16.1712 15.3098 16.2026 15.3857C16.234 15.4615 16.2502 15.5429 16.2502 15.625C16.2502 15.7071 16.234 15.7884 16.2026 15.8643C16.1712 15.9402 16.1251 16.0091 16.067 16.0672C16.009 16.1252 15.94 16.1713 15.8642 16.2027C15.7883 16.2342 15.707 16.2503 15.6249 16.2503C15.5427 16.2503 15.4614 16.2342 15.3855 16.2027C15.3097 16.1713 15.2407 16.1252 15.1827 16.0672L9.99986 10.8836L4.81705 16.0672C4.69977 16.1844 4.54071 16.2503 4.37486 16.2503C4.20901 16.2503 4.04995 16.1844 3.93267 16.0672C3.8154 15.9499 3.74951 15.7908 3.74951 15.625C3.74951 15.4591 3.8154 15.3001 3.93267 15.1828L9.11627 9.99998L3.93267 4.81717C3.8154 4.69989 3.74951 4.54083 3.74951 4.37498C3.74951 4.20913 3.8154 4.05007 3.93267 3.93279C4.04995 3.81552 4.20901 3.74963 4.37486 3.74963C4.54071 3.74963 4.69977 3.81552 4.81705 3.93279L9.99986 9.11639L15.1827 3.93279C15.2999 3.81552 15.459 3.74963 15.6249 3.74963C15.7907 3.74963 15.9498 3.81552 16.067 3.93279C16.1843 4.05007 16.2502 4.20913 16.2502 4.37498C16.2502 4.54083 16.1843 4.69989 16.067 4.81717L10.8835 9.99998L16.067 15.1828Z",
                    fill: "#000000"
                })
            })
        }),
        y = ({
            children: e,
            colTitle: r,
            truncationEnabled: l,
            rowTitle: n,
            className: a = "",
            isTableCell: i
        }) => {
            let [s, o] = (0, c.useState)(!1), [u, f] = (0, c.useState)(!1), m = (0, c.useRef)(null), y = (0, p.default)({
                "cursor-pointer relative": s
            }, a), v = (0, p.default)({
                "line-clamp-3": l
            });
            (0, c.useEffect)(() => {
                let e = m.current;
                e && (e.scrollHeight > e.clientHeight ? o(!0) : o(!1))
            }, [m]);
            let k = () => {
                    f(!0)
                },
                j = l && s ? {
                    tabIndex: 0,
                    role: "button",
                    onClick: k,
                    onKeyDown: e => {
                        ("Enter" === e.key || "Space" === e.key) && k()
                    }
                } : {};
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("td", {
                    className: (0, p.default)(y, {
                        "bg-gray-50 p-3 dark:bg-gray-900": !i,
                        "h-full !p-0": i
                    }),
                    ...j,
                    children: [i ? e : (0, t.jsx)(g.default, {
                        className: v,
                        ref: m,
                        children: e
                    }), l && s && (0, t.jsx)(x, {
                        className: "absolute top-1.5 right-1.5"
                    })]
                }), (0, t.jsx)(h.default, {
                    isOpen: u,
                    onOpenChange: f,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "mt-20 flex w-6/12 flex-col rounded-3xl bg-white p-8 dark:bg-gray-800",
                        tabIndex: -1,
                        children: [(0, t.jsx)(d.default, {
                            onPress: () => {
                                f(!1)
                            },
                            variant: "secondary",
                            className: "self-end",
                            children: (0, t.jsx)(b, {})
                        }), (0, t.jsx)(g.default, {
                            className: "caption-sm mb-2.5 text-black dark:text-white",
                            children: n
                        }), (0, t.jsx)("div", {
                            className: "text-heading-sm mb-4 text-black dark:text-white",
                            children: r
                        }), (0, t.jsx)("div", {
                            className: "text-small mb-8",
                            children: (0, t.jsx)(g.default, {
                                className: "text-black dark:text-gray-200",
                                children: e
                            })
                        })]
                    })
                })]
            })
        };
    e.s(["default", 0, ({
        table: e,
        className: r = "",
        verticalHeadingClass: l = "",
        hideTitle: n = !1
    }) => {
        let [a, ...i] = e.rows.map(e => ({
            ...e,
            cells: (e.cells ?? []).map(e => "string" == typeof e ? e : "")
        })), s = `align-top text-heading-sm md:text-small-bold rounded-md bg-gray-100 text-gray-800 bg-gray-100 dark:bg-gray-700 md:dark:bg-gray-800 dark:text-gray-200 border-none ${l}`, o = "align-top rounded-md text-sm text-gray-800 dark:text-gray-200 border-none", h = (0, p.default)("w-full table-fixed border-separate border-spacing-2 break-words", r), x = (0, p.default)("h-full table-fixed border-separate border-spacing-1 break-words", r), b = (0, c.useCallback)(e => {
            let [r, ...l] = e.split("\n"), n = l.splice(1).map((e, r) => {
                let l = e.split("|").filter(e => e).map(e => e.trim());
                return (0, t.jsx)("div", {
                    className: "flex grow",
                    children: l.map((e, l) => (0, t.jsx)(m.default, {
                        className: "flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e
                    }, `cell-${r}-${l}-${e}`))
                }, `row-${r}`)
            });
            return (0, t.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0, t.jsx)("div", {
                    className: "-ml-1 flex grow",
                    children: r.split("|").filter(e => e).map((e, r) => (0, t.jsx)(m.default, {
                        className: "ml-1 flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e.trim()
                    }, `header-cell-${r}-${e}`))
                }), n]
            })
        }, []), v = (0, c.useMemo)(() => i.map(e => e.cells.reduce((e, r, l) => ({
            ...e,
            [`col${l+1}`]: {
                component: r.startsWith("|") ? b(r) : (0, t.jsx)(m.default, {
                    options: {
                        overrides: {
                            Button: {
                                component: d.default
                            },
                            Label: {
                                component: u.default
                            },
                            Tooltip: {
                                component: f.default
                            }
                        }
                    },
                    children: r
                }),
                isTableCell: r.startsWith("|"),
                cellContent: r
            }
        }), {})), [i, b]), k = (0, c.useMemo)(() => a.cells.map((e, r) => (0, t.jsx)("th", {
            scope: "col",
            className: "min-w-[10rem] rounded-md border-none bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-800 dark:text-gray-400",
            children: (0, t.jsx)(m.default, {
                options: {
                    overrides: {
                        Button: {
                            component: d.default
                        },
                        Label: {
                            component: u.default
                        },
                        Tooltip: {
                            component: f.default
                        }
                    }
                },
                children: e
            })
        }, `${r}-${e}`)), [a.cells]), j = (0, c.useMemo)(() => v.map((r, l) => {
            let n = Object.values(r),
                a = n[0];
            return (0, t.jsx)("tr", {
                className: "border-separate border-spacing-1",
                children: n.map((r, n) => (0, t.jsx)(y, {
                    isTableCell: r.isTableCell,
                    className: 0 === n ? s : o,
                    rowTitle: a.component,
                    colTitle: 0 !== n && k && k[n] ? k[n] : "",
                    truncationEnabled: e.tableTruncation,
                    children: r.component
                }, `${l}-${n}-${r.cellContent}`))
            }, l)
        }), [k, v, s, e.tableTruncation]), w = (0, c.useMemo)(() => a.cells.map((e, r) => (0, t.jsx)("th", {
            scope: "col",
            className: "text-tiny-bold rounded-md bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-900 dark:text-gray-400",
            children: (0, t.jsx)(m.default, {
                options: {
                    overrides: {
                        Button: {
                            component: d.default
                        },
                        Label: {
                            component: u.default
                        },
                        Tooltip: {
                            component: f.default
                        }
                    }
                },
                children: e
            })
        }, `${r}-${e}`)), [a]), N = (0, c.useMemo)(() => v.map((e, r) => (0, t.jsx)("div", {
            className: "mb-4 min-w-full rounded-md bg-gray-100 align-middle dark:bg-gray-700",
            children: (0, t.jsxs)("table", {
                className: h,
                children: [a && a.cells.length > 0 && (0, t.jsx)("thead", {
                    className: "hidden",
                    children: (0, t.jsx)("tr", {
                        className: "border-separate border-spacing-1",
                        children: w
                    })
                }), (0, t.jsx)("tbody", {
                    className: "table-row-group bg-gray-50 dark:bg-gray-900",
                    children: Object.values(e).map((e, l) => e ? (0, t.jsx)("tr", {
                        className: "rounded-md",
                        children: (0, t.jsxs)("td", {
                            className: 0 === l ? s : o,
                            children: [0 !== l && a && a.cells[l] && (0, t.jsx)(m.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: d.default
                                        },
                                        Label: {
                                            component: u.default
                                        },
                                        Tooltip: {
                                            component: f.default
                                        }
                                    }
                                },
                                children: a.cells[l]
                            }), (0, t.jsx)(g.default, {
                                children: e.component
                            })]
                        })
                    }, `${r}-${l}-${a.cells[l]}`) : null)
                })]
            })
        }, `row-${r}`)), [v, a, h, s, w]);
        return (0, t.jsxs)("div", {
            children: [(0, t.jsx)("div", {
                className: "sm:flex sm:items-center",
                children: (0, t.jsxs)("div", {
                    className: "sm:flex-auto",
                    children: [!n && e.tableTitle && (0, t.jsx)("div", {
                        className: "text-heading-sm",
                        children: e.tableTitle
                    }), !n && e.tableDescription && (0, t.jsx)("p", {
                        className: "text-body mt-2",
                        children: e.tableDescription
                    })]
                })
            }), (0, t.jsx)("div", {
                className: "mt-8 flow-root",
                children: (0, t.jsxs)("div", {
                    className: "-mx-4 -my-2 overflow-visible sm:-mx-6 lg:-mx-8",
                    children: [(0, t.jsx)("div", {
                        className: "hidden min-w-full rounded-md bg-gray-100 align-middle sm:px-6 md:inline-block md:rounded-none md:bg-transparent",
                        children: (0, t.jsxs)("table", {
                            className: x,
                            children: [k && (0, t.jsx)("thead", {
                                className: "table-header-group",
                                children: (0, t.jsx)("tr", {
                                    className: "border-separate border-spacing-1",
                                    children: k
                                })
                            }), (0, t.jsx)("tbody", {
                                className: "table-row-group",
                                children: j
                            })]
                        })
                    }), (0, t.jsxs)("div", {
                        className: "md:hidden",
                        children: [(0, t.jsx)("div", {
                            className: "text-body-bold mb-4",
                            children: (0, t.jsx)(m.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: d.default
                                        },
                                        Label: {
                                            component: u.default
                                        },
                                        Tooltip: {
                                            component: f.default
                                        }
                                    }
                                },
                                children: a && a.cells && a.cells[0] ? a.cells[0] : ""
                            })
                        }), N]
                    })]
                })
            })]
        })
    }], 210310)
}, 883027, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(722978),
        l = e.i(749583),
        n = e.i(475200);
    e.s(["default", 0, ({
        pdf: e,
        hidePdfToolbar: a,
        url: i,
        mobilePdfButtonText: s,
        title: o,
        visualOptions: c,
        theme: d,
        isHidden: u
    }) => {
        let f = (0, n.default)(),
            m = e ? e.cdnURL : i,
            p = (0, r.default)("mb-8 md:mb-12", {
                "bg-black py-16": c?.container && "dark" === d,
                "bg-white py-16": c?.container && "light" === d
            }),
            g = (0, r.default)({
                container: c?.container
            }),
            h = e && f;
        return (0, t.jsx)(t.Fragment, {
            children: !u && (0, t.jsx)("div", {
                className: p,
                children: (0, t.jsx)("div", {
                    className: g,
                    children: (0, t.jsxs)("div", {
                        className: "relative",
                        children: [(0, t.jsx)("iframe", {
                            className: "aspect-[4/3] w-full rounded-xl",
                            src: `${m}?#view=fit&navpanes=0${a?"&toolbar=0":""}`,
                            title: o ?? ""
                        }), h && (0, t.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center rounded-xl bg-black/80",
                            children: (0, t.jsx)(l.default, {
                                href: m,
                                variant: "primary",
                                size: "large",
                                rounded: !0,
                                children: s || "PDF"
                            })
                        })]
                    })
                })
            })
        })
    }], 883027)
}, 691156, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        l = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        title: n,
        isExpanded: a = !1,
        blockKey: i
    }) => {
        let [s, o] = (0, r.useState)(a), c = () => {
            o(!s)
        }, d = (0, l.default)("accordion-content [&_p]:mb-4 [&_ul]:mb-4", {
            "transition ease-in-out opacity-100 h-auto w-5/6 pb-4 loco-text-body text-gray-800 dark:text-gray-100": s,
            "transition ease-in-out opacity-0 h-0 overflow-hidden": !s
        });
        return (0, t.jsxs)("div", {
            className: "border-b border-gray-200 dark:border-gray-800",
            children: [(0, t.jsx)("div", {
                onClick: c,
                onKeyDown: e => {
                    ("Enter" === e.key || " " === e.key) && c()
                },
                role: "button",
                tabIndex: 0,
                "aria-expanded": s,
                className: "cursor-pointer py-6",
                "data-link-location": `${i}-video-play`,
                "data-link-id": `${i}-accordion-toggle`,
                "data-link-type": "CTA",
                children: (0, t.jsxs)("div", {
                    className: "loco-text-body-lg-medium flex justify-between",
                    children: [(0, t.jsx)("h3", {
                        className: "w-11/12 text-gray-800 dark:text-gray-200",
                        children: n
                    }), (0, t.jsx)("span", {
                        className: "inline-block text-gray-700 dark:text-gray-300",
                        children: s ? "-" : "+"
                    })]
                })
            }), (0, t.jsx)("div", {
                className: d,
                "aria-hidden": !s,
                children: e
            })]
        })
    }], 691156)
}, 817916, e => {
    "use strict";
    var t = e.i(500783);
    let r = ({
        id: e,
        className: r
    }) => (0, t.jsx)("div", {
        id: e,
        "data-anchor-item": !0,
        className: r,
        style: {
            marginTop: "-120px",
            paddingTop: "120px"
        }
    });
    e.s(["default", 0, ({
        anchorID: e
    }) => (0, t.jsx)(r, {
        id: e ?? ""
    })], 817916)
}, 596889, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(722978);
    let l = ({
        children: e,
        className: l = "",
        variant: n = "default"
    }) => {
        let a = (0, r.clsx)({
            default: "bg-white dark:bg-gray-900 rounded-xl",
            padded: "p-6 bg-white dark:bg-gray-900 rounded-xl",
            transparent: ""
        } [n], l);
        return (0, t.jsx)("div", {
            className: a,
            children: e
        })
    };
    l.Content = ({
        children: e,
        className: r = "w-full"
    }) => (0, t.jsx)("div", {
        className: r,
        children: e
    }), l.Image = ({
        children: e,
        withinContainer: l
    }) => {
        let n = (0, r.clsx)("card-img relative w-full", {
            "[&>img]:!static !h-auto": l
        });
        return (0, t.jsx)("div", {
            className: n,
            children: e
        })
    }, e.s(["default", 0, l], 596889)
}, 893171, 447533, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        l = e.i(655105),
        n = e.i(722978),
        a = e.i(481392),
        i = e.i(828083),
        s = e.i(783078);
    let o = (0, i.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        c = ({
            containerRef: e,
            lqip: l
        }) => {
            let n = (0, r.useRef)(null),
                a = (0, r.useRef)(null),
                i = "pointer-events-none absolute inset-0 hidden h-full w-full opacity-80 blur-2xl lg:block [will-change:filter]";
            return ((0, r.useEffect)(() => {
                let t, r = n.current,
                    l = e.current;
                if (!r || !l) return;
                let i = r.getContext("2d");
                if (!i) return;
                let s = l.querySelector("video"),
                    o = () => {
                        s && l.contains(s) || (s = l.querySelector("video"));
                        let e = s,
                            r = a.current;
                        if (e) {
                            e.crossOrigin || (e.crossOrigin = "anonymous");
                            try {
                                i.drawImage(e, 0, 0, 32, 32), r && (r.style.transform = `scale(${1.01+1e-6*Math.random()})`)
                            } catch {}
                        }
                        t = requestAnimationFrame(o)
                    };
                return t = requestAnimationFrame(o), () => cancelAnimationFrame(t)
            }, [e, l]), l) ? (0, t.jsx)("div", {
                className: i,
                style: {
                    backgroundImage: `url(${l})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: "scale(1.05)"
                },
                "aria-hidden": "true"
            }) : (0, t.jsx)("div", {
                ref: a,
                className: i,
                "aria-hidden": "true",
                children: (0, t.jsx)("canvas", {
                    ref: n,
                    width: 32,
                    height: 32,
                    className: "h-full w-full"
                })
            })
        };
    var d = e.i(185462),
        u = e.i(224601);
    let f = ({
        children: e,
        className: r = "",
        size: a = "default",
        variant: i = "default",
        image: s,
        keyFigures: o
    }) => {
        let c = (0, n.clsx)("relative grid grid-cols-12", r, {
                dark: !!s
            }),
            u = (0, n.clsx)("relative col-span-12 mx-auto lg:container", {
                "lg:py-32 lg:pb-10": "gdc2026" !== i && "default" === a,
                "lg:py-16 lg:pb-5": "gdc2026" !== i && "slim" === a,
                "py-0 lg:py-20 max-w-[82rem]": "gdc2026" === i
            }),
            f = (0, n.clsx)({
                "flex flex-col lg:flex-row-reverse": "gdc2026" !== i,
                "grid grid-cols-12 gap-6": "gdc2026" === i
            });
        return (0, t.jsxs)("section", {
            className: c,
            children: [s && (0, t.jsx)(l.default, {
                src: s.src,
                alt: s.alt,
                fill: !0,
                className: "object-cover",
                quality: 100,
                sizes: "100vw"
            }), (0, t.jsxs)("div", {
                className: u,
                children: [(0, t.jsx)("div", {
                    className: f,
                    children: e
                }), o && o.length > 0 && (0, t.jsx)("div", {
                    className: "mx-6 lg:mx-0",
                    children: (0, t.jsx)(d.default, {
                        keyFigures: o,
                        nested: !0
                    })
                })]
            })]
        })
    };
    f.Actions = ({
        children: e,
        variant: r = "default"
    }) => (0, t.jsx)("div", {
        className: "gdc2026" === r ? "flex flex-col items-center lg:items-start gap-3 pb-3.5 lg:pb-16 lg:flex-row" : "flex flex-col items-start gap-3 pb-3.5 xl:flex-row",
        children: e
    }), f.AlternateActions = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
        children: e
    }), f.Body = ({
        children: e,
        variant: r = "default"
    }) => (0, t.jsx)("div", {
        className: "gdc2026" === r ? "loco-text-body-lg" : "loco-text-body-lg mb-6",
        children: e
    }), f.Content = ({
        children: e,
        variant: r = "default"
    }) => {
        let l = (0, n.default)({
            "flex-1 pt-10 pr-8": "gdc2026" !== r,
            "w-full col-span-12 lg:col-span-4 px-4 pb-6 gap-6 items-center lg:gap-9 lg:items-start lg:px-0 lg:pb-0 lg:pt-8 flex flex-col order-2 lg:order-1 text-center lg:text-left": "gdc2026" === r
        });
        return (0, t.jsx)("div", {
            className: l,
            style: "gdc2026" === r ? {
                gap: "2.3125rem"
            } : void 0,
            children: e
        })
    }, f.Overline = ({
        children: e,
        className: r
    }) => {
        let l = (0, n.default)("loco-caption-lg-semibold mb-3 text-gray-500 dark:text-gray-300", r);
        return (0, t.jsx)("div", {
            className: l,
            children: e
        })
    }, f.Title = ({
        children: e,
        variant: r = "default"
    }) => {
        let l = (0, n.default)("!font-nohemi text-black dark:text-white", {
            "loco-text-heading-md mb-6": "gdc2026" !== r,
            "loco-text-heading-4xl break-normal lg:[word-spacing:100vw]": "gdc2026" === r
        });
        return (0, t.jsx)("h1", {
            className: l,
            children: e
        })
    }, f.Pricing = ({
        data: e = [],
        onSelectionChange: l,
        selectedKey: n
    }) => {
        let i = (0, r.useMemo)(() => e.find(e => e.key === n), [e, n]);
        return (0, r.useEffect)(() => {
            let t = !n || !i,
                r = e?.[0]?.key;
            t && l && r && l(r)
        }, [e, n, l, i]), (0, t.jsx)(t.Fragment, {
            children: !!e.length && (0, t.jsx)("div", {
                className: "mb-6 flex",
                children: (0, t.jsxs)("div", {
                    children: [(0, t.jsxs)("div", {
                        className: "mb-2",
                        children: [(0, t.jsx)("span", {
                            className: "loco-text-heading-xs mr-1 font-semibold",
                            children: i?.price
                        }), (0, t.jsx)("span", {
                            className: "loco-text-body-sm",
                            children: i?.suffixPrice
                        })]
                    }), e.length > 1 && (0, t.jsx)(a.default, {
                        selectedKey: n,
                        onSelectionChange: l,
                        children: e.map(({
                            key: e,
                            label: r
                        }) => (0, t.jsx)(a.default.Item, {
                            children: r
                        }, e))
                    })]
                })
            })
        })
    }, f.Media = ({
        media: e,
        className: a = "",
        variant: i = "default"
    }) => {
        let {
            image: d,
            video: u
        } = e || {}, [f, m] = (0, r.useState)(!1), p = (0, r.useRef)(null), g = "gdc2026" === i ? "object-cover" : "object-contain", h = (0, n.default)("relative flex grow", {
            "m-4 h-full": "gdc2026" !== i,
            "w-full h-[22rem] lg:h-full lg:w-auto lg:m-4": "gdc2026" === i
        }, a), x = (0, n.default)("relative h-full w-full overflow-hidden", {
            "rounded-3xl": "gdc2026" !== i,
            "lg:rounded-3xl": "gdc2026" === i
        }), b = (0, n.default)("flex items-center", {
            "flex-1 justify-center lg:justify-start": "gdc2026" !== i,
            "w-full col-span-12 lg:col-span-8 justify-center order-1 lg:order-2": "gdc2026" === i
        }), y = (e, r) => d?.asset.url ? (0, t.jsx)(l.default, {
            src: d.asset.url,
            alt: e,
            fill: !0,
            className: (0, n.default)("absolute h-full", g, r),
            sizes: `(min-width: ${s.default.Large}px) 33vw, (min-width: ${s.default.Medium}px) 50vw, 100vw`,
            placeholder: d.asset.metadata?.lqip ? "blur" : "empty",
            blurDataURL: d.asset.metadata?.lqip || void 0
        }) : null;
        return (0, t.jsx)("div", {
            className: b,
            children: (d || u) && (0, t.jsxs)("div", {
                className: h,
                children: [(0, t.jsx)(c, {
                    containerRef: p,
                    lqip: f ? void 0 : d?.asset?.metadata?.lqip
                }), (0, t.jsxs)("div", {
                    ref: p,
                    className: x,
                    children: [d?.asset.url && !u && y("Hero image", void 0), u && d?.asset.url && !f && y("Video thumbnail", "z-10"), u && (0, t.jsx)("div", {
                        className: "h-full w-full self-center",
                        children: (0, t.jsx)(o, {
                            url: u?.muxHLSURL || "",
                            playing: !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: (0, n.default)("absolute top-0 h-full", {
                                "[&>video]:object-cover": "gdc2026" === i,
                                "[&>video]:object-contain": "gdc2026" !== i
                            }),
                            onReady: () => m(!0),
                            onBuffer: () => m(!1),
                            onBufferEnd: () => m(!0)
                        })
                    })]
                })]
            })
        })
    }, f.YouTubeVideo = ({
        className: e,
        title: r,
        url: l,
        autoplay: a,
        blockedMessage: i,
        consentButtonLabel: s
    }) => {
        let o = (0, n.default)("relative flex grow md:h-auto md:content-center md:mx-8 md:rounded-3xl md:overflow-hidden", e);
        return l && r ? (0, t.jsx)("div", {
            className: "flex flex-1",
            children: (0, t.jsx)("div", {
                className: o,
                children: (0, t.jsx)(u.default, {
                    autoplay: a,
                    title: r,
                    url: l,
                    blockedMessage: i,
                    consentButtonLabel: s
                })
            })
        }) : null
    }, e.s(["default", 0, f], 447533);
    var m = e.i(749583),
        p = e.i(278466),
        g = e.i(115219);
    let h = ({
        linkText: e,
        separatorText: r,
        actionLinks: l
    }) => {
        let n = window.navigator.userAgent,
            a = null;
        if (-1 !== n.indexOf("Win") ? a = "windows" : -1 !== n.indexOf("Mac") ? a = "mac" : -1 !== n.indexOf("Linux") && (a = "linux"), !a) return null;
        let i = [];
        if (l && l.length > 0)
            for (let e of l) e.os.toLowerCase() !== a.toLowerCase() && i.push({
                label: e.os,
                url: e.href
            });
        return l ? (0, t.jsxs)("div", {
            className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
            children: [e, " ", i.map((e, l) => (0, t.jsxs)("span", {
                children: [l > 0 ? (0, t.jsxs)("span", {
                    className: "text-gray-600",
                    children: [" ", r, " "]
                }) : "", (0, t.jsx)("a", {
                    href: e.url,
                    className: "text-blue underline",
                    children: e.label
                })]
            }, e.label))]
        }) : null
    };
    var x = e.i(433519),
        b = e.i(829150),
        y = e.i(434438),
        v = e.i(200241);
    e.s(["default", 0, ({
        eyebrow: e,
        title: l,
        description: n,
        actions: a = [],
        media: i,
        backgroundImage: s,
        size: o,
        variant: c,
        keyFigures: d,
        theme: u,
        youtubeVideo: k,
        isHidden: j,
        showAlterativeOSLinks: w,
        alternativeOSLinkSettings: N
    }) => {
        let C, L = -1 !== (C = window.navigator.userAgent).indexOf("Win") ? "Windows" : -1 !== C.indexOf("Mac") ? "Mac" : -1 !== C.indexOf("Linux") ? "Linux" : "Unknown",
            T = (0, r.useRef)(null),
            {
                state: $
            } = (0, x.default)(),
            H = (0, v.useLocale)(),
            M = {
                ...$,
                locale: (0, y.default)(H)
            },
            {
                mapFormActions: O
            } = (0, g.useFormModal)(a),
            S = (0, r.useMemo)(() => O(a) || [], [a, O]),
            A = s?.asset?.url ? {
                src: s.asset.url,
                alt: "Hero background image"
            } : void 0,
            B = (0, r.useMemo)(() => (d?.data ?? []).map(e => e?.value?.text ? {
                value: {
                    type: "text",
                    text: e.value.text
                },
                label: e.label
            } : {
                value: {
                    type: "icon",
                    url: e?.value?.icon?.file?.cdnURL || "",
                    description: e?.value?.icon?.caption || ""
                },
                label: e.label
            }), [d]);
        (0, r.useEffect)(() => {
            if (!T.current) {
                let e = document.createElement("a");
                e.style.display = "none", document.body.appendChild(e), T.current = e
            }
            return () => {
                T.current && document.body.contains(T.current) && document.body.removeChild(T.current)
            }
        }, []);
        let E = c ?? void 0,
            I = (e, l, n) => {
                let a = l?.form;
                if (!a) return null;
                let i = {
                    ...a.form,
                    ...a.webinarFormParametersContent,
                    extraFields: a.extraFields
                };
                return (0, t.jsx)(r.default.Fragment, {
                    children: a.renderModal({
                        label: e.title,
                        form: i
                    })
                }, `hero-action-form-${e.title}-${n}`)
            },
            R = e => {
                let t = e.link?.linkReference?.href?.current,
                    r = t ? (0, b.default)(t, M, e.extendLink) : t,
                    l = e.secondaryLink?.linkReference?.href?.current,
                    n = e.link?.linkReference?.target || "_self",
                    a = p.locales.find(e => window.location.pathname === `/${e}` || window.location.pathname.startsWith(`/${e}/`)) ?? "en";
                r && (r.endsWith(".exe") || r.endsWith(".dmg") ? T.current && (T.current.href = r, T.current.download = "", T.current.target = n, T.current.click()) : "_blank" === n ? window.open(r, "_blank") : window.location.href = r), l && setTimeout(() => {
                    let e = l.replace(/^\//, "");
                    window.location.href = `/${a}/${e}`
                }, 1e3), e?.callback && e.callback()
            },
            P = a?.filter(e => !e.operatingSystem || e.operatingSystem === L) || [],
            _ = a?.filter(e => !!e.operatingSystem && "Unknown" !== e.operatingSystem) || [];
        return (0, t.jsx)(t.Fragment, {
            children: !j && (0, t.jsx)("section", {
                className: "dark" === u ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "dark:bg-black",
                    children: (0, t.jsxs)(f, {
                        image: A,
                        size: "slim" === o ? "slim" : "default" === o ? "default" : void 0,
                        variant: E,
                        keyFigures: B,
                        children: [i && (0, t.jsx)(f.Media, {
                            media: i,
                            variant: E
                        }), !i && k && (0, t.jsx)(f.YouTubeVideo, {
                            autoplay: !0,
                            url: k?.url,
                            title: k?.title,
                            blockedMessage: k?.consent?.blockedMessage,
                            consentButtonLabel: k?.consent?.consentButtonLabel || ""
                        }), (0, t.jsxs)(f.Content, {
                            variant: E,
                            children: [(0, t.jsx)(f.Overline, {
                                children: e
                            }), (0, t.jsx)(f.Title, {
                                variant: E,
                                children: l
                            }), (0, t.jsx)(f.Body, {
                                variant: E,
                                children: n
                            }), (0, t.jsx)("div", {
                                className: "xl:hidden",
                                children: (0, t.jsx)(f.Actions, {
                                    variant: E,
                                    children: P.map((e, l) => {
                                        let n = S[l],
                                            a = e.link?.linkReference?.href?.current || "",
                                            i = (0, b.default)(a, M, e.extendLink),
                                            s = 0 === l,
                                            o = a.endsWith(".exe") || a.endsWith(".dmg"),
                                            c = !!e.secondaryLink?.linkReference?.href?.current,
                                            d = i && !o && !c;
                                        return n?.form ? I(e, n, l) : (0, t.jsxs)(r.default.Fragment, {
                                            children: [s && (0, t.jsx)(m.default, {
                                                size: "medium",
                                                variant: e.buttonType,
                                                rounded: !0,
                                                ...d && {
                                                    href: i
                                                },
                                                onPress: () => R(e),
                                                hasArrow: !0,
                                                "data-link-location": "HeroBlock",
                                                "data-link-id": `HeroBlock-action-${l}`,
                                                children: e.title
                                            }), s && w && (0, t.jsx)(h, {
                                                linkText: N?.linkText ?? "Download for",
                                                separatorText: N?.separatorText ?? "or",
                                                actionLinks: _.map(e => ({
                                                    os: e.operatingSystem,
                                                    href: e.link?.linkReference?.href?.current || "#"
                                                }))
                                            }), !s && (0, t.jsx)("div", {
                                                className: "ml-1 flex flex-col gap-4",
                                                children: (0, t.jsx)(m.default, {
                                                    size: "medium",
                                                    variant: e.buttonType,
                                                    rounded: !0,
                                                    ...d && {
                                                        href: i
                                                    },
                                                    onPress: () => R(e),
                                                    hasArrow: !0,
                                                    "data-link-location": "HeroBlock",
                                                    "data-link-id": `HeroBlock-action-${l}`,
                                                    children: e.title
                                                })
                                            })]
                                        }, e.link?.linkReference?.title || l)
                                    })
                                })
                            }), (0, t.jsxs)("div", {
                                className: "hidden xl:block",
                                children: [(0, t.jsx)(f.Actions, {
                                    variant: E,
                                    children: P.map((e, r) => {
                                        let l = S[r],
                                            n = e.link?.linkReference?.href?.current || "",
                                            a = (0, b.default)(n, M, e.extendLink),
                                            i = n.endsWith(".exe") || n.endsWith(".dmg"),
                                            s = !!e.secondaryLink?.linkReference?.href?.current,
                                            o = a && !i && !s;
                                        return l?.form ? I(e, l, r) : (0, t.jsx)(m.default, {
                                            size: "medium",
                                            variant: e.buttonType,
                                            rounded: !0,
                                            ...o && {
                                                href: a
                                            },
                                            onPress: () => R(e),
                                            hasArrow: !0,
                                            "data-link-location": "HeroBlock",
                                            "data-link-id": `HeroBlock-action-${r}`,
                                            children: e.title
                                        }, e.link?.linkReference?.title || r)
                                    })
                                }), w && P[0] && (0, t.jsx)(h, {
                                    linkText: N?.linkText ?? "Download for",
                                    separatorText: N?.separatorText ?? "or",
                                    actionLinks: _.map(e => ({
                                        os: e.operatingSystem,
                                        href: e.link?.linkReference?.href?.current || "#"
                                    }))
                                })]
                            })]
                        })]
                    })
                })
            })
        })
    }], 893171)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "03b89b96-c60b-50e6-8375-0ead9459f889")
    } catch (e) {}
}();
//# debugId=03b89b96-c60b-50e6-8375-0ead9459f889