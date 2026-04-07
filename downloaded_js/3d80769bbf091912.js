(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 388726, e => {
    "use strict";
    var r = e.i(614010),
        t = e.i(179037),
        n = e.i(365666),
        a = e.i(148597),
        o = e.i(336480),
        i = e.i(107579);

    function l(e, l, s) {
        let {
            overlayProps: u,
            underlayProps: c
        } = (0, t.useOverlay)({
            ...e,
            isOpen: l.isOpen,
            onClose: l.close
        }, s);
        return (0, a.usePreventScroll)({
            isDisabled: !l.isOpen
        }), (0, n.useOverlayFocusContain)(), (0, i.useEffect)(() => {
            if (l.isOpen && s.current) return (0, r.ariaHideOutside)([s.current])
        }, [l.isOpen, s]), {
            modalProps: (0, o.mergeProps)(u),
            underlayProps: c
        }
    }
    e.s(["useModalOverlay", () => l])
}, 363737, e => {
    "use strict";
    var r = e.i(853712),
        t = e.i(107579),
        n = e.i(365666),
        a = e.i(388726),
        o = e.i(502514),
        i = e.i(658734),
        l = e.i(749583);
    let s = ({
            state: e,
            children: o,
            ...i
        }) => {
            let l = (0, t.useRef)(null),
                {
                    modalProps: s,
                    underlayProps: u
                } = (0, a.useModalOverlay)({
                    ...i
                }, e, l);
            return (0, t.useEffect)(() => {
                let r = l.current?.querySelector("div"),
                    t = e => {
                        let t = e.relatedTarget;
                        r && !r.contains(t) && r.focus()
                    };
                return e.isOpen && r && (r.focus(), r.addEventListener("focusout", t)), () => {
                    r && r.removeEventListener("focusout", t)
                }
            }, [e.isOpen]), (0, r.jsx)(n.Overlay, {
                children: (0, r.jsx)("div", {
                    className: "fixed top-0 right-0 bottom-0 left-0 z-[60] flex items-start justify-center overflow-hidden bg-gray-500/50",
                    ...u,
                    children: (0, r.jsx)("div", {
                        ref: l,
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
            showTriggerButton: a = !0,
            ...u
        }) => {
            let c = (0, i.useOverlayTriggerState)({
                    ...u
                }),
                {
                    triggerProps: p,
                    overlayProps: f
                } = (0, o.useOverlayTrigger)({
                    type: "dialog"
                }, c);
            return (0, r.jsxs)(r.Fragment, {
                children: [a && (0, r.jsx)(l.default, {
                    rounded: !0,
                    hasArrow: !0,
                    ...p,
                    children: e
                }), c.isOpen && (0, r.jsx)(s, {
                    state: c,
                    ...u,
                    isDismissable: !0,
                    children: "function" == typeof n ? (0, t.cloneElement)(n(c.close), f) : (0, t.cloneElement)(n, f)
                })]
            })
        };
    u.Layout = ({
        children: e,
        modal: t
    }) => (0, r.jsxs)("div", {
        className: "flex h-screen max-w-[600px] flex-col overflow-scroll rounded-xl bg-white p-10 sm:min-w-[600px] md:my-20 md:h-3/4 [&>*]:text-black",
        tabIndex: -1,
        children: [(0, r.jsx)("h4", {
            className: "mb-4 text-2xl leading-8 font-medium",
            children: t.title
        }), (0, r.jsx)("p", {
            className: "mb-8 text-base leading-5 font-medium",
            children: t.description
        }), e]
    }), e.s(["default", 0, u], 363737)
}, 206775, e => {
    "use strict";
    var r = e.i(853712),
        t = e.i(722978);
    e.s(["default", 0, ({
        className: e,
        children: n,
        size: a = "medium",
        ...o
    }) => {
        let i = (0, t.default)("bg-gray-100 text-gray-600 text-tiny-bold dark:bg-gray-900 dark:text-gray-200 rounded-md", {
            small: "px-2 py-1",
            medium: "p-2"
        } [a], e);
        return (0, r.jsx)("span", {
            className: i,
            ...o,
            children: n
        })
    }], 206775)
}, 574022, e => {
    "use strict";
    var r = e.i(107579),
        t = e.i(658734);
    let n = {},
        a = 0,
        o = !1,
        i = null,
        l = null;

    function s(e = {}) {
        let {
            delay: u = 1500,
            closeDelay: c = 500
        } = e, {
            isOpen: p,
            open: f,
            close: d
        } = (0, t.useOverlayTriggerState)(e), g = (0, r.useMemo)(() => `${++a}`, []), h = (0, r.useRef)(null), v = (0, r.useRef)(d), y = () => {
            n[g] = b
        }, x = () => {
            for (let e in n) e !== g && (n[e](!0), delete n[e])
        }, m = () => {
            h.current && clearTimeout(h.current), h.current = null, x(), y(), o = !0, f(), i && (clearTimeout(i), i = null), l && (clearTimeout(l), l = null)
        }, b = e => {
            e || c <= 0 ? (h.current && clearTimeout(h.current), h.current = null, v.current()) : h.current || (h.current = setTimeout(() => {
                h.current = null, v.current()
            }, c)), i && (clearTimeout(i), i = null), o && (l && clearTimeout(l), l = setTimeout(() => {
                delete n[g], l = null, o = !1
            }, Math.max(500, c)))
        };
        return (0, r.useEffect)(() => {
            v.current = d
        }, [d]), (0, r.useEffect)(() => () => {
            h.current && clearTimeout(h.current), n[g] && delete n[g]
        }, [g]), {
            isOpen: p,
            open: e => {
                e || !(u > 0) || h.current ? m() : (x(), y(), p || i || o ? p || m() : i = setTimeout(() => {
                    i = null, o = !0, m()
                }, u))
            },
            close: b
        }
    }
    e.s(["useTooltipTriggerState", () => s])
}, 483625, e => {
    "use strict";
    var r = e.i(894971),
        t = e.i(336480),
        n = e.i(804553);

    function a(e, a) {
        let o = (0, r.filterDOMProps)(e, {
                labelable: !0
            }),
            {
                hoverProps: i
            } = (0, n.useHover)({
                onHoverStart: () => null == a ? void 0 : a.open(!0),
                onHoverEnd: () => null == a ? void 0 : a.close()
            });
        return {
            tooltipProps: (0, t.mergeProps)(o, i, {
                role: "tooltip"
            })
        }
    }
    e.s(["useTooltip", () => a])
}, 367620, e => {
    "use strict";
    var r = e.i(582759),
        t = e.i(804553),
        n = e.i(682677),
        a = e.i(393632),
        o = e.i(336480),
        i = e.i(107579);

    function l(e, l, s) {
        let {
            isDisabled: u,
            trigger: c
        } = e, p = (0, a.useId)(), f = (0, i.useRef)(!1), d = (0, i.useRef)(!1), g = () => {
            (f.current || d.current) && l.open(d.current)
        }, h = e => {
            f.current || d.current || l.close(e)
        };
        (0, i.useEffect)(() => {
            let e = e => {
                s && s.current && "Escape" === e.key && (e.stopPropagation(), l.close(!0))
            };
            if (l.isOpen) return document.addEventListener("keydown", e, !0), () => {
                document.removeEventListener("keydown", e, !0)
            }
        }, [s, l]);
        let v = () => {
                d.current = !1, f.current = !1, h(!0)
            },
            {
                hoverProps: y
            } = (0, t.useHover)({
                isDisabled: u,
                onHoverStart: () => {
                    "focus" !== c && ("pointer" === (0, r.getInteractionModality)() ? f.current = !0 : f.current = !1, g())
                },
                onHoverEnd: () => {
                    "focus" !== c && (d.current = !1, f.current = !1, h())
                }
            }),
            {
                focusableProps: x
            } = (0, n.useFocusable)({
                isDisabled: u,
                onFocus: () => {
                    (0, r.isFocusVisible)() && (d.current = !0, g())
                },
                onBlur: () => {
                    d.current = !1, f.current = !1, h(!0)
                }
            }, s);
        return {
            triggerProps: {
                "aria-describedby": l.isOpen ? p : void 0,
                ...(0, o.mergeProps)(x, y, {
                    onPointerDown: v,
                    onKeyDown: v,
                    tabIndex: void 0
                })
            },
            tooltipProps: {
                id: p
            }
        }
    }
    e.s(["useTooltipTrigger", () => l])
}, 652955, e => {
    "use strict";
    var r = e.i(853712),
        t = e.i(107579),
        n = e.i(574022),
        a = e.i(483625),
        o = e.i(367620),
        i = e.i(336480),
        l = e.i(722978);
    let s = ({
        state: e,
        content: t,
        hasArrow: n,
        placement: o,
        ...s
    }) => {
        let {
            tooltipProps: u
        } = (0, a.useTooltip)(s, e);
        return (0, r.jsx)("span", {
            className: (0, l.default)("text-tiny absolute z-10 w-max max-w-[180px] rounded-lg bg-white p-4 text-left text-gray-900 drop-shadow-lg dark:bg-gray-800 dark:text-gray-100", (e => {
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
            ...(0, i.mergeProps)(s, u),
            children: t
        })
    };
    e.s(["default", 0, ({
        content: e,
        placement: a = "bottom",
        hasArrow: i = !0,
        tooltipOptions: l = {
            delay: 300,
            closeDelay: 0,
            isDisabled: !1
        },
        children: u
    }) => {
        let c = (0, n.useTooltipTriggerState)(l),
            p = (0, t.useRef)(null),
            {
                triggerProps: f,
                tooltipProps: d
            } = (0, o.useTooltipTrigger)(l, c, p);
        return (0, r.jsxs)("span", {
            className: "relative",
            children: [(0, r.jsx)("span", {
                ref: p,
                ...f,
                children: u
            }), c.isOpen && (0, r.jsx)(s, {
                state: c,
                content: e,
                placement: a,
                hasArrow: i,
                ...d
            })]
        })
    }], 652955)
}, 489687, e => {
    "use strict";
    var r, t, n = e.i(107579);

    function a() {
        return (a = Object.assign.bind()).apply(this, arguments)
    }
    let o = ["children", "options"],
        i = ["allowFullScreen", "allowTransparency", "autoComplete", "autoFocus", "autoPlay", "cellPadding", "cellSpacing", "charSet", "className", "classId", "colSpan", "contentEditable", "contextMenu", "crossOrigin", "encType", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "frameBorder", "hrefLang", "inputMode", "keyParams", "keyType", "marginHeight", "marginWidth", "maxLength", "mediaGroup", "minLength", "noValidate", "radioGroup", "readOnly", "rowSpan", "spellCheck", "srcDoc", "srcLang", "srcSet", "tabIndex", "useMap"].reduce((e, r) => (e[r.toLowerCase()] = r, e), {
            for: "htmlFor"
        }),
        l = {
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
        g = /^ {2,}\n/,
        h = /^(?:( *[-*_])){3,} *(?:\n *)+\n/,
        v = /^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,
        y = /^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,
        x = /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
        m = /^(?:\n *)*\n/,
        b = /\r\n?/g,
        _ = /^\[\^([^\]]+)](:.*)\n/,
        k = /^\[\^([^\]]+)]/,
        E = /\f/g,
        T = /^\s*?\[(x|\s)\]/,
        j = /^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        S = /^ *(#{1,6}) +([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,
        w = /^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,
        O = /^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,
        L = /&([a-z0-9]+|#[0-9]{1,6}|#x[0-9a-fA-F]{1,6});/gi,
        A = /^<!--[\s\S]*?(?:-->)/,
        C = /^(data|aria|x)-[a-z_][a-z\d_.-]*$/,
        I = /^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,
        M = /^\{.*\}$/,
        R = /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
        B = /^<([^ >]+@[^ >]+)>/,
        H = /^<([^ >]+:\/[^ >]+)>/,
        N = /-([a-z])?/gi,
        P = /^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,
        F = /^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,
        D = /^!\[([^\]]*)\] ?\[([^\]]*)\]/,
        $ = /^\[([^\]]*)\] ?\[([^\]]*)\]/,
        U = /(\[|\])/g,
        G = /(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,
        z = /\t/g,
        W = /^ *\| */,
        X = /(^ *\||\| *$)/g,
        q = / *$/,
        K = /^ *:-+: *$/,
        V = /^ *:-+ *$/,
        Y = /^ *-+: *$/,
        Z = /^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,
        J = /^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,
        Q = /^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,
        ee = /^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,
        er = /^\\([^0-9A-Za-z\s])/,
        et = /^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&#;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,
        en = /^\n+/,
        ea = /^([ \t]*)/,
        eo = /\\([^\\])/g,
        ei = / *\n+$/,
        el = /(?:^|\n)( *)$/,
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
    let eg = ed(1),
        eh = ed(2);

    function ev(e) {
        return RegExp("^" + (1 === e ? ep : ef) + "[^\\n]*(?:\\n(?!\\1" + (1 === e ? es : eu) + " )[^\\n]*)*(\\n|$)", "gm")
    }
    let ey = ev(1),
        ex = ev(2);

    function em(e) {
        let r = 1 === e ? es : eu;
        return RegExp("^( *)(" + r + ") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1" + r + " (?!" + r + " ))\\n*|\\s*\\n*$)")
    }
    let eb = em(1),
        e_ = em(2);

    function ek(e, r) {
        let n = 1 === r,
            a = n ? eb : e_,
            o = n ? ey : ex,
            i = n ? eg : eh;
        return {
            t(e, r, t) {
                let n = el.exec(t);
                return n && (r.o || !r._ && !r.u) ? a.exec(e = n[1] + e) : null
            },
            i: t.HIGH,
            l(e, r, t) {
                let a = n ? +e[2] : void 0,
                    l = e[0].replace(p, "\n").match(o),
                    s = !1;
                return {
                    p: l.map(function(e, n) {
                        let a, o = RegExp("^ {1," + i.exec(e)[0].length + "}", "gm"),
                            u = e.replace(o, "").replace(i, ""),
                            c = n === l.length - 1,
                            p = -1 !== u.indexOf("\n\n") || c && s;
                        s = p;
                        let f = t._,
                            d = t.o;
                        t.o = !0, p ? (t._ = !1, a = u.replace(ei, "\n\n")) : (t._ = !0, a = u.replace(ei, ""));
                        let g = r(a, t);
                        return t._ = f, t.o = d, g
                    }),
                    m: n,
                    g: a
                }
            },
            h: (r, t, n) => e(r.m ? "ol" : "ul", {
                key: n.k,
                start: r.g
            }, r.p.map(function(r, a) {
                return e("li", {
                    key: a
                }, t(r, n))
            }))
        }
    }
    let eE = /^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        eT = /^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,
        ej = [f, v, y, j, w, S, A, P, ey, eb, ex, e_],
        eS = [...ej, /^[^\n]+(?:  \n|\n{2,})/, O, I];

    function ew(e) {
        return e.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g, "a").replace(/[çÇ]/g, "c").replace(/[ðÐ]/g, "d").replace(/[ÈÉÊËéèêë]/g, "e").replace(/[ÏïÎîÍíÌì]/g, "i").replace(/[Ññ]/g, "n").replace(/[øØœŒÕõÔôÓóÒò]/g, "o").replace(/[ÜüÛûÚúÙù]/g, "u").replace(/[ŸÿÝý]/g, "y").replace(/[^a-z0-9- ]/gi, "").replace(/ /gi, "-").toLowerCase()
    }

    function eO(e) {
        return Y.test(e) ? "right" : K.test(e) ? "center" : V.test(e) ? "left" : null
    }

    function eL(e, r, t) {
        let n = t.$;
        t.$ = !0;
        let a = r(e.trim(), t);
        t.$ = n;
        let o = [
            []
        ];
        return a.forEach(function(e, r) {
            "tableSeparator" === e.type ? 0 !== r && r !== a.length - 1 && o.push([]) : ("text" !== e.type || null != a[r + 1] && "tableSeparator" !== a[r + 1].type || (e.v = e.v.replace(q, "")), o[o.length - 1].push(e))
        }), o
    }

    function eA(e, r, t) {
        var n;
        t._ = !0;
        let a = eL(e[1], r, t),
            o = e[2].replace(X, "").split("|").map(eO),
            i = (n = e[3], n.trim().split("\n").map(function(e) {
                return eL(e, r, t)
            }));
        return t._ = !1, {
            S: o,
            A: i,
            L: a,
            type: "table"
        }
    }

    function eC(e, r) {
        return null == e.S[r] ? {} : {
            textAlign: e.S[r]
        }
    }

    function eI(e) {
        return function(r, t) {
            return t._ ? e.exec(r) : null
        }
    }

    function eM(e) {
        return function(r, t) {
            return t._ || t.u ? e.exec(r) : null
        }
    }

    function eR(e) {
        return function(r, t) {
            return t._ || t.u ? null : e.exec(r)
        }
    }

    function eB(e) {
        return function(r) {
            return e.exec(r)
        }
    }

    function eH(e, r, t) {
        if (r._ || r.u || t && !t.endsWith("\n")) return null;
        let n = "";
        e.split("\n").every(e => !ej.some(r => r.test(e)) && (n += e + "\n", e.trim()));
        let a = n.trimEnd();
        return "" == a ? null : [n, a]
    }

    function eN(e) {
        try {
            if (decodeURIComponent(e).replace(/[^A-Za-z0-9/:]/g, "").match(/^\s*(javascript|vbscript|data(?!:image)):/i)) return
        } catch (e) {
            return null
        }
        return e
    }

    function eP(e) {
        return e.replace(eo, "$1")
    }

    function eF(e, r, t) {
        let n = t._ || !1,
            a = t.u || !1;
        t._ = !0, t.u = !0;
        let o = e(r, t);
        return t._ = n, t.u = a, o
    }

    function eD(e, r, t) {
        return t._ = !1, e(r, t)
    }
    let e$ = (e, r, t) => ({
        v: eF(r, e[1], t)
    });

    function eU() {
        return {}
    }

    function eG() {
        return null
    }

    function ez(e, r, t) {
        let n = e,
            a = r.split(".");
        for (; a.length && void 0 !== (n = n[a[0]]);) a.shift();
        return n || t
    }(r = t || (t = {}))[r.MAX = 0] = "MAX", r[r.HIGH = 1] = "HIGH", r[r.MED = 2] = "MED", r[r.LOW = 3] = "LOW", r[r.MIN = 4] = "MIN", e.s(["default", 0, e => {
        let {
            children: r,
            options: p
        } = e, X = function(e, r) {
            if (null == e) return {};
            var t, n, a = {},
                o = Object.keys(e);
            for (n = 0; n < o.length; n++) r.indexOf(t = o[n]) >= 0 || (a[t] = e[t]);
            return a
        }(e, o);
        return n.cloneElement(function(e, r = {}) {
            var o;
            let p;
            r.overrides = r.overrides || {}, r.slugify = r.slugify || ew, r.namedCodesToUnicode = r.namedCodesToUnicode ? a({}, l, r.namedCodesToUnicode) : l;
            let X = r.createElement || n.createElement;

            function q(e, t, ...n) {
                var o;
                let i, l = ez(r.overrides, `${e}.props`, {});
                return X((i = ez(o = r.overrides, e)) ? "function" == typeof i || "object" == typeof i && "render" in i ? i : ez(o, `${e}.component`, e) : e, a({}, t, l, {
                    className: function(...e) {
                        return e.filter(Boolean).join(" ")
                    }(null == t ? void 0 : t.className, l.className) || void 0
                }), ...n)
            }

            function K(e) {
                let t, a = !1;
                r.forceInline ? a = !0 : r.forceBlock || (a = !1 === G.test(e));
                let o = es(el(a ? e : `${e.trimEnd().replace(en,"")}

`, {
                    _: a
                }));
                for (;
                    "string" == typeof o[o.length - 1] && !o[o.length - 1].trim();) o.pop();
                if (null === r.wrapper) return o;
                let i = r.wrapper || (a ? "span" : "div");
                if (o.length > 1 || r.forceWrapper) t = o;
                else {
                    if (1 === o.length) return "string" == typeof(t = o[0]) ? q("span", {
                        key: "outer"
                    }, t) : t;
                    t = null
                }
                return n.createElement(i, {
                    key: "outer"
                }, t)
            }

            function V(e) {
                let r = e.match(u);
                return r ? r.reduce(function(e, r, t) {
                    let a = r.indexOf("=");
                    if (-1 !== a) {
                        var o, l, s;
                        let u, c = (-1 !== (o = r.slice(0, a)).indexOf("-") && null === o.match(C) && (o = o.replace(N, function(e, r) {
                                return r.toUpperCase()
                            })), o).trim(),
                            p = ('"' === (u = (l = r.slice(a + 1).trim())[0]) || "'" === u) && l.length >= 2 && l[l.length - 1] === u ? l.slice(1, -1) : l,
                            f = i[c] || c,
                            d = e[f] = (s = p, "style" === c ? s.split(/;\s?/).reduce(function(e, r) {
                                let t = r.slice(0, r.indexOf(":"));
                                return e[t.replace(/(-[a-z])/g, e => e[1].toUpperCase())] = r.slice(t.length + 1).trim(), e
                            }, {}) : "href" === c ? eN(s) : (s.match(M) && (s = s.slice(1, s.length - 1)), "true" === s || "false" !== s && s));
                        "string" == typeof d && (O.test(d) || I.test(d)) && (e[f] = n.cloneElement(K(d.trim()), {
                            key: t
                        }))
                    } else "style" !== r && (e[i[r] || r] = !0);
                    return e
                }, {}) : null
            }
            let Y = [],
                eo = {},
                ei = {
                    blockQuote: {
                        t: eR(f),
                        i: t.HIGH,
                        l: (e, r, t) => ({
                            v: r(e[0].replace(d, ""), t)
                        }),
                        h: (e, r, t) => q("blockquote", {
                            key: t.k
                        }, r(e.v, t))
                    },
                    breakLine: {
                        t: eB(g),
                        i: t.HIGH,
                        l: eU,
                        h: (e, r, t) => q("br", {
                            key: t.k
                        })
                    },
                    breakThematic: {
                        t: eR(h),
                        i: t.HIGH,
                        l: eU,
                        h: (e, r, t) => q("hr", {
                            key: t.k
                        })
                    },
                    codeBlock: {
                        t: eR(y),
                        i: t.MAX,
                        l: e => ({
                            v: e[0].replace(/^ {4}/gm, "").replace(/\n+$/, ""),
                            M: void 0
                        }),
                        h: (e, r, t) => q("pre", {
                            key: t.k
                        }, q("code", a({}, e.O, {
                            className: e.M ? `lang-${e.M}` : ""
                        }), e.v))
                    },
                    codeFenced: {
                        t: eR(v),
                        i: t.MAX,
                        l: e => ({
                            O: V(e[3] || ""),
                            v: e[4],
                            M: e[2] || void 0,
                            type: "codeBlock"
                        })
                    },
                    codeInline: {
                        t: eM(x),
                        i: t.LOW,
                        l: e => ({
                            v: e[2]
                        }),
                        h: (e, r, t) => q("code", {
                            key: t.k
                        }, e.v)
                    },
                    footnote: {
                        t: eR(_),
                        i: t.MAX,
                        l: e => (Y.push({
                            I: e[2],
                            j: e[1]
                        }), {}),
                        h: eG
                    },
                    footnoteReference: {
                        t: eI(k),
                        i: t.HIGH,
                        l: e => ({
                            v: e[1],
                            B: `#${r.slugify(e[1])}`
                        }),
                        h: (e, r, t) => q("a", {
                            key: t.k,
                            href: eN(e.B)
                        }, q("sup", {
                            key: t.k
                        }, e.v))
                    },
                    gfmTask: {
                        t: eI(T),
                        i: t.HIGH,
                        l: e => ({
                            R: "x" === e[1].toLowerCase()
                        }),
                        h: (e, r, t) => q("input", {
                            checked: e.R,
                            key: t.k,
                            readOnly: !0,
                            type: "checkbox"
                        })
                    },
                    heading: {
                        t: eR(r.enforceAtxHeadings ? S : j),
                        i: t.HIGH,
                        l: (e, t, n) => ({
                            v: eF(t, e[2], n),
                            T: r.slugify(e[2]),
                            C: e[1].length
                        }),
                        h: (e, r, t) => q(`h${e.C}`, {
                            id: e.T,
                            key: t.k
                        }, r(e.v, t))
                    },
                    headingSetext: {
                        t: eR(w),
                        i: t.MAX,
                        l: (e, r, t) => ({
                            v: eF(r, e[1], t),
                            C: "=" === e[2] ? 1 : 2,
                            type: "heading"
                        })
                    },
                    htmlComment: {
                        t: eB(A),
                        i: t.HIGH,
                        l: () => ({}),
                        h: eG
                    },
                    image: {
                        t: eM(eT),
                        i: t.HIGH,
                        l: e => ({
                            D: e[1],
                            B: eP(e[2]),
                            F: e[3]
                        }),
                        h: (e, r, t) => q("img", {
                            key: t.k,
                            alt: e.D || void 0,
                            title: e.F || void 0,
                            src: eN(e.B)
                        })
                    },
                    link: {
                        t: eI(eE),
                        i: t.LOW,
                        l: (e, r, t) => {
                            var n;
                            let a, o, i;
                            return {
                                v: (n = e[1], a = t._ || !1, o = t.u || !1, t._ = !1, t.u = !0, i = r(n, t), t._ = a, t.u = o, i),
                                B: eP(e[2]),
                                F: e[3]
                            }
                        },
                        h: (e, r, t) => q("a", {
                            key: t.k,
                            href: eN(e.B),
                            title: e.F
                        }, r(e.v, t))
                    },
                    linkAngleBraceStyleDetector: {
                        t: eI(H),
                        i: t.MAX,
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
                        t: (e, r) => r.N ? null : eI(R)(e, r),
                        i: t.MAX,
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
                        t: eI(B),
                        i: t.MAX,
                        l(e) {
                            let r = e[1],
                                t = e[1];
                            return c.test(t) || (t = "mailto:" + t), {
                                v: [{
                                    v: r.replace("mailto:", ""),
                                    type: "text"
                                }],
                                B: t,
                                type: "link"
                            }
                        }
                    },
                    orderedList: ek(q, 1),
                    unorderedList: ek(q, 2),
                    newlineCoalescer: {
                        t: eR(m),
                        i: t.LOW,
                        l: eU,
                        h: () => "\n"
                    },
                    paragraph: {
                        t: eH,
                        i: t.LOW,
                        l: e$,
                        h: (e, r, t) => q("p", {
                            key: t.k
                        }, r(e.v, t))
                    },
                    ref: {
                        t: eI(F),
                        i: t.MAX,
                        l: e => (eo[e[1]] = {
                            B: e[2],
                            F: e[4]
                        }, {}),
                        h: eG
                    },
                    refImage: {
                        t: eM(D),
                        i: t.MAX,
                        l: e => ({
                            D: e[1] || void 0,
                            P: e[2]
                        }),
                        h: (e, r, t) => q("img", {
                            key: t.k,
                            alt: e.D,
                            src: eN(eo[e.P].B),
                            title: eo[e.P].F
                        })
                    },
                    refLink: {
                        t: eI($),
                        i: t.MAX,
                        l: (e, r, t) => ({
                            v: r(e[1], t),
                            Z: r(e[0].replace(U, "\\$1"), t),
                            P: e[2]
                        }),
                        h: (e, r, t) => eo[e.P] ? q("a", {
                            key: t.k,
                            href: eN(eo[e.P].B),
                            title: eo[e.P].F
                        }, r(e.v, t)) : q("span", {
                            key: t.k
                        }, r(e.Z, t))
                    },
                    table: {
                        t: eR(P),
                        i: t.HIGH,
                        l: eA,
                        h: (e, r, t) => q("table", {
                            key: t.k
                        }, q("thead", null, q("tr", null, e.L.map(function(n, a) {
                            return q("th", {
                                key: a,
                                style: eC(e, a)
                            }, r(n, t))
                        }))), q("tbody", null, e.A.map(function(n, a) {
                            return q("tr", {
                                key: a
                            }, n.map(function(n, a) {
                                return q("td", {
                                    key: a,
                                    style: eC(e, a)
                                }, r(n, t))
                            }))
                        })))
                    },
                    tableSeparator: {
                        t: function(e, r) {
                            return r.$ ? (r._ = !0, W.exec(e)) : null
                        },
                        i: t.HIGH,
                        l: function() {
                            return {
                                type: "tableSeparator"
                            }
                        },
                        h: () => " | "
                    },
                    text: {
                        t: eB(et),
                        i: t.MIN,
                        l: e => ({
                            v: e[0].replace(L, (e, t) => r.namedCodesToUnicode[t] ? r.namedCodesToUnicode[t] : e)
                        }),
                        h: e => e.v
                    },
                    textBolded: {
                        t: eM(Z),
                        i: t.MED,
                        l: (e, r, t) => ({
                            v: r(e[2], t)
                        }),
                        h: (e, r, t) => q("strong", {
                            key: t.k
                        }, r(e.v, t))
                    },
                    textEmphasized: {
                        t: eM(J),
                        i: t.LOW,
                        l: (e, r, t) => ({
                            v: r(e[2], t)
                        }),
                        h: (e, r, t) => q("em", {
                            key: t.k
                        }, r(e.v, t))
                    },
                    textEscaped: {
                        t: eM(er),
                        i: t.HIGH,
                        l: e => ({
                            v: e[1],
                            type: "text"
                        })
                    },
                    textMarked: {
                        t: eM(Q),
                        i: t.LOW,
                        l: e$,
                        h: (e, r, t) => q("mark", {
                            key: t.k
                        }, r(e.v, t))
                    },
                    textStrikethroughed: {
                        t: eM(ee),
                        i: t.LOW,
                        l: e$,
                        h: (e, r, t) => q("del", {
                            key: t.k
                        }, r(e.v, t))
                    }
                };
            !0 !== r.disableParsingRawHTML && (ei.htmlBlock = {
                t: eB(O),
                i: t.HIGH,
                l(e, r, t) {
                    let [, n] = e[3].match(ea), a = RegExp(`^${n}`, "gm"), o = e[3].replace(a, ""), i = eS.some(e => e.test(o)) ? eD : eF, l = e[1].toLowerCase(), u = -1 !== s.indexOf(l);
                    t.N = t.N || "a" === l;
                    let c = u ? e[3] : i(r, o, t);
                    return t.N = !1, {
                        O: V(e[2]),
                        v: c,
                        G: u,
                        H: u ? l : e[1]
                    }
                },
                h: (e, r, t) => q(e.H, a({
                    key: t.k
                }, e.O), e.G ? e.v : r(e.v, t))
            }, ei.htmlSelfClosing = {
                t: eB(I),
                i: t.HIGH,
                l: e => ({
                    O: V(e[2] || ""),
                    H: e[1]
                }),
                h: (e, r, t) => q(e.H, a({}, e.O, {
                    key: t.k
                }))
            });
            let el = ((p = Object.keys(ei)).sort(function(e, r) {
                    let t = ei[e].i,
                        n = ei[r].i;
                    return t !== n ? t - n : e < r ? -1 : 1
                }), function(e, r) {
                    return function e(r, t) {
                        let n = [],
                            a = "";
                        for (; r;) {
                            let o = 0;
                            for (; o < p.length;) {
                                let i = p[o],
                                    l = ei[i],
                                    s = l.t(r, t, a);
                                if (s) {
                                    let o = s[0];
                                    r = r.substring(o.length);
                                    let u = l.l(s, e, t);
                                    null == u.type && (u.type = i), n.push(u), a = o;
                                    break
                                }
                                o++
                            }
                        }
                        return n
                    }(e.replace(b, "\n").replace(E, "").replace(z, "    "), r)
                }),
                es = (o = function(e, r, t) {
                    return ei[e.type].h(e, r, t)
                }, function e(r, t = {}) {
                    if (Array.isArray(r)) {
                        let n = t.k,
                            a = [],
                            o = !1;
                        for (let n = 0; n < r.length; n++) {
                            t.k = n;
                            let i = e(r[n], t),
                                l = "string" == typeof i;
                            l && o ? a[a.length - 1] += i : null !== i && a.push(i), o = l
                        }
                        return t.k = n, a
                    }
                    return o(r, e, t)
                }),
                eu = K(e);
            return Y.length ? q("div", null, eu, q("footer", {
                key: "footer"
            }, Y.map(function(e) {
                return q("div", {
                    id: r.slugify(e.j),
                    key: e.j
                }, e.j, es(el(e.I, {
                    _: !0
                })))
            }))) : eu
        }(r, p), X)
    }])
}, 817916, e => {
    "use strict";
    var r = e.i(853712);
    let t = ({
        id: e,
        className: t
    }) => (0, r.jsx)("div", {
        id: e,
        "data-anchor-item": !0,
        className: t,
        style: {
            marginTop: "-120px",
            paddingTop: "120px"
        }
    });
    e.s(["default", 0, ({
        anchorID: e
    }) => (0, r.jsx)(t, {
        id: e ?? ""
    })], 817916)
}, 531751, (e, r, t) => {
    r.exports = e.r(622280)(e.r(818408), "DataView")
}, 31337, (e, r, t) => {
    r.exports = e.r(622280)(e.r(818408), "Promise")
}, 511524, (e, r, t) => {
    r.exports = e.r(622280)(e.r(818408), "Set")
}, 626568, (e, r, t) => {
    var n = e.r(531751),
        a = e.r(74136),
        o = e.r(31337),
        i = e.r(511524),
        l = e.r(115942),
        s = e.r(423748),
        u = e.r(395331),
        c = "[object Map]",
        p = "[object Promise]",
        f = "[object Set]",
        d = "[object WeakMap]",
        g = "[object DataView]",
        h = u(n),
        v = u(a),
        y = u(o),
        x = u(i),
        m = u(l),
        b = s;
    (n && b(new n(new ArrayBuffer(1))) != g || a && b(new a) != c || o && b(o.resolve()) != p || i && b(new i) != f || l && b(new l) != d) && (b = function(e) {
        var r = s(e),
            t = "[object Object]" == r ? e.constructor : void 0,
            n = t ? u(t) : "";
        if (n) switch (n) {
            case h:
                return g;
            case v:
                return c;
            case y:
                return p;
            case x:
                return f;
            case m:
                return d
        }
        return r
    }), r.exports = b
}, 820686, (e, r, t) => {
    var n = e.r(603114),
        a = e.r(626568),
        o = e.r(417288),
        i = e.r(272098),
        l = e.r(707850),
        s = e.r(385370),
        u = e.r(570795),
        c = e.r(713376),
        p = Object.prototype.hasOwnProperty;
    r.exports = function(e) {
        if (null == e) return !0;
        if (l(e) && (i(e) || "string" == typeof e || "function" == typeof e.splice || s(e) || c(e) || o(e))) return !e.length;
        var r = a(e);
        if ("[object Map]" == r || "[object Set]" == r) return !e.size;
        if (u(e)) return !n(e).length;
        for (var t in e)
            if (p.call(e, t)) return !1;
        return !0
    }
}, 150987, (e, r, t) => {
    r.exports = function(e) {
        return null == e
    }
}, 829150, 434438, e => {
    "use strict";
    var r = e.i(551779);
    let t = r.LanguageMapIETFLanguageTag[r.LanguageMap.en],
        n = e => Object.keys(r.LanguageMapIETFLanguageTag).find(t => r.LanguageMapIETFLanguageTag[t] === e),
        a = (e = r.LanguageMap.en) => r.LanguageMapIETFLanguageTag[e] || t;
    e.s(["FALLBACK_LANGUAGE", 0, t, "default", 0, a, "getLanguageKey", 0, n], 434438);
    var o = e.i(820686),
        i = e.i(150987);
    e.s(["default", 0, (e, l, s) => {
        let {
            locale: u,
            ...c
        } = l, p = e;
        return s && p ? ((e => {
            let t;
            try {
                t = new URL(e)
            } catch (e) {
                return !1
            }
            return a(t.pathname.split("/")[1]) !== r.LanguageMapIETFLanguageTag.en
        })(p) || u === t || (p = ((e, r) => {
            let t;
            if (!r) return e;
            try {
                t = new URL(e)
            } catch (r) {
                return e
            }
            let n = t.pathname.split("/");
            return n.splice(1, 0, r), t.pathname = n.join("/"), t.toString()
        })(p, n(u))), ((e, r) => {
            let t;
            if ((0, o.default)(r)) return e;
            let n = -1 === (t = e.indexOf("?")) ? {} : e.slice(t + 1).split("&").reduce((e, r) => {
                    let [t, n] = r.split("=");
                    return t && (e[decodeURIComponent(t)] = decodeURIComponent(n || "")), e
                }, {}),
                a = {};
            Object.entries(r).forEach(([e, r]) => {
                n.hasOwnProperty(e) || (0, i.default)(r) || (a[e] = r)
            });
            let l = new URLSearchParams(a).toString();
            return e.includes("?") ? `${e}&${l}` : `${e}?${l}`
        })(p, c)) : p
    }], 829150)
}, 648313, (e, r, t) => {
    var n = e.r(423748),
        a = e.r(819674);
    r.exports = function(e) {
        return a(e) && "[object Arguments]" == n(e)
    }
}, 417288, (e, r, t) => {
    var n = e.r(648313),
        a = e.r(819674),
        o = Object.prototype,
        i = o.hasOwnProperty,
        l = o.propertyIsEnumerable;
    r.exports = n(function() {
        return arguments
    }()) ? n : function(e) {
        return a(e) && i.call(e, "callee") && !l.call(e, "callee")
    }
}, 570795, (e, r, t) => {
    var n = Object.prototype;
    r.exports = function(e) {
        var r = e && e.constructor;
        return e === ("function" == typeof r && r.prototype || n)
    }
}, 991915, (e, r, t) => {
    r.exports = function(e, r) {
        return function(t) {
            return e(r(t))
        }
    }
}, 642918, (e, r, t) => {
    r.exports = e.r(991915)(Object.keys, Object)
}, 603114, (e, r, t) => {
    var n = e.r(570795),
        a = e.r(642918),
        o = Object.prototype.hasOwnProperty;
    r.exports = function(e) {
        if (!n(e)) return a(e);
        var r = [];
        for (var t in Object(e)) o.call(e, t) && "constructor" != t && r.push(t);
        return r
    }
}, 145373, (e, r, t) => {
    r.exports = function(e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 0x1fffffffffffff
    }
}, 707850, (e, r, t) => {
    var n = e.r(363883),
        a = e.r(145373);
    r.exports = function(e) {
        return null != e && a(e.length) && !n(e)
    }
}, 124019, (e, r, t) => {
    r.exports = function() {
        return !1
    }
}, 385370, (e, r, t) => {
    var n = e.r(818408),
        a = e.r(124019),
        o = t && !t.nodeType && t,
        i = o && r && !r.nodeType && r,
        l = i && i.exports === o ? n.Buffer : void 0;
    r.exports = (l ? l.isBuffer : void 0) || a
}, 719575, (e, r, t) => {
    var n = e.r(423748),
        a = e.r(145373),
        o = e.r(819674),
        i = {};
    i["[object Float32Array]"] = i["[object Float64Array]"] = i["[object Int8Array]"] = i["[object Int16Array]"] = i["[object Int32Array]"] = i["[object Uint8Array]"] = i["[object Uint8ClampedArray]"] = i["[object Uint16Array]"] = i["[object Uint32Array]"] = !0, i["[object Arguments]"] = i["[object Array]"] = i["[object ArrayBuffer]"] = i["[object Boolean]"] = i["[object DataView]"] = i["[object Date]"] = i["[object Error]"] = i["[object Function]"] = i["[object Map]"] = i["[object Number]"] = i["[object Object]"] = i["[object RegExp]"] = i["[object Set]"] = i["[object String]"] = i["[object WeakMap]"] = !1, r.exports = function(e) {
        return o(e) && a(e.length) && !!i[n(e)]
    }
}, 632900, (e, r, t) => {
    r.exports = function(e) {
        return function(r) {
            return e(r)
        }
    }
}, 845361, (e, r, t) => {
    var n = e.r(472668),
        a = t && !t.nodeType && t,
        o = a && r && !r.nodeType && r,
        i = o && o.exports === a && n.process;
    r.exports = function() {
        try {
            var e = o && o.require && o.require("util").types;
            if (e) return e;
            return i && i.binding && i.binding("util")
        } catch (e) {}
    }()
}, 713376, (e, r, t) => {
    var n = e.r(719575),
        a = e.r(632900),
        o = e.r(845361),
        i = o && o.isTypedArray;
    r.exports = i ? a(i) : n
}, 551779, e => {
    "use strict";
    var r, t, n = ((r = {}).en = "en", r.de = "de_de", r.ja = "ja_jp", r.fr = "fr_fr", r.pt = "pt_br", r.cn = "zh_cn", r.es = "es_es", r.ru = "ru_ru", r.kr = "ko_kr", r),
        a = ((t = {}).en = "en-US", t.de = "de-DE", t.ja = "ja-JP", t.fr = "fr-FR", t.pt = "pt-BR", t.cn = "zh-CN", t.es = "es-ES", t.ru = "ru-RU", t.kr = "ko-KR", t);
    e.s(["LanguageMap", () => n, "LanguageMapIETFLanguageTag", () => a])
}, 115942, (e, r, t) => {
    r.exports = e.r(622280)(e.r(818408), "WeakMap")
}, 201763, e => {
    "use strict";
    var r = e.i(853712),
        t = e.i(722978),
        n = e.i(993358);
    e.s(["default", 0, ({
        keyFigures: e,
        nested: a = !1,
        theme: o = "light"
    }) => {
        let i = (0, t.clsx)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
            "py-16": !a
        });
        return (0, r.jsx)("div", {
            className: "dark" === o ? "bg-black text-white" : "",
            children: (0, r.jsx)("div", {
                className: i,
                children: e?.map((i, l) => {
                    let {
                        value: s,
                        label: u
                    } = i, c = (0, t.clsx)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                        "backdrop-blur-lg": a && "dark" !== o,
                        "bg-gray-900 dark:bg-black": "dark" === o,
                        "bg-gray-100 dark:bg-gray-900 text-gray-800": !a && "dark" !== o,
                        "xl:col-span-3": e?.length === 4
                    });
                    return s?.type === "text" ? (0, r.jsxs)("div", {
                        className: c,
                        children: [(0, r.jsx)("div", {
                            className: "loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center",
                            children: s.text
                        }), (0, r.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: u
                        })]
                    }, l) : u && s?.type === "icon" && !s.url ? (0, r.jsx)("div", {
                        className: c,
                        children: (0, r.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: u
                        })
                    }, l) : s?.type === "icon" && s.url ? (0, r.jsxs)("div", {
                        className: c,
                        children: [(0, r.jsx)("div", {
                            className: "flex min-w-[30%] shrink-0 gap-10 text-center lg:justify-center",
                            children: (0, r.jsx)(n.default, {
                                src: s.url,
                                alt: s.description,
                                width: 40,
                                height: 40
                            })
                        }), (0, r.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: u
                        })]
                    }, l) : null
                })
            })
        })
    }])
}, 115219, e => {
    "use strict";
    var r = e.i(853712),
        t = e.i(363737),
        n = e.i(436324),
        a = e.i(869324),
        o = e.i(537251);
    e.s(["useFormModal", 0, e => {
        let {
            extraFields: i
        } = (0, o.default)(), l = ({
            label: o,
            form: i
        }) => {
            let l = ((e, r) => {
                let t = e?.find(e => r.title === e?.form?.title)?.customSelections || "";
                try {
                    return JSON.parse(t)
                } catch (e) {
                    return null
                }
            })(e || [], i);
            if (l && i?.fields)
                for (let e of Object.keys(l)) {
                    let r = i.fields.findIndex(r => r.formFieldId === e);
                    if (r >= 0) {
                        let t = l[e];
                        null != t.isRequired && (i.fields[r].isRequired = l[e].isRequired), t.isHidden && i.fields.splice(r, 1)
                    }
                }
            return (0, r.jsx)(t.default, {
                actionLabel: o,
                onOpenChange: e => {
                    e && (0, a.default)({
                        properties: {
                            form_action: "presented",
                            form_id: i.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                            form_name: i.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                        }
                    })
                },
                children: e => (0, r.jsx)(t.default.Layout, {
                    modal: {
                        title: i.title,
                        description: i.description
                    },
                    children: i && (0, r.jsx)(n.FormBuilder, {
                        form: i,
                        close: e
                    })
                })
            })
        };
        return {
            renderModal: l,
            mapFormActions: e => e?.map(e => ({
                title: e.title,
                link: e.link ? {
                    href: e.link.linkReference?.href.current || "",
                    target: e.link.linkReference?.target || "_self"
                } : null,
                form: e.form ? {
                    form: e.form,
                    webinarFormParametersContent: e.webinarFormParametersContent,
                    extraFields: i,
                    renderModal: l
                } : null
            })),
            extraFields: i
        }
    }])
}, 185462, e => {
    "use strict";
    let r = e.i(201763).default;
    e.s(["default", 0, r])
}, 691156, e => {
    "use strict";
    var r = e.i(853712),
        t = e.i(107579),
        n = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        title: a,
        isExpanded: o = !1,
        blockKey: i
    }) => {
        let [l, s] = (0, t.useState)(o), u = () => {
            s(!l)
        }, c = (0, n.default)("accordion-content [&_p]:mb-4 [&_ul]:mb-4", {
            "transition ease-in-out opacity-100 h-auto w-5/6 pb-4 loco-text-body text-gray-800 dark:text-gray-100": l,
            "transition ease-in-out opacity-0 h-0 overflow-hidden": !l
        });
        return (0, r.jsxs)("div", {
            className: "border-b border-gray-200 dark:border-gray-800",
            children: [(0, r.jsx)("div", {
                onClick: u,
                onKeyDown: e => {
                    ("Enter" === e.key || " " === e.key) && u()
                },
                role: "button",
                tabIndex: 0,
                "aria-expanded": l,
                className: "cursor-pointer py-6",
                "data-link-location": `${i}-video-play`,
                "data-link-id": `${i}-accordion-toggle`,
                "data-link-type": "CTA",
                children: (0, r.jsxs)("div", {
                    className: "loco-text-body-lg-medium flex justify-between",
                    children: [(0, r.jsx)("h3", {
                        className: "w-11/12 text-gray-800 dark:text-gray-200",
                        children: a
                    }), (0, r.jsx)("span", {
                        className: "inline-block text-gray-700 dark:text-gray-300",
                        children: l ? "-" : "+"
                    })]
                })
            }), (0, r.jsx)("div", {
                className: c,
                "aria-hidden": !l,
                children: e
            })]
        })
    }], 691156)
}, 522392, (e, r, t) => {
    var n = e.r(115942);
    r.exports = n && new n
}, 199268, (e, r, t) => {
    var n = e.r(713870),
        a = e.r(522392);
    r.exports = a ? function(e, r) {
        return a.set(e, r), e
    } : n
}, 116947, (e, r, t) => {
    var n = e.r(791606),
        a = Object.create;
    r.exports = function() {
        function e() {}
        return function(r) {
            if (!n(r)) return {};
            if (a) return a(r);
            e.prototype = r;
            var t = new e;
            return e.prototype = void 0, t
        }
    }()
}, 966132, (e, r, t) => {
    var n = e.r(116947),
        a = e.r(791606);
    r.exports = function(e) {
        return function() {
            var r = arguments;
            switch (r.length) {
                case 0:
                    return new e;
                case 1:
                    return new e(r[0]);
                case 2:
                    return new e(r[0], r[1]);
                case 3:
                    return new e(r[0], r[1], r[2]);
                case 4:
                    return new e(r[0], r[1], r[2], r[3]);
                case 5:
                    return new e(r[0], r[1], r[2], r[3], r[4]);
                case 6:
                    return new e(r[0], r[1], r[2], r[3], r[4], r[5]);
                case 7:
                    return new e(r[0], r[1], r[2], r[3], r[4], r[5], r[6])
            }
            var t = n(e.prototype),
                o = e.apply(t, r);
            return a(o) ? o : t
        }
    }
}, 93916, (e, r, t) => {
    var n = e.r(966132),
        a = e.r(818408);
    r.exports = function(e, r, t) {
        var o = 1 & r,
            i = n(e);
        return function r() {
            return (this && this !== a && this instanceof r ? i : e).apply(o ? t : this, arguments)
        }
    }
}, 829574, (e, r, t) => {
    var n = Math.max;
    r.exports = function(e, r, t, a) {
        for (var o = -1, i = e.length, l = t.length, s = -1, u = r.length, c = n(i - l, 0), p = Array(u + c), f = !a; ++s < u;) p[s] = r[s];
        for (; ++o < l;)(f || o < i) && (p[t[o]] = e[o]);
        for (; c--;) p[s++] = e[o++];
        return p
    }
}, 487161, (e, r, t) => {
    var n = Math.max;
    r.exports = function(e, r, t, a) {
        for (var o = -1, i = e.length, l = -1, s = t.length, u = -1, c = r.length, p = n(i - s, 0), f = Array(p + c), d = !a; ++o < p;) f[o] = e[o];
        for (var g = o; ++u < c;) f[g + u] = r[u];
        for (; ++l < s;)(d || o < i) && (f[g + t[l]] = e[o++]);
        return f
    }
}, 234948, (e, r, t) => {
    r.exports = function(e, r) {
        for (var t = e.length, n = 0; t--;) e[t] === r && ++n;
        return n
    }
}, 579004, (e, r, t) => {
    r.exports = function() {}
}, 292596, (e, r, t) => {
    function n(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 0xffffffff, this.__views__ = []
    }
    n.prototype = e.r(116947)(e.r(579004).prototype), n.prototype.constructor = n, r.exports = n
}, 523169, (e, r, t) => {
    r.exports = function() {}
}, 930935, (e, r, t) => {
    var n = e.r(522392),
        a = e.r(523169);
    r.exports = n ? function(e) {
        return n.get(e)
    } : a
}, 399945, (e, r, t) => {
    r.exports = {}
}, 388604, (e, r, t) => {
    var n = e.r(399945),
        a = Object.prototype.hasOwnProperty;
    r.exports = function(e) {
        for (var r = e.name + "", t = n[r], o = a.call(n, r) ? t.length : 0; o--;) {
            var i = t[o],
                l = i.func;
            if (null == l || l == e) return i.name
        }
        return r
    }
}, 69792, (e, r, t) => {
    function n(e, r) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!r, this.__index__ = 0, this.__values__ = void 0
    }
    n.prototype = e.r(116947)(e.r(579004).prototype), n.prototype.constructor = n, r.exports = n
}, 133442, (e, r, t) => {
    r.exports = function(e, r) {
        var t = -1,
            n = e.length;
        for (r || (r = Array(n)); ++t < n;) r[t] = e[t];
        return r
    }
}, 485302, (e, r, t) => {
    var n = e.r(292596),
        a = e.r(69792),
        o = e.r(133442);
    r.exports = function(e) {
        if (e instanceof n) return e.clone();
        var r = new a(e.__wrapped__, e.__chain__);
        return r.__actions__ = o(e.__actions__), r.__index__ = e.__index__, r.__values__ = e.__values__, r
    }
}, 92835, (e, r, t) => {
    var n = e.r(292596),
        a = e.r(69792),
        o = e.r(579004),
        i = e.r(272098),
        l = e.r(819674),
        s = e.r(485302),
        u = Object.prototype.hasOwnProperty;

    function c(e) {
        if (l(e) && !i(e) && !(e instanceof n)) {
            if (e instanceof a) return e;
            if (u.call(e, "__wrapped__")) return s(e)
        }
        return new a(e)
    }
    c.prototype = o.prototype, c.prototype.constructor = c, r.exports = c
}, 169842, (e, r, t) => {
    var n = e.r(292596),
        a = e.r(930935),
        o = e.r(388604),
        i = e.r(92835);
    r.exports = function(e) {
        var r = o(e),
            t = i[r];
        if ("function" != typeof t || !(r in n.prototype)) return !1;
        if (e === t) return !0;
        var l = a(t);
        return !!l && e === l[0]
    }
}, 165865, (e, r, t) => {
    var n = e.r(199268);
    r.exports = e.r(587094)(n)
}, 968428, (e, r, t) => {
    var n = /\{\n\/\* \[wrapped with (.+)\] \*/,
        a = /,? & /;
    r.exports = function(e) {
        var r = e.match(n);
        return r ? r[1].split(a) : []
    }
}, 853936, (e, r, t) => {
    var n = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
    r.exports = function(e, r) {
        var t = r.length;
        if (!t) return e;
        var a = t - 1;
        return r[a] = (t > 1 ? "& " : "") + r[a], r = r.join(t > 2 ? ", " : " "), e.replace(n, "{\n/* [wrapped with " + r + "] */\n")
    }
}, 239372, (e, r, t) => {
    r.exports = function(e, r) {
        for (var t = -1, n = null == e ? 0 : e.length; ++t < n && !1 !== r(e[t], t, e););
        return e
    }
}, 33245, (e, r, t) => {
    r.exports = function(e, r, t, n) {
        for (var a = e.length, o = t + (n ? 1 : -1); n ? o-- : ++o < a;)
            if (r(e[o], o, e)) return o;
        return -1
    }
}, 831623, (e, r, t) => {
    r.exports = function(e) {
        return e != e
    }
}, 279656, (e, r, t) => {
    r.exports = function(e, r, t) {
        for (var n = t - 1, a = e.length; ++n < a;)
            if (e[n] === r) return n;
        return -1
    }
}, 947235, (e, r, t) => {
    var n = e.r(33245),
        a = e.r(831623),
        o = e.r(279656);
    r.exports = function(e, r, t) {
        return r == r ? o(e, r, t) : n(e, a, t)
    }
}, 607873, (e, r, t) => {
    var n = e.r(947235);
    r.exports = function(e, r) {
        return !!(null == e ? 0 : e.length) && n(e, r, 0) > -1
    }
}, 379828, (e, r, t) => {
    var n = e.r(239372),
        a = e.r(607873),
        o = [
            ["ary", 128],
            ["bind", 1],
            ["bindKey", 2],
            ["curry", 8],
            ["curryRight", 16],
            ["flip", 512],
            ["partial", 32],
            ["partialRight", 64],
            ["rearg", 256]
        ];
    r.exports = function(e, r) {
        return n(o, function(t) {
            var n = "_." + t[0];
            r & t[1] && !a(e, n) && e.push(n)
        }), e.sort()
    }
}, 350163, (e, r, t) => {
    var n = e.r(968428),
        a = e.r(853936),
        o = e.r(989463),
        i = e.r(379828);
    r.exports = function(e, r, t) {
        var l = r + "";
        return o(e, a(l, i(n(l), t)))
    }
}, 831459, (e, r, t) => {
    var n = e.r(169842),
        a = e.r(165865),
        o = e.r(350163);
    r.exports = function(e, r, t, i, l, s, u, c, p, f) {
        var d = 8 & r;
        r |= d ? 32 : 64, 4 & (r &= ~(d ? 64 : 32)) || (r &= -4);
        var g = [e, r, l, d ? s : void 0, d ? u : void 0, d ? void 0 : s, d ? void 0 : u, c, p, f],
            h = t.apply(void 0, g);
        return n(e) && a(h, g), h.placeholder = i, o(h, e, r)
    }
}, 9914, (e, r, t) => {
    r.exports = function(e) {
        return e.placeholder
    }
}, 334880, (e, r, t) => {
    var n = e.r(133442),
        a = e.r(729582),
        o = Math.min;
    r.exports = function(e, r) {
        for (var t = e.length, i = o(r.length, t), l = n(e); i--;) {
            var s = r[i];
            e[i] = a(s, t) ? l[s] : void 0
        }
        return e
    }
}, 932357, (e, r, t) => {
    var n = "__lodash_placeholder__";
    r.exports = function(e, r) {
        for (var t = -1, a = e.length, o = 0, i = []; ++t < a;) {
            var l = e[t];
            (l === r || l === n) && (e[t] = n, i[o++] = t)
        }
        return i
    }
}, 329684, (e, r, t) => {
    var n = e.r(829574),
        a = e.r(487161),
        o = e.r(234948),
        i = e.r(966132),
        l = e.r(831459),
        s = e.r(9914),
        u = e.r(334880),
        c = e.r(932357),
        p = e.r(818408);
    r.exports = function e(r, t, f, d, g, h, v, y, x, m) {
        var b = 128 & t,
            _ = 1 & t,
            k = 2 & t,
            E = 24 & t,
            T = 512 & t,
            j = k ? void 0 : i(r);

        function S() {
            for (var w = arguments.length, O = Array(w), L = w; L--;) O[L] = arguments[L];
            if (E) var A = s(S),
                C = o(O, A);
            if (d && (O = n(O, d, g, E)), h && (O = a(O, h, v, E)), w -= C, E && w < m) {
                var I = c(O, A);
                return l(r, t, e, S.placeholder, f, O, I, y, x, m - w)
            }
            var M = _ ? f : this,
                R = k ? M[r] : r;
            return w = O.length, y ? O = u(O, y) : T && w > 1 && O.reverse(), b && x < w && (O.length = x), this && this !== p && this instanceof S && (R = j || i(R)), R.apply(M, O)
        }
        return S
    }
}, 668559, (e, r, t) => {
    var n = e.r(204653),
        a = e.r(966132),
        o = e.r(329684),
        i = e.r(831459),
        l = e.r(9914),
        s = e.r(932357),
        u = e.r(818408);
    r.exports = function(e, r, t) {
        var c = a(e);

        function p() {
            for (var a = arguments.length, f = Array(a), d = a, g = l(p); d--;) f[d] = arguments[d];
            var h = a < 3 && f[0] !== g && f[a - 1] !== g ? [] : s(f, g);
            return (a -= h.length) < t ? i(e, r, o, p.placeholder, void 0, f, h, void 0, void 0, t - a) : n(this && this !== u && this instanceof p ? c : e, this, f)
        }
        return p
    }
}, 536728, (e, r, t) => {
    var n = e.r(204653),
        a = e.r(966132),
        o = e.r(818408);
    r.exports = function(e, r, t, i) {
        var l = 1 & r,
            s = a(e);
        return function r() {
            for (var a = -1, u = arguments.length, c = -1, p = i.length, f = Array(p + u); ++c < p;) f[c] = i[c];
            for (; u--;) f[c++] = arguments[++a];
            return n(this && this !== o && this instanceof r ? s : e, l ? t : this, f)
        }
    }
}, 561274, (e, r, t) => {
    var n = e.r(829574),
        a = e.r(487161),
        o = e.r(932357),
        i = "__lodash_placeholder__",
        l = Math.min;
    r.exports = function(e, r) {
        var t = e[1],
            s = r[1],
            u = t | s,
            c = u < 131,
            p = 128 == s && 8 == t || 128 == s && 256 == t && e[7].length <= r[8] || 384 == s && r[7].length <= r[8] && 8 == t;
        if (!(c || p)) return e;
        1 & s && (e[2] = r[2], u |= 1 & t ? 0 : 4);
        var f = r[3];
        if (f) {
            var d = e[3];
            e[3] = d ? n(d, f, r[4]) : f, e[4] = d ? o(e[3], i) : r[4]
        }
        return (f = r[5]) && (d = e[5], e[5] = d ? a(d, f, r[6]) : f, e[6] = d ? o(e[5], i) : r[6]), (f = r[7]) && (e[7] = f), 128 & s && (e[8] = null == e[8] ? r[8] : l(e[8], r[8])), null == e[9] && (e[9] = r[9]), e[0] = r[0], e[1] = u, e
    }
}, 893912, (e, r, t) => {
    var n = /\s/;
    r.exports = function(e) {
        for (var r = e.length; r-- && n.test(e.charAt(r)););
        return r
    }
}, 386716, (e, r, t) => {
    var n = e.r(893912),
        a = /^\s+/;
    r.exports = function(e) {
        return e ? e.slice(0, n(e) + 1).replace(a, "") : e
    }
}, 394370, (e, r, t) => {
    var n = e.r(386716),
        a = e.r(791606),
        o = e.r(248664),
        i = 0 / 0,
        l = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        c = parseInt;
    r.exports = function(e) {
        if ("number" == typeof e) return e;
        if (o(e)) return i;
        if (a(e)) {
            var r = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = a(r) ? r + "" : r
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = n(e);
        var t = s.test(e);
        return t || u.test(e) ? c(e.slice(2), t ? 2 : 8) : l.test(e) ? i : +e
    }
}, 389781, (e, r, t) => {
    var n = e.r(394370),
        a = 1 / 0;
    r.exports = function(e) {
        return e ? (e = n(e)) === a || e === -a ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
    }
}, 697125, (e, r, t) => {
    var n = e.r(389781);
    r.exports = function(e) {
        var r = n(e),
            t = r % 1;
        return r == r ? t ? r - t : r : 0
    }
}, 503992, (e, r, t) => {
    var n = e.r(199268),
        a = e.r(93916),
        o = e.r(668559),
        i = e.r(329684),
        l = e.r(536728),
        s = e.r(930935),
        u = e.r(561274),
        c = e.r(165865),
        p = e.r(350163),
        f = e.r(697125),
        d = Math.max;
    r.exports = function(e, r, t, g, h, v, y, x) {
        var m = 2 & r;
        if (!m && "function" != typeof e) throw TypeError("Expected a function");
        var b = g ? g.length : 0;
        if (b || (r &= -97, g = h = void 0), y = void 0 === y ? y : d(f(y), 0), x = void 0 === x ? x : f(x), b -= h ? h.length : 0, 64 & r) {
            var _ = g,
                k = h;
            g = h = void 0
        }
        var E = m ? void 0 : s(e),
            T = [e, r, t, g, h, _, k, v, y, x];
        if (E && u(T, E), e = T[0], r = T[1], t = T[2], g = T[3], h = T[4], (x = T[9] = void 0 === T[9] ? m ? 0 : e.length : d(T[9] - b, 0)) || !(24 & r) || (r &= -25), r && 1 != r) j = 8 == r || 16 == r ? o(e, r, x) : 32 != r && 33 != r || h.length ? i.apply(void 0, T) : l(e, r, t, g);
        else var j = a(e, r, t);
        return p((E ? n : c)(j, T), e, r)
    }
}, 821557, (e, r, t) => {
    var n = e.r(503992);

    function a(e, r, t) {
        var o = n(e, 16, void 0, void 0, void 0, void 0, void 0, r = t ? void 0 : r);
        return o.placeholder = a.placeholder, o
    }
    a.placeholder = {}, r.exports = a
}, 334666, (e, r, t) => {
    r.exports = function(e, r) {
        for (var t = -1, n = r.length, a = e.length; ++t < n;) e[a + t] = r[t];
        return e
    }
}, 825980, (e, r, t) => {
    var n = e.r(407667),
        a = e.r(417288),
        o = e.r(272098),
        i = n ? n.isConcatSpreadable : void 0;
    r.exports = function(e) {
        return o(e) || a(e) || !!(i && e && e[i])
    }
}, 777735, (e, r, t) => {
    var n = e.r(334666),
        a = e.r(825980);
    r.exports = function e(r, t, o, i, l) {
        var s = -1,
            u = r.length;
        for (o || (o = a), l || (l = []); ++s < u;) {
            var c = r[s];
            t > 0 && o(c) ? t > 1 ? e(c, t - 1, o, i, l) : n(l, c) : i || (l[l.length] = c)
        }
        return l
    }
}, 535677, (e, r, t) => {
    var n = e.r(777735);
    r.exports = function(e) {
        return (null == e ? 0 : e.length) ? n(e, 1) : []
    }
}, 191637, (e, r, t) => {
    var n = e.r(535677),
        a = e.r(376255),
        o = e.r(989463);
    r.exports = function(e) {
        return o(a(e, void 0, n), e + "")
    }
}, 426463, (e, r, t) => {
    var n = e.r(69792),
        a = e.r(191637),
        o = e.r(930935),
        i = e.r(388604),
        l = e.r(272098),
        s = e.r(169842);
    r.exports = function(e) {
        return a(function(r) {
            var t = r.length,
                a = t,
                u = n.prototype.thru;
            for (e && r.reverse(); a--;) {
                var c = r[a];
                if ("function" != typeof c) throw TypeError("Expected a function");
                if (u && !p && "wrapper" == i(c)) var p = new n([], !0)
            }
            for (a = p ? a : t; ++a < t;) {
                var f = i(c = r[a]),
                    d = "wrapper" == f ? o(c) : void 0;
                p = d && s(d[0]) && 424 == d[1] && !d[4].length && 1 == d[9] ? p[i(d[0])].apply(p, d[3]) : 1 == c.length && s(c) ? p[f]() : p.thru(c)
            }
            return function() {
                var e = arguments,
                    n = e[0];
                if (p && 1 == e.length && l(n)) return p.plant(n).value();
                for (var a = 0, o = t ? r[a].apply(this, e) : n; ++a < t;) o = r[a].call(this, o);
                return o
            }
        })
    }
}, 611239, (e, r, t) => {
    r.exports = e.r(426463)()
}, 775041, e => {
    "use strict";
    var r, t = e.i(107579),
        n = e.i(821557),
        a = e.i(611239);
    let o = {
        categories: [],
        subcategories: [],
        selectedSubcategory: null,
        selectedCategory: "",
        allSubcategoriesLabel: ""
    };
    var i = ((r = {}).SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY", r.SET_SUBCATEGORIES = "SET_SUBCATEGORIES", r.SET_SELECTED_SUBCATEGORY = "SET_SELECTED_SUBCATEGORY", r.SET_ALL_SUBCATEGORIES_LABEL = "SET_ALL_SUBCATEGORIES_LABEL", r.INIT_FROM_URL_PARAMS = "INIT_FROM_URL_PARAMS", r);
    let l = (0, t.createContext)([o, () => {}]);
    l.displayName = "FiltersContext";
    let s = (0, n.default)((e, r) => {
        let {
            type: t,
            payload: n
        } = r;
        switch (t) {
            case "SET_SELECTED_CATEGORY": {
                let r, {
                        categoryId: t,
                        subcategoryId: o
                    } = n,
                    {
                        subcategories: i,
                        allSubcategoriesLabel: l = "",
                        localizedAllSubcategoriesLabel: u
                    } = e.categories.find(({
                        _id: e
                    }) => e === t) || {},
                    c = i ?? [];
                if (void 0 === o) {
                    let e = c.find(e => e.makeDefaultLandingSubcategory);
                    r = e?._id ?? null
                } else r = o;
                return (0, a.default)(s({
                    type: "SET_SUBCATEGORIES",
                    payload: c
                }), s({
                    type: "SET_SELECTED_SUBCATEGORY",
                    payload: r
                }), s({
                    type: "SET_ALL_SUBCATEGORIES_LABEL",
                    payload: u ?? l
                }), e => ({
                    ...e,
                    selectedCategory: t
                }))(e)
            }
            case "SET_SUBCATEGORIES":
                return {
                    ...e, subcategories: n
                };
            case "SET_SELECTED_SUBCATEGORY":
                return {
                    ...e, selectedSubcategory: n
                };
            case "SET_ALL_SUBCATEGORIES_LABEL":
                return {
                    ...e, allSubcategoriesLabel: n
                };
            case "INIT_FROM_URL_PARAMS": {
                let {
                    categoryParam: r,
                    subcategoryParam: t
                } = n, a = e.categories.find(({
                    label: e
                }) => e?.toLowerCase() === r) || e.categories[0];
                if (!a) return e;
                let o = a.subcategories ?? [],
                    {
                        _id: i,
                        allSubcategoriesLabel: l = "",
                        localizedAllSubcategoriesLabel: s
                    } = a,
                    u = null;
                if (t) {
                    let e = o.find(e => e.label?.toLowerCase() === t);
                    u = e?._id ?? null
                }
                if (null === u) {
                    let e = o.find(e => e.makeDefaultLandingSubcategory);
                    u = e?._id ?? null
                }
                return {
                    ...e,
                    selectedCategory: i,
                    subcategories: o,
                    selectedSubcategory: u,
                    allSubcategoriesLabel: s ?? l
                }
            }
            default:
                return e
        }
    });
    e.s(["FiltersActionType", () => i, "FiltersContext", 0, l, "default", 0, e => (0, t.useReducer)(s, {
        ...o,
        ...e
    }, e => {
        let r = e.categories[0];
        if (!r) return e;
        let t = r.subcategories ?? [],
            {
                _id: n,
                allSubcategoriesLabel: a = "",
                localizedAllSubcategoriesLabel: o
            } = r,
            i = t.find(e => e.makeDefaultLandingSubcategory);
        return {
            ...e,
            selectedCategory: n,
            subcategories: t,
            selectedSubcategory: i?._id ?? null,
            allSubcategoriesLabel: o ?? a
        }
    })])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d079ec8c-0df1-5f57-ad88-249fd3ab54fb")
    } catch (e) {}
}();
//# debugId=d079ec8c-0df1-5f57-ad88-249fd3ab54fb