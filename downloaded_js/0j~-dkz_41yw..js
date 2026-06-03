(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 389240, e => {
    "use strict";
    var t = e.i(3931),
        a = Object.defineProperty,
        l = Object.getOwnPropertySymbols,
        r = Object.prototype.hasOwnProperty,
        i = Object.prototype.propertyIsEnumerable,
        n = (e, t, l) => t in e ? a(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: l
        }) : e[t] = l;
    let s = (0, t.forwardRef)((e, a) => {
        let {
            alt: s,
            color: o = "currentColor",
            size: d = "1em",
            weight: c = "regular",
            mirrored: u = !1,
            children: m,
            weights: h
        } = e, f = ((e, t) => {
            var a = {};
            for (var n in e) r.call(e, n) && 0 > t.indexOf(n) && (a[n] = e[n]);
            if (null != e && l)
                for (var n of l(e)) 0 > t.indexOf(n) && i.call(e, n) && (a[n] = e[n]);
            return a
        })(e, ["alt", "color", "size", "weight", "mirrored", "children", "weights"]);
        return t.default.createElement("svg", ((e, t) => {
            for (var a in t || (t = {})) r.call(t, a) && n(e, a, t[a]);
            if (l)
                for (var a of l(t)) i.call(t, a) && n(e, a, t[a]);
            return e
        })({
            ref: a,
            xmlns: "http://www.w3.org/2000/svg",
            width: d,
            height: d,
            fill: o,
            viewBox: "0 0 256 256",
            transform: u ? "scale(-1, 1)" : void 0
        }, f), !!s && t.default.createElement("title", null, s), m, h.get(c))
    });
    s.displayName = "SSRBase", e.s(["default", 0, s])
}, 690019, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722978);
    let l = {
        sm: "mango-container-sm",
        md: "mango-container-md",
        lg: "mango-container-lg"
    };
    e.s(["MANGO_DEFAULT_BLOCK_PADDING", 0, {
        top: "pt-[2.75rem]",
        bottom: "pb-[2.75rem]"
    }, "default", 0, ({
        children: e,
        className: r,
        style: i,
        theme: n = "light",
        padding: s,
        defaultBlockPadding: o,
        nested: d = !1,
        container: c
    }) => {
        let u = (0, a.default)(s?.top ? ({
            none: "pt-0",
            xs: "md:pt-8 pt-6",
            sm: "md:pt-20 pt-[2.75rem]",
            md: "md:pt-[9.25rem] pt-16",
            lg: "md:pt-[11.25rem] pt-[6rem]"
        })[s.top] : o.top, s?.bottom ? ({
            none: "pb-0",
            xs: "md:pb-8 pb-6",
            sm: "md:pb-20 pb-[2.75rem]",
            md: "md:pb-[9.25rem] pb-16",
            lg: "md:pb-[11.25rem] pb-[6rem]"
        })[s.bottom] : o.bottom);
        if (d) return (0, t.jsx)(t.Fragment, {
            children: e
        });
        let m = c ? (0, t.jsx)("div", {
                className: l[c],
                children: e
            }) : e,
            h = (0, a.default)({
                dark: "dark" === n
            });
        return (0, t.jsx)("section", {
            className: h,
            children: (0, t.jsx)("div", {
                className: (0, a.default)(r, u),
                style: i,
                children: m
            })
        })
    }])
}, 651235, e => {
    "use strict";
    let t = e.i(690019).default;
    e.s(["default", 0, t])
}, 880749, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(3931),
        l = e.i(655105),
        r = e.i(722978),
        i = e.i(153348),
        n = e.i(955429),
        s = e.i(291158),
        o = e.i(78070);
    let d = (0, e.i(828083).default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        c = ({
            url: e,
            playing: a = !0,
            isActive: l = !0,
            loop: r = !0,
            muted: i = !0,
            playsinline: n = !0,
            controls: s = !1,
            onReady: o,
            className: c,
            style: u
        }) => (0, t.jsx)(d, {
            url: e,
            playing: l && a,
            loop: r,
            muted: i,
            playsinline: n,
            controls: s,
            width: "100%",
            height: "100%",
            className: c ?? "[&>video]:object-cover",
            style: u,
            onReady: o
        }),
        u = {
            "top-right": "absolute top-3 right-3 z-20",
            "top-left": "absolute top-3 left-3 z-20",
            "bottom-right": "absolute bottom-3 right-3 z-20",
            "bottom-left": "absolute bottom-3 left-3 z-20",
            center: "absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
        },
        m = {
            "top-right": "xs",
            "top-left": "xs",
            "bottom-right": "xs",
            "bottom-left": "xs",
            center: "md"
        },
        h = ({
            position: e,
            isPlaying: a,
            onToggle: l
        }) => (0, t.jsx)("span", {
            className: u[e],
            children: (0, t.jsx)(o.default, {
                disableAnimation: !0,
                icon: a ? "pause" : "play",
                iconWeight: "fill",
                variant: "secondary",
                size: m[e],
                onClick: l,
                ariaLabel: a ? "Pause video" : "Play video"
            })
        }),
        f = ({
            poster: e,
            posterSizes: a,
            posterPriority: i,
            visible: n,
            onClick: o,
            showPlayBadge: d,
            dim: c
        }) => {
            let u = (0, r.default)("absolute inset-0 transition-opacity duration-500", n ? "opacity-100 z-10" : "pointer-events-none opacity-0"),
                m = (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsx)(l.default, {
                        src: e.src,
                        alt: e.alt ?? "",
                        fill: !0,
                        sizes: a,
                        priority: i,
                        className: (0, r.default)("object-cover", c && "brightness-75"),
                        ...e.placeholder ? {
                            placeholder: "blur",
                            blurDataURL: e.placeholder
                        } : {}
                    }), d && (0, t.jsx)("span", {
                        className: "absolute inset-0 flex items-center justify-center",
                        children: (0, t.jsx)("span", {
                            className: "dark:bg-mango-black/90 flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition-transform group-hover:scale-110 group-focus-visible:scale-110 dark:text-white",
                            children: (0, t.jsx)(s.default, {
                                icon: "play",
                                size: "1.5rem",
                                weight: "fill"
                            })
                        })
                    })]
                });
            return o ? (0, t.jsx)("button", {
                type: "button",
                "aria-label": "Play video",
                className: `group block w-full ${u}`,
                onClick: o,
                children: m
            }) : (0, t.jsx)("div", {
                className: u,
                children: m
            })
        };
    e.s(["default", 0, ({
        src: e,
        mode: l = "click-to-play",
        poster: r,
        posterSizes: s = "100vw",
        posterPriority: o = !1,
        controls: d,
        isActive: u = !0,
        onPlayingChange: m,
        className: g
    }) => {
        let p = (0, a.useRef)(null),
            x = (0, i.useInView)(p, {
                once: !0
            }),
            v = (0, n.useReducedMotion)(),
            b = "click-to-play" === l,
            j = "autoplay" === l,
            [y, w] = (0, a.useState)(j),
            [k, N] = (0, a.useState)(!1),
            [C, L] = (0, a.useState)(j),
            S = e => {
                w(e), e && L(!0), m?.(e)
            },
            T = b ? y : x && !v,
            R = !!r?.src && !(k && C),
            E = d ? "string" == typeof d ? d : y ? d.playing : d.paused : "none",
            M = b ? () => S(!0) : void 0;
        return (0, t.jsxs)("div", {
            ref: p,
            className: g ?? "relative aspect-video w-full overflow-hidden rounded-2xl bg-mango-black",
            children: [T && (0, t.jsx)(c, {
                url: e,
                isActive: u,
                playing: y,
                loop: !b,
                muted: !b,
                playsinline: !b,
                controls: b,
                onReady: () => N(!0)
            }), r?.src && (0, t.jsx)(f, {
                poster: r,
                posterSizes: s,
                posterPriority: o,
                visible: R,
                onClick: M,
                showPlayBadge: b,
                dim: b
            }), "none" !== E && k && (0, t.jsx)(h, {
                position: E,
                isPlaying: y,
                onToggle: () => S(!y)
            })]
        })
    }], 880749)
}, 350747, e => {
    "use strict";
    let t = e.i(880749).default;
    e.s(["default", 0, t])
}, 694983, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722990),
        l = e.i(722978),
        r = e.i(691156),
        i = e.i(131564);
    let n = ({
        title: e,
        faqs: a,
        blockKey: n,
        theme: s
    }) => {
        let o = (0, l.default)("pb-28", {
            "dark bg-black": "dark" === s
        });
        return (0, t.jsxs)("section", {
            className: o,
            children: [(0, t.jsx)(i.default, {
                title: e
            }), (0, t.jsx)("div", {
                className: "container grid gap-1",
                children: a?.map((a, l) => (0, t.jsx)(r.default, {
                    title: a.question,
                    blockKey: `${n}-${e}-${l}`,
                    children: a.answer
                }, `faq-${e}-${l}`))
            })]
        })
    };
    e.s(["default", 0, ({
        title: e,
        faqs: l,
        blockKey: r,
        isHidden: i,
        theme: s
    }) => (0, t.jsx)(t.Fragment, {
        children: !i && (0, t.jsx)(n, {
            theme: "dark" === s ? "dark" : "light",
            title: e,
            faqs: l?.map(e => ({
                question: e.question,
                answer: (0, t.jsx)(a.PortableText, {
                    value: e.answer
                })
            })),
            blockKey: r
        })
    })], 694983)
}, 791154, 37654, 698949, 500563, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(722990),
        l = e.i(3931),
        r = e.i(766930),
        i = e.i(722978),
        n = e.i(828083),
        s = e.i(655105),
        o = e.i(526826),
        d = e.i(376936),
        c = e.i(192207),
        u = e.i(529363),
        m = e.i(153348),
        h = e.i(955429);

    function f(e, t, a) {
        (0, l.useInsertionEffect)(() => e.on(t, a), [e, t, a])
    }
    e.s(["useMotionValueEvent", 0, f], 37654);
    var g = e.i(749583),
        p = e.i(2062),
        x = e.i(805518),
        v = e.i(14452);
    let b = (0, n.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        j = ({
            children: e
        }) => {
            let a = l.default.Children.toArray(e);
            return (0, t.jsx)(r.default, {
                children: (0, t.jsx)("section", {
                    className: "dark relative",
                    style: {
                        height: `${100*e.length}vh`
                    },
                    children: a.map((e, t) => l.default.cloneElement(e, {
                        index: t,
                        total: a.length
                    }))
                })
            })
        };
    j.Block = ({
        title: e,
        description: a,
        actions: r,
        image: n,
        video: j,
        index: y = 1,
        total: w = 1
    }) => {
        let [k, N] = (0, l.useState)(!1), [C, L] = (0, l.useState)(!1), S = (0, l.useRef)(null), T = (0, m.useInView)(S, {
            once: !0
        }), R = (0, h.useReducedMotion)(), E = 1 / w * y, M = .75 * E, {
            scrollYProgress: B
        } = (0, d.useScroll)({
            target: S
        }), A = (0, c.useTransform)(B, [E, y !== w - 1 ? E + M : 1], [0, 1], {
            ease: u.easeInOut
        }), z = (0, c.useTransform)(B, [E, y !== w - 1 ? E + M : 1], [100, 0], {
            ease: u.easeInOut
        }), D = -((S.current?.offsetHeight || 0) / w) * y;
        f(B, "change", e => {
            N(e >= E)
        });
        let I = (0, i.default)("object-cover transition-opacity duration-1000", {
                "opacity-0": C
            }),
            P = (0, t.jsx)("div", {
                className: "hidden rounded-xl bg-black/70 px-2 py-3 md:block",
                children: Array.from(Array(w), (e, a) => {
                    let l = (0, i.default)("mb-3 h-3 w-3 rounded-full last:mb-0", {
                        "bg-white": y === a,
                        "bg-gray-800": y !== a
                    });
                    return (0, t.jsx)("div", {
                        className: l
                    }, `scroller-progress-${a}`)
                })
            }),
            H = (0, i.default)("absolute h-full w-full", {
                "pointer-events-none": !k
            });
        return (0, t.jsx)(o.m.div, {
            ref: S,
            className: H,
            style: {
                opacity: E ? A : 1,
                scrollMarginTop: D
            },
            children: (0, t.jsxs)("div", {
                className: "sticky top-0 h-screen w-full",
                children: [T && !R && (0, t.jsx)(b, {
                    url: j.src,
                    width: "100%",
                    height: "100%",
                    playing: !0,
                    muted: !0,
                    loop: !0,
                    playsinline: !0,
                    onReady: () => {
                        L(!0)
                    },
                    className: "absolute [&>video]:object-cover",
                    config: {
                        hlsOptions: {
                            maxMaxBufferLength: 1
                        }
                    }
                }), (0, t.jsx)(s.default, {
                    fill: !0,
                    src: n.src,
                    alt: "",
                    className: I,
                    placeholder: "blur",
                    blurDataURL: n.placeholder
                }), (0, t.jsx)("div", {
                    className: "absolute bottom-0 h-full w-full bg-gradient-to-t from-black"
                }), w > 1 && (0, t.jsx)("div", {
                    className: "absolute right-0 mr-16 flex h-full flex-col justify-center",
                    children: P
                }), (0, t.jsx)("div", {
                    className: "relative grid h-full grid-cols-12",
                    children: (0, t.jsx)("div", {
                        className: "col-span-10 col-start-2 mb-28 flex flex-col-reverse md:col-span-4 md:col-start-2",
                        children: (0, t.jsxs)(o.m.div, {
                            style: {
                                y: E ? z : 0
                            },
                            className: "flex flex-col items-center text-center md:items-start md:text-left",
                            children: [(0, t.jsx)(v.default, {
                                children: e
                            }), (0, t.jsx)(x.default, {
                                className: "mb-12",
                                children: a
                            }), (0, t.jsx)(p.default, {
                                children: r.map((e, a) => (0, t.jsx)(g.default, {
                                    href: e.href,
                                    rounded: !0,
                                    outlined: 0 === a,
                                    variant: 0 === a ? "primary" : "secondary",
                                    hasArrow: !0,
                                    onFocus: () => {
                                        S.current?.scrollIntoView({
                                            block: "start"
                                        })
                                    },
                                    children: e.title
                                }, `action-${e.title}-${a}`))
                            })]
                        })
                    })
                })]
            })
        })
    }, e.s(["default", 0, ({
        fullPageBlocks: e,
        isHidden: l
    }) => (0, t.jsx)(j, {
        children: e.map(({
            title: r,
            brandfolder: i,
            image: n,
            description: s,
            actions: o
        }, d) => {
            let c = {
                    src: i?.muxHLSURL || ""
                },
                u = {
                    src: n?.asset.url || "",
                    placeholder: n?.asset.metadata?.blurHash || ""
                };
            return (0, t.jsx)(t.Fragment, {
                children: !l && (0, t.jsx)(j.Block, {
                    index: d,
                    total: e.length,
                    title: r || "",
                    description: (0, t.jsx)(a.PortableText, {
                        value: s
                    }),
                    actions: o?.map(e => ({
                        title: e.text || "",
                        href: e.link?.href.current || ""
                    })) || [],
                    image: u,
                    video: c
                }, `full-page-scroller-block-${r}-${d}`)
            })
        })
    })], 791154);
    let y = ({
        children: e,
        className: a = ""
    }) => {
        let l = (0, i.clsx)("py-4 px-8 lg:flex lg:justify-between gap-4 col-start-2 col-end-12", a);
        return (0, t.jsx)("section", {
            className: "grid grid-cols-12 bg-gray-900 pb-32",
            children: (0, t.jsx)("div", {
                className: l,
                children: e
            })
        })
    };
    y.Item = ({
        children: e
    }) => (0, t.jsx)("div", {
        className: "loco-text-body-md mb-6 flex flex-col items-center text-center text-white last:mb-0 md:text-left lg:m-0 lg:flex-row lg:gap-4",
        children: e
    }), e.s(["default", 0, ({
        items: e,
        isHidden: l
    }) => (0, t.jsx)(t.Fragment, {
        children: !l && (0, t.jsx)(y, {
            children: e?.map((e, l) => (0, t.jsxs)(y.Item, {
                children: [e.image?.file?.asset.url && (0, t.jsx)(s.default, {
                    src: e.image?.file?.asset.url,
                    alt: e.image?.alt ?? "",
                    width: 24,
                    height: 24
                }), (0, t.jsx)(x.default, {
                    children: (0, t.jsx)(a.PortableText, {
                        value: e.text
                    })
                })]
            }, `social-proof-item-${l}`))
        })
    })], 698949);
    var w = e.i(78070),
        k = e.i(350747),
        N = e.i(651235);

    function C(e) {
        var t = e.toString(16);
        return 1 === t.length ? "0" + t : t
    }

    function L(e) {
        return "#" + e.map(C).join("")
    }

    function S(e, t, a) {
        for (var l = 0; l < a.length; l++)
            if (function(e, t, a) {
                    var l, r, i, n, s, o;
                    switch (a.length) {
                        case 3:
                            if (l = e, r = t, i = a, 255 !== l[r + 3] || l[r] === i[0] && l[r + 1] === i[1] && l[r + 2] === i[2]) return !0;
                            break;
                        case 4:
                            if (n = e, s = t, o = a, n[s + 3] && o[3] ? n[s] === o[0] && n[s + 1] === o[1] && n[s + 2] === o[2] && n[s + 3] === o[3] : n[s + 3] === o[3]) return !0;
                            break;
                        case 5:
                            if (function(e, t, a) {
                                    var l = a[0],
                                        r = a[1],
                                        i = a[2],
                                        n = a[3],
                                        s = a[4],
                                        o = e[t + 3],
                                        d = T(o, n, s);
                                    return n ? !!(!o && d || T(e[t], l, s) && T(e[t + 1], r, s) && T(e[t + 2], i, s) && d) : d
                                }(e, t, a)) return !0;
                            break;
                        default:
                            return !1
                    }
                }(e, t, a[l])) return !0;
        return !1
    }

    function T(e, t, a) {
        return e >= t - a && e <= t + a
    }

    function R(e, t, a) {
        for (var l = {}, r = a.dominantDivider || 24, i = a.ignoredColor, n = a.step, s = [0, 0, 0, 0, 0], o = 0; o < t; o += n) {
            var d = e[o],
                c = e[o + 1],
                u = e[o + 2],
                m = e[o + 3];
            if (!(i && S(e, o, i))) {
                var h = Math.round(d / r) + "," + Math.round(c / r) + "," + Math.round(u / r);
                l[h] ? l[h] = [l[h][0] + d * m, l[h][1] + c * m, l[h][2] + u * m, l[h][3] + m, l[h][4] + 1] : l[h] = [d * m, c * m, u * m, m, 1], s[4] < l[h][4] && (s = l[h])
            }
        }
        var f = s[0],
            g = s[1],
            p = s[2],
            x = s[3],
            v = s[4];
        return x ? [Math.round(f / x), Math.round(g / x), Math.round(p / x), Math.round(x / v)] : a.defaultColor
    }

    function E(e, t, a) {
        for (var l = 0, r = 0, i = 0, n = 0, s = 0, o = a.ignoredColor, d = a.step, c = 0; c < t; c += d) {
            var u = e[c + 3],
                m = e[c] * u,
                h = e[c + 1] * u,
                f = e[c + 2] * u;
            !(o && S(e, c, o)) && (l += m, r += h, i += f, n += u, s++)
        }
        return n ? [Math.round(l / n), Math.round(r / n), Math.round(i / n), Math.round(n / s)] : a.defaultColor
    }

    function M(e, t, a) {
        for (var l = 0, r = 0, i = 0, n = 0, s = 0, o = a.ignoredColor, d = a.step, c = 0; c < t; c += d) {
            var u = e[c],
                m = e[c + 1],
                h = e[c + 2],
                f = e[c + 3];
            !(o && S(e, c, o)) && (l += u * u * f, r += m * m * f, i += h * h * f, n += f, s++)
        }
        return n ? [Math.round(Math.sqrt(l / n)), Math.round(Math.sqrt(r / n)), Math.round(Math.sqrt(i / n)), Math.round(n / s)] : a.defaultColor
    }

    function B(e) {
        return A(e, "defaultColor", [0, 0, 0, 0])
    }

    function A(e, t, a) {
        return void 0 === e[t] ? a : e[t]
    }

    function z(e) {
        var t, a, l;
        return (t = e, "u" > typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) ? "canvas" : (a = e, I && a instanceof OffscreenCanvas) ? "offscreencanvas" : P(e) ? "videoframe" : (l = e, "u" > typeof ImageBitmap && l instanceof ImageBitmap) ? "imagebitmap" : e.src
    }

    function D(e) {
        return "u" > typeof HTMLImageElement && e instanceof HTMLImageElement
    }
    var I = "u" > typeof OffscreenCanvas;

    function P(e) {
        return "u" > typeof VideoFrame && e instanceof VideoFrame
    }
    var H = "u" < typeof window;

    function _(e) {
        return Error("FastAverageColor: " + e)
    }

    function F(e, t) {
        t || console.error(e)
    }
    var O = function() {
        function e() {
            this.canvas = null, this.ctx = null
        }
        return e.prototype.getColorAsync = function(e, t) {
            if (!e) return Promise.reject(_("call .getColorAsync() without resource"));
            if ("string" == typeof e) {
                if ("u" < typeof Image) return Promise.reject(_("resource as string is not supported in this environment"));
                var a = new Image;
                return a.crossOrigin = t && t.crossOrigin || "", a.src = e, this.bindImageEvents(a, t)
            }
            if (D(e) && !e.complete) return this.bindImageEvents(e, t);
            var l = this.getColor(e, t);
            return l.error ? Promise.reject(l.error) : Promise.resolve(l)
        }, e.prototype.getColor = function(e, t) {
            var a, l, r, i, n, s, o, d, c = B(t = t || {});
            if (!e) {
                var u = _("call .getColor() without resource");
                return F(u, t.silent), this.prepareResult(c, u)
            }
            var m = (a = function(e) {
                if (D(e)) {
                    var t, a = e.naturalWidth,
                        l = e.naturalHeight;
                    return e.naturalWidth || -1 === e.src.search(/\.svg(\?|$)/i) || (a = l = 100), {
                        width: a,
                        height: l
                    }
                }
                return (t = e, "u" > typeof HTMLVideoElement && t instanceof HTMLVideoElement) ? {
                    width: e.videoWidth,
                    height: e.videoHeight
                } : P(e) ? {
                    width: e.codedWidth,
                    height: e.codedHeight
                } : {
                    width: e.width,
                    height: e.height
                }
            }(e), r = A(l = t, "left", 0), i = A(l, "top", 0), n = A(l, "width", a.width), s = A(l, "height", a.height), o = n, d = s, "precision" === l.mode || (n > s ? d = Math.round((o = 100) / (n / s)) : o = Math.round((d = 100) / (s / n)), (o > n || d > s || o < 10 || d < 10) && (o = n, d = s)), {
                srcLeft: r,
                srcTop: i,
                srcWidth: n,
                srcHeight: s,
                destWidth: o,
                destHeight: d
            });
            if (!m.srcWidth || !m.srcHeight || !m.destWidth || !m.destHeight) {
                var u = _('incorrect sizes for resource "'.concat(z(e), '"'));
                return F(u, t.silent), this.prepareResult(c, u)
            }
            if (!this.canvas && (this.canvas = H ? I ? new OffscreenCanvas(1, 1) : null : document.createElement("canvas"), !this.canvas)) {
                var u = _("OffscreenCanvas is not supported in this browser");
                return F(u, t.silent), this.prepareResult(c, u)
            }
            if (!this.ctx) {
                if (this.ctx = this.canvas.getContext("2d", {
                        willReadFrequently: !0
                    }), !this.ctx) {
                    var u = _("Canvas Context 2D is not supported in this browser");
                    return F(u, t.silent), this.prepareResult(c)
                }
                this.ctx.imageSmoothingEnabled = !1
            }
            this.canvas.width = m.destWidth, this.canvas.height = m.destHeight;
            try {
                this.ctx.clearRect(0, 0, m.destWidth, m.destHeight), this.ctx.drawImage(e, m.srcLeft, m.srcTop, m.srcWidth, m.srcHeight, 0, 0, m.destWidth, m.destHeight);
                var h = this.ctx.getImageData(0, 0, m.destWidth, m.destHeight).data;
                return this.prepareResult(this.getColorFromArray4(h, t))
            } catch (a) {
                var u = _("security error (CORS) for resource ".concat(z(e), ".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"));
                return F(u, t.silent), t.silent || console.error(a), this.prepareResult(c, u)
            }
        }, e.prototype.getColorFromArray4 = function(e, t) {
            t = t || {};
            var a, l, r = e.length,
                i = B(t);
            if (r < 4) return i;
            var n = 4 * (t.step || 1);
            switch (t.algorithm || "sqrt") {
                case "simple":
                    a = E;
                    break;
                case "sqrt":
                    a = M;
                    break;
                case "dominant":
                    a = R;
                    break;
                default:
                    throw _("".concat(t.algorithm, " is unknown algorithm"))
            }
            return a(e, r - r % 4, {
                defaultColor: i,
                ignoredColor: (l = t.ignoredColor) ? Array.isArray(l[0]) ? l : [l] : [],
                step: n,
                dominantDivider: t.dominantDivider
            })
        }, e.prototype.prepareResult = function(e, t) {
            var a = e.slice(0, 3),
                l = [e[0], e[1], e[2], e[3] / 255],
                r = (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
            return {
                value: [e[0], e[1], e[2], e[3]],
                rgb: "rgb(" + a.join(",") + ")",
                rgba: "rgba(" + l.join(",") + ")",
                hex: L(a),
                hexa: L(e),
                isDark: r,
                isLight: !r,
                error: t
            }
        }, e.prototype.destroy = function() {
            this.canvas && (this.canvas.width = 1, this.canvas.height = 1, this.canvas = null), this.ctx = null
        }, e.prototype.bindImageEvents = function(e, t) {
            var a = this;
            return new Promise(function(l, r) {
                var i = function() {
                        o();
                        var i = a.getColor(e, t);
                        i.error ? r(i.error) : l(i)
                    },
                    n = function() {
                        o(), r(_('Error loading image "'.concat(e.src, '"')))
                    },
                    s = function() {
                        o(), r(_('Image "'.concat(e.src, '" loading aborted')))
                    },
                    o = function() {
                        e.removeEventListener("load", i), e.removeEventListener("error", n), e.removeEventListener("abort", s)
                    };
                e.addEventListener("load", i), e.addEventListener("error", n), e.addEventListener("abort", s)
            })
        }, e
    }();
    let $ = e => [parseInt(e.slice(1, 3), 16), parseInt(e.slice(3, 5), 16), parseInt(e.slice(5, 7), 16)],
        q = (e, t) => {
            let a, l, r, [i, n, s] = $(e),
                o = e => Math.max(0, Math.min(255, Math.round(e + e * t / 100)));
            return a = o(i), l = o(n), r = o(s), `#${a.toString(16).padStart(2,"0")}${l.toString(16).padStart(2,"0")}${r.toString(16).padStart(2,"0")}`
        },
        U = async e => {
            let t = new O;
            try {
                let a = (await t.getColorAsync(e, {
                        ignoredColor: [
                            [255, 255, 255, 255],
                            [0, 0, 0, 255]
                        ]
                    })).hex,
                    l = (e => {
                        let [t, a, l] = $(e);
                        return (.299 * t + .587 * a + .114 * l) / 255 < .6
                    })(a),
                    r = q(a, -15),
                    i = q(a, -8);
                return {
                    isDark: l,
                    mainColor: a,
                    dark: r,
                    light: i
                }
            } finally {
                t.destroy()
            }
        };
    var W = e.i(825610);
    let V = e => {
            let [a, r] = (0, l.useState)(!1), n = (0, i.default)("overflow-hidden md:hidden transition-all duration-500 ease-in-out", {
                "max-h-0": !a,
                "max-h-96": a
            });
            return (0, t.jsxs)("div", {
                className: "col-span-4 mt-7 flex flex-col gap-7 md:col-span-7 md:mt-0 md:grid lg:grid-cols-7",
                children: [(0, t.jsxs)("div", {
                    className: "col-span-7 grid grid-cols-7 gap-x-5",
                    children: [(0, t.jsx)("p", {
                        className: "mango-text-heading-md col-span-5",
                        children: e.title
                    }), (0, t.jsx)(w.default, {
                        className: "col-span-1 col-start-7 hidden justify-self-end md:block",
                        variant: "secondary",
                        icon: "x",
                        size: "lg",
                        onClick: e.onClose
                    })]
                }), (0, t.jsxs)("div", {
                    className: "flex flex-col self-end md:col-span-7 md:grid md:grid-cols-7 md:gap-0 md:gap-x-5",
                    children: [e.description && (0, t.jsx)("div", {
                        className: "hidden md:col-span-3 md:flex",
                        children: (0, t.jsx)("p", {
                            className: "mango-text-body-base pb-8 md:self-end md:pb-0",
                            children: e.description?.value
                        })
                    }), (0, t.jsxs)("div", {
                        className: "md:col-span-4 md:col-start-4 md:flex md:flex-col md:justify-between lg:col-span-3 lg:col-start-5",
                        children: [e.details && e.details.length > 0 && (0, t.jsx)("ul", {
                            className: "flex flex-col gap-2 pb-8",
                            children: e.details.map(e => (0, t.jsxs)("li", {
                                className: "flex gap-5",
                                children: [(0, t.jsx)("p", {
                                    className: "mango-text-input w-[100px]",
                                    children: e.label
                                }), (0, t.jsx)("p", {
                                    className: "mango-text-input text-gray-600 dark:text-gray-300",
                                    children: e.value
                                })]
                            }, e.label))
                        }), e.description && (0, t.jsx)("div", {
                            className: n,
                            children: (0, t.jsx)("p", {
                                className: "mango-text-body-base pb-8 md:col-span-3",
                                children: e.description?.value
                            })
                        }), e.description && e.action && (0, t.jsxs)("div", {
                            className: "flex gap-2",
                            children: [e.description?.readMoreLabel && (0, t.jsx)(w.default, {
                                className: "md:hidden",
                                onClick: () => r(!a),
                                variant: "secondary",
                                icon: a ? "caret-up" : "caret-down",
                                children: e.description?.readMoreLabel
                            }), (0, t.jsx)("div", {
                                children: (0, t.jsx)(w.default, {
                                    href: e.action?.href,
                                    target: e.action?.target,
                                    variant: "primary",
                                    icon: "arrow-right",
                                    "data-link-location": W.trackingLocation.deluxeAnnouncementBannerAction,
                                    "data-link-id": "deluxe-banner-action",
                                    children: e.action?.label
                                })
                            })]
                        })]
                    })]
                })]
            })
        },
        G = ({
            image: e,
            video: a
        }) => a ? (0, t.jsx)(k.default, {
            src: a.src,
            mode: "manual",
            poster: e,
            posterSizes: "(max-width: 768px) 75vw, (max-width: 1024px) 42vw, 33vw",
            controls: "bottom-right",
            className: "relative aspect-video min-h-full w-full overflow-hidden rounded-lg"
        }) : (0, t.jsx)("div", {
            className: "relative aspect-video min-h-full w-full overflow-hidden rounded-lg",
            children: (0, t.jsx)(s.default, {
                src: e.src,
                alt: e.alt,
                placeholder: "blur",
                blurDataURL: e.placeholder,
                fill: !0,
                sizes: "(max-width: 768px) 75vw, (max-width: 1024px) 42vw, 33vw",
                className: "object-cover"
            })
        }),
        K = e => {
            let [a, r] = (0, l.useState)(e.animate ?? !1), {
                isDark: n,
                dark: s,
                light: o
            } = (e => {
                let [t, a] = (0, l.useState)(!1), [r, i] = (0, l.useState)(null), [n, s] = (0, l.useState)(null), [o, d] = (0, l.useState)(null), [c, u] = (0, l.useState)(null), [m, h] = (0, l.useState)(null), f = (0, l.useCallback)(() => {
                    s(null), d(null), u(null), h(null)
                }, []), g = (0, l.useCallback)(async e => {
                    if (!e) return void f();
                    a(!0), i(null);
                    try {
                        let t = await U(e);
                        s(t.isDark), d(t.mainColor), u(t.dark), h(t.light), a(!1)
                    } catch (e) {
                        i(e instanceof Error ? e.message : "Failed to extract color"), f(), a(!1)
                    }
                }, [f]);
                return (0, l.useEffect)(() => {
                    e ? g(e) : (i(null), f(), a(!1))
                }, [e, g, f]), {
                    isLoading: t,
                    error: r,
                    isDark: n,
                    mainColor: o,
                    dark: c,
                    light: m
                }
            })(e.image.placeholder);
            (0, l.useEffect)(() => {
                if (e.animate) {
                    let e = setTimeout(() => {
                        r(!1)
                    }, 1e3);
                    return () => clearTimeout(e)
                }
            }, [e.animate]);
            let d = (0, i.default)("relative grid grid-cols-4 gap-x-2 md:gap-x-5 md:grid-cols-12 p-4 md:p-6 z-10"),
                c = e.hasBackgroundGradient && s && o ? {
                    background: `linear-gradient(94deg, ${s} 7%, ${o} 105.47%)`
                } : void 0,
                u = e.hasBackgroundGradient && null !== n ? n ? "dark" : "light" : e.theme ?? "light";
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: (0, i.default)("fixed inset-0 z-40 bg-black/30", e.animate && "transition-opacity duration-300", e.animate && a ? "opacity-0" : "opacity-100")
                }), (0, t.jsx)(N.default, {
                    className: (0, i.default)("fixed left-0 z-40 w-full bg-white dark:bg-black", e.animate && "transition-transform duration-300 ease-out", e.animate && a ? "-translate-y-[calc(100%+5rem)]" : "translate-y-0"),
                    style: c,
                    theme: u,
                    defaultBlockPadding: {
                        top: "pt-0",
                        bottom: "pb-0"
                    },
                    children: (0, t.jsx)("div", {
                        className: "mango-container",
                        children: (0, t.jsxs)("div", {
                            className: d,
                            children: [(0, t.jsx)("div", {
                                className: "col-span-3 md:col-span-5",
                                children: (0, t.jsx)(G, {
                                    image: e.image,
                                    video: e.video
                                })
                            }), (0, t.jsx)(V, {
                                ...e
                            }), (0, t.jsx)("div", {
                                className: "absolute bottom-[-4.25rem] left-[50%] translate-x-[-50%] md:hidden",
                                children: (0, t.jsx)(w.default, {
                                    variant: "secondary",
                                    icon: "x",
                                    size: "lg",
                                    onClick: e.onClose
                                })
                            })]
                        })
                    })
                })]
            })
        };
    var Z = e.i(779712);
    e.s(["default", 0, ({
        title: e,
        description: a,
        action: r,
        settings: i,
        hasBackgroundGradient: n,
        image: s,
        video: o,
        details: d
    }) => {
        let [c, u] = (0, l.useState)(!1), m = `banner_dismissed_until_${e.replace(/\s+/g,"_").toLowerCase()}`;
        return ((0, l.useEffect)(() => {
            let e = (() => {
                try {
                    let e = localStorage.getItem(m);
                    return e ? Number(e) : null
                } catch {
                    return null
                }
            })();
            e && e > Date.now() || u(!0)
        }, [m]), i?.isHidden) ? null : (0, t.jsx)(t.Fragment, {
            children: c && (0, t.jsx)(K, {
                animate: !0,
                hasBackgroundGradient: n || !1,
                title: e,
                theme: i?.theme === "dark" ? "dark" : "light",
                description: a ?? void 0,
                action: r ? {
                    href: r.fieldLink?.linkReference?.href?.current ?? "",
                    target: r.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self",
                    label: r.text ?? ""
                } : void 0,
                image: {
                    src: s ? (0, Z.urlForImage)(s)?.fit("crop").width(1200).height(750).dpr(2).url() ?? "" : "",
                    alt: s?.alt ?? "",
                    placeholder: s?.asset?.metadata?.lqip ?? ""
                },
                video: o?.muxHLSURL ? {
                    src: o.muxHLSURL
                } : void 0,
                details: d ?? void 0,
                onClose: () => {
                    u(!1), ((e = 7) => {
                        let t = Date.now() + 24 * e * 36e5;
                        localStorage.setItem(m, String(t))
                    })(7)
                }
            })
        })
    }], 500563)
}, 255018, e => {
    "use strict";
    var t = e.i(500783),
        a = e.i(480880),
        l = e.i(401861),
        r = e.i(584266),
        i = e.i(817916),
        n = e.i(3931),
        s = e.i(655105),
        o = e.i(526826),
        d = e.i(153348),
        c = e.i(955429),
        u = e.i(376936),
        m = e.i(192207),
        h = e.i(828083),
        f = e.i(570994),
        g = e.i(722978),
        p = e.i(766930);
    let x = (0, h.default)(() => e.A(410979), {
            loadableGenerated: {
                modules: [942019]
            },
            ssr: !1
        }),
        v = ({
            title: e,
            headline: a,
            image: l,
            video: r
        }) => {
            let i = (0, n.useRef)(null),
                h = (0, d.useInView)(i, {
                    once: !0
                }),
                v = (0, c.useReducedMotion)(),
                [b, j] = (0, n.useState)(!1),
                {
                    scrollYProgress: y
                } = (0, u.useScroll)({
                    target: i,
                    offset: ["start start", "end end"]
                }),
                w = (0, m.useTransform)(y, [0, 1], ["25vh", "100vh"]),
                k = (0, m.useTransform)(y, [0, 1], ["25%", "100%"]),
                N = (0, m.useTransform)(y, [0, 1], ["10vh", "0vh"]),
                C = (0, m.useTransform)(y, [0, 1], ["-10vh", "-47.5vh"]),
                L = (0, m.useTransform)(y, [0, .9], [1, 0]),
                S = (0, m.useTransform)(y, [0, .9], [0, 1]),
                T = (0, m.useTransform)(y, [0, 1], ["5vh", "40vh"]),
                R = (0, g.default)("z-10 transition-opacity duration-500 object-cover brightness-50", {
                    "opacity-0": b && !v && h && r.src
                });
            return (0, t.jsx)(p.default, {
                children: (0, t.jsx)("div", {
                    ref: i,
                    className: "relative h-[200vh]",
                    children: (0, t.jsxs)("div", {
                        className: "sticky top-[0px] flex h-screen flex-col items-center justify-center bg-black",
                        children: [(0, t.jsx)(o.m.div, {
                            style: {
                                top: C,
                                opacity: L
                            },
                            className: "relative",
                            children: (0, t.jsx)(f.default, {
                                title: e,
                                fullScreen: !1,
                                titleSize: "small"
                            })
                        }), (0, t.jsx)(o.m.div, {
                            style: {
                                opacity: S,
                                bottom: T
                            },
                            className: "absolute z-20",
                            children: (0, t.jsx)(f.default, {
                                title: a.title,
                                actions: a.actions,
                                titleSize: "small",
                                fullScreen: !1
                            })
                        }), (0, t.jsxs)(o.m.div, {
                            style: {
                                height: w,
                                width: k,
                                bottom: N
                            },
                            className: "absolute overflow-hidden rounded-[8px]",
                            children: [l && l.src && (0, t.jsx)(s.default, {
                                fill: !0,
                                alt: l.alt,
                                src: l.src,
                                placeholder: "blur",
                                blurDataURL: l.placeholder,
                                className: R
                            }), h && !v && r?.src && (0, t.jsx)(x, {
                                url: r.src,
                                playing: !0,
                                loop: !0,
                                muted: !0,
                                playsinline: !0,
                                width: "100%",
                                height: "100%",
                                onReady: () => {
                                    j(!0)
                                },
                                className: "brightness-50 [&>video]:object-cover",
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
            })
        };
    var b = e.i(776910),
        j = e.i(81636),
        y = e.i(32382),
        w = e.i(913890),
        k = e.i(673300),
        N = e.i(649042),
        C = e.i(4390),
        L = e.i(893171),
        S = e.i(694983),
        T = e.i(692627),
        R = e.i(569074),
        E = e.i(686916),
        M = e.i(5124),
        B = e.i(314669),
        A = e.i(789924),
        z = e.i(457689),
        D = e.i(787213),
        I = e.i(123849),
        P = e.i(583877),
        H = e.i(277965),
        _ = e.i(68274),
        F = e.i(794189),
        O = e.i(25665),
        $ = e.i(883027),
        q = e.i(722990),
        U = e.i(749583),
        W = e.i(805518);
    let V = {
            PST: "America/Los_Angeles",
            EST: "America/New_York",
            UTC: "UTC",
            BST: "Europe/London",
            CET: "Europe/Paris",
            CST: "America/Chicago",
            JST: "Asia/Tokyo"
        },
        G = ({
            title: e,
            description: a,
            action: l,
            startDate: r,
            endDate: i,
            location: s,
            defaultOpen: o,
            startTime: d,
            endTime: c,
            timezone: u,
            startDateLabel: m,
            endDateLabel: h,
            timezoneLabel: f,
            locationLabel: g,
            locale: p,
            heading: x = "h3"
        }) => {
            let [v, b] = (0, n.useState)(o), j = u ? V[u.toUpperCase()] || u : void 0, y = new Intl.DateTimeFormat(p, {
                month: "short",
                day: "numeric",
                timeZone: j
            }).format(new Date(r)), w = new Intl.DateTimeFormat(p, {
                month: "long",
                day: "numeric",
                timeZone: j
            }).format(new Date(r)), k = i ? new Intl.DateTimeFormat(p, {
                month: "long",
                day: "numeric",
                timeZone: j
            }).format(new Date(i)) : null;
            return (0, t.jsxs)("details", {
                open: v,
                onToggle: e => b(e.currentTarget.open),
                className: "rounded-[8px] bg-gray-100",
                children: [(0, t.jsxs)("summary", {
                    className: "flex cursor-pointer items-end p-6",
                    children: [(0, t.jsxs)("div", {
                        className: "flex w-full flex-col md:flex-row md:items-center",
                        children: [(0, t.jsx)("p", {
                            className: "text-small min-w-[150px] shrink-0 basis-[10%] lg:basis-[20%] xl:basis-[25%]",
                            children: y
                        }), (0, t.jsx)(x, {
                            className: "text-body-bold text-gray-800",
                            children: e
                        })]
                    }), (0, t.jsx)("div", {
                        children: (0, t.jsx)("span", {
                            className: "text-body inline-block w-[1.2rem] text-gray-700",
                            children: v ? "-" : "+"
                        })
                    })]
                }), (0, t.jsxs)("div", {
                    className: "mt-4 flex w-full flex-col pr-6 pb-6 pl-6 md:flex-row",
                    children: [(0, t.jsx)("div", {
                        className: "hidden min-w-[150px] shrink-0 basis-[10%] md:block lg:basis-[20%] xl:basis-[25%]"
                    }), (0, t.jsxs)("div", {
                        className: "mr-[7.5%] flex w-full flex-col border-t border-gray-300 pt-5 lg:flex-row",
                        children: [(0, t.jsxs)("div", {
                            className: "flex grow flex-col gap-2",
                            children: [w && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: m
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: d ? `${w}, ${d}` : w
                                })]
                            }), k && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: h
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: c ? `${k}, ${c}` : k
                                })]
                            }), u && (d || c) && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: f
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: u.toUpperCase()
                                })]
                            }), s && (0, t.jsxs)("div", {
                                className: "flex gap-2",
                                children: [(0, t.jsx)("p", {
                                    className: "loco-text-body-md tracking-5 w-24 leading-2 md:leading-3",
                                    children: g
                                }), (0, t.jsx)("p", {
                                    className: "loco-text-body-md text-gray-600",
                                    children: s
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "mt-5 mr-[10%] flex flex-col justify-between md:w-[80%] lg:mt-0 lg:w-[35%]",
                            children: [a && (0, t.jsx)("div", {
                                className: "loco-text-body text-black",
                                children: (0, t.jsx)(W.default, {
                                    children: a
                                })
                            }), l && (0, t.jsx)("div", {
                                className: "mt-8",
                                children: (0, t.jsx)(U.default, {
                                    href: l.href,
                                    variant: "primary",
                                    target: l.target,
                                    outlined: !0,
                                    rounded: !0,
                                    hasArrow: !0,
                                    children: l.title
                                })
                            })]
                        })]
                    })]
                })]
            })
        },
        K = ({
            upcomingEvents: e,
            pastEvents: a,
            action: l,
            displayPastEvents: r,
            upcomingEventsLabel: i,
            pastEventsLabel: s,
            startDateLabel: o,
            endDateLabel: d,
            timezoneLabel: c,
            locationLabel: u,
            locale: m = "en-US",
            upcomingEventsHeading: h = "h3"
        }) => {
            let [f, g] = (0, n.useState)("upcoming");
            return (0, t.jsxs)("div", {
                children: [r && a.length > 0 && (0, t.jsxs)("div", {
                    className: "flex w-full justify-center gap-5",
                    children: [(0, t.jsx)(U.default, {
                        rounded: !0,
                        outlined: "upcoming" != f,
                        onPress: () => {
                            g("upcoming")
                        },
                        size: "small",
                        children: i
                    }), (0, t.jsx)(U.default, {
                        rounded: !0,
                        outlined: "past" != f,
                        onPress: () => {
                            g("past")
                        },
                        size: "small",
                        children: s
                    })]
                }), (0, t.jsxs)("div", {
                    className: "mt-16 flex flex-col gap-2",
                    children: ["upcoming" === f && e.map((e, a) => (0, t.jsx)(G, {
                        startDateLabel: o,
                        endDateLabel: d,
                        timezoneLabel: c,
                        locationLabel: u,
                        defaultOpen: 0 === a,
                        locale: m,
                        heading: h,
                        ...e
                    }, a)), "past" === f && a.map((e, a) => (0, t.jsx)(G, {
                        startDateLabel: o,
                        endDateLabel: d,
                        timezoneLabel: c,
                        locationLabel: u,
                        locale: m,
                        heading: h,
                        ...e
                    }, a))]
                }), l && (0, t.jsx)("div", {
                    className: "mt-8 text-center",
                    children: (0, t.jsx)(U.default, {
                        href: l.href,
                        variant: "primary",
                        target: l.target,
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        children: l.title
                    })
                })]
            })
        };
    var Z = e.i(447093),
        J = e.i(742958),
        Y = e.i(50184),
        Q = e.i(725751),
        X = e.i(449758),
        ee = e.i(791154),
        et = e.i(698949),
        ea = e.i(500563);
    let el = {
            agendaBlock: P.default,
            alert: l.default,
            alternateNavigation: r.default,
            alternateNavigationAnchor: i.default,
            animatedHeadliner: ({
                title: e,
                subtitle: a,
                image: l,
                theme: r,
                description: i,
                brandfolder: n,
                actions: s,
                isHidden: o
            }) => (0, t.jsx)(t.Fragment, {
                children: !o && (0, t.jsx)(v, {
                    title: e || "",
                    image: {
                        src: l?.file?.asset.url || "",
                        alt: l?.alt || "",
                        placeholder: l?.file?.asset?.metadata?.lqip || ""
                    },
                    video: {
                        src: n?.muxHLSURL || ""
                    },
                    headline: {
                        actions: s ? s.map(e => ({
                            title: e.title || "",
                            href: e.link?.linkReference?.href.current || "",
                            target: e.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                        })) : void 0,
                        description: i || void 0,
                        title: a || "",
                        theme: "dark" === r ? "dark" : "light"
                    }
                })
            }),
            announcementBanner: b.default,
            benefits: j.default,
            uniteCards: w.default,
            carousel: M.default,
            callout: y.default,
            fullScreenVisual: k.FullScreenVisualBlockSuspense,
            fullWidthBlock: N.default,
            faqs: S.default,
            headliner: C.default,
            hero: L.default,
            htmlInfoTable: Q.default,
            keyFigures: _.default,
            quote: T.default,
            statement: R.default,
            footnote: E.default,
            logosBank: B.default,
            featuresList: A.default,
            title: z.default,
            testimonialsBlock: D.default,
            animatedFeaturesList: H.default,
            mangoDeluxeAnnouncementBanner: ea.default,
            media: F.default,
            richText: O.default,
            events: ({
                upcomingEvents: e,
                pastEvents: a,
                displayPastEvents: l,
                action: r,
                upcomingEventsLabel: i,
                pastEventsLabel: n,
                startDateLabel: s,
                endDateLabel: o,
                timezoneLabel: d,
                locationLabel: c,
                upcomingEventsHeading: u,
                isHidden: m
            }) => {
                let h = (0, Z.useLocale)(),
                    f = e => ({
                        title: e.name ?? "",
                        description: (0, t.jsx)(q.PortableText, {
                            value: e.description
                        }),
                        startDate: e.startDate ?? "",
                        endDate: e.endDate ?? "",
                        timezone: e.timezone ?? "",
                        location: e.location ?? "",
                        startTime: e.startTime ?? "",
                        endTime: e.endTime ?? "",
                        action: (e => {
                            if (!e || !e.length) return;
                            let t = e[0];
                            return {
                                title: t?.label ?? "",
                                href: t?.fieldLink?.linkReference?.href.current ?? "",
                                target: t?.fieldLink?.linkReference?.target === "_blank" ? "_blank" : "_self"
                            }
                        })(e.actions)
                    });
                return (0, t.jsx)(t.Fragment, {
                    children: !m && (0, t.jsx)("div", {
                        className: "container py-12",
                        children: (0, t.jsx)(K, {
                            upcomingEventsHeading: "h2" === u || "h3" === u || "h4" === u ? u : "h3",
                            action: (r ? {
                                title: r.title ?? "",
                                href: r.link?.linkReference?.href.current ?? "",
                                target: r.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
                            } : null) || void 0,
                            upcomingEvents: e ? e.map(f) : [],
                            pastEvents: a ? a.map(f) : [],
                            displayPastEvents: l || !1,
                            upcomingEventsLabel: i ?? "",
                            pastEventsLabel: n ?? "",
                            startDateLabel: s ?? "",
                            endDateLabel: o ?? "",
                            timezoneLabel: d ?? "",
                            locationLabel: c ?? "",
                            locale: h
                        })
                    })
                })
            },
            iframeBlock: $.default,
            planCards: I.default,
            bentoCards: J.default,
            videosShowcase: Y.default,
            cards: X.default,
            fullPageScroller: ee.default,
            socialProof: et.default
        },
        er = ({
            blocks: e
        }) => (0, t.jsx)(a.default, {
            blocks: e,
            blockMap: el
        });
    var ei = e.i(814507),
        en = e.i(129824),
        es = e.i(246916);
    e.s(["default", 0, function({
        data: e
    }) {
        let {
            shouldDisplayMTBanner: a,
            updatedBlocks: l
        } = (0, es.useMTBanner)(e, en.L1_PAGES_NO_MT_BANNER);
        return (0, t.jsxs)(t.Fragment, {
            children: [e.announcementBanner?.hasAnnouncementBanner && (0, t.jsx)(ei.default, {
                rounded: !0,
                action: {
                    title: e.announcementBanner.announcementBannerContent?.action?.text || "",
                    href: e.announcementBanner.announcementBannerContent?.action?.fieldLink?.linkReference?.href?.current || "",
                    target: e.announcementBanner.announcementBannerContent?.action?.fieldLink?.linkReference?.target || "_self"
                },
                className: "absolute top-0 left-0 z-20",
                children: e.announcementBanner.announcementBannerContent?.title
            }), (0, t.jsx)(er, {
                blocks: a ? l : e.blocks
            })]
        })
    }], 255018)
}, 410979, e => {
    e.v(t => Promise.all(["static/chunks/0ce6i8-d8uiwx.js"].map(t => e.l(t))).then(() => t(942019)))
}, 269100, e => {
    e.v(t => Promise.all(["static/chunks/0why8i0e6dzqy.js"].map(t => e.l(t))).then(() => t(346003)))
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c057d384-822c-5816-ba90-86191ccc9438")
    } catch (e) {}
}();
//# debugId=c057d384-822c-5816-ba90-86191ccc9438