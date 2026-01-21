try {
    ! function() {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "1a35e59e-ba60-44c6-a2ad-97c432854a36", e._sentryDebugIdIdentifier = "sentry-dbid-1a35e59e-ba60-44c6-a2ad-97c432854a36")
    }()
} catch (e) {}! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                if (null != n)
                    for (var r in n) n.hasOwnProperty(r) && (e[r] = n[r])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [38375], {
        8799: (e, t, n) => {
            let r, o;
            n.d(t, {
                L: () => V
            });
            var l = n(43885),
                i = n(92705),
                s = n(53163),
                f = n(16076),
                u = n(33484);

            function a(e, t) {
                let n, r = () => {
                    let {
                        currentTime: r
                    } = t, o = (null === r ? 0 : r.value) / 100;
                    n !== o && e(o), n = o
                };
                return u.Gt.preUpdate(r, !0), () => (0, u.WG)(r)
            }
            var c = n(43793),
                d = n(48011),
                g = n(74247);
            let h = new WeakMap,
                p = (e, t, n) => (r, o) => o && o[0] ? o[0][e + "Size"] : (0, d.x)(r) && "getBBox" in r ? r.getBBox()[t] : r[n],
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
            var E = n(86209),
                x = n(57058);
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

            function M(e, t, n, r) {
                let o = n[t],
                    {
                        length: l,
                        position: i
                    } = L[t],
                    s = o.current,
                    f = n.time;
                o.current = e[`scroll${i}`], o.scrollLength = e[`scroll${l}`] - e[`client${l}`], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = (0, E.q)(0, o.scrollLength, o.current);
                let u = r - f;
                o.velocity = u > 50 ? 0 : (0, x.f)(o.current - s, u)
            }
            var O = n(76416),
                k = n(4324),
                G = n(81095),
                B = n(63796);
            let _ = {
                start: 0,
                center: .5,
                end: 1
            };

            function H(e, t, n = 0) {
                let r = 0;
                if (e in _ && (e = _[e]), "string" == typeof e) {
                    let t = parseFloat(e);
                    e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t
                }
                return "number" == typeof e && (r = t * e), n + r
            }
            let z = [0, 0],
                T = {
                    All: [
                        [0, 0],
                        [1, 1]
                    ]
                },
                A = {
                    x: 0,
                    y: 0
                },
                C = new WeakMap,
                S = new WeakMap,
                N = new WeakMap,
                P = e => e === document.scrollingElement ? window : e;

            function I(e, {
                container: t = document.scrollingElement,
                ...n
            } = {}) {
                if (!t) return f.l;
                let l = N.get(t);
                l || (l = new Set, N.set(t, l));
                let i = function(e, t, n, r = {}) {
                    return {
                        measure: t => {
                            ! function(e, t = e, n) {
                                if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
                                    let r = t;
                                    for (; r && r !== e;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
                                }
                                n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
                            }(e, r.target, n), M(e, "x", n, t), M(e, "y", n, t), n.time = t, (r.offset || r.target) && function(e, t, n) {
                                let {
                                    offset: r = T.All
                                } = n, {
                                    target: o = e,
                                    axis: l = "y"
                                } = n, i = "y" === l ? "height" : "width", s = o !== e ? function(e, t) {
                                    let n = {
                                            x: 0,
                                            y: 0
                                        },
                                        r = e;
                                    for (; r && r !== t;)
                                        if ((0, B.s)(r)) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
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
                                        let o = null,
                                            l = r.parentNode;
                                        for (; !o;) "svg" === l.tagName && (o = l), l = r.parentNode;
                                        r = o
                                    } else break;
                                    return n
                                }(o, e) : A, f = o === e ? {
                                    width: e.scrollWidth,
                                    height: e.scrollHeight
                                } : "getBBox" in o && "svg" !== o.tagName ? o.getBBox() : {
                                    width: o.clientWidth,
                                    height: o.clientHeight
                                }, u = {
                                    width: e.clientWidth,
                                    height: e.clientHeight
                                };
                                t[l].offset.length = 0;
                                let a = !t[l].interpolate,
                                    c = r.length;
                                for (let e = 0; e < c; e++) {
                                    let n = function(e, t, n, r) {
                                        let o = Array.isArray(e) ? e : z,
                                            l = 0;
                                        return "number" == typeof e ? o = [e, e] : "string" == typeof e && (o = (e = e.trim()).includes(" ") ? e.split(" ") : [e, _[e] ? e : "0"]), (l = H(o[0], n, r)) - H(o[1], t)
                                    }(r[e], u[i], f[i], s[l]);
                                    a || n === t[l].interpolatorOffsets[e] || (a = !0), t[l].offset[e] = n
                                }
                                a && (t[l].interpolate = (0, O.G)(t[l].offset, (0, k.Z)(r), {
                                    clamp: !1
                                }), t[l].interpolatorOffsets = [...t[l].offset]), t[l].progress = (0, G.q)(0, 1, t[l].interpolate(t[l].current))
                            }(e, n, r)
                        },
                        notify: () => t(n)
                    }
                }(t, e, {
                    time: 0,
                    x: W(),
                    y: W()
                }, n);
                if (l.add(i), !C.has(t)) {
                    let e = () => {
                            for (let e of l) e.measure(u.uv.timestamp);
                            u.Gt.preUpdate(n)
                        },
                        n = () => {
                            for (let e of l) e.notify()
                        },
                        i = () => u.Gt.read(e);
                    C.set(t, i);
                    let s = P(t);
                    window.addEventListener("resize", i, {
                        passive: !0
                    }), t !== document.documentElement && S.set(t, "function" == typeof t ? (b.add(t), o || (o = () => {
                        let e = {
                            get width() {
                                return window.innerWidth
                            },
                            get height() {
                                return window.innerHeight
                            }
                        };
                        b.forEach(t => t(e))
                    }, window.addEventListener("resize", o)), () => {
                        b.delete(t), b.size || "function" != typeof o || (window.removeEventListener("resize", o), o = void 0)
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
                    }(t, i)), s.addEventListener("scroll", i, {
                        passive: !0
                    }), i()
                }
                let s = C.get(t);
                return u.Gt.read(s, !1, !0), () => {
                    (0, u.WG)(s);
                    let e = N.get(t);
                    if (!e || (e.delete(i), e.size)) return;
                    let n = C.get(t);
                    C.delete(t), n && (P(t).removeEventListener("scroll", n), S.get(t)?.(), window.removeEventListener("resize", n))
                }
            }
            let Q = new Map;

            function R({
                source: e,
                container: t,
                ...n
            }) {
                let {
                    axis: r
                } = n;
                e && (t = e);
                let o = Q.get(t) ?? new Map;
                Q.set(t, o);
                let l = n.target ?? "self",
                    i = o.get(l) ?? {},
                    s = r + (n.offset ?? []).join(",");
                return i[s] || (i[s] = !n.target && (0, c.J)() ? new ScrollTimeline({
                    source: t,
                    axis: r
                }) : function(e) {
                    let t = {
                            value: 0
                        },
                        n = I(n => {
                            t.value = 100 * n[e.axis].progress
                        }, e);
                    return {
                        currentTime: t,
                        cancel: n
                    }
                }({
                    container: t,
                    ...n
                })), i[s]
            }
            var D = n(46964),
                X = n(72757);
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
                    o = (0, s.useRef)(null),
                    l = (0, s.useRef)(!1),
                    u = (0, s.useCallback)(() => (o.current = function(e, {
                        axis: t = "y",
                        container: n = document.scrollingElement,
                        ...r
                    } = {}) {
                        var o, l;
                        if (!n) return f.l;
                        let i = {
                            axis: t,
                            container: n,
                            ...r
                        };
                        return "function" == typeof e ? (o = e, l = i, 2 === o.length ? I(e => {
                            o(e[l.axis].progress, e)
                        }, l) : a(o, R(l))) : function(e, t) {
                            let n = R(t);
                            return e.attachTimeline({
                                timeline: t.target ? void 0 : n,
                                observe: e => (e.pause(), a(t => {
                                    e.time = e.iterationDuration * t
                                }, n))
                            })
                        }(e, i)
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
                        o.current?.()
                    }), [e, t, JSON.stringify(n.offset)]);
                return (0, X.E)(() => {
                    if (l.current = !1, !(U(e) || U(t))) return u();
                    l.current = !0
                }, [u]), (0, s.useEffect)(() => l.current ? ((0, i.V)(!U(e), "Container ref is defined but not hydrated", "use-scroll-ref"), (0, i.V)(!U(t), "Target ref is defined but not hydrated", "use-scroll-ref"), u()) : void 0, [u]), r
            }
        },
        17299: (e, t, n) => {
            n.d(t, {
                G: () => a
            });
            var r = n(76416),
                o = n(46964),
                l = n(33484),
                i = n(72757),
                s = n(48122);

            function f(e, t) {
                let n = (0, s.d)(t()),
                    r = () => n.set(t());
                return r(), (0, i.E)(() => {
                    let t = () => l.Gt.preRender(r, !1, !0),
                        n = e.map(e => e.on("change", t));
                    return () => {
                        n.forEach(e => e()), (0, l.WG)(r)
                    }
                }), n
            }
            var u = n(43885);

            function a(e, t, n, o) {
                if ("function" == typeof e) {
                    u.bt.current = [], e();
                    let t = f(u.bt.current, e);
                    return u.bt.current = void 0, t
                }
                let l = "function" == typeof t ? t : function(...e) {
                    let t = !Array.isArray(e[0]),
                        n = t ? 0 : -1,
                        o = e[0 + n],
                        l = e[1 + n],
                        i = e[2 + n],
                        s = e[3 + n],
                        f = (0, r.G)(l, i, s);
                    return t ? f(o) : f
                }(t, n, o);
                return Array.isArray(e) ? c(e, l) : c([e], ([e]) => l(e))
            }

            function c(e, t) {
                let n = (0, o.M)(() => []);
                return f(e, () => {
                    n.length = 0;
                    let r = e.length;
                    for (let t = 0; t < r; t++) n[t] = e[t].get();
                    return t(n)
                })
            }
        },
        48122: (e, t, n) => {
            n.d(t, {
                d: () => s
            });
            var r = n(43885),
                o = n(53163),
                l = n(72515),
                i = n(46964);

            function s(e) {
                let t = (0, i.M)(() => (0, r.OQ)(e)),
                    {
                        isStatic: n
                    } = (0, o.useContext)(l.Q);
                if (n) {
                    let [, n] = (0, o.useState)(e);
                    (0, o.useEffect)(() => t.on("change", n), [])
                }
                return t
            }
        },
        51934: (e, t, n) => {
            n.d(t, {
                G: () => r
            });

            function r(e) {
                return "object" == typeof e && null !== e
            }
        },
        58107: (e, t, n) => {
            n.d(t, {
                I: () => i
            });
            var r = n(53163),
                o = n(92770),
                l = n(16113);

            function i() {
                l.r.current || (0, o.U)();
                let [e] = (0, r.useState)(l.O.current);
                return e
            }
        },
        63796: (e, t, n) => {
            n.d(t, {
                s: () => o
            });
            var r = n(51934);

            function o(e) {
                return (0, r.G)(e) && "offsetHeight" in e
            }
        },
        75213: (e, t, n) => {
            n.d(t, {
                xQ: () => l
            });
            var r = n(53163),
                o = n(94634);

            function l(e = !0) {
                let t = (0, r.useContext)(o.t);
                if (null === t) return [!0, null];
                let {
                    isPresent: n,
                    onExitComplete: i,
                    register: s
                } = t, f = (0, r.useId)();
                (0, r.useEffect)(() => {
                    if (e) return s(f)
                }, [e]);
                let u = (0, r.useCallback)(() => e && i && i(f), [f, i, e]);
                return !n && i ? [!1, u] : [!0]
            }
        }
    }
]);