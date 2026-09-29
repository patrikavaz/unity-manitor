(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 123849, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(722978),
        n = e.i(805518);
    let o = ({
            title: e,
            content: o,
            listStyle: i = "check"
        }) => {
            let a = (0, r.default)("loco-text-body [&_h4]:mb-0", {
                "checkmark-list-green": "check" === i,
                "plus-list": "plus" === i
            });
            return (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsx)("div", {
                    className: "loco-caption-sm-semibold mb-2 text-gray-700 dark:text-gray-300",
                    children: e
                }), (0, t.jsx)(n.default, {
                    className: a,
                    children: o
                })]
            })
        },
        i = ({
            title: e = "",
            descriptions: r = [],
            treshold: n,
            pricing: i
        }) => (0, t.jsxs)("div", {
            className: "flex h-full flex-col justify-between rounded-lg bg-gray-100 p-6 lg:w-96 dark:bg-gray-800",
            children: [(0, t.jsxs)("div", {
                className: "grow pb-8",
                children: [(0, t.jsx)("div", {
                    className: "loco-text-heading-sm mb-8 text-black dark:text-white",
                    children: e
                }), (0, t.jsx)("div", {
                    children: r?.map((r, n) => (0, t.jsx)("div", {
                        className: "flex flex-col pb-8",
                        children: (0, t.jsx)(o, {
                            title: r.title,
                            content: r.content,
                            listStyle: r.listStyle
                        })
                    }, `card-plan-${e}-${n}`))
                }), (0, t.jsx)(o, {
                    title: n?.title || "",
                    content: n?.content || ""
                })]
            }), (0, t.jsx)("div", {
                className: "min-h-[6rem]",
                children: (0, t.jsx)(o, {
                    title: i?.title || "",
                    content: i?.content || ""
                })
            })]
        }),
        a = ({
            theme: e = "light",
            cards: n = []
        }) => {
            let o = (0, r.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: o,
                children: (0, t.jsx)("div", {
                    className: "bg-white pt-8 pb-20 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "container flex flex-col flex-wrap gap-2 lg:flex-row lg:justify-center",
                        children: n.map((e, r) => (0, t.jsx)("div", {
                            children: (0, t.jsx)(i, {
                                ...e
                            })
                        }, `card-plan-${e.title}-${r}`))
                    })
                })
            })
        };
    var l = e.i(722990);
    e.s(["default", 0, ({
        isHidden: e,
        theme: r,
        cards: n
    }) => e ? null : (0, t.jsx)(a, {
        theme: "dark" === r ? "dark" : "light",
        cards: n.map(e => ({
            title: e.title ?? "",
            descriptions: e.descriptions?.map(e => {
                let r = e?.listStyle === "plus" ? "plus" : "check";
                return {
                    title: e?.title ?? "",
                    content: (0, t.jsx)(l.PortableText, {
                        value: e?.content
                    }),
                    listStyle: r
                }
            }) || [],
            treshold: {
                title: e?.treshold?.title ?? "",
                content: (0, t.jsx)(l.PortableText, {
                    value: e.treshold?.content
                })
            },
            pricing: {
                title: e.pricing?.title ?? "",
                content: (0, t.jsx)(l.PortableText, {
                    value: e.pricing?.content
                })
            }
        }))
    })], 123849)
}, 129824, e => {
    "use strict";
    e.s(["DATA_REQUEST", 0, "/data-request", "DEFAULT_PAGES_NO_MT_BANNER", 0, ["/made-with-unity"], "L1_PAGES_NO_MT_BANNER", 0, ["/our-company", "/community", "/industry", "/use-cases", "/releases/unity-6"], "PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products"], "PRODUCTS_PRODUCTS_PAGES_NO_MT_BANNER", 0, ["/products/unity-pro", "/products/unity-engine", "/products/compare-plans", "/products/compare-plans/unity-cloud"], "RESOURCES_PAGES_NO_MT_BANNER", 0, ["/resources"], "SOLUTIONS_PAGES_NO_MT_BANNER", 0, ["/download", "/roadmap", "/pages/pro-free-trial", "/games", "/solutions", "/developer-tools", "/how-to", "/learn", "/learn/get-started", "/releases/lts-vs-tech-stream"]])
}, 246916, e => {
    "use strict";
    var t = e.i(393335),
        r = e.i(833200),
        n = e.i(740041);
    e.s(["useMTBanner", 0, function(e, o = []) {
        var i, a;
        let l, s, c, u, f, d = (0, t.usePathname)(),
            p = (0, r.useLocale)(),
            h = p !== n.defaultLocale ? d.replace(`/${p}`, "") : d,
            g = "" === h || "/" === h || h.startsWith("/home-experiment");
        return {
            shouldDisplayMTBanner: p !== n.defaultLocale && e?.translationType === "MT" && !g && !o.includes(h),
            updatedBlocks: (i = e.blocks ?? [], a = e.machineTranslationDisclaimer, l = i.reduce((e, t, r) => ["hero", "alternateNavigation", "headliner"].includes(t._type) ? r : e, -1), s = [...i], c = s[l + 1]?._type === "alternateNavigationAnchor" || s[l + 1]?._type === "anchorButton" ? s[l + 2] : s[l + 1], u = c?.theme ?? null, f = {
                _type: "alert",
                text: a?.text,
                isContained: !0,
                spacing: {
                    bottom: !0,
                    top: !0
                },
                ...u && {
                    theme: u
                },
                action: {
                    text: a?.action?.title,
                    fieldLink: {
                        linkReference: {
                            href: {
                                current: `${window.location.origin}${h}`
                            },
                            target: "_self"
                        }
                    }
                }
            }, -1 === l ? s.unshift(f) : s.splice(l + 1, 0, f), s),
            redirectPathName: h
        }
    }], 246916)
}, 686049, e => {
    "use strict";
    var t = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 8290,
            4: 8291,
            5: 8288,
            6: 65279,
            7: 8289,
            8: 119155,
            9: 119156,
            a: 119157,
            b: 119158,
            c: 119159,
            d: 119160,
            e: 119161,
            f: 119162
        },
        r = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 65279
        },
        n = {
            0: String.fromCodePoint(r[0]),
            1: String.fromCodePoint(r[1]),
            2: String.fromCodePoint(r[2]),
            3: String.fromCodePoint(r[3])
        },
        o = [, , , , ].fill(String.fromCodePoint(r[0])).join("");
    Object.fromEntries(Object.entries(n).map(e => [e[1], +e[0]])), Object.fromEntries(Object.entries(t).map(e => e.reverse()));
    var i = `${Object.values(t).map(e=>`\\u{${e.toString(16)}}`).join("")}`,
        a = RegExp(`[${i}]{4,}`, "gu");
    e.s(["isRecord", 0, function(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e)
    }, "stegaClean", 0, function(e) {
        var t, r;
        return e && JSON.parse({
            cleaned: (t = JSON.stringify(e)).replace(a, ""),
            encoded: (null == (r = t.match(a)) ? void 0 : r[0]) || ""
        }.cleaned)
    }, "y", 0, function(e, t, r = "auto") {
        return !0 === r || "auto" === r && (!(!Number.isNaN(Number(e)) || /[a-z]/i.test(e) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(e)) && Date.parse(e) || function(e) {
            try {
                new URL(e, e.startsWith("/") ? "https://acme.com" : void 0)
            } catch {
                return !1
            }
            return !0
        }(e)) ? e : `${e}${function(e){let t=JSON.stringify(e),r=new TextEncoder().encode(t),i="";for(let e=0;e<r.length;e++){let t=r[e];i+=n[t>>6&3]+n[t>>4&3]+n[t>>2&3]+n[3&t]}return o+i}(t)}`
    }])
}, 124576, e => {
    "use strict";
    e.i(913836);
    var t = e.i(876009),
        r = e.i(494004),
        n = e.i(409781);
    e.s(["useReducedMotion", 0, function() {
        t.hasReducedMotionListener.current || (0, r.initPrefersReducedMotion)();
        let [e] = (0, n.useState)(t.prefersReducedMotion.current);
        return e
    }])
}, 131581, e => {
    "use strict";
    var t = e.i(409781),
        r = e.i(513038);
    let n = {
        some: 0,
        all: 1
    };
    e.s(["useInView", 0, function(e, {
        root: o,
        margin: i,
        amount: a,
        once: l = !1,
        initial: s = !1
    } = {}) {
        let [c, u] = (0, t.useState)(s);
        return (0, t.useEffect)(() => {
            if (!e.current || l && c) return;
            let t = {
                root: o && o.current || void 0,
                margin: i,
                amount: a
            };
            return function(e, t, {
                root: o,
                margin: i,
                amount: a = "some"
            } = {}) {
                let l = (0, r.resolveElements)(e),
                    s = new WeakMap,
                    c = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = s.get(e.target);
                            if (!!r !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let r = t(e.target, e);
                                    "function" == typeof r ? s.set(e.target, r) : c.unobserve(e.target)
                                } else "function" == typeof r && (r(e), s.delete(e.target))
                        })
                    }, {
                        root: o,
                        rootMargin: i,
                        threshold: "number" == typeof a ? a : n[a]
                    });
                return l.forEach(e => c.observe(e)), () => c.disconnect()
            }(e.current, () => (u(!0), l ? void 0 : () => u(!1)), t)
        }, [o, e, i, l, a]), c
    }], 131581)
}, 417245, 843678, 304776, e => {
    "use strict";
    var t = e.i(328744),
        r = e.i(823928),
        n = e.i(706221),
        o = e.i(725542),
        i = e.i(409781),
        a = e.i(120194),
        l = e.i(672357);

    function s(e, t) {
        let r, n = () => {
            let {
                currentTime: n
            } = t, o = (null === n ? 0 : n.value) / 100;
            r !== o && e(o), r = o
        };
        return l.frame.preUpdate(n, !0), () => (0, l.cancelFrame)(n)
    }

    function c(e) {
        return !("u" < typeof window) && (e ? (0, r.supportsViewTimeline)() : (0, r.supportsScrollTimeline)())
    }
    var u = e.i(270736),
        f = e.i(470934),
        d = e.i(398361);
    let p = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }),
        h = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };

    function g(e, t, r, n) {
        let o = r[t],
            {
                length: i,
                position: a
            } = h[t],
            l = o.current,
            s = r.time;
        o.current = Math.abs(e[`scroll${a}`]), o.scrollLength = e[`scroll${i}`] - e[`client${i}`], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = (0, f.progress)(0, o.scrollLength, o.current);
        let c = n - s;
        o.velocity = c > 50 ? 0 : (0, d.velocityPerSecond)(o.current - l, c)
    }
    var m = e.i(226056),
        y = e.i(973626),
        v = e.i(508983),
        x = e.i(335029);
    let b = {
        start: 0,
        center: .5,
        end: 1
    };

    function w(e, t, r = 0) {
        let n = 0;
        if (e in b && (e = b[e]), "string" == typeof e) {
            let t = parseFloat(e);
            e.endsWith("px") ? n = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? n = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = t / 100 * document.documentElement.clientHeight : e = t
        }
        return "number" == typeof e && (n = t * e), r + n
    }
    let j = [0, 0],
        S = [
            [0, 0],
            [1, 1]
        ],
        _ = {
            x: 0,
            y: 0
        },
        N = new WeakMap,
        E = new WeakMap,
        O = new WeakMap,
        k = new WeakMap,
        T = new WeakMap,
        A = e => e === document.scrollingElement ? window : e;

    function P(e, {
        container: t = document.scrollingElement,
        trackContentSize: r = !1,
        ...n
    } = {}) {
        if (!t) return a.noop;
        let o = O.get(t);
        o || (o = new Set, O.set(t, o));
        let i = function(e, t, r, n = {}) {
            return {
                measure: t => {
                    ! function(e, t = e, r) {
                        if (r.x.targetOffset = 0, r.y.targetOffset = 0, t !== e) {
                            let n = t;
                            for (; n && n !== e;) r.x.targetOffset += n.offsetLeft, r.y.targetOffset += n.offsetTop, n = n.offsetParent
                        }
                        r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, r.x.containerLength = e.clientWidth, r.y.containerLength = e.clientHeight
                    }(e, n.target, r), g(e, "x", r, t), g(e, "y", r, t), r.time = t, (n.offset || n.target) && function(e, t, r) {
                        let {
                            offset: n = S
                        } = r, {
                            target: o = e,
                            axis: i = "y"
                        } = r, a = "y" === i ? "height" : "width", l = o !== e ? function(e, t) {
                            let r = {
                                    x: 0,
                                    y: 0
                                },
                                n = e;
                            for (; n && n !== t;)
                                if ((0, x.isHTMLElement)(n)) r.x += n.offsetLeft, r.y += n.offsetTop, n = n.offsetParent;
                                else if ("svg" === n.tagName) {
                                let e = n.getBoundingClientRect(),
                                    t = (n = n.parentElement).getBoundingClientRect();
                                r.x += e.left - t.left, r.y += e.top - t.top
                            } else if (n instanceof SVGGraphicsElement) {
                                let {
                                    x: e,
                                    y: t
                                } = n.getBBox();
                                r.x += e, r.y += t;
                                let o = null,
                                    i = n.parentNode;
                                for (; !o;) "svg" === i.tagName && (o = i), i = n.parentNode;
                                n = o
                            } else break;
                            return r
                        }(o, e) : _, s = o === e ? {
                            width: e.scrollWidth,
                            height: e.scrollHeight
                        } : "getBBox" in o && "svg" !== o.tagName ? o.getBBox() : {
                            width: o.clientWidth,
                            height: o.clientHeight
                        }, c = {
                            width: e.clientWidth,
                            height: e.clientHeight
                        };
                        t[i].offset.length = 0;
                        let u = !t[i].interpolate,
                            f = n.length;
                        for (let e = 0; e < f; e++) {
                            let r = function(e, t, r, n) {
                                let o = Array.isArray(e) ? e : j,
                                    i = 0;
                                return "number" == typeof e ? o = [e, e] : "string" == typeof e && (o = (e = e.trim()).includes(" ") ? e.split(" ") : [e, b[e] ? e : "0"]), (i = w(o[0], r, n)) - w(o[1], t)
                            }(n[e], c[a], s[a], l[i]);
                            u || r === t[i].interpolatorOffsets[e] || (u = !0), t[i].offset[e] = r
                        }
                        u && (t[i].interpolate = (0, m.interpolate)(t[i].offset, (0, y.defaultOffset)(n), {
                            clamp: !1
                        }), t[i].interpolatorOffsets = [...t[i].offset]), t[i].progress = (0, v.clamp)(0, 1, t[i].interpolate(t[i].current))
                    }(e, r, n)
                },
                notify: () => t(r)
            }
        }(t, e, {
            time: 0,
            x: p(),
            y: p()
        }, n);
        if (o.add(i), !N.has(t)) {
            let e = () => {
                    for (let e of o) e.measure(l.frameData.timestamp);
                    l.frame.preUpdate(r)
                },
                r = () => {
                    for (let e of o) e.notify()
                },
                n = () => l.frame.read(e);
            N.set(t, n);
            let i = A(t);
            window.addEventListener("resize", n), t !== document.documentElement && E.set(t, (0, u.resize)(t, n)), i.addEventListener("scroll", n), n()
        }
        if (r && !T.has(t)) {
            let e = N.get(t),
                r = {
                    width: t.scrollWidth,
                    height: t.scrollHeight
                };
            k.set(t, r);
            let n = l.frame.read(() => {
                let n = t.scrollWidth,
                    o = t.scrollHeight;
                (r.width !== n || r.height !== o) && (e(), r.width = n, r.height = o)
            }, !0);
            T.set(t, n)
        }
        let s = N.get(t);
        return l.frame.read(s, !1, !0), () => {
            (0, l.cancelFrame)(s);
            let e = O.get(t);
            if (!e || (e.delete(i), e.size)) return;
            let r = N.get(t);
            N.delete(t), r && (A(t).removeEventListener("scroll", r), E.get(t)?.(), window.removeEventListener("resize", r));
            let n = T.get(t);
            n && ((0, l.cancelFrame)(n), T.delete(t)), k.delete(t)
        }
    }
    let L = [
            [
                [
                    [0, 1],
                    [1, 1]
                ], "entry"
            ],
            [
                [
                    [0, 0],
                    [1, 0]
                ], "exit"
            ],
            [
                [
                    [1, 0],
                    [0, 1]
                ], "cover"
            ],
            [S, "contain"]
        ],
        C = {
            start: 0,
            end: 1
        };

    function M(e) {
        if (!e) return {
            rangeStart: "contain 0%",
            rangeEnd: "contain 100%"
        };
        for (let [t, r] of L)
            if (function(e, t) {
                    let r = function(e) {
                        if (2 !== e.length) return;
                        let t = [];
                        for (let r of e)
                            if (Array.isArray(r)) t.push(r);
                            else {
                                if ("string" != typeof r) return;
                                let e = function(e) {
                                    let t = e.trim().split(/\s+/);
                                    if (2 !== t.length) return;
                                    let r = C[t[0]],
                                        n = C[t[1]];
                                    if (void 0 !== r && void 0 !== n) return [r, n]
                                }(r);
                                if (!e) return;
                                t.push(e)
                            } return t
                    }(e);
                    if (!r) return !1;
                    for (let e = 0; e < 2; e++) {
                        let n = r[e],
                            o = t[e];
                        if (n[0] !== o[0] || n[1] !== o[1]) return !1
                    }
                    return !0
                }(e, t)) return {
                rangeStart: `${r} 0%`,
                rangeEnd: `${r} 100%`
            }
    }
    let R = new Map;

    function $(e) {
        let t = {
                value: 0
            },
            r = P(r => {
                t.value = 100 * r[e.axis].progress
            }, e);
        return {
            currentTime: t,
            cancel: r
        }
    }

    function W({
        source: e,
        container: t,
        ...r
    }) {
        let {
            axis: n
        } = r;
        e && (t = e);
        let o = R.get(t);
        o || (o = new Map, R.set(t, o));
        let i = r.target ?? "self",
            a = o.get(i);
        a || (a = {}, o.set(i, a));
        let l = n + (r.offset ?? []).join(",");
        return a[l] || (r.target && c(r.target) ? M(r.offset) ? a[l] = new ViewTimeline({
            subject: r.target,
            axis: n
        }) : a[l] = $({
            container: t,
            ...r
        }) : c() ? a[l] = new ScrollTimeline({
            source: t,
            axis: n
        }) : a[l] = $({
            container: t,
            ...r
        })), a[l]
    }

    function I(e, {
        axis: t = "y",
        container: r = document.scrollingElement,
        ...n
    } = {}) {
        let o, i, l;
        if (!r) return a.noop;
        let u = {
            axis: t,
            container: r,
            ...n
        };
        return "function" == typeof e ? function(e, t) {
            return 2 === e.length || t && (t.target || t.offset) ? P(r => {
                e(r[t.axis].progress, r)
            }, t) : s(e, W(t))
        }(e, u) : (o = W(u), i = u.target ? M(u.offset) : void 0, l = u.target ? c(u.target) && !!i : c(), e.attachTimeline({
            timeline: l ? o : void 0,
            ...i && l && {
                rangeStart: i.rangeStart,
                rangeEnd: i.rangeEnd
            },
            observe: e => (e.pause(), s(t => {
                e.time = e.iterationDuration * t
            }, o))
        }))
    }
    var B = e.i(416007),
        V = e.i(809018);
    let U = () => ({
            scrollX: (0, n.motionValue)(0),
            scrollY: (0, n.motionValue)(0),
            scrollXProgress: (0, n.motionValue)(0),
            scrollYProgress: (0, n.motionValue)(0)
        }),
        z = e => !!e && !e.current;

    function D(e, r, n, o) {
        return {
            factory: i => {
                let a, l = () => {
                    z(n) || z(o) ? t.microtask.read(l) : a = I(i, {
                        ...r,
                        axis: e,
                        container: n?.current || void 0,
                        target: o?.current || void 0
                    })
                };
                return t.microtask.read(l), () => {
                    (0, t.cancelMicrotask)(l), a?.()
                }
            },
            times: [0, 1],
            keyframes: [0, 1],
            ease: e => e,
            duration: 1
        }
    }
    e.s(["useScroll", 0, function({
        container: e,
        target: n,
        ...a
    } = {}) {
        var l;
        let s = (0, B.useConstant)(U);
        l = a.offset, !("u" < typeof window) && (n ? (0, r.supportsViewTimeline)() && !!M(l) : (0, r.supportsScrollTimeline)()) && (s.scrollXProgress.accelerate = D("x", a, e, n), s.scrollYProgress.accelerate = D("y", a, e, n));
        let c = (0, i.useRef)(null),
            u = (0, i.useRef)(!1),
            f = (0, i.useCallback)(() => (c.current = I((e, {
                x: t,
                y: r
            }) => {
                s.scrollX.set(t.current), s.scrollXProgress.set(t.progress), s.scrollY.set(r.current), s.scrollYProgress.set(r.progress)
            }, {
                ...a,
                container: e?.current || void 0,
                target: n?.current || void 0
            }), () => {
                c.current?.()
            }), [e, n, JSON.stringify(a.offset)]);
        return (0, V.useIsomorphicLayoutEffect)(() => {
            if (u.current = !1, !(z(e) || z(n))) return f();
            u.current = !0
        }, [f]), (0, i.useEffect)(() => {
            let r;
            if (!u.current) return;
            let i = () => {
                let t = z(e),
                    i = z(n);
                (0, o.invariant)(!t, "Container ref is defined but not hydrated", "use-scroll-ref"), (0, o.invariant)(!i, "Target ref is defined but not hydrated", "use-scroll-ref"), t || i || (r = f())
            };
            return t.microtask.read(i), () => {
                (0, t.cancelMicrotask)(i), r?.()
            }
        }, [f]), s
    }], 417245);
    var H = e.i(481522);

    function G(e) {
        let t = (0, B.useConstant)(() => (0, n.motionValue)(e)),
            {
                isStatic: r
            } = (0, i.useContext)(H.MotionConfigContext);
        if (r) {
            let [, r] = (0, i.useState)(e);
            (0, i.useEffect)(() => t.on("change", r), [])
        }
        return t
    }

    function F(e, t) {
        let r = G(t()),
            n = () => r.set(t());
        return n(), (0, V.useIsomorphicLayoutEffect)(() => {
            let t = () => l.frame.preRender(n, !1, !0),
                r = e.map(e => e.on("change", t));
            return () => {
                r.forEach(e => e()), (0, l.cancelFrame)(n)
            }
        }), r
    }
    e.s(["useMotionValue", 0, G], 843678);

    function X(e, t) {
        let r = (0, B.useConstant)(() => []);
        return F(e, () => {
            r.length = 0;
            let n = e.length;
            for (let t = 0; t < n; t++) r[t] = e[t].get();
            return t(r)
        })
    }
    e.s(["useTransform", 0, function e(t, r, o, i) {
        if ("function" == typeof t) {
            let e;
            return n.collectMotionValues.current = [], t(), e = F(n.collectMotionValues.current, t), n.collectMotionValues.current = void 0, e
        }
        if (void 0 !== o && !Array.isArray(o) && "function" != typeof r) {
            var a = t,
                l = r,
                s = o,
                c = i;
            let n = (0, B.useConstant)(() => Object.keys(s)),
                u = (0, B.useConstant)(() => ({}));
            for (let t of n) u[t] = e(a, l, s[t], c);
            return u
        }
        let u = "function" == typeof r ? r : function(...e) {
                let t = !Array.isArray(e[0]),
                    r = t ? 0 : -1,
                    n = e[0 + r],
                    o = e[1 + r],
                    i = e[2 + r],
                    a = e[3 + r],
                    l = (0, m.interpolate)(o, i, a);
                return t ? l(n) : l
            }(r, o, i),
            f = Array.isArray(t) ? X(t, u) : X([t], ([e]) => u(e)),
            d = Array.isArray(t) ? void 0 : t.accelerate;
        return d && !d.isTransformed && "function" != typeof r && Array.isArray(o) && i?.clamp !== !1 && (f.accelerate = {
            ...d,
            times: r,
            keyframes: o,
            isTransformed: !0,
            ...i?.ease ? {
                ease: i.ease
            } : {}
        }), f
    }], 304776)
}, 193863, (e, t, r) => {
    e.e, t.exports = function(e, t) {
        if (void 0 == t && (t = {
                fuzzy: !0
            }), /youtu\.?be/.test(e)) {
            var r, n = [/youtu\.be\/([^#\&\?]{11})/, /\?v=([^#\&\?]{11})/, /\&v=([^#\&\?]{11})/, /embed\/([^#\&\?]{11})/, /\/v\/([^#\&\?]{11})/];
            for (r = 0; r < n.length; ++r)
                if (n[r].test(e)) return n[r].exec(e)[1];
            if (t.fuzzy) {
                var o = e.split(/[\/\&\?=#\.\s]/g);
                for (r = 0; r < o.length; ++r)
                    if (/^[^#\&\?]{11}$/.test(o[r])) return o[r]
            }
        }
        return null
    }
}, 865799, (e, t, r) => {
    t.exports = function(e, t, r) {
        switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
        }
        return e.apply(t, r)
    }
}, 531766, (e, t, r) => {
    t.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
        return e
    }
}, 317508, (e, t, r) => {
    var n = e.r(830747),
        o = e.r(599568),
        i = e.r(240046);
    t.exports = o ? function(e, t) {
        return o(e, "toString", {
            configurable: !0,
            enumerable: !1,
            value: n(t),
            writable: !0
        })
    } : i
}, 599568, (e, t, r) => {
    var n = e.r(581511);
    t.exports = function() {
        try {
            var e = n(Object, "defineProperty");
            return e({}, "", {}), e
        } catch (e) {}
    }()
}, 860059, (e, t, r) => {
    var n = /^(?:0|[1-9]\d*)$/;
    t.exports = function(e, t) {
        var r = typeof e;
        return !!(t = null == t ? 0x1fffffffffffff : t) && ("number" == r || "symbol" != r && n.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, 184414, (e, t, r) => {
    var n = e.r(865799),
        o = Math.max;
    t.exports = function(e, t, r) {
        return t = o(void 0 === t ? e.length - 1 : t, 0),
            function() {
                for (var i = arguments, a = -1, l = o(i.length - t, 0), s = Array(l); ++a < l;) s[a] = i[t + a];
                a = -1;
                for (var c = Array(t + 1); ++a < t;) c[a] = i[a];
                return c[t] = r(s), n(e, this, c)
            }
    }
}, 108749, (e, t, r) => {
    var n = e.r(317508);
    t.exports = e.r(911818)(n)
}, 911818, (e, t, r) => {
    var n = Date.now;
    t.exports = function(e) {
        var t = 0,
            r = 0;
        return function() {
            var o = n(),
                i = 16 - (o - r);
            if (r = o, i > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
}, 830747, (e, t, r) => {
    t.exports = function(e) {
        return function() {
            return e
        }
    }
}, 240046, (e, t, r) => {
    t.exports = function(e) {
        return e
    }
}, 590553, e => {
    "use strict";
    var t = e.i(803258),
        r = e.i(409781);
    e.s(["useToggleState", 0, function(e = {}) {
        let {
            isReadOnly: n
        } = e, [o, i] = (0, t.useControlledState)(e.isSelected, e.defaultSelected || !1, e.onChange), [a] = (0, r.useState)(o);
        return {
            isSelected: o,
            defaultSelected: e.defaultSelected ?? a,
            setSelected: function(e) {
                n || i(e)
            },
            toggle: function() {
                n || i(!o)
            }
        }
    }])
}, 824627, e => {
    "use strict";
    var t = function(e, r) {
            return (t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            })(e, r)
        },
        r = function() {
            return (r = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };

    function n(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function o(e) {
        return this instanceof o ? (this.v = e, this) : new o(e)
    }
    "function" == typeof SuppressedError && SuppressedError, e.s(["__assign", () => r, "__asyncGenerator", 0, function(e, t, r) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var n, i = r.apply(e, t || []),
            a = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", function(e) {
            return function(t) {
                return Promise.resolve(t).then(e, u)
            }
        }), n[Symbol.asyncIterator] = function() {
            return this
        }, n;

        function l(e, t) {
            i[e] && (n[e] = function(t) {
                return new Promise(function(r, n) {
                    a.push([e, t, r, n]) > 1 || s(e, t)
                })
            }, t && (n[e] = t(n[e])))
        }

        function s(e, t) {
            try {
                var r;
                (r = i[e](t)).value instanceof o ? Promise.resolve(r.value.v).then(c, u) : f(a[0][2], r)
            } catch (e) {
                f(a[0][3], e)
            }
        }

        function c(e) {
            s("next", e)
        }

        function u(e) {
            s("throw", e)
        }

        function f(e, t) {
            e(t), a.shift(), a.length && s(a[0][0], a[0][1])
        }
    }, "__asyncValues", 0, function(e) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = n(e), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
            return this
        }, t);

        function o(r) {
            t[r] = e[r] && function(t) {
                return new Promise(function(n, o) {
                    var i, a, l;
                    i = n, a = o, l = (t = e[r](t)).done, Promise.resolve(t.value).then(function(e) {
                        i({
                            value: e,
                            done: l
                        })
                    }, a)
                })
            }
        }
    }, "__await", 0, o, "__awaiter", 0, function(e, t, r, n) {
        return new(r || (r = Promise))(function(o, i) {
            function a(e) {
                try {
                    s(n.next(e))
                } catch (e) {
                    i(e)
                }
            }

            function l(e) {
                try {
                    s(n.throw(e))
                } catch (e) {
                    i(e)
                }
            }

            function s(e) {
                var t;
                e.done ? o(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, l)
            }
            s((n = n.apply(e, t || [])).next())
        })
    }, "__extends", 0, function(e, r) {
        if ("function" != typeof r && null !== r) throw TypeError("Class extends value " + String(r) + " is not a constructor or null");

        function n() {
            this.constructor = e
        }
        t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
    }, "__generator", 0, function(e, t) {
        var r, n, o, i = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = l(0), a.throw = l(1), a.return = l(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function l(l) {
            return function(s) {
                var c = [l, s];
                if (r) throw TypeError("Generator is already executing.");
                for (; a && (a = 0, c[0] && (i = 0)), i;) try {
                    if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                    switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                        case 0:
                        case 1:
                            o = c;
                            break;
                        case 4:
                            return i.label++, {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            i.label++, n = c[1], c = [0];
                            continue;
                        case 7:
                            c = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                i.label = c[1];
                                break
                            }
                            if (6 === c[0] && i.label < o[1]) {
                                i.label = o[1], o = c;
                                break
                            }
                            if (o && i.label < o[2]) {
                                i.label = o[2], i.ops.push(c);
                                break
                            }
                            o[2] && i.ops.pop(), i.trys.pop();
                            continue
                    }
                    c = t.call(e, i)
                } catch (e) {
                    c = [6, e], n = 0
                } finally {
                    r = o = 0
                }
                if (5 & c[0]) throw c[1];
                return {
                    value: c[0] ? c[1] : void 0,
                    done: !0
                }
            }
        }
    }, "__read", 0, function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, i = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = i.next()).done;) a.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = i.return) && r.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    }, "__rest", 0, function(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r
    }, "__spreadArray", 0, function(e, t, r) {
        if (r || 2 == arguments.length)
            for (var n, o = 0, i = t.length; o < i; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
    }, "__values", 0, n])
}, 164163, 596889, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(722978),
        n = e.i(833449),
        o = e.i(825610),
        i = e.i(749583);
    let a = ({
        children: e,
        className: n = "",
        variant: o = "default"
    }) => {
        let i = (0, r.clsx)({
            default: "bg-white dark:bg-gray-900 rounded-xl",
            padded: "p-6 bg-white dark:bg-gray-900 rounded-xl",
            transparent: ""
        } [o], n);
        return (0, t.jsx)("div", {
            className: i,
            children: e
        })
    };
    a.Content = ({
        children: e,
        className: r = "w-full"
    }) => (0, t.jsx)("div", {
        className: r,
        children: e
    }), a.Image = ({
        children: e,
        withinContainer: n
    }) => {
        let o = (0, r.clsx)("card-img relative w-full", {
            "[&>img]:!static !h-auto": n
        });
        return (0, t.jsx)("div", {
            className: o,
            children: e
        })
    }, e.s(["default", 0, a], 596889);
    var l = e.i(805518);
    e.s(["default", 0, ({
        title: e,
        cards: s,
        layout: c = "four-cards",
        cardVariant: u = "default",
        scroll: f = !1,
        cardsHeading: d
    }) => {
        let p = d || (e ? "h3" : "h2"),
            h = (0, r.clsx)("gap-4 md:gap-8", {
                "grid grid-cols-12": !f,
                "flex overflow-x-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-900 dark:scrollbar-track-gray-900 dark:scrollbar-thumb-gray-100": f
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
                    children: s?.map((s, d) => {
                        let h = (0, r.clsx)("flex flex-wrap flex-row", !f && ({
                                "two-cards": "col-span-12 md:col-span-6 [&>div>.card-img]:h-72",
                                "three-cards": "col-span-12 md:col-span-6 lg:col-span-4 [&>div>.card-img]:h-44",
                                "four-cards": "col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3 [&>div>.card-img]:h-36"
                            })[c], f && ({
                                "two-cards": "mb-6 min-w-[35rem] [&>div>.card-img]:h-72",
                                "three-cards": "mb-6 min-w-[22rem] [&>div>.card-img]:h-44",
                                "four-cards": "mb-6 min-w-[16rem] [&>div>.card-img]:h-36"
                            })[c]),
                            g = (0, r.clsx)("place-self-end", {
                                "px-6 pb-6": "default" === u || "transparent" === u
                            }),
                            m = (0, r.clsx)({
                                "p-6": "default" === u || "transparent" === u,
                                "py-6": "padded" === u
                            }),
                            y = (0, r.clsx)("object-cover", {
                                "rounded-t-xl": "default" === u || "transparent" === u,
                                rounded: "padded" === u
                            }),
                            v = (0, r.clsx)("caption-xs mt-1 text-right text-gray-400", {
                                "mr-1": "padded" !== u
                            });
                        return (0, t.jsxs)(a, {
                            className: h,
                            variant: u,
                            children: [(0, t.jsxs)(a.Content, {
                                children: [s.image && s.image.src && (0, t.jsxs)(t.Fragment, {
                                    children: [(0, t.jsx)(a.Image, {
                                        withinContainer: s.image.withinContainer,
                                        children: (0, t.jsx)(n.default, {
                                            src: s.image.src ?? "",
                                            alt: s.image.alt ?? "",
                                            fill: !0,
                                            className: y,
                                            quality: 100
                                        })
                                    }), s.image.description && (0, t.jsx)(l.default, {
                                        className: v,
                                        children: s.image.description
                                    })]
                                }), (0, t.jsxs)("div", {
                                    className: m,
                                    children: [s.icon && s.icon.src && (0, t.jsx)("div", {
                                        className: "relative mb-5 dark:invert",
                                        children: (0, t.jsx)(n.default, {
                                            src: s.icon.src ?? "",
                                            alt: s.icon.alt ?? "",
                                            quality: 100,
                                            width: 23,
                                            height: 23
                                        })
                                    }), (0, t.jsx)(p, {
                                        className: "loco-text-body-lg-medium mb-4 !font-semibold",
                                        children: s.title
                                    }), s.description && (0, t.jsx)(l.default, {
                                        className: "loco-text-body mb-4",
                                        children: s.description
                                    }), s.richText && (0, t.jsx)(l.default, {
                                        className: "loco-text-body mb-4 text-gray-600 dark:text-gray-300",
                                        children: s.richText
                                    })]
                                })]
                            }), s.actions && (0, t.jsx)("div", {
                                className: g,
                                children: s.actions.map((e, r) => (0, t.jsx)(i.default, {
                                    href: e.href,
                                    target: e.target ?? "_self",
                                    rounded: !0,
                                    hasArrow: !0,
                                    outlined: 0 === r,
                                    className: 0 === r ? "mr-3" : "mt-4",
                                    variant: 0 === r ? "primary" : "secondary",
                                    "data-link-location": o.trackingLocation.cardsAction,
                                    "data-link-id": `${o.trackingLocation.cardsAction}-${r}`,
                                    children: e.title
                                }, `${e.title}-${r}`))
                            })]
                        }, `card-${d}-${e}`)
                    })
                })]
            })
        })
    }], 164163)
}, 14452, e => {
    "use strict";
    var t = e.i(785328),
        r = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        className: n = "",
        tag: o = "div"
    }) => {
        let i = (0, r.default)("loco-text-heading-sm mb-4", n);
        return (0, t.jsx)(o, {
            className: i,
            children: e
        })
    }], 14452)
}, 430215, e => {
    "use strict";
    var t = e.i(409781);
    e.s(["default", 0, e => {
        let [r, n] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            let t = window.matchMedia(e);
            t.matches !== r && n(t.matches);
            let o = () => n(t.matches);
            return window.addEventListener("resize", o), () => window.removeEventListener("resize", o)
        }, [r, e]), r
    }])
}]);