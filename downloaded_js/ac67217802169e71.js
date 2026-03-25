(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 154038, e => {
    e.v("/_next/static/media/unity-fallback-1.9dde67e6.jpg")
}, 594333, e => {
    e.v("/_next/static/media/unity-fallback-2.ea1c5c07.jpg")
}, 522500, e => {
    e.v("/_next/static/media/unity-fallback-3.c678d706.jpg")
}, 776910, 577702, 913890, 686916, e => {
    "use strict";
    var t = e.i(853712),
        l = e.i(814507);
    e.s(["default", 0, ({
        title: e,
        action: a,
        isContained: i = !1,
        theme: r,
        isHidden: n
    }) => {
        let s;
        return (0, t.jsx)(t.Fragment, {
            children: !n && (0, t.jsx)("section", {
                className: "dark" === r ? "dark" : "",
                children: (s = a?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self", (0, t.jsx)(l.default, {
                    isContained: i,
                    action: {
                        title: a?.text || "",
                        href: a?.fieldLink?.linkReference?.href?.current || "",
                        target: s
                    },
                    children: e
                }))
            })
        })
    }], 776910);
    var a = e.i(107579),
        i = e.i(722978),
        r = e.i(567134),
        n = e.i(825610),
        s = e.i(749583);
    let o = ({
        title: e,
        subtitle: l,
        description: a,
        action: i,
        blockKey: r,
        index: o
    }) => {
        let c = r || n.trackingLocation.uniteCardSubscription,
            d = void 0 !== o ? `${c}-${o}` : c;
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
                    children: (0, t.jsx)(s.default, {
                        href: i?.href,
                        target: i?.target,
                        variant: "primary",
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        "data-link-location": d,
                        "data-link-id": `${d}-action`,
                        children: i?.label
                    })
                })]
            })]
        })
    };
    var c = e.i(131564);
    let d = ({
        theme: e = "light",
        title: l,
        description: d,
        filters: u,
        actions: f,
        cards: g,
        variant: m = "column",
        blockKey: h,
        cardsHeading: x
    }) => {
        let [p, v] = (0, a.useState)(u?.[0]?.value || ""), b = (e, l) => {
            let a = {
                uniteCard: r.default,
                cardSubscription: o
            } [e?.type];
            return (0, t.jsx)("div", {
                className: "w-full px-0 py-1 md:w-1/2 md:px-1 md:py-1 lg:w-1/3",
                children: (0, t.jsx)(a, {
                    ...e,
                    variant: m,
                    blockKey: h || n.trackingLocation.uniteCards,
                    titleTag: x,
                    index: l
                })
            }, `${e.title}-${l}`)
        }, A = (0, i.default)({
            dark: "dark" === e || "collapsiblecards" === e
        }), y = (0, i.default)({
            "bg-white dark:bg-black": "light" === e || "dark" === e,
            "bg-transparent": "collapsiblecards" === e
        }), j = (0, i.default)("w-full flex flex-wrap justify-center", {
            "mt-8 pb-10": (!l || !d) && "collapsiblecards" !== e
        });
        return (0, t.jsx)("section", {
            className: A,
            children: (0, t.jsx)("div", {
                className: y,
                children: (0, t.jsxs)("div", {
                    className: "collapsiblecards" === e ? "flex flex-col items-center" : "container flex flex-col items-center",
                    children: [(l || d) && (0, t.jsx)(c.default, {
                        title: l,
                        description: d
                    }), (u && u.length > 0 || f && f.length > 0) && (0, t.jsxs)("div", {
                        className: "mb-8 flex w-full flex-wrap justify-center gap-4",
                        children: [u.map((e, l) => (0, t.jsx)(s.default, {
                            rounded: !0,
                            outlined: !0,
                            onPress: () => {
                                e.onPress && e.onPress(), v(e.value)
                            },
                            active: p.includes(e.value),
                            "data-link-location": h || n.trackingLocation.uniteCardsFilter,
                            "data-link-id": `${h||n.trackingLocation.uniteCardsFilter}-filter-${l}`,
                            children: e.title
                        }, `filter-${e}-${l}`)), f.map((e, l) => (0, t.jsx)(s.default, {
                            href: e.href,
                            rounded: !0,
                            outlined: !0,
                            hasArrow: !0,
                            "data-link-location": h || n.trackingLocation.uniteCardsAction,
                            "data-link-id": `${h||n.trackingLocation.uniteCardsAction}-action-${l}`,
                            children: e.title
                        }, `action-${e}-${l}`))]
                    }), (0, t.jsx)("div", {
                        className: j,
                        children: p ? g.filter(e => e.tags?.includes(p)).map(b) : g.map(b)
                    })]
                })
            })
        })
    };
    e.s(["default", 0, d], 577702);
    var u = e.i(120602),
        f = e.i(998569),
        g = e.i(430215),
        m = e.i(783078);
    let h = ({
        theme: e = "light",
        slides: l,
        variant: n = "short",
        blockKey: s,
        title: c
    }) => {
        let [d, h] = (0, a.useState)(0), x = (0, a.useRef)(null), p = (0, g.default)(`(min-width: ${m.default.Large}px)`), v = "gdc2026" === n, b = (0, i.default)({
            dark: "dark" === e
        }), A = (0, a.useCallback)((e, t) => {
            h(t)
        }, []), y = (0, a.useCallback)(() => {
            x.current && x.current.slickPrev()
        }, []), j = (0, a.useCallback)(() => {
            x.current && x.current.slickNext()
        }, []), k = {
            dots: !1,
            infinite: !1,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: !1,
            beforeChange: A,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1
                }
            }]
        }, w = (e, l) => {
            let a = {
                uniteCard: r.default,
                cardSubscription: o
            } [e.type];
            return (0, t.jsx)("div", {
                className: v ? "col-span-12 h-full" : "col-span-12 md:col-span-6 lg:col-span-4",
                children: (0, t.jsx)(a, {
                    ...e,
                    variant: v ? "horizontal" : n,
                    blockKey: `${s}-${l}`,
                    titleTag: "p"
                })
            }, `carousel-card-${s}-${l}-${e.title}`)
        }, N = () => {
            let a = p ? 2 : 1,
                r = l.length - a + 1;
            return (0, t.jsx)("div", {
                className: "flex gap-2",
                children: Array.from({
                    length: r
                }).map((l, a) => (0, t.jsx)("button", {
                    className: (0, i.default)("h-2 w-2 rounded-full transition-all", d === a ? "bg-white" : "dark" === e ? "bg-gray-600" : "bg-gray-300"),
                    "aria-label": `Go to slide ${a+1}`,
                    "aria-current": d === a ? "true" : "false"
                }, a))
            })
        }, L = p ? 2 : 1, R = l.length - L + 1, E = 0 === d, B = d >= R - 1, C = p && l.length > 2 || !p && l.length > 1;
        return v ? (0, t.jsx)("section", {
            className: b,
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
                        }), C && (0, t.jsxs)(t.Fragment, {
                            children: [(0, t.jsx)("div", {
                                className: "flex flex-1 items-center justify-center",
                                children: N()
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-1 items-center justify-end gap-2",
                                children: [(0, t.jsx)(f.default, {
                                    direction: "left",
                                    onPress: y,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: E
                                }), (0, t.jsx)(f.default, {
                                    onPress: j,
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
                        ...k,
                        ref: x,
                        key: `slider-${l.length}`,
                        className: "overflow-hidden"
                    }, l.map(w)), C && (0, t.jsxs)("div", {
                        className: "mt-8 flex flex-col items-center gap-4 lg:hidden",
                        children: [N(), (0, t.jsxs)("div", {
                            className: "flex gap-2",
                            children: [(0, t.jsx)(f.default, {
                                direction: "left",
                                onPress: y,
                                ariaLabel: "Previous slide",
                                variant: "primary",
                                isDisabled: E
                            }), (0, t.jsx)(f.default, {
                                onPress: j,
                                ariaLabel: "Next slide",
                                variant: "primary",
                                isDisabled: B
                            })]
                        })]
                    })]
                })
            })
        }) : (0, t.jsx)("section", {
            className: b,
            children: (0, t.jsx)("div", {
                className: "carousel-cards py-16 dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: "container",
                    children: [(0, t.jsx)("div", {
                        className: "mb-8 flex items-center justify-between",
                        children: C && (0, t.jsxs)(t.Fragment, {
                            children: [N(), (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)(f.default, {
                                    direction: "left",
                                    onPress: y,
                                    ariaLabel: "Previous slide",
                                    variant: "primary",
                                    isDisabled: E
                                }), (0, t.jsx)(f.default, {
                                    onPress: j,
                                    ariaLabel: "Next slide",
                                    variant: "primary",
                                    isDisabled: B
                                })]
                            })]
                        })
                    }), (0, a.createElement)(u.default, {
                        ...k,
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
    let v = [{
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
        actions: r,
        variant: n,
        isCarousel: s,
        cards: o,
        cardsBlog: c,
        newsItems: u,
        blogItems: f,
        blockKey: g,
        isHidden: m,
        cardsHeading: b
    }) => {
        let {
            mapFormActions: A,
            renderModal: y
        } = (0, p.useFormModal)(o?.map(e => e.action).filter(Boolean)), j = (e, t = 0, l = !1) => {
            let a = !!e?.action?.form,
                i = null;
            e?.action ? i = {
                label: e.action?.title,
                href: a ? "" : e.action?.link?.linkReference?.href.current || "",
                target: e.action?.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                ...a ? {
                    renderModal: () => y({
                        label: e.action?.title ?? "",
                        form: e.action.form
                    })
                } : {}
            } : e?.pageUrl && (i = {
                href: e?.pageUrl?.link?.href?.current || "",
                target: e?.pageUrl?.target === "_blank" ? "_blank" : "_self"
            });
            let r = null;
            if (e?.image) r = {
                src: e.image.file?.asset.url,
                alt: e.image.alt,
                placeholder: e.image.file?.asset.metadata?.lqip
            };
            else if (e?.featuredImage) r = {
                src: e.featuredImage?.file?.asset?.url,
                alt: e.title,
                placeholder: e.featuredImage?.file?.asset?.metadata?.lqip
            };
            else if (l) {
                let l = v[t % 3];
                r = {
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
                image: r,
                video: {
                    src: e.brandfolder?.muxHLSURL || ""
                },
                action: i,
                tags: e.tags || [],
                videoInline: e?.videoInline
            }
        }, k = s ? (() => {
            if (!o || 0 === o.length) return c?.length && c?.length > 0 ? c?.map((e, t) => j(e, t)) : [];
            let e = 0,
                t = 0;
            return o.map((l, a) => {
                if ("cardDynamic" === l._type) {
                    if ("news" === l.contentType && u && e < u.length) {
                        let t = u[e],
                            l = e;
                        return e++, j(t, l, !0)
                    }
                    if ("blog" === l.contentType && f && t < f.length) {
                        let e = f[t];
                        return t++, j(e, a)
                    }
                    return null
                }
                return j(l, a)
            }).filter(e => null !== e)
        })() : o?.length && o?.length > 0 ? o?.filter(e => "cardDynamic" !== e._type).map((e, t) => j(e, t)) : c?.length && c?.length > 0 ? c?.map((e, t) => j(e, t)) : [], w = i?.map((e, t) => ({
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
        return s ? (0, t.jsx)(h, {
            theme: "dark" === e ? "dark" : "light",
            variant: "stacked" === n || "column" === n || "short" === n || "gdc2026" === n ? n : "column",
            slides: k,
            blockKey: g,
            title: l || void 0
        }) : (0, t.jsx)(t.Fragment, {
            children: !m && (0, t.jsx)(d, {
                theme: "dark" === e ? "dark" : "collapsiblecards" === e ? "collapsiblecards" : "light",
                title: l || "",
                description: a,
                filters: w,
                actions: r?.map(e => ({
                    title: e?.title || "",
                    href: e.link?.linkReference?.href.current || "",
                    target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                })) || [],
                variant: "stacked" === n || "column" === n || "short" === n ? n : "column",
                cards: k,
                blockKey: g,
                cardsHeading: "div" === b || "h2" === b || "h3" === b || "h4" === b ? b : l ? "h3" : "h2"
            })
        })
    }], 913890);
    var b = e.i(654816);
    let A = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "w-full bg-black",
        children: e
    });
    A.Content = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "footnote loco-text-body-sm container",
        children: e
    }), e.s(["default", 0, ({
        content: e,
        isHidden: l
    }) => (0, t.jsx)(t.Fragment, {
        children: !l && (0, t.jsx)(A, {
            children: (0, t.jsx)(A.Content, {
                children: (0, t.jsx)(b.PortableText, {
                    value: e,
                    components: e
                })
            })
        })
    })], 686916)
}, 742958, e => {
    "use strict";
    var t = e.i(853712),
        l = e.i(722978),
        a = e.i(107579),
        i = e.i(749583),
        r = e.i(851931),
        n = e.i(32627),
        s = e.i(711036),
        o = e.i(993358);
    let c = (0, r.default)(() => e.A(824429), {
            loadableGenerated: {
                modules: [467761]
            },
            ssr: !1
        }),
        d = ({
            title: e,
            eyebrow: r,
            description: d,
            image: u,
            video: f,
            visualPlacement: g,
            action: m,
            blockKey: h,
            cardHeading: x = "p"
        }) => {
            let p = (0, a.useRef)(null),
                [v, b] = (0, a.useState)(!1),
                A = (0, n.useInView)(p, {
                    once: !0
                }),
                y = (0, s.useReducedMotion)(),
                j = (0, l.default)("bg-gray-100 relative h-full rounded-xl overflow-hidden dark:bg-gray-900", {
                    dark: "background" === g
                }),
                k = (0, l.default)("z-0", {
                    "absolute top-0 left-0 w-full h-full": "background" === g,
                    "aspect-video relative mt-8 -mb-8": "default" === g
                }, "background" === g ? "after:content after:absolute after:z-10 after:inset-0 after:bg-gradient-to-b after:from-10% after:from-black after:to-transparent after:opacity-75" : ""),
                w = (0, l.default)("z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": v && !y && A && f?.src,
                    "": "background" === g
                }),
                N = (0, l.default)("absolute left-0 top-0 [&>video]:object-cover", {
                    "brightness-50 ": "background" === g
                });
            return (0, t.jsx)("div", {
                className: j,
                ref: p,
                children: (0, t.jsxs)("div", {
                    className: "flex h-full flex-col justify-between p-8",
                    children: [(0, t.jsxs)("div", {
                        className: "relative z-10",
                        children: [r && (0, t.jsx)("span", {
                            className: "loco-caption-sm mb-4 block opacity-70",
                            children: r
                        }), e && (0, t.jsx)(x, {
                            className: "loco-text-heading-xs",
                            children: e
                        }), d && (0, t.jsx)("p", {
                            className: "loco-text-body-sm mt-2 max-w-xs opacity-70",
                            children: d
                        }), (m?.href || m?.renderModal) && (0, t.jsx)("div", {
                            className: "mt-8",
                            children: m?.renderModal ? m.renderModal() : (0, t.jsx)(i.default, {
                                href: m.href,
                                rounded: !0,
                                outlined: !0,
                                hasArrow: !0,
                                "data-link-location": `${h}-action-${m.label}`,
                                "data-link-id": `${h}-action`,
                                "data-link-type": "CTA",
                                children: m.label
                            }, `action-${m.label}`)
                        })]
                    }), (0, t.jsxs)("div", {
                        className: k,
                        children: [u?.src && (0, t.jsx)(o.default, {
                            fill: !0,
                            alt: u.alt ?? "",
                            src: u.src,
                            className: w
                        }), A && !y && f?.src && (0, t.jsx)(c, {
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
            blockKey: a,
            cardsHeading: i
        }) => {
            let r = (0, l.default)("bentoCards_grid", 1 === e.length && "is-single", e.length % 2 == 0 && "is-two-multiple", e.length % 3 == 0 && "is-three-multiple", function(e) {
                if (e <= 1) return !1;
                if (2 === e) return !0;
                if (e % 2 == 0) return !1;
                for (let t = 3; t <= Math.sqrt(e); t += 2)
                    if (e % t == 0) return !1;
                return !0
            }(e.length) && "is-prime");
            return (0, t.jsx)("div", {
                children: (0, t.jsx)("div", {
                    className: r,
                    children: e.map((e, l) => (0, t.jsx)("div", {
                        className: "bentoCards_item",
                        children: (0, t.jsx)(d, {
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
        cards: r,
        bentoCardsHeading: n
    }) => {
        let {
            renderModal: s
        } = (0, f.useFormModal)(r?.map(e => e.actions?.[0]).filter(Boolean)), o = r?.map(e => {
            let t, l, a, i = e?.actions?.[0],
                r = !!i?.form;
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
                action: i ? (t = r ? "" : i.link?.linkReference?.href.current ?? "", l = i.link?.linkReference?.target === "_blank" ? "_blank" : "_self", a = {
                    label: i.title ?? "",
                    href: t,
                    target: l
                }, r ? {
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
                        return s({
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
                            cards: o,
                            cardsHeading: "h2" === n || "h3" === n || "h4" === n ? n : "p"
                        })
                    })
                })
            })
        })
    }], 742958)
}, 50184, e => {
    "use strict";
    var t = e.i(853712),
        l = e.i(722978),
        a = e.i(32627),
        i = e.i(711036),
        r = e.i(851931),
        n = e.i(993358),
        s = e.i(107579);
    let o = (0, r.default)(() => e.A(824429), {
            loadableGenerated: {
                modules: [467761]
            },
            ssr: !1
        }),
        c = ({
            videoShowcaseA: e,
            videoShowcaseB: r
        }) => {
            let c = (0, s.useRef)(null),
                [d, u] = (0, s.useState)(!1),
                [f, g] = (0, s.useState)(!1),
                m = (0, a.useInView)(c, {
                    once: !0
                }),
                h = (0, i.useReducedMotion)(),
                x = (0, l.default)("transition-opacity duration-500 object-cover", {
                    "opacity-0": d && !h && m && e?.image?.src
                }),
                p = (0, l.default)("transition-opacity duration-500 object-cover", {
                    "opacity-0": f && !h && m && e?.image?.src
                });
            return (0, t.jsxs)("div", {
                className: "w-full",
                ref: c,
                children: [(0, t.jsxs)("div", {
                    className: "relative mx-auto aspect-square max-w-[35vw]",
                    children: [e?.image?.src && (0, t.jsx)(n.default, {
                        fill: !0,
                        alt: e?.image?.alt ?? "",
                        src: e?.image?.src,
                        className: x
                    }), m && !h && e?.video?.src && (0, t.jsx)(o, {
                        url: e.video.src,
                        playing: e.video.autoplay ?? !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 [&>video]:object-cover",
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
                }), (0, t.jsxs)("div", {
                    className: "relative mx-auto -mt-[7vw] aspect-video w-full shadow-[0px_0px_80px_rgba(0,0,0,0.7)]",
                    children: [r?.image?.src && (0, t.jsx)(n.default, {
                        fill: !0,
                        alt: r?.image?.alt ?? "",
                        src: r?.image?.src,
                        className: p
                    }), m && !h && r?.video?.src && (0, t.jsx)(o, {
                        url: r.video.src,
                        playing: r.video.autoplay ?? !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 [&>video]:object-cover",
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
                })]
            })
        };
    e.s(["default", 0, ({
        isHidden: e,
        theme: a,
        videoShowcaseA: i,
        videoShowcaseB: r
    }) => {
        let n = {
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
                        src: r?.image?.asset.url ?? "",
                        placeholder: r?.image?.asset.metadata?.lqip ?? "",
                        alt: r?.imageAlt ?? ""
                    },
                    video: {
                        src: r?.brandfolder?.muxHLSURL ?? ""
                    }
                }
            },
            s = (0, l.default)({
                dark: "dark" === a
            });
        return (0, t.jsx)(t.Fragment, {
            children: !e && (0, t.jsx)("div", {
                className: s,
                children: (0, t.jsx)("div", {
                    className: "bg-white dark:bg-gray-900",
                    children: (0, t.jsx)("div", {
                        className: "container py-28",
                        children: (0, t.jsx)(c, {
                            ...n
                        })
                    })
                })
            })
        })
    }], 50184)
}, 567134, e => {
    "use strict";
    var t = e.i(853712),
        l = e.i(107579),
        a = e.i(722978),
        i = e.i(32627),
        r = e.i(711036),
        n = e.i(993358),
        s = e.i(851931),
        o = e.i(825610),
        c = e.i(783078),
        d = e.i(749583),
        u = e.i(186114),
        f = e.i(278466);
    let g = (0, s.default)(() => e.A(824429), {
        loadableGenerated: {
            modules: [467761]
        },
        ssr: !1
    });
    e.s(["default", 0, ({
        title: e,
        description: s,
        image: m,
        video: h,
        action: x,
        variant: p = "column",
        videoInline: v = !0,
        buttonLabel: b = "Play video",
        blockKey: A,
        titleTag: y = "h3",
        locale: j,
        index: k
    }) => {
        let w = A || o.trackingLocation.uniteCard,
            N = void 0 !== k ? `${w}-${k}` : w,
            L = (0, l.useRef)(null),
            [R, E] = (0, l.useState)(!1),
            B = (0, i.useInView)(L),
            C = (0, r.useReducedMotion)(),
            M = () => {
                E(!0)
            };
        (0, l.useEffect)(() => {
            v ? E(B) : B || E(!1)
        }, [B, v]);
        let F = (0, a.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": R && !C && B && h?.src
            }),
            Q = "horizontal" === p && x,
            I = (0, a.default)("flex flex-col", {
                "min-h-[14rem]": "stacked" === p || "column" === p,
                grow: "column" !== p && "horizontal" !== p,
                "min-h-[14rem] xl:min-h-[18rem] xl:flex-row xl:gap-4": "column" === p
            }),
            S = (0, a.default)("rounded-lg bg-gray-100 p-4 dark:bg-gray-900", {
                "h-full": "horizontal" !== p,
                "group h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-pointer": "horizontal" === p && Q,
                "h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-auto": "horizontal" === p && !Q
            }),
            P = (0, a.default)("relative overflow-hidden rounded-lg", {
                "aspect-video w-full": "horizontal" !== p,
                "aspect-video w-full xl:flex-shrink-0 xl:self-start xl:max-w-1/2": "horizontal" === p
            }),
            W = (0, a.default)("cover absolute object-cover", {
                "transition-transform duration-400 group-hover:scale-110": "horizontal" === p && Q
            }),
            $ = (0, t.jsxs)("div", {
                ref: L,
                className: S,
                children: ["horizontal" === p && Q && (0, t.jsx)("div", {
                    className: "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-400 [background:linear-gradient(to_top,#000_0%,#666_60%,#666_100%)] group-hover:opacity-100"
                }), (0, t.jsxs)("div", {
                    className: (0, a.default)({
                        "relative z-10 flex h-full flex-col gap-6 rounded-lg bg-gray-100 p-3 xl:w-full xl:flex-row dark:bg-gray-900": "horizontal" === p,
                        "flex h-full flex-col justify-between gap-4": "horizontal" !== p
                    }),
                    children: [(m?.src || h?.src) && (0, t.jsxs)("div", {
                        className: P,
                        children: [h?.src && (0, t.jsx)(g, {
                            url: h.src,
                            playing: R && B && !C,
                            loop: !!v,
                            muted: v,
                            playsinline: v && !C,
                            width: "100%",
                            height: "100%",
                            className: "absolute top-0 left-0 [&>video]:object-cover",
                            onReady: () => {
                                v && E(!0)
                            },
                            controls: !v,
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        }), m && (0, t.jsxs)("div", {
                            className: F,
                            onClick: M,
                            children: [!v && (0, t.jsx)(u.default, {
                                handleIsPlaying: M,
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
                                className: W,
                                sizes: `(min-width: ${c.default.Large}px) 33vw, (min-width: ${c.default.Medium}px) 50vw, 100vw`
                            })]
                        })]
                    }), (0, t.jsx)("div", {
                        className: (0, a.default)(I),
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
                                    children: x?.renderModal ? x.renderModal() : (0, t.jsx)(d.default, {
                                        locale: j,
                                        href: Q ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: Q ? "span" : "button",
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
                                    children: x?.renderModal ? x.renderModal() : (0, t.jsx)(d.default, {
                                        locale: j,
                                        href: Q ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: Q ? "span" : "button",
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
                                    children: x?.renderModal ? x.renderModal() : (0, t.jsx)(d.default, {
                                        locale: j,
                                        href: Q ? void 0 : x.href,
                                        target: x.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: Q ? "span" : "button",
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
        return Q ? (0, t.jsx)(f.Link, {
            href: x.href,
            target: x.target,
            className: "cursor-pointer",
            "data-link-location": N,
            "data-link-id": `${N}-link-wrapper`,
            children: $
        }) : $
    }], 567134)
}, 814507, e => {
    "use strict";
    var t = e.i(853712),
        l = e.i(722978),
        a = e.i(146911);
    e.s(["default", 0, ({
        children: e,
        action: i,
        rounded: r = !1,
        isContained: n = !1,
        className: s = ""
    }) => (0, t.jsx)("div", {
        className: (0, l.clsx)("md:px-auto w-full px-4 transition-colors", {
            "bg-gray-100 dark:bg-gray-900": !n
        }, {
            "rounded-br-lg rounded-bl-lg": r && !n
        }, s),
        children: (0, t.jsxs)("div", {
            className: (0, l.clsx)("container m-auto py-3 text-xs leading-4 font-medium text-gray-900 transition-colors dark:text-gray-100", {
                "text-center": r && !n
            }, {
                "my-6 rounded-lg bg-gray-100 dark:bg-gray-900": n
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
}, 854217, 714877, 883904, 668747, 638099, 860193, e => {
    "use strict";
    let t, l;
    var a = e.i(134026),
        i = e.i(348367),
        r = e.i(107579),
        n = e.i(175602),
        s = e.i(347248);

    function o(e, t) {
        let l, a = () => {
            let {
                currentTime: a
            } = t, i = (null === a ? 0 : a.value) / 100;
            l !== i && e(i), l = i
        };
        return s.frame.preUpdate(a, !0), () => (0, s.cancelFrame)(a)
    }
    e.s(["observeTimeline", () => o], 714877);
    var c = e.i(815965),
        d = e.i(361979),
        u = e.i(369710);
    let f = new WeakMap,
        g = (e, t, l) => (a, i) => i && i[0] ? i[0][e + "Size"] : (0, d.isSVGElement)(a) && "getBBox" in a ? a.getBBox()[t] : a[l],
        m = g("inline", "width", "offsetWidth"),
        h = g("block", "height", "offsetHeight");

    function x({
        target: e,
        borderBoxSize: t
    }) {
        f.get(e)?.forEach(l => {
            l(e, {
                get width() {
                    return m(e, t)
                },
                get height() {
                    return h(e, t)
                }
            })
        })
    }

    function p(e) {
        e.forEach(x)
    }
    let v = new Set;

    function b(e, a) {
        let i;
        return "function" == typeof e ? (v.add(e), l || (l = () => {
            let e = {
                get width() {
                    return window.innerWidth
                },
                get height() {
                    return window.innerHeight
                }
            };
            v.forEach(t => t(e))
        }, window.addEventListener("resize", l)), () => {
            v.delete(e), v.size || "function" != typeof l || (window.removeEventListener("resize", l), l = void 0)
        }) : (!t && "u" > typeof ResizeObserver && (t = new ResizeObserver(p)), (i = (0, u.resolveElements)(e)).forEach(e => {
            let l = f.get(e);
            l || (l = new Set, f.set(e, l)), l.add(a), t?.observe(e)
        }), () => {
            i.forEach(e => {
                let l = f.get(e);
                l?.delete(a), l?.size || t?.unobserve(e)
            })
        })
    }
    e.s(["resize", () => b], 883904);
    var A = e.i(747113),
        y = e.i(795153);
    let j = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }),
        k = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };

    function w(e, t, l, a) {
        let i = l[t],
            {
                length: r,
                position: n
            } = k[t],
            s = i.current,
            o = l.time;
        i.current = e[`scroll${n}`], i.scrollLength = e[`scroll${r}`] - e[`client${r}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = (0, A.progress)(0, i.scrollLength, i.current);
        let c = a - o;
        i.velocity = c > 50 ? 0 : (0, y.velocityPerSecond)(i.current - s, c)
    }
    e.i(252495);
    var N = e.i(279126),
        L = e.i(605244),
        R = e.i(483032),
        E = e.i(812064);
    let B = {
        start: 0,
        center: .5,
        end: 1
    };

    function C(e, t, l = 0) {
        let a = 0;
        if (e in B && (e = B[e]), "string" == typeof e) {
            let t = parseFloat(e);
            e.endsWith("px") ? a = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? a = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? a = t / 100 * document.documentElement.clientHeight : e = t
        }
        return "number" == typeof e && (a = t * e), l + a
    }
    let M = [0, 0],
        F = [
            [0, 0],
            [1, 1]
        ],
        Q = {
            x: 0,
            y: 0
        },
        I = new WeakMap,
        S = new WeakMap,
        P = new WeakMap,
        W = e => e === document.scrollingElement ? window : e;

    function $(e, {
        container: t = document.scrollingElement,
        ...l
    } = {}) {
        if (!t) return n.noop;
        let a = P.get(t);
        a || (a = new Set, P.set(t, a));
        let i = function(e, t, l, a = {}) {
            return {
                measure: t => {
                    ! function(e, t = e, l) {
                        if (l.x.targetOffset = 0, l.y.targetOffset = 0, t !== e) {
                            let a = t;
                            for (; a && a !== e;) l.x.targetOffset += a.offsetLeft, l.y.targetOffset += a.offsetTop, a = a.offsetParent
                        }
                        l.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, l.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, l.x.containerLength = e.clientWidth, l.y.containerLength = e.clientHeight
                    }(e, a.target, l), w(e, "x", l, t), w(e, "y", l, t), l.time = t, (a.offset || a.target) && function(e, t, l) {
                        let {
                            offset: a = F
                        } = l, {
                            target: i = e,
                            axis: r = "y"
                        } = l, n = "y" === r ? "height" : "width", s = i !== e ? function(e, t) {
                            let l = {
                                    x: 0,
                                    y: 0
                                },
                                a = e;
                            for (; a && a !== t;)
                                if ((0, E.isHTMLElement)(a)) l.x += a.offsetLeft, l.y += a.offsetTop, a = a.offsetParent;
                                else if ("svg" === a.tagName) {
                                let e = a.getBoundingClientRect(),
                                    t = (a = a.parentElement).getBoundingClientRect();
                                l.x += e.left - t.left, l.y += e.top - t.top
                            } else if (a instanceof SVGGraphicsElement) {
                                let {
                                    x: e,
                                    y: t
                                } = a.getBBox();
                                l.x += e, l.y += t;
                                let i = null,
                                    r = a.parentNode;
                                for (; !i;) "svg" === r.tagName && (i = r), r = a.parentNode;
                                a = i
                            } else break;
                            return l
                        }(i, e) : Q, o = i === e ? {
                            width: e.scrollWidth,
                            height: e.scrollHeight
                        } : "getBBox" in i && "svg" !== i.tagName ? i.getBBox() : {
                            width: i.clientWidth,
                            height: i.clientHeight
                        }, c = {
                            width: e.clientWidth,
                            height: e.clientHeight
                        };
                        t[r].offset.length = 0;
                        let d = !t[r].interpolate,
                            u = a.length;
                        for (let e = 0; e < u; e++) {
                            let l = function(e, t, l, a) {
                                let i = Array.isArray(e) ? e : M,
                                    r = 0;
                                return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, B[e] ? e : "0"]), (r = C(i[0], l, a)) - C(i[1], t)
                            }(a[e], c[n], o[n], s[r]);
                            d || l === t[r].interpolatorOffsets[e] || (d = !0), t[r].offset[e] = l
                        }
                        d && (t[r].interpolate = (0, N.interpolate)(t[r].offset, (0, L.defaultOffset)(a), {
                            clamp: !1
                        }), t[r].interpolatorOffsets = [...t[r].offset]), t[r].progress = (0, R.clamp)(0, 1, t[r].interpolate(t[r].current))
                    }(e, l, a)
                },
                notify: () => t(l)
            }
        }(t, e, {
            time: 0,
            x: j(),
            y: j()
        }, l);
        if (a.add(i), !I.has(t)) {
            let e = () => {
                    for (let e of a) e.measure(s.frameData.timestamp);
                    s.frame.preUpdate(l)
                },
                l = () => {
                    for (let e of a) e.notify()
                },
                i = () => s.frame.read(e);
            I.set(t, i);
            let r = W(t);
            window.addEventListener("resize", i, {
                passive: !0
            }), t !== document.documentElement && S.set(t, b(t, i)), r.addEventListener("scroll", i, {
                passive: !0
            }), i()
        }
        let r = I.get(t);
        return s.frame.read(r, !1, !0), () => {
            (0, s.cancelFrame)(r);
            let e = P.get(t);
            if (!e || (e.delete(i), e.size)) return;
            let l = I.get(t);
            I.delete(t), l && (W(t).removeEventListener("scroll", l), S.get(t)?.(), window.removeEventListener("resize", l))
        }
    }
    let z = new Map;

    function D({
        source: e,
        container: t,
        ...l
    }) {
        var a;
        let i, r, {
            axis: n
        } = l;
        e && (t = e);
        let s = z.get(t) ?? new Map;
        z.set(t, s);
        let o = l.target ?? "self",
            d = s.get(o) ?? {},
            u = n + (l.offset ?? []).join(",");
        return d[u] || (d[u] = !l.target && (0, c.supportsScrollTimeline)() ? new ScrollTimeline({
            source: t,
            axis: n
        }) : (a = {
            container: t,
            ...l
        }, i = {
            value: 0
        }, r = $(e => {
            i.value = 100 * e[a.axis].progress
        }, a), {
            currentTime: i,
            cancel: r
        })), d[u]
    }
    var T = e.i(960480),
        K = e.i(936773);
    let _ = () => ({
            scrollX: (0, a.motionValue)(0),
            scrollY: (0, a.motionValue)(0),
            scrollXProgress: (0, a.motionValue)(0),
            scrollYProgress: (0, a.motionValue)(0)
        }),
        U = e => !!e && !e.current;

    function H({
        container: e,
        target: t,
        ...l
    } = {}) {
        let a = (0, T.useConstant)(_),
            s = (0, r.useRef)(null),
            c = (0, r.useRef)(!1),
            d = (0, r.useCallback)(() => (s.current = function(e, {
                axis: t = "y",
                container: l = document.scrollingElement,
                ...a
            } = {}) {
                var i, r;
                let s;
                if (!l) return n.noop;
                let c = {
                    axis: t,
                    container: l,
                    ...a
                };
                return "function" == typeof e ? (i = e, r = c, 2 === i.length ? $(e => {
                    i(e[r.axis].progress, e)
                }, r) : o(i, D(r))) : (s = D(c), e.attachTimeline({
                    timeline: c.target ? void 0 : s,
                    observe: e => (e.pause(), o(t => {
                        e.time = e.iterationDuration * t
                    }, s))
                }))
            }((e, {
                x: t,
                y: l
            }) => {
                a.scrollX.set(t.current), a.scrollXProgress.set(t.progress), a.scrollY.set(l.current), a.scrollYProgress.set(l.progress)
            }, {
                ...l,
                container: e?.current || void 0,
                target: t?.current || void 0
            }), () => {
                s.current?.()
            }), [e, t, JSON.stringify(l.offset)]);
        return (0, K.useIsomorphicLayoutEffect)(() => {
            if (c.current = !1, !(U(e) || U(t))) return d();
            c.current = !0
        }, [d]), (0, r.useEffect)(() => c.current ? ((0, i.invariant)(!U(e), "Container ref is defined but not hydrated", "use-scroll-ref"), (0, i.invariant)(!U(t), "Target ref is defined but not hydrated", "use-scroll-ref"), d()) : void 0, [d]), a
    }

    function J(...e) {
        let t = !Array.isArray(e[0]),
            l = t ? 0 : -1,
            a = e[0 + l],
            i = e[1 + l],
            r = e[2 + l],
            n = e[3 + l],
            s = (0, N.interpolate)(i, r, n);
        return t ? s(a) : s
    }
    e.s(["useScroll", () => H], 854217), e.s(["transform", () => J], 668747);
    var V = e.i(320620);

    function G(e) {
        let t = (0, T.useConstant)(() => (0, a.motionValue)(e)),
            {
                isStatic: l
            } = (0, r.useContext)(V.MotionConfigContext);
        if (l) {
            let [, l] = (0, r.useState)(e);
            (0, r.useEffect)(() => t.on("change", l), [])
        }
        return t
    }

    function O(e, t) {
        let l = G(t()),
            a = () => l.set(t());
        return a(), (0, K.useIsomorphicLayoutEffect)(() => {
            let t = () => s.frame.preRender(a, !1, !0),
                l = e.map(e => e.on("change", t));
            return () => {
                l.forEach(e => e()), (0, s.cancelFrame)(a)
            }
        }), l
    }

    function Y(e, t, l, i) {
        if ("function" == typeof e) {
            let t;
            return a.collectMotionValues.current = [], e(), t = O(a.collectMotionValues.current, e), a.collectMotionValues.current = void 0, t
        }
        let r = "function" == typeof t ? t : J(t, l, i);
        return Array.isArray(e) ? q(e, r) : q([e], ([e]) => r(e))
    }

    function q(e, t) {
        let l = (0, T.useConstant)(() => []);
        return O(e, () => {
            l.length = 0;
            let a = e.length;
            for (let t = 0; t < a; t++) l[t] = e[t].get();
            return t(l)
        })
    }
    e.s(["useMotionValue", () => G], 638099), e.s(["useTransform", () => Y], 860193)
}, 4390, 570994, e => {
    "use strict";
    var t = e.i(853712),
        l = e.i(107579),
        a = e.i(993358),
        i = e.i(851931),
        r = e.i(722978),
        n = e.i(32627),
        s = e.i(711036),
        o = e.i(201763),
        c = e.i(749583);
    let d = (0, i.default)(() => e.A(824429), {
            loadableGenerated: {
                modules: [467761]
            },
            ssr: !1
        }),
        u = ({
            eyebrow: e,
            title: i,
            titleSize: u = "medium",
            description: f,
            backgroundImage: g,
            actions: m = [],
            keyFigures: h,
            video: x,
            mention: p,
            fullScreen: v = !0
        }) => {
            let b = (0, l.useRef)(null),
                A = (0, n.useInView)(b, {
                    once: !0
                }),
                y = (0, s.useReducedMotion)(),
                [j, k] = (0, l.useState)(!1),
                w = (0, r.default)(`font-nohemi mt-24 my-4 ${"small"===u?"mb-6":"mb-8"}`, {
                    "loco-text-heading-xl": "medium" === u,
                    "loco-text-headline": "large" === u,
                    "loco-text-heading-lg": "small" === u
                }),
                N = (0, r.default)("object-cover transition-opacity duration-1000 opacity-100", {
                    "opacity-0": j
                });
            return (0, t.jsxs)("section", {
                ref: b,
                className: "dark relative",
                children: [g && (0, t.jsx)(a.default, {
                    src: g.src,
                    placeholder: "blur",
                    blurDataURL: g.placeholder,
                    fill: !0,
                    alt: "",
                    className: N,
                    sizes: "100vw"
                }), A && !y && x && (0, t.jsx)(d, {
                    url: x || "",
                    playing: !0,
                    loop: !0,
                    muted: !0,
                    playsinline: !0,
                    width: "100%",
                    height: "100%",
                    onReady: () => {
                        k(!0)
                    },
                    config: {
                        hlsOptions: {
                            maxMaxBufferLength: 1,
                            startLevel: 1
                        }
                    },
                    className: "absolute [&>video]:object-cover"
                }, "hero-video"), (0, t.jsx)("div", {
                    className: "absolute h-full w-full",
                    style: {
                        backgroundImage: v ? `
    linear-gradient(180deg, rgba(1, 1, 1, 0.00) 45.08%, rgba(1, 1, 1, 0.00) 49.56%, rgba(1, 1, 1, 0.01) 53.84%, rgba(1, 1, 1, 0.02) 57.92%, rgba(1, 1, 1, 0.04) 61.84%, rgba(1, 1, 1, 0.06) 65.62%, rgba(1, 1, 1, 0.09) 69.27%, rgba(1, 1, 1, 0.12) 72.82%, rgba(1, 1, 1, 0.16) 76.29%, rgba(1, 1, 1, 0.20) 79.7%, rgba(1, 1, 1, 0.24) 83.06%, rgba(1, 1, 1, 0.29) 86.41%, rgba(1, 1, 1, 0.34) 89.75%, rgba(1, 1, 1, 0.39) 93.12%, rgba(1, 1, 1, 0.44) 96.53%, rgba(1, 1, 1, 0.50) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)` : ""
                    }
                }), (0, t.jsxs)("div", {
                    className: `relative container flex ${v&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                    children: [(0, t.jsx)("div", {
                        className: "flex grow flex-col justify-stretch",
                        children: (0, t.jsxs)("div", {
                            className: "flex h-full grow flex-col items-center justify-center text-center",
                            children: [e && (0, t.jsx)("div", {
                                className: "loco-caption-lg-semibold",
                                children: e
                            }), (0, t.jsx)("h1", {
                                className: w,
                                children: i
                            }), f && (0, t.jsx)("div", {
                                className: "loco-caption-sm-semibold mt-5",
                                children: f
                            }), m && (0, t.jsx)("div", {
                                className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                children: m.map((e, l) => {
                                    if (e.link) return (0, t.jsx)(c.default, {
                                        rounded: !0,
                                        hasArrow: !0,
                                        href: e.link.href,
                                        target: e.link.target,
                                        variant: 0 === l ? "primary" : "secondary",
                                        children: e.title
                                    }, `headliner-action-link-${e.title}-${l}`);
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
                                        }, `headliner-action-modal-${e.title}-${l}`)
                                    }
                                    return null
                                })
                            })]
                        })
                    }), h && (0, t.jsx)(o.default, {
                        keyFigures: h,
                        nested: !0
                    })]
                }), p && (0, t.jsx)("div", {
                    className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:top-10 md:right-8 md:left-auto md:w-auto md:px-0 md:py-8",
                    children: p
                })]
            })
        };
    e.s(["default", 0, u], 570994);
    var f = e.i(115219);
    e.s(["default", 0, ({
        actions: e = [],
        brandfolder: a,
        mention: i,
        eyebrow: r,
        title: n,
        titleSize: s,
        description: o,
        image: c,
        keyFigures: d,
        isHidden: g
    }) => {
        let {
            mapFormActions: m
        } = (0, f.useFormModal)(e), h = m(e), x = (0, l.useMemo)(() => (d?.data ?? []).map(e => e?.value?.text ? {
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
        }), [d]);
        return (0, t.jsx)(t.Fragment, {
            children: !g && (0, t.jsx)(u, {
                actions: h,
                mention: i || "",
                eyebrow: r || "",
                title: n || "",
                titleSize: "small" === s ? "small" : "large" === s ? "large" : "medium",
                description: o || "",
                backgroundImage: {
                    src: c?.asset.url || "",
                    placeholder: c?.asset.metadata?.lqip || ""
                },
                keyFigures: x,
                video: a?.muxHLSURL || ""
            })
        })
    }], 4390)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1ec75ae0-b41e-5033-955f-7e840950487c")
    } catch (e) {}
}();
//# debugId=1ec75ae0-b41e-5033-955f-7e840950487c