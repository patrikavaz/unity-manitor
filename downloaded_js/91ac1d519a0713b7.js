(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 81636, 673300, 5124, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(722978),
        a = e.i(822736),
        r = e.i(751004),
        s = e.i(614909),
        i = e.i(675078),
        n = e.i(145158),
        d = e.i(998569),
        c = e.i(278466);
    let o = (0, s.default)(() => e.A(969945), {
            loadableGenerated: {
                modules: [170438]
            },
            ssr: !1
        }),
        u = ({
            title: e,
            titleTag: t,
            description: a,
            action: r
        }) => {
            let [s, i] = (0, n.useState)(!1);
            return (0, l.jsxs)("div", {
                className: "relative border-t border-solid border-gray-700",
                children: [(0, l.jsxs)("div", {
                    className: "pt-2 pb-8 md:flex md:gap-2",
                    children: [(0, l.jsx)(t || "h2", {
                        className: "loco-text-heading-xs md:w-6/12",
                        children: e
                    }), (0, l.jsxs)("div", {
                        className: "mt-4 flex justify-between gap-4 md:mt-0 md:w-6/12",
                        children: [(0, l.jsx)("p", {
                            className: "loco-text-body-sm max-w-md opacity-70",
                            children: a
                        }), (0, l.jsx)("div", {
                            className: "shrink-0 text-right",
                            children: (0, l.jsx)(d.default, {
                                direction: "right",
                                ariaLabel: r.label,
                                variant: "secondary",
                                isForcedHover: s,
                                tag: "span"
                            })
                        })]
                    })]
                }), (0, l.jsx)(c.Link, {
                    className: "absolute top-0 left-0 z-10 h-full w-full",
                    href: r.href,
                    title: r.label,
                    onMouseOver: () => {
                        i(!0)
                    },
                    onMouseLeave: () => {
                        i(!1)
                    }
                })]
            })
        },
        m = ({
            image: e,
            video: s
        }) => {
            let d = (0, n.useRef)(null),
                [c, u] = (0, n.useState)(!1),
                m = (0, a.useInView)(d),
                f = (0, r.useReducedMotion)(),
                x = (0, t.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": c && !f && m && s.src
                });
            return (0, l.jsxs)("div", {
                className: "relative aspect-video overflow-hidden rounded-2xl",
                ref: d,
                children: [(0, l.jsx)(i.default, {
                    src: e.src,
                    placeholder: "blur",
                    blurDataURL: e.placeholder,
                    fill: !0,
                    alt: e.alt ?? "",
                    className: x
                }), m && !f && s.src && (0, l.jsx)(o, {
                    url: s.src,
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    className: "[&>video]:object-cover",
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
            })
        },
        f = ({
            image: e,
            video: s
        }) => {
            let d = (0, n.useRef)(null),
                [c, u] = (0, n.useState)(!1),
                m = (0, a.useInView)(d),
                f = (0, r.useReducedMotion)(),
                x = (0, t.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": c && !f && m && s.src
                });
            return (0, l.jsxs)("div", {
                className: "pointer-events-none absolute top-0 left-0 h-full w-full object-cover opacity-30",
                ref: d,
                children: [(0, l.jsx)(i.default, {
                    src: e.src,
                    placeholder: "blur",
                    blurDataURL: e.placeholder,
                    fill: !0,
                    alt: e.alt ?? "",
                    className: x
                }), m && !f && s.src && (0, l.jsx)(o, {
                    url: s.src,
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    className: "[&>video]:object-cover",
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
            })
        },
        x = ({
            tagline: e,
            visual: a,
            background: r,
            benefits: s = [],
            theme: i
        }) => {
            let n = (0, t.default)("relative bg-gray-100 px-4 pb-10 pt-8 lg:px-8 lg:pt-44", {
                "dark bg-gray-900": !i || "dark" === i
            });
            return (0, l.jsxs)("div", {
                className: n,
                children: [r && (0, l.jsx)(f, {
                    ...r
                }), (0, l.jsxs)("div", {
                    className: "relative z-10 md:grid md:grid-cols-12 md:gap-2",
                    children: [(0, l.jsx)("div", {
                        className: "relative row-start-1 md:col-start-1 md:col-end-13 lg:col-start-1 lg:col-end-9",
                        children: (0, l.jsx)("p", {
                            className: "loco-text-heading-md",
                            children: e
                        })
                    }), a && (0, l.jsx)("div", {
                        className: "relative col-start-1 col-end-5 row-start-2 mt-14",
                        children: (0, l.jsx)(m, {
                            ...a
                        })
                    }), s && (0, l.jsx)("div", {
                        className: "col-start-1 col-end-13 row-start-3 mt-14 md:mt-[10rem] lg:col-start-5 lg:col-end-13",
                        children: (0, l.jsx)("div", {
                            className: "lg:grid lg:grid-cols-8 lg:gap-2",
                            children: (0, l.jsx)("div", {
                                className: "lg:col-start-1 lg:col-end-9",
                                children: s.map((e, t) => (0, l.jsx)(u, {
                                    ...e
                                }, t))
                            })
                        })
                    })]
                })]
            })
        };
    e.s(["default", 0, ({
        tagline: e,
        visual: t,
        background: a,
        benefits: r,
        isHidden: s,
        theme: i
    }) => (0, l.jsx)(l.Fragment, {
        children: !s && (0, l.jsx)(x, {
            tagline: e,
            visual: t ? {
                image: {
                    src: t?.visualImage?.asset.url || "",
                    placeholder: t?.visualImage?.asset.metadata?.lqip || "",
                    alt: ""
                },
                video: {
                    src: t?.brandfolder?.muxHLSURL || ""
                }
            } : null,
            background: a ? {
                image: {
                    src: a?.image?.asset.url || "",
                    placeholder: a?.image?.asset.metadata?.lqip || ""
                },
                video: {
                    src: a?.brandfolder?.muxHLSURL || ""
                }
            } : null,
            benefits: r?.map(e => ({
                title: e.title,
                description: e.description || "",
                action: {
                    label: e.title,
                    href: e.link?.linkReference?.href.current || "#",
                    target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                }
            })),
            theme: "dark" === i ? "dark" : "light"
        })
    })], 81636);
    var h = e.i(749583);
    let g = (0, s.default)(() => e.A(969945), {
            loadableGenerated: {
                modules: [170438]
            },
            ssr: !1
        }),
        p = ({
            title: e,
            description: s,
            image: d,
            video: c,
            actions: o
        }) => {
            let u = (0, n.useRef)(null),
                [m, f] = (0, n.useState)(!1),
                x = (0, a.useInView)(u, {
                    once: !0
                }),
                p = (0, r.useReducedMotion)(),
                v = (0, t.default)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": m && !p && x && c.src
                });
            return (0, l.jsx)("section", {
                className: "dark bg-gray-900",
                children: (0, l.jsxs)("div", {
                    ref: u,
                    className: "relative box-border flex min-h-screen flex-col items-center justify-center p-5",
                    children: [d && d.src && (0, l.jsx)(i.default, {
                        fill: !0,
                        alt: d.alt ?? "",
                        src: d.src,
                        className: v
                    }), x && !p && c.src && (0, l.jsx)(g, {
                        url: c.src,
                        playing: !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 brightness-50 [&>video]:object-cover",
                        onReady: () => {
                            f(!0)
                        },
                        config: {
                            hlsOptions: {
                                maxMaxBufferLength: 1,
                                startLevel: 1
                            }
                        }
                    }), (0, l.jsxs)("div", {
                        className: "relative z-10 max-w-3xl text-center text-white",
                        children: [(0, l.jsx)("h2", {
                            className: "loco-text-heading-md",
                            children: e
                        }), s && (0, l.jsx)("div", {
                            className: "loco-text-body-lg mt-2 opacity-70",
                            children: s
                        }), o && (0, l.jsxs)("div", {
                            className: "mt-6 flex justify-center gap-4",
                            children: [" ", o.map((e, t) => {
                                if (e.link) return (0, l.jsx)(h.default, {
                                    href: e.link.href,
                                    target: e.link.target,
                                    variant: 0 === t ? "primary" : "secondary",
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: e.title
                                }, `full-screen-visual-action-link-${e.title}-${t}`);
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
                                    }, `full-screen-visual-action-modal-${e.title}-${t}`)
                                }
                            }), " "]
                        })]
                    })]
                })
            })
        };
    var v = e.i(115219);
    let b = ({
            title: e,
            description: t,
            image: a,
            brandfolder: r,
            actions: s,
            isHidden: i
        }) => {
            let {
                mapFormActions: n
            } = (0, v.useFormModal)(s), d = n(s);
            return (0, l.jsx)(l.Fragment, {
                children: !i && (0, l.jsx)(p, {
                    title: e,
                    description: t,
                    image: {
                        src: a?.asset.url || "",
                        placeholder: a?.asset.metadata.lqip || ""
                    },
                    video: {
                        src: r?.muxHLSURL || ""
                    },
                    actions: d
                })
            })
        },
        j = e => (0, l.jsx)(n.default.Suspense, {
            fallback: (0, l.jsx)("div", {
                className: "h-screen w-full bg-black"
            }),
            children: (0, l.jsx)(b, {
                ...e
            })
        });
    e.s(["FullScreenVisualBlockSuspense", () => j], 673300);
    var y = e.i(161107),
        k = e.i(131564);
    let w = (0, s.default)(() => e.A(969945), {
            loadableGenerated: {
                modules: [170438]
            },
            ssr: !1
        }),
        N = ({
            slide: e,
            index: r,
            isActive: s,
            preferReducedMotion: d,
            isVisuallyActive: c,
            clickCallback: o,
            blurredBackground: u
        }) => {
            let m = (0, n.useRef)(null),
                [f, x] = (0, n.useState)(!1),
                h = (0, a.useInView)(m, {
                    once: !0
                }),
                g = (0, t.default)("relative aspect-video overflow-hidden rounded-2xl duration-500", {
                    "opacity-30": !c && !s
                }),
                p = (0, t.default)("absolute h-full w-full transition-opacity duration-500 z-[-1]"),
                v = (0, t.default)("absolute h-full w-full transition-opacity duration-500", {
                    "opacity-0": f && s && !d && h && e.video.src,
                    "object-contain": u
                });
            return (0, l.jsxs)("div", {
                className: g,
                ref: m,
                onClick: () => {
                    !s && o && o()
                },
                children: [e.mention && (0, l.jsx)("div", {
                    className: "absolute bottom-0 left-0 z-10 p-3 opacity-70",
                    children: e.mention
                }), e.image && e.image.src && !u ? (0, l.jsx)(i.default, {
                    src: e.image.src,
                    placeholder: "blur",
                    blurDataURL: e.image.placeholder,
                    fill: !0,
                    alt: e.image.alt,
                    className: v
                }) : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(i.default, {
                        src: e.image.placeholder,
                        placeholder: "blur",
                        blurDataURL: e.image.placeholder,
                        fill: !0,
                        alt: e.image.alt,
                        className: p
                    }), (0, l.jsx)(i.default, {
                        src: e.image.src,
                        placeholder: "blur",
                        blurDataURL: e.image.placeholder,
                        fill: !0,
                        alt: e.image.alt,
                        className: v
                    })]
                }), h && !d && s && e.video.src && (0, l.jsx)(w, {
                    url: e.video.src,
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    className: "[&>video]:object-cover",
                    onReady: () => {
                        x(!0)
                    },
                    config: {
                        hlsOptions: {
                            maxMaxBufferLength: 1,
                            startLevel: 1
                        }
                    }
                }, `slide-video-${r}`)]
            }, `carousel-text-visual-${r}`)
        },
        L = ({
            title: e,
            action: t,
            slides: a,
            blurredBackground: s
        }) => {
            let [i, c] = (0, n.useState)(void 0), [o, u] = (0, n.useState)(void 0), [m, f] = (0, n.useState)(1), [x, g] = (0, n.useState)(0), [p, v] = (0, n.useState)(0), b = (0, n.useRef)(null), j = (0, n.useRef)(null), w = (0, n.useRef)(null), L = (0, r.useReducedMotion)();
            (0, n.useEffect)(() => {
                j.current && w.current && (c(j.current), u(w.current))
            }, [j, w]);
            let R = (0, n.useCallback)((e, l) => {
                    f(l + 1), v(l)
                }, []),
                _ = (0, n.useCallback)(e => {
                    g(e)
                }, []),
                S = (0, n.useCallback)(() => {
                    j.current && w.current && j.current.slickPrev()
                }, []),
                T = (0, n.useCallback)(() => {
                    j.current && w.current && j.current.slickNext()
                }, []),
                M = {
                    dots: !1,
                    infinite: !0,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1
                },
                A = (0, n.useMemo)(() => a.map((e, t) => (0, l.jsx)("div", {
                    children: (0, l.jsxs)("div", {
                        className: "max-w-lg",
                        children: [(0, l.jsx)("h3", {
                            className: "loco-text-heading-xs",
                            children: e.title
                        }), e.author && (0, l.jsx)("p", {
                            className: "loco-text-body mt-6 opacity-70",
                            children: e.author
                        }), (0, l.jsx)("p", {
                            className: "loco-text-body mt-6 opacity-70",
                            children: e.description
                        }), e.action && e.action?.href && e.action?.title && (0, l.jsx)("div", {
                            className: "mt-6 mb-6",
                            children: (0, l.jsx)(h.default, {
                                href: e.action.href,
                                target: e.action.target,
                                rounded: !0,
                                outlined: !0,
                                hasArrow: !0,
                                children: e.action?.title
                            })
                        })]
                    })
                }, t)), [a]),
                C = (0, n.useMemo)(() => a.map((e, t) => (0, l.jsx)(N, {
                    slide: e,
                    index: t,
                    isActive: x === t,
                    isVisuallyActive: p === t,
                    preferReducedMotion: L,
                    clickCallback: T,
                    blurredBackground: s
                }, t)), [a, x, p, L, T]);
            return (0, l.jsx)("section", {
                className: "dark bg-black py-12",
                children: (0, l.jsxs)("div", {
                    className: "container md:max-w-none lg:pr-0",
                    children: [e && (0, l.jsx)(k.default, {
                        title: e,
                        actions: t ? [t] : []
                    }), (0, l.jsxs)("div", {
                        className: "relative mt-8 lg:grid lg:grid-cols-12 lg:gap-2",
                        ref: b,
                        children: [(0, l.jsx)("div", {
                            className: "relative col-start-4 col-end-13 row-start-1",
                            children: (0, l.jsx)("div", {
                                className: "overflow-hidden rounded-2xl lg:rounded-tr-none lg:rounded-br-none",
                                children: (0, l.jsx)("div", {
                                    className: "lg:grid lg:grid-cols-9 lg:gap-2",
                                    children: (0, l.jsx)("div", {
                                        className: "lg:col-span-8",
                                        children: (0, l.jsx)(y.default, {
                                            ...M,
                                            asNavFor: i,
                                            useTransform: !1,
                                            ref: w,
                                            className: "carousel-text-visual_visual m-0",
                                            children: C
                                        })
                                    })
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            className: "relative col-start-1 col-end-4 row-start-1 pb-10",
                            children: [a.length > 1 && (0, l.jsx)("span", {
                                className: "loco-text-body-md text-blue mx-2.5 mt-2.5 mb-4 block lg:mt-0",
                                children: `${m<10?"0":""}${m} / ${a.length<10?"0":""}${a.length}`
                            }), (0, l.jsx)(y.default, {
                                className: "carousel-text-visual_text mt-4 lg:mt-0",
                                ...M,
                                draggable: !1,
                                asNavFor: o,
                                beforeChange: R,
                                afterChange: _,
                                fade: !0,
                                ref: j,
                                children: A
                            }), a.length > 1 && (0, l.jsxs)("div", {
                                className: "absolute bottom-0 left-3 flex gap-2",
                                children: [(0, l.jsx)(d.default, {
                                    direction: "left",
                                    onPress: S,
                                    ariaLabel: "Prev",
                                    variant: "primary"
                                }), (0, l.jsx)(d.default, {
                                    onPress: T,
                                    ariaLabel: "Next",
                                    variant: "primary"
                                })]
                            })]
                        })]
                    })]
                })
            })
        };
    e.s(["default", 0, ({
        blurredBackground: e = !1,
        title: t,
        action: a,
        slides: r,
        slidesBlog: s,
        slidesActionLabel: i = "View Post",
        isHidden: n
    }) => {
        let d = e => {
                let l, t = (e, l) => e?.length > l ? `${e.substring(0,l)}...` : e;
                return {
                    title: e.title || "",
                    author: e.author || "",
                    description: e.description || t(e?.seo?.teaserText, 250) || t(e?.seo?.description, 250) || "",
                    mention: e.mention || "",
                    image: {
                        src: e.image?.file?.asset.url || e.featuredImage?.file?.asset.url || "",
                        placeholder: e.image?.file?.asset.metadata?.lqip || e.featuredImage?.file?.asset.metadata?.lqip || "",
                        alt: e.image?.alt || e.featuredImage?.alt || ""
                    },
                    video: {
                        src: e.brandfolder?.muxHLSURL || ""
                    },
                    action: e.action ? (l = {
                        ...e.action,
                        title: e.action.title || ""
                    }, {
                        title: l?.title || "",
                        href: l?.link?.linkReference?.href.current || "",
                        target: l?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }) : e?.pageUrl ? {
                        title: i,
                        href: e?.pageUrl?.link?.href?.current || "",
                        target: "_self"
                    } : null
                }
            },
            c = r?.map(d) || [],
            o = s?.map(d) || [],
            u = c.length > 0 ? c : o.length > 0 ? o : [];
        return (0, l.jsx)(l.Fragment, {
            children: !n && (0, l.jsx)(L, {
                title: t || "",
                action: a ? {
                    title: a.title || "",
                    href: a.link?.linkReference?.href.current || "",
                    target: a.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                } : null,
                slides: u,
                blurredBackground: e
            })
        })
    }], 5124)
}, 314669, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(675078),
        a = e.i(278466),
        r = e.i(722978);
    let s = ({
        logos: e
    }) => (0, l.jsx)("div", {
        className: "container my-8",
        children: (0, l.jsx)("div", {
            className: "grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5",
            children: e?.map((e, s) => {
                let i = (0, r.default)("rounded bg-gray-100 p-4  md:p-8", {
                    "hover:bg-white transition-all ease-in-out duration-1000": e?.action?.href
                });
                return (0, l.jsxs)("div", {
                    children: [!e.action?.href && (0, l.jsx)("div", {
                        className: i,
                        children: (0, l.jsx)("div", {
                            className: "relative aspect-square w-full",
                            children: (0, l.jsx)(t.default, {
                                src: e.src || "",
                                alt: e.alt || "",
                                placeholder: "blur",
                                blurDataURL: e.placeholder,
                                className: "rounded-lg object-contain",
                                fill: !0
                            })
                        })
                    }), e.action?.href && (0, l.jsx)(a.Link, {
                        href: e.action.href,
                        target: e.action.target || "_self",
                        children: (0, l.jsx)("div", {
                            className: i,
                            children: (0, l.jsx)("div", {
                                className: "relative aspect-square w-full",
                                children: (0, l.jsx)(t.default, {
                                    src: e.src || "",
                                    alt: e.alt || "",
                                    placeholder: "blur",
                                    blurDataURL: e.placeholder,
                                    className: "rounded-lg object-contain",
                                    fill: !0
                                })
                            })
                        })
                    })]
                }, `logos-bank-logo-${s}`)
            })
        })
    });
    e.s(["default", 0, ({
        logos: e,
        isHidden: t
    }) => {
        let a = e?.map(e => ({
            src: e?.image?.file?.asset.url,
            alt: e?.image?.alt || "",
            placeholder: e?.image?.file?.asset.metadata?.lqip,
            action: {
                href: e?.action?.href.current,
                target: e?.action?.target
            }
        }));
        return (0, l.jsx)(l.Fragment, {
            children: !t && (0, l.jsx)(s, {
                logos: a
            })
        })
    }], 314669)
}, 583877, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(458870),
        a = e.i(722978),
        r = e.i(145158);
    let s = () => (0, l.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, l.jsx)("path", {
                d: "M2.5 8H13.5M8 2.5V13.5",
                stroke: "#4C4C4C",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        }),
        i = () => (0, l.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, l.jsx)("path", {
                d: "M2.5 8H13.5",
                stroke: "black",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        }),
        n = ({
            date: e,
            dayOfWeek: t,
            defaultOpen: a,
            activities: n,
            footer: d
        }) => {
            let [c, o] = (0, r.useState)(a);
            return (0, l.jsxs)("details", {
                open: c,
                onToggle: e => {
                    o(e.target.open)
                },
                className: "rounded-lg bg-gray-100 dark:bg-gray-800",
                children: [(0, l.jsxs)("summary", {
                    className: "flex cursor-pointer items-center p-6",
                    children: [(0, l.jsxs)("div", {
                        className: "flex w-full flex-col md:flex-row md:items-center",
                        children: [(0, l.jsx)("div", {
                            className: "loco-text-body text-gray-600 md:w-[19rem] dark:text-gray-400",
                            children: e
                        }), (0, l.jsx)("div", {
                            className: "loco-text-body-lg-medium text-gray-800 capitalize dark:text-gray-200",
                            children: t
                        })]
                    }), (0, l.jsx)("div", {
                        children: c ? (0, l.jsx)(i, {}) : (0, l.jsx)(s, {})
                    })]
                }), (0, l.jsxs)("div", {
                    className: "flex flex-col px-6 pb-6 md:ml-[19rem]",
                    children: [n?.map(e => {
                        let {
                            title: t,
                            startTime: a,
                            endTime: r
                        } = e, s = r ? `${a} - ${r}` : a;
                        return (0, l.jsxs)("div", {
                            className: "flex flex-col gap-2 pt-6 first:mt-4 first:border-t first:border-gray-300 sm:flex-row dark:first:border-gray-700",
                            children: [s && (0, l.jsx)("div", {
                                className: "loco-text-body-sm w-36 shrink-0 text-gray-600 dark:text-gray-400",
                                children: s
                            }), t && (0, l.jsx)("div", {
                                className: "loco-text-body-md text-black dark:text-white",
                                children: t
                            })]
                        }, `agenda-event-${t}-${a}`)
                    }), (0, l.jsx)("div", {
                        className: "loco-text-body-sm pt-6 text-gray-600 italic dark:text-gray-400",
                        children: d
                    })]
                })]
            })
        },
        d = ({
            theme: e,
            agendaCards: t
        }) => {
            let r = (0, a.default)({
                dark: "dark" === e
            });
            return (0, l.jsx)("section", {
                className: r,
                children: (0, l.jsx)("div", {
                    className: "bg-white py-10 md:py-20 dark:bg-gray-900",
                    children: (0, l.jsx)("div", {
                        className: "container flex flex-col gap-2",
                        children: t.map((e, t) => (0, l.jsx)(n, {
                            defaultOpen: 0 === t,
                            ...e
                        }, `agenda-card-${e.date}-${e.dayOfWeek}-${t}`))
                    })
                })
            })
        };
    e.s(["default", 0, ({
        theme: e = "light",
        isHidden: a,
        agendaCards: r
    }) => {
        let s = (0, t.useLocale)();
        return a ? null : (0, l.jsx)(d, {
            theme: "dark" === e ? "dark" : "light",
            agendaCards: r?.map(e => ({
                date: e?.date ? new Intl.DateTimeFormat(s, {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }).format(new Date(e.date)) : "",
                dayOfWeek: e?.date ? new Intl.DateTimeFormat(s, {
                    weekday: "long",
                    timeZone: "UTC"
                }).format(new Date(e.date)) : "",
                footer: e?.footer || "",
                activities: e?.activities?.map(e => ({
                    title: e.title,
                    startTime: e.startTime,
                    endTime: e.endTime
                })) || []
            })) || []
        })
    }], 583877)
}, 277965, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(822736),
        a = e.i(751004),
        r = e.i(527937),
        s = e.i(233031),
        i = e.i(669486),
        n = e.i(145158),
        d = e.i(722978),
        c = e.i(614909),
        o = e.i(675078),
        u = e.i(783078),
        m = e.i(749583),
        f = e.i(186114),
        x = e.i(430215),
        h = e.i(195051),
        g = e.i(766930);
    let p = ({
            provider: g,
            title: p,
            description: v,
            action: b,
            image: j,
            video: y,
            videoInline: k = !1,
            buttonLabel: w = "Play video",
            blockedMessage: N,
            consentButtonLabel: L,
            heading: R = "h3"
        }) => {
            let _ = (0, x.default)(`(min-width: ${u.default.Medium}px)`),
                S = (0, n.useRef)(null),
                [T, M] = (0, n.useState)(!1),
                A = (0, t.useInView)(S),
                C = (0, a.useReducedMotion)(),
                $ = null;
            "youtube" === g ? $ = (0, c.default)(() => e.A(802241), {
                loadableGenerated: {
                    modules: [966543]
                },
                ssr: !1
            }) : "brandfolder" === g && ($ = (0, c.default)(() => e.A(969945), {
                loadableGenerated: {
                    modules: [170438]
                },
                ssr: !1
            }));
            let F = {};
            "brandfolder" === g && (F = {
                hlsOptions: {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                }
            });
            let {
                scrollYProgress: P
            } = (0, r.useScroll)({
                target: S,
                offset: ["start end", "end end"]
            }), B = (0, s.useTransform)(P, [0, 1], ["60%", "100%"]), O = (0, s.useTransform)(P, [0, 1], [1.75, 1]), U = (0, s.useTransform)(P, [0, 1], ["brightness(50%)", "brightness(100%)"]), I = () => {
                k && "brandfolder" === g && M(!0)
            }, E = () => {
                M(!0)
            }, z = (0, d.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": T && !C && A && y?.src
            });
            return (0, l.jsxs)("div", {
                ref: S,
                className: "flex flex-col gap-4 border-t border-gray-300 p-6 md:flex-row dark:border-gray-800 dark:bg-black [&_.consent]:md:justify-start [&_.consent>div.text]:md:w-11/12",
                children: [_ && (0, l.jsx)("div", {
                    className: "md:w-[50%]",
                    children: (0, l.jsxs)(i.m.div, {
                        style: {
                            width: B,
                            filter: U
                        },
                        className: "relative aspect-video overflow-hidden rounded-lg",
                        children: [(0, l.jsxs)(i.m.div, {
                            style: {
                                scale: O
                            },
                            className: "relative h-full w-full",
                            children: [y && (0, l.jsx)(l.Fragment, {
                                children: A && !C && y?.src && $ && (0, l.jsx)($, {
                                    url: y.src,
                                    playing: T,
                                    loop: k && "brandfolder" === g,
                                    muted: k && "brandfolder" === g,
                                    playsinline: k && "brandfolder" === g,
                                    width: "100%",
                                    height: "100%",
                                    className: "[&>video]:object-cover",
                                    onReady: I,
                                    onPlay: E,
                                    controls: !k || "brandfolder" !== g,
                                    config: F
                                })
                            }), j && (0, l.jsxs)("div", {
                                className: z,
                                onClick: E,
                                children: [y?.src && (!k || "brandfolder" !== g) && (0, l.jsx)(f.default, {
                                    handleIsPlaying: E,
                                    className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: w
                                }), (0, l.jsx)(o.default, {
                                    src: j.src,
                                    placeholder: "blur",
                                    blurDataURL: j.placeholder,
                                    fill: !0,
                                    alt: j.alt ?? "",
                                    className: "cover absolute object-cover brightness-75",
                                    sizes: `(min-width: ${u.default.Large}px) 33vw, (min-width: ${u.default.Medium}px) 50vw, 100vw`
                                })]
                            })]
                        }), y?.src?.includes("youtube.com") && (0, l.jsx)(h.default, {
                            blockedMessage: N,
                            consentButtonLabel: L
                        })]
                    })
                }), !_ && (0, l.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-lg md:hidden",
                    children: [(0, l.jsxs)("div", {
                        className: "relative h-full w-full",
                        children: [y && (0, l.jsx)(l.Fragment, {
                            children: A && !C && y?.src && $ && (0, l.jsx)($, {
                                url: y.src,
                                playing: T,
                                loop: k && "brandfolder" === g,
                                muted: k && "brandfolder" === g,
                                playsinline: k && "brandfolder" === g,
                                width: "100%",
                                height: "100%",
                                className: "[&>video]:object-cover",
                                onReady: I,
                                onPlay: E,
                                controls: !k && "brandfolder" !== g,
                                config: F
                            })
                        }), j && (0, l.jsxs)("div", {
                            className: z,
                            onClick: E,
                            children: [y?.src && (!k || "brandfolder" !== g) && (0, l.jsx)(f.default, {
                                handleIsPlaying: E,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: w
                            }), (0, l.jsx)(o.default, {
                                src: j.src,
                                placeholder: "blur",
                                blurDataURL: j.placeholder,
                                fill: !0,
                                alt: j.alt ?? "",
                                className: "cover absolute object-cover brightness-75",
                                sizes: `(min-width: ${u.default.Large}px) 33vw, (min-width: ${u.default.Medium}px) 50vw, 100vw`
                            })]
                        })]
                    }), y?.src?.includes("youtube.com") && (0, l.jsx)(h.default, {
                        blockedMessage: N,
                        consentButtonLabel: L
                    })]
                }), (0, l.jsx)("div", {
                    className: "md:ml-5 md:w-[25%]",
                    children: (0, l.jsx)(R, {
                        className: "loco-text-body-lg-medium",
                        children: p
                    })
                }), (0, l.jsx)("div", {
                    className: "flex grow flex-col md:w-[50%]",
                    children: (0, l.jsxs)("div", {
                        className: "flex shrink-0 grow flex-col justify-between",
                        children: [(0, l.jsx)("div", {
                            className: "loco-text-body text-gray-700 dark:text-gray-400",
                            children: v
                        }), (0, l.jsx)("div", {
                            className: "mt-8",
                            children: (0, l.jsx)(m.default, {
                                href: b?.href,
                                target: b?.target,
                                outlined: !0,
                                rounded: !0,
                                hasArrow: !0,
                                children: b?.label
                            })
                        })]
                    })
                })]
            })
        },
        v = ({
            theme: e = "light",
            features: t = [],
            featuresHeading: a = "h3"
        }) => {
            let r = (0, n.useRef)(null),
                s = (0, d.default)("w-full", {
                    dark: "dark" === e
                });
            return (0, l.jsx)(g.default, {
                children: (0, l.jsx)("div", {
                    ref: r,
                    className: s,
                    children: t && t.map((e, t) => (0, l.jsx)(p, {
                        ...e,
                        heading: a
                    }, t))
                })
            })
        },
        b = e => {
            let l = null;
            return "brandfolder" === e.provider ? l = "brandfolder" : "youtube" === e.provider && (l = "youtube"), {
                title: e?.title ?? "",
                description: e?.description ?? "",
                action: e?.action ? {
                    label: e.action.title ?? "",
                    href: e.action.link?.linkReference?.href.current ?? "",
                    target: e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                } : null,
                video: {
                    src: ("brandfolder" === e.provider ? e.brandfolder?.muxHLSURL : e.youtube_url) ?? null
                },
                videoInline: e.videoInline,
                image: e.image && {
                    src: e.image?.file?.asset.url ?? "",
                    alt: e.image?.alt ?? "",
                    placeholder: e.image?.file?.asset.metadata?.lqip ?? ""
                } || null,
                provider: l,
                buttonLabel: e.buttonLabel,
                blockedMessage: e.consent?.blockedMessage,
                consentButtonLabel: e.consent?.consentButtonLabel
            }
        };
    e.s(["default", 0, ({
        theme: e,
        features: t,
        isHidden: a,
        featuresHeading: r
    }) => {
        let s = t?.map(b);
        return (0, l.jsx)(l.Fragment, {
            children: !a && (0, l.jsx)(v, {
                theme: "dark" === e ? "dark" : "light",
                features: s,
                featuresHeading: "h2" === r || "h4" === r ? r : "h3"
            })
        })
    }], 277965)
}, 596889, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(722978);
    let a = ({
        children: e,
        className: a = "",
        variant: r = "default"
    }) => {
        let s = (0, t.clsx)({
            default: "bg-white dark:bg-gray-900 rounded-xl",
            padded: "p-6 bg-white dark:bg-gray-900 rounded-xl",
            transparent: ""
        } [r], a);
        return (0, l.jsx)("div", {
            className: s,
            children: e
        })
    };
    a.Content = ({
        children: e,
        className: t = "w-full"
    }) => (0, l.jsx)("div", {
        className: t,
        children: e
    }), a.Image = ({
        children: e,
        withinContainer: a
    }) => {
        let r = (0, t.clsx)("card-img relative w-full", {
            "[&>img]:!static !h-auto": a
        });
        return (0, l.jsx)("div", {
            className: r,
            children: e
        })
    }, e.s(["default", 0, a], 596889)
}, 240046, (e, l, t) => {
    l.exports = function(e) {
        return e
    }
}, 865799, (e, l, t) => {
    l.exports = function(e, l, t) {
        switch (t.length) {
            case 0:
                return e.call(l);
            case 1:
                return e.call(l, t[0]);
            case 2:
                return e.call(l, t[0], t[1]);
            case 3:
                return e.call(l, t[0], t[1], t[2])
        }
        return e.apply(l, t)
    }
}, 911818, (e, l, t) => {
    var a = Date.now;
    l.exports = function(e) {
        var l = 0,
            t = 0;
        return function() {
            var r = a(),
                s = 16 - (r - t);
            if (t = r, s > 0) {
                if (++l >= 800) return arguments[0]
            } else l = 0;
            return e.apply(void 0, arguments)
        }
    }
}, 830747, (e, l, t) => {
    l.exports = function(e) {
        return function() {
            return e
        }
    }
}, 599568, (e, l, t) => {
    var a = e.r(581511);
    l.exports = function() {
        try {
            var e = a(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }()
}, 317508, (e, l, t) => {
    var a = e.r(830747),
        r = e.r(599568),
        s = e.r(240046);
    l.exports = r ? function(e, l) {
        return r(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: a(l),
            writable: !0
        })
    } : s
}, 108749, (e, l, t) => {
    var a = e.r(317508);
    l.exports = e.r(911818)(a)
}, 531766, (e, l, t) => {
    l.exports = function(e, l) {
        for (var t = -1, a = null == e ? 0 : e.length; ++t < a && !1 !== l(e[t], t, e););
        return e
    }
}, 860059, (e, l, t) => {
    var a = /^(?:0|[1-9]\d*)$/;
    l.exports = function(e, l) {
        var t = typeof e;
        return !!(l = null == l ? 0x1fffffffffffff : l) && ("number" == t || "symbol" != t && a.test(e)) && e > -1 && e % 1 == 0 && e < l
    }
}, 184414, (e, l, t) => {
    var a = e.r(865799),
        r = Math.max;
    l.exports = function(e, l, t) {
        return l = r(void 0 === l ? e.length - 1 : l, 0),
            function() {
                for (var s = arguments, i = -1, n = r(s.length - l, 0), d = Array(n); ++i < n;) d[i] = s[l + i];
                i = -1;
                for (var c = Array(l + 1); ++i < l;) c[i] = s[i];
                return c[l] = t(d), a(e, this, c)
            }
    }
}, 893171, 447533, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(145158),
        a = e.i(675078),
        r = e.i(722978),
        s = e.i(852485),
        i = e.i(614909),
        n = e.i(783078);
    let d = (0, i.default)(() => e.A(969945), {
            loadableGenerated: {
                modules: [170438]
            },
            ssr: !1
        }),
        c = ({
            containerRef: e,
            lqip: a
        }) => {
            let r = (0, t.useRef)(null),
                s = (0, t.useRef)(null),
                i = "pointer-events-none absolute inset-0 hidden h-full w-full opacity-80 blur-2xl lg:block [will-change:filter]";
            return ((0, t.useEffect)(() => {
                let l, t = r.current,
                    a = e.current;
                if (!t || !a) return;
                let i = t.getContext("2d");
                if (!i) return;
                let n = a.querySelector("video"),
                    d = () => {
                        n && a.contains(n) || (n = a.querySelector("video"));
                        let e = n,
                            t = s.current;
                        if (e) {
                            e.crossOrigin || (e.crossOrigin = "anonymous");
                            try {
                                i.drawImage(e, 0, 0, 32, 32), t && (t.style.transform = `scale(${1.01+1e-6*Math.random()})`)
                            } catch {}
                        }
                        l = requestAnimationFrame(d)
                    };
                return l = requestAnimationFrame(d), () => cancelAnimationFrame(l)
            }, [e, a]), a) ? (0, l.jsx)("div", {
                className: i,
                style: {
                    backgroundImage: `url(${a})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: "scale(1.05)"
                },
                "aria-hidden": "true"
            }) : (0, l.jsx)("div", {
                ref: s,
                className: i,
                "aria-hidden": "true",
                children: (0, l.jsx)("canvas", {
                    ref: r,
                    width: 32,
                    height: 32,
                    className: "h-full w-full"
                })
            })
        };
    var o = e.i(185462),
        u = e.i(224601);
    let m = ({
        children: e,
        className: t = "",
        size: s = "default",
        variant: i = "default",
        image: n,
        keyFigures: d
    }) => {
        let c = (0, r.clsx)("relative grid grid-cols-12", t, {
                dark: !!n
            }),
            u = (0, r.clsx)("relative col-span-12 mx-auto lg:container", {
                "lg:py-32 lg:pb-10": "gdc2026" !== i && "default" === s,
                "lg:py-16 lg:pb-5": "gdc2026" !== i && "slim" === s,
                "py-0 lg:py-20 max-w-[82rem]": "gdc2026" === i
            }),
            m = (0, r.clsx)({
                "flex flex-col lg:flex-row-reverse": "gdc2026" !== i,
                "grid grid-cols-12 gap-6": "gdc2026" === i
            });
        return (0, l.jsxs)("section", {
            className: c,
            children: [n && (0, l.jsx)(a.default, {
                src: n.src,
                alt: n.alt,
                fill: !0,
                className: "object-cover",
                quality: 100,
                sizes: "100vw"
            }), (0, l.jsxs)("div", {
                className: u,
                children: [(0, l.jsx)("div", {
                    className: m,
                    children: e
                }), d && d.length > 0 && (0, l.jsx)("div", {
                    className: "mx-6 lg:mx-0",
                    children: (0, l.jsx)(o.default, {
                        keyFigures: d,
                        nested: !0
                    })
                })]
            })]
        })
    };
    m.Actions = ({
        children: e,
        variant: t = "default"
    }) => (0, l.jsx)("div", {
        className: "gdc2026" === t ? "flex flex-col items-center lg:items-start gap-3 pb-3.5 lg:pb-16 lg:flex-row" : "flex flex-col items-start gap-3 pb-3.5 xl:flex-row",
        children: e
    }), m.AlternateActions = ({
        children: e
    }) => (0, l.jsx)("div", {
        className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
        children: e
    }), m.Body = ({
        children: e,
        variant: t = "default"
    }) => (0, l.jsx)("div", {
        className: "gdc2026" === t ? "loco-text-body-lg" : "loco-text-body-lg mb-6",
        children: e
    }), m.Content = ({
        children: e,
        variant: t = "default"
    }) => {
        let a = (0, r.default)({
            "flex-1 pt-10 pr-8": "gdc2026" !== t,
            "w-full col-span-12 lg:col-span-4 px-4 pb-6 gap-6 items-center lg:gap-9 lg:items-start lg:px-0 lg:pb-0 lg:pt-8 flex flex-col order-2 lg:order-1 text-center lg:text-left": "gdc2026" === t
        });
        return (0, l.jsx)("div", {
            className: a,
            style: "gdc2026" === t ? {
                gap: "2.3125rem"
            } : void 0,
            children: e
        })
    }, m.Overline = ({
        children: e,
        className: t
    }) => {
        let a = (0, r.default)("loco-caption-lg-semibold mb-3 text-gray-500 dark:text-gray-300", t);
        return (0, l.jsx)("div", {
            className: a,
            children: e
        })
    }, m.Title = ({
        children: e,
        variant: t = "default"
    }) => {
        let a = (0, r.default)("!font-nohemi text-black dark:text-white", {
            "loco-text-heading-md mb-6": "gdc2026" !== t,
            "loco-text-heading-4xl break-normal lg:[word-spacing:100vw]": "gdc2026" === t
        });
        return (0, l.jsx)("h1", {
            className: a,
            children: e
        })
    }, m.Pricing = ({
        data: e = [],
        onSelectionChange: a,
        selectedKey: r
    }) => {
        let i = (0, t.useMemo)(() => e.find(e => e.key === r), [e, r]);
        return (0, t.useEffect)(() => {
            let l = !r || !i,
                t = e?.[0]?.key;
            l && a && t && a(t)
        }, [e, r, a, i]), (0, l.jsx)(l.Fragment, {
            children: !!e.length && (0, l.jsx)("div", {
                className: "mb-6 flex",
                children: (0, l.jsxs)("div", {
                    children: [(0, l.jsxs)("div", {
                        className: "mb-2",
                        children: [(0, l.jsx)("span", {
                            className: "loco-text-heading-xs mr-1 font-semibold",
                            children: i?.price
                        }), (0, l.jsx)("span", {
                            className: "loco-text-body-sm",
                            children: i?.suffixPrice
                        })]
                    }), e.length > 1 && (0, l.jsx)(s.default, {
                        selectedKey: r,
                        onSelectionChange: a,
                        children: e.map(({
                            key: e,
                            label: t
                        }) => (0, l.jsx)(s.default.Item, {
                            children: t
                        }, e))
                    })]
                })
            })
        })
    }, m.Media = ({
        media: e,
        className: s = "",
        variant: i = "default"
    }) => {
        let {
            image: o,
            video: u
        } = e || {}, [m, f] = (0, t.useState)(!1), x = (0, t.useRef)(null), h = "gdc2026" === i ? "object-cover" : "object-contain", g = (0, r.default)("relative flex grow", {
            "m-4 h-full": "gdc2026" !== i,
            "w-full h-[22rem] lg:h-full lg:w-auto lg:m-4": "gdc2026" === i
        }, s), p = (0, r.default)("relative h-full w-full overflow-hidden", {
            "rounded-3xl": "gdc2026" !== i,
            "lg:rounded-3xl": "gdc2026" === i
        }), v = (0, r.default)("flex items-center", {
            "flex-1 justify-center lg:justify-start": "gdc2026" !== i,
            "w-full col-span-12 lg:col-span-8 justify-center order-1 lg:order-2": "gdc2026" === i
        }), b = (e, t) => o?.asset.url ? (0, l.jsx)(a.default, {
            src: o.asset.url,
            alt: e,
            fill: !0,
            className: (0, r.default)("absolute h-full", h, t),
            sizes: `(min-width: ${n.default.Large}px) 33vw, (min-width: ${n.default.Medium}px) 50vw, 100vw`,
            placeholder: o.asset.metadata?.lqip ? "blur" : "empty",
            blurDataURL: o.asset.metadata?.lqip || void 0
        }) : null;
        return (0, l.jsx)("div", {
            className: v,
            children: (o || u) && (0, l.jsxs)("div", {
                className: g,
                children: [(0, l.jsx)(c, {
                    containerRef: x,
                    lqip: m ? void 0 : o?.asset?.metadata?.lqip
                }), (0, l.jsxs)("div", {
                    ref: x,
                    className: p,
                    children: [o?.asset.url && !u && b("Hero image", void 0), u && o?.asset.url && !m && b("Video thumbnail", "z-10"), u && (0, l.jsx)("div", {
                        className: "h-full w-full self-center",
                        children: (0, l.jsx)(d, {
                            url: u?.muxHLSURL || "",
                            playing: !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: (0, r.default)("absolute top-0 h-full", {
                                "[&>video]:object-cover": "gdc2026" === i,
                                "[&>video]:object-contain": "gdc2026" !== i
                            }),
                            onReady: () => f(!0),
                            onBuffer: () => f(!1),
                            onBufferEnd: () => f(!0)
                        })
                    })]
                })]
            })
        })
    }, m.YouTubeVideo = ({
        className: e,
        title: t,
        url: a,
        autoplay: s,
        blockedMessage: i,
        consentButtonLabel: n
    }) => {
        let d = (0, r.default)("relative flex grow md:h-auto md:content-center md:mx-8 md:rounded-3xl md:overflow-hidden", e);
        return a && t ? (0, l.jsx)("div", {
            className: "flex flex-1",
            children: (0, l.jsx)("div", {
                className: d,
                children: (0, l.jsx)(u.default, {
                    autoplay: s,
                    title: t,
                    url: a,
                    blockedMessage: i,
                    consentButtonLabel: n
                })
            })
        }) : null
    }, e.s(["default", 0, m], 447533);
    var f = e.i(749583),
        x = e.i(278466),
        h = e.i(115219);
    let g = ({
        linkText: e,
        separatorText: t,
        actionLinks: a
    }) => {
        let r = window.navigator.userAgent,
            s = null;
        if (-1 !== r.indexOf("Win") ? s = "windows" : -1 !== r.indexOf("Mac") ? s = "mac" : -1 !== r.indexOf("Linux") && (s = "linux"), !s) return null;
        let i = [];
        if (a && a.length > 0)
            for (let e of a) e.os.toLowerCase() !== s.toLowerCase() && i.push({
                label: e.os,
                url: e.href
            });
        return a ? (0, l.jsxs)("div", {
            className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
            children: [e, " ", i.map((e, a) => (0, l.jsxs)("span", {
                children: [a > 0 ? (0, l.jsxs)("span", {
                    className: "text-gray-600",
                    children: [" ", t, " "]
                }) : "", (0, l.jsx)("a", {
                    href: e.url,
                    className: "text-blue underline",
                    children: e.label
                })]
            }, e.label))]
        }) : null
    };
    var p = e.i(433519),
        v = e.i(829150);
    e.s(["default", 0, ({
        eyebrow: e,
        title: a,
        description: r,
        actions: s = [],
        media: i,
        backgroundImage: n,
        size: d,
        variant: c,
        keyFigures: o,
        theme: u,
        youtubeVideo: b,
        isHidden: j,
        showAlterativeOSLinks: y,
        alternativeOSLinkSettings: k
    }) => {
        let w, N = -1 !== (w = window.navigator.userAgent).indexOf("Win") ? "Windows" : -1 !== w.indexOf("Mac") ? "Mac" : -1 !== w.indexOf("Linux") ? "Linux" : "Unknown",
            L = (0, t.useRef)(null),
            {
                state: R
            } = (0, p.default)(),
            {
                mapFormActions: _
            } = (0, h.useFormModal)(s),
            S = (0, t.useMemo)(() => _(s) || [], [s, _]),
            T = n?.asset?.url ? {
                src: n.asset.url,
                alt: "Hero background image"
            } : void 0,
            M = (0, t.useMemo)(() => (o?.data ?? []).map(e => e?.value?.text ? {
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
            }), [o]);
        (0, t.useEffect)(() => {
            if (!L.current) {
                let e = document.createElement("a");
                e.style.display = "none", document.body.appendChild(e), L.current = e
            }
            return () => {
                L.current && document.body.contains(L.current) && document.body.removeChild(L.current)
            }
        }, []);
        let A = c ?? void 0,
            C = (e, a, r) => {
                let s = a?.form;
                if (!s) return null;
                let i = {
                    ...s.form,
                    ...s.webinarFormParametersContent,
                    extraFields: s.extraFields
                };
                return (0, l.jsx)(t.default.Fragment, {
                    children: s.renderModal({
                        label: e.title,
                        form: i
                    })
                }, `hero-action-form-${e.title}-${r}`)
            },
            $ = e => {
                let l = e.link?.linkReference?.href?.current,
                    t = l ? (0, v.default)(l, R, e.extendLink) : l,
                    a = e.secondaryLink?.linkReference?.href?.current,
                    r = e.link?.linkReference?.target || "_self",
                    s = x.locales.find(e => window.location.pathname === `/${e}` || window.location.pathname.startsWith(`/${e}/`)) ?? "en";
                t && (t.endsWith(".exe") || t.endsWith(".dmg") ? L.current && (L.current.href = t, L.current.download = "", L.current.target = r, L.current.click()) : "_blank" === r ? window.open(t, "_blank") : window.location.href = t), a && setTimeout(() => {
                    let e = a.replace(/^\//, "");
                    window.location.href = `/${s}/${e}`
                }, 1e3), e?.callback && e.callback()
            },
            F = s?.filter(e => !e.operatingSystem || e.operatingSystem === N) || [],
            P = s?.filter(e => !!e.operatingSystem && "Unknown" !== e.operatingSystem) || [];
        return (0, l.jsx)(l.Fragment, {
            children: !j && (0, l.jsx)("section", {
                className: "dark" === u ? "dark" : "",
                children: (0, l.jsx)("div", {
                    className: "dark:bg-black",
                    children: (0, l.jsxs)(m, {
                        image: T,
                        size: "slim" === d ? "slim" : "default" === d ? "default" : void 0,
                        variant: A,
                        keyFigures: M,
                        children: [i && (0, l.jsx)(m.Media, {
                            media: i,
                            variant: A
                        }), !i && b && (0, l.jsx)(m.YouTubeVideo, {
                            autoplay: !0,
                            url: b?.url,
                            title: b?.title,
                            blockedMessage: b?.consent?.blockedMessage,
                            consentButtonLabel: b?.consent?.consentButtonLabel || ""
                        }), (0, l.jsxs)(m.Content, {
                            variant: A,
                            children: [(0, l.jsx)(m.Overline, {
                                children: e
                            }), (0, l.jsx)(m.Title, {
                                variant: A,
                                children: a
                            }), (0, l.jsx)(m.Body, {
                                variant: A,
                                children: r
                            }), (0, l.jsx)("div", {
                                className: "xl:hidden",
                                children: (0, l.jsx)(m.Actions, {
                                    variant: A,
                                    children: F.map((e, a) => {
                                        let r = S[a],
                                            s = e.link?.linkReference?.href?.current || "",
                                            i = (0, v.default)(s, R, e.extendLink);
                                        e.link?.linkReference?.target;
                                        let n = 0 === a,
                                            d = s.endsWith(".exe") || s.endsWith(".dmg"),
                                            c = !!e.secondaryLink?.linkReference?.href?.current,
                                            o = i && !d && !c;
                                        return r?.form ? C(e, r, a) : (0, l.jsxs)(t.default.Fragment, {
                                            children: [n && (0, l.jsx)(f.default, {
                                                size: "medium",
                                                variant: e.buttonType,
                                                rounded: !0,
                                                ...o && {
                                                    href: i
                                                },
                                                onPress: () => $(e),
                                                hasArrow: !0,
                                                "data-link-location": "HeroBlock",
                                                "data-link-id": `HeroBlock-action-${a}`,
                                                children: e.title
                                            }), n && y && (0, l.jsx)(g, {
                                                linkText: k?.linkText ?? "Download for",
                                                separatorText: k?.separatorText ?? "or",
                                                actionLinks: P.map(e => ({
                                                    os: e.operatingSystem,
                                                    href: e.link?.linkReference?.href?.current || "#"
                                                }))
                                            }), !n && (0, l.jsx)("div", {
                                                className: "ml-1 flex flex-col gap-4",
                                                children: (0, l.jsx)(f.default, {
                                                    size: "medium",
                                                    variant: e.buttonType,
                                                    rounded: !0,
                                                    ...o && {
                                                        href: i
                                                    },
                                                    onPress: () => $(e),
                                                    hasArrow: !0,
                                                    "data-link-location": "HeroBlock",
                                                    "data-link-id": `HeroBlock-action-${a}`,
                                                    children: e.title
                                                })
                                            })]
                                        }, e.link?.linkReference?.title || a)
                                    })
                                })
                            }), (0, l.jsxs)("div", {
                                className: "hidden xl:block",
                                children: [(0, l.jsx)(m.Actions, {
                                    variant: A,
                                    children: F.map((e, t) => {
                                        let a = S[t],
                                            r = e.link?.linkReference?.href?.current || "",
                                            s = (0, v.default)(r, R, e.extendLink);
                                        e.link?.linkReference?.target;
                                        let i = r.endsWith(".exe") || r.endsWith(".dmg"),
                                            n = !!e.secondaryLink?.linkReference?.href?.current,
                                            d = s && !i && !n;
                                        return a?.form ? C(e, a, t) : (0, l.jsx)(f.default, {
                                            size: "medium",
                                            variant: e.buttonType,
                                            rounded: !0,
                                            ...d && {
                                                href: s
                                            },
                                            onPress: () => $(e),
                                            hasArrow: !0,
                                            "data-link-location": "HeroBlock",
                                            "data-link-id": `HeroBlock-action-${t}`,
                                            children: e.title
                                        }, e.link?.linkReference?.title || t)
                                    })
                                }), y && F[0] && (0, l.jsx)(g, {
                                    linkText: k?.linkText ?? "Download for",
                                    separatorText: k?.separatorText ?? "or",
                                    actionLinks: P.map(e => ({
                                        os: e.operatingSystem,
                                        href: e.link?.linkReference?.href?.current || "#"
                                    }))
                                })]
                            })]
                        })]
                    })
                })
            })
        })
    }], 893171)
}, 32382, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(145158),
        a = e.i(78389),
        r = e.i(675078),
        s = e.i(722978);
    let i = ({
            overline: e,
            variant: t = "default"
        }) => {
            let a = "products" === t;
            return (0, l.jsx)("div", {
                className: (0, s.default)("loco-caption-lg-semibold mb-2 lg:mb-3", {
                    "text-white": a,
                    "text-gray-700 dark:text-gray-300": !a
                }),
                children: e
            })
        },
        n = ({
            title: e
        }) => (0, l.jsx)("div", {
            className: "loco-text-heading-md !font-nohemi mb-5 md:w-2/3 lg:mb-6",
            children: e
        }),
        d = ({
            body: e,
            variant: t = "default"
        }) => (0, l.jsx)("div", {
            className: (0, s.default)("loco-text-body-lg mb-6 lg:mb-12", {
                "md:w-2/3": "products" === t
            }),
            children: e
        });
    var c = e.i(749583);
    let o = ({
            actions: e,
            variant: a = "default"
        }) => {
            let r = "products" === a;
            return (0, l.jsx)("div", {
                className: "flex flex-col flex-wrap items-start justify-start gap-y-4 md:flex-row md:gap-2",
                children: e.map((e, a) => e.renderModal ? (0, l.jsx)(t.default.Fragment, {
                    children: e.renderModal()
                }, a) : (0, l.jsx)(c.default, {
                    size: "large",
                    variant: 0 === a ? "primary" : "secondary",
                    rounded: !0,
                    hasArrow: !0,
                    outlined: !r && 0 === a,
                    className: "w-auto justify-center",
                    href: e.href,
                    target: e.target,
                    children: e.label
                }, a))
            })
        },
        u = ({
            overline: e,
            title: t,
            body: a,
            actions: c,
            image: u,
            className: m,
            variant: f = "default"
        }) => {
            let x = (0, s.default)("container relative grid col-span-12 py-8 lg:py-12 px-4 lg:px-16 rounded-xl overflow-hidden", {
                    dark: !!u
                }, m),
                h = "products" === f;
            return (0, l.jsx)("div", {
                className: "bg-white py-16 dark:bg-black",
                children: (0, l.jsx)("div", {
                    className: "container",
                    children: (0, l.jsxs)("div", {
                        className: "relative grid grid-cols-12 overflow-hidden rounded-xl px-4 py-8 lg:px-16 lg:py-12",
                        children: [u && (0, l.jsx)(r.default, {
                            src: u.url,
                            alt: u.alt || "",
                            fill: !0,
                            className: (0, s.default)("scale-105 object-cover", {
                                blur: !h
                            })
                        }), (0, l.jsxs)("div", {
                            className: x,
                            children: [(0, l.jsx)(i, {
                                overline: e,
                                variant: f
                            }), (0, l.jsx)(n, {
                                title: t
                            }), (0, l.jsx)(d, {
                                body: a,
                                variant: f
                            }), (0, l.jsx)(o, {
                                actions: c,
                                variant: f
                            })]
                        })]
                    })
                })
            })
        };
    var m = e.i(829150),
        f = e.i(433519),
        x = e.i(775041),
        h = e.i(115219);
    e.s(["default", 0, ({
        overline: e,
        title: r,
        body: s,
        actions: i,
        image: n,
        theme: d,
        isHidden: c,
        variant: o,
        productCatalogItem: g,
        productCategoryFilter: p
    }) => {
        let [v] = (0, t.useContext)(x.FiltersContext), {
            state: b
        } = (0, f.default)(), j = {
            ...b,
            product: g?.productKey,
            variant: null
        }, {
            renderModal: y,
            extraFields: k
        } = (0, h.useFormModal)(i), w = (0, t.useMemo)(() => i ? i.map(e => (e => {
            if (!e) return null;
            let l = !!e.form,
                t = e.link?.linkReference?.href?.current,
                a = l ? "" : t ? (0, m.default)(t, j, e.extendLink) : "";
            if (l) {
                let l = e.form || {},
                    t = {
                        ...l,
                        title: l.title || "",
                        description: l.description || "",
                        fields: l.fields || [],
                        sfdcIntegration: l.sfdcIntegration || e.webinarFormParametersContent?.sfdcIntegration || {},
                        extraFields: k
                    };
                return {
                    label: e.title || "",
                    href: "",
                    target: e.link?.linkReference?.target || "_self",
                    renderModal: () => y({
                        label: e.title || "",
                        form: t
                    })
                }
            }
            return {
                label: e.title || "",
                href: a,
                target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            }
        })(e)).filter(e => !!e) : [], [i, j, y, k]), {
            subcategories: N
        } = v.categories?.find(({
            _id: e
        }) => e === v.selectedCategory) || {}, L = null != v.selectedSubcategory ? (N || []).find(({
            _id: e
        }) => e === v.selectedSubcategory) : null, R = !p || p.categories?.find(e => e._id === v.selectedCategory) != null && (null == L || !p.subcategories || p.subcategories.some(({
            _id: e
        }) => e === v.selectedSubcategory)), _ = n ? {
            url: n?.file?.asset.url || "",
            alt: n.alt
        } : void 0;
        return (0, l.jsx)(l.Fragment, {
            children: !c && R && (0, l.jsx)("section", {
                className: "dark" === d ? "dark" : "",
                children: (0, l.jsx)(u, {
                    overline: e,
                    title: r || "",
                    body: (0, l.jsx)(a.PortableText, {
                        value: s
                    }),
                    actions: w,
                    image: _,
                    variant: o
                })
            })
        })
    }], 32382)
}, 129824, e => {
    "use strict";
    e.s(["CAMPAIGN_PAGES_NO_MT_BANNER", 0, ["/campaign/spatial"], "DATA_REQUEST", 0, "/data-request", "DEFAULT_PAGES_NO_MT_BANNER", 0, ["/made-with-unity"], "L1_PAGES_NO_MT_BANNER", 0, ["/our-company", "/community", "/industry", "/use-cases", "/releases/unity-6"], "PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products"], "PRODUCTS_PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products/unity-pro", "/products/unity-engine", "/products/compare-plans", "/products/compare-plans/unity-cloud"], "RESOURCES_PAGES_NO_MT_BANNER", 0, ["/resources"], "SOLUTIONS_PAGES_NO_MT_BANNER", 0, ["/download", "/roadmap", "/pages/pro-free-trial", "/games", "/solutions", "/developer-tools", "/how-to", "/learn", "/learn/get-started", "/releases/lts-vs-tech-stream"]])
}, 584266, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(829150),
        a = e.i(433519);
    let r = e.i(438270).default;
    e.s(["default", 0, ({
        title: e,
        navigation: s,
        action: i,
        theme: n,
        isHidden: d
    }) => {
        let {
            state: c
        } = (0, a.default)();
        return (0, l.jsx)(l.Fragment, {
            children: !d && (0, l.jsx)(r, {
                title: e ?? "",
                action: (e => {
                    if (!e?.link) return null;
                    let l = e?.link.linkReference?.href.current;
                    return {
                        label: e?.title ?? "",
                        href: l ? (0, t.default)(l, c, e?.extendLink) : "",
                        target: e?.link.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })(i),
                nav: s.map(e => ({
                    label: e?.title ?? "",
                    href: e?.link?.linkReference?.href.current ?? "",
                    target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                }))
            })
        })
    }], 584266)
}, 131564, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(749583),
        a = e.i(722978);
    e.s(["default", 0, ({
        theme: e = "light",
        actions: r,
        description: s,
        title: i,
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
                        children: i && (0, l.jsx)("h2", {
                            className: "loco-text-heading-md !font-nohemi",
                            children: i
                        })
                    }), (s || c) && (0, l.jsxs)("div", {
                        className: (0, a.default)("loco-text-body-lg [&_a]:text-blue mt-6 text-gray-500", "center" === d || "left" === d ? "max-w-5xl" : "max-w-3xl"),
                        children: [s, c]
                    }), r && (0, l.jsx)("div", {
                        className: "mt-8 flex justify-center gap-4",
                        children: r.map((e, a) => {
                            let r = `title-description-block-action-${e.title}-${a}`;
                            return 0 === a ? (0, l.jsx)(t.default, {
                                href: e.href,
                                target: e.target,
                                outlined: !0,
                                rounded: !0,
                                hasArrow: !0,
                                "data-link-location": "TitleDescriptionBlock",
                                "data-link-id": `title-description-block-action-primary-${a}`,
                                children: e.title
                            }, r) : (0, l.jsx)(t.default, {
                                href: e.href,
                                target: e.target,
                                variant: "secondary",
                                rounded: !0,
                                hasArrow: !0,
                                "data-link-location": "TitleDescriptionBlock",
                                "data-link-id": `title-description-block-action-secondary-${a}`,
                                children: e.title
                            }, r)
                        })
                    })]
                })
            })
        })
    }], 131564)
}, 438270, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(145158),
        a = e.i(722978),
        r = e.i(669486),
        s = e.i(749583),
        i = e.i(278466),
        n = e.i(402001),
        d = e.i(379394),
        c = e.i(892164),
        o = e.i(783078),
        u = e.i(430215);
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
        f = {
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
    var h = e.i(766930);
    let g = (0, t.forwardRef)(({
            nav: e,
            action: t,
            isSticky: r,
            indexOfActiveLink: i,
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
                        "fixed top-11 mt-1 bg-transparent": r,
                        "absolute top-0 py-1": !r,
                        "w-full": "default" === n
                    }),
                    children: (0, l.jsx)("div", {
                        className: "container h-full",
                        children: (0, l.jsxs)("div", {
                            className: (0, a.default)("flex h-full items-center justify-between rounded-md px-2 transition-colors duration-150", {
                                "bg-gray-900": !r,
                                "bg-[rgba(0,0,0,0.5)] backdrop-blur-sm": r
                            }),
                            children: [(0, l.jsx)("div", {
                                className: "h-full w-full shrink-1",
                                children: (0, l.jsx)("ul", {
                                    className: "flex h-full w-full items-center",
                                    children: e.map((e, t) => (0, l.jsx)(j, {
                                        label: e.label,
                                        href: e.href,
                                        target: e.target,
                                        active: i === t
                                    }, `alternate-navigation-element-${e.label}-${t}`))
                                })
                            }), t && (0, l.jsx)("div", {
                                className: "shrink-0",
                                children: (0, l.jsx)(s.default, {
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
            nav: s,
            indexOfActiveLink: i,
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
                                children: [(0, l.jsxs)(r.m.button, {
                                    animate: c ? "open" : "closed",
                                    className: "flex w-full items-center justify-between py-3",
                                    onClick: () => {
                                        o(!c)
                                    },
                                    children: [(0, l.jsx)("span", {
                                        className: "text-sm font-medium text-white",
                                        children: null == i || c ? n : s[i].label
                                    }), (0, l.jsx)(v, {})]
                                }), (0, l.jsx)(r.m.ul, {
                                    className: "overflow-hidden",
                                    initial: "initial",
                                    animate: c ? "open" : "closed",
                                    variants: f,
                                    children: s.map(({
                                        label: e,
                                        href: t,
                                        target: a
                                    }, r) => (0, l.jsx)(b, {
                                        label: e,
                                        href: t,
                                        target: a,
                                        active: i === r,
                                        index: r,
                                        isOpen: c,
                                        onClick: () => {
                                            o(!1)
                                        }
                                    }, `alternate-navigation-element-${e}-${r}`))
                                })]
                            })
                        })
                    })
                })
            }) : null
        }),
        v = () => (0, l.jsxs)(r.m.svg, {
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
        b = e => {
            let s = (0, t.useRef)(null),
                {
                    linkProps: o
                } = (0, n.useLink)(e, s),
                {
                    focusProps: u
                } = (0, d.useFocusRing)(),
                {
                    label: f,
                    href: x,
                    target: h,
                    locale: g,
                    localePrefix: p,
                    active: v,
                    index: b,
                    isOpen: j
                } = e;
            return (0, l.jsx)("li", {
                className: "border-t border-[#ffffff14]",
                children: (0, l.jsxs)(r.m.div, {
                    custom: b,
                    variants: m,
                    initial: "initial",
                    animate: j ? "open" : "closed",
                    className: "flex w-full items-center justify-between",
                    children: [(0, l.jsx)(i.Link, {
                        ...(0, c.mergeProps)(o, u),
                        ref: s,
                        href: x,
                        target: h ?? "_self",
                        locale: g,
                        className: "py-3 text-sm font-medium text-white",
                        localePrefix: p,
                        children: f
                    }), (0, l.jsx)("div", {
                        className: (0, a.default)("mr-1 h-2 w-2 rounded-full transition-colors duration-300", {
                            "bg-blue": v
                        })
                    })]
                })
            }, `n_${f}`)
        },
        j = e => {
            let r = (0, t.useRef)(null),
                {
                    linkProps: s
                } = (0, n.useLink)(e, r),
                {
                    isFocusVisible: o,
                    focusProps: u
                } = (0, d.useFocusRing)(),
                {
                    label: m,
                    href: f,
                    target: x,
                    locale: h,
                    localePrefix: g,
                    active: p
                } = e,
                v = (0, a.default)("alternateNavigation_item relative h-full flex items-center px-2 !text-[0.75rem] font-medium group outline-hidden text-gray-200 transition-colors duration-150", {
                    "a11y-ring rounded-xs": o
                }, {
                    active: p,
                    "text-white": p,
                    "text-gray-200": !p
                });
            return (0, l.jsx)("li", {
                className: "h-full",
                children: (0, l.jsx)(i.Link, {
                    ...(0, c.mergeProps)(s, u),
                    ref: r,
                    href: f,
                    target: x ?? "_self",
                    locale: h,
                    className: v,
                    localePrefix: g,
                    children: m
                })
            })
        };
    g.displayName = "DesktopNav", p.displayName = "MobileNav", e.s(["default", 0, ({
        variant: e = "default",
        title: a,
        nav: r,
        action: s
    }) => {
        let i = (0, u.default)(`(max-width: ${o.default.Large}px)`),
            n = (0, t.useRef)(null),
            [d, c] = (0, t.useState)(null),
            [m, f] = (0, t.useState)([]),
            [x, v] = (0, t.useState)(!1),
            [b, j] = (0, t.useState)(!1),
            [y, k] = (0, t.useState)(!1),
            w = (0, t.useRef)(0),
            N = () => {
                let e = r.map(e => e.href);
                f([...document.querySelectorAll("a[data-anchor-item]")].filter(l => {
                    let t = l.getAttribute("id");
                    return t && e.find(e => e.includes(t))
                }).map(e => ({
                    top: e.offsetTop + 43
                })))
            },
            L = () => {
                let e;
                n.current && (n.current.offsetTop < window.scrollY ? j(!0) : j(!1)), w.current > window.scrollY && b ? v(!0) : w.current < window.scrollY && v(!1), w.current = window.scrollY, n.current && (n.current.offsetTop > window.innerHeight && !x ? k(!0) : k(!1)), e = null, m.forEach((l, t) => {
                    window.scrollY > l.top && (e = t)
                }), c(e)
            };
        return (0, t.useEffect)(() => {
            let e = document.querySelector("nav");
            e && (e.ariaHidden = String(y))
        }, [y]), (0, t.useLayoutEffect)(() => (N(), window.addEventListener("resize", N), () => {
            window.removeEventListener("resize", N)
        }), []), (0, t.useEffect)(() => (w.current = window.scrollY, window.addEventListener("scroll", L), () => {
            window.removeEventListener("scroll", L)
        }), [x, m, i]), (0, l.jsx)(h.default, {
            children: i ? (0, l.jsx)(p, {
                ref: n,
                nav: r,
                isSticky: b,
                indexOfActiveLink: d,
                title: a
            }) : (0, l.jsx)(g, {
                ref: n,
                nav: r,
                action: s,
                isSticky: b,
                indexOfActiveLink: d,
                variant: e
            })
        })
    }], 438270)
}, 692627, 569074, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(675078),
        a = e.i(722978);
    let r = ({
        theme: e = "light",
        quote: r,
        author: s
    }) => {
        let i = (0, a.default)({
            dark: "dark" === e
        });
        return (0, l.jsx)("blockquote", {
            className: i,
            children: (0, l.jsx)("div", {
                className: "py-12 md:py-40 dark:bg-black",
                children: (0, l.jsx)("div", {
                    className: "container",
                    children: (0, l.jsxs)("div", {
                        className: "grid lg:grid-cols-12 lg:gap-2",
                        children: [r && (0, l.jsx)("div", {
                            className: "lg:col-start-4 lg:col-end-13 lg:row-start-1",
                            children: (0, l.jsx)("p", {
                                className: "quote-item loco-text-heading-md",
                                children: r
                            })
                        }), s && (0, l.jsxs)("div", {
                            className: "mt-4 flex flex-col lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:mt-2",
                            children: [s.image && s.image.src && (0, l.jsx)("div", {
                                className: "overflow-hidden rounded",
                                children: (0, l.jsx)(t.default, {
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
        isHidden: s
    }) => {
        let i = {
            name: a?.name || "",
            title: a?.title || "",
            image: {
                src: a?.image?.file?.asset.url || "",
                placeholder: a?.image?.file?.asset.metadata?.lqip || "",
                alt: a?.image?.alt || ""
            }
        };
        return (0, l.jsx)(l.Fragment, {
            children: !s && (0, l.jsx)(r, {
                quote: t,
                author: i,
                theme: "dark" === e ? "dark" : "light"
            })
        })
    }], 692627);
    let s = ({
        children: e,
        theme: t = "light",
        alignment: r = "left",
        subtitle: s
    }) => {
        let i = (0, a.default)({
                dark: "dark" === t
            }),
            n = (0, a.default)("col-span-12", {
                "lg:col-start-4": "offset" === r || s,
                "lg:col-span-8": "left" === r && !s,
                "lg:col-span-6": s
            });
        return (0, l.jsx)("section", {
            className: i,
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
        subtitle: r,
        isHidden: i
    }) => (0, l.jsx)(l.Fragment, {
        children: !i && (0, l.jsx)(s, {
            theme: "dark" === e ? "dark" : "light",
            alignment: "offset" === a ? "offset" : "left",
            subtitle: r || "",
            children: t
        })
    })], 569074)
}, 679288, e => {
    "use strict";
    var l = e.i(145158);
    e.s(["default", 0, () => {
        let [e, t] = (0, l.useState)("Unknown");
        return (0, l.useEffect)(() => {
            let e = window.navigator.userAgent;
            e.includes("Win") && t("Windows"), e.includes("Mac") && t("Mac"), e.includes("Linux") && t("Linux")
        }, []), e
    }])
}, 457689, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(145158),
        a = e.i(78389),
        r = e.i(131564),
        s = e.i(679288);
    e.s(["default", 0, ({
        theme: e,
        variant: i,
        padding: n,
        title: d,
        description: c,
        richText: o,
        actions: u,
        isHidden: m,
        operatingSystem: f
    }) => {
        let x = (0, s.default)(),
            h = (0, t.useMemo)(() => u ? u.map(e => ({
                title: e?.title || "",
                href: e?.link?.linkReference?.href?.current || "",
                target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            })) : [], [u]);
        return f && f !== x ? null : (0, l.jsx)(l.Fragment, {
            children: !m && (0, l.jsx)(r.default, {
                theme: "dark" === e ? "dark" : "light",
                variant: "center" === i ? "center" : "left",
                padding: n ?? !0,
                title: d,
                description: c ?? "",
                richText: (0, l.jsx)(a.PortableText, {
                    value: o
                }),
                actions: h
            })
        })
    }])
}, 68274, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(145158),
        a = e.i(185462);
    e.s(["default", 0, ({
        data: e,
        isHidden: r,
        theme: s
    }) => {
        let i = (0, t.useMemo)(() => e?.map(e => e.value?.text ? {
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
            children: !r && (0, l.jsx)(a.default, {
                keyFigures: i,
                theme: "dark" === s ? "dark" : "light"
            })
        })
    }], 68274)
}, 794189, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(722978),
        a = e.i(145158),
        r = e.i(822736),
        s = e.i(751004),
        i = e.i(675078),
        n = e.i(614909),
        d = e.i(954936);
    let c = (0, n.default)(() => e.A(969945), {
            loadableGenerated: {
                modules: [170438]
            },
            ssr: !1
        }),
        o = ({
            image: e,
            video: n,
            layout: o,
            forcedAspectRatio: u = "none",
            richCaption: m
        }) => {
            let f = (0, a.useRef)(null),
                [x, h] = (0, a.useState)(!1),
                g = (0, r.useInView)(f),
                p = (0, s.useReducedMotion)(),
                v = (0, t.default)("", {
                    "max-w-lg": "small" === o,
                    "max-w-lg mx-auto": "small-center" === o,
                    "container grid lg:grid-cols-12 lg:gap-2": "offset" === o
                }),
                b = (0, t.default)("relative overflow-hidden rounded-2xl", {
                    "aspect-square": "1:1" === u,
                    "aspect-[4/3]": "4:3" === u,
                    "aspect-video": "16:9" === u
                }),
                j = (0, t.default)("absolute cover z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": x && !p && g && n?.src
                }),
                y = {
                    aspectRatio: "none" === u && e.dimensions?.width && e.dimensions?.height ? `${e.dimensions.width}/${e.dimensions.height}` : void 0
                };
            return (0, l.jsx)("div", {
                className: v,
                ref: f,
                children: (0, l.jsxs)("div", {
                    className: "offset" === o ? "lg:col-start-4 lg:col-end-13 lg:row-start-1" : "",
                    children: [(0, l.jsxs)("div", {
                        className: b,
                        style: y,
                        children: [(0, l.jsx)(i.default, {
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
                        }), g && !p && n?.src && (0, l.jsx)(c, {
                            url: n.src,
                            playing: !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: "[&>video]:object-cover",
                            onReady: () => {
                                h(!0)
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
        provider: r,
        image: s,
        video: c,
        layout: o,
        buttonLabel: f,
        richCaption: x,
        blockKey: h,
        videoInline: g,
        blockedMessage: p,
        consentButtonLabel: v
    }) => {
        let b = (0, a.useRef)(null),
            [j, y] = (0, a.useState)(!1),
            k = null;
        "youtube" === r ? k = (0, n.default)(() => e.A(802241), {
            loadableGenerated: {
                modules: [966543]
            },
            ssr: !1
        }) : "brandfolder" === r && (k = (0, n.default)(() => e.A(969945), {
            loadableGenerated: {
                modules: [170438]
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
        let N = () => {
                y(!0)
            },
            L = (0, t.default)("", {
                "max-w-lg": "small" === o,
                "max-w-lg mx-auto": "small-center" === o,
                "container grid lg:grid-cols-12 lg:gap-2": "offset" === o
            }),
            R = (0, t.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": j && c && c.src
            }),
            _ = (0, t.default)("relative", {
                "lg:col-start-4 lg:col-end-13 lg:row-start-1": "offset" === o
            });
        return (0, l.jsx)("div", {
            className: L,
            ref: b,
            children: (0, l.jsxs)("div", {
                className: _,
                children: [(0, l.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-2xl",
                    children: [s?.src && (0, l.jsxs)("div", {
                        className: R,
                        onClick: N,
                        children: [!g && (0, l.jsx)(u.default, {
                            handleIsPlaying: N,
                            className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                            label: f,
                            "data-link-location": `${h}-video-play`,
                            "data-link-id": `${h}-video-play`,
                            "data-link-type": "CTA"
                        }), (0, l.jsx)(i.default, {
                            src: s.src,
                            placeholder: "blur",
                            blurDataURL: s.placeholder,
                            fill: !0,
                            alt: s.alt ?? "",
                            className: "cover absolute object-cover brightness-75"
                        })]
                    }), c?.src && k && (0, l.jsx)(k, {
                        url: c.src,
                        playing: j,
                        loop: g,
                        muted: g,
                        playsinline: g,
                        width: "100%",
                        height: "100%",
                        className: "[&>video]:object-cover",
                        onReady: () => {
                            g && y(!0)
                        },
                        controls: !g,
                        config: w
                    }), c?.src?.includes("youtube.com") && (0, l.jsx)(m.default, {
                        blockedMessage: p,
                        consentButtonLabel: v
                    })]
                }), x && (0, l.jsx)("div", {
                    className: "loco-text-body-sm mt-2 text-gray-500",
                    children: (0, l.jsx)(d.default, {
                        children: x
                    })
                })]
            })
        })
    };
    var x = e.i(78389);
    e.s(["default", 0, ({
        mediaType: e,
        provider: a,
        brandfolder: r,
        youtube_url: s,
        image: i,
        theme: n,
        layout: d,
        aspectRatio: c,
        buttonLabel: u,
        videoInline: m,
        richCaption: h,
        blockKey: g,
        isHidden: p,
        consent: v
    }) => {
        let b = {
                type: e ?? "image",
                layout: d ?? "full",
                theme: n ?? "light",
                video: {
                    src: ("brandfolder" === a ? r?.muxHLSURL : s) ?? null
                },
                aspectRatio: c ?? "none",
                image: {
                    src: i?.file?.asset.url ?? "",
                    alt: i?.alt ?? "",
                    caption: i?.caption ?? "",
                    placeholder: i?.file?.asset.metadata?.lqip ?? "",
                    dimensions: {
                        width: i?.file?.asset?.metadata?.dimensions?.width ?? 0,
                        height: i?.file?.asset?.metadata?.dimensions?.height ?? 0
                    }
                },
                provider: a,
                buttonLabel: u,
                videoInline: m,
                richCaption: (0, l.jsx)(x.PortableText, {
                    value: h
                })
            },
            j = "full";
        "small" === d ? j = "small" : "small-center" === d ? j = "small-center" : "offset" === d && (j = "offset");
        let y = "none";
        ("1:1" === c || "16:9" === c || "4:3" === c) && (y = c);
        let k = (0, t.default)("py-16", {
                "dark bg-black": "dark" === b.theme
            }),
            w = (0, t.default)("container");
        return (0, l.jsx)(l.Fragment, {
            children: !p && (0, l.jsx)("div", {
                className: k,
                children: (0, l.jsx)("div", {
                    className: w,
                    children: "video" === b.type ? (0, l.jsx)(f, {
                        provider: "brandfolder" === a ? "brandfolder" : "youtube",
                        layout: j,
                        video: b.video,
                        image: b.image,
                        buttonLabel: b.buttonLabel,
                        richCaption: b.richCaption,
                        blockKey: g,
                        videoInline: b.videoInline,
                        blockedMessage: v?.blockedMessage,
                        consentButtonLabel: v?.consentButtonLabel || ""
                    }) : (0, l.jsx)(o, {
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
    var l = e.i(615167),
        t = e.i(145158),
        a = e.i(78389),
        r = e.i(339680),
        s = e.i(954936),
        i = e.i(570133),
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
            }) => (0, l.jsx)(r.default, {
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
            }) => e.isHidden ? null : (0, l.jsx)(i.default, {
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
        theme: r,
        layout: i,
        spacing: n,
        isHidden: d,
        productCategoryFilter: m
    }) => {
        let [f] = (0, t.useContext)(c.FiltersContext), {
            subcategories: x
        } = f.categories?.find(({
            _id: e
        }) => e === f.selectedCategory) || {}, h = null != f.selectedSubcategory ? (x || []).find(({
            _id: e
        }) => e === f.selectedSubcategory) : null, g = !m || m.categories?.find(e => e._id === f.selectedCategory) != null && (null == h || !m.subcategories || m.subcategories.some(({
            _id: e
        }) => e === f.selectedSubcategory)), p = (0, o.default)("dark:bg-black", {
            "py-8 md:py-12": "default" === n || "small" === n || !n,
            "py-16": "large" === n,
            "bg-black dark": "dark" === r
        }), v = (0, o.default)("", {
            container: "default" === i || !i,
            "container max-w-[60rem] mx-auto": "center" === i,
            "container grid lg:grid-cols-12 lg:gap-2": "offset" === i
        }), b = (0, o.default)("[&>*]:loco-text-body [&>*]:mb-4", {
            "lg:col-start-4 lg:col-end-10 lg:row-start-1": "offset" === i
        });
        return (0, l.jsx)(l.Fragment, {
            children: !d && g && (0, l.jsx)("section", {
                className: p,
                children: (0, l.jsx)("div", {
                    className: v,
                    children: (0, l.jsx)(s.default, {
                        className: b,
                        children: (0, l.jsx)(a.PortableText, {
                            value: e,
                            components: u
                        })
                    })
                })
            })
        })
    }], 25665)
}, 164163, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(722978),
        a = e.i(675078),
        r = e.i(825610),
        s = e.i(749583),
        i = e.i(596889),
        n = e.i(954936);
    e.s(["default", 0, ({
        title: e,
        cards: d,
        layout: c = "four-cards",
        cardVariant: o = "default",
        scroll: u = !1,
        cardsHeading: m
    }) => {
        let f = m || (e ? "h3" : "h2"),
            x = (0, t.clsx)("gap-4 md:gap-8", {
                "grid grid-cols-12": !u,
                "flex overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-100": u
            });
        return (0, l.jsx)("section", {
            className: "bg-white dark:bg-black",
            children: (0, l.jsxs)("div", {
                className: "container py-16",
                children: [e && (0, l.jsx)("h2", {
                    className: "loco-text-heading-md mb-9 text-center",
                    children: e
                }), (0, l.jsx)("div", {
                    className: x,
                    children: d?.map((d, m) => {
                        let x = (0, t.clsx)("flex flex-wrap flex-row", !u && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[c], u && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[c]),
                            h = (0, t.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === o || "transparent" === o
                            }),
                            g = (0, t.clsx)({
                                "p-6": "default" === o || "transparent" === o,
                                "py-6": "padded" === o
                            }),
                            p = (0, t.clsx)("object-cover", {
                                "rounded-t-xl": "default" === o || "transparent" === o,
                                rounded: "padded" === o
                            }),
                            v = (0, t.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== o
                            });
                        return (0, l.jsxs)(i.default, {
                            className: x,
                            variant: o,
                            children: [(0, l.jsxs)(i.default.Content, {
                                children: [d.image && d.image.src && (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(i.default.Image, {
                                        withinContainer: d.image.withinContainer,
                                        children: (0, l.jsx)(a.default, {
                                            src: d.image.src ?? "",
                                            alt: d.image.alt ?? "",
                                            fill: !0,
                                            className: p,
                                            quality: 100
                                        })
                                    }), d.image.description && (0, l.jsx)(n.default, {
                                        className: v,
                                        children: d.image.description
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: g,
                                    children: [d.icon && d.icon.src && (0, l.jsx)("div", {
                                        className: "relative mb-5 dark:invert",
                                        children: (0, l.jsx)(a.default, {
                                            src: d.icon.src ?? "",
                                            alt: d.icon.alt ?? "",
                                            quality: 100,
                                            width: 23,
                                            height: 23
                                        })
                                    }), (0, l.jsx)(f, {
                                        className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                        children: d.title
                                    }), d.description && (0, l.jsx)(n.default, {
                                        className: "loco-text-body mb-4",
                                        children: d.description
                                    }), d.richText && (0, l.jsx)(n.default, {
                                        className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                        children: d.richText
                                    })]
                                })]
                            }), d.actions && (0, l.jsx)("div", {
                                className: h,
                                children: d.actions.map((e, t) => (0, l.jsx)(s.default, {
                                    href: e.href,
                                    target: e.target ?? "_self",
                                    rounded: !0,
                                    hasArrow: !0,
                                    outlined: 0 === t,
                                    className: 0 === t ? "mr-3" : "mt-4",
                                    variant: 0 === t ? "primary" : "secondary",
                                    "data-link-location": r.trackingLocation.cardsAction,
                                    "data-link-id": `${r.trackingLocation.cardsAction}-${t}`,
                                    children: e.title
                                }, `${e.title}-${t}`))
                            })]
                        }, `card-${m}-${e}`)
                    })
                })]
            })
        })
    }], 164163)
}, 449758, e => {
    "use strict";
    var l = e.i(615167),
        t = e.i(145158),
        a = e.i(78389),
        r = e.i(164163),
        s = e.i(326388);
    e.s(["default", 0, ({
        title: e,
        layout: i,
        cardVariant: n,
        scroll: d,
        theme: c,
        cardsHeading: o,
        cards: u,
        isHidden: m
    }) => {
        let {
            appendCommerceData: f,
            appendCommerceDataToPortableText: x,
            currency: h
        } = (0, s.default)(), g = (0, t.useMemo)(() => u?.map(e => ({
            type: e._type,
            title: f(e.title, e.productCatalogItem) || "",
            description: f(e.description, e.productCatalogItem) || "",
            richText: (0, l.jsx)(a.PortableText, {
                value: x(e.richText, e.productCatalogItem)
            }),
            image: e.image && {
                src: e.image?.file?.asset.url || "",
                alt: e.image?.alt || "",
                description: e.image?.caption ?? "",
                withinContainer: e.image?.visualOptions?.container
            },
            icon: e.icon && {
                src: e.icon?.file?.asset.url,
                alt: e.icon?.alt || ""
            },
            actions: e.actions?.map(e => {
                let l = e.link?.linkReference?.target === "_blank" ? "_blank" : "_self";
                return {
                    title: e.title || "",
                    href: e.link?.linkReference?.href?.current || "",
                    target: l
                }
            })
        })), [u, f, x]);
        return (0, l.jsx)(l.Fragment, {
            children: !m && (0, l.jsx)("section", {
                className: `${"dark"===c?"dark":""} overflow-hidden`,
                children: (0, l.jsx)(r.default, {
                    layout: "two-cards" === i || "three-cards" === i || "four-cards" === i ? i : "four-cards",
                    cardVariant: "default" === n || "padded" === n || "transparent" === n ? n : "default",
                    scroll: d,
                    title: e || "",
                    cardsHeading: ["h2", "h3", "h4", "div"].includes(o) ? o : void 0,
                    cards: g
                })
            })
        })
    }], 449758)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "398950d1-44e9-5d08-9c3d-5598224e59a3")
    } catch (e) {}
}();
//# debugId=398950d1-44e9-5d08-9c3d-5598224e59a3