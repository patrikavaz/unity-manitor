(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 229696, e => {
    "use strict";
    var t, r, n = e.i(999721);

    function l() {
        return (l = Object.assign.bind()).apply(this, arguments)
    }
    let o = ["children", "options"],
        i = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), {
            for: "htmlFor"
        }),
        a = {
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
        m = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
        v = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        g = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        x = /^(?:\n *)*\n/,
        k = /\r\n?/g,
        b = /^\[\^([^\]]+)](:.*)\n/,
        _ = /^\[\^([^\]]+)]/,
        w = /\f/g,
        j = /^\s*?\[(x|\s)\]/,
        O = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        I = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        S = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
        $ = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
        T = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        P = /^<!--[\s\S]*?(?:-->)/,
        A = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        E = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        H = /^\{.*\}$/,
        C = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        L = /^<([^ >]+@[^ >]+)>/,
        M = /^<([^ >]+:\/[^ >]+)>/,
        D = /-([a-z])?/gi,
        B = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
        z = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        N = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        F = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        G = /(\[|\])/g,
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
        el = /^([ \t]*)/,
        eo = /\\([^\\])/g,
        ei = / *\n+$/,
        ea = /(?:^|\n)( *)$/,
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

    function em(e) {
        return RegExp("^" + (1 === e ? ep : ef) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? es : eu) + " )[^\\n]*)*(\\n|$)", "gm")
    }
    let ev = em(1),
        eg = em(2);

    function ex(e) {
        let t = 1 === e ? es : eu;
        return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)")
    }
    let ek = ex(1),
        eb = ex(2);

    function e_(e, t) {
        let n = 1 === t,
            l = n ? ek : eb,
            o = n ? ev : eg,
            i = n ? eh : ey;
        return {
            t(e, t, r) {
                let n = ea.exec(r);
                return n && (t.o || !t._ && !t.u) ? l.exec(e = n[1] + e) : null
            },
            i: r.HIGH,
            l(e, t, r) {
                let l = n ? +e[2] : void 0,
                    a = e[0].replace(p, "\n").match(o),
                    s = !1;
                return {
                    p: a.map(function(e, n) {
                        let l, o = RegExp("^ {1," + i.exec(e)[0].length + "}", "gm"),
                            u = e.replace(o, "").replace(i, ""),
                            c = n === a.length - 1,
                            p = -1 !== u.indexOf("\n\n") || c && s;
                        s = p;
                        let f = r._,
                            d = r.o;
                        r.o = !0, p ? (r._ = !1, l = u.replace(ei, "\n\n")) : (r._ = !0, l = u.replace(ei, ""));
                        let h = t(l, r);
                        return r._ = f, r.o = d, h
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
        ej = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eO = [f, m, v, O, S, I, P, B, ev, ek, eg, eb],
        eI = [...eO, /^[^\n]+(?:  \n|\n{2,})/, $, E];

    function eS(e) {
        return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
    }

    function e$(e) {
        return q.test(e) ? "right" : K.test(e) ? "center" : Z.test(e) ? "left" : null
    }

    function eT(e, t, r) {
        let n = r.$;
        r.$ = !0;
        let l = t(e.trim(), r);
        r.$ = n;
        let o = [
            []
        ];
        return l.forEach(function(e, t) {
            "tableSeparator" === e.type ? 0 !== t && t !== l.length - 1 && o.push([]) : ("text" !== e.type || null != l[t + 1] && "tableSeparator" !== l[t + 1].type || (e.v = e.v.replace(V, "")), o[o.length - 1].push(e))
        }), o
    }

    function eP(e, t, r) {
        var n;
        r._ = !0;
        let l = eT(e[1], t, r),
            o = e[2].replace(X, "").split("|").map(e$),
            i = (n = e[3], n.trim().split("\n").map(function(e) {
                return eT(e, t, r)
            }));
        return r._ = !1, {
            S: o,
            A: i,
            L: l,
            type: "table"
        }
    }

    function eA(e, t) {
        return null == e.S[t] ? {} : {
            textAlign: e.S[t]
        }
    }

    function eE(e) {
        return function(t, r) {
            return r._ ? e.exec(t) : null
        }
    }

    function eH(e) {
        return function(t, r) {
            return r._ || r.u ? e.exec(t) : null
        }
    }

    function eC(e) {
        return function(t, r) {
            return r._ || r.u ? null : e.exec(t)
        }
    }

    function eL(e) {
        return function(t) {
            return e.exec(t)
        }
    }

    function eM(e, t, r) {
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

    function eB(e) {
        return e.replace(eo, "$1")
    }

    function ez(e, t, r) {
        let n = r._ || !1,
            l = r.u || !1;
        r._ = !0, r.u = !0;
        let o = e(t, r);
        return r._ = n, r.u = l, o
    }

    function eN(e, t, r) {
        return r._ = !1, e(t, r)
    }
    let eF = (e, t, r) => ({
        v: ez(t, e[1], r)
    });

    function eG() {
        return {}
    }

    function eR() {
        return null
    }

    function eU(e, t, r) {
        let n = e,
            l = t.split(".");
        for (; l.length && void 0 !== (n = n[l[0]]);) l.shift();
        return n || r
    }(t = r || (r = {}))[t.MAX = 0] = "MAX", t[t.HIGH = 1] = "HIGH", t[t.MED = 2] = "MED", t[t.LOW = 3] = "LOW", t[t.MIN = 4] = "MIN", e.s(["default", 0, e => {
        let {
            children: t,
            options: p
        } = e, X = function(e, t) {
            if (null == e) return {};
            var r, n, l = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) t.indexOf(r = o[n]) >= 0 || (l[r] = e[r]);
            return l
        }(e, o);
        return n.cloneElement(function(e, t = {}) {
            var o;
            let p;
            t.overrides = t.overrides || {}, t.slugify = t.slugify || eS, t.namedCodesToUnicode = t.namedCodesToUnicode ? l({}, a, t.namedCodesToUnicode) : a;
            let X = t.createElement || n.createElement;

            function V(e, r, ...n) {
                var o;
                let i, a = eU(t.overrides, `${e}.props`, {});
                return X((i = eU(o = t.overrides, e)) ? "function" == typeof i || "object" == typeof i && "render" in i ? i : eU(o, `${e}.component`, e) : e, l({}, r, a, {
                    className: function(...e) {
                        return e.filter(Boolean).join(" ")
                    }(null == r ? void 0 : r.className, a.className) || void 0
                }), ...n)
            }

            function K(e) {
                let r, l = !1;
                t.forceInline ? l = !0 : t.forceBlock || (l = !1 === R.test(e));
                let o = es(ea(l ? e : `${e.trimEnd().replace(en,"")}

`, {
                    _: l
                }));
                for (;
                    "string" == typeof o[o.length - 1] && !o[o.length - 1].trim();) o.pop();
                if (null === t.wrapper) return o;
                let i = t.wrapper || (l ? "span" : "div");
                if (o.length > 1 || t.forceWrapper) r = o;
                else {
                    if (1 === o.length) return "string" == typeof(r = o[0]) ? V("span", {
                        key: "outer"
                    }, r) : r;
                    r = null
                }
                return n.createElement(i, {
                    key: "outer"
                }, r)
            }

            function Z(e) {
                let t = e.match(u);
                return t ? t.reduce(function(e, t, r) {
                    let l = t.indexOf("=");
                    if (-1 !== l) {
                        var o, a, s;
                        let u, c = (-1 !== (o = t.slice(0, l)).indexOf("-") && null === o.match(A) && (o = o.replace(D, function(e, t) {
                                return t.toUpperCase()
                            })), o).trim(),
                            p = ('"' === (u = (a = t.slice(l + 1).trim())[0]) || "'" === u) && a.length >= 2 && a[a.length - 1] === u ? a.slice(1, -1) : a,
                            f = i[c] || c,
                            d = e[f] = (s = p, "style" === c ? s.split(/;\s?/).reduce(function(e, t) {
                                let r = t.slice(0, t.indexOf(":"));
                                return e[r.replace(/(-[a-z])/g, e => e[1].toUpperCase())] = t.slice(r.length + 1).trim(), e
                            }, {}) : "href" === c ? eD(s) : (s.match(H) && (s = s.slice(1, s.length - 1)), "true" === s || "false" !== s && s));
                        "string" == typeof d && ($.test(d) || E.test(d)) && (e[f] = n.cloneElement(K(d.trim()), {
                            key: r
                        }))
                    } else "style" !== t && (e[i[t] || t] = !0);
                    return e
                }, {}) : null
            }
            let q = [],
                eo = {},
                ei = {
                    blockQuote: {
                        t: eC(f),
                        i: r.HIGH,
                        l: (e, t, r) => ({
                            v: t(e[0].replace(d, ""), r)
                        }),
                        h: (e, t, r) => V("blockquote", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    breakLine: {
                        t: eL(h),
                        i: r.HIGH,
                        l: eG,
                        h: (e, t, r) => V("br", {
                            key: r.k
                        })
                    },
                    breakThematic: {
                        t: eC(y),
                        i: r.HIGH,
                        l: eG,
                        h: (e, t, r) => V("hr", {
                            key: r.k
                        })
                    },
                    codeBlock: {
                        t: eC(v),
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
                        t: eC(m),
                        i: r.MAX,
                        l: e => ({
                            O: Z(e[3] || ""),
                            v: e[4],
                            M: e[2] || void 0,
                            type: "codeBlock"
                        })
                    },
                    codeInline: {
                        t: eH(g),
                        i: r.LOW,
                        l: e => ({
                            v: e[2]
                        }),
                        h: (e, t, r) => V("code", {
                            key: r.k
                        }, e.v)
                    },
                    footnote: {
                        t: eC(b),
                        i: r.MAX,
                        l: e => (q.push({
                            I: e[2],
                            j: e[1]
                        }), {}),
                        h: eR
                    },
                    footnoteReference: {
                        t: eE(_),
                        i: r.HIGH,
                        l: e => ({
                            v: e[1],
                            B: `#${t.slugify(e[1])}`
                        }),
                        h: (e, t, r) => V("a", {
                            key: r.k,
                            href: eD(e.B)
                        }, V("sup", {
                            key: r.k
                        }, e.v))
                    },
                    gfmTask: {
                        t: eE(j),
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
                        t: eC(t.enforceAtxHeadings ? I : O),
                        i: r.HIGH,
                        l: (e, r, n) => ({
                            v: ez(r, e[2], n),
                            T: t.slugify(e[2]),
                            C: e[1].length
                        }),
                        h: (e, t, r) => V(`h${e.C}`, {
                            id: e.T,
                            key: r.k
                        }, t(e.v, r))
                    },
                    headingSetext: {
                        t: eC(S),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: ez(t, e[1], r),
                            C: "=" === e[2] ? 1 : 2,
                            type: "heading"
                        })
                    },
                    htmlComment: {
                        t: eL(P),
                        i: r.HIGH,
                        l: () => ({}),
                        h: eR
                    },
                    image: {
                        t: eH(ej),
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
                            src: eD(e.B)
                        })
                    },
                    link: {
                        t: eE(ew),
                        i: r.LOW,
                        l: (e, t, r) => {
                            var n;
                            let l, o, i;
                            return {
                                v: (n = e[1], l = r._ || !1, o = r.u || !1, r._ = !1, r.u = !0, i = t(n, r), r._ = l, r.u = o, i),
                                B: eB(e[2]),
                                F: e[3]
                            }
                        },
                        h: (e, t, r) => V("a", {
                            key: r.k,
                            href: eD(e.B),
                            title: e.F
                        }, t(e.v, r))
                    },
                    linkAngleBraceStyleDetector: {
                        t: eE(M),
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
                        t: (e, t) => t.N ? null : eE(C)(e, t),
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
                        t: eE(L),
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
                        t: eC(x),
                        i: r.LOW,
                        l: eG,
                        h: () => "\n"
                    },
                    paragraph: {
                        t: eM,
                        i: r.LOW,
                        l: eF,
                        h: (e, t, r) => V("p", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    ref: {
                        t: eE(z),
                        i: r.MAX,
                        l: e => (eo[e[1]] = {
                            B: e[2],
                            F: e[4]
                        }, {}),
                        h: eR
                    },
                    refImage: {
                        t: eH(N),
                        i: r.MAX,
                        l: e => ({
                            D: e[1] || void 0,
                            P: e[2]
                        }),
                        h: (e, t, r) => V("img", {
                            key: r.k,
                            alt: e.D,
                            src: eD(eo[e.P].B),
                            title: eo[e.P].F
                        })
                    },
                    refLink: {
                        t: eE(F),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: t(e[1], r),
                            Z: t(e[0].replace(G, "\\$1"), r),
                            P: e[2]
                        }),
                        h: (e, t, r) => eo[e.P] ? V("a", {
                            key: r.k,
                            href: eD(eo[e.P].B),
                            title: eo[e.P].F
                        }, t(e.v, r)) : V("span", {
                            key: r.k
                        }, t(e.Z, r))
                    },
                    table: {
                        t: eC(B),
                        i: r.HIGH,
                        l: eP,
                        h: (e, t, r) => V("table", {
                            key: r.k
                        }, V("thead", null, V("tr", null, e.L.map(function(n, l) {
                            return V("th", {
                                key: l,
                                style: eA(e, l)
                            }, t(n, r))
                        }))), V("tbody", null, e.A.map(function(n, l) {
                            return V("tr", {
                                key: l
                            }, n.map(function(n, l) {
                                return V("td", {
                                    key: l,
                                    style: eA(e, l)
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
                        t: eL(er),
                        i: r.MIN,
                        l: e => ({
                            v: e[0].replace(T, (e, r) => t.namedCodesToUnicode[r] ? t.namedCodesToUnicode[r] : e)
                        }),
                        h: e => e.v
                    },
                    textBolded: {
                        t: eH(Q),
                        i: r.MED,
                        l: (e, t, r) => ({
                            v: t(e[2], r)
                        }),
                        h: (e, t, r) => V("strong", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textEmphasized: {
                        t: eH(J),
                        i: r.LOW,
                        l: (e, t, r) => ({
                            v: t(e[2], r)
                        }),
                        h: (e, t, r) => V("em", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textEscaped: {
                        t: eH(et),
                        i: r.HIGH,
                        l: e => ({
                            v: e[1],
                            type: "text"
                        })
                    },
                    textMarked: {
                        t: eH(Y),
                        i: r.LOW,
                        l: eF,
                        h: (e, t, r) => V("mark", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textStrikethroughed: {
                        t: eH(ee),
                        i: r.LOW,
                        l: eF,
                        h: (e, t, r) => V("del", {
                            key: r.k
                        }, t(e.v, r))
                    }
                };
            !0 !== t.disableParsingRawHTML && (ei.htmlBlock = {
                t: eL($),
                i: r.HIGH,
                l(e, t, r) {
                    let [, n] = e[3].match(el), l = RegExp(`^${n}`, "gm"), o = e[3].replace(l, ""), i = eI.some(e => e.test(o)) ? eN : ez, a = e[1].toLowerCase(), u = -1 !== s.indexOf(a);
                    r.N = r.N || "a" === a;
                    let c = u ? e[3] : i(t, o, r);
                    return r.N = !1, {
                        O: Z(e[2]),
                        v: c,
                        G: u,
                        H: u ? a : e[1]
                    }
                },
                h: (e, t, r) => V(e.H, l({
                    key: r.k
                }, e.O), e.G ? e.v : t(e.v, r))
            }, ei.htmlSelfClosing = {
                t: eL(E),
                i: r.HIGH,
                l: e => ({
                    O: Z(e[2] || ""),
                    H: e[1]
                }),
                h: (e, t, r) => V(e.H, l({}, e.O, {
                    key: r.k
                }))
            });
            let ea = ((p = Object.keys(ei)).sort(function(e, t) {
                    let r = ei[e].i,
                        n = ei[t].i;
                    return r !== n ? r - n : e < t ? -1 : 1
                }), function(e, t) {
                    return function e(t, r) {
                        let n = [],
                            l = "";
                        for (; t;) {
                            let o = 0;
                            for (; o < p.length;) {
                                let i = p[o],
                                    a = ei[i],
                                    s = a.t(t, r, l);
                                if (s) {
                                    let o = s[0];
                                    t = t.substring(o.length);
                                    let u = a.l(s, e, r);
                                    null == u.type && (u.type = i), n.push(u), l = o;
                                    break
                                }
                                o++
                            }
                        }
                        return n
                    }(e.replace(k, "\n").replace(w, "").replace(U, "    "), t)
                }),
                es = (o = function(e, t, r) {
                    return ei[e.type].h(e, t, r)
                }, function e(t, r = {}) {
                    if (Array.isArray(t)) {
                        let n = r.k,
                            l = [],
                            o = !1;
                        for (let n = 0; n < t.length; n++) {
                            r.k = n;
                            let i = e(t[n], r),
                                a = "string" == typeof i;
                            a && o ? l[l.length - 1] += i : null !== i && l.push(i), o = a
                        }
                        return r.k = n, l
                    }
                    return o(t, e, r)
                }),
                eu = K(e);
            return q.length ? V("div", null, eu, V("footer", {
                key: "footer"
            }, q.map(function(e) {
                return V("div", {
                    id: t.slugify(e.j),
                    key: e.j
                }, e.j, es(ea(e.I, {
                    _: !0
                })))
            }))) : eu
        }(t, p), X)
    }])
}, 805518, e => {
    "use strict";
    let t = e.i(747624).default;
    e.s(["default", 0, t])
}, 722990, e => {
    "use strict";
    var t = e.i(210139);

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

    function a(e) {
        return "@text" === e._type
    }
    let s = ["strong", "em", "code", "underline", "strike-through"];

    function u(e, t, n) {
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
            let o = s.indexOf(t),
                i = s.indexOf(r);
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

    function p(e, t) {
        let n = t.level || 1,
            l = t.listItem || "normal",
            i = "string" == typeof t.listItem;
        if (o(e) && (e.level || 1) === n && i && (e.listItem || "normal") === l) return e;
        if (!("children" in e)) return;
        let a = e.children[e.children.length - 1];
        return a && !r(a) ? p(a, t) : void 0
    }
    var f = e.i(999721);
    let d = {
            textDecoration: "underline"
        },
        h = (e, t) => `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
        y = e => h(`block type "${e}"`, "types");

    function m(e) {
        console.warn(e)
    }
    let v = {
            display: "none"
        },
        g = {
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
                let n = y(e._type);
                return r ? (0, t.jsx)("span", {
                    style: v,
                    children: n
                }) : (0, t.jsx)("div", {
                    style: v,
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

    function x(e, t, r) {
        let n = t[r],
            l = e[r];
        return "function" == typeof n || n && "function" == typeof l ? n : n ? {
            ...l,
            ...n
        } : l
    }

    function k(e) {
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
            let o = n.map(u),
                i = {
                    _type: "@span",
                    children: [],
                    markType: "<unknown>"
                },
                a = [i];
            for (let e = 0; e < n.length; e++) {
                let i = n[e];
                if (!i) continue;
                let s = o[e] || [],
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
        listNestingMode: s,
        onMissingComponent: u = m
    }) {
        let d = u || b,
            v = function(e, t) {
                let r, n = [];
                for (let a = 0; a < e.length; a++) {
                    let s = e[a];
                    if (s) {
                        var o, i;
                        if (!l(s)) {
                            n.push(s), r = void 0;
                            continue
                        }
                        if (!r) {
                            r = c(s, a, t), n.push(r);
                            continue
                        }
                        if (o = s, i = r, (o.level || 1) === i.level && o.listItem === i.listItem) {
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
                                l = e && p(e, s);
                            if (l) {
                                (r = l).children.push(s);
                                continue
                            }
                            r = c(s, a, t), n.push(r);
                            continue
                        }
                        if (s.listItem !== r.listItem) {
                            let e = n[n.length - 1],
                                l = e && p(e, {
                                    level: s.level || 1
                                });
                            if (l && l.listItem === s.listItem) {
                                (r = l).children.push(s);
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
            _ = (0, f.useMemo)(() => r ? function(e, t) {
                let {
                    block: r,
                    list: n,
                    listItem: l,
                    marks: o,
                    types: i,
                    ...a
                } = t;
                return {
                    ...e,
                    block: x(e, t, "block"),
                    list: x(e, t, "list"),
                    listItem: x(e, t, "listItem"),
                    marks: x(e, t, "marks"),
                    types: x(e, t, "types"),
                    ...a
                }
            }(g, r) : g, [r]),
            w = (0, f.useMemo)(() => {
                var e, r;
                return e = _, r = d,
                    function s(u) {
                        var c, p, f, d, m, v, g, x;
                        let b, _, {
                                node: w,
                                index: j,
                                isInline: O
                            } = u,
                            I = w._key || `node-${j}`;
                        return o(w) ? function(n, l, o) {
                            let i = n.children.map((e, t) => s({
                                    node: e._key ? e : {
                                        ...e,
                                        _key: `li-${l}-${t}`
                                    },
                                    index: t,
                                    isInline: !1
                                })),
                                a = e.list,
                                u = ("function" == typeof a ? a : a[n.listItem]) || e.unknownList;
                            if (u === e.unknownList) {
                                let e = n.listItem || "bullet";
                                r(h(`list style "${e}"`, "list"), {
                                    nodeType: "listStyle",
                                    type: e
                                })
                            }
                            return (0, t.jsx)(u, {
                                value: n,
                                index: l,
                                isInline: !1,
                                renderNode: s,
                                children: i
                            }, o)
                        }(w, j, I) : l(w) ? function(n, l, o) {
                            let i = k({
                                    node: n,
                                    index: l,
                                    isInline: !1,
                                    renderNode: s
                                }),
                                a = e.listItem,
                                u = ("function" == typeof a ? a : a[n.listItem]) || e.unknownListItem;
                            if (u === e.unknownListItem) {
                                let e = n.listItem || "bullet";
                                r(h(`list item style "${e}"`, "listItem"), {
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
                                    index: l,
                                    isInline: !1
                                })
                            }
                            return (0, t.jsx)(u, {
                                value: n,
                                index: l,
                                isInline: !1,
                                renderNode: s,
                                children: c
                            }, o)
                        }(w, j, I) : i(w) ? function(n, l) {
                            let {
                                markDef: o,
                                markType: u,
                                markKey: c
                            } = n, p = e.marks[u] || e.unknownMark, f = n.children.map((e, t) => s({
                                node: e,
                                index: t,
                                isInline: !0
                            }));
                            return p === e.unknownMark && r(h(`mark type "${u}"`, "marks"), {
                                nodeType: "mark",
                                type: u
                            }), (0, t.jsx)(p, {
                                text: function e(t) {
                                    let r = "";
                                    return t.children.forEach(t => {
                                        a(t) ? r += t.text : i(t) && (r += e(t))
                                    }), r
                                }(n),
                                value: o,
                                markType: u,
                                markKey: c,
                                renderNode: s,
                                children: f
                            }, l)
                        }(w, I) : w._type in e.types ? (c = w, p = j, f = I, d = O, (b = e.types[c._type]) ? (0, t.jsx)(b, {
                            value: c,
                            isInline: d,
                            index: p,
                            renderNode: s
                        }, f) : null) : n(w) ? function(n, l, o, i) {
                            let {
                                _key: a,
                                ...u
                            } = k({
                                node: n,
                                index: l,
                                isInline: i,
                                renderNode: s
                            }), c = u.node.style || "normal", p = ("function" == typeof e.block ? e.block : e.block[c]) || e.unknownBlockStyle;
                            return p === e.unknownBlockStyle && r(h(`block style "${c}"`, "block"), {
                                nodeType: "blockStyle",
                                type: c
                            }), (0, t.jsx)(p, {
                                ...u,
                                value: u.node,
                                renderNode: s
                            }, o)
                        }(w, j, I, O) : a(w) ? function(r, n) {
                            if (r.text === `
`) {
                                let r = e.hardBreak;
                                return r ? (0, t.jsx)(r, {}, n) : `
`
                            }
                            return r.text
                        }(w, I) : (m = w, v = j, g = I, x = O, r(y(m._type), {
                            nodeType: "block",
                            type: m._type
                        }), _ = e.unknownType, (0, t.jsx)(_, {
                            value: m,
                            isInline: x,
                            index: v,
                            renderNode: s
                        }, g))
                    }
            }, [_, d]),
            j = v.map((e, t) => w({
                node: e,
                index: t,
                isInline: !1,
                renderNode: w
            }));
        return (0, t.jsx)(t.Fragment, {
            children: j
        })
    }], 722990)
}, 394225, 652955, e => {
    "use strict";
    var t = e.i(210139),
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
    }], 394225);
    var n = e.i(999721),
        l = e.i(459236);
    let o = {},
        i = 0,
        a = !1,
        s = null,
        u = null;
    var c = e.i(339206),
        p = e.i(604082),
        f = e.i(897884),
        d = e.i(427651),
        h = e.i(7180),
        y = e.i(231781);
    let m = ({
        state: e,
        content: n,
        hasArrow: l,
        placement: o,
        ...i
    }) => {
        let {
            tooltipProps: a
        } = function(e, t) {
            let r = (0, c.filterDOMProps)(e, {
                    labelable: !0
                }),
                {
                    hoverProps: n
                } = (0, f.useHover)({
                    onHoverStart: () => null == t ? void 0 : t.open(!0),
                    onHoverEnd: () => null == t ? void 0 : t.close()
                });
            return {
                tooltipProps: (0, p.mergeProps)(r, n, {
                    role: "tooltip"
                })
            }
        }(i, e);
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
            })(o), l && (e => {
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
            ...(0, p.mergeProps)(i, a),
            children: n
        })
    };
    e.s(["default", 0, ({
        content: e,
        placement: r = "bottom",
        hasArrow: c = !0,
        tooltipOptions: v = {
            delay: 300,
            closeDelay: 0,
            isDisabled: !1
        },
        children: g
    }) => {
        let x = function(e = {}) {
                let {
                    delay: t = 1500,
                    closeDelay: r = 500
                } = e, {
                    isOpen: c,
                    open: p,
                    close: f
                } = (0, l.useOverlayTriggerState)(e), d = (0, n.useMemo)(() => `${++i}`, []), h = (0, n.useRef)(null), y = (0, n.useRef)(f), m = () => {
                    o[d] = x
                }, v = () => {
                    for (let e in o) e !== d && (o[e](!0), delete o[e])
                }, g = () => {
                    h.current && clearTimeout(h.current), h.current = null, v(), m(), a = !0, p(), s && (clearTimeout(s), s = null), u && (clearTimeout(u), u = null)
                }, x = e => {
                    e || r <= 0 ? (h.current && clearTimeout(h.current), h.current = null, y.current()) : h.current || (h.current = setTimeout(() => {
                        h.current = null, y.current()
                    }, r)), s && (clearTimeout(s), s = null), a && (u && clearTimeout(u), u = setTimeout(() => {
                        delete o[d], u = null, a = !1
                    }, Math.max(500, r)))
                };
                return (0, n.useEffect)(() => {
                    y.current = f
                }, [f]), (0, n.useEffect)(() => () => {
                    h.current && clearTimeout(h.current), o[d] && delete o[d]
                }, [d]), {
                    isOpen: c,
                    open: e => {
                        e || !(t > 0) || h.current ? g() : (v(), m(), c || s || a ? c || g() : s = setTimeout(() => {
                            s = null, a = !0, g()
                        }, t))
                    },
                    close: x
                }
            }(v),
            k = (0, n.useRef)(null),
            {
                triggerProps: b,
                tooltipProps: _
            } = function(e, t, r) {
                let {
                    isDisabled: l,
                    trigger: o
                } = e, i = (0, y.useId)(), a = (0, n.useRef)(!1), s = (0, n.useRef)(!1), u = () => {
                    (a.current || s.current) && t.open(s.current)
                }, c = e => {
                    a.current || s.current || t.close(e)
                };
                (0, n.useEffect)(() => {
                    let e = e => {
                        r && r.current && "Escape" === e.key && (e.stopPropagation(), t.close(!0))
                    };
                    if (t.isOpen) return document.addEventListener("keydown", e, !0), () => {
                        document.removeEventListener("keydown", e, !0)
                    }
                }, [r, t]);
                let m = () => {
                        s.current = !1, a.current = !1, c(!0)
                    },
                    {
                        hoverProps: v
                    } = (0, f.useHover)({
                        isDisabled: l,
                        onHoverStart: () => {
                            "focus" !== o && ("pointer" === (0, d.getInteractionModality)() ? a.current = !0 : a.current = !1, u())
                        },
                        onHoverEnd: () => {
                            "focus" !== o && (s.current = !1, a.current = !1, c())
                        }
                    }),
                    {
                        focusableProps: g
                    } = (0, h.useFocusable)({
                        isDisabled: l,
                        onFocus: () => {
                            (0, d.isFocusVisible)() && (s.current = !0, u())
                        },
                        onBlur: () => {
                            s.current = !1, a.current = !1, c(!0)
                        }
                    }, r);
                return {
                    triggerProps: {
                        "aria-describedby": t.isOpen ? i : void 0,
                        ...(0, p.mergeProps)(g, v, {
                            onPointerDown: m,
                            onKeyDown: m,
                            tabIndex: void 0
                        })
                    },
                    tooltipProps: {
                        id: i
                    }
                }
            }(v, x, k);
        return (0, t.jsxs)("span", {
            className: "relative",
            children: [(0, t.jsx)("span", {
                ref: k,
                ...b,
                children: g
            }), x.isOpen && (0, t.jsx)(m, {
                state: x,
                content: e,
                placement: r,
                hasArrow: c,
                ..._
            })]
        })
    }], 652955)
}, 363737, 260041, e => {
    "use strict";
    var t = e.i(210139),
        r = e.i(999721),
        n = e.i(460261),
        l = e.i(669877),
        o = e.i(984782),
        i = e.i(155266),
        a = e.i(604082);

    function s(e, t, s) {
        let {
            overlayProps: u,
            underlayProps: c
        } = (0, o.useOverlay)({
            ...e,
            isOpen: t.isOpen,
            onClose: t.close
        }, s);
        return (0, i.usePreventScroll)({
            isDisabled: !t.isOpen
        }), (0, n.useOverlayFocusContain)(), (0, r.useEffect)(() => {
            if (t.isOpen && s.current) return (0, l.ariaHideOutside)([s.current])
        }, [t.isOpen, s]), {
            modalProps: (0, a.mergeProps)(u),
            underlayProps: c
        }
    }
    e.s(["useModalOverlay", 0, s], 260041);
    var u = e.i(441157),
        c = e.i(459236),
        p = e.i(749583);
    let f = ({
            state: e,
            children: l,
            ...o
        }) => {
            let i = (0, r.useRef)(null),
                {
                    modalProps: a,
                    underlayProps: u
                } = s({
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
                    ...u,
                    children: (0, t.jsx)("div", {
                        ref: i,
                        ...a,
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
                    triggerProps: a,
                    overlayProps: s
                } = (0, u.useOverlayTrigger)({
                    type: "dialog"
                }, i);
            return (0, t.jsxs)(t.Fragment, {
                children: [l && (0, t.jsx)(p.default, {
                    rounded: !0,
                    hasArrow: !0,
                    ...a,
                    children: e
                }), i.isOpen && (0, t.jsx)(f, {
                    state: i,
                    ...o,
                    isDismissable: !0,
                    children: "function" == typeof n ? (0, r.cloneElement)(n(i.close), s) : (0, r.cloneElement)(n, s)
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
        a = n ? n.toStringTag : void 0;
    t.exports = function(e) {
        var t = o.call(e, a),
            r = e[a];
        try {
            e[a] = void 0;
            var n = !0
        } catch (e) {}
        var l = i.call(e);
        return n && (t ? e[a] = r : delete e[a]), l
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
}, 239145, (e, t, r) => {
    t.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, l = Array(n); ++r < n;) l[r] = t(e[r], r, e);
        return l
    }
}, 873021, (e, t, r) => {
    var n = e.r(328042),
        l = e.r(239145),
        o = e.r(778116),
        i = e.r(692558),
        a = 1 / 0,
        s = n ? n.prototype : void 0,
        u = s ? s.toString : void 0;
    t.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (o(t)) return l(t, e) + "";
        if (i(t)) return u ? u.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -a ? "-0" : r
    }
}, 553050, (e, t, r) => {
    var n = e.r(873021);
    t.exports = function(e) {
        return null == e ? "" : n(e)
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
        a = /^\[object .+?Constructor\]$/,
        s = Object.prototype,
        u = Function.prototype.toString,
        c = s.hasOwnProperty,
        p = RegExp("^" + u.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(e) {
        return !(!o(e) || l(e)) && (n(e) ? p : a).test(i(e))
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
    var t = e.i(999721);
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
    var t = e.i(999721);
    e.s(["default", 0, e => {
        let [r, n] = (0, t.useState)("");
        return (0, t.useEffect)(() => {
            n(document.cookie)
        }, []), [(0, t.useMemo)(() => r?.split("; ")?.find(t => t.includes(e)), [r, e])]
    }])
}, 343346, (e, t, r) => {
    t.exports = function(e, t) {
        return e === t || e != e && t != t
    }
}, 764138, (e, t, r) => {
    t.exports = e.r(581511)(e.r(78974), "Map")
}, 647562, (e, t, r) => {
    var n = e.r(778116),
        l = e.r(692558),
        o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        i = /^\w*$/;
    t.exports = function(e, t) {
        if (n(e)) return !1;
        var r = typeof e;
        return !!("number" == r || "symbol" == r || "boolean" == r || null == e || l(e)) || i.test(e) || !o.test(e) || null != t && e in Object(t)
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
        l = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        if (n) {
            var r = t[e];
            return "__lodash_hash_undefined__" === r ? void 0 : r
        }
        return l.call(t, e) ? t[e] : void 0
    }
}, 884942, (e, t, r) => {
    var n = e.r(977902),
        l = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        return n ? void 0 !== t[e] : l.call(t, e)
    }
}, 985902, (e, t, r) => {
    var n = e.r(977902);
    t.exports = function(e, t) {
        var r = this.__data__;
        return this.size += +!this.has(e), r[e] = n && void 0 === t ? "__lodash_hash_undefined__" : t, this
    }
}, 298435, (e, t, r) => {
    var n = e.r(708867),
        l = e.r(447265),
        o = e.r(150095),
        i = e.r(884942),
        a = e.r(985902);

    function s(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    s.prototype.clear = n, s.prototype.delete = l, s.prototype.get = o, s.prototype.has = i, s.prototype.set = a, t.exports = s
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
        l = Array.prototype.splice;
    t.exports = function(e) {
        var t = this.__data__,
            r = n(t, e);
        return !(r < 0) && (r == t.length - 1 ? t.pop() : l.call(t, r, 1), --this.size, !0)
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
            l = n(r, e);
        return l < 0 ? (++this.size, r.push([e, t])) : r[l][1] = t, this
    }
}, 990543, (e, t, r) => {
    var n = e.r(765776),
        l = e.r(915386),
        o = e.r(857624),
        i = e.r(219301),
        a = e.r(682947);

    function s(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    s.prototype.clear = n, s.prototype.delete = l, s.prototype.get = o, s.prototype.has = i, s.prototype.set = a, t.exports = s
}, 817416, (e, t, r) => {
    var n = e.r(298435),
        l = e.r(990543),
        o = e.r(764138);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new n,
            map: new(o || l),
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
            l = r.size;
        return r.set(e, t), this.size += +(r.size != l), this
    }
}, 158774, (e, t, r) => {
    var n = e.r(817416),
        l = e.r(792520),
        o = e.r(349966),
        i = e.r(649884),
        a = e.r(884711);

    function s(e) {
        var t = -1,
            r = null == e ? 0 : e.length;
        for (this.clear(); ++t < r;) {
            var n = e[t];
            this.set(n[0], n[1])
        }
    }
    s.prototype.clear = n, s.prototype.delete = l, s.prototype.get = o, s.prototype.has = i, s.prototype.set = a, t.exports = s
}, 528535, (e, t, r) => {
    var n = e.r(158774);

    function l(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
        var r = function() {
            var n = arguments,
                l = t ? t.apply(this, n) : n[0],
                o = r.cache;
            if (o.has(l)) return o.get(l);
            var i = e.apply(this, n);
            return r.cache = o.set(l, i) || o, i
        };
        return r.cache = new(l.Cache || n), r
    }
    l.Cache = n, t.exports = l
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
        l = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        o = /\\(\\)?/g;
    t.exports = n(function(e) {
        var t = [];
        return 46 === e.charCodeAt(0) && t.push(""), e.replace(l, function(e, r, n, l) {
            t.push(n ? l.replace(o, "$1") : r || e)
        }), t
    })
}, 6205, (e, t, r) => {
    var n = e.r(778116),
        l = e.r(647562),
        o = e.r(837344),
        i = e.r(553050);
    t.exports = function(e, t) {
        return n(e) ? e : l(e, t) ? [e] : o(i(e))
    }
}, 812232, (e, t, r) => {
    var n = e.r(692558),
        l = 1 / 0;
    t.exports = function(e) {
        if ("string" == typeof e || n(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -l ? "-0" : t
    }
}, 555902, (e, t, r) => {
    var n = e.r(6205),
        l = e.r(812232);
    t.exports = function(e, t) {
        t = n(t, e);
        for (var r = 0, o = t.length; null != e && r < o;) e = e[l(t[r++])];
        return r && r == o ? e : void 0
    }
}, 375194, (e, t, r) => {
    var n = e.r(555902);
    t.exports = function(e, t, r) {
        var l = null == e ? void 0 : n(e, t);
        return void 0 === l ? r : l
    }
}, 641077, e => {
    "use strict";
    var t = e.i(210139),
        r = e.i(999721);
    let n = (0, r.createContext)({
        products: []
    });
    e.s(["PageCommerceProvider", 0, function({
        products: e,
        children: l
    }) {
        let o = (0, r.useMemo)(() => ({
            products: e
        }), [e]);
        return (0, t.jsx)(n.Provider, {
            value: o,
            children: l
        })
    }, "usePageCommerce", 0, function() {
        return (0, r.useContext)(n)
    }])
}, 326388, e => {
    "use strict";
    var t = e.i(955592),
        r = e.i(375194),
        n = e.i(433519),
        l = e.i(641077),
        o = e.i(544923);
    let i = (e, t) => t?.country ? e?.country?.toLowerCase().localeCompare(t?.country.toLowerCase()) || 0 : -1,
        a = {
            currency: "USD"
        },
        s = e => e?.text !== null && e?.text !== void 0 || (e?.children ? e.children.every(s) : !!Array.isArray(e) && e.every(s));
    e.s(["default", 0, () => {
        let {
            state: e
        } = (0, n.default)(), {
            products: u
        } = (0, l.usePageCommerce)(), [c] = (0, o.default)("location", "US"), p = t => {
            let r = t?.variantPrices.sort(i),
                n = e => r?.find(t => t.currency?.toLowerCase() === e?.currency?.toLowerCase() && (t.country?.toLowerCase() === c?.toLowerCase() || !t.country))?.price;
            return n(e) ? [n(e), !1] : [n(a), !0]
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
            let l = (n = {
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
            return t.default.render(e, l)
        }, y = (e, n) => {
            if (!n || !e) return e;
            let l = e.match(/{{\s*[\w.-]+\s*}}/g)?.map(e => e?.match(/[\w.-]+/)?.[0] || "");
            if (void 0 === l) return e;
            let o = f(n);
            return n && l?.every(e => (0, r.default)(o, e)) ? t.default.render(e, o) : null
        }, m = (e, t, r = d) => e?.map(e => {
            if (e?._type === "block") return {
                ...e,
                children: m(e.children, t, r)
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
            appendCommerceDataToPortableText: m,
            renderWithAllVariablesToPortableText: (e, t) => {
                let r = m(e, t, y);
                return s(r) ? r : null
            },
            getPrice: p,
            appendCommerceDataForMultipleProducts: h,
            appendPageCommerceData: e => h(e, u),
            appendPageCommerceDataToPortableText: e => m(e, void 0, e => h(e, u))
        }
    }], 326388)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "88dd5cc4-e678-54c5-825f-7c7b69320660")
    } catch (e) {}
}();
//# debugId=88dd5cc4-e678-54c5-825f-7c7b69320660