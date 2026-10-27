;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "5cc6a677-aeba-d4c9-bf6f-f85d0aa69bbb")
    } catch (e) {}
}();
(() => {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 32382, e => {
        var t = e.i(167358),
            l = e.i(495056),
            a = e.i(712598),
            r = e.i(127873),
            s = e.i(722978);
        let i = ({
                overline: e,
                variant: l = "default"
            }) => {
                let a = "products" === l;
                return (0, t.jsx)("div", {
                    className: (0, s.U)("loco-caption-lg-semibold mb-2 lg:mb-3", {
                        "text-white": a,
                        "text-gray-700 dark:text-gray-300": !a
                    }),
                    "data-sentry-component": "CalloutOverline",
                    "data-sentry-source-file": "CalloutOverline.tsx",
                    children: e
                })
            },
            n = ({
                title: e
            }) => (0, t.jsx)("div", {
                className: "loco-text-heading-md !font-nohemi mb-5 md:w-2/3 lg:mb-6",
                "data-sentry-component": "CalloutTitle",
                "data-sentry-source-file": "CalloutTitle.tsx",
                children: e
            }),
            o = ({
                body: e,
                variant: l = "default"
            }) => (0, t.jsx)("div", {
                className: (0, s.U)("loco-text-body-lg mb-6 lg:mb-12", {
                    "md:w-2/3": "products" === l
                }),
                "data-sentry-component": "CalloutBody",
                "data-sentry-source-file": "CalloutBody.tsx",
                children: e
            });
        var c = e.i(749583);
        let d = ({
                actions: e,
                variant: a = "default"
            }) => {
                let r = "products" === a;
                return (0, t.jsx)("div", {
                    className: "flex flex-col flex-wrap items-start justify-start gap-y-4 md:flex-row md:gap-2",
                    "data-sentry-component": "CalloutAction",
                    "data-sentry-source-file": "CalloutAction.tsx",
                    children: e.map((e, a) => e.renderModal ? (0, t.jsx)(l.default.Fragment, {
                        children: e.renderModal()
                    }, a) : (0, t.jsx)(c.f, {
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
                let x = (0, s.U)("container relative grid col-span-12 py-8 lg:py-12 px-4 lg:px-16 rounded-xl overflow-hidden", {
                        dark: !!u
                    }, f),
                    g = "products" === m;
                return (0, t.jsx)("div", {
                    className: "bg-white py-16 dark:bg-black",
                    "data-sentry-component": "Callout",
                    "data-sentry-source-file": "Callout.tsx",
                    children: (0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsxs)("div", {
                            className: "relative grid grid-cols-12 overflow-hidden rounded-xl px-4 py-8 lg:px-16 lg:py-12",
                            children: [u && (0, t.jsx)(r.default, {
                                src: u.url,
                                alt: u.alt || "",
                                fill: !0,
                                className: (0, s.U)("scale-105 object-cover", {
                                    blur: !g
                                })
                            }), (0, t.jsxs)("div", {
                                className: x,
                                children: [(0, t.jsx)(i, {
                                    overline: e,
                                    variant: m,
                                    "data-sentry-element": "CalloutOverline",
                                    "data-sentry-source-file": "Callout.tsx"
                                }), (0, t.jsx)(n, {
                                    title: l,
                                    "data-sentry-element": "CalloutTitle",
                                    "data-sentry-source-file": "Callout.tsx"
                                }), (0, t.jsx)(o, {
                                    body: a,
                                    variant: m,
                                    "data-sentry-element": "CalloutBody",
                                    "data-sentry-source-file": "Callout.tsx"
                                }), (0, t.jsx)(d, {
                                    actions: c,
                                    variant: m,
                                    "data-sentry-element": "CalloutAction",
                                    "data-sentry-source-file": "Callout.tsx"
                                })]
                            })]
                        })
                    })
                })
            };
        var f = e.i(829150),
            m = e.i(433519),
            x = e.i(775041),
            g = e.i(115219);
        e.s(["f", 0, ({
            overline: e,
            title: r,
            body: s,
            actions: i,
            image: n,
            theme: o,
            isHidden: c,
            variant: d,
            productCatalogItem: h,
            productCategoryFilter: p
        }) => {
            let [y] = (0, l.useContext)(x.p), {
                state: b
            } = (0, m.U)(), v = {
                ...b,
                product: h?.productKey,
                variant: null
            }, {
                renderModal: j,
                extraFields: k
            } = (0, g.Y)(i), w = (0, l.useMemo)(() => i ? i.map(e => (e => {
                if (!e) return null;
                let t = !!e.form,
                    l = e.link?.linkReference?.href?.current,
                    a = t ? "" : l ? (0, f.f)(l, v, e.extendLink) : "";
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
                        renderModal: () => j({
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
            })(e)).filter(e => !!e) : [], [i, v, j, k]), {
                subcategories: N
            } = y.categories?.find(({
                _id: e
            }) => e === y.selectedCategory) || {}, L = null != y.selectedSubcategory ? (N || []).find(({
                _id: e
            }) => e === y.selectedSubcategory) : null, R = !p || p.categories?.find(e => e._id === y.selectedCategory) != null && (null == L || !p.subcategories || p.subcategories.some(({
                _id: e
            }) => e === y.selectedSubcategory)), C = n ? {
                url: n?.file?.asset.url || "",
                alt: n.alt
            } : void 0;
            return (0, t.jsx)(t.Fragment, {
                children: !c && R && (0, t.jsx)("section", {
                    className: "dark" === o ? "dark" : "",
                    children: (0, t.jsx)(u, {
                        overline: e,
                        title: r || "",
                        body: (0, t.jsx)(a.f, {
                            value: s
                        }),
                        actions: w,
                        image: C,
                        variant: d
                    })
                })
            })
        }], 32382)
    }, 449758, e => {
        var t = e.i(167358),
            l = e.i(495056),
            a = e.i(712598),
            r = e.i(164163),
            s = e.i(326388);
        e.s(["f", 0, ({
            title: e,
            layout: i,
            cardVariant: n,
            scroll: o,
            theme: c,
            cardsHeading: d,
            cards: u,
            isHidden: f
        }) => {
            let {
                appendCommerceData: m,
                appendCommerceDataToPortableText: x,
                currency: g
            } = (0, s.f)(), h = (0, l.useMemo)(() => u?.map(e => ({
                type: e._type,
                title: m(e.title, e.productCatalogItem) || "",
                description: m(e.description, e.productCatalogItem) || "",
                richText: (0, t.jsx)(a.f, {
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
                    let t = e.link?.linkReference?.target === "_blank" ? "_blank" : "_self";
                    return {
                        title: e.title || "",
                        href: e.link?.linkReference?.href?.current || "",
                        target: t
                    }
                })
            })), [u, m, x]);
            return (0, t.jsx)(t.Fragment, {
                children: !f && (0, t.jsx)("section", {
                    className: `${"dark"===c?"dark":""} overflow-hidden`,
                    children: (0, t.jsx)(r.f, {
                        layout: "two-cards" === i || "three-cards" === i || "four-cards" === i ? i : "four-cards",
                        cardVariant: "default" === n || "padded" === n || "transparent" === n ? n : "default",
                        scroll: o,
                        title: e || "",
                        cardsHeading: ["h2", "h3", "h4", "div"].includes(d) ? d : void 0,
                        cards: h
                    })
                })
            })
        }], 449758)
    }, 649042, 2062, e => {
        var t = e.i(167358),
            l = e.i(495056),
            a = e.i(712598),
            r = e.i(722978),
            s = e.i(127873),
            i = e.i(825610),
            n = e.i(387660);
        let o = ({
            children: e,
            tag: l = "div",
            className: a = ""
        }) => {
            let s = (0, r.U)("loco-caption-lg-semibold mb-4", a);
            return (0, t.jsx)(l, {
                className: s,
                "data-sentry-element": "Tag",
                "data-sentry-component": "Eyebrow",
                "data-sentry-source-file": "Eyebrow.tsx",
                children: e
            })
        };
        var c = e.i(749583);
        let d = ({
            children: e,
            className: l = "",
            orientation: a = "horizontal"
        }) => {
            let s = (0, r.U)("flex gap-2 flex-wrap", {
                "flex-col items-start": "vertical" === a
            }, l);
            return (0, t.jsx)("div", {
                className: s,
                "data-sentry-component": "ButtonGroup",
                "data-sentry-source-file": "ButtonGroup.tsx",
                children: e
            })
        };
        e.s(["f", 0, d], 2062);
        var u = e.i(14452),
            f = e.i(805518),
            m = e.i(997198),
            x = e.i(766930);
        let g = ({
            features: e,
            transitionTime: a = 8500
        }) => {
            let [r, s] = (0, l.useState)(0), i = (0, l.useRef)(null), n = (0, l.useRef)(null), [o, d] = (0, l.useState)(!1), [u, f] = (0, l.useState)(!1), g = (0, l.useRef)(null);
            (0, l.useEffect)(() => {
                e.forEach(e => {
                    e.icon && (new window.Image().src = e.icon, new window.Image().src = e.icon)
                })
            }, [e]), (0, l.useEffect)(() => {
                let e = new IntersectionObserver(([e]) => {
                    d(e.intersectionRatio >= .8)
                }, {
                    threshold: [0, .8, 1]
                });
                return n.current && e.observe(n.current), () => e.disconnect()
            }, []), (0, l.useEffect)(() => (i.current && clearTimeout(i.current), o && !u && (i.current = setTimeout(() => {
                s(t => (t + 1) % e.length)
            }, a)), () => {
                i.current && clearTimeout(i.current)
            }), [r, e.length, a, o, u]);
            let h = (0, l.useCallback)(t => {
                    let l = t === r;
                    s(t), f(!0);
                    let i = e[t];
                    i?.onCardClick && setTimeout(() => {
                        i.onCardClick?.(l)
                    }, 0), g.current && clearTimeout(g.current), g.current = setTimeout(() => {
                        f(!1)
                    }, a)
                }, [r, e, a]),
                p = (0, l.useCallback)((e, t) => {
                    ("Enter" === e.key || " " === e.key) && (e.preventDefault(), h(t))
                }, [h]);
            return (0, l.useEffect)(() => () => {
                g.current && clearTimeout(g.current)
            }, []), (0, t.jsx)(x.f, {
                "data-sentry-element": "FramerMotionLazy",
                "data-sentry-component": "FeatureList",
                "data-sentry-source-file": "FeatureList.tsx",
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
                            children: [e.icon && a && (0, t.jsx)(m.f, {
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
                            }), e.icon && a && (0, t.jsx)(m.f, {
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
                                children: [a && (0, t.jsx)(m.f, {
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
                                    children: (0, t.jsx)(m.f, {
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
                                }), a && (0, t.jsx)(m.f, {
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
                                }), a && (0, t.jsx)(m.f, {
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
                                    children: (0, t.jsx)(c.f, {
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
            y = e.i(224601),
            b = e.i(825455),
            v = e.i(717714),
            j = e.i(194485),
            k = e.i(186114);
        let w = (0, j.default)(() => e.A(685851), {
                loadableGenerated: {
                    modules: [204748]
                },
                ssr: !1
            }),
            N = ({
                actions: e = [],
                aspectRatio: a,
                backgroundImage: m = !1,
                description: x,
                eyebrow: j,
                image: N,
                mediaPosition: L = "right",
                size: R = "default",
                title: C,
                youtubeVideo: B,
                brandfolderVideo: U,
                videoInline: S = !1,
                buttonLabel: F = "Play Video",
                blockKey: T,
                blockedMessage: _,
                consentButtonLabel: A,
                featureList: M,
                variant: H = "default"
            }) => {
                let $ = (0, p.f)(`(max-width: ${h.f.Large}px)`),
                    z = (0, l.useRef)(null),
                    [I, P] = (0, l.useState)(!1),
                    O = (0, b.f)(z, {
                        once: !0
                    }),
                    V = (0, v.f)(),
                    q = (0, l.useRef)({
                        total: 0,
                        progress: 0
                    }),
                    W = M && M.length > 0,
                    D = !W && B?.url;
                (0, l.useEffect)(() => {
                    S || P(!1)
                }, [O]);
                let E = () => {
                        P(!0)
                    },
                    G = (0, r.U)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                        "opacity-0 pointer-events-none": I && !V && O && U?.src
                    }),
                    Y = (0, r.U)("relative", {
                        "py-10 lg:py-24": "gdc2026" === H,
                        "lg:py-14": W,
                        "lg:py-24": !W && "default" === R && (!a || "16:9" === a) && "gdc2026" !== H,
                        "lg:py-80": !W && "large" === R && (!a || "16:9" === a),
                        "lg:py-40": !W && "large" === R && "1:1" === a,
                        "dark bg-gray-900 overflow-hidden": m,
                        "bg-gray-100 dark:bg-black": !m && W,
                        "bg-white dark:bg-black": !m && !W
                    }),
                    K = (0, r.U)("grid grid-flow-row grid-cols-12 place-items-center gap-4", {
                        "p-4": "gdc2026" === H,
                        "lg:grid-flow-col": !0,
                        "lg:container": !a || "16:9" === a
                    }),
                    X = (0, r.U)("font-nohemi! text-gray-900 dark:text-gray-100 whitespace-pre-line", {
                        "loco-text-heading-md!": "gdc2026" === H
                    }),
                    J = (0, r.U)("relative w-full rounded-lg", {
                        "aspect-square": "1:1" === a,
                        "aspect-video": "16:9" === a,
                        "overflow-hidden": !B?.url
                    }),
                    Q = (0, r.U)("relative col-span-12 flex h-full flex-col w-full items-center lg:items-start", {
                        "lg:col-span-8": "gdc2026" === H,
                        "lg:col-span-6": "gdc2026" !== H,
                        "lg:col-start-1": "left" === L,
                        "lg:col-start-5": "right" === L && "gdc2026" === H,
                        "lg:col-start-7": "right" === L && "gdc2026" !== H,
                        "order-first": !W || !$,
                        "order-last": W && $
                    }),
                    Z = (0, r.U)("relative col-span-12 px-5 text-center lg:pb-0 lg:text-left", {
                        "lg:col-span-4": "gdc2026" === H,
                        "lg:col-span-5": "gdc2026" !== H,
                        "pb-6": !(W && $),
                        "py-6": W && $,
                        "lg:col-start-9": "left" === L && "gdc2026" === H,
                        "lg:col-start-8": "left" === L && "gdc2026" !== H && (!a || "16:9" === a),
                        "lg:col-start-1": "right" === L && (!a || "16:9" === a),
                        "lg:col-start-2": "right" === L && "1:1" === a,
                        "order-first": W && $
                    }),
                    ee = e => {
                        let t = q.current.progress / q.current.total * 100 || 0;
                        (0, n.f)({
                            name: e,
                            videoDuration: q.current.total,
                            videoProgress: Number(t)
                        })
                    };
                return (0, t.jsxs)("section", {
                    className: Y,
                    "data-sentry-component": "FullWidthBlock",
                    "data-sentry-source-file": "FullWidthBlock.tsx",
                    children: [m && (0, t.jsx)(s.default, {
                        src: N.src,
                        alt: N.alt,
                        fill: !0,
                        className: "blur-2xl brightness-[0.2]"
                    }), (0, t.jsxs)("div", {
                        className: K,
                        ref: z,
                        children: [W ? (0, t.jsx)("div", {
                            className: Q,
                            children: (0, t.jsx)(g, {
                                features: M
                            })
                        }) : D ? (0, t.jsx)("div", {
                            className: Q,
                            children: (0, t.jsx)("div", {
                                className: J,
                                children: (0, t.jsx)(y.f, {
                                    url: B?.url || "",
                                    title: B?.title ?? "",
                                    blockedMessage: _,
                                    consentButtonLabel: A
                                })
                            })
                        }) : (0, t.jsxs)("div", {
                            className: Q,
                            "data-sentry-component": "renderMedia",
                            "data-sentry-source-file": "FullWidthBlock.tsx",
                            children: [(0, t.jsxs)("div", {
                                className: J,
                                children: [O && !V && U?.src && (0, t.jsx)(w, {
                                    url: U.src,
                                    playing: I,
                                    loop: !!S,
                                    muted: S,
                                    playsinline: S,
                                    width: "100%",
                                    height: "100%",
                                    onDuration: e => q.current.total = e,
                                    onProgress: e => {
                                        q.current.progress = 10 * e.played
                                    },
                                    className: "absolute top-0 left-0 [&>video]:object-cover",
                                    onReady: () => {
                                        S && P(!0)
                                    },
                                    controls: !S,
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
                                    children: [U?.src && !S && (0, t.jsx)(k.f, {
                                        handleIsPlaying: E,
                                        className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                        label: F,
                                        "data-link-location": T || i.f.fullWidthBlockAction,
                                        "data-link-id": `${T||i.f.fullWidthBlockAction}-video-play`
                                    }), (0, t.jsx)(s.default, {
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
                            className: Z,
                            children: [j && (0, t.jsx)(o, {
                                className: "text-gray-900 dark:text-gray-100",
                                children: j
                            }), (0, t.jsx)(u.f, {
                                tag: "h2",
                                className: X,
                                "data-sentry-element": "Title",
                                "data-sentry-source-file": "FullWidthBlock.tsx",
                                children: C
                            }), (0, t.jsx)(f.f, {
                                className: "mb-10 text-gray-900 dark:text-gray-100",
                                "data-sentry-element": "Text",
                                "data-sentry-source-file": "FullWidthBlock.tsx",
                                children: x
                            }), (0, t.jsx)(d, {
                                className: "justify-center lg:justify-normal",
                                "data-sentry-element": "ButtonGroup",
                                "data-sentry-source-file": "FullWidthBlock.tsx",
                                children: e.length > 0 && e.map((e, l) => (0, t.jsx)(c.f, {
                                    variant: 0 === l ? "primary" : "secondary",
                                    outlined: 0 === l,
                                    size: $ ? "small" : "medium",
                                    rounded: !0,
                                    hasArrow: !0,
                                    href: e.href,
                                    target: e.target,
                                    "data-link-location": T ?? i.f.fullWidthBlockAction,
                                    "data-link-id": `${T??i.f.fullWidthBlockAction}-action-${l}`,
                                    "data-sentry-element": "Button",
                                    "data-sentry-component": "renderActions",
                                    "data-sentry-source-file": "FullWidthBlock.tsx",
                                    children: e.label
                                }, `full-width-block-action-${l}`))
                            })]
                        })]
                    })]
                })
            };
        var L = e.i(775041),
            R = e.i(779712),
            C = e.i(869324);
        e.s(["f", 0, ({
            actions: e,
            backgroundImage: r,
            description: s,
            eyebrow: i,
            image: n,
            mediaAspectRatio: o,
            mediaPosition: c,
            size: d,
            variant: u,
            title: f,
            theme: m,
            youtubeVideo: x,
            brandfolderVideo: g,
            buttonLabel: h,
            videoInline: p,
            blockKey: y,
            isHidden: b,
            consent: v,
            featureList: j,
            productCategoryFilter: k
        }) => {
            let [w] = (0, l.useContext)(L.p);
            if (w.categories && w.categories.length > 0 && 1 === w.categories.findIndex(({
                    _id: e
                }) => e === w.selectedCategory) && null != w.selectedSubcategory) return null;
            let {
                subcategories: B,
                productCatalogItems: U
            } = w.categories.find(({
                _id: e
            }) => e === w.selectedCategory) || {}, S = null != w.selectedSubcategory ? (B || []).find(({
                _id: e
            }) => e === w.selectedSubcategory) : null, F = !k || k.categories?.find(e => e._id === w.selectedCategory) != null && (null == S || !k.subcategories || k.subcategories.some(({
                _id: e
            }) => e === w.selectedSubcategory)), T = e?.map(({
                title: e,
                link: t
            }) => {
                let l = t?.linkReference?.target === "_blank" ? "_blank" : "_self";
                return {
                    label: e,
                    href: t?.linkReference?.href.current || "/",
                    target: l
                }
            }), _ = j?.map((e, t) => {
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
                        if (!t && j?.[e]) {
                            let t = j[e];
                            (0, C.U)({
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
                children: !b && F && (0, t.jsx)("section", {
                    className: "dark" === m ? "dark" : "",
                    children: (0, t.jsx)(N, {
                        actions: T,
                        aspectRatio: "16:9" === o ? "16:9" : "1:1" === o ? "1:1" : void 0,
                        backgroundImage: r,
                        description: (0, t.jsx)(a.f, {
                            value: s
                        }),
                        eyebrow: i,
                        image: {
                            src: (0, R.f)(n?.file?.asset?.url || "")?.auto("format")?.url() || "",
                            placeholder: n?.file?.asset.metadata?.lqip || "",
                            alt: n?.alt || "",
                            caption: n?.caption || ""
                        },
                        mediaPosition: "right" === c ? "right" : "left" === c ? "left" : void 0,
                        size: "large" === d ? "large" : "default" === d ? "default" : void 0,
                        variant: "gdc2026" === u ? "gdc2026" : "default" === u ? "default" : void 0,
                        title: f,
                        youtubeVideo: x,
                        brandfolderVideo: {
                            src: g?.muxHLSURL || ""
                        },
                        videoInline: p,
                        buttonLabel: h,
                        blockKey: y,
                        blockedMessage: v?.blockedMessage,
                        consentButtonLabel: v?.consentButtonLabel || "",
                        featureList: _
                    })
                })
            })
        }], 649042)
    }, 893171, e => {
        var t = e.i(167358),
            l = e.i(495056),
            a = e.i(447533),
            r = e.i(749583),
            s = e.i(115219);
        let i = ({
            linkText: e,
            separatorText: l,
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
            return a ? (0, t.jsxs)("div", {
                className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
                "data-sentry-component": "HeroAlternativeOSLinks",
                "data-sentry-source-file": "HeroAlternativeOSLinks.tsx",
                children: [e, " ", i.map((e, a) => (0, t.jsxs)("span", {
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
        var n = e.i(433519),
            o = e.i(829150),
            c = e.i(434438),
            d = e.i(81052);
        e.s(["f", 0, ({
            eyebrow: e,
            title: u,
            description: f,
            actions: m = [],
            media: x,
            backgroundImage: g,
            size: h,
            variant: p,
            keyFigures: y,
            theme: b,
            youtubeVideo: v,
            isHidden: j,
            showAlterativeOSLinks: k,
            alternativeOSLinkSettings: w
        }) => {
            let N, L = -1 !== (N = window.navigator.userAgent).indexOf("Win") ? "Windows" : -1 !== N.indexOf("Mac") ? "Mac" : -1 !== N.indexOf("Linux") ? "Linux" : "Unknown",
                R = (0, l.useRef)(null),
                {
                    state: C
                } = (0, n.U)(),
                B = (0, d.X)(),
                U = {
                    ...C,
                    locale: (0, c.U)(B)
                },
                {
                    mapFormActions: S
                } = (0, s.Y)(m),
                F = (0, l.useMemo)(() => S(m) || [], [m, S]),
                T = g?.asset?.url ? {
                    src: g.asset.url,
                    alt: "Hero background image"
                } : void 0,
                _ = (0, l.useMemo)(() => (y?.data ?? []).map(e => e?.value?.text ? {
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
                }), [y]);
            (0, l.useEffect)(() => {
                if (!R.current) {
                    let e = document.createElement("a");
                    e.style.display = "none", document.body.appendChild(e), R.current = e
                }
                return () => {
                    R.current && document.body.contains(R.current) && document.body.removeChild(R.current)
                }
            }, []);
            let A = p ?? void 0,
                M = (e, a, r) => {
                    let s = a?.form;
                    if (!s) return null;
                    let i = {
                        ...s.form,
                        ...s.webinarFormParametersContent,
                        extraFields: s.extraFields
                    };
                    return (0, t.jsx)(l.default.Fragment, {
                        children: s.renderModal({
                            label: e.title,
                            form: i
                        })
                    }, `hero-action-form-${e.title}-${r}`)
                },
                H = e => {
                    let t = e.link?.linkReference?.href?.current,
                        l = t ? (0, o.f)(t, U, e.extendLink) : t,
                        a = e.secondaryLink?.linkReference?.href?.current,
                        r = e.link?.linkReference?.target || "_self";
                    l && (l.endsWith(".exe") || l.endsWith(".dmg") ? R.current && (R.current.href = l, R.current.download = "", R.current.target = r, R.current.click()) : "_blank" === r ? window.open(l, "_blank") : window.location.href = l), a && setTimeout(() => {
                        let e = a.replace(/^\//, "");
                        window.location.href = `/${B}/${e}`
                    }, 1e3), e?.callback && e.callback()
                },
                $ = m?.filter(e => !e.operatingSystem || e.operatingSystem === L) || [],
                z = m?.filter(e => !!e.operatingSystem && "Unknown" !== e.operatingSystem) || [];
            return (0, t.jsx)(t.Fragment, {
                children: !j && (0, t.jsx)("section", {
                    className: "dark" === b ? "dark" : "",
                    children: (0, t.jsx)("div", {
                        className: "dark:bg-black",
                        children: (0, t.jsxs)(a.f, {
                            image: T,
                            size: "slim" === h ? "slim" : "default" === h ? "default" : void 0,
                            variant: A,
                            keyFigures: _,
                            children: [x && (0, t.jsx)(a.f.Media, {
                                media: x,
                                variant: A
                            }), !x && v && (0, t.jsx)(a.f.YouTubeVideo, {
                                autoplay: !0,
                                url: v?.url,
                                title: v?.title,
                                blockedMessage: v?.consent?.blockedMessage,
                                consentButtonLabel: v?.consent?.consentButtonLabel || ""
                            }), (0, t.jsxs)(a.f.Content, {
                                variant: A,
                                children: [(0, t.jsx)(a.f.Overline, {
                                    children: e
                                }), (0, t.jsx)(a.f.Title, {
                                    variant: A,
                                    children: u
                                }), (0, t.jsx)(a.f.Body, {
                                    variant: A,
                                    children: f
                                }), (0, t.jsx)("div", {
                                    className: "xl:hidden",
                                    children: (0, t.jsx)(a.f.Actions, {
                                        variant: A,
                                        children: $.map((e, a) => {
                                            let s = F[a],
                                                n = e.link?.linkReference?.href?.current || "",
                                                c = (0, o.f)(n, U, e.extendLink),
                                                d = 0 === a,
                                                u = n.endsWith(".exe") || n.endsWith(".dmg"),
                                                f = !!e.secondaryLink?.linkReference?.href?.current,
                                                m = c && !u && !f;
                                            return s?.form ? M(e, s, a) : (0, t.jsxs)(l.default.Fragment, {
                                                children: [d && (0, t.jsx)(r.f, {
                                                    size: "medium",
                                                    variant: e.buttonType,
                                                    rounded: !0,
                                                    ...m && {
                                                        href: c
                                                    },
                                                    onPress: () => H(e),
                                                    hasArrow: !0,
                                                    "data-link-location": "HeroBlock",
                                                    "data-link-id": `HeroBlock-action-${a}`,
                                                    children: e.title
                                                }), d && k && (0, t.jsx)(i, {
                                                    linkText: w?.linkText ?? "Download for",
                                                    separatorText: w?.separatorText ?? "or",
                                                    actionLinks: z.map(e => ({
                                                        os: e.operatingSystem,
                                                        href: e.link?.linkReference?.href?.current || "#"
                                                    }))
                                                }), !d && (0, t.jsx)("div", {
                                                    className: "ml-1 flex flex-col gap-4",
                                                    children: (0, t.jsx)(r.f, {
                                                        size: "medium",
                                                        variant: e.buttonType,
                                                        rounded: !0,
                                                        ...m && {
                                                            href: c
                                                        },
                                                        onPress: () => H(e),
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
                                    children: [(0, t.jsx)(a.f.Actions, {
                                        variant: A,
                                        children: $.map((e, l) => {
                                            let a = F[l],
                                                s = e.link?.linkReference?.href?.current || "",
                                                i = (0, o.f)(s, U, e.extendLink),
                                                n = s.endsWith(".exe") || s.endsWith(".dmg"),
                                                c = !!e.secondaryLink?.linkReference?.href?.current,
                                                d = i && !n && !c;
                                            return a?.form ? M(e, a, l) : (0, t.jsx)(r.f, {
                                                size: "medium",
                                                variant: e.buttonType,
                                                rounded: !0,
                                                ...d && {
                                                    href: i
                                                },
                                                onPress: () => H(e),
                                                hasArrow: !0,
                                                "data-link-location": "HeroBlock",
                                                "data-link-id": `HeroBlock-action-${l}`,
                                                children: e.title
                                            }, e.link?.linkReference?.title || l)
                                        })
                                    }), k && $[0] && (0, t.jsx)(i, {
                                        linkText: w?.linkText ?? "Download for",
                                        separatorText: w?.separatorText ?? "or",
                                        actionLinks: z.map(e => ({
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
    }, 277965, e => {
        var t = e.i(167358),
            l = e.i(825455),
            a = e.i(717714),
            r = e.i(279272),
            s = e.i(506326),
            i = e.i(997198),
            n = e.i(495056),
            o = e.i(722978),
            c = e.i(194485),
            d = e.i(127873),
            u = e.i(783078),
            f = e.i(749583),
            m = e.i(186114),
            x = e.i(430215),
            g = e.i(195051),
            h = e.i(766930);
        let p = ({
                provider: h,
                title: p,
                description: y,
                action: b,
                image: v,
                video: j,
                videoInline: k = !1,
                buttonLabel: w = "Play video",
                blockedMessage: N,
                consentButtonLabel: L,
                heading: R = "h3"
            }) => {
                let C = (0, x.f)(`(min-width: ${u.f.Medium}px)`),
                    B = (0, n.useRef)(null),
                    [U, S] = (0, n.useState)(!1),
                    F = (0, l.f)(B),
                    T = (0, a.f)(),
                    _ = null;
                "youtube" === h ? _ = (0, c.default)(() => e.A(333682), {
                    loadableGenerated: {
                        modules: [202084]
                    },
                    ssr: !1
                }) : "brandfolder" === h && (_ = (0, c.default)(() => e.A(685851), {
                    loadableGenerated: {
                        modules: [204748]
                    },
                    ssr: !1
                }));
                let A = {};
                "brandfolder" === h && (A = {
                    hlsOptions: {
                        maxMaxBufferLength: 1,
                        qualityStartLevel: 1
                    }
                });
                let {
                    scrollYProgress: M
                } = (0, r.f)({
                    target: B,
                    offset: ["start end", "end end"]
                }), H = (0, s.f)(M, [0, 1], ["60%", "100%"]), $ = (0, s.f)(M, [0, 1], [1.75, 1]), z = (0, s.f)(M, [0, 1], ["brightness(50%)", "brightness(100%)"]), I = () => {
                    k && "brandfolder" === h && S(!0)
                }, P = () => {
                    S(!0)
                }, O = (0, o.U)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0 pointer-events-none": U && !T && F && j?.src
                });
                return (0, t.jsxs)("div", {
                    ref: B,
                    className: "flex flex-col gap-4 border-t border-gray-300 p-6 md:flex-row dark:border-gray-800 dark:bg-black [&_.consent]:md:justify-start [&_.consent>div.text]:md:w-11/12",
                    "data-sentry-component": "Feature",
                    "data-sentry-source-file": "AnimatedFeaturesList.tsx",
                    children: [C && (0, t.jsx)("div", {
                        className: "md:w-[50%]",
                        children: (0, t.jsxs)(i.f, {
                            style: {
                                width: H,
                                filter: z
                            },
                            className: "relative aspect-video overflow-hidden rounded-lg",
                            children: [(0, t.jsxs)(i.f, {
                                style: {
                                    scale: $
                                },
                                className: "relative h-full w-full",
                                children: [j && (0, t.jsx)(t.Fragment, {
                                    children: F && !T && j?.src && _ && (0, t.jsx)(_, {
                                        url: j.src,
                                        playing: U,
                                        loop: k && "brandfolder" === h,
                                        muted: k && "brandfolder" === h,
                                        playsinline: k && "brandfolder" === h,
                                        width: "100%",
                                        height: "100%",
                                        className: "[&>video]:object-cover",
                                        onReady: I,
                                        onPlay: P,
                                        controls: !k || "brandfolder" !== h,
                                        config: A
                                    })
                                }), v && (0, t.jsxs)("div", {
                                    className: O,
                                    onClick: P,
                                    children: [j?.src && (!k || "brandfolder" !== h) && (0, t.jsx)(m.f, {
                                        handleIsPlaying: P,
                                        className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                        label: w
                                    }), (0, t.jsx)(d.default, {
                                        src: v.src,
                                        placeholder: "blur",
                                        blurDataURL: v.placeholder,
                                        fill: !0,
                                        alt: v.alt ?? "",
                                        className: "cover absolute object-cover brightness-75",
                                        sizes: `(min-width: ${u.f.Large}px) 33vw, (min-width: ${u.f.Medium}px) 50vw, 100vw`
                                    })]
                                })]
                            }), ["youtube.com", "youtu.be"].some(e => j?.src?.includes(e)) && (0, t.jsx)(g.f, {
                                blockedMessage: N,
                                consentButtonLabel: L
                            })]
                        })
                    }), !C && (0, t.jsxs)("div", {
                        className: "relative aspect-video overflow-hidden rounded-lg md:hidden",
                        children: [(0, t.jsxs)("div", {
                            className: "relative h-full w-full",
                            children: [j && (0, t.jsx)(t.Fragment, {
                                children: F && !T && j?.src && _ && (0, t.jsx)(_, {
                                    url: j.src,
                                    playing: U,
                                    loop: k && "brandfolder" === h,
                                    muted: k && "brandfolder" === h,
                                    playsinline: k && "brandfolder" === h,
                                    width: "100%",
                                    height: "100%",
                                    className: "[&>video]:object-cover",
                                    onReady: I,
                                    onPlay: P,
                                    controls: !k && "brandfolder" !== h,
                                    config: A
                                })
                            }), v && (0, t.jsxs)("div", {
                                className: O,
                                onClick: P,
                                children: [j?.src && (!k || "brandfolder" !== h) && (0, t.jsx)(m.f, {
                                    handleIsPlaying: P,
                                    className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: w
                                }), (0, t.jsx)(d.default, {
                                    src: v.src,
                                    placeholder: "blur",
                                    blurDataURL: v.placeholder,
                                    fill: !0,
                                    alt: v.alt ?? "",
                                    className: "cover absolute object-cover brightness-75",
                                    sizes: `(min-width: ${u.f.Large}px) 33vw, (min-width: ${u.f.Medium}px) 50vw, 100vw`
                                })]
                            })]
                        }), ["youtube.com", "youtu.be"].some(e => j?.src?.includes(e)) && (0, t.jsx)(g.f, {
                            blockedMessage: N,
                            consentButtonLabel: L
                        })]
                    }), (0, t.jsx)("div", {
                        className: "md:ml-5 md:w-[25%]",
                        children: (0, t.jsx)(R, {
                            className: "loco-text-body-lg-medium",
                            "data-sentry-element": "TitleTag",
                            "data-sentry-source-file": "AnimatedFeaturesList.tsx",
                            children: p
                        })
                    }), (0, t.jsx)("div", {
                        className: "flex grow flex-col md:w-[50%]",
                        children: (0, t.jsxs)("div", {
                            className: "flex shrink-0 grow flex-col justify-between",
                            children: [(0, t.jsx)("div", {
                                className: "loco-text-body text-gray-700 dark:text-gray-400",
                                children: y
                            }), (0, t.jsx)("div", {
                                className: "mt-8",
                                children: (0, t.jsx)(f.f, {
                                    href: b?.href,
                                    target: b?.target,
                                    outlined: !0,
                                    rounded: !0,
                                    hasArrow: !0,
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "AnimatedFeaturesList.tsx",
                                    children: b?.label
                                })
                            })]
                        })
                    })]
                })
            },
            y = ({
                theme: e = "light",
                features: l = [],
                featuresHeading: a = "h3"
            }) => {
                let r = (0, n.useRef)(null),
                    s = (0, o.U)("w-full", {
                        dark: "dark" === e
                    });
                return (0, t.jsx)(h.f, {
                    "data-sentry-element": "FramerMotionLazy",
                    "data-sentry-component": "AnimatedFeaturesList",
                    "data-sentry-source-file": "AnimatedFeaturesList.tsx",
                    children: (0, t.jsx)("div", {
                        ref: r,
                        className: s,
                        children: l && l.map((e, l) => (0, t.jsx)(p, {
                            ...e,
                            heading: a
                        }, l))
                    })
                })
            },
            b = e => {
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
        e.s(["f", 0, ({
            theme: e,
            features: l,
            isHidden: a,
            featuresHeading: r
        }) => {
            let s = l?.map(b);
            return (0, t.jsx)(t.Fragment, {
                children: !a && (0, t.jsx)(y, {
                    theme: "dark" === e ? "dark" : "light",
                    features: s,
                    featuresHeading: "h2" === r || "h4" === r ? r : "h3"
                })
            })
        }], 277965)
    }, 81636, e => {
        var t = e.i(167358),
            l = e.i(722978),
            a = e.i(825455),
            r = e.i(717714),
            s = e.i(194485),
            i = e.i(127873),
            n = e.i(495056),
            o = e.i(998569),
            c = e.i(595388);
        let d = (0, s.default)(() => e.A(685851), {
                loadableGenerated: {
                    modules: [204748]
                },
                ssr: !1
            }),
            u = ({
                title: e,
                titleTag: l,
                description: a,
                action: r
            }) => {
                let [s, i] = (0, n.useState)(!1);
                return (0, t.jsxs)("div", {
                    className: "relative border-t border-solid border-gray-700",
                    "data-sentry-component": "Benefit",
                    "data-sentry-source-file": "Benefits.tsx",
                    children: [(0, t.jsxs)("div", {
                        className: "pt-2 pb-8 md:flex md:gap-2",
                        children: [(0, t.jsx)(l || "h2", {
                            className: "loco-text-heading-xs md:w-6/12",
                            "data-sentry-element": "TitleTag",
                            "data-sentry-source-file": "Benefits.tsx",
                            children: e
                        }), (0, t.jsxs)("div", {
                            className: "mt-4 flex justify-between gap-4 md:mt-0 md:w-6/12",
                            children: [(0, t.jsx)("p", {
                                className: "loco-text-body-sm max-w-md opacity-70",
                                children: a
                            }), (0, t.jsx)("div", {
                                className: "shrink-0 text-right",
                                children: (0, t.jsx)(o.f, {
                                    direction: "right",
                                    ariaLabel: r.label,
                                    variant: "secondary",
                                    isForcedHover: s,
                                    tag: "span",
                                    "data-sentry-element": "ArrowButton",
                                    "data-sentry-source-file": "Benefits.tsx"
                                })
                            })]
                        })]
                    }), (0, t.jsx)(c.L, {
                        className: "absolute top-0 left-0 z-10 h-full w-full",
                        href: r.href,
                        title: r.label,
                        onMouseOver: () => {
                            i(!0)
                        },
                        onMouseLeave: () => {
                            i(!1)
                        },
                        "data-sentry-element": "Link",
                        "data-sentry-source-file": "Benefits.tsx"
                    })]
                })
            },
            f = ({
                image: e,
                video: s
            }) => {
                let o = (0, n.useRef)(null),
                    [c, u] = (0, n.useState)(!1),
                    f = (0, a.f)(o),
                    m = (0, r.f)(),
                    x = (0, l.U)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                        "opacity-0": c && !m && f && s.src
                    });
                return (0, t.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-2xl",
                    ref: o,
                    "data-sentry-component": "Visual",
                    "data-sentry-source-file": "Benefits.tsx",
                    children: [(0, t.jsx)(i.default, {
                        src: e.src,
                        placeholder: "blur",
                        blurDataURL: e.placeholder,
                        fill: !0,
                        alt: e.alt ?? "",
                        className: x,
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "Benefits.tsx"
                    }), f && !m && s.src && (0, t.jsx)(d, {
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
            m = ({
                image: e,
                video: s
            }) => {
                let o = (0, n.useRef)(null),
                    [c, u] = (0, n.useState)(!1),
                    f = (0, a.f)(o),
                    m = (0, r.f)(),
                    x = (0, l.U)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                        "opacity-0": c && !m && f && s.src
                    });
                return (0, t.jsxs)("div", {
                    className: "pointer-events-none absolute top-0 left-0 h-full w-full object-cover opacity-30",
                    ref: o,
                    "data-sentry-component": "Background",
                    "data-sentry-source-file": "Benefits.tsx",
                    children: [(0, t.jsx)(i.default, {
                        src: e.src,
                        placeholder: "blur",
                        blurDataURL: e.placeholder,
                        fill: !0,
                        alt: e.alt ?? "",
                        className: x,
                        "data-sentry-element": "Image",
                        "data-sentry-source-file": "Benefits.tsx"
                    }), f && !m && s.src && (0, t.jsx)(d, {
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
                let n = (0, l.U)("relative bg-gray-100 px-4 pb-10 pt-8 lg:px-8 lg:pt-44", {
                    "dark bg-gray-900": !i || "dark" === i
                });
                return (0, t.jsxs)("div", {
                    className: n,
                    "data-sentry-component": "Benefits",
                    "data-sentry-source-file": "Benefits.tsx",
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
                        }), s && (0, t.jsx)("div", {
                            className: "col-start-1 col-end-13 row-start-3 mt-14 md:mt-[10rem] lg:col-start-5 lg:col-end-13",
                            children: (0, t.jsx)("div", {
                                className: "lg:grid lg:grid-cols-8 lg:gap-2",
                                children: (0, t.jsx)("div", {
                                    className: "lg:col-start-1 lg:col-end-9",
                                    children: s.map((e, l) => (0, t.jsx)(u, {
                                        ...e
                                    }, l))
                                })
                            })
                        })]
                    })]
                })
            };
        e.s(["f", 0, ({
            tagline: e,
            visual: l,
            background: a,
            benefits: r,
            isHidden: s,
            theme: i
        }) => (0, t.jsx)(t.Fragment, {
            children: !s && (0, t.jsx)(x, {
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
                theme: "dark" === i ? "dark" : "light"
            })
        })], 81636)
    }, 5124, e => {
        var t = e.i(167358),
            l = e.i(495056),
            a = e.i(194485),
            r = e.i(825455),
            s = e.i(717714),
            i = e.i(722978),
            n = e.i(162018),
            o = e.i(127873),
            c = e.i(131564),
            d = e.i(998569),
            u = e.i(749583);
        let f = (0, a.default)(() => e.A(685851), {
                loadableGenerated: {
                    modules: [204748]
                },
                ssr: !1
            }),
            m = ({
                slide: e,
                index: a,
                isActive: s,
                preferReducedMotion: n,
                isVisuallyActive: c,
                clickCallback: d,
                blurredBackground: u
            }) => {
                let m = (0, l.useRef)(null),
                    [x, g] = (0, l.useState)(!1),
                    h = (0, r.f)(m, {
                        once: !0
                    }),
                    p = (0, i.U)("relative aspect-video overflow-hidden rounded-2xl duration-500", {
                        "opacity-30": !c && !s
                    }),
                    y = (0, i.U)("absolute h-full w-full transition-opacity duration-500 z-[-1]"),
                    b = (0, i.U)("absolute h-full w-full transition-opacity duration-500", {
                        "opacity-0": x && s && !n && h && e.video.src,
                        "object-contain": u
                    });
                return (0, t.jsxs)("div", {
                    className: p,
                    ref: m,
                    onClick: () => {
                        !s && d && d()
                    },
                    "data-sentry-component": "VisualSlide",
                    "data-sentry-source-file": "CarouselTextVisual.tsx",
                    children: [e.mention && (0, t.jsx)("div", {
                        className: "absolute bottom-0 left-0 z-10 p-3 opacity-70",
                        children: e.mention
                    }), e.image && e.image.src && !u ? (0, t.jsx)(o.default, {
                        src: e.image.src,
                        placeholder: "blur",
                        blurDataURL: e.image.placeholder,
                        fill: !0,
                        alt: e.image.alt,
                        className: b
                    }) : (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(o.default, {
                            src: e.image.placeholder,
                            placeholder: "blur",
                            blurDataURL: e.image.placeholder,
                            fill: !0,
                            alt: e.image.alt,
                            className: y
                        }), (0, t.jsx)(o.default, {
                            src: e.image.src,
                            placeholder: "blur",
                            blurDataURL: e.image.placeholder,
                            fill: !0,
                            alt: e.image.alt,
                            className: b
                        })]
                    }), h && !n && s && e.video.src && (0, t.jsx)(f, {
                        url: e.video.src,
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
                    }, `slide-video-${a}`)]
                }, `carousel-text-visual-${a}`)
            },
            x = ({
                title: e,
                action: a,
                slides: r,
                blurredBackground: i
            }) => {
                let [o, f] = (0, l.useState)(void 0), [x, g] = (0, l.useState)(void 0), [h, p] = (0, l.useState)(1), [y, b] = (0, l.useState)(0), [v, j] = (0, l.useState)(0), k = (0, l.useRef)(null), w = (0, l.useRef)(null), N = (0, l.useRef)(null), L = (0, s.f)();
                (0, l.useEffect)(() => {
                    w.current && N.current && (f(w.current), g(N.current))
                }, [w, N]);
                let R = (0, l.useCallback)((e, t) => {
                        p(t + 1), j(t)
                    }, []),
                    C = (0, l.useCallback)(e => {
                        b(e)
                    }, []),
                    B = (0, l.useCallback)(() => {
                        w.current && N.current && w.current.slickPrev()
                    }, []),
                    U = (0, l.useCallback)(() => {
                        w.current && N.current && w.current.slickNext()
                    }, []),
                    S = {
                        dots: !1,
                        infinite: !0,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: !1
                    },
                    F = (0, l.useMemo)(() => r.map((e, l) => (0, t.jsx)("div", {
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
                                children: (0, t.jsx)(u.f, {
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
                    T = (0, l.useMemo)(() => r.map((e, l) => (0, t.jsx)(m, {
                        slide: e,
                        index: l,
                        isActive: y === l,
                        isVisuallyActive: v === l,
                        preferReducedMotion: L,
                        clickCallback: U,
                        blurredBackground: i
                    }, l)), [r, y, v, L, U]);
                return (0, t.jsx)("section", {
                    className: "dark bg-black py-12",
                    "data-sentry-component": "CarouselTextVisual",
                    "data-sentry-source-file": "CarouselTextVisual.tsx",
                    children: (0, t.jsxs)("div", {
                        className: "container md:max-w-none lg:pr-0",
                        children: [e && (0, t.jsx)(c.f, {
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
                                                ...S,
                                                asNavFor: o,
                                                useTransform: !1,
                                                ref: N,
                                                className: "carousel-text-visual_visual m-0",
                                                "data-sentry-element": "Slider",
                                                "data-sentry-source-file": "CarouselTextVisual.tsx",
                                                children: T
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
                                    ...S,
                                    draggable: !1,
                                    asNavFor: x,
                                    beforeChange: R,
                                    afterChange: C,
                                    fade: !0,
                                    ref: w,
                                    "data-sentry-element": "Slider",
                                    "data-sentry-source-file": "CarouselTextVisual.tsx",
                                    children: F
                                }), r.length > 1 && (0, t.jsxs)("div", {
                                    className: "absolute bottom-0 left-3 flex gap-2",
                                    children: [(0, t.jsx)(d.f, {
                                        direction: "left",
                                        onPress: B,
                                        ariaLabel: "Prev",
                                        variant: "primary"
                                    }), (0, t.jsx)(d.f, {
                                        onPress: U,
                                        ariaLabel: "Next",
                                        variant: "primary"
                                    })]
                                })]
                            })]
                        })]
                    })
                })
            };
        e.s(["f", 0, ({
            blurredBackground: e = !1,
            title: l,
            action: a,
            slides: r,
            slidesBlog: s,
            slidesActionLabel: i = "View Post",
            isHidden: n
        }) => {
            let o = e => {
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
                            title: i,
                            href: e?.pageUrl?.link?.href?.current || "",
                            target: "_self"
                        } : null
                    }
                },
                c = r?.map(o) || [],
                d = s?.map(o) || [],
                u = c.length > 0 ? c : d.length > 0 ? d : [];
            return (0, t.jsx)(t.Fragment, {
                children: !n && (0, t.jsx)(x, {
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
    }, 673300, e => {
        var t = e.i(167358),
            l = e.i(495056),
            a = e.i(825455),
            r = e.i(717714),
            s = e.i(127873),
            i = e.i(194485),
            n = e.i(722978),
            o = e.i(749583);
        let c = (0, i.default)(() => e.A(685851), {
                loadableGenerated: {
                    modules: [204748]
                },
                ssr: !1
            }),
            d = ({
                title: e,
                description: i,
                image: d,
                video: u,
                actions: f
            }) => {
                let m = (0, l.useRef)(null),
                    [x, g] = (0, l.useState)(!1),
                    h = (0, a.f)(m, {
                        once: !0
                    }),
                    p = (0, r.f)(),
                    y = (0, n.U)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                        "opacity-0": x && !p && h && u.src
                    });
                return (0, t.jsx)("section", {
                    className: "dark bg-gray-900",
                    "data-sentry-component": "FullScreenVisual",
                    "data-sentry-source-file": "FullScreenVisual.tsx",
                    children: (0, t.jsxs)("div", {
                        ref: m,
                        className: "relative box-border flex min-h-screen flex-col items-center justify-center p-5",
                        children: [d && d.src && (0, t.jsx)(s.default, {
                            fill: !0,
                            alt: d.alt ?? "",
                            src: d.src,
                            className: y
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
                                g(!0)
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
                            }), i && (0, t.jsx)("div", {
                                className: "loco-text-body-lg mt-2 opacity-70",
                                children: i
                            }), f && (0, t.jsxs)("div", {
                                className: "mt-6 flex justify-center gap-4",
                                children: [" ", f.map((e, l) => {
                                    if (e.link) return (0, t.jsx)(o.f, {
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
            actions: s,
            isHidden: i
        }) => {
            let {
                mapFormActions: n
            } = (0, u.Y)(s), o = n(s);
            return (0, t.jsx)(t.Fragment, {
                children: !i && (0, t.jsx)(d, {
                    title: e,
                    description: l,
                    image: {
                        src: a?.asset.url || "",
                        placeholder: a?.asset.metadata.lqip || ""
                    },
                    video: {
                        src: r?.muxHLSURL || ""
                    },
                    actions: o
                })
            })
        };
        e.s(["f", 0, e => (0, t.jsx)(l.default.Suspense, {
            fallback: (0, t.jsx)("div", {
                className: "h-screen w-full bg-black"
            }),
            "data-sentry-element": "React.Suspense",
            "data-sentry-component": "FullScreenVisualBlockSuspense",
            "data-sentry-source-file": "FullScreenVisualBlock.tsx",
            children: (0, t.jsx)(f, {
                ...e,
                "data-sentry-element": "FullScreenVisualBlock",
                "data-sentry-source-file": "FullScreenVisualBlock.tsx"
            })
        })], 673300)
    }, 314669, e => {
        var t = e.i(167358),
            l = e.i(127873),
            a = e.i(595388),
            r = e.i(722978);
        let s = ({
            logos: e
        }) => (0, t.jsx)("div", {
            className: "container my-8",
            "data-sentry-component": "LogosBank",
            "data-sentry-source-file": "LogosBank.tsx",
            children: (0, t.jsx)("div", {
                className: "grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5",
                children: e?.map((e, s) => {
                    let i = (0, r.U)("rounded bg-gray-100 p-4  md:p-8", {
                        "hover:bg-white transition-all ease-in-out duration-1000": e?.action?.href
                    });
                    return (0, t.jsxs)("div", {
                        "data-sentry-component": "renderLogos",
                        "data-sentry-source-file": "LogosBank.tsx",
                        children: [!e.action?.href && (0, t.jsx)("div", {
                            className: i,
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
                        }), e.action?.href && (0, t.jsx)(a.L, {
                            href: e.action.href,
                            target: e.action.target || "_self",
                            children: (0, t.jsx)("div", {
                                className: i,
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
                    }, `logos-bank-logo-${s}`)
                })
            })
        });
        e.s(["f", 0, ({
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
                children: !l && (0, t.jsx)(s, {
                    logos: a
                })
            })
        }], 314669)
    }, 447533, e => {
        var t = e.i(167358),
            l = e.i(127873),
            a = e.i(722978),
            r = e.i(495056),
            s = e.i(481392),
            i = e.i(194485),
            n = e.i(783078);
        let o = (0, i.default)(() => e.A(685851), {
                loadableGenerated: {
                    modules: [204748]
                },
                ssr: !1
            }),
            c = ({
                containerRef: e,
                lqip: l
            }) => {
                let a = (0, r.useRef)(null),
                    s = (0, r.useRef)(null),
                    i = "pointer-events-none absolute inset-0 hidden h-full w-full opacity-80 blur-2xl lg:block [will-change:filter]";
                return ((0, r.useEffect)(() => {
                    let t, l = a.current,
                        r = e.current;
                    if (!l || !r) return;
                    let i = l.getContext("2d");
                    if (!i) return;
                    let n = r.querySelector("video"),
                        o = () => {
                            n && r.contains(n) || (n = r.querySelector("video"));
                            let e = n,
                                l = s.current;
                            if (e) {
                                e.crossOrigin || (e.crossOrigin = "anonymous");
                                try {
                                    i.drawImage(e, 0, 0, 32, 32), l && (l.style.transform = `scale(${1.01+1e-6*Math.random()})`)
                                } catch {}
                            }
                            t = requestAnimationFrame(o)
                        };
                    return t = requestAnimationFrame(o), () => cancelAnimationFrame(t)
                }, [e, l]), l) ? (0, t.jsx)("div", {
                    className: i,
                    style: {
                        backgroundImage: `url(${l})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transform: "scale(1.05)"
                    },
                    "aria-hidden": "true"
                }) : (0, t.jsx)("div", {
                    ref: s,
                    className: i,
                    "aria-hidden": "true",
                    "data-sentry-component": "MediaGlow",
                    "data-sentry-source-file": "HeroMedia.tsx",
                    children: (0, t.jsx)("canvas", {
                        ref: a,
                        width: 32,
                        height: 32,
                        className: "h-full w-full"
                    })
                })
            };
        var d = e.i(622703),
            u = e.i(224601);
        let f = ({
            children: e,
            className: r = "",
            size: s = "default",
            variant: i = "default",
            image: n,
            keyFigures: o
        }) => {
            let c = (0, a.q)("relative grid grid-cols-12", r, {
                    dark: !!n
                }),
                u = (0, a.q)("relative col-span-12 mx-auto lg:container", {
                    "lg:py-32 lg:pb-10": "gdc2026" !== i && "default" === s,
                    "lg:py-16 lg:pb-5": "gdc2026" !== i && "slim" === s,
                    "py-0 lg:py-20 max-w-[82rem]": "gdc2026" === i
                }),
                f = (0, a.q)({
                    "flex flex-col lg:flex-row-reverse": "gdc2026" !== i,
                    "grid grid-cols-12 gap-6": "gdc2026" === i
                });
            return (0, t.jsxs)("section", {
                className: c,
                "data-sentry-component": "Hero",
                "data-sentry-source-file": "Hero.tsx",
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
                    }), o && o.length > 0 && (0, t.jsx)("div", {
                        className: "mx-6 lg:mx-0",
                        children: (0, t.jsx)(d.f, {
                            keyFigures: o,
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
            "data-sentry-component": "HeroActions",
            "data-sentry-source-file": "HeroActions.tsx",
            children: e
        }), f.AlternateActions = ({
            children: e
        }) => (0, t.jsx)("div", {
            className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
            "data-sentry-component": "HeroAlternateActions",
            "data-sentry-source-file": "HeroAlternateActions.tsx",
            children: e
        }), f.Body = ({
            children: e,
            variant: l = "default"
        }) => (0, t.jsx)("div", {
            className: "gdc2026" === l ? "loco-text-body-lg" : "loco-text-body-lg mb-6",
            "data-sentry-component": "HeroBody",
            "data-sentry-source-file": "HeroBody.tsx",
            children: e
        }), f.Content = ({
            children: e,
            variant: l = "default"
        }) => {
            let r = (0, a.U)({
                "flex-1 pt-10 pr-8": "gdc2026" !== l,
                "w-full col-span-12 lg:col-span-4 px-4 pb-6 gap-6 items-center lg:gap-9 lg:items-start lg:px-0 lg:pb-0 lg:pt-8 flex flex-col order-2 lg:order-1 text-center lg:text-left": "gdc2026" === l
            });
            return (0, t.jsx)("div", {
                className: r,
                style: "gdc2026" === l ? {
                    gap: "2.3125rem"
                } : void 0,
                "data-sentry-component": "HeroContent",
                "data-sentry-source-file": "HeroContent.tsx",
                children: e
            })
        }, f.Overline = ({
            children: e,
            className: l
        }) => {
            let r = (0, a.U)("loco-caption-lg-semibold mb-3 text-gray-500 dark:text-gray-300", l);
            return (0, t.jsx)("div", {
                className: r,
                "data-sentry-component": "HeroOverline",
                "data-sentry-source-file": "HeroOverline.tsx",
                children: e
            })
        }, f.Title = ({
            children: e,
            variant: l = "default"
        }) => {
            let r = (0, a.U)("!font-nohemi text-black dark:text-white", {
                "loco-text-heading-md mb-6": "gdc2026" !== l,
                "loco-text-heading-4xl break-normal lg:[word-spacing:100vw]": "gdc2026" === l
            });
            return (0, t.jsx)("h1", {
                className: r,
                "data-sentry-component": "HeroTitle",
                "data-sentry-source-file": "HeroTitle.tsx",
                children: e
            })
        }, f.Pricing = ({
            data: e = [],
            onSelectionChange: l,
            selectedKey: a
        }) => {
            let i = (0, r.useMemo)(() => e.find(e => e.key === a), [e, a]);
            return (0, r.useEffect)(() => {
                let t = !a || !i,
                    r = e?.[0]?.key;
                t && l && r && l(r)
            }, [e, a, l, i]), (0, t.jsx)(t.Fragment, {
                children: !!e.length && (0, t.jsx)("div", {
                    className: "mb-6 flex",
                    children: (0, t.jsxs)("div", {
                        children: [(0, t.jsxs)("div", {
                            className: "mb-2",
                            children: [(0, t.jsx)("span", {
                                className: "loco-text-heading-xs mr-1 font-semibold",
                                children: i?.price
                            }), (0, t.jsx)("span", {
                                className: "loco-text-body-sm",
                                children: i?.suffixPrice
                            })]
                        }), e.length > 1 && (0, t.jsx)(s.f, {
                            selectedKey: a,
                            onSelectionChange: l,
                            children: e.map(({
                                key: e,
                                label: l
                            }) => (0, t.jsx)(s.f.Item, {
                                children: l
                            }, e))
                        })]
                    })
                })
            })
        }, f.Media = ({
            media: e,
            className: s = "",
            variant: i = "default"
        }) => {
            let {
                image: d,
                video: u
            } = e || {}, [f, m] = (0, r.useState)(!1), x = (0, r.useRef)(null), g = "gdc2026" === i ? "object-cover" : "object-contain", h = (0, a.U)("relative flex grow", {
                "m-4 h-full": "gdc2026" !== i,
                "w-full h-[22rem] lg:h-full lg:w-auto lg:m-4": "gdc2026" === i
            }, s), p = (0, a.U)("relative h-full w-full overflow-hidden", {
                "rounded-3xl": "gdc2026" !== i,
                "lg:rounded-3xl": "gdc2026" === i
            }), y = (0, a.U)("flex items-center", {
                "flex-1 justify-center lg:justify-start": "gdc2026" !== i,
                "w-full col-span-12 lg:col-span-8 justify-center order-1 lg:order-2": "gdc2026" === i
            }), b = (e, r) => d?.asset.url ? (0, t.jsx)(l.default, {
                src: d.asset.url,
                alt: e,
                fill: !0,
                className: (0, a.U)("absolute h-full", g, r),
                sizes: `(min-width: ${n.f.Large}px) 33vw, (min-width: ${n.f.Medium}px) 50vw, 100vw`,
                placeholder: d.asset.metadata?.lqip ? "blur" : "empty",
                blurDataURL: d.asset.metadata?.lqip || void 0,
                "data-sentry-element": "Image",
                "data-sentry-component": "renderImage",
                "data-sentry-source-file": "HeroMedia.tsx"
            }) : null;
            return (0, t.jsx)("div", {
                className: y,
                "data-sentry-component": "HeroMedia",
                "data-sentry-source-file": "HeroMedia.tsx",
                children: (d || u) && (0, t.jsxs)("div", {
                    className: h,
                    children: [(0, t.jsx)(c, {
                        containerRef: x,
                        lqip: f ? void 0 : d?.asset?.metadata?.lqip
                    }), (0, t.jsxs)("div", {
                        ref: x,
                        className: p,
                        children: [d?.asset.url && !u && b("Hero image", void 0), u && d?.asset.url && !f && b("Video thumbnail", "z-10"), u && (0, t.jsx)("div", {
                            className: "h-full w-full self-center",
                            children: (0, t.jsx)(o, {
                                url: u?.muxHLSURL || "",
                                playing: !0,
                                loop: !0,
                                muted: !0,
                                playsinline: !0,
                                width: "100%",
                                height: "100%",
                                className: (0, a.U)("absolute top-0 h-full", {
                                    "[&>video]:object-cover": "gdc2026" === i,
                                    "[&>video]:object-contain": "gdc2026" !== i
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
            autoplay: s,
            blockedMessage: i,
            consentButtonLabel: n
        }) => {
            let o = (0, a.U)("relative flex grow md:h-auto md:content-center md:mx-8 md:rounded-3xl md:overflow-hidden", e);
            return r && l ? (0, t.jsx)("div", {
                className: "flex flex-1",
                "data-sentry-component": "HeroYouTubeVideo",
                "data-sentry-source-file": "HeroYouTubeVideo.tsx",
                children: (0, t.jsx)("div", {
                    className: o,
                    children: (0, t.jsx)(u.f, {
                        autoplay: s,
                        title: l,
                        url: r,
                        blockedMessage: i,
                        consentButtonLabel: n,
                        "data-sentry-element": "YouTubeModal",
                        "data-sentry-source-file": "HeroYouTubeVideo.tsx"
                    })
                })
            }) : null
        }, e.s(["f", 0, f], 447533)
    }])
})();

//# debugId=5cc6a677-aeba-d4c9-bf6f-f85d0aa69bbb