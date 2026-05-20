(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 394225, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(722978);
    e.s(["default", 0, ({
        className: e,
        children: n,
        size: l = "medium",
        ...a
    }) => {
        let o = (0, r.default)("bg-gray-100 text-gray-600 text-tiny-bold dark:bg-gray-900 dark:text-gray-200 rounded-md", {
            small: "px-2 py-1",
            medium: "p-2"
        } [l], e);
        return (0, t.jsx)("span", {
            className: o,
            ...a,
            children: n
        })
    }], 394225)
}, 229696, e => {
    "use strict";
    var t, r, n = e.i(3931);

    function l() {
        return (l = Object.assign.bind()).apply(this, arguments)
    }
    let a = ["children", "options"],
        o = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), {
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
        i = ["style", "script"],
        c = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
        u = /mailto:/i,
        d = /\n{2,}$/,
        p = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
        f = /^ *> ?/gm,
        m = /^ {2,}\n/,
        g = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
        h = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
        b = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        x = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        y = /^(?:\n *)*\n/,
        v = /\r\n?/g,
        k = /^\[\^([^\]]+)](:.*)\n/,
        w = /^\[\^([^\]]+)]/,
        j = /\f/g,
        C = /^\s*?\[(x|\s)\]/,
        N = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        T = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        E = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
        L = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
        I = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        $ = /^<!--[\s\S]*?(?:-->)/,
        H = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        O = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        S = /^\{.*\}$/,
        M = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        B = /^<([^ >]+@[^ >]+)>/,
        A = /^<([^ >]+:\/[^ >]+)>/,
        P = /-([a-z])?/gi,
        _ = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
        D = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        F = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        R = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        G = /(\[|\])/g,
        W = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
        z = /\t/g,
        X = /^ *\| */,
        U = /(^ *\||\| *$)/g,
        V = / *$/,
        Z = /^ *:-+: *$/,
        q = /^ *:-+ *$/,
        K = /^ *-+: *$/,
        Y = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
        Q = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
        J = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
        ee = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
        et = /^\\([^0-9A-Za-z\s])/,
        er = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
        en = /^\n+/,
        el = /^([ \t]*)/,
        ea = /\\([^\\])/g,
        eo = / *\n+$/,
        es = /(?:^|\n)( *)$/,
        ei = "(?:\\d+\\.)",
        ec = "(?:[*+-])";

    function eu(e) {
        return "( *)(" + (1 === e ? ei : ec) + ") +"
    }
    let ed = eu(1),
        ep = eu(2);

    function ef(e) {
        return RegExp("^" + (1 === e ? ed : ep))
    }
    let em = ef(1),
        eg = ef(2);

    function eh(e) {
        return RegExp("^" + (1 === e ? ed : ep) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? ei : ec) + " )[^\\n]*)*(\\n|$)", "gm")
    }
    let eb = eh(1),
        ex = eh(2);

    function ey(e) {
        let t = 1 === e ? ei : ec;
        return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)")
    }
    let ev = ey(1),
        ek = ey(2);

    function ew(e, t) {
        let n = 1 === t,
            l = n ? ev : ek,
            a = n ? eb : ex,
            o = n ? em : eg;
        return {
            t(e, t, r) {
                let n = es.exec(r);
                return n && (t.o || !t._ && !t.u) ? l.exec(e = n[1] + e) : null
            },
            i: r.HIGH,
            l(e, t, r) {
                let l = n ? +e[2] : void 0,
                    s = e[0].replace(d, "\n").match(a),
                    i = !1;
                return {
                    p: s.map(function(e, n) {
                        let l, a = RegExp("^ {1," + o.exec(e)[0].length + "}", "gm"),
                            c = e.replace(a, "").replace(o, ""),
                            u = n === s.length - 1,
                            d = -1 !== c.indexOf("\n\n") || u && i;
                        i = d;
                        let p = r._,
                            f = r.o;
                        r.o = !0, d ? (r._ = !1, l = c.replace(eo, "\n\n")) : (r._ = !0, l = c.replace(eo, ""));
                        let m = t(l, r);
                        return r._ = p, r.o = f, m
                    }),
                    m: n,
                    g: l
                }
            },
            h: (t, r, n) => e(t.m ? "ol" : "ul", {
                key: n.k,
                start: t.g
            }, t.p.map(function(t, l) {
                return e("li", {
                    key: l
                }, r(t, n))
            }))
        }
    }
    let ej = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eC = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eN = [p, h, b, N, E, T, $, _, eb, ev, ex, ek],
        eT = [...eN, /^[^\n]+(?:  \n|\n{2,})/, L, O];

    function eE(e) {
        return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
    }

    function eL(e) {
        return K.test(e) ? "right" : Z.test(e) ? "center" : q.test(e) ? "left" : null
    }

    function eI(e, t, r) {
        let n = r.$;
        r.$ = !0;
        let l = t(e.trim(), r);
        r.$ = n;
        let a = [
            []
        ];
        return l.forEach(function(e, t) {
            "tableSeparator" === e.type ? 0 !== t && t !== l.length - 1 && a.push([]) : ("text" !== e.type || null != l[t + 1] && "tableSeparator" !== l[t + 1].type || (e.v = e.v.replace(V, "")), a[a.length - 1].push(e))
        }), a
    }

    function e$(e, t, r) {
        var n;
        r._ = !0;
        let l = eI(e[1], t, r),
            a = e[2].replace(U, "").split("|").map(eL),
            o = (n = e[3], n.trim().split("\n").map(function(e) {
                return eI(e, t, r)
            }));
        return r._ = !1, {
            S: a,
            A: o,
            L: l,
            type: "table"
        }
    }

    function eH(e, t) {
        return null == e.S[t] ? {} : {
            textAlign: e.S[t]
        }
    }

    function eO(e) {
        return function(t, r) {
            return r._ ? e.exec(t) : null
        }
    }

    function eS(e) {
        return function(t, r) {
            return r._ || r.u ? e.exec(t) : null
        }
    }

    function eM(e) {
        return function(t, r) {
            return r._ || r.u ? null : e.exec(t)
        }
    }

    function eB(e) {
        return function(t) {
            return e.exec(t)
        }
    }

    function eA(e, t, r) {
        if (t._ || t.u || r && !r.endsWith("\n")) return null;
        let n = "";
        e.split("\n").every(e => !eN.some(t => t.test(e)) && (n += e + "\n", e.trim()));
        let l = n.trimEnd();
        return "" == l ? null : [n, l]
    }

    function eP(e) {
        try {
            if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return
        } catch (e) {
            return null
        }
        return e
    }

    function e_(e) {
        return e.replace(ea, "$1")
    }

    function eD(e, t, r) {
        let n = r._ || !1,
            l = r.u || !1;
        r._ = !0, r.u = !0;
        let a = e(t, r);
        return r._ = n, r.u = l, a
    }

    function eF(e, t, r) {
        return r._ = !1, e(t, r)
    }
    let eR = (e, t, r) => ({
        v: eD(t, e[1], r)
    });

    function eG() {
        return {}
    }

    function eW() {
        return null
    }

    function ez(e, t, r) {
        let n = e,
            l = t.split(".");
        for (; l.length && void 0 !== (n = n[l[0]]);) l.shift();
        return n || r
    }(t = r || (r = {}))[t.MAX = 0] = "MAX", t[t.HIGH = 1] = "HIGH", t[t.MED = 2] = "MED", t[t.LOW = 3] = "LOW", t[t.MIN = 4] = "MIN", e.s(["default", 0, e => {
        let {
            children: t,
            options: d
        } = e, U = function(e, t) {
            if (null == e) return {};
            var r, n, l = {},
                a = Object.keys(e);
            for (n = 0; n < a.length; n++) t.indexOf(r = a[n]) >= 0 || (l[r] = e[r]);
            return l
        }(e, a);
        return n.cloneElement(function(e, t = {}) {
            var a;
            let d;
            t.overrides = t.overrides || {}, t.slugify = t.slugify || eE, t.namedCodesToUnicode = t.namedCodesToUnicode ? l({}, s, t.namedCodesToUnicode) : s;
            let U = t.createElement || n.createElement;

            function V(e, r, ...n) {
                var a;
                let o, s = ez(t.overrides, `${e}.props`, {});
                return U((o = ez(a = t.overrides, e)) ? "function" == typeof o || "object" == typeof o && "render" in o ? o : ez(a, `${e}.component`, e) : e, l({}, r, s, {
                    className: function(...e) {
                        return e.filter(Boolean).join(" ")
                    }(null == r ? void 0 : r.className, s.className) || void 0
                }), ...n)
            }

            function Z(e) {
                let r, l = !1;
                t.forceInline ? l = !0 : t.forceBlock || (l = !1 === W.test(e));
                let a = ei(es(l ? e : `${e.trimEnd().replace(en,"")}

`, {
                    _: l
                }));
                for (;
                    "string" == typeof a[a.length - 1] && !a[a.length - 1].trim();) a.pop();
                if (null === t.wrapper) return a;
                let o = t.wrapper || (l ? "span" : "div");
                if (a.length > 1 || t.forceWrapper) r = a;
                else {
                    if (1 === a.length) return "string" == typeof(r = a[0]) ? V("span", {
                        key: "outer"
                    }, r) : r;
                    r = null
                }
                return n.createElement(o, {
                    key: "outer"
                }, r)
            }

            function q(e) {
                let t = e.match(c);
                return t ? t.reduce(function(e, t, r) {
                    let l = t.indexOf("=");
                    if (-1 !== l) {
                        var a, s, i;
                        let c, u = (-1 !== (a = t.slice(0, l)).indexOf("-") && null === a.match(H) && (a = a.replace(P, function(e, t) {
                                return t.toUpperCase()
                            })), a).trim(),
                            d = ('"' === (c = (s = t.slice(l + 1).trim())[0]) || "'" === c) && s.length >= 2 && s[s.length - 1] === c ? s.slice(1, -1) : s,
                            p = o[u] || u,
                            f = e[p] = (i = d, "style" === u ? i.split(/;\s?/).reduce(function(e, t) {
                                let r = t.slice(0, t.indexOf(":"));
                                return e[r.replace(/(-[a-z])/g, e => e[1].toUpperCase())] = t.slice(r.length + 1).trim(), e
                            }, {}) : "href" === u ? eP(i) : (i.match(S) && (i = i.slice(1, i.length - 1)), "true" === i || "false" !== i && i));
                        "string" == typeof f && (L.test(f) || O.test(f)) && (e[p] = n.cloneElement(Z(f.trim()), {
                            key: r
                        }))
                    } else "style" !== t && (e[o[t] || t] = !0);
                    return e
                }, {}) : null
            }
            let K = [],
                ea = {},
                eo = {
                    blockQuote: {
                        t: eM(p),
                        i: r.HIGH,
                        l: (e, t, r) => ({
                            v: t(e[0].replace(f, ""), r)
                        }),
                        h: (e, t, r) => V("blockquote", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    breakLine: {
                        t: eB(m),
                        i: r.HIGH,
                        l: eG,
                        h: (e, t, r) => V("br", {
                            key: r.k
                        })
                    },
                    breakThematic: {
                        t: eM(g),
                        i: r.HIGH,
                        l: eG,
                        h: (e, t, r) => V("hr", {
                            key: r.k
                        })
                    },
                    codeBlock: {
                        t: eM(b),
                        i: r.MAX,
                        l: e => ({
                            v: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
                            M: void 0
                        }),
                        h: (e, t, r) => V("pre", {
                            key: r.k
                        }, V("code", l({}, e.O, {
                            className: e.M ? `lang-${e.M}` : ""
                        }), e.v))
                    },
                    codeFenced: {
                        t: eM(h),
                        i: r.MAX,
                        l: e => ({
                            O: q(e[3] || ""),
                            v: e[4],
                            M: e[2] || void 0,
                            type: "codeBlock"
                        })
                    },
                    codeInline: {
                        t: eS(x),
                        i: r.LOW,
                        l: e => ({
                            v: e[2]
                        }),
                        h: (e, t, r) => V("code", {
                            key: r.k
                        }, e.v)
                    },
                    footnote: {
                        t: eM(k),
                        i: r.MAX,
                        l: e => (K.push({
                            I: e[2],
                            j: e[1]
                        }), {}),
                        h: eW
                    },
                    footnoteReference: {
                        t: eO(w),
                        i: r.HIGH,
                        l: e => ({
                            v: e[1],
                            B: `#${t.slugify(e[1])}`
                        }),
                        h: (e, t, r) => V("a", {
                            key: r.k,
                            href: eP(e.B)
                        }, V("sup", {
                            key: r.k
                        }, e.v))
                    },
                    gfmTask: {
                        t: eO(C),
                        i: r.HIGH,
                        l: e => ({
                            R: "x" === e[1].toLowerCase()
                        }),
                        h: (e, t, r) => V("input", {
                            checked: e.R,
                            key: r.k,
                            readOnly: !0,
                            type: "checkbox"
                        })
                    },
                    heading: {
                        t: eM(t.enforceAtxHeadings ? T : N),
                        i: r.HIGH,
                        l: (e, r, n) => ({
                            v: eD(r, e[2], n),
                            T: t.slugify(e[2]),
                            C: e[1].length
                        }),
                        h: (e, t, r) => V(`h${e.C}`, {
                            id: e.T,
                            key: r.k
                        }, t(e.v, r))
                    },
                    headingSetext: {
                        t: eM(E),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: eD(t, e[1], r),
                            C: "=" === e[2] ? 1 : 2,
                            type: "heading"
                        })
                    },
                    htmlComment: {
                        t: eB($),
                        i: r.HIGH,
                        l: () => ({}),
                        h: eW
                    },
                    image: {
                        t: eS(eC),
                        i: r.HIGH,
                        l: e => ({
                            D: e[1],
                            B: e_(e[2]),
                            F: e[3]
                        }),
                        h: (e, t, r) => V("img", {
                            key: r.k,
                            alt: e.D || void 0,
                            title: e.F || void 0,
                            src: eP(e.B)
                        })
                    },
                    link: {
                        t: eO(ej),
                        i: r.LOW,
                        l: (e, t, r) => {
                            var n;
                            let l, a, o;
                            return {
                                v: (n = e[1], l = r._ || !1, a = r.u || !1, r._ = !1, r.u = !0, o = t(n, r), r._ = l, r.u = a, o),
                                B: e_(e[2]),
                                F: e[3]
                            }
                        },
                        h: (e, t, r) => V("a", {
                            key: r.k,
                            href: eP(e.B),
                            title: e.F
                        }, t(e.v, r))
                    },
                    linkAngleBraceStyleDetector: {
                        t: eO(A),
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
                        t: (e, t) => t.N ? null : eO(M)(e, t),
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
                        t: eO(B),
                        i: r.MAX,
                        l(e) {
                            let t = e[1],
                                r = e[1];
                            return u.test(r) || (r = "mailto:" + r), {
                                v: [{
                                    v: t.replace("mailto:", ""),
                                    type: "text"
                                }],
                                B: r,
                                type: "link"
                            }
                        }
                    },
                    orderedList: ew(V, 1),
                    unorderedList: ew(V, 2),
                    newlineCoalescer: {
                        t: eM(y),
                        i: r.LOW,
                        l: eG,
                        h: () => "\n"
                    },
                    paragraph: {
                        t: eA,
                        i: r.LOW,
                        l: eR,
                        h: (e, t, r) => V("p", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    ref: {
                        t: eO(D),
                        i: r.MAX,
                        l: e => (ea[e[1]] = {
                            B: e[2],
                            F: e[4]
                        }, {}),
                        h: eW
                    },
                    refImage: {
                        t: eS(F),
                        i: r.MAX,
                        l: e => ({
                            D: e[1] || void 0,
                            P: e[2]
                        }),
                        h: (e, t, r) => V("img", {
                            key: r.k,
                            alt: e.D,
                            src: eP(ea[e.P].B),
                            title: ea[e.P].F
                        })
                    },
                    refLink: {
                        t: eO(R),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: t(e[1], r),
                            Z: t(e[0].replace(G, "\\$1"), r),
                            P: e[2]
                        }),
                        h: (e, t, r) => ea[e.P] ? V("a", {
                            key: r.k,
                            href: eP(ea[e.P].B),
                            title: ea[e.P].F
                        }, t(e.v, r)) : V("span", {
                            key: r.k
                        }, t(e.Z, r))
                    },
                    table: {
                        t: eM(_),
                        i: r.HIGH,
                        l: e$,
                        h: (e, t, r) => V("table", {
                            key: r.k
                        }, V("thead", null, V("tr", null, e.L.map(function(n, l) {
                            return V("th", {
                                key: l,
                                style: eH(e, l)
                            }, t(n, r))
                        }))), V("tbody", null, e.A.map(function(n, l) {
                            return V("tr", {
                                key: l
                            }, n.map(function(n, l) {
                                return V("td", {
                                    key: l,
                                    style: eH(e, l)
                                }, t(n, r))
                            }))
                        })))
                    },
                    tableSeparator: {
                        t: function(e, t) {
                            return t.$ ? (t._ = !0, X.exec(e)) : null
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
                        t: eB(er),
                        i: r.MIN,
                        l: e => ({
                            v: e[0].replace(I, (e, r) => t.namedCodesToUnicode[r] ? t.namedCodesToUnicode[r] : e)
                        }),
                        h: e => e.v
                    },
                    textBolded: {
                        t: eS(Y),
                        i: r.MED,
                        l: (e, t, r) => ({
                            v: t(e[2], r)
                        }),
                        h: (e, t, r) => V("strong", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textEmphasized: {
                        t: eS(Q),
                        i: r.LOW,
                        l: (e, t, r) => ({
                            v: t(e[2], r)
                        }),
                        h: (e, t, r) => V("em", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textEscaped: {
                        t: eS(et),
                        i: r.HIGH,
                        l: e => ({
                            v: e[1],
                            type: "text"
                        })
                    },
                    textMarked: {
                        t: eS(J),
                        i: r.LOW,
                        l: eR,
                        h: (e, t, r) => V("mark", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textStrikethroughed: {
                        t: eS(ee),
                        i: r.LOW,
                        l: eR,
                        h: (e, t, r) => V("del", {
                            key: r.k
                        }, t(e.v, r))
                    }
                };
            !0 !== t.disableParsingRawHTML && (eo.htmlBlock = {
                t: eB(L),
                i: r.HIGH,
                l(e, t, r) {
                    let [, n] = e[3].match(el), l = RegExp(`^${n}`, "gm"), a = e[3].replace(l, ""), o = eT.some(e => e.test(a)) ? eF : eD, s = e[1].toLowerCase(), c = -1 !== i.indexOf(s);
                    r.N = r.N || "a" === s;
                    let u = c ? e[3] : o(t, a, r);
                    return r.N = !1, {
                        O: q(e[2]),
                        v: u,
                        G: c,
                        H: c ? s : e[1]
                    }
                },
                h: (e, t, r) => V(e.H, l({
                    key: r.k
                }, e.O), e.G ? e.v : t(e.v, r))
            }, eo.htmlSelfClosing = {
                t: eB(O),
                i: r.HIGH,
                l: e => ({
                    O: q(e[2] || ""),
                    H: e[1]
                }),
                h: (e, t, r) => V(e.H, l({}, e.O, {
                    key: r.k
                }))
            });
            let es = ((d = Object.keys(eo)).sort(function(e, t) {
                    let r = eo[e].i,
                        n = eo[t].i;
                    return r !== n ? r - n : e < t ? -1 : 1
                }), function(e, t) {
                    return function e(t, r) {
                        let n = [],
                            l = "";
                        for (; t;) {
                            let a = 0;
                            for (; a < d.length;) {
                                let o = d[a],
                                    s = eo[o],
                                    i = s.t(t, r, l);
                                if (i) {
                                    let a = i[0];
                                    t = t.substring(a.length);
                                    let c = s.l(i, e, r);
                                    null == c.type && (c.type = o), n.push(c), l = a;
                                    break
                                }
                                a++
                            }
                        }
                        return n
                    }(e.replace(v, "\n").replace(j, "").replace(z, "    "), t)
                }),
                ei = (a = function(e, t, r) {
                    return eo[e.type].h(e, t, r)
                }, function e(t, r = {}) {
                    if (Array.isArray(t)) {
                        let n = r.k,
                            l = [],
                            a = !1;
                        for (let n = 0; n < t.length; n++) {
                            r.k = n;
                            let o = e(t[n], r),
                                s = "string" == typeof o;
                            s && a ? l[l.length - 1] += o : null !== o && l.push(o), a = s
                        }
                        return r.k = n, l
                    }
                    return a(t, e, r)
                }),
                ec = Z(e);
            return K.length ? V("div", null, ec, V("footer", {
                key: "footer"
            }, K.map(function(e) {
                return V("div", {
                    id: t.slugify(e.j),
                    key: e.j
                }, e.j, ei(es(e.I, {
                    _: !0
                })))
            }))) : ec
        }(t, d), U)
    }])
}, 452152, e => {
    "use strict";
    var t = e.i(3931),
        r = e.i(459236);
    let n = {},
        l = 0,
        a = !1,
        o = null,
        s = null;
    e.s(["useTooltipTriggerState", 0, function(e = {}) {
        let {
            delay: i = 1500,
            closeDelay: c = 500
        } = e, {
            isOpen: u,
            open: d,
            close: p
        } = (0, r.useOverlayTriggerState)(e), f = (0, t.useMemo)(() => `${++l}`, []), m = (0, t.useRef)(null), g = (0, t.useRef)(p), h = () => {
            n[f] = y
        }, b = () => {
            for (let e in n) e !== f && (n[e](!0), delete n[e])
        }, x = () => {
            m.current && clearTimeout(m.current), m.current = null, b(), h(), a = !0, d(), o && (clearTimeout(o), o = null), s && (clearTimeout(s), s = null)
        }, y = e => {
            e || c <= 0 ? (m.current && clearTimeout(m.current), m.current = null, g.current()) : m.current || (m.current = setTimeout(() => {
                m.current = null, g.current()
            }, c)), o && (clearTimeout(o), o = null), a && (s && clearTimeout(s), s = setTimeout(() => {
                delete n[f], s = null, a = !1
            }, Math.max(500, c)))
        };
        return (0, t.useEffect)(() => {
            g.current = p
        }, [p]), (0, t.useEffect)(() => () => {
            m.current && clearTimeout(m.current), n[f] && delete n[f]
        }, [f]), {
            isOpen: u,
            open: e => {
                e || !(i > 0) || m.current ? x() : (b(), h(), u || o || a ? u || x() : o = setTimeout(() => {
                    o = null, a = !0, x()
                }, i))
            },
            close: y
        }
    }])
}, 929655, e => {
    "use strict";
    var t = e.i(339206),
        r = e.i(604082),
        n = e.i(897884);
    e.s(["useTooltip", 0, function(e, l) {
        let a = (0, t.filterDOMProps)(e, {
                labelable: !0
            }),
            {
                hoverProps: o
            } = (0, n.useHover)({
                onHoverStart: () => null == l ? void 0 : l.open(!0),
                onHoverEnd: () => null == l ? void 0 : l.close()
            });
        return {
            tooltipProps: (0, r.mergeProps)(a, o, {
                role: "tooltip"
            })
        }
    }])
}, 539110, e => {
    "use strict";
    var t = e.i(427651),
        r = e.i(897884),
        n = e.i(7180),
        l = e.i(231781),
        a = e.i(604082),
        o = e.i(3931);
    e.s(["useTooltipTrigger", 0, function(e, s, i) {
        let {
            isDisabled: c,
            trigger: u
        } = e, d = (0, l.useId)(), p = (0, o.useRef)(!1), f = (0, o.useRef)(!1), m = () => {
            (p.current || f.current) && s.open(f.current)
        }, g = e => {
            p.current || f.current || s.close(e)
        };
        (0, o.useEffect)(() => {
            let e = e => {
                i && i.current && "Escape" === e.key && (e.stopPropagation(), s.close(!0))
            };
            if (s.isOpen) return document.addEventListener("keydown", e, !0), () => {
                document.removeEventListener("keydown", e, !0)
            }
        }, [i, s]);
        let h = () => {
                f.current = !1, p.current = !1, g(!0)
            },
            {
                hoverProps: b
            } = (0, r.useHover)({
                isDisabled: c,
                onHoverStart: () => {
                    "focus" !== u && ("pointer" === (0, t.getInteractionModality)() ? p.current = !0 : p.current = !1, m())
                },
                onHoverEnd: () => {
                    "focus" !== u && (f.current = !1, p.current = !1, g())
                }
            }),
            {
                focusableProps: x
            } = (0, n.useFocusable)({
                isDisabled: c,
                onFocus: () => {
                    (0, t.isFocusVisible)() && (f.current = !0, m())
                },
                onBlur: () => {
                    f.current = !1, p.current = !1, g(!0)
                }
            }, i);
        return {
            triggerProps: {
                "aria-describedby": s.isOpen ? d : void 0,
                ...(0, a.mergeProps)(x, b, {
                    onPointerDown: h,
                    onKeyDown: h,
                    tabIndex: void 0
                })
            },
            tooltipProps: {
                id: d
            }
        }
    }])
}, 652955, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        n = e.i(452152),
        l = e.i(929655),
        a = e.i(539110),
        o = e.i(604082),
        s = e.i(722978);
    let i = ({
        state: e,
        content: r,
        hasArrow: n,
        placement: a,
        ...i
    }) => {
        let {
            tooltipProps: c
        } = (0, l.useTooltip)(i, e);
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
            })(a), n && (e => {
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
            ...(0, o.mergeProps)(i, c),
            children: r
        })
    };
    e.s(["default", 0, ({
        content: e,
        placement: l = "bottom",
        hasArrow: o = !0,
        tooltipOptions: s = {
            delay: 300,
            closeDelay: 0,
            isDisabled: !1
        },
        children: c
    }) => {
        let u = (0, n.useTooltipTriggerState)(s),
            d = (0, r.useRef)(null),
            {
                triggerProps: p,
                tooltipProps: f
            } = (0, a.useTooltipTrigger)(s, u, d);
        return (0, t.jsxs)("span", {
            className: "relative",
            children: [(0, t.jsx)("span", {
                ref: d,
                ...p,
                children: c
            }), u.isOpen && (0, t.jsx)(i, {
                state: u,
                content: e,
                placement: l,
                hasArrow: o,
                ...f
            })]
        })
    }], 652955)
}, 210310, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        n = e.i(749583),
        l = e.i(394225),
        a = e.i(652955),
        o = e.i(229696),
        s = e.i(722978),
        i = e.i(805518),
        c = e.i(363737);
    let u = ({
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
        d = ({
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
        p = ({
            children: e,
            colTitle: l,
            truncationEnabled: a,
            rowTitle: o,
            className: p = "",
            isTableCell: f
        }) => {
            let [m, g] = (0, r.useState)(!1), [h, b] = (0, r.useState)(!1), x = (0, r.useRef)(null), y = (0, s.default)({
                "cursor-pointer relative": m
            }, p), v = (0, s.default)({
                "line-clamp-3": a
            });
            (0, r.useEffect)(() => {
                let e = x.current;
                e && (e.scrollHeight > e.clientHeight ? g(!0) : g(!1))
            }, [x]);
            let k = () => {
                    b(!0)
                },
                w = a && m ? {
                    tabIndex: 0,
                    role: "button",
                    onClick: k,
                    onKeyDown: e => {
                        ("Enter" === e.key || "Space" === e.key) && k()
                    }
                } : {};
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("td", {
                    className: (0, s.default)(y, {
                        "bg-gray-50 p-3 dark:bg-gray-900": !f,
                        "h-full !p-0": f
                    }),
                    ...w,
                    children: [f ? e : (0, t.jsx)(i.default, {
                        className: v,
                        ref: x,
                        children: e
                    }), a && m && (0, t.jsx)(u, {
                        className: "absolute top-1.5 right-1.5"
                    })]
                }), (0, t.jsx)(c.default, {
                    isOpen: h,
                    onOpenChange: b,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "mt-20 flex w-6/12 flex-col rounded-3xl bg-white p-8 dark:bg-gray-800",
                        tabIndex: -1,
                        children: [(0, t.jsx)(n.default, {
                            onPress: () => {
                                b(!1)
                            },
                            variant: "secondary",
                            className: "self-end",
                            children: (0, t.jsx)(d, {})
                        }), (0, t.jsx)(i.default, {
                            className: "caption-sm mb-2.5 text-black dark:text-white",
                            children: o
                        }), (0, t.jsx)("div", {
                            className: "text-heading-sm mb-4 text-black dark:text-white",
                            children: l
                        }), (0, t.jsx)("div", {
                            className: "text-small mb-8",
                            children: (0, t.jsx)(i.default, {
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
        className: c = "",
        verticalHeadingClass: u = "",
        hideTitle: d = !1
    }) => {
        let [f, ...m] = e.rows, g = `align-top text-heading-sm md:text-small-bold rounded-md bg-gray-100 text-gray-800 bg-gray-100 dark:bg-gray-700 md:dark:bg-gray-800 dark:text-gray-200 border-none ${u}`, h = "align-top rounded-md text-sm text-gray-800 dark:text-gray-200 border-none", b = (0, s.default)("w-full table-fixed border-separate border-spacing-2 break-words", c), x = (0, s.default)("h-full table-fixed border-separate border-spacing-1 break-words", c), y = (0, r.useCallback)(e => {
            let [r, ...n] = e.split("\n"), l = n.splice(1).map((e, r) => {
                let n = e.split("|").filter(e => e).map(e => e.trim());
                return (0, t.jsx)("div", {
                    className: "flex grow",
                    children: n.map((e, n) => (0, t.jsx)(o.default, {
                        className: "flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e
                    }, `cell-${r}-${n}-${e}`))
                }, `row-${r}`)
            });
            return (0, t.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0, t.jsx)("div", {
                    className: "-ml-1 flex grow",
                    children: r.split("|").filter(e => e).map((e, r) => (0, t.jsx)(o.default, {
                        className: "ml-1 flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e.trim()
                    }, `header-cell-${r}-${e}`))
                }), l]
            })
        }, []), v = (0, r.useMemo)(() => m.map(e => e.cells.reduce((e, r, s) => ({
            ...e,
            [`col${s+1}`]: {
                component: r.startsWith("|") ? y(r) : (0, t.jsx)(o.default, {
                    options: {
                        overrides: {
                            Button: {
                                component: n.default
                            },
                            Label: {
                                component: l.default
                            },
                            Tooltip: {
                                component: a.default
                            }
                        }
                    },
                    children: r
                }),
                isTableCell: r.startsWith("|"),
                cellContent: r
            }
        }), {})), [m, y]), k = (0, r.useMemo)(() => f.cells.map((e, r) => (0, t.jsx)("th", {
            scope: "col",
            className: "min-w-[10rem] rounded-md border-none bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-800 dark:text-gray-400",
            children: (0, t.jsx)(o.default, {
                options: {
                    overrides: {
                        Button: {
                            component: n.default
                        },
                        Label: {
                            component: l.default
                        },
                        Tooltip: {
                            component: a.default
                        }
                    }
                },
                children: e
            })
        }, `${r}-${e}`)), [f.cells]), w = (0, r.useMemo)(() => v.map((r, n) => {
            let l = Object.values(r),
                a = l[0];
            return (0, t.jsx)("tr", {
                className: "border-separate border-spacing-1",
                children: l.map((r, l) => (0, t.jsx)(p, {
                    isTableCell: r.isTableCell,
                    className: 0 === l ? g : h,
                    rowTitle: a.component,
                    colTitle: 0 !== l && k && k[l] ? k[l] : "",
                    truncationEnabled: e.tableTruncation,
                    children: r.component
                }, `${n}-${l}-${r.cellContent}`))
            }, n)
        }), [k, v, g, e.tableTruncation]), j = (0, r.useMemo)(() => f.cells.map((e, r) => (0, t.jsx)("th", {
            scope: "col",
            className: "text-tiny-bold rounded-md bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-900 dark:text-gray-400",
            children: (0, t.jsx)(o.default, {
                options: {
                    overrides: {
                        Button: {
                            component: n.default
                        },
                        Label: {
                            component: l.default
                        },
                        Tooltip: {
                            component: a.default
                        }
                    }
                },
                children: e
            })
        }, `${r}-${e}`)), [f]), C = (0, r.useMemo)(() => v.map((e, r) => (0, t.jsx)("div", {
            className: "mb-4 min-w-full rounded-md bg-gray-100 align-middle dark:bg-gray-700",
            children: (0, t.jsxs)("table", {
                className: b,
                children: [f && f.cells.length > 0 && (0, t.jsx)("thead", {
                    className: "hidden",
                    children: (0, t.jsx)("tr", {
                        className: "border-separate border-spacing-1",
                        children: j
                    })
                }), (0, t.jsx)("tbody", {
                    className: "table-row-group bg-gray-50 dark:bg-gray-900",
                    children: Object.values(e).map((e, s) => e ? (0, t.jsx)("tr", {
                        className: "rounded-md",
                        children: (0, t.jsxs)("td", {
                            className: 0 === s ? g : h,
                            children: [0 !== s && f && f.cells[s] && (0, t.jsx)(o.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: n.default
                                        },
                                        Label: {
                                            component: l.default
                                        },
                                        Tooltip: {
                                            component: a.default
                                        }
                                    }
                                },
                                children: f.cells[s]
                            }), (0, t.jsx)(i.default, {
                                children: e.component
                            })]
                        })
                    }, `${r}-${s}-${f.cells[s]}`) : null)
                })]
            })
        }, `row-${r}`)), [v, f, b, g, j]);
        return (0, t.jsxs)("div", {
            children: [(0, t.jsx)("div", {
                className: "sm:flex sm:items-center",
                children: (0, t.jsxs)("div", {
                    className: "sm:flex-auto",
                    children: [!d && e.tableTitle && (0, t.jsx)("div", {
                        className: "text-heading-sm",
                        children: e.tableTitle
                    }), !d && e.tableDescription && (0, t.jsx)("p", {
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
                                children: w
                            })]
                        })
                    }), (0, t.jsxs)("div", {
                        className: "md:hidden",
                        children: [(0, t.jsx)("div", {
                            className: "text-body-bold mb-4",
                            children: (0, t.jsx)(o.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: n.default
                                        },
                                        Label: {
                                            component: l.default
                                        },
                                        Tooltip: {
                                            component: a.default
                                        }
                                    }
                                },
                                children: f && f.cells && f.cells[0] ? f.cells[0] : ""
                            })
                        }), C]
                    })]
                })
            })]
        })
    }], 210310)
}, 692558, (e, t, r) => {
    var n = e.r(416907),
        l = e.r(394022);
    t.exports = function(e) {
        return "symbol" == typeof e || l(e) && "[object Symbol]" == n(e)
    }
}, 369710, e => {
    "use strict";
    e.s(["resolveElements", 0, function(e, t, r) {
        if (e instanceof EventTarget) return [e];
        if ("string" == typeof e) {
            let n = document;
            t && (n = t.current);
            let l = r?.[e] ?? n.querySelectorAll(e);
            return l ? Array.from(l) : []
        }
        return Array.from(e)
    }])
}, 153348, 600185, e => {
    "use strict";
    var t = e.i(3931),
        r = e.i(369710);
    let n = {
        some: 0,
        all: 1
    };

    function l(e, t, {
        root: a,
        margin: o,
        amount: s = "some"
    } = {}) {
        let i = (0, r.resolveElements)(e),
            c = new WeakMap,
            u = new IntersectionObserver(e => {
                e.forEach(e => {
                    let r = c.get(e.target);
                    if (!!r !== e.isIntersecting)
                        if (e.isIntersecting) {
                            let r = t(e.target, e);
                            "function" == typeof r ? c.set(e.target, r) : u.unobserve(e.target)
                        } else "function" == typeof r && (r(e), c.delete(e.target))
                })
            }, {
                root: a,
                rootMargin: o,
                threshold: "number" == typeof s ? s : n[s]
            });
        return i.forEach(e => u.observe(e)), () => u.disconnect()
    }
    e.s(["inView", 0, l], 600185), e.s(["useInView", 0, function(e, {
        root: r,
        margin: n,
        amount: a,
        once: o = !1,
        initial: s = !1
    } = {}) {
        let [i, c] = (0, t.useState)(s);
        return (0, t.useEffect)(() => {
            if (!e.current || o && i) return;
            let t = {
                root: r && r.current || void 0,
                margin: n,
                amount: a
            };
            return l(e.current, () => (c(!0), o ? void 0 : () => c(!1)), t)
        }, [r, e, n, o, a]), i
    }], 153348)
}, 783078, e => {
    "use strict";
    var t, r = ((t = r || {})[t.Small = 425] = "Small", t[t.Medium = 744] = "Medium", t[t.Large = 1024] = "Large", t[t.XLarge = 1440] = "XLarge", t);
    e.s(["default", 0, r])
}, 644995, e => {
    "use strict";
    var t = e.i(500783);
    e.s(["default", 0, ({
        className: e = "",
        width: r = 16,
        height: n = 16
    }) => (0, t.jsxs)("svg", {
        width: r,
        height: n,
        viewBox: "0 0 256 256",
        xmlns: "http://www.w3.org/2000/svg",
        className: e,
        children: [(0, t.jsx)("rect", {
            width: "256",
            height: "256",
            fill: "none"
        }), (0, t.jsx)("line", {
            x1: "200",
            y1: "56",
            x2: "56",
            y2: "200",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), (0, t.jsx)("line", {
            x1: "200",
            y1: "200",
            x2: "56",
            y2: "56",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        })]
    })])
}, 387660, e => {
    "use strict";
    var t = e.i(869324);
    e.s(["pushVideoEvent", 0, e => {
        let r = (({
            name: e,
            videoDuration: t,
            videoProgress: r
        }) => ({
            event: "userEvent",
            event_name: e,
            properties: {
                video_duration: t,
                video_progress: r
            }
        }))(e);
        (0, t.default)(r)
    }])
}, 79389, e => {
    "use strict";
    var t = e.i(3931),
        r = function() {
            return (r = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var l in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, l) && (e[l] = t[l]);
                return e
            }).apply(this, arguments)
        },
        n = t.forwardRef(function(e, n) {
            var l = t.useState(!1),
                a = l[0],
                o = l[1],
                s = t.useState(!1),
                i = s[0],
                c = s[1],
                u = encodeURIComponent(e.id),
                d = "string" == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
                p = e.title,
                f = e.poster || "hqdefault",
                m = "&".concat(e.params) || "",
                g = e.muted ? "&mute=1" : "",
                h = e.announce || "Watch",
                b = e.webp ? "webp" : "jpg",
                x = e.webp ? "vi_webp" : "vi",
                y = e.thumbnail || (e.playlist ? "https://i.ytimg.com/".concat(x, "/").concat(d, "/").concat(f, ".").concat(b) : "https://i.ytimg.com/".concat(x, "/").concat(u, "/").concat(f, ".").concat(b)),
                v = e.noCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
            v = e.cookie ? "https://www.youtube.com" : "https://www.youtube-nocookie.com";
            var k = e.playlist ? "".concat(v, "/embed/videoseries?autoplay=1").concat(g, "&list=").concat(u).concat(m) : "".concat(v, "/embed/").concat(u, "?autoplay=1&state=1").concat(g).concat(m),
                w = e.activatedClass || "lyt-activated",
                j = e.adNetwork || !1,
                C = e.aspectHeight || 9,
                N = e.aspectWidth || 16,
                T = e.iframeClass || "",
                E = e.playerClass || "lty-playbtn",
                L = e.wrapperClass || "yt-lite",
                I = e.onIframeAdded || function() {},
                $ = e.rel ? "prefetch" : "preload",
                H = e.containerElement || "article";
            return t.useEffect(function() {
                i && I()
            }, [i]), t.createElement(t.Fragment, null, t.createElement("link", {
                rel: $,
                href: y,
                as: "image"
            }), t.createElement(t.Fragment, null, a && t.createElement(t.Fragment, null, t.createElement("link", {
                rel: "preconnect",
                href: v
            }), t.createElement("link", {
                rel: "preconnect",
                href: "https://www.google.com"
            }), j && t.createElement(t.Fragment, null, t.createElement("link", {
                rel: "preconnect",
                href: "https://static.doubleclick.net"
            }), t.createElement("link", {
                rel: "preconnect",
                href: "https://googleads.g.doubleclick.net"
            })))), t.createElement(H, {
                onPointerOver: function() {
                    a || o(!0)
                },
                onClick: function() {
                    i || c(!0)
                },
                className: "".concat(L, " ").concat(i ? w : ""),
                "data-title": p,
                style: r({
                    backgroundImage: "url(".concat(y, ")")
                }, {
                    "--aspect-ratio": "".concat(C / N * 100, "%")
                })
            }, t.createElement("button", {
                type: "button",
                className: E,
                "aria-label": "".concat(h, " ").concat(p)
            }), i && t.createElement("iframe", {
                ref: n,
                className: T,
                title: p,
                width: "560",
                height: "315",
                frameBorder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
                src: k
            })))
        });
    e.s(["default", 0, n])
}, 195051, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(722990),
        n = e.i(749583),
        l = e.i(239273),
        a = e.i(805518);
    e.s(["default", 0, ({
        blockedMessage: e,
        consentButtonLabel: o
    }) => {
        let s = "C0004";
        return (0, t.jsx)(t.Fragment, {
            children: !(() => {
                let [e] = (0, l.default)("OptanonConsent") || "", t = {};
                return e && e.split("groups=")[1].split("&")[0].split("%2C").forEach(e => {
                    let [r, n] = e.split("%3A");
                    t[r] = parseInt(n)
                }), t[s]
            })() && (0, t.jsxs)("div", {
                className: "consent absolute top-0 right-0 bottom-0 left-0 z-10 flex flex-col items-center overflow-auto rounded-2xl bg-black p-3 leading-5 text-white opacity-90 sm:justify-center sm:p-5",
                children: [(0, t.jsx)(a.default, {
                    className: "mx-auto text-center sm:w-4/5 sm:text-base",
                    children: (0, t.jsx)(r.PortableText, {
                        value: e
                    })
                }), (0, t.jsx)("div", {
                    className: "mt-5",
                    children: (0, t.jsx)(n.default, {
                        rounded: !0,
                        target: "_self",
                        variant: "primary",
                        onPress: () => {
                            let e = document.getElementById("ot-sdk-btn"),
                                t = document.getElementById(`ot-header-id-${s}`),
                                r = window;
                            r && r.OneTrust ? r.OneTrust.ToggleInfoDisplay() : e.click(), t.click()
                        },
                        children: o
                    })
                })]
            })
        })
    }])
}, 224601, 934172, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        n = e.i(655105),
        l = e.i(193863),
        a = e.i(79389),
        o = e.i(363737),
        s = e.i(749583),
        i = e.i(644995),
        c = e.i(195051),
        u = e.i(545935),
        d = e.i(387660);
    let p = (e, t = !0) => {
        let [n, l] = (0, r.useState)(null);
        return (0, r.useEffect)(() => {
            let r;
            return t && e.current && (r = setInterval(() => {
                let t = window.YT;
                t && e.current && (l(new t.Player(e.current)), clearInterval(r))
            }, 500)), () => {
                l(null), clearInterval(r)
            }
        }, [t, e]), {
            player: n
        }
    };
    e.s(["useYoutubeAPI", 0, p], 934172), e.s(["default", 0, ({
        title: e,
        url: f,
        container: m = !1,
        blockedMessage: g,
        consentButtonLabel: h
    }) => {
        let b = (0, l.default)(f),
            [x, y] = (0, r.useState)(!1),
            v = (0, r.useRef)(null),
            k = (0, r.useRef)(null),
            {
                player: w
            } = p(v, x),
            j = () => {
                y(!0)
            };
        return (0, r.useEffect)(() => {
            w && (k.current = w.addEventListener("onStateChange", e => {
                if ([1, 2].includes(e.data)) {
                    let t = "function" == typeof w.getDuration && w.getDuration() || 0,
                        r = Number((("function" == typeof w.getCurrentTime && w.getCurrentTime() || 0) / t * 100).toFixed(2)),
                        n = 1 === e.data ? "video_play" : "video_pause";
                    (0, d.pushVideoEvent)({
                        name: n,
                        videoDuration: t,
                        videoProgress: (Number.isNaN(r), r)
                    })
                }
            }))
        }, [w]), (0, r.useEffect)(() => {
            if (!x && w?.playerInfo?.playerState === 1) {
                let e = "function" == typeof w.getDuration && w.getDuration() || 0,
                    t = Number((("function" == typeof w.getCurrentTime && w.getCurrentTime() || 0) / e * 100).toFixed(2));
                (0, d.pushVideoEvent)({
                    name: "video_pause",
                    videoDuration: e,
                    videoProgress: (Number.isNaN(t), t)
                })
            }
        }, [x, w]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)(u.default, {
                src: "https://www.youtube.com/iframe_api"
            }), (0, t.jsxs)("div", {
                className: "relative h-full w-full self-center p-4 lg:p-0",
                children: [f && b && (0, t.jsxs)("div", {
                    className: "yt-lite z-10 h-full overflow-auto",
                    ...{
                        tabIndex: 0,
                        role: "button",
                        onClick: j,
                        onKeyDown: e => {
                            ("Enter" === e.key || "Space" === e.key) && j()
                        }
                    },
                    children: [(0, t.jsx)("div", {
                        className: "lty-playbtn"
                    }), (0, t.jsx)(n.default, {
                        className: "!relative",
                        style: {
                            borderRadius: "24px"
                        },
                        src: `https://img.youtube.com/vi/${b}/hqdefault.jpg`,
                        alt: e,
                        fill: !0
                    }), (0, t.jsx)(c.default, {
                        blockedMessage: g,
                        consentButtonLabel: h
                    })]
                }), (0, t.jsx)(o.default, {
                    isOpen: x,
                    onOpenChange: y,
                    showTriggerButton: !1,
                    children: (0, t.jsxs)("div", {
                        className: "z-50 mt-20 flex w-10/12 flex-col rounded-3xl bg-black p-4 lg:w-8/12",
                        tabIndex: -1,
                        children: [(0, t.jsx)(s.default, {
                            onPress: () => {
                                y(!1)
                            },
                            variant: "secondary",
                            className: "self-end overflow-hidden",
                            children: (0, t.jsx)(i.default, {
                                className: "z-[60] h-5 w-5 text-white"
                            })
                        }), (0, t.jsx)(a.default, {
                            id: b,
                            title: e,
                            iframeClass: "yt-iframe",
                            poster: "hqdefault",
                            ref: v,
                            params: "enablejsapi=1"
                        }), (0, t.jsx)(c.default, {
                            blockedMessage: g,
                            consentButtonLabel: h
                        })]
                    })
                })]
            })]
        })
    }], 224601)
}, 883027, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(722978),
        n = e.i(749583),
        l = e.i(475200);
    e.s(["default", 0, ({
        pdf: e,
        hidePdfToolbar: a,
        url: o,
        mobilePdfButtonText: s,
        title: i,
        visualOptions: c,
        theme: u,
        isHidden: d
    }) => {
        let p = (0, l.default)(),
            f = e ? e.cdnURL : o,
            m = (0, r.default)("mb-8 md:mb-12", {
                "bg-black py-16": c?.container && "dark" === u,
                "bg-white py-16": c?.container && "light" === u
            }),
            g = (0, r.default)({
                container: c?.container
            }),
            h = e && p;
        return (0, t.jsx)(t.Fragment, {
            children: !d && (0, t.jsx)("div", {
                className: m,
                children: (0, t.jsx)("div", {
                    className: g,
                    children: (0, t.jsxs)("div", {
                        className: "relative",
                        children: [(0, t.jsx)("iframe", {
                            className: "aspect-[4/3] w-full rounded-xl",
                            src: `${f}?#view=fit&navpanes=0${a?"&toolbar=0":""}`,
                            title: i ?? ""
                        }), h && (0, t.jsx)("div", {
                            className: "absolute inset-0 flex items-center justify-center rounded-xl bg-black/80",
                            children: (0, t.jsx)(n.default, {
                                href: f,
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
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ff19fcda-34c5-5e38-897d-d5df04ef9f95")
    } catch (e) {}
}();
//# debugId=ff19fcda-34c5-5e38-897d-d5df04ef9f95