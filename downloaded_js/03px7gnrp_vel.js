(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 131581, e => {
    "use strict";
    var t = e.i(499531),
        r = e.i(513038);
    let n = {
        some: 0,
        all: 1
    };
    e.s(["useInView", 0, function(e, {
        root: i,
        margin: a,
        amount: s,
        once: l = !1,
        initial: o = !1
    } = {}) {
        let [c, u] = (0, t.useState)(o);
        return (0, t.useEffect)(() => {
            if (!e.current || l && c) return;
            let t = {
                root: i && i.current || void 0,
                margin: a,
                amount: s
            };
            return function(e, t, {
                root: i,
                margin: a,
                amount: s = "some"
            } = {}) {
                let l = (0, r.resolveElements)(e),
                    o = new WeakMap,
                    c = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = o.get(e.target);
                            if (!!r !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let r = t(e.target, e);
                                    "function" == typeof r ? o.set(e.target, r) : c.unobserve(e.target)
                                } else "function" == typeof r && (r(e), o.delete(e.target))
                        })
                    }, {
                        root: i,
                        rootMargin: a,
                        threshold: "number" == typeof s ? s : n[s]
                    });
                return l.forEach(e => c.observe(e)), () => c.disconnect()
            }(e.current, () => (u(!0), l ? void 0 : () => u(!1)), t)
        }, [i, e, a, l, s]), c
    }], 131581)
}, 124576, e => {
    "use strict";
    var t = e.i(876009),
        r = e.i(494004),
        n = e.i(499531);
    e.s(["useReducedMotion", 0, function() {
        t.hasReducedMotionListener.current || (0, r.initPrefersReducedMotion)();
        let [e] = (0, n.useState)(t.prefersReducedMotion.current);
        return e
    }])
}, 193863, (e, t, r) => {
    e.e, t.exports = function(e, t) {
        if (void 0 == t && (t = {
                fuzzy: !0
            }), /youtu\.?be/.test(e)) {
            var r, n = [/youtu\.be\/([^#\&\?]{11})/, /\?v=([^#\&\?]{11})/, /\&v=([^#\&\?]{11})/, /embed\/([^#\&\?]{11})/, /\/v\/([^#\&\?]{11})/];
            for (r = 0; r < n.length; ++r)
                if (n[r].test(e)) return n[r].exec(e)[1];
            if (t.fuzzy) {
                var i = e.split(/[\/\&\?=#\.\s]/g);
                for (r = 0; r < i.length; ++r)
                    if (/^[^#\&\?]{11}$/.test(i[r])) return i[r]
            }
        }
        return null
    }
}, 430215, e => {
    "use strict";
    var t = e.i(499531);
    e.s(["default", 0, e => {
        let [r, n] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            let t = window.matchMedia(e);
            t.matches !== r && n(t.matches);
            let i = () => n(t.matches);
            return window.addEventListener("resize", i), () => window.removeEventListener("resize", i)
        }, [r, e]), r
    }])
}, 417245, 843678, 304776, e => {
    "use strict";
    var t = e.i(328744),
        r = e.i(823928),
        n = e.i(706221),
        i = e.i(725542),
        a = e.i(499531),
        s = e.i(120194),
        l = e.i(672357);

    function o(e, t) {
        let r, n = () => {
            let {
                currentTime: n
            } = t, i = (null === n ? 0 : n.value) / 100;
            r !== i && e(i), r = i
        };
        return l.frame.preUpdate(n, !0), () => (0, l.cancelFrame)(n)
    }

    function c(e) {
        return !("u" < typeof window) && (e ? (0, r.supportsViewTimeline)() : (0, r.supportsScrollTimeline)())
    }
    var u = e.i(270736),
        d = e.i(470934),
        f = e.i(398361);
    let m = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }),
        g = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };

    function p(e, t, r, n) {
        let i = r[t],
            {
                length: a,
                position: s
            } = g[t],
            l = i.current,
            o = r.time;
        i.current = Math.abs(e[`scroll${s}`]), i.scrollLength = e[`scroll${a}`] - e[`client${a}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = (0, d.progress)(0, i.scrollLength, i.current);
        let c = n - o;
        i.velocity = c > 50 ? 0 : (0, f.velocityPerSecond)(i.current - l, c)
    }
    e.i(203217);
    var h = e.i(226056),
        x = e.i(973626),
        y = e.i(508983),
        v = e.i(335029);
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
        k = [
            [0, 0],
            [1, 1]
        ],
        L = {
            x: 0,
            y: 0
        },
        M = new WeakMap,
        F = new WeakMap,
        E = new WeakMap,
        N = new WeakMap,
        S = new WeakMap,
        T = e => e === document.scrollingElement ? window : e;

    function R(e, {
        container: t = document.scrollingElement,
        trackContentSize: r = !1,
        ...n
    } = {}) {
        if (!t) return s.noop;
        let i = E.get(t);
        i || (i = new Set, E.set(t, i));
        let a = function(e, t, r, n = {}) {
            return {
                measure: t => {
                    ! function(e, t = e, r) {
                        if (r.x.targetOffset = 0, r.y.targetOffset = 0, t !== e) {
                            let n = t;
                            for (; n && n !== e;) r.x.targetOffset += n.offsetLeft, r.y.targetOffset += n.offsetTop, n = n.offsetParent
                        }
                        r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, r.x.containerLength = e.clientWidth, r.y.containerLength = e.clientHeight
                    }(e, n.target, r), p(e, "x", r, t), p(e, "y", r, t), r.time = t, (n.offset || n.target) && function(e, t, r) {
                        let {
                            offset: n = k
                        } = r, {
                            target: i = e,
                            axis: a = "y"
                        } = r, s = "y" === a ? "height" : "width", l = i !== e ? function(e, t) {
                            let r = {
                                    x: 0,
                                    y: 0
                                },
                                n = e;
                            for (; n && n !== t;)
                                if ((0, v.isHTMLElement)(n)) r.x += n.offsetLeft, r.y += n.offsetTop, n = n.offsetParent;
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
                                let i = null,
                                    a = n.parentNode;
                                for (; !i;) "svg" === a.tagName && (i = a), a = n.parentNode;
                                n = i
                            } else break;
                            return r
                        }(i, e) : L, o = i === e ? {
                            width: e.scrollWidth,
                            height: e.scrollHeight
                        } : "getBBox" in i && "svg" !== i.tagName ? i.getBBox() : {
                            width: i.clientWidth,
                            height: i.clientHeight
                        }, c = {
                            width: e.clientWidth,
                            height: e.clientHeight
                        };
                        t[a].offset.length = 0;
                        let u = !t[a].interpolate,
                            d = n.length;
                        for (let e = 0; e < d; e++) {
                            let r = function(e, t, r, n) {
                                let i = Array.isArray(e) ? e : j,
                                    a = 0;
                                return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, b[e] ? e : "0"]), (a = w(i[0], r, n)) - w(i[1], t)
                            }(n[e], c[s], o[s], l[a]);
                            u || r === t[a].interpolatorOffsets[e] || (u = !0), t[a].offset[e] = r
                        }
                        u && (t[a].interpolate = (0, h.interpolate)(t[a].offset, (0, x.defaultOffset)(n), {
                            clamp: !1
                        }), t[a].interpolatorOffsets = [...t[a].offset]), t[a].progress = (0, y.clamp)(0, 1, t[a].interpolate(t[a].current))
                    }(e, r, n)
                },
                notify: () => t(r)
            }
        }(t, e, {
            time: 0,
            x: m(),
            y: m()
        }, n);
        if (i.add(a), !M.has(t)) {
            let e = () => {
                    for (let e of i) e.measure(l.frameData.timestamp);
                    l.frame.preUpdate(r)
                },
                r = () => {
                    for (let e of i) e.notify()
                },
                n = () => l.frame.read(e);
            M.set(t, n);
            let a = T(t);
            window.addEventListener("resize", n), t !== document.documentElement && F.set(t, (0, u.resize)(t, n)), a.addEventListener("scroll", n), n()
        }
        if (r && !S.has(t)) {
            let e = M.get(t),
                r = {
                    width: t.scrollWidth,
                    height: t.scrollHeight
                };
            N.set(t, r);
            let n = l.frame.read(() => {
                let n = t.scrollWidth,
                    i = t.scrollHeight;
                (r.width !== n || r.height !== i) && (e(), r.width = n, r.height = i)
            }, !0);
            S.set(t, n)
        }
        let o = M.get(t);
        return l.frame.read(o, !1, !0), () => {
            (0, l.cancelFrame)(o);
            let e = E.get(t);
            if (!e || (e.delete(a), e.size)) return;
            let r = M.get(t);
            M.delete(t), r && (T(t).removeEventListener("scroll", r), F.get(t)?.(), window.removeEventListener("resize", r));
            let n = S.get(t);
            n && ((0, l.cancelFrame)(n), S.delete(t)), N.delete(t)
        }
    }
    let C = [
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
            [k, "contain"]
        ],
        O = {
            start: 0,
            end: 1
        };

    function I(e) {
        if (!e) return {
            rangeStart: "contain 0%",
            rangeEnd: "contain 100%"
        };
        for (let [t, r] of C)
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
                                    let r = O[t[0]],
                                        n = O[t[1]];
                                    if (void 0 !== r && void 0 !== n) return [r, n]
                                }(r);
                                if (!e) return;
                                t.push(e)
                            } return t
                    }(e);
                    if (!r) return !1;
                    for (let e = 0; e < 2; e++) {
                        let n = r[e],
                            i = t[e];
                        if (n[0] !== i[0] || n[1] !== i[1]) return !1
                    }
                    return !0
                }(e, t)) return {
                rangeStart: `${r} 0%`,
                rangeEnd: `${r} 100%`
            }
    }
    let A = new Map;

    function P(e) {
        let t = {
                value: 0
            },
            r = R(r => {
                t.value = 100 * r[e.axis].progress
            }, e);
        return {
            currentTime: t,
            cancel: r
        }
    }

    function _({
        source: e,
        container: t,
        ...r
    }) {
        let {
            axis: n
        } = r;
        e && (t = e);
        let i = A.get(t);
        i || (i = new Map, A.set(t, i));
        let a = r.target ?? "self",
            s = i.get(a);
        s || (s = {}, i.set(a, s));
        let l = n + (r.offset ?? []).join(",");
        return s[l] || (r.target && c(r.target) ? I(r.offset) ? s[l] = new ViewTimeline({
            subject: r.target,
            axis: n
        }) : s[l] = P({
            container: t,
            ...r
        }) : c() ? s[l] = new ScrollTimeline({
            source: t,
            axis: n
        }) : s[l] = P({
            container: t,
            ...r
        })), s[l]
    }

    function V(e, {
        axis: t = "y",
        container: r = document.scrollingElement,
        ...n
    } = {}) {
        let i, a, l;
        if (!r) return s.noop;
        let u = {
            axis: t,
            container: r,
            ...n
        };
        return "function" == typeof e ? function(e, t) {
            return 2 === e.length || t && (t.target || t.offset) ? R(r => {
                e(r[t.axis].progress, r)
            }, t) : o(e, _(t))
        }(e, u) : (i = _(u), a = u.target ? I(u.offset) : void 0, l = u.target ? c(u.target) && !!a : c(), e.attachTimeline({
            timeline: l ? i : void 0,
            ...a && l && {
                rangeStart: a.rangeStart,
                rangeEnd: a.rangeEnd
            },
            observe: e => (e.pause(), o(t => {
                e.time = e.iterationDuration * t
            }, i))
        }))
    }
    var W = e.i(416007),
        U = e.i(129766);
    let B = () => ({
            scrollX: (0, n.motionValue)(0),
            scrollY: (0, n.motionValue)(0),
            scrollXProgress: (0, n.motionValue)(0),
            scrollYProgress: (0, n.motionValue)(0)
        }),
        q = e => !!e && !e.current;

    function z(e, r, n, i) {
        return {
            factory: a => {
                let s, l = () => {
                    q(n) || q(i) ? t.microtask.read(l) : s = V(a, {
                        ...r,
                        axis: e,
                        container: n?.current || void 0,
                        target: i?.current || void 0
                    })
                };
                return t.microtask.read(l), () => {
                    (0, t.cancelMicrotask)(l), s?.()
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
        ...s
    } = {}) {
        var l;
        let o = (0, W.useConstant)(B);
        l = s.offset, !("u" < typeof window) && (n ? (0, r.supportsViewTimeline)() && !!I(l) : (0, r.supportsScrollTimeline)()) && (o.scrollXProgress.accelerate = z("x", s, e, n), o.scrollYProgress.accelerate = z("y", s, e, n));
        let c = (0, a.useRef)(null),
            u = (0, a.useRef)(!1),
            d = (0, a.useCallback)(() => (c.current = V((e, {
                x: t,
                y: r
            }) => {
                o.scrollX.set(t.current), o.scrollXProgress.set(t.progress), o.scrollY.set(r.current), o.scrollYProgress.set(r.progress)
            }, {
                ...s,
                container: e?.current || void 0,
                target: n?.current || void 0
            }), () => {
                c.current?.()
            }), [e, n, JSON.stringify(s.offset)]);
        return (0, U.useIsomorphicLayoutEffect)(() => {
            if (u.current = !1, !(q(e) || q(n))) return d();
            u.current = !0
        }, [d]), (0, a.useEffect)(() => {
            let r;
            if (!u.current) return;
            let a = () => {
                let t = q(e),
                    a = q(n);
                (0, i.invariant)(!t, "Container ref is defined but not hydrated", "use-scroll-ref"), (0, i.invariant)(!a, "Target ref is defined but not hydrated", "use-scroll-ref"), t || a || (r = d())
            };
            return t.microtask.read(a), () => {
                (0, t.cancelMicrotask)(a), r?.()
            }
        }, [d]), o
    }], 417245);
    var D = e.i(481522);

    function $(e) {
        let t = (0, W.useConstant)(() => (0, n.motionValue)(e)),
            {
                isStatic: r
            } = (0, a.useContext)(D.MotionConfigContext);
        if (r) {
            let [, r] = (0, a.useState)(e);
            (0, a.useEffect)(() => t.on("change", r), [])
        }
        return t
    }

    function H(e, t) {
        let r = $(t()),
            n = () => r.set(t());
        return n(), (0, U.useIsomorphicLayoutEffect)(() => {
            let t = () => l.frame.preRender(n, !1, !0),
                r = e.map(e => e.on("change", t));
            return () => {
                r.forEach(e => e()), (0, l.cancelFrame)(n)
            }
        }), r
    }
    e.s(["useMotionValue", 0, $], 843678);

    function G(e, t) {
        let r = (0, W.useConstant)(() => []);
        return H(e, () => {
            r.length = 0;
            let n = e.length;
            for (let t = 0; t < n; t++) r[t] = e[t].get();
            return t(r)
        })
    }
    e.s(["useTransform", 0, function e(t, r, i, a) {
        if ("function" == typeof t) {
            let e;
            return n.collectMotionValues.current = [], t(), e = H(n.collectMotionValues.current, t), n.collectMotionValues.current = void 0, e
        }
        if (void 0 !== i && !Array.isArray(i) && "function" != typeof r) {
            var s = t,
                l = r,
                o = i,
                c = a;
            let n = (0, W.useConstant)(() => Object.keys(o)),
                u = (0, W.useConstant)(() => ({}));
            for (let t of n) u[t] = e(s, l, o[t], c);
            return u
        }
        let u = "function" == typeof r ? r : function(...e) {
                let t = !Array.isArray(e[0]),
                    r = t ? 0 : -1,
                    n = e[0 + r],
                    i = e[1 + r],
                    a = e[2 + r],
                    s = e[3 + r],
                    l = (0, h.interpolate)(i, a, s);
                return t ? l(n) : l
            }(r, i, a),
            d = Array.isArray(t) ? G(t, u) : G([t], ([e]) => u(e)),
            f = Array.isArray(t) ? void 0 : t.accelerate;
        return f && !f.isTransformed && "function" != typeof r && Array.isArray(i) && a?.clamp !== !1 && (d.accelerate = {
            ...f,
            times: r,
            keyframes: i,
            isTransformed: !0,
            ...a?.ease ? {
                ease: a.ease
            } : {}
        }), d
    }], 304776)
}, 551779, e => {
    "use strict";
    var t, r, n = ((t = {}).en = "en", t.de = "de_de", t.ja = "ja_jp", t.fr = "fr_fr", t.pt = "pt_br", t.cn = "zh_cn", t.es = "es_es", t.ru = "ru_ru", t.kr = "ko_kr", t),
        i = ((r = {}).en = "en-US", r.de = "de-DE", r.ja = "ja-JP", r.fr = "fr-FR", r.pt = "pt-BR", r.cn = "zh-CN", r.es = "es-ES", r.ru = "ru-RU", r.kr = "ko-KR", r);
    e.s(["LanguageMap", () => n, "LanguageMapIETFLanguageTag", () => i])
}, 22766, (e, t, r) => {
    t.exports = e.r(581511)(e.r(78974), "DataView")
}, 13715, (e, t, r) => {
    t.exports = e.r(581511)(e.r(78974), "Promise")
}, 292408, (e, t, r) => {
    t.exports = e.r(581511)(e.r(78974), "Set")
}, 843031, (e, t, r) => {
    t.exports = e.r(581511)(e.r(78974), "WeakMap")
}, 354700, (e, t, r) => {
    var n = e.r(22766),
        i = e.r(764138),
        a = e.r(13715),
        s = e.r(292408),
        l = e.r(843031),
        o = e.r(416907),
        c = e.r(908829),
        u = "[object Map]",
        d = "[object Promise]",
        f = "[object Set]",
        m = "[object WeakMap]",
        g = "[object DataView]",
        p = c(n),
        h = c(i),
        x = c(a),
        y = c(s),
        v = c(l),
        b = o;
    (n && b(new n(new ArrayBuffer(1))) != g || i && b(new i) != u || a && b(a.resolve()) != d || s && b(new s) != f || l && b(new l) != m) && (b = function(e) {
        var t = o(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? c(r) : "";
        if (n) switch (n) {
            case p:
                return g;
            case h:
                return u;
            case x:
                return d;
            case y:
                return f;
            case v:
                return m
        }
        return t
    }), t.exports = b
}, 87522, (e, t, r) => {
    var n = e.r(668488),
        i = e.r(354700),
        a = e.r(410090),
        s = e.r(778116),
        l = e.r(622914),
        o = e.r(432816),
        c = e.r(820092),
        u = e.r(905330),
        d = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        if (null == e) return !0;
        if (l(e) && (s(e) || "string" == typeof e || "function" == typeof e.splice || o(e) || u(e) || a(e))) return !e.length;
        var t = i(e);
        if ("[object Map]" == t || "[object Set]" == t) return !e.size;
        if (c(e)) return !n(e).length;
        for (var r in e)
            if (d.call(e, r)) return !1;
        return !0
    }
}, 180793, (e, t, r) => {
    t.exports = function(e) {
        return null == e
    }
}, 829150, 434438, e => {
    "use strict";
    var t = e.i(551779);
    let r = t.LanguageMapIETFLanguageTag[t.LanguageMap.en],
        n = e => Object.keys(t.LanguageMapIETFLanguageTag).find(r => t.LanguageMapIETFLanguageTag[r] === e),
        i = (e = t.LanguageMap.en) => t.LanguageMapIETFLanguageTag[e] || r;
    e.s(["FALLBACK_LANGUAGE", 0, r, "default", 0, i, "getLanguageKey", 0, n], 434438);
    var a = e.i(87522),
        s = e.i(180793);
    e.s(["default", 0, (e, l, o) => {
        let {
            locale: c,
            ...u
        } = l, d = e;
        return o && d ? ((e => {
            let r;
            try {
                r = new URL(e)
            } catch (e) {
                return !1
            }
            return i(r.pathname.split("/")[1]) !== t.LanguageMapIETFLanguageTag.en
        })(d) || c === r || (d = ((e, t) => {
            let r;
            if (!t) return e;
            try {
                r = new URL(e)
            } catch (t) {
                return e
            }
            let n = r.pathname.split("/");
            return n.splice(1, 0, t), r.pathname = n.join("/"), r.toString()
        })(d, n(c))), ((e, t) => {
            let r;
            if ((0, a.default)(t)) return e;
            let n = -1 === (r = e.indexOf("?")) ? {} : e.slice(r + 1).split("&").reduce((e, t) => {
                    let [r, n] = t.split("=");
                    return r && (e[decodeURIComponent(r)] = decodeURIComponent(n || "")), e
                }, {}),
                i = {};
            Object.entries(t).forEach(([e, t]) => {
                Object.prototype.hasOwnProperty.call(n, e) || (0, s.default)(t) || (i[e] = t)
            });
            let l = new URLSearchParams(i).toString();
            return e.includes("?") ? `${e}&${l}` : `${e}?${l}`
        })(d, u)) : d
    }], 829150)
}, 436324, 531469, e => {
    "use strict";
    var t = e.i(14666),
        r = e.i(499531),
        n = e.i(749583),
        i = e.i(222061),
        a = e.i(829483),
        s = e.i(662380),
        l = e.i(179695),
        o = e.i(613821),
        c = e.i(466673),
        u = e.i(396241);
    e.i(203217);
    var d = e.i(569959),
        f = e.i(545487),
        m = e.i(239273),
        g = e.i(869324),
        p = e.i(497492);
    let h = ({
        form: e,
        isGrowForm: t,
        onSuccess: r,
        close: n,
        onShowSuccessMessage: i
    }) => {
        let a = (0, p.getFilteredQueryParams)(["sfcid", "sflsa", "sfit"], t),
            s = (0, p.getQueryParams)(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], !0),
            {
                setFormSubmitted: l
            } = (0, f.useResourcesDetailContext)(),
            [o] = (0, m.default)("ELOQUA");
        return (c, u, f) => {
            let m = t ? (({
                    emailConfirmation: e,
                    ghandler: t,
                    gcid: r,
                    growDivision: n,
                    growDepartment: i
                }) => ({
                    emailConfirmation: e,
                    ghandler: t,
                    gcid: r,
                    growDivision: n,
                    growDepartment: i,
                    grow: !0
                }))(e?.sfdcIntegration || {}) : e?.sfdcIntegration,
                h = e?.fields ? (0, p.getAlwaysSendOnData)(e.fields, u, f) : {};
            return c.elqCustomerGUID = o?.split("&")?.[0]?.split("GUID=")?.[1] || "", c = {
                ...c,
                ...m,
                ...h,
                ...s,
                ...a,
                ...e?.extraFields
            }, fetch("https://create.unity.com/e/f2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams((0, p.cleanData)(c)).toString()
            }).then(() => {
                (0, g.default)({
                    properties: {
                        form_action: "submitted",
                        form_id: c.elqFormID,
                        form_name: c.elqFormName,
                        form_customer_id: c.elqCustomerGUID
                    }
                }), l(!0), r?.(), e?.successMessage?.showSuccessMessage ? i?.() : n?.()
            }).catch(e => d.captureException(e))
        }
    };
    e.s(["useEloquaSubmit", 0, h], 531469), e.s(["FormBuilder", 0, ({
        form: e,
        close: d,
        isGrowForm: f
    }) => {
        let [m, g] = (0, r.useState)(!1), {
            handleSubmit: p,
            control: x,
            setValue: y,
            watch: v,
            getValues: b,
            formState: {
                isSubmitting: w
            }
        } = (0, c.useForm)({
            reValidateMode: "onChange",
            mode: "onChange"
        }), j = v(u.COUNTRY_CODE), k = h({
            form: e,
            isGrowForm: f,
            close: d,
            onShowSuccessMessage: () => g(!0)
        });
        return m && e?.successMessage?.showSuccessMessage ? (0, t.jsxs)("div", {
            className: "flex flex-col items-center justify-center p-8 text-center",
            children: [e.successMessage.title && (0, t.jsx)("h3", {
                className: "mb-4 text-xl font-semibold text-gray-900",
                children: e.successMessage.title
            }), e.successMessage.description && (0, t.jsx)("p", {
                className: "mb-6 text-gray-600",
                children: e.successMessage.description
            }), e?.successMessage?.closeButtonText && (0, t.jsx)(n.default, {
                onPress: d,
                className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                variant: "secondary",
                children: e?.successMessage?.closeButtonText
            })]
        }) : (0, t.jsxs)(o.default, {
            onSubmit: p(e => k(e, b, j)),
            children: [(0, t.jsx)("div", {
                className: "flex flex-col [&>*]:mt-3",
                children: e?.fields && e?.fields.map((e, r) => {
                    switch (e.formField) {
                        case "input":
                            return (0, t.jsx)(i.default, {
                                ...e,
                                control: x,
                                countryCode: j
                            }, r);
                        case "checkbox":
                            return (0, t.jsx)(a.default, {
                                countryCode: j,
                                ...e,
                                control: x
                            }, r);
                        case "dropdown":
                            return (0, t.jsx)(s.default, {
                                countryCode: j,
                                ...e,
                                control: x,
                                setValue: y
                            }, r);
                        case "richText":
                            return (0, t.jsx)(l.default, {
                                ...e,
                                control: x,
                                countryCode: j
                            }, r)
                    }
                })
            }), e?.actions && (0, t.jsxs)("div", {
                className: "mt-10 border-t border-t-gray-200 pt-6",
                children: [e?.actions?.primaryActionText && (0, t.jsx)(n.default, {
                    type: "submit",
                    rounded: !0,
                    hasArrow: !0,
                    disabled: w,
                    children: e?.actions?.primaryActionText
                }), e?.actions?.secondaryActionText && (0, t.jsx)(n.default, {
                    onPress: d,
                    className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                    variant: "secondary",
                    children: e?.actions?.secondaryActionText
                })]
            })]
        })
    }], 436324)
}, 115219, e => {
    "use strict";
    var t = e.i(14666),
        r = e.i(363737),
        n = e.i(436324),
        i = e.i(869324),
        a = e.i(537251);
    e.s(["applyFormOverrides", 0, function(e, t) {
        let r;
        if (!t || !e?.fields) return e;
        try {
            r = JSON.parse(t)
        } catch {
            return e
        }
        if (!r) return e;
        let n = [...e.fields];
        for (let e of Object.keys(r)) {
            let t = n.findIndex(t => t.formFieldId === e);
            if (t < 0) continue;
            let i = r[e];
            null != i.isRequired && (n[t] = {
                ...n[t],
                isRequired: i.isRequired
            }), i.isHidden && n.splice(t, 1)
        }
        return {
            ...e,
            fields: n
        }
    }, "trackFormOpen", 0, function(e) {
        (0, i.default)({
            properties: {
                form_action: "presented",
                form_id: e.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                form_name: e.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
            }
        })
    }, "useFormModal", 0, e => {
        let {
            extraFields: s
        } = (0, a.default)(), l = ({
            label: a,
            form: s
        }) => {
            let l = ((e, t) => {
                let r = e?.find(e => t.title === e?.form?.title)?.customSelections || "";
                try {
                    return JSON.parse(r)
                } catch (e) {
                    return null
                }
            })(e || [], s);
            if (l && s?.fields)
                for (let e of Object.keys(l)) {
                    let t = s.fields.findIndex(t => t.formFieldId === e);
                    if (t >= 0) {
                        let r = l[e];
                        null != r.isRequired && (s.fields[t].isRequired = l[e].isRequired), r.isHidden && s.fields.splice(t, 1)
                    }
                }
            return (0, t.jsx)(r.default, {
                actionLabel: a,
                onOpenChange: e => {
                    e && (0, i.default)({
                        properties: {
                            form_action: "presented",
                            form_id: s.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                            form_name: s.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                        }
                    })
                },
                children: e => (0, t.jsx)(r.default.Layout, {
                    modal: {
                        title: s.title,
                        description: s.description
                    },
                    children: s && (0, t.jsx)(n.FormBuilder, {
                        form: s,
                        close: e
                    })
                })
            })
        };
        return {
            renderModal: l,
            mapFormActions: e => e?.map(e => ({
                title: e.title,
                link: e.link ? {
                    href: e.link.linkReference?.href.current || "",
                    target: e.link.linkReference?.target || "_self"
                } : null,
                form: e.form ? {
                    form: e.form,
                    webinarFormParametersContent: e.webinarFormParametersContent,
                    extraFields: s,
                    renderModal: l
                } : null
            })),
            extraFields: s
        }
    }])
}, 459923, 201763, 570994, e => {
    "use strict";
    var t = e.i(14666),
        r = e.i(499531),
        n = e.i(74038),
        i = e.i(10747),
        a = e.i(722978),
        s = e.i(131581),
        l = e.i(124576);
    let o = ({
        keyFigures: e,
        nested: r = !1,
        theme: i = "light"
    }) => {
        let s = (0, a.clsx)("container col-span-12 pt-16 grid grid-cols-12 gap-2 ", {
            "py-16": !r
        });
        return (0, t.jsx)("div", {
            className: "dark" === i ? "bg-black text-white" : "",
            children: (0, t.jsx)("div", {
                className: s,
                children: e?.map((s, l) => {
                    let {
                        value: o,
                        label: c
                    } = s, u = (0, a.clsx)("col-span-12 flex rounded-md items-center gap-2 px-4 py-2 filter md:p-4 lg:col-span-4 xl:p-6", {
                        "backdrop-blur-lg": r && "dark" !== i,
                        "bg-gray-900 dark:bg-black": "dark" === i,
                        "bg-gray-100 dark:bg-gray-900 text-gray-800": !r && "dark" !== i,
                        "xl:col-span-3": e?.length === 4
                    });
                    return o?.type === "text" ? (0, t.jsxs)("div", {
                        className: u,
                        children: [(0, t.jsx)("div", {
                            className: "loco-text-heading-sm min-w-[30%] shrink-0 gap-10 pr-4 text-center",
                            children: o.text
                        }), (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: c
                        })]
                    }, l) : c && o?.type === "icon" && !o.url ? (0, t.jsx)("div", {
                        className: u,
                        children: (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: c
                        })
                    }, l) : o?.type === "icon" && o.url ? (0, t.jsxs)("div", {
                        className: u,
                        children: [(0, t.jsx)("div", {
                            className: "flex min-w-[30%] shrink-0 gap-10 text-center lg:justify-center",
                            children: (0, t.jsx)(n.default, {
                                src: o.url,
                                alt: o.description,
                                width: 40,
                                height: 40
                            })
                        }), (0, t.jsx)("div", {
                            className: "loco-text-body max-w-xs",
                            children: c
                        })]
                    }, l) : null
                })
            })
        })
    };
    e.s(["default", 0, o], 201763);
    var c = e.i(749583);
    let u = (0, i.default)(() => e.A(104688), {
            loadableGenerated: {
                modules: [425687]
            },
            ssr: !1
        }),
        d = ({
            eyebrow: e,
            title: i,
            titleSize: d = "medium",
            description: f,
            backgroundImage: m,
            actions: g = [],
            keyFigures: p,
            video: h,
            mention: x,
            fullScreen: y = !0
        }) => {
            let v = (0, r.useRef)(null),
                b = (0, s.useInView)(v, {
                    once: !0
                }),
                w = (0, l.useReducedMotion)(),
                [j, k] = (0, r.useState)(!1),
                L = (0, a.default)(`font-nohemi mt-24 my-4 ${"small"===d?"mb-6":"mb-8"}`, {
                    "loco-text-heading-xl": "medium" === d,
                    "loco-text-headline": "large" === d,
                    "loco-text-heading-lg": "small" === d
                }),
                M = (0, a.default)("object-cover transition-opacity duration-1000 opacity-100", {
                    "opacity-0": j
                });
            return (0, t.jsxs)("section", {
                ref: v,
                className: "dark relative",
                children: [m && (0, t.jsx)(n.default, {
                    src: m.src,
                    placeholder: "blur",
                    blurDataURL: m.placeholder,
                    fill: !0,
                    alt: "",
                    className: M,
                    sizes: "100vw"
                }), b && !w && h && (0, t.jsx)(u, {
                    url: h || "",
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
                }, "hero-video"), (0, t.jsx)("div", {
                    className: "absolute h-full w-full",
                    style: {
                        backgroundImage: y ? `
    linear-gradient(180deg, rgba(1, 1, 1, 0.00) 45.08%, rgba(1, 1, 1, 0.00) 49.56%, rgba(1, 1, 1, 0.01) 53.84%, rgba(1, 1, 1, 0.02) 57.92%, rgba(1, 1, 1, 0.04) 61.84%, rgba(1, 1, 1, 0.06) 65.62%, rgba(1, 1, 1, 0.09) 69.27%, rgba(1, 1, 1, 0.12) 72.82%, rgba(1, 1, 1, 0.16) 76.29%, rgba(1, 1, 1, 0.20) 79.7%, rgba(1, 1, 1, 0.24) 83.06%, rgba(1, 1, 1, 0.29) 86.41%, rgba(1, 1, 1, 0.34) 89.75%, rgba(1, 1, 1, 0.39) 93.12%, rgba(1, 1, 1, 0.44) 96.53%, rgba(1, 1, 1, 0.50) 100%),
    linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)` : ""
                    }
                }), (0, t.jsxs)("div", {
                    className: `relative container flex ${y&&"min-h-[calc(100vh-4rem)]"} flex-col py-8 text-white`,
                    children: [(0, t.jsx)("div", {
                        className: "flex grow flex-col justify-stretch",
                        children: (0, t.jsxs)("div", {
                            className: "flex h-full grow flex-col items-center justify-center text-center",
                            children: [e && (0, t.jsx)("div", {
                                className: "loco-caption-lg-semibold",
                                children: e
                            }), (0, t.jsx)("h1", {
                                className: L,
                                children: i
                            }), f && (0, t.jsx)("div", {
                                className: "loco-caption-sm-semibold mt-5",
                                children: f
                            }), g && (0, t.jsx)("div", {
                                className: "mt-6 flex flex-wrap items-center justify-center gap-4",
                                children: g.map((e, r) => {
                                    if (e.link) return (0, t.jsx)(c.default, {
                                        rounded: !0,
                                        hasArrow: !0,
                                        href: e.link.href,
                                        target: e.link.target,
                                        variant: 0 === r ? "primary" : "secondary",
                                        children: e.title
                                    }, `headliner-action-link-${e.title}-${r}`);
                                    if (e.form) {
                                        let n = {
                                            ...e.form.form,
                                            ...e.form.webinarFormParametersContent,
                                            extraFields: e.form.extraFields
                                        };
                                        return (0, t.jsx)("div", {
                                            children: e.form.renderModal({
                                                label: e.title,
                                                form: n
                                            })
                                        }, `headliner-action-modal-${e.title}-${r}`)
                                    }
                                    return null
                                })
                            })]
                        })
                    }), p && (0, t.jsx)(o, {
                        keyFigures: p,
                        nested: !0
                    })]
                }), x && (0, t.jsx)("div", {
                    className: "loco-text-body-sm z-10 w-full px-4 py-4 text-center opacity-70 md:absolute md:top-10 md:right-8 md:left-auto md:w-auto md:px-0 md:py-8",
                    children: x
                })]
            })
        };
    e.s(["default", 0, d], 570994);
    var f = e.i(115219);
    e.s(["default", 0, ({
        actions: e = [],
        brandfolder: n,
        mention: i,
        eyebrow: a,
        title: s,
        titleSize: l,
        description: o,
        image: c,
        keyFigures: u,
        isHidden: m
    }) => {
        let {
            mapFormActions: g
        } = (0, f.useFormModal)(e), p = g(e), h = (0, r.useMemo)(() => (u?.data ?? []).map(e => e?.value?.text ? {
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
        return (0, t.jsx)(t.Fragment, {
            children: !m && (0, t.jsx)(d, {
                actions: p,
                mention: i || "",
                eyebrow: a || "",
                title: s || "",
                titleSize: "small" === l ? "small" : "large" === l ? "large" : "medium",
                description: o || "",
                backgroundImage: {
                    src: c?.asset.url || "",
                    placeholder: c?.asset.metadata?.lqip || ""
                },
                keyFigures: h,
                video: n?.muxHLSURL || ""
            })
        })
    }], 459923)
}]);