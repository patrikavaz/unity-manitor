(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 81636, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(722978),
        a = e.i(153348),
        r = e.i(955429),
        i = e.i(71871),
        s = e.i(166511),
        n = e.i(999721),
        d = e.i(998569),
        c = e.i(595388);
    let o = (0, i.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        u = ({
            title: e,
            titleTag: l,
            description: a,
            action: r
        }) => {
            let [i, s] = (0, n.useState)(!1);
            return (0, t.jsxs)("div", {
                className: "relative border-t border-solid border-gray-700",
                children: [(0, t.jsxs)("div", {
                    className: "pt-2 pb-8 md:flex md:gap-2",
                    children: [(0, t.jsx)(l || "h2", {
                        className: "loco-text-heading-xs md:w-6/12",
                        children: e
                    }), (0, t.jsxs)("div", {
                        className: "mt-4 flex justify-between gap-4 md:mt-0 md:w-6/12",
                        children: [(0, t.jsx)("p", {
                            className: "loco-text-body-sm max-w-md opacity-70",
                            children: a
                        }), (0, t.jsx)("div", {
                            className: "shrink-0 text-right",
                            children: (0, t.jsx)(d.default, {
                                direction: "right",
                                ariaLabel: r.label,
                                variant: "secondary",
                                isForcedHover: i,
                                tag: "span"
                            })
                        })]
                    })]
                }), (0, t.jsx)(c.Link, {
                    className: "absolute top-0 left-0 z-10 h-full w-full",
                    href: r.href,
                    title: r.label,
                    onMouseOver: () => {
                        s(!0)
                    },
                    onMouseLeave: () => {
                        s(!1)
                    }
                })]
            })
        },
        f = ({
            image: e,
            video: i
        }) => {
            let d = (0, n.useRef)(null),
                [c, u] = (0, n.useState)(!1),
                f = (0, a.useInView)(d),
                m = (0, r.useReducedMotion)(),
                g = (0, l.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": c && !m && f && i.src
                });
            return (0, t.jsxs)("div", {
                className: "relative aspect-video overflow-hidden rounded-2xl",
                ref: d,
                children: [(0, t.jsx)(s.default, {
                    src: e.src,
                    placeholder: "blur",
                    blurDataURL: e.placeholder,
                    fill: !0,
                    alt: e.alt ?? "",
                    className: g
                }), f && !m && i.src && (0, t.jsx)(o, {
                    url: i.src,
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
        m = ({
            image: e,
            video: i
        }) => {
            let d = (0, n.useRef)(null),
                [c, u] = (0, n.useState)(!1),
                f = (0, a.useInView)(d),
                m = (0, r.useReducedMotion)(),
                g = (0, l.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": c && !m && f && i.src
                });
            return (0, t.jsxs)("div", {
                className: "pointer-events-none absolute top-0 left-0 h-full w-full object-cover opacity-30",
                ref: d,
                children: [(0, t.jsx)(s.default, {
                    src: e.src,
                    placeholder: "blur",
                    blurDataURL: e.placeholder,
                    fill: !0,
                    alt: e.alt ?? "",
                    className: g
                }), f && !m && i.src && (0, t.jsx)(o, {
                    url: i.src,
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
        g = ({
            tagline: e,
            visual: a,
            background: r,
            benefits: i = [],
            theme: s
        }) => {
            let n = (0, l.default)("relative bg-gray-100 px-4 pb-10 pt-8 lg:px-8 lg:pt-44", {
                "dark bg-gray-900": !s || "dark" === s
            });
            return (0, t.jsxs)("div", {
                className: n,
                children: [r && (0, t.jsx)(m, {
                    ...r
                }), (0, t.jsxs)("div", {
                    className: "relative z-10 md:grid md:grid-cols-12 md:gap-2",
                    children: [(0, t.jsx)("div", {
                        className: "relative row-start-1 md:col-start-1 md:col-end-13 lg:col-start-1 lg:col-end-9",
                        children: (0, t.jsx)("p", {
                            className: "loco-text-heading-md",
                            children: e
                        })
                    }), a && (0, t.jsx)("div", {
                        className: "relative col-start-1 col-end-5 row-start-2 mt-14",
                        children: (0, t.jsx)(f, {
                            ...a
                        })
                    }), i && (0, t.jsx)("div", {
                        className: "col-start-1 col-end-13 row-start-3 mt-14 md:mt-[10rem] lg:col-start-5 lg:col-end-13",
                        children: (0, t.jsx)("div", {
                            className: "lg:grid lg:grid-cols-8 lg:gap-2",
                            children: (0, t.jsx)("div", {
                                className: "lg:col-start-1 lg:col-end-9",
                                children: i.map((e, l) => (0, t.jsx)(u, {
                                    ...e
                                }, l))
                            })
                        })
                    })]
                })]
            })
        };
    e.s(["default", 0, ({
        tagline: e,
        visual: l,
        background: a,
        benefits: r,
        isHidden: i,
        theme: s
    }) => (0, t.jsx)(t.Fragment, {
        children: !i && (0, t.jsx)(g, {
            tagline: e,
            visual: l ? {
                image: {
                    src: l?.visualImage?.asset.url || "",
                    placeholder: l?.visualImage?.asset.metadata?.lqip || "",
                    alt: ""
                },
                video: {
                    src: l?.brandfolder?.muxHLSURL || ""
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
            theme: "dark" === s ? "dark" : "light"
        })
    })], 81636)
}, 32382, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(999721),
        a = e.i(722990),
        r = e.i(166511),
        i = e.i(722978);
    let s = ({
            overline: e,
            variant: l = "default"
        }) => {
            let a = "products" === l;
            return (0, t.jsx)("div", {
                className: (0, i.default)("loco-caption-lg-semibold mb-2 lg:mb-3", {
                    "text-white": a,
                    "text-gray-700 dark:text-gray-300": !a
                }),
                children: e
            })
        },
        n = ({
            title: e
        }) => (0, t.jsx)("div", {
            className: "loco-text-heading-md !font-nohemi mb-5 md:w-2/3 lg:mb-6",
            children: e
        }),
        d = ({
            body: e,
            variant: l = "default"
        }) => (0, t.jsx)("div", {
            className: (0, i.default)("loco-text-body-lg mb-6 lg:mb-12", {
                "md:w-2/3": "products" === l
            }),
            children: e
        });
    var c = e.i(749583);
    let o = ({
            actions: e,
            variant: a = "default"
        }) => {
            let r = "products" === a;
            return (0, t.jsx)("div", {
                className: "flex flex-col flex-wrap items-start justify-start gap-y-4 md:flex-row md:gap-2",
                children: e.map((e, a) => e.renderModal ? (0, t.jsx)(l.default.Fragment, {
                    children: e.renderModal()
                }, a) : (0, t.jsx)(c.default, {
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
            title: l,
            body: a,
            actions: c,
            image: u,
            className: f,
            variant: m = "default"
        }) => {
            let g = (0, i.default)("container relative grid col-span-12 py-8 lg:py-12 px-4 lg:px-16 rounded-xl overflow-hidden", {
                    dark: !!u
                }, f),
                x = "products" === m;
            return (0, t.jsx)("div", {
                className: "bg-white py-16 dark:bg-black",
                children: (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                        className: "relative grid grid-cols-12 overflow-hidden rounded-xl px-4 py-8 lg:px-16 lg:py-12",
                        children: [u && (0, t.jsx)(r.default, {
                            src: u.url,
                            alt: u.alt || "",
                            fill: !0,
                            className: (0, i.default)("scale-105 object-cover", {
                                blur: !x
                            })
                        }), (0, t.jsxs)("div", {
                            className: g,
                            children: [(0, t.jsx)(s, {
                                overline: e,
                                variant: m
                            }), (0, t.jsx)(n, {
                                title: l
                            }), (0, t.jsx)(d, {
                                body: a,
                                variant: m
                            }), (0, t.jsx)(o, {
                                actions: c,
                                variant: m
                            })]
                        })]
                    })
                })
            })
        };
    var f = e.i(829150),
        m = e.i(433519),
        g = e.i(775041),
        x = e.i(115219);
    e.s(["default", 0, ({
        overline: e,
        title: r,
        body: i,
        actions: s,
        image: n,
        theme: d,
        isHidden: c,
        variant: o,
        productCatalogItem: h,
        productCategoryFilter: p
    }) => {
        let [b] = (0, l.useContext)(g.FiltersContext), {
            state: v
        } = (0, m.default)(), j = {
            ...v,
            product: h?.productKey,
            variant: null
        }, {
            renderModal: y,
            extraFields: k
        } = (0, x.useFormModal)(s), w = (0, l.useMemo)(() => s ? s.map(e => (e => {
            if (!e) return null;
            let t = !!e.form,
                l = e.link?.linkReference?.href?.current,
                a = t ? "" : l ? (0, f.default)(l, j, e.extendLink) : "";
            if (t) {
                let t = e.form || {},
                    l = {
                        ...t,
                        title: t.title || "",
                        description: t.description || "",
                        fields: t.fields || [],
                        sfdcIntegration: t.sfdcIntegration || e.webinarFormParametersContent?.sfdcIntegration || {},
                        extraFields: k
                    };
                return {
                    label: e.title || "",
                    href: "",
                    target: e.link?.linkReference?.target || "_self",
                    renderModal: () => y({
                        label: e.title || "",
                        form: l
                    })
                }
            }
            return {
                label: e.title || "",
                href: a,
                target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            }
        })(e)).filter(e => !!e) : [], [s, j, y, k]), {
            subcategories: N
        } = b.categories?.find(({
            _id: e
        }) => e === b.selectedCategory) || {}, L = null != b.selectedSubcategory ? (N || []).find(({
            _id: e
        }) => e === b.selectedSubcategory) : null, R = !p || p.categories?.find(e => e._id === b.selectedCategory) != null && (null == L || !p.subcategories || p.subcategories.some(({
            _id: e
        }) => e === b.selectedSubcategory)), _ = n ? {
            url: n?.file?.asset.url || "",
            alt: n.alt
        } : void 0;
        return (0, t.jsx)(t.Fragment, {
            children: !c && R && (0, t.jsx)("section", {
                className: "dark" === d ? "dark" : "",
                children: (0, t.jsx)(u, {
                    overline: e,
                    title: r || "",
                    body: (0, t.jsx)(a.PortableText, {
                        value: i
                    }),
                    actions: w,
                    image: _,
                    variant: o
                })
            })
        })
    }], 32382)
}, 673300, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(999721),
        a = e.i(153348),
        r = e.i(955429),
        i = e.i(166511),
        s = e.i(71871),
        n = e.i(722978),
        d = e.i(749583);
    let c = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        o = ({
            title: e,
            description: s,
            image: o,
            video: u,
            actions: f
        }) => {
            let m = (0, l.useRef)(null),
                [g, x] = (0, l.useState)(!1),
                h = (0, a.useInView)(m, {
                    once: !0
                }),
                p = (0, r.useReducedMotion)(),
                b = (0, n.default)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": g && !p && h && u.src
                });
            return (0, t.jsx)("section", {
                className: "dark bg-gray-900",
                children: (0, t.jsxs)("div", {
                    ref: m,
                    className: "relative box-border flex min-h-screen flex-col items-center justify-center p-5",
                    children: [o && o.src && (0, t.jsx)(i.default, {
                        fill: !0,
                        alt: o.alt ?? "",
                        src: o.src,
                        className: b
                    }), h && !p && u.src && (0, t.jsx)(c, {
                        url: u.src,
                        playing: !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 brightness-50 [&>video]:object-cover",
                        onReady: () => {
                            x(!0)
                        },
                        config: {
                            hlsOptions: {
                                maxMaxBufferLength: 1,
                                startLevel: 1
                            }
                        }
                    }), (0, t.jsxs)("div", {
                        className: "relative z-10 max-w-3xl text-center text-white",
                        children: [(0, t.jsx)("h2", {
                            className: "loco-text-heading-md",
                            children: e
                        }), s && (0, t.jsx)("div", {
                            className: "loco-text-body-lg mt-2 opacity-70",
                            children: s
                        }), f && (0, t.jsxs)("div", {
                            className: "mt-6 flex justify-center gap-4",
                            children: [" ", f.map((e, l) => {
                                if (e.link) return (0, t.jsx)(d.default, {
                                    href: e.link.href,
                                    target: e.link.target,
                                    variant: 0 === l ? "primary" : "secondary",
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: e.title
                                }, `full-screen-visual-action-link-${e.title}-${l}`);
                                if (e.form) {
                                    let a = {
                                        ...e.form.form,
                                        ...e.form.webinarFormParametersContent,
                                        extraFields: e.form.extraFields
                                    };
                                    return (0, t.jsx)("div", {
                                        children: e.form.renderModal({
                                            label: e.title,
                                            form: a
                                        })
                                    }, `full-screen-visual-action-modal-${e.title}-${l}`)
                                }
                            }), " "]
                        })]
                    })]
                })
            })
        };
    var u = e.i(115219);
    let f = ({
        title: e,
        description: l,
        image: a,
        brandfolder: r,
        actions: i,
        isHidden: s
    }) => {
        let {
            mapFormActions: n
        } = (0, u.useFormModal)(i), d = n(i);
        return (0, t.jsx)(t.Fragment, {
            children: !s && (0, t.jsx)(o, {
                title: e,
                description: l,
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
    };
    e.s(["FullScreenVisualBlockSuspense", 0, e => (0, t.jsx)(l.default.Suspense, {
        fallback: (0, t.jsx)("div", {
            className: "h-screen w-full bg-black"
        }),
        children: (0, t.jsx)(f, {
            ...e
        })
    })], 673300)
}, 649042, 2062, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(999721),
        a = e.i(722990),
        r = e.i(722978),
        i = e.i(166511),
        s = e.i(825610),
        n = e.i(387660);
    let d = ({
        children: e,
        tag: l = "div",
        className: a = ""
    }) => {
        let i = (0, r.default)("loco-caption-lg-semibold mb-4", a);
        return (0, t.jsx)(l, {
            className: i,
            children: e
        })
    };
    var c = e.i(749583);
    let o = ({
        children: e,
        className: l = "",
        orientation: a = "horizontal"
    }) => {
        let i = (0, r.default)("flex gap-2 flex-wrap", {
            "flex-col items-start": "vertical" === a
        }, l);
        return (0, t.jsx)("div", {
            className: i,
            children: e
        })
    };
    e.s(["default", 0, o], 2062);
    var u = e.i(14452),
        f = e.i(805518),
        m = e.i(526826),
        g = e.i(766930);
    let x = ({
        features: e,
        transitionTime: a = 8500
    }) => {
        let [r, i] = (0, l.useState)(0), s = (0, l.useRef)(null), n = (0, l.useRef)(null), [d, o] = (0, l.useState)(!1), [u, f] = (0, l.useState)(!1), x = (0, l.useRef)(null);
        (0, l.useEffect)(() => {
            e.forEach(e => {
                e.icon && (new window.Image().src = e.icon, new window.Image().src = e.icon)
            })
        }, [e]), (0, l.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                o(e.intersectionRatio >= .8)
            }, {
                threshold: [0, .8, 1]
            });
            return n.current && e.observe(n.current), () => e.disconnect()
        }, []), (0, l.useEffect)(() => (s.current && clearTimeout(s.current), d && !u && (s.current = setTimeout(() => {
            i(t => (t + 1) % e.length)
        }, a)), () => {
            s.current && clearTimeout(s.current)
        }), [r, e.length, a, d, u]);
        let h = (0, l.useCallback)(t => {
                let l = t === r;
                i(t), f(!0);
                let s = e[t];
                s?.onCardClick && setTimeout(() => {
                    s.onCardClick?.(l)
                }, 0), x.current && clearTimeout(x.current), x.current = setTimeout(() => {
                    f(!1)
                }, a)
            }, [r, e, a]),
            p = (0, l.useCallback)((e, t) => {
                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), h(t))
            }, [h]);
        return (0, l.useEffect)(() => () => {
            x.current && clearTimeout(x.current)
        }, []), (0, t.jsx)(g.default, {
            children: (0, t.jsx)("div", {
                ref: n,
                className: "relative inline-flex w-full flex-col items-start justify-start gap-2 self-stretch px-5 pb-6 md:px-5 md:pb-6 lg:px-0 lg:pb-0 xl:px-20",
                children: e.map((e, l) => {
                    let a = l === r;
                    return (0, t.jsxs)("div", {
                        "data-mobile": "true",
                        "data-show-image": a ? "true" : "false",
                        "data-state": a ? "selected" : "inactive",
                        role: "button",
                        tabIndex: 0,
                        className: `cursor-pointer self-stretch overflow-hidden rounded-lg bg-white ${a?`${e.icon?"lg:pl-36":"lg:pl-10"} p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_2px_12px_3px_rgba(0,0,0,0.04)] lg:py-8 lg:pr-10`:"p-6 lg:px-10 lg:py-6"} flex lg:inline-flex lg:items-start ${a?"flex-col":"items-center"} relative justify-start gap-2 transition-all duration-500 ease-out`,
                        onClick: () => h(l),
                        onKeyDown: e => p(e, l),
                        children: [e.icon && a && (0, t.jsx)(m.m.div, {
                            initial: {
                                opacity: 0,
                                scale: .8
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            transition: {
                                type: "spring",
                                duration: .2,
                                bounce: .1,
                                delay: 0
                            },
                            className: "inline-flex h-14 w-14 items-center justify-start gap-2.5 lg:hidden",
                            children: (0, t.jsx)("div", {
                                className: "flex flex-1 items-center justify-center gap-2.5 self-stretch",
                                children: (0, t.jsx)("img", {
                                    className: "flex-1 self-stretch",
                                    src: e.icon || "https://placehold.co/57x57",
                                    alt: e.title || "Feature icon",
                                    width: 57,
                                    height: 57,
                                    loading: "eager",
                                    style: {
                                        objectFit: "cover",
                                        imageRendering: "auto"
                                    }
                                })
                            })
                        }), e.icon && a && (0, t.jsx)(m.m.div, {
                            initial: {
                                opacity: 0,
                                x: -10
                            },
                            animate: {
                                opacity: 1,
                                x: 0
                            },
                            transition: {
                                type: "spring",
                                duration: .5,
                                bounce: .1,
                                delay: .1
                            },
                            className: "pointer-events-none absolute inset-y-0 left-[-38px] hidden lg:flex",
                            children: (0, t.jsx)("div", {
                                className: "flex h-full items-center justify-start py-8",
                                children: (0, t.jsx)("img", {
                                    className: "max-h-full w-auto object-contain",
                                    src: e.icon || "",
                                    alt: e.title || "Feature icon",
                                    loading: "eager",
                                    style: {
                                        imageRendering: "auto"
                                    }
                                })
                            })
                        }), (0, t.jsxs)("div", {
                            className: "flex flex-col items-start justify-start gap-[9px] self-stretch lg:inline-flex lg:max-w-[304px] lg:flex-1 lg:flex-col",
                            children: [a && (0, t.jsx)(m.m.div, {
                                initial: {
                                    opacity: 0,
                                    y: -.5
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    type: "spring",
                                    duration: .3,
                                    bounce: .1
                                },
                                className: "inline-flex w-64 items-center justify-center",
                                children: (0, t.jsx)("div", {
                                    className: "flex-1 justify-center text-[10px] leading-[16px] font-medium tracking-[1px] text-gray-700 uppercase md:text-[12px] md:leading-[21px] md:tracking-[1.2px]",
                                    children: e.eyebrow || ""
                                })
                            }), (0, t.jsx)("div", {
                                className: "inline-flex items-center justify-center self-stretch",
                                children: (0, t.jsx)(m.m.div, {
                                    animate: {
                                        color: a ? "#000000" : "#374151"
                                    },
                                    transition: {
                                        type: "spring",
                                        duration: .3,
                                        bounce: .1
                                    },
                                    className: "flex-1 justify-center text-base leading-tight font-medium md:text-[20px] md:leading-[24px]",
                                    children: e.title || "Untitled"
                                })
                            }), a && (0, t.jsx)(m.m.div, {
                                initial: {
                                    opacity: 0,
                                    y: 1
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    type: "spring",
                                    duration: .3,
                                    bounce: .1
                                },
                                className: "justify-start self-stretch text-xs font-normal text-gray-700 md:text-[14px] md:leading-[21px]",
                                children: e.description || ""
                            }), a && (0, t.jsx)(m.m.div, {
                                initial: {
                                    opacity: 0,
                                    y: 1
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    type: "spring",
                                    duration: .3,
                                    bounce: .1
                                },
                                className: "flex flex-col items-start justify-start self-stretch pt-3",
                                children: (0, t.jsx)(c.default, {
                                    href: e.action?.href || "#",
                                    target: e.action?.target,
                                    variant: "primary",
                                    size: "small",
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: e.action?.label || "Learn More"
                                })
                            })]
                        })]
                    }, l)
                })
            })
        })
    };
    var h = e.i(783078),
        p = e.i(430215),
        b = e.i(224601),
        v = e.i(153348),
        j = e.i(955429),
        y = e.i(71871),
        k = e.i(186114);
    let w = (0, y.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        N = ({
            actions: e = [],
            aspectRatio: a,
            backgroundImage: m = !1,
            description: g,
            eyebrow: y,
            image: N,
            mediaPosition: L = "right",
            size: R = "default",
            title: _,
            youtubeVideo: C,
            brandfolderVideo: M,
            videoInline: T = !1,
            buttonLabel: S = "Play Video",
            blockKey: $,
            blockedMessage: F,
            consentButtonLabel: B,
            featureList: I,
            variant: A = "default"
        }) => {
            let P = (0, p.default)(`(max-width: ${h.default.Large}px)`),
                z = (0, l.useRef)(null),
                [U, O] = (0, l.useState)(!1),
                D = (0, v.useInView)(z, {
                    once: !0
                }),
                q = (0, j.useReducedMotion)(),
                H = (0, l.useRef)({
                    total: 0,
                    progress: 0
                }),
                V = I && I.length > 0,
                W = !V && C?.url;
            (0, l.useEffect)(() => {
                T || O(!1)
            }, [D]);
            let E = () => {
                    O(!0)
                },
                G = (0, r.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0 pointer-events-none": U && !q && D && M?.src
                }),
                K = (0, r.default)("relative", {
                    "py-10 lg:py-24": "gdc2026" === A,
                    "lg:py-14": V,
                    "lg:py-24": !V && "default" === R && (!a || "16:9" === a) && "gdc2026" !== A,
                    "lg:py-80": !V && "large" === R && (!a || "16:9" === a),
                    "lg:py-40": !V && "large" === R && "1:1" === a,
                    "dark bg-gray-900 overflow-hidden": m,
                    "bg-gray-100 dark:bg-black": !m && V,
                    "bg-white dark:bg-black": !m && !V
                }),
                Y = (0, r.default)("grid grid-flow-row grid-cols-12 place-items-center gap-4", {
                    "p-4": "gdc2026" === A,
                    "lg:grid-flow-col": !0,
                    "lg:container": !a || "16:9" === a
                }),
                Z = (0, r.default)("font-nohemi! text-gray-900 dark:text-gray-100 whitespace-pre-line", {
                    "loco-text-heading-md!": "gdc2026" === A
                }),
                J = (0, r.default)("relative w-full rounded-lg", {
                    "aspect-square": "1:1" === a,
                    "aspect-video": "16:9" === a,
                    "overflow-hidden": !C?.url
                }),
                Q = (0, r.default)("relative col-span-12 flex h-full flex-col w-full items-center lg:items-start", {
                    "lg:col-span-8": "gdc2026" === A,
                    "lg:col-span-6": "gdc2026" !== A,
                    "lg:col-start-1": "left" === L,
                    "lg:col-start-5": "right" === L && "gdc2026" === A,
                    "lg:col-start-7": "right" === L && "gdc2026" !== A,
                    "order-first": !V || !P,
                    "order-last": V && P
                }),
                X = (0, r.default)("relative col-span-12 px-5 text-center lg:pb-0 lg:text-left", {
                    "lg:col-span-4": "gdc2026" === A,
                    "lg:col-span-5": "gdc2026" !== A,
                    "pb-6": !(V && P),
                    "py-6": V && P,
                    "lg:col-start-9": "left" === L && "gdc2026" === A,
                    "lg:col-start-8": "left" === L && "gdc2026" !== A && (!a || "16:9" === a),
                    "lg:col-start-1": "right" === L && (!a || "16:9" === a),
                    "lg:col-start-2": "right" === L && "1:1" === a,
                    "order-first": V && P
                }),
                ee = e => {
                    let t = H.current.progress / H.current.total * 100 || 0;
                    (0, n.pushVideoEvent)({
                        name: e,
                        videoDuration: H.current.total,
                        videoProgress: Number(t)
                    })
                };
            return (0, t.jsxs)("section", {
                className: K,
                children: [m && (0, t.jsx)(i.default, {
                    src: N.src,
                    alt: N.alt,
                    fill: !0,
                    className: "blur-2xl brightness-[0.2]"
                }), (0, t.jsxs)("div", {
                    className: Y,
                    ref: z,
                    children: [V ? (0, t.jsx)("div", {
                        className: Q,
                        children: (0, t.jsx)(x, {
                            features: I
                        })
                    }) : W ? (0, t.jsx)("div", {
                        className: Q,
                        children: (0, t.jsx)("div", {
                            className: J,
                            children: (0, t.jsx)(b.default, {
                                url: C?.url || "",
                                title: C?.title ?? "",
                                blockedMessage: F,
                                consentButtonLabel: B
                            })
                        })
                    }) : (0, t.jsxs)("div", {
                        className: Q,
                        children: [(0, t.jsxs)("div", {
                            className: J,
                            children: [D && !q && M?.src && (0, t.jsx)(w, {
                                url: M.src,
                                playing: U,
                                loop: !!T,
                                muted: T,
                                playsinline: T,
                                width: "100%",
                                height: "100%",
                                onDuration: e => H.current.total = e,
                                onProgress: e => {
                                    H.current.progress = 10 * e.played
                                },
                                className: "absolute top-0 left-0 [&>video]:object-cover",
                                onReady: () => {
                                    T && O(!0)
                                },
                                controls: !T,
                                onPlay: () => ee("video_play"),
                                onPause: () => ee("video_pause"),
                                config: {
                                    hlsOptions: {
                                        maxMaxBufferLength: 1,
                                        startLevel: 1
                                    }
                                }
                            }), N.src && (0, t.jsxs)("div", {
                                className: G,
                                onClick: E,
                                children: [M?.src && !T && (0, t.jsx)(k.default, {
                                    handleIsPlaying: E,
                                    className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: S,
                                    "data-link-location": $ || s.trackingLocation.fullWidthBlockAction,
                                    "data-link-id": `${$||s.trackingLocation.fullWidthBlockAction}-video-play`
                                }), (0, t.jsx)(i.default, {
                                    src: N.src,
                                    alt: N.alt,
                                    placeholder: "blur",
                                    blurDataURL: N.placeholder,
                                    fill: !0
                                })]
                            })]
                        }), N.caption && (0, t.jsx)("div", {
                            className: "loco-text-body-sm-medium z-10 mt-3 mb-6 text-gray-600 lg:mb-3",
                            children: N.caption
                        })]
                    }), (0, t.jsxs)("div", {
                        className: X,
                        children: [y && (0, t.jsx)(d, {
                            className: "text-gray-900 dark:text-gray-100",
                            children: y
                        }), (0, t.jsx)(u.default, {
                            tag: "h2",
                            className: Z,
                            children: _
                        }), (0, t.jsx)(f.default, {
                            className: "mb-10 text-gray-900 dark:text-gray-100",
                            children: g
                        }), (0, t.jsx)(o, {
                            className: "justify-center lg:justify-normal",
                            children: e.length > 0 && e.map((e, l) => (0, t.jsx)(c.default, {
                                variant: 0 === l ? "primary" : "secondary",
                                outlined: 0 === l,
                                size: P ? "small" : "medium",
                                rounded: !0,
                                hasArrow: !0,
                                href: e.href,
                                target: e.target,
                                "data-link-location": $ ?? s.trackingLocation.fullWidthBlockAction,
                                "data-link-id": `${$??s.trackingLocation.fullWidthBlockAction}-action-${l}`,
                                children: e.label
                            }, `full-width-block-action-${l}`))
                        })]
                    })]
                })]
            })
        };
    var L = e.i(775041),
        R = e.i(779712),
        _ = e.i(869324);
    e.s(["default", 0, ({
        actions: e,
        backgroundImage: r,
        description: i,
        eyebrow: s,
        image: n,
        mediaAspectRatio: d,
        mediaPosition: c,
        size: o,
        variant: u,
        title: f,
        theme: m,
        youtubeVideo: g,
        brandfolderVideo: x,
        buttonLabel: h,
        videoInline: p,
        blockKey: b,
        isHidden: v,
        consent: j,
        featureList: y,
        productCategoryFilter: k
    }) => {
        let [w] = (0, l.useContext)(L.FiltersContext);
        if (w.categories && w.categories.length > 0 && 1 === w.categories.findIndex(({
                _id: e
            }) => e === w.selectedCategory) && null != w.selectedSubcategory) return null;
        let {
            subcategories: C,
            productCatalogItems: M
        } = w.categories.find(({
            _id: e
        }) => e === w.selectedCategory) || {}, T = null != w.selectedSubcategory ? (C || []).find(({
            _id: e
        }) => e === w.selectedSubcategory) : null, S = !k || k.categories?.find(e => e._id === w.selectedCategory) != null && (null == T || !k.subcategories || k.subcategories.some(({
            _id: e
        }) => e === w.selectedSubcategory)), $ = e?.map(({
            title: e,
            link: t
        }) => {
            let l = t?.linkReference?.target === "_blank" ? "_blank" : "_self";
            return {
                label: e,
                href: t?.linkReference?.href.current || "/",
                target: l
            }
        }), F = y?.map((e, t) => {
            let l;
            return {
                eyebrow: e.eyebrow || "",
                title: e.title || "",
                description: e.description || "",
                action: e.action ? (l = e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self", {
                    label: e.action.title || "",
                    href: e.action.link?.linkReference?.href.current || "#",
                    target: l
                }) : {
                    label: "",
                    href: "#"
                },
                icon: e.icon?.asset?.url || "",
                onCardClick: e => ((e, t) => {
                    if (!t && y?.[e]) {
                        let t = y[e];
                        (0, _.default)({
                            event: "userEvent",
                            event_name: "navigation_click",
                            properties: {
                                navigation_click_text: t.title || "",
                                link_type: "feature list item",
                                form_name: t.title || "",
                                form_id: `list-item-${e}`,
                                block_title: f
                            }
                        })
                    }
                })(t, e)
            }
        });
        return (0, t.jsx)(t.Fragment, {
            children: !v && S && (0, t.jsx)("section", {
                className: "dark" === m ? "dark" : "",
                children: (0, t.jsx)(N, {
                    actions: $,
                    aspectRatio: "16:9" === d ? "16:9" : "1:1" === d ? "1:1" : void 0,
                    backgroundImage: r,
                    description: (0, t.jsx)(a.PortableText, {
                        value: i
                    }),
                    eyebrow: s,
                    image: {
                        src: (0, R.urlForImage)(n?.file?.asset?.url || "")?.auto("format")?.url() || "",
                        placeholder: n?.file?.asset.metadata?.lqip || "",
                        alt: n?.alt || "",
                        caption: n?.caption || ""
                    },
                    mediaPosition: "right" === c ? "right" : "left" === c ? "left" : void 0,
                    size: "large" === o ? "large" : "default" === o ? "default" : void 0,
                    variant: "gdc2026" === u ? "gdc2026" : "default" === u ? "default" : void 0,
                    title: f,
                    youtubeVideo: g,
                    brandfolderVideo: {
                        src: x?.muxHLSURL || ""
                    },
                    videoInline: p,
                    buttonLabel: h,
                    blockKey: b,
                    blockedMessage: j?.blockedMessage,
                    consentButtonLabel: j?.consentButtonLabel || "",
                    featureList: F
                })
            })
        })
    }], 649042)
}, 447533, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(166511),
        a = e.i(722978),
        r = e.i(999721),
        i = e.i(481392),
        s = e.i(71871),
        n = e.i(783078);
    let d = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        c = ({
            containerRef: e,
            lqip: l
        }) => {
            let a = (0, r.useRef)(null),
                i = (0, r.useRef)(null),
                s = "pointer-events-none absolute inset-0 hidden h-full w-full opacity-80 blur-2xl lg:block [will-change:filter]";
            return ((0, r.useEffect)(() => {
                let t, l = a.current,
                    r = e.current;
                if (!l || !r) return;
                let s = l.getContext("2d");
                if (!s) return;
                let n = r.querySelector("video"),
                    d = () => {
                        n && r.contains(n) || (n = r.querySelector("video"));
                        let e = n,
                            l = i.current;
                        if (e) {
                            e.crossOrigin || (e.crossOrigin = "anonymous");
                            try {
                                s.drawImage(e, 0, 0, 32, 32), l && (l.style.transform = `scale(${1.01+1e-6*Math.random()})`)
                            } catch {}
                        }
                        t = requestAnimationFrame(d)
                    };
                return t = requestAnimationFrame(d), () => cancelAnimationFrame(t)
            }, [e, l]), l) ? (0, t.jsx)("div", {
                className: s,
                style: {
                    backgroundImage: `url(${l})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transform: "scale(1.05)"
                },
                "aria-hidden": "true"
            }) : (0, t.jsx)("div", {
                ref: i,
                className: s,
                "aria-hidden": "true",
                children: (0, t.jsx)("canvas", {
                    ref: a,
                    width: 32,
                    height: 32,
                    className: "h-full w-full"
                })
            })
        };
    var o = e.i(185462),
        u = e.i(224601);
    let f = ({
        children: e,
        className: r = "",
        size: i = "default",
        variant: s = "default",
        image: n,
        keyFigures: d
    }) => {
        let c = (0, a.clsx)("relative grid grid-cols-12", r, {
                dark: !!n
            }),
            u = (0, a.clsx)("relative col-span-12 mx-auto lg:container", {
                "lg:py-32 lg:pb-10": "gdc2026" !== s && "default" === i,
                "lg:py-16 lg:pb-5": "gdc2026" !== s && "slim" === i,
                "py-0 lg:py-20 max-w-[82rem]": "gdc2026" === s
            }),
            f = (0, a.clsx)({
                "flex flex-col lg:flex-row-reverse": "gdc2026" !== s,
                "grid grid-cols-12 gap-6": "gdc2026" === s
            });
        return (0, t.jsxs)("section", {
            className: c,
            children: [n && (0, t.jsx)(l.default, {
                src: n.src,
                alt: n.alt,
                fill: !0,
                className: "object-cover",
                quality: 100,
                sizes: "100vw"
            }), (0, t.jsxs)("div", {
                className: u,
                children: [(0, t.jsx)("div", {
                    className: f,
                    children: e
                }), d && d.length > 0 && (0, t.jsx)("div", {
                    className: "mx-6 lg:mx-0",
                    children: (0, t.jsx)(o.default, {
                        keyFigures: d,
                        nested: !0
                    })
                })]
            })]
        })
    };
    f.Actions = ({
        children: e,
        variant: l = "default"
    }) => (0, t.jsx)("div", {
        className: "gdc2026" === l ? "flex flex-col items-center lg:items-start gap-3 pb-3.5 lg:pb-16 lg:flex-row" : "flex flex-col items-start gap-3 pb-3.5 xl:flex-row",
        children: e
    }), f.AlternateActions = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
        children: e
    }), f.Body = ({
        children: e,
        variant: l = "default"
    }) => (0, t.jsx)("div", {
        className: "gdc2026" === l ? "loco-text-body-lg" : "loco-text-body-lg mb-6",
        children: e
    }), f.Content = ({
        children: e,
        variant: l = "default"
    }) => {
        let r = (0, a.default)({
            "flex-1 pt-10 pr-8": "gdc2026" !== l,
            "w-full col-span-12 lg:col-span-4 px-4 pb-6 gap-6 items-center lg:gap-9 lg:items-start lg:px-0 lg:pb-0 lg:pt-8 flex flex-col order-2 lg:order-1 text-center lg:text-left": "gdc2026" === l
        });
        return (0, t.jsx)("div", {
            className: r,
            style: "gdc2026" === l ? {
                gap: "2.3125rem"
            } : void 0,
            children: e
        })
    }, f.Overline = ({
        children: e,
        className: l
    }) => {
        let r = (0, a.default)("loco-caption-lg-semibold mb-3 text-gray-500 dark:text-gray-300", l);
        return (0, t.jsx)("div", {
            className: r,
            children: e
        })
    }, f.Title = ({
        children: e,
        variant: l = "default"
    }) => {
        let r = (0, a.default)("!font-nohemi text-black dark:text-white", {
            "loco-text-heading-md mb-6": "gdc2026" !== l,
            "loco-text-heading-4xl break-normal lg:[word-spacing:100vw]": "gdc2026" === l
        });
        return (0, t.jsx)("h1", {
            className: r,
            children: e
        })
    }, f.Pricing = ({
        data: e = [],
        onSelectionChange: l,
        selectedKey: a
    }) => {
        let s = (0, r.useMemo)(() => e.find(e => e.key === a), [e, a]);
        return (0, r.useEffect)(() => {
            let t = !a || !s,
                r = e?.[0]?.key;
            t && l && r && l(r)
        }, [e, a, l, s]), (0, t.jsx)(t.Fragment, {
            children: !!e.length && (0, t.jsx)("div", {
                className: "mb-6 flex",
                children: (0, t.jsxs)("div", {
                    children: [(0, t.jsxs)("div", {
                        className: "mb-2",
                        children: [(0, t.jsx)("span", {
                            className: "loco-text-heading-xs mr-1 font-semibold",
                            children: s?.price
                        }), (0, t.jsx)("span", {
                            className: "loco-text-body-sm",
                            children: s?.suffixPrice
                        })]
                    }), e.length > 1 && (0, t.jsx)(i.default, {
                        selectedKey: a,
                        onSelectionChange: l,
                        children: e.map(({
                            key: e,
                            label: l
                        }) => (0, t.jsx)(i.default.Item, {
                            children: l
                        }, e))
                    })]
                })
            })
        })
    }, f.Media = ({
        media: e,
        className: i = "",
        variant: s = "default"
    }) => {
        let {
            image: o,
            video: u
        } = e || {}, [f, m] = (0, r.useState)(!1), g = (0, r.useRef)(null), x = "gdc2026" === s ? "object-cover" : "object-contain", h = (0, a.default)("relative flex grow", {
            "m-4 h-full": "gdc2026" !== s,
            "w-full h-[22rem] lg:h-full lg:w-auto lg:m-4": "gdc2026" === s
        }, i), p = (0, a.default)("relative h-full w-full overflow-hidden", {
            "rounded-3xl": "gdc2026" !== s,
            "lg:rounded-3xl": "gdc2026" === s
        }), b = (0, a.default)("flex items-center", {
            "flex-1 justify-center lg:justify-start": "gdc2026" !== s,
            "w-full col-span-12 lg:col-span-8 justify-center order-1 lg:order-2": "gdc2026" === s
        }), v = (e, r) => o?.asset.url ? (0, t.jsx)(l.default, {
            src: o.asset.url,
            alt: e,
            fill: !0,
            className: (0, a.default)("absolute h-full", x, r),
            sizes: `(min-width: ${n.default.Large}px) 33vw, (min-width: ${n.default.Medium}px) 50vw, 100vw`,
            placeholder: o.asset.metadata?.lqip ? "blur" : "empty",
            blurDataURL: o.asset.metadata?.lqip || void 0
        }) : null;
        return (0, t.jsx)("div", {
            className: b,
            children: (o || u) && (0, t.jsxs)("div", {
                className: h,
                children: [(0, t.jsx)(c, {
                    containerRef: g,
                    lqip: f ? void 0 : o?.asset?.metadata?.lqip
                }), (0, t.jsxs)("div", {
                    ref: g,
                    className: p,
                    children: [o?.asset.url && !u && v("Hero image", void 0), u && o?.asset.url && !f && v("Video thumbnail", "z-10"), u && (0, t.jsx)("div", {
                        className: "h-full w-full self-center",
                        children: (0, t.jsx)(d, {
                            url: u?.muxHLSURL || "",
                            playing: !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: (0, a.default)("absolute top-0 h-full", {
                                "[&>video]:object-cover": "gdc2026" === s,
                                "[&>video]:object-contain": "gdc2026" !== s
                            }),
                            onReady: () => m(!0),
                            onBuffer: () => m(!1),
                            onBufferEnd: () => m(!0)
                        })
                    })]
                })]
            })
        })
    }, f.YouTubeVideo = ({
        className: e,
        title: l,
        url: r,
        autoplay: i,
        blockedMessage: s,
        consentButtonLabel: n
    }) => {
        let d = (0, a.default)("relative flex grow md:h-auto md:content-center md:mx-8 md:rounded-3xl md:overflow-hidden", e);
        return r && l ? (0, t.jsx)("div", {
            className: "flex flex-1",
            children: (0, t.jsx)("div", {
                className: d,
                children: (0, t.jsx)(u.default, {
                    autoplay: i,
                    title: l,
                    url: r,
                    blockedMessage: s,
                    consentButtonLabel: n
                })
            })
        }) : null
    }, e.s(["default", 0, f], 447533)
}, 893171, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(999721),
        a = e.i(447533),
        r = e.i(749583),
        i = e.i(595388),
        s = e.i(115219);
    let n = ({
        linkText: e,
        separatorText: l,
        actionLinks: a
    }) => {
        let r = window.navigator.userAgent,
            i = null;
        if (-1 !== r.indexOf("Win") ? i = "windows" : -1 !== r.indexOf("Mac") ? i = "mac" : -1 !== r.indexOf("Linux") && (i = "linux"), !i) return null;
        let s = [];
        if (a && a.length > 0)
            for (let e of a) e.os.toLowerCase() !== i.toLowerCase() && s.push({
                label: e.os,
                url: e.href
            });
        return a ? (0, t.jsxs)("div", {
            className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
            children: [e, " ", s.map((e, a) => (0, t.jsxs)("span", {
                children: [a > 0 ? (0, t.jsxs)("span", {
                    className: "text-gray-600",
                    children: [" ", l, " "]
                }) : "", (0, t.jsx)("a", {
                    href: e.url,
                    className: "text-blue underline",
                    children: e.label
                })]
            }, e.label))]
        }) : null
    };
    var d = e.i(433519),
        c = e.i(829150),
        o = e.i(434438),
        u = e.i(200241);
    e.s(["default", 0, ({
        eyebrow: e,
        title: f,
        description: m,
        actions: g = [],
        media: x,
        backgroundImage: h,
        size: p,
        variant: b,
        keyFigures: v,
        theme: j,
        youtubeVideo: y,
        isHidden: k,
        showAlterativeOSLinks: w,
        alternativeOSLinkSettings: N
    }) => {
        let L, R = -1 !== (L = window.navigator.userAgent).indexOf("Win") ? "Windows" : -1 !== L.indexOf("Mac") ? "Mac" : -1 !== L.indexOf("Linux") ? "Linux" : "Unknown",
            _ = (0, l.useRef)(null),
            {
                state: C
            } = (0, d.default)(),
            M = (0, u.useLocale)(),
            T = {
                ...C,
                locale: (0, o.default)(M)
            },
            {
                mapFormActions: S
            } = (0, s.useFormModal)(g),
            $ = (0, l.useMemo)(() => S(g) || [], [g, S]),
            F = h?.asset?.url ? {
                src: h.asset.url,
                alt: "Hero background image"
            } : void 0,
            B = (0, l.useMemo)(() => (v?.data ?? []).map(e => e?.value?.text ? {
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
            }), [v]);
        (0, l.useEffect)(() => {
            if (!_.current) {
                let e = document.createElement("a");
                e.style.display = "none", document.body.appendChild(e), _.current = e
            }
            return () => {
                _.current && document.body.contains(_.current) && document.body.removeChild(_.current)
            }
        }, []);
        let I = b ?? void 0,
            A = (e, a, r) => {
                let i = a?.form;
                if (!i) return null;
                let s = {
                    ...i.form,
                    ...i.webinarFormParametersContent,
                    extraFields: i.extraFields
                };
                return (0, t.jsx)(l.default.Fragment, {
                    children: i.renderModal({
                        label: e.title,
                        form: s
                    })
                }, `hero-action-form-${e.title}-${r}`)
            },
            P = e => {
                let t = e.link?.linkReference?.href?.current,
                    l = t ? (0, c.default)(t, T, e.extendLink) : t,
                    a = e.secondaryLink?.linkReference?.href?.current,
                    r = e.link?.linkReference?.target || "_self",
                    s = i.locales.find(e => window.location.pathname === `/${e}` || window.location.pathname.startsWith(`/${e}/`)) ?? "en";
                l && (l.endsWith(".exe") || l.endsWith(".dmg") ? _.current && (_.current.href = l, _.current.download = "", _.current.target = r, _.current.click()) : "_blank" === r ? window.open(l, "_blank") : window.location.href = l), a && setTimeout(() => {
                    let e = a.replace(/^\//, "");
                    window.location.href = `/${s}/${e}`
                }, 1e3), e?.callback && e.callback()
            },
            z = g?.filter(e => !e.operatingSystem || e.operatingSystem === R) || [],
            U = g?.filter(e => !!e.operatingSystem && "Unknown" !== e.operatingSystem) || [];
        return (0, t.jsx)(t.Fragment, {
            children: !k && (0, t.jsx)("section", {
                className: "dark" === j ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "dark:bg-black",
                    children: (0, t.jsxs)(a.default, {
                        image: F,
                        size: "slim" === p ? "slim" : "default" === p ? "default" : void 0,
                        variant: I,
                        keyFigures: B,
                        children: [x && (0, t.jsx)(a.default.Media, {
                            media: x,
                            variant: I
                        }), !x && y && (0, t.jsx)(a.default.YouTubeVideo, {
                            autoplay: !0,
                            url: y?.url,
                            title: y?.title,
                            blockedMessage: y?.consent?.blockedMessage,
                            consentButtonLabel: y?.consent?.consentButtonLabel || ""
                        }), (0, t.jsxs)(a.default.Content, {
                            variant: I,
                            children: [(0, t.jsx)(a.default.Overline, {
                                children: e
                            }), (0, t.jsx)(a.default.Title, {
                                variant: I,
                                children: f
                            }), (0, t.jsx)(a.default.Body, {
                                variant: I,
                                children: m
                            }), (0, t.jsx)("div", {
                                className: "xl:hidden",
                                children: (0, t.jsx)(a.default.Actions, {
                                    variant: I,
                                    children: z.map((e, a) => {
                                        let i = $[a],
                                            s = e.link?.linkReference?.href?.current || "",
                                            d = (0, c.default)(s, T, e.extendLink),
                                            o = 0 === a,
                                            u = s.endsWith(".exe") || s.endsWith(".dmg"),
                                            f = !!e.secondaryLink?.linkReference?.href?.current,
                                            m = d && !u && !f;
                                        return i?.form ? A(e, i, a) : (0, t.jsxs)(l.default.Fragment, {
                                            children: [o && (0, t.jsx)(r.default, {
                                                size: "medium",
                                                variant: e.buttonType,
                                                rounded: !0,
                                                ...m && {
                                                    href: d
                                                },
                                                onPress: () => P(e),
                                                hasArrow: !0,
                                                "data-link-location": "HeroBlock",
                                                "data-link-id": `HeroBlock-action-${a}`,
                                                children: e.title
                                            }), o && w && (0, t.jsx)(n, {
                                                linkText: N?.linkText ?? "Download for",
                                                separatorText: N?.separatorText ?? "or",
                                                actionLinks: U.map(e => ({
                                                    os: e.operatingSystem,
                                                    href: e.link?.linkReference?.href?.current || "#"
                                                }))
                                            }), !o && (0, t.jsx)("div", {
                                                className: "ml-1 flex flex-col gap-4",
                                                children: (0, t.jsx)(r.default, {
                                                    size: "medium",
                                                    variant: e.buttonType,
                                                    rounded: !0,
                                                    ...m && {
                                                        href: d
                                                    },
                                                    onPress: () => P(e),
                                                    hasArrow: !0,
                                                    "data-link-location": "HeroBlock",
                                                    "data-link-id": `HeroBlock-action-${a}`,
                                                    children: e.title
                                                })
                                            })]
                                        }, e.link?.linkReference?.title || a)
                                    })
                                })
                            }), (0, t.jsxs)("div", {
                                className: "hidden xl:block",
                                children: [(0, t.jsx)(a.default.Actions, {
                                    variant: I,
                                    children: z.map((e, l) => {
                                        let a = $[l],
                                            i = e.link?.linkReference?.href?.current || "",
                                            s = (0, c.default)(i, T, e.extendLink),
                                            n = i.endsWith(".exe") || i.endsWith(".dmg"),
                                            d = !!e.secondaryLink?.linkReference?.href?.current,
                                            o = s && !n && !d;
                                        return a?.form ? A(e, a, l) : (0, t.jsx)(r.default, {
                                            size: "medium",
                                            variant: e.buttonType,
                                            rounded: !0,
                                            ...o && {
                                                href: s
                                            },
                                            onPress: () => P(e),
                                            hasArrow: !0,
                                            "data-link-location": "HeroBlock",
                                            "data-link-id": `HeroBlock-action-${l}`,
                                            children: e.title
                                        }, e.link?.linkReference?.title || l)
                                    })
                                }), w && z[0] && (0, t.jsx)(n, {
                                    linkText: N?.linkText ?? "Download for",
                                    separatorText: N?.separatorText ?? "or",
                                    actionLinks: U.map(e => ({
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
}, 5124, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(999721),
        a = e.i(71871),
        r = e.i(153348),
        i = e.i(955429),
        s = e.i(722978),
        n = e.i(803695),
        d = e.i(166511),
        c = e.i(131564),
        o = e.i(998569),
        u = e.i(749583);
    let f = (0, a.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        m = ({
            slide: e,
            index: a,
            isActive: i,
            preferReducedMotion: n,
            isVisuallyActive: c,
            clickCallback: o,
            blurredBackground: u
        }) => {
            let m = (0, l.useRef)(null),
                [g, x] = (0, l.useState)(!1),
                h = (0, r.useInView)(m, {
                    once: !0
                }),
                p = (0, s.default)("relative aspect-video overflow-hidden rounded-2xl duration-500", {
                    "opacity-30": !c && !i
                }),
                b = (0, s.default)("absolute h-full w-full transition-opacity duration-500 z-[-1]"),
                v = (0, s.default)("absolute h-full w-full transition-opacity duration-500", {
                    "opacity-0": g && i && !n && h && e.video.src,
                    "object-contain": u
                });
            return (0, t.jsxs)("div", {
                className: p,
                ref: m,
                onClick: () => {
                    !i && o && o()
                },
                children: [e.mention && (0, t.jsx)("div", {
                    className: "absolute bottom-0 left-0 z-10 p-3 opacity-70",
                    children: e.mention
                }), e.image && e.image.src && !u ? (0, t.jsx)(d.default, {
                    src: e.image.src,
                    placeholder: "blur",
                    blurDataURL: e.image.placeholder,
                    fill: !0,
                    alt: e.image.alt,
                    className: v
                }) : (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(d.default, {
                        src: e.image.placeholder,
                        placeholder: "blur",
                        blurDataURL: e.image.placeholder,
                        fill: !0,
                        alt: e.image.alt,
                        className: b
                    }), (0, t.jsx)(d.default, {
                        src: e.image.src,
                        placeholder: "blur",
                        blurDataURL: e.image.placeholder,
                        fill: !0,
                        alt: e.image.alt,
                        className: v
                    })]
                }), h && !n && i && e.video.src && (0, t.jsx)(f, {
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
                }, `slide-video-${a}`)]
            }, `carousel-text-visual-${a}`)
        },
        g = ({
            title: e,
            action: a,
            slides: r,
            blurredBackground: s
        }) => {
            let [d, f] = (0, l.useState)(void 0), [g, x] = (0, l.useState)(void 0), [h, p] = (0, l.useState)(1), [b, v] = (0, l.useState)(0), [j, y] = (0, l.useState)(0), k = (0, l.useRef)(null), w = (0, l.useRef)(null), N = (0, l.useRef)(null), L = (0, i.useReducedMotion)();
            (0, l.useEffect)(() => {
                w.current && N.current && (f(w.current), x(N.current))
            }, [w, N]);
            let R = (0, l.useCallback)((e, t) => {
                    p(t + 1), y(t)
                }, []),
                _ = (0, l.useCallback)(e => {
                    v(e)
                }, []),
                C = (0, l.useCallback)(() => {
                    w.current && N.current && w.current.slickPrev()
                }, []),
                M = (0, l.useCallback)(() => {
                    w.current && N.current && w.current.slickNext()
                }, []),
                T = {
                    dots: !1,
                    infinite: !0,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1
                },
                S = (0, l.useMemo)(() => r.map((e, l) => (0, t.jsx)("div", {
                    children: (0, t.jsxs)("div", {
                        className: "max-w-lg",
                        children: [(0, t.jsx)("h3", {
                            className: "loco-text-heading-xs",
                            children: e.title
                        }), e.author && (0, t.jsx)("p", {
                            className: "loco-text-body mt-6 opacity-70",
                            children: e.author
                        }), (0, t.jsx)("p", {
                            className: "loco-text-body mt-6 opacity-70",
                            children: e.description
                        }), e.action && e.action?.href && e.action?.title && (0, t.jsx)("div", {
                            className: "mt-6 mb-6",
                            children: (0, t.jsx)(u.default, {
                                href: e.action.href,
                                target: e.action.target,
                                rounded: !0,
                                outlined: !0,
                                hasArrow: !0,
                                children: e.action?.title
                            })
                        })]
                    })
                }, l)), [r]),
                $ = (0, l.useMemo)(() => r.map((e, l) => (0, t.jsx)(m, {
                    slide: e,
                    index: l,
                    isActive: b === l,
                    isVisuallyActive: j === l,
                    preferReducedMotion: L,
                    clickCallback: M,
                    blurredBackground: s
                }, l)), [r, b, j, L, M]);
            return (0, t.jsx)("section", {
                className: "dark bg-black py-12",
                children: (0, t.jsxs)("div", {
                    className: "container md:max-w-none lg:pr-0",
                    children: [e && (0, t.jsx)(c.default, {
                        title: e,
                        actions: a ? [a] : []
                    }), (0, t.jsxs)("div", {
                        className: "relative mt-8 lg:grid lg:grid-cols-12 lg:gap-2",
                        ref: k,
                        children: [(0, t.jsx)("div", {
                            className: "relative col-start-4 col-end-13 row-start-1",
                            children: (0, t.jsx)("div", {
                                className: "overflow-hidden rounded-2xl lg:rounded-tr-none lg:rounded-br-none",
                                children: (0, t.jsx)("div", {
                                    className: "lg:grid lg:grid-cols-9 lg:gap-2",
                                    children: (0, t.jsx)("div", {
                                        className: "lg:col-span-8",
                                        children: (0, t.jsx)(n.default, {
                                            ...T,
                                            asNavFor: d,
                                            useTransform: !1,
                                            ref: N,
                                            className: "carousel-text-visual_visual m-0",
                                            children: $
                                        })
                                    })
                                })
                            })
                        }), (0, t.jsxs)("div", {
                            className: "relative col-start-1 col-end-4 row-start-1 pb-10",
                            children: [r.length > 1 && (0, t.jsx)("span", {
                                className: "loco-text-body-md text-blue mx-2.5 mt-2.5 mb-4 block lg:mt-0",
                                children: `${h<10?"0":""}${h} / ${r.length<10?"0":""}${r.length}`
                            }), (0, t.jsx)(n.default, {
                                className: "carousel-text-visual_text mt-4 lg:mt-0",
                                ...T,
                                draggable: !1,
                                asNavFor: g,
                                beforeChange: R,
                                afterChange: _,
                                fade: !0,
                                ref: w,
                                children: S
                            }), r.length > 1 && (0, t.jsxs)("div", {
                                className: "absolute bottom-0 left-3 flex gap-2",
                                children: [(0, t.jsx)(o.default, {
                                    direction: "left",
                                    onPress: C,
                                    ariaLabel: "Prev",
                                    variant: "primary"
                                }), (0, t.jsx)(o.default, {
                                    onPress: M,
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
        title: l,
        action: a,
        slides: r,
        slidesBlog: i,
        slidesActionLabel: s = "View Post",
        isHidden: n
    }) => {
        let d = e => {
                let t, l = (e, t) => e?.length > t ? `${e.substring(0,t)}...` : e;
                return {
                    title: e.title || "",
                    author: e.author || "",
                    description: e.description || l(e?.seo?.teaserText, 250) || l(e?.seo?.description, 250) || "",
                    mention: e.mention || "",
                    image: {
                        src: e.image?.file?.asset.url || e.featuredImage?.file?.asset.url || "",
                        placeholder: e.image?.file?.asset.metadata?.lqip || e.featuredImage?.file?.asset.metadata?.lqip || "",
                        alt: e.image?.alt || e.featuredImage?.alt || ""
                    },
                    video: {
                        src: e.brandfolder?.muxHLSURL || ""
                    },
                    action: e.action ? (t = {
                        ...e.action,
                        title: e.action.title || ""
                    }, {
                        title: t?.title || "",
                        href: t?.link?.linkReference?.href.current || "",
                        target: t?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }) : e?.pageUrl ? {
                        title: s,
                        href: e?.pageUrl?.link?.href?.current || "",
                        target: "_self"
                    } : null
                }
            },
            c = r?.map(d) || [],
            o = i?.map(d) || [],
            u = c.length > 0 ? c : o.length > 0 ? o : [];
        return (0, t.jsx)(t.Fragment, {
            children: !n && (0, t.jsx)(g, {
                title: l || "",
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
    var t = e.i(210139),
        l = e.i(166511),
        a = e.i(595388),
        r = e.i(722978);
    let i = ({
        logos: e
    }) => (0, t.jsx)("div", {
        className: "container my-8",
        children: (0, t.jsx)("div", {
            className: "grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5",
            children: e?.map((e, i) => {
                let s = (0, r.default)("rounded bg-gray-100 p-4  md:p-8", {
                    "hover:bg-white transition-all ease-in-out duration-1000": e?.action?.href
                });
                return (0, t.jsxs)("div", {
                    children: [!e.action?.href && (0, t.jsx)("div", {
                        className: s,
                        children: (0, t.jsx)("div", {
                            className: "relative aspect-square w-full",
                            children: (0, t.jsx)(l.default, {
                                src: e.src || "",
                                alt: e.alt || "",
                                placeholder: "blur",
                                blurDataURL: e.placeholder,
                                className: "rounded-lg object-contain",
                                fill: !0
                            })
                        })
                    }), e.action?.href && (0, t.jsx)(a.Link, {
                        href: e.action.href,
                        target: e.action.target || "_self",
                        children: (0, t.jsx)("div", {
                            className: s,
                            children: (0, t.jsx)("div", {
                                className: "relative aspect-square w-full",
                                children: (0, t.jsx)(l.default, {
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
                }, `logos-bank-logo-${i}`)
            })
        })
    });
    e.s(["default", 0, ({
        logos: e,
        isHidden: l
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
        return (0, t.jsx)(t.Fragment, {
            children: !l && (0, t.jsx)(i, {
                logos: a
            })
        })
    }], 314669)
}, 583877, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(200241),
        a = e.i(722978),
        r = e.i(999721);
    let i = () => (0, t.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M2.5 8H13.5M8 2.5V13.5",
                stroke: "#4C4C4C",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        }),
        s = () => (0, t.jsx)("svg", {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M2.5 8H13.5",
                stroke: "black",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        }),
        n = ({
            date: e,
            dayOfWeek: l,
            defaultOpen: a,
            activities: n,
            footer: d
        }) => {
            let [c, o] = (0, r.useState)(a);
            return (0, t.jsxs)("details", {
                open: c,
                onToggle: e => {
                    o(e.target.open)
                },
                className: "rounded-lg bg-gray-100 dark:bg-gray-800",
                children: [(0, t.jsxs)("summary", {
                    className: "flex cursor-pointer items-center p-6",
                    children: [(0, t.jsxs)("div", {
                        className: "flex w-full flex-col md:flex-row md:items-center",
                        children: [(0, t.jsx)("div", {
                            className: "loco-text-body text-gray-600 md:w-[19rem] dark:text-gray-400",
                            children: e
                        }), (0, t.jsx)("div", {
                            className: "loco-text-body-lg-medium text-gray-800 capitalize dark:text-gray-200",
                            children: l
                        })]
                    }), (0, t.jsx)("div", {
                        children: c ? (0, t.jsx)(s, {}) : (0, t.jsx)(i, {})
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col px-6 pb-6 md:ml-[19rem]",
                    children: [n?.map(e => {
                        let {
                            title: l,
                            startTime: a,
                            endTime: r
                        } = e, i = r ? `${a} - ${r}` : a;
                        return (0, t.jsxs)("div", {
                            className: "flex flex-col gap-2 pt-6 first:mt-4 first:border-t first:border-gray-300 sm:flex-row dark:first:border-gray-700",
                            children: [i && (0, t.jsx)("div", {
                                className: "loco-text-body-sm w-36 shrink-0 text-gray-600 dark:text-gray-400",
                                children: i
                            }), l && (0, t.jsx)("div", {
                                className: "loco-text-body-md text-black dark:text-white",
                                children: l
                            })]
                        }, `agenda-event-${l}-${a}`)
                    }), (0, t.jsx)("div", {
                        className: "loco-text-body-sm pt-6 text-gray-600 italic dark:text-gray-400",
                        children: d
                    })]
                })]
            })
        },
        d = ({
            theme: e,
            agendaCards: l
        }) => {
            let r = (0, a.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: r,
                children: (0, t.jsx)("div", {
                    className: "bg-white py-10 md:py-20 dark:bg-gray-900",
                    children: (0, t.jsx)("div", {
                        className: "container flex flex-col gap-2",
                        children: l.map((e, l) => (0, t.jsx)(n, {
                            defaultOpen: 0 === l,
                            ...e
                        }, `agenda-card-${e.date}-${e.dayOfWeek}-${l}`))
                    })
                })
            })
        };
    e.s(["default", 0, ({
        theme: e = "light",
        isHidden: a,
        agendaCards: r
    }) => {
        let i = (0, l.useLocale)();
        return a ? null : (0, t.jsx)(d, {
            theme: "dark" === e ? "dark" : "light",
            agendaCards: r?.map(e => ({
                date: e?.date ? new Intl.DateTimeFormat(i, {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }).format(new Date(e.date)) : "",
                dayOfWeek: e?.date ? new Intl.DateTimeFormat(i, {
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
    var t = e.i(210139),
        l = e.i(153348),
        a = e.i(955429),
        r = e.i(376936),
        i = e.i(192207),
        s = e.i(526826),
        n = e.i(999721),
        d = e.i(722978),
        c = e.i(71871),
        o = e.i(166511),
        u = e.i(783078),
        f = e.i(749583),
        m = e.i(186114),
        g = e.i(430215),
        x = e.i(195051),
        h = e.i(766930);
    let p = ({
            provider: h,
            title: p,
            description: b,
            action: v,
            image: j,
            video: y,
            videoInline: k = !1,
            buttonLabel: w = "Play video",
            blockedMessage: N,
            consentButtonLabel: L,
            heading: R = "h3"
        }) => {
            let _ = (0, g.default)(`(min-width: ${u.default.Medium}px)`),
                C = (0, n.useRef)(null),
                [M, T] = (0, n.useState)(!1),
                S = (0, l.useInView)(C),
                $ = (0, a.useReducedMotion)(),
                F = null;
            "youtube" === h ? F = (0, c.default)(() => e.A(269100), {
                loadableGenerated: {
                    modules: [346003]
                },
                ssr: !1
            }) : "brandfolder" === h && (F = (0, c.default)(() => e.A(410979), {
                loadableGenerated: {
                    modules: [942019]
                },
                ssr: !1
            }));
            let B = {};
            "brandfolder" === h && (B = {
                hlsOptions: {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                }
            });
            let {
                scrollYProgress: I
            } = (0, r.useScroll)({
                target: C,
                offset: ["start end", "end end"]
            }), A = (0, i.useTransform)(I, [0, 1], ["60%", "100%"]), P = (0, i.useTransform)(I, [0, 1], [1.75, 1]), z = (0, i.useTransform)(I, [0, 1], ["brightness(50%)", "brightness(100%)"]), U = () => {
                k && "brandfolder" === h && T(!0)
            }, O = () => {
                T(!0)
            }, D = (0, d.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": M && !$ && S && y?.src
            });
            return (0, t.jsxs)("div", {
                ref: C,
                className: "flex flex-col gap-4 border-t border-gray-300 p-6 md:flex-row dark:border-gray-800 dark:bg-black [&_.consent]:md:justify-start [&_.consent>div.text]:md:w-11/12",
                children: [_ && (0, t.jsx)("div", {
                    className: "md:w-[50%]",
                    children: (0, t.jsxs)(s.m.div, {
                        style: {
                            width: A,
                            filter: z
                        },
                        className: "relative aspect-video overflow-hidden rounded-lg",
                        children: [(0, t.jsxs)(s.m.div, {
                            style: {
                                scale: P
                            },
                            className: "relative h-full w-full",
                            children: [y && (0, t.jsx)(t.Fragment, {
                                children: S && !$ && y?.src && F && (0, t.jsx)(F, {
                                    url: y.src,
                                    playing: M,
                                    loop: k && "brandfolder" === h,
                                    muted: k && "brandfolder" === h,
                                    playsinline: k && "brandfolder" === h,
                                    width: "100%",
                                    height: "100%",
                                    className: "[&>video]:object-cover",
                                    onReady: U,
                                    onPlay: O,
                                    controls: !k || "brandfolder" !== h,
                                    config: B
                                })
                            }), j && (0, t.jsxs)("div", {
                                className: D,
                                onClick: O,
                                children: [y?.src && (!k || "brandfolder" !== h) && (0, t.jsx)(m.default, {
                                    handleIsPlaying: O,
                                    className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: w
                                }), (0, t.jsx)(o.default, {
                                    src: j.src,
                                    placeholder: "blur",
                                    blurDataURL: j.placeholder,
                                    fill: !0,
                                    alt: j.alt ?? "",
                                    className: "cover absolute object-cover brightness-75",
                                    sizes: `(min-width: ${u.default.Large}px) 33vw, (min-width: ${u.default.Medium}px) 50vw, 100vw`
                                })]
                            })]
                        }), y?.src?.includes("youtube.com") && (0, t.jsx)(x.default, {
                            blockedMessage: N,
                            consentButtonLabel: L
                        })]
                    })
                }), !_ && (0, t.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-lg md:hidden",
                    children: [(0, t.jsxs)("div", {
                        className: "relative h-full w-full",
                        children: [y && (0, t.jsx)(t.Fragment, {
                            children: S && !$ && y?.src && F && (0, t.jsx)(F, {
                                url: y.src,
                                playing: M,
                                loop: k && "brandfolder" === h,
                                muted: k && "brandfolder" === h,
                                playsinline: k && "brandfolder" === h,
                                width: "100%",
                                height: "100%",
                                className: "[&>video]:object-cover",
                                onReady: U,
                                onPlay: O,
                                controls: !k && "brandfolder" !== h,
                                config: B
                            })
                        }), j && (0, t.jsxs)("div", {
                            className: D,
                            onClick: O,
                            children: [y?.src && (!k || "brandfolder" !== h) && (0, t.jsx)(m.default, {
                                handleIsPlaying: O,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: w
                            }), (0, t.jsx)(o.default, {
                                src: j.src,
                                placeholder: "blur",
                                blurDataURL: j.placeholder,
                                fill: !0,
                                alt: j.alt ?? "",
                                className: "cover absolute object-cover brightness-75",
                                sizes: `(min-width: ${u.default.Large}px) 33vw, (min-width: ${u.default.Medium}px) 50vw, 100vw`
                            })]
                        })]
                    }), y?.src?.includes("youtube.com") && (0, t.jsx)(x.default, {
                        blockedMessage: N,
                        consentButtonLabel: L
                    })]
                }), (0, t.jsx)("div", {
                    className: "md:ml-5 md:w-[25%]",
                    children: (0, t.jsx)(R, {
                        className: "loco-text-body-lg-medium",
                        children: p
                    })
                }), (0, t.jsx)("div", {
                    className: "flex grow flex-col md:w-[50%]",
                    children: (0, t.jsxs)("div", {
                        className: "flex shrink-0 grow flex-col justify-between",
                        children: [(0, t.jsx)("div", {
                            className: "loco-text-body text-gray-700 dark:text-gray-400",
                            children: b
                        }), (0, t.jsx)("div", {
                            className: "mt-8",
                            children: (0, t.jsx)(f.default, {
                                href: v?.href,
                                target: v?.target,
                                outlined: !0,
                                rounded: !0,
                                hasArrow: !0,
                                children: v?.label
                            })
                        })]
                    })
                })]
            })
        },
        b = ({
            theme: e = "light",
            features: l = [],
            featuresHeading: a = "h3"
        }) => {
            let r = (0, n.useRef)(null),
                i = (0, d.default)("w-full", {
                    dark: "dark" === e
                });
            return (0, t.jsx)(h.default, {
                children: (0, t.jsx)("div", {
                    ref: r,
                    className: i,
                    children: l && l.map((e, l) => (0, t.jsx)(p, {
                        ...e,
                        heading: a
                    }, l))
                })
            })
        },
        v = e => {
            let t = null;
            return "brandfolder" === e.provider ? t = "brandfolder" : "youtube" === e.provider && (t = "youtube"), {
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
                provider: t,
                buttonLabel: e.buttonLabel,
                blockedMessage: e.consent?.blockedMessage,
                consentButtonLabel: e.consent?.consentButtonLabel
            }
        };
    e.s(["default", 0, ({
        theme: e,
        features: l,
        isHidden: a,
        featuresHeading: r
    }) => {
        let i = l?.map(v);
        return (0, t.jsx)(t.Fragment, {
            children: !a && (0, t.jsx)(b, {
                theme: "dark" === e ? "dark" : "light",
                features: i,
                featuresHeading: "h2" === r || "h4" === r ? r : "h3"
            })
        })
    }], 277965)
}, 449758, e => {
    "use strict";
    var t = e.i(210139),
        l = e.i(999721),
        a = e.i(722990),
        r = e.i(164163),
        i = e.i(326388);
    e.s(["default", 0, ({
        title: e,
        layout: s,
        cardVariant: n,
        scroll: d,
        theme: c,
        cardsHeading: o,
        cards: u,
        isHidden: f
    }) => {
        let {
            appendCommerceData: m,
            appendCommerceDataToPortableText: g,
            currency: x
        } = (0, i.default)(), h = (0, l.useMemo)(() => u?.map(e => ({
            type: e._type,
            title: m(e.title, e.productCatalogItem) || "",
            description: m(e.description, e.productCatalogItem) || "",
            richText: (0, t.jsx)(a.PortableText, {
                value: g(e.richText, e.productCatalogItem)
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
                let t = e.link?.linkReference?.target === "_blank" ? "_blank" : "_self";
                return {
                    title: e.title || "",
                    href: e.link?.linkReference?.href?.current || "",
                    target: t
                }
            })
        })), [u, m, g]);
        return (0, t.jsx)(t.Fragment, {
            children: !f && (0, t.jsx)("section", {
                className: `${"dark"===c?"dark":""} overflow-hidden`,
                children: (0, t.jsx)(r.default, {
                    layout: "two-cards" === s || "three-cards" === s || "four-cards" === s ? s : "four-cards",
                    cardVariant: "default" === n || "padded" === n || "transparent" === n ? n : "default",
                    scroll: d,
                    title: e || "",
                    cardsHeading: ["h2", "h3", "h4", "div"].includes(o) ? o : void 0,
                    cards: h
                })
            })
        })
    }], 449758)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "747da642-642e-52cc-a4a9-69484588ae81")
    } catch (e) {}
}();
//# debugId=747da642-642e-52cc-a4a9-69484588ae81