;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "e38f5091-5c6f-553f-621c-08f16bd27541")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 27666, 522455, e => {
    "use strict";
    var t = e.i(467211),
        a = e.i(870053),
        r = e.i(409781);
    let n = (0, r.createContext)({}),
        o = (0, a.createHideableComponent)(function(e, a) {
            [e, a] = (0, t.useContextProps)(e, a, n);
            let {
                elementType: o = "label",
                ...l
            } = e, s = t.dom[o];
            return r.default.createElement(s, {
                className: "react-aria-Label",
                ...l,
                ref: a
            })
        });
    e.s(["Label", 0, o, "LabelContext", 0, n], 522455);
    var l = e.i(679933),
        s = e.i(429305);
    e.i(961551), e.i(876728);
    let i = new Map,
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
    e.i(747922);
    let c = (0, r.createContext)(null);
    var g = e.i(248708),
        m = e.i(611017),
        f = e.i(147333),
        p = e.i(355770),
        b = e.i(823512);
    let h = (0, r.createContext)({}),
        y = (0, a.createHideableComponent)(function(e, a) {
            [e, a] = (0, t.useContextProps)(e, a, h);
            let n = e,
                {
                    isPending: o
                } = n,
                {
                    buttonProps: i,
                    isPressed: d
                } = (0, m.useButton)(e, a);
            i = function(e, t) {
                if (t) {
                    for (let t in e) t.startsWith("on") && !v.test(t) && (e[t] = void 0);
                    e.href = void 0, e.target = void 0
                }
                return e
            }(i, o);
            let {
                focusProps: u,
                isFocused: y,
                isFocusVisible: x
            } = (0, f.useFocusRing)(e), {
                hoverProps: w,
                isHovered: E
            } = (0, p.useHover)({
                ...e,
                isDisabled: e.isDisabled || o
            }), C = {
                isHovered: E,
                isPressed: (n.isPressed || d) && !o,
                isFocused: y,
                isFocusVisible: x,
                isDisabled: e.isDisabled || !1,
                isPending: o ?? !1
            }, k = (0, t.useRenderProps)({
                ...e,
                values: C,
                defaultClassName: "react-aria-Button"
            }), j = (0, b.useId)(i.id), M = (0, b.useId)(), P = i["aria-labelledby"];
            o && (P ? P = `${P} ${M}` : i["aria-label"] && (P = `${j} ${M}`));
            let A = (0, r.useRef)(o);
            (0, r.useEffect)(() => {
                let e = {
                    "aria-labelledby": P || j
                };
                !A.current && y && o ? (0, g.announce)(e, "assertive") : A.current && y && !o && (0, g.announce)(e, "assertive"), A.current = o
            }, [o, y, P, j]);
            let O = (0, l.filterDOMProps)(e, {
                global: !0
            });
            return delete O.onClick, r.default.createElement(t.dom.button, {
                ...(0, s.mergeProps)(O, k, i, u, w),
                type: "submit" === i.type && o ? "button" : i.type,
                id: j,
                ref: a,
                "aria-labelledby": P,
                slot: e.slot || void 0,
                "aria-disabled": o ? "true" : i["aria-disabled"],
                "data-disabled": e.isDisabled || void 0,
                "data-pressed": C.isPressed || void 0,
                "data-hovered": E || void 0,
                "data-focused": y || void 0,
                "data-pending": o || void 0,
                "data-focus-visible": x || void 0
            }, r.default.createElement(c.Provider, {
                value: {
                    id: M
                }
            }, k.children))
        }),
        v = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
    e.s(["Button", 0, y, "ButtonContext", 0, h], 27666)
}, 13882, e => {
    "use strict";
    var t = e.i(467211),
        a = e.i(279858),
        r = e.i(679933),
        n = e.i(429305),
        o = e.i(409781),
        l = e.i(147333),
        s = e.i(355770);
    let i = (0, o.createContext)(null),
        d = (0, o.forwardRef)(function(e, d) {
            [e, d] = (0, t.useContextProps)(e, d, i);
            let u = e.href && !e.isDisabled ? "a" : "span",
                {
                    linkProps: c,
                    isPressed: g
                } = (0, a.useLink)({
                    ...e,
                    elementType: u
                }, d),
                m = t.dom[u],
                {
                    hoverProps: f,
                    isHovered: p
                } = (0, s.useHover)(e),
                {
                    focusProps: b,
                    isFocused: h,
                    isFocusVisible: y
                } = (0, l.useFocusRing)(),
                v = (0, t.useRenderProps)({
                    ...e,
                    defaultClassName: "react-aria-Link",
                    values: {
                        isCurrent: !!e["aria-current"],
                        isDisabled: e.isDisabled || !1,
                        isPressed: g,
                        isHovered: p,
                        isFocused: h,
                        isFocusVisible: y
                    }
                }),
                x = (0, r.filterDOMProps)(e, {
                    global: !0
                });
            return delete x.onClick, o.default.createElement(m, {
                ref: d,
                slot: e.slot || void 0,
                ...(0, n.mergeProps)(x, v, c, f, b),
                "data-focused": h || void 0,
                "data-hovered": p || void 0,
                "data-pressed": g || void 0,
                "data-focus-visible": y || void 0,
                "data-current": !!e["aria-current"] || void 0,
                "data-disabled": e.isDisabled || void 0
            }, v.children)
        });
    e.s(["Link", 0, d, "LinkContext", 0, i])
}, 467211, e => {
    "use strict";
    var t = e.i(429305),
        a = e.i(402801),
        r = e.i(409781),
        n = e.i(185559),
        o = e.i(838031);
    let l = Symbol("default");

    function s(e, t) {
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

    function i(e, t, o) {
        let {
            render: l,
            ...s
        } = t, i = (0, r.useRef)(null), d = (0, r.useMemo)(() => (0, a.mergeRefs)(o, i), [o, i]);
        (0, n.useLayoutEffect)(() => {}, [e, l]);
        let u = {
            ...s,
            ref: d
        };
        return l ? l(u, void 0) : r.default.createElement(e, u)
    }
    let d = {},
        u = new Proxy({}, {
            get(e, t) {
                if ("string" != typeof t) return;
                let a = d[t];
                return a || (a = (0, r.forwardRef)(i.bind(null, t)), d[t] = a), a
            }
        });
    e.s(["DEFAULT_SLOT", 0, l, "Provider", 0, function({
        values: e,
        children: t
    }) {
        for (let [a, n] of e) t = r.default.createElement(a.Provider, {
            value: n
        }, t);
        return t
    }, "composeRenderProps", 0, function(e, t) {
        return a => t("function" == typeof e ? e(a) : e, a)
    }, "dom", 0, u, "removeDataAttributes", 0, function(e) {
        let t = /^(data-.*)$/,
            a = {};
        for (let r in e) t.test(r) || (a[r] = e[r]);
        return a
    }, "useContextProps", 0, function(e, n, l) {
        let {
            ref: i,
            ...d
        } = s(l, e.slot) || {}, u = (0, o.useObjectRef)((0, r.useMemo)(() => (0, a.mergeRefs)(n, i), [n, i])), c = (0, t.mergeProps)(d, e);
        return "style" in d && d.style && "style" in e && e.style && ("function" == typeof d.style || "function" == typeof e.style ? c.style = t => {
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
        } : c.style = {
            ...d.style,
            ...e.style
        }), [c, u]
    }, "useRenderProps", 0, function(e) {
        let {
            className: t,
            style: a,
            children: n,
            defaultClassName: o,
            defaultChildren: l,
            defaultStyle: s,
            values: i,
            render: d
        } = e;
        return (0, r.useMemo)(() => {
            let e, r, u;
            return e = "function" == typeof t ? t({
                ...i,
                defaultClassName: o
            }) : t, r = "function" == typeof a ? a({
                ...i,
                defaultStyle: s || {}
            }) : a, u = "function" == typeof n ? n({
                ...i,
                defaultChildren: l
            }) : null == n ? l : n, {
                className: e ?? o,
                style: r || s ? {
                    ...s,
                    ...r
                } : void 0,
                children: u ?? l,
                "data-rac": "",
                render: d ? e => d(e, i) : void 0
            }
        }, [t, a, n, o, l, s, i, d])
    }, "useSlot", 0, function(e = !0) {
        let [t, a] = (0, r.useState)(e), o = (0, r.useRef)(!1), l = (0, r.useCallback)(e => {
            o.current = !0, a(!!e)
        }, []);
        return (0, n.useLayoutEffect)(() => {
            o.current || a(!1)
        }, []), [l, t]
    }, "useSlottedContext", 0, s])
}, 870053, e => {
    "use strict";
    var t = e.i(409781);
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
    e.s(["Hidden", 0, function(e) {
        if ((0, t.useContext)(a)) return t.default.createElement(t.default.Fragment, null, e.children);
        let r = t.default.createElement(a.Provider, {
            value: !0
        }, e.children);
        return t.default.createElement("template", null, r)
    }, "createHideableComponent", 0, function(e) {
        let r = (r, n) => (0, t.useContext)(a) ? null : e(r, n);
        return r.displayName = e.displayName || e.name, (0, t.forwardRef)(r)
    }, "useIsHidden", 0, function() {
        return (0, t.useContext)(a)
    }])
}, 163165, e => {
    "use strict";
    var t = e.i(877940),
        a = e.i(866913),
        r = e.i(49527),
        n = e.i(785328);
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

    function s({
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
            c = a && !r ? "left" : "right",
            g = null;
        return u ? g = d ? (0, n.jsx)(i, {
            icon: u
        }) : (0, n.jsx)(o, {
            children: u
        }) : d && (g = (0, n.jsx)(l, {
            direction: c
        })), (0, n.jsxs)("span", {
            className: (0, t.contentStyles)({
                direction: c,
                slide: d && !u
            }),
            children: [e, g]
        })
    }
    let i = ({
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
    var d = e.i(27666),
        u = e.i(13882);
    e.s(["Button", 0, function(e) {
        let {
            variant: a,
            size: r,
            iconLeft: o,
            iconRight: l,
            disableAnimation: i = !1,
            decorative: c,
            children: g,
            className: m,
            ...f
        } = e, p = !g && !!(o ?? l), b = o && !l ? "left" : l && !o ? "right" : "none";
        if (c) return (0, n.jsx)("span", {
            ...f,
            className: (0, t.decorativeButtonStyles)({
                variant: a,
                size: r,
                iconOnly: p,
                iconSide: b,
                className: m
            }),
            children: s({
                label: g,
                iconLeft: o,
                iconRight: l,
                animate: !i
            })
        });
        let h = e => (0, t.buttonStyles)({
                variant: a,
                size: r,
                iconOnly: p,
                iconSide: b,
                className: "function" == typeof m ? m(e) : m
            }),
            y = e => {
                let t = e ?? {};
                return s({
                    label: "function" == typeof g ? g(e) : g,
                    iconLeft: o,
                    iconRight: l,
                    animate: !i && !t.isDisabled && !t.isPending
                })
            };
        return "href" in e && e.href ? (0, n.jsx)(u.Link, {
            ...f,
            className: h,
            children: y
        }) : (0, n.jsx)(d.Button, {
            ...f,
            className: h,
            children: y
        })
    }], 163165)
}, 877940, e => {
    "use strict";
    var t = e.i(837826);
    let a = (0, t.tv)({
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
        r = (0, t.tv)({
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
        n = (0, t.tv)({
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
    e.s(["buttonStyles", 0, a, "contentStyles", 0, n, "decorativeButtonStyles", 0, r])
}, 437062, e => {
    "use strict";
    var t = e.i(409781);
    let a = t.forwardRef((e, a) => {
        let {
            alt: r,
            color: n = "currentColor",
            size: o = "1em",
            weight: l = "regular",
            mirrored: s = !1,
            children: i,
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
            transform: s ? "scale(-1, 1)" : void 0,
            ...u
        }, !!r && t.createElement("title", null, r), i, d.get(l))
    });
    a.displayName = "SSRBase", e.s(["w", 0, a])
}, 866913, 49527, e => {
    "use strict";
    var t = e.i(437062),
        a = e.i(409781);
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
    n.displayName = "ArrowLeftIcon", e.s(["c", 0, n], 866913);
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
    l.displayName = "ArrowRightIcon", e.s(["c", 0, l], 49527)
}, 837826, e => {
    "use strict";
    let t, a, r, n;
    var o, l = /\s+/g,
        s = (...e) => {
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
        i = e => !1 === e ? "false" : !0 === e ? "true" : 0 === e ? "0" : e,
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
        c = (...e) => {
            let t = [];
            u(e, t);
            let a = [];
            for (let e = 0; e < t.length; e++) t[e] && a.push(t[e]);
            return a
        },
        g = (e, t) => {
            let a = {};
            for (let r in e) {
                let n = e[r];
                if (r in t) {
                    let e = t[r];
                    Array.isArray(n) || Array.isArray(e) ? a[r] = c(e, n) : "object" == typeof n && "object" == typeof e && n && e ? a[r] = g(n, e) : a[r] = e + " " + n
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
            set cachedTwMerge(value) {
                t = value
            },
            get cachedTwMergeConfig() {
                return a
            },
            set cachedTwMergeConfig(value) {
                a = value
            },
            get didTwMergeConfigChange() {
                return r
            },
            set didTwMergeConfigChange(value) {
                r = value
            },
            reset() {
                t = null, a = {}, r = !1
            }
        }),
        {
            createTV: p,
            tv: b
        } = (o = (...e) => t => s(e) || void 0, {
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
                }, h = a?.base ? s(a.base, e?.base) : e?.base, y = a?.variants && !d(a.variants) ? g(n, a.variants) : n, v = a?.defaultVariants && !d(a.defaultVariants) ? {
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
                let x = d(a?.slots),
                    w = d(r) ? {} : {
                        base: s(e?.base, x && a?.base),
                        ...r
                    },
                    E = x ? w : ((e, t) => {
                        for (let a in t)
                            if (Object.prototype.hasOwnProperty.call(t, a)) {
                                let r = t[a];
                                a in e ? e[a] = s(e[a], r) : e[a] = r
                            } return e
                    })({
                        ...a?.slots
                    }, d(w) ? {
                        base: e?.base
                    } : w),
                    C = d(a?.compoundVariants) ? l : c(a?.compoundVariants, l),
                    k = e => {
                        if (d(y) && d(r) && x) return o(h, e?.class, e?.className)(b);
                        if (C && !Array.isArray(C)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof C}`);
                        if (u && !Array.isArray(u)) throw TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof u}`);
                        let t = (t, a = y, r = null, n = null) => {
                                let o = a[t];
                                if (!o || d(o)) return null;
                                let l = n?.[t] ?? e?.[t];
                                if (null === l) return null;
                                let s = i(l);
                                if ("object" == typeof s) return null;
                                let u = v?.[t];
                                return o[(null != s ? s : i(u)) || "false"]
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
                            s = (e = [], t) => {
                                let a = [],
                                    r = e.length;
                                for (let n = 0; n < r; n++) {
                                    let {
                                        class: r,
                                        className: o,
                                        ...s
                                    } = e[n], i = !0, d = l(null, t);
                                    for (let e in s) {
                                        let t = s[e],
                                            a = d[e];
                                        if (Array.isArray(t)) {
                                            if (!t.includes(a)) {
                                                i = !1;
                                                break
                                            }
                                        } else {
                                            if ((null == t || !1 === t) && (null == a || !1 === a)) continue;
                                            if (a !== t) {
                                                i = !1;
                                                break
                                            }
                                        }
                                    }
                                    i && (r && a.push(r), o && a.push(o))
                                }
                                return a
                            },
                            c = e => {
                                let t = s(C, e);
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
                            g = e => {
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
                        if (!d(r) || !x) {
                            let e = {};
                            if ("object" == typeof E && !d(E))
                                for (let t in E) e[t] = e => {
                                    let r = c(e),
                                        n = g(e);
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
                        })(), s(C), e?.class, e?.className)(b)
                    };
                return k.variantKeys = (() => {
                    if (y && "object" == typeof y) return Object.keys(y)
                })(), k.extend = a, k.base = h, k.slots = E, k.variants = y, k.defaultVariants = v, k.compoundSlots = u, k.compoundVariants = C, k
            },
            createTV: e => (t, a) => n(t, a ? g(e, a) : e)
        });
    e.s(["tv", 0, b], 837826)
}]);

//# debugId=e38f5091-5c6f-553f-621c-08f16bd27541