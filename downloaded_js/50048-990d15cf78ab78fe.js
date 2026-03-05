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
    [50048], {
        13296: (e, t, a) => {
            a.d(t, {
                Zf: () => l,
                ln: () => r
            });
            var l = function(e) {
                    return e.en = "en", e.de = "de_de", e.ja = "ja_jp", e.fr = "fr_fr", e.pt = "pt_br", e.cn = "zh_cn", e.es = "es_es", e.ru = "ru_ru", e.kr = "ko_kr", e
                }({}),
                r = function(e) {
                    return e.en = "en-US", e.de = "de-DE", e.ja = "ja-JP", e.fr = "fr-FR", e.pt = "pt-BR", e.cn = "zh-CN", e.es = "es-ES", e.ru = "ru-RU", e.kr = "ko-KR", e
                }({})
        },
        14433: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var l = a(80475);
            a(88491);
            var r = a(87564),
                n = a(46247);
            let s = a(44842).default,
                i = ({
                    title: e,
                    navigation: t,
                    action: a,
                    theme: i,
                    isHidden: o
                }) => {
                    let {
                        state: d
                    } = (0, n.Ay)();
                    return (0, l.jsx)(l.Fragment, {
                        children: !o && (0, l.jsx)(s, {
                            title: e ?? "",
                            action: (e => {
                                if (!e?.link) return null;
                                let t = e?.link.linkReference?.href.current;
                                return {
                                    label: e?.title ?? "",
                                    href: t ? (0, r.A)(t, d, e?.extendLink) : "",
                                    target: e?.link.linkReference?.target === "_blank" ? "_blank" : "_self"
                                }
                            })(a),
                            nav: t.map(e => ({
                                label: e?.title ?? "",
                                href: e?.link?.linkReference?.href.current ?? "",
                                target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                            }))
                        })
                    })
                }
        },
        20320: (e, t, a) => {
            a.d(t, {
                A: () => s
            });
            var l = a(80475),
                r = a(88491),
                n = a(17873);
            let s = ({
                data: e,
                isHidden: t,
                theme: a
            }) => {
                let s = (0, r.useMemo)(() => e?.map(e => e.value?.text ? {
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
                    children: !t && (0, l.jsx)(n.A, {
                        keyFigures: s,
                        theme: "dark" === a ? "dark" : "light"
                    })
                })
            }
        },
        23364: (e, t, a) => {
            a.d(t, {
                A: () => n
            });
            var l = a(80475);
            a(88491);
            let r = ({
                    id: e,
                    className: t
                }) => (0, l.jsx)("div", {
                    id: e,
                    "data-anchor-item": !0,
                    className: t,
                    style: {
                        marginTop: "-120px",
                        paddingTop: "120px"
                    },
                    "data-sentry-component": "AlternateNavigationAnchor",
                    "data-sentry-source-file": "AlternateNavigationAnchor.tsx"
                }),
                n = ({
                    anchorID: e
                }) => (0, l.jsx)(r, {
                    id: e ?? "",
                    "data-sentry-element": "AlternateNavigationAnchor",
                    "data-sentry-component": "alternateNavigationAnchorBlock",
                    "data-sentry-source-file": "AlternateNavigationAnchorBlock.tsx"
                })
        },
        39605: (e, t, a) => {
            a.d(t, {
                A: () => y
            });
            var l = a(80475),
                r = a(88491),
                n = a(16335),
                s = a(27331),
                i = a(81359),
                o = a(92572),
                d = a(98822),
                c = a(2340);
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
                h = ({
                    image: e,
                    video: t,
                    layout: a,
                    forcedAspectRatio: d = "none",
                    richCaption: h
                }) => {
                    let f = (0, r.useRef)(null),
                        [g, x] = (0, r.useState)(!1),
                        p = (0, s.W)(f),
                        y = (0, i.I)(),
                        v = (0, n.A)("", {
                            "max-w-lg": "small" === a,
                            "max-w-lg mx-auto": "small-center" === a,
                            "container grid lg:grid-cols-12 lg:gap-2": "offset" === a
                        }),
                        b = (0, n.A)("relative overflow-hidden rounded-2xl", {
                            "aspect-square": "1:1" === d,
                            "aspect-[4/3]": "4:3" === d,
                            "aspect-video": "16:9" === d
                        }),
                        j = (0, n.A)("absolute cover z-10 transition-opacity duration-500 object-cover", {
                            "opacity-0": g && !y && p && t?.src
                        }),
                        k = {
                            aspectRatio: "none" === d && e.dimensions?.width && e.dimensions?.height ? `${e.dimensions.width}/${e.dimensions.height}` : void 0
                        };
                    return (0, l.jsx)("div", {
                        className: v,
                        ref: f,
                        "data-sentry-component": "Media",
                        "data-sentry-source-file": "Media.tsx",
                        children: (0, l.jsxs)("div", {
                            className: "offset" === a ? "lg:col-start-4 lg:col-end-13 lg:row-start-1" : "",
                            children: [(0, l.jsxs)("div", {
                                className: b,
                                style: k,
                                children: [(0, l.jsx)(o.default, {
                                    src: e.src,
                                    placeholder: "blur",
                                    blurDataURL: e.placeholder,
                                    fill: !0,
                                    alt: e.alt ?? "",
                                    className: j,
                                    sizes: (() => {
                                        switch (a) {
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
                                }), p && !y && t?.src && (0, l.jsx)(u, {
                                    url: t.src,
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
                                            maxMaxBufferLength: m.maxMaxBufferLength,
                                            startLevel: m.qualityStartLevel
                                        }
                                    }
                                })]
                            }), h && (0, l.jsx)("div", {
                                className: "loco-text-body-sm mt-2 text-gray-500",
                                children: (0, l.jsx)(c.A, {
                                    children: h
                                })
                            })]
                        })
                    })
                };
            var f = a(29529),
                g = a(64195);
            let x = ({
                provider: e,
                image: t,
                video: s,
                layout: i,
                buttonLabel: u,
                richCaption: m,
                blockKey: h,
                videoInline: x,
                blockedMessage: p,
                consentButtonLabel: y
            }) => {
                let v = (0, r.useRef)(null),
                    [b, j] = (0, r.useState)(!1),
                    k = null;
                "youtube" === e ? k = (0, d.default)(() => Promise.all([a.e(87770), a.e(41181)]).then(a.t.bind(a, 9926, 23)), {
                    loadableGenerated: {
                        webpack: () => [9926]
                    },
                    ssr: !1
                }) : "brandfolder" === e && (k = (0, d.default)(() => Promise.all([a.e(87770), a.e(89058)]).then(a.t.bind(a, 23399, 23)), {
                    loadableGenerated: {
                        webpack: () => [23399]
                    },
                    ssr: !1
                }));
                let N = {};
                "brandfolder" === e && (N = {
                    hlsOptions: {
                        maxMaxBufferLength: 1,
                        qualityStartLevel: 1
                    }
                });
                let w = () => {
                        j(!0)
                    },
                    A = (0, n.A)("", {
                        "max-w-lg": "small" === i,
                        "max-w-lg mx-auto": "small-center" === i,
                        "container grid lg:grid-cols-12 lg:gap-2": "offset" === i
                    }),
                    L = (0, n.A)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                        "opacity-0 pointer-events-none": b && s && s.src
                    }),
                    _ = (0, n.A)("relative", {
                        "lg:col-start-4 lg:col-end-13 lg:row-start-1": "offset" === i
                    });
                return (0, l.jsx)("div", {
                    className: A,
                    ref: v,
                    "data-sentry-component": "MediaVideo",
                    "data-sentry-source-file": "MediaVideo.tsx",
                    children: (0, l.jsxs)("div", {
                        className: _,
                        children: [(0, l.jsxs)("div", {
                            className: "relative aspect-video overflow-hidden rounded-2xl",
                            children: [t?.src && (0, l.jsxs)("div", {
                                className: L,
                                onClick: w,
                                children: [!x && (0, l.jsx)(f.A, {
                                    handleIsPlaying: w,
                                    className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: u,
                                    "data-link-location": `${h}-video-play`,
                                    "data-link-id": `${h}-video-play`,
                                    "data-link-type": "CTA"
                                }), (0, l.jsx)(o.default, {
                                    src: t.src,
                                    placeholder: "blur",
                                    blurDataURL: t.placeholder,
                                    fill: !0,
                                    alt: t.alt ?? "",
                                    className: "cover absolute object-cover brightness-75"
                                })]
                            }), s?.src && k && (0, l.jsx)(k, {
                                url: s.src,
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
                                config: N
                            }), s?.src?.includes("youtube.com") && (0, l.jsx)(g.A, {
                                blockedMessage: p,
                                consentButtonLabel: y
                            })]
                        }), m && (0, l.jsx)("div", {
                            className: "loco-text-body-sm mt-2 text-gray-500",
                            children: (0, l.jsx)(c.A, {
                                children: m
                            })
                        })]
                    })
                })
            };
            var p = a(95719);
            let y = ({
                mediaType: e,
                provider: t,
                brandfolder: a,
                youtube_url: r,
                image: s,
                theme: i,
                layout: o,
                aspectRatio: d,
                buttonLabel: c,
                videoInline: u,
                richCaption: m,
                blockKey: f,
                isHidden: g,
                consent: y
            }) => {
                let v = {
                        type: e ?? "image",
                        layout: o ?? "full",
                        theme: i ?? "light",
                        video: {
                            src: ("brandfolder" === t ? a?.muxHLSURL : r) ?? null
                        },
                        aspectRatio: d ?? "none",
                        image: {
                            src: s?.file?.asset.url ?? "",
                            alt: s?.alt ?? "",
                            caption: s?.caption ?? "",
                            placeholder: s?.file?.asset.metadata?.lqip ?? "",
                            dimensions: {
                                width: s?.file?.asset?.metadata?.dimensions?.width ?? 0,
                                height: s?.file?.asset?.metadata?.dimensions?.height ?? 0
                            }
                        },
                        provider: t,
                        buttonLabel: c,
                        videoInline: u,
                        richCaption: (0, l.jsx)(p.RK, {
                            value: m
                        })
                    },
                    b = "full";
                "small" === o ? b = "small" : "small-center" === o ? b = "small-center" : "offset" === o && (b = "offset");
                let j = "none";
                ("1:1" === d || "16:9" === d || "4:3" === d) && (j = d);
                let k = (0, n.A)("py-16", {
                        "dark bg-black": "dark" === v.theme
                    }),
                    N = (0, n.A)("container");
                return (0, l.jsx)(l.Fragment, {
                    children: !g && (0, l.jsx)("div", {
                        className: k,
                        children: (0, l.jsx)("div", {
                            className: N,
                            children: "video" === v.type ? (0, l.jsx)(x, {
                                provider: "brandfolder" === t ? "brandfolder" : "youtube",
                                layout: b,
                                video: v.video,
                                image: v.image,
                                buttonLabel: v.buttonLabel,
                                richCaption: v.richCaption,
                                blockKey: f,
                                videoInline: v.videoInline,
                                blockedMessage: y?.blockedMessage,
                                consentButtonLabel: y?.consentButtonLabel || ""
                            }) : (0, l.jsx)(h, {
                                layout: b,
                                image: v.image,
                                forcedAspectRatio: j,
                                richCaption: v.richCaption
                            })
                        })
                    })
                })
            }
        },
        41220: (e, t, a) => {
            a.d(t, {
                Ay: () => s,
                gI: () => r,
                o7: () => n
            });
            var l = a(13296);
            let r = l.ln[l.Zf.en],
                n = e => Object.keys(l.ln).find(t => l.ln[t] === e),
                s = (e = l.Zf.en) => l.ln[e] || r
        },
        42273: (e, t, a) => {
            a.d(t, {
                VG: () => l,
                VN: () => c,
                Z7: () => i,
                ab: () => n,
                hs: () => r,
                q7: () => o,
                u7: () => s,
                yd: () => d
            });
            let l = ["/download", "/roadmap", "/pages/pro-free-trial", "/games", "/solutions", "/developer-tools", "/how-to", "/learn", "/learn/get-started", "/releases/lts-vs-tech-stream"],
                r = ["/campaign/spatial"],
                n = ["/made-with-unity"],
                s = ["/our-company", "/community", "/industry", "/use-cases", "/releases/unity-6"],
                i = ["/products"],
                o = ["/resources"],
                d = ["/products/unity-pro", "/products/unity-engine", "/products/compare-plans", "/products/compare-plans/unity-cloud"],
                c = "/data-request"
        },
        44606: (e, t, a) => {
            a.d(t, {
                A: () => r
            });
            var l = a(88491);
            let r = () => {
                let [e, t] = (0, l.useState)("Unknown");
                return (0, l.useEffect)(() => {
                    let e = window.navigator.userAgent;
                    e.includes("Win") && t("Windows"), e.includes("Mac") && t("Mac"), e.includes("Linux") && t("Linux")
                }, []), e
            }
        },
        44842: (e, t, a) => {
            a.d(t, {
                default: () => N
            });
            var l = a(80475),
                r = a(88491),
                n = a(16335),
                s = a(37640),
                i = a(18227),
                o = a(62060),
                d = a(34335),
                c = a(21085),
                u = a(86713),
                m = a(2609),
                h = a(54859);
            let f = {
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
            var p = a(18350);
            let y = (0, r.forwardRef)(({
                    nav: e,
                    action: t,
                    isSticky: a,
                    indexOfActiveLink: r,
                    variant: s
                }, o) => {
                    let d = (0, n.A)("alternateNavigation relative flex h-12 w-full bg-gray-900", {
                        "justify-center": "centered" === s,
                        "justify-stretch": "default" === s
                    });
                    return (0, l.jsx)("div", {
                        className: d,
                        ref: o,
                        children: (0, l.jsx)("div", {
                            className: (0, n.A)("z-40 h-12 bg-gray-900 md:block", {
                                "fixed top-11 mt-1 bg-transparent": a,
                                "absolute top-0 py-1": !a,
                                "w-full": "default" === s
                            }),
                            children: (0, l.jsx)("div", {
                                className: "container h-full",
                                children: (0, l.jsxs)("div", {
                                    className: (0, n.A)("flex h-full items-center justify-between rounded-md px-2 transition-colors duration-150", {
                                        "bg-gray-900": !a,
                                        "bg-[rgba(0,0,0,0.5)] backdrop-blur-sm": a
                                    }),
                                    children: [(0, l.jsx)("div", {
                                        className: "h-full w-full shrink-1",
                                        children: (0, l.jsx)("ul", {
                                            className: "flex h-full w-full items-center",
                                            children: e.map((e, t) => (0, l.jsx)(k, {
                                                label: e.label,
                                                href: e.href,
                                                target: e.target,
                                                active: r === t
                                            }, `alternate-navigation-element-${e.label}-${t}`))
                                        })
                                    }), t && (0, l.jsx)("div", {
                                        className: "shrink-0",
                                        children: (0, l.jsx)(i.A, {
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
                v = (0, r.forwardRef)(({
                    isSticky: e,
                    nav: t,
                    indexOfActiveLink: a,
                    title: i
                }, o) => {
                    let [d, c] = (0, r.useState)(!1);
                    return i ? (0, l.jsx)("div", {
                        className: "alternateNavigation relative h-12 w-full bg-gray-900",
                        ref: o,
                        children: (0, l.jsx)("div", {
                            className: (0, n.A)("z-40 mt-1 h-12 w-full bg-gray-900 md:block", {
                                "fixed top-[4.5rem] bg-transparent": e,
                                "absolute top-0": !e
                            }),
                            children: (0, l.jsx)("div", {
                                className: "container",
                                children: (0, l.jsx)("div", {
                                    className: (0, n.A)("flex h-full items-center justify-between rounded-md px-3 transition-colors duration-150", {
                                        "bg-gray-900": !e,
                                        "bg-[rgba(0,0,0,0.65)] backdrop-blur-sm": e
                                    }),
                                    children: (0, l.jsxs)("div", {
                                        className: "w-full",
                                        children: [(0, l.jsxs)(s.m.button, {
                                            animate: d ? "open" : "closed",
                                            className: "flex w-full items-center justify-between py-3",
                                            onClick: () => {
                                                c(!d)
                                            },
                                            children: [(0, l.jsx)("span", {
                                                className: "text-sm font-medium text-white",
                                                children: null == a || d ? i : t[a].label
                                            }), (0, l.jsx)(b, {})]
                                        }), (0, l.jsx)(s.m.ul, {
                                            className: "overflow-hidden",
                                            initial: "initial",
                                            animate: d ? "open" : "closed",
                                            variants: g,
                                            children: t.map(({
                                                label: e,
                                                href: t,
                                                target: r
                                            }, n) => (0, l.jsx)(j, {
                                                label: e,
                                                href: t,
                                                target: r,
                                                active: a === n,
                                                index: n,
                                                isOpen: d,
                                                onClick: () => {
                                                    c(!1)
                                                }
                                            }, `alternate-navigation-element-${e}-${n}`))
                                        })]
                                    })
                                })
                            })
                        })
                    }) : null
                }),
                b = () => (0, l.jsxs)(s.m.svg, {
                    variants: x,
                    width: "16",
                    height: "17",
                    viewBox: "0 0 16 17",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    "data-sentry-element": "m.svg",
                    "data-sentry-component": "TabArrow",
                    "data-sentry-source-file": "AlternateNavigation.tsx",
                    children: [(0, l.jsx)("g", {
                        clipPath: "url(#clip0_5706_918)",
                        "data-sentry-element": "g",
                        "data-sentry-source-file": "AlternateNavigation.tsx",
                        children: (0, l.jsx)("path", {
                            id: "Vector",
                            d: "M12 6.5C12.568 6.5 12.8647 7.15733 12.522 7.582L12.4713 7.638L8.47133 11.638C8.35654 11.7528 8.2038 11.8217 8.04179 11.8319C7.87977 11.8421 7.7196 11.7928 7.59133 11.6933L7.52867 11.638L3.52867 7.638L3.47333 7.57533L3.43733 7.524L3.40133 7.46L3.39 7.436L3.372 7.39133L3.35067 7.31933L3.344 7.284L3.33733 7.244L3.33467 7.206V7.12733L3.338 7.08867L3.344 7.04867L3.35067 7.014L3.372 6.942L3.39 6.89733L3.43667 6.80933L3.48 6.74933L3.52867 6.69533L3.59133 6.64L3.64267 6.604L3.70667 6.568L3.73067 6.55667L3.77533 6.53867L3.84733 6.51733L3.88267 6.51067L3.92267 6.504L3.96067 6.50133L12 6.5Z",
                            fill: "white",
                            "data-sentry-element": "path",
                            "data-sentry-source-file": "AlternateNavigation.tsx"
                        })
                    }), (0, l.jsx)("defs", {
                        "data-sentry-element": "defs",
                        "data-sentry-source-file": "AlternateNavigation.tsx",
                        children: (0, l.jsx)("clipPath", {
                            id: "clip0_5706_918",
                            "data-sentry-element": "clipPath",
                            "data-sentry-source-file": "AlternateNavigation.tsx",
                            children: (0, l.jsx)("rect", {
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
                j = e => {
                    let t = (0, r.useRef)(null),
                        {
                            linkProps: a
                        } = (0, d.i)(e, t),
                        {
                            focusProps: i
                        } = (0, c.o)(),
                        {
                            label: m,
                            href: h,
                            target: g,
                            locale: x,
                            localePrefix: p,
                            active: y,
                            index: v,
                            isOpen: b
                        } = e;
                    return (0, l.jsx)("li", {
                        className: "border-t border-[#ffffff14]",
                        "data-sentry-component": "MobileLinkItem",
                        "data-sentry-source-file": "AlternateNavigation.tsx",
                        children: (0, l.jsxs)(s.m.div, {
                            custom: v,
                            variants: f,
                            initial: "initial",
                            animate: b ? "open" : "closed",
                            className: "flex w-full items-center justify-between",
                            "data-sentry-element": "m.div",
                            "data-sentry-source-file": "AlternateNavigation.tsx",
                            children: [(0, l.jsx)(o.N_, {
                                ...(0, u.v)(a, i),
                                ref: t,
                                href: h,
                                target: g ?? "_self",
                                locale: x,
                                className: "py-3 text-sm font-medium text-white",
                                localePrefix: p,
                                "data-sentry-element": "NextLink",
                                "data-sentry-source-file": "AlternateNavigation.tsx",
                                children: m
                            }), (0, l.jsx)("div", {
                                className: (0, n.A)("mr-1 h-2 w-2 rounded-full transition-colors duration-300", {
                                    "bg-blue": y
                                })
                            })]
                        })
                    }, `n_${m}`)
                },
                k = e => {
                    let t = (0, r.useRef)(null),
                        {
                            linkProps: a
                        } = (0, d.i)(e, t),
                        {
                            isFocusVisible: s,
                            focusProps: i
                        } = (0, c.o)(),
                        {
                            label: m,
                            href: h,
                            target: f,
                            locale: g,
                            localePrefix: x,
                            active: p
                        } = e,
                        y = (0, n.A)("alternateNavigation_item relative h-full flex items-center px-2 !text-[0.75rem] font-medium group outline-hidden text-gray-200 transition-colors duration-150", {
                            "a11y-ring rounded-xs": s
                        }, {
                            active: p,
                            "text-white": p,
                            "text-gray-200": !p
                        });
                    return (0, l.jsx)("li", {
                        className: "h-full",
                        "data-sentry-component": "DesktopLinkItem",
                        "data-sentry-source-file": "AlternateNavigation.tsx",
                        children: (0, l.jsx)(o.N_, {
                            ...(0, u.v)(a, i),
                            ref: t,
                            href: h,
                            target: f ?? "_self",
                            locale: g,
                            className: y,
                            localePrefix: x,
                            "data-sentry-element": "NextLink",
                            "data-sentry-source-file": "AlternateNavigation.tsx",
                            children: m
                        })
                    })
                };
            y.displayName = "DesktopNav", v.displayName = "MobileNav";
            let N = ({
                variant: e = "default",
                title: t,
                nav: a,
                action: n
            }) => {
                let s = (0, h.A)(`(max-width: ${m.A.Large}px)`),
                    i = (0, r.useRef)(null),
                    [o, d] = (0, r.useState)(null),
                    [c, u] = (0, r.useState)([]),
                    [f, g] = (0, r.useState)(!1),
                    [x, b] = (0, r.useState)(!1),
                    [j, k] = (0, r.useState)(!1),
                    N = (0, r.useRef)(0),
                    w = () => {
                        let e = a.map(e => e.href);
                        u([...document.querySelectorAll("a[data-anchor-item]")].filter(t => {
                            let a = t.getAttribute("id");
                            return a && e.find(e => e.includes(a))
                        }).map(e => ({
                            top: e.offsetTop + 43
                        })))
                    },
                    A = () => {
                        i.current && (i.current.offsetTop < window.scrollY ? b(!0) : b(!1)), N.current > window.scrollY && x ? g(!0) : N.current < window.scrollY && g(!1), N.current = window.scrollY, i.current && (i.current.offsetTop > window.innerHeight && !f ? k(!0) : k(!1)), (() => {
                            let e = null;
                            c.forEach((t, a) => {
                                window.scrollY > t.top && (e = a)
                            }), d(e)
                        })()
                    };
                return (0, r.useEffect)(() => {
                    let e = document.querySelector("nav");
                    e && (e.ariaHidden = String(j))
                }, [j]), (0, r.useLayoutEffect)(() => (w(), window.addEventListener("resize", w), () => {
                    window.removeEventListener("resize", w)
                }), []), (0, r.useEffect)(() => (N.current = window.scrollY, window.addEventListener("scroll", A), () => {
                    window.removeEventListener("scroll", A)
                }), [f, c, s]), (0, l.jsx)(p.A, {
                    "data-sentry-element": "FramerMotionLazy",
                    "data-sentry-component": "AlternateNavigation",
                    "data-sentry-source-file": "AlternateNavigation.tsx",
                    children: s ? (0, l.jsx)(v, {
                        ref: i,
                        nav: a,
                        isSticky: x,
                        indexOfActiveLink: o,
                        title: t
                    }) : (0, l.jsx)(y, {
                        ref: i,
                        nav: a,
                        action: n,
                        isSticky: x,
                        indexOfActiveLink: o,
                        variant: e
                    })
                })
            }
        },
        62391: (e, t, a) => {
            a.d(t, {
                A: () => s
            });
            var l = a(80475),
                r = a(88491),
                n = a(16335);
            let s = ({
                children: e,
                title: t,
                isExpanded: a = !1,
                blockKey: s
            }) => {
                let [i, o] = (0, r.useState)(a), d = () => {
                    o(!i)
                }, c = (0, n.A)("accordion-content [&_p]:mb-4 [&_ul]:mb-4", {
                    "transition ease-in-out opacity-100 h-auto w-5/6 pb-4 loco-text-body text-gray-800 dark:text-gray-100": i,
                    "transition ease-in-out opacity-0 h-0 overflow-hidden": !i
                });
                return (0, l.jsxs)("div", {
                    className: "border-b border-gray-200 dark:border-gray-800",
                    "data-sentry-component": "Accordion",
                    "data-sentry-source-file": "Accordion.tsx",
                    children: [(0, l.jsx)("div", {
                        onClick: d,
                        onKeyDown: e => {
                            ("Enter" === e.key || " " === e.key) && d()
                        },
                        role: "button",
                        tabIndex: 0,
                        "aria-expanded": i,
                        className: "cursor-pointer py-6",
                        "data-link-location": `${s}-video-play`,
                        "data-link-id": `${s}-accordion-toggle`,
                        "data-link-type": "CTA",
                        children: (0, l.jsxs)("div", {
                            className: "loco-text-body-lg-medium flex justify-between",
                            children: [(0, l.jsx)("h3", {
                                className: "w-11/12 text-gray-800 dark:text-gray-200",
                                children: t
                            }), (0, l.jsx)("span", {
                                className: "inline-block text-gray-700 dark:text-gray-300",
                                children: i ? "-" : "+"
                            })]
                        })
                    }), (0, l.jsx)("div", {
                        className: c,
                        "aria-hidden": !i,
                        children: e
                    })]
                })
            }
        },
        71484: (e, t, a) => {
            a.d(t, {
                A: () => o
            });
            var l = a(80475),
                r = a(88491),
                n = a(95719),
                s = a(80048),
                i = a(44606);
            let o = ({
                theme: e,
                variant: t,
                padding: a,
                title: o,
                description: d,
                richText: c,
                actions: u,
                isHidden: m,
                operatingSystem: h
            }) => {
                let f = (0, i.A)(),
                    g = (0, r.useMemo)(() => u ? u.map(e => (e => ({
                        title: e?.title || "",
                        href: e?.link?.linkReference?.href?.current || "",
                        target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }))(e)) : [], [u]);
                return h && h !== f ? null : (0, l.jsx)(l.Fragment, {
                    children: !m && (0, l.jsx)(s.A, {
                        theme: "dark" === e ? "dark" : "light",
                        variant: "center" === t ? "center" : "left",
                        padding: a ?? !0,
                        title: o,
                        description: d ?? "",
                        richText: (0, l.jsx)(n.RK, {
                            value: c
                        }),
                        actions: g
                    })
                })
            }
        },
        77469: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var l = a(80475);
            a(88491);
            var r = a(92572),
                n = a(16335);
            let s = ({
                    theme: e = "light",
                    quote: t,
                    author: a
                }) => {
                    let s = (0, n.A)({
                        dark: "dark" === e
                    });
                    return (0, l.jsx)("blockquote", {
                        className: s,
                        "data-sentry-component": "Quote",
                        "data-sentry-source-file": "Quote.tsx",
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
                                    }), a && (0, l.jsxs)("div", {
                                        className: "mt-4 flex flex-col lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:mt-2",
                                        children: [a.image && a.image.src && (0, l.jsx)("div", {
                                            className: "overflow-hidden rounded",
                                            children: (0, l.jsx)(r.default, {
                                                src: a.image.src,
                                                placeholder: "blur",
                                                blurDataURL: a.image.placeholder,
                                                alt: a.image.alt || "",
                                                width: 200,
                                                height: 250,
                                                className: "w-full max-w-[12rem] object-cover"
                                            })
                                        }), (0, l.jsxs)("footer", {
                                            className: "mt-2 max-w-[12rem] lg:mt-8",
                                            children: [a.name && (0, l.jsx)("span", {
                                                className: "loco-text-body-md mt-2 block",
                                                children: a.name
                                            }), a.title && (0, l.jsx)("span", {
                                                className: "loco-text-body-sm mt-1 block dark:text-gray-300",
                                                children: a.title
                                            })]
                                        })]
                                    })]
                                })
                            })
                        })
                    })
                },
                i = ({
                    theme: e,
                    quote: t,
                    author: a,
                    isHidden: r
                }) => {
                    let n = {
                        name: a?.name || "",
                        title: a?.title || "",
                        image: {
                            src: a?.image?.file?.asset.url || "",
                            placeholder: a?.image?.file?.asset.metadata?.lqip || "",
                            alt: a?.image?.alt || ""
                        }
                    };
                    return (0, l.jsx)(l.Fragment, {
                        children: !r && (0, l.jsx)(s, {
                            quote: t,
                            author: n,
                            theme: "dark" === e ? "dark" : "light"
                        })
                    })
                }
        },
        78588: (e, t, a) => {
            a.d(t, {
                N_: () => n,
                a8: () => i
            });
            var l = a(13223),
                r = a(63154);
            let {
                Link: n,
                redirect: s,
                usePathname: i,
                useRouter: o
            } = (0, l.xp)({
                locales: r.IB,
                localePrefix: r.b,
                defaultLocale: r.q
            })
        },
        78896: (e, t, a) => {
            a.d(t, {
                A: () => u
            });
            var l = a(80475),
                r = a(88491),
                n = a(62060),
                s = a(16335),
                i = a(18227),
                o = a(18789);
            let d = ({
                    title: e,
                    titleTag: t,
                    description: a,
                    action: d,
                    fullWidth: c
                }) => {
                    let [u, m] = (0, r.useState)(!1), h = "relative block border-t border-solid border-gray-200 dark:border-gray-700", f = (0, l.jsxs)("div", {
                        className: (0, s.A)("grid gap-4 pt-2 pb-8 md:grid-cols-3", {
                            "md:grid-cols-[2fr_1fr_auto]": c
                        }),
                        children: [(0, l.jsx)(t || "h2", {
                            className: "loco-text-heading-xs",
                            children: e
                        }), (0, l.jsx)("div", {
                            children: (0, l.jsx)("p", {
                                className: "loco-text-body-sm opacity-70",
                                children: a
                            })
                        }), d && d?.label && (0, l.jsx)("div", {
                            className: "shrink-0 text-right",
                            children: (0, l.jsx)(i.A, {
                                tag: "span",
                                outlined: !0,
                                rounded: !0,
                                hasArrow: !0,
                                active: u,
                                children: d.label
                            })
                        }), d && !d?.label && (0, l.jsx)("div", {
                            className: "flex shrink-0 justify-end text-right",
                            children: (0, l.jsx)(o.A, {
                                variant: "primary"
                            })
                        })]
                    });
                    return d ? (0, l.jsx)(n.N_, {
                        href: d.href,
                        target: d.target,
                        title: d.label,
                        onMouseOver: () => {
                            m(!0)
                        },
                        onMouseLeave: () => {
                            m(!1)
                        },
                        className: h,
                        "data-sentry-element": "Link",
                        "data-sentry-component": "Feature",
                        "data-sentry-source-file": "FeaturesList.tsx",
                        children: f
                    }) : (0, l.jsx)("div", {
                        className: h,
                        children: f
                    })
                },
                c = ({
                    theme: e = "light",
                    fullWidth: t = !1,
                    features: a = []
                }) => {
                    let r = (0, s.A)({
                        dark: "dark" === e
                    });
                    return (0, l.jsx)("section", {
                        className: r,
                        "data-sentry-component": "FeaturesList",
                        "data-sentry-source-file": "FeaturesList.tsx",
                        children: (0, l.jsx)("div", {
                            className: "relative px-4 py-16 lg:pt-6 lg:pb-16 dark:bg-black",
                            children: (0, l.jsx)("div", {
                                className: "mx-auto max-w-[1800px] md:grid md:grid-cols-12 md:gap-2",
                                children: a && (0, l.jsx)("div", {
                                    className: (0, s.A)("col-start-1 col-end-13 row-start-3 lg:col-end-13", {
                                        "lg:col-start-4": !t
                                    }),
                                    children: (0, l.jsx)("div", {
                                        className: "lg:grid lg:grid-cols-8 lg:gap-2",
                                        children: (0, l.jsx)("div", {
                                            className: "lg:col-start-1 lg:col-end-9",
                                            children: a.map((e, a) => (0, l.jsx)(d, {
                                                fullWidth: t,
                                                titleTag: "p",
                                                ...e
                                            }, `feature-list-${a}`))
                                        })
                                    })
                                })
                            })
                        })
                    })
                },
                u = ({
                    theme: e,
                    features: t,
                    isHidden: a,
                    featuresBlog: r,
                    fullWidth: n
                }) => {
                    let s;
                    s = t?.map(e => ({
                        title: e?.title || "",
                        description: e?.description || "",
                        action: e?.action ? {
                            label: e.action.title || "",
                            href: e.action.link?.linkReference?.href.current || "",
                            target: e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                        } : null
                    })) || [];
                    let i = (e, t) => e?.length > t ? `${e.substring(0,t)}...` : e;
                    return s?.length === 0 && (s = r?.map(e => ({
                        title: e?.title || "",
                        description: i(e?.seo?.teaserText, 250) || i(e?.seo?.description, 250) || "",
                        action: e?.pageUrl?.link?.href?.current ? {
                            label: "",
                            href: e?.pageUrl?.link?.href?.current || "",
                            target: e?.pageUrl?.link?.target === "_blank" ? "_blank" : "_self"
                        } : null
                    })) || []), (0, l.jsx)(l.Fragment, {
                        children: !a && (0, l.jsx)(c, {
                            theme: "dark" === e ? "dark" : "light",
                            features: s,
                            fullWidth: n
                        })
                    })
                }
        },
        87564: (e, t, a) => {
            a.d(t, {
                A: () => d
            });
            var l = a(41220),
                r = a(13296),
                n = a(29765),
                s = a.n(n),
                i = a(13915),
                o = a.n(i);
            let d = (e, t, a) => {
                let {
                    locale: n,
                    ...i
                } = t, d = e;
                return a && d ? ((e => {
                    let t;
                    try {
                        t = new URL(e)
                    } catch (e) {
                        return !1
                    }
                    let a = t.pathname.split("/");
                    return (0, l.Ay)(a[1]) !== r.ln.en
                })(d) || n === l.gI || (d = ((e, t) => {
                    let a;
                    if (!t) return e;
                    try {
                        a = new URL(e)
                    } catch (t) {
                        return e
                    }
                    let l = a.pathname.split("/");
                    return l.splice(1, 0, t), a.pathname = l.join("/"), a.toString()
                })(d, (0, l.o7)(n))), ((e, t) => {
                    if (s()(t)) return e;
                    let a = (e => {
                            let t = e.indexOf("?");
                            return -1 === t ? {} : e.slice(t + 1).split("&").reduce((e, t) => {
                                let [a, l] = t.split("=");
                                return a && (e[decodeURIComponent(a)] = decodeURIComponent(l || "")), e
                            }, {})
                        })(e),
                        l = {};
                    Object.entries(t).forEach(([e, t]) => {
                        a.hasOwnProperty(e) || o()(t) || (l[e] = t)
                    });
                    let r = new URLSearchParams(l).toString();
                    return e.includes("?") ? `${e}&${r}` : `${e}?${r}`
                })(d, i)) : d
            }
        },
        94802: (e, t, a) => {
            a.d(t, {
                A: () => f
            });
            var l = a(80475),
                r = a(88491),
                n = a(95719),
                s = a(74422);
            a(62131);
            var i = a(2340),
                o = a(35411),
                d = a(59604),
                c = a(78588),
                u = a(93955),
                m = a(16335);
            let h = {
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
                        }) => (0, l.jsx)(s.A, {
                            className: "my-12",
                            children: e.tableContent || ""
                        }),
                        htmlTable: ({
                            value: e
                        }) => (0, l.jsx)(d.A, {
                            table: e,
                            hideTitle: !0
                        }),
                        anchor: ({
                            value: e
                        }) => (0, l.jsx)(c.N_, {
                            id: e.anchorID,
                            href: "",
                            className: "md:absolute md:-mt-28"
                        }),
                        codeBlock: ({
                            value: e
                        }) => e.isHidden ? null : (0, l.jsx)(o.A, {
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
                },
                f = ({
                    text: e,
                    theme: t,
                    layout: a,
                    spacing: s,
                    isHidden: o,
                    productCategoryFilter: d
                }) => {
                    let [c] = (0, r.useContext)(u.th), {
                        subcategories: f
                    } = c.categories?.find(({
                        _id: e
                    }) => e === c.selectedCategory) || {}, g = null != c.selectedSubcategory ? (f || []).find(({
                        _id: e
                    }) => e === c.selectedSubcategory) : null, x = !d || d.categories?.find(e => e._id === c.selectedCategory) != null && (null == g || !d.subcategories || d.subcategories.some(({
                        _id: e
                    }) => e === c.selectedSubcategory)), p = (0, m.A)("dark:bg-black", {
                        "py-8 md:py-12": "default" === s || "small" === s || !s,
                        "py-16": "large" === s,
                        "bg-black dark": "dark" === t
                    }), y = (0, m.A)("", {
                        container: "default" === a || !a,
                        "container max-w-[60rem] mx-auto": "center" === a,
                        "container grid lg:grid-cols-12 lg:gap-2": "offset" === a
                    }), v = (0, m.A)("[&>*]:loco-text-body [&>*]:mb-4", {
                        "lg:col-start-4 lg:col-end-10 lg:row-start-1": "offset" === a
                    });
                    return (0, l.jsx)(l.Fragment, {
                        children: !o && x && (0, l.jsx)("section", {
                            className: p,
                            children: (0, l.jsx)("div", {
                                className: y,
                                children: (0, l.jsx)(i.A, {
                                    className: v,
                                    children: (0, l.jsx)(n.RK, {
                                        value: e,
                                        components: h
                                    })
                                })
                            })
                        })
                    })
                }
        },
        99832: (e, t, a) => {
            a.d(t, {
                A: () => s
            });
            var l = a(80475);
            a(88491);
            var r = a(16335);
            let n = ({
                    children: e,
                    theme: t = "light",
                    alignment: a = "left",
                    subtitle: n
                }) => {
                    let s = (0, r.A)({
                            dark: "dark" === t
                        }),
                        i = (0, r.A)("col-span-12", {
                            "lg:col-start-4": "offset" === a || n,
                            "lg:col-span-8": "left" === a && !n,
                            "lg:col-span-6": n
                        });
                    return (0, l.jsx)("section", {
                        className: s,
                        "data-sentry-component": "Statement",
                        "data-sentry-source-file": "Statement.tsx",
                        children: (0, l.jsx)("div", {
                            className: "bg-white py-14 md:py-32 dark:bg-black",
                            children: (0, l.jsxs)("div", {
                                className: "container grid grid-cols-12 text-black dark:text-white",
                                children: [n && (0, l.jsx)("div", {
                                    className: "loco-caption-lg-bold col-span-5 mb-3 uppercase lg:col-span-2 lg:mt-2",
                                    children: n
                                }), (0, l.jsx)("div", {
                                    className: `loco-text-heading-md ${i}`,
                                    children: e
                                })]
                            })
                        })
                    })
                },
                s = ({
                    theme: e,
                    text: t,
                    alignment: a,
                    subtitle: r,
                    isHidden: s
                }) => (0, l.jsx)(l.Fragment, {
                    children: !s && (0, l.jsx)(n, {
                        theme: "dark" === e ? "dark" : "light",
                        alignment: "offset" === a ? "offset" : "left",
                        subtitle: r || "",
                        children: t
                    })
                })
        }
    }
]);