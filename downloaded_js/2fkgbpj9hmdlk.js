;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "0716b8a4-ec85-b022-0110-e41de23445e8")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 401861, 841889, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(722978),
        n = e.i(409781),
        l = e.i(960851),
        a = e.i(146911);
    let o = ({
            title: e,
            text: o,
            action: s,
            truncate: i,
            className: c = "",
            isContained: u,
            dismiss: d
        }) => {
            let f = (0, n.useMemo)(() => `unity-alert-${o?.substring(0,30).replaceAll(" ","_")}`, [o]),
                [p, m] = (0, n.useState)(!0),
                [h, g] = (0, n.useState)(!1);
            return ((0, n.useEffect)(() => {
                localStorage?.getItem(f) && g(!0)
            }, [f]), h) ? null : (0, t.jsx)("div", {
                className: (0, r.clsx)({
                    container: u
                }),
                "data-sentry-component": "Alert",
                "data-sentry-source-file": "Alert.tsx",
                children: (0, t.jsxs)("div", {
                    className: (0, r.clsx)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
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
                                className: (0, r.clsx)({
                                    "line-clamp-4 sm:line-clamp-2": i?.enabled && p
                                }),
                                children: o
                            }), i?.enabled && (0, t.jsx)("button", {
                                onClick: () => m(!p),
                                className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                children: p ? i.seeMoreLabel : i.seeLessLabel
                            })]
                        })]
                    }), (s?.href || d?.enabled) && (0, t.jsxs)("div", {
                        className: "sm:auto inline-flex w-fit items-center gap-4 [&>*]:whitespace-nowrap",
                        children: [s && (0, t.jsx)(a.default, {
                            className: "mx-auto mt-0 inline-block whitespace-nowrap",
                            href: s.href,
                            target: s.target || "_self",
                            size: "tiny",
                            underline: !0,
                            children: s.title
                        }), d?.enabled && (0, t.jsx)("button", {
                            onClick: () => {
                                g(!0), localStorage.setItem(f, Date.now().toString())
                            },
                            className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                            children: d?.dismissLabel ?? "Dismiss"
                        })]
                    })]
                })
            })
        },
        s = ({
            title: e,
            text: n,
            action: l,
            theme: a,
            truncate: s,
            dismiss: i,
            isContained: c,
            isHidden: u,
            spacing: d
        }) => {
            let f = (0, r.clsx)({
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
                    truncate: s || {},
                    dismiss: i || {},
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
    e.s(["default", 0, s], 841889), e.s(["default", 0, s], 401861)
}, 480880, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781);
    e.s(["default", 0, ({
        blocks: e,
        blockMap: n,
        ...l
    }) => (0, t.jsx)(t.Fragment, {
        children: e?.map((e, a) => {
            let o = e?._type,
                s = n[o];
            return e.isHidden ? null : s ? (0, t.jsx)("div", {
                children: r.default.createElement(s, {
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
    "use strict";
    var t = e.i(785328),
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
    }], 195051);
    var o = e.i(409781),
        s = e.i(210310),
        i = e.i(326388);
    e.s(["default", 0, ({
        theme: e,
        isHidden: r,
        verticalHeadingClass: n,
        productCatalogItems: l,
        htmlTableContent: a
    }) => {
        let {
            appendCommerceDataForMultipleProducts: c
        } = (0, i.default)(), u = (0, o.useCallback)(e => {
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
                    children: (0, t.jsx)(s.default, {
                        verticalHeadingClass: n || "",
                        table: d
                    })
                })
            })
        })
    }], 725751)
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
}, 229696, e => {
    "use strict";
    var t, r, n = e.i(409781);

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
        f = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
        p = /^ *> ?/gm,
        m = /^ {2,}\n/,
        h = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
        g = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
        y = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        b = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        x = /^(?:\n *)*\n/,
        v = /\r\n?/g,
        k = /^\[\^([^\]]+)](:.*)\n/,
        w = /^\[\^([^\]]+)]/,
        j = /\f/g,
        T = /^\s*?\[(x|\s)\]/,
        E = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        I = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        C = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
        N = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
        H = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        L = /^<!--[\s\S]*?(?:-->)/,
        O = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        M = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        S = /^\{.*\}$/,
        _ = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        A = /^<([^ >]+@[^ >]+)>/,
        B = /^<([^ >]+:\/[^ >]+)>/,
        $ = /-([a-z])?/gi,
        P = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
        D = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        F = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        R = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        z = /(\[|\])/g,
        G = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
        W = /\t/g,
        U = /^ *\| */,
        X = /(^ *\||\| *$)/g,
        V = / *$/,
        Y = /^ *:-+: *$/,
        Z = /^ *:-+ *$/,
        q = /^ *-+: *$/,
        K = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
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
        ef = eu(2);

    function ep(e) {
        return RegExp("^" + (1 === e ? ed : ef))
    }
    let em = ep(1),
        eh = ep(2);

    function eg(e) {
        return RegExp("^" + (1 === e ? ed : ef) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? ei : ec) + " )[^\\n]*)*(\\n|$)", "gm")
    }
    let ey = eg(1),
        eb = eg(2);

    function ex(e) {
        let t = 1 === e ? ei : ec;
        return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)")
    }
    let ev = ex(1),
        ek = ex(2);

    function ew(e, t) {
        let n = 1 === t,
            l = n ? ev : ek,
            a = n ? ey : eb,
            o = n ? em : eh;
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
        eT = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eE = [f, g, y, E, C, I, L, P, ey, ev, eb, ek],
        eI = [...eE, /^[^\n]+(?:  \n|\n{2,})/, N, M];

    function eC(e) {
        return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
    }

    function eN(e) {
        return q.test(e) ? "right" : Y.test(e) ? "center" : Z.test(e) ? "left" : null
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
            "tableSeparator" === e.type ? 0 !== t && t !== l.length - 1 && a.push([]) : ("text" !== e.type || null != l[t + 1] && "tableSeparator" !== l[t + 1].type || (e.v = e.v.replace(V, "")), a[a.length - 1].push(e))
        }), a
    }

    function eL(e, t, r) {
        var n;
        r._ = !0;
        let l = eH(e[1], t, r),
            a = e[2].replace(X, "").split("|").map(eN),
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

    function eO(e, t) {
        return null == e.S[t] ? {} : {
            textAlign: e.S[t]
        }
    }

    function eM(e) {
        return function(t, r) {
            return r._ ? e.exec(t) : null
        }
    }

    function eS(e) {
        return function(t, r) {
            return r._ || r.u ? e.exec(t) : null
        }
    }

    function e_(e) {
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
        e.split("\n").every(e => !eE.some(t => t.test(e)) && (n += e + "\n", e.trim()));
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

    function eP(e) {
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

    function ez() {
        return {}
    }

    function eG() {
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
            t.overrides = t.overrides || {}, t.slugify = t.slugify || eC, t.namedCodesToUnicode = t.namedCodesToUnicode ? l({}, s, t.namedCodesToUnicode) : s;
            let X = t.createElement || n.createElement;

            function V(e, r, ...n) {
                var a;
                let o, s = eW(t.overrides, `${e}.props`, {});
                return X((o = eW(a = t.overrides, e)) ? "function" == typeof o || "object" == typeof o && "render" in o ? o : eW(a, `${e}.component`, e) : e, l({}, r, s, {
                    className: function(...e) {
                        return e.filter(Boolean).join(" ")
                    }(null == r ? void 0 : r.className, s.className) || void 0
                }), ...n)
            }

            function Y(e) {
                let r, l = !1;
                t.forceInline ? l = !0 : t.forceBlock || (l = !1 === G.test(e));
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

            function Z(e) {
                let t = e.match(c);
                return t ? t.reduce(function(e, t, r) {
                    let l = t.indexOf("=");
                    if (-1 !== l) {
                        var a, s, i;
                        let c, u = (-1 !== (a = t.slice(0, l)).indexOf("-") && null === a.match(O) && (a = a.replace($, function(e, t) {
                                return t.toUpperCase()
                            })), a).trim(),
                            d = ('"' === (c = (s = t.slice(l + 1).trim())[0]) || "'" === c) && s.length >= 2 && s[s.length - 1] === c ? s.slice(1, -1) : s,
                            f = o[u] || u,
                            p = e[f] = (i = d, "style" === u ? i.split(/;\s?/).reduce(function(e, t) {
                                let r = t.slice(0, t.indexOf(":"));
                                return e[r.replace(/(-[a-z])/g, e => e[1].toUpperCase())] = t.slice(r.length + 1).trim(), e
                            }, {}) : "href" === u ? e$(i) : (i.match(S) && (i = i.slice(1, i.length - 1)), "true" === i || "false" !== i && i));
                        "string" == typeof p && (N.test(p) || M.test(p)) && (e[f] = n.cloneElement(Y(p.trim()), {
                            key: r
                        }))
                    } else "style" !== t && (e[o[t] || t] = !0);
                    return e
                }, {}) : null
            }
            let q = [],
                ea = {},
                eo = {
                    blockQuote: {
                        t: e_(f),
                        i: r.HIGH,
                        l: (e, t, r) => ({
                            v: t(e[0].replace(p, ""), r)
                        }),
                        h: (e, t, r) => V("blockquote", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    breakLine: {
                        t: eA(m),
                        i: r.HIGH,
                        l: ez,
                        h: (e, t, r) => V("br", {
                            key: r.k
                        })
                    },
                    breakThematic: {
                        t: e_(h),
                        i: r.HIGH,
                        l: ez,
                        h: (e, t, r) => V("hr", {
                            key: r.k
                        })
                    },
                    codeBlock: {
                        t: e_(y),
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
                        t: e_(g),
                        i: r.MAX,
                        l: e => ({
                            O: Z(e[3] || ""),
                            v: e[4],
                            M: e[2] || void 0,
                            type: "codeBlock"
                        })
                    },
                    codeInline: {
                        t: eS(b),
                        i: r.LOW,
                        l: e => ({
                            v: e[2]
                        }),
                        h: (e, t, r) => V("code", {
                            key: r.k
                        }, e.v)
                    },
                    footnote: {
                        t: e_(k),
                        i: r.MAX,
                        l: e => (q.push({
                            I: e[2],
                            j: e[1]
                        }), {}),
                        h: eG
                    },
                    footnoteReference: {
                        t: eM(w),
                        i: r.HIGH,
                        l: e => ({
                            v: e[1],
                            B: `#${t.slugify(e[1])}`
                        }),
                        h: (e, t, r) => V("a", {
                            key: r.k,
                            href: e$(e.B)
                        }, V("sup", {
                            key: r.k
                        }, e.v))
                    },
                    gfmTask: {
                        t: eM(T),
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
                        t: e_(t.enforceAtxHeadings ? I : E),
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
                        t: e_(C),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: eD(t, e[1], r),
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
                        t: eS(eT),
                        i: r.HIGH,
                        l: e => ({
                            D: e[1],
                            B: eP(e[2]),
                            F: e[3]
                        }),
                        h: (e, t, r) => V("img", {
                            key: r.k,
                            alt: e.D || void 0,
                            title: e.F || void 0,
                            src: e$(e.B)
                        })
                    },
                    link: {
                        t: eM(ej),
                        i: r.LOW,
                        l: (e, t, r) => {
                            var n;
                            let l, a, o;
                            return {
                                v: (n = e[1], l = r._ || !1, a = r.u || !1, r._ = !1, r.u = !0, o = t(n, r), r._ = l, r.u = a, o),
                                B: eP(e[2]),
                                F: e[3]
                            }
                        },
                        h: (e, t, r) => V("a", {
                            key: r.k,
                            href: e$(e.B),
                            title: e.F
                        }, t(e.v, r))
                    },
                    linkAngleBraceStyleDetector: {
                        t: eM(B),
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
                        t: (e, t) => t.N ? null : eM(_)(e, t),
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
                        t: eM(A),
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
                        t: e_(x),
                        i: r.LOW,
                        l: ez,
                        h: () => "\n"
                    },
                    paragraph: {
                        t: eB,
                        i: r.LOW,
                        l: eR,
                        h: (e, t, r) => V("p", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    ref: {
                        t: eM(D),
                        i: r.MAX,
                        l: e => (ea[e[1]] = {
                            B: e[2],
                            F: e[4]
                        }, {}),
                        h: eG
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
                            src: e$(ea[e.P].B),
                            title: ea[e.P].F
                        })
                    },
                    refLink: {
                        t: eM(R),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: t(e[1], r),
                            Z: t(e[0].replace(z, "\\$1"), r),
                            P: e[2]
                        }),
                        h: (e, t, r) => ea[e.P] ? V("a", {
                            key: r.k,
                            href: e$(ea[e.P].B),
                            title: ea[e.P].F
                        }, t(e.v, r)) : V("span", {
                            key: r.k
                        }, t(e.Z, r))
                    },
                    table: {
                        t: e_(P),
                        i: r.HIGH,
                        l: eL,
                        h: (e, t, r) => V("table", {
                            key: r.k
                        }, V("thead", null, V("tr", null, e.L.map(function(n, l) {
                            return V("th", {
                                key: l,
                                style: eO(e, l)
                            }, t(n, r))
                        }))), V("tbody", null, e.A.map(function(n, l) {
                            return V("tr", {
                                key: l
                            }, n.map(function(n, l) {
                                return V("td", {
                                    key: l,
                                    style: eO(e, l)
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
                        t: eA(er),
                        i: r.MIN,
                        l: e => ({
                            v: e[0].replace(H, (e, r) => t.namedCodesToUnicode[r] ? t.namedCodesToUnicode[r] : e)
                        }),
                        h: e => e.v
                    },
                    textBolded: {
                        t: eS(K),
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
                t: eA(N),
                i: r.HIGH,
                l(e, t, r) {
                    let [, n] = e[3].match(el), l = RegExp(`^${n}`, "gm"), a = e[3].replace(l, ""), o = eI.some(e => e.test(a)) ? eF : eD, s = e[1].toLowerCase(), c = -1 !== i.indexOf(s);
                    r.N = r.N || "a" === s;
                    let u = c ? e[3] : o(t, a, r);
                    return r.N = !1, {
                        O: Z(e[2]),
                        v: u,
                        G: c,
                        H: c ? s : e[1]
                    }
                },
                h: (e, t, r) => V(e.H, l({
                    key: r.k
                }, e.O), e.G ? e.v : t(e.v, r))
            }, eo.htmlSelfClosing = {
                t: eA(M),
                i: r.HIGH,
                l: e => ({
                    O: Z(e[2] || ""),
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
                    }(e.replace(v, "\n").replace(j, "").replace(W, "    "), t)
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
                ec = Y(e);
            return q.length ? V("div", null, ec, V("footer", {
                key: "footer"
            }, q.map(function(e) {
                return V("div", {
                    id: t.slugify(e.j),
                    key: e.j
                }, e.j, ei(es(e.I, {
                    _: !0
                })))
            }))) : ec
        }(t, d), X)
    }])
}, 619393, e => {
    "use strict";
    var t = e.i(679933),
        r = e.i(429305),
        n = e.i(355770);
    e.s(["useTooltip", 0, function(e, l) {
        let a = (0, t.filterDOMProps)(e, {
                labelable: !0
            }),
            {
                hoverProps: o
            } = (0, n.useHover)({
                onHoverStart: () => l?.open(!0),
                onHoverEnd: () => l?.close()
            });
        return {
            tooltipProps: (0, r.mergeProps)(a, o, {
                role: "tooltip"
            })
        }
    }])
}, 495533, e => {
    "use strict";
    var t = e.i(816862),
        r = e.i(429305),
        n = e.i(513485),
        l = e.i(355770),
        a = e.i(823512),
        o = e.i(409781);
    e.s(["useTooltipTrigger", 0, function(e, s, i) {
        let {
            isDisabled: c,
            trigger: u,
            shouldCloseOnPress: d = !0
        } = e, f = (0, a.useId)(), p = (0, o.useRef)(!1), m = (0, o.useRef)(!1), h = () => {
            (p.current || m.current) && s.open(m.current)
        }, g = e => {
            p.current || m.current || s.close(e)
        };
        (0, o.useEffect)(() => {
            let e = e => {
                i && i.current && "Escape" === e.key && (e.stopPropagation(), s.close(!0))
            };
            if (s.isOpen) return document.addEventListener("keydown", e, !0), () => {
                document.removeEventListener("keydown", e, !0)
            }
        }, [i, s]);
        let y = () => {
                d && (m.current = !1, p.current = !1, g(!0))
            },
            {
                hoverProps: b
            } = (0, l.useHover)({
                isDisabled: c,
                onHoverStart: () => {
                    "focus" !== u && ("pointer" === (0, t.getInteractionModality)() ? p.current = !0 : p.current = !1, h())
                },
                onHoverEnd: () => {
                    "focus" !== u && (m.current = !1, p.current = !1, g())
                }
            }),
            {
                focusableProps: x
            } = (0, n.useFocusable)({
                isDisabled: c,
                onFocus: () => {
                    (0, t.isFocusVisible)() && (m.current = !0, h())
                },
                onBlur: () => {
                    m.current = !1, p.current = !1, g(!0)
                }
            }, i);
        return {
            triggerProps: {
                "aria-describedby": s.isOpen ? f : void 0,
                ...(0, r.mergeProps)(x, b, {
                    onPointerDown: y,
                    onKeyDown: y
                }),
                tabIndex: void 0
            },
            tooltipProps: {
                id: f
            }
        }
    }])
}, 79389, 644995, e => {
    "use strict";
    var t = e.i(409781),
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
                f = e.title,
                p = e.poster || "hqdefault",
                m = "&".concat(e.params) || "",
                h = e.muted ? "&mute=1" : "",
                g = e.announce || "Watch",
                y = e.webp ? "webp" : "jpg",
                b = e.webp ? "vi_webp" : "vi",
                x = e.thumbnail || (e.playlist ? "https://i.ytimg.com/".concat(b, "/").concat(d, "/").concat(p, ".").concat(y) : "https://i.ytimg.com/".concat(b, "/").concat(u, "/").concat(p, ".").concat(y)),
                v = e.noCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
            v = e.cookie ? "https://www.youtube.com" : "https://www.youtube-nocookie.com";
            var k = e.playlist ? "".concat(v, "/embed/videoseries?autoplay=1").concat(h, "&list=").concat(u).concat(m) : "".concat(v, "/embed/").concat(u, "?autoplay=1&state=1").concat(h).concat(m),
                w = e.activatedClass || "lyt-activated",
                j = e.adNetwork || !1,
                T = e.aspectHeight || 9,
                E = e.aspectWidth || 16,
                I = e.iframeClass || "",
                C = e.playerClass || "lty-playbtn",
                N = e.wrapperClass || "yt-lite",
                H = e.onIframeAdded || function() {},
                L = e.rel ? "prefetch" : "preload",
                O = e.containerElement || "article";
            return t.useEffect(function() {
                i && H()
            }, [i]), t.createElement(t.Fragment, null, t.createElement("link", {
                rel: L,
                href: x,
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
            })))), t.createElement(O, {
                onPointerOver: function() {
                    a || o(!0)
                },
                onClick: function() {
                    i || c(!0)
                },
                className: "".concat(N, " ").concat(i ? w : ""),
                "data-title": f,
                style: r({
                    backgroundImage: "url(".concat(x, ")")
                }, {
                    "--aspect-ratio": "".concat(T / E * 100, "%")
                })
            }, t.createElement("button", {
                type: "button",
                className: C,
                "aria-label": "".concat(g, " ").concat(f)
            }), i && t.createElement("iframe", {
                ref: n,
                className: I,
                title: f,
                width: "560",
                height: "315",
                frameBorder: "0",
                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
                src: k
            })))
        });
    e.s(["default", 0, n], 79389);
    var l = e.i(785328);
    e.s(["default", 0, ({
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
}, 999912, e => {
    "use strict";
    var t = e.i(512985),
        r = e.i(409781);
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
            close: f
        } = (0, t.useOverlayTriggerState)(e), p = (0, r.useMemo)(() => `${++l}`, []), m = (0, r.useRef)(null), h = (0, r.useRef)(f), g = () => {
            n[p] = x
        }, y = () => {
            for (let e in n) e !== p && (n[e](!0), delete n[e])
        }, b = () => {
            m.current && clearTimeout(m.current), m.current = null, y(), g(), a = !0, d(), o && (clearTimeout(o), o = null), s && (clearTimeout(s), s = null)
        }, x = e => {
            e || c <= 0 ? (m.current && clearTimeout(m.current), m.current = null, h.current()) : m.current || (m.current = setTimeout(() => {
                m.current = null, h.current()
            }, c)), o && (clearTimeout(o), o = null), a && (s && clearTimeout(s), s = setTimeout(() => {
                delete n[p], s = null, a = !1
            }, Math.max(500, c)))
        };
        return (0, r.useEffect)(() => {
            h.current = f
        }, [f]), (0, r.useEffect)(() => () => {
            m.current && clearTimeout(m.current), n[p] && delete n[p]
        }, [p]), {
            isOpen: u,
            open: e => {
                e || !(i > 0) || m.current ? b() : (y(), g(), u || a ? u || b() : (o && clearTimeout(o), o = setTimeout(() => {
                    o = null, a = !0, b()
                }, i)))
            },
            close: x
        }
    }])
}, 206775, 652955, e => {
    "use strict";
    var t = e.i(785328),
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
            "data-sentry-component": "Label",
            "data-sentry-source-file": "Label.tsx",
            children: n
        })
    }], 206775);
    let n = e.i(868767).default;
    e.s(["default", 0, n], 652955)
}, 976317, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781),
        n = e.i(595388),
        l = e.i(722978),
        a = e.i(279858),
        o = e.i(429305),
        s = e.i(838031),
        i = e.i(147333);
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
            let u = (0, s.useObjectRef)(r),
                {
                    linkProps: d
                } = (0, a.useLink)(e, u),
                {
                    isFocusVisible: f,
                    focusProps: p
                } = (0, i.useFocusRing)(),
                {
                    href: m,
                    rel: h,
                    target: g = "_self",
                    locale: y,
                    className: b,
                    children: x,
                    size: v = "small",
                    underline: k = !1,
                    icon: w = null,
                    onClick: j = () => {}
                } = e,
                T = {
                    regular: 18,
                    small: 16,
                    tiny: 14
                },
                E = (0, l.default)("group outline-hidden", b),
                I = (0, l.default)("text-black dark:text-white group-hover:text-blue group-focus:text-blue dark:group-hover:text-blue transition duration-200", k && ({
                    regular: "shadow-underline group-hover:shadow-underline-lg",
                    small: "shadow-underline group-hover:shadow-underline-lg",
                    tiny: "shadow-underline-sm group-hover:shadow-underline"
                })[v], {
                    regular: "text-body-bold",
                    small: "text-small",
                    tiny: "text-tiny"
                } [v]),
                C = (0, l.default)("group-hover:fill-blue ml-2 h-4 w-4 fill-black transition duration-200 dark:fill-white group-focus-outline group-focus-visible:fill-blue"),
                N = "string" == typeof x ? x : "";
            return (0, t.jsx)(n.Link, {
                ...(0, o.mergeProps)(d, p),
                ref: u,
                href: m,
                rel: h,
                target: g,
                locale: y,
                className: E,
                role: "button",
                ...N && {
                    "aria-label": N
                },
                onClick: j,
                children: (0, t.jsxs)("div", {
                    className: (0, l.default)("flex items-center", {
                        "a11y-ring rounded-xs": f
                    }),
                    children: [w && (0, t.jsx)("span", {
                        className: "group-hover:fill-blue group-focus:fill-blue mr-2 transition duration-200",
                        children: w
                    }), (0, t.jsx)("span", {
                        className: I,
                        children: x
                    }), "_blank" === g && (0, t.jsx)(c, {
                        className: C,
                        height: T[v],
                        width: T[v]
                    })]
                })
            })
        });
    e.s(["default", 0, u], 976317)
}, 146911, e => {
    "use strict";
    let t = e.i(976317).default;
    e.s(["default", 0, t])
}, 868767, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781),
        n = e.i(999912),
        l = e.i(619393),
        a = e.i(495533),
        o = e.i(429305),
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
            "data-sentry-component": "TooltipElement",
            "data-sentry-source-file": "Tooltip.tsx",
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
                triggerProps: f,
                tooltipProps: p
            } = (0, a.useTooltipTrigger)(s, u, d);
        return (0, t.jsxs)("span", {
            className: "relative",
            "data-sentry-component": "Tooltip",
            "data-sentry-source-file": "Tooltip.tsx",
            children: [(0, t.jsx)("span", {
                ref: d,
                ...f,
                children: c
            }), u.isOpen && (0, t.jsx)(i, {
                state: u,
                content: e,
                placement: l,
                hasArrow: o,
                ...p
            })]
        })
    }])
}, 224601, 934172, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(409781),
        n = e.i(833449),
        l = e.i(193863),
        a = e.i(79389),
        o = e.i(363737),
        s = e.i(749583),
        i = e.i(644995),
        c = e.i(195051),
        u = e.i(145694),
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
    e.s(["useYoutubeAPI", 0, f], 934172), e.s(["default", 0, ({
        title: e,
        url: p,
        container: m = !1,
        blockedMessage: h,
        consentButtonLabel: g
    }) => {
        let y = (0, l.default)(p),
            [b, x] = (0, r.useState)(!1),
            v = (0, r.useRef)(null),
            k = (0, r.useRef)(null),
            {
                player: w
            } = f(v, b),
            j = () => {
                x(!0)
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
            if (!b && w?.playerInfo?.playerState === 1) {
                let e = "function" == typeof w.getDuration && w.getDuration() || 0,
                    t = Number((("function" == typeof w.getCurrentTime && w.getCurrentTime() || 0) / e * 100).toFixed(2));
                (0, d.pushVideoEvent)({
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
                children: [p && y && (0, t.jsxs)("div", {
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
                        src: `https://img.youtube.com/vi/${y}/hqdefault.jpg`,
                        alt: e,
                        fill: !0
                    }), (0, t.jsx)(c.default, {
                        blockedMessage: h,
                        consentButtonLabel: g
                    })]
                }), (0, t.jsx)(o.default, {
                    isOpen: b,
                    onOpenChange: x,
                    showTriggerButton: !1,
                    "data-sentry-element": "Modal",
                    "data-sentry-source-file": "YouTubeModal.tsx",
                    children: (0, t.jsxs)("div", {
                        className: "z-50 mt-20 flex w-10/12 flex-col rounded-3xl bg-black p-4 lg:w-8/12",
                        tabIndex: -1,
                        children: [(0, t.jsx)(s.default, {
                            onPress: () => {
                                x(!1)
                            },
                            variant: "secondary",
                            className: "self-end overflow-hidden",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "YouTubeModal.tsx",
                            children: (0, t.jsx)(i.default, {
                                className: "z-[60] h-5 w-5 text-white",
                                "data-sentry-element": "CloseIcon",
                                "data-sentry-source-file": "YouTubeModal.tsx"
                            })
                        }), (0, t.jsx)(a.default, {
                            id: y,
                            title: e,
                            iframeClass: "yt-iframe",
                            poster: "hqdefault",
                            ref: v,
                            params: "enablejsapi=1",
                            "data-sentry-element": "LiteYouTubeEmbed",
                            "data-sentry-source-file": "YouTubeModal.tsx"
                        }), (0, t.jsx)(c.default, {
                            blockedMessage: h,
                            consentButtonLabel: g,
                            "data-sentry-element": "ConsentIframe",
                            "data-sentry-source-file": "YouTubeModal.tsx"
                        })]
                    })
                })]
            })]
        })
    }], 224601)
}]);

//# debugId=0716b8a4-ec85-b022-0110-e41de23445e8