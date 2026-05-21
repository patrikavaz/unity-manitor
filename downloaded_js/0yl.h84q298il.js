(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 825585, 94918, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931),
        s = e.i(722978);
    let {
        Link: i,
        redirect: n,
        usePathname: o,
        useRouter: a
    } = (0, e.i(917675).createNavigation)({
        locales: ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"],
        localePrefix: "as-needed",
        defaultLocale: "en"
    });
    e.s(["Link", 0, i], 94918);
    var u = e.i(623295);
    let l = ({
            iconDirection: e
        }) => (0, t.jsx)(u.default, {
            icon: "left" === e ? "arrow-left" : "arrow-right",
            size: "12",
            className: "opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover/button:opacity-100"
        }),
        c = ({
            icon: e,
            iconWeight: r
        }) => (0, t.jsx)("span", {
            className: "h-3 w-3 overflow-hidden",
            children: (0, t.jsxs)("span", {
                className: "flex w-[24px] -translate-x-3 items-center justify-center transition-all duration-300 group-hover:translate-x-0 group-hover/button:translate-x-0",
                children: [(0, t.jsx)(u.default, {
                    icon: e ? `${e}` : "arrow-right",
                    size: "12",
                    className: "h-3 w-3 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover/button:opacity-100",
                    weight: r
                }), (0, t.jsx)(u.default, {
                    icon: e ? `${e}` : "arrow-right",
                    size: "12",
                    className: "h-3 w-3 shrink-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0 group-hover/button:opacity-0",
                    weight: r
                })]
            })
        });
    e.s(["default", 0, e => {
        let [n, o] = (0, r.useState)(!1), {
            target: a = "_self",
            children: d,
            variant: h = "primary",
            href: p,
            localePrefix: f,
            icon: v,
            iconWeight: y = "regular",
            iconDirection: b = "right",
            size: g = "md",
            disabled: m,
            disableAnimation: w = !1,
            onClick: x,
            type: S = "button",
            ariaLabel: C,
            as: P = "button",
            role: k,
            "data-link-location": O,
            "data-link-id": T
        } = e, j = C ?? ("string" == typeof d ? d : v ? `${h} button with ${v} icon` : `${h} button`), F = `
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
  `, E = {
            hasIcon: {
                lg: `h-[3.125rem] ${!d?"aspect-square w-auto":"left"===b?"px-[2.25rem] pl-[2rem]":"px-[2.25rem] pr-[2rem]"}`,
                md: `h-[2.875rem] ${!d?"aspect-square w-auto":"left"===b?"px-[1.875rem] pl-[1.625rem]":"px-[1.875rem] pr-[1.625rem]"}`,
                sm: `h-[2.375rem] ${!d?"aspect-square w-auto":"left"===b?"px-[1.5rem] pl-[1.25rem]":"px-[1.5rem] pr-[1.25rem]"}`,
                xs: `h-[2rem] ${!d?"aspect-square w-auto":"left"===b?"px-[1.25rem] pl-[1rem]":"px-[1.25rem] pr-[1rem]"}`
            },
            noIcon: {
                lg: "h-[3.125rem] px-[2rem]",
                md: "h-[2.875rem] px-[1.625rem]",
                sm: "h-[2.375rem] px-[1.25rem]",
                xs: "h-[2rem] px-[1rem]"
            }
        }, D = {
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
        }, M = (0, s.default)("relative flex items-center justify-center gap-2 rounded-full text-xs font-semibold font-sans tracking-[-0.01rem] whitespace-nowrap group w-fit transition-[box-shadow,background-color,color,border-color] duration-300 pointer-events-auto", F, "disabled:cursor-not-allowed disabled:opacity-40", E[v ? "hasIcon" : "noIcon"][g], D[h].default, !n && D[h].hover, !n && D[h].groupHover, n && D[h].pressed, e.className);
        if (p) return (0, t.jsx)(i, {
            href: p,
            role: "button",
            onMouseDown: () => o(!0),
            onMouseUp: () => o(!1),
            ...j && {
                "aria-label": j
            },
            target: a,
            type: S,
            className: M,
            "data-link-location": O,
            "data-link-id": T,
            localePrefix: f,
            children: (0, t.jsxs)("span", {
                className: (0, s.default)("flex items-center justify-center gap-2", "left" === b && "flex-row-reverse", m || w || v ? "" : "left" === b ? "-translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0" : "translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0", "transition-all duration-300"),
                children: [d, m || w ? v ? (0, t.jsx)(u.default, {
                    icon: v,
                    size: "0.75rem",
                    weight: y
                }) : null : v ? (0, t.jsx)(c, {
                    icon: v,
                    iconWeight: y
                }) : (0, t.jsx)(l, {
                    iconDirection: b
                })]
            })
        });
        let q = {
            className: M,
            disabled: m,
            onMouseDown: () => o(!0),
            onMouseUp: () => o(!1),
            onClick: x,
            role: k || ("div" === P ? "button" : void 0),
            ...C && {
                "aria-label": C
            },
            ...m && {
                "aria-disabled": !0
            },
            ...O && {
                "data-link-location": O
            },
            ...T && {
                "data-link-id": T
            }
        };
        return "button" === P && (q.type = S), (0, t.jsx)(P, {
            ...q,
            children: (0, t.jsxs)("span", {
                className: (0, s.default)("flex items-center justify-center gap-2", "left" === b && "flex-row-reverse", m || w || v ? "" : "left" === b ? "-translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0" : "translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0", "transition-all duration-300"),
                children: [d, m || w ? v ? (0, t.jsx)(u.default, {
                    icon: v,
                    size: "0.75rem",
                    weight: y
                }) : null : v ? (0, t.jsx)(c, {
                    icon: v,
                    iconWeight: y
                }) : (0, t.jsx)(l, {
                    iconDirection: b
                })]
            })
        })
    }], 825585)
}, 78070, e => {
    "use strict";
    let t = e.i(825585).default;
    e.s(["default", 0, t])
}, 143822, e => {
    "use strict";
    var t = e.i(3931);
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
    e.s(["Hidden", 0, function(e) {
        if ((0, t.useContext)(r)) return t.default.createElement(t.default.Fragment, null, e.children);
        let s = t.default.createElement(r.Provider, {
            value: !0
        }, e.children);
        return t.default.createElement("template", {
            "data-react-aria-hidden": !0
        }, s)
    }, "createHideableComponent", 0, function(e) {
        let s = (s, i) => (0, t.useContext)(r) ? null : e(s, i);
        return s.displayName = e.displayName || e.name, (0, t.forwardRef)(s)
    }, "useIsHidden", 0, function() {
        return (0, t.useContext)(r)
    }])
}, 162696, e => {
    "use strict";
    var t = e.i(166010),
        r = e.i(356855),
        s = e.i(604082),
        i = e.i(237483),
        n = e.i(3931);
    let o = Symbol("default");

    function a(e, t) {
        let r = (0, n.useContext)(e);
        if (null === t) return null;
        if (r && "object" == typeof r && "slots" in r && r.slots) {
            let e = t || o;
            if (!r.slots[e]) {
                let e = new Intl.ListFormat().format(Object.keys(r.slots).map(e => `"${e}"`)),
                    s = t ? `Invalid slot "${t}".` : "A slot prop is required.";
                throw Error(`${s} Valid slot names are ${e}.`)
            }
            return r.slots[e]
        }
        return r
    }
    e.s(["DEFAULT_SLOT", 0, o, "Provider", 0, function({
        values: e,
        children: t
    }) {
        for (let [r, s] of e) t = n.default.createElement(r.Provider, {
            value: s
        }, t);
        return t
    }, "composeRenderProps", 0, function(e, t) {
        return r => t("function" == typeof e ? e(r) : e, r)
    }, "removeDataAttributes", 0, function(e) {
        let t = /^(data-.*)$/,
            r = {};
        for (let s in e) t.test(s) || (r[s] = e[s]);
        return r
    }, "useContextProps", 0, function(e, i, o) {
        let {
            ref: u,
            ...l
        } = a(o, e.slot) || {}, c = (0, t.useObjectRef)((0, n.useMemo)(() => (0, r.mergeRefs)(i, u), [i, u])), d = (0, s.mergeProps)(l, e);
        return "style" in l && l.style && "style" in e && e.style && ("function" == typeof l.style || "function" == typeof e.style ? d.style = t => {
            let r = "function" == typeof l.style ? l.style(t) : l.style,
                s = {
                    ...t.defaultStyle,
                    ...r
                },
                i = "function" == typeof e.style ? e.style({
                    ...t,
                    defaultStyle: s
                }) : e.style;
            return {
                ...s,
                ...i
            }
        } : d.style = {
            ...l.style,
            ...e.style
        }), [d, c]
    }, "useRenderProps", 0, function(e) {
        let {
            className: t,
            style: r,
            children: s,
            defaultClassName: i,
            defaultChildren: o,
            defaultStyle: a,
            values: u
        } = e;
        return (0, n.useMemo)(() => {
            let e, n, l;
            return e = "function" == typeof t ? t({
                ...u,
                defaultClassName: i
            }) : t, n = "function" == typeof r ? r({
                ...u,
                defaultStyle: a || {}
            }) : r, l = "function" == typeof s ? s({
                ...u,
                defaultChildren: o
            }) : null == s ? o : s, {
                className: null != e ? e : i,
                style: n || a ? {
                    ...a,
                    ...n
                } : void 0,
                children: null != l ? l : o,
                "data-rac": ""
            }
        }, [t, r, s, i, o, a, u])
    }, "useSlot", 0, function(e = !0) {
        let [t, r] = (0, n.useState)(e), s = (0, n.useRef)(!1), o = (0, n.useCallback)(e => {
            s.current = !0, r(!!e)
        }, []);
        return (0, i.useLayoutEffect)(() => {
            s.current || r(!1)
        }, []), [o, t]
    }, "useSlottedContext", 0, a])
}, 433721, 767256, e => {
    "use strict";
    var t = e.i(162696),
        r = e.i(143822),
        s = e.i(3931);
    let i = (0, s.createContext)({});
    e.s(["LabelContext", 0, i], 767256);
    var n = e.i(339206),
        o = (e.i(920096), e.i(604082));
    e.i(502879), e.i(754894);
    let a = new Map,
        u = !1;
    try {
        u = "exceptZero" === new Intl.NumberFormat("de-DE", {
            signDisplay: "exceptZero"
        }).resolvedOptions().signDisplay
    } catch {}
    let l = !1;
    try {
        l = "unit" === new Intl.NumberFormat("de-DE", {
            style: "unit",
            unit: "degree"
        }).resolvedOptions().style
    } catch {}
    let c = (0, s.createContext)(null);
    var d = e.i(776955),
        h = e.i(372474),
        p = e.i(183062),
        f = e.i(897884),
        v = e.i(231781);
    let y = new Set(["form", "formAction", "formEncType", "formMethod", "formNoValidate", "formTarget", "name", "value"]),
        b = (0, s.createContext)({}),
        g = (0, r.createHideableComponent)(function(e, r) {
            var i;
            [e, r] = (0, t.useContextProps)(e, r, b);
            let a = ((i = e).isPending && (i.onPress = void 0, i.onPressStart = void 0, i.onPressEnd = void 0, i.onPressChange = void 0, i.onPressUp = void 0, i.onKeyDown = void 0, i.onKeyUp = void 0, i.onClick = void 0, i.href = void 0), e = i),
                {
                    isPending: u
                } = a,
                {
                    buttonProps: l,
                    isPressed: g
                } = (0, h.useButton)(e, r),
                {
                    focusProps: m,
                    isFocused: w,
                    isFocusVisible: x
                } = (0, p.useFocusRing)(e),
                {
                    hoverProps: S,
                    isHovered: C
                } = (0, f.useHover)({
                    ...e,
                    isDisabled: e.isDisabled || u
                }),
                P = {
                    isHovered: C,
                    isPressed: (a.isPressed || g) && !u,
                    isFocused: w,
                    isFocusVisible: x,
                    isDisabled: e.isDisabled || !1,
                    isPending: null != u && u
                },
                k = (0, t.useRenderProps)({
                    ...e,
                    values: P,
                    defaultClassName: "react-aria-Button"
                }),
                O = (0, v.useId)(l.id),
                T = (0, v.useId)(),
                j = l["aria-labelledby"];
            u && (j ? j = `${j} ${T}` : l["aria-label"] && (j = `${O} ${T}`));
            let F = (0, s.useRef)(u);
            return (0, s.useEffect)(() => {
                let e = {
                    "aria-labelledby": j || O
                };
                !F.current && w && u ? (0, d.announce)(e, "assertive") : F.current && w && !u && (0, d.announce)(e, "assertive"), F.current = u
            }, [u, w, j, O]), s.default.createElement("button", {
                ...(0, n.filterDOMProps)(e, {
                    propNames: y
                }),
                ...(0, o.mergeProps)(l, m, S),
                ...k,
                type: "submit" === l.type && u ? "button" : l.type,
                id: O,
                ref: r,
                "aria-labelledby": j,
                slot: e.slot || void 0,
                "aria-disabled": u ? "true" : l["aria-disabled"],
                "data-disabled": e.isDisabled || void 0,
                "data-pressed": P.isPressed || void 0,
                "data-hovered": C || void 0,
                "data-focused": w || void 0,
                "data-pending": u || void 0,
                "data-focus-visible": x || void 0
            }, s.default.createElement(c.Provider, {
                value: {
                    id: T
                }
            }, k.children))
        });
    e.s(["Button", 0, g, "ButtonContext", 0, b], 433721)
}, 619379, e => {
    "use strict";
    var t = e.i(3931);
    (0, t.createContext)(null), (0, t.createContext)(null), (0, t.createContext)(null), (0, t.createContext)(null), (0, t.createContext)(null);
    let r = (0, t.createContext)({});
    e.s(["HeadingContext", 0, r])
}, 233757, e => {
    "use strict";
    let t = async () => {
        let e = await fetch("https://api.unity.com/v1/oauth2/authorize/logined-users", {
                credentials: "include"
            }),
            t = await e.json();
        if (!e.ok) throw Error(`Fetching user failed with status ${e.status}. Reason: ${JSON.stringify(t.details)}`);
        return t.model
    };
    e.s(["getUserFromGenesis", 0, t])
}, 321950, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(3931);
    let s = (0, r.createContext)({});
    e.s(["GenesisSessionProvider", 0, ({
        children: e
    }) => {
        let [i, n] = (0, r.useState)({
            ...JSON.parse(sessionStorage.getItem("UNITY_SESSION") || "{}")
        });
        return (0, t.jsx)(s.Provider, {
            value: {
                genesisSession: i,
                setGenesisSession: n
            },
            children: e
        })
    }, "useGenesisSession", 0, () => (0, r.useContext)(s)])
}, 108051, e => {
    "use strict";
    var t = e.i(3931),
        r = e.i(430907);
    let s = "https://api2.amplitude.com/2/httpapi";

    function i() {
        let e = document.cookie.split("; ").find(e => e.startsWith("experiment_exposure="));
        if (e) try {
            return JSON.parse(decodeURIComponent(e.split("=")[1]))
        } catch (e) {
            console.error("Error parsing experiment cookie:", e);
            return
        }
    }

    function n(e) {
        let t = i();
        if (t)
            for (let {
                    key: r,
                    variant: s,
                    deviceId: i,
                    userId: n
                }
                of t[e] || []) r && s && (i || n) && o(r, s, i, n)
    }

    function o(e, t, r, i) {
        e && t && (r || i) && fetch(s, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                api_key: "a331ddf18d0a0ba0070793c7e48f7a2a",
                events: [{
                    event_type: "$exposure",
                    ...i && {
                        user_id: i
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
    e.s(["AMPLITUDE_ENDPOINT", 0, s, "default", 0, function() {
        let e = (0, r.usePathname)();
        return (0, t.useEffect)(() => {
            n(e)
        }, [e]), null
    }, "getExperimentFromCookie", 0, i, "sendExposureEvent", 0, o, "trackExposureOnPageView", 0, n])
}, 835261, 936238, e => {
    "use strict";
    var t = e.i(713790);

    function r(e, r) {
        return (0, t.createMotionComponent)(e, r)
    }
    let s = r("div"),
        i = r("p"),
        n = r("span");
    e.s(["MotionDiv", 0, s, "MotionP", 0, i, "MotionSpan", 0, n], 936238), e.s(["div", 0, s], 835261)
}, 818897, e => {
    "use strict";
    var t = e.i(3931),
        r = e.i(500783),
        s = t.createContext(void 0);
    e.s(["QueryClientProvider", 0, ({
        client: e,
        children: i
    }) => (t.useEffect(() => (e.mount(), () => {
        e.unmount()
    }), [e]), (0, r.jsx)(s.Provider, {
        value: e,
        children: i
    })), "useQueryClient", 0, e => {
        let r = t.useContext(s);
        if (e) return e;
        if (!r) throw Error("No QueryClient set, use QueryClientProvider to set one");
        return r
    }])
}, 664300, e => {
    "use strict";
    let t, r, s, i, n, o;
    var a = e.i(137530).systemSetTimeoutZero,
        u = (t = [], r = 0, s = e => {
            e()
        }, i = e => {
            e()
        }, n = a, {
            batch: e => {
                let o;
                r++;
                try {
                    o = e()
                } finally {
                    let e;
                    --r || (e = t, t = [], e.length && n(() => {
                        i(() => {
                            e.forEach(e => {
                                s(e)
                            })
                        })
                    }))
                }
                return o
            },
            batchCalls: e => (...t) => {
                o(() => {
                    e(...t)
                })
            },
            schedule: o = e => {
                r ? t.push(e) : n(() => {
                    s(e)
                })
            },
            setNotifyFunction: e => {
                s = e
            },
            setBatchNotifyFunction: e => {
                i = e
            },
            setScheduler: e => {
                n = e
            }
        });
    e.s(["notifyManager", 0, u])
}, 758059, 304780, e => {
    "use strict";
    var t = class {
        constructor() {
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
        }
        subscribe(e) {
            return this.listeners.add(e), this.onSubscribe(), () => {
                this.listeners.delete(e), this.onUnsubscribe()
            }
        }
        hasListeners() {
            return this.listeners.size > 0
        }
        onSubscribe() {}
        onUnsubscribe() {}
    };
    e.s(["Subscribable", 0, t], 304780);
    var r = new class extends t {
        #e;
        #t;
        #r;
        constructor() {
            super(), this.#r = e => {
                if ("u" > typeof window && window.addEventListener) {
                    let t = () => e();
                    return window.addEventListener("visibilitychange", t, !1), () => {
                        window.removeEventListener("visibilitychange", t)
                    }
                }
            }
        }
        onSubscribe() {
            this.#t || this.setEventListener(this.#r)
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), this.#t = void 0)
        }
        setEventListener(e) {
            this.#r = e, this.#t?.(), this.#t = e(e => {
                "boolean" == typeof e ? this.setFocused(e) : this.onFocus()
            })
        }
        setFocused(e) {
            this.#e !== e && (this.#e = e, this.onFocus())
        }
        onFocus() {
            let e = this.isFocused();
            this.listeners.forEach(t => {
                t(e)
            })
        }
        isFocused() {
            return "boolean" == typeof this.#e ? this.#e : globalThis.document?.visibilityState !== "hidden"
        }
    };
    e.s(["focusManager", 0, r], 758059)
}, 655100, e => {
    "use strict";
    var t = e.i(304780),
        r = new class extends t.Subscribable {
            #s = !0;
            #t;
            #r;
            constructor() {
                super(), this.#r = e => {
                    if ("u" > typeof window && window.addEventListener) {
                        let t = () => e(!0),
                            r = () => e(!1);
                        return window.addEventListener("online", t, !1), window.addEventListener("offline", r, !1), () => {
                            window.removeEventListener("online", t), window.removeEventListener("offline", r)
                        }
                    }
                }
            }
            onSubscribe() {
                this.#t || this.setEventListener(this.#r)
            }
            onUnsubscribe() {
                this.hasListeners() || (this.#t?.(), this.#t = void 0)
            }
            setEventListener(e) {
                this.#r = e, this.#t?.(), this.#t = e(this.setOnline.bind(this))
            }
            setOnline(e) {
                this.#s !== e && (this.#s = e, this.listeners.forEach(t => {
                    t(e)
                }))
            }
            isOnline() {
                return this.#s
            }
        };
    e.s(["onlineManager", 0, r])
}, 785690, 137530, 786459, e => {
    "use strict";
    e.i(788727);
    var t = {
            setTimeout: (e, t) => setTimeout(e, t),
            clearTimeout: e => clearTimeout(e),
            setInterval: (e, t) => setInterval(e, t),
            clearInterval: e => clearInterval(e)
        },
        r = new class {
            #i = t;
            #n = !1;
            setTimeoutProvider(e) {
                this.#i = e
            }
            setTimeout(e, t) {
                return this.#i.setTimeout(e, t)
            }
            clearTimeout(e) {
                this.#i.clearTimeout(e)
            }
            setInterval(e, t) {
                return this.#i.setInterval(e, t)
            }
            clearInterval(e) {
                this.#i.clearInterval(e)
            }
        };
    e.s(["systemSetTimeoutZero", 0, function(e) {
        setTimeout(e, 0)
    }, "timeoutManager", 0, r], 137530);
    var s = "u" < typeof window || "Deno" in globalThis;

    function i() {}

    function n(e, t) {
        return (t?.queryKeyHashFn || o)(e)
    }

    function o(e) {
        return JSON.stringify(e, (e, t) => c(t) ? Object.keys(t).sort().reduce((e, r) => (e[r] = t[r], e), {}) : t)
    }

    function a(e, t) {
        return e === t || typeof e == typeof t && !!e && !!t && "object" == typeof e && "object" == typeof t && Object.keys(t).every(r => a(e[r], t[r]))
    }
    var u = Object.prototype.hasOwnProperty;

    function l(e) {
        return Array.isArray(e) && e.length === Object.keys(e).length
    }

    function c(e) {
        if (!d(e)) return !1;
        let t = e.constructor;
        if (void 0 === t) return !0;
        let r = t.prototype;
        return !!d(r) && !!r.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(e) === Object.prototype
    }

    function d(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    var h = Symbol();
    e.s(["addConsumeAwareSignal", 0, function(e, t, r) {
        let s, i = !1;
        return Object.defineProperty(e, "signal", {
            enumerable: !0,
            get: () => (s ??= t(), i || (i = !0, s.aborted ? r() : s.addEventListener("abort", r, {
                once: !0
            })), s)
        }), e
    }, "addToEnd", 0, function(e, t, r = 0) {
        let s = [...e, t];
        return r && s.length > r ? s.slice(1) : s
    }, "addToStart", 0, function(e, t, r = 0) {
        let s = [t, ...e];
        return r && s.length > r ? s.slice(0, -1) : s
    }, "ensureQueryFn", 0, function(e, t) {
        return !e.queryFn && t?.initialPromise ? () => t.initialPromise : e.queryFn && e.queryFn !== h ? e.queryFn : () => Promise.reject(Error(`Missing queryFn: '${e.queryHash}'`))
    }, "functionalUpdate", 0, function(e, t) {
        return "function" == typeof e ? e(t) : e
    }, "hashKey", 0, o, "hashQueryKeyByOptions", 0, n, "isServer", 0, s, "isValidTimeout", 0, function(e) {
        return "number" == typeof e && e >= 0 && e !== 1 / 0
    }, "matchMutation", 0, function(e, t) {
        let {
            exact: r,
            status: s,
            predicate: i,
            mutationKey: n
        } = e;
        if (n) {
            if (!t.options.mutationKey) return !1;
            if (r) {
                if (o(t.options.mutationKey) !== o(n)) return !1
            } else if (!a(t.options.mutationKey, n)) return !1
        }
        return (!s || t.state.status === s) && (!i || !!i(t))
    }, "matchQuery", 0, function(e, t) {
        let {
            type: r = "all",
            exact: s,
            fetchStatus: i,
            predicate: o,
            queryKey: u,
            stale: l
        } = e;
        if (u) {
            if (s) {
                if (t.queryHash !== n(u, t.options)) return !1
            } else if (!a(t.queryKey, u)) return !1
        }
        if ("all" !== r) {
            let e = t.isActive();
            if ("active" === r && !e || "inactive" === r && e) return !1
        }
        return ("boolean" != typeof l || t.isStale() === l) && (!i || i === t.state.fetchStatus) && (!o || !!o(t))
    }, "noop", 0, i, "partialMatchKey", 0, a, "replaceData", 0, function(e, t, r) {
        return "function" == typeof r.structuralSharing ? r.structuralSharing(e, t) : !1 !== r.structuralSharing ? function e(t, r, s = 0) {
            if (t === r) return t;
            if (s > 500) return r;
            let i = l(t) && l(r);
            if (!i && !(c(t) && c(r))) return r;
            let n = (i ? t : Object.keys(t)).length,
                o = i ? r : Object.keys(r),
                a = o.length,
                d = i ? Array(a) : {},
                h = 0;
            for (let l = 0; l < a; l++) {
                let a = i ? l : o[l],
                    c = t[a],
                    p = r[a];
                if (c === p) {
                    d[a] = c, (i ? l < n : u.call(t, a)) && h++;
                    continue
                }
                if (null === c || null === p || "object" != typeof c || "object" != typeof p) {
                    d[a] = p;
                    continue
                }
                let f = e(c, p, s + 1);
                d[a] = f, f === c && h++
            }
            return n === a && h === n ? t : d
        }(e, t) : t
    }, "resolveQueryBoolean", 0, function(e, t) {
        return "function" == typeof e ? e(t) : e
    }, "resolveStaleTime", 0, function(e, t) {
        return "function" == typeof e ? e(t) : e
    }, "shallowEqualObjects", 0, function(e, t) {
        if (!t || Object.keys(e).length !== Object.keys(t).length) return !1;
        for (let r in e)
            if (e[r] !== t[r]) return !1;
        return !0
    }, "shouldThrowError", 0, function(e, t) {
        return "function" == typeof e ? e(...t) : !!e
    }, "skipToken", 0, h, "sleep", 0, function(e) {
        return new Promise(t => {
            r.setTimeout(t, e)
        })
    }, "timeUntilStale", 0, function(e, t) {
        return Math.max(e + (t || 0) - Date.now(), 0)
    }], 785690), e.s(["pendingThenable", 0, function() {
        let e, t, r = new Promise((r, s) => {
            e = r, t = s
        });

        function s(e) {
            Object.assign(r, e), delete r.resolve, delete r.reject
        }
        return r.status = "pending", r.catch(() => {}), r.resolve = t => {
            s({
                status: "fulfilled",
                value: t
            }), e(t)
        }, r.reject = e => {
            s({
                status: "rejected",
                reason: e
            }), t(e)
        }, r
    }, "tryResolveSync", 0, function(e) {
        let t;
        if (e.then(e => (t = e, e), i)?.catch(i), void 0 !== t) return {
            data: t
        }
    }], 786459)
}, 689326, e => {
    "use strict";
    let t;
    var r = e.i(785690),
        s = (t = () => r.isServer, {
            isServer: () => t(),
            setIsServer(e) {
                t = e
            }
        });
    e.s(["environmentManager", 0, s])
}, 213278, 404348, 343201, e => {
    "use strict";
    e.i(788727);
    var t = e.i(785690),
        r = e.i(664300),
        s = e.i(758059),
        i = e.i(655100),
        n = e.i(786459),
        o = e.i(689326);

    function a(e) {
        return Math.min(1e3 * 2 ** e, 3e4)
    }

    function u(e) {
        return (e ?? "online") !== "online" || i.onlineManager.isOnline()
    }
    var l = class extends Error {
        constructor(e) {
            super("CancelledError"), this.revert = e?.revert, this.silent = e?.silent
        }
    };

    function c(e) {
        let r, c = !1,
            d = 0,
            h = (0, n.pendingThenable)(),
            p = () => s.focusManager.isFocused() && ("always" === e.networkMode || i.onlineManager.isOnline()) && e.canRun(),
            f = () => u(e.networkMode) && e.canRun(),
            v = e => {
                "pending" === h.status && (r?.(), h.resolve(e))
            },
            y = e => {
                "pending" === h.status && (r?.(), h.reject(e))
            },
            b = () => new Promise(t => {
                r = e => {
                    ("pending" !== h.status || p()) && t(e)
                }, e.onPause?.()
            }).then(() => {
                r = void 0, "pending" === h.status && e.onContinue?.()
            }),
            g = () => {
                let r;
                if ("pending" !== h.status) return;
                let s = 0 === d ? e.initialPromise : void 0;
                try {
                    r = s ?? e.fn()
                } catch (e) {
                    r = Promise.reject(e)
                }
                Promise.resolve(r).then(v).catch(r => {
                    if ("pending" !== h.status) return;
                    let s = e.retry ?? 3 * !o.environmentManager.isServer(),
                        i = e.retryDelay ?? a,
                        n = "function" == typeof i ? i(d, r) : i,
                        u = !0 === s || "number" == typeof s && d < s || "function" == typeof s && s(d, r);
                    c || !u ? y(r) : (d++, e.onFail?.(d, r), (0, t.sleep)(n).then(() => p() ? void 0 : b()).then(() => {
                        c ? y(r) : g()
                    }))
                })
            };
        return {
            promise: h,
            status: () => h.status,
            cancel: t => {
                if ("pending" === h.status) {
                    let r = new l(t);
                    y(r), e.onCancel?.(r)
                }
            },
            continue: () => (r?.(), h),
            cancelRetry: () => {
                c = !0
            },
            continueRetry: () => {
                c = !1
            },
            canStart: f,
            start: () => (f() ? g() : b().then(g), h)
        }
    }
    e.s(["CancelledError", 0, l, "canFetch", 0, u, "createRetryer", 0, c], 404348);
    var d = e.i(137530),
        h = class {
            #o;
            destroy() {
                this.clearGcTimeout()
            }
            scheduleGc() {
                this.clearGcTimeout(), (0, t.isValidTimeout)(this.gcTime) && (this.#o = d.timeoutManager.setTimeout(() => {
                    this.optionalRemove()
                }, this.gcTime))
            }
            updateGcTime(e) {
                this.gcTime = Math.max(this.gcTime || 0, e ?? (o.environmentManager.isServer() ? 1 / 0 : 3e5))
            }
            clearGcTimeout() {
                void 0 !== this.#o && (d.timeoutManager.clearTimeout(this.#o), this.#o = void 0)
            }
        };

    function p(e, {
        pages: t,
        pageParams: r
    }) {
        let s = t.length - 1;
        return t.length > 0 ? e.getNextPageParam(t[s], t, r[s], r) : void 0
    }
    e.s(["Removable", 0, h], 343201);
    var f = class extends h {
        #a;
        #u;
        #l;
        #c;
        #d;
        #h;
        #p;
        #f;
        constructor(e) {
            super(), this.#f = !1, this.#p = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.#d = e.client, this.#c = this.#d.getQueryCache(), this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.#u = b(this.options), this.state = e.state ?? this.#u, this.scheduleGc()
        }
        get meta() {
            return this.options.meta
        }
        get queryType() {
            return this.#a
        }
        get promise() {
            return this.#h?.promise
        }
        setOptions(e) {
            if (this.options = {
                    ...this.#p,
                    ...e
                }, e?._type && (this.#a = e._type), this.updateGcTime(this.options.gcTime), this.state && void 0 === this.state.data) {
                let e = b(this.options);
                void 0 !== e.data && (this.setState(y(e.data, e.dataUpdatedAt)), this.#u = e)
            }
        }
        optionalRemove() {
            this.observers.length || "idle" !== this.state.fetchStatus || this.#c.remove(this)
        }
        setData(e, r) {
            let s = (0, t.replaceData)(this.state.data, e, this.options);
            return this.#v({
                data: s,
                type: "success",
                dataUpdatedAt: r?.updatedAt,
                manual: r?.manual
            }), s
        }
        setState(e) {
            this.#v({
                type: "setState",
                state: e
            })
        }
        cancel(e) {
            let r = this.#h?.promise;
            return this.#h?.cancel(e), r ? r.then(t.noop).catch(t.noop) : Promise.resolve()
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            })
        }
        get resetState() {
            return this.#u
        }
        reset() {
            this.destroy(), this.setState(this.resetState)
        }
        isActive() {
            return this.observers.some(e => !1 !== (0, t.resolveQueryBoolean)(e.options.enabled, this))
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === t.skipToken || !this.isFetched()
        }
        isFetched() {
            return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
        }
        isStatic() {
            return this.getObserversCount() > 0 && this.observers.some(e => "static" === (0, t.resolveStaleTime)(e.options.staleTime, this))
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : void 0 === this.state.data || this.state.isInvalidated
        }
        isStaleByTime(e = 0) {
            return void 0 === this.state.data || "static" !== e && (!!this.state.isInvalidated || !(0, t.timeUntilStale)(this.state.dataUpdatedAt, e))
        }
        onFocus() {
            let e = this.observers.find(e => e.shouldFetchOnWindowFocus());
            e?.refetch({
                cancelRefetch: !1
            }), this.#h?.continue()
        }
        onOnline() {
            let e = this.observers.find(e => e.shouldFetchOnReconnect());
            e?.refetch({
                cancelRefetch: !1
            }), this.#h?.continue()
        }
        addObserver(e) {
            this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.#c.notify({
                type: "observerAdded",
                query: this,
                observer: e
            }))
        }
        removeObserver(e) {
            this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.#h && (this.#f || this.#y() ? this.#h.cancel({
                revert: !0
            }) : this.#h.cancelRetry()), this.scheduleGc()), this.#c.notify({
                type: "observerRemoved",
                query: this,
                observer: e
            }))
        }
        getObserversCount() {
            return this.observers.length
        }
        #y() {
            return "paused" === this.state.fetchStatus && "pending" === this.state.status
        }
        invalidate() {
            this.state.isInvalidated || this.#v({
                type: "invalidate"
            })
        }
        async fetch(e, r) {
            var s;
            let i;
            if ("idle" !== this.state.fetchStatus && this.#h?.status() !== "rejected") {
                if (void 0 !== this.state.data && r?.cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (this.#h) return this.#h.continueRetry(), this.#h.promise
            }
            if (e && this.setOptions(e), !this.options.queryFn) {
                let e = this.observers.find(e => e.options.queryFn);
                e && this.setOptions(e.options)
            }
            let n = new AbortController,
                o = e => {
                    Object.defineProperty(e, "signal", {
                        enumerable: !0,
                        get: () => (this.#f = !0, n.signal)
                    })
                },
                a = () => {
                    let e, s = (0, t.ensureQueryFn)(this.options, r),
                        i = (o(e = {
                            client: this.#d,
                            queryKey: this.queryKey,
                            meta: this.meta
                        }), e);
                    return (this.#f = !1, this.options.persister) ? this.options.persister(s, i, this) : s(i)
                },
                u = (o(i = {
                    fetchOptions: r,
                    options: this.options,
                    queryKey: this.queryKey,
                    client: this.#d,
                    state: this.state,
                    fetchFn: a
                }), i),
                d = "infinite" === this.#a ? (s = this.options.pages, {
                    onFetch: (e, r) => {
                        let i = e.options,
                            n = e.fetchOptions?.meta?.fetchMore?.direction,
                            o = e.state.data?.pages || [],
                            a = e.state.data?.pageParams || [],
                            u = {
                                pages: [],
                                pageParams: []
                            },
                            l = 0,
                            c = async () => {
                                let r = !1,
                                    c = (0, t.ensureQueryFn)(e.options, e.fetchOptions),
                                    d = async (s, i, n) => {
                                        let o;
                                        if (r) return Promise.reject(e.signal.reason);
                                        if (null == i && s.pages.length) return Promise.resolve(s);
                                        let a = (o = {
                                                client: e.client,
                                                queryKey: e.queryKey,
                                                pageParam: i,
                                                direction: n ? "backward" : "forward",
                                                meta: e.options.meta
                                            }, (0, t.addConsumeAwareSignal)(o, () => e.signal, () => r = !0), o),
                                            u = await c(a),
                                            {
                                                maxPages: l
                                            } = e.options,
                                            d = n ? t.addToStart : t.addToEnd;
                                        return {
                                            pages: d(s.pages, u, l),
                                            pageParams: d(s.pageParams, i, l)
                                        }
                                    };
                                if (n && o.length) {
                                    let e = "backward" === n,
                                        t = {
                                            pages: o,
                                            pageParams: a
                                        },
                                        r = (e ? function(e, {
                                            pages: t,
                                            pageParams: r
                                        }) {
                                            return t.length > 0 ? e.getPreviousPageParam?.(t[0], t, r[0], r) : void 0
                                        } : p)(i, t);
                                    u = await d(t, r, e)
                                } else {
                                    let e = s ?? o.length;
                                    do {
                                        let e = 0 === l ? a[0] ?? i.initialPageParam : p(i, u);
                                        if (l > 0 && null == e) break;
                                        u = await d(u, e), l++
                                    } while (l < e)
                                }
                                return u
                            };
                        e.options.persister ? e.fetchFn = () => e.options.persister?.(c, {
                            client: e.client,
                            queryKey: e.queryKey,
                            meta: e.options.meta,
                            signal: e.signal
                        }, r) : e.fetchFn = c
                    }
                }) : this.options.behavior;
            d?.onFetch(u, this), this.#l = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== u.fetchOptions?.meta) && this.#v({
                type: "fetch",
                meta: u.fetchOptions?.meta
            }), this.#h = c({
                initialPromise: r?.initialPromise,
                fn: u.fetchFn,
                onCancel: e => {
                    e instanceof l && e.revert && this.setState({
                        ...this.#l,
                        fetchStatus: "idle"
                    }), n.abort()
                },
                onFail: (e, t) => {
                    this.#v({
                        type: "failed",
                        failureCount: e,
                        error: t
                    })
                },
                onPause: () => {
                    this.#v({
                        type: "pause"
                    })
                },
                onContinue: () => {
                    this.#v({
                        type: "continue"
                    })
                },
                retry: u.options.retry,
                retryDelay: u.options.retryDelay,
                networkMode: u.options.networkMode,
                canRun: () => !0
            });
            try {
                let e = await this.#h.start();
                if (void 0 === e) throw Error(`${this.queryHash} data is undefined`);
                return this.setData(e), this.#c.config.onSuccess?.(e, this), this.#c.config.onSettled?.(e, this.state.error, this), e
            } catch (e) {
                if (e instanceof l) {
                    if (e.silent) return this.#h.promise;
                    else if (e.revert) {
                        if (void 0 === this.state.data) throw e;
                        return this.state.data
                    }
                }
                throw this.#v({
                    type: "error",
                    error: e
                }), this.#c.config.onError?.(e, this), this.#c.config.onSettled?.(this.state.data, e, this), e
            } finally {
                this.scheduleGc()
            }
        }
        #v(e) {
            let t = t => {
                switch (e.type) {
                    case "failed":
                        return {
                            ...t, fetchFailureCount: e.failureCount, fetchFailureReason: e.error
                        };
                    case "pause":
                        return {
                            ...t, fetchStatus: "paused"
                        };
                    case "continue":
                        return {
                            ...t, fetchStatus: "fetching"
                        };
                    case "fetch":
                        return {
                            ...t, ...v(t.data, this.options), fetchMeta: e.meta ?? null
                        };
                    case "success":
                        let r = {
                            ...t,
                            ...y(e.data, e.dataUpdatedAt),
                            dataUpdateCount: t.dataUpdateCount + 1,
                            ...!e.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                        return this.#l = e.manual ? r : void 0, r;
                    case "error":
                        let s = e.error;
                        return {
                            ...t, error: s, errorUpdateCount: t.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: t.fetchFailureCount + 1, fetchFailureReason: s, fetchStatus: "idle", status: "error", isInvalidated: !0
                        };
                    case "invalidate":
                        return {
                            ...t, isInvalidated: !0
                        };
                    case "setState":
                        return {
                            ...t, ...e.state
                        }
                }
            };
            this.state = t(this.state), r.notifyManager.batch(() => {
                this.observers.forEach(e => {
                    e.onQueryUpdate()
                }), this.#c.notify({
                    query: this,
                    type: "updated",
                    action: e
                })
            })
        }
    };

    function v(e, t) {
        return {
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchStatus: u(t.networkMode) ? "fetching" : "paused",
            ...void 0 === e && {
                error: null,
                status: "pending"
            }
        }
    }

    function y(e, t) {
        return {
            data: e,
            dataUpdatedAt: t ?? Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success"
        }
    }

    function b(e) {
        let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
            r = void 0 !== t,
            s = r ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
        return {
            data: t,
            dataUpdateCount: 0,
            dataUpdatedAt: r ? s ?? Date.now() : 0,
            error: null,
            errorUpdateCount: 0,
            errorUpdatedAt: 0,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: null,
            isInvalidated: !1,
            status: r ? "success" : "pending",
            fetchStatus: "idle"
        }
    }
    e.s(["Query", 0, f, "fetchState", 0, v], 213278)
}, 317386, e => {
    "use strict";
    var t = e.i(786459),
        r = e.i(785690);

    function s(e) {
        return e
    }
    e.s(["defaultShouldDehydrateQuery", 0, function(e) {
        return "success" === e.state.status
    }, "hydrate", 0, function(e, i, n) {
        if ("object" != typeof i || null === i) return;
        let o = e.getMutationCache(),
            a = e.getQueryCache(),
            u = n?.defaultOptions?.deserializeData ?? e.getDefaultOptions().hydrate?.deserializeData ?? s,
            l = i.mutations || [],
            c = i.queries || [];
        l.forEach(({
            state: t,
            ...r
        }) => {
            o.build(e, {
                ...e.getDefaultOptions().hydrate?.mutations,
                ...n?.defaultOptions?.mutations,
                ...r
            }, t)
        }), c.forEach(({
            queryKey: s,
            state: i,
            queryHash: o,
            meta: l,
            promise: c,
            dehydratedAt: d,
            queryType: h
        }) => {
            let p = c ? (0, t.tryResolveSync)(c) : void 0,
                f = void 0 === i.data ? p?.data : i.data,
                v = void 0 === f ? f : u(f),
                y = a.get(o),
                b = y?.state.status === "pending",
                g = y?.state.fetchStatus === "fetching";
            if (y) {
                let e = p && void 0 !== d && d > y.state.dataUpdatedAt;
                if (i.dataUpdatedAt > y.state.dataUpdatedAt || e) {
                    let {
                        fetchStatus: e,
                        ...t
                    } = i;
                    y.setState({
                        ...t,
                        data: v,
                        ..."pending" === i.status && void 0 !== v && {
                            status: "success",
                            ...!g && {
                                fetchStatus: "idle"
                            }
                        }
                    })
                }
            } else y = a.build(e, {
                ...e.getDefaultOptions().hydrate?.queries,
                ...n?.defaultOptions?.queries,
                queryKey: s,
                queryHash: o,
                meta: l,
                _type: h
            }, {
                ...i,
                data: v,
                fetchStatus: "idle",
                status: "pending" === i.status && void 0 !== v ? "success" : i.status
            });
            !c || p || b || g || void 0 !== d && !(d > y.state.dataUpdatedAt) || y.fetch(void 0, {
                initialPromise: Promise.resolve(c).then(u)
            }).catch(r.noop)
        })
    }])
}, 121090, e => {
    "use strict";
    var t = e.i(500783),
        r = e.i(749583),
        s = e.i(430907);
    e.s(["default", 0, () => {
        let e = (0, s.usePathname)();
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
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "57a70957-ab62-5299-b581-4ee2fcaee712")
    } catch (e) {}
}();
//# debugId=57a70957-ab62-5299-b581-4ee2fcaee712