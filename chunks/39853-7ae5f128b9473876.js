try {
    let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "5e2603dd-fd9d-4cbd-a3e5-ff82c32aba97", t._sentryDebugIdIdentifier = "sentry-dbid-5e2603dd-fd9d-4cbd-a3e5-ff82c32aba97")
} catch (t) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [39853], {
        2288: (t, e, r) => {
            function n(t) {
                let e = [{}, {}];
                return t?.values.forEach((t, r) => {
                    e[0][r] = t.get(), e[1][r] = t.getVelocity()
                }), e
            }

            function o(t, e, r, o) {
                if ("function" == typeof e) {
                    let [a, i] = n(o);
                    e = e(void 0 !== r ? r : t.custom, a, i)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [a, i] = n(o);
                    e = e(void 0 !== r ? r : t.custom, a, i)
                }
                return e
            }
            r.d(e, {
                a: () => o
            })
        },
        6091: (t, e, r) => {
            r.d(e, {
                x: () => a
            });
            var n = r(42620),
                o = r(74008);

            function a(t, e, r) {
                let {
                    style: a
                } = t, i = {};
                for (let s in a)((0, n.S)(a[s]) || e.style && (0, n.S)(e.style[s]) || (0, o.z)(s, t) || r?.getValue(s)?.liveStyle !== void 0) && (i[s] = a[s]);
                return i
            }
        },
        14463: (t, e, r) => {
            r.d(e, {
                Y: () => o
            });
            var n = r(87961);

            function o(t) {
                for (let e in t) n.B[e] = {
                    ...n.B[e],
                    ...t[e]
                }
            }
        },
        23887: (t, e, r) => {
            r.d(e, {
                u: () => o
            });
            var n = r(42620);

            function o(t) {
                return (0, n.S)(t) ? t.get() : t
            }
        },
        29213: (t, e, r) => {
            r.d(e, {
                Y: () => n
            });
            let n = (0, r(53163).createContext)({
                strict: !1
            })
        },
        30597: (t, e, r) => {
            r.d(e, {
                O: () => u
            });
            var n = r(79433),
                o = r(51565);
            let a = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
            var i = r(54073);
            let s = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                l = n.U.length;

            function u(t, e, r) {
                let {
                    style: u,
                    vars: f,
                    transformOrigin: d
                } = t, p = !1, c = !1;
                for (let t in e) {
                    let r = e[t];
                    if (n.f.has(t)) {
                        p = !0;
                        continue
                    }
                    if ((0, o.j)(t)) {
                        f[t] = r;
                        continue
                    } {
                        let e = a(r, i.W[t]);
                        t.startsWith("origin") ? (c = !0, d[t] = e) : u[t] = e
                    }
                }
                if (!e.transform && (p || r ? u.transform = function(t, e, r) {
                        let o = "",
                            u = !0;
                        for (let f = 0; f < l; f++) {
                            let l = n.U[f],
                                d = t[l];
                            if (void 0 === d) continue;
                            let p = !0;
                            if (!(p = "number" == typeof d ? d === +!!l.startsWith("scale") : 0 === parseFloat(d)) || r) {
                                let t = a(d, i.W[l]);
                                if (!p) {
                                    u = !1;
                                    let e = s[l] || l;
                                    o += `${e}(${t}) `
                                }
                                r && (e[l] = t)
                            }
                        }
                        return o = o.trim(), r ? o = r(e, u ? "" : o) : u && (o = "none"), o
                    }(e, t.transform, r) : u.transform && (u.transform = "none")), c) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: r = 0
                    } = d;
                    u.transformOrigin = `${t} ${e} ${r}`
                }
            }
        },
        31775: (t, e, r) => {
            r.d(e, {
                N: () => n
            });

            function n(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
        },
        36369: (t, e, r) => {
            r.d(e, {
                U: () => n,
                _: () => o
            });
            let n = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                o = ["initial", ...n]
        },
        39853: (t, e, r) => {
            r.d(e, {
                H: () => o
            });
            var n = r(96614);

            function o(t, e) {
                if ("undefined" == typeof Proxy) return n.G;
                let r = new Map,
                    o = (r, o) => (0, n.G)(r, o, t, e);
                return new Proxy((t, e) => o(t, e), {
                    get: (a, i) => "create" === i ? o : (r.has(i) || r.set(i, (0, n.G)(i, void 0, t, e)), r.get(i))
                })
            }
        },
        42620: (t, e, r) => {
            r.d(e, {
                S: () => n
            });
            let n = t => !!(t && t.getVelocity)
        },
        46776: (t, e, r) => {
            r.d(e, {
                X4: () => a,
                ai: () => o,
                hs: () => i
            });
            var n = r(81095);
            let o = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                a = {
                    ...o,
                    transform: t => (0, n.q)(0, 1, t)
                },
                i = {
                    ...o,
                    default: 1
                }
        },
        46964: (t, e, r) => {
            r.d(e, {
                M: () => o
            });
            var n = r(53163);

            function o(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        48093: (t, e, r) => {
            r.d(e, {
                B: () => n
            });
            let n = "undefined" != typeof window
        },
        48338: (t, e, r) => {
            r.d(e, {
                w: () => n
            });

            function n(t) {
                return "string" == typeof t || Array.isArray(t)
            }
        },
        51565: (t, e, r) => {
            r.d(e, {
                j: () => o,
                p: () => i
            });
            let n = t => e => "string" == typeof e && e.startsWith(t),
                o = n("--"),
                a = n("var(--"),
                i = t => !!a(t) && s.test(t.split("/*")[0].trim()),
                s = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
        },
        54073: (t, e, r) => {
            r.d(e, {
                W: () => s
            });
            var n = r(46776);
            let o = {
                ...n.ai,
                transform: Math.round
            };
            var a = r(80145);
            let i = {
                    rotate: a.uj,
                    rotateX: a.uj,
                    rotateY: a.uj,
                    rotateZ: a.uj,
                    scale: n.hs,
                    scaleX: n.hs,
                    scaleY: n.hs,
                    scaleZ: n.hs,
                    skew: a.uj,
                    skewX: a.uj,
                    skewY: a.uj,
                    distance: a.px,
                    translateX: a.px,
                    translateY: a.px,
                    translateZ: a.px,
                    x: a.px,
                    y: a.px,
                    z: a.px,
                    perspective: a.px,
                    transformPerspective: a.px,
                    opacity: n.X4,
                    originX: a.gQ,
                    originY: a.gQ,
                    originZ: a.px
                },
                s = {
                    borderWidth: a.px,
                    borderTopWidth: a.px,
                    borderRightWidth: a.px,
                    borderBottomWidth: a.px,
                    borderLeftWidth: a.px,
                    borderRadius: a.px,
                    radius: a.px,
                    borderTopLeftRadius: a.px,
                    borderTopRightRadius: a.px,
                    borderBottomRightRadius: a.px,
                    borderBottomLeftRadius: a.px,
                    width: a.px,
                    maxWidth: a.px,
                    height: a.px,
                    maxHeight: a.px,
                    top: a.px,
                    right: a.px,
                    bottom: a.px,
                    left: a.px,
                    padding: a.px,
                    paddingTop: a.px,
                    paddingRight: a.px,
                    paddingBottom: a.px,
                    paddingLeft: a.px,
                    margin: a.px,
                    marginTop: a.px,
                    marginRight: a.px,
                    marginBottom: a.px,
                    marginLeft: a.px,
                    backgroundPositionX: a.px,
                    backgroundPositionY: a.px,
                    ...i,
                    zIndex: o,
                    fillOpacity: n.X4,
                    strokeOpacity: n.X4,
                    numOctaves: o
                }
        },
        58336: (t, e, r) => {
            r.d(e, {
                O: () => s,
                e: () => i
            });
            var n = r(31775),
                o = r(48338),
                a = r(36369);

            function i(t) {
                return (0, n.N)(t.animate) || a._.some(e => (0, o.w)(t[e]))
            }

            function s(t) {
                return !!(i(t) || t.variants)
            }
        },
        66692: (t, e, r) => {
            r.d(e, {
                n: () => n
            });
            let n = t => "string" == typeof t && "svg" === t.toLowerCase()
        },
        72515: (t, e, r) => {
            r.d(e, {
                Q: () => n
            });
            let n = (0, r(53163).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        72757: (t, e, r) => {
            r.d(e, {
                E: () => o
            });
            var n = r(53163);
            let o = r(48093).B ? n.useLayoutEffect : n.useEffect
        },
        74008: (t, e, r) => {
            r.d(e, {
                z: () => a
            });
            var n = r(79433),
                o = r(97904);

            function a(t, {
                layout: e,
                layoutId: r
            }) {
                return n.f.has(t) || t.startsWith("origin") || (e || void 0 !== r) && (!!o.H[t] || "opacity" === t)
            }
        },
        75010: (t, e, r) => {
            r.d(e, {
                Q: () => o
            });
            let n = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function o(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (n.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }
        },
        75813: (t, e, r) => {
            r.d(e, {
                n: () => n
            });
            let n = "data-" + (0, r(84299).I)("framerAppearId")
        },
        79433: (t, e, r) => {
            r.d(e, {
                U: () => n,
                f: () => o
            });
            let n = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                o = new Set(n)
        },
        80145: (t, e, r) => {
            r.d(e, {
                KN: () => a,
                gQ: () => u,
                px: () => i,
                uj: () => o,
                vh: () => s,
                vw: () => l
            });
            let n = t => ({
                    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                o = n("deg"),
                a = n("%"),
                i = n("px"),
                s = n("vh"),
                l = n("vw"),
                u = {
                    ...a,
                    parse: t => a.parse(t) / 100,
                    transform: t => a.transform(100 * t)
                }
        },
        81095: (t, e, r) => {
            r.d(e, {
                q: () => n
            });
            let n = (t, e, r) => r > e ? e : r < t ? t : r
        },
        84299: (t, e, r) => {
            r.d(e, {
                I: () => n
            });
            let n = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
        },
        84736: (t, e, r) => {
            r.d(e, {
                N: () => n
            });
            let n = (0, r(53163).createContext)({})
        },
        86636: (t, e, r) => {
            r.d(e, {
                X: () => n
            });

            function n(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
        },
        87961: (t, e, r) => {
            r.d(e, {
                B: () => o
            });
            let n = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                o = {};
            for (let t in n) o[t] = {
                isEnabled: e => n[t].some(t => !!e[t])
            }
        },
        89212: (t, e, r) => {
            r.d(e, {
                L: () => n
            });
            let n = (0, r(53163).createContext)({})
        },
        93636: (t, e, r) => {
            r.d(e, {
                x: () => i
            });
            var n = r(42620),
                o = r(79433),
                a = r(6091);

            function i(t, e, r) {
                let i = (0, a.x)(t, e, r);
                for (let r in t)((0, n.S)(t[r]) || (0, n.S)(e[r])) && (i[-1 !== o.U.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = t[r]);
                return i
            }
        },
        94634: (t, e, r) => {
            r.d(e, {
                t: () => n
            });
            let n = (0, r(53163).createContext)(null)
        },
        96599: (t, e, r) => {
            r.d(e, {
                B: () => s
            });
            var n = r(30597),
                o = r(80145);
            let a = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                i = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function s(t, {
                attrX: e,
                attrY: r,
                attrScale: s,
                pathLength: l,
                pathSpacing: u = 1,
                pathOffset: f = 0,
                ...d
            }, p, c, m) {
                if ((0, n.O)(t, d, c), p) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: g,
                    style: y
                } = t;
                g.transform && (y.transform = g.transform, delete g.transform), (y.transform || g.transformOrigin) && (y.transformOrigin = g.transformOrigin ?? "50% 50%", delete g.transformOrigin), y.transform && (y.transformBox = m?.transformBox ?? "fill-box", delete g.transformBox), void 0 !== e && (g.x = e), void 0 !== r && (g.y = r), void 0 !== s && (g.scale = s), void 0 !== l && function(t, e, r = 1, n = 0, s = !0) {
                    t.pathLength = 1;
                    let l = s ? a : i;
                    t[l.offset] = o.px.transform(-n);
                    let u = o.px.transform(e),
                        f = o.px.transform(r);
                    t[l.array] = `${u} ${f}`
                }(g, l, u, f, !1)
            }
        },
        96614: (t, e, r) => {
            r.d(e, {
                G: () => $
            });
            var n = r(32475),
                o = r(53163),
                a = r(89212),
                i = r(29213),
                s = r(72515);
            let l = (0, o.createContext)({});
            var u = r(58336),
                f = r(48338);

            function d(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            var p = r(42620),
                c = r(74008),
                m = r(30597);
            let g = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function y(t, e, r) {
                for (let n in e)(0, p.S)(e[n]) || (0, c.z)(n, r) || (t[n] = e[n])
            }
            var x = r(96599);
            let v = () => ({
                ...g(),
                attrs: {}
            });
            var h = r(66692);
            let w = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

            function b(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || t.startsWith("onLayout") || w.has(t)
            }
            let C = t => !b(t);
            try {
                ! function(t) {
                    "function" == typeof t && (C = e => e.startsWith("on") ? !b(e) : t(e))
                }(require("@emotion/is-prop-valid").default)
            } catch {}
            var S = r(75010),
                j = r(31775),
                k = r(94634),
                M = r(2288),
                E = r(46964),
                T = r(23887);
            let W = t => (e, r) => {
                    let n = (0, o.useContext)(l),
                        a = (0, o.useContext)(k.t),
                        i = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e
                        }, r, n, o) {
                            return {
                                latestValues: function(t, e, r, n) {
                                    let o = {},
                                        a = n(t, {});
                                    for (let t in a) o[t] = (0, T.u)(a[t]);
                                    let {
                                        initial: i,
                                        animate: s
                                    } = t, l = (0, u.e)(t), f = (0, u.O)(t);
                                    e && f && !l && !1 !== t.inherit && (void 0 === i && (i = e.initial), void 0 === s && (s = e.animate));
                                    let d = !!r && !1 === r.initial,
                                        p = (d = d || !1 === i) ? s : i;
                                    if (p && "boolean" != typeof p && !(0, j.N)(p)) {
                                        let e = Array.isArray(p) ? p : [p];
                                        for (let r = 0; r < e.length; r++) {
                                            let n = (0, M.a)(t, e[r]);
                                            if (n) {
                                                let {
                                                    transitionEnd: t,
                                                    transition: e,
                                                    ...r
                                                } = n;
                                                for (let t in r) {
                                                    let e = r[t];
                                                    if (Array.isArray(e)) {
                                                        let t = d ? e.length - 1 : 0;
                                                        e = e[t]
                                                    }
                                                    null !== e && (o[t] = e)
                                                }
                                                for (let e in t) o[e] = t[e]
                                            }
                                        }
                                    }
                                    return o
                                }(r, n, o, t),
                                renderState: e()
                            }
                        })(t, e, n, a);
                    return r ? i() : (0, E.M)(i)
                },
                O = W({
                    scrapeMotionValuesFromProps: r(6091).x,
                    createRenderState: g
                }),
                P = W({
                    scrapeMotionValuesFromProps: r(93636).x,
                    createRenderState: v
                });
            var B = r(48093),
                L = r(87961),
                I = r(14463);
            let X = Symbol.for("motionComponentSymbol");
            var A = r(86636),
                R = r(75813),
                Y = r(84736),
                V = r(72757);

            function $(t, {
                forwardMotionProps: e = !1
            } = {}, r, c) {
                r && (0, I.Y)(r);
                let w = (0, S.Q)(t) ? P : O;

                function j(r, j) {
                    var M;
                    let E, T = {
                            ...(0, o.useContext)(s.Q),
                            ...r,
                            layoutId: function({
                                layoutId: t
                            }) {
                                let e = (0, o.useContext)(a.L).id;
                                return e && void 0 !== t ? e + "-" + t : t
                            }(r)
                        },
                        {
                            isStatic: W
                        } = T,
                        O = function(t) {
                            let {
                                initial: e,
                                animate: r
                            } = function(t, e) {
                                if ((0, u.e)(t)) {
                                    let {
                                        initial: e,
                                        animate: r
                                    } = t;
                                    return {
                                        initial: !1 === e || (0, f.w)(e) ? e : void 0,
                                        animate: (0, f.w)(r) ? r : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, (0, o.useContext)(l));
                            return (0, o.useMemo)(() => ({
                                initial: e,
                                animate: r
                            }), [d(e), d(r)])
                        }(r),
                        P = w(r, W);
                    if (!W && B.B) {
                        (0, o.useContext)(i.Y).strict;
                        let e = function(t) {
                            let {
                                drag: e,
                                layout: r
                            } = L.B;
                            if (!e && !r) return {};
                            let n = {
                                ...e,
                                ...r
                            };
                            return {
                                MeasureLayout: e?.isEnabled(t) || r?.isEnabled(t) ? n.MeasureLayout : void 0,
                                ProjectionNode: n.ProjectionNode
                            }
                        }(T);
                        E = e.MeasureLayout, O.visualElement = function(t, e, r, n, a) {
                            let {
                                visualElement: u
                            } = (0, o.useContext)(l), f = (0, o.useContext)(i.Y), d = (0, o.useContext)(k.t), p = (0, o.useContext)(s.Q).reducedMotion, c = (0, o.useRef)(null);
                            n = n || f.renderer, !c.current && n && (c.current = n(t, {
                                visualState: e,
                                parent: u,
                                props: r,
                                presenceContext: d,
                                blockInitialAnimation: !!d && !1 === d.initial,
                                reducedMotionConfig: p
                            }));
                            let m = c.current,
                                g = (0, o.useContext)(Y.N);
                            m && !m.projection && a && ("html" === m.type || "svg" === m.type) && function(t, e, r, n) {
                                let {
                                    layoutId: o,
                                    layout: a,
                                    drag: i,
                                    dragConstraints: s,
                                    layoutScroll: l,
                                    layoutRoot: u,
                                    layoutCrossfade: f
                                } = e;
                                t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                    if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                }(t.parent)), t.projection.setOptions({
                                    layoutId: o,
                                    layout: a,
                                    alwaysMeasureLayout: !!i || s && (0, A.X)(s),
                                    visualElement: t,
                                    animationType: "string" == typeof a ? a : "both",
                                    initialPromotionConfig: n,
                                    crossfade: f,
                                    layoutScroll: l,
                                    layoutRoot: u
                                })
                            }(c.current, r, a, g);
                            let y = (0, o.useRef)(!1);
                            (0, o.useInsertionEffect)(() => {
                                m && y.current && m.update(r, d)
                            });
                            let x = r[R.n],
                                v = (0, o.useRef)(!!x && !window.MotionHandoffIsComplete?.(x) && window.MotionHasOptimisedAnimation?.(x));
                            return (0, V.E)(() => {
                                m && (y.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), v.current && m.animationState && m.animationState.animateChanges())
                            }), (0, o.useEffect)(() => {
                                m && (!v.current && m.animationState && m.animationState.animateChanges(), v.current && (queueMicrotask(() => {
                                    window.MotionHandoffMarkAsComplete?.(x)
                                }), v.current = !1), m.enteringChildren = void 0)
                            }), m
                        }(t, P, T, c, e.ProjectionNode)
                    }
                    return (0, n.jsxs)(l.Provider, {
                        value: O,
                        children: [E && O.visualElement ? (0, n.jsx)(E, {
                            visualElement: O.visualElement,
                            ...T
                        }) : null, function(t, e, r, {
                            latestValues: n
                        }, a, i = !1) {
                            let s = ((0, S.Q)(t) ? function(t, e, r, n) {
                                    let a = (0, o.useMemo)(() => {
                                        let r = v();
                                        return (0, x.B)(r, e, (0, h.n)(n), t.transformTemplate, t.style), {
                                            ...r.attrs,
                                            style: {
                                                ...r.style
                                            }
                                        }
                                    }, [e]);
                                    if (t.style) {
                                        let e = {};
                                        y(e, t.style, t), a.style = {
                                            ...e,
                                            ...a.style
                                        }
                                    }
                                    return a
                                } : function(t, e) {
                                    let r = {},
                                        n = function(t, e) {
                                            let r = t.style || {},
                                                n = {};
                                            return y(n, r, t), Object.assign(n, function({
                                                transformTemplate: t
                                            }, e) {
                                                return (0, o.useMemo)(() => {
                                                    let r = g();
                                                    return (0, m.O)(r, e, t), Object.assign({}, r.vars, r.style)
                                                }, [e])
                                            }(t, e)), n
                                        }(t, e);
                                    return t.drag && !1 !== t.dragListener && (r.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = n, r
                                })(e, n, a, t),
                                l = function(t, e, r) {
                                    let n = {};
                                    for (let o in t)("values" !== o || "object" != typeof t.values) && (C(o) || !0 === r && b(o) || !e && !b(o) || t.draggable && o.startsWith("onDrag")) && (n[o] = t[o]);
                                    return n
                                }(e, "string" == typeof t, i),
                                u = t !== o.Fragment ? {
                                    ...l,
                                    ...s,
                                    ref: r
                                } : {},
                                {
                                    children: f
                                } = e,
                                d = (0, o.useMemo)(() => (0, p.S)(f) ? f.get() : f, [f]);
                            return (0, o.createElement)(t, {
                                ...u,
                                children: d
                            })
                        }(t, r, (M = O.visualElement, (0, o.useCallback)(t => {
                            t && P.onMount && P.onMount(t), M && (t ? M.mount(t) : M.unmount()), j && ("function" == typeof j ? j(t) : (0, A.X)(j) && (j.current = t))
                        }, [M])), P, W, e)]
                    })
                }
                j.displayName = `motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;
                let M = (0, o.forwardRef)(j);
                return M[X] = t, M
            }
        },
        97904: (t, e, r) => {
            r.d(e, {
                $: () => a,
                H: () => o
            });
            var n = r(51565);
            let o = {};

            function a(t) {
                for (let e in t) o[e] = t[e], (0, n.j)(e) && (o[e].isCSSVariable = !0)
            }
        }
    }
]);