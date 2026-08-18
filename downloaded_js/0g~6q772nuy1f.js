(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 379294, e => {
    e.q("/_next/static/media/unity-fallback-1.05foy1lz0fhig.jpg")
}, 462847, e => {
    e.q("/_next/static/media/unity-fallback-2.0od666pl17uax.jpg")
}, 245094, e => {
    e.q("/_next/static/media/unity-fallback-3.01ai2jdgw500k.jpg")
}, 567134, 186114, e => {
    "use strict";
    var l = e.i(14666),
        t = e.i(499531),
        a = e.i(722978),
        r = e.i(131581),
        s = e.i(124576),
        i = e.i(74038),
        n = e.i(10747),
        o = e.i(825610),
        d = e.i(783078),
        c = e.i(749583);
    let u = ({
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
    });
    e.s(["default", 0, u], 186114);
    var m = e.i(595388);
    let h = (0, n.default)(() => e.A(104688), {
        loadableGenerated: {
            modules: [425687]
        },
        ssr: !1
    });
    e.s(["default", 0, ({
        title: e,
        description: n,
        image: x,
        video: g,
        action: f,
        variant: p = "column",
        videoInline: b = !0,
        buttonLabel: j = "Play video",
        blockKey: v,
        titleTag: y = "h3",
        locale: w,
        index: k
    }) => {
        let N = v || o.trackingLocation.uniteCard,
            A = void 0 !== k ? `${N}-${k}` : N,
            C = (0, t.useRef)(null),
            [L, $] = (0, t.useState)(!1),
            T = (0, r.useInView)(C),
            _ = (0, s.useReducedMotion)(),
            M = () => {
                $(!0)
            };
        (0, t.useEffect)(() => {
            b ? $(T) : T || $(!1)
        }, [T, b]);
        let R = (0, a.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": L && !_ && T && g?.src
            }),
            B = "horizontal" === p && f,
            S = (0, a.default)("flex flex-col", {
                "min-h-[14rem]": "stacked" === p || "column" === p,
                grow: "column" !== p && "horizontal" !== p,
                "min-h-[14rem] xl:min-h-[18rem] xl:flex-row xl:gap-4": "column" === p
            }),
            E = (0, a.default)("rounded-lg bg-gray-100 p-4 dark:bg-gray-900", {
                "h-full": "horizontal" !== p,
                "group h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-pointer": "horizontal" === p && B,
                "h-full relative p-[1px] xl:flex-row xl:gap-6 cursor-auto": "horizontal" === p && !B
            }),
            z = (0, a.default)("relative overflow-hidden rounded-lg", {
                "aspect-video w-full": "horizontal" !== p,
                "aspect-video w-full xl:flex-shrink-0 xl:self-start xl:max-w-1/2": "horizontal" === p
            }),
            D = (0, a.default)("cover absolute object-cover", {
                "transition-transform duration-400 group-hover:scale-110": "horizontal" === p && B
            }),
            P = (0, l.jsxs)("div", {
                ref: C,
                className: E,
                children: ["horizontal" === p && B && (0, l.jsx)("div", {
                    className: "absolute inset-0 rounded-lg opacity-0 transition-opacity duration-400 [background:linear-gradient(to_top,#000_0%,#666_60%,#666_100%)] group-hover:opacity-100"
                }), (0, l.jsxs)("div", {
                    className: (0, a.default)({
                        "relative z-10 flex h-full flex-col gap-6 rounded-lg bg-gray-100 p-3 xl:w-full xl:flex-row dark:bg-gray-900": "horizontal" === p,
                        "flex h-full flex-col justify-between gap-4": "horizontal" !== p
                    }),
                    children: [(x?.src || g?.src) && (0, l.jsxs)("div", {
                        className: z,
                        children: [g?.src && (0, l.jsx)(h, {
                            url: g.src,
                            playing: L && T && !_,
                            loop: !!b,
                            muted: b,
                            playsinline: b && !_,
                            width: "100%",
                            height: "100%",
                            className: "absolute top-0 left-0 [&>video]:object-cover",
                            onReady: () => {
                                b && $(!0)
                            },
                            controls: !b,
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        }), x && (0, l.jsxs)("div", {
                            className: R,
                            onClick: M,
                            children: [!b && (0, l.jsx)(u, {
                                handleIsPlaying: M,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: j,
                                "data-link-location": A,
                                "data-link-id": `${A}-video-play`
                            }), (0, l.jsx)(i.default, {
                                src: x.src,
                                placeholder: x.placeholder ? "blur" : "empty",
                                blurDataURL: x.placeholder,
                                fill: !0,
                                alt: x.alt ?? "",
                                className: D,
                                sizes: `(min-width: ${d.default.Large}px) 33vw, (min-width: ${d.default.Medium}px) 50vw, 100vw`
                            })]
                        })]
                    }), (0, l.jsx)("div", {
                        className: (0, a.default)(S),
                        children: "column" !== p && "horizontal" !== p ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(y, {
                                className: "loco-text-body-lg-medium -mt-2",
                                children: e
                            }), (0, l.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between",
                                children: [(0, l.jsx)("div", {
                                    className: "loco-text-body mt-2 whitespace-pre-line text-gray-700 dark:text-gray-400",
                                    children: n
                                }), (f?.href && f?.label || f?.renderModal) && (0, l.jsx)("div", {
                                    className: "mt-8",
                                    children: f?.renderModal ? f.renderModal() : (0, l.jsx)(c.default, {
                                        locale: w,
                                        href: B ? void 0 : f.href,
                                        target: f.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: B ? "span" : "button",
                                        "data-link-location": A,
                                        "data-link-id": `${A}-cta`,
                                        children: f.label
                                    })
                                })]
                            })]
                        }) : "horizontal" === p ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(y, {
                                className: "loco-text-body-lg-medium -mt-2 lg:mt-0",
                                children: e
                            }), (0, l.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between lg:flex-1",
                                children: [(0, l.jsx)("div", {
                                    className: "loco-text-body mt-2 line-clamp-5 whitespace-pre-line text-gray-700 lg:line-clamp-3 lg:text-gray-900 dark:text-gray-400 lg:dark:text-white",
                                    children: n
                                }), (f?.href && f?.label || f?.renderModal) && (0, l.jsx)("div", {
                                    className: "mt-8 lg:mt-6",
                                    children: f?.renderModal ? f.renderModal() : (0, l.jsx)(c.default, {
                                        locale: w,
                                        href: B ? void 0 : f.href,
                                        target: f.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: B ? "span" : "button",
                                        "data-link-location": A,
                                        "data-link-id": `${A}-cta`,
                                        children: f.label
                                    })
                                })]
                            })]
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(y, {
                                className: "loco-text-body-lg-medium -mt-2 xl:w-2/5",
                                children: e
                            }), (0, l.jsxs)("div", {
                                className: "flex shrink-0 grow flex-col justify-between xl:-mt-1 xl:w-3/5",
                                children: [(0, l.jsx)("div", {
                                    className: "loco-text-body mt-1 whitespace-pre-line xl:mt-0",
                                    children: n
                                }), (f?.href && f?.label || f?.renderModal) && (0, l.jsx)("div", {
                                    children: f?.renderModal ? f.renderModal() : (0, l.jsx)(c.default, {
                                        locale: w,
                                        href: B ? void 0 : f.href,
                                        target: f.target,
                                        outlined: !0,
                                        rounded: !0,
                                        hasArrow: !0,
                                        tag: B ? "span" : "button",
                                        "data-link-location": A,
                                        "data-link-id": `${A}-cta`,
                                        children: f.label
                                    })
                                })]
                            })]
                        })
                    })]
                })]
            });
        return B ? (0, l.jsx)(m.Link, {
            href: f.href,
            target: f.target,
            className: "cursor-pointer",
            "data-link-location": A,
            "data-link-id": `${A}-link-wrapper`,
            children: P
        }) : P
    }], 567134)
}, 459923, 201763, 570994, e => {
    "use strict";
    var l = e.i(14666),
        t = e.i(499531),
        a = e.i(74038),
        r = e.i(10747),
        s = e.i(722978),
        i = e.i(131581),
        n = e.i(124576);
    let o = ({
        keyFigures: e,
        nested: t = !1,
        theme: r = "light"
    }) => {
        let i = (0, s.clsx)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
            "py-16": !t
        });
        return (0, l.jsx)("div", {
            className: "dark" === r ? "bg-black text-white" : "",
            children: (0, l.jsx)("div", {
                className: i,
                children: e?.map((i, n) => {
                    let {
                        value: o,
                        label: d
                    } = i, c = (0, s.clsx)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                        "backdrop-blur-lg": t && "dark" !== r,
                        "bg-gray-900 dark:bg-black": "dark" === r,
                        "bg-gray-100 dark:bg-gray-900 text-gray-800": !t && "dark" !== r,
                        "xl:col-span-3": e?.length === 4
                    });
                    return o?.type === "text" ? (0, l.jsxs)("div", {
                        className: c,
                        children: [(0, l.jsx)("div", {
                            className: "loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center",
                            children: o.text
                        }), (0, l.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: d
                        })]
                    }, n) : d && o?.type === "icon" && !o.url ? (0, l.jsx)("div", {
                        className: c,
                        children: (0, l.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: d
                        })
                    }, n) : o?.type === "icon" && o.url ? (0, l.jsxs)("div", {
                        className: c,
                        children: [(0, l.jsx)("div", {
                            className: "flex min-w-[30%] shrink-0 gap-10 text-center lg:justify-center",
                            children: (0, l.jsx)(a.default, {
                                src: o.url,
                                alt: o.description,
                                width: 40,
                                height: 40
                            })
                        }), (0, l.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: d
                        })]
                    }, n) : null
                })
            })
        })
    };
    e.s(["default", 0, o], 201763);
    var d = e.i(749583);
    let c = (0, r.default)(() => e.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }),
        u = ({
            eyebrow: e,
            title: r,
            titleSize: u = "medium",
            description: m,
            backgroundImage: h,
            actions: x = [],
            keyFigures: g,
            video: f,
            mention: p,
            fullScreen: b = !0
        }) => {
            let j = (0, t.useRef)(null),
                v = (0, i.useInView)(j, {
                    once: !0
                }),
                y = (0, n.useReducedMotion)(),
                [w, k] = (0, t.useState)(!1),
                N = (0, s.default)(`font-nohemi mt-24 my-4 ${"small"===u?"mb-6":"mb-8"}`, {
                    "loco-text-heading-xl": "medium" === u,
                    "loco-text-headline": "large" === u,
                    "loco-text-heading-lg": "small" === u
                }),
                A = (0, s.default)("object-cover transition-opacity duration-1000 opacity-100", {
                    "opacity-0": w
                });
            return (0, l.jsxs)("section", {
                ref: j,
                className: "dark relative",
                children: [h && (0, l.jsx)(a.default, {
                    src: h.src,
                    placeholder: "blur",
                    blurDataURL: h.placeholder,
                    fill: !0,
                    alt: "",
                    className: A,
                    sizes: "100vw"
                }), v && !y && f && (0, l.jsx)(c, {
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
                            maxMaxBufferLength: 1,
                            startLevel: 1
                        }
                    },
                    className: "absolute [&>video]:object-cover"
                }, "hero-video"), (0, l.jsx)("div", {
                    className: "absolute h-full w-full",
                    style: {
                        backgroundImage: b ? `
    linear-gradient(180deg, rgba(1, 1, 1, 0.00) 45.08%, rgba(1, 1, 1, 0.00) 49.56%, rgba(1, 1, 1, 0.01) 53.84%, rgba(1, 1, 1, 0.02) 57.92%, rgba(1, 1, 1, 0.04) 61.84%, rgba(1, 1, 1, 0.06) 65.62%, rgba(1, 1, 1, 0.09) 69.27%, rgba(1, 1, 1, 0.12) 72.82%, rgba(1, 1, 1, 0.16) 76.29%, rgba(1, 1, 1, 0.20) 79.7%, rgba(1, 1, 1, 0.24) 83.06%, rgba(1, 1, 1, 0.29) 86.41%, rgba(1, 1, 1, 0.34) 89.75%, rgba(1, 1, 1, 0.39) 93.12%, rgba(1, 1, 1, 0.44) 96.53%, rgba(1, 1, 1, 0.50) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)` : ""
                    }
                }), (0, l.jsxs)("div", {
                    className: `relative container flex ${b&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                    children: [(0, l.jsx)("div", {
                        className: "flex grow flex-col justify-stretch",
                        children: (0, l.jsxs)("div", {
                            className: "flex h-full grow flex-col items-center justify-center text-center",
                            children: [e && (0, l.jsx)("div", {
                                className: "loco-caption-lg-semibold",
                                children: e
                            }), (0, l.jsx)("h1", {
                                className: N,
                                children: r
                            }), m && (0, l.jsx)("div", {
                                className: "loco-caption-sm-semibold mt-5",
                                children: m
                            }), x && (0, l.jsx)("div", {
                                className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                children: x.map((e, t) => {
                                    if (e.link) return (0, l.jsx)(d.default, {
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
                    }), g && (0, l.jsx)(o, {
                        keyFigures: g,
                        nested: !0
                    })]
                }), p && (0, l.jsx)("div", {
                    className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:top-10 md:right-8 md:left-auto md:w-auto md:px-0 md:py-8",
                    children: p
                })]
            })
        };
    e.s(["default", 0, u], 570994);
    var m = e.i(115219);
    e.s(["default", 0, ({
        actions: e = [],
        brandfolder: a,
        mention: r,
        eyebrow: s,
        title: i,
        titleSize: n,
        description: o,
        image: d,
        keyFigures: c,
        isHidden: h
    }) => {
        let {
            mapFormActions: x
        } = (0, m.useFormModal)(e), g = x(e), f = (0, t.useMemo)(() => (c?.data ?? []).map(e => e?.value?.text ? {
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
        return (0, l.jsx)(l.Fragment, {
            children: !h && (0, l.jsx)(u, {
                actions: g,
                mention: r || "",
                eyebrow: s || "",
                title: i || "",
                titleSize: "small" === n ? "small" : "large" === n ? "large" : "medium",
                description: o || "",
                backgroundImage: {
                    src: d?.asset.url || "",
                    placeholder: d?.asset.metadata?.lqip || ""
                },
                keyFigures: f,
                video: a?.muxHLSURL || ""
            })
        })
    }], 459923)
}, 549134, e => {
    "use strict";
    let l = {
        src: e.i(379294).default,
        width: 3840,
        height: 2160,
        blurWidth: 8,
        blurHeight: 5,
        blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAALCAAFAAgBAREA/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/9oACAEBAAA/APLZ9Vnvz+/AYDoDzX//2Q=="
    };
    e.s(["default", 0, l])
}, 701039, (e, l, t) => {
    l.exports = function(e) {
        return e
    }
}, 865799, (e, l, t) => {
    l.exports = function(e, l, t) {
        switch (t.length) {
            case 0:
                return e.call(l);
            case 1:
                return e.call(l, t[0]);
            case 2:
                return e.call(l, t[0], t[1]);
            case 3:
                return e.call(l, t[0], t[1], t[2])
        }
        return e.apply(l, t)
    }
}, 911818, (e, l, t) => {
    var a = Date.now;
    l.exports = function(e) {
        var l = 0,
            t = 0;
        return function() {
            var r = a(),
                s = 16 - (r - t);
            if (t = r, s > 0) {
                if (++l >= 800) return arguments[0]
            } else l = 0;
            return e.apply(void 0, arguments)
        }
    }
}, 830747, (e, l, t) => {
    l.exports = function(e) {
        return function() {
            return e
        }
    }
}, 599568, (e, l, t) => {
    var a = e.r(581511);
    l.exports = function() {
        try {
            var e = a(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }()
}, 317508, (e, l, t) => {
    var a = e.r(830747),
        r = e.r(599568),
        s = e.r(701039);
    l.exports = r ? function(e, l) {
        return r(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: a(l),
            writable: !0
        })
    } : s
}, 108749, (e, l, t) => {
    var a = e.r(317508);
    l.exports = e.r(911818)(a)
}, 531766, (e, l, t) => {
    l.exports = function(e, l) {
        for (var t = -1, a = null == e ? 0 : e.length; ++t < a && !1 !== l(e[t], t, e););
        return e
    }
}, 860059, (e, l, t) => {
    var a = /^(?:0|[1-9]\d*)$/;
    l.exports = function(e, l) {
        var t = typeof e;
        return !!(l = null == l ? 0x1fffffffffffff : l) && ("number" == t || "symbol" != t && a.test(e)) && e > -1 && e % 1 == 0 && e < l
    }
}, 184414, (e, l, t) => {
    var a = e.r(865799),
        r = Math.max;
    l.exports = function(e, l, t) {
        return l = r(void 0 === l ? e.length - 1 : l, 0),
            function() {
                for (var s = arguments, i = -1, n = r(s.length - l, 0), o = Array(n); ++i < n;) o[i] = s[l + i];
                i = -1;
                for (var d = Array(l + 1); ++i < l;) d[i] = s[i];
                return d[l] = t(o), a(e, this, d)
            }
    }
}, 129824, e => {
    "use strict";
    e.s(["DATA_REQUEST", 0, "/data-request", "DEFAULT_PAGES_NO_MT_BANNER", 0, ["/made-with-unity"], "L1_PAGES_NO_MT_BANNER", 0, ["/our-company", "/community", "/industry", "/use-cases", "/releases/unity-6"], "PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products"], "PRODUCTS_PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products/unity-pro", "/products/unity-engine", "/products/compare-plans", "/products/compare-plans/unity-cloud"], "RESOURCES_PAGES_NO_MT_BANNER", 0, ["/resources"], "SOLUTIONS_PAGES_NO_MT_BANNER", 0, ["/download", "/roadmap", "/pages/pro-free-trial", "/games", "/solutions", "/developer-tools", "/how-to", "/learn", "/learn/get-started", "/releases/lts-vs-tech-stream"]])
}, 596889, e => {
    "use strict";
    var l = e.i(14666),
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
}, 164163, e => {
    "use strict";
    var l = e.i(14666),
        t = e.i(722978),
        a = e.i(74038),
        r = e.i(825610),
        s = e.i(749583),
        i = e.i(596889),
        n = e.i(805518);
    e.s(["default", 0, ({
        title: e,
        cards: o,
        layout: d = "four-cards",
        cardVariant: c = "default",
        scroll: u = !1,
        cardsHeading: m
    }) => {
        let h = m || (e ? "h3" : "h2"),
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
                    children: o?.map((o, m) => {
                        let x = (0, t.clsx)("flex flex-wrap flex-row", !u && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[d], u && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[d]),
                            g = (0, t.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === c || "transparent" === c
                            }),
                            f = (0, t.clsx)({
                                "p-6": "default" === c || "transparent" === c,
                                "py-6": "padded" === c
                            }),
                            p = (0, t.clsx)("object-cover", {
                                "rounded-t-xl": "default" === c || "transparent" === c,
                                rounded: "padded" === c
                            }),
                            b = (0, t.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== c
                            });
                        return (0, l.jsxs)(i.default, {
                            className: x,
                            variant: c,
                            children: [(0, l.jsxs)(i.default.Content, {
                                children: [o.image && o.image.src && (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)(i.default.Image, {
                                        withinContainer: o.image.withinContainer,
                                        children: (0, l.jsx)(a.default, {
                                            src: o.image.src ?? "",
                                            alt: o.image.alt ?? "",
                                            fill: !0,
                                            className: p,
                                            quality: 100
                                        })
                                    }), o.image.description && (0, l.jsx)(n.default, {
                                        className: b,
                                        children: o.image.description
                                    })]
                                }), (0, l.jsxs)("div", {
                                    className: f,
                                    children: [o.icon && o.icon.src && (0, l.jsx)("div", {
                                        className: "relative mb-5 dark:invert",
                                        children: (0, l.jsx)(a.default, {
                                            src: o.icon.src ?? "",
                                            alt: o.icon.alt ?? "",
                                            quality: 100,
                                            width: 23,
                                            height: 23
                                        })
                                    }), (0, l.jsx)(h, {
                                        className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                        children: o.title
                                    }), o.description && (0, l.jsx)(n.default, {
                                        className: "loco-text-body mb-4",
                                        children: o.description
                                    }), o.richText && (0, l.jsx)(n.default, {
                                        className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                        children: o.richText
                                    })]
                                })]
                            }), o.actions && (0, l.jsx)("div", {
                                className: g,
                                children: o.actions.map((e, t) => (0, l.jsx)(s.default, {
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
}, 930839, (e, l, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0, t.default = {
        hljs: {
            display: "block",
            overflowX: "auto",
            padding: "0.5em",
            background: "#272822",
            color: "#ddd"
        },
        "hljs-tag": {
            color: "#f92672"
        },
        "hljs-keyword": {
            color: "#f92672",
            fontWeight: "bold"
        },
        "hljs-selector-tag": {
            color: "#f92672",
            fontWeight: "bold"
        },
        "hljs-literal": {
            color: "#f92672",
            fontWeight: "bold"
        },
        "hljs-strong": {
            color: "#f92672"
        },
        "hljs-name": {
            color: "#f92672"
        },
        "hljs-code": {
            color: "#66d9ef"
        },
        "hljs-class .hljs-title": {
            color: "white"
        },
        "hljs-attribute": {
            color: "#bf79db"
        },
        "hljs-symbol": {
            color: "#bf79db"
        },
        "hljs-regexp": {
            color: "#bf79db"
        },
        "hljs-link": {
            color: "#bf79db"
        },
        "hljs-string": {
            color: "#a6e22e"
        },
        "hljs-bullet": {
            color: "#a6e22e"
        },
        "hljs-subst": {
            color: "#a6e22e"
        },
        "hljs-title": {
            color: "#a6e22e",
            fontWeight: "bold"
        },
        "hljs-section": {
            color: "#a6e22e",
            fontWeight: "bold"
        },
        "hljs-emphasis": {
            color: "#a6e22e"
        },
        "hljs-type": {
            color: "#a6e22e",
            fontWeight: "bold"
        },
        "hljs-built_in": {
            color: "#a6e22e"
        },
        "hljs-builtin-name": {
            color: "#a6e22e"
        },
        "hljs-selector-attr": {
            color: "#a6e22e"
        },
        "hljs-selector-pseudo": {
            color: "#a6e22e"
        },
        "hljs-addition": {
            color: "#a6e22e"
        },
        "hljs-variable": {
            color: "#a6e22e"
        },
        "hljs-template-tag": {
            color: "#a6e22e"
        },
        "hljs-template-variable": {
            color: "#a6e22e"
        },
        "hljs-comment": {
            color: "#75715e"
        },
        "hljs-quote": {
            color: "#75715e"
        },
        "hljs-deletion": {
            color: "#75715e"
        },
        "hljs-meta": {
            color: "#75715e"
        },
        "hljs-doctag": {
            fontWeight: "bold"
        },
        "hljs-selector-id": {
            fontWeight: "bold"
        }
    }
}, 480880, 570133, 210310, e => {
    "use strict";
    var l = e.i(14666),
        t = e.i(499531);
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
    })], 480880);
    var a = e.i(537655),
        r = e.i(930839),
        s = e.i(46860),
        i = e.i(525296),
        n = e.i(952405),
        o = e.i(852529),
        d = e.i(847331);
    a.Light.registerLanguage("csharp", s.default), a.Light.registerLanguage("javascript", i.default), a.Light.registerLanguage("xml", n.default), a.Light.registerLanguage("rust", o.default), a.Light.registerLanguage("css", d.default), e.s(["default", 0, ({
        code: e,
        language: t
    }) => (0, l.jsx)("div", {
        className: "text-white [&>pre]:rounded-xl [&>pre]:!p-4",
        children: (0, l.jsx)(a.Light, {
            style: r.default,
            language: t,
            children: e
        })
    })], 570133);
    var c = e.i(749583),
        u = e.i(206775),
        m = e.i(652955),
        h = e.i(229696),
        x = e.i(722978),
        g = e.i(805518),
        f = e.i(363737);
    let p = ({
            className: e
        }) => (0, l.jsx)("svg", {
            className: e,
            width: "17",
            height: "16",
            viewBox: "0 0 17 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, l.jsx)("g", {
                id: "ð· ArrowsOutSimple",
                children: (0, l.jsx)("path", {
                    id: "Vector",
                    d: "M13.7144 3V6C13.7144 6.13261 13.6617 6.25979 13.5679 6.35355C13.4741 6.44732 13.347 6.5 13.2144 6.5C13.0817 6.5 12.9546 6.44732 12.8608 6.35355C12.767 6.25979 12.7144 6.13261 12.7144 6V4.20687L9.56811 7.35375C9.47429 7.44757 9.34704 7.50028 9.21436 7.50028C9.08167 7.50028 8.95443 7.44757 8.86061 7.35375C8.76678 7.25993 8.71408 7.13268 8.71408 7C8.71408 6.86732 8.76678 6.74007 8.86061 6.64625L12.0075 3.5H10.2144C10.0817 3.5 9.95457 3.44732 9.8608 3.35355C9.76703 3.25979 9.71436 3.13261 9.71436 3C9.71436 2.86739 9.76703 2.74021 9.8608 2.64645C9.95457 2.55268 10.0817 2.5 10.2144 2.5H13.2144C13.347 2.5 13.4741 2.55268 13.5679 2.64645C13.6617 2.74021 13.7144 2.86739 13.7144 3ZM6.86061 8.64625L3.71436 11.7931V10C3.71436 9.86739 3.66168 9.74021 3.56791 9.64645C3.47414 9.55268 3.34696 9.5 3.21436 9.5C3.08175 9.5 2.95457 9.55268 2.8608 9.64645C2.76703 9.74021 2.71436 9.86739 2.71436 10V13C2.71436 13.1326 2.76703 13.2598 2.8608 13.3536C2.95457 13.4473 3.08175 13.5 3.21436 13.5H6.21436C6.34696 13.5 6.47414 13.4473 6.56791 13.3536C6.66168 13.2598 6.71436 13.1326 6.71436 13C6.71436 12.8674 6.66168 12.7402 6.56791 12.6464C6.47414 12.5527 6.34696 12.5 6.21436 12.5H4.42123L7.56811 9.35375C7.66193 9.25993 7.71463 9.13268 7.71463 9C7.71463 8.86732 7.66193 8.74007 7.56811 8.64625C7.47429 8.55243 7.34704 8.49972 7.21436 8.49972C7.08167 8.49972 6.95443 8.55243 6.86061 8.64625Z",
                    fill: "#3A5BC7"
                })
            })
        }),
        b = ({
            className: e
        }) => (0, l.jsx)("svg", {
            className: e,
            width: "20",
            height: "20",
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, l.jsx)("g", {
                id: "ð· X",
                children: (0, l.jsx)("path", {
                    id: "Vector",
                    d: "M16.067 15.1828C16.1251 15.2409 16.1712 15.3098 16.2026 15.3857C16.234 15.4615 16.2502 15.5429 16.2502 15.625C16.2502 15.7071 16.234 15.7884 16.2026 15.8643C16.1712 15.9402 16.1251 16.0091 16.067 16.0672C16.009 16.1252 15.94 16.1713 15.8642 16.2027C15.7883 16.2342 15.707 16.2503 15.6249 16.2503C15.5427 16.2503 15.4614 16.2342 15.3855 16.2027C15.3097 16.1713 15.2407 16.1252 15.1827 16.0672L9.99986 10.8836L4.81705 16.0672C4.69977 16.1844 4.54071 16.2503 4.37486 16.2503C4.20901 16.2503 4.04995 16.1844 3.93267 16.0672C3.8154 15.9499 3.74951 15.7908 3.74951 15.625C3.74951 15.4591 3.8154 15.3001 3.93267 15.1828L9.11627 9.99998L3.93267 4.81717C3.8154 4.69989 3.74951 4.54083 3.74951 4.37498C3.74951 4.20913 3.8154 4.05007 3.93267 3.93279C4.04995 3.81552 4.20901 3.74963 4.37486 3.74963C4.54071 3.74963 4.69977 3.81552 4.81705 3.93279L9.99986 9.11639L15.1827 3.93279C15.2999 3.81552 15.459 3.74963 15.6249 3.74963C15.7907 3.74963 15.9498 3.81552 16.067 3.93279C16.1843 4.05007 16.2502 4.20913 16.2502 4.37498C16.2502 4.54083 16.1843 4.69989 16.067 4.81717L10.8835 9.99998L16.067 15.1828Z",
                    fill: "#000000"
                })
            })
        }),
        j = ({
            children: e,
            colTitle: a,
            truncationEnabled: r,
            rowTitle: s,
            className: i = "",
            isTableCell: n
        }) => {
            let [o, d] = (0, t.useState)(!1), [u, m] = (0, t.useState)(!1), h = (0, t.useRef)(null), j = (0, x.default)({
                "cursor-pointer relative": o
            }, i), v = (0, x.default)({
                "line-clamp-3": r
            });
            (0, t.useEffect)(() => {
                let e = h.current;
                e && (e.scrollHeight > e.clientHeight ? d(!0) : d(!1))
            }, [h]);
            let y = () => {
                    m(!0)
                },
                w = r && o ? {
                    tabIndex: 0,
                    role: "button",
                    onClick: y,
                    onKeyDown: e => {
                        ("Enter" === e.key || "Space" === e.key) && y()
                    }
                } : {};
            return (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsxs)("td", {
                    className: (0, x.default)(j, {
                        "bg-gray-50 p-3 dark:bg-gray-900": !n,
                        "h-full !p-0": n
                    }),
                    ...w,
                    children: [n ? e : (0, l.jsx)(g.default, {
                        className: v,
                        ref: h,
                        children: e
                    }), r && o && (0, l.jsx)(p, {
                        className: "absolute top-1.5 right-1.5"
                    })]
                }), (0, l.jsx)(f.default, {
                    isOpen: u,
                    onOpenChange: m,
                    showTriggerButton: !1,
                    children: (0, l.jsxs)("div", {
                        className: "mt-20 flex w-6/12 flex-col rounded-3xl bg-white p-8 dark:bg-gray-800",
                        tabIndex: -1,
                        children: [(0, l.jsx)(c.default, {
                            onPress: () => {
                                m(!1)
                            },
                            variant: "secondary",
                            className: "self-end",
                            children: (0, l.jsx)(b, {})
                        }), (0, l.jsx)(g.default, {
                            className: "caption-sm mb-2.5 text-black dark:text-white",
                            children: s
                        }), (0, l.jsx)("div", {
                            className: "text-heading-sm mb-4 text-black dark:text-white",
                            children: a
                        }), (0, l.jsx)("div", {
                            className: "text-small mb-8",
                            children: (0, l.jsx)(g.default, {
                                className: "text-black dark:text-gray-200",
                                children: e
                            })
                        })]
                    })
                })]
            })
        };
    e.s(["default", 0, ({
        table: e,
        className: a = "",
        verticalHeadingClass: r = "",
        hideTitle: s = !1
    }) => {
        let [i, ...n] = e.rows.map(e => ({
            ...e,
            cells: (e.cells ?? []).map(e => "string" == typeof e ? e : "")
        })), o = `align-top text-heading-sm md:text-small-bold rounded-md bg-gray-100 text-gray-800 bg-gray-100 dark:bg-gray-700 md:dark:bg-gray-800 dark:text-gray-200 border-none ${r}`, d = "align-top rounded-md text-sm text-gray-800 dark:text-gray-200 border-none", f = (0, x.default)("w-full table-fixed border-separate border-spacing-2 break-words", a), p = (0, x.default)("h-full table-fixed border-separate border-spacing-1 break-words", a), b = (0, t.useCallback)(e => {
            let [t, ...a] = e.split("\n"), r = a.splice(1).map((e, t) => {
                let a = e.split("|").filter(e => e).map(e => e.trim());
                return (0, l.jsx)("div", {
                    className: "flex grow",
                    children: a.map((e, a) => (0, l.jsx)(h.default, {
                        className: "flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e
                    }, `cell-${t}-${a}-${e}`))
                }, `row-${t}`)
            });
            return (0, l.jsxs)("div", {
                className: "flex h-full flex-col",
                children: [(0, l.jsx)("div", {
                    className: "-ml-1 flex grow",
                    children: t.split("|").filter(e => e).map((e, t) => (0, l.jsx)(h.default, {
                        className: "ml-1 flex grow basis-0 items-center justify-center rounded-md bg-gray-50 px-6 py-4 text-center dark:bg-gray-900",
                        children: e.trim()
                    }, `header-cell-${t}-${e}`))
                }), r]
            })
        }, []), v = (0, t.useMemo)(() => n.map(e => e.cells.reduce((e, t, a) => ({
            ...e,
            [`col${a+1}`]: {
                component: t.startsWith("|") ? b(t) : (0, l.jsx)(h.default, {
                    options: {
                        overrides: {
                            Button: {
                                component: c.default
                            },
                            Label: {
                                component: u.default
                            },
                            Tooltip: {
                                component: m.default
                            }
                        }
                    },
                    children: t
                }),
                isTableCell: t.startsWith("|"),
                cellContent: t
            }
        }), {})), [n, b]), y = (0, t.useMemo)(() => i.cells.map((e, t) => (0, l.jsx)("th", {
            scope: "col",
            className: "min-w-[10rem] rounded-md border-none bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-800 dark:text-gray-400",
            children: (0, l.jsx)(h.default, {
                options: {
                    overrides: {
                        Button: {
                            component: c.default
                        },
                        Label: {
                            component: u.default
                        },
                        Tooltip: {
                            component: m.default
                        }
                    }
                },
                children: e
            })
        }, `${t}-${e}`)), [i.cells]), w = (0, t.useMemo)(() => v.map((t, a) => {
            let r = Object.values(t),
                s = r[0];
            return (0, l.jsx)("tr", {
                className: "border-separate border-spacing-1",
                children: r.map((t, r) => (0, l.jsx)(j, {
                    isTableCell: t.isTableCell,
                    className: 0 === r ? o : d,
                    rowTitle: s.component,
                    colTitle: 0 !== r && y && y[r] ? y[r] : "",
                    truncationEnabled: e.tableTruncation,
                    children: t.component
                }, `${a}-${r}-${t.cellContent}`))
            }, a)
        }), [y, v, o, e.tableTruncation]), k = (0, t.useMemo)(() => i.cells.map((e, t) => (0, l.jsx)("th", {
            scope: "col",
            className: "text-tiny-bold rounded-md bg-gray-100 py-3.5 pr-4 pl-4 text-left align-top text-gray-800 dark:bg-gray-900 dark:text-gray-400",
            children: (0, l.jsx)(h.default, {
                options: {
                    overrides: {
                        Button: {
                            component: c.default
                        },
                        Label: {
                            component: u.default
                        },
                        Tooltip: {
                            component: m.default
                        }
                    }
                },
                children: e
            })
        }, `${t}-${e}`)), [i]), N = (0, t.useMemo)(() => v.map((e, t) => (0, l.jsx)("div", {
            className: "mb-4 min-w-full rounded-md bg-gray-100 align-middle dark:bg-gray-700",
            children: (0, l.jsxs)("table", {
                className: f,
                children: [i && i.cells.length > 0 && (0, l.jsx)("thead", {
                    className: "hidden",
                    children: (0, l.jsx)("tr", {
                        className: "border-separate border-spacing-1",
                        children: k
                    })
                }), (0, l.jsx)("tbody", {
                    className: "table-row-group bg-gray-50 dark:bg-gray-900",
                    children: Object.values(e).map((e, a) => e ? (0, l.jsx)("tr", {
                        className: "rounded-md",
                        children: (0, l.jsxs)("td", {
                            className: 0 === a ? o : d,
                            children: [0 !== a && i && i.cells[a] && (0, l.jsx)(h.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: c.default
                                        },
                                        Label: {
                                            component: u.default
                                        },
                                        Tooltip: {
                                            component: m.default
                                        }
                                    }
                                },
                                children: i.cells[a]
                            }), (0, l.jsx)(g.default, {
                                children: e.component
                            })]
                        })
                    }, `${t}-${a}-${i.cells[a]}`) : null)
                })]
            })
        }, `row-${t}`)), [v, i, f, o, k]);
        return (0, l.jsxs)("div", {
            children: [(0, l.jsx)("div", {
                className: "sm:flex sm:items-center",
                children: (0, l.jsxs)("div", {
                    className: "sm:flex-auto",
                    children: [!s && e.tableTitle && (0, l.jsx)("div", {
                        className: "text-heading-sm",
                        children: e.tableTitle
                    }), !s && e.tableDescription && (0, l.jsx)("p", {
                        className: "text-body mt-2",
                        children: e.tableDescription
                    })]
                })
            }), (0, l.jsx)("div", {
                className: "mt-8 flow-root",
                children: (0, l.jsxs)("div", {
                    className: "-mx-4 -my-2 overflow-visible sm:-mx-6 lg:-mx-8",
                    children: [(0, l.jsx)("div", {
                        className: "hidden min-w-full rounded-md bg-gray-100 align-middle sm:px-6 md:inline-block md:rounded-none md:bg-transparent",
                        children: (0, l.jsxs)("table", {
                            className: p,
                            children: [y && (0, l.jsx)("thead", {
                                className: "table-header-group",
                                children: (0, l.jsx)("tr", {
                                    className: "border-separate border-spacing-1",
                                    children: y
                                })
                            }), (0, l.jsx)("tbody", {
                                className: "table-row-group",
                                children: w
                            })]
                        })
                    }), (0, l.jsxs)("div", {
                        className: "md:hidden",
                        children: [(0, l.jsx)("div", {
                            className: "text-body-bold mb-4",
                            children: (0, l.jsx)(h.default, {
                                options: {
                                    overrides: {
                                        Button: {
                                            component: c.default
                                        },
                                        Label: {
                                            component: u.default
                                        },
                                        Tooltip: {
                                            component: m.default
                                        }
                                    }
                                },
                                children: i && i.cells && i.cells[0] ? i.cells[0] : ""
                            })
                        }), N]
                    })]
                })
            })]
        })
    }], 210310)
}, 644995, e => {
    "use strict";
    var l = e.i(14666);
    e.s(["default", 0, ({
        className: e = "",
        width: t = 16,
        height: a = 16
    }) => (0, l.jsxs)("svg", {
        width: t,
        height: a,
        viewBox: "0 0 256 256",
        xmlns: "http://www.w3.org/2000/svg",
        className: e,
        children: [(0, l.jsx)("rect", {
            width: "256",
            height: "256",
            fill: "none"
        }), (0, l.jsx)("line", {
            x1: "200",
            y1: "56",
            x2: "56",
            y2: "200",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        }), (0, l.jsx)("line", {
            x1: "200",
            y1: "200",
            x2: "56",
            y2: "56",
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "16"
        })]
    })])
}, 246916, e => {
    "use strict";
    var l = e.i(913425),
        t = e.i(833200),
        a = e.i(740041);
    e.s(["useMTBanner", 0, function(e, r = []) {
        var s, i;
        let n, o, d, c, u, m = (0, l.usePathname)(),
            h = (0, t.useLocale)(),
            x = h !== a.defaultLocale ? m.replace(`/${h}`, "") : m;
        return {
            shouldDisplayMTBanner: h !== a.defaultLocale && e?.translationType === "MT" && !r.includes(x),
            updatedBlocks: (s = e.blocks ?? [], i = e.machineTranslationDisclaimer, n = s.reduce((e, l, t) => ["hero", "alternateNavigation", "headliner"].includes(l._type) ? t : e, -1), o = [...s], d = o[n + 1]?._type === "alternateNavigationAnchor" || o[n + 1]?._type === "anchorButton" ? o[n + 2] : o[n + 1], c = d?.theme ?? null, u = {
                _type: "alert",
                text: i?.text,
                isContained: !0,
                spacing: {
                    bottom: !0,
                    top: !0
                },
                ...c && {
                    theme: c
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
            }, -1 === n ? o.unshift(u) : o.splice(n + 1, 0, u), o),
            redirectPathName: x
        }
    }], 246916)
}, 401861, 146911, 841889, e => {
    "use strict";
    var l = e.i(14666),
        t = e.i(722978),
        a = e.i(499531),
        r = e.i(960851);
    let s = e.i(976317).default;
    e.s(["default", 0, s], 146911);
    let i = ({
            title: e,
            text: i,
            action: n,
            truncate: o,
            className: d = "",
            isContained: c,
            dismiss: u
        }) => {
            let m = (0, a.useMemo)(() => `unity-alert-${i?.substring(0,30).replaceAll(" ","_")}`, [i]),
                [h, x] = (0, a.useState)(!0),
                [g, f] = (0, a.useState)(!1);
            return ((0, a.useEffect)(() => {
                localStorage?.getItem(m) && f(!0)
            }, [m]), g) ? null : (0, l.jsx)("div", {
                className: (0, t.clsx)({
                    container: c
                }),
                children: (0, l.jsxs)("div", {
                    className: (0, t.clsx)("dark:bg-blue/10 relative flex w-full flex-col justify-between gap-4 bg-sky-100 py-4 pr-5 pl-11 text-sm text-gray-900 transition-colors sm:flex-row", {
                        flex: u?.enabled
                    }, {
                        "rounded-lg": c
                    }, d),
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
                                    "line-clamp-4 sm:line-clamp-2": o?.enabled && h
                                }),
                                children: i
                            }), o?.enabled && (0, l.jsx)("button", {
                                onClick: () => x(!h),
                                className: "text-tiny shadow-underline-sm hover:text-blue hover:shadow-underline focus:text-blue dark:hover:text-blue text-black transition duration-200 dark:text-white",
                                children: h ? o.seeMoreLabel : o.seeLessLabel
                            })]
                        })]
                    }), (n?.href || u?.enabled) && (0, l.jsxs)("div", {
                        className: "sm:auto inline-flex w-fit items-center gap-4 [&>*]:whitespace-nowrap",
                        children: [n && (0, l.jsx)(s, {
                            className: "mx-auto mt-0 inline-block whitespace-nowrap",
                            href: n.href,
                            target: n.target || "_self",
                            size: "tiny",
                            underline: !0,
                            children: n.title
                        }), u?.enabled && (0, l.jsx)("button", {
                            onClick: () => {
                                f(!0), localStorage.setItem(m, Date.now().toString())
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
            dismiss: o,
            isContained: d,
            isHidden: c,
            spacing: u
        }) => {
            let m = (0, t.clsx)({
                "pt-10": u?.top
            }, {
                "pb-10": u?.bottom
            }, {
                "dark bg-black": "dark" === s
            });
            return c || !a ? null : (0, l.jsx)("section", {
                className: m,
                children: (0, l.jsx)(i, {
                    title: e,
                    text: a,
                    isContained: d,
                    truncate: n || {},
                    dismiss: o || {},
                    action: r && {
                        title: r?.text || "",
                        href: r?.fieldLink?.linkReference?.href?.current || "",
                        target: r?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                    }
                })
            })
        };
    e.s(["default", 0, n], 841889), e.s(["default", 0, n], 401861)
}, 783078, e => {
    "use strict";
    var l, t = ((l = t || {})[l.Small = 425] = "Small", l[l.Medium = 744] = "Medium", l[l.Large = 1024] = "Large", l[l.XLarge = 1440] = "XLarge", l);
    e.s(["default", 0, t])
}, 123849, e => {
    "use strict";
    var l = e.i(14666),
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
}, 14452, e => {
    "use strict";
    var l = e.i(14666),
        t = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        className: a = "",
        tag: r = "div"
    }) => {
        let s = (0, t.default)("loco-text-heading-sm mb-4", a);
        return (0, l.jsx)(r, {
            className: s,
            children: e
        })
    }], 14452)
}]);