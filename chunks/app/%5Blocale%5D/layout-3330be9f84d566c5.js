! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                if (null != r)
                    for (var a in r) r.hasOwnProperty(a) && (e[a] = r[a])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [98450], {
        2340: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var a = r(80475),
                n = r(88491),
                o = r(16335),
                s = r(9496);
            let i = (0, n.forwardRef)(function({
                children: e,
                className: t = ""
            }, r) {
                let n = (0, s.U)(r),
                    i = (0, o.A)("text", t);
                return (0, a.jsx)("div", {
                    ref: n,
                    className: i,
                    children: e
                })
            })
        },
        6649: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            var a = r(80475);
            r(88491);
            let n = ({
                className: e
            }) => (0, a.jsx)("svg", {
                width: 16,
                height: 16,
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: e,
                "data-sentry-element": "svg",
                "data-sentry-component": "ArrowDown",
                "data-sentry-source-file": "ArrowDown.tsx",
                children: (0, a.jsx)("path", {
                    d: "m13 6-5 5-5-5",
                    "data-sentry-element": "path",
                    "data-sentry-source-file": "ArrowDown.tsx"
                })
            })
        },
        9224: (e, t, r) => {
            "use strict";
            r.d(t, {
                N_: () => a
            });
            let {
                Link: a,
                redirect: n,
                usePathname: o,
                useRouter: s
            } = (0, r(13223).xp)({
                locales: ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"],
                localePrefix: "as-needed",
                defaultLocale: "en"
            })
        },
        18227: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => g
            });
            var a = r(80475),
                n = r(88491),
                o = r(62060),
                s = r(16335),
                i = r(76233),
                l = r(82094),
                d = r(93608),
                c = r(21085),
                u = r(9496),
                m = r(86713),
                h = r(73438);
            let g = (0, n.forwardRef)(function({
                children: e,
                active: t = !1,
                disabled: r = !1,
                variant: n = "primary",
                size: g = "medium",
                className: x = "",
                hasArrow: f = !1,
                href: p = "",
                rounded: y = !1,
                outlined: v = !1,
                tabIndex: b,
                tag: k = "button",
                localePrefix: j,
                locale: w,
                prefetch: N,
                onPress: L,
                ...F
            }, A) {
                let E = (0, u.U)(A),
                    {
                        buttonProps: R
                    } = (0, i.s)({
                        children: e,
                        active: t,
                        disabled: r,
                        variant: n,
                        size: g,
                        className: x,
                        hasArrow: f,
                        rounded: y,
                        outlined: v,
                        tabIndex: b,
                        elementType: p ? "a" : k,
                        onPress: L,
                        ...F
                    }, E),
                    {
                        hoverProps: S,
                        isHovered: _
                    } = (0, l.M)({
                        isDisabled: !1
                    }),
                    {
                        pressProps: C
                    } = (0, d.d)({
                        onPress: L,
                        isDisabled: r
                    }),
                    {
                        isFocusVisible: I,
                        focusProps: D
                    } = (0, c.o)(),
                    U = (0, s.$)("cursor-pointer inline-block items-center outline-hidden overflow-x-hidden", {
                        "btn-disabled": r
                    }, {
                        primary: "btn-primary",
                        secondary: "btn-secondary"
                    } [n], {
                        small: "btn-sm caption-xs-bold px-3 py-2",
                        medium: "btn-md caption-sm-bold px-3 py-2.5",
                        large: "btn-lg caption-bold px-4 py-3.5",
                        "x-large": "btn-xl caption-bold py-5 px-3"
                    } [g], {
                        "inline-flex": p
                    }, {
                        "rounded-full": y
                    }, {
                        "rounded-xs": !y
                    }, {
                        "btn-outlined border-solid border-2": v
                    }, {
                        "btn-arrow": f
                    }, {
                        hovered: _ || t
                    }, {
                        "focused a11y-ring ": I
                    }, x),
                    P = (0, s.$)("btn-label transition-spacing flex duration-300 ease-in-out", {
                        "btn-disabled": r
                    }),
                    H = (0, s.$)("right-arrow", "dark:fill-white", {
                        "fill-black": "secondary" === n && !r,
                        "fill-blue": "secondary" !== n && !r,
                        "btn-disabled": r
                    }),
                    M = "string" == typeof e ? e : "";
                return (delete R.onClick, p) ? (0, a.jsx)(o.N_, {
                    locale: w,
                    lang: w,
                    ...(0, m.v)(R, S, D),
                    ref: E,
                    className: U,
                    href: p,
                    tabIndex: b,
                    ...M && {
                        "aria-label": M
                    },
                    role: "button",
                    localePrefix: j,
                    prefetch: N,
                    children: (0, a.jsxs)("div", {
                        className: "btn-content flex items-center align-middle transition-transform duration-300",
                        children: [f && (0, a.jsx)(h.H, {
                            className: "left-arrow fill-white dark:fill-black"
                        }), (0, a.jsx)("span", {
                            className: P,
                            children: e
                        }), f && (0, a.jsx)(h.H, {
                            className: H
                        })]
                    })
                }) : (0, a.jsx)(k, {
                    ...(0, m.v)(R, S, D, C),
                    ref: E,
                    className: U,
                    ...M && {
                        "aria-label": M
                    },
                    tabIndex: b,
                    children: (0, a.jsxs)("div", {
                        className: "btn-content flex items-center align-middle transition-transform duration-300",
                        children: [f && (0, a.jsx)(h.H, {
                            className: "left-arrow fill-white dark:fill-black"
                        }), (0, a.jsx)("span", {
                            className: P,
                            children: e
                        }), f && (0, a.jsx)(h.H, {
                            className: H
                        })]
                    })
                })
            })
        },
        18350: (e, t, r) => {
            "use strict";
            r.d(t, {
                s: () => i,
                A: () => l
            });
            var a = r(80475);
            r(88491);
            var n = r(65920);
            let o = () => Promise.all([r.e(94412), r.e(48278), r.e(83357), r.e(54602)]).then(r.bind(r, 72607)).then(e => e.default),
                s = () => Promise.all([r.e(94412), r.e(48278), r.e(83357), r.e(51123), r.e(606)]).then(r.bind(r, 50119)).then(e => e.default),
                i = ({
                    children: e
                }) => (0, a.jsx)(n.F, {
                    features: s,
                    strict: !0,
                    "data-sentry-element": "LazyMotion",
                    "data-sentry-component": "FramerMotionLayoutLazy",
                    "data-sentry-source-file": "FramerMotionLayoutLazy.tsx",
                    children: e
                }),
                l = ({
                    children: e
                }) => (0, a.jsx)(n.F, {
                    features: o,
                    strict: !0,
                    "data-sentry-element": "LazyMotion",
                    "data-sentry-component": "FramerMotionLazy",
                    "data-sentry-source-file": "FramerMotionLazy.tsx",
                    children: e
                })
        },
        18420: () => {},
        22573: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => m
            });
            var a = r(80475),
                n = r(88491),
                o = r(85260),
                s = r(36162),
                i = r(63154),
                l = r(23856),
                d = r(66977);
            let c = "GTM-5V25JL6",
                u = "a9f5fcb3-4c7f-4bb7-93bf-7607ffbdabe0";

            function m({
                locale: e
            }) {
                let [t] = (0, l.A)("location", "US"), [r] = (0, l.A)("currency", "USD"), [m, h] = (0, n.useState)(null), g = (0, n.useCallback)(() => {
                    window.OneTrust && window.OneTrust.changeLanguage(i.yj[e || "en"])
                }, [e]), x = (0, n.useCallback)(async () => {
                    let e = sessionStorage.getItem("UNITY_SESSION"),
                        a = "";
                    if (e) a = JSON.parse(e)?.user;
                    else try {
                        let e = await (0, d.Y)();
                        a = e.users[0]?.userId
                    } catch (e) {
                        console.error("Error fetching user from Genesis:", e)
                    }
                    h({
                        event: "dataLayer-initialized",
                        user: {
                            user_unity_id: a,
                            user_logged_in: e ? "yes" : "no"
                        },
                        environment: {
                            environment_locale: t,
                            environment_currency: r
                        }
                    })
                }, [t, r]);
                return (0, n.useEffect)(() => {
                    x()
                }, [x]), (0, n.useEffect)(() => {
                    g()
                }, [g]), (0, a.jsxs)(a.Fragment, {
                    children: [u && (0, a.jsx)(o.default, {
                        src: "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js",
                        charSet: "UTF-8",
                        "data-domain-script": u,
                        "data-dLayer-ignore": "true",
                        strategy: "afterInteractive",
                        "data-document-language": "true",
                        onReady: g
                    }), u && (0, a.jsx)(o.default, {
                        id: "onetrust-optanon-wrapper",
                        strategy: "afterInteractive",
                        children: "function OptanonWrapper(){}"
                    }), c && m && (0, a.jsx)(s.GoogleTagManager, {
                        gtmId: c,
                        dataLayer: m
                    })]
                })
            }
        },
        23856: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            var a = r(88491);
            let n = (e, t) => {
                let [r, n] = (0, a.useState)("");
                (0, a.useEffect)(() => {
                    n(document.cookie)
                }, []);
                let o = (0, a.useMemo)(() => r.split("; ").reduce((e, t) => {
                        let [r, a] = t.split("=");
                        return {
                            ...e,
                            [r]: a
                        }
                    }, {}), [r]),
                    s = (0, a.useCallback)(t => {
                        document.cookie = `${e}=${t};path=/`, n(document.cookie)
                    }, [e]);
                return [o[e] || t, s]
            }
        },
        25705: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 27813)), Promise.resolve().then(r.bind(r, 59763)), Promise.resolve().then(r.bind(r, 45183)), Promise.resolve().then(r.bind(r, 22573)), Promise.resolve().then(r.bind(r, 47641)), Promise.resolve().then(r.bind(r, 47977)), Promise.resolve().then(r.t.bind(r, 18420, 23)), Promise.resolve().then(r.bind(r, 3832)), Promise.resolve().then(r.bind(r, 71912)), Promise.resolve().then(r.bind(r, 35925)), Promise.resolve().then(r.t.bind(r, 92198, 23)), Promise.resolve().then(r.t.bind(r, 95933, 23))
        },
        27036: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            let a = r(34733).Ay
        },
        27813: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                AMPLITUDE_ENDPOINT: () => o,
                default: () => s,
                getExperimentFromCookie: () => i,
                sendExposureEvent: () => d,
                trackExposureOnPageView: () => l
            });
            var a = r(88491),
                n = r(33497);
            let o = "https://api2.amplitude.com/2/httpapi";

            function s() {
                let e = (0, n.usePathname)();
                return (0, a.useEffect)(() => {
                    l(e)
                }, [e]), null
            }

            function i() {
                let e = document.cookie.split("; ").find(e => e.startsWith("experiment_exposure="));
                if (e) try {
                    return JSON.parse(decodeURIComponent(e.split("=")[1]))
                } catch (e) {
                    console.error("Error parsing experiment cookie:", e);
                    return
                }
            }

            function l(e) {
                let t = i();
                if (t)
                    for (let {
                            key: r,
                            variant: a,
                            deviceId: n,
                            userId: o
                        }
                        of t[e] || []) r && a && (n || o) && d(r, a, n, o)
            }

            function d(e, t, r, a) {
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
        },
        33783: (e, t, r) => {
            "use strict";
            r.d(t, {
                A_: () => s,
                oQ: () => i
            });
            var a = r(80475),
                n = r(88491);
            let o = (0, n.createContext)({}),
                s = ({
                    children: e
                }) => {
                    let [t, r] = (0, n.useState)({
                        ...JSON.parse(sessionStorage.getItem("UNITY_SESSION") || "{}")
                    });
                    return (0, a.jsx)(o.Provider, {
                        value: {
                            genesisSession: t,
                            setGenesisSession: r
                        },
                        "data-sentry-element": "GenesisSessionContext.Provider",
                        "data-sentry-component": "GenesisSessionProvider",
                        "data-sentry-source-file": "genesis.tsx",
                        children: e
                    })
                },
                i = () => (0, n.useContext)(o)
        },
        38373: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            let a = r(78360).A
        },
        45183: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => s
            });
            var a = r(80475),
                n = r(33783),
                o = r(46247);

            function s({
                children: e
            }) {
                return (0, a.jsx)(n.A_, {
                    "data-sentry-element": "GenesisSessionProvider",
                    "data-sentry-component": "GlobalProviders",
                    "data-sentry-source-file": "GlobalProviders.tsx",
                    children: (0, a.jsx)(o.SO, {
                        "data-sentry-element": "CommerceContextProvider",
                        "data-sentry-source-file": "GlobalProviders.tsx",
                        children: e
                    })
                })
            }
        },
        46247: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => c,
                LW: () => o,
                SO: () => d
            });
            var a = r(80475),
                n = r(88491),
                o = function(e) {
                    return e.UPDATE = "UPDATE", e
                }({});
            let s = {},
                i = (0, n.createContext)(s),
                l = (e, t) => {
                    if ("UPDATE" !== t.type) return e;
                    {
                        let {
                            type: r,
                            ...a
                        } = t;
                        return {
                            ...e,
                            ...a
                        }
                    }
                },
                d = ({
                    children: e
                }) => {
                    let [t, r] = (0, n.useReducer)(l, s), o = (0, n.useMemo)(() => ({
                        state: t,
                        dispatch: r
                    }), [t, r]);
                    return (0, a.jsx)(i.Provider, {
                        value: o,
                        "data-sentry-element": "CommerceContext.Provider",
                        "data-sentry-component": "CommerceContextProvider",
                        "data-sentry-source-file": "CommerceContext.tsx",
                        children: e
                    })
                },
                c = () => (0, n.useContext)(i)
        },
        47641: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => K
            });
            var a = r(80475),
                n = r(88491),
                o = r(98822),
                s = r(8574),
                i = r(33497),
                l = r(16335),
                d = r(9224),
                c = r(94909),
                u = r(38373),
                m = r(27036),
                h = r(62060);
            let g = () => (0, a.jsx)(h.N_, {
                href: "/",
                className: "-m-2 inline-block p-2 transition-opacity hover:opacity-80",
                "data-link-location": c.V.headerLogo,
                "data-sentry-element": "Link",
                "data-sentry-component": "HeaderLogo",
                "data-sentry-source-file": "HeaderLogo.tsx",
                children: (0, a.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "19",
                    height: "22",
                    viewBox: "0 0 19 22",
                    fill: "none",
                    "data-sentry-element": "svg",
                    "data-sentry-source-file": "HeaderLogo.tsx",
                    children: (0, a.jsx)("path", {
                        d: "M10.3305 3.93605L13.7281 5.94619C13.8503 6.01676 13.8547 6.21254 13.7281 6.28311L9.69098 8.67343C9.56884 8.74627 9.4245 8.74172 9.31124 8.67343L5.27408 6.28311C5.14972 6.21482 5.1475 6.01449 5.27408 5.94619L8.66947 3.93605V0L0 5.13121V15.3936L3.32433 13.4267V9.40646C3.32211 9.26304 3.48644 9.1606 3.60858 9.238L7.64575 11.6283C7.76788 11.7012 7.83672 11.8309 7.83672 11.9652V16.7436C7.83894 16.887 7.67461 16.9894 7.55248 16.912L4.15486 14.9019L0.830529 16.8688L9.5 22L18.1695 16.8688L14.8451 14.9019L11.4475 16.912C11.3276 16.9872 11.1588 16.8893 11.1633 16.7436V11.9652C11.1633 11.8218 11.241 11.6943 11.3543 11.6283L15.3914 9.238C15.5113 9.16287 15.6801 9.25849 15.6757 9.40646V13.4267L19 15.3936V5.13121L10.3305 0V3.93605Z",
                        fill: "white",
                        "data-sentry-element": "path",
                        "data-sentry-source-file": "HeaderLogo.tsx"
                    })
                })
            });
            var x = r(92572),
                f = r(85957);
            let p = ({
                    children: e,
                    className: t
                }) => (0, a.jsx)(f.A, {
                    className: t,
                    "data-sentry-element": "Tag",
                    "data-sentry-component": "HeaderTag",
                    "data-sentry-source-file": "HeaderTag.tsx",
                    children: e
                }),
                y = ({
                    variant: e = "medium",
                    href: t,
                    title: r,
                    tag: n,
                    description: o,
                    image: s,
                    icon: i,
                    isExternal: d
                }) => {
                    let u = (0, l.A)("text-white flex items-baseline gap-2", {
                        "mango-text-heading-5xs": "medium" === e,
                        "mango-text-heading-2xs": "large" === e
                    });
                    return (0, a.jsxs)(h.N_, {
                        href: t,
                        className: "group relative block overflow-hidden rounded-lg p-2",
                        "data-link-location": c.V.headerNavigationLink,
                        "data-sentry-element": "Link",
                        "data-sentry-component": "HeaderNavigationLink",
                        "data-sentry-source-file": "HeaderNavigationLink.tsx",
                        children: [(0, a.jsx)("div", {
                            className: "absolute inset-0 rounded-lg bg-gray-700 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus:opacity-100"
                        }), (0, a.jsxs)("span", {
                            className: "relative z-10 flex items-center gap-4",
                            children: [(i || s) && (0, a.jsx)("span", {
                                className: "flex h-[2.625rem] w-[2.5625rem] shrink-0 items-center justify-center rounded-lg bg-gray-800",
                                children: i ? (0, a.jsx)(m.A, {
                                    icon: i,
                                    size: "1.5rem",
                                    className: "text-white"
                                }) : s && (0, a.jsx)(x.default, {
                                    src: s.src,
                                    alt: s.alt,
                                    width: 22,
                                    height: 22,
                                    placeholder: "blur",
                                    blurDataURL: s.placeholder
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex-1",
                                children: [(0, a.jsxs)("div", {
                                    className: u,
                                    children: [(0, a.jsx)("div", {
                                        children: r
                                    }), n && (0, a.jsx)(p, {
                                        children: n
                                    }), (0, a.jsx)("div", {
                                        className: "self-center",
                                        children: d && (0, a.jsx)(m.A, {
                                            icon: "arrow-up-right",
                                            size: "1rem"
                                        })
                                    })]
                                }), o && (0, a.jsx)("div", {
                                    className: "mango-text-body-sm text-gray-400",
                                    children: o
                                })]
                            })]
                        })]
                    })
                },
                v = ({
                    href: e,
                    title: t,
                    className: r,
                    icon: n
                }) => {
                    let o = (0, l.A)("group flex items-center gap-3 rounded p-1 hover:bg-gray-700 focus:bg-gray-700 transition-colors duration-200 ease-in-out", r);
                    return (0, a.jsxs)(h.N_, {
                        href: e,
                        className: o,
                        "data-link-location": c.V.headerDropdownLink,
                        "data-sentry-element": "Link",
                        "data-sentry-component": "HeaderDropdownLink",
                        "data-sentry-source-file": "HeaderDropdownLink.tsx",
                        children: [n && (0, a.jsx)("span", {
                            className: "flex h-[2.625rem] w-[2.5625rem] shrink-0 items-center justify-center rounded-lg bg-gray-800 text-gray-500 transition-all duration-700 ease-in-out group-hover:text-white",
                            children: (0, a.jsx)(m.A, {
                                icon: n
                            })
                        }), (0, a.jsx)("span", {
                            className: "mango-text-heading-5xs text-white",
                            children: t
                        })]
                    })
                },
                b = ({
                    title: e,
                    links: t = [],
                    actions: r = [],
                    variant: n = "default"
                }) => {
                    let o = (0, l.A)("mango-text-input text-gray-400", {
                            "mb-5": "compact" === n || "dropdown" === n,
                            "mb-6": "default" === n
                        }),
                        s = (0, l.A)("flex flex-col w-full", {
                            "gap-1": "compact" === n || "dropdown" === n,
                            "gap-5": "default" === n
                        }),
                        i = (0, l.A)("flex flex-wrap", {
                            "mt-3 gap-1": "compact" === n,
                            "mt-8 gap-2": "default" === n
                        });
                    return (0, a.jsxs)("div", {
                        className: "flex flex-col",
                        "data-sentry-component": "HeaderDropdownMenuSection",
                        "data-sentry-source-file": "HeaderDropdownMenuSection.tsx",
                        children: [(0, a.jsx)("div", {
                            className: o,
                            children: e
                        }), t.length > 0 && (0, a.jsx)("div", {
                            className: s,
                            children: t.map((e, t) => "dropdown" === n ? (0, a.jsx)(v, {
                                href: e.href,
                                icon: e.icon,
                                title: e.title
                            }, `header-dropdown-menu-link-${e.title}-${t}`) : (0, a.jsx)(y, {
                                variant: "medium",
                                href: e.href,
                                icon: e.icon,
                                title: e.title,
                                tag: e.tag,
                                description: e.description,
                                isExternal: e.isExternal,
                                image: e.image
                            }, `header-dropdown-menu-link-${e.title}-${t}`))
                        }), r.length > 0 && (0, a.jsx)("div", {
                            className: i,
                            children: r.map((e, t) => (0, a.jsx)(u.A, {
                                href: e.href,
                                size: "xs",
                                variant: e.variant || "secondary",
                                icon: e.icon,
                                iconDirection: e.iconDirection || "right",
                                "data-link-location": c.V.headerDropdownMenuSectionAction,
                                children: e.title
                            }, `header-dropdown-menu-action-${e.title}-${t}`))
                        })]
                    })
                };
            var k = r(10986),
                j = r(77090),
                w = r(37640),
                N = r(67536);
            let L = n.forwardRef(({
                icon: e,
                isActive: t = !1,
                className: r,
                onClick: n,
                onMouseEnter: o,
                onFocus: s,
                onTouchStart: i
            }, d) => {
                let c = (0, l.A)("rounded-full transition-colors text-white", "border hover:border-gray-700 focus:border-gray-700", {
                    "border border-gray-700": t,
                    "border-transparent": !t
                }, r);
                return (0, a.jsx)(N.$, {
                    ref: d,
                    className: c,
                    onPress: n,
                    onHoverStart: o,
                    onFocus: s,
                    children: (0, a.jsx)("div", {
                        onTouchStart: i,
                        children: e
                    })
                })
            });
            L.displayName = "HeaderIconButton";
            let F = ({
                    icon: e,
                    children: t,
                    placement: r = "bottom end",
                    offset: o = 24,
                    className: s,
                    onOpen: d
                }) => {
                    let [c, u] = (0, n.useState)(!1), m = (0, i.usePathname)();
                    return (0, n.useEffect)(() => {
                        u(!1)
                    }, [m]), (0, a.jsxs)(a.Fragment, {
                        children: [c && (0, a.jsx)(w.m.div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: .5,
                                ease: [.25, 1, .5, 1]
                            },
                            className: "fixed inset-0 top-0 bg-black/20"
                        }), (0, a.jsxs)(k.cQ, {
                            isOpen: c,
                            onOpenChange: e => {
                                u(e), d?.(e)
                            },
                            "data-sentry-element": "MenuTrigger",
                            "data-sentry-source-file": "HeaderDropdown.tsx",
                            children: [(0, a.jsx)(L, {
                                icon: e,
                                isActive: c,
                                "data-sentry-element": "HeaderIconButton",
                                "data-sentry-source-file": "HeaderDropdown.tsx"
                            }), (0, a.jsx)(j.A, {
                                placement: r,
                                offset: o,
                                className: "dark",
                                "data-sentry-element": "Popover",
                                "data-sentry-source-file": "HeaderDropdown.tsx",
                                children: (0, a.jsx)(w.m.div, {
                                    initial: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: 10
                                    },
                                    transition: {
                                        duration: .5,
                                        ease: [.25, 1, .5, 1]
                                    },
                                    className: (0, l.A)("fixed w-full bg-gradient-to-t from-[#262626] to-black max-lg:top-[4rem] max-lg:left-0 lg:static lg:w-80 lg:from-black/80 lg:to-gray-900/80 lg:backdrop-blur-[1.5rem]", "flex flex-col items-center justify-center gap-4 overflow-hidden p-3 outline-hidden max-lg:rounded-b-2xl lg:rounded-2xl", s),
                                    "data-sentry-element": "m.div",
                                    "data-sentry-source-file": "HeaderDropdown.tsx",
                                    children: t
                                })
                            })]
                        })]
                    })
                },
                A = ({
                    featuredLink: e,
                    menus: t
                }) => (0, a.jsx)(F, {
                    icon: (0, a.jsx)("div", {
                        className: "p-2.5",
                        children: (0, a.jsx)(m.A, {
                            icon: "storefront",
                            size: "0.875rem"
                        })
                    }),
                    "data-sentry-element": "HeaderDropdown",
                    "data-sentry-component": "HeaderStoreDropdown",
                    "data-sentry-source-file": "HeaderStoreDropdown.tsx",
                    children: (0, a.jsxs)("div", {
                        className: "flex w-full flex-col gap-4",
                        children: [e && (0, a.jsx)(y, {
                            variant: "large",
                            href: e.href,
                            title: e.title,
                            description: e.description,
                            image: e.image,
                            icon: e.icon,
                            isExternal: e.isExternal
                        }), t.length > 0 && (0, a.jsx)("div", {
                            className: "border-t border-gray-700 pt-3",
                            children: t.map((e, t) => (0, a.jsx)(b, {
                                title: e.title,
                                links: e.links,
                                variant: "dropdown"
                            }, `header-dropdown-menu-${e.title}-${t}`))
                        })]
                    })
                }),
                E = ({
                    title: e,
                    description: t,
                    onLogout: r,
                    onAccount: n,
                    image: o,
                    accountText: s = "My Account"
                }) => (0, a.jsxs)("div", {
                    className: "relative h-[11.75rem] w-full overflow-hidden rounded-xl p-3 shadow-md",
                    "data-sentry-component": "HeaderUserSpotlight",
                    "data-sentry-source-file": "HeaderUserSpotlight.tsx",
                    children: [o && (0, a.jsx)(x.default, {
                        src: o.src,
                        alt: "",
                        fill: !0,
                        placeholder: "blur",
                        blurDataURL: o.placeholder,
                        sizes: "(max-width: 768px) 100vw, 20rem",
                        className: "absolute inset-0 z-0 object-cover object-center"
                    }), (0, a.jsx)("div", {
                        className: "absolute inset-0 z-10",
                        style: {
                            background: "linear-gradient(180deg, rgba(27, 27, 27, 0.50) 8.12%, rgba(0, 0, 0, 0.50) 59.95%)"
                        }
                    }), (0, a.jsxs)("div", {
                        className: "relative z-20 flex h-full flex-col justify-between",
                        children: [(0, a.jsxs)("div", {
                            className: "flex items-start justify-between",
                            children: [(0, a.jsxs)("div", {
                                className: "flex flex-col gap-1",
                                children: [(0, a.jsx)("div", {
                                    className: "mango-text-heading-xs text-mango-white",
                                    children: e
                                }), (0, a.jsx)("div", {
                                    className: "mango-text-body-sm text-mango-gray-400",
                                    children: t
                                })]
                            }), (0, a.jsx)(u.A, {
                                icon: "sign-out",
                                variant: "outline",
                                size: "xs",
                                onClick: r,
                                "aria-label": "Logout",
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "HeaderUserSpotlight.tsx"
                            })]
                        }), (0, a.jsx)("div", {
                            children: (0, a.jsx)(u.A, {
                                size: "sm",
                                variant: "secondary",
                                icon: "user",
                                iconDirection: "left",
                                onClick: n,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "HeaderUserSpotlight.tsx",
                                children: s
                            })
                        })]
                    })]
                }),
                R = ({
                    menus: e,
                    userSpotlight: t,
                    signInText: r = "Sign in or create Unity ID",
                    onSignIn: n,
                    initials: o
                }) => (0, a.jsx)(F, {
                    icon: o ? (0, a.jsx)("div", {
                        className: "mango-text-heading-5xs flex h-9 w-9 items-center justify-center text-white capitalize",
                        children: o
                    }) : (0, a.jsx)("div", {
                        className: "p-2.5",
                        children: (0, a.jsx)(m.A, {
                            icon: "user",
                            size: "0.875rem"
                        })
                    }),
                    "data-sentry-element": "HeaderDropdown",
                    "data-sentry-component": "HeaderDropdownUser",
                    "data-sentry-source-file": "HeaderDropdownUser.tsx",
                    children: (0, a.jsxs)("div", {
                        className: "flex w-full flex-col gap-4",
                        children: [t ? (0, a.jsx)(E, {
                            title: t.title,
                            description: t.description,
                            image: t.image,
                            onLogout: t.onLogout,
                            onAccount: t.onAccount,
                            accountText: t.accountText
                        }) : (0, a.jsx)(u.A, {
                            className: "w-full",
                            icon: "user",
                            iconDirection: "left",
                            onClick: n,
                            children: r
                        }), e.length > 0 && (0, a.jsx)("div", {
                            className: "border-t border-gray-700 pt-3",
                            children: e.map((e, t) => (0, a.jsx)(b, {
                                title: e.title,
                                links: e.links,
                                actions: e.actions,
                                variant: "compact"
                            }, `header-dropdown-menu-${e.title}-${t}`))
                        })]
                    })
                });
            var S = r(87121);
            let _ = ({
                    tag: e,
                    title: t,
                    description: r,
                    image: n,
                    link: o,
                    buttonText: s
                }) => (0, a.jsxs)(d.N_, {
                    className: "group bg-mango-black relative block h-80 overflow-hidden rounded-2xl p-5 shadow-[0_1px_0_0_#424242_inset]",
                    href: o.href,
                    target: o.target || "_self",
                    "data-sentry-element": "Link",
                    "data-sentry-component": "HeaderHighlightBox",
                    "data-sentry-source-file": "HeaderHighlightBox.tsx",
                    children: [n && (0, a.jsx)(x.default, {
                        src: n.src,
                        alt: "",
                        fill: !0,
                        sizes: "25vw",
                        placeholder: "blur",
                        blurDataURL: n.placeholder,
                        className: "rounded-2xl object-cover transition-transform duration-[400ms] ease-in-out group-hover:scale-125"
                    }), (0, a.jsxs)("div", {
                        className: "flex h-full max-w-72 flex-col justify-between",
                        children: [(0, a.jsxs)("div", {
                            className: "flex flex-col items-start",
                            children: [e && (0, a.jsx)(p, {
                                className: "mb-3",
                                children: e
                            }), (0, a.jsx)("div", {
                                className: "mango-text-heading-xs text-mango-white",
                                children: t
                            }), r && (0, a.jsx)("div", {
                                className: "mango-text-body-sm text-mango-gray-400 mt-1",
                                children: r
                            })]
                        }), s && (0, a.jsx)("div", {
                            className: "translate-y-[200%] transform transition-transform duration-[400ms] ease-in-out group-hover:translate-y-0",
                            children: (0, a.jsx)(u.A, {
                                variant: "secondary",
                                size: "sm",
                                as: "div",
                                children: s
                            })
                        })]
                    })]
                }),
                C = n.forwardRef(({
                    isOpen: e,
                    active: t,
                    panels: r,
                    onKeyDown: n,
                    panelRefs: o
                }, s) => {
                    let i = null !== t && void 0 !== r[t],
                        l = {
                            hidden: {
                                opacity: 0,
                                y: -10,
                                transition: {
                                    duration: .2,
                                    ease: [.25, 1, .5, 1]
                                }
                            },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: .3,
                                    delay: .1,
                                    ease: [.25, 1, .5, 1]
                                }
                            }
                        };
                    return (0, a.jsx)(S.Uu, {
                        ref: s,
                        variants: {
                            hidden: {
                                opacity: 0,
                                height: 0,
                                minHeight: 0,
                                paddingTop: 0,
                                paddingBottom: 0,
                                transition: {
                                    duration: .3,
                                    ease: [.25, 1, .5, 1]
                                }
                            },
                            visible: {
                                opacity: 1,
                                height: "auto",
                                minHeight: "27rem",
                                paddingTop: "2.5rem",
                                paddingBottom: "2.5rem",
                                transition: {
                                    duration: .3,
                                    ease: [.25, 1, .5, 1]
                                }
                            }
                        },
                        initial: "hidden",
                        animate: e && i ? "visible" : "hidden",
                        className: "absolute top-full right-0 left-0 z-40 w-full overflow-hidden rounded-b-[1rem] px-[4.625rem] shadow-2xl backdrop-blur-[24px]",
                        role: "menu",
                        "aria-hidden": !e || !i,
                        onKeyDown: n,
                        style: {
                            background: "linear-gradient(0deg, rgba(38, 38, 38, 0.80) -53.45%, rgba(0, 0, 0, 0.80) 91.71%)",
                            pointerEvents: e && i ? "auto" : "none"
                        },
                        children: (0, a.jsx)("div", {
                            className: "relative w-full",
                            children: r.map((r, n) => {
                                if (!r) return null;
                                let s = t === n && e,
                                    i = r.highlightBox;
                                return (0, a.jsxs)(S.Uu, {
                                    ref: e => {
                                        o && (o.current[n] = e)
                                    },
                                    variants: l,
                                    initial: "hidden",
                                    animate: s ? "visible" : "hidden",
                                    className: "grid w-full grid-cols-12 gap-6",
                                    style: {
                                        position: s ? "relative" : "absolute",
                                        pointerEvents: s ? "auto" : "none"
                                    },
                                    "aria-hidden": !s,
                                    children: [r.sections.map((e, t) => (0, a.jsx)("div", {
                                        className: "md:col-span-4 xl:col-span-3",
                                        children: (0, a.jsx)(b, {
                                            ...e
                                        })
                                    }, `section-${e.title}-${t}`)), i && (0, a.jsx)("div", {
                                        className: "hidden xl:col-span-3 xl:block",
                                        children: (0, a.jsx)(_, {
                                            ...i
                                        })
                                    })]
                                }, `mega-menu-panel-${n}`)
                            })
                        })
                    })
                });
            C.displayName = "HeaderMegaMenu";
            var I = r(14700),
                D = r(34733);

            function U({
                navigation: e,
                action: t,
                secondaryAction: r,
                utilityNavigationItems: o
            }) {
                let [s, l] = (0, n.useState)(null), [d, m] = (0, n.useState)(!1), h = (0, i.usePathname)(), g = (0, n.useRef)(null), x = (0, n.useRef)(null), f = o ? o.filter(e => "string" != typeof e) : [];
                return (0, n.useEffect)(() => {
                    if (d) return document.body.style.overflow = "hidden", () => {
                        document.body.style.overflow = ""
                    }
                }, [d]), (0, n.useEffect)(() => {
                    m(!1)
                }, [h]), (0, n.useEffect)(() => {
                    let e = e => {
                        let t = e.target;
                        g.current && !g.current.contains(t) && x.current && !x.current.contains(t) && m(!1)
                    };
                    if (d) return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [d]), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: x,
                        children: (0, a.jsx)(u.A, {
                            className: "block lg:hidden",
                            variant: "secondary",
                            icon: d ? "x" : "list",
                            size: "sm",
                            onClick: () => m(!d),
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "HeaderMobile.tsx"
                        })
                    }), (0, a.jsx)(I.N, {
                        mode: "wait",
                        "data-sentry-element": "AnimatePresence",
                        "data-sentry-source-file": "HeaderMobile.tsx",
                        children: d && (0, a.jsx)(S.Uu, {
                            ref: g,
                            variants: {
                                initial: {
                                    y: 30,
                                    opacity: 0
                                },
                                enter: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: .35,
                                        ease: [.25, 1, .5, 1]
                                    }
                                },
                                exit: {
                                    opacity: 0,
                                    transition: {
                                        duration: .35,
                                        ease: [.25, 1, .5, 1]
                                    }
                                }
                            },
                            initial: "initial",
                            animate: "enter",
                            exit: "exit",
                            className: "absolute top-full left-0 h-[calc(100svh-64px)] w-full overflow-y-auto bg-black lg:hidden",
                            children: (0, a.jsxs)("div", {
                                className: "mt-10 mb-5 flex flex-col px-4",
                                children: [e.map((e, t) => (0, a.jsx)(P, {
                                    ...e,
                                    active: s === t,
                                    setActive: l,
                                    index: t
                                }, `search-modal-search-result-${e.title}-${t}`)), f.length > 0 ? f.map((e, t) => (0, a.jsx)(u.A, {
                                    className: `w-full lg:hidden ${0===t?"mt-12":"mt-6"}`,
                                    size: "lg",
                                    variant: e.variant ?? "primary",
                                    href: e.link?.href,
                                    target: e.link?.target,
                                    "data-link-location": c.V.headerMobileAction,
                                    children: e.label
                                }, `mobile-action-${t}`)) : (0, a.jsxs)(a.Fragment, {
                                    children: [t && (0, a.jsx)(u.A, {
                                        className: "mt-12 w-full lg:hidden",
                                        size: "lg",
                                        href: t.href,
                                        target: t.target,
                                        "data-link-location": c.V.headerMobileAction,
                                        children: t.label
                                    }), r && (0, a.jsx)(u.A, {
                                        className: "mt-6 w-full lg:hidden",
                                        size: "lg",
                                        variant: "secondary",
                                        href: r.href,
                                        target: r.target,
                                        "data-link-location": c.V.headerMobileSecondaryAction,
                                        children: r.label
                                    })]
                                })]
                            })
                        })
                    })]
                })
            }
            let P = ({
                    title: e,
                    link: t,
                    listingLabel: r,
                    panel: n,
                    active: o,
                    setActive: s,
                    index: i
                }) => {
                    let l = !!n;
                    return (0, a.jsxs)("div", {
                        className: "relative py-1.5",
                        "data-sentry-component": "HeaderMobileItem",
                        "data-sentry-source-file": "HeaderMobile.tsx",
                        children: [l ? (0, a.jsxs)("button", {
                            onClick: () => s(o ? null : i),
                            className: "relative z-10 flex w-full items-center justify-between",
                            children: [(0, a.jsx)(S.rL, {
                                animate: {
                                    x: 24 * !!o,
                                    y: 6 * !!o,
                                    scale: o ? 1.2 : 1
                                },
                                transition: {
                                    duration: .5,
                                    ease: [.25, 1, .5, 1]
                                },
                                className: "mango-text-heading-2xs leading-none! text-white",
                                children: e
                            }), (0, a.jsx)(S.hJ, {
                                animate: {
                                    x: o ? -16 : 0,
                                    y: 6 * !!o,
                                    rotate: 90 * !!o
                                },
                                transition: {
                                    duration: .5,
                                    ease: [.25, 1, .5, 1]
                                },
                                className: "inline-block",
                                children: (0, a.jsx)(u.A, {
                                    icon: "caret-right",
                                    size: "sm",
                                    iconWeight: "fill",
                                    variant: o ? "secondary" : "ghost"
                                })
                            })]
                        }) : (0, a.jsx)(d.N_, {
                            href: t?.href || "",
                            target: t?.target === "_blank" ? "_blank" : void 0,
                            className: "relative z-10 flex w-full items-center py-2.5",
                            "data-link-location": c.V.headerNavigationItem,
                            children: (0, a.jsx)("p", {
                                className: "mango-text-heading-2xs leading-none! text-white",
                                children: e
                            })
                        }), (0, a.jsxs)(I.N, {
                            mode: "wait",
                            "data-sentry-element": "AnimatePresence",
                            "data-sentry-source-file": "HeaderMobile.tsx",
                            children: [l && o && n && (0, a.jsx)(H, {
                                panel: n,
                                listingLabel: r,
                                link: t
                            }), l && o && (0, a.jsx)(S.hJ, {
                                variants: {
                                    initial: {
                                        y: -10,
                                        opacity: 0
                                    },
                                    enter: {
                                        y: 0,
                                        opacity: 1,
                                        transition: {
                                            duration: .75,
                                            ease: [.25, 1, .5, 1]
                                        }
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: -10,
                                        transition: {
                                            duration: .75,
                                            ease: [.25, 1, .5, 1]
                                        }
                                    }
                                },
                                initial: "initial",
                                animate: "enter",
                                exit: "exit",
                                "aria-hidden": !0,
                                className: "absolute top-[-.25rem] z-1 inline-block h-[calc(100%+.25rem)] w-full rounded-[1rem] bg-[#1B1B1B] shadow-[inset_0px_1px_0px_0px_#424242]"
                            })]
                        })]
                    })
                },
                H = ({
                    panel: e,
                    listingLabel: t,
                    link: r
                }) => (0, a.jsxs)(S.Uu, {
                    variants: {
                        initial: {
                            height: 0,
                            y: -10
                        },
                        enter: {
                            height: "auto",
                            y: 0,
                            transition: {
                                duration: .75,
                                ease: [.25, 1, .5, 1]
                            }
                        },
                        exit: {
                            height: 0,
                            y: -10,
                            transition: {
                                duration: .75,
                                ease: [.25, 1, .5, 1]
                            }
                        }
                    },
                    initial: "initial",
                    animate: "enter",
                    exit: "exit",
                    className: "relative z-10 overflow-hidden px-4",
                    "data-sentry-element": "m.div",
                    "data-sentry-component": "HeaderMobilePanel",
                    "data-sentry-source-file": "HeaderMobile.tsx",
                    children: [(0, a.jsx)("span", {
                        "aria-hidden": !0,
                        className: "block h-[3.125rem]"
                    }), (0, a.jsx)("div", {
                        className: "flex flex-col gap-9",
                        children: e.sections.map(({
                            title: e,
                            actions: t,
                            mobileActions: r,
                            links: n
                        }, o) => (0, a.jsxs)("div", {
                            className: "flex flex-col gap-4",
                            children: [(0, a.jsx)("div", {
                                className: "border-b border-gray-700",
                                children: (0, a.jsx)("p", {
                                    className: "mango-text-input mb-2 text-gray-400",
                                    children: e
                                })
                            }), (0, a.jsxs)("div", {
                                className: "flex flex-col gap-3",
                                children: [n?.map(({
                                    title: e,
                                    href: t,
                                    icon: r,
                                    image: n,
                                    isExternal: o
                                }, s) => (0, a.jsxs)(d.N_, {
                                    href: t,
                                    className: "flex items-center gap-3",
                                    "data-link-location": c.V.headerMobilePanelLink,
                                    children: [(0, a.jsxs)("div", {
                                        className: "flex h-[2.5rem] w-[2.5rem] shrink-0 items-center justify-center",
                                        children: [r && (0, a.jsx)(D.Ay, {
                                            icon: r,
                                            size: "1.5rem"
                                        }), n && (0, a.jsx)(x.default, {
                                            src: n.src,
                                            alt: n.alt,
                                            height: 24,
                                            width: 24,
                                            placeholder: "blur",
                                            blurDataURL: n.placeholder
                                        })]
                                    }), (0, a.jsxs)("p", {
                                        className: "mango-text-heading-3xs flex items-center gap-2 text-white",
                                        children: [e, o && (0, a.jsx)(D.Ay, {
                                            icon: "arrow-up-right",
                                            size: "1rem"
                                        })]
                                    })]
                                }, `header-mobile-panel-section-links-${e}-${s}`)), (0, a.jsx)("div", {
                                    className: "mt-1 flex flex-col gap-3",
                                    children: (r || t)?.map(({
                                        title: e,
                                        href: t,
                                        variant: r,
                                        icon: n,
                                        iconDirection: o
                                    }, s) => (0, a.jsx)(u.A, {
                                        href: t,
                                        variant: r || "outline",
                                        icon: n || void 0,
                                        iconDirection: o || "right",
                                        size: "xs",
                                        "data-link-location": c.V.headerMobilePanelAction,
                                        children: e
                                    }, `header-mobile-panel-section-actions-${e}-${s}`))
                                })]
                            })]
                        }, `header-mobile-panel-section-${e}-${o}`))
                    }), (0, a.jsx)(u.A, {
                        href: r.href,
                        className: "mt-9 w-full",
                        variant: "secondary",
                        icon: "arrow-right",
                        size: "lg",
                        "data-link-location": c.V.headerMobilePanelListing,
                        "data-sentry-element": "Button",
                        "data-sentry-source-file": "HeaderMobile.tsx",
                        children: t
                    }), (0, a.jsx)("span", {
                        "aria-hidden": !0,
                        className: "block h-[1.25rem]"
                    })]
                });
            var M = r(18350);
            let T = ({
                navigation: e = [],
                store: t,
                userMenu: r,
                onSearchOpen: o,
                onSearchHover: s,
                onSearchFocus: h,
                action: x,
                searchButtonRef: f,
                secondaryAction: p,
                utilityNavigationItems: y
            }) => {
                let [v, b] = (0, n.useState)(null), [k, j] = (0, n.useState)(!1), w = (0, i.usePathname)(), N = (0, n.useRef)(null), F = (0, n.useRef)([]), E = (0, n.useRef)(null), S = (0, n.useRef)([]), _ = e?.map(e => e.panel) || [], D = {
                    search: e => (0, a.jsx)(L, {
                        ref: f,
                        onClick: T,
                        onMouseEnter: s,
                        onFocus: h,
                        onTouchStart: s,
                        icon: (0, a.jsx)("div", {
                            className: "p-2.5",
                            children: (0, a.jsx)(m.A, {
                                icon: "magnifying-glass",
                                size: "0.875rem"
                            })
                        })
                    }, `utility-nav-item-search-${e}`),
                    store: e => t ? (0, a.jsx)(I.N, {
                        mode: "wait",
                        children: (0, a.jsx)(A, {
                            ...t
                        })
                    }, `utility-nav-item-store-${e}`) : null,
                    profile: e => r ? (0, a.jsx)(I.N, {
                        mode: "wait",
                        children: (0, a.jsx)(R, {
                            ...r
                        })
                    }, `utility-nav-item-profile-${e}`) : null
                };
                (0, n.useEffect)(() => {
                    S.current.forEach((e, t) => {
                        if (!e) return;
                        let r = v === t && k;
                        e.querySelectorAll("a[href], button:not([disabled])").forEach(e => {
                            r ? e.removeAttribute("tabindex") : e.setAttribute("tabindex", "-1")
                        })
                    })
                }, [v, k]), (0, n.useEffect)(() => () => {
                    N.current && clearTimeout(N.current)
                }, []), (0, n.useEffect)(() => {
                    j(!1), b(null)
                }, [w]);
                let P = () => {
                        N.current && clearTimeout(N.current)
                    },
                    H = e => {
                        let t = S.current[e];
                        return t ? Array.from(t.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"])')) : []
                    },
                    T = () => {
                        o && o()
                    };
                return (0, a.jsx)(M.A, {
                    "data-sentry-element": "FramerMotionLazy",
                    "data-sentry-component": "Header",
                    "data-sentry-source-file": "Header.tsx",
                    children: (0, a.jsxs)("header", {
                        className: "dark sticky top-0 right-0 left-0 z-50 flex h-[4rem] items-center bg-black lg:h-[3rem]",
                        children: [k && null !== v && e[v]?.panel && (0, a.jsx)("div", {
                            className: "fixed inset-0 z-10 bg-black/10",
                            style: {
                                top: "3rem"
                            }
                        }), (0, a.jsxs)("div", {
                            className: "mango-container flex items-center justify-between px-6 py-1.5",
                            children: [(0, a.jsxs)("div", {
                                className: "flex items-center gap-9",
                                children: [(0, a.jsx)(g, {
                                    "data-sentry-element": "HeaderLogo",
                                    "data-sentry-source-file": "Header.tsx"
                                }), (0, a.jsxs)("div", {
                                    className: "hidden lg:block",
                                    role: "menubar",
                                    tabIndex: -1,
                                    onBlurCapture: e => {
                                        N.current = setTimeout(() => {
                                            let t = e.currentTarget,
                                                r = document.activeElement;
                                            t && r && !t.contains(r) && (j(!1), b(null))
                                        }, 150)
                                    },
                                    onMouseEnter: P,
                                    onMouseLeave: () => {
                                        N.current = setTimeout(() => {
                                            j(!1), b(null)
                                        }, 150)
                                    },
                                    onKeyDown: e => {
                                        "Escape" === e.key && k && (e.preventDefault(), j(!1), b(null), null !== v && F.current[v]?.focus())
                                    },
                                    children: [(0, a.jsx)("nav", {
                                        children: (0, a.jsx)("ul", {
                                            className: "flex",
                                            children: e.map((t, r) => {
                                                let n = !!t.panel;
                                                return (0, a.jsx)("li", {
                                                    children: (0, a.jsx)(d.N_, {
                                                        ref: e => {
                                                            F.current[r] = e
                                                        },
                                                        className: (0, l.A)("mango-text-heading-5xs text-mango-white hover:bg-mango-gray-950 block rounded-xl px-3 py-2", {
                                                            "bg-mango-gray-950": v === r && n
                                                        }),
                                                        href: t.link?.href,
                                                        target: t.link?.target === "_blank" ? "_blank" : void 0,
                                                        onMouseEnter: () => {
                                                            P(), n ? (b(r), j(!0)) : (b(null), j(!1))
                                                        },
                                                        onKeyDown: t => ((t, r) => {
                                                            let a = e[r]?.panel;
                                                            "ArrowDown" === t.key && a && (t.preventDefault(), b(r), j(!0), setTimeout(() => {
                                                                let e = H(r);
                                                                e[0]?.focus()
                                                            }, 100))
                                                        })(t, r),
                                                        "aria-haspopup": n ? "true" : void 0,
                                                        "aria-expanded": n && v === r && k ? "true" : "false",
                                                        "data-link-location": c.V.headerNavigationItem,
                                                        children: t.title
                                                    })
                                                }, `navigationItem-${t.title}-${r}`)
                                            })
                                        })
                                    }), (0, a.jsx)(C, {
                                        ref: E,
                                        isOpen: k,
                                        active: v,
                                        panels: _,
                                        panelRefs: S,
                                        onKeyDown: e => {
                                            if ("Escape" === e.key) {
                                                e.preventDefault(), e.stopPropagation(), j(!1), b(null), null !== v && F.current[v]?.focus();
                                                return
                                            }
                                            if ("Tab" === e.key && k && null !== v) {
                                                let t = null === v ? [] : H(v);
                                                if (0 === t.length) return;
                                                let r = t[0],
                                                    a = e.target,
                                                    n = t.indexOf(a);
                                                if (-1 === n) return;
                                                e.shiftKey ? 0 === n && (e.preventDefault(), j(!1), b(null), F.current[v]?.focus()) : n === t.length - 1 && (e.preventDefault(), r.focus())
                                            }
                                        },
                                        "data-sentry-element": "HeaderMegaMenu",
                                        "data-sentry-source-file": "Header.tsx"
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center gap-3",
                                children: [y ? y.map((e, t) => ((e, t) => "string" == typeof e ? D[e]?.(t) ?? null : (0, a.jsx)(u.A, {
                                    className: "hidden lg:flex",
                                    size: "xs",
                                    variant: e.variant ?? "primary",
                                    href: e.link?.href,
                                    target: e.link?.target,
                                    "data-link-location": "secondary" === e.variant ? c.V.headerSecondaryAction : c.V.headerAction,
                                    "data-sentry-element": "Button",
                                    "data-sentry-component": "renderUtilityNavigationItem",
                                    "data-sentry-source-file": "Header.tsx",
                                    children: e.label
                                }, `utility-nav-item-action-${t}`))(e, t)) : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)(L, {
                                        ref: f,
                                        onClick: T,
                                        onMouseEnter: s,
                                        onFocus: h,
                                        onTouchStart: s,
                                        icon: (0, a.jsx)("div", {
                                            className: "p-2.5",
                                            children: (0, a.jsx)(m.A, {
                                                icon: "magnifying-glass",
                                                size: "0.875rem"
                                            })
                                        })
                                    }), (0, a.jsx)(I.N, {
                                        mode: "wait",
                                        children: t && (0, a.jsx)(A, {
                                            ...t
                                        })
                                    }), (0, a.jsx)(I.N, {
                                        mode: "wait",
                                        children: r && (0, a.jsx)(R, {
                                            ...r
                                        })
                                    }), p && (0, a.jsx)(u.A, {
                                        className: "hidden lg:flex",
                                        size: "xs",
                                        variant: "secondary",
                                        href: p.href,
                                        target: p.target,
                                        "data-link-location": c.V.headerSecondaryAction,
                                        children: p.label
                                    }), x && (0, a.jsx)(u.A, {
                                        className: "hidden lg:flex",
                                        size: "xs",
                                        href: x.href,
                                        target: x.target,
                                        "data-link-location": c.V.headerAction,
                                        children: x.label
                                    })]
                                }), (0, a.jsx)(U, {
                                    navigation: e,
                                    action: x,
                                    secondaryAction: p,
                                    utilityNavigationItems: y,
                                    "data-sentry-element": "HeaderMobile",
                                    "data-sentry-source-file": "Header.tsx"
                                })]
                            })]
                        })]
                    })
                })
            };
            var $ = r(94329),
                z = r(33783),
                B = r(66977),
                O = r(74615);
            let V = ({
                    action: e,
                    level: t,
                    pageDetails: r
                }) => ({
                    event: "userEvent",
                    event_name: "navigation_action",
                    properties: {
                        ...r,
                        navigation_action: e,
                        navigation_level: t || ""
                    }
                }),
                G = e => {
                    let t = e.location;
                    return {
                        page_url: t.href,
                        page_hostname: t.hostname,
                        page_path: t.pathname,
                        page_query: t.search,
                        page_fragment: t.hash,
                        page_title: e.title
                    }
                },
                q = (0, o.default)(() => Promise.all([r.e(87885), r.e(8111), r.e(43360)]).then(r.bind(r, 43360)), {
                    loadableGenerated: {
                        webpack: () => [43360]
                    },
                    ssr: !1
                });

            function K({
                data: e,
                locale: t
            }) {
                let [r, o] = (0, n.useState)(!1), [l, d] = (0, n.useState)(!1), c = (0, n.useRef)(null), {
                    user: u,
                    signIn: m,
                    signOut: h,
                    signUp: g
                } = (({
                    locale: e
                } = {}) => {
                    let [t, r] = (0, n.useState)(null), [a, o] = (0, n.useState)(!1), {
                        genesisSession: s
                    } = (0, z.oQ)(), l = (0, i.usePathname)() || "/";
                    (0, n.useEffect)(() => {
                        (async () => {
                            o(!0);
                            try {
                                let {
                                    users: e
                                } = await (0, B.Y)();
                                if (e.length > 0) {
                                    let t = e[0] ?? {},
                                        a = t.name?.givenName,
                                        n = t.name?.familyName,
                                        s = t.name?.fullName;
                                    if (s && (!a || !n)) {
                                        let e = s.trim().split(/\s+/);
                                        a || (a = e[0] || ""), !n && e.length > 1 && (n = e[e.length - 1] || "")
                                    }
                                    r({
                                        initials: ((e, t, r) => {
                                            let a = t ?? "",
                                                n = r ?? "";
                                            if (e) {
                                                let t = e.split(" ");
                                                a = t[0], n = t.length > 1 ? t[t.length - 1] : ""
                                            }
                                            return `${a[0]??""}${n[0]??""}`
                                        })(s, a, n),
                                        ...t,
                                        name: {
                                            fullName: s || "",
                                            givenName: a || "",
                                            familyName: n || ""
                                        }
                                    }), o(!1)
                                }
                            } catch (e) {
                                console.error(e)
                            }
                        })()
                    }, []);
                    let d = new URLSearchParams({
                        client_id: "cms_unity",
                        response_type: "code",
                        redirect_uri: "https://unity.com/oauth",
                        ...e && {
                            locale: "en" === e ? "en_us" : e
                        }
                    }).toString();
                    return {
                        user: t,
                        loading: a,
                        signIn: () => {
                            sessionStorage.setItem("REDIRECT_PATH", l), window.location.href = `https://api.unity.com/v1/oauth2/authorize?${d}`
                        },
                        signOut: () => {
                            let e = new URLSearchParams({
                                access_token: s.access_token,
                                post_logout_redirect_uri: `https://unity.com${l}`
                            }).toString();
                            sessionStorage.clear(), window.location.href = `https://api.unity.com/v1/oauth2/end-session?${e}`
                        },
                        signUp: () => {
                            sessionStorage.setItem("REDIRECT_PATH", l), window.location.href = `https://api.unity.com/v1/oauth2/authorize?${d}&is_reg=true`
                        }
                    }
                })({
                    locale: t
                }), x = (0, n.useCallback)(() => {
                    d(!0)
                }, []), f = (0, n.useCallback)(() => {
                    o(!0);
                    let e = V({
                        action: "search modal open",
                        level: "header",
                        pageDetails: G(document)
                    });
                    (0, O.Ay)(e)
                }, []), p = (0, n.useCallback)(e => {
                    if (o(e), !e) {
                        let e = V({
                            action: "search modal close",
                            level: "header",
                            pageDetails: G(document)
                        });
                        (0, O.Ay)(e), requestAnimationFrame(() => {
                            c.current?.focus()
                        })
                    }
                }, []), y = e?.navigation?.map(e => {
                    let t = {
                        title: e.title,
                        link: e.fieldLink?.linkReference?.href?.current ? {
                            href: e.fieldLink.linkReference.href.current,
                            target: e.fieldLink.linkReference.target
                        } : {
                            href: ""
                        },
                        listingLabel: e.listingLabel
                    };
                    return e.panel && (t.panel = {
                        sections: e.panel.sections?.map(e => ({
                            title: e.title,
                            links: e.links?.map(e => {
                                let t = {
                                    title: e.title,
                                    description: e.description,
                                    tag: e.tag,
                                    isExternal: e.isExternal,
                                    href: e.fieldLink?.linkReference?.href?.current || ""
                                };
                                return "icon" === e.visualType ? e.icon && (t.icon = e.icon) : "image" === e.visualType && e.image && (t.image = {
                                    src: (0, $.i)(e.image)?.fit("crop").width(30).height(30).dpr(2).url() ?? "",
                                    alt: e.image.alt ?? "",
                                    placeholder: e.image.asset?.metadata?.lqip ?? ""
                                }), t
                            }) || [],
                            actions: e.actions?.map(e => ({
                                title: e.title,
                                href: e.fieldLink?.linkReference?.href?.current || "",
                                variant: e.variant,
                                icon: e.icon || void 0,
                                iconDirection: e.iconDirection || "right"
                            })) || [],
                            mobileActions: e.mobileActions?.map(e => ({
                                title: e.title,
                                href: e.fieldLink?.linkReference?.href?.current || "",
                                variant: e.variant,
                                icon: e.icon || void 0,
                                iconDirection: e.iconDirection || "right"
                            })) || void 0
                        })) || [],
                        highlightBox: e.panel.highlightBox ? {
                            tag: e.panel.highlightBox.tag,
                            title: e.panel.highlightBox.title,
                            description: e.panel.highlightBox.description,
                            image: e.panel.highlightBox.image ? {
                                src: (0, $.i)(e.panel.highlightBox.image)?.fit("crop").width(400).height(400).dpr(2).url() ?? "",
                                placeholder: e.panel.highlightBox.image.asset?.metadata?.lqip || ""
                            } : void 0,
                            link: e.panel.highlightBox.fieldLink?.linkReference?.href?.current ? {
                                href: e.panel.highlightBox.fieldLink.linkReference.href.current
                            } : {
                                href: ""
                            },
                            buttonText: e.panel.highlightBox.buttonText
                        } : void 0
                    }), t
                }), v = {
                    menus: e?.userMenu?.menus?.map(e => ({
                        title: e.title,
                        links: e.links?.map(e => ({
                            title: e.title,
                            href: e.fieldLink?.linkReference?.href?.current || "",
                            icon: e.icon || void 0
                        })) || [],
                        actions: e.actions?.map(e => ({
                            title: e.title,
                            href: e.fieldLink?.linkReference?.href?.current || ""
                        })) || []
                    })) || [],
                    signInText: e?.userMenu?.signInText || void 0,
                    onSignIn: m,
                    initials: u?.login ? u?.initials : void 0,
                    userSpotlight: u?.login ? {
                        title: e?.userMenu?.userGreeting ? s.A.render(e.userMenu.userGreeting, {
                            name: u?.name.givenName || "User"
                        }) : u?.name.givenName || "User",
                        description: u?.email || "",
                        onLogout: h,
                        onAccount: () => {
                            window.location.href = "https://cloud.unity.com/account/account-settings"
                        },
                        accountText: e?.userMenu?.accountText || "My Account",
                        image: e?.userMenu?.userSpotlightImage ? {
                            src: (0, $.i)(e.userMenu.userSpotlightImage)?.fit("crop").width(768).dpr(2).url() ?? "",
                            placeholder: e.userMenu.userSpotlightImage.asset?.metadata?.lqip ?? ""
                        } : void 0
                    } : void 0
                }, b = null;
                if (e?.store?.featuredLink) {
                    let t = e.store.featuredLink;
                    b = {
                        title: t.title,
                        description: t.description ?? void 0,
                        href: t.fieldLink?.linkReference?.href?.current || "",
                        isExternal: t.isExternal ?? void 0
                    }, "icon" === t.visualType && t.icon && (b.icon = t.icon), "image" === t.visualType && t.image && (b.image = {
                        src: (0, $.i)(t.image)?.fit("crop").width(30).height(30).dpr(2).url() ?? "",
                        alt: t.image.alt ?? "",
                        placeholder: t.image.asset?.metadata?.lqip ?? ""
                    })
                }
                let k = {
                        navigation: y,
                        store: {
                            featuredLink: b,
                            menus: e?.store?.menus?.map(e => ({
                                title: e.title,
                                links: e.links?.map(e => ({
                                    title: e.title,
                                    href: e.fieldLink?.linkReference?.href?.current || ""
                                })) || []
                            })) || []
                        },
                        userMenu: v,
                        onSearchOpen: f,
                        onSearchHover: x,
                        onSearchFocus: x,
                        searchButtonRef: c,
                        action: e?.action ? {
                            label: e.action.label || "",
                            href: e.action.fieldLink?.linkReference?.href?.current || void 0,
                            target: e.action.fieldLink?.linkReference?.target || void 0
                        } : void 0,
                        secondaryAction: e?.secondaryAction ? {
                            label: e.secondaryAction.label || "",
                            href: e.secondaryAction.fieldLink?.linkReference?.href?.current || void 0,
                            target: e.secondaryAction.fieldLink?.linkReference?.target || void 0
                        } : void 0,
                        utilityNavigationItems: (e => {
                            if (e) return e.map(e => "utilityIcon" === e._type ? e.icon : {
                                label: e.label,
                                link: {
                                    href: e.fieldLink?.linkReference?.href?.current,
                                    target: e.fieldLink?.linkReference?.target
                                },
                                variant: e.variant
                            })
                        })(e?.utilityNavigationItems)
                    },
                    j = e?.search?.filterTabs?.map(e => e) || [];
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(T, {
                        ...k,
                        "data-sentry-element": "Header",
                        "data-sentry-source-file": "MangoHeader.tsx"
                    }), (l || r) && (0, a.jsx)(q, {
                        isOpen: r,
                        onOpenChange: p,
                        placeholder: e?.search?.placeholder,
                        noResultsMessage: e?.search?.noResultsMessage,
                        filterTabs: j
                    })]
                })
            }
        },
        47977: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => s
            });
            var a = r(80475),
                n = r(18227),
                o = r(33497);
            let s = () => {
                let e = (0, o.usePathname)();
                return (0, a.jsxs)("div", {
                    className: "fixed bottom-0 z-50 flex h-[60px] w-full items-center bg-[white] bg-orange-100 px-5",
                    "data-sentry-component": "PreviewExitBanner",
                    "data-sentry-source-file": "PreviewExitBanner.tsx",
                    children: [(0, a.jsx)("div", {
                        className: "flex flex-1 items-center",
                        children: (0, a.jsxs)("h4", {
                            className: "",
                            children: ["You are in ", (0, a.jsx)("b", {
                                children: "Draft Mode"
                            }), ", your changes will be live once you publish them, be cautious."]
                        })
                    }), (0, a.jsx)(n.A, {
                        className: "rounded-sm text-white",
                        href: `/api/exit-draft?destination=${e}`,
                        prefetch: !1,
                        "data-sentry-element": "Button",
                        "data-sentry-source-file": "PreviewExitBanner.tsx",
                        children: "Exit Draft Mode"
                    })]
                })
            }
        },
        53235: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => m
            });
            var a = r(80475),
                n = r(88491),
                o = r(62060),
                s = r(16335),
                i = r(34335),
                l = r(9496),
                d = r(86713),
                c = r(21085);
            let u = ({
                    className: e,
                    width: t = 16,
                    height: r = 16
                }) => (0, a.jsx)("button", {
                    "aria-label": "Open in new tab",
                    "data-sentry-component": "ExternalLinkIcon",
                    "data-sentry-source-file": "ExternalLinkIcon.tsx",
                    children: (0, a.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 15 14",
                        className: e,
                        height: r,
                        width: t,
                        "data-sentry-element": "svg",
                        "data-sentry-source-file": "ExternalLinkIcon.tsx",
                        children: (0, a.jsx)("path", {
                            d: "M12.969 5.688a.656.656 0 0 1-1.313 0V3.772L8.402 7.028a.657.657 0 0 1-.93-.93l3.255-3.254H8.812a.656.656 0 1 1 0-1.313h3.5a.656.656 0 0 1 .657.657v3.5ZM10.563 7a.656.656 0 0 0-.657.656v3.5H3.344V4.594h3.5a.656.656 0 1 0 0-1.313H3.125a1.094 1.094 0 0 0-1.094 1.094v7a1.094 1.094 0 0 0 1.094 1.094h7a1.094 1.094 0 0 0 1.094-1.094V7.656A.656.656 0 0 0 10.563 7Z",
                            "data-sentry-element": "path",
                            "data-sentry-source-file": "ExternalLinkIcon.tsx"
                        })
                    })
                }),
                m = (0, n.forwardRef)(function(e, t) {
                    let r = (0, l.U)(t),
                        {
                            linkProps: n
                        } = (0, i.i)(e, r),
                        {
                            isFocusVisible: m,
                            focusProps: h
                        } = (0, c.o)(),
                        {
                            href: g,
                            target: x = "_self",
                            locale: f,
                            localePrefix: p,
                            className: y,
                            children: v,
                            size: b = "small",
                            underline: k = !1,
                            icon: j = null,
                            onClick: w = () => {}
                        } = e,
                        N = {
                            regular: 18,
                            small: 16,
                            tiny: 14
                        },
                        L = (0, s.A)("group outline-hidden", y),
                        F = (0, s.A)("text-black dark:text-white group-hover:text-blue group-focus:text-blue dark:group-hover:text-blue transition duration-200", k && ({
                            regular: "shadow-underline group-hover:shadow-underline-lg",
                            small: "shadow-underline group-hover:shadow-underline-lg",
                            tiny: "shadow-underline-sm group-hover:shadow-underline"
                        })[b], {
                            regular: "text-body-bold",
                            small: "text-small",
                            tiny: "text-tiny"
                        } [b]),
                        A = (0, s.A)("group-hover:fill-blue ml-2 h-4 w-4 fill-black transition duration-200 dark:fill-white group-focus-outline group-focus-visible:fill-blue"),
                        E = "string" == typeof v ? v : "";
                    return (0, a.jsx)(o.N_, {
                        ...(0, d.v)(n, h),
                        ref: r,
                        href: g,
                        target: x,
                        locale: f,
                        className: L,
                        role: "button",
                        ...E && {
                            "aria-label": E
                        },
                        onClick: w,
                        localePrefix: p,
                        children: (0, a.jsxs)("div", {
                            className: (0, s.A)("flex items-center", {
                                "a11y-ring rounded-xs": m
                            }),
                            children: [j && (0, a.jsx)("span", {
                                className: "group-hover:fill-blue group-focus:fill-blue mr-2 transition duration-200",
                                children: j
                            }), (0, a.jsx)("span", {
                                className: F,
                                children: v
                            }), "_blank" === x && (0, a.jsx)(u, {
                                className: A,
                                height: N[b],
                                width: N[b]
                            })]
                        })
                    })
                })
        },
        59763: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => j
            });
            var a = r(80475),
                n = r(88491),
                o = r(95719),
                s = r(92572),
                i = r(78588),
                l = r(53235),
                d = r(70420),
                c = r.n(d),
                u = r(27036),
                m = r(16335),
                h = r(74615);
            let g = ({
                children: e,
                hasContainer: t = !0
            }) => {
                let r = (0, m.$)("m-auto flex flex-col flex-wrap py-6", {
                        container: t
                    }, {
                        "px-3 md:px-6": !t
                    }),
                    n = e => {
                        e.stopPropagation(), (0, h.Ay)({
                            event: "userEvent",
                            event_name: "navigation_click",
                            properties: {
                                navigation_click_block: "Footer"
                            }
                        })
                    };
                return (0, a.jsx)("footer", {
                    className: "dark",
                    "data-sentry-component": "Footer",
                    "data-sentry-source-file": "Footer.tsx",
                    children: (0, a.jsx)("div", {
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "Activate to engage with footer navigation",
                        onClick: n,
                        onKeyDown: e => {
                            ("Enter" === e.key || " " === e.key) && (e.preventDefault(), n(e))
                        },
                        className: "bg-gray-100 dark:bg-gray-900",
                        style: {
                            cursor: "auto"
                        },
                        children: (0, a.jsx)("div", {
                            className: r,
                            children: e
                        })
                    })
                })
            };
            g.Copyright = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "text-tiny text-gray-600 dark:text-gray-400",
                "data-sentry-component": "FooterCopyright",
                "data-sentry-source-file": "FooterCopyright.tsx",
                children: e
            }), g.Disclaimer = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "text-tiny w-auto text-gray-600 lg:w-2/4 dark:text-gray-400",
                "data-sentry-component": "FooterDisclaimer",
                "data-sentry-source-file": "FooterDisclaimer.tsx",
                children: e
            }), g.Language = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "flex flex-col xl:mt-6 xl:basis-2/4",
                "data-sentry-component": "FooterLanguage",
                "data-sentry-source-file": "FooterLanguage.tsx",
                children: e
            }), g.LanguageLink = ({
                children: e
            }) => (0, a.jsx)("li", {
                className: "text-tiny-bold mr-4 text-gray-800 dark:text-gray-200",
                "data-sentry-component": "FooterLanguageLink",
                "data-sentry-source-file": "FooterLanguageLink.tsx",
                children: e
            }), g.LanguageLinks = ({
                children: e
            }) => (0, a.jsx)("ul", {
                className: "flex flex-wrap gap-y-2 whitespace-nowrap",
                "data-sentry-component": "FooterLanguageLinks",
                "data-sentry-source-file": "FooterLanguageLinks.tsx",
                children: e
            }), g.LanguageSocialContainer = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "flex flex-col border-b border-gray-200 pb-6 xl:flex-row dark:border-gray-800",
                "data-sentry-component": "FooterLanguageSocialContainer",
                "data-sentry-source-file": "FooterLanguageSocialContainer.tsx",
                children: e
            }), g.LegalContainer = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "flex basis-full flex-col",
                "data-sentry-component": "FooterLegalContainer",
                "data-sentry-source-file": "FooterLegalContainer.tsx",
                children: e
            }), g.LegalLink = ({
                children: e
            }) => (0, a.jsx)("li", {
                className: "text-tiny-bold mr-4 text-gray-800 dark:text-gray-200",
                "data-sentry-component": "FooterLegalLink",
                "data-sentry-source-file": "FooterLegalLink.tsx",
                children: e
            }), g.LegalLinks = ({
                children: e
            }) => (0, a.jsx)("ul", {
                className: "my-4 flex flex-wrap",
                "data-sentry-component": "FooterLegalLinks",
                "data-sentry-source-file": "FooterLegalLinks.tsx",
                children: e
            }), g.Navigation = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "mb-6 border-b border-gray-200 pb-6 dark:border-gray-800",
                "data-sentry-component": "FooterNavigation",
                "data-sentry-source-file": "FooterNavigation.tsx",
                children: e
            }), g.NavigationColumn = ({
                children: e,
                className: t = ""
            }) => {
                let r = (0, m.$)("mt-6 flex-[0_50%] md:flex-[0_25%] lg:flex-1", t);
                return (0, a.jsx)("div", {
                    className: r,
                    "data-sentry-component": "FooterNavigationColumn",
                    "data-sentry-source-file": "FooterNavigationColumn.tsx",
                    children: e
                })
            }, g.NavigationColumns = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "flex flex-wrap",
                "data-sentry-component": "FooterNavigationColumns",
                "data-sentry-source-file": "FooterNavigationColumns.tsx",
                children: e
            }), g.NavigationLink = ({
                children: e
            }) => (0, a.jsx)("li", {
                className: "mb-2",
                "data-sentry-component": "FooterNavigationLink",
                "data-sentry-source-file": "FooterNavigationLink.tsx",
                children: e
            }), g.NavigationLinks = ({
                children: e,
                className: t = ""
            }) => (0, a.jsx)("ul", {
                className: t,
                "data-sentry-component": "FooterNavigationLinks",
                "data-sentry-source-file": "FooterNavigationLinks.tsx",
                children: e
            }), g.Social = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "mt-6 flex-1",
                "data-sentry-component": "FooterSocial",
                "data-sentry-source-file": "FooterSocial.tsx",
                children: e
            }), g.SocialLogo = ({
                children: e
            }) => (0, a.jsx)("li", {
                className: "relative h-6 w-6 cursor-pointer transition-all duration-300 ease-out hover:opacity-80 dark:hover:opacity-70",
                "data-sentry-component": "FooterSocialLogo",
                "data-sentry-source-file": "FooterSocialLogo.tsx",
                children: e
            }), g.SocialLogos = ({
                children: e
            }) => (0, a.jsx)("ul", {
                className: "flex gap-x-2 xl:flex-1",
                "data-sentry-component": "FooterSocialLogos",
                "data-sentry-source-file": "FooterSocialLogos.tsx",
                children: e
            }), g.Title = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "text-small mb-2 text-gray-600 dark:text-gray-400",
                "data-sentry-component": "FooterTitle",
                "data-sentry-source-file": "FooterTitle.tsx",
                children: e
            }), g.SocialCurrencyContainer = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "flex basis-2/4 flex-col md:flex-row",
                "data-sentry-component": "FooterSocialCurrencyContainer",
                "data-sentry-source-file": "FooterSocialCurrencyContainer.tsx",
                children: e
            }), g.CurrencyContainer = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "mt-6 flex-1",
                "data-sentry-component": "FooterCurrencyContainer",
                "data-sentry-source-file": "FooterCurrencyContainer.tsx",
                children: e
            });
            var x = r(74620),
                f = r(2340);
            let p = ({
                className: e = "",
                width: t = 30,
                height: r = 14
            }) => (0, a.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: t,
                height: r,
                viewBox: "0 0 30 14",
                className: e,
                "data-sentry-element": "svg",
                "data-sentry-component": "PrivacyIcon",
                "data-sentry-source-file": "PrivacyIcon.tsx",
                children: (0, a.jsxs)("g", {
                    "data-sentry-element": "g",
                    "data-sentry-source-file": "PrivacyIcon.tsx",
                    children: [(0, a.jsx)("g", {
                        id: "final---dec.11-2020_1_",
                        "data-sentry-element": "g",
                        "data-sentry-source-file": "PrivacyIcon.tsx",
                        children: (0, a.jsx)("g", {
                            id: "_x30_208-our-toggle_2_",
                            transform: "translate(-1275.000000, -200.000000)",
                            "data-sentry-element": "g",
                            "data-sentry-source-file": "PrivacyIcon.tsx",
                            children: (0, a.jsx)("g", {
                                id: "Final-Copy-2_2_",
                                transform: "translate(1275.000000, 200.000000)",
                                "data-sentry-element": "g",
                                "data-sentry-source-file": "PrivacyIcon.tsx",
                                children: (0, a.jsx)("path", {
                                    style: {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        fill: "#FFFFFF"
                                    },
                                    d: "M7.4,12.8h6.8l3.1-11.6H7.4C4.2,1.2,1.6,3.8,1.6,7S4.2,12.8,7.4,12.8z",
                                    "data-sentry-element": "path",
                                    "data-sentry-source-file": "PrivacyIcon.tsx"
                                })
                            })
                        })
                    }), (0, a.jsx)("g", {
                        id: "final---dec.11-2020",
                        "data-sentry-element": "g",
                        "data-sentry-source-file": "PrivacyIcon.tsx",
                        children: (0, a.jsx)("g", {
                            id: "_x30_208-our-toggle",
                            transform: "translate(-1275.000000, -200.000000)",
                            "data-sentry-element": "g",
                            "data-sentry-source-file": "PrivacyIcon.tsx",
                            children: (0, a.jsxs)("g", {
                                id: "Final-Copy-2",
                                transform: "translate(1275.000000, 200.000000)",
                                "data-sentry-element": "g",
                                "data-sentry-source-file": "PrivacyIcon.tsx",
                                children: [(0, a.jsx)("path", {
                                    style: {
                                        fillRule: "evenodd",
                                        clipRule: "evenodd",
                                        fill: "#0066FF"
                                    },
                                    d: "M22.6,0H7.4c-3.9,0-7,3.1-7,7s3.1,7,7,7h15.2c3.9,0,7-3.1,7-7S26.4,0,22.6,0z M1.6,7c0-3.2,2.6-5.8,5.8-5.8 h9.9l-3.1,11.6H7.4C4.2,12.8,1.6,10.2,1.6,7z",
                                    "data-sentry-element": "path",
                                    "data-sentry-source-file": "PrivacyIcon.tsx"
                                }), (0, a.jsx)("path", {
                                    id: "x",
                                    style: {
                                        fill: "#FFFFFF"
                                    },
                                    d: "M24.6,4c0.2,0.2,0.2,0.6,0,0.8l0,0L22.5,7l2.2,2.2c0.2,0.2,0.2,0.6,0,0.8c-0.2,0.2-0.6,0.2-0.8,0 l0,0l-2.2-2.2L19.5,10c-0.2,0.2-0.6,0.2-0.8,0c-0.2-0.2-0.2-0.6,0-0.8l0,0L20.8,7l-2.2-2.2c-0.2-0.2-0.2-0.6,0-0.8 c0.2-0.2,0.6-0.2,0.8,0l0,0l2.2,2.2L23.8,4C24,3.8,24.4,3.8,24.6,4z",
                                    "data-sentry-element": "path",
                                    "data-sentry-source-file": "PrivacyIcon.tsx"
                                }), (0, a.jsx)("path", {
                                    id: "y",
                                    style: {
                                        fill: "#0066FF"
                                    },
                                    d: "M12.7,4.1c0.2,0.2,0.3,0.6,0.1,0.8l0,0L8.6,9.8C8.5,9.9,8.4,10,8.3,10c-0.2,0.1-0.5,0.1-0.7-0.1l0,0 L5.4,7.7c-0.2-0.2-0.2-0.6,0-0.8c0.2-0.2,0.6-0.2,0.8,0l0,0L8,8.6l3.8-4.5C12,3.9,12.4,3.9,12.7,4.1z",
                                    "data-sentry-element": "path",
                                    "data-sentry-source-file": "PrivacyIcon.tsx"
                                })]
                            })
                        })
                    })]
                })
            });
            var y = r(46247),
                v = r(23856);
            let b = {
                    EU: "EUR",
                    HR: "EUR",
                    CY: "EUR",
                    CZ: "EUR",
                    DK: "EUR",
                    EE: "EUR",
                    FI: "EUR",
                    GR: "EUR",
                    IE: "EUR",
                    IT: "EUR",
                    LV: "EUR",
                    LT: "EUR",
                    MT: "EUR",
                    NL: "EUR",
                    NO: "EUR",
                    PL: "EUR",
                    SK: "EUR",
                    SI: "EUR",
                    SE: "EUR",
                    BE: "EUR",
                    FR: "EUR",
                    LU: "EUR",
                    AT: "EUR",
                    DE: "EUR",
                    LI: "EUR",
                    CH: "EUR",
                    PT: "EUR",
                    ES: "EUR",
                    AD: "EUR",
                    ME: "EUR",
                    SM: "EUR",
                    VA: "EUR",
                    GF: "EUR",
                    GP: "EUR",
                    MQ: "EUR",
                    YT: "EUR",
                    MC: "EUR",
                    RE: "EUR",
                    BL: "EUR",
                    MF: "EUR",
                    PM: "EUR",
                    UA: "EUR",
                    BR: "BRL",
                    CN: "CNY",
                    JP: "JPY",
                    KR: "KRW",
                    US: "USD"
                },
                k = [{
                    title: "English",
                    locale: "en"
                }, {
                    title: "Deutsch",
                    locale: "de"
                }, {
                    title: "日本語",
                    locale: "ja"
                }, {
                    title: "Fran\xe7ais",
                    locale: "fr"
                }, {
                    title: "Portugu\xeas",
                    locale: "pt"
                }, {
                    title: "中文",
                    locale: "cn"
                }, {
                    title: "Espa\xf1ol",
                    locale: "es"
                }, {
                    title: "Русский",
                    locale: "ru"
                }, {
                    title: "한국어",
                    locale: "kr"
                }],
                j = ({
                    data: e
                }) => {
                    let [t] = (0, v.A)("location", "US"), [r, d] = (0, v.A)("currency", b[t] || "USD"), {
                        dispatch: m,
                        state: h
                    } = (0, y.Ay)(), {
                        social: j,
                        navigation: w,
                        legal: N,
                        currencyLabel: L,
                        languageLabel: F
                    } = e, [A, E] = (0, n.useState)(!1), R = (0, i.a8)(), [S] = (0, v.A)("experiment_exposure", "");
                    (0, n.useEffect)(() => {
                        E(!0)
                    }, []), (0, n.useEffect)(() => {
                        h.currency !== r && m({
                            type: y.LW.UPDATE,
                            currency: r
                        })
                    }, [r, h, m]);
                    let _ = (e, t) => {
                        if (!e) return null;
                        let {
                            fieldLink: r,
                            title: n
                        } = e, o = r?.linkReference?.href?.current || "";
                        return (0, a.jsx)(g.NavigationLink, {
                            "data-sentry-element": "Footer.NavigationLink",
                            "data-sentry-component": "renderNavigationLinks",
                            "data-sentry-source-file": "Footer.tsx",
                            children: (0, a.jsx)(l.A, {
                                size: "tiny",
                                href: o,
                                target: r?.linkReference?.target === "_blank" || r?.linkReference?.target === "_parent" || r?.linkReference?.target === "_top" ? r?.linkReference?.target : "_self",
                                "data-link-location": "Footer",
                                "data-sentry-element": "Link",
                                "data-sentry-source-file": "Footer.tsx",
                                children: n
                            })
                        }, `navigation-link-${n}-${t}`)
                    };
                    return (0, a.jsxs)(g, {
                        hasContainer: !0,
                        "data-sentry-element": "Footer",
                        "data-sentry-component": "LayoutFooter",
                        "data-sentry-source-file": "Footer.tsx",
                        children: [(0, a.jsxs)(g.LanguageSocialContainer, {
                            "data-sentry-element": "Footer.LanguageSocialContainer",
                            "data-sentry-source-file": "Footer.tsx",
                            children: [(0, a.jsxs)(g.Language, {
                                "data-sentry-element": "Footer.Language",
                                "data-sentry-source-file": "Footer.tsx",
                                children: [(0, a.jsx)(g.Title, {
                                    "data-sentry-element": "Footer.Title",
                                    "data-sentry-source-file": "Footer.tsx",
                                    children: F
                                }), (0, a.jsx)(g.LanguageLinks, {
                                    "data-sentry-element": "Footer.LanguageLinks",
                                    "data-sentry-source-file": "Footer.tsx",
                                    children: k.map((e, t) => (0, a.jsx)(g.LanguageLink, {
                                        "data-sentry-element": "Footer.LanguageLink",
                                        "data-sentry-component": "renderLanguages",
                                        "data-sentry-source-file": "Footer.tsx",
                                        children: (0, a.jsx)(c(), {
                                            href: `/${e.locale}${R}`,
                                            "data-testid": e.title,
                                            prefetch: !1,
                                            "data-sentry-element": "LanguageLink",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: e.title
                                        })
                                    }, `language-${e.title}-${t}`))
                                })]
                            }), (0, a.jsxs)(g.SocialCurrencyContainer, {
                                "data-sentry-element": "Footer.SocialCurrencyContainer",
                                "data-sentry-source-file": "Footer.tsx",
                                children: [j && (0, a.jsxs)(g.Social, {
                                    children: [(0, a.jsx)(g.Title, {
                                        children: j.socialLabel
                                    }), (0, a.jsx)(g.SocialLogos, {
                                        children: j.logos?.map((e, t) => {
                                            if (!e) return null;
                                            let {
                                                fieldLink: r,
                                                file: n,
                                                icon: o
                                            } = e, i = r?.linkReference?.href?.current || "";
                                            return (0, a.jsx)(g.SocialLogo, {
                                                "data-sentry-element": "Footer.SocialLogo",
                                                "data-sentry-component": "renderLogos",
                                                "data-sentry-source-file": "Footer.tsx",
                                                children: (0, a.jsx)("a", {
                                                    href: i,
                                                    target: r?.linkReference?.target === "_blank" || r?.linkReference?.target === "_parent" || r?.linkReference?.target === "_top" ? r?.linkReference?.target : "_self",
                                                    className: "focus-ring relative block h-full",
                                                    "data-link-location": "Footer",
                                                    children: o ? (0, a.jsx)(u.A, {
                                                        icon: o
                                                    }) : (0, a.jsx)(s.default, {
                                                        src: n?.file?.asset.url || "",
                                                        fill: !0,
                                                        alt: n?.alt || "",
                                                        className: "dark:invert"
                                                    })
                                                })
                                            }, `social-logo-${t}`)
                                        })
                                    })]
                                }), (0, a.jsxs)(g.CurrencyContainer, {
                                    "data-sentry-element": "Footer.CurrencyContainer",
                                    "data-sentry-source-file": "Footer.tsx",
                                    children: [(0, a.jsx)("span", {
                                        id: "currency-label",
                                        children: (0, a.jsx)(g.Title, {
                                            "data-sentry-element": "Footer.Title",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: L
                                        })
                                    }), (0, a.jsxs)(x.A, {
                                        "aria-labelledby": "currency-label",
                                        className: "w-full",
                                        selectedKey: r,
                                        onSelectionChange: e => {
                                            e && (d(e.toString()), m({
                                                type: y.LW.UPDATE,
                                                currency: e.toString()
                                            }), ((e, t) => {
                                                try {
                                                    if (!e) return !1;
                                                    let r = JSON.parse(decodeURIComponent(e)) ?? {};
                                                    return !!r[t] && r[t].hasCurrency
                                                } catch (e) {
                                                    return console.warn("Error parsing experiment cookie"), !1
                                                }
                                            })(S, R) && window.location.reload())
                                        },
                                        "data-sentry-element": "Select",
                                        "data-sentry-source-file": "Footer.tsx",
                                        children: [(0, a.jsx)(x.A.Item, {
                                            "data-sentry-element": "Select.Item",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: "BRL"
                                        }, "BRL"), (0, a.jsx)(x.A.Item, {
                                            "data-sentry-element": "Select.Item",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: "CNY"
                                        }, "CNY"), (0, a.jsx)(x.A.Item, {
                                            "data-sentry-element": "Select.Item",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: "JPY"
                                        }, "JPY"), (0, a.jsx)(x.A.Item, {
                                            "data-sentry-element": "Select.Item",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: "KRW"
                                        }, "KRW"), (0, a.jsx)(x.A.Item, {
                                            "data-sentry-element": "Select.Item",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: "USD"
                                        }, "USD"), (0, a.jsx)(x.A.Item, {
                                            "data-sentry-element": "Select.Item",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: "EUR"
                                        }, "EUR")]
                                    })]
                                })]
                            })]
                        }), (0, a.jsx)(g.Navigation, {
                            "data-sentry-element": "Footer.Navigation",
                            "data-sentry-source-file": "Footer.tsx",
                            children: (0, a.jsx)(g.NavigationColumns, {
                                "data-sentry-element": "Footer.NavigationColumns",
                                "data-sentry-source-file": "Footer.tsx",
                                children: w?.map((e, t) => {
                                    if (!e) return null;
                                    let {
                                        navigationLinks: r,
                                        title: n
                                    } = e;
                                    return (0, a.jsxs)(g.NavigationColumn, {
                                        "data-sentry-element": "Footer.NavigationColumn",
                                        "data-sentry-component": "renderNavigation",
                                        "data-sentry-source-file": "Footer.tsx",
                                        children: [(0, a.jsx)(g.Title, {
                                            "data-sentry-element": "Footer.Title",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: n
                                        }), (0, a.jsx)(g.NavigationLinks, {
                                            className: "inline-block",
                                            "data-sentry-element": "Footer.NavigationLinks",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: r?.map(_)
                                        })]
                                    }, `navigation-column${n}-${t}`)
                                })
                            })
                        }), (0, a.jsxs)(g.LegalContainer, {
                            "data-sentry-element": "Footer.LegalContainer",
                            "data-sentry-source-file": "Footer.tsx",
                            children: [(0, a.jsx)(g.Copyright, {
                                "data-sentry-element": "Footer.Copyright",
                                "data-sentry-source-file": "Footer.tsx",
                                children: N?.copyright
                            }), (0, a.jsxs)(g.LegalLinks, {
                                "data-sentry-element": "Footer.LegalLinks",
                                "data-sentry-source-file": "Footer.tsx",
                                children: [N.legalLinks?.map((e, t) => {
                                    if (!e) return null;
                                    let {
                                        fieldLink: r,
                                        title: n
                                    } = e, o = r?.linkReference?.href?.current || "";
                                    return (0, a.jsx)(g.LegalLink, {
                                        "data-sentry-element": "Footer.LegalLink",
                                        "data-sentry-component": "renderLegalLinks",
                                        "data-sentry-source-file": "Footer.tsx",
                                        children: (0, a.jsx)(l.A, {
                                            size: "tiny",
                                            href: o,
                                            target: r?.linkReference?.target === "_blank" || r?.linkReference?.target === "_parent" || r?.linkReference?.target === "_top" ? r?.linkReference?.target : "_self",
                                            "data-sentry-element": "Link",
                                            "data-sentry-source-file": "Footer.tsx",
                                            children: n
                                        })
                                    }, `legal-link-${n}-${t}`)
                                }), A && (0, a.jsx)(g.LegalLink, {
                                    children: (0, a.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [(0, a.jsx)(p, {
                                            className: "mr-1"
                                        }), (0, a.jsx)("div", {
                                            id: "ot-sdk-btn",
                                            style: {
                                                fontSize: "inherit",
                                                lineHeight: "inherit"
                                            },
                                            className: "ot-sdk-show-settings focus-ring hover:!text-blue focus:!text-blue dark:hover:!text-blue dark:focus:!text-blue !border-none !bg-transparent !p-0 !text-gray-800 transition duration-200 hover:ease-in-out dark:!text-gray-200",
                                            tabIndex: 0,
                                            role: "button",
                                            children: e.legal.cookieSettings
                                        })]
                                    })
                                })]
                            }), (0, a.jsx)(g.Disclaimer, {
                                "data-sentry-element": "Footer.Disclaimer",
                                "data-sentry-source-file": "Footer.tsx",
                                children: (0, a.jsx)(f.A, {
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "Footer.tsx",
                                    children: (0, a.jsx)(o.RK, {
                                        value: N.disclaimer,
                                        "data-sentry-element": "PortableText",
                                        "data-sentry-source-file": "Footer.tsx"
                                    })
                                })
                            })]
                        })]
                    })
                }
        },
        62060: (e, t, r) => {
            "use strict";
            r.d(t, {
                IB: () => n,
                N_: () => o
            });
            var a = r(13223);
            let n = ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"],
                {
                    Link: o,
                    redirect: s,
                    usePathname: i,
                    useRouter: l
                } = (0, a.xp)({
                    locales: n,
                    localePrefix: "as-needed",
                    defaultLocale: "en"
                })
        },
        63154: (e, t, r) => {
            "use strict";
            r.d(t, {
                IB: () => o,
                b: () => d,
                kI: () => s,
                q: () => l,
                yj: () => i
            });
            var a = r(33497),
                n = r(66180);
            let o = ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"],
                s = {
                    en: "en",
                    fr: "fr",
                    es: "es",
                    de: "de",
                    pt: "pt",
                    ru: "ru",
                    cn: "zh",
                    ja: "ja",
                    kr: "ko"
                },
                i = s,
                l = "en",
                d = "as-needed";
            (0, n.M6)(async ({
                requestLocale: e
            }) => {
                let t = await e;
                return o.includes(t) || (0, a.notFound)(), {
                    locale: t,
                    messages: {}
                }
            })
        },
        66977: (e, t, r) => {
            "use strict";
            r.d(t, {
                Y: () => a
            });
            let a = async () => {
                let e = await fetch("https://api.unity.com/v1/oauth2/authorize/logined-users", {
                        credentials: "include"
                    }),
                    t = await e.json();
                if (!e.ok) throw Error(`Fetching user failed with status ${e.status}. Reason: ${JSON.stringify(t.details)}`);
                return t.model
            }
        },
        73438: (e, t, r) => {
            "use strict";
            r.d(t, {
                H: () => n
            });
            var a = r(80475);
            r(88491);
            let n = ({
                className: e = ""
            }) => (0, a.jsx)("svg", {
                width: "11",
                height: "11",
                viewBox: "0 0 11 11",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                className: e,
                "data-sentry-element": "svg",
                "data-sentry-component": "ArrowIcon",
                "data-sentry-source-file": "ArrowIcon.tsx",
                children: (0, a.jsx)("path", {
                    d: "M5.48038 10.3679L4.45623 9.35369L7.5237 6.28622H0.0712891V4.80469H7.5237L4.45623 1.74219L5.48038 0.723011L10.3028 5.54545L5.48038 10.3679Z",
                    "data-sentry-element": "path",
                    "data-sentry-source-file": "ArrowIcon.tsx"
                })
            })
        },
        74615: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => o,
                Fz: () => n,
                HF: () => a
            });
            let a = "dataLayer-initialized";

            function n(e, t) {
                let r = () => {
                    let r = window.dataLayer;
                    if (!r) return !1;
                    let a = [...r].reverse().find(t => t?.event === e);
                    return !!a && (a.event_name = a.event_name ?? e, a.properties = {
                        ...a.properties,
                        ...t
                    }, !0)
                };
                r() || requestAnimationFrame(() => r())
            }
            let o = e => {
                let {
                    event: t = "userEvent",
                    event_name: r = "form_action",
                    properties: a
                } = e;
                {
                    let e = window;
                    e.dataLayer = e.dataLayer || [];
                    let n = document.cookie?.split("; ").find(e => e.includes("ELOQUA"))?.split("&")[0]?.split("GUID=")[1] || "",
                        o = {
                            event: t,
                            event_name: r,
                            properties: {
                                ...a,
                                form_customer_id: a?.form_customer_id || n
                            }
                        };
                    e.dataLayer.push(o)
                }
            }
        },
        74620: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => w
            });
            var a = r(80475),
                n = r(88491),
                o = r(16335),
                s = r(14239),
                i = r(78720),
                l = r(61700),
                d = r(99906),
                c = r(6649),
                u = r(75069),
                m = r(70037),
                h = r(99600);
            let g = ({
                children: e,
                state: t,
                width: r,
                offset: o = 0,
                ...s
            }) => {
                let i = (0, n.useRef)(null),
                    {
                        popoverProps: l,
                        underlayProps: d
                    } = (0, u.f)({
                        ...s,
                        offset: o,
                        popoverRef: i
                    }, t);
                return (0, a.jsxs)(m.hJ, {
                    portalContainer: document.body,
                    "data-sentry-element": "Overlay",
                    "data-sentry-component": "Popover",
                    "data-sentry-source-file": "Popover.tsx",
                    children: [(0, a.jsx)("div", {
                        ...d
                    }), (0, a.jsxs)("div", {
                        ...l,
                        ref: i,
                        className: "min-w-min overflow-auto rounded-xl bg-white p-1 shadow-[0px_4px_16px_rgba(0,0,0,0.16)] dark:bg-black",
                        style: {
                            ...l.style,
                            width: r
                        },
                        children: [(0, a.jsx)(h.R, {
                            onDismiss: t.close,
                            "data-sentry-element": "DismissButton",
                            "data-sentry-source-file": "Popover.tsx"
                        }), e, (0, a.jsx)(h.R, {
                            onDismiss: t.close,
                            "data-sentry-element": "DismissButton",
                            "data-sentry-source-file": "Popover.tsx"
                        })]
                    })]
                })
            };
            var x = r(6775),
                f = r(98995);
            let p = ({
                    item: e,
                    state: t
                }) => {
                    let r = (0, n.useRef)(null),
                        {
                            optionProps: s,
                            isSelected: i,
                            isFocused: l
                        } = (0, f.x)({
                            key: e.key
                        }, t, r),
                        d = (0, o.$)("text-tiny-bold cursor-pointer px-2 py-1 text-gray-700 focus:outline-0 dark:text-gray-300 outline-hidden break-words rounded-lg", {
                            "bg-gray-200 dark:bg-gray-800 dark:text-white": i
                        }, {
                            "bg-gray-200 dark:bg-gray-800 dark:text-white": l
                        });
                    return (0, a.jsx)("li", {
                        ...s,
                        className: d,
                        ref: r,
                        "data-sentry-component": "Option",
                        "data-sentry-source-file": "ListBox.tsx",
                        children: e.rendered
                    })
                },
                y = ({
                    state: e,
                    ...t
                }) => {
                    let r = (0, n.useRef)(null),
                        {
                            listBoxProps: o
                        } = (0, x.X)(t, e, r);
                    return (0, a.jsx)("ul", {
                        ...o,
                        ref: r,
                        className: "outline-hidden",
                        "data-sentry-component": "ListBox",
                        "data-sentry-source-file": "ListBox.tsx",
                        children: Array.from(e.collection).map(t => (0, a.jsx)(p, {
                            item: t,
                            state: e
                        }, t.key))
                    })
                };
            var v = r(76233),
                b = r(9496);
            let k = (0, n.forwardRef)(function({
                    children: e,
                    className: t = "",
                    isOpen: r,
                    ...n
                }, s) {
                    let i = (0, b.U)(s),
                        {
                            buttonProps: l
                        } = (0, v.s)({
                            children: e,
                            className: t,
                            isOpen: r,
                            ...n
                        }, i),
                        d = (0, o.$)("transition-all ease-out duration-400 flex py-2 items-center w-full outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 focus:border-none justify-between whitespace-nowrap rounded-lg border border-gray-400 bg-gray-50 px-3 text-gray-900 hover:border-gray-900 dark:border-gray-500 dark:bg-gray-900 dark:text-gray-400 dark:text-white dark:hover:border-white outline-hidden", {
                            "dark:bg-gray-900 dark:border-transparent": r,
                            "ring-3 ring-blue-dark !outline-blue !outline-offset-0 !border-none": r
                        }, t);
                    return (0, a.jsx)("button", {
                        ...l,
                        ref: i,
                        type: "button",
                        className: d,
                        children: e
                    })
                }),
                j = e => {
                    let t = (0, n.useRef)(null),
                        r = (0, l.n)(e),
                        {
                            triggerProps: d,
                            valueProps: u,
                            menuProps: m
                        } = (0, s.W)(e, r, t),
                        h = t.current?.clientWidth ? t.current?.clientWidth : 0,
                        [x, f] = (0, n.useState)(h);
                    (0, n.useEffect)(() => {
                        f(h)
                    }, [h]);
                    let p = (0, o.$)("stroke-gray-900 group-hover/select:stroke-gray-800 dark:group-hover/select:stroke-gray-200", {
                            "rotate-180 stroke-gray-900 dark:stroke-gray-200": r.isOpen
                        }),
                        v = (0, o.$)("group/select", e.className);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(i.H, {
                            state: r,
                            triggerRef: t,
                            label: e.label,
                            name: e.name,
                            "data-sentry-element": "HiddenSelect",
                            "data-sentry-source-file": "Select.tsx"
                        }), (0, a.jsxs)(k, {
                            ...d,
                            ref: t,
                            isOpen: r.isOpen,
                            className: v,
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "Select.tsx",
                            children: [(0, a.jsx)("span", {
                                ...u,
                                className: (0, o.$)({
                                    "text-gray-600 dark:text-gray-400": !r.selectedItem
                                }),
                                children: r.selectedItem ? r.selectedItem.rendered : e.placeholder || e.label
                            }), (0, a.jsx)("span", {
                                className: "pl-2",
                                children: (0, a.jsx)(c.A, {
                                    className: p,
                                    "data-sentry-element": "ArrowDown",
                                    "data-sentry-source-file": "Select.tsx"
                                })
                            })]
                        }), r.isOpen && (0, a.jsx)(g, {
                            state: r,
                            triggerRef: t,
                            placement: "bottom start",
                            offset: 8,
                            width: x,
                            children: (0, a.jsx)(y, {
                                ...m,
                                state: r
                            })
                        })]
                    })
                };
            j.Item = d.q;
            let w = j
        },
        78360: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            var a = r(80475),
                n = r(88491),
                o = r(16335),
                s = r(9224),
                i = r(34733);
            let l = ({
                    iconDirection: e
                }) => (0, a.jsx)(i.Ay, {
                    icon: "left" === e ? "arrow-left" : "arrow-right",
                    size: "12",
                    className: "opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover/button:opacity-100",
                    "data-sentry-element": "Icon",
                    "data-sentry-component": "DefaultIconOnHover",
                    "data-sentry-source-file": "Button.tsx"
                }),
                d = ({
                    icon: e,
                    iconWeight: t
                }) => (0, a.jsx)("span", {
                    className: "h-3 w-3 overflow-hidden",
                    "data-sentry-component": "IconOnHover",
                    "data-sentry-source-file": "Button.tsx",
                    children: (0, a.jsxs)("span", {
                        className: "flex w-[24px] -translate-x-3 items-center justify-center transition-all duration-300 group-hover:translate-x-0 group-hover/button:translate-x-0",
                        children: [(0, a.jsx)(i.Ay, {
                            icon: e ? `${e}` : "arrow-right",
                            size: "12",
                            className: "h-3 w-3 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover/button:opacity-100",
                            weight: t,
                            "data-sentry-element": "Icon",
                            "data-sentry-source-file": "Button.tsx"
                        }), (0, a.jsx)(i.Ay, {
                            icon: e ? `${e}` : "arrow-right",
                            size: "12",
                            className: "h-3 w-3 shrink-0 opacity-100 transition-opacity duration-300 group-hover:opacity-0 group-hover/button:opacity-0",
                            weight: t,
                            "data-sentry-element": "Icon",
                            "data-sentry-source-file": "Button.tsx"
                        })]
                    })
                }),
                c = e => {
                    let [t, r] = (0, n.useState)(!1), {
                        target: c = "_self",
                        children: u,
                        variant: m = "primary",
                        href: h,
                        localePrefix: g,
                        icon: x,
                        iconWeight: f = "regular",
                        iconDirection: p = "right",
                        size: y = "md",
                        disabled: v,
                        disableAnimation: b = !1,
                        onClick: k,
                        type: j = "button",
                        ariaLabel: w,
                        as: N = "button",
                        role: L,
                        "data-link-location": F
                    } = e, A = w ?? ("string" == typeof u ? u : x ? `${m} button with ${x} icon` : `${m} button`), E = `
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
  `, R = {
                        hasIcon: {
                            lg: `h-[3.125rem] ${!u?"aspect-square w-auto":"left"===p?"px-[2.25rem] pl-[2rem]":"px-[2.25rem] pr-[2rem]"}`,
                            md: `h-[2.875rem] ${!u?"aspect-square w-auto":"left"===p?"px-[1.875rem] pl-[1.625rem]":"px-[1.875rem] pr-[1.625rem]"}`,
                            sm: `h-[2.375rem] ${!u?"aspect-square w-auto":"left"===p?"px-[1.5rem] pl-[1.25rem]":"px-[1.5rem] pr-[1.25rem]"}`,
                            xs: `h-[2rem] ${!u?"aspect-square w-auto":"left"===p?"px-[1.25rem] pl-[1rem]":"px-[1.25rem] pr-[1rem]"}`
                        },
                        noIcon: {
                            lg: "h-[3.125rem] px-[2rem]",
                            md: "h-[2.875rem] px-[1.625rem]",
                            sm: "h-[2.375rem] px-[1.25rem]",
                            xs: "h-[2rem] px-[1rem]"
                        }
                    }, S = {
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
                    }, _ = (0, o.A)("relative flex items-center justify-center gap-2 rounded-full text-xs font-semibold font-sans tracking-[-0.01rem] whitespace-nowrap group w-fit transition-[box-shadow,background-color,color,border-color] duration-300 pointer-events-auto", E, "disabled:cursor-not-allowed disabled:opacity-40", R[x ? "hasIcon" : "noIcon"][y], S[m].default, !t && S[m].hover, !t && S[m].groupHover, t && S[m].pressed, e.className);
                    if (h) return (0, a.jsx)(s.N_, {
                        href: h,
                        role: "button",
                        onMouseDown: () => r(!0),
                        onMouseUp: () => r(!1),
                        ...A && {
                            "aria-label": A
                        },
                        target: c,
                        type: j,
                        className: _,
                        "data-link-location": F,
                        localePrefix: g,
                        children: (0, a.jsxs)("span", {
                            className: (0, o.A)("flex items-center justify-center gap-2", "left" === p && "flex-row-reverse", v || b || x ? "" : "left" === p ? "-translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0" : "translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0", "transition-all duration-300"),
                            children: [u, v || b ? x ? (0, a.jsx)(i.Ay, {
                                icon: x,
                                size: "12",
                                weight: f
                            }) : null : x ? (0, a.jsx)(d, {
                                icon: x,
                                iconWeight: f
                            }) : (0, a.jsx)(l, {
                                iconDirection: p
                            })]
                        })
                    });
                    let C = {
                        className: _,
                        disabled: v,
                        onMouseDown: () => r(!0),
                        onMouseUp: () => r(!1),
                        onClick: k,
                        role: L || ("div" === N ? "button" : void 0),
                        ...w && {
                            "aria-label": w
                        },
                        ...v && {
                            "aria-disabled": !0
                        }
                    };
                    return "button" === N && (C.type = j), (0, a.jsx)(N, {
                        ...C,
                        "data-sentry-element": "Element",
                        "data-sentry-component": "Button",
                        "data-sentry-source-file": "Button.tsx",
                        children: (0, a.jsxs)("span", {
                            className: (0, o.A)("flex items-center justify-center gap-2", "left" === p && "flex-row-reverse", v || b || x ? "" : "left" === p ? "-translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0" : "translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0", "transition-all duration-300"),
                            children: [u, v || b ? x ? (0, a.jsx)(i.Ay, {
                                icon: x,
                                size: "12",
                                weight: f
                            }) : null : x ? (0, a.jsx)(d, {
                                icon: x,
                                iconWeight: f
                            }) : (0, a.jsx)(l, {
                                iconDirection: p
                            })]
                        })
                    })
                }
        },
        78588: (e, t, r) => {
            "use strict";
            r.d(t, {
                N_: () => o,
                a8: () => i
            });
            var a = r(13223),
                n = r(63154);
            let {
                Link: o,
                redirect: s,
                usePathname: i,
                useRouter: l
            } = (0, a.xp)({
                locales: n.IB,
                localePrefix: n.b,
                defaultLocale: n.q
            })
        },
        85957: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var a = r(80475);
            r(88491);
            var n = r(16335);
            let o = {
                    default: {
                        accent: "rgb(0 0 0)",
                        accentDark: "rgb(255 255 255)",
                        background: "rgb(245 245 245)",
                        backgroundDark: "rgb(38 38 38)"
                    },
                    red: {
                        accent: "rgb(255 84 73)",
                        accentDark: "rgb(255 84 73)",
                        background: "rgb(245 245 245)",
                        backgroundDark: "rgb(38 38 38)"
                    },
                    blue: {
                        accent: "rgb(58 91 199)",
                        accentDark: "rgb(58 91 199)",
                        background: "rgb(245 245 245)",
                        backgroundDark: "rgb(38 38 38)"
                    },
                    yellow: {
                        accent: "rgb(255 176 23)",
                        accentDark: "rgb(255 176 23)",
                        background: "rgb(245 245 245)",
                        backgroundDark: "rgb(38 38 38)"
                    }
                },
                s = ({
                    className: e,
                    variant: t = "default",
                    children: r
                }) => {
                    let s = o[t],
                        i = (0, n.A)("relative mango-text-caption-md rounded-lg px-2 py-1 uppercase animated-border", "text-black dark:text-white", e);
                    return (0, a.jsxs)("div", {
                        "aria-label": r,
                        style: {
                            "--color-accent": s.accent,
                            "--color-background": s.background,
                            "--color-accent-dark": s.accentDark,
                            "--color-background-dark": s.backgroundDark
                        },
                        className: i,
                        "data-sentry-component": "Tag",
                        "data-sentry-source-file": "Tag.tsx",
                        children: [(0, a.jsx)("span", {
                            className: "animated-border-glow"
                        }), (0, a.jsx)("span", {
                            className: "animated-border-background"
                        }), (0, a.jsx)("span", {
                            className: "animated-border-text",
                            children: r
                        })]
                    })
                }
        }
    },
    e => {
        e.O(0, [95265, 20943, 37507, 80361, 53501, 96520, 42681, 21762, 14234, 51465, 54232, 67536, 87604, 16817, 57149, 91669, 77358], () => e(e.s = 25705)), _N_E = e.O()
    }
]);