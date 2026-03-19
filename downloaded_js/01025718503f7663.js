(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 447452, 667900, 2062, 676658, e => {
    "use strict";
    var t = e.i(297124),
        i = e.i(672721),
        n = e.i(722978),
        r = e.i(799547),
        a = e.i(825610),
        s = e.i(387660);
    let l = ({
        children: e,
        tag: i = "div",
        className: r = ""
    }) => {
        let a = (0, n.default)("loco-caption-lg-semibold mb-4", r);
        return (0, t.jsx)(i, {
            className: a,
            children: e
        })
    };
    e.s(["default", 0, l], 667900);
    var o = e.i(749583);
    let c = ({
        children: e,
        className: i = "",
        orientation: r = "horizontal"
    }) => {
        let a = (0, n.default)("flex gap-2 flex-wrap", {
            "flex-col items-start": "vertical" === r
        }, i);
        return (0, t.jsx)("div", {
            className: a,
            children: e
        })
    };
    e.s(["default", 0, c], 2062);
    var u = e.i(14452),
        d = e.i(805518),
        f = e.i(580057),
        m = e.i(950929),
        p = e.i(583874),
        g = e.i(459138),
        h = e.i(764748),
        v = e.i(150283);
    let x = {
            ...p.animations,
            ...h.gestureAnimations,
            ...g.drag,
            ...v.layout
        },
        y = (0, m.createMotionProxy)(x, f.createDomVisualElement);
    e.s(["motion", () => y], 676658);
    let b = ({
        features: e,
        transitionTime: n = 8500
    }) => {
        let [r, a] = (0, i.useState)(0), s = (0, i.useRef)(null), l = (0, i.useRef)(null), [c, u] = (0, i.useState)(!1), [d, f] = (0, i.useState)(!1), m = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
            e.forEach(e => {
                e.icon && (new window.Image().src = e.icon, new window.Image().src = e.icon)
            })
        }, [e]), (0, i.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                u(e.intersectionRatio >= .8)
            }, {
                threshold: [0, .8, 1]
            });
            return l.current && e.observe(l.current), () => e.disconnect()
        }, []), (0, i.useEffect)(() => (s.current && clearTimeout(s.current), c && !d && (s.current = setTimeout(() => {
            a(t => (t + 1) % e.length)
        }, n)), () => {
            s.current && clearTimeout(s.current)
        }), [r, e.length, n, c, d]);
        let p = (0, i.useCallback)(t => {
                let i = t === r;
                a(t), f(!0);
                let s = e[t];
                s?.onCardClick && setTimeout(() => {
                    s.onCardClick?.(i)
                }, 0), m.current && clearTimeout(m.current), m.current = setTimeout(() => {
                    f(!1)
                }, n)
            }, [r, e, n]),
            g = (0, i.useCallback)((e, t) => {
                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), p(t))
            }, [p]);
        return (0, i.useEffect)(() => () => {
            m.current && clearTimeout(m.current)
        }, []), (0, t.jsx)("div", {
            ref: l,
            className: "relative inline-flex w-full flex-col items-start justify-start gap-2 self-stretch px-5 pb-6 md:px-5 md:pb-6 lg:px-0 lg:pb-0 xl:px-20",
            children: e.map((e, i) => {
                let n = i === r;
                return (0, t.jsxs)("div", {
                    "data-mobile": "true",
                    "data-show-image": n ? "true" : "false",
                    "data-state": n ? "selected" : "inactive",
                    role: "button",
                    tabIndex: 0,
                    className: `cursor-pointer self-stretch overflow-hidden rounded-lg bg-white ${n?`${e.icon?"lg:pl-36":"lg:pl-10"} p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_2px_12px_3px_rgba(0,0,0,0.04)] lg:py-8 lg:pr-10`:"p-6 lg:px-10 lg:py-6"} flex lg:inline-flex lg:items-start ${n?"flex-col":"items-center"} relative justify-start gap-2 transition-all duration-500 ease-out`,
                    onClick: () => p(i),
                    onKeyDown: e => g(e, i),
                    children: [e.icon && n && (0, t.jsx)(y.div, {
                        initial: {
                            opacity: 0,
                            scale: .8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            type: "spring",
                            duration: .2,
                            bounce: .1,
                            delay: 0
                        },
                        className: "inline-flex h-14 w-14 items-center justify-start gap-2.5 lg:hidden",
                        children: (0, t.jsx)("div", {
                            className: "flex flex-1 items-center justify-center gap-2.5 self-stretch",
                            children: (0, t.jsx)("img", {
                                className: "flex-1 self-stretch",
                                src: e.icon || "https://placehold.co/57x57",
                                alt: e.title || "Feature icon",
                                width: 57,
                                height: 57,
                                loading: "eager",
                                style: {
                                    objectFit: "cover",
                                    imageRendering: "auto"
                                }
                            })
                        })
                    }), e.icon && n && (0, t.jsx)(y.div, {
                        initial: {
                            opacity: 0,
                            x: -10
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            type: "spring",
                            duration: .5,
                            bounce: .1,
                            delay: .1
                        },
                        className: "pointer-events-none absolute inset-y-0 left-[-38px] hidden lg:flex",
                        children: (0, t.jsx)("div", {
                            className: "flex h-full items-center justify-start py-8",
                            children: (0, t.jsx)("img", {
                                className: "max-h-full w-auto object-contain",
                                src: e.icon || "",
                                alt: e.title || "Feature icon",
                                loading: "eager",
                                style: {
                                    imageRendering: "auto"
                                }
                            })
                        })
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col items-start justify-start gap-[9px] self-stretch lg:inline-flex lg:max-w-[304px] lg:flex-1 lg:flex-col",
                        children: [n && (0, t.jsx)(y.div, {
                            initial: {
                                opacity: 0,
                                y: -.5
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                type: "spring",
                                duration: .3,
                                bounce: .1
                            },
                            className: "inline-flex w-64 items-center justify-center",
                            children: (0, t.jsx)("div", {
                                className: "flex-1 justify-center text-[10px] leading-[16px] font-medium tracking-[1px] text-gray-700 uppercase md:text-[12px] md:leading-[21px] md:tracking-[1.2px]",
                                children: e.eyebrow || ""
                            })
                        }), (0, t.jsx)("div", {
                            className: "inline-flex items-center justify-center self-stretch",
                            children: (0, t.jsx)(y.div, {
                                animate: {
                                    color: n ? "#000000" : "#374151"
                                },
                                transition: {
                                    type: "spring",
                                    duration: .3,
                                    bounce: .1
                                },
                                className: "flex-1 justify-center text-base leading-tight font-medium md:text-[20px] md:leading-[24px]",
                                children: e.title || "Untitled"
                            })
                        }), n && (0, t.jsx)(y.div, {
                            initial: {
                                opacity: 0,
                                y: 1
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                type: "spring",
                                duration: .3,
                                bounce: .1
                            },
                            className: "justify-start self-stretch text-xs font-normal text-gray-700 md:text-[14px] md:leading-[21px]",
                            children: e.description || ""
                        }), n && (0, t.jsx)(y.div, {
                            initial: {
                                opacity: 0,
                                y: 1
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                type: "spring",
                                duration: .3,
                                bounce: .1
                            },
                            className: "flex flex-col items-start justify-start self-stretch pt-3",
                            children: (0, t.jsx)(o.default, {
                                href: e.action?.href || "#",
                                target: e.action?.target,
                                variant: "primary",
                                size: "small",
                                rounded: !0,
                                hasArrow: !0,
                                children: e.action?.label || "Learn More"
                            })
                        })]
                    })]
                }, i)
            })
        })
    };
    var w = e.i(783078),
        j = e.i(430215),
        A = e.i(224601),
        E = e.i(32627),
        P = e.i(711036),
        k = e.i(180573),
        N = e.i(186114);
    let S = (0, k.default)(() => e.A(824429), {
        loadableGenerated: {
            modules: [467761]
        },
        ssr: !1
    });
    e.s(["default", 0, ({
        actions: e = [],
        aspectRatio: f,
        backgroundImage: m = !1,
        description: p,
        eyebrow: g,
        image: h,
        mediaPosition: v = "right",
        size: x = "default",
        title: y,
        youtubeVideo: k,
        brandfolderVideo: C,
        videoInline: T = !1,
        buttonLabel: L = "Play Video",
        blockKey: V,
        blockedMessage: D,
        consentButtonLabel: F,
        featureList: I,
        variant: O = "default"
    }) => {
        let R = (0, j.default)(`(max-width: ${w.default.Large}px)`),
            M = (0, i.useRef)(null),
            [B, G] = (0, i.useState)(!1),
            _ = (0, E.useInView)(M, {
                once: !0
            }),
            z = (0, P.useReducedMotion)(),
            H = (0, i.useRef)({
                total: 0,
                progress: 0
            }),
            K = I && I.length > 0,
            $ = !K && k?.url;
        (0, i.useEffect)(() => {
            T || G(!1)
        }, [_]);
        let W = () => {
                G(!0)
            },
            U = (0, n.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": B && !z && _ && C?.src
            }),
            X = (0, n.default)("relative", {
                "py-10 lg:py-24": "gdc2026" === O,
                "lg:py-14": K,
                "lg:py-24": !K && "default" === x && (!f || "16:9" === f) && "gdc2026" !== O,
                "lg:py-80": !K && "large" === x && (!f || "16:9" === f),
                "lg:py-40": !K && "large" === x && "1:1" === f,
                "dark bg-gray-900 overflow-hidden": m,
                "bg-gray-100 dark:bg-black": !m && K,
                "bg-white dark:bg-black": !m && !K
            }),
            q = (0, n.default)("grid grid-flow-row grid-cols-12 place-items-center gap-4", {
                "p-4": "gdc2026" === O,
                "lg:grid-flow-col": !0,
                "lg:container": !f || "16:9" === f
            }),
            J = (0, n.default)("font-nohemi! text-gray-900 dark:text-gray-100 whitespace-pre-line", {
                "loco-text-heading-md!": "gdc2026" === O
            }),
            Y = (0, n.default)("relative w-full rounded-lg", {
                "aspect-square": "1:1" === f,
                "aspect-video": "16:9" === f,
                "overflow-hidden": !k?.url
            }),
            Z = (0, n.default)("relative col-span-12 flex h-full flex-col w-full items-center lg:items-start", {
                "lg:col-span-8": "gdc2026" === O,
                "lg:col-span-6": "gdc2026" !== O,
                "lg:col-start-1": "left" === v,
                "lg:col-start-5": "right" === v && "gdc2026" === O,
                "lg:col-start-7": "right" === v && "gdc2026" !== O,
                "order-first": !K || !R,
                "order-last": K && R
            }),
            Q = (0, n.default)("relative col-span-12 px-5 text-center lg:pb-0 lg:text-left", {
                "lg:col-span-4": "gdc2026" === O,
                "lg:col-span-5": "gdc2026" !== O,
                "pb-6": !(K && R),
                "py-6": K && R,
                "lg:col-start-9": "left" === v && "gdc2026" === O,
                "lg:col-start-8": "left" === v && "gdc2026" !== O && (!f || "16:9" === f),
                "lg:col-start-1": "right" === v && (!f || "16:9" === f),
                "lg:col-start-2": "right" === v && "1:1" === f,
                "order-first": K && R
            }),
            ee = e => {
                let t = H.current.progress / H.current.total * 100 || 0;
                (0, s.pushVideoEvent)({
                    name: e,
                    videoDuration: H.current.total,
                    videoProgress: Number(t)
                })
            };
        return (0, t.jsxs)("section", {
            className: X,
            children: [m && (0, t.jsx)(r.default, {
                src: h.src,
                alt: h.alt,
                fill: !0,
                className: "blur-2xl brightness-[0.2]"
            }), (0, t.jsxs)("div", {
                className: q,
                ref: M,
                children: [K ? (0, t.jsx)("div", {
                    className: Z,
                    children: (0, t.jsx)(b, {
                        features: I
                    })
                }) : $ ? (0, t.jsx)("div", {
                    className: Z,
                    children: (0, t.jsx)("div", {
                        className: Y,
                        children: (0, t.jsx)(A.default, {
                            url: k?.url || "",
                            title: k?.title ?? "",
                            blockedMessage: D,
                            consentButtonLabel: F
                        })
                    })
                }) : (0, t.jsxs)("div", {
                    className: Z,
                    children: [(0, t.jsxs)("div", {
                        className: Y,
                        children: [_ && !z && C?.src && (0, t.jsx)(S, {
                            url: C.src,
                            playing: B,
                            loop: !!T,
                            muted: T,
                            playsinline: T,
                            width: "100%",
                            height: "100%",
                            onDuration: e => H.current.total = e,
                            onProgress: e => {
                                H.current.progress = 10 * e.played
                            },
                            className: "absolute top-0 left-0 [&>video]:object-cover",
                            onReady: () => {
                                T && G(!0)
                            },
                            controls: !T,
                            onPlay: () => ee("video_play"),
                            onPause: () => ee("video_pause"),
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        }), h.src && (0, t.jsxs)("div", {
                            className: U,
                            onClick: W,
                            children: [C?.src && !T && (0, t.jsx)(N.default, {
                                handleIsPlaying: W,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: L,
                                "data-link-location": V || a.trackingLocation.fullWidthBlockAction,
                                "data-link-id": `${V||a.trackingLocation.fullWidthBlockAction}-video-play`
                            }), (0, t.jsx)(r.default, {
                                src: h.src,
                                alt: h.alt,
                                placeholder: "blur",
                                blurDataURL: h.placeholder,
                                fill: !0
                            })]
                        })]
                    }), h.caption && (0, t.jsx)("div", {
                        className: "loco-text-body-sm-medium z-10 mt-3 mb-6 text-gray-600 lg:mb-3",
                        children: h.caption
                    })]
                }), (0, t.jsxs)("div", {
                    className: Q,
                    children: [g && (0, t.jsx)(l, {
                        className: "text-gray-900 dark:text-gray-100",
                        children: g
                    }), (0, t.jsx)(u.default, {
                        tag: "h2",
                        className: J,
                        children: y
                    }), (0, t.jsx)(d.default, {
                        className: "mb-10 text-gray-900 dark:text-gray-100",
                        children: p
                    }), (0, t.jsx)(c, {
                        className: "justify-center lg:justify-normal",
                        children: e.length > 0 && e.map((e, i) => (0, t.jsx)(o.default, {
                            variant: 0 === i ? "primary" : "secondary",
                            outlined: 0 === i,
                            size: R ? "small" : "medium",
                            rounded: !0,
                            hasArrow: !0,
                            href: e.href,
                            target: e.target,
                            "data-link-location": V ?? a.trackingLocation.fullWidthBlockAction,
                            "data-link-id": `${V??a.trackingLocation.fullWidthBlockAction}-action-${i}`,
                            children: e.label
                        }, `full-width-block-action-${i}`))
                    })]
                })]
            })]
        })
    }], 447452)
}, 186114, e => {
    "use strict";
    var t = e.i(297124);
    e.s(["default", 0, ({
        className: e,
        handleIsPlaying: i,
        label: n,
        ...r
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsx)("button", {
            className: "transition-bg bg-blue hover:bg-blue-dark flex h-20 w-20 transform items-center justify-center rounded-full duration-300",
            onClick: i,
            type: "button",
            "aria-label": n,
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
}, 14452, e => {
    "use strict";
    var t = e.i(297124),
        i = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        className: n = "",
        tag: r = "div"
    }) => {
        let a = (0, i.default)("loco-text-heading-sm mb-4", n);
        return (0, t.jsx)(r, {
            className: a,
            children: e
        })
    }], 14452)
}, 210681, e => {
    "use strict";
    let t = {
        x: !1,
        y: !1
    };

    function i() {
        return t.x || t.y
    }
    e.s(["isDragActive", () => i, "isDragging", () => t])
}, 414161, e => {
    "use strict";
    let t = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;
    e.s(["isPrimaryPointer", () => t])
}, 994216, 664356, e => {
    "use strict";
    var t = e.i(210681),
        i = e.i(369710);

    function n(e, t) {
        let n = (0, i.resolveElements)(e),
            r = new AbortController;
        return [n, {
            passive: !0,
            ...t,
            signal: r.signal
        }, () => r.abort()]
    }

    function r(e) {
        return !("touch" === e.pointerType || (0, t.isDragActive)())
    }

    function a(e, t, i = {}) {
        let [s, l, o] = n(e, i), c = e => {
            if (!r(e)) return;
            let {
                target: i
            } = e, n = t(i, e);
            if ("function" != typeof n || !i) return;
            let a = e => {
                r(e) && (n(e), i.removeEventListener("pointerleave", a))
            };
            i.addEventListener("pointerleave", a, l)
        };
        return s.forEach(e => {
            e.addEventListener("pointerenter", c, l)
        }), o
    }
    e.s(["setupGesture", () => n], 664356), e.s(["hover", () => a], 994216)
}, 125009, e => {
    "use strict";
    var t = e.i(812064),
        i = e.i(210681);
    let n = (e, t) => !!t && (e === t || n(e, t.parentElement));
    var r = e.i(414161),
        a = e.i(664356);
    let s = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        l = new WeakSet;

    function o(e) {
        return t => {
            "Enter" === t.key && e(t)
        }
    }

    function c(e, t) {
        e.dispatchEvent(new PointerEvent("pointer" + t, {
            isPrimary: !0,
            bubbles: !0
        }))
    }

    function u(e) {
        return (0, r.isPrimaryPointer)(e) && !(0, i.isDragActive)()
    }

    function d(e, i, r = {}) {
        let [f, m, p] = (0, a.setupGesture)(e, r), g = e => {
            let t = e.currentTarget;
            if (!u(e)) return;
            l.add(t);
            let a = i(t, e),
                s = (e, i) => {
                    window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", c), l.has(t) && l.delete(t), u(e) && "function" == typeof a && a(e, {
                        success: i
                    })
                },
                o = e => {
                    s(e, t === window || t === document || r.useGlobalTarget || n(t, e.target))
                },
                c = e => {
                    s(e, !1)
                };
            window.addEventListener("pointerup", o, m), window.addEventListener("pointercancel", c, m)
        };
        return f.forEach(e => {
            ((r.useGlobalTarget ? window : e).addEventListener("pointerdown", g, m), (0, t.isHTMLElement)(e)) && (e.addEventListener("focus", e => ((e, t) => {
                let i = e.currentTarget;
                if (!i) return;
                let n = o(() => {
                    if (l.has(i)) return;
                    c(i, "down");
                    let e = o(() => {
                        c(i, "up")
                    });
                    i.addEventListener("keyup", e, t), i.addEventListener("blur", () => c(i, "cancel"), t)
                });
                i.addEventListener("keydown", n, t), i.addEventListener("blur", () => i.removeEventListener("keydown", n), t)
            })(e, m)), s.has(e.tagName) || -1 !== e.tabIndex || e.hasAttribute("tabindex") || (e.tabIndex = 0))
        }), p
    }
    e.s(["press", () => d], 125009)
}, 54061, e => {
    "use strict";
    var t = e.i(210681);

    function i(e) {
        if ("x" === e || "y" === e)
            if (t.isDragging[e]) return null;
            else return t.isDragging[e] = !0, () => {
                t.isDragging[e] = !1
            };
        return t.isDragging.x || t.isDragging.y ? null : (t.isDragging.x = t.isDragging.y = !0, () => {
            t.isDragging.x = t.isDragging.y = !1
        })
    }
    e.s(["setDragLock", () => i])
}, 580057, e => {
    "use strict";
    var t = e.i(672721),
        i = e.i(98416),
        n = e.i(326685),
        r = e.i(314685);
    let a = (e, a) => (0, r.isSVGComponent)(e) ? new n.SVGVisualElement(a) : new i.HTMLVisualElement(a, {
        allowProjection: e !== t.Fragment
    });
    e.s(["createDomVisualElement", () => a])
}, 506187, e => {
    "use strict";
    var t = e.i(482362),
        i = e.i(537856);

    function n(e, t, i, r = 0, a = 1) {
        let s = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t),
            l = e.size,
            o = (l - 1) * r;
        return "function" == typeof i ? i(s, l) : 1 === a ? s * r : o - s * r
    }

    function r(e, a, s = {}) {
        let l = (0, t.resolveVariant)(e, a, "exit" === s.type ? e.presenceContext?.custom : void 0),
            {
                transition: o = e.getDefaultTransition() || {}
            } = l || {};
        s.transitionOverride && (o = s.transitionOverride);
        let c = l ? () => Promise.all((0, i.animateTarget)(e, l, s)) : () => Promise.resolve(),
            u = e.variantChildren && e.variantChildren.size ? (t = 0) => {
                let {
                    delayChildren: i = 0,
                    staggerChildren: l,
                    staggerDirection: c
                } = o;
                return function(e, t, i = 0, a = 0, s = 0, l = 1, o) {
                    let c = [];
                    for (let u of e.variantChildren) u.notify("AnimationStart", t), c.push(r(u, t, {
                        ...o,
                        delay: i + ("function" == typeof a ? 0 : a) + n(e.variantChildren, u, a, s, l)
                    }).then(() => u.notify("AnimationComplete", t)));
                    return Promise.all(c)
                }(e, a, t, i, l, c, s)
            } : () => Promise.resolve(),
            {
                when: d
            } = o;
        if (!d) return Promise.all([c(), u(s.delay)]);
        {
            let [e, t] = "beforeChildren" === d ? [c, u] : [u, c];
            return e().then(() => t())
        }
    }
    var a = e.i(358670),
        s = e.i(832520);

    function l(e, t) {
        if (!Array.isArray(t)) return !1;
        let i = t.length;
        if (i !== e.length) return !1;
        for (let n = 0; n < i; n++)
            if (t[n] !== e[n]) return !1;
        return !0
    }
    var o = e.i(340844),
        c = e.i(500502);
    let u = c.variantProps.length,
        d = [...c.variantPriorityOrder].reverse(),
        f = c.variantPriorityOrder.length;

    function m(e) {
        let m = n => Promise.all(n.map(({
                animation: n,
                options: a
            }) => (function(e, n, a = {}) {
                let s;
                if (e.notify("AnimationStart", n), Array.isArray(n)) s = Promise.all(n.map(t => r(e, t, a)));
                else if ("string" == typeof n) s = r(e, n, a);
                else {
                    let r = "function" == typeof n ? (0, t.resolveVariant)(e, n, a.custom) : n;
                    s = Promise.all((0, i.animateTarget)(e, r, a))
                }
                return s.then(() => {
                    e.notify("AnimationComplete", n)
                })
            })(e, n, a))),
            p = g(),
            h = !0,
            v = i => (n, r) => {
                let a = (0, t.resolveVariant)(e, r, "exit" === i ? e.presenceContext?.custom : void 0);
                if (a) {
                    let {
                        transition: e,
                        transitionEnd: t,
                        ...i
                    } = a;
                    n = {
                        ...n,
                        ...i,
                        ...t
                    }
                }
                return n
            };

        function x(i) {
            let {
                props: r
            } = e, g = function e(t) {
                if (!t) return;
                if (!t.isControllingVariants) {
                    let i = t.parent && e(t.parent) || {};
                    return void 0 !== t.props.initial && (i.initial = t.props.initial), i
                }
                let i = {};
                for (let e = 0; e < u; e++) {
                    let n = c.variantProps[e],
                        r = t.props[n];
                    ((0, o.isVariantLabel)(r) || !1 === r) && (i[n] = r)
                }
                return i
            }(e.parent) || {}, x = [], y = new Set, b = {}, w = 1 / 0;
            for (let c = 0; c < f; c++) {
                var j, A;
                let u = d[c],
                    f = p[u],
                    m = void 0 !== r[u] ? r[u] : g[u],
                    E = (0, o.isVariantLabel)(m),
                    P = u === i ? f.isActive : null;
                !1 === P && (w = c);
                let k = m === g[u] && m !== r[u] && E;
                if (k && h && e.manuallyAnimateOnMount && (k = !1), f.protectedKeys = {
                        ...b
                    }, !f.isActive && null === P || !m && !f.prevProp || (0, a.isAnimationControls)(m) || "boolean" == typeof m) continue;
                let N = (j = f.prevProp, "string" == typeof(A = m) ? A !== j : !!Array.isArray(A) && !l(A, j)),
                    S = N || u === i && f.isActive && !k && E || c > w && E,
                    C = !1,
                    T = Array.isArray(m) ? m : [m],
                    L = T.reduce(v(u), {});
                !1 === P && (L = {});
                let {
                    prevResolvedValues: V = {}
                } = f, D = {
                    ...V,
                    ...L
                }, F = t => {
                    S = !0, y.has(t) && (C = !0, y.delete(t)), f.needsAnimating[t] = !0;
                    let i = e.getValue(t);
                    i && (i.liveStyle = !1)
                };
                for (let e in D) {
                    let t = L[e],
                        i = V[e];
                    if (!b.hasOwnProperty(e))((0, s.isKeyframesTarget)(t) && (0, s.isKeyframesTarget)(i) ? l(t, i) : t === i) ? void 0 !== t && y.has(e) ? F(e) : f.protectedKeys[e] = !0 : null != t ? F(e) : y.add(e)
                }
                f.prevProp = m, f.prevResolvedValues = L, f.isActive && (b = {
                    ...b,
                    ...L
                }), h && e.blockInitialAnimation && (S = !1);
                let I = k && N,
                    O = !I || C;
                S && O && x.push(...T.map(i => {
                    let r = {
                        type: u
                    };
                    if ("string" == typeof i && h && !I && e.manuallyAnimateOnMount && e.parent) {
                        let {
                            parent: a
                        } = e, s = (0, t.resolveVariant)(a, i);
                        if (a.enteringChildren && s) {
                            let {
                                delayChildren: t
                            } = s.transition || {};
                            r.delay = n(a.enteringChildren, e, t)
                        }
                    }
                    return {
                        animation: i,
                        options: r
                    }
                }))
            }
            if (y.size) {
                let i = {};
                if ("boolean" != typeof r.initial) {
                    let n = (0, t.resolveVariant)(e, Array.isArray(r.initial) ? r.initial[0] : r.initial);
                    n && n.transition && (i.transition = n.transition)
                }
                y.forEach(t => {
                    let n = e.getBaseTarget(t),
                        r = e.getValue(t);
                    r && (r.liveStyle = !0), i[t] = n ?? null
                }), x.push({
                    animation: i
                })
            }
            let E = !!x.length;
            return h && (!1 === r.initial || r.initial === r.animate) && !e.manuallyAnimateOnMount && (E = !1), h = !1, E ? m(x) : Promise.resolve()
        }
        return {
            animateChanges: x,
            setActive: function(t, i) {
                if (p[t].isActive === i) return Promise.resolve();
                e.variantChildren?.forEach(e => e.animationState?.setActive(t, i)), p[t].isActive = i;
                let n = x(t);
                for (let e in p) p[e].protectedKeys = {};
                return n
            },
            setAnimateFunction: function(t) {
                m = t(e)
            },
            getState: () => p,
            reset: () => {
                p = g()
            }
        }
    }

    function p(e = !1) {
        return {
            isActive: e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }

    function g() {
        return {
            animate: p(!0),
            whileInView: p(),
            whileHover: p(),
            whileTap: p(),
            whileDrag: p(),
            whileFocus: p(),
            exit: p()
        }
    }
    e.s(["createAnimationState", () => m], 506187)
}, 554579, e => {
    "use strict";
    class t {
        constructor(e) {
            this.isMounted = !1, this.node = e
        }
        update() {}
    }
    e.s(["Feature", () => t])
}, 583874, e => {
    "use strict";
    var t = e.i(358670),
        i = e.i(506187),
        n = e.i(554579);
    class r extends n.Feature {
        constructor(e) {
            super(e), e.animationState || (e.animationState = (0, i.createAnimationState)(e))
        }
        updateAnimationControlsSubscription() {
            let {
                animate: e
            } = this.node.getProps();
            (0, t.isAnimationControls)(e) && (this.unmountControls = e.subscribe(this.node))
        }
        mount() {
            this.updateAnimationControlsSubscription()
        }
        update() {
            let {
                animate: e
            } = this.node.getProps(), {
                animate: t
            } = this.node.prevProps || {};
            e !== t && this.updateAnimationControlsSubscription()
        }
        unmount() {
            this.node.animationState.reset(), this.unmountControls?.()
        }
    }
    var a = n;
    let s = 0;
    class l extends a.Feature {
        constructor() {
            super(...arguments), this.id = s++
        }
        update() {
            if (!this.node.presenceContext) return;
            let {
                isPresent: e,
                onExitComplete: t
            } = this.node.presenceContext, {
                isPresent: i
            } = this.node.prevPresenceContext || {};
            if (!this.node.animationState || e === i) return;
            let n = this.node.animationState.setActive("exit", !e);
            t && !e && n.then(() => {
                t(this.id)
            })
        }
        mount() {
            let {
                register: e,
                onExitComplete: t
            } = this.node.presenceContext || {};
            t && t(this.id), e && (this.unmount = e(this.id))
        }
        unmount() {}
    }
    let o = {
        animation: {
            Feature: r
        },
        exit: {
            Feature: l
        }
    };
    e.s(["animations", () => o], 583874)
}, 694915, e => {
    "use strict";

    function t(e, i, n, r = {
        passive: !0
    }) {
        return e.addEventListener(i, n, r), () => e.removeEventListener(i, n)
    }
    e.s(["addDomEvent", () => t])
}, 819377, e => {
    "use strict";
    var t = e.i(414161);

    function i(e) {
        return {
            point: {
                x: e.pageX,
                y: e.pageY
            }
        }
    }
    let n = e => n => (0, t.isPrimaryPointer)(n) && e(n, i(n));
    e.s(["addPointerInfo", () => n, "extractEventInfo", () => i])
}, 898249, e => {
    "use strict";
    var t = e.i(994216),
        i = e.i(347248),
        n = e.i(819377),
        r = e.i(554579);

    function a(e, t, r) {
        let {
            props: a
        } = e;
        e.animationState && a.whileHover && e.animationState.setActive("whileHover", "Start" === r);
        let s = a["onHover" + r];
        s && i.frame.postRender(() => s(t, (0, n.extractEventInfo)(t)))
    }
    class s extends r.Feature {
        mount() {
            let {
                current: e
            } = this.node;
            e && (this.unmount = (0, t.hover)(e, (e, t) => (a(this.node, t, "Start"), e => a(this.node, e, "End"))))
        }
        unmount() {}
    }
    e.s(["HoverGesture", () => s])
}, 764748, e => {
    "use strict";
    var t = e.i(898249),
        i = e.i(640746),
        n = e.i(694915),
        r = e.i(554579);
    class a extends r.Feature {
        constructor() {
            super(...arguments), this.isActive = !1
        }
        onFocus() {
            let e = !1;
            try {
                e = this.node.current.matches(":focus-visible")
            } catch (t) {
                e = !0
            }
            e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
        }
        onBlur() {
            this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
        }
        mount() {
            this.unmount = (0, i.pipe)((0, n.addDomEvent)(this.node.current, "focus", () => this.onFocus()), (0, n.addDomEvent)(this.node.current, "blur", () => this.onBlur()))
        }
        unmount() {}
    }
    var s = e.i(125009),
        l = e.i(347248),
        o = e.i(819377),
        c = r;

    function u(e, t, i) {
        let {
            props: n
        } = e;
        if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
        e.animationState && n.whileTap && e.animationState.setActive("whileTap", "Start" === i);
        let r = n["onTap" + ("End" === i ? "" : i)];
        r && l.frame.postRender(() => r(t, (0, o.extractEventInfo)(t)))
    }
    class d extends c.Feature {
        mount() {
            let {
                current: e
            } = this.node;
            e && (this.unmount = (0, s.press)(e, (e, t) => (u(this.node, t, "Start"), (e, {
                success: t
            }) => u(this.node, e, t ? "End" : "Cancel")), {
                useGlobalTarget: this.node.props.globalTapTarget
            }))
        }
        unmount() {}
    }
    var f = r;
    let m = new WeakMap,
        p = new WeakMap,
        g = e => {
            let t = m.get(e.target);
            t && t(e)
        },
        h = e => {
            e.forEach(g)
        },
        v = {
            some: 0,
            all: 1
        };
    class x extends f.Feature {
        constructor() {
            super(...arguments), this.hasEnteredView = !1, this.isInView = !1
        }
        startObserver() {
            var e;
            let t;
            this.unmount();
            let {
                viewport: i = {}
            } = this.node.getProps(), {
                root: n,
                margin: r,
                amount: a = "some",
                once: s
            } = i, l = {
                root: n ? n.current : void 0,
                rootMargin: r,
                threshold: "number" == typeof a ? a : v[a]
            }, o = e => {
                let {
                    isIntersecting: t
                } = e;
                if (this.isInView === t || (this.isInView = t, s && !t && this.hasEnteredView)) return;
                t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                let {
                    onViewportEnter: i,
                    onViewportLeave: n
                } = this.node.getProps(), r = t ? i : n;
                r && r(e)
            };
            return e = this.node.current, t = function({
                root: e,
                ...t
            }) {
                let i = e || document;
                p.has(i) || p.set(i, {});
                let n = p.get(i),
                    r = JSON.stringify(t);
                return n[r] || (n[r] = new IntersectionObserver(h, {
                    root: e,
                    ...t
                })), n[r]
            }(l), m.set(e, o), t.observe(e), () => {
                m.delete(e), t.unobserve(e)
            }
        }
        mount() {
            this.startObserver()
        }
        update() {
            if ("u" < typeof IntersectionObserver) return;
            let {
                props: e,
                prevProps: t
            } = this.node;
            ["amount", "margin", "root"].some(function({
                viewport: e = {}
            }, {
                viewport: t = {}
            } = {}) {
                return i => e[i] !== t[i]
            }(e, t)) && this.startObserver()
        }
        unmount() {}
    }
    let y = {
        inView: {
            Feature: x
        },
        tap: {
            Feature: d
        },
        focus: {
            Feature: a
        },
        hover: {
            Feature: t.HoverGesture
        }
    };
    e.s(["gestureAnimations", () => y], 764748)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4031a153-05b2-5a9c-a846-401befd9fe8c")
    } catch (e) {}
}();
//# debugId=4031a153-05b2-5a9c-a846-401befd9fe8c