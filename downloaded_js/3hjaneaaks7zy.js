(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 27666, 467211, 870053, 522455, e => {
    "use strict";
    var t = e.i(429305),
        a = e.i(402801),
        r = e.i(409781),
        n = e.i(185559),
        o = e.i(838031);
    let l = Symbol("default");

    function i(e) {
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
    }

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

    function d(e, n, l) {
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
    }

    function u(e, t, o) {
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
    let c = {},
        g = new Proxy({}, {
            get(e, t) {
                if ("string" != typeof t) return;
                let a = c[t];
                return a || (a = (0, r.forwardRef)(u.bind(null, t)), c[t] = a), a
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
    }, "dom", 0, g, "removeDataAttributes", 0, function(e) {
        let t = /^(data-.*)$/,
            a = {};
        for (let r in e) t.test(r) || (a[r] = e[r]);
        return a
    }, "useContextProps", 0, d, "useRenderProps", 0, i, "useSlot", 0, function(e = !0) {
        let [t, a] = (0, r.useState)(e), o = (0, r.useRef)(!1), l = (0, r.useCallback)(e => {
            o.current = !0, a(!!e)
        }, []);
        return (0, n.useLayoutEffect)(() => {
            o.current || a(!1)
        }, []), [l, t]
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
    let m = (0, r.createContext)(!1);

    function f(e) {
        let t = (t, a) => (0, r.useContext)(m) ? null : e(t, a);
        return t.displayName = e.displayName || e.name, (0, r.forwardRef)(t)
    }
    e.s(["Hidden", 0, function(e) {
        if ((0, r.useContext)(m)) return r.default.createElement(r.default.Fragment, null, e.children);
        let t = r.default.createElement(m.Provider, {
            value: !0
        }, e.children);
        return r.default.createElement("template", null, t)
    }, "createHideableComponent", 0, f, "useIsHidden", 0, function() {
        return (0, r.useContext)(m)
    }], 870053);
    let p = (0, r.createContext)({}),
        b = f(function(e, t) {
            [e, t] = d(e, t, p);
            let {
                elementType: a = "label",
                ...n
            } = e, o = g[a];
            return r.default.createElement(o, {
                className: "react-aria-Label",
                ...n,
                ref: t
            })
        });
    e.s(["Label", 0, b, "LabelContext", 0, p], 522455);
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
    let w = (0, r.createContext)(null);
    var E = e.i(248708),
        j = e.i(611017),
        k = e.i(147333),
        C = e.i(355770),
        M = e.i(823512);
    let A = (0, r.createContext)({}),
        P = f(function(e, a) {
            [e, a] = d(e, a, A);
            let n = e,
                {
                    isPending: o
                } = n,
                {
                    buttonProps: l,
                    isPressed: s
                } = (0, j.useButton)(e, a);
            l = function(e, t) {
                if (t) {
                    for (let t in e) t.startsWith("on") && !O.test(t) && (e[t] = void 0);
                    e.href = void 0, e.target = void 0
                }
                return e
            }(l, o);
            let {
                focusProps: u,
                isFocused: c,
                isFocusVisible: m
            } = (0, k.useFocusRing)(e), {
                hoverProps: f,
                isHovered: p
            } = (0, C.useHover)({
                ...e,
                isDisabled: e.isDisabled || o
            }), b = {
                isHovered: p,
                isPressed: (n.isPressed || s) && !o,
                isFocused: c,
                isFocusVisible: m,
                isDisabled: e.isDisabled || !1,
                isPending: o ?? !1
            }, y = i({
                ...e,
                values: b,
                defaultClassName: "react-aria-Button"
            }), v = (0, M.useId)(l.id), x = (0, M.useId)(), P = l["aria-labelledby"];
            o && (P ? P = `${P} ${x}` : l["aria-label"] && (P = `${v} ${x}`));
            let L = (0, r.useRef)(o);
            (0, r.useEffect)(() => {
                let e = {
                    "aria-labelledby": P || v
                };
                !L.current && c && o ? (0, E.announce)(e, "assertive") : L.current && c && !o && (0, E.announce)(e, "assertive"), L.current = o
            }, [o, c, P, v]);
            let H = (0, h.filterDOMProps)(e, {
                global: !0
            });
            return delete H.onClick, r.default.createElement(g.button, {
                ...(0, t.mergeProps)(H, y, l, u, f),
                type: "submit" === l.type && o ? "button" : l.type,
                id: v,
                ref: a,
                "aria-labelledby": P,
                slot: e.slot || void 0,
                "aria-disabled": o ? "true" : l["aria-disabled"],
                "data-disabled": e.isDisabled || void 0,
                "data-pressed": b.isPressed || void 0,
                "data-hovered": p || void 0,
                "data-focused": c || void 0,
                "data-pending": o || void 0,
                "data-focus-visible": m || void 0
            }, r.default.createElement(w.Provider, {
                value: {
                    id: x
                }
            }, y.children))
        }),
        O = /Focus|Blur|Hover|Pointer(Enter|Leave|Over|Out)|Mouse(Enter|Leave|Over|Out)/;
    e.s(["Button", 0, P, "ButtonContext", 0, A], 27666)
}, 825585, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(877940),
        r = e.i(194960),
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

    function f(e) {
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
        } = e, p = (0, r.isIconOnly)(c, i, s), b = i && !s ? "left" : s && !i ? "right" : "none";
        if (u) return (0, t.jsx)("span", {
            ...f,
            className: (0, a.decorativeButtonStyles)({
                variant: o,
                size: l,
                iconOnly: p,
                iconSide: b,
                className: g
            }),
            children: (0, r.renderButtonContent)({
                label: c,
                iconLeft: i,
                iconRight: s,
                animate: !d
            })
        });
        let h = e => (0, a.buttonStyles)({
                variant: o,
                size: l,
                iconOnly: p,
                iconSide: b,
                className: "function" == typeof g ? g(e) : g
            }),
            y = e => {
                let t = e ?? {};
                return (0, r.renderButtonContent)({
                    label: "function" == typeof c ? c(e) : c,
                    iconLeft: i,
                    iconRight: s,
                    animate: !d && !t.isDisabled && !t.isPending
                })
            };
        return "href" in e && e.href ? (0, t.jsx)(m, {
            ...f,
            className: h,
            children: y
        }) : (0, t.jsx)(n.Button, {
            ...f,
            className: h,
            children: y
        })
    }
    var p = e.i(94918),
        b = e.i(623295);
    e.s(["default", 0, e => {
        let {
            target: a = "_self",
            children: r,
            variant: n = "primary",
            href: o,
            icon: l,
            iconWeight: i = "regular",
            iconDirection: s = "right",
            size: d = "md",
            disabled: u,
            disableAnimation: c = !1,
            onClick: g,
            type: m = "button",
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
        } = e, A = "string" == typeof l ? l ? (0, t.jsx)(b.default, {
            icon: l,
            size: "0.75rem",
            weight: i
        }) : null : l ?? null, P = !!A, O = h ?? (r ? void 0 : "string" == typeof l && l ? `${n} button with ${l} icon` : P ? `${n} button with icon` : `${n} button`), L = {
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
        return y ? (0, t.jsx)(f, {
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
            onClick: g,
            ...H,
            children: r
        }) : o ? (0, t.jsx)(f, {
            variant: n,
            size: d,
            ...L,
            disableAnimation: c || u,
            href: o,
            target: a,
            isDisabled: u,
            onPress: g,
            ...O && {
                "aria-label": O
            },
            className: x,
            render: e => (0, t.jsx)(p.Link, {
                ...e,
                href: o,
                role: "button",
                id: w,
                tabIndex: E,
                "aria-expanded": j,
                "aria-controls": k,
                ...H
            }),
            children: r
        }) : (0, t.jsx)(f, {
            variant: n,
            size: d,
            ...L,
            disableAnimation: c,
            isDisabled: u,
            type: m,
            onPress: g,
            id: w,
            "aria-expanded": j,
            "aria-controls": k,
            excludeFromTabOrder: -1 === E || void 0,
            ...O && {
                "aria-label": O
            },
            className: x,
            ...H,
            children: r
        })
    }], 825585)
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
}, 877940, 837826, 194960, e => {
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
                    j = d(a?.compoundVariants) ? l : c(a?.compoundVariants, l),
                    k = e => {
                        if (d(y) && d(r) && x) return o(h, e?.class, e?.className)(b);
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
                            c = e => {
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
                        })(), i(j), e?.class, e?.className)(b)
                    };
                return k.variantKeys = (() => {
                    if (y && "object" == typeof y) return Object.keys(y)
                })(), k.extend = a, k.base = h, k.slots = E, k.variants = y, k.defaultVariants = v, k.compoundSlots = u, k.compoundVariants = j, k
            },
            createTV: e => (t, a) => n(t, a ? g(e, a) : e)
        });
    e.s(["tv", 0, b], 837826);
    let h = b({
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
        y = b({
            extend: h,
            variants: {
                variant: {
                    primary: "mango:hover:bg-blue-600 mango:group-hover-button:bg-blue-600",
                    secondary: "mango:hover:bg-gray-100 mango:group-hover-button:bg-gray-100 mango:dark:hover:bg-gray-900 mango:dark:group-hover-button:bg-gray-900",
                    outline: "mango:hover:border-gray-400 mango:group-hover-button:border-gray-400 mango:dark:hover:border-gray-600 mango:dark:group-hover-button:border-gray-600",
                    ghost: "mango:hover:border-black mango:group-hover-button:border-black mango:dark:hover:border-white mango:dark:group-hover-button:border-white"
                }
            }
        }),
        v = b({
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
    e.s(["buttonStyles", 0, h, "contentStyles", 0, v, "decorativeButtonStyles", 0, y], 877940);
    var x = e.i(409781);
    let w = x.forwardRef((e, t) => {
        let {
            alt: a,
            color: r = "currentColor",
            size: n = "1em",
            weight: o = "regular",
            mirrored: l = !1,
            children: i,
            weights: s,
            ...d
        } = e;
        return x.createElement("svg", {
            ref: t,
            xmlns: "http://www.w3.org/2000/svg",
            width: n,
            height: n,
            fill: r,
            viewBox: "0 0 256 256",
            transform: l ? "scale(-1, 1)" : void 0,
            ...d
        }, !!a && x.createElement("title", null, a), i, s.get(o))
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
    var M = e.i(785328);
    let A = ({
            children: e,
            className: t = ""
        }) => (0, M.jsx)("span", {
            className: `mango:grid mango:h-3 mango:w-3 mango:shrink-0 mango:place-items-center mango:text-sm ${t}`,
            children: e
        }),
        P = ({
            direction: e
        }) => (0, M.jsx)(A, {
            className: "mango:opacity-0 mango:transition-all mango:duration-300 mango:group-data-[hovered]/btn:opacity-100 mango:group-hover/btn:opacity-100 mango:group-hover-button:opacity-100",
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
            className: "mango:h-3 mango:w-3 mango:overflow-hidden",
            children: (0, M.jsxs)("span", {
                className: "mango:flex mango:w-6 mango:-translate-x-3 mango:items-center mango:justify-center mango:transition-all mango:duration-300 mango:group-data-[hovered]/btn:translate-x-0 mango:group-hover/btn:translate-x-0 mango:group-hover-button:translate-x-0",
                children: [(0, M.jsx)(A, {
                    className: "mango:opacity-0 mango:transition-opacity mango:duration-300 mango:group-data-[hovered]/btn:opacity-100 mango:group-hover/btn:opacity-100 mango:group-hover-button:opacity-100",
                    children: e
                }), (0, M.jsx)(A, {
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
        if (t && a) return (0, M.jsxs)(M.Fragment, {
            children: [(0, M.jsx)(A, {
                children: t
            }), e, (0, M.jsx)(A, {
                children: a
            })]
        });
        let n = t ?? a,
            o = t && !a ? "left" : "right",
            l = null;
        return n ? l = r ? (0, M.jsx)(O, {
            icon: n
        }) : (0, M.jsx)(A, {
            children: n
        }) : r && (l = (0, M.jsx)(P, {
            direction: o
        })), (0, M.jsxs)("span", {
            className: v({
                direction: o,
                slide: r && !n
            }),
            children: [e, l]
        })
    }], 194960)
}]);