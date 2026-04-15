(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 238740, e => {
    "use strict";
    let t = e => 180 * e / Math.PI,
        i = e => n(t(Math.atan2(e[1], e[0]))),
        s = {
            x: 4,
            y: 5,
            translateX: 4,
            translateY: 5,
            scaleX: 0,
            scaleY: 3,
            scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
            rotate: i,
            rotateZ: i,
            skewX: e => t(Math.atan(e[1])),
            skewY: e => t(Math.atan(e[2])),
            skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
        },
        n = e => ((e %= 360) < 0 && (e += 360), e),
        a = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
        r = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
        o = {
            x: 12,
            y: 13,
            z: 14,
            translateX: 12,
            translateY: 13,
            translateZ: 14,
            scaleX: a,
            scaleY: r,
            scale: e => (a(e) + r(e)) / 2,
            rotateX: e => n(t(Math.atan2(e[6], e[5]))),
            rotateY: e => n(t(Math.atan2(-e[2], e[0]))),
            rotateZ: i,
            rotate: i,
            skewX: e => t(Math.atan(e[4])),
            skewY: e => t(Math.atan(e[1])),
            skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
        };

    function l(e) {
        return +!!e.includes("scale")
    }

    function u(e, t) {
        let i, n;
        if (!e || "none" === e) return l(t);
        let a = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (a) i = o, n = a;
        else {
            let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
            i = s, n = t
        }
        if (!n) return l(t);
        let r = i[t],
            u = n[1].split(",").map(c);
        return "function" == typeof r ? r(u) : u[r]
    }
    let h = (e, t) => {
        let {
            transform: i = "none"
        } = getComputedStyle(e);
        return u(i, t)
    };

    function c(e) {
        return parseFloat(e.trim())
    }
    e.s(["defaultTransformValue", () => l, "parseValueFromTransform", () => u, "readTransformValue", () => h])
}, 328472, e => {
    "use strict";

    function t({
        top: e,
        left: t,
        right: i,
        bottom: s
    }) {
        return {
            x: {
                min: t,
                max: i
            },
            y: {
                min: e,
                max: s
            }
        }
    }

    function i({
        x: e,
        y: t
    }) {
        return {
            top: t.min,
            right: e.max,
            bottom: t.max,
            left: e.min
        }
    }

    function s(e, t) {
        if (!t) return e;
        let i = t({
                x: e.left,
                y: e.top
            }),
            s = t({
                x: e.right,
                y: e.bottom
            });
        return {
            top: i.y,
            left: i.x,
            bottom: s.y,
            right: s.x
        }
    }
    e.s(["convertBoundingBoxToBox", () => t, "convertBoxToBoundingBox", () => i, "transformBoxPoints", () => s])
}, 595328, 317202, 311878, e => {
    "use strict";
    var t = e.i(328472),
        i = e.i(647480);

    function s(e) {
        return void 0 === e || 1 === e
    }

    function n({
        scale: e,
        scaleX: t,
        scaleY: i
    }) {
        return !s(e) || !s(t) || !s(i)
    }

    function a(e) {
        return n(e) || r(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
    }

    function r(e) {
        var t, i;
        return (t = e.x) && "0%" !== t || (i = e.y) && "0%" !== i
    }

    function o(e, t, i) {
        return i + t * (e - i)
    }

    function l(e, t, i, s, n) {
        return void 0 !== n && (e = s + n * (e - s)), s + i * (e - s) + t
    }

    function u(e, t = 0, i = 1, s, n) {
        e.min = l(e.min, t, i, s, n), e.max = l(e.max, t, i, s, n)
    }

    function h(e, {
        x: t,
        y: i
    }) {
        u(e.x, t.translate, t.scale, t.originPoint), u(e.y, i.translate, i.scale, i.originPoint)
    }

    function c(e, t, i, s = !1) {
        let n, r, o = i.length;
        if (o) {
            t.x = t.y = 1;
            for (let l = 0; l < o; l++) {
                r = (n = i[l]).projectionDelta;
                let {
                    visualElement: o
                } = n.options;
                (!o || !o.props.style || "contents" !== o.props.style.display) && (s && n.options.layoutScroll && n.scroll && n !== n.root && p(e, {
                    x: -n.scroll.offset.x,
                    y: -n.scroll.offset.y
                }), r && (t.x *= r.x.scale, t.y *= r.y.scale, h(e, r)), s && a(n.latestValues) && p(e, n.latestValues))
            }
            t.x < 1.0000000000001 && t.x > .999999999999 && (t.x = 1), t.y < 1.0000000000001 && t.y > .999999999999 && (t.y = 1)
        }
    }

    function d(e, t) {
        e.min = e.min + t, e.max = e.max + t
    }

    function m(e, t, s, n, a = .5) {
        let r = (0, i.mixNumber)(e.min, e.max, a);
        u(e, t, s, r, n)
    }

    function p(e, t) {
        m(e.x, t.x, t.scaleX, t.scale, t.originX), m(e.y, t.y, t.scaleY, t.scale, t.originY)
    }

    function f(e, i) {
        return (0, t.convertBoundingBoxToBox)((0, t.transformBoxPoints)(e.getBoundingClientRect(), i))
    }

    function y(e, t, i) {
        let s = f(e, i),
            {
                scroll: n
            } = t;
        return n && (d(s.x, n.offset.x), d(s.y, n.offset.y)), s
    }
    e.s(["has2DTranslate", () => r, "hasScale", () => n, "hasTransform", () => a], 317202), e.s(["applyBoxDelta", () => h, "applyTreeDeltas", () => c, "scalePoint", () => o, "transformBox", () => p, "translateAxis", () => d], 311878), e.s(["measurePageBox", () => y, "measureViewportBox", () => f], 595328)
}, 444948, e => {
    "use strict";
    let t = new Set(["width", "height", "top", "left", "right", "bottom", ...e.i(229859).transformPropOrder]);
    e.s(["positionalKeys", () => t])
}, 896091, 960125, 811855, 110332, e => {
    "use strict";
    var t = e.i(960851),
        i = e.i(21365);
    let s = e => t => t.test(e);
    e.s(["testValueType", () => s], 960125);
    let n = [t.number, i.px, i.percent, i.degrees, i.vw, i.vh, {
            test: e => "auto" === e,
            parse: e => e
        }],
        a = e => n.find(s(e));
    e.s(["dimensionValueTypes", () => n, "findDimensionValueType", () => a], 896091);
    var r = e.i(348367);
    let o = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
    e.s(["isNumericalString", () => o], 811855);
    var l = e.i(242210);
    let u = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
    e.s(["getVariableValue", () => function e(t, i, s = 1) {
        (0, r.invariant)(s <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
        let [n, a] = function(e) {
            let t = u.exec(e);
            if (!t) return [, ];
            let [, i, s, n] = t;
            return [`--${i??s}`, n]
        }(t);
        if (!n) return;
        let h = window.getComputedStyle(i).getPropertyValue(n);
        if (h) {
            let e = h.trim();
            return o(e) ? parseFloat(e) : e
        }
        return (0, l.isCSSVariableToken)(a) ? e(a, i, s + 1) : a
    }], 110332)
}, 537466, e => {
    "use strict";

    function t(e) {
        for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1])
    }
    e.s(["fillWildcards", () => t])
}, 883582, 400857, e => {
    "use strict";
    var t = e.i(537466),
        i = e.i(238740),
        s = e.i(229859),
        n = e.i(960851),
        a = e.i(21365);
    let r = e => e === n.number || e === a.px,
        o = new Set(["x", "y", "z"]),
        l = s.transformPropOrder.filter(e => !o.has(e));

    function u(e) {
        let t = [];
        return l.forEach(i => {
            let s = e.getValue(i);
            void 0 !== s && (t.push([i, s.get()]), s.set(+!!i.startsWith("scale")))
        }), t
    }
    let h = {
        width: ({
            x: e
        }, {
            paddingLeft: t = "0",
            paddingRight: i = "0"
        }) => e.max - e.min - parseFloat(t) - parseFloat(i),
        height: ({
            y: e
        }, {
            paddingTop: t = "0",
            paddingBottom: i = "0"
        }) => e.max - e.min - parseFloat(t) - parseFloat(i),
        top: (e, {
            top: t
        }) => parseFloat(t),
        left: (e, {
            left: t
        }) => parseFloat(t),
        bottom: ({
            y: e
        }, {
            top: t
        }) => parseFloat(t) + (e.max - e.min),
        right: ({
            x: e
        }, {
            left: t
        }) => parseFloat(t) + (e.max - e.min),
        x: (e, {
            transform: t
        }) => (0, i.parseValueFromTransform)(t, "x"),
        y: (e, {
            transform: t
        }) => (0, i.parseValueFromTransform)(t, "y")
    };
    h.translateX = h.x, h.translateY = h.y, e.s(["isNumOrPxType", () => r, "positionalValues", () => h, "removeNonTranslationalTransform", () => u], 400857);
    var c = e.i(347248);
    let d = new Set,
        m = !1,
        p = !1,
        f = !1;

    function y() {
        if (p) {
            let e = Array.from(d).filter(e => e.needsMeasurement),
                t = new Set(e.map(e => e.element)),
                i = new Map;
            t.forEach(e => {
                let t = u(e);
                t.length && (i.set(e, t), e.render())
            }), e.forEach(e => e.measureInitialState()), t.forEach(e => {
                e.render();
                let t = i.get(e);
                t && t.forEach(([t, i]) => {
                    e.getValue(t)?.set(i)
                })
            }), e.forEach(e => e.measureEndState()), e.forEach(e => {
                void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
            })
        }
        p = !1, m = !1, d.forEach(e => e.complete(f)), d.clear()
    }

    function g() {
        d.forEach(e => {
            e.readKeyframes(), e.needsMeasurement && (p = !0)
        })
    }

    function v() {
        f = !0, g(), y(), f = !1
    }
    class T {
        constructor(e, t, i, s, n, a = !1) {
            this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = i, this.motionValue = s, this.element = n, this.isAsync = a
        }
        scheduleResolve() {
            this.state = "scheduled", this.isAsync ? (d.add(this), m || (m = !0, c.frame.read(g), c.frame.resolveKeyframes(y))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: e,
                name: i,
                element: s,
                motionValue: n
            } = this;
            if (null === e[0]) {
                let t = n?.get(),
                    a = e[e.length - 1];
                if (void 0 !== t) e[0] = t;
                else if (s && i) {
                    let t = s.readValue(i, a);
                    null != t && (e[0] = t)
                }
                void 0 === e[0] && (e[0] = a), n && void 0 === t && n.set(e[0])
            }(0, t.fillWildcards)(e)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(e = !1) {
            this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), d.delete(this)
        }
        cancel() {
            "scheduled" === this.state && (d.delete(this), this.state = "pending")
        }
        resume() {
            "pending" === this.state && this.scheduleResolve()
        }
    }
    e.s(["KeyframeResolver", () => T, "flushKeyframeResolvers", () => v], 883582)
}, 636056, 440919, 210973, 920885, 946974, e => {
    "use strict";
    var t = e.i(444948),
        i = e.i(896091),
        s = e.i(110332),
        n = e.i(242210),
        a = e.i(883582);
    let r = e => /^0[^.\s]+$/u.test(e);
    e.s(["isZeroValueString", () => r], 440919);
    var o = e.i(377149),
        l = e.i(801935);
    let u = new Set(["brightness", "contrast", "saturate", "opacity"]);

    function h(e) {
        let [t, i] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [s] = i.match(l.floatRegex) || [];
        if (!s) return e;
        let n = i.replace(s, ""),
            a = +!!u.has(t);
        return s !== i && (a *= 100), t + "(" + a + n + ")"
    }
    let c = /\b([a-z-]*)\(.*?\)/gu,
        d = {
            ...o.complex,
            getAnimatableNone: e => {
                let t = e.match(c);
                return t ? t.map(h).join(" ") : e
            }
        };
    var m = e.i(168826);
    let p = {
            ...e.i(124424).numberValueTypes,
            color: m.color,
            backgroundColor: m.color,
            outlineColor: m.color,
            fill: m.color,
            stroke: m.color,
            borderColor: m.color,
            borderTopColor: m.color,
            borderRightColor: m.color,
            borderBottomColor: m.color,
            borderLeftColor: m.color,
            filter: d,
            WebkitFilter: d
        },
        f = e => p[e];

    function y(e, t) {
        let i = f(e);
        return i !== d && (i = o.complex), i.getAnimatableNone ? i.getAnimatableNone(t) : void 0
    }
    e.s(["getDefaultValueType", () => f], 210973), e.s(["getAnimatableNone", () => y], 920885);
    let g = new Set(["auto", "none", "0"]);
    var v = e.i(400857);
    class T extends a.KeyframeResolver {
        constructor(e, t, i, s, n) {
            super(e, t, i, s, n, !0)
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: e,
                element: a,
                name: r
            } = this;
            if (!a || !a.current) return;
            super.readKeyframes();
            for (let t = 0; t < e.length; t++) {
                let i = e[t];
                if ("string" == typeof i && (i = i.trim(), (0, n.isCSSVariableToken)(i))) {
                    let n = (0, s.getVariableValue)(i, a.current);
                    void 0 !== n && (e[t] = n), t === e.length - 1 && (this.finalKeyframe = i)
                }
            }
            if (this.resolveNoneKeyframes(), !t.positionalKeys.has(r) || 2 !== e.length) return;
            let [o, l] = e, u = (0, i.findDimensionValueType)(o), h = (0, i.findDimensionValueType)(l);
            if (u !== h)
                if ((0, v.isNumOrPxType)(u) && (0, v.isNumOrPxType)(h))
                    for (let t = 0; t < e.length; t++) {
                        let i = e[t];
                        "string" == typeof i && (e[t] = parseFloat(i))
                    } else v.positionalValues[r] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
            let {
                unresolvedKeyframes: e,
                name: t
            } = this, i = [];
            for (let t = 0; t < e.length; t++) {
                var s;
                (null === e[t] || ("number" == typeof(s = e[t]) ? 0 === s : null === s || "none" === s || "0" === s || r(s))) && i.push(t)
            }
            i.length && function(e, t, i) {
                let s, n = 0;
                for (; n < e.length && !s;) {
                    let t = e[n];
                    "string" == typeof t && !g.has(t) && (0, o.analyseComplexValue)(t).values.length && (s = e[n]), n++
                }
                if (s && i)
                    for (let n of t) e[n] = y(i, s)
            }(e, i, t)
        }
        measureInitialState() {
            let {
                element: e,
                unresolvedKeyframes: t,
                name: i
            } = this;
            if (!e || !e.current) return;
            "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = v.positionalValues[i](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
            let s = t[t.length - 1];
            void 0 !== s && e.getValue(i, s).jump(s, !1)
        }
        measureEndState() {
            let {
                element: e,
                name: t,
                unresolvedKeyframes: i
            } = this;
            if (!e || !e.current) return;
            let s = e.getValue(t);
            s && s.jump(this.measuredOrigin, !1);
            let n = i.length - 1,
                a = i[n];
            i[n] = v.positionalValues[t](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== a && void 0 === this.finalKeyframe && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i)
            }), this.resolveNoneKeyframes()
        }
    }
    e.s(["DOMKeyframesResolver", () => T], 636056);
    var V = e.i(960125);
    let M = [...i.dimensionValueTypes, m.color, o.complex],
        b = e => M.find((0, V.testValueType)(e));
    e.s(["findValueType", () => b], 946974)
}, 984776, e => {
    "use strict";
    let {
        schedule: t
    } = (0, e.i(817967).createRenderBatcher)(queueMicrotask, !1);
    e.s(["microtask", () => t])
}, 599696, e => {
    "use strict";
    let t = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        }),
        i = () => ({
            x: t(),
            y: t()
        }),
        s = () => ({
            min: 0,
            max: 0
        }),
        n = () => ({
            x: s(),
            y: s()
        });
    e.s(["createBox", () => n, "createDelta", () => i])
}, 590294, e => {
    "use strict";
    let t = new WeakMap;
    e.s(["visualElementStore", () => t])
}, 399842, 928437, 470097, e => {
    "use strict";
    var t = e.i(229859),
        i = e.i(238740),
        s = e.i(242210),
        n = e.i(595328),
        a = e.i(636056),
        r = e.i(538305);
    e.i(757249);
    var o = e.i(883582),
        l = e.i(924140),
        u = e.i(347248),
        h = e.i(134026),
        c = e.i(946974),
        d = e.i(377149),
        m = e.i(920885),
        p = e.i(984776),
        f = e.i(811855),
        y = e.i(440919),
        g = e.i(470180),
        v = e.i(578263),
        T = e.i(599696),
        V = e.i(657287),
        M = e.i(998554),
        b = e.i(590294),
        S = e.i(99443),
        x = e.i(140508);
    let w = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
    class k {
        scrapeMotionValuesFromProps(e, t, i) {
            return {}
        }
        constructor({
            parent: e,
            props: t,
            presenceContext: i,
            reducedMotionConfig: s,
            blockInitialAnimation: n,
            visualState: a
        }, h = {}) {
            this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = o.KeyframeResolver, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                let e = l.time.now();
                this.renderScheduledAt < e && (this.renderScheduledAt = e, u.frame.render(this.render, !1, !0))
            };
            const {
                latestValues: c,
                renderState: d
            } = a;
            this.latestValues = c, this.baseTarget = {
                ...c
            }, this.initialValues = t.initial ? {
                ...c
            } : {}, this.renderState = d, this.parent = e, this.props = t, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = s, this.options = h, this.blockInitialAnimation = !!n, this.isControllingVariants = (0, S.isControllingVariants)(t), this.isVariantNode = (0, S.isVariantNode)(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
            const {
                willChange: m,
                ...p
            } = this.scrapeMotionValuesFromProps(t, {}, this);
            for (const e in p) {
                const t = p[e];
                void 0 !== c[e] && (0, r.isMotionValue)(t) && t.set(c[e])
            }
        }
        mount(e) {
            this.current = e, b.visualElementStore.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), M.hasReducedMotionListener.current || (0, V.initPrefersReducedMotion)(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || M.prefersReducedMotion.current), this.parent?.addChild(this), this.update(this.props, this.presenceContext)
        }
        unmount() {
            for (let e in this.projection && this.projection.unmount(), (0, u.cancelFrame)(this.notifyUpdate), (0, u.cancelFrame)(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[e].clear();
            for (let e in this.features) {
                let t = this.features[e];
                t && (t.unmount(), t.isMounted = !1)
            }
            this.current = null
        }
        addChild(e) {
            this.children.add(e), this.enteringChildren ?? (this.enteringChildren = new Set), this.enteringChildren.add(e)
        }
        removeChild(e) {
            this.children.delete(e), this.enteringChildren && this.enteringChildren.delete(e)
        }
        bindToMotionValue(e, i) {
            let s;
            this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
            let n = t.transformProps.has(e);
            n && this.onBindTransform && this.onBindTransform();
            let a = i.on("change", t => {
                this.latestValues[e] = t, this.props.onUpdate && u.frame.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
            });
            window.MotionCheckAppearSync && (s = window.MotionCheckAppearSync(this, e, i)), this.valueSubscriptions.set(e, () => {
                a(), s && s(), i.owner && i.stop()
            })
        }
        sortNodePosition(e) {
            return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
        }
        updateFeatures() {
            let e = "animation";
            for (e in v.featureDefinitions) {
                let t = v.featureDefinitions[e];
                if (!t) continue;
                let {
                    isEnabled: i,
                    Feature: s
                } = t;
                if (!this.features[e] && s && i(this.props) && (this.features[e] = new s(this)), this.features[e]) {
                    let t = this.features[e];
                    t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
                }
            }
        }
        triggerBuild() {
            this.build(this.renderState, this.latestValues, this.props)
        }
        measureViewportBox() {
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, T.createBox)()
        }
        getStaticValue(e) {
            return this.latestValues[e]
        }
        setStaticValue(e, t) {
            this.latestValues[e] = t
        }
        update(e, t) {
            (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
            for (let t = 0; t < w.length; t++) {
                let i = w[t];
                this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                let s = e["on" + i];
                s && (this.propEventSubscriptions[i] = this.on(i, s))
            }
            this.prevMotionValues = function(e, t, i) {
                for (let s in t) {
                    let n = t[s],
                        a = i[s];
                    if ((0, r.isMotionValue)(n)) e.addValue(s, n);
                    else if ((0, r.isMotionValue)(a)) e.addValue(s, (0, h.motionValue)(n, {
                        owner: e
                    }));
                    else if (a !== n)
                        if (e.hasValue(s)) {
                            let t = e.getValue(s);
                            !0 === t.liveStyle ? t.jump(n) : t.hasAnimated || t.set(n)
                        } else {
                            let t = e.getStaticValue(s);
                            e.addValue(s, (0, h.motionValue)(void 0 !== t ? t : n, {
                                owner: e
                            }))
                        }
                }
                for (let s in i) void 0 === t[s] && e.removeValue(s);
                return t
            }(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
        }
        getProps() {
            return this.props
        }
        getVariant(e) {
            return this.props.variants ? this.props.variants[e] : void 0
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
        addVariantChild(e) {
            let t = this.getClosestVariantNode();
            if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
        }
        addValue(e, t) {
            let i = this.values.get(e);
            t !== i && (i && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get())
        }
        removeValue(e) {
            this.values.delete(e);
            let t = this.valueSubscriptions.get(e);
            t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
        }
        hasValue(e) {
            return this.values.has(e)
        }
        getValue(e, t) {
            if (this.props.values && this.props.values[e]) return this.props.values[e];
            let i = this.values.get(e);
            return void 0 === i && void 0 !== t && (i = (0, h.motionValue)(null === t ? void 0 : t, {
                owner: this
            }), this.addValue(e, i)), i
        }
        readValue(e, t) {
            let i = void 0 === this.latestValues[e] && this.current ? this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
            return null != i && ("string" == typeof i && ((0, f.isNumericalString)(i) || (0, y.isZeroValueString)(i)) ? i = parseFloat(i) : !(0, c.findValueType)(i) && d.complex.test(t) && (i = (0, m.getAnimatableNone)(e, t)), this.setBaseTarget(e, (0, r.isMotionValue)(i) ? i.get() : i)), (0, r.isMotionValue)(i) ? i.get() : i
        }
        setBaseTarget(e, t) {
            this.baseTarget[e] = t
        }
        getBaseTarget(e) {
            let t, {
                initial: i
            } = this.props;
            if ("string" == typeof i || "object" == typeof i) {
                let s = (0, x.resolveVariantFromProps)(this.props, i, this.presenceContext?.custom);
                s && (t = s[e])
            }
            if (i && void 0 !== t) return t;
            let s = this.getBaseTargetFromProps(this.props, e);
            return void 0 === s || (0, r.isMotionValue)(s) ? void 0 !== this.initialValues[e] && void 0 === t ? void 0 : this.baseTarget[e] : s
        }
        on(e, t) {
            return this.events[e] || (this.events[e] = new g.SubscriptionManager), this.events[e].add(t)
        }
        notify(e, ...t) {
            this.events[e] && this.events[e].notify(...t)
        }
        scheduleRenderMicrotask() {
            p.microtask.render(this.render)
        }
    }
    e.s(["VisualElement", () => k], 928437);
    class A extends k {
        constructor() {
            super(...arguments), this.KeyframeResolver = a.DOMKeyframesResolver
        }
        sortInstanceNodePosition(e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1
        }
        getBaseTargetFromProps(e, t) {
            return e.style ? e.style[t] : void 0
        }
        removeValueFromRenderState(e, {
            vars: t,
            style: i
        }) {
            delete t[e], delete i[e]
        }
        handleChildMotionValue() {
            this.childSubscription && (this.childSubscription(), delete this.childSubscription);
            let {
                children: e
            } = this.props;
            (0, r.isMotionValue)(e) && (this.childSubscription = e.on("change", e => {
                this.current && (this.current.textContent = `${e}`)
            }))
        }
    }
    var C = e.i(898194);

    function P(e, {
        style: t,
        vars: i
    }, s, n) {
        let a, r = e.style;
        for (a in t) r[a] = t[a];
        for (a in n?.applyProjectionStyles(r, s), i) r.setProperty(a, i[a])
    }
    var F = e.i(599666);
    class D extends A {
        constructor() {
            super(...arguments), this.type = "html", this.renderInstance = P
        }
        readValueFromInstance(e, n) {
            if (t.transformProps.has(n)) return this.projection?.isProjecting ? (0, i.defaultTransformValue)(n) : (0, i.readTransformValue)(e, n);
            {
                let t = window.getComputedStyle(e),
                    i = ((0, s.isCSSVariableName)(n) ? t.getPropertyValue(n) : t[n]) || 0;
                return "string" == typeof i ? i.trim() : i
            }
        }
        measureInstanceViewportBox(e, {
            transformPagePoint: t
        }) {
            return (0, n.measureViewportBox)(e, t)
        }
        build(e, t, i) {
            (0, C.buildHTMLStyles)(e, t, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, t, i) {
            return (0, F.scrapeMotionValuesFromProps)(e, t, i)
        }
    }
    e.s(["HTMLVisualElement", () => D], 399842);
    var O = e.i(210973),
        B = e.i(931453),
        I = e.i(950393);
    let R = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
    var E = e.i(192603),
        K = e.i(27910);
    class N extends A {
        constructor() {
            super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = T.createBox
        }
        getBaseTargetFromProps(e, t) {
            return e[t]
        }
        readValueFromInstance(e, i) {
            if (t.transformProps.has(i)) {
                let e = (0, O.getDefaultValueType)(i);
                return e && e.default || 0
            }
            return i = R.has(i) ? i : (0, B.camelToDash)(i), e.getAttribute(i)
        }
        scrapeMotionValuesFromProps(e, t, i) {
            return (0, K.scrapeMotionValuesFromProps)(e, t, i)
        }
        build(e, t, i) {
            (0, I.buildSVGAttrs)(e, t, this.isSVGTag, i.transformTemplate, i.style)
        }
        renderInstance(e, t, i, s) {
            for (let i in P(e, t, void 0, s), t.attrs) e.setAttribute(R.has(i) ? i : (0, B.camelToDash)(i), t.attrs[i])
        }
        mount(e) {
            this.isSVGTag = (0, E.isSVGTag)(e.tagName), super.mount(e)
        }
    }
    e.s(["SVGVisualElement", () => N], 470097)
}, 123456, e => {
    "use strict";
    var t = e.i(140508);

    function i(e, i, s) {
        let n = e.getProps();
        return (0, t.resolveVariantFromProps)(n, i, void 0 !== s ? s : n.custom, e)
    }
    e.s(["resolveVariant", () => i])
}, 965836, e => {
    "use strict";

    function t(e, t) {
        return e?.[t] ?? e?.default ?? e
    }
    e.s(["getValueTransition", () => t])
}, 972171, e => {
    "use strict";
    let t = e => Array.isArray(e);
    e.s(["isKeyframesTarget", () => t])
}, 570628, e => {
    "use strict";
    var t = e.i(134026),
        i = e.i(972171),
        s = e.i(123456);

    function n(e, n) {
        let {
            transitionEnd: a = {},
            transition: r = {},
            ...o
        } = (0, s.resolveVariant)(e, n) || {};
        for (let s in o = {
                ...o,
                ...a
            }) {
            var l;
            let n = (l = o[s], (0, i.isKeyframesTarget)(l) ? l[l.length - 1] || 0 : l);
            e.hasValue(s) ? e.getValue(s).set(n) : e.addValue(s, (0, t.motionValue)(n))
        }
    }
    e.s(["setTarget", () => n])
}, 310243, e => {
    "use strict";
    var t = e.i(954912),
        i = e.i(538305);

    function s(e, s) {
        let n = e.getValue("willChange");
        if ((0, i.isMotionValue)(n) && n.add) return n.add(s);
        if (!n && t.MotionGlobalConfig.WillChange) {
            let i = new t.MotionGlobalConfig.WillChange("auto");
            e.addValue("willChange", i), i.add(s)
        }
    }
    e.s(["addValueToWillChange", () => s], 310243)
}, 971401, e => {
    "use strict";
    var t = e.i(341234);

    function i(e) {
        return e.props[t.optimizedAppearDataAttribute]
    }
    e.s(["getOptimisedAppearId", () => i])
}, 392296, e => {
    "use strict";

    function t(e) {
        e.duration = 0, e.type = "keyframes"
    }
    e.s(["makeAnimationInstant", () => t])
}, 667327, e => {
    "use strict";
    let t = e => 1e3 * e,
        i = e => e / 1e3;
    e.s(["millisecondsToSeconds", () => i, "secondsToMilliseconds", () => t])
}, 840289, 840722, e => {
    "use strict";
    let t = {
        layout: 0,
        mainThread: 0,
        waapi: 0
    };
    e.s(["activeAnimations", () => t], 840289);
    var i = e.i(924140),
        s = e.i(347248);
    let n = e => {
        let t = ({
            timestamp: t
        }) => e(t);
        return {
            start: (e = !0) => s.frame.update(t, e),
            stop: () => (0, s.cancelFrame)(t),
            now: () => s.frameData.isProcessing ? s.frameData.timestamp : i.time.now()
        }
    };
    e.s(["frameloopDriver", () => n], 840722)
}, 798520, 682580, 213581, 196239, 994418, e => {
    "use strict";
    var t = e.i(667327),
        i = e.i(483032);
    let s = (e, t, i = 10) => {
        let s = "",
            n = Math.max(Math.round(t / i), 2);
        for (let t = 0; t < n; t++) s += Math.round(1e4 * e(t / (n - 1))) / 1e4 + ", ";
        return `linear(${s.substring(0,s.length-2)})`
    };

    function n(e) {
        let t = 0,
            i = e.next(t);
        for (; !i.done && t < 2e4;) t += 50, i = e.next(t);
        return t >= 2e4 ? 1 / 0 : t
    }

    function a(e, i = 100, s) {
        let r = s({
                ...e,
                keyframes: [0, i]
            }),
            o = Math.min(n(r), 2e4);
        return {
            type: "keyframes",
            ease: e => r.next(o * e).value / i,
            duration: (0, t.millisecondsToSeconds)(o)
        }
    }
    e.s(["generateLinearEasing", () => s], 682580), e.s(["calcGeneratorDuration", () => n, "maxGeneratorDuration", () => 2e4], 213581), e.s(["createGeneratorEasing", () => a], 196239);
    var r = e.i(795153);

    function o(e, t, i) {
        let s = Math.max(t - 5, 0);
        return (0, r.velocityPerSecond)(i - e(s), t - s)
    }
    e.s(["calcGeneratorVelocity", () => o], 994418);
    let l = .01,
        u = 2,
        h = .005,
        c = .5;
    var d = e.i(348367);

    function m(e, t) {
        return e * Math.sqrt(1 - t * t)
    }
    let p = ["duration", "bounce"],
        f = ["stiffness", "damping", "mass"];

    function y(e, t) {
        return t.some(t => void 0 !== e[t])
    }

    function g(e = .3, a = .3) {
        let r, v = "object" != typeof e ? {
                visualDuration: e,
                keyframes: [0, 1],
                bounce: a
            } : e,
            {
                restSpeed: T,
                restDelta: V
            } = v,
            M = v.keyframes[0],
            b = v.keyframes[v.keyframes.length - 1],
            S = {
                done: !1,
                value: M
            },
            {
                stiffness: x,
                damping: w,
                mass: k,
                duration: A,
                velocity: C,
                isResolvedFromDuration: P
            } = function(e) {
                let s = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...e
                };
                if (!y(e, f) && y(e, p))
                    if (e.visualDuration) {
                        let t = 2 * Math.PI / (1.2 * e.visualDuration),
                            n = t * t,
                            a = 2 * (0, i.clamp)(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(n);
                        s = {
                            ...s,
                            mass: 1,
                            stiffness: n,
                            damping: a
                        }
                    } else {
                        let n = function({
                            duration: e = 800,
                            bounce: s = .3,
                            velocity: n = 0,
                            mass: a = 1
                        }) {
                            let r, o;
                            (0, d.warning)(e <= (0, t.secondsToMilliseconds)(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                            let l = 1 - s;
                            l = (0, i.clamp)(.05, 1, l), e = (0, i.clamp)(.01, 10, (0, t.millisecondsToSeconds)(e)), l < 1 ? (r = t => {
                                let i = t * l,
                                    s = i * e;
                                return .001 - (i - n) / m(t, l) * Math.exp(-s)
                            }, o = t => {
                                let i = t * l * e,
                                    s = Math.pow(l, 2) * Math.pow(t, 2) * e,
                                    a = Math.exp(-i),
                                    o = m(Math.pow(t, 2), l);
                                return (i * n + n - s) * a * (-r(t) + .001 > 0 ? -1 : 1) / o
                            }) : (r = t => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), o = t => e * e * (n - t) * Math.exp(-t * e));
                            let u = function(e, t, i) {
                                let s = i;
                                for (let i = 1; i < 12; i++) s -= e(s) / t(s);
                                return s
                            }(r, o, 5 / e);
                            if (e = (0, t.secondsToMilliseconds)(e), isNaN(u)) return {
                                stiffness: 100,
                                damping: 10,
                                duration: e
                            };
                            {
                                let t = Math.pow(u, 2) * a;
                                return {
                                    stiffness: t,
                                    damping: 2 * l * Math.sqrt(a * t),
                                    duration: e
                                }
                            }
                        }(e);
                        (s = {
                            ...s,
                            ...n,
                            mass: 1
                        }).isResolvedFromDuration = !0
                    } return s
            }({
                ...v,
                velocity: -(0, t.millisecondsToSeconds)(v.velocity || 0)
            }),
            F = C || 0,
            D = w / (2 * Math.sqrt(x * k)),
            O = b - M,
            B = (0, t.millisecondsToSeconds)(Math.sqrt(x / k)),
            I = 5 > Math.abs(O);
        if (T || (T = I ? l : u), V || (V = I ? h : c), D < 1) {
            let e = m(B, D);
            r = t => b - Math.exp(-D * B * t) * ((F + D * B * O) / e * Math.sin(e * t) + O * Math.cos(e * t))
        } else if (1 === D) r = e => b - Math.exp(-B * e) * (O + (F + B * O) * e);
        else {
            let e = B * Math.sqrt(D * D - 1);
            r = t => {
                let i = Math.exp(-D * B * t),
                    s = Math.min(e * t, 300);
                return b - i * ((F + D * B * O) * Math.sinh(s) + e * O * Math.cosh(s)) / e
            }
        }
        let R = {
            calculatedDuration: P && A || null,
            next: e => {
                let i = r(e);
                if (P) S.done = e >= A;
                else {
                    let s = 0 === e ? F : 0;
                    D < 1 && (s = 0 === e ? (0, t.secondsToMilliseconds)(F) : o(r, e, i));
                    let n = Math.abs(b - i) <= V;
                    S.done = Math.abs(s) <= T && n
                }
                return S.value = S.done ? b : i, S
            },
            toString: () => {
                let e = Math.min(n(R), 2e4),
                    t = s(t => R.next(e * t).value, e, 30);
                return e + "ms " + t
            },
            toTransition: () => {}
        };
        return R
    }
    g.applyToOptions = e => {
        let i = a(e, 100, g);
        return e.ease = i.ease, e.duration = (0, t.secondsToMilliseconds)(i.duration), e.type = "keyframes", e
    }, e.s(["spring", () => g], 798520)
}, 264653, e => {
    "use strict";
    var t = e.i(798520),
        i = e.i(994418);

    function s({
        keyframes: e,
        velocity: s = 0,
        power: n = .8,
        timeConstant: a = 325,
        bounceDamping: r = 10,
        bounceStiffness: o = 500,
        modifyTarget: l,
        min: u,
        max: h,
        restDelta: c = .5,
        restSpeed: d
    }) {
        let m, p, f = e[0],
            y = {
                done: !1,
                value: f
            },
            g = n * s,
            v = f + g,
            T = void 0 === l ? v : l(v);
        T !== v && (g = T - f);
        let V = e => -g * Math.exp(-e / a),
            M = e => T + V(e),
            b = e => {
                let t = V(e),
                    i = M(e);
                y.done = Math.abs(t) <= c, y.value = y.done ? T : i
            },
            S = e => {
                let s;
                if (s = y.value, void 0 !== u && s < u || void 0 !== h && s > h) {
                    var n;
                    m = e, p = (0, t.spring)({
                        keyframes: [y.value, (n = y.value, void 0 === u ? h : void 0 === h || Math.abs(u - n) < Math.abs(h - n) ? u : h)],
                        velocity: (0, i.calcGeneratorVelocity)(M, e, y.value),
                        damping: r,
                        stiffness: o,
                        restDelta: c,
                        restSpeed: d
                    })
                }
            };
        return S(0), {
            calculatedDuration: null,
            next: e => {
                let t = !1;
                return (p || void 0 !== m || (t = !0, b(e), S(e)), void 0 !== m && e >= m) ? p.next(e - m) : (t || b(e), y)
            }
        }
    }
    e.s(["inertia", () => s])
}, 529363, 989873, e => {
    "use strict";
    var t = e.i(175602);
    let i = (e, t, i) => (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;

    function s(e, s, n, a) {
        return e === s && n === a ? t.noop : t => 0 === t || 1 === t ? t : i(function(e, t, s, n, a) {
            let r, o, l = 0;
            do(r = i(o = t + (s - t) / 2, n, a) - e) > 0 ? s = o : t = o; while (Math.abs(r) > 1e-7 && ++l < 12) return o
        }(t, 0, 1, e, n), s, a)
    }
    e.s(["cubicBezier", () => s], 989873);
    let n = s(.42, 0, 1, 1),
        a = s(0, 0, .58, 1),
        r = s(.42, 0, .58, 1);
    e.s(["easeIn", () => n, "easeInOut", () => r, "easeOut", () => a], 529363)
}, 520085, e => {
    "use strict";
    let t = e => Array.isArray(e) && "number" != typeof e[0];
    e.s(["isEasingArray", () => t])
}, 363960, 228696, 386183, 83224, 994415, 858449, 733468, 791332, e => {
    "use strict";
    e.i(757249);
    var t = e.i(640746),
        i = e.i(483032),
        s = e.i(667327),
        n = e.i(924140),
        a = e.i(840289),
        r = e.i(728189),
        o = e.i(840722),
        l = e.i(264653),
        u = e.i(529363),
        h = e.i(520085),
        c = e.i(348367),
        d = e.i(175602),
        m = e.i(989873);
    let p = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        f = e => t => 1 - e(1 - t),
        y = (0, m.cubicBezier)(.33, 1.53, .69, .99),
        g = f(y),
        v = p(g);
    e.s(["backIn", () => g, "backInOut", () => v, "backOut", () => y], 228696);
    let T = e => (e *= 2) < 1 ? .5 * g(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)));
    e.s(["anticipate", () => T], 386183);
    let V = e => 1 - Math.sin(Math.acos(e)),
        M = f(V),
        b = p(V);
    e.s(["circIn", () => V, "circInOut", () => b, "circOut", () => M], 83224);
    let S = e => Array.isArray(e) && "number" == typeof e[0];
    e.s(["isBezierDefinition", () => S], 994415);
    let x = {
            linear: d.noop,
            easeIn: u.easeIn,
            easeInOut: u.easeInOut,
            easeOut: u.easeOut,
            circIn: V,
            circInOut: b,
            circOut: M,
            backIn: g,
            backInOut: v,
            backOut: y,
            anticipate: T
        },
        w = e => {
            if (S(e)) {
                (0, c.invariant)(4 === e.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
                let [t, i, s, n] = e;
                return (0, m.cubicBezier)(t, i, s, n)
            }
            return "string" == typeof e ? ((0, c.invariant)(void 0 !== x[e], `Invalid easing type '${e}'`, "invalid-easing-type"), x[e]) : e
        };
    var k = e.i(279126),
        A = e.i(668617);

    function C({
        duration: e = 300,
        keyframes: t,
        times: i,
        ease: s = "easeInOut"
    }) {
        var n;
        let a = (0, h.isEasingArray)(s) ? s.map(w) : w(s),
            r = {
                done: !1,
                value: t[0]
            },
            o = (n = i && i.length === t.length ? i : (0, A.defaultOffset)(t), n.map(t => t * e)),
            l = (0, k.interpolate)(o, t, {
                ease: Array.isArray(a) ? a : t.map(() => a || u.easeInOut).splice(0, t.length - 1)
            });
        return {
            calculatedDuration: e,
            next: t => (r.value = l(t), r.done = t >= e, r)
        }
    }
    var P = e.i(213581);
    let F = e => null !== e;

    function D(e, {
        repeat: t,
        repeatType: i = "loop"
    }, s, n = 1) {
        let a = e.filter(F),
            r = n < 0 || t && "loop" !== i && t % 2 == 1 ? 0 : a.length - 1;
        return r && void 0 !== s ? s : a[r]
    }
    e.s(["getFinalKeyframe", () => D], 858449);
    var O = e.i(798520);
    let B = {
        decay: l.inertia,
        inertia: l.inertia,
        tween: C,
        keyframes: C,
        spring: O.spring
    };

    function I(e) {
        "string" == typeof e.type && (e.type = B[e.type])
    }
    e.s(["replaceTransitionType", () => I], 733468);
    class R {
        constructor() {
            this.updateFinished()
        }
        get finished() {
            return this._finished
        }
        updateFinished() {
            this._finished = new Promise(e => {
                this.resolve = e
            })
        }
        notifyFinished() {
            this.resolve()
        }
        then(e, t) {
            return this.finished.then(e, t)
        }
    }
    e.s(["WithPromise", () => R], 791332);
    let E = e => e / 100;
    class K extends R {
        constructor(e) {
            super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
                let {
                    motionValue: e
                } = this.options;
                e && e.updatedAt !== n.time.now() && this.tick(n.time.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop?.())
            }, a.activeAnimations.mainThread++, this.options = e, this.initAnimation(), this.play(), !1 === e.autoplay && this.pause()
        }
        initAnimation() {
            let {
                options: e
            } = this;
            I(e);
            let {
                type: i = C,
                repeat: s = 0,
                repeatDelay: n = 0,
                repeatType: a,
                velocity: o = 0
            } = e, {
                keyframes: l
            } = e, u = i || C;
            u !== C && "number" != typeof l[0] && (this.mixKeyframes = (0, t.pipe)(E, (0, r.mix)(l[0], l[1])), l = [0, 100]);
            let h = u({
                ...e,
                keyframes: l
            });
            "mirror" === a && (this.mirroredGenerator = u({
                ...e,
                keyframes: [...l].reverse(),
                velocity: -o
            })), null === h.calculatedDuration && (h.calculatedDuration = (0, P.calcGeneratorDuration)(h));
            let {
                calculatedDuration: c
            } = h;
            this.calculatedDuration = c, this.resolvedDuration = c + n, this.totalDuration = this.resolvedDuration * (s + 1) - n, this.generator = h
        }
        updateTime(e) {
            let t = Math.round(e - this.startTime) * this.playbackSpeed;
            null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = t
        }
        tick(e, t = !1) {
            let {
                generator: s,
                totalDuration: n,
                mixKeyframes: a,
                mirroredGenerator: r,
                resolvedDuration: o,
                calculatedDuration: u
            } = this;
            if (null === this.startTime) return s.next(0);
            let {
                delay: h = 0,
                keyframes: c,
                repeat: d,
                repeatType: m,
                repeatDelay: p,
                type: f,
                onUpdate: y,
                finalKeyframe: g
            } = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - n / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
            let v = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1),
                T = this.playbackSpeed >= 0 ? v < 0 : v > n;
            this.currentTime = Math.max(v, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = n);
            let V = this.currentTime,
                M = s;
            if (d) {
                let e = Math.min(this.currentTime, n) / o,
                    t = Math.floor(e),
                    s = e % 1;
                !s && e >= 1 && (s = 1), 1 === s && t--, (t = Math.min(t, d + 1)) % 2 && ("reverse" === m ? (s = 1 - s, p && (s -= p / o)) : "mirror" === m && (M = r)), V = (0, i.clamp)(0, 1, s) * o
            }
            let b = T ? {
                done: !1,
                value: c[0]
            } : M.next(V);
            a && (b.value = a(b.value));
            let {
                done: S
            } = b;
            T || null === u || (S = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
            let x = null === this.holdTime && ("finished" === this.state || "running" === this.state && S);
            return x && f !== l.inertia && (b.value = D(c, this.options, g, this.speed)), y && y(b.value), x && this.finish(), b
        }
        then(e, t) {
            return this.finished.then(e, t)
        }
        get duration() {
            return (0, s.millisecondsToSeconds)(this.calculatedDuration)
        }
        get iterationDuration() {
            let {
                delay: e = 0
            } = this.options || {};
            return this.duration + (0, s.millisecondsToSeconds)(e)
        }
        get time() {
            return (0, s.millisecondsToSeconds)(this.currentTime)
        }
        set time(e) {
            e = (0, s.secondsToMilliseconds)(e), this.currentTime = e, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(e) {
            this.updateTime(n.time.now());
            let t = this.playbackSpeed !== e;
            this.playbackSpeed = e, t && (this.time = (0, s.millisecondsToSeconds)(this.currentTime))
        }
        play() {
            if (this.isStopped) return;
            let {
                driver: e = o.frameloopDriver,
                startTime: t
            } = this.options;
            this.driver || (this.driver = e(e => this.tick(e))), this.options.onPlay?.();
            let i = this.driver.now();
            "finished" === this.state ? (this.updateFinished(), this.startTime = i) : null !== this.holdTime ? this.startTime = i - this.holdTime : this.startTime || (this.startTime = t ?? i), "finished" === this.state && this.speed < 0 && (this.startTime += this.calculatedDuration), this.holdTime = null, this.state = "running", this.driver.start()
        }
        pause() {
            this.state = "paused", this.updateTime(n.time.now()), this.holdTime = this.currentTime
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
            this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, a.activeAnimations.mainThread--
        }
        stopDriver() {
            this.driver && (this.driver.stop(), this.driver = void 0)
        }
        sample(e) {
            return this.startTime = 0, this.tick(e, !0)
        }
        attachTimeline(e) {
            return this.options.allowFlatten && (this.options.type = "keyframes", this.options.ease = "linear", this.initAnimation()), this.driver?.stop(), e.observe(this)
        }
    }
    e.s(["JSAnimation", () => K], 363960)
}, 640248, 32806, 699834, e => {
    "use strict";
    let t;

    function i(e, t, i) {
        t.startsWith("--") ? e.style.setProperty(t, i) : e.style[t] = i
    }
    e.s(["setStyle", () => i], 640248);
    var s, n = e.i(840289),
        a = e.i(680124),
        r = e.i(994415),
        o = e.i(338212);
    let l = {},
        u = (s = () => {
            try {
                document.createElement("div").animate({
                    opacity: 0
                }, {
                    easing: "linear(0, 1)"
                })
            } catch (e) {
                return !1
            }
            return !0
        }, t = (0, o.memo)(s), () => l.linearEasing ?? t());
    e.s(["supportsLinearEasing", () => u], 32806);
    var h = e.i(682580);
    let c = ([e, t, i, s]) => `cubic-bezier(${e}, ${t}, ${i}, ${s})`,
        d = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: c([0, .65, .55, 1]),
            circOut: c([.55, 0, 1, .45]),
            backIn: c([.31, .01, .66, -.59]),
            backOut: c([.33, 1.53, .69, .99])
        };

    function m(e, t, i, {
        delay: s = 0,
        duration: o = 300,
        repeat: l = 0,
        repeatType: p = "loop",
        ease: f = "easeOut",
        times: y
    } = {}, g) {
        let v = {
            [t]: i
        };
        y && (v.offset = y);
        let T = function e(t, i) {
            if (t) return "function" == typeof t ? u() ? (0, h.generateLinearEasing)(t, i) : "ease-out" : (0, r.isBezierDefinition)(t) ? c(t) : Array.isArray(t) ? t.map(t => e(t, i) || d.easeOut) : d[t]
        }(f, o);
        Array.isArray(T) && (v.easing = T), a.statsBuffer.value && n.activeAnimations.waapi++;
        let V = {
            delay: s,
            duration: o,
            easing: Array.isArray(T) ? "linear" : T,
            fill: "both",
            iterations: l + 1,
            direction: "reverse" === p ? "alternate" : "normal"
        };
        g && (V.pseudoElement = g);
        let M = e.animate(v, V);
        return a.statsBuffer.value && M.finished.finally(() => {
            n.activeAnimations.waapi--
        }), M
    }
    e.s(["startWaapiAnimation", () => m], 699834)
}, 161, e => {
    "use strict";

    function t(e) {
        return "function" == typeof e && "applyToOptions" in e
    }
    e.s(["isGenerator", () => t])
}, 719625, e => {
    "use strict";
    var t = e.i(965836),
        i = e.i(392296),
        s = e.i(347248),
        n = e.i(363960),
        a = e.i(954912),
        r = e.i(175602),
        o = e.i(924140),
        l = e.i(858449),
        u = e.i(883582),
        h = e.i(667327),
        c = e.i(348367),
        d = e.i(640248),
        m = e.i(815965),
        p = e.i(791332),
        f = e.i(699834),
        y = e.i(32806),
        g = e.i(161);
    class v extends p.WithPromise {
        constructor(e) {
            if (super(), this.finishedTime = null, this.isStopped = !1, !e) return;
            const {
                element: t,
                name: i,
                keyframes: s,
                pseudoElement: n,
                allowFlatten: a = !1,
                finalKeyframe: r,
                onComplete: o
            } = e;
            this.isPseudoElement = !!n, this.allowFlatten = a, this.options = e, (0, c.invariant)("string" != typeof e.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
            const u = function({
                type: e,
                ...t
            }) {
                return (0, g.isGenerator)(e) && (0, y.supportsLinearEasing)() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t)
            }(e);
            this.animation = (0, f.startWaapiAnimation)(t, i, s, u, n), !1 === u.autoplay && this.animation.pause(), this.animation.onfinish = () => {
                if (this.finishedTime = this.time, !n) {
                    let e = (0, l.getFinalKeyframe)(s, this.options, r, this.speed);
                    this.updateMotionValue ? this.updateMotionValue(e) : (0, d.setStyle)(t, i, e), this.animation.cancel()
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
            } catch (e) {}
        }
        stop() {
            if (this.isStopped) return;
            this.isStopped = !0;
            let {
                state: e
            } = this;
            "idle" !== e && "finished" !== e && (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(), this.isPseudoElement || this.cancel())
        }
        commitStyles() {
            this.isPseudoElement || this.animation.commitStyles?.()
        }
        get duration() {
            let e = this.animation.effect?.getComputedTiming?.().duration || 0;
            return (0, h.millisecondsToSeconds)(Number(e))
        }
        get iterationDuration() {
            let {
                delay: e = 0
            } = this.options || {};
            return this.duration + (0, h.millisecondsToSeconds)(e)
        }
        get time() {
            return (0, h.millisecondsToSeconds)(Number(this.animation.currentTime) || 0)
        }
        set time(e) {
            this.finishedTime = null, this.animation.currentTime = (0, h.secondsToMilliseconds)(e)
        }
        get speed() {
            return this.animation.playbackRate
        }
        set speed(e) {
            e < 0 && (this.finishedTime = null), this.animation.playbackRate = e
        }
        get state() {
            return null !== this.finishedTime ? "finished" : this.animation.playState
        }
        get startTime() {
            return Number(this.animation.startTime)
        }
        set startTime(e) {
            this.animation.startTime = e
        }
        attachTimeline({
            timeline: e,
            observe: t
        }) {
            return (this.allowFlatten && this.animation.effect?.updateTiming({
                easing: "linear"
            }), this.animation.onfinish = null, e && (0, m.supportsScrollTimeline)()) ? (this.animation.timeline = e, r.noop) : t(this)
        }
    }
    var T = e.i(733468),
        V = e.i(386183),
        M = e.i(228696),
        b = e.i(83224);
    let S = {
        anticipate: V.anticipate,
        backInOut: M.backInOut,
        circInOut: b.circInOut
    };
    class x extends v {
        constructor(e) {
            ! function(e) {
                "string" == typeof e.ease && e.ease in S && (e.ease = S[e.ease])
            }(e), (0, T.replaceTransitionType)(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e
        }
        updateMotionValue(e) {
            let {
                motionValue: t,
                onUpdate: i,
                onComplete: s,
                element: a,
                ...r
            } = this.options;
            if (!t) return;
            if (void 0 !== e) return void t.set(e);
            let o = new n.JSAnimation({
                    ...r,
                    autoplay: !1
                }),
                l = (0, h.secondsToMilliseconds)(this.finishedTime ?? this.time);
            t.setWithVelocity(o.sample(l - 10).value, o.sample(l).value, 10), o.stop()
        }
    }
    var w = e.i(377149);
    let k = (e, t) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (w.complex.test(e) || "0" === e) && !e.startsWith("url("));
    var A = p,
        C = e.i(338212);
    let P = new Set(["opacity", "clipPath", "filter", "transform"]),
        F = (0, C.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class D extends A.WithPromise {
        constructor({
            autoplay: e = !0,
            delay: t = 0,
            type: i = "keyframes",
            repeat: s = 0,
            repeatDelay: n = 0,
            repeatType: a = "loop",
            keyframes: r,
            name: l,
            motionValue: h,
            element: c,
            ...d
        }) {
            super(), this.stop = () => {
                this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
            }, this.createdAt = o.time.now();
            const m = {
                    autoplay: e,
                    delay: t,
                    type: i,
                    repeat: s,
                    repeatDelay: n,
                    repeatType: a,
                    name: l,
                    motionValue: h,
                    element: c,
                    ...d
                },
                p = c?.KeyframeResolver || u.KeyframeResolver;
            this.keyframeResolver = new p(r, (e, t, i) => this.onKeyframesResolved(e, t, m, !i), l, h, c), this.keyframeResolver?.scheduleResolve()
        }
        onKeyframesResolved(e, t, s, u) {
            this.keyframeResolver = void 0;
            let {
                name: h,
                type: d,
                velocity: m,
                delay: p,
                isHandoff: f,
                onUpdate: y
            } = s;
            this.resolvedAt = o.time.now(), ! function(e, t, i, s) {
                let n = e[0];
                if (null === n) return !1;
                if ("display" === t || "visibility" === t) return !0;
                let a = e[e.length - 1],
                    r = k(n, t),
                    o = k(a, t);
                return (0, c.warning)(r === o, `You are trying to animate ${t} from "${n}" to "${a}". "${r?a:n}" is not an animatable value.`, "value-not-animatable"), !!r && !!o && (function(e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let i = 0; i < e.length; i++)
                        if (e[i] !== t) return !0
                }(e) || ("spring" === i || (0, g.isGenerator)(i)) && s)
            }(e, h, d, m) && ((a.MotionGlobalConfig.instantAnimations || !p) && y?.((0, l.getFinalKeyframe)(e, s, t)), e[0] = e[e.length - 1], (0, i.makeAnimationInstant)(s), s.repeat = 0);
            let v = {
                    startTime: u ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: t,
                    ...s,
                    keyframes: e
                },
                T = !f && function(e) {
                    let {
                        motionValue: t,
                        name: i,
                        repeatDelay: s,
                        repeatType: n,
                        damping: a,
                        type: r
                    } = e;
                    if (!(t?.owner?.current instanceof HTMLElement)) return !1;
                    let {
                        onUpdate: o,
                        transformTemplate: l
                    } = t.owner.getProps();
                    return F() && i && P.has(i) && ("transform" !== i || !l) && !o && !s && "mirror" !== n && 0 !== a && "inertia" !== r
                }(v) ? new x({
                    ...v,
                    element: v.motionValue.owner.current
                }) : new n.JSAnimation(v);
            T.finished.then(() => this.notifyFinished()).catch(r.noop), this.pendingTimeline && (this.stopTimeline = T.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = T
        }
        get finished() {
            return this._animation ? this.animation.finished : this._finished
        }
        then(e, t) {
            return this.finished.finally(e).then(() => {})
        }
        get animation() {
            return this._animation || (this.keyframeResolver?.resume(), (0, u.flushKeyframeResolvers)()), this._animation
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
        set time(e) {
            this.animation.time = e
        }
        get speed() {
            return this.animation.speed
        }
        get state() {
            return this.animation.state
        }
        set speed(e) {
            this.animation.speed = e
        }
        get startTime() {
            return this.animation.startTime
        }
        attachTimeline(e) {
            return this._animation ? this.stopTimeline = this.animation.attachTimeline(e) : this.pendingTimeline = e, () => this.stop()
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
    let O = e => null !== e;
    var B = e.i(229859);
    let I = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        },
        R = {
            type: "keyframes",
            duration: .8
        },
        E = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        },
        K = (e, r, o, l = {}, u, c) => d => {
            let m = (0, t.getValueTransition)(l, e) || {},
                p = m.delay || l.delay || 0,
                {
                    elapsed: f = 0
                } = l;
            f -= (0, h.secondsToMilliseconds)(p);
            let y = {
                keyframes: Array.isArray(o) ? o : [null, o],
                ease: "easeOut",
                velocity: r.getVelocity(),
                ...m,
                delay: -f,
                onUpdate: e => {
                    r.set(e), m.onUpdate && m.onUpdate(e)
                },
                onComplete: () => {
                    d(), m.onComplete && m.onComplete()
                },
                name: e,
                motionValue: r,
                element: c ? void 0 : u
            };
            ! function({
                when: e,
                delay: t,
                delayChildren: i,
                staggerChildren: s,
                staggerDirection: n,
                repeat: a,
                repeatType: r,
                repeatDelay: o,
                from: l,
                elapsed: u,
                ...h
            }) {
                return !!Object.keys(h).length
            }(m) && Object.assign(y, ((e, {
                keyframes: t
            }) => t.length > 2 ? R : B.transformProps.has(e) ? e.startsWith("scale") ? {
                type: "spring",
                stiffness: 550,
                damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
                restSpeed: 10
            } : I : E)(e, y)), y.duration && (y.duration = (0, h.secondsToMilliseconds)(y.duration)), y.repeatDelay && (y.repeatDelay = (0, h.secondsToMilliseconds)(y.repeatDelay)), void 0 !== y.from && (y.keyframes[0] = y.from);
            let g = !1;
            if (!1 !== y.type && (0 !== y.duration || y.repeatDelay) || ((0, i.makeAnimationInstant)(y), 0 === y.delay && (g = !0)), (a.MotionGlobalConfig.instantAnimations || a.MotionGlobalConfig.skipAnimations) && (g = !0, (0, i.makeAnimationInstant)(y), y.delay = 0), y.allowFlatten = !m.type && !m.ease, g && !c && void 0 !== r.get()) {
                let e = function(e, {
                    repeat: t,
                    repeatType: i = "loop"
                }, s) {
                    let n = e.filter(O),
                        a = t && "loop" !== i && t % 2 == 1 ? 0 : n.length - 1;
                    return n[a]
                }(y.keyframes, m);
                if (void 0 !== e) return void s.frame.update(() => {
                    y.onUpdate(e), y.onComplete()
                })
            }
            return m.isSync ? new n.JSAnimation(y) : new D(y)
        };
    e.s(["animateMotionValue", () => K], 719625)
}, 75681, e => {
    "use strict";
    var t = e.i(965836),
        i = e.i(347248),
        s = e.i(444948),
        n = e.i(570628),
        a = e.i(310243),
        r = e.i(971401),
        o = e.i(719625);

    function l(e, u, {
        delay: h = 0,
        transitionOverride: c,
        type: d
    } = {}) {
        let {
            transition: m = e.getDefaultTransition(),
            transitionEnd: p,
            ...f
        } = u;
        c && (m = c);
        let y = [],
            g = d && e.animationState && e.animationState.getState()[d];
        for (let n in f) {
            let l = e.getValue(n, e.latestValues[n] ?? null),
                u = f[n];
            if (void 0 === u || g && function({
                    protectedKeys: e,
                    needsAnimating: t
                }, i) {
                    let s = e.hasOwnProperty(i) && !0 !== t[i];
                    return t[i] = !1, s
                }(g, n)) continue;
            let c = {
                    delay: h,
                    ...(0, t.getValueTransition)(m || {}, n)
                },
                d = l.get();
            if (void 0 !== d && !l.isAnimating && !Array.isArray(u) && u === d && !c.velocity) continue;
            let p = !1;
            if (window.MotionHandoffAnimation) {
                let t = (0, r.getOptimisedAppearId)(e);
                if (t) {
                    let e = window.MotionHandoffAnimation(t, n, i.frame);
                    null !== e && (c.startTime = e, p = !0)
                }
            }(0, a.addValueToWillChange)(e, n), l.start((0, o.animateMotionValue)(n, l, u, e.shouldReduceMotion && s.positionalKeys.has(n) ? {
                type: !1
            } : c, e, p));
            let v = l.animation;
            v && y.push(v)
        }
        return p && Promise.all(y).then(() => {
            i.frame.update(() => {
                p && (0, n.setTarget)(e, p)
            })
        }), y
    }
    e.s(["animateTarget", () => l])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d63183ab-aa74-5e52-bc73-bc6b631ccb4a")
    } catch (e) {}
}();
//# debugId=d63183ab-aa74-5e52-bc73-bc6b631ccb4a