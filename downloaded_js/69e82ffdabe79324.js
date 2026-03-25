(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 388726, e => {
    "use strict";
    var t = e.i(614010),
        r = e.i(179037),
        n = e.i(365666),
        l = e.i(148597),
        o = e.i(336480),
        a = e.i(107579);

    function i(e, i, s) {
        let {
            overlayProps: u,
            underlayProps: c
        } = (0, r.useOverlay)({
            ...e,
            isOpen: i.isOpen,
            onClose: i.close
        }, s);
        return (0, l.usePreventScroll)({
            isDisabled: !i.isOpen
        }), (0, n.useOverlayFocusContain)(), (0, a.useEffect)(() => {
            if (i.isOpen && s.current) return (0, t.ariaHideOutside)([s.current])
        }, [i.isOpen, s]), {
            modalProps: (0, o.mergeProps)(u),
            underlayProps: c
        }
    }
    e.s(["useModalOverlay", () => i])
}, 363737, e => {
    "use strict";
    var t = e.i(853712),
        r = e.i(107579),
        n = e.i(365666),
        l = e.i(388726),
        o = e.i(502514),
        a = e.i(658734),
        i = e.i(749583);
    let s = ({
            state: e,
            children: o,
            ...a
        }) => {
            let i = (0, r.useRef)(null),
                {
                    modalProps: s,
                    underlayProps: u
                } = (0, l.useModalOverlay)({
                    ...a
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
                        ...s,
                        className: "contents",
                        children: o
                    })
                })
            })
        },
        u = ({
            actionLabel: e,
            children: n,
            showTriggerButton: l = !0,
            ...u
        }) => {
            let c = (0, a.useOverlayTriggerState)({
                    ...u
                }),
                {
                    triggerProps: d,
                    overlayProps: p
                } = (0, o.useOverlayTrigger)({
                    type: "dialog"
                }, c);
            return (0, t.jsxs)(t.Fragment, {
                children: [l && (0, t.jsx)(i.default, {
                    rounded: !0,
                    hasArrow: !0,
                    ...d,
                    children: e
                }), c.isOpen && (0, t.jsx)(s, {
                    state: c,
                    ...u,
                    isDismissable: !0,
                    children: "function" == typeof n ? (0, r.cloneElement)(n(c.close), p) : (0, r.cloneElement)(n, p)
                })]
            })
        };
    u.Layout = ({
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
    }), e.s(["default", 0, u], 363737)
}, 206775, e => {
    "use strict";
    var t = e.i(853712),
        r = e.i(722978);
    e.s(["default", 0, ({
        className: e,
        children: n,
        size: l = "medium",
        ...o
    }) => {
        let a = (0, r.default)("bg-gray-100 text-gray-600 text-tiny-bold dark:bg-gray-900 dark:text-gray-200 rounded-md", {
            small: "px-2 py-1",
            medium: "p-2"
        } [l], e);
        return (0, t.jsx)("span", {
            className: a,
            ...o,
            children: n
        })
    }], 206775)
}, 574022, e => {
    "use strict";
    var t = e.i(107579),
        r = e.i(658734);
    let n = {},
        l = 0,
        o = !1,
        a = null,
        i = null;

    function s(e = {}) {
        let {
            delay: u = 1500,
            closeDelay: c = 500
        } = e, {
            isOpen: d,
            open: p,
            close: f
        } = (0, r.useOverlayTriggerState)(e), g = (0, t.useMemo)(() => `${++l}`, []), m = (0, t.useRef)(null), y = (0, t.useRef)(f), b = () => {
            n[g] = x
        }, v = () => {
            for (let e in n) e !== g && (n[e](!0), delete n[e])
        }, h = () => {
            m.current && clearTimeout(m.current), m.current = null, v(), b(), o = !0, p(), a && (clearTimeout(a), a = null), i && (clearTimeout(i), i = null)
        }, x = e => {
            e || c <= 0 ? (m.current && clearTimeout(m.current), m.current = null, y.current()) : m.current || (m.current = setTimeout(() => {
                m.current = null, y.current()
            }, c)), a && (clearTimeout(a), a = null), o && (i && clearTimeout(i), i = setTimeout(() => {
                delete n[g], i = null, o = !1
            }, Math.max(500, c)))
        };
        return (0, t.useEffect)(() => {
            y.current = f
        }, [f]), (0, t.useEffect)(() => () => {
            m.current && clearTimeout(m.current), n[g] && delete n[g]
        }, [g]), {
            isOpen: d,
            open: e => {
                e || !(u > 0) || m.current ? h() : (v(), b(), d || a || o ? d || h() : a = setTimeout(() => {
                    a = null, o = !0, h()
                }, u))
            },
            close: x
        }
    }
    e.s(["useTooltipTriggerState", () => s])
}, 483625, e => {
    "use strict";
    var t = e.i(894971),
        r = e.i(336480),
        n = e.i(804553);

    function l(e, l) {
        let o = (0, t.filterDOMProps)(e, {
                labelable: !0
            }),
            {
                hoverProps: a
            } = (0, n.useHover)({
                onHoverStart: () => null == l ? void 0 : l.open(!0),
                onHoverEnd: () => null == l ? void 0 : l.close()
            });
        return {
            tooltipProps: (0, r.mergeProps)(o, a, {
                role: "tooltip"
            })
        }
    }
    e.s(["useTooltip", () => l])
}, 367620, e => {
    "use strict";
    var t = e.i(582759),
        r = e.i(804553),
        n = e.i(682677),
        l = e.i(393632),
        o = e.i(336480),
        a = e.i(107579);

    function i(e, i, s) {
        let {
            isDisabled: u,
            trigger: c
        } = e, d = (0, l.useId)(), p = (0, a.useRef)(!1), f = (0, a.useRef)(!1), g = () => {
            (p.current || f.current) && i.open(f.current)
        }, m = e => {
            p.current || f.current || i.close(e)
        };
        (0, a.useEffect)(() => {
            let e = e => {
                s && s.current && "Escape" === e.key && (e.stopPropagation(), i.close(!0))
            };
            if (i.isOpen) return document.addEventListener("keydown", e, !0), () => {
                document.removeEventListener("keydown", e, !0)
            }
        }, [s, i]);
        let y = () => {
                f.current = !1, p.current = !1, m(!0)
            },
            {
                hoverProps: b
            } = (0, r.useHover)({
                isDisabled: u,
                onHoverStart: () => {
                    "focus" !== c && ("pointer" === (0, t.getInteractionModality)() ? p.current = !0 : p.current = !1, g())
                },
                onHoverEnd: () => {
                    "focus" !== c && (f.current = !1, p.current = !1, m())
                }
            }),
            {
                focusableProps: v
            } = (0, n.useFocusable)({
                isDisabled: u,
                onFocus: () => {
                    (0, t.isFocusVisible)() && (f.current = !0, g())
                },
                onBlur: () => {
                    f.current = !1, p.current = !1, m(!0)
                }
            }, s);
        return {
            triggerProps: {
                "aria-describedby": i.isOpen ? d : void 0,
                ...(0, o.mergeProps)(v, b, {
                    onPointerDown: y,
                    onKeyDown: y,
                    tabIndex: void 0
                })
            },
            tooltipProps: {
                id: d
            }
        }
    }
    e.s(["useTooltipTrigger", () => i])
}, 652955, e => {
    "use strict";
    var t = e.i(853712),
        r = e.i(107579),
        n = e.i(574022),
        l = e.i(483625),
        o = e.i(367620),
        a = e.i(336480),
        i = e.i(722978);
    let s = ({
        state: e,
        content: r,
        hasArrow: n,
        placement: o,
        ...s
    }) => {
        let {
            tooltipProps: u
        } = (0, l.useTooltip)(s, e);
        return (0, t.jsx)("span", {
            className: (0, i.default)("text-tiny absolute z-10 w-max max-w-[180px] rounded-lg bg-white p-4 text-left text-gray-900 drop-shadow-lg dark:bg-gray-800 dark:text-gray-100", (e => {
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
            ...(0, a.mergeProps)(s, u),
            children: r
        })
    };
    e.s(["default", 0, ({
        content: e,
        placement: l = "bottom",
        hasArrow: a = !0,
        tooltipOptions: i = {
            delay: 300,
            closeDelay: 0,
            isDisabled: !1
        },
        children: u
    }) => {
        let c = (0, n.useTooltipTriggerState)(i),
            d = (0, r.useRef)(null),
            {
                triggerProps: p,
                tooltipProps: f
            } = (0, o.useTooltipTrigger)(i, c, d);
        return (0, t.jsxs)("span", {
            className: "relative",
            children: [(0, t.jsx)("span", {
                ref: d,
                ...p,
                children: u
            }), c.isOpen && (0, t.jsx)(s, {
                state: c,
                content: e,
                placement: l,
                hasArrow: a,
                ...f
            })]
        })
    }], 652955)
}, 489687, e => {
    "use strict";
    var t, r, n = e.i(107579);

    function l() {
        return (l = Object.assign.bind()).apply(this, arguments)
    }
    let o = ["children", "options"],
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
        d = /\n{2,}$/,
        p = /^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,
        f = /^ *> ?/gm,
        g = /^ {2,}\n/,
        m = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
        y = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
        b = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        v = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        h = /^(?:\n *)*\n/,
        x = /\r\n?/g,
        k = /^\[\^([^\]]+)](:.*)\n/,
        j = /^\[\^([^\]]+)]/,
        O = /\f/g,
        w = /^\s*?\[(x|\s)\]/,
        S = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        P = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        C = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
        T = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
        E = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        M = /^<!--[\s\S]*?(?:-->)/,
        I = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        L = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        A = /^\{.*\}$/,
        _ = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        F = /^<([^ >]+@[^ >]+)>/,
        H = /^<([^ >]+:\/[^ >]+)>/,
        R = /-([a-z])?/gi,
        D = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
        $ = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        N = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        B = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        U = /(\[|\])/g,
        G = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
        z = /\t/g,
        W = /^ *\| */,
        V = /(^ *\||\| *$)/g,
        q = / *$/,
        X = /^ *:-+: *$/,
        Z = /^ *:-+ *$/,
        K = /^ *-+: *$/,
        J = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
        Q = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
        Y = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
        ee = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
        et = /^\\([^0-9A-Za-z\s])/,
        er = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
        en = /^\n+/,
        el = /^([ \t]*)/,
        eo = /\\([^\\])/g,
        ea = / *\n+$/,
        ei = /(?:^|\n)( *)$/,
        es = "(?:\\d+\\.)",
        eu = "(?:[*+-])";

    function ec(e) {
        return "( *)(" + (1 === e ? es : eu) + ") +"
    }
    let ed = ec(1),
        ep = ec(2);

    function ef(e) {
        return RegExp("^" + (1 === e ? ed : ep))
    }
    let eg = ef(1),
        em = ef(2);

    function ey(e) {
        return RegExp("^" + (1 === e ? ed : ep) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? es : eu) + " )[^\\n]*)*(\\n|$)", "gm")
    }
    let eb = ey(1),
        ev = ey(2);

    function eh(e) {
        let t = 1 === e ? es : eu;
        return RegExp("^( *)(" + t + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + t + " (?!" + t + " ))\\n*|\\s*\\n*$)")
    }
    let ex = eh(1),
        ek = eh(2);

    function ej(e, t) {
        let n = 1 === t,
            l = n ? ex : ek,
            o = n ? eb : ev,
            a = n ? eg : em;
        return {
            t(e, t, r) {
                let n = ei.exec(r);
                return n && (t.o || !t._ && !t.u) ? l.exec(e = n[1] + e) : null
            },
            i: r.HIGH,
            l(e, t, r) {
                let l = n ? +e[2] : void 0,
                    i = e[0].replace(d, "\n").match(o),
                    s = !1;
                return {
                    p: i.map(function(e, n) {
                        let l, o = RegExp("^ {1," + a.exec(e)[0].length + "}", "gm"),
                            u = e.replace(o, "").replace(a, ""),
                            c = n === i.length - 1,
                            d = -1 !== u.indexOf("\n\n") || c && s;
                        s = d;
                        let p = r._,
                            f = r.o;
                        r.o = !0, d ? (r._ = !1, l = u.replace(ea, "\n\n")) : (r._ = !0, l = u.replace(ea, ""));
                        let g = t(l, r);
                        return r._ = p, r.o = f, g
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
    let eO = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        ew = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eS = [p, y, b, S, C, P, M, D, eb, ex, ev, ek],
        eP = [...eS, /^[^\n]+(?:  \n|\n{2,})/, T, L];

    function eC(e) {
        return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
    }

    function eT(e) {
        return K.test(e) ? "right" : X.test(e) ? "center" : Z.test(e) ? "left" : null
    }

    function eE(e, t, r) {
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

    function eM(e, t, r) {
        var n;
        r._ = !0;
        let l = eE(e[1], t, r),
            o = e[2].replace(V, "").split("|").map(eT),
            a = (n = e[3], n.trim().split("\n").map(function(e) {
                return eE(e, t, r)
            }));
        return r._ = !1, {
            S: o,
            A: a,
            L: l,
            type: "table"
        }
    }

    function eI(e, t) {
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

    function e_(e) {
        return function(t, r) {
            return r._ || r.u ? null : e.exec(t)
        }
    }

    function eF(e) {
        return function(t) {
            return e.exec(t)
        }
    }

    function eH(e, t, r) {
        if (t._ || t.u || r && !r.endsWith("\n")) return null;
        let n = "";
        e.split("\n").every(e => !eS.some(t => t.test(e)) && (n += e + "\n", e.trim()));
        let l = n.trimEnd();
        return "" == l ? null : [n, l]
    }

    function eR(e) {
        try {
            if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return
        } catch (e) {
            return null
        }
        return e
    }

    function eD(e) {
        return e.replace(eo, "$1")
    }

    function e$(e, t, r) {
        let n = r._ || !1,
            l = r.u || !1;
        r._ = !0, r.u = !0;
        let o = e(t, r);
        return r._ = n, r.u = l, o
    }

    function eN(e, t, r) {
        return r._ = !1, e(t, r)
    }
    let eB = (e, t, r) => ({
        v: e$(t, e[1], r)
    });

    function eU() {
        return {}
    }

    function eG() {
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
        } = e, V = function(e, t) {
            if (null == e) return {};
            var r, n, l = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) t.indexOf(r = o[n]) >= 0 || (l[r] = e[r]);
            return l
        }(e, o);
        return n.cloneElement(function(e, t = {}) {
            var o;
            let d;
            t.overrides = t.overrides || {}, t.slugify = t.slugify || eC, t.namedCodesToUnicode = t.namedCodesToUnicode ? l({}, i, t.namedCodesToUnicode) : i;
            let V = t.createElement || n.createElement;

            function q(e, r, ...n) {
                var o;
                let a, i = ez(t.overrides, `${e}.props`, {});
                return V((a = ez(o = t.overrides, e)) ? "function" == typeof a || "object" == typeof a && "render" in a ? a : ez(o, `${e}.component`, e) : e, l({}, r, i, {
                    className: function(...e) {
                        return e.filter(Boolean).join(" ")
                    }(null == r ? void 0 : r.className, i.className) || void 0
                }), ...n)
            }

            function X(e) {
                let r, l = !1;
                t.forceInline ? l = !0 : t.forceBlock || (l = !1 === G.test(e));
                let o = es(ei(l ? e : `${e.trimEnd().replace(en,"")}

`, {
                    _: l
                }));
                for (;
                    "string" == typeof o[o.length - 1] && !o[o.length - 1].trim();) o.pop();
                if (null === t.wrapper) return o;
                let a = t.wrapper || (l ? "span" : "div");
                if (o.length > 1 || t.forceWrapper) r = o;
                else {
                    if (1 === o.length) return "string" == typeof(r = o[0]) ? q("span", {
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
                    let l = t.indexOf("=");
                    if (-1 !== l) {
                        var o, i, s;
                        let u, c = (-1 !== (o = t.slice(0, l)).indexOf("-") && null === o.match(I) && (o = o.replace(R, function(e, t) {
                                return t.toUpperCase()
                            })), o).trim(),
                            d = ('"' === (u = (i = t.slice(l + 1).trim())[0]) || "'" === u) && i.length >= 2 && i[i.length - 1] === u ? i.slice(1, -1) : i,
                            p = a[c] || c,
                            f = e[p] = (s = d, "style" === c ? s.split(/;\s?/).reduce(function(e, t) {
                                let r = t.slice(0, t.indexOf(":"));
                                return e[r.replace(/(-[a-z])/g, e => e[1].toUpperCase())] = t.slice(r.length + 1).trim(), e
                            }, {}) : "href" === c ? eR(s) : (s.match(A) && (s = s.slice(1, s.length - 1)), "true" === s || "false" !== s && s));
                        "string" == typeof f && (T.test(f) || L.test(f)) && (e[p] = n.cloneElement(X(f.trim()), {
                            key: r
                        }))
                    } else "style" !== t && (e[a[t] || t] = !0);
                    return e
                }, {}) : null
            }
            let K = [],
                eo = {},
                ea = {
                    blockQuote: {
                        t: e_(p),
                        i: r.HIGH,
                        l: (e, t, r) => ({
                            v: t(e[0].replace(f, ""), r)
                        }),
                        h: (e, t, r) => q("blockquote", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    breakLine: {
                        t: eF(g),
                        i: r.HIGH,
                        l: eU,
                        h: (e, t, r) => q("br", {
                            key: r.k
                        })
                    },
                    breakThematic: {
                        t: e_(m),
                        i: r.HIGH,
                        l: eU,
                        h: (e, t, r) => q("hr", {
                            key: r.k
                        })
                    },
                    codeBlock: {
                        t: e_(b),
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
                        t: e_(y),
                        i: r.MAX,
                        l: e => ({
                            O: Z(e[3] || ""),
                            v: e[4],
                            M: e[2] || void 0,
                            type: "codeBlock"
                        })
                    },
                    codeInline: {
                        t: eA(v),
                        i: r.LOW,
                        l: e => ({
                            v: e[2]
                        }),
                        h: (e, t, r) => q("code", {
                            key: r.k
                        }, e.v)
                    },
                    footnote: {
                        t: e_(k),
                        i: r.MAX,
                        l: e => (K.push({
                            I: e[2],
                            j: e[1]
                        }), {}),
                        h: eG
                    },
                    footnoteReference: {
                        t: eL(j),
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
                        t: eL(w),
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
                        t: e_(t.enforceAtxHeadings ? P : S),
                        i: r.HIGH,
                        l: (e, r, n) => ({
                            v: e$(r, e[2], n),
                            T: t.slugify(e[2]),
                            C: e[1].length
                        }),
                        h: (e, t, r) => q(`h${e.C}`, {
                            id: e.T,
                            key: r.k
                        }, t(e.v, r))
                    },
                    headingSetext: {
                        t: e_(C),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: e$(t, e[1], r),
                            C: "=" === e[2] ? 1 : 2,
                            type: "heading"
                        })
                    },
                    htmlComment: {
                        t: eF(M),
                        i: r.HIGH,
                        l: () => ({}),
                        h: eG
                    },
                    image: {
                        t: eA(ew),
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
                            src: eR(e.B)
                        })
                    },
                    link: {
                        t: eL(eO),
                        i: r.LOW,
                        l: (e, t, r) => {
                            var n;
                            let l, o, a;
                            return {
                                v: (n = e[1], l = r._ || !1, o = r.u || !1, r._ = !1, r.u = !0, a = t(n, r), r._ = l, r.u = o, a),
                                B: eD(e[2]),
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
                        t: eL(H),
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
                        t: (e, t) => t.N ? null : eL(_)(e, t),
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
                        t: eL(F),
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
                        t: e_(h),
                        i: r.LOW,
                        l: eU,
                        h: () => "\n"
                    },
                    paragraph: {
                        t: eH,
                        i: r.LOW,
                        l: eB,
                        h: (e, t, r) => q("p", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    ref: {
                        t: eL($),
                        i: r.MAX,
                        l: e => (eo[e[1]] = {
                            B: e[2],
                            F: e[4]
                        }, {}),
                        h: eG
                    },
                    refImage: {
                        t: eA(N),
                        i: r.MAX,
                        l: e => ({
                            D: e[1] || void 0,
                            P: e[2]
                        }),
                        h: (e, t, r) => q("img", {
                            key: r.k,
                            alt: e.D,
                            src: eR(eo[e.P].B),
                            title: eo[e.P].F
                        })
                    },
                    refLink: {
                        t: eL(B),
                        i: r.MAX,
                        l: (e, t, r) => ({
                            v: t(e[1], r),
                            Z: t(e[0].replace(U, "\\$1"), r),
                            P: e[2]
                        }),
                        h: (e, t, r) => eo[e.P] ? q("a", {
                            key: r.k,
                            href: eR(eo[e.P].B),
                            title: eo[e.P].F
                        }, t(e.v, r)) : q("span", {
                            key: r.k
                        }, t(e.Z, r))
                    },
                    table: {
                        t: e_(D),
                        i: r.HIGH,
                        l: eM,
                        h: (e, t, r) => q("table", {
                            key: r.k
                        }, q("thead", null, q("tr", null, e.L.map(function(n, l) {
                            return q("th", {
                                key: l,
                                style: eI(e, l)
                            }, t(n, r))
                        }))), q("tbody", null, e.A.map(function(n, l) {
                            return q("tr", {
                                key: l
                            }, n.map(function(n, l) {
                                return q("td", {
                                    key: l,
                                    style: eI(e, l)
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
                        t: eF(er),
                        i: r.MIN,
                        l: e => ({
                            v: e[0].replace(E, (e, r) => t.namedCodesToUnicode[r] ? t.namedCodesToUnicode[r] : e)
                        }),
                        h: e => e.v
                    },
                    textBolded: {
                        t: eA(J),
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
                        t: eA(Y),
                        i: r.LOW,
                        l: eB,
                        h: (e, t, r) => q("mark", {
                            key: r.k
                        }, t(e.v, r))
                    },
                    textStrikethroughed: {
                        t: eA(ee),
                        i: r.LOW,
                        l: eB,
                        h: (e, t, r) => q("del", {
                            key: r.k
                        }, t(e.v, r))
                    }
                };
            !0 !== t.disableParsingRawHTML && (ea.htmlBlock = {
                t: eF(T),
                i: r.HIGH,
                l(e, t, r) {
                    let [, n] = e[3].match(el), l = RegExp(`^${n}`, "gm"), o = e[3].replace(l, ""), a = eP.some(e => e.test(o)) ? eN : e$, i = e[1].toLowerCase(), u = -1 !== s.indexOf(i);
                    r.N = r.N || "a" === i;
                    let c = u ? e[3] : a(t, o, r);
                    return r.N = !1, {
                        O: Z(e[2]),
                        v: c,
                        G: u,
                        H: u ? i : e[1]
                    }
                },
                h: (e, t, r) => q(e.H, l({
                    key: r.k
                }, e.O), e.G ? e.v : t(e.v, r))
            }, ea.htmlSelfClosing = {
                t: eF(L),
                i: r.HIGH,
                l: e => ({
                    O: Z(e[2] || ""),
                    H: e[1]
                }),
                h: (e, t, r) => q(e.H, l({}, e.O, {
                    key: r.k
                }))
            });
            let ei = ((d = Object.keys(ea)).sort(function(e, t) {
                    let r = ea[e].i,
                        n = ea[t].i;
                    return r !== n ? r - n : e < t ? -1 : 1
                }), function(e, t) {
                    return function e(t, r) {
                        let n = [],
                            l = "";
                        for (; t;) {
                            let o = 0;
                            for (; o < d.length;) {
                                let a = d[o],
                                    i = ea[a],
                                    s = i.t(t, r, l);
                                if (s) {
                                    let o = s[0];
                                    t = t.substring(o.length);
                                    let u = i.l(s, e, r);
                                    null == u.type && (u.type = a), n.push(u), l = o;
                                    break
                                }
                                o++
                            }
                        }
                        return n
                    }(e.replace(x, "\n").replace(O, "").replace(z, "    "), t)
                }),
                es = (o = function(e, t, r) {
                    return ea[e.type].h(e, t, r)
                }, function e(t, r = {}) {
                    if (Array.isArray(t)) {
                        let n = r.k,
                            l = [],
                            o = !1;
                        for (let n = 0; n < t.length; n++) {
                            r.k = n;
                            let a = e(t[n], r),
                                i = "string" == typeof a;
                            i && o ? l[l.length - 1] += a : null !== a && l.push(a), o = i
                        }
                        return r.k = n, l
                    }
                    return o(t, e, r)
                }),
                eu = X(e);
            return K.length ? q("div", null, eu, q("footer", {
                key: "footer"
            }, K.map(function(e) {
                return q("div", {
                    id: t.slugify(e.j),
                    key: e.j
                }, e.j, es(ei(e.I, {
                    _: !0
                })))
            }))) : eu
        }(t, d), V)
    }])
}, 570795, (e, t, r) => {
    var n = Object.prototype;
    t.exports = function(e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || n)
    }
}, 991915, (e, t, r) => {
    t.exports = function(e, t) {
        return function(r) {
            return e(t(r))
        }
    }
}, 642918, (e, t, r) => {
    t.exports = e.r(991915)(Object.keys, Object)
}, 603114, (e, t, r) => {
    var n = e.r(570795),
        l = e.r(642918),
        o = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        if (!n(e)) return l(e);
        var t = [];
        for (var r in Object(e)) o.call(e, r) && "constructor" != r && t.push(r);
        return t
    }
}, 145373, (e, t, r) => {
    t.exports = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff
    }
}, 707850, (e, t, r) => {
    var n = e.r(363883),
        l = e.r(145373);
    t.exports = function(e) {
        return null != e && l(e.length) && !n(e)
    }
}, 124019, (e, t, r) => {
    t.exports = function() {
        return !1
    }
}, 385370, (e, t, r) => {
    var n = e.r(818408),
        l = e.r(124019),
        o = r && !r.nodeType && r,
        a = o && t && !t.nodeType && t,
        i = a && a.exports === o ? n.Buffer : void 0;
    t.exports = (i ? i.isBuffer : void 0) || l
}, 719575, (e, t, r) => {
    var n = e.r(423748),
        l = e.r(145373),
        o = e.r(819674),
        a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, t.exports = function(e) {
        return o(e) && l(e.length) && !!a[n(e)]
    }
}, 632900, (e, t, r) => {
    t.exports = function(e) {
        return function(t) {
            return e(t)
        }
    }
}, 845361, (e, t, r) => {
    var n = e.r(472668),
        l = r && !r.nodeType && r,
        o = l && t && !t.nodeType && t,
        a = o && o.exports === l && n.process;
    t.exports = function() {
        try {
            var e = o && o.require && o.require("util").types;
            if (e) return e;
            return a && a.binding && a.binding("util")
        } catch (e) {}
    }()
}, 713376, (e, t, r) => {
    var n = e.r(719575),
        l = e.r(632900),
        o = e.r(845361),
        a = o && o.isTypedArray;
    t.exports = a ? l(a) : n
}, 531751, (e, t, r) => {
    t.exports = e.r(622280)(e.r(818408), "DataView")
}, 31337, (e, t, r) => {
    t.exports = e.r(622280)(e.r(818408), "Promise")
}, 511524, (e, t, r) => {
    t.exports = e.r(622280)(e.r(818408), "Set")
}, 626568, (e, t, r) => {
    var n = e.r(531751),
        l = e.r(74136),
        o = e.r(31337),
        a = e.r(511524),
        i = e.r(115942),
        s = e.r(423748),
        u = e.r(395331),
        c = "[object Map]",
        d = "[object Promise]",
        p = "[object Set]",
        f = "[object WeakMap]",
        g = "[object DataView]",
        m = u(n),
        y = u(l),
        b = u(o),
        v = u(a),
        h = u(i),
        x = s;
    (n && x(new n(new ArrayBuffer(1))) != g || l && x(new l) != c || o && x(o.resolve()) != d || a && x(new a) != p || i && x(new i) != f) && (x = function(e) {
        var t = s(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? u(r) : "";
        if (n) switch (n) {
            case m:
                return g;
            case y:
                return c;
            case b:
                return d;
            case v:
                return p;
            case h:
                return f
        }
        return t
    }), t.exports = x
}, 820686, (e, t, r) => {
    var n = e.r(603114),
        l = e.r(626568),
        o = e.r(417288),
        a = e.r(272098),
        i = e.r(707850),
        s = e.r(385370),
        u = e.r(570795),
        c = e.r(713376),
        d = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        if (null == e) return !0;
        if (i(e) && (a(e) || "string" == typeof e || "function" == typeof e.splice || s(e) || c(e) || o(e))) return !e.length;
        var t = l(e);
        if ("[object Map]" == t || "[object Set]" == t) return !e.size;
        if (u(e)) return !n(e).length;
        for (var r in e)
            if (d.call(e, r)) return !1;
        return !0
    }
}, 150987, (e, t, r) => {
    t.exports = function(e) {
        return null == e
    }
}, 829150, 434438, e => {
    "use strict";
    var t = e.i(551779);
    let r = t.LanguageMapIETFLanguageTag[t.LanguageMap.en],
        n = e => Object.keys(t.LanguageMapIETFLanguageTag).find(r => t.LanguageMapIETFLanguageTag[r] === e),
        l = (e = t.LanguageMap.en) => t.LanguageMapIETFLanguageTag[e] || r;
    e.s(["FALLBACK_LANGUAGE", 0, r, "default", 0, l, "getLanguageKey", 0, n], 434438);
    var o = e.i(820686),
        a = e.i(150987);
    e.s(["default", 0, (e, i, s) => {
        let {
            locale: u,
            ...c
        } = i, d = e;
        return s && d ? ((e => {
            let r;
            try {
                r = new URL(e)
            } catch (e) {
                return !1
            }
            return l(r.pathname.split("/")[1]) !== t.LanguageMapIETFLanguageTag.en
        })(d) || u === r || (d = ((e, t) => {
            let r;
            if (!t) return e;
            try {
                r = new URL(e)
            } catch (t) {
                return e
            }
            let n = r.pathname.split("/");
            return n.splice(1, 0, t), r.pathname = n.join("/"), r.toString()
        })(d, n(u))), ((e, t) => {
            let r;
            if ((0, o.default)(t)) return e;
            let n = -1 === (r = e.indexOf("?")) ? {} : e.slice(r + 1).split("&").reduce((e, t) => {
                    let [r, n] = t.split("=");
                    return r && (e[decodeURIComponent(r)] = decodeURIComponent(n || "")), e
                }, {}),
                l = {};
            Object.entries(t).forEach(([e, t]) => {
                n.hasOwnProperty(e) || (0, a.default)(t) || (l[e] = t)
            });
            let i = new URLSearchParams(l).toString();
            return e.includes("?") ? `${e}&${i}` : `${e}?${i}`
        })(d, c)) : d
    }], 829150)
}, 551779, e => {
    "use strict";
    var t, r, n = ((t = {}).en = "en", t.de = "de_de", t.ja = "ja_jp", t.fr = "fr_fr", t.pt = "pt_br", t.cn = "zh_cn", t.es = "es_es", t.ru = "ru_ru", t.kr = "ko_kr", t),
        l = ((r = {}).en = "en-US", r.de = "de-DE", r.ja = "ja-JP", r.fr = "fr-FR", r.pt = "pt-BR", r.cn = "zh-CN", r.es = "es-ES", r.ru = "ru-RU", r.kr = "ko-KR", r);
    e.s(["LanguageMap", () => n, "LanguageMapIETFLanguageTag", () => l])
}, 115942, (e, t, r) => {
    t.exports = e.r(622280)(e.r(818408), "WeakMap")
}, 648313, (e, t, r) => {
    var n = e.r(423748),
        l = e.r(819674);
    t.exports = function(e) {
        return l(e) && "[object Arguments]" == n(e)
    }
}, 417288, (e, t, r) => {
    var n = e.r(648313),
        l = e.r(819674),
        o = Object.prototype,
        a = o.hasOwnProperty,
        i = o.propertyIsEnumerable;
    t.exports = n(function() {
        return arguments
    }()) ? n : function(e) {
        return l(e) && a.call(e, "callee") && !i.call(e, "callee")
    }
}, 201763, e => {
    "use strict";
    var t = e.i(853712),
        r = e.i(722978),
        n = e.i(993358);
    e.s(["default", 0, ({
        keyFigures: e,
        nested: l = !1,
        theme: o = "light"
    }) => {
        let a = (0, r.clsx)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
            "py-16": !l
        });
        return (0, t.jsx)("div", {
            className: "dark" === o ? "bg-black text-white" : "",
            children: (0, t.jsx)("div", {
                className: a,
                children: e?.map((a, i) => {
                    let {
                        value: s,
                        label: u
                    } = a, c = (0, r.clsx)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                        "backdrop-blur-lg": l && "dark" !== o,
                        "bg-gray-900 dark:bg-black": "dark" === o,
                        "bg-gray-100 dark:bg-gray-900 text-gray-800": !l && "dark" !== o,
                        "xl:col-span-3": e?.length === 4
                    });
                    return s?.type === "text" ? (0, t.jsxs)("div", {
                        className: c,
                        children: [(0, t.jsx)("div", {
                            className: "loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center",
                            children: s.text
                        }), (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: u
                        })]
                    }, i) : u && s?.type === "icon" && !s.url ? (0, t.jsx)("div", {
                        className: c,
                        children: (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: u
                        })
                    }, i) : s?.type === "icon" && s.url ? (0, t.jsxs)("div", {
                        className: c,
                        children: [(0, t.jsx)("div", {
                            className: "flex min-w-[30%] shrink-0 gap-10 text-center lg:justify-center",
                            children: (0, t.jsx)(n.default, {
                                src: s.url,
                                alt: s.description,
                                width: 40,
                                height: 40
                            })
                        }), (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: u
                        })]
                    }, i) : null
                })
            })
        })
    }])
}, 115219, e => {
    "use strict";
    var t = e.i(853712),
        r = e.i(363737),
        n = e.i(436324),
        l = e.i(869324),
        o = e.i(537251);
    e.s(["useFormModal", 0, e => {
        let {
            extraFields: a
        } = (0, o.default)(), i = ({
            label: o,
            form: a
        }) => {
            let i = ((e, t) => {
                let r = e?.find(e => t.title === e?.form?.title)?.customSelections || "";
                try {
                    return JSON.parse(r)
                } catch (e) {
                    return null
                }
            })(e || [], a);
            if (i && a?.fields)
                for (let e of Object.keys(i)) {
                    let t = a.fields.findIndex(t => t.formFieldId === e);
                    if (t >= 0) {
                        let r = i[e];
                        null != r.isRequired && (a.fields[t].isRequired = i[e].isRequired), r.isHidden && a.fields.splice(t, 1)
                    }
                }
            return (0, t.jsx)(r.default, {
                actionLabel: o,
                onOpenChange: e => {
                    e && (0, l.default)({
                        properties: {
                            form_action: "presented",
                            form_id: a.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                            form_name: a.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                        }
                    })
                },
                children: e => (0, t.jsx)(r.default.Layout, {
                    modal: {
                        title: a.title,
                        description: a.description
                    },
                    children: a && (0, t.jsx)(n.FormBuilder, {
                        form: a,
                        close: e
                    })
                })
            })
        };
        return {
            renderModal: i,
            mapFormActions: e => e?.map(e => ({
                title: e.title,
                link: e.link ? {
                    href: e.link.linkReference?.href.current || "",
                    target: e.link.linkReference?.target || "_self"
                } : null,
                form: e.form ? {
                    form: e.form,
                    webinarFormParametersContent: e.webinarFormParametersContent,
                    extraFields: a,
                    renderModal: i
                } : null
            })),
            extraFields: a
        }
    }])
}, 369710, e => {
    "use strict";

    function t(e, t, r) {
        if (e instanceof EventTarget) return [e];
        if ("string" == typeof e) {
            let n = document;
            t && (n = t.current);
            let l = r?.[e] ?? n.querySelectorAll(e);
            return l ? Array.from(l) : []
        }
        return Array.from(e)
    }
    e.s(["resolveElements", () => t])
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
}, 475200, e => {
    "use strict";
    var t = e.i(107579);
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
    var t = e.i(107579);
    e.s(["default", 0, e => {
        let [r, n] = (0, t.useState)("");
        return (0, t.useEffect)(() => {
            n(document.cookie)
        }, []), [(0, t.useMemo)(() => r?.split("; ")?.find(t => t.includes(e)), [r, e])]
    }])
}, 976989, e => {
    "use strict";
    var t = e.i(853712);
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
}, 346385, 540199, e => {
    "use strict";
    var t = e.i(107579),
        r = e.i(336480),
        n = e.i(413087),
        l = e.i(547249),
        o = e.i(835207);
    e.i(252495);
    var a = e.i(894971),
        i = e.i(352267),
        s = e.i(682677);

    function u(e, u, c) {
        let d = (0, n.useFormValidationState)({
                ...e,
                value: u.isSelected
            }),
            {
                isInvalid: p,
                validationErrors: f,
                validationDetails: g
            } = d.displayValidation,
            {
                labelProps: m,
                inputProps: y,
                isSelected: b,
                isPressed: v,
                isDisabled: h,
                isReadOnly: x
            } = function(e, t, n) {
                let {
                    isDisabled: l = !1,
                    isReadOnly: u = !1,
                    value: c,
                    name: d,
                    children: p,
                    "aria-label": f,
                    "aria-labelledby": g,
                    validationState: m = "valid",
                    isInvalid: y
                } = e, {
                    pressProps: b,
                    isPressed: v
                } = (0, o.usePress)({
                    isDisabled: l
                }), {
                    pressProps: h,
                    isPressed: x
                } = (0, o.usePress)({
                    onPress() {
                        var e;
                        t.toggle(), null == (e = n.current) || e.focus()
                    },
                    isDisabled: l || u
                }), {
                    focusableProps: k
                } = (0, s.useFocusable)(e, n), j = (0, r.mergeProps)(b, k), O = (0, a.filterDOMProps)(e, {
                    labelable: !0
                });
                return (0, i.useFormReset)(n, t.isSelected, t.setSelected), {
                    labelProps: (0, r.mergeProps)(h, {
                        onClick: e => e.preventDefault()
                    }),
                    inputProps: (0, r.mergeProps)(O, {
                        "aria-invalid": y || "invalid" === m || void 0,
                        "aria-errormessage": e["aria-errormessage"],
                        "aria-controls": e["aria-controls"],
                        "aria-readonly": u || void 0,
                        onChange: e => {
                            e.stopPropagation(), t.setSelected(e.target.checked)
                        },
                        disabled: l,
                        ...null == c ? {} : {
                            value: c
                        },
                        name: d,
                        type: "checkbox",
                        ...j
                    }),
                    isSelected: t.isSelected,
                    isPressed: v || x,
                    isDisabled: l,
                    isReadOnly: u,
                    isInvalid: y || "invalid" === m
                }
            }({
                ...e,
                isInvalid: p
            }, u, c);
        (0, l.useFormValidation)(e, d, c);
        let {
            isIndeterminate: k,
            isRequired: j,
            validationBehavior: O = "aria"
        } = e;
        (0, t.useEffect)(() => {
            c.current && (c.current.indeterminate = !!k)
        });
        let {
            pressProps: w
        } = (0, o.usePress)({
            isDisabled: h || x,
            onPress() {
                let {
                    [n.privateValidationStateProp]: t
                } = e, {
                    commitValidation: r
                } = t || d;
                r()
            }
        });
        return {
            labelProps: (0, r.mergeProps)(m, w),
            inputProps: {
                ...y,
                checked: b,
                "aria-required": j && "aria" === O || void 0,
                required: j && "native" === O
            },
            isSelected: b,
            isPressed: v,
            isDisabled: h,
            isReadOnly: x,
            isInvalid: p,
            validationErrors: f,
            validationDetails: g
        }
    }
    e.s(["useCheckbox", () => u], 346385);
    var c = e.i(923689);

    function d(e = {}) {
        var r;
        let {
            isReadOnly: n
        } = e, [l, o] = (0, c.useControlledState)(e.isSelected, e.defaultSelected || !1, e.onChange), [a] = (0, t.useState)(l);
        return {
            isSelected: l,
            defaultSelected: null != (r = e.defaultSelected) ? r : a,
            setSelected: function(e) {
                n || o(e)
            },
            toggle: function() {
                n || o(!l)
            }
        }
    }
    e.s(["useToggleState", () => d], 540199)
}, 472668, (e, t, r) => {
    t.exports = e.g && e.g.Object === Object && e.g
}, 818408, (e, t, r) => {
    var n = e.r(472668),
        l = "object" == typeof self && self && self.Object === Object && self;
    t.exports = n || l || Function("return this")()
}, 407667, (e, t, r) => {
    t.exports = e.r(818408).Symbol
}, 652930, (e, t, r) => {
    var n = e.r(407667),
        l = Object.prototype,
        o = l.hasOwnProperty,
        a = l.toString,
        i = n ? n.toStringTag : void 0;
    t.exports = function(e) {
        var t = o.call(e, i),
            r = e[i];
        try {
            e[i] = void 0;
            var n = !0
        } catch (e) {}
        var l = a.call(e);
        return n && (t ? e[i] = r : delete e[i]), l
    }
}, 21955, (e, t, r) => {
    var n = Object.prototype.toString;
    t.exports = function(e) {
        return n.call(e)
    }
}, 423748, (e, t, r) => {
    var n = e.r(407667),
        l = e.r(652930),
        o = e.r(21955),
        a = n ? n.toStringTag : void 0;
    t.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? l(e) : o(e)
    }
}, 819674, (e, t, r) => {
    t.exports = function(e) {
        return null != e && "object" == typeof e
    }
}, 272098, (e, t, r) => {
    t.exports = Array.isArray
}, 248664, (e, t, r) => {
    var n = e.r(423748),
        l = e.r(819674);
    t.exports = function(e) {
        return "symbol" == typeof e || l(e) && "[object Symbol]" == n(e)
    }
}, 791606, (e, t, r) => {
    t.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, 363883, (e, t, r) => {
    var n = e.r(423748),
        l = e.r(791606);
    t.exports = function(e) {
        if (!l(e)) return !1;
        var t = n(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
}, 656921, (e, t, r) => {
    t.exports = e.r(818408)["__core-js_shared__"]
}, 763803, (e, t, r) => {
    var n, l = e.r(656921),
        o = (n = /[^.]+$/.exec(l && l.keys && l.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
    t.exports = function(e) {
        return !!o && o in e
    }
}, 395331, (e, t, r) => {
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
}, 732150, (e, t, r) => {
    var n = e.r(363883),
        l = e.r(763803),
        o = e.r(791606),
        a = e.r(395331),
        i = /^\[object .+?Constructor\]$/,
        s = Object.prototype,
        u = Function.prototype.toString,
        c = s.hasOwnProperty,
        d = RegExp("^" + u.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(e) {
        return !(!o(e) || l(e)) && (n(e) ? d : i).test(a(e))
    }
}, 861686, (e, t, r) => {
    t.exports = function(e, t) {
        return null == e ? void 0 : e[t]
    }
}, 622280, (e, t, r) => {
    var n = e.r(732150),
        l = e.r(861686);
    t.exports = function(e, t) {
        var r = l(e, t);
        return n(r) ? r : void 0
    }
}, 74136, (e, t, r) => {
    t.exports = e.r(622280)(e.r(818408), "Map")
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "63da8728-ac51-5ff5-8c91-55e9de5258b8")
    } catch (e) {}
}();
//# debugId=63da8728-ac51-5ff5-8c91-55e9de5258b8