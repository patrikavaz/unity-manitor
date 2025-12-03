try {
    let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        e = (new t.Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "2f3bae83-21b8-4593-8b00-81db8f5f0a52", t._sentryDebugIdIdentifier = "sentry-dbid-2f3bae83-21b8-4593-8b00-81db8f5f0a52")
} catch (t) {}
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [21170], {
        92: (t, e, i) => {
            i.d(e, {
                P: () => s
            });
            var n = i(87210);

            function s(t) {
                return t.props[n.n]
            }
        },
        2750: (t, e, i) => {
            function n({
                top: t,
                left: e,
                right: i,
                bottom: n
            }) {
                return {
                    x: {
                        min: e,
                        max: i
                    },
                    y: {
                        min: t,
                        max: n
                    }
                }
            }

            function s({
                x: t,
                y: e
            }) {
                return {
                    top: e.min,
                    right: t.max,
                    bottom: e.max,
                    left: t.min
                }
            }

            function r(t, e) {
                if (!e) return t;
                let i = e({
                        x: t.left,
                        y: t.top
                    }),
                    n = e({
                        x: t.right,
                        y: t.bottom
                    });
                return {
                    top: i.y,
                    left: i.x,
                    bottom: n.y,
                    right: n.x
                }
            }
            i.d(e, {
                FY: () => n,
                bS: () => r,
                pA: () => s
            })
        },
        2840: (t, e, i) => {
            i.d(e, {
                r: () => n
            });

            function n(t, e) {
                return t?.[e] ?? t?.default ?? t
            }
        },
        5295: (t, e, i) => {
            i.d(e, {
                M: () => d
            });
            var n = i(25877),
                s = i(85525),
                r = i(5457),
                a = i(32119),
                o = i(84701),
                l = i(96693),
                u = i(90086),
                h = i(41560);
            class d extends o.b {
                constructor() {
                    super(...arguments), this.type = "html", this.renderInstance = u.e
                }
                readValueFromInstance(t, e) {
                    if (n.f.has(e)) return this.projection?.isProjecting ? (0, s.zs)(e) : (0, s.Ib)(t, e);
                    {
                        let i = window.getComputedStyle(t),
                            n = ((0, r.j)(e) ? i.getPropertyValue(e) : i[e]) || 0;
                        return "string" == typeof n ? n.trim() : n
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return (0, a.m)(t, e)
                }
                build(t, e, i) {
                    (0, l.O)(t, e, i.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return (0, h.x)(t, e, i)
                }
            }
        },
        11041: (t, e, i) => {
            i.d(e, {
                X: () => r
            });
            var n = i(54254),
                s = i(79915);

            function r(t, e = 100, i) {
                let a = i({
                        ...t,
                        keyframes: [0, e]
                    }),
                    o = Math.min((0, s.t)(a), s.Y);
                return {
                    type: "keyframes",
                    ease: t => a.next(o * t).value / e,
                    duration: (0, n.X)(o)
                }
            }
        },
        12e3: (t, e, i) => {
            i.d(e, {
                V: () => n
            });
            let n = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
        },
        13681: (t, e, i) => {
            i.d(e, {
                OU: () => u,
                Ql: () => h,
                Ww: () => p,
                hq: () => r,
                o4: () => l
            });
            var n = i(30168),
                s = i(58460);

            function r(t, e, i) {
                return i + e * (t - i)
            }

            function a(t, e, i, n, s) {
                return void 0 !== s && (t = n + s * (t - n)), n + i * (t - n) + e
            }

            function o(t, e = 0, i = 1, n, s) {
                t.min = a(t.min, e, i, n, s), t.max = a(t.max, e, i, n, s)
            }

            function l(t, {
                x: e,
                y: i
            }) {
                o(t.x, e.translate, e.scale, e.originPoint), o(t.y, i.translate, i.scale, i.originPoint)
            }

            function u(t, e, i, n = !1) {
                let r, a, o = i.length;
                if (o) {
                    e.x = e.y = 1;
                    for (let u = 0; u < o; u++) {
                        a = (r = i[u]).projectionDelta;
                        let {
                            visualElement: o
                        } = r.options;
                        (!o || !o.props.style || "contents" !== o.props.style.display) && (n && r.options.layoutScroll && r.scroll && r !== r.root && p(t, {
                            x: -r.scroll.offset.x,
                            y: -r.scroll.offset.y
                        }), a && (e.x *= a.x.scale, e.y *= a.y.scale, l(t, a)), n && (0, s.HD)(r.latestValues) && p(t, r.latestValues))
                    }
                    e.x < 1.0000000000001 && e.x > .999999999999 && (e.x = 1), e.y < 1.0000000000001 && e.y > .999999999999 && (e.y = 1)
                }
            }

            function h(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function d(t, e, i, s, r = .5) {
                let a = (0, n.k)(t.min, t.max, r);
                o(t, e, i, a, s)
            }

            function p(t, e) {
                d(t.x, e.x, e.scaleX, e.scale, e.originX), d(t.y, e.y, e.scaleY, e.scale, e.originY)
            }
        },
        20266: (t, e, i) => {
            i.d(e, {
                a6: () => s,
                am: () => a,
                vT: () => r
            });
            var n = i(78106);
            let s = (0, n.A)(.42, 0, 1, 1),
                r = (0, n.A)(0, 0, .58, 1),
                a = (0, n.A)(.42, 0, .58, 1)
        },
        25188: (t, e, i) => {
            i.d(e, {
                $: () => n
            });
            let n = new Set(["width", "height", "top", "left", "right", "bottom", ...i(25877).U])
        },
        26366: (t, e, i) => {
            i.d(e, {
                p: () => l
            });
            var n = i(32017),
                s = i(15985);
            let r = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function a(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [n] = i.match(s.S) || [];
                if (!n) return t;
                let a = i.replace(n, ""),
                    o = +!!r.has(e);
                return n !== i && (o *= 100), e + "(" + o + a + ")"
            }
            let o = /\b([a-z-]*)\(.*?\)/gu,
                l = {
                    ...n.f,
                    getAnimatableNone: t => {
                        let e = t.match(o);
                        return e ? e.map(a).join(" ") : t
                    }
                }
        },
        29115: (t, e, i) => {
            i.d(e, {
                l: () => c
            });
            var n = i(25877),
                s = i(61993),
                r = i(65132),
                a = i(84701),
                o = i(44212),
                l = i(56808);
            let u = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
            var h = i(94229),
                d = i(90086),
                p = i(27641);
            class c extends a.b {
                constructor() {
                    super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = r.ge
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (n.f.has(e)) {
                        let t = (0, s.D)(e);
                        return t && t.default || 0
                    }
                    return e = u.has(e) ? e : (0, o.I)(e), t.getAttribute(e)
                }
                scrapeMotionValuesFromProps(t, e, i) {
                    return (0, p.x)(t, e, i)
                }
                build(t, e, i) {
                    (0, l.B)(t, e, this.isSVGTag, i.transformTemplate, i.style)
                }
                renderInstance(t, e, i, n) {
                    for (let i in (0, d.e)(t, e, void 0, n), e.attrs) t.setAttribute(u.has(i) ? i : (0, o.I)(i), e.attrs[i])
                }
                mount(t) {
                    this.isSVGTag = (0, h.n)(t.tagName), super.mount(t)
                }
            }
        },
        29237: (t, e, i) => {
            i.d(e, {
                $: () => p
            });
            var n = i(2840),
                s = i(15128),
                r = i(25188),
                a = i(50025),
                o = i(67092),
                l = i(72285),
                u = i(89322),
                h = i(92),
                d = i(64531);

            function p(t, e, {
                delay: i = 0,
                transitionOverride: c,
                type: m
            } = {}) {
                let {
                    transition: f = t.getDefaultTransition(),
                    transitionEnd: v,
                    ...y
                } = e;
                c && (f = c);
                let g = [],
                    b = m && t.animationState && t.animationState.getState()[m];
                for (let e in y) {
                    let a = t.getValue(e, t.latestValues[e] ?? null),
                        o = y[e];
                    if (void 0 === o || b && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, i) {
                            let n = t.hasOwnProperty(i) && !0 !== e[i];
                            return e[i] = !1, n
                        }(b, e)) continue;
                    let l = {
                            delay: i,
                            ...(0, n.r)(f || {}, e)
                        },
                        p = a.get();
                    if (void 0 !== p && !a.isAnimating && !Array.isArray(o) && o === p && !l.velocity) continue;
                    let c = !1;
                    if (window.MotionHandoffAnimation) {
                        let i = (0, h.P)(t);
                        if (i) {
                            let t = window.MotionHandoffAnimation(i, e, s.Gt);
                            null !== t && (l.startTime = t, c = !0)
                        }
                    }(0, u.g)(t, e), a.start((0, d.f)(e, a, o, t.shouldReduceMotion && r.$.has(e) ? {
                        type: !1
                    } : l, t, c));
                    let m = a.animation;
                    m && g.push(m)
                }
                return v && Promise.all(g).then(() => {
                    s.Gt.update(() => {
                        v && function(t, e) {
                            let {
                                transitionEnd: i = {},
                                transition: n = {},
                                ...s
                            } = (0, l.K)(t, e) || {};
                            for (let e in s = {
                                    ...s,
                                    ...i
                                }) {
                                var r;
                                let i = (r = s[e], (0, o.p)(r) ? r[r.length - 1] || 0 : r);
                                t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, a.OQ)(i))
                            }
                        }(t, v)
                    })
                }), g
            }
        },
        32119: (t, e, i) => {
            i.d(e, {
                L: () => a,
                m: () => r
            });
            var n = i(2750),
                s = i(13681);

            function r(t, e) {
                return (0, n.FY)((0, n.bS)(t.getBoundingClientRect(), e))
            }

            function a(t, e, i) {
                let n = r(t, i),
                    {
                        scroll: a
                    } = e;
                return a && ((0, s.Ql)(n.x, a.offset.x), (0, s.Ql)(n.y, a.offset.y)), n
            }
        },
        36673: (t, e, i) => {
            i.d(e, {
                B: () => k
            });
            var n = i(69842),
                s = i(34678),
                r = i(15128),
                a = i(24200),
                o = i(25877),
                l = i(50025),
                u = i(71907),
                h = i(32017),
                d = i(57296),
                p = i(60251);
            let c = [...d.T, u.y, h.f];
            var m = i(73690),
                f = i(91820),
                v = i(40443),
                y = i(45199),
                g = i(52569),
                b = i(72112),
                w = i(65132),
                T = i(80085),
                S = i(73242),
                x = i(52289),
                M = i(63699),
                V = i(83369);
            let A = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
            class k {
                scrapeMotionValuesFromProps(t, e, i) {
                    return {}
                }
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: i,
                    reducedMotionConfig: o,
                    blockInitialAnimation: l,
                    visualState: u
                }, h = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = n.h, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                        let t = s.k.now();
                        this.renderScheduledAt < t && (this.renderScheduledAt = t, r.Gt.render(this.render, !1, !0))
                    };
                    let {
                        latestValues: d,
                        renderState: p
                    } = u;
                    this.latestValues = d, this.baseTarget = {
                        ...d
                    }, this.initialValues = e.initial ? {
                        ...d
                    } : {}, this.renderState = p, this.parent = t, this.props = e, this.presenceContext = i, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = h, this.blockInitialAnimation = !!l, this.isControllingVariants = (0, M.e)(e), this.isVariantNode = (0, M.O)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    let {
                        willChange: c,
                        ...m
                    } = this.scrapeMotionValuesFromProps(e, {}, this);
                    for (let t in m) {
                        let e = m[t];
                        void 0 !== d[t] && (0, a.S)(e) && e.set(d[t])
                    }
                }
                mount(t) {
                    this.current = t, x.C.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), S.r.current || (0, T.U)(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || S.O.current), this.parent?.addChild(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in this.projection && this.projection.unmount(), (0, r.WG)(this.notifyUpdate), (0, r.WG)(this.render), this.valueSubscriptions.forEach(t => t()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[t].clear();
                    for (let t in this.features) {
                        let e = this.features[t];
                        e && (e.unmount(), e.isMounted = !1)
                    }
                    this.current = null
                }
                addChild(t) {
                    this.children.add(t), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(t)
                }
                removeChild(t) {
                    this.children.delete(t), this.enteringChildren && this.enteringChildren.delete(t)
                }
                bindToMotionValue(t, e) {
                    let i;
                    this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
                    let n = o.f.has(t);
                    n && this.onBindTransform && this.onBindTransform();
                    let s = e.on("change", e => {
                        this.latestValues[t] = e, this.props.onUpdate && r.Gt.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
                    });
                    window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, t, e)), this.valueSubscriptions.set(t, () => {
                        s(), i && i(), e.owner && e.stop()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                updateFeatures() {
                    let t = "animation";
                    for (t in b.B) {
                        let e = b.B[t];
                        if (!e) continue;
                        let {
                            isEnabled: i,
                            Feature: n
                        } = e;
                        if (!this.features[t] && n && i(this.props) && (this.features[t] = new n(this)), this.features[t]) {
                            let e = this.features[t];
                            e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                        }
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, w.ge)()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < A.length; e++) {
                        let i = A[e];
                        this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                        let n = t["on" + i];
                        n && (this.propEventSubscriptions[i] = this.on(i, n))
                    }
                    this.prevMotionValues = function(t, e, i) {
                        for (let n in e) {
                            let s = e[n],
                                r = i[n];
                            if ((0, a.S)(s)) t.addValue(n, s);
                            else if ((0, a.S)(r)) t.addValue(n, (0, l.OQ)(s, {
                                owner: t
                            }));
                            else if (r !== s)
                                if (t.hasValue(n)) {
                                    let e = t.getValue(n);
                                    !0 === e.liveStyle ? e.jump(s) : e.hasAnimated || e.set(s)
                                } else {
                                    let e = t.getStaticValue(n);
                                    t.addValue(n, (0, l.OQ)(void 0 !== e ? e : s, {
                                        owner: t
                                    }))
                                }
                        }
                        for (let n in i) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    let i = this.values.get(t);
                    e !== i && (i && this.removeValue(t), this.bindToMotionValue(t, e), this.values.set(t, e), this.latestValues[t] = e.get())
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let i = this.values.get(t);
                    return void 0 === i && void 0 !== e && (i = (0, l.OQ)(null === e ? void 0 : e, {
                        owner: this
                    }), this.addValue(t, i)), i
                }
                readValue(t, e) {
                    let i = void 0 === this.latestValues[t] && this.current ? this.getBaseTargetFromProps(this.props, t) ?? this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t];
                    if (null != i) {
                        if ("string" == typeof i && ((0, v.i)(i) || (0, y.$)(i))) i = parseFloat(i);
                        else {
                            let n;
                            n = i, !c.find((0, p.w)(n)) && h.f.test(e) && (i = (0, m.J)(t, e))
                        }
                        this.setBaseTarget(t, (0, a.S)(i) ? i.get() : i)
                    }
                    return (0, a.S)(i) ? i.get() : i
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    let e, {
                        initial: i
                    } = this.props;
                    if ("string" == typeof i || "object" == typeof i) {
                        let n = (0, V.a)(this.props, i, this.presenceContext?.custom);
                        n && (e = n[t])
                    }
                    if (i && void 0 !== e) return e;
                    let n = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === n || (0, a.S)(n) ? void 0 !== this.initialValues[t] && void 0 === e ? void 0 : this.baseTarget[t] : n
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new g.v), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
                scheduleRenderMicrotask() {
                    f.k.render(this.render)
                }
            }
        },
        39358: (t, e, i) => {
            i.d(e, {
                W: () => T
            });
            var n = i(81398),
                s = i(72285),
                r = i(29237);

            function a(t, e, i, n = 0, s = 1) {
                let r = Array.from(t).sort((t, e) => t.sortNodePosition(e)).indexOf(e),
                    o = t.size,
                    l = (o - 1) * n;
                return "function" == typeof i ? i(r, o) : 1 === s ? r * n : l - r * n
            }

            function o(t, e, i = {}) {
                let n = (0, s.K)(t, e, "exit" === i.type ? t.presenceContext?.custom : void 0),
                    {
                        transition: l = t.getDefaultTransition() || {}
                    } = n || {};
                i.transitionOverride && (l = i.transitionOverride);
                let u = n ? () => Promise.all((0, r.$)(t, n, i)) : () => Promise.resolve(),
                    h = t.variantChildren && t.variantChildren.size ? (n = 0) => {
                        let {
                            delayChildren: s = 0,
                            staggerChildren: r,
                            staggerDirection: u
                        } = l;
                        return function(t, e, i = 0, n = 0, s = 0, r = 1, l) {
                            let u = [];
                            for (let h of t.variantChildren) h.notify("AnimationStart", e), u.push(o(h, e, {
                                ...l,
                                delay: i + ("function" == typeof n ? 0 : n) + a(t.variantChildren, h, n, s, r)
                            }).then(() => h.notify("AnimationComplete", e)));
                            return Promise.all(u)
                        }(t, e, n, s, r, u, i)
                    } : () => Promise.resolve(),
                    {
                        when: d
                    } = l;
                if (!d) return Promise.all([u(), h(i.delay)]);
                {
                    let [t, e] = "beforeChildren" === d ? [u, h] : [h, u];
                    return t().then(() => e())
                }
            }
            var l = i(67092);

            function u(t, e) {
                if (!Array.isArray(e)) return !1;
                let i = e.length;
                if (i !== t.length) return !1;
                for (let n = 0; n < i; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
            var h = i(82687),
                d = i(678);
            let p = d._.length,
                c = [...d.U].reverse(),
                m = d.U.length;

            function f(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }

            function v() {
                return {
                    animate: f(!0),
                    whileInView: f(),
                    whileHover: f(),
                    whileTap: f(),
                    whileDrag: f(),
                    whileFocus: f(),
                    exit: f()
                }
            }
            var y = i(75532);
            class g extends y.X {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: i
                            }) => (function(t, e, i = {}) {
                                let n;
                                if (t.notify("AnimationStart", e), Array.isArray(e)) n = Promise.all(e.map(e => o(t, e, i)));
                                else if ("string" == typeof e) n = o(t, e, i);
                                else {
                                    let a = "function" == typeof e ? (0, s.K)(t, e, i.custom) : e;
                                    n = Promise.all((0, r.$)(t, a, i))
                                }
                                return n.then(() => {
                                    t.notify("AnimationComplete", e)
                                })
                            })(t, e, i))),
                            i = v(),
                            f = !0,
                            y = e => (i, n) => {
                                let r = (0, s.K)(t, n, "exit" === e ? t.presenceContext?.custom : void 0);
                                if (r) {
                                    let {
                                        transition: t,
                                        transitionEnd: e,
                                        ...n
                                    } = r;
                                    i = {
                                        ...i,
                                        ...n,
                                        ...e
                                    }
                                }
                                return i
                            };

                        function g(r) {
                            let {
                                props: o
                            } = t, v = function t(e) {
                                if (!e) return;
                                if (!e.isControllingVariants) {
                                    let i = e.parent && t(e.parent) || {};
                                    return void 0 !== e.props.initial && (i.initial = e.props.initial), i
                                }
                                let i = {};
                                for (let t = 0; t < p; t++) {
                                    let n = d._[t],
                                        s = e.props[n];
                                    ((0, h.w)(s) || !1 === s) && (i[n] = s)
                                }
                                return i
                            }(t.parent) || {}, g = [], b = new Set, w = {}, T = 1 / 0;
                            for (let e = 0; e < m; e++) {
                                var S, x;
                                let d = c[e],
                                    p = i[d],
                                    m = void 0 !== o[d] ? o[d] : v[d],
                                    M = (0, h.w)(m),
                                    V = d === r ? p.isActive : null;
                                !1 === V && (T = e);
                                let A = m === v[d] && m !== o[d] && M;
                                if (A && f && t.manuallyAnimateOnMount && (A = !1), p.protectedKeys = {
                                        ...w
                                    }, !p.isActive && null === V || !m && !p.prevProp || (0, n.N)(m) || "boolean" == typeof m) continue;
                                let k = (S = p.prevProp, "string" == typeof(x = m) ? x !== S : !!Array.isArray(x) && !u(x, S)),
                                    C = k || d === r && p.isActive && !A && M || e > T && M,
                                    P = !1,
                                    E = Array.isArray(m) ? m : [m],
                                    F = E.reduce(y(d), {});
                                !1 === V && (F = {});
                                let {
                                    prevResolvedValues: D = {}
                                } = p, I = {
                                    ...D,
                                    ...F
                                }, O = e => {
                                    C = !0, b.has(e) && (P = !0, b.delete(e)), p.needsAnimating[e] = !0;
                                    let i = t.getValue(e);
                                    i && (i.liveStyle = !1)
                                };
                                for (let t in I) {
                                    let e = F[t],
                                        i = D[t];
                                    if (!w.hasOwnProperty(t))((0, l.p)(e) && (0, l.p)(i) ? u(e, i) : e === i) ? void 0 !== e && b.has(t) ? O(t) : p.protectedKeys[t] = !0 : null != e ? O(t) : b.add(t)
                                }
                                p.prevProp = m, p.prevResolvedValues = F, p.isActive && (w = {
                                    ...w,
                                    ...F
                                }), f && t.blockInitialAnimation && (C = !1);
                                let K = A && k,
                                    R = !K || P;
                                C && R && g.push(...E.map(e => {
                                    let i = {
                                        type: d
                                    };
                                    if ("string" == typeof e && f && !K && t.manuallyAnimateOnMount && t.parent) {
                                        let {
                                            parent: n
                                        } = t, r = (0, s.K)(n, e);
                                        if (n.enteringChildren && r) {
                                            let {
                                                delayChildren: e
                                            } = r.transition || {};
                                            i.delay = a(n.enteringChildren, t, e)
                                        }
                                    }
                                    return {
                                        animation: e,
                                        options: i
                                    }
                                }))
                            }
                            if (b.size) {
                                let e = {};
                                if ("boolean" != typeof o.initial) {
                                    let i = (0, s.K)(t, Array.isArray(o.initial) ? o.initial[0] : o.initial);
                                    i && i.transition && (e.transition = i.transition)
                                }
                                b.forEach(i => {
                                    let n = t.getBaseTarget(i),
                                        s = t.getValue(i);
                                    s && (s.liveStyle = !0), e[i] = n ?? null
                                }), g.push({
                                    animation: e
                                })
                            }
                            let M = !!g.length;
                            return f && (!1 === o.initial || o.initial === o.animate) && !t.manuallyAnimateOnMount && (M = !1), f = !1, M ? e(g) : Promise.resolve()
                        }
                        return {
                            animateChanges: g,
                            setActive: function(e, n) {
                                if (i[e].isActive === n) return Promise.resolve();
                                t.variantChildren?.forEach(t => t.animationState?.setActive(e, n)), i[e].isActive = n;
                                let s = g(e);
                                for (let t in i) i[t].protectedKeys = {};
                                return s
                            },
                            setAnimateFunction: function(i) {
                                e = i(t)
                            },
                            getState: () => i,
                            reset: () => {
                                i = v()
                            }
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    (0, n.N)(t) && (this.unmountControls = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {
                    this.node.animationState.reset(), this.unmountControls?.()
                }
            }
            let b = 0;
            class w extends y.X {
                constructor() {
                    super(...arguments), this.id = b++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e
                    } = this.node.presenceContext, {
                        isPresent: i
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === i) return;
                    let n = this.node.animationState.setActive("exit", !t);
                    e && !t && n.then(() => {
                        e(this.id)
                    })
                }
                mount() {
                    let {
                        register: t,
                        onExitComplete: e
                    } = this.node.presenceContext || {};
                    e && e(this.id), t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            let T = {
                animation: {
                    Feature: g
                },
                exit: {
                    Feature: w
                }
            }
        },
        40443: (t, e, i) => {
            i.d(e, {
                i: () => n
            });
            let n = t => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t)
        },
        41199: (t, e, i) => {
            i.d(e, {
                E4: () => o,
                Hr: () => d,
                W9: () => h
            });
            var n = i(85525),
                s = i(25877),
                r = i(78308),
                a = i(12477);
            let o = t => t === r.ai || t === a.px,
                l = new Set(["x", "y", "z"]),
                u = s.U.filter(t => !l.has(t));

            function h(t) {
                let e = [];
                return u.forEach(i => {
                    let n = t.getValue(i);
                    void 0 !== n && (e.push([i, n.get()]), n.set(+!!i.startsWith("scale")))
                }), e
            }
            let d = {
                width: ({
                    x: t
                }, {
                    paddingLeft: e = "0",
                    paddingRight: i = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                height: ({
                    y: t
                }, {
                    paddingTop: e = "0",
                    paddingBottom: i = "0"
                }) => t.max - t.min - parseFloat(e) - parseFloat(i),
                top: (t, {
                    top: e
                }) => parseFloat(e),
                left: (t, {
                    left: e
                }) => parseFloat(e),
                bottom: ({
                    y: t
                }, {
                    top: e
                }) => parseFloat(e) + (t.max - t.min),
                right: ({
                    x: t
                }, {
                    left: e
                }) => parseFloat(e) + (t.max - t.min),
                x: (t, {
                    transform: e
                }) => (0, n.ry)(e, "x"),
                y: (t, {
                    transform: e
                }) => (0, n.ry)(e, "y")
            };
            d.translateX = d.x, d.translateY = d.y
        },
        41722: (t, e, i) => {
            i.d(e, {
                D: () => s,
                I: () => n
            });
            let n = {
                x: !1,
                y: !1
            };

            function s() {
                return n.x || n.y
            }
        },
        42594: (t, e, i) => {
            i.d(e, {
                h: () => n
            });
            let n = t => Array.isArray(t) && "number" != typeof t[0]
        },
        45199: (t, e, i) => {
            i.d(e, {
                $: () => n
            });
            let n = t => /^0[^.\s]+$/u.test(t)
        },
        46495: (t, e, i) => {
            i.d(e, {
                W: () => n
            });

            function n(t) {
                return "function" == typeof t && "applyToOptions" in t
            }
        },
        51519: (t, e, i) => {
            i.d(e, {
                M: () => n
            });
            let n = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary
        },
        52289: (t, e, i) => {
            i.d(e, {
                C: () => n
            });
            let n = new WeakMap
        },
        53479: (t, e, i) => {
            i.d(e, {
                q: () => n
            });
            let n = {
                layout: 0,
                mainThread: 0,
                waapi: 0
            }
        },
        54254: (t, e, i) => {
            i.d(e, {
                X: () => s,
                f: () => n
            });
            let n = t => 1e3 * t,
                s = t => t / 1e3
        },
        56203: (t, e, i) => {
            i.d(e, {
                G: () => n
            });
            let n = t => e => 1 - t(1 - e)
        },
        57296: (t, e, i) => {
            i.d(e, {
                T: () => a,
                n: () => o
            });
            var n = i(78308),
                s = i(12477),
                r = i(60251);
            let a = [n.ai, s.px, s.KN, s.uj, s.vw, s.vh, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                o = t => a.find((0, r.w)(t))
        },
        58460: (t, e, i) => {
            function n(t) {
                return void 0 === t || 1 === t
            }

            function s({
                scale: t,
                scaleX: e,
                scaleY: i
            }) {
                return !n(t) || !n(e) || !n(i)
            }

            function r(t) {
                return s(t) || a(t) || t.z || t.rotate || t.rotateX || t.rotateY || t.skewX || t.skewY
            }

            function a(t) {
                var e, i;
                return (e = t.x) && "0%" !== e || (i = t.y) && "0%" !== i
            }
            i.d(e, {
                HD: () => r,
                vF: () => a,
                vk: () => s
            })
        },
        60251: (t, e, i) => {
            i.d(e, {
                w: () => n
            });
            let n = t => e => e.test(t)
        },
        61993: (t, e, i) => {
            i.d(e, {
                D: () => a
            });
            var n = i(71907),
                s = i(26366);
            let r = {
                    ...i(16344).W,
                    color: n.y,
                    backgroundColor: n.y,
                    outlineColor: n.y,
                    fill: n.y,
                    stroke: n.y,
                    borderColor: n.y,
                    borderTopColor: n.y,
                    borderRightColor: n.y,
                    borderBottomColor: n.y,
                    borderLeftColor: n.y,
                    filter: s.p,
                    WebkitFilter: s.p
                },
                a = t => r[t]
        },
        64531: (t, e, i) => {
            i.d(e, {
                f: () => tp
            });
            var n = i(2840);

            function s(t) {
                t.duration = 0, t.type = "keyframes"
            }
            var r = i(15128),
                a = i(11852),
                o = i(85683),
                l = i(54254),
                u = i(34678),
                h = i(53479),
                d = i(82308);
            let p = t => {
                let e = ({
                    timestamp: e
                }) => t(e);
                return {
                    start: (t = !0) => r.Gt.update(e, t),
                    stop: () => (0, r.WG)(e),
                    now: () => r.uv.isProcessing ? r.uv.timestamp : u.k.now()
                }
            };
            var c = i(77366),
                m = i(96434);

            function f({
                keyframes: t,
                velocity: e = 0,
                power: i = .8,
                timeConstant: n = 325,
                bounceDamping: s = 10,
                bounceStiffness: r = 500,
                modifyTarget: a,
                min: o,
                max: l,
                restDelta: u = .5,
                restSpeed: h
            }) {
                let d, p, f = t[0],
                    v = {
                        done: !1,
                        value: f
                    },
                    y = i * e,
                    g = f + y,
                    b = void 0 === a ? g : a(g);
                b !== g && (y = b - f);
                let w = t => -y * Math.exp(-t / n),
                    T = t => b + w(t),
                    S = t => {
                        let e = w(t),
                            i = T(t);
                        v.done = Math.abs(e) <= u, v.value = v.done ? b : i
                    },
                    x = t => {
                        let e;
                        if (e = v.value, void 0 !== o && e < o || void 0 !== l && e > l) {
                            var i;
                            d = t, p = (0, c.o)({
                                keyframes: [v.value, (i = v.value, void 0 === o ? l : void 0 === l || Math.abs(o - i) < Math.abs(l - i) ? o : l)],
                                velocity: (0, m.Y)(T, t, v.value),
                                damping: s,
                                stiffness: r,
                                restDelta: u,
                                restSpeed: h
                            })
                        }
                    };
                return x(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (p || void 0 !== d || (e = !0, S(t), x(t)), void 0 !== d && t >= d) ? p.next(t - d) : (e || S(t), v)
                    }
                }
            }
            var v = i(20266),
                y = i(42594),
                g = i(58917),
                b = i(80696),
                w = i(78106),
                T = i(12e3),
                S = i(56203);
            let x = (0, w.A)(.33, 1.53, .69, .99),
                M = (0, S.G)(x),
                V = (0, T.V)(M),
                A = t => (t *= 2) < 1 ? .5 * M(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)));
            var k = i(80229);
            let C = t => Array.isArray(t) && "number" == typeof t[0],
                P = {
                    linear: b.l,
                    easeIn: v.a6,
                    easeInOut: v.am,
                    easeOut: v.vT,
                    circIn: k.po,
                    circInOut: k.tn,
                    circOut: k.yT,
                    backIn: M,
                    backInOut: V,
                    backOut: x,
                    anticipate: A
                },
                E = t => {
                    if (C(t)) {
                        (0, g.V)(4 === t.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
                        let [e, i, n, s] = t;
                        return (0, w.A)(e, i, n, s)
                    }
                    return "string" == typeof t ? ((0, g.V)(void 0 !== P[t], `Invalid easing type '${t}'`, "invalid-easing-type"), P[t]) : t
                };
            var F = i(20292),
                D = i(99320);

            function I({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: n = "easeInOut"
            }) {
                var s;
                let r = (0, y.h)(n) ? n.map(E) : E(n),
                    a = {
                        done: !1,
                        value: e[0]
                    },
                    o = (s = i && i.length === e.length ? i : (0, D.Z)(e), s.map(e => e * t)),
                    l = (0, F.G)(o, e, {
                        ease: Array.isArray(r) ? r : e.map(() => r || v.am).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (a.value = l(e), a.done = e >= t, a)
                }
            }
            var O = i(79915);
            let K = t => null !== t;

            function R(t, {
                repeat: e,
                repeatType: i = "loop"
            }, n, s = 1) {
                let r = t.filter(K),
                    a = s < 0 || e && "loop" !== i && e % 2 == 1 ? 0 : r.length - 1;
                return a && void 0 !== n ? n : r[a]
            }
            let X = {
                decay: f,
                inertia: f,
                tween: I,
                keyframes: I,
                spring: c.o
            };

            function N(t) {
                "string" == typeof t.type && (t.type = X[t.type])
            }
            class B {
                constructor() {
                    this.updateFinished()
                }
                get finished() {
                    return this._finished
                }
                updateFinished() {
                    this._finished = new Promise(t => {
                        this.resolve = t
                    })
                }
                notifyFinished() {
                    this.resolve()
                }
                then(t, e) {
                    return this.finished.then(t, e)
                }
            }
            let W = t => t / 100;
            class L extends B {
                constructor(t) {
                    super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
                        let {
                            motionValue: t
                        } = this.options;
                        t && t.updatedAt !== u.k.now() && this.tick(u.k.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop?.())
                    }, h.q.mainThread++, this.options = t, this.initAnimation(), this.play(), !1 === t.autoplay && this.pause()
                }
                initAnimation() {
                    let {
                        options: t
                    } = this;
                    N(t);
                    let {
                        type: e = I,
                        repeat: i = 0,
                        repeatDelay: n = 0,
                        repeatType: s,
                        velocity: r = 0
                    } = t, {
                        keyframes: o
                    } = t, l = e || I;
                    l !== I && "number" != typeof o[0] && (this.mixKeyframes = (0, a.F)(W, (0, d.j)(o[0], o[1])), o = [0, 100]);
                    let u = l({
                        ...t,
                        keyframes: o
                    });
                    "mirror" === s && (this.mirroredGenerator = l({
                        ...t,
                        keyframes: [...o].reverse(),
                        velocity: -r
                    })), null === u.calculatedDuration && (u.calculatedDuration = (0, O.t)(u));
                    let {
                        calculatedDuration: h
                    } = u;
                    this.calculatedDuration = h, this.resolvedDuration = h + n, this.totalDuration = this.resolvedDuration * (i + 1) - n, this.generator = u
                }
                updateTime(t) {
                    let e = Math.round(t - this.startTime) * this.playbackSpeed;
                    null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = e
                }
                tick(t, e = !1) {
                    let {
                        generator: i,
                        totalDuration: n,
                        mixKeyframes: s,
                        mirroredGenerator: r,
                        resolvedDuration: a,
                        calculatedDuration: l
                    } = this;
                    if (null === this.startTime) return i.next(0);
                    let {
                        delay: u = 0,
                        keyframes: h,
                        repeat: d,
                        repeatType: p,
                        repeatDelay: c,
                        type: m,
                        onUpdate: v,
                        finalKeyframe: y
                    } = this.options;
                    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - n / this.speed, this.startTime)), e ? this.currentTime = t : this.updateTime(t);
                    let g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
                        b = this.playbackSpeed >= 0 ? g < 0 : g > n;
                    this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = n);
                    let w = this.currentTime,
                        T = i;
                    if (d) {
                        let t = Math.min(this.currentTime, n) / a,
                            e = Math.floor(t),
                            i = t % 1;
                        !i && t >= 1 && (i = 1), 1 === i && e--, (e = Math.min(e, d + 1)) % 2 && ("reverse" === p ? (i = 1 - i, c && (i -= c / a)) : "mirror" === p && (T = r)), w = (0, o.q)(0, 1, i) * a
                    }
                    let S = b ? {
                        done: !1,
                        value: h[0]
                    } : T.next(w);
                    s && (S.value = s(S.value));
                    let {
                        done: x
                    } = S;
                    b || null === l || (x = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
                    let M = null === this.holdTime && ("finished" === this.state || "running" === this.state && x);
                    return M && m !== f && (S.value = R(h, this.options, y, this.speed)), v && v(S.value), M && this.finish(), S
                }
                then(t, e) {
                    return this.finished.then(t, e)
                }
                get duration() {
                    return (0, l.X)(this.calculatedDuration)
                }
                get iterationDuration() {
                    let {
                        delay: t = 0
                    } = this.options || {};
                    return this.duration + (0, l.X)(t)
                }
                get time() {
                    return (0, l.X)(this.currentTime)
                }
                set time(t) {
                    t = (0, l.f)(t), this.currentTime = t, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.playbackSpeed), this.driver?.start(!1)
                }
                get speed() {
                    return this.playbackSpeed
                }
                set speed(t) {
                    this.updateTime(u.k.now());
                    let e = this.playbackSpeed !== t;
                    this.playbackSpeed = t, e && (this.time = (0, l.X)(this.currentTime))
                }
                play() {
                    if (this.isStopped) return;
                    let {
                        driver: t = p,
                        startTime: e
                    } = this.options;
                    this.driver || (this.driver = t(t => this.tick(t))), this.options.onPlay?.();
                    let i = this.driver.now();
                    "finished" === this.state ? (this.updateFinished(), this.startTime = i) : null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = e ?? i), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
                }
                pause() {
                    this.state = "paused", this.updateTime(u.k.now()), this.holdTime = this.currentTime
                }
                complete() {
                    "running" !== this.state && this.play(), this.state = "finished", this.holdTime = null
                }
                finish() {
                    this.notifyFinished(), this.teardown(), this.state = "finished", this.options.onComplete?.()
                }
                cancel() {
                    this.holdTime = null, this.startTime = 0, this.tick(0), this.teardown(), this.options.onCancel?.()
                }
                teardown() {
                    this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, h.q.mainThread--
                }
                stopDriver() {
                    this.driver && (this.driver.stop(), this.driver = void 0)
                }
                sample(t) {
                    return this.startTime = 0, this.tick(t, !0)
                }
                attachTimeline(t) {
                    return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), t.observe(this)
                }
            }
            var $ = i(34806),
                j = i(69842),
                Y = i(33221),
                G = i(34409),
                q = i(49854);
            let _ = {},
                U = function(t, e) {
                    let i = (0, q.p)(t);
                    return () => _[e] ?? i()
                }(() => {
                    try {
                        document.createElement("div").animate({
                            opacity: 0
                        }, {
                            easing: "linear(0, 1)"
                        })
                    } catch (t) {
                        return !1
                    }
                    return !0
                }, "linearEasing");
            var H = i(84628);
            let z = ([t, e, i, n]) => `cubic-bezier(${t}, ${e}, ${i}, ${n})`,
                Q = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: z([0, .65, .55, 1]),
                    circOut: z([.55, 0, 1, .45]),
                    backIn: z([.31, .01, .66, -.59]),
                    backOut: z([.33, 1.53, .69, .99])
                };
            var J = i(46495);
            class Z extends B {
                constructor(t) {
                    if (super(), this.finishedTime = null, this.isStopped = !1, !t) return;
                    let {
                        element: e,
                        name: i,
                        keyframes: n,
                        pseudoElement: s,
                        allowFlatten: r = !1,
                        finalKeyframe: a,
                        onComplete: o
                    } = t;
                    this.isPseudoElement = !!s, this.allowFlatten = r, this.options = t, (0, g.V)("string" != typeof t.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
                    let l = function({
                        type: t,
                        ...e
                    }) {
                        return (0, J.W)(t) && U() ? t.applyToOptions(e) : (e.duration ?? (e.duration = 300), e.ease ?? (e.ease = "easeOut"), e)
                    }(t);
                    this.animation = function(t, e, i, {
                        delay: n = 0,
                        duration: s = 300,
                        repeat: r = 0,
                        repeatType: a = "loop",
                        ease: o = "easeOut",
                        times: l
                    } = {}, u) {
                        let d = {
                            [e]: i
                        };
                        l && (d.offset = l);
                        let p = function t(e, i) {
                            if (e) return "function" == typeof e ? U() ? (0, H.K)(e, i) : "ease-out" : C(e) ? z(e) : Array.isArray(e) ? e.map(e => t(e, i) || Q.easeOut) : Q[e]
                        }(o, s);
                        Array.isArray(p) && (d.easing = p), G.Q.value && h.q.waapi++;
                        let c = {
                            delay: n,
                            duration: s,
                            easing: Array.isArray(p) ? "linear" : p,
                            fill: "both",
                            iterations: r + 1,
                            direction: "reverse" === a ? "alternate" : "normal"
                        };
                        u && (c.pseudoElement = u);
                        let m = t.animate(d, c);
                        return G.Q.value && m.finished.finally(() => {
                            h.q.waapi--
                        }), m
                    }(e, i, n, l, s), !1 === l.autoplay && this.animation.pause(), this.animation.onfinish = () => {
                        if (this.finishedTime = this.time, !s) {
                            let t = R(n, this.options, a, this.speed);
                            this.updateMotionValue ? this.updateMotionValue(t) : function(t, e, i) {
                                e.startsWith("--") ? t.style.setProperty(e, i) : t.style[e] = i
                            }(e, i, t), this.animation.cancel()
                        }
                        o?.(), this.notifyFinished()
                    }
                }
                play() {
                    this.isStopped || (this.animation.play(), "finished" === this.state && this.updateFinished())
                }
                pause() {
                    this.animation.pause()
                }
                complete() {
                    this.animation.finish?.()
                }
                cancel() {
                    try {
                        this.animation.cancel()
                    } catch (t) {}
                }
                stop() {
                    if (this.isStopped) return;
                    this.isStopped = !0;
                    let {
                        state: t
                    } = this;
                    "idle" !== t && "finished" !== t && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
                }
                commitStyles() {
                    this.isPseudoElement || this.animation.commitStyles?.()
                }
                get duration() {
                    let t = this.animation.effect?.getComputedTiming?.().duration || 0;
                    return (0, l.X)(Number(t))
                }
                get iterationDuration() {
                    let {
                        delay: t = 0
                    } = this.options || {};
                    return this.duration + (0, l.X)(t)
                }
                get time() {
                    return (0, l.X)(Number(this.animation.currentTime) || 0)
                }
                set time(t) {
                    this.finishedTime = null, this.animation.currentTime = (0, l.f)(t)
                }
                get speed() {
                    return this.animation.playbackRate
                }
                set speed(t) {
                    t < 0 && (this.finishedTime = null), this.animation.playbackRate = t
                }
                get state() {
                    return null !== this.finishedTime ? "finished" : this.animation.playState
                }
                get startTime() {
                    return Number(this.animation.startTime)
                }
                set startTime(t) {
                    this.animation.startTime = t
                }
                attachTimeline({
                    timeline: t,
                    observe: e
                }) {
                    return (this.allowFlatten && this.animation.effect?.updateTiming({
                        easing: "linear"
                    }), this.animation.onfinish = null, t && (0, Y.J)()) ? (this.animation.timeline = t, b.l) : e(this)
                }
            }
            let tt = {
                anticipate: A,
                backInOut: V,
                circInOut: k.tn
            };
            class te extends Z {
                constructor(t) {
                    ! function(t) {
                        "string" == typeof t.ease && t.ease in tt && (t.ease = tt[t.ease])
                    }(t), N(t), super(t), t.startTime && (this.startTime = t.startTime), this.options = t
                }
                updateMotionValue(t) {
                    let {
                        motionValue: e,
                        onUpdate: i,
                        onComplete: n,
                        element: s,
                        ...r
                    } = this.options;
                    if (!e) return;
                    if (void 0 !== t) return void e.set(t);
                    let a = new L({
                            ...r,
                            autoplay: !1
                        }),
                        o = (0, l.f)(this.finishedTime ?? this.time);
                    e.setWithVelocity(a.sample(o - 10).value, a.sample(o).value, 10), a.stop()
                }
            }
            var ti = i(32017);
            let tn = (t, e) => "zIndex" !== e && !!("number" == typeof t || Array.isArray(t) || "string" == typeof t && (ti.f.test(t) || "0" === t) && !t.startsWith("url(")),
                ts = new Set(["opacity", "clipPath", "filter", "transform"]),
                tr = (0, q.p)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
            class ta extends B {
                constructor({
                    autoplay: t = !0,
                    delay: e = 0,
                    type: i = "keyframes",
                    repeat: n = 0,
                    repeatDelay: s = 0,
                    repeatType: r = "loop",
                    keyframes: a,
                    name: o,
                    motionValue: l,
                    element: h,
                    ...d
                }) {
                    super(), this.stop = () => {
                        this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
                    }, this.createdAt = u.k.now();
                    let p = {
                            autoplay: t,
                            delay: e,
                            type: i,
                            repeat: n,
                            repeatDelay: s,
                            repeatType: r,
                            name: o,
                            motionValue: l,
                            element: h,
                            ...d
                        },
                        c = h?.KeyframeResolver || j.h;
                    this.keyframeResolver = new c(a, (t, e, i) => this.onKeyframesResolved(t, e, p, !i), o, l, h), this.keyframeResolver?.scheduleResolve()
                }
                onKeyframesResolved(t, e, i, n) {
                    this.keyframeResolver = void 0;
                    let {
                        name: r,
                        type: a,
                        velocity: o,
                        delay: l,
                        isHandoff: h,
                        onUpdate: d
                    } = i;
                    this.resolvedAt = u.k.now(), ! function(t, e, i, n) {
                        let s = t[0];
                        if (null === s) return !1;
                        if ("display" === e || "visibility" === e) return !0;
                        let r = t[t.length - 1],
                            a = tn(s, e),
                            o = tn(r, e);
                        return (0, g.$)(a === o, `You are trying to animate ${e} from "${s}" to "${r}". "${a?r:s}" is not an animatable value.`, "value-not-animatable"), !!a && !!o && (function(t) {
                            let e = t[0];
                            if (1 === t.length) return !0;
                            for (let i = 0; i < t.length; i++)
                                if (t[i] !== e) return !0
                        }(t) || ("spring" === i || (0, J.W)(i)) && n)
                    }(t, r, a, o) && (($.W.instantAnimations || !l) && d?.(R(t, i, e)), t[0] = t[t.length - 1], s(i), i.repeat = 0);
                    let p = {
                            startTime: n ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                            finalKeyframe: e,
                            ...i,
                            keyframes: t
                        },
                        c = !h && function(t) {
                            let {
                                motionValue: e,
                                name: i,
                                repeatDelay: n,
                                repeatType: s,
                                damping: r,
                                type: a
                            } = t;
                            if (!(e?.owner?.current instanceof HTMLElement)) return !1;
                            let {
                                onUpdate: o,
                                transformTemplate: l
                            } = e.owner.getProps();
                            return tr() && i && ts.has(i) && ("transform" !== i || !l) && !o && !n && "mirror" !== s && 0 !== r && "inertia" !== a
                        }(p) ? new te({
                            ...p,
                            element: p.motionValue.owner.current
                        }) : new L(p);
                    c.finished.then(() => this.notifyFinished()).catch(b.l), this.pendingTimeline && (this.stopTimeline = c.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = c
                }
                get finished() {
                    return this._animation ? this.animation.finished : this._finished
                }
                then(t, e) {
                    return this.finished.finally(t).then(() => {})
                }
                get animation() {
                    return this._animation || (this.keyframeResolver?.resume(), (0, j.q)()), this._animation
                }
                get duration() {
                    return this.animation.duration
                }
                get iterationDuration() {
                    return this.animation.iterationDuration
                }
                get time() {
                    return this.animation.time
                }
                set time(t) {
                    this.animation.time = t
                }
                get speed() {
                    return this.animation.speed
                }
                get state() {
                    return this.animation.state
                }
                set speed(t) {
                    this.animation.speed = t
                }
                get startTime() {
                    return this.animation.startTime
                }
                attachTimeline(t) {
                    return this._animation ? this.stopTimeline = this.animation.attachTimeline(t) : this.pendingTimeline = t, () => this.stop()
                }
                play() {
                    this.animation.play()
                }
                pause() {
                    this.animation.pause()
                }
                complete() {
                    this.animation.complete()
                }
                cancel() {
                    this._animation && this.animation.cancel(), this.keyframeResolver?.cancel()
                }
            }
            let to = t => null !== t;
            var tl = i(25877);
            let tu = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                th = {
                    type: "keyframes",
                    duration: .8
                },
                td = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                tp = (t, e, i, a = {}, o, u) => h => {
                    let d = (0, n.r)(a, t) || {},
                        p = d.delay || a.delay || 0,
                        {
                            elapsed: c = 0
                        } = a;
                    c -= (0, l.f)(p);
                    let m = {
                        keyframes: Array.isArray(i) ? i : [null, i],
                        ease: "easeOut",
                        velocity: e.getVelocity(),
                        ...d,
                        delay: -c,
                        onUpdate: t => {
                            e.set(t), d.onUpdate && d.onUpdate(t)
                        },
                        onComplete: () => {
                            h(), d.onComplete && d.onComplete()
                        },
                        name: t,
                        motionValue: e,
                        element: u ? void 0 : o
                    };
                    ! function({
                        when: t,
                        delay: e,
                        delayChildren: i,
                        staggerChildren: n,
                        staggerDirection: s,
                        repeat: r,
                        repeatType: a,
                        repeatDelay: o,
                        from: l,
                        elapsed: u,
                        ...h
                    }) {
                        return !!Object.keys(h).length
                    }(d) && Object.assign(m, ((t, {
                        keyframes: e
                    }) => e.length > 2 ? th : tl.f.has(t) ? t.startsWith("scale") ? {
                        type: "spring",
                        stiffness: 550,
                        damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
                        restSpeed: 10
                    } : tu : td)(t, m)), m.duration && (m.duration = (0, l.f)(m.duration)), m.repeatDelay && (m.repeatDelay = (0, l.f)(m.repeatDelay)), void 0 !== m.from && (m.keyframes[0] = m.from);
                    let f = !1;
                    if (!1 !== m.type && (0 !== m.duration || m.repeatDelay) || (s(m), 0 === m.delay && (f = !0)), ($.W.instantAnimations || $.W.skipAnimations) && (f = !0, s(m), m.delay = 0), m.allowFlatten = !d.type && !d.ease, f && !u && void 0 !== e.get()) {
                        let t = function(t, {
                            repeat: e,
                            repeatType: i = "loop"
                        }, n) {
                            let s = t.filter(to),
                                r = e && "loop" !== i && e % 2 == 1 ? 0 : s.length - 1;
                            return s[r]
                        }(m.keyframes, d);
                        if (void 0 !== t) return void r.Gt.update(() => {
                            m.onUpdate(t), m.onComplete()
                        })
                    }
                    return d.isSync ? new L(m) : new ta(m)
                }
        },
        65132: (t, e, i) => {
            i.d(e, {
                ge: () => a,
                xU: () => s
            });
            let n = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                s = () => ({
                    x: n(),
                    y: n()
                }),
                r = () => ({
                    min: 0,
                    max: 0
                }),
                a = () => ({
                    x: r(),
                    y: r()
                })
        },
        67005: (t, e, i) => {
            i.d(e, {
                J: () => o
            });
            var n = i(7787),
                s = i(5295),
                r = i(29115),
                a = i(422);
            let o = (t, e) => (0, a.Q)(t) ? new r.l(e) : new s.M(e, {
                allowProjection: t !== n.Fragment
            })
        },
        67092: (t, e, i) => {
            i.d(e, {
                p: () => n
            });
            let n = t => Array.isArray(t)
        },
        69842: (t, e, i) => {
            i.d(e, {
                h: () => p,
                q: () => d
            });
            var n = i(41199),
                s = i(15128);
            let r = new Set,
                a = !1,
                o = !1,
                l = !1;

            function u() {
                if (o) {
                    let t = Array.from(r).filter(t => t.needsMeasurement),
                        e = new Set(t.map(t => t.element)),
                        i = new Map;
                    e.forEach(t => {
                        let e = (0, n.W9)(t);
                        e.length && (i.set(t, e), t.render())
                    }), t.forEach(t => t.measureInitialState()), e.forEach(t => {
                        t.render();
                        let e = i.get(t);
                        e && e.forEach(([e, i]) => {
                            t.getValue(e)?.set(i)
                        })
                    }), t.forEach(t => t.measureEndState()), t.forEach(t => {
                        void 0 !== t.suspendedScrollY && window.scrollTo(0, t.suspendedScrollY)
                    })
                }
                o = !1, a = !1, r.forEach(t => t.complete(l)), r.clear()
            }

            function h() {
                r.forEach(t => {
                    t.readKeyframes(), t.needsMeasurement && (o = !0)
                })
            }

            function d() {
                l = !0, h(), u(), l = !1
            }
            class p {
                constructor(t, e, i, n, s, r = !1) {
                    this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...t], this.onComplete = e, this.name = i, this.motionValue = n, this.element = s, this.isAsync = r
                }
                scheduleResolve() {
                    this.state = "scheduled", this.isAsync ? (r.add(this), a || (a = !0, s.Gt.read(h), s.Gt.resolveKeyframes(u))) : (this.readKeyframes(), this.complete())
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e,
                        element: i,
                        motionValue: n
                    } = this;
                    if (null === t[0]) {
                        let s = n?.get(),
                            r = t[t.length - 1];
                        if (void 0 !== s) t[0] = s;
                        else if (i && e) {
                            let n = i.readValue(e, r);
                            null != n && (t[0] = n)
                        }
                        void 0 === t[0] && (t[0] = r), n && void 0 === s && n.set(t[0])
                    }
                    for (let e = 1; e < t.length; e++) t[e] ?? (t[e] = t[e - 1])
                }
                setFinalKeyframe() {}
                measureInitialState() {}
                renderEndStyles() {}
                measureEndState() {}
                complete(t = !1) {
                    this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, t), r.delete(this)
                }
                cancel() {
                    "scheduled" === this.state && (r.delete(this), this.state = "pending")
                }
                resume() {
                    "pending" === this.state && this.scheduleResolve()
                }
            }
        },
        72285: (t, e, i) => {
            i.d(e, {
                K: () => s
            });
            var n = i(83369);

            function s(t, e, i) {
                let s = t.getProps();
                return (0, n.a)(s, e, void 0 !== i ? i : s.custom, t)
            }
        },
        73690: (t, e, i) => {
            i.d(e, {
                J: () => a
            });
            var n = i(32017),
                s = i(26366),
                r = i(61993);

            function a(t, e) {
                let i = (0, r.D)(t);
                return i !== s.p && (i = n.f), i.getAnimatableNone ? i.getAnimatableNone(e) : void 0
            }
        },
        75532: (t, e, i) => {
            i.d(e, {
                X: () => n
            });
            class n {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
        },
        77366: (t, e, i) => {
            i.d(e, {
                o: () => f
            });
            var n = i(85683),
                s = i(54254),
                r = i(84628),
                a = i(79915),
                o = i(11041),
                l = i(96434);
            let u = {
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 0,
                duration: 800,
                bounce: .3,
                visualDuration: .3,
                restSpeed: {
                    granular: .01,
                    default: 2
                },
                restDelta: {
                    granular: .005,
                    default: .5
                },
                minDuration: .01,
                maxDuration: 10,
                minDamping: .05,
                maxDamping: 1
            };
            var h = i(58917);

            function d(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            let p = ["duration", "bounce"],
                c = ["stiffness", "damping", "mass"];

            function m(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function f(t = u.visualDuration, e = u.bounce) {
                let i, o = "object" != typeof t ? {
                        visualDuration: t,
                        keyframes: [0, 1],
                        bounce: e
                    } : t,
                    {
                        restSpeed: v,
                        restDelta: y
                    } = o,
                    g = o.keyframes[0],
                    b = o.keyframes[o.keyframes.length - 1],
                    w = {
                        done: !1,
                        value: g
                    },
                    {
                        stiffness: T,
                        damping: S,
                        mass: x,
                        duration: M,
                        velocity: V,
                        isResolvedFromDuration: A
                    } = function(t) {
                        let e = {
                            velocity: u.velocity,
                            stiffness: u.stiffness,
                            damping: u.damping,
                            mass: u.mass,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!m(t, c) && m(t, p))
                            if (t.visualDuration) {
                                let i = 2 * Math.PI / (1.2 * t.visualDuration),
                                    s = i * i,
                                    r = 2 * (0, n.q)(.05, 1, 1 - (t.bounce || 0)) * Math.sqrt(s);
                                e = {
                                    ...e,
                                    mass: u.mass,
                                    stiffness: s,
                                    damping: r
                                }
                            } else {
                                let i = function({
                                    duration: t = u.duration,
                                    bounce: e = u.bounce,
                                    velocity: i = u.velocity,
                                    mass: r = u.mass
                                }) {
                                    let a, o;
                                    (0, h.$)(t <= (0, s.f)(u.maxDuration), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                                    let l = 1 - e;
                                    l = (0, n.q)(u.minDamping, u.maxDamping, l), t = (0, n.q)(u.minDuration, u.maxDuration, (0, s.X)(t)), l < 1 ? (a = e => {
                                        let n = e * l,
                                            s = n * t;
                                        return .001 - (n - i) / d(e, l) * Math.exp(-s)
                                    }, o = e => {
                                        let n = e * l * t,
                                            s = Math.pow(l, 2) * Math.pow(e, 2) * t,
                                            r = Math.exp(-n),
                                            o = d(Math.pow(e, 2), l);
                                        return (n * i + i - s) * r * (-a(e) + .001 > 0 ? -1 : 1) / o
                                    }) : (a = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), o = e => t * t * (i - e) * Math.exp(-e * t));
                                    let p = function(t, e, i) {
                                        let n = i;
                                        for (let i = 1; i < 12; i++) n -= t(n) / e(n);
                                        return n
                                    }(a, o, 5 / t);
                                    if (t = (0, s.f)(t), isNaN(p)) return {
                                        stiffness: u.stiffness,
                                        damping: u.damping,
                                        duration: t
                                    };
                                    {
                                        let e = Math.pow(p, 2) * r;
                                        return {
                                            stiffness: e,
                                            damping: 2 * l * Math.sqrt(r * e),
                                            duration: t
                                        }
                                    }
                                }(t);
                                (e = {
                                    ...e,
                                    ...i,
                                    mass: u.mass
                                }).isResolvedFromDuration = !0
                            } return e
                    }({
                        ...o,
                        velocity: -(0, s.X)(o.velocity || 0)
                    }),
                    k = V || 0,
                    C = S / (2 * Math.sqrt(T * x)),
                    P = b - g,
                    E = (0, s.X)(Math.sqrt(T / x)),
                    F = 5 > Math.abs(P);
                if (v || (v = F ? u.restSpeed.granular : u.restSpeed.default), y || (y = F ? u.restDelta.granular : u.restDelta.default), C < 1) {
                    let t = d(E, C);
                    i = e => b - Math.exp(-C * E * e) * ((k + C * E * P) / t * Math.sin(t * e) + P * Math.cos(t * e))
                } else if (1 === C) i = t => b - Math.exp(-E * t) * (P + (k + E * P) * t);
                else {
                    let t = E * Math.sqrt(C * C - 1);
                    i = e => {
                        let i = Math.exp(-C * E * e),
                            n = Math.min(t * e, 300);
                        return b - i * ((k + C * E * P) * Math.sinh(n) + t * P * Math.cosh(n)) / t
                    }
                }
                let D = {
                    calculatedDuration: A && M || null,
                    next: t => {
                        let e = i(t);
                        if (A) w.done = t >= M;
                        else {
                            let n = 0 === t ? k : 0;
                            C < 1 && (n = 0 === t ? (0, s.f)(k) : (0, l.Y)(i, t, e));
                            let r = Math.abs(b - e) <= y;
                            w.done = Math.abs(n) <= v && r
                        }
                        return w.value = w.done ? b : e, w
                    },
                    toString: () => {
                        let t = Math.min((0, a.t)(D), a.Y),
                            e = (0, r.K)(e => D.next(t * e).value, t, 30);
                        return t + "ms " + e
                    },
                    toTransition: () => {}
                };
                return D
            }
            f.applyToOptions = t => {
                let e = (0, o.X)(t, 100, f);
                return t.ease = e.ease, t.duration = (0, s.f)(e.duration), t.type = "keyframes", t
            }
        },
        78106: (t, e, i) => {
            i.d(e, {
                A: () => r
            });
            var n = i(80696);
            let s = (t, e, i) => (((1 - 3 * i + 3 * e) * t + (3 * i - 6 * e)) * t + 3 * e) * t;

            function r(t, e, i, r) {
                return t === e && i === r ? n.l : n => 0 === n || 1 === n ? n : s(function(t, e, i, n, r) {
                    let a, o, l = 0;
                    do(a = s(o = e + (i - e) / 2, n, r) - t) > 0 ? i = o : e = o; while (Math.abs(a) > 1e-7 && ++l < 12);
                    return o
                }(n, 0, 1, t, i), e, r)
            }
        },
        79915: (t, e, i) => {
            i.d(e, {
                Y: () => n,
                t: () => s
            });
            let n = 2e4;

            function s(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < n;) e += 50, i = t.next(e);
                return e >= n ? 1 / 0 : e
            }
        },
        80229: (t, e, i) => {
            i.d(e, {
                po: () => r,
                tn: () => o,
                yT: () => a
            });
            var n = i(12e3),
                s = i(56203);
            let r = t => 1 - Math.sin(Math.acos(t)),
                a = (0, s.G)(r),
                o = (0, n.V)(r)
        },
        80432: (t, e, i) => {
            i.d(e, {
                F: () => r,
                e: () => s
            });
            var n = i(51519);

            function s(t) {
                return {
                    point: {
                        x: t.pageX,
                        y: t.pageY
                    }
                }
            }
            let r = t => e => (0, n.M)(e) && t(e, s(e))
        },
        84628: (t, e, i) => {
            i.d(e, {
                K: () => n
            });
            let n = (t, e, i = 10) => {
                let n = "",
                    s = Math.max(Math.round(e / i), 2);
                for (let e = 0; e < s; e++) n += Math.round(1e4 * t(e / (s - 1))) / 1e4 + ", ";
                return `linear(${n.substring(0,n.length-2)})`
            }
        },
        84701: (t, e, i) => {
            i.d(e, {
                b: () => g
            });
            var n = i(25188),
                s = i(57296),
                r = i(58917),
                a = i(40443),
                o = i(5457);
            let l = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
            var u = i(69842),
                h = i(45199),
                d = i(32017),
                p = i(73690);
            let c = new Set(["auto", "none", "0"]);
            var m = i(41199);
            class f extends u.h {
                constructor(t, e, i, n, s) {
                    super(t, e, i, n, s, !0)
                }
                readKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        element: e,
                        name: i
                    } = this;
                    if (!e || !e.current) return;
                    super.readKeyframes();
                    for (let i = 0; i < t.length; i++) {
                        let n = t[i];
                        if ("string" == typeof n && (n = n.trim(), (0, o.p)(n))) {
                            let s = function t(e, i, n = 1) {
                                (0, r.V)(n <= 4, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
                                let [s, u] = function(t) {
                                    let e = l.exec(t);
                                    if (!e) return [, ];
                                    let [, i, n, s] = e;
                                    return [`--${i??n}`, s]
                                }(e);
                                if (!s) return;
                                let h = window.getComputedStyle(i).getPropertyValue(s);
                                if (h) {
                                    let t = h.trim();
                                    return (0, a.i)(t) ? parseFloat(t) : t
                                }
                                return (0, o.p)(u) ? t(u, i, n + 1) : u
                            }(n, e.current);
                            void 0 !== s && (t[i] = s), i === t.length - 1 && (this.finalKeyframe = n)
                        }
                    }
                    if (this.resolveNoneKeyframes(), !n.$.has(i) || 2 !== t.length) return;
                    let [u, h] = t, d = (0, s.n)(u), p = (0, s.n)(h);
                    if (d !== p)
                        if ((0, m.E4)(d) && (0, m.E4)(p))
                            for (let e = 0; e < t.length; e++) {
                                let i = t[e];
                                "string" == typeof i && (t[e] = parseFloat(i))
                            } else m.Hr[i] && (this.needsMeasurement = !0)
                }
                resolveNoneKeyframes() {
                    let {
                        unresolvedKeyframes: t,
                        name: e
                    } = this, i = [];
                    for (let e = 0; e < t.length; e++) {
                        var n;
                        (null === t[e] || ("number" == typeof(n = t[e]) ? 0 === n : null === n || "none" === n || "0" === n || (0, h.$)(n))) && i.push(e)
                    }
                    i.length && function(t, e, i) {
                        let n, s = 0;
                        for (; s < t.length && !n;) {
                            let e = t[s];
                            "string" == typeof e && !c.has(e) && (0, d.V)(e).values.length && (n = t[s]), s++
                        }
                        if (n && i)
                            for (let s of e) t[s] = (0, p.J)(i, n)
                    }(t, i, e)
                }
                measureInitialState() {
                    let {
                        element: t,
                        unresolvedKeyframes: e,
                        name: i
                    } = this;
                    if (!t || !t.current) return;
                    "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = m.Hr[i](t.measureViewportBox(), window.getComputedStyle(t.current)), e[0] = this.measuredOrigin;
                    let n = e[e.length - 1];
                    void 0 !== n && t.getValue(i, n).jump(n, !1)
                }
                measureEndState() {
                    let {
                        element: t,
                        name: e,
                        unresolvedKeyframes: i
                    } = this;
                    if (!t || !t.current) return;
                    let n = t.getValue(e);
                    n && n.jump(this.measuredOrigin, !1);
                    let s = i.length - 1,
                        r = i[s];
                    i[s] = m.Hr[e](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== r && void 0 === this.finalKeyframe && (this.finalKeyframe = r), this.removedTransforms?.length && this.removedTransforms.forEach(([e, i]) => {
                        t.getValue(e).set(i)
                    }), this.resolveNoneKeyframes()
                }
            }
            var v = i(24200),
                y = i(36673);
            class g extends y.B {
                constructor() {
                    super(...arguments), this.KeyframeResolver = f
                }
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: i
                }) {
                    delete e[t], delete i[t]
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    (0, v.S)(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
            }
        },
        85525: (t, e, i) => {
            i.d(e, {
                Ib: () => p,
                ry: () => d,
                zs: () => h
            });
            let n = t => 180 * t / Math.PI,
                s = t => a(n(Math.atan2(t[1], t[0]))),
                r = {
                    x: 4,
                    y: 5,
                    translateX: 4,
                    translateY: 5,
                    scaleX: 0,
                    scaleY: 3,
                    scale: t => (Math.abs(t[0]) + Math.abs(t[3])) / 2,
                    rotate: s,
                    rotateZ: s,
                    skewX: t => n(Math.atan(t[1])),
                    skewY: t => n(Math.atan(t[2])),
                    skew: t => (Math.abs(t[1]) + Math.abs(t[2])) / 2
                },
                a = t => ((t %= 360) < 0 && (t += 360), t),
                o = t => Math.sqrt(t[0] * t[0] + t[1] * t[1]),
                l = t => Math.sqrt(t[4] * t[4] + t[5] * t[5]),
                u = {
                    x: 12,
                    y: 13,
                    z: 14,
                    translateX: 12,
                    translateY: 13,
                    translateZ: 14,
                    scaleX: o,
                    scaleY: l,
                    scale: t => (o(t) + l(t)) / 2,
                    rotateX: t => a(n(Math.atan2(t[6], t[5]))),
                    rotateY: t => a(n(Math.atan2(-t[2], t[0]))),
                    rotateZ: s,
                    rotate: s,
                    skewX: t => n(Math.atan(t[4])),
                    skewY: t => n(Math.atan(t[1])),
                    skew: t => (Math.abs(t[1]) + Math.abs(t[4])) / 2
                };

            function h(t) {
                return +!!t.includes("scale")
            }

            function d(t, e) {
                let i, n;
                if (!t || "none" === t) return h(e);
                let s = t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
                if (s) i = u, n = s;
                else {
                    let e = t.match(/^matrix\(([-\d.e\s,]+)\)$/u);
                    i = r, n = e
                }
                if (!n) return h(e);
                let a = i[e],
                    o = n[1].split(",").map(c);
                return "function" == typeof a ? a(o) : o[a]
            }
            let p = (t, e) => {
                let {
                    transform: i = "none"
                } = getComputedStyle(t);
                return d(i, e)
            };

            function c(t) {
                return parseFloat(t.trim())
            }
        },
        85828: (t, e, i) => {
            i.d(e, {
                k: () => n
            });

            function n(t, e, i, s = {
                passive: !0
            }) {
                return t.addEventListener(e, i, s), () => t.removeEventListener(e, i)
            }
        },
        89322: (t, e, i) => {
            i.d(e, {
                g: () => r
            });
            var n = i(34806),
                s = i(24200);

            function r(t, e) {
                let i = t.getValue("willChange");
                if ((0, s.S)(i) && i.add) return i.add(e);
                if (!i && n.W.WillChange) {
                    let i = new n.W.WillChange("auto");
                    t.addValue("willChange", i), i.add(e)
                }
            }
        },
        90086: (t, e, i) => {
            i.d(e, {
                e: () => n
            });

            function n(t, {
                style: e,
                vars: i
            }, n, s) {
                let r, a = t.style;
                for (r in e) a[r] = e[r];
                for (r in s?.applyProjectionStyles(a, n), i) a.setProperty(r, i[r])
            }
        },
        91820: (t, e, i) => {
            i.d(e, {
                k: () => n
            });
            let {
                schedule: n
            } = (0, i(2028).I)(queueMicrotask, !1)
        },
        96434: (t, e, i) => {
            i.d(e, {
                Y: () => s
            });
            var n = i(65230);

            function s(t, e, i) {
                let s = Math.max(e - 5, 0);
                return (0, n.f)(i - t(s), e - s)
            }
        },
        97207: (t, e, i) => {
            i.d(e, {
                n: () => F
            });
            var n = i(15128),
                s = i(41722),
                r = i(55123);

            function a(t, e) {
                let i = (0, r.K)(t),
                    n = new AbortController;
                return [i, {
                    passive: !0,
                    ...e,
                    signal: n.signal
                }, () => n.abort()]
            }

            function o(t) {
                return !("touch" === t.pointerType || (0, s.D)())
            }
            var l = i(80432),
                u = i(75532);

            function h(t, e, i) {
                let {
                    props: s
                } = t;
                t.animationState && s.whileHover && t.animationState.setActive("whileHover", "Start" === i);
                let r = s["onHover" + i];
                r && n.Gt.postRender(() => r(e, (0, l.e)(e)))
            }
            class d extends u.X {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, i = {}) {
                        let [n, s, r] = a(t, i), l = t => {
                            if (!o(t)) return;
                            let {
                                target: i
                            } = t, n = e(i, t);
                            if ("function" != typeof n || !i) return;
                            let r = t => {
                                o(t) && (n(t), i.removeEventListener("pointerleave", r))
                            };
                            i.addEventListener("pointerleave", r, s)
                        };
                        return n.forEach(t => {
                            t.addEventListener("pointerenter", l, s)
                        }), r
                    }(t, (t, e) => (h(this.node, e, "Start"), t => h(this.node, t, "End"))))
                }
                unmount() {}
            }
            var p = i(11852),
                c = i(85828);
            class m extends u.X {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = (0, p.F)((0, c.k)(this.node.current, "focus", () => this.onFocus()), (0, c.k)(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
            var f = i(56304);
            let v = (t, e) => !!e && (t === e || v(t, e.parentElement));
            var y = i(51519);
            let g = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
                b = new WeakSet;

            function w(t) {
                return e => {
                    "Enter" === e.key && t(e)
                }
            }

            function T(t, e) {
                t.dispatchEvent(new PointerEvent("pointer" + e, {
                    isPrimary: !0,
                    bubbles: !0
                }))
            }

            function S(t) {
                return (0, y.M)(t) && !(0, s.D)()
            }

            function x(t, e, i) {
                let {
                    props: s
                } = t;
                if (t.current instanceof HTMLButtonElement && t.current.disabled) return;
                t.animationState && s.whileTap && t.animationState.setActive("whileTap", "Start" === i);
                let r = s["onTap" + ("End" === i ? "" : i)];
                r && n.Gt.postRender(() => r(e, (0, l.e)(e)))
            }
            class M extends u.X {
                mount() {
                    let {
                        current: t
                    } = this.node;
                    t && (this.unmount = function(t, e, i = {}) {
                        let [n, s, r] = a(t, i), o = t => {
                            let n = t.currentTarget;
                            if (!S(t)) return;
                            b.add(n);
                            let r = e(n, t),
                                a = (t, e) => {
                                    window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", l), b.has(n) && b.delete(n), S(t) && "function" == typeof r && r(t, {
                                        success: e
                                    })
                                },
                                o = t => {
                                    a(t, n === window || n === document || i.useGlobalTarget || v(n, t.target))
                                },
                                l = t => {
                                    a(t, !1)
                                };
                            window.addEventListener("pointerup", o, s), window.addEventListener("pointercancel", l, s)
                        };
                        return n.forEach(t => {
                            ((i.useGlobalTarget ? window : t).addEventListener("pointerdown", o, s), (0, f.s)(t)) && (t.addEventListener("focus", t => ((t, e) => {
                                let i = t.currentTarget;
                                if (!i) return;
                                let n = w(() => {
                                    if (b.has(i)) return;
                                    T(i, "down");
                                    let t = w(() => {
                                        T(i, "up")
                                    });
                                    i.addEventListener("keyup", t, e), i.addEventListener("blur", () => T(i, "cancel"), e)
                                });
                                i.addEventListener("keydown", n, e), i.addEventListener("blur", () => i.removeEventListener("keydown", n), e)
                            })(t, s)), g.has(t.tagName) || -1 !== t.tabIndex || t.hasAttribute("tabindex") || (t.tabIndex = 0))
                        }), r
                    }(t, (t, e) => (x(this.node, e, "Start"), (t, {
                        success: e
                    }) => x(this.node, t, e ? "End" : "Cancel")), {
                        useGlobalTarget: this.node.props.globalTapTarget
                    }))
                }
                unmount() {}
            }
            let V = new WeakMap,
                A = new WeakMap,
                k = t => {
                    let e = V.get(t.target);
                    e && e(t)
                },
                C = t => {
                    t.forEach(k)
                },
                P = {
                    some: 0,
                    all: 1
                };
            class E extends u.X {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    this.unmount();
                    let {
                        viewport: t = {}
                    } = this.node.getProps(), {
                        root: e,
                        margin: i,
                        amount: n = "some",
                        once: s
                    } = t, r = {
                        root: e ? e.current : void 0,
                        rootMargin: i,
                        threshold: "number" == typeof n ? n : P[n]
                    }, a = t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, s && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: i,
                            onViewportLeave: n
                        } = this.node.getProps(), r = e ? i : n;
                        r && r(t)
                    };
                    var o = this.node.current;
                    let l = function({
                        root: t,
                        ...e
                    }) {
                        let i = t || document;
                        A.has(i) || A.set(i, {});
                        let n = A.get(i),
                            s = JSON.stringify(e);
                        return n[s] || (n[s] = new IntersectionObserver(C, {
                            root: t,
                            ...e
                        })), n[s]
                    }(r);
                    return V.set(o, a), l.observe(o), () => {
                        V.delete(o), l.unobserve(o)
                    }
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("undefined" == typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return i => t[i] !== e[i]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            let F = {
                inView: {
                    Feature: E
                },
                tap: {
                    Feature: M
                },
                focus: {
                    Feature: m
                },
                hover: {
                    Feature: d
                }
            }
        }
    }
]);