(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 274316, e => {
    "use strict";
    var t = e.i(297124),
        a = e.i(480880),
        l = e.i(401861),
        r = e.i(584266),
        i = e.i(817916),
        s = e.i(672721),
        n = e.i(799547),
        o = e.i(58476),
        d = e.i(32627),
        c = e.i(711036),
        u = e.i(854217),
        m = e.i(860193),
        h = e.i(180573),
        f = e.i(570994),
        g = e.i(722978),
        x = e.i(766930);
    let p = (0, h.default)(() => e.A(824429), {
            loadableGenerated: {
                modules: [467761]
            },
            ssr: !1
        }),
        v = ({
            title: e,
            headline: a,
            image: l,
            video: r
        }) => {
            let i = (0, s.useRef)(null),
                h = (0, d.useInView)(i, {
                    once: !0
                }),
                v = (0, c.useReducedMotion)(),
                [b, j] = (0, s.useState)(!1),
                {
                    scrollYProgress: y
                } = (0, u.useScroll)({
                    target: i,
                    offset: ["start start", "end end"]
                }),
                k = (0, m.useTransform)(y, [0, 1], ["25vh", "100vh"]),
                w = (0, m.useTransform)(y, [0, 1], ["25%", "100%"]),
                N = (0, m.useTransform)(y, [0, 1], ["10vh", "0vh"]),
                C = (0, m.useTransform)(y, [0, 1], ["-10vh", "-47.5vh"]),
                L = (0, m.useTransform)(y, [0, .9], [1, 0]),
                S = (0, m.useTransform)(y, [0, .9], [0, 1]),
                T = (0, m.useTransform)(y, [0, 1], ["5vh", "40vh"]),
                M = (0, g.default)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": b && !v && h && r.src
                });
            return (0, t.jsx)(x.default, {
                children: (0, t.jsx)("div", {
                    ref: i,
                    className: "relative h-[200vh]",
                    children: (0, t.jsxs)("div", {
                        className: "sticky top-[0px] flex h-screen flex-col items-center justify-center bg-black",
                        children: [(0, t.jsx)(o.m.div, {
                            style: {
                                top: C,
                                opacity: L
                            },
                            className: "relative",
                            children: (0, t.jsx)(f.default, {
                                title: e,
                                fullScreen: !1,
                                titleSize: "small"
                            })
                        }), (0, t.jsx)(o.m.div, {
                            style: {
                                opacity: S,
                                bottom: T
                            },
                            className: "absolute z-20",
                            children: (0, t.jsx)(f.default, {
                                title: a.title,
                                actions: a.actions,
                                titleSize: "small",
                                fullScreen: !1
                            })
                        }), (0, t.jsxs)(o.m.div, {
                            style: {
                                height: k,
                                width: w,
                                bottom: N
                            },
                            className: "absolute overflow-hidden rounded-[8px]",
                            children: [l && l.src && (0, t.jsx)(n.default, {
                                fill: !0,
                                alt: l.alt,
                                src: l.src,
                                placeholder: "blur",
                                blurDataURL: l.placeholder,
                                className: M
                            }), h && !v && r?.src && (0, t.jsx)(p, {
                                url: r.src,
                                playing: !0,
                                loop: !0,
                                muted: !0,
                                playsinline: !0,
                                width: "100%",
                                height: "100%",
                                onReady: () => {
                                    j(!0)
                                },
                                className: "brightness-50 [&>video]:object-cover",
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
            })
        };
    var b = e.i(776910),
        j = e.i(81636),
        y = e.i(32382),
        k = e.i(913890),
        w = e.i(673300),
        N = e.i(649042),
        C = e.i(4390),
        L = e.i(893171),
        S = e.i(694983),
        T = e.i(692627),
        M = e.i(569074),
        E = e.i(686916),
        R = e.i(5124),
        D = e.i(314669),
        I = e.i(789924),
        A = e.i(457689),
        H = e.i(787213),
        B = e.i(123849),
        F = e.i(583877),
        $ = e.i(277965),
        z = e.i(68274),
        _ = e.i(794189),
        P = e.i(25665),
        q = e.i(883027),
        O = e.i(654816),
        W = e.i(749583),
        U = e.i(805518);
    let V = {
            PST: "America/Los_Angeles",
            EST: "America/New_York",
            UTC: "UTC",
            BST: "Europe/London",
            CET: "Europe/Paris",
            CST: "America/Chicago",
            JST: "Asia/Tokyo"
        },
        G = ({
            title: e,
            description: a,
            action: l,
            startDate: r,
            endDate: i,
            location: n,
            defaultOpen: o,
            startTime: d,
            endTime: c,
            timezone: u,
            startDateLabel: m,
            endDateLabel: h,
            timezoneLabel: f,
            locationLabel: g,
            locale: x,
            heading: p = "h3"
        }) => {
            let [v, b] = (0, s.useState)(o), j = u ? V[u.toUpperCase()] || u : void 0, y = new Intl.DateTimeFormat(x, {
                month: "short",
                day: "numeric",
                timeZone: j
            }).format(new Date(r)), k = new Intl.DateTimeFormat(x, {
                month: "long",
                day: "numeric",
                timeZone: j
            }).format(new Date(r)), w = i ? new Intl.DateTimeFormat(x, {
                month: "long",
                day: "numeric",
                timeZone: j
            }).format(new Date(i)) : null;
            return (0, t.jsxs)("details", {
                open: v,
                onToggle: e => b(e.currentTarget.open),
                className: "rounded-[8px] bg-gray-100",
                children: [(0, t.jsxs)("summary", {
                    className: "flex cursor-pointer items-end p-6",
                    children: [(0, t.jsxs)("div", {
                        className: "flex w-full flex-col md:flex-row md:items-center",
                        children: [(0, t.jsx)("p", {
                            className: "text-small min-w-[150px] shrink-0 basis-[10%] lg:basis-[20%] xl:basis-[25%]",
                            children: y
                        }), (0, t.jsx)(p, {
                            className: "text-body-bold text-gray-800",
                            children: e
                        })]
                    }), (0, t.jsx)("div", {
                        children: (0, t.jsx)("span", {
                            className: "text-body inline-block w-[1.2rem] text-gray-700",
                            children: v ? "-" : "+"
                        })
                    })]
                }), (0, t.jsxs)("div", {
                    className: "mt-4 flex w-full flex-col pr-6 pb-6 pl-6 md:flex-row",
                    children: [(0, t.jsx)("div", {
                        className: "hidden min-w-[150px] shrink-0 basis-[10%] md:block lg:basis-[20%] xl:basis-[25%]"
                    }), (0, t.jsxs)("div", {
                        className: "mr-[7.5%] flex w-full flex-col border-t border-gray-300 pt-5 lg:flex-row",
                        children: [(0, t.jsxs)("div", {
                            className: "flex grow flex-col gap-2",
                            children: [k && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: m
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: d ? `${k}, ${d}` : k
                                })]
                            }), w && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: h
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: c ? `${w}, ${c}` : w
                                })]
                            }), u && (d || c) && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: f
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: u.toUpperCase()
                                })]
                            }), n && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: g
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: n
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "mt-5 mr-[10%] flex flex-col justify-between md:w-[80%] lg:mt-0 lg:w-[35%]",
                            children: [a && (0, t.jsx)("div", {
                                className: "loco-text-body text-black",
                                children: (0, t.jsx)(U.default, {
                                    children: a
                                })
                            }), l && (0, t.jsx)("div", {
                                className: "mt-8",
                                children: (0, t.jsx)(W.default, {
                                    href: l.href,
                                    variant: "primary",
                                    target: l.target,
                                    outlined: !0,
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: l.title
                                })
                            })]
                        })]
                    })]
                })]
            })
        },
        K = ({
            upcomingEvents: e,
            pastEvents: a,
            action: l,
            displayPastEvents: r,
            upcomingEventsLabel: i,
            pastEventsLabel: n,
            startDateLabel: o,
            endDateLabel: d,
            timezoneLabel: c,
            locationLabel: u,
            locale: m = "en-US",
            upcomingEventsHeading: h = "h3"
        }) => {
            let [f, g] = (0, s.useState)("upcoming");
            return (0, t.jsxs)("div", {
                children: [r && a.length > 0 && (0, t.jsxs)("div", {
                    className: "flex w-full justify-center gap-5",
                    children: [(0, t.jsx)(W.default, {
                        rounded: !0,
                        outlined: "upcoming" != f,
                        onPress: () => {
                            g("upcoming")
                        },
                        size: "small",
                        children: i
                    }), (0, t.jsx)(W.default, {
                        rounded: !0,
                        outlined: "past" != f,
                        onPress: () => {
                            g("past")
                        },
                        size: "small",
                        children: n
                    })]
                }), (0, t.jsxs)("div", {
                    className: "mt-16 flex flex-col gap-2",
                    children: ["upcoming" === f && e.map((e, a) => (0, t.jsx)(G, {
                        startDateLabel: o,
                        endDateLabel: d,
                        timezoneLabel: c,
                        locationLabel: u,
                        defaultOpen: 0 === a,
                        locale: m,
                        heading: h,
                        ...e
                    }, a)), "past" === f && a.map((e, a) => (0, t.jsx)(G, {
                        startDateLabel: o,
                        endDateLabel: d,
                        timezoneLabel: c,
                        locationLabel: u,
                        locale: m,
                        heading: h,
                        ...e
                    }, a))]
                }), l && (0, t.jsx)("div", {
                    className: "mt-8 text-center",
                    children: (0, t.jsx)(W.default, {
                        href: l.href,
                        variant: "primary",
                        target: l.target,
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        children: l.title
                    })
                })]
            })
        };
    var Z = e.i(876588),
        J = e.i(742958),
        Y = e.i(50184),
        Q = e.i(725751),
        X = e.i(449758),
        ee = e.i(791154),
        et = e.i(698949),
        ea = e.i(500563);
    let el = {
        agendaBlock: F.default,
        alert: l.default,
        alternateNavigation: r.default,
        alternateNavigationAnchor: i.default,
        animatedHeadliner: ({
            title: e,
            subtitle: a,
            image: l,
            theme: r,
            description: i,
            brandfolder: s,
            actions: n,
            isHidden: o
        }) => (0, t.jsx)(t.Fragment, {
            children: !o && (0, t.jsx)(v, {
                title: e || "",
                image: {
                    src: l?.file?.asset.url || "",
                    alt: l?.alt || "",
                    placeholder: l?.file?.asset?.metadata?.lqip || ""
                },
                video: {
                    src: s?.muxHLSURL || ""
                },
                headline: {
                    actions: n ? n.map(e => ({
                        title: e.title || "",
                        href: e.link?.linkReference?.href.current || "",
                        target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    })) : void 0,
                    description: i || void 0,
                    title: a || "",
                    theme: "dark" === r ? "dark" : "light"
                }
            })
        }),
        announcementBanner: b.default,
        benefits: j.default,
        uniteCards: k.default,
        carousel: R.default,
        callout: y.default,
        fullScreenVisual: w.FullScreenVisualBlockSuspense,
        fullWidthBlock: N.default,
        faqs: S.default,
        headliner: C.default,
        hero: L.default,
        htmlInfoTable: Q.default,
        keyFigures: z.default,
        quote: T.default,
        statement: M.default,
        footnote: E.default,
        logosBank: D.default,
        featuresList: I.default,
        title: A.default,
        testimonialsBlock: H.default,
        animatedFeaturesList: $.default,
        mangoDeluxeAnnouncementBanner: ea.default,
        media: _.default,
        richText: P.default,
        events: ({
            upcomingEvents: e,
            pastEvents: a,
            displayPastEvents: l,
            action: r,
            upcomingEventsLabel: i,
            pastEventsLabel: s,
            startDateLabel: n,
            endDateLabel: o,
            timezoneLabel: d,
            locationLabel: c,
            upcomingEventsHeading: u,
            isHidden: m
        }) => {
            let h = (0, Z.useLocale)(),
                f = e => ({
                    title: e.name ?? "",
                    description: (0, t.jsx)(O.PortableText, {
                        value: e.description
                    }),
                    startDate: e.startDate ?? "",
                    endDate: e.endDate ?? "",
                    timezone: e.timezone ?? "",
                    location: e.location ?? "",
                    startTime: e.startTime ?? "",
                    endTime: e.endTime ?? "",
                    action: (e => {
                        if (!e || !e.length) return;
                        let t = e[0];
                        return {
                            title: t?.label ?? "",
                            href: t?.fieldLink?.linkReference?.href.current ?? "",
                            target: t?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                        }
                    })(e.actions)
                });
            return (0, t.jsx)(t.Fragment, {
                children: !m && (0, t.jsx)("div", {
                    className: "container py-12",
                    children: (0, t.jsx)(K, {
                        upcomingEventsHeading: "h2" === u || "h3" === u || "h4" === u ? u : "h3",
                        action: (r ? {
                            title: r.title ?? "",
                            href: r.link?.linkReference?.href.current ?? "",
                            target: r.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                        } : null) || void 0,
                        upcomingEvents: e ? e.map(f) : [],
                        pastEvents: a ? a.map(f) : [],
                        displayPastEvents: l || !1,
                        upcomingEventsLabel: i ?? "",
                        pastEventsLabel: s ?? "",
                        startDateLabel: n ?? "",
                        endDateLabel: o ?? "",
                        timezoneLabel: d ?? "",
                        locationLabel: c ?? "",
                        locale: h
                    })
                })
            })
        },
        iframeBlock: q.default,
        planCards: B.default,
        bentoCards: J.default,
        videosShowcase: Y.default,
        cards: X.default,
        fullPageScroller: ee.default,
        socialProof: et.default
    };
    e.s(["default", 0, ({
        blocks: e
    }) => (0, t.jsx)(a.default, {
        blocks: e,
        blockMap: el
    })], 274316)
}, 694983, e => {
    "use strict";
    var t = e.i(297124),
        a = e.i(654816),
        l = e.i(722978),
        r = e.i(691156),
        i = e.i(131564);
    let s = ({
        title: e,
        faqs: a,
        blockKey: s,
        theme: n
    }) => {
        let o = (0, l.default)("pb-28", {
            "dark bg-black": "dark" === n
        });
        return (0, t.jsxs)("section", {
            className: o,
            children: [(0, t.jsx)(i.default, {
                title: e
            }), (0, t.jsx)("div", {
                className: "container grid gap-1",
                children: a?.map((a, l) => (0, t.jsx)(r.default, {
                    title: a.question,
                    blockKey: `${s}-${e}-${l}`,
                    children: a.answer
                }, `faq-${e}-${l}`))
            })]
        })
    };
    e.s(["default", 0, ({
        title: e,
        faqs: l,
        blockKey: r,
        isHidden: i,
        theme: n
    }) => (0, t.jsx)(t.Fragment, {
        children: !i && (0, t.jsx)(s, {
            theme: "dark" === n ? "dark" : "light",
            title: e,
            faqs: l?.map(e => ({
                question: e.question,
                answer: (0, t.jsx)(a.PortableText, {
                    value: e.answer
                })
            })),
            blockKey: r
        })
    })], 694983)
}, 690019, e => {
    "use strict";
    var t = e.i(297124),
        a = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        className: l,
        style: r,
        theme: i = "light",
        padding: s,
        defaultBlockPadding: n
    }) => {
        let o = (0, a.default)({
                dark: "dark" === i
            }),
            d = (0, a.default)(l, s?.top ? ({
                none: "pt-0",
                xs: "md:pt-8 pt-6",
                sm: "md:pt-20 pt-[2.75rem]",
                md: "md:pt-[9.25rem] pt-16",
                lg: "md:pt-[11.25rem] pt-[6rem]"
            })[s.top] : n.top, s?.bottom ? ({
                none: "pb-0",
                xs: "md:pb-8 pb-6",
                sm: "md:pb-20 pb-[2.75rem]",
                md: "md:pb-[9.25rem] pb-16",
                lg: "md:pb-[11.25rem] pb-[6rem]"
            })[s.bottom] : n.bottom);
        return (0, t.jsx)("section", {
            className: o,
            children: (0, t.jsx)("div", {
                className: d,
                style: r,
                children: e
            })
        })
    }])
}, 865610, e => {
    "use strict";
    let t = e.i(690019).default;
    e.s(["default", 0, t])
}, 791154, 698949, 500563, e => {
    "use strict";
    var t = e.i(297124),
        a = e.i(654816),
        l = e.i(672721),
        r = e.i(766930),
        i = e.i(722978),
        s = e.i(180573),
        n = e.i(799547),
        o = e.i(58476),
        d = e.i(854217),
        c = e.i(860193),
        u = e.i(529363),
        m = e.i(32627),
        h = e.i(711036),
        f = e.i(749583),
        g = e.i(2062),
        x = e.i(805518),
        p = e.i(14452);
    let v = (0, s.default)(() => e.A(824429), {
            loadableGenerated: {
                modules: [467761]
            },
            ssr: !1
        }),
        b = ({
            children: e
        }) => {
            let a = l.default.Children.toArray(e);
            return (0, t.jsx)(r.default, {
                children: (0, t.jsx)("section", {
                    className: "dark relative",
                    style: {
                        height: `${100*e.length}vh`
                    },
                    children: a.map((e, t) => l.default.cloneElement(e, {
                        index: t,
                        total: a.length
                    }))
                })
            })
        };
    b.Block = ({
        title: e,
        description: a,
        actions: r,
        image: s,
        video: b,
        index: j = 1,
        total: y = 1
    }) => {
        var k;
        let [w, N] = (0, l.useState)(!1), [C, L] = (0, l.useState)(!1), S = (0, l.useRef)(null), T = (0, m.useInView)(S, {
            once: !0
        }), M = (0, h.useReducedMotion)(), E = 1 / y * j, R = .75 * E, {
            scrollYProgress: D
        } = (0, d.useScroll)({
            target: S
        }), I = (0, c.useTransform)(D, [E, j !== y - 1 ? E + R : 1], [0, 1], {
            ease: u.easeInOut
        }), A = (0, c.useTransform)(D, [E, j !== y - 1 ? E + R : 1], [100, 0], {
            ease: u.easeInOut
        }), H = -((S.current?.offsetHeight || 0) / y) * j;
        k = e => {
            N(e >= E)
        }, (0, l.useInsertionEffect)(() => D.on("change", k), [D, "change", k]);
        let B = (0, i.default)("object-cover transition-opacity duration-1000", {
                "opacity-0": C
            }),
            F = (0, t.jsx)("div", {
                className: "hidden rounded-xl bg-black/70 px-2 py-3 md:block",
                children: Array.from(Array(y), (e, a) => {
                    let l = (0, i.default)("mb-3 h-3 w-3 rounded-full last:mb-0", {
                        "bg-white": j === a,
                        "bg-gray-800": j !== a
                    });
                    return (0, t.jsx)("div", {
                        className: l
                    }, `scroller-progress-${a}`)
                })
            }),
            $ = (0, i.default)("absolute h-full w-full", {
                "pointer-events-none": !w
            });
        return (0, t.jsx)(o.m.div, {
            ref: S,
            className: $,
            style: {
                opacity: E ? I : 1,
                scrollMarginTop: H
            },
            children: (0, t.jsxs)("div", {
                className: "sticky top-0 h-screen w-full",
                children: [T && !M && (0, t.jsx)(v, {
                    url: b.src,
                    width: "100%",
                    height: "100%",
                    playing: !0,
                    muted: !0,
                    loop: !0,
                    playsinline: !0,
                    onReady: () => {
                        L(!0)
                    },
                    className: "absolute [&>video]:object-cover",
                    config: {
                        hlsOptions: {
                            maxMaxBufferLength: 1
                        }
                    }
                }), (0, t.jsx)(n.default, {
                    fill: !0,
                    src: s.src,
                    alt: "",
                    className: B,
                    placeholder: "blur",
                    blurDataURL: s.placeholder
                }), (0, t.jsx)("div", {
                    className: "absolute bottom-0 h-full w-full bg-gradient-to-t from-black"
                }), y > 1 && (0, t.jsx)("div", {
                    className: "absolute right-0 mr-16 flex h-full flex-col justify-center",
                    children: F
                }), (0, t.jsx)("div", {
                    className: "relative grid h-full grid-cols-12",
                    children: (0, t.jsx)("div", {
                        className: "col-span-10 col-start-2 mb-28 flex flex-col-reverse md:col-span-4 md:col-start-2",
                        children: (0, t.jsxs)(o.m.div, {
                            style: {
                                y: E ? A : 0
                            },
                            className: "flex flex-col items-center text-center md:items-start md:text-left",
                            children: [(0, t.jsx)(p.default, {
                                children: e
                            }), (0, t.jsx)(x.default, {
                                className: "mb-12",
                                children: a
                            }), (0, t.jsx)(g.default, {
                                children: r.map((e, a) => (0, t.jsx)(f.default, {
                                    href: e.href,
                                    rounded: !0,
                                    outlined: 0 === a,
                                    variant: 0 === a ? "primary" : "secondary",
                                    hasArrow: !0,
                                    onFocus: () => {
                                        S.current?.scrollIntoView({
                                            block: "start"
                                        })
                                    },
                                    children: e.title
                                }, `action-${e.title}-${a}`))
                            })]
                        })
                    })
                })]
            })
        })
    }, e.s(["default", 0, ({
        fullPageBlocks: e,
        isHidden: l
    }) => (0, t.jsx)(b, {
        children: e.map(({
            title: r,
            brandfolder: i,
            image: s,
            description: n,
            actions: o
        }, d) => {
            let c = {
                    src: i?.muxHLSURL || ""
                },
                u = {
                    src: s?.asset.url || "",
                    placeholder: s?.asset.metadata?.blurHash || ""
                };
            return (0, t.jsx)(t.Fragment, {
                children: !l && (0, t.jsx)(b.Block, {
                    index: d,
                    total: e.length,
                    title: r || "",
                    description: (0, t.jsx)(a.PortableText, {
                        value: n
                    }),
                    actions: o?.map(e => ({
                        title: e.text || "",
                        href: e.link?.href.current || ""
                    })) || [],
                    image: u,
                    video: c
                }, `full-page-scroller-block-${r}-${d}`)
            })
        })
    })], 791154);
    let j = ({
        children: e,
        className: a = ""
    }) => {
        let l = (0, i.clsx)("py-4 px-8 lg:flex lg:justify-between gap-4 col-start-2 col-end-12", a);
        return (0, t.jsx)("section", {
            className: "grid grid-cols-12 bg-gray-900 pb-32",
            children: (0, t.jsx)("div", {
                className: l,
                children: e
            })
        })
    };
    j.Item = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "loco-text-body-md mb-6 flex flex-col items-center text-center text-white last:mb-0 md:text-left lg:m-0 lg:flex-row lg:gap-4",
        children: e
    }), e.s(["default", 0, ({
        items: e,
        isHidden: l
    }) => (0, t.jsx)(t.Fragment, {
        children: !l && (0, t.jsx)(j, {
            children: e?.map((e, l) => (0, t.jsxs)(j.Item, {
                children: [e.image?.file?.asset.url && (0, t.jsx)(n.default, {
                    src: e.image?.file?.asset.url,
                    alt: e.image?.alt ?? "",
                    width: 24,
                    height: 24
                }), (0, t.jsx)(x.default, {
                    children: (0, t.jsx)(a.PortableText, {
                        value: e.text
                    })
                })]
            }, `social-proof-item-${l}`))
        })
    })], 698949);
    var y = e.i(78070),
        k = e.i(865610);

    function w(e) {
        var t = e.toString(16);
        return 1 === t.length ? "0" + t : t
    }

    function N(e) {
        return "#" + e.map(w).join("")
    }

    function C(e, t, a) {
        for (var l = 0; l < a.length; l++)
            if (function(e, t, a) {
                    var l, r, i, s, n, o;
                    switch (a.length) {
                        case 3:
                            if (l = e, r = t, i = a, 255 !== l[r + 3] || l[r] === i[0] && l[r + 1] === i[1] && l[r + 2] === i[2]) return !0;
                            break;
                        case 4:
                            if (s = e, n = t, o = a, s[n + 3] && o[3] ? s[n] === o[0] && s[n + 1] === o[1] && s[n + 2] === o[2] && s[n + 3] === o[3] : s[n + 3] === o[3]) return !0;
                            break;
                        case 5:
                            if (function(e, t, a) {
                                    var l = a[0],
                                        r = a[1],
                                        i = a[2],
                                        s = a[3],
                                        n = a[4],
                                        o = e[t + 3],
                                        d = L(o, s, n);
                                    return s ? !!(!o && d || L(e[t], l, n) && L(e[t + 1], r, n) && L(e[t + 2], i, n) && d) : d
                                }(e, t, a)) return !0;
                            break;
                        default:
                            return !1
                    }
                }(e, t, a[l])) return !0;
        return !1
    }

    function L(e, t, a) {
        return e >= t - a && e <= t + a
    }

    function S(e, t, a) {
        for (var l = {}, r = a.dominantDivider || 24, i = a.ignoredColor, s = a.step, n = [0, 0, 0, 0, 0], o = 0; o < t; o += s) {
            var d = e[o],
                c = e[o + 1],
                u = e[o + 2],
                m = e[o + 3];
            if (!(i && C(e, o, i))) {
                var h = Math.round(d / r) + "," + Math.round(c / r) + "," + Math.round(u / r);
                l[h] ? l[h] = [l[h][0] + d * m, l[h][1] + c * m, l[h][2] + u * m, l[h][3] + m, l[h][4] + 1] : l[h] = [d * m, c * m, u * m, m, 1], n[4] < l[h][4] && (n = l[h])
            }
        }
        var f = n[0],
            g = n[1],
            x = n[2],
            p = n[3],
            v = n[4];
        return p ? [Math.round(f / p), Math.round(g / p), Math.round(x / p), Math.round(p / v)] : a.defaultColor
    }

    function T(e, t, a) {
        for (var l = 0, r = 0, i = 0, s = 0, n = 0, o = a.ignoredColor, d = a.step, c = 0; c < t; c += d) {
            var u = e[c + 3],
                m = e[c] * u,
                h = e[c + 1] * u,
                f = e[c + 2] * u;
            !(o && C(e, c, o)) && (l += m, r += h, i += f, s += u, n++)
        }
        return s ? [Math.round(l / s), Math.round(r / s), Math.round(i / s), Math.round(s / n)] : a.defaultColor
    }

    function M(e, t, a) {
        for (var l = 0, r = 0, i = 0, s = 0, n = 0, o = a.ignoredColor, d = a.step, c = 0; c < t; c += d) {
            var u = e[c],
                m = e[c + 1],
                h = e[c + 2],
                f = e[c + 3];
            !(o && C(e, c, o)) && (l += u * u * f, r += m * m * f, i += h * h * f, s += f, n++)
        }
        return s ? [Math.round(Math.sqrt(l / s)), Math.round(Math.sqrt(r / s)), Math.round(Math.sqrt(i / s)), Math.round(s / n)] : a.defaultColor
    }

    function E(e) {
        return R(e, "defaultColor", [0, 0, 0, 0])
    }

    function R(e, t, a) {
        return void 0 === e[t] ? a : e[t]
    }

    function D(e) {
        var t, a, l;
        return (t = e, "u" > typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) ? "canvas" : (a = e, A && a instanceof OffscreenCanvas) ? "offscreencanvas" : H(e) ? "videoframe" : (l = e, "u" > typeof ImageBitmap && l instanceof ImageBitmap) ? "imagebitmap" : e.src
    }

    function I(e) {
        return "u" > typeof HTMLImageElement && e instanceof HTMLImageElement
    }
    var A = "u" > typeof OffscreenCanvas;

    function H(e) {
        return "u" > typeof VideoFrame && e instanceof VideoFrame
    }
    var B = "u" < typeof window;

    function F(e) {
        return Error("FastAverageColor: " + e)
    }

    function $(e, t) {
        t || console.error(e)
    }
    var z = function() {
        function e() {
            this.canvas = null, this.ctx = null
        }
        return e.prototype.getColorAsync = function(e, t) {
            if (!e) return Promise.reject(F("call .getColorAsync() without resource"));
            if ("string" == typeof e) {
                if ("u" < typeof Image) return Promise.reject(F("resource as string is not supported in this environment"));
                var a = new Image;
                return a.crossOrigin = t && t.crossOrigin || "", a.src = e, this.bindImageEvents(a, t)
            }
            if (I(e) && !e.complete) return this.bindImageEvents(e, t);
            var l = this.getColor(e, t);
            return l.error ? Promise.reject(l.error) : Promise.resolve(l)
        }, e.prototype.getColor = function(e, t) {
            var a, l, r, i, s, n, o, d, c = E(t = t || {});
            if (!e) {
                var u = F("call .getColor() without resource");
                return $(u, t.silent), this.prepareResult(c, u)
            }
            var m = (a = function(e) {
                if (I(e)) {
                    var t, a = e.naturalWidth,
                        l = e.naturalHeight;
                    return e.naturalWidth || -1 === e.src.search(/\.svg(\?|$)/i) || (a = l = 100), {
                        width: a,
                        height: l
                    }
                }
                return (t = e, "u" > typeof HTMLVideoElement && t instanceof HTMLVideoElement) ? {
                    width: e.videoWidth,
                    height: e.videoHeight
                } : H(e) ? {
                    width: e.codedWidth,
                    height: e.codedHeight
                } : {
                    width: e.width,
                    height: e.height
                }
            }(e), r = R(l = t, "left", 0), i = R(l, "top", 0), s = R(l, "width", a.width), n = R(l, "height", a.height), o = s, d = n, "precision" === l.mode || (s > n ? d = Math.round((o = 100) / (s / n)) : o = Math.round((d = 100) / (n / s)), (o > s || d > n || o < 10 || d < 10) && (o = s, d = n)), {
                srcLeft: r,
                srcTop: i,
                srcWidth: s,
                srcHeight: n,
                destWidth: o,
                destHeight: d
            });
            if (!m.srcWidth || !m.srcHeight || !m.destWidth || !m.destHeight) {
                var u = F('incorrect sizes for resource "'.concat(D(e), '"'));
                return $(u, t.silent), this.prepareResult(c, u)
            }
            if (!this.canvas && (this.canvas = B ? A ? new OffscreenCanvas(1, 1) : null : document.createElement("canvas"), !this.canvas)) {
                var u = F("OffscreenCanvas is not supported in this browser");
                return $(u, t.silent), this.prepareResult(c, u)
            }
            if (!this.ctx) {
                if (this.ctx = this.canvas.getContext("2d", {
                        willReadFrequently: !0
                    }), !this.ctx) {
                    var u = F("Canvas Context 2D is not supported in this browser");
                    return $(u, t.silent), this.prepareResult(c)
                }
                this.ctx.imageSmoothingEnabled = !1
            }
            this.canvas.width = m.destWidth, this.canvas.height = m.destHeight;
            try {
                this.ctx.clearRect(0, 0, m.destWidth, m.destHeight), this.ctx.drawImage(e, m.srcLeft, m.srcTop, m.srcWidth, m.srcHeight, 0, 0, m.destWidth, m.destHeight);
                var h = this.ctx.getImageData(0, 0, m.destWidth, m.destHeight).data;
                return this.prepareResult(this.getColorFromArray4(h, t))
            } catch (a) {
                var u = F("security error (CORS) for resource ".concat(D(e), ".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"));
                return $(u, t.silent), t.silent || console.error(a), this.prepareResult(c, u)
            }
        }, e.prototype.getColorFromArray4 = function(e, t) {
            t = t || {};
            var a, l, r = e.length,
                i = E(t);
            if (r < 4) return i;
            var s = 4 * (t.step || 1);
            switch (t.algorithm || "sqrt") {
                case "simple":
                    a = T;
                    break;
                case "sqrt":
                    a = M;
                    break;
                case "dominant":
                    a = S;
                    break;
                default:
                    throw F("".concat(t.algorithm, " is unknown algorithm"))
            }
            return a(e, r - r % 4, {
                defaultColor: i,
                ignoredColor: (l = t.ignoredColor) ? Array.isArray(l[0]) ? l : [l] : [],
                step: s,
                dominantDivider: t.dominantDivider
            })
        }, e.prototype.prepareResult = function(e, t) {
            var a = e.slice(0, 3),
                l = [e[0], e[1], e[2], e[3] / 255],
                r = (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
            return {
                value: [e[0], e[1], e[2], e[3]],
                rgb: "rgb(" + a.join(",") + ")",
                rgba: "rgba(" + l.join(",") + ")",
                hex: N(a),
                hexa: N(e),
                isDark: r,
                isLight: !r,
                error: t
            }
        }, e.prototype.destroy = function() {
            this.canvas && (this.canvas.width = 1, this.canvas.height = 1, this.canvas = null), this.ctx = null
        }, e.prototype.bindImageEvents = function(e, t) {
            var a = this;
            return new Promise(function(l, r) {
                var i = function() {
                        o();
                        var i = a.getColor(e, t);
                        i.error ? r(i.error) : l(i)
                    },
                    s = function() {
                        o(), r(F('Error loading image "'.concat(e.src, '"')))
                    },
                    n = function() {
                        o(), r(F('Image "'.concat(e.src, '" loading aborted')))
                    },
                    o = function() {
                        e.removeEventListener("load", i), e.removeEventListener("error", s), e.removeEventListener("abort", n)
                    };
                e.addEventListener("load", i), e.addEventListener("error", s), e.addEventListener("abort", n)
            })
        }, e
    }();
    let _ = e => [parseInt(e.slice(1, 3), 16), parseInt(e.slice(3, 5), 16), parseInt(e.slice(5, 7), 16)],
        P = (e, t) => {
            let a, l, r, [i, s, n] = _(e),
                o = e => Math.max(0, Math.min(255, Math.round(e + e * t / 100)));
            return a = o(i), l = o(s), r = o(n), `#${a.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}`
        },
        q = async e => {
            let t = new z;
            try {
                let a = (await t.getColorAsync(e, {
                        ignoredColor: [
                            [255, 255, 255, 255],
                            [0, 0, 0, 255]
                        ]
                    })).hex,
                    l = (e => {
                        let [t, a, l] = _(e);
                        return (.299 * t + .587 * a + .114 * l) / 255 < .6
                    })(a),
                    r = P(a, -15),
                    i = P(a, -8);
                return {
                    isDark: l,
                    mainColor: a,
                    dark: r,
                    light: i
                }
            } finally {
                t.destroy()
            }
        };
    var O = e.i(825610);
    let W = (0, s.default)(() => e.A(824429), {
            loadableGenerated: {
                modules: [467761]
            },
            ssr: !1
        }),
        U = e => {
            let [a, r] = (0, l.useState)(!1), s = (0, i.default)("overflow-hidden md:hidden transition-all duration-500 ease-in-out", {
                "max-h-0": !a,
                "max-h-96": a
            });
            return (0, t.jsxs)("div", {
                className: "col-span-4 mt-7 flex flex-col gap-7 md:col-span-7 md:mt-0 md:grid lg:grid-cols-7",
                children: [(0, t.jsxs)("div", {
                    className: "col-span-7 grid grid-cols-7 gap-x-5",
                    children: [(0, t.jsx)("p", {
                        className: "mango-text-heading-md col-span-5",
                        children: e.title
                    }), (0, t.jsx)(y.default, {
                        className: "col-span-1 col-start-7 hidden justify-self-end md:block",
                        variant: "secondary",
                        icon: "x",
                        size: "lg",
                        onClick: e.onClose
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col self-end md:col-span-7 md:grid md:grid-cols-7 md:gap-0 md:gap-x-5",
                    children: [e.description && (0, t.jsx)("div", {
                        className: "hidden md:col-span-3 md:flex",
                        children: (0, t.jsx)("p", {
                            className: "mango-text-body-base pb-8 md:self-end md:pb-0",
                            children: e.description?.value
                        })
                    }), (0, t.jsxs)("div", {
                        className: "md:col-span-4 md:col-start-4 md:flex md:flex-col md:justify-between lg:col-span-3 lg:col-start-5",
                        children: [e.details && e.details.length > 0 && (0, t.jsx)("ul", {
                            className: "flex flex-col gap-2 pb-8",
                            children: e.details.map(e => (0, t.jsxs)("li", {
                                className: "flex gap-5",
                                children: [(0, t.jsx)("p", {
                                    className: "mango-text-input w-[100px]",
                                    children: e.label
                                }), (0, t.jsx)("p", {
                                    className: "mango-text-input text-gray-600 dark:text-gray-300",
                                    children: e.value
                                })]
                            }, e.label))
                        }), e.description && (0, t.jsx)("div", {
                            className: s,
                            children: (0, t.jsx)("p", {
                                className: "mango-text-body-base pb-8 md:col-span-3",
                                children: e.description?.value
                            })
                        }), e.description && e.action && (0, t.jsxs)("div", {
                            className: "flex gap-2",
                            children: [e.description?.readMoreLabel && (0, t.jsx)(y.default, {
                                className: "md:hidden",
                                onClick: () => r(!a),
                                variant: "secondary",
                                icon: a ? "caret-up" : "caret-down",
                                children: e.description?.readMoreLabel
                            }), (0, t.jsx)("div", {
                                children: (0, t.jsx)(y.default, {
                                    href: e.action?.href,
                                    target: e.action?.target,
                                    variant: "primary",
                                    icon: "arrow-right",
                                    "data-link-location": O.trackingLocation.deluxeAnnouncementBannerAction,
                                    "data-link-id": "deluxe-banner-action",
                                    children: e.action?.label
                                })
                            })]
                        })]
                    })]
                })]
            })
        },
        V = ({
            image: e,
            video: a
        }) => {
            let [r, i] = (0, l.useState)(!1), [s, o] = (0, l.useState)(!1);
            return (0, t.jsxs)("div", {
                className: "relative aspect-[16/10] min-h-full w-full overflow-hidden rounded-lg",
                children: [(0, t.jsx)(n.default, {
                    src: e.src,
                    alt: e.alt,
                    placeholder: "blur",
                    blurDataURL: e.placeholder,
                    fill: !0,
                    sizes: "(max-width: 768px) 75vw, (max-width: 1024px) 42vw, 33vw",
                    className: "object-cover transition-opacity duration-500",
                    style: {
                        opacity: a && r ? 0 : 1
                    }
                }), a && (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(W, {
                        className: "[&>video]:object-cover",
                        url: a.src,
                        playing: s,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        onReady: () => {
                            i(!0)
                        },
                        config: {
                            hlsOptions: {
                                maxMaxBufferLength: 1,
                                qualityStartLevel: 1
                            }
                        }
                    }), r && (0, t.jsx)("div", {
                        className: "absolute right-3 bottom-3",
                        children: (0, t.jsx)(y.default, {
                            onClick: () => {
                                o(!s)
                            },
                            icon: s ? "pause" : "play",
                            iconWeight: "fill",
                            variant: "secondary",
                            size: "xs"
                        })
                    })]
                })]
            })
        },
        G = e => {
            let [a, r] = (0, l.useState)(e.animate ?? !1), {
                isDark: s,
                dark: n,
                light: o
            } = (e => {
                let [t, a] = (0, l.useState)(!1), [r, i] = (0, l.useState)(null), [s, n] = (0, l.useState)(null), [o, d] = (0, l.useState)(null), [c, u] = (0, l.useState)(null), [m, h] = (0, l.useState)(null), f = (0, l.useCallback)(() => {
                    n(null), d(null), u(null), h(null)
                }, []), g = (0, l.useCallback)(async e => {
                    if (!e) return void f();
                    a(!0), i(null);
                    try {
                        let t = await q(e);
                        n(t.isDark), d(t.mainColor), u(t.dark), h(t.light), a(!1)
                    } catch (e) {
                        i(e instanceof Error ? e.message : "Failed to extract color"), f(), a(!1)
                    }
                }, [f]);
                return (0, l.useEffect)(() => {
                    e ? g(e) : (i(null), f(), a(!1))
                }, [e, g, f]), {
                    isLoading: t,
                    error: r,
                    isDark: s,
                    mainColor: o,
                    dark: c,
                    light: m
                }
            })(e.image.placeholder);
            (0, l.useEffect)(() => {
                if (e.animate) {
                    let e = setTimeout(() => {
                        r(!1)
                    }, 1e3);
                    return () => clearTimeout(e)
                }
            }, [e.animate]);
            let d = (0, i.default)("relative grid grid-cols-4 gap-x-2 md:gap-x-5 md:grid-cols-12 p-4 md:p-6 z-10"),
                c = e.hasBackgroundGradient && n && o ? {
                    background: `linear-gradient(94deg, ${n} 7%, ${o} 105.47%)`
                } : void 0,
                u = e.hasBackgroundGradient && null !== s ? s ? "dark" : "light" : e.theme ?? "light";
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: (0, i.default)("fixed inset-0 z-40 bg-black/30", e.animate && "transition-opacity duration-300", e.animate && a ? "opacity-0" : "opacity-100")
                }), (0, t.jsx)(k.default, {
                    className: (0, i.default)("fixed left-0 z-40 w-full bg-white dark:bg-black", e.animate && "transition-transform duration-300 ease-out", e.animate && a ? "-translate-y-[calc(100%+5rem)]" : "translate-y-0"),
                    style: c,
                    theme: u,
                    defaultBlockPadding: {
                        top: "pt-0",
                        bottom: "pb-0"
                    },
                    children: (0, t.jsx)("div", {
                        className: "mango-container",
                        children: (0, t.jsxs)("div", {
                            className: d,
                            children: [(0, t.jsx)("div", {
                                className: "col-span-3 md:col-span-5",
                                children: (0, t.jsx)(V, {
                                    image: e.image,
                                    video: e.video
                                })
                            }), (0, t.jsx)(U, {
                                ...e
                            }), (0, t.jsx)("div", {
                                className: "absolute bottom-[-4.25rem] left-[50%] translate-x-[-50%] md:hidden",
                                children: (0, t.jsx)(y.default, {
                                    variant: "secondary",
                                    icon: "x",
                                    size: "lg",
                                    onClick: e.onClose
                                })
                            })]
                        })
                    })
                })]
            })
        };
    var K = e.i(779712);
    e.s(["default", 0, ({
        title: e,
        description: a,
        action: r,
        settings: i,
        hasBackgroundGradient: s,
        image: n,
        video: o,
        details: d
    }) => {
        let [c, u] = (0, l.useState)(!1), m = `banner_dismissed_until_${e.replace(/\s+/g,"_").toLowerCase()}`;
        return ((0, l.useEffect)(() => {
            let e = (() => {
                try {
                    let e = localStorage.getItem(m);
                    return e ? Number(e) : null
                } catch {
                    return null
                }
            })();
            e && e > Date.now() || u(!0)
        }, [m]), i?.isHidden) ? null : (0, t.jsx)(t.Fragment, {
            children: c && (0, t.jsx)(G, {
                animate: !0,
                hasBackgroundGradient: s || !1,
                title: e,
                theme: i?.theme === "dark" ? "dark" : "light",
                description: a ?? void 0,
                action: r ? {
                    href: r.fieldLink?.linkReference?.href?.current ?? "",
                    target: r.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self",
                    label: r.text ?? ""
                } : void 0,
                image: {
                    src: n ? (0, K.urlForImage)(n)?.fit("crop").width(1200).height(750).dpr(2).url() ?? "" : "",
                    alt: n?.alt ?? "",
                    placeholder: n?.asset?.metadata?.lqip ?? ""
                },
                video: o ? {
                    src: o.url ?? ""
                } : void 0,
                details: d ?? void 0,
                onClose: () => {
                    u(!1), ((e = 7) => {
                        let t = Date.now() + 24 * e * 36e5;
                        localStorage.setItem(m, String(t))
                    })(7)
                }
            })
        })
    }], 500563)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "364a3ac9-8679-5576-a3eb-a260ea02c1bd")
    } catch (e) {}
}();
//# debugId=364a3ac9-8679-5576-a3eb-a260ea02c1bd