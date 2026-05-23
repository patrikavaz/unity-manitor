(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 998569, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(278466),
        i = e.i(722978),
        r = e.i(372474),
        s = e.i(897884),
        n = e.i(582374),
        d = e.i(427651),
        c = e.i(604082),
        o = e.i(166010),
        u = e.i(939115);
    let f = (0, t.forwardRef)(function({
        variant: e = "secondary",
        ariaLabel: f,
        size: m = "medium",
        direction: h = "right",
        className: g = "",
        href: x,
        onPress: p,
        isDisabled: b,
        isForcedHover: v,
        tag: j = "button",
        ...k
    }, y) {
        let w = (0, o.useObjectRef)(y),
            [A, N] = (0, t.useState)(!1),
            {
                buttonProps: L
            } = (0, r.useButton)({
                variant: e,
                size: m,
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
            } [m], {
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
            T = (0, i.clsx)(S, "fill-black dark:fill-white");
        if (x) {
            let e = (0, c.mergeProps)(L, R, C);
            return (0, l.jsxs)(a.Link, {
                ...e,
                ref: w,
                "aria-label": f,
                className: B,
                href: x,
                legacyBehavior: !0,
                children: [(0, l.jsx)(u.ArrowIcon, {
                    className: E
                }), (0, l.jsx)(u.ArrowIcon, {
                    className: T
                })]
            })
        }
        return (0, l.jsxs)(j, {
            ...(0, c.mergeProps)(L, R, C),
            ref: w,
            "aria-label": f,
            className: B,
            tabIndex: "span" == j ? -1 : 0,
            children: [(0, l.jsx)(u.ArrowIcon, {
                className: E
            }), (0, l.jsx)(u.ArrowIcon, {
                className: T
            })]
        })
    });
    e.s(["default", 0, f])
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
        a = e.i(278466),
        i = e.i(722978),
        r = e.i(749583),
        s = e.i(998569);
    let n = ({
            title: e,
            titleTag: n,
            description: d,
            action: c,
            fullWidth: o
        }) => {
            let [u, f] = (0, t.useState)(!1), m = "relative block border-t border-solid border-gray-200 dark:border-gray-700", h = (0, l.jsxs)("div", {
                className: (0, i.default)("grid gap-4 pt-2 pb-8 md:grid-cols-3", {
                    "md:grid-cols-[2fr_1fr_auto]": o
                }),
                children: [(0, l.jsx)(n || "h2", {
                    className: "loco-text-heading-xs",
                    children: e
                }), (0, l.jsx)("div", {
                    children: (0, l.jsx)("p", {
                        className: "loco-text-body-sm opacity-70",
                        children: d
                    })
                }), c && c?.label && (0, l.jsx)("div", {
                    className: "shrink-0 text-right",
                    children: (0, l.jsx)(r.default, {
                        tag: "span",
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        active: u,
                        children: c.label
                    })
                }), c && !c?.label && (0, l.jsx)("div", {
                    className: "flex shrink-0 justify-end text-right",
                    children: (0, l.jsx)(s.default, {
                        variant: "primary"
                    })
                })]
            });
            return c ? (0, l.jsx)(a.Link, {
                href: c.href,
                target: c.target,
                title: c.label,
                onMouseOver: () => {
                    f(!0)
                },
                onMouseLeave: () => {
                    f(!1)
                },
                className: m,
                children: h
            }) : (0, l.jsx)("div", {
                className: m,
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
                target: e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
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
        c = e.i(783078),
        o = e.i(749583),
        u = e.i(186114),
        f = e.i(278466);
    let m = (0, n.default)(() => e.A(410979), {
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
            T = "horizontal" === p && x,
            P = (0, a.default)("flex flex-col", {
                "min-h-[14rem]": "stacked" === p || "column" === p,
                grow: "column" !== p && "horizontal" !== p,
                "min-h-[14rem] xl:min-h-[18rem] xl:flex-row xl:gap-4": "column" === p
            }),
            F = (0, a.default)("rounded-lg bg-gray-100 p-4 dark:bg-gray-900", {
                "h-full": "horizontal" !== p,
                "group h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-pointer": "horizontal" === p && T,
                "h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-auto": "horizontal" === p && !T
            }),
            M = (0, a.default)("relative overflow-hidden rounded-lg", {
                "aspect-video w-full": "horizontal" !== p,
                "aspect-video w-full xl:flex-shrink-0 xl:self-start xl:max-w-1/2": "horizontal" === p
            }),
            I = (0, a.default)("cover absolute object-cover", {
                "transition-transform duration-400 group-hover:scale-110": "horizontal" === p && T
            }),
            $ = (0, l.jsxs)("div", {
                ref: L,
                className: F,
                children: ["horizontal" === p && T && (0, l.jsx)("div", {
                    className: "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-400 [background:linear-gradient(to_top,#000_0%,#666_60%,#666_100%)] group-hover:opacity-100"
                }), (0, l.jsxs)("div", {
                    className: (0, a.default)({
                        "relative z-10 flex h-full flex-col gap-6 rounded-lg bg-gray-100 p-3 xl:w-full xl:flex-row dark:bg-gray-900": "horizontal" === p,
                        "flex h-full flex-col justify-between gap-4": "horizontal" !== p
                    }),
                    children: [(h?.src || g?.src) && (0, l.jsxs)("div", {
                        className: M,
                        children: [g?.src && (0, l.jsx)(m, {
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
                                className: I,
                                sizes: `(min-width: ${c.default.Large}px) 33vw, (min-width: ${c.default.Medium}px) 50vw, 100vw`
                            })]
                        })]
                    }), (0, l.jsx)("div", {
                        className: (0, a.default)(P),
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
                                    children: x?.renderModal ? x.renderModal() : (0, l.jsx)(o.default, {
                                        locale: y,
                                        href: T ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: T ? "span" : "button",
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
                                    children: x?.renderModal ? x.renderModal() : (0, l.jsx)(o.default, {
                                        locale: y,
                                        href: T ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: T ? "span" : "button",
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
                                    children: x?.renderModal ? x.renderModal() : (0, l.jsx)(o.default, {
                                        locale: y,
                                        href: T ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: T ? "span" : "button",
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
        return T ? (0, l.jsx)(f.Link, {
            href: x.href,
            target: x.target,
            className: "cursor-pointer",
            "data-link-location": N,
            "data-link-id": `${N}-link-wrapper`,
            children: $
        }) : $
    }], 567134)
}, 776910, 577702, 913890, 686916, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(814507);
    e.s(["default", 0, ({
        title: e,
        action: a,
        isContained: i = !1,
        theme: r,
        isHidden: s
    }) => {
        let n;
        return (0, l.jsx)(l.Fragment, {
            children: !s && (0, l.jsx)("section", {
                className: "dark" === r ? "dark" : "",
                children: (n = a?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self", (0, l.jsx)(t.default, {
                    isContained: i,
                    action: {
                        title: a?.text || "",
                        href: a?.fieldLink?.linkReference?.href?.current || "",
                        target: n
                    },
                    children: e
                }))
            })
        })
    }], 776910);
    var a = e.i(3931),
        i = e.i(722978),
        r = e.i(567134),
        s = e.i(825610),
        n = e.i(749583);
    let d = ({
        title: e,
        subtitle: t,
        description: a,
        action: i,
        blockKey: r,
        index: d
    }) => {
        let c = r || s.trackingLocation.uniteCardSubscription,
            o = void 0 !== d ? `${c}-${d}` : c;
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
                    children: (0, l.jsx)(n.default, {
                        href: i?.href,
                        target: i?.target,
                        variant: "primary",
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        "data-link-location": o,
                        "data-link-id": `${o}-action`,
                        children: i?.label
                    })
                })]
            })]
        })
    };
    var c = e.i(131564);
    let o = ({
        theme: e = "light",
        title: t,
        description: o,
        filters: u,
        actions: f,
        cards: m,
        variant: h = "column",
        blockKey: g,
        cardsHeading: x
    }) => {
        let [p, b] = (0, a.useState)(u?.[0]?.value || ""), v = (e, t) => {
            let a = {
                uniteCard: r.default,
                cardSubscription: d
            } [e?.type];
            return (0, l.jsx)("div", {
                className: "w-full px-0 py-1 md:w-1/2 md:px-1 md:py-1 lg:w-1/3",
                children: (0, l.jsx)(a, {
                    ...e,
                    variant: h,
                    blockKey: g || s.trackingLocation.uniteCards,
                    titleTag: x,
                    index: t
                })
            }, `${e.title}-${t}`)
        }, j = (0, i.default)({
            dark: "dark" === e || "collapsiblecards" === e
        }), k = (0, i.default)({
            "bg-white dark:bg-black": "light" === e || "dark" === e,
            "bg-transparent": "collapsiblecards" === e
        }), y = (0, i.default)("w-full flex flex-wrap justify-center", {
            "mt-8 pb-10": (!t || !o) && "collapsiblecards" !== e
        });
        return (0, l.jsx)("section", {
            className: j,
            children: (0, l.jsx)("div", {
                className: k,
                children: (0, l.jsxs)("div", {
                    className: "collapsiblecards" === e ? "flex flex-col items-center" : "container flex flex-col items-center",
                    children: [(t || o) && (0, l.jsx)(c.default, {
                        title: t,
                        description: o
                    }), (u && u.length > 0 || f && f.length > 0) && (0, l.jsxs)("div", {
                        className: "mb-8 flex w-full flex-wrap justify-center gap-4",
                        children: [u.map((e, t) => (0, l.jsx)(n.default, {
                            rounded: !0,
                            outlined: !0,
                            onPress: () => {
                                e.onPress && e.onPress(), b(e.value)
                            },
                            active: p.includes(e.value),
                            "data-link-location": g || s.trackingLocation.uniteCardsFilter,
                            "data-link-id": `${g||s.trackingLocation.uniteCardsFilter}-filter-${t}`,
                            children: e.title
                        }, `filter-${e}-${t}`)), f.map((e, t) => (0, l.jsx)(n.default, {
                            href: e.href,
                            rounded: !0,
                            outlined: !0,
                            hasArrow: !0,
                            "data-link-location": g || s.trackingLocation.uniteCardsAction,
                            "data-link-id": `${g||s.trackingLocation.uniteCardsAction}-action-${t}`,
                            children: e.title
                        }, `action-${e}-${t}`))]
                    }), (0, l.jsx)("div", {
                        className: y,
                        children: p ? m.filter(e => e.tags?.includes(p)).map(v) : m.map(v)
                    })]
                })
            })
        })
    };
    e.s(["default", 0, o], 577702);
    var u = e.i(803695),
        f = e.i(998569),
        m = e.i(430215),
        h = e.i(783078);
    let g = ({
        theme: e = "light",
        slides: t,
        variant: s = "short",
        blockKey: n,
        title: c
    }) => {
        let [o, g] = (0, a.useState)(0), x = (0, a.useRef)(null), p = (0, m.default)(`(min-width: ${h.default.Large}px)`), b = "gdc2026" === s, v = (0, i.default)({
            dark: "dark" === e
        }), j = (0, a.useCallback)((e, l) => {
            g(l)
        }, []), k = (0, a.useCallback)(() => {
            x.current && x.current.slickPrev()
        }, []), y = (0, a.useCallback)(() => {
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
                uniteCard: r.default,
                cardSubscription: d
            } [e.type];
            return (0, l.jsx)("div", {
                className: b ? "col-span-12 h-full" : "col-span-12 md:col-span-6 lg:col-span-4",
                children: (0, l.jsx)(a, {
                    ...e,
                    variant: b ? "horizontal" : s,
                    blockKey: `${n}-${t}`,
                    titleTag: "p"
                })
            }, `carousel-card-${n}-${t}-${e.title}`)
        }, N = () => {
            let a = p ? 2 : 1,
                r = t.length - a + 1;
            return (0, l.jsx)("div", {
                className: "flex gap-2",
                children: Array.from({
                    length: r
                }).map((t, a) => (0, l.jsx)("button", {
                    className: (0, i.default)("h-2 w-2 rounded-full transition-all", o === a ? "bg-white" : "dark" === e ? "bg-gray-600" : "bg-gray-300"),
                    "aria-label": `Go to slide ${a+1}`,
                    "aria-current": o === a ? "true" : "false"
                }, a))
            })
        }, L = p ? 2 : 1, R = t.length - L + 1, _ = 0 === o, C = o >= R - 1, B = p && t.length > 2 || !p && t.length > 1;
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
                            children: c && (0, l.jsx)("h2", {
                                className: "loco-text-heading-xs text-left",
                                children: c
                            })
                        }), B && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("div", {
                                className: "flex flex-1 items-center justify-center",
                                children: N()
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-1 items-center justify-end gap-2",
                                children: [(0, l.jsx)(f.default, {
                                    direction: "left",
                                    onPress: k,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: _
                                }), (0, l.jsx)(f.default, {
                                    onPress: y,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: C
                                })]
                            })]
                        })]
                    }), c && (0, l.jsx)("h2", {
                        className: "loco-text-heading-xl mb-6 text-left lg:hidden",
                        children: c
                    }), (0, a.createElement)(u.default, {
                        ...w,
                        ref: x,
                        key: `slider-${t.length}`,
                        className: "overflow-hidden"
                    }, t.map(A)), B && (0, l.jsxs)("div", {
                        className: "mt-8 flex flex-col items-center gap-4 lg:hidden",
                        children: [N(), (0, l.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, l.jsx)(f.default, {
                                direction: "left",
                                onPress: k,
                                ariaLabel: "Previous slide",
                                variant: "primary",
                                isDisabled: _
                            }), (0, l.jsx)(f.default, {
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
                                children: [(0, l.jsx)(f.default, {
                                    direction: "left",
                                    onPress: k,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: _
                                }), (0, l.jsx)(f.default, {
                                    onPress: y,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: C
                                })]
                            })]
                        })
                    }), (0, a.createElement)(u.default, {
                        ...w,
                        ref: x,
                        key: `slider-${t.length}`,
                        className: "overflow-visible"
                    }, t.map(A))]
                })
            })
        })
    };
    var x = e.i(869324),
        p = e.i(115219);
    let b = [{
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
        blogItems: f,
        blockKey: m,
        isHidden: h,
        cardsHeading: v
    }) => {
        let {
            mapFormActions: j,
            renderModal: k
        } = (0, p.useFormModal)(d?.map(e => e.action).filter(Boolean)), y = (e, l = 0, t = !1) => {
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
                let t = b[l % 3];
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
                    if ("blog" === t.contentType && f && l < f.length) {
                        let e = f[l];
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
                (0, x.default)({
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
        return n ? (0, l.jsx)(g, {
            theme: "dark" === e ? "dark" : "light",
            variant: "stacked" === s || "column" === s || "short" === s || "gdc2026" === s ? s : "column",
            slides: w,
            blockKey: m,
            title: t || void 0
        }) : (0, l.jsx)(l.Fragment, {
            children: !h && (0, l.jsx)(o, {
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
                blockKey: m,
                cardsHeading: "div" === v || "h2" === v || "h3" === v || "h4" === v ? v : t ? "h3" : "h2"
            })
        })
    }], 913890);
    var v = e.i(722990);
    let j = ({
        children: e
    }) => (0, l.jsx)("div", {
        className: "w-full bg-black",
        children: e
    });
    j.Content = ({
        children: e
    }) => (0, l.jsx)("div", {
        className: "footnote loco-text-body-sm container",
        children: e
    }), e.s(["default", 0, ({
        content: e,
        isHidden: t
    }) => (0, l.jsx)(l.Fragment, {
        children: !t && (0, l.jsx)(j, {
            children: (0, l.jsx)(j.Content, {
                children: (0, l.jsx)(v.PortableText, {
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
    let c = (0, r.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        o = ({
            title: e,
            eyebrow: r,
            description: o,
            image: u,
            video: f,
            visualPlacement: m,
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
                    dark: "background" === m
                }),
                w = (0, t.default)("z-0", {
                    "absolute top-0 left-0 w-full h-full": "background" === m,
                    "aspect-video relative mt-8 -mb-8": "default" === m
                }, "background" === m ? "after:content after:absolute after:z-10 after:inset-0 after:bg-gradient-to-b after:from-10% after:from-black after:to-transparent after:opacity-75" : ""),
                A = (0, t.default)("z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": b && !k && j && f?.src,
                    "": "background" === m
                }),
                N = (0, t.default)("absolute left-0 top-0 [&>video]:object-cover", {
                    "brightness-50 ": "background" === m
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
                        }), o && (0, l.jsx)("p", {
                            className: "loco-text-body-sm mt-2 max-w-xs opacity-70",
                            children: o
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
                        }), j && !k && f?.src && (0, l.jsx)(c, {
                            url: f.src,
                            playing: f.autoplay ?? !0,
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
                        children: (0, l.jsx)(o, {
                            ...e,
                            blockKey: a,
                            cardHeading: i
                        })
                    }, `bento-card-${a}-${t}`))
                })
            })
        };
    var f = e.i(115219);
    e.s(["default", 0, ({
        theme: e,
        blockKey: a,
        isHidden: i,
        cards: r,
        bentoCardsHeading: s
    }) => {
        let {
            renderModal: n
        } = (0, f.useFormModal)(r?.map(e => e.actions?.[0]).filter(Boolean)), d = r?.map(e => {
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
        }) ?? [], c = (0, t.default)({
            dark: "dark" === e
        });
        return (0, l.jsx)(l.Fragment, {
            children: !i && (0, l.jsx)("div", {
                className: c,
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
        c = ({
            videoShowcaseA: e,
            videoShowcaseB: r
        }) => {
            let c = (0, n.useRef)(null),
                [o, u] = (0, n.useState)(!1),
                [f, m] = (0, n.useState)(!1),
                h = (0, a.useInView)(c, {
                    once: !0
                }),
                g = (0, i.useReducedMotion)(),
                x = (0, t.default)("transition-opacity duration-500 object-cover", {
                    "opacity-0": o && !g && h && e?.image?.src
                }),
                p = (0, t.default)("transition-opacity duration-500 object-cover", {
                    "opacity-0": f && !g && h && e?.image?.src
                });
            return (0, l.jsxs)("div", {
                className: "w-full",
                ref: c,
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
                            m(!0)
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
                        children: (0, l.jsx)(c, {
                            ...s
                        })
                    })
                })
            })
        })
    }], 50184)
}, 438270, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(722978),
        i = e.i(526826),
        r = e.i(749583),
        s = e.i(278466),
        n = e.i(407325),
        d = e.i(183062),
        c = e.i(604082),
        o = e.i(783078),
        u = e.i(430215);
    let f = {
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
        m = {
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
        h = {
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
    var g = e.i(766930);
    let x = (0, t.forwardRef)(({
            nav: e,
            action: t,
            isSticky: i,
            indexOfActiveLink: s,
            variant: n
        }, d) => {
            let c = (0, a.default)("alternateNavigation relative flex h-12 w-full bg-gray-900", {
                "justify-center": "centered" === n,
                "justify-stretch": "default" === n
            });
            return (0, l.jsx)("div", {
                className: c,
                ref: d,
                children: (0, l.jsx)("div", {
                    className: (0, a.default)("z-40 h-12 bg-gray-900 md:block", {
                        "fixed top-11 mt-1 bg-transparent": i,
                        "absolute top-0 py-1": !i,
                        "w-full": "default" === n
                    }),
                    children: (0, l.jsx)("div", {
                        className: "container h-full",
                        children: (0, l.jsxs)("div", {
                            className: (0, a.default)("flex h-full items-center justify-between rounded-md px-2 transition-colors duration-150", {
                                "bg-gray-900": !i,
                                "bg-[rgba(0,0,0,0.5)] backdrop-blur-sm": i
                            }),
                            children: [(0, l.jsx)("div", {
                                className: "h-full w-full shrink-1",
                                children: (0, l.jsx)("ul", {
                                    className: "flex h-full w-full items-center",
                                    children: e.map((e, t) => (0, l.jsx)(j, {
                                        label: e.label,
                                        href: e.href,
                                        target: e.target,
                                        active: s === t
                                    }, `alternate-navigation-element-${e.label}-${t}`))
                                })
                            }), t && (0, l.jsx)("div", {
                                className: "shrink-0",
                                children: (0, l.jsx)(r.default, {
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
        p = (0, t.forwardRef)(({
            isSticky: e,
            nav: r,
            indexOfActiveLink: s,
            title: n
        }, d) => {
            let [c, o] = (0, t.useState)(!1);
            return n ? (0, l.jsx)("div", {
                className: "alternateNavigation relative h-12 w-full bg-gray-900",
                ref: d,
                children: (0, l.jsx)("div", {
                    className: (0, a.default)("z-40 mt-1 h-12 w-full bg-gray-900 md:block", {
                        "fixed top-[4.5rem] bg-transparent": e,
                        "absolute top-0": !e
                    }),
                    children: (0, l.jsx)("div", {
                        className: "container",
                        children: (0, l.jsx)("div", {
                            className: (0, a.default)("flex h-full items-center justify-between rounded-md px-3 transition-colors duration-150", {
                                "bg-gray-900": !e,
                                "bg-[rgba(0,0,0,0.65)] backdrop-blur-sm": e
                            }),
                            children: (0, l.jsxs)("div", {
                                className: "w-full",
                                children: [(0, l.jsxs)(i.m.button, {
                                    animate: c ? "open" : "closed",
                                    className: "flex w-full items-center justify-between py-3",
                                    onClick: () => {
                                        o(!c)
                                    },
                                    children: [(0, l.jsx)("span", {
                                        className: "text-sm font-medium text-white",
                                        children: null == s || c ? n : r[s].label
                                    }), (0, l.jsx)(b, {})]
                                }), (0, l.jsx)(i.m.ul, {
                                    className: "overflow-hidden",
                                    initial: "initial",
                                    animate: c ? "open" : "closed",
                                    variants: m,
                                    children: r.map(({
                                        label: e,
                                        href: t,
                                        target: a
                                    }, i) => (0, l.jsx)(v, {
                                        label: e,
                                        href: t,
                                        target: a,
                                        active: s === i,
                                        index: i,
                                        isOpen: c,
                                        onClick: () => {
                                            o(!1)
                                        }
                                    }, `alternate-navigation-element-${e}-${i}`))
                                })]
                            })
                        })
                    })
                })
            }) : null
        }),
        b = () => (0, l.jsxs)(i.m.svg, {
            variants: h,
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
        v = e => {
            let r = (0, t.useRef)(null),
                {
                    linkProps: o
                } = (0, n.useLink)(e, r),
                {
                    focusProps: u
                } = (0, d.useFocusRing)(),
                {
                    label: m,
                    href: h,
                    target: g,
                    locale: x,
                    localePrefix: p,
                    active: b,
                    index: v,
                    isOpen: j
                } = e;
            return (0, l.jsx)("li", {
                className: "border-t border-[#ffffff14]",
                children: (0, l.jsxs)(i.m.div, {
                    custom: v,
                    variants: f,
                    initial: "initial",
                    animate: j ? "open" : "closed",
                    className: "flex w-full items-center justify-between",
                    children: [(0, l.jsx)(s.Link, {
                        ...(0, c.mergeProps)(o, u),
                        ref: r,
                        href: h,
                        target: g ?? "_self",
                        locale: x,
                        className: "py-3 text-sm font-medium text-white",
                        localePrefix: p,
                        children: m
                    }), (0, l.jsx)("div", {
                        className: (0, a.default)("mr-1 h-2 w-2 rounded-full transition-colors duration-300", {
                            "bg-blue": b
                        })
                    })]
                })
            }, `n_${m}`)
        },
        j = e => {
            let i = (0, t.useRef)(null),
                {
                    linkProps: r
                } = (0, n.useLink)(e, i),
                {
                    isFocusVisible: o,
                    focusProps: u
                } = (0, d.useFocusRing)(),
                {
                    label: f,
                    href: m,
                    target: h,
                    locale: g,
                    localePrefix: x,
                    active: p
                } = e,
                b = (0, a.default)("alternateNavigation_item relative h-full flex items-center px-2 !text-[0.75rem] font-medium group outline-hidden text-gray-200 transition-colors duration-150", {
                    "a11y-ring rounded-xs": o
                }, {
                    active: p,
                    "text-white": p,
                    "text-gray-200": !p
                });
            return (0, l.jsx)("li", {
                className: "h-full",
                children: (0, l.jsx)(s.Link, {
                    ...(0, c.mergeProps)(r, u),
                    ref: i,
                    href: m,
                    target: h ?? "_self",
                    locale: g,
                    className: b,
                    localePrefix: x,
                    children: f
                })
            })
        };
    x.displayName = "DesktopNav", p.displayName = "MobileNav", e.s(["default", 0, ({
        variant: e = "default",
        title: a,
        nav: i,
        action: r
    }) => {
        let s = (0, u.default)(`(max-width: ${o.default.Large}px)`),
            n = (0, t.useRef)(null),
            [d, c] = (0, t.useState)(null),
            [f, m] = (0, t.useState)([]),
            [h, b] = (0, t.useState)(!1),
            [v, j] = (0, t.useState)(!1),
            [k, y] = (0, t.useState)(!1),
            w = (0, t.useRef)(0),
            A = () => {
                let e = i.map(e => e.href);
                m([...document.querySelectorAll("a[data-anchor-item]")].filter(l => {
                    let t = l.getAttribute("id");
                    return t && e.find(e => e.includes(t))
                }).map(e => ({
                    top: e.offsetTop + 43
                })))
            },
            N = () => {
                let e;
                n.current && (n.current.offsetTop < window.scrollY ? j(!0) : j(!1)), w.current > window.scrollY && v ? b(!0) : w.current < window.scrollY && b(!1), w.current = window.scrollY, n.current && (n.current.offsetTop > window.innerHeight && !h ? y(!0) : y(!1)), e = null, f.forEach((l, t) => {
                    window.scrollY > l.top && (e = t)
                }), c(e)
            };
        return (0, t.useEffect)(() => {
            let e = document.querySelector("nav");
            e && (e.ariaHidden = String(k))
        }, [k]), (0, t.useLayoutEffect)(() => (A(), window.addEventListener("resize", A), () => {
            window.removeEventListener("resize", A)
        }), []), (0, t.useEffect)(() => (w.current = window.scrollY, window.addEventListener("scroll", N), () => {
            window.removeEventListener("scroll", N)
        }), [h, f, s]), (0, l.jsx)(g.default, {
            children: s ? (0, l.jsx)(p, {
                ref: n,
                nav: i,
                isSticky: v,
                indexOfActiveLink: d,
                title: a
            }) : (0, l.jsx)(x, {
                ref: n,
                nav: i,
                action: r,
                isSticky: v,
                indexOfActiveLink: d,
                variant: e
            })
        })
    }], 438270)
}, 814507, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(722978),
        a = e.i(146911);
    e.s(["default", 0, ({
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
    })], 814507)
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
        richText: c
    }) => {
        let o = (0, a.default)({
            dark: "dark" === e
        });
        return (0, l.jsx)("div", {
            className: o,
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
                    }), (r || c) && (0, l.jsxs)("div", {
                        className: (0, a.default)("loco-text-body-lg [&_a]:text-blue mt-6 text-gray-500", "center" === d || "left" === d ? "max-w-5xl" : "max-w-3xl"),
                        children: [r, c]
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
}, 584266, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(829150),
        a = e.i(433519);
    let i = e.i(438270).default;
    e.s(["default", 0, ({
        title: e,
        navigation: r,
        action: s,
        theme: n,
        isHidden: d
    }) => {
        let {
            state: c
        } = (0, a.default)();
        return (0, l.jsx)(l.Fragment, {
            children: !d && (0, l.jsx)(i, {
                title: e ?? "",
                action: (e => {
                    if (!e?.link) return null;
                    let l = e?.link.linkReference?.href.current;
                    return {
                        label: e?.title ?? "",
                        href: l ? (0, t.default)(l, c, e?.extendLink) : "",
                        target: e?.link.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })(s),
                nav: r.map(e => ({
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
        description: c,
        richText: o,
        actions: u,
        isHidden: f,
        operatingSystem: m
    }) => {
        let h = (0, r.default)(),
            g = (0, t.useMemo)(() => u ? u.map(e => ({
                title: e?.title || "",
                href: e?.link?.linkReference?.href?.current || "",
                target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            })) : [], [u]);
        return m && m !== h ? null : (0, l.jsx)(l.Fragment, {
            children: !f && (0, l.jsx)(i.default, {
                theme: "dark" === e ? "dark" : "light",
                variant: "center" === s ? "center" : "left",
                padding: n ?? !0,
                title: d,
                description: c ?? "",
                richText: (0, l.jsx)(a.PortableText, {
                    value: o
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
    let c = (0, n.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        o = ({
            image: e,
            video: n,
            layout: o,
            forcedAspectRatio: u = "none",
            richCaption: f
        }) => {
            let m = (0, a.useRef)(null),
                [h, g] = (0, a.useState)(!1),
                x = (0, i.useInView)(m),
                p = (0, r.useReducedMotion)(),
                b = (0, t.default)("", {
                    "max-w-lg": "small" === o,
                    "max-w-lg mx-auto": "small-center" === o,
                    "container grid lg:grid-cols-12 lg:gap-2": "offset" === o
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
                ref: m,
                children: (0, l.jsxs)("div", {
                    className: "offset" === o ? "lg:col-start-4 lg:col-end-13 lg:row-start-1" : "",
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
                                switch (o) {
                                    case "small":
                                        return "32rem";
                                    case "offset":
                                        return "1440px";
                                    default:
                                        return "100vw"
                                }
                            })()
                        }), x && !p && n?.src && (0, l.jsx)(c, {
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
                    }), f && (0, l.jsx)("div", {
                        className: "loco-text-body-sm mt-2 text-gray-500",
                        children: (0, l.jsx)(d.default, {
                            children: f
                        })
                    })]
                })
            })
        };
    var u = e.i(186114),
        f = e.i(195051);
    let m = ({
        provider: i,
        image: r,
        video: c,
        layout: o,
        buttonLabel: m,
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
                "max-w-lg": "small" === o,
                "max-w-lg mx-auto": "small-center" === o,
                "container grid lg:grid-cols-12 lg:gap-2": "offset" === o
            }),
            L = (0, t.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": j && c && c.src
            }),
            R = (0, t.default)("relative", {
                "lg:col-start-4 lg:col-end-13 lg:row-start-1": "offset" === o
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
                            label: m,
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
                    }), c?.src && y && (0, l.jsx)(y, {
                        url: c.src,
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
                    }), c?.src?.includes("youtube.com") && (0, l.jsx)(f.default, {
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
        aspectRatio: c,
        buttonLabel: u,
        videoInline: f,
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
                aspectRatio: c ?? "none",
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
                videoInline: f,
                richCaption: (0, l.jsx)(h.PortableText, {
                    value: g
                })
            },
            j = "full";
        "small" === d ? j = "small" : "small-center" === d ? j = "small-center" : "offset" === d && (j = "offset");
        let k = "none";
        ("1:1" === c || "16:9" === c || "4:3" === c) && (k = c);
        let y = (0, t.default)("py-16", {
                "dark bg-black": "dark" === v.theme
            }),
            w = (0, t.default)("container");
        return (0, l.jsx)(l.Fragment, {
            children: !p && (0, l.jsx)("div", {
                className: y,
                children: (0, l.jsx)("div", {
                    className: w,
                    children: "video" === v.type ? (0, l.jsx)(m, {
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
                    }) : (0, l.jsx)(o, {
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
        i = e.i(229696),
        r = e.i(805518),
        s = e.i(570133),
        n = e.i(210310),
        d = e.i(7075),
        c = e.i(775041),
        o = e.i(722978);
    let u = {
        types: {
            imageWithAlt: ({
                value: e
            }) => (0, l.jsx)("img", {
                alt: e?.alt || "",
                src: e?.file?.asset.url,
                className: "my-12"
            }),
            table: ({
                value: e
            }) => (0, l.jsx)(i.default, {
                className: "my-12",
                children: e.tableContent || ""
            }),
            htmlTable: ({
                value: e
            }) => (0, l.jsx)(n.default, {
                table: e,
                hideTitle: !0
            }),
            anchor: ({
                value: e
            }) => (0, l.jsx)(d.Link, {
                id: e.anchorID,
                href: "",
                className: "md:absolute md:-mt-28"
            }),
            codeBlock: ({
                value: e
            }) => e.isHidden ? null : (0, l.jsx)(s.default, {
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
        layout: s,
        spacing: n,
        isHidden: d,
        productCategoryFilter: f
    }) => {
        let [m] = (0, t.useContext)(c.FiltersContext), {
            subcategories: h
        } = m.categories?.find(({
            _id: e
        }) => e === m.selectedCategory) || {}, g = null != m.selectedSubcategory ? (h || []).find(({
            _id: e
        }) => e === m.selectedSubcategory) : null, x = !f || f.categories?.find(e => e._id === m.selectedCategory) != null && (null == g || !f.subcategories || f.subcategories.some(({
            _id: e
        }) => e === m.selectedSubcategory)), p = (0, o.default)("dark:bg-black", {
            "py-8 md:py-12": "default" === n || "small" === n || !n,
            "py-16": "large" === n,
            "bg-black dark": "dark" === i
        }), b = (0, o.default)("", {
            container: "default" === s || !s,
            "container max-w-[60rem] mx-auto": "center" === s,
            "container grid lg:grid-cols-12 lg:gap-2": "offset" === s
        }), v = (0, o.default)("[&>*]:loco-text-body [&>*]:mb-4", {
            "lg:col-start-4 lg:col-end-10 lg:row-start-1": "offset" === s
        });
        return (0, l.jsx)(l.Fragment, {
            children: !d && x && (0, l.jsx)("section", {
                className: p,
                children: (0, l.jsx)("div", {
                    className: b,
                    children: (0, l.jsx)(r.default, {
                        className: v,
                        children: (0, l.jsx)(a.PortableText, {
                            value: e,
                            components: u
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
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3e7b9371-217c-51de-ac81-82edc7ebda57")
    } catch (e) {}
}();
//# debugId=3e7b9371-217c-51de-ac81-82edc7ebda57