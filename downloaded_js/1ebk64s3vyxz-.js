(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 27666, 870053, 522455, e => {
    "use strict";
    var t = e.i(467211),
        a = e.i(409781);
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
    let r = (0, a.createContext)(!1);

    function n(e) {
        let t = (t, n) => (0, a.useContext)(r) ? null : e(t, n);
        return t.displayName = e.displayName || e.name, (0, a.forwardRef)(t)
    }
    e.s(["Hidden", 0, function(e) {
        if ((0, a.useContext)(r)) return a.default.createElement(a.default.Fragment, null, e.children);
        let t = a.default.createElement(r.Provider, {
            value: !0
        }, e.children);
        return a.default.createElement("template", null, t)
    }, "createHideableComponent", 0, n, "useIsHidden", 0, function() {
        return (0, a.useContext)(r)
    }], 870053);
    let o = (0, a.createContext)({}),
        l = n(function(e, r) {
            [e, r] = (0, t.useContextProps)(e, r, o);
            let {
                elementType: n = "label",
                ...l
            } = e, i = t.dom[n];
            return a.default.createElement(i, {
                className: "react-aria-Label",
                ...l,
                ref: r
            })
        });
    e.s(["Label", 0, l, "LabelContext", 0, o], 522455);
    var i = e.i(679933),
        s = e.i(429305);
    e.i(961551), e.i(876728);
    let d = new Map,
        u = !1;
    try {
        u = "exceptZero" === new Intl.NumberFormat("de-DE", {
            signDisplay: "exceptZero"
        }).resolvedOptions().signDisplay
    } catch {}
    let c = !1;
    try {
        c = "unit" === new Intl.NumberFormat("de-DE", {
            style: "unit",
            unit: "degree"
        }).resolvedOptions().style
    } catch {}
    e.i(747922);
    let g = (0, a.createContext)(null);
    var m = e.i(248708),
        f = e.i(611017),
        p = e.i(147333),
        b = e.i(355770),
        h = e.i(823512);
    let y = (0, a.createContext)({}),
        v = n(function(e, r) {
            [e, r] = (0, t.useContextProps)(e, r, y);
            let n = e,
                {
                    isPending: o
                } = n,
                {
                    buttonProps: l,
                    isPressed: d
                } = (0, f.useButton)(e, r);
            l = function(e, t) {
                if (t) {
                    for (let t in e) t.startsWith("on") && !x.test(t) && (e[t] = void 0);
                    e.href = void 0, e.target = void 0
                }
                return e
            }(l, o);
            let {
                focusProps: u,
                isFocused: c,
                isFocusVisible: v
            } = (0, p.useFocusRing)(e), {
                hoverProps: w,
                isHovered: E
            } = (0, b.useHover)({
                ...e,
                isDisabled: e.isDisabled || o
            }), C = {
                isHovered: E,
                isPressed: (n.isPressed || d) && !o,
                isFocused: c,
                isFocusVisible: v,
                isDisabled: e.isDisabled || !1,
                isPending: o ?? !1
            }, j = (0, t.useRenderProps)({
                ...e,
                values: C,
                defaultClassName: "react-aria-Button"
            }), k = (0, h.useId)(l.id), P = (0, h.useId)(), M = l["aria-labelledby"];
            o && (M ? M = `${M} ${P}` : l["aria-label"] && (M = `${k} ${P}`));
            let A = (0, a.useRef)(o);
            (0, a.useEffect)(() => {
                let e = {
                    "aria-labelledby": M || k
                };
                !A.current && c && o ? (0, m.announce)(e, "assertive") : A.current && c && !o && (0, m.announce)(e, "assertive"), A.current = o
            }, [o, c, M, k]);
            let O = (0, i.filterDOMProps)(e, {
                global: !0
            });
            return delete O.onClick, a.default.createElement(t.dom.button, {
                ...(0, s.mergeProps)(O, j, l, u, w),
                type: "submit" === l.type && o ? "button" : l.type,
                id: k,
                ref: r,
                "aria-labelledby": M,
                slot: e.slot || void 0,
                "aria-disabled": o ? "true" : l["aria-disabled"],
                "data-disabled": e.isDisabled || void 0,
                "data-pressed": C.isPressed || void 0,
                "data-hovered": E || void 0,
                "data-focused": c || void 0,
                "data-pending": o || void 0,
                "data-focus-visible": v || void 0
            }, a.default.createElement(g.Provider, {
                value: {
                    id: P
                }
            }, j.children))
        }),
        x = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
    e.s(["Button", 0, v, "ButtonContext", 0, y], 27666)
}, 467211, e => {
    "use strict";
    e.i(913836);
    var t = e.i(429305),
        a = e.i(402801),
        r = e.i(409781),
        n = e.i(185559),
        o = e.i(838031);
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
        } = t, s = (0, r.useRef)(null), d = (0, r.useMemo)(() => (0, a.mergeRefs)(o, s), [o, s]);
        (0, n.useLayoutEffect)(() => {}, [e, l]);
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
            ref: s,
            ...d
        } = i(l, e.slot) || {}, u = (0, o.useObjectRef)((0, r.useMemo)(() => (0, a.mergeRefs)(n, s), [n, s])), c = (0, t.mergeProps)(d, e);
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
    }, "useSlot", 0, function(e = !0) {
        let [t, a] = (0, r.useState)(e), o = (0, r.useRef)(!1), l = (0, r.useCallback)(e => {
            o.current = !0, a(!!e)
        }, []);
        return (0, n.useLayoutEffect)(() => {
            o.current || a(!1)
        }, []), [l, t]
    }, "useSlottedContext", 0, i])
}, 825585, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(163165),
        r = e.i(94918),
        n = e.i(623295);
    e.s(["default", 0, e => {
        let {
            target: o = "_self",
            children: l,
            variant: i = "primary",
            href: s,
            icon: d,
            iconWeight: u = "regular",
            iconDirection: c = "right",
            size: g = "md",
            disabled: m,
            disableAnimation: f = !1,
            onClick: p,
            type: b = "button",
            ariaLabel: h,
            decorative: y,
            role: v,
            className: x,
            id: w,
            tabIndex: E,
            "aria-expanded": C,
            "aria-controls": j,
            "data-link-location": k,
            "data-link-id": P
        } = e, M = "string" == typeof d ? d ? (0, t.jsx)(n.default, {
            icon: d,
            size: "0.75rem",
            weight: u
        }) : null : d ?? null, A = !!M, O = h ?? (l ? void 0 : "string" == typeof d && d ? `${i} button with ${d} icon` : A ? `${i} button with icon` : `${i} button`), L = {
            iconLeft: "left" === c ? M ?? void 0 : void 0,
            iconRight: "right" === c ? M ?? void 0 : void 0
        }, H = {
            ...k && {
                "data-link-location": k
            },
            ...P && {
                "data-link-id": P
            }
        };
        return y ? (0, t.jsx)(a.Button, {
            decorative: !0,
            variant: i,
            size: g,
            ...L,
            disableAnimation: f || m,
            className: x,
            role: v,
            id: w,
            tabIndex: E,
            "aria-expanded": C,
            "aria-controls": j,
            ...h && {
                "aria-label": h
            },
            onClick: p,
            ...H,
            children: l
        }) : s ? (0, t.jsx)(a.Button, {
            variant: i,
            size: g,
            ...L,
            disableAnimation: f || m,
            href: s,
            target: o,
            isDisabled: m,
            onPress: p,
            ...O && {
                "aria-label": O
            },
            className: x,
            render: e => (0, t.jsx)(r.Link, {
                ...e,
                href: s,
                role: "button",
                id: w,
                tabIndex: E,
                "aria-expanded": C,
                "aria-controls": j,
                ...H
            }),
            children: l
        }) : (0, t.jsx)(a.Button, {
            variant: i,
            size: g,
            ...L,
            disableAnimation: f,
            isDisabled: m,
            type: b,
            onPress: p,
            id: w,
            "aria-expanded": C,
            "aria-controls": j,
            excludeFromTabOrder: -1 === E || void 0,
            ...O && {
                "aria-label": O
            },
            className: x,
            ...H,
            children: l
        })
    }])
}, 94918, e => {
    "use strict";
    var t = e.i(603500);
    let a = ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr", "vn"],
        {
            Link: r,
            redirect: n,
            usePathname: o,
            useRouter: l
        } = (0, t.createNavigation)({
            locales: a,
            localePrefix: "as-needed",
            defaultLocale: "en"
        });
    e.s(["Link", 0, r, "locales", 0, a, "redirect", 0, n, "usePathname", 0, o, "useRouter", 0, l])
}, 163165, e => {
    "use strict";
    var t = e.i(877940),
        a = e.i(194960),
        r = e.i(785328),
        n = e.i(27666),
        o = e.i(467211),
        l = e.i(279858),
        i = e.i(679933),
        s = e.i(429305),
        d = e.i(409781),
        u = e.i(147333),
        c = e.i(355770);
    let g = (0, d.createContext)(null),
        m = (0, d.forwardRef)(function(e, t) {
            [e, t] = (0, o.useContextProps)(e, t, g);
            let a = e.href && !e.isDisabled ? "a" : "span",
                {
                    linkProps: r,
                    isPressed: n
                } = (0, l.useLink)({
                    ...e,
                    elementType: a
                }, t),
                m = o.dom[a],
                {
                    hoverProps: f,
                    isHovered: p
                } = (0, c.useHover)(e),
                {
                    focusProps: b,
                    isFocused: h,
                    isFocusVisible: y
                } = (0, u.useFocusRing)(),
                v = (0, o.useRenderProps)({
                    ...e,
                    defaultClassName: "react-aria-Link",
                    values: {
                        isCurrent: !!e["aria-current"],
                        isDisabled: e.isDisabled || !1,
                        isPressed: n,
                        isHovered: p,
                        isFocused: h,
                        isFocusVisible: y
                    }
                }),
                x = (0, i.filterDOMProps)(e, {
                    global: !0
                });
            return delete x.onClick, d.default.createElement(m, {
                ref: t,
                slot: e.slot || void 0,
                ...(0, s.mergeProps)(x, v, r, f, b),
                "data-focused": h || void 0,
                "data-hovered": p || void 0,
                "data-pressed": n || void 0,
                "data-focus-visible": y || void 0,
                "data-current": !!e["aria-current"] || void 0,
                "data-disabled": e.isDisabled || void 0
            }, v.children)
        });
    e.s(["Button", 0, function(e) {
        let {
            variant: o,
            size: l,
            iconLeft: i,
            iconRight: s,
            disableAnimation: d = !1,
            decorative: u,
            children: c,
            className: g,
            ...f
        } = e, p = (0, a.isIconOnly)(c, i, s), b = i && !s ? "left" : s && !i ? "right" : "none";
        if (u) return (0, r.jsx)("span", {
            ...f,
            className: (0, t.decorativeButtonStyles)({
                variant: o,
                size: l,
                iconOnly: p,
                iconSide: b,
                className: g
            }),
            children: (0, a.renderButtonContent)({
                label: c,
                iconLeft: i,
                iconRight: s,
                animate: !d
            })
        });
        let h = e => (0, t.buttonStyles)({
                variant: o,
                size: l,
                iconOnly: p,
                iconSide: b,
                className: "function" == typeof g ? g(e) : g
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
        return "href" in e && e.href ? (0, r.jsx)(m, {
            ...f,
            className: h,
            children: y
        }) : (0, r.jsx)(n.Button, {
            ...f,
            className: h,
            children: y
        })
    }], 163165)
}, 877940, 866913, 49527, 194960, e => {
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
    e.s(["buttonStyles", 0, a, "contentStyles", 0, n, "decorativeButtonStyles", 0, r], 877940);
    var o = e.i(409781);
    let l = o.forwardRef((e, t) => {
        let {
            alt: a,
            color: r = "currentColor",
            size: n = "1em",
            weight: l = "regular",
            mirrored: i = !1,
            children: s,
            weights: d,
            ...u
        } = e;
        return o.createElement("svg", {
            ref: t,
            xmlns: "http://www.w3.org/2000/svg",
            width: n,
            height: n,
            fill: r,
            viewBox: "0 0 256 256",
            transform: i ? "scale(-1, 1)" : void 0,
            ...u
        }, !!a && o.createElement("title", null, a), s, d.get(l))
    });
    l.displayName = "SSRBase";
    let i = new Map([
            ["bold", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M228,128a12,12,0,0,1-12,12H69l51.52,51.51a12,12,0,0,1-17,17l-72-72a12,12,0,0,1,0-17l72-72a12,12,0,0,1,17,17L69,116H216A12,12,0,0,1,228,128Z"
            }))],
            ["duotone", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M112,56V200L40,128Z",
                opacity: "0.2"
            }), o.createElement("path", {
                d: "M216,120H120V56a8,8,0,0,0-13.66-5.66l-72,72a8,8,0,0,0,0,11.32l72,72A8,8,0,0,0,120,200V136h96a8,8,0,0,0,0-16ZM104,180.69,51.31,128,104,75.31Z"
            }))],
            ["fill", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M224,128a8,8,0,0,1-8,8H120v64a8,8,0,0,1-13.66,5.66l-72-72a8,8,0,0,1,0-11.32l72-72A8,8,0,0,1,120,56v64h96A8,8,0,0,1,224,128Z"
            }))],
            ["light", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M222,128a6,6,0,0,1-6,6H54.49l61.75,61.76a6,6,0,1,1-8.48,8.48l-72-72a6,6,0,0,1,0-8.48l72-72a6,6,0,0,1,8.48,8.48L54.49,122H216A6,6,0,0,1,222,128Z"
            }))],
            ["regular", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"
            }))],
            ["thin", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M220,128a4,4,0,0,1-4,4H49.66l65.17,65.17a4,4,0,0,1-5.66,5.66l-72-72a4,4,0,0,1,0-5.66l72-72a4,4,0,0,1,5.66,5.66L49.66,124H216A4,4,0,0,1,220,128Z"
            }))]
        ]),
        s = o.forwardRef((e, t) => o.createElement(l, {
            ref: t,
            ...e,
            weights: i
        }));
    s.displayName = "ArrowLeftIcon", e.s(["c", 0, s], 866913);
    let d = new Map([
            ["bold", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"
            }))],
            ["duotone", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M216,128l-72,72V56Z",
                opacity: "0.2"
            }), o.createElement("path", {
                d: "M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"
            }))],
            ["fill", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"
            }))],
            ["light", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"
            }))],
            ["regular", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"
            }))],
            ["thin", o.createElement(o.Fragment, null, o.createElement("path", {
                d: "M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"
            }))]
        ]),
        u = o.forwardRef((e, t) => o.createElement(l, {
            ref: t,
            ...e,
            weights: d
        }));
    u.displayName = "ArrowRightIcon", e.s(["c", 0, u], 49527);
    var c = e.i(785328);
    let g = ({
            children: e,
            className: t = ""
        }) => (0, c.jsx)("span", {
            className: `mango:grid mango:h-3 mango:w-3 mango:shrink-0 mango:place-items-center mango:text-sm ${t}`,
            children: e
        }),
        m = ({
            direction: e
        }) => (0, c.jsx)(g, {
            className: "mango:opacity-0 mango:transition-all mango:duration-300 mango:group-data-[hovered]/btn:opacity-100 mango:group-hover/btn:opacity-100 mango:group-hover-button:opacity-100",
            children: "left" === e ? (0, c.jsx)(s, {
                size: 12,
                "aria-hidden": !0
            }) : (0, c.jsx)(u, {
                size: 12,
                "aria-hidden": !0
            })
        }),
        f = ({
            icon: e
        }) => (0, c.jsx)("span", {
            className: "mango:h-3 mango:w-3 mango:overflow-hidden",
            children: (0, c.jsxs)("span", {
                className: "mango:flex mango:w-6 mango:-translate-x-3 mango:items-center mango:justify-center mango:transition-all mango:duration-300 mango:group-data-[hovered]/btn:translate-x-0 mango:group-hover/btn:translate-x-0 mango:group-hover-button:translate-x-0",
                children: [(0, c.jsx)(g, {
                    className: "mango:opacity-0 mango:transition-opacity mango:duration-300 mango:group-data-[hovered]/btn:opacity-100 mango:group-hover/btn:opacity-100 mango:group-hover-button:opacity-100",
                    children: e
                }), (0, c.jsx)(g, {
                    className: "mango:opacity-100 mango:transition-opacity mango:duration-300 mango:group-data-[hovered]/btn:opacity-0 mango:group-hover/btn:opacity-0 mango:group-hover-button:opacity-0",
                    children: e
                })]
            })
        });
    e.s(["isIconOnly", 0, (e, t, a) => !e && !!(t ?? a), "renderButtonContent", 0, function({
        label: e,
        iconLeft: t,
        iconRight: a,
        animate: r
    }) {
        if (t && a) return (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(g, {
                children: t
            }), e, (0, c.jsx)(g, {
                children: a
            })]
        });
        let o = t ?? a,
            l = t && !a ? "left" : "right",
            i = null;
        return o ? i = r ? (0, c.jsx)(f, {
            icon: o
        }) : (0, c.jsx)(g, {
            children: o
        }) : r && (i = (0, c.jsx)(m, {
            direction: l
        })), (0, c.jsxs)("span", {
            className: n({
                direction: l,
                slide: r && !o
            }),
            children: [e, i]
        })
    }], 194960)
}, 837826, e => {
    "use strict";
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
                }, h = a?.base ? i(a.base, e?.base) : e?.base, y = a?.variants && !d(a.variants) ? g(n, a.variants) : n, v = a?.defaultVariants && !d(a.defaultVariants) ? {
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
                        base: i(e?.base, x && a?.base),
                        ...r
                    },
                    E = x ? w : ((e, t) => {
                        for (let a in t)
                            if (Object.prototype.hasOwnProperty.call(t, a)) {
                                let r = t[a];
                                a in e ? e[a] = i(e[a], r) : e[a] = r
                            } return e
                    })({
                        ...a?.slots
                    }, d(w) ? {
                        base: e?.base
                    } : w),
                    C = d(a?.compoundVariants) ? l : c(a?.compoundVariants, l),
                    j = e => {
                        if (d(y) && d(r) && x) return o(h, e?.class, e?.className)(b);
                        if (C && !Array.isArray(C)) throw TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof C}`);
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
                            c = e => {
                                let t = i(C, e);
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
                        })(), i(C), e?.class, e?.className)(b)
                    };
                return j.variantKeys = (() => {
                    if (y && "object" == typeof y) return Object.keys(y)
                })(), j.extend = a, j.base = h, j.slots = E, j.variants = y, j.defaultVariants = v, j.compoundSlots = u, j.compoundVariants = C, j
            },
            createTV: e => (t, a) => n(t, a ? g(e, a) : e)
        });
    e.s(["tv", 0, b], 837826)
}]);