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
    [7013], {
        7013: (e, t, r) => {
            r.d(t, {
                A: () => es
            });
            var a = r(80475),
                n = r(88491),
                o = r(3921),
                l = r(99419),
                s = r(14433),
                i = r(23364),
                d = r(92572),
                c = r(27331),
                u = r(81359),
                m = r(94720),
                h = r(13328),
                g = r(37640),
                p = r(98822),
                f = r(40006),
                x = r(16335),
                v = r(18350);
            let b = (0, p.default)(() => Promise.all([r.e(87770), r.e(89058)]).then(r.t.bind(r, 23399, 23)), {
                    loadableGenerated: {
                        webpack: () => [23399]
                    },
                    ssr: !1
                }),
                y = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                j = ({
                    title: e,
                    headline: t,
                    image: r,
                    video: o
                }) => {
                    let l = (0, n.useRef)(null),
                        s = (0, c.W)(l, {
                            once: !0
                        }),
                        i = (0, u.I)(),
                        [p, j] = (0, n.useState)(!1),
                        {
                            scrollYProgress: k
                        } = (0, m.L)({
                            target: l,
                            offset: ["start start", "end end"]
                        }),
                        w = (0, h.G)(k, [0, 1], ["25vh", "100vh"]),
                        A = (0, h.G)(k, [0, 1], ["25%", "100%"]),
                        N = (0, h.G)(k, [0, 1], ["10vh", "0vh"]),
                        L = (0, h.G)(k, [0, 1], ["-10vh", "-47.5vh"]),
                        S = (0, h.G)(k, [0, .9], [1, 0]),
                        C = (0, h.G)(k, [0, .9], [0, 1]),
                        B = (0, h.G)(k, [0, 1], ["5vh", "40vh"]),
                        M = (0, x.A)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                            "opacity-0": p && !i && s && o.src
                        });
                    return (0, a.jsx)(v.A, {
                        "data-sentry-element": "FramerMotionLazy",
                        "data-sentry-component": "AnimatedHeadliner",
                        "data-sentry-source-file": "AnimatedHeadliner.tsx",
                        children: (0, a.jsx)("div", {
                            ref: l,
                            className: "relative h-[200vh]",
                            children: (0, a.jsxs)("div", {
                                className: "sticky top-[0px] flex h-screen flex-col items-center justify-center bg-black",
                                children: [(0, a.jsx)(g.m.div, {
                                    style: {
                                        top: L,
                                        opacity: S
                                    },
                                    className: "relative",
                                    "data-sentry-element": "m.div",
                                    "data-sentry-source-file": "AnimatedHeadliner.tsx",
                                    children: (0, a.jsx)(f.A, {
                                        title: e,
                                        fullScreen: !1,
                                        titleSize: "small",
                                        "data-sentry-element": "Headliner",
                                        "data-sentry-source-file": "AnimatedHeadliner.tsx"
                                    })
                                }), (0, a.jsx)(g.m.div, {
                                    style: {
                                        opacity: C,
                                        bottom: B
                                    },
                                    className: "absolute z-20",
                                    "data-sentry-element": "m.div",
                                    "data-sentry-source-file": "AnimatedHeadliner.tsx",
                                    children: (0, a.jsx)(f.A, {
                                        title: t.title,
                                        actions: t.actions,
                                        titleSize: "small",
                                        fullScreen: !1,
                                        "data-sentry-element": "Headliner",
                                        "data-sentry-source-file": "AnimatedHeadliner.tsx"
                                    })
                                }), (0, a.jsxs)(g.m.div, {
                                    style: {
                                        height: w,
                                        width: A,
                                        bottom: N
                                    },
                                    className: "absolute overflow-hidden rounded-[8px]",
                                    "data-sentry-element": "m.div",
                                    "data-sentry-source-file": "AnimatedHeadliner.tsx",
                                    children: [r && r.src && (0, a.jsx)(d.default, {
                                        fill: !0,
                                        alt: r.alt,
                                        src: r.src,
                                        placeholder: "blur",
                                        blurDataURL: r.placeholder,
                                        className: M
                                    }), s && !i && o?.src && (0, a.jsx)(b, {
                                        url: o.src,
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
                                                maxMaxBufferLength: y.maxMaxBufferLength,
                                                startLevel: y.qualityStartLevel
                                            }
                                        }
                                    })]
                                })]
                            })
                        })
                    })
                };
            var k = r(23759),
                w = r(91120),
                A = r(62329),
                N = r(79394),
                L = r(75180),
                S = r(69252),
                C = r(65407),
                B = r(38643),
                M = r(92921),
                D = r(77469),
                H = r(99832),
                E = r(24876),
                T = r(11239),
                I = r(43468),
                P = r(78896),
                F = r(71484),
                R = r(48085),
                $ = r(47481),
                _ = r(63730),
                q = r(37911),
                z = r(20320),
                W = r(39605),
                G = r(94802),
                O = r(34875),
                U = r(95719),
                K = r(18227),
                V = r(2340);
            let Z = {
                    PST: "America/Los_Angeles",
                    EST: "America/New_York",
                    UTC: "UTC",
                    BST: "Europe/London",
                    CET: "Europe/Paris",
                    CST: "America/Chicago",
                    JST: "Asia/Tokyo"
                },
                Y = ({
                    title: e,
                    description: t,
                    action: r,
                    startDate: o,
                    endDate: l,
                    location: s,
                    defaultOpen: i,
                    startTime: d,
                    endTime: c,
                    timezone: u,
                    startDateLabel: m,
                    endDateLabel: h,
                    timezoneLabel: g,
                    locationLabel: p,
                    locale: f,
                    heading: x = "h3"
                }) => {
                    let [v, b] = (0, n.useState)(i), y = u ? Z[u.toUpperCase()] || u : void 0, j = new Intl.DateTimeFormat(f, {
                        month: "short",
                        day: "numeric",
                        timeZone: y
                    }).format(new Date(o)), k = new Intl.DateTimeFormat(f, {
                        month: "long",
                        day: "numeric",
                        timeZone: y
                    }).format(new Date(o)), w = l ? new Intl.DateTimeFormat(f, {
                        month: "long",
                        day: "numeric",
                        timeZone: y
                    }).format(new Date(l)) : null;
                    return (0, a.jsxs)("details", {
                        open: v,
                        onToggle: e => b(e.currentTarget.open),
                        className: "rounded-[8px] bg-gray-100",
                        "data-sentry-component": "Event",
                        "data-sentry-source-file": "Events.tsx",
                        children: [(0, a.jsxs)("summary", {
                            className: "flex cursor-pointer items-end p-6",
                            children: [(0, a.jsxs)("div", {
                                className: "flex w-full flex-col md:flex-row md:items-center",
                                children: [(0, a.jsx)("p", {
                                    className: "text-small min-w-[150px] shrink-0 basis-[10%] lg:basis-[20%] xl:basis-[25%]",
                                    children: j
                                }), (0, a.jsx)(x, {
                                    className: "text-body-bold text-gray-800",
                                    "data-sentry-element": "TitleTag",
                                    "data-sentry-source-file": "Events.tsx",
                                    children: e
                                })]
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)("span", {
                                    className: "text-body inline-block w-[1.2rem] text-gray-700",
                                    children: v ? "-" : "+"
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "mt-4 flex w-full flex-col pr-6 pb-6 pl-6 md:flex-row",
                            children: [(0, a.jsx)("div", {
                                className: "hidden min-w-[150px] shrink-0 basis-[10%] md:block lg:basis-[20%] xl:basis-[25%]"
                            }), (0, a.jsxs)("div", {
                                className: "mr-[7.5%] flex w-full flex-col border-t border-gray-300 pt-5 lg:flex-row",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex grow flex-col gap-2",
                                    children: [k && (0, a.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, a.jsx)("p", {
                                            className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                            children: m
                                        }), (0, a.jsx)("p", {
                                            className: "loco-text-body-md text-gray-600",
                                            children: d ? `${k}, ${d}` : k
                                        })]
                                    }), w && (0, a.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, a.jsx)("p", {
                                            className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                            children: h
                                        }), (0, a.jsx)("p", {
                                            className: "loco-text-body-md text-gray-600",
                                            children: c ? `${w}, ${c}` : w
                                        })]
                                    }), u && (d || c) && (0, a.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, a.jsx)("p", {
                                            className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                            children: g
                                        }), (0, a.jsx)("p", {
                                            className: "loco-text-body-md text-gray-600",
                                            children: u.toUpperCase()
                                        })]
                                    }), s && (0, a.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, a.jsx)("p", {
                                            className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                            children: p
                                        }), (0, a.jsx)("p", {
                                            className: "loco-text-body-md text-gray-600",
                                            children: s
                                        })]
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: "mt-5 mr-[10%] flex flex-col justify-between md:w-[80%] lg:mt-0 lg:w-[35%]",
                                    children: [t && (0, a.jsx)("div", {
                                        className: "loco-text-body text-black",
                                        children: (0, a.jsx)(V.A, {
                                            children: t
                                        })
                                    }), r && (0, a.jsx)("div", {
                                        className: "mt-8",
                                        children: (0, a.jsx)(K.A, {
                                            href: r.href,
                                            variant: "primary",
                                            target: r.target,
                                            outlined: !0,
                                            rounded: !0,
                                            hasArrow: !0,
                                            children: r.title
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                J = ({
                    upcomingEvents: e,
                    pastEvents: t,
                    action: r,
                    displayPastEvents: o,
                    upcomingEventsLabel: l,
                    pastEventsLabel: s,
                    startDateLabel: i,
                    endDateLabel: d,
                    timezoneLabel: c,
                    locationLabel: u,
                    locale: m = "en-US",
                    upcomingEventsHeading: h = "h3"
                }) => {
                    let [g, p] = (0, n.useState)("upcoming");
                    return (0, a.jsxs)("div", {
                        "data-sentry-component": "Events",
                        "data-sentry-source-file": "Events.tsx",
                        children: [o && t.length > 0 && (0, a.jsxs)("div", {
                            className: "flex w-full justify-center gap-5",
                            children: [(0, a.jsx)(K.A, {
                                rounded: !0,
                                outlined: "upcoming" != g,
                                onPress: () => {
                                    p("upcoming")
                                },
                                size: "small",
                                children: l
                            }), (0, a.jsx)(K.A, {
                                rounded: !0,
                                outlined: "past" != g,
                                onPress: () => {
                                    p("past")
                                },
                                size: "small",
                                children: s
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "mt-16 flex flex-col gap-2",
                            children: ["upcoming" === g && e.map((e, t) => (0, a.jsx)(Y, {
                                startDateLabel: i,
                                endDateLabel: d,
                                timezoneLabel: c,
                                locationLabel: u,
                                defaultOpen: 0 === t,
                                locale: m,
                                heading: h,
                                ...e
                            }, t)), "past" === g && t.map((e, t) => (0, a.jsx)(Y, {
                                startDateLabel: i,
                                endDateLabel: d,
                                timezoneLabel: c,
                                locationLabel: u,
                                locale: m,
                                heading: h,
                                ...e
                            }, t))]
                        }), r && (0, a.jsx)("div", {
                            className: "mt-8 text-center",
                            children: (0, a.jsx)(K.A, {
                                href: r.href,
                                variant: "primary",
                                target: r.target,
                                outlined: !0,
                                rounded: !0,
                                hasArrow: !0,
                                children: r.title
                            })
                        })]
                    })
                };
            var Q = r(87885),
                X = r(42616),
                ee = r(69962),
                et = r(10720),
                er = r(11146),
                ea = r(74305),
                en = r(69651),
                eo = r(26146);
            let el = {
                    agendaBlock: _.A,
                    alert: l.A,
                    alternateNavigation: s.A,
                    alternateNavigationAnchor: i.A,
                    animatedHeadliner: ({
                        title: e,
                        subtitle: t,
                        image: r,
                        theme: n,
                        description: o,
                        brandfolder: l,
                        actions: s,
                        isHidden: i
                    }) => (0, a.jsx)(a.Fragment, {
                        children: !i && (0, a.jsx)(j, {
                            title: e || "",
                            image: {
                                src: r?.file?.asset.url || "",
                                alt: r?.alt || "",
                                placeholder: r?.file?.asset?.metadata?.lqip || ""
                            },
                            video: {
                                src: l?.muxHLSURL || ""
                            },
                            headline: {
                                actions: s ? s.map(e => ({
                                    title: e.title || "",
                                    href: e.link?.linkReference?.href.current || "",
                                    target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                                })) : void 0,
                                description: o || void 0,
                                title: t || "",
                                theme: "dark" === n ? "dark" : "light"
                            }
                        })
                    }),
                    announcementBanner: k.A,
                    benefits: w.A,
                    uniteCards: N.A,
                    carousel: T.A,
                    callout: A.A,
                    fullScreenVisual: L.D,
                    fullWidthBlock: S.A,
                    faqs: M.A,
                    headliner: C.A,
                    hero: B.A,
                    htmlInfoTable: et.A,
                    keyFigures: z.A,
                    quote: D.A,
                    statement: H.A,
                    footnote: E.A,
                    logosBank: I.A,
                    featuresList: P.A,
                    title: F.A,
                    testimonialsBlock: R.A,
                    animatedFeaturesList: q.A,
                    mangoDeluxeAnnouncementBanner: eo.A,
                    media: W.A,
                    richText: G.A,
                    events: ({
                        upcomingEvents: e,
                        pastEvents: t,
                        displayPastEvents: r,
                        action: n,
                        upcomingEventsLabel: o,
                        pastEventsLabel: l,
                        startDateLabel: s,
                        endDateLabel: i,
                        timezoneLabel: d,
                        locationLabel: c,
                        upcomingEventsHeading: u,
                        isHidden: m
                    }) => {
                        let h = (0, Q.useLocale)(),
                            g = e => ({
                                title: e.name ?? "",
                                description: (0, a.jsx)(U.RK, {
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
                        return (0, a.jsx)(a.Fragment, {
                            children: !m && (0, a.jsx)("div", {
                                className: "container py-12",
                                children: (0, a.jsx)(J, {
                                    upcomingEventsHeading: "h2" === u || "h3" === u || "h4" === u ? u : "h3",
                                    action: (e => e ? {
                                        title: e.title ?? "",
                                        href: e.link?.linkReference?.href.current ?? "",
                                        target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                                    } : null)(n) || void 0,
                                    upcomingEvents: e ? e.map(g) : [],
                                    pastEvents: t ? t.map(g) : [],
                                    displayPastEvents: r || !1,
                                    upcomingEventsLabel: o ?? "",
                                    pastEventsLabel: l ?? "",
                                    startDateLabel: s ?? "",
                                    endDateLabel: i ?? "",
                                    timezoneLabel: d ?? "",
                                    locationLabel: c ?? "",
                                    locale: h
                                })
                            })
                        })
                    },
                    iframeBlock: O.A,
                    planCards: $.A,
                    bentoCards: X.A,
                    videosShowcase: ee.A,
                    cards: er.A,
                    fullPageScroller: ea.A,
                    socialProof: en.A
                },
                es = ({
                    blocks: e
                }) => (0, a.jsx)(o.A, {
                    blocks: e,
                    blockMap: el,
                    "data-sentry-element": "Blocks",
                    "data-sentry-component": "L1PageBlocks",
                    "data-sentry-source-file": "L1.tsx"
                })
        },
        9224: (e, t, r) => {
            r.d(t, {
                N_: () => a
            });
            let {
                Link: a,
                redirect: n,
                usePathname: o,
                useRouter: l
            } = (0, r(13223).xp)({
                locales: ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"],
                localePrefix: "as-needed",
                defaultLocale: "en"
            })
        },
        26146: (e, t, r) => {
            r.d(t, {
                A: () => j
            });
            var a = r(80475),
                n = r(88491),
                o = r(98822),
                l = r(92572),
                s = r(16335),
                i = r(38373),
                d = r(93897),
                c = r(56329);
            let u = {
                    DARK: -15,
                    LIGHT: -8
                },
                m = e => [parseInt(e.slice(1, 3), 16), parseInt(e.slice(3, 5), 16), parseInt(e.slice(5, 7), 16)],
                h = (e, t) => {
                    let r, a, n, [o, l, s] = m(e),
                        i = e => Math.max(0, Math.min(255, Math.round(e + e * t / 100)));
                    return r = i(o), a = i(l), n = i(s), `#${r.toString(16).padStart(2,"0")}${a.toString(16).padStart(2,"0")}${n.toString(16).padStart(2,"0")}`
                },
                g = async e => {
                    let t = new c.D;
                    try {
                        let r = (await t.getColorAsync(e, {
                                ignoredColor: [
                                    [255, 255, 255, 255],
                                    [0, 0, 0, 255]
                                ]
                            })).hex,
                            a = (e => {
                                let [t, r, a] = m(e);
                                return (.299 * t + .587 * r + .114 * a) / 255 < .6
                            })(r),
                            n = h(r, u.DARK),
                            o = h(r, u.LIGHT);
                        return {
                            isDark: a,
                            mainColor: r,
                            dark: n,
                            light: o
                        }
                    } finally {
                        t.destroy()
                    }
                };
            var p = r(94909);
            let f = (0, o.default)(() => Promise.all([r.e(87770), r.e(89058)]).then(r.t.bind(r, 23399, 23)), {
                    loadableGenerated: {
                        webpack: () => [23399]
                    },
                    ssr: !1
                }),
                x = e => {
                    let [t, r] = (0, n.useState)(!1), o = (0, s.A)("overflow-hidden md:hidden transition-all duration-500 ease-in-out", {
                        "max-h-0": !t,
                        "max-h-96": t
                    });
                    return (0, a.jsxs)("div", {
                        className: "col-span-4 mt-7 flex flex-col gap-7 md:col-span-7 md:mt-0 md:grid lg:grid-cols-7",
                        "data-sentry-component": "Content",
                        "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx",
                        children: [(0, a.jsxs)("div", {
                            className: "col-span-7 grid grid-cols-7 gap-x-5",
                            children: [(0, a.jsx)("p", {
                                className: "mango-text-heading-md col-span-5",
                                children: e.title
                            }), (0, a.jsx)(i.A, {
                                className: "col-span-1 col-start-7 hidden justify-self-end md:block",
                                variant: "secondary",
                                icon: "x",
                                size: "lg",
                                onClick: e.onClose,
                                "data-sentry-element": "Button",
                                "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx"
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "flex flex-col self-end md:col-span-7 md:grid md:grid-cols-7 md:gap-0 md:gap-x-5",
                            children: [e.description && (0, a.jsx)("div", {
                                className: "hidden md:col-span-3 md:flex",
                                children: (0, a.jsx)("p", {
                                    className: "mango-text-body-base pb-8 md:self-end md:pb-0",
                                    children: e.description?.value
                                })
                            }), (0, a.jsxs)("div", {
                                className: "md:col-span-4 md:col-start-4 md:flex md:flex-col md:justify-between lg:col-span-3 lg:col-start-5",
                                children: [e.details && e.details.length > 0 && (0, a.jsx)("ul", {
                                    className: "flex flex-col gap-2 pb-8",
                                    children: e.details.map(e => (0, a.jsxs)("li", {
                                        className: "flex gap-5",
                                        children: [(0, a.jsx)("p", {
                                            className: "mango-text-input w-[100px]",
                                            children: e.label
                                        }), (0, a.jsx)("p", {
                                            className: "mango-text-input text-gray-600 dark:text-gray-300",
                                            children: e.value
                                        })]
                                    }, e.label))
                                }), e.description && (0, a.jsx)("div", {
                                    className: o,
                                    children: (0, a.jsx)("p", {
                                        className: "mango-text-body-base pb-8 md:col-span-3",
                                        children: e.description?.value
                                    })
                                }), e.description && e.action && (0, a.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [e.description?.readMoreLabel && (0, a.jsx)(i.A, {
                                        className: "md:hidden",
                                        onClick: () => r(!t),
                                        variant: "secondary",
                                        icon: t ? "caret-up" : "caret-down",
                                        children: e.description?.readMoreLabel
                                    }), (0, a.jsx)("div", {
                                        children: (0, a.jsx)(i.A, {
                                            href: e.action?.href,
                                            target: e.action?.target,
                                            variant: "primary",
                                            icon: "arrow-right",
                                            "data-link-location": p.V.deluxeAnnouncementBannerAction,
                                            "data-link-id": "deluxe-banner-action",
                                            children: e.action?.label
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                },
                v = ({
                    image: e,
                    video: t
                }) => {
                    let [r, o] = (0, n.useState)(!1), [s, d] = (0, n.useState)(!1), c = {
                        maxMaxBufferLength: 1,
                        qualityStartLevel: 1
                    };
                    return (0, a.jsxs)("div", {
                        className: "relative aspect-[16/10] min-h-full w-full overflow-hidden rounded-lg",
                        "data-sentry-component": "Media",
                        "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx",
                        children: [(0, a.jsx)(l.default, {
                            src: e.src,
                            alt: e.alt,
                            placeholder: "blur",
                            blurDataURL: e.placeholder,
                            fill: !0,
                            sizes: "(max-width: 768px) 75vw, (max-width: 1024px) 42vw, 33vw",
                            className: "object-cover transition-opacity duration-500",
                            style: {
                                opacity: t && r ? 0 : 1
                            },
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx"
                        }), t && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(f, {
                                className: "[&>video]:object-cover",
                                url: t.src,
                                playing: s,
                                loop: !0,
                                muted: !0,
                                playsinline: !0,
                                width: "100%",
                                height: "100%",
                                onReady: () => {
                                    o(!0)
                                },
                                config: {
                                    hlsOptions: {
                                        maxMaxBufferLength: c.maxMaxBufferLength,
                                        qualityStartLevel: c.qualityStartLevel
                                    }
                                }
                            }), r && (0, a.jsx)("div", {
                                className: "absolute right-3 bottom-3",
                                children: (0, a.jsx)(i.A, {
                                    onClick: () => {
                                        d(!s)
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
                b = e => {
                    let [t, r] = (0, n.useState)(e.animate ?? !1), {
                        isDark: o,
                        dark: l,
                        light: c
                    } = (e => {
                        let [t, r] = (0, n.useState)(!1), [a, o] = (0, n.useState)(null), [l, s] = (0, n.useState)(null), [i, d] = (0, n.useState)(null), [c, u] = (0, n.useState)(null), [m, h] = (0, n.useState)(null), p = (0, n.useCallback)(() => {
                            s(null), d(null), u(null), h(null)
                        }, []), f = (0, n.useCallback)(async e => {
                            if (!e) return void p();
                            r(!0), o(null);
                            try {
                                let t = await g(e);
                                s(t.isDark), d(t.mainColor), u(t.dark), h(t.light), r(!1)
                            } catch (e) {
                                o(e instanceof Error ? e.message : "Failed to extract color"), p(), r(!1)
                            }
                        }, [p]);
                        return (0, n.useEffect)(() => {
                            e ? f(e) : (o(null), p(), r(!1))
                        }, [e, f, p]), {
                            isLoading: t,
                            error: a,
                            isDark: l,
                            mainColor: i,
                            dark: c,
                            light: m
                        }
                    })(e.image.placeholder);
                    (0, n.useEffect)(() => {
                        if (e.animate) {
                            let e = setTimeout(() => {
                                r(!1)
                            }, 1e3);
                            return () => clearTimeout(e)
                        }
                    }, [e.animate]);
                    let u = (0, s.A)("relative grid grid-cols-4 gap-x-2 md:gap-x-5 md:grid-cols-12 p-4 md:p-6 z-10"),
                        m = e.hasBackgroundGradient && l && c ? {
                            background: `linear-gradient(94deg, ${l} 7%, ${c} 105.47%)`
                        } : void 0,
                        h = e.hasBackgroundGradient && null !== o ? o ? "dark" : "light" : e.theme ?? "light";
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: (0, s.A)("fixed inset-0 z-40 bg-black/30", e.animate && "transition-opacity duration-300", e.animate && t ? "opacity-0" : "opacity-100")
                        }), (0, a.jsx)(d.A, {
                            className: (0, s.A)("fixed left-0 z-40 w-full bg-white dark:bg-black", e.animate && "transition-transform duration-300 ease-out", e.animate && t ? "-translate-y-[calc(100%+5rem)]" : "translate-y-0"),
                            style: m,
                            theme: h,
                            defaultBlockPadding: {
                                top: "pt-0",
                                bottom: "pb-0"
                            },
                            "data-sentry-element": "ThemeContainer",
                            "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx",
                            children: (0, a.jsx)("div", {
                                className: "mango-container",
                                children: (0, a.jsxs)("div", {
                                    className: u,
                                    children: [(0, a.jsx)("div", {
                                        className: "col-span-3 md:col-span-5",
                                        children: (0, a.jsx)(v, {
                                            image: e.image,
                                            video: e.video,
                                            "data-sentry-element": "Media",
                                            "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx"
                                        })
                                    }), (0, a.jsx)(x, {
                                        ...e,
                                        "data-sentry-element": "Content",
                                        "data-sentry-source-file": "DeluxeAnnouncementBanner.tsx"
                                    }), (0, a.jsx)("div", {
                                        className: "absolute bottom-[-4.25rem] left-[50%] translate-x-[-50%] md:hidden",
                                        children: (0, a.jsx)(i.A, {
                                            variant: "secondary",
                                            icon: "x",
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
            var y = r(94329);
            let j = ({
                title: e,
                description: t,
                action: r,
                settings: o,
                hasBackgroundGradient: l,
                image: s,
                video: i,
                details: d
            }) => {
                let [c, u] = (0, n.useState)(!1), m = `banner_dismissed_until_${e.replace(/\s+/g,"_").toLowerCase()}`;
                return ((0, n.useEffect)(() => {
                    let e = (() => {
                        try {
                            let e = localStorage.getItem(m);
                            return e ? Number(e) : null
                        } catch {
                            return null
                        }
                    })();
                    e && e > Date.now() || u(!0)
                }, [m]), o?.isHidden) ? null : (0, a.jsx)(a.Fragment, {
                    children: c && (0, a.jsx)(b, {
                        animate: !0,
                        hasBackgroundGradient: l || !1,
                        title: e,
                        theme: o?.theme === "dark" ? "dark" : "light",
                        description: t ?? void 0,
                        action: r ? {
                            href: r.fieldLink?.linkReference?.href?.current ?? "",
                            target: r.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self",
                            label: r.text ?? ""
                        } : void 0,
                        image: {
                            src: s ? (0, y.i)(s)?.fit("crop").width(1200).height(750).dpr(2).url() ?? "" : "",
                            alt: s?.alt ?? "",
                            placeholder: s?.asset?.metadata?.lqip ?? ""
                        },
                        video: i ? {
                            src: i.url ?? ""
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
            }
        },
        38373: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = r(78360).A
        },
        49620: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            var a = r(80475);
            r(88491);
            var n = r(16335);
            let o = ({
                children: e,
                className: t,
                style: r,
                theme: o = "light",
                padding: l,
                defaultBlockPadding: s
            }) => {
                let i = (0, n.A)({
                        dark: "dark" === o
                    }),
                    d = (0, n.A)(t, l?.top ? ({
                        none: "pt-0",
                        xs: "md:pt-8 pt-6",
                        sm: "md:pt-20 pt-[2.75rem]",
                        md: "md:pt-[9.25rem] pt-16",
                        lg: "md:pt-[11.25rem] pt-[6rem]"
                    })[l.top] : s.top, l?.bottom ? ({
                        none: "pb-0",
                        xs: "md:pb-8 pb-6",
                        sm: "md:pb-20 pb-[2.75rem]",
                        md: "md:pb-[9.25rem] pb-16",
                        lg: "md:pb-[11.25rem] pb-[6rem]"
                    })[l.bottom] : s.bottom);
                return (0, a.jsx)("section", {
                    className: i,
                    "data-sentry-component": "ThemeContainer",
                    "data-sentry-source-file": "ThemeContainer.tsx",
                    children: (0, a.jsx)("div", {
                        className: d,
                        style: r,
                        children: e
                    })
                })
            }
        },
        56329: (e, t, r) => {
            function a(e) {
                var t = e.toString(16);
                return 1 === t.length ? "0" + t : t
            }

            function n(e) {
                return "#" + e.map(a).join("")
            }

            function o(e, t, r) {
                for (var a = 0; a < r.length; a++)
                    if (function(e, t, r) {
                            var a, n, o, s, i, d;
                            switch (r.length) {
                                case 3:
                                    if (a = e, n = t, o = r, 255 !== a[n + 3] || a[n] === o[0] && a[n + 1] === o[1] && a[n + 2] === o[2]) return !0;
                                    break;
                                case 4:
                                    if (s = e, i = t, d = r, s[i + 3] && d[3] ? s[i] === d[0] && s[i + 1] === d[1] && s[i + 2] === d[2] && s[i + 3] === d[3] : s[i + 3] === d[3]) return !0;
                                    break;
                                case 5:
                                    if (function(e, t, r) {
                                            var a = r[0],
                                                n = r[1],
                                                o = r[2],
                                                s = r[3],
                                                i = r[4],
                                                d = e[t + 3],
                                                c = l(d, s, i);
                                            return s ? !!(!d && c || l(e[t], a, i) && l(e[t + 1], n, i) && l(e[t + 2], o, i) && c) : c
                                        }(e, t, r)) return !0;
                                    break;
                                default:
                                    return !1
                            }
                        }(e, t, r[a])) return !0;
                return !1
            }

            function l(e, t, r) {
                return e >= t - r && e <= t + r
            }

            function s(e, t, r) {
                for (var a = {}, n = r.dominantDivider || 24, l = r.ignoredColor, s = r.step, i = [0, 0, 0, 0, 0], d = 0; d < t; d += s) {
                    var c = e[d],
                        u = e[d + 1],
                        m = e[d + 2],
                        h = e[d + 3];
                    if (!(l && o(e, d, l))) {
                        var g = Math.round(c / n) + "," + Math.round(u / n) + "," + Math.round(m / n);
                        a[g] ? a[g] = [a[g][0] + c * h, a[g][1] + u * h, a[g][2] + m * h, a[g][3] + h, a[g][4] + 1] : a[g] = [c * h, u * h, m * h, h, 1], i[4] < a[g][4] && (i = a[g])
                    }
                }
                var p = i[0],
                    f = i[1],
                    x = i[2],
                    v = i[3],
                    b = i[4];
                return v ? [Math.round(p / v), Math.round(f / v), Math.round(x / v), Math.round(v / b)] : r.defaultColor
            }

            function i(e, t, r) {
                for (var a = 0, n = 0, l = 0, s = 0, i = 0, d = r.ignoredColor, c = r.step, u = 0; u < t; u += c) {
                    var m = e[u + 3],
                        h = e[u] * m,
                        g = e[u + 1] * m,
                        p = e[u + 2] * m;
                    !(d && o(e, u, d)) && (a += h, n += g, l += p, s += m, i++)
                }
                return s ? [Math.round(a / s), Math.round(n / s), Math.round(l / s), Math.round(s / i)] : r.defaultColor
            }

            function d(e, t, r) {
                for (var a = 0, n = 0, l = 0, s = 0, i = 0, d = r.ignoredColor, c = r.step, u = 0; u < t; u += c) {
                    var m = e[u],
                        h = e[u + 1],
                        g = e[u + 2],
                        p = e[u + 3];
                    !(d && o(e, u, d)) && (a += m * m * p, n += h * h * p, l += g * g * p, s += p, i++)
                }
                return s ? [Math.round(Math.sqrt(a / s)), Math.round(Math.sqrt(n / s)), Math.round(Math.sqrt(l / s)), Math.round(s / i)] : r.defaultColor
            }

            function c(e) {
                return u(e, "defaultColor", [0, 0, 0, 0])
            }

            function u(e, t, r) {
                return void 0 === e[t] ? r : e[t]
            }

            function m(e) {
                var t, r, a;
                return (t = e, "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) ? "canvas" : (r = e, g && r instanceof OffscreenCanvas) ? "offscreencanvas" : p(e) ? "videoframe" : (a = e, "undefined" != typeof ImageBitmap && a instanceof ImageBitmap) ? "imagebitmap" : e.src
            }

            function h(e) {
                return "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement
            }
            r.d(t, {
                D: () => b
            });
            var g = "undefined" != typeof OffscreenCanvas;

            function p(e) {
                return "undefined" != typeof VideoFrame && e instanceof VideoFrame
            }
            var f = "undefined" == typeof window;

            function x(e) {
                return Error("FastAverageColor: " + e)
            }

            function v(e, t) {
                t || console.error(e)
            }
            var b = function() {
                function e() {
                    this.canvas = null, this.ctx = null
                }
                return e.prototype.getColorAsync = function(e, t) {
                    if (!e) return Promise.reject(x("call .getColorAsync() without resource"));
                    if ("string" == typeof e) {
                        if ("undefined" == typeof Image) return Promise.reject(x("resource as string is not supported in this environment"));
                        var r = new Image;
                        return r.crossOrigin = t && t.crossOrigin || "", r.src = e, this.bindImageEvents(r, t)
                    }
                    if (h(e) && !e.complete) return this.bindImageEvents(e, t);
                    var a = this.getColor(e, t);
                    return a.error ? Promise.reject(a.error) : Promise.resolve(a)
                }, e.prototype.getColor = function(e, t) {
                    var r, a, n, o, l, s, i, d, b = c(t = t || {});
                    if (!e) {
                        var y = x("call .getColor() without resource");
                        return v(y, t.silent), this.prepareResult(b, y)
                    }
                    var j = (r = function(e) {
                        if (h(e)) {
                            var t, r = e.naturalWidth,
                                a = e.naturalHeight;
                            return e.naturalWidth || -1 === e.src.search(/\.svg(\?|$)/i) || (r = a = 100), {
                                width: r,
                                height: a
                            }
                        }
                        return (t = e, "undefined" != typeof HTMLVideoElement && t instanceof HTMLVideoElement) ? {
                            width: e.videoWidth,
                            height: e.videoHeight
                        } : p(e) ? {
                            width: e.codedWidth,
                            height: e.codedHeight
                        } : {
                            width: e.width,
                            height: e.height
                        }
                    }(e), n = u(a = t, "left", 0), o = u(a, "top", 0), l = u(a, "width", r.width), s = u(a, "height", r.height), i = l, d = s, "precision" === a.mode || (l > s ? d = Math.round((i = 100) / (l / s)) : i = Math.round((d = 100) / (s / l)), (i > l || d > s || i < 10 || d < 10) && (i = l, d = s)), {
                        srcLeft: n,
                        srcTop: o,
                        srcWidth: l,
                        srcHeight: s,
                        destWidth: i,
                        destHeight: d
                    });
                    if (!j.srcWidth || !j.srcHeight || !j.destWidth || !j.destHeight) {
                        var y = x('incorrect sizes for resource "'.concat(m(e), '"'));
                        return v(y, t.silent), this.prepareResult(b, y)
                    }
                    if (!this.canvas && (this.canvas = f ? g ? new OffscreenCanvas(1, 1) : null : document.createElement("canvas"), !this.canvas)) {
                        var y = x("OffscreenCanvas is not supported in this browser");
                        return v(y, t.silent), this.prepareResult(b, y)
                    }
                    if (!this.ctx) {
                        if (this.ctx = this.canvas.getContext("2d", {
                                willReadFrequently: !0
                            }), !this.ctx) {
                            var y = x("Canvas Context 2D is not supported in this browser");
                            return v(y, t.silent), this.prepareResult(b)
                        }
                        this.ctx.imageSmoothingEnabled = !1
                    }
                    this.canvas.width = j.destWidth, this.canvas.height = j.destHeight;
                    try {
                        this.ctx.clearRect(0, 0, j.destWidth, j.destHeight), this.ctx.drawImage(e, j.srcLeft, j.srcTop, j.srcWidth, j.srcHeight, 0, 0, j.destWidth, j.destHeight);
                        var k = this.ctx.getImageData(0, 0, j.destWidth, j.destHeight).data;
                        return this.prepareResult(this.getColorFromArray4(k, t))
                    } catch (r) {
                        var y = x("security error (CORS) for resource ".concat(m(e), ".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"));
                        return v(y, t.silent), t.silent || console.error(r), this.prepareResult(b, y)
                    }
                }, e.prototype.getColorFromArray4 = function(e, t) {
                    t = t || {};
                    var r, a, n = e.length,
                        o = c(t);
                    if (n < 4) return o;
                    var l = 4 * (t.step || 1);
                    switch (t.algorithm || "sqrt") {
                        case "simple":
                            r = i;
                            break;
                        case "sqrt":
                            r = d;
                            break;
                        case "dominant":
                            r = s;
                            break;
                        default:
                            throw x("".concat(t.algorithm, " is unknown algorithm"))
                    }
                    return r(e, n - n % 4, {
                        defaultColor: o,
                        ignoredColor: (a = t.ignoredColor) ? Array.isArray(a[0]) ? a : [a] : [],
                        step: l,
                        dominantDivider: t.dominantDivider
                    })
                }, e.prototype.prepareResult = function(e, t) {
                    var r = e.slice(0, 3),
                        a = [e[0], e[1], e[2], e[3] / 255],
                        o = (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
                    return {
                        value: [e[0], e[1], e[2], e[3]],
                        rgb: "rgb(" + r.join(",") + ")",
                        rgba: "rgba(" + a.join(",") + ")",
                        hex: n(r),
                        hexa: n(e),
                        isDark: o,
                        isLight: !o,
                        error: t
                    }
                }, e.prototype.destroy = function() {
                    this.canvas && (this.canvas.width = 1, this.canvas.height = 1, this.canvas = null), this.ctx = null
                }, e.prototype.bindImageEvents = function(e, t) {
                    var r = this;
                    return new Promise(function(a, n) {
                        var o = function() {
                                i();
                                var o = r.getColor(e, t);
                                o.error ? n(o.error) : a(o)
                            },
                            l = function() {
                                i(), n(x('Error loading image "'.concat(e.src, '"')))
                            },
                            s = function() {
                                i(), n(x('Image "'.concat(e.src, '" loading aborted')))
                            },
                            i = function() {
                                e.removeEventListener("load", o), e.removeEventListener("error", l), e.removeEventListener("abort", s)
                            };
                        e.addEventListener("load", o), e.addEventListener("error", l), e.addEventListener("abort", s)
                    })
                }, e
            }()
        },
        69651: (e, t, r) => {
            r.d(t, {
                A: () => d
            });
            var a = r(80475);
            r(88491);
            var n = r(92572),
                o = r(95719),
                l = r(2340),
                s = r(16335);
            let i = ({
                children: e,
                className: t = ""
            }) => {
                let r = (0, s.$)("py-4 px-8 lg:flex lg:justify-between gap-4 col-start-2 col-end-12", t);
                return (0, a.jsx)("section", {
                    className: "grid grid-cols-12 bg-gray-900 pb-32",
                    "data-sentry-component": "SocialProof",
                    "data-sentry-source-file": "SocialProof.tsx",
                    children: (0, a.jsx)("div", {
                        className: r,
                        children: e
                    })
                })
            };
            i.Item = ({
                children: e
            }) => (0, a.jsx)("div", {
                className: "loco-text-body-md mb-6 flex flex-col items-center text-center text-white last:mb-0 md:text-left lg:m-0 lg:flex-row lg:gap-4",
                "data-sentry-component": "SocialProofItem",
                "data-sentry-source-file": "SocialProofItem.tsx",
                children: e
            });
            let d = ({
                items: e,
                isHidden: t
            }) => (0, a.jsx)(a.Fragment, {
                children: !t && (0, a.jsx)(i, {
                    children: e?.map((e, t) => (0, a.jsxs)(i.Item, {
                        "data-sentry-element": "SocialProof.Item",
                        "data-sentry-component": "renderItem",
                        "data-sentry-source-file": "SocialProofBlock.tsx",
                        children: [e.image?.file?.asset.url && (0, a.jsx)(n.default, {
                            src: e.image?.file?.asset.url,
                            alt: e.image?.alt ?? "",
                            width: 24,
                            height: 24
                        }), (0, a.jsx)(l.A, {
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "SocialProofBlock.tsx",
                            children: (0, a.jsx)(o.RK, {
                                value: e.text,
                                "data-sentry-element": "PortableText",
                                "data-sentry-source-file": "SocialProofBlock.tsx"
                            })
                        })]
                    }, `social-proof-item-${t}`))
                })
            })
        },
        74305: (e, t, r) => {
            r.d(t, {
                A: () => w
            });
            var a = r(80475),
                n = r(88491),
                o = r(95719),
                l = r(18350),
                s = r(16335),
                i = r(98822),
                d = r(92572),
                c = r(27331),
                u = r(81359),
                m = r(94720),
                h = r(13328),
                g = r(78650),
                p = r(92217),
                f = r(37640),
                x = r(18227),
                v = r(28682),
                b = r(2340),
                y = r(35726);
            let j = (0, i.default)(() => Promise.all([r.e(87770), r.e(89058)]).then(r.t.bind(r, 23399, 23)), {
                    loadableGenerated: {
                        webpack: () => [23399]
                    },
                    ssr: !1
                }),
                k = ({
                    children: e
                }) => {
                    let t = n.Children.toArray(e);
                    return (0, a.jsx)(l.A, {
                        "data-sentry-element": "FramerMotionLazy",
                        "data-sentry-component": "FullPageScroller",
                        "data-sentry-source-file": "FullPageScroller.tsx",
                        children: (0, a.jsx)("section", {
                            className: "dark relative",
                            style: {
                                height: `${100*e.length}vh`
                            },
                            children: t.map((e, r) => n.cloneElement(e, {
                                index: r,
                                total: t.length
                            }))
                        })
                    })
                };
            k.Block = ({
                title: e,
                description: t,
                actions: r,
                image: o,
                video: l,
                index: i = 1,
                total: k = 1
            }) => {
                let [w, A] = (0, n.useState)(!1), [N, L] = (0, n.useState)(!1), S = (0, n.useRef)(null), C = (0, c.W)(S, {
                    once: !0
                }), B = (0, u.I)(), M = 1 / k * i, D = .75 * M, {
                    scrollYProgress: H
                } = (0, m.L)({
                    target: S
                }), E = (0, h.G)(H, [M, i !== k - 1 ? M + D : 1], [0, 1], {
                    ease: g.am
                }), T = (0, h.G)(H, [M, i !== k - 1 ? M + D : 1], [100, 0], {
                    ease: g.am
                }), I = -((S.current?.offsetHeight || 0) / k) * i;
                (0, p.L)(H, "change", e => {
                    A(e >= M)
                });
                let P = (0, s.A)("object-cover transition-opacity duration-1000", {
                        "opacity-0": N
                    }),
                    F = (0, a.jsx)("div", {
                        className: "hidden rounded-xl bg-black/70 px-2 py-3 md:block",
                        children: Array.from(Array(k), (e, t) => {
                            let r = (0, s.A)("mb-3 h-3 w-3 rounded-full last:mb-0", {
                                "bg-white": i === t,
                                "bg-gray-800": i !== t
                            });
                            return (0, a.jsx)("div", {
                                className: r
                            }, `scroller-progress-${t}`)
                        })
                    }),
                    R = (0, s.A)("absolute h-full w-full", {
                        "pointer-events-none": !w
                    });
                return (0, a.jsx)(f.m.div, {
                    ref: S,
                    className: R,
                    style: {
                        opacity: M ? E : 1,
                        scrollMarginTop: I
                    },
                    "data-sentry-element": "m.div",
                    "data-sentry-component": "FullPageScrollerBlock",
                    "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                    children: (0, a.jsxs)("div", {
                        className: "sticky top-0 h-screen w-full",
                        children: [C && !B && (0, a.jsx)(j, {
                            url: l.src,
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
                        }), (0, a.jsx)(d.default, {
                            fill: !0,
                            src: o.src,
                            alt: "",
                            className: P,
                            placeholder: "blur",
                            blurDataURL: o.placeholder,
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "FullPageScrollerBlock.tsx"
                        }), (0, a.jsx)("div", {
                            className: "absolute bottom-0 h-full w-full bg-gradient-to-t from-black"
                        }), k > 1 && (0, a.jsx)("div", {
                            className: "absolute right-0 mr-16 flex h-full flex-col justify-center",
                            children: F
                        }), (0, a.jsx)("div", {
                            className: "relative grid h-full grid-cols-12",
                            children: (0, a.jsx)("div", {
                                className: "col-span-10 col-start-2 mb-28 flex flex-col-reverse md:col-span-4 md:col-start-2",
                                children: (0, a.jsxs)(f.m.div, {
                                    style: {
                                        y: M ? T : 0
                                    },
                                    className: "flex flex-col items-center text-center md:items-start md:text-left",
                                    "data-sentry-element": "m.div",
                                    "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                                    children: [(0, a.jsx)(y.A, {
                                        "data-sentry-element": "Title",
                                        "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                                        children: e
                                    }), (0, a.jsx)(b.A, {
                                        className: "mb-12",
                                        "data-sentry-element": "Text",
                                        "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                                        children: t
                                    }), (0, a.jsx)(v.A, {
                                        "data-sentry-element": "ButtonGroup",
                                        "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                                        children: r.map((e, t) => (0, a.jsx)(x.A, {
                                            href: e.href,
                                            rounded: !0,
                                            outlined: 0 === t,
                                            variant: 0 === t ? "primary" : "secondary",
                                            hasArrow: !0,
                                            onFocus: () => {
                                                S.current?.scrollIntoView({
                                                    block: "start"
                                                })
                                            },
                                            "data-sentry-element": "Button",
                                            "data-sentry-component": "renderActions",
                                            "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                                            children: e.title
                                        }, `action-${e.title}-${t}`))
                                    })]
                                })
                            })
                        })]
                    })
                })
            };
            let w = ({
                fullPageBlocks: e,
                isHidden: t
            }) => (0, a.jsx)(k, {
                "data-sentry-element": "FullPageScroller",
                "data-sentry-component": "FullPageScrollerBlock",
                "data-sentry-source-file": "FullPageScrollerBlock.tsx",
                children: e.map(({
                    title: r,
                    brandfolder: n,
                    image: l,
                    description: s,
                    actions: i
                }, d) => {
                    let c = {
                            src: n?.muxHLSURL || ""
                        },
                        u = {
                            src: l?.asset.url || "",
                            placeholder: l?.asset.metadata?.blurHash || ""
                        };
                    return (0, a.jsx)(a.Fragment, {
                        children: !t && (0, a.jsx)(k.Block, {
                            index: d,
                            total: e.length,
                            title: r || "",
                            description: (0, a.jsx)(o.RK, {
                                value: s
                            }),
                            actions: i?.map(e => ({
                                title: e.text || "",
                                href: e.link?.href.current || ""
                            })) || [],
                            image: u,
                            video: c
                        }, `full-page-scroller-block-${r}-${d}`)
                    })
                })
            })
        },
        78360: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var a = r(80475),
                n = r(88491),
                o = r(16335),
                l = r(9224),
                s = r(34733);
            let i = ({
                    iconDirection: e
                }) => (0, a.jsx)(s.Ay, {
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
                        children: [(0, a.jsx)(s.Ay, {
                            icon: e ? `${e}` : "arrow-right",
                            size: "12",
                            className: "h-3 w-3 shrink-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover/button:opacity-100",
                            weight: t,
                            "data-sentry-element": "Icon",
                            "data-sentry-source-file": "Button.tsx"
                        }), (0, a.jsx)(s.Ay, {
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
                        icon: p,
                        iconWeight: f = "regular",
                        iconDirection: x = "right",
                        size: v = "md",
                        disabled: b,
                        disableAnimation: y = !1,
                        onClick: j,
                        type: k = "button",
                        ariaLabel: w,
                        as: A = "button",
                        role: N,
                        "data-link-location": L,
                        "data-link-id": S
                    } = e, C = w ?? ("string" == typeof u ? u : p ? `${m} button with ${p} icon` : `${m} button`), B = `
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
  `, M = {
                        hasIcon: {
                            lg: `h-[3.125rem] ${!u?"aspect-square w-auto":"left"===x?"px-[2.25rem] pl-[2rem]":"px-[2.25rem] pr-[2rem]"}`,
                            md: `h-[2.875rem] ${!u?"aspect-square w-auto":"left"===x?"px-[1.875rem] pl-[1.625rem]":"px-[1.875rem] pr-[1.625rem]"}`,
                            sm: `h-[2.375rem] ${!u?"aspect-square w-auto":"left"===x?"px-[1.5rem] pl-[1.25rem]":"px-[1.5rem] pr-[1.25rem]"}`,
                            xs: `h-[2rem] ${!u?"aspect-square w-auto":"left"===x?"px-[1.25rem] pl-[1rem]":"px-[1.25rem] pr-[1rem]"}`
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
                    }, H = (0, o.A)("relative flex items-center justify-center gap-2 rounded-full text-xs font-semibold font-sans tracking-[-0.01rem] whitespace-nowrap group w-fit transition-[box-shadow,background-color,color,border-color] duration-300 pointer-events-auto", B, "disabled:cursor-not-allowed disabled:opacity-40", M[p ? "hasIcon" : "noIcon"][v], D[m].default, !t && D[m].hover, !t && D[m].groupHover, t && D[m].pressed, e.className);
                    if (h) return (0, a.jsx)(l.N_, {
                        href: h,
                        role: "button",
                        onMouseDown: () => r(!0),
                        onMouseUp: () => r(!1),
                        ...C && {
                            "aria-label": C
                        },
                        target: c,
                        type: k,
                        className: H,
                        "data-link-location": L,
                        "data-link-id": S,
                        localePrefix: g,
                        children: (0, a.jsxs)("span", {
                            className: (0, o.A)("flex items-center justify-center gap-2", "left" === x && "flex-row-reverse", b || y || p ? "" : "left" === x ? "-translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0" : "translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0", "transition-all duration-300"),
                            children: [u, b || y ? p ? (0, a.jsx)(s.Ay, {
                                icon: p,
                                size: "0.75rem",
                                weight: f
                            }) : null : p ? (0, a.jsx)(d, {
                                icon: p,
                                iconWeight: f
                            }) : (0, a.jsx)(i, {
                                iconDirection: x
                            })]
                        })
                    });
                    let E = {
                        className: H,
                        disabled: b,
                        onMouseDown: () => r(!0),
                        onMouseUp: () => r(!1),
                        onClick: j,
                        role: N || ("div" === A ? "button" : void 0),
                        ...w && {
                            "aria-label": w
                        },
                        ...b && {
                            "aria-disabled": !0
                        },
                        ...L && {
                            "data-link-location": L
                        },
                        ...S && {
                            "data-link-id": S
                        }
                    };
                    return "button" === A && (E.type = k), (0, a.jsx)(A, {
                        ...E,
                        "data-sentry-element": "Element",
                        "data-sentry-component": "Button",
                        "data-sentry-source-file": "Button.tsx",
                        children: (0, a.jsxs)("span", {
                            className: (0, o.A)("flex items-center justify-center gap-2", "left" === x && "flex-row-reverse", b || y || p ? "" : "left" === x ? "-translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0" : "translate-x-2 group-hover:translate-x-0 group-hover/button:translate-x-0", "transition-all duration-300"),
                            children: [u, b || y ? p ? (0, a.jsx)(s.Ay, {
                                icon: p,
                                size: "0.75rem",
                                weight: f
                            }) : null : p ? (0, a.jsx)(d, {
                                icon: p,
                                iconWeight: f
                            }) : (0, a.jsx)(i, {
                                iconDirection: x
                            })]
                        })
                    })
                }
        },
        92217: (e, t, r) => {
            r.d(t, {
                L: () => n
            });
            var a = r(88491);

            function n(e, t, r) {
                (0, a.useInsertionEffect)(() => e.on(t, r), [e, t, r])
            }
        },
        92921: (e, t, r) => {
            r.d(t, {
                A: () => d
            });
            var a = r(80475);
            r(88491);
            var n = r(95719),
                o = r(16335),
                l = r(62391),
                s = r(80048);
            let i = ({
                    title: e,
                    faqs: t,
                    blockKey: r,
                    theme: n
                }) => {
                    let i = (0, o.A)("pb-28", {
                        "dark bg-black": "dark" === n
                    });
                    return (0, a.jsxs)("section", {
                        className: i,
                        "data-sentry-component": "Faq",
                        "data-sentry-source-file": "Faq.tsx",
                        children: [(0, a.jsx)(s.A, {
                            title: e,
                            "data-sentry-element": "TitleDescriptionBlock",
                            "data-sentry-source-file": "Faq.tsx"
                        }), (0, a.jsx)("div", {
                            className: "container grid gap-1",
                            children: t?.map((t, n) => (0, a.jsx)(l.A, {
                                title: t.question,
                                blockKey: `${r}-${e}-${n}`,
                                "data-sentry-element": "Accordion",
                                "data-sentry-component": "renderFaqs",
                                "data-sentry-source-file": "Faq.tsx",
                                children: t.answer
                            }, `faq-${e}-${n}`))
                        })]
                    })
                },
                d = ({
                    title: e,
                    faqs: t,
                    blockKey: r,
                    isHidden: o,
                    theme: l
                }) => (0, a.jsx)(a.Fragment, {
                    children: !o && (0, a.jsx)(i, {
                        theme: "dark" === l ? "dark" : "light",
                        title: e,
                        faqs: t?.map(e => ({
                            question: e.question,
                            answer: (0, a.jsx)(n.RK, {
                                value: e.answer
                            })
                        })),
                        blockKey: r
                    })
                })
        },
        93897: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = r(49620).A
        }
    }
]);