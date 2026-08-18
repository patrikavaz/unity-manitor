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
        margin: l,
        amount: o,
        once: a = !1,
        initial: s = !1
    } = {}) {
        let [u, c] = (0, t.useState)(s);
        return (0, t.useEffect)(() => {
            if (!e.current || a && u) return;
            let t = {
                root: i && i.current || void 0,
                margin: l,
                amount: o
            };
            return function(e, t, {
                root: i,
                margin: l,
                amount: o = "some"
            } = {}) {
                let a = (0, r.resolveElements)(e),
                    s = new WeakMap,
                    u = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = s.get(e.target);
                            if (!!r !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let r = t(e.target, e);
                                    "function" == typeof r ? s.set(e.target, r) : u.unobserve(e.target)
                                } else "function" == typeof r && (r(e), s.delete(e.target))
                        })
                    }, {
                        root: i,
                        rootMargin: l,
                        threshold: "number" == typeof o ? o : n[o]
                    });
                return a.forEach(e => u.observe(e)), () => u.disconnect()
            }(e.current, () => (c(!0), a ? void 0 : () => c(!1)), t)
        }, [i, e, l, a, o]), u
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
        l = e.i(499531),
        o = e.i(120194),
        a = e.i(672357);

    function s(e, t) {
        let r, n = () => {
            let {
                currentTime: n
            } = t, i = (null === n ? 0 : n.value) / 100;
            r !== i && e(i), r = i
        };
        return a.frame.preUpdate(n, !0), () => (0, a.cancelFrame)(n)
    }

    function u(e) {
        return !("u" < typeof window) && (e ? (0, r.supportsViewTimeline)() : (0, r.supportsScrollTimeline)())
    }
    var c = e.i(270736),
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
        m = {
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
        let i = r[t],
            {
                length: l,
                position: o
            } = m[t],
            a = i.current,
            s = r.time;
        i.current = Math.abs(e[`scroll${o}`]), i.scrollLength = e[`scroll${l}`] - e[`client${l}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = (0, f.progress)(0, i.scrollLength, i.current);
        let u = n - s;
        i.velocity = u > 50 ? 0 : (0, d.velocityPerSecond)(i.current - a, u)
    }
    e.i(203217);
    var h = e.i(226056),
        y = e.i(973626),
        v = e.i(508983),
        x = e.i(335029);
    let C = {
        start: 0,
        center: .5,
        end: 1
    };

    function b(e, t, r = 0) {
        let n = 0;
        if (e in C && (e = C[e]), "string" == typeof e) {
            let t = parseFloat(e);
            e.endsWith("px") ? n = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? n = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = t / 100 * document.documentElement.clientHeight : e = t
        }
        return "number" == typeof e && (n = t * e), r + n
    }
    let k = [0, 0],
        w = [
            [0, 0],
            [1, 1]
        ],
        j = {
            x: 0,
            y: 0
        },
        I = new WeakMap,
        M = new WeakMap,
        E = new WeakMap,
        _ = new WeakMap,
        L = new WeakMap,
        A = e => e === document.scrollingElement ? window : e;

    function S(e, {
        container: t = document.scrollingElement,
        trackContentSize: r = !1,
        ...n
    } = {}) {
        if (!t) return o.noop;
        let i = E.get(t);
        i || (i = new Set, E.set(t, i));
        let l = function(e, t, r, n = {}) {
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
                            offset: n = w
                        } = r, {
                            target: i = e,
                            axis: l = "y"
                        } = r, o = "y" === l ? "height" : "width", a = i !== e ? function(e, t) {
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
                                let i = null,
                                    l = n.parentNode;
                                for (; !i;) "svg" === l.tagName && (i = l), l = n.parentNode;
                                n = i
                            } else break;
                            return r
                        }(i, e) : j, s = i === e ? {
                            width: e.scrollWidth,
                            height: e.scrollHeight
                        } : "getBBox" in i && "svg" !== i.tagName ? i.getBBox() : {
                            width: i.clientWidth,
                            height: i.clientHeight
                        }, u = {
                            width: e.clientWidth,
                            height: e.clientHeight
                        };
                        t[l].offset.length = 0;
                        let c = !t[l].interpolate,
                            f = n.length;
                        for (let e = 0; e < f; e++) {
                            let r = function(e, t, r, n) {
                                let i = Array.isArray(e) ? e : k,
                                    l = 0;
                                return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, C[e] ? e : "0"]), (l = b(i[0], r, n)) - b(i[1], t)
                            }(n[e], u[o], s[o], a[l]);
                            c || r === t[l].interpolatorOffsets[e] || (c = !0), t[l].offset[e] = r
                        }
                        c && (t[l].interpolate = (0, h.interpolate)(t[l].offset, (0, y.defaultOffset)(n), {
                            clamp: !1
                        }), t[l].interpolatorOffsets = [...t[l].offset]), t[l].progress = (0, v.clamp)(0, 1, t[l].interpolate(t[l].current))
                    }(e, r, n)
                },
                notify: () => t(r)
            }
        }(t, e, {
            time: 0,
            x: p(),
            y: p()
        }, n);
        if (i.add(l), !I.has(t)) {
            let e = () => {
                    for (let e of i) e.measure(a.frameData.timestamp);
                    a.frame.preUpdate(r)
                },
                r = () => {
                    for (let e of i) e.notify()
                },
                n = () => a.frame.read(e);
            I.set(t, n);
            let l = A(t);
            window.addEventListener("resize", n), t !== document.documentElement && M.set(t, (0, c.resize)(t, n)), l.addEventListener("scroll", n), n()
        }
        if (r && !L.has(t)) {
            let e = I.get(t),
                r = {
                    width: t.scrollWidth,
                    height: t.scrollHeight
                };
            _.set(t, r);
            let n = a.frame.read(() => {
                let n = t.scrollWidth,
                    i = t.scrollHeight;
                (r.width !== n || r.height !== i) && (e(), r.width = n, r.height = i)
            }, !0);
            L.set(t, n)
        }
        let s = I.get(t);
        return a.frame.read(s, !1, !0), () => {
            (0, a.cancelFrame)(s);
            let e = E.get(t);
            if (!e || (e.delete(l), e.size)) return;
            let r = I.get(t);
            I.delete(t), r && (A(t).removeEventListener("scroll", r), M.get(t)?.(), window.removeEventListener("resize", r));
            let n = L.get(t);
            n && ((0, a.cancelFrame)(n), L.delete(t)), _.delete(t)
        }
    }
    let T = [
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
            [w, "contain"]
        ],
        F = {
            start: 0,
            end: 1
        };

    function O(e) {
        if (!e) return {
            rangeStart: "contain 0%",
            rangeEnd: "contain 100%"
        };
        for (let [t, r] of T)
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
                                    let r = F[t[0]],
                                        n = F[t[1]];
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
    let P = new Map;

    function R(e) {
        let t = {
                value: 0
            },
            r = S(r => {
                t.value = 100 * r[e.axis].progress
            }, e);
        return {
            currentTime: t,
            cancel: r
        }
    }

    function V({
        source: e,
        container: t,
        ...r
    }) {
        let {
            axis: n
        } = r;
        e && (t = e);
        let i = P.get(t);
        i || (i = new Map, P.set(t, i));
        let l = r.target ?? "self",
            o = i.get(l);
        o || (o = {}, i.set(l, o));
        let a = n + (r.offset ?? []).join(",");
        return o[a] || (r.target && u(r.target) ? O(r.offset) ? o[a] = new ViewTimeline({
            subject: r.target,
            axis: n
        }) : o[a] = R({
            container: t,
            ...r
        }) : u() ? o[a] = new ScrollTimeline({
            source: t,
            axis: n
        }) : o[a] = R({
            container: t,
            ...r
        })), o[a]
    }

    function N(e, {
        axis: t = "y",
        container: r = document.scrollingElement,
        ...n
    } = {}) {
        let i, l, a;
        if (!r) return o.noop;
        let c = {
            axis: t,
            container: r,
            ...n
        };
        return "function" == typeof e ? function(e, t) {
            return 2 === e.length || t && (t.target || t.offset) ? S(r => {
                e(r[t.axis].progress, r)
            }, t) : s(e, V(t))
        }(e, c) : (i = V(c), l = c.target ? O(c.offset) : void 0, a = c.target ? u(c.target) && !!l : u(), e.attachTimeline({
            timeline: a ? i : void 0,
            ...l && a && {
                rangeStart: l.rangeStart,
                rangeEnd: l.rangeEnd
            },
            observe: e => (e.pause(), s(t => {
                e.time = e.iterationDuration * t
            }, i))
        }))
    }
    var Z = e.i(416007),
        $ = e.i(129766);
    let B = () => ({
            scrollX: (0, n.motionValue)(0),
            scrollY: (0, n.motionValue)(0),
            scrollXProgress: (0, n.motionValue)(0),
            scrollYProgress: (0, n.motionValue)(0)
        }),
        D = e => !!e && !e.current;

    function W(e, r, n, i) {
        return {
            factory: l => {
                let o, a = () => {
                    D(n) || D(i) ? t.microtask.read(a) : o = N(l, {
                        ...r,
                        axis: e,
                        container: n?.current || void 0,
                        target: i?.current || void 0
                    })
                };
                return t.microtask.read(a), () => {
                    (0, t.cancelMicrotask)(a), o?.()
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
        ...o
    } = {}) {
        var a;
        let s = (0, Z.useConstant)(B);
        a = o.offset, !("u" < typeof window) && (n ? (0, r.supportsViewTimeline)() && !!O(a) : (0, r.supportsScrollTimeline)()) && (s.scrollXProgress.accelerate = W("x", o, e, n), s.scrollYProgress.accelerate = W("y", o, e, n));
        let u = (0, l.useRef)(null),
            c = (0, l.useRef)(!1),
            f = (0, l.useCallback)(() => (u.current = N((e, {
                x: t,
                y: r
            }) => {
                s.scrollX.set(t.current), s.scrollXProgress.set(t.progress), s.scrollY.set(r.current), s.scrollYProgress.set(r.progress)
            }, {
                ...o,
                container: e?.current || void 0,
                target: n?.current || void 0
            }), () => {
                u.current?.()
            }), [e, n, JSON.stringify(o.offset)]);
        return (0, $.useIsomorphicLayoutEffect)(() => {
            if (c.current = !1, !(D(e) || D(n))) return f();
            c.current = !0
        }, [f]), (0, l.useEffect)(() => {
            let r;
            if (!c.current) return;
            let l = () => {
                let t = D(e),
                    l = D(n);
                (0, i.invariant)(!t, "Container ref is defined but not hydrated", "use-scroll-ref"), (0, i.invariant)(!l, "Target ref is defined but not hydrated", "use-scroll-ref"), t || l || (r = f())
            };
            return t.microtask.read(l), () => {
                (0, t.cancelMicrotask)(l), r?.()
            }
        }, [f]), s
    }], 417245);
    var U = e.i(481522);

    function q(e) {
        let t = (0, Z.useConstant)(() => (0, n.motionValue)(e)),
            {
                isStatic: r
            } = (0, l.useContext)(U.MotionConfigContext);
        if (r) {
            let [, r] = (0, l.useState)(e);
            (0, l.useEffect)(() => t.on("change", r), [])
        }
        return t
    }

    function z(e, t) {
        let r = q(t()),
            n = () => r.set(t());
        return n(), (0, $.useIsomorphicLayoutEffect)(() => {
            let t = () => a.frame.preRender(n, !1, !0),
                r = e.map(e => e.on("change", t));
            return () => {
                r.forEach(e => e()), (0, a.cancelFrame)(n)
            }
        }), r
    }
    e.s(["useMotionValue", 0, q], 843678);

    function H(e, t) {
        let r = (0, Z.useConstant)(() => []);
        return z(e, () => {
            r.length = 0;
            let n = e.length;
            for (let t = 0; t < n; t++) r[t] = e[t].get();
            return t(r)
        })
    }
    e.s(["useTransform", 0, function e(t, r, i, l) {
        if ("function" == typeof t) {
            let e;
            return n.collectMotionValues.current = [], t(), e = z(n.collectMotionValues.current, t), n.collectMotionValues.current = void 0, e
        }
        if (void 0 !== i && !Array.isArray(i) && "function" != typeof r) {
            var o = t,
                a = r,
                s = i,
                u = l;
            let n = (0, Z.useConstant)(() => Object.keys(s)),
                c = (0, Z.useConstant)(() => ({}));
            for (let t of n) c[t] = e(o, a, s[t], u);
            return c
        }
        let c = "function" == typeof r ? r : function(...e) {
                let t = !Array.isArray(e[0]),
                    r = t ? 0 : -1,
                    n = e[0 + r],
                    i = e[1 + r],
                    l = e[2 + r],
                    o = e[3 + r],
                    a = (0, h.interpolate)(i, l, o);
                return t ? a(n) : a
            }(r, i, l),
            f = Array.isArray(t) ? H(t, c) : H([t], ([e]) => c(e)),
            d = Array.isArray(t) ? void 0 : t.accelerate;
        return d && !d.isTransformed && "function" != typeof r && Array.isArray(i) && l?.clamp !== !1 && (f.accelerate = {
            ...d,
            times: r,
            keyframes: i,
            isTransformed: !0,
            ...l?.ease ? {
                ease: l.ease
            } : {}
        }), f
    }], 304776)
}, 805518, e => {
    "use strict";
    let t = e.i(747624).default;
    e.s(["default", 0, t])
}, 722990, e => {
    "use strict";
    var t = e.i(14666);

    function r(e) {
        return "span" === e._type && "text" in e && "string" == typeof e.text && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
    }

    function n(e) {
        return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
    }

    function i(e) {
        return n(e) && "listItem" in e && "string" == typeof e.listItem && (typeof e.level > "u" || "number" == typeof e.level)
    }

    function l(e) {
        return "@list" === e._type
    }

    function o(e) {
        return "@span" === e._type
    }

    function a(e) {
        return "@text" === e._type
    }
    let s = ["strong", "em", "code", "underline", "strike-through"];

    function u(e, t, n) {
        if (!r(e) || !e.marks || !e.marks.length) return [];
        let i = e.marks.slice(),
            l = {};
        return i.forEach(e => {
            l[e] = 1;
            for (let i = t + 1; i < n.length; i++) {
                let t = n[i];
                if (t && r(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) l[e]++;
                else break
            }
        }), i.sort((e, t) => (function(e, t, r) {
            let n = e[t],
                i = e[r];
            if (n !== i) return i - n;
            let l = s.indexOf(t),
                o = s.indexOf(r);
            return l !== o ? l - o : t.localeCompare(r)
        })(l, e, t))
    }

    function c(e, t, r) {
        return {
            _type: "@list",
            _key: `${e._key||`${t}`}-parent`,
            mode: r,
            level: e.level || 1,
            listItem: e.listItem,
            children: [e]
        }
    }

    function f(e, t) {
        let n = t.level || 1,
            i = t.listItem || "normal",
            o = "string" == typeof t.listItem;
        if (l(e) && (e.level || 1) === n && o && (e.listItem || "normal") === i) return e;
        if (!("children" in e)) return;
        let a = e.children[e.children.length - 1];
        return a && !r(a) ? f(a, t) : void 0
    }
    var d = e.i(499531);
    let p = {
            textDecoration: "underline"
        },
        m = (e, t) => `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
        g = e => m(`block type "${e}"`, "types");

    function h(e) {
        console.warn(e)
    }
    let y = {
            display: "none"
        },
        v = {
            types: {},
            block: {
                normal: ({
                    children: e
                }) => (0, t.jsx)("p", {
                    children: e
                }),
                blockquote: ({
                    children: e
                }) => (0, t.jsx)("blockquote", {
                    children: e
                }),
                h1: ({
                    children: e
                }) => (0, t.jsx)("h1", {
                    children: e
                }),
                h2: ({
                    children: e
                }) => (0, t.jsx)("h2", {
                    children: e
                }),
                h3: ({
                    children: e
                }) => (0, t.jsx)("h3", {
                    children: e
                }),
                h4: ({
                    children: e
                }) => (0, t.jsx)("h4", {
                    children: e
                }),
                h5: ({
                    children: e
                }) => (0, t.jsx)("h5", {
                    children: e
                }),
                h6: ({
                    children: e
                }) => (0, t.jsx)("h6", {
                    children: e
                })
            },
            marks: {
                em: ({
                    children: e
                }) => (0, t.jsx)("em", {
                    children: e
                }),
                strong: ({
                    children: e
                }) => (0, t.jsx)("strong", {
                    children: e
                }),
                code: ({
                    children: e
                }) => (0, t.jsx)("code", {
                    children: e
                }),
                underline: ({
                    children: e
                }) => (0, t.jsx)("span", {
                    style: p,
                    children: e
                }),
                "strike-through": ({
                    children: e
                }) => (0, t.jsx)("del", {
                    children: e
                }),
                link: ({
                    children: e,
                    value: r
                }) => (0, t.jsx)("a", {
                    href: null == r ? void 0 : r.href,
                    children: e
                })
            },
            list: {
                number: ({
                    children: e
                }) => (0, t.jsx)("ol", {
                    children: e
                }),
                bullet: ({
                    children: e
                }) => (0, t.jsx)("ul", {
                    children: e
                })
            },
            listItem: ({
                children: e
            }) => (0, t.jsx)("li", {
                children: e
            }),
            hardBreak: () => (0, t.jsx)("br", {}),
            unknownType: ({
                value: e,
                isInline: r
            }) => {
                let n = g(e._type);
                return r ? (0, t.jsx)("span", {
                    style: y,
                    children: n
                }) : (0, t.jsx)("div", {
                    style: y,
                    children: n
                })
            },
            unknownMark: ({
                markType: e,
                children: r
            }) => (0, t.jsx)("span", {
                className: `unknown__pt__mark__${e}`,
                children: r
            }),
            unknownList: ({
                children: e
            }) => (0, t.jsx)("ul", {
                children: e
            }),
            unknownListItem: ({
                children: e
            }) => (0, t.jsx)("li", {
                children: e
            }),
            unknownBlockStyle: ({
                children: e
            }) => (0, t.jsx)("p", {
                children: e
            })
        };

    function x(e, t, r) {
        let n = t[r],
            i = e[r];
        return "function" == typeof n || n && "function" == typeof i ? n : n ? {
            ...i,
            ...n
        } : i
    }

    function C(e) {
        let {
            node: t,
            index: n,
            isInline: i,
            renderNode: l
        } = e, o = (function(e) {
            var t;
            let {
                children: n
            } = e, i = e.markDefs ?? [];
            if (!n || !n.length) return [];
            let l = n.map(u),
                o = {
                    _type: "@span",
                    children: [],
                    markType: "<unknown>"
                },
                a = [o];
            for (let e = 0; e < n.length; e++) {
                let o = n[e];
                if (!o) continue;
                let s = l[e] || [],
                    u = 1;
                if (a.length > 1)
                    for (; u < a.length; u++) {
                        let e = (null == (t = a[u]) ? void 0 : t.markKey) || "",
                            r = s.indexOf(e);
                        if (-1 === r) break;
                        s.splice(r, 1)
                    }
                let c = (a = a.slice(0, u))[a.length - 1];
                if (c) {
                    for (let e of s) {
                        let t = null == i ? void 0 : i.find(t => t._key === e),
                            r = t ? t._type : e,
                            n = {
                                _type: "@span",
                                _key: o._key,
                                children: [],
                                markDef: t,
                                markType: r,
                                markKey: e
                            };
                        c.children.push(n), a.push(n), c = n
                    }
                    if (r(o)) {
                        let e = o.text.split(`
`);
                        for (let t = e.length; t-- > 1;) e.splice(t, 0, `
`);
                        c.children = c.children.concat(e.map(e => ({
                            _type: "@text",
                            text: e
                        })))
                    } else c.children = c.children.concat(o)
                }
            }
            return o.children
        })(t).map((e, t) => l({
            node: e,
            isInline: !0,
            index: t,
            renderNode: l
        }));
        return {
            _key: t._key || `block-${n}`,
            children: o,
            index: n,
            isInline: i,
            node: t
        }
    }

    function b() {}
    e.s(["PortableText", 0, function({
        value: e,
        components: r,
        listNestingMode: s,
        onMissingComponent: u = h
    }) {
        let p = u || b,
            y = function(e, t) {
                let r, n = [];
                for (let a = 0; a < e.length; a++) {
                    let s = e[a];
                    if (s) {
                        var l, o;
                        if (!i(s)) {
                            n.push(s), r = void 0;
                            continue
                        }
                        if (!r) {
                            r = c(s, a, t), n.push(r);
                            continue
                        }
                        if (l = s, o = r, (l.level || 1) === o.level && l.listItem === o.listItem) {
                            r.children.push(s);
                            continue
                        }
                        if ((s.level || 1) > r.level) {
                            let e = c(s, a, t);
                            if ("html" === t) {
                                let t = r.children[r.children.length - 1],
                                    n = {
                                        ...t,
                                        children: [...t.children, e]
                                    };
                                r.children[r.children.length - 1] = n
                            } else r.children.push(e);
                            r = e;
                            continue
                        }
                        if ((s.level || 1) < r.level) {
                            let e = n[n.length - 1],
                                i = e && f(e, s);
                            if (i) {
                                (r = i).children.push(s);
                                continue
                            }
                            r = c(s, a, t), n.push(r);
                            continue
                        }
                        if (s.listItem !== r.listItem) {
                            let e = n[n.length - 1],
                                i = e && f(e, {
                                    level: s.level || 1
                                });
                            if (i && i.listItem === s.listItem) {
                                (r = i).children.push(s);
                                continue
                            }
                            r = c(s, a, t), n.push(r);
                            continue
                        }
                        console.warn("Unknown state encountered for block", s), n.push(s)
                    }
                }
                return n
            }(Array.isArray(e) ? e : [e], s || "html"),
            k = (0, d.useMemo)(() => r ? function(e, t) {
                let {
                    block: r,
                    list: n,
                    listItem: i,
                    marks: l,
                    types: o,
                    ...a
                } = t;
                return {
                    ...e,
                    block: x(e, t, "block"),
                    list: x(e, t, "list"),
                    listItem: x(e, t, "listItem"),
                    marks: x(e, t, "marks"),
                    types: x(e, t, "types"),
                    ...a
                }
            }(v, r) : v, [r]),
            w = (0, d.useMemo)(() => {
                var e, r;
                return e = k, r = p,
                    function s(u) {
                        var c, f, d, p, h, y, v, x;
                        let b, k, {
                                node: w,
                                index: j,
                                isInline: I
                            } = u,
                            M = w._key || `node-${j}`;
                        return l(w) ? function(n, i, l) {
                            let o = n.children.map((e, t) => s({
                                    node: e._key ? e : {
                                        ...e,
                                        _key: `li-${i}-${t}`
                                    },
                                    index: t,
                                    isInline: !1
                                })),
                                a = e.list,
                                u = ("function" == typeof a ? a : a[n.listItem]) || e.unknownList;
                            if (u === e.unknownList) {
                                let e = n.listItem || "bullet";
                                r(m(`list style "${e}"`, "list"), {
                                    nodeType: "listStyle",
                                    type: e
                                })
                            }
                            return (0, t.jsx)(u, {
                                value: n,
                                index: i,
                                isInline: !1,
                                renderNode: s,
                                children: o
                            }, l)
                        }(w, j, M) : i(w) ? function(n, i, l) {
                            let o = C({
                                    node: n,
                                    index: i,
                                    isInline: !1,
                                    renderNode: s
                                }),
                                a = e.listItem,
                                u = ("function" == typeof a ? a : a[n.listItem]) || e.unknownListItem;
                            if (u === e.unknownListItem) {
                                let e = n.listItem || "bullet";
                                r(m(`list item style "${e}"`, "listItem"), {
                                    type: e,
                                    nodeType: "listItemStyle"
                                })
                            }
                            let c = o.children;
                            if (n.style && "normal" !== n.style) {
                                let {
                                    listItem: e,
                                    ...t
                                } = n;
                                c = s({
                                    node: t,
                                    index: i,
                                    isInline: !1
                                })
                            }
                            return (0, t.jsx)(u, {
                                value: n,
                                index: i,
                                isInline: !1,
                                renderNode: s,
                                children: c
                            }, l)
                        }(w, j, M) : o(w) ? function(n, i) {
                            let {
                                markDef: l,
                                markType: u,
                                markKey: c
                            } = n, f = e.marks[u] || e.unknownMark, d = n.children.map((e, t) => s({
                                node: e,
                                index: t,
                                isInline: !0
                            }));
                            return f === e.unknownMark && r(m(`mark type "${u}"`, "marks"), {
                                nodeType: "mark",
                                type: u
                            }), (0, t.jsx)(f, {
                                text: function e(t) {
                                    let r = "";
                                    return t.children.forEach(t => {
                                        a(t) ? r += t.text : o(t) && (r += e(t))
                                    }), r
                                }(n),
                                value: l,
                                markType: u,
                                markKey: c,
                                renderNode: s,
                                children: d
                            }, i)
                        }(w, M) : w._type in e.types ? (c = w, f = j, d = M, p = I, (b = e.types[c._type]) ? (0, t.jsx)(b, {
                            value: c,
                            isInline: p,
                            index: f,
                            renderNode: s
                        }, d) : null) : n(w) ? function(n, i, l, o) {
                            let {
                                _key: a,
                                ...u
                            } = C({
                                node: n,
                                index: i,
                                isInline: o,
                                renderNode: s
                            }), c = u.node.style || "normal", f = ("function" == typeof e.block ? e.block : e.block[c]) || e.unknownBlockStyle;
                            return f === e.unknownBlockStyle && r(m(`block style "${c}"`, "block"), {
                                nodeType: "blockStyle",
                                type: c
                            }), (0, t.jsx)(f, {
                                ...u,
                                value: u.node,
                                renderNode: s
                            }, l)
                        }(w, j, M, I) : a(w) ? function(r, n) {
                            if (r.text === `
`) {
                                let r = e.hardBreak;
                                return r ? (0, t.jsx)(r, {}, n) : `
`
                            }
                            return r.text
                        }(w, M) : (h = w, y = j, v = M, x = I, r(g(h._type), {
                            nodeType: "block",
                            type: h._type
                        }), k = e.unknownType, (0, t.jsx)(k, {
                            value: h,
                            isInline: x,
                            index: y,
                            renderNode: s
                        }, v))
                    }
            }, [k, p]),
            j = y.map((e, t) => w({
                node: e,
                index: t,
                isInline: !1,
                renderNode: w
            }));
        return (0, t.jsx)(t.Fragment, {
            children: j
        })
    }], 722990)
}, 960851, e => {
    "use strict";
    var t = e.i(499531),
        r = e.i(848662);
    let n = new Map([
            ["bold", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M108,84a16,16,0,1,1,16,16A16,16,0,0,1,108,84Zm128,44A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Zm-72,36.68V132a20,20,0,0,0-20-20,12,12,0,0,0-4,23.32V168a20,20,0,0,0,20,20,12,12,0,0,0,4-23.32Z"
            }))],
            ["duotone", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",
                opacity: "0.2"
            }), t.createElement("path", {
                d: "M144,176a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176Zm88-48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128ZM124,96a12,12,0,1,0-12-12A12,12,0,0,0,124,96Z"
            }))],
            ["fill", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"
            }))],
            ["light", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M142,176a6,6,0,0,1-6,6,14,14,0,0,1-14-14V128a2,2,0,0,0-2-2,6,6,0,0,1,0-12,14,14,0,0,1,14,14v40a2,2,0,0,0,2,2A6,6,0,0,1,142,176ZM124,94a10,10,0,1,0-10-10A10,10,0,0,0,124,94Zm106,34A102,102,0,1,1,128,26,102.12,102.12,0,0,1,230,128Zm-12,0a90,90,0,1,0-90,90A90.1,90.1,0,0,0,218,128Z"
            }))],
            ["regular", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"
            }))],
            ["thin", t.createElement(t.Fragment, null, t.createElement("path", {
                d: "M140,176a4,4,0,0,1-4,4,12,12,0,0,1-12-12V128a4,4,0,0,0-4-4,4,4,0,0,1,0-8,12,12,0,0,1,12,12v40a4,4,0,0,0,4,4A4,4,0,0,1,140,176ZM124,92a8,8,0,1,0-8-8A8,8,0,0,0,124,92Zm104,36A100,100,0,1,1,128,28,100.11,100.11,0,0,1,228,128Zm-8,0a92,92,0,1,0-92,92A92.1,92.1,0,0,0,220,128Z"
            }))]
        ]),
        i = t.forwardRef((e, i) => t.createElement(r.default, {
            ref: i,
            ...e,
            weights: n
        }));
    i.displayName = "InfoIcon", e.s(["Info", 0, i, "InfoIcon", 0, i], 960851)
}, 505918, (e, t, r) => {
    t.exports = e.g && e.g.Object === Object && e.g
}, 78974, (e, t, r) => {
    var n = e.r(505918),
        i = "object" == typeof self && self && self.Object === Object && self;
    t.exports = n || i || Function("return this")()
}, 328042, (e, t, r) => {
    t.exports = e.r(78974).Symbol
}, 684435, (e, t, r) => {
    var n = e.r(328042),
        i = Object.prototype,
        l = i.hasOwnProperty,
        o = i.toString,
        a = n ? n.toStringTag : void 0;
    t.exports = function(e) {
        var t = l.call(e, a),
            r = e[a];
        try {
            e[a] = void 0;
            var n = !0
        } catch (e) {}
        var i = o.call(e);
        return n && (t ? e[a] = r : delete e[a]), i
    }
}, 933680, (e, t, r) => {
    var n = Object.prototype.toString;
    t.exports = function(e) {
        return n.call(e)
    }
}, 416907, (e, t, r) => {
    var n = e.r(328042),
        i = e.r(684435),
        l = e.r(933680),
        o = n ? n.toStringTag : void 0;
    t.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? i(e) : l(e)
    }
}, 394022, (e, t, r) => {
    t.exports = function(e) {
        return null != e && "object" == typeof e
    }
}, 778116, (e, t, r) => {
    t.exports = Array.isArray
}, 692558, (e, t, r) => {
    var n = e.r(416907),
        i = e.r(394022);
    t.exports = function(e) {
        return "symbol" == typeof e || i(e) && "[object Symbol]" == n(e)
    }
}, 239145, (e, t, r) => {
    t.exports = function(e, t) {
        for (var r = -1, n = null == e ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
        return i
    }
}, 873021, (e, t, r) => {
    var n = e.r(328042),
        i = e.r(239145),
        l = e.r(778116),
        o = e.r(692558),
        a = 1 / 0,
        s = n ? n.prototype : void 0,
        u = s ? s.toString : void 0;
    t.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (l(t)) return i(t, e) + "";
        if (o(t)) return u ? u.call(t) : "";
        var r = t + "";
        return "0" == r && 1 / t == -a ? "-0" : r
    }
}, 553050, (e, t, r) => {
    var n = e.r(873021);
    t.exports = function(e) {
        return null == e ? "" : n(e)
    }
}, 878524, (e, t, r) => {
    t.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, 462931, (e, t, r) => {
    var n = e.r(416907),
        i = e.r(878524);
    t.exports = function(e) {
        if (!i(e)) return !1;
        var t = n(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
}, 118309, (e, t, r) => {
    t.exports = e.r(78974)["__core-js_shared__"]
}, 799822, (e, t, r) => {
    var n, i = e.r(118309),
        l = (n = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "";
    t.exports = function(e) {
        return !!l && l in e
    }
}, 908829, (e, t, r) => {
    var n = Function.prototype.toString;
    t.exports = function(e) {
        if (null != e) {
            try {
                return n.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
}, 143245, (e, t, r) => {
    var n = e.r(462931),
        i = e.r(799822),
        l = e.r(878524),
        o = e.r(908829),
        a = /^\[object .+?Constructor\]$/,
        s = Object.prototype,
        u = Function.prototype.toString,
        c = s.hasOwnProperty,
        f = RegExp("^" + u.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    t.exports = function(e) {
        return !(!l(e) || i(e)) && (n(e) ? f : a).test(o(e))
    }
}, 92117, (e, t, r) => {
    t.exports = function(e, t) {
        return null == e ? void 0 : e[t]
    }
}, 581511, (e, t, r) => {
    var n = e.r(143245),
        i = e.r(92117);
    t.exports = function(e, t) {
        var r = i(e, t);
        return n(r) ? r : void 0
    }
}, 475200, e => {
    "use strict";
    var t = e.i(499531);
    e.s(["default", 0, (e = 768) => {
        let [r, n] = (0, t.useState)(window.innerWidth <= e);
        return (0, t.useEffect)(() => {
            let t = () => {
                n(window.innerWidth <= e)
            };
            return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
        }, []), r
    }])
}, 239273, e => {
    "use strict";
    var t = e.i(499531);
    e.s(["default", 0, e => {
        let [r, n] = (0, t.useState)("");
        return (0, t.useEffect)(() => {
            n(document.cookie)
        }, []), [(0, t.useMemo)(() => r?.split("; ")?.find(t => t.includes(e)), [r, e])]
    }])
}, 343346, (e, t, r) => {
    t.exports = function(e, t) {
        return e === t || e != e && t != t
    }
}, 649051, e => {
    "use strict";
    e.s(["storageAvailable", 0, e => {
        let t;
        try {
            t = window[e];
            let r = "__storage_test__";
            return t.setItem(r, r), t.removeItem(r), !0
        } catch (e) {
            return e instanceof DOMException && "QuotaExceededError" === e.name && t && 0 !== t.length
        }
    }])
}, 976989, e => {
    "use strict";
    var t = e.i(14666);
    e.s(["default", 0, ({
        className: e,
        width: r = 18,
        height: n = 18
    }) => (0, t.jsx)("svg", {
        className: e,
        width: r,
        height: n,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: (0, t.jsx)("path", {
            d: "M13.8001 10.7556L8.33444 1.26375C8.19785 1.0312 8.00287 0.838382 7.76881 0.704408C7.53476 0.570434 7.26975 0.499954 7.00006 0.499954C6.73037 0.499954 6.46536 0.570434 6.23131 0.704408C5.99725 0.838382 5.80227 1.0312 5.66569 1.26375L0.20006 10.7556C0.0686451 10.9805 -0.000610352 11.2364 -0.000610352 11.4969C-0.000610352 11.7574 0.0686451 12.0132 0.20006 12.2381C0.334892 12.4721 0.529541 12.6659 0.764036 12.7998C0.99853 12.9337 1.26442 13.0028 1.53444 13H12.4657C12.7355 13.0026 13.0011 12.9334 13.2354 12.7995C13.4696 12.6656 13.6641 12.4719 13.7988 12.2381C13.9304 12.0133 13.9999 11.7575 14.0001 11.497C14.0003 11.2365 13.9313 10.9807 13.8001 10.7556ZM6.50006 5.5C6.50006 5.36739 6.55274 5.24021 6.64651 5.14644C6.74027 5.05267 6.86745 5 7.00006 5C7.13267 5 7.25985 5.05267 7.35361 5.14644C7.44738 5.24021 7.50006 5.36739 7.50006 5.5V8C7.50006 8.1326 7.44738 8.25978 7.35361 8.35355C7.25985 8.44732 7.13267 8.5 7.00006 8.5C6.86745 8.5 6.74027 8.44732 6.64651 8.35355C6.55274 8.25978 6.50006 8.1326 6.50006 8V5.5ZM7.00006 11C6.85172 11 6.70672 10.956 6.58338 10.8736C6.46005 10.7912 6.36392 10.6741 6.30715 10.537C6.25038 10.4 6.23553 10.2492 6.26447 10.1037C6.29341 9.95819 6.36484 9.82455 6.46973 9.71967C6.57462 9.61478 6.70826 9.54335 6.85374 9.51441C6.99923 9.48547 7.15003 9.50032 7.28707 9.55709C7.42412 9.61385 7.54125 9.70998 7.62366 9.83332C7.70607 9.95665 7.75006 10.1017 7.75006 10.25C7.75006 10.4489 7.67104 10.6397 7.53039 10.7803C7.38974 10.921 7.19897 11 7.00006 11Z",
            fill: "currentColor"
        })
    })])
}, 620174, 117696, 441737, e => {
    "use strict";
    var t = e.i(14666),
        r = e.i(499531),
        n = e.i(722978),
        i = e.i(679933),
        l = e.i(776050),
        o = e.i(429305),
        a = e.i(260840),
        s = e.i(513485),
        u = e.i(869049),
        c = e.i(860700),
        f = e.i(803258),
        d = e.i(251635);

    function p(e, t) {
        let {
            inputElementType: n = "input",
            isDisabled: p = !1,
            isRequired: m = !1,
            isReadOnly: g = !1,
            type: h = "text",
            validationBehavior: y = "aria"
        } = e, [v, x] = (0, f.useControlledState)(e.value, e.defaultValue || "", e.onChange), {
            focusableProps: C
        } = (0, s.useFocusable)(e, t), b = (0, d.useFormValidationState)({
            ...e,
            value: v
        }), {
            isInvalid: k,
            validationErrors: w,
            validationDetails: j
        } = b.displayValidation, {
            labelProps: I,
            fieldProps: M,
            descriptionProps: E,
            errorMessageProps: _
        } = (0, a.useField)({
            ...e,
            isInvalid: k,
            errorMessage: e.errorMessage || w
        }), L = (0, i.filterDOMProps)(e, {
            labelable: !0
        }), A = {
            type: h,
            pattern: e.pattern
        }, [S] = (0, r.useState)(v);
        return (0, u.useFormReset)(t, e.defaultValue ?? S, x), (0, c.useFormValidation)(e, b, t), {
            labelProps: I,
            inputProps: (0, o.mergeProps)(L, "input" === n ? A : void 0, {
                disabled: p,
                readOnly: g,
                required: m && "native" === y,
                "aria-required": m && "aria" === y || void 0,
                "aria-invalid": k || void 0,
                "aria-errormessage": e["aria-errormessage"],
                "aria-activedescendant": e["aria-activedescendant"],
                "aria-autocomplete": e["aria-autocomplete"],
                "aria-haspopup": e["aria-haspopup"],
                "aria-controls": e["aria-controls"],
                value: v,
                onChange: e => x((0, l.getEventTarget)(e).value),
                autoComplete: e.autoComplete,
                autoCapitalize: e.autoCapitalize,
                maxLength: e.maxLength,
                minLength: e.minLength,
                name: e.name,
                form: e.form,
                placeholder: e.placeholder,
                inputMode: e.inputMode,
                autoCorrect: e.autoCorrect,
                spellCheck: e.spellCheck,
                [parseInt(r.default.version, 10) >= 17 ? "enterKeyHint" : "enterkeyhint"]: e.enterKeyHint,
                onCopy: e.onCopy,
                onCut: e.onCut,
                onPaste: e.onPaste,
                onCompositionEnd: e.onCompositionEnd,
                onCompositionStart: e.onCompositionStart,
                onCompositionUpdate: e.onCompositionUpdate,
                onSelect: e.onSelect,
                onBeforeInput: e.onBeforeInput,
                onInput: e.onInput,
                ...C,
                ...M
            }),
            descriptionProps: E,
            errorMessageProps: _,
            isInvalid: k,
            validationErrors: w,
            validationDetails: j
        }
    }
    e.s(["useTextField", 0, p], 117696);
    var m = e.i(838031);
    let g = r.default.forwardRef((e, r) => {
        let {
            disabled: i,
            hasError: l,
            inputSize: o,
            hasWarning: a,
            isTextArea: s
        } = e, u = (0, m.useObjectRef)(r), {
            inputProps: c
        } = p({
            ...e,
            autoCapitalize: "none",
            inputElementType: "input"
        }, u), f = (0, n.default)("rounded-lg w-full border border-gray-200 outline-blue focus:ring-3 focus:ring-blue-dark focus:outline-blue focus:outline-offset-0 transition-all ease-out duration-400", "text-gray-900 dark:text-gray-400 dark:text-white", "placeholder-gray-600 dark:placeholder-gray-400", {
            "h-10 py-2.5 px-2": "small" === o,
            "h-12 py-3.5 px-3": "medium" === o,
            "h-14 py-5 px-4": "large" === o
        }, {
            "bg-gray-100 dark:bg-gray-800 cursor-not-allowed": i,
            "border-yellow-500 dark:border-yellow-500 border-2": a,
            "border-red-500 dark:border-red-500 border-2": l
        }, {
            "bg-gray-50 dark:bg-gray-900": !i,
            "border-gray-400 hover:border-gray-900 dark:border-gray-500 dark:hover:border-white": !l && !a
        }, {
            "min-h-[6rem]": s
        });
        return s ? (0, t.jsx)("textarea", {
            ...c,
            "aria-labelledby": e["aria-labelledby"] || c["aria-labelledby"],
            ref: u,
            className: f,
            disabled: i
        }) : (0, t.jsx)("input", {
            ...c,
            "aria-labelledby": e["aria-labelledby"] || c["aria-labelledby"],
            ref: u,
            className: f,
            disabled: i
        })
    });
    g.displayName = "InputField";
    var h = e.i(976989);
    let y = ({
            className: e,
            width: r = 18,
            height: n = 18
        }) => (0, t.jsx)("svg", {
            className: e,
            width: r,
            height: n,
            viewBox: "0 0 14 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M7 0.5C5.71442 0.5 4.45772 0.881218 3.3888 1.59545C2.31988 2.30968 1.48676 3.32484 0.994786 4.51256C0.502816 5.70028 0.374095 7.00721 0.624899 8.26809C0.875703 9.52896 1.49477 10.6872 2.40381 11.5962C3.31285 12.5052 4.47104 13.1243 5.73192 13.3751C6.99279 13.6259 8.29973 13.4972 9.48744 13.0052C10.6752 12.5132 11.6903 11.6801 12.4046 10.6112C13.1188 9.54229 13.5 8.28558 13.5 7C13.4982 5.27665 12.8128 3.62441 11.5942 2.40582C10.3756 1.18722 8.72335 0.50182 7 0.5ZM9.35375 8.64625C9.40021 8.69271 9.43706 8.74786 9.4622 8.80855C9.48734 8.86925 9.50028 8.9343 9.50028 9C9.50028 9.0657 9.48734 9.13075 9.4622 9.19145C9.43706 9.25214 9.40021 9.30729 9.35375 9.35375C9.3073 9.40021 9.25215 9.43705 9.19145 9.4622C9.13075 9.48734 9.0657 9.50028 9 9.50028C8.93431 9.50028 8.86925 9.48734 8.80855 9.4622C8.74786 9.43705 8.69271 9.40021 8.64625 9.35375L7 7.70687L5.35375 9.35375C5.3073 9.40021 5.25215 9.43705 5.19145 9.4622C5.13075 9.48734 5.0657 9.50028 5 9.50028C4.93431 9.50028 4.86925 9.48734 4.80855 9.4622C4.74786 9.43705 4.69271 9.40021 4.64625 9.35375C4.5998 9.30729 4.56295 9.25214 4.53781 9.19145C4.51266 9.13075 4.49972 9.0657 4.49972 9C4.49972 8.9343 4.51266 8.86925 4.53781 8.80855C4.56295 8.74786 4.5998 8.69271 4.64625 8.64625L6.29313 7L4.64625 5.35375C4.55243 5.25993 4.49972 5.13268 4.49972 5C4.49972 4.86732 4.55243 4.74007 4.64625 4.64625C4.74007 4.55243 4.86732 4.49972 5 4.49972C5.13268 4.49972 5.25993 4.55243 5.35375 4.64625L7 6.29313L8.64625 4.64625C8.69271 4.59979 8.74786 4.56294 8.80855 4.5378C8.86925 4.51266 8.93431 4.49972 9 4.49972C9.0657 4.49972 9.13075 4.51266 9.19145 4.5378C9.25215 4.56294 9.3073 4.59979 9.35375 4.64625C9.40021 4.6927 9.43706 4.74786 9.4622 4.80855C9.48734 4.86925 9.50028 4.9343 9.50028 5C9.50028 5.0657 9.48734 5.13075 9.4622 5.19145C9.43706 5.25214 9.40021 5.3073 9.35375 5.35375L7.70688 7L9.35375 8.64625Z",
                fill: "currentColor"
            })
        }),
        v = ({
            className: e,
            width: r = 18,
            height: n = 18
        }) => (0, t.jsx)("svg", {
            className: e,
            width: r,
            height: n,
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: (0, t.jsx)("path", {
                d: "M8 1.5C6.71442 1.5 5.45772 1.88122 4.3888 2.59545C3.31988 3.30968 2.48676 4.32484 1.99479 5.51256C1.50282 6.70028 1.37409 8.00721 1.6249 9.26809C1.8757 10.529 2.49477 11.6872 3.40381 12.5962C4.31285 13.5052 5.47104 14.1243 6.73192 14.3751C7.99279 14.6259 9.29973 14.4972 10.4874 14.0052C11.6752 13.5132 12.6903 12.6801 13.4046 11.6112C14.1188 10.5423 14.5 9.28558 14.5 8C14.4982 6.27665 13.8128 4.62441 12.5942 3.40582C11.3756 2.18722 9.72335 1.50182 8 1.5ZM7.75 4.5C7.89834 4.5 8.04334 4.54399 8.16668 4.6264C8.29002 4.70881 8.38615 4.82594 8.44291 4.96299C8.49968 5.10003 8.51453 5.25083 8.48559 5.39632C8.45665 5.5418 8.38522 5.67544 8.28033 5.78033C8.17544 5.88522 8.04181 5.95665 7.89632 5.98559C7.75083 6.01453 7.60003 5.99968 7.46299 5.94291C7.32595 5.88614 7.20881 5.79001 7.1264 5.66668C7.04399 5.54334 7 5.39834 7 5.25C7 5.05109 7.07902 4.86032 7.21967 4.71967C7.36032 4.57902 7.55109 4.5 7.75 4.5ZM8.5 11.5C8.23479 11.5 7.98043 11.3946 7.7929 11.2071C7.60536 11.0196 7.5 10.7652 7.5 10.5V8C7.36739 8 7.24022 7.94732 7.14645 7.85355C7.05268 7.75979 7 7.63261 7 7.5C7 7.36739 7.05268 7.24021 7.14645 7.14645C7.24022 7.05268 7.36739 7 7.5 7C7.76522 7 8.01957 7.10536 8.20711 7.29289C8.39465 7.48043 8.5 7.73478 8.5 8V10.5C8.63261 10.5 8.75979 10.5527 8.85356 10.6464C8.94732 10.7402 9 10.8674 9 11C9 11.1326 8.94732 11.2598 8.85356 11.3536C8.75979 11.4473 8.63261 11.5 8.5 11.5Z",
                fill: "currentColor"
            })
        }),
        x = e => {
            let {
                helperText: n,
                hasError: i,
                hasWarning: l
            } = e, {
                descriptionProps: o
            } = p(e, (0, r.useRef)(null));
            return (0, t.jsxs)("div", {
                ...o,
                className: "align-items flex pt-2 text-xs",
                children: [i && (0, t.jsx)(y, {
                    className: "inline pr-1 text-red-600"
                }), l && (0, t.jsx)(h.default, {
                    className: "inline pr-1 text-yellow-600"
                }), !l && !i && (0, t.jsx)(v, {
                    className: "inline pr-1 text-gray-600 dark:text-gray-100"
                }), n]
            })
        };
    e.s(["default", 0, x], 441737);
    let C = ({
            className: e,
            ...r
        }) => (0, t.jsxs)("label", {
            id: r.id,
            htmlFor: r.for,
            className: e ?? "flex justify-between pb-2",
            children: [r.label, r.isRequired && (0, t.jsx)("span", {
                className: "text-sm text-gray-400",
                children: r.requiredText
            })]
        }),
        b = (0, r.forwardRef)(({
            helperText: e,
            ...n
        }, i) => {
            let l = (0, r.useId)();
            return (0, t.jsxs)("div", {
                ref: i,
                children: [(0, t.jsx)(C, {
                    ...n,
                    id: l
                }), (0, t.jsx)(g, {
                    ...n,
                    "aria-labelledby": l
                }), e && (0, t.jsx)(x, {
                    helperText: e,
                    ...n
                })]
            })
        });
    b.displayName = "Input", e.s(["default", 0, b], 620174)
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
        l = e.r(13715),
        o = e.r(292408),
        a = e.r(843031),
        s = e.r(416907),
        u = e.r(908829),
        c = "[object Map]",
        f = "[object Promise]",
        d = "[object Set]",
        p = "[object WeakMap]",
        m = "[object DataView]",
        g = u(n),
        h = u(i),
        y = u(l),
        v = u(o),
        x = u(a),
        C = s;
    (n && C(new n(new ArrayBuffer(1))) != m || i && C(new i) != c || l && C(l.resolve()) != f || o && C(new o) != d || a && C(new a) != p) && (C = function(e) {
        var t = s(e),
            r = "[object Object]" == t ? e.constructor : void 0,
            n = r ? u(r) : "";
        if (n) switch (n) {
            case g:
                return m;
            case h:
                return c;
            case y:
                return f;
            case v:
                return d;
            case x:
                return p
        }
        return t
    }), t.exports = C
}, 87522, (e, t, r) => {
    var n = e.r(668488),
        i = e.r(354700),
        l = e.r(410090),
        o = e.r(778116),
        a = e.r(622914),
        s = e.r(432816),
        u = e.r(820092),
        c = e.r(905330),
        f = Object.prototype.hasOwnProperty;
    t.exports = function(e) {
        if (null == e) return !0;
        if (a(e) && (o(e) || "string" == typeof e || "function" == typeof e.splice || s(e) || c(e) || l(e))) return !e.length;
        var t = i(e);
        if ("[object Map]" == t || "[object Set]" == t) return !e.size;
        if (u(e)) return !n(e).length;
        for (var r in e)
            if (f.call(e, r)) return !1;
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
    var l = e.i(87522),
        o = e.i(180793);
    e.s(["default", 0, (e, a, s) => {
        let {
            locale: u,
            ...c
        } = a, f = e;
        return s && f ? ((e => {
            let r;
            try {
                r = new URL(e)
            } catch (e) {
                return !1
            }
            return i(r.pathname.split("/")[1]) !== t.LanguageMapIETFLanguageTag.en
        })(f) || u === r || (f = ((e, t) => {
            let r;
            if (!t) return e;
            try {
                r = new URL(e)
            } catch (t) {
                return e
            }
            let n = r.pathname.split("/");
            return n.splice(1, 0, t), r.pathname = n.join("/"), r.toString()
        })(f, n(u))), ((e, t) => {
            let r;
            if ((0, l.default)(t)) return e;
            let n = -1 === (r = e.indexOf("?")) ? {} : e.slice(r + 1).split("&").reduce((e, t) => {
                    let [r, n] = t.split("=");
                    return r && (e[decodeURIComponent(r)] = decodeURIComponent(n || "")), e
                }, {}),
                i = {};
            Object.entries(t).forEach(([e, t]) => {
                Object.prototype.hasOwnProperty.call(n, e) || (0, o.default)(t) || (i[e] = t)
            });
            let a = new URLSearchParams(i).toString();
            return e.includes("?") ? `${e}&${a}` : `${e}?${a}`
        })(f, c)) : f
    }], 829150)
}, 436324, 531469, e => {
    "use strict";
    var t = e.i(14666),
        r = e.i(499531),
        n = e.i(749583),
        i = e.i(222061),
        l = e.i(829483),
        o = e.i(662380),
        a = e.i(179695),
        s = e.i(613821),
        u = e.i(466673),
        c = e.i(396241);
    e.i(203217);
    var f = e.i(569959),
        d = e.i(545487),
        p = e.i(239273),
        m = e.i(869324),
        g = e.i(497492);
    let h = ({
        form: e,
        isGrowForm: t,
        onSuccess: r,
        close: n,
        onShowSuccessMessage: i
    }) => {
        let l = (0, g.getFilteredQueryParams)(["sfcid", "sflsa", "sfit"], t),
            o = (0, g.getQueryParams)(["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"], !0),
            {
                setFormSubmitted: a
            } = (0, d.useResourcesDetailContext)(),
            [s] = (0, p.default)("ELOQUA");
        return (u, c, d) => {
            let p = t ? (({
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
                h = e?.fields ? (0, g.getAlwaysSendOnData)(e.fields, c, d) : {};
            return u.elqCustomerGUID = s?.split("&")?.[0]?.split("GUID=")?.[1] || "", u = {
                ...u,
                ...p,
                ...h,
                ...o,
                ...l,
                ...e?.extraFields
            }, fetch("https://create.unity.com/e/f2", {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: new URLSearchParams((0, g.cleanData)(u)).toString()
            }).then(() => {
                (0, m.default)({
                    properties: {
                        form_action: "submitted",
                        form_id: u.elqFormID,
                        form_name: u.elqFormName,
                        form_customer_id: u.elqCustomerGUID
                    }
                }), a(!0), r?.(), e?.successMessage?.showSuccessMessage ? i?.() : n?.()
            }).catch(e => f.captureException(e))
        }
    };
    e.s(["useEloquaSubmit", 0, h], 531469), e.s(["FormBuilder", 0, ({
        form: e,
        close: f,
        isGrowForm: d
    }) => {
        let [p, m] = (0, r.useState)(!1), {
            handleSubmit: g,
            control: y,
            setValue: v,
            watch: x,
            getValues: C,
            formState: {
                isSubmitting: b
            }
        } = (0, u.useForm)({
            reValidateMode: "onChange",
            mode: "onChange"
        }), k = x(c.COUNTRY_CODE), w = h({
            form: e,
            isGrowForm: d,
            close: f,
            onShowSuccessMessage: () => m(!0)
        });
        return p && e?.successMessage?.showSuccessMessage ? (0, t.jsxs)("div", {
            className: "flex flex-col items-center justify-center p-8 text-center",
            children: [e.successMessage.title && (0, t.jsx)("h3", {
                className: "mb-4 text-xl font-semibold text-gray-900",
                children: e.successMessage.title
            }), e.successMessage.description && (0, t.jsx)("p", {
                className: "mb-6 text-gray-600",
                children: e.successMessage.description
            }), e?.successMessage?.closeButtonText && (0, t.jsx)(n.default, {
                onPress: f,
                className: "[&>div>span]:!text-black hover:[&>div>span]:!underline",
                variant: "secondary",
                children: e?.successMessage?.closeButtonText
            })]
        }) : (0, t.jsxs)(s.default, {
            onSubmit: g(e => w(e, C, k)),
            children: [(0, t.jsx)("div", {
                className: "flex flex-col [&>*]:mt-3",
                children: e?.fields && e?.fields.map((e, r) => {
                    switch (e.formField) {
                        case "input":
                            return (0, t.jsx)(i.default, {
                                ...e,
                                control: y,
                                countryCode: k
                            }, r);
                        case "checkbox":
                            return (0, t.jsx)(l.default, {
                                countryCode: k,
                                ...e,
                                control: y
                            }, r);
                        case "dropdown":
                            return (0, t.jsx)(o.default, {
                                countryCode: k,
                                ...e,
                                control: y,
                                setValue: v
                            }, r);
                        case "richText":
                            return (0, t.jsx)(a.default, {
                                ...e,
                                control: y,
                                countryCode: k
                            }, r)
                    }
                })
            }), e?.actions && (0, t.jsxs)("div", {
                className: "mt-10 border-t border-t-gray-200 pt-6",
                children: [e?.actions?.primaryActionText && (0, t.jsx)(n.default, {
                    type: "submit",
                    rounded: !0,
                    hasArrow: !0,
                    disabled: b,
                    children: e?.actions?.primaryActionText
                }), e?.actions?.secondaryActionText && (0, t.jsx)(n.default, {
                    onPress: f,
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
        l = e.i(537251);
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
            extraFields: o
        } = (0, l.default)(), a = ({
            label: l,
            form: o
        }) => {
            let a = ((e, t) => {
                let r = e?.find(e => t.title === e?.form?.title)?.customSelections || "";
                try {
                    return JSON.parse(r)
                } catch (e) {
                    return null
                }
            })(e || [], o);
            if (a && o?.fields)
                for (let e of Object.keys(a)) {
                    let t = o.fields.findIndex(t => t.formFieldId === e);
                    if (t >= 0) {
                        let r = a[e];
                        null != r.isRequired && (o.fields[t].isRequired = a[e].isRequired), r.isHidden && o.fields.splice(t, 1)
                    }
                }
            return (0, t.jsx)(r.default, {
                actionLabel: l,
                onOpenChange: e => {
                    e && (0, i.default)({
                        properties: {
                            form_action: "presented",
                            form_id: o.fields?.find(e => "elqFormID" === e.formFieldId)?.defaultValue,
                            form_name: o.fields?.find(e => "elqFormName" === e.formFieldId)?.defaultValue
                        }
                    })
                },
                children: e => (0, t.jsx)(r.default.Layout, {
                    modal: {
                        title: o.title,
                        description: o.description
                    },
                    children: o && (0, t.jsx)(n.FormBuilder, {
                        form: o,
                        close: e
                    })
                })
            })
        };
        return {
            renderModal: a,
            mapFormActions: e => e?.map(e => ({
                title: e.title,
                link: e.link ? {
                    href: e.link.linkReference?.href.current || "",
                    target: e.link.linkReference?.target || "_self"
                } : null,
                form: e.form ? {
                    form: e.form,
                    webinarFormParametersContent: e.webinarFormParametersContent,
                    extraFields: o,
                    renderModal: a
                } : null
            })),
            extraFields: o
        }
    }])
}]);