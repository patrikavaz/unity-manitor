(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 94918, e => {
    "use strict";
    var t = e.i(445734);
    let r = ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"],
        {
            Link: a,
            redirect: n,
            usePathname: l,
            useRouter: o
        } = (0, t.createNavigation)({
            locales: r,
            localePrefix: "as-needed",
            defaultLocale: "en"
        });
    e.s(["Link", 0, a, "locales", 0, r, "redirect", 0, n, "usePathname", 0, l, "useRouter", 0, o])
}, 877940, 194960, e => {
    "use strict";
    let t, r, a, n;
    var l, o = /\s+/g,
        i = (...e) => {
            var t;
            let r = [],
                a = e => {
                    if (!e && 0 !== e && 0n !== e) return;
                    if (Array.isArray(e)) {
                        for (let t = 0, r = e.length; t < r; t++) a(e[t]);
                        return
                    }
                    let t = typeof e;
                    if ("string" === t || "number" === t || "bigint" === t) {
                        if ("number" === t && e != e) return;
                        r.push(String(e))
                    } else if ("object" === t) {
                        let t = Object.keys(e);
                        for (let a = 0, n = t.length; a < n; a++) {
                            let n = t[a];
                            e[n] && r.push(n)
                        }
                    }
                };
            for (let t = 0, r = e.length; t < r; t++) {
                let r = e[t];
                null != r && a(r)
            }
            return r.length > 0 ? "string" == typeof(t = r.join(" ")) && t ? t.replace(o, " ").trim() : t : void 0
        },
        s = e => !1 === e ? "false" : !0 === e ? "true" : 0 === e ? "0" : e,
        d = e => {
            if (!e || "object" != typeof e) return !0;
            for (let t in e) return !1;
            return !0
        },
        u = (e, t) => {
            for (let r = 0; r < e.length; r++) {
                let a = e[r];
                Array.isArray(a) ? u(a, t) : a && t.push(a)
            }
        },
        c = (...e) => {
            let t = [];
            u(e, t);
            let r = [];
            for (let e = 0; e < t.length; e++) t[e] && r.push(t[e]);
            return r
        },
        f = (e, t) => {
            let r = {};
            for (let a in e) {
                let n = e[a];
                if (a in t) {
                    let e = t[a];
                    Array.isArray(n) || Array.isArray(e) ? r[a] = c(e, n) : "object" == typeof n && "object" == typeof e && n && e ? r[a] = f(n, e) : r[a] = e + " " + n
                } else r[a] = n
            }
            for (let a in t) a in e || (r[a] = t[a]);
            return r
        },
        p = {
            twMerge: !0,
            twMergeConfig: {}
        },
        m = (t = null, r = {}, a = !1, {
            get cachedTwMerge() {
                return t
            },
            set cachedTwMerge(value) {
                t = value
            },
            get cachedTwMergeConfig() {
                return r
            },
            set cachedTwMergeConfig(value) {
                r = value
            },
            get didTwMergeConfigChange() {
                return a
            },
            set didTwMergeConfigChange(value) {
                a = value
            },
            reset() {
                t = null, r = {}, a = !1
            }
        }),
        {
            createTV: g,
            tv: b
        } = (l = (...e) => t => i(e) || void 0, {
            tv: n = (e, t) => {
                let {
                    extend: r = null,
                    slots: a = {},
                    variants: n = {},
                    compoundVariants: o = [],
                    compoundSlots: u = [],
                    defaultVariants: g = {}
                } = e, b = {
                    ...p,
                    ...t
                }, h = r?.base ? i(r.base, e?.base) : e?.base, y = r?.variants && !d(r.variants) ? f(n, r.variants) : n, v = r?.defaultVariants && !d(r.defaultVariants) ? {
                    ...r.defaultVariants,
                    ...g
                } : g;
                d(b.twMergeConfig) || ((e, t) => {
                    if (e === t) return !0;
                    if (!e || !t) return !1;
                    let r = Object.keys(e),
                        a = Object.keys(t);
                    if (r.length !== a.length) return !1;
                    for (let n = 0; n < r.length; n++) {
                        let l = r[n];
                        if (!a.includes(l) || e[l] !== t[l]) return !1
                    }
                    return !0
                })(b.twMergeConfig, m.cachedTwMergeConfig) || (m.didTwMergeConfigChange = !0, m.cachedTwMergeConfig = b.twMergeConfig);
                let x = d(r?.slots),
                    w = d(a) ? {} : {
                        base: i(e?.base, x && r?.base),
                        ...a
                    },
                    E = x ? w : ((e, t) => {
                        for (let r in t)
                            if (Object.prototype.hasOwnProperty.call(t, r)) {
                                let a = t[r];
                                r in e ? e[r] = i(e[r], a) : e[r] = a
                            } return e
                    })({
                        ...r?.slots
                    }, d(w) ? {
                        base: e?.base
                    } : w),
                    j = d(r?.compoundVariants) ? o : c(r?.compoundVariants, o),
                    k = e => {
                        if (d(y) && d(a) && x) return l(h, e?.class, e?.className)(b);
                        if (j && !Array.isArray(j)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof j}`);
                        if (u && !Array.isArray(u)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof u}`);
                        let t = (t, r = y, a = null, n = null) => {
                                let l = r[t];
                                if (!l || d(l)) return null;
                                let o = n?.[t] ?? e?.[t];
                                if (null === o) return null;
                                let i = s(o);
                                if ("object" == typeof i) return null;
                                let u = v?.[t];
                                return l[(null != i ? i : s(u)) || "false"]
                            },
                            r = (e, r) => {
                                if (!y || "object" != typeof y) return null;
                                let a = [];
                                for (let n in y) {
                                    let l = t(n, y, e, r),
                                        o = "base" === e && "string" == typeof l ? l : l && l[e];
                                    o && a.push(o)
                                }
                                return a
                            },
                            n = {};
                        for (let t in e) {
                            let r = e[t];
                            void 0 !== r && (n[t] = r)
                        }
                        let o = (t, r) => {
                                let a = "object" == typeof e?.[t] ? {
                                    [t]: e[t]?.initial
                                } : {};
                                return {
                                    ...v,
                                    ...n,
                                    ...a,
                                    ...r
                                }
                            },
                            i = (e = [], t) => {
                                let r = [],
                                    a = e.length;
                                for (let n = 0; n < a; n++) {
                                    let {
                                        class: a,
                                        className: l,
                                        ...i
                                    } = e[n], s = !0, d = o(null, t);
                                    for (let e in i) {
                                        let t = i[e],
                                            r = d[e];
                                        if (Array.isArray(t)) {
                                            if (!t.includes(r)) {
                                                s = !1;
                                                break
                                            }
                                        } else {
                                            if ((null == t || !1 === t) && (null == r || !1 === r)) continue;
                                            if (r !== t) {
                                                s = !1;
                                                break
                                            }
                                        }
                                    }
                                    s && (a && r.push(a), l && r.push(l))
                                }
                                return r
                            },
                            c = e => {
                                let t = i(j, e);
                                if (!Array.isArray(t)) return t;
                                let r = {};
                                for (let e = 0; e < t.length; e++) {
                                    let a = t[e];
                                    if ("string" == typeof a) r.base = l(r.base, a)(b);
                                    else if ("object" == typeof a)
                                        for (let e in a) r[e] = l(r[e], a[e])(b)
                                }
                                return r
                            },
                            f = e => {
                                if (u.length < 1) return null;
                                let t = {},
                                    r = o(null, e);
                                for (let e = 0; e < u.length; e++) {
                                    let {
                                        slots: a = [],
                                        class: n,
                                        className: l,
                                        ...o
                                    } = u[e];
                                    if (!d(o)) {
                                        let e = !0;
                                        for (let t in o) {
                                            let a = r[t],
                                                n = o[t];
                                            if (void 0 === a || (Array.isArray(n) ? !n.includes(a) : n !== a)) {
                                                e = !1;
                                                break
                                            }
                                        }
                                        if (!e) continue
                                    }
                                    for (let e = 0; e < a.length; e++) {
                                        let r = a[e];
                                        t[r] || (t[r] = []), t[r].push([n, l])
                                    }
                                }
                                return t
                            };
                        if (!d(a) || !x) {
                            let e = {};
                            if ("object" == typeof E && !d(E))
                                for (let t in E) e[t] = e => {
                                    let a = c(e),
                                        n = f(e);
                                    return l(E[t], r(t, e), a[t], n ? n[t] : void 0, e?.class, e?.className)(b)
                                };
                            return e
                        }
                        return l(h, (() => {
                            if (!y) return null;
                            let e = Object.keys(y),
                                r = [];
                            for (let a = 0; a < e.length; a++) {
                                let n = t(e[a], y);
                                n && r.push(n)
                            }
                            return r
                        })(), i(j), e?.class, e?.className)(b)
                    };
                return k.variantKeys = (() => {
                    if (y && "object" == typeof y) return Object.keys(y)
                })(), k.extend = r, k.base = h, k.slots = E, k.variants = y, k.defaultVariants = v, k.compoundSlots = u, k.compoundVariants = j, k
            },
            createTV: e => (t, r) => n(t, r ? f(e, r) : e)
        });
    let h = b({
            base: ["group/btn relative flex w-fit items-center justify-center gap-2 whitespace-nowrap rounded-full", "cursor-pointer font-mango-sans text-xs font-semibold tracking-[-0.01rem]", "box-border py-0 no-underline", "transition-[box-shadow,background-color,color,border-color,scale] duration-300", "data-[pressed]:scale-95", "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40", "outline-hidden", "data-[focus-visible]:before:pointer-events-none data-[focus-visible]:before:absolute", "data-[focus-visible]:before:box-border data-[focus-visible]:before:inset-[-0.25rem] data-[focus-visible]:before:z-10", "data-[focus-visible]:before:rounded-full data-[focus-visible]:before:border-2", "data-[focus-visible]:before:border-mango-blue-focus data-[focus-visible]:before:content-['']"],
            variants: {
                variant: {
                    primary: "border-0 bg-mango-blue-500 text-white btn-primary-shadow-default data-[hovered]:bg-mango-blue-600 data-[pressed]:bg-mango-blue-700 data-[pressed]:btn-primary-shadow-pressed",
                    secondary: "border-0 bg-mango-gray-50 text-mango-black btn-secondary-shadow-default data-[hovered]:bg-mango-gray-100 data-[pressed]:bg-mango-gray-200 data-[pressed]:btn-secondary-shadow-pressed dark:bg-mango-gray-800 dark:text-mango-white dark:btn-secondary-shadow-default-dark dark:data-[hovered]:bg-mango-gray-900 dark:data-[pressed]:bg-mango-gray-950 dark:data-[pressed]:btn-secondary-shadow-pressed-dark",
                    outline: "border border-mango-gray-300 bg-transparent text-mango-black data-[hovered]:border-mango-gray-400 data-[pressed]:border-mango-gray-500 dark:border-mango-gray-700 dark:text-mango-white dark:data-[hovered]:border-mango-gray-600",
                    ghost: "border border-transparent bg-transparent text-mango-black data-[hovered]:border-mango-black data-[pressed]:border-mango-gray-300 dark:text-mango-white dark:data-[hovered]:border-mango-white dark:data-[pressed]:border-mango-gray-600"
                },
                size: {
                    lg: "h-[3.125rem]",
                    md: "h-[2.875rem]",
                    sm: "h-[2.375rem]",
                    xs: "h-[2rem]"
                },
                iconOnly: {
                    true: "aspect-square px-0",
                    false: ""
                },
                iconSide: {
                    none: "",
                    left: "",
                    right: ""
                }
            },
            compoundVariants: [{
                size: "lg",
                iconOnly: !1,
                iconSide: "none",
                class: "px-[2rem]"
            }, {
                size: "md",
                iconOnly: !1,
                iconSide: "none",
                class: "px-[1.625rem]"
            }, {
                size: "sm",
                iconOnly: !1,
                iconSide: "none",
                class: "px-[1.25rem]"
            }, {
                size: "xs",
                iconOnly: !1,
                iconSide: "none",
                class: "px-[1rem]"
            }, {
                size: "lg",
                iconOnly: !1,
                iconSide: "right",
                class: "pl-[2.25rem] pr-[2rem]"
            }, {
                size: "md",
                iconOnly: !1,
                iconSide: "right",
                class: "pl-[1.875rem] pr-[1.625rem]"
            }, {
                size: "sm",
                iconOnly: !1,
                iconSide: "right",
                class: "pl-[1.5rem] pr-[1.25rem]"
            }, {
                size: "xs",
                iconOnly: !1,
                iconSide: "right",
                class: "pl-[1.25rem] pr-[1rem]"
            }, {
                size: "lg",
                iconOnly: !1,
                iconSide: "left",
                class: "pl-[2rem] pr-[2.25rem]"
            }, {
                size: "md",
                iconOnly: !1,
                iconSide: "left",
                class: "pl-[1.625rem] pr-[1.875rem]"
            }, {
                size: "sm",
                iconOnly: !1,
                iconSide: "left",
                class: "pl-[1.25rem] pr-[1.5rem]"
            }, {
                size: "xs",
                iconOnly: !1,
                iconSide: "left",
                class: "pl-[1rem] pr-[1.25rem]"
            }],
            defaultVariants: {
                variant: "primary",
                size: "md",
                iconOnly: !1,
                iconSide: "none"
            }
        }),
        y = b({
            extend: h,
            variants: {
                variant: {
                    primary: "hover:bg-mango-blue-600 group-hover/button:bg-mango-blue-600",
                    secondary: "hover:bg-mango-gray-100 group-hover/button:bg-mango-gray-100 dark:hover:bg-mango-gray-900 dark:group-hover/button:bg-mango-gray-900",
                    outline: "hover:border-mango-gray-400 group-hover/button:border-mango-gray-400 dark:hover:border-mango-gray-600 dark:group-hover/button:border-mango-gray-600",
                    ghost: "hover:border-mango-black group-hover/button:border-mango-black dark:hover:border-mango-white dark:group-hover/button:border-mango-white"
                }
            }
        }),
        v = b({
            base: "flex items-center justify-center gap-2 transition-all duration-300",
            variants: {
                direction: {
                    left: "flex-row-reverse",
                    right: ""
                },
                slide: {
                    true: "group-data-[hovered]/btn:translate-x-0 group-hover/btn:translate-x-0 group-hover/button:translate-x-0"
                }
            },
            compoundVariants: [{
                direction: "left",
                slide: !0,
                class: "-translate-x-2"
            }, {
                direction: "right",
                slide: !0,
                class: "translate-x-2"
            }]
        });
    e.s(["buttonStyles", 0, h, "contentStyles", 0, v, "decorativeButtonStyles", 0, y], 877940);
    var x = e.i(499531);
    let w = x.forwardRef((e, t) => {
        let {
            alt: r,
            color: a = "currentColor",
            size: n = "1em",
            weight: l = "regular",
            mirrored: o = !1,
            children: i,
            weights: s,
            ...d
        } = e;
        return x.createElement("svg", {
            ref: t,
            xmlns: "http://www.w3.org/2000/svg",
            width: n,
            height: n,
            fill: a,
            viewBox: "0 0 256 256",
            transform: o ? "scale(-1, 1)" : void 0,
            ...d
        }, !!r && x.createElement("title", null, r), i, s.get(l))
    });
    w.displayName = "SSRBase";
    let E = new Map([
            ["bold", x.createElement(x.Fragment, null, x.createElement("path", {
                d: "M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"
            }))],
            ["duotone", x.createElement(x.Fragment, null, x.createElement("path", {
                d: "M112,56V200L40,128Z",
                opacity: "0.2"
            }), x.createElement("path", {
                d: "M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"
            }))],
            ["fill", x.createElement(x.Fragment, null, x.createElement("path", {
                d: "M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"
            }))],
            ["light", x.createElement(x.Fragment, null, x.createElement("path", {
                d: "M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"
            }))],
            ["regular", x.createElement(x.Fragment, null, x.createElement("path", {
                d: "M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"
            }))],
            ["thin", x.createElement(x.Fragment, null, x.createElement("path", {
                d: "M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"
            }))]
        ]),
        j = x.forwardRef((e, t) => x.createElement(w, {
            ref: t,
            ...e,
            weights: E
        }));
    j.displayName = "ArrowLeftIcon";
    let k = new Map([
            ["bold", x.createElement(x.Fragment, null, x.createElement("path", {
                d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
            }))],
            ["duotone", x.createElement(x.Fragment, null, x.createElement("path", {
                d: "M216,128l-72,72V56Z",
                opacity: "0.2"
            }), x.createElement("path", {
                d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"
            }))],
            ["fill", x.createElement(x.Fragment, null, x.createElement("path", {
                d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"
            }))],
            ["light", x.createElement(x.Fragment, null, x.createElement("path", {
                d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"
            }))],
            ["regular", x.createElement(x.Fragment, null, x.createElement("path", {
                d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
            }))],
            ["thin", x.createElement(x.Fragment, null, x.createElement("path", {
                d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"
            }))]
        ]),
        C = x.forwardRef((e, t) => x.createElement(w, {
            ref: t,
            ...e,
            weights: k
        }));
    C.displayName = "ArrowRightIcon";
    var M = e.i(14666);
    let A = ({
            children: e,
            className: t = ""
        }) => (0, M.jsx)("span", {
            className: `grid h-3 w-3 shrink-0 place-items-center text-xs ${t}`,
            children: e
        }),
        P = ({
            direction: e
        }) => (0, M.jsx)(A, {
            className: "opacity-0 transition-all duration-300 group-data-[hovered]/btn:opacity-100 group-hover/btn:opacity-100 group-hover/button:opacity-100",
            children: "left" === e ? (0, M.jsx)(j, {
                size: 12,
                "aria-hidden": !0
            }) : (0, M.jsx)(C, {
                size: 12,
                "aria-hidden": !0
            })
        }),
        O = ({
            icon: e
        }) => (0, M.jsx)("span", {
            className: "h-3 w-3 overflow-hidden",
            children: (0, M.jsxs)("span", {
                className: "flex w-[24px] -translate-x-3 items-center justify-center transition-all duration-300 group-data-[hovered]/btn:translate-x-0 group-hover/btn:translate-x-0 group-hover/button:translate-x-0",
                children: [(0, M.jsx)(A, {
                    className: "opacity-0 transition-opacity duration-300 group-data-[hovered]/btn:opacity-100 group-hover/btn:opacity-100 group-hover/button:opacity-100",
                    children: e
                }), (0, M.jsx)(A, {
                    className: "opacity-100 transition-opacity duration-300 group-data-[hovered]/btn:opacity-0 group-hover/btn:opacity-0 group-hover/button:opacity-0",
                    children: e
                })]
            })
        });
    e.s(["isIconOnly", 0, (e, t, r) => !e && !!(t ?? r), "renderButtonContent", 0, function({
        label: e,
        iconLeft: t,
        iconRight: r,
        animate: a
    }) {
        if (t && r) return (0, M.jsxs)(M.Fragment, {
            children: [(0, M.jsx)(A, {
                children: t
            }), e, (0, M.jsx)(A, {
                children: r
            })]
        });
        let n = t ?? r,
            l = t && !r ? "left" : "right",
            o = null;
        return n ? o = a ? (0, M.jsx)(O, {
            icon: n
        }) : (0, M.jsx)(A, {
            children: n
        }) : a && (o = (0, M.jsx)(P, {
            direction: l
        })), (0, M.jsxs)("span", {
            className: v({
                direction: l,
                slide: a && !n
            }),
            children: [e, o]
        })
    }], 194960)
}, 27666, 467211, 870053, 522455, e => {
    "use strict";
    e.i(203217);
    var t = e.i(429305),
        r = e.i(402801),
        a = e.i(499531),
        n = e.i(185559),
        l = e.i(838031);
    let o = Symbol("default");

    function i(e) {
        let {
            className: t,
            style: r,
            children: n,
            defaultClassName: l,
            defaultChildren: o,
            defaultStyle: i,
            values: s,
            render: d
        } = e;
        return (0, a.useMemo)(() => {
            let e, a, u;
            return e = "function" == typeof t ? t({
                ...s,
                defaultClassName: l
            }) : t, a = "function" == typeof r ? r({
                ...s,
                defaultStyle: i || {}
            }) : r, u = "function" == typeof n ? n({
                ...s,
                defaultChildren: o
            }) : null == n ? o : n, {
                className: e ?? l,
                style: a || i ? {
                    ...i,
                    ...a
                } : void 0,
                children: u ?? o,
                "data-rac": "",
                render: d ? e => d(e, s) : void 0
            }
        }, [t, r, n, l, o, i, s, d])
    }

    function s(e, t) {
        let r = (0, a.useContext)(e);
        if (null === t) return null;
        if (r && "object" == typeof r && "slots" in r && r.slots) {
            let e = t || o;
            if (!r.slots[e]) {
                let e = new Intl.ListFormat().format(Object.keys(r.slots).map(e => `"${e}"`)),
                    a = t ? `Invalid slot "${t}".` : "A slot prop is required.";
                throw Error(`${a} Valid slot names are ${e}.`)
            }
            return r.slots[e]
        }
        return r
    }

    function d(e, n, o) {
        let {
            ref: i,
            ...d
        } = s(o, e.slot) || {}, u = (0, l.useObjectRef)((0, a.useMemo)(() => (0, r.mergeRefs)(n, i), [n, i])), c = (0, t.mergeProps)(d, e);
        return "style" in d && d.style && "style" in e && e.style && ("function" == typeof d.style || "function" == typeof e.style ? c.style = t => {
            let r = "function" == typeof d.style ? d.style(t) : d.style,
                a = {
                    ...t.defaultStyle,
                    ...r
                },
                n = "function" == typeof e.style ? e.style({
                    ...t,
                    defaultStyle: a
                }) : e.style;
            return {
                ...a,
                ...n
            }
        } : c.style = {
            ...d.style,
            ...e.style
        }), [c, u]
    }

    function u(e, t, l) {
        let {
            render: o,
            ...i
        } = t, s = (0, a.useRef)(null), d = (0, a.useMemo)(() => (0, r.mergeRefs)(l, s), [l, s]);
        (0, n.useLayoutEffect)(() => {}, [e, o]);
        let u = {
            ...i,
            ref: d
        };
        return o ? o(u, void 0) : a.default.createElement(e, u)
    }
    let c = {},
        f = new Proxy({}, {
            get(e, t) {
                if ("string" != typeof t) return;
                let r = c[t];
                return r || (r = (0, a.forwardRef)(u.bind(null, t)), c[t] = r), r
            }
        });
    e.s(["DEFAULT_SLOT", 0, o, "Provider", 0, function({
        values: e,
        children: t
    }) {
        for (let [r, n] of e) t = a.default.createElement(r.Provider, {
            value: n
        }, t);
        return t
    }, "composeRenderProps", 0, function(e, t) {
        return r => t("function" == typeof e ? e(r) : e, r)
    }, "dom", 0, f, "removeDataAttributes", 0, function(e) {
        let t = /^(data-.*)$/,
            r = {};
        for (let a in e) t.test(a) || (r[a] = e[a]);
        return r
    }, "useContextProps", 0, d, "useRenderProps", 0, i, "useSlot", 0, function(e = !0) {
        let [t, r] = (0, a.useState)(e), l = (0, a.useRef)(!1), o = (0, a.useCallback)(e => {
            l.current = !0, r(!!e)
        }, []);
        return (0, n.useLayoutEffect)(() => {
            l.current || r(!1)
        }, []), [o, t]
    }, "useSlottedContext", 0, s], 467211), "u" > typeof HTMLTemplateElement && (Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
        configurable: !0,
        enumerable: !0,
        get: function() {
            return this.content.firstChild
        }
    }), Object.defineProperty(HTMLTemplateElement.prototype, "appendChild", {
        configurable: !0,
        enumerable: !0,
        value: function(e) {
            return this.content.appendChild(e)
        }
    }), Object.defineProperty(HTMLTemplateElement.prototype, "removeChild", {
        configurable: !0,
        enumerable: !0,
        value: function(e) {
            return this.content.removeChild(e)
        }
    }), Object.defineProperty(HTMLTemplateElement.prototype, "insertBefore", {
        configurable: !0,
        enumerable: !0,
        value: function(e, t) {
            return this.content.insertBefore(e, t)
        }
    }));
    let p = (0, a.createContext)(!1);

    function m(e) {
        let t = (t, r) => (0, a.useContext)(p) ? null : e(t, r);
        return t.displayName = e.displayName || e.name, (0, a.forwardRef)(t)
    }
    e.s(["Hidden", 0, function(e) {
        if ((0, a.useContext)(p)) return a.default.createElement(a.default.Fragment, null, e.children);
        let t = a.default.createElement(p.Provider, {
            value: !0
        }, e.children);
        return a.default.createElement("template", null, t)
    }, "createHideableComponent", 0, m, "useIsHidden", 0, function() {
        return (0, a.useContext)(p)
    }], 870053);
    let g = (0, a.createContext)({}),
        b = m(function(e, t) {
            [e, t] = d(e, t, g);
            let {
                elementType: r = "label",
                ...n
            } = e, l = f[r];
            return a.default.createElement(l, {
                className: "react-aria-Label",
                ...n,
                ref: t
            })
        });
    e.s(["Label", 0, b, "LabelContext", 0, g], 522455);
    var h = e.i(679933);
    e.i(961551), e.i(876728);
    let y = new Map,
        v = !1;
    try {
        v = "exceptZero" === new Intl.NumberFormat("de-DE", {
            signDisplay: "exceptZero"
        }).resolvedOptions().signDisplay
    } catch {}
    let x = !1;
    try {
        x = "unit" === new Intl.NumberFormat("de-DE", {
            style: "unit",
            unit: "degree"
        }).resolvedOptions().style
    } catch {}
    e.i(747922);
    let w = (0, a.createContext)(null);
    var E = e.i(248708),
        j = e.i(611017),
        k = e.i(147333),
        C = e.i(355770),
        M = e.i(823512);
    let A = (0, a.createContext)({}),
        P = m(function(e, r) {
            [e, r] = d(e, r, A);
            let n = e,
                {
                    isPending: l
                } = n,
                {
                    buttonProps: o,
                    isPressed: s
                } = (0, j.useButton)(e, r);
            o = function(e, t) {
                if (t) {
                    for (let t in e) t.startsWith("on") && !O.test(t) && (e[t] = void 0);
                    e.href = void 0, e.target = void 0
                }
                return e
            }(o, l);
            let {
                focusProps: u,
                isFocused: c,
                isFocusVisible: p
            } = (0, k.useFocusRing)(e), {
                hoverProps: m,
                isHovered: g
            } = (0, C.useHover)({
                ...e,
                isDisabled: e.isDisabled || l
            }), b = {
                isHovered: g,
                isPressed: (n.isPressed || s) && !l,
                isFocused: c,
                isFocusVisible: p,
                isDisabled: e.isDisabled || !1,
                isPending: l ?? !1
            }, y = i({
                ...e,
                values: b,
                defaultClassName: "react-aria-Button"
            }), v = (0, M.useId)(o.id), x = (0, M.useId)(), P = o["aria-labelledby"];
            l && (P ? P = `${P} ${x}` : o["aria-label"] && (P = `${v} ${x}`));
            let L = (0, a.useRef)(l);
            (0, a.useEffect)(() => {
                let e = {
                    "aria-labelledby": P || v
                };
                !L.current && c && l ? (0, E.announce)(e, "assertive") : L.current && c && !l && (0, E.announce)(e, "assertive"), L.current = l
            }, [l, c, P, v]);
            let H = (0, h.filterDOMProps)(e, {
                global: !0
            });
            return delete H.onClick, a.default.createElement(f.button, {
                ...(0, t.mergeProps)(H, y, o, u, m),
                type: "submit" === o.type && l ? "button" : o.type,
                id: v,
                ref: r,
                "aria-labelledby": P,
                slot: e.slot || void 0,
                "aria-disabled": l ? "true" : o["aria-disabled"],
                "data-disabled": e.isDisabled || void 0,
                "data-pressed": b.isPressed || void 0,
                "data-hovered": g || void 0,
                "data-focused": c || void 0,
                "data-pending": l || void 0,
                "data-focus-visible": p || void 0
            }, a.default.createElement(w.Provider, {
                value: {
                    id: x
                }
            }, y.children))
        }),
        O = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
    e.s(["Button", 0, P, "ButtonContext", 0, A], 27666)
}, 825585, e => {
    "use strict";
    var t = e.i(14666),
        r = e.i(877940),
        a = e.i(194960),
        n = e.i(27666),
        l = e.i(467211),
        o = e.i(279858),
        i = e.i(679933),
        s = e.i(429305),
        d = e.i(499531),
        u = e.i(147333),
        c = e.i(355770);
    let f = (0, d.createContext)(null),
        p = (0, d.forwardRef)(function(e, t) {
            [e, t] = (0, l.useContextProps)(e, t, f);
            let r = e.href && !e.isDisabled ? "a" : "span",
                {
                    linkProps: a,
                    isPressed: n
                } = (0, o.useLink)({
                    ...e,
                    elementType: r
                }, t),
                p = l.dom[r],
                {
                    hoverProps: m,
                    isHovered: g
                } = (0, c.useHover)(e),
                {
                    focusProps: b,
                    isFocused: h,
                    isFocusVisible: y
                } = (0, u.useFocusRing)(),
                v = (0, l.useRenderProps)({
                    ...e,
                    defaultClassName: "react-aria-Link",
                    values: {
                        isCurrent: !!e["aria-current"],
                        isDisabled: e.isDisabled || !1,
                        isPressed: n,
                        isHovered: g,
                        isFocused: h,
                        isFocusVisible: y
                    }
                }),
                x = (0, i.filterDOMProps)(e, {
                    global: !0
                });
            return delete x.onClick, d.default.createElement(p, {
                ref: t,
                slot: e.slot || void 0,
                ...(0, s.mergeProps)(x, v, a, m, b),
                "data-focused": h || void 0,
                "data-hovered": g || void 0,
                "data-pressed": n || void 0,
                "data-focus-visible": y || void 0,
                "data-current": !!e["aria-current"] || void 0,
                "data-disabled": e.isDisabled || void 0
            }, v.children)
        });

    function m(e) {
        let {
            variant: l,
            size: o,
            iconLeft: i,
            iconRight: s,
            disableAnimation: d = !1,
            decorative: u,
            children: c,
            className: f,
            ...m
        } = e, g = (0, a.isIconOnly)(c, i, s), b = i && !s ? "left" : s && !i ? "right" : "none";
        if (u) return (0, t.jsx)("span", {
            ...m,
            className: (0, r.decorativeButtonStyles)({
                variant: l,
                size: o,
                iconOnly: g,
                iconSide: b,
                className: f
            }),
            children: (0, a.renderButtonContent)({
                label: c,
                iconLeft: i,
                iconRight: s,
                animate: !d
            })
        });
        let h = e => (0, r.buttonStyles)({
                variant: l,
                size: o,
                iconOnly: g,
                iconSide: b,
                className: "function" == typeof f ? f(e) : f
            }),
            y = e => {
                let t = e ?? {};
                return (0, a.renderButtonContent)({
                    label: "function" == typeof c ? c(e) : c,
                    iconLeft: i,
                    iconRight: s,
                    animate: !d && !t.isDisabled && !t.isPending
                })
            };
        return "href" in e && e.href ? (0, t.jsx)(p, {
            ...m,
            className: h,
            children: y
        }) : (0, t.jsx)(n.Button, {
            ...m,
            className: h,
            children: y
        })
    }
    var g = e.i(94918),
        b = e.i(623295);
    e.s(["default", 0, e => {
        let {
            target: r = "_self",
            children: a,
            variant: n = "primary",
            href: l,
            icon: o,
            iconWeight: i = "regular",
            iconDirection: s = "right",
            size: d = "md",
            disabled: u,
            disableAnimation: c = !1,
            onClick: f,
            type: p = "button",
            ariaLabel: h,
            decorative: y,
            role: v,
            className: x,
            id: w,
            tabIndex: E,
            "aria-expanded": j,
            "aria-controls": k,
            "data-link-location": C,
            "data-link-id": M
        } = e, A = "string" == typeof o ? o ? (0, t.jsx)(b.default, {
            icon: o,
            size: "0.75rem",
            weight: i
        }) : null : o ?? null, P = !!A, O = h ?? (a ? void 0 : "string" == typeof o && o ? `${n} button with ${o} icon` : P ? `${n} button with icon` : `${n} button`), L = {
            iconLeft: "left" === s ? A ?? void 0 : void 0,
            iconRight: "right" === s ? A ?? void 0 : void 0
        }, H = {
            ...C && {
                "data-link-location": C
            },
            ...M && {
                "data-link-id": M
            }
        };
        return y ? (0, t.jsx)(m, {
            decorative: !0,
            variant: n,
            size: d,
            ...L,
            disableAnimation: c || u,
            className: x,
            role: v,
            id: w,
            tabIndex: E,
            "aria-expanded": j,
            "aria-controls": k,
            ...h && {
                "aria-label": h
            },
            onClick: f,
            ...H,
            children: a
        }) : l ? (0, t.jsx)(m, {
            variant: n,
            size: d,
            ...L,
            disableAnimation: c || u,
            href: l,
            target: r,
            isDisabled: u,
            onPress: f,
            ...O && {
                "aria-label": O
            },
            className: x,
            render: e => (0, t.jsx)(g.Link, {
                ...e,
                href: l,
                role: "button",
                id: w,
                tabIndex: E,
                "aria-expanded": j,
                "aria-controls": k,
                ...H
            }),
            children: a
        }) : (0, t.jsx)(m, {
            variant: n,
            size: d,
            ...L,
            disableAnimation: c,
            isDisabled: u,
            type: p,
            onPress: f,
            id: w,
            "aria-expanded": j,
            "aria-controls": k,
            excludeFromTabOrder: -1 === E || void 0,
            ...O && {
                "aria-label": O
            },
            className: x,
            ...H,
            children: a
        })
    }], 825585)
}]);