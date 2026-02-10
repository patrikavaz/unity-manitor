! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var a = 1; a < arguments.length; a++) {
                var t = arguments[a];
                if (null != t)
                    for (var l in t) t.hasOwnProperty(l) && (e[l] = t[l])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [66710], {
        5083: (e, a, t) => {
            t.d(a, {
                A: () => m
            });
            var l = t(63036),
                r = t(3728),
                s = t(52565),
                i = t(67101),
                n = t(49377),
                o = t(49025),
                d = t(1739);
            let c = (0, o.default)(() => Promise.all([t.e(61242), t.e(5934)]).then(t.t.bind(t, 68009, 23)), {
                    loadableGenerated: {
                        webpack: () => [68009]
                    },
                    ssr: !1
                }),
                A = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                u = ({
                    videoShowcaseA: e,
                    videoShowcaseB: a
                }) => {
                    let t = (0, r.useRef)(null),
                        [o, u] = (0, r.useState)(!1),
                        [m, g] = (0, r.useState)(!1),
                        x = (0, i.W)(t, {
                            once: !0
                        }),
                        f = (0, n.I)(),
                        h = (0, s.A)("transition-opacity duration-500 object-cover", {
                            "opacity-0": o && !f && x && e?.image?.src
                        }),
                        p = (0, s.A)("transition-opacity duration-500 object-cover", {
                            "opacity-0": m && !f && x && e?.image?.src
                        });
                    return (0, l.jsxs)("div", {
                        className: "w-full",
                        ref: t,
                        "data-sentry-component": "VideosShowcase",
                        "data-sentry-source-file": "VideosShowcase.tsx",
                        children: [(0, l.jsxs)("div", {
                            className: "relative mx-auto aspect-square max-w-[35vw]",
                            children: [e?.image?.src && (0, l.jsx)(d.default, {
                                fill: !0,
                                alt: e?.image?.alt ?? "",
                                src: e?.image?.src,
                                className: h
                            }), x && !f && e?.video?.src && (0, l.jsx)(c, {
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
                                        maxMaxBufferLength: A.maxMaxBufferLength,
                                        startLevel: A.qualityStartLevel
                                    }
                                }
                            })]
                        }), (0, l.jsxs)("div", {
                            className: "relative mx-auto -mt-[7vw] aspect-video w-full shadow-[0px_0px_80px_rgba(0,0,0,0.7)]",
                            children: [a?.image?.src && (0, l.jsx)(d.default, {
                                fill: !0,
                                alt: a?.image?.alt ?? "",
                                src: a?.image?.src,
                                className: p
                            }), x && !f && a?.video?.src && (0, l.jsx)(c, {
                                url: a.video.src,
                                playing: a.video.autoplay ?? !0,
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
                                        maxMaxBufferLength: A.maxMaxBufferLength,
                                        startLevel: A.qualityStartLevel
                                    }
                                }
                            })]
                        })]
                    })
                },
                m = ({
                    isHidden: e,
                    theme: a,
                    videoShowcaseA: t,
                    videoShowcaseB: r
                }) => {
                    let i = {
                            videoShowcaseA: {
                                image: {
                                    src: t?.image?.asset.url ?? "",
                                    placeholder: t?.image?.asset.metadata?.lqip ?? "",
                                    alt: t?.imageAlt ?? ""
                                },
                                video: {
                                    src: t?.brandfolder?.muxHLSURL ?? ""
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
                        n = (0, s.A)({
                            dark: "dark" === a
                        });
                    return (0, l.jsx)(l.Fragment, {
                        children: !e && (0, l.jsx)("div", {
                            className: n,
                            children: (0, l.jsx)("div", {
                                className: "bg-white dark:bg-gray-900",
                                children: (0, l.jsx)("div", {
                                    className: "container py-28",
                                    children: (0, l.jsx)(u, {
                                        ...i
                                    })
                                })
                            })
                        })
                    })
                }
        },
        11605: (e, a, t) => {
            t.d(a, {
                A: () => n
            });
            var l = t(63036),
                r = t(3728),
                s = t(25662),
                i = t(4806);
            let n = ({
                actions: e = [],
                brandfolder: a,
                mention: t,
                eyebrow: n,
                title: o,
                titleSize: d,
                description: c,
                image: A,
                keyFigures: u,
                isHidden: m
            }) => {
                let {
                    mapFormActions: g
                } = (0, i.V)(e), x = g(e), f = (0, r.useMemo)(() => (u?.data ?? []).map(e => e?.value?.text ? {
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
                }), [u]);
                return (0, l.jsx)(l.Fragment, {
                    children: !m && (0, l.jsx)(s.A, {
                        actions: x,
                        mention: t || "",
                        eyebrow: n || "",
                        title: o || "",
                        titleSize: "small" === d ? "small" : "large" === d ? "large" : "medium",
                        description: c || "",
                        backgroundImage: {
                            src: A?.asset.url || "",
                            placeholder: A?.asset.metadata?.lqip || ""
                        },
                        keyFigures: f,
                        video: a?.muxHLSURL || ""
                    })
                })
            }
        },
        18802: (e, a, t) => {
            t.d(a, {
                A: () => s
            });
            var l = t(63036);
            t(3728);
            var r = t(21020);
            let s = ({
                title: e,
                action: a,
                isContained: t = !1,
                theme: s,
                isHidden: i
            }) => (0, l.jsx)(l.Fragment, {
                children: !i && (0, l.jsx)("section", {
                    className: "dark" === s ? "dark" : "",
                    children: (() => {
                        let s = a?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self";
                        return (0, l.jsx)(r.A, {
                            isContained: t,
                            action: {
                                title: a?.text || "",
                                href: a?.fieldLink?.linkReference?.href?.current || "",
                                target: s
                            },
                            children: e
                        })
                    })()
                })
            })
        },
        21020: (e, a, t) => {
            t.d(a, {
                A: () => i
            });
            var l = t(63036);
            t(3728);
            var r = t(52565),
                s = t(30042);
            let i = ({
                children: e,
                action: a,
                rounded: t = !1,
                isContained: i = !1,
                className: n = ""
            }) => (0, l.jsx)("div", {
                className: (0, r.$)("md:px-auto w-full px-4 transition-colors", {
                    "bg-gray-100 dark:bg-gray-900": !i
                }, {
                    "rounded-br-lg rounded-bl-lg": t && !i
                }, n),
                "data-sentry-component": "AnnouncementBanner",
                "data-sentry-source-file": "AnnouncementBanner.tsx",
                children: (0, l.jsxs)("div", {
                    className: (0, r.$)("container m-auto py-3 text-xs leading-4 font-medium text-gray-900 transition-colors dark:text-gray-100", {
                        "text-center": t && !i
                    }, {
                        "my-6 rounded-lg bg-gray-100 dark:bg-gray-900": i
                    }),
                    children: [e, (0, l.jsx)(s.A, {
                        className: "mx-auto mt-0 ml-2 inline-block [&>div>span]:text-xs",
                        href: a.href,
                        target: a.target,
                        size: "tiny",
                        underline: !0,
                        "data-link-location": "AnnouncementBanner",
                        "data-sentry-element": "Link",
                        "data-sentry-source-file": "AnnouncementBanner.tsx",
                        children: a.title
                    })]
                })
            })
        },
        25662: (e, a, t) => {
            t.d(a, {
                A: () => m
            });
            var l = t(63036),
                r = t(3728),
                s = t(1739),
                i = t(49025),
                n = t(52565),
                o = t(67101),
                d = t(49377),
                c = t(27208),
                A = t(16335);
            let u = (0, i.default)(() => Promise.all([t.e(61242), t.e(5934)]).then(t.t.bind(t, 68009, 23)), {
                    loadableGenerated: {
                        webpack: () => [68009]
                    },
                    ssr: !1
                }),
                m = ({
                    eyebrow: e,
                    title: a,
                    titleSize: t = "medium",
                    description: i,
                    backgroundImage: m,
                    actions: g = [],
                    keyFigures: x,
                    video: f,
                    mention: h,
                    fullScreen: p = !0
                }) => {
                    let b = (0, r.useRef)(null),
                        y = (0, o.W)(b, {
                            once: !0
                        }),
                        v = (0, d.I)(),
                        [j, k] = (0, r.useState)(!1),
                        w = {
                            maxMaxBufferLength: 1,
                            qualityStartLevel: 1
                        },
                        C = (0, n.A)(`font-nohemi mt-24 my-4 ${"small"===t?"mb-6":"mb-8"}`, {
                            "loco-text-heading-xl": "medium" === t,
                            "loco-text-headline": "large" === t,
                            "loco-text-heading-lg": "small" === t
                        }),
                        N = (0, n.A)("object-cover transition-opacity duration-1000 opacity-100", {
                            "opacity-0": j
                        });
                    return (0, l.jsxs)("section", {
                        ref: b,
                        className: "dark relative",
                        "data-sentry-component": "Headliner",
                        "data-sentry-source-file": "Headliner.tsx",
                        children: [m && (0, l.jsx)(s.default, {
                            src: m.src,
                            placeholder: "blur",
                            blurDataURL: m.placeholder,
                            fill: !0,
                            alt: "",
                            className: N,
                            sizes: "100vw"
                        }), y && !v && f && (0, l.jsx)(u, {
                            url: f || "",
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
                            className: `relative container flex ${p&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                            children: [(0, l.jsx)("div", {
                                className: "flex grow flex-col justify-stretch",
                                children: (0, l.jsxs)("div", {
                                    className: "flex h-full grow flex-col items-center justify-center text-center",
                                    children: [e && (0, l.jsx)("div", {
                                        className: "loco-caption-lg-semibold",
                                        children: e
                                    }), (0, l.jsx)("h1", {
                                        className: C,
                                        children: a
                                    }), i && (0, l.jsx)("div", {
                                        className: "loco-caption-sm-semibold mt-5",
                                        children: i
                                    }), g && (0, l.jsx)("div", {
                                        className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                        children: g.map((e, a) => {
                                            if (e.link) return (0, l.jsx)(A.A, {
                                                rounded: !0,
                                                hasArrow: !0,
                                                href: e.link.href,
                                                target: e.link.target,
                                                variant: 0 === a ? "primary" : "secondary",
                                                children: e.title
                                            }, `headliner-action-link-${e.title}-${a}`);
                                            if (e.form) {
                                                let t = {
                                                    ...e.form.form,
                                                    ...e.form.webinarFormParametersContent,
                                                    extraFields: e.form.extraFields
                                                };
                                                return (0, l.jsx)("div", {
                                                    children: e.form.renderModal({
                                                        label: e.title,
                                                        form: t
                                                    })
                                                }, `headliner-action-modal-${e.title}-${a}`)
                                            }
                                            return null
                                        })
                                    })]
                                })
                            }), x && (0, l.jsx)(c.A, {
                                keyFigures: x,
                                nested: !0
                            })]
                        }), h && (0, l.jsx)("div", {
                            className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:top-10 md:right-8 md:left-auto md:w-auto md:px-0 md:py-8",
                            children: h
                        })]
                    })
                }
        },
        40187: (e, a, t) => {
            t.d(a, {
                A: () => r
            });
            var l = t(63036);
            t(3728);
            let r = ({
                className: e,
                handleIsPlaying: a,
                label: t,
                ...r
            }) => (0, l.jsx)("div", {
                className: e,
                "data-sentry-component": "ButtonPlay",
                "data-sentry-source-file": "ButtonPlay.tsx",
                children: (0, l.jsx)("button", {
                    className: "transition-bg bg-blue hover:bg-blue-dark flex h-20 w-20 transform items-center justify-center rounded-full duration-300",
                    onClick: a,
                    type: "button",
                    "aria-label": t,
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
        41685: (e, a, t) => {
            t.d(a, {
                A: () => f
            });
            var l = t(63036),
                r = t(3728),
                s = t(52565),
                i = t(67101),
                n = t(49377),
                o = t(1739),
                d = t(49025),
                c = t(16539),
                A = t(16335),
                u = t(40187),
                m = t(33318);
            let g = (0, d.default)(() => Promise.all([t.e(61242), t.e(5934)]).then(t.t.bind(t, 68009, 23)), {
                    loadableGenerated: {
                        webpack: () => [68009]
                    },
                    ssr: !1
                }),
                x = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                f = ({
                    title: e,
                    description: a,
                    image: t,
                    video: d,
                    action: f,
                    variant: h = "column",
                    videoInline: p = !0,
                    buttonLabel: b = "Play video",
                    blockKey: y,
                    titleTag: v = "h3",
                    locale: j
                }) => {
                    let k = (0, r.useRef)(null),
                        [w, C] = (0, r.useState)(!1),
                        N = (0, i.W)(k),
                        E = (0, n.I)(),
                        L = () => {
                            C(!0)
                        };
                    (0, r.useEffect)(() => {
                        p ? C(N) : N || C(!1)
                    }, [N, p]);
                    let _ = (0, s.A)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                            "opacity-0 pointer-events-none": w && !E && N && d?.src
                        }),
                        S = (0, s.A)("flex flex-col", {
                            "min-h-[14rem]": "stacked" === h || "column" === h,
                            grow: "column" !== h && "horizontal" !== h,
                            "min-h-[14rem] xl:min-h-[18rem] xl:flex-row xl:gap-4": "column" === h
                        }),
                        B = (0, s.A)("rounded-lg bg-gray-100 p-4 dark:bg-gray-900", {
                            "h-full": "horizontal" !== h,
                            "group h-full relative p-[1px] xl:flex-row xl:gap-6 ": "horizontal" === h
                        }),
                        I = (0, s.A)("relative overflow-hidden rounded-lg", {
                            "aspect-video w-full": "horizontal" !== h,
                            "aspect-video w-full xl:flex-shrink-0 xl:self-start xl:max-w-1/2": "horizontal" === h
                        }),
                        T = (0, s.A)("cover absolute object-cover", {
                            "transition-transform duration-400 group-hover:scale-110": "horizontal" === h
                        }),
                        M = "horizontal" === h && f?.href,
                        R = (0, l.jsxs)("div", {
                            ref: k,
                            className: B,
                            children: ["horizontal" === h && (0, l.jsx)("div", {
                                className: "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-400 [background:linear-gradient(to_top,#000_0%,#666_60%,#666_100%)] group-hover:opacity-100"
                            }), (0, l.jsxs)("div", {
                                className: (0, s.A)({
                                    "relative z-10 flex h-full flex-col gap-6 rounded-lg bg-gray-100 p-3 xl:w-full xl:flex-row dark:bg-gray-900": "horizontal" === h,
                                    "flex h-full flex-col justify-between gap-4": "horizontal" !== h
                                }),
                                children: [(t?.src || d?.src) && (0, l.jsxs)("div", {
                                    className: I,
                                    children: [d?.src && (0, l.jsx)(g, {
                                        url: d.src,
                                        playing: w && N && !E,
                                        loop: !!p,
                                        muted: p,
                                        playsinline: p && !E,
                                        width: "100%",
                                        height: "100%",
                                        className: "absolute top-0 left-0 [&>video]:object-cover",
                                        onReady: () => {
                                            p && C(!0)
                                        },
                                        controls: !p,
                                        config: {
                                            hlsOptions: {
                                                maxMaxBufferLength: x.maxMaxBufferLength,
                                                startLevel: x.qualityStartLevel
                                            }
                                        }
                                    }), t && (0, l.jsxs)("div", {
                                        className: _,
                                        onClick: L,
                                        children: [!p && (0, l.jsx)(u.A, {
                                            handleIsPlaying: L,
                                            className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                            label: b,
                                            "data-link-location": `${y}-video-play`,
                                            "data-link-type": "CTA"
                                        }), (0, l.jsx)(o.default, {
                                            src: t.src,
                                            placeholder: t.placeholder ? "blur" : "empty",
                                            blurDataURL: t.placeholder,
                                            fill: !0,
                                            alt: t.alt ?? "",
                                            className: T,
                                            sizes: `(min-width: ${c.A.Large}px) 33vw, (min-width: ${c.A.Medium}px) 50vw, 100vw`
                                        })]
                                    })]
                                }), (0, l.jsx)("div", {
                                    className: (0, s.A)(S),
                                    children: "column" !== h && "horizontal" !== h ? (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)(v, {
                                            className: "loco-text-body-lg-medium -mt-2",
                                            children: e
                                        }), (0, l.jsxs)("div", {
                                            className: "flex shrink-0 grow flex-col justify-between",
                                            children: [(0, l.jsx)("div", {
                                                className: "loco-text-body mt-2 text-gray-700 dark:text-gray-400",
                                                children: a
                                            }), (f?.href && f?.label || f?.renderModal) && (0, l.jsx)("div", {
                                                className: "mt-8",
                                                children: f?.renderModal ? f.renderModal() : (0, l.jsx)(A.A, {
                                                    locale: j,
                                                    href: M ? void 0 : f.href,
                                                    target: f.target,
                                                    outlined: !0,
                                                    rounded: !0,
                                                    hasArrow: !0,
                                                    tag: M ? "span" : "button",
                                                    "data-link-location": y,
                                                    "data-link-type": "CTA",
                                                    children: f.label
                                                })
                                            })]
                                        })]
                                    }) : "horizontal" === h ? (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)(v, {
                                            className: "loco-text-body-lg-medium -mt-2 lg:mt-0",
                                            children: e
                                        }), (0, l.jsxs)("div", {
                                            className: "flex shrink-0 grow flex-col justify-between lg:flex-1",
                                            children: [(0, l.jsx)("div", {
                                                className: "loco-text-body mt-2 text-gray-700 lg:text-gray-900 dark:text-gray-400 lg:dark:text-white",
                                                children: a
                                            }), (f?.href && f?.label || f?.renderModal) && (0, l.jsx)("div", {
                                                className: "mt-8 lg:mt-6",
                                                children: f?.renderModal ? f.renderModal() : (0, l.jsx)(A.A, {
                                                    locale: j,
                                                    href: M ? void 0 : f.href,
                                                    target: f.target,
                                                    outlined: !0,
                                                    rounded: !0,
                                                    hasArrow: !0,
                                                    tag: M ? "span" : "button",
                                                    "data-link-location": y,
                                                    "data-link-type": "CTA",
                                                    children: f.label
                                                })
                                            })]
                                        })]
                                    }) : (0, l.jsxs)(l.Fragment, {
                                        children: [(0, l.jsx)(v, {
                                            className: "loco-text-body-lg-medium -mt-2 xl:w-2/5",
                                            children: e
                                        }), (0, l.jsxs)("div", {
                                            className: "flex shrink-0 grow flex-col justify-between xl:-mt-1 xl:w-3/5",
                                            children: [(0, l.jsx)("div", {
                                                className: "loco-text-body mt-1 xl:mt-0",
                                                children: a
                                            }), (f?.href && f?.label || f?.renderModal) && (0, l.jsx)("div", {
                                                children: f?.renderModal ? f.renderModal() : (0, l.jsx)(A.A, {
                                                    locale: j,
                                                    href: M ? void 0 : f.href,
                                                    target: f.target,
                                                    outlined: !0,
                                                    rounded: !0,
                                                    hasArrow: !0,
                                                    tag: M ? "span" : "button",
                                                    "data-link-location": y,
                                                    "data-link-type": "CTA",
                                                    children: f.label
                                                })
                                            })]
                                        })]
                                    })
                                })]
                            })]
                        });
                    return M ? (0, l.jsx)(m.N_, {
                        href: f.href,
                        target: f.target,
                        className: "cursor-pointer",
                        "data-link-location": y,
                        "data-link-type": "CTA",
                        children: R
                    }) : R
                }
        },
        51822: (e, a, t) => {
            t.d(a, {
                A: () => h
            });
            var l = t(63036),
                r = t(3728);
            let s = t(71008).A;
            var i = t(52565),
                n = t(41685),
                o = t(97014),
                d = t(59867);
            t(8378), t(92330);
            var c = t(36071),
                A = t(62289),
                u = t(16539);
            let m = ({
                theme: e = "light",
                slides: a,
                variant: t = "short",
                blockKey: s,
                title: m
            }) => {
                let [g, x] = (0, r.useState)(0), f = (0, r.useRef)(null), h = (0, A.A)(`(min-width: ${u.A.Large}px)`), p = "gdc2026" === t, b = (0, i.A)({
                    dark: "dark" === e
                }), y = (0, r.useCallback)((e, a) => {
                    x(a)
                }, []), v = (0, r.useCallback)(() => {
                    f.current && f.current.slickPrev()
                }, []), j = (0, r.useCallback)(() => {
                    f.current && f.current.slickNext()
                }, []), k = {
                    dots: !1,
                    infinite: !1,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: !1,
                    beforeChange: y,
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1
                        }
                    }]
                }, w = (e, a) => {
                    let r = {
                        uniteCard: n.A,
                        cardSubscription: o.A
                    } [e.type];
                    return (0, l.jsx)("div", {
                        className: p ? "col-span-12 h-full" : "col-span-12 md:col-span-6 lg:col-span-4",
                        "data-sentry-component": "renderCards",
                        "data-sentry-source-file": "CarouselCards.tsx",
                        children: (0, l.jsx)(r, {
                            ...e,
                            variant: p ? "horizontal" : t,
                            blockKey: `${s}-${a}`,
                            titleTag: "p",
                            "data-sentry-element": "CardComponent",
                            "data-sentry-source-file": "CarouselCards.tsx"
                        })
                    }, `carousel-card-${s}-${a}-${e.title}`)
                }, C = () => {
                    let t = h ? 2 : 1,
                        r = a.length - t + 1;
                    return (0, l.jsx)("div", {
                        className: "flex gap-2",
                        "data-sentry-component": "renderDots",
                        "data-sentry-source-file": "CarouselCards.tsx",
                        children: Array.from({
                            length: r
                        }).map((a, t) => (0, l.jsx)("button", {
                            className: (0, i.A)("h-2 w-2 rounded-full transition-all", g === t ? "bg-white" : "dark" === e ? "bg-gray-600" : "bg-gray-300"),
                            "aria-label": `Go to slide ${t+1}`,
                            "aria-current": g === t ? "true" : "false"
                        }, t))
                    })
                }, N = h ? 2 : 1, E = a.length - N + 1, L = 0 === g, _ = g >= E - 1, S = h && a.length > 2 || !h && a.length > 1;
                return p ? (0, l.jsx)("section", {
                    className: b,
                    children: (0, l.jsx)("div", {
                        className: "carousel-cards py-16 dark:bg-black",
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            children: [(0, l.jsxs)("div", {
                                className: "mb-8 hidden items-center gap-8 lg:flex",
                                children: [(0, l.jsx)("div", {
                                    className: "flex flex-1 items-center",
                                    children: m && (0, l.jsx)("h2", {
                                        className: "loco-text-heading-xs text-left",
                                        children: m
                                    })
                                }), S && (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: "flex flex-1 items-center justify-center",
                                        children: C()
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-1 items-center justify-end gap-2",
                                        children: [(0, l.jsx)(c.A, {
                                            direction: "left",
                                            onPress: v,
                                            ariaLabel: "Previous slide",
                                            variant: "primary",
                                            isDisabled: L
                                        }), (0, l.jsx)(c.A, {
                                            onPress: j,
                                            ariaLabel: "Next slide",
                                            variant: "primary",
                                            isDisabled: _
                                        })]
                                    })]
                                })]
                            }), m && (0, l.jsx)("h2", {
                                className: "loco-text-heading-xl mb-6 text-left lg:hidden",
                                children: m
                            }), (0, r.createElement)(d.A, {
                                ...k,
                                ref: f,
                                key: `slider-${a.length}`,
                                className: "overflow-hidden"
                            }, a.map(w)), S && (0, l.jsxs)("div", {
                                className: "mt-8 flex flex-col items-center gap-4 lg:hidden",
                                children: [C(), (0, l.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [(0, l.jsx)(c.A, {
                                        direction: "left",
                                        onPress: v,
                                        ariaLabel: "Previous slide",
                                        variant: "primary",
                                        isDisabled: L
                                    }), (0, l.jsx)(c.A, {
                                        onPress: j,
                                        ariaLabel: "Next slide",
                                        variant: "primary",
                                        isDisabled: _
                                    })]
                                })]
                            })]
                        })
                    })
                }) : (0, l.jsx)("section", {
                    className: b,
                    "data-sentry-component": "CarouselCards",
                    "data-sentry-source-file": "CarouselCards.tsx",
                    children: (0, l.jsx)("div", {
                        className: "carousel-cards py-16 dark:bg-black",
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            children: [(0, l.jsx)("div", {
                                className: "mb-8 flex items-center justify-between",
                                children: S && (0, l.jsxs)(l.Fragment, {
                                    children: [C(), (0, l.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, l.jsx)(c.A, {
                                            direction: "left",
                                            onPress: v,
                                            ariaLabel: "Previous slide",
                                            variant: "primary",
                                            isDisabled: L
                                        }), (0, l.jsx)(c.A, {
                                            onPress: j,
                                            ariaLabel: "Next slide",
                                            variant: "primary",
                                            isDisabled: _
                                        })]
                                    })]
                                })
                            }), (0, r.createElement)(d.A, {
                                ...k,
                                ref: f,
                                key: `slider-${a.length}`,
                                className: "overflow-visible",
                                "data-sentry-element": "Slider",
                                "data-sentry-source-file": "CarouselCards.tsx"
                            }, a.map(w))]
                        })
                    })
                })
            };
            var g = t(18245),
                x = t(4806);
            let f = [{
                    src: "/_next/static/media/unity-fallback-1.e8340c42.jpg",
                    height: 2160,
                    width: 3840,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACWA//EABkQAAIDAQAAAAAAAAAAAAAAAAMEAAERM//aAAgBAQABPwArpWuuXP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",
                    blurWidth: 8,
                    blurHeight: 5
                }, {
                    src: "/_next/static/media/unity-fallback-2.1d50a20b.jpg",
                    height: 2160,
                    width: 3840,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACTA//EABoQAAICAwAAAAAAAAAAAAAAAAEDABECMnH/2gAIAQEAAT8AfSVBeI3ok8n/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q==",
                    blurWidth: 8,
                    blurHeight: 5
                }, {
                    src: "/_next/static/media/unity-fallback-3.8d91a544.jpg",
                    height: 2160,
                    width: 3840,
                    blurDataURL: "data:image/jpeg;base64,/9j/2wBDAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/2wBDAQoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/v/wgARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAACdg//EABkQAQEAAwEAAAAAAAAAAAAAAAIDAAURIf/aAAgBAQABPwDXEXrGbPjfM//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Af//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Af//Z",
                    blurWidth: 8,
                    blurHeight: 5
                }],
                h = ({
                    theme: e,
                    title: a,
                    description: t,
                    filters: r,
                    actions: i,
                    variant: n,
                    isCarousel: o,
                    cards: d,
                    cardsBlog: c,
                    newsItems: A,
                    blogItems: u,
                    blockKey: h,
                    isHidden: p,
                    cardsHeading: b
                }) => {
                    let {
                        mapFormActions: y,
                        renderModal: v
                    } = (0, x.V)(d?.map(e => e.action).filter(Boolean)), j = (e, a = 0, t = !1) => {
                        let l = !!e?.action?.form,
                            r = null;
                        e?.action ? r = {
                            label: e.action?.title,
                            href: l ? "" : e.action?.link?.linkReference?.href.current || "",
                            target: e.action?.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                            ...l ? {
                                renderModal: () => v({
                                    label: e.action?.title ?? "",
                                    form: e.action.form
                                })
                            } : {}
                        } : e?.pageUrl && (r = {
                            label: "View Post",
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
                        else if (t) {
                            let t = f[a % 3];
                            s = {
                                src: t.src,
                                alt: e.title || "Unity News",
                                placeholder: t.blurDataURL
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
                            action: r,
                            tags: e.tags || [],
                            videoInline: e?.videoInline
                        }
                    }, k = o ? (() => {
                        if (!d || 0 === d.length) return c?.length && c?.length > 0 ? c?.map((e, a) => j(e, a)) : [];
                        let e = 0,
                            a = 0;
                        return d.map((t, l) => {
                            if ("cardDynamic" === t._type) {
                                if ("news" === t.contentType && A && e < A.length) {
                                    let a = A[e],
                                        t = e;
                                    return e++, j(a, t, !0)
                                }
                                if ("blog" === t.contentType && u && a < u.length) {
                                    let e = u[a];
                                    return a++, j(e, l)
                                }
                                return null
                            }
                            return j(t, l)
                        }).filter(e => null !== e)
                    })() : d?.length && d?.length > 0 ? d?.filter(e => "cardDynamic" !== e._type).map((e, a) => j(e, a)) : c?.length && c?.length > 0 ? c?.map((e, a) => j(e, a)) : [], w = r?.map((e, a) => ({
                        title: e.title,
                        value: e.value,
                        onPress: () => {
                            (0, g.Ay)({
                                event: "userEvent",
                                event_name: "navigation_click",
                                properties: {
                                    navigation_type: "internal",
                                    navigation_click_text: e.title,
                                    navigation_href: window.location.href,
                                    navigation_link_location: `cards_block_filter_${a+1}`
                                }
                            })
                        }
                    })) || [];
                    return o ? (0, l.jsx)(m, {
                        theme: "dark" === e ? "dark" : "light",
                        variant: "stacked" === n || "column" === n || "short" === n || "gdc2026" === n ? n : "column",
                        slides: k,
                        blockKey: h,
                        title: a || void 0
                    }) : (0, l.jsx)(l.Fragment, {
                        children: !p && (0, l.jsx)(s, {
                            theme: "dark" === e ? "dark" : "collapsiblecards" === e ? "collapsiblecards" : "light",
                            title: a || "",
                            description: t,
                            filters: w,
                            actions: i?.map(e => ({
                                title: e?.title || "",
                                href: e.link?.linkReference?.href.current || "",
                                target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                            })) || [],
                            variant: "stacked" === n || "column" === n || "short" === n ? n : "column",
                            cards: k,
                            blockKey: h,
                            cardsHeading: "div" === b || "h2" === b || "h3" === b || "h4" === b ? b : a ? "h3" : "h2"
                        })
                    })
                }
        },
        58574: (e, a, t) => {
            t.d(a, {
                A: () => i
            });
            var l = t(63036),
                r = t(24546);
            t(3728);
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
            let i = ({
                content: e,
                isHidden: a
            }) => (0, l.jsx)(l.Fragment, {
                children: !a && (0, l.jsx)(s, {
                    children: (0, l.jsx)(s.Content, {
                        children: (0, l.jsx)(r.RK, {
                            value: e,
                            components: e
                        })
                    })
                })
            })
        },
        65774: (e, a, t) => {
            t.d(a, {
                A: () => i
            });
            var l = t(63036);
            t(3728);
            var r = t(16335),
                s = t(52565);
            let i = ({
                theme: e = "light",
                actions: a,
                description: t,
                title: i,
                padding: n = !0,
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
                            className: `container flex flex-col ${"center"===o&&"items-center text-center"} ${n&&"pt-14 pb-12 md:pt-24"}`,
                            children: [(0, l.jsx)("div", {
                                className: "max-w-3xl",
                                children: i && (0, l.jsx)("h2", {
                                    className: "loco-text-heading-md !font-nohemi",
                                    children: i
                                })
                            }), (t || d) && (0, l.jsxs)("div", {
                                className: (0, s.A)("loco-text-body-lg [&_a]:text-blue mt-6 text-gray-500", "center" === o || "left" === o ? "max-w-5xl" : "max-w-3xl"),
                                children: [t, d]
                            }), a && (0, l.jsx)("div", {
                                className: "mt-8 flex justify-center gap-4",
                                children: a.map((e, a) => {
                                    let t = `title-description-block-action-${e.title}-${a}`;
                                    return 0 === a ? (0, l.jsx)(r.A, {
                                        href: e.href,
                                        target: e.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        "data-link-location": "TitleDescriptionBlock",
                                        children: e.title
                                    }, t) : (0, l.jsx)(r.A, {
                                        href: e.href,
                                        target: e.target,
                                        variant: "secondary",
                                        rounded: !0,
                                        hasArrow: !0,
                                        "data-link-location": "TitleDescriptionBlock",
                                        "data-sentry-element": "Button",
                                        "data-sentry-component": "renderActions",
                                        "data-sentry-source-file": "TitleDescriptionBlock.tsx",
                                        children: e.title
                                    }, t)
                                })
                            })]
                        })
                    })
                })
            }
        },
        71008: (e, a, t) => {
            t.d(a, {
                A: () => c
            });
            var l = t(63036),
                r = t(3728),
                s = t(52565),
                i = t(41685),
                n = t(97014),
                o = t(65774),
                d = t(16335);
            let c = ({
                theme: e = "light",
                title: a,
                description: t,
                filters: c,
                actions: A,
                cards: u,
                variant: m = "column",
                blockKey: g,
                cardsHeading: x
            }) => {
                let [f, h] = (0, r.useState)(c?.[0]?.value || ""), p = (e, a) => {
                    let t = {
                        uniteCard: i.A,
                        cardSubscription: n.A
                    } [e?.type];
                    return (0, l.jsx)("div", {
                        className: "w-full px-0 py-1 md:w-1/2 md:px-1 md:py-1 lg:w-1/3",
                        "data-sentry-component": "renderCards",
                        "data-sentry-source-file": "Cards.tsx",
                        children: (0, l.jsx)(t, {
                            ...e,
                            variant: m,
                            blockKey: g,
                            titleTag: x,
                            "data-sentry-element": "CardComponent",
                            "data-sentry-source-file": "Cards.tsx"
                        })
                    }, `${e.title}-${a}`)
                }, b = (0, s.A)({
                    dark: "dark" === e || "collapsiblecards" === e
                }), y = (0, s.A)({
                    "bg-white dark:bg-black": "light" === e || "dark" === e,
                    "bg-transparent": "collapsiblecards" === e
                }), v = (0, s.A)("w-full flex flex-wrap justify-center", {
                    "mt-8 pb-10": (!a || !t) && "collapsiblecards" !== e
                });
                return (0, l.jsx)("section", {
                    className: b,
                    "data-sentry-component": "Cards",
                    "data-sentry-source-file": "Cards.tsx",
                    children: (0, l.jsx)("div", {
                        className: y,
                        children: (0, l.jsxs)("div", {
                            className: "collapsiblecards" === e ? "flex flex-col items-center" : "container flex flex-col items-center",
                            children: [(a || t) && (0, l.jsx)(o.A, {
                                title: a,
                                description: t
                            }), (c && c.length > 0 || A && A.length > 0) && (0, l.jsxs)("div", {
                                className: "mb-8 flex w-full flex-wrap justify-center gap-4",
                                children: [c.map((e, a) => (0, l.jsx)(d.A, {
                                    rounded: !0,
                                    outlined: !0,
                                    onPress: () => {
                                        e.onPress && e.onPress(), h(e.value)
                                    },
                                    active: f.includes(e.value),
                                    "data-link-location": `${g}-filter-${e}-${a}`,
                                    "data-link-type": "CTA",
                                    "data-sentry-element": "Button",
                                    "data-sentry-component": "renderFilters",
                                    "data-sentry-source-file": "Cards.tsx",
                                    children: e.title
                                }, `filter-${e}-${a}`)), A.map((e, a) => (0, l.jsx)(d.A, {
                                    href: e.href,
                                    rounded: !0,
                                    outlined: !0,
                                    hasArrow: !0,
                                    "data-link-location": `${g}-action-${e}-${a}`,
                                    "data-link-type": "CTA",
                                    "data-sentry-element": "Button",
                                    "data-sentry-component": "renderActions",
                                    "data-sentry-source-file": "Cards.tsx",
                                    children: e.title
                                }, `action-${e}-${a}`))]
                            }), (0, l.jsx)("div", {
                                className: v,
                                children: f ? u.filter(e => e.tags?.includes(f)).map(p) : u.map(p)
                            })]
                        })
                    })
                })
            }
        },
        73091: (e, a, t) => {
            t.d(a, {
                A: () => f
            });
            var l = t(63036),
                r = t(3728),
                s = t(52565),
                i = t(16335),
                n = t(49025),
                o = t(67101),
                d = t(49377),
                c = t(1739);
            let A = (0, n.default)(() => Promise.all([t.e(61242), t.e(5934)]).then(t.t.bind(t, 68009, 23)), {
                    loadableGenerated: {
                        webpack: () => [68009]
                    },
                    ssr: !1
                }),
                u = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                m = ({
                    title: e,
                    eyebrow: a,
                    description: t,
                    image: n,
                    video: m,
                    visualPlacement: g,
                    action: x,
                    blockKey: f,
                    cardHeading: h = "p"
                }) => {
                    let p = (0, r.useRef)(null),
                        [b, y] = (0, r.useState)(!1),
                        v = (0, o.W)(p, {
                            once: !0
                        }),
                        j = (0, d.I)(),
                        k = (0, s.A)("bg-gray-100 relative h-full rounded-xl overflow-hidden dark:bg-gray-900", {
                            dark: "background" === g
                        }),
                        w = (0, s.A)("z-0", {
                            "absolute top-0 left-0 w-full h-full": "background" === g,
                            "aspect-video relative mt-8 -mb-8": "default" === g
                        }, "background" === g ? "after:content after:absolute after:z-10 after:inset-0 after:bg-gradient-to-b after:from-10% after:from-black after:to-transparent after:opacity-75" : ""),
                        C = (0, s.A)("z-10 transition-opacity duration-500 object-cover", {
                            "opacity-0": b && !j && v && m?.src,
                            "": "background" === g
                        }),
                        N = (0, s.A)("absolute left-0 top-0 [&>video]:object-cover", {
                            "brightness-50 ": "background" === g
                        });
                    return (0, l.jsx)("div", {
                        className: k,
                        ref: p,
                        "data-sentry-component": "BentoCard",
                        "data-sentry-source-file": "BentoCard.tsx",
                        children: (0, l.jsxs)("div", {
                            className: "flex h-full flex-col justify-between p-8",
                            children: [(0, l.jsxs)("div", {
                                className: "relative z-10",
                                children: [a && (0, l.jsx)("span", {
                                    className: "loco-caption-sm mb-4 block opacity-70",
                                    children: a
                                }), e && (0, l.jsx)(h, {
                                    className: "loco-text-heading-xs",
                                    children: e
                                }), t && (0, l.jsx)("p", {
                                    className: "loco-text-body-sm mt-2 max-w-xs opacity-70",
                                    children: t
                                }), (x?.href || x?.renderModal) && (0, l.jsx)("div", {
                                    className: "mt-8",
                                    children: x?.renderModal ? x.renderModal() : (0, l.jsx)(i.A, {
                                        href: x.href,
                                        rounded: !0,
                                        outlined: !0,
                                        hasArrow: !0,
                                        "data-link-location": `${f}-action-${x.label}`,
                                        "data-link-type": "CTA",
                                        children: x.label
                                    }, `action-${x.label}`)
                                })]
                            }), (0, l.jsxs)("div", {
                                className: w,
                                children: [n?.src && (0, l.jsx)(c.default, {
                                    fill: !0,
                                    alt: n.alt ?? "",
                                    src: n.src,
                                    className: C
                                }), v && !j && m?.src && (0, l.jsx)(A, {
                                    url: m.src,
                                    playing: m.autoplay ?? !0,
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
                                            maxMaxBufferLength: u.maxMaxBufferLength,
                                            startLevel: u.qualityStartLevel
                                        }
                                    }
                                })]
                            })]
                        })
                    })
                },
                g = ({
                    cards: e,
                    blockKey: a,
                    cardsHeading: t
                }) => {
                    let r = (0, s.A)("bentoCards_grid", 1 === e.length && "is-single", e.length % 2 == 0 && "is-two-multiple", e.length % 3 == 0 && "is-three-multiple", function(e) {
                        if (e <= 1) return !1;
                        if (2 === e) return !0;
                        if (e % 2 == 0) return !1;
                        for (let a = 3; a <= Math.sqrt(e); a += 2)
                            if (e % a == 0) return !1;
                        return !0
                    }(e.length) && "is-prime");
                    return (0, l.jsx)("div", {
                        "data-sentry-component": "BentoCards",
                        "data-sentry-source-file": "BentoCards.tsx",
                        children: (0, l.jsx)("div", {
                            className: r,
                            children: e.map((e, r) => (0, l.jsx)("div", {
                                className: "bentoCards_item",
                                children: (0, l.jsx)(m, {
                                    ...e,
                                    blockKey: a,
                                    cardHeading: t
                                })
                            }, `bento-card-${a}-${r}`))
                        })
                    })
                };
            var x = t(4806);
            let f = ({
                theme: e,
                blockKey: a,
                isHidden: t,
                cards: r,
                bentoCardsHeading: i
            }) => {
                let {
                    renderModal: n
                } = (0, x.V)(r?.map(e => e.actions?.[0]).filter(Boolean)), o = r?.map(e => {
                    let a = e?.actions?.[0],
                        t = !!a?.form;
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
                        action: a ? (() => {
                            let e = t ? "" : a.link?.linkReference?.href.current ?? "",
                                l = a.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                                r = {
                                    label: a.title ?? "",
                                    href: e,
                                    target: l
                                };
                            return t ? {
                                ...r,
                                renderModal: () => {
                                    let e = a.form || {},
                                        t = {
                                            title: e.title || "",
                                            description: e.description || "",
                                            fields: e.fields || [],
                                            actions: e.actions || {},
                                            sfdcIntegration: a.webinarFormParametersContent?.sfdcIntegration || {}
                                        };
                                    return n({
                                        label: a.title ?? "",
                                        form: t
                                    })
                                }
                            } : r
                        })() : null
                    }
                }) ?? [], d = (0, s.A)({
                    dark: "dark" === e
                });
                return (0, l.jsx)(l.Fragment, {
                    children: !t && (0, l.jsx)("div", {
                        className: d,
                        children: (0, l.jsx)("div", {
                            className: "bg-white dark:bg-black",
                            children: (0, l.jsx)("div", {
                                className: "container py-16",
                                children: (0, l.jsx)(g, {
                                    blockKey: a,
                                    theme: "dark" === e ? "dark" : "light",
                                    cards: o,
                                    cardsHeading: "h2" === i || "h3" === i || "h4" === i ? i : "p"
                                })
                            })
                        })
                    })
                })
            }
        },
        86101: (e, a, t) => {
            t.d(a, {
                Ay: () => u,
                W3: () => d,
                th: () => c
            });
            var l = t(3728),
                r = t(24265),
                s = t.n(r),
                i = t(5002),
                n = t.n(i);
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
            let A = s()((e, a) => {
                    let {
                        type: t,
                        payload: l
                    } = a;
                    switch (t) {
                        case "SET_SELECTED_CATEGORY": {
                            let a, {
                                    categoryId: t,
                                    subcategoryId: r
                                } = l,
                                {
                                    subcategories: s,
                                    allSubcategoriesLabel: i = "",
                                    localizedAllSubcategoriesLabel: o
                                } = e.categories.find(({
                                    _id: e
                                }) => e === t) || {},
                                d = s ?? [];
                            if (void 0 === r) {
                                let e = d.find(e => e.makeDefaultLandingSubcategory);
                                a = e?._id ?? null
                            } else a = r;
                            return n()(A({
                                type: "SET_SUBCATEGORIES",
                                payload: d
                            }), A({
                                type: "SET_SELECTED_SUBCATEGORY",
                                payload: a
                            }), A({
                                type: "SET_ALL_SUBCATEGORIES_LABEL",
                                payload: o ?? i
                            }), e => ({
                                ...e,
                                selectedCategory: t
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
                                categoryParam: a,
                                subcategoryParam: t
                            } = l, r = e.categories.find(({
                                label: e
                            }) => e?.toLowerCase() === a) || e.categories[0];
                            if (!r) return e;
                            let s = r.subcategories ?? [],
                                {
                                    _id: i,
                                    allSubcategoriesLabel: n = "",
                                    localizedAllSubcategoriesLabel: o
                                } = r,
                                d = null;
                            if (t) {
                                let e = s.find(e => e.label?.toLowerCase() === t);
                                d = e?._id ?? null
                            }
                            if (null === d) {
                                let e = s.find(e => e.makeDefaultLandingSubcategory);
                                d = e?._id ?? null
                            }
                            return {
                                ...e,
                                selectedCategory: i,
                                subcategories: s,
                                selectedSubcategory: d,
                                allSubcategoriesLabel: o ?? n
                            }
                        }
                        default:
                            return e
                    }
                }),
                u = e => (0, l.useReducer)(A, {
                    ...o,
                    ...e
                }, e => {
                    let a = e.categories[0];
                    if (!a) return e;
                    let t = a.subcategories ?? [],
                        {
                            _id: l,
                            allSubcategoriesLabel: r = "",
                            localizedAllSubcategoriesLabel: s
                        } = a,
                        i = t.find(e => e.makeDefaultLandingSubcategory);
                    return {
                        ...e,
                        selectedCategory: l,
                        subcategories: t,
                        selectedSubcategory: i?._id ?? null,
                        allSubcategoriesLabel: s ?? r
                    }
                })
        },
        97014: (e, a, t) => {
            t.d(a, {
                A: () => s
            });
            var l = t(63036);
            t(3728);
            var r = t(16335);
            let s = ({
                title: e,
                subtitle: a,
                description: t,
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
                    children: a
                }), (0, l.jsxs)("div", {
                    className: "flex grow flex-col justify-between",
                    children: [(0, l.jsx)("div", {
                        className: "loco-text-body mt-8 opacity-70",
                        children: t
                    }), (0, l.jsx)("div", {
                        children: (0, l.jsx)(r.A, {
                            href: s?.href,
                            target: s?.target,
                            variant: "primary",
                            outlined: !0,
                            rounded: !0,
                            hasArrow: !0,
                            "data-link-location": "CardSubscription",
                            "data-sentry-element": "Button",
                            "data-sentry-source-file": "CardSubscription.tsx",
                            children: s?.label
                        })
                    })]
                })]
            })
        }
    }
]);