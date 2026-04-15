(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 291158, e => {
    "use strict";
    let t = e.i(623295).default;
    e.s(["default", 0, t])
}, 825585, 94918, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(145158),
        o = e.i(722978);
    let {
        Link: a,
        redirect: n,
        usePathname: s,
        useRouter: i
    } = (0, e.i(292949).createNavigation)({
        locales: ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"],
        localePrefix: "as-needed",
        defaultLocale: "en"
    });
    e.s(["Link", 0, a], 94918);
    var l = e.i(623295);
    let d = ({
            iconDirection: e
        }) => (0, t.jsx)(l.default, {
            icon: "left" === e ? "arrow-left" : "arrow-right",
            size: "12",
            className: "opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover/button:opacity-100"
        }),
        u = ({
            icon: e,
            iconWeight: r
        }) => (0, t.jsx)("span", {
            className: "h-3 w-3 overflow-hidden",
            children: (0, t.jsxs)("span", {
                className: "flex w-[24px] -translate-x-3 items-center justify-center transition-all duration-300 group-hover:translate-x-0 group-hover/button:translate-x-0",
                children: [(0, t.jsx)(l.default, {
                    icon: e ? `${e}` : "arrow-right",
                    size: "12",
                    className: "h-3 w-3 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover/button:opacity-100",
                    weight: r
                }), (0, t.jsx)(l.default, {
                    icon: e ? `${e}` : "arrow-right",
                    size: "12",
                    className: "h-3 w-3 shrink-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0 group-hover/button:opacity-0",
                    weight: r
                })]
            })
        });
    e.s(["default", 0, e => {
        let [n, s] = (0, r.useState)(!1), {
            target: i = "_self",
            children: c,
            variant: p = "primary",
            href: b,
            localePrefix: g,
            icon: h,
            iconWeight: m = "regular",
            iconDirection: f = "right",
            size: v = "md",
            disabled: y,
            disableAnimation: x = !1,
            onClick: w,
            type: k = "button",
            ariaLabel: P,
            as: C = "button",
            role: j,
            "data-link-location": N,
            "data-link-id": E
        } = e, S = P ?? ("string" == typeof c ? c : h ? `${p} button with ${h} icon` : `${p} button`), D = `
    focus-visible:before:content-['']
    focus-visible:before:absolute
    focus-visible:before:inset-[-0.25rem]
    focus-visible:before:rounded-full
    focus-visible:before:bg-transparent
    focus-visible:before:border
    focus-visible:before:border-2
    focus-visible:before:border-mango-blue-focus
    focus-visible:before:pointer-events-none
    focus-visible:before:z-10
    focus-visible:outline-hidden
  `, O = {
            hasIcon: {
                lg: `h-[3.125rem] ${!c?"aspect-square w-auto":"left"===f?"px-[2.25rem] pl-[2rem]":"px-[2.25rem] pr-[2rem]"}`,
                md: `h-[2.875rem] ${!c?"aspect-square w-auto":"left"===f?"px-[1.875rem] pl-[1.625rem]":"px-[1.875rem] pr-[1.625rem]"}`,
                sm: `h-[2.375rem] ${!c?"aspect-square w-auto":"left"===f?"px-[1.5rem] pl-[1.25rem]":"px-[1.5rem] pr-[1.25rem]"}`,
                xs: `h-[2rem] ${!c?"aspect-square w-auto":"left"===f?"px-[1.25rem] pl-[1rem]":"px-[1.25rem] pr-[1rem]"}`
            },
            noIcon: {
                lg: "h-[3.125rem] px-[2rem]",
                md: "h-[2.875rem] px-[1.625rem]",
                sm: "h-[2.375rem] px-[1.25rem]",
                xs: "h-[2rem] px-[1rem]"
            }
        }, $ = {
            primary: {
                default: "bg-mango-blue-500 text-white btn-primary-shadow-default",
                hover: "hover:bg-mango-blue-600 hover:shadow-transparent",
                groupHover: "group-hover/button:bg-mango-blue-600 group-hover/button:shadow-transparent",
                pressed: "hover:bg-mango-blue-700 btn-primary-shadow-pressed"
            },
            secondary: {
                default: "bg-mango-gray-50 dark:bg-mango-gray-800 text-mango-black dark:text-mango-white btn-secondary-shadow-default",
                hover: "hover:bg-mango-gray-100 hover:dark:bg-mango-gray-900 hover:shadow-transparent",
                groupHover: "group-hover/button:bg-mango-gray-100 group-hover/button:dark:bg-mango-gray-900 group-hover/button:shadow-transparent",
                pressed: "hover:bg-mango-gray-200 dark:hover:bg-mango-gray-950 btn-secondary-shadow-pressed"
            },
            ghost: {
                default: "bg-transparent text-mango-black dark:text-mango-white border border-transparent",
                hover: "hover:border-mango-black hover:dark:border-mango-white hover:shadow-transparent",
                groupHover: "group-hover/button:border-mango-black group-hover/button:dark:border-mango-white group-hover/button:shadow-transparent",
                pressed: "hover:border-mango-gray-300 hover:dark:border-mango-gray-600"
            },
            outline: {
                default: "bg-transparent text-mango-black border border-mango-gray-300 dark:border-mango-gray-700",
                hover: "hover:border-mango-gray-400 dark:hover:border-mango-gray-600 hover:shadow-transparent",
                groupHover: "group-hover/button:border-mango-gray-400 group-hover/button:dark:border-mango-gray-600 group-hover/button:shadow-transparent",
                pressed: "hover:border-mango-gray-500 dark:hover:border-mango-gray-700"
            },
            customOutlineRed: {
                default: "bg-transparent text-mango-black border border-red-300 dark:border-red-700",
                hover: "hover:border-red-400 dark:hover:border-red-600 hover:shadow-transparent",
                groupHover: "group-hover/button:border-red-400 group-hover/button:dark:border-red-600 group-hover/button:shadow-transparent",
                pressed: "hover:border-red-500 dark:hover:border-red-700"
            },
            customOutlineGreen: {
                default: "bg-transparent text-mango-black border border-green-400 dark:border-green-700",
                hover: "hover:border-green-500 dark:hover:border-green-600 hover:shadow-transparent",
                groupHover: "group-hover/button:border-green-500 group-hover/button:dark:border-green-600 group-hover/button:shadow-transparent",
                pressed: "hover:border-green-600 dark:hover:border-green-700"
            },
            customOutlineYellow: {
                default: "bg-transparent text-mango-black border border-yellow-300 dark:border-yellow-700",
                hover: "hover:border-yellow-400 dark:hover:border-yellow-600 hover:shadow-transparent",
                groupHover: "group-hover/button:border-yellow-400 group-hover/button:dark:border-yellow-600 group-hover/button:shadow-transparent",
                pressed: "hover:border-yellow-500 dark:hover:border-yellow-700"
            }
        }, H = (0, o.default)("relative flex items-center justify-center gap-2 rounded-full text-xs font-semibold font-sans tracking-[-0.01rem] whitespace-nowrap group w-fit transition-[box-shadow,background-color,color,border-color] duration-300 pointer-events-auto", D, "disabled:cursor-not-allowed disabled:opacity-40", O[h ? "hasIcon" : "noIcon"][v], $[p].default, !n && $[p].hover, !n && $[p].groupHover, n && $[p].pressed, e.className);
        if (b) return (0, t.jsx)(a, {
            href: b,
            role: "button",
            onMouseDown: () => s(!0),
            onMouseUp: () => s(!1),
            ...S && {
                "aria-label": S
            },
            target: i,
            type: k,
            className: H,
            "data-link-location": N,
            "data-link-id": E,
            localePrefix: g,
            children: (0, t.jsxs)("span", {
                className: (0, o.default)("flex items-center justify-center gap-2", "left" === f && "flex-row-reverse", y || x || h ? "" : "left" === f ? "-translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0" : "translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0", "transition-all duration-300"),
                children: [c, y || x ? h ? (0, t.jsx)(l.default, {
                    icon: h,
                    size: "0.75rem",
                    weight: m
                }) : null : h ? (0, t.jsx)(u, {
                    icon: h,
                    iconWeight: m
                }) : (0, t.jsx)(d, {
                    iconDirection: f
                })]
            })
        });
        let M = {
            className: H,
            disabled: y,
            onMouseDown: () => s(!0),
            onMouseUp: () => s(!1),
            onClick: w,
            role: j || ("div" === C ? "button" : void 0),
            ...P && {
                "aria-label": P
            },
            ...y && {
                "aria-disabled": !0
            },
            ...N && {
                "data-link-location": N
            },
            ...E && {
                "data-link-id": E
            }
        };
        return "button" === C && (M.type = k), (0, t.jsx)(C, {
            ...M,
            children: (0, t.jsxs)("span", {
                className: (0, o.default)("flex items-center justify-center gap-2", "left" === f && "flex-row-reverse", y || x || h ? "" : "left" === f ? "-translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0" : "translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0", "transition-all duration-300"),
                children: [c, y || x ? h ? (0, t.jsx)(l.default, {
                    icon: h,
                    size: "0.75rem",
                    weight: m
                }) : null : h ? (0, t.jsx)(u, {
                    icon: h,
                    iconWeight: m
                }) : (0, t.jsx)(d, {
                    iconDirection: f
                })]
            })
        })
    }], 825585)
}, 78070, e => {
    "use strict";
    let t = e.i(825585).default;
    e.s(["default", 0, t])
}, 294916, e => {
    "use strict";
    var t = e.i(145158);
    if ("u" > typeof HTMLTemplateElement) {
        let e = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild").get;
        Object.defineProperty(HTMLTemplateElement.prototype, "firstChild", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return this.dataset.reactAriaHidden ? this.content.firstChild : e.call(this)
            }
        })
    }
    let r = (0, t.createContext)(!1);

    function o(e) {
        if ((0, t.useContext)(r)) return t.default.createElement(t.default.Fragment, null, e.children);
        let o = t.default.createElement(r.Provider, {
            value: !0
        }, e.children);
        return t.default.createElement("template", {
            "data-react-aria-hidden": !0
        }, o)
    }

    function a(e) {
        let o = (o, a) => (0, t.useContext)(r) ? null : e(o, a);
        return o.displayName = e.displayName || e.name, (0, t.forwardRef)(o)
    }

    function n() {
        return (0, t.useContext)(r)
    }
    e.s(["Hidden", () => o, "createHideableComponent", () => a, "useIsHidden", () => n])
}, 400200, e => {
    "use strict";
    var t = e.i(191695),
        r = e.i(224691),
        o = e.i(892164),
        a = e.i(787918),
        n = e.i(145158);
    let s = Symbol("default");

    function i({
        values: e,
        children: t
    }) {
        for (let [r, o] of e) t = n.default.createElement(r.Provider, {
            value: o
        }, t);
        return t
    }

    function l(e) {
        let {
            className: t,
            style: r,
            children: o,
            defaultClassName: a,
            defaultChildren: s,
            defaultStyle: i,
            values: l
        } = e;
        return (0, n.useMemo)(() => {
            let e, n, d;
            return e = "function" == typeof t ? t({
                ...l,
                defaultClassName: a
            }) : t, n = "function" == typeof r ? r({
                ...l,
                defaultStyle: i || {}
            }) : r, d = "function" == typeof o ? o({
                ...l,
                defaultChildren: s
            }) : null == o ? s : o, {
                className: null != e ? e : a,
                style: n || i ? {
                    ...i,
                    ...n
                } : void 0,
                children: null != d ? d : s,
                "data-rac": ""
            }
        }, [t, r, o, a, s, i, l])
    }

    function d(e, t) {
        return r => t("function" == typeof e ? e(r) : e, r)
    }

    function u(e, t) {
        let r = (0, n.useContext)(e);
        if (null === t) return null;
        if (r && "object" == typeof r && "slots" in r && r.slots) {
            let e = t || s;
            if (!r.slots[e]) {
                let e = new Intl.ListFormat().format(Object.keys(r.slots).map(e => `"${e}"`)),
                    o = t ? `Invalid slot "${t}".` : "A slot prop is required.";
                throw Error(`${o} Valid slot names are ${e}.`)
            }
            return r.slots[e]
        }
        return r
    }

    function c(e, a, s) {
        let {
            ref: i,
            ...l
        } = u(s, e.slot) || {}, d = (0, t.useObjectRef)((0, n.useMemo)(() => (0, r.mergeRefs)(a, i), [a, i])), c = (0, o.mergeProps)(l, e);
        return "style" in l && l.style && "style" in e && e.style && ("function" == typeof l.style || "function" == typeof e.style ? c.style = t => {
            let r = "function" == typeof l.style ? l.style(t) : l.style,
                o = {
                    ...t.defaultStyle,
                    ...r
                },
                a = "function" == typeof e.style ? e.style({
                    ...t,
                    defaultStyle: o
                }) : e.style;
            return {
                ...o,
                ...a
            }
        } : c.style = {
            ...l.style,
            ...e.style
        }), [c, d]
    }

    function p(e = !0) {
        let [t, r] = (0, n.useState)(e), o = (0, n.useRef)(!1), s = (0, n.useCallback)(e => {
            o.current = !0, r(!!e)
        }, []);
        return (0, a.useLayoutEffect)(() => {
            o.current || r(!1)
        }, []), [s, t]
    }

    function b(e) {
        let t = /^(data-.*)$/,
            r = {};
        for (let o in e) t.test(o) || (r[o] = e[o]);
        return r
    }
    e.s(["DEFAULT_SLOT", () => s, "Provider", () => i, "composeRenderProps", () => d, "removeDataAttributes", () => b, "useContextProps", () => c, "useRenderProps", () => l, "useSlot", () => p, "useSlottedContext", () => u])
}, 745509, 346479, e => {
    "use strict";
    var t = e.i(400200),
        r = e.i(294916),
        o = e.i(145158);
    let a = (0, o.createContext)({});
    e.s(["LabelContext", () => a], 346479);
    var n = e.i(919892),
        s = (e.i(790054), e.i(892164));
    e.i(465532), e.i(706952);
    let i = new Map,
        l = !1;
    try {
        l = "exceptZero" === new Intl.NumberFormat("de-DE", {
            signDisplay: "exceptZero"
        }).resolvedOptions().signDisplay
    } catch {}
    let d = !1;
    try {
        d = "unit" === new Intl.NumberFormat("de-DE", {
            style: "unit",
            unit: "degree"
        }).resolvedOptions().style
    } catch {}
    let u = (0, o.createContext)(null);
    var c = e.i(776955),
        p = e.i(77999),
        b = e.i(379394),
        g = e.i(294845),
        h = e.i(195912);
    let m = new Set(["form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "name", "value"]),
        f = (0, o.createContext)({}),
        v = (0, r.createHideableComponent)(function(e, r) {
            var a;
            [e, r] = (0, t.useContextProps)(e, r, f);
            let i = ((a = e).isPending && (a.onPress = void 0, a.onPressStart = void 0, a.onPressEnd = void 0, a.onPressChange = void 0, a.onPressUp = void 0, a.onKeyDown = void 0, a.onKeyUp = void 0, a.onClick = void 0, a.href = void 0), e = a),
                {
                    isPending: l
                } = i,
                {
                    buttonProps: d,
                    isPressed: v
                } = (0, p.useButton)(e, r),
                {
                    focusProps: y,
                    isFocused: x,
                    isFocusVisible: w
                } = (0, b.useFocusRing)(e),
                {
                    hoverProps: k,
                    isHovered: P
                } = (0, g.useHover)({
                    ...e,
                    isDisabled: e.isDisabled || l
                }),
                C = {
                    isHovered: P,
                    isPressed: (i.isPressed || v) && !l,
                    isFocused: x,
                    isFocusVisible: w,
                    isDisabled: e.isDisabled || !1,
                    isPending: null != l && l
                },
                j = (0, t.useRenderProps)({
                    ...e,
                    values: C,
                    defaultClassName: "react-aria-Button"
                }),
                N = (0, h.useId)(d.id),
                E = (0, h.useId)(),
                S = d["aria-labelledby"];
            l && (S ? S = `${S} ${E}` : d["aria-label"] && (S = `${N} ${E}`));
            let D = (0, o.useRef)(l);
            return (0, o.useEffect)(() => {
                let e = {
                    "aria-labelledby": S || N
                };
                !D.current && x && l ? (0, c.announce)(e, "assertive") : D.current && x && !l && (0, c.announce)(e, "assertive"), D.current = l
            }, [l, x, S, N]), o.default.createElement("button", {
                ...(0, n.filterDOMProps)(e, {
                    propNames: m
                }),
                ...(0, s.mergeProps)(d, y, k),
                ...j,
                type: "submit" === d.type && l ? "button" : d.type,
                id: N,
                ref: r,
                "aria-labelledby": S,
                slot: e.slot || void 0,
                "aria-disabled": l ? "true" : d["aria-disabled"],
                "data-disabled": e.isDisabled || void 0,
                "data-pressed": C.isPressed || void 0,
                "data-hovered": P || void 0,
                "data-focused": x || void 0,
                "data-pending": l || void 0,
                "data-focus-visible": w || void 0
            }, o.default.createElement(u.Provider, {
                value: {
                    id: E
                }
            }, j.children))
        });
    e.s(["Button", () => v, "ButtonContext", () => f], 745509)
}, 639682, e => {
    "use strict";
    var t = e.i(145158);
    (0, t.createContext)(null), (0, t.createContext)(null), (0, t.createContext)(null), (0, t.createContext)(null), (0, t.createContext)(null);
    let r = (0, t.createContext)({});
    e.s(["HeadingContext", () => r])
}, 321950, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(145158);
    let o = (0, r.createContext)({});
    e.s(["GenesisSessionProvider", 0, ({
        children: e
    }) => {
        let [a, n] = (0, r.useState)({
            ...JSON.parse(sessionStorage.getItem("UNITY_SESSION") || "{}")
        });
        return (0, t.jsx)(o.Provider, {
            value: {
                genesisSession: a,
                setGenesisSession: n
            },
            children: e
        })
    }, "useGenesisSession", 0, () => (0, r.useContext)(o)])
}, 155708, e => {
    e.v({
        id: "google-analytics",
        description: "Install a Google Analytics tag on your website",
        website: "https://analytics.google.com/analytics/web/",
        scripts: [{
            url: "https://www.googletagmanager.com/gtag/js",
            params: ["id"],
            strategy: "worker",
            location: "head",
            action: "append"
        }, {
            code: "window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag('js',new Date());gtag('config','${args.id}')",
            strategy: "worker",
            location: "head",
            action: "append"
        }]
    })
}, 681171, e => {
    e.v({
        id: "google-maps-embed",
        description: "Embed a Google Maps embed on your webpage",
        website: "https://developers.google.com/maps/documentation/embed/get-started",
        html: {
            element: "iframe",
            attributes: {
                loading: "lazy",
                src: {
                    url: "https://www.google.com/maps/embed/v1/place",
                    slugParam: "mode",
                    params: ["key", "q", "center", "zoom", "maptype", "language", "region"]
                },
                referrerpolicy: "no-referrer-when-downgrade",
                frameborder: "0",
                style: "border:0",
                allowfullscreen: !0,
                width: null,
                height: null
            }
        }
    })
}, 861002, e => {
    e.v({
        id: "youtube-embed",
        description: "Embed a YouTube embed on your webpage.",
        website: "https://github.com/paulirish/lite-youtube-embed",
        html: {
            element: "lite-youtube",
            attributes: {
                videoid: null,
                playlabel: null
            }
        },
        stylesheets: ["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],
        scripts: [{
            url: "https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js",
            strategy: "idle",
            location: "head",
            action: "append"
        }]
    })
}, 747811, 932839, e => {
    "use strict";
    var t = e.i(784728);

    function r(e, r) {
        return (0, t.createMotionComponent)(e, r)
    }
    let o = r("div"),
        a = r("p"),
        n = r("span");
    e.s(["MotionDiv", () => o, "MotionP", () => a, "MotionSpan", () => n], 932839), e.s(["div", () => o], 747811)
}, 121090, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(749583),
        o = e.i(634853);
    e.s(["default", 0, () => {
        let e = (0, o.usePathname)();
        return (0, t.jsxs)("div", {
            className: "fixed bottom-0 z-50 flex h-[60px] w-full items-center bg-[white] bg-orange-100 px-5",
            children: [(0, t.jsx)("div", {
                className: "flex flex-1 items-center",
                children: (0, t.jsxs)("h4", {
                    className: "",
                    children: ["You are in ", (0, t.jsx)("b", {
                        children: "Draft Mode"
                    }), ", your changes will be live once you publish them, be cautious."]
                })
            }), (0, t.jsx)(r.default, {
                className: "rounded-sm text-white",
                href: `/api/exit-draft?destination=${e}`,
                prefetch: !1,
                children: "Exit Draft Mode"
            })]
        })
    }])
}, 108051, e => {
    "use strict";
    var t = e.i(145158),
        r = e.i(634853);
    let o = "https://api2.amplitude.com/2/httpapi";

    function a() {
        let e = (0, r.usePathname)();
        return (0, t.useEffect)(() => {
            s(e)
        }, [e]), null
    }

    function n() {
        let e = document.cookie.split("; ").find(e => e.startsWith("experiment_exposure="));
        if (e) try {
            return JSON.parse(decodeURIComponent(e.split("=")[1]))
        } catch (e) {
            console.error("Error parsing experiment cookie:", e);
            return
        }
    }

    function s(e) {
        let t = n();
        if (t)
            for (let {
                    key: r,
                    variant: o,
                    deviceId: a,
                    userId: n
                }
                of t[e] || []) r && o && (a || n) && i(r, o, a, n)
    }

    function i(e, t, r, a) {
        e && t && (r || a) && fetch(o, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                api_key: "a331ddf18d0a0ba0070793c7e48f7a2a",
                events: [{
                    event_type: "$exposure",
                    ...a && {
                        user_id: a
                    },
                    ...r && {
                        device_id: r
                    },
                    event_properties: {
                        flag_key: e,
                        variant: t
                    }
                }]
            })
        }).then(e => (e.ok || console.warn("Exposure event failed", e.statusText), e.json())).catch(e => {
            console.warn("Error setting exposure event", e)
        })
    }
    e.s(["AMPLITUDE_ENDPOINT", 0, o, "default", () => a, "getExperimentFromCookie", () => n, "sendExposureEvent", () => i, "trackExposureOnPageView", () => s])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3ddd3ff0-798e-5bfe-a80a-907151e1ba95")
    } catch (e) {}
}();
//# debugId=3ddd3ff0-798e-5bfe-a80a-907151e1ba95