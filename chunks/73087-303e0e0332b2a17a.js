try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "b0daf01a-e522-465c-ae9f-12593c4bd60c", e._sentryDebugIdIdentifier = "sentry-dbid-b0daf01a-e522-465c-ae9f-12593c4bd60c")
    }()
} catch (e) {}! function() {
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
    [73087], {
        19437: (e, a, t) => {
            t.d(a, {
                A: () => r
            });
            var l = t(32475);
            t(53163);
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
        27051: (e, a, t) => {
            t.d(a, {
                A: () => g
            });
            var l = t(32475),
                r = t(53163),
                s = t(1595),
                n = t(65025),
                i = t(42898),
                o = t(36143),
                d = t(58107),
                c = t(55424);
            let u = (0, i.default)(() => Promise.all([t.e(47490), t.e(44846)]).then(t.t.bind(t, 81987, 23)), {
                    loadableGenerated: {
                        webpack: () => [81987]
                    },
                    ssr: !1
                }),
                m = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                f = ({
                    title: e,
                    eyebrow: a,
                    description: t,
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
                        A = (0, s.A)("bg-gray-100 relative h-full rounded-xl overflow-hidden dark:bg-gray-900", {
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
                                children: [a && (0, l.jsx)("span", {
                                    className: "loco-caption-sm mb-4 block opacity-70",
                                    children: a
                                }), e && (0, l.jsx)(b, {
                                    className: "loco-text-heading-xs",
                                    children: e
                                }), t && (0, l.jsx)("p", {
                                    className: "loco-text-body-sm mt-2 max-w-xs opacity-70",
                                    children: t
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
                },
                x = ({
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
                                children: (0, l.jsx)(f, {
                                    ...e,
                                    blockKey: a,
                                    cardHeading: t
                                })
                            }, `bento-card-${a}-${r}`))
                        })
                    })
                };
            var h = t(70488);
            let g = ({
                theme: e,
                blockKey: a,
                isHidden: t,
                cards: r,
                bentoCardsHeading: n
            }) => {
                let {
                    renderModal: i
                } = (0, h.V)(r?.map(e => e.actions?.[0]).filter(Boolean)), o = r?.map(e => {
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
                                    return i({
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
                                children: (0, l.jsx)(x, {
                                    blockKey: a,
                                    theme: "dark" === e ? "dark" : "light",
                                    cards: o,
                                    cardsHeading: "h2" === n || "h3" === n || "h4" === n ? n : "p"
                                })
                            })
                        })
                    })
                })
            }
        },
        27431: (e, a, t) => {
            t.d(a, {
                Ay: () => m,
                W3: () => d,
                th: () => c
            });
            var l = t(53163),
                r = t(53559),
                s = t.n(r),
                n = t(82720),
                i = t.n(n);
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
            let u = s()((e, a) => {
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
                                    allSubcategoriesLabel: n = "",
                                    localizedAllSubcategoriesLabel: o
                                } = e.categories.find(({
                                    _id: e
                                }) => e === t) || {},
                                d = s ?? [];
                            if (void 0 === r) {
                                let e = d.find(e => e.makeDefaultLandingSubcategory);
                                a = e?._id ?? null
                            } else a = r;
                            return i()(u({
                                type: "SET_SUBCATEGORIES",
                                payload: d
                            }), u({
                                type: "SET_SELECTED_SUBCATEGORY",
                                payload: a
                            }), u({
                                type: "SET_ALL_SUBCATEGORIES_LABEL",
                                payload: o ?? n
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
                                    _id: n,
                                    allSubcategoriesLabel: i = "",
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
                    let a = e.categories[0];
                    if (!a) return e;
                    let t = a.subcategories ?? [],
                        {
                            _id: l,
                            allSubcategoriesLabel: r = "",
                            localizedAllSubcategoriesLabel: s
                        } = a,
                        n = t.find(e => e.makeDefaultLandingSubcategory);
                    return {
                        ...e,
                        selectedCategory: l,
                        subcategories: t,
                        selectedSubcategory: n?._id ?? null,
                        allSubcategoriesLabel: s ?? r
                    }
                })
        },
        28795: (e, a, t) => {
            t.d(a, {
                A: () => f
            });
            var l = t(32475),
                r = t(53163),
                s = t(55424),
                n = t(42898),
                i = t(1595),
                o = t(36143),
                d = t(58107),
                c = t(36998),
                u = t(65025);
            let m = (0, n.default)(() => Promise.all([t.e(47490), t.e(44846)]).then(t.t.bind(t, 81987, 23)), {
                    loadableGenerated: {
                        webpack: () => [81987]
                    },
                    ssr: !1
                }),
                f = ({
                    eyebrow: e,
                    title: a,
                    titleSize: t = "medium",
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
                        N = (0, i.A)(`font-nohemi mt-24 my-4 ${"small"===t?"mb-6":"mb-8"}`, {
                            "loco-text-heading-xl": "medium" === t,
                            "loco-text-headline": "large" === t,
                            "loco-text-heading-lg": "small" === t
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
                            className: `relative container flex ${p&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                            children: [(0, l.jsx)("div", {
                                className: "flex grow flex-col justify-stretch",
                                children: (0, l.jsxs)("div", {
                                    className: "flex h-full grow flex-col items-center justify-center text-center",
                                    children: [e && (0, l.jsx)("div", {
                                        className: "loco-caption-lg-semibold",
                                        children: e
                                    }), (0, l.jsx)("h1", {
                                        className: N,
                                        children: a
                                    }), n && (0, l.jsx)("div", {
                                        className: "loco-caption-sm-semibold mt-5",
                                        children: n
                                    }), x && (0, l.jsx)("div", {
                                        className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                        children: x.map((e, a) => {
                                            if (e.link) return (0, l.jsx)(u.A, {
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
                            }), h && (0, l.jsx)(c.A, {
                                keyFigures: h,
                                nested: !0
                            })]
                        }), b && (0, l.jsx)("div", {
                            className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:top-10 md:right-8 md:left-auto md:w-auto md:px-0 md:py-8",
                            children: b
                        })]
                    })
                }
        },
        30950: (e, a, t) => {
            t.d(a, {
                A: () => n
            });
            var l = t(32475);
            t(53163);
            var r = t(65025),
                s = t(1595);
            let n = ({
                theme: e = "light",
                actions: a,
                description: t,
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
                            className: `container flex flex-col ${"center"===o&&"items-center text-center"} ${i&&"pt-14 pb-12 md:pt-24"}`,
                            children: [(0, l.jsx)("div", {
                                className: "max-w-3xl",
                                children: n && (0, l.jsx)("h2", {
                                    className: "loco-text-heading-md !font-nohemi",
                                    children: n
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
        38839: (e, a, t) => {
            t.d(a, {
                A: () => g
            });
            var l = t(32475),
                r = t(53163);
            let s = t(46982).A;
            var n = t(1595),
                i = t(51491),
                o = t(45906),
                d = t(26145);
            t(40270), t(38230);
            var c = t(89665),
                u = t(83727),
                m = t(70741);
            let f = ({
                theme: e = "light",
                slides: a,
                variant: t = "short",
                blockKey: s,
                title: f
            }) => {
                let [x, h] = (0, r.useState)(0), g = (0, r.useRef)(null), b = (0, u.A)(`(min-width: ${m.A.Large}px)`), p = "gdc2026" === t, y = (0, n.A)({
                    dark: "dark" === e
                }), v = (0, r.useCallback)((e, a) => {
                    h(a)
                }, []), j = (0, r.useCallback)(() => {
                    g.current && g.current.slickPrev()
                }, []), k = (0, r.useCallback)(() => {
                    g.current && g.current.slickNext()
                }, []), A = {
                    dots: !1,
                    infinite: !1,
                    speed: 500,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: !1,
                    beforeChange: v,
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1
                        }
                    }]
                }, w = (e, a) => {
                    let r = {
                        uniteCard: i.A,
                        cardSubscription: o.A
                    } [e.type];
                    return (0, l.jsx)("div", {
                        className: p ? "col-span-12 cursor-pointer" : "col-span-12 md:col-span-6 lg:col-span-4",
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
                    }, `${e.title}-${a}`)
                }, N = () => {
                    let t = b ? Math.ceil(a.length / 2) : a.length;
                    return (0, l.jsx)("div", {
                        className: "flex gap-2",
                        "data-sentry-component": "renderDots",
                        "data-sentry-source-file": "CarouselCards.tsx",
                        children: Array.from({
                            length: t
                        }).map((a, t) => (0, l.jsx)("button", {
                            className: (0, n.A)("h-2 w-2 rounded-full transition-all", x === t ? "bg-white" : "dark" === e ? "bg-gray-600" : "bg-gray-300"),
                            "aria-label": `Go to slide ${t+1}`,
                            "aria-current": x === t ? "true" : "false"
                        }, t))
                    })
                }, S = b ? Math.ceil(a.length / 2) : a.length, _ = 0 === x, C = x >= S - 1, L = b && a.length > 2 || !b && a.length > 1;
                return p ? (0, l.jsx)("section", {
                    className: y,
                    children: (0, l.jsx)("div", {
                        className: "carousel-cards py-16 dark:bg-black",
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            children: [(0, l.jsxs)("div", {
                                className: "mb-8 hidden items-center gap-8 lg:flex",
                                children: [(0, l.jsx)("div", {
                                    className: "flex flex-1 items-center",
                                    children: f && (0, l.jsx)("h2", {
                                        className: "loco-text-heading-xs text-left",
                                        children: f
                                    })
                                }), L && (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: "flex flex-1 items-center justify-center",
                                        children: N()
                                    }), (0, l.jsxs)("div", {
                                        className: "flex flex-1 items-center justify-end gap-2",
                                        children: [(0, l.jsx)(c.A, {
                                            direction: "left",
                                            onPress: j,
                                            ariaLabel: "Previous slide",
                                            variant: "primary",
                                            isDisabled: _
                                        }), (0, l.jsx)(c.A, {
                                            onPress: k,
                                            ariaLabel: "Next slide",
                                            variant: "primary",
                                            isDisabled: C
                                        })]
                                    })]
                                })]
                            }), f && (0, l.jsx)("h2", {
                                className: "loco-text-heading-xl mb-6 text-left lg:hidden",
                                children: f
                            }), (0, l.jsx)(d.A, {
                                ...A,
                                ref: g,
                                className: "overflow-hidden",
                                children: a.map(w)
                            }), L && (0, l.jsxs)("div", {
                                className: "mt-8 flex flex-col items-center gap-4 lg:hidden",
                                children: [N(), (0, l.jsxs)("div", {
                                    className: "flex gap-2",
                                    children: [(0, l.jsx)(c.A, {
                                        direction: "left",
                                        onPress: j,
                                        ariaLabel: "Previous slide",
                                        variant: "primary",
                                        isDisabled: _
                                    }), (0, l.jsx)(c.A, {
                                        onPress: k,
                                        ariaLabel: "Next slide",
                                        variant: "primary",
                                        isDisabled: C
                                    })]
                                })]
                            })]
                        })
                    })
                }) : (0, l.jsx)("section", {
                    className: y,
                    "data-sentry-component": "CarouselCards",
                    "data-sentry-source-file": "CarouselCards.tsx",
                    children: (0, l.jsx)("div", {
                        className: "carousel-cards py-16 dark:bg-black",
                        children: (0, l.jsxs)("div", {
                            className: "container",
                            children: [(0, l.jsx)("div", {
                                className: "mb-8 flex items-center justify-between",
                                children: L && (0, l.jsxs)(l.Fragment, {
                                    children: [N(), (0, l.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [(0, l.jsx)(c.A, {
                                            direction: "left",
                                            onPress: j,
                                            ariaLabel: "Previous slide",
                                            variant: "primary",
                                            isDisabled: _
                                        }), (0, l.jsx)(c.A, {
                                            onPress: k,
                                            ariaLabel: "Next slide",
                                            variant: "primary",
                                            isDisabled: C
                                        })]
                                    })]
                                })
                            }), (0, l.jsx)(d.A, {
                                ...A,
                                ref: g,
                                className: "overflow-visible",
                                "data-sentry-element": "Slider",
                                "data-sentry-source-file": "CarouselCards.tsx",
                                children: a.map(w)
                            })]
                        })
                    })
                })
            };
            var x = t(69347),
                h = t(70488);
            let g = ({
                theme: e,
                title: a,
                description: t,
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
                    let a = !!e?.action?.form,
                        t = null;
                    return e?.action ? t = {
                        label: e.action?.title ?? "",
                        href: a ? "" : e.action?.link?.linkReference?.href.current || "",
                        target: e.action?.link?.linkReference?.target === "_blank" ? "_blank" : "_self",
                        ...a ? {
                            renderModal: () => p({
                                label: e.action?.title ?? "",
                                form: e.action.form
                            })
                        } : {}
                    } : e?.pageUrl && (t = {
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
                        action: t,
                        tags: e.tags || [],
                        videoInline: e?.videoInline
                    }
                }, v = d?.length && d?.length > 0 ? d?.map(y) : c?.length && c?.length > 0 ? c?.map(y) : [], j = r?.map((e, a) => ({
                    title: e.title,
                    value: e.value,
                    onPress: () => {
                        (0, x.Ay)({
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
                return o ? (0, l.jsx)(f, {
                    theme: "dark" === e ? "dark" : "light",
                    variant: "stacked" === i || "column" === i || "short" === i || "gdc2026" === i ? i : "column",
                    slides: v,
                    blockKey: u,
                    title: a || void 0
                }) : (0, l.jsx)(l.Fragment, {
                    children: !m && (0, l.jsx)(s, {
                        theme: "dark" === e ? "dark" : "collapsiblecards" === e ? "collapsiblecards" : "light",
                        title: a || "",
                        description: t,
                        filters: j,
                        actions: n?.map(e => ({
                            title: e?.title || "",
                            href: e.link?.linkReference?.href.current || "",
                            target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                        })) || [],
                        variant: "stacked" === i || "column" === i || "short" === i ? i : "column",
                        cards: v,
                        blockKey: u,
                        cardsHeading: "div" === g || "h2" === g || "h3" === g || "h4" === g ? g : a ? "h3" : "h2"
                    })
                })
            }
        },
        45906: (e, a, t) => {
            t.d(a, {
                A: () => s
            });
            var l = t(32475);
            t(53163);
            var r = t(65025);
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
        },
        46982: (e, a, t) => {
            t.d(a, {
                A: () => c
            });
            var l = t(32475),
                r = t(53163),
                s = t(1595),
                n = t(51491),
                i = t(45906),
                o = t(30950),
                d = t(65025);
            let c = ({
                theme: e = "light",
                title: a,
                description: t,
                filters: c,
                actions: u,
                cards: m,
                variant: f = "column",
                blockKey: x,
                cardsHeading: h
            }) => {
                let [g, b] = (0, r.useState)(c?.[0]?.value || ""), p = (e, a) => {
                    let t = {
                        uniteCard: n.A,
                        cardSubscription: i.A
                    } [e?.type];
                    return (0, l.jsx)("div", {
                        className: "w-full px-0 py-1 md:w-1/2 md:px-1 md:py-1 lg:w-1/3",
                        "data-sentry-component": "renderCards",
                        "data-sentry-source-file": "Cards.tsx",
                        children: (0, l.jsx)(t, {
                            ...e,
                            variant: f,
                            blockKey: x,
                            titleTag: h,
                            "data-sentry-element": "CardComponent",
                            "data-sentry-source-file": "Cards.tsx"
                        })
                    }, `${e.title}-${a}`)
                }, y = (0, s.A)({
                    dark: "dark" === e || "collapsiblecards" === e
                }), v = (0, s.A)({
                    "bg-white dark:bg-black": "light" === e || "dark" === e,
                    "bg-transparent": "collapsiblecards" === e
                }), j = (0, s.A)("w-full flex flex-wrap justify-center", {
                    "mt-8 pb-10": (!a || !t) && "collapsiblecards" !== e
                });
                return (0, l.jsx)("section", {
                    className: y,
                    "data-sentry-component": "Cards",
                    "data-sentry-source-file": "Cards.tsx",
                    children: (0, l.jsx)("div", {
                        className: v,
                        children: (0, l.jsxs)("div", {
                            className: "collapsiblecards" === e ? "flex flex-col items-center" : "container flex flex-col items-center",
                            children: [(a || t) && (0, l.jsx)(o.A, {
                                title: a,
                                description: t
                            }), (c && c.length > 0 || u && u.length > 0) && (0, l.jsxs)("div", {
                                className: "mb-8 flex w-full flex-wrap justify-center gap-4",
                                children: [c.map((e, a) => (0, l.jsx)(d.A, {
                                    rounded: !0,
                                    outlined: !0,
                                    onPress: () => {
                                        e.onPress && e.onPress(), b(e.value)
                                    },
                                    active: g.includes(e.value),
                                    "data-link-location": `${x}-filter-${e}-${a}`,
                                    "data-link-type": "CTA",
                                    "data-sentry-element": "Button",
                                    "data-sentry-component": "renderFilters",
                                    "data-sentry-source-file": "Cards.tsx",
                                    children: e.title
                                }, `filter-${e}-${a}`)), u.map((e, a) => (0, l.jsx)(d.A, {
                                    href: e.href,
                                    rounded: !0,
                                    outlined: !0,
                                    hasArrow: !0,
                                    "data-link-location": `${x}-action-${e}-${a}`,
                                    "data-link-type": "CTA",
                                    "data-sentry-element": "Button",
                                    "data-sentry-component": "renderActions",
                                    "data-sentry-source-file": "Cards.tsx",
                                    children: e.title
                                }, `action-${e}-${a}`))]
                            }), (0, l.jsx)("div", {
                                className: j,
                                children: g ? m.filter(e => e.tags?.includes(g)).map(p) : m.map(p)
                            })]
                        })
                    })
                })
            }
        },
        51491: (e, a, t) => {
            t.d(a, {
                A: () => h
            });
            var l = t(32475),
                r = t(53163),
                s = t(1595),
                n = t(36143),
                i = t(58107),
                o = t(55424),
                d = t(42898),
                c = t(70741),
                u = t(65025),
                m = t(19437);
            let f = (0, d.default)(() => Promise.all([t.e(47490), t.e(44846)]).then(t.t.bind(t, 81987, 23)), {
                    loadableGenerated: {
                        webpack: () => [81987]
                    },
                    ssr: !1
                }),
                x = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                h = ({
                    title: e,
                    description: a,
                    image: t,
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
                        _ = () => {
                            w(!0)
                        };
                    (0, r.useEffect)(() => {
                        b ? w(N) : N || w(!1)
                    }, [N, b]);
                    let C = (0, s.A)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                            "opacity-0 pointer-events-none": A && !S && N && d?.src
                        }),
                        L = (0, s.A)("flex flex-col", {
                            "min-h-[14rem]": "short" !== g,
                            grow: "column" !== g && "horizontal" !== g,
                            "min-h-[14rem] xl:min-h-[18rem] xl:flex-row xl:gap-4": "column" === g
                        }),
                        E = (0, s.A)("flex flex-col justify-between gap-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-900", {
                            "h-full": "horizontal" !== g,
                            "h-full lg:flex-row lg:gap-6 lg:p-6": "horizontal" === g
                        }),
                        T = (0, s.A)("relative overflow-hidden rounded-lg", {
                            "aspect-video w-full": "horizontal" !== g,
                            "aspect-video w-full lg:aspect-[4/3] lg:w-1/2 lg:flex-shrink-0": "horizontal" === g
                        });
                    return (0, l.jsxs)("div", {
                        ref: k,
                        className: E,
                        "data-sentry-component": "Card",
                        "data-sentry-source-file": "Card.tsx",
                        children: [(t?.src || d?.src) && (0, l.jsxs)("div", {
                            className: T,
                            children: [d?.src && (0, l.jsx)(f, {
                                url: d.src,
                                playing: A && N && !S,
                                loop: !!b,
                                muted: b,
                                playsinline: b && !S,
                                width: "100%",
                                height: "100%",
                                className: "absolute top-0 left-0 [&>video]:object-cover",
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
                            }), t && (0, l.jsxs)("div", {
                                className: C,
                                onClick: _,
                                children: [!b && (0, l.jsx)(m.A, {
                                    handleIsPlaying: _,
                                    className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: p,
                                    "data-link-location": `${y}-video-play`,
                                    "data-link-type": "CTA"
                                }), (0, l.jsx)(o.default, {
                                    src: t.src,
                                    placeholder: "blur",
                                    blurDataURL: t.placeholder,
                                    fill: !0,
                                    alt: t.alt ?? "",
                                    className: "cover absolute object-cover",
                                    sizes: `(min-width: ${c.A.Large}px) 33vw, (min-width: ${c.A.Medium}px) 50vw, 100vw`
                                })]
                            })]
                        }), (0, l.jsx)("div", {
                            className: L,
                            children: "column" !== g && "horizontal" !== g ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(v, {
                                    className: "loco-text-body-lg-medium -mt-2",
                                    children: e
                                }), (0, l.jsxs)("div", {
                                    className: "flex shrink-0 grow flex-col justify-between",
                                    children: [(0, l.jsx)("div", {
                                        className: "loco-text-body mt-2 text-gray-700 dark:text-gray-400",
                                        children: a
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
                            }) : "horizontal" === g ? (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(v, {
                                    className: "loco-text-body-lg-medium -mt-2 lg:mt-0",
                                    children: e
                                }), (0, l.jsxs)("div", {
                                    className: "flex shrink-0 grow flex-col justify-between lg:flex-1",
                                    children: [(0, l.jsx)("div", {
                                        className: "loco-text-body mt-2 text-gray-700 lg:text-gray-900 dark:text-gray-400 lg:dark:text-white",
                                        children: a
                                    }), (h?.href || h?.renderModal) && (0, l.jsx)("div", {
                                        className: "mt-8 lg:mt-6",
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
                                    className: "flex shrink-0 grow flex-col justify-between xl:-mt-1 xl:w-3/5",
                                    children: [(0, l.jsx)("div", {
                                        className: "loco-text-body mt-1 xl:mt-0",
                                        children: a
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
        61948: (e, a, t) => {
            t.d(a, {
                A: () => n
            });
            var l = t(32475);
            t(53163);
            var r = t(1595),
                s = t(19905);
            let n = ({
                children: e,
                action: a,
                rounded: t = !1,
                isContained: n = !1,
                className: i = ""
            }) => (0, l.jsx)("div", {
                className: (0, r.$)("md:px-auto w-full px-4 transition-colors", {
                    "bg-gray-100 dark:bg-gray-900": !n
                }, {
                    "rounded-br-lg rounded-bl-lg": t && !n
                }, i),
                "data-sentry-component": "AnnouncementBanner",
                "data-sentry-source-file": "AnnouncementBanner.tsx",
                children: (0, l.jsxs)("div", {
                    className: (0, r.$)("container m-auto py-3 text-xs leading-4 font-medium text-gray-900 transition-colors dark:text-gray-100", {
                        "text-center": t && !n
                    }, {
                        "my-6 rounded-lg bg-gray-100 dark:bg-gray-900": n
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
        75382: (e, a, t) => {
            t.d(a, {
                A: () => n
            });
            var l = t(32475),
                r = t(48625);
            t(53163);
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
        79265: (e, a, t) => {
            t.d(a, {
                A: () => i
            });
            var l = t(32475),
                r = t(53163),
                s = t(28795),
                n = t(70488);
            let i = ({
                actions: e = [],
                brandfolder: a,
                mention: t,
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
                        mention: t || "",
                        eyebrow: i || "",
                        title: o || "",
                        titleSize: "small" === d ? "small" : "large" === d ? "large" : "medium",
                        description: c || "",
                        backgroundImage: {
                            src: u?.asset.url || "",
                            placeholder: u?.asset.metadata?.lqip || ""
                        },
                        keyFigures: g,
                        video: a?.muxHLSURL || ""
                    })
                })
            }
        },
        85138: (e, a, t) => {
            t.d(a, {
                A: () => s
            });
            var l = t(32475);
            t(53163);
            var r = t(61948);
            let s = ({
                title: e,
                action: a,
                isContained: t = !1,
                theme: s,
                isHidden: n
            }) => (0, l.jsx)(l.Fragment, {
                children: !n && (0, l.jsx)("section", {
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
        88553: (e, a, t) => {
            t.d(a, {
                A: () => f
            });
            var l = t(32475),
                r = t(53163),
                s = t(1595),
                n = t(36143),
                i = t(58107),
                o = t(42898),
                d = t(55424);
            let c = (0, o.default)(() => Promise.all([t.e(47490), t.e(44846)]).then(t.t.bind(t, 81987, 23)), {
                    loadableGenerated: {
                        webpack: () => [81987]
                    },
                    ssr: !1
                }),
                u = {
                    maxMaxBufferLength: 1,
                    qualityStartLevel: 1
                },
                m = ({
                    videoShowcaseA: e,
                    videoShowcaseB: a
                }) => {
                    let t = (0, r.useRef)(null),
                        [o, m] = (0, r.useState)(!1),
                        [f, x] = (0, r.useState)(!1),
                        h = (0, n.W)(t, {
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
                        ref: t,
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
                                className: "absolute top-0 left-0 [&>video]:object-cover",
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
                            children: [a?.image?.src && (0, l.jsx)(d.default, {
                                fill: !0,
                                alt: a?.image?.alt ?? "",
                                src: a?.image?.src,
                                className: p
                            }), h && !g && a?.video?.src && (0, l.jsx)(c, {
                                url: a.video.src,
                                playing: a.video.autoplay ?? !0,
                                loop: !0,
                                muted: !0,
                                playsinline: !0,
                                width: "100%",
                                height: "100%",
                                className: "absolute top-0 left-0 [&>video]:object-cover",
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
                    theme: a,
                    videoShowcaseA: t,
                    videoShowcaseB: r
                }) => {
                    let n = {
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
                        i = (0, s.A)({
                            dark: "dark" === a
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
        }
    }
]);