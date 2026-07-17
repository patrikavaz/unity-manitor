(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 255018, e => {
    "use strict";
    var t = e.i(210139),
        a = e.i(480880),
        l = e.i(401861),
        r = e.i(584266),
        n = e.i(817916),
        i = e.i(999721),
        s = e.i(166511),
        o = e.i(526826),
        d = e.i(153348),
        c = e.i(955429),
        u = e.i(376936),
        m = e.i(192207),
        h = e.i(71871),
        f = e.i(570994),
        x = e.i(722978),
        g = e.i(766930);
    let p = (0, h.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        v = ({
            title: e,
            headline: a,
            image: l,
            video: r
        }) => {
            let n = (0, i.useRef)(null),
                h = (0, d.useInView)(n, {
                    once: !0
                }),
                v = (0, c.useReducedMotion)(),
                [b, j] = (0, i.useState)(!1),
                {
                    scrollYProgress: y
                } = (0, u.useScroll)({
                    target: n,
                    offset: ["start start", "end end"]
                }),
                w = (0, m.useTransform)(y, [0, 1], ["25vh", "100vh"]),
                k = (0, m.useTransform)(y, [0, 1], ["25%", "100%"]),
                N = (0, m.useTransform)(y, [0, 1], ["10vh", "0vh"]),
                C = (0, m.useTransform)(y, [0, 1], ["-10vh", "-47.5vh"]),
                L = (0, m.useTransform)(y, [0, .9], [1, 0]),
                S = (0, m.useTransform)(y, [0, .9], [0, 1]),
                T = (0, m.useTransform)(y, [0, 1], ["5vh", "40vh"]),
                M = (0, x.default)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": b && !v && h && r.src
                });
            return (0, t.jsx)(g.default, {
                children: (0, t.jsx)("div", {
                    ref: n,
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
                                height: w,
                                width: k,
                                bottom: N
                            },
                            className: "absolute overflow-hidden rounded-[8px]",
                            children: [l && l.src && (0, t.jsx)(s.default, {
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
        w = e.i(913890),
        k = e.i(673300),
        N = e.i(649042),
        C = e.i(4390),
        L = e.i(893171),
        S = e.i(694983),
        T = e.i(692627),
        M = e.i(569074),
        R = e.i(686916),
        D = e.i(5124),
        E = e.i(314669),
        B = e.i(789924),
        I = e.i(457689),
        A = e.i(787213),
        H = e.i(123849),
        _ = e.i(583877),
        F = e.i(277965),
        z = e.i(68274),
        O = e.i(794189),
        $ = e.i(25665),
        P = e.i(883027),
        U = e.i(722990),
        W = e.i(749583),
        q = e.i(805518);
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
            endDate: n,
            location: s,
            defaultOpen: o,
            startTime: d,
            endTime: c,
            timezone: u,
            startDateLabel: m,
            endDateLabel: h,
            timezoneLabel: f,
            locationLabel: x,
            locale: g,
            heading: p = "h3"
        }) => {
            let [v, b] = (0, i.useState)(o), j = u ? V[u.toUpperCase()] || u : void 0, y = new Intl.DateTimeFormat(g, {
                month: "short",
                day: "numeric",
                timeZone: j
            }).format(new Date(r)), w = new Intl.DateTimeFormat(g, {
                month: "long",
                day: "numeric",
                timeZone: j
            }).format(new Date(r)), k = n ? new Intl.DateTimeFormat(g, {
                month: "long",
                day: "numeric",
                timeZone: j
            }).format(new Date(n)) : null;
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
                            children: [w && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: m
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: d ? `${w}, ${d}` : w
                                })]
                            }), k && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: h
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: c ? `${k}, ${c}` : k
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
                            }), s && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: x
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: s
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "mt-5 mr-[10%] flex flex-col justify-between md:w-[80%] lg:mt-0 lg:w-[35%]",
                            children: [a && (0, t.jsx)("div", {
                                className: "loco-text-body text-black",
                                children: (0, t.jsx)(q.default, {
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
            upcomingEventsLabel: n,
            pastEventsLabel: s,
            startDateLabel: o,
            endDateLabel: d,
            timezoneLabel: c,
            locationLabel: u,
            locale: m = "en-US",
            upcomingEventsHeading: h = "h3"
        }) => {
            let [f, x] = (0, i.useState)("upcoming");
            return (0, t.jsxs)("div", {
                children: [r && a.length > 0 && (0, t.jsxs)("div", {
                    className: "flex w-full justify-center gap-5",
                    children: [(0, t.jsx)(W.default, {
                        rounded: !0,
                        outlined: "upcoming" != f,
                        onPress: () => {
                            x("upcoming")
                        },
                        size: "small",
                        children: n
                    }), (0, t.jsx)(W.default, {
                        rounded: !0,
                        outlined: "past" != f,
                        onPress: () => {
                            x("past")
                        },
                        size: "small",
                        children: s
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
    var Z = e.i(200241),
        X = e.i(742958),
        J = e.i(50184),
        Y = e.i(725751),
        Q = e.i(449758),
        ee = e.i(529363),
        et = e.i(2062),
        ea = e.i(14452);
    let el = (0, h.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        er = ({
            children: e
        }) => {
            let a = i.default.Children.toArray(e);
            return (0, t.jsx)(g.default, {
                children: (0, t.jsx)("section", {
                    className: "dark relative",
                    style: {
                        height: `${100*e.length}vh`
                    },
                    children: a.map((e, t) => i.default.cloneElement(e, {
                        index: t,
                        total: a.length
                    }))
                })
            })
        };
    er.Block = ({
        title: e,
        description: a,
        actions: l,
        image: r,
        video: n,
        index: h = 1,
        total: f = 1
    }) => {
        var g;
        let [p, v] = (0, i.useState)(!1), [b, j] = (0, i.useState)(!1), y = (0, i.useRef)(null), w = (0, d.useInView)(y, {
            once: !0
        }), k = (0, c.useReducedMotion)(), N = 1 / f * h, C = .75 * N, {
            scrollYProgress: L
        } = (0, u.useScroll)({
            target: y
        }), S = (0, m.useTransform)(L, [N, h !== f - 1 ? N + C : 1], [0, 1], {
            ease: ee.easeInOut
        }), T = (0, m.useTransform)(L, [N, h !== f - 1 ? N + C : 1], [100, 0], {
            ease: ee.easeInOut
        }), M = -((y.current?.offsetHeight || 0) / f) * h;
        g = e => {
            v(e >= N)
        }, (0, i.useInsertionEffect)(() => L.on("change", g), [L, "change", g]);
        let R = (0, x.default)("object-cover transition-opacity duration-1000", {
                "opacity-0": b
            }),
            D = (0, t.jsx)("div", {
                className: "hidden rounded-xl bg-black/70 px-2 py-3 md:block",
                children: Array.from(Array(f), (e, a) => {
                    let l = (0, x.default)("mb-3 h-3 w-3 rounded-full last:mb-0", {
                        "bg-white": h === a,
                        "bg-gray-800": h !== a
                    });
                    return (0, t.jsx)("div", {
                        className: l
                    }, `scroller-progress-${a}`)
                })
            }),
            E = (0, x.default)("absolute h-full w-full", {
                "pointer-events-none": !p
            });
        return (0, t.jsx)(o.m.div, {
            ref: y,
            className: E,
            style: {
                opacity: N ? S : 1,
                scrollMarginTop: M
            },
            children: (0, t.jsxs)("div", {
                className: "sticky top-0 h-screen w-full",
                children: [w && !k && (0, t.jsx)(el, {
                    url: n.src,
                    width: "100%",
                    height: "100%",
                    playing: !0,
                    muted: !0,
                    loop: !0,
                    playsinline: !0,
                    onReady: () => {
                        j(!0)
                    },
                    className: "absolute [&>video]:object-cover",
                    config: {
                        hlsOptions: {
                            maxMaxBufferLength: 1
                        }
                    }
                }), (0, t.jsx)(s.default, {
                    fill: !0,
                    src: r.src,
                    alt: "",
                    className: R,
                    placeholder: "blur",
                    blurDataURL: r.placeholder
                }), (0, t.jsx)("div", {
                    className: "absolute bottom-0 h-full w-full bg-gradient-to-t from-black"
                }), f > 1 && (0, t.jsx)("div", {
                    className: "absolute right-0 mr-16 flex h-full flex-col justify-center",
                    children: D
                }), (0, t.jsx)("div", {
                    className: "relative grid h-full grid-cols-12",
                    children: (0, t.jsx)("div", {
                        className: "col-span-10 col-start-2 mb-28 flex flex-col-reverse md:col-span-4 md:col-start-2",
                        children: (0, t.jsxs)(o.m.div, {
                            style: {
                                y: N ? T : 0
                            },
                            className: "flex flex-col items-center text-center md:items-start md:text-left",
                            children: [(0, t.jsx)(ea.default, {
                                children: e
                            }), (0, t.jsx)(q.default, {
                                className: "mb-12",
                                children: a
                            }), (0, t.jsx)(et.default, {
                                children: l.map((e, a) => (0, t.jsx)(W.default, {
                                    href: e.href,
                                    rounded: !0,
                                    outlined: 0 === a,
                                    variant: 0 === a ? "primary" : "secondary",
                                    hasArrow: !0,
                                    onFocus: () => {
                                        y.current?.scrollIntoView({
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
    };
    let en = ({
        children: e,
        className: a = ""
    }) => {
        let l = (0, x.clsx)("py-4 px-8 lg:flex lg:justify-between gap-4 col-start-2 col-end-12", a);
        return (0, t.jsx)("section", {
            className: "grid grid-cols-12 bg-gray-900 pb-32",
            children: (0, t.jsx)("div", {
                className: l,
                children: e
            })
        })
    };
    en.Item = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "loco-text-body-md mb-6 flex flex-col items-center text-center text-white last:mb-0 md:text-left lg:m-0 lg:flex-row lg:gap-4",
        children: e
    });
    var ei = e.i(460261),
        es = e.i(260041),
        eo = e.i(459236),
        ed = e.i(102893),
        ec = e.i(825610);
    let eu = "mango-text-heading-lg text-white",
        em = ({
            card: e,
            index: a
        }) => (0, t.jsx)("a", {
            href: e.href,
            onClick: e.onClick,
            "data-link-location": ec.trackingLocation.wayfinderCard,
            "data-link-id": `wayfinder-card-${a}`,
            className: (0, x.default)("flex flex-1 min-w-0 rounded-lg border border-transparent bg-gray-900 p-4", "outline-none focus:outline-none focus-visible:outline-none", "hover:[background:linear-gradient(theme(colors.gray.900),theme(colors.gray.900))_padding-box,linear-gradient(to_bottom,theme(colors.gray.500),theme(colors.gray.900))_border-box]"),
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
        eh = ({
            title: e,
            cards: a
        }) => (0, t.jsx)("div", {
            className: "bg-mango-black",
            children: (0, t.jsx)("div", {
                className: "container py-2.5",
                children: (0, t.jsxs)("div", {
                    className: "flex w-full flex-col gap-6 rounded-2xl border border-mango-gray-700 bg-mango-black p-7 lg:flex-row lg:items-start lg:gap-2",
                    children: [(0, t.jsx)("h2", {
                        className: (0, x.default)(eu, "text-center lg:w-[271px] lg:shrink-0 lg:text-left"),
                        children: e
                    }), (0, t.jsx)("div", {
                        className: "flex w-full flex-col gap-2 lg:flex-1 lg:flex-row",
                        children: a.map((e, a) => (0, t.jsx)(em, {
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
            cards: l,
            closeLabel: r
        }) => {
            let n = (0, i.useRef)(null),
                {
                    modalProps: s,
                    underlayProps: d
                } = (0, es.useModalOverlay)({
                    isDismissable: !1
                }, e, n),
                u = (0, i.useId)(),
                m = (0, c.useReducedMotion)(),
                h = .2 * !m,
                f = window.location.pathname;
            return (0, t.jsx)(ei.Overlay, {
                children: (0, t.jsx)(g.default, {
                    children: (0, t.jsxs)("div", {
                        ...d,
                        className: "fixed inset-0 z-[60] flex items-center justify-center px-4",
                        children: [(0, t.jsx)(o.m.a, {
                            "aria-hidden": !0,
                            tabIndex: -1,
                            href: f,
                            "data-link-location": ec.trackingLocation.wayfinderDismissOutside,
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
                                duration: h
                            }
                        }), (0, t.jsx)(ed.FocusScope, {
                            contain: !0,
                            restoreFocus: !0,
                            autoFocus: !0,
                            children: (0, t.jsx)("div", {
                                ...s,
                                ref: n,
                                className: "contents",
                                children: (0, t.jsxs)(o.m.div, {
                                    role: "dialog",
                                    "aria-modal": "true",
                                    "aria-labelledby": u,
                                    tabIndex: -1,
                                    className: "relative z-10 flex w-full max-w-[804px] flex-col items-center gap-6 overflow-hidden rounded-2xl bg-mango-black p-7",
                                    initial: {
                                        opacity: 0,
                                        scale: m ? 1 : .95
                                    },
                                    animate: {
                                        opacity: 1,
                                        scale: 1
                                    },
                                    transition: {
                                        duration: h
                                    },
                                    children: [(0, t.jsx)("h2", {
                                        id: u,
                                        className: (0, x.default)(eu, "text-center"),
                                        children: a
                                    }), (0, t.jsx)("div", {
                                        className: "flex w-full flex-col gap-2 lg:flex-row",
                                        children: l.map((e, a) => (0, t.jsx)(em, {
                                            card: e,
                                            index: a
                                        }, `${e.href}-${a}`))
                                    }), r && (0, t.jsx)("a", {
                                        href: f,
                                        role: "button",
                                        "data-link-location": ec.trackingLocation.wayfinderDismissButton,
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
        ex = ({
            title: e,
            cards: a,
            open: l = !1,
            onClose: r,
            closeLabel: n
        }) => {
            let i = (0, eo.useOverlayTriggerState)({
                isOpen: l,
                onOpenChange: e => {
                    e || r?.()
                }
            });
            return i.isOpen ? (0, t.jsx)(ef, {
                state: i,
                title: e,
                cards: a,
                closeLabel: n
            }) : null
        },
        eg = ({
            variant: e = "modal",
            ...a
        }) => "block" === e ? (0, t.jsx)(eh, {
            title: a.title,
            cards: a.cards
        }) : (0, t.jsx)(ex, {
            ...a
        }),
        ep = "unity-wayfinder-dismissed";
    var ev = e.i(535749),
        eb = e.i(779576),
        ej = e.i(123468),
        ey = e.i(549501),
        ew = e.i(78070),
        ek = e.i(350747),
        eN = e.i(651235);

    function eC(e) {
        var t = e.toString(16);
        return 1 === t.length ? "0" + t : t
    }

    function eL(e) {
        return "#" + e.map(eC).join("")
    }

    function eS(e, t, a) {
        for (var l = 0; l < a.length; l++)
            if (function(e, t, a) {
                    var l, r, n, i, s, o;
                    switch (a.length) {
                        case 3:
                            if (l = e, r = t, n = a, 255 !== l[r + 3] || l[r] === n[0] && l[r + 1] === n[1] && l[r + 2] === n[2]) return !0;
                            break;
                        case 4:
                            if (i = e, s = t, o = a, i[s + 3] && o[3] ? i[s] === o[0] && i[s + 1] === o[1] && i[s + 2] === o[2] && i[s + 3] === o[3] : i[s + 3] === o[3]) return !0;
                            break;
                        case 5:
                            if (function(e, t, a) {
                                    var l = a[0],
                                        r = a[1],
                                        n = a[2],
                                        i = a[3],
                                        s = a[4],
                                        o = e[t + 3],
                                        d = eT(o, i, s);
                                    return i ? !!(!o && d || eT(e[t], l, s) && eT(e[t + 1], r, s) && eT(e[t + 2], n, s) && d) : d
                                }(e, t, a)) return !0;
                            break;
                        default:
                            return !1
                    }
                }(e, t, a[l])) return !0;
        return !1
    }

    function eT(e, t, a) {
        return e >= t - a && e <= t + a
    }

    function eM(e, t, a) {
        for (var l = {}, r = a.dominantDivider || 24, n = a.ignoredColor, i = a.step, s = [0, 0, 0, 0, 0], o = 0; o < t; o += i) {
            var d = e[o],
                c = e[o + 1],
                u = e[o + 2],
                m = e[o + 3];
            if (!(n && eS(e, o, n))) {
                var h = Math.round(d / r) + "," + Math.round(c / r) + "," + Math.round(u / r);
                l[h] ? l[h] = [l[h][0] + d * m, l[h][1] + c * m, l[h][2] + u * m, l[h][3] + m, l[h][4] + 1] : l[h] = [d * m, c * m, u * m, m, 1], s[4] < l[h][4] && (s = l[h])
            }
        }
        var f = s[0],
            x = s[1],
            g = s[2],
            p = s[3],
            v = s[4];
        return p ? [Math.round(f / p), Math.round(x / p), Math.round(g / p), Math.round(p / v)] : a.defaultColor
    }

    function eR(e, t, a) {
        for (var l = 0, r = 0, n = 0, i = 0, s = 0, o = a.ignoredColor, d = a.step, c = 0; c < t; c += d) {
            var u = e[c + 3],
                m = e[c] * u,
                h = e[c + 1] * u,
                f = e[c + 2] * u;
            !(o && eS(e, c, o)) && (l += m, r += h, n += f, i += u, s++)
        }
        return i ? [Math.round(l / i), Math.round(r / i), Math.round(n / i), Math.round(i / s)] : a.defaultColor
    }

    function eD(e, t, a) {
        for (var l = 0, r = 0, n = 0, i = 0, s = 0, o = a.ignoredColor, d = a.step, c = 0; c < t; c += d) {
            var u = e[c],
                m = e[c + 1],
                h = e[c + 2],
                f = e[c + 3];
            !(o && eS(e, c, o)) && (l += u * u * f, r += m * m * f, n += h * h * f, i += f, s++)
        }
        return i ? [Math.round(Math.sqrt(l / i)), Math.round(Math.sqrt(r / i)), Math.round(Math.sqrt(n / i)), Math.round(i / s)] : a.defaultColor
    }

    function eE(e) {
        return eB(e, "defaultColor", [0, 0, 0, 0])
    }

    function eB(e, t, a) {
        return void 0 === e[t] ? a : e[t]
    }

    function eI(e) {
        var t, a, l;
        return (t = e, "u" > typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) ? "canvas" : (a = e, eH && a instanceof OffscreenCanvas) ? "offscreencanvas" : e_(e) ? "videoframe" : (l = e, "u" > typeof ImageBitmap && l instanceof ImageBitmap) ? "imagebitmap" : e.src
    }

    function eA(e) {
        return "u" > typeof HTMLImageElement && e instanceof HTMLImageElement
    }
    var eH = "u" > typeof OffscreenCanvas;

    function e_(e) {
        return "u" > typeof VideoFrame && e instanceof VideoFrame
    }
    var eF = "u" < typeof window;

    function ez(e) {
        return Error("FastAverageColor: " + e)
    }

    function eO(e, t) {
        t || console.error(e)
    }
    var e$ = function() {
        function e() {
            this.canvas = null, this.ctx = null
        }
        return e.prototype.getColorAsync = function(e, t) {
            if (!e) return Promise.reject(ez("call .getColorAsync() without resource"));
            if ("string" == typeof e) {
                if ("u" < typeof Image) return Promise.reject(ez("resource as string is not supported in this environment"));
                var a = new Image;
                return a.crossOrigin = t && t.crossOrigin || "", a.src = e, this.bindImageEvents(a, t)
            }
            if (eA(e) && !e.complete) return this.bindImageEvents(e, t);
            var l = this.getColor(e, t);
            return l.error ? Promise.reject(l.error) : Promise.resolve(l)
        }, e.prototype.getColor = function(e, t) {
            var a, l, r, n, i, s, o, d, c = eE(t = t || {});
            if (!e) {
                var u = ez("call .getColor() without resource");
                return eO(u, t.silent), this.prepareResult(c, u)
            }
            var m = (a = function(e) {
                if (eA(e)) {
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
                } : e_(e) ? {
                    width: e.codedWidth,
                    height: e.codedHeight
                } : {
                    width: e.width,
                    height: e.height
                }
            }(e), r = eB(l = t, "left", 0), n = eB(l, "top", 0), i = eB(l, "width", a.width), s = eB(l, "height", a.height), o = i, d = s, "precision" === l.mode || (i > s ? d = Math.round((o = 100) / (i / s)) : o = Math.round((d = 100) / (s / i)), (o > i || d > s || o < 10 || d < 10) && (o = i, d = s)), {
                srcLeft: r,
                srcTop: n,
                srcWidth: i,
                srcHeight: s,
                destWidth: o,
                destHeight: d
            });
            if (!m.srcWidth || !m.srcHeight || !m.destWidth || !m.destHeight) {
                var u = ez('incorrect sizes for resource "'.concat(eI(e), '"'));
                return eO(u, t.silent), this.prepareResult(c, u)
            }
            if (!this.canvas && (this.canvas = eF ? eH ? new OffscreenCanvas(1, 1) : null : document.createElement("canvas"), !this.canvas)) {
                var u = ez("OffscreenCanvas is not supported in this browser");
                return eO(u, t.silent), this.prepareResult(c, u)
            }
            if (!this.ctx) {
                if (this.ctx = this.canvas.getContext("2d", {
                        willReadFrequently: !0
                    }), !this.ctx) {
                    var u = ez("Canvas Context 2D is not supported in this browser");
                    return eO(u, t.silent), this.prepareResult(c)
                }
                this.ctx.imageSmoothingEnabled = !1
            }
            this.canvas.width = m.destWidth, this.canvas.height = m.destHeight;
            try {
                this.ctx.clearRect(0, 0, m.destWidth, m.destHeight), this.ctx.drawImage(e, m.srcLeft, m.srcTop, m.srcWidth, m.srcHeight, 0, 0, m.destWidth, m.destHeight);
                var h = this.ctx.getImageData(0, 0, m.destWidth, m.destHeight).data;
                return this.prepareResult(this.getColorFromArray4(h, t))
            } catch (a) {
                var u = ez("security error (CORS) for resource ".concat(eI(e), ".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"));
                return eO(u, t.silent), t.silent || console.error(a), this.prepareResult(c, u)
            }
        }, e.prototype.getColorFromArray4 = function(e, t) {
            t = t || {};
            var a, l, r = e.length,
                n = eE(t);
            if (r < 4) return n;
            var i = 4 * (t.step || 1);
            switch (t.algorithm || "sqrt") {
                case "simple":
                    a = eR;
                    break;
                case "sqrt":
                    a = eD;
                    break;
                case "dominant":
                    a = eM;
                    break;
                default:
                    throw ez("".concat(t.algorithm, " is unknown algorithm"))
            }
            return a(e, r - r % 4, {
                defaultColor: n,
                ignoredColor: (l = t.ignoredColor) ? Array.isArray(l[0]) ? l : [l] : [],
                step: i,
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
                hex: eL(a),
                hexa: eL(e),
                isDark: r,
                isLight: !r,
                error: t
            }
        }, e.prototype.destroy = function() {
            this.canvas && (this.canvas.width = 1, this.canvas.height = 1, this.canvas = null), this.ctx = null
        }, e.prototype.bindImageEvents = function(e, t) {
            var a = this;
            return new Promise(function(l, r) {
                var n = function() {
                        o();
                        var n = a.getColor(e, t);
                        n.error ? r(n.error) : l(n)
                    },
                    i = function() {
                        o(), r(ez('Error loading image "'.concat(e.src, '"')))
                    },
                    s = function() {
                        o(), r(ez('Image "'.concat(e.src, '" loading aborted')))
                    },
                    o = function() {
                        e.removeEventListener("load", n), e.removeEventListener("error", i), e.removeEventListener("abort", s)
                    };
                e.addEventListener("load", n), e.addEventListener("error", i), e.addEventListener("abort", s)
            })
        }, e
    }();
    let eP = e => [parseInt(e.slice(1, 3), 16), parseInt(e.slice(3, 5), 16), parseInt(e.slice(5, 7), 16)],
        eU = (e, t) => {
            let a, l, r, [n, i, s] = eP(e),
                o = e => Math.max(0, Math.min(255, Math.round(e + e * t / 100)));
            return a = o(n), l = o(i), r = o(s), `#${a.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}`
        },
        eW = async e => {
            let t = new e$;
            try {
                let a = (await t.getColorAsync(e, {
                        ignoredColor: [
                            [255, 255, 255, 255],
                            [0, 0, 0, 255]
                        ]
                    })).hex,
                    l = (e => {
                        let [t, a, l] = eP(e);
                        return (.299 * t + .587 * a + .114 * l) / 255 < .6
                    })(a),
                    r = eU(a, -15),
                    n = eU(a, -8);
                return {
                    isDark: l,
                    mainColor: a,
                    dark: r,
                    light: n
                }
            } finally {
                t.destroy()
            }
        }, eq = e => {
            let [a, l] = (0, i.useState)(!1), r = (0, x.default)("overflow-hidden md:hidden transition-all duration-500 ease-in-out", {
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
                    }), (0, t.jsx)(ew.default, {
                        className: "col-span-1 col-start-7 hidden justify-self-end md:block",
                        variant: "secondary",
                        icon: (0, t.jsx)(ev.X, {}),
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
                            className: r,
                            children: (0, t.jsx)("p", {
                                className: "mango-text-body-base pb-8 md:col-span-3",
                                children: e.description?.value
                            })
                        }), e.description && e.action && (0, t.jsxs)("div", {
                            className: "flex gap-2",
                            children: [e.description?.readMoreLabel && (0, t.jsx)(ew.default, {
                                className: "md:hidden",
                                onClick: () => l(!a),
                                variant: "secondary",
                                icon: a ? (0, t.jsx)(eb.CaretUp, {}) : (0, t.jsx)(ej.CaretDown, {}),
                                children: e.description?.readMoreLabel
                            }), (0, t.jsx)("div", {
                                children: (0, t.jsx)(ew.default, {
                                    href: e.action?.href,
                                    target: e.action?.target,
                                    variant: "primary",
                                    icon: (0, t.jsx)(ey.ArrowRight, {}),
                                    "data-link-location": ec.trackingLocation.deluxeAnnouncementBannerAction,
                                    "data-link-id": "deluxe-banner-action",
                                    children: e.action?.label
                                })
                            })]
                        })]
                    })]
                })]
            })
        }, eV = ({
            image: e,
            video: a
        }) => a ? (0, t.jsx)(ek.default, {
            src: a.src,
            mode: "manual",
            poster: e,
            posterSizes: "(max-width: 768px) 75vw, (max-width: 1024px) 42vw, 33vw",
            controls: "bottom-right",
            className: "relative aspect-video min-h-full w-full overflow-hidden rounded-lg"
        }) : (0, t.jsx)("div", {
            className: "relative aspect-video min-h-full w-full overflow-hidden rounded-lg",
            children: (0, t.jsx)(s.default, {
                src: e.src,
                alt: e.alt,
                placeholder: "blur",
                blurDataURL: e.placeholder,
                fill: !0,
                sizes: "(max-width: 768px) 75vw, (max-width: 1024px) 42vw, 33vw",
                className: "object-cover"
            })
        }), eG = e => {
            let [a, l] = (0, i.useState)(e.animate ?? !1), {
                isDark: r,
                dark: n,
                light: s
            } = (e => {
                let [t, a] = (0, i.useState)(!1), [l, r] = (0, i.useState)(null), [n, s] = (0, i.useState)(null), [o, d] = (0, i.useState)(null), [c, u] = (0, i.useState)(null), [m, h] = (0, i.useState)(null), f = (0, i.useCallback)(() => {
                    s(null), d(null), u(null), h(null)
                }, []), x = (0, i.useCallback)(async e => {
                    if (!e) return void f();
                    a(!0), r(null);
                    try {
                        let t = await eW(e);
                        s(t.isDark), d(t.mainColor), u(t.dark), h(t.light), a(!1)
                    } catch (e) {
                        r(e instanceof Error ? e.message : "Failed to extract color"), f(), a(!1)
                    }
                }, [f]);
                return (0, i.useEffect)(() => {
                    e ? x(e) : (r(null), f(), a(!1))
                }, [e, x, f]), {
                    isLoading: t,
                    error: l,
                    isDark: n,
                    mainColor: o,
                    dark: c,
                    light: m
                }
            })(e.image.placeholder);
            (0, i.useEffect)(() => {
                if (e.animate) {
                    let e = setTimeout(() => {
                        l(!1)
                    }, 1e3);
                    return () => clearTimeout(e)
                }
            }, [e.animate]);
            let o = (0, x.default)("relative grid grid-cols-4 gap-x-2 md:gap-x-5 md:grid-cols-12 p-4 md:p-6 z-10"),
                d = e.hasBackgroundGradient && n && s ? {
                    background: `linear-gradient(94deg, ${n} 7%, ${s} 105.47%)`
                } : void 0,
                c = e.hasBackgroundGradient && null !== r ? r ? "dark" : "light" : e.theme ?? "light";
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: (0, x.default)("fixed inset-0 z-40 bg-black/30", e.animate && "transition-opacity duration-300", e.animate && a ? "opacity-0" : "opacity-100")
                }), (0, t.jsx)(eN.default, {
                    className: (0, x.default)("fixed left-0 z-40 w-full bg-white dark:bg-black", e.animate && "transition-transform duration-300 ease-out", e.animate && a ? "-translate-y-[calc(100%+5rem)]" : "translate-y-0"),
                    style: d,
                    theme: c,
                    defaultBlockPadding: {
                        top: "pt-0",
                        bottom: "pb-0"
                    },
                    children: (0, t.jsx)("div", {
                        className: "mango-container",
                        children: (0, t.jsxs)("div", {
                            className: o,
                            children: [(0, t.jsx)("div", {
                                className: "col-span-3 md:col-span-5",
                                children: (0, t.jsx)(eV, {
                                    image: e.image,
                                    video: e.video
                                })
                            }), (0, t.jsx)(eq, {
                                ...e
                            }), (0, t.jsx)("div", {
                                className: "absolute bottom-[-4.25rem] left-[50%] translate-x-[-50%] md:hidden",
                                children: (0, t.jsx)(ew.default, {
                                    variant: "secondary",
                                    icon: (0, t.jsx)(ev.X, {}),
                                    size: "lg",
                                    onClick: e.onClose
                                })
                            })]
                        })
                    })
                })]
            })
        };
    var eK = e.i(779712);
    let eZ = {
            agendaBlock: _.default,
            alert: l.default,
            alternateNavigation: r.default,
            alternateNavigationAnchor: n.default,
            animatedHeadliner: ({
                title: e,
                subtitle: a,
                image: l,
                theme: r,
                description: n,
                brandfolder: i,
                actions: s,
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
                        src: i?.muxHLSURL || ""
                    },
                    headline: {
                        actions: s ? s.map(e => ({
                            title: e.title || "",
                            href: e.link?.linkReference?.href.current || "",
                            target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                        })) : void 0,
                        description: n || void 0,
                        title: a || "",
                        theme: "dark" === r ? "dark" : "light"
                    }
                })
            }),
            announcementBanner: b.default,
            benefits: j.default,
            uniteCards: w.default,
            carousel: D.default,
            callout: y.default,
            fullScreenVisual: k.FullScreenVisualBlockSuspense,
            fullWidthBlock: N.default,
            faqs: S.default,
            headliner: C.default,
            hero: L.default,
            htmlInfoTable: Y.default,
            keyFigures: z.default,
            quote: T.default,
            statement: M.default,
            footnote: R.default,
            logosBank: E.default,
            featuresList: B.default,
            title: I.default,
            testimonialsBlock: A.default,
            animatedFeaturesList: F.default,
            mangoDeluxeAnnouncementBanner: ({
                title: e,
                description: a,
                action: l,
                settings: r,
                hasBackgroundGradient: n,
                image: s,
                video: o,
                details: d
            }) => {
                let [c, u] = (0, i.useState)(!1), m = `banner_dismissed_until_${e.replace(/\s+/g,"_").toLowerCase()}`;
                return ((0, i.useEffect)(() => {
                    let e = (() => {
                        try {
                            let e = localStorage.getItem(m);
                            return e ? Number(e) : null
                        } catch {
                            return null
                        }
                    })();
                    e && e > Date.now() || u(!0)
                }, [m]), r?.isHidden) ? null : (0, t.jsx)(t.Fragment, {
                    children: c && (0, t.jsx)(eG, {
                        animate: !0,
                        hasBackgroundGradient: n || !1,
                        title: e,
                        theme: r?.theme === "dark" ? "dark" : "light",
                        description: a ?? void 0,
                        action: l ? {
                            href: l.fieldLink?.linkReference?.href?.current ?? "",
                            target: l.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self",
                            label: l.text ?? ""
                        } : void 0,
                        image: {
                            src: s ? (0, eK.urlForImage)(s)?.fit("crop").width(1200).height(750).dpr(2).url() ?? "" : "",
                            alt: s?.alt ?? "",
                            placeholder: s?.asset?.metadata?.lqip ?? ""
                        },
                        video: o?.muxHLSURL ? {
                            src: o.muxHLSURL
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
            },
            media: O.default,
            richText: $.default,
            events: ({
                upcomingEvents: e,
                pastEvents: a,
                displayPastEvents: l,
                action: r,
                upcomingEventsLabel: n,
                pastEventsLabel: i,
                startDateLabel: s,
                endDateLabel: o,
                timezoneLabel: d,
                locationLabel: c,
                upcomingEventsHeading: u,
                isHidden: m
            }) => {
                let h = (0, Z.useLocale)(),
                    f = e => ({
                        title: e.name ?? "",
                        description: (0, t.jsx)(U.PortableText, {
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
                            upcomingEventsLabel: n ?? "",
                            pastEventsLabel: i ?? "",
                            startDateLabel: s ?? "",
                            endDateLabel: o ?? "",
                            timezoneLabel: d ?? "",
                            locationLabel: c ?? "",
                            locale: h
                        })
                    })
                })
            },
            iframeBlock: P.default,
            planCards: H.default,
            bentoCards: X.default,
            videosShowcase: J.default,
            cards: Q.default,
            fullPageScroller: ({
                fullPageBlocks: e,
                isHidden: a
            }) => (0, t.jsx)(er, {
                children: e.map(({
                    title: l,
                    brandfolder: r,
                    image: n,
                    description: i,
                    actions: s
                }, o) => {
                    let d = {
                            src: r?.muxHLSURL || ""
                        },
                        c = {
                            src: n?.asset.url || "",
                            placeholder: n?.asset.metadata?.blurHash || ""
                        };
                    return (0, t.jsx)(t.Fragment, {
                        children: !a && (0, t.jsx)(er.Block, {
                            index: o,
                            total: e.length,
                            title: l || "",
                            description: (0, t.jsx)(U.PortableText, {
                                value: i
                            }),
                            actions: s?.map(e => ({
                                title: e.text || "",
                                href: e.link?.href.current || ""
                            })) || [],
                            image: c,
                            video: d
                        }, `full-page-scroller-block-${l}-${o}`)
                    })
                })
            }),
            socialProof: ({
                items: e,
                isHidden: a
            }) => (0, t.jsx)(t.Fragment, {
                children: !a && (0, t.jsx)(en, {
                    children: e?.map((e, a) => (0, t.jsxs)(en.Item, {
                        children: [e.image?.file?.asset.url && (0, t.jsx)(s.default, {
                            src: e.image?.file?.asset.url,
                            alt: e.image?.alt ?? "",
                            width: 24,
                            height: 24
                        }), (0, t.jsx)(q.default, {
                            children: (0, t.jsx)(U.PortableText, {
                                value: e.text
                            })
                        })]
                    }, `social-proof-item-${a}`))
                })
            }),
            wayfinder: ({
                isHidden: e,
                variant: a,
                title: l,
                closeLabel: r,
                openDelaySeconds: n,
                cards: s
            }) => {
                let o = "modal" === a,
                    [d, c] = (0, i.useState)(!1);
                if ((0, i.useEffect)(() => {
                        if (!o || e) return;
                        let t = !1;
                        try {
                            t = !!sessionStorage.getItem(ep)
                        } catch {}
                        if (t) return;
                        let a = setTimeout(() => c(!0), (n ?? 5) * 1e3);
                        return () => clearTimeout(a)
                    }, [o, e, n]), e) return null;
                let u = () => {
                        try {
                            sessionStorage.setItem(ep, Date.now().toString())
                        } catch {}
                    },
                    m = s?.map(e => ({
                        title: e.title ?? "",
                        description: e.description ?? "",
                        href: e.fieldLink?.linkReference?.href?.current ?? "",
                        onClick: o ? u : void 0
                    })) ?? [];
                return o ? (0, t.jsx)(eg, {
                    variant: "modal",
                    title: l ?? "",
                    cards: m,
                    open: d,
                    onClose: () => {
                        u(), c(!1)
                    },
                    closeLabel: r ?? void 0
                }) : (0, t.jsx)(eg, {
                    variant: "block",
                    title: l ?? "",
                    cards: m
                })
            }
        },
        eX = ({
            blocks: e
        }) => (0, t.jsx)(a.default, {
            blocks: e,
            blockMap: eZ
        });
    var eJ = e.i(814507),
        eY = e.i(129824),
        eQ = e.i(246916);
    e.s(["default", 0, function({
        data: e
    }) {
        let {
            shouldDisplayMTBanner: a,
            updatedBlocks: l
        } = (0, eQ.useMTBanner)(e, eY.L1_PAGES_NO_MT_BANNER);
        return (0, t.jsxs)(t.Fragment, {
            children: [e.announcementBanner?.hasAnnouncementBanner && (0, t.jsx)(eJ.default, {
                rounded: !0,
                action: {
                    title: e.announcementBanner.announcementBannerContent?.action?.text || "",
                    href: e.announcementBanner.announcementBannerContent?.action?.fieldLink?.linkReference?.href?.current || "",
                    target: e.announcementBanner.announcementBannerContent?.action?.fieldLink?.linkReference?.target || "_self"
                },
                className: "absolute top-0 left-0 z-20",
                children: e.announcementBanner.announcementBannerContent?.title
            }), (0, t.jsx)(eX, {
                blocks: a ? l : e.blocks
            })]
        })
    }], 255018)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7ff0cb51-83c5-512d-91e2-32457621c58b")
    } catch (e) {}
}();
//# debugId=7ff0cb51-83c5-512d-91e2-32457621c58b