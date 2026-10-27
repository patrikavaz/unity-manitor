;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "24723999-f6ac-a4b2-890b-69cf1faf7cf9")
    } catch (e) {}
}();
(() => {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 401861, 841889, e => {
        var t = e.i(167358),
            r = e.i(722978),
            n = e.i(495056),
            l = e.i(160089),
            a = e.i(146911);
        let o = ({
                title: e,
                text: o,
                action: i,
                truncate: s,
                className: c = "",
                isContained: u,
                dismiss: d
            }) => {
                let f = (0, n.useMemo)(() => `unity-alert-${o?.substring(0,30).replaceAll(" ","_")}`, [o]),
                    [p, m] = (0, n.useState)(!0),
                    [h, y] = (0, n.useState)(!1);
                return ((0, n.useEffect)(() => {
                    localStorage?.getItem(f) && y(!0)
                }, [f]), h) ? null : (0, t.jsx)("div", {
                    className: (0, r.q)({
                        container: u
                    }),
                    "data-sentry-component": "Alert",
                    "data-sentry-source-file": "Alert.tsx",
                    children: (0, t.jsxs)("div", {
                        className: (0, r.q)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
                            flex: d?.enabled
                        }, {
                            "rounded-lg": u
                        }, c),
                        children: [(0, t.jsx)(l.Info, {
                            size: 18,
                            className: "ph-fill fill-blue absolute top-5 left-[1rem]",
                            weight: "fill",
                            "data-sentry-element": "Info",
                            "data-sentry-source-file": "Alert.tsx"
                        }), (0, t.jsxs)("div", {
                            className: "",
                            children: [e && (0, t.jsx)("div", {
                                className: "text-small-bold",
                                children: e
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("div", {
                                    className: (0, r.q)({
                                        "line-clamp-4 sm:line-clamp-2": s?.enabled && p
                                    }),
                                    children: o
                                }), s?.enabled && (0, t.jsx)("button", {
                                    onClick: () => m(!p),
                                    className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                    children: p ? s.seeMoreLabel : s.seeLessLabel
                                })]
                            })]
                        }), (i?.href || d?.enabled) && (0, t.jsxs)("div", {
                            className: "sm:auto inline-flex w-fit items-center gap-4 [&>*]:whitespace-nowrap",
                            children: [i && (0, t.jsx)(a.f, {
                                className: "mx-auto mt-0 inline-block whitespace-nowrap",
                                href: i.href,
                                target: i.target || "_self",
                                size: "tiny",
                                underline: !0,
                                children: i.title
                            }), d?.enabled && (0, t.jsx)("button", {
                                onClick: () => {
                                    y(!0), localStorage.setItem(f, Date.now().toString())
                                },
                                className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                children: d?.dismissLabel ?? "Dismiss"
                            })]
                        })]
                    })
                })
            },
            i = ({
                title: e,
                text: n,
                action: l,
                theme: a,
                truncate: i,
                dismiss: s,
                isContained: c,
                isHidden: u,
                spacing: d
            }) => {
                let f = (0, r.q)({
                    "pt-10": d?.top
                }, {
                    "pb-10": d?.bottom
                }, {
                    "dark bg-black": "dark" === a
                });
                return u || !n ? null : (0, t.jsx)("section", {
                    className: f,
                    "data-sentry-component": "AlertBlock",
                    "data-sentry-source-file": "AlertBlock.tsx",
                    children: (0, t.jsx)(o, {
                        title: e,
                        text: n,
                        isContained: c,
                        truncate: i || {},
                        dismiss: s || {},
                        action: l && {
                            title: l?.text || "",
                            href: l?.fieldLink?.linkReference?.href?.current || "",
                            target: l?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                        },
                        "data-sentry-element": "Alert",
                        "data-sentry-source-file": "AlertBlock.tsx"
                    })
                })
            };
        e.s(["f", 0, i], 841889), e.s(["f", 0, i], 401861)
    }, 480880, e => {
        var t = e.i(167358),
            r = e.i(495056);
        e.s(["f", 0, ({
            blocks: e,
            blockMap: n,
            ...l
        }) => (0, t.jsx)(t.Fragment, {
            children: e?.map((e, a) => {
                let o = e?._type,
                    i = n[o];
                return e.isHidden ? null : i ? (0, t.jsx)("div", {
                    children: r.default.createElement(i, {
                        key: `block-${a}`,
                        ...e,
                        blockIndex: a + 1,
                        blockType: o,
                        blockKey: `${o}-${a}`,
                        ...l
                    })
                }, `block-${a}`) : void 0
            })
        })])
    }, 195051, 725751, e => {
        var t = e.i(167358),
            r = e.i(712598),
            n = e.i(749583),
            l = e.i(239273),
            a = e.i(805518);
        e.s(["f", 0, ({
            blockedMessage: e,
            consentButtonLabel: o
        }) => {
            let i = "C0004";
            return (0, t.jsx)(t.Fragment, {
                children: !(() => {
                    let [e] = (0, l.f)("OptanonConsent") || "", t = {};
                    return e && e.split("groups=")[1].split("&")[0].split("%2C").forEach(e => {
                        let [r, n] = e.split("%3A");
                        t[r] = parseInt(n)
                    }), t[i]
                })() && (0, t.jsxs)("div", {
                    className: "consent absolute top-0 right-0 bottom-0 left-0 z-10 flex flex-col items-center overflow-auto rounded-2xl bg-black p-3 leading-5 text-white opacity-90 sm:justify-center sm:p-5",
                    children: [(0, t.jsx)(a.f, {
                        className: "mx-auto text-center sm:w-4/5 sm:text-base",
                        children: (0, t.jsx)(r.f, {
                            value: e
                        })
                    }), (0, t.jsx)("div", {
                        className: "mt-5",
                        children: (0, t.jsx)(n.f, {
                            rounded: !0,
                            target: "_self",
                            variant: "primary",
                            onPress: () => {
                                let e = document.getElementById("ot-sdk-btn"),
                                    t = document.getElementById(`ot-header-id-${i}`),
                                    r = window;
                                r && r.OneTrust ? r.OneTrust.ToggleInfoDisplay() : e.click(), t.click()
                            },
                            children: o
                        })
                    })]
                })
            })
        }], 195051);
        var o = e.i(495056),
            i = e.i(210310),
            s = e.i(326388);
        e.s(["f", 0, ({
            theme: e,
            isHidden: r,
            verticalHeadingClass: n,
            productCatalogItems: l,
            htmlTableContent: a
        }) => {
            let {
                appendCommerceDataForMultipleProducts: c
            } = (0, s.f)(), u = (0, o.useCallback)(e => {
                let t = c(e, l);
                return t || e
            }, [l, c]), d = (0, o.useMemo)(() => {
                let e = a.rows.map(e => (e.cells = e.cells.map(e => u(e)), e));
                return {
                    ...a,
                    rows: e
                }
            }, [a, u]);
            return (0, t.jsx)(t.Fragment, {
                children: !r && (0, t.jsx)("section", {
                    className: "dark" === e ? "dark" : "",
                    children: (0, t.jsx)("div", {
                        className: "mx-auto max-w-7xl p-6 dark:bg-black",
                        children: (0, t.jsx)(i.f, {
                            verticalHeadingClass: n || "",
                            table: d
                        })
                    })
                })
            })
        }], 725751)
    }, 387660, e => {
        var t = e.i(869324);
        e.s(["f", 0, e => {
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
            (0, t.U)(r)
        }])
    }, 256420, e => {
        var t, r, n = e.i(495056);

        function l() {
            return (l = Object.assign.bind()).apply(this, arguments)
        }
        let a = ["children", "options"],
            o = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, t) => (e[t.toLowerCase()] = t, e), {
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
            c = /([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,
            u = /mailto:/i,
            d = /\n{2,}$/,
            f = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
            p = /^ *> ?/gm,
            m = /^ {2,}\n/,
            h = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
            y = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
            g = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
            b = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
            x = /^(?:\n *)*\n/,
            k = /\r\n?/g,
            v = /^\[\^([^\]]+)](:.*)\n/,
            w = /^\[\^([^\]]+)]/,
            j = /\f/g,
            E = /^\s*?\[(x|\s)\]/,
            C = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
            I = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
            N = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
            T = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
            H = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
            L = /^<!--[\s\S]*?(?:-->)/,
            M = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
            O = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
            _ = /^\{.*\}$/,
            S = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
            A = /^<([^ >]+@[^ >]+)>/,
            B = /^<([^ >]+:\/[^ >]+)>/,
            $ = /-([a-z])?/gi,
            D = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
            P = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
            F = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
            R = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
            z = /(\[|\])/g,
            G = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
            U = /\t/g,
            W = /^ *\| */,
            X = /(^ *\||\| *$)/g,
            q = / *$/,
            Y = /^ *:-+: *$/,
            Z = /^ *:-+ *$/,
            K = /^ *-+: *$/,
            V = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
            Q = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
            J = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
            ee = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
            et = /^\\([^0-9A-Za-z\s])/,
            er = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
            en = /^\n+/,
            el = /^([ \t]*)/,
            ea = /\\([^\\])/g,
            eo = / *\n+$/,
            ei = /(?:^|\n)( *)$/,
            es = "(?:\\d+\\.)",
            ec = "(?:[*+-])";

        function eu(e) {
            return "( *)(" + (1 === e ? es : ec) + ") +"
        }
        let ed = eu(1),
            ef = eu(2);

        function ep(e) {
            return RegExp("^" + (1 === e ? ed : ef))
        }
        let em = ep(1),
            eh = ep(2);

        function ey(e) {
            return RegExp("^" + (1 === e ? ed : ef) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? es : ec) + " )[^\\n]*)*(\\n|$)", "gm")
        }
        let eg = ey(1),
            eb = ey(2);

        function ex(e) {
            let t = 1 === e ? es : ec;
            return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)")
        }
        let ek = ex(1),
            ev = ex(2);

        function ew(e, t) {
            let n = 1 === t,
                l = n ? ek : ev,
                a = n ? eg : eb,
                o = n ? em : eh;
            return {
                t(e, t, r) {
                    let n = ei.exec(r);
                    return n && (t.o || !t._ && !t.u) ? l.exec(e = n[1] + e) : null
                },
                i: r.HIGH,
                l(e, t, r) {
                    let l = n ? +e[2] : void 0,
                        i = e[0].replace(d, "\n").match(a),
                        s = !1;
                    return {
                        p: i.map(function(e, n) {
                            let l, a = RegExp("^ {1," + o.exec(e)[0].length + "}", "gm"),
                                c = e.replace(a, "").replace(o, ""),
                                u = n === i.length - 1,
                                d = -1 !== c.indexOf("\n\n") || u && s;
                            s = d;
                            let f = r._,
                                p = r.o;
                            r.o = !0, d ? (r._ = !1, l = c.replace(eo, "\n\n")) : (r._ = !0, l = c.replace(eo, ""));
                            let m = t(l, r);
                            return r._ = f, r.o = p, m
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
            eE = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
            eC = [f, y, g, C, N, I, L, D, eg, ek, eb, ev],
            eI = [...eC, /^[^\n]+(?:  \n|\n{2,})/, T, O];

        function eN(e) {
            return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
        }

        function eT(e) {
            return K.test(e) ? "right" : Y.test(e) ? "center" : Z.test(e) ? "left" : null
        }

        function eH(e, t, r) {
            let n = r.$;
            r.$ = !0;
            let l = t(e.trim(), r);
            r.$ = n;
            let a = [
                []
            ];
            return l.forEach(function(e, t) {
                "tableSeparator" === e.type ? 0 !== t && t !== l.length - 1 && a.push([]) : ("text" !== e.type || null != l[t + 1] && "tableSeparator" !== l[t + 1].type || (e.v = e.v.replace(q, "")), a[a.length - 1].push(e))
            }), a
        }

        function eL(e, t, r) {
            var n;
            r._ = !0;
            let l = eH(e[1], t, r),
                a = e[2].replace(X, "").split("|").map(eT),
                o = (n = e[3], n.trim().split("\n").map(function(e) {
                    return eH(e, t, r)
                }));
            return r._ = !1, {
                S: a,
                A: o,
                L: l,
                type: "table"
            }
        }

        function eM(e, t) {
            return null == e.S[t] ? {} : {
                textAlign: e.S[t]
            }
        }

        function eO(e) {
            return function(t, r) {
                return r._ ? e.exec(t) : null
            }
        }

        function e_(e) {
            return function(t, r) {
                return r._ || r.u ? e.exec(t) : null
            }
        }

        function eS(e) {
            return function(t, r) {
                return r._ || r.u ? null : e.exec(t)
            }
        }

        function eA(e) {
            return function(t) {
                return e.exec(t)
            }
        }

        function eB(e, t, r) {
            if (t._ || t.u || r && !r.endsWith("\n")) return null;
            let n = "";
            e.split("\n").every(e => !eC.some(t => t.test(e)) && (n += e + "\n", e.trim()));
            let l = n.trimEnd();
            return "" == l ? null : [n, l]
        }

        function e$(e) {
            try {
                if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return
            } catch (e) {
                return null
            }
            return e
        }

        function eD(e) {
            return e.replace(ea, "$1")
        }

        function eP(e, t, r) {
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
            v: eP(t, e[1], r)
        });

        function ez() {
            return {}
        }

        function eG() {
            return null
        }

        function eU(e, t, r) {
            let n = e,
                l = t.split(".");
            for (; l.length && void 0 !== (n = n[l[0]]);) l.shift();
            return n || r
        }(t = r || (r = {}))[t.MAX = 0] = "MAX", t[t.HIGH = 1] = "HIGH", t[t.MED = 2] = "MED", t[t.LOW = 3] = "LOW", t[t.MIN = 4] = "MIN", e.s(["f", 0, e => {
            let {
                children: t,
                options: d
            } = e, X = function(e, t) {
                if (null == e) return {};
                var r, n, l = {},
                    a = Object.keys(e);
                for (n = 0; n < a.length; n++) t.indexOf(r = a[n]) >= 0 || (l[r] = e[r]);
                return l
            }(e, a);
            return n.cloneElement(function(e, t = {}) {
                var a;
                let d;
                t.overrides = t.overrides || {}, t.slugify = t.slugify || eN, t.namedCodesToUnicode = t.namedCodesToUnicode ? l({}, i, t.namedCodesToUnicode) : i;
                let X = t.createElement || n.createElement;

                function q(e, r, ...n) {
                    var a;
                    let o, i = eU(t.overrides, `${e}.props`, {});
                    return X((o = eU(a = t.overrides, e)) ? "function" == typeof o || "object" == typeof o && "render" in o ? o : eU(a, `${e}.component`, e) : e, l({}, r, i, {
                        className: function(...e) {
                            return e.filter(Boolean).join(" ")
                        }(null == r ? void 0 : r.className, i.className) || void 0
                    }), ...n)
                }

                function Y(e) {
                    let r, l = !1;
                    t.forceInline ? l = !0 : t.forceBlock || (l = !1 === G.test(e));
                    let a = es(ei(l ? e : `${e.trimEnd().replace(en,"")}

`, {
                        _: l
                    }));
                    for (;
                        "string" == typeof a[a.length - 1] && !a[a.length - 1].trim();) a.pop();
                    if (null === t.wrapper) return a;
                    let o = t.wrapper || (l ? "span" : "div");
                    if (a.length > 1 || t.forceWrapper) r = a;
                    else {
                        if (1 === a.length) return "string" == typeof(r = a[0]) ? q("span", {
                            key: "outer"
                        }, r) : r;
                        r = null
                    }
                    return n.createElement(o, {
                        key: "outer"
                    }, r)
                }

                function Z(e) {
                    let t = e.match(c);
                    return t ? t.reduce(function(e, t, r) {
                        let l = t.indexOf("=");
                        if (-1 !== l) {
                            var a, i, s;
                            let c, u = (-1 !== (a = t.slice(0, l)).indexOf("-") && null === a.match(M) && (a = a.replace($, function(e, t) {
                                    return t.toUpperCase()
                                })), a).trim(),
                                d = ('"' === (c = (i = t.slice(l + 1).trim())[0]) || "'" === c) && i.length >= 2 && i[i.length - 1] === c ? i.slice(1, -1) : i,
                                f = o[u] || u,
                                p = e[f] = (s = d, "style" === u ? s.split(/;\s?/).reduce(function(e, t) {
                                    let r = t.slice(0, t.indexOf(":"));
                                    return e[r.replace(/(-[a-z])/g, e => e[1].toUpperCase())] = t.slice(r.length + 1).trim(), e
                                }, {}) : "href" === u ? e$(s) : (s.match(_) && (s = s.slice(1, s.length - 1)), "true" === s || "false" !== s && s));
                            "string" == typeof p && (T.test(p) || O.test(p)) && (e[f] = n.cloneElement(Y(p.trim()), {
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
                            t: eS(f),
                            i: r.HIGH,
                            l: (e, t, r) => ({
                                v: t(e[0].replace(p, ""), r)
                            }),
                            h: (e, t, r) => q("blockquote", {
                                key: r.k
                            }, t(e.v, r))
                        },
                        breakLine: {
                            t: eA(m),
                            i: r.HIGH,
                            l: ez,
                            h: (e, t, r) => q("br", {
                                key: r.k
                            })
                        },
                        breakThematic: {
                            t: eS(h),
                            i: r.HIGH,
                            l: ez,
                            h: (e, t, r) => q("hr", {
                                key: r.k
                            })
                        },
                        codeBlock: {
                            t: eS(g),
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
                            t: eS(y),
                            i: r.MAX,
                            l: e => ({
                                O: Z(e[3] || ""),
                                v: e[4],
                                M: e[2] || void 0,
                                type: "codeBlock"
                            })
                        },
                        codeInline: {
                            t: e_(b),
                            i: r.LOW,
                            l: e => ({
                                v: e[2]
                            }),
                            h: (e, t, r) => q("code", {
                                key: r.k
                            }, e.v)
                        },
                        footnote: {
                            t: eS(v),
                            i: r.MAX,
                            l: e => (K.push({
                                I: e[2],
                                j: e[1]
                            }), {}),
                            h: eG
                        },
                        footnoteReference: {
                            t: eO(w),
                            i: r.HIGH,
                            l: e => ({
                                v: e[1],
                                B: `#${t.slugify(e[1])}`
                            }),
                            h: (e, t, r) => q("a", {
                                key: r.k,
                                href: e$(e.B)
                            }, q("sup", {
                                key: r.k
                            }, e.v))
                        },
                        gfmTask: {
                            t: eO(E),
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
                            t: eS(t.enforceAtxHeadings ? I : C),
                            i: r.HIGH,
                            l: (e, r, n) => ({
                                v: eP(r, e[2], n),
                                T: t.slugify(e[2]),
                                C: e[1].length
                            }),
                            h: (e, t, r) => q(`h${e.C}`, {
                                id: e.T,
                                key: r.k
                            }, t(e.v, r))
                        },
                        headingSetext: {
                            t: eS(N),
                            i: r.MAX,
                            l: (e, t, r) => ({
                                v: eP(t, e[1], r),
                                C: "=" === e[2] ? 1 : 2,
                                type: "heading"
                            })
                        },
                        htmlComment: {
                            t: eA(L),
                            i: r.HIGH,
                            l: () => ({}),
                            h: eG
                        },
                        image: {
                            t: e_(eE),
                            i: r.HIGH,
                            l: e => ({
                                D: e[1],
                                B: eD(e[2]),
                                F: e[3]
                            }),
                            h: (e, t, r) => q("img", {
                                key: r.k,
                                alt: e.D || void 0,
                                title: e.F || void 0,
                                src: e$(e.B)
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
                                    B: eD(e[2]),
                                    F: e[3]
                                }
                            },
                            h: (e, t, r) => q("a", {
                                key: r.k,
                                href: e$(e.B),
                                title: e.F
                            }, t(e.v, r))
                        },
                        linkAngleBraceStyleDetector: {
                            t: eO(B),
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
                            t: (e, t) => t.N ? null : eO(S)(e, t),
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
                            t: eO(A),
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
                        orderedList: ew(q, 1),
                        unorderedList: ew(q, 2),
                        newlineCoalescer: {
                            t: eS(x),
                            i: r.LOW,
                            l: ez,
                            h: () => "\n"
                        },
                        paragraph: {
                            t: eB,
                            i: r.LOW,
                            l: eR,
                            h: (e, t, r) => q("p", {
                                key: r.k
                            }, t(e.v, r))
                        },
                        ref: {
                            t: eO(P),
                            i: r.MAX,
                            l: e => (ea[e[1]] = {
                                B: e[2],
                                F: e[4]
                            }, {}),
                            h: eG
                        },
                        refImage: {
                            t: e_(F),
                            i: r.MAX,
                            l: e => ({
                                D: e[1] || void 0,
                                P: e[2]
                            }),
                            h: (e, t, r) => q("img", {
                                key: r.k,
                                alt: e.D,
                                src: e$(ea[e.P].B),
                                title: ea[e.P].F
                            })
                        },
                        refLink: {
                            t: eO(R),
                            i: r.MAX,
                            l: (e, t, r) => ({
                                v: t(e[1], r),
                                Z: t(e[0].replace(z, "\\$1"), r),
                                P: e[2]
                            }),
                            h: (e, t, r) => ea[e.P] ? q("a", {
                                key: r.k,
                                href: e$(ea[e.P].B),
                                title: ea[e.P].F
                            }, t(e.v, r)) : q("span", {
                                key: r.k
                            }, t(e.Z, r))
                        },
                        table: {
                            t: eS(D),
                            i: r.HIGH,
                            l: eL,
                            h: (e, t, r) => q("table", {
                                key: r.k
                            }, q("thead", null, q("tr", null, e.L.map(function(n, l) {
                                return q("th", {
                                    key: l,
                                    style: eM(e, l)
                                }, t(n, r))
                            }))), q("tbody", null, e.A.map(function(n, l) {
                                return q("tr", {
                                    key: l
                                }, n.map(function(n, l) {
                                    return q("td", {
                                        key: l,
                                        style: eM(e, l)
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
                            t: eA(er),
                            i: r.MIN,
                            l: e => ({
                                v: e[0].replace(H, (e, r) => t.namedCodesToUnicode[r] ? t.namedCodesToUnicode[r] : e)
                            }),
                            h: e => e.v
                        },
                        textBolded: {
                            t: e_(V),
                            i: r.MED,
                            l: (e, t, r) => ({
                                v: t(e[2], r)
                            }),
                            h: (e, t, r) => q("strong", {
                                key: r.k
                            }, t(e.v, r))
                        },
                        textEmphasized: {
                            t: e_(Q),
                            i: r.LOW,
                            l: (e, t, r) => ({
                                v: t(e[2], r)
                            }),
                            h: (e, t, r) => q("em", {
                                key: r.k
                            }, t(e.v, r))
                        },
                        textEscaped: {
                            t: e_(et),
                            i: r.HIGH,
                            l: e => ({
                                v: e[1],
                                type: "text"
                            })
                        },
                        textMarked: {
                            t: e_(J),
                            i: r.LOW,
                            l: eR,
                            h: (e, t, r) => q("mark", {
                                key: r.k
                            }, t(e.v, r))
                        },
                        textStrikethroughed: {
                            t: e_(ee),
                            i: r.LOW,
                            l: eR,
                            h: (e, t, r) => q("del", {
                                key: r.k
                            }, t(e.v, r))
                        }
                    };
                !0 !== t.disableParsingRawHTML && (eo.htmlBlock = {
                    t: eA(T),
                    i: r.HIGH,
                    l(e, t, r) {
                        let [, n] = e[3].match(el), l = RegExp(`^${n}`, "gm"), a = e[3].replace(l, ""), o = eI.some(e => e.test(a)) ? eF : eP, i = e[1].toLowerCase(), c = -1 !== s.indexOf(i);
                        r.N = r.N || "a" === i;
                        let u = c ? e[3] : o(t, a, r);
                        return r.N = !1, {
                            O: Z(e[2]),
                            v: u,
                            G: c,
                            H: c ? i : e[1]
                        }
                    },
                    h: (e, t, r) => q(e.H, l({
                        key: r.k
                    }, e.O), e.G ? e.v : t(e.v, r))
                }, eo.htmlSelfClosing = {
                    t: eA(O),
                    i: r.HIGH,
                    l: e => ({
                        O: Z(e[2] || ""),
                        H: e[1]
                    }),
                    h: (e, t, r) => q(e.H, l({}, e.O, {
                        key: r.k
                    }))
                });
                let ei = ((d = Object.keys(eo)).sort(function(e, t) {
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
                                        i = eo[o],
                                        s = i.t(t, r, l);
                                    if (s) {
                                        let a = s[0];
                                        t = t.substring(a.length);
                                        let c = i.l(s, e, r);
                                        null == c.type && (c.type = o), n.push(c), l = a;
                                        break
                                    }
                                    a++
                                }
                            }
                            return n
                        }(e.replace(k, "\n").replace(j, "").replace(U, "    "), t)
                    }),
                    es = (a = function(e, t, r) {
                        return eo[e.type].h(e, t, r)
                    }, function e(t, r = {}) {
                        if (Array.isArray(t)) {
                            let n = r.k,
                                l = [],
                                a = !1;
                            for (let n = 0; n < t.length; n++) {
                                r.k = n;
                                let o = e(t[n], r),
                                    i = "string" == typeof o;
                                i && a ? l[l.length - 1] += o : null !== o && l.push(o), a = i
                            }
                            return r.k = n, l
                        }
                        return a(t, e, r)
                    }),
                    ec = Y(e);
                return K.length ? q("div", null, ec, q("footer", {
                    key: "footer"
                }, K.map(function(e) {
                    return q("div", {
                        id: t.slugify(e.j),
                        key: e.j
                    }, e.j, es(ei(e.I, {
                        _: !0
                    })))
                }))) : ec
            }(t, d), X)
        }])
    }, 82557, e => {
        var t = e.i(361610),
            r = e.i(996471),
            n = e.i(107256);
        e.s(["f", 0, function(e, l) {
            let a = (0, t.f)(e, {
                    labelable: !0
                }),
                {
                    hoverProps: o
                } = (0, n.f)({
                    onHoverStart: () => l?.open(!0),
                    onHoverEnd: () => l?.close()
                });
            return {
                tooltipProps: (0, r.f)(a, o, {
                    role: "tooltip"
                })
            }
        }])
    }, 86721, e => {
        var t = e.i(528837),
            r = e.i(996471),
            n = e.i(835349),
            l = e.i(107256),
            a = e.i(81407),
            o = e.i(495056);
        e.s(["f", 0, function(e, i, s) {
            let {
                isDisabled: c,
                trigger: u,
                shouldCloseOnPress: d = !0
            } = e, f = (0, a.H)(), p = (0, o.useRef)(!1), m = (0, o.useRef)(!1), h = () => {
                (p.current || m.current) && i.open(m.current)
            }, y = e => {
                p.current || m.current || i.close(e)
            };
            (0, o.useEffect)(() => {
                let e = e => {
                    s && s.current && "Escape" === e.key && (e.stopPropagation(), i.close(!0))
                };
                if (i.isOpen) return document.addEventListener("keydown", e, !0), () => {
                    document.removeEventListener("keydown", e, !0)
                }
            }, [s, i]);
            let g = () => {
                    d && (m.current = !1, p.current = !1, y(!0))
                },
                {
                    hoverProps: b
                } = (0, l.f)({
                    isDisabled: c,
                    onHoverStart: () => {
                        "focus" !== u && ("pointer" === (0, t.E)() ? p.current = !0 : p.current = !1, h())
                    },
                    onHoverEnd: () => {
                        "focus" !== u && (m.current = !1, p.current = !1, y())
                    }
                }),
                {
                    focusableProps: x
                } = (0, n.F)({
                    isDisabled: c,
                    onFocus: () => {
                        (0, t.v)() && (m.current = !0, h())
                    },
                    onBlur: () => {
                        m.current = !1, p.current = !1, y(!0)
                    }
                }, s);
            return {
                triggerProps: {
                    "aria-describedby": i.isOpen ? f : void 0,
                    ...(0, r.f)(x, b, {
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
    }, 911754, 644995, e => {
        var t = e.i(495056),
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
                    i = t.useState(!1),
                    s = i[0],
                    c = i[1],
                    u = encodeURIComponent(e.id),
                    d = "string" == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
                    f = e.title,
                    p = e.poster || "hqdefault",
                    m = "&".concat(e.params) || "",
                    h = e.muted ? "&mute=1" : "",
                    y = e.announce || "Watch",
                    g = e.webp ? "webp" : "jpg",
                    b = e.webp ? "vi_webp" : "vi",
                    x = e.thumbnail || (e.playlist ? "https://i.ytimg.com/".concat(b, "/").concat(d, "/").concat(p, ".").concat(g) : "https://i.ytimg.com/".concat(b, "/").concat(u, "/").concat(p, ".").concat(g)),
                    k = e.noCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
                k = e.cookie ? "https://www.youtube.com" : "https://www.youtube-nocookie.com";
                var v = e.playlist ? "".concat(k, "/embed/videoseries?autoplay=1").concat(h, "&list=").concat(u).concat(m) : "".concat(k, "/embed/").concat(u, "?autoplay=1&state=1").concat(h).concat(m),
                    w = e.activatedClass || "lyt-activated",
                    j = e.adNetwork || !1,
                    E = e.aspectHeight || 9,
                    C = e.aspectWidth || 16,
                    I = e.iframeClass || "",
                    N = e.playerClass || "lty-playbtn",
                    T = e.wrapperClass || "yt-lite",
                    H = e.onIframeAdded || function() {},
                    L = e.rel ? "prefetch" : "preload",
                    M = e.containerElement || "article";
                return t.useEffect(function() {
                    s && H()
                }, [s]), t.createElement(t.Fragment, null, t.createElement("link", {
                    rel: L,
                    href: x,
                    as: "image"
                }), t.createElement(t.Fragment, null, a && t.createElement(t.Fragment, null, t.createElement("link", {
                    rel: "preconnect",
                    href: k
                }), t.createElement("link", {
                    rel: "preconnect",
                    href: "https://www.google.com"
                }), j && t.createElement(t.Fragment, null, t.createElement("link", {
                    rel: "preconnect",
                    href: "https://static.doubleclick.net"
                }), t.createElement("link", {
                    rel: "preconnect",
                    href: "https://googleads.g.doubleclick.net"
                })))), t.createElement(M, {
                    onPointerOver: function() {
                        a || o(!0)
                    },
                    onClick: function() {
                        s || c(!0)
                    },
                    className: "".concat(T, " ").concat(s ? w : ""),
                    "data-title": f,
                    style: r({
                        backgroundImage: "url(".concat(x, ")")
                    }, {
                        "--aspect-ratio": "".concat(E / C * 100, "%")
                    })
                }, t.createElement("button", {
                    type: "button",
                    className: N,
                    "aria-label": "".concat(y, " ").concat(f)
                }), s && t.createElement("iframe", {
                    ref: n,
                    className: I,
                    title: f,
                    width: "560",
                    height: "315",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: !0,
                    src: v
                })))
            });
        e.s(["f", 0, n], 911754);
        var l = e.i(167358);
        e.s(["f", 0, ({
            className: e = "",
            width: t = 16,
            height: r = 16
        }) => (0, l.jsxs)("svg", {
            width: t,
            height: r,
            viewBox: "0 0 256 256",
            xmlns: "http://www.w3.org/2000/svg",
            className: e,
            "data-sentry-element": "svg",
            "data-sentry-component": "Close",
            "data-sentry-source-file": "CloseIcon.tsx",
            children: [(0, l.jsx)("rect", {
                width: "256",
                height: "256",
                fill: "none",
                "data-sentry-element": "rect",
                "data-sentry-source-file": "CloseIcon.tsx"
            }), (0, l.jsx)("line", {
                x1: "200",
                y1: "56",
                x2: "56",
                y2: "200",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "16",
                "data-sentry-element": "line",
                "data-sentry-source-file": "CloseIcon.tsx"
            }), (0, l.jsx)("line", {
                x1: "200",
                y1: "200",
                x2: "56",
                y2: "56",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "16",
                "data-sentry-element": "line",
                "data-sentry-source-file": "CloseIcon.tsx"
            })]
        })], 644995)
    }, 145038, e => {
        var t = e.i(949877),
            r = e.i(495056);
        let n = {},
            l = 0,
            a = !1,
            o = null,
            i = null;
        e.s(["f", 0, function(e = {}) {
            let {
                delay: s = 1500,
                closeDelay: c = 500
            } = e, {
                isOpen: u,
                open: d,
                close: f
            } = (0, t.f)(e), p = (0, r.useMemo)(() => `${++l}`, []), m = (0, r.useRef)(null), h = (0, r.useRef)(f), y = () => {
                n[p] = x
            }, g = () => {
                for (let e in n) e !== p && (n[e](!0), delete n[e])
            }, b = () => {
                m.current && clearTimeout(m.current), m.current = null, g(), y(), a = !0, d(), o && (clearTimeout(o), o = null), i && (clearTimeout(i), i = null)
            }, x = e => {
                e || c <= 0 ? (m.current && clearTimeout(m.current), m.current = null, h.current()) : m.current || (m.current = setTimeout(() => {
                    m.current = null, h.current()
                }, c)), o && (clearTimeout(o), o = null), a && (i && clearTimeout(i), i = setTimeout(() => {
                    delete n[p], i = null, a = !1
                }, Math.max(500, c)))
            };
            return (0, r.useEffect)(() => {
                h.current = f
            }, [f]), (0, r.useEffect)(() => () => {
                m.current && clearTimeout(m.current), n[p] && delete n[p]
            }, [p]), {
                isOpen: u,
                open: e => {
                    e || !(s > 0) || m.current ? b() : (g(), y(), u || a ? u || b() : (o && clearTimeout(o), o = setTimeout(() => {
                        o = null, a = !0, b()
                    }, s)))
                },
                close: x
            }
        }])
    }, 206775, 652955, e => {
        var t = e.i(167358),
            r = e.i(722978);
        e.s(["f", 0, ({
            className: e,
            children: n,
            size: l = "medium",
            ...a
        }) => {
            let o = (0, r.U)("bg-gray-100 text-gray-600 text-tiny-bold dark:bg-gray-900 dark:text-gray-200 rounded-md", {
                small: "px-2 py-1",
                medium: "p-2"
            } [l], e);
            return (0, t.jsx)("span", {
                className: o,
                ...a,
                "data-sentry-component": "Label",
                "data-sentry-source-file": "Label.tsx",
                children: n
            })
        }], 206775);
        let n = e.i(868767).default;
        e.s(["f", 0, n], 652955)
    }, 976317, e => {
        var t = e.i(167358),
            r = e.i(495056),
            n = e.i(595388),
            l = e.i(722978),
            a = e.i(124993),
            o = e.i(996471),
            i = e.i(199111),
            s = e.i(813092);
        let c = ({
                className: e,
                width: r = 16,
                height: n = 16
            }) => (0, t.jsx)("button", {
                "aria-label": "Open in new tab",
                "data-sentry-component": "ExternalLinkIcon",
                "data-sentry-source-file": "ExternalLinkIcon.tsx",
                children: (0, t.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 15 14",
                    className: e,
                    height: n,
                    width: r,
                    "data-sentry-element": "svg",
                    "data-sentry-source-file": "ExternalLinkIcon.tsx",
                    children: (0, t.jsx)("path", {
                        d: "M12.969 5.688a.656.656 0 0 1-1.313 0V3.772L8.402 7.028a.657.657 0 0 1-.93-.93l3.255-3.254H8.812a.656.656 0 1 1 0-1.313h3.5a.656.656 0 0 1 .657.657v3.5ZM10.563 7a.656.656 0 0 0-.657.656v3.5H3.344V4.594h3.5a.656.656 0 1 0 0-1.313H3.125a1.094 1.094 0 0 0-1.094 1.094v7a1.094 1.094 0 0 0 1.094 1.094h7a1.094 1.094 0 0 0 1.094-1.094V7.656A.656.656 0 0 0 10.563 7Z",
                        "data-sentry-element": "path",
                        "data-sentry-source-file": "ExternalLinkIcon.tsx"
                    })
                })
            }),
            u = (0, r.forwardRef)(function(e, r) {
                let u = (0, i.f)(r),
                    {
                        linkProps: d
                    } = (0, a.f)(e, u),
                    {
                        isFocusVisible: f,
                        focusProps: p
                    } = (0, s.f)(),
                    {
                        href: m,
                        rel: h,
                        target: y = "_self",
                        locale: g,
                        className: b,
                        children: x,
                        size: k = "small",
                        underline: v = !1,
                        icon: w = null,
                        onClick: j = () => {}
                    } = e,
                    E = {
                        regular: 18,
                        small: 16,
                        tiny: 14
                    },
                    C = (0, l.U)("group outline-hidden", b),
                    I = (0, l.U)("text-black dark:text-white group-hover:text-blue group-focus:text-blue dark:group-hover:text-blue transition duration-200", v && ({
                        regular: "shadow-underline group-hover:shadow-underline-lg",
                        small: "shadow-underline group-hover:shadow-underline-lg",
                        tiny: "shadow-underline-sm group-hover:shadow-underline"
                    })[k], {
                        regular: "text-body-bold",
                        small: "text-small",
                        tiny: "text-tiny"
                    } [k]),
                    N = (0, l.U)("group-hover:fill-blue ml-2 h-4 w-4 fill-black transition duration-200 dark:fill-white group-focus-outline group-focus-visible:fill-blue"),
                    T = "string" == typeof x ? x : "";
                return (0, t.jsx)(n.L, {
                    ...(0, o.f)(d, p),
                    ref: u,
                    href: m,
                    rel: h,
                    target: y,
                    locale: g,
                    className: C,
                    role: "button",
                    ...T && {
                        "aria-label": T
                    },
                    onClick: j,
                    children: (0, t.jsxs)("div", {
                        className: (0, l.U)("flex items-center", {
                            "a11y-ring rounded-xs": f
                        }),
                        children: [w && (0, t.jsx)("span", {
                            className: "group-hover:fill-blue group-focus:fill-blue mr-2 transition duration-200",
                            children: w
                        }), (0, t.jsx)("span", {
                            className: I,
                            children: x
                        }), "_blank" === y && (0, t.jsx)(c, {
                            className: N,
                            height: E[k],
                            width: E[k]
                        })]
                    })
                })
            });
        e.s(["default", 0, u], 976317)
    }, 146911, e => {
        let t = e.i(976317).default;
        e.s(["f", 0, t])
    }, 868767, e => {
        var t = e.i(167358),
            r = e.i(495056),
            n = e.i(145038),
            l = e.i(82557),
            a = e.i(86721),
            o = e.i(996471),
            i = e.i(722978);
        let s = ({
            state: e,
            content: r,
            hasArrow: n,
            placement: a,
            ...s
        }) => {
            let {
                tooltipProps: c
            } = (0, l.f)(s, e);
            return (0, t.jsx)("span", {
                className: (0, i.U)("text-tiny absolute z-10 w-max max-w-[180px] rounded-lg bg-white p-4 text-left text-gray-900 drop-shadow-lg dark:bg-gray-800 dark:text-gray-100", (e => {
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
                ...(0, o.f)(s, c),
                "data-sentry-component": "TooltipElement",
                "data-sentry-source-file": "Tooltip.tsx",
                children: r
            })
        };
        e.s(["default", 0, ({
            content: e,
            placement: l = "bottom",
            hasArrow: o = !0,
            tooltipOptions: i = {
                delay: 300,
                closeDelay: 0,
                isDisabled: !1
            },
            children: c
        }) => {
            let u = (0, n.f)(i),
                d = (0, r.useRef)(null),
                {
                    triggerProps: f,
                    tooltipProps: p
                } = (0, a.f)(i, u, d);
            return (0, t.jsxs)("span", {
                className: "relative",
                "data-sentry-component": "Tooltip",
                "data-sentry-source-file": "Tooltip.tsx",
                children: [(0, t.jsx)("span", {
                    ref: d,
                    ...f,
                    children: c
                }), u.isOpen && (0, t.jsx)(s, {
                    state: u,
                    content: e,
                    placement: l,
                    hasArrow: o,
                    ...p
                })]
            })
        }])
    }, 224601, 934172, e => {
        var t = e.i(167358),
            r = e.i(495056),
            n = e.i(127873),
            l = e.i(193863),
            a = e.i(911754),
            o = e.i(363737),
            i = e.i(749583),
            s = e.i(644995),
            c = e.i(195051),
            u = e.i(568566),
            d = e.i(387660);
        let f = (e, t = !0) => {
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
        e.s(["f", 0, f], 934172), e.s(["f", 0, ({
            title: e,
            url: p,
            container: m = !1,
            blockedMessage: h,
            consentButtonLabel: y
        }) => {
            let g = (0, l.default)(p),
                [b, x] = (0, r.useState)(!1),
                k = (0, r.useRef)(null),
                v = (0, r.useRef)(null),
                {
                    player: w
                } = f(k, b),
                j = () => {
                    x(!0)
                };
            return (0, r.useEffect)(() => {
                w && (v.current = w.addEventListener("onStateChange", e => {
                    if ([1, 2].includes(e.data)) {
                        let t = "function" == typeof w.getDuration && w.getDuration() || 0,
                            r = Number((("function" == typeof w.getCurrentTime && w.getCurrentTime() || 0) / t * 100).toFixed(2)),
                            n = 1 === e.data ? "video_play" : "video_pause";
                        (0, d.f)({
                            name: n,
                            videoDuration: t,
                            videoProgress: (Number.isNaN(r), r)
                        })
                    }
                }))
            }, [w]), (0, r.useEffect)(() => {
                if (!b && w?.playerInfo?.playerState === 1) {
                    let e = "function" == typeof w.getDuration && w.getDuration() || 0,
                        t = Number((("function" == typeof w.getCurrentTime && w.getCurrentTime() || 0) / e * 100).toFixed(2));
                    (0, d.f)({
                        name: "video_pause",
                        videoDuration: e,
                        videoProgress: (Number.isNaN(t), t)
                    })
                }
            }, [b, w]), (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)(u.default, {
                    src: "https://www.youtube.com/iframe_api",
                    "data-sentry-element": "Script",
                    "data-sentry-source-file": "YouTubeModal.tsx"
                }), (0, t.jsxs)("div", {
                    className: "relative h-full w-full self-center p-4 lg:p-0",
                    children: [p && g && (0, t.jsxs)("div", {
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
                            src: `https://img.youtube.com/vi/${g}/hqdefault.jpg`,
                            alt: e,
                            fill: !0
                        }), (0, t.jsx)(c.f, {
                            blockedMessage: h,
                            consentButtonLabel: y
                        })]
                    }), (0, t.jsx)(o.f, {
                        isOpen: b,
                        onOpenChange: x,
                        showTriggerButton: !1,
                        "data-sentry-element": "Modal",
                        "data-sentry-source-file": "YouTubeModal.tsx",
                        children: (0, t.jsxs)("div", {
                            className: "z-50 mt-20 flex w-10/12 flex-col rounded-3xl bg-black p-4 lg:w-8/12",
                            tabIndex: -1,
                            children: [(0, t.jsx)(i.f, {
                                onPress: () => {
                                    x(!1)
                                },
                                variant: "secondary",
                                className: "self-end overflow-hidden",
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "YouTubeModal.tsx",
                                children: (0, t.jsx)(s.f, {
                                    className: "z-[60] h-5 w-5 text-white",
                                    "data-sentry-element": "CloseIcon",
                                    "data-sentry-source-file": "YouTubeModal.tsx"
                                })
                            }), (0, t.jsx)(a.f, {
                                id: g,
                                title: e,
                                iframeClass: "yt-iframe",
                                poster: "hqdefault",
                                ref: k,
                                params: "enablejsapi=1",
                                "data-sentry-element": "LiteYouTubeEmbed",
                                "data-sentry-source-file": "YouTubeModal.tsx"
                            }), (0, t.jsx)(c.f, {
                                blockedMessage: h,
                                consentButtonLabel: y,
                                "data-sentry-element": "ConsentIframe",
                                "data-sentry-source-file": "YouTubeModal.tsx"
                            })]
                        })
                    })]
                })]
            })
        }], 224601)
    }])
})();

//# debugId=24723999-f6ac-a4b2-890b-69cf1faf7cf9