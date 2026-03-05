! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var a = arguments[t];
                if (null != a)
                    for (var l in a) a.hasOwnProperty(l) && (e[l] = a[l])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [61285], {
        11146: (e, t, a) => {
            a.d(t, {
                A: () => d
            });
            var l = a(80475),
                r = a(88491),
                s = a(95719),
                n = a(23118),
                i = a(50890);
            let d = ({
                title: e,
                layout: t,
                cardVariant: a,
                scroll: d,
                theme: c,
                cardsHeading: o,
                cards: u,
                isHidden: m
            }) => {
                let {
                    appendCommerceData: x,
                    appendCommerceDataToPortableText: g,
                    currency: f
                } = (0, i.A)(), h = (0, r.useMemo)(() => u?.map(e => ({
                    type: e._type,
                    title: x(e.title, e.productCatalogItem) || "",
                    description: x(e.description, e.productCatalogItem) || "",
                    richText: (0, l.jsx)(s.RK, {
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
                })), [u, x, g]);
                return (0, l.jsx)(l.Fragment, {
                    children: !m && (0, l.jsx)("section", {
                        className: `${"dark"===c?"dark":""} overflow-hidden`,
                        children: (0, l.jsx)(n.A, {
                            layout: "two-cards" === t || "three-cards" === t || "four-cards" === t ? t : "four-cards",
                            cardVariant: "default" === a || "padded" === a || "transparent" === a ? a : "default",
                            scroll: d,
                            title: e || "",
                            cardsHeading: ["h2", "h3", "h4", "div"].includes(o) ? o : void 0,
                            cards: h
                        })
                    })
                })
            }
        },
        11239: (e, t, a) => {
            a.d(t, {
                A: () => p
            });
            var l = a(80475),
                r = a(88491),
                s = a(98822),
                n = a(81359),
                i = a(27331),
                d = a(16335),
                c = a(57093);
            a(58334), a(26502);
            var o = a(92572),
                u = a(80048),
                m = a(18789),
                x = a(18227);
            let g = (0, s.default)(() => Promise.all([a.e(87770), a.e(89058)]).then(a.t.bind(a, 23399, 23)), {
                    loadableGenerated: {
                        webpack: () => [23399]
                    },
                    ssr: !1
                }),
                f = ({
                    slide: e,
                    index: t,
                    isActive: a,
                    preferReducedMotion: s,
                    isVisuallyActive: n,
                    clickCallback: c,
                    blurredBackground: u
                }) => {
                    let m = (0, r.useRef)(null),
                        [x, f] = (0, r.useState)(!1),
                        h = (0, i.W)(m, {
                            once: !0
                        }),
                        p = {
                            maxMaxBufferLength: 1,
                            qualityStartLevel: 1
                        },
                        y = (0, d.A)("relative aspect-video overflow-hidden rounded-2xl duration-500", {
                            "opacity-30": !n && !a
                        }),
                        b = (0, d.A)("absolute h-full w-full transition-opacity duration-500 z-[-1]"),
                        v = (0, d.A)("absolute h-full w-full transition-opacity duration-500", {
                            "opacity-0": x && a && !s && h && e.video.src,
                            "object-contain": u
                        });
                    return (0, l.jsxs)("div", {
                        className: y,
                        ref: m,
                        onClick: () => {
                            !a && c && c()
                        },
                        "data-sentry-component": "VisualSlide",
                        "data-sentry-source-file": "CarouselTextVisual.tsx",
                        children: [e.mention && (0, l.jsx)("div", {
                            className: "absolute bottom-0 left-0 z-10 p-3 opacity-70",
                            children: e.mention
                        }), e.image && e.image.src && !u ? (0, l.jsx)(o.default, {
                            src: e.image.src,
                            placeholder: "blur",
                            blurDataURL: e.image.placeholder,
                            fill: !0,
                            alt: e.image.alt,
                            className: v
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(o.default, {
                                src: e.image.placeholder,
                                placeholder: "blur",
                                blurDataURL: e.image.placeholder,
                                fill: !0,
                                alt: e.image.alt,
                                className: b
                            }), (0, l.jsx)(o.default, {
                                src: e.image.src,
                                placeholder: "blur",
                                blurDataURL: e.image.placeholder,
                                fill: !0,
                                alt: e.image.alt,
                                className: v
                            })]
                        }), h && !s && a && e.video.src && (0, l.jsx)(g, {
                            url: e.video.src,
                            playing: !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: "[&>video]:object-cover",
                            onReady: () => {
                                f(!0)
                            },
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: p.maxMaxBufferLength,
                                    startLevel: p.qualityStartLevel
                                }
                            }
                        }, `slide-video-${t}`)]
                    }, `carousel-text-visual-${t}`)
                },
                h = ({
                    title: e,
                    action: t,
                    slides: a,
                    blurredBackground: s
                }) => {
                    let [i, d] = (0, r.useState)(void 0), [o, g] = (0, r.useState)(void 0), [h, p] = (0, r.useState)(1), [y, b] = (0, r.useState)(0), [v, j] = (0, r.useState)(0), k = (0, r.useRef)(null), w = (0, r.useRef)(null), N = (0, r.useRef)(null), A = (0, n.I)();
                    (0, r.useEffect)(() => {
                        w.current && N.current && (d(w.current), g(N.current))
                    }, [w, N]);
                    let C = (0, r.useCallback)((e, t) => {
                            p(t + 1), j(t)
                        }, []),
                        L = (0, r.useCallback)(e => {
                            b(e)
                        }, []),
                        B = (0, r.useCallback)(() => {
                            w.current && N.current && w.current.slickPrev()
                        }, []),
                        R = (0, r.useCallback)(() => {
                            w.current && N.current && w.current.slickNext()
                        }, []),
                        _ = {
                            dots: !1,
                            infinite: !0,
                            speed: 500,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            arrows: !1
                        },
                        S = (0, r.useMemo)(() => a.map((e, t) => (0, l.jsx)("div", {
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
                                    children: (0, l.jsx)(x.A, {
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
                        P = (0, r.useMemo)(() => a.map((e, t) => (0, l.jsx)(f, {
                            slide: e,
                            index: t,
                            isActive: y === t,
                            isVisuallyActive: v === t,
                            preferReducedMotion: A,
                            clickCallback: R,
                            blurredBackground: s
                        }, t)), [a, y, v, A, R]);
                    return (0, l.jsx)("section", {
                        className: "dark bg-black py-12",
                        "data-sentry-component": "CarouselTextVisual",
                        "data-sentry-source-file": "CarouselTextVisual.tsx",
                        children: (0, l.jsxs)("div", {
                            className: "container md:max-w-none lg:pr-0",
                            children: [e && (0, l.jsx)(u.A, {
                                title: e,
                                actions: t ? [t] : []
                            }), (0, l.jsxs)("div", {
                                className: "relative mt-8 lg:grid lg:grid-cols-12 lg:gap-2",
                                ref: k,
                                children: [(0, l.jsx)("div", {
                                    className: "relative col-start-4 col-end-13 row-start-1",
                                    children: (0, l.jsx)("div", {
                                        className: "overflow-hidden rounded-2xl lg:rounded-tr-none lg:rounded-br-none",
                                        children: (0, l.jsx)("div", {
                                            className: "lg:grid lg:grid-cols-9 lg:gap-2",
                                            children: (0, l.jsx)("div", {
                                                className: "lg:col-span-8",
                                                children: (0, l.jsx)(c.A, {
                                                    ..._,
                                                    asNavFor: i,
                                                    useTransform: !1,
                                                    ref: N,
                                                    className: "carousel-text-visual_visual m-0",
                                                    "data-sentry-element": "Slider",
                                                    "data-sentry-source-file": "CarouselTextVisual.tsx",
                                                    children: P
                                                })
                                            })
                                        })
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: "relative col-start-1 col-end-4 row-start-1 pb-10",
                                    children: [a.length > 1 && (0, l.jsx)("span", {
                                        className: "loco-text-body-md text-blue mx-2.5 mt-2.5 mb-4 block lg:mt-0",
                                        children: `${h<10?"0":""}${h} / ${a.length<10?"0":""}${a.length}`
                                    }), (0, l.jsx)(c.A, {
                                        className: "carousel-text-visual_text mt-4 lg:mt-0",
                                        ..._,
                                        draggable: !1,
                                        asNavFor: o,
                                        beforeChange: C,
                                        afterChange: L,
                                        fade: !0,
                                        ref: w,
                                        "data-sentry-element": "Slider",
                                        "data-sentry-source-file": "CarouselTextVisual.tsx",
                                        children: S
                                    }), a.length > 1 && (0, l.jsxs)("div", {
                                        className: "absolute bottom-0 left-3 flex gap-2",
                                        children: [(0, l.jsx)(m.A, {
                                            direction: "left",
                                            onPress: B,
                                            ariaLabel: "Prev",
                                            variant: "primary"
                                        }), (0, l.jsx)(m.A, {
                                            onPress: R,
                                            ariaLabel: "Next",
                                            variant: "primary"
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })
                },
                p = ({
                    blurredBackground: e = !1,
                    title: t,
                    action: a,
                    slides: r,
                    slidesBlog: s,
                    slidesActionLabel: n = "View Post",
                    isHidden: i
                }) => {
                    let d = e => {
                            let t = (e, t) => e?.length > t ? `${e.substring(0,t)}...` : e;
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
                                action: e.action ? (e => ({
                                    title: e?.title || "",
                                    href: e?.link?.linkReference?.href.current || "",
                                    target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                                }))({
                                    ...e.action,
                                    title: e.action.title || ""
                                }) : e?.pageUrl ? {
                                    title: n,
                                    href: e?.pageUrl?.link?.href?.current || "",
                                    target: "_self"
                                } : null
                            }
                        },
                        c = r?.map(d) || [],
                        o = s?.map(d) || [],
                        u = c.length > 0 ? c : o.length > 0 ? o : [];
                    return (0, l.jsx)(l.Fragment, {
                        children: !i && (0, l.jsx)(h, {
                            title: t || "",
                            action: (e => e ? {
                                title: e.title || "",
                                href: e.link?.linkReference?.href.current || "",
                                target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                            } : null)(a),
                            slides: u,
                            blurredBackground: e
                        })
                    })
                }
        },
        12416: (e, t, a) => {
            a.d(t, {
                A: () => s
            });
            var l = a(80475);
            a(88491);
            var r = a(16335);
            let s = ({
                children: e,
                tag: t = "div",
                className: a = ""
            }) => {
                let s = (0, r.A)("loco-caption-lg-semibold mb-4", a);
                return (0, l.jsx)(t, {
                    className: s,
                    "data-sentry-element": "Tag",
                    "data-sentry-component": "Eyebrow",
                    "data-sentry-source-file": "Eyebrow.tsx",
                    children: e
                })
            }
        },
        23118: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var l = a(80475);
            a(88491);
            var r = a(16335),
                s = a(92572),
                n = a(94909),
                i = a(18227),
                d = a(25324),
                c = a(2340);
            let o = ({
                title: e,
                cards: t,
                layout: a = "four-cards",
                cardVariant: o = "default",
                scroll: u = !1,
                cardsHeading: m
            }) => {
                let x = m || (e ? "h3" : "h2"),
                    g = (0, r.$)("gap-4 md:gap-8", {
                        "grid grid-cols-12": !u,
                        "flex overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-100": u
                    });
                return (0, l.jsx)("section", {
                    className: "bg-white dark:bg-black",
                    "data-sentry-component": "Cards",
                    "data-sentry-source-file": "Cards.tsx",
                    children: (0, l.jsxs)("div", {
                        className: "container py-16",
                        children: [e && (0, l.jsx)("h2", {
                            className: "loco-text-heading-md mb-9 text-center",
                            children: e
                        }), (0, l.jsx)("div", {
                            className: g,
                            children: t?.map((t, m) => {
                                let g = (0, r.$)("flex flex-wrap flex-row", !u && ({
                                        "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                        "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                        "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                                    })[a], u && ({
                                        "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                        "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                        "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                                    })[a]),
                                    f = (0, r.$)("place-self-end", {
                                        "px-6 pb-6": "default" === o || "transparent" === o
                                    }),
                                    h = (0, r.$)({
                                        "p-6": "default" === o || "transparent" === o,
                                        "py-6": "padded" === o
                                    }),
                                    p = (0, r.$)("object-cover", {
                                        "rounded-t-xl": "default" === o || "transparent" === o,
                                        rounded: "padded" === o
                                    }),
                                    y = (0, r.$)("caption-xs mt-1 text-right text-gray-400", {
                                        "mr-1": "padded" !== o
                                    });
                                return (0, l.jsxs)(d.A, {
                                    className: g,
                                    variant: o,
                                    "data-sentry-element": "Card",
                                    "data-sentry-component": "renderCards",
                                    "data-sentry-source-file": "Cards.tsx",
                                    children: [(0, l.jsxs)(d.A.Content, {
                                        "data-sentry-element": "Card.Content",
                                        "data-sentry-source-file": "Cards.tsx",
                                        children: [t.image && t.image.src && (0, l.jsxs)(l.Fragment, {
                                            children: [(0, l.jsx)(d.A.Image, {
                                                withinContainer: t.image.withinContainer,
                                                children: (0, l.jsx)(s.default, {
                                                    src: t.image.src ?? "",
                                                    alt: t.image.alt ?? "",
                                                    fill: !0,
                                                    className: p,
                                                    quality: 100
                                                })
                                            }), t.image.description && (0, l.jsx)(c.A, {
                                                className: y,
                                                children: t.image.description
                                            })]
                                        }), (0, l.jsxs)("div", {
                                            className: h,
                                            children: [t.icon && t.icon.src && (0, l.jsx)("div", {
                                                className: "relative mb-5 dark:invert",
                                                children: (0, l.jsx)(s.default, {
                                                    src: t.icon.src ?? "",
                                                    alt: t.icon.alt ?? "",
                                                    quality: 100,
                                                    width: 23,
                                                    height: 23
                                                })
                                            }), (0, l.jsx)(x, {
                                                className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                                "data-sentry-element": "CardTitleTag",
                                                "data-sentry-source-file": "Cards.tsx",
                                                children: t.title
                                            }), t.description && (0, l.jsx)(c.A, {
                                                className: "loco-text-body mb-4",
                                                children: t.description
                                            }), t.richText && (0, l.jsx)(c.A, {
                                                className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                                children: t.richText
                                            })]
                                        })]
                                    }), t.actions && (0, l.jsx)("div", {
                                        className: f,
                                        children: t.actions.map((e, t) => (0, l.jsx)(i.A, {
                                            href: e.href,
                                            target: e.target ?? "_self",
                                            rounded: !0,
                                            hasArrow: !0,
                                            outlined: 0 === t,
                                            className: 0 === t ? "mr-3" : "mt-4",
                                            variant: 0 === t ? "primary" : "secondary",
                                            "data-link-location": n.V.cardsAction,
                                            "data-link-id": `${n.V.cardsAction}-${t}`,
                                            children: e.title
                                        }, `${e.title}-${t}`))
                                    })]
                                }, `card-${m}-${e}`)
                            })
                        })]
                    })
                })
            }
        },
        25324: (e, t, a) => {
            a.d(t, {
                A: () => n
            });
            var l = a(80475);
            a(88491);
            var r = a(16335);
            let s = ({
                children: e,
                className: t = "",
                variant: a = "default"
            }) => {
                let s = (0, r.$)({
                    default: "bg-white dark:bg-gray-900 rounded-xl",
                    padded: "p-6 bg-white dark:bg-gray-900 rounded-xl",
                    transparent: ""
                } [a], t);
                return (0, l.jsx)("div", {
                    className: s,
                    "data-sentry-component": "Card",
                    "data-sentry-source-file": "Card.tsx",
                    children: e
                })
            };
            s.Content = ({
                children: e,
                className: t = "w-full"
            }) => (0, l.jsx)("div", {
                className: t,
                "data-sentry-component": "CardContent",
                "data-sentry-source-file": "CardContent.tsx",
                children: e
            }), s.Image = ({
                children: e,
                withinContainer: t
            }) => {
                let a = (0, r.$)("card-img relative w-full", {
                    "[&>img]:!static !h-auto": t
                });
                return (0, l.jsx)("div", {
                    className: a,
                    "data-sentry-component": "CardImage",
                    "data-sentry-source-file": "CardImage.tsx",
                    children: e
                })
            };
            let n = s
        },
        28682: (e, t, a) => {
            a.d(t, {
                A: () => s
            });
            var l = a(80475);
            a(88491);
            var r = a(16335);
            let s = ({
                children: e,
                className: t = "",
                orientation: a = "horizontal"
            }) => {
                let s = (0, r.A)("flex gap-2 flex-wrap", {
                    "flex-col items-start": "vertical" === a
                }, t);
                return (0, l.jsx)("div", {
                    className: s,
                    "data-sentry-component": "ButtonGroup",
                    "data-sentry-source-file": "ButtonGroup.tsx",
                    children: e
                })
            }
        },
        35726: (e, t, a) => {
            a.d(t, {
                A: () => s
            });
            var l = a(80475);
            a(88491);
            var r = a(16335);
            let s = ({
                children: e,
                className: t = "",
                tag: a = "div"
            }) => {
                let s = (0, r.A)("loco-text-heading-sm mb-4", t);
                return (0, l.jsx)(a, {
                    className: s,
                    "data-sentry-element": "Tag",
                    "data-sentry-component": "Title",
                    "data-sentry-source-file": "Title.tsx",
                    children: e
                })
            }
        },
        37911: (e, t, a) => {
            a.d(t, {
                A: () => k
            });
            var l = a(80475),
                r = a(88491),
                s = a(27331),
                n = a(81359),
                i = a(94720),
                d = a(13328),
                c = a(37640),
                o = a(16335),
                u = a(98822),
                m = a(92572),
                x = a(2609),
                g = a(18227),
                f = a(29529),
                h = a(54859),
                p = a(64195),
                y = a(18350);
            let b = ({
                    provider: e,
                    title: t,
                    description: y,
                    action: b,
                    image: v,
                    video: j,
                    videoInline: k = !1,
                    buttonLabel: w = "Play video",
                    blockedMessage: N,
                    consentButtonLabel: A,
                    heading: C = "h3"
                }) => {
                    let L = (0, h.A)(`(min-width: ${x.A.Medium}px)`),
                        B = (0, r.useRef)(null),
                        [R, _] = (0, r.useState)(!1),
                        S = (0, s.W)(B),
                        P = (0, n.I)(),
                        M = null;
                    "youtube" === e ? M = (0, u.default)(() => Promise.all([a.e(87770), a.e(41181)]).then(a.t.bind(a, 9926, 23)), {
                        loadableGenerated: {
                            webpack: () => [9926]
                        },
                        ssr: !1
                    }) : "brandfolder" === e && (M = (0, u.default)(() => Promise.all([a.e(87770), a.e(89058)]).then(a.t.bind(a, 23399, 23)), {
                        loadableGenerated: {
                            webpack: () => [23399]
                        },
                        ssr: !1
                    }));
                    let $ = {};
                    "brandfolder" === e && ($ = {
                        hlsOptions: {
                            maxMaxBufferLength: 1,
                            qualityStartLevel: 1
                        }
                    });
                    let {
                        scrollYProgress: T
                    } = (0, i.L)({
                        target: B,
                        offset: ["start end", "end end"]
                    }), F = (0, d.G)(T, [0, 1], ["60%", "100%"]), I = (0, d.G)(T, [0, 1], [1.75, 1]), V = (0, d.G)(T, [0, 1], ["brightness(50%)", "brightness(100%)"]), D = () => {
                        k && "brandfolder" === e && _(!0)
                    }, q = () => {
                        _(!0)
                    }, z = (0, o.A)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                        "opacity-0 pointer-events-none": R && !P && S && j?.src
                    });
                    return (0, l.jsxs)("div", {
                        ref: B,
                        className: "flex flex-col gap-4 border-t border-gray-300 p-6 md:flex-row dark:border-gray-800 dark:bg-black [&_.consent]:md:justify-start [&_.consent>div.text]:md:w-11/12",
                        "data-sentry-component": "Feature",
                        "data-sentry-source-file": "AnimatedFeaturesList.tsx",
                        children: [L && (0, l.jsx)("div", {
                            className: "md:w-[50%]",
                            children: (0, l.jsxs)(c.m.div, {
                                style: {
                                    width: F,
                                    filter: V
                                },
                                className: "relative aspect-video overflow-hidden rounded-lg",
                                children: [(0, l.jsxs)(c.m.div, {
                                    style: {
                                        scale: I
                                    },
                                    className: "relative h-full w-full",
                                    children: [j && (0, l.jsx)(l.Fragment, {
                                        children: S && !P && j?.src && M && (0, l.jsx)(M, {
                                            url: j.src,
                                            playing: R,
                                            loop: k && "brandfolder" === e,
                                            muted: k && "brandfolder" === e,
                                            playsinline: k && "brandfolder" === e,
                                            width: "100%",
                                            height: "100%",
                                            className: "[&>video]:object-cover",
                                            onReady: D,
                                            onPlay: q,
                                            controls: !k || "brandfolder" !== e,
                                            config: $
                                        })
                                    }), v && (0, l.jsxs)("div", {
                                        className: z,
                                        onClick: q,
                                        children: [j?.src && (!k || "brandfolder" !== e) && (0, l.jsx)(f.A, {
                                            handleIsPlaying: q,
                                            className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                            label: w
                                        }), (0, l.jsx)(m.default, {
                                            src: v.src,
                                            placeholder: "blur",
                                            blurDataURL: v.placeholder,
                                            fill: !0,
                                            alt: v.alt ?? "",
                                            className: "cover absolute object-cover brightness-75",
                                            sizes: `(min-width: ${x.A.Large}px) 33vw, (min-width: ${x.A.Medium}px) 50vw, 100vw`
                                        })]
                                    })]
                                }), j?.src?.includes("youtube.com") && (0, l.jsx)(p.A, {
                                    blockedMessage: N,
                                    consentButtonLabel: A
                                })]
                            })
                        }), !L && (0, l.jsxs)("div", {
                            className: "relative aspect-video overflow-hidden rounded-lg md:hidden",
                            children: [(0, l.jsxs)("div", {
                                className: "relative h-full w-full",
                                children: [j && (0, l.jsx)(l.Fragment, {
                                    children: S && !P && j?.src && M && (0, l.jsx)(M, {
                                        url: j.src,
                                        playing: R,
                                        loop: k && "brandfolder" === e,
                                        muted: k && "brandfolder" === e,
                                        playsinline: k && "brandfolder" === e,
                                        width: "100%",
                                        height: "100%",
                                        className: "[&>video]:object-cover",
                                        onReady: D,
                                        onPlay: q,
                                        controls: !k && "brandfolder" !== e,
                                        config: $
                                    })
                                }), v && (0, l.jsxs)("div", {
                                    className: z,
                                    onClick: q,
                                    children: [j?.src && (!k || "brandfolder" !== e) && (0, l.jsx)(f.A, {
                                        handleIsPlaying: q,
                                        className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                        label: w
                                    }), (0, l.jsx)(m.default, {
                                        src: v.src,
                                        placeholder: "blur",
                                        blurDataURL: v.placeholder,
                                        fill: !0,
                                        alt: v.alt ?? "",
                                        className: "cover absolute object-cover brightness-75",
                                        sizes: `(min-width: ${x.A.Large}px) 33vw, (min-width: ${x.A.Medium}px) 50vw, 100vw`
                                    })]
                                })]
                            }), j?.src?.includes("youtube.com") && (0, l.jsx)(p.A, {
                                blockedMessage: N,
                                consentButtonLabel: A
                            })]
                        }), (0, l.jsx)("div", {
                            className: "md:ml-5 md:w-[25%]",
                            children: (0, l.jsx)(C, {
                                className: "loco-text-body-lg-medium",
                                "data-sentry-element": "TitleTag",
                                "data-sentry-source-file": "AnimatedFeaturesList.tsx",
                                children: t
                            })
                        }), (0, l.jsx)("div", {
                            className: "flex grow flex-col md:w-[50%]",
                            children: (0, l.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between",
                                children: [(0, l.jsx)("div", {
                                    className: "loco-text-body text-gray-700 dark:text-gray-400",
                                    children: y
                                }), (0, l.jsx)("div", {
                                    className: "mt-8",
                                    children: (0, l.jsx)(g.A, {
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
                v = ({
                    theme: e = "light",
                    features: t = [],
                    featuresHeading: a = "h3"
                }) => {
                    let s = (0, r.useRef)(null),
                        n = (0, o.A)("w-full", {
                            dark: "dark" === e
                        });
                    return (0, l.jsx)(y.A, {
                        "data-sentry-element": "FramerMotionLazy",
                        "data-sentry-component": "AnimatedFeaturesList",
                        "data-sentry-source-file": "AnimatedFeaturesList.tsx",
                        children: (0, l.jsx)("div", {
                            ref: s,
                            className: n,
                            children: t && t.map((e, t) => (0, l.jsx)(b, {
                                ...e,
                                heading: a
                            }, t))
                        })
                    })
                },
                j = e => {
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
                },
                k = ({
                    theme: e,
                    features: t,
                    isHidden: a,
                    featuresHeading: r
                }) => {
                    let s = t?.map(j);
                    return (0, l.jsx)(l.Fragment, {
                        children: !a && (0, l.jsx)(v, {
                            theme: "dark" === e ? "dark" : "light",
                            features: s,
                            featuresHeading: "h2" === r || "h4" === r ? r : "h3"
                        })
                    })
                }
        },
        43468: (e, t, a) => {
            a.d(t, {
                A: () => d
            });
            var l = a(80475);
            a(88491);
            var r = a(92572),
                s = a(62060),
                n = a(16335);
            let i = ({
                    logos: e
                }) => (0, l.jsx)("div", {
                    className: "container my-8",
                    "data-sentry-component": "LogosBank",
                    "data-sentry-source-file": "LogosBank.tsx",
                    children: (0, l.jsx)("div", {
                        className: "grid w-full grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-5",
                        children: e?.map((e, t) => {
                            let a = (0, n.A)("rounded bg-gray-100 p-4  md:p-8", {
                                "hover:bg-white transition-all ease-in-out duration-1000": e?.action?.href
                            });
                            return (0, l.jsxs)("div", {
                                "data-sentry-component": "renderLogos",
                                "data-sentry-source-file": "LogosBank.tsx",
                                children: [!e.action?.href && (0, l.jsx)("div", {
                                    className: a,
                                    children: (0, l.jsx)("div", {
                                        className: "relative aspect-square w-full",
                                        children: (0, l.jsx)(r.default, {
                                            src: e.src || "",
                                            alt: e.alt || "",
                                            placeholder: "blur",
                                            blurDataURL: e.placeholder,
                                            className: "rounded-lg object-contain",
                                            fill: !0
                                        })
                                    })
                                }), e.action?.href && (0, l.jsx)(s.N_, {
                                    href: e.action.href,
                                    target: e.action.target || "_self",
                                    children: (0, l.jsx)("div", {
                                        className: a,
                                        children: (0, l.jsx)("div", {
                                            className: "relative aspect-square w-full",
                                            children: (0, l.jsx)(r.default, {
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
                            }, `logos-bank-logo-${t}`)
                        })
                    })
                }),
                d = ({
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
                        children: !t && (0, l.jsx)(i, {
                            logos: a
                        })
                    })
                }
        },
        47481: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var l = a(80475);
            a(88491);
            var r = a(16335),
                s = a(2340);
            let n = ({
                    title: e,
                    content: t,
                    listStyle: a = "check"
                }) => {
                    let n = (0, r.A)("loco-text-body [&_h4]:mb-0", {
                        "checkmark-list-green": "check" === a,
                        "plus-list": "plus" === a
                    });
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            className: "loco-caption-sm-semibold mb-2 text-gray-700 dark:text-gray-300",
                            children: e
                        }), (0, l.jsx)(s.A, {
                            className: n,
                            "data-sentry-element": "Text",
                            "data-sentry-source-file": "CardPlan.tsx",
                            children: t
                        })]
                    })
                },
                i = ({
                    title: e = "",
                    descriptions: t = [],
                    treshold: a,
                    pricing: r
                }) => (0, l.jsxs)("div", {
                    className: "flex h-full flex-col justify-between rounded-lg bg-gray-100 p-6 lg:w-96 dark:bg-gray-800",
                    "data-sentry-component": "CardPlan",
                    "data-sentry-source-file": "CardPlan.tsx",
                    children: [(0, l.jsxs)("div", {
                        className: "grow pb-8",
                        children: [(0, l.jsx)("div", {
                            className: "loco-text-heading-sm mb-8 text-black dark:text-white",
                            children: e
                        }), (0, l.jsx)("div", {
                            children: t?.map((t, a) => (0, l.jsx)("div", {
                                className: "flex flex-col pb-8",
                                "data-sentry-component": "renderDescriptions",
                                "data-sentry-source-file": "CardPlan.tsx",
                                children: (0, l.jsx)(n, {
                                    title: t.title,
                                    content: t.content,
                                    listStyle: t.listStyle,
                                    "data-sentry-element": "CardPlanDescription",
                                    "data-sentry-source-file": "CardPlan.tsx"
                                })
                            }, `card-plan-${e}-${a}`))
                        }), (0, l.jsx)(n, {
                            title: a?.title || "",
                            content: a?.content || "",
                            "data-sentry-element": "CardPlanDescription",
                            "data-sentry-source-file": "CardPlan.tsx"
                        })]
                    }), (0, l.jsx)("div", {
                        className: "min-h-[6rem]",
                        children: (0, l.jsx)(n, {
                            title: r?.title || "",
                            content: r?.content || "",
                            "data-sentry-element": "CardPlanDescription",
                            "data-sentry-source-file": "CardPlan.tsx"
                        })
                    })]
                }),
                d = ({
                    theme: e = "light",
                    cards: t = []
                }) => {
                    let a = (0, r.A)({
                        dark: "dark" === e
                    });
                    return (0, l.jsx)("section", {
                        className: a,
                        "data-sentry-component": "CardPlans",
                        "data-sentry-source-file": "CardPlans.tsx",
                        children: (0, l.jsx)("div", {
                            className: "bg-white pt-8 pb-20 dark:bg-black",
                            children: (0, l.jsx)("div", {
                                className: "container flex flex-col flex-wrap gap-2 lg:flex-row lg:justify-center",
                                children: t.map((e, t) => (0, l.jsx)("div", {
                                    "data-sentry-component": "renderCards",
                                    "data-sentry-source-file": "CardPlans.tsx",
                                    children: (0, l.jsx)(i, {
                                        ...e,
                                        "data-sentry-element": "CardPlan",
                                        "data-sentry-source-file": "CardPlans.tsx"
                                    })
                                }, `card-plan-${e.title}-${t}`))
                            })
                        })
                    })
                };
            var c = a(95719);
            let o = ({
                isHidden: e,
                theme: t,
                cards: a
            }) => e ? null : (0, l.jsx)(d, {
                theme: "dark" === t ? "dark" : "light",
                cards: a.map(e => ({
                    title: e.title ?? "",
                    descriptions: e.descriptions?.map(e => {
                        let t = e?.listStyle === "plus" ? "plus" : "check";
                        return {
                            title: e?.title ?? "",
                            content: (0, l.jsx)(c.RK, {
                                value: e?.content
                            }),
                            listStyle: t
                        }
                    }) || [],
                    treshold: {
                        title: e?.treshold?.title ?? "",
                        content: (0, l.jsx)(c.RK, {
                            value: e.treshold?.content
                        })
                    },
                    pricing: {
                        title: e.pricing?.title ?? "",
                        content: (0, l.jsx)(c.RK, {
                            value: e.pricing?.content
                        })
                    }
                })),
                "data-sentry-element": "CardPlans",
                "data-sentry-component": "PlanCards",
                "data-sentry-source-file": "PlanCardsBlock.tsx"
            })
        },
        62329: (e, t, a) => {
            a.d(t, {
                A: () => y
            });
            var l = a(80475),
                r = a(88491),
                s = a(95719),
                n = a(92572),
                i = a(16335);
            let d = ({
                    overline: e,
                    variant: t = "default"
                }) => {
                    let a = "products" === t;
                    return (0, l.jsx)("div", {
                        className: (0, i.A)("loco-caption-lg-semibold mb-2 lg:mb-3", {
                            "text-white": a,
                            "text-gray-700 dark:text-gray-300": !a
                        }),
                        "data-sentry-component": "CalloutOverline",
                        "data-sentry-source-file": "CalloutOverline.tsx",
                        children: e
                    })
                },
                c = ({
                    title: e
                }) => (0, l.jsx)("div", {
                    className: "loco-text-heading-md !font-nohemi mb-5 md:w-2/3 lg:mb-6",
                    "data-sentry-component": "CalloutTitle",
                    "data-sentry-source-file": "CalloutTitle.tsx",
                    children: e
                }),
                o = ({
                    body: e,
                    variant: t = "default"
                }) => (0, l.jsx)("div", {
                    className: (0, i.A)("loco-text-body-lg mb-6 lg:mb-12", {
                        "md:w-2/3": "products" === t
                    }),
                    "data-sentry-component": "CalloutBody",
                    "data-sentry-source-file": "CalloutBody.tsx",
                    children: e
                });
            var u = a(18227);
            let m = ({
                    actions: e,
                    variant: t = "default"
                }) => {
                    let a = "products" === t;
                    return (0, l.jsx)("div", {
                        className: "flex flex-col flex-wrap items-start justify-start gap-y-4 md:flex-row md:gap-2",
                        "data-sentry-component": "CalloutAction",
                        "data-sentry-source-file": "CalloutAction.tsx",
                        children: e.map((e, t) => e.renderModal ? (0, l.jsx)(r.Fragment, {
                            children: e.renderModal()
                        }, t) : (0, l.jsx)(u.A, {
                            size: "large",
                            variant: 0 === t ? "primary" : "secondary",
                            rounded: !0,
                            hasArrow: !0,
                            outlined: !a && 0 === t,
                            className: "w-auto justify-center",
                            href: e.href,
                            target: e.target,
                            children: e.label
                        }, t))
                    })
                },
                x = ({
                    overline: e,
                    title: t,
                    body: a,
                    actions: r,
                    image: s,
                    className: u,
                    variant: x = "default"
                }) => {
                    let g = (0, i.A)("container relative grid col-span-12 py-8 lg:py-12 px-4 lg:px-16 rounded-xl overflow-hidden", {
                            dark: !!s
                        }, u),
                        f = "products" === x;
                    return (0, l.jsx)("div", {
                        className: "bg-white py-16 dark:bg-black",
                        "data-sentry-component": "Callout",
                        "data-sentry-source-file": "Callout.tsx",
                        children: (0, l.jsx)("div", {
                            className: "container",
                            children: (0, l.jsxs)("div", {
                                className: "relative grid grid-cols-12 overflow-hidden rounded-xl px-4 py-8 lg:px-16 lg:py-12",
                                children: [s && (0, l.jsx)(n.default, {
                                    src: s.url,
                                    alt: s.alt || "",
                                    fill: !0,
                                    className: (0, i.A)("scale-105 object-cover", {
                                        blur: !f
                                    })
                                }), (0, l.jsxs)("div", {
                                    className: g,
                                    children: [(0, l.jsx)(d, {
                                        overline: e,
                                        variant: x,
                                        "data-sentry-element": "CalloutOverline",
                                        "data-sentry-source-file": "Callout.tsx"
                                    }), (0, l.jsx)(c, {
                                        title: t,
                                        "data-sentry-element": "CalloutTitle",
                                        "data-sentry-source-file": "Callout.tsx"
                                    }), (0, l.jsx)(o, {
                                        body: a,
                                        variant: x,
                                        "data-sentry-element": "CalloutBody",
                                        "data-sentry-source-file": "Callout.tsx"
                                    }), (0, l.jsx)(m, {
                                        actions: r,
                                        variant: x,
                                        "data-sentry-element": "CalloutAction",
                                        "data-sentry-source-file": "Callout.tsx"
                                    })]
                                })]
                            })
                        })
                    })
                };
            var g = a(87564),
                f = a(46247),
                h = a(93955),
                p = a(24412);
            let y = ({
                overline: e,
                title: t,
                body: a,
                actions: n,
                image: i,
                theme: d,
                isHidden: c,
                variant: o,
                productCatalogItem: u,
                productCategoryFilter: m
            }) => {
                let [y] = (0, r.useContext)(h.th), {
                    state: b
                } = (0, f.Ay)(), v = {
                    ...b,
                    product: u?.productKey,
                    variant: null
                }, {
                    renderModal: j,
                    extraFields: k
                } = (0, p.V)(n), w = (0, r.useMemo)(() => n ? n.map(e => (e => {
                    if (!e) return null;
                    let t = !!e.form,
                        a = e.link?.linkReference?.href?.current,
                        l = t ? "" : a ? (0, g.A)(a, v, e.extendLink) : "";
                    if (t) {
                        let t = e.form || {},
                            a = {
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
                                form: a
                            })
                        }
                    }
                    return {
                        label: e.title || "",
                        href: l,
                        target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })(e)).filter(e => !!e) : [], [n, v, j, k]), {
                    subcategories: N
                } = y.categories?.find(({
                    _id: e
                }) => e === y.selectedCategory) || {}, A = null != y.selectedSubcategory ? (N || []).find(({
                    _id: e
                }) => e === y.selectedSubcategory) : null, C = !m || m.categories?.find(e => e._id === y.selectedCategory) != null && (null == A || !m.subcategories || m.subcategories.some(({
                    _id: e
                }) => e === y.selectedSubcategory)), L = i ? {
                    url: i?.file?.asset.url || "",
                    alt: i.alt
                } : void 0;
                return (0, l.jsx)(l.Fragment, {
                    children: !c && C && (0, l.jsx)("section", {
                        className: "dark" === d ? "dark" : "",
                        children: (0, l.jsx)(x, {
                            overline: e,
                            title: t || "",
                            body: (0, l.jsx)(s.RK, {
                                value: a
                            }),
                            actions: w,
                            image: L,
                            variant: o
                        })
                    })
                })
            }
        },
        63730: (e, t, a) => {
            a.d(t, {
                A: () => u
            });
            var l = a(80475),
                r = a(88491),
                s = a(87885),
                n = a(16335);
            let i = () => (0, l.jsx)("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-sentry-element": "svg",
                    "data-sentry-component": "PlusIcon",
                    "data-sentry-source-file": "PlusIcon.tsx",
                    children: (0, l.jsx)("path", {
                        d: "M2.5 8H13.5M8 2.5V13.5",
                        stroke: "#4C4C4C",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "data-sentry-element": "path",
                        "data-sentry-source-file": "PlusIcon.tsx"
                    })
                }),
                d = () => (0, l.jsx)("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 16 16",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-sentry-element": "svg",
                    "data-sentry-component": "MinusIcon",
                    "data-sentry-source-file": "MinusIcon.tsx",
                    children: (0, l.jsx)("path", {
                        d: "M2.5 8H13.5",
                        stroke: "black",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        "data-sentry-element": "path",
                        "data-sentry-source-file": "MinusIcon.tsx"
                    })
                }),
                c = ({
                    date: e,
                    dayOfWeek: t,
                    defaultOpen: a,
                    activities: s,
                    footer: n
                }) => {
                    let [c, o] = (0, r.useState)(a);
                    return (0, l.jsxs)("details", {
                        open: c,
                        onToggle: e => {
                            o(e.target.open)
                        },
                        className: "rounded-lg bg-gray-100 dark:bg-gray-800",
                        "data-sentry-component": "AgendaCard",
                        "data-sentry-source-file": "AgendaCard.tsx",
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
                                children: c ? (0, l.jsx)(d, {}) : (0, l.jsx)(i, {})
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "flex flex-col px-6 pb-6 md:ml-[19rem]",
                            children: [s?.map(e => {
                                let {
                                    title: t,
                                    startTime: a,
                                    endTime: r
                                } = e, s = r ? `${a} - ${r}` : a;
                                return (0, l.jsxs)("div", {
                                    className: "flex flex-col gap-2 pt-6 first:mt-4 first:border-t first:border-gray-300 sm:flex-row dark:first:border-gray-700",
                                    "data-sentry-component": "agendaEventsMap",
                                    "data-sentry-source-file": "AgendaCard.tsx",
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
                                children: n
                            })]
                        })]
                    })
                },
                o = ({
                    theme: e,
                    agendaCards: t
                }) => {
                    let a = (0, n.A)({
                        dark: "dark" === e
                    });
                    return (0, l.jsx)("section", {
                        className: a,
                        "data-sentry-component": "Agenda",
                        "data-sentry-source-file": "Agenda.tsx",
                        children: (0, l.jsx)("div", {
                            className: "bg-white py-10 md:py-20 dark:bg-gray-900",
                            children: (0, l.jsx)("div", {
                                className: "container flex flex-col gap-2",
                                children: t.map((e, t) => (0, l.jsx)(c, {
                                    defaultOpen: 0 === t,
                                    ...e
                                }, `agenda-card-${e.date}-${e.dayOfWeek}-${t}`))
                            })
                        })
                    })
                },
                u = ({
                    theme: e = "light",
                    isHidden: t,
                    agendaCards: a
                }) => {
                    let r = (0, s.useLocale)();
                    return t ? null : (0, l.jsx)(o, {
                        theme: "dark" === e ? "dark" : "light",
                        agendaCards: a?.map(e => ({
                            date: e?.date ? new Intl.DateTimeFormat(r, {
                                month: "long",
                                day: "numeric",
                                timeZone: "UTC"
                            }).format(new Date(e.date)) : "",
                            dayOfWeek: e?.date ? new Intl.DateTimeFormat(r, {
                                weekday: "long",
                                timeZone: "UTC"
                            }).format(new Date(e.date)) : "",
                            footer: e?.footer || "",
                            activities: e?.activities?.map(e => ({
                                title: e.title,
                                startTime: e.startTime,
                                endTime: e.endTime
                            })) || []
                        })) || [],
                        "data-sentry-element": "Agenda",
                        "data-sentry-component": "AgendaBlock",
                        "data-sentry-source-file": "AgendaBlock.tsx"
                    })
                }
        },
        65104: (e, t, a) => {
            a.d(t, {
                A: () => A
            });
            var l = a(80475),
                r = a(88491),
                s = a(16335),
                n = a(92572),
                i = a(94909),
                d = a(89326),
                c = a(12416),
                o = a(18227),
                u = a(28682),
                m = a(35726),
                x = a(2340),
                g = a(95581);
            let f = ({
                features: e,
                transitionTime: t = 8500
            }) => {
                let [a, s] = (0, r.useState)(0), n = (0, r.useRef)(null), i = (0, r.useRef)(null), [d, c] = (0, r.useState)(!1), [u, m] = (0, r.useState)(!1), x = (0, r.useRef)(null);
                (0, r.useEffect)(() => {
                    e.forEach(e => {
                        e.icon && (new window.Image().src = e.icon, new window.Image().src = e.icon)
                    })
                }, [e]), (0, r.useEffect)(() => {
                    let e = new IntersectionObserver(([e]) => {
                        c(e.intersectionRatio >= .8)
                    }, {
                        threshold: [0, .8, 1]
                    });
                    return i.current && e.observe(i.current), () => e.disconnect()
                }, []), (0, r.useEffect)(() => (n.current && clearTimeout(n.current), d && !u && (n.current = setTimeout(() => {
                    s(t => (t + 1) % e.length)
                }, t)), () => {
                    n.current && clearTimeout(n.current)
                }), [a, e.length, t, d, u]);
                let f = (0, r.useCallback)(l => {
                        let r = l === a;
                        s(l), m(!0);
                        let n = e[l];
                        n?.onCardClick && setTimeout(() => {
                            n.onCardClick?.(r)
                        }, 0), x.current && clearTimeout(x.current), x.current = setTimeout(() => {
                            m(!1)
                        }, t)
                    }, [a, e, t]),
                    h = (0, r.useCallback)((e, t) => {
                        ("Enter" === e.key || " " === e.key) && (e.preventDefault(), f(t))
                    }, [f]);
                return (0, r.useEffect)(() => () => {
                    x.current && clearTimeout(x.current)
                }, []), (0, l.jsx)("div", {
                    ref: i,
                    className: "relative inline-flex w-full flex-col items-start justify-start gap-2 self-stretch px-5 pb-6 md:px-5 md:pb-6 lg:px-0 lg:pb-0 xl:px-20",
                    "data-sentry-component": "FeatureList",
                    "data-sentry-source-file": "FeatureList.tsx",
                    children: e.map((e, t) => {
                        let r = t === a;
                        return (0, l.jsxs)("div", {
                            "data-mobile": "true",
                            "data-show-image": r ? "true" : "false",
                            "data-state": r ? "selected" : "inactive",
                            role: "button",
                            tabIndex: 0,
                            className: `cursor-pointer self-stretch overflow-hidden rounded-lg bg-white ${r?`${e.icon?"lg:pl-36":"lg:pl-10"} p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_2px_12px_3px_rgba(0,0,0,0.04)] lg:py-8 lg:pr-10`:"p-6 lg:px-10 lg:py-6"} flex lg:inline-flex lg:items-start ${r?"flex-col":"items-center"} relative justify-start gap-2 transition-all duration-500 ease-out`,
                            onClick: () => f(t),
                            onKeyDown: e => h(e, t),
                            children: [e.icon && r && (0, l.jsx)(g.P.div, {
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
                                children: (0, l.jsx)("div", {
                                    className: "flex flex-1 items-center justify-center gap-2.5 self-stretch",
                                    children: (0, l.jsx)("img", {
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
                            }), e.icon && r && (0, l.jsx)(g.P.div, {
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
                                children: (0, l.jsx)("div", {
                                    className: "flex h-full items-center justify-start py-8",
                                    children: (0, l.jsx)("img", {
                                        className: "max-h-full w-auto object-contain",
                                        src: e.icon || "",
                                        alt: e.title || "Feature icon",
                                        loading: "eager",
                                        style: {
                                            imageRendering: "auto"
                                        }
                                    })
                                })
                            }), (0, l.jsxs)("div", {
                                className: "flex flex-col items-start justify-start gap-[9px] self-stretch lg:inline-flex lg:max-w-[304px] lg:flex-1 lg:flex-col",
                                children: [r && (0, l.jsx)(g.P.div, {
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
                                    children: (0, l.jsx)("div", {
                                        className: "flex-1 justify-center text-[10px] leading-[16px] font-medium tracking-[1px] text-gray-700 uppercase md:text-[12px] md:leading-[21px] md:tracking-[1.2px]",
                                        children: e.eyebrow || ""
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "inline-flex items-center justify-center self-stretch",
                                    children: (0, l.jsx)(g.P.div, {
                                        animate: {
                                            color: r ? "#000000" : "#374151"
                                        },
                                        transition: {
                                            type: "spring",
                                            duration: .3,
                                            bounce: .1
                                        },
                                        className: "flex-1 justify-center text-base leading-tight font-medium md:text-[20px] md:leading-[24px]",
                                        children: e.title || "Untitled"
                                    })
                                }), r && (0, l.jsx)(g.P.div, {
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
                                }), r && (0, l.jsx)(g.P.div, {
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
                                    children: (0, l.jsx)(o.A, {
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
                        }, t)
                    })
                })
            };
            var h = a(2609),
                p = a(54859),
                y = a(4767),
                b = a(27331),
                v = a(81359),
                j = a(98822),
                k = a(29529);
            let w = (0, j.default)(() => Promise.all([a.e(87770), a.e(89058)]).then(a.t.bind(a, 23399, 23)), {
                    loadableGenerated: {
                        webpack: () => [23399]
                    },
                    ssr: !1
                }),
                N = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                A = ({
                    actions: e = [],
                    aspectRatio: t,
                    backgroundImage: a = !1,
                    description: g,
                    eyebrow: j,
                    image: A,
                    mediaPosition: C = "right",
                    size: L = "default",
                    title: B,
                    youtubeVideo: R,
                    brandfolderVideo: _,
                    videoInline: S = !1,
                    buttonLabel: P = "Play Video",
                    blockKey: M,
                    blockedMessage: $,
                    consentButtonLabel: T,
                    featureList: F,
                    variant: I = "default"
                }) => {
                    let V = (0, p.A)(`(max-width: ${h.A.Large}px)`),
                        D = (0, r.useRef)(null),
                        [q, z] = (0, r.useState)(!1),
                        U = (0, b.W)(D, {
                            once: !0
                        }),
                        W = (0, v.I)(),
                        E = (0, r.useRef)({
                            total: 0,
                            progress: 0
                        }),
                        O = F && F.length > 0,
                        G = !O && R?.url;
                    (0, r.useEffect)(() => {
                        S || z(!1)
                    }, [U]);
                    let H = () => {
                            z(!0)
                        },
                        K = (0, s.A)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                            "opacity-0 pointer-events-none": q && !W && U && _?.src
                        }),
                        Z = (0, s.A)("relative", {
                            "py-10 lg:py-24": "gdc2026" === I,
                            "lg:py-14": O,
                            "lg:py-24": !O && "default" === L && (!t || "16:9" === t) && "gdc2026" !== I,
                            "lg:py-80": !O && "large" === L && (!t || "16:9" === t),
                            "lg:py-40": !O && "large" === L && "1:1" === t,
                            "dark bg-gray-900 overflow-hidden": a,
                            "bg-gray-100 dark:bg-black": !a && O,
                            "bg-white dark:bg-black": !a && !O
                        }),
                        J = (0, s.A)("grid grid-flow-row grid-cols-12 place-items-center gap-4", {
                            "p-4": "gdc2026" === I,
                            "lg:grid-flow-col": !0,
                            "lg:container": !t || "16:9" === t
                        }),
                        Q = (0, s.A)("font-nohemi! text-gray-900 dark:text-gray-100 whitespace-pre-line", {
                            "loco-text-heading-md!": "gdc2026" === I
                        }),
                        X = (0, s.A)("relative w-full rounded-lg", {
                            "aspect-square": "1:1" === t,
                            "aspect-video": "16:9" === t,
                            "overflow-hidden": !R?.url
                        }),
                        Y = (0, s.A)("relative col-span-12 flex h-full flex-col w-full items-center lg:items-start", {
                            "lg:col-span-8": "gdc2026" === I,
                            "lg:col-span-6": "gdc2026" !== I,
                            "lg:col-start-1": "left" === C,
                            "lg:col-start-5": "right" === C && "gdc2026" === I,
                            "lg:col-start-7": "right" === C && "gdc2026" !== I,
                            "order-first": !O || !V,
                            "order-last": O && V
                        }),
                        ee = (0, s.A)("relative col-span-12 px-5 text-center lg:pb-0 lg:text-left", {
                            "lg:col-span-4": "gdc2026" === I,
                            "lg:col-span-5": "gdc2026" !== I,
                            "pb-6": !(O && V),
                            "py-6": O && V,
                            "lg:col-start-9": "left" === C && "gdc2026" === I,
                            "lg:col-start-8": "left" === C && "gdc2026" !== I && (!t || "16:9" === t),
                            "lg:col-start-1": "right" === C && (!t || "16:9" === t),
                            "lg:col-start-2": "right" === C && "1:1" === t,
                            "order-first": O && V
                        }),
                        et = e => {
                            let t = E.current.progress / E.current.total * 100 || 0;
                            (0, d.g)({
                                name: e,
                                videoDuration: E.current.total,
                                videoProgress: Number(t)
                            })
                        };
                    return (0, l.jsxs)("section", {
                        className: Z,
                        "data-sentry-component": "FullWidthBlock",
                        "data-sentry-source-file": "FullWidthBlock.tsx",
                        children: [a && (0, l.jsx)(n.default, {
                            src: A.src,
                            alt: A.alt,
                            fill: !0,
                            className: "blur-2xl brightness-[0.2]"
                        }), (0, l.jsxs)("div", {
                            className: J,
                            ref: D,
                            children: [O ? (0, l.jsx)("div", {
                                className: Y,
                                children: (0, l.jsx)(f, {
                                    features: F
                                })
                            }) : G ? (0, l.jsx)("div", {
                                className: Y,
                                children: (0, l.jsx)("div", {
                                    className: X,
                                    children: (0, l.jsx)(y.A, {
                                        url: R?.url || "",
                                        title: R?.title ?? "",
                                        blockedMessage: $,
                                        consentButtonLabel: T
                                    })
                                })
                            }) : (0, l.jsxs)("div", {
                                className: Y,
                                "data-sentry-component": "renderMedia",
                                "data-sentry-source-file": "FullWidthBlock.tsx",
                                children: [(0, l.jsxs)("div", {
                                    className: X,
                                    children: [U && !W && _?.src && (0, l.jsx)(w, {
                                        url: _.src,
                                        playing: q,
                                        loop: !!S,
                                        muted: S,
                                        playsinline: S,
                                        width: "100%",
                                        height: "100%",
                                        onDuration: e => E.current.total = e,
                                        onProgress: e => {
                                            E.current.progress = 10 * e.played
                                        },
                                        className: "absolute top-0 left-0 [&>video]:object-cover",
                                        onReady: () => {
                                            S && z(!0)
                                        },
                                        controls: !S,
                                        onPlay: () => et("video_play"),
                                        onPause: () => et("video_pause"),
                                        config: {
                                            hlsOptions: {
                                                maxMaxBufferLength: N.maxMaxBufferLength,
                                                startLevel: N.qualityStartLevel
                                            }
                                        }
                                    }), A.src && (0, l.jsxs)("div", {
                                        className: K,
                                        onClick: H,
                                        children: [_?.src && !S && (0, l.jsx)(k.A, {
                                            handleIsPlaying: H,
                                            className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                            label: P,
                                            "data-link-location": M || i.V.fullWidthBlockAction,
                                            "data-link-id": `${M||i.V.fullWidthBlockAction}-video-play`
                                        }), (0, l.jsx)(n.default, {
                                            src: A.src,
                                            alt: A.alt,
                                            placeholder: "blur",
                                            blurDataURL: A.placeholder,
                                            fill: !0
                                        })]
                                    })]
                                }), A.caption && (0, l.jsx)("div", {
                                    className: "loco-text-body-sm-medium z-10 mt-3 mb-6 text-gray-600 lg:mb-3",
                                    children: A.caption
                                })]
                            }), (0, l.jsxs)("div", {
                                className: ee,
                                children: [j && (0, l.jsx)(c.A, {
                                    className: "text-gray-900 dark:text-gray-100",
                                    children: j
                                }), (0, l.jsx)(m.A, {
                                    tag: "h2",
                                    className: Q,
                                    "data-sentry-element": "Title",
                                    "data-sentry-source-file": "FullWidthBlock.tsx",
                                    children: B
                                }), (0, l.jsx)(x.A, {
                                    className: "mb-10 text-gray-900 dark:text-gray-100",
                                    "data-sentry-element": "Text",
                                    "data-sentry-source-file": "FullWidthBlock.tsx",
                                    children: g
                                }), (0, l.jsx)(u.A, {
                                    className: "justify-center lg:justify-normal",
                                    "data-sentry-element": "ButtonGroup",
                                    "data-sentry-source-file": "FullWidthBlock.tsx",
                                    children: e.length > 0 && e.map((e, t) => (0, l.jsx)(o.A, {
                                        variant: 0 === t ? "primary" : "secondary",
                                        outlined: 0 === t,
                                        size: V ? "small" : "medium",
                                        rounded: !0,
                                        hasArrow: !0,
                                        href: e.href,
                                        target: e.target,
                                        "data-link-location": M ?? i.V.fullWidthBlockAction,
                                        "data-link-id": `${M??i.V.fullWidthBlockAction}-action-${t}`,
                                        "data-sentry-element": "Button",
                                        "data-sentry-component": "renderActions",
                                        "data-sentry-source-file": "FullWidthBlock.tsx",
                                        children: e.label
                                    }, `full-width-block-action-${t}`))
                                })]
                            })]
                        })]
                    })
                }
        },
        69252: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var l = a(80475),
                r = a(88491),
                s = a(95719),
                n = a(65104),
                i = a(93955),
                d = a(94329),
                c = a(74615);
            let o = ({
                actions: e,
                backgroundImage: t,
                description: a,
                eyebrow: o,
                image: u,
                mediaAspectRatio: m,
                mediaPosition: x,
                size: g,
                variant: f,
                title: h,
                theme: p,
                youtubeVideo: y,
                brandfolderVideo: b,
                buttonLabel: v,
                videoInline: j,
                blockKey: k,
                isHidden: w,
                consent: N,
                featureList: A,
                productCategoryFilter: C
            }) => {
                let [L] = (0, r.useContext)(i.th);
                if (L.categories && L.categories.length > 0 && 1 === L.categories.findIndex(({
                        _id: e
                    }) => e === L.selectedCategory) && null != L.selectedSubcategory) return null;
                let {
                    subcategories: B,
                    productCatalogItems: R
                } = L.categories.find(({
                    _id: e
                }) => e === L.selectedCategory) || {}, _ = null != L.selectedSubcategory ? (B || []).find(({
                    _id: e
                }) => e === L.selectedSubcategory) : null, S = !C || C.categories?.find(e => e._id === L.selectedCategory) != null && (null == _ || !C.subcategories || C.subcategories.some(({
                    _id: e
                }) => e === L.selectedSubcategory)), P = e?.map(({
                    title: e,
                    link: t
                }) => {
                    let a = t?.linkReference?.target === "_blank" ? "_blank" : "_self";
                    return {
                        label: e,
                        href: t?.linkReference?.href.current || "/",
                        target: a
                    }
                }), M = A?.map((e, t) => ({
                    eyebrow: e.eyebrow || "",
                    title: e.title || "",
                    description: e.description || "",
                    action: e.action ? (() => {
                        let t = e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self";
                        return {
                            label: e.action.title || "",
                            href: e.action.link?.linkReference?.href.current || "#",
                            target: t
                        }
                    })() : {
                        label: "",
                        href: "#"
                    },
                    icon: e.icon?.asset?.url || "",
                    onCardClick: e => ((e, t) => {
                        if (!t && A?.[e]) {
                            let t = A[e];
                            (0, c.Ay)({
                                event: "userEvent",
                                event_name: "navigation_click",
                                properties: {
                                    navigation_click_text: t.title || "",
                                    link_type: "feature list item",
                                    form_name: t.title || "",
                                    form_id: `list-item-${e}`,
                                    block_title: h
                                }
                            })
                        }
                    })(t, e)
                }));
                return (0, l.jsx)(l.Fragment, {
                    children: !w && S && (0, l.jsx)("section", {
                        className: "dark" === p ? "dark" : "",
                        children: (0, l.jsx)(n.A, {
                            actions: P,
                            aspectRatio: "16:9" === m ? "16:9" : "1:1" === m ? "1:1" : void 0,
                            backgroundImage: t,
                            description: (0, l.jsx)(s.RK, {
                                value: a
                            }),
                            eyebrow: o,
                            image: {
                                src: (0, d.i)(u?.file?.asset?.url || "")?.auto("format")?.url() || "",
                                placeholder: u?.file?.asset.metadata?.lqip || "",
                                alt: u?.alt || "",
                                caption: u?.caption || ""
                            },
                            mediaPosition: "right" === x ? "right" : "left" === x ? "left" : void 0,
                            size: "large" === g ? "large" : "default" === g ? "default" : void 0,
                            variant: "gdc2026" === f ? "gdc2026" : "default" === f ? "default" : void 0,
                            title: h,
                            youtubeVideo: y,
                            brandfolderVideo: {
                                src: b?.muxHLSURL || ""
                            },
                            videoInline: j,
                            buttonLabel: v,
                            blockKey: k,
                            blockedMessage: N?.blockedMessage,
                            consentButtonLabel: N?.consentButtonLabel || "",
                            featureList: M
                        })
                    })
                })
            }
        },
        75180: (e, t, a) => {
            a.d(t, {
                D: () => h
            });
            var l = a(80475),
                r = a(88491),
                s = a(27331),
                n = a(81359),
                i = a(92572),
                d = a(98822),
                c = a(16335),
                o = a(18227);
            let u = (0, d.default)(() => Promise.all([a.e(87770), a.e(89058)]).then(a.t.bind(a, 23399, 23)), {
                    loadableGenerated: {
                        webpack: () => [23399]
                    },
                    ssr: !1
                }),
                m = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                x = ({
                    title: e,
                    description: t,
                    image: a,
                    video: d,
                    actions: x
                }) => {
                    let g = (0, r.useRef)(null),
                        [f, h] = (0, r.useState)(!1),
                        p = (0, s.W)(g, {
                            once: !0
                        }),
                        y = (0, n.I)(),
                        b = (0, c.A)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                            "opacity-0": f && !y && p && d.src
                        });
                    return (0, l.jsx)("section", {
                        className: "dark bg-gray-900",
                        "data-sentry-component": "FullScreenVisual",
                        "data-sentry-source-file": "FullScreenVisual.tsx",
                        children: (0, l.jsxs)("div", {
                            ref: g,
                            className: "relative box-border flex min-h-screen flex-col items-center justify-center p-5",
                            children: [a && a.src && (0, l.jsx)(i.default, {
                                fill: !0,
                                alt: a.alt ?? "",
                                src: a.src,
                                className: b
                            }), p && !y && d.src && (0, l.jsx)(u, {
                                url: d.src,
                                playing: !0,
                                loop: !0,
                                muted: !0,
                                playsinline: !0,
                                width: "100%",
                                height: "100%",
                                className: "absolute top-0 left-0 brightness-50 [&>video]:object-cover",
                                onReady: () => {
                                    h(!0)
                                },
                                config: {
                                    hlsOptions: {
                                        maxMaxBufferLength: m.maxMaxBufferLength,
                                        startLevel: m.qualityStartLevel
                                    }
                                }
                            }), (0, l.jsxs)("div", {
                                className: "relative z-10 max-w-3xl text-center text-white",
                                children: [(0, l.jsx)("h2", {
                                    className: "loco-text-heading-md",
                                    children: e
                                }), t && (0, l.jsx)("div", {
                                    className: "loco-text-body-lg mt-2 opacity-70",
                                    children: t
                                }), x && (0, l.jsxs)("div", {
                                    className: "mt-6 flex justify-center gap-4",
                                    children: [" ", x.map((e, t) => {
                                        if (e.link) return (0, l.jsx)(o.A, {
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
            var g = a(24412);
            let f = ({
                    title: e,
                    description: t,
                    image: a,
                    brandfolder: r,
                    actions: s,
                    isHidden: n
                }) => {
                    let {
                        mapFormActions: i
                    } = (0, g.V)(s), d = i(s);
                    return (0, l.jsx)(l.Fragment, {
                        children: !n && (0, l.jsx)(x, {
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
                h = e => (0, l.jsx)(r.Suspense, {
                    fallback: (0, l.jsx)("div", {
                        className: "h-screen w-full bg-black"
                    }),
                    "data-sentry-element": "React.Suspense",
                    "data-sentry-component": "FullScreenVisualBlockSuspense",
                    "data-sentry-source-file": "FullScreenVisualBlock.tsx",
                    children: (0, l.jsx)(f, {
                        ...e,
                        "data-sentry-element": "FullScreenVisualBlock",
                        "data-sentry-source-file": "FullScreenVisualBlock.tsx"
                    })
                })
        },
        91120: (e, t, a) => {
            a.d(t, {
                A: () => y
            });
            var l = a(80475),
                r = a(88491),
                s = a(16335),
                n = a(27331),
                i = a(81359),
                d = a(98822),
                c = a(92572),
                o = a(18789),
                u = a(62060);
            let m = (0, d.default)(() => Promise.all([a.e(87770), a.e(89058)]).then(a.t.bind(a, 23399, 23)), {
                    loadableGenerated: {
                        webpack: () => [23399]
                    },
                    ssr: !1
                }),
                x = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                g = ({
                    title: e,
                    titleTag: t,
                    description: a,
                    action: s
                }) => {
                    let [n, i] = (0, r.useState)(!1);
                    return (0, l.jsxs)("div", {
                        className: "relative border-t border-solid border-gray-700",
                        "data-sentry-component": "Benefit",
                        "data-sentry-source-file": "Benefits.tsx",
                        children: [(0, l.jsxs)("div", {
                            className: "pt-2 pb-8 md:flex md:gap-2",
                            children: [(0, l.jsx)(t || "h2", {
                                className: "loco-text-heading-xs md:w-6/12",
                                "data-sentry-element": "TitleTag",
                                "data-sentry-source-file": "Benefits.tsx",
                                children: e
                            }), (0, l.jsxs)("div", {
                                className: "mt-4 flex justify-between gap-4 md:mt-0 md:w-6/12",
                                children: [(0, l.jsx)("p", {
                                    className: "loco-text-body-sm max-w-md opacity-70",
                                    children: a
                                }), (0, l.jsx)("div", {
                                    className: "shrink-0 text-right",
                                    children: (0, l.jsx)(o.A, {
                                        direction: "right",
                                        ariaLabel: s.label,
                                        variant: "secondary",
                                        isForcedHover: n,
                                        tag: "span",
                                        "data-sentry-element": "ArrowButton",
                                        "data-sentry-source-file": "Benefits.tsx"
                                    })
                                })]
                            })]
                        }), (0, l.jsx)(u.N_, {
                            className: "absolute top-0 left-0 z-10 h-full w-full",
                            href: s.href,
                            title: s.label,
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
                    video: t
                }) => {
                    let a = (0, r.useRef)(null),
                        [d, o] = (0, r.useState)(!1),
                        u = (0, n.W)(a),
                        g = (0, i.I)(),
                        f = (0, s.A)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                            "opacity-0": d && !g && u && t.src
                        });
                    return (0, l.jsxs)("div", {
                        className: "relative aspect-video overflow-hidden rounded-2xl",
                        ref: a,
                        "data-sentry-component": "Visual",
                        "data-sentry-source-file": "Benefits.tsx",
                        children: [(0, l.jsx)(c.default, {
                            src: e.src,
                            placeholder: "blur",
                            blurDataURL: e.placeholder,
                            fill: !0,
                            alt: e.alt ?? "",
                            className: f,
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "Benefits.tsx"
                        }), u && !g && t.src && (0, l.jsx)(m, {
                            url: t.src,
                            playing: !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: "[&>video]:object-cover",
                            onReady: () => {
                                o(!0)
                            },
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: x.maxMaxBufferLength,
                                    startLevel: x.qualityStartLevel
                                }
                            }
                        })]
                    })
                },
                h = ({
                    image: e,
                    video: t
                }) => {
                    let a = (0, r.useRef)(null),
                        [d, o] = (0, r.useState)(!1),
                        u = (0, n.W)(a),
                        g = (0, i.I)(),
                        f = (0, s.A)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                            "opacity-0": d && !g && u && t.src
                        });
                    return (0, l.jsxs)("div", {
                        className: "pointer-events-none absolute top-0 left-0 h-full w-full object-cover opacity-30",
                        ref: a,
                        "data-sentry-component": "Background",
                        "data-sentry-source-file": "Benefits.tsx",
                        children: [(0, l.jsx)(c.default, {
                            src: e.src,
                            placeholder: "blur",
                            blurDataURL: e.placeholder,
                            fill: !0,
                            alt: e.alt ?? "",
                            className: f,
                            "data-sentry-element": "Image",
                            "data-sentry-source-file": "Benefits.tsx"
                        }), u && !g && t.src && (0, l.jsx)(m, {
                            url: t.src,
                            playing: !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: "[&>video]:object-cover",
                            onReady: () => {
                                o(!0)
                            },
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: x.maxMaxBufferLength,
                                    startLevel: x.qualityStartLevel
                                }
                            }
                        })]
                    })
                },
                p = ({
                    tagline: e,
                    visual: t,
                    background: a,
                    benefits: r = [],
                    theme: n
                }) => {
                    let i = (0, s.A)("relative bg-gray-100 px-4 pb-10 pt-8 lg:px-8 lg:pt-44", {
                        "dark bg-gray-900": !n || "dark" === n
                    });
                    return (0, l.jsxs)("div", {
                        className: i,
                        "data-sentry-component": "Benefits",
                        "data-sentry-source-file": "Benefits.tsx",
                        children: [a && (0, l.jsx)(h, {
                            ...a
                        }), (0, l.jsxs)("div", {
                            className: "relative z-10 md:grid md:grid-cols-12 md:gap-2",
                            children: [(0, l.jsx)("div", {
                                className: "relative row-start-1 md:col-start-1 md:col-end-13 lg:col-start-1 lg:col-end-9",
                                children: (0, l.jsx)("p", {
                                    className: "loco-text-heading-md",
                                    children: e
                                })
                            }), t && (0, l.jsx)("div", {
                                className: "relative col-start-1 col-end-5 row-start-2 mt-14",
                                children: (0, l.jsx)(f, {
                                    ...t
                                })
                            }), r && (0, l.jsx)("div", {
                                className: "col-start-1 col-end-13 row-start-3 mt-14 md:mt-[10rem] lg:col-start-5 lg:col-end-13",
                                children: (0, l.jsx)("div", {
                                    className: "lg:grid lg:grid-cols-8 lg:gap-2",
                                    children: (0, l.jsx)("div", {
                                        className: "lg:col-start-1 lg:col-end-9",
                                        children: r.map((e, t) => (0, l.jsx)(g, {
                                            ...e
                                        }, t))
                                    })
                                })
                            })]
                        })]
                    })
                },
                y = ({
                    tagline: e,
                    visual: t,
                    background: a,
                    benefits: r,
                    isHidden: s,
                    theme: n
                }) => (0, l.jsx)(l.Fragment, {
                    children: !s && (0, l.jsx)(p, {
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
                        theme: "dark" === n ? "dark" : "light"
                    })
                })
        }
    }
]);