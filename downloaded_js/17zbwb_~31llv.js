(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 596889, e => {
    "use strict";
    var l = e.i(500783),
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
}, 893171, 447533, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(655105),
        r = e.i(722978),
        s = e.i(481392),
        i = e.i(828083),
        n = e.i(783078);
    let d = (0, i.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
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
        }), b = (0, r.default)("flex items-center", {
            "flex-1 justify-center lg:justify-start": "gdc2026" !== i,
            "w-full col-span-12 lg:col-span-8 justify-center order-1 lg:order-2": "gdc2026" === i
        }), v = (e, t) => o?.asset.url ? (0, l.jsx)(a.default, {
            src: o.asset.url,
            alt: e,
            fill: !0,
            className: (0, r.default)("absolute h-full", h, t),
            sizes: `(min-width: ${n.default.Large}px) 33vw, (min-width: ${n.default.Medium}px) 50vw, 100vw`,
            placeholder: o.asset.metadata?.lqip ? "blur" : "empty",
            blurDataURL: o.asset.metadata?.lqip || void 0
        }) : null;
        return (0, l.jsx)("div", {
            className: b,
            children: (o || u) && (0, l.jsxs)("div", {
                className: g,
                children: [(0, l.jsx)(c, {
                    containerRef: x,
                    lqip: m ? void 0 : o?.asset?.metadata?.lqip
                }), (0, l.jsxs)("div", {
                    ref: x,
                    className: p,
                    children: [o?.asset.url && !u && v("Hero image", void 0), u && o?.asset.url && !m && v("Video thumbnail", "z-10"), u && (0, l.jsx)("div", {
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
        b = e.i(829150),
        v = e.i(434438),
        j = e.i(447093);
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
        youtubeVideo: y,
        isHidden: k,
        showAlterativeOSLinks: w,
        alternativeOSLinkSettings: N
    }) => {
        let L, R = -1 !== (L = window.navigator.userAgent).indexOf("Win") ? "Windows" : -1 !== L.indexOf("Mac") ? "Mac" : -1 !== L.indexOf("Linux") ? "Linux" : "Unknown",
            _ = (0, t.useRef)(null),
            {
                state: A
            } = (0, p.default)(),
            M = (0, j.useLocale)(),
            S = {
                ...A,
                locale: (0, v.default)(M)
            },
            {
                mapFormActions: T
            } = (0, h.useFormModal)(s),
            $ = (0, t.useMemo)(() => T(s) || [], [s, T]),
            C = n?.asset?.url ? {
                src: n.asset.url,
                alt: "Hero background image"
            } : void 0,
            F = (0, t.useMemo)(() => (o?.data ?? []).map(e => e?.value?.text ? {
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
            if (!_.current) {
                let e = document.createElement("a");
                e.style.display = "none", document.body.appendChild(e), _.current = e
            }
            return () => {
                _.current && document.body.contains(_.current) && document.body.removeChild(_.current)
            }
        }, []);
        let P = c ?? void 0,
            B = (e, a, r) => {
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
            O = e => {
                let l = e.link?.linkReference?.href?.current,
                    t = l ? (0, b.default)(l, S, e.extendLink) : l,
                    a = e.secondaryLink?.linkReference?.href?.current,
                    r = e.link?.linkReference?.target || "_self",
                    s = x.locales.find(e => window.location.pathname === `/${e}` || window.location.pathname.startsWith(`/${e}/`)) ?? "en";
                t && (t.endsWith(".exe") || t.endsWith(".dmg") ? _.current && (_.current.href = t, _.current.download = "", _.current.target = r, _.current.click()) : "_blank" === r ? window.open(t, "_blank") : window.location.href = t), a && setTimeout(() => {
                    let e = a.replace(/^\//, "");
                    window.location.href = `/${s}/${e}`
                }, 1e3), e?.callback && e.callback()
            },
            E = s?.filter(e => !e.operatingSystem || e.operatingSystem === R) || [],
            I = s?.filter(e => !!e.operatingSystem && "Unknown" !== e.operatingSystem) || [];
        return (0, l.jsx)(l.Fragment, {
            children: !k && (0, l.jsx)("section", {
                className: "dark" === u ? "dark" : "",
                children: (0, l.jsx)("div", {
                    className: "dark:bg-black",
                    children: (0, l.jsxs)(m, {
                        image: C,
                        size: "slim" === d ? "slim" : "default" === d ? "default" : void 0,
                        variant: P,
                        keyFigures: F,
                        children: [i && (0, l.jsx)(m.Media, {
                            media: i,
                            variant: P
                        }), !i && y && (0, l.jsx)(m.YouTubeVideo, {
                            autoplay: !0,
                            url: y?.url,
                            title: y?.title,
                            blockedMessage: y?.consent?.blockedMessage,
                            consentButtonLabel: y?.consent?.consentButtonLabel || ""
                        }), (0, l.jsxs)(m.Content, {
                            variant: P,
                            children: [(0, l.jsx)(m.Overline, {
                                children: e
                            }), (0, l.jsx)(m.Title, {
                                variant: P,
                                children: a
                            }), (0, l.jsx)(m.Body, {
                                variant: P,
                                children: r
                            }), (0, l.jsx)("div", {
                                className: "xl:hidden",
                                children: (0, l.jsx)(m.Actions, {
                                    variant: P,
                                    children: E.map((e, a) => {
                                        let r = $[a],
                                            s = e.link?.linkReference?.href?.current || "",
                                            i = (0, b.default)(s, S, e.extendLink);
                                        e.link?.linkReference?.target;
                                        let n = 0 === a,
                                            d = s.endsWith(".exe") || s.endsWith(".dmg"),
                                            c = !!e.secondaryLink?.linkReference?.href?.current,
                                            o = i && !d && !c;
                                        return r?.form ? B(e, r, a) : (0, l.jsxs)(t.default.Fragment, {
                                            children: [n && (0, l.jsx)(f.default, {
                                                size: "medium",
                                                variant: e.buttonType,
                                                rounded: !0,
                                                ...o && {
                                                    href: i
                                                },
                                                onPress: () => O(e),
                                                hasArrow: !0,
                                                "data-link-location": "HeroBlock",
                                                "data-link-id": `HeroBlock-action-${a}`,
                                                children: e.title
                                            }), n && w && (0, l.jsx)(g, {
                                                linkText: N?.linkText ?? "Download for",
                                                separatorText: N?.separatorText ?? "or",
                                                actionLinks: I.map(e => ({
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
                                                    onPress: () => O(e),
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
                                    variant: P,
                                    children: E.map((e, t) => {
                                        let a = $[t],
                                            r = e.link?.linkReference?.href?.current || "",
                                            s = (0, b.default)(r, S, e.extendLink);
                                        e.link?.linkReference?.target;
                                        let i = r.endsWith(".exe") || r.endsWith(".dmg"),
                                            n = !!e.secondaryLink?.linkReference?.href?.current,
                                            d = s && !i && !n;
                                        return a?.form ? B(e, a, t) : (0, l.jsx)(f.default, {
                                            size: "medium",
                                            variant: e.buttonType,
                                            rounded: !0,
                                            ...d && {
                                                href: s
                                            },
                                            onPress: () => O(e),
                                            hasArrow: !0,
                                            "data-link-location": "HeroBlock",
                                            "data-link-id": `HeroBlock-action-${t}`,
                                            children: e.title
                                        }, e.link?.linkReference?.title || t)
                                    })
                                }), w && E[0] && (0, l.jsx)(g, {
                                    linkText: N?.linkText ?? "Download for",
                                    separatorText: N?.separatorText ?? "or",
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
    }], 893171)
}, 32382, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(722990),
        r = e.i(655105),
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
        let [b] = (0, t.useContext)(x.FiltersContext), {
            state: v
        } = (0, f.default)(), j = {
            ...v,
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
}, 480880, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931);
    e.s(["default", 0, ({
        blocks: e,
        blockMap: a,
        ...r
    }) => (0, l.jsx)(l.Fragment, {
        children: e?.map((e, s) => {
            let i = e?._type,
                n = a[i];
            return e.isHidden ? null : n ? (0, l.jsx)("div", {
                children: t.default.createElement(n, {
                    key: `block-${s}`,
                    ...e,
                    blockIndex: s + 1,
                    blockType: i,
                    blockKey: `${i}-${s}`,
                    ...r
                })
            }, `block-${s}`) : void 0
        })
    })])
}, 985904, e => {
    "use strict";
    var l = e.i(3931),
        t = e.i(389240);
    let a = new Map([
        ["bold", l.default.createElement(l.default.Fragment, null, l.default.createElement("path", {
            d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"
        }))],
        ["duotone", l.default.createElement(l.default.Fragment, null, l.default.createElement("path", {
            d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
            opacity: "0.2"
        }), l.default.createElement("path", {
            d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"
        }))],
        ["fill", l.default.createElement(l.default.Fragment, null, l.default.createElement("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"
        }))],
        ["light", l.default.createElement(l.default.Fragment, null, l.default.createElement("path", {
            d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"
        }))],
        ["regular", l.default.createElement(l.default.Fragment, null, l.default.createElement("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"
        }))],
        ["thin", l.default.createElement(l.default.Fragment, null, l.default.createElement("path", {
            d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"
        }))]
    ]);
    var r = Object.defineProperty,
        s = Object.defineProperties,
        i = Object.getOwnPropertyDescriptors,
        n = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        c = Object.prototype.propertyIsEnumerable,
        o = (e, l, t) => l in e ? r(e, l, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: t
        }) : e[l] = t;
    let u = (0, l.forwardRef)((e, r) => l.default.createElement(t.default, s(((e, l) => {
        for (var t in l || (l = {})) d.call(l, t) && o(e, t, l[t]);
        if (n)
            for (var t of n(l)) c.call(l, t) && o(e, t, l[t]);
        return e
    })({
        ref: r
    }, e), i({
        weights: a
    }))));
    u.displayName = "Info", e.s(["Info", 0, u], 985904)
}, 401861, 841889, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(722978),
        a = e.i(3931),
        r = e.i(985904),
        s = e.i(146911);
    let i = ({
            title: e,
            text: i,
            action: n,
            truncate: d,
            className: c = "",
            isContained: o,
            dismiss: u
        }) => {
            let m = (0, a.useMemo)(() => `unity-alert-${i?.substring(0,30).replaceAll(" ","_")}`, [i]),
                [f, x] = (0, a.useState)(!0),
                [h, g] = (0, a.useState)(!1);
            return ((0, a.useEffect)(() => {
                localStorage?.getItem(m) && g(!0)
            }, [m]), h) ? null : (0, l.jsx)("div", {
                className: (0, t.clsx)({
                    container: o
                }),
                children: (0, l.jsxs)("div", {
                    className: (0, t.clsx)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
                        flex: u?.enabled
                    }, {
                        "rounded-lg": o
                    }, c),
                    children: [(0, l.jsx)(r.Info, {
                        size: 18,
                        className: "ph-fill fill-blue absolute top-5 left-[1rem]",
                        weight: "fill"
                    }), (0, l.jsxs)("div", {
                        className: "",
                        children: [e && (0, l.jsx)("div", {
                            className: "text-small-bold",
                            children: e
                        }), (0, l.jsxs)("div", {
                            children: [(0, l.jsx)("div", {
                                className: (0, t.clsx)({
                                    "line-clamp-4 sm:line-clamp-2": d?.enabled && f
                                }),
                                children: i
                            }), d?.enabled && (0, l.jsx)("button", {
                                onClick: () => x(!f),
                                className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                children: f ? d.seeMoreLabel : d.seeLessLabel
                            })]
                        })]
                    }), (n?.href || u?.enabled) && (0, l.jsxs)("div", {
                        className: "sm:auto inline-flex w-fit items-center gap-4 [&>*]:whitespace-nowrap",
                        children: [n && (0, l.jsx)(s.default, {
                            className: "mx-auto mt-0 inline-block whitespace-nowrap",
                            href: n.href,
                            target: n.target || "_self",
                            size: "tiny",
                            underline: !0,
                            children: n.title
                        }), u?.enabled && (0, l.jsx)("button", {
                            onClick: () => {
                                g(!0), localStorage.setItem(m, Date.now().toString())
                            },
                            className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                            children: u?.dismissLabel ?? "Dismiss"
                        })]
                    })]
                })
            })
        },
        n = ({
            title: e,
            text: a,
            action: r,
            theme: s,
            truncate: n,
            dismiss: d,
            isContained: c,
            isHidden: o,
            spacing: u
        }) => {
            let m = (0, t.clsx)({
                "pt-10": u?.top
            }, {
                "pb-10": u?.bottom
            }, {
                "dark bg-black": "dark" === s
            });
            return o || !a ? null : (0, l.jsx)("section", {
                className: m,
                children: (0, l.jsx)(i, {
                    title: e,
                    text: a,
                    isContained: c,
                    truncate: n || {},
                    dismiss: d || {},
                    action: r && {
                        title: r?.text || "",
                        href: r?.fieldLink?.linkReference?.href?.current || "",
                        target: r?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })
            })
        };
    e.s(["default", 0, n], 841889), e.s(["default", 0, n], 401861)
}, 246916, e => {
    "use strict";
    var l = e.i(430907),
        t = e.i(447093),
        a = e.i(31588);
    e.s(["useMTBanner", 0, function(e, r = []) {
        var s, i;
        let n, d, c, o, u, m = (0, l.usePathname)(),
            f = (0, t.useLocale)(),
            x = f !== a.defaultLocale ? m.replace(`/${f}`, "") : m;
        return {
            shouldDisplayMTBanner: f !== a.defaultLocale && e?.translationType === "MT" && !r.includes(x),
            updatedBlocks: (s = e.blocks ?? [], i = e.machineTranslationDisclaimer, n = s.reduce((e, l, t) => ["hero", "alternateNavigation", "headliner"].includes(l._type) ? t : e, -1), d = [...s], c = d[n + 1]?._type === "alternateNavigationAnchor" || d[n + 1]?._type === "anchorButton" ? d[n + 2] : d[n + 1], o = c?.theme ?? null, u = {
                _type: "alert",
                text: i?.text,
                isContained: !0,
                spacing: {
                    bottom: !0,
                    top: !0
                },
                ...o && {
                    theme: o
                },
                action: {
                    text: i?.action?.title,
                    fieldLink: {
                        linkReference: {
                            href: {
                                current: `${window.location.origin}${x}`
                            },
                            target: "_self"
                        }
                    }
                }
            }, -1 === n ? d.unshift(u) : d.splice(n + 1, 0, u), d),
            redirectPathName: x
        }
    }], 246916)
}, 996332, 422664, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(722978),
        a = e.i(655105);
    let r = ({
            size: e = "m",
            url: r,
            alt: s = "profile picture"
        }) => {
            let {
                width: i,
                height: n
            } = {
                m: {
                    width: 64,
                    height: 64
                },
                s: {
                    width: 48,
                    height: 48
                },
                xs: {
                    width: 40,
                    height: 40
                },
                xxs: {
                    width: 40,
                    height: 40
                }
            } [e], d = (0, t.default)("inline-block", "rounded-full overflow-hidden relative shrink-0 mr-3 hidden lg:block md:block");
            return (0, l.jsx)("div", {
                className: d,
                children: (0, l.jsx)(a.default, {
                    src: r,
                    alt: s,
                    width: i,
                    height: n
                })
            })
        },
        s = ({
            avatar: e,
            name: a,
            company: s,
            role: i,
            size: n = "m"
        }) => {
            let d = (0, t.default)("text-gray-900 dark:text-gray-100 pb-1", {
                    "loco-caption-lg-semibold": "m" === n,
                    "loco-caption-sm-semibold": "s" === n || "xs" === n || "xxs" === n
                }),
                c = (0, t.default)("text-gray-700 dark:text-gray-300 tracking-normal", {
                    "loco-text-body-xs-semibold": "m" === n,
                    "loco-text-body-sm-medium": "s" === n || "xs" === n || "xxs" === n
                });
            return (0, l.jsxs)("div", {
                className: "flex items-center",
                children: [e && (0, l.jsx)(r, {
                    url: e,
                    size: n,
                    alt: a
                }), (0, l.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0, l.jsxs)("span", {
                        className: d,
                        children: [a?.toUpperCase(), " ", s && a && "/" || "", " ", s?.toUpperCase()]
                    }), (0, l.jsx)("span", {
                        className: c,
                        children: i
                    })]
                })]
            })
        };
    e.s(["default", 0, s], 422664);
    let i = ({
        content: e,
        author: a,
        className: r = "",
        textClassName: i = ""
    }) => {
        let n = (0, t.default)("p-6 rounded-xl", r),
            d = (0, t.default)("mb-6 text-gray-800 dark:text-gray-200", i);
        return (0, l.jsxs)("div", {
            className: n,
            children: [(0, l.jsx)("div", {
                className: d,
                children: e
            }), (0, l.jsx)(s, {
                ...a
            })]
        })
    };
    e.s(["default", 0, ({
        title: e,
        testimonials: a,
        layout: r = "one-layout",
        testimonialVariant: s = "default",
        className: n = ""
    }) => {
        let d = (0, t.default)({
                "one-layout": "col-span-12",
                "two-layout": "col-span-12 md:col-span-6 flex",
                "three-layout": "col-span-12 md:col-span-6 lg:col-span-4 flex"
            } [r]),
            c = (0, t.default)("one-layout" !== r && "flex flex-col justify-between w-full", {
                "bg-gray-100 dark:bg-gray-900": "default" === s
            }, {
                "border border-gray-200 dark:border-gray-700": "outlined" === s && !e
            }),
            o = (0, t.default)({
                "auto-rows-fr": "one-layout" !== r
            }, "grid grid-cols-12 gap-4", n),
            u = (0, t.default)("container py-0 md:py-16", {
                "bg-gray-100 dark:bg-gray-900 rounded-2xl": e,
                "border border-gray-200 dark:border-gray-700 bg-transparent": "outlined" === s && e
            }),
            m = (0, t.default)({
                "loco-text-body-sm-medium": "two-layout" === r || "three-layout" === r,
                "loco-text-body-lg-medium": "one-layout" === r
            });
        return (0, l.jsxs)("div", {
            className: u,
            children: [e && (0, l.jsx)("div", {
                className: "loco-text-heading-sm p-6",
                children: e
            }), (0, l.jsx)("div", {
                className: o,
                children: a?.map((e, t) => {
                    let {
                        content: a,
                        author: r,
                        _key: s
                    } = e;
                    return (0, l.jsx)("div", {
                        className: d,
                        children: (0, l.jsx)(i, {
                            content: a,
                            author: r,
                            className: c,
                            textClassName: m
                        })
                    }, `${s}-${t}`)
                })
            })]
        })
    }], 996332)
}, 787213, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(996332);
    e.s(["default", 0, ({
        title: e,
        layout: a,
        testimonialVariant: r,
        testimonials: s,
        theme: i,
        hideAuthorImage: n,
        isHidden: d
    }) => {
        let c = s?.map((e, l) => ({
            content: e?.content,
            author: {
                name: e?.author.name,
                company: e?.author.company,
                role: e?.author.role,
                avatar: e?.author.avatar?.file?.asset?.url
            },
            key: l
        })) ?? [];
        return (0, l.jsx)(l.Fragment, {
            children: !d && (0, l.jsx)("section", {
                className: "dark" === i ? "dark" : "",
                children: (0, l.jsx)("div", {
                    className: "dark:bg-gray-900",
                    children: (0, l.jsx)(t.default, {
                        testimonials: c,
                        title: e,
                        layout: "two-layout" === a ? "two-layout" : "three-layout" === a ? "three-layout" : "one-layout",
                        testimonialVariant: "outlined" === r ? "outlined" : "default"
                    })
                })
            })
        })
    }], 787213)
}, 725751, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(210310),
        r = e.i(326388);
    e.s(["default", 0, ({
        theme: e,
        isHidden: s,
        verticalHeadingClass: i,
        productCatalogItems: n,
        htmlTableContent: d
    }) => {
        let {
            appendCommerceDataForMultipleProducts: c
        } = (0, r.default)(), o = (0, t.useCallback)(e => {
            let l = c(e, n);
            return l || e
        }, [n, c]), u = (0, t.useMemo)(() => {
            let e = d.rows.map(e => (e.cells = e.cells.map(e => o(e)), e));
            return {
                ...d,
                rows: e
            }
        }, [d, o]);
        return (0, l.jsx)(l.Fragment, {
            children: !s && (0, l.jsx)("section", {
                className: "dark" === e ? "dark" : "",
                children: (0, l.jsx)("div", {
                    className: "mx-auto max-w-7xl p-6 dark:bg-black",
                    children: (0, l.jsx)(a.default, {
                        verticalHeadingClass: i || "",
                        table: u
                    })
                })
            })
        })
    }], 725751)
}, 123849, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(722978),
        a = e.i(805518);
    let r = ({
            title: e,
            content: r,
            listStyle: s = "check"
        }) => {
            let i = (0, t.default)("loco-text-body [&_h4]:mb-0", {
                "checkmark-list-green": "check" === s,
                "plus-list": "plus" === s
            });
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)("div", {
                    className: "loco-caption-sm-semibold mb-2 text-gray-700 dark:text-gray-300",
                    children: e
                }), (0, l.jsx)(a.default, {
                    className: i,
                    children: r
                })]
            })
        },
        s = ({
            title: e = "",
            descriptions: t = [],
            treshold: a,
            pricing: s
        }) => (0, l.jsxs)("div", {
            className: "flex h-full flex-col justify-between rounded-lg bg-gray-100 p-6 lg:w-96 dark:bg-gray-800",
            children: [(0, l.jsxs)("div", {
                className: "grow pb-8",
                children: [(0, l.jsx)("div", {
                    className: "loco-text-heading-sm mb-8 text-black dark:text-white",
                    children: e
                }), (0, l.jsx)("div", {
                    children: t?.map((t, a) => (0, l.jsx)("div", {
                        className: "flex flex-col pb-8",
                        children: (0, l.jsx)(r, {
                            title: t.title,
                            content: t.content,
                            listStyle: t.listStyle
                        })
                    }, `card-plan-${e}-${a}`))
                }), (0, l.jsx)(r, {
                    title: a?.title || "",
                    content: a?.content || ""
                })]
            }), (0, l.jsx)("div", {
                className: "min-h-[6rem]",
                children: (0, l.jsx)(r, {
                    title: s?.title || "",
                    content: s?.content || ""
                })
            })]
        }),
        i = ({
            theme: e = "light",
            cards: a = []
        }) => {
            let r = (0, t.default)({
                dark: "dark" === e
            });
            return (0, l.jsx)("section", {
                className: r,
                children: (0, l.jsx)("div", {
                    className: "bg-white pt-8 pb-20 dark:bg-black",
                    children: (0, l.jsx)("div", {
                        className: "container flex flex-col flex-wrap gap-2 lg:flex-row lg:justify-center",
                        children: a.map((e, t) => (0, l.jsx)("div", {
                            children: (0, l.jsx)(s, {
                                ...e
                            })
                        }, `card-plan-${e.title}-${t}`))
                    })
                })
            })
        };
    var n = e.i(722990);
    e.s(["default", 0, ({
        isHidden: e,
        theme: t,
        cards: a
    }) => e ? null : (0, l.jsx)(i, {
        theme: "dark" === t ? "dark" : "light",
        cards: a.map(e => ({
            title: e.title ?? "",
            descriptions: e.descriptions?.map(e => {
                let t = e?.listStyle === "plus" ? "plus" : "check";
                return {
                    title: e?.title ?? "",
                    content: (0, l.jsx)(n.PortableText, {
                        value: e?.content
                    }),
                    listStyle: t
                }
            }) || [],
            treshold: {
                title: e?.treshold?.title ?? "",
                content: (0, l.jsx)(n.PortableText, {
                    value: e.treshold?.content
                })
            },
            pricing: {
                title: e.pricing?.title ?? "",
                content: (0, l.jsx)(n.PortableText, {
                    value: e.pricing?.content
                })
            }
        }))
    })], 123849)
}, 998569, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(278466),
        r = e.i(722978),
        s = e.i(372474),
        i = e.i(897884),
        n = e.i(582374),
        d = e.i(427651),
        c = e.i(604082),
        o = e.i(166010),
        u = e.i(939115);
    let m = (0, t.forwardRef)(function({
        variant: e = "secondary",
        ariaLabel: m,
        size: f = "medium",
        direction: x = "right",
        className: h = "",
        href: g,
        onPress: p,
        isDisabled: b,
        isForcedHover: v,
        tag: j = "button",
        ...y
    }, k) {
        let w = (0, o.useObjectRef)(k),
            [N, L] = (0, t.useState)(!1),
            {
                buttonProps: R
            } = (0, s.useButton)({
                variant: e,
                size: f,
                direction: x,
                className: h,
                elementType: g ? "a" : j,
                onPress: p,
                href: g,
                isDisabled: b,
                ...y
            }, w),
            {
                hoverProps: _,
                isHovered: A
            } = (0, i.useHover)({
                isDisabled: b
            }),
            {
                focusProps: M
            } = (0, n.useFocus)({
                onFocusChange(e) {
                    L(e && (0, d.isFocusVisible)() || !1)
                }
            }),
            S = (0, r.clsx)("btn-outlined cursor-pointer flex justify-start items-center outline-hidden border-solid border-2 rounded-full overflow-hidden", {
                primary: "btn-primary",
                secondary: "btn-secondary"
            } [e], {
                medium: "w-9 h-9",
                large: "w-14 h-14"
            } [f], {
                right: "",
                up: "-rotate-90",
                left: "rotate-180",
                down: "rotate-90"
            } [x], {
                hovered: A || v
            }, {
                focused: N
            }, {
                "!border-gray-400 pointer-events-none": b
            }, h),
            T = (0, r.clsx)("w-full transition-all duration-300 shrink-0 ", {
                "fill-gray-400": b
            }),
            $ = (0, r.clsx)(T, {
                "fill-white": "primary" === e
            }, {
                "fill-white dark:fill-black": "secondary" === e
            }, {
                "-ml-[100%]": !A && !N && !v
            }, {
                "ml-0": A || N || v
            }),
            C = (0, r.clsx)(T, "fill-black dark:fill-white");
        if (g) {
            let e = (0, c.mergeProps)(R, _, M);
            return (0, l.jsxs)(a.Link, {
                ...e,
                ref: w,
                "aria-label": m,
                className: S,
                href: g,
                legacyBehavior: !0,
                children: [(0, l.jsx)(u.ArrowIcon, {
                    className: $
                }), (0, l.jsx)(u.ArrowIcon, {
                    className: C
                })]
            })
        }
        return (0, l.jsxs)(j, {
            ...(0, c.mergeProps)(R, _, M),
            ref: w,
            "aria-label": m,
            className: S,
            tabIndex: "span" == j ? -1 : 0,
            children: [(0, l.jsx)(u.ArrowIcon, {
                className: $
            }), (0, l.jsx)(u.ArrowIcon, {
                className: C
            })]
        })
    });
    e.s(["default", 0, m])
}, 186114, e => {
    "use strict";
    var l = e.i(500783);
    e.s(["default", 0, ({
        className: e,
        handleIsPlaying: t,
        label: a,
        ...r
    }) => (0, l.jsx)("div", {
        className: e,
        children: (0, l.jsx)("button", {
            className: "transition-bg bg-blue hover:bg-blue-dark flex h-20 w-20 transform items-center justify-center rounded-full duration-300",
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
                    children: (0, l.jsx)("path", {
                        fill: "#fff",
                        stroke: "#fff",
                        d: "M17.95 9.998v.004a.429.429 0 0 1-.207.37l-.004.001L6.483 17.26a.45.45 0 0 1-.456.009l-.002-.001a.44.44 0 0 1-.164-.16l-.69.404.69-.405a.44.44 0 0 1-.061-.221V3.116a.439.439 0 0 1 .225-.382l.002-.001a.45.45 0 0 1 .455.008L17.74 9.627l.003.003a.429.429 0 0 1 .208.368Z"
                    })
                })
            })
        })
    })])
}, 789924, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(278466),
        r = e.i(722978),
        s = e.i(749583),
        i = e.i(998569);
    let n = ({
            title: e,
            titleTag: n,
            description: d,
            action: c,
            fullWidth: o
        }) => {
            let [u, m] = (0, t.useState)(!1), f = "relative block border-t border-solid border-gray-200 dark:border-gray-700", x = (0, l.jsxs)("div", {
                className: (0, r.default)("grid gap-4 pt-2 pb-8 md:grid-cols-3", {
                    "md:grid-cols-[2fr_1fr_auto]": o
                }),
                children: [(0, l.jsx)(n || "h2", {
                    className: "loco-text-heading-xs",
                    children: e
                }), (0, l.jsx)("div", {
                    children: (0, l.jsx)("p", {
                        className: "loco-text-body-sm opacity-70",
                        children: d
                    })
                }), c && c?.label && (0, l.jsx)("div", {
                    className: "shrink-0 text-right",
                    children: (0, l.jsx)(s.default, {
                        tag: "span",
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        active: u,
                        children: c.label
                    })
                }), c && !c?.label && (0, l.jsx)("div", {
                    className: "flex shrink-0 justify-end text-right",
                    children: (0, l.jsx)(i.default, {
                        variant: "primary"
                    })
                })]
            });
            return c ? (0, l.jsx)(a.Link, {
                href: c.href,
                target: c.target,
                title: c.label,
                onMouseOver: () => {
                    m(!0)
                },
                onMouseLeave: () => {
                    m(!1)
                },
                className: f,
                children: x
            }) : (0, l.jsx)("div", {
                className: f,
                children: x
            })
        },
        d = ({
            theme: e = "light",
            fullWidth: t = !1,
            features: a = []
        }) => {
            let s = (0, r.default)({
                dark: "dark" === e
            });
            return (0, l.jsx)("section", {
                className: s,
                children: (0, l.jsx)("div", {
                    className: "relative px-4 py-16 lg:pt-6 lg:pb-16 dark:bg-black",
                    children: (0, l.jsx)("div", {
                        className: "mx-auto max-w-[1800px] md:grid md:grid-cols-12 md:gap-2",
                        children: a && (0, l.jsx)("div", {
                            className: (0, r.default)("col-start-1 col-end-13 row-start-3 lg:col-end-13", {
                                "lg:col-start-4": !t
                            }),
                            children: (0, l.jsx)("div", {
                                className: "lg:grid lg:grid-cols-8 lg:gap-2",
                                children: (0, l.jsx)("div", {
                                    className: "lg:col-start-1 lg:col-end-9",
                                    children: a.map((e, a) => (0, l.jsx)(n, {
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
        };
    e.s(["default", 0, ({
        theme: e,
        features: t,
        isHidden: a,
        featuresBlog: r,
        fullWidth: s
    }) => {
        let i;
        i = t?.map(e => ({
            title: e?.title || "",
            description: e?.description || "",
            action: e?.action ? {
                label: e.action.title || "",
                href: e.action.link?.linkReference?.href.current || "",
                target: e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            } : null
        })) || [];
        let n = (e, l) => e?.length > l ? `${e.substring(0,l)}...` : e;
        return i?.length === 0 && (i = r?.map(e => ({
            title: e?.title || "",
            description: n(e?.seo?.teaserText, 250) || n(e?.seo?.description, 250) || "",
            action: e?.pageUrl?.link?.href?.current ? {
                label: "",
                href: e?.pageUrl?.link?.href?.current || "",
                target: e?.pageUrl?.link?.target === "_blank" ? "_blank" : "_self"
            } : null
        })) || []), (0, l.jsx)(l.Fragment, {
            children: !a && (0, l.jsx)(d, {
                theme: "dark" === e ? "dark" : "light",
                features: i,
                fullWidth: s
            })
        })
    }], 789924)
}, 129824, e => {
    "use strict";
    e.s(["DATA_REQUEST", 0, "/data-request", "DEFAULT_PAGES_NO_MT_BANNER", 0, ["/made-with-unity"], "L1_PAGES_NO_MT_BANNER", 0, ["/our-company", "/community", "/industry", "/use-cases", "/releases/unity-6"], "PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products"], "PRODUCTS_PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products/unity-pro", "/products/unity-engine", "/products/compare-plans", "/products/compare-plans/unity-cloud"], "RESOURCES_PAGES_NO_MT_BANNER", 0, ["/resources"], "SOLUTIONS_PAGES_NO_MT_BANNER", 0, ["/download", "/roadmap", "/pages/pro-free-trial", "/games", "/solutions", "/developer-tools", "/how-to", "/learn", "/learn/get-started", "/releases/lts-vs-tech-stream"]])
}, 438270, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(722978),
        r = e.i(526826),
        s = e.i(749583),
        i = e.i(278466),
        n = e.i(407325),
        d = e.i(183062),
        c = e.i(604082),
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
                                    }), (0, l.jsx)(b, {})]
                                }), (0, l.jsx)(r.m.ul, {
                                    className: "overflow-hidden",
                                    initial: "initial",
                                    animate: c ? "open" : "closed",
                                    variants: f,
                                    children: s.map(({
                                        label: e,
                                        href: t,
                                        target: a
                                    }, r) => (0, l.jsx)(v, {
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
        b = () => (0, l.jsxs)(r.m.svg, {
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
        v = e => {
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
                    active: b,
                    index: v,
                    isOpen: j
                } = e;
            return (0, l.jsx)("li", {
                className: "border-t border-[#ffffff14]",
                children: (0, l.jsxs)(r.m.div, {
                    custom: v,
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
                            "bg-blue": b
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
                b = (0, a.default)("alternateNavigation_item relative h-full flex items-center px-2 !text-[0.75rem] font-medium group outline-hidden text-gray-200 transition-colors duration-150", {
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
                    className: b,
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
            [x, b] = (0, t.useState)(!1),
            [v, j] = (0, t.useState)(!1),
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
                n.current && (n.current.offsetTop < window.scrollY ? j(!0) : j(!1)), w.current > window.scrollY && v ? b(!0) : w.current < window.scrollY && b(!1), w.current = window.scrollY, n.current && (n.current.offsetTop > window.innerHeight && !x ? k(!0) : k(!1)), e = null, m.forEach((l, t) => {
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
                isSticky: v,
                indexOfActiveLink: d,
                title: a
            }) : (0, l.jsx)(g, {
                ref: n,
                nav: r,
                action: s,
                isSticky: v,
                indexOfActiveLink: d,
                variant: e
            })
        })
    }], 438270)
}, 814507, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(722978),
        a = e.i(146911);
    e.s(["default", 0, ({
        children: e,
        action: r,
        rounded: s = !1,
        isContained: i = !1,
        className: n = ""
    }) => (0, l.jsx)("div", {
        className: (0, t.clsx)("md:px-auto w-full px-4 transition-colors", {
            "bg-gray-100 dark:bg-gray-900": !i
        }, {
            "rounded-br-lg rounded-bl-lg": s && !i
        }, n),
        children: (0, l.jsxs)("div", {
            className: (0, t.clsx)("container m-auto py-3 text-xs leading-4 font-medium text-gray-900 transition-colors dark:text-gray-100", {
                "text-center": s && !i
            }, {
                "my-6 rounded-lg bg-gray-100 dark:bg-gray-900": i
            }),
            children: [e, (0, l.jsx)(a.default, {
                className: "mx-auto mt-0 ml-2 inline-block [&>div>span]:text-xs",
                href: r.href,
                target: r.target,
                size: "tiny",
                underline: !0,
                "data-link-location": "AnnouncementBanner",
                "data-link-id": "announcement-banner-action",
                children: r.title
            })]
        })
    })], 814507)
}, 131564, e => {
    "use strict";
    var l = e.i(500783),
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
}, 584266, e => {
    "use strict";
    var l = e.i(500783),
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
}, 692627, 569074, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(655105),
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
    var l = e.i(3931);
    e.s(["default", 0, () => {
        let [e, t] = (0, l.useState)("Unknown");
        return (0, l.useEffect)(() => {
            let e = window.navigator.userAgent;
            e.includes("Win") && t("Windows"), e.includes("Mac") && t("Mac"), e.includes("Linux") && t("Linux")
        }, []), e
    }])
}, 457689, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(722990),
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
    var l = e.i(500783),
        t = e.i(3931),
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
    var l = e.i(500783),
        t = e.i(722978),
        a = e.i(3931),
        r = e.i(153348),
        s = e.i(955429),
        i = e.i(655105),
        n = e.i(828083),
        d = e.i(805518);
    let c = (0, n.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
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
                b = (0, t.default)("", {
                    "max-w-lg": "small" === o,
                    "max-w-lg mx-auto": "small-center" === o,
                    "container grid lg:grid-cols-12 lg:gap-2": "offset" === o
                }),
                v = (0, t.default)("relative overflow-hidden rounded-2xl", {
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
                className: b,
                ref: f,
                children: (0, l.jsxs)("div", {
                    className: "offset" === o ? "lg:col-start-4 lg:col-end-13 lg:row-start-1" : "",
                    children: [(0, l.jsxs)("div", {
                        className: v,
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
        consentButtonLabel: b
    }) => {
        let v = (0, a.useRef)(null),
            [j, y] = (0, a.useState)(!1),
            k = null;
        "youtube" === r ? k = (0, n.default)(() => e.A(269100), {
            loadableGenerated: {
                modules: [346003]
            },
            ssr: !1
        }) : "brandfolder" === r && (k = (0, n.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
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
            ref: v,
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
                        consentButtonLabel: b
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
    var x = e.i(722990);
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
        consent: b
    }) => {
        let v = {
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
                "dark bg-black": "dark" === v.theme
            }),
            w = (0, t.default)("container");
        return (0, l.jsx)(l.Fragment, {
            children: !p && (0, l.jsx)("div", {
                className: k,
                children: (0, l.jsx)("div", {
                    className: w,
                    children: "video" === v.type ? (0, l.jsx)(f, {
                        provider: "brandfolder" === a ? "brandfolder" : "youtube",
                        layout: j,
                        video: v.video,
                        image: v.image,
                        buttonLabel: v.buttonLabel,
                        richCaption: v.richCaption,
                        blockKey: g,
                        videoInline: v.videoInline,
                        blockedMessage: b?.blockedMessage,
                        consentButtonLabel: b?.consentButtonLabel || ""
                    }) : (0, l.jsx)(o, {
                        layout: j,
                        image: v.image,
                        forcedAspectRatio: y,
                        richCaption: v.richCaption
                    })
                })
            })
        })
    }], 794189)
}, 25665, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(722990),
        r = e.i(229696),
        s = e.i(805518),
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
        }), b = (0, o.default)("", {
            container: "default" === i || !i,
            "container max-w-[60rem] mx-auto": "center" === i,
            "container grid lg:grid-cols-12 lg:gap-2": "offset" === i
        }), v = (0, o.default)("[&>*]:loco-text-body [&>*]:mb-4", {
            "lg:col-start-4 lg:col-end-10 lg:row-start-1": "offset" === i
        });
        return (0, l.jsx)(l.Fragment, {
            children: !d && g && (0, l.jsx)("section", {
                className: p,
                children: (0, l.jsx)("div", {
                    className: b,
                    children: (0, l.jsx)(s.default, {
                        className: v,
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
    var l = e.i(500783),
        t = e.i(722978),
        a = e.i(655105),
        r = e.i(825610),
        s = e.i(749583),
        i = e.i(596889),
        n = e.i(805518);
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
                            b = (0, t.clsx)("caption-xs mt-1 text-right text-gray-400", {
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
                                        className: b,
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
    var l = e.i(500783),
        t = e.i(3931),
        a = e.i(722990),
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
}, 81636, 673300, 5124, e => {
    "use strict";
    var l = e.i(500783),
        t = e.i(722978),
        a = e.i(153348),
        r = e.i(955429),
        s = e.i(828083),
        i = e.i(655105),
        n = e.i(3931),
        d = e.i(998569),
        c = e.i(278466);
    let o = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
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
    let g = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
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
                b = (0, t.default)("z-10 transition-opacity duration-500 object-cover brightness-50", {
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
                        className: b
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
    var b = e.i(115219);
    let v = ({
        title: e,
        description: t,
        image: a,
        brandfolder: r,
        actions: s,
        isHidden: i
    }) => {
        let {
            mapFormActions: n
        } = (0, b.useFormModal)(s), d = n(s);
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
    };
    e.s(["FullScreenVisualBlockSuspense", 0, e => (0, l.jsx)(n.default.Suspense, {
        fallback: (0, l.jsx)("div", {
            className: "h-screen w-full bg-black"
        }),
        children: (0, l.jsx)(v, {
            ...e
        })
    })], 673300);
    var j = e.i(803695),
        y = e.i(131564);
    let k = (0, s.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        w = ({
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
                b = (0, t.default)("absolute h-full w-full transition-opacity duration-500", {
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
                    className: b
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
                        className: b
                    })]
                }), h && !d && s && e.video.src && (0, l.jsx)(k, {
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
        N = ({
            title: e,
            action: t,
            slides: a,
            blurredBackground: s
        }) => {
            let [i, c] = (0, n.useState)(void 0), [o, u] = (0, n.useState)(void 0), [m, f] = (0, n.useState)(1), [x, g] = (0, n.useState)(0), [p, b] = (0, n.useState)(0), v = (0, n.useRef)(null), k = (0, n.useRef)(null), N = (0, n.useRef)(null), L = (0, r.useReducedMotion)();
            (0, n.useEffect)(() => {
                k.current && N.current && (c(k.current), u(N.current))
            }, [k, N]);
            let R = (0, n.useCallback)((e, l) => {
                    f(l + 1), b(l)
                }, []),
                _ = (0, n.useCallback)(e => {
                    g(e)
                }, []),
                A = (0, n.useCallback)(() => {
                    k.current && N.current && k.current.slickPrev()
                }, []),
                M = (0, n.useCallback)(() => {
                    k.current && N.current && k.current.slickNext()
                }, []),
                S = {
                    dots: !1,
                    infinite: !0,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1
                },
                T = (0, n.useMemo)(() => a.map((e, t) => (0, l.jsx)("div", {
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
                $ = (0, n.useMemo)(() => a.map((e, t) => (0, l.jsx)(w, {
                    slide: e,
                    index: t,
                    isActive: x === t,
                    isVisuallyActive: p === t,
                    preferReducedMotion: L,
                    clickCallback: M,
                    blurredBackground: s
                }, t)), [a, x, p, L, M]);
            return (0, l.jsx)("section", {
                className: "dark bg-black py-12",
                children: (0, l.jsxs)("div", {
                    className: "container md:max-w-none lg:pr-0",
                    children: [e && (0, l.jsx)(y.default, {
                        title: e,
                        actions: t ? [t] : []
                    }), (0, l.jsxs)("div", {
                        className: "relative mt-8 lg:grid lg:grid-cols-12 lg:gap-2",
                        ref: v,
                        children: [(0, l.jsx)("div", {
                            className: "relative col-start-4 col-end-13 row-start-1",
                            children: (0, l.jsx)("div", {
                                className: "overflow-hidden rounded-2xl lg:rounded-tr-none lg:rounded-br-none",
                                children: (0, l.jsx)("div", {
                                    className: "lg:grid lg:grid-cols-9 lg:gap-2",
                                    children: (0, l.jsx)("div", {
                                        className: "lg:col-span-8",
                                        children: (0, l.jsx)(j.default, {
                                            ...S,
                                            asNavFor: i,
                                            useTransform: !1,
                                            ref: N,
                                            className: "carousel-text-visual_visual m-0",
                                            children: $
                                        })
                                    })
                                })
                            })
                        }), (0, l.jsxs)("div", {
                            className: "relative col-start-1 col-end-4 row-start-1 pb-10",
                            children: [a.length > 1 && (0, l.jsx)("span", {
                                className: "loco-text-body-md text-blue mx-2.5 mt-2.5 mb-4 block lg:mt-0",
                                children: `${m<10?"0":""}${m} / ${a.length<10?"0":""}${a.length}`
                            }), (0, l.jsx)(j.default, {
                                className: "carousel-text-visual_text mt-4 lg:mt-0",
                                ...S,
                                draggable: !1,
                                asNavFor: o,
                                beforeChange: R,
                                afterChange: _,
                                fade: !0,
                                ref: k,
                                children: T
                            }), a.length > 1 && (0, l.jsxs)("div", {
                                className: "absolute bottom-0 left-3 flex gap-2",
                                children: [(0, l.jsx)(d.default, {
                                    direction: "left",
                                    onPress: A,
                                    ariaLabel: "Prev",
                                    variant: "primary"
                                }), (0, l.jsx)(d.default, {
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
            children: !n && (0, l.jsx)(N, {
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
    var l = e.i(500783),
        t = e.i(655105),
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
    var l = e.i(500783),
        t = e.i(447093),
        a = e.i(722978),
        r = e.i(3931);
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
    var l = e.i(500783),
        t = e.i(153348),
        a = e.i(955429),
        r = e.i(376936),
        s = e.i(192207),
        i = e.i(526826),
        n = e.i(3931),
        d = e.i(722978),
        c = e.i(828083),
        o = e.i(655105),
        u = e.i(783078),
        m = e.i(749583),
        f = e.i(186114),
        x = e.i(430215),
        h = e.i(195051),
        g = e.i(766930);
    let p = ({
            provider: g,
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
            let _ = (0, x.default)(`(min-width: ${u.default.Medium}px)`),
                A = (0, n.useRef)(null),
                [M, S] = (0, n.useState)(!1),
                T = (0, t.useInView)(A),
                $ = (0, a.useReducedMotion)(),
                C = null;
            "youtube" === g ? C = (0, c.default)(() => e.A(269100), {
                loadableGenerated: {
                    modules: [346003]
                },
                ssr: !1
            }) : "brandfolder" === g && (C = (0, c.default)(() => e.A(410979), {
                loadableGenerated: {
                    modules: [942019]
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
                target: A,
                offset: ["start end", "end end"]
            }), B = (0, s.useTransform)(P, [0, 1], ["60%", "100%"]), O = (0, s.useTransform)(P, [0, 1], [1.75, 1]), E = (0, s.useTransform)(P, [0, 1], ["brightness(50%)", "brightness(100%)"]), I = () => {
                k && "brandfolder" === g && S(!0)
            }, U = () => {
                S(!0)
            }, z = (0, d.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": M && !$ && T && y?.src
            });
            return (0, l.jsxs)("div", {
                ref: A,
                className: "flex flex-col gap-4 border-t border-gray-300 p-6 md:flex-row dark:border-gray-800 dark:bg-black [&_.consent]:md:justify-start [&_.consent>div.text]:md:w-11/12",
                children: [_ && (0, l.jsx)("div", {
                    className: "md:w-[50%]",
                    children: (0, l.jsxs)(i.m.div, {
                        style: {
                            width: B,
                            filter: E
                        },
                        className: "relative aspect-video overflow-hidden rounded-lg",
                        children: [(0, l.jsxs)(i.m.div, {
                            style: {
                                scale: O
                            },
                            className: "relative h-full w-full",
                            children: [y && (0, l.jsx)(l.Fragment, {
                                children: T && !$ && y?.src && C && (0, l.jsx)(C, {
                                    url: y.src,
                                    playing: M,
                                    loop: k && "brandfolder" === g,
                                    muted: k && "brandfolder" === g,
                                    playsinline: k && "brandfolder" === g,
                                    width: "100%",
                                    height: "100%",
                                    className: "[&>video]:object-cover",
                                    onReady: I,
                                    onPlay: U,
                                    controls: !k || "brandfolder" !== g,
                                    config: F
                                })
                            }), j && (0, l.jsxs)("div", {
                                className: z,
                                onClick: U,
                                children: [y?.src && (!k || "brandfolder" !== g) && (0, l.jsx)(f.default, {
                                    handleIsPlaying: U,
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
                            children: T && !$ && y?.src && C && (0, l.jsx)(C, {
                                url: y.src,
                                playing: M,
                                loop: k && "brandfolder" === g,
                                muted: k && "brandfolder" === g,
                                playsinline: k && "brandfolder" === g,
                                width: "100%",
                                height: "100%",
                                className: "[&>video]:object-cover",
                                onReady: I,
                                onPlay: U,
                                controls: !k && "brandfolder" !== g,
                                config: F
                            })
                        }), j && (0, l.jsxs)("div", {
                            className: z,
                            onClick: U,
                            children: [y?.src && (!k || "brandfolder" !== g) && (0, l.jsx)(f.default, {
                                handleIsPlaying: U,
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
                            children: b
                        }), (0, l.jsx)("div", {
                            className: "mt-8",
                            children: (0, l.jsx)(m.default, {
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
        v = e => {
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
        let s = t?.map(v);
        return (0, l.jsx)(l.Fragment, {
            children: !a && (0, l.jsx)(b, {
                theme: "dark" === e ? "dark" : "light",
                features: s,
                featuresHeading: "h2" === r || "h4" === r ? r : "h3"
            })
        })
    }], 277965)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1624a5d7-a9c2-5258-9bba-1b455b2d6411")
    } catch (e) {}
}();
//# debugId=1624a5d7-a9c2-5258-9bba-1b455b2d6411