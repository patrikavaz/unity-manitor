(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 238740, e => {
    "use strict";
    let t = e => 180 * e / Math.PI,
        i = e => s(t(Math.atan2(e[1], e[0]))),
        n = {
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
        s = e => ((e %= 360) < 0 && (e += 360), e),
        r = e => Math.sqrt(e[0] * e[0] + e[1] * e[1]),
        a = e => Math.sqrt(e[4] * e[4] + e[5] * e[5]),
        o = {
            x: 12,
            y: 13,
            z: 14,
            translateX: 12,
            translateY: 13,
            translateZ: 14,
            scaleX: r,
            scaleY: a,
            scale: e => (r(e) + a(e)) / 2,
            rotateX: e => s(t(Math.atan2(e[6], e[5]))),
            rotateY: e => s(t(Math.atan2(-e[2], e[0]))),
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
        let i, s;
        if (!e || "none" === e) return l(t);
        let r = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (r) i = o, s = r;
        else {
            let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
            i = n, s = t
        }
        if (!s) return l(t);
        let a = i[t],
            u = s[1].split(",").map(h);
        return "function" == typeof a ? a(u) : u[a]
    }

    function h(e) {
        return parseFloat(e.trim())
    }
    e.s(["defaultTransformValue", 0, l, "parseValueFromTransform", 0, u, "readTransformValue", 0, (e, t) => {
        let {
            transform: i = "none"
        } = getComputedStyle(e);
        return u(i, t)
    }])
}, 717942, e => {
    "use strict";
    e.s(["convertBoundingBoxToBox", 0, function({
        top: e,
        left: t,
        right: i,
        bottom: n
    }) {
        return {
            x: {
                min: t,
                max: i
            },
            y: {
                min: e,
                max: n
            }
        }
    }, "convertBoxToBoundingBox", 0, function({
        x: e,
        y: t
    }) {
        return {
            top: t.min,
            right: e.max,
            bottom: t.max,
            left: e.min
        }
    }, "transformBoxPoints", 0, function(e, t) {
        if (!t) return e;
        let i = t({
                x: e.left,
                y: e.top
            }),
            n = t({
                x: e.right,
                y: e.bottom
            });
        return {
            top: i.y,
            left: i.x,
            bottom: n.y,
            right: n.x
        }
    }])
}, 348094, 190799, 185534, e => {
    "use strict";
    var t = e.i(717942),
        i = e.i(647480);

    function n(e) {
        return void 0 === e || 1 === e
    }

    function s({
        scale: e,
        scaleX: t,
        scaleY: i
    }) {
        return !n(e) || !n(t) || !n(i)
    }

    function r(e) {
        return s(e) || a(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
    }

    function a(e) {
        var t, i;
        return (t = e.x) && "0%" !== t || (i = e.y) && "0%" !== i
    }

    function o(e, t, i) {
        return i + t * (e - i)
    }

    function l(e, t, i, n, s) {
        return void 0 !== s && (e = o(e, s, n)), o(e, i, n) + t
    }

    function u(e, t = 0, i = 1, n, s) {
        e.min = l(e.min, t, i, n, s), e.max = l(e.max, t, i, n, s)
    }

    function h(e, {
        x: t,
        y: i
    }) {
        u(e.x, t.translate, t.scale, t.originPoint), u(e.y, i.translate, i.scale, i.originPoint)
    }

    function c(e, t) {
        e.min = e.min + t, e.max = e.max + t
    }

    function d(e, t, n, s, r = .5) {
        let a = (0, i.mixNumber)(e.min, e.max, r);
        u(e, t, n, a, s)
    }

    function m(e, t) {
        d(e.x, t.x, t.scaleX, t.scale, t.originX), d(e.y, t.y, t.scaleY, t.scale, t.originY)
    }

    function p(e, i) {
        return (0, t.convertBoundingBoxToBox)((0, t.transformBoxPoints)(e.getBoundingClientRect(), i))
    }
    e.s(["has2DTranslate", 0, a, "hasScale", 0, s, "hasTransform", 0, r], 190799), e.s(["applyBoxDelta", 0, h, "applyTreeDeltas", 0, function(e, t, i, n = !1) {
        let s, a, o = i.length;
        if (o) {
            t.x = t.y = 1;
            for (let l = 0; l < o; l++) {
                a = (s = i[l]).projectionDelta;
                let {
                    visualElement: o
                } = s.options;
                (!o || !o.props.style || "contents" !== o.props.style.display) && (n && s.options.layoutScroll && s.scroll && s !== s.root && m(e, {
                    x: -s.scroll.offset.x,
                    y: -s.scroll.offset.y
                }), a && (t.x *= a.x.scale, t.y *= a.y.scale, h(e, a)), n && r(s.latestValues) && m(e, s.latestValues))
            }
            t.x < 1.0000000000001 && t.x > .999999999999 && (t.x = 1), t.y < 1.0000000000001 && t.y > .999999999999 && (t.y = 1)
        }
    }, "scalePoint", 0, o, "transformBox", 0, m, "translateAxis", 0, c], 185534), e.s(["measurePageBox", 0, function(e, t, i) {
        let n = p(e, i),
            {
                scroll: s
            } = t;
        return s && (c(n.x, s.offset.x), c(n.y, s.offset.y)), n
    }, "measureViewportBox", 0, p], 348094)
}, 444948, e => {
    "use strict";
    let t = new Set(["width", "height", "top", "left", "right", "bottom", ...e.i(229859).transformPropOrder]);
    e.s(["positionalKeys", 0, t])
}, 896091, 960125, 811855, 110332, e => {
    "use strict";
    var t = e.i(960851),
        i = e.i(21365);
    let n = e => t => t.test(e);
    e.s(["testValueType", 0, n], 960125);
    let s = [t.number, i.px, i.percent, i.degrees, i.vw, i.vh, {
        test: e => "auto" === e,
        parse: e => e
    }];
    e.s(["dimensionValueTypes", 0, s, "findDimensionValueType", 0, e => s.find(n(e))], 896091);
    var r = e.i(348367);
    let a = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
    e.s(["isNumericalString", 0, a], 811855);
    var o = e.i(242210);
    let l = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
    e.s(["getVariableValue", 0, function e(t, i, n = 1) {
        (0, r.invariant)(n <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
        let [s, u] = function(e) {
            let t = l.exec(e);
            if (!t) return [, ];
            let [, i, n, s] = t;
            return [`--${i??n}`, s]
        }(t);
        if (!s) return;
        let h = window.getComputedStyle(i).getPropertyValue(s);
        if (h) {
            let e = h.trim();
            return a(e) ? parseFloat(e) : e
        }
        return (0, o.isCSSVariableToken)(u) ? e(u, i, n + 1) : u
    }], 110332)
}, 537466, e => {
    "use strict";
    e.s(["fillWildcards", 0, function(e) {
        for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1])
    }])
}, 883582, 400857, e => {
    "use strict";
    var t = e.i(537466),
        i = e.i(238740),
        n = e.i(229859),
        s = e.i(960851),
        r = e.i(21365);
    let a = new Set(["x", "y", "z"]),
        o = n.transformPropOrder.filter(e => !a.has(e));

    function l(e) {
        let t = [];
        return o.forEach(i => {
            let n = e.getValue(i);
            void 0 !== n && (t.push([i, n.get()]), n.set(+!!i.startsWith("scale")))
        }), t
    }
    let u = {
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
    u.translateX = u.x, u.translateY = u.y, e.s(["isNumOrPxType", 0, e => e === s.number || e === r.px, "positionalValues", 0, u, "removeNonTranslationalTransform", 0, l], 400857);
    var h = e.i(347248);
    let c = new Set,
        d = !1,
        m = !1,
        p = !1;

    function f() {
        if (m) {
            let e = Array.from(c).filter(e => e.needsMeasurement),
                t = new Set(e.map(e => e.element)),
                i = new Map;
            t.forEach(e => {
                let t = l(e);
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
        m = !1, d = !1, c.forEach(e => e.complete(p)), c.clear()
    }

    function v() {
        c.forEach(e => {
            e.readKeyframes(), e.needsMeasurement && (m = !0)
        })
    }
    e.s(["KeyframeResolver", 0, class {
        constructor(e, t, i, n, s, r = !1) {
            this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = i, this.motionValue = n, this.element = s, this.isAsync = r
        }
        scheduleResolve() {
            this.state = "scheduled", this.isAsync ? (c.add(this), d || (d = !0, h.frame.read(v), h.frame.resolveKeyframes(f))) : (this.readKeyframes(), this.complete())
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: e,
                name: i,
                element: n,
                motionValue: s
            } = this;
            if (null === e[0]) {
                let t = s?.get(),
                    r = e[e.length - 1];
                if (void 0 !== t) e[0] = t;
                else if (n && i) {
                    let t = n.readValue(i, r);
                    null != t && (e[0] = t)
                }
                void 0 === e[0] && (e[0] = r), s && void 0 === t && s.set(e[0])
            }(0, t.fillWildcards)(e)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(e = !1) {
            this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), c.delete(this)
        }
        cancel() {
            "scheduled" === this.state && (c.delete(this), this.state = "pending")
        }
        resume() {
            "pending" === this.state && this.scheduleResolve()
        }
    }, "flushKeyframeResolvers", 0, function() {
        p = !0, v(), f(), p = !1
    }], 883582)
}, 636056, 440919, 210973, 920885, 946974, e => {
    "use strict";
    var t = e.i(444948),
        i = e.i(896091),
        n = e.i(110332),
        s = e.i(242210),
        r = e.i(883582);
    let a = e => /^0[^.\s]+$/u.test(e);
    e.s(["isZeroValueString", 0, a], 440919);
    var o = e.i(377149),
        l = e.i(801935);
    let u = new Set(["brightness", "contrast", "saturate", "opacity"]);

    function h(e) {
        let [t, i] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [n] = i.match(l.floatRegex) || [];
        if (!n) return e;
        let s = i.replace(n, ""),
            r = +!!u.has(t);
        return n !== i && (r *= 100), t + "(" + r + s + ")"
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

    function v(e, t) {
        let i = f(e);
        return i !== d && (i = o.complex), i.getAnimatableNone ? i.getAnimatableNone(t) : void 0
    }
    e.s(["getDefaultValueType", 0, f], 210973), e.s(["getAnimatableNone", 0, v], 920885);
    let y = new Set(["auto", "none", "0"]);
    var g = e.i(400857);
    class T extends r.KeyframeResolver {
        constructor(e, t, i, n, s) {
            super(e, t, i, n, s, !0)
        }
        readKeyframes() {
            let {
                unresolvedKeyframes: e,
                element: r,
                name: a
            } = this;
            if (!r || !r.current) return;
            super.readKeyframes();
            for (let t = 0; t < e.length; t++) {
                let i = e[t];
                if ("string" == typeof i && (i = i.trim(), (0, s.isCSSVariableToken)(i))) {
                    let s = (0, n.getVariableValue)(i, r.current);
                    void 0 !== s && (e[t] = s), t === e.length - 1 && (this.finalKeyframe = i)
                }
            }
            if (this.resolveNoneKeyframes(), !t.positionalKeys.has(a) || 2 !== e.length) return;
            let [o, l] = e, u = (0, i.findDimensionValueType)(o), h = (0, i.findDimensionValueType)(l);
            if (u !== h)
                if ((0, g.isNumOrPxType)(u) && (0, g.isNumOrPxType)(h))
                    for (let t = 0; t < e.length; t++) {
                        let i = e[t];
                        "string" == typeof i && (e[t] = parseFloat(i))
                    } else g.positionalValues[a] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
            let {
                unresolvedKeyframes: e,
                name: t
            } = this, i = [];
            for (let t = 0; t < e.length; t++) {
                var n;
                (null === e[t] || ("number" == typeof(n = e[t]) ? 0 === n : null === n || "none" === n || "0" === n || a(n))) && i.push(t)
            }
            i.length && function(e, t, i) {
                let n, s = 0;
                for (; s < e.length && !n;) {
                    let t = e[s];
                    "string" == typeof t && !y.has(t) && (0, o.analyseComplexValue)(t).values.length && (n = e[s]), s++
                }
                if (n && i)
                    for (let s of t) e[s] = v(i, n)
            }(e, i, t)
        }
        measureInitialState() {
            let {
                element: e,
                unresolvedKeyframes: t,
                name: i
            } = this;
            if (!e || !e.current) return;
            "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = g.positionalValues[i](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
            let n = t[t.length - 1];
            void 0 !== n && e.getValue(i, n).jump(n, !1)
        }
        measureEndState() {
            let {
                element: e,
                name: t,
                unresolvedKeyframes: i
            } = this;
            if (!e || !e.current) return;
            let n = e.getValue(t);
            n && n.jump(this.measuredOrigin, !1);
            let s = i.length - 1,
                r = i[s];
            i[s] = g.positionalValues[t](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== r && void 0 === this.finalKeyframe && (this.finalKeyframe = r), this.removedTransforms?.length && this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i)
            }), this.resolveNoneKeyframes()
        }
    }
    e.s(["DOMKeyframesResolver", 0, T], 636056);
    var V = e.i(960125);
    let b = [...i.dimensionValueTypes, m.color, o.complex];
    e.s(["findValueType", 0, e => b.find((0, V.testValueType)(e))], 946974)
}, 984776, e => {
    "use strict";
    let {
        schedule: t
    } = (0, e.i(817967).createRenderBatcher)(queueMicrotask, !1);
    e.s(["microtask", 0, t])
}, 595863, e => {
    "use strict";
    let t = () => ({
            translate: 0,
            scale: 1,
            origin: 0,
            originPoint: 0
        }),
        i = () => ({
            min: 0,
            max: 0
        });
    e.s(["createBox", 0, () => ({
        x: i(),
        y: i()
    }), "createDelta", 0, () => ({
        x: t(),
        y: t()
    })])
}, 275008, e => {
    "use strict";
    let t = new WeakMap;
    e.s(["visualElementStore", 0, t])
}, 587986, 764424, 137927, e => {
    "use strict";
    var t = e.i(229859),
        i = e.i(238740),
        n = e.i(242210),
        s = e.i(348094),
        r = e.i(636056),
        a = e.i(538305);
    e.i(788727);
    var o = e.i(883582),
        l = e.i(924140),
        u = e.i(347248),
        h = e.i(134026),
        c = e.i(946974),
        d = e.i(377149),
        m = e.i(920885),
        p = e.i(984776),
        f = e.i(811855),
        v = e.i(440919),
        y = e.i(470180),
        g = e.i(502247),
        T = e.i(595863),
        V = e.i(368244),
        b = e.i(309674),
        S = e.i(275008),
        w = e.i(760042),
        M = e.i(142314);
    let x = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
    class A {
        scrapeMotionValuesFromProps(e, t, i) {
            return {}
        }
        constructor({
            parent: e,
            props: t,
            presenceContext: i,
            reducedMotionConfig: n,
            blockInitialAnimation: s,
            visualState: r
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
            } = r;
            this.latestValues = c, this.baseTarget = {
                ...c
            }, this.initialValues = t.initial ? {
                ...c
            } : {}, this.renderState = d, this.parent = e, this.props = t, this.presenceContext = i, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = n, this.options = h, this.blockInitialAnimation = !!s, this.isControllingVariants = (0, w.isControllingVariants)(t), this.isVariantNode = (0, w.isVariantNode)(t), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
            const {
                willChange: m,
                ...p
            } = this.scrapeMotionValuesFromProps(t, {}, this);
            for (const e in p) {
                const t = p[e];
                void 0 !== c[e] && (0, a.isMotionValue)(t) && t.set(c[e])
            }
        }
        mount(e) {
            this.current = e, S.visualElementStore.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), b.hasReducedMotionListener.current || (0, V.initPrefersReducedMotion)(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || b.prefersReducedMotion.current), this.parent?.addChild(this), this.update(this.props, this.presenceContext)
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
            let n;
            this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
            let s = t.transformProps.has(e);
            s && this.onBindTransform && this.onBindTransform();
            let r = i.on("change", t => {
                this.latestValues[e] = t, this.props.onUpdate && u.frame.preRender(this.notifyUpdate), s && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
            });
            window.MotionCheckAppearSync && (n = window.MotionCheckAppearSync(this, e, i)), this.valueSubscriptions.set(e, () => {
                r(), n && n(), i.owner && i.stop()
            })
        }
        sortNodePosition(e) {
            return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
        }
        updateFeatures() {
            let e = "animation";
            for (e in g.featureDefinitions) {
                let t = g.featureDefinitions[e];
                if (!t) continue;
                let {
                    isEnabled: i,
                    Feature: n
                } = t;
                if (!this.features[e] && n && i(this.props) && (this.features[e] = new n(this)), this.features[e]) {
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
            for (let t = 0; t < x.length; t++) {
                let i = x[t];
                this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                let n = e["on" + i];
                n && (this.propEventSubscriptions[i] = this.on(i, n))
            }
            this.prevMotionValues = function(e, t, i) {
                for (let n in t) {
                    let s = t[n],
                        r = i[n];
                    if ((0, a.isMotionValue)(s)) e.addValue(n, s);
                    else if ((0, a.isMotionValue)(r)) e.addValue(n, (0, h.motionValue)(s, {
                        owner: e
                    }));
                    else if (r !== s)
                        if (e.hasValue(n)) {
                            let t = e.getValue(n);
                            !0 === t.liveStyle ? t.jump(s) : t.hasAnimated || t.set(s)
                        } else {
                            let t = e.getStaticValue(n);
                            e.addValue(n, (0, h.motionValue)(void 0 !== t ? t : s, {
                                owner: e
                            }))
                        }
                }
                for (let n in i) void 0 === t[n] && e.removeValue(n);
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
            return null != i && ("string" == typeof i && ((0, f.isNumericalString)(i) || (0, v.isZeroValueString)(i)) ? i = parseFloat(i) : !(0, c.findValueType)(i) && d.complex.test(t) && (i = (0, m.getAnimatableNone)(e, t)), this.setBaseTarget(e, (0, a.isMotionValue)(i) ? i.get() : i)), (0, a.isMotionValue)(i) ? i.get() : i
        }
        setBaseTarget(e, t) {
            this.baseTarget[e] = t
        }
        getBaseTarget(e) {
            let t, {
                initial: i
            } = this.props;
            if ("string" == typeof i || "object" == typeof i) {
                let n = (0, M.resolveVariantFromProps)(this.props, i, this.presenceContext?.custom);
                n && (t = n[e])
            }
            if (i && void 0 !== t) return t;
            let n = this.getBaseTargetFromProps(this.props, e);
            return void 0 === n || (0, a.isMotionValue)(n) ? void 0 !== this.initialValues[e] && void 0 === t ? void 0 : this.baseTarget[e] : n
        }
        on(e, t) {
            return this.events[e] || (this.events[e] = new y.SubscriptionManager), this.events[e].add(t)
        }
        notify(e, ...t) {
            this.events[e] && this.events[e].notify(...t)
        }
        scheduleRenderMicrotask() {
            p.microtask.render(this.render)
        }
    }
    e.s(["VisualElement", 0, A], 764424);
    class C extends A {
        constructor() {
            super(...arguments), this.KeyframeResolver = r.DOMKeyframesResolver
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
            (0, a.isMotionValue)(e) && (this.childSubscription = e.on("change", e => {
                this.current && (this.current.textContent = `${e}`)
            }))
        }
    }
    var P = e.i(621524);

    function k(e, {
        style: t,
        vars: i
    }, n, s) {
        let r, a = e.style;
        for (r in t) a[r] = t[r];
        for (r in s?.applyProjectionStyles(a, n), i) a.setProperty(r, i[r])
    }
    var E = e.i(53665);
    e.s(["HTMLVisualElement", 0, class extends C {
        constructor() {
            super(...arguments), this.type = "html", this.renderInstance = k
        }
        readValueFromInstance(e, s) {
            if (t.transformProps.has(s)) return this.projection?.isProjecting ? (0, i.defaultTransformValue)(s) : (0, i.readTransformValue)(e, s);
            {
                let t = window.getComputedStyle(e),
                    i = ((0, n.isCSSVariableName)(s) ? t.getPropertyValue(s) : t[s]) || 0;
                return "string" == typeof i ? i.trim() : i
            }
        }
        measureInstanceViewportBox(e, {
            transformPagePoint: t
        }) {
            return (0, s.measureViewportBox)(e, t)
        }
        build(e, t, i) {
            (0, P.buildHTMLStyles)(e, t, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, t, i) {
            return (0, E.scrapeMotionValuesFromProps)(e, t, i)
        }
    }], 587986);
    var F = e.i(210973),
        O = e.i(969722),
        D = e.i(211729);
    let I = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
    var B = e.i(661711),
        R = e.i(39873);
    e.s(["SVGVisualElement", 0, class extends C {
        constructor() {
            super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = T.createBox
        }
        getBaseTargetFromProps(e, t) {
            return e[t]
        }
        readValueFromInstance(e, i) {
            if (t.transformProps.has(i)) {
                let e = (0, F.getDefaultValueType)(i);
                return e && e.default || 0
            }
            return i = I.has(i) ? i : (0, O.camelToDash)(i), e.getAttribute(i)
        }
        scrapeMotionValuesFromProps(e, t, i) {
            return (0, R.scrapeMotionValuesFromProps)(e, t, i)
        }
        build(e, t, i) {
            (0, D.buildSVGAttrs)(e, t, this.isSVGTag, i.transformTemplate, i.style)
        }
        renderInstance(e, t, i, n) {
            for (let i in k(e, t, void 0, n), t.attrs) e.setAttribute(I.has(i) ? i : (0, O.camelToDash)(i), t.attrs[i])
        }
        mount(e) {
            this.isSVGTag = (0, B.isSVGTag)(e.tagName), super.mount(e)
        }
    }], 137927)
}, 245503, e => {
    "use strict";
    var t = e.i(3931),
        i = e.i(587986),
        n = e.i(137927),
        s = e.i(953234);
    e.s(["createDomVisualElement", 0, (e, r) => (0, s.isSVGComponent)(e) ? new n.SVGVisualElement(r) : new i.HTMLVisualElement(r, {
        allowProjection: e !== t.Fragment
    })])
}, 669430, e => {
    "use strict";
    var t = e.i(142314);
    e.s(["resolveVariant", 0, function(e, i, n) {
        let s = e.getProps();
        return (0, t.resolveVariantFromProps)(s, i, void 0 !== n ? n : s.custom, e)
    }])
}, 965836, e => {
    "use strict";
    e.s(["getValueTransition", 0, function(e, t) {
        return e?.[t] ?? e?.default ?? e
    }])
}, 29762, e => {
    "use strict";
    e.s(["isKeyframesTarget", 0, e => Array.isArray(e)])
}, 67962, e => {
    "use strict";
    var t = e.i(134026),
        i = e.i(29762),
        n = e.i(669430);
    e.s(["setTarget", 0, function(e, s) {
        let {
            transitionEnd: r = {},
            transition: a = {},
            ...o
        } = (0, n.resolveVariant)(e, s) || {};
        for (let n in o = {
                ...o,
                ...r
            }) {
            var l;
            let s = (l = o[n], (0, i.isKeyframesTarget)(l) ? l[l.length - 1] || 0 : l);
            e.hasValue(n) ? e.getValue(n).set(s) : e.addValue(n, (0, t.motionValue)(s))
        }
    }])
}, 700236, e => {
    "use strict";
    var t = e.i(954912),
        i = e.i(538305);
    e.s(["addValueToWillChange", 0, function(e, n) {
        let s = e.getValue("willChange");
        if ((0, i.isMotionValue)(s) && s.add) return s.add(n);
        if (!s && t.MotionGlobalConfig.WillChange) {
            let i = new t.MotionGlobalConfig.WillChange("auto");
            e.addValue("willChange", i), i.add(n)
        }
    }], 700236)
}, 75557, e => {
    "use strict";
    var t = e.i(248957);
    e.s(["getOptimisedAppearId", 0, function(e) {
        return e.props[t.optimizedAppearDataAttribute]
    }])
}, 392296, e => {
    "use strict";
    e.s(["makeAnimationInstant", 0, function(e) {
        e.duration = 0, e.type = "keyframes"
    }])
}, 667327, e => {
    "use strict";
    e.s(["millisecondsToSeconds", 0, e => e / 1e3, "secondsToMilliseconds", 0, e => 1e3 * e])
}, 840289, 840722, e => {
    "use strict";
    e.s(["activeAnimations", 0, {
        layout: 0,
        mainThread: 0,
        waapi: 0
    }], 840289);
    var t = e.i(924140),
        i = e.i(347248);
    e.s(["frameloopDriver", 0, e => {
        let n = ({
            timestamp: t
        }) => e(t);
        return {
            start: (e = !0) => i.frame.update(n, e),
            stop: () => (0, i.cancelFrame)(n),
            now: () => i.frameData.isProcessing ? i.frameData.timestamp : t.time.now()
        }
    }], 840722)
}, 798520, 682580, 213581, 196239, 994418, e => {
    "use strict";
    var t = e.i(667327),
        i = e.i(483032);
    let n = (e, t, i = 10) => {
        let n = "",
            s = Math.max(Math.round(t / i), 2);
        for (let t = 0; t < s; t++) n += Math.round(1e4 * e(t / (s - 1))) / 1e4 + ", ";
        return `linear(${n.substring(0,n.length-2)})`
    };

    function s(e) {
        let t = 0,
            i = e.next(t);
        for (; !i.done && t < 2e4;) t += 50, i = e.next(t);
        return t >= 2e4 ? 1 / 0 : t
    }

    function r(e, i = 100, n) {
        let a = n({
                ...e,
                keyframes: [0, i]
            }),
            o = Math.min(s(a), 2e4);
        return {
            type: "keyframes",
            ease: e => a.next(o * e).value / i,
            duration: (0, t.millisecondsToSeconds)(o)
        }
    }
    e.s(["generateLinearEasing", 0, n], 682580), e.s(["calcGeneratorDuration", 0, s, "maxGeneratorDuration", 0, 2e4], 213581), e.s(["createGeneratorEasing", 0, r], 196239);
    var a = e.i(795153);

    function o(e, t, i) {
        let n = Math.max(t - 5, 0);
        return (0, a.velocityPerSecond)(i - e(n), t - n)
    }
    e.s(["calcGeneratorVelocity", 0, o], 994418);
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

    function v(e, t) {
        return t.some(t => void 0 !== e[t])
    }

    function y(e = .3, r = .3) {
        let a, g = "object" != typeof e ? {
                visualDuration: e,
                keyframes: [0, 1],
                bounce: r
            } : e,
            {
                restSpeed: T,
                restDelta: V
            } = g,
            b = g.keyframes[0],
            S = g.keyframes[g.keyframes.length - 1],
            w = {
                done: !1,
                value: b
            },
            {
                stiffness: M,
                damping: x,
                mass: A,
                duration: C,
                velocity: P,
                isResolvedFromDuration: k
            } = function(e) {
                let n = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...e
                };
                if (!v(e, f) && v(e, p))
                    if (e.visualDuration) {
                        let t = 2 * Math.PI / (1.2 * e.visualDuration),
                            s = t * t,
                            r = 2 * (0, i.clamp)(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(s);
                        n = {
                            ...n,
                            mass: 1,
                            stiffness: s,
                            damping: r
                        }
                    } else {
                        let s = function({
                            duration: e = 800,
                            bounce: n = .3,
                            velocity: s = 0,
                            mass: r = 1
                        }) {
                            let a, o;
                            (0, d.warning)(e <= (0, t.secondsToMilliseconds)(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                            let l = 1 - n;
                            l = (0, i.clamp)(.05, 1, l), e = (0, i.clamp)(.01, 10, (0, t.millisecondsToSeconds)(e)), l < 1 ? (a = t => {
                                let i = t * l,
                                    n = i * e;
                                return .001 - (i - s) / m(t, l) * Math.exp(-n)
                            }, o = t => {
                                let i = t * l * e,
                                    n = Math.pow(l, 2) * Math.pow(t, 2) * e,
                                    r = Math.exp(-i),
                                    o = m(Math.pow(t, 2), l);
                                return (i * s + s - n) * r * (-a(t) + .001 > 0 ? -1 : 1) / o
                            }) : (a = t => -.001 + Math.exp(-t * e) * ((t - s) * e + 1), o = t => e * e * (s - t) * Math.exp(-t * e));
                            let u = function(e, t, i) {
                                let n = i;
                                for (let i = 1; i < 12; i++) n -= e(n) / t(n);
                                return n
                            }(a, o, 5 / e);
                            if (e = (0, t.secondsToMilliseconds)(e), isNaN(u)) return {
                                stiffness: 100,
                                damping: 10,
                                duration: e
                            };
                            {
                                let t = Math.pow(u, 2) * r;
                                return {
                                    stiffness: t,
                                    damping: 2 * l * Math.sqrt(r * t),
                                    duration: e
                                }
                            }
                        }(e);
                        (n = {
                            ...n,
                            ...s,
                            mass: 1
                        }).isResolvedFromDuration = !0
                    } return n
            }({
                ...g,
                velocity: -(0, t.millisecondsToSeconds)(g.velocity || 0)
            }),
            E = P || 0,
            F = x / (2 * Math.sqrt(M * A)),
            O = S - b,
            D = (0, t.millisecondsToSeconds)(Math.sqrt(M / A)),
            I = 5 > Math.abs(O);
        if (T || (T = I ? l : u), V || (V = I ? h : c), F < 1) {
            let e = m(D, F);
            a = t => S - Math.exp(-F * D * t) * ((E + F * D * O) / e * Math.sin(e * t) + O * Math.cos(e * t))
        } else if (1 === F) a = e => S - Math.exp(-D * e) * (O + (E + D * O) * e);
        else {
            let e = D * Math.sqrt(F * F - 1);
            a = t => {
                let i = Math.exp(-F * D * t),
                    n = Math.min(e * t, 300);
                return S - i * ((E + F * D * O) * Math.sinh(n) + e * O * Math.cosh(n)) / e
            }
        }
        let B = {
            calculatedDuration: k && C || null,
            next: e => {
                let i = a(e);
                if (k) w.done = e >= C;
                else {
                    let n = 0 === e ? E : 0;
                    F < 1 && (n = 0 === e ? (0, t.secondsToMilliseconds)(E) : o(a, e, i));
                    let s = Math.abs(S - i) <= V;
                    w.done = Math.abs(n) <= T && s
                }
                return w.value = w.done ? S : i, w
            },
            toString: () => {
                let e = Math.min(s(B), 2e4),
                    t = n(t => B.next(e * t).value, e, 30);
                return e + "ms " + t
            },
            toTransition: () => {}
        };
        return B
    }
    y.applyToOptions = e => {
        let i = r(e, 100, y);
        return e.ease = i.ease, e.duration = (0, t.secondsToMilliseconds)(i.duration), e.type = "keyframes", e
    }, e.s(["spring", 0, y], 798520)
}, 264653, e => {
    "use strict";
    var t = e.i(798520),
        i = e.i(994418);
    e.s(["inertia", 0, function({
        keyframes: e,
        velocity: n = 0,
        power: s = .8,
        timeConstant: r = 325,
        bounceDamping: a = 10,
        bounceStiffness: o = 500,
        modifyTarget: l,
        min: u,
        max: h,
        restDelta: c = .5,
        restSpeed: d
    }) {
        let m, p, f = e[0],
            v = {
                done: !1,
                value: f
            },
            y = s * n,
            g = f + y,
            T = void 0 === l ? g : l(g);
        T !== g && (y = T - f);
        let V = e => -y * Math.exp(-e / r),
            b = e => T + V(e),
            S = e => {
                let t = V(e),
                    i = b(e);
                v.done = Math.abs(t) <= c, v.value = v.done ? T : i
            },
            w = e => {
                let n;
                if (n = v.value, void 0 !== u && n < u || void 0 !== h && n > h) {
                    var s;
                    m = e, p = (0, t.spring)({
                        keyframes: [v.value, (s = v.value, void 0 === u ? h : void 0 === h || Math.abs(u - s) < Math.abs(h - s) ? u : h)],
                        velocity: (0, i.calcGeneratorVelocity)(b, e, v.value),
                        damping: a,
                        stiffness: o,
                        restDelta: c,
                        restSpeed: d
                    })
                }
            };
        return w(0), {
            calculatedDuration: null,
            next: e => {
                let t = !1;
                return (p || void 0 !== m || (t = !0, S(e), w(e)), void 0 !== m && e >= m) ? p.next(e - m) : (t || S(e), v)
            }
        }
    }])
}, 529363, 989873, e => {
    "use strict";
    var t = e.i(175602);
    let i = (e, t, i) => (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;

    function n(e, n, s, r) {
        return e === n && s === r ? t.noop : t => 0 === t || 1 === t ? t : i(function(e, t, n, s, r) {
            let a, o, l = 0;
            do(a = i(o = t + (n - t) / 2, s, r) - e) > 0 ? n = o : t = o; while (Math.abs(a) > 1e-7 && ++l < 12) return o
        }(t, 0, 1, e, s), n, r)
    }
    e.s(["cubicBezier", 0, n], 989873);
    let s = n(.42, 0, 1, 1),
        r = n(0, 0, .58, 1),
        a = n(.42, 0, .58, 1);
    e.s(["easeIn", 0, s, "easeInOut", 0, a, "easeOut", 0, r], 529363)
}, 520085, e => {
    "use strict";
    e.s(["isEasingArray", 0, e => Array.isArray(e) && "number" != typeof e[0]])
}, 363960, 228696, 386183, 118744, 994415, 858449, 733468, 791332, e => {
    "use strict";
    e.i(788727);
    var t = e.i(640746),
        i = e.i(483032),
        n = e.i(667327),
        s = e.i(924140),
        r = e.i(840289),
        a = e.i(405082),
        o = e.i(840722),
        l = e.i(264653),
        u = e.i(529363),
        h = e.i(520085),
        c = e.i(348367),
        d = e.i(175602),
        m = e.i(989873);
    let p = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        f = e => t => 1 - e(1 - t),
        v = (0, m.cubicBezier)(.33, 1.53, .69, .99),
        y = f(v),
        g = p(y);
    e.s(["backIn", 0, y, "backInOut", 0, g, "backOut", 0, v], 228696);
    let T = e => (e *= 2) < 1 ? .5 * y(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)));
    e.s(["anticipate", 0, T], 386183);
    let V = e => 1 - Math.sin(Math.acos(e)),
        b = f(V),
        S = p(V);
    e.s(["circIn", 0, V, "circInOut", 0, S, "circOut", 0, b], 118744);
    let w = e => Array.isArray(e) && "number" == typeof e[0];
    e.s(["isBezierDefinition", 0, w], 994415);
    let M = {
            linear: d.noop,
            easeIn: u.easeIn,
            easeInOut: u.easeInOut,
            easeOut: u.easeOut,
            circIn: V,
            circInOut: S,
            circOut: b,
            backIn: y,
            backInOut: g,
            backOut: v,
            anticipate: T
        },
        x = e => {
            if (w(e)) {
                (0, c.invariant)(4 === e.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
                let [t, i, n, s] = e;
                return (0, m.cubicBezier)(t, i, n, s)
            }
            return "string" == typeof e ? ((0, c.invariant)(void 0 !== M[e], `Invalid easing type '${e}'`, "invalid-easing-type"), M[e]) : e
        };
    var A = e.i(279126),
        C = e.i(668617);

    function P({
        duration: e = 300,
        keyframes: t,
        times: i,
        ease: n = "easeInOut"
    }) {
        var s;
        let r = (0, h.isEasingArray)(n) ? n.map(x) : x(n),
            a = {
                done: !1,
                value: t[0]
            },
            o = (s = i && i.length === t.length ? i : (0, C.defaultOffset)(t), s.map(t => t * e)),
            l = (0, A.interpolate)(o, t, {
                ease: Array.isArray(r) ? r : t.map(() => r || u.easeInOut).splice(0, t.length - 1)
            });
        return {
            calculatedDuration: e,
            next: t => (a.value = l(t), a.done = t >= e, a)
        }
    }
    var k = e.i(213581);
    let E = e => null !== e;

    function F(e, {
        repeat: t,
        repeatType: i = "loop"
    }, n, s = 1) {
        let r = e.filter(E),
            a = s < 0 || t && "loop" !== i && t % 2 == 1 ? 0 : r.length - 1;
        return a && void 0 !== n ? n : r[a]
    }
    e.s(["getFinalKeyframe", 0, F], 858449);
    var O = e.i(798520);
    let D = {
        decay: l.inertia,
        inertia: l.inertia,
        tween: P,
        keyframes: P,
        spring: O.spring
    };

    function I(e) {
        "string" == typeof e.type && (e.type = D[e.type])
    }
    e.s(["replaceTransitionType", 0, I], 733468);
    class B {
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
    e.s(["WithPromise", 0, B], 791332);
    let R = e => e / 100;
    e.s(["JSAnimation", 0, class extends B {
        constructor(e) {
            super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.stop = () => {
                let {
                    motionValue: e
                } = this.options;
                e && e.updatedAt !== s.time.now() && this.tick(s.time.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop?.())
            }, r.activeAnimations.mainThread++, this.options = e, this.initAnimation(), this.play(), !1 === e.autoplay && this.pause()
        }
        initAnimation() {
            let {
                options: e
            } = this;
            I(e);
            let {
                type: i = P,
                repeat: n = 0,
                repeatDelay: s = 0,
                repeatType: r,
                velocity: o = 0
            } = e, {
                keyframes: l
            } = e, u = i || P;
            u !== P && "number" != typeof l[0] && (this.mixKeyframes = (0, t.pipe)(R, (0, a.mix)(l[0], l[1])), l = [0, 100]);
            let h = u({
                ...e,
                keyframes: l
            });
            "mirror" === r && (this.mirroredGenerator = u({
                ...e,
                keyframes: [...l].reverse(),
                velocity: -o
            })), null === h.calculatedDuration && (h.calculatedDuration = (0, k.calcGeneratorDuration)(h));
            let {
                calculatedDuration: c
            } = h;
            this.calculatedDuration = c, this.resolvedDuration = c + s, this.totalDuration = this.resolvedDuration * (n + 1) - s, this.generator = h
        }
        updateTime(e) {
            let t = Math.round(e - this.startTime) * this.playbackSpeed;
            null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = t
        }
        tick(e, t = !1) {
            let {
                generator: n,
                totalDuration: s,
                mixKeyframes: r,
                mirroredGenerator: a,
                resolvedDuration: o,
                calculatedDuration: u
            } = this;
            if (null === this.startTime) return n.next(0);
            let {
                delay: h = 0,
                keyframes: c,
                repeat: d,
                repeatType: m,
                repeatDelay: p,
                type: f,
                onUpdate: v,
                finalKeyframe: y
            } = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - s / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
            let g = this.currentTime - h * (this.playbackSpeed >= 0 ? 1 : -1),
                T = this.playbackSpeed >= 0 ? g < 0 : g > s;
            this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = s);
            let V = this.currentTime,
                b = n;
            if (d) {
                let e = Math.min(this.currentTime, s) / o,
                    t = Math.floor(e),
                    n = e % 1;
                !n && e >= 1 && (n = 1), 1 === n && t--, (t = Math.min(t, d + 1)) % 2 && ("reverse" === m ? (n = 1 - n, p && (n -= p / o)) : "mirror" === m && (b = a)), V = (0, i.clamp)(0, 1, n) * o
            }
            let S = T ? {
                done: !1,
                value: c[0]
            } : b.next(V);
            r && (S.value = r(S.value));
            let {
                done: w
            } = S;
            T || null === u || (w = this.playbackSpeed >= 0 ? this.currentTime >= s : this.currentTime <= 0);
            let M = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
            return M && f !== l.inertia && (S.value = F(c, this.options, y, this.speed)), v && v(S.value), M && this.finish(), S
        }
        then(e, t) {
            return this.finished.then(e, t)
        }
        get duration() {
            return (0, n.millisecondsToSeconds)(this.calculatedDuration)
        }
        get iterationDuration() {
            let {
                delay: e = 0
            } = this.options || {};
            return this.duration + (0, n.millisecondsToSeconds)(e)
        }
        get time() {
            return (0, n.millisecondsToSeconds)(this.currentTime)
        }
        set time(e) {
            e = (0, n.secondsToMilliseconds)(e), this.currentTime = e, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver?.start(!1)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(e) {
            this.updateTime(s.time.now());
            let t = this.playbackSpeed !== e;
            this.playbackSpeed = e, t && (this.time = (0, n.millisecondsToSeconds)(this.currentTime))
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
            this.state = "paused", this.updateTime(s.time.now()), this.holdTime = this.currentTime
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
            this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null, r.activeAnimations.mainThread--
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
    }], 363960)
}, 640248, 32806, 699834, e => {
    "use strict";
    let t;
    e.s(["setStyle", 0, function(e, t, i) {
        t.startsWith("--") ? e.style.setProperty(t, i) : e.style[t] = i
    }], 640248);
    var i, n = e.i(840289),
        s = e.i(680124),
        r = e.i(994415),
        a = e.i(338212);
    let o = {},
        l = (i = () => {
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
        }, t = (0, a.memo)(i), () => o.linearEasing ?? t());
    e.s(["supportsLinearEasing", 0, l], 32806);
    var u = e.i(682580);
    let h = ([e, t, i, n]) => `cubic-bezier(${e}, ${t}, ${i}, ${n})`,
        c = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: h([0, .65, .55, 1]),
            circOut: h([.55, 0, 1, .45]),
            backIn: h([.31, .01, .66, -.59]),
            backOut: h([.33, 1.53, .69, .99])
        };
    e.s(["startWaapiAnimation", 0, function(e, t, i, {
        delay: a = 0,
        duration: o = 300,
        repeat: d = 0,
        repeatType: m = "loop",
        ease: p = "easeOut",
        times: f
    } = {}, v) {
        let y = {
            [t]: i
        };
        f && (y.offset = f);
        let g = function e(t, i) {
            if (t) return "function" == typeof t ? l() ? (0, u.generateLinearEasing)(t, i) : "ease-out" : (0, r.isBezierDefinition)(t) ? h(t) : Array.isArray(t) ? t.map(t => e(t, i) || c.easeOut) : c[t]
        }(p, o);
        Array.isArray(g) && (y.easing = g), s.statsBuffer.value && n.activeAnimations.waapi++;
        let T = {
            delay: a,
            duration: o,
            easing: Array.isArray(g) ? "linear" : g,
            fill: "both",
            iterations: d + 1,
            direction: "reverse" === m ? "alternate" : "normal"
        };
        v && (T.pseudoElement = v);
        let V = e.animate(y, T);
        return s.statsBuffer.value && V.finished.finally(() => {
            n.activeAnimations.waapi--
        }), V
    }], 699834)
}, 161, e => {
    "use strict";
    e.s(["isGenerator", 0, function(e) {
        return "function" == typeof e && "applyToOptions" in e
    }])
}, 349168, e => {
    "use strict";
    var t = e.i(965836),
        i = e.i(392296),
        n = e.i(347248),
        s = e.i(363960),
        r = e.i(954912),
        a = e.i(175602),
        o = e.i(924140),
        l = e.i(858449),
        u = e.i(883582),
        h = e.i(667327),
        c = e.i(348367),
        d = e.i(640248),
        m = e.i(815965),
        p = e.i(791332),
        f = e.i(699834),
        v = e.i(32806),
        y = e.i(161);
    class g extends p.WithPromise {
        constructor(e) {
            if (super(), this.finishedTime = null, this.isStopped = !1, !e) return;
            const {
                element: t,
                name: i,
                keyframes: n,
                pseudoElement: s,
                allowFlatten: r = !1,
                finalKeyframe: a,
                onComplete: o
            } = e;
            this.isPseudoElement = !!s, this.allowFlatten = r, this.options = e, (0, c.invariant)("string" != typeof e.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
            const u = function({
                type: e,
                ...t
            }) {
                return (0, y.isGenerator)(e) && (0, v.supportsLinearEasing)() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t)
            }(e);
            this.animation = (0, f.startWaapiAnimation)(t, i, n, u, s), !1 === u.autoplay && this.animation.pause(), this.animation.onfinish = () => {
                if (this.finishedTime = this.time, !s) {
                    let e = (0, l.getFinalKeyframe)(n, this.options, a, this.speed);
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
            }), this.animation.onfinish = null, e && (0, m.supportsScrollTimeline)()) ? (this.animation.timeline = e, a.noop) : t(this)
        }
    }
    var T = e.i(733468),
        V = e.i(386183),
        b = e.i(228696),
        S = e.i(118744);
    let w = {
        anticipate: V.anticipate,
        backInOut: b.backInOut,
        circInOut: S.circInOut
    };
    class M extends g {
        constructor(e) {
            ! function(e) {
                "string" == typeof e.ease && e.ease in w && (e.ease = w[e.ease])
            }(e), (0, T.replaceTransitionType)(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e
        }
        updateMotionValue(e) {
            let {
                motionValue: t,
                onUpdate: i,
                onComplete: n,
                element: r,
                ...a
            } = this.options;
            if (!t) return;
            if (void 0 !== e) return void t.set(e);
            let o = new s.JSAnimation({
                    ...a,
                    autoplay: !1
                }),
                l = (0, h.secondsToMilliseconds)(this.finishedTime ?? this.time);
            t.setWithVelocity(o.sample(l - 10).value, o.sample(l).value, 10), o.stop()
        }
    }
    var x = e.i(377149);
    let A = (e, t) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (x.complex.test(e) || "0" === e) && !e.startsWith("url("));
    var C = p,
        P = e.i(338212);
    let k = new Set(["opacity", "clipPath", "filter", "transform"]),
        E = (0, P.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class F extends C.WithPromise {
        constructor({
            autoplay: e = !0,
            delay: t = 0,
            type: i = "keyframes",
            repeat: n = 0,
            repeatDelay: s = 0,
            repeatType: r = "loop",
            keyframes: a,
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
                    repeat: n,
                    repeatDelay: s,
                    repeatType: r,
                    name: l,
                    motionValue: h,
                    element: c,
                    ...d
                },
                p = c?.KeyframeResolver || u.KeyframeResolver;
            this.keyframeResolver = new p(a, (e, t, i) => this.onKeyframesResolved(e, t, m, !i), l, h, c), this.keyframeResolver?.scheduleResolve()
        }
        onKeyframesResolved(e, t, n, u) {
            this.keyframeResolver = void 0;
            let {
                name: h,
                type: d,
                velocity: m,
                delay: p,
                isHandoff: f,
                onUpdate: v
            } = n;
            this.resolvedAt = o.time.now(), ! function(e, t, i, n) {
                let s = e[0];
                if (null === s) return !1;
                if ("display" === t || "visibility" === t) return !0;
                let r = e[e.length - 1],
                    a = A(s, t),
                    o = A(r, t);
                return (0, c.warning)(a === o, `You are trying to animate ${t} from "${s}" to "${r}". "${a?r:s}" is not an animatable value.`, "value-not-animatable"), !!a && !!o && (function(e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let i = 0; i < e.length; i++)
                        if (e[i] !== t) return !0
                }(e) || ("spring" === i || (0, y.isGenerator)(i)) && n)
            }(e, h, d, m) && ((r.MotionGlobalConfig.instantAnimations || !p) && v?.((0, l.getFinalKeyframe)(e, n, t)), e[0] = e[e.length - 1], (0, i.makeAnimationInstant)(n), n.repeat = 0);
            let g = {
                    startTime: u ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: t,
                    ...n,
                    keyframes: e
                },
                T = !f && function(e) {
                    let {
                        motionValue: t,
                        name: i,
                        repeatDelay: n,
                        repeatType: s,
                        damping: r,
                        type: a
                    } = e;
                    if (!(t?.owner?.current instanceof HTMLElement)) return !1;
                    let {
                        onUpdate: o,
                        transformTemplate: l
                    } = t.owner.getProps();
                    return E() && i && k.has(i) && ("transform" !== i || !l) && !o && !n && "mirror" !== s && 0 !== r && "inertia" !== a
                }(g) ? new M({
                    ...g,
                    element: g.motionValue.owner.current
                }) : new s.JSAnimation(g);
            T.finished.then(() => this.notifyFinished()).catch(a.noop), this.pendingTimeline && (this.stopTimeline = T.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = T
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
    var D = e.i(229859);
    let I = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        },
        B = {
            type: "keyframes",
            duration: .8
        },
        R = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        };
    e.s(["animateMotionValue", 0, (e, a, o, l = {}, u, c) => d => {
        let m = (0, t.getValueTransition)(l, e) || {},
            p = m.delay || l.delay || 0,
            {
                elapsed: f = 0
            } = l;
        f -= (0, h.secondsToMilliseconds)(p);
        let v = {
            keyframes: Array.isArray(o) ? o : [null, o],
            ease: "easeOut",
            velocity: a.getVelocity(),
            ...m,
            delay: -f,
            onUpdate: e => {
                a.set(e), m.onUpdate && m.onUpdate(e)
            },
            onComplete: () => {
                d(), m.onComplete && m.onComplete()
            },
            name: e,
            motionValue: a,
            element: c ? void 0 : u
        };
        ! function({
            when: e,
            delay: t,
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
        }(m) && Object.assign(v, ((e, {
            keyframes: t
        }) => t.length > 2 ? B : D.transformProps.has(e) ? e.startsWith("scale") ? {
            type: "spring",
            stiffness: 550,
            damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        } : I : R)(e, v)), v.duration && (v.duration = (0, h.secondsToMilliseconds)(v.duration)), v.repeatDelay && (v.repeatDelay = (0, h.secondsToMilliseconds)(v.repeatDelay)), void 0 !== v.from && (v.keyframes[0] = v.from);
        let y = !1;
        if (!1 !== v.type && (0 !== v.duration || v.repeatDelay) || ((0, i.makeAnimationInstant)(v), 0 === v.delay && (y = !0)), (r.MotionGlobalConfig.instantAnimations || r.MotionGlobalConfig.skipAnimations) && (y = !0, (0, i.makeAnimationInstant)(v), v.delay = 0), v.allowFlatten = !m.type && !m.ease, y && !c && void 0 !== a.get()) {
            let e = function(e, {
                repeat: t,
                repeatType: i = "loop"
            }) {
                let n = e.filter(O),
                    s = t && "loop" !== i && t % 2 == 1 ? 0 : n.length - 1;
                return n[s]
            }(v.keyframes, m);
            if (void 0 !== e) return void n.frame.update(() => {
                v.onUpdate(e), v.onComplete()
            })
        }
        return m.isSync ? new s.JSAnimation(v) : new F(v)
    }], 349168)
}, 612241, e => {
    "use strict";
    var t = e.i(965836),
        i = e.i(347248),
        n = e.i(444948),
        s = e.i(67962),
        r = e.i(700236),
        a = e.i(75557),
        o = e.i(349168);
    e.s(["animateTarget", 0, function(e, l, {
        delay: u = 0,
        transitionOverride: h,
        type: c
    } = {}) {
        let {
            transition: d = e.getDefaultTransition(),
            transitionEnd: m,
            ...p
        } = l;
        h && (d = h);
        let f = [],
            v = c && e.animationState && e.animationState.getState()[c];
        for (let s in p) {
            let l = e.getValue(s, e.latestValues[s] ?? null),
                h = p[s];
            if (void 0 === h || v && function({
                    protectedKeys: e,
                    needsAnimating: t
                }, i) {
                    let n = e.hasOwnProperty(i) && !0 !== t[i];
                    return t[i] = !1, n
                }(v, s)) continue;
            let c = {
                    delay: u,
                    ...(0, t.getValueTransition)(d || {}, s)
                },
                m = l.get();
            if (void 0 !== m && !l.isAnimating && !Array.isArray(h) && h === m && !c.velocity) continue;
            let y = !1;
            if (window.MotionHandoffAnimation) {
                let t = (0, a.getOptimisedAppearId)(e);
                if (t) {
                    let e = window.MotionHandoffAnimation(t, s, i.frame);
                    null !== e && (c.startTime = e, y = !0)
                }
            }(0, r.addValueToWillChange)(e, s), l.start((0, o.animateMotionValue)(s, l, h, e.shouldReduceMotion && n.positionalKeys.has(s) ? {
                type: !1
            } : c, e, y));
            let g = l.animation;
            g && f.push(g)
        }
        return m && Promise.all(f).then(() => {
            i.frame.update(() => {
                m && (0, s.setTarget)(e, m)
            })
        }), f
    }])
}, 24388, e => {
    "use strict";
    var t = e.i(669430),
        i = e.i(612241);

    function n(e, t, i, s = 0, r = 1) {
        let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t),
            o = e.size,
            l = (o - 1) * s;
        return "function" == typeof i ? i(a, o) : 1 === r ? a * s : l - a * s
    }

    function s(e, r, a = {}) {
        let o = (0, t.resolveVariant)(e, r, "exit" === a.type ? e.presenceContext?.custom : void 0),
            {
                transition: l = e.getDefaultTransition() || {}
            } = o || {};
        a.transitionOverride && (l = a.transitionOverride);
        let u = o ? () => Promise.all((0, i.animateTarget)(e, o, a)) : () => Promise.resolve(),
            h = e.variantChildren && e.variantChildren.size ? (t = 0) => {
                let {
                    delayChildren: i = 0,
                    staggerChildren: o,
                    staggerDirection: u
                } = l;
                return function(e, t, i = 0, r = 0, a = 0, o = 1, l) {
                    let u = [];
                    for (let h of e.variantChildren) h.notify("AnimationStart", t), u.push(s(h, t, {
                        ...l,
                        delay: i + ("function" == typeof r ? 0 : r) + n(e.variantChildren, h, r, a, o)
                    }).then(() => h.notify("AnimationComplete", t)));
                    return Promise.all(u)
                }(e, r, t, i, o, u, a)
            } : () => Promise.resolve(),
            {
                when: c
            } = l;
        if (!c) return Promise.all([u(), h(a.delay)]);
        {
            let [e, t] = "beforeChildren" === c ? [u, h] : [h, u];
            return e().then(() => t())
        }
    }
    var r = e.i(838024),
        a = e.i(29762);

    function o(e, t) {
        if (!Array.isArray(t)) return !1;
        let i = t.length;
        if (i !== e.length) return !1;
        for (let n = 0; n < i; n++)
            if (t[n] !== e[n]) return !1;
        return !0
    }
    var l = e.i(593383),
        u = e.i(541762);
    let h = u.variantProps.length,
        c = [...u.variantPriorityOrder].reverse(),
        d = u.variantPriorityOrder.length;

    function m(e = !1) {
        return {
            isActive: e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }

    function p() {
        return {
            animate: m(!0),
            whileInView: m(),
            whileHover: m(),
            whileTap: m(),
            whileDrag: m(),
            whileFocus: m(),
            exit: m()
        }
    }
    e.s(["createAnimationState", 0, function(e) {
        let m = n => Promise.all(n.map(({
                animation: n,
                options: r
            }) => (function(e, n, r = {}) {
                let a;
                if (e.notify("AnimationStart", n), Array.isArray(n)) a = Promise.all(n.map(t => s(e, t, r)));
                else if ("string" == typeof n) a = s(e, n, r);
                else {
                    let s = "function" == typeof n ? (0, t.resolveVariant)(e, n, r.custom) : n;
                    a = Promise.all((0, i.animateTarget)(e, s, r))
                }
                return a.then(() => {
                    e.notify("AnimationComplete", n)
                })
            })(e, n, r))),
            f = p(),
            v = !0,
            y = i => (n, s) => {
                let r = (0, t.resolveVariant)(e, s, "exit" === i ? e.presenceContext?.custom : void 0);
                if (r) {
                    let {
                        transition: e,
                        transitionEnd: t,
                        ...i
                    } = r;
                    n = {
                        ...n,
                        ...i,
                        ...t
                    }
                }
                return n
            };

        function g(i) {
            let {
                props: s
            } = e, p = function e(t) {
                if (!t) return;
                if (!t.isControllingVariants) {
                    let i = t.parent && e(t.parent) || {};
                    return void 0 !== t.props.initial && (i.initial = t.props.initial), i
                }
                let i = {};
                for (let e = 0; e < h; e++) {
                    let n = u.variantProps[e],
                        s = t.props[n];
                    ((0, l.isVariantLabel)(s) || !1 === s) && (i[n] = s)
                }
                return i
            }(e.parent) || {}, g = [], T = new Set, V = {}, b = 1 / 0;
            for (let u = 0; u < d; u++) {
                var S, w;
                let h = c[u],
                    d = f[h],
                    m = void 0 !== s[h] ? s[h] : p[h],
                    M = (0, l.isVariantLabel)(m),
                    x = h === i ? d.isActive : null;
                !1 === x && (b = u);
                let A = m === p[h] && m !== s[h] && M;
                if (A && v && e.manuallyAnimateOnMount && (A = !1), d.protectedKeys = {
                        ...V
                    }, !d.isActive && null === x || !m && !d.prevProp || (0, r.isAnimationControls)(m) || "boolean" == typeof m) continue;
                let C = (S = d.prevProp, "string" == typeof(w = m) ? w !== S : !!Array.isArray(w) && !o(w, S)),
                    P = C || h === i && d.isActive && !A && M || u > b && M,
                    k = !1,
                    E = Array.isArray(m) ? m : [m],
                    F = E.reduce(y(h), {});
                !1 === x && (F = {});
                let {
                    prevResolvedValues: O = {}
                } = d, D = {
                    ...O,
                    ...F
                }, I = t => {
                    P = !0, T.has(t) && (k = !0, T.delete(t)), d.needsAnimating[t] = !0;
                    let i = e.getValue(t);
                    i && (i.liveStyle = !1)
                };
                for (let e in D) {
                    let t = F[e],
                        i = O[e];
                    if (!V.hasOwnProperty(e))((0, a.isKeyframesTarget)(t) && (0, a.isKeyframesTarget)(i) ? o(t, i) : t === i) ? void 0 !== t && T.has(e) ? I(e) : d.protectedKeys[e] = !0 : null != t ? I(e) : T.add(e)
                }
                d.prevProp = m, d.prevResolvedValues = F, d.isActive && (V = {
                    ...V,
                    ...F
                }), v && e.blockInitialAnimation && (P = !1);
                let B = A && C,
                    R = !B || k;
                P && R && g.push(...E.map(i => {
                    let s = {
                        type: h
                    };
                    if ("string" == typeof i && v && !B && e.manuallyAnimateOnMount && e.parent) {
                        let {
                            parent: r
                        } = e, a = (0, t.resolveVariant)(r, i);
                        if (r.enteringChildren && a) {
                            let {
                                delayChildren: t
                            } = a.transition || {};
                            s.delay = n(r.enteringChildren, e, t)
                        }
                    }
                    return {
                        animation: i,
                        options: s
                    }
                }))
            }
            if (T.size) {
                let i = {};
                if ("boolean" != typeof s.initial) {
                    let n = (0, t.resolveVariant)(e, Array.isArray(s.initial) ? s.initial[0] : s.initial);
                    n && n.transition && (i.transition = n.transition)
                }
                T.forEach(t => {
                    let n = e.getBaseTarget(t),
                        s = e.getValue(t);
                    s && (s.liveStyle = !0), i[t] = n ?? null
                }), g.push({
                    animation: i
                })
            }
            let M = !!g.length;
            return v && (!1 === s.initial || s.initial === s.animate) && !e.manuallyAnimateOnMount && (M = !1), v = !1, M ? m(g) : Promise.resolve()
        }
        return {
            animateChanges: g,
            setActive: function(t, i) {
                if (f[t].isActive === i) return Promise.resolve();
                e.variantChildren?.forEach(e => e.animationState?.setActive(t, i)), f[t].isActive = i;
                let n = g(t);
                for (let e in f) f[e].protectedKeys = {};
                return n
            },
            setAnimateFunction: function(t) {
                m = t(e)
            },
            getState: () => f,
            reset: () => {
                f = p()
            }
        }
    }], 24388)
}, 141932, e => {
    "use strict";
    e.s(["Feature", 0, class {
        constructor(e) {
            this.isMounted = !1, this.node = e
        }
        update() {}
    }])
}, 133862, e => {
    "use strict";
    var t = e.i(838024),
        i = e.i(24388),
        n = e.i(141932);
    class s extends n.Feature {
        constructor(e) {
            super(e), e.animationState || (e.animationState = (0, i.createAnimationState)(e))
        }
        updateAnimationControlsSubscription() {
            let {
                animate: e
            } = this.node.getProps();
            (0, t.isAnimationControls)(e) && (this.unmountControls = e.subscribe(this.node))
        }
        mount() {
            this.updateAnimationControlsSubscription()
        }
        update() {
            let {
                animate: e
            } = this.node.getProps(), {
                animate: t
            } = this.node.prevProps || {};
            e !== t && this.updateAnimationControlsSubscription()
        }
        unmount() {
            this.node.animationState.reset(), this.unmountControls?.()
        }
    }
    var r = n;
    let a = 0;
    class o extends r.Feature {
        constructor() {
            super(...arguments), this.id = a++
        }
        update() {
            if (!this.node.presenceContext) return;
            let {
                isPresent: e,
                onExitComplete: t
            } = this.node.presenceContext, {
                isPresent: i
            } = this.node.prevPresenceContext || {};
            if (!this.node.animationState || e === i) return;
            let n = this.node.animationState.setActive("exit", !e);
            t && !e && n.then(() => {
                t(this.id)
            })
        }
        mount() {
            let {
                register: e,
                onExitComplete: t
            } = this.node.presenceContext || {};
            t && t(this.id), e && (this.unmount = e(this.id))
        }
        unmount() {}
    }
    e.s(["animations", 0, {
        animation: {
            Feature: s
        },
        exit: {
            Feature: o
        }
    }], 133862)
}, 210681, e => {
    "use strict";
    let t = {
        x: !1,
        y: !1
    };
    e.s(["isDragActive", 0, function() {
        return t.x || t.y
    }, "isDragging", 0, t])
}, 958351, e => {
    "use strict";
    e.s(["addDomEvent", 0, function(e, t, i, n = {
        passive: !0
    }) {
        return e.addEventListener(t, i, n), () => e.removeEventListener(t, i)
    }])
}, 291989, 414161, e => {
    "use strict";
    let t = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

    function i(e) {
        return {
            point: {
                x: e.pageX,
                y: e.pageY
            }
        }
    }
    e.s(["isPrimaryPointer", 0, t], 414161), e.s(["addPointerInfo", 0, e => n => t(n) && e(n, i(n)), "extractEventInfo", 0, i], 291989)
}, 994216, 664356, e => {
    "use strict";
    var t = e.i(210681),
        i = e.i(369710);

    function n(e, t) {
        let n = (0, i.resolveElements)(e),
            s = new AbortController;
        return [n, {
            passive: !0,
            ...t,
            signal: s.signal
        }, () => s.abort()]
    }

    function s(e) {
        return !("touch" === e.pointerType || (0, t.isDragActive)())
    }
    e.s(["setupGesture", 0, n], 664356), e.s(["hover", 0, function(e, t, i = {}) {
        let [r, a, o] = n(e, i), l = e => {
            if (!s(e)) return;
            let {
                target: i
            } = e, n = t(i, e);
            if ("function" != typeof n || !i) return;
            let r = e => {
                s(e) && (n(e), i.removeEventListener("pointerleave", r))
            };
            i.addEventListener("pointerleave", r, a)
        };
        return r.forEach(e => {
            e.addEventListener("pointerenter", l, a)
        }), o
    }], 994216)
}, 174821, e => {
    "use strict";
    var t = e.i(994216),
        i = e.i(347248),
        n = e.i(291989),
        s = e.i(141932);

    function r(e, t, s) {
        let {
            props: r
        } = e;
        e.animationState && r.whileHover && e.animationState.setActive("whileHover", "Start" === s);
        let a = r["onHover" + s];
        a && i.frame.postRender(() => a(t, (0, n.extractEventInfo)(t)))
    }
    class a extends s.Feature {
        mount() {
            let {
                current: e
            } = this.node;
            e && (this.unmount = (0, t.hover)(e, (e, t) => (r(this.node, t, "Start"), e => r(this.node, e, "End"))))
        }
        unmount() {}
    }
    e.s(["HoverGesture", 0, a])
}, 780584, e => {
    "use strict";
    var t = e.i(174821),
        i = e.i(640746),
        n = e.i(958351),
        s = e.i(141932);
    class r extends s.Feature {
        constructor() {
            super(...arguments), this.isActive = !1
        }
        onFocus() {
            let e = !1;
            try {
                e = this.node.current.matches(":focus-visible")
            } catch (t) {
                e = !0
            }
            e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
        }
        onBlur() {
            this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
        }
        mount() {
            this.unmount = (0, i.pipe)((0, n.addDomEvent)(this.node.current, "focus", () => this.onFocus()), (0, n.addDomEvent)(this.node.current, "blur", () => this.onBlur()))
        }
        unmount() {}
    }
    var a = e.i(812064),
        o = e.i(210681);
    let l = (e, t) => !!t && (e === t || l(e, t.parentElement));
    var u = e.i(414161),
        h = e.i(664356);
    let c = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        d = new WeakSet;

    function m(e) {
        return t => {
            "Enter" === t.key && e(t)
        }
    }

    function p(e, t) {
        e.dispatchEvent(new PointerEvent("pointer" + t, {
            isPrimary: !0,
            bubbles: !0
        }))
    }

    function f(e) {
        return (0, u.isPrimaryPointer)(e) && !(0, o.isDragActive)()
    }
    var v = e.i(347248),
        y = e.i(291989),
        g = s;

    function T(e, t, i) {
        let {
            props: n
        } = e;
        if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
        e.animationState && n.whileTap && e.animationState.setActive("whileTap", "Start" === i);
        let s = n["onTap" + ("End" === i ? "" : i)];
        s && v.frame.postRender(() => s(t, (0, y.extractEventInfo)(t)))
    }
    class V extends g.Feature {
        mount() {
            let {
                current: e
            } = this.node;
            e && (this.unmount = function(e, t, i = {}) {
                let [n, s, r] = (0, h.setupGesture)(e, i), o = e => {
                    let n = e.currentTarget;
                    if (!f(e)) return;
                    d.add(n);
                    let r = t(n, e),
                        a = (e, t) => {
                            window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", u), d.has(n) && d.delete(n), f(e) && "function" == typeof r && r(e, {
                                success: t
                            })
                        },
                        o = e => {
                            a(e, n === window || n === document || i.useGlobalTarget || l(n, e.target))
                        },
                        u = e => {
                            a(e, !1)
                        };
                    window.addEventListener("pointerup", o, s), window.addEventListener("pointercancel", u, s)
                };
                return n.forEach(e => {
                    ((i.useGlobalTarget ? window : e).addEventListener("pointerdown", o, s), (0, a.isHTMLElement)(e)) && (e.addEventListener("focus", e => ((e, t) => {
                        let i = e.currentTarget;
                        if (!i) return;
                        let n = m(() => {
                            if (d.has(i)) return;
                            p(i, "down");
                            let e = m(() => {
                                p(i, "up")
                            });
                            i.addEventListener("keyup", e, t), i.addEventListener("blur", () => p(i, "cancel"), t)
                        });
                        i.addEventListener("keydown", n, t), i.addEventListener("blur", () => i.removeEventListener("keydown", n), t)
                    })(e, s)), c.has(e.tagName) || -1 !== e.tabIndex || e.hasAttribute("tabindex") || (e.tabIndex = 0))
                }), r
            }(e, (e, t) => (T(this.node, t, "Start"), (e, {
                success: t
            }) => T(this.node, e, t ? "End" : "Cancel")), {
                useGlobalTarget: this.node.props.globalTapTarget
            }))
        }
        unmount() {}
    }
    var b = s;
    let S = new WeakMap,
        w = new WeakMap,
        M = e => {
            let t = S.get(e.target);
            t && t(e)
        },
        x = e => {
            e.forEach(M)
        },
        A = {
            some: 0,
            all: 1
        };
    class C extends b.Feature {
        constructor() {
            super(...arguments), this.hasEnteredView = !1, this.isInView = !1
        }
        startObserver() {
            var e;
            let t;
            this.unmount();
            let {
                viewport: i = {}
            } = this.node.getProps(), {
                root: n,
                margin: s,
                amount: r = "some",
                once: a
            } = i, o = {
                root: n ? n.current : void 0,
                rootMargin: s,
                threshold: "number" == typeof r ? r : A[r]
            }, l = e => {
                let {
                    isIntersecting: t
                } = e;
                if (this.isInView === t || (this.isInView = t, a && !t && this.hasEnteredView)) return;
                t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                let {
                    onViewportEnter: i,
                    onViewportLeave: n
                } = this.node.getProps(), s = t ? i : n;
                s && s(e)
            };
            return e = this.node.current, t = function({
                root: e,
                ...t
            }) {
                let i = e || document;
                w.has(i) || w.set(i, {});
                let n = w.get(i),
                    s = JSON.stringify(t);
                return n[s] || (n[s] = new IntersectionObserver(x, {
                    root: e,
                    ...t
                })), n[s]
            }(o), S.set(e, l), t.observe(e), () => {
                S.delete(e), t.unobserve(e)
            }
        }
        mount() {
            this.startObserver()
        }
        update() {
            if ("u" < typeof IntersectionObserver) return;
            let {
                props: e,
                prevProps: t
            } = this.node;
            ["amount", "margin", "root"].some(function({
                viewport: e = {}
            }, {
                viewport: t = {}
            } = {}) {
                return i => e[i] !== t[i]
            }(e, t)) && this.startObserver()
        }
        unmount() {}
    }
    let P = {
        inView: {
            Feature: C
        },
        tap: {
            Feature: V
        },
        focus: {
            Feature: r
        },
        hover: {
            Feature: t.HoverGesture
        }
    };
    e.s(["gestureAnimations", 0, P], 780584)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "6c638df2-141c-5301-881c-505d970e5209")
    } catch (e) {}
}();
//# debugId=6c638df2-141c-5301-881c-505d970e5209