(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 596889, e => {
    "use strict";
    var t = e.i(615167),
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
}, 240046, (e, t, l) => {
    t.exports = function(e) {
        return e
    }
}, 865799, (e, t, l) => {
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
}, 911818, (e, t, l) => {
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
}, 830747, (e, t, l) => {
    t.exports = function(e) {
        return function() {
            return e
        }
    }
}, 599568, (e, t, l) => {
    var a = e.r(581511);
    t.exports = function() {
        try {
            var e = a(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }()
}, 317508, (e, t, l) => {
    var a = e.r(830747),
        r = e.r(599568),
        i = e.r(240046);
    t.exports = r ? function(e, t) {
        return r(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: a(t),
            writable: !0
        })
    } : i
}, 108749, (e, t, l) => {
    var a = e.r(317508);
    t.exports = e.r(911818)(a)
}, 531766, (e, t, l) => {
    t.exports = function(e, t) {
        for (var l = -1, a = null == e ? 0 : e.length; ++l < a && !1 !== t(e[l], l, e););
        return e
    }
}, 860059, (e, t, l) => {
    var a = /^(?:0|[1-9]\d*)$/;
    t.exports = function(e, t) {
        var l = typeof e;
        return !!(t = null == t ? 0x1fffffffffffff : t) && ("number" == l || "symbol" != l && a.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, 184414, (e, t, l) => {
    var a = e.r(865799),
        r = Math.max;
    t.exports = function(e, t, l) {
        return t = r(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var i = arguments, s = -1, n = r(i.length - t, 0), d = Array(n); ++s < n;) d[s] = i[t + s];
                s = -1;
                for (var o = Array(t + 1); ++s < t;) o[s] = i[s];
                return o[t] = l(d), a(e, this, o)
            }
    }
}, 893171, 447533, e => {
    "use strict";
    var t = e.i(615167),
        l = e.i(145158),
        a = e.i(675078),
        r = e.i(722978),
        i = e.i(852485),
        s = e.i(614909),
        n = e.i(783078);
    let d = (0, s.default)(() => e.A(969945), {
            loadableGenerated: {
                modules: [170438]
            },
            ssr: !1
        }),
        o = ({
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
    var c = e.i(185462),
        u = e.i(224601);
    let f = ({
        children: e,
        className: l = "",
        size: i = "default",
        variant: s = "default",
        image: n,
        keyFigures: d
    }) => {
        let o = (0, r.clsx)("relative grid grid-cols-12", l, {
                dark: !!n
            }),
            u = (0, r.clsx)("relative col-span-12 mx-auto lg:container", {
                "lg:py-32 lg:pb-10": "gdc2026" !== s && "default" === i,
                "lg:py-16 lg:pb-5": "gdc2026" !== s && "slim" === i,
                "py-0 lg:py-20 max-w-[82rem]": "gdc2026" === s
            }),
            f = (0, r.clsx)({
                "flex flex-col lg:flex-row-reverse": "gdc2026" !== s,
                "grid grid-cols-12 gap-6": "gdc2026" === s
            });
        return (0, t.jsxs)("section", {
            className: o,
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
                    className: f,
                    children: e
                }), d && d.length > 0 && (0, t.jsx)("div", {
                    className: "mx-6 lg:mx-0",
                    children: (0, t.jsx)(c.default, {
                        keyFigures: d,
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
        children: e
    }), f.AlternateActions = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "loco-text-body-sm flex flex-row items-center gap-2 pl-10 text-gray-600 md:pl-8",
        children: e
    }), f.Body = ({
        children: e,
        variant: l = "default"
    }) => (0, t.jsx)("div", {
        className: "gdc2026" === l ? "loco-text-body-lg" : "loco-text-body-lg mb-6",
        children: e
    }), f.Content = ({
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
    }, f.Overline = ({
        children: e,
        className: l
    }) => {
        let a = (0, r.default)("loco-caption-lg-semibold mb-3 text-gray-500 dark:text-gray-300", l);
        return (0, t.jsx)("div", {
            className: a,
            children: e
        })
    }, f.Title = ({
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
    }, f.Pricing = ({
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
    }, f.Media = ({
        media: e,
        className: i = "",
        variant: s = "default"
    }) => {
        let {
            image: c,
            video: u
        } = e || {}, [f, m] = (0, l.useState)(!1), h = (0, l.useRef)(null), x = "gdc2026" === s ? "object-cover" : "object-contain", g = (0, r.default)("relative flex grow", {
            "m-4 h-full": "gdc2026" !== s,
            "w-full h-[22rem] lg:h-full lg:w-auto lg:m-4": "gdc2026" === s
        }, i), p = (0, r.default)("relative h-full w-full overflow-hidden", {
            "rounded-3xl": "gdc2026" !== s,
            "lg:rounded-3xl": "gdc2026" === s
        }), v = (0, r.default)("flex items-center", {
            "flex-1 justify-center lg:justify-start": "gdc2026" !== s,
            "w-full col-span-12 lg:col-span-8 justify-center order-1 lg:order-2": "gdc2026" === s
        }), b = (e, l) => c?.asset.url ? (0, t.jsx)(a.default, {
            src: c.asset.url,
            alt: e,
            fill: !0,
            className: (0, r.default)("absolute h-full", x, l),
            sizes: `(min-width: ${n.default.Large}px) 33vw, (min-width: ${n.default.Medium}px) 50vw, 100vw`,
            placeholder: c.asset.metadata?.lqip ? "blur" : "empty",
            blurDataURL: c.asset.metadata?.lqip || void 0
        }) : null;
        return (0, t.jsx)("div", {
            className: v,
            children: (c || u) && (0, t.jsxs)("div", {
                className: g,
                children: [(0, t.jsx)(o, {
                    containerRef: h,
                    lqip: f ? void 0 : c?.asset?.metadata?.lqip
                }), (0, t.jsxs)("div", {
                    ref: h,
                    className: p,
                    children: [c?.asset.url && !u && b("Hero image", void 0), u && c?.asset.url && !f && b("Video thumbnail", "z-10"), u && (0, t.jsx)("div", {
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
    }, e.s(["default", 0, f], 447533);
    var m = e.i(749583),
        h = e.i(278466),
        x = e.i(115219);
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
    var p = e.i(433519),
        v = e.i(829150);
    e.s(["default", 0, ({
        eyebrow: e,
        title: a,
        description: r,
        actions: i = [],
        media: s,
        backgroundImage: n,
        size: d,
        variant: o,
        keyFigures: c,
        theme: u,
        youtubeVideo: b,
        isHidden: j,
        showAlterativeOSLinks: y,
        alternativeOSLinkSettings: k
    }) => {
        let w, N = -1 !== (w = window.navigator.userAgent).indexOf("Win") ? "Windows" : -1 !== w.indexOf("Mac") ? "Mac" : -1 !== w.indexOf("Linux") ? "Linux" : "Unknown",
            _ = (0, l.useRef)(null),
            {
                state: L
            } = (0, p.default)(),
            {
                mapFormActions: R
            } = (0, x.useFormModal)(i),
            A = (0, l.useMemo)(() => R(i) || [], [i, R]),
            S = n?.asset?.url ? {
                src: n.asset.url,
                alt: "Hero background image"
            } : void 0,
            C = (0, l.useMemo)(() => (c?.data ?? []).map(e => e?.value?.text ? {
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
            }), [c]);
        (0, l.useEffect)(() => {
            if (!_.current) {
                let e = document.createElement("a");
                e.style.display = "none", document.body.appendChild(e), _.current = e
            }
            return () => {
                _.current && document.body.contains(_.current) && document.body.removeChild(_.current)
            }
        }, []);
        let M = o ?? void 0,
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
            $ = e => {
                let t = e.link?.linkReference?.href?.current,
                    l = t ? (0, v.default)(t, L, e.extendLink) : t,
                    a = e.secondaryLink?.linkReference?.href?.current,
                    r = e.link?.linkReference?.target || "_self",
                    i = h.locales.find(e => window.location.pathname === `/${e}` || window.location.pathname.startsWith(`/${e}/`)) ?? "en";
                l && (l.endsWith(".exe") || l.endsWith(".dmg") ? _.current && (_.current.href = l, _.current.download = "", _.current.target = r, _.current.click()) : "_blank" === r ? window.open(l, "_blank") : window.location.href = l), a && setTimeout(() => {
                    let e = a.replace(/^\//, "");
                    window.location.href = `/${i}/${e}`
                }, 1e3), e?.callback && e.callback()
            },
            F = i?.filter(e => !e.operatingSystem || e.operatingSystem === N) || [],
            P = i?.filter(e => !!e.operatingSystem && "Unknown" !== e.operatingSystem) || [];
        return (0, t.jsx)(t.Fragment, {
            children: !j && (0, t.jsx)("section", {
                className: "dark" === u ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "dark:bg-black",
                    children: (0, t.jsxs)(f, {
                        image: S,
                        size: "slim" === d ? "slim" : "default" === d ? "default" : void 0,
                        variant: M,
                        keyFigures: C,
                        children: [s && (0, t.jsx)(f.Media, {
                            media: s,
                            variant: M
                        }), !s && b && (0, t.jsx)(f.YouTubeVideo, {
                            autoplay: !0,
                            url: b?.url,
                            title: b?.title,
                            blockedMessage: b?.consent?.blockedMessage,
                            consentButtonLabel: b?.consent?.consentButtonLabel || ""
                        }), (0, t.jsxs)(f.Content, {
                            variant: M,
                            children: [(0, t.jsx)(f.Overline, {
                                children: e
                            }), (0, t.jsx)(f.Title, {
                                variant: M,
                                children: a
                            }), (0, t.jsx)(f.Body, {
                                variant: M,
                                children: r
                            }), (0, t.jsx)("div", {
                                className: "xl:hidden",
                                children: (0, t.jsx)(f.Actions, {
                                    variant: M,
                                    children: F.map((e, a) => {
                                        let r = A[a],
                                            i = e.link?.linkReference?.href?.current || "",
                                            s = (0, v.default)(i, L, e.extendLink);
                                        e.link?.linkReference?.target;
                                        let n = 0 === a,
                                            d = i.endsWith(".exe") || i.endsWith(".dmg"),
                                            o = !!e.secondaryLink?.linkReference?.href?.current,
                                            c = s && !d && !o;
                                        return r?.form ? T(e, r, a) : (0, t.jsxs)(l.default.Fragment, {
                                            children: [n && (0, t.jsx)(m.default, {
                                                size: "medium",
                                                variant: e.buttonType,
                                                rounded: !0,
                                                ...c && {
                                                    href: s
                                                },
                                                onPress: () => $(e),
                                                hasArrow: !0,
                                                "data-link-location": "HeroBlock",
                                                "data-link-id": `HeroBlock-action-${a}`,
                                                children: e.title
                                            }), n && y && (0, t.jsx)(g, {
                                                linkText: k?.linkText ?? "Download for",
                                                separatorText: k?.separatorText ?? "or",
                                                actionLinks: P.map(e => ({
                                                    os: e.operatingSystem,
                                                    href: e.link?.linkReference?.href?.current || "#"
                                                }))
                                            }), !n && (0, t.jsx)("div", {
                                                className: "ml-1 flex flex-col gap-4",
                                                children: (0, t.jsx)(m.default, {
                                                    size: "medium",
                                                    variant: e.buttonType,
                                                    rounded: !0,
                                                    ...c && {
                                                        href: s
                                                    },
                                                    onPress: () => $(e),
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
                                children: [(0, t.jsx)(f.Actions, {
                                    variant: M,
                                    children: F.map((e, l) => {
                                        let a = A[l],
                                            r = e.link?.linkReference?.href?.current || "",
                                            i = (0, v.default)(r, L, e.extendLink);
                                        e.link?.linkReference?.target;
                                        let s = r.endsWith(".exe") || r.endsWith(".dmg"),
                                            n = !!e.secondaryLink?.linkReference?.href?.current,
                                            d = i && !s && !n;
                                        return a?.form ? T(e, a, l) : (0, t.jsx)(m.default, {
                                            size: "medium",
                                            variant: e.buttonType,
                                            rounded: !0,
                                            ...d && {
                                                href: i
                                            },
                                            onPress: () => $(e),
                                            hasArrow: !0,
                                            "data-link-location": "HeroBlock",
                                            "data-link-id": `HeroBlock-action-${l}`,
                                            children: e.title
                                        }, e.link?.linkReference?.title || l)
                                    })
                                }), y && F[0] && (0, t.jsx)(g, {
                                    linkText: k?.linkText ?? "Download for",
                                    separatorText: k?.separatorText ?? "or",
                                    actionLinks: P.map(e => ({
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
    var t = e.i(615167),
        l = e.i(145158),
        a = e.i(78389),
        r = e.i(675078),
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
    var o = e.i(749583);
    let c = ({
            actions: e,
            variant: a = "default"
        }) => {
            let r = "products" === a;
            return (0, t.jsx)("div", {
                className: "flex flex-col flex-wrap items-start justify-start gap-y-4 md:flex-row md:gap-2",
                children: e.map((e, a) => e.renderModal ? (0, t.jsx)(l.default.Fragment, {
                    children: e.renderModal()
                }, a) : (0, t.jsx)(o.default, {
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
            actions: o,
            image: u,
            className: f,
            variant: m = "default"
        }) => {
            let h = (0, i.default)("container relative grid col-span-12 py-8 lg:py-12 px-4 lg:px-16 rounded-xl overflow-hidden", {
                    dark: !!u
                }, f),
                x = "products" === m;
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
                                blur: !x
                            })
                        }), (0, t.jsxs)("div", {
                            className: h,
                            children: [(0, t.jsx)(s, {
                                overline: e,
                                variant: m
                            }), (0, t.jsx)(n, {
                                title: l
                            }), (0, t.jsx)(d, {
                                body: a,
                                variant: m
                            }), (0, t.jsx)(c, {
                                actions: o,
                                variant: m
                            })]
                        })]
                    })
                })
            })
        };
    var f = e.i(829150),
        m = e.i(433519),
        h = e.i(775041),
        x = e.i(115219);
    e.s(["default", 0, ({
        overline: e,
        title: r,
        body: i,
        actions: s,
        image: n,
        theme: d,
        isHidden: o,
        variant: c,
        productCatalogItem: g,
        productCategoryFilter: p
    }) => {
        let [v] = (0, l.useContext)(h.FiltersContext), {
            state: b
        } = (0, m.default)(), j = {
            ...b,
            product: g?.productKey,
            variant: null
        }, {
            renderModal: y,
            extraFields: k
        } = (0, x.useFormModal)(s), w = (0, l.useMemo)(() => s ? s.map(e => (e => {
            if (!e) return null;
            let t = !!e.form,
                l = e.link?.linkReference?.href?.current,
                a = t ? "" : l ? (0, f.default)(l, j, e.extendLink) : "";
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
                    renderModal: () => y({
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
        })(e)).filter(e => !!e) : [], [s, j, y, k]), {
            subcategories: N
        } = v.categories?.find(({
            _id: e
        }) => e === v.selectedCategory) || {}, _ = null != v.selectedSubcategory ? (N || []).find(({
            _id: e
        }) => e === v.selectedSubcategory) : null, L = !p || p.categories?.find(e => e._id === v.selectedCategory) != null && (null == _ || !p.subcategories || p.subcategories.some(({
            _id: e
        }) => e === v.selectedSubcategory)), R = n ? {
            url: n?.file?.asset.url || "",
            alt: n.alt
        } : void 0;
        return (0, t.jsx)(t.Fragment, {
            children: !o && L && (0, t.jsx)("section", {
                className: "dark" === d ? "dark" : "",
                children: (0, t.jsx)(u, {
                    overline: e,
                    title: r || "",
                    body: (0, t.jsx)(a.PortableText, {
                        value: i
                    }),
                    actions: w,
                    image: R,
                    variant: c
                })
            })
        })
    }], 32382)
}, 129824, e => {
    "use strict";
    e.s(["CAMPAIGN_PAGES_NO_MT_BANNER", 0, ["/campaign/spatial"], "DATA_REQUEST", 0, "/data-request", "DEFAULT_PAGES_NO_MT_BANNER", 0, ["/made-with-unity"], "L1_PAGES_NO_MT_BANNER", 0, ["/our-company", "/community", "/industry", "/use-cases", "/releases/unity-6"], "PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products"], "PRODUCTS_PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products/unity-pro", "/products/unity-engine", "/products/compare-plans", "/products/compare-plans/unity-cloud"], "RESOURCES_PAGES_NO_MT_BANNER", 0, ["/resources"], "SOLUTIONS_PAGES_NO_MT_BANNER", 0, ["/download", "/roadmap", "/pages/pro-free-trial", "/games", "/solutions", "/developer-tools", "/how-to", "/learn", "/learn/get-started", "/releases/lts-vs-tech-stream"]])
}, 584266, e => {
    "use strict";
    var t = e.i(615167),
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
            state: o
        } = (0, a.default)();
        return (0, t.jsx)(t.Fragment, {
            children: !d && (0, t.jsx)(r, {
                title: e ?? "",
                action: (e => {
                    if (!e?.link) return null;
                    let t = e?.link.linkReference?.href.current;
                    return {
                        label: e?.title ?? "",
                        href: t ? (0, l.default)(t, o, e?.extendLink) : "",
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
    var t = e.i(615167),
        l = e.i(749583),
        a = e.i(722978);
    e.s(["default", 0, ({
        theme: e = "light",
        actions: r,
        description: i,
        title: s,
        padding: n = !0,
        variant: d = "center",
        richText: o
    }) => {
        let c = (0, a.default)({
            dark: "dark" === e
        });
        return (0, t.jsx)("div", {
            className: c,
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
                    }), (i || o) && (0, t.jsxs)("div", {
                        className: (0, a.default)("loco-text-body-lg [&_a]:text-blue mt-6 text-gray-500", "center" === d || "left" === d ? "max-w-5xl" : "max-w-3xl"),
                        children: [i, o]
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
    var t = e.i(615167),
        l = e.i(145158),
        a = e.i(722978),
        r = e.i(669486),
        i = e.i(749583),
        s = e.i(278466),
        n = e.i(402001),
        d = e.i(379394),
        o = e.i(892164),
        c = e.i(783078),
        u = e.i(430215);
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
        m = {
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
        h = {
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
    var x = e.i(766930);
    let g = (0, l.forwardRef)(({
            nav: e,
            action: l,
            isSticky: r,
            indexOfActiveLink: s,
            variant: n
        }, d) => {
            let o = (0, a.default)("alternateNavigation relative flex h-12 w-full bg-gray-900", {
                "justify-center": "centered" === n,
                "justify-stretch": "default" === n
            });
            return (0, t.jsx)("div", {
                className: o,
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
            let [o, c] = (0, l.useState)(!1);
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
                                    animate: o ? "open" : "closed",
                                    className: "flex w-full items-center justify-between py-3",
                                    onClick: () => {
                                        c(!o)
                                    },
                                    children: [(0, t.jsx)("span", {
                                        className: "text-sm font-medium text-white",
                                        children: null == s || o ? n : i[s].label
                                    }), (0, t.jsx)(v, {})]
                                }), (0, t.jsx)(r.m.ul, {
                                    className: "overflow-hidden",
                                    initial: "initial",
                                    animate: o ? "open" : "closed",
                                    variants: m,
                                    children: i.map(({
                                        label: e,
                                        href: l,
                                        target: a
                                    }, r) => (0, t.jsx)(b, {
                                        label: e,
                                        href: l,
                                        target: a,
                                        active: s === r,
                                        index: r,
                                        isOpen: o,
                                        onClick: () => {
                                            c(!1)
                                        }
                                    }, `alternate-navigation-element-${e}-${r}`))
                                })]
                            })
                        })
                    })
                })
            }) : null
        }),
        v = () => (0, t.jsxs)(r.m.svg, {
            variants: h,
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
        b = e => {
            let i = (0, l.useRef)(null),
                {
                    linkProps: c
                } = (0, n.useLink)(e, i),
                {
                    focusProps: u
                } = (0, d.useFocusRing)(),
                {
                    label: m,
                    href: h,
                    target: x,
                    locale: g,
                    localePrefix: p,
                    active: v,
                    index: b,
                    isOpen: j
                } = e;
            return (0, t.jsx)("li", {
                className: "border-t border-[#ffffff14]",
                children: (0, t.jsxs)(r.m.div, {
                    custom: b,
                    variants: f,
                    initial: "initial",
                    animate: j ? "open" : "closed",
                    className: "flex w-full items-center justify-between",
                    children: [(0, t.jsx)(s.Link, {
                        ...(0, o.mergeProps)(c, u),
                        ref: i,
                        href: h,
                        target: x ?? "_self",
                        locale: g,
                        className: "py-3 text-sm font-medium text-white",
                        localePrefix: p,
                        children: m
                    }), (0, t.jsx)("div", {
                        className: (0, a.default)("mr-1 h-2 w-2 rounded-full transition-colors duration-300", {
                            "bg-blue": v
                        })
                    })]
                })
            }, `n_${m}`)
        },
        j = e => {
            let r = (0, l.useRef)(null),
                {
                    linkProps: i
                } = (0, n.useLink)(e, r),
                {
                    isFocusVisible: c,
                    focusProps: u
                } = (0, d.useFocusRing)(),
                {
                    label: f,
                    href: m,
                    target: h,
                    locale: x,
                    localePrefix: g,
                    active: p
                } = e,
                v = (0, a.default)("alternateNavigation_item relative h-full flex items-center px-2 !text-[0.75rem] font-medium group outline-hidden text-gray-200 transition-colors duration-150", {
                    "a11y-ring rounded-xs": c
                }, {
                    active: p,
                    "text-white": p,
                    "text-gray-200": !p
                });
            return (0, t.jsx)("li", {
                className: "h-full",
                children: (0, t.jsx)(s.Link, {
                    ...(0, o.mergeProps)(i, u),
                    ref: r,
                    href: m,
                    target: h ?? "_self",
                    locale: x,
                    className: v,
                    localePrefix: g,
                    children: f
                })
            })
        };
    g.displayName = "DesktopNav", p.displayName = "MobileNav", e.s(["default", 0, ({
        variant: e = "default",
        title: a,
        nav: r,
        action: i
    }) => {
        let s = (0, u.default)(`(max-width: ${c.default.Large}px)`),
            n = (0, l.useRef)(null),
            [d, o] = (0, l.useState)(null),
            [f, m] = (0, l.useState)([]),
            [h, v] = (0, l.useState)(!1),
            [b, j] = (0, l.useState)(!1),
            [y, k] = (0, l.useState)(!1),
            w = (0, l.useRef)(0),
            N = () => {
                let e = r.map(e => e.href);
                m([...document.querySelectorAll("a[data-anchor-item]")].filter(t => {
                    let l = t.getAttribute("id");
                    return l && e.find(e => e.includes(l))
                }).map(e => ({
                    top: e.offsetTop + 43
                })))
            },
            _ = () => {
                let e;
                n.current && (n.current.offsetTop < window.scrollY ? j(!0) : j(!1)), w.current > window.scrollY && b ? v(!0) : w.current < window.scrollY && v(!1), w.current = window.scrollY, n.current && (n.current.offsetTop > window.innerHeight && !h ? k(!0) : k(!1)), e = null, f.forEach((t, l) => {
                    window.scrollY > t.top && (e = l)
                }), o(e)
            };
        return (0, l.useEffect)(() => {
            let e = document.querySelector("nav");
            e && (e.ariaHidden = String(y))
        }, [y]), (0, l.useLayoutEffect)(() => (N(), window.addEventListener("resize", N), () => {
            window.removeEventListener("resize", N)
        }), []), (0, l.useEffect)(() => (w.current = window.scrollY, window.addEventListener("scroll", _), () => {
            window.removeEventListener("scroll", _)
        }), [h, f, s]), (0, t.jsx)(x.default, {
            children: s ? (0, t.jsx)(p, {
                ref: n,
                nav: r,
                isSticky: b,
                indexOfActiveLink: d,
                title: a
            }) : (0, t.jsx)(g, {
                ref: n,
                nav: r,
                action: i,
                isSticky: b,
                indexOfActiveLink: d,
                variant: e
            })
        })
    }], 438270)
}, 692627, 569074, e => {
    "use strict";
    var t = e.i(615167),
        l = e.i(675078),
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
    var t = e.i(145158);
    e.s(["default", 0, () => {
        let [e, l] = (0, t.useState)("Unknown");
        return (0, t.useEffect)(() => {
            let e = window.navigator.userAgent;
            e.includes("Win") && l("Windows"), e.includes("Mac") && l("Mac"), e.includes("Linux") && l("Linux")
        }, []), e
    }])
}, 457689, e => {
    "use strict";
    var t = e.i(615167),
        l = e.i(145158),
        a = e.i(78389),
        r = e.i(131564),
        i = e.i(679288);
    e.s(["default", 0, ({
        theme: e,
        variant: s,
        padding: n,
        title: d,
        description: o,
        richText: c,
        actions: u,
        isHidden: f,
        operatingSystem: m
    }) => {
        let h = (0, i.default)(),
            x = (0, l.useMemo)(() => u ? u.map(e => ({
                title: e?.title || "",
                href: e?.link?.linkReference?.href?.current || "",
                target: e?.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            })) : [], [u]);
        return m && m !== h ? null : (0, t.jsx)(t.Fragment, {
            children: !f && (0, t.jsx)(r.default, {
                theme: "dark" === e ? "dark" : "light",
                variant: "center" === s ? "center" : "left",
                padding: n ?? !0,
                title: d,
                description: o ?? "",
                richText: (0, t.jsx)(a.PortableText, {
                    value: c
                }),
                actions: x
            })
        })
    }])
}, 68274, e => {
    "use strict";
    var t = e.i(615167),
        l = e.i(145158),
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
    var t = e.i(615167),
        l = e.i(722978),
        a = e.i(145158),
        r = e.i(822736),
        i = e.i(751004),
        s = e.i(675078),
        n = e.i(614909),
        d = e.i(954936);
    let o = (0, n.default)(() => e.A(969945), {
            loadableGenerated: {
                modules: [170438]
            },
            ssr: !1
        }),
        c = ({
            image: e,
            video: n,
            layout: c,
            forcedAspectRatio: u = "none",
            richCaption: f
        }) => {
            let m = (0, a.useRef)(null),
                [h, x] = (0, a.useState)(!1),
                g = (0, r.useInView)(m),
                p = (0, i.useReducedMotion)(),
                v = (0, l.default)("", {
                    "max-w-lg": "small" === c,
                    "max-w-lg mx-auto": "small-center" === c,
                    "container grid lg:grid-cols-12 lg:gap-2": "offset" === c
                }),
                b = (0, l.default)("relative overflow-hidden rounded-2xl", {
                    "aspect-square": "1:1" === u,
                    "aspect-[4/3]": "4:3" === u,
                    "aspect-video": "16:9" === u
                }),
                j = (0, l.default)("absolute cover z-10 transition-opacity duration-500 object-cover", {
                    "opacity-0": h && !p && g && n?.src
                }),
                y = {
                    aspectRatio: "none" === u && e.dimensions?.width && e.dimensions?.height ? `${e.dimensions.width}/${e.dimensions.height}` : void 0
                };
            return (0, t.jsx)("div", {
                className: v,
                ref: m,
                children: (0, t.jsxs)("div", {
                    className: "offset" === c ? "lg:col-start-4 lg:col-end-13 lg:row-start-1" : "",
                    children: [(0, t.jsxs)("div", {
                        className: b,
                        style: y,
                        children: [(0, t.jsx)(s.default, {
                            src: e.src,
                            placeholder: "blur",
                            blurDataURL: e.placeholder,
                            fill: !0,
                            alt: e.alt ?? "",
                            className: j,
                            sizes: (() => {
                                switch (c) {
                                    case "small":
                                        return "32rem";
                                    case "offset":
                                        return "1440px";
                                    default:
                                        return "100vw"
                                }
                            })()
                        }), g && !p && n?.src && (0, t.jsx)(o, {
                            url: n.src,
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
                        })]
                    }), f && (0, t.jsx)("div", {
                        className: "loco-text-body-sm mt-2 text-gray-500",
                        children: (0, t.jsx)(d.default, {
                            children: f
                        })
                    })]
                })
            })
        };
    var u = e.i(186114),
        f = e.i(195051);
    let m = ({
        provider: r,
        image: i,
        video: o,
        layout: c,
        buttonLabel: m,
        richCaption: h,
        blockKey: x,
        videoInline: g,
        blockedMessage: p,
        consentButtonLabel: v
    }) => {
        let b = (0, a.useRef)(null),
            [j, y] = (0, a.useState)(!1),
            k = null;
        "youtube" === r ? k = (0, n.default)(() => e.A(802241), {
            loadableGenerated: {
                modules: [966543]
            },
            ssr: !1
        }) : "brandfolder" === r && (k = (0, n.default)(() => e.A(969945), {
            loadableGenerated: {
                modules: [170438]
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
            _ = (0, l.default)("", {
                "max-w-lg": "small" === c,
                "max-w-lg mx-auto": "small-center" === c,
                "container grid lg:grid-cols-12 lg:gap-2": "offset" === c
            }),
            L = (0, l.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": j && o && o.src
            }),
            R = (0, l.default)("relative", {
                "lg:col-start-4 lg:col-end-13 lg:row-start-1": "offset" === c
            });
        return (0, t.jsx)("div", {
            className: _,
            ref: b,
            children: (0, t.jsxs)("div", {
                className: R,
                children: [(0, t.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-2xl",
                    children: [i?.src && (0, t.jsxs)("div", {
                        className: L,
                        onClick: N,
                        children: [!g && (0, t.jsx)(u.default, {
                            handleIsPlaying: N,
                            className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                            label: m,
                            "data-link-location": `${x}-video-play`,
                            "data-link-id": `${x}-video-play`,
                            "data-link-type": "CTA"
                        }), (0, t.jsx)(s.default, {
                            src: i.src,
                            placeholder: "blur",
                            blurDataURL: i.placeholder,
                            fill: !0,
                            alt: i.alt ?? "",
                            className: "cover absolute object-cover brightness-75"
                        })]
                    }), o?.src && k && (0, t.jsx)(k, {
                        url: o.src,
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
                    }), o?.src?.includes("youtube.com") && (0, t.jsx)(f.default, {
                        blockedMessage: p,
                        consentButtonLabel: v
                    })]
                }), h && (0, t.jsx)("div", {
                    className: "loco-text-body-sm mt-2 text-gray-500",
                    children: (0, t.jsx)(d.default, {
                        children: h
                    })
                })]
            })
        })
    };
    var h = e.i(78389);
    e.s(["default", 0, ({
        mediaType: e,
        provider: a,
        brandfolder: r,
        youtube_url: i,
        image: s,
        theme: n,
        layout: d,
        aspectRatio: o,
        buttonLabel: u,
        videoInline: f,
        richCaption: x,
        blockKey: g,
        isHidden: p,
        consent: v
    }) => {
        let b = {
                type: e ?? "image",
                layout: d ?? "full",
                theme: n ?? "light",
                video: {
                    src: ("brandfolder" === a ? r?.muxHLSURL : i) ?? null
                },
                aspectRatio: o ?? "none",
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
                videoInline: f,
                richCaption: (0, t.jsx)(h.PortableText, {
                    value: x
                })
            },
            j = "full";
        "small" === d ? j = "small" : "small-center" === d ? j = "small-center" : "offset" === d && (j = "offset");
        let y = "none";
        ("1:1" === o || "16:9" === o || "4:3" === o) && (y = o);
        let k = (0, l.default)("py-16", {
                "dark bg-black": "dark" === b.theme
            }),
            w = (0, l.default)("container");
        return (0, t.jsx)(t.Fragment, {
            children: !p && (0, t.jsx)("div", {
                className: k,
                children: (0, t.jsx)("div", {
                    className: w,
                    children: "video" === b.type ? (0, t.jsx)(m, {
                        provider: "brandfolder" === a ? "brandfolder" : "youtube",
                        layout: j,
                        video: b.video,
                        image: b.image,
                        buttonLabel: b.buttonLabel,
                        richCaption: b.richCaption,
                        blockKey: g,
                        videoInline: b.videoInline,
                        blockedMessage: v?.blockedMessage,
                        consentButtonLabel: v?.consentButtonLabel || ""
                    }) : (0, t.jsx)(c, {
                        layout: j,
                        image: b.image,
                        forcedAspectRatio: y,
                        richCaption: b.richCaption
                    })
                })
            })
        })
    }], 794189)
}, 25665, e => {
    "use strict";
    var t = e.i(615167),
        l = e.i(145158),
        a = e.i(78389),
        r = e.i(339680),
        i = e.i(954936),
        s = e.i(570133),
        n = e.i(210310),
        d = e.i(7075),
        o = e.i(775041),
        c = e.i(722978);
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
            }),
            h3: ({
                children: e
            }) => (0, t.jsx)("h3", {
                className: "text-heading-sm!",
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
        productCategoryFilter: f
    }) => {
        let [m] = (0, l.useContext)(o.FiltersContext), {
            subcategories: h
        } = m.categories?.find(({
            _id: e
        }) => e === m.selectedCategory) || {}, x = null != m.selectedSubcategory ? (h || []).find(({
            _id: e
        }) => e === m.selectedSubcategory) : null, g = !f || f.categories?.find(e => e._id === m.selectedCategory) != null && (null == x || !f.subcategories || f.subcategories.some(({
            _id: e
        }) => e === m.selectedSubcategory)), p = (0, c.default)("dark:bg-black", {
            "py-8 md:py-12": "default" === n || "small" === n || !n,
            "py-16": "large" === n,
            "bg-black dark": "dark" === r
        }), v = (0, c.default)("", {
            container: "default" === s || !s,
            "container max-w-[60rem] mx-auto": "center" === s,
            "container grid lg:grid-cols-12 lg:gap-2": "offset" === s
        }), b = (0, c.default)("[&>*]:loco-text-body [&>*]:mb-4", {
            "lg:col-start-4 lg:col-end-10 lg:row-start-1": "offset" === s
        });
        return (0, t.jsx)(t.Fragment, {
            children: !d && g && (0, t.jsx)("section", {
                className: p,
                children: (0, t.jsx)("div", {
                    className: v,
                    children: (0, t.jsx)(i.default, {
                        className: b,
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
    var t = e.i(615167),
        l = e.i(722978),
        a = e.i(822736),
        r = e.i(751004),
        i = e.i(614909),
        s = e.i(675078),
        n = e.i(145158),
        d = e.i(998569),
        o = e.i(278466);
    let c = (0, i.default)(() => e.A(969945), {
            loadableGenerated: {
                modules: [170438]
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
                }), (0, t.jsx)(o.Link, {
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
        f = ({
            image: e,
            video: i
        }) => {
            let d = (0, n.useRef)(null),
                [o, u] = (0, n.useState)(!1),
                f = (0, a.useInView)(d),
                m = (0, r.useReducedMotion)(),
                h = (0, l.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": o && !m && f && i.src
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
                    className: h
                }), f && !m && i.src && (0, t.jsx)(c, {
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
        m = ({
            image: e,
            video: i
        }) => {
            let d = (0, n.useRef)(null),
                [o, u] = (0, n.useState)(!1),
                f = (0, a.useInView)(d),
                m = (0, r.useReducedMotion)(),
                h = (0, l.default)("absolute cover z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": o && !m && f && i.src
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
                    className: h
                }), f && !m && i.src && (0, t.jsx)(c, {
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
        h = ({
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
        children: !i && (0, t.jsx)(h, {
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
    var x = e.i(749583);
    let g = (0, i.default)(() => e.A(969945), {
            loadableGenerated: {
                modules: [170438]
            },
            ssr: !1
        }),
        p = ({
            title: e,
            description: i,
            image: d,
            video: o,
            actions: c
        }) => {
            let u = (0, n.useRef)(null),
                [f, m] = (0, n.useState)(!1),
                h = (0, a.useInView)(u, {
                    once: !0
                }),
                p = (0, r.useReducedMotion)(),
                v = (0, l.default)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": f && !p && h && o.src
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
                        className: v
                    }), h && !p && o.src && (0, t.jsx)(g, {
                        url: o.src,
                        playing: !0,
                        loop: !0,
                        muted: !0,
                        playsinline: !0,
                        width: "100%",
                        height: "100%",
                        className: "absolute top-0 left-0 brightness-50 [&>video]:object-cover",
                        onReady: () => {
                            m(!0)
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
                        }), c && (0, t.jsxs)("div", {
                            className: "mt-6 flex justify-center gap-4",
                            children: [" ", c.map((e, l) => {
                                if (e.link) return (0, t.jsx)(x.default, {
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
    var v = e.i(115219);
    let b = ({
            title: e,
            description: l,
            image: a,
            brandfolder: r,
            actions: i,
            isHidden: s
        }) => {
            let {
                mapFormActions: n
            } = (0, v.useFormModal)(i), d = n(i);
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
            children: (0, t.jsx)(b, {
                ...e
            })
        });
    e.s(["FullScreenVisualBlockSuspense", () => j], 673300);
    var y = e.i(161107),
        k = e.i(131564);
    let w = (0, i.default)(() => e.A(969945), {
            loadableGenerated: {
                modules: [170438]
            },
            ssr: !1
        }),
        N = ({
            slide: e,
            index: r,
            isActive: i,
            preferReducedMotion: d,
            isVisuallyActive: o,
            clickCallback: c,
            blurredBackground: u
        }) => {
            let f = (0, n.useRef)(null),
                [m, h] = (0, n.useState)(!1),
                x = (0, a.useInView)(f, {
                    once: !0
                }),
                g = (0, l.default)("relative aspect-video overflow-hidden rounded-2xl duration-500", {
                    "opacity-30": !o && !i
                }),
                p = (0, l.default)("absolute h-full w-full transition-opacity duration-500 z-[-1]"),
                v = (0, l.default)("absolute h-full w-full transition-opacity duration-500", {
                    "opacity-0": m && i && !d && x && e.video.src,
                    "object-contain": u
                });
            return (0, t.jsxs)("div", {
                className: g,
                ref: f,
                onClick: () => {
                    !i && c && c()
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
                    className: v
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
                        className: v
                    })]
                }), x && !d && i && e.video.src && (0, t.jsx)(w, {
                    url: e.video.src,
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
                }, `slide-video-${r}`)]
            }, `carousel-text-visual-${r}`)
        },
        _ = ({
            title: e,
            action: l,
            slides: a,
            blurredBackground: i
        }) => {
            let [s, o] = (0, n.useState)(void 0), [c, u] = (0, n.useState)(void 0), [f, m] = (0, n.useState)(1), [h, g] = (0, n.useState)(0), [p, v] = (0, n.useState)(0), b = (0, n.useRef)(null), j = (0, n.useRef)(null), w = (0, n.useRef)(null), _ = (0, r.useReducedMotion)();
            (0, n.useEffect)(() => {
                j.current && w.current && (o(j.current), u(w.current))
            }, [j, w]);
            let L = (0, n.useCallback)((e, t) => {
                    m(t + 1), v(t)
                }, []),
                R = (0, n.useCallback)(e => {
                    g(e)
                }, []),
                A = (0, n.useCallback)(() => {
                    j.current && w.current && j.current.slickPrev()
                }, []),
                S = (0, n.useCallback)(() => {
                    j.current && w.current && j.current.slickNext()
                }, []),
                C = {
                    dots: !1,
                    infinite: !0,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: !1
                },
                M = (0, n.useMemo)(() => a.map((e, l) => (0, t.jsx)("div", {
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
                            children: (0, t.jsx)(x.default, {
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
                T = (0, n.useMemo)(() => a.map((e, l) => (0, t.jsx)(N, {
                    slide: e,
                    index: l,
                    isActive: h === l,
                    isVisuallyActive: p === l,
                    preferReducedMotion: _,
                    clickCallback: S,
                    blurredBackground: i
                }, l)), [a, h, p, _, S]);
            return (0, t.jsx)("section", {
                className: "dark bg-black py-12",
                children: (0, t.jsxs)("div", {
                    className: "container md:max-w-none lg:pr-0",
                    children: [e && (0, t.jsx)(k.default, {
                        title: e,
                        actions: l ? [l] : []
                    }), (0, t.jsxs)("div", {
                        className: "relative mt-8 lg:grid lg:grid-cols-12 lg:gap-2",
                        ref: b,
                        children: [(0, t.jsx)("div", {
                            className: "relative col-start-4 col-end-13 row-start-1",
                            children: (0, t.jsx)("div", {
                                className: "overflow-hidden rounded-2xl lg:rounded-tr-none lg:rounded-br-none",
                                children: (0, t.jsx)("div", {
                                    className: "lg:grid lg:grid-cols-9 lg:gap-2",
                                    children: (0, t.jsx)("div", {
                                        className: "lg:col-span-8",
                                        children: (0, t.jsx)(y.default, {
                                            ...C,
                                            asNavFor: s,
                                            useTransform: !1,
                                            ref: w,
                                            className: "carousel-text-visual_visual m-0",
                                            children: T
                                        })
                                    })
                                })
                            })
                        }), (0, t.jsxs)("div", {
                            className: "relative col-start-1 col-end-4 row-start-1 pb-10",
                            children: [a.length > 1 && (0, t.jsx)("span", {
                                className: "loco-text-body-md text-blue mx-2.5 mt-2.5 mb-4 block lg:mt-0",
                                children: `${f<10?"0":""}${f} / ${a.length<10?"0":""}${a.length}`
                            }), (0, t.jsx)(y.default, {
                                className: "carousel-text-visual_text mt-4 lg:mt-0",
                                ...C,
                                draggable: !1,
                                asNavFor: c,
                                beforeChange: L,
                                afterChange: R,
                                fade: !0,
                                ref: j,
                                children: M
                            }), a.length > 1 && (0, t.jsxs)("div", {
                                className: "absolute bottom-0 left-3 flex gap-2",
                                children: [(0, t.jsx)(d.default, {
                                    direction: "left",
                                    onPress: A,
                                    ariaLabel: "Prev",
                                    variant: "primary"
                                }), (0, t.jsx)(d.default, {
                                    onPress: S,
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
            o = r?.map(d) || [],
            c = i?.map(d) || [],
            u = o.length > 0 ? o : c.length > 0 ? c : [];
        return (0, t.jsx)(t.Fragment, {
            children: !n && (0, t.jsx)(_, {
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
    var t = e.i(615167),
        l = e.i(675078),
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
    var t = e.i(615167),
        l = e.i(458870),
        a = e.i(722978),
        r = e.i(145158);
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
            let [o, c] = (0, r.useState)(a);
            return (0, t.jsxs)("details", {
                open: o,
                onToggle: e => {
                    c(e.target.open)
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
                        children: o ? (0, t.jsx)(s, {}) : (0, t.jsx)(i, {})
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
    var t = e.i(615167),
        l = e.i(822736),
        a = e.i(751004),
        r = e.i(527937),
        i = e.i(233031),
        s = e.i(669486),
        n = e.i(145158),
        d = e.i(722978),
        o = e.i(614909),
        c = e.i(675078),
        u = e.i(783078),
        f = e.i(749583),
        m = e.i(186114),
        h = e.i(430215),
        x = e.i(195051),
        g = e.i(766930);
    let p = ({
            provider: g,
            title: p,
            description: v,
            action: b,
            image: j,
            video: y,
            videoInline: k = !1,
            buttonLabel: w = "Play video",
            blockedMessage: N,
            consentButtonLabel: _,
            heading: L = "h3"
        }) => {
            let R = (0, h.default)(`(min-width: ${u.default.Medium}px)`),
                A = (0, n.useRef)(null),
                [S, C] = (0, n.useState)(!1),
                M = (0, l.useInView)(A),
                T = (0, a.useReducedMotion)(),
                $ = null;
            "youtube" === g ? $ = (0, o.default)(() => e.A(802241), {
                loadableGenerated: {
                    modules: [966543]
                },
                ssr: !1
            }) : "brandfolder" === g && ($ = (0, o.default)(() => e.A(969945), {
                loadableGenerated: {
                    modules: [170438]
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
            }), O = (0, i.useTransform)(P, [0, 1], ["60%", "100%"]), E = (0, i.useTransform)(P, [0, 1], [1.75, 1]), B = (0, i.useTransform)(P, [0, 1], ["brightness(50%)", "brightness(100%)"]), I = () => {
                k && "brandfolder" === g && C(!0)
            }, z = () => {
                C(!0)
            }, U = (0, d.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": S && !T && M && y?.src
            });
            return (0, t.jsxs)("div", {
                ref: A,
                className: "flex flex-col gap-4 border-t border-gray-300 p-6 md:flex-row dark:border-gray-800 dark:bg-black [&_.consent]:md:justify-start [&_.consent>div.text]:md:w-11/12",
                children: [R && (0, t.jsx)("div", {
                    className: "md:w-[50%]",
                    children: (0, t.jsxs)(s.m.div, {
                        style: {
                            width: O,
                            filter: B
                        },
                        className: "relative aspect-video overflow-hidden rounded-lg",
                        children: [(0, t.jsxs)(s.m.div, {
                            style: {
                                scale: E
                            },
                            className: "relative h-full w-full",
                            children: [y && (0, t.jsx)(t.Fragment, {
                                children: M && !T && y?.src && $ && (0, t.jsx)($, {
                                    url: y.src,
                                    playing: S,
                                    loop: k && "brandfolder" === g,
                                    muted: k && "brandfolder" === g,
                                    playsinline: k && "brandfolder" === g,
                                    width: "100%",
                                    height: "100%",
                                    className: "[&>video]:object-cover",
                                    onReady: I,
                                    onPlay: z,
                                    controls: !k || "brandfolder" !== g,
                                    config: F
                                })
                            }), j && (0, t.jsxs)("div", {
                                className: U,
                                onClick: z,
                                children: [y?.src && (!k || "brandfolder" !== g) && (0, t.jsx)(m.default, {
                                    handleIsPlaying: z,
                                    className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                    label: w
                                }), (0, t.jsx)(c.default, {
                                    src: j.src,
                                    placeholder: "blur",
                                    blurDataURL: j.placeholder,
                                    fill: !0,
                                    alt: j.alt ?? "",
                                    className: "cover absolute object-cover brightness-75",
                                    sizes: `(min-width: ${u.default.Large}px) 33vw, (min-width: ${u.default.Medium}px) 50vw, 100vw`
                                })]
                            })]
                        }), y?.src?.includes("youtube.com") && (0, t.jsx)(x.default, {
                            blockedMessage: N,
                            consentButtonLabel: _
                        })]
                    })
                }), !R && (0, t.jsxs)("div", {
                    className: "relative aspect-video overflow-hidden rounded-lg md:hidden",
                    children: [(0, t.jsxs)("div", {
                        className: "relative h-full w-full",
                        children: [y && (0, t.jsx)(t.Fragment, {
                            children: M && !T && y?.src && $ && (0, t.jsx)($, {
                                url: y.src,
                                playing: S,
                                loop: k && "brandfolder" === g,
                                muted: k && "brandfolder" === g,
                                playsinline: k && "brandfolder" === g,
                                width: "100%",
                                height: "100%",
                                className: "[&>video]:object-cover",
                                onReady: I,
                                onPlay: z,
                                controls: !k && "brandfolder" !== g,
                                config: F
                            })
                        }), j && (0, t.jsxs)("div", {
                            className: U,
                            onClick: z,
                            children: [y?.src && (!k || "brandfolder" !== g) && (0, t.jsx)(m.default, {
                                handleIsPlaying: z,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: w
                            }), (0, t.jsx)(c.default, {
                                src: j.src,
                                placeholder: "blur",
                                blurDataURL: j.placeholder,
                                fill: !0,
                                alt: j.alt ?? "",
                                className: "cover absolute object-cover brightness-75",
                                sizes: `(min-width: ${u.default.Large}px) 33vw, (min-width: ${u.default.Medium}px) 50vw, 100vw`
                            })]
                        })]
                    }), y?.src?.includes("youtube.com") && (0, t.jsx)(x.default, {
                        blockedMessage: N,
                        consentButtonLabel: _
                    })]
                }), (0, t.jsx)("div", {
                    className: "md:ml-5 md:w-[25%]",
                    children: (0, t.jsx)(L, {
                        className: "loco-text-body-lg-medium",
                        children: p
                    })
                }), (0, t.jsx)("div", {
                    className: "flex grow flex-col md:w-[50%]",
                    children: (0, t.jsxs)("div", {
                        className: "flex shrink-0 grow flex-col justify-between",
                        children: [(0, t.jsx)("div", {
                            className: "loco-text-body text-gray-700 dark:text-gray-400",
                            children: v
                        }), (0, t.jsx)("div", {
                            className: "mt-8",
                            children: (0, t.jsx)(f.default, {
                                href: b?.href,
                                target: b?.target,
                                outlined: !0,
                                rounded: !0,
                                hasArrow: !0,
                                children: b?.label
                            })
                        })]
                    })
                })]
            })
        },
        v = ({
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
    e.s(["default", 0, ({
        theme: e,
        features: l,
        isHidden: a,
        featuresHeading: r
    }) => {
        let i = l?.map(b);
        return (0, t.jsx)(t.Fragment, {
            children: !a && (0, t.jsx)(v, {
                theme: "dark" === e ? "dark" : "light",
                features: i,
                featuresHeading: "h2" === r || "h4" === r ? r : "h3"
            })
        })
    }], 277965)
}, 725794, e => {
    "use strict";
    var t = e.i(145158),
        l = e.i(411110);
    let a = new Map([
        ["bold", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"
        }))],
        ["duotone", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
            opacity: "0.2"
        }), t.default.createElement("path", {
            d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"
        }))],
        ["fill", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"
        }))],
        ["light", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"
        }))],
        ["regular", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"
        }))],
        ["thin", t.default.createElement(t.default.Fragment, null, t.default.createElement("path", {
            d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"
        }))]
    ]);
    var r = Object.defineProperty,
        i = Object.defineProperties,
        s = Object.getOwnPropertyDescriptors,
        n = Object.getOwnPropertySymbols,
        d = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable,
        c = (e, t, l) => t in e ? r(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: l
        }) : e[t] = l;
    let u = (0, t.forwardRef)((e, r) => t.default.createElement(l.default, i(((e, t) => {
        for (var l in t || (t = {})) d.call(t, l) && c(e, l, t[l]);
        if (n)
            for (var l of n(t)) o.call(t, l) && c(e, l, t[l]);
        return e
    })({
        ref: r
    }, e), s({
        weights: a
    }))));
    u.displayName = "Info", e.s(["Info", () => u], 725794)
}, 401861, 841889, e => {
    "use strict";
    var t = e.i(615167),
        l = e.i(722978),
        a = e.i(145158),
        r = e.i(725794),
        i = e.i(493164);
    let s = ({
            title: e,
            text: s,
            action: n,
            truncate: d,
            className: o = "",
            isContained: c,
            dismiss: u
        }) => {
            let f = (0, a.useMemo)(() => `unity-alert-${s?.substring(0,30).replaceAll(" ","_")}`, [s]),
                [m, h] = (0, a.useState)(!0),
                [x, g] = (0, a.useState)(!1);
            return ((0, a.useEffect)(() => {
                localStorage?.getItem(f) && g(!0)
            }, [f]), x) ? null : (0, t.jsx)("div", {
                className: (0, l.clsx)({
                    container: c
                }),
                children: (0, t.jsxs)("div", {
                    className: (0, l.clsx)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
                        flex: u?.enabled
                    }, {
                        "rounded-lg": c
                    }, o),
                    children: [(0, t.jsx)(r.Info, {
                        size: 18,
                        className: "ph-fill fill-blue absolute top-5 left-[1rem]",
                        weight: "fill"
                    }), (0, t.jsxs)("div", {
                        className: "",
                        children: [e && (0, t.jsx)("div", {
                            className: "text-small-bold",
                            children: e
                        }), (0, t.jsxs)("div", {
                            children: [(0, t.jsx)("div", {
                                className: (0, l.clsx)({
                                    "line-clamp-4 sm:line-clamp-2": d?.enabled && m
                                }),
                                children: s
                            }), d?.enabled && (0, t.jsx)("button", {
                                onClick: () => h(!m),
                                className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                children: m ? d.seeMoreLabel : d.seeLessLabel
                            })]
                        })]
                    }), (n?.href || u?.enabled) && (0, t.jsxs)("div", {
                        className: "sm:auto inline-flex w-fit items-center gap-4 [&>*]:whitespace-nowrap",
                        children: [n && (0, t.jsx)(i.default, {
                            className: "mx-auto mt-0 inline-block whitespace-nowrap",
                            href: n.href,
                            target: n.target || "_self",
                            size: "tiny",
                            underline: !0,
                            children: n.title
                        }), u?.enabled && (0, t.jsx)("button", {
                            onClick: () => {
                                g(!0), localStorage.setItem(f, Date.now().toString())
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
            theme: i,
            truncate: n,
            dismiss: d,
            isContained: o,
            isHidden: c,
            spacing: u
        }) => {
            let f = (0, l.clsx)({
                "pt-10": u?.top
            }, {
                "pb-10": u?.bottom
            }, {
                "dark bg-black": "dark" === i
            });
            return c || !a ? null : (0, t.jsx)("section", {
                className: f,
                children: (0, t.jsx)(s, {
                    title: e,
                    text: a,
                    isContained: o,
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
    var t = e.i(634853),
        l = e.i(458870),
        a = e.i(31588);

    function r(e, i = []) {
        var s, n;
        let d, o, c, u, f, m = (0, t.usePathname)(),
            h = (0, l.useLocale)(),
            x = h !== a.defaultLocale ? m.replace(`/${h}`, "") : m;
        return {
            shouldDisplayMTBanner: h !== a.defaultLocale && e?.translationType === "MT" && !i.includes(x),
            updatedBlocks: (s = e.blocks ?? [], n = e.machineTranslationDisclaimer, d = s.reduce((e, t, l) => ["hero", "alternateNavigation", "headliner"].includes(t._type) ? l : e, -1), o = [...s], c = o[d + 1]?._type === "alternateNavigationAnchor" || o[d + 1]?._type === "anchorButton" ? o[d + 2] : o[d + 1], u = c?.theme ?? null, f = {
                _type: "alert",
                text: n?.text,
                isContained: !0,
                spacing: {
                    bottom: !0,
                    top: !0
                },
                ...u && {
                    theme: u
                },
                action: {
                    text: n?.action?.title,
                    fieldLink: {
                        linkReference: {
                            href: {
                                current: `${window.location.origin}${x}`
                            },
                            target: "_self"
                        }
                    }
                }
            }, -1 === d ? o.unshift(f) : o.splice(d + 1, 0, f), o),
            redirectPathName: x
        }
    }
    e.s(["useMTBanner", () => r], 246916)
}, 996332, 422664, e => {
    "use strict";
    var t = e.i(615167),
        l = e.i(722978),
        a = e.i(675078);
    let r = ({
            size: e = "m",
            url: r,
            alt: i = "profile picture"
        }) => {
            let {
                width: s,
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
            } [e], d = (0, l.default)("inline-block", "rounded-full overflow-hidden relative shrink-0 mr-3 hidden lg:block md:block");
            return (0, t.jsx)("div", {
                className: d,
                children: (0, t.jsx)(a.default, {
                    src: r,
                    alt: i,
                    width: s,
                    height: n
                })
            })
        },
        i = ({
            avatar: e,
            name: a,
            company: i,
            role: s,
            size: n = "m"
        }) => {
            let d = (0, l.default)("text-gray-900 dark:text-gray-100 pb-1", {
                    "loco-caption-lg-semibold": "m" === n,
                    "loco-caption-sm-semibold": "s" === n || "xs" === n || "xxs" === n
                }),
                o = (0, l.default)("text-gray-700 dark:text-gray-300 tracking-normal", {
                    "loco-text-body-xs-semibold": "m" === n,
                    "loco-text-body-sm-medium": "s" === n || "xs" === n || "xxs" === n
                });
            return (0, t.jsxs)("div", {
                className: "flex items-center",
                children: [e && (0, t.jsx)(r, {
                    url: e,
                    size: n,
                    alt: a
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col",
                    children: [(0, t.jsxs)("span", {
                        className: d,
                        children: [a?.toUpperCase(), " ", i && a && "/" || "", " ", i?.toUpperCase()]
                    }), (0, t.jsx)("span", {
                        className: o,
                        children: s
                    })]
                })]
            })
        };
    e.s(["default", 0, i], 422664);
    let s = ({
        content: e,
        author: a,
        className: r = "",
        textClassName: s = ""
    }) => {
        let n = (0, l.default)("p-6 rounded-xl", r),
            d = (0, l.default)("mb-6 text-gray-800 dark:text-gray-200", s);
        return (0, t.jsxs)("div", {
            className: n,
            children: [(0, t.jsx)("div", {
                className: d,
                children: e
            }), (0, t.jsx)(i, {
                ...a
            })]
        })
    };
    e.s(["default", 0, ({
        title: e,
        testimonials: a,
        layout: r = "one-layout",
        testimonialVariant: i = "default",
        className: n = ""
    }) => {
        let d = (0, l.default)({
                "one-layout": "col-span-12",
                "two-layout": "col-span-12 md:col-span-6 flex",
                "three-layout": "col-span-12 md:col-span-6 lg:col-span-4 flex"
            } [r]),
            o = (0, l.default)("one-layout" !== r && "flex flex-col justify-between w-full", {
                "bg-gray-100 dark:bg-gray-900": "default" === i
            }, {
                "border border-gray-200 dark:border-gray-700": "outlined" === i && !e
            }),
            c = (0, l.default)({
                "auto-rows-fr": "one-layout" !== r
            }, "grid grid-cols-12 gap-4", n),
            u = (0, l.default)("container py-0 md:py-16", {
                "bg-gray-100 dark:bg-gray-900 rounded-2xl": e,
                "border border-gray-200 dark:border-gray-700 bg-transparent": "outlined" === i && e
            }),
            f = (0, l.default)({
                "loco-text-body-sm-medium": "two-layout" === r || "three-layout" === r,
                "loco-text-body-lg-medium": "one-layout" === r
            });
        return (0, t.jsxs)("div", {
            className: u,
            children: [e && (0, t.jsx)("div", {
                className: "loco-text-heading-sm p-6",
                children: e
            }), (0, t.jsx)("div", {
                className: c,
                children: a?.map((e, l) => {
                    let {
                        content: a,
                        author: r,
                        _key: i
                    } = e;
                    return (0, t.jsx)("div", {
                        className: d,
                        children: (0, t.jsx)(s, {
                            content: a,
                            author: r,
                            className: o,
                            textClassName: f
                        })
                    }, `${i}-${l}`)
                })
            })]
        })
    }], 996332)
}, 480880, e => {
    "use strict";
    var t = e.i(615167),
        l = e.i(145158);
    e.s(["default", 0, ({
        blocks: e,
        blockMap: a,
        ...r
    }) => (0, t.jsx)(t.Fragment, {
        children: e?.map((e, i) => {
            let s = e?._type,
                n = a[s];
            return e.isHidden ? null : n ? (0, t.jsx)("div", {
                children: l.default.createElement(n, {
                    key: `block-${i}`,
                    ...e,
                    blockIndex: i + 1,
                    blockType: s,
                    blockKey: `${s}-${i}`,
                    ...r
                })
            }, `block-${i}`) : void 0
        })
    })])
}, 239145, (e, t, l) => {
    t.exports = function(e, t) {
        for (var l = -1, a = null == e ? 0 : e.length, r = Array(a); ++l < a;) r[l] = t(e[l], l, e);
        return r
    }
}, 873021, (e, t, l) => {
    var a = e.r(328042),
        r = e.r(239145),
        i = e.r(778116),
        s = e.r(692558),
        n = 1 / 0,
        d = a ? a.prototype : void 0,
        o = d ? d.toString : void 0;
    t.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (i(t)) return r(t, e) + "";
        if (s(t)) return o ? o.call(t) : "";
        var l = t + "";
        return "0" == l && 1 / t == -n ? "-0" : l
    }
}, 553050, (e, t, l) => {
    var a = e.r(873021);
    t.exports = function(e) {
        return null == e ? "" : a(e)
    }
}, 343346, (e, t, l) => {
    t.exports = function(e, t) {
        return e === t || e != e && t != t
    }
}, 647562, (e, t, l) => {
    var a = e.r(778116),
        r = e.r(692558),
        i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
        s = /^\w*$/;
    t.exports = function(e, t) {
        if (a(e)) return !1;
        var l = typeof e;
        return !!("number" == l || "symbol" == l || "boolean" == l || null == e || r(e)) || s.test(e) || !i.test(e) || null != t && e in Object(t)
    }
}, 977902, (e, t, l) => {
    t.exports = e.r(581511)(Object, "create")
}, 708867, (e, t, l) => {
    var a = e.r(977902);
    t.exports = function() {
        this.__data__ = a ? a(null) : {}, this.size = 0
    }
}, 447265, (e, t, l) => {
    t.exports = function(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= !!t, t
    }
}, 150095, (e, t, l) => {
    var a = e.r(977902),
        r = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        if (a) {
            var l = t[e];
            return "__lodash_hash_undefined__" === l ? void 0 : l
        }
        return r.call(t, e) ? t[e] : void 0
    }
}, 884942, (e, t, l) => {
    var a = e.r(977902),
        r = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        var t = this.__data__;
        return a ? void 0 !== t[e] : r.call(t, e)
    }
}, 855558, (e, t, l) => {
    var a = e.r(977902);
    t.exports = function(e, t) {
        var l = this.__data__;
        return this.size += +!this.has(e), l[e] = a && void 0 === t ? "__lodash_hash_undefined__" : t, this
    }
}, 298435, (e, t, l) => {
    var a = e.r(708867),
        r = e.r(447265),
        i = e.r(150095),
        s = e.r(884942),
        n = e.r(855558);

    function d(e) {
        var t = -1,
            l = null == e ? 0 : e.length;
        for (this.clear(); ++t < l;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    d.prototype.clear = a, d.prototype.delete = r, d.prototype.get = i, d.prototype.has = s, d.prototype.set = n, t.exports = d
}, 765776, (e, t, l) => {
    t.exports = function() {
        this.__data__ = [], this.size = 0
    }
}, 641664, (e, t, l) => {
    var a = e.r(343346);
    t.exports = function(e, t) {
        for (var l = e.length; l--;)
            if (a(e[l][0], t)) return l;
        return -1
    }
}, 915386, (e, t, l) => {
    var a = e.r(641664),
        r = Array.prototype.splice;
    t.exports = function(e) {
        var t = this.__data__,
            l = a(t, e);
        return !(l < 0) && (l == t.length - 1 ? t.pop() : r.call(t, l, 1), --this.size, !0)
    }
}, 857624, (e, t, l) => {
    var a = e.r(641664);
    t.exports = function(e) {
        var t = this.__data__,
            l = a(t, e);
        return l < 0 ? void 0 : t[l][1]
    }
}, 219301, (e, t, l) => {
    var a = e.r(641664);
    t.exports = function(e) {
        return a(this.__data__, e) > -1
    }
}, 682947, (e, t, l) => {
    var a = e.r(641664);
    t.exports = function(e, t) {
        var l = this.__data__,
            r = a(l, e);
        return r < 0 ? (++this.size, l.push([e, t])) : l[r][1] = t, this
    }
}, 990543, (e, t, l) => {
    var a = e.r(765776),
        r = e.r(915386),
        i = e.r(857624),
        s = e.r(219301),
        n = e.r(682947);

    function d(e) {
        var t = -1,
            l = null == e ? 0 : e.length;
        for (this.clear(); ++t < l;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    d.prototype.clear = a, d.prototype.delete = r, d.prototype.get = i, d.prototype.has = s, d.prototype.set = n, t.exports = d
}, 817416, (e, t, l) => {
    var a = e.r(298435),
        r = e.r(990543),
        i = e.r(764138);
    t.exports = function() {
        this.size = 0, this.__data__ = {
            hash: new a,
            map: new(i || r),
            string: new a
        }
    }
}, 365867, (e, t, l) => {
    t.exports = function(e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
}, 476501, (e, t, l) => {
    var a = e.r(365867);
    t.exports = function(e, t) {
        var l = e.__data__;
        return a(t) ? l["string" == typeof t ? "string" : "hash"] : l.map
    }
}, 792520, (e, t, l) => {
    var a = e.r(476501);
    t.exports = function(e) {
        var t = a(this, e).delete(e);
        return this.size -= !!t, t
    }
}, 349966, (e, t, l) => {
    var a = e.r(476501);
    t.exports = function(e) {
        return a(this, e).get(e)
    }
}, 649884, (e, t, l) => {
    var a = e.r(476501);
    t.exports = function(e) {
        return a(this, e).has(e)
    }
}, 884711, (e, t, l) => {
    var a = e.r(476501);
    t.exports = function(e, t) {
        var l = a(this, e),
            r = l.size;
        return l.set(e, t), this.size += +(l.size != r), this
    }
}, 158774, (e, t, l) => {
    var a = e.r(817416),
        r = e.r(792520),
        i = e.r(349966),
        s = e.r(649884),
        n = e.r(884711);

    function d(e) {
        var t = -1,
            l = null == e ? 0 : e.length;
        for (this.clear(); ++t < l;) {
            var a = e[t];
            this.set(a[0], a[1])
        }
    }
    d.prototype.clear = a, d.prototype.delete = r, d.prototype.get = i, d.prototype.has = s, d.prototype.set = n, t.exports = d
}, 528535, (e, t, l) => {
    var a = e.r(158774);

    function r(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
        var l = function() {
            var a = arguments,
                r = t ? t.apply(this, a) : a[0],
                i = l.cache;
            if (i.has(r)) return i.get(r);
            var s = e.apply(this, a);
            return l.cache = i.set(r, s) || i, s
        };
        return l.cache = new(r.Cache || a), l
    }
    r.Cache = a, t.exports = r
}, 593613, (e, t, l) => {
    var a = e.r(528535);
    t.exports = function(e) {
        var t = a(e, function(e) {
                return 500 === l.size && l.clear(), e
            }),
            l = t.cache;
        return t
    }
}, 837344, (e, t, l) => {
    var a = e.r(593613),
        r = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
        i = /\\(\\)?/g;
    t.exports = a(function(e) {
        var t = [];
        return 46 === e.charCodeAt(0) && t.push(""), e.replace(r, function(e, l, a, r) {
            t.push(a ? r.replace(i, "$1") : l || e)
        }), t
    })
}, 6205, (e, t, l) => {
    var a = e.r(778116),
        r = e.r(647562),
        i = e.r(837344),
        s = e.r(553050);
    t.exports = function(e, t) {
        return a(e) ? e : r(e, t) ? [e] : i(s(e))
    }
}, 812232, (e, t, l) => {
    var a = e.r(692558),
        r = 1 / 0;
    t.exports = function(e) {
        if ("string" == typeof e || a(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -r ? "-0" : t
    }
}, 555902, (e, t, l) => {
    var a = e.r(6205),
        r = e.r(812232);
    t.exports = function(e, t) {
        t = a(t, e);
        for (var l = 0, i = t.length; null != e && l < i;) e = e[r(t[l++])];
        return l && l == i ? e : void 0
    }
}, 375194, (e, t, l) => {
    var a = e.r(555902);
    t.exports = function(e, t, l) {
        var r = null == e ? void 0 : a(e, t);
        return void 0 === r ? l : r
    }
}, 326388, e => {
    "use strict";
    var t = e.i(955592),
        l = e.i(375194),
        a = e.i(433519),
        r = e.i(544923);
    let i = (e, t) => t?.country ? e?.country?.toLowerCase().localeCompare(t?.country.toLowerCase()) || 0 : -1,
        s = {
            currency: "USD"
        },
        n = e => e?.text !== null && e?.text !== void 0 || (e?.children ? e.children.every(n) : !!Array.isArray(e) && e.every(n));
    e.s(["default", 0, () => {
        let {
            state: e
        } = (0, a.default)(), [d] = (0, r.default)("location", "US"), o = t => {
            let l = t?.variantPrices.sort(i),
                a = e => l?.find(t => t.currency?.toLowerCase() === e?.currency?.toLowerCase() && (t.country?.toLowerCase() === d?.toLowerCase() || !t.country))?.price;
            return a(e) ? [a(e), !1] : [a(s), !0]
        }, c = e => {
            if (!e) return {};
            let {
                productVariants: t,
                productKey: l
            } = e, a = {
                productKey: null
            };
            return t?.forEach(e => {
                let [t] = o(e);
                e?.productVariantName && (a[e.productVariantName] = {
                    price: t
                })
            }), a
        }, u = (e, l) => {
            if (!l || !e) return e;
            let a = c(l);
            return t.default.render(e, a)
        }, f = (e, a) => {
            if (!a || !e) return e;
            let r = e.match(/{{\s*[\w\.-]+\s*}}/g)?.map(e => e?.match(/[\w\.-]+/)?.[0] || "");
            if (void 0 === r) return e;
            let i = c(a);
            return a && r?.every(e => (0, l.default)(i, e)) ? t.default.render(e, i) : null
        }, m = (e, t, l = u) => e?.map(e => {
            if (e?._type === "block") return {
                ...e,
                children: m(e.children, t, l)
            };
            if (e?._type !== "span") return e;
            {
                let a = l(e.text, t);
                return {
                    ...e,
                    text: a
                }
            }
        });
        return {
            currency: e.currency,
            location: d,
            appendCommerceData: u,
            appendCommerceDataToPortableText: m,
            renderWithAllVariablesToPortableText: (e, t) => {
                let l = m(e, t, f);
                return n(l) ? l : null
            },
            getPrice: o,
            appendCommerceDataForMultipleProducts: (e, l) => {
                let a;
                if (!l || !e) return e;
                let r = (a = {
                    productKey: null
                }, l.forEach(e => {
                    if (!e) return {};
                    let {
                        productVariants: t
                    } = e;
                    t?.forEach(e => {
                        let [t] = o(e);
                        e?.productVariantName && (a[e.productVariantName] = {
                            price: t
                        })
                    })
                }), a);
                return t.default.render(e, r)
            }
        }
    }], 326388)
}, 787213, e => {
    "use strict";
    var t = e.i(615167),
        l = e.i(996332);
    e.s(["default", 0, ({
        title: e,
        layout: a,
        testimonialVariant: r,
        testimonials: i,
        theme: s,
        hideAuthorImage: n,
        isHidden: d
    }) => {
        let o = i?.map((e, t) => ({
            content: e?.content,
            author: {
                name: e?.author.name,
                company: e?.author.company,
                role: e?.author.role,
                avatar: e?.author.avatar?.file?.asset?.url
            },
            key: t
        })) ?? [];
        return (0, t.jsx)(t.Fragment, {
            children: !d && (0, t.jsx)("section", {
                className: "dark" === s ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "dark:bg-gray-900",
                    children: (0, t.jsx)(l.default, {
                        testimonials: o,
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
    var t = e.i(615167),
        l = e.i(145158),
        a = e.i(210310),
        r = e.i(326388);
    e.s(["default", 0, ({
        theme: e,
        isHidden: i,
        verticalHeadingClass: s,
        productCatalogItems: n,
        htmlTableContent: d
    }) => {
        let {
            appendCommerceDataForMultipleProducts: o
        } = (0, r.default)(), c = (0, l.useCallback)(e => {
            let t = o(e, n);
            return t || e
        }, [n, o]), u = (0, l.useMemo)(() => {
            let e = d.rows.map(e => (e.cells = e.cells.map(e => c(e)), e));
            return {
                ...d,
                rows: e
            }
        }, [d, c]);
        return (0, t.jsx)(t.Fragment, {
            children: !i && (0, t.jsx)("section", {
                className: "dark" === e ? "dark" : "",
                children: (0, t.jsx)("div", {
                    className: "mx-auto max-w-7xl p-6 dark:bg-black",
                    children: (0, t.jsx)(a.default, {
                        verticalHeadingClass: s || "",
                        table: u
                    })
                })
            })
        })
    }], 725751)
}, 123849, e => {
    "use strict";
    var t = e.i(615167),
        l = e.i(722978),
        a = e.i(954936);
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
    var n = e.i(78389);
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
}, 998569, e => {
    "use strict";
    var t = e.i(615167),
        l = e.i(145158),
        a = e.i(278466),
        r = e.i(722978),
        i = e.i(77999),
        s = e.i(294845),
        n = e.i(93732),
        d = e.i(115565),
        o = e.i(892164),
        c = e.i(191695),
        u = e.i(939115);
    let f = (0, l.forwardRef)(function({
        variant: e = "secondary",
        ariaLabel: f,
        size: m = "medium",
        direction: h = "right",
        className: x = "",
        href: g,
        onPress: p,
        isDisabled: v,
        isForcedHover: b,
        tag: j = "button",
        ...y
    }, k) {
        let w = (0, c.useObjectRef)(k),
            [N, _] = (0, l.useState)(!1),
            {
                buttonProps: L
            } = (0, i.useButton)({
                variant: e,
                size: m,
                direction: h,
                className: x,
                elementType: g ? "a" : j,
                onPress: p,
                href: g,
                isDisabled: v,
                ...y
            }, w),
            {
                hoverProps: R,
                isHovered: A
            } = (0, s.useHover)({
                isDisabled: v
            }),
            {
                focusProps: S
            } = (0, n.useFocus)({
                onFocusChange(e) {
                    _(e && (0, d.isFocusVisible)() || !1)
                }
            }),
            C = (0, r.clsx)("btn-outlined cursor-pointer flex justify-start items-center outline-hidden border-solid border-2 rounded-full overflow-hidden", {
                primary: "btn-primary",
                secondary: "btn-secondary"
            } [e], {
                medium: "w-9 h-9",
                large: "w-14 h-14"
            } [m], {
                right: "",
                up: "-rotate-90",
                left: "rotate-180",
                down: "rotate-90"
            } [h], {
                hovered: A || b
            }, {
                focused: N
            }, {
                "!border-gray-400 pointer-events-none": v
            }, x),
            M = (0, r.clsx)("w-full transition-all duration-300 shrink-0 ", {
                "fill-gray-400": v
            }),
            T = (0, r.clsx)(M, {
                "fill-white": "primary" === e
            }, {
                "fill-white dark:fill-black": "secondary" === e
            }, {
                "-ml-[100%]": !A && !N && !b
            }, {
                "ml-0": A || N || b
            }),
            $ = (0, r.clsx)(M, "fill-black dark:fill-white");
        if (g) {
            let e = (0, o.mergeProps)(L, R, S);
            return (0, t.jsxs)(a.Link, {
                ...e,
                ref: w,
                "aria-label": f,
                className: C,
                href: g,
                legacyBehavior: !0,
                children: [(0, t.jsx)(u.ArrowIcon, {
                    className: T
                }), (0, t.jsx)(u.ArrowIcon, {
                    className: $
                })]
            })
        }
        return (0, t.jsxs)(j, {
            ...(0, o.mergeProps)(L, R, S),
            ref: w,
            "aria-label": f,
            className: C,
            tabIndex: "span" == j ? -1 : 0,
            children: [(0, t.jsx)(u.ArrowIcon, {
                className: T
            }), (0, t.jsx)(u.ArrowIcon, {
                className: $
            })]
        })
    });
    e.s(["default", 0, f])
}, 186114, e => {
    "use strict";
    var t = e.i(615167);
    e.s(["default", 0, ({
        className: e,
        handleIsPlaying: l,
        label: a,
        ...r
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsx)("button", {
            className: "transition-bg bg-blue hover:bg-blue-dark flex h-20 w-20 transform items-center justify-center rounded-full duration-300",
            onClick: l,
            type: "button",
            "aria-label": a,
            ...r,
            children: (0, t.jsx)("span", {
                className: "block h-6 w-6",
                children: (0, t.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20",
                    children: (0, t.jsx)("path", {
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
    var t = e.i(615167),
        l = e.i(145158),
        a = e.i(278466),
        r = e.i(722978),
        i = e.i(749583),
        s = e.i(998569);
    let n = ({
            title: e,
            titleTag: n,
            description: d,
            action: o,
            fullWidth: c
        }) => {
            let [u, f] = (0, l.useState)(!1), m = "relative block border-t border-solid border-gray-200 dark:border-gray-700", h = (0, t.jsxs)("div", {
                className: (0, r.default)("grid gap-4 pt-2 pb-8 md:grid-cols-3", {
                    "md:grid-cols-[2fr_1fr_auto]": c
                }),
                children: [(0, t.jsx)(n || "h2", {
                    className: "loco-text-heading-xs",
                    children: e
                }), (0, t.jsx)("div", {
                    children: (0, t.jsx)("p", {
                        className: "loco-text-body-sm opacity-70",
                        children: d
                    })
                }), o && o?.label && (0, t.jsx)("div", {
                    className: "shrink-0 text-right",
                    children: (0, t.jsx)(i.default, {
                        tag: "span",
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        active: u,
                        children: o.label
                    })
                }), o && !o?.label && (0, t.jsx)("div", {
                    className: "flex shrink-0 justify-end text-right",
                    children: (0, t.jsx)(s.default, {
                        variant: "primary"
                    })
                })]
            });
            return o ? (0, t.jsx)(a.Link, {
                href: o.href,
                target: o.target,
                title: o.label,
                onMouseOver: () => {
                    f(!0)
                },
                onMouseLeave: () => {
                    f(!1)
                },
                className: m,
                children: h
            }) : (0, t.jsx)("div", {
                className: m,
                children: h
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
    var t = e.i(615167),
        l = e.i(145158),
        a = e.i(78389),
        r = e.i(447452),
        i = e.i(775041),
        s = e.i(779712),
        n = e.i(869324);
    e.s(["default", 0, ({
        actions: e,
        backgroundImage: d,
        description: o,
        eyebrow: c,
        image: u,
        mediaAspectRatio: f,
        mediaPosition: m,
        size: h,
        variant: x,
        title: g,
        theme: p,
        youtubeVideo: v,
        brandfolderVideo: b,
        buttonLabel: j,
        videoInline: y,
        blockKey: k,
        isHidden: w,
        consent: N,
        featureList: _,
        productCategoryFilter: L
    }) => {
        let [R] = (0, l.useContext)(i.FiltersContext);
        if (R.categories && R.categories.length > 0 && 1 === R.categories.findIndex(({
                _id: e
            }) => e === R.selectedCategory) && null != R.selectedSubcategory) return null;
        let {
            subcategories: A,
            productCatalogItems: S
        } = R.categories.find(({
            _id: e
        }) => e === R.selectedCategory) || {}, C = null != R.selectedSubcategory ? (A || []).find(({
            _id: e
        }) => e === R.selectedSubcategory) : null, M = !L || L.categories?.find(e => e._id === R.selectedCategory) != null && (null == C || !L.subcategories || L.subcategories.some(({
            _id: e
        }) => e === R.selectedSubcategory)), T = e?.map(({
            title: e,
            link: t
        }) => {
            let l = t?.linkReference?.target === "_blank" ? "_blank" : "_self";
            return {
                label: e,
                href: t?.linkReference?.href.current || "/",
                target: l
            }
        }), $ = _?.map((e, t) => {
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
                    if (!t && _?.[e]) {
                        let t = _[e];
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
            children: !w && M && (0, t.jsx)("section", {
                className: "dark" === p ? "dark" : "",
                children: (0, t.jsx)(r.default, {
                    actions: T,
                    aspectRatio: "16:9" === f ? "16:9" : "1:1" === f ? "1:1" : void 0,
                    backgroundImage: d,
                    description: (0, t.jsx)(a.PortableText, {
                        value: o
                    }),
                    eyebrow: c,
                    image: {
                        src: (0, s.urlForImage)(u?.file?.asset?.url || "")?.auto("format")?.url() || "",
                        placeholder: u?.file?.asset.metadata?.lqip || "",
                        alt: u?.alt || "",
                        caption: u?.caption || ""
                    },
                    mediaPosition: "right" === m ? "right" : "left" === m ? "left" : void 0,
                    size: "large" === h ? "large" : "default" === h ? "default" : void 0,
                    variant: "gdc2026" === x ? "gdc2026" : "default" === x ? "default" : void 0,
                    title: g,
                    youtubeVideo: v,
                    brandfolderVideo: {
                        src: b?.muxHLSURL || ""
                    },
                    videoInline: y,
                    buttonLabel: j,
                    blockKey: k,
                    blockedMessage: N?.blockedMessage,
                    consentButtonLabel: N?.consentButtonLabel || "",
                    featureList: $
                })
            })
        })
    }], 649042)
}, 164163, e => {
    "use strict";
    var t = e.i(615167),
        l = e.i(722978),
        a = e.i(675078),
        r = e.i(825610),
        i = e.i(749583),
        s = e.i(596889),
        n = e.i(954936);
    e.s(["default", 0, ({
        title: e,
        cards: d,
        layout: o = "four-cards",
        cardVariant: c = "default",
        scroll: u = !1,
        cardsHeading: f
    }) => {
        let m = f || (e ? "h3" : "h2"),
            h = (0, l.clsx)("gap-4 md:gap-8", {
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
                    className: h,
                    children: d?.map((d, f) => {
                        let h = (0, l.clsx)("flex flex-wrap flex-row", !u && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[o], u && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[o]),
                            x = (0, l.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === c || "transparent" === c
                            }),
                            g = (0, l.clsx)({
                                "p-6": "default" === c || "transparent" === c,
                                "py-6": "padded" === c
                            }),
                            p = (0, l.clsx)("object-cover", {
                                "rounded-t-xl": "default" === c || "transparent" === c,
                                rounded: "padded" === c
                            }),
                            v = (0, l.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== c
                            });
                        return (0, t.jsxs)(s.default, {
                            className: h,
                            variant: c,
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
                                        className: v,
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
                                    }), (0, t.jsx)(m, {
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
                                className: x,
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
                        }, `card-${f}-${e}`)
                    })
                })]
            })
        })
    }], 164163)
}, 449758, e => {
    "use strict";
    var t = e.i(615167),
        l = e.i(145158),
        a = e.i(78389),
        r = e.i(164163),
        i = e.i(326388);
    e.s(["default", 0, ({
        title: e,
        layout: s,
        cardVariant: n,
        scroll: d,
        theme: o,
        cardsHeading: c,
        cards: u,
        isHidden: f
    }) => {
        let {
            appendCommerceData: m,
            appendCommerceDataToPortableText: h,
            currency: x
        } = (0, i.default)(), g = (0, l.useMemo)(() => u?.map(e => ({
            type: e._type,
            title: m(e.title, e.productCatalogItem) || "",
            description: m(e.description, e.productCatalogItem) || "",
            richText: (0, t.jsx)(a.PortableText, {
                value: h(e.richText, e.productCatalogItem)
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
        })), [u, m, h]);
        return (0, t.jsx)(t.Fragment, {
            children: !f && (0, t.jsx)("section", {
                className: `${"dark"===o?"dark":""} overflow-hidden`,
                children: (0, t.jsx)(r.default, {
                    layout: "two-cards" === s || "three-cards" === s || "four-cards" === s ? s : "four-cards",
                    cardVariant: "default" === n || "padded" === n || "transparent" === n ? n : "default",
                    scroll: d,
                    title: e || "",
                    cardsHeading: ["h2", "h3", "h4", "div"].includes(c) ? c : void 0,
                    cards: g
                })
            })
        })
    }], 449758)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b18a8ee4-1dd9-5689-95b2-cdf4c5f3a03b")
    } catch (e) {}
}();
//# debugId=b18a8ee4-1dd9-5689-95b2-cdf4c5f3a03b