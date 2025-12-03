try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0708f254-5ced-4805-aad7-5ef9d1a166db", e._sentryDebugIdIdentifier = "sentry-dbid-0708f254-5ced-4805-aad7-5ef9d1a166db")
} catch (e) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [80061], {
        5130: (e, t, n) => {
            n.d(t, {
                G: () => r
            });

            function r(e) {
                return "object" == typeof e && null !== e
            }
        },
        5161: (e, t, n) => {
            n.d(t, {
                G: () => c
            });
            var r = n(20292),
                i = n(53459),
                l = n(15128),
                o = n(96332),
                s = n(28789);

            function f(e, t) {
                let n = (0, s.d)(t()),
                    r = () => n.set(t());
                return r(), (0, o.E)(() => {
                    let t = () => l.Gt.preRender(r, !1, !0),
                        n = e.map(e => e.on("change", t));
                    return () => {
                        n.forEach(e => e()), (0, l.WG)(r)
                    }
                }), n
            }
            var u = n(50025);

            function c(e, t, n, i) {
                if ("function" == typeof e) {
                    u.bt.current = [], e();
                    let t = f(u.bt.current, e);
                    return u.bt.current = void 0, t
                }
                let l = "function" == typeof t ? t : function(...e) {
                    let t = !Array.isArray(e[0]),
                        n = t ? 0 : -1,
                        i = e[0 + n],
                        l = e[1 + n],
                        o = e[2 + n],
                        s = e[3 + n],
                        f = (0, r.G)(l, o, s);
                    return t ? f(i) : f
                }(t, n, i);
                return Array.isArray(e) ? a(e, l) : a([e], ([e]) => l(e))
            }

            function a(e, t) {
                let n = (0, i.M)(() => []);
                return f(e, () => {
                    n.length = 0;
                    let r = e.length;
                    for (let t = 0; t < r; t++) n[t] = e[t].get();
                    return t(n)
                })
            }
        },
        28789: (e, t, n) => {
            n.d(t, {
                d: () => s
            });
            var r = n(50025),
                i = n(7787),
                l = n(16674),
                o = n(53459);

            function s(e) {
                let t = (0, o.M)(() => (0, r.OQ)(e)),
                    {
                        isStatic: n
                    } = (0, i.useContext)(l.Q);
                if (n) {
                    let [, n] = (0, i.useState)(e);
                    (0, i.useEffect)(() => t.on("change", n), [])
                }
                return t
            }
        },
        40407: (e, t, n) => {
            let r, i;
            n.d(t, {
                L: () => V
            });
            var l = n(50025),
                o = n(58917),
                s = n(7787),
                f = n(80696),
                u = n(15128);

            function c(e, t) {
                let n, r = () => {
                    let {
                        currentTime: r
                    } = t, i = (null === r ? 0 : r.value) / 100;
                    n !== i && e(i), n = i
                };
                return u.Gt.preUpdate(r, !0), () => (0, u.WG)(r)
            }
            var a = n(33221),
                d = n(39015),
                g = n(55123);
            let h = new WeakMap,
                p = (e, t, n) => (r, i) => i && i[0] ? i[0][e + "Size"] : (0, d.x)(r) && "getBBox" in r ? r.getBBox()[t] : r[n],
                y = p("inline", "width", "offsetWidth"),
                v = p("block", "height", "offsetHeight");

            function w({
                target: e,
                borderBoxSize: t
            }) {
                h.get(e)?.forEach(n => {
                    n(e, {
                        get width() {
                            return y(e, t)
                        },
                        get height() {
                            return v(e, t)
                        }
                    })
                })
            }

            function m(e) {
                e.forEach(w)
            }
            let b = new Set;
            var E = n(27533),
                x = n(65230);
            let W = () => ({
                    current: 0,
                    offset: [],
                    progress: 0,
                    scrollLength: 0,
                    targetOffset: 0,
                    targetLength: 0,
                    containerLength: 0,
                    velocity: 0
                }),
                L = {
                    x: {
                        length: "Width",
                        position: "Left"
                    },
                    y: {
                        length: "Height",
                        position: "Top"
                    }
                };

            function O(e, t, n, r) {
                let i = n[t],
                    {
                        length: l,
                        position: o
                    } = L[t],
                    s = i.current,
                    f = n.time;
                i.current = e[`scroll${o}`], i.scrollLength = e[`scroll${l}`] - e[`client${l}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = (0, E.q)(0, i.scrollLength, i.current);
                let u = r - f;
                i.velocity = u > 50 ? 0 : (0, x.f)(i.current - s, u)
            }
            var G = n(20292),
                k = n(99320),
                B = n(85683),
                H = n(56304);
            let z = {
                start: 0,
                center: .5,
                end: 1
            };

            function C(e, t, n = 0) {
                let r = 0;
                if (e in z && (e = z[e]), "string" == typeof e) {
                    let t = parseFloat(e);
                    e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t
                }
                return "number" == typeof e && (r = t * e), n + r
            }
            let M = [0, 0],
                S = {
                    All: [
                        [0, 0],
                        [1, 1]
                    ]
                },
                A = {
                    x: 0,
                    y: 0
                },
                N = new WeakMap,
                T = new WeakMap,
                _ = new WeakMap,
                I = e => e === document.scrollingElement ? window : e;

            function Q(e, {
                container: t = document.scrollingElement,
                ...n
            } = {}) {
                if (!t) return f.l;
                let l = _.get(t);
                l || (l = new Set, _.set(t, l));
                let o = function(e, t, n, r = {}) {
                    return {
                        measure: t => {
                            ! function(e, t = e, n) {
                                if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
                                    let r = t;
                                    for (; r && r !== e;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
                                }
                                n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
                            }(e, r.target, n), O(e, "x", n, t), O(e, "y", n, t), n.time = t, (r.offset || r.target) && function(e, t, n) {
                                let {
                                    offset: r = S.All
                                } = n, {
                                    target: i = e,
                                    axis: l = "y"
                                } = n, o = "y" === l ? "height" : "width", s = i !== e ? function(e, t) {
                                    let n = {
                                            x: 0,
                                            y: 0
                                        },
                                        r = e;
                                    for (; r && r !== t;)
                                        if ((0, H.s)(r)) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
                                        else if ("svg" === r.tagName) {
                                        let e = r.getBoundingClientRect(),
                                            t = (r = r.parentElement).getBoundingClientRect();
                                        n.x += e.left - t.left, n.y += e.top - t.top
                                    } else if (r instanceof SVGGraphicsElement) {
                                        let {
                                            x: e,
                                            y: t
                                        } = r.getBBox();
                                        n.x += e, n.y += t;
                                        let i = null,
                                            l = r.parentNode;
                                        for (; !i;) "svg" === l.tagName && (i = l), l = r.parentNode;
                                        r = i
                                    } else break;
                                    return n
                                }(i, e) : A, f = i === e ? {
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
                                    a = r.length;
                                for (let e = 0; e < a; e++) {
                                    let n = function(e, t, n, r) {
                                        let i = Array.isArray(e) ? e : M,
                                            l = 0;
                                        return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, z[e] ? e : "0"]), (l = C(i[0], n, r)) - C(i[1], t)
                                    }(r[e], u[o], f[o], s[l]);
                                    c || n === t[l].interpolatorOffsets[e] || (c = !0), t[l].offset[e] = n
                                }
                                c && (t[l].interpolate = (0, G.G)(t[l].offset, (0, k.Z)(r), {
                                    clamp: !1
                                }), t[l].interpolatorOffsets = [...t[l].offset]), t[l].progress = (0, B.q)(0, 1, t[l].interpolate(t[l].current))
                            }(e, n, r)
                        },
                        notify: () => t(n)
                    }
                }(t, e, {
                    time: 0,
                    x: W(),
                    y: W()
                }, n);
                if (l.add(o), !N.has(t)) {
                    let e = () => {
                            for (let e of l) e.measure(u.uv.timestamp);
                            u.Gt.preUpdate(n)
                        },
                        n = () => {
                            for (let e of l) e.notify()
                        },
                        o = () => u.Gt.read(e);
                    N.set(t, o);
                    let s = I(t);
                    window.addEventListener("resize", o, {
                        passive: !0
                    }), t !== document.documentElement && T.set(t, "function" == typeof t ? (b.add(t), i || (i = () => {
                        let e = {
                            get width() {
                                return window.innerWidth
                            },
                            get height() {
                                return window.innerHeight
                            }
                        };
                        b.forEach(t => t(e))
                    }, window.addEventListener("resize", i)), () => {
                        b.delete(t), b.size || "function" != typeof i || (window.removeEventListener("resize", i), i = void 0)
                    }) : function(e, t) {
                        r || "undefined" != typeof ResizeObserver && (r = new ResizeObserver(m));
                        let n = (0, g.K)(e);
                        return n.forEach(e => {
                            let n = h.get(e);
                            n || (n = new Set, h.set(e, n)), n.add(t), r?.observe(e)
                        }), () => {
                            n.forEach(e => {
                                let n = h.get(e);
                                n?.delete(t), n?.size || r?.unobserve(e)
                            })
                        }
                    }(t, o)), s.addEventListener("scroll", o, {
                        passive: !0
                    }), o()
                }
                let s = N.get(t);
                return u.Gt.read(s, !1, !0), () => {
                    (0, u.WG)(s);
                    let e = _.get(t);
                    if (!e || (e.delete(o), e.size)) return;
                    let n = N.get(t);
                    N.delete(t), n && (I(t).removeEventListener("scroll", n), T.get(t)?.(), window.removeEventListener("resize", n))
                }
            }
            let R = new Map;

            function P({
                source: e,
                container: t,
                ...n
            }) {
                let {
                    axis: r
                } = n;
                e && (t = e);
                let i = R.get(t) ?? new Map;
                R.set(t, i);
                let l = n.target ?? "self",
                    o = i.get(l) ?? {},
                    s = r + (n.offset ?? []).join(",");
                return o[s] || (o[s] = !n.target && (0, a.J)() ? new ScrollTimeline({
                    source: t,
                    axis: r
                }) : function(e) {
                    let t = {
                            value: 0
                        },
                        n = Q(n => {
                            t.value = 100 * n[e.axis].progress
                        }, e);
                    return {
                        currentTime: t,
                        cancel: n
                    }
                }({
                    container: t,
                    ...n
                })), o[s]
            }
            var D = n(53459),
                X = n(96332);
            let Y = () => ({
                    scrollX: (0, l.OQ)(0),
                    scrollY: (0, l.OQ)(0),
                    scrollXProgress: (0, l.OQ)(0),
                    scrollYProgress: (0, l.OQ)(0)
                }),
                U = e => !!e && !e.current;

            function V({
                container: e,
                target: t,
                ...n
            } = {}) {
                let r = (0, D.M)(Y),
                    i = (0, s.useRef)(null),
                    l = (0, s.useRef)(!1),
                    u = (0, s.useCallback)(() => (i.current = function(e, {
                        axis: t = "y",
                        container: n = document.scrollingElement,
                        ...r
                    } = {}) {
                        var i, l;
                        if (!n) return f.l;
                        let o = {
                            axis: t,
                            container: n,
                            ...r
                        };
                        return "function" == typeof e ? (i = e, l = o, 2 === i.length ? Q(e => {
                            i(e[l.axis].progress, e)
                        }, l) : c(i, P(l))) : function(e, t) {
                            let n = P(t);
                            return e.attachTimeline({
                                timeline: t.target ? void 0 : n,
                                observe: e => (e.pause(), c(t => {
                                    e.time = e.iterationDuration * t
                                }, n))
                            })
                        }(e, o)
                    }((e, {
                        x: t,
                        y: n
                    }) => {
                        r.scrollX.set(t.current), r.scrollXProgress.set(t.progress), r.scrollY.set(n.current), r.scrollYProgress.set(n.progress)
                    }, {
                        ...n,
                        container: e?.current || void 0,
                        target: t?.current || void 0
                    }), () => {
                        i.current?.()
                    }), [e, t, JSON.stringify(n.offset)]);
                return (0, X.E)(() => {
                    if (l.current = !1, !(U(e) || U(t))) return u();
                    l.current = !0
                }, [u]), (0, s.useEffect)(() => l.current ? ((0, o.V)(!U(e), "Container ref is defined but not hydrated", "use-scroll-ref"), (0, o.V)(!U(t), "Target ref is defined but not hydrated", "use-scroll-ref"), u()) : void 0, [u]), r
            }
        },
        56304: (e, t, n) => {
            n.d(t, {
                s: () => i
            });
            var r = n(5130);

            function i(e) {
                return (0, r.G)(e) && "offsetHeight" in e
            }
        },
        73500: (e, t, n) => {
            n.d(t, {
                xQ: () => l
            });
            var r = n(7787),
                i = n(16187);

            function l(e = !0) {
                let t = (0, r.useContext)(i.t);
                if (null === t) return [!0, null];
                let {
                    isPresent: n,
                    onExitComplete: o,
                    register: s
                } = t, f = (0, r.useId)();
                (0, r.useEffect)(() => {
                    if (e) return s(f)
                }, [e]);
                let u = (0, r.useCallback)(() => e && o && o(f), [f, o, e]);
                return !n && o ? [!1, u] : [!0]
            }
        },
        96262: (e, t, n) => {
            n.d(t, {
                I: () => o
            });
            var r = n(7787),
                i = n(80085),
                l = n(73242);

            function o() {
                l.r.current || (0, i.U)();
                let [e] = (0, r.useState)(l.O.current);
                return e
            }
        }
    }
]);