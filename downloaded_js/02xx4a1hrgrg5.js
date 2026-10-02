;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "202c82f2-f694-cb46-c9e5-adf01af3b80d")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 584266, 817916, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(829150),
        r = e.i(433519),
        l = e.i(409781),
        i = e.i(722978),
        n = e.i(814701),
        s = e.i(694439),
        o = e.i(112338),
        o = o,
        d = e.i(512418),
        c = e.i(749583),
        u = e.i(595388),
        f = e.i(279858),
        h = e.i(147333),
        m = e.i(429305),
        g = e.i(783078),
        x = e.i(430215);
    let p = {
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
        v = {
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
        y = {
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
    var b = e.i(766930);
    let j = (0, l.forwardRef)(({
            nav: e,
            action: a,
            isSticky: r,
            indexOfActiveLink: l,
            variant: n
        }, s) => {
            let o = (0, i.default)("alternateNavigation relative flex h-12 w-full bg-gray-900", {
                "justify-center": "centered" === n,
                "justify-stretch": "default" === n
            });
            return (0, t.jsx)("div", {
                className: o,
                ref: s,
                children: (0, t.jsx)("div", {
                    className: (0, i.default)("z-40 h-12 bg-gray-900 md:block", {
                        "fixed top-11 mt-1 bg-transparent": r,
                        "absolute top-0 py-1": !r,
                        "w-full": "default" === n
                    }),
                    children: (0, t.jsx)("div", {
                        className: "container h-full",
                        children: (0, t.jsxs)("div", {
                            className: (0, i.default)("flex h-full items-center justify-between rounded-md px-2 transition-colors duration-150", {
                                "bg-gray-900": !r,
                                "bg-[rgba(0,0,0,0.5)] backdrop-blur-sm": r
                            }),
                            children: [(0, t.jsx)("div", {
                                className: "h-full w-full shrink-1",
                                children: (0, t.jsx)("ul", {
                                    className: "flex h-full w-full items-center",
                                    children: e.map((e, a) => (0, t.jsx)(N, {
                                        label: e.label,
                                        href: e.href,
                                        target: e.target,
                                        active: l === a
                                    }, `alternate-navigation-element-${e.label}-${a}`))
                                })
                            }), a && (0, t.jsx)("div", {
                                className: "shrink-0",
                                children: (0, t.jsx)(c.default, {
                                    href: a.href,
                                    target: a.target,
                                    size: "small",
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: a.label
                                })
                            })]
                        })
                    })
                })
            })
        }),
        k = (0, l.forwardRef)(({
            isSticky: e,
            nav: a,
            indexOfActiveLink: r,
            title: o
        }, d) => {
            let [c, u] = (0, l.useState)(!1);
            return o ? (0, t.jsx)("div", {
                className: "alternateNavigation relative h-12 w-full bg-gray-900",
                ref: d,
                children: (0, t.jsx)("div", {
                    className: (0, i.default)("z-40 mt-1 h-12 w-full bg-gray-900 md:block", {
                        "fixed top-[4.5rem] bg-transparent": e,
                        "absolute top-0": !e
                    }),
                    children: (0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsx)("div", {
                            className: (0, i.default)("flex h-full items-center justify-between rounded-md px-3 transition-colors duration-150", {
                                "bg-gray-900": !e,
                                "bg-[rgba(0,0,0,0.65)] backdrop-blur-sm": e
                            }),
                            children: (0, t.jsxs)("div", {
                                className: "w-full",
                                children: [(0, t.jsxs)(n.button, {
                                    animate: c ? "open" : "closed",
                                    className: "flex w-full items-center justify-between py-3",
                                    onClick: () => {
                                        u(!c)
                                    },
                                    children: [(0, t.jsx)("span", {
                                        className: "text-sm font-medium text-white",
                                        children: null == r || c ? o : a[r].label
                                    }), (0, t.jsx)(A, {})]
                                }), (0, t.jsx)(s.ul, {
                                    className: "overflow-hidden",
                                    initial: "initial",
                                    animate: c ? "open" : "closed",
                                    variants: v,
                                    children: a.map(({
                                        label: e,
                                        href: a,
                                        target: l
                                    }, i) => (0, t.jsx)(w, {
                                        label: e,
                                        href: a,
                                        target: l,
                                        active: r === i,
                                        index: i,
                                        isOpen: c,
                                        onClick: () => {
                                            u(!1)
                                        }
                                    }, `alternate-navigation-element-${e}-${i}`))
                                })]
                            })
                        })
                    })
                })
            }) : null
        }),
        A = () => (0, t.jsxs)(o.MotionSvg, {
            variants: y,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            "data-sentry-element": "m.svg",
            "data-sentry-component": "TabArrow",
            "data-sentry-source-file": "AlternateNavigation.tsx",
            children: [(0, t.jsx)("g", {
                clipPath: "url(#clip0_5706_918)",
                "data-sentry-element": "g",
                "data-sentry-source-file": "AlternateNavigation.tsx",
                children: (0, t.jsx)("path", {
                    id: "Vector",
                    d: "M12 6.5C12.568 6.5 12.8647 7.15733 12.522 7.582L12.4713 7.638L8.47133 11.638C8.35654 11.7528 8.2038 11.8217 8.04179 11.8319C7.87977 11.8421 7.7196 11.7928 7.59133 11.6933L7.52867 11.638L3.52867 7.638L3.47333 7.57533L3.43733 7.524L3.40133 7.46L3.39 7.436L3.372 7.39133L3.35067 7.31933L3.344 7.284L3.33733 7.244L3.33467 7.206V7.12733L3.338 7.08867L3.344 7.04867L3.35067 7.014L3.372 6.942L3.39 6.89733L3.43667 6.80933L3.48 6.74933L3.52867 6.69533L3.59133 6.64L3.64267 6.604L3.70667 6.568L3.73067 6.55667L3.77533 6.53867L3.84733 6.51733L3.88267 6.51067L3.92267 6.504L3.96067 6.50133L12 6.5Z",
                    fill: "white",
                    "data-sentry-element": "path",
                    "data-sentry-source-file": "AlternateNavigation.tsx"
                })
            }), (0, t.jsx)("defs", {
                "data-sentry-element": "defs",
                "data-sentry-source-file": "AlternateNavigation.tsx",
                children: (0, t.jsx)("clipPath", {
                    id: "clip0_5706_918",
                    "data-sentry-element": "clipPath",
                    "data-sentry-source-file": "AlternateNavigation.tsx",
                    children: (0, t.jsx)("rect", {
                        width: "16",
                        height: "16",
                        fill: "white",
                        transform: "translate(0 0.5)",
                        "data-sentry-element": "rect",
                        "data-sentry-source-file": "AlternateNavigation.tsx"
                    })
                })
            })]
        }),
        w = e => {
            let a = (0, l.useRef)(null),
                {
                    linkProps: r
                } = (0, f.useLink)(e, a),
                {
                    focusProps: n
                } = (0, h.useFocusRing)(),
                {
                    label: s,
                    href: o,
                    target: c,
                    locale: g,
                    active: x,
                    index: v,
                    isOpen: y
                } = e;
            return (0, t.jsx)("li", {
                className: "border-t border-[#ffffff14]",
                "data-sentry-component": "MobileLinkItem",
                "data-sentry-source-file": "AlternateNavigation.tsx",
                children: (0, t.jsxs)(d.div, {
                    custom: v,
                    variants: p,
                    initial: "initial",
                    animate: y ? "open" : "closed",
                    className: "flex w-full items-center justify-between",
                    "data-sentry-element": "m.div",
                    "data-sentry-source-file": "AlternateNavigation.tsx",
                    children: [(0, t.jsx)(u.Link, {
                        ...(0, m.mergeProps)(r, n),
                        ref: a,
                        href: o,
                        target: c ?? "_self",
                        locale: g,
                        className: "py-3 text-sm font-medium text-white",
                        "data-sentry-element": "NextLink",
                        "data-sentry-source-file": "AlternateNavigation.tsx",
                        children: s
                    }), (0, t.jsx)("div", {
                        className: (0, i.default)("mr-1 h-2 w-2 rounded-full transition-colors duration-300", {
                            "bg-blue": x
                        })
                    })]
                })
            }, `n_${s}`)
        },
        N = e => {
            let a = (0, l.useRef)(null),
                {
                    linkProps: r
                } = (0, f.useLink)(e, a),
                {
                    isFocusVisible: n,
                    focusProps: s
                } = (0, h.useFocusRing)(),
                {
                    label: o,
                    href: d,
                    target: c,
                    locale: g,
                    active: x
                } = e,
                p = (0, i.default)("alternateNavigation_item relative h-full flex items-center px-2 !text-[0.75rem] font-medium group outline-hidden text-gray-200 transition-colors duration-150", {
                    "a11y-ring rounded-xs": n
                }, {
                    active: x,
                    "text-white": x,
                    "text-gray-200": !x
                });
            return (0, t.jsx)("li", {
                className: "h-full",
                "data-sentry-component": "DesktopLinkItem",
                "data-sentry-source-file": "AlternateNavigation.tsx",
                children: (0, t.jsx)(u.Link, {
                    ...(0, m.mergeProps)(r, s),
                    ref: a,
                    href: d,
                    target: c ?? "_self",
                    locale: g,
                    className: p,
                    "data-sentry-element": "NextLink",
                    "data-sentry-source-file": "AlternateNavigation.tsx",
                    children: o
                })
            })
        };
    j.displayName = "DesktopNav", k.displayName = "MobileNav";
    let _ = ({
        variant: e = "default",
        title: a,
        nav: r,
        action: i
    }) => {
        let n = (0, x.default)(`(max-width: ${g.default.Large}px)`),
            s = (0, l.useRef)(null),
            [o, d] = (0, l.useState)(null),
            [c, u] = (0, l.useState)([]),
            [f, h] = (0, l.useState)(!1),
            [m, p] = (0, l.useState)(!1),
            [v, y] = (0, l.useState)(!1),
            A = (0, l.useRef)(0),
            w = () => {
                let e = r.map(e => e.href);
                u([...document.querySelectorAll("a[data-anchor-item]")].filter(t => {
                    let a = t.getAttribute("id");
                    return a && e.find(e => e.includes(a))
                }).map(e => ({
                    top: e.offsetTop + 43
                })))
            },
            N = () => {
                let e;
                s.current && (s.current.offsetTop < window.scrollY ? p(!0) : p(!1)), A.current > window.scrollY && m ? h(!0) : A.current < window.scrollY && h(!1), A.current = window.scrollY, s.current && (s.current.offsetTop > window.innerHeight && !f ? y(!0) : y(!1)), e = null, c.forEach((t, a) => {
                    window.scrollY > t.top && (e = a)
                }), d(e)
            };
        return (0, l.useEffect)(() => {
            let e = document.querySelector("nav");
            e && (e.ariaHidden = String(v))
        }, [v]), (0, l.useLayoutEffect)(() => (w(), window.addEventListener("resize", w), () => {
            window.removeEventListener("resize", w)
        }), []), (0, l.useEffect)(() => (A.current = window.scrollY, window.addEventListener("scroll", N), () => {
            window.removeEventListener("scroll", N)
        }), [f, c, n]), (0, t.jsx)(b.default, {
            "data-sentry-element": "FramerMotionLazy",
            "data-sentry-component": "AlternateNavigation",
            "data-sentry-source-file": "AlternateNavigation.tsx",
            children: n ? (0, t.jsx)(k, {
                ref: s,
                nav: r,
                isSticky: m,
                indexOfActiveLink: o,
                title: a
            }) : (0, t.jsx)(j, {
                ref: s,
                nav: r,
                action: i,
                isSticky: m,
                indexOfActiveLink: o,
                variant: e
            })
        })
    };
    e.s(["default", 0, ({
        title: e,
        navigation: l,
        action: i,
        theme: n,
        isHidden: s
    }) => {
        let {
            state: o
        } = (0, r.default)();
        return (0, t.jsx)(t.Fragment, {
            children: !s && (0, t.jsx)(_, {
                title: e ?? "",
                action: (e => {
                    if (!e?.link) return null;
                    let t = e?.link.linkReference?.href.current;
                    return {
                        label: e?.title ?? "",
                        href: t ? (0, a.default)(t, o, e?.extendLink) : "",
                        target: e?.link.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })(i),
                nav: l.map(e => ({
                    label: e?.title ?? "",
                    href: e?.link?.linkReference?.href.current ?? "",
                    target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                }))
            })
        })
    }], 584266);
    let L = ({
        id: e,
        className: a
    }) => (0, t.jsx)("div", {
        id: e,
        "data-anchor-item": !0,
        className: a,
        style: {
            marginTop: "-120px",
            paddingTop: "120px"
        },
        "data-sentry-component": "AlternateNavigationAnchor",
        "data-sentry-source-file": "AlternateNavigationAnchor.tsx"
    });
    e.s(["default", 0, ({
        anchorID: e
    }) => (0, t.jsx)(L, {
        id: e ?? "",
        "data-sentry-element": "AlternateNavigationAnchor",
        "data-sentry-component": "alternateNavigationAnchorBlock",
        "data-sentry-source-file": "AlternateNavigationAnchorBlock.tsx"
    })], 817916)
}, 776910, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(814507);
    e.s(["default", 0, ({
        title: e,
        action: r,
        isContained: l = !1,
        theme: i,
        isHidden: n
    }) => {
        let s;
        return (0, t.jsx)(t.Fragment, {
            children: !n && (0, t.jsx)("section", {
                className: "dark" === i ? "dark" : "",
                children: (s = r?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self", (0, t.jsx)(a.default, {
                    isContained: l,
                    action: {
                        title: r?.text || "",
                        href: r?.fieldLink?.linkReference?.href?.current || "",
                        target: s
                    },
                    children: e
                }))
            })
        })
    }], 776910)
}, 4390, e => {
    "use strict";
    let t = e.i(459923).default;
    e.s(["default", 0, t])
}, 68274, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        r = e.i(185462);
    e.s(["default", 0, ({
        data: e,
        isHidden: l,
        theme: i
    }) => {
        let n = (0, a.useMemo)(() => e?.map(e => e.value?.text ? {
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
            children: !l && (0, t.jsx)(r.default, {
                keyFigures: n,
                theme: "dark" === i ? "dark" : "light"
            })
        })
    }], 68274)
}, 794189, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722978),
        r = e.i(409781),
        l = e.i(131581),
        i = e.i(124576),
        n = e.i(833449),
        s = e.i(425314),
        o = e.i(805518);
    let d = (0, s.default)(() => e.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }),
        c = ({
            image: e,
            video: s,
            layout: c,
            forcedAspectRatio: u = "none",
            richCaption: f
        }) => {
            let h = (0, r.useRef)(null),
                [m, g] = (0, r.useState)(!1),
                x = (0, l.useInView)(h),
                p = (0, i.useReducedMotion)(),
                v = (0, a.default)("", {
                    "max-w-lg": "small" === c,
                    "max-w-lg mx-auto": "small-center" === c,
                    "container grid lg:grid-cols-12 lg:gap-2": "offset" === c
                }),
                y = (0, a.default)("relative overflow-hidden rounded-2xl", {
                    "aspect-square": "1:1" === u,
                    "aspect-[4/3]": "4:3" === u,
                    "aspect-video": "16:9" === u
                }),
                b = (0, a.default)("absolute cover z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": m && !p && x && s?.src
                }),
                j = {
                    aspectRatio: "none" === u && e.dimensions?.width && e.dimensions?.height ? `${e.dimensions.width}/${e.dimensions.height}` : void 0
                };
            return (0, t.jsx)("div", {
                className: v,
                ref: h,
                "data-sentry-component": "Media",
                "data-sentry-source-file": "Media.tsx",
                children: (0, t.jsxs)("div", {
                    className: "offset" === c ? "lg:col-start-4 lg:col-end-13 lg:row-start-1" : "",
                    children: [(0, t.jsxs)("div", {
                        className: y,
                        style: j,
                        children: [(0, t.jsx)(n.default, {
                            src: e.src,
                            placeholder: "blur",
                            blurDataURL: e.placeholder,
                            fill: !0,
                            alt: e.alt ?? "",
                            className: b,
                            sizes: (() => {
                                switch (c) {
                                    case "small":
                                        return "32rem";
                                    case "offset":
                                        return "1440px";
                                    default:
                                        return "100vw"
                                }
                            })(),
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "Media.tsx"
                        }), x && !p && s?.src && (0, t.jsx)(d, {
                            url: s.src,
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
                        children: (0, t.jsx)(o.default, {
                            children: f
                        })
                    })]
                })
            })
        };
    var u = e.i(186114),
        f = e.i(195051);
    let h = ({
        provider: l,
        image: i,
        video: d,
        layout: c,
        buttonLabel: h,
        richCaption: m,
        blockKey: g,
        videoInline: x,
        blockedMessage: p,
        consentButtonLabel: v
    }) => {
        let y = (0, r.useRef)(null),
            [b, j] = (0, r.useState)(!1),
            k = null;
        "youtube" === l ? k = (0, s.default)(() => e.A(574228), {
            loadableGenerated: {
                modules: [10770]
            },
            ssr: !1
        }) : "brandfolder" === l && (k = (0, s.default)(() => e.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }));
        let A = {};
        "brandfolder" === l && (A = {
            hlsOptions: {
                maxMaxBufferLength: 1,
                qualityStartLevel: 1
            }
        });
        let w = () => {
                j(!0)
            },
            N = (0, a.default)("", {
                "max-w-lg": "small" === c,
                "max-w-lg mx-auto": "small-center" === c,
                "container grid lg:grid-cols-12 lg:gap-2": "offset" === c
            }),
            _ = (0, a.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": b && d && d.src
            }),
            L = (0, a.default)("relative", {
                "lg:col-start-4 lg:col-end-13 lg:row-start-1": "offset" === c
            });
        return (0, t.jsx)("div", {
            className: N,
            ref: y,
            "data-sentry-component": "MediaVideo",
            "data-sentry-source-file": "MediaVideo.tsx",
            children: (0, t.jsxs)("div", {
                className: L,
                children: [(0, t.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-2xl",
                    children: [i?.src && (0, t.jsxs)("div", {
                        className: _,
                        onClick: w,
                        children: [!x && (0, t.jsx)(u.default, {
                            handleIsPlaying: w,
                            className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                            label: h,
                            "data-link-location": `${g}-video-play`,
                            "data-link-id": `${g}-video-play`,
                            "data-link-type": "CTA"
                        }), (0, t.jsx)(n.default, {
                            src: i.src,
                            placeholder: "blur",
                            blurDataURL: i.placeholder,
                            fill: !0,
                            alt: i.alt ?? "",
                            className: "cover absolute object-cover brightness-75"
                        })]
                    }), d?.src && k && (0, t.jsx)(k, {
                        url: d.src,
                        playing: b,
                        loop: x,
                        muted: x,
                        playsinline: x,
                        width: "100%",
                        height: "100%",
                        className: "[&>video]:object-cover",
                        onReady: () => {
                            x && j(!0)
                        },
                        controls: !x,
                        config: A
                    }), ["youtube.com", "youtu.be"].some(e => d?.src?.includes(e)) && (0, t.jsx)(f.default, {
                        blockedMessage: p,
                        consentButtonLabel: v
                    })]
                }), m && (0, t.jsx)("div", {
                    className: "loco-text-body-sm mt-2 text-gray-500",
                    children: (0, t.jsx)(o.default, {
                        children: m
                    })
                })]
            })
        })
    };
    var m = e.i(722990);
    e.s(["default", 0, ({
        mediaType: e,
        provider: r,
        brandfolder: l,
        youtube_url: i,
        image: n,
        theme: s,
        layout: o,
        aspectRatio: d,
        buttonLabel: u,
        videoInline: f,
        richCaption: g,
        blockKey: x,
        isHidden: p,
        consent: v
    }) => {
        let y = {
                type: e ?? "image",
                layout: o ?? "full",
                theme: s ?? "light",
                video: {
                    src: ("brandfolder" === r ? l?.muxHLSURL : i) ?? null
                },
                aspectRatio: d ?? "none",
                image: {
                    src: n?.file?.asset.url ?? "",
                    alt: n?.alt ?? "",
                    caption: n?.caption ?? "",
                    placeholder: n?.file?.asset.metadata?.lqip ?? "",
                    dimensions: {
                        width: n?.file?.asset?.metadata?.dimensions?.width ?? 0,
                        height: n?.file?.asset?.metadata?.dimensions?.height ?? 0
                    }
                },
                provider: r,
                buttonLabel: u,
                videoInline: f,
                richCaption: (0, t.jsx)(m.PortableText, {
                    value: g
                })
            },
            b = "full";
        "small" === o ? b = "small" : "small-center" === o ? b = "small-center" : "offset" === o && (b = "offset");
        let j = "none";
        ("1:1" === d || "16:9" === d || "4:3" === d) && (j = d);
        let k = (0, a.default)("py-16", {
                "dark bg-black": "dark" === y.theme
            }),
            A = (0, a.default)("container");
        return (0, t.jsx)(t.Fragment, {
            children: !p && (0, t.jsx)("div", {
                className: k,
                children: (0, t.jsx)("div", {
                    className: A,
                    children: "video" === y.type ? (0, t.jsx)(h, {
                        provider: "brandfolder" === r ? "brandfolder" : "youtube",
                        layout: b,
                        video: y.video,
                        image: y.image,
                        buttonLabel: y.buttonLabel,
                        richCaption: y.richCaption,
                        blockKey: x,
                        videoInline: y.videoInline,
                        blockedMessage: v?.blockedMessage,
                        consentButtonLabel: v?.consentButtonLabel || ""
                    }) : (0, t.jsx)(c, {
                        layout: b,
                        image: y.image,
                        forcedAspectRatio: j,
                        richCaption: y.richCaption
                    })
                })
            })
        })
    }], 794189)
}, 25665, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        r = e.i(722990),
        l = e.i(833449),
        i = e.i(229696),
        n = e.i(805518),
        s = e.i(570133),
        o = e.i(210310),
        d = e.i(7075),
        c = e.i(775041),
        u = e.i(722978);
    let f = {
        types: {
            imageWithAlt: ({
                value: e
            }) => {
                let a = e?.file?.asset,
                    r = a?.metadata?.dimensions;
                return a?.url && r?.width && r?.height ? (0, t.jsx)(l.default, {
                    alt: e?.alt || "",
                    src: a.url,
                    width: r.width,
                    height: r.height,
                    className: "my-12"
                }) : null
            },
            table: ({
                value: e
            }) => (0, t.jsx)(i.default, {
                className: "my-12",
                children: e.tableContent || ""
            }),
            htmlTable: ({
                value: e
            }) => (0, t.jsx)(o.default, {
                table: e,
                hideTitle: !0
            }),
            anchor: ({
                value: e
            }) => (0, t.jsx)(d.Link, {
                id: e.anchorID,
                href: "",
                className: "md:absolute md:-mt-28"
            }),
            codeBlock: ({
                value: e
            }) => e.isHidden ? null : (0, t.jsx)(s.default, {
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
        theme: l,
        layout: i,
        spacing: s,
        isHidden: o,
        productCategoryFilter: d
    }) => {
        let [h] = (0, a.useContext)(c.FiltersContext), {
            subcategories: m
        } = h.categories?.find(({
            _id: e
        }) => e === h.selectedCategory) || {}, g = null != h.selectedSubcategory ? (m || []).find(({
            _id: e
        }) => e === h.selectedSubcategory) : null, x = !d || d.categories?.find(e => e._id === h.selectedCategory) != null && (null == g || !d.subcategories || d.subcategories.some(({
            _id: e
        }) => e === h.selectedSubcategory)), p = (0, u.default)("dark:bg-black", {
            "py-8 md:py-12": "default" === s || "small" === s || !s,
            "py-16": "large" === s,
            "bg-black dark": "dark" === l
        }), v = (0, u.default)("", {
            container: "default" === i || !i,
            "container max-w-[60rem] mx-auto": "center" === i,
            "container grid lg:grid-cols-12 lg:gap-2": "offset" === i
        }), y = (0, u.default)("[&>*]:loco-text-body [&>*]:mb-4", {
            "lg:col-start-4 lg:col-end-10 lg:row-start-1": "offset" === i
        });
        return (0, t.jsx)(t.Fragment, {
            children: !o && x && (0, t.jsx)("section", {
                className: p,
                children: (0, t.jsx)("div", {
                    className: v,
                    children: (0, t.jsx)(n.default, {
                        className: y,
                        children: (0, t.jsx)(r.PortableText, {
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
    var t = e.i(785328),
        a = e.i(722978),
        r = e.i(409781),
        l = e.i(749583),
        i = e.i(425314),
        n = e.i(131581),
        s = e.i(124576),
        o = e.i(833449);
    let d = (0, i.default)(() => e.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }),
        c = ({
            title: e,
            eyebrow: i,
            description: c,
            image: u,
            video: f,
            visualPlacement: h,
            action: m,
            blockKey: g,
            cardHeading: x = "p"
        }) => {
            let p = (0, r.useRef)(null),
                [v, y] = (0, r.useState)(!1),
                b = (0, n.useInView)(p, {
                    once: !0
                }),
                j = (0, s.useReducedMotion)(),
                k = (0, a.default)("bg-gray-100 relative h-full rounded-xl overflow-hidden dark:bg-gray-900", {
                    dark: "background" === h
                }),
                A = (0, a.default)("z-0", {
                    "absolute top-0 left-0 w-full h-full": "background" === h,
                    "aspect-video relative mt-8 -mb-8": "default" === h
                }, "background" === h ? "after:content after:absolute after:z-10 after:inset-0 after:bg-gradient-to-b after:from-10% after:from-black after:to-transparent after:opacity-75" : ""),
                w = (0, a.default)("z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": v && !j && b && f?.src,
                    "": "background" === h
                }),
                N = (0, a.default)("absolute left-0 top-0 [&>video]:object-cover", {
                    "brightness-50 ": "background" === h
                });
            return (0, t.jsx)("div", {
                className: k,
                ref: p,
                "data-sentry-component": "BentoCard",
                "data-sentry-source-file": "BentoCard.tsx",
                children: (0, t.jsxs)("div", {
                    className: "flex h-full flex-col justify-between p-8",
                    children: [(0, t.jsxs)("div", {
                        className: "relative z-10",
                        children: [i && (0, t.jsx)("span", {
                            className: "loco-caption-sm mb-4 block opacity-70",
                            children: i
                        }), e && (0, t.jsx)(x, {
                            className: "loco-text-heading-xs",
                            children: e
                        }), c && (0, t.jsx)("p", {
                            className: "loco-text-body-sm mt-2 max-w-xs opacity-70",
                            children: c
                        }), (m?.href || m?.renderModal) && (0, t.jsx)("div", {
                            className: "mt-8",
                            children: m?.renderModal ? m.renderModal() : (0, t.jsx)(l.default, {
                                href: m.href,
                                rounded: !0,
                                outlined: !0,
                                hasArrow: !0,
                                "data-link-location": `${g}-action-${m.label}`,
                                "data-link-id": `${g}-action`,
                                "data-link-type": "CTA",
                                children: m.label
                            }, `action-${m.label}`)
                        })]
                    }), (0, t.jsxs)("div", {
                        className: A,
                        children: [u?.src && (0, t.jsx)(o.default, {
                            fill: !0,
                            alt: u.alt ?? "",
                            src: u.src,
                            className: w
                        }), b && !j && f?.src && (0, t.jsx)(d, {
                            url: f.src,
                            playing: f.autoplay ?? !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: N,
                            onReady: () => {
                                y(!0)
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
            blockKey: r,
            cardsHeading: l
        }) => {
            let i = (0, a.default)("bentoCards_grid", 1 === e.length && "is-single", e.length % 2 == 0 && "is-two-multiple", e.length % 3 == 0 && "is-three-multiple", function(e) {
                if (e <= 1) return !1;
                if (2 === e) return !0;
                if (e % 2 == 0) return !1;
                for (let t = 3; t <= Math.sqrt(e); t += 2)
                    if (e % t == 0) return !1;
                return !0
            }(e.length) && "is-prime");
            return (0, t.jsx)("div", {
                "data-sentry-component": "BentoCards",
                "data-sentry-source-file": "BentoCards.tsx",
                children: (0, t.jsx)("div", {
                    className: i,
                    children: e.map((e, a) => (0, t.jsx)("div", {
                        className: "bentoCards_item",
                        children: (0, t.jsx)(c, {
                            ...e,
                            blockKey: r,
                            cardHeading: l
                        })
                    }, `bento-card-${r}-${a}`))
                })
            })
        };
    var f = e.i(115219);
    e.s(["default", 0, ({
        theme: e,
        blockKey: r,
        isHidden: l,
        cards: i,
        bentoCardsHeading: n
    }) => {
        let {
            renderModal: s
        } = (0, f.useFormModal)(i?.map(e => e.actions?.[0]).filter(Boolean)), o = i?.map(e => {
            let t, a, r, l = e?.actions?.[0],
                i = !!l?.form;
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
                action: l ? (t = i ? "" : l.link?.linkReference?.href.current ?? "", a = l.link?.linkReference?.target === "_blank" ? "_blank" : "_self", r = {
                    label: l.title ?? "",
                    href: t,
                    target: a
                }, i ? {
                    ...r,
                    renderModal: () => {
                        let e = l.form || {},
                            t = {
                                title: e.title || "",
                                description: e.description || "",
                                fields: e.fields || [],
                                actions: e.actions || {},
                                sfdcIntegration: l.webinarFormParametersContent?.sfdcIntegration || {}
                            };
                        return s({
                            label: l.title ?? "",
                            form: t
                        })
                    }
                } : r) : null
            }
        }) ?? [], d = (0, a.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)(t.Fragment, {
            children: !l && (0, t.jsx)("div", {
                className: d,
                children: (0, t.jsx)("div", {
                    className: "bg-white dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container py-16",
                        children: (0, t.jsx)(u, {
                            blockKey: r,
                            theme: "dark" === e ? "dark" : "light",
                            cards: o,
                            cardsHeading: "h2" === n || "h3" === n || "h4" === n ? n : "p"
                        })
                    })
                })
            })
        })
    }], 742958);
    let h = (0, i.default)(() => e.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }),
        m = ({
            videoShowcaseA: e,
            videoShowcaseB: l
        }) => {
            let i = (0, r.useRef)(null),
                [d, c] = (0, r.useState)(!1),
                [u, f] = (0, r.useState)(!1),
                m = (0, n.useInView)(i, {
                    once: !0
                }),
                g = (0, s.useReducedMotion)(),
                x = (0, a.default)("transition-opacity duration-500 object-cover", {
                    "opacity-0": d && !g && m && e?.image?.src
                }),
                p = (0, a.default)("transition-opacity duration-500 object-cover", {
                    "opacity-0": u && !g && m && e?.image?.src
                });
            return (0, t.jsxs)("div", {
                className: "w-full",
                ref: i,
                "data-sentry-component": "VideosShowcase",
                "data-sentry-source-file": "VideosShowcase.tsx",
                children: [(0, t.jsxs)("div", {
                    className: "relative mx-auto aspect-square max-w-[35vw]",
                    children: [e?.image?.src && (0, t.jsx)(o.default, {
                        fill: !0,
                        alt: e?.image?.alt ?? "",
                        src: e?.image?.src,
                        className: x
                    }), m && !g && e?.video?.src && (0, t.jsx)(h, {
                        url: e.video.src,
                        playing: e.video.autoplay ?? !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 [&>video]:object-cover",
                        onReady: () => {
                            c(!0)
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
                    children: [l?.image?.src && (0, t.jsx)(o.default, {
                        fill: !0,
                        alt: l?.image?.alt ?? "",
                        src: l?.image?.src,
                        className: p
                    }), m && !g && l?.video?.src && (0, t.jsx)(h, {
                        url: l.video.src,
                        playing: l.video.autoplay ?? !0,
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
        theme: r,
        videoShowcaseA: l,
        videoShowcaseB: i
    }) => {
        let n = {
                videoShowcaseA: {
                    image: {
                        src: l?.image?.asset.url ?? "",
                        placeholder: l?.image?.asset.metadata?.lqip ?? "",
                        alt: l?.imageAlt ?? ""
                    },
                    video: {
                        src: l?.brandfolder?.muxHLSURL ?? ""
                    }
                },
                videoShowcaseB: {
                    image: {
                        src: i?.image?.asset.url ?? "",
                        placeholder: i?.image?.asset.metadata?.lqip ?? "",
                        alt: i?.imageAlt ?? ""
                    },
                    video: {
                        src: i?.brandfolder?.muxHLSURL ?? ""
                    }
                }
            },
            s = (0, a.default)({
                dark: "dark" === r
            });
        return (0, t.jsx)(t.Fragment, {
            children: !e && (0, t.jsx)("div", {
                className: s,
                children: (0, t.jsx)("div", {
                    className: "bg-white dark:bg-gray-900",
                    children: (0, t.jsx)("div", {
                        className: "container py-28",
                        children: (0, t.jsx)(m, {
                            ...n
                        })
                    })
                })
            })
        })
    }], 50184)
}, 913890, 186114, 577702, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        r = e.i(722978),
        l = e.i(131581),
        i = e.i(124576),
        n = e.i(833449),
        s = e.i(425314),
        o = e.i(825610),
        d = e.i(783078),
        c = e.i(749583);
    let u = ({
        className: e,
        handleIsPlaying: a,
        label: r,
        ...l
    }) => (0, t.jsx)("div", {
        className: e,
        "data-sentry-component": "ButtonPlay",
        "data-sentry-source-file": "ButtonPlay.tsx",
        children: (0, t.jsx)("button", {
            className: "transition-bg bg-blue hover:bg-blue-dark flex h-20 w-20 transform items-center justify-center rounded-full duration-300",
            onClick: a,
            type: "button",
            "aria-label": r,
            ...l,
            children: (0, t.jsx)("span", {
                className: "block h-6 w-6",
                children: (0, t.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20",
                    "data-sentry-element": "svg",
                    "data-sentry-source-file": "ButtonPlay.tsx",
                    children: (0, t.jsx)("path", {
                        fill: "#fff",
                        stroke: "#fff",
                        d: "M17.95 9.998v.004a.429.429 0 0 1-.207.37l-.004.001L6.483 17.26a.45.45 0 0 1-.456.009l-.002-.001a.44.44 0 0 1-.164-.16l-.69.404.69-.405a.44.44 0 0 1-.061-.221V3.116a.439.439 0 0 1 .225-.382l.002-.001a.45.45 0 0 1 .455.008L17.74 9.627l.003.003a.429.429 0 0 1 .208.368Z",
                        "data-sentry-element": "path",
                        "data-sentry-source-file": "ButtonPlay.tsx"
                    })
                })
            })
        })
    });
    e.s(["default", 0, u], 186114);
    var f = e.i(595388);
    let h = (0, s.default)(() => e.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }),
        m = ({
            title: e,
            description: s,
            image: m,
            video: g,
            action: x,
            variant: p = "column",
            videoInline: v = !0,
            buttonLabel: y = "Play video",
            blockKey: b,
            titleTag: j = "h3",
            locale: k,
            index: A
        }) => {
            let w = b || o.trackingLocation.uniteCard,
                N = void 0 !== A ? `${w}-${A}` : w,
                _ = (0, a.useRef)(null),
                [L, C] = (0, a.useState)(!1),
                R = (0, l.useInView)(_),
                S = (0, i.useReducedMotion)(),
                E = () => {
                    C(!0)
                };
            (0, a.useEffect)(() => {
                v ? C(R) : R || C(!1)
            }, [R, v]);
            let B = (0, r.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0 pointer-events-none": L && !S && R && g?.src
                }),
                T = "horizontal" === p && x,
                M = (0, r.default)("flex flex-col", {
                    "min-h-[14rem]": "stacked" === p || "column" === p,
                    grow: "column" !== p && "horizontal" !== p,
                    "min-h-[14rem] xl:min-h-[18rem] xl:flex-row xl:gap-4": "column" === p
                }),
                F = (0, r.default)("rounded-lg bg-gray-100 p-4 dark:bg-gray-900", {
                    "h-full": "horizontal" !== p,
                    "group h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-pointer": "horizontal" === p && T,
                    "h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-auto": "horizontal" === p && !T
                }),
                I = (0, r.default)("relative overflow-hidden rounded-lg", {
                    "aspect-video w-full": "horizontal" !== p,
                    "aspect-video w-full xl:flex-shrink-0 xl:self-start xl:max-w-1/2": "horizontal" === p
                }),
                D = (0, r.default)("cover absolute object-cover", {
                    "transition-transform duration-400 group-hover:scale-110": "horizontal" === p && T
                }),
                $ = (0, t.jsxs)("div", {
                    ref: _,
                    className: F,
                    children: ["horizontal" === p && T && (0, t.jsx)("div", {
                        className: "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-400 [background:linear-gradient(to_top,#000_0%,#666_60%,#666_100%)] group-hover:opacity-100"
                    }), (0, t.jsxs)("div", {
                        className: (0, r.default)({
                            "relative z-10 flex h-full flex-col gap-6 rounded-lg bg-gray-100 p-3 xl:w-full xl:flex-row dark:bg-gray-900": "horizontal" === p,
                            "flex h-full flex-col justify-between gap-4": "horizontal" !== p
                        }),
                        children: [(m?.src || g?.src) && (0, t.jsxs)("div", {
                            className: I,
                            children: [g?.src && (0, t.jsx)(h, {
                                url: g.src,
                                playing: L && R && !S,
                                loop: !!v,
                                muted: v,
                                playsinline: v && !S,
                                width: "100%",
                                height: "100%",
                                className: "absolute top-0 left-0 [&>video]:object-cover",
                                onReady: () => {
                                    v && C(!0)
                                },
                                controls: !v,
                                config: {
                                    hlsOptions: {
                                        maxMaxBufferLength: 1,
                                        startLevel: 1
                                    }
                                }
                            }), m && (0, t.jsxs)("div", {
                                className: B,
                                onClick: E,
                                children: [!v && (0, t.jsx)(u, {
                                    handleIsPlaying: E,
                                    className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: y,
                                    "data-link-location": N,
                                    "data-link-id": `${N}-video-play`
                                }), (0, t.jsx)(n.default, {
                                    src: m.src,
                                    placeholder: m.placeholder ? "blur" : "empty",
                                    blurDataURL: m.placeholder,
                                    fill: !0,
                                    alt: m.alt ?? "",
                                    className: D,
                                    sizes: `(min-width: ${d.default.Large}px) 33vw, (min-width: ${d.default.Medium}px) 50vw, 100vw`
                                })]
                            })]
                        }), (0, t.jsx)("div", {
                            className: (0, r.default)(M),
                            children: "column" !== p && "horizontal" !== p ? (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)(j, {
                                    className: "loco-text-body-lg-medium -mt-2",
                                    children: e
                                }), (0, t.jsxs)("div", {
                                    className: "flex shrink-0 grow flex-col justify-between",
                                    children: [(0, t.jsx)("div", {
                                        className: "loco-text-body mt-2 whitespace-pre-line text-gray-700 dark:text-gray-400",
                                        children: s
                                    }), (x?.href && x?.label || x?.renderModal) && (0, t.jsx)("div", {
                                        className: "mt-8",
                                        children: x?.renderModal ? x.renderModal() : (0, t.jsx)(c.default, {
                                            locale: k,
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
                            }) : "horizontal" === p ? (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)(j, {
                                    className: "loco-text-body-lg-medium -mt-2 lg:mt-0",
                                    children: e
                                }), (0, t.jsxs)("div", {
                                    className: "flex shrink-0 grow flex-col justify-between lg:flex-1",
                                    children: [(0, t.jsx)("div", {
                                        className: "loco-text-body mt-2 line-clamp-5 whitespace-pre-line text-gray-700 lg:line-clamp-3 lg:text-gray-900 dark:text-gray-400 lg:dark:text-white",
                                        children: s
                                    }), (x?.href && x?.label || x?.renderModal) && (0, t.jsx)("div", {
                                        className: "mt-8 lg:mt-6",
                                        children: x?.renderModal ? x.renderModal() : (0, t.jsx)(c.default, {
                                            locale: k,
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
                            }) : (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)(j, {
                                    className: "loco-text-body-lg-medium -mt-2 xl:w-2/5",
                                    children: e
                                }), (0, t.jsxs)("div", {
                                    className: "flex shrink-0 grow flex-col justify-between xl:-mt-1 xl:w-3/5",
                                    children: [(0, t.jsx)("div", {
                                        className: "loco-text-body mt-1 whitespace-pre-line xl:mt-0",
                                        children: s
                                    }), (x?.href && x?.label || x?.renderModal) && (0, t.jsx)("div", {
                                        children: x?.renderModal ? x.renderModal() : (0, t.jsx)(c.default, {
                                            locale: k,
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
            return T ? (0, t.jsx)(f.Link, {
                href: x.href,
                target: x.target,
                className: "cursor-pointer",
                "data-link-location": N,
                "data-link-id": `${N}-link-wrapper`,
                children: $
            }) : $
        },
        g = ({
            title: e,
            subtitle: a,
            description: r,
            action: l,
            blockKey: i,
            index: n
        }) => {
            let s = i || o.trackingLocation.uniteCardSubscription,
                d = void 0 !== n ? `${s}-${n}` : s;
            return (0, t.jsxs)("div", {
                className: "flex h-80 flex-col justify-between rounded-lg bg-gray-900 p-4 text-white",
                "data-sentry-component": "CardSubscription",
                "data-sentry-source-file": "CardSubscription.tsx",
                children: [(0, t.jsx)("h3", {
                    className: "loco-text-heading-sm -mt-2 md:mr-20",
                    children: e
                }), (0, t.jsx)("div", {
                    className: "loco-text-body-lg opacity-70",
                    children: a
                }), (0, t.jsxs)("div", {
                    className: "flex grow flex-col justify-between",
                    children: [(0, t.jsx)("div", {
                        className: "loco-text-body mt-8 opacity-70",
                        children: r
                    }), (0, t.jsx)("div", {
                        children: (0, t.jsx)(c.default, {
                            href: l?.href,
                            target: l?.target,
                            variant: "primary",
                            outlined: !0,
                            rounded: !0,
                            hasArrow: !0,
                            "data-link-location": d,
                            "data-link-id": `${d}-action`,
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "CardSubscription.tsx",
                            children: l?.label
                        })
                    })]
                })]
            })
        };
    var x = e.i(131564);
    let p = ({
        theme: e = "light",
        title: l,
        description: i,
        filters: n,
        actions: s,
        cards: d,
        variant: u = "column",
        blockKey: f,
        cardsHeading: h
    }) => {
        let [p, v] = (0, a.useState)(n?.[0]?.value || ""), y = (e, a) => {
            let r = {
                uniteCard: m,
                cardSubscription: g
            } [e?.type];
            return (0, t.jsx)("div", {
                className: "w-full px-0 py-1 md:w-1/2 md:px-1 md:py-1 lg:w-1/3",
                "data-sentry-component": "renderCards",
                "data-sentry-source-file": "Cards.tsx",
                children: (0, t.jsx)(r, {
                    ...e,
                    variant: u,
                    blockKey: f || o.trackingLocation.uniteCards,
                    titleTag: h,
                    index: a,
                    "data-sentry-element": "CardComponent",
                    "data-sentry-source-file": "Cards.tsx"
                })
            }, `${e.title}-${a}`)
        }, b = (0, r.default)({
            dark: "dark" === e || "collapsiblecards" === e
        }), j = (0, r.default)({
            "bg-white dark:bg-black": "light" === e || "dark" === e,
            "bg-transparent": "collapsiblecards" === e
        }), k = (0, r.default)("w-full flex flex-wrap justify-center", {
            "mt-8 pb-10": (!l || !i) && "collapsiblecards" !== e
        });
        return (0, t.jsx)("section", {
            className: b,
            "data-sentry-component": "Cards",
            "data-sentry-source-file": "Cards.tsx",
            children: (0, t.jsx)("div", {
                className: j,
                children: (0, t.jsxs)("div", {
                    className: "collapsiblecards" === e ? "flex flex-col items-center" : "container flex flex-col items-center",
                    children: [(l || i) && (0, t.jsx)(x.default, {
                        title: l,
                        description: i
                    }), (n && n.length > 0 || s && s.length > 0) && (0, t.jsxs)("div", {
                        className: "mb-8 flex w-full flex-wrap justify-center gap-4",
                        children: [n.map((e, a) => (0, t.jsx)(c.default, {
                            rounded: !0,
                            outlined: !0,
                            onPress: () => {
                                e.onPress && e.onPress(), v(e.value)
                            },
                            active: p.includes(e.value),
                            "data-link-location": f || o.trackingLocation.uniteCardsFilter,
                            "data-link-id": `${f||o.trackingLocation.uniteCardsFilter}-filter-${a}`,
                            "data-sentry-element": "Button",
                            "data-sentry-component": "renderFilters",
                            "data-sentry-source-file": "Cards.tsx",
                            children: e.title
                        }, `filter-${e}-${a}`)), s.map((e, a) => (0, t.jsx)(c.default, {
                            href: e.href,
                            rounded: !0,
                            outlined: !0,
                            hasArrow: !0,
                            "data-link-location": f || o.trackingLocation.uniteCardsAction,
                            "data-link-id": `${f||o.trackingLocation.uniteCardsAction}-action-${a}`,
                            "data-sentry-element": "Button",
                            "data-sentry-component": "renderActions",
                            "data-sentry-source-file": "Cards.tsx",
                            children: e.title
                        }, `action-${e}-${a}`))]
                    }), (0, t.jsx)("div", {
                        className: k,
                        children: p ? d.filter(e => e.tags?.includes(p)).map(y) : d.map(y)
                    })]
                })
            })
        })
    };
    e.s(["default", 0, p], 577702);
    var v = e.i(803695),
        y = e.i(998569),
        b = e.i(430215);
    let j = ({
        theme: e = "light",
        slides: l,
        variant: i = "short",
        blockKey: n,
        title: s
    }) => {
        let [o, c] = (0, a.useState)(0), u = (0, a.useRef)(null), f = (0, b.default)(`(min-width: ${d.default.Large}px)`), h = "gdc2026" === i, x = (0, r.default)({
            dark: "dark" === e
        }), p = (0, a.useCallback)((e, t) => {
            c(t)
        }, []), j = (0, a.useCallback)(() => {
            u.current && u.current.slickPrev()
        }, []), k = (0, a.useCallback)(() => {
            u.current && u.current.slickNext()
        }, []), A = {
            dots: !1,
            infinite: !1,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: !1,
            beforeChange: p,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }]
        }, w = (e, a) => {
            let r = {
                uniteCard: m,
                cardSubscription: g
            } [e.type];
            return (0, t.jsx)("div", {
                className: h ? "col-span-12 h-full" : "col-span-12 md:col-span-6 lg:col-span-4",
                "data-sentry-component": "renderCards",
                "data-sentry-source-file": "CarouselCards.tsx",
                children: (0, t.jsx)(r, {
                    ...e,
                    variant: h ? "horizontal" : i,
                    blockKey: `${n}-${a}`,
                    titleTag: "p",
                    "data-sentry-element": "CardComponent",
                    "data-sentry-source-file": "CarouselCards.tsx"
                })
            }, `carousel-card-${n}-${a}-${e.title}`)
        }, N = () => {
            let a = f ? 2 : 1,
                i = l.length - a + 1;
            return (0, t.jsx)("div", {
                className: "flex gap-2",
                "data-sentry-component": "renderDots",
                "data-sentry-source-file": "CarouselCards.tsx",
                children: Array.from({
                    length: i
                }).map((a, l) => (0, t.jsx)("button", {
                    className: (0, r.default)("h-2 w-2 rounded-full transition-all", o === l ? "bg-white" : "dark" === e ? "bg-gray-600" : "bg-gray-300"),
                    "aria-label": `Go to slide ${l+1}`,
                    "aria-current": o === l ? "true" : "false"
                }, l))
            })
        }, _ = f ? 2 : 1, L = l.length - _ + 1, C = 0 === o, R = o >= L - 1, S = f && l.length > 2 || !f && l.length > 1;
        return h ? (0, t.jsx)("section", {
            className: x,
            children: (0, t.jsx)("div", {
                className: "carousel-cards py-16 dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: "container",
                    children: [(0, t.jsxs)("div", {
                        className: "mb-8 hidden items-center gap-8 lg:flex",
                        children: [(0, t.jsx)("div", {
                            className: "flex flex-1 items-center",
                            children: s && (0, t.jsx)("h2", {
                                className: "loco-text-heading-xs text-left",
                                children: s
                            })
                        }), S && (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("div", {
                                className: "flex flex-1 items-center justify-center",
                                children: N()
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-1 items-center justify-end gap-2",
                                children: [(0, t.jsx)(y.default, {
                                    direction: "left",
                                    onPress: j,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: C
                                }), (0, t.jsx)(y.default, {
                                    onPress: k,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: R
                                })]
                            })]
                        })]
                    }), s && (0, t.jsx)("h2", {
                        className: "loco-text-heading-xl mb-6 text-left lg:hidden",
                        children: s
                    }), (0, a.createElement)(v.default, {
                        ...A,
                        ref: u,
                        key: `slider-${l.length}`,
                        className: "overflow-hidden"
                    }, l.map(w)), S && (0, t.jsxs)("div", {
                        className: "mt-8 flex flex-col items-center gap-4 lg:hidden",
                        children: [N(), (0, t.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, t.jsx)(y.default, {
                                direction: "left",
                                onPress: j,
                                ariaLabel: "Previous slide",
                                variant: "primary",
                                isDisabled: C
                            }), (0, t.jsx)(y.default, {
                                onPress: k,
                                ariaLabel: "Next slide",
                                variant: "primary",
                                isDisabled: R
                            })]
                        })]
                    })]
                })
            })
        }) : (0, t.jsx)("section", {
            className: x,
            "data-sentry-component": "CarouselCards",
            "data-sentry-source-file": "CarouselCards.tsx",
            children: (0, t.jsx)("div", {
                className: "carousel-cards py-16 dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: "container",
                    children: [(0, t.jsx)("div", {
                        className: "mb-8 flex items-center justify-between",
                        children: S && (0, t.jsxs)(t.Fragment, {
                            children: [N(), (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)(y.default, {
                                    direction: "left",
                                    onPress: j,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: C
                                }), (0, t.jsx)(y.default, {
                                    onPress: k,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: R
                                })]
                            })]
                        })
                    }), (0, a.createElement)(v.default, {
                        ...A,
                        ref: u,
                        key: `slider-${l.length}`,
                        className: "overflow-visible",
                        "data-sentry-element": "Slider",
                        "data-sentry-source-file": "CarouselCards.tsx"
                    }, l.map(w))]
                })
            })
        })
    };
    var k = e.i(869324),
        A = e.i(115219);
    let w = [{
        src: e.i(379294).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APLZ9Vnvz+/AYDoDzX//2Q=="
    }, {
        src: e.i(462847).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APJp1W3tNqjPm9Se2K//2Q=="
    }, {
        src: e.i(245094).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APONHVbm4jikXKyOAa//2Q=="
    }];
    e.s(["default", 0, ({
        theme: e,
        title: a,
        description: r,
        filters: l,
        actions: i,
        variant: n,
        isCarousel: s,
        cards: o,
        cardsBlog: d,
        newsItems: c,
        blogItems: u,
        blockKey: f,
        isHidden: h,
        cardsHeading: m
    }) => {
        let {
            mapFormActions: g,
            renderModal: x
        } = (0, A.useFormModal)(o?.map(e => e.action).filter(Boolean)), v = (e, t = 0, a = !1) => {
            let r = !!e?.action?.form,
                l = null;
            e?.action ? l = {
                label: e.action?.title,
                href: r ? "" : e.action?.link?.linkReference?.href.current || "",
                target: e.action?.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                ...r ? {
                    renderModal: () => x({
                        label: e.action?.title ?? "",
                        form: e.action.form
                    })
                } : {}
            } : e?.pageUrl && (l = {
                href: e?.pageUrl?.link?.href?.current || "",
                target: e?.pageUrl?.target === "_blank" ? "_blank" : "_self"
            });
            let i = null;
            if (e?.image) i = {
                src: e.image.file?.asset.url,
                alt: e.image.alt,
                placeholder: e.image.file?.asset.metadata?.lqip
            };
            else if (e?.featuredImage) i = {
                src: e.featuredImage?.file?.asset?.url,
                alt: e.title,
                placeholder: e.featuredImage?.file?.asset?.metadata?.lqip
            };
            else if (a) {
                let a = w[t % 3];
                i = {
                    src: a.src,
                    alt: e.title || "Unity News",
                    placeholder: a.blurDataURL
                }
            }
            return {
                type: e._type || "uniteCard",
                title: e.title,
                subtitle: e.subtitle || "",
                description: e.description || e?.seo?.teaserText || e?.seo?.description || "",
                image: i,
                video: {
                    src: e.brandfolder?.muxHLSURL || ""
                },
                action: l,
                tags: e.tags || [],
                videoInline: e?.videoInline
            }
        }, y = s ? (() => {
            if (!o || 0 === o.length) return d?.length && d?.length > 0 ? d?.map((e, t) => v(e, t)) : [];
            let e = 0,
                t = 0;
            return o.map((a, r) => {
                if ("cardDynamic" === a._type) {
                    if ("news" === a.contentType && c && e < c.length) {
                        let t = c[e],
                            a = e;
                        return e++, v(t, a, !0)
                    }
                    if ("blog" === a.contentType && u && t < u.length) {
                        let e = u[t];
                        return t++, v(e, r)
                    }
                    return null
                }
                return v(a, r)
            }).filter(e => null !== e)
        })() : o?.length && o?.length > 0 ? o?.filter(e => "cardDynamic" !== e._type).map((e, t) => v(e, t)) : d?.length && d?.length > 0 ? d?.map((e, t) => v(e, t)) : [], b = l?.map((e, t) => ({
            title: e.title,
            value: e.value,
            onPress: () => {
                (0, k.default)({
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
        return s ? (0, t.jsx)(j, {
            theme: "dark" === e ? "dark" : "light",
            variant: "stacked" === n || "column" === n || "short" === n || "gdc2026" === n ? n : "column",
            slides: y,
            blockKey: f,
            title: a || void 0
        }) : (0, t.jsx)(t.Fragment, {
            children: !h && (0, t.jsx)(p, {
                theme: "dark" === e ? "dark" : "collapsiblecards" === e ? "collapsiblecards" : "light",
                title: a || "",
                description: r,
                filters: b,
                actions: i?.map(e => ({
                    title: e?.title || "",
                    href: e.link?.linkReference?.href.current || "",
                    target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                })) || [],
                variant: "stacked" === n || "column" === n || "short" === n ? n : "column",
                cards: y,
                blockKey: f,
                cardsHeading: "div" === m || "h2" === m || "h3" === m || "h4" === m ? m : a ? "h3" : "h2"
            })
        })
    }], 913890)
}, 789924, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        r = e.i(595388),
        l = e.i(722978),
        i = e.i(749583),
        n = e.i(998569);
    let s = ({
            title: e,
            titleTag: s,
            description: o,
            action: d,
            fullWidth: c
        }) => {
            let [u, f] = (0, a.useState)(!1), h = "relative block border-t border-solid border-gray-200 dark:border-gray-700", m = (0, t.jsxs)("div", {
                className: (0, l.default)("grid gap-4 pt-2 pb-8 md:grid-cols-3", {
                    "md:grid-cols-[2fr_1fr_auto]": c
                }),
                children: [(0, t.jsx)(s || "h2", {
                    className: "loco-text-heading-xs",
                    children: e
                }), (0, t.jsx)("div", {
                    children: (0, t.jsx)("p", {
                        className: "loco-text-body-sm opacity-70",
                        children: o
                    })
                }), d && d?.label && (0, t.jsx)("div", {
                    className: "shrink-0 text-right",
                    children: (0, t.jsx)(i.default, {
                        tag: "span",
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        active: u,
                        disabled: d.disabled,
                        children: d.label
                    })
                }), d && !d?.label && (0, t.jsx)("div", {
                    className: "flex shrink-0 justify-end text-right",
                    children: (0, t.jsx)(n.default, {
                        variant: "primary"
                    })
                })]
            });
            return !d || d.disabled ? (0, t.jsx)("div", {
                className: h,
                children: m
            }) : (0, t.jsx)(r.Link, {
                href: d.href,
                rel: "_blank" === d.target ? "noopener noreferrer" : void 0,
                target: d.target,
                title: d.label,
                onMouseOver: () => {
                    f(!0)
                },
                onMouseLeave: () => {
                    f(!1)
                },
                className: h,
                "data-sentry-element": "Link",
                "data-sentry-component": "Feature",
                "data-sentry-source-file": "FeaturesList.tsx",
                children: m
            })
        },
        o = ({
            theme: e = "light",
            fullWidth: a = !1,
            features: r = []
        }) => {
            let i = (0, l.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: i,
                "data-sentry-component": "FeaturesList",
                "data-sentry-source-file": "FeaturesList.tsx",
                children: (0, t.jsx)("div", {
                    className: "relative px-4 py-16 lg:pt-6 lg:pb-16 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "mx-auto max-w-[1800px] md:grid md:grid-cols-12 md:gap-2",
                        children: r && (0, t.jsx)("div", {
                            className: (0, l.default)("col-start-1 col-end-13 row-start-3 lg:col-end-13", {
                                "lg:col-start-4": !a
                            }),
                            children: (0, t.jsx)("div", {
                                className: "lg:grid lg:grid-cols-8 lg:gap-2",
                                children: (0, t.jsx)("div", {
                                    className: "lg:col-start-1 lg:col-end-9",
                                    children: r.map((e, r) => (0, t.jsx)(s, {
                                        fullWidth: a,
                                        titleTag: "p",
                                        ...e
                                    }, `feature-list-${r}`))
                                })
                            })
                        })
                    })
                })
            })
        };
    e.s(["default", 0, ({
        theme: e,
        features: a,
        isHidden: r,
        featuresBlog: l,
        fullWidth: i
    }) => {
        let n;
        n = a?.map(e => ({
            title: e?.title || "",
            description: e?.description || "",
            action: e?.action ? {
                label: e.action.title || "",
                href: e.action.link?.linkReference?.href.current || "",
                target: e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                disabled: e.action.disabled
            } : null
        })) || [];
        let s = (e, t) => e?.length > t ? `${e.substring(0,t)}...` : e;
        return n?.length === 0 && (n = l?.map(e => ({
            title: e?.title || "",
            description: s(e?.seo?.teaserText, 250) || s(e?.seo?.description, 250) || "",
            action: e?.pageUrl?.link?.href?.current ? {
                label: "",
                href: e?.pageUrl?.link?.href?.current || "",
                target: e?.pageUrl?.link?.target === "_blank" ? "_blank" : "_self"
            } : null
        })) || []), (0, t.jsx)(t.Fragment, {
            children: !r && (0, t.jsx)(o, {
                theme: "dark" === e ? "dark" : "light",
                features: n,
                fullWidth: i
            })
        })
    }], 789924)
}, 686916, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722990);
    let r = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "w-full bg-black",
        "data-sentry-component": "Footnote",
        "data-sentry-source-file": "Footnote.tsx",
        children: e
    });
    r.Content = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "footnote loco-text-body-sm container",
        "data-sentry-component": "Content",
        "data-sentry-source-file": "Footnote.tsx",
        children: e
    }), e.s(["default", 0, ({
        content: e,
        isHidden: l
    }) => (0, t.jsx)(t.Fragment, {
        children: !l && (0, t.jsx)(r, {
            children: (0, t.jsx)(r.Content, {
                children: (0, t.jsx)(a.PortableText, {
                    value: e,
                    components: e
                })
            })
        })
    })], 686916)
}, 692627, 569074, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(833449),
        r = e.i(722978);
    let l = ({
        theme: e = "light",
        quote: l,
        author: i
    }) => {
        let n = (0, r.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)("blockquote", {
            className: n,
            "data-sentry-component": "Quote",
            "data-sentry-source-file": "Quote.tsx",
            children: (0, t.jsx)("div", {
                className: "py-12 md:py-40 dark:bg-black",
                children: (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                        className: "grid lg:grid-cols-12 lg:gap-2",
                        children: [l && (0, t.jsx)("div", {
                            className: "lg:col-start-4 lg:col-end-13 lg:row-start-1",
                            children: (0, t.jsx)("p", {
                                className: "quote-item loco-text-heading-md",
                                children: l
                            })
                        }), i && (0, t.jsxs)("div", {
                            className: "mt-4 flex flex-col lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:mt-2",
                            children: [i.image && i.image.src && (0, t.jsx)("div", {
                                className: "overflow-hidden rounded",
                                children: (0, t.jsx)(a.default, {
                                    src: i.image.src,
                                    placeholder: "blur",
                                    blurDataURL: i.image.placeholder,
                                    alt: i.image.alt || "",
                                    width: 200,
                                    height: 250,
                                    className: "w-full max-w-[12rem] object-cover"
                                })
                            }), (0, t.jsxs)("footer", {
                                className: "mt-2 max-w-[12rem] lg:mt-8",
                                children: [i.name && (0, t.jsx)("span", {
                                    className: "loco-text-body-md mt-2 block",
                                    children: i.name
                                }), i.title && (0, t.jsx)("span", {
                                    className: "loco-text-body-sm mt-1 block dark:text-gray-300",
                                    children: i.title
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
        quote: a,
        author: r,
        isHidden: i
    }) => {
        let n = {
            name: r?.name || "",
            title: r?.title || "",
            image: {
                src: r?.image?.file?.asset.url || "",
                placeholder: r?.image?.file?.asset.metadata?.lqip || "",
                alt: r?.image?.alt || ""
            }
        };
        return (0, t.jsx)(t.Fragment, {
            children: !i && (0, t.jsx)(l, {
                quote: a,
                author: n,
                theme: "dark" === e ? "dark" : "light"
            })
        })
    }], 692627);
    let i = ({
        children: e,
        theme: a = "light",
        alignment: l = "left",
        subtitle: i
    }) => {
        let n = (0, r.default)({
                dark: "dark" === a
            }),
            s = (0, r.default)("col-span-12", {
                "lg:col-start-4": "offset" === l || i,
                "lg:col-span-8": "left" === l && !i,
                "lg:col-span-6": i
            });
        return (0, t.jsx)("section", {
            className: n,
            "data-sentry-component": "Statement",
            "data-sentry-source-file": "Statement.tsx",
            children: (0, t.jsx)("div", {
                className: "bg-white py-14 md:py-32 dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: "container grid grid-cols-12 text-black dark:text-white",
                    children: [i && (0, t.jsx)("div", {
                        className: "loco-caption-lg-bold col-span-5 mb-3 uppercase lg:col-span-2 lg:mt-2",
                        children: i
                    }), (0, t.jsx)("div", {
                        className: `loco-text-heading-md ${s}`,
                        children: e
                    })]
                })
            })
        })
    };
    e.s(["default", 0, ({
        theme: e,
        text: a,
        alignment: r,
        subtitle: l,
        isHidden: n
    }) => (0, t.jsx)(t.Fragment, {
        children: !n && (0, t.jsx)(i, {
            theme: "dark" === e ? "dark" : "light",
            alignment: "offset" === r ? "offset" : "left",
            subtitle: l || "",
            children: a
        })
    })], 569074)
}, 457689, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        r = e.i(722990),
        l = e.i(131564),
        i = e.i(679288);
    e.s(["default", 0, ({
        theme: e,
        variant: n,
        padding: s,
        title: o,
        description: d,
        richText: c,
        actions: u,
        isHidden: f,
        operatingSystem: h
    }) => {
        let m = (0, i.default)(),
            g = (0, a.useMemo)(() => u ? u.map(e => ({
                title: e?.title || "",
                href: e?.link?.linkReference?.href?.current || "",
                target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            })) : [], [u]);
        return h && h !== m ? null : (0, t.jsx)(t.Fragment, {
            children: !f && (0, t.jsx)(l.default, {
                theme: "dark" === e ? "dark" : "light",
                variant: "center" === n ? "center" : "left",
                padding: s ?? !0,
                title: o,
                description: d ?? "",
                richText: (0, t.jsx)(r.PortableText, {
                    value: c
                }),
                actions: g
            })
        })
    }])
}, 679288, e => {
    "use strict";
    var t = e.i(409781);
    e.s(["default", 0, () => {
        let [e, a] = (0, t.useState)("Unknown");
        return (0, t.useEffect)(() => {
            let e = window.navigator.userAgent;
            e.includes("Win") && a("Windows"), e.includes("Mac") && a("Mac"), e.includes("Linux") && a("Linux")
        }, []), e
    }])
}, 105836, (e, t, a) => {
    t.exports = function(e, t) {
        for (var a = -1, r = t.length, l = e.length; ++a < r;) e[l + a] = t[a];
        return e
    }
}, 808690, (e, t, a) => {
    var r = e.r(878524),
        l = Object.create;
    t.exports = function() {
        function e() {}
        return function(t) {
            if (!r(t)) return {};
            if (l) return l(t);
            e.prototype = t;
            var a = new e;
            return e.prototype = void 0, a
        }
    }()
}, 150692, (e, t, a) => {
    var r = e.r(808690),
        l = e.r(878524);
    t.exports = function(e) {
        return function() {
            var t = arguments;
            switch (t.length) {
                case 0:
                    return new e;
                case 1:
                    return new e(t[0]);
                case 2:
                    return new e(t[0], t[1]);
                case 3:
                    return new e(t[0], t[1], t[2]);
                case 4:
                    return new e(t[0], t[1], t[2], t[3]);
                case 5:
                    return new e(t[0], t[1], t[2], t[3], t[4]);
                case 6:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                case 7:
                    return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
            }
            var a = r(e.prototype),
                i = e.apply(a, t);
            return l(i) ? i : a
        }
    }
}, 753269, (e, t, a) => {
    t.exports = function(e, t, a, r) {
        for (var l = e.length, i = a + (r ? 1 : -1); r ? i-- : ++i < l;)
            if (t(e[i], i, e)) return i;
        return -1
    }
}, 254849, (e, t, a) => {
    t.exports = function(e) {
        return e != e
    }
}, 193170, (e, t, a) => {
    t.exports = function(e, t, a) {
        for (var r = a - 1, l = e.length; ++r < l;)
            if (e[r] === t) return r;
        return -1
    }
}, 125863, (e, t, a) => {
    var r = e.r(753269),
        l = e.r(254849),
        i = e.r(193170);
    t.exports = function(e, t, a) {
        return t == t ? i(e, t, a) : r(e, l, a)
    }
}, 584058, (e, t, a) => {
    var r = e.r(125863);
    t.exports = function(e, t) {
        return !!(null == e ? 0 : e.length) && r(e, t, 0) > -1
    }
}, 669249, (e, t, a) => {
    var r = Math.max;
    t.exports = function(e, t, a, l) {
        for (var i = -1, n = e.length, s = a.length, o = -1, d = t.length, c = r(n - s, 0), u = Array(d + c), f = !l; ++o < d;) u[o] = t[o];
        for (; ++i < s;)(f || i < n) && (u[a[i]] = e[i]);
        for (; c--;) u[o++] = e[i++];
        return u
    }
}, 392010, (e, t, a) => {
    var r = Math.max;
    t.exports = function(e, t, a, l) {
        for (var i = -1, n = e.length, s = -1, o = a.length, d = -1, c = t.length, u = r(n - o, 0), f = Array(u + c), h = !l; ++i < u;) f[i] = e[i];
        for (var m = i; ++d < c;) f[m + d] = t[d];
        for (; ++s < o;)(h || i < n) && (f[m + a[s]] = e[i++]);
        return f
    }
}, 678304, (e, t, a) => {
    t.exports = function(e, t) {
        for (var a = e.length, r = 0; a--;) e[a] === t && ++r;
        return r
    }
}, 631347, (e, t, a) => {
    t.exports = function() {}
}, 698686, (e, t, a) => {
    function r(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 0xffffffff, this.__views__ = []
    }
    r.prototype = e.r(808690)(e.r(631347).prototype), r.prototype.constructor = r, t.exports = r
}, 370592, (e, t, a) => {
    t.exports = function(e, t) {
        var a = -1,
            r = e.length;
        for (t || (t = Array(r)); ++a < r;) t[a] = e[a];
        return t
    }
}, 852109, (e, t, a) => {
    var r = e.r(698686),
        l = e.r(297211),
        i = e.r(370592);
    t.exports = function(e) {
        if (e instanceof r) return e.clone();
        var t = new l(e.__wrapped__, e.__chain__);
        return t.__actions__ = i(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
    }
}, 611309, (e, t, a) => {
    var r = e.r(698686),
        l = e.r(297211),
        i = e.r(631347),
        n = e.r(778116),
        s = e.r(394022),
        o = e.r(852109),
        d = Object.prototype.hasOwnProperty;

    function c(e) {
        if (s(e) && !n(e) && !(e instanceof r)) {
            if (e instanceof l) return e;
            if (d.call(e, "__wrapped__")) return o(e)
        }
        return new l(e)
    }
    c.prototype = i.prototype, c.prototype.constructor = c, t.exports = c
}, 610903, (e, t, a) => {
    var r = e.r(698686),
        l = e.r(560579),
        i = e.r(788485),
        n = e.r(611309);
    t.exports = function(e) {
        var t = i(e),
            a = n[t];
        if ("function" != typeof a || !(t in r.prototype)) return !1;
        if (e === a) return !0;
        var s = l(a);
        return !!s && e === s[0]
    }
}, 154193, (e, t, a) => {
    var r = e.r(150692),
        l = e.r(78974);
    t.exports = function(e, t, a) {
        var i = 1 & t,
            n = r(e);
        return function t() {
            return (this && this !== l && this instanceof t ? n : e).apply(i ? a : this, arguments)
        }
    }
}, 650016, (e, t, a) => {
    var r = e.r(840779),
        l = e.r(184414),
        i = e.r(108749);
    t.exports = function(e) {
        return i(l(e, void 0, r), e + "")
    }
}, 814654, (e, t, a) => {
    var r = e.r(297211),
        l = e.r(650016),
        i = e.r(560579),
        n = e.r(788485),
        s = e.r(778116),
        o = e.r(610903);
    t.exports = function(e) {
        return l(function(t) {
            var a = t.length,
                l = a,
                d = r.prototype.thru;
            for (e && t.reverse(); l--;) {
                var c = t[l];
                if ("function" != typeof c) throw TypeError("Expected a function");
                if (d && !u && "wrapper" == n(c)) var u = new r([], !0)
            }
            for (l = u ? l : a; ++l < a;) {
                var f = n(c = t[l]),
                    h = "wrapper" == f ? i(c) : void 0;
                u = h && o(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? u[n(h[0])].apply(u, h[3]) : 1 == c.length && o(c) ? u[f]() : u.thru(c)
            }
            return function() {
                var e = arguments,
                    r = e[0];
                if (u && 1 == e.length && s(r)) return u.plant(r).value();
                for (var l = 0, i = a ? t[l].apply(this, e) : r; ++l < a;) i = t[l].call(this, i);
                return i
            }
        })
    }
}, 116657, (e, t, a) => {
    t.exports = e.r(814654)()
}, 775041, e => {
    "use strict";
    var t, a = e.i(409781),
        r = e.i(414462),
        l = e.i(116657);
    let i = {
        categories: [],
        subcategories: [],
        selectedSubcategory: null,
        selectedCategory: "",
        allSubcategoriesLabel: ""
    };
    var n = ((t = {}).SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY", t.SET_SUBCATEGORIES = "SET_SUBCATEGORIES", t.SET_SELECTED_SUBCATEGORY = "SET_SELECTED_SUBCATEGORY", t.SET_ALL_SUBCATEGORIES_LABEL = "SET_ALL_SUBCATEGORIES_LABEL", t.INIT_FROM_URL_PARAMS = "INIT_FROM_URL_PARAMS", t);
    let s = (0, a.createContext)([i, () => {}]);
    s.displayName = "FiltersContext";
    let o = (0, r.default)((e, t) => {
        let {
            type: a,
            payload: r
        } = t;
        switch (a) {
            case "SET_SELECTED_CATEGORY": {
                let t, {
                        categoryId: a,
                        subcategoryId: i
                    } = r,
                    {
                        subcategories: n,
                        allSubcategoriesLabel: s = "",
                        localizedAllSubcategoriesLabel: d
                    } = e.categories.find(({
                        _id: e
                    }) => e === a) || {},
                    c = n ?? [];
                if (void 0 === i) {
                    let e = c.find(e => e.makeDefaultLandingSubcategory);
                    t = e?._id ?? null
                } else t = i;
                return (0, l.default)(o({
                    type: "SET_SUBCATEGORIES",
                    payload: c
                }), o({
                    type: "SET_SELECTED_SUBCATEGORY",
                    payload: t
                }), o({
                    type: "SET_ALL_SUBCATEGORIES_LABEL",
                    payload: d ?? s
                }), e => ({
                    ...e,
                    selectedCategory: a
                }))(e)
            }
            case "SET_SUBCATEGORIES":
                return {
                    ...e, subcategories: r
                };
            case "SET_SELECTED_SUBCATEGORY":
                return {
                    ...e, selectedSubcategory: r
                };
            case "SET_ALL_SUBCATEGORIES_LABEL":
                return {
                    ...e, allSubcategoriesLabel: r
                };
            case "INIT_FROM_URL_PARAMS": {
                let {
                    categoryParam: t,
                    subcategoryParam: a
                } = r, l = e.categories.find(({
                    label: e
                }) => e?.toLowerCase() === t) || e.categories[0];
                if (!l) return e;
                let i = l.subcategories ?? [],
                    {
                        _id: n,
                        allSubcategoriesLabel: s = "",
                        localizedAllSubcategoriesLabel: o
                    } = l,
                    d = null;
                if (a) {
                    let e = i.find(e => e.label?.toLowerCase() === a);
                    d = e?._id ?? null
                }
                if (null === d) {
                    let e = i.find(e => e.makeDefaultLandingSubcategory);
                    d = e?._id ?? null
                }
                return {
                    ...e,
                    selectedCategory: n,
                    subcategories: i,
                    selectedSubcategory: d,
                    allSubcategoriesLabel: o ?? s
                }
            }
            default:
                return e
        }
    });
    e.s(["FiltersActionType", () => n, "FiltersContext", 0, s, "default", 0, e => (0, a.useReducer)(o, {
        ...i,
        ...e
    }, e => {
        let t = e.categories[0];
        if (!t) return e;
        let a = t.subcategories ?? [],
            {
                _id: r,
                allSubcategoriesLabel: l = "",
                localizedAllSubcategoriesLabel: i
            } = t,
            n = a.find(e => e.makeDefaultLandingSubcategory);
        return {
            ...e,
            selectedCategory: r,
            subcategories: a,
            selectedSubcategory: n?._id ?? null,
            allSubcategoriesLabel: i ?? l
        }
    })])
}, 560579, (e, t, a) => {
    var r = e.r(616073),
        l = e.r(435673);
    t.exports = r ? function(e) {
        return r.get(e)
    } : l
}, 293281, (e, t, a) => {
    t.exports = {}
}, 788485, (e, t, a) => {
    var r = e.r(293281),
        l = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        for (var t = e.name + "", a = r[t], i = l.call(r, t) ? a.length : 0; i--;) {
            var n = a[i],
                s = n.func;
            if (null == s || s == e) return n.name
        }
        return t
    }
}, 297211, (e, t, a) => {
    function r(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
    }
    r.prototype = e.r(808690)(e.r(631347).prototype), r.prototype.constructor = r, t.exports = r
}, 351263, (e, t, a) => {
    var r = e.r(328042),
        l = e.r(410090),
        i = e.r(778116),
        n = r ? r.isConcatSpreadable : void 0;
    t.exports = function(e) {
        return i(e) || l(e) || !!(n && e && e[n])
    }
}, 601362, (e, t, a) => {
    var r = e.r(105836),
        l = e.r(351263);
    t.exports = function e(t, a, i, n, s) {
        var o = -1,
            d = t.length;
        for (i || (i = l), s || (s = []); ++o < d;) {
            var c = t[o];
            a > 0 && i(c) ? a > 1 ? e(c, a - 1, i, n, s) : r(s, c) : n || (s[s.length] = c)
        }
        return s
    }
}, 616073, (e, t, a) => {
    var r = e.r(843031);
    t.exports = r && new r
}, 647503, (e, t, a) => {
    var r = e.r(240046),
        l = e.r(616073);
    t.exports = l ? function(e, t) {
        return l.set(e, t), e
    } : r
}, 737022, (e, t, a) => {
    var r = e.r(370592),
        l = e.r(860059),
        i = Math.min;
    t.exports = function(e, t) {
        for (var a = e.length, n = i(t.length, a), s = r(e); n--;) {
            var o = t[n];
            e[n] = l(o, a) ? s[o] : void 0
        }
        return e
    }
}, 913599, (e, t, a) => {
    var r = "__lodash_placeholder__";
    t.exports = function(e, t) {
        for (var a = -1, l = e.length, i = 0, n = []; ++a < l;) {
            var s = e[a];
            (s === t || s === r) && (e[a] = r, n[i++] = a)
        }
        return n
    }
}, 141920, (e, t, a) => {
    var r = e.r(669249),
        l = e.r(392010),
        i = e.r(678304),
        n = e.r(150692),
        s = e.r(713442),
        o = e.r(943203),
        d = e.r(737022),
        c = e.r(913599),
        u = e.r(78974);
    t.exports = function e(t, a, f, h, m, g, x, p, v, y) {
        var b = 128 & a,
            j = 1 & a,
            k = 2 & a,
            A = 24 & a,
            w = 512 & a,
            N = k ? void 0 : n(t);

        function _() {
            for (var L = arguments.length, C = Array(L), R = L; R--;) C[R] = arguments[R];
            if (A) var S = o(_),
                E = i(C, S);
            if (h && (C = r(C, h, m, A)), g && (C = l(C, g, x, A)), L -= E, A && L < y) {
                var B = c(C, S);
                return s(t, a, e, _.placeholder, f, C, B, p, v, y - L)
            }
            var T = j ? f : this,
                M = k ? T[t] : t;
            return L = C.length, p ? C = d(C, p) : w && L > 1 && C.reverse(), b && v < L && (C.length = v), this && this !== u && this instanceof _ && (M = N || n(M)), M.apply(T, C)
        }
        return _
    }
}, 50962, (e, t, a) => {
    var r = e.r(865799),
        l = e.r(150692),
        i = e.r(141920),
        n = e.r(713442),
        s = e.r(943203),
        o = e.r(913599),
        d = e.r(78974);
    t.exports = function(e, t, a) {
        var c = l(e);

        function u() {
            for (var l = arguments.length, f = Array(l), h = l, m = s(u); h--;) f[h] = arguments[h];
            var g = l < 3 && f[0] !== m && f[l - 1] !== m ? [] : o(f, m);
            return (l -= g.length) < a ? n(e, t, i, u.placeholder, void 0, f, g, void 0, void 0, a - l) : r(this && this !== d && this instanceof u ? c : e, this, f)
        }
        return u
    }
}, 890892, (e, t, a) => {
    var r = e.r(865799),
        l = e.r(150692),
        i = e.r(78974);
    t.exports = function(e, t, a, n) {
        var s = 1 & t,
            o = l(e);
        return function t() {
            for (var l = -1, d = arguments.length, c = -1, u = n.length, f = Array(u + d); ++c < u;) f[c] = n[c];
            for (; d--;) f[c++] = arguments[++l];
            return r(this && this !== i && this instanceof t ? o : e, s ? a : this, f)
        }
    }
}, 767257, (e, t, a) => {
    var r = e.r(669249),
        l = e.r(392010),
        i = e.r(913599),
        n = "__lodash_placeholder__",
        s = Math.min;
    t.exports = function(e, t) {
        var a = e[1],
            o = t[1],
            d = a | o,
            c = d < 131,
            u = 128 == o && 8 == a || 128 == o && 256 == a && e[7].length <= t[8] || 384 == o && t[7].length <= t[8] && 8 == a;
        if (!(c || u)) return e;
        1 & o && (e[2] = t[2], d |= 1 & a ? 0 : 4);
        var f = t[3];
        if (f) {
            var h = e[3];
            e[3] = h ? r(h, f, t[4]) : f, e[4] = h ? i(e[3], n) : t[4]
        }
        return (f = t[5]) && (h = e[5], e[5] = h ? l(h, f, t[6]) : f, e[6] = h ? i(e[5], n) : t[6]), (f = t[7]) && (e[7] = f), 128 & o && (e[8] = null == e[8] ? t[8] : s(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = d, e
    }
}, 860205, (e, t, a) => {
    var r = /\s/;
    t.exports = function(e) {
        for (var t = e.length; t-- && r.test(e.charAt(t)););
        return t
    }
}, 798430, (e, t, a) => {
    var r = e.r(860205),
        l = /^\s+/;
    t.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(l, "") : e
    }
}, 569923, (e, t, a) => {
    var r = e.r(647503);
    t.exports = e.r(911818)(r)
}, 434891, (e, t, a) => {
    var r = /\{\n\/\* \[wrapped with (.+)\] \*/,
        l = /,? & /;
    t.exports = function(e) {
        var t = e.match(r);
        return t ? t[1].split(l) : []
    }
}, 790131, (e, t, a) => {
    var r = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
    t.exports = function(e, t) {
        var a = t.length;
        if (!a) return e;
        var l = a - 1;
        return t[l] = (a > 1 ? "& " : "") + t[l], t = t.join(a > 2 ? ", " : " "), e.replace(r, "{\n/* [wrapped with " + t + "] */\n")
    }
}, 621923, (e, t, a) => {
    var r = e.r(531766),
        l = e.r(584058),
        i = [
            ["ary", 128],
            ["bind", 1],
            ["bindKey", 2],
            ["curry", 8],
            ["curryRight", 16],
            ["flip", 512],
            ["partial", 32],
            ["partialRight", 64],
            ["rearg", 256]
        ];
    t.exports = function(e, t) {
        return r(i, function(a) {
            var r = "_." + a[0];
            t & a[1] && !l(e, r) && e.push(r)
        }), e.sort()
    }
}, 777948, (e, t, a) => {
    var r = e.r(434891),
        l = e.r(790131),
        i = e.r(108749),
        n = e.r(621923);
    t.exports = function(e, t, a) {
        var s = t + "";
        return i(e, l(s, n(r(s), a)))
    }
}, 713442, (e, t, a) => {
    var r = e.r(610903),
        l = e.r(569923),
        i = e.r(777948);
    t.exports = function(e, t, a, n, s, o, d, c, u, f) {
        var h = 8 & t;
        t |= h ? 32 : 64, 4 & (t &= ~(h ? 64 : 32)) || (t &= -4);
        var m = [e, t, s, h ? o : void 0, h ? d : void 0, h ? void 0 : o, h ? void 0 : d, c, u, f],
            g = a.apply(void 0, m);
        return r(e) && l(g, m), g.placeholder = n, i(g, e, t)
    }
}, 943203, (e, t, a) => {
    t.exports = function(e) {
        return e.placeholder
    }
}, 840779, (e, t, a) => {
    var r = e.r(601362);
    t.exports = function(e) {
        return (null == e ? 0 : e.length) ? r(e, 1) : []
    }
}, 435673, (e, t, a) => {
    t.exports = function() {}
}, 868922, (e, t, a) => {
    var r = e.r(798430),
        l = e.r(878524),
        i = e.r(692558),
        n = 0 / 0,
        s = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        c = parseInt;
    t.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return n;
        if (l(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = l(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var a = o.test(e);
        return a || d.test(e) ? c(e.slice(2), a ? 2 : 8) : s.test(e) ? n : +e
    }
}, 682437, (e, t, a) => {
    var r = e.r(868922),
        l = 1 / 0;
    t.exports = function(e) {
        return e ? (e = r(e)) === l || e === -l ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
    }
}, 16379, (e, t, a) => {
    var r = e.r(682437);
    t.exports = function(e) {
        var t = r(e),
            a = t % 1;
        return t == t ? a ? t - a : t : 0
    }
}, 852580, (e, t, a) => {
    var r = e.r(647503),
        l = e.r(154193),
        i = e.r(50962),
        n = e.r(141920),
        s = e.r(890892),
        o = e.r(560579),
        d = e.r(767257),
        c = e.r(569923),
        u = e.r(777948),
        f = e.r(16379),
        h = Math.max;
    t.exports = function(e, t, a, m, g, x, p, v) {
        var y = 2 & t;
        if (!y && "function" != typeof e) throw TypeError("Expected a function");
        var b = m ? m.length : 0;
        if (b || (t &= -97, m = g = void 0), p = void 0 === p ? p : h(f(p), 0), v = void 0 === v ? v : f(v), b -= g ? g.length : 0, 64 & t) {
            var j = m,
                k = g;
            m = g = void 0
        }
        var A = y ? void 0 : o(e),
            w = [e, t, a, m, g, j, k, x, p, v];
        if (A && d(w, A), e = w[0], t = w[1], a = w[2], m = w[3], g = w[4], (v = w[9] = void 0 === w[9] ? y ? 0 : e.length : h(w[9] - b, 0)) || !(24 & t) || (t &= -25), t && 1 != t) N = 8 == t || 16 == t ? i(e, t, v) : 32 != t && 33 != t || g.length ? n.apply(void 0, w) : s(e, t, a, m);
        else var N = l(e, t, a);
        return u((A ? r : c)(N, w), e, t)
    }
}, 414462, (e, t, a) => {
    var r = e.r(852580);

    function l(e, t, a) {
        var i = r(e, 16, void 0, void 0, void 0, void 0, void 0, t = a ? void 0 : t);
        return i.placeholder = l.placeholder, i
    }
    l.placeholder = {}, t.exports = l
}, 691156, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        r = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        title: l,
        isExpanded: i = !1,
        blockKey: n
    }) => {
        let [s, o] = (0, a.useState)(i), d = () => {
            o(!s)
        }, c = (0, r.default)("accordion-content [&_p]:mb-4 [&_ul]:mb-4", {
            "transition ease-in-out opacity-100 h-auto w-5/6 pb-4 loco-text-body text-gray-800 dark:text-gray-100": s,
            "transition ease-in-out opacity-0 h-0 overflow-hidden": !s
        });
        return (0, t.jsxs)("div", {
            className: "border-b border-gray-200 dark:border-gray-800",
            "data-sentry-component": "Accordion",
            "data-sentry-source-file": "Accordion.tsx",
            children: [(0, t.jsx)("div", {
                onClick: d,
                onKeyDown: e => {
                    ("Enter" === e.key || " " === e.key) && d()
                },
                role: "button",
                tabIndex: 0,
                "aria-expanded": s,
                className: "cursor-pointer py-6",
                "data-link-location": `${n}-video-play`,
                "data-link-id": `${n}-accordion-toggle`,
                "data-link-type": "CTA",
                children: (0, t.jsxs)("div", {
                    className: "loco-text-body-lg-medium flex justify-between",
                    children: [(0, t.jsx)("h3", {
                        className: "w-11/12 text-gray-800 dark:text-gray-200",
                        children: l
                    }), (0, t.jsx)("span", {
                        className: "inline-block text-gray-700 dark:text-gray-300",
                        children: s ? "-" : "+"
                    })]
                })
            }), (0, t.jsx)("div", {
                className: c,
                "aria-hidden": !s,
                children: e
            })]
        })
    }], 691156)
}, 814507, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722978),
        r = e.i(146911);
    e.s(["default", 0, ({
        children: e,
        action: l,
        rounded: i = !1,
        isContained: n = !1,
        className: s = ""
    }) => (0, t.jsx)("div", {
        className: (0, a.clsx)("md:px-auto w-full px-4 transition-colors", {
            "bg-gray-100 dark:bg-gray-900": !n
        }, {
            "rounded-br-lg rounded-bl-lg": i && !n
        }, s),
        "data-sentry-component": "AnnouncementBanner",
        "data-sentry-source-file": "AnnouncementBanner.tsx",
        children: (0, t.jsxs)("div", {
            className: (0, a.clsx)("container m-auto py-3 text-xs leading-4 font-medium text-gray-900 transition-colors dark:text-gray-100", {
                "text-center": i && !n
            }, {
                "my-6 rounded-lg bg-gray-100 dark:bg-gray-900": n
            }),
            children: [e, (0, t.jsx)(r.default, {
                className: "mx-auto mt-0 ml-2 inline-block [&>div>span]:text-xs",
                href: l.href,
                target: l.target,
                size: "tiny",
                underline: !0,
                "data-link-location": "AnnouncementBanner",
                "data-link-id": "announcement-banner-action",
                "data-sentry-element": "Link",
                "data-sentry-source-file": "AnnouncementBanner.tsx",
                children: l.title
            })]
        })
    })], 814507)
}, 185462, e => {
    "use strict";
    let t = e.i(201763).default;
    e.s(["default", 0, t])
}, 131564, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(749583),
        r = e.i(722978);
    e.s(["default", 0, ({
        theme: e = "light",
        actions: l,
        description: i,
        title: n,
        padding: s = !0,
        variant: o = "center",
        richText: d
    }) => {
        let c = (0, r.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)("div", {
            className: c,
            "data-sentry-component": "TitleDescriptionBlock",
            "data-sentry-source-file": "TitleDescriptionBlock.tsx",
            children: (0, t.jsx)("div", {
                className: "dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: `container flex flex-col ${"center"===o&&"items-center text-center"} ${s&&"pt-14 pb-12 md:pt-24"}`,
                    children: [(0, t.jsx)("div", {
                        className: "max-w-3xl",
                        children: n && (0, t.jsx)("h2", {
                            className: "loco-text-heading-md !font-nohemi",
                            children: n
                        })
                    }), (i || d) && (0, t.jsxs)("div", {
                        className: (0, r.default)("loco-text-body-lg [&_a]:text-blue mt-6 text-gray-500", "center" === o || "left" === o ? "max-w-5xl" : "max-w-3xl"),
                        children: [i, d]
                    }), l && (0, t.jsx)("div", {
                        className: "mt-8 flex justify-center gap-4",
                        children: l.map((e, r) => {
                            let l = `title-description-block-action-${e.title}-${r}`;
                            return 0 === r ? (0, t.jsx)(a.default, {
                                href: e.href,
                                target: e.target,
                                outlined: !0,
                                rounded: !0,
                                hasArrow: !0,
                                "data-link-location": "TitleDescriptionBlock",
                                "data-link-id": `title-description-block-action-primary-${r}`,
                                children: e.title
                            }, l) : (0, t.jsx)(a.default, {
                                href: e.href,
                                target: e.target,
                                variant: "secondary",
                                rounded: !0,
                                hasArrow: !0,
                                "data-link-location": "TitleDescriptionBlock",
                                "data-link-id": `title-description-block-action-secondary-${r}`,
                                "data-sentry-element": "Button",
                                "data-sentry-component": "renderActions",
                                "data-sentry-source-file": "TitleDescriptionBlock.tsx",
                                children: e.title
                            }, l)
                        })
                    })]
                })
            })
        })
    }], 131564)
}]);

//# debugId=202c82f2-f694-cb46-c9e5-adf01af3b80d