(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 998569, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(595388),
        i = e.i(722978),
        r = e.i(372474),
        s = e.i(897884),
        n = e.i(582374),
        d = e.i(427651),
        o = e.i(604082),
        c = e.i(166010),
        u = e.i(939115);
    let m = (0, t.forwardRef)(function({
        variant: e = "secondary",
        ariaLabel: m,
        size: f = "medium",
        direction: h = "right",
        className: g = "",
        href: x,
        onPress: p,
        isDisabled: b,
        isForcedHover: v,
        tag: j = "button",
        ...k
    }, y) {
        let w = (0, c.useObjectRef)(y),
            [A, N] = (0, t.useState)(!1),
            {
                buttonProps: L
            } = (0, r.useButton)({
                variant: e,
                size: f,
                direction: h,
                className: g,
                elementType: x ? "a" : j,
                onPress: p,
                href: x,
                isDisabled: b,
                ...k
            }, w),
            {
                hoverProps: R,
                isHovered: _
            } = (0, s.useHover)({
                isDisabled: b
            }),
            {
                focusProps: C
            } = (0, n.useFocus)({
                onFocusChange(e) {
                    N(e && (0, d.isFocusVisible)() || !1)
                }
            }),
            B = (0, i.clsx)("btn-outlined cursor-pointer flex justify-start items-center outline-hidden border-solid border-2 rounded-full overflow-hidden", {
                primary: "btn-primary",
                secondary: "btn-secondary"
            } [e], {
                medium: "w-9 h-9",
                large: "w-14 h-14"
            } [f], {
                right: "",
                up: "-rotate-90",
                left: "rotate-180",
                down: "rotate-90"
            } [h], {
                hovered: _ || v
            }, {
                focused: A
            }, {
                "!border-gray-400 pointer-events-none": b
            }, g),
            S = (0, i.clsx)("w-full transition-all duration-300 shrink-0 ", {
                "fill-gray-400": b
            }),
            E = (0, i.clsx)(S, {
                "fill-white": "primary" === e
            }, {
                "fill-white dark:fill-black": "secondary" === e
            }, {
                "-ml-[100%]": !_ && !A && !v
            }, {
                "ml-0": _ || A || v
            }),
            F = (0, i.clsx)(S, "fill-black dark:fill-white");
        if (x) {
            let e = (0, o.mergeProps)(L, R, C);
            return (0, l.jsxs)(a.Link, {
                ...e,
                ref: w,
                "aria-label": m,
                className: B,
                href: x,
                legacyBehavior: !0,
                children: [(0, l.jsx)(u.ArrowIcon, {
                    className: E
                }), (0, l.jsx)(u.ArrowIcon, {
                    className: F
                })]
            })
        }
        return (0, l.jsxs)(j, {
            ...(0, o.mergeProps)(L, R, C),
            ref: w,
            "aria-label": m,
            className: B,
            tabIndex: "span" == j ? -1 : 0,
            children: [(0, l.jsx)(u.ArrowIcon, {
                className: E
            }), (0, l.jsx)(u.ArrowIcon, {
                className: F
            })]
        })
    });
    e.s(["default", 0, m])
}, 186114, e => {
    "use strict";
    var l = e.i(500783);
    e.s(["default", 0, ({
        className: e,
        handleIsPlaying: t,
        label: a,
        ...i
    }) => (0, l.jsx)("div", {
        className: e,
        children: (0, l.jsx)("button", {
            className: "transition-bg bg-blue hover:bg-blue-dark flex h-20 w-20 transform items-center justify-center rounded-full duration-300",
            onClick: t,
            type: "button",
            "aria-label": a,
            ...i,
            children: (0, l.jsx)("span", {
                className: "block h-6 w-6",
                children: (0, l.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20",
                    children: (0, l.jsx)("path", {
                        fill: "#fff",
                        stroke: "#fff",
                        d: "M17.95 9.998v.004a.429.429 0 0 1-.207.37l-.004.001L6.483 17.26a.45.45 0 0 1-.456.009l-.002-.001a.44.44 0 0 1-.164-.16l-.69.404.69-.405a.44.44 0 0 1-.061-.221V3.116a.439.439 0 0 1 .225-.382l.002-.001a.45.45 0 0 1 .455.008L17.74 9.627l.003.003a.429.429 0 0 1 .208.368Z"
                    })
                })
            })
        })
    })])
}, 789924, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(595388),
        i = e.i(722978),
        r = e.i(749583),
        s = e.i(998569);
    let n = ({
            title: e,
            titleTag: n,
            description: d,
            action: o,
            fullWidth: c
        }) => {
            let [u, m] = (0, t.useState)(!1), f = "relative block border-t border-solid border-gray-200 dark:border-gray-700", h = (0, l.jsxs)("div", {
                className: (0, i.default)("grid gap-4 pt-2 pb-8 md:grid-cols-3", {
                    "md:grid-cols-[2fr_1fr_auto]": c
                }),
                children: [(0, l.jsx)(n || "h2", {
                    className: "loco-text-heading-xs",
                    children: e
                }), (0, l.jsx)("div", {
                    children: (0, l.jsx)("p", {
                        className: "loco-text-body-sm opacity-70",
                        children: d
                    })
                }), o && o?.label && (0, l.jsx)("div", {
                    className: "shrink-0 text-right",
                    children: (0, l.jsx)(r.default, {
                        tag: "span",
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        active: u,
                        disabled: o.disabled,
                        children: o.label
                    })
                }), o && !o?.label && (0, l.jsx)("div", {
                    className: "flex shrink-0 justify-end text-right",
                    children: (0, l.jsx)(s.default, {
                        variant: "primary"
                    })
                })]
            });
            return !o || o.disabled ? (0, l.jsx)("div", {
                className: f,
                children: h
            }) : (0, l.jsx)(a.Link, {
                href: o.href,
                rel: "_blank" === o.target ? "noopener noreferrer" : void 0,
                target: o.target,
                title: o.label,
                onMouseOver: () => {
                    m(!0)
                },
                onMouseLeave: () => {
                    m(!1)
                },
                className: f,
                children: h
            })
        },
        d = ({
            theme: e = "light",
            fullWidth: t = !1,
            features: a = []
        }) => {
            let r = (0, i.default)({
                dark: "dark" === e
            });
            return (0, l.jsx)("section", {
                className: r,
                children: (0, l.jsx)("div", {
                    className: "relative px-4 py-16 lg:pt-6 lg:pb-16 dark:bg-black",
                    children: (0, l.jsx)("div", {
                        className: "mx-auto max-w-[1800px] md:grid md:grid-cols-12 md:gap-2",
                        children: a && (0, l.jsx)("div", {
                            className: (0, i.default)("col-start-1 col-end-13 row-start-3 lg:col-end-13", {
                                "lg:col-start-4": !t
                            }),
                            children: (0, l.jsx)("div", {
                                className: "lg:grid lg:grid-cols-8 lg:gap-2",
                                children: (0, l.jsx)("div", {
                                    className: "lg:col-start-1 lg:col-end-9",
                                    children: a.map((e, a) => (0, l.jsx)(n, {
                                        fullWidth: t,
                                        titleTag: "p",
                                        ...e
                                    }, `feature-list-${a}`))
                                })
                            })
                        })
                    })
                })
            })
        };
    e.s(["default", 0, ({
        theme: e,
        features: t,
        isHidden: a,
        featuresBlog: i,
        fullWidth: r
    }) => {
        let s;
        s = t?.map(e => ({
            title: e?.title || "",
            description: e?.description || "",
            action: e?.action ? {
                label: e.action.title || "",
                href: e.action.link?.linkReference?.href.current || "",
                target: e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                disabled: e.action.disabled
            } : null
        })) || [];
        let n = (e, l) => e?.length > l ? `${e.substring(0,l)}...` : e;
        return s?.length === 0 && (s = i?.map(e => ({
            title: e?.title || "",
            description: n(e?.seo?.teaserText, 250) || n(e?.seo?.description, 250) || "",
            action: e?.pageUrl?.link?.href?.current ? {
                label: "",
                href: e?.pageUrl?.link?.href?.current || "",
                target: e?.pageUrl?.link?.target === "_blank" ? "_blank" : "_self"
            } : null
        })) || []), (0, l.jsx)(l.Fragment, {
            children: !a && (0, l.jsx)(d, {
                theme: "dark" === e ? "dark" : "light",
                features: s,
                fullWidth: r
            })
        })
    }], 789924)
}, 129824, e => {
    "use strict";
    e.s(["DATA_REQUEST", 0, "/data-request", "DEFAULT_PAGES_NO_MT_BANNER", 0, ["/made-with-unity"], "L1_PAGES_NO_MT_BANNER", 0, ["/our-company", "/community", "/industry", "/use-cases", "/releases/unity-6"], "PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products"], "PRODUCTS_PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products/unity-pro", "/products/unity-engine", "/products/compare-plans", "/products/compare-plans/unity-cloud"], "RESOURCES_PAGES_NO_MT_BANNER", 0, ["/resources"], "SOLUTIONS_PAGES_NO_MT_BANNER", 0, ["/download", "/roadmap", "/pages/pro-free-trial", "/games", "/solutions", "/developer-tools", "/how-to", "/learn", "/learn/get-started", "/releases/lts-vs-tech-stream"]])
}, 154038, e => {
    e.q("/_next/static/media/unity-fallback-1.05foy1lz0fhig.jpg")
}, 594333, e => {
    e.q("/_next/static/media/unity-fallback-2.0od666pl17uax.jpg")
}, 522500, e => {
    e.q("/_next/static/media/unity-fallback-3.01ai2jdgw500k.jpg")
}, 567134, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(722978),
        i = e.i(153348),
        r = e.i(955429),
        s = e.i(655105),
        n = e.i(828083),
        d = e.i(825610),
        o = e.i(783078),
        c = e.i(749583),
        u = e.i(186114),
        m = e.i(595388);
    let f = (0, n.default)(() => e.A(410979), {
        loadableGenerated: {
            modules: [942019]
        },
        ssr: !1
    });
    e.s(["default", 0, ({
        title: e,
        description: n,
        image: h,
        video: g,
        action: x,
        variant: p = "column",
        videoInline: b = !0,
        buttonLabel: v = "Play video",
        blockKey: j,
        titleTag: k = "h3",
        locale: y,
        index: w
    }) => {
        let A = j || d.trackingLocation.uniteCard,
            N = void 0 !== w ? `${A}-${w}` : A,
            L = (0, t.useRef)(null),
            [R, _] = (0, t.useState)(!1),
            C = (0, i.useInView)(L),
            B = (0, r.useReducedMotion)(),
            S = () => {
                _(!0)
            };
        (0, t.useEffect)(() => {
            b ? _(C) : C || _(!1)
        }, [C, b]);
        let E = (0, a.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": R && !B && C && g?.src
            }),
            F = "horizontal" === p && x,
            M = (0, a.default)("flex flex-col", {
                "min-h-[14rem]": "stacked" === p || "column" === p,
                grow: "column" !== p && "horizontal" !== p,
                "min-h-[14rem] xl:min-h-[18rem] xl:flex-row xl:gap-4": "column" === p
            }),
            I = (0, a.default)("rounded-lg bg-gray-100 p-4 dark:bg-gray-900", {
                "h-full": "horizontal" !== p,
                "group h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-pointer": "horizontal" === p && F,
                "h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-auto": "horizontal" === p && !F
            }),
            P = (0, a.default)("relative overflow-hidden rounded-lg", {
                "aspect-video w-full": "horizontal" !== p,
                "aspect-video w-full xl:flex-shrink-0 xl:self-start xl:max-w-1/2": "horizontal" === p
            }),
            T = (0, a.default)("cover absolute object-cover", {
                "transition-transform duration-400 group-hover:scale-110": "horizontal" === p && F
            }),
            $ = (0, l.jsxs)("div", {
                ref: L,
                className: I,
                children: ["horizontal" === p && F && (0, l.jsx)("div", {
                    className: "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-400 [background:linear-gradient(to_top,#000_0%,#666_60%,#666_100%)] group-hover:opacity-100"
                }), (0, l.jsxs)("div", {
                    className: (0, a.default)({
                        "relative z-10 flex h-full flex-col gap-6 rounded-lg bg-gray-100 p-3 xl:w-full xl:flex-row dark:bg-gray-900": "horizontal" === p,
                        "flex h-full flex-col justify-between gap-4": "horizontal" !== p
                    }),
                    children: [(h?.src || g?.src) && (0, l.jsxs)("div", {
                        className: P,
                        children: [g?.src && (0, l.jsx)(f, {
                            url: g.src,
                            playing: R && C && !B,
                            loop: !!b,
                            muted: b,
                            playsinline: b && !B,
                            width: "100%",
                            height: "100%",
                            className: "absolute top-0 left-0 [&>video]:object-cover",
                            onReady: () => {
                                b && _(!0)
                            },
                            controls: !b,
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        }), h && (0, l.jsxs)("div", {
                            className: E,
                            onClick: S,
                            children: [!b && (0, l.jsx)(u.default, {
                                handleIsPlaying: S,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: v,
                                "data-link-location": N,
                                "data-link-id": `${N}-video-play`
                            }), (0, l.jsx)(s.default, {
                                src: h.src,
                                placeholder: h.placeholder ? "blur" : "empty",
                                blurDataURL: h.placeholder,
                                fill: !0,
                                alt: h.alt ?? "",
                                className: T,
                                sizes: `(min-width: ${o.default.Large}px) 33vw, (min-width: ${o.default.Medium}px) 50vw, 100vw`
                            })]
                        })]
                    }), (0, l.jsx)("div", {
                        className: (0, a.default)(M),
                        children: "column" !== p && "horizontal" !== p ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(k, {
                                className: "loco-text-body-lg-medium -mt-2",
                                children: e
                            }), (0, l.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between",
                                children: [(0, l.jsx)("div", {
                                    className: "loco-text-body mt-2 whitespace-pre-line text-gray-700 dark:text-gray-400",
                                    children: n
                                }), (x?.href && x?.label || x?.renderModal) && (0, l.jsx)("div", {
                                    className: "mt-8",
                                    children: x?.renderModal ? x.renderModal() : (0, l.jsx)(c.default, {
                                        locale: y,
                                        href: F ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: F ? "span" : "button",
                                        "data-link-location": N,
                                        "data-link-id": `${N}-cta`,
                                        children: x.label
                                    })
                                })]
                            })]
                        }) : "horizontal" === p ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(k, {
                                className: "loco-text-body-lg-medium -mt-2 lg:mt-0",
                                children: e
                            }), (0, l.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between lg:flex-1",
                                children: [(0, l.jsx)("div", {
                                    className: "loco-text-body mt-2 line-clamp-5 whitespace-pre-line text-gray-700 lg:line-clamp-3 lg:text-gray-900 dark:text-gray-400 lg:dark:text-white",
                                    children: n
                                }), (x?.href && x?.label || x?.renderModal) && (0, l.jsx)("div", {
                                    className: "mt-8 lg:mt-6",
                                    children: x?.renderModal ? x.renderModal() : (0, l.jsx)(c.default, {
                                        locale: y,
                                        href: F ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: F ? "span" : "button",
                                        "data-link-location": N,
                                        "data-link-id": `${N}-cta`,
                                        children: x.label
                                    })
                                })]
                            })]
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(k, {
                                className: "loco-text-body-lg-medium -mt-2 xl:w-2/5",
                                children: e
                            }), (0, l.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between xl:-mt-1 xl:w-3/5",
                                children: [(0, l.jsx)("div", {
                                    className: "loco-text-body mt-1 whitespace-pre-line xl:mt-0",
                                    children: n
                                }), (x?.href && x?.label || x?.renderModal) && (0, l.jsx)("div", {
                                    children: x?.renderModal ? x.renderModal() : (0, l.jsx)(c.default, {
                                        locale: y,
                                        href: F ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: F ? "span" : "button",
                                        "data-link-location": N,
                                        "data-link-id": `${N}-cta`,
                                        children: x.label
                                    })
                                })]
                            })]
                        })
                    })]
                })]
            });
        return F ? (0, l.jsx)(m.Link, {
            href: x.href,
            target: x.target,
            className: "cursor-pointer",
            "data-link-location": N,
            "data-link-id": `${N}-link-wrapper`,
            children: $
        }) : $
    }], 567134)
}, 459923, 570994, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(655105),
        i = e.i(828083),
        r = e.i(722978),
        s = e.i(153348),
        n = e.i(955429),
        d = e.i(201763),
        o = e.i(749583);
    let c = (0, i.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        u = ({
            eyebrow: e,
            title: i,
            titleSize: u = "medium",
            description: m,
            backgroundImage: f,
            actions: h = [],
            keyFigures: g,
            video: x,
            mention: p,
            fullScreen: b = !0
        }) => {
            let v = (0, t.useRef)(null),
                j = (0, s.useInView)(v, {
                    once: !0
                }),
                k = (0, n.useReducedMotion)(),
                [y, w] = (0, t.useState)(!1),
                A = (0, r.default)(`font-nohemi mt-24 my-4 ${"small"===u?"mb-6":"mb-8"}`, {
                    "loco-text-heading-xl": "medium" === u,
                    "loco-text-headline": "large" === u,
                    "loco-text-heading-lg": "small" === u
                }),
                N = (0, r.default)("object-cover transition-opacity duration-1000 opacity-100", {
                    "opacity-0": y
                });
            return (0, l.jsxs)("section", {
                ref: v,
                className: "dark relative",
                children: [f && (0, l.jsx)(a.default, {
                    src: f.src,
                    placeholder: "blur",
                    blurDataURL: f.placeholder,
                    fill: !0,
                    alt: "",
                    className: N,
                    sizes: "100vw"
                }), j && !k && x && (0, l.jsx)(c, {
                    url: x || "",
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    onReady: () => {
                        w(!0)
                    },
                    config: {
                        hlsOptions: {
                            maxMaxBufferLength: 1,
                            startLevel: 1
                        }
                    },
                    className: "absolute [&>video]:object-cover"
                }, "hero-video"), (0, l.jsx)("div", {
                    className: "absolute h-full w-full",
                    style: {
                        backgroundImage: b ? `
    linear-gradient(180deg, rgba(1, 1, 1, 0.00) 45.08%, rgba(1, 1, 1, 0.00) 49.56%, rgba(1, 1, 1, 0.01) 53.84%, rgba(1, 1, 1, 0.02) 57.92%, rgba(1, 1, 1, 0.04) 61.84%, rgba(1, 1, 1, 0.06) 65.62%, rgba(1, 1, 1, 0.09) 69.27%, rgba(1, 1, 1, 0.12) 72.82%, rgba(1, 1, 1, 0.16) 76.29%, rgba(1, 1, 1, 0.20) 79.7%, rgba(1, 1, 1, 0.24) 83.06%, rgba(1, 1, 1, 0.29) 86.41%, rgba(1, 1, 1, 0.34) 89.75%, rgba(1, 1, 1, 0.39) 93.12%, rgba(1, 1, 1, 0.44) 96.53%, rgba(1, 1, 1, 0.50) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)` : ""
                    }
                }), (0, l.jsxs)("div", {
                    className: `relative container flex ${b&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                    children: [(0, l.jsx)("div", {
                        className: "flex grow flex-col justify-stretch",
                        children: (0, l.jsxs)("div", {
                            className: "flex h-full grow flex-col items-center justify-center text-center",
                            children: [e && (0, l.jsx)("div", {
                                className: "loco-caption-lg-semibold",
                                children: e
                            }), (0, l.jsx)("h1", {
                                className: A,
                                children: i
                            }), m && (0, l.jsx)("div", {
                                className: "loco-caption-sm-semibold mt-5",
                                children: m
                            }), h && (0, l.jsx)("div", {
                                className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                children: h.map((e, t) => {
                                    if (e.link) return (0, l.jsx)(o.default, {
                                        rounded: !0,
                                        hasArrow: !0,
                                        href: e.link.href,
                                        target: e.link.target,
                                        variant: 0 === t ? "primary" : "secondary",
                                        children: e.title
                                    }, `headliner-action-link-${e.title}-${t}`);
                                    if (e.form) {
                                        let a = {
                                            ...e.form.form,
                                            ...e.form.webinarFormParametersContent,
                                            extraFields: e.form.extraFields
                                        };
                                        return (0, l.jsx)("div", {
                                            children: e.form.renderModal({
                                                label: e.title,
                                                form: a
                                            })
                                        }, `headliner-action-modal-${e.title}-${t}`)
                                    }
                                    return null
                                })
                            })]
                        })
                    }), g && (0, l.jsx)(d.default, {
                        keyFigures: g,
                        nested: !0
                    })]
                }), p && (0, l.jsx)("div", {
                    className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:top-10 md:right-8 md:left-auto md:w-auto md:px-0 md:py-8",
                    children: p
                })]
            })
        };
    e.s(["default", 0, u], 570994);
    var m = e.i(115219);
    e.s(["default", 0, ({
        actions: e = [],
        brandfolder: a,
        mention: i,
        eyebrow: r,
        title: s,
        titleSize: n,
        description: d,
        image: o,
        keyFigures: c,
        isHidden: f
    }) => {
        let {
            mapFormActions: h
        } = (0, m.useFormModal)(e), g = h(e), x = (0, t.useMemo)(() => (c?.data ?? []).map(e => e?.value?.text ? {
            value: {
                type: "text",
                text: e.value.text
            },
            label: e.label
        } : {
            value: {
                type: "icon",
                url: e?.value?.icon?.file?.cdnURL || "",
                description: e?.value?.icon?.caption || ""
            },
            label: e.label
        }), [c]);
        return (0, l.jsx)(l.Fragment, {
            children: !f && (0, l.jsx)(u, {
                actions: g,
                mention: i || "",
                eyebrow: r || "",
                title: s || "",
                titleSize: "small" === n ? "small" : "large" === n ? "large" : "medium",
                description: d || "",
                backgroundImage: {
                    src: o?.asset.url || "",
                    placeholder: o?.asset.metadata?.lqip || ""
                },
                keyFigures: x,
                video: a?.muxHLSURL || ""
            })
        })
    }], 459923)
}, 776910, 814507, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(722978),
        a = e.i(146911);
    let i = ({
        children: e,
        action: i,
        rounded: r = !1,
        isContained: s = !1,
        className: n = ""
    }) => (0, l.jsx)("div", {
        className: (0, t.clsx)("md:px-auto w-full px-4 transition-colors", {
            "bg-gray-100 dark:bg-gray-900": !s
        }, {
            "rounded-br-lg rounded-bl-lg": r && !s
        }, n),
        children: (0, l.jsxs)("div", {
            className: (0, t.clsx)("container m-auto py-3 text-xs leading-4 font-medium text-gray-900 transition-colors dark:text-gray-100", {
                "text-center": r && !s
            }, {
                "my-6 rounded-lg bg-gray-100 dark:bg-gray-900": s
            }),
            children: [e, (0, l.jsx)(a.default, {
                className: "mx-auto mt-0 ml-2 inline-block [&>div>span]:text-xs",
                href: i.href,
                target: i.target,
                size: "tiny",
                underline: !0,
                "data-link-location": "AnnouncementBanner",
                "data-link-id": "announcement-banner-action",
                children: i.title
            })]
        })
    });
    e.s(["default", 0, i], 814507), e.s(["default", 0, ({
        title: e,
        action: t,
        isContained: a = !1,
        theme: r,
        isHidden: s
    }) => {
        let n;
        return (0, l.jsx)(l.Fragment, {
            children: !s && (0, l.jsx)("section", {
                className: "dark" === r ? "dark" : "",
                children: (n = t?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self", (0, l.jsx)(i, {
                    isContained: a,
                    action: {
                        title: t?.text || "",
                        href: t?.fieldLink?.linkReference?.href?.current || "",
                        target: n
                    },
                    children: e
                }))
            })
        })
    }], 776910)
}, 131564, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(749583),
        a = e.i(722978);
    e.s(["default", 0, ({
        theme: e = "light",
        actions: i,
        description: r,
        title: s,
        padding: n = !0,
        variant: d = "center",
        richText: o
    }) => {
        let c = (0, a.default)({
            dark: "dark" === e
        });
        return (0, l.jsx)("div", {
            className: c,
            children: (0, l.jsx)("div", {
                className: "dark:bg-black",
                children: (0, l.jsxs)("div", {
                    className: `container flex flex-col ${"center"===d&&"items-center text-center"} ${n&&"pt-14 pb-12 md:pt-24"}`,
                    children: [(0, l.jsx)("div", {
                        className: "max-w-3xl",
                        children: s && (0, l.jsx)("h2", {
                            className: "loco-text-heading-md !font-nohemi",
                            children: s
                        })
                    }), (r || o) && (0, l.jsxs)("div", {
                        className: (0, a.default)("loco-text-body-lg [&_a]:text-blue mt-6 text-gray-500", "center" === d || "left" === d ? "max-w-5xl" : "max-w-3xl"),
                        children: [r, o]
                    }), i && (0, l.jsx)("div", {
                        className: "mt-8 flex justify-center gap-4",
                        children: i.map((e, a) => {
                            let i = `title-description-block-action-${e.title}-${a}`;
                            return 0 === a ? (0, l.jsx)(t.default, {
                                href: e.href,
                                target: e.target,
                                outlined: !0,
                                rounded: !0,
                                hasArrow: !0,
                                "data-link-location": "TitleDescriptionBlock",
                                "data-link-id": `title-description-block-action-primary-${a}`,
                                children: e.title
                            }, i) : (0, l.jsx)(t.default, {
                                href: e.href,
                                target: e.target,
                                variant: "secondary",
                                rounded: !0,
                                hasArrow: !0,
                                "data-link-location": "TitleDescriptionBlock",
                                "data-link-id": `title-description-block-action-secondary-${a}`,
                                children: e.title
                            }, i)
                        })
                    })]
                })
            })
        })
    }], 131564)
}, 913890, 577702, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(722978),
        i = e.i(567134),
        r = e.i(825610),
        s = e.i(749583);
    let n = ({
        title: e,
        subtitle: t,
        description: a,
        action: i,
        blockKey: n,
        index: d
    }) => {
        let o = n || r.trackingLocation.uniteCardSubscription,
            c = void 0 !== d ? `${o}-${d}` : o;
        return (0, l.jsxs)("div", {
            className: "flex h-80 flex-col justify-between rounded-lg bg-gray-900 p-4 text-white",
            children: [(0, l.jsx)("h3", {
                className: "loco-text-heading-sm -mt-2 md:mr-20",
                children: e
            }), (0, l.jsx)("div", {
                className: "loco-text-body-lg opacity-70",
                children: t
            }), (0, l.jsxs)("div", {
                className: "flex grow flex-col justify-between",
                children: [(0, l.jsx)("div", {
                    className: "loco-text-body mt-8 opacity-70",
                    children: a
                }), (0, l.jsx)("div", {
                    children: (0, l.jsx)(s.default, {
                        href: i?.href,
                        target: i?.target,
                        variant: "primary",
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        "data-link-location": c,
                        "data-link-id": `${c}-action`,
                        children: i?.label
                    })
                })]
            })]
        })
    };
    var d = e.i(131564);
    let o = ({
        theme: e = "light",
        title: o,
        description: c,
        filters: u,
        actions: m,
        cards: f,
        variant: h = "column",
        blockKey: g,
        cardsHeading: x
    }) => {
        let [p, b] = (0, t.useState)(u?.[0]?.value || ""), v = (e, t) => {
            let a = {
                uniteCard: i.default,
                cardSubscription: n
            } [e?.type];
            return (0, l.jsx)("div", {
                className: "w-full px-0 py-1 md:w-1/2 md:px-1 md:py-1 lg:w-1/3",
                children: (0, l.jsx)(a, {
                    ...e,
                    variant: h,
                    blockKey: g || r.trackingLocation.uniteCards,
                    titleTag: x,
                    index: t
                })
            }, `${e.title}-${t}`)
        }, j = (0, a.default)({
            dark: "dark" === e || "collapsiblecards" === e
        }), k = (0, a.default)({
            "bg-white dark:bg-black": "light" === e || "dark" === e,
            "bg-transparent": "collapsiblecards" === e
        }), y = (0, a.default)("w-full flex flex-wrap justify-center", {
            "mt-8 pb-10": (!o || !c) && "collapsiblecards" !== e
        });
        return (0, l.jsx)("section", {
            className: j,
            children: (0, l.jsx)("div", {
                className: k,
                children: (0, l.jsxs)("div", {
                    className: "collapsiblecards" === e ? "flex flex-col items-center" : "container flex flex-col items-center",
                    children: [(o || c) && (0, l.jsx)(d.default, {
                        title: o,
                        description: c
                    }), (u && u.length > 0 || m && m.length > 0) && (0, l.jsxs)("div", {
                        className: "mb-8 flex w-full flex-wrap justify-center gap-4",
                        children: [u.map((e, t) => (0, l.jsx)(s.default, {
                            rounded: !0,
                            outlined: !0,
                            onPress: () => {
                                e.onPress && e.onPress(), b(e.value)
                            },
                            active: p.includes(e.value),
                            "data-link-location": g || r.trackingLocation.uniteCardsFilter,
                            "data-link-id": `${g||r.trackingLocation.uniteCardsFilter}-filter-${t}`,
                            children: e.title
                        }, `filter-${e}-${t}`)), m.map((e, t) => (0, l.jsx)(s.default, {
                            href: e.href,
                            rounded: !0,
                            outlined: !0,
                            hasArrow: !0,
                            "data-link-location": g || r.trackingLocation.uniteCardsAction,
                            "data-link-id": `${g||r.trackingLocation.uniteCardsAction}-action-${t}`,
                            children: e.title
                        }, `action-${e}-${t}`))]
                    }), (0, l.jsx)("div", {
                        className: y,
                        children: p ? f.filter(e => e.tags?.includes(p)).map(v) : f.map(v)
                    })]
                })
            })
        })
    };
    e.s(["default", 0, o], 577702);
    var c = e.i(803695),
        u = e.i(998569),
        m = e.i(430215),
        f = e.i(783078);
    let h = ({
        theme: e = "light",
        slides: r,
        variant: s = "short",
        blockKey: d,
        title: o
    }) => {
        let [h, g] = (0, t.useState)(0), x = (0, t.useRef)(null), p = (0, m.default)(`(min-width: ${f.default.Large}px)`), b = "gdc2026" === s, v = (0, a.default)({
            dark: "dark" === e
        }), j = (0, t.useCallback)((e, l) => {
            g(l)
        }, []), k = (0, t.useCallback)(() => {
            x.current && x.current.slickPrev()
        }, []), y = (0, t.useCallback)(() => {
            x.current && x.current.slickNext()
        }, []), w = {
            dots: !1,
            infinite: !1,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: !1,
            beforeChange: j,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }]
        }, A = (e, t) => {
            let a = {
                uniteCard: i.default,
                cardSubscription: n
            } [e.type];
            return (0, l.jsx)("div", {
                className: b ? "col-span-12 h-full" : "col-span-12 md:col-span-6 lg:col-span-4",
                children: (0, l.jsx)(a, {
                    ...e,
                    variant: b ? "horizontal" : s,
                    blockKey: `${d}-${t}`,
                    titleTag: "p"
                })
            }, `carousel-card-${d}-${t}-${e.title}`)
        }, N = () => {
            let t = p ? 2 : 1,
                i = r.length - t + 1;
            return (0, l.jsx)("div", {
                className: "flex gap-2",
                children: Array.from({
                    length: i
                }).map((t, i) => (0, l.jsx)("button", {
                    className: (0, a.default)("h-2 w-2 rounded-full transition-all", h === i ? "bg-white" : "dark" === e ? "bg-gray-600" : "bg-gray-300"),
                    "aria-label": `Go to slide ${i+1}`,
                    "aria-current": h === i ? "true" : "false"
                }, i))
            })
        }, L = p ? 2 : 1, R = r.length - L + 1, _ = 0 === h, C = h >= R - 1, B = p && r.length > 2 || !p && r.length > 1;
        return b ? (0, l.jsx)("section", {
            className: v,
            children: (0, l.jsx)("div", {
                className: "carousel-cards py-16 dark:bg-black",
                children: (0, l.jsxs)("div", {
                    className: "container",
                    children: [(0, l.jsxs)("div", {
                        className: "mb-8 hidden items-center gap-8 lg:flex",
                        children: [(0, l.jsx)("div", {
                            className: "flex flex-1 items-center",
                            children: o && (0, l.jsx)("h2", {
                                className: "loco-text-heading-xs text-left",
                                children: o
                            })
                        }), B && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: "flex flex-1 items-center justify-center",
                                children: N()
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-1 items-center justify-end gap-2",
                                children: [(0, l.jsx)(u.default, {
                                    direction: "left",
                                    onPress: k,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: _
                                }), (0, l.jsx)(u.default, {
                                    onPress: y,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: C
                                })]
                            })]
                        })]
                    }), o && (0, l.jsx)("h2", {
                        className: "loco-text-heading-xl mb-6 text-left lg:hidden",
                        children: o
                    }), (0, t.createElement)(c.default, {
                        ...w,
                        ref: x,
                        key: `slider-${r.length}`,
                        className: "overflow-hidden"
                    }, r.map(A)), B && (0, l.jsxs)("div", {
                        className: "mt-8 flex flex-col items-center gap-4 lg:hidden",
                        children: [N(), (0, l.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, l.jsx)(u.default, {
                                direction: "left",
                                onPress: k,
                                ariaLabel: "Previous slide",
                                variant: "primary",
                                isDisabled: _
                            }), (0, l.jsx)(u.default, {
                                onPress: y,
                                ariaLabel: "Next slide",
                                variant: "primary",
                                isDisabled: C
                            })]
                        })]
                    })]
                })
            })
        }) : (0, l.jsx)("section", {
            className: v,
            children: (0, l.jsx)("div", {
                className: "carousel-cards py-16 dark:bg-black",
                children: (0, l.jsxs)("div", {
                    className: "container",
                    children: [(0, l.jsx)("div", {
                        className: "mb-8 flex items-center justify-between",
                        children: B && (0, l.jsxs)(l.Fragment, {
                            children: [N(), (0, l.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, l.jsx)(u.default, {
                                    direction: "left",
                                    onPress: k,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: _
                                }), (0, l.jsx)(u.default, {
                                    onPress: y,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: C
                                })]
                            })]
                        })
                    }), (0, t.createElement)(c.default, {
                        ...w,
                        ref: x,
                        key: `slider-${r.length}`,
                        className: "overflow-visible"
                    }, r.map(A))]
                })
            })
        })
    };
    var g = e.i(869324),
        x = e.i(115219);
    let p = [{
        src: e.i(154038).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APLZ9Vnvz+/AYDoDzX//2Q=="
    }, {
        src: e.i(594333).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APJp1W3tNqjPm9Se2K//2Q=="
    }, {
        src: e.i(522500).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APONHVbm4jikXKyOAa//2Q=="
    }];
    e.s(["default", 0, ({
        theme: e,
        title: t,
        description: a,
        filters: i,
        actions: r,
        variant: s,
        isCarousel: n,
        cards: d,
        cardsBlog: c,
        newsItems: u,
        blogItems: m,
        blockKey: f,
        isHidden: b,
        cardsHeading: v
    }) => {
        let {
            mapFormActions: j,
            renderModal: k
        } = (0, x.useFormModal)(d?.map(e => e.action).filter(Boolean)), y = (e, l = 0, t = !1) => {
            let a = !!e?.action?.form,
                i = null;
            e?.action ? i = {
                label: e.action?.title,
                href: a ? "" : e.action?.link?.linkReference?.href.current || "",
                target: e.action?.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                ...a ? {
                    renderModal: () => k({
                        label: e.action?.title ?? "",
                        form: e.action.form
                    })
                } : {}
            } : e?.pageUrl && (i = {
                href: e?.pageUrl?.link?.href?.current || "",
                target: e?.pageUrl?.target === "_blank" ? "_blank" : "_self"
            });
            let r = null;
            if (e?.image) r = {
                src: e.image.file?.asset.url,
                alt: e.image.alt,
                placeholder: e.image.file?.asset.metadata?.lqip
            };
            else if (e?.featuredImage) r = {
                src: e.featuredImage?.file?.asset?.url,
                alt: e.title,
                placeholder: e.featuredImage?.file?.asset?.metadata?.lqip
            };
            else if (t) {
                let t = p[l % 3];
                r = {
                    src: t.src,
                    alt: e.title || "Unity News",
                    placeholder: t.blurDataURL
                }
            }
            return {
                type: e._type || "uniteCard",
                title: e.title,
                subtitle: e.subtitle || "",
                description: e.description || e?.seo?.teaserText || e?.seo?.description || "",
                image: r,
                video: {
                    src: e.brandfolder?.muxHLSURL || ""
                },
                action: i,
                tags: e.tags || [],
                videoInline: e?.videoInline
            }
        }, w = n ? (() => {
            if (!d || 0 === d.length) return c?.length && c?.length > 0 ? c?.map((e, l) => y(e, l)) : [];
            let e = 0,
                l = 0;
            return d.map((t, a) => {
                if ("cardDynamic" === t._type) {
                    if ("news" === t.contentType && u && e < u.length) {
                        let l = u[e],
                            t = e;
                        return e++, y(l, t, !0)
                    }
                    if ("blog" === t.contentType && m && l < m.length) {
                        let e = m[l];
                        return l++, y(e, a)
                    }
                    return null
                }
                return y(t, a)
            }).filter(e => null !== e)
        })() : d?.length && d?.length > 0 ? d?.filter(e => "cardDynamic" !== e._type).map((e, l) => y(e, l)) : c?.length && c?.length > 0 ? c?.map((e, l) => y(e, l)) : [], A = i?.map((e, l) => ({
            title: e.title,
            value: e.value,
            onPress: () => {
                (0, g.default)({
                    event: "userEvent",
                    event_name: "navigation_click",
                    properties: {
                        navigation_type: "internal",
                        navigation_click_text: e.title,
                        navigation_href: window.location.href,
                        navigation_link_location: `cards_block_filter_${l+1}`
                    }
                })
            }
        })) || [];
        return n ? (0, l.jsx)(h, {
            theme: "dark" === e ? "dark" : "light",
            variant: "stacked" === s || "column" === s || "short" === s || "gdc2026" === s ? s : "column",
            slides: w,
            blockKey: f,
            title: t || void 0
        }) : (0, l.jsx)(l.Fragment, {
            children: !b && (0, l.jsx)(o, {
                theme: "dark" === e ? "dark" : "collapsiblecards" === e ? "collapsiblecards" : "light",
                title: t || "",
                description: a,
                filters: A,
                actions: r?.map(e => ({
                    title: e?.title || "",
                    href: e.link?.linkReference?.href.current || "",
                    target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                })) || [],
                variant: "stacked" === s || "column" === s || "short" === s ? s : "column",
                cards: w,
                blockKey: f,
                cardsHeading: "div" === v || "h2" === v || "h3" === v || "h4" === v ? v : t ? "h3" : "h2"
            })
        })
    }], 913890)
}, 4390, e => {
    "use strict";
    let l = e.i(459923).default;
    e.s(["default", 0, l])
}, 686916, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(722990);
    let a = ({
        children: e
    }) => (0, l.jsx)("div", {
        className: "w-full bg-black",
        children: e
    });
    a.Content = ({
        children: e
    }) => (0, l.jsx)("div", {
        className: "footnote loco-text-body-sm container",
        children: e
    }), e.s(["default", 0, ({
        content: e,
        isHidden: i
    }) => (0, l.jsx)(l.Fragment, {
        children: !i && (0, l.jsx)(a, {
            children: (0, l.jsx)(a.Content, {
                children: (0, l.jsx)(t.PortableText, {
                    value: e,
                    components: e
                })
            })
        })
    })], 686916)
}, 742958, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(722978),
        a = e.i(3931),
        i = e.i(749583),
        r = e.i(828083),
        s = e.i(153348),
        n = e.i(955429),
        d = e.i(655105);
    let o = (0, r.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        c = ({
            title: e,
            eyebrow: r,
            description: c,
            image: u,
            video: m,
            visualPlacement: f,
            action: h,
            blockKey: g,
            cardHeading: x = "p"
        }) => {
            let p = (0, a.useRef)(null),
                [b, v] = (0, a.useState)(!1),
                j = (0, s.useInView)(p, {
                    once: !0
                }),
                k = (0, n.useReducedMotion)(),
                y = (0, t.default)("bg-gray-100 relative h-full rounded-xl overflow-hidden dark:bg-gray-900", {
                    dark: "background" === f
                }),
                w = (0, t.default)("z-0", {
                    "absolute top-0 left-0 w-full h-full": "background" === f,
                    "aspect-video relative mt-8 -mb-8": "default" === f
                }, "background" === f ? "after:content after:absolute after:z-10 after:inset-0 after:bg-gradient-to-b after:from-10% after:from-black after:to-transparent after:opacity-75" : ""),
                A = (0, t.default)("z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": b && !k && j && m?.src,
                    "": "background" === f
                }),
                N = (0, t.default)("absolute left-0 top-0 [&>video]:object-cover", {
                    "brightness-50 ": "background" === f
                });
            return (0, l.jsx)("div", {
                className: y,
                ref: p,
                children: (0, l.jsxs)("div", {
                    className: "flex h-full flex-col justify-between p-8",
                    children: [(0, l.jsxs)("div", {
                        className: "relative z-10",
                        children: [r && (0, l.jsx)("span", {
                            className: "loco-caption-sm mb-4 block opacity-70",
                            children: r
                        }), e && (0, l.jsx)(x, {
                            className: "loco-text-heading-xs",
                            children: e
                        }), c && (0, l.jsx)("p", {
                            className: "loco-text-body-sm mt-2 max-w-xs opacity-70",
                            children: c
                        }), (h?.href || h?.renderModal) && (0, l.jsx)("div", {
                            className: "mt-8",
                            children: h?.renderModal ? h.renderModal() : (0, l.jsx)(i.default, {
                                href: h.href,
                                rounded: !0,
                                outlined: !0,
                                hasArrow: !0,
                                "data-link-location": `${g}-action-${h.label}`,
                                "data-link-id": `${g}-action`,
                                "data-link-type": "CTA",
                                children: h.label
                            }, `action-${h.label}`)
                        })]
                    }), (0, l.jsxs)("div", {
                        className: w,
                        children: [u?.src && (0, l.jsx)(d.default, {
                            fill: !0,
                            alt: u.alt ?? "",
                            src: u.src,
                            className: A
                        }), j && !k && m?.src && (0, l.jsx)(o, {
                            url: m.src,
                            playing: m.autoplay ?? !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: N,
                            onReady: () => {
                                v(!0)
                            },
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        })]
                    })]
                })
            })
        },
        u = ({
            cards: e,
            blockKey: a,
            cardsHeading: i
        }) => {
            let r = (0, t.default)("bentoCards_grid", 1 === e.length && "is-single", e.length % 2 == 0 && "is-two-multiple", e.length % 3 == 0 && "is-three-multiple", function(e) {
                if (e <= 1) return !1;
                if (2 === e) return !0;
                if (e % 2 == 0) return !1;
                for (let l = 3; l <= Math.sqrt(e); l += 2)
                    if (e % l == 0) return !1;
                return !0
            }(e.length) && "is-prime");
            return (0, l.jsx)("div", {
                children: (0, l.jsx)("div", {
                    className: r,
                    children: e.map((e, t) => (0, l.jsx)("div", {
                        className: "bentoCards_item",
                        children: (0, l.jsx)(c, {
                            ...e,
                            blockKey: a,
                            cardHeading: i
                        })
                    }, `bento-card-${a}-${t}`))
                })
            })
        };
    var m = e.i(115219);
    e.s(["default", 0, ({
        theme: e,
        blockKey: a,
        isHidden: i,
        cards: r,
        bentoCardsHeading: s
    }) => {
        let {
            renderModal: n
        } = (0, m.useFormModal)(r?.map(e => e.actions?.[0]).filter(Boolean)), d = r?.map(e => {
            let l, t, a, i = e?.actions?.[0],
                r = !!i?.form;
            return {
                title: e.title,
                eyebrow: e.eyebrow || "",
                description: e.description || "",
                visualPlacement: "background" === e.visualPlacement ? "background" : "default",
                image: {
                    src: e?.image?.file?.asset.url ?? "",
                    alt: e?.image?.alt ?? "",
                    placeholder: e?.image?.file?.asset.metadata?.lqip ?? ""
                },
                video: {
                    src: e?.video?.muxHLSURL ?? ""
                },
                action: i ? (l = r ? "" : i.link?.linkReference?.href.current ?? "", t = i.link?.linkReference?.target === "_blank" ? "_blank" : "_self", a = {
                    label: i.title ?? "",
                    href: l,
                    target: t
                }, r ? {
                    ...a,
                    renderModal: () => {
                        let e = i.form || {},
                            l = {
                                title: e.title || "",
                                description: e.description || "",
                                fields: e.fields || [],
                                actions: e.actions || {},
                                sfdcIntegration: i.webinarFormParametersContent?.sfdcIntegration || {}
                            };
                        return n({
                            label: i.title ?? "",
                            form: l
                        })
                    }
                } : a) : null
            }
        }) ?? [], o = (0, t.default)({
            dark: "dark" === e
        });
        return (0, l.jsx)(l.Fragment, {
            children: !i && (0, l.jsx)("div", {
                className: o,
                children: (0, l.jsx)("div", {
                    className: "bg-white dark:bg-black",
                    children: (0, l.jsx)("div", {
                        className: "container py-16",
                        children: (0, l.jsx)(u, {
                            blockKey: a,
                            theme: "dark" === e ? "dark" : "light",
                            cards: d,
                            cardsHeading: "h2" === s || "h3" === s || "h4" === s ? s : "p"
                        })
                    })
                })
            })
        })
    }], 742958)
}, 50184, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(722978),
        a = e.i(153348),
        i = e.i(955429),
        r = e.i(828083),
        s = e.i(655105),
        n = e.i(3931);
    let d = (0, r.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        o = ({
            videoShowcaseA: e,
            videoShowcaseB: r
        }) => {
            let o = (0, n.useRef)(null),
                [c, u] = (0, n.useState)(!1),
                [m, f] = (0, n.useState)(!1),
                h = (0, a.useInView)(o, {
                    once: !0
                }),
                g = (0, i.useReducedMotion)(),
                x = (0, t.default)("transition-opacity duration-500 object-cover", {
                    "opacity-0": c && !g && h && e?.image?.src
                }),
                p = (0, t.default)("transition-opacity duration-500 object-cover", {
                    "opacity-0": m && !g && h && e?.image?.src
                });
            return (0, l.jsxs)("div", {
                className: "w-full",
                ref: o,
                children: [(0, l.jsxs)("div", {
                    className: "relative mx-auto aspect-square max-w-[35vw]",
                    children: [e?.image?.src && (0, l.jsx)(s.default, {
                        fill: !0,
                        alt: e?.image?.alt ?? "",
                        src: e?.image?.src,
                        className: x
                    }), h && !g && e?.video?.src && (0, l.jsx)(d, {
                        url: e.video.src,
                        playing: e.video.autoplay ?? !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 [&>video]:object-cover",
                        onReady: () => {
                            u(!0)
                        },
                        config: {
                            hlsOptions: {
                                maxMaxBufferLength: 1,
                                startLevel: 1
                            }
                        }
                    })]
                }), (0, l.jsxs)("div", {
                    className: "relative mx-auto -mt-[7vw] aspect-video w-full shadow-[0px_0px_80px_rgba(0,0,0,0.7)]",
                    children: [r?.image?.src && (0, l.jsx)(s.default, {
                        fill: !0,
                        alt: r?.image?.alt ?? "",
                        src: r?.image?.src,
                        className: p
                    }), h && !g && r?.video?.src && (0, l.jsx)(d, {
                        url: r.video.src,
                        playing: r.video.autoplay ?? !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 [&>video]:object-cover",
                        onReady: () => {
                            f(!0)
                        },
                        config: {
                            hlsOptions: {
                                maxMaxBufferLength: 1,
                                startLevel: 1
                            }
                        }
                    })]
                })]
            })
        };
    e.s(["default", 0, ({
        isHidden: e,
        theme: a,
        videoShowcaseA: i,
        videoShowcaseB: r
    }) => {
        let s = {
                videoShowcaseA: {
                    image: {
                        src: i?.image?.asset.url ?? "",
                        placeholder: i?.image?.asset.metadata?.lqip ?? "",
                        alt: i?.imageAlt ?? ""
                    },
                    video: {
                        src: i?.brandfolder?.muxHLSURL ?? ""
                    }
                },
                videoShowcaseB: {
                    image: {
                        src: r?.image?.asset.url ?? "",
                        placeholder: r?.image?.asset.metadata?.lqip ?? "",
                        alt: r?.imageAlt ?? ""
                    },
                    video: {
                        src: r?.brandfolder?.muxHLSURL ?? ""
                    }
                }
            },
            n = (0, t.default)({
                dark: "dark" === a
            });
        return (0, l.jsx)(l.Fragment, {
            children: !e && (0, l.jsx)("div", {
                className: n,
                children: (0, l.jsx)("div", {
                    className: "bg-white dark:bg-gray-900",
                    children: (0, l.jsx)("div", {
                        className: "container py-28",
                        children: (0, l.jsx)(o, {
                            ...s
                        })
                    })
                })
            })
        })
    }], 50184)
}, 584266, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(829150),
        a = e.i(433519),
        i = e.i(3931),
        r = e.i(722978),
        s = e.i(526826),
        n = e.i(749583),
        d = e.i(595388),
        o = e.i(407325),
        c = e.i(183062),
        u = e.i(604082),
        m = e.i(783078),
        f = e.i(430215);
    let h = {
            initial: {
                y: 5,
                opacity: 0
            },
            open: e => ({
                y: 0,
                opacity: 1,
                transition: {
                    duration: .35,
                    ease: [.25, 1, .5, 1],
                    delay: .05 * e
                }
            }),
            closed: {
                y: 5,
                opacity: 0,
                transition: {
                    duration: .5,
                    ease: [.25, 1, .5, 1]
                }
            }
        },
        g = {
            initial: {
                height: 0
            },
            open: {
                height: "auto",
                transition: {
                    duration: .5,
                    ease: [.25, 1, .5, 1]
                }
            },
            closed: {
                height: 0,
                transition: {
                    duration: .5,
                    ease: [.25, 1, .5, 1]
                }
            }
        },
        x = {
            initial: {
                rotate: -90
            },
            open: {
                rotate: 0,
                transition: {
                    duration: .35,
                    ease: [.25, 1, .5, 1]
                }
            },
            closed: {
                rotate: -90,
                transition: {
                    duration: .35,
                    ease: [.25, 1, .5, 1]
                }
            }
        };
    var p = e.i(766930);
    let b = (0, i.forwardRef)(({
            nav: e,
            action: t,
            isSticky: a,
            indexOfActiveLink: i,
            variant: s
        }, d) => {
            let o = (0, r.default)("alternateNavigation relative flex h-12 w-full bg-gray-900", {
                "justify-center": "centered" === s,
                "justify-stretch": "default" === s
            });
            return (0, l.jsx)("div", {
                className: o,
                ref: d,
                children: (0, l.jsx)("div", {
                    className: (0, r.default)("z-40 h-12 bg-gray-900 md:block", {
                        "fixed top-11 mt-1 bg-transparent": a,
                        "absolute top-0 py-1": !a,
                        "w-full": "default" === s
                    }),
                    children: (0, l.jsx)("div", {
                        className: "container h-full",
                        children: (0, l.jsxs)("div", {
                            className: (0, r.default)("flex h-full items-center justify-between rounded-md px-2 transition-colors duration-150", {
                                "bg-gray-900": !a,
                                "bg-[rgba(0,0,0,0.5)] backdrop-blur-sm": a
                            }),
                            children: [(0, l.jsx)("div", {
                                className: "h-full w-full shrink-1",
                                children: (0, l.jsx)("ul", {
                                    className: "flex h-full w-full items-center",
                                    children: e.map((e, t) => (0, l.jsx)(y, {
                                        label: e.label,
                                        href: e.href,
                                        target: e.target,
                                        active: i === t
                                    }, `alternate-navigation-element-${e.label}-${t}`))
                                })
                            }), t && (0, l.jsx)("div", {
                                className: "shrink-0",
                                children: (0, l.jsx)(n.default, {
                                    href: t.href,
                                    target: t.target,
                                    size: "small",
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: t.label
                                })
                            })]
                        })
                    })
                })
            })
        }),
        v = (0, i.forwardRef)(({
            isSticky: e,
            nav: t,
            indexOfActiveLink: a,
            title: n
        }, d) => {
            let [o, c] = (0, i.useState)(!1);
            return n ? (0, l.jsx)("div", {
                className: "alternateNavigation relative h-12 w-full bg-gray-900",
                ref: d,
                children: (0, l.jsx)("div", {
                    className: (0, r.default)("z-40 mt-1 h-12 w-full bg-gray-900 md:block", {
                        "fixed top-[4.5rem] bg-transparent": e,
                        "absolute top-0": !e
                    }),
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsx)("div", {
                            className: (0, r.default)("flex h-full items-center justify-between rounded-md px-3 transition-colors duration-150", {
                                "bg-gray-900": !e,
                                "bg-[rgba(0,0,0,0.65)] backdrop-blur-sm": e
                            }),
                            children: (0, l.jsxs)("div", {
                                className: "w-full",
                                children: [(0, l.jsxs)(s.m.button, {
                                    animate: o ? "open" : "closed",
                                    className: "flex w-full items-center justify-between py-3",
                                    onClick: () => {
                                        c(!o)
                                    },
                                    children: [(0, l.jsx)("span", {
                                        className: "text-sm font-medium text-white",
                                        children: null == a || o ? n : t[a].label
                                    }), (0, l.jsx)(j, {})]
                                }), (0, l.jsx)(s.m.ul, {
                                    className: "overflow-hidden",
                                    initial: "initial",
                                    animate: o ? "open" : "closed",
                                    variants: g,
                                    children: t.map(({
                                        label: e,
                                        href: t,
                                        target: i
                                    }, r) => (0, l.jsx)(k, {
                                        label: e,
                                        href: t,
                                        target: i,
                                        active: a === r,
                                        index: r,
                                        isOpen: o,
                                        onClick: () => {
                                            c(!1)
                                        }
                                    }, `alternate-navigation-element-${e}-${r}`))
                                })]
                            })
                        })
                    })
                })
            }) : null
        }),
        j = () => (0, l.jsxs)(s.m.svg, {
            variants: x,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, l.jsx)("g", {
                clipPath: "url(#clip0_5706_918)",
                children: (0, l.jsx)("path", {
                    id: "Vector",
                    d: "M12 6.5C12.568 6.5 12.8647 7.15733 12.522 7.582L12.4713 7.638L8.47133 11.638C8.35654 11.7528 8.2038 11.8217 8.04179 11.8319C7.87977 11.8421 7.7196 11.7928 7.59133 11.6933L7.52867 11.638L3.52867 7.638L3.47333 7.57533L3.43733 7.524L3.40133 7.46L3.39 7.436L3.372 7.39133L3.35067 7.31933L3.344 7.284L3.33733 7.244L3.33467 7.206V7.12733L3.338 7.08867L3.344 7.04867L3.35067 7.014L3.372 6.942L3.39 6.89733L3.43667 6.80933L3.48 6.74933L3.52867 6.69533L3.59133 6.64L3.64267 6.604L3.70667 6.568L3.73067 6.55667L3.77533 6.53867L3.84733 6.51733L3.88267 6.51067L3.92267 6.504L3.96067 6.50133L12 6.5Z",
                    fill: "white"
                })
            }), (0, l.jsx)("defs", {
                children: (0, l.jsx)("clipPath", {
                    id: "clip0_5706_918",
                    children: (0, l.jsx)("rect", {
                        width: "16",
                        height: "16",
                        fill: "white",
                        transform: "translate(0 0.5)"
                    })
                })
            })]
        }),
        k = e => {
            let t = (0, i.useRef)(null),
                {
                    linkProps: a
                } = (0, o.useLink)(e, t),
                {
                    focusProps: n
                } = (0, c.useFocusRing)(),
                {
                    label: m,
                    href: f,
                    target: g,
                    locale: x,
                    localePrefix: p,
                    active: b,
                    index: v,
                    isOpen: j
                } = e;
            return (0, l.jsx)("li", {
                className: "border-t border-[#ffffff14]",
                children: (0, l.jsxs)(s.m.div, {
                    custom: v,
                    variants: h,
                    initial: "initial",
                    animate: j ? "open" : "closed",
                    className: "flex w-full items-center justify-between",
                    children: [(0, l.jsx)(d.Link, {
                        ...(0, u.mergeProps)(a, n),
                        ref: t,
                        href: f,
                        target: g ?? "_self",
                        locale: x,
                        className: "py-3 text-sm font-medium text-white",
                        localePrefix: p,
                        children: m
                    }), (0, l.jsx)("div", {
                        className: (0, r.default)("mr-1 h-2 w-2 rounded-full transition-colors duration-300", {
                            "bg-blue": b
                        })
                    })]
                })
            }, `n_${m}`)
        },
        y = e => {
            let t = (0, i.useRef)(null),
                {
                    linkProps: a
                } = (0, o.useLink)(e, t),
                {
                    isFocusVisible: s,
                    focusProps: n
                } = (0, c.useFocusRing)(),
                {
                    label: m,
                    href: f,
                    target: h,
                    locale: g,
                    localePrefix: x,
                    active: p
                } = e,
                b = (0, r.default)("alternateNavigation_item relative h-full flex items-center px-2 !text-[0.75rem] font-medium group outline-hidden text-gray-200 transition-colors duration-150", {
                    "a11y-ring rounded-xs": s
                }, {
                    active: p,
                    "text-white": p,
                    "text-gray-200": !p
                });
            return (0, l.jsx)("li", {
                className: "h-full",
                children: (0, l.jsx)(d.Link, {
                    ...(0, u.mergeProps)(a, n),
                    ref: t,
                    href: f,
                    target: h ?? "_self",
                    locale: g,
                    className: b,
                    localePrefix: x,
                    children: m
                })
            })
        };
    b.displayName = "DesktopNav", v.displayName = "MobileNav";
    let w = ({
        variant: e = "default",
        title: t,
        nav: a,
        action: r
    }) => {
        let s = (0, f.default)(`(max-width: ${m.default.Large}px)`),
            n = (0, i.useRef)(null),
            [d, o] = (0, i.useState)(null),
            [c, u] = (0, i.useState)([]),
            [h, g] = (0, i.useState)(!1),
            [x, j] = (0, i.useState)(!1),
            [k, y] = (0, i.useState)(!1),
            w = (0, i.useRef)(0),
            A = () => {
                let e = a.map(e => e.href);
                u([...document.querySelectorAll("a[data-anchor-item]")].filter(l => {
                    let t = l.getAttribute("id");
                    return t && e.find(e => e.includes(t))
                }).map(e => ({
                    top: e.offsetTop + 43
                })))
            },
            N = () => {
                let e;
                n.current && (n.current.offsetTop < window.scrollY ? j(!0) : j(!1)), w.current > window.scrollY && x ? g(!0) : w.current < window.scrollY && g(!1), w.current = window.scrollY, n.current && (n.current.offsetTop > window.innerHeight && !h ? y(!0) : y(!1)), e = null, c.forEach((l, t) => {
                    window.scrollY > l.top && (e = t)
                }), o(e)
            };
        return (0, i.useEffect)(() => {
            let e = document.querySelector("nav");
            e && (e.ariaHidden = String(k))
        }, [k]), (0, i.useLayoutEffect)(() => (A(), window.addEventListener("resize", A), () => {
            window.removeEventListener("resize", A)
        }), []), (0, i.useEffect)(() => (w.current = window.scrollY, window.addEventListener("scroll", N), () => {
            window.removeEventListener("scroll", N)
        }), [h, c, s]), (0, l.jsx)(p.default, {
            children: s ? (0, l.jsx)(v, {
                ref: n,
                nav: a,
                isSticky: x,
                indexOfActiveLink: d,
                title: t
            }) : (0, l.jsx)(b, {
                ref: n,
                nav: a,
                action: r,
                isSticky: x,
                indexOfActiveLink: d,
                variant: e
            })
        })
    };
    e.s(["default", 0, ({
        title: e,
        navigation: i,
        action: r,
        theme: s,
        isHidden: n
    }) => {
        let {
            state: d
        } = (0, a.default)();
        return (0, l.jsx)(l.Fragment, {
            children: !n && (0, l.jsx)(w, {
                title: e ?? "",
                action: (e => {
                    if (!e?.link) return null;
                    let l = e?.link.linkReference?.href.current;
                    return {
                        label: e?.title ?? "",
                        href: l ? (0, t.default)(l, d, e?.extendLink) : "",
                        target: e?.link.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })(r),
                nav: i.map(e => ({
                    label: e?.title ?? "",
                    href: e?.link?.linkReference?.href.current ?? "",
                    target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                }))
            })
        })
    }], 584266)
}, 692627, 569074, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(655105),
        a = e.i(722978);
    let i = ({
        theme: e = "light",
        quote: i,
        author: r
    }) => {
        let s = (0, a.default)({
            dark: "dark" === e
        });
        return (0, l.jsx)("blockquote", {
            className: s,
            children: (0, l.jsx)("div", {
                className: "py-12 md:py-40 dark:bg-black",
                children: (0, l.jsx)("div", {
                    className: "container",
                    children: (0, l.jsxs)("div", {
                        className: "grid lg:grid-cols-12 lg:gap-2",
                        children: [i && (0, l.jsx)("div", {
                            className: "lg:col-start-4 lg:col-end-13 lg:row-start-1",
                            children: (0, l.jsx)("p", {
                                className: "quote-item loco-text-heading-md",
                                children: i
                            })
                        }), r && (0, l.jsxs)("div", {
                            className: "mt-4 flex flex-col lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:mt-2",
                            children: [r.image && r.image.src && (0, l.jsx)("div", {
                                className: "overflow-hidden rounded",
                                children: (0, l.jsx)(t.default, {
                                    src: r.image.src,
                                    placeholder: "blur",
                                    blurDataURL: r.image.placeholder,
                                    alt: r.image.alt || "",
                                    width: 200,
                                    height: 250,
                                    className: "w-full max-w-[12rem] object-cover"
                                })
                            }), (0, l.jsxs)("footer", {
                                className: "mt-2 max-w-[12rem] lg:mt-8",
                                children: [r.name && (0, l.jsx)("span", {
                                    className: "loco-text-body-md mt-2 block",
                                    children: r.name
                                }), r.title && (0, l.jsx)("span", {
                                    className: "loco-text-body-sm mt-1 block dark:text-gray-300",
                                    children: r.title
                                })]
                            })]
                        })]
                    })
                })
            })
        })
    };
    e.s(["default", 0, ({
        theme: e,
        quote: t,
        author: a,
        isHidden: r
    }) => {
        let s = {
            name: a?.name || "",
            title: a?.title || "",
            image: {
                src: a?.image?.file?.asset.url || "",
                placeholder: a?.image?.file?.asset.metadata?.lqip || "",
                alt: a?.image?.alt || ""
            }
        };
        return (0, l.jsx)(l.Fragment, {
            children: !r && (0, l.jsx)(i, {
                quote: t,
                author: s,
                theme: "dark" === e ? "dark" : "light"
            })
        })
    }], 692627);
    let r = ({
        children: e,
        theme: t = "light",
        alignment: i = "left",
        subtitle: r
    }) => {
        let s = (0, a.default)({
                dark: "dark" === t
            }),
            n = (0, a.default)("col-span-12", {
                "lg:col-start-4": "offset" === i || r,
                "lg:col-span-8": "left" === i && !r,
                "lg:col-span-6": r
            });
        return (0, l.jsx)("section", {
            className: s,
            children: (0, l.jsx)("div", {
                className: "bg-white py-14 md:py-32 dark:bg-black",
                children: (0, l.jsxs)("div", {
                    className: "container grid grid-cols-12 text-black dark:text-white",
                    children: [r && (0, l.jsx)("div", {
                        className: "loco-caption-lg-bold col-span-5 mb-3 uppercase lg:col-span-2 lg:mt-2",
                        children: r
                    }), (0, l.jsx)("div", {
                        className: `loco-text-heading-md ${n}`,
                        children: e
                    })]
                })
            })
        })
    };
    e.s(["default", 0, ({
        theme: e,
        text: t,
        alignment: a,
        subtitle: i,
        isHidden: s
    }) => (0, l.jsx)(l.Fragment, {
        children: !s && (0, l.jsx)(r, {
            theme: "dark" === e ? "dark" : "light",
            alignment: "offset" === a ? "offset" : "left",
            subtitle: i || "",
            children: t
        })
    })], 569074)
}, 679288, e => {
    "use strict";
    var l = e.i(3931);
    e.s(["default", 0, () => {
        let [e, t] = (0, l.useState)("Unknown");
        return (0, l.useEffect)(() => {
            let e = window.navigator.userAgent;
            e.includes("Win") && t("Windows"), e.includes("Mac") && t("Mac"), e.includes("Linux") && t("Linux")
        }, []), e
    }])
}, 457689, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(722990),
        i = e.i(131564),
        r = e.i(679288);
    e.s(["default", 0, ({
        theme: e,
        variant: s,
        padding: n,
        title: d,
        description: o,
        richText: c,
        actions: u,
        isHidden: m,
        operatingSystem: f
    }) => {
        let h = (0, r.default)(),
            g = (0, t.useMemo)(() => u ? u.map(e => ({
                title: e?.title || "",
                href: e?.link?.linkReference?.href?.current || "",
                target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            })) : [], [u]);
        return f && f !== h ? null : (0, l.jsx)(l.Fragment, {
            children: !m && (0, l.jsx)(i.default, {
                theme: "dark" === e ? "dark" : "light",
                variant: "center" === s ? "center" : "left",
                padding: n ?? !0,
                title: d,
                description: o ?? "",
                richText: (0, l.jsx)(a.PortableText, {
                    value: c
                }),
                actions: g
            })
        })
    }])
}, 68274, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(185462);
    e.s(["default", 0, ({
        data: e,
        isHidden: i,
        theme: r
    }) => {
        let s = (0, t.useMemo)(() => e?.map(e => e.value?.text ? {
            value: {
                type: "text",
                text: e.value.text
            },
            label: e.label
        } : {
            value: {
                type: "icon",
                url: e?.value?.icon?.file?.cdnURL || "",
                description: e?.value?.icon?.caption || ""
            },
            label: e.label
        }), [e]);
        return (0, l.jsx)(l.Fragment, {
            children: !i && (0, l.jsx)(a.default, {
                keyFigures: s,
                theme: "dark" === r ? "dark" : "light"
            })
        })
    }], 68274)
}, 794189, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(722978),
        a = e.i(3931),
        i = e.i(153348),
        r = e.i(955429),
        s = e.i(655105),
        n = e.i(828083),
        d = e.i(805518);
    let o = (0, n.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        c = ({
            image: e,
            video: n,
            layout: c,
            forcedAspectRatio: u = "none",
            richCaption: m
        }) => {
            let f = (0, a.useRef)(null),
                [h, g] = (0, a.useState)(!1),
                x = (0, i.useInView)(f),
                p = (0, r.useReducedMotion)(),
                b = (0, t.default)("", {
                    "max-w-lg": "small" === c,
                    "max-w-lg mx-auto": "small-center" === c,
                    "container grid lg:grid-cols-12 lg:gap-2": "offset" === c
                }),
                v = (0, t.default)("relative overflow-hidden rounded-2xl", {
                    "aspect-square": "1:1" === u,
                    "aspect-[4/3]": "4:3" === u,
                    "aspect-video": "16:9" === u
                }),
                j = (0, t.default)("absolute cover z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": h && !p && x && n?.src
                }),
                k = {
                    aspectRatio: "none" === u && e.dimensions?.width && e.dimensions?.height ? `${e.dimensions.width}/${e.dimensions.height}` : void 0
                };
            return (0, l.jsx)("div", {
                className: b,
                ref: f,
                children: (0, l.jsxs)("div", {
                    className: "offset" === c ? "lg:col-start-4 lg:col-end-13 lg:row-start-1" : "",
                    children: [(0, l.jsxs)("div", {
                        className: v,
                        style: k,
                        children: [(0, l.jsx)(s.default, {
                            src: e.src,
                            placeholder: "blur",
                            blurDataURL: e.placeholder,
                            fill: !0,
                            alt: e.alt ?? "",
                            className: j,
                            sizes: (() => {
                                switch (c) {
                                    case "small":
                                        return "32rem";
                                    case "offset":
                                        return "1440px";
                                    default:
                                        return "100vw"
                                }
                            })()
                        }), x && !p && n?.src && (0, l.jsx)(o, {
                            url: n.src,
                            playing: !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: "[&>video]:object-cover",
                            onReady: () => {
                                g(!0)
                            },
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        })]
                    }), m && (0, l.jsx)("div", {
                        className: "loco-text-body-sm mt-2 text-gray-500",
                        children: (0, l.jsx)(d.default, {
                            children: m
                        })
                    })]
                })
            })
        };
    var u = e.i(186114),
        m = e.i(195051);
    let f = ({
        provider: i,
        image: r,
        video: o,
        layout: c,
        buttonLabel: f,
        richCaption: h,
        blockKey: g,
        videoInline: x,
        blockedMessage: p,
        consentButtonLabel: b
    }) => {
        let v = (0, a.useRef)(null),
            [j, k] = (0, a.useState)(!1),
            y = null;
        "youtube" === i ? y = (0, n.default)(() => e.A(269100), {
            loadableGenerated: {
                modules: [346003]
            },
            ssr: !1
        }) : "brandfolder" === i && (y = (0, n.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }));
        let w = {};
        "brandfolder" === i && (w = {
            hlsOptions: {
                maxMaxBufferLength: 1,
                qualityStartLevel: 1
            }
        });
        let A = () => {
                k(!0)
            },
            N = (0, t.default)("", {
                "max-w-lg": "small" === c,
                "max-w-lg mx-auto": "small-center" === c,
                "container grid lg:grid-cols-12 lg:gap-2": "offset" === c
            }),
            L = (0, t.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": j && o && o.src
            }),
            R = (0, t.default)("relative", {
                "lg:col-start-4 lg:col-end-13 lg:row-start-1": "offset" === c
            });
        return (0, l.jsx)("div", {
            className: N,
            ref: v,
            children: (0, l.jsxs)("div", {
                className: R,
                children: [(0, l.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-2xl",
                    children: [r?.src && (0, l.jsxs)("div", {
                        className: L,
                        onClick: A,
                        children: [!x && (0, l.jsx)(u.default, {
                            handleIsPlaying: A,
                            className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                            label: f,
                            "data-link-location": `${g}-video-play`,
                            "data-link-id": `${g}-video-play`,
                            "data-link-type": "CTA"
                        }), (0, l.jsx)(s.default, {
                            src: r.src,
                            placeholder: "blur",
                            blurDataURL: r.placeholder,
                            fill: !0,
                            alt: r.alt ?? "",
                            className: "cover absolute object-cover brightness-75"
                        })]
                    }), o?.src && y && (0, l.jsx)(y, {
                        url: o.src,
                        playing: j,
                        loop: x,
                        muted: x,
                        playsinline: x,
                        width: "100%",
                        height: "100%",
                        className: "[&>video]:object-cover",
                        onReady: () => {
                            x && k(!0)
                        },
                        controls: !x,
                        config: w
                    }), o?.src?.includes("youtube.com") && (0, l.jsx)(m.default, {
                        blockedMessage: p,
                        consentButtonLabel: b
                    })]
                }), h && (0, l.jsx)("div", {
                    className: "loco-text-body-sm mt-2 text-gray-500",
                    children: (0, l.jsx)(d.default, {
                        children: h
                    })
                })]
            })
        })
    };
    var h = e.i(722990);
    e.s(["default", 0, ({
        mediaType: e,
        provider: a,
        brandfolder: i,
        youtube_url: r,
        image: s,
        theme: n,
        layout: d,
        aspectRatio: o,
        buttonLabel: u,
        videoInline: m,
        richCaption: g,
        blockKey: x,
        isHidden: p,
        consent: b
    }) => {
        let v = {
                type: e ?? "image",
                layout: d ?? "full",
                theme: n ?? "light",
                video: {
                    src: ("brandfolder" === a ? i?.muxHLSURL : r) ?? null
                },
                aspectRatio: o ?? "none",
                image: {
                    src: s?.file?.asset.url ?? "",
                    alt: s?.alt ?? "",
                    caption: s?.caption ?? "",
                    placeholder: s?.file?.asset.metadata?.lqip ?? "",
                    dimensions: {
                        width: s?.file?.asset?.metadata?.dimensions?.width ?? 0,
                        height: s?.file?.asset?.metadata?.dimensions?.height ?? 0
                    }
                },
                provider: a,
                buttonLabel: u,
                videoInline: m,
                richCaption: (0, l.jsx)(h.PortableText, {
                    value: g
                })
            },
            j = "full";
        "small" === d ? j = "small" : "small-center" === d ? j = "small-center" : "offset" === d && (j = "offset");
        let k = "none";
        ("1:1" === o || "16:9" === o || "4:3" === o) && (k = o);
        let y = (0, t.default)("py-16", {
                "dark bg-black": "dark" === v.theme
            }),
            w = (0, t.default)("container");
        return (0, l.jsx)(l.Fragment, {
            children: !p && (0, l.jsx)("div", {
                className: y,
                children: (0, l.jsx)("div", {
                    className: w,
                    children: "video" === v.type ? (0, l.jsx)(f, {
                        provider: "brandfolder" === a ? "brandfolder" : "youtube",
                        layout: j,
                        video: v.video,
                        image: v.image,
                        buttonLabel: v.buttonLabel,
                        richCaption: v.richCaption,
                        blockKey: x,
                        videoInline: v.videoInline,
                        blockedMessage: b?.blockedMessage,
                        consentButtonLabel: b?.consentButtonLabel || ""
                    }) : (0, l.jsx)(c, {
                        layout: j,
                        image: v.image,
                        forcedAspectRatio: k,
                        richCaption: v.richCaption
                    })
                })
            })
        })
    }], 794189)
}, 25665, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(722990),
        i = e.i(655105),
        r = e.i(229696),
        s = e.i(805518),
        n = e.i(570133),
        d = e.i(210310),
        o = e.i(7075),
        c = e.i(775041),
        u = e.i(722978);
    let m = {
        types: {
            imageWithAlt: ({
                value: e
            }) => {
                let t = e?.file?.asset,
                    a = t?.metadata?.dimensions;
                return t?.url && a?.width && a?.height ? (0, l.jsx)(i.default, {
                    alt: e?.alt || "",
                    src: t.url,
                    width: a.width,
                    height: a.height,
                    className: "my-12"
                }) : null
            },
            table: ({
                value: e
            }) => (0, l.jsx)(r.default, {
                className: "my-12",
                children: e.tableContent || ""
            }),
            htmlTable: ({
                value: e
            }) => (0, l.jsx)(d.default, {
                table: e,
                hideTitle: !0
            }),
            anchor: ({
                value: e
            }) => (0, l.jsx)(o.Link, {
                id: e.anchorID,
                href: "",
                className: "md:absolute md:-mt-28"
            }),
            codeBlock: ({
                value: e
            }) => e.isHidden ? null : (0, l.jsx)(n.default, {
                code: e.code?.code,
                language: e.code?.language
            })
        },
        block: {
            h2: ({
                children: e
            }) => (0, l.jsx)("h2", {
                className: "loco-text-heading-xs! mb-6",
                children: e
            }),
            h3: ({
                children: e
            }) => (0, l.jsx)("h3", {
                className: "text-heading-sm!",
                children: e
            })
        },
        listItem: {
            number: ({
                children: e
            }) => (0, l.jsx)("li", {
                children: e
            }),
            bullet: ({
                children: e
            }) => (0, l.jsx)("li", {
                className: "list-disc",
                children: e
            })
        }
    };
    e.s(["default", 0, ({
        text: e,
        theme: i,
        layout: r,
        spacing: n,
        isHidden: d,
        productCategoryFilter: o
    }) => {
        let [f] = (0, t.useContext)(c.FiltersContext), {
            subcategories: h
        } = f.categories?.find(({
            _id: e
        }) => e === f.selectedCategory) || {}, g = null != f.selectedSubcategory ? (h || []).find(({
            _id: e
        }) => e === f.selectedSubcategory) : null, x = !o || o.categories?.find(e => e._id === f.selectedCategory) != null && (null == g || !o.subcategories || o.subcategories.some(({
            _id: e
        }) => e === f.selectedSubcategory)), p = (0, u.default)("dark:bg-black", {
            "py-8 md:py-12": "default" === n || "small" === n || !n,
            "py-16": "large" === n,
            "bg-black dark": "dark" === i
        }), b = (0, u.default)("", {
            container: "default" === r || !r,
            "container max-w-[60rem] mx-auto": "center" === r,
            "container grid lg:grid-cols-12 lg:gap-2": "offset" === r
        }), v = (0, u.default)("[&>*]:loco-text-body [&>*]:mb-4", {
            "lg:col-start-4 lg:col-end-10 lg:row-start-1": "offset" === r
        });
        return (0, l.jsx)(l.Fragment, {
            children: !d && x && (0, l.jsx)("section", {
                className: p,
                children: (0, l.jsx)("div", {
                    className: b,
                    children: (0, l.jsx)(s.default, {
                        className: v,
                        children: (0, l.jsx)(a.PortableText, {
                            value: e,
                            components: m
                        })
                    })
                })
            })
        })
    }], 25665)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "56f819df-37bc-5be4-ba7e-731e8adbe65c")
    } catch (e) {}
}();
//# debugId=56f819df-37bc-5be4-ba7e-731e8adbe65c