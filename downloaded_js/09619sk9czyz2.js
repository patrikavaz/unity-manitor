;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "57e0335c-a7e1-f802-3a33-337145d64764")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 255018, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(480880),
        n = e.i(401861),
        r = e.i(584266),
        l = e.i(817916),
        s = e.i(409781),
        i = e.i(833449),
        o = e.i(131581),
        d = e.i(124576),
        c = e.i(417245),
        u = e.i(304776),
        m = e.i(512418),
        f = e.i(425314),
        h = e.i(570994),
        x = e.i(722978),
        g = e.i(766930);
    let p = (0, f.default)(() => e.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }),
        y = ({
            title: e,
            headline: a,
            image: n,
            video: r
        }) => {
            let l = (0, s.useRef)(null),
                f = (0, o.useInView)(l, {
                    once: !0
                }),
                y = (0, d.useReducedMotion)(),
                [v, b] = (0, s.useState)(!1),
                {
                    scrollYProgress: j
                } = (0, c.useScroll)({
                    target: l,
                    offset: ["start start", "end end"]
                }),
                k = (0, u.useTransform)(j, [0, 1], ["25vh", "100vh"]),
                w = (0, u.useTransform)(j, [0, 1], ["25%", "100%"]),
                N = (0, u.useTransform)(j, [0, 1], ["10vh", "0vh"]),
                C = (0, u.useTransform)(j, [0, 1], ["-10vh", "-47.5vh"]),
                L = (0, u.useTransform)(j, [0, .9], [1, 0]),
                S = (0, u.useTransform)(j, [0, .9], [0, 1]),
                B = (0, u.useTransform)(j, [0, 1], ["5vh", "40vh"]),
                T = (0, x.default)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": v && !y && f && r.src
                });
            return (0, t.jsx)(g.default, {
                "data-sentry-element": "FramerMotionLazy",
                "data-sentry-component": "AnimatedHeadliner",
                "data-sentry-source-file": "AnimatedHeadliner.tsx",
                children: (0, t.jsx)("div", {
                    ref: l,
                    className: "relative h-[200vh]",
                    children: (0, t.jsxs)("div", {
                        className: "sticky top-[0px] flex h-screen flex-col items-center justify-center bg-black",
                        children: [(0, t.jsx)(m.div, {
                            style: {
                                top: C,
                                opacity: L
                            },
                            className: "relative",
                            "data-sentry-element": "m.div",
                            "data-sentry-source-file": "AnimatedHeadliner.tsx",
                            children: (0, t.jsx)(h.default, {
                                title: e,
                                fullScreen: !1,
                                titleSize: "small",
                                "data-sentry-element": "Headliner",
                                "data-sentry-source-file": "AnimatedHeadliner.tsx"
                            })
                        }), (0, t.jsx)(m.div, {
                            style: {
                                opacity: S,
                                bottom: B
                            },
                            className: "absolute z-20",
                            "data-sentry-element": "m.div",
                            "data-sentry-source-file": "AnimatedHeadliner.tsx",
                            children: (0, t.jsx)(h.default, {
                                title: a.title,
                                actions: a.actions,
                                titleSize: "small",
                                fullScreen: !1,
                                "data-sentry-element": "Headliner",
                                "data-sentry-source-file": "AnimatedHeadliner.tsx"
                            })
                        }), (0, t.jsxs)(m.div, {
                            style: {
                                height: k,
                                width: w,
                                bottom: N
                            },
                            className: "absolute overflow-hidden rounded-[8px]",
                            "data-sentry-element": "m.div",
                            "data-sentry-source-file": "AnimatedHeadliner.tsx",
                            children: [n && n.src && (0, t.jsx)(i.default, {
                                fill: !0,
                                alt: n.alt,
                                src: n.src,
                                placeholder: "blur",
                                blurDataURL: n.placeholder,
                                className: T
                            }), f && !y && r?.src && (0, t.jsx)(p, {
                                url: r.src,
                                playing: !0,
                                loop: !0,
                                muted: !0,
                                playsinline: !0,
                                width: "100%",
                                height: "100%",
                                onReady: () => {
                                    b(!0)
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
    var v = e.i(776910),
        b = e.i(81636),
        j = e.i(32382),
        k = e.i(913890),
        w = e.i(673300),
        N = e.i(649042),
        C = e.i(4390),
        L = e.i(893171),
        S = e.i(694983),
        B = e.i(692627),
        T = e.i(569074),
        M = e.i(686916),
        A = e.i(5124),
        D = e.i(314669),
        E = e.i(789924),
        F = e.i(457689),
        R = e.i(787213),
        H = e.i(123849),
        I = e.i(277965),
        W = e.i(68274),
        P = e.i(794189),
        _ = e.i(25665),
        z = e.i(883027),
        O = e.i(722990),
        $ = e.i(749583),
        U = e.i(805518);
    let q = {
            PST: "America/Los_Angeles",
            EST: "America/New_York",
            UTC: "UTC",
            BST: "Europe/London",
            CET: "Europe/Paris",
            CST: "America/Chicago",
            JST: "Asia/Tokyo"
        },
        V = ({
            title: e,
            description: a,
            action: n,
            startDate: r,
            endDate: l,
            location: i,
            defaultOpen: o,
            startTime: d,
            endTime: c,
            timezone: u,
            startDateLabel: m,
            endDateLabel: f,
            timezoneLabel: h,
            locationLabel: x,
            locale: g,
            heading: p = "h3"
        }) => {
            let [y, v] = (0, s.useState)(o), b = u ? q[u.toUpperCase()] || u : void 0, j = new Intl.DateTimeFormat(g, {
                month: "short",
                day: "numeric",
                timeZone: b
            }).format(new Date(r)), k = new Intl.DateTimeFormat(g, {
                month: "long",
                day: "numeric",
                timeZone: b
            }).format(new Date(r)), w = l ? new Intl.DateTimeFormat(g, {
                month: "long",
                day: "numeric",
                timeZone: b
            }).format(new Date(l)) : null;
            return (0, t.jsxs)("details", {
                open: y,
                onToggle: e => v(e.currentTarget.open),
                className: "rounded-[8px] bg-gray-100",
                "data-sentry-component": "Event",
                "data-sentry-source-file": "Events.tsx",
                children: [(0, t.jsxs)("summary", {
                    className: "flex cursor-pointer items-end p-6",
                    children: [(0, t.jsxs)("div", {
                        className: "flex w-full flex-col md:flex-row md:items-center",
                        children: [(0, t.jsx)("p", {
                            className: "text-small min-w-[150px] shrink-0 basis-[10%] lg:basis-[20%] xl:basis-[25%]",
                            children: j
                        }), (0, t.jsx)(p, {
                            className: "text-body-bold text-gray-800",
                            "data-sentry-element": "TitleTag",
                            "data-sentry-source-file": "Events.tsx",
                            children: e
                        })]
                    }), (0, t.jsx)("div", {
                        children: (0, t.jsx)("span", {
                            className: "text-body inline-block w-[1.2rem] text-gray-700",
                            children: y ? "-" : "+"
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
                                    children: f
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: c ? `${w}, ${c}` : w
                                })]
                            }), u && (d || c) && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: h
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: u.toUpperCase()
                                })]
                            }), i && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: x
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: i
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "mt-5 mr-[10%] flex flex-col justify-between md:w-[80%] lg:mt-0 lg:w-[35%]",
                            children: [a && (0, t.jsx)("div", {
                                className: "loco-text-body text-black",
                                children: (0, t.jsx)(U.default, {
                                    children: a
                                })
                            }), n && (0, t.jsx)("div", {
                                className: "mt-8",
                                children: (0, t.jsx)($.default, {
                                    href: n.href,
                                    variant: "primary",
                                    target: n.target,
                                    outlined: !0,
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: n.title
                                })
                            })]
                        })]
                    })]
                })]
            })
        },
        G = ({
            upcomingEvents: e,
            pastEvents: a,
            action: n,
            displayPastEvents: r,
            upcomingEventsLabel: l,
            pastEventsLabel: i,
            startDateLabel: o,
            endDateLabel: d,
            timezoneLabel: c,
            locationLabel: u,
            locale: m = "en-US",
            upcomingEventsHeading: f = "h3"
        }) => {
            let [h, x] = (0, s.useState)("upcoming");
            return (0, t.jsxs)("div", {
                "data-sentry-component": "Events",
                "data-sentry-source-file": "Events.tsx",
                children: [r && a.length > 0 && (0, t.jsxs)("div", {
                    className: "flex w-full justify-center gap-5",
                    children: [(0, t.jsx)($.default, {
                        rounded: !0,
                        outlined: "upcoming" != h,
                        onPress: () => {
                            x("upcoming")
                        },
                        size: "small",
                        children: l
                    }), (0, t.jsx)($.default, {
                        rounded: !0,
                        outlined: "past" != h,
                        onPress: () => {
                            x("past")
                        },
                        size: "small",
                        children: i
                    })]
                }), (0, t.jsxs)("div", {
                    className: "mt-16 flex flex-col gap-2",
                    children: ["upcoming" === h && e.map((e, a) => (0, t.jsx)(V, {
                        startDateLabel: o,
                        endDateLabel: d,
                        timezoneLabel: c,
                        locationLabel: u,
                        defaultOpen: 0 === a,
                        locale: m,
                        heading: f,
                        ...e
                    }, a)), "past" === h && a.map((e, a) => (0, t.jsx)(V, {
                        startDateLabel: o,
                        endDateLabel: d,
                        timezoneLabel: c,
                        locationLabel: u,
                        locale: m,
                        heading: f,
                        ...e
                    }, a))]
                }), n && (0, t.jsx)("div", {
                    className: "mt-8 text-center",
                    children: (0, t.jsx)($.default, {
                        href: n.href,
                        variant: "primary",
                        target: n.target,
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        children: n.title
                    })
                })]
            })
        };
    var K = e.i(833200),
        Z = e.i(742958),
        X = e.i(50184),
        J = e.i(725751),
        Y = e.i(449758),
        Q = e.i(515745),
        ee = e.i(2062),
        et = e.i(14452);
    let ea = (0, f.default)(() => e.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }),
        en = ({
            children: e
        }) => {
            let a = s.default.Children.toArray(e);
            return (0, t.jsx)(g.default, {
                "data-sentry-element": "FramerMotionLazy",
                "data-sentry-component": "FullPageScroller",
                "data-sentry-source-file": "FullPageScroller.tsx",
                children: (0, t.jsx)("section", {
                    className: "dark relative",
                    style: {
                        height: `${100*e.length}vh`
                    },
                    children: a.map((e, t) => s.default.cloneElement(e, {
                        index: t,
                        total: a.length
                    }))
                })
            })
        };
    en.Block = ({
        title: e,
        description: a,
        actions: n,
        image: r,
        video: l,
        index: f = 1,
        total: h = 1
    }) => {
        var g;
        let [p, y] = (0, s.useState)(!1), [v, b] = (0, s.useState)(!1), j = (0, s.useRef)(null), k = (0, o.useInView)(j, {
            once: !0
        }), w = (0, d.useReducedMotion)(), N = 1 / h * f, C = .75 * N, {
            scrollYProgress: L
        } = (0, c.useScroll)({
            target: j
        }), S = (0, u.useTransform)(L, [N, f !== h - 1 ? N + C : 1], [0, 1], {
            ease: Q.easeInOut
        }), B = (0, u.useTransform)(L, [N, f !== h - 1 ? N + C : 1], [100, 0], {
            ease: Q.easeInOut
        }), T = -((j.current?.offsetHeight || 0) / h) * f;
        g = e => {
            y(e >= N)
        }, (0, s.useInsertionEffect)(() => L.on("change", g), [L, "change", g]);
        let M = (0, x.default)("object-cover transition-opacity duration-1000", {
                "opacity-0": v
            }),
            A = (0, t.jsx)("div", {
                className: "hidden rounded-xl bg-black/70 px-2 py-3 md:block",
                children: Array.from(Array(h), (e, a) => {
                    let n = (0, x.default)("mb-3 h-3 w-3 rounded-full last:mb-0", {
                        "bg-white": f === a,
                        "bg-gray-800": f !== a
                    });
                    return (0, t.jsx)("div", {
                        className: n
                    }, `scroller-progress-${a}`)
                })
            }),
            D = (0, x.default)("absolute h-full w-full", {
                "pointer-events-none": !p
            });
        return (0, t.jsx)(m.div, {
            ref: j,
            className: D,
            style: {
                opacity: N ? S : 1,
                scrollMarginTop: T
            },
            "data-sentry-element": "m.div",
            "data-sentry-component": "FullPageScrollerBlock",
            "data-sentry-source-file": "FullPageScrollerBlock.tsx",
            children: (0, t.jsxs)("div", {
                className: "sticky top-0 h-screen w-full",
                children: [k && !w && (0, t.jsx)(ea, {
                    url: l.src,
                    width: "100%",
                    height: "100%",
                    playing: !0,
                    muted: !0,
                    loop: !0,
                    playsinline: !0,
                    onReady: () => {
                        b(!0)
                    },
                    className: "absolute [&>video]:object-cover",
                    config: {
                        hlsOptions: {
                            maxMaxBufferLength: 1
                        }
                    }
                }), (0, t.jsx)(i.default, {
                    fill: !0,
                    src: r.src,
                    alt: "",
                    className: M,
                    placeholder: "blur",
                    blurDataURL: r.placeholder,
                    "data-sentry-element": "Image",
                    "data-sentry-source-file": "FullPageScrollerBlock.tsx"
                }), (0, t.jsx)("div", {
                    className: "absolute bottom-0 h-full w-full bg-gradient-to-t from-black"
                }), h > 1 && (0, t.jsx)("div", {
                    className: "absolute right-0 mr-16 flex h-full flex-col justify-center",
                    children: A
                }), (0, t.jsx)("div", {
                    className: "relative grid h-full grid-cols-12",
                    children: (0, t.jsx)("div", {
                        className: "col-span-10 col-start-2 mb-28 flex flex-col-reverse md:col-span-4 md:col-start-2",
                        children: (0, t.jsxs)(m.div, {
                            style: {
                                y: N ? B : 0
                            },
                            className: "flex flex-col items-center text-center md:items-start md:text-left",
                            "data-sentry-element": "m.div",
                            "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                            children: [(0, t.jsx)(et.default, {
                                "data-sentry-element": "Title",
                                "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                                children: e
                            }), (0, t.jsx)(U.default, {
                                className: "mb-12",
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                                children: a
                            }), (0, t.jsx)(ee.default, {
                                "data-sentry-element": "ButtonGroup",
                                "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                                children: n.map((e, a) => (0, t.jsx)($.default, {
                                    href: e.href,
                                    rounded: !0,
                                    outlined: 0 === a,
                                    variant: 0 === a ? "primary" : "secondary",
                                    hasArrow: !0,
                                    onFocus: () => {
                                        j.current?.scrollIntoView({
                                            block: "start"
                                        })
                                    },
                                    "data-sentry-element": "Button",
                                    "data-sentry-component": "renderActions",
                                    "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                                    children: e.title
                                }, `action-${e.title}-${a}`))
                            })]
                        })
                    })
                })]
            })
        })
    };
    var er = e.i(513976),
        el = e.i(873749),
        es = e.i(512985),
        ei = e.i(675815),
        eo = e.i(112338),
        eo = eo,
        ed = e.i(825610);
    let ec = "mango-text-heading-lg text-white",
        eu = ({
            card: e,
            index: a
        }) => (0, t.jsx)("a", {
            href: e.href,
            onClick: e.onClick,
            "data-link-location": ed.trackingLocation.wayfinderCard,
            "data-link-id": `wayfinder-card-${a}`,
            className: (0, x.default)("flex flex-1 min-w-0 rounded-lg border border-transparent bg-gray-900 p-4", "outline-none focus:outline-none focus-visible:outline-none", "hover:[background:linear-gradient(theme(colors.gray.900),theme(colors.gray.900))_padding-box,linear-gradient(to_bottom,theme(colors.gray.500),theme(colors.gray.900))_border-box]"),
            "data-sentry-component": "Card",
            "data-sentry-source-file": "Wayfinder.tsx",
            children: (0, t.jsxs)("div", {
                className: "flex min-w-0 flex-1 flex-col items-start gap-[23px] pr-6 lg:pr-0",
                children: [(0, t.jsx)("p", {
                    className: "mango-text-body-md leading-[15px] text-mango-white",
                    children: e.title
                }), (0, t.jsx)("p", {
                    className: "mango-text-body-base text-mango-white/70",
                    children: e.description
                })]
            })
        }),
        em = ({
            title: e,
            cards: a
        }) => (0, t.jsx)("div", {
            className: "bg-mango-black",
            "data-sentry-component": "WayfinderBlock",
            "data-sentry-source-file": "Wayfinder.tsx",
            children: (0, t.jsx)("div", {
                className: "container py-2.5",
                children: (0, t.jsxs)("div", {
                    className: "flex w-full flex-col gap-6 rounded-2xl border border-mango-gray-700 bg-mango-black p-7 lg:flex-row lg:items-start lg:gap-2",
                    children: [(0, t.jsx)("h2", {
                        className: (0, x.default)(ec, "text-center lg:w-[271px] lg:shrink-0 lg:text-left"),
                        children: e
                    }), (0, t.jsx)("div", {
                        className: "flex w-full flex-col gap-2 lg:flex-1 lg:flex-row",
                        children: a.map((e, a) => (0, t.jsx)(eu, {
                            card: e,
                            index: a
                        }, `${e.href}-${a}`))
                    })]
                })
            })
        }),
        ef = ({
            state: e,
            title: a,
            cards: n,
            closeLabel: r
        }) => {
            let l = (0, s.useRef)(null),
                {
                    modalProps: i,
                    underlayProps: o
                } = (0, el.useModalOverlay)({
                    isDismissable: !1
                }, e, l),
                c = (0, s.useId)(),
                u = (0, d.useReducedMotion)(),
                f = .2 * !u,
                h = window.location.pathname;
            return (0, t.jsx)(er.Overlay, {
                "data-sentry-element": "Overlay",
                "data-sentry-component": "WayfinderModalContent",
                "data-sentry-source-file": "Wayfinder.tsx",
                children: (0, t.jsx)(g.default, {
                    "data-sentry-element": "FramerMotionLazy",
                    "data-sentry-source-file": "Wayfinder.tsx",
                    children: (0, t.jsxs)("div", {
                        ...o,
                        className: "fixed inset-0 z-[60] flex items-center justify-center px-4",
                        children: [(0, t.jsx)(eo.MotionA, {
                            "aria-hidden": !0,
                            tabIndex: -1,
                            href: h,
                            "data-link-location": ed.trackingLocation.wayfinderDismissOutside,
                            "data-link-id": "wayfinder-dismiss-outside",
                            onClick: t => {
                                t.preventDefault(), e.close()
                            },
                            className: "absolute inset-0 bg-black/70 backdrop-blur-[22px]",
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                duration: f
                            },
                            "data-sentry-element": "m.a",
                            "data-sentry-source-file": "Wayfinder.tsx"
                        }), (0, t.jsx)(ei.FocusScope, {
                            contain: !0,
                            restoreFocus: !0,
                            autoFocus: !0,
                            "data-sentry-element": "FocusScope",
                            "data-sentry-source-file": "Wayfinder.tsx",
                            children: (0, t.jsx)("div", {
                                ...i,
                                ref: l,
                                className: "contents",
                                children: (0, t.jsxs)(m.div, {
                                    role: "dialog",
                                    "aria-modal": "true",
                                    "aria-labelledby": c,
                                    tabIndex: -1,
                                    className: "relative z-10 flex w-full max-w-[804px] flex-col items-center gap-6 overflow-hidden rounded-2xl bg-mango-black p-7",
                                    initial: {
                                        opacity: 0,
                                        scale: u ? 1 : .95
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: f
                                    },
                                    "data-sentry-element": "m.div",
                                    "data-sentry-source-file": "Wayfinder.tsx",
                                    children: [(0, t.jsx)("h2", {
                                        id: c,
                                        className: (0, x.default)(ec, "text-center"),
                                        children: a
                                    }), (0, t.jsx)("div", {
                                        className: "flex w-full flex-col gap-2 lg:flex-row",
                                        children: n.map((e, a) => (0, t.jsx)(eu, {
                                            card: e,
                                            index: a
                                        }, `${e.href}-${a}`))
                                    }), r && (0, t.jsx)("a", {
                                        href: h,
                                        role: "button",
                                        "data-link-location": ed.trackingLocation.wayfinderDismissButton,
                                        "data-link-id": "wayfinder-dismiss-button",
                                        className: "mango-text-body-sm font-medium text-mango-white hover:underline",
                                        onClick: t => {
                                            t.preventDefault(), e.close()
                                        },
                                        onKeyDown: t => {
                                            " " === t.key && (t.preventDefault(), e.close())
                                        },
                                        children: r
                                    })]
                                })
                            })
                        })]
                    })
                })
            })
        },
        eh = ({
            title: e,
            cards: a,
            open: n = !1,
            onClose: r,
            closeLabel: l
        }) => {
            let s = (0, es.useOverlayTriggerState)({
                isOpen: n,
                onOpenChange: e => {
                    e || r?.()
                }
            });
            return s.isOpen ? (0, t.jsx)(ef, {
                state: s,
                title: e,
                cards: a,
                closeLabel: l,
                "data-sentry-element": "WayfinderModalContent",
                "data-sentry-component": "WayfinderModal",
                "data-sentry-source-file": "Wayfinder.tsx"
            }) : null
        },
        ex = ({
            variant: e = "modal",
            ...a
        }) => "block" === e ? (0, t.jsx)(em, {
            title: a.title,
            cards: a.cards
        }) : (0, t.jsx)(eh, {
            ...a,
            "data-sentry-element": "WayfinderModal",
            "data-sentry-component": "Wayfinder",
            "data-sentry-source-file": "Wayfinder.tsx"
        }),
        eg = "unity-wayfinder-dismissed";
    var ep = e.i(243306),
        ey = e.i(729e3),
        ev = e.i(106984),
        eb = e.i(590194),
        ej = e.i(78070),
        ek = e.i(350747),
        ew = e.i(651235);

    function eN(e) {
        var t = e.toString(16);
        return 1 === t.length ? "0" + t : t
    }

    function eC(e) {
        return "#" + e.map(eN).join("")
    }

    function eL(e, t, a) {
        for (var n = 0; n < a.length; n++)
            if (function(e, t, a) {
                    var n, r, l, s, i, o;
                    switch (a.length) {
                        case 3:
                            if (n = e, r = t, l = a, 255 !== n[r + 3] || n[r] === l[0] && n[r + 1] === l[1] && n[r + 2] === l[2]) return !0;
                            break;
                        case 4:
                            if (s = e, i = t, o = a, s[i + 3] && o[3] ? s[i] === o[0] && s[i + 1] === o[1] && s[i + 2] === o[2] && s[i + 3] === o[3] : s[i + 3] === o[3]) return !0;
                            break;
                        case 5:
                            if (function(e, t, a) {
                                    var n = a[0],
                                        r = a[1],
                                        l = a[2],
                                        s = a[3],
                                        i = a[4],
                                        o = e[t + 3],
                                        d = eS(o, s, i);
                                    return s ? !!(!o && d || eS(e[t], n, i) && eS(e[t + 1], r, i) && eS(e[t + 2], l, i) && d) : d
                                }(e, t, a)) return !0;
                            break;
                        default:
                            return !1
                    }
                }(e, t, a[n])) return !0;
        return !1
    }

    function eS(e, t, a) {
        return e >= t - a && e <= t + a
    }

    function eB(e, t, a) {
        for (var n = {}, r = a.dominantDivider || 24, l = a.ignoredColor, s = a.step, i = [0, 0, 0, 0, 0], o = 0; o < t; o += s) {
            var d = e[o],
                c = e[o + 1],
                u = e[o + 2],
                m = e[o + 3];
            if (!(l && eL(e, o, l))) {
                var f = Math.round(d / r) + "," + Math.round(c / r) + "," + Math.round(u / r);
                n[f] ? n[f] = [n[f][0] + d * m, n[f][1] + c * m, n[f][2] + u * m, n[f][3] + m, n[f][4] + 1] : n[f] = [d * m, c * m, u * m, m, 1], i[4] < n[f][4] && (i = n[f])
            }
        }
        var h = i[0],
            x = i[1],
            g = i[2],
            p = i[3],
            y = i[4];
        return p ? [Math.round(h / p), Math.round(x / p), Math.round(g / p), Math.round(p / y)] : a.defaultColor
    }

    function eT(e, t, a) {
        for (var n = 0, r = 0, l = 0, s = 0, i = 0, o = a.ignoredColor, d = a.step, c = 0; c < t; c += d) {
            var u = e[c + 3],
                m = e[c] * u,
                f = e[c + 1] * u,
                h = e[c + 2] * u;
            !(o && eL(e, c, o)) && (n += m, r += f, l += h, s += u, i++)
        }
        return s ? [Math.round(n / s), Math.round(r / s), Math.round(l / s), Math.round(s / i)] : a.defaultColor
    }

    function eM(e, t, a) {
        for (var n = 0, r = 0, l = 0, s = 0, i = 0, o = a.ignoredColor, d = a.step, c = 0; c < t; c += d) {
            var u = e[c],
                m = e[c + 1],
                f = e[c + 2],
                h = e[c + 3];
            !(o && eL(e, c, o)) && (n += u * u * h, r += m * m * h, l += f * f * h, s += h, i++)
        }
        return s ? [Math.round(Math.sqrt(n / s)), Math.round(Math.sqrt(r / s)), Math.round(Math.sqrt(l / s)), Math.round(s / i)] : a.defaultColor
    }

    function eA(e) {
        return eD(e, "defaultColor", [0, 0, 0, 0])
    }

    function eD(e, t, a) {
        return void 0 === e[t] ? a : e[t]
    }

    function eE(e) {
        var t, a, n;
        return (t = e, "u" > typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) ? "canvas" : (a = e, eR && a instanceof OffscreenCanvas) ? "offscreencanvas" : eH(e) ? "videoframe" : (n = e, "u" > typeof ImageBitmap && n instanceof ImageBitmap) ? "imagebitmap" : e.src
    }

    function eF(e) {
        return "u" > typeof HTMLImageElement && e instanceof HTMLImageElement
    }
    var eR = "u" > typeof OffscreenCanvas;

    function eH(e) {
        return "u" > typeof VideoFrame && e instanceof VideoFrame
    }
    var eI = "u" < typeof window;

    function eW(e) {
        return Error("FastAverageColor: " + e)
    }

    function eP(e, t) {
        t || console.error(e)
    }
    var e_ = function() {
        function e() {
            this.canvas = null, this.ctx = null
        }
        return e.prototype.getColorAsync = function(e, t) {
            if (!e) return Promise.reject(eW("call .getColorAsync() without resource"));
            if ("string" == typeof e) {
                if ("u" < typeof Image) return Promise.reject(eW("resource as string is not supported in this environment"));
                var a = new Image;
                a.crossOrigin = t && t.crossOrigin || "";
                var n = this.bindImageEvents(a, t);
                return a.src = e, n
            }
            if (eF(e) && !e.complete) return this.bindImageEvents(e, t);
            var r = this.getColor(e, t);
            return r.error ? Promise.reject(r.error) : Promise.resolve(r)
        }, e.prototype.getColor = function(e, t) {
            var a, n, r, l, s, i, o, d, c = eA(t = t || {});
            if (!e) {
                var u = eW("call .getColor() without resource");
                return eP(u, t.silent), this.prepareResult(c, u)
            }
            var m = (a = function(e) {
                if (eF(e)) {
                    var t, a = e.naturalWidth,
                        n = e.naturalHeight;
                    return e.naturalWidth || -1 === e.src.search(/\.svg(\?|$)/i) || (a = n = 100), {
                        width: a,
                        height: n
                    }
                }
                return (t = e, "u" > typeof HTMLVideoElement && t instanceof HTMLVideoElement) ? {
                    width: e.videoWidth,
                    height: e.videoHeight
                } : eH(e) ? {
                    width: e.codedWidth,
                    height: e.codedHeight
                } : {
                    width: e.width,
                    height: e.height
                }
            }(e), r = eD(n = t, "left", 0), l = eD(n, "top", 0), s = eD(n, "width", a.width), i = eD(n, "height", a.height), o = s, d = i, "precision" === n.mode || (s > i ? d = Math.round((o = 100) / (s / i)) : o = Math.round((d = 100) / (i / s)), (o > s || d > i || o < 10 || d < 10) && (o = s, d = i)), {
                srcLeft: r,
                srcTop: l,
                srcWidth: s,
                srcHeight: i,
                destWidth: o,
                destHeight: d
            });
            if (!m.srcWidth || !m.srcHeight || !m.destWidth || !m.destHeight) {
                var u = eW('incorrect sizes for resource "'.concat(eE(e), '"'));
                return eP(u, t.silent), this.prepareResult(c, u)
            }
            if (!this.canvas && (this.canvas = eI ? eR ? new OffscreenCanvas(1, 1) : null : document.createElement("canvas"), !this.canvas)) {
                var u = eW("OffscreenCanvas is not supported in this browser");
                return eP(u, t.silent), this.prepareResult(c, u)
            }
            if (!this.ctx) {
                if (this.ctx = this.canvas.getContext("2d", {
                        willReadFrequently: !0
                    }), !this.ctx) {
                    var u = eW("Canvas Context 2D is not supported in this browser");
                    return eP(u, t.silent), this.prepareResult(c, u)
                }
                this.ctx.imageSmoothingEnabled = !1
            }
            this.canvas.width = m.destWidth, this.canvas.height = m.destHeight;
            try {
                this.ctx.clearRect(0, 0, m.destWidth, m.destHeight), this.ctx.drawImage(e, m.srcLeft, m.srcTop, m.srcWidth, m.srcHeight, 0, 0, m.destWidth, m.destHeight);
                var f = this.ctx.getImageData(0, 0, m.destWidth, m.destHeight).data;
                return this.prepareResult(this.getColorFromArray4(f, t))
            } catch (a) {
                var u = eW("security error (CORS) for resource ".concat(eE(e), ".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"));
                return eP(u, t.silent), t.silent || console.error(a), this.prepareResult(c, u)
            }
        }, e.prototype.getColorFromArray4 = function(e, t) {
            t = t || {};
            var a, n, r = e.length,
                l = eA(t);
            if (r < 4) return l;
            var s = 4 * (t.step || 1);
            switch (t.algorithm || "sqrt") {
                case "simple":
                    a = eT;
                    break;
                case "sqrt":
                    a = eM;
                    break;
                case "dominant":
                    a = eB;
                    break;
                default:
                    throw eW("".concat(t.algorithm, " is unknown algorithm"))
            }
            return a(e, r - r % 4, {
                defaultColor: l,
                ignoredColor: (n = t.ignoredColor) ? Array.isArray(n[0]) ? n : [n] : [],
                step: s,
                dominantDivider: t.dominantDivider
            })
        }, e.prototype.prepareResult = function(e, t) {
            var a = e.slice(0, 3),
                n = [e[0], e[1], e[2], e[3] / 255],
                r = (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
            return {
                value: [e[0], e[1], e[2], e[3]],
                rgb: "rgb(" + a.join(",") + ")",
                rgba: "rgba(" + n.join(",") + ")",
                hex: eC(a),
                hexa: eC(e),
                isDark: r,
                isLight: !r,
                error: t
            }
        }, e.prototype.destroy = function() {
            this.canvas && (this.canvas.width = 1, this.canvas.height = 1, this.canvas = null), this.ctx = null
        }, e.prototype.bindImageEvents = function(e, t) {
            var a = this;
            return new Promise(function(n, r) {
                var l = function() {
                        e.removeEventListener("load", s), e.removeEventListener("error", i), e.removeEventListener("abort", o)
                    },
                    s = function() {
                        l();
                        var s = a.getColor(e, t);
                        s.error ? r(s.error) : n(s)
                    },
                    i = function() {
                        l(), r(eW('Error loading image "'.concat(e.src, '"')))
                    },
                    o = function() {
                        l(), r(eW('Image "'.concat(e.src, '" loading aborted')))
                    };
                e.addEventListener("load", s), e.addEventListener("error", i), e.addEventListener("abort", o), e.src && e.complete && s()
            })
        }, e
    }();
    let ez = e => [parseInt(e.slice(1, 3), 16), parseInt(e.slice(3, 5), 16), parseInt(e.slice(5, 7), 16)],
        eO = (e, t) => {
            let a, n, r, [l, s, i] = ez(e),
                o = e => Math.max(0, Math.min(255, Math.round(e + e * t / 100)));
            return a = o(l), n = o(s), r = o(i), `#${a.toString(16).padStart(2,"0")}${n.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}`
        },
        e$ = async e => {
            let t = new e_;
            try {
                let a = (await t.getColorAsync(e, {
                        ignoredColor: [
                            [255, 255, 255, 255],
                            [0, 0, 0, 255]
                        ]
                    })).hex,
                    n = (e => {
                        let [t, a, n] = ez(e);
                        return (.299 * t + .587 * a + .114 * n) / 255 < .6
                    })(a),
                    r = eO(a, -15),
                    l = eO(a, -8);
                return {
                    isDark: n,
                    mainColor: a,
                    dark: r,
                    light: l
                }
            } finally {
                t.destroy()
            }
        }, eU = e => {
            let [a, n] = (0, s.useState)(!1), r = e.layout ?? "default", l = "default" !== r, i = "centered" === r, o = (0, x.default)("overflow-hidden md:hidden transition-all duration-500 ease-in-out", {
                "max-h-0": !a,
                "max-h-96": a
            });
            return (0, t.jsxs)("div", {
                className: l ? "col-span-4 mt-7 flex flex-col gap-7 md:col-span-7 md:mt-0 md:justify-center" : "col-span-4 mt-7 flex flex-col gap-7 md:col-span-7 md:mt-0 md:grid lg:grid-cols-7",
                "data-sentry-component": "Content",
                "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx",
                children: [(0, t.jsxs)("div", {
                    className: l ? (0, x.default)("md:pr-14", i && "md:pl-14 md:text-center") : "col-span-7 grid grid-cols-7 gap-x-5",
                    children: [(0, t.jsx)("p", {
                        className: l ? "mango-text-heading-md" : "mango-text-heading-md col-span-5",
                        children: e.title
                    }), (0, t.jsx)(ej.default, {
                        className: l ? "hidden md:absolute md:top-6 md:right-6 md:block" : "col-span-1 col-start-7 hidden justify-self-end md:block",
                        variant: "secondary",
                        icon: (0, t.jsx)(ep.X, {}),
                        size: "lg",
                        onClick: e.onClose,
                        "data-sentry-element": "Button",
                        "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx"
                    })]
                }), (0, t.jsxs)("div", {
                    className: l ? (0, x.default)("flex flex-col md:gap-5", i && "md:items-center md:text-center") : "flex flex-col self-end md:col-span-7 md:grid md:grid-cols-7 md:gap-0 md:gap-x-5",
                    children: [e.description && (0, t.jsx)("div", {
                        className: l ? "hidden md:flex" : "hidden md:col-span-3 md:flex",
                        children: (0, t.jsx)("p", {
                            className: "mango-text-body-base pb-8 md:self-end md:pb-0",
                            children: e.description?.value
                        })
                    }), (0, t.jsxs)("div", {
                        className: l ? (0, x.default)("md:flex md:flex-col md:gap-5", i && "md:items-center") : "md:col-span-4 md:col-start-4 md:flex md:flex-col md:justify-between lg:col-span-3 lg:col-start-5",
                        children: [e.details && e.details.length > 0 && (0, t.jsx)("ul", {
                            className: l ? "flex flex-col gap-2 pb-8 md:pb-0" : "flex flex-col gap-2 pb-8",
                            children: e.details.map(e => (0, t.jsxs)("li", {
                                className: (0, x.default)("flex gap-5", i && "md:justify-center"),
                                children: [(0, t.jsx)("p", {
                                    className: "mango-text-input w-[100px]",
                                    children: e.label
                                }), (0, t.jsx)("p", {
                                    className: "mango-text-input text-gray-600 dark:text-gray-300",
                                    children: e.value
                                })]
                            }, e.label))
                        }), e.description && (0, t.jsx)("div", {
                            className: o,
                            children: (0, t.jsx)("p", {
                                className: "mango-text-body-base pb-8 md:col-span-3",
                                children: e.description?.value
                            })
                        }), e.description && e.action && (0, t.jsxs)("div", {
                            className: (0, x.default)("flex gap-2", i && "md:justify-center"),
                            children: [e.description?.readMoreLabel && (0, t.jsx)(ej.default, {
                                className: "md:hidden",
                                onClick: () => n(!a),
                                variant: "secondary",
                                icon: a ? (0, t.jsx)(ey.CaretUp, {}) : (0, t.jsx)(ev.CaretDown, {}),
                                children: e.description?.readMoreLabel
                            }), (0, t.jsx)("div", {
                                children: (0, t.jsx)(ej.default, {
                                    href: e.action?.href,
                                    target: e.action?.target,
                                    variant: "primary",
                                    icon: (0, t.jsx)(eb.ArrowRight, {}),
                                    "data-link-location": ed.trackingLocation.deluxeAnnouncementBannerAction,
                                    "data-link-id": "deluxe-banner-action",
                                    children: e.action?.label
                                })
                            })]
                        })]
                    })]
                })]
            })
        }, eq = ({
            image: e,
            video: a
        }) => a ? (0, t.jsx)(ek.default, {
            src: a.src,
            mode: "manual",
            poster: e,
            posterSizes: "(max-width: 768px) 75vw, (max-width: 1024px) 42vw, 33vw",
            controls: "bottom-right",
            className: "relative aspect-video min-h-full w-full overflow-hidden rounded-lg",
            "data-sentry-element": "BrandfolderVideo",
            "data-sentry-component": "Media",
            "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx"
        }) : (0, t.jsx)("div", {
            className: "relative aspect-video min-h-full w-full overflow-hidden rounded-lg",
            children: (0, t.jsx)(i.default, {
                src: e.src,
                alt: e.alt,
                placeholder: "blur",
                blurDataURL: e.placeholder,
                fill: !0,
                sizes: "(max-width: 768px) 75vw, (max-width: 1024px) 42vw, 33vw",
                className: "object-cover"
            })
        }), eV = e => {
            let [a, n] = (0, s.useState)(e.animate ?? !1), {
                isDark: r,
                dark: l,
                light: i
            } = (e => {
                let [t, a] = (0, s.useState)(!1), [n, r] = (0, s.useState)(null), [l, i] = (0, s.useState)(null), [o, d] = (0, s.useState)(null), [c, u] = (0, s.useState)(null), [m, f] = (0, s.useState)(null), h = (0, s.useCallback)(() => {
                    i(null), d(null), u(null), f(null)
                }, []), x = (0, s.useCallback)(async e => {
                    if (!e) return void h();
                    a(!0), r(null);
                    try {
                        let t = await e$(e);
                        i(t.isDark), d(t.mainColor), u(t.dark), f(t.light), a(!1)
                    } catch (e) {
                        r(e instanceof Error ? e.message : "Failed to extract color"), h(), a(!1)
                    }
                }, [h]);
                return (0, s.useEffect)(() => {
                    e ? x(e) : (r(null), h(), a(!1))
                }, [e, x, h]), {
                    isLoading: t,
                    error: n,
                    isDark: l,
                    mainColor: o,
                    dark: c,
                    light: m
                }
            })(e.image.placeholder);
            (0, s.useEffect)(() => {
                if (e.animate) {
                    let e = setTimeout(() => {
                        n(!1)
                    }, 1e3);
                    return () => clearTimeout(e)
                }
            }, [e.animate]);
            let o = (0, x.default)("relative grid grid-cols-4 gap-x-2 md:gap-x-5 md:grid-cols-12 p-4 md:p-6 z-10"),
                d = e.hasBackgroundGradient && l && i ? {
                    background: `linear-gradient(94deg, ${l} 7%, ${i} 105.47%)`
                } : void 0,
                c = e.hasBackgroundGradient && null !== r ? r ? "dark" : "light" : e.theme ?? "light";
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: (0, x.default)("fixed inset-0 z-40 bg-black/30", e.animate && "transition-opacity duration-300", e.animate && a ? "opacity-0" : "opacity-100")
                }), (0, t.jsx)(ew.default, {
                    className: (0, x.default)("fixed left-0 z-40 w-full bg-white dark:bg-black", e.animate && "transition-transform duration-300 ease-out", e.animate && a ? "-translate-y-[calc(100%+5rem)]" : "translate-y-0"),
                    style: d,
                    theme: c,
                    defaultBlockPadding: {
                        top: "pt-0",
                        bottom: "pb-0"
                    },
                    "data-sentry-element": "ThemeContainer",
                    "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx",
                    children: (0, t.jsx)("div", {
                        className: "mango-container",
                        children: (0, t.jsxs)("div", {
                            className: o,
                            children: [(0, t.jsx)("div", {
                                className: "col-span-3 md:col-span-5",
                                children: (0, t.jsx)(eq, {
                                    image: e.image,
                                    video: e.video,
                                    "data-sentry-element": "Media",
                                    "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx"
                                })
                            }), (0, t.jsx)(eU, {
                                ...e,
                                "data-sentry-element": "Content",
                                "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx"
                            }), (0, t.jsx)("div", {
                                className: "absolute bottom-[-4.25rem] left-[50%] translate-x-[-50%] md:hidden",
                                children: (0, t.jsx)(ej.default, {
                                    variant: "secondary",
                                    icon: (0, t.jsx)(ep.X, {}),
                                    size: "lg",
                                    onClick: e.onClose,
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx"
                                })
                            })]
                        })
                    })
                })]
            })
        };
    var eG = e.i(779712);
    let eK = {
            alert: n.default,
            alternateNavigation: r.default,
            alternateNavigationAnchor: l.default,
            animatedHeadliner: ({
                title: e,
                subtitle: a,
                image: n,
                theme: r,
                description: l,
                brandfolder: s,
                actions: i,
                isHidden: o
            }) => (0, t.jsx)(t.Fragment, {
                children: !o && (0, t.jsx)(y, {
                    title: e || "",
                    image: {
                        src: n?.file?.asset.url || "",
                        alt: n?.alt || "",
                        placeholder: n?.file?.asset?.metadata?.lqip || ""
                    },
                    video: {
                        src: s?.muxHLSURL || ""
                    },
                    headline: {
                        actions: i ? i.map(e => ({
                            title: e.title || "",
                            href: e.link?.linkReference?.href.current || "",
                            target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                        })) : void 0,
                        description: l || void 0,
                        title: a || "",
                        theme: "dark" === r ? "dark" : "light"
                    }
                })
            }),
            announcementBanner: v.default,
            benefits: b.default,
            uniteCards: k.default,
            carousel: A.default,
            callout: j.default,
            fullScreenVisual: w.FullScreenVisualBlockSuspense,
            fullWidthBlock: N.default,
            faqs: S.default,
            headliner: C.default,
            hero: L.default,
            htmlInfoTable: J.default,
            keyFigures: W.default,
            quote: B.default,
            statement: T.default,
            footnote: M.default,
            logosBank: D.default,
            featuresList: E.default,
            title: F.default,
            testimonialsBlock: R.default,
            animatedFeaturesList: I.default,
            mangoDeluxeAnnouncementBanner: ({
                title: e,
                description: a,
                action: n,
                settings: r,
                hasBackgroundGradient: l,
                layout: i,
                image: o,
                video: d,
                details: c
            }) => {
                let [u, m] = (0, s.useState)(!1), f = `banner_dismissed_until_${e.replace(/\s+/g,"_").toLowerCase()}`;
                return ((0, s.useEffect)(() => {
                    let e = (() => {
                        try {
                            let e = localStorage.getItem(f);
                            return e ? Number(e) : null
                        } catch {
                            return null
                        }
                    })();
                    e && e > Date.now() || m(!0)
                }, [f]), r?.isHidden) ? null : (0, t.jsx)(t.Fragment, {
                    children: u && (0, t.jsx)(eV, {
                        animate: !0,
                        hasBackgroundGradient: l || !1,
                        layout: i ?? "default",
                        title: e,
                        theme: r?.theme === "dark" ? "dark" : "light",
                        description: a ?? void 0,
                        action: n ? {
                            href: n.fieldLink?.linkReference?.href?.current ?? "",
                            target: n.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self",
                            label: n.text ?? ""
                        } : void 0,
                        image: {
                            src: o ? (0, eG.urlForImage)(o)?.fit("crop").width(1200).height(750).dpr(2).url() ?? "" : "",
                            alt: o?.alt ?? "",
                            placeholder: o?.asset?.metadata?.lqip ?? ""
                        },
                        video: d?.muxHLSURL ? {
                            src: d.muxHLSURL
                        } : void 0,
                        details: c ?? void 0,
                        onClose: () => {
                            m(!1), ((e = 7) => {
                                let t = Date.now() + 24 * e * 36e5;
                                localStorage.setItem(f, String(t))
                            })(7)
                        }
                    })
                })
            },
            media: P.default,
            richText: _.default,
            events: ({
                upcomingEvents: e,
                pastEvents: a,
                displayPastEvents: n,
                action: r,
                upcomingEventsLabel: l,
                pastEventsLabel: s,
                startDateLabel: i,
                endDateLabel: o,
                timezoneLabel: d,
                locationLabel: c,
                upcomingEventsHeading: u,
                isHidden: m
            }) => {
                let f = (0, K.useLocale)(),
                    h = e => ({
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
                        children: (0, t.jsx)(G, {
                            upcomingEventsHeading: "h2" === u || "h3" === u || "h4" === u ? u : "h3",
                            action: (r ? {
                                title: r.title ?? "",
                                href: r.link?.linkReference?.href.current ?? "",
                                target: r.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                            } : null) || void 0,
                            upcomingEvents: e ? e.map(h) : [],
                            pastEvents: a ? a.map(h) : [],
                            displayPastEvents: n || !1,
                            upcomingEventsLabel: l ?? "",
                            pastEventsLabel: s ?? "",
                            startDateLabel: i ?? "",
                            endDateLabel: o ?? "",
                            timezoneLabel: d ?? "",
                            locationLabel: c ?? "",
                            locale: f
                        })
                    })
                })
            },
            iframeBlock: z.default,
            planCards: H.default,
            bentoCards: Z.default,
            videosShowcase: X.default,
            cards: Y.default,
            fullPageScroller: ({
                fullPageBlocks: e,
                isHidden: a
            }) => (0, t.jsx)(en, {
                "data-sentry-element": "FullPageScroller",
                "data-sentry-component": "FullPageScrollerBlock",
                "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                children: e.map(({
                    title: n,
                    brandfolder: r,
                    image: l,
                    description: s,
                    actions: i
                }, o) => {
                    let d = {
                            src: r?.muxHLSURL || ""
                        },
                        c = {
                            src: l?.asset.url || "",
                            placeholder: l?.asset.metadata?.blurHash || ""
                        };
                    return (0, t.jsx)(t.Fragment, {
                        children: !a && (0, t.jsx)(en.Block, {
                            index: o,
                            total: e.length,
                            title: n || "",
                            description: (0, t.jsx)(O.PortableText, {
                                value: s
                            }),
                            actions: i?.map(e => ({
                                title: e.text || "",
                                href: e.link?.href.current || ""
                            })) || [],
                            image: c,
                            video: d
                        }, `full-page-scroller-block-${n}-${o}`)
                    })
                })
            }),
            wayfinder: ({
                isHidden: e,
                variant: a,
                title: n,
                closeLabel: r,
                openDelaySeconds: l,
                cards: i
            }) => {
                let o = "modal" === a,
                    [d, c] = (0, s.useState)(!1);
                if ((0, s.useEffect)(() => {
                        if (!o || e) return;
                        let t = !1;
                        try {
                            t = !!sessionStorage.getItem(eg)
                        } catch {}
                        if (t) return;
                        let a = setTimeout(() => c(!0), (l ?? 5) * 1e3);
                        return () => clearTimeout(a)
                    }, [o, e, l]), e) return null;
                let u = () => {
                        try {
                            sessionStorage.setItem(eg, Date.now().toString())
                        } catch {}
                    },
                    m = i?.map(e => ({
                        title: e.title ?? "",
                        description: e.description ?? "",
                        href: e.fieldLink?.linkReference?.href?.current ?? "",
                        onClick: o ? u : void 0
                    })) ?? [];
                return o ? (0, t.jsx)(ex, {
                    variant: "modal",
                    title: n ?? "",
                    cards: m,
                    open: d,
                    onClose: () => {
                        u(), c(!1)
                    },
                    closeLabel: r ?? void 0
                }) : (0, t.jsx)(ex, {
                    variant: "block",
                    title: n ?? "",
                    cards: m,
                    "data-sentry-element": "Wayfinder",
                    "data-sentry-component": "WayfinderBlock",
                    "data-sentry-source-file": "WayfinderBlock.tsx"
                })
            }
        },
        eZ = ({
            blocks: e
        }) => (0, t.jsx)(a.default, {
            blocks: e,
            blockMap: eK,
            "data-sentry-element": "Blocks",
            "data-sentry-component": "L1PageBlocks",
            "data-sentry-source-file": "L1.tsx"
        });
    var eX = e.i(814507),
        eJ = e.i(129824),
        eY = e.i(246916);
    e.s(["default", 0, function({
        data: e
    }) {
        let {
            shouldDisplayMTBanner: a,
            updatedBlocks: n
        } = (0, eY.useMTBanner)(e, eJ.L1_PAGES_NO_MT_BANNER);
        return (0, t.jsxs)(t.Fragment, {
            children: [e.announcementBanner?.hasAnnouncementBanner && (0, t.jsx)(eX.default, {
                rounded: !0,
                action: {
                    title: e.announcementBanner.announcementBannerContent?.action?.text || "",
                    href: e.announcementBanner.announcementBannerContent?.action?.fieldLink?.linkReference?.href?.current || "",
                    target: e.announcementBanner.announcementBannerContent?.action?.fieldLink?.linkReference?.target || "_self"
                },
                className: "absolute top-0 left-0 z-20",
                children: e.announcementBanner.announcementBannerContent?.title
            }), (0, t.jsx)(eZ, {
                blocks: a ? n : e.blocks,
                "data-sentry-element": "L1PageBlocks",
                "data-sentry-source-file": "L1.tsx"
            })]
        })
    }], 255018)
}]);

//# debugId=57e0335c-a7e1-f802-3a33-337145d64764