(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 229696, e => {
    "use strict";
    var t, r, n = e.i(3931);

    function l() {
        return (l = Object.assign.bind()).apply(this, arguments)
    }
    let o = ["children", "options"],
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
        u = ["style", "script"],
        a = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
        c = /mailto:/i,
        f = /\n{2,}$/,
        p = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
        d = /^ *> ?/gm,
        y = /^ {2,}\n/,
        m = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
        h = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
        g = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        v = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        k = /^(?:\n *)*\n/,
        x = /\r\n?/g,
        b = /^\[\^([^\]]+)](:.*)\n/,
        j = /^\[\^([^\]]+)]/,
        w = /\f/g,
        I = /^\s*?\[(x|\s)\]/,
        O = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        _ = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        T = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
        S = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
        $ = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        E = /^<!--[\s\S]*?(?:-->)/,
        H = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        A = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        M = /^\{.*\}$/,
        L = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        P = /^<([^ >]+@[^ >]+)>/,
        B = /^<([^ >]+:\/[^ >]+)>/,
        D = /-([a-z])?/gi,
        C = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
        F = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        N = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        z = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        G = /(\[|\])/g,
        R = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
        W = /\t/g,
        U = /^ *\| */,
        X = /(^ *\||\| *$)/g,
        q = / *$/,
        Z = /^ *:-+: *$/,
        K = /^ *:-+ *$/,
        V = /^ *-+: *$/,
        Q = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
        J = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
        Y = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
        ee = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
        et = /^\\([^0-9A-Za-z\s])/,
        er = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
        en = /^\n+/,
        el = /^([ \t]*)/,
        eo = /\\([^\\])/g,
        ei = / *\n+$/,
        es = /(?:^|\n)( *)$/,
        eu = "(?:\\d+\\.)",
        ea = "(?:[*+-])";

    function ec(e) {
        return "( *)(" + (1 === e ? eu : ea) + ") +"
    }
    let ef = ec(1),
        ep = ec(2);

    function ed(e) {
        return RegExp("^" + (1 === e ? ef : ep))
    }
    let ey = ed(1),
        em = ed(2);

    function eh(e) {
        return RegExp("^" + (1 === e ? ef : ep) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? eu : ea) + " )[^\\n]*)*(\\n|$)", "gm")
    }
    let eg = eh(1),
        ev = eh(2);

    function ek(e) {
        let t = 1 === e ? eu : ea;
        return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)")
    }
    let ex = ek(1),
        eb = ek(2);

    function ej(e, t) {
        let n = 1 === t,
            l = n ? ex : eb,
            o = n ? eg : ev,
            i = n ? ey : em;
        return {
            t(e, t, r) {
                let n = es.exec(r);
                return n && (t.o || !t._ && !t.u) ? l.exec(e = n[1] + e) : null
            },
            i: r.HIGH,
            l(e, t, r) {
                let l = n ? +e[2] : void 0,
                    s = e[0].replace(f, "\n").match(o),
                    u = !1;
                return {
                    p: s.map(function(e, n) {
                        let l, o = RegExp("^ {1," + i.exec(e)[0].length + "}", "gm"),
                            a = e.replace(o, "").replace(i, ""),
                            c = n === s.length - 1,
                            f = -1 !== a.indexOf("\n\n") || c && u;
                        u = f;
                        let p = r._,
                            d = r.o;
                        r.o = !0, f ? (r._ = !1, l = a.replace(ei, "\n\n")) : (r._ = !0, l = a.replace(ei, ""));
                        let y = t(l, r);
                        return r._ = p, r.o = d, y
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
    let ew = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eI = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eO = [p, h, g, O, T, _, E, C, eg, ex, ev, eb],
        e_ = [...eO, /^[^\n]+(?:  \n|\n{2,})/, S, A];

    function eT(e) {
        return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
    }

    function eS(e) {
        return V.test(e) ? "right" : Z.test(e) ? "center" : K.test(e) ? "left" : null
    }

    function e$(e, t, r) {
        let n = r.$;
        r.$ = !0;
        let l = t(e.trim(), r);
        r.$ = n;
        let o = [
            []
        ];
        return l.forEach(function(e, t) {
            "tableSeparator" === e.type ? 0 !== t && t !== l.length - 1 && o.push([]) : ("text" !== e.type || null != l[t + 1] && "tableSeparator" !== l[t + 1].type || (e.v = e.v.replace(q, "")), o[o.length - 1].push(e))
        }), o
    }

    function eE(e, t, r) {
        var n;
        r._ = !0;
        let l = e$(e[1], t, r),
            o = e[2].replace(X, "").split("|").map(eS),
            i = (n = e[3], n.trim().split("\n").map(function(e) {
                return e$(e, t, r)
            }));
        return r._ = !1, {
            S: o,
            A: i,
            L: l,
            type: "table"
        }
    }

    function eH(e, t) {
        return null == e.S[t] ? {} : {
            textAlign: e.S[t]
        }
    }

    function eA(e) {
        return function(t, r) {
            return r._ ? e.exec(t) : null
        }
    }

    function eM(e) {
        return function(t, r) {
            return r._ || r.u ? e.exec(t) : null
        }
    }

    function eL(e) {
        return function(t, r) {
            return r._ || r.u ? null : e.exec(t)
        }
    }

    function eP(e) {
        return function(t) {
            return e.exec(t)
        }
    }

    function eB(e, t, r) {
        if (t._ || t.u || r && !r.endsWith("\n")) return null;
        let n = "";
        e.split("\n").every(e => !eO.some(t => t.test(e)) && (n += e + "\n", e.trim()));
        let l = n.trimEnd();
        return "" == l ? null : [n, l]
    }

    function eD(e) {
        try {
            if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return
        } catch (e) {
            return null
        }
        return e
    }

    function eC(e) {
        return e.replace(eo, "$1")
    }

    function eF(e, t, r) {
        let n = r._ || !1,
            l = r.u || !1;
        r._ = !0, r.u = !0;
        let o = e(t, r);
        return r._ = n, r.u = l, o
    }

    function eN(e, t, r) {
        return r._ = !1, e(t, r)
    }
    let ez = (e, t, r) => ({
        v: eF(t, e[1], r)
    });

    function eG() {
        return {}
    }

    function eR() {
        return null
    }

    function eW(e, t, r) {
        let n = e,
            l = t.split(".");
        for (; l.length && void 0 !== (n = n[l[0]]);) l.shift();
        return n || r
    }(t = r || (r = {}))[t.MAX = 0] = "MAX", t[t.HIGH = 1] = "HIGH", t[t.MED = 2] = "MED", t[t.LOW = 3] = "LOW", t[t.MIN = 4] = "MIN", e.s(["default", 0, e => {
        let {
            children: t,
            options: f
        } = e, X = function(e, t) {
            if (null == e) return {};
            var r, n, l = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) t.indexOf(r = o[n]) >= 0 || (l[r] = e[r]);
            return l
        }(e, o);
        return n.cloneElement(function(e, t = {}) {
            var o;
            let f;
            t.overrides = t.overrides || {}, t.slugify = t.slugify || eT, t.namedCodesToUnicode = t.namedCodesToUnicode ? l({}, s, t.namedCodesToUnicode) : s;
            let X = t.createElement || n.createElement;

            function q(e, r, ...n) {
                var o;
                let i, s = eW(t.overrides, `${e}.props`, {});
                return X((i = eW(o = t.overrides, e)) ? "function" == typeof i || "object" == typeof i && "render" in i ? i : eW(o, `${e}.component`, e) : e, l({}, r, s, {
                    className: function(...e) {
                        return e.filter(Boolean).join(" ")
                    }(null == r ? void 0 : r.className, s.className) || void 0
                }), ...n)
            }

            function Z(e) {
                let r, l = !1;
                t.forceInline ? l = !0 : t.forceBlock || (l = !1 === R.test(e));
                let o = eu(es(l ? e : `${e.trimEnd().replace(en,"")}

`, {
                    _: l
                }));
                for (;
                    "string" == typeof o[o.length - 1] && !o[o.length - 1].trim();) o.pop();
                if (null === t.wrapper) return o;
                let i = t.wrapper || (l ? "span" : "div");
                if (o.length > 1 || t.forceWrapper) r = o;
                else {
                    if (1 === o.length) return "string" == typeof(r = o[0]) ? q("span", {
                        key: "outer"
                    }, r) : r;
                    r = null
                }
                return n.createElement(i, {
                    key: "outer"
                }, r)
            }

            function K(e) {
                let t = e.match(a);
                return t ? t.reduce(function(e, t, r) {
                    let l = t.indexOf("=");
                    if (-1 !== l) {
                        var o, s, u;
                        let a, c = (-1 !== (o = t.slice(0, l)).indexOf("-") && null === o.match(H) && (o = o.replace(D, function(e, t) {
                                return t.toUpperCase()
                            })), o).trim(),
                            f = ('"' === (a = (s = t.slice(l + 1).trim())[0]) || "'" === a) && s.length >= 2 && s[s.length - 1] === a ? s.slice(1, -1) : s,
                            p = i[c] || c,
                            d = e[p] = (u = f, "style" === c ? u.split(/;\s?/).reduce(function(e, t) {
                                let r = t.slice(0, t.indexOf(":"));
                                return e[r.replace(/(-[a-z])/g, e => e[1].toUpperCase())] = t.slice(r.length + 1).trim(), e
                            }, {}) : "href" === c ? eD(u) : (u.match(M) && (u = u.slice(1, u.length - 1)), "true" === u || "false" !== u && u));
                        "string" == typeof d && (S.test(d) || A.test(d)) && (e[p] = n.cloneElement(Z(d.trim()), {
                            key: r
                        }))
                    } else "style" !== t && (e[i[t] || t] = !0);
                    return e
                }, {}) : null
            }
            let V = [],
                eo = {},
                ei = {
                    blockQuote: {
                        t: eL(p),
                        i: r.HIGH,
                        l: (e, t, r) => ({
                            v: t(e[0].replace(d, ""), r)
                        }),
                        h: (e, t, r) => q("blockquote", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    breakLine: {
                        t: eP(y),
                        i: r.HIGH,
                        l: eG,
                        h: (e, t, r) => q("br", {
                            key: r.k
                        })
                    },
                    breakThematic: {
                        t: eL(m),
                        i: r.HIGH,
                        l: eG,
                        h: (e, t, r) => q("hr", {
                            key: r.k
                        })
                    },
                    codeBlock: {
                        t: eL(g),
                        i: r.MAX,
                        l: e => ({
                            v: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
                            M: void 0
                        }),
                        h: (e, t, r) => q("pre", {
                            key: r.k
                        }, q("code", l({}, e.O, {
                            className: e.M ? `lang-${e.M}` : ""
                        }), e.v))
                    },
                    codeFenced: {
                        t: eL(h),
                        i: r.MAX,
                        l: e => ({
                            O: K(e[3] || ""),
                            v: e[4],
                            M: e[2] || void 0,
                            type: "codeBlock"
                        })
                    },
                    codeInline: {
                        t: eM(v),
                        i: r.LOW,
                        l: e => ({
                            v: e[2]
                        }),
                        h: (e, t, r) => q("code", {
                            key: r.k
                        }, e.v)
                    },
                    footnote: {
                        t: eL(b),
                        i: r.MAX,
                        l: e => (V.push({
                            I: e[2],
                            j: e[1]
                        }), {}),
                        h: eR
                    },
                    footnoteReference: {
                        t: eA(j),
                        i: r.HIGH,
                        l: e => ({
                            v: e[1],
                            B: `#${t.slugify(e[1])}`
                        }),
                        h: (e, t, r) => q("a", {
                            key: r.k,
                            href: eD(e.B)
                        }, q("sup", {
                            key: r.k
                        }, e.v))
                    },
                    gfmTask: {
                        t: eA(I),
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
                        t: eL(t.enforceAtxHeadings ? _ : O),
                        i: r.HIGH,
                        l: (e, r, n) => ({
                            v: eF(r, e[2], n),
                            T: t.slugify(e[2]),
                            C: e[1].length
                        }),
                        h: (e, t, r) => q(`h${e.C}`, {
                            id: e.T,
                            key: r.k
                        }, t(e.v, r))
                    },
                    headingSetext: {
                        t: eL(T),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: eF(t, e[1], r),
                            C: "=" === e[2] ? 1 : 2,
                            type: "heading"
                        })
                    },
                    htmlComment: {
                        t: eP(E),
                        i: r.HIGH,
                        l: () => ({}),
                        h: eR
                    },
                    image: {
                        t: eM(eI),
                        i: r.HIGH,
                        l: e => ({
                            D: e[1],
                            B: eC(e[2]),
                            F: e[3]
                        }),
                        h: (e, t, r) => q("img", {
                            key: r.k,
                            alt: e.D || void 0,
                            title: e.F || void 0,
                            src: eD(e.B)
                        })
                    },
                    link: {
                        t: eA(ew),
                        i: r.LOW,
                        l: (e, t, r) => {
                            var n;
                            let l, o, i;
                            return {
                                v: (n = e[1], l = r._ || !1, o = r.u || !1, r._ = !1, r.u = !0, i = t(n, r), r._ = l, r.u = o, i),
                                B: eC(e[2]),
                                F: e[3]
                            }
                        },
                        h: (e, t, r) => q("a", {
                            key: r.k,
                            href: eD(e.B),
                            title: e.F
                        }, t(e.v, r))
                    },
                    linkAngleBraceStyleDetector: {
                        t: eA(B),
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
                        t: (e, t) => t.N ? null : eA(L)(e, t),
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
                        t: eA(P),
                        i: r.MAX,
                        l(e) {
                            let t = e[1],
                                r = e[1];
                            return c.test(r) || (r = "mailto:" + r), {
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
                        t: eL(k),
                        i: r.LOW,
                        l: eG,
                        h: () => "\n"
                    },
                    paragraph: {
                        t: eB,
                        i: r.LOW,
                        l: ez,
                        h: (e, t, r) => q("p", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    ref: {
                        t: eA(F),
                        i: r.MAX,
                        l: e => (eo[e[1]] = {
                            B: e[2],
                            F: e[4]
                        }, {}),
                        h: eR
                    },
                    refImage: {
                        t: eM(N),
                        i: r.MAX,
                        l: e => ({
                            D: e[1] || void 0,
                            P: e[2]
                        }),
                        h: (e, t, r) => q("img", {
                            key: r.k,
                            alt: e.D,
                            src: eD(eo[e.P].B),
                            title: eo[e.P].F
                        })
                    },
                    refLink: {
                        t: eA(z),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: t(e[1], r),
                            Z: t(e[0].replace(G, "\\$1"), r),
                            P: e[2]
                        }),
                        h: (e, t, r) => eo[e.P] ? q("a", {
                            key: r.k,
                            href: eD(eo[e.P].B),
                            title: eo[e.P].F
                        }, t(e.v, r)) : q("span", {
                            key: r.k
                        }, t(e.Z, r))
                    },
                    table: {
                        t: eL(C),
                        i: r.HIGH,
                        l: eE,
                        h: (e, t, r) => q("table", {
                            key: r.k
                        }, q("thead", null, q("tr", null, e.L.map(function(n, l) {
                            return q("th", {
                                key: l,
                                style: eH(e, l)
                            }, t(n, r))
                        }))), q("tbody", null, e.A.map(function(n, l) {
                            return q("tr", {
                                key: l
                            }, n.map(function(n, l) {
                                return q("td", {
                                    key: l,
                                    style: eH(e, l)
                                }, t(n, r))
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
                        t: eP(er),
                        i: r.MIN,
                        l: e => ({
                            v: e[0].replace($, (e, r) => t.namedCodesToUnicode[r] ? t.namedCodesToUnicode[r] : e)
                        }),
                        h: e => e.v
                    },
                    textBolded: {
                        t: eM(Q),
                        i: r.MED,
                        l: (e, t, r) => ({
                            v: t(e[2], r)
                        }),
                        h: (e, t, r) => q("strong", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textEmphasized: {
                        t: eM(J),
                        i: r.LOW,
                        l: (e, t, r) => ({
                            v: t(e[2], r)
                        }),
                        h: (e, t, r) => q("em", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textEscaped: {
                        t: eM(et),
                        i: r.HIGH,
                        l: e => ({
                            v: e[1],
                            type: "text"
                        })
                    },
                    textMarked: {
                        t: eM(Y),
                        i: r.LOW,
                        l: ez,
                        h: (e, t, r) => q("mark", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textStrikethroughed: {
                        t: eM(ee),
                        i: r.LOW,
                        l: ez,
                        h: (e, t, r) => q("del", {
                            key: r.k
                        }, t(e.v, r))
                    }
                };
            !0 !== t.disableParsingRawHTML && (ei.htmlBlock = {
                t: eP(S),
                i: r.HIGH,
                l(e, t, r) {
                    let [, n] = e[3].match(el), l = RegExp(`^${n}`, "gm"), o = e[3].replace(l, ""), i = e_.some(e => e.test(o)) ? eN : eF, s = e[1].toLowerCase(), a = -1 !== u.indexOf(s);
                    r.N = r.N || "a" === s;
                    let c = a ? e[3] : i(t, o, r);
                    return r.N = !1, {
                        O: K(e[2]),
                        v: c,
                        G: a,
                        H: a ? s : e[1]
                    }
                },
                h: (e, t, r) => q(e.H, l({
                    key: r.k
                }, e.O), e.G ? e.v : t(e.v, r))
            }, ei.htmlSelfClosing = {
                t: eP(A),
                i: r.HIGH,
                l: e => ({
                    O: K(e[2] || ""),
                    H: e[1]
                }),
                h: (e, t, r) => q(e.H, l({}, e.O, {
                    key: r.k
                }))
            });
            let es = ((f = Object.keys(ei)).sort(function(e, t) {
                    let r = ei[e].i,
                        n = ei[t].i;
                    return r !== n ? r - n : e < t ? -1 : 1
                }), function(e, t) {
                    return function e(t, r) {
                        let n = [],
                            l = "";
                        for (; t;) {
                            let o = 0;
                            for (; o < f.length;) {
                                let i = f[o],
                                    s = ei[i],
                                    u = s.t(t, r, l);
                                if (u) {
                                    let o = u[0];
                                    t = t.substring(o.length);
                                    let a = s.l(u, e, r);
                                    null == a.type && (a.type = i), n.push(a), l = o;
                                    break
                                }
                                o++
                            }
                        }
                        return n
                    }(e.replace(x, "\n").replace(w, "").replace(W, "    "), t)
                }),
                eu = (o = function(e, t, r) {
                    return ei[e.type].h(e, t, r)
                }, function e(t, r = {}) {
                    if (Array.isArray(t)) {
                        let n = r.k,
                            l = [],
                            o = !1;
                        for (let n = 0; n < t.length; n++) {
                            r.k = n;
                            let i = e(t[n], r),
                                s = "string" == typeof i;
                            s && o ? l[l.length - 1] += i : null !== i && l.push(i), o = s
                        }
                        return r.k = n, l
                    }
                    return o(t, e, r)
                }),
                ea = Z(e);
            return V.length ? q("div", null, ea, q("footer", {
                key: "footer"
            }, V.map(function(e) {
                return q("div", {
                    id: t.slugify(e.j),
                    key: e.j
                }, e.j, eu(es(e.I, {
                    _: !0
                })))
            }))) : ea
        }(t, f), X)
    }])
}, 394225, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(722978);
    e.s(["default", 0, ({
        className: e,
        children: n,
        size: l = "medium",
        ...o
    }) => {
        let i = (0, r.default)("bg-gray-100 text-gray-600 text-tiny-bold dark:bg-gray-900 dark:text-gray-200 rounded-md", {
            small: "px-2 py-1",
            medium: "p-2"
        } [l], e);
        return (0, t.jsx)("span", {
            className: i,
            ...o,
            children: n
        })
    }], 394225)
}, 452152, 929655, 539110, e => {
    "use strict";
    var t = e.i(3931),
        r = e.i(459236);
    let n = {},
        l = 0,
        o = !1,
        i = null,
        s = null;
    e.s(["useTooltipTriggerState", 0, function(e = {}) {
        let {
            delay: u = 1500,
            closeDelay: a = 500
        } = e, {
            isOpen: c,
            open: f,
            close: p
        } = (0, r.useOverlayTriggerState)(e), d = (0, t.useMemo)(() => `${++l}`, []), y = (0, t.useRef)(null), m = (0, t.useRef)(p), h = () => {
            n[d] = k
        }, g = () => {
            for (let e in n) e !== d && (n[e](!0), delete n[e])
        }, v = () => {
            y.current && clearTimeout(y.current), y.current = null, g(), h(), o = !0, f(), i && (clearTimeout(i), i = null), s && (clearTimeout(s), s = null)
        }, k = e => {
            e || a <= 0 ? (y.current && clearTimeout(y.current), y.current = null, m.current()) : y.current || (y.current = setTimeout(() => {
                y.current = null, m.current()
            }, a)), i && (clearTimeout(i), i = null), o && (s && clearTimeout(s), s = setTimeout(() => {
                delete n[d], s = null, o = !1
            }, Math.max(500, a)))
        };
        return (0, t.useEffect)(() => {
            m.current = p
        }, [p]), (0, t.useEffect)(() => () => {
            y.current && clearTimeout(y.current), n[d] && delete n[d]
        }, [d]), {
            isOpen: c,
            open: e => {
                e || !(u > 0) || y.current ? v() : (g(), h(), c || i || o ? c || v() : i = setTimeout(() => {
                    i = null, o = !0, v()
                }, u))
            },
            close: k
        }
    }], 452152);
    var u = e.i(339206),
        a = e.i(604082),
        c = e.i(897884);
    e.s(["useTooltip", 0, function(e, t) {
        let r = (0, u.filterDOMProps)(e, {
                labelable: !0
            }),
            {
                hoverProps: n
            } = (0, c.useHover)({
                onHoverStart: () => null == t ? void 0 : t.open(!0),
                onHoverEnd: () => null == t ? void 0 : t.close()
            });
        return {
            tooltipProps: (0, a.mergeProps)(r, n, {
                role: "tooltip"
            })
        }
    }], 929655);
    var f = e.i(427651),
        p = e.i(7180),
        d = e.i(231781);
    e.s(["useTooltipTrigger", 0, function(e, r, n) {
        let {
            isDisabled: l,
            trigger: o
        } = e, i = (0, d.useId)(), s = (0, t.useRef)(!1), u = (0, t.useRef)(!1), y = () => {
            (s.current || u.current) && r.open(u.current)
        }, m = e => {
            s.current || u.current || r.close(e)
        };
        (0, t.useEffect)(() => {
            let e = e => {
                n && n.current && "Escape" === e.key && (e.stopPropagation(), r.close(!0))
            };
            if (r.isOpen) return document.addEventListener("keydown", e, !0), () => {
                document.removeEventListener("keydown", e, !0)
            }
        }, [n, r]);
        let h = () => {
                u.current = !1, s.current = !1, m(!0)
            },
            {
                hoverProps: g
            } = (0, c.useHover)({
                isDisabled: l,
                onHoverStart: () => {
                    "focus" !== o && ("pointer" === (0, f.getInteractionModality)() ? s.current = !0 : s.current = !1, y())
                },
                onHoverEnd: () => {
                    "focus" !== o && (u.current = !1, s.current = !1, m())
                }
            }),
            {
                focusableProps: v
            } = (0, p.useFocusable)({
                isDisabled: l,
                onFocus: () => {
                    (0, f.isFocusVisible)() && (u.current = !0, y())
                },
                onBlur: () => {
                    u.current = !1, s.current = !1, m(!0)
                }
            }, n);
        return {
            triggerProps: {
                "aria-describedby": r.isOpen ? i : void 0,
                ...(0, a.mergeProps)(v, g, {
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
        n = e.i(452152),
        l = e.i(929655),
        o = e.i(539110),
        i = e.i(604082),
        s = e.i(722978);
    let u = ({
        state: e,
        content: r,
        hasArrow: n,
        placement: o,
        ...u
    }) => {
        let {
            tooltipProps: a
        } = (0, l.useTooltip)(u, e);
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
            })(o), n && (e => {
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
            })(o)),
            style: {
                wordBreak: "break-word",
                overflowWrap: "break-word"
            },
            ...(0, i.mergeProps)(u, a),
            children: r
        })
    };
    e.s(["default", 0, ({
        content: e,
        placement: l = "bottom",
        hasArrow: i = !0,
        tooltipOptions: s = {
            delay: 300,
            closeDelay: 0,
            isDisabled: !1
        },
        children: a
    }) => {
        let c = (0, n.useTooltipTriggerState)(s),
            f = (0, r.useRef)(null),
            {
                triggerProps: p,
                tooltipProps: d
            } = (0, o.useTooltipTrigger)(s, c, f);
        return (0, t.jsxs)("span", {
            className: "relative",
            children: [(0, t.jsx)("span", {
                ref: f,
                ...p,
                children: a
            }), c.isOpen && (0, t.jsx)(u, {
                state: c,
                content: e,
                placement: l,
                hasArrow: i,
                ...d
            })]
        })
    }], 652955)
}, 363737, 260041, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        n = e.i(460261),
        l = e.i(669877),
        o = e.i(984782),
        i = e.i(155266),
        s = e.i(604082);

    function u(e, t, u) {
        let {
            overlayProps: a,
            underlayProps: c
        } = (0, o.useOverlay)({
            ...e,
            isOpen: t.isOpen,
            onClose: t.close
        }, u);
        return (0, i.usePreventScroll)({
            isDisabled: !t.isOpen
        }), (0, n.useOverlayFocusContain)(), (0, r.useEffect)(() => {
            if (t.isOpen && u.current) return (0, l.ariaHideOutside)([u.current])
        }, [t.isOpen, u]), {
            modalProps: (0, s.mergeProps)(a),
            underlayProps: c
        }
    }
    e.s(["useModalOverlay", 0, u], 260041);
    var a = e.i(441157),
        c = e.i(459236),
        f = e.i(749583);
    let p = ({
            state: e,
            children: l,
            ...o
        }) => {
            let i = (0, r.useRef)(null),
                {
                    modalProps: s,
                    underlayProps: a
                } = u({
                    ...o
                }, e, i);
            return (0, r.useEffect)(() => {
                let t = i.current?.querySelector("div"),
                    r = e => {
                        let r = e.relatedTarget;
                        t && !t.contains(r) && t.focus()
                    };
                return e.isOpen && t && (t.focus(), t.addEventListener("focusout", r)), () => {
                    t && t.removeEventListener("focusout", r)
                }
            }, [e.isOpen]), (0, t.jsx)(n.Overlay, {
                children: (0, t.jsx)("div", {
                    className: "fixed top-0 right-0 bottom-0 left-0 z-[60] flex items-start justify-center overflow-hidden bg-gray-500/50",
                    ...a,
                    children: (0, t.jsx)("div", {
                        ref: i,
                        ...s,
                        className: "contents",
                        children: l
                    })
                })
            })
        },
        d = ({
            actionLabel: e,
            children: n,
            showTriggerButton: l = !0,
            ...o
        }) => {
            let i = (0, c.useOverlayTriggerState)({
                    ...o
                }),
                {
                    triggerProps: s,
                    overlayProps: u
                } = (0, a.useOverlayTrigger)({
                    type: "dialog"
                }, i);
            return (0, t.jsxs)(t.Fragment, {
                children: [l && (0, t.jsx)(f.default, {
                    rounded: !0,
                    hasArrow: !0,
                    ...s,
                    children: e
                }), i.isOpen && (0, t.jsx)(p, {
                    state: i,
                    ...o,
                    isDismissable: !0,
                    children: "function" == typeof n ? (0, r.cloneElement)(n(i.close), u) : (0, r.cloneElement)(n, u)
                })]
            })
        };
    d.Layout = ({
        children: e,
        modal: r
    }) => (0, t.jsxs)("div", {
        className: "flex h-screen max-w-[600px] flex-col overflow-scroll rounded-xl bg-white p-10 sm:min-w-[600px] md:my-20 md:h-3/4 [&>*]:text-black",
        tabIndex: -1,
        children: [(0, t.jsx)("h4", {
            className: "mb-4 text-2xl leading-8 font-medium",
            children: r.title
        }), (0, t.jsx)("p", {
            className: "mb-8 text-base leading-5 font-medium",
            children: r.description
        }), e]
    }), e.s(["default", 0, d], 363737)
}, 805518, e => {
    "use strict";
    let t = e.i(747624).default;
    e.s(["default", 0, t])
}, 722990, e => {
    "use strict";
    var t = e.i(500783);

    function r(e) {
        return "span" === e._type && "text" in e && "string" == typeof e.text && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
    }

    function n(e) {
        return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
    }

    function l(e) {
        return n(e) && "listItem" in e && "string" == typeof e.listItem && (typeof e.level > "u" || "number" == typeof e.level)
    }

    function o(e) {
        return "@list" === e._type
    }

    function i(e) {
        return "@span" === e._type
    }

    function s(e) {
        return "@text" === e._type
    }
    let u = ["strong", "em", "code", "underline", "strike-through"];

    function a(e, t, n) {
        if (!r(e) || !e.marks || !e.marks.length) return [];
        let l = e.marks.slice(),
            o = {};
        return l.forEach(e => {
            o[e] = 1;
            for (let l = t + 1; l < n.length; l++) {
                let t = n[l];
                if (t && r(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) o[e]++;
                else break
            }
        }), l.sort((e, t) => (function(e, t, r) {
            let n = e[t],
                l = e[r];
            if (n !== l) return l - n;
            let o = u.indexOf(t),
                i = u.indexOf(r);
            return o !== i ? o - i : t.localeCompare(r)
        })(o, e, t))
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

    function f(e, t) {
        let n = t.level || 1,
            l = t.listItem || "normal",
            i = "string" == typeof t.listItem;
        if (o(e) && (e.level || 1) === n && i && (e.listItem || "normal") === l) return e;
        if (!("children" in e)) return;
        let s = e.children[e.children.length - 1];
        return s && !r(s) ? f(s, t) : void 0
    }
    var p = e.i(3931);
    let d = {
            textDecoration: "underline"
        },
        y = (e, t) => `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
        m = e => y(`block type "${e}"`, "types");

    function h(e) {
        console.warn(e)
    }
    let g = {
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
                    style: d,
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
                    style: g,
                    children: n
                }) : (0, t.jsx)("div", {
                    style: g,
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

    function k(e, t, r) {
        let n = t[r],
            l = e[r];
        return "function" == typeof n || n && "function" == typeof l ? n : n ? {
            ...l,
            ...n
        } : l
    }

    function x(e) {
        let {
            node: t,
            index: n,
            isInline: l,
            renderNode: o
        } = e, i = (function(e) {
            var t;
            let {
                children: n
            } = e, l = e.markDefs ?? [];
            if (!n || !n.length) return [];
            let o = n.map(a),
                i = {
                    _type: "@span",
                    children: [],
                    markType: "<unknown>"
                },
                s = [i];
            for (let e = 0; e < n.length; e++) {
                let i = n[e];
                if (!i) continue;
                let u = o[e] || [],
                    a = 1;
                if (s.length > 1)
                    for (; a < s.length; a++) {
                        let e = (null == (t = s[a]) ? void 0 : t.markKey) || "",
                            r = u.indexOf(e);
                        if (-1 === r) break;
                        u.splice(r, 1)
                    }
                let c = (s = s.slice(0, a))[s.length - 1];
                if (c) {
                    for (let e of u) {
                        let t = null == l ? void 0 : l.find(t => t._key === e),
                            r = t ? t._type : e,
                            n = {
                                _type: "@span",
                                _key: i._key,
                                children: [],
                                markDef: t,
                                markType: r,
                                markKey: e
                            };
                        c.children.push(n), s.push(n), c = n
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
        })(t).map((e, t) => o({
            node: e,
            isInline: !0,
            index: t,
            renderNode: o
        }));
        return {
            _key: t._key || `block-${n}`,
            children: i,
            index: n,
            isInline: l,
            node: t
        }
    }

    function b() {}
    e.s(["PortableText", 0, function({
        value: e,
        components: r,
        listNestingMode: u,
        onMissingComponent: a = h
    }) {
        let d = a || b,
            g = function(e, t) {
                let r, n = [];
                for (let s = 0; s < e.length; s++) {
                    let u = e[s];
                    if (u) {
                        var o, i;
                        if (!l(u)) {
                            n.push(u), r = void 0;
                            continue
                        }
                        if (!r) {
                            r = c(u, s, t), n.push(r);
                            continue
                        }
                        if (o = u, i = r, (o.level || 1) === i.level && o.listItem === i.listItem) {
                            r.children.push(u);
                            continue
                        }
                        if ((u.level || 1) > r.level) {
                            let e = c(u, s, t);
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
                        if ((u.level || 1) < r.level) {
                            let e = n[n.length - 1],
                                l = e && f(e, u);
                            if (l) {
                                (r = l).children.push(u);
                                continue
                            }
                            r = c(u, s, t), n.push(r);
                            continue
                        }
                        if (u.listItem !== r.listItem) {
                            let e = n[n.length - 1],
                                l = e && f(e, {
                                    level: u.level || 1
                                });
                            if (l && l.listItem === u.listItem) {
                                (r = l).children.push(u);
                                continue
                            }
                            r = c(u, s, t), n.push(r);
                            continue
                        }
                        console.warn("Unknown state encountered for block", u), n.push(u)
                    }
                }
                return n
            }(Array.isArray(e) ? e : [e], u || "html"),
            j = (0, p.useMemo)(() => r ? function(e, t) {
                let {
                    block: r,
                    list: n,
                    listItem: l,
                    marks: o,
                    types: i,
                    ...s
                } = t;
                return {
                    ...e,
                    block: k(e, t, "block"),
                    list: k(e, t, "list"),
                    listItem: k(e, t, "listItem"),
                    marks: k(e, t, "marks"),
                    types: k(e, t, "types"),
                    ...s
                }
            }(v, r) : v, [r]),
            w = (0, p.useMemo)(() => {
                var e, r;
                return e = j, r = d,
                    function u(a) {
                        var c, f, p, d, h, g, v, k;
                        let b, j, {
                                node: w,
                                index: I,
                                isInline: O
                            } = a,
                            _ = w._key || `node-${I}`;
                        return o(w) ? function(n, l, o) {
                            let i = n.children.map((e, t) => u({
                                    node: e._key ? e : {
                                        ...e,
                                        _key: `li-${l}-${t}`
                                    },
                                    index: t,
                                    isInline: !1
                                })),
                                s = e.list,
                                a = ("function" == typeof s ? s : s[n.listItem]) || e.unknownList;
                            if (a === e.unknownList) {
                                let e = n.listItem || "bullet";
                                r(y(`list style "${e}"`, "list"), {
                                    nodeType: "listStyle",
                                    type: e
                                })
                            }
                            return (0, t.jsx)(a, {
                                value: n,
                                index: l,
                                isInline: !1,
                                renderNode: u,
                                children: i
                            }, o)
                        }(w, I, _) : l(w) ? function(n, l, o) {
                            let i = x({
                                    node: n,
                                    index: l,
                                    isInline: !1,
                                    renderNode: u
                                }),
                                s = e.listItem,
                                a = ("function" == typeof s ? s : s[n.listItem]) || e.unknownListItem;
                            if (a === e.unknownListItem) {
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
                                c = u({
                                    node: t,
                                    index: l,
                                    isInline: !1
                                })
                            }
                            return (0, t.jsx)(a, {
                                value: n,
                                index: l,
                                isInline: !1,
                                renderNode: u,
                                children: c
                            }, o)
                        }(w, I, _) : i(w) ? function(n, l) {
                            let {
                                markDef: o,
                                markType: a,
                                markKey: c
                            } = n, f = e.marks[a] || e.unknownMark, p = n.children.map((e, t) => u({
                                node: e,
                                index: t,
                                isInline: !0
                            }));
                            return f === e.unknownMark && r(y(`mark type "${a}"`, "marks"), {
                                nodeType: "mark",
                                type: a
                            }), (0, t.jsx)(f, {
                                text: function e(t) {
                                    let r = "";
                                    return t.children.forEach(t => {
                                        s(t) ? r += t.text : i(t) && (r += e(t))
                                    }), r
                                }(n),
                                value: o,
                                markType: a,
                                markKey: c,
                                renderNode: u,
                                children: p
                            }, l)
                        }(w, _) : w._type in e.types ? (c = w, f = I, p = _, d = O, (b = e.types[c._type]) ? (0, t.jsx)(b, {
                            value: c,
                            isInline: d,
                            index: f,
                            renderNode: u
                        }, p) : null) : n(w) ? function(n, l, o, i) {
                            let {
                                _key: s,
                                ...a
                            } = x({
                                node: n,
                                index: l,
                                isInline: i,
                                renderNode: u
                            }), c = a.node.style || "normal", f = ("function" == typeof e.block ? e.block : e.block[c]) || e.unknownBlockStyle;
                            return f === e.unknownBlockStyle && r(y(`block style "${c}"`, "block"), {
                                nodeType: "blockStyle",
                                type: c
                            }), (0, t.jsx)(f, {
                                ...a,
                                value: a.node,
                                renderNode: u
                            }, o)
                        }(w, I, _, O) : s(w) ? function(r, n) {
                            if (r.text === `
`) {
                                let r = e.hardBreak;
                                return r ? (0, t.jsx)(r, {}, n) : `
`
                            }
                            return r.text
                        }(w, _) : (h = w, g = I, v = _, k = O, r(m(h._type), {
                            nodeType: "block",
                            type: h._type
                        }), j = e.unknownType, (0, t.jsx)(j, {
                            value: h,
                            isInline: k,
                            index: g,
                            renderNode: u
                        }, v))
                    }
            }, [j, d]),
            I = g.map((e, t) => w({
                node: e,
                index: t,
                isInline: !1,
                renderNode: w
            }));
        return (0, t.jsx)(t.Fragment, {
            children: I
        })
    }], 722990)
}, 505918, (e, t, r) => {
    t.exports = e.g && e.g.Object === Object && e.g
}, 78974, (e, t, r) => {
    var n = e.r(505918),
        l = "object" == typeof self && self && self.Object === Object && self;
    t.exports = n || l || Function("return this")()
}, 328042, (e, t, r) => {
    t.exports = e.r(78974).Symbol
}, 684435, (e, t, r) => {
    var n = e.r(328042),
        l = Object.prototype,
        o = l.hasOwnProperty,
        i = l.toString,
        s = n ? n.toStringTag : void 0;
    t.exports = function(e) {
        var t = o.call(e, s),
            r = e[s];
        try {
            e[s] = void 0;
            var n = !0
        } catch (e) {}
        var l = i.call(e);
        return n && (t ? e[s] = r : delete e[s]), l
    }
}, 933680, (e, t, r) => {
    var n = Object.prototype.toString;
    t.exports = function(e) {
        return n.call(e)
    }
}, 416907, (e, t, r) => {
    var n = e.r(328042),
        l = e.r(684435),
        o = e.r(933680),
        i = n ? n.toStringTag : void 0;
    t.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? l(e) : o(e)
    }
}, 394022, (e, t, r) => {
    t.exports = function(e) {
        return null != e && "object" == typeof e
    }
}, 778116, (e, t, r) => {
    t.exports = Array.isArray
}, 692558, (e, t, r) => {
    var n = e.r(416907),
        l = e.r(394022);
    t.exports = function(e) {
        return "symbol" == typeof e || l(e) && "[object Symbol]" == n(e)
    }
}, 878524, (e, t, r) => {
    t.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, 462931, (e, t, r) => {
    var n = e.r(416907),
        l = e.r(878524);
    t.exports = function(e) {
        if (!l(e)) return !1;
        var t = n(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
}, 118309, (e, t, r) => {
    t.exports = e.r(78974)["__core-js_shared__"]
}, 799822, (e, t, r) => {
    var n, l = e.r(118309),
        o = (n = /[^.]+$/.exec(l && l.keys && l.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
    t.exports = function(e) {
        return !!o && o in e
    }
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
}, 143245, (e, t, r) => {
    var n = e.r(462931),
        l = e.r(799822),
        o = e.r(878524),
        i = e.r(908829),
        s = /^\[object .+?Constructor\]$/,
        u = Object.prototype,
        a = Function.prototype.toString,
        c = u.hasOwnProperty,
        f = RegExp("^" + a.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(e) {
        return !(!o(e) || l(e)) && (n(e) ? f : s).test(i(e))
    }
}, 92117, (e, t, r) => {
    t.exports = function(e, t) {
        return null == e ? void 0 : e[t]
    }
}, 581511, (e, t, r) => {
    var n = e.r(143245),
        l = e.r(92117);
    t.exports = function(e, t) {
        var r = l(e, t);
        return n(r) ? r : void 0
    }
}, 475200, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["default", 0, (e = 768) => {
        let [r, n] = (0, t.useState)(window.innerWidth <= e);
        return (0, t.useEffect)(() => {
            let t = () => {
                n(window.innerWidth <= e)
            };
            return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
        }, []), r
    }])
}, 239273, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["default", 0, e => {
        let [r, n] = (0, t.useState)("");
        return (0, t.useEffect)(() => {
            n(document.cookie)
        }, []), [(0, t.useMemo)(() => r?.split("; ")?.find(t => t.includes(e)), [r, e])]
    }])
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
}, 153348, e => {
    "use strict";
    var t = e.i(3931),
        r = e.i(369710);
    let n = {
        some: 0,
        all: 1
    };
    e.s(["useInView", 0, function(e, {
        root: l,
        margin: o,
        amount: i,
        once: s = !1,
        initial: u = !1
    } = {}) {
        let [a, c] = (0, t.useState)(u);
        return (0, t.useEffect)(() => {
            if (!e.current || s && a) return;
            let t = {
                root: l && l.current || void 0,
                margin: o,
                amount: i
            };
            return function(e, t, {
                root: l,
                margin: o,
                amount: i = "some"
            } = {}) {
                let s = (0, r.resolveElements)(e),
                    u = new WeakMap,
                    a = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = u.get(e.target);
                            if (!!r !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let r = t(e.target, e);
                                    "function" == typeof r ? u.set(e.target, r) : a.unobserve(e.target)
                                } else "function" == typeof r && (r(e), u.delete(e.target))
                        })
                    }, {
                        root: l,
                        rootMargin: o,
                        threshold: "number" == typeof i ? i : n[i]
                    });
                return s.forEach(e => a.observe(e)), () => a.disconnect()
            }(e.current, () => (c(!0), s ? void 0 : () => c(!1)), t)
        }, [l, e, o, s, i]), a
    }], 153348)
}, 193863, (e, t, r) => {
    e.e, t.exports = function(e, t) {
        if (void 0 == t && (t = {
                fuzzy: !0
            }), /youtu\.?be/.test(e)) {
            var r, n = [/youtu\.be\/([^#\&\?]{11})/, /\?v=([^#\&\?]{11})/, /\&v=([^#\&\?]{11})/, /embed\/([^#\&\?]{11})/, /\/v\/([^#\&\?]{11})/];
            for (r = 0; r < n.length; ++r)
                if (n[r].test(e)) return n[r].exec(e)[1];
            if (t.fuzzy) {
                var l = e.split(/[\/\&\?=#\.\s]/g);
                for (r = 0; r < l.length; ++r)
                    if (/^[^#\&\?]{11}$/.test(l[r])) return l[r]
            }
        }
        return null
    }
}, 764138, (e, t, r) => {
    t.exports = e.r(581511)(e.r(78974), "Map")
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4647510d-3b00-546c-82dd-485e99858de3")
    } catch (e) {}
}();
//# debugId=4647510d-3b00-546c-82dd-485e99858de3