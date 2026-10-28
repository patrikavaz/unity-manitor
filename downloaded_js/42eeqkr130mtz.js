;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "f731749d-b4d3-5922-238a-972683ae4f28")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, [779712, t => {
    var e = t.i(839287);
    let r = (0, t.i(477846).default)({
        projectId: e.default.env.SANITY_STUDIO_PROJECT_ID || "fuvbjjlp",
        dataset: e.default.env.SANITY_STUDIO_DATASET || "production"
    });
    t.s(["f", 0, t => t ? r.image(t) : null])
}, 279272, 586083, 506326, t => {
    var e = t.i(328744),
        r = t.i(823928),
        n = t.i(706221),
        i = t.i(725542),
        o = t.i(495056),
        a = t.i(120194),
        s = t.i(672357);

    function f(t, e) {
        let r, n = () => {
            let {
                currentTime: n
            } = e, i = (null === n ? 0 : n.value) / 100;
            r !== i && t(i), r = i
        };
        return s.y.preUpdate(n, !0), () => (0, s.Y)(n)
    }

    function l(t) {
        return !("u" < typeof window) && (t ? (0, r.G)() : (0, r.a)())
    }
    var u = t.i(270736),
        h = t.i(470934),
        c = t.i(398361);
    let d = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }),
        p = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };

    function g(t, e, r, n) {
        let i = r[e],
            {
                length: o,
                position: a
            } = p[e],
            s = i.current,
            f = r.time;
        i.current = Math.abs(t[`scroll${a}`]), i.scrollLength = t[`scroll${o}`] - t[`client${o}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = (0, h.f)(0, i.scrollLength, i.current);
        let l = n - f;
        i.velocity = l > 50 ? 0 : (0, c.f)(i.current - s, l)
    }
    var m = t.i(226056),
        w = t.i(973626),
        v = t.i(508983),
        y = t.i(335029);
    let b = {
        start: 0,
        center: .5,
        end: 1
    };

    function x(t, e, r = 0) {
        let n = 0;
        if (t in b && (t = b[t]), "string" == typeof t) {
            let e = parseFloat(t);
            t.endsWith("px") ? n = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? n = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? n = e / 100 * document.documentElement.clientHeight : t = e
        }
        return "number" == typeof t && (n = e * t), r + n
    }
    let A = [0, 0],
        O = [
            [0, 0],
            [1, 1]
        ],
        E = {
            x: 0,
            y: 0
        },
        M = new WeakMap,
        I = new WeakMap,
        S = new WeakMap,
        W = new WeakMap,
        j = new WeakMap,
        H = t => t === document.scrollingElement ? window : t;

    function L(t, {
        container: e = document.scrollingElement,
        trackContentSize: r = !1,
        ...n
    } = {}) {
        if (!e) return a.f;
        let i = S.get(e);
        i || (i = new Set, S.set(e, i));
        let o = function(t, e, r, n = {}) {
            return {
                measure: e => {
                    ! function(t, e = t, r) {
                        if (r.x.targetOffset = 0, r.y.targetOffset = 0, e !== t) {
                            let n = e;
                            for (; n && n !== t;) r.x.targetOffset += n.offsetLeft, r.y.targetOffset += n.offsetTop, n = n.offsetParent
                        }
                        r.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, r.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, r.x.containerLength = t.clientWidth, r.y.containerLength = t.clientHeight
                    }(t, n.target, r), g(t, "x", r, e), g(t, "y", r, e), r.time = e, (n.offset || n.target) && function(t, e, r) {
                        let {
                            offset: n = O
                        } = r, {
                            target: i = t,
                            axis: o = "y"
                        } = r, a = "y" === o ? "height" : "width", s = i !== t ? function(t, e) {
                            let r = {
                                    x: 0,
                                    y: 0
                                },
                                n = t;
                            for (; n && n !== e;)
                                if ((0, y.f)(n)) r.x += n.offsetLeft, r.y += n.offsetTop, n = n.offsetParent;
                                else if ("svg" === n.tagName) {
                                let t = n.getBoundingClientRect(),
                                    e = (n = n.parentElement).getBoundingClientRect();
                                r.x += t.left - e.left, r.y += t.top - e.top
                            } else if (n instanceof SVGGraphicsElement) {
                                let {
                                    x: t,
                                    y: e
                                } = n.getBBox();
                                r.x += t, r.y += e;
                                let i = null,
                                    o = n.parentNode;
                                for (; !i;) "svg" === o.tagName && (i = o), o = n.parentNode;
                                n = i
                            } else break;
                            return r
                        }(i, t) : E, f = i === t ? {
                            width: t.scrollWidth,
                            height: t.scrollHeight
                        } : "getBBox" in i && "svg" !== i.tagName ? i.getBBox() : {
                            width: i.clientWidth,
                            height: i.clientHeight
                        }, l = {
                            width: t.clientWidth,
                            height: t.clientHeight
                        };
                        e[o].offset.length = 0;
                        let u = !e[o].interpolate,
                            h = n.length;
                        for (let t = 0; t < h; t++) {
                            let r = function(t, e, r, n) {
                                let i = Array.isArray(t) ? t : A,
                                    o = 0;
                                return "number" == typeof t ? i = [t, t] : "string" == typeof t && (i = (t = t.trim()).includes(" ") ? t.split(" ") : [t, b[t] ? t : "0"]), (o = x(i[0], r, n)) - x(i[1], e)
                            }(n[t], l[a], f[a], s[o]);
                            u || r === e[o].interpolatorOffsets[t] || (u = !0), e[o].offset[t] = r
                        }
                        u && (e[o].interpolate = (0, m.f)(e[o].offset, (0, w.f)(n), {
                            clamp: !1
                        }), e[o].interpolatorOffsets = [...e[o].offset]), e[o].progress = (0, v.f)(0, 1, e[o].interpolate(e[o].current))
                    }(t, r, n)
                },
                notify: () => e(r)
            }
        }(e, t, {
            time: 0,
            x: d(),
            y: d()
        }, n);
        if (i.add(o), !M.has(e)) {
            let t = () => {
                    for (let t of i) t.measure(s.I.timestamp);
                    s.y.preUpdate(r)
                },
                r = () => {
                    for (let t of i) t.notify()
                },
                n = () => s.y.read(t);
            M.set(e, n);
            let o = H(e);
            window.addEventListener("resize", n), e !== document.documentElement && I.set(e, (0, u.f)(e, n)), o.addEventListener("scroll", n), n()
        }
        if (r && !j.has(e)) {
            let t = M.get(e),
                r = {
                    width: e.scrollWidth,
                    height: e.scrollHeight
                };
            W.set(e, r);
            let n = s.y.read(() => {
                let n = e.scrollWidth,
                    i = e.scrollHeight;
                (r.width !== n || r.height !== i) && (t(), r.width = n, r.height = i)
            }, !0);
            j.set(e, n)
        }
        let f = M.get(e);
        return s.y.read(f, !1, !0), () => {
            (0, s.Y)(f);
            let t = S.get(e);
            if (!t || (t.delete(o), t.size)) return;
            let r = M.get(e);
            M.delete(e), r && (H(e).removeEventListener("scroll", r), I.get(e)?.(), window.removeEventListener("resize", r));
            let n = j.get(e);
            n && ((0, s.Y)(n), j.delete(e)), W.delete(e)
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
            [O, "contain"]
        ],
        C = {
            start: 0,
            end: 1
        };

    function P(t) {
        if (!t) return {
            rangeStart: "contain 0%",
            rangeEnd: "contain 100%"
        };
        for (let [e, r] of T)
            if (function(t, e) {
                    let r = function(t) {
                        if (2 !== t.length) return;
                        let e = [];
                        for (let r of t)
                            if (Array.isArray(r)) e.push(r);
                            else {
                                if ("string" != typeof r) return;
                                let t = function(t) {
                                    let e = t.trim().split(/\s+/);
                                    if (2 !== e.length) return;
                                    let r = C[e[0]],
                                        n = C[e[1]];
                                    if (void 0 !== r && void 0 !== n) return [r, n]
                                }(r);
                                if (!t) return;
                                e.push(t)
                            } return e
                    }(t);
                    if (!r) return !1;
                    for (let t = 0; t < 2; t++) {
                        let n = r[t],
                            i = e[t];
                        if (n[0] !== i[0] || n[1] !== i[1]) return !1
                    }
                    return !0
                }(t, e)) return {
                rangeStart: `${r} 0%`,
                rangeEnd: `${r} 100%`
            }
    }
    let U = new Map;

    function z(t) {
        let e = {
                value: 0
            },
            r = L(r => {
                e.value = 100 * r[t.axis].progress
            }, t);
        return {
            currentTime: e,
            cancel: r
        }
    }

    function k({
        source: t,
        container: e,
        ...r
    }) {
        let {
            axis: n
        } = r;
        t && (e = t);
        let i = U.get(e);
        i || (i = new Map, U.set(e, i));
        let o = r.target ?? "self",
            a = i.get(o);
        a || (a = {}, i.set(o, a));
        let s = n + (r.offset ?? []).join(",");
        return a[s] || (r.target && l(r.target) ? P(r.offset) ? a[s] = new ViewTimeline({
            subject: r.target,
            axis: n
        }) : a[s] = z({
            container: e,
            ...r
        }) : l() ? a[s] = new ScrollTimeline({
            source: e,
            axis: n
        }) : a[s] = z({
            container: e,
            ...r
        })), a[s]
    }

    function R(t, {
        axis: e = "y",
        container: r = document.scrollingElement,
        ...n
    } = {}) {
        let i, o, s;
        if (!r) return a.f;
        let u = {
            axis: e,
            container: r,
            ...n
        };
        return "function" == typeof t ? function(t, e) {
            return 2 === t.length || e && (e.target || e.offset) ? L(r => {
                t(r[e.axis].progress, r)
            }, e) : f(t, k(e))
        }(t, u) : (i = k(u), o = u.target ? P(u.offset) : void 0, s = u.target ? l(u.target) && !!o : l(), t.attachTimeline({
            timeline: s ? i : void 0,
            ...o && s && {
                rangeStart: o.rangeStart,
                rangeEnd: o.rangeEnd
            },
            observe: t => (t.pause(), f(e => {
                t.time = t.iterationDuration * e
            }, i))
        }))
    }
    var B = t.i(258707),
        _ = t.i(126274);
    let N = () => ({
            scrollX: (0, n.o)(0),
            scrollY: (0, n.o)(0),
            scrollXProgress: (0, n.o)(0),
            scrollYProgress: (0, n.o)(0)
        }),
        Y = t => !!t && !t.current;

    function $(t, r, n, i) {
        return {
            factory: o => {
                let a, s = () => {
                    Y(n) || Y(i) ? e.t.read(s) : a = R(o, {
                        ...r,
                        axis: t,
                        container: n?.current || void 0,
                        target: i?.current || void 0
                    })
                };
                return e.t.read(s), () => {
                    (0, e.w)(s), a?.()
                }
            },
            times: [0, 1],
            keyframes: [0, 1],
            ease: t => t,
            duration: 1
        }
    }
    t.s(["f", 0, function({
        container: t,
        target: n,
        ...a
    } = {}) {
        var s;
        let f = (0, B.f)(N);
        s = a.offset, !("u" < typeof window) && (n ? (0, r.G)() && !!P(s) : (0, r.a)()) && (f.scrollXProgress.accelerate = $("x", a, t, n), f.scrollYProgress.accelerate = $("y", a, t, n));
        let l = (0, o.useRef)(null),
            u = (0, o.useRef)(!1),
            h = (0, o.useCallback)(() => (l.current = R((t, {
                x: e,
                y: r
            }) => {
                f.scrollX.set(e.current), f.scrollXProgress.set(e.progress), f.scrollY.set(r.current), f.scrollYProgress.set(r.progress)
            }, {
                ...a,
                container: t?.current || void 0,
                target: n?.current || void 0
            }), () => {
                l.current?.()
            }), [t, n, JSON.stringify(a.offset)]);
        return (0, _.f)(() => {
            if (u.current = !1, !(Y(t) || Y(n))) return h();
            u.current = !0
        }, [h]), (0, o.useEffect)(() => {
            let r;
            if (!u.current) return;
            let o = () => {
                let e = Y(t),
                    o = Y(n);
                (0, i.k)(!e, "Container ref is defined but not hydrated", "use-scroll-ref"), (0, i.k)(!o, "Target ref is defined but not hydrated", "use-scroll-ref"), e || o || (r = h())
            };
            return e.t.read(o), () => {
                (0, e.w)(o), r?.()
            }
        }, [h]), f
    }], 279272);
    var V = t.i(978226);

    function q(t) {
        let e = (0, B.f)(() => (0, n.o)(t)),
            {
                isStatic: r
            } = (0, o.useContext)(V.f);
        if (r) {
            let [, r] = (0, o.useState)(t);
            (0, o.useEffect)(() => e.on("change", r), [])
        }
        return e
    }

    function D(t, e) {
        let r = q(e()),
            n = () => r.set(e());
        return n(), (0, _.f)(() => {
            let e = () => s.y.preRender(n, !1, !0),
                r = t.map(t => t.on("change", e));
            return () => {
                r.forEach(t => t()), (0, s.Y)(n)
            }
        }), r
    }
    t.s(["f", 0, q], 586083);

    function G(t, e) {
        let r = (0, B.f)(() => []);
        return D(t, () => {
            r.length = 0;
            let n = t.length;
            for (let e = 0; e < n; e++) r[e] = t[e].get();
            return e(r)
        })
    }
    t.s(["f", 0, function t(e, r, i, o) {
        if ("function" == typeof e) {
            let t;
            return n.I.current = [], e(), t = D(n.I.current, e), n.I.current = void 0, t
        }
        if (void 0 !== i && !Array.isArray(i) && "function" != typeof r) {
            var a = e,
                s = r,
                f = i,
                l = o;
            let n = (0, B.f)(() => Object.keys(f)),
                u = (0, B.f)(() => ({}));
            for (let e of n) u[e] = t(a, s, f[e], l);
            return u
        }
        let u = "function" == typeof r ? r : function(...t) {
                let e = !Array.isArray(t[0]),
                    r = e ? 0 : -1,
                    n = t[0 + r],
                    i = t[1 + r],
                    o = t[2 + r],
                    a = t[3 + r],
                    s = (0, m.f)(i, o, a);
                return e ? s(n) : s
            }(r, i, o),
            h = Array.isArray(e) ? G(e, u) : G([e], ([t]) => u(t)),
            c = Array.isArray(e) ? void 0 : e.accelerate;
        return c && !c.isTransformed && "function" != typeof r && Array.isArray(i) && o?.clamp !== !1 && (h.accelerate = {
            ...c,
            times: r,
            keyframes: i,
            isTransformed: !0,
            ...o?.ease ? {
                ease: o.ease
            } : {}
        }), h
    }], 506326)
}, 973626, 302461, t => {
    var e = t.i(470934),
        r = t.i(327745);

    function n(t, n) {
        let i = t[t.length - 1];
        for (let o = 1; o <= n; o++) {
            let a = (0, e.f)(0, n, o);
            t.push((0, r.f)(i, 1, a))
        }
    }
    t.s(["f", 0, n], 302461), t.s(["f", 0, function(t) {
        let e = [0];
        return n(e, t.length - 1), e
    }], 973626)
}, 270736, t => {
    let e, r;
    var n = t.i(256650),
        i = t.i(513038);
    let o = new WeakMap,
        a = (t, e, r) => (i, o) => o && o[0] ? o[0][t + "Size"] : (0, n.f)(i) && "getBBox" in i ? i.getBBox()[e] : i[r],
        s = a("inline", "width", "offsetWidth"),
        f = a("block", "height", "offsetHeight");

    function l({
        target: t,
        borderBoxSize: e
    }) {
        o.get(t)?.forEach(r => {
            r(t, {
                get width() {
                    return s(t, e)
                },
                get height() {
                    return f(t, e)
                }
            })
        })
    }

    function u(t) {
        t.forEach(l)
    }
    let h = new Set;
    t.s(["f", 0, function(t, n) {
        let a;
        return "function" == typeof t ? (h.add(t), r || (r = () => {
            let t = {
                get width() {
                    return window.innerWidth
                },
                get height() {
                    return window.innerHeight
                }
            };
            h.forEach(e => e(t))
        }, window.addEventListener("resize", r)), () => {
            h.delete(t), h.size || "function" != typeof r || (window.removeEventListener("resize", r), r = void 0)
        }) : (!e && "u" > typeof ResizeObserver && (e = new ResizeObserver(u)), (a = (0, i.f)(t)).forEach(t => {
            let r = o.get(t);
            r || (r = new Set, o.set(t, r)), r.add(n), e?.observe(t)
        }), () => {
            a.forEach(t => {
                let r = o.get(t);
                r?.delete(n), r?.size || e?.unobserve(t)
            })
        })
    }], 270736)
}, 226056, t => {
    var e = t.i(725542),
        r = t.i(508983),
        n = t.i(719372),
        i = t.i(120194),
        o = t.i(815645),
        a = t.i(470934),
        s = t.i(899290);
    t.s(["f", 0, function(t, f, {
        clamp: l = !0,
        ease: u,
        mixer: h
    } = {}) {
        let c = t.length;
        if ((0, e.k)(c === f.length, "Both input and output ranges must be the same length", "range-length"), 1 === c) return () => f[0];
        if (2 === c && f[0] === f[1]) return () => f[1];
        let d = t[0] === t[1];
        t[0] > t[c - 1] && (t = [...t].reverse(), f = [...f].reverse());
        let p = function(t, e, r) {
                let a = [],
                    f = r || n.f.mix || s.f,
                    l = t.length - 1;
                for (let r = 0; r < l; r++) {
                    let n = f(t[r], t[r + 1]);
                    if (e) {
                        let t = Array.isArray(e) ? e[r] || i.f : e;
                        n = (0, o.f)(t, n)
                    }
                    a.push(n)
                }
                return a
            }(f, u, h),
            g = p.length,
            m = e => {
                if (d && e < t[0]) return f[0];
                let r = 0;
                if (g > 1)
                    for (; r < t.length - 2 && !(e < t[r + 1]); r++);
                let n = (0, a.f)(t[r], t[r + 1], e);
                return p[r](n)
            };
        return l ? e => m((0, r.f)(t[0], t[c - 1], e)) : m
    }])
}, 256650, t => {
    var e = t.i(825465);
    t.s(["f", 0, function(t) {
        return (0, e.f)(t) && "ownerSVGElement" in t
    }])
}, 815645, 899290, t => {
    let e = (...t) => t.reduce((t, e) => r => e(t(r)));
    t.s(["f", 0, e], 815645);
    var r = t.i(725542),
        n = t.i(133071),
        i = t.i(162158),
        o = t.i(53768),
        a = t.i(752934),
        s = t.i(87436);

    function f(t, e, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? t + (e - t) * 6 * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
    }
    var l = t.i(439327);

    function u(t, e) {
        return r => r > 0 ? e : t
    }
    var h = t.i(327745);
    let c = (t, e, r) => {
            let n = t * t,
                i = r * (e * e - n) + n;
            return i < 0 ? 0 : Math.sqrt(i)
        },
        d = [a.f, l.f, s.f];

    function p(t) {
        let e = d.find(e => e.test(t));
        if ((0, r.w)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return !1;
        let n = e.parse(t);
        return e === s.f && (n = function({
            hue: t,
            saturation: e,
            lightness: r,
            alpha: n
        }) {
            t /= 360, r /= 100;
            let i = 0,
                o = 0,
                a = 0;
            if (e /= 100) {
                let n = r < .5 ? r * (1 + e) : r + e - r * e,
                    s = 2 * r - n;
                i = f(s, n, t + 1 / 3), o = f(s, n, t), a = f(s, n, t - 1 / 3)
            } else i = o = a = r;
            return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * a),
                alpha: n
            }
        }(n)), n
    }
    let g = (t, e) => {
            let r = p(t),
                n = p(e);
            if (!r || !n) return u(t, e);
            let i = {
                ...r
            };
            return t => (i.red = c(r.red, n.red, t), i.green = c(r.green, n.green, t), i.blue = c(r.blue, n.blue, t), i.alpha = (0, h.f)(r.alpha, n.alpha, t), l.f.transform(i))
        },
        m = new Set(["none", "hidden"]);

    function w(t, e) {
        return r => (0, h.f)(t, e, r)
    }

    function v(t) {
        return "number" == typeof t ? w : "string" == typeof t ? (0, n.u)(t) ? u : i.f.test(t) ? g : x : Array.isArray(t) ? y : "object" == typeof t ? i.f.test(t) ? g : b : u
    }

    function y(t, e) {
        let r = [...t],
            n = r.length,
            i = t.map((t, r) => v(t)(t, e[r]));
        return t => {
            for (let e = 0; e < n; e++) r[e] = i[e](t);
            return r
        }
    }

    function b(t, e) {
        let r = {
                ...t,
                ...e
            },
            n = {};
        for (let i in r) void 0 !== t[i] && void 0 !== e[i] && (n[i] = v(t[i])(t[i], e[i]));
        return t => {
            for (let e in n) r[e] = n[e](t);
            return r
        }
    }
    let x = (t, n) => {
        let i = o.u.createTransformer(n),
            a = (0, o.L)(t),
            s = (0, o.L)(n);
        if (!(a.indexes.var.length === s.indexes.var.length && a.indexes.color.length === s.indexes.color.length && a.indexes.number.length >= s.indexes.number.length)) return (0, r.w)(!0, `Complex values '${t}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), u(t, n);
        if (m.has(t) && !s.values.length || m.has(n) && !a.values.length) return m.has(t) ? e => e <= 0 ? t : n : e => e >= 1 ? n : t;
        return e(y(function(t, e) {
            let r = [],
                n = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let i = 0; i < e.values.length; i++) {
                let o = e.types[i],
                    a = t.indexes[o][n[o]],
                    s = t.values[a] ?? 0;
                r[i] = s, n[o]++
            }
            return r
        }(a, s), s.values), i)
    };
    t.s(["f", 0, function(t, e, r) {
        return "number" == typeof t && "number" == typeof e && "number" == typeof r ? (0, h.f)(t, e, r) : v(t)(t, e)
    }], 899290)
}, 470934, t => {
    t.s(["f", 0, (t, e, r) => {
        let n = e - t;
        return n ? (r - t) / n : 1
    }])
}, 430215, t => {
    var e = t.i(495056);
    t.s(["f", 0, t => {
        let [r, n] = (0, e.useState)(!1);
        return (0, e.useEffect)(() => {
            let e = window.matchMedia(t);
            e.matches !== r && n(e.matches);
            let i = () => n(e.matches);
            return window.addEventListener("resize", i), () => window.removeEventListener("resize", i)
        }, [r, t]), r
    }])
}], 477846, (t, e, r) => {
    t.e, e.exports = function() {
        function t(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
            return n
        }

        function e() {
            return (e = Object.assign.bind()).apply(null, arguments)
        }
        var r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

        function n(t) {
            return ("image-" + t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1")
        }
        var i = [
                ["width", "w"],
                ["height", "h"],
                ["format", "fm"],
                ["download", "dl"],
                ["blur", "blur"],
                ["sharpen", "sharp"],
                ["invert", "invert"],
                ["orientation", "or"],
                ["minHeight", "min-h"],
                ["maxHeight", "max-h"],
                ["minWidth", "min-w"],
                ["maxWidth", "max-w"],
                ["quality", "q"],
                ["fit", "fit"],
                ["crop", "crop"],
                ["saturation", "sat"],
                ["auto", "auto"],
                ["dpr", "dpr"],
                ["pad", "pad"],
                ["frame", "frame"]
            ],
            o = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
            a = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
            s = ["format"],
            f = function() {
                function f(t, r) {
                    this.options = void 0, this.options = t ? e({}, t.options || {}, r || {}) : e({}, r || {})
                }
                var l = f.prototype;
                return l.withOptions = function(r) {
                    var n = r.baseUrl || this.options.baseUrl,
                        o = {
                            baseUrl: n
                        };
                    for (var a in r) r.hasOwnProperty(a) && (o[function(e) {
                        for (var r, n = function(e) {
                                var r = "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (r) return (r = r.call(e)).next.bind(r);
                                if (Array.isArray(e) || (r = function(e) {
                                        if (e) {
                                            if ("string" == typeof e) return t(e, void 0);
                                            var r = ({}).toString.call(e).slice(8, -1);
                                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, void 0) : void 0
                                        }
                                    }(e))) {
                                    r && (e = r);
                                    var n = 0;
                                    return function() {
                                        return n >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[n++]
                                        }
                                    }
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(i); !(r = n()).done;) {
                            var o = r.value,
                                a = o[0],
                                s = o[1];
                            if (e === a || e === s) return a
                        }
                        return e
                    }(a)] = r[a]);
                    return new f(this, e({
                        baseUrl: n
                    }, o))
                }, l.image = function(t) {
                    return this.withOptions({
                        source: t
                    })
                }, l.dataset = function(t) {
                    return this.withOptions({
                        dataset: t
                    })
                }, l.projectId = function(t) {
                    return this.withOptions({
                        projectId: t
                    })
                }, l.bg = function(t) {
                    return this.withOptions({
                        bg: t
                    })
                }, l.dpr = function(t) {
                    return this.withOptions(t && 1 !== t ? {
                        dpr: t
                    } : {})
                }, l.width = function(t) {
                    return this.withOptions({
                        width: t
                    })
                }, l.height = function(t) {
                    return this.withOptions({
                        height: t
                    })
                }, l.focalPoint = function(t, e) {
                    return this.withOptions({
                        focalPoint: {
                            x: t,
                            y: e
                        }
                    })
                }, l.maxWidth = function(t) {
                    return this.withOptions({
                        maxWidth: t
                    })
                }, l.minWidth = function(t) {
                    return this.withOptions({
                        minWidth: t
                    })
                }, l.maxHeight = function(t) {
                    return this.withOptions({
                        maxHeight: t
                    })
                }, l.minHeight = function(t) {
                    return this.withOptions({
                        minHeight: t
                    })
                }, l.size = function(t, e) {
                    return this.withOptions({
                        width: t,
                        height: e
                    })
                }, l.blur = function(t) {
                    return this.withOptions({
                        blur: t
                    })
                }, l.sharpen = function(t) {
                    return this.withOptions({
                        sharpen: t
                    })
                }, l.rect = function(t, e, r, n) {
                    return this.withOptions({
                        rect: {
                            left: t,
                            top: e,
                            width: r,
                            height: n
                        }
                    })
                }, l.format = function(t) {
                    return this.withOptions({
                        format: t
                    })
                }, l.invert = function(t) {
                    return this.withOptions({
                        invert: t
                    })
                }, l.orientation = function(t) {
                    return this.withOptions({
                        orientation: t
                    })
                }, l.quality = function(t) {
                    return this.withOptions({
                        quality: t
                    })
                }, l.forceDownload = function(t) {
                    return this.withOptions({
                        download: t
                    })
                }, l.flipHorizontal = function() {
                    return this.withOptions({
                        flipHorizontal: !0
                    })
                }, l.flipVertical = function() {
                    return this.withOptions({
                        flipVertical: !0
                    })
                }, l.ignoreImageParams = function() {
                    return this.withOptions({
                        ignoreImageParams: !0
                    })
                }, l.fit = function(t) {
                    if (-1 === o.indexOf(t)) throw Error('Invalid fit mode "' + t + '"');
                    return this.withOptions({
                        fit: t
                    })
                }, l.crop = function(t) {
                    if (-1 === a.indexOf(t)) throw Error('Invalid crop mode "' + t + '"');
                    return this.withOptions({
                        crop: t
                    })
                }, l.saturation = function(t) {
                    return this.withOptions({
                        saturation: t
                    })
                }, l.auto = function(t) {
                    if (-1 === s.indexOf(t)) throw Error('Invalid auto mode "' + t + '"');
                    return this.withOptions({
                        auto: t
                    })
                }, l.pad = function(t) {
                    return this.withOptions({
                        pad: t
                    })
                }, l.vanityName = function(t) {
                    return this.withOptions({
                        vanityName: t
                    })
                }, l.frame = function(t) {
                    if (1 !== t) throw Error('Invalid frame value "' + t + '"');
                    return this.withOptions({
                        frame: t
                    })
                }, l.url = function() {
                    return function(t) {
                        var o = e({}, t || {}),
                            a = o.source;
                        delete o.source;
                        var s = function(t) {
                            var r, i;
                            if (!t) return null;
                            if ("string" == typeof t && (i = t, /^https?:\/\//.test("" + i))) r = {
                                asset: {
                                    _ref: n(t)
                                }
                            };
                            else if ("string" == typeof t) r = {
                                asset: {
                                    _ref: t
                                }
                            };
                            else if (t && "string" == typeof t._ref) r = {
                                asset: t
                            };
                            else if (t && "string" == typeof t._id) r = {
                                asset: {
                                    _ref: t._id || ""
                                }
                            };
                            else if (t && t.asset && "string" == typeof t.asset.url) r = {
                                asset: {
                                    _ref: n(t.asset.url)
                                }
                            };
                            else {
                                if ("object" != typeof t.asset) return null;
                                r = e({}, t)
                            }
                            return t.crop && (r.crop = t.crop), t.hotspot && (r.hotspot = t.hotspot),
                                function(t) {
                                    if (t.crop && t.hotspot) return t;
                                    var r = e({}, t);
                                    return r.crop || (r.crop = {
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        right: 0
                                    }), r.hotspot || (r.hotspot = {
                                        x: .5,
                                        y: .5,
                                        height: 1,
                                        width: 1
                                    }), r
                                }(r)
                        }(a);
                        if (!s) {
                            if (a && "object" == typeof a && null !== a && a._upload && (!a.asset || !a.asset._ref)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                            throw Error("Unable to resolve image URL from source (" + JSON.stringify(a) + ")")
                        }
                        var f = function(t) {
                                var e = t.split("-"),
                                    n = e[1],
                                    i = e[2],
                                    o = e[3];
                                if (!n || !i || !o) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                var a = i.split("x"),
                                    s = a[0],
                                    f = a[1],
                                    l = +s,
                                    u = +f;
                                if (!(isFinite(l) && isFinite(u))) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                return {
                                    id: n,
                                    width: l,
                                    height: u,
                                    format: o
                                }
                            }(s.asset._ref || s.asset._id || ""),
                            l = Math.round(s.crop.left * f.width),
                            u = Math.round(s.crop.top * f.height),
                            h = {
                                left: l,
                                top: u,
                                width: Math.round(f.width - s.crop.right * f.width - l),
                                height: Math.round(f.height - s.crop.bottom * f.height - u)
                            },
                            c = s.hotspot.height * f.height / 2,
                            d = s.hotspot.width * f.width / 2,
                            p = s.hotspot.x * f.width,
                            g = s.hotspot.y * f.height;
                        return o.rect || o.focalPoint || o.ignoreImageParams || o.crop || (o = e({}, o, function(t, e) {
                                var r, n = e.width,
                                    i = e.height;
                                if (!(n && i)) return {
                                    width: n,
                                    height: i,
                                    rect: t.crop
                                };
                                var o = t.crop,
                                    a = t.hotspot,
                                    s = n / i;
                                if (o.width / o.height > s) {
                                    var f = Math.round(o.height),
                                        l = Math.round(f * s),
                                        u = Math.max(0, Math.round(o.top)),
                                        h = Math.max(0, Math.round(Math.round((a.right - a.left) / 2 + a.left) - l / 2));
                                    h < o.left ? h = o.left : h + l > o.left + o.width && (h = o.left + o.width - l), r = {
                                        left: h,
                                        top: u,
                                        width: l,
                                        height: f
                                    }
                                } else {
                                    var c = o.width,
                                        d = Math.round(c / s),
                                        p = Math.max(0, Math.round(o.left)),
                                        g = Math.max(0, Math.round(Math.round((a.bottom - a.top) / 2 + a.top) - d / 2));
                                    g < o.top ? g = o.top : g + d > o.top + o.height && (g = o.top + o.height - d), r = {
                                        left: p,
                                        top: g,
                                        width: c,
                                        height: d
                                    }
                                }
                                return {
                                    width: n,
                                    height: i,
                                    rect: r
                                }
                            }({
                                crop: h,
                                hotspot: {
                                    left: p - d,
                                    top: g - c,
                                    right: p + d,
                                    bottom: g + c
                                }
                            }, o))),
                            function(t) {
                                var e = (t.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                                    r = t.vanityName ? "/" + t.vanityName : "",
                                    n = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format + r,
                                    o = e + "/images/" + t.projectId + "/" + t.dataset + "/" + n,
                                    a = [];
                                if (t.rect) {
                                    var s = t.rect,
                                        f = s.left,
                                        l = s.top,
                                        u = s.width,
                                        h = s.height;
                                    (0 !== f || 0 !== l || h !== t.asset.height || u !== t.asset.width) && a.push("rect=" + f + "," + l + "," + u + "," + h)
                                }
                                t.bg && a.push("bg=" + t.bg), t.focalPoint && (a.push("fp-x=" + t.focalPoint.x), a.push("fp-y=" + t.focalPoint.y));
                                var c = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                                return (c && a.push("flip=" + c), i.forEach(function(e) {
                                    var r = e[0],
                                        n = e[1];
                                    void 0 !== t[r] ? a.push(n + "=" + encodeURIComponent(t[r])) : void 0 !== t[n] && a.push(n + "=" + encodeURIComponent(t[n]))
                                }), 0 === a.length) ? o : o + "?" + a.join("&")
                            }(e({}, o, {
                                asset: f
                            }))
                    }(this.options)
                }, l.toString = function() {
                    return this.url()
                }, f
            }();
        return function(t) {
            if (t && "config" in t && "function" == typeof t.config) {
                var e = t.config(),
                    r = e.apiHost,
                    n = e.projectId,
                    i = e.dataset;
                return new f(null, {
                    baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: n,
                    dataset: i
                })
            }
            if (t && "clientConfig" in t && "object" == typeof t.clientConfig) {
                var o = t.clientConfig,
                    a = o.apiHost,
                    s = o.projectId,
                    l = o.dataset;
                return new f(null, {
                    baseUrl: (a || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: s,
                    dataset: l
                })
            }
            return new f(null, t || {})
        }
    }()
}, 193863, (t, e, r) => {
    t.e, e.exports = function(t, e) {
        if (void 0 == e && (e = {
                fuzzy: !0
            }), /youtu\.?be/.test(t)) {
            var r, n = [/youtu\.be\/([^#\&\?]{11})/, /\?v=([^#\&\?]{11})/, /\&v=([^#\&\?]{11})/, /embed\/([^#\&\?]{11})/, /\/v\/([^#\&\?]{11})/];
            for (r = 0; r < n.length; ++r)
                if (n[r].test(t)) return n[r].exec(t)[1];
            if (e.fuzzy) {
                var i = t.split(/[\/\&\?=#\.\s]/g);
                for (r = 0; r < i.length; ++r)
                    if (/^[^#\&\?]{11}$/.test(i[r])) return i[r]
            }
        }
        return null
    }
}]);

//# debugId=f731749d-b4d3-5922-238a-972683ae4f28