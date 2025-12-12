try {
    let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "3fbbd8af-0ec6-485d-89f8-c8aaa675dc4f", t._sentryDebugIdIdentifier = "sentry-dbid-3fbbd8af-0ec6-485d-89f8-c8aaa675dc4f")
} catch (t) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [61039], {
        4890: (t, e, r) => {
            r.d(e, {
                G: () => $
            });
            var n = r(22650),
                a = r(11698),
                o = r(76342),
                i = r(12823),
                s = r(56577);
            let l = (0, a.createContext)({});
            var u = r(94702),
                f = r(82880);

            function d(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }
            var p = r(36314),
                c = r(70174),
                m = r(84487);
            let g = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function y(t, e, r) {
                for (let n in e)(0, p.S)(e[n]) || (0, c.z)(n, r) || (t[n] = e[n])
            }
            var x = r(83239);
            let v = () => ({
                ...g(),
                attrs: {}
            });
            var h = r(22722);
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
            var S = r(86506),
                j = r(94297),
                k = r(63608),
                M = r(49722),
                E = r(34290),
                T = r(92149);
            let W = t => (e, r) => {
                    let n = (0, a.useContext)(l),
                        o = (0, a.useContext)(k.t),
                        i = () => (function({
                            scrapeMotionValuesFromProps: t,
                            createRenderState: e
                        }, r, n, a) {
                            return {
                                latestValues: function(t, e, r, n) {
                                    let a = {},
                                        o = n(t, {});
                                    for (let t in o) a[t] = (0, T.u)(o[t]);
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
                                                    null !== e && (a[t] = e)
                                                }
                                                for (let e in t) a[e] = t[e]
                                            }
                                        }
                                    }
                                    return a
                                }(r, n, a, t),
                                renderState: e()
                            }
                        })(t, e, n, o);
                    return r ? i() : (0, E.M)(i)
                },
                O = W({
                    scrapeMotionValuesFromProps: r(21197).x,
                    createRenderState: g
                }),
                P = W({
                    scrapeMotionValuesFromProps: r(19790).x,
                    createRenderState: v
                });
            var B = r(67191),
                L = r(77815),
                I = r(10401);
            let X = Symbol.for("motionComponentSymbol");
            var A = r(36226),
                R = r(40723),
                Y = r(64534),
                V = r(82907);

            function $(t, {
                forwardMotionProps: e = !1
            } = {}, r, c) {
                r && (0, I.Y)(r);
                let w = (0, S.Q)(t) ? P : O;

                function j(r, j) {
                    var M;
                    let E, T = {
                            ...(0, a.useContext)(s.Q),
                            ...r,
                            layoutId: function({
                                layoutId: t
                            }) {
                                let e = (0, a.useContext)(o.L).id;
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
                            }(t, (0, a.useContext)(l));
                            return (0, a.useMemo)(() => ({
                                initial: e,
                                animate: r
                            }), [d(e), d(r)])
                        }(r),
                        P = w(r, W);
                    if (!W && B.B) {
                        (0, a.useContext)(i.Y).strict;
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
                        E = e.MeasureLayout, O.visualElement = function(t, e, r, n, o) {
                            let {
                                visualElement: u
                            } = (0, a.useContext)(l), f = (0, a.useContext)(i.Y), d = (0, a.useContext)(k.t), p = (0, a.useContext)(s.Q).reducedMotion, c = (0, a.useRef)(null);
                            n = n || f.renderer, !c.current && n && (c.current = n(t, {
                                visualState: e,
                                parent: u,
                                props: r,
                                presenceContext: d,
                                blockInitialAnimation: !!d && !1 === d.initial,
                                reducedMotionConfig: p
                            }));
                            let m = c.current,
                                g = (0, a.useContext)(Y.N);
                            m && !m.projection && o && ("html" === m.type || "svg" === m.type) && function(t, e, r, n) {
                                let {
                                    layoutId: a,
                                    layout: o,
                                    drag: i,
                                    dragConstraints: s,
                                    layoutScroll: l,
                                    layoutRoot: u,
                                    layoutCrossfade: f
                                } = e;
                                t.projection = new r(t.latestValues, e["data-framer-portal-id"] ? void 0 : function t(e) {
                                    if (e) return !1 !== e.options.allowProjection ? e.projection : t(e.parent)
                                }(t.parent)), t.projection.setOptions({
                                    layoutId: a,
                                    layout: o,
                                    alwaysMeasureLayout: !!i || s && (0, A.X)(s),
                                    visualElement: t,
                                    animationType: "string" == typeof o ? o : "both",
                                    initialPromotionConfig: n,
                                    crossfade: f,
                                    layoutScroll: l,
                                    layoutRoot: u
                                })
                            }(c.current, r, o, g);
                            let y = (0, a.useRef)(!1);
                            (0, a.useInsertionEffect)(() => {
                                m && y.current && m.update(r, d)
                            });
                            let x = r[R.n],
                                v = (0, a.useRef)(!!x && !window.MotionHandoffIsComplete?.(x) && window.MotionHasOptimisedAnimation?.(x));
                            return (0, V.E)(() => {
                                m && (y.current = !0, window.MotionIsMounted = !0, m.updateFeatures(), m.scheduleRenderMicrotask(), v.current && m.animationState && m.animationState.animateChanges())
                            }), (0, a.useEffect)(() => {
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
                        }, o, i = !1) {
                            let s = ((0, S.Q)(t) ? function(t, e, r, n) {
                                    let o = (0, a.useMemo)(() => {
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
                                        y(e, t.style, t), o.style = {
                                            ...e,
                                            ...o.style
                                        }
                                    }
                                    return o
                                } : function(t, e) {
                                    let r = {},
                                        n = function(t, e) {
                                            let r = t.style || {},
                                                n = {};
                                            return y(n, r, t), Object.assign(n, function({
                                                transformTemplate: t
                                            }, e) {
                                                return (0, a.useMemo)(() => {
                                                    let r = g();
                                                    return (0, m.O)(r, e, t), Object.assign({}, r.vars, r.style)
                                                }, [e])
                                            }(t, e)), n
                                        }(t, e);
                                    return t.drag && !1 !== t.dragListener && (r.draggable = !1, n.userSelect = n.WebkitUserSelect = n.WebkitTouchCallout = "none", n.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (r.tabIndex = 0), r.style = n, r
                                })(e, n, o, t),
                                l = function(t, e, r) {
                                    let n = {};
                                    for (let a in t)("values" !== a || "object" != typeof t.values) && (C(a) || !0 === r && b(a) || !e && !b(a) || t.draggable && a.startsWith("onDrag")) && (n[a] = t[a]);
                                    return n
                                }(e, "string" == typeof t, i),
                                u = t !== a.Fragment ? {
                                    ...l,
                                    ...s,
                                    ref: r
                                } : {},
                                {
                                    children: f
                                } = e,
                                d = (0, a.useMemo)(() => (0, p.S)(f) ? f.get() : f, [f]);
                            return (0, a.createElement)(t, {
                                ...u,
                                children: d
                            })
                        }(t, r, (M = O.visualElement, (0, a.useCallback)(t => {
                            t && P.onMount && P.onMount(t), M && (t ? M.mount(t) : M.unmount()), j && ("function" == typeof j ? j(t) : (0, A.X)(j) && (j.current = t))
                        }, [M])), P, W, e)]
                    })
                }
                j.displayName = `motion.${"string"==typeof t?t:`create(${t.displayName??t.name??""})`}`;
                let M = (0, a.forwardRef)(j);
                return M[X] = t, M
            }
        },
        8531: (t, e, r) => {
            r.d(e, {
                j: () => a,
                p: () => i
            });
            let n = t => e => "string" == typeof e && e.startsWith(t),
                a = n("--"),
                o = n("var(--"),
                i = t => !!o(t) && s.test(t.split("/*")[0].trim()),
                s = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
        },
        10401: (t, e, r) => {
            r.d(e, {
                Y: () => a
            });
            var n = r(77815);

            function a(t) {
                for (let e in t) n.B[e] = {
                    ...n.B[e],
                    ...t[e]
                }
            }
        },
        10907: (t, e, r) => {
            r.d(e, {
                U: () => n,
                f: () => a
            });
            let n = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                a = new Set(n)
        },
        12823: (t, e, r) => {
            r.d(e, {
                Y: () => n
            });
            let n = (0, r(11698).createContext)({
                strict: !1
            })
        },
        19790: (t, e, r) => {
            r.d(e, {
                x: () => i
            });
            var n = r(36314),
                a = r(10907),
                o = r(21197);

            function i(t, e, r) {
                let i = (0, o.x)(t, e, r);
                for (let r in t)((0, n.S)(t[r]) || (0, n.S)(e[r])) && (i[-1 !== a.U.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = t[r]);
                return i
            }
        },
        21197: (t, e, r) => {
            r.d(e, {
                x: () => o
            });
            var n = r(36314),
                a = r(70174);

            function o(t, e, r) {
                let {
                    style: o
                } = t, i = {};
                for (let s in o)((0, n.S)(o[s]) || e.style && (0, n.S)(e.style[s]) || (0, a.z)(s, t) || r?.getValue(s)?.liveStyle !== void 0) && (i[s] = o[s]);
                return i
            }
        },
        22722: (t, e, r) => {
            r.d(e, {
                n: () => n
            });
            let n = t => "string" == typeof t && "svg" === t.toLowerCase()
        },
        29157: (t, e, r) => {
            r.d(e, {
                q: () => n
            });
            let n = (t, e, r) => r > e ? e : r < t ? t : r
        },
        31378: (t, e, r) => {
            r.d(e, {
                W: () => s
            });
            var n = r(83930);
            let a = {
                ...n.ai,
                transform: Math.round
            };
            var o = r(39183);
            let i = {
                    rotate: o.uj,
                    rotateX: o.uj,
                    rotateY: o.uj,
                    rotateZ: o.uj,
                    scale: n.hs,
                    scaleX: n.hs,
                    scaleY: n.hs,
                    scaleZ: n.hs,
                    skew: o.uj,
                    skewX: o.uj,
                    skewY: o.uj,
                    distance: o.px,
                    translateX: o.px,
                    translateY: o.px,
                    translateZ: o.px,
                    x: o.px,
                    y: o.px,
                    z: o.px,
                    perspective: o.px,
                    transformPerspective: o.px,
                    opacity: n.X4,
                    originX: o.gQ,
                    originY: o.gQ,
                    originZ: o.px
                },
                s = {
                    borderWidth: o.px,
                    borderTopWidth: o.px,
                    borderRightWidth: o.px,
                    borderBottomWidth: o.px,
                    borderLeftWidth: o.px,
                    borderRadius: o.px,
                    radius: o.px,
                    borderTopLeftRadius: o.px,
                    borderTopRightRadius: o.px,
                    borderBottomRightRadius: o.px,
                    borderBottomLeftRadius: o.px,
                    width: o.px,
                    maxWidth: o.px,
                    height: o.px,
                    maxHeight: o.px,
                    top: o.px,
                    right: o.px,
                    bottom: o.px,
                    left: o.px,
                    padding: o.px,
                    paddingTop: o.px,
                    paddingRight: o.px,
                    paddingBottom: o.px,
                    paddingLeft: o.px,
                    margin: o.px,
                    marginTop: o.px,
                    marginRight: o.px,
                    marginBottom: o.px,
                    marginLeft: o.px,
                    backgroundPositionX: o.px,
                    backgroundPositionY: o.px,
                    ...i,
                    zIndex: a,
                    fillOpacity: n.X4,
                    strokeOpacity: n.X4,
                    numOctaves: a
                }
        },
        34290: (t, e, r) => {
            r.d(e, {
                M: () => a
            });
            var n = r(11698);

            function a(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        36226: (t, e, r) => {
            r.d(e, {
                X: () => n
            });

            function n(t) {
                return t && "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
        },
        36314: (t, e, r) => {
            r.d(e, {
                S: () => n
            });
            let n = t => !!(t && t.getVelocity)
        },
        37727: (t, e, r) => {
            r.d(e, {
                U: () => n,
                _: () => a
            });
            let n = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                a = ["initial", ...n]
        },
        39183: (t, e, r) => {
            r.d(e, {
                KN: () => o,
                gQ: () => u,
                px: () => i,
                uj: () => a,
                vh: () => s,
                vw: () => l
            });
            let n = t => ({
                    test: e => "string" == typeof e && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                a = n("deg"),
                o = n("%"),
                i = n("px"),
                s = n("vh"),
                l = n("vw"),
                u = {
                    ...o,
                    parse: t => o.parse(t) / 100,
                    transform: t => o.transform(100 * t)
                }
        },
        40723: (t, e, r) => {
            r.d(e, {
                n: () => n
            });
            let n = "data-" + (0, r(71021).I)("framerAppearId")
        },
        47650: (t, e, r) => {
            r.d(e, {
                $: () => o,
                H: () => a
            });
            var n = r(8531);
            let a = {};

            function o(t) {
                for (let e in t) a[e] = t[e], (0, n.j)(e) && (a[e].isCSSVariable = !0)
            }
        },
        49722: (t, e, r) => {
            function n(t) {
                let e = [{}, {}];
                return t?.values.forEach((t, r) => {
                    e[0][r] = t.get(), e[1][r] = t.getVelocity()
                }), e
            }

            function a(t, e, r, a) {
                if ("function" == typeof e) {
                    let [o, i] = n(a);
                    e = e(void 0 !== r ? r : t.custom, o, i)
                }
                if ("string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e) {
                    let [o, i] = n(a);
                    e = e(void 0 !== r ? r : t.custom, o, i)
                }
                return e
            }
            r.d(e, {
                a: () => a
            })
        },
        56577: (t, e, r) => {
            r.d(e, {
                Q: () => n
            });
            let n = (0, r(11698).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        61039: (t, e, r) => {
            r.d(e, {
                H: () => a
            });
            var n = r(4890);

            function a(t, e) {
                if ("undefined" == typeof Proxy) return n.G;
                let r = new Map,
                    a = (r, a) => (0, n.G)(r, a, t, e);
                return new Proxy((t, e) => a(t, e), {
                    get: (o, i) => "create" === i ? a : (r.has(i) || r.set(i, (0, n.G)(i, void 0, t, e)), r.get(i))
                })
            }
        },
        63608: (t, e, r) => {
            r.d(e, {
                t: () => n
            });
            let n = (0, r(11698).createContext)(null)
        },
        64534: (t, e, r) => {
            r.d(e, {
                N: () => n
            });
            let n = (0, r(11698).createContext)({})
        },
        67191: (t, e, r) => {
            r.d(e, {
                B: () => n
            });
            let n = "undefined" != typeof window
        },
        70174: (t, e, r) => {
            r.d(e, {
                z: () => o
            });
            var n = r(10907),
                a = r(47650);

            function o(t, {
                layout: e,
                layoutId: r
            }) {
                return n.f.has(t) || t.startsWith("origin") || (e || void 0 !== r) && (!!a.H[t] || "opacity" === t)
            }
        },
        71021: (t, e, r) => {
            r.d(e, {
                I: () => n
            });
            let n = t => t.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
        },
        76342: (t, e, r) => {
            r.d(e, {
                L: () => n
            });
            let n = (0, r(11698).createContext)({})
        },
        77815: (t, e, r) => {
            r.d(e, {
                B: () => a
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
                a = {};
            for (let t in n) a[t] = {
                isEnabled: e => n[t].some(t => !!e[t])
            }
        },
        82880: (t, e, r) => {
            r.d(e, {
                w: () => n
            });

            function n(t) {
                return "string" == typeof t || Array.isArray(t)
            }
        },
        82907: (t, e, r) => {
            r.d(e, {
                E: () => a
            });
            var n = r(11698);
            let a = r(67191).B ? n.useLayoutEffect : n.useEffect
        },
        83239: (t, e, r) => {
            r.d(e, {
                B: () => s
            });
            var n = r(84487),
                a = r(39183);
            let o = {
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
                    let l = s ? o : i;
                    t[l.offset] = a.px.transform(-n);
                    let u = a.px.transform(e),
                        f = a.px.transform(r);
                    t[l.array] = `${u} ${f}`
                }(g, l, u, f, !1)
            }
        },
        83930: (t, e, r) => {
            r.d(e, {
                X4: () => o,
                ai: () => a,
                hs: () => i
            });
            var n = r(29157);
            let a = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                o = {
                    ...a,
                    transform: t => (0, n.q)(0, 1, t)
                },
                i = {
                    ...a,
                    default: 1
                }
        },
        84487: (t, e, r) => {
            r.d(e, {
                O: () => u
            });
            var n = r(10907),
                a = r(8531);
            let o = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
            var i = r(31378);
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
                    if ((0, a.j)(t)) {
                        f[t] = r;
                        continue
                    } {
                        let e = o(r, i.W[t]);
                        t.startsWith("origin") ? (c = !0, d[t] = e) : u[t] = e
                    }
                }
                if (!e.transform && (p || r ? u.transform = function(t, e, r) {
                        let a = "",
                            u = !0;
                        for (let f = 0; f < l; f++) {
                            let l = n.U[f],
                                d = t[l];
                            if (void 0 === d) continue;
                            let p = !0;
                            if (!(p = "number" == typeof d ? d === +!!l.startsWith("scale") : 0 === parseFloat(d)) || r) {
                                let t = o(d, i.W[l]);
                                if (!p) {
                                    u = !1;
                                    let e = s[l] || l;
                                    a += `${e}(${t}) `
                                }
                                r && (e[l] = t)
                            }
                        }
                        return a = a.trim(), r ? a = r(e, u ? "" : a) : u && (a = "none"), a
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
        86506: (t, e, r) => {
            r.d(e, {
                Q: () => a
            });
            let n = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function a(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (n.indexOf(t) > -1 || /[A-Z]/u.test(t)) return !0;
                return !1
            }
        },
        92149: (t, e, r) => {
            r.d(e, {
                u: () => a
            });
            var n = r(36314);

            function a(t) {
                return (0, n.S)(t) ? t.get() : t
            }
        },
        94297: (t, e, r) => {
            r.d(e, {
                N: () => n
            });

            function n(t) {
                return null !== t && "object" == typeof t && "function" == typeof t.start
            }
        },
        94702: (t, e, r) => {
            r.d(e, {
                O: () => s,
                e: () => i
            });
            var n = r(94297),
                a = r(82880),
                o = r(37727);

            function i(t) {
                return (0, n.N)(t.animate) || o._.some(e => (0, a.w)(t[e]))
            }

            function s(t) {
                return !!(i(t) || t.variants)
            }
        }
    }
]);