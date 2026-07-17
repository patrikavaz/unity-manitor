(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 584266, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(829150),
        a = e.i(433519),
        i = e.i(3931),
        s = e.i(722978),
        r = e.i(526826),
        n = e.i(749583),
        d = e.i(595388),
        c = e.i(407325),
        o = e.i(183062),
        u = e.i(604082),
        f = e.i(783078),
        m = e.i(430215);
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
            action: l,
            isSticky: a,
            indexOfActiveLink: i,
            variant: r
        }, d) => {
            let c = (0, s.default)("alternateNavigation relative flex h-12 w-full bg-gray-900", {
                "justify-center": "centered" === r,
                "justify-stretch": "default" === r
            });
            return (0, t.jsx)("div", {
                className: c,
                ref: d,
                children: (0, t.jsx)("div", {
                    className: (0, s.default)("z-40 h-12 bg-gray-900 md:block", {
                        "fixed top-11 mt-1 bg-transparent": a,
                        "absolute top-0 py-1": !a,
                        "w-full": "default" === r
                    }),
                    children: (0, t.jsx)("div", {
                        className: "container h-full",
                        children: (0, t.jsxs)("div", {
                            className: (0, s.default)("flex h-full items-center justify-between rounded-md px-2 transition-colors duration-150", {
                                "bg-gray-900": !a,
                                "bg-[rgba(0,0,0,0.5)] backdrop-blur-sm": a
                            }),
                            children: [(0, t.jsx)("div", {
                                className: "h-full w-full shrink-1",
                                children: (0, t.jsx)("ul", {
                                    className: "flex h-full w-full items-center",
                                    children: e.map((e, l) => (0, t.jsx)(A, {
                                        label: e.label,
                                        href: e.href,
                                        target: e.target,
                                        active: i === l
                                    }, `alternate-navigation-element-${e.label}-${l}`))
                                })
                            }), l && (0, t.jsx)("div", {
                                className: "shrink-0",
                                children: (0, t.jsx)(n.default, {
                                    href: l.href,
                                    target: l.target,
                                    size: "small",
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: l.label
                                })
                            })]
                        })
                    })
                })
            })
        }),
        v = (0, i.forwardRef)(({
            isSticky: e,
            nav: l,
            indexOfActiveLink: a,
            title: n
        }, d) => {
            let [c, o] = (0, i.useState)(!1);
            return n ? (0, t.jsx)("div", {
                className: "alternateNavigation relative h-12 w-full bg-gray-900",
                ref: d,
                children: (0, t.jsx)("div", {
                    className: (0, s.default)("z-40 mt-1 h-12 w-full bg-gray-900 md:block", {
                        "fixed top-[4.5rem] bg-transparent": e,
                        "absolute top-0": !e
                    }),
                    children: (0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsx)("div", {
                            className: (0, s.default)("flex h-full items-center justify-between rounded-md px-3 transition-colors duration-150", {
                                "bg-gray-900": !e,
                                "bg-[rgba(0,0,0,0.65)] backdrop-blur-sm": e
                            }),
                            children: (0, t.jsxs)("div", {
                                className: "w-full",
                                children: [(0, t.jsxs)(r.m.button, {
                                    animate: c ? "open" : "closed",
                                    className: "flex w-full items-center justify-between py-3",
                                    onClick: () => {
                                        o(!c)
                                    },
                                    children: [(0, t.jsx)("span", {
                                        className: "text-sm font-medium text-white",
                                        children: null == a || c ? n : l[a].label
                                    }), (0, t.jsx)(j, {})]
                                }), (0, t.jsx)(r.m.ul, {
                                    className: "overflow-hidden",
                                    initial: "initial",
                                    animate: c ? "open" : "closed",
                                    variants: g,
                                    children: l.map(({
                                        label: e,
                                        href: l,
                                        target: i
                                    }, s) => (0, t.jsx)(k, {
                                        label: e,
                                        href: l,
                                        target: i,
                                        active: a === s,
                                        index: s,
                                        isOpen: c,
                                        onClick: () => {
                                            o(!1)
                                        }
                                    }, `alternate-navigation-element-${e}-${s}`))
                                })]
                            })
                        })
                    })
                })
            }) : null
        }),
        j = () => (0, t.jsxs)(r.m.svg, {
            variants: x,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, t.jsx)("g", {
                clipPath: "url(#clip0_5706_918)",
                children: (0, t.jsx)("path", {
                    id: "Vector",
                    d: "M12 6.5C12.568 6.5 12.8647 7.15733 12.522 7.582L12.4713 7.638L8.47133 11.638C8.35654 11.7528 8.2038 11.8217 8.04179 11.8319C7.87977 11.8421 7.7196 11.7928 7.59133 11.6933L7.52867 11.638L3.52867 7.638L3.47333 7.57533L3.43733 7.524L3.40133 7.46L3.39 7.436L3.372 7.39133L3.35067 7.31933L3.344 7.284L3.33733 7.244L3.33467 7.206V7.12733L3.338 7.08867L3.344 7.04867L3.35067 7.014L3.372 6.942L3.39 6.89733L3.43667 6.80933L3.48 6.74933L3.52867 6.69533L3.59133 6.64L3.64267 6.604L3.70667 6.568L3.73067 6.55667L3.77533 6.53867L3.84733 6.51733L3.88267 6.51067L3.92267 6.504L3.96067 6.50133L12 6.5Z",
                    fill: "white"
                })
            }), (0, t.jsx)("defs", {
                children: (0, t.jsx)("clipPath", {
                    id: "clip0_5706_918",
                    children: (0, t.jsx)("rect", {
                        width: "16",
                        height: "16",
                        fill: "white",
                        transform: "translate(0 0.5)"
                    })
                })
            })]
        }),
        k = e => {
            let l = (0, i.useRef)(null),
                {
                    linkProps: a
                } = (0, c.useLink)(e, l),
                {
                    focusProps: n
                } = (0, o.useFocusRing)(),
                {
                    label: f,
                    href: m,
                    target: g,
                    locale: x,
                    localePrefix: p,
                    active: b,
                    index: v,
                    isOpen: j
                } = e;
            return (0, t.jsx)("li", {
                className: "border-t border-[#ffffff14]",
                children: (0, t.jsxs)(r.m.div, {
                    custom: v,
                    variants: h,
                    initial: "initial",
                    animate: j ? "open" : "closed",
                    className: "flex w-full items-center justify-between",
                    children: [(0, t.jsx)(d.Link, {
                        ...(0, u.mergeProps)(a, n),
                        ref: l,
                        href: m,
                        target: g ?? "_self",
                        locale: x,
                        className: "py-3 text-sm font-medium text-white",
                        localePrefix: p,
                        children: f
                    }), (0, t.jsx)("div", {
                        className: (0, s.default)("mr-1 h-2 w-2 rounded-full transition-colors duration-300", {
                            "bg-blue": b
                        })
                    })]
                })
            }, `n_${f}`)
        },
        A = e => {
            let l = (0, i.useRef)(null),
                {
                    linkProps: a
                } = (0, c.useLink)(e, l),
                {
                    isFocusVisible: r,
                    focusProps: n
                } = (0, o.useFocusRing)(),
                {
                    label: f,
                    href: m,
                    target: h,
                    locale: g,
                    localePrefix: x,
                    active: p
                } = e,
                b = (0, s.default)("alternateNavigation_item relative h-full flex items-center px-2 !text-[0.75rem] font-medium group outline-hidden text-gray-200 transition-colors duration-150", {
                    "a11y-ring rounded-xs": r
                }, {
                    active: p,
                    "text-white": p,
                    "text-gray-200": !p
                });
            return (0, t.jsx)("li", {
                className: "h-full",
                children: (0, t.jsx)(d.Link, {
                    ...(0, u.mergeProps)(a, n),
                    ref: l,
                    href: m,
                    target: h ?? "_self",
                    locale: g,
                    className: b,
                    localePrefix: x,
                    children: f
                })
            })
        };
    b.displayName = "DesktopNav", v.displayName = "MobileNav";
    let y = ({
        variant: e = "default",
        title: l,
        nav: a,
        action: s
    }) => {
        let r = (0, m.default)(`(max-width: ${f.default.Large}px)`),
            n = (0, i.useRef)(null),
            [d, c] = (0, i.useState)(null),
            [o, u] = (0, i.useState)([]),
            [h, g] = (0, i.useState)(!1),
            [x, j] = (0, i.useState)(!1),
            [k, A] = (0, i.useState)(!1),
            y = (0, i.useRef)(0),
            w = () => {
                let e = a.map(e => e.href);
                u([...document.querySelectorAll("a[data-anchor-item]")].filter(t => {
                    let l = t.getAttribute("id");
                    return l && e.find(e => e.includes(l))
                }).map(e => ({
                    top: e.offsetTop + 43
                })))
            },
            N = () => {
                let e;
                n.current && (n.current.offsetTop < window.scrollY ? j(!0) : j(!1)), y.current > window.scrollY && x ? g(!0) : y.current < window.scrollY && g(!1), y.current = window.scrollY, n.current && (n.current.offsetTop > window.innerHeight && !h ? A(!0) : A(!1)), e = null, o.forEach((t, l) => {
                    window.scrollY > t.top && (e = l)
                }), c(e)
            };
        return (0, i.useEffect)(() => {
            let e = document.querySelector("nav");
            e && (e.ariaHidden = String(k))
        }, [k]), (0, i.useLayoutEffect)(() => (w(), window.addEventListener("resize", w), () => {
            window.removeEventListener("resize", w)
        }), []), (0, i.useEffect)(() => (y.current = window.scrollY, window.addEventListener("scroll", N), () => {
            window.removeEventListener("scroll", N)
        }), [h, o, r]), (0, t.jsx)(p.default, {
            children: r ? (0, t.jsx)(v, {
                ref: n,
                nav: a,
                isSticky: x,
                indexOfActiveLink: d,
                title: l
            }) : (0, t.jsx)(b, {
                ref: n,
                nav: a,
                action: s,
                isSticky: x,
                indexOfActiveLink: d,
                variant: e
            })
        })
    };
    e.s(["default", 0, ({
        title: e,
        navigation: i,
        action: s,
        theme: r,
        isHidden: n
    }) => {
        let {
            state: d
        } = (0, a.default)();
        return (0, t.jsx)(t.Fragment, {
            children: !n && (0, t.jsx)(y, {
                title: e ?? "",
                action: (e => {
                    if (!e?.link) return null;
                    let t = e?.link.linkReference?.href.current;
                    return {
                        label: e?.title ?? "",
                        href: t ? (0, l.default)(t, d, e?.extendLink) : "",
                        target: e?.link.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })(s),
                nav: i.map(e => ({
                    label: e?.title ?? "",
                    href: e?.link?.linkReference?.href.current ?? "",
                    target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                }))
            })
        })
    }], 584266)
}, 814507, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(722978),
        a = e.i(146911);
    e.s(["default", 0, ({
        children: e,
        action: i,
        rounded: s = !1,
        isContained: r = !1,
        className: n = ""
    }) => (0, t.jsx)("div", {
        className: (0, l.clsx)("md:px-auto w-full px-4 transition-colors", {
            "bg-gray-100 dark:bg-gray-900": !r
        }, {
            "rounded-br-lg rounded-bl-lg": s && !r
        }, n),
        children: (0, t.jsxs)("div", {
            className: (0, l.clsx)("container m-auto py-3 text-xs leading-4 font-medium text-gray-900 transition-colors dark:text-gray-100", {
                "text-center": s && !r
            }, {
                "my-6 rounded-lg bg-gray-100 dark:bg-gray-900": r
            }),
            children: [e, (0, t.jsx)(a.default, {
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
    var t = e.i(500783),
        l = e.i(749583),
        a = e.i(722978);
    e.s(["default", 0, ({
        theme: e = "light",
        actions: i,
        description: s,
        title: r,
        padding: n = !0,
        variant: d = "center",
        richText: c
    }) => {
        let o = (0, a.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)("div", {
            className: o,
            children: (0, t.jsx)("div", {
                className: "dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: `container flex flex-col ${"center"===d&&"items-center text-center"} ${n&&"pt-14 pb-12 md:pt-24"}`,
                    children: [(0, t.jsx)("div", {
                        className: "max-w-3xl",
                        children: r && (0, t.jsx)("h2", {
                            className: "loco-text-heading-md !font-nohemi",
                            children: r
                        })
                    }), (s || c) && (0, t.jsxs)("div", {
                        className: (0, a.default)("loco-text-body-lg [&_a]:text-blue mt-6 text-gray-500", "center" === d || "left" === d ? "max-w-5xl" : "max-w-3xl"),
                        children: [s, c]
                    }), i && (0, t.jsx)("div", {
                        className: "mt-8 flex justify-center gap-4",
                        children: i.map((e, a) => {
                            let i = `title-description-block-action-${e.title}-${a}`;
                            return 0 === a ? (0, t.jsx)(l.default, {
                                href: e.href,
                                target: e.target,
                                outlined: !0,
                                rounded: !0,
                                hasArrow: !0,
                                "data-link-location": "TitleDescriptionBlock",
                                "data-link-id": `title-description-block-action-primary-${a}`,
                                children: e.title
                            }, i) : (0, t.jsx)(l.default, {
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
}, 776910, 577702, 913890, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(814507);
    e.s(["default", 0, ({
        title: e,
        action: a,
        isContained: i = !1,
        theme: s,
        isHidden: r
    }) => {
        let n;
        return (0, t.jsx)(t.Fragment, {
            children: !r && (0, t.jsx)("section", {
                className: "dark" === s ? "dark" : "",
                children: (n = a?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self", (0, t.jsx)(l.default, {
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
        s = e.i(567134),
        r = e.i(825610),
        n = e.i(749583);
    let d = ({
        title: e,
        subtitle: l,
        description: a,
        action: i,
        blockKey: s,
        index: d
    }) => {
        let c = s || r.trackingLocation.uniteCardSubscription,
            o = void 0 !== d ? `${c}-${d}` : c;
        return (0, t.jsxs)("div", {
            className: "flex h-80 flex-col justify-between rounded-lg bg-gray-900 p-4 text-white",
            children: [(0, t.jsx)("h3", {
                className: "loco-text-heading-sm -mt-2 md:mr-20",
                children: e
            }), (0, t.jsx)("div", {
                className: "loco-text-body-lg opacity-70",
                children: l
            }), (0, t.jsxs)("div", {
                className: "flex grow flex-col justify-between",
                children: [(0, t.jsx)("div", {
                    className: "loco-text-body mt-8 opacity-70",
                    children: a
                }), (0, t.jsx)("div", {
                    children: (0, t.jsx)(n.default, {
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
        title: l,
        description: o,
        filters: u,
        actions: f,
        cards: m,
        variant: h = "column",
        blockKey: g,
        cardsHeading: x
    }) => {
        let [p, b] = (0, a.useState)(u?.[0]?.value || ""), v = (e, l) => {
            let a = {
                uniteCard: s.default,
                cardSubscription: d
            } [e?.type];
            return (0, t.jsx)("div", {
                className: "w-full px-0 py-1 md:w-1/2 md:px-1 md:py-1 lg:w-1/3",
                children: (0, t.jsx)(a, {
                    ...e,
                    variant: h,
                    blockKey: g || r.trackingLocation.uniteCards,
                    titleTag: x,
                    index: l
                })
            }, `${e.title}-${l}`)
        }, j = (0, i.default)({
            dark: "dark" === e || "collapsiblecards" === e
        }), k = (0, i.default)({
            "bg-white dark:bg-black": "light" === e || "dark" === e,
            "bg-transparent": "collapsiblecards" === e
        }), A = (0, i.default)("w-full flex flex-wrap justify-center", {
            "mt-8 pb-10": (!l || !o) && "collapsiblecards" !== e
        });
        return (0, t.jsx)("section", {
            className: j,
            children: (0, t.jsx)("div", {
                className: k,
                children: (0, t.jsxs)("div", {
                    className: "collapsiblecards" === e ? "flex flex-col items-center" : "container flex flex-col items-center",
                    children: [(l || o) && (0, t.jsx)(c.default, {
                        title: l,
                        description: o
                    }), (u && u.length > 0 || f && f.length > 0) && (0, t.jsxs)("div", {
                        className: "mb-8 flex w-full flex-wrap justify-center gap-4",
                        children: [u.map((e, l) => (0, t.jsx)(n.default, {
                            rounded: !0,
                            outlined: !0,
                            onPress: () => {
                                e.onPress && e.onPress(), b(e.value)
                            },
                            active: p.includes(e.value),
                            "data-link-location": g || r.trackingLocation.uniteCardsFilter,
                            "data-link-id": `${g||r.trackingLocation.uniteCardsFilter}-filter-${l}`,
                            children: e.title
                        }, `filter-${e}-${l}`)), f.map((e, l) => (0, t.jsx)(n.default, {
                            href: e.href,
                            rounded: !0,
                            outlined: !0,
                            hasArrow: !0,
                            "data-link-location": g || r.trackingLocation.uniteCardsAction,
                            "data-link-id": `${g||r.trackingLocation.uniteCardsAction}-action-${l}`,
                            children: e.title
                        }, `action-${e}-${l}`))]
                    }), (0, t.jsx)("div", {
                        className: A,
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
        slides: l,
        variant: r = "short",
        blockKey: n,
        title: c
    }) => {
        let [o, g] = (0, a.useState)(0), x = (0, a.useRef)(null), p = (0, m.default)(`(min-width: ${h.default.Large}px)`), b = "gdc2026" === r, v = (0, i.default)({
            dark: "dark" === e
        }), j = (0, a.useCallback)((e, t) => {
            g(t)
        }, []), k = (0, a.useCallback)(() => {
            x.current && x.current.slickPrev()
        }, []), A = (0, a.useCallback)(() => {
            x.current && x.current.slickNext()
        }, []), y = {
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
        }, w = (e, l) => {
            let a = {
                uniteCard: s.default,
                cardSubscription: d
            } [e.type];
            return (0, t.jsx)("div", {
                className: b ? "col-span-12 h-full" : "col-span-12 md:col-span-6 lg:col-span-4",
                children: (0, t.jsx)(a, {
                    ...e,
                    variant: b ? "horizontal" : r,
                    blockKey: `${n}-${l}`,
                    titleTag: "p"
                })
            }, `carousel-card-${n}-${l}-${e.title}`)
        }, N = () => {
            let a = p ? 2 : 1,
                s = l.length - a + 1;
            return (0, t.jsx)("div", {
                className: "flex gap-2",
                children: Array.from({
                    length: s
                }).map((l, a) => (0, t.jsx)("button", {
                    className: (0, i.default)("h-2 w-2 rounded-full transition-all", o === a ? "bg-white" : "dark" === e ? "bg-gray-600" : "bg-gray-300"),
                    "aria-label": `Go to slide ${a+1}`,
                    "aria-current": o === a ? "true" : "false"
                }, a))
            })
        }, L = p ? 2 : 1, R = l.length - L + 1, C = 0 === o, B = o >= R - 1, F = p && l.length > 2 || !p && l.length > 1;
        return b ? (0, t.jsx)("section", {
            className: v,
            children: (0, t.jsx)("div", {
                className: "carousel-cards py-16 dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: "container",
                    children: [(0, t.jsxs)("div", {
                        className: "mb-8 hidden items-center gap-8 lg:flex",
                        children: [(0, t.jsx)("div", {
                            className: "flex flex-1 items-center",
                            children: c && (0, t.jsx)("h2", {
                                className: "loco-text-heading-xs text-left",
                                children: c
                            })
                        }), F && (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("div", {
                                className: "flex flex-1 items-center justify-center",
                                children: N()
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-1 items-center justify-end gap-2",
                                children: [(0, t.jsx)(f.default, {
                                    direction: "left",
                                    onPress: k,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: C
                                }), (0, t.jsx)(f.default, {
                                    onPress: A,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: B
                                })]
                            })]
                        })]
                    }), c && (0, t.jsx)("h2", {
                        className: "loco-text-heading-xl mb-6 text-left lg:hidden",
                        children: c
                    }), (0, a.createElement)(u.default, {
                        ...y,
                        ref: x,
                        key: `slider-${l.length}`,
                        className: "overflow-hidden"
                    }, l.map(w)), F && (0, t.jsxs)("div", {
                        className: "mt-8 flex flex-col items-center gap-4 lg:hidden",
                        children: [N(), (0, t.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, t.jsx)(f.default, {
                                direction: "left",
                                onPress: k,
                                ariaLabel: "Previous slide",
                                variant: "primary",
                                isDisabled: C
                            }), (0, t.jsx)(f.default, {
                                onPress: A,
                                ariaLabel: "Next slide",
                                variant: "primary",
                                isDisabled: B
                            })]
                        })]
                    })]
                })
            })
        }) : (0, t.jsx)("section", {
            className: v,
            children: (0, t.jsx)("div", {
                className: "carousel-cards py-16 dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: "container",
                    children: [(0, t.jsx)("div", {
                        className: "mb-8 flex items-center justify-between",
                        children: F && (0, t.jsxs)(t.Fragment, {
                            children: [N(), (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)(f.default, {
                                    direction: "left",
                                    onPress: k,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: C
                                }), (0, t.jsx)(f.default, {
                                    onPress: A,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: B
                                })]
                            })]
                        })
                    }), (0, a.createElement)(u.default, {
                        ...y,
                        ref: x,
                        key: `slider-${l.length}`,
                        className: "overflow-visible"
                    }, l.map(w))]
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
        title: l,
        description: a,
        filters: i,
        actions: s,
        variant: r,
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
        } = (0, p.useFormModal)(d?.map(e => e.action).filter(Boolean)), A = (e, t = 0, l = !1) => {
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
            let s = null;
            if (e?.image) s = {
                src: e.image.file?.asset.url,
                alt: e.image.alt,
                placeholder: e.image.file?.asset.metadata?.lqip
            };
            else if (e?.featuredImage) s = {
                src: e.featuredImage?.file?.asset?.url,
                alt: e.title,
                placeholder: e.featuredImage?.file?.asset?.metadata?.lqip
            };
            else if (l) {
                let l = b[t % 3];
                s = {
                    src: l.src,
                    alt: e.title || "Unity News",
                    placeholder: l.blurDataURL
                }
            }
            return {
                type: e._type || "uniteCard",
                title: e.title,
                subtitle: e.subtitle || "",
                description: e.description || e?.seo?.teaserText || e?.seo?.description || "",
                image: s,
                video: {
                    src: e.brandfolder?.muxHLSURL || ""
                },
                action: i,
                tags: e.tags || [],
                videoInline: e?.videoInline
            }
        }, y = n ? (() => {
            if (!d || 0 === d.length) return c?.length && c?.length > 0 ? c?.map((e, t) => A(e, t)) : [];
            let e = 0,
                t = 0;
            return d.map((l, a) => {
                if ("cardDynamic" === l._type) {
                    if ("news" === l.contentType && u && e < u.length) {
                        let t = u[e],
                            l = e;
                        return e++, A(t, l, !0)
                    }
                    if ("blog" === l.contentType && f && t < f.length) {
                        let e = f[t];
                        return t++, A(e, a)
                    }
                    return null
                }
                return A(l, a)
            }).filter(e => null !== e)
        })() : d?.length && d?.length > 0 ? d?.filter(e => "cardDynamic" !== e._type).map((e, t) => A(e, t)) : c?.length && c?.length > 0 ? c?.map((e, t) => A(e, t)) : [], w = i?.map((e, t) => ({
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
                        navigation_link_location: `cards_block_filter_${t+1}`
                    }
                })
            }
        })) || [];
        return n ? (0, t.jsx)(g, {
            theme: "dark" === e ? "dark" : "light",
            variant: "stacked" === r || "column" === r || "short" === r || "gdc2026" === r ? r : "column",
            slides: y,
            blockKey: m,
            title: l || void 0
        }) : (0, t.jsx)(t.Fragment, {
            children: !h && (0, t.jsx)(o, {
                theme: "dark" === e ? "dark" : "collapsiblecards" === e ? "collapsiblecards" : "light",
                title: l || "",
                description: a,
                filters: w,
                actions: s?.map(e => ({
                    title: e?.title || "",
                    href: e.link?.linkReference?.href.current || "",
                    target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                })) || [],
                variant: "stacked" === r || "column" === r || "short" === r ? r : "column",
                cards: y,
                blockKey: m,
                cardsHeading: "div" === v || "h2" === v || "h3" === v || "h4" === v ? v : l ? "h3" : "h2"
            })
        })
    }], 913890)
}, 4390, 692627, 569074, e => {
    "use strict";
    let t = e.i(459923).default;
    e.s(["default", 0, t], 4390);
    var l = e.i(500783),
        a = e.i(655105),
        i = e.i(722978);
    let s = ({
        theme: e = "light",
        quote: t,
        author: s
    }) => {
        let r = (0, i.default)({
            dark: "dark" === e
        });
        return (0, l.jsx)("blockquote", {
            className: r,
            children: (0, l.jsx)("div", {
                className: "py-12 md:py-40 dark:bg-black",
                children: (0, l.jsx)("div", {
                    className: "container",
                    children: (0, l.jsxs)("div", {
                        className: "grid lg:grid-cols-12 lg:gap-2",
                        children: [t && (0, l.jsx)("div", {
                            className: "lg:col-start-4 lg:col-end-13 lg:row-start-1",
                            children: (0, l.jsx)("p", {
                                className: "quote-item loco-text-heading-md",
                                children: t
                            })
                        }), s && (0, l.jsxs)("div", {
                            className: "mt-4 flex flex-col lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:mt-2",
                            children: [s.image && s.image.src && (0, l.jsx)("div", {
                                className: "overflow-hidden rounded",
                                children: (0, l.jsx)(a.default, {
                                    src: s.image.src,
                                    placeholder: "blur",
                                    blurDataURL: s.image.placeholder,
                                    alt: s.image.alt || "",
                                    width: 200,
                                    height: 250,
                                    className: "w-full max-w-[12rem] object-cover"
                                })
                            }), (0, l.jsxs)("footer", {
                                className: "mt-2 max-w-[12rem] lg:mt-8",
                                children: [s.name && (0, l.jsx)("span", {
                                    className: "loco-text-body-md mt-2 block",
                                    children: s.name
                                }), s.title && (0, l.jsx)("span", {
                                    className: "loco-text-body-sm mt-1 block dark:text-gray-300",
                                    children: s.title
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
        isHidden: i
    }) => {
        let r = {
            name: a?.name || "",
            title: a?.title || "",
            image: {
                src: a?.image?.file?.asset.url || "",
                placeholder: a?.image?.file?.asset.metadata?.lqip || "",
                alt: a?.image?.alt || ""
            }
        };
        return (0, l.jsx)(l.Fragment, {
            children: !i && (0, l.jsx)(s, {
                quote: t,
                author: r,
                theme: "dark" === e ? "dark" : "light"
            })
        })
    }], 692627);
    let r = ({
        children: e,
        theme: t = "light",
        alignment: a = "left",
        subtitle: s
    }) => {
        let r = (0, i.default)({
                dark: "dark" === t
            }),
            n = (0, i.default)("col-span-12", {
                "lg:col-start-4": "offset" === a || s,
                "lg:col-span-8": "left" === a && !s,
                "lg:col-span-6": s
            });
        return (0, l.jsx)("section", {
            className: r,
            children: (0, l.jsx)("div", {
                className: "bg-white py-14 md:py-32 dark:bg-black",
                children: (0, l.jsxs)("div", {
                    className: "container grid grid-cols-12 text-black dark:text-white",
                    children: [s && (0, l.jsx)("div", {
                        className: "loco-caption-lg-bold col-span-5 mb-3 uppercase lg:col-span-2 lg:mt-2",
                        children: s
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
}, 686916, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(722990);
    let a = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "w-full bg-black",
        children: e
    });
    a.Content = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "footnote loco-text-body-sm container",
        children: e
    }), e.s(["default", 0, ({
        content: e,
        isHidden: i
    }) => (0, t.jsx)(t.Fragment, {
        children: !i && (0, t.jsx)(a, {
            children: (0, t.jsx)(a.Content, {
                children: (0, t.jsx)(l.PortableText, {
                    value: e,
                    components: e
                })
            })
        })
    })], 686916)
}, 679288, e => {
    "use strict";
    var t = e.i(3931);
    e.s(["default", 0, () => {
        let [e, l] = (0, t.useState)("Unknown");
        return (0, t.useEffect)(() => {
            let e = window.navigator.userAgent;
            e.includes("Win") && l("Windows"), e.includes("Mac") && l("Mac"), e.includes("Linux") && l("Linux")
        }, []), e
    }])
}, 457689, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(3931),
        a = e.i(722990),
        i = e.i(131564),
        s = e.i(679288);
    e.s(["default", 0, ({
        theme: e,
        variant: r,
        padding: n,
        title: d,
        description: c,
        richText: o,
        actions: u,
        isHidden: f,
        operatingSystem: m
    }) => {
        let h = (0, s.default)(),
            g = (0, l.useMemo)(() => u ? u.map(e => ({
                title: e?.title || "",
                href: e?.link?.linkReference?.href?.current || "",
                target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            })) : [], [u]);
        return m && m !== h ? null : (0, t.jsx)(t.Fragment, {
            children: !f && (0, t.jsx)(i.default, {
                theme: "dark" === e ? "dark" : "light",
                variant: "center" === r ? "center" : "left",
                padding: n ?? !0,
                title: d,
                description: c ?? "",
                richText: (0, t.jsx)(a.PortableText, {
                    value: o
                }),
                actions: g
            })
        })
    }])
}, 68274, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(3931),
        a = e.i(185462);
    e.s(["default", 0, ({
        data: e,
        isHidden: i,
        theme: s
    }) => {
        let r = (0, l.useMemo)(() => e?.map(e => e.value?.text ? {
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
        return (0, t.jsx)(t.Fragment, {
            children: !i && (0, t.jsx)(a.default, {
                keyFigures: r,
                theme: "dark" === s ? "dark" : "light"
            })
        })
    }], 68274)
}, 794189, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(722978),
        a = e.i(3931),
        i = e.i(153348),
        s = e.i(955429),
        r = e.i(655105),
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
                p = (0, s.useReducedMotion)(),
                b = (0, l.default)("", {
                    "max-w-lg": "small" === o,
                    "max-w-lg mx-auto": "small-center" === o,
                    "container grid lg:grid-cols-12 lg:gap-2": "offset" === o
                }),
                v = (0, l.default)("relative overflow-hidden rounded-2xl", {
                    "aspect-square": "1:1" === u,
                    "aspect-[4/3]": "4:3" === u,
                    "aspect-video": "16:9" === u
                }),
                j = (0, l.default)("absolute cover z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": h && !p && x && n?.src
                }),
                k = {
                    aspectRatio: "none" === u && e.dimensions?.width && e.dimensions?.height ? `${e.dimensions.width}/${e.dimensions.height}` : void 0
                };
            return (0, t.jsx)("div", {
                className: b,
                ref: m,
                children: (0, t.jsxs)("div", {
                    className: "offset" === o ? "lg:col-start-4 lg:col-end-13 lg:row-start-1" : "",
                    children: [(0, t.jsxs)("div", {
                        className: v,
                        style: k,
                        children: [(0, t.jsx)(r.default, {
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
                        }), x && !p && n?.src && (0, t.jsx)(c, {
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
                    }), f && (0, t.jsx)("div", {
                        className: "loco-text-body-sm mt-2 text-gray-500",
                        children: (0, t.jsx)(d.default, {
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
        image: s,
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
            A = null;
        "youtube" === i ? A = (0, n.default)(() => e.A(269100), {
            loadableGenerated: {
                modules: [346003]
            },
            ssr: !1
        }) : "brandfolder" === i && (A = (0, n.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }));
        let y = {};
        "brandfolder" === i && (y = {
            hlsOptions: {
                maxMaxBufferLength: 1,
                qualityStartLevel: 1
            }
        });
        let w = () => {
                k(!0)
            },
            N = (0, l.default)("", {
                "max-w-lg": "small" === o,
                "max-w-lg mx-auto": "small-center" === o,
                "container grid lg:grid-cols-12 lg:gap-2": "offset" === o
            }),
            L = (0, l.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": j && c && c.src
            }),
            R = (0, l.default)("relative", {
                "lg:col-start-4 lg:col-end-13 lg:row-start-1": "offset" === o
            });
        return (0, t.jsx)("div", {
            className: N,
            ref: v,
            children: (0, t.jsxs)("div", {
                className: R,
                children: [(0, t.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-2xl",
                    children: [s?.src && (0, t.jsxs)("div", {
                        className: L,
                        onClick: w,
                        children: [!x && (0, t.jsx)(u.default, {
                            handleIsPlaying: w,
                            className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                            label: m,
                            "data-link-location": `${g}-video-play`,
                            "data-link-id": `${g}-video-play`,
                            "data-link-type": "CTA"
                        }), (0, t.jsx)(r.default, {
                            src: s.src,
                            placeholder: "blur",
                            blurDataURL: s.placeholder,
                            fill: !0,
                            alt: s.alt ?? "",
                            className: "cover absolute object-cover brightness-75"
                        })]
                    }), c?.src && A && (0, t.jsx)(A, {
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
                        config: y
                    }), c?.src?.includes("youtube.com") && (0, t.jsx)(f.default, {
                        blockedMessage: p,
                        consentButtonLabel: b
                    })]
                }), h && (0, t.jsx)("div", {
                    className: "loco-text-body-sm mt-2 text-gray-500",
                    children: (0, t.jsx)(d.default, {
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
        youtube_url: s,
        image: r,
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
                    src: ("brandfolder" === a ? i?.muxHLSURL : s) ?? null
                },
                aspectRatio: c ?? "none",
                image: {
                    src: r?.file?.asset.url ?? "",
                    alt: r?.alt ?? "",
                    caption: r?.caption ?? "",
                    placeholder: r?.file?.asset.metadata?.lqip ?? "",
                    dimensions: {
                        width: r?.file?.asset?.metadata?.dimensions?.width ?? 0,
                        height: r?.file?.asset?.metadata?.dimensions?.height ?? 0
                    }
                },
                provider: a,
                buttonLabel: u,
                videoInline: f,
                richCaption: (0, t.jsx)(h.PortableText, {
                    value: g
                })
            },
            j = "full";
        "small" === d ? j = "small" : "small-center" === d ? j = "small-center" : "offset" === d && (j = "offset");
        let k = "none";
        ("1:1" === c || "16:9" === c || "4:3" === c) && (k = c);
        let A = (0, l.default)("py-16", {
                "dark bg-black": "dark" === v.theme
            }),
            y = (0, l.default)("container");
        return (0, t.jsx)(t.Fragment, {
            children: !p && (0, t.jsx)("div", {
                className: A,
                children: (0, t.jsx)("div", {
                    className: y,
                    children: "video" === v.type ? (0, t.jsx)(m, {
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
                    }) : (0, t.jsx)(o, {
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
    var t = e.i(500783),
        l = e.i(3931),
        a = e.i(722990),
        i = e.i(655105),
        s = e.i(229696),
        r = e.i(805518),
        n = e.i(570133),
        d = e.i(210310),
        c = e.i(7075),
        o = e.i(775041),
        u = e.i(722978);
    let f = {
        types: {
            imageWithAlt: ({
                value: e
            }) => {
                let l = e?.file?.asset,
                    a = l?.metadata?.dimensions;
                return l?.url && a?.width && a?.height ? (0, t.jsx)(i.default, {
                    alt: e?.alt || "",
                    src: l.url,
                    width: a.width,
                    height: a.height,
                    className: "my-12"
                }) : null
            },
            table: ({
                value: e
            }) => (0, t.jsx)(s.default, {
                className: "my-12",
                children: e.tableContent || ""
            }),
            htmlTable: ({
                value: e
            }) => (0, t.jsx)(d.default, {
                table: e,
                hideTitle: !0
            }),
            anchor: ({
                value: e
            }) => (0, t.jsx)(c.Link, {
                id: e.anchorID,
                href: "",
                className: "md:absolute md:-mt-28"
            }),
            codeBlock: ({
                value: e
            }) => e.isHidden ? null : (0, t.jsx)(n.default, {
                code: e.code?.code,
                language: e.code?.language
            })
        },
        block: {
            h2: ({
                children: e
            }) => (0, t.jsx)("h2", {
                className: "loco-text-heading-xs! mb-6",
                children: e
            }),
            h3: ({
                children: e
            }) => (0, t.jsx)("h3", {
                className: "text-heading-sm!",
                children: e
            })
        },
        listItem: {
            number: ({
                children: e
            }) => (0, t.jsx)("li", {
                children: e
            }),
            bullet: ({
                children: e
            }) => (0, t.jsx)("li", {
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
        productCategoryFilter: c
    }) => {
        let [m] = (0, l.useContext)(o.FiltersContext), {
            subcategories: h
        } = m.categories?.find(({
            _id: e
        }) => e === m.selectedCategory) || {}, g = null != m.selectedSubcategory ? (h || []).find(({
            _id: e
        }) => e === m.selectedSubcategory) : null, x = !c || c.categories?.find(e => e._id === m.selectedCategory) != null && (null == g || !c.subcategories || c.subcategories.some(({
            _id: e
        }) => e === m.selectedSubcategory)), p = (0, u.default)("dark:bg-black", {
            "py-8 md:py-12": "default" === n || "small" === n || !n,
            "py-16": "large" === n,
            "bg-black dark": "dark" === i
        }), b = (0, u.default)("", {
            container: "default" === s || !s,
            "container max-w-[60rem] mx-auto": "center" === s,
            "container grid lg:grid-cols-12 lg:gap-2": "offset" === s
        }), v = (0, u.default)("[&>*]:loco-text-body [&>*]:mb-4", {
            "lg:col-start-4 lg:col-end-10 lg:row-start-1": "offset" === s
        });
        return (0, t.jsx)(t.Fragment, {
            children: !d && x && (0, t.jsx)("section", {
                className: p,
                children: (0, t.jsx)("div", {
                    className: b,
                    children: (0, t.jsx)(r.default, {
                        className: v,
                        children: (0, t.jsx)(a.PortableText, {
                            value: e,
                            components: f
                        })
                    })
                })
            })
        })
    }], 25665)
}, 742958, 50184, e => {
    "use strict";
    var t = e.i(500783),
        l = e.i(722978),
        a = e.i(3931),
        i = e.i(749583),
        s = e.i(828083),
        r = e.i(153348),
        n = e.i(955429),
        d = e.i(655105);
    let c = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        o = ({
            title: e,
            eyebrow: s,
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
                j = (0, r.useInView)(p, {
                    once: !0
                }),
                k = (0, n.useReducedMotion)(),
                A = (0, l.default)("bg-gray-100 relative h-full rounded-xl overflow-hidden dark:bg-gray-900", {
                    dark: "background" === m
                }),
                y = (0, l.default)("z-0", {
                    "absolute top-0 left-0 w-full h-full": "background" === m,
                    "aspect-video relative mt-8 -mb-8": "default" === m
                }, "background" === m ? "after:content after:absolute after:z-10 after:inset-0 after:bg-gradient-to-b after:from-10% after:from-black after:to-transparent after:opacity-75" : ""),
                w = (0, l.default)("z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": b && !k && j && f?.src,
                    "": "background" === m
                }),
                N = (0, l.default)("absolute left-0 top-0 [&>video]:object-cover", {
                    "brightness-50 ": "background" === m
                });
            return (0, t.jsx)("div", {
                className: A,
                ref: p,
                children: (0, t.jsxs)("div", {
                    className: "flex h-full flex-col justify-between p-8",
                    children: [(0, t.jsxs)("div", {
                        className: "relative z-10",
                        children: [s && (0, t.jsx)("span", {
                            className: "loco-caption-sm mb-4 block opacity-70",
                            children: s
                        }), e && (0, t.jsx)(x, {
                            className: "loco-text-heading-xs",
                            children: e
                        }), o && (0, t.jsx)("p", {
                            className: "loco-text-body-sm mt-2 max-w-xs opacity-70",
                            children: o
                        }), (h?.href || h?.renderModal) && (0, t.jsx)("div", {
                            className: "mt-8",
                            children: h?.renderModal ? h.renderModal() : (0, t.jsx)(i.default, {
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
                    }), (0, t.jsxs)("div", {
                        className: y,
                        children: [u?.src && (0, t.jsx)(d.default, {
                            fill: !0,
                            alt: u.alt ?? "",
                            src: u.src,
                            className: w
                        }), j && !k && f?.src && (0, t.jsx)(c, {
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
            let s = (0, l.default)("bentoCards_grid", 1 === e.length && "is-single", e.length % 2 == 0 && "is-two-multiple", e.length % 3 == 0 && "is-three-multiple", function(e) {
                if (e <= 1) return !1;
                if (2 === e) return !0;
                if (e % 2 == 0) return !1;
                for (let t = 3; t <= Math.sqrt(e); t += 2)
                    if (e % t == 0) return !1;
                return !0
            }(e.length) && "is-prime");
            return (0, t.jsx)("div", {
                children: (0, t.jsx)("div", {
                    className: s,
                    children: e.map((e, l) => (0, t.jsx)("div", {
                        className: "bentoCards_item",
                        children: (0, t.jsx)(o, {
                            ...e,
                            blockKey: a,
                            cardHeading: i
                        })
                    }, `bento-card-${a}-${l}`))
                })
            })
        };
    var f = e.i(115219);
    e.s(["default", 0, ({
        theme: e,
        blockKey: a,
        isHidden: i,
        cards: s,
        bentoCardsHeading: r
    }) => {
        let {
            renderModal: n
        } = (0, f.useFormModal)(s?.map(e => e.actions?.[0]).filter(Boolean)), d = s?.map(e => {
            let t, l, a, i = e?.actions?.[0],
                s = !!i?.form;
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
                action: i ? (t = s ? "" : i.link?.linkReference?.href.current ?? "", l = i.link?.linkReference?.target === "_blank" ? "_blank" : "_self", a = {
                    label: i.title ?? "",
                    href: t,
                    target: l
                }, s ? {
                    ...a,
                    renderModal: () => {
                        let e = i.form || {},
                            t = {
                                title: e.title || "",
                                description: e.description || "",
                                fields: e.fields || [],
                                actions: e.actions || {},
                                sfdcIntegration: i.webinarFormParametersContent?.sfdcIntegration || {}
                            };
                        return n({
                            label: i.title ?? "",
                            form: t
                        })
                    }
                } : a) : null
            }
        }) ?? [], c = (0, l.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)(t.Fragment, {
            children: !i && (0, t.jsx)("div", {
                className: c,
                children: (0, t.jsx)("div", {
                    className: "bg-white dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container py-16",
                        children: (0, t.jsx)(u, {
                            blockKey: a,
                            theme: "dark" === e ? "dark" : "light",
                            cards: d,
                            cardsHeading: "h2" === r || "h3" === r || "h4" === r ? r : "p"
                        })
                    })
                })
            })
        })
    }], 742958);
    let m = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        h = ({
            videoShowcaseA: e,
            videoShowcaseB: i
        }) => {
            let s = (0, a.useRef)(null),
                [c, o] = (0, a.useState)(!1),
                [u, f] = (0, a.useState)(!1),
                h = (0, r.useInView)(s, {
                    once: !0
                }),
                g = (0, n.useReducedMotion)(),
                x = (0, l.default)("transition-opacity duration-500 object-cover", {
                    "opacity-0": c && !g && h && e?.image?.src
                }),
                p = (0, l.default)("transition-opacity duration-500 object-cover", {
                    "opacity-0": u && !g && h && e?.image?.src
                });
            return (0, t.jsxs)("div", {
                className: "w-full",
                ref: s,
                children: [(0, t.jsxs)("div", {
                    className: "relative mx-auto aspect-square max-w-[35vw]",
                    children: [e?.image?.src && (0, t.jsx)(d.default, {
                        fill: !0,
                        alt: e?.image?.alt ?? "",
                        src: e?.image?.src,
                        className: x
                    }), h && !g && e?.video?.src && (0, t.jsx)(m, {
                        url: e.video.src,
                        playing: e.video.autoplay ?? !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 [&>video]:object-cover",
                        onReady: () => {
                            o(!0)
                        },
                        config: {
                            hlsOptions: {
                                maxMaxBufferLength: 1,
                                startLevel: 1
                            }
                        }
                    })]
                }), (0, t.jsxs)("div", {
                    className: "relative mx-auto -mt-[7vw] aspect-video w-full shadow-[0px_0px_80px_rgba(0,0,0,0.7)]",
                    children: [i?.image?.src && (0, t.jsx)(d.default, {
                        fill: !0,
                        alt: i?.image?.alt ?? "",
                        src: i?.image?.src,
                        className: p
                    }), h && !g && i?.video?.src && (0, t.jsx)(m, {
                        url: i.video.src,
                        playing: i.video.autoplay ?? !0,
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
        videoShowcaseB: s
    }) => {
        let r = {
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
                        src: s?.image?.asset.url ?? "",
                        placeholder: s?.image?.asset.metadata?.lqip ?? "",
                        alt: s?.imageAlt ?? ""
                    },
                    video: {
                        src: s?.brandfolder?.muxHLSURL ?? ""
                    }
                }
            },
            n = (0, l.default)({
                dark: "dark" === a
            });
        return (0, t.jsx)(t.Fragment, {
            children: !e && (0, t.jsx)("div", {
                className: n,
                children: (0, t.jsx)("div", {
                    className: "bg-white dark:bg-gray-900",
                    children: (0, t.jsx)("div", {
                        className: "container py-28",
                        children: (0, t.jsx)(h, {
                            ...r
                        })
                    })
                })
            })
        })
    }], 50184)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "39912f19-ae78-51e0-a5c6-cb4396f33000")
    } catch (e) {}
}();
//# debugId=39912f19-ae78-51e0-a5c6-cb4396f33000