;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "b6970f90-f8a4-42b5-01ad-1c60966bd4a9")
    } catch (e) {}
}();
(() => {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 9946, 578152, e => {
        var t = e.i(783663),
            a = e.i(569738),
            r = e.i(495056);
        let n = (0, r.createContext)({}),
            o = (0, a.L)(function(e, a) {
                [e, a] = (0, t.T)(e, a, n);
                let {
                    elementType: o = "label",
                    ...l
                } = e, i = t.P[o];
                return r.default.createElement(i, {
                    className: "react-aria-Label",
                    ...l,
                    ref: a
                })
            });
        e.s(["Q", 0, o, "z", 0, n], 578152);
        var l = e.i(361610),
            i = e.i(996471);
        e.i(983183), e.i(718405);
        let s = new Map,
            d = !1;
        try {
            d = "exceptZero" === new Intl.NumberFormat("de-DE", {
                signDisplay: "exceptZero"
            }).resolvedOptions().signDisplay
        } catch {}
        let u = !1;
        try {
            u = "unit" === new Intl.NumberFormat("de-DE", {
                style: "unit",
                unit: "degree"
            }).resolvedOptions().style
        } catch {}
        e.i(773562);
        let g = (0, r.createContext)(null);
        var c = e.i(932078),
            m = e.i(746133),
            f = e.i(813092),
            p = e.i(107256),
            b = e.i(81407);
        let h = (0, r.createContext)({}),
            y = (0, a.L)(function(e, a) {
                [e, a] = (0, t.T)(e, a, h);
                let n = e,
                    {
                        isPending: o
                    } = n,
                    {
                        buttonProps: s,
                        isPressed: d
                    } = (0, m.f)(e, a);
                s = function(e, t) {
                    if (t) {
                        for (let t in e) t.startsWith("on") && !v.test(t) && (e[t] = void 0);
                        e.href = void 0, e.target = void 0
                    }
                    return e
                }(s, o);
                let {
                    focusProps: u,
                    isFocused: y,
                    isFocusVisible: w
                } = (0, f.f)(e), {
                    hoverProps: x,
                    isHovered: E
                } = (0, p.f)({
                    ...e,
                    isDisabled: e.isDisabled || o
                }), j = {
                    isHovered: E,
                    isPressed: (n.isPressed || d) && !o,
                    isFocused: y,
                    isFocusVisible: w,
                    isDisabled: e.isDisabled || !1,
                    isPending: o ?? !1
                }, C = (0, t.U)({
                    ...e,
                    values: j,
                    defaultClassName: "react-aria-Button"
                }), k = (0, b.H)(s.id), M = (0, b.H)(), A = s["aria-labelledby"];
                o && (A ? A = `${A} ${M}` : s["aria-label"] && (A = `${k} ${M}`));
                let O = (0, r.useRef)(o);
                (0, r.useEffect)(() => {
                    let e = {
                        "aria-labelledby": A || k
                    };
                    !O.current && y && o ? (0, c.f)(e, "assertive") : O.current && y && !o && (0, c.f)(e, "assertive"), O.current = o
                }, [o, y, A, k]);
                let T = (0, l.f)(e, {
                    global: !0
                });
                return delete T.onClick, r.default.createElement(t.P.button, {
                    ...(0, i.f)(T, C, s, u, x),
                    type: "submit" === s.type && o ? "button" : s.type,
                    id: k,
                    ref: a,
                    "aria-labelledby": A,
                    slot: e.slot || void 0,
                    "aria-disabled": o ? "true" : s["aria-disabled"],
                    "data-disabled": e.isDisabled || void 0,
                    "data-pressed": j.isPressed || void 0,
                    "data-hovered": E || void 0,
                    "data-focused": y || void 0,
                    "data-pending": o || void 0,
                    "data-focus-visible": w || void 0
                }, r.default.createElement(g.Provider, {
                    value: {
                        id: M
                    }
                }, C.children))
            }),
            v = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
        e.s(["K", 0, y, "C", 0, h], 9946)
    }, 977496, e => {
        var t = e.i(783663),
            a = e.i(124993),
            r = e.i(361610),
            n = e.i(996471),
            o = e.i(495056),
            l = e.i(813092),
            i = e.i(107256);
        let s = (0, o.createContext)(null),
            d = (0, o.forwardRef)(function(e, d) {
                [e, d] = (0, t.T)(e, d, s);
                let u = e.href && !e.isDisabled ? "a" : "span",
                    {
                        linkProps: g,
                        isPressed: c
                    } = (0, a.f)({
                        ...e,
                        elementType: u
                    }, d),
                    m = t.P[u],
                    {
                        hoverProps: f,
                        isHovered: p
                    } = (0, i.f)(e),
                    {
                        focusProps: b,
                        isFocused: h,
                        isFocusVisible: y
                    } = (0, l.f)(),
                    v = (0, t.U)({
                        ...e,
                        defaultClassName: "react-aria-Link",
                        values: {
                            isCurrent: !!e["aria-current"],
                            isDisabled: e.isDisabled || !1,
                            isPressed: c,
                            isHovered: p,
                            isFocused: h,
                            isFocusVisible: y
                        }
                    }),
                    w = (0, r.f)(e, {
                        global: !0
                    });
                return delete w.onClick, o.default.createElement(m, {
                    ref: d,
                    slot: e.slot || void 0,
                    ...(0, n.f)(w, v, g, f, b),
                    "data-focused": h || void 0,
                    "data-hovered": p || void 0,
                    "data-pressed": c || void 0,
                    "data-focus-visible": y || void 0,
                    "data-current": !!e["aria-current"] || void 0,
                    "data-disabled": e.isDisabled || void 0
                }, v.children)
            });
        e.s(["L", 0, d, "z", 0, s])
    }, 783663, e => {
        var t = e.i(996471),
            a = e.i(238272),
            r = e.i(495056),
            n = e.i(708705),
            o = e.i(199111);
        let l = Symbol("default");

        function i(e, t) {
            let a = (0, r.useContext)(e);
            if (null === t) return null;
            if (a && "object" == typeof a && "slots" in a && a.slots) {
                let e = t || l;
                if (!a.slots[e]) {
                    let e = new Intl.ListFormat().format(Object.keys(a.slots).map(e => `"${e}"`)),
                        r = t ? `Invalid slot "${t}".` : "A slot prop is required.";
                    throw Error(`${r} Valid slot names are ${e}.`)
                }
                return a.slots[e]
            }
            return a
        }

        function s(e, t, o) {
            let {
                render: l,
                ...i
            } = t, s = (0, r.useRef)(null), d = (0, r.useMemo)(() => (0, a.f)(o, s), [o, s]);
            (0, n.f)(() => {}, [e, l]);
            let u = {
                ...i,
                ref: d
            };
            return l ? l(u, void 0) : r.default.createElement(e, u)
        }
        let d = {},
            u = new Proxy({}, {
                get(e, t) {
                    if ("string" != typeof t) return;
                    let a = d[t];
                    return a || (a = (0, r.forwardRef)(s.bind(null, t)), d[t] = a), a
                }
            });
        e.s(["X", 0, l, "g", 0, function({
            values: e,
            children: t
        }) {
            for (let [a, n] of e) t = r.default.createElement(a.Provider, {
                value: n
            }, t);
            return t
        }, "W", 0, function(e, t) {
            return a => t("function" == typeof e ? e(a) : e, a)
        }, "P", 0, u, "h", 0, function(e) {
            let t = /^(data-.*)$/,
                a = {};
            for (let r in e) t.test(r) || (a[r] = e[r]);
            return a
        }, "T", 0, function(e, n, l) {
            let {
                ref: s,
                ...d
            } = i(l, e.slot) || {}, u = (0, o.f)((0, r.useMemo)(() => (0, a.f)(n, s), [n, s])), g = (0, t.f)(d, e);
            return "style" in d && d.style && "style" in e && e.style && ("function" == typeof d.style || "function" == typeof e.style ? g.style = t => {
                let a = "function" == typeof d.style ? d.style(t) : d.style,
                    r = {
                        ...t.defaultStyle,
                        ...a
                    },
                    n = "function" == typeof e.style ? e.style({
                        ...t,
                        defaultStyle: r
                    }) : e.style;
                return {
                    ...r,
                    ...n
                }
            } : g.style = {
                ...d.style,
                ...e.style
            }), [g, u]
        }, "U", 0, function(e) {
            let {
                className: t,
                style: a,
                children: n,
                defaultClassName: o,
                defaultChildren: l,
                defaultStyle: i,
                values: s,
                render: d
            } = e;
            return (0, r.useMemo)(() => {
                let e, r, u;
                return e = "function" == typeof t ? t({
                    ...s,
                    defaultClassName: o
                }) : t, r = "function" == typeof a ? a({
                    ...s,
                    defaultStyle: i || {}
                }) : a, u = "function" == typeof n ? n({
                    ...s,
                    defaultChildren: l
                }) : null == n ? l : n, {
                    className: e ?? o,
                    style: r || i ? {
                        ...i,
                        ...r
                    } : void 0,
                    children: u ?? l,
                    "data-rac": "",
                    render: d ? e => d(e, s) : void 0
                }
            }, [t, a, n, o, l, i, s, d])
        }, "Z", 0, function(e = !0) {
            let [t, a] = (0, r.useState)(e), o = (0, r.useRef)(!1), l = (0, r.useCallback)(e => {
                o.current = !0, a(!!e)
            }, []);
            return (0, n.f)(() => {
                o.current || a(!1)
            }, []), [l, t]
        }, "C", 0, i])
    }, 569738, e => {
        var t = e.i(495056);
        "u" > typeof HTMLTemplateElement && (Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
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
        let a = (0, t.createContext)(!1);
        e.s(["g", 0, function(e) {
            if ((0, t.useContext)(a)) return t.default.createElement(t.default.Fragment, null, e.children);
            let r = t.default.createElement(a.Provider, {
                value: !0
            }, e.children);
            return t.default.createElement("template", null, r)
        }, "L", 0, function(e) {
            let r = (r, n) => (0, t.useContext)(a) ? null : e(r, n);
            return r.displayName = e.displayName || e.name, (0, t.forwardRef)(r)
        }, "e", 0, function() {
            return (0, t.useContext)(a)
        }])
    }, 163165, e => {
        var t = e.i(877940),
            a = e.i(38215),
            r = e.i(520111),
            n = e.i(167358);
        let o = ({
                children: e,
                className: t = ""
            }) => (0, n.jsx)("span", {
                className: `mango:grid mango:h-3 mango:w-3 mango:shrink-0 mango:place-items-center mango:text-sm ${t}`,
                children: e
            }),
            l = ({
                direction: e
            }) => (0, n.jsx)(o, {
                className: "mango:opacity-0 mango:transition-all mango:duration-300 mango:group-data-[hovered]/btn:opacity-100 mango:group-hover/btn:opacity-100 mango:group-hover-button:opacity-100",
                children: "left" === e ? (0, n.jsx)(a.c, {
                    size: 12,
                    "aria-hidden": !0
                }) : (0, n.jsx)(r.c, {
                    size: 12,
                    "aria-hidden": !0
                })
            });

        function i({
            label: e,
            iconLeft: a,
            iconRight: r,
            animate: d
        }) {
            if (a && r) return (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)(o, {
                    children: a
                }), e, (0, n.jsx)(o, {
                    children: r
                })]
            });
            let u = a ?? r,
                g = a && !r ? "left" : "right",
                c = null;
            return u ? c = d ? (0, n.jsx)(s, {
                icon: u
            }) : (0, n.jsx)(o, {
                children: u
            }) : d && (c = (0, n.jsx)(l, {
                direction: g
            })), (0, n.jsxs)("span", {
                className: (0, t.Y)({
                    direction: g,
                    slide: d && !u
                }),
                children: [e, c]
            })
        }
        let s = ({
            icon: e
        }) => (0, n.jsx)("span", {
            className: "mango:h-3 mango:w-3 mango:overflow-hidden",
            children: (0, n.jsxs)("span", {
                className: "mango:flex mango:w-6 mango:-translate-x-3 mango:items-center mango:justify-center mango:transition-all mango:duration-300 mango:group-data-[hovered]/btn:translate-x-0 mango:group-hover/btn:translate-x-0 mango:group-hover-button:translate-x-0",
                children: [(0, n.jsx)(o, {
                    className: "mango:opacity-0 mango:transition-opacity mango:duration-300 mango:group-data-[hovered]/btn:opacity-100 mango:group-hover/btn:opacity-100 mango:group-hover-button:opacity-100",
                    children: e
                }), (0, n.jsx)(o, {
                    className: "mango:opacity-100 mango:transition-opacity mango:duration-300 mango:group-data-[hovered]/btn:opacity-0 mango:group-hover/btn:opacity-0 mango:group-hover-button:opacity-0",
                    children: e
                })]
            })
        });
        var d = e.i(9946),
            u = e.i(977496);
        e.s(["Button", 0, function(e) {
            let {
                variant: a,
                size: r,
                iconLeft: o,
                iconRight: l,
                disableAnimation: s = !1,
                decorative: g,
                children: c,
                className: m,
                ...f
            } = e, p = !c && !!(o ?? l), b = o && !l ? "left" : l && !o ? "right" : "none";
            if (g) return (0, n.jsx)("span", {
                ...f,
                className: (0, t.X)({
                    variant: a,
                    size: r,
                    iconOnly: p,
                    iconSide: b,
                    className: m
                }),
                children: i({
                    label: c,
                    iconLeft: o,
                    iconRight: l,
                    animate: !s
                })
            });
            let h = e => (0, t.r)({
                    variant: a,
                    size: r,
                    iconOnly: p,
                    iconSide: b,
                    className: "function" == typeof m ? m(e) : m
                }),
                y = e => {
                    let t = e ?? {};
                    return i({
                        label: "function" == typeof c ? c(e) : c,
                        iconLeft: o,
                        iconRight: l,
                        animate: !s && !t.isDisabled && !t.isPending
                    })
                };
            return "href" in e && e.href ? (0, n.jsx)(u.L, {
                ...f,
                className: h,
                children: y
            }) : (0, n.jsx)(d.K, {
                ...f,
                className: h,
                children: y
            })
        }], 163165)
    }, 877940, e => {
        var t = e.i(837826);
        let a = (0, t.f)({
                base: ["mango:group/btn mango:relative mango:flex mango:w-fit mango:items-center mango:justify-center mango:gap-2 mango:whitespace-nowrap mango:rounded-full", "mango:cursor-pointer mango:font-sans mango:text-sm mango:leading-4 mango:font-semibold mango:tracking-[-0.01rem]", "mango:box-border mango:py-0 mango:no-underline", "mango:transition-[box-shadow,background-color,color,border-color,scale] mango:duration-300", "mango:data-[pressed]:scale-95", "mango:data-[disabled]:cursor-not-allowed mango:data-[disabled]:opacity-40", "mango:outline-hidden", "mango:data-[focus-visible]:before:pointer-events-none mango:data-[focus-visible]:before:absolute", "mango:data-[focus-visible]:before:box-border mango:data-[focus-visible]:before:-inset-1 mango:data-[focus-visible]:before:z-10", "mango:data-[focus-visible]:before:rounded-full mango:data-[focus-visible]:before:border-2", "mango:data-[focus-visible]:before:border-blue-focus mango:data-[focus-visible]:before:content-['']"],
                variants: {
                    variant: {
                        primary: "mango:border-0 mango:bg-blue-500 mango:text-white mango:btn-primary-shadow-default mango:data-[hovered]:bg-blue-600 mango:data-[pressed]:bg-blue-700 mango:data-[pressed]:btn-primary-shadow-pressed",
                        secondary: "mango:border-0 mango:bg-gray-50 mango:text-black mango:btn-secondary-shadow-default mango:data-[hovered]:bg-gray-100 mango:data-[pressed]:bg-gray-200 mango:dark:bg-gray-800 mango:dark:text-white mango:dark:btn-secondary-shadow-default-dark mango:dark:data-[hovered]:bg-gray-900 mango:dark:data-[pressed]:bg-gray-950 mango:dark:data-[pressed]:btn-secondary-shadow-pressed-dark mango:data-[pressed]:btn-secondary-shadow-pressed",
                        outline: "mango:border mango:border-gray-300 mango:bg-transparent mango:text-black mango:data-[hovered]:border-gray-400 mango:data-[pressed]:border-gray-500 mango:dark:border-gray-700 mango:dark:text-white mango:dark:data-[hovered]:border-gray-600",
                        ghost: "mango:border mango:border-transparent mango:bg-transparent mango:text-black mango:data-[hovered]:border-black mango:data-[pressed]:border-gray-300 mango:dark:text-white mango:dark:data-[hovered]:border-white mango:dark:data-[pressed]:border-gray-600"
                    },
                    size: {
                        lg: "mango:h-12.5",
                        md: "mango:h-11.5",
                        sm: "mango:h-9.5",
                        xs: "mango:h-8"
                    },
                    iconOnly: {
                        true: "mango:aspect-square mango:px-0",
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
                    class: "mango:px-8"
                }, {
                    size: "md",
                    iconOnly: !1,
                    iconSide: "none",
                    class: "mango:px-6.5"
                }, {
                    size: "sm",
                    iconOnly: !1,
                    iconSide: "none",
                    class: "mango:px-5"
                }, {
                    size: "xs",
                    iconOnly: !1,
                    iconSide: "none",
                    class: "mango:px-4"
                }, {
                    size: "lg",
                    iconOnly: !1,
                    iconSide: "right",
                    class: "mango:pl-9 mango:pr-8"
                }, {
                    size: "md",
                    iconOnly: !1,
                    iconSide: "right",
                    class: "mango:pl-7.5 mango:pr-6.5"
                }, {
                    size: "sm",
                    iconOnly: !1,
                    iconSide: "right",
                    class: "mango:pl-6 mango:pr-5"
                }, {
                    size: "xs",
                    iconOnly: !1,
                    iconSide: "right",
                    class: "mango:pl-5 mango:pr-4"
                }, {
                    size: "lg",
                    iconOnly: !1,
                    iconSide: "left",
                    class: "mango:pl-8 mango:pr-9"
                }, {
                    size: "md",
                    iconOnly: !1,
                    iconSide: "left",
                    class: "mango:pl-6.5 mango:pr-7.5"
                }, {
                    size: "sm",
                    iconOnly: !1,
                    iconSide: "left",
                    class: "mango:pl-5 mango:pr-6"
                }, {
                    size: "xs",
                    iconOnly: !1,
                    iconSide: "left",
                    class: "mango:pl-4 mango:pr-5"
                }],
                defaultVariants: {
                    variant: "primary",
                    size: "md",
                    iconOnly: !1,
                    iconSide: "none"
                }
            }),
            r = (0, t.f)({
                extend: a,
                variants: {
                    variant: {
                        primary: "mango:hover:bg-blue-600 mango:group-hover-button:bg-blue-600",
                        secondary: "mango:hover:bg-gray-100 mango:group-hover-button:bg-gray-100 mango:dark:hover:bg-gray-900 mango:dark:group-hover-button:bg-gray-900",
                        outline: "mango:hover:border-gray-400 mango:group-hover-button:border-gray-400 mango:dark:hover:border-gray-600 mango:dark:group-hover-button:border-gray-600",
                        ghost: "mango:hover:border-black mango:group-hover-button:border-black mango:dark:hover:border-white mango:dark:group-hover-button:border-white"
                    }
                }
            }),
            n = (0, t.f)({
                base: "mango:flex mango:items-center mango:justify-center mango:gap-2 mango:transition-all mango:duration-300",
                variants: {
                    direction: {
                        left: "mango:flex-row-reverse",
                        right: ""
                    },
                    slide: {
                        true: "mango:group-data-[hovered]/btn:translate-x-0 mango:group-hover/btn:translate-x-0 mango:group-hover-button:translate-x-0"
                    }
                },
                compoundVariants: [{
                    direction: "left",
                    slide: !0,
                    class: "mango:-translate-x-2"
                }, {
                    direction: "right",
                    slide: !0,
                    class: "mango:translate-x-2"
                }]
            });
        e.s(["r", 0, a, "Y", 0, n, "X", 0, r])
    }, 242042, e => {
        var t = e.i(495056);
        let a = t.forwardRef((e, a) => {
            let {
                alt: r,
                color: n = "currentColor",
                size: o = "1em",
                weight: l = "regular",
                mirrored: i = !1,
                children: s,
                weights: d,
                ...u
            } = e;
            return t.createElement("svg", {
                ref: a,
                xmlns: "http://www.w3.org/2000/svg",
                width: o,
                height: o,
                fill: n,
                viewBox: "0 0 256 256",
                transform: i ? "scale(-1, 1)" : void 0,
                ...u
            }, !!r && t.createElement("title", null, r), s, d.get(l))
        });
        a.displayName = "SSRBase", e.s(["w", 0, a])
    }, 38215, 520111, e => {
        var t = e.i(242042),
            a = e.i(495056);
        let r = new Map([
                ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"
                }))],
                ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M112,56V200L40,128Z",
                    opacity: "0.2"
                }), a.createElement("path", {
                    d: "M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"
                }))],
                ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"
                }))],
                ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"
                }))],
                ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"
                }))],
                ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"
                }))]
            ]),
            n = a.forwardRef((e, n) => a.createElement(t.w, {
                ref: n,
                ...e,
                weights: r
            }));
        n.displayName = "ArrowLeftIcon", e.s(["c", 0, n], 38215);
        let o = new Map([
                ["bold", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
                }))],
                ["duotone", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M216,128l-72,72V56Z",
                    opacity: "0.2"
                }), a.createElement("path", {
                    d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"
                }))],
                ["fill", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"
                }))],
                ["light", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"
                }))],
                ["regular", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
                }))],
                ["thin", a.createElement(a.Fragment, null, a.createElement("path", {
                    d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"
                }))]
            ]),
            l = a.forwardRef((e, r) => a.createElement(t.w, {
                ref: r,
                ...e,
                weights: o
            }));
        l.displayName = "ArrowRightIcon", e.s(["c", 0, l], 520111)
    }, 837826, e => {
        let t, a, r, n;
        var o, l = /\s+/g,
            i = (...e) => {
                var t;
                let a = [],
                    r = e => {
                        if (!e && 0 !== e && 0n !== e) return;
                        if (Array.isArray(e)) {
                            for (let t = 0, a = e.length; t < a; t++) r(e[t]);
                            return
                        }
                        let t = typeof e;
                        if ("string" === t || "number" === t || "bigint" === t) {
                            if ("number" === t && e != e) return;
                            a.push(String(e))
                        } else if ("object" === t) {
                            let t = Object.keys(e);
                            for (let r = 0, n = t.length; r < n; r++) {
                                let n = t[r];
                                e[n] && a.push(n)
                            }
                        }
                    };
                for (let t = 0, a = e.length; t < a; t++) {
                    let a = e[t];
                    null != a && r(a)
                }
                return a.length > 0 ? "string" == typeof(t = a.join(" ")) && t ? t.replace(l, " ").trim() : t : void 0
            },
            s = e => !1 === e ? "false" : !0 === e ? "true" : 0 === e ? "0" : e,
            d = e => {
                if (!e || "object" != typeof e) return !0;
                for (let t in e) return !1;
                return !0
            },
            u = (e, t) => {
                for (let a = 0; a < e.length; a++) {
                    let r = e[a];
                    Array.isArray(r) ? u(r, t) : r && t.push(r)
                }
            },
            g = (...e) => {
                let t = [];
                u(e, t);
                let a = [];
                for (let e = 0; e < t.length; e++) t[e] && a.push(t[e]);
                return a
            },
            c = (e, t) => {
                let a = {};
                for (let r in e) {
                    let n = e[r];
                    if (r in t) {
                        let e = t[r];
                        Array.isArray(n) || Array.isArray(e) ? a[r] = g(e, n) : "object" == typeof n && "object" == typeof e && n && e ? a[r] = c(n, e) : a[r] = e + " " + n
                    } else a[r] = n
                }
                for (let r in t) r in e || (a[r] = t[r]);
                return a
            },
            m = {
                twMerge: !0,
                twMergeConfig: {}
            },
            f = (t = null, a = {}, r = !1, {
                get cachedTwMerge() {
                    return t
                },
                set cachedTwMerge(e) {
                    t = e
                },
                get cachedTwMergeConfig() {
                    return a
                },
                set cachedTwMergeConfig(e) {
                    a = e
                },
                get didTwMergeConfigChange() {
                    return r
                },
                set didTwMergeConfigChange(e) {
                    r = e
                },
                reset() {
                    t = null, a = {}, r = !1
                }
            }),
            {
                createTV: p,
                tv: b
            } = (o = (...e) => t => i(e) || void 0, {
                tv: n = (e, t) => {
                    let {
                        extend: a = null,
                        slots: r = {},
                        variants: n = {},
                        compoundVariants: l = [],
                        compoundSlots: u = [],
                        defaultVariants: p = {}
                    } = e, b = {
                        ...m,
                        ...t
                    }, h = a?.base ? i(a.base, e?.base) : e?.base, y = a?.variants && !d(a.variants) ? c(n, a.variants) : n, v = a?.defaultVariants && !d(a.defaultVariants) ? {
                        ...a.defaultVariants,
                        ...p
                    } : p;
                    d(b.twMergeConfig) || ((e, t) => {
                        if (e === t) return !0;
                        if (!e || !t) return !1;
                        let a = Object.keys(e),
                            r = Object.keys(t);
                        if (a.length !== r.length) return !1;
                        for (let n = 0; n < a.length; n++) {
                            let o = a[n];
                            if (!r.includes(o) || e[o] !== t[o]) return !1
                        }
                        return !0
                    })(b.twMergeConfig, f.cachedTwMergeConfig) || (f.didTwMergeConfigChange = !0, f.cachedTwMergeConfig = b.twMergeConfig);
                    let w = d(a?.slots),
                        x = d(r) ? {} : {
                            base: i(e?.base, w && a?.base),
                            ...r
                        },
                        E = w ? x : ((e, t) => {
                            for (let a in t)
                                if (Object.prototype.hasOwnProperty.call(t, a)) {
                                    let r = t[a];
                                    a in e ? e[a] = i(e[a], r) : e[a] = r
                                } return e
                        })({
                            ...a?.slots
                        }, d(x) ? {
                            base: e?.base
                        } : x),
                        j = d(a?.compoundVariants) ? l : g(a?.compoundVariants, l),
                        C = e => {
                            if (d(y) && d(r) && w) return o(h, e?.class, e?.className)(b);
                            if (j && !Array.isArray(j)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof j}`);
                            if (u && !Array.isArray(u)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof u}`);
                            let t = (t, a = y, r = null, n = null) => {
                                    let o = a[t];
                                    if (!o || d(o)) return null;
                                    let l = n?.[t] ?? e?.[t];
                                    if (null === l) return null;
                                    let i = s(l);
                                    if ("object" == typeof i) return null;
                                    let u = v?.[t];
                                    return o[(null != i ? i : s(u)) || "false"]
                                },
                                a = (e, a) => {
                                    if (!y || "object" != typeof y) return null;
                                    let r = [];
                                    for (let n in y) {
                                        let o = t(n, y, e, a),
                                            l = "base" === e && "string" == typeof o ? o : o && o[e];
                                        l && r.push(l)
                                    }
                                    return r
                                },
                                n = {};
                            for (let t in e) {
                                let a = e[t];
                                void 0 !== a && (n[t] = a)
                            }
                            let l = (t, a) => {
                                    let r = "object" == typeof e?.[t] ? {
                                        [t]: e[t]?.initial
                                    } : {};
                                    return {
                                        ...v,
                                        ...n,
                                        ...r,
                                        ...a
                                    }
                                },
                                i = (e = [], t) => {
                                    let a = [],
                                        r = e.length;
                                    for (let n = 0; n < r; n++) {
                                        let {
                                            class: r,
                                            className: o,
                                            ...i
                                        } = e[n], s = !0, d = l(null, t);
                                        for (let e in i) {
                                            let t = i[e],
                                                a = d[e];
                                            if (Array.isArray(t)) {
                                                if (!t.includes(a)) {
                                                    s = !1;
                                                    break
                                                }
                                            } else {
                                                if ((null == t || !1 === t) && (null == a || !1 === a)) continue;
                                                if (a !== t) {
                                                    s = !1;
                                                    break
                                                }
                                            }
                                        }
                                        s && (r && a.push(r), o && a.push(o))
                                    }
                                    return a
                                },
                                g = e => {
                                    let t = i(j, e);
                                    if (!Array.isArray(t)) return t;
                                    let a = {};
                                    for (let e = 0; e < t.length; e++) {
                                        let r = t[e];
                                        if ("string" == typeof r) a.base = o(a.base, r)(b);
                                        else if ("object" == typeof r)
                                            for (let e in r) a[e] = o(a[e], r[e])(b)
                                    }
                                    return a
                                },
                                c = e => {
                                    if (u.length < 1) return null;
                                    let t = {},
                                        a = l(null, e);
                                    for (let e = 0; e < u.length; e++) {
                                        let {
                                            slots: r = [],
                                            class: n,
                                            className: o,
                                            ...l
                                        } = u[e];
                                        if (!d(l)) {
                                            let e = !0;
                                            for (let t in l) {
                                                let r = a[t],
                                                    n = l[t];
                                                if (void 0 === r || (Array.isArray(n) ? !n.includes(r) : n !== r)) {
                                                    e = !1;
                                                    break
                                                }
                                            }
                                            if (!e) continue
                                        }
                                        for (let e = 0; e < r.length; e++) {
                                            let a = r[e];
                                            t[a] || (t[a] = []), t[a].push([n, o])
                                        }
                                    }
                                    return t
                                };
                            if (!d(r) || !w) {
                                let e = {};
                                if ("object" == typeof E && !d(E))
                                    for (let t in E) e[t] = e => {
                                        let r = g(e),
                                            n = c(e);
                                        return o(E[t], a(t, e), r[t], n ? n[t] : void 0, e?.class, e?.className)(b)
                                    };
                                return e
                            }
                            return o(h, (() => {
                                if (!y) return null;
                                let e = Object.keys(y),
                                    a = [];
                                for (let r = 0; r < e.length; r++) {
                                    let n = t(e[r], y);
                                    n && a.push(n)
                                }
                                return a
                            })(), i(j), e?.class, e?.className)(b)
                        };
                    return C.variantKeys = (() => {
                        if (y && "object" == typeof y) return Object.keys(y)
                    })(), C.extend = a, C.base = h, C.slots = E, C.variants = y, C.defaultVariants = v, C.compoundSlots = u, C.compoundVariants = j, C
                },
                createTV: e => (t, a) => n(t, a ? c(e, a) : e)
            });
        e.s(["f", 0, b], 837826)
    }])
})();

//# debugId=b6970f90-f8a4-42b5-01ad-1c60966bd4a9