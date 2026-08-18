(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 229696, e => {
    "use strict";
    var t, r, n = e.i(499531);

    function o() {
        return (o = Object.assign.bind()).apply(this, arguments)
    }
    let l = ["children", "options"],
        a = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), {
            for: "htmlFor"
        }),
        i = {
            amp: "&",
            apos: "'",
            gt: ">",
            lt: "<",
            nbsp: " ",
            quot: "“"
        },
        s = ["style", "script"],
        u = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
        c = /mailto:/i,
        p = /\n{2,}$/,
        f = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
        d = /^ *> ?/gm,
        h = /^ {2,}\n/,
        y = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
        v = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
        g = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        m = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        x = /^(?:\n *)*\n/,
        b = /\r\n?/g,
        k = /^\[\^([^\]]+)](:.*)\n/,
        _ = /^\[\^([^\]]+)]/,
        O = /\f/g,
        w = /^\s*?\[(x|\s)\]/,
        T = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        H = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        P = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
        C = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
        E = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        S = /^<!--[\s\S]*?(?:-->)/,
        M = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        L = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        A = /^\{.*\}$/,
        $ = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        I = /^<([^ >]+@[^ >]+)>/,
        j = /^<([^ >]+:\/[^ >]+)>/,
        z = /-([a-z])?/gi,
        B = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
        D = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        N = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        G = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        F = /(\[|\])/g,
        R = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
        U = /\t/g,
        W = /^ *\| */,
        X = /(^ *\||\| *$)/g,
        V = / *$/,
        K = /^ *:-+: *$/,
        Z = /^ *:-+ *$/,
        q = /^ *-+: *$/,
        Q = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
        J = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
        Y = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
        ee = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
        et = /^\\([^0-9A-Za-z\s])/,
        er = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
        en = /^\n+/,
        eo = /^([ \t]*)/,
        el = /\\([^\\])/g,
        ea = / *\n+$/,
        ei = /(?:^|\n)( *)$/,
        es = "(?:\\d+\\.)",
        eu = "(?:[*+-])";

    function ec(e) {
        return "( *)(" + (1 === e ? es : eu) + ") +"
    }
    let ep = ec(1),
        ef = ec(2);

    function ed(e) {
        return RegExp("^" + (1 === e ? ep : ef))
    }
    let eh = ed(1),
        ey = ed(2);

    function ev(e) {
        return RegExp("^" + (1 === e ? ep : ef) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? es : eu) + " )[^\\n]*)*(\\n|$)", "gm")
    }
    let eg = ev(1),
        em = ev(2);

    function ex(e) {
        let t = 1 === e ? es : eu;
        return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)")
    }
    let eb = ex(1),
        ek = ex(2);

    function e_(e, t) {
        let n = 1 === t,
            o = n ? eb : ek,
            l = n ? eg : em,
            a = n ? eh : ey;
        return {
            t(e, t, r) {
                let n = ei.exec(r);
                return n && (t.o || !t._ && !t.u) ? o.exec(e = n[1] + e) : null
            },
            i: r.HIGH,
            l(e, t, r) {
                let o = n ? +e[2] : void 0,
                    i = e[0].replace(p, "\n").match(l),
                    s = !1;
                return {
                    p: i.map(function(e, n) {
                        let o, l = RegExp("^ {1," + a.exec(e)[0].length + "}", "gm"),
                            u = e.replace(l, "").replace(a, ""),
                            c = n === i.length - 1,
                            p = -1 !== u.indexOf("\n\n") || c && s;
                        s = p;
                        let f = r._,
                            d = r.o;
                        r.o = !0, p ? (r._ = !1, o = u.replace(ea, "\n\n")) : (r._ = !0, o = u.replace(ea, ""));
                        let h = t(o, r);
                        return r._ = f, r.o = d, h
                    }),
                    m: n,
                    g: o
                }
            },
            h: (t, r, n) => e(t.m ? "ol" : "ul", {
                key: n.k,
                start: t.g
            }, t.p.map(function(t, o) {
                return e("li", {
                    key: o
                }, r(t, n))
            }))
        }
    }
    let eO = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        ew = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eT = [f, v, g, T, P, H, S, B, eg, eb, em, ek],
        eH = [...eT, /^[^\n]+(?:  \n|\n{2,})/, C, L];

    function eP(e) {
        return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
    }

    function eC(e) {
        return q.test(e) ? "right" : K.test(e) ? "center" : Z.test(e) ? "left" : null
    }

    function eE(e, t, r) {
        let n = r.$;
        r.$ = !0;
        let o = t(e.trim(), r);
        r.$ = n;
        let l = [
            []
        ];
        return o.forEach(function(e, t) {
            "tableSeparator" === e.type ? 0 !== t && t !== o.length - 1 && l.push([]) : ("text" !== e.type || null != o[t + 1] && "tableSeparator" !== o[t + 1].type || (e.v = e.v.replace(V, "")), l[l.length - 1].push(e))
        }), l
    }

    function eS(e, t, r) {
        var n;
        r._ = !0;
        let o = eE(e[1], t, r),
            l = e[2].replace(X, "").split("|").map(eC),
            a = (n = e[3], n.trim().split("\n").map(function(e) {
                return eE(e, t, r)
            }));
        return r._ = !1, {
            S: l,
            A: a,
            L: o,
            type: "table"
        }
    }

    function eM(e, t) {
        return null == e.S[t] ? {} : {
            textAlign: e.S[t]
        }
    }

    function eL(e) {
        return function(t, r) {
            return r._ ? e.exec(t) : null
        }
    }

    function eA(e) {
        return function(t, r) {
            return r._ || r.u ? e.exec(t) : null
        }
    }

    function e$(e) {
        return function(t, r) {
            return r._ || r.u ? null : e.exec(t)
        }
    }

    function eI(e) {
        return function(t) {
            return e.exec(t)
        }
    }

    function ej(e, t, r) {
        if (t._ || t.u || r && !r.endsWith("\n")) return null;
        let n = "";
        e.split("\n").every(e => !eT.some(t => t.test(e)) && (n += e + "\n", e.trim()));
        let o = n.trimEnd();
        return "" == o ? null : [n, o]
    }

    function ez(e) {
        try {
            if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return
        } catch (e) {
            return null
        }
        return e
    }

    function eB(e) {
        return e.replace(el, "$1")
    }

    function eD(e, t, r) {
        let n = r._ || !1,
            o = r.u || !1;
        r._ = !0, r.u = !0;
        let l = e(t, r);
        return r._ = n, r.u = o, l
    }

    function eN(e, t, r) {
        return r._ = !1, e(t, r)
    }
    let eG = (e, t, r) => ({
        v: eD(t, e[1], r)
    });

    function eF() {
        return {}
    }

    function eR() {
        return null
    }

    function eU(e, t, r) {
        let n = e,
            o = t.split(".");
        for (; o.length && void 0 !== (n = n[o[0]]);) o.shift();
        return n || r
    }(t = r || (r = {}))[t.MAX = 0] = "MAX", t[t.HIGH = 1] = "HIGH", t[t.MED = 2] = "MED", t[t.LOW = 3] = "LOW", t[t.MIN = 4] = "MIN", e.s(["default", 0, e => {
        let {
            children: t,
            options: p
        } = e, X = function(e, t) {
            if (null == e) return {};
            var r, n, o = {},
                l = Object.keys(e);
            for (n = 0; n < l.length; n++) t.indexOf(r = l[n]) >= 0 || (o[r] = e[r]);
            return o
        }(e, l);
        return n.cloneElement(function(e, t = {}) {
            var l;
            let p;
            t.overrides = t.overrides || {}, t.slugify = t.slugify || eP, t.namedCodesToUnicode = t.namedCodesToUnicode ? o({}, i, t.namedCodesToUnicode) : i;
            let X = t.createElement || n.createElement;

            function V(e, r, ...n) {
                var l;
                let a, i = eU(t.overrides, `${e}.props`, {});
                return X((a = eU(l = t.overrides, e)) ? "function" == typeof a || "object" == typeof a && "render" in a ? a : eU(l, `${e}.component`, e) : e, o({}, r, i, {
                    className: function(...e) {
                        return e.filter(Boolean).join(" ")
                    }(null == r ? void 0 : r.className, i.className) || void 0
                }), ...n)
            }

            function K(e) {
                let r, o = !1;
                t.forceInline ? o = !0 : t.forceBlock || (o = !1 === R.test(e));
                let l = es(ei(o ? e : `${e.trimEnd().replace(en,"")}

`, {
                    _: o
                }));
                for (;
                    "string" == typeof l[l.length - 1] && !l[l.length - 1].trim();) l.pop();
                if (null === t.wrapper) return l;
                let a = t.wrapper || (o ? "span" : "div");
                if (l.length > 1 || t.forceWrapper) r = l;
                else {
                    if (1 === l.length) return "string" == typeof(r = l[0]) ? V("span", {
                        key: "outer"
                    }, r) : r;
                    r = null
                }
                return n.createElement(a, {
                    key: "outer"
                }, r)
            }

            function Z(e) {
                let t = e.match(u);
                return t ? t.reduce(function(e, t, r) {
                    let o = t.indexOf("=");
                    if (-1 !== o) {
                        var l, i, s;
                        let u, c = (-1 !== (l = t.slice(0, o)).indexOf("-") && null === l.match(M) && (l = l.replace(z, function(e, t) {
                                return t.toUpperCase()
                            })), l).trim(),
                            p = ('"' === (u = (i = t.slice(o + 1).trim())[0]) || "'" === u) && i.length >= 2 && i[i.length - 1] === u ? i.slice(1, -1) : i,
                            f = a[c] || c,
                            d = e[f] = (s = p, "style" === c ? s.split(/;\s?/).reduce(function(e, t) {
                                let r = t.slice(0, t.indexOf(":"));
                                return e[r.replace(/(-[a-z])/g, e => e[1].toUpperCase())] = t.slice(r.length + 1).trim(), e
                            }, {}) : "href" === c ? ez(s) : (s.match(A) && (s = s.slice(1, s.length - 1)), "true" === s || "false" !== s && s));
                        "string" == typeof d && (C.test(d) || L.test(d)) && (e[f] = n.cloneElement(K(d.trim()), {
                            key: r
                        }))
                    } else "style" !== t && (e[a[t] || t] = !0);
                    return e
                }, {}) : null
            }
            let q = [],
                el = {},
                ea = {
                    blockQuote: {
                        t: e$(f),
                        i: r.HIGH,
                        l: (e, t, r) => ({
                            v: t(e[0].replace(d, ""), r)
                        }),
                        h: (e, t, r) => V("blockquote", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    breakLine: {
                        t: eI(h),
                        i: r.HIGH,
                        l: eF,
                        h: (e, t, r) => V("br", {
                            key: r.k
                        })
                    },
                    breakThematic: {
                        t: e$(y),
                        i: r.HIGH,
                        l: eF,
                        h: (e, t, r) => V("hr", {
                            key: r.k
                        })
                    },
                    codeBlock: {
                        t: e$(g),
                        i: r.MAX,
                        l: e => ({
                            v: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
                            M: void 0
                        }),
                        h: (e, t, r) => V("pre", {
                            key: r.k
                        }, V("code", o({}, e.O, {
                            className: e.M ? `lang-${e.M}` : ""
                        }), e.v))
                    },
                    codeFenced: {
                        t: e$(v),
                        i: r.MAX,
                        l: e => ({
                            O: Z(e[3] || ""),
                            v: e[4],
                            M: e[2] || void 0,
                            type: "codeBlock"
                        })
                    },
                    codeInline: {
                        t: eA(m),
                        i: r.LOW,
                        l: e => ({
                            v: e[2]
                        }),
                        h: (e, t, r) => V("code", {
                            key: r.k
                        }, e.v)
                    },
                    footnote: {
                        t: e$(k),
                        i: r.MAX,
                        l: e => (q.push({
                            I: e[2],
                            j: e[1]
                        }), {}),
                        h: eR
                    },
                    footnoteReference: {
                        t: eL(_),
                        i: r.HIGH,
                        l: e => ({
                            v: e[1],
                            B: `#${t.slugify(e[1])}`
                        }),
                        h: (e, t, r) => V("a", {
                            key: r.k,
                            href: ez(e.B)
                        }, V("sup", {
                            key: r.k
                        }, e.v))
                    },
                    gfmTask: {
                        t: eL(w),
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
                        t: e$(t.enforceAtxHeadings ? H : T),
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
                        t: e$(P),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: eD(t, e[1], r),
                            C: "=" === e[2] ? 1 : 2,
                            type: "heading"
                        })
                    },
                    htmlComment: {
                        t: eI(S),
                        i: r.HIGH,
                        l: () => ({}),
                        h: eR
                    },
                    image: {
                        t: eA(ew),
                        i: r.HIGH,
                        l: e => ({
                            D: e[1],
                            B: eB(e[2]),
                            F: e[3]
                        }),
                        h: (e, t, r) => V("img", {
                            key: r.k,
                            alt: e.D || void 0,
                            title: e.F || void 0,
                            src: ez(e.B)
                        })
                    },
                    link: {
                        t: eL(eO),
                        i: r.LOW,
                        l: (e, t, r) => {
                            var n;
                            let o, l, a;
                            return {
                                v: (n = e[1], o = r._ || !1, l = r.u || !1, r._ = !1, r.u = !0, a = t(n, r), r._ = o, r.u = l, a),
                                B: eB(e[2]),
                                F: e[3]
                            }
                        },
                        h: (e, t, r) => V("a", {
                            key: r.k,
                            href: ez(e.B),
                            title: e.F
                        }, t(e.v, r))
                    },
                    linkAngleBraceStyleDetector: {
                        t: eL(j),
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
                        t: (e, t) => t.N ? null : eL($)(e, t),
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
                        t: eL(I),
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
                    orderedList: e_(V, 1),
                    unorderedList: e_(V, 2),
                    newlineCoalescer: {
                        t: e$(x),
                        i: r.LOW,
                        l: eF,
                        h: () => "\n"
                    },
                    paragraph: {
                        t: ej,
                        i: r.LOW,
                        l: eG,
                        h: (e, t, r) => V("p", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    ref: {
                        t: eL(D),
                        i: r.MAX,
                        l: e => (el[e[1]] = {
                            B: e[2],
                            F: e[4]
                        }, {}),
                        h: eR
                    },
                    refImage: {
                        t: eA(N),
                        i: r.MAX,
                        l: e => ({
                            D: e[1] || void 0,
                            P: e[2]
                        }),
                        h: (e, t, r) => V("img", {
                            key: r.k,
                            alt: e.D,
                            src: ez(el[e.P].B),
                            title: el[e.P].F
                        })
                    },
                    refLink: {
                        t: eL(G),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: t(e[1], r),
                            Z: t(e[0].replace(F, "\\$1"), r),
                            P: e[2]
                        }),
                        h: (e, t, r) => el[e.P] ? V("a", {
                            key: r.k,
                            href: ez(el[e.P].B),
                            title: el[e.P].F
                        }, t(e.v, r)) : V("span", {
                            key: r.k
                        }, t(e.Z, r))
                    },
                    table: {
                        t: e$(B),
                        i: r.HIGH,
                        l: eS,
                        h: (e, t, r) => V("table", {
                            key: r.k
                        }, V("thead", null, V("tr", null, e.L.map(function(n, o) {
                            return V("th", {
                                key: o,
                                style: eM(e, o)
                            }, t(n, r))
                        }))), V("tbody", null, e.A.map(function(n, o) {
                            return V("tr", {
                                key: o
                            }, n.map(function(n, o) {
                                return V("td", {
                                    key: o,
                                    style: eM(e, o)
                                }, t(n, r))
                            }))
                        })))
                    },
                    tableSeparator: {
                        t: function(e, t) {
                            return t.$ ? (t._ = !0, W.exec(e)) : null
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
                        t: eI(er),
                        i: r.MIN,
                        l: e => ({
                            v: e[0].replace(E, (e, r) => t.namedCodesToUnicode[r] ? t.namedCodesToUnicode[r] : e)
                        }),
                        h: e => e.v
                    },
                    textBolded: {
                        t: eA(Q),
                        i: r.MED,
                        l: (e, t, r) => ({
                            v: t(e[2], r)
                        }),
                        h: (e, t, r) => V("strong", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textEmphasized: {
                        t: eA(J),
                        i: r.LOW,
                        l: (e, t, r) => ({
                            v: t(e[2], r)
                        }),
                        h: (e, t, r) => V("em", {
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
                        t: eA(Y),
                        i: r.LOW,
                        l: eG,
                        h: (e, t, r) => V("mark", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textStrikethroughed: {
                        t: eA(ee),
                        i: r.LOW,
                        l: eG,
                        h: (e, t, r) => V("del", {
                            key: r.k
                        }, t(e.v, r))
                    }
                };
            !0 !== t.disableParsingRawHTML && (ea.htmlBlock = {
                t: eI(C),
                i: r.HIGH,
                l(e, t, r) {
                    let [, n] = e[3].match(eo), o = RegExp(`^${n}`, "gm"), l = e[3].replace(o, ""), a = eH.some(e => e.test(l)) ? eN : eD, i = e[1].toLowerCase(), u = -1 !== s.indexOf(i);
                    r.N = r.N || "a" === i;
                    let c = u ? e[3] : a(t, l, r);
                    return r.N = !1, {
                        O: Z(e[2]),
                        v: c,
                        G: u,
                        H: u ? i : e[1]
                    }
                },
                h: (e, t, r) => V(e.H, o({
                    key: r.k
                }, e.O), e.G ? e.v : t(e.v, r))
            }, ea.htmlSelfClosing = {
                t: eI(L),
                i: r.HIGH,
                l: e => ({
                    O: Z(e[2] || ""),
                    H: e[1]
                }),
                h: (e, t, r) => V(e.H, o({}, e.O, {
                    key: r.k
                }))
            });
            let ei = ((p = Object.keys(ea)).sort(function(e, t) {
                    let r = ea[e].i,
                        n = ea[t].i;
                    return r !== n ? r - n : e < t ? -1 : 1
                }), function(e, t) {
                    return function e(t, r) {
                        let n = [],
                            o = "";
                        for (; t;) {
                            let l = 0;
                            for (; l < p.length;) {
                                let a = p[l],
                                    i = ea[a],
                                    s = i.t(t, r, o);
                                if (s) {
                                    let l = s[0];
                                    t = t.substring(l.length);
                                    let u = i.l(s, e, r);
                                    null == u.type && (u.type = a), n.push(u), o = l;
                                    break
                                }
                                l++
                            }
                        }
                        return n
                    }(e.replace(b, "\n").replace(O, "").replace(U, "    "), t)
                }),
                es = (l = function(e, t, r) {
                    return ea[e.type].h(e, t, r)
                }, function e(t, r = {}) {
                    if (Array.isArray(t)) {
                        let n = r.k,
                            o = [],
                            l = !1;
                        for (let n = 0; n < t.length; n++) {
                            r.k = n;
                            let a = e(t[n], r),
                                i = "string" == typeof a;
                            i && l ? o[o.length - 1] += a : null !== a && o.push(a), l = i
                        }
                        return r.k = n, o
                    }
                    return l(t, e, r)
                }),
                eu = K(e);
            return q.length ? V("div", null, eu, V("footer", {
                key: "footer"
            }, q.map(function(e) {
                return V("div", {
                    id: t.slugify(e.j),
                    key: e.j
                }, e.j, es(ei(e.I, {
                    _: !0
                })))
            }))) : eu
        }(t, p), X)
    }])
}, 999912, e => {
    "use strict";
    var t = e.i(512985),
        r = e.i(499531);
    let n = {},
        o = 0,
        l = !1,
        a = null,
        i = null;
    e.s(["useTooltipTriggerState", 0, function(e = {}) {
        let {
            delay: s = 1500,
            closeDelay: u = 500
        } = e, {
            isOpen: c,
            open: p,
            close: f
        } = (0, t.useOverlayTriggerState)(e), d = (0, r.useMemo)(() => `${++o}`, []), h = (0, r.useRef)(null), y = (0, r.useRef)(f), v = () => {
            n[d] = x
        }, g = () => {
            for (let e in n) e !== d && (n[e](!0), delete n[e])
        }, m = () => {
            h.current && clearTimeout(h.current), h.current = null, g(), v(), l = !0, p(), a && (clearTimeout(a), a = null), i && (clearTimeout(i), i = null)
        }, x = e => {
            e || u <= 0 ? (h.current && clearTimeout(h.current), h.current = null, y.current()) : h.current || (h.current = setTimeout(() => {
                h.current = null, y.current()
            }, u)), a && (clearTimeout(a), a = null), l && (i && clearTimeout(i), i = setTimeout(() => {
                delete n[d], i = null, l = !1
            }, Math.max(500, u)))
        };
        return (0, r.useEffect)(() => {
            y.current = f
        }, [f]), (0, r.useEffect)(() => () => {
            h.current && clearTimeout(h.current), n[d] && delete n[d]
        }, [d]), {
            isOpen: c,
            open: e => {
                e || !(s > 0) || h.current ? m() : (g(), v(), c || l ? c || m() : (a && clearTimeout(a), a = setTimeout(() => {
                    a = null, l = !0, m()
                }, s)))
            },
            close: x
        }
    }])
}, 619393, e => {
    "use strict";
    var t = e.i(679933),
        r = e.i(429305),
        n = e.i(355770);
    e.s(["useTooltip", 0, function(e, o) {
        let l = (0, t.filterDOMProps)(e, {
                labelable: !0
            }),
            {
                hoverProps: a
            } = (0, n.useHover)({
                onHoverStart: () => o?.open(!0),
                onHoverEnd: () => o?.close()
            });
        return {
            tooltipProps: (0, r.mergeProps)(l, a, {
                role: "tooltip"
            })
        }
    }])
}, 495533, e => {
    "use strict";
    var t = e.i(816862),
        r = e.i(429305),
        n = e.i(513485),
        o = e.i(355770),
        l = e.i(823512),
        a = e.i(499531);
    e.s(["useTooltipTrigger", 0, function(e, i, s) {
        let {
            isDisabled: u,
            trigger: c,
            shouldCloseOnPress: p = !0
        } = e, f = (0, l.useId)(), d = (0, a.useRef)(!1), h = (0, a.useRef)(!1), y = () => {
            (d.current || h.current) && i.open(h.current)
        }, v = e => {
            d.current || h.current || i.close(e)
        };
        (0, a.useEffect)(() => {
            let e = e => {
                s && s.current && "Escape" === e.key && (e.stopPropagation(), i.close(!0))
            };
            if (i.isOpen) return document.addEventListener("keydown", e, !0), () => {
                document.removeEventListener("keydown", e, !0)
            }
        }, [s, i]);
        let g = () => {
                p && (h.current = !1, d.current = !1, v(!0))
            },
            {
                hoverProps: m
            } = (0, o.useHover)({
                isDisabled: u,
                onHoverStart: () => {
                    "focus" !== c && ("pointer" === (0, t.getInteractionModality)() ? d.current = !0 : d.current = !1, y())
                },
                onHoverEnd: () => {
                    "focus" !== c && (h.current = !1, d.current = !1, v())
                }
            }),
            {
                focusableProps: x
            } = (0, n.useFocusable)({
                isDisabled: u,
                onFocus: () => {
                    (0, t.isFocusVisible)() && (h.current = !0, y())
                },
                onBlur: () => {
                    h.current = !1, d.current = !1, v(!0)
                }
            }, s);
        return {
            triggerProps: {
                "aria-describedby": i.isOpen ? f : void 0,
                ...(0, r.mergeProps)(x, m, {
                    onPointerDown: g,
                    onKeyDown: g
                }),
                tabIndex: void 0
            },
            tooltipProps: {
                id: f
            }
        }
    }])
}, 206775, 652955, e => {
    "use strict";
    var t = e.i(14666),
        r = e.i(722978);
    e.s(["default", 0, ({
        className: e,
        children: n,
        size: o = "medium",
        ...l
    }) => {
        let a = (0, r.default)("bg-gray-100 text-gray-600 text-tiny-bold dark:bg-gray-900 dark:text-gray-200 rounded-md", {
            small: "px-2 py-1",
            medium: "p-2"
        } [o], e);
        return (0, t.jsx)("span", {
            className: a,
            ...l,
            children: n
        })
    }], 206775);
    var n = e.i(499531),
        o = e.i(999912),
        l = e.i(619393),
        a = e.i(495533),
        i = e.i(429305);
    let s = ({
        state: e,
        content: n,
        hasArrow: o,
        placement: a,
        ...s
    }) => {
        let {
            tooltipProps: u
        } = (0, l.useTooltip)(s, e);
        return (0, t.jsx)("span", {
            className: (0, r.default)("text-tiny absolute z-10 w-max max-w-[180px] rounded-lg bg-white p-4 text-left text-gray-900 drop-shadow-lg dark:bg-gray-800 dark:text-gray-100", (e => {
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
            })(a), o && (e => {
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
            ...(0, i.mergeProps)(s, u),
            children: n
        })
    };
    e.s(["default", 0, ({
        content: e,
        placement: r = "bottom",
        hasArrow: l = !0,
        tooltipOptions: i = {
            delay: 300,
            closeDelay: 0,
            isDisabled: !1
        },
        children: u
    }) => {
        let c = (0, o.useTooltipTriggerState)(i),
            p = (0, n.useRef)(null),
            {
                triggerProps: f,
                tooltipProps: d
            } = (0, a.useTooltipTrigger)(i, c, p);
        return (0, t.jsxs)("span", {
            className: "relative",
            children: [(0, t.jsx)("span", {
                ref: p,
                ...f,
                children: u
            }), c.isOpen && (0, t.jsx)(s, {
                state: c,
                content: e,
                placement: r,
                hasArrow: l,
                ...d
            })]
        })
    }], 652955)
}, 363737, 873749, e => {
    "use strict";
    var t = e.i(14666),
        r = e.i(499531),
        n = e.i(513976),
        o = e.i(666747),
        l = e.i(419476),
        a = e.i(429305),
        i = e.i(690910);

    function s(e, t, s) {
        let {
            overlayProps: u,
            underlayProps: c
        } = (0, l.useOverlay)({
            ...e,
            isOpen: t.isOpen,
            onClose: t.close
        }, s);
        return (0, i.usePreventScroll)({
            isDisabled: !t.isOpen
        }), (0, n.useOverlayFocusContain)(), (0, r.useEffect)(() => {
            if (t.isOpen && s.current) return (0, o.ariaHideOutside)([s.current], {
                shouldUseInert: !0
            })
        }, [t.isOpen, s]), {
            modalProps: (0, a.mergeProps)(u),
            underlayProps: c
        }
    }
    e.s(["useModalOverlay", 0, s], 873749);
    var u = e.i(468689),
        c = e.i(512985),
        p = e.i(749583);
    let f = ({
            state: e,
            children: o,
            ...l
        }) => {
            let a = (0, r.useRef)(null),
                {
                    modalProps: i,
                    underlayProps: u
                } = s({
                    ...l
                }, e, a);
            return (0, r.useEffect)(() => {
                let t = a.current?.querySelector("div"),
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
                    ...u,
                    children: (0, t.jsx)("div", {
                        ref: a,
                        ...i,
                        className: "contents",
                        children: o
                    })
                })
            })
        },
        d = ({
            actionLabel: e,
            children: n,
            showTriggerButton: o = !0,
            ...l
        }) => {
            let a = (0, c.useOverlayTriggerState)({
                    ...l
                }),
                {
                    triggerProps: i,
                    overlayProps: s
                } = (0, u.useOverlayTrigger)({
                    type: "dialog"
                }, a);
            return (0, t.jsxs)(t.Fragment, {
                children: [o && (0, t.jsx)(p.default, {
                    rounded: !0,
                    hasArrow: !0,
                    ...i,
                    children: e
                }), a.isOpen && (0, t.jsx)(f, {
                    state: a,
                    ...l,
                    isDismissable: !0,
                    children: "function" == typeof n ? (0, r.cloneElement)(n(a.close), s) : (0, r.cloneElement)(n, s)
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
}, 764138, (e, t, r) => {
    t.exports = e.r(581511)(e.r(78974), "Map")
}, 647562, (e, t, r) => {
    var n = e.r(778116),
        o = e.r(692558),
        l = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        a = /^\w*$/;
    t.exports = function(e, t) {
        if (n(e)) return !1;
        var r = typeof e;
        return !!("number" == r || "symbol" == r || "boolean" == r || null == e || o(e)) || a.test(e) || !l.test(e) || null != t && e in Object(t)
    }
}, 977902, (e, t, r) => {
    t.exports = e.r(581511)(Object, "create")
}, 708867, (e, t, r) => {
    var n = e.r(977902);
    t.exports = function() {
        this.__data__ = n ? n(null) : {}, this.size = 0
    }
}, 447265, (e, t, r) => {
    t.exports = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= !!t, t
    }
}, 150095, (e, t, r) => {
    var n = e.r(977902),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        if (n) {
            var r = t[e];
            return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return o.call(t, e) ? t[e] : void 0
    }
}, 884942, (e, t, r) => {
    var n = e.r(977902),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        return n ? void 0 !== t[e] : o.call(t, e)
    }
}, 855558, (e, t, r) => {
    var n = e.r(977902);
    t.exports = function(e, t) {
        var r = this.__data__;
        return this.size += +!this.has(e), r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t, this
    }
}, 298435, (e, t, r) => {
    var n = e.r(708867),
        o = e.r(447265),
        l = e.r(150095),
        a = e.r(884942),
        i = e.r(855558);

    function s(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    s.prototype.clear = n, s.prototype.delete = o, s.prototype.get = l, s.prototype.has = a, s.prototype.set = i, t.exports = s
}, 765776, (e, t, r) => {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, 641664, (e, t, r) => {
    var n = e.r(343346);
    t.exports = function(e, t) {
        for (var r = e.length; r--;)
            if (n(e[r][0], t)) return r;
        return -1
    }
}, 915386, (e, t, r) => {
    var n = e.r(641664),
        o = Array.prototype.splice;
    t.exports = function(e) {
        var t = this.__data__,
            r = n(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : o.call(t, r, 1), --this.size, !0)
    }
}, 857624, (e, t, r) => {
    var n = e.r(641664);
    t.exports = function(e) {
        var t = this.__data__,
            r = n(t, e);
        return r < 0 ? void 0 : t[r][1]
    }
}, 219301, (e, t, r) => {
    var n = e.r(641664);
    t.exports = function(e) {
        return n(this.__data__, e) > -1
    }
}, 682947, (e, t, r) => {
    var n = e.r(641664);
    t.exports = function(e, t) {
        var r = this.__data__,
            o = n(r, e);
        return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this
    }
}, 990543, (e, t, r) => {
    var n = e.r(765776),
        o = e.r(915386),
        l = e.r(857624),
        a = e.r(219301),
        i = e.r(682947);

    function s(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    s.prototype.clear = n, s.prototype.delete = o, s.prototype.get = l, s.prototype.has = a, s.prototype.set = i, t.exports = s
}, 817416, (e, t, r) => {
    var n = e.r(298435),
        o = e.r(990543),
        l = e.r(764138);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new n,
            map: new(l || o),
            string: new n
        }
    }
}, 365867, (e, t, r) => {
    t.exports = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
}, 476501, (e, t, r) => {
    var n = e.r(365867);
    t.exports = function(e, t) {
        var r = e.__data__;
        return n(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
    }
}, 792520, (e, t, r) => {
    var n = e.r(476501);
    t.exports = function(e) {
        var t = n(this, e).delete(e);
        return this.size -= !!t, t
    }
}, 349966, (e, t, r) => {
    var n = e.r(476501);
    t.exports = function(e) {
        return n(this, e).get(e)
    }
}, 649884, (e, t, r) => {
    var n = e.r(476501);
    t.exports = function(e) {
        return n(this, e).has(e)
    }
}, 884711, (e, t, r) => {
    var n = e.r(476501);
    t.exports = function(e, t) {
        var r = n(this, e),
            o = r.size;
        return r.set(e, t), this.size += +(r.size != o), this
    }
}, 158774, (e, t, r) => {
    var n = e.r(817416),
        o = e.r(792520),
        l = e.r(349966),
        a = e.r(649884),
        i = e.r(884711);

    function s(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    s.prototype.clear = n, s.prototype.delete = o, s.prototype.get = l, s.prototype.has = a, s.prototype.set = i, t.exports = s
}, 528535, (e, t, r) => {
    var n = e.r(158774);

    function o(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
        var r = function() {
            var n = arguments,
                o = t ? t.apply(this, n) : n[0],
                l = r.cache;
            if (l.has(o)) return l.get(o);
            var a = e.apply(this, n);
            return r.cache = l.set(o, a) || l, a
        };
        return r.cache = new(o.Cache || n), r
    }
    o.Cache = n, t.exports = o
}, 593613, (e, t, r) => {
    var n = e.r(528535);
    t.exports = function(e) {
        var t = n(e, function(e) {
                return 500 === r.size && r.clear(), e
            }),
            r = t.cache;
        return t
    }
}, 837344, (e, t, r) => {
    var n = e.r(593613),
        o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        l = /\\(\\)?/g;
    t.exports = n(function(e) {
        var t = [];
        return 46 === e.charCodeAt(0) && t.push(""), e.replace(o, function(e, r, n, o) {
            t.push(n ? o.replace(l, "$1") : r || e)
        }), t
    })
}, 6205, (e, t, r) => {
    var n = e.r(778116),
        o = e.r(647562),
        l = e.r(837344),
        a = e.r(553050);
    t.exports = function(e, t) {
        return n(e) ? e : o(e, t) ? [e] : l(a(e))
    }
}, 812232, (e, t, r) => {
    var n = e.r(692558),
        o = 1 / 0;
    t.exports = function(e) {
        if ("string" == typeof e || n(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -o ? "-0" : t
    }
}, 555902, (e, t, r) => {
    var n = e.r(6205),
        o = e.r(812232);
    t.exports = function(e, t) {
        t = n(t, e);
        for (var r = 0, l = t.length; null != e && r < l;) e = e[o(t[r++])];
        return r && r == l ? e : void 0
    }
}, 375194, (e, t, r) => {
    var n = e.r(555902);
    t.exports = function(e, t, r) {
        var o = null == e ? void 0 : n(e, t);
        return void 0 === o ? r : o
    }
}, 641077, e => {
    "use strict";
    var t = e.i(14666),
        r = e.i(499531);
    let n = (0, r.createContext)({
        products: []
    });
    e.s(["PageCommerceProvider", 0, function({
        products: e,
        children: o
    }) {
        let l = (0, r.useMemo)(() => ({
            products: e
        }), [e]);
        return (0, t.jsx)(n.Provider, {
            value: l,
            children: o
        })
    }, "usePageCommerce", 0, function() {
        return (0, r.useContext)(n)
    }])
}, 326388, e => {
    "use strict";
    var t = e.i(955592),
        r = e.i(375194),
        n = e.i(433519),
        o = e.i(641077),
        l = e.i(544923);
    let a = (e, t) => t?.country ? e?.country?.toLowerCase().localeCompare(t?.country.toLowerCase()) || 0 : -1,
        i = {
            currency: "USD"
        },
        s = e => e?.text !== null && e?.text !== void 0 || (e?.children ? e.children.every(s) : !!Array.isArray(e) && e.every(s));
    e.s(["default", 0, () => {
        let {
            state: e
        } = (0, n.default)(), {
            products: u
        } = (0, o.usePageCommerce)(), [c] = (0, l.default)("location", "US"), p = t => {
            let r = t?.variantPrices.sort(a),
                n = e => r?.find(t => t.currency?.toLowerCase() === e?.currency?.toLowerCase() && (t.country?.toLowerCase() === c?.toLowerCase() || !t.country))?.price;
            return n(e) ? [n(e), !1] : [n(i), !0]
        }, f = e => {
            if (!e) return {};
            let {
                productVariants: t,
                productKey: r
            } = e, n = {
                productKey: null
            };
            return t?.forEach(e => {
                let [t] = p(e);
                e?.productVariantName && (n[e.productVariantName] = {
                    price: t
                })
            }), n
        }, d = (e, r) => {
            if (!r || !e) return e;
            let n = f(r);
            return t.default.render(e, n)
        }, h = (e, r) => {
            let n;
            if (!r || !e) return e;
            let o = (n = {
                productKey: null
            }, r.forEach(e => {
                if (!e) return {};
                let {
                    productVariants: t
                } = e;
                t?.forEach(e => {
                    let [t] = p(e);
                    e?.productVariantName && (n[e.productVariantName] = {
                        price: t
                    })
                })
            }), n);
            return t.default.render(e, o)
        }, y = (e, n) => {
            if (!n || !e) return e;
            let o = e.match(/{{\s*[\w.-]+\s*}}/g)?.map(e => e?.match(/[\w.-]+/)?.[0] || "");
            if (void 0 === o) return e;
            let l = f(n);
            return n && o?.every(e => (0, r.default)(l, e)) ? t.default.render(e, l) : null
        }, v = (e, t, r = d) => e?.map(e => {
            if (e?._type === "block") return {
                ...e,
                children: v(e.children, t, r)
            };
            if (e?._type !== "span") return e;
            {
                let n = r(e.text, t);
                return {
                    ...e,
                    text: n
                }
            }
        });
        return {
            currency: e.currency,
            location: c,
            appendCommerceData: d,
            appendCommerceDataToPortableText: v,
            renderWithAllVariablesToPortableText: (e, t) => {
                let r = v(e, t, y);
                return s(r) ? r : null
            },
            getPrice: p,
            appendCommerceDataForMultipleProducts: h,
            appendPageCommerceData: e => h(e, u),
            appendPageCommerceDataToPortableText: e => v(e, void 0, e => h(e, u))
        }
    }], 326388)
}]);