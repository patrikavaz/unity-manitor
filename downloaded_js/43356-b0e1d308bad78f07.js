! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                if (null != n)
                    for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [43356], {
        15195: (e, t, n) => {
            n.d(t, {
                O: () => s
            });
            var r = n(88491),
                l = n(86403);
            let o = {},
                i = 0,
                u = !1,
                c = null,
                a = null;

            function s(e = {}) {
                let {
                    delay: t = 1500,
                    closeDelay: n = 500
                } = e, {
                    isOpen: p,
                    open: f,
                    close: d
                } = (0, l.T)(e), h = (0, r.useMemo)(() => `${++i}`, []), g = (0, r.useRef)(null), y = (0, r.useRef)(d), m = () => {
                    o[h] = b
                }, k = () => {
                    for (let e in o) e !== h && (o[e](!0), delete o[e])
                }, v = () => {
                    g.current && clearTimeout(g.current), g.current = null, k(), m(), u = !0, f(), c && (clearTimeout(c), c = null), a && (clearTimeout(a), a = null)
                }, b = e => {
                    e || n <= 0 ? (g.current && clearTimeout(g.current), g.current = null, y.current()) : g.current || (g.current = setTimeout(() => {
                        g.current = null, y.current()
                    }, n)), c && (clearTimeout(c), c = null), u && (a && clearTimeout(a), a = setTimeout(() => {
                        delete o[h], a = null, u = !1
                    }, Math.max(500, n)))
                };
                return (0, r.useEffect)(() => {
                    y.current = d
                }, [d]), (0, r.useEffect)(() => () => {
                    g.current && clearTimeout(g.current), o[h] && delete o[h]
                }, [h]), {
                    isOpen: p,
                    open: e => {
                        e || !(t > 0) || g.current ? v() : (k(), m(), p || c || u ? p || v() : c = setTimeout(() => {
                            c = null, u = !0, v()
                        }, t))
                    },
                    close: b
                }
            }
        },
        39742: (e, t, n) => {
            n.d(t, {
                D: () => a
            });
            var r = n(58236),
                l = n(82094),
                o = n(76202),
                i = n(93005),
                u = n(86713),
                c = n(88491);

            function a(e, t, n) {
                let {
                    isDisabled: a,
                    trigger: s
                } = e, p = (0, i.Bi)(), f = (0, c.useRef)(!1), d = (0, c.useRef)(!1), h = () => {
                    (f.current || d.current) && t.open(d.current)
                }, g = e => {
                    f.current || d.current || t.close(e)
                };
                (0, c.useEffect)(() => {
                    let e = e => {
                        n && n.current && "Escape" === e.key && (e.stopPropagation(), t.close(!0))
                    };
                    if (t.isOpen) return document.addEventListener("keydown", e, !0), () => {
                        document.removeEventListener("keydown", e, !0)
                    }
                }, [n, t]);
                let y = () => {
                        d.current = !1, f.current = !1, g(!0)
                    },
                    {
                        hoverProps: m
                    } = (0, l.M)({
                        isDisabled: a,
                        onHoverStart: () => {
                            "focus" !== s && ("pointer" === (0, r.ME)() ? f.current = !0 : f.current = !1, h())
                        },
                        onHoverEnd: () => {
                            "focus" !== s && (d.current = !1, f.current = !1, g())
                        }
                    }),
                    {
                        focusableProps: k
                    } = (0, o.Wc)({
                        isDisabled: a,
                        onFocus: () => {
                            (0, r.pP)() && (d.current = !0, h())
                        },
                        onBlur: () => {
                            d.current = !1, f.current = !1, g(!0)
                        }
                    }, n);
                return {
                    triggerProps: {
                        "aria-describedby": t.isOpen ? p : void 0,
                        ...(0, u.v)(k, m, {
                            onPointerDown: y,
                            onKeyDown: y,
                            tabIndex: void 0
                        })
                    },
                    tooltipProps: {
                        id: p
                    }
                }
            }
        },
        69552: (e, t, n) => {
            n.d(t, {
                f: () => i
            });
            var r = n(28475),
                l = n(86713),
                o = n(82094);

            function i(e, t) {
                let n = (0, r.$)(e, {
                        labelable: !0
                    }),
                    {
                        hoverProps: i
                    } = (0, o.M)({
                        onHoverStart: () => null == t ? void 0 : t.open(!0),
                        onHoverEnd: () => null == t ? void 0 : t.close()
                    });
                return {
                    tooltipProps: (0, l.v)(n, i, {
                        role: "tooltip"
                    })
                }
            }
        },
        74422: (e, t, n) => {
            n.d(t, {
                A: () => eU
            });
            var r, l = n(88491);

            function o() {
                return (o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }).apply(this, arguments)
            }
            let i = ["children", "options"],
                u = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), {
                    for: "htmlFor"
                }),
                c = {
                    amp: "&",
                    apos: "'",
                    gt: ">",
                    lt: "<",
                    nbsp: "\xa0",
                    quot: "“"
                },
                a = ["style", "script"],
                s = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
                p = /mailto:/i,
                f = /\n{2,}$/,
                d = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
                h = /^ *> ?/gm,
                g = /^ {2,}\n/,
                y = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
                m = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
                k = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
                v = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
                b = /^(?:\n *)*\n/,
                x = /\r\n?/g,
                H = /^\[\^([^\]]+)](:.*)\n/,
                M = /^\[\^([^\]]+)]/,
                O = /\f/g,
                _ = /^\s*?\[(x|\s)\]/,
                E = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
                $ = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
                w = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
                I = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
                S = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
                T = /^<!--[\s\S]*?(?:-->)/,
                A = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
                L = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
                B = /^\{.*\}$/,
                P = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
                C = /^<([^ >]+@[^ >]+)>/,
                G = /^<([^ >]+:\/[^ >]+)>/,
                D = /-([a-z])?/gi,
                N = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
                F = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
                R = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
                z = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
                W = /(\[|\])/g,
                j = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
                X = /\t/g,
                U = /^ *\| */,
                Z = /(^ *\||\| *$)/g,
                q = / *$/,
                K = /^ *:-+: *$/,
                V = /^ *:-+ *$/,
                Q = /^ *-+: *$/,
                J = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
                Y = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
                ee = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
                et = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
                en = /^\\([^0-9A-Za-z\s])/,
                er = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
                el = /^\n+/,
                eo = /^([ \t]*)/,
                ei = /\\([^\\])/g,
                eu = / *\n+$/,
                ec = /(?:^|\n)( *)$/,
                ea = "(?:\\d+\\.)",
                es = "(?:[*+-])";

            function ep(e) {
                return "( *)(" + (1 === e ? ea : es) + ") +"
            }
            let ef = ep(1),
                ed = ep(2);

            function eh(e) {
                return RegExp("^" + (1 === e ? ef : ed))
            }
            let eg = eh(1),
                ey = eh(2);

            function em(e) {
                return RegExp("^" + (1 === e ? ef : ed) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? ea : es) + " )[^\\n]*)*(\\n|$)", "gm")
            }
            let ek = em(1),
                ev = em(2);

            function eb(e) {
                let t = 1 === e ? ea : es;
                return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)")
            }
            let ex = eb(1),
                eH = eb(2);

            function eM(e, t) {
                let n = 1 === t,
                    l = n ? ex : eH,
                    o = n ? ek : ev,
                    i = n ? eg : ey;
                return {
                    t(e, t, n) {
                        let r = ec.exec(n);
                        return r && (t.o || !t._ && !t.u) ? l.exec(e = r[1] + e) : null
                    },
                    i: r.HIGH,
                    l(e, t, r) {
                        let l = n ? +e[2] : void 0,
                            u = e[0].replace(f, "\n").match(o),
                            c = !1;
                        return {
                            p: u.map(function(e, n) {
                                let l, o = RegExp("^ {1," + i.exec(e)[0].length + "}", "gm"),
                                    a = e.replace(o, "").replace(i, ""),
                                    s = n === u.length - 1,
                                    p = -1 !== a.indexOf("\n\n") || s && c;
                                c = p;
                                let f = r._,
                                    d = r.o;
                                r.o = !0, p ? (r._ = !1, l = a.replace(eu, "\n\n")) : (r._ = !0, l = a.replace(eu, ""));
                                let h = t(l, r);
                                return r._ = f, r.o = d, h
                            }),
                            m: n,
                            g: l
                        }
                    },
                    h: (t, n, r) => e(t.m ? "ol" : "ul", {
                        key: r.k,
                        start: t.g
                    }, t.p.map(function(t, l) {
                        return e("li", {
                            key: l
                        }, n(t, r))
                    }))
                }
            }
            let eO = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
                e_ = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
                eE = [d, m, k, E, w, $, T, N, ek, ex, ev, eH],
                e$ = [...eE, /^[^\n]+(?:  \n|\n{2,})/, I, L];

            function ew(e) {
                return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
            }

            function eI(e) {
                return Q.test(e) ? "right" : K.test(e) ? "center" : V.test(e) ? "left" : null
            }

            function eS(e, t, n) {
                let r = n.$;
                n.$ = !0;
                let l = t(e.trim(), n);
                n.$ = r;
                let o = [
                    []
                ];
                return l.forEach(function(e, t) {
                    "tableSeparator" === e.type ? 0 !== t && t !== l.length - 1 && o.push([]) : ("text" !== e.type || null != l[t + 1] && "tableSeparator" !== l[t + 1].type || (e.v = e.v.replace(q, "")), o[o.length - 1].push(e))
                }), o
            }

            function eT(e, t, n) {
                var r;
                n._ = !0;
                let l = eS(e[1], t, n),
                    o = e[2].replace(Z, "").split("|").map(eI),
                    i = (r = e[3], r.trim().split("\n").map(function(e) {
                        return eS(e, t, n)
                    }));
                return n._ = !1, {
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

            function eL(e) {
                return function(t, n) {
                    return n._ ? e.exec(t) : null
                }
            }

            function eB(e) {
                return function(t, n) {
                    return n._ || n.u ? e.exec(t) : null
                }
            }

            function eP(e) {
                return function(t, n) {
                    return n._ || n.u ? null : e.exec(t)
                }
            }

            function eC(e) {
                return function(t) {
                    return e.exec(t)
                }
            }

            function eG(e, t, n) {
                if (t._ || t.u || n && !n.endsWith("\n")) return null;
                let r = "";
                e.split("\n").every(e => !eE.some(t => t.test(e)) && (r += e + "\n", e.trim()));
                let l = r.trimEnd();
                return "" == l ? null : [r, l]
            }

            function eD(e) {
                try {
                    if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return
                } catch (e) {
                    return null
                }
                return e
            }

            function eN(e) {
                return e.replace(ei, "$1")
            }

            function eF(e, t, n) {
                let r = n._ || !1,
                    l = n.u || !1;
                n._ = !0, n.u = !0;
                let o = e(t, n);
                return n._ = r, n.u = l, o
            }

            function eR(e, t, n) {
                return n._ = !1, e(t, n)
            }
            let ez = (e, t, n) => ({
                v: eF(t, e[1], n)
            });

            function eW() {
                return {}
            }

            function ej() {
                return null
            }

            function eX(e, t, n) {
                let r = e,
                    l = t.split(".");
                for (; l.length && void 0 !== (r = r[l[0]]);) l.shift();
                return r || n
            }! function(e) {
                e[e.MAX = 0] = "MAX", e[e.HIGH = 1] = "HIGH", e[e.MED = 2] = "MED", e[e.LOW = 3] = "LOW", e[e.MIN = 4] = "MIN"
            }(r || (r = {}));
            let eU = e => {
                let {
                    children: t,
                    options: n
                } = e, f = function(e, t) {
                    if (null == e) return {};
                    var n, r, l = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) t.indexOf(n = o[r]) >= 0 || (l[n] = e[n]);
                    return l
                }(e, i);
                return l.cloneElement(function(e, t = {}) {
                    var n;
                    let i;
                    t.overrides = t.overrides || {}, t.slugify = t.slugify || ew, t.namedCodesToUnicode = t.namedCodesToUnicode ? o({}, c, t.namedCodesToUnicode) : c;
                    let f = t.createElement || l.createElement;

                    function Z(e, n, ...r) {
                        let l = eX(t.overrides, `${e}.props`, {});
                        return f(function(e, t) {
                            let n = eX(t, e);
                            return n ? "function" == typeof n || "object" == typeof n && "render" in n ? n : eX(t, `${e}.component`, e) : e
                        }(e, t.overrides), o({}, n, l, {
                            className: function(...e) {
                                return e.filter(Boolean).join(" ")
                            }(null == n ? void 0 : n.className, l.className) || void 0
                        }), ...r)
                    }

                    function q(e) {
                        let n, r = !1;
                        t.forceInline ? r = !0 : t.forceBlock || (r = !1 === j.test(e));
                        let o = ec(eu(r ? e : `${e.trimEnd().replace(el,"")}

`, {
                            _: r
                        }));
                        for (;
                            "string" == typeof o[o.length - 1] && !o[o.length - 1].trim();) o.pop();
                        if (null === t.wrapper) return o;
                        let i = t.wrapper || (r ? "span" : "div");
                        if (o.length > 1 || t.forceWrapper) n = o;
                        else {
                            if (1 === o.length) return "string" == typeof(n = o[0]) ? Z("span", {
                                key: "outer"
                            }, n) : n;
                            n = null
                        }
                        return l.createElement(i, {
                            key: "outer"
                        }, n)
                    }

                    function K(e) {
                        let t = e.match(s);
                        return t ? t.reduce(function(e, t, n) {
                            let r = t.indexOf("=");
                            if (-1 !== r) {
                                var o, i;
                                let c = (-1 !== (o = t.slice(0, r)).indexOf("-") && null === o.match(A) && (o = o.replace(D, function(e, t) {
                                        return t.toUpperCase()
                                    })), o).trim(),
                                    a = function(e) {
                                        let t = e[0];
                                        return ('"' === t || "'" === t) && e.length >= 2 && e[e.length - 1] === t ? e.slice(1, -1) : e
                                    }(t.slice(r + 1).trim()),
                                    s = u[c] || c,
                                    p = e[s] = (i = a, "style" === c ? i.split(/;\s?/).reduce(function(e, t) {
                                        let n = t.slice(0, t.indexOf(":"));
                                        return e[n.replace(/(-[a-z])/g, e => e[1].toUpperCase())] = t.slice(n.length + 1).trim(), e
                                    }, {}) : "href" === c ? eD(i) : (i.match(B) && (i = i.slice(1, i.length - 1)), "true" === i || "false" !== i && i));
                                "string" == typeof p && (I.test(p) || L.test(p)) && (e[s] = l.cloneElement(q(p.trim()), {
                                    key: n
                                }))
                            } else "style" !== t && (e[u[t] || t] = !0);
                            return e
                        }, {}) : null
                    }
                    let V = [],
                        Q = {},
                        ei = {
                            blockQuote: {
                                t: eP(d),
                                i: r.HIGH,
                                l: (e, t, n) => ({
                                    v: t(e[0].replace(h, ""), n)
                                }),
                                h: (e, t, n) => Z("blockquote", {
                                    key: n.k
                                }, t(e.v, n))
                            },
                            breakLine: {
                                t: eC(g),
                                i: r.HIGH,
                                l: eW,
                                h: (e, t, n) => Z("br", {
                                    key: n.k
                                })
                            },
                            breakThematic: {
                                t: eP(y),
                                i: r.HIGH,
                                l: eW,
                                h: (e, t, n) => Z("hr", {
                                    key: n.k
                                })
                            },
                            codeBlock: {
                                t: eP(k),
                                i: r.MAX,
                                l: e => ({
                                    v: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
                                    M: void 0
                                }),
                                h: (e, t, n) => Z("pre", {
                                    key: n.k
                                }, Z("code", o({}, e.O, {
                                    className: e.M ? `lang-${e.M}` : ""
                                }), e.v))
                            },
                            codeFenced: {
                                t: eP(m),
                                i: r.MAX,
                                l: e => ({
                                    O: K(e[3] || ""),
                                    v: e[4],
                                    M: e[2] || void 0,
                                    type: "codeBlock"
                                })
                            },
                            codeInline: {
                                t: eB(v),
                                i: r.LOW,
                                l: e => ({
                                    v: e[2]
                                }),
                                h: (e, t, n) => Z("code", {
                                    key: n.k
                                }, e.v)
                            },
                            footnote: {
                                t: eP(H),
                                i: r.MAX,
                                l: e => (V.push({
                                    I: e[2],
                                    j: e[1]
                                }), {}),
                                h: ej
                            },
                            footnoteReference: {
                                t: eL(M),
                                i: r.HIGH,
                                l: e => ({
                                    v: e[1],
                                    B: `#${t.slugify(e[1])}`
                                }),
                                h: (e, t, n) => Z("a", {
                                    key: n.k,
                                    href: eD(e.B)
                                }, Z("sup", {
                                    key: n.k
                                }, e.v))
                            },
                            gfmTask: {
                                t: eL(_),
                                i: r.HIGH,
                                l: e => ({
                                    R: "x" === e[1].toLowerCase()
                                }),
                                h: (e, t, n) => Z("input", {
                                    checked: e.R,
                                    key: n.k,
                                    readOnly: !0,
                                    type: "checkbox"
                                })
                            },
                            heading: {
                                t: eP(t.enforceAtxHeadings ? $ : E),
                                i: r.HIGH,
                                l: (e, n, r) => ({
                                    v: eF(n, e[2], r),
                                    T: t.slugify(e[2]),
                                    C: e[1].length
                                }),
                                h: (e, t, n) => Z(`h${e.C}`, {
                                    id: e.T,
                                    key: n.k
                                }, t(e.v, n))
                            },
                            headingSetext: {
                                t: eP(w),
                                i: r.MAX,
                                l: (e, t, n) => ({
                                    v: eF(t, e[1], n),
                                    C: "=" === e[2] ? 1 : 2,
                                    type: "heading"
                                })
                            },
                            htmlComment: {
                                t: eC(T),
                                i: r.HIGH,
                                l: () => ({}),
                                h: ej
                            },
                            image: {
                                t: eB(e_),
                                i: r.HIGH,
                                l: e => ({
                                    D: e[1],
                                    B: eN(e[2]),
                                    F: e[3]
                                }),
                                h: (e, t, n) => Z("img", {
                                    key: n.k,
                                    alt: e.D || void 0,
                                    title: e.F || void 0,
                                    src: eD(e.B)
                                })
                            },
                            link: {
                                t: eL(eO),
                                i: r.LOW,
                                l: (e, t, n) => ({
                                    v: function(e, t, n) {
                                        let r = n._ || !1,
                                            l = n.u || !1;
                                        n._ = !1, n.u = !0;
                                        let o = e(t, n);
                                        return n._ = r, n.u = l, o
                                    }(t, e[1], n),
                                    B: eN(e[2]),
                                    F: e[3]
                                }),
                                h: (e, t, n) => Z("a", {
                                    key: n.k,
                                    href: eD(e.B),
                                    title: e.F
                                }, t(e.v, n))
                            },
                            linkAngleBraceStyleDetector: {
                                t: eL(G),
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
                                t: (e, t) => t.N ? null : eL(P)(e, t),
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
                                t: eL(C),
                                i: r.MAX,
                                l(e) {
                                    let t = e[1],
                                        n = e[1];
                                    return p.test(n) || (n = "mailto:" + n), {
                                        v: [{
                                            v: t.replace("mailto:", ""),
                                            type: "text"
                                        }],
                                        B: n,
                                        type: "link"
                                    }
                                }
                            },
                            orderedList: eM(Z, 1),
                            unorderedList: eM(Z, 2),
                            newlineCoalescer: {
                                t: eP(b),
                                i: r.LOW,
                                l: eW,
                                h: () => "\n"
                            },
                            paragraph: {
                                t: eG,
                                i: r.LOW,
                                l: ez,
                                h: (e, t, n) => Z("p", {
                                    key: n.k
                                }, t(e.v, n))
                            },
                            ref: {
                                t: eL(F),
                                i: r.MAX,
                                l: e => (Q[e[1]] = {
                                    B: e[2],
                                    F: e[4]
                                }, {}),
                                h: ej
                            },
                            refImage: {
                                t: eB(R),
                                i: r.MAX,
                                l: e => ({
                                    D: e[1] || void 0,
                                    P: e[2]
                                }),
                                h: (e, t, n) => Z("img", {
                                    key: n.k,
                                    alt: e.D,
                                    src: eD(Q[e.P].B),
                                    title: Q[e.P].F
                                })
                            },
                            refLink: {
                                t: eL(z),
                                i: r.MAX,
                                l: (e, t, n) => ({
                                    v: t(e[1], n),
                                    Z: t(e[0].replace(W, "\\$1"), n),
                                    P: e[2]
                                }),
                                h: (e, t, n) => Q[e.P] ? Z("a", {
                                    key: n.k,
                                    href: eD(Q[e.P].B),
                                    title: Q[e.P].F
                                }, t(e.v, n)) : Z("span", {
                                    key: n.k
                                }, t(e.Z, n))
                            },
                            table: {
                                t: eP(N),
                                i: r.HIGH,
                                l: eT,
                                h: (e, t, n) => Z("table", {
                                    key: n.k
                                }, Z("thead", null, Z("tr", null, e.L.map(function(r, l) {
                                    return Z("th", {
                                        key: l,
                                        style: eA(e, l)
                                    }, t(r, n))
                                }))), Z("tbody", null, e.A.map(function(r, l) {
                                    return Z("tr", {
                                        key: l
                                    }, r.map(function(r, l) {
                                        return Z("td", {
                                            key: l,
                                            style: eA(e, l)
                                        }, t(r, n))
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
                                t: eC(er),
                                i: r.MIN,
                                l: e => ({
                                    v: e[0].replace(S, (e, n) => t.namedCodesToUnicode[n] ? t.namedCodesToUnicode[n] : e)
                                }),
                                h: e => e.v
                            },
                            textBolded: {
                                t: eB(J),
                                i: r.MED,
                                l: (e, t, n) => ({
                                    v: t(e[2], n)
                                }),
                                h: (e, t, n) => Z("strong", {
                                    key: n.k
                                }, t(e.v, n))
                            },
                            textEmphasized: {
                                t: eB(Y),
                                i: r.LOW,
                                l: (e, t, n) => ({
                                    v: t(e[2], n)
                                }),
                                h: (e, t, n) => Z("em", {
                                    key: n.k
                                }, t(e.v, n))
                            },
                            textEscaped: {
                                t: eB(en),
                                i: r.HIGH,
                                l: e => ({
                                    v: e[1],
                                    type: "text"
                                })
                            },
                            textMarked: {
                                t: eB(ee),
                                i: r.LOW,
                                l: ez,
                                h: (e, t, n) => Z("mark", {
                                    key: n.k
                                }, t(e.v, n))
                            },
                            textStrikethroughed: {
                                t: eB(et),
                                i: r.LOW,
                                l: ez,
                                h: (e, t, n) => Z("del", {
                                    key: n.k
                                }, t(e.v, n))
                            }
                        };
                    !0 !== t.disableParsingRawHTML && (ei.htmlBlock = {
                        t: eC(I),
                        i: r.HIGH,
                        l(e, t, n) {
                            let [, r] = e[3].match(eo), l = RegExp(`^${r}`, "gm"), o = e[3].replace(l, ""), i = e$.some(e => e.test(o)) ? eR : eF, u = e[1].toLowerCase(), c = -1 !== a.indexOf(u);
                            n.N = n.N || "a" === u;
                            let s = c ? e[3] : i(t, o, n);
                            return n.N = !1, {
                                O: K(e[2]),
                                v: s,
                                G: c,
                                H: c ? u : e[1]
                            }
                        },
                        h: (e, t, n) => Z(e.H, o({
                            key: n.k
                        }, e.O), e.G ? e.v : t(e.v, n))
                    }, ei.htmlSelfClosing = {
                        t: eC(L),
                        i: r.HIGH,
                        l: e => ({
                            O: K(e[2] || ""),
                            H: e[1]
                        }),
                        h: (e, t, n) => Z(e.H, o({}, e.O, {
                            key: n.k
                        }))
                    });
                    let eu = ((i = Object.keys(ei)).sort(function(e, t) {
                            let n = ei[e].i,
                                r = ei[t].i;
                            return n !== r ? n - r : e < t ? -1 : 1
                        }), function(e, t) {
                            return function e(t, n) {
                                let r = [],
                                    l = "";
                                for (; t;) {
                                    let o = 0;
                                    for (; o < i.length;) {
                                        let u = i[o],
                                            c = ei[u],
                                            a = c.t(t, n, l);
                                        if (a) {
                                            let o = a[0];
                                            t = t.substring(o.length);
                                            let i = c.l(a, e, n);
                                            null == i.type && (i.type = u), r.push(i), l = o;
                                            break
                                        }
                                        o++
                                    }
                                }
                                return r
                            }(e.replace(x, "\n").replace(O, "").replace(X, "    "), t)
                        }),
                        ec = (n = function(e, t, n) {
                            return ei[e.type].h(e, t, n)
                        }, function e(t, r = {}) {
                            if (Array.isArray(t)) {
                                let n = r.k,
                                    l = [],
                                    o = !1;
                                for (let n = 0; n < t.length; n++) {
                                    r.k = n;
                                    let i = e(t[n], r),
                                        u = "string" == typeof i;
                                    u && o ? l[l.length - 1] += i : null !== i && l.push(i), o = u
                                }
                                return r.k = n, l
                            }
                            return n(t, e, r)
                        }),
                        ea = q(e);
                    return V.length ? Z("div", null, ea, Z("footer", {
                        key: "footer"
                    }, V.map(function(e) {
                        return Z("div", {
                            id: t.slugify(e.j),
                            key: e.j
                        }, e.j, ec(eu(e.I, {
                            _: !0
                        })))
                    }))) : ea
                }(t, n), f)
            }
        }
    }
]);