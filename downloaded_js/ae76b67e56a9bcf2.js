(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 596889, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(722978);
    let a = ({
        children: e,
        className: a = "",
        variant: r = "default"
    }) => {
        let i = (0, l.clsx)({
            default: "bg-white dark:bg-gray-900 rounded-xl",
            padded: "p-6 bg-white dark:bg-gray-900 rounded-xl",
            transparent: ""
        } [r], a);
        return (0, t.jsx)("div", {
            className: i,
            children: e
        })
    };
    a.Content = ({
        children: e,
        className: l = "w-full"
    }) => (0, t.jsx)("div", {
        className: l,
        children: e
    }), a.Image = ({
        children: e,
        withinContainer: a
    }) => {
        let r = (0, l.clsx)("card-img relative w-full", {
            "[&>img]:!static !h-auto": a
        });
        return (0, t.jsx)("div", {
            className: r,
            children: e
        })
    }, e.s(["default", 0, a], 596889)
}, 713870, (e, t, l) => {
    t.exports = function(e) {
        return e
    }
}, 204653, (e, t, l) => {
    t.exports = function(e, t, l) {
        switch (l.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, l[0]);
            case 2:
                return e.call(t, l[0], l[1]);
            case 3:
                return e.call(t, l[0], l[1], l[2])
        }
        return e.apply(t, l)
    }
}, 587094, (e, t, l) => {
    var a = Date.now;
    t.exports = function(e) {
        var t = 0,
            l = 0;
        return function() {
            var r = a(),
                i = 16 - (r - l);
            if (l = r, i > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
}, 160220, (e, t, l) => {
    t.exports = function(e) {
        return function() {
            return e
        }
    }
}, 347474, (e, t, l) => {
    var a = e.r(622280);
    t.exports = function() {
        try {
            var e = a(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }()
}, 727001, (e, t, l) => {
    var a = e.r(160220),
        r = e.r(347474),
        i = e.r(713870);
    t.exports = r ? function(e, t) {
        return r(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: a(t),
            writable: !0
        })
    } : i
}, 989463, (e, t, l) => {
    var a = e.r(727001);
    t.exports = e.r(587094)(a)
}, 729582, (e, t, l) => {
    var a = /^(?:0|[1-9]\d*)$/;
    t.exports = function(e, t) {
        var l = typeof e;
        return !!(t = null == t ? 0x1fffffffffffff : t) && ("number" == l || "symbol" != l && a.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, 376255, (e, t, l) => {
    var a = e.r(204653),
        r = Math.max;
    t.exports = function(e, t, l) {
        return t = r(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var i = arguments, s = -1, n = r(i.length - t, 0), d = Array(n); ++s < n;) d[s] = i[t + s];
                s = -1;
                for (var c = Array(t + 1); ++s < t;) c[s] = i[s];
                return c[t] = l(d), a(e, this, c)
            }
    }
}, 893171, 447533, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(672721),
        a = e.i(799547),
        r = e.i(722978),
        i = e.i(481392),
        s = e.i(180573),
        n = e.i(783078);
    let d = (0, s.default)(() => e.A(824429), {
            loadableGenerated: {
                modules: [467761]
            },
            ssr: !1
        }),
        c = ({
            containerRef: e,
            lqip: a
        }) => {
            let r = (0, l.useRef)(null),
                i = (0, l.useRef)(null),
                s = "pointer-events-none absolute inset-0 hidden h-full w-full opacity-80 blur-2xl lg:block [will-change:filter]";
            return ((0, l.useEffect)(() => {
                let t, l = r.current,
                    a = e.current;
                if (!l || !a) return;
                let s = l.getContext("2d");
                if (!s) return;
                let n = a.querySelector("video"),
                    d = () => {
                        n && a.contains(n) || (n = a.querySelector("video"));
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
            }, [e, a]), a) ? (0, t.jsx)("div", {
                className: s,
                style: {
                    backgroundImage: `url(${a})`,
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
        className: l = "",
        size: i = "default",
        variant: s = "default",
        image: n,
        keyFigures: d
    }) => {
        let c = (0, r.clsx)("relative grid grid-cols-12", l, {
                dark: !!n
            }),
            u = (0, r.clsx)("relative col-span-12 mx-auto lg:container", {
                "lg:py-32 lg:pb-10": "gdc2026" !== s && "default" === i,
                "lg:py-16 lg:pb-5": "gdc2026" !== s && "slim" === i,
                "py-0 lg:py-20 max-w-[82rem]": "gdc2026" === s
            }),
            m = (0, r.clsx)({
                "flex flex-col lg:flex-row-reverse": "gdc2026" !== s,
                "grid grid-cols-12 gap-6": "gdc2026" === s
            });
        return (0, t.jsxs)("section", {
            className: c,
            children: [n && (0, t.jsx)(a.default, {
                src: n.src,
                alt: n.alt,
                fill: !0,
                className: "object-cover",
                quality: 100,
                sizes: "100vw"
            }), (0, t.jsxs)("div", {
                className: u,
                children: [(0, t.jsx)("div", {
                    className: m,
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
    m.Actions = ({
        children: e,
        variant: l = "default"
    }) => (0, t.jsx)("div", {
        className: "gdc2026" === l ? "flex flex-col items-center lg:items-start gap-3 pb-3.5 lg:pb-16 lg:flex-row" : "flex flex-col items-start gap-3 pb-3.5 xl:flex-row",
        children: e
    }), m.AlternateActions = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
        children: e
    }), m.Body = ({
        children: e,
        variant: l = "default"
    }) => (0, t.jsx)("div", {
        className: "gdc2026" === l ? "loco-text-body-lg" : "loco-text-body-lg mb-6",
        children: e
    }), m.Content = ({
        children: e,
        variant: l = "default"
    }) => {
        let a = (0, r.default)({
            "flex-1 pt-10 pr-8": "gdc2026" !== l,
            "w-full col-span-12 lg:col-span-4 px-4 pb-6 gap-6 items-center lg:gap-9 lg:items-start lg:px-0 lg:pb-0 lg:pt-8 flex flex-col order-2 lg:order-1 text-center lg:text-left": "gdc2026" === l
        });
        return (0, t.jsx)("div", {
            className: a,
            style: "gdc2026" === l ? {
                gap: "2.3125rem"
            } : void 0,
            children: e
        })
    }, m.Overline = ({
        children: e,
        className: l
    }) => {
        let a = (0, r.default)("loco-caption-lg-semibold mb-3 text-gray-500 dark:text-gray-300", l);
        return (0, t.jsx)("div", {
            className: a,
            children: e
        })
    }, m.Title = ({
        children: e,
        variant: l = "default"
    }) => {
        let a = (0, r.default)("!font-nohemi text-black dark:text-white", {
            "loco-text-heading-md mb-6": "gdc2026" !== l,
            "loco-text-heading-4xl break-normal lg:[word-spacing:100vw]": "gdc2026" === l
        });
        return (0, t.jsx)("h1", {
            className: a,
            children: e
        })
    }, m.Pricing = ({
        data: e = [],
        onSelectionChange: a,
        selectedKey: r
    }) => {
        let s = (0, l.useMemo)(() => e.find(e => e.key === r), [e, r]);
        return (0, l.useEffect)(() => {
            let t = !r || !s,
                l = e?.[0]?.key;
            t && a && l && a(l)
        }, [e, r, a, s]), (0, t.jsx)(t.Fragment, {
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
                        selectedKey: r,
                        onSelectionChange: a,
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
    }, m.Media = ({
        media: e,
        className: i = "",
        variant: s = "default"
    }) => {
        let {
            image: o,
            video: u
        } = e || {}, [m, f] = (0, l.useState)(!1), x = (0, l.useRef)(null), h = "gdc2026" === s ? "object-cover" : "object-contain", g = (0, r.default)("relative flex grow", {
            "m-4 h-full": "gdc2026" !== s,
            "w-full h-[22rem] lg:h-full lg:w-auto lg:m-4": "gdc2026" === s
        }, i), p = (0, r.default)("relative h-full w-full overflow-hidden", {
            "rounded-3xl": "gdc2026" !== s,
            "lg:rounded-3xl": "gdc2026" === s
        }), b = (0, r.default)("flex items-center", {
            "flex-1 justify-center lg:justify-start": "gdc2026" !== s,
            "w-full col-span-12 lg:col-span-8 justify-center order-1 lg:order-2": "gdc2026" === s
        }), v = (e, l) => o?.asset.url ? (0, t.jsx)(a.default, {
            src: o.asset.url,
            alt: e,
            fill: !0,
            className: (0, r.default)("absolute h-full", h, l),
            sizes: `(min-width: ${n.default.Large}px) 33vw, (min-width: ${n.default.Medium}px) 50vw, 100vw`,
            placeholder: o.asset.metadata?.lqip ? "blur" : "empty",
            blurDataURL: o.asset.metadata?.lqip || void 0
        }) : null;
        return (0, t.jsx)("div", {
            className: b,
            children: (o || u) && (0, t.jsxs)("div", {
                className: g,
                children: [(0, t.jsx)(c, {
                    containerRef: x,
                    lqip: m ? void 0 : o?.asset?.metadata?.lqip
                }), (0, t.jsxs)("div", {
                    ref: x,
                    className: p,
                    children: [o?.asset.url && !u && v("Hero image", void 0), u && o?.asset.url && !m && v("Video thumbnail", "z-10"), u && (0, t.jsx)("div", {
                        className: "h-full w-full self-center",
                        children: (0, t.jsx)(d, {
                            url: u?.muxHLSURL || "",
                            playing: !0,
                            loop: !0,
                            muted: !0,
                            playsinline: !0,
                            width: "100%",
                            height: "100%",
                            className: (0, r.default)("absolute top-0 h-full", {
                                "[&>video]:object-cover": "gdc2026" === s,
                                "[&>video]:object-contain": "gdc2026" !== s
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
        title: l,
        url: a,
        autoplay: i,
        blockedMessage: s,
        consentButtonLabel: n
    }) => {
        let d = (0, r.default)("relative flex grow md:h-auto md:content-center md:mx-8 md:rounded-3xl md:overflow-hidden", e);
        return a && l ? (0, t.jsx)("div", {
            className: "flex flex-1",
            children: (0, t.jsx)("div", {
                className: d,
                children: (0, t.jsx)(u.default, {
                    autoplay: i,
                    title: l,
                    url: a,
                    blockedMessage: s,
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
    e.s(["default", 0, ({
        eyebrow: e,
        title: a,
        description: r,
        actions: i = [],
        media: s,
        backgroundImage: n,
        size: d,
        variant: c,
        keyFigures: o,
        theme: u,
        youtubeVideo: p,
        isHidden: b,
        showAlterativeOSLinks: v,
        alternativeOSLinkSettings: j
    }) => {
        let k, y = -1 !== (k = window.navigator.userAgent).indexOf("Win") ? "Windows" : -1 !== k.indexOf("Mac") ? "Mac" : -1 !== k.indexOf("Linux") ? "Linux" : "Unknown",
            w = (0, l.useRef)(null),
            {
                mapFormActions: N
            } = (0, h.useFormModal)(i),
            L = (0, l.useMemo)(() => N(i) || [], [i, N]),
            R = n?.asset?.url ? {
                src: n.asset.url,
                alt: "Hero background image"
            } : void 0,
            _ = (0, l.useMemo)(() => (o?.data ?? []).map(e => e?.value?.text ? {
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
        (0, l.useEffect)(() => {
            if (!w.current) {
                let e = document.createElement("a");
                e.style.display = "none", document.body.appendChild(e), w.current = e
            }
            return () => {
                w.current && document.body.contains(w.current) && document.body.removeChild(w.current)
            }
        }, []);
        let S = c ?? void 0,
            T = (e, a, r) => {
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
            M = e => {
                let t = e.link?.linkReference?.href?.current,
                    l = e.secondaryLink?.linkReference?.href?.current,
                    a = e.link?.linkReference?.target || "_self",
                    r = x.locales.find(e => window.location.pathname === `/${e}` || window.location.pathname.startsWith(`/${e}/`)) ?? "en";
                t && (t.endsWith(".exe") || t.endsWith(".dmg") ? w.current && (w.current.href = t, w.current.download = "", w.current.target = a, w.current.click()) : "_blank" === a ? window.open(t, "_blank") : window.location.href = t), l && setTimeout(() => {
                    let e = l.replace(/^\//, "");
                    window.location.href = `/${r}/${e}`
                }, 1e3), e?.callback && e.callback()
            },
            C = i?.filter(e => !e.operatingSystem || e.operatingSystem === y) || [],
            $ = i?.filter(e => !!e.operatingSystem && "Unknown" !== e.operatingSystem) || [];
        return (0, t.jsx)(t.Fragment, {
            children: !b && (0, t.jsx)("section", {
                className: "dark" === u ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "dark:bg-black",
                    children: (0, t.jsxs)(m, {
                        image: R,
                        size: "slim" === d ? "slim" : "default" === d ? "default" : void 0,
                        variant: S,
                        keyFigures: _,
                        children: [s && (0, t.jsx)(m.Media, {
                            media: s,
                            variant: S
                        }), !s && p && (0, t.jsx)(m.YouTubeVideo, {
                            autoplay: !0,
                            url: p?.url,
                            title: p?.title,
                            blockedMessage: p?.consent?.blockedMessage,
                            consentButtonLabel: p?.consent?.consentButtonLabel || ""
                        }), (0, t.jsxs)(m.Content, {
                            variant: S,
                            children: [(0, t.jsx)(m.Overline, {
                                children: e
                            }), (0, t.jsx)(m.Title, {
                                variant: S,
                                children: a
                            }), (0, t.jsx)(m.Body, {
                                variant: S,
                                children: r
                            }), (0, t.jsx)("div", {
                                className: "xl:hidden",
                                children: (0, t.jsx)(m.Actions, {
                                    variant: S,
                                    children: C.map((e, a) => {
                                        let r = L[a],
                                            i = e.link?.linkReference?.href?.current || "";
                                        e.link?.linkReference?.target;
                                        let s = 0 === a,
                                            n = i.endsWith(".exe") || i.endsWith(".dmg"),
                                            d = !!e.secondaryLink?.linkReference?.href?.current,
                                            c = i && !n && !d;
                                        return r?.form ? T(e, r, a) : (0, t.jsxs)(l.default.Fragment, {
                                            children: [s && (0, t.jsx)(f.default, {
                                                size: "medium",
                                                variant: e.buttonType,
                                                rounded: !0,
                                                ...c && {
                                                    href: i
                                                },
                                                onPress: () => M(e),
                                                hasArrow: !0,
                                                "data-link-location": "HeroBlock",
                                                "data-link-id": `HeroBlock-action-${a}`,
                                                children: e.title
                                            }), s && v && (0, t.jsx)(g, {
                                                linkText: j?.linkText ?? "Download for",
                                                separatorText: j?.separatorText ?? "or",
                                                actionLinks: $.map(e => ({
                                                    os: e.operatingSystem,
                                                    href: e.link?.linkReference?.href?.current || "#"
                                                }))
                                            }), !s && (0, t.jsx)("div", {
                                                className: "ml-1 flex flex-col gap-4",
                                                children: (0, t.jsx)(f.default, {
                                                    size: "medium",
                                                    variant: e.buttonType,
                                                    rounded: !0,
                                                    ...c && {
                                                        href: i
                                                    },
                                                    onPress: () => M(e),
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
                                children: [(0, t.jsx)(m.Actions, {
                                    variant: S,
                                    children: C.map((e, l) => {
                                        let a = L[l],
                                            r = e.link?.linkReference?.href?.current || "";
                                        e.link?.linkReference?.target;
                                        let i = r.endsWith(".exe") || r.endsWith(".dmg"),
                                            s = !!e.secondaryLink?.linkReference?.href?.current,
                                            n = r && !i && !s;
                                        return a?.form ? T(e, a, l) : (0, t.jsx)(f.default, {
                                            size: "medium",
                                            variant: e.buttonType,
                                            rounded: !0,
                                            ...n && {
                                                href: r
                                            },
                                            onPress: () => M(e),
                                            hasArrow: !0,
                                            "data-link-location": "HeroBlock",
                                            "data-link-id": `HeroBlock-action-${l}`,
                                            children: e.title
                                        }, e.link?.linkReference?.title || l)
                                    })
                                }), v && C[0] && (0, t.jsx)(g, {
                                    linkText: j?.linkText ?? "Download for",
                                    separatorText: j?.separatorText ?? "or",
                                    actionLinks: $.map(e => ({
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
    var t = e.i(297124),
        l = e.i(672721),
        a = e.i(654816),
        r = e.i(799547),
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
            className: m,
            variant: f = "default"
        }) => {
            let x = (0, i.default)("container relative grid col-span-12 py-8 lg:py-12 px-4 lg:px-16 rounded-xl overflow-hidden", {
                    dark: !!u
                }, m),
                h = "products" === f;
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
                                blur: !h
                            })
                        }), (0, t.jsxs)("div", {
                            className: x,
                            children: [(0, t.jsx)(s, {
                                overline: e,
                                variant: f
                            }), (0, t.jsx)(n, {
                                title: l
                            }), (0, t.jsx)(d, {
                                body: a,
                                variant: f
                            }), (0, t.jsx)(o, {
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
        body: i,
        actions: s,
        image: n,
        theme: d,
        isHidden: c,
        variant: o,
        productCatalogItem: g,
        productCategoryFilter: p
    }) => {
        let [b] = (0, l.useContext)(x.FiltersContext), {
            state: v
        } = (0, f.default)(), j = {
            ...v,
            product: g?.productKey,
            variant: null
        }, {
            renderModal: k,
            extraFields: y
        } = (0, h.useFormModal)(s), w = (0, l.useMemo)(() => s ? s.map(e => (e => {
            if (!e) return null;
            let t = !!e.form,
                l = e.link?.linkReference?.href?.current,
                a = t ? "" : l ? (0, m.default)(l, j, e.extendLink) : "";
            if (t) {
                let t = e.form || {},
                    l = {
                        ...t,
                        title: t.title || "",
                        description: t.description || "",
                        fields: t.fields || [],
                        sfdcIntegration: t.sfdcIntegration || e.webinarFormParametersContent?.sfdcIntegration || {},
                        extraFields: y
                    };
                return {
                    label: e.title || "",
                    href: "",
                    target: e.link?.linkReference?.target || "_self",
                    renderModal: () => k({
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
        })(e)).filter(e => !!e) : [], [s, j, k, y]), {
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
}, 789924, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(672721),
        a = e.i(278466),
        r = e.i(722978),
        i = e.i(749583),
        s = e.i(998569);
    let n = ({
            title: e,
            titleTag: n,
            description: d,
            action: c,
            fullWidth: o
        }) => {
            let [u, m] = (0, l.useState)(!1), f = "relative block border-t border-solid border-gray-200 dark:border-gray-700", x = (0, t.jsxs)("div", {
                className: (0, r.default)("grid gap-4 pt-2 pb-8 md:grid-cols-3", {
                    "md:grid-cols-[2fr_1fr_auto]": o
                }),
                children: [(0, t.jsx)(n || "h2", {
                    className: "loco-text-heading-xs",
                    children: e
                }), (0, t.jsx)("div", {
                    children: (0, t.jsx)("p", {
                        className: "loco-text-body-sm opacity-70",
                        children: d
                    })
                }), c && c?.label && (0, t.jsx)("div", {
                    className: "shrink-0 text-right",
                    children: (0, t.jsx)(i.default, {
                        tag: "span",
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        active: u,
                        children: c.label
                    })
                }), c && !c?.label && (0, t.jsx)("div", {
                    className: "flex shrink-0 justify-end text-right",
                    children: (0, t.jsx)(s.default, {
                        variant: "primary"
                    })
                })]
            });
            return c ? (0, t.jsx)(a.Link, {
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
            }) : (0, t.jsx)("div", {
                className: f,
                children: x
            })
        },
        d = ({
            theme: e = "light",
            fullWidth: l = !1,
            features: a = []
        }) => {
            let i = (0, r.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: i,
                children: (0, t.jsx)("div", {
                    className: "relative px-4 py-16 lg:pt-6 lg:pb-16 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "mx-auto max-w-[1800px] md:grid md:grid-cols-12 md:gap-2",
                        children: a && (0, t.jsx)("div", {
                            className: (0, r.default)("col-start-1 col-end-13 row-start-3 lg:col-end-13", {
                                "lg:col-start-4": !l
                            }),
                            children: (0, t.jsx)("div", {
                                className: "lg:grid lg:grid-cols-8 lg:gap-2",
                                children: (0, t.jsx)("div", {
                                    className: "lg:col-start-1 lg:col-end-9",
                                    children: a.map((e, a) => (0, t.jsx)(n, {
                                        fullWidth: l,
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
        features: l,
        isHidden: a,
        featuresBlog: r,
        fullWidth: i
    }) => {
        let s;
        s = l?.map(e => ({
            title: e?.title || "",
            description: e?.description || "",
            action: e?.action ? {
                label: e.action.title || "",
                href: e.action.link?.linkReference?.href.current || "",
                target: e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            } : null
        })) || [];
        let n = (e, t) => e?.length > t ? `${e.substring(0,t)}...` : e;
        return s?.length === 0 && (s = r?.map(e => ({
            title: e?.title || "",
            description: n(e?.seo?.teaserText, 250) || n(e?.seo?.description, 250) || "",
            action: e?.pageUrl?.link?.href?.current ? {
                label: "",
                href: e?.pageUrl?.link?.href?.current || "",
                target: e?.pageUrl?.link?.target === "_blank" ? "_blank" : "_self"
            } : null
        })) || []), (0, t.jsx)(t.Fragment, {
            children: !a && (0, t.jsx)(d, {
                theme: "dark" === e ? "dark" : "light",
                features: s,
                fullWidth: i
            })
        })
    }], 789924)
}, 649042, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(672721),
        a = e.i(654816),
        r = e.i(447452),
        i = e.i(775041),
        s = e.i(779712),
        n = e.i(869324);
    e.s(["default", 0, ({
        actions: e,
        backgroundImage: d,
        description: c,
        eyebrow: o,
        image: u,
        mediaAspectRatio: m,
        mediaPosition: f,
        size: x,
        variant: h,
        title: g,
        theme: p,
        youtubeVideo: b,
        brandfolderVideo: v,
        buttonLabel: j,
        videoInline: k,
        blockKey: y,
        isHidden: w,
        consent: N,
        featureList: L,
        productCategoryFilter: R
    }) => {
        let [_] = (0, l.useContext)(i.FiltersContext);
        if (_.categories && _.categories.length > 0 && 1 === _.categories.findIndex(({
                _id: e
            }) => e === _.selectedCategory) && null != _.selectedSubcategory) return null;
        let {
            subcategories: S,
            productCatalogItems: T
        } = _.categories.find(({
            _id: e
        }) => e === _.selectedCategory) || {}, M = null != _.selectedSubcategory ? (S || []).find(({
            _id: e
        }) => e === _.selectedSubcategory) : null, C = !R || R.categories?.find(e => e._id === _.selectedCategory) != null && (null == M || !R.subcategories || R.subcategories.some(({
            _id: e
        }) => e === _.selectedSubcategory)), $ = e?.map(({
            title: e,
            link: t
        }) => {
            let l = t?.linkReference?.target === "_blank" ? "_blank" : "_self";
            return {
                label: e,
                href: t?.linkReference?.href.current || "/",
                target: l
            }
        }), A = L?.map((e, t) => {
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
                    if (!t && L?.[e]) {
                        let t = L[e];
                        (0, n.default)({
                            event: "userEvent",
                            event_name: "navigation_click",
                            properties: {
                                navigation_click_text: t.title || "",
                                link_type: "feature list item",
                                form_name: t.title || "",
                                form_id: `list-item-${e}`,
                                block_title: g
                            }
                        })
                    }
                })(t, e)
            }
        });
        return (0, t.jsx)(t.Fragment, {
            children: !w && C && (0, t.jsx)("section", {
                className: "dark" === p ? "dark" : "",
                children: (0, t.jsx)(r.default, {
                    actions: $,
                    aspectRatio: "16:9" === m ? "16:9" : "1:1" === m ? "1:1" : void 0,
                    backgroundImage: d,
                    description: (0, t.jsx)(a.PortableText, {
                        value: c
                    }),
                    eyebrow: o,
                    image: {
                        src: (0, s.urlForImage)(u?.file?.asset?.url || "")?.auto("format")?.url() || "",
                        placeholder: u?.file?.asset.metadata?.lqip || "",
                        alt: u?.alt || "",
                        caption: u?.caption || ""
                    },
                    mediaPosition: "right" === f ? "right" : "left" === f ? "left" : void 0,
                    size: "large" === x ? "large" : "default" === x ? "default" : void 0,
                    variant: "gdc2026" === h ? "gdc2026" : "default" === h ? "default" : void 0,
                    title: g,
                    youtubeVideo: b,
                    brandfolderVideo: {
                        src: v?.muxHLSURL || ""
                    },
                    videoInline: k,
                    buttonLabel: j,
                    blockKey: y,
                    blockedMessage: N?.blockedMessage,
                    consentButtonLabel: N?.consentButtonLabel || "",
                    featureList: A
                })
            })
        })
    }], 649042)
}, 164163, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(722978),
        a = e.i(799547),
        r = e.i(825610),
        i = e.i(749583),
        s = e.i(596889),
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
            x = (0, l.clsx)("gap-4 md:gap-8", {
                "grid grid-cols-12": !u,
                "flex overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-100": u
            });
        return (0, t.jsx)("section", {
            className: "bg-white dark:bg-black",
            children: (0, t.jsxs)("div", {
                className: "container py-16",
                children: [e && (0, t.jsx)("h2", {
                    className: "loco-text-heading-md mb-9 text-center",
                    children: e
                }), (0, t.jsx)("div", {
                    className: x,
                    children: d?.map((d, m) => {
                        let x = (0, l.clsx)("flex flex-wrap flex-row", !u && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[c], u && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[c]),
                            h = (0, l.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === o || "transparent" === o
                            }),
                            g = (0, l.clsx)({
                                "p-6": "default" === o || "transparent" === o,
                                "py-6": "padded" === o
                            }),
                            p = (0, l.clsx)("object-cover", {
                                "rounded-t-xl": "default" === o || "transparent" === o,
                                rounded: "padded" === o
                            }),
                            b = (0, l.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== o
                            });
                        return (0, t.jsxs)(s.default, {
                            className: x,
                            variant: o,
                            children: [(0, t.jsxs)(s.default.Content, {
                                children: [d.image && d.image.src && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(s.default.Image, {
                                        withinContainer: d.image.withinContainer,
                                        children: (0, t.jsx)(a.default, {
                                            src: d.image.src ?? "",
                                            alt: d.image.alt ?? "",
                                            fill: !0,
                                            className: p,
                                            quality: 100
                                        })
                                    }), d.image.description && (0, t.jsx)(n.default, {
                                        className: b,
                                        children: d.image.description
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: g,
                                    children: [d.icon && d.icon.src && (0, t.jsx)("div", {
                                        className: "relative mb-5 dark:invert",
                                        children: (0, t.jsx)(a.default, {
                                            src: d.icon.src ?? "",
                                            alt: d.icon.alt ?? "",
                                            quality: 100,
                                            width: 23,
                                            height: 23
                                        })
                                    }), (0, t.jsx)(f, {
                                        className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                        children: d.title
                                    }), d.description && (0, t.jsx)(n.default, {
                                        className: "loco-text-body mb-4",
                                        children: d.description
                                    }), d.richText && (0, t.jsx)(n.default, {
                                        className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                        children: d.richText
                                    })]
                                })]
                            }), d.actions && (0, t.jsx)("div", {
                                className: h,
                                children: d.actions.map((e, l) => (0, t.jsx)(i.default, {
                                    href: e.href,
                                    target: e.target ?? "_self",
                                    rounded: !0,
                                    hasArrow: !0,
                                    outlined: 0 === l,
                                    className: 0 === l ? "mr-3" : "mt-4",
                                    variant: 0 === l ? "primary" : "secondary",
                                    "data-link-location": r.trackingLocation.cardsAction,
                                    "data-link-id": `${r.trackingLocation.cardsAction}-${l}`,
                                    children: e.title
                                }, `${e.title}-${l}`))
                            })]
                        }, `card-${m}-${e}`)
                    })
                })]
            })
        })
    }], 164163)
}, 449758, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(672721),
        a = e.i(654816),
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
        isHidden: m
    }) => {
        let {
            appendCommerceData: f,
            appendCommerceDataToPortableText: x,
            currency: h
        } = (0, i.default)(), g = (0, l.useMemo)(() => u?.map(e => ({
            type: e._type,
            title: f(e.title, e.productCatalogItem) || "",
            description: f(e.description, e.productCatalogItem) || "",
            richText: (0, t.jsx)(a.PortableText, {
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
        })), [u, f, x]);
        return (0, t.jsx)(t.Fragment, {
            children: !m && (0, t.jsx)("section", {
                className: `${"dark"===c?"dark":""} overflow-hidden`,
                children: (0, t.jsx)(r.default, {
                    layout: "two-cards" === s || "three-cards" === s || "four-cards" === s ? s : "four-cards",
                    cardVariant: "default" === n || "padded" === n || "transparent" === n ? n : "default",
                    scroll: d,
                    title: e || "",
                    cardsHeading: ["h2", "h3", "h4", "div"].includes(o) ? o : void 0,
                    cards: g
                })
            })
        })
    }], 449758)
}, 123849, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(722978),
        a = e.i(805518);
    let r = ({
            title: e,
            content: r,
            listStyle: i = "check"
        }) => {
            let s = (0, l.default)("loco-text-body [&_h4]:mb-0", {
                "checkmark-list-green": "check" === i,
                "plus-list": "plus" === i
            });
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: "loco-caption-sm-semibold mb-2 text-gray-700 dark:text-gray-300",
                    children: e
                }), (0, t.jsx)(a.default, {
                    className: s,
                    children: r
                })]
            })
        },
        i = ({
            title: e = "",
            descriptions: l = [],
            treshold: a,
            pricing: i
        }) => (0, t.jsxs)("div", {
            className: "flex h-full flex-col justify-between rounded-lg bg-gray-100 p-6 lg:w-96 dark:bg-gray-800",
            children: [(0, t.jsxs)("div", {
                className: "grow pb-8",
                children: [(0, t.jsx)("div", {
                    className: "loco-text-heading-sm mb-8 text-black dark:text-white",
                    children: e
                }), (0, t.jsx)("div", {
                    children: l?.map((l, a) => (0, t.jsx)("div", {
                        className: "flex flex-col pb-8",
                        children: (0, t.jsx)(r, {
                            title: l.title,
                            content: l.content,
                            listStyle: l.listStyle
                        })
                    }, `card-plan-${e}-${a}`))
                }), (0, t.jsx)(r, {
                    title: a?.title || "",
                    content: a?.content || ""
                })]
            }), (0, t.jsx)("div", {
                className: "min-h-[6rem]",
                children: (0, t.jsx)(r, {
                    title: i?.title || "",
                    content: i?.content || ""
                })
            })]
        }),
        s = ({
            theme: e = "light",
            cards: a = []
        }) => {
            let r = (0, l.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: r,
                children: (0, t.jsx)("div", {
                    className: "bg-white pt-8 pb-20 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container flex flex-col flex-wrap gap-2 lg:flex-row lg:justify-center",
                        children: a.map((e, l) => (0, t.jsx)("div", {
                            children: (0, t.jsx)(i, {
                                ...e
                            })
                        }, `card-plan-${e.title}-${l}`))
                    })
                })
            })
        };
    var n = e.i(654816);
    e.s(["default", 0, ({
        isHidden: e,
        theme: l,
        cards: a
    }) => e ? null : (0, t.jsx)(s, {
        theme: "dark" === l ? "dark" : "light",
        cards: a.map(e => ({
            title: e.title ?? "",
            descriptions: e.descriptions?.map(e => {
                let l = e?.listStyle === "plus" ? "plus" : "check";
                return {
                    title: e?.title ?? "",
                    content: (0, t.jsx)(n.PortableText, {
                        value: e?.content
                    }),
                    listStyle: l
                }
            }) || [],
            treshold: {
                title: e?.treshold?.title ?? "",
                content: (0, t.jsx)(n.PortableText, {
                    value: e.treshold?.content
                })
            },
            pricing: {
                title: e.pricing?.title ?? "",
                content: (0, t.jsx)(n.PortableText, {
                    value: e.pricing?.content
                })
            }
        }))
    })], 123849)
}, 129824, e => {
    "use strict";
    e.s(["CAMPAIGN_PAGES_NO_MT_BANNER", 0, ["/campaign/spatial"], "DATA_REQUEST", 0, "/data-request", "DEFAULT_PAGES_NO_MT_BANNER", 0, ["/made-with-unity"], "L1_PAGES_NO_MT_BANNER", 0, ["/our-company", "/community", "/industry", "/use-cases", "/releases/unity-6"], "PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products"], "PRODUCTS_PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products/unity-pro", "/products/unity-engine", "/products/compare-plans", "/products/compare-plans/unity-cloud"], "RESOURCES_PAGES_NO_MT_BANNER", 0, ["/resources"], "SOLUTIONS_PAGES_NO_MT_BANNER", 0, ["/download", "/roadmap", "/pages/pro-free-trial", "/games", "/solutions", "/developer-tools", "/how-to", "/learn", "/learn/get-started", "/releases/lts-vs-tech-stream"]])
}, 584266, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(829150),
        a = e.i(433519);
    let r = e.i(438270).default;
    e.s(["default", 0, ({
        title: e,
        navigation: i,
        action: s,
        theme: n,
        isHidden: d
    }) => {
        let {
            state: c
        } = (0, a.default)();
        return (0, t.jsx)(t.Fragment, {
            children: !d && (0, t.jsx)(r, {
                title: e ?? "",
                action: (e => {
                    if (!e?.link) return null;
                    let t = e?.link.linkReference?.href.current;
                    return {
                        label: e?.title ?? "",
                        href: t ? (0, l.default)(t, c, e?.extendLink) : "",
                        target: e?.link.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })(s),
                nav: i.map(e => ({
                    label: e?.title ?? "",
                    href: e?.link?.linkReference?.href.current ?? "",
                    target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                }))
            })
        })
    }], 584266)
}, 131564, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(749583),
        a = e.i(722978);
    e.s(["default", 0, ({
        theme: e = "light",
        actions: r,
        description: i,
        title: s,
        padding: n = !0,
        variant: d = "center",
        richText: c
    }) => {
        let o = (0, a.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)("div", {
            className: o,
            children: (0, t.jsx)("div", {
                className: "dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: `container flex flex-col ${"center"===d&&"items-center text-center"} ${n&&"pt-14 pb-12 md:pt-24"}`,
                    children: [(0, t.jsx)("div", {
                        className: "max-w-3xl",
                        children: s && (0, t.jsx)("h2", {
                            className: "loco-text-heading-md !font-nohemi",
                            children: s
                        })
                    }), (i || c) && (0, t.jsxs)("div", {
                        className: (0, a.default)("loco-text-body-lg [&_a]:text-blue mt-6 text-gray-500", "center" === d || "left" === d ? "max-w-5xl" : "max-w-3xl"),
                        children: [i, c]
                    }), r && (0, t.jsx)("div", {
                        className: "mt-8 flex justify-center gap-4",
                        children: r.map((e, a) => {
                            let r = `title-description-block-action-${e.title}-${a}`;
                            return 0 === a ? (0, t.jsx)(l.default, {
                                href: e.href,
                                target: e.target,
                                outlined: !0,
                                rounded: !0,
                                hasArrow: !0,
                                "data-link-location": "TitleDescriptionBlock",
                                "data-link-id": `title-description-block-action-primary-${a}`,
                                children: e.title
                            }, r) : (0, t.jsx)(l.default, {
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
}, 438270, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(672721),
        a = e.i(722978),
        r = e.i(58476),
        i = e.i(749583),
        s = e.i(278466),
        n = e.i(715583),
        d = e.i(372737),
        c = e.i(336480),
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
    let g = (0, l.forwardRef)(({
            nav: e,
            action: l,
            isSticky: r,
            indexOfActiveLink: s,
            variant: n
        }, d) => {
            let c = (0, a.default)("alternateNavigation relative flex h-12 w-full bg-gray-900", {
                "justify-center": "centered" === n,
                "justify-stretch": "default" === n
            });
            return (0, t.jsx)("div", {
                className: c,
                ref: d,
                children: (0, t.jsx)("div", {
                    className: (0, a.default)("z-40 h-12 bg-gray-900 md:block", {
                        "fixed top-11 mt-1 bg-transparent": r,
                        "absolute top-0 py-1": !r,
                        "w-full": "default" === n
                    }),
                    children: (0, t.jsx)("div", {
                        className: "container h-full",
                        children: (0, t.jsxs)("div", {
                            className: (0, a.default)("flex h-full items-center justify-between rounded-md px-2 transition-colors duration-150", {
                                "bg-gray-900": !r,
                                "bg-[rgba(0,0,0,0.5)] backdrop-blur-sm": r
                            }),
                            children: [(0, t.jsx)("div", {
                                className: "h-full w-full shrink-1",
                                children: (0, t.jsx)("ul", {
                                    className: "flex h-full w-full items-center",
                                    children: e.map((e, l) => (0, t.jsx)(j, {
                                        label: e.label,
                                        href: e.href,
                                        target: e.target,
                                        active: s === l
                                    }, `alternate-navigation-element-${e.label}-${l}`))
                                })
                            }), l && (0, t.jsx)("div", {
                                className: "shrink-0",
                                children: (0, t.jsx)(i.default, {
                                    href: l.href,
                                    target: l.target,
                                    size: "small",
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: l.label
                                })
                            })]
                        })
                    })
                })
            })
        }),
        p = (0, l.forwardRef)(({
            isSticky: e,
            nav: i,
            indexOfActiveLink: s,
            title: n
        }, d) => {
            let [c, o] = (0, l.useState)(!1);
            return n ? (0, t.jsx)("div", {
                className: "alternateNavigation relative h-12 w-full bg-gray-900",
                ref: d,
                children: (0, t.jsx)("div", {
                    className: (0, a.default)("z-40 mt-1 h-12 w-full bg-gray-900 md:block", {
                        "fixed top-[4.5rem] bg-transparent": e,
                        "absolute top-0": !e
                    }),
                    children: (0, t.jsx)("div", {
                        className: "container",
                        children: (0, t.jsx)("div", {
                            className: (0, a.default)("flex h-full items-center justify-between rounded-md px-3 transition-colors duration-150", {
                                "bg-gray-900": !e,
                                "bg-[rgba(0,0,0,0.65)] backdrop-blur-sm": e
                            }),
                            children: (0, t.jsxs)("div", {
                                className: "w-full",
                                children: [(0, t.jsxs)(r.m.button, {
                                    animate: c ? "open" : "closed",
                                    className: "flex w-full items-center justify-between py-3",
                                    onClick: () => {
                                        o(!c)
                                    },
                                    children: [(0, t.jsx)("span", {
                                        className: "text-sm font-medium text-white",
                                        children: null == s || c ? n : i[s].label
                                    }), (0, t.jsx)(b, {})]
                                }), (0, t.jsx)(r.m.ul, {
                                    className: "overflow-hidden",
                                    initial: "initial",
                                    animate: c ? "open" : "closed",
                                    variants: f,
                                    children: i.map(({
                                        label: e,
                                        href: l,
                                        target: a
                                    }, r) => (0, t.jsx)(v, {
                                        label: e,
                                        href: l,
                                        target: a,
                                        active: s === r,
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
        b = () => (0, t.jsxs)(r.m.svg, {
            variants: x,
            width: "16",
            height: "17",
            viewBox: "0 0 16 17",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, t.jsx)("g", {
                clipPath: "url(#clip0_5706_918)",
                children: (0, t.jsx)("path", {
                    id: "Vector",
                    d: "M12 6.5C12.568 6.5 12.8647 7.15733 12.522 7.582L12.4713 7.638L8.47133 11.638C8.35654 11.7528 8.2038 11.8217 8.04179 11.8319C7.87977 11.8421 7.7196 11.7928 7.59133 11.6933L7.52867 11.638L3.52867 7.638L3.47333 7.57533L3.43733 7.524L3.40133 7.46L3.39 7.436L3.372 7.39133L3.35067 7.31933L3.344 7.284L3.33733 7.244L3.33467 7.206V7.12733L3.338 7.08867L3.344 7.04867L3.35067 7.014L3.372 6.942L3.39 6.89733L3.43667 6.80933L3.48 6.74933L3.52867 6.69533L3.59133 6.64L3.64267 6.604L3.70667 6.568L3.73067 6.55667L3.77533 6.53867L3.84733 6.51733L3.88267 6.51067L3.92267 6.504L3.96067 6.50133L12 6.5Z",
                    fill: "white"
                })
            }), (0, t.jsx)("defs", {
                children: (0, t.jsx)("clipPath", {
                    id: "clip0_5706_918",
                    children: (0, t.jsx)("rect", {
                        width: "16",
                        height: "16",
                        fill: "white",
                        transform: "translate(0 0.5)"
                    })
                })
            })]
        }),
        v = e => {
            let i = (0, l.useRef)(null),
                {
                    linkProps: o
                } = (0, n.useLink)(e, i),
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
            return (0, t.jsx)("li", {
                className: "border-t border-[#ffffff14]",
                children: (0, t.jsxs)(r.m.div, {
                    custom: v,
                    variants: m,
                    initial: "initial",
                    animate: j ? "open" : "closed",
                    className: "flex w-full items-center justify-between",
                    children: [(0, t.jsx)(s.Link, {
                        ...(0, c.mergeProps)(o, u),
                        ref: i,
                        href: x,
                        target: h ?? "_self",
                        locale: g,
                        className: "py-3 text-sm font-medium text-white",
                        localePrefix: p,
                        children: f
                    }), (0, t.jsx)("div", {
                        className: (0, a.default)("mr-1 h-2 w-2 rounded-full transition-colors duration-300", {
                            "bg-blue": b
                        })
                    })]
                })
            }, `n_${f}`)
        },
        j = e => {
            let r = (0, l.useRef)(null),
                {
                    linkProps: i
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
            return (0, t.jsx)("li", {
                className: "h-full",
                children: (0, t.jsx)(s.Link, {
                    ...(0, c.mergeProps)(i, u),
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
        action: i
    }) => {
        let s = (0, u.default)(`(max-width: ${o.default.Large}px)`),
            n = (0, l.useRef)(null),
            [d, c] = (0, l.useState)(null),
            [m, f] = (0, l.useState)([]),
            [x, b] = (0, l.useState)(!1),
            [v, j] = (0, l.useState)(!1),
            [k, y] = (0, l.useState)(!1),
            w = (0, l.useRef)(0),
            N = () => {
                let e = r.map(e => e.href);
                f([...document.querySelectorAll("a[data-anchor-item]")].filter(t => {
                    let l = t.getAttribute("id");
                    return l && e.find(e => e.includes(l))
                }).map(e => ({
                    top: e.offsetTop + 43
                })))
            },
            L = () => {
                let e;
                n.current && (n.current.offsetTop < window.scrollY ? j(!0) : j(!1)), w.current > window.scrollY && v ? b(!0) : w.current < window.scrollY && b(!1), w.current = window.scrollY, n.current && (n.current.offsetTop > window.innerHeight && !x ? y(!0) : y(!1)), e = null, m.forEach((t, l) => {
                    window.scrollY > t.top && (e = l)
                }), c(e)
            };
        return (0, l.useEffect)(() => {
            let e = document.querySelector("nav");
            e && (e.ariaHidden = String(k))
        }, [k]), (0, l.useLayoutEffect)(() => (N(), window.addEventListener("resize", N), () => {
            window.removeEventListener("resize", N)
        }), []), (0, l.useEffect)(() => (w.current = window.scrollY, window.addEventListener("scroll", L), () => {
            window.removeEventListener("scroll", L)
        }), [x, m, s]), (0, t.jsx)(h.default, {
            children: s ? (0, t.jsx)(p, {
                ref: n,
                nav: r,
                isSticky: v,
                indexOfActiveLink: d,
                title: a
            }) : (0, t.jsx)(g, {
                ref: n,
                nav: r,
                action: i,
                isSticky: v,
                indexOfActiveLink: d,
                variant: e
            })
        })
    }], 438270)
}, 692627, 569074, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(799547),
        a = e.i(722978);
    let r = ({
        theme: e = "light",
        quote: r,
        author: i
    }) => {
        let s = (0, a.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)("blockquote", {
            className: s,
            children: (0, t.jsx)("div", {
                className: "py-12 md:py-40 dark:bg-black",
                children: (0, t.jsx)("div", {
                    className: "container",
                    children: (0, t.jsxs)("div", {
                        className: "grid lg:grid-cols-12 lg:gap-2",
                        children: [r && (0, t.jsx)("div", {
                            className: "lg:col-start-4 lg:col-end-13 lg:row-start-1",
                            children: (0, t.jsx)("p", {
                                className: "quote-item loco-text-heading-md",
                                children: r
                            })
                        }), i && (0, t.jsxs)("div", {
                            className: "mt-4 flex flex-col lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:mt-2",
                            children: [i.image && i.image.src && (0, t.jsx)("div", {
                                className: "overflow-hidden rounded",
                                children: (0, t.jsx)(l.default, {
                                    src: i.image.src,
                                    placeholder: "blur",
                                    blurDataURL: i.image.placeholder,
                                    alt: i.image.alt || "",
                                    width: 200,
                                    height: 250,
                                    className: "w-full max-w-[12rem] object-cover"
                                })
                            }), (0, t.jsxs)("footer", {
                                className: "mt-2 max-w-[12rem] lg:mt-8",
                                children: [i.name && (0, t.jsx)("span", {
                                    className: "loco-text-body-md mt-2 block",
                                    children: i.name
                                }), i.title && (0, t.jsx)("span", {
                                    className: "loco-text-body-sm mt-1 block dark:text-gray-300",
                                    children: i.title
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
        quote: l,
        author: a,
        isHidden: i
    }) => {
        let s = {
            name: a?.name || "",
            title: a?.title || "",
            image: {
                src: a?.image?.file?.asset.url || "",
                placeholder: a?.image?.file?.asset.metadata?.lqip || "",
                alt: a?.image?.alt || ""
            }
        };
        return (0, t.jsx)(t.Fragment, {
            children: !i && (0, t.jsx)(r, {
                quote: l,
                author: s,
                theme: "dark" === e ? "dark" : "light"
            })
        })
    }], 692627);
    let i = ({
        children: e,
        theme: l = "light",
        alignment: r = "left",
        subtitle: i
    }) => {
        let s = (0, a.default)({
                dark: "dark" === l
            }),
            n = (0, a.default)("col-span-12", {
                "lg:col-start-4": "offset" === r || i,
                "lg:col-span-8": "left" === r && !i,
                "lg:col-span-6": i
            });
        return (0, t.jsx)("section", {
            className: s,
            children: (0, t.jsx)("div", {
                className: "bg-white py-14 md:py-32 dark:bg-black",
                children: (0, t.jsxs)("div", {
                    className: "container grid grid-cols-12 text-black dark:text-white",
                    children: [i && (0, t.jsx)("div", {
                        className: "loco-caption-lg-bold col-span-5 mb-3 uppercase lg:col-span-2 lg:mt-2",
                        children: i
                    }), (0, t.jsx)("div", {
                        className: `loco-text-heading-md ${n}`,
                        children: e
                    })]
                })
            })
        })
    };
    e.s(["default", 0, ({
        theme: e,
        text: l,
        alignment: a,
        subtitle: r,
        isHidden: s
    }) => (0, t.jsx)(t.Fragment, {
        children: !s && (0, t.jsx)(i, {
            theme: "dark" === e ? "dark" : "light",
            alignment: "offset" === a ? "offset" : "left",
            subtitle: r || "",
            children: l
        })
    })], 569074)
}, 679288, e => {
    "use strict";
    var t = e.i(672721);
    e.s(["default", 0, () => {
        let [e, l] = (0, t.useState)("Unknown");
        return (0, t.useEffect)(() => {
            let e = window.navigator.userAgent;
            e.includes("Win") && l("Windows"), e.includes("Mac") && l("Mac"), e.includes("Linux") && l("Linux")
        }, []), e
    }])
}, 457689, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(672721),
        a = e.i(654816),
        r = e.i(131564),
        i = e.i(679288);
    e.s(["default", 0, ({
        theme: e,
        variant: s,
        padding: n,
        title: d,
        description: c,
        richText: o,
        actions: u,
        isHidden: m,
        operatingSystem: f
    }) => {
        let x = (0, i.default)(),
            h = (0, l.useMemo)(() => u ? u.map(e => ({
                title: e?.title || "",
                href: e?.link?.linkReference?.href?.current || "",
                target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            })) : [], [u]);
        return f && f !== x ? null : (0, t.jsx)(t.Fragment, {
            children: !m && (0, t.jsx)(r.default, {
                theme: "dark" === e ? "dark" : "light",
                variant: "center" === s ? "center" : "left",
                padding: n ?? !0,
                title: d,
                description: c ?? "",
                richText: (0, t.jsx)(a.PortableText, {
                    value: o
                }),
                actions: h
            })
        })
    }])
}, 68274, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(672721),
        a = e.i(185462);
    e.s(["default", 0, ({
        data: e,
        isHidden: r,
        theme: i
    }) => {
        let s = (0, l.useMemo)(() => e?.map(e => e.value?.text ? {
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
        return (0, t.jsx)(t.Fragment, {
            children: !r && (0, t.jsx)(a.default, {
                keyFigures: s,
                theme: "dark" === i ? "dark" : "light"
            })
        })
    }], 68274)
}, 794189, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(722978),
        a = e.i(672721),
        r = e.i(32627),
        i = e.i(711036),
        s = e.i(799547),
        n = e.i(180573),
        d = e.i(805518);
    let c = (0, n.default)(() => e.A(824429), {
            loadableGenerated: {
                modules: [467761]
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
                p = (0, i.useReducedMotion)(),
                b = (0, l.default)("", {
                    "max-w-lg": "small" === o,
                    "max-w-lg mx-auto": "small-center" === o,
                    "container grid lg:grid-cols-12 lg:gap-2": "offset" === o
                }),
                v = (0, l.default)("relative overflow-hidden rounded-2xl", {
                    "aspect-square": "1:1" === u,
                    "aspect-[4/3]": "4:3" === u,
                    "aspect-video": "16:9" === u
                }),
                j = (0, l.default)("absolute cover z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": x && !p && g && n?.src
                }),
                k = {
                    aspectRatio: "none" === u && e.dimensions?.width && e.dimensions?.height ? `${e.dimensions.width}/${e.dimensions.height}` : void 0
                };
            return (0, t.jsx)("div", {
                className: b,
                ref: f,
                children: (0, t.jsxs)("div", {
                    className: "offset" === o ? "lg:col-start-4 lg:col-end-13 lg:row-start-1" : "",
                    children: [(0, t.jsxs)("div", {
                        className: v,
                        style: k,
                        children: [(0, t.jsx)(s.default, {
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
                        }), g && !p && n?.src && (0, t.jsx)(c, {
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
                    }), m && (0, t.jsx)("div", {
                        className: "loco-text-body-sm mt-2 text-gray-500",
                        children: (0, t.jsx)(d.default, {
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
        image: i,
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
            [j, k] = (0, a.useState)(!1),
            y = null;
        "youtube" === r ? y = (0, n.default)(() => e.A(979214), {
            loadableGenerated: {
                modules: [797285]
            },
            ssr: !1
        }) : "brandfolder" === r && (y = (0, n.default)(() => e.A(824429), {
            loadableGenerated: {
                modules: [467761]
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
                k(!0)
            },
            L = (0, l.default)("", {
                "max-w-lg": "small" === o,
                "max-w-lg mx-auto": "small-center" === o,
                "container grid lg:grid-cols-12 lg:gap-2": "offset" === o
            }),
            R = (0, l.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": j && c && c.src
            }),
            _ = (0, l.default)("relative", {
                "lg:col-start-4 lg:col-end-13 lg:row-start-1": "offset" === o
            });
        return (0, t.jsx)("div", {
            className: L,
            ref: v,
            children: (0, t.jsxs)("div", {
                className: _,
                children: [(0, t.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-2xl",
                    children: [i?.src && (0, t.jsxs)("div", {
                        className: R,
                        onClick: N,
                        children: [!g && (0, t.jsx)(u.default, {
                            handleIsPlaying: N,
                            className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                            label: f,
                            "data-link-location": `${h}-video-play`,
                            "data-link-id": `${h}-video-play`,
                            "data-link-type": "CTA"
                        }), (0, t.jsx)(s.default, {
                            src: i.src,
                            placeholder: "blur",
                            blurDataURL: i.placeholder,
                            fill: !0,
                            alt: i.alt ?? "",
                            className: "cover absolute object-cover brightness-75"
                        })]
                    }), c?.src && y && (0, t.jsx)(y, {
                        url: c.src,
                        playing: j,
                        loop: g,
                        muted: g,
                        playsinline: g,
                        width: "100%",
                        height: "100%",
                        className: "[&>video]:object-cover",
                        onReady: () => {
                            g && k(!0)
                        },
                        controls: !g,
                        config: w
                    }), c?.src?.includes("youtube.com") && (0, t.jsx)(m.default, {
                        blockedMessage: p,
                        consentButtonLabel: b
                    })]
                }), x && (0, t.jsx)("div", {
                    className: "loco-text-body-sm mt-2 text-gray-500",
                    children: (0, t.jsx)(d.default, {
                        children: x
                    })
                })]
            })
        })
    };
    var x = e.i(654816);
    e.s(["default", 0, ({
        mediaType: e,
        provider: a,
        brandfolder: r,
        youtube_url: i,
        image: s,
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
                    src: ("brandfolder" === a ? r?.muxHLSURL : i) ?? null
                },
                aspectRatio: c ?? "none",
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
                provider: a,
                buttonLabel: u,
                videoInline: m,
                richCaption: (0, t.jsx)(x.PortableText, {
                    value: h
                })
            },
            j = "full";
        "small" === d ? j = "small" : "small-center" === d ? j = "small-center" : "offset" === d && (j = "offset");
        let k = "none";
        ("1:1" === c || "16:9" === c || "4:3" === c) && (k = c);
        let y = (0, l.default)("py-16", {
                "dark bg-black": "dark" === v.theme
            }),
            w = (0, l.default)("container");
        return (0, t.jsx)(t.Fragment, {
            children: !p && (0, t.jsx)("div", {
                className: y,
                children: (0, t.jsx)("div", {
                    className: w,
                    children: "video" === v.type ? (0, t.jsx)(f, {
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
                    }) : (0, t.jsx)(o, {
                        layout: j,
                        image: v.image,
                        forcedAspectRatio: k,
                        richCaption: v.richCaption
                    })
                })
            })
        })
    }], 794189)
}, 25665, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(672721),
        a = e.i(654816),
        r = e.i(489687),
        i = e.i(805518),
        s = e.i(570133),
        n = e.i(210310),
        d = e.i(7075),
        c = e.i(775041),
        o = e.i(722978);
    let u = {
        types: {
            imageWithAlt: ({
                value: e
            }) => (0, t.jsx)("img", {
                alt: e?.alt || "",
                src: e?.file?.asset.url,
                className: "my-12"
            }),
            table: ({
                value: e
            }) => (0, t.jsx)(r.default, {
                className: "my-12",
                children: e.tableContent || ""
            }),
            htmlTable: ({
                value: e
            }) => (0, t.jsx)(n.default, {
                table: e,
                hideTitle: !0
            }),
            anchor: ({
                value: e
            }) => (0, t.jsx)(d.Link, {
                id: e.anchorID,
                href: "",
                className: "md:absolute md:-mt-28"
            }),
            codeBlock: ({
                value: e
            }) => e.isHidden ? null : (0, t.jsx)(s.default, {
                code: e.code?.code,
                language: e.code?.language
            })
        },
        block: {
            h2: ({
                children: e
            }) => (0, t.jsx)("h2", {
                className: "loco-text-heading-xs! mb-6",
                children: e
            })
        },
        listItem: {
            number: ({
                children: e
            }) => (0, t.jsx)("li", {
                children: e
            }),
            bullet: ({
                children: e
            }) => (0, t.jsx)("li", {
                className: "list-disc",
                children: e
            })
        }
    };
    e.s(["default", 0, ({
        text: e,
        theme: r,
        layout: s,
        spacing: n,
        isHidden: d,
        productCategoryFilter: m
    }) => {
        let [f] = (0, l.useContext)(c.FiltersContext), {
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
            container: "default" === s || !s,
            "container max-w-[60rem] mx-auto": "center" === s,
            "container grid lg:grid-cols-12 lg:gap-2": "offset" === s
        }), v = (0, o.default)("[&>*]:loco-text-body [&>*]:mb-4", {
            "lg:col-start-4 lg:col-end-10 lg:row-start-1": "offset" === s
        });
        return (0, t.jsx)(t.Fragment, {
            children: !d && g && (0, t.jsx)("section", {
                className: p,
                children: (0, t.jsx)("div", {
                    className: b,
                    children: (0, t.jsx)(i.default, {
                        className: v,
                        children: (0, t.jsx)(a.PortableText, {
                            value: e,
                            components: u
                        })
                    })
                })
            })
        })
    }], 25665)
}, 81636, 673300, 5124, e => {
    "use strict";
    var t = e.i(297124),
        l = e.i(722978),
        a = e.i(32627),
        r = e.i(711036),
        i = e.i(180573),
        s = e.i(799547),
        n = e.i(672721),
        d = e.i(998569),
        c = e.i(278466);
    let o = (0, i.default)(() => e.A(824429), {
            loadableGenerated: {
                modules: [467761]
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
        m = ({
            image: e,
            video: i
        }) => {
            let d = (0, n.useRef)(null),
                [c, u] = (0, n.useState)(!1),
                m = (0, a.useInView)(d),
                f = (0, r.useReducedMotion)(),
                x = (0, l.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": c && !f && m && i.src
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
                    className: x
                }), m && !f && i.src && (0, t.jsx)(o, {
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
        f = ({
            image: e,
            video: i
        }) => {
            let d = (0, n.useRef)(null),
                [c, u] = (0, n.useState)(!1),
                m = (0, a.useInView)(d),
                f = (0, r.useReducedMotion)(),
                x = (0, l.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": c && !f && m && i.src
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
                    className: x
                }), m && !f && i.src && (0, t.jsx)(o, {
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
        x = ({
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
                children: [r && (0, t.jsx)(f, {
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
                        children: (0, t.jsx)(m, {
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
        children: !i && (0, t.jsx)(x, {
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
    })], 81636);
    var h = e.i(749583);
    let g = (0, i.default)(() => e.A(824429), {
            loadableGenerated: {
                modules: [467761]
            },
            ssr: !1
        }),
        p = ({
            title: e,
            description: i,
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
                b = (0, l.default)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": m && !p && x && c.src
                });
            return (0, t.jsx)("section", {
                className: "dark bg-gray-900",
                children: (0, t.jsxs)("div", {
                    ref: u,
                    className: "relative box-border flex min-h-screen flex-col items-center justify-center p-5",
                    children: [d && d.src && (0, t.jsx)(s.default, {
                        fill: !0,
                        alt: d.alt ?? "",
                        src: d.src,
                        className: b
                    }), x && !p && c.src && (0, t.jsx)(g, {
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
                    }), (0, t.jsxs)("div", {
                        className: "relative z-10 max-w-3xl text-center text-white",
                        children: [(0, t.jsx)("h2", {
                            className: "loco-text-heading-md",
                            children: e
                        }), i && (0, t.jsx)("div", {
                            className: "loco-text-body-lg mt-2 opacity-70",
                            children: i
                        }), o && (0, t.jsxs)("div", {
                            className: "mt-6 flex justify-center gap-4",
                            children: [" ", o.map((e, l) => {
                                if (e.link) return (0, t.jsx)(h.default, {
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
    var b = e.i(115219);
    let v = ({
            title: e,
            description: l,
            image: a,
            brandfolder: r,
            actions: i,
            isHidden: s
        }) => {
            let {
                mapFormActions: n
            } = (0, b.useFormModal)(i), d = n(i);
            return (0, t.jsx)(t.Fragment, {
                children: !s && (0, t.jsx)(p, {
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
        },
        j = e => (0, t.jsx)(n.default.Suspense, {
            fallback: (0, t.jsx)("div", {
                className: "h-screen w-full bg-black"
            }),
            children: (0, t.jsx)(v, {
                ...e
            })
        });
    e.s(["FullScreenVisualBlockSuspense", () => j], 673300);
    var k = e.i(120602),
        y = e.i(131564);
    let w = (0, i.default)(() => e.A(824429), {
            loadableGenerated: {
                modules: [467761]
            },
            ssr: !1
        }),
        N = ({
            slide: e,
            index: r,
            isActive: i,
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
                g = (0, l.default)("relative aspect-video overflow-hidden rounded-2xl duration-500", {
                    "opacity-30": !c && !i
                }),
                p = (0, l.default)("absolute h-full w-full transition-opacity duration-500 z-[-1]"),
                b = (0, l.default)("absolute h-full w-full transition-opacity duration-500", {
                    "opacity-0": f && i && !d && h && e.video.src,
                    "object-contain": u
                });
            return (0, t.jsxs)("div", {
                className: g,
                ref: m,
                onClick: () => {
                    !i && o && o()
                },
                children: [e.mention && (0, t.jsx)("div", {
                    className: "absolute bottom-0 left-0 z-10 p-3 opacity-70",
                    children: e.mention
                }), e.image && e.image.src && !u ? (0, t.jsx)(s.default, {
                    src: e.image.src,
                    placeholder: "blur",
                    blurDataURL: e.image.placeholder,
                    fill: !0,
                    alt: e.image.alt,
                    className: b
                }) : (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(s.default, {
                        src: e.image.placeholder,
                        placeholder: "blur",
                        blurDataURL: e.image.placeholder,
                        fill: !0,
                        alt: e.image.alt,
                        className: p
                    }), (0, t.jsx)(s.default, {
                        src: e.image.src,
                        placeholder: "blur",
                        blurDataURL: e.image.placeholder,
                        fill: !0,
                        alt: e.image.alt,
                        className: b
                    })]
                }), h && !d && i && e.video.src && (0, t.jsx)(w, {
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
        L = ({
            title: e,
            action: l,
            slides: a,
            blurredBackground: i
        }) => {
            let [s, c] = (0, n.useState)(void 0), [o, u] = (0, n.useState)(void 0), [m, f] = (0, n.useState)(1), [x, g] = (0, n.useState)(0), [p, b] = (0, n.useState)(0), v = (0, n.useRef)(null), j = (0, n.useRef)(null), w = (0, n.useRef)(null), L = (0, r.useReducedMotion)();
            (0, n.useEffect)(() => {
                j.current && w.current && (c(j.current), u(w.current))
            }, [j, w]);
            let R = (0, n.useCallback)((e, t) => {
                    f(t + 1), b(t)
                }, []),
                _ = (0, n.useCallback)(e => {
                    g(e)
                }, []),
                S = (0, n.useCallback)(() => {
                    j.current && w.current && j.current.slickPrev()
                }, []),
                T = (0, n.useCallback)(() => {
                    j.current && w.current && j.current.slickNext()
                }, []),
                M = {
                    dots: !1,
                    infinite: !0,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1
                },
                C = (0, n.useMemo)(() => a.map((e, l) => (0, t.jsx)("div", {
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
                            children: (0, t.jsx)(h.default, {
                                href: e.action.href,
                                target: e.action.target,
                                rounded: !0,
                                outlined: !0,
                                hasArrow: !0,
                                children: e.action?.title
                            })
                        })]
                    })
                }, l)), [a]),
                $ = (0, n.useMemo)(() => a.map((e, l) => (0, t.jsx)(N, {
                    slide: e,
                    index: l,
                    isActive: x === l,
                    isVisuallyActive: p === l,
                    preferReducedMotion: L,
                    clickCallback: T,
                    blurredBackground: i
                }, l)), [a, x, p, L, T]);
            return (0, t.jsx)("section", {
                className: "dark bg-black py-12",
                children: (0, t.jsxs)("div", {
                    className: "container md:max-w-none lg:pr-0",
                    children: [e && (0, t.jsx)(y.default, {
                        title: e,
                        actions: l ? [l] : []
                    }), (0, t.jsxs)("div", {
                        className: "relative mt-8 lg:grid lg:grid-cols-12 lg:gap-2",
                        ref: v,
                        children: [(0, t.jsx)("div", {
                            className: "relative col-start-4 col-end-13 row-start-1",
                            children: (0, t.jsx)("div", {
                                className: "overflow-hidden rounded-2xl lg:rounded-tr-none lg:rounded-br-none",
                                children: (0, t.jsx)("div", {
                                    className: "lg:grid lg:grid-cols-9 lg:gap-2",
                                    children: (0, t.jsx)("div", {
                                        className: "lg:col-span-8",
                                        children: (0, t.jsx)(k.default, {
                                            ...M,
                                            asNavFor: s,
                                            useTransform: !1,
                                            ref: w,
                                            className: "carousel-text-visual_visual m-0",
                                            children: $
                                        })
                                    })
                                })
                            })
                        }), (0, t.jsxs)("div", {
                            className: "relative col-start-1 col-end-4 row-start-1 pb-10",
                            children: [a.length > 1 && (0, t.jsx)("span", {
                                className: "loco-text-body-md text-blue mx-2.5 mt-2.5 mb-4 block lg:mt-0",
                                children: `${m<10?"0":""}${m} / ${a.length<10?"0":""}${a.length}`
                            }), (0, t.jsx)(k.default, {
                                className: "carousel-text-visual_text mt-4 lg:mt-0",
                                ...M,
                                draggable: !1,
                                asNavFor: o,
                                beforeChange: R,
                                afterChange: _,
                                fade: !0,
                                ref: j,
                                children: C
                            }), a.length > 1 && (0, t.jsxs)("div", {
                                className: "absolute bottom-0 left-3 flex gap-2",
                                children: [(0, t.jsx)(d.default, {
                                    direction: "left",
                                    onPress: S,
                                    ariaLabel: "Prev",
                                    variant: "primary"
                                }), (0, t.jsx)(d.default, {
                                    onPress: T,
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
            children: !n && (0, t.jsx)(L, {
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
    var t = e.i(297124),
        l = e.i(799547),
        a = e.i(278466),
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
    var t = e.i(297124),
        l = e.i(876588),
        a = e.i(722978),
        r = e.i(672721);
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
    var t = e.i(297124),
        l = e.i(32627),
        a = e.i(711036),
        r = e.i(854217),
        i = e.i(860193),
        s = e.i(58476),
        n = e.i(672721),
        d = e.i(722978),
        c = e.i(180573),
        o = e.i(799547),
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
            video: k,
            videoInline: y = !1,
            buttonLabel: w = "Play video",
            blockedMessage: N,
            consentButtonLabel: L,
            heading: R = "h3"
        }) => {
            let _ = (0, x.default)(`(min-width: ${u.default.Medium}px)`),
                S = (0, n.useRef)(null),
                [T, M] = (0, n.useState)(!1),
                C = (0, l.useInView)(S),
                $ = (0, a.useReducedMotion)(),
                A = null;
            "youtube" === g ? A = (0, c.default)(() => e.A(979214), {
                loadableGenerated: {
                    modules: [797285]
                },
                ssr: !1
            }) : "brandfolder" === g && (A = (0, c.default)(() => e.A(824429), {
                loadableGenerated: {
                    modules: [467761]
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
                target: S,
                offset: ["start end", "end end"]
            }), B = (0, i.useTransform)(P, [0, 1], ["60%", "100%"]), O = (0, i.useTransform)(P, [0, 1], [1.75, 1]), U = (0, i.useTransform)(P, [0, 1], ["brightness(50%)", "brightness(100%)"]), I = () => {
                y && "brandfolder" === g && M(!0)
            }, E = () => {
                M(!0)
            }, z = (0, d.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": T && !$ && C && k?.src
            });
            return (0, t.jsxs)("div", {
                ref: S,
                className: "flex flex-col gap-4 border-t border-gray-300 p-6 md:flex-row dark:border-gray-800 dark:bg-black [&_.consent]:md:justify-start [&_.consent>div.text]:md:w-11/12",
                children: [_ && (0, t.jsx)("div", {
                    className: "md:w-[50%]",
                    children: (0, t.jsxs)(s.m.div, {
                        style: {
                            width: B,
                            filter: U
                        },
                        className: "relative aspect-video overflow-hidden rounded-lg",
                        children: [(0, t.jsxs)(s.m.div, {
                            style: {
                                scale: O
                            },
                            className: "relative h-full w-full",
                            children: [k && (0, t.jsx)(t.Fragment, {
                                children: C && !$ && k?.src && A && (0, t.jsx)(A, {
                                    url: k.src,
                                    playing: T,
                                    loop: y && "brandfolder" === g,
                                    muted: y && "brandfolder" === g,
                                    playsinline: y && "brandfolder" === g,
                                    width: "100%",
                                    height: "100%",
                                    className: "[&>video]:object-cover",
                                    onReady: I,
                                    onPlay: E,
                                    controls: !y || "brandfolder" !== g,
                                    config: F
                                })
                            }), j && (0, t.jsxs)("div", {
                                className: z,
                                onClick: E,
                                children: [k?.src && (!y || "brandfolder" !== g) && (0, t.jsx)(f.default, {
                                    handleIsPlaying: E,
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
                        }), k?.src?.includes("youtube.com") && (0, t.jsx)(h.default, {
                            blockedMessage: N,
                            consentButtonLabel: L
                        })]
                    })
                }), !_ && (0, t.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-lg md:hidden",
                    children: [(0, t.jsxs)("div", {
                        className: "relative h-full w-full",
                        children: [k && (0, t.jsx)(t.Fragment, {
                            children: C && !$ && k?.src && A && (0, t.jsx)(A, {
                                url: k.src,
                                playing: T,
                                loop: y && "brandfolder" === g,
                                muted: y && "brandfolder" === g,
                                playsinline: y && "brandfolder" === g,
                                width: "100%",
                                height: "100%",
                                className: "[&>video]:object-cover",
                                onReady: I,
                                onPlay: E,
                                controls: !y && "brandfolder" !== g,
                                config: F
                            })
                        }), j && (0, t.jsxs)("div", {
                            className: z,
                            onClick: E,
                            children: [k?.src && (!y || "brandfolder" !== g) && (0, t.jsx)(f.default, {
                                handleIsPlaying: E,
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
                    }), k?.src?.includes("youtube.com") && (0, t.jsx)(h.default, {
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
                            children: (0, t.jsx)(m.default, {
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
            return (0, t.jsx)(g.default, {
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
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ad06edc9-aa2b-5d51-91bb-dbb1c84d1105")
    } catch (e) {}
}();
//# debugId=ad06edc9-aa2b-5d51-91bb-dbb1c84d1105