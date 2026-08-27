(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 584266, 817916, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(829150),
        l = e.i(433519),
        r = e.i(409781),
        i = e.i(722978),
        n = e.i(926993),
        s = e.i(749583),
        o = e.i(595388),
        d = e.i(279858),
        c = e.i(147333),
        u = e.i(429305),
        f = e.i(783078),
        h = e.i(430215);
    let m = {
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
    let v = (0, r.forwardRef)(({
            nav: e,
            action: a,
            isSticky: l,
            indexOfActiveLink: r,
            variant: n
        }, o) => {
            let d = (0, i.default)("alternateNavigation relative flex h-12 w-full bg-gray-900", {
                "justify-center": "centered" === n,
                "justify-stretch": "default" === n
            });
            return (0, t.jsx)("div", {
                className: d,
                ref: o,
                children: (0, t.jsx)("div", {
                    className: (0, i.default)("z-40 h-12 bg-gray-900 md:block", {
                        "fixed top-11 mt-1 bg-transparent": l,
                        "absolute top-0 py-1": !l,
                        "w-full": "default" === n
                    }),
                    children: (0, t.jsx)("div", {
                        className: "container h-full",
                        children: (0, t.jsxs)("div", {
                            className: (0, i.default)("flex h-full items-center justify-between rounded-md px-2 transition-colors duration-150", {
                                "bg-gray-900": !l,
                                "bg-[rgba(0,0,0,0.5)] backdrop-blur-sm": l
                            }),
                            children: [(0, t.jsx)("div", {
                                className: "h-full w-full shrink-1",
                                children: (0, t.jsx)("ul", {
                                    className: "flex h-full w-full items-center",
                                    children: e.map((e, a) => (0, t.jsx)(k, {
                                        label: e.label,
                                        href: e.href,
                                        target: e.target,
                                        active: r === a
                                    }, `alternate-navigation-element-${e.label}-${a}`))
                                })
                            }), a && (0, t.jsx)("div", {
                                className: "shrink-0",
                                children: (0, t.jsx)(s.default, {
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
        b = (0, r.forwardRef)(({
            isSticky: e,
            nav: a,
            indexOfActiveLink: l,
            title: s
        }, o) => {
            let [d, c] = (0, r.useState)(!1);
            return s ? (0, t.jsx)("div", {
                className: "alternateNavigation relative h-12 w-full bg-gray-900",
                ref: o,
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
                                children: [(0, t.jsxs)(n.m.button, {
                                    animate: d ? "open" : "closed",
                                    className: "flex w-full items-center justify-between py-3",
                                    onClick: () => {
                                        c(!d)
                                    },
                                    children: [(0, t.jsx)("span", {
                                        className: "text-sm font-medium text-white",
                                        children: null == l || d ? s : a[l].label
                                    }), (0, t.jsx)(j, {})]
                                }), (0, t.jsx)(n.m.ul, {
                                    className: "overflow-hidden",
                                    initial: "initial",
                                    animate: d ? "open" : "closed",
                                    variants: g,
                                    children: a.map(({
                                        label: e,
                                        href: a,
                                        target: r
                                    }, i) => (0, t.jsx)(y, {
                                        label: e,
                                        href: a,
                                        target: r,
                                        active: l === i,
                                        index: i,
                                        isOpen: d,
                                        onClick: () => {
                                            c(!1)
                                        }
                                    }, `alternate-navigation-element-${e}-${i}`))
                                })]
                            })
                        })
                    })
                })
            }) : null
        }),
        j = () => (0, t.jsxs)(n.m.svg, {
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
        y = e => {
            let a = (0, r.useRef)(null),
                {
                    linkProps: l
                } = (0, d.useLink)(e, a),
                {
                    focusProps: s
                } = (0, c.useFocusRing)(),
                {
                    label: f,
                    href: h,
                    target: g,
                    locale: x,
                    active: p,
                    index: v,
                    isOpen: b
                } = e;
            return (0, t.jsx)("li", {
                className: "border-t border-[#ffffff14]",
                children: (0, t.jsxs)(n.m.div, {
                    custom: v,
                    variants: m,
                    initial: "initial",
                    animate: b ? "open" : "closed",
                    className: "flex w-full items-center justify-between",
                    children: [(0, t.jsx)(o.Link, {
                        ...(0, u.mergeProps)(l, s),
                        ref: a,
                        href: h,
                        target: g ?? "_self",
                        locale: x,
                        className: "py-3 text-sm font-medium text-white",
                        children: f
                    }), (0, t.jsx)("div", {
                        className: (0, i.default)("mr-1 h-2 w-2 rounded-full transition-colors duration-300", {
                            "bg-blue": p
                        })
                    })]
                })
            }, `n_${f}`)
        },
        k = e => {
            let a = (0, r.useRef)(null),
                {
                    linkProps: l
                } = (0, d.useLink)(e, a),
                {
                    isFocusVisible: n,
                    focusProps: s
                } = (0, c.useFocusRing)(),
                {
                    label: f,
                    href: h,
                    target: m,
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
                children: (0, t.jsx)(o.Link, {
                    ...(0, u.mergeProps)(l, s),
                    ref: a,
                    href: h,
                    target: m ?? "_self",
                    locale: g,
                    className: p,
                    children: f
                })
            })
        };
    v.displayName = "DesktopNav", b.displayName = "MobileNav";
    let w = ({
        variant: e = "default",
        title: a,
        nav: l,
        action: i
    }) => {
        let n = (0, h.default)(`(max-width: ${f.default.Large}px)`),
            s = (0, r.useRef)(null),
            [o, d] = (0, r.useState)(null),
            [c, u] = (0, r.useState)([]),
            [m, g] = (0, r.useState)(!1),
            [x, j] = (0, r.useState)(!1),
            [y, k] = (0, r.useState)(!1),
            w = (0, r.useRef)(0),
            _ = () => {
                let e = l.map(e => e.href);
                u([...document.querySelectorAll("a[data-anchor-item]")].filter(t => {
                    let a = t.getAttribute("id");
                    return a && e.find(e => e.includes(a))
                }).map(e => ({
                    top: e.offsetTop + 43
                })))
            },
            N = () => {
                let e;
                s.current && (s.current.offsetTop < window.scrollY ? j(!0) : j(!1)), w.current > window.scrollY && x ? g(!0) : w.current < window.scrollY && g(!1), w.current = window.scrollY, s.current && (s.current.offsetTop > window.innerHeight && !m ? k(!0) : k(!1)), e = null, c.forEach((t, a) => {
                    window.scrollY > t.top && (e = a)
                }), d(e)
            };
        return (0, r.useEffect)(() => {
            let e = document.querySelector("nav");
            e && (e.ariaHidden = String(y))
        }, [y]), (0, r.useLayoutEffect)(() => (_(), window.addEventListener("resize", _), () => {
            window.removeEventListener("resize", _)
        }), []), (0, r.useEffect)(() => (w.current = window.scrollY, window.addEventListener("scroll", N), () => {
            window.removeEventListener("scroll", N)
        }), [m, c, n]), (0, t.jsx)(p.default, {
            children: n ? (0, t.jsx)(b, {
                ref: s,
                nav: l,
                isSticky: x,
                indexOfActiveLink: o,
                title: a
            }) : (0, t.jsx)(v, {
                ref: s,
                nav: l,
                action: i,
                isSticky: x,
                indexOfActiveLink: o,
                variant: e
            })
        })
    };
    e.s(["default", 0, ({
        title: e,
        navigation: r,
        action: i,
        theme: n,
        isHidden: s
    }) => {
        let {
            state: o
        } = (0, l.default)();
        return (0, t.jsx)(t.Fragment, {
            children: !s && (0, t.jsx)(w, {
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
                nav: r.map(e => ({
                    label: e?.title ?? "",
                    href: e?.link?.linkReference?.href.current ?? "",
                    target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                }))
            })
        })
    }], 584266);
    let _ = ({
        id: e,
        className: a
    }) => (0, t.jsx)("div", {
        id: e,
        "data-anchor-item": !0,
        className: a,
        style: {
            marginTop: "-120px",
            paddingTop: "120px"
        }
    });
    e.s(["default", 0, ({
        anchorID: e
    }) => (0, t.jsx)(_, {
        id: e ?? ""
    })], 817916)
}, 776910, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(814507);
    e.s(["default", 0, ({
        title: e,
        action: l,
        isContained: r = !1,
        theme: i,
        isHidden: n
    }) => {
        let s;
        return (0, t.jsx)(t.Fragment, {
            children: !n && (0, t.jsx)("section", {
                className: "dark" === i ? "dark" : "",
                children: (s = l?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self", (0, t.jsx)(a.default, {
                    isContained: r,
                    action: {
                        title: l?.text || "",
                        href: l?.fieldLink?.linkReference?.href?.current || "",
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
        l = e.i(185462);
    e.s(["default", 0, ({
        data: e,
        isHidden: r,
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
            children: !r && (0, t.jsx)(l.default, {
                keyFigures: n,
                theme: "dark" === i ? "dark" : "light"
            })
        })
    }], 68274)
}, 794189, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(722978),
        l = e.i(409781),
        r = e.i(131581),
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
            let h = (0, l.useRef)(null),
                [m, g] = (0, l.useState)(!1),
                x = (0, r.useInView)(h),
                p = (0, i.useReducedMotion)(),
                v = (0, a.default)("", {
                    "max-w-lg": "small" === c,
                    "max-w-lg mx-auto": "small-center" === c,
                    "container grid lg:grid-cols-12 lg:gap-2": "offset" === c
                }),
                b = (0, a.default)("relative overflow-hidden rounded-2xl", {
                    "aspect-square": "1:1" === u,
                    "aspect-[4/3]": "4:3" === u,
                    "aspect-video": "16:9" === u
                }),
                j = (0, a.default)("absolute cover z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": m && !p && x && s?.src
                }),
                y = {
                    aspectRatio: "none" === u && e.dimensions?.width && e.dimensions?.height ? `${e.dimensions.width}/${e.dimensions.height}` : void 0
                };
            return (0, t.jsx)("div", {
                className: v,
                ref: h,
                children: (0, t.jsxs)("div", {
                    className: "offset" === c ? "lg:col-start-4 lg:col-end-13 lg:row-start-1" : "",
                    children: [(0, t.jsxs)("div", {
                        className: b,
                        style: y,
                        children: [(0, t.jsx)(n.default, {
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
        provider: r,
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
        let b = (0, l.useRef)(null),
            [j, y] = (0, l.useState)(!1),
            k = null;
        "youtube" === r ? k = (0, s.default)(() => e.A(574228), {
            loadableGenerated: {
                modules: [10770]
            },
            ssr: !1
        }) : "brandfolder" === r && (k = (0, s.default)(() => e.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }));
        let w = {};
        "brandfolder" === r && (w = {
            hlsOptions: {
                maxMaxBufferLength: 1,
                qualityStartLevel: 1
            }
        });
        let _ = () => {
                y(!0)
            },
            N = (0, a.default)("", {
                "max-w-lg": "small" === c,
                "max-w-lg mx-auto": "small-center" === c,
                "container grid lg:grid-cols-12 lg:gap-2": "offset" === c
            }),
            L = (0, a.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": j && d && d.src
            }),
            S = (0, a.default)("relative", {
                "lg:col-start-4 lg:col-end-13 lg:row-start-1": "offset" === c
            });
        return (0, t.jsx)("div", {
            className: N,
            ref: b,
            children: (0, t.jsxs)("div", {
                className: S,
                children: [(0, t.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-2xl",
                    children: [i?.src && (0, t.jsxs)("div", {
                        className: L,
                        onClick: _,
                        children: [!x && (0, t.jsx)(u.default, {
                            handleIsPlaying: _,
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
                        playing: j,
                        loop: x,
                        muted: x,
                        playsinline: x,
                        width: "100%",
                        height: "100%",
                        className: "[&>video]:object-cover",
                        onReady: () => {
                            x && y(!0)
                        },
                        controls: !x,
                        config: w
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
        provider: l,
        brandfolder: r,
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
        let b = {
                type: e ?? "image",
                layout: o ?? "full",
                theme: s ?? "light",
                video: {
                    src: ("brandfolder" === l ? r?.muxHLSURL : i) ?? null
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
                provider: l,
                buttonLabel: u,
                videoInline: f,
                richCaption: (0, t.jsx)(m.PortableText, {
                    value: g
                })
            },
            j = "full";
        "small" === o ? j = "small" : "small-center" === o ? j = "small-center" : "offset" === o && (j = "offset");
        let y = "none";
        ("1:1" === d || "16:9" === d || "4:3" === d) && (y = d);
        let k = (0, a.default)("py-16", {
                "dark bg-black": "dark" === b.theme
            }),
            w = (0, a.default)("container");
        return (0, t.jsx)(t.Fragment, {
            children: !p && (0, t.jsx)("div", {
                className: k,
                children: (0, t.jsx)("div", {
                    className: w,
                    children: "video" === b.type ? (0, t.jsx)(h, {
                        provider: "brandfolder" === l ? "brandfolder" : "youtube",
                        layout: j,
                        video: b.video,
                        image: b.image,
                        buttonLabel: b.buttonLabel,
                        richCaption: b.richCaption,
                        blockKey: x,
                        videoInline: b.videoInline,
                        blockedMessage: v?.blockedMessage,
                        consentButtonLabel: v?.consentButtonLabel || ""
                    }) : (0, t.jsx)(c, {
                        layout: j,
                        image: b.image,
                        forcedAspectRatio: y,
                        richCaption: b.richCaption
                    })
                })
            })
        })
    }], 794189)
}, 25665, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        l = e.i(722990),
        r = e.i(833449),
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
                    l = a?.metadata?.dimensions;
                return a?.url && l?.width && l?.height ? (0, t.jsx)(r.default, {
                    alt: e?.alt || "",
                    src: a.url,
                    width: l.width,
                    height: l.height,
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
        theme: r,
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
            "bg-black dark": "dark" === r
        }), v = (0, u.default)("", {
            container: "default" === i || !i,
            "container max-w-[60rem] mx-auto": "center" === i,
            "container grid lg:grid-cols-12 lg:gap-2": "offset" === i
        }), b = (0, u.default)("[&>*]:loco-text-body [&>*]:mb-4", {
            "lg:col-start-4 lg:col-end-10 lg:row-start-1": "offset" === i
        });
        return (0, t.jsx)(t.Fragment, {
            children: !o && x && (0, t.jsx)("section", {
                className: p,
                children: (0, t.jsx)("div", {
                    className: v,
                    children: (0, t.jsx)(n.default, {
                        className: b,
                        children: (0, t.jsx)(l.PortableText, {
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
        l = e.i(409781),
        r = e.i(749583),
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
            let p = (0, l.useRef)(null),
                [v, b] = (0, l.useState)(!1),
                j = (0, n.useInView)(p, {
                    once: !0
                }),
                y = (0, s.useReducedMotion)(),
                k = (0, a.default)("bg-gray-100 relative h-full rounded-xl overflow-hidden dark:bg-gray-900", {
                    dark: "background" === h
                }),
                w = (0, a.default)("z-0", {
                    "absolute top-0 left-0 w-full h-full": "background" === h,
                    "aspect-video relative mt-8 -mb-8": "default" === h
                }, "background" === h ? "after:content after:absolute after:z-10 after:inset-0 after:bg-gradient-to-b after:from-10% after:from-black after:to-transparent after:opacity-75" : ""),
                _ = (0, a.default)("z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": v && !y && j && f?.src,
                    "": "background" === h
                }),
                N = (0, a.default)("absolute left-0 top-0 [&>video]:object-cover", {
                    "brightness-50 ": "background" === h
                });
            return (0, t.jsx)("div", {
                className: k,
                ref: p,
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
                            children: m?.renderModal ? m.renderModal() : (0, t.jsx)(r.default, {
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
                        className: w,
                        children: [u?.src && (0, t.jsx)(o.default, {
                            fill: !0,
                            alt: u.alt ?? "",
                            src: u.src,
                            className: _
                        }), j && !y && f?.src && (0, t.jsx)(d, {
                            url: f.src,
                            playing: f.autoplay ?? !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: N,
                            onReady: () => {
                                b(!0)
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
            blockKey: l,
            cardsHeading: r
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
                children: (0, t.jsx)("div", {
                    className: i,
                    children: e.map((e, a) => (0, t.jsx)("div", {
                        className: "bentoCards_item",
                        children: (0, t.jsx)(c, {
                            ...e,
                            blockKey: l,
                            cardHeading: r
                        })
                    }, `bento-card-${l}-${a}`))
                })
            })
        };
    var f = e.i(115219);
    e.s(["default", 0, ({
        theme: e,
        blockKey: l,
        isHidden: r,
        cards: i,
        bentoCardsHeading: n
    }) => {
        let {
            renderModal: s
        } = (0, f.useFormModal)(i?.map(e => e.actions?.[0]).filter(Boolean)), o = i?.map(e => {
            let t, a, l, r = e?.actions?.[0],
                i = !!r?.form;
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
                action: r ? (t = i ? "" : r.link?.linkReference?.href.current ?? "", a = r.link?.linkReference?.target === "_blank" ? "_blank" : "_self", l = {
                    label: r.title ?? "",
                    href: t,
                    target: a
                }, i ? {
                    ...l,
                    renderModal: () => {
                        let e = r.form || {},
                            t = {
                                title: e.title || "",
                                description: e.description || "",
                                fields: e.fields || [],
                                actions: e.actions || {},
                                sfdcIntegration: r.webinarFormParametersContent?.sfdcIntegration || {}
                            };
                        return s({
                            label: r.title ?? "",
                            form: t
                        })
                    }
                } : l) : null
            }
        }) ?? [], d = (0, a.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)(t.Fragment, {
            children: !r && (0, t.jsx)("div", {
                className: d,
                children: (0, t.jsx)("div", {
                    className: "bg-white dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container py-16",
                        children: (0, t.jsx)(u, {
                            blockKey: l,
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
            videoShowcaseB: r
        }) => {
            let i = (0, l.useRef)(null),
                [d, c] = (0, l.useState)(!1),
                [u, f] = (0, l.useState)(!1),
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
                    children: [r?.image?.src && (0, t.jsx)(o.default, {
                        fill: !0,
                        alt: r?.image?.alt ?? "",
                        src: r?.image?.src,
                        className: p
                    }), m && !g && r?.video?.src && (0, t.jsx)(h, {
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
        theme: l,
        videoShowcaseA: r,
        videoShowcaseB: i
    }) => {
        let n = {
                videoShowcaseA: {
                    image: {
                        src: r?.image?.asset.url ?? "",
                        placeholder: r?.image?.asset.metadata?.lqip ?? "",
                        alt: r?.imageAlt ?? ""
                    },
                    video: {
                        src: r?.brandfolder?.muxHLSURL ?? ""
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
                dark: "dark" === l
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
        l = e.i(722978),
        r = e.i(131581),
        i = e.i(124576),
        n = e.i(833449),
        s = e.i(425314),
        o = e.i(825610),
        d = e.i(783078),
        c = e.i(749583);
    let u = ({
        className: e,
        handleIsPlaying: a,
        label: l,
        ...r
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsx)("button", {
            className: "transition-bg bg-blue hover:bg-blue-dark flex h-20 w-20 transform items-center justify-center rounded-full duration-300",
            onClick: a,
            type: "button",
            "aria-label": l,
            ...r,
            children: (0, t.jsx)("span", {
                className: "block h-6 w-6",
                children: (0, t.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20",
                    children: (0, t.jsx)("path", {
                        fill: "#fff",
                        stroke: "#fff",
                        d: "M17.95 9.998v.004a.429.429 0 0 1-.207.37l-.004.001L6.483 17.26a.45.45 0 0 1-.456.009l-.002-.001a.44.44 0 0 1-.164-.16l-.69.404.69-.405a.44.44 0 0 1-.061-.221V3.116a.439.439 0 0 1 .225-.382l.002-.001a.45.45 0 0 1 .455.008L17.74 9.627l.003.003a.429.429 0 0 1 .208.368Z"
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
            buttonLabel: b = "Play video",
            blockKey: j,
            titleTag: y = "h3",
            locale: k,
            index: w
        }) => {
            let _ = j || o.trackingLocation.uniteCard,
                N = void 0 !== w ? `${_}-${w}` : _,
                L = (0, a.useRef)(null),
                [S, R] = (0, a.useState)(!1),
                E = (0, r.useInView)(L),
                C = (0, i.useReducedMotion)(),
                T = () => {
                    R(!0)
                };
            (0, a.useEffect)(() => {
                v ? R(E) : E || R(!1)
            }, [E, v]);
            let A = (0, l.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0 pointer-events-none": S && !C && E && g?.src
                }),
                $ = "horizontal" === p && x,
                M = (0, l.default)("flex flex-col", {
                    "min-h-[14rem]": "stacked" === p || "column" === p,
                    grow: "column" !== p && "horizontal" !== p,
                    "min-h-[14rem] xl:min-h-[18rem] xl:flex-row xl:gap-4": "column" === p
                }),
                O = (0, l.default)("rounded-lg bg-gray-100 p-4 dark:bg-gray-900", {
                    "h-full": "horizontal" !== p,
                    "group h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-pointer": "horizontal" === p && $,
                    "h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-auto": "horizontal" === p && !$
                }),
                B = (0, l.default)("relative overflow-hidden rounded-lg", {
                    "aspect-video w-full": "horizontal" !== p,
                    "aspect-video w-full xl:flex-shrink-0 xl:self-start xl:max-w-1/2": "horizontal" === p
                }),
                U = (0, l.default)("cover absolute object-cover", {
                    "transition-transform duration-400 group-hover:scale-110": "horizontal" === p && $
                }),
                P = (0, t.jsxs)("div", {
                    ref: L,
                    className: O,
                    children: ["horizontal" === p && $ && (0, t.jsx)("div", {
                        className: "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-400 [background:linear-gradient(to_top,#000_0%,#666_60%,#666_100%)] group-hover:opacity-100"
                    }), (0, t.jsxs)("div", {
                        className: (0, l.default)({
                            "relative z-10 flex h-full flex-col gap-6 rounded-lg bg-gray-100 p-3 xl:w-full xl:flex-row dark:bg-gray-900": "horizontal" === p,
                            "flex h-full flex-col justify-between gap-4": "horizontal" !== p
                        }),
                        children: [(m?.src || g?.src) && (0, t.jsxs)("div", {
                            className: B,
                            children: [g?.src && (0, t.jsx)(h, {
                                url: g.src,
                                playing: S && E && !C,
                                loop: !!v,
                                muted: v,
                                playsinline: v && !C,
                                width: "100%",
                                height: "100%",
                                className: "absolute top-0 left-0 [&>video]:object-cover",
                                onReady: () => {
                                    v && R(!0)
                                },
                                controls: !v,
                                config: {
                                    hlsOptions: {
                                        maxMaxBufferLength: 1,
                                        startLevel: 1
                                    }
                                }
                            }), m && (0, t.jsxs)("div", {
                                className: A,
                                onClick: T,
                                children: [!v && (0, t.jsx)(u, {
                                    handleIsPlaying: T,
                                    className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: b,
                                    "data-link-location": N,
                                    "data-link-id": `${N}-video-play`
                                }), (0, t.jsx)(n.default, {
                                    src: m.src,
                                    placeholder: m.placeholder ? "blur" : "empty",
                                    blurDataURL: m.placeholder,
                                    fill: !0,
                                    alt: m.alt ?? "",
                                    className: U,
                                    sizes: `(min-width: ${d.default.Large}px) 33vw, (min-width: ${d.default.Medium}px) 50vw, 100vw`
                                })]
                            })]
                        }), (0, t.jsx)("div", {
                            className: (0, l.default)(M),
                            children: "column" !== p && "horizontal" !== p ? (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)(y, {
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
                                            href: $ ? void 0 : x.href,
                                            target: x.target,
                                            outlined: !0,
                                            rounded: !0,
                                            hasArrow: !0,
                                            tag: $ ? "span" : "button",
                                            "data-link-location": N,
                                            "data-link-id": `${N}-cta`,
                                            children: x.label
                                        })
                                    })]
                                })]
                            }) : "horizontal" === p ? (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)(y, {
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
                                            href: $ ? void 0 : x.href,
                                            target: x.target,
                                            outlined: !0,
                                            rounded: !0,
                                            hasArrow: !0,
                                            tag: $ ? "span" : "button",
                                            "data-link-location": N,
                                            "data-link-id": `${N}-cta`,
                                            children: x.label
                                        })
                                    })]
                                })]
                            }) : (0, t.jsxs)(t.Fragment, {
                                children: [(0, t.jsx)(y, {
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
                                            href: $ ? void 0 : x.href,
                                            target: x.target,
                                            outlined: !0,
                                            rounded: !0,
                                            hasArrow: !0,
                                            tag: $ ? "span" : "button",
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
            return $ ? (0, t.jsx)(f.Link, {
                href: x.href,
                target: x.target,
                className: "cursor-pointer",
                "data-link-location": N,
                "data-link-id": `${N}-link-wrapper`,
                children: P
            }) : P
        },
        g = ({
            title: e,
            subtitle: a,
            description: l,
            action: r,
            blockKey: i,
            index: n
        }) => {
            let s = i || o.trackingLocation.uniteCardSubscription,
                d = void 0 !== n ? `${s}-${n}` : s;
            return (0, t.jsxs)("div", {
                className: "flex h-80 flex-col justify-between rounded-lg bg-gray-900 p-4 text-white",
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
                        children: l
                    }), (0, t.jsx)("div", {
                        children: (0, t.jsx)(c.default, {
                            href: r?.href,
                            target: r?.target,
                            variant: "primary",
                            outlined: !0,
                            rounded: !0,
                            hasArrow: !0,
                            "data-link-location": d,
                            "data-link-id": `${d}-action`,
                            children: r?.label
                        })
                    })]
                })]
            })
        };
    var x = e.i(131564);
    let p = ({
        theme: e = "light",
        title: r,
        description: i,
        filters: n,
        actions: s,
        cards: d,
        variant: u = "column",
        blockKey: f,
        cardsHeading: h
    }) => {
        let [p, v] = (0, a.useState)(n?.[0]?.value || ""), b = (e, a) => {
            let l = {
                uniteCard: m,
                cardSubscription: g
            } [e?.type];
            return (0, t.jsx)("div", {
                className: "w-full px-0 py-1 md:w-1/2 md:px-1 md:py-1 lg:w-1/3",
                children: (0, t.jsx)(l, {
                    ...e,
                    variant: u,
                    blockKey: f || o.trackingLocation.uniteCards,
                    titleTag: h,
                    index: a
                })
            }, `${e.title}-${a}`)
        }, j = (0, l.default)({
            dark: "dark" === e || "collapsiblecards" === e
        }), y = (0, l.default)({
            "bg-white dark:bg-black": "light" === e || "dark" === e,
            "bg-transparent": "collapsiblecards" === e
        }), k = (0, l.default)("w-full flex flex-wrap justify-center", {
            "mt-8 pb-10": (!r || !i) && "collapsiblecards" !== e
        });
        return (0, t.jsx)("section", {
            className: j,
            children: (0, t.jsx)("div", {
                className: y,
                children: (0, t.jsxs)("div", {
                    className: "collapsiblecards" === e ? "flex flex-col items-center" : "container flex flex-col items-center",
                    children: [(r || i) && (0, t.jsx)(x.default, {
                        title: r,
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
                            children: e.title
                        }, `filter-${e}-${a}`)), s.map((e, a) => (0, t.jsx)(c.default, {
                            href: e.href,
                            rounded: !0,
                            outlined: !0,
                            hasArrow: !0,
                            "data-link-location": f || o.trackingLocation.uniteCardsAction,
                            "data-link-id": `${f||o.trackingLocation.uniteCardsAction}-action-${a}`,
                            children: e.title
                        }, `action-${e}-${a}`))]
                    }), (0, t.jsx)("div", {
                        className: k,
                        children: p ? d.filter(e => e.tags?.includes(p)).map(b) : d.map(b)
                    })]
                })
            })
        })
    };
    e.s(["default", 0, p], 577702);
    var v = e.i(803695),
        b = e.i(998569),
        j = e.i(430215);
    let y = ({
        theme: e = "light",
        slides: r,
        variant: i = "short",
        blockKey: n,
        title: s
    }) => {
        let [o, c] = (0, a.useState)(0), u = (0, a.useRef)(null), f = (0, j.default)(`(min-width: ${d.default.Large}px)`), h = "gdc2026" === i, x = (0, l.default)({
            dark: "dark" === e
        }), p = (0, a.useCallback)((e, t) => {
            c(t)
        }, []), y = (0, a.useCallback)(() => {
            u.current && u.current.slickPrev()
        }, []), k = (0, a.useCallback)(() => {
            u.current && u.current.slickNext()
        }, []), w = {
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
        }, _ = (e, a) => {
            let l = {
                uniteCard: m,
                cardSubscription: g
            } [e.type];
            return (0, t.jsx)("div", {
                className: h ? "col-span-12 h-full" : "col-span-12 md:col-span-6 lg:col-span-4",
                children: (0, t.jsx)(l, {
                    ...e,
                    variant: h ? "horizontal" : i,
                    blockKey: `${n}-${a}`,
                    titleTag: "p"
                })
            }, `carousel-card-${n}-${a}-${e.title}`)
        }, N = () => {
            let a = f ? 2 : 1,
                i = r.length - a + 1;
            return (0, t.jsx)("div", {
                className: "flex gap-2",
                children: Array.from({
                    length: i
                }).map((a, r) => (0, t.jsx)("button", {
                    className: (0, l.default)("h-2 w-2 rounded-full transition-all", o === r ? "bg-white" : "dark" === e ? "bg-gray-600" : "bg-gray-300"),
                    "aria-label": `Go to slide ${r+1}`,
                    "aria-current": o === r ? "true" : "false"
                }, r))
            })
        }, L = f ? 2 : 1, S = r.length - L + 1, R = 0 === o, E = o >= S - 1, C = f && r.length > 2 || !f && r.length > 1;
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
                        }), C && (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("div", {
                                className: "flex flex-1 items-center justify-center",
                                children: N()
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-1 items-center justify-end gap-2",
                                children: [(0, t.jsx)(b.default, {
                                    direction: "left",
                                    onPress: y,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: R
                                }), (0, t.jsx)(b.default, {
                                    onPress: k,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: E
                                })]
                            })]
                        })]
                    }), s && (0, t.jsx)("h2", {
                        className: "loco-text-heading-xl mb-6 text-left lg:hidden",
                        children: s
                    }), (0, a.createElement)(v.default, {
                        ...w,
                        ref: u,
                        key: `slider-${r.length}`,
                        className: "overflow-hidden"
                    }, r.map(_)), C && (0, t.jsxs)("div", {
                        className: "mt-8 flex flex-col items-center gap-4 lg:hidden",
                        children: [N(), (0, t.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, t.jsx)(b.default, {
                                direction: "left",
                                onPress: y,
                                ariaLabel: "Previous slide",
                                variant: "primary",
                                isDisabled: R
                            }), (0, t.jsx)(b.default, {
                                onPress: k,
                                ariaLabel: "Next slide",
                                variant: "primary",
                                isDisabled: E
                            })]
                        })]
                    })]
                })
            })
        }) : (0, t.jsx)("section", {
            className: x,
            children: (0, t.jsx)("div", {
                className: "carousel-cards py-16 dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: "container",
                    children: [(0, t.jsx)("div", {
                        className: "mb-8 flex items-center justify-between",
                        children: C && (0, t.jsxs)(t.Fragment, {
                            children: [N(), (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)(b.default, {
                                    direction: "left",
                                    onPress: y,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: R
                                }), (0, t.jsx)(b.default, {
                                    onPress: k,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: E
                                })]
                            })]
                        })
                    }), (0, a.createElement)(v.default, {
                        ...w,
                        ref: u,
                        key: `slider-${r.length}`,
                        className: "overflow-visible"
                    }, r.map(_))]
                })
            })
        })
    };
    var k = e.i(869324),
        w = e.i(115219),
        _ = e.i(549134),
        N = e.i(23439),
        L = e.i(271357);
    let S = [_.default, N.default, L.default];
    e.s(["default", 0, ({
        theme: e,
        title: a,
        description: l,
        filters: r,
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
        } = (0, w.useFormModal)(o?.map(e => e.action).filter(Boolean)), v = (e, t = 0, a = !1) => {
            let l = !!e?.action?.form,
                r = null;
            e?.action ? r = {
                label: e.action?.title,
                href: l ? "" : e.action?.link?.linkReference?.href.current || "",
                target: e.action?.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                ...l ? {
                    renderModal: () => x({
                        label: e.action?.title ?? "",
                        form: e.action.form
                    })
                } : {}
            } : e?.pageUrl && (r = {
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
                let a = S[t % 3];
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
                action: r,
                tags: e.tags || [],
                videoInline: e?.videoInline
            }
        }, b = s ? (() => {
            if (!o || 0 === o.length) return d?.length && d?.length > 0 ? d?.map((e, t) => v(e, t)) : [];
            let e = 0,
                t = 0;
            return o.map((a, l) => {
                if ("cardDynamic" === a._type) {
                    if ("news" === a.contentType && c && e < c.length) {
                        let t = c[e],
                            a = e;
                        return e++, v(t, a, !0)
                    }
                    if ("blog" === a.contentType && u && t < u.length) {
                        let e = u[t];
                        return t++, v(e, l)
                    }
                    return null
                }
                return v(a, l)
            }).filter(e => null !== e)
        })() : o?.length && o?.length > 0 ? o?.filter(e => "cardDynamic" !== e._type).map((e, t) => v(e, t)) : d?.length && d?.length > 0 ? d?.map((e, t) => v(e, t)) : [], j = r?.map((e, t) => ({
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
        return s ? (0, t.jsx)(y, {
            theme: "dark" === e ? "dark" : "light",
            variant: "stacked" === n || "column" === n || "short" === n || "gdc2026" === n ? n : "column",
            slides: b,
            blockKey: f,
            title: a || void 0
        }) : (0, t.jsx)(t.Fragment, {
            children: !h && (0, t.jsx)(p, {
                theme: "dark" === e ? "dark" : "collapsiblecards" === e ? "collapsiblecards" : "light",
                title: a || "",
                description: l,
                filters: j,
                actions: i?.map(e => ({
                    title: e?.title || "",
                    href: e.link?.linkReference?.href.current || "",
                    target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                })) || [],
                variant: "stacked" === n || "column" === n || "short" === n ? n : "column",
                cards: b,
                blockKey: f,
                cardsHeading: "div" === m || "h2" === m || "h3" === m || "h4" === m ? m : a ? "h3" : "h2"
            })
        })
    }], 913890)
}, 789924, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        l = e.i(595388),
        r = e.i(722978),
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
                className: (0, r.default)("grid gap-4 pt-2 pb-8 md:grid-cols-3", {
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
            }) : (0, t.jsx)(l.Link, {
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
                children: m
            })
        },
        o = ({
            theme: e = "light",
            fullWidth: a = !1,
            features: l = []
        }) => {
            let i = (0, r.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: i,
                children: (0, t.jsx)("div", {
                    className: "relative px-4 py-16 lg:pt-6 lg:pb-16 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "mx-auto max-w-[1800px] md:grid md:grid-cols-12 md:gap-2",
                        children: l && (0, t.jsx)("div", {
                            className: (0, r.default)("col-start-1 col-end-13 row-start-3 lg:col-end-13", {
                                "lg:col-start-4": !a
                            }),
                            children: (0, t.jsx)("div", {
                                className: "lg:grid lg:grid-cols-8 lg:gap-2",
                                children: (0, t.jsx)("div", {
                                    className: "lg:col-start-1 lg:col-end-9",
                                    children: l.map((e, l) => (0, t.jsx)(s, {
                                        fullWidth: a,
                                        titleTag: "p",
                                        ...e
                                    }, `feature-list-${l}`))
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
        isHidden: l,
        featuresBlog: r,
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
        return n?.length === 0 && (n = r?.map(e => ({
            title: e?.title || "",
            description: s(e?.seo?.teaserText, 250) || s(e?.seo?.description, 250) || "",
            action: e?.pageUrl?.link?.href?.current ? {
                label: "",
                href: e?.pageUrl?.link?.href?.current || "",
                target: e?.pageUrl?.link?.target === "_blank" ? "_blank" : "_self"
            } : null
        })) || []), (0, t.jsx)(t.Fragment, {
            children: !l && (0, t.jsx)(o, {
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
    let l = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "w-full bg-black",
        children: e
    });
    l.Content = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "footnote loco-text-body-sm container",
        children: e
    }), e.s(["default", 0, ({
        content: e,
        isHidden: r
    }) => (0, t.jsx)(t.Fragment, {
        children: !r && (0, t.jsx)(l, {
            children: (0, t.jsx)(l.Content, {
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
        l = e.i(722978);
    let r = ({
        theme: e = "light",
        quote: r,
        author: i
    }) => {
        let n = (0, l.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)("blockquote", {
            className: n,
            children: (0, t.jsx)("div", {
                className: "py-12 md:py-40 dark:bg-black",
                children: (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                        className: "grid lg:grid-cols-12 lg:gap-2",
                        children: [r && (0, t.jsx)("div", {
                            className: "lg:col-start-4 lg:col-end-13 lg:row-start-1",
                            children: (0, t.jsx)("p", {
                                className: "quote-item loco-text-heading-md",
                                children: r
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
        author: l,
        isHidden: i
    }) => {
        let n = {
            name: l?.name || "",
            title: l?.title || "",
            image: {
                src: l?.image?.file?.asset.url || "",
                placeholder: l?.image?.file?.asset.metadata?.lqip || "",
                alt: l?.image?.alt || ""
            }
        };
        return (0, t.jsx)(t.Fragment, {
            children: !i && (0, t.jsx)(r, {
                quote: a,
                author: n,
                theme: "dark" === e ? "dark" : "light"
            })
        })
    }], 692627);
    let i = ({
        children: e,
        theme: a = "light",
        alignment: r = "left",
        subtitle: i
    }) => {
        let n = (0, l.default)({
                dark: "dark" === a
            }),
            s = (0, l.default)("col-span-12", {
                "lg:col-start-4": "offset" === r || i,
                "lg:col-span-8": "left" === r && !i,
                "lg:col-span-6": i
            });
        return (0, t.jsx)("section", {
            className: n,
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
        alignment: l,
        subtitle: r,
        isHidden: n
    }) => (0, t.jsx)(t.Fragment, {
        children: !n && (0, t.jsx)(i, {
            theme: "dark" === e ? "dark" : "light",
            alignment: "offset" === l ? "offset" : "left",
            subtitle: r || "",
            children: a
        })
    })], 569074)
}, 457689, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        l = e.i(722990),
        r = e.i(131564),
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
            children: !f && (0, t.jsx)(r.default, {
                theme: "dark" === e ? "dark" : "light",
                variant: "center" === n ? "center" : "left",
                padding: s ?? !0,
                title: o,
                description: d ?? "",
                richText: (0, t.jsx)(l.PortableText, {
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
        for (var a = -1, l = t.length, r = e.length; ++a < l;) e[r + a] = t[a];
        return e
    }
}, 808690, (e, t, a) => {
    var l = e.r(878524),
        r = Object.create;
    t.exports = function() {
        function e() {}
        return function(t) {
            if (!l(t)) return {};
            if (r) return r(t);
            e.prototype = t;
            var a = new e;
            return e.prototype = void 0, a
        }
    }()
}, 150692, (e, t, a) => {
    var l = e.r(808690),
        r = e.r(878524);
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
            var a = l(e.prototype),
                i = e.apply(a, t);
            return r(i) ? i : a
        }
    }
}, 753269, (e, t, a) => {
    t.exports = function(e, t, a, l) {
        for (var r = e.length, i = a + (l ? 1 : -1); l ? i-- : ++i < r;)
            if (t(e[i], i, e)) return i;
        return -1
    }
}, 254849, (e, t, a) => {
    t.exports = function(e) {
        return e != e
    }
}, 193170, (e, t, a) => {
    t.exports = function(e, t, a) {
        for (var l = a - 1, r = e.length; ++l < r;)
            if (e[l] === t) return l;
        return -1
    }
}, 125863, (e, t, a) => {
    var l = e.r(753269),
        r = e.r(254849),
        i = e.r(193170);
    t.exports = function(e, t, a) {
        return t == t ? i(e, t, a) : l(e, r, a)
    }
}, 584058, (e, t, a) => {
    var l = e.r(125863);
    t.exports = function(e, t) {
        return !!(null == e ? 0 : e.length) && l(e, t, 0) > -1
    }
}, 669249, (e, t, a) => {
    var l = Math.max;
    t.exports = function(e, t, a, r) {
        for (var i = -1, n = e.length, s = a.length, o = -1, d = t.length, c = l(n - s, 0), u = Array(d + c), f = !r; ++o < d;) u[o] = t[o];
        for (; ++i < s;)(f || i < n) && (u[a[i]] = e[i]);
        for (; c--;) u[o++] = e[i++];
        return u
    }
}, 392010, (e, t, a) => {
    var l = Math.max;
    t.exports = function(e, t, a, r) {
        for (var i = -1, n = e.length, s = -1, o = a.length, d = -1, c = t.length, u = l(n - o, 0), f = Array(u + c), h = !r; ++i < u;) f[i] = e[i];
        for (var m = i; ++d < c;) f[m + d] = t[d];
        for (; ++s < o;)(h || i < n) && (f[m + a[s]] = e[i++]);
        return f
    }
}, 678304, (e, t, a) => {
    t.exports = function(e, t) {
        for (var a = e.length, l = 0; a--;) e[a] === t && ++l;
        return l
    }
}, 631347, (e, t, a) => {
    t.exports = function() {}
}, 698686, (e, t, a) => {
    function l(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 0xffffffff, this.__views__ = []
    }
    l.prototype = e.r(808690)(e.r(631347).prototype), l.prototype.constructor = l, t.exports = l
}, 370592, (e, t, a) => {
    t.exports = function(e, t) {
        var a = -1,
            l = e.length;
        for (t || (t = Array(l)); ++a < l;) t[a] = e[a];
        return t
    }
}, 852109, (e, t, a) => {
    var l = e.r(698686),
        r = e.r(297211),
        i = e.r(370592);
    t.exports = function(e) {
        if (e instanceof l) return e.clone();
        var t = new r(e.__wrapped__, e.__chain__);
        return t.__actions__ = i(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
    }
}, 611309, (e, t, a) => {
    var l = e.r(698686),
        r = e.r(297211),
        i = e.r(631347),
        n = e.r(778116),
        s = e.r(394022),
        o = e.r(852109),
        d = Object.prototype.hasOwnProperty;

    function c(e) {
        if (s(e) && !n(e) && !(e instanceof l)) {
            if (e instanceof r) return e;
            if (d.call(e, "__wrapped__")) return o(e)
        }
        return new r(e)
    }
    c.prototype = i.prototype, c.prototype.constructor = c, t.exports = c
}, 610903, (e, t, a) => {
    var l = e.r(698686),
        r = e.r(560579),
        i = e.r(272640),
        n = e.r(611309);
    t.exports = function(e) {
        var t = i(e),
            a = n[t];
        if ("function" != typeof a || !(t in l.prototype)) return !1;
        if (e === a) return !0;
        var s = r(a);
        return !!s && e === s[0]
    }
}, 154193, (e, t, a) => {
    var l = e.r(150692),
        r = e.r(78974);
    t.exports = function(e, t, a) {
        var i = 1 & t,
            n = l(e);
        return function t() {
            return (this && this !== r && this instanceof t ? n : e).apply(i ? a : this, arguments)
        }
    }
}, 650016, (e, t, a) => {
    var l = e.r(840779),
        r = e.r(184414),
        i = e.r(108749);
    t.exports = function(e) {
        return i(r(e, void 0, l), e + "")
    }
}, 814654, (e, t, a) => {
    var l = e.r(297211),
        r = e.r(650016),
        i = e.r(560579),
        n = e.r(272640),
        s = e.r(778116),
        o = e.r(610903);
    t.exports = function(e) {
        return r(function(t) {
            var a = t.length,
                r = a,
                d = l.prototype.thru;
            for (e && t.reverse(); r--;) {
                var c = t[r];
                if ("function" != typeof c) throw TypeError("Expected a function");
                if (d && !u && "wrapper" == n(c)) var u = new l([], !0)
            }
            for (r = u ? r : a; ++r < a;) {
                var f = n(c = t[r]),
                    h = "wrapper" == f ? i(c) : void 0;
                u = h && o(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? u[n(h[0])].apply(u, h[3]) : 1 == c.length && o(c) ? u[f]() : u.thru(c)
            }
            return function() {
                var e = arguments,
                    l = e[0];
                if (u && 1 == e.length && s(l)) return u.plant(l).value();
                for (var r = 0, i = a ? t[r].apply(this, e) : l; ++r < a;) i = t[r].call(this, i);
                return i
            }
        })
    }
}, 116657, (e, t, a) => {
    t.exports = e.r(814654)()
}, 775041, e => {
    "use strict";
    var t, a = e.i(409781),
        l = e.i(414462),
        r = e.i(116657);
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
    let o = (0, l.default)((e, t) => {
        let {
            type: a,
            payload: l
        } = t;
        switch (a) {
            case "SET_SELECTED_CATEGORY": {
                let t, {
                        categoryId: a,
                        subcategoryId: i
                    } = l,
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
                return (0, r.default)(o({
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
                    ...e, subcategories: l
                };
            case "SET_SELECTED_SUBCATEGORY":
                return {
                    ...e, selectedSubcategory: l
                };
            case "SET_ALL_SUBCATEGORIES_LABEL":
                return {
                    ...e, allSubcategoriesLabel: l
                };
            case "INIT_FROM_URL_PARAMS": {
                let {
                    categoryParam: t,
                    subcategoryParam: a
                } = l, r = e.categories.find(({
                    label: e
                }) => e?.toLowerCase() === t) || e.categories[0];
                if (!r) return e;
                let i = r.subcategories ?? [],
                    {
                        _id: n,
                        allSubcategoriesLabel: s = "",
                        localizedAllSubcategoriesLabel: o
                    } = r,
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
                _id: l,
                allSubcategoriesLabel: r = "",
                localizedAllSubcategoriesLabel: i
            } = t,
            n = a.find(e => e.makeDefaultLandingSubcategory);
        return {
            ...e,
            selectedCategory: l,
            subcategories: a,
            selectedSubcategory: n?._id ?? null,
            allSubcategoriesLabel: i ?? r
        }
    })])
}, 560579, (e, t, a) => {
    var l = e.r(616073),
        r = e.r(435673);
    t.exports = l ? function(e) {
        return l.get(e)
    } : r
}, 293281, (e, t, a) => {
    t.exports = {}
}, 272640, (e, t, a) => {
    var l = e.r(293281),
        r = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        for (var t = e.name + "", a = l[t], i = r.call(l, t) ? a.length : 0; i--;) {
            var n = a[i],
                s = n.func;
            if (null == s || s == e) return n.name
        }
        return t
    }
}, 297211, (e, t, a) => {
    function l(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
    }
    l.prototype = e.r(808690)(e.r(631347).prototype), l.prototype.constructor = l, t.exports = l
}, 351263, (e, t, a) => {
    var l = e.r(328042),
        r = e.r(410090),
        i = e.r(778116),
        n = l ? l.isConcatSpreadable : void 0;
    t.exports = function(e) {
        return i(e) || r(e) || !!(n && e && e[n])
    }
}, 601362, (e, t, a) => {
    var l = e.r(105836),
        r = e.r(351263);
    t.exports = function e(t, a, i, n, s) {
        var o = -1,
            d = t.length;
        for (i || (i = r), s || (s = []); ++o < d;) {
            var c = t[o];
            a > 0 && i(c) ? a > 1 ? e(c, a - 1, i, n, s) : l(s, c) : n || (s[s.length] = c)
        }
        return s
    }
}, 616073, (e, t, a) => {
    var l = e.r(843031);
    t.exports = l && new l
}, 647503, (e, t, a) => {
    var l = e.r(240046),
        r = e.r(616073);
    t.exports = r ? function(e, t) {
        return r.set(e, t), e
    } : l
}, 737022, (e, t, a) => {
    var l = e.r(370592),
        r = e.r(860059),
        i = Math.min;
    t.exports = function(e, t) {
        for (var a = e.length, n = i(t.length, a), s = l(e); n--;) {
            var o = t[n];
            e[n] = r(o, a) ? s[o] : void 0
        }
        return e
    }
}, 913599, (e, t, a) => {
    var l = "__lodash_placeholder__";
    t.exports = function(e, t) {
        for (var a = -1, r = e.length, i = 0, n = []; ++a < r;) {
            var s = e[a];
            (s === t || s === l) && (e[a] = l, n[i++] = a)
        }
        return n
    }
}, 141920, (e, t, a) => {
    var l = e.r(669249),
        r = e.r(392010),
        i = e.r(678304),
        n = e.r(150692),
        s = e.r(713442),
        o = e.r(943203),
        d = e.r(737022),
        c = e.r(913599),
        u = e.r(78974);
    t.exports = function e(t, a, f, h, m, g, x, p, v, b) {
        var j = 128 & a,
            y = 1 & a,
            k = 2 & a,
            w = 24 & a,
            _ = 512 & a,
            N = k ? void 0 : n(t);

        function L() {
            for (var S = arguments.length, R = Array(S), E = S; E--;) R[E] = arguments[E];
            if (w) var C = o(L),
                T = i(R, C);
            if (h && (R = l(R, h, m, w)), g && (R = r(R, g, x, w)), S -= T, w && S < b) {
                var A = c(R, C);
                return s(t, a, e, L.placeholder, f, R, A, p, v, b - S)
            }
            var $ = y ? f : this,
                M = k ? $[t] : t;
            return S = R.length, p ? R = d(R, p) : _ && S > 1 && R.reverse(), j && v < S && (R.length = v), this && this !== u && this instanceof L && (M = N || n(M)), M.apply($, R)
        }
        return L
    }
}, 50962, (e, t, a) => {
    var l = e.r(865799),
        r = e.r(150692),
        i = e.r(141920),
        n = e.r(713442),
        s = e.r(943203),
        o = e.r(913599),
        d = e.r(78974);
    t.exports = function(e, t, a) {
        var c = r(e);

        function u() {
            for (var r = arguments.length, f = Array(r), h = r, m = s(u); h--;) f[h] = arguments[h];
            var g = r < 3 && f[0] !== m && f[r - 1] !== m ? [] : o(f, m);
            return (r -= g.length) < a ? n(e, t, i, u.placeholder, void 0, f, g, void 0, void 0, a - r) : l(this && this !== d && this instanceof u ? c : e, this, f)
        }
        return u
    }
}, 890892, (e, t, a) => {
    var l = e.r(865799),
        r = e.r(150692),
        i = e.r(78974);
    t.exports = function(e, t, a, n) {
        var s = 1 & t,
            o = r(e);
        return function t() {
            for (var r = -1, d = arguments.length, c = -1, u = n.length, f = Array(u + d); ++c < u;) f[c] = n[c];
            for (; d--;) f[c++] = arguments[++r];
            return l(this && this !== i && this instanceof t ? o : e, s ? a : this, f)
        }
    }
}, 767257, (e, t, a) => {
    var l = e.r(669249),
        r = e.r(392010),
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
            e[3] = h ? l(h, f, t[4]) : f, e[4] = h ? i(e[3], n) : t[4]
        }
        return (f = t[5]) && (h = e[5], e[5] = h ? r(h, f, t[6]) : f, e[6] = h ? i(e[5], n) : t[6]), (f = t[7]) && (e[7] = f), 128 & o && (e[8] = null == e[8] ? t[8] : s(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = d, e
    }
}, 533734, (e, t, a) => {
    var l = /\s/;
    t.exports = function(e) {
        for (var t = e.length; t-- && l.test(e.charAt(t)););
        return t
    }
}, 798430, (e, t, a) => {
    var l = e.r(533734),
        r = /^\s+/;
    t.exports = function(e) {
        return e ? e.slice(0, l(e) + 1).replace(r, "") : e
    }
}, 569923, (e, t, a) => {
    var l = e.r(647503);
    t.exports = e.r(911818)(l)
}, 434891, (e, t, a) => {
    var l = /\{\n\/\* \[wrapped with (.+)\] \*/,
        r = /,? & /;
    t.exports = function(e) {
        var t = e.match(l);
        return t ? t[1].split(r) : []
    }
}, 790131, (e, t, a) => {
    var l = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
    t.exports = function(e, t) {
        var a = t.length;
        if (!a) return e;
        var r = a - 1;
        return t[r] = (a > 1 ? "& " : "") + t[r], t = t.join(a > 2 ? ", " : " "), e.replace(l, "{\n/* [wrapped with " + t + "] */\n")
    }
}, 621923, (e, t, a) => {
    var l = e.r(531766),
        r = e.r(584058),
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
        return l(i, function(a) {
            var l = "_." + a[0];
            t & a[1] && !r(e, l) && e.push(l)
        }), e.sort()
    }
}, 777948, (e, t, a) => {
    var l = e.r(434891),
        r = e.r(790131),
        i = e.r(108749),
        n = e.r(621923);
    t.exports = function(e, t, a) {
        var s = t + "";
        return i(e, r(s, n(l(s), a)))
    }
}, 713442, (e, t, a) => {
    var l = e.r(610903),
        r = e.r(569923),
        i = e.r(777948);
    t.exports = function(e, t, a, n, s, o, d, c, u, f) {
        var h = 8 & t;
        t |= h ? 32 : 64, 4 & (t &= ~(h ? 64 : 32)) || (t &= -4);
        var m = [e, t, s, h ? o : void 0, h ? d : void 0, h ? void 0 : o, h ? void 0 : d, c, u, f],
            g = a.apply(void 0, m);
        return l(e) && r(g, m), g.placeholder = n, i(g, e, t)
    }
}, 943203, (e, t, a) => {
    t.exports = function(e) {
        return e.placeholder
    }
}, 840779, (e, t, a) => {
    var l = e.r(601362);
    t.exports = function(e) {
        return (null == e ? 0 : e.length) ? l(e, 1) : []
    }
}, 435673, (e, t, a) => {
    t.exports = function() {}
}, 868922, (e, t, a) => {
    var l = e.r(798430),
        r = e.r(878524),
        i = e.r(692558),
        n = 0 / 0,
        s = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        d = /^0o[0-7]+$/i,
        c = parseInt;
    t.exports = function(e) {
        if ("number" == typeof e) return e;
        if (i(e)) return n;
        if (r(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = r(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = l(e);
        var a = o.test(e);
        return a || d.test(e) ? c(e.slice(2), a ? 2 : 8) : s.test(e) ? n : +e
    }
}, 682437, (e, t, a) => {
    var l = e.r(868922),
        r = 1 / 0;
    t.exports = function(e) {
        return e ? (e = l(e)) === r || e === -r ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
    }
}, 16379, (e, t, a) => {
    var l = e.r(682437);
    t.exports = function(e) {
        var t = l(e),
            a = t % 1;
        return t == t ? a ? t - a : t : 0
    }
}, 852580, (e, t, a) => {
    var l = e.r(647503),
        r = e.r(154193),
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
        var b = 2 & t;
        if (!b && "function" != typeof e) throw TypeError("Expected a function");
        var j = m ? m.length : 0;
        if (j || (t &= -97, m = g = void 0), p = void 0 === p ? p : h(f(p), 0), v = void 0 === v ? v : f(v), j -= g ? g.length : 0, 64 & t) {
            var y = m,
                k = g;
            m = g = void 0
        }
        var w = b ? void 0 : o(e),
            _ = [e, t, a, m, g, y, k, x, p, v];
        if (w && d(_, w), e = _[0], t = _[1], a = _[2], m = _[3], g = _[4], (v = _[9] = void 0 === _[9] ? b ? 0 : e.length : h(_[9] - j, 0)) || !(24 & t) || (t &= -25), t && 1 != t) N = 8 == t || 16 == t ? i(e, t, v) : 32 != t && 33 != t || g.length ? n.apply(void 0, _) : s(e, t, a, m);
        else var N = r(e, t, a);
        return u((w ? l : c)(N, _), e, t)
    }
}, 414462, (e, t, a) => {
    var l = e.r(852580);

    function r(e, t, a) {
        var i = l(e, 16, void 0, void 0, void 0, void 0, void 0, t = a ? void 0 : t);
        return i.placeholder = r.placeholder, i
    }
    r.placeholder = {}, t.exports = r
}, 691156, e => {
    "use strict";
    var t = e.i(785328),
        a = e.i(409781),
        l = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        title: r,
        isExpanded: i = !1,
        blockKey: n
    }) => {
        let [s, o] = (0, a.useState)(i), d = () => {
            o(!s)
        }, c = (0, l.default)("accordion-content [&_p]:mb-4 [&_ul]:mb-4", {
            "transition ease-in-out opacity-100 h-auto w-5/6 pb-4 loco-text-body text-gray-800 dark:text-gray-100": s,
            "transition ease-in-out opacity-0 h-0 overflow-hidden": !s
        });
        return (0, t.jsxs)("div", {
            className: "border-b border-gray-200 dark:border-gray-800",
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
                        children: r
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
        l = e.i(146911);
    e.s(["default", 0, ({
        children: e,
        action: r,
        rounded: i = !1,
        isContained: n = !1,
        className: s = ""
    }) => (0, t.jsx)("div", {
        className: (0, a.clsx)("md:px-auto w-full px-4 transition-colors", {
            "bg-gray-100 dark:bg-gray-900": !n
        }, {
            "rounded-br-lg rounded-bl-lg": i && !n
        }, s),
        children: (0, t.jsxs)("div", {
            className: (0, a.clsx)("container m-auto py-3 text-xs leading-4 font-medium text-gray-900 transition-colors dark:text-gray-100", {
                "text-center": i && !n
            }, {
                "my-6 rounded-lg bg-gray-100 dark:bg-gray-900": n
            }),
            children: [e, (0, t.jsx)(l.default, {
                className: "mx-auto mt-0 ml-2 inline-block [&>div>span]:text-xs",
                href: r.href,
                target: r.target,
                size: "tiny",
                underline: !0,
                "data-link-location": "AnnouncementBanner",
                "data-link-id": "announcement-banner-action",
                children: r.title
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
        l = e.i(722978);
    e.s(["default", 0, ({
        theme: e = "light",
        actions: r,
        description: i,
        title: n,
        padding: s = !0,
        variant: o = "center",
        richText: d
    }) => {
        let c = (0, l.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)("div", {
            className: c,
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
                        className: (0, l.default)("loco-text-body-lg [&_a]:text-blue mt-6 text-gray-500", "center" === o || "left" === o ? "max-w-5xl" : "max-w-3xl"),
                        children: [i, d]
                    }), r && (0, t.jsx)("div", {
                        className: "mt-8 flex justify-center gap-4",
                        children: r.map((e, l) => {
                            let r = `title-description-block-action-${e.title}-${l}`;
                            return 0 === l ? (0, t.jsx)(a.default, {
                                href: e.href,
                                target: e.target,
                                outlined: !0,
                                rounded: !0,
                                hasArrow: !0,
                                "data-link-location": "TitleDescriptionBlock",
                                "data-link-id": `title-description-block-action-primary-${l}`,
                                children: e.title
                            }, r) : (0, t.jsx)(a.default, {
                                href: e.href,
                                target: e.target,
                                variant: "secondary",
                                rounded: !0,
                                hasArrow: !0,
                                "data-link-location": "TitleDescriptionBlock",
                                "data-link-id": `title-description-block-action-secondary-${l}`,
                                children: e.title
                            }, r)
                        })
                    })]
                })
            })
        })
    }], 131564)
}]);