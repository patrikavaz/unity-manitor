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
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [55565], {
        3921: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            var a = r(80475),
                l = r(88491);
            let n = ({
                blocks: e,
                blockMap: t,
                ...r
            }) => (0, a.jsx)(a.Fragment, {
                children: e?.map((e, n) => {
                    let s = e?._type,
                        o = t[s];
                    return e.isHidden ? null : o ? (0, a.jsx)("div", {
                        children: l.createElement(o, {
                            key: `block-${n}`,
                            ...e,
                            blockIndex: n + 1,
                            blockType: s,
                            blockKey: `${s}-${n}`,
                            ...r
                        })
                    }, `block-${n}`) : void 0
                })
            })
        },
        10657: (e, t, r) => {
            r.d(t, {
                A: () => u
            });
            var a = r(80475),
                l = r(88491),
                n = r(15195),
                s = r(69552),
                o = r(39742),
                i = r(86713),
                d = r(16335);
            let c = ({
                    state: e,
                    content: t,
                    hasArrow: r,
                    placement: l,
                    ...n
                }) => {
                    let {
                        tooltipProps: o
                    } = (0, s.f)(n, e);
                    return (0, a.jsx)("span", {
                        className: (0, d.A)("text-tiny absolute z-10 w-max max-w-[180px] rounded-lg bg-white p-4 text-left text-gray-900 drop-shadow-lg dark:bg-gray-800 dark:text-gray-100", (e => {
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
                        })(l), r && (e => {
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
                        })(l)),
                        style: {
                            wordBreak: "break-word",
                            overflowWrap: "break-word"
                        },
                        ...(0, i.v)(n, o),
                        "data-sentry-component": "TooltipElement",
                        "data-sentry-source-file": "Tooltip.tsx",
                        children: t
                    })
                },
                u = ({
                    content: e,
                    placement: t = "bottom",
                    hasArrow: r = !0,
                    tooltipOptions: s = {
                        delay: 300,
                        closeDelay: 0,
                        isDisabled: !1
                    },
                    children: i
                }) => {
                    let d = (0, n.O)(s),
                        u = (0, l.useRef)(null),
                        {
                            triggerProps: m,
                            tooltipProps: x
                        } = (0, o.D)(s, d, u);
                    return (0, a.jsxs)("span", {
                        className: "relative",
                        "data-sentry-component": "Tooltip",
                        "data-sentry-source-file": "Tooltip.tsx",
                        children: [(0, a.jsx)("span", {
                            ref: u,
                            ...m,
                            children: i
                        }), d.isOpen && (0, a.jsx)(c, {
                            state: d,
                            content: e,
                            placement: t,
                            hasArrow: r,
                            ...x
                        })]
                    })
                }
        },
        10720: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            var a = r(80475),
                l = r(88491);
            r(62131);
            var n = r(59604),
                s = r(50890);
            let o = ({
                theme: e,
                isHidden: t,
                verticalHeadingClass: r,
                productCatalogItems: o,
                htmlTableContent: i
            }) => {
                let {
                    appendCommerceDataForMultipleProducts: d
                } = (0, s.A)(), c = (0, l.useCallback)(e => {
                    let t = d(e, o);
                    return t || e
                }, [o, d]), u = (0, l.useMemo)(() => {
                    let e = i.rows.map(e => (e.cells = e.cells.map(e => c(e)), e));
                    return {
                        ...i,
                        rows: e
                    }
                }, [i, c]);
                return (0, a.jsx)(a.Fragment, {
                    children: !t && (0, a.jsx)("section", {
                        className: "dark" === e ? "dark" : "",
                        children: (0, a.jsx)("div", {
                            className: "mx-auto max-w-7xl p-6 dark:bg-black",
                            children: (0, a.jsx)(n.A, {
                                verticalHeadingClass: r || "",
                                table: u
                            })
                        })
                    })
                })
            }
        },
        16959: (e, t, r) => {
            r.d(t, {
                A: () => d
            });
            var a = r(80475),
                l = r(88491),
                n = r(16335),
                s = r(97638),
                o = r(53235);
            let i = ({
                    title: e,
                    text: t,
                    action: r,
                    truncate: i,
                    className: d = "",
                    isContained: c,
                    dismiss: u
                }) => {
                    let m = (0, l.useMemo)(() => `unity-alert-${t?.substring(0,30).replaceAll(" ","_")}`, [t]),
                        [x, h] = (0, l.useState)(!0),
                        [p, b] = (0, l.useState)(!1);
                    return ((0, l.useEffect)(() => {
                        localStorage?.getItem(m) && b(!0)
                    }, [m]), p) ? null : (0, a.jsx)("div", {
                        className: (0, n.$)({
                            container: c
                        }),
                        "data-sentry-component": "Alert",
                        "data-sentry-source-file": "Alert.tsx",
                        children: (0, a.jsxs)("div", {
                            className: (0, n.$)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
                                flex: u?.enabled
                            }, {
                                "rounded-lg": c
                            }, d),
                            children: [(0, a.jsx)(s.Info, {
                                size: 18,
                                className: "ph-fill fill-blue absolute top-5 left-[1rem]",
                                weight: "fill",
                                "data-sentry-element": "Info",
                                "data-sentry-source-file": "Alert.tsx"
                            }), (0, a.jsxs)("div", {
                                className: "",
                                children: [e && (0, a.jsx)("div", {
                                    className: "text-small-bold",
                                    children: e
                                }), (0, a.jsxs)("div", {
                                    children: [(0, a.jsx)("div", {
                                        className: (0, n.$)({
                                            "line-clamp-4 sm:line-clamp-2": i?.enabled && x
                                        }),
                                        children: t
                                    }), i?.enabled && (0, a.jsx)("button", {
                                        onClick: () => h(!x),
                                        className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                        children: x ? i.seeMoreLabel : i.seeLessLabel
                                    })]
                                })]
                            }), (r?.href || u?.enabled) && (0, a.jsxs)("div", {
                                className: "sm:auto inline-flex w-fit items-center gap-4 [&>*]:whitespace-nowrap",
                                children: [r && (0, a.jsx)(o.A, {
                                    className: "mx-auto mt-0 inline-block whitespace-nowrap",
                                    href: r.href,
                                    target: r.target || "_self",
                                    size: "tiny",
                                    underline: !0,
                                    children: r.title
                                }), u?.enabled && (0, a.jsx)("button", {
                                    onClick: () => {
                                        b(!0), localStorage.setItem(m, Date.now().toString())
                                    },
                                    className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                    children: u?.dismissLabel ?? "Dismiss"
                                })]
                            })]
                        })
                    })
                },
                d = ({
                    title: e,
                    text: t,
                    action: r,
                    theme: l,
                    truncate: s,
                    dismiss: o,
                    isContained: d,
                    isHidden: c,
                    spacing: u
                }) => {
                    let m = (0, n.$)({
                        "pt-10": u?.top
                    }, {
                        "pb-10": u?.bottom
                    }, {
                        "dark bg-black": "dark" === l
                    });
                    return c || !t ? null : (0, a.jsx)("section", {
                        className: m,
                        "data-sentry-component": "AlertBlock",
                        "data-sentry-source-file": "AlertBlock.tsx",
                        children: (0, a.jsx)(i, {
                            title: e,
                            text: t,
                            isContained: d,
                            truncate: s || {},
                            dismiss: o || {},
                            action: r && {
                                title: r?.text || "",
                                href: r?.fieldLink?.linkReference?.href?.current || "",
                                target: r?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                            },
                            "data-sentry-element": "Alert",
                            "data-sentry-source-file": "AlertBlock.tsx"
                        })
                    })
                }
        },
        18350: (e, t, r) => {
            r.d(t, {
                s: () => o,
                A: () => i
            });
            var a = r(80475);
            r(88491);
            var l = r(65920);
            let n = () => Promise.all([r.e(94412), r.e(48278), r.e(83357), r.e(54602)]).then(r.bind(r, 72607)).then(e => e.default),
                s = () => Promise.all([r.e(94412), r.e(48278), r.e(83357), r.e(51123), r.e(606)]).then(r.bind(r, 50119)).then(e => e.default),
                o = ({
                    children: e
                }) => (0, a.jsx)(l.F, {
                    features: s,
                    strict: !0,
                    "data-sentry-element": "LazyMotion",
                    "data-sentry-component": "FramerMotionLayoutLazy",
                    "data-sentry-source-file": "FramerMotionLayoutLazy.tsx",
                    children: e
                }),
                i = ({
                    children: e
                }) => (0, a.jsx)(l.F, {
                    features: n,
                    strict: !0,
                    "data-sentry-element": "LazyMotion",
                    "data-sentry-component": "FramerMotionLazy",
                    "data-sentry-source-file": "FramerMotionLazy.tsx",
                    children: e
                })
        },
        18789: (e, t, r) => {
            r.d(t, {
                A: () => h
            });
            var a = r(80475),
                l = r(88491),
                n = r(62060),
                s = r(16335),
                o = r(76233),
                i = r(82094),
                d = r(71528),
                c = r(58236),
                u = r(9496),
                m = r(86713),
                x = r(73438);
            let h = (0, l.forwardRef)(function({
                variant: e = "secondary",
                ariaLabel: t,
                size: r = "medium",
                direction: h = "right",
                className: p = "",
                href: b,
                onPress: y,
                isDisabled: f,
                isForcedHover: g,
                tag: v = "button",
                ...w
            }, j) {
                let k = (0, u.U)(j),
                    [A, C] = (0, l.useState)(!1),
                    {
                        buttonProps: N
                    } = (0, o.s)({
                        variant: e,
                        size: r,
                        direction: h,
                        className: p,
                        elementType: b ? "a" : v,
                        onPress: y,
                        href: b,
                        isDisabled: f,
                        ...w
                    }, k),
                    {
                        hoverProps: L,
                        isHovered: T
                    } = (0, i.M)({
                        isDisabled: f
                    }),
                    {
                        focusProps: $
                    } = (0, d.i)({
                        onFocusChange(e) {
                            C(e && (0, c.pP)() || !1)
                        }
                    }),
                    M = (0, s.$)("btn-outlined cursor-pointer flex justify-start items-center outline-hidden border-solid border-2 rounded-full overflow-hidden", {
                        primary: "btn-primary",
                        secondary: "btn-secondary"
                    } [e], {
                        medium: "w-9 h-9",
                        large: "w-14 h-14"
                    } [r], {
                        right: "",
                        up: "-rotate-90",
                        left: "rotate-180",
                        down: "rotate-90"
                    } [h], {
                        hovered: T || g
                    }, {
                        focused: A
                    }, {
                        "!border-gray-400 pointer-events-none": f
                    }, p),
                    _ = (0, s.$)("w-full transition-all duration-300 shrink-0 ", {
                        "fill-gray-400": f
                    }),
                    E = (0, s.$)(_, {
                        "fill-white": "primary" === e
                    }, {
                        "fill-white dark:fill-black": "secondary" === e
                    }, {
                        "-ml-[100%]": !T && !A && !g
                    }, {
                        "ml-0": T || A || g
                    }),
                    H = (0, s.$)(_, "fill-black dark:fill-white");
                return b ? (0, a.jsxs)(n.N_, {
                    ...(0, m.v)(N, L, $),
                    ref: k,
                    "aria-label": t,
                    className: M,
                    href: b,
                    legacyBehavior: !0,
                    children: [(0, a.jsx)(x.H, {
                        className: E
                    }), (0, a.jsx)(x.H, {
                        className: H
                    })]
                }) : (0, a.jsxs)(v, {
                    ...(0, m.v)(N, L, $),
                    ref: k,
                    "aria-label": t,
                    className: M,
                    tabIndex: "span" == v ? -1 : 0,
                    children: [(0, a.jsx)(x.H, {
                        className: E
                    }), (0, a.jsx)(x.H, {
                        className: H
                    })]
                })
            })
        },
        23856: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var a = r(88491);
            let l = (e, t) => {
                let [r, l] = (0, a.useState)("");
                (0, a.useEffect)(() => {
                    l(document.cookie)
                }, []);
                let n = (0, a.useMemo)(() => r.split("; ").reduce((e, t) => {
                        let [r, a] = t.split("=");
                        return {
                            ...e,
                            [r]: a
                        }
                    }, {}), [r]),
                    s = (0, a.useCallback)(t => {
                        document.cookie = `${e}=${t};path=/`, l(document.cookie)
                    }, [e]);
                return [n[e] || t, s]
            }
        },
        32189: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            var a = r(80475);
            r(88491);
            var l = r(16335);
            let n = ({
                className: e,
                children: t,
                size: r = "medium",
                ...n
            }) => {
                let s = (0, l.A)("bg-gray-100 text-gray-600 text-tiny-bold dark:bg-gray-900 dark:text-gray-200 rounded-md", {
                    small: "px-2 py-1",
                    medium: "p-2"
                } [r], e);
                return (0, a.jsx)("span", {
                    className: s,
                    ...n,
                    "data-sentry-component": "Label",
                    "data-sentry-source-file": "Label.tsx",
                    children: t
                })
            }
        },
        34875: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            var a = r(80475),
                l = r(16335),
                n = r(18227),
                s = r(66450);
            let o = ({
                pdf: e,
                hidePdfToolbar: t,
                url: r,
                mobilePdfButtonText: o,
                title: i,
                visualOptions: d,
                theme: c,
                isHidden: u
            }) => {
                let m = (0, s.A)(),
                    x = e ? e.cdnURL : r,
                    h = (0, l.A)("mb-8 md:mb-12", {
                        "bg-black py-16": d?.container && "dark" === c,
                        "bg-white py-16": d?.container && "light" === c
                    }),
                    p = (0, l.A)({
                        container: d?.container
                    }),
                    b = e && m;
                return (0, a.jsx)(a.Fragment, {
                    children: !u && (0, a.jsx)("div", {
                        className: h,
                        children: (0, a.jsx)("div", {
                            className: p,
                            children: (0, a.jsxs)("div", {
                                className: "relative",
                                children: [(0, a.jsx)("iframe", {
                                    className: "aspect-[4/3] w-full rounded-xl",
                                    src: `${x}?#view=fit&navpanes=0${t?"&toolbar=0":""}`,
                                    title: i ?? ""
                                }), b && (0, a.jsx)("div", {
                                    className: "absolute inset-0 flex items-center justify-center rounded-xl bg-black/80",
                                    children: (0, a.jsx)(n.A, {
                                        href: x,
                                        variant: "primary",
                                        size: "large",
                                        rounded: !0,
                                        children: o || "PDF"
                                    })
                                })]
                            })
                        })
                    })
                })
            }
        },
        35411: (e, t, r) => {
            r.d(t, {
                A: () => u
            });
            var a = r(80475);
            r(88491);
            var l = r(85685),
                n = r(29078),
                s = r(38628),
                o = r(77404),
                i = r(5872),
                d = r(36789),
                c = r(72030);
            l.A.registerLanguage("csharp", s.A), l.A.registerLanguage("javascript", o.A), l.A.registerLanguage("xml", i.A), l.A.registerLanguage("rust", d.A), l.A.registerLanguage("css", c.A);
            let u = ({
                code: e,
                language: t
            }) => (0, a.jsx)("div", {
                className: "text-white [&>pre]:rounded-xl [&>pre]:!p-4",
                "data-sentry-component": "Code",
                "data-sentry-source-file": "Code.tsx",
                children: (0, a.jsx)(l.A, {
                    style: n.A,
                    language: t,
                    "data-sentry-element": "SyntaxHighlighter",
                    "data-sentry-source-file": "Code.tsx",
                    children: e
                })
            })
        },
        36785: (e, t, r) => {
            r.d(t, {
                n: () => s
            });
            var a = r(33497),
                l = r(87885),
                n = r(63154);

            function s(e, t = []) {
                let r = (0, a.usePathname)(),
                    o = (0, l.useLocale)(),
                    i = o !== n.q ? r.replace(`/${o}`, "") : r;
                return {
                    shouldDisplayMTBanner: o !== n.q && e?.translationType === "MT" && !t.includes(i),
                    updatedBlocks: function(e, t, r) {
                        let a = e.reduce((e, t, r) => ["hero", "alternateNavigation", "headliner"].includes(t._type) ? r : e, -1),
                            l = [...e],
                            n = l[a + 1]?._type === "alternateNavigationAnchor" || l[a + 1]?._type === "anchorButton" ? l[a + 2] : l[a + 1],
                            s = n?.theme ?? null,
                            o = {
                                _type: "alert",
                                text: t?.text,
                                isContained: !0,
                                spacing: {
                                    bottom: !0,
                                    top: !0
                                },
                                ...s && {
                                    theme: s
                                },
                                action: {
                                    text: t?.action?.title,
                                    fieldLink: {
                                        linkReference: {
                                            href: {
                                                current: `${window.location.origin}${r}`
                                            },
                                            target: "_self"
                                        }
                                    }
                                }
                            };
                        return -1 === a ? l.unshift(o) : l.splice(a + 1, 0, o), l
                    }(e.blocks ?? [], e.machineTranslationDisclaimer, i),
                    redirectPathName: i
                }
            }
        },
        46247: (e, t, r) => {
            r.d(t, {
                Ay: () => c,
                LW: () => n,
                SO: () => d
            });
            var a = r(80475),
                l = r(88491),
                n = function(e) {
                    return e.UPDATE = "UPDATE", e
                }({});
            let s = {},
                o = (0, l.createContext)(s),
                i = (e, t) => {
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
                    let [t, r] = (0, l.useReducer)(i, s), n = (0, l.useMemo)(() => ({
                        state: t,
                        dispatch: r
                    }), [t, r]);
                    return (0, a.jsx)(o.Provider, {
                        value: n,
                        "data-sentry-element": "CommerceContext.Provider",
                        "data-sentry-component": "CommerceContextProvider",
                        "data-sentry-source-file": "CommerceContext.tsx",
                        children: e
                    })
                },
                c = () => (0, l.useContext)(o)
        },
        46961: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            var a = r(80475);
            r(88491);
            var l = r(16335),
                n = r(55287);
            let s = ({
                    content: e,
                    author: t,
                    className: r = "",
                    textClassName: s = ""
                }) => {
                    let o = (0, l.A)("p-6 rounded-xl", r),
                        i = (0, l.A)("mb-6 text-gray-800 dark:text-gray-200", s);
                    return (0, a.jsxs)("div", {
                        className: o,
                        "data-sentry-component": "Testimonial",
                        "data-sentry-source-file": "Testimonial.tsx",
                        children: [(0, a.jsx)("div", {
                            className: i,
                            children: e
                        }), (0, a.jsx)(n.A, {
                            ...t,
                            "data-sentry-element": "Author",
                            "data-sentry-source-file": "Testimonial.tsx"
                        })]
                    })
                },
                o = ({
                    title: e,
                    testimonials: t,
                    layout: r = "one-layout",
                    testimonialVariant: n = "default",
                    className: o = ""
                }) => {
                    let i = (0, l.A)({
                            "one-layout": "col-span-12",
                            "two-layout": "col-span-12 md:col-span-6 flex",
                            "three-layout": "col-span-12 md:col-span-6 lg:col-span-4 flex"
                        } [r]),
                        d = (0, l.A)("one-layout" !== r && "flex flex-col justify-between w-full", {
                            "bg-gray-100 dark:bg-gray-900": "default" === n
                        }, {
                            "border border-gray-200 dark:border-gray-700": "outlined" === n && !e
                        }),
                        c = (0, l.A)({
                            "auto-rows-fr": "one-layout" !== r
                        }, "grid grid-cols-12 gap-4", o),
                        u = (0, l.A)("container py-0 md:py-16", {
                            "bg-gray-100 dark:bg-gray-900 rounded-2xl": e,
                            "border border-gray-200 dark:border-gray-700 bg-transparent": "outlined" === n && e
                        }),
                        m = (0, l.A)({
                            "loco-text-body-sm-medium": "two-layout" === r || "three-layout" === r,
                            "loco-text-body-lg-medium": "one-layout" === r
                        });
                    return (0, a.jsxs)("div", {
                        className: u,
                        "data-sentry-component": "Testimonials",
                        "data-sentry-source-file": "Testimonials.tsx",
                        children: [e && (0, a.jsx)("div", {
                            className: "loco-text-heading-sm p-6",
                            children: e
                        }), (0, a.jsx)("div", {
                            className: c,
                            children: t?.map((e, t) => {
                                let {
                                    content: r,
                                    author: l,
                                    _key: n
                                } = e;
                                return (0, a.jsx)("div", {
                                    className: i,
                                    "data-sentry-component": "renderTestimonial",
                                    "data-sentry-source-file": "Testimonials.tsx",
                                    children: (0, a.jsx)(s, {
                                        content: r,
                                        author: l,
                                        className: d,
                                        textClassName: m,
                                        "data-sentry-element": "Testimonial",
                                        "data-sentry-source-file": "Testimonials.tsx"
                                    })
                                }, `${n}-${t}`)
                            })
                        })]
                    })
                }
        },
        48085: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            var a = r(80475);
            r(88491);
            var l = r(46961);
            let n = ({
                title: e,
                layout: t,
                testimonialVariant: r,
                testimonials: n,
                theme: s,
                hideAuthorImage: o,
                isHidden: i
            }) => {
                let d = n?.map((e, t) => ({
                    content: e?.content,
                    author: {
                        name: e?.author.name,
                        company: e?.author.company,
                        role: e?.author.role,
                        avatar: e?.author.avatar?.file?.asset?.url
                    },
                    key: t
                })) ?? [];
                return (0, a.jsx)(a.Fragment, {
                    children: !i && (0, a.jsx)("section", {
                        className: "dark" === s ? "dark" : "",
                        children: (0, a.jsx)("div", {
                            className: "dark:bg-gray-900",
                            children: (0, a.jsx)(l.A, {
                                testimonials: d,
                                title: e,
                                layout: "two-layout" === t ? "two-layout" : "three-layout" === t ? "three-layout" : "one-layout",
                                testimonialVariant: "outlined" === r ? "outlined" : "default"
                            })
                        })
                    })
                })
            }
        },
        50890: (e, t, r) => {
            r.d(t, {
                A: () => u
            });
            var a = r(8574),
                l = r(47132),
                n = r.n(l),
                s = r(46247),
                o = r(23856);
            let i = (e, t) => t?.country ? e?.country?.toLowerCase().localeCompare(t?.country.toLowerCase()) || 0 : -1,
                d = {
                    currency: "USD"
                },
                c = e => e?.text !== null && e?.text !== void 0 || (e?.children ? e.children.every(c) : !!Array.isArray(e) && e.every(c)),
                u = () => {
                    let {
                        state: e
                    } = (0, s.Ay)(), [t] = (0, o.A)("location", "US"), r = r => {
                        let a = r?.variantPrices.sort(i),
                            l = e => a?.find(r => r.currency?.toLowerCase() === e?.currency?.toLowerCase() && (r.country?.toLowerCase() === t?.toLowerCase() || !r.country))?.price;
                        return l(e) ? [l(e), !1] : [l(d), !0]
                    }, l = e => {
                        if (!e) return {};
                        let {
                            productVariants: t,
                            productKey: a
                        } = e, l = {
                            productKey: null
                        };
                        return t?.forEach(e => {
                            let [t] = r(e);
                            e?.productVariantName && (l[e.productVariantName] = {
                                price: t
                            })
                        }), l
                    }, u = (e, t) => {
                        if (!t || !e) return e;
                        let r = l(t);
                        return a.A.render(e, r)
                    }, m = (e, t) => {
                        if (!t || !e) return e;
                        let r = e.match(/{{\s*[\w\.-]+\s*}}/g)?.map(e => e?.match(/[\w\.-]+/)?.[0] || "");
                        if (void 0 === r) return e;
                        let s = l(t);
                        return t && r?.every(e => n()(s, e)) ? a.A.render(e, s) : null
                    }, x = (e, t, r = u) => e?.map(e => {
                        if (e?._type === "block") return {
                            ...e,
                            children: x(e.children, t, r)
                        };
                        if (e?._type !== "span") return e;
                        {
                            let a = r(e.text, t);
                            return {
                                ...e,
                                text: a
                            }
                        }
                    });
                    return {
                        currency: e.currency,
                        location: t,
                        appendCommerceData: u,
                        appendCommerceDataToPortableText: x,
                        renderWithAllVariablesToPortableText: (e, t) => {
                            let r = x(e, t, m);
                            return c(r) ? r : null
                        },
                        getPrice: r,
                        appendCommerceDataForMultipleProducts: (e, t) => {
                            if (!t || !e) return e;
                            let l = (e => {
                                let t = {
                                    productKey: null
                                };
                                return e.forEach(e => {
                                    if (!e) return {};
                                    let {
                                        productVariants: a
                                    } = e;
                                    a?.forEach(e => {
                                        let [a] = r(e);
                                        e?.productVariantName && (t[e.productVariantName] = {
                                            price: a
                                        })
                                    })
                                }), t
                            })(t);
                            return a.A.render(e, l)
                        }
                    }
                }
        },
        53235: (e, t, r) => {
            r.d(t, {
                A: () => m
            });
            var a = r(80475),
                l = r(88491),
                n = r(62060),
                s = r(16335),
                o = r(34335),
                i = r(9496),
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
                m = (0, l.forwardRef)(function(e, t) {
                    let r = (0, i.U)(t),
                        {
                            linkProps: l
                        } = (0, o.i)(e, r),
                        {
                            isFocusVisible: m,
                            focusProps: x
                        } = (0, c.o)(),
                        {
                            href: h,
                            target: p = "_self",
                            locale: b,
                            localePrefix: y,
                            className: f,
                            children: g,
                            size: v = "small",
                            underline: w = !1,
                            icon: j = null,
                            onClick: k = () => {}
                        } = e,
                        A = {
                            regular: 18,
                            small: 16,
                            tiny: 14
                        },
                        C = (0, s.A)("group outline-hidden", f),
                        N = (0, s.A)("text-black dark:text-white group-hover:text-blue group-focus:text-blue dark:group-hover:text-blue transition duration-200", w && ({
                            regular: "shadow-underline group-hover:shadow-underline-lg",
                            small: "shadow-underline group-hover:shadow-underline-lg",
                            tiny: "shadow-underline-sm group-hover:shadow-underline"
                        })[v], {
                            regular: "text-body-bold",
                            small: "text-small",
                            tiny: "text-tiny"
                        } [v]),
                        L = (0, s.A)("group-hover:fill-blue ml-2 h-4 w-4 fill-black transition duration-200 dark:fill-white group-focus-outline group-focus-visible:fill-blue"),
                        T = "string" == typeof g ? g : "";
                    return (0, a.jsx)(n.N_, {
                        ...(0, d.v)(l, x),
                        ref: r,
                        href: h,
                        target: p,
                        locale: b,
                        className: C,
                        role: "button",
                        ...T && {
                            "aria-label": T
                        },
                        onClick: k,
                        localePrefix: y,
                        children: (0, a.jsxs)("div", {
                            className: (0, s.A)("flex items-center", {
                                "a11y-ring rounded-xs": m
                            }),
                            children: [j && (0, a.jsx)("span", {
                                className: "group-hover:fill-blue group-focus:fill-blue mr-2 transition duration-200",
                                children: j
                            }), (0, a.jsx)("span", {
                                className: N,
                                children: g
                            }), "_blank" === p && (0, a.jsx)(u, {
                                className: L,
                                height: A[v],
                                width: A[v]
                            })]
                        })
                    })
                })
        },
        54859: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var a = r(88491);
            let l = e => {
                let [t, r] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    let a = window.matchMedia(e);
                    a.matches !== t && r(a.matches);
                    let l = () => r(a.matches);
                    return window.addEventListener("resize", l), () => window.removeEventListener("resize", l)
                }, [t, e]), t
            }
        },
        55287: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            var a = r(80475);
            r(88491);
            var l = r(16335),
                n = r(92572);
            let s = ({
                    size: e = "m",
                    url: t,
                    alt: r = "profile picture"
                }) => {
                    let {
                        width: s,
                        height: o
                    } = {
                        m: {
                            width: 64,
                            height: 64
                        },
                        s: {
                            width: 48,
                            height: 48
                        },
                        xs: {
                            width: 40,
                            height: 40
                        },
                        xxs: {
                            width: 40,
                            height: 40
                        }
                    } [e], i = (0, l.A)("inline-block", "rounded-full overflow-hidden relative shrink-0 mr-3 hidden lg:block md:block");
                    return (0, a.jsx)("div", {
                        className: i,
                        "data-sentry-component": "Avatar",
                        "data-sentry-source-file": "Avatar.tsx",
                        children: (0, a.jsx)(n.default, {
                            src: t,
                            alt: r,
                            width: s,
                            height: o,
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "Avatar.tsx"
                        })
                    })
                },
                o = ({
                    avatar: e,
                    name: t,
                    company: r,
                    role: n,
                    size: o = "m"
                }) => {
                    let i = (0, l.A)("text-gray-900 dark:text-gray-100 pb-1", {
                            "loco-caption-lg-semibold": "m" === o,
                            "loco-caption-sm-semibold": "s" === o || "xs" === o || "xxs" === o
                        }),
                        d = (0, l.A)("text-gray-700 dark:text-gray-300 tracking-normal", {
                            "loco-text-body-xs-semibold": "m" === o,
                            "loco-text-body-sm-medium": "s" === o || "xs" === o || "xxs" === o
                        });
                    return (0, a.jsxs)("div", {
                        className: "flex items-center",
                        "data-sentry-component": "Author",
                        "data-sentry-source-file": "Author.tsx",
                        children: [e && (0, a.jsx)(s, {
                            url: e,
                            size: o,
                            alt: t
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, a.jsxs)("span", {
                                className: i,
                                children: [t?.toUpperCase(), " ", r && t && "/" || "", " ", r?.toUpperCase()]
                            }), (0, a.jsx)("span", {
                                className: d,
                                children: n
                            })]
                        })]
                    })
                }
        },
        59604: (e, t, r) => {
            r.d(t, {
                A: () => p
            });
            var a = r(80475),
                l = r(88491),
                n = r(18227),
                s = r(32189),
                o = r(10657),
                i = r(74422),
                d = r(16335),
                c = r(2340),
                u = r(75407);
            let m = ({
                    className: e
                }) => (0, a.jsx)("svg", {
                    className: e,
                    width: "17",
                    height: "16",
                    viewBox: "0 0 17 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-sentry-element": "svg",
                    "data-sentry-component": "ArrowsIcon",
                    "data-sentry-source-file": "ArrowsIcon.tsx",
                    children: (0, a.jsx)("g", {
                        id: "\xf0\x9f\x94\xb7 ArrowsOutSimple",
                        "data-sentry-element": "g",
                        "data-sentry-source-file": "ArrowsIcon.tsx",
                        children: (0, a.jsx)("path", {
                            id: "Vector",
                            d: "M13.7144 3V6C13.7144 6.13261 13.6617 6.25979 13.5679 6.35355C13.4741 6.44732 13.347 6.5 13.2144 6.5C13.0817 6.5 12.9546 6.44732 12.8608 6.35355C12.767 6.25979 12.7144 6.13261 12.7144 6V4.20687L9.56811 7.35375C9.47429 7.44757 9.34704 7.50028 9.21436 7.50028C9.08167 7.50028 8.95443 7.44757 8.86061 7.35375C8.76678 7.25993 8.71408 7.13268 8.71408 7C8.71408 6.86732 8.76678 6.74007 8.86061 6.64625L12.0075 3.5H10.2144C10.0817 3.5 9.95457 3.44732 9.8608 3.35355C9.76703 3.25979 9.71436 3.13261 9.71436 3C9.71436 2.86739 9.76703 2.74021 9.8608 2.64645C9.95457 2.55268 10.0817 2.5 10.2144 2.5H13.2144C13.347 2.5 13.4741 2.55268 13.5679 2.64645C13.6617 2.74021 13.7144 2.86739 13.7144 3ZM6.86061 8.64625L3.71436 11.7931V10C3.71436 9.86739 3.66168 9.74021 3.56791 9.64645C3.47414 9.55268 3.34696 9.5 3.21436 9.5C3.08175 9.5 2.95457 9.55268 2.8608 9.64645C2.76703 9.74021 2.71436 9.86739 2.71436 10V13C2.71436 13.1326 2.76703 13.2598 2.8608 13.3536C2.95457 13.4473 3.08175 13.5 3.21436 13.5H6.21436C6.34696 13.5 6.47414 13.4473 6.56791 13.3536C6.66168 13.2598 6.71436 13.1326 6.71436 13C6.71436 12.8674 6.66168 12.7402 6.56791 12.6464C6.47414 12.5527 6.34696 12.5 6.21436 12.5H4.42123L7.56811 9.35375C7.66193 9.25993 7.71463 9.13268 7.71463 9C7.71463 8.86732 7.66193 8.74007 7.56811 8.64625C7.47429 8.55243 7.34704 8.49972 7.21436 8.49972C7.08167 8.49972 6.95443 8.55243 6.86061 8.64625Z",
                            fill: "#3A5BC7",
                            "data-sentry-element": "path",
                            "data-sentry-source-file": "ArrowsIcon.tsx"
                        })
                    })
                }),
                x = ({
                    className: e
                }) => (0, a.jsx)("svg", {
                    className: e,
                    width: "20",
                    height: "20",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-sentry-element": "svg",
                    "data-sentry-component": "CloseIcon",
                    "data-sentry-source-file": "CloseIcon.tsx",
                    children: (0, a.jsx)("g", {
                        id: "\xf0\x9f\x94\xb7 X",
                        "data-sentry-element": "g",
                        "data-sentry-source-file": "CloseIcon.tsx",
                        children: (0, a.jsx)("path", {
                            id: "Vector",
                            d: "M16.067 15.1828C16.1251 15.2409 16.1712 15.3098 16.2026 15.3857C16.234 15.4615 16.2502 15.5429 16.2502 15.625C16.2502 15.7071 16.234 15.7884 16.2026 15.8643C16.1712 15.9402 16.1251 16.0091 16.067 16.0672C16.009 16.1252 15.94 16.1713 15.8642 16.2027C15.7883 16.2342 15.707 16.2503 15.6249 16.2503C15.5427 16.2503 15.4614 16.2342 15.3855 16.2027C15.3097 16.1713 15.2407 16.1252 15.1827 16.0672L9.99986 10.8836L4.81705 16.0672C4.69977 16.1844 4.54071 16.2503 4.37486 16.2503C4.20901 16.2503 4.04995 16.1844 3.93267 16.0672C3.8154 15.9499 3.74951 15.7908 3.74951 15.625C3.74951 15.4591 3.8154 15.3001 3.93267 15.1828L9.11627 9.99998L3.93267 4.81717C3.8154 4.69989 3.74951 4.54083 3.74951 4.37498C3.74951 4.20913 3.8154 4.05007 3.93267 3.93279C4.04995 3.81552 4.20901 3.74963 4.37486 3.74963C4.54071 3.74963 4.69977 3.81552 4.81705 3.93279L9.99986 9.11639L15.1827 3.93279C15.2999 3.81552 15.459 3.74963 15.6249 3.74963C15.7907 3.74963 15.9498 3.81552 16.067 3.93279C16.1843 4.05007 16.2502 4.20913 16.2502 4.37498C16.2502 4.54083 16.1843 4.69989 16.067 4.81717L10.8835 9.99998L16.067 15.1828Z",
                            fill: "#000000",
                            "data-sentry-element": "path",
                            "data-sentry-source-file": "CloseIcon.tsx"
                        })
                    })
                }),
                h = ({
                    children: e,
                    colTitle: t,
                    truncationEnabled: r,
                    rowTitle: s,
                    className: o = "",
                    isTableCell: i
                }) => {
                    let [h, p] = (0, l.useState)(!1), [b, y] = (0, l.useState)(!1), f = (0, l.useRef)(null), g = (0, d.A)({
                        "cursor-pointer relative": h
                    }, o), v = (0, d.A)({
                        "line-clamp-3": r
                    });
                    (0, l.useEffect)(() => {
                        let e = f.current;
                        e && (e.scrollHeight > e.clientHeight ? p(!0) : p(!1))
                    }, [f]);
                    let w = () => {
                            y(!0)
                        },
                        j = r && h ? {
                            tabIndex: 0,
                            role: "button",
                            onClick: w,
                            onKeyDown: e => {
                                ("Enter" === e.key || "Space" === e.key) && w()
                            }
                        } : {};
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)("td", {
                            className: (0, d.A)(g, {
                                "bg-gray-50 p-3 dark:bg-gray-900": !i,
                                "h-full !p-0": i
                            }),
                            ...j,
                            children: [i ? e : (0, a.jsx)(c.A, {
                                className: v,
                                ref: f,
                                children: e
                            }), r && h && (0, a.jsx)(m, {
                                className: "absolute top-1.5 right-1.5"
                            })]
                        }), (0, a.jsx)(u.A, {
                            isOpen: b,
                            onOpenChange: y,
                            showTriggerButton: !1,
                            "data-sentry-element": "Modal",
                            "data-sentry-source-file": "HtmlTableCell.tsx",
                            children: (0, a.jsxs)("div", {
                                className: "mt-20 flex w-6/12 flex-col rounded-3xl bg-white p-8 dark:bg-gray-800",
                                tabIndex: -1,
                                children: [(0, a.jsx)(n.A, {
                                    onPress: () => {
                                        y(!1)
                                    },
                                    variant: "secondary",
                                    className: "self-end",
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "HtmlTableCell.tsx",
                                    children: (0, a.jsx)(x, {
                                        "data-sentry-element": "CloseIcon",
                                        "data-sentry-source-file": "HtmlTableCell.tsx"
                                    })
                                }), (0, a.jsx)(c.A, {
                                    className: "caption-sm mb-2.5 text-black dark:text-white",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "HtmlTableCell.tsx",
                                    children: s
                                }), (0, a.jsx)("div", {
                                    className: "text-heading-sm mb-4 text-black dark:text-white",
                                    children: t
                                }), (0, a.jsx)("div", {
                                    className: "text-small mb-8",
                                    children: (0, a.jsx)(c.A, {
                                        className: "text-black dark:text-gray-200",
                                        "data-sentry-element": "Text",
                                        "data-sentry-source-file": "HtmlTableCell.tsx",
                                        children: e
                                    })
                                })]
                            })
                        })]
                    })
                },
                p = ({
                    table: e,
                    className: t = "",
                    verticalHeadingClass: r = "",
                    hideTitle: u = !1
                }) => {
                    let [m, ...x] = e.rows, p = `align-top text-heading-sm md:text-small-bold rounded-md bg-gray-100 text-gray-800 bg-gray-100 dark:bg-gray-700 md:dark:bg-gray-800 dark:text-gray-200 border-none ${r}`, b = "align-top rounded-md text-sm text-gray-800 dark:text-gray-200 border-none", y = (0, d.A)("w-full table-fixed border-separate border-spacing-2 break-words", t), f = (0, d.A)("h-full table-fixed border-separate border-spacing-1 break-words", t), g = (0, l.useCallback)(e => {
                        let [t, ...r] = e.split("\n"), l = r.splice(1).map((e, t) => {
                            let r = e.split("|").filter(e => e).map(e => e.trim());
                            return (0, a.jsx)("div", {
                                className: "flex grow",
                                children: r.map((e, r) => (0, a.jsx)(i.A, {
                                    className: "flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                                    children: e
                                }, `cell-${t}-${r}-${e}`))
                            }, `row-${t}`)
                        });
                        return (0, a.jsxs)("div", {
                            className: "flex h-full flex-col",
                            children: [(0, a.jsx)("div", {
                                className: "-ml-1 flex grow",
                                children: t.split("|").filter(e => e).map((e, t) => (0, a.jsx)(i.A, {
                                    className: "ml-1 flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                                    children: e.trim()
                                }, `header-cell-${t}-${e}`))
                            }), l]
                        })
                    }, []), v = (0, l.useMemo)(() => x.map(e => e.cells.reduce((e, t, r) => ({
                        ...e,
                        [`col${r+1}`]: {
                            component: t.startsWith("|") ? g(t) : (0, a.jsx)(i.A, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: n.A
                                        },
                                        Label: {
                                            component: s.A
                                        },
                                        Tooltip: {
                                            component: o.A
                                        }
                                    }
                                },
                                children: t
                            }),
                            isTableCell: t.startsWith("|"),
                            cellContent: t
                        }
                    }), {})), [x, g]), w = (0, l.useMemo)(() => m.cells.map((e, t) => (0, a.jsx)("th", {
                        scope: "col",
                        className: "min-w-[10rem] rounded-md border-none bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-800 dark:text-gray-400",
                        children: (0, a.jsx)(i.A, {
                            options: {
                                overrides: {
                                    Button: {
                                        component: n.A
                                    },
                                    Label: {
                                        component: s.A
                                    },
                                    Tooltip: {
                                        component: o.A
                                    }
                                }
                            },
                            children: e
                        })
                    }, `${t}-${e}`)), [m.cells]), j = (0, l.useMemo)(() => v.map((t, r) => {
                        let l = Object.values(t),
                            n = l[0];
                        return (0, a.jsx)("tr", {
                            className: "border-separate border-spacing-1",
                            children: l.map((t, l) => (0, a.jsx)(h, {
                                isTableCell: t.isTableCell,
                                className: 0 === l ? p : b,
                                rowTitle: n.component,
                                colTitle: 0 !== l && w && w[l] ? w[l] : "",
                                truncationEnabled: e.tableTruncation,
                                children: t.component
                            }, `${r}-${l}-${t.cellContent}`))
                        }, r)
                    }), [w, v, p, e.tableTruncation]), k = (0, l.useMemo)(() => m.cells.map((e, t) => (0, a.jsx)("th", {
                        scope: "col",
                        className: "text-tiny-bold rounded-md bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-900 dark:text-gray-400",
                        children: (0, a.jsx)(i.A, {
                            options: {
                                overrides: {
                                    Button: {
                                        component: n.A
                                    },
                                    Label: {
                                        component: s.A
                                    },
                                    Tooltip: {
                                        component: o.A
                                    }
                                }
                            },
                            children: e
                        })
                    }, `${t}-${e}`)), [m]), A = (0, l.useMemo)(() => v.map((e, t) => (0, a.jsx)("div", {
                        className: "mb-4 min-w-full rounded-md bg-gray-100 align-middle dark:bg-gray-700",
                        children: (0, a.jsxs)("table", {
                            className: y,
                            children: [m && m.cells.length > 0 && (0, a.jsx)("thead", {
                                className: "hidden",
                                children: (0, a.jsx)("tr", {
                                    className: "border-separate border-spacing-1",
                                    children: k
                                })
                            }), (0, a.jsx)("tbody", {
                                className: "table-row-group bg-gray-50 dark:bg-gray-900",
                                children: Object.values(e).map((e, r) => e ? (0, a.jsx)("tr", {
                                    className: "rounded-md",
                                    children: (0, a.jsxs)("td", {
                                        className: 0 === r ? p : b,
                                        children: [0 !== r && m && m.cells[r] && (0, a.jsx)(i.A, {
                                            options: {
                                                overrides: {
                                                    Button: {
                                                        component: n.A
                                                    },
                                                    Label: {
                                                        component: s.A
                                                    },
                                                    Tooltip: {
                                                        component: o.A
                                                    }
                                                }
                                            },
                                            children: m.cells[r]
                                        }), (0, a.jsx)(c.A, {
                                            children: e.component
                                        })]
                                    })
                                }, `${t}-${r}-${m.cells[r]}`) : null)
                            })]
                        })
                    }, `row-${t}`)), [v, m, y, p, k]);
                    return (0, a.jsxs)("div", {
                        "data-sentry-component": "HtmlTable",
                        "data-sentry-source-file": "HtmlTable.tsx",
                        children: [(0, a.jsx)("div", {
                            className: "sm:flex sm:items-center",
                            children: (0, a.jsxs)("div", {
                                className: "sm:flex-auto",
                                children: [!u && e.tableTitle && (0, a.jsx)("div", {
                                    className: "text-heading-sm",
                                    children: e.tableTitle
                                }), !u && e.tableDescription && (0, a.jsx)("p", {
                                    className: "text-body mt-2",
                                    children: e.tableDescription
                                })]
                            })
                        }), (0, a.jsx)("div", {
                            className: "mt-8 flow-root",
                            children: (0, a.jsxs)("div", {
                                className: "-mx-4 -my-2 overflow-visible sm:-mx-6 lg:-mx-8",
                                children: [(0, a.jsx)("div", {
                                    className: "hidden min-w-full rounded-md bg-gray-100 align-middle sm:px-6 md:inline-block md:rounded-none md:bg-transparent",
                                    children: (0, a.jsxs)("table", {
                                        className: f,
                                        children: [w && (0, a.jsx)("thead", {
                                            className: "table-header-group",
                                            children: (0, a.jsx)("tr", {
                                                className: "border-separate border-spacing-1",
                                                children: w
                                            })
                                        }), (0, a.jsx)("tbody", {
                                            className: "table-row-group",
                                            children: j
                                        })]
                                    })
                                }), (0, a.jsxs)("div", {
                                    className: "md:hidden",
                                    children: [(0, a.jsx)("div", {
                                        className: "text-body-bold mb-4",
                                        children: (0, a.jsx)(i.A, {
                                            options: {
                                                overrides: {
                                                    Button: {
                                                        component: n.A
                                                    },
                                                    Label: {
                                                        component: s.A
                                                    },
                                                    Tooltip: {
                                                        component: o.A
                                                    }
                                                }
                                            },
                                            "data-sentry-element": "Markdown",
                                            "data-sentry-source-file": "HtmlTable.tsx",
                                            children: m && m.cells && m.cells[0] ? m.cells[0] : ""
                                        })
                                    }), A]
                                })]
                            })
                        })]
                    })
                }
        },
        63154: (e, t, r) => {
            r.d(t, {
                IB: () => n,
                b: () => d,
                kI: () => s,
                q: () => i,
                yj: () => o
            });
            var a = r(33497),
                l = r(66180);
            let n = ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"],
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
                o = s,
                i = "en",
                d = "as-needed";
            (0, l.M6)(async ({
                requestLocale: e
            }) => {
                let t = await e;
                return n.includes(t) || (0, a.notFound)(), {
                    locale: t,
                    messages: {}
                }
            })
        },
        99419: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = r(16959).A
        }
    }
]);