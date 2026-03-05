! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                if (null != r)
                    for (var l in r) r.hasOwnProperty(l) && (e[l] = r[l])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [38643], {
        917: (e, t, r) => {
            r.d(t, {
                J: () => n
            });
            var l = r(88491);
            let n = (e, t = !0) => {
                let [r, n] = (0, l.useState)(null);
                return (0, l.useEffect)(() => {
                    let r;
                    return t && e.current && (r = setInterval(() => {
                        let t = window.YT;
                        t && e.current && (n(new t.Player(e.current)), clearInterval(r))
                    }, 500)), () => {
                        n(null), clearInterval(r)
                    }
                }, [t, e]), {
                    player: r
                }
            }
        },
        2609: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            var l = function(e) {
                return e[e.Small = 425] = "Small", e[e.Medium = 744] = "Medium", e[e.Large = 1024] = "Large", e[e.XLarge = 1440] = "XLarge", e
            }(l || {});
            let n = l
        },
        4767: (e, t, r) => {
            r.d(t, {
                A: () => g
            });
            var l = r(80475),
                n = r(88491),
                s = r(92572),
                a = r(21649),
                o = r.n(a),
                i = r(75317),
                d = r(75407),
                c = r(18227),
                u = r(62370),
                m = r(64195),
                f = r(85260),
                x = r(89326),
                h = r(917);
            let g = ({
                title: e,
                url: t,
                container: r = !1,
                blockedMessage: a,
                consentButtonLabel: g
            }) => {
                let p = o()(t),
                    [y, v] = (0, n.useState)(!1),
                    b = (0, n.useRef)(null),
                    j = (0, n.useRef)(null),
                    {
                        player: k
                    } = (0, h.J)(b, y),
                    w = () => {
                        v(!0)
                    };
                return (0, n.useEffect)(() => {
                    k && (j.current = k.addEventListener("onStateChange", e => {
                        if ([1, 2].includes(e.data)) {
                            let t = "function" == typeof k.getDuration && k.getDuration() || 0,
                                r = Number((("function" == typeof k.getCurrentTime && k.getCurrentTime() || 0) / t * 100).toFixed(2)),
                                l = 1 === e.data ? "video_play" : "video_pause";
                            (0, x.g)({
                                name: l,
                                videoDuration: t,
                                videoProgress: (Number.isNaN(r), r)
                            })
                        }
                    }))
                }, [k]), (0, n.useEffect)(() => {
                    if (!y && k?.playerInfo?.playerState === 1) {
                        let e = "function" == typeof k.getDuration && k.getDuration() || 0,
                            t = Number((("function" == typeof k.getCurrentTime && k.getCurrentTime() || 0) / e * 100).toFixed(2));
                        (0, x.g)({
                            name: "video_pause",
                            videoDuration: e,
                            videoProgress: (Number.isNaN(t), t)
                        })
                    }
                }, [y, k]), (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(f.default, {
                        src: "https://www.youtube.com/iframe_api",
                        "data-sentry-element": "Script",
                        "data-sentry-source-file": "YouTubeModal.tsx"
                    }), (0, l.jsxs)("div", {
                        className: "relative h-full w-full self-center p-4 lg:p-0",
                        children: [t && p && (0, l.jsxs)("div", {
                            className: "yt-lite z-10 h-full overflow-auto",
                            ...{
                                tabIndex: 0,
                                role: "button",
                                onClick: w,
                                onKeyDown: e => {
                                    ("Enter" === e.key || "Space" === e.key) && w()
                                }
                            },
                            children: [(0, l.jsx)("div", {
                                className: "lty-playbtn"
                            }), (0, l.jsx)(s.default, {
                                className: "!relative",
                                style: {
                                    borderRadius: "24px"
                                },
                                src: `https://img.youtube.com/vi/${p}/hqdefault.jpg`,
                                alt: e,
                                fill: !0
                            }), (0, l.jsx)(m.A, {
                                blockedMessage: a,
                                consentButtonLabel: g
                            })]
                        }), (0, l.jsx)(d.A, {
                            isOpen: y,
                            onOpenChange: v,
                            showTriggerButton: !1,
                            "data-sentry-element": "Modal",
                            "data-sentry-source-file": "YouTubeModal.tsx",
                            children: (0, l.jsxs)("div", {
                                className: "z-50 mt-20 flex w-10/12 flex-col rounded-3xl bg-black p-4 lg:w-8/12",
                                tabIndex: -1,
                                children: [(0, l.jsx)(c.A, {
                                    onPress: () => {
                                        v(!1)
                                    },
                                    variant: "secondary",
                                    className: "self-end overflow-hidden",
                                    "data-sentry-element": "Button",
                                    "data-sentry-source-file": "YouTubeModal.tsx",
                                    children: (0, l.jsx)(u.A, {
                                        className: "z-[60] h-5 w-5 text-white",
                                        "data-sentry-element": "CloseIcon",
                                        "data-sentry-source-file": "YouTubeModal.tsx"
                                    })
                                }), (0, l.jsx)(i.A, {
                                    id: p,
                                    title: e,
                                    iframeClass: "yt-iframe",
                                    poster: "hqdefault",
                                    ref: b,
                                    params: "enablejsapi=1",
                                    "data-sentry-element": "LiteYouTubeEmbed",
                                    "data-sentry-source-file": "YouTubeModal.tsx"
                                }), (0, l.jsx)(m.A, {
                                    blockedMessage: a,
                                    consentButtonLabel: g,
                                    "data-sentry-element": "ConsentIframe",
                                    "data-sentry-source-file": "YouTubeModal.tsx"
                                })]
                            })
                        })]
                    })]
                })
            }
        },
        17873: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            let l = r(27538).A
        },
        24412: (e, t, r) => {
            r.d(t, {
                V: () => i
            });
            var l = r(80475);
            r(88491);
            var n = r(75407),
                s = r(83688),
                a = r(74615),
                o = r(33614);
            let i = e => {
                let {
                    extraFields: t
                } = (0, o.A)(), r = ({
                    label: t,
                    form: r
                }) => {
                    let o = ((e, t) => {
                        let r = e?.find(e => t.title === e?.form?.title)?.customSelections || "";
                        try {
                            return JSON.parse(r)
                        } catch (e) {
                            return null
                        }
                    })(e || [], r);
                    if (o && r?.fields)
                        for (let e of Object.keys(o)) {
                            let t = r.fields.findIndex(t => t.formFieldId === e);
                            if (t >= 0) {
                                let l = o[e];
                                null != l.isRequired && (r.fields[t].isRequired = o[e].isRequired), l.isHidden && r.fields.splice(t, 1)
                            }
                        }
                    return (0, l.jsx)(n.A, {
                        actionLabel: t,
                        onOpenChange: e => {
                            e && (0, a.Ay)({
                                properties: {
                                    form_action: "presented",
                                    form_id: r.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                                    form_name: r.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                                }
                            })
                        },
                        "data-sentry-element": "Modal",
                        "data-sentry-component": "renderModal",
                        "data-sentry-source-file": "useFormModal.tsx",
                        children: e => (0, l.jsx)(n.A.Layout, {
                            modal: {
                                title: r.title,
                                description: r.description
                            },
                            children: r && (0, l.jsx)(s.o, {
                                form: r,
                                close: e
                            })
                        })
                    })
                };
                return {
                    renderModal: r,
                    mapFormActions: e => e?.map(e => ({
                        title: e.title,
                        link: e.link ? {
                            href: e.link.linkReference?.href.current || "",
                            target: e.link.linkReference?.target || "_self"
                        } : null,
                        form: e.form ? {
                            form: e.form,
                            webinarFormParametersContent: e.webinarFormParametersContent,
                            extraFields: t,
                            renderModal: r
                        } : null
                    })),
                    extraFields: t
                }
            }
        },
        27538: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var l = r(80475);
            r(88491);
            var n = r(16335),
                s = r(92572);
            let a = ({
                keyFigures: e,
                nested: t = !1,
                theme: r = "light"
            }) => {
                let a = (0, n.$)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
                    "py-16": !t
                });
                return (0, l.jsx)("div", {
                    className: "dark" === r ? "bg-black text-white" : "",
                    "data-sentry-component": "KeyFigures",
                    "data-sentry-source-file": "KeyFigures.tsx",
                    children: (0, l.jsx)("div", {
                        className: a,
                        children: e?.map((a, o) => {
                            let {
                                value: i,
                                label: d
                            } = a, c = (0, n.$)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                                "backdrop-blur-lg": t && "dark" !== r,
                                "bg-gray-900 dark:bg-black": "dark" === r,
                                "bg-gray-100 dark:bg-gray-900 text-gray-800": !t && "dark" !== r,
                                "xl:col-span-3": e?.length === 4
                            });
                            return i?.type === "text" ? (0, l.jsxs)("div", {
                                className: c,
                                children: [(0, l.jsx)("div", {
                                    className: "loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center",
                                    children: i.text
                                }), (0, l.jsx)("div", {
                                    className: "loco-text-body max-w-xs",
                                    children: d
                                })]
                            }, o) : d && i?.type === "icon" && !i.url ? (0, l.jsx)("div", {
                                className: c,
                                children: (0, l.jsx)("div", {
                                    className: "loco-text-body max-w-xs",
                                    children: d
                                })
                            }, o) : i?.type === "icon" && i.url ? (0, l.jsxs)("div", {
                                className: c,
                                children: [(0, l.jsx)("div", {
                                    className: "flex min-w-[30%] shrink-0 gap-10 text-center lg:justify-center",
                                    children: (0, l.jsx)(s.default, {
                                        src: i.url,
                                        alt: i.description,
                                        width: 40,
                                        height: 40
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "loco-text-body max-w-xs",
                                    children: d
                                })]
                            }, o) : null
                        })
                    })
                })
            }
        },
        38643: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var l = r(80475),
                n = r(88491),
                s = r(52532),
                a = r(18227),
                o = r(62060),
                i = r(24412);
            let d = ({
                    linkText: e,
                    separatorText: t,
                    actionLinks: r
                }) => {
                    let n = window.navigator.userAgent,
                        s = null;
                    if (-1 !== n.indexOf("Win") ? s = "windows" : -1 !== n.indexOf("Mac") ? s = "mac" : -1 !== n.indexOf("Linux") && (s = "linux"), !s) return null;
                    let a = [];
                    if (r && r.length > 0)
                        for (let e of r) e.os.toLowerCase() !== s.toLowerCase() && a.push({
                            label: e.os,
                            url: e.href
                        });
                    return r ? (0, l.jsxs)("div", {
                        className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
                        "data-sentry-component": "HeroAlternativeOSLinks",
                        "data-sentry-source-file": "HeroAlternativeOSLinks.tsx",
                        children: [e, " ", a.map((e, r) => (0, l.jsxs)("span", {
                            children: [r > 0 ? (0, l.jsxs)("span", {
                                className: "text-gray-600",
                                children: [" ", t, " "]
                            }) : "", (0, l.jsx)("a", {
                                href: e.url,
                                className: "text-blue underline",
                                children: e.label
                            })]
                        }, e.label))]
                    }) : null
                },
                c = ({
                    eyebrow: e,
                    title: t,
                    description: r,
                    actions: c = [],
                    media: u,
                    backgroundImage: m,
                    size: f,
                    variant: x,
                    keyFigures: h,
                    theme: g,
                    youtubeVideo: p,
                    isHidden: y,
                    showAlterativeOSLinks: v,
                    alternativeOSLinkSettings: b
                }) => {
                    let j = (() => {
                            let e = window.navigator.userAgent;
                            return -1 !== e.indexOf("Win") ? "Windows" : -1 !== e.indexOf("Mac") ? "Mac" : -1 !== e.indexOf("Linux") ? "Linux" : "Unknown"
                        })(),
                        k = (0, n.useRef)(null),
                        {
                            mapFormActions: w
                        } = (0, i.V)(c),
                        A = (0, n.useMemo)(() => w(c) || [], [c, w]),
                        N = m?.asset?.url ? {
                            src: m.asset.url,
                            alt: "Hero background image"
                        } : void 0,
                        M = (0, n.useMemo)(() => (h?.data ?? []).map(e => e?.value?.text ? {
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
                        }), [h]);
                    (0, n.useEffect)(() => {
                        if (!k.current) {
                            let e = document.createElement("a");
                            e.style.display = "none", document.body.appendChild(e), k.current = e
                        }
                        return () => {
                            k.current && document.body.contains(k.current) && document.body.removeChild(k.current)
                        }
                    }, []);
                    let T = x ?? void 0,
                        C = (e, t, r) => {
                            let s = t?.form;
                            if (!s) return null;
                            let a = {
                                ...s.form,
                                ...s.webinarFormParametersContent,
                                extraFields: s.extraFields
                            };
                            return (0, l.jsx)(n.Fragment, {
                                children: s.renderModal({
                                    label: e.title,
                                    form: a
                                })
                            }, `hero-action-form-${e.title}-${r}`)
                        },
                        L = e => {
                            let t = e.link?.linkReference?.href?.current,
                                r = e.secondaryLink?.linkReference?.href?.current,
                                l = e.link?.linkReference?.target || "_self",
                                n = o.IB.find(e => window.location.pathname === `/${e}` || window.location.pathname.startsWith(`/${e}/`)) ?? "en";
                            t && (t.endsWith(".exe") || t.endsWith(".dmg") ? k.current && (k.current.href = t, k.current.download = "", k.current.target = l, k.current.click()) : "_blank" === l ? window.open(t, "_blank") : window.location.href = t), r && setTimeout(() => {
                                let e = r.replace(/^\//, "");
                                window.location.href = `/${n}/${e}`
                            }, 1e3), e?.callback && e.callback()
                        },
                        F = c?.filter(e => !e.operatingSystem || e.operatingSystem === j) || [],
                        I = c?.filter(e => !!e.operatingSystem && "Unknown" !== e.operatingSystem) || [];
                    return (0, l.jsx)(l.Fragment, {
                        children: !y && (0, l.jsx)("section", {
                            className: "dark" === g ? "dark" : "",
                            children: (0, l.jsx)("div", {
                                className: "dark:bg-black",
                                children: (0, l.jsxs)(s.A, {
                                    image: N,
                                    size: "slim" === f ? "slim" : "default" === f ? "default" : void 0,
                                    variant: T,
                                    keyFigures: M,
                                    children: [u && (0, l.jsx)(s.A.Media, {
                                        media: u,
                                        variant: T
                                    }), !u && p && (0, l.jsx)(s.A.YouTubeVideo, {
                                        autoplay: !0,
                                        url: p?.url,
                                        title: p?.title,
                                        blockedMessage: p?.consent?.blockedMessage,
                                        consentButtonLabel: p?.consent?.consentButtonLabel || ""
                                    }), (0, l.jsxs)(s.A.Content, {
                                        variant: T,
                                        children: [(0, l.jsx)(s.A.Overline, {
                                            children: e
                                        }), (0, l.jsx)(s.A.Title, {
                                            variant: T,
                                            children: t
                                        }), (0, l.jsx)(s.A.Body, {
                                            variant: T,
                                            children: r
                                        }), (0, l.jsx)("div", {
                                            className: "xl:hidden",
                                            children: (0, l.jsx)(s.A.Actions, {
                                                variant: T,
                                                children: F.map((e, t) => {
                                                    let r = A[t],
                                                        s = e.link?.linkReference?.href?.current || "";
                                                    e.link?.linkReference?.target;
                                                    let o = 0 === t,
                                                        i = s.endsWith(".exe") || s.endsWith(".dmg"),
                                                        c = !!e.secondaryLink?.linkReference?.href?.current,
                                                        u = s && !i && !c;
                                                    return r?.form ? C(e, r, t) : (0, l.jsxs)(n.Fragment, {
                                                        children: [o && (0, l.jsx)(a.A, {
                                                            size: "medium",
                                                            variant: e.buttonType,
                                                            rounded: !0,
                                                            ...u && {
                                                                href: s
                                                            },
                                                            onPress: () => L(e),
                                                            hasArrow: !0,
                                                            "data-link-location": "HeroBlock",
                                                            "data-link-id": `HeroBlock-action-${t}`,
                                                            children: e.title
                                                        }), o && v && (0, l.jsx)(d, {
                                                            linkText: b?.linkText ?? "Download for",
                                                            separatorText: b?.separatorText ?? "or",
                                                            actionLinks: I.map(e => ({
                                                                os: e.operatingSystem,
                                                                href: e.link?.linkReference?.href?.current || "#"
                                                            }))
                                                        }), !o && (0, l.jsx)("div", {
                                                            className: "ml-1 flex flex-col gap-4",
                                                            children: (0, l.jsx)(a.A, {
                                                                size: "medium",
                                                                variant: e.buttonType,
                                                                rounded: !0,
                                                                ...u && {
                                                                    href: s
                                                                },
                                                                onPress: () => L(e),
                                                                hasArrow: !0,
                                                                "data-link-location": "HeroBlock",
                                                                "data-link-id": `HeroBlock-action-${t}`,
                                                                children: e.title
                                                            })
                                                        })]
                                                    }, e.link?.linkReference?.title || t)
                                                })
                                            })
                                        }), (0, l.jsxs)("div", {
                                            className: "hidden xl:block",
                                            children: [(0, l.jsx)(s.A.Actions, {
                                                variant: T,
                                                children: F.map((e, t) => {
                                                    let r = A[t],
                                                        n = e.link?.linkReference?.href?.current || "";
                                                    e.link?.linkReference?.target;
                                                    let s = n.endsWith(".exe") || n.endsWith(".dmg"),
                                                        o = !!e.secondaryLink?.linkReference?.href?.current,
                                                        i = n && !s && !o;
                                                    return r?.form ? C(e, r, t) : (0, l.jsx)(a.A, {
                                                        size: "medium",
                                                        variant: e.buttonType,
                                                        rounded: !0,
                                                        ...i && {
                                                            href: n
                                                        },
                                                        onPress: () => L(e),
                                                        hasArrow: !0,
                                                        "data-link-location": "HeroBlock",
                                                        "data-link-id": `HeroBlock-action-${t}`,
                                                        children: e.title
                                                    }, e.link?.linkReference?.title || t)
                                                })
                                            }), v && F[0] && (0, l.jsx)(d, {
                                                linkText: b?.linkText ?? "Download for",
                                                separatorText: b?.separatorText ?? "or",
                                                actionLinks: I.map(e => ({
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
                }
        },
        52532: (e, t, r) => {
            r.d(t, {
                A: () => h
            });
            var l = r(80475),
                n = r(88491),
                s = r(92572),
                a = r(16335),
                o = r(74620),
                i = r(98822),
                d = r(2609);
            let c = (0, i.default)(() => Promise.all([r.e(87770), r.e(89058)]).then(r.t.bind(r, 23399, 23)), {
                    loadableGenerated: {
                        webpack: () => [23399]
                    },
                    ssr: !1
                }),
                u = ({
                    containerRef: e,
                    lqip: t
                }) => {
                    let r = (0, n.useRef)(null),
                        s = (0, n.useRef)(null),
                        a = "pointer-events-none absolute inset-0 hidden h-full w-full opacity-80 blur-2xl lg:block [will-change:filter]";
                    return ((0, n.useEffect)(() => {
                        let t, l = r.current,
                            n = e.current;
                        if (!l || !n) return;
                        let a = l.getContext("2d");
                        if (!a) return;
                        let o = n.querySelector("video"),
                            i = () => {
                                o && n.contains(o) || (o = n.querySelector("video"));
                                let e = o,
                                    r = s.current;
                                if (e) {
                                    e.crossOrigin || (e.crossOrigin = "anonymous");
                                    try {
                                        a.drawImage(e, 0, 0, 32, 32), r && (r.style.transform = `scale(${1.01+1e-6*Math.random()})`)
                                    } catch {}
                                }
                                t = requestAnimationFrame(i)
                            };
                        return t = requestAnimationFrame(i), () => cancelAnimationFrame(t)
                    }, [e, t]), t) ? (0, l.jsx)("div", {
                        className: a,
                        style: {
                            backgroundImage: `url(${t})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            transform: "scale(1.05)"
                        },
                        "aria-hidden": "true"
                    }) : (0, l.jsx)("div", {
                        ref: s,
                        className: a,
                        "aria-hidden": "true",
                        "data-sentry-component": "MediaGlow",
                        "data-sentry-source-file": "HeroMedia.tsx",
                        children: (0, l.jsx)("canvas", {
                            ref: r,
                            width: 32,
                            height: 32,
                            className: "h-full w-full"
                        })
                    })
                };
            var m = r(17873),
                f = r(4767);
            let x = ({
                children: e,
                className: t = "",
                size: r = "default",
                variant: n = "default",
                image: o,
                keyFigures: i
            }) => {
                let d = (0, a.$)("relative grid grid-cols-12", t, {
                        dark: !!o
                    }),
                    c = (0, a.$)("relative col-span-12 mx-auto lg:container", {
                        "lg:py-32 lg:pb-10": "gdc2026" !== n && "default" === r,
                        "lg:py-16 lg:pb-5": "gdc2026" !== n && "slim" === r,
                        "py-0 lg:py-20 max-w-[82rem]": "gdc2026" === n
                    }),
                    u = (0, a.$)({
                        "flex flex-col lg:flex-row-reverse": "gdc2026" !== n,
                        "grid grid-cols-12 gap-6": "gdc2026" === n
                    });
                return (0, l.jsxs)("section", {
                    className: d,
                    "data-sentry-component": "Hero",
                    "data-sentry-source-file": "Hero.tsx",
                    children: [o && (0, l.jsx)(s.default, {
                        src: o.src,
                        alt: o.alt,
                        fill: !0,
                        className: "object-cover",
                        quality: 100,
                        sizes: "100vw"
                    }), (0, l.jsxs)("div", {
                        className: c,
                        children: [(0, l.jsx)("div", {
                            className: u,
                            children: e
                        }), i && i.length > 0 && (0, l.jsx)("div", {
                            className: "mx-6 lg:mx-0",
                            children: (0, l.jsx)(m.A, {
                                keyFigures: i,
                                nested: !0
                            })
                        })]
                    })]
                })
            };
            x.Actions = ({
                children: e,
                variant: t = "default"
            }) => (0, l.jsx)("div", {
                className: "gdc2026" === t ? "flex flex-col items-center lg:items-start gap-3 pb-3.5 lg:pb-16 lg:flex-row" : "flex flex-col items-start gap-3 pb-3.5 xl:flex-row",
                "data-sentry-component": "HeroActions",
                "data-sentry-source-file": "HeroActions.tsx",
                children: e
            }), x.AlternateActions = ({
                children: e
            }) => (0, l.jsx)("div", {
                className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
                "data-sentry-component": "HeroAlternateActions",
                "data-sentry-source-file": "HeroAlternateActions.tsx",
                children: e
            }), x.Body = ({
                children: e,
                variant: t = "default"
            }) => (0, l.jsx)("div", {
                className: "gdc2026" === t ? "loco-text-body-lg" : "loco-text-body-lg mb-6",
                "data-sentry-component": "HeroBody",
                "data-sentry-source-file": "HeroBody.tsx",
                children: e
            }), x.Content = ({
                children: e,
                variant: t = "default"
            }) => {
                let r = (0, a.A)({
                    "flex-1 pt-10 pr-8": "gdc2026" !== t,
                    "w-full col-span-12 lg:col-span-4 px-4 pb-6 gap-6 items-center lg:gap-9 lg:items-start lg:px-0 lg:pb-0 lg:pt-8 flex flex-col order-2 lg:order-1 text-center lg:text-left": "gdc2026" === t
                });
                return (0, l.jsx)("div", {
                    className: r,
                    style: "gdc2026" === t ? {
                        gap: "2.3125rem"
                    } : void 0,
                    "data-sentry-component": "HeroContent",
                    "data-sentry-source-file": "HeroContent.tsx",
                    children: e
                })
            }, x.Overline = ({
                children: e,
                className: t
            }) => {
                let r = (0, a.A)("loco-caption-lg-semibold mb-3 text-gray-500 dark:text-gray-300", t);
                return (0, l.jsx)("div", {
                    className: r,
                    "data-sentry-component": "HeroOverline",
                    "data-sentry-source-file": "HeroOverline.tsx",
                    children: e
                })
            }, x.Title = ({
                children: e,
                variant: t = "default"
            }) => {
                let r = (0, a.A)("!font-nohemi text-black dark:text-white", {
                    "loco-text-heading-md mb-6": "gdc2026" !== t,
                    "loco-text-heading-4xl break-normal lg:[word-spacing:100vw]": "gdc2026" === t
                });
                return (0, l.jsx)("h1", {
                    className: r,
                    "data-sentry-component": "HeroTitle",
                    "data-sentry-source-file": "HeroTitle.tsx",
                    children: e
                })
            }, x.Pricing = ({
                data: e = [],
                onSelectionChange: t,
                selectedKey: r
            }) => {
                let s = (0, n.useMemo)(() => e.find(e => e.key === r), [e, r]);
                return (0, n.useEffect)(() => {
                    let l = !r || !s,
                        n = e?.[0]?.key;
                    l && t && n && t(n)
                }, [e, r, t, s]), (0, l.jsx)(l.Fragment, {
                    children: !!e.length && (0, l.jsx)("div", {
                        className: "mb-6 flex",
                        children: (0, l.jsxs)("div", {
                            children: [(0, l.jsxs)("div", {
                                className: "mb-2",
                                children: [(0, l.jsx)("span", {
                                    className: "loco-text-heading-xs mr-1 font-semibold",
                                    children: s?.price
                                }), (0, l.jsx)("span", {
                                    className: "loco-text-body-sm",
                                    children: s?.suffixPrice
                                })]
                            }), e.length > 1 && (0, l.jsx)(o.A, {
                                selectedKey: r,
                                onSelectionChange: t,
                                children: e.map(({
                                    key: e,
                                    label: t
                                }) => (0, l.jsx)(o.A.Item, {
                                    children: t
                                }, e))
                            })]
                        })
                    })
                })
            }, x.Media = ({
                media: e,
                className: t = "",
                variant: r = "default"
            }) => {
                let {
                    image: o,
                    video: i
                } = e || {}, [m, f] = (0, n.useState)(!1), x = (0, n.useRef)(null), h = "gdc2026" === r ? "object-cover" : "object-contain", g = (0, a.A)("relative flex grow", {
                    "m-4 h-full": "gdc2026" !== r,
                    "w-full h-[22rem] lg:h-full lg:w-auto lg:m-4": "gdc2026" === r
                }, t), p = (0, a.A)("relative h-full w-full overflow-hidden", {
                    "rounded-3xl": "gdc2026" !== r,
                    "lg:rounded-3xl": "gdc2026" === r
                }), y = (0, a.A)("flex items-center", {
                    "flex-1 justify-center lg:justify-start": "gdc2026" !== r,
                    "w-full col-span-12 lg:col-span-8 justify-center order-1 lg:order-2": "gdc2026" === r
                }), v = (e, t) => o?.asset.url ? (0, l.jsx)(s.default, {
                    src: o.asset.url,
                    alt: e,
                    fill: !0,
                    className: (0, a.A)("absolute h-full", h, t),
                    sizes: `(min-width: ${d.A.Large}px) 33vw, (min-width: ${d.A.Medium}px) 50vw, 100vw`,
                    placeholder: o.asset.metadata?.lqip ? "blur" : "empty",
                    blurDataURL: o.asset.metadata?.lqip || void 0,
                    "data-sentry-element": "Image",
                    "data-sentry-component": "renderImage",
                    "data-sentry-source-file": "HeroMedia.tsx"
                }) : null;
                return (0, l.jsx)("div", {
                    className: y,
                    "data-sentry-component": "HeroMedia",
                    "data-sentry-source-file": "HeroMedia.tsx",
                    children: (o || i) && (0, l.jsxs)("div", {
                        className: g,
                        children: [(0, l.jsx)(u, {
                            containerRef: x,
                            lqip: m ? void 0 : o?.asset?.metadata?.lqip
                        }), (0, l.jsxs)("div", {
                            ref: x,
                            className: p,
                            children: [o?.asset.url && !i && v("Hero image", void 0), i && o?.asset.url && !m && v("Video thumbnail", "z-10"), i && (0, l.jsx)("div", {
                                className: "h-full w-full self-center",
                                children: (0, l.jsx)(c, {
                                    url: i?.muxHLSURL || "",
                                    playing: !0,
                                    loop: !0,
                                    muted: !0,
                                    playsinline: !0,
                                    width: "100%",
                                    height: "100%",
                                    className: (0, a.A)("absolute top-0 h-full", {
                                        "[&>video]:object-cover": "gdc2026" === r,
                                        "[&>video]:object-contain": "gdc2026" !== r
                                    }),
                                    onReady: () => f(!0),
                                    onBuffer: () => f(!1),
                                    onBufferEnd: () => f(!0)
                                })
                            })]
                        })]
                    })
                })
            }, x.YouTubeVideo = ({
                className: e,
                title: t,
                url: r,
                autoplay: n,
                blockedMessage: s,
                consentButtonLabel: o
            }) => {
                let i = (0, a.A)("relative flex grow md:h-auto md:content-center md:mx-8 md:rounded-3xl md:overflow-hidden", e);
                return r && t ? (0, l.jsx)("div", {
                    className: "flex flex-1",
                    "data-sentry-component": "HeroYouTubeVideo",
                    "data-sentry-source-file": "HeroYouTubeVideo.tsx",
                    children: (0, l.jsx)("div", {
                        className: i,
                        children: (0, l.jsx)(f.A, {
                            autoplay: n,
                            title: t,
                            url: r,
                            blockedMessage: s,
                            consentButtonLabel: o,
                            "data-sentry-element": "YouTubeModal",
                            "data-sentry-source-file": "HeroYouTubeVideo.tsx"
                        })
                    })
                }) : null
            };
            let h = x
        },
        62370: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            var l = r(80475);
            r(88491);
            let n = ({
                className: e = "",
                width: t = 16,
                height: r = 16
            }) => (0, l.jsxs)("svg", {
                width: t,
                height: r,
                viewBox: "0 0 256 256",
                xmlns: "http://www.w3.org/2000/svg",
                className: e,
                "data-sentry-element": "svg",
                "data-sentry-component": "Close",
                "data-sentry-source-file": "CloseIcon.tsx",
                children: [(0, l.jsx)("rect", {
                    width: "256",
                    height: "256",
                    fill: "none",
                    "data-sentry-element": "rect",
                    "data-sentry-source-file": "CloseIcon.tsx"
                }), (0, l.jsx)("line", {
                    x1: "200",
                    y1: "56",
                    x2: "56",
                    y2: "200",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "16",
                    "data-sentry-element": "line",
                    "data-sentry-source-file": "CloseIcon.tsx"
                }), (0, l.jsx)("line", {
                    x1: "200",
                    y1: "200",
                    x2: "56",
                    y2: "56",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "16",
                    "data-sentry-element": "line",
                    "data-sentry-source-file": "CloseIcon.tsx"
                })]
            })
        },
        64195: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var l = r(80475);
            r(88491);
            var n = r(95719),
                s = r(18227),
                a = r(70719),
                o = r(2340);
            let i = ({
                blockedMessage: e,
                consentButtonLabel: t
            }) => {
                let r = "C0004";
                return (0, l.jsx)(l.Fragment, {
                    children: !(() => {
                        let [e] = (0, a.A)("OptanonConsent") || "", t = {};
                        return e && e.split("groups=")[1].split("&")[0].split("%2C").forEach(e => {
                            let [r, l] = e.split("%3A");
                            t[r] = parseInt(l)
                        }), t[r]
                    })() && (0, l.jsxs)("div", {
                        className: "consent absolute top-0 right-0 bottom-0 left-0 z-10 flex flex-col items-center overflow-auto rounded-2xl bg-black p-3 leading-5 text-white opacity-90 sm:justify-center sm:p-5",
                        children: [(0, l.jsx)(o.A, {
                            className: "mx-auto text-center sm:w-4/5 sm:text-base",
                            children: (0, l.jsx)(n.RK, {
                                value: e
                            })
                        }), (0, l.jsx)("div", {
                            className: "mt-5",
                            children: (0, l.jsx)(s.A, {
                                rounded: !0,
                                target: "_self",
                                variant: "primary",
                                onPress: () => {
                                    let e = document.getElementById("ot-sdk-btn"),
                                        t = document.getElementById(`ot-header-id-${r}`),
                                        l = window;
                                    l && l.OneTrust ? l.OneTrust.ToggleInfoDisplay() : e.click(), t.click()
                                },
                                children: t
                            })
                        })]
                    })
                })
            }
        },
        75407: (e, t, r) => {
            r.d(t, {
                A: () => m
            });
            var l = r(80475),
                n = r(88491),
                s = r(70033),
                a = r(70037),
                o = r(5276),
                i = r(86403),
                d = r(18227);
            let c = ({
                    state: e,
                    children: t,
                    ...r
                }) => {
                    let o = (0, n.useRef)(null),
                        {
                            modalProps: i,
                            underlayProps: d
                        } = (0, s.l)({
                            ...r
                        }, e, o);
                    return (0, n.useEffect)(() => {
                        let t = o.current?.querySelector("div"),
                            r = e => {
                                let r = e.relatedTarget;
                                t && !t.contains(r) && t.focus()
                            };
                        return e.isOpen && t && (t.focus(), t.addEventListener("focusout", r)), () => {
                            t && t.removeEventListener("focusout", r)
                        }
                    }, [e.isOpen]), (0, l.jsx)(a.hJ, {
                        "data-sentry-element": "Overlay",
                        "data-sentry-component": "ModalOverlay",
                        "data-sentry-source-file": "Modal.tsx",
                        children: (0, l.jsx)("div", {
                            className: "fixed top-0 right-0 bottom-0 left-0 z-[60] flex items-start justify-center overflow-hidden bg-gray-500/50",
                            ...d,
                            children: (0, l.jsx)("div", {
                                ref: o,
                                ...i,
                                className: "contents",
                                children: t
                            })
                        })
                    })
                },
                u = ({
                    actionLabel: e,
                    children: t,
                    showTriggerButton: r = !0,
                    ...s
                }) => {
                    let a = (0, i.T)({
                            ...s
                        }),
                        {
                            triggerProps: u,
                            overlayProps: m
                        } = (0, o.o)({
                            type: "dialog"
                        }, a);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [r && (0, l.jsx)(d.A, {
                            rounded: !0,
                            hasArrow: !0,
                            ...u,
                            children: e
                        }), a.isOpen && (0, l.jsx)(c, {
                            state: a,
                            ...s,
                            isDismissable: !0,
                            children: "function" == typeof t ? (0, n.cloneElement)(t(a.close), m) : (0, n.cloneElement)(t, m)
                        })]
                    })
                };
            u.Layout = ({
                children: e,
                modal: t
            }) => (0, l.jsxs)("div", {
                className: "flex h-screen max-w-[600px] flex-col overflow-scroll rounded-xl bg-white p-10 sm:min-w-[600px] md:my-20 md:h-3/4 [&>*]:text-black",
                tabIndex: -1,
                "data-sentry-component": "Layout",
                "data-sentry-source-file": "Layout.tsx",
                children: [(0, l.jsx)("h4", {
                    className: "mb-4 text-2xl leading-8 font-medium",
                    children: t.title
                }), (0, l.jsx)("p", {
                    className: "mb-8 text-base leading-5 font-medium",
                    children: t.description
                }), e]
            });
            let m = u
        },
        83688: (e, t, r) => {
            r.d(t, {
                o: () => y
            });
            var l = r(80475),
                n = r(11063),
                s = r(88491),
                a = r(18227),
                o = r(26841),
                i = r(88454),
                d = r(72757),
                c = r(30408),
                u = r(59924),
                m = r(93913),
                f = r(70719),
                x = r(56868),
                h = r(63727),
                g = r(74615),
                p = r(35513);
            let y = ({
                form: e,
                close: t,
                isGrowForm: r
            }) => {
                let y = (0, p.Wf)(["sfcid", "sflsa", "sfit"], r),
                    [v, b] = (0, s.useState)(!1),
                    {
                        setFormSubmitted: j
                    } = (0, m.B1)(),
                    [k] = (0, f.A)("ELOQUA"),
                    {
                        handleSubmit: w,
                        control: A,
                        setValue: N,
                        watch: M,
                        getValues: T,
                        formState: {
                            isSubmitting: C
                        }
                    } = (0, x.mN)({
                        reValidateMode: "onChange",
                        mode: "onChange"
                    }),
                    L = M(h.bo);
                return v && e?.successMessage?.showSuccessMessage ? (0, l.jsxs)("div", {
                    className: "flex flex-col items-center justify-center p-8 text-center",
                    children: [e.successMessage.title && (0, l.jsx)("h3", {
                        className: "mb-4 text-xl font-semibold text-gray-900",
                        children: e.successMessage.title
                    }), e.successMessage.description && (0, l.jsx)("p", {
                        className: "mb-6 text-gray-600",
                        children: e.successMessage.description
                    }), e?.successMessage?.closeButtonText && (0, l.jsx)(a.A, {
                        onPress: t,
                        className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                        variant: "secondary",
                        children: e?.successMessage?.closeButtonText
                    })]
                }) : (0, l.jsxs)(u.A, {
                    onSubmit: w(l => {
                        let s = r ? (({
                                emailConfirmation: e,
                                ghandler: t,
                                gcid: r,
                                growDivision: l,
                                growDepartment: n
                            }) => ({
                                emailConfirmation: e,
                                ghandler: t,
                                gcid: r,
                                growDivision: l,
                                growDepartment: n,
                                grow: !0
                            }))(e?.sfdcIntegration || {}) : e?.sfdcIntegration,
                            a = e?.fields ? (0, p.Zk)(e.fields, T, L) : {};
                        l.elqCustomerGUID = k?.split("&")?.[0]?.split("GUID=")?.[1] || "", l = {
                            ...l,
                            ...s,
                            ...a,
                            ...y,
                            ...e?.extraFields
                        }, fetch("https://create.unity.com/e/f2", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: new URLSearchParams((0, p.Ec)(l)).toString()
                        }).then(() => {
                            (0, g.Ay)({
                                properties: {
                                    form_action: "submitted",
                                    form_id: l.elqFormID,
                                    form_name: l.elqFormName,
                                    form_customer_id: l.elqCustomerGUID
                                }
                            }), j(!0), e?.successMessage?.showSuccessMessage ? b(!0) : t()
                        }).catch(e => n.Cp(e))
                    }),
                    "data-sentry-element": "Form",
                    "data-sentry-component": "FormBuilder",
                    "data-sentry-source-file": "FormsBuilder.tsx",
                    children: [(0, l.jsx)("div", {
                        className: "flex flex-col [&>*]:mt-3",
                        children: e?.fields && e?.fields.map((e, t) => {
                            switch (e.formField) {
                                case "input":
                                    return (0, l.jsx)(o.A, {
                                        ...e,
                                        control: A,
                                        countryCode: L
                                    }, t);
                                case "checkbox":
                                    return (0, l.jsx)(i.A, {
                                        countryCode: L,
                                        ...e,
                                        control: A
                                    }, t);
                                case "dropdown":
                                    return (0, l.jsx)(d.A, {
                                        countryCode: L,
                                        ...e,
                                        control: A,
                                        setValue: N
                                    }, t);
                                case "richText":
                                    return (0, l.jsx)(c.A, {
                                        ...e,
                                        control: A,
                                        countryCode: L
                                    }, t)
                            }
                        })
                    }), e?.actions && (0, l.jsxs)("div", {
                        className: "mt-10 border-t border-t-gray-200 pt-6",
                        children: [e?.actions?.primaryActionText && (0, l.jsx)(a.A, {
                            type: "submit",
                            rounded: !0,
                            hasArrow: !0,
                            disabled: C,
                            children: e?.actions?.primaryActionText
                        }), e?.actions?.secondaryActionText && (0, l.jsx)(a.A, {
                            onPress: t,
                            className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                            variant: "secondary",
                            children: e?.actions?.secondaryActionText
                        })]
                    })]
                })
            }
        },
        89326: (e, t, r) => {
            r.d(t, {
                g: () => n
            });
            var l = r(74615);
            let n = e => {
                let t = (({
                    name: e,
                    videoDuration: t,
                    videoProgress: r
                }) => ({
                    event: "userEvent",
                    event_name: e,
                    properties: {
                        video_duration: t,
                        video_progress: r
                    }
                }))(e);
                (0, l.Ay)(t)
            }
        }
    }
]);