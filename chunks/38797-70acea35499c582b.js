try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "054cf989-3589-44a6-bd39-175b9ba1965b", e._sentryDebugIdIdentifier = "sentry-dbid-054cf989-3589-44a6-bd39-175b9ba1965b")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [38797], {
        30658: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            var l = a(22650),
                r = a(75284);
            a(11698);
            let s = ({
                children: e
            }) => (0, l.jsx)("div", {
                className: "w-full bg-black",
                "data-sentry-component": "Footnote",
                "data-sentry-source-file": "Footnote.tsx",
                children: e
            });
            s.Content = ({
                children: e
            }) => (0, l.jsx)("div", {
                className: "footnote loco-text-body-sm container",
                "data-sentry-component": "Content",
                "data-sentry-source-file": "Footnote.tsx",
                children: e
            });
            let n = ({
                content: e,
                isHidden: t
            }) => (0, l.jsx)(l.Fragment, {
                children: !t && (0, l.jsx)(s, {
                    children: (0, l.jsx)(s.Content, {
                        children: (0, l.jsx)(r.RK, {
                            value: e,
                            components: e
                        })
                    })
                })
            })
        },
        35429: () => {},
        41607: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            var l = a(22650);
            a(11698);
            var r = a(9585),
                s = a(89515);
            let n = ({
                children: e,
                action: t,
                rounded: a = !1,
                isContained: n = !1,
                className: i = ""
            }) => (0, l.jsx)("div", {
                className: (0, r.$)("md:px-auto w-full px-4 transition-colors", {
                    "bg-gray-100 dark:bg-gray-900": !n
                }, {
                    "rounded-bl-lg rounded-br-lg": a && !n
                }, i),
                "data-sentry-component": "AnnouncementBanner",
                "data-sentry-source-file": "AnnouncementBanner.tsx",
                children: (0, l.jsxs)("div", {
                    className: (0, r.$)("container m-auto py-3 text-xs font-medium leading-4 text-gray-900 transition-colors dark:text-gray-100", {
                        "text-center": a && !n
                    }, {
                        "my-6 rounded-lg bg-gray-100 dark:bg-gray-900": n
                    }),
                    children: [e, (0, l.jsx)(s.A, {
                        className: "mx-auto ml-2 mt-0 inline-block [&>div>span]:text-xs",
                        href: t.href,
                        target: t.target,
                        size: "tiny",
                        underline: !0,
                        "data-sentry-element": "Link",
                        "data-sentry-source-file": "AnnouncementBanner.tsx",
                        children: t.title
                    })]
                })
            })
        },
        42277: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => s
            });
            var l = a(22650);
            a(11698);
            var r = a(41607);
            let s = ({
                title: e,
                action: t,
                isContained: a = !1,
                theme: s,
                isHidden: n
            }) => (0, l.jsx)(l.Fragment, {
                children: !n && (0, l.jsx)("section", {
                    className: "dark" === s ? "dark" : "",
                    children: (() => {
                        let s = t?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self";
                        return (0, l.jsx)(r.A, {
                            isContained: a,
                            action: {
                                title: t?.text || "",
                                href: t?.fieldLink?.linkReference?.href?.current || "",
                                target: s
                            },
                            children: e
                        })
                    })()
                })
            })
        },
        43580: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => c
            });
            var l = a(22650),
                r = a(11698),
                s = a(9585),
                n = a(89261),
                i = a(57674),
                o = a(62215),
                d = a(32371);
            let c = ({
                theme: e = "light",
                title: t,
                description: a,
                filters: c,
                actions: u,
                cards: m,
                variant: f = "column",
                blockKey: x,
                cardsHeading: h
            }) => {
                let [g, b] = (0, r.useState)(c?.[0]?.value || ""), p = (e, t) => {
                    let a = {
                        uniteCard: n.A,
                        cardSubscription: i.A
                    } [e?.type];
                    return (0, l.jsx)("div", {
                        className: "w-full px-0 py-1 md:w-1/2 md:px-1 md:py-1 lg:w-1/3",
                        "data-sentry-component": "renderCards",
                        "data-sentry-source-file": "Cards.tsx",
                        children: (0, l.jsx)(a, {
                            ...e,
                            variant: f,
                            blockKey: x,
                            titleTag: h,
                            "data-sentry-element": "CardComponent",
                            "data-sentry-source-file": "Cards.tsx"
                        })
                    }, `${e.title}-${t}`)
                }, y = (0, s.A)({
                    dark: "dark" === e || "collapsiblecards" === e
                }), v = (0, s.A)({
                    "bg-white dark:bg-black": "light" === e || "dark" === e,
                    "bg-transparent": "collapsiblecards" === e
                }), j = (0, s.A)("w-full flex flex-wrap justify-center", {
                    "mt-8 pb-10": (!t || !a) && "collapsiblecards" !== e
                });
                return (0, l.jsx)("section", {
                    className: y,
                    "data-sentry-component": "Cards",
                    "data-sentry-source-file": "Cards.tsx",
                    children: (0, l.jsx)("div", {
                        className: v,
                        children: (0, l.jsxs)("div", {
                            className: "collapsiblecards" === e ? "flex flex-col items-center" : "container flex flex-col items-center",
                            children: [(t || a) && (0, l.jsx)(o.A, {
                                title: t,
                                description: a
                            }), (c && c.length > 0 || u && u.length > 0) && (0, l.jsxs)("div", {
                                className: "mb-8 flex w-full flex-wrap justify-center gap-4",
                                children: [c.map((e, t) => (0, l.jsx)(d.A, {
                                    rounded: !0,
                                    outlined: !0,
                                    onPress: () => {
                                        e.onPress && e.onPress(), b(e.value)
                                    },
                                    active: g.includes(e.value),
                                    "data-link-location": `${x}-filter-${e}-${t}`,
                                    "data-link-type": "CTA",
                                    "data-sentry-element": "Button",
                                    "data-sentry-component": "renderFilters",
                                    "data-sentry-source-file": "Cards.tsx",
                                    children: e.title
                                }, `filter-${e}-${t}`)), u.map((e, t) => (0, l.jsx)(d.A, {
                                    href: e.href,
                                    rounded: !0,
                                    outlined: !0,
                                    hasArrow: !0,
                                    "data-link-location": `${x}-action-${e}-${t}`,
                                    "data-link-type": "CTA",
                                    "data-sentry-element": "Button",
                                    "data-sentry-component": "renderActions",
                                    "data-sentry-source-file": "Cards.tsx",
                                    children: e.title
                                }, `action-${e}-${t}`))]
                            }), (0, l.jsx)("div", {
                                className: j,
                                children: g ? m.filter(e => e.tags?.includes(g)).map(p) : m.map(p)
                            })]
                        })
                    })
                })
            }
        },
        44888: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => i
            });
            var l = a(22650),
                r = a(11698),
                s = a(47588),
                n = a(47586);
            let i = ({
                actions: e = [],
                brandfolder: t,
                mention: a,
                eyebrow: i,
                title: o,
                titleSize: d,
                description: c,
                image: u,
                keyFigures: m,
                isHidden: f
            }) => {
                let {
                    mapFormActions: x
                } = (0, n.V)(e), h = x(e), g = (0, r.useMemo)(() => (m?.data ?? []).map(e => e?.value?.text ? {
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
                }), [m]);
                return (0, l.jsx)(l.Fragment, {
                    children: !f && (0, l.jsx)(s.A, {
                        actions: h,
                        mention: a || "",
                        eyebrow: i || "",
                        title: o || "",
                        titleSize: "small" === d ? "small" : "large" === d ? "large" : "medium",
                        description: c || "",
                        backgroundImage: {
                            src: u?.asset.url || "",
                            placeholder: u?.asset.metadata?.lqip || ""
                        },
                        keyFigures: g,
                        video: t?.muxHLSURL || ""
                    })
                })
            }
        },
        47588: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => f
            });
            var l = a(22650),
                r = a(11698),
                s = a(88685),
                n = a(93791),
                i = a(9585),
                o = a(11254),
                d = a(46925),
                c = a(62620),
                u = a(32371);
            let m = (0, n.default)(() => Promise.all([a.e(81562), a.e(40458)]).then(a.t.bind(a, 42885, 23)), {
                    loadableGenerated: {
                        webpack: () => [42885]
                    },
                    ssr: !1
                }),
                f = ({
                    eyebrow: e,
                    title: t,
                    titleSize: a = "medium",
                    description: n,
                    backgroundImage: f,
                    actions: x = [],
                    keyFigures: h,
                    video: g,
                    mention: b,
                    fullScreen: p = !0
                }) => {
                    let y = (0, r.useRef)(null),
                        v = (0, o.W)(y, {
                            once: !0
                        }),
                        j = (0, d.I)(),
                        [k, A] = (0, r.useState)(!1),
                        w = {
                            maxMaxBufferLength: 1,
                            qualityStartLevel: 1
                        },
                        N = (0, i.A)(`font-neue-montreal mt-24 my-4 ${"small"===a?"mb-6":"mb-8"}`, {
                            "loco-text-heading-xl": "medium" === a,
                            "loco-text-headline": "large" === a,
                            "loco-text-heading-lg": "small" === a
                        }),
                        S = (0, i.A)("object-cover transition-opacity duration-1000 opacity-100", {
                            "opacity-0": k
                        });
                    return (0, l.jsxs)("section", {
                        ref: y,
                        className: "dark relative",
                        "data-sentry-component": "Headliner",
                        "data-sentry-source-file": "Headliner.tsx",
                        children: [f && (0, l.jsx)(s.default, {
                            src: f.src,
                            placeholder: "blur",
                            blurDataURL: f.placeholder,
                            fill: !0,
                            alt: "",
                            className: S,
                            sizes: "100vw"
                        }), v && !j && g && (0, l.jsx)(m, {
                            url: g || "",
                            playing: !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            onReady: () => {
                                A(!0)
                            },
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: w.maxMaxBufferLength,
                                    startLevel: w.qualityStartLevel
                                }
                            },
                            className: "absolute [&>video]:object-cover"
                        }, "hero-video"), (0, l.jsx)("div", {
                            className: "absolute h-full w-full",
                            style: {
                                backgroundImage: p ? `
    linear-gradient(180deg, rgba(1, 1, 1, 0.00) 45.08%, rgba(1, 1, 1, 0.00) 49.56%, rgba(1, 1, 1, 0.01) 53.84%, rgba(1, 1, 1, 0.02) 57.92%, rgba(1, 1, 1, 0.04) 61.84%, rgba(1, 1, 1, 0.06) 65.62%, rgba(1, 1, 1, 0.09) 69.27%, rgba(1, 1, 1, 0.12) 72.82%, rgba(1, 1, 1, 0.16) 76.29%, rgba(1, 1, 1, 0.20) 79.7%, rgba(1, 1, 1, 0.24) 83.06%, rgba(1, 1, 1, 0.29) 86.41%, rgba(1, 1, 1, 0.34) 89.75%, rgba(1, 1, 1, 0.39) 93.12%, rgba(1, 1, 1, 0.44) 96.53%, rgba(1, 1, 1, 0.50) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)` : ""
                            }
                        }), (0, l.jsxs)("div", {
                            className: `container relative flex ${p&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                            children: [(0, l.jsx)("div", {
                                className: "flex grow flex-col justify-stretch",
                                children: (0, l.jsxs)("div", {
                                    className: "flex h-full grow flex-col items-center justify-center text-center",
                                    children: [e && (0, l.jsx)("div", {
                                        className: "loco-caption-lg-semibold",
                                        children: e
                                    }), (0, l.jsx)("h1", {
                                        className: N,
                                        children: t
                                    }), n && (0, l.jsx)("div", {
                                        className: "loco-caption-sm-semibold mt-5",
                                        children: n
                                    }), x && (0, l.jsx)("div", {
                                        className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                        children: x.map((e, t) => {
                                            if (e.link) return (0, l.jsx)(u.A, {
                                                rounded: !0,
                                                hasArrow: !0,
                                                href: e.link.href,
                                                target: e.link.target,
                                                variant: 0 === t ? "primary" : "secondary",
                                                children: e.title
                                            }, `headliner-action-link-${e.title}-${t}`);
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
                                                }, `headliner-action-modal-${e.title}-${t}`)
                                            }
                                            return null
                                        })
                                    })]
                                })
                            }), h && (0, l.jsx)(c.A, {
                                keyFigures: h,
                                nested: !0
                            })]
                        }), b && (0, l.jsx)("div", {
                            className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:left-auto md:right-8 md:top-10 md:w-auto md:px-0 md:py-8",
                            children: b
                        })]
                    })
                }
        },
        53485: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => g
            });
            var l = a(22650),
                r = a(11698);
            let s = a(43580).A;
            var n = a(9585),
                i = a(89261),
                o = a(57674),
                d = a(28199);
            a(45586), a(95954);
            var c = a(63347),
                u = a(4197),
                m = a(77932);
            let f = ({
                theme: e = "light",
                slides: t,
                variant: a = "short",
                blockKey: s
            }) => {
                let [f, x] = (0, r.useState)(1), h = (0, r.useRef)(null), g = (0, u.A)(`(min-width: ${m.A.Large}px)`), b = (0, n.A)({
                    dark: "dark" === e
                }), p = (0, r.useCallback)((e, t) => {
                    x(t + 1)
                }, []), y = (0, r.useCallback)(() => {
                    h.current && h.current.slickPrev()
                }, []), v = (0, r.useCallback)(() => {
                    h.current && h.current.slickNext()
                }, []);
                return (0, l.jsx)("section", {
                    className: b,
                    "data-sentry-component": "CarouselCards",
                    "data-sentry-source-file": "CarouselCards.tsx",
                    children: (0, l.jsx)("div", {
                        className: "carousel-cards py-16 dark:bg-black",
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            children: [(0, l.jsx)("div", {
                                className: "mb-8 flex items-center justify-between",
                                children: (g && t.length > 2 || !g && t.length > 1) && (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsxs)("span", {
                                        className: "loco-text-body-md mx-2.5 mb-4 mt-2.5 block text-blue lg:mt-0",
                                        children: ["0", f, " / 0", t.length]
                                    }), (0, l.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, l.jsx)(c.A, {
                                            direction: "left",
                                            onPress: y,
                                            ariaLabel: "Prev",
                                            variant: "primary"
                                        }), (0, l.jsx)(c.A, {
                                            onPress: v,
                                            ariaLabel: "Next",
                                            variant: "primary"
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)(d.A, {
                                ...{
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
                                },
                                ref: h,
                                className: "overflow-visible",
                                "data-sentry-element": "Slider",
                                "data-sentry-source-file": "CarouselCards.tsx",
                                children: t.map((e, t) => {
                                    let r = {
                                        uniteCard: i.A,
                                        cardSubscription: o.A
                                    } [e.type];
                                    return (0, l.jsx)("div", {
                                        className: "col-span-12 md:col-span-6 lg:col-span-4",
                                        "data-sentry-component": "renderCards",
                                        "data-sentry-source-file": "CarouselCards.tsx",
                                        children: (0, l.jsx)(r, {
                                            ...e,
                                            variant: a,
                                            blockKey: `${s}-${t}`,
                                            titleTag: "p",
                                            "data-sentry-element": "CardComponent",
                                            "data-sentry-source-file": "CarouselCards.tsx"
                                        })
                                    }, `${e.title}-${t}`)
                                })
                            })]
                        })
                    })
                })
            };
            var x = a(51553),
                h = a(47586);
            let g = ({
                theme: e,
                title: t,
                description: a,
                filters: r,
                actions: n,
                variant: i,
                isCarousel: o,
                cards: d,
                cardsBlog: c,
                blockKey: u,
                isHidden: m,
                cardsHeading: g
            }) => {
                let {
                    mapFormActions: b,
                    renderModal: p
                } = (0, h.V)(d?.map(e => e.action).filter(Boolean)), y = e => {
                    let t = !!e?.action?.form,
                        a = null;
                    return e?.action ? a = {
                        label: e.action?.title ?? "",
                        href: t ? "" : e.action?.link?.linkReference?.href.current || "",
                        target: e.action?.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                        ...t ? {
                            renderModal: () => p({
                                label: e.action?.title ?? "",
                                form: e.action.form
                            })
                        } : {}
                    } : e?.pageUrl && (a = {
                        label: "View Post",
                        href: e?.pageUrl?.link?.href?.current || "",
                        target: e?.pageUrl?.target === "_blank" ? "_blank" : "_self"
                    }), {
                        type: e._type || "uniteCard",
                        title: e.title,
                        subtitle: e.subtitle || "",
                        description: e.description || e?.seo?.teaserText || e?.seo?.description || "",
                        image: e?.image ? {
                            src: e.image.file?.asset.url,
                            alt: e.image.alt,
                            placeholder: e.image.file?.asset.metadata?.lqip
                        } : e?.featuredImage ? {
                            src: e.featuredImage?.file?.asset?.url,
                            alt: e.title,
                            placeholder: e.featuredImage?.file?.asset?.metadata?.lqip
                        } : null,
                        video: {
                            src: e.brandfolder?.muxHLSURL || ""
                        },
                        action: a,
                        tags: e.tags || [],
                        videoInline: e?.videoInline
                    }
                }, v = d?.length && d?.length > 0 ? d?.map(y) : c?.length && c?.length > 0 ? c?.map(y) : [], j = r?.map((e, t) => ({
                    title: e.title,
                    value: e.value,
                    onPress: () => {
                        (0, x.A)({
                            event: "userEvent",
                            event_name: "navigation_click",
                            properties: {
                                navigation_type: "internal",
                                navigation_click_text: e.title,
                                navigation_href: window.location.href
                            }
                        })
                    }
                })) || [];
                return o ? (0, l.jsx)(f, {
                    theme: "dark" === e ? "dark" : "light",
                    variant: "stacked" === i || "column" === i || "short" === i ? i : "column",
                    slides: v,
                    blockKey: u
                }) : (0, l.jsx)(l.Fragment, {
                    children: !m && (0, l.jsx)(s, {
                        theme: "dark" === e ? "dark" : "collapsiblecards" === e ? "collapsiblecards" : "light",
                        title: t || "",
                        description: a,
                        filters: j,
                        actions: n?.map(e => ({
                            title: e?.title || "",
                            href: e.link?.linkReference?.href.current || "",
                            target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                        })) || [],
                        variant: "stacked" === i || "column" === i || "short" === i ? i : "column",
                        cards: v,
                        blockKey: u,
                        cardsHeading: "div" === g || "h2" === g || "h3" === g || "h4" === g ? g : t ? "h3" : "h2"
                    })
                })
            }
        },
        57674: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => s
            });
            var l = a(22650);
            a(11698);
            var r = a(32371);
            let s = ({
                title: e,
                subtitle: t,
                description: a,
                action: s
            }) => (0, l.jsxs)("div", {
                className: "flex h-80 flex-col justify-between rounded-lg bg-gray-900 p-4 text-white",
                "data-sentry-component": "CardSubscription",
                "data-sentry-source-file": "CardSubscription.tsx",
                children: [(0, l.jsx)("h3", {
                    className: "loco-text-heading-sm -mt-2 md:mr-20",
                    children: e
                }), (0, l.jsx)("div", {
                    className: "loco-text-body-lg opacity-70",
                    children: t
                }), (0, l.jsxs)("div", {
                    className: "flex flex-grow flex-col justify-between",
                    children: [(0, l.jsx)("div", {
                        className: "loco-text-body mt-8 opacity-70",
                        children: a
                    }), (0, l.jsx)("div", {
                        children: (0, l.jsx)(r.A, {
                            href: s?.href,
                            target: s?.target,
                            variant: "primary",
                            outlined: !0,
                            rounded: !0,
                            hasArrow: !0,
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "CardSubscription.tsx",
                            children: s?.label
                        })
                    })]
                })]
            })
        },
        62215: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => n
            });
            var l = a(22650);
            a(11698);
            var r = a(32371),
                s = a(9585);
            let n = ({
                theme: e = "light",
                actions: t,
                description: a,
                title: n,
                padding: i = !0,
                variant: o = "center",
                richText: d
            }) => {
                let c = (0, s.A)({
                    dark: "dark" === e
                });
                return (0, l.jsx)("div", {
                    className: c,
                    "data-sentry-component": "TitleDescriptionBlock",
                    "data-sentry-source-file": "TitleDescriptionBlock.tsx",
                    children: (0, l.jsx)("div", {
                        className: "dark:bg-black",
                        children: (0, l.jsxs)("div", {
                            className: `container flex flex-col ${"center"===o&&"items-center text-center"} ${i&&"pb-12 pt-14 md:pt-24"}`,
                            children: [(0, l.jsx)("div", {
                                className: "max-w-3xl",
                                children: n && (0, l.jsx)("h2", {
                                    className: "loco-text-heading-md",
                                    children: n
                                })
                            }), (a || d) && (0, l.jsxs)("div", {
                                className: (0, s.A)("loco-text-body-lg mt-6 text-gray-500 [&_a]:text-blue", "center" === o || "left" === o ? "max-w-5xl" : "max-w-3xl"),
                                children: [a, d]
                            }), t && (0, l.jsx)("div", {
                                className: "mt-8 flex justify-center gap-4",
                                children: t.map((e, t) => {
                                    let a = `title-description-block-action-${e.title}-${t}`;
                                    return 0 === t ? (0, l.jsx)(r.A, {
                                        href: e.href,
                                        target: e.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        children: e.title
                                    }, a) : (0, l.jsx)(r.A, {
                                        href: e.href,
                                        target: e.target,
                                        variant: "secondary",
                                        rounded: !0,
                                        hasArrow: !0,
                                        "data-sentry-element": "Button",
                                        "data-sentry-component": "renderActions",
                                        "data-sentry-source-file": "TitleDescriptionBlock.tsx",
                                        children: e.title
                                    }, a)
                                })
                            })]
                        })
                    })
                })
            }
        },
        81083: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => f
            });
            var l = a(22650),
                r = a(11698),
                s = a(9585),
                n = a(11254),
                i = a(46925),
                o = a(93791),
                d = a(88685);
            let c = (0, o.default)(() => Promise.all([a.e(81562), a.e(40458)]).then(a.t.bind(a, 42885, 23)), {
                    loadableGenerated: {
                        webpack: () => [42885]
                    },
                    ssr: !1
                }),
                u = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                m = ({
                    videoShowcaseA: e,
                    videoShowcaseB: t
                }) => {
                    let a = (0, r.useRef)(null),
                        [o, m] = (0, r.useState)(!1),
                        [f, x] = (0, r.useState)(!1),
                        h = (0, n.W)(a, {
                            once: !0
                        }),
                        g = (0, i.I)(),
                        b = (0, s.A)("transition-opacity duration-500 object-cover", {
                            "opacity-0": o && !g && h && e?.image?.src
                        }),
                        p = (0, s.A)("transition-opacity duration-500 object-cover", {
                            "opacity-0": f && !g && h && e?.image?.src
                        });
                    return (0, l.jsxs)("div", {
                        className: "w-full",
                        ref: a,
                        "data-sentry-component": "VideosShowcase",
                        "data-sentry-source-file": "VideosShowcase.tsx",
                        children: [(0, l.jsxs)("div", {
                            className: "relative mx-auto aspect-square max-w-[35vw]",
                            children: [e?.image?.src && (0, l.jsx)(d.default, {
                                fill: !0,
                                alt: e?.image?.alt ?? "",
                                src: e?.image?.src,
                                className: b
                            }), h && !g && e?.video?.src && (0, l.jsx)(c, {
                                url: e.video.src,
                                playing: e.video.autoplay ?? !0,
                                loop: !0,
                                muted: !0,
                                playsinline: !0,
                                width: "100%",
                                height: "100%",
                                className: "absolute left-0 top-0 [&>video]:object-cover",
                                onReady: () => {
                                    m(!0)
                                },
                                config: {
                                    hlsOptions: {
                                        maxMaxBufferLength: u.maxMaxBufferLength,
                                        startLevel: u.qualityStartLevel
                                    }
                                }
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "relative mx-auto -mt-[7vw] aspect-video w-full shadow-[0px_0px_80px_rgba(0,0,0,0.7)]",
                            children: [t?.image?.src && (0, l.jsx)(d.default, {
                                fill: !0,
                                alt: t?.image?.alt ?? "",
                                src: t?.image?.src,
                                className: p
                            }), h && !g && t?.video?.src && (0, l.jsx)(c, {
                                url: t.video.src,
                                playing: t.video.autoplay ?? !0,
                                loop: !0,
                                muted: !0,
                                playsinline: !0,
                                width: "100%",
                                height: "100%",
                                className: "absolute left-0 top-0 [&>video]:object-cover",
                                onReady: () => {
                                    x(!0)
                                },
                                config: {
                                    hlsOptions: {
                                        maxMaxBufferLength: u.maxMaxBufferLength,
                                        startLevel: u.qualityStartLevel
                                    }
                                }
                            })]
                        })]
                    })
                },
                f = ({
                    isHidden: e,
                    theme: t,
                    videoShowcaseA: a,
                    videoShowcaseB: r
                }) => {
                    let n = {
                            videoShowcaseA: {
                                image: {
                                    src: a?.image?.asset.url ?? "",
                                    placeholder: a?.image?.asset.metadata?.lqip ?? "",
                                    alt: a?.imageAlt ?? ""
                                },
                                video: {
                                    src: a?.brandfolder?.muxHLSURL ?? ""
                                }
                            },
                            videoShowcaseB: {
                                image: {
                                    src: r?.image?.asset.url ?? "",
                                    placeholder: r?.image?.asset.metadata?.lqip ?? "",
                                    alt: r?.imageAlt ?? ""
                                },
                                video: {
                                    src: r?.brandfolder?.muxHLSURL ?? ""
                                }
                            }
                        },
                        i = (0, s.A)({
                            dark: "dark" === t
                        });
                    return (0, l.jsx)(l.Fragment, {
                        children: !e && (0, l.jsx)("div", {
                            className: i,
                            children: (0, l.jsx)("div", {
                                className: "bg-white dark:bg-gray-900",
                                children: (0, l.jsx)("div", {
                                    className: "container py-28",
                                    children: (0, l.jsx)(m, {
                                        ...n
                                    })
                                })
                            })
                        })
                    })
                }
        },
        84281: (e, t, a) => {
            "use strict";
            a.d(t, {
                Ay: () => m,
                W3: () => d,
                th: () => c
            });
            var l = a(11698),
                r = a(36133),
                s = a.n(r),
                n = a(3470),
                i = a.n(n);
            let o = {
                categories: [],
                subcategories: [],
                selectedSubcategory: null,
                selectedCategory: "",
                allSubcategoriesLabel: ""
            };
            var d = function(e) {
                return e.SET_SELECTED_CATEGORY = "SET_SELECTED_CATEGORY", e.SET_SUBCATEGORIES = "SET_SUBCATEGORIES", e.SET_SELECTED_SUBCATEGORY = "SET_SELECTED_SUBCATEGORY", e.SET_ALL_SUBCATEGORIES_LABEL = "SET_ALL_SUBCATEGORIES_LABEL", e.INIT_FROM_URL_PARAMS = "INIT_FROM_URL_PARAMS", e
            }({});
            let c = (0, l.createContext)([o, () => {}]);
            c.displayName = "FiltersContext";
            let u = s()((e, t) => {
                    let {
                        type: a,
                        payload: l
                    } = t;
                    switch (a) {
                        case "SET_SELECTED_CATEGORY": {
                            let t, {
                                    categoryId: a,
                                    subcategoryId: r
                                } = l,
                                {
                                    subcategories: s,
                                    allSubcategoriesLabel: n = "",
                                    localizedAllSubcategoriesLabel: o
                                } = e.categories.find(({
                                    _id: e
                                }) => e === a) || {},
                                d = s ?? [];
                            if (void 0 === r) {
                                let e = d.find(e => e.makeDefaultLandingSubcategory);
                                t = e?._id ?? null
                            } else t = r;
                            return i()(u({
                                type: "SET_SUBCATEGORIES",
                                payload: d
                            }), u({
                                type: "SET_SELECTED_SUBCATEGORY",
                                payload: t
                            }), u({
                                type: "SET_ALL_SUBCATEGORIES_LABEL",
                                payload: o ?? n
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
                            let s = r.subcategories ?? [],
                                {
                                    _id: n,
                                    allSubcategoriesLabel: i = "",
                                    localizedAllSubcategoriesLabel: o
                                } = r,
                                d = null;
                            if (a) {
                                let e = s.find(e => e.label?.toLowerCase() === a);
                                d = e?._id ?? null
                            }
                            if (null === d) {
                                let e = s.find(e => e.makeDefaultLandingSubcategory);
                                d = e?._id ?? null
                            }
                            return {
                                ...e,
                                selectedCategory: n,
                                subcategories: s,
                                selectedSubcategory: d,
                                allSubcategoriesLabel: o ?? i
                            }
                        }
                        default:
                            return e
                    }
                }),
                m = e => (0, l.useReducer)(u, {
                    ...o,
                    ...e
                }, e => {
                    let t = e.categories[0];
                    if (!t) return e;
                    let a = t.subcategories ?? [],
                        {
                            _id: l,
                            allSubcategoriesLabel: r = "",
                            localizedAllSubcategoriesLabel: s
                        } = t,
                        n = a.find(e => e.makeDefaultLandingSubcategory);
                    return {
                        ...e,
                        selectedCategory: l,
                        subcategories: a,
                        selectedSubcategory: n?._id ?? null,
                        allSubcategoriesLabel: s ?? r
                    }
                })
        },
        86815: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => r
            });
            var l = a(22650);
            a(11698);
            let r = ({
                className: e,
                handleIsPlaying: t,
                label: a,
                ...r
            }) => (0, l.jsx)("div", {
                className: e,
                "data-sentry-component": "ButtonPlay",
                "data-sentry-source-file": "ButtonPlay.tsx",
                children: (0, l.jsx)("button", {
                    className: "transition-bg flex h-20 w-20 transform items-center justify-center rounded-full bg-blue duration-300 hover:bg-blue-dark",
                    onClick: t,
                    type: "button",
                    "aria-label": a,
                    ...r,
                    children: (0, l.jsx)("span", {
                        className: "block h-6 w-6",
                        children: (0, l.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 20 20",
                            "data-sentry-element": "svg",
                            "data-sentry-source-file": "ButtonPlay.tsx",
                            children: (0, l.jsx)("path", {
                                fill: "#fff",
                                stroke: "#fff",
                                d: "M17.95 9.998v.004a.429.429 0 0 1-.207.37l-.004.001L6.483 17.26a.45.45 0 0 1-.456.009l-.002-.001a.44.44 0 0 1-.164-.16l-.69.404.69-.405a.44.44 0 0 1-.061-.221V3.116a.439.439 0 0 1 .225-.382l.002-.001a.45.45 0 0 1 .455.008L17.74 9.627l.003.003a.429.429 0 0 1 .208.368Z",
                                "data-sentry-element": "path",
                                "data-sentry-source-file": "ButtonPlay.tsx"
                            })
                        })
                    })
                })
            })
        },
        89261: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => h
            });
            var l = a(22650),
                r = a(11698),
                s = a(9585),
                n = a(11254),
                i = a(46925),
                o = a(88685),
                d = a(93791),
                c = a(77932),
                u = a(32371),
                m = a(86815);
            let f = (0, d.default)(() => Promise.all([a.e(81562), a.e(40458)]).then(a.t.bind(a, 42885, 23)), {
                    loadableGenerated: {
                        webpack: () => [42885]
                    },
                    ssr: !1
                }),
                x = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                h = ({
                    title: e,
                    description: t,
                    image: a,
                    video: d,
                    action: h,
                    variant: g = "column",
                    videoInline: b = !0,
                    buttonLabel: p = "Play video",
                    blockKey: y,
                    titleTag: v = "h3",
                    locale: j
                }) => {
                    let k = (0, r.useRef)(null),
                        [A, w] = (0, r.useState)(!1),
                        N = (0, n.W)(k),
                        S = (0, i.I)(),
                        C = () => {
                            w(!0)
                        };
                    (0, r.useEffect)(() => {
                        b ? w(N) : N || w(!1)
                    }, [N, b]);
                    let L = (0, s.A)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                            "opacity-0 pointer-events-none": A && !S && N && d?.src
                        }),
                        _ = (0, s.A)("flex flex-col", {
                            "min-h-[14rem]": "short" !== g,
                            grow: "column" !== g,
                            "min-h-[14rem] xl:min-h-[18rem] xl:flex-row xl:gap-4": "column" === g
                        });
                    return (0, l.jsxs)("div", {
                        ref: k,
                        className: "flex h-full flex-col justify-between gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-900",
                        "data-sentry-component": "Card",
                        "data-sentry-source-file": "Card.tsx",
                        children: [(a?.src || d?.src) && (0, l.jsxs)("div", {
                            className: "relative aspect-video w-full overflow-hidden rounded-lg",
                            children: [d?.src && (0, l.jsx)(f, {
                                url: d.src,
                                playing: A && N && !S,
                                loop: !!b,
                                muted: b,
                                playsinline: b && !S,
                                width: "100%",
                                height: "100%",
                                className: "absolute left-0 top-0 [&>video]:object-cover",
                                onReady: () => {
                                    b && w(!0)
                                },
                                controls: !b,
                                config: {
                                    hlsOptions: {
                                        maxMaxBufferLength: x.maxMaxBufferLength,
                                        startLevel: x.qualityStartLevel
                                    }
                                }
                            }), a && (0, l.jsxs)("div", {
                                className: L,
                                onClick: C,
                                children: [!b && (0, l.jsx)(m.A, {
                                    handleIsPlaying: C,
                                    className: "absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: p,
                                    "data-link-location": `${y}-video-play`,
                                    "data-link-type": "CTA"
                                }), (0, l.jsx)(o.default, {
                                    src: a.src,
                                    placeholder: "blur",
                                    blurDataURL: a.placeholder,
                                    fill: !0,
                                    alt: a.alt ?? "",
                                    className: "cover absolute object-cover",
                                    sizes: `(min-width: ${c.A.Large}px) 33vw, (min-width: ${c.A.Medium}px) 50vw, 100vw`
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            className: _,
                            children: "column" !== g ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(v, {
                                    className: "loco-text-body-lg-medium -mt-2",
                                    children: e
                                }), (0, l.jsxs)("div", {
                                    className: "flex shrink-0 flex-grow flex-col justify-between",
                                    children: [(0, l.jsx)("div", {
                                        className: "loco-text-body mt-2 text-gray-700 dark:text-gray-400",
                                        children: t
                                    }), (h?.href || h?.renderModal) && (0, l.jsx)("div", {
                                        className: "mt-8",
                                        children: h?.renderModal ? h.renderModal() : (0, l.jsx)(u.A, {
                                            locale: j,
                                            href: h.href,
                                            target: h.target,
                                            outlined: !0,
                                            rounded: !0,
                                            hasArrow: !0,
                                            "data-link-location": y,
                                            "data-link-type": "CTA",
                                            children: h.label
                                        })
                                    })]
                                })]
                            }) : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(v, {
                                    className: "loco-text-body-lg-medium -mt-2 xl:w-2/5",
                                    children: e
                                }), (0, l.jsxs)("div", {
                                    className: "flex shrink-0 flex-grow flex-col justify-between xl:-mt-1 xl:w-3/5",
                                    children: [(0, l.jsx)("div", {
                                        className: "loco-text-body mt-1 xl:mt-0",
                                        children: t
                                    }), (h?.href || h?.renderModal) && (0, l.jsx)("div", {
                                        children: h?.renderModal ? h.renderModal() : (0, l.jsx)(u.A, {
                                            locale: j,
                                            href: h.href,
                                            target: h.target,
                                            outlined: !0,
                                            rounded: !0,
                                            hasArrow: !0,
                                            "data-link-location": y,
                                            "data-link-type": "CTA",
                                            children: h.label
                                        })
                                    })]
                                })]
                            })
                        })]
                    })
                }
        },
        95613: (e, t, a) => {
            "use strict";
            a.d(t, {
                A: () => g
            });
            var l = a(22650),
                r = a(11698),
                s = a(9585),
                n = a(32371),
                i = a(93791),
                o = a(11254),
                d = a(46925),
                c = a(88685);
            let u = (0, i.default)(() => Promise.all([a.e(81562), a.e(40458)]).then(a.t.bind(a, 42885, 23)), {
                    loadableGenerated: {
                        webpack: () => [42885]
                    },
                    ssr: !1
                }),
                m = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                f = ({
                    title: e,
                    eyebrow: t,
                    description: a,
                    image: i,
                    video: f,
                    visualPlacement: x,
                    action: h,
                    blockKey: g,
                    cardHeading: b = "p"
                }) => {
                    let p = (0, r.useRef)(null),
                        [y, v] = (0, r.useState)(!1),
                        j = (0, o.W)(p, {
                            once: !0
                        }),
                        k = (0, d.I)(),
                        A = (0, s.A)("bg-gray-100 relative h-full rounded-xl overflow-hidden dark:bg-black", {
                            dark: "background" === x
                        }),
                        w = (0, s.A)("z-0", {
                            "absolute top-0 left-0 w-full h-full": "background" === x,
                            "aspect-video relative mt-8 -mb-8": "default" === x
                        }, "background" === x ? "after:content after:absolute after:z-10 after:inset-0 after:bg-gradient-to-b after:from-10% after:from-black after:to-transparent after:opacity-75" : ""),
                        N = (0, s.A)("z-10 transition-opacity duration-500 object-cover", {
                            "opacity-0": y && !k && j && f?.src,
                            "": "background" === x
                        }),
                        S = (0, s.A)("absolute left-0 top-0 [&>video]:object-cover", {
                            "brightness-50 ": "background" === x
                        });
                    return (0, l.jsx)("div", {
                        className: A,
                        ref: p,
                        "data-sentry-component": "BentoCard",
                        "data-sentry-source-file": "BentoCard.tsx",
                        children: (0, l.jsxs)("div", {
                            className: "flex h-full flex-col justify-between p-8",
                            children: [(0, l.jsxs)("div", {
                                className: "relative z-10",
                                children: [t && (0, l.jsx)("span", {
                                    className: "loco-caption-sm mb-4 block opacity-70",
                                    children: t
                                }), e && (0, l.jsx)(b, {
                                    className: "loco-text-heading-xs",
                                    children: e
                                }), a && (0, l.jsx)("p", {
                                    className: "loco-text-body-sm mt-2 max-w-xs opacity-70",
                                    children: a
                                }), (h?.href || h?.renderModal) && (0, l.jsx)("div", {
                                    className: "mt-8",
                                    children: h?.renderModal ? h.renderModal() : (0, l.jsx)(n.A, {
                                        href: h.href,
                                        rounded: !0,
                                        outlined: !0,
                                        hasArrow: !0,
                                        "data-link-location": `${g}-action-${h.label}`,
                                        "data-link-type": "CTA",
                                        children: h.label
                                    }, `action-${h.label}`)
                                })]
                            }), (0, l.jsxs)("div", {
                                className: w,
                                children: [i?.src && (0, l.jsx)(c.default, {
                                    fill: !0,
                                    alt: i.alt ?? "",
                                    src: i.src,
                                    className: N
                                }), j && !k && f?.src && (0, l.jsx)(u, {
                                    url: f.src,
                                    playing: f.autoplay ?? !0,
                                    loop: !0,
                                    muted: !0,
                                    playsinline: !0,
                                    width: "100%",
                                    height: "100%",
                                    className: S,
                                    onReady: () => {
                                        v(!0)
                                    },
                                    config: {
                                        hlsOptions: {
                                            maxMaxBufferLength: m.maxMaxBufferLength,
                                            startLevel: m.qualityStartLevel
                                        }
                                    }
                                })]
                            })]
                        })
                    })
                };
            a(35429);
            let x = ({
                cards: e,
                blockKey: t,
                cardsHeading: a
            }) => {
                let r = (0, s.A)("bentoCards_grid", 1 === e.length && "is-single", e.length % 2 == 0 && "is-two-multiple", e.length % 3 == 0 && "is-three-multiple", function(e) {
                    if (e <= 1) return !1;
                    if (2 === e) return !0;
                    if (e % 2 == 0) return !1;
                    for (let t = 3; t <= Math.sqrt(e); t += 2)
                        if (e % t == 0) return !1;
                    return !0
                }(e.length) && "is-prime");
                return (0, l.jsx)("div", {
                    "data-sentry-component": "BentoCards",
                    "data-sentry-source-file": "BentoCards.tsx",
                    children: (0, l.jsx)("div", {
                        className: r,
                        children: e.map((e, r) => (0, l.jsx)("div", {
                            className: "bentoCards_item",
                            children: (0, l.jsx)(f, {
                                ...e,
                                blockKey: t,
                                cardHeading: a
                            })
                        }, `bento-card-${t}-${r}`))
                    })
                })
            };
            var h = a(47586);
            let g = ({
                theme: e,
                blockKey: t,
                isHidden: a,
                cards: r,
                bentoCardsHeading: n
            }) => {
                let {
                    renderModal: i
                } = (0, h.V)(r?.map(e => e.actions?.[0]).filter(Boolean)), o = r?.map(e => {
                    let t = e?.actions?.[0],
                        a = !!t?.form;
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
                        action: t ? (() => {
                            let e = a ? "" : t.link?.linkReference?.href.current ?? "",
                                l = t.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                                r = {
                                    label: t.title ?? "",
                                    href: e,
                                    target: l
                                };
                            return a ? {
                                ...r,
                                renderModal: () => {
                                    let e = t.form || {},
                                        a = {
                                            title: e.title || "",
                                            description: e.description || "",
                                            fields: e.fields || [],
                                            actions: e.actions || {},
                                            sfdcIntegration: t.webinarFormParametersContent?.sfdcIntegration || {}
                                        };
                                    return i({
                                        label: t.title ?? "",
                                        form: a
                                    })
                                }
                            } : r
                        })() : null
                    }
                }) ?? [], d = (0, s.A)({
                    dark: "dark" === e
                });
                return (0, l.jsx)(l.Fragment, {
                    children: !a && (0, l.jsx)("div", {
                        className: d,
                        children: (0, l.jsx)("div", {
                            className: "bg-white dark:bg-gray-900",
                            children: (0, l.jsx)("div", {
                                className: "container py-16",
                                children: (0, l.jsx)(x, {
                                    blockKey: t,
                                    theme: "dark" === e ? "dark" : "light",
                                    cards: o,
                                    cardsHeading: "h2" === n || "h3" === n || "h4" === n ? n : "p"
                                })
                            })
                        })
                    })
                })
            }
        }
    }
]);