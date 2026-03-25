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

    function h(e, t) {
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
            h = n[1].split(",").map(m);
        return "function" == typeof r ? r(h) : h[r]
    }
    let u = (e, t) => {
        let {
            transform: i = "none"
        } = getComputedStyle(e);
        return h(i, t)
    };

    function m(e) {
        return parseFloat(e.trim())
    }
    e.s(["defaultTransformValue", () => l, "parseValueFromTransform", () => h, "readTransformValue", () => u])
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
    let h = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
    e.s(["getVariableValue", () => function e(t, i, s = 1) {
        (0, r.invariant)(s <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
        let [n, a] = function(e) {
            let t = h.exec(e);
            if (!t) return [, ];
            let [, i, s, n] = t;
            return [`--${i??s}`, n]
        }(t);
        if (!n) return;
        let u = window.getComputedStyle(i).getPropertyValue(n);
        if (u) {
            let e = u.trim();
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

    function h(e) {
        let t = [];
        return l.forEach(i => {
            let s = e.getValue(i);
            void 0 !== s && (t.push([i, s.get()]), s.set(+!!i.startsWith("scale")))
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
    u.translateX = u.x, u.translateY = u.y, e.s(["isNumOrPxType", () => r, "positionalValues", () => u, "removeNonTranslationalTransform", () => h], 400857);
    var m = e.i(347248);
    let c = new Set,
        d = !1,
        p = !1,
        f = !1;

    function y() {
        if (p) {
            let e = Array.from(c).filter(e => e.needsMeasurement),
                t = new Set(e.map(e => e.element)),
                i = new Map;
            t.forEach(e => {
                let t = h(e);
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
        p = !1, d = !1, c.forEach(e => e.complete(f)), c.clear()
    }

    function v() {
        c.forEach(e => {
            e.readKeyframes(), e.needsMeasurement && (p = !0)
        })
    }

    function g() {
        f = !0, v(), y(), f = !1
    }
    class T {
        constructor(e, t, i, s, n, a = !1) {
            this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = i, this.motionValue = s, this.element = n, this.isAsync = a
        }
        scheduleResolve() {
            this.state = "scheduled", this.isAsync ? (c.add(this), d || (d = !0, m.frame.read(v), m.frame.resolveKeyframes(y))) : (this.readKeyframes(), this.complete())
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
            this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), c.delete(this)
        }
        cancel() {
            "scheduled" === this.state && (c.delete(this), this.state = "pending")
        }
        resume() {
            "pending" === this.state && this.scheduleResolve()
        }
    }
    e.s(["KeyframeResolver", () => T, "flushKeyframeResolvers", () => g], 883582)
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
    let h = new Set(["brightness", "contrast", "saturate", "opacity"]);

    function u(e) {
        let [t, i] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [s] = i.match(l.floatRegex) || [];
        if (!s) return e;
        let n = i.replace(s, ""),
            a = +!!h.has(t);
        return s !== i && (a *= 100), t + "(" + a + n + ")"
    }
    let m = /\b([a-z-]*)\(.*?\)/gu,
        c = {
            ...o.complex,
            getAnimatableNone: e => {
                let t = e.match(m);
                return t ? t.map(u).join(" ") : e
            }
        };
    var d = e.i(168826);
    let p = {
            ...e.i(124424).numberValueTypes,
            color: d.color,
            backgroundColor: d.color,
            outlineColor: d.color,
            fill: d.color,
            stroke: d.color,
            borderColor: d.color,
            borderTopColor: d.color,
            borderRightColor: d.color,
            borderBottomColor: d.color,
            borderLeftColor: d.color,
            filter: c,
            WebkitFilter: c
        },
        f = e => p[e];

    function y(e, t) {
        let i = f(e);
        return i !== c && (i = o.complex), i.getAnimatableNone ? i.getAnimatableNone(t) : void 0
    }
    e.s(["getDefaultValueType", () => f], 210973), e.s(["getAnimatableNone", () => y], 920885);
    let v = new Set(["auto", "none", "0"]);
    var g = e.i(400857);
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
            let [o, l] = e, h = (0, i.findDimensionValueType)(o), u = (0, i.findDimensionValueType)(l);
            if (h !== u)
                if ((0, g.isNumOrPxType)(h) && (0, g.isNumOrPxType)(u))
                    for (let t = 0; t < e.length; t++) {
                        let i = e[t];
                        "string" == typeof i && (e[t] = parseFloat(i))
                    } else g.positionalValues[r] && (this.needsMeasurement = !0)
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
                    "string" == typeof t && !v.has(t) && (0, o.analyseComplexValue)(t).values.length && (s = e[n]), n++
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
            "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = g.positionalValues[i](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
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
            i[n] = g.positionalValues[t](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== a && void 0 === this.finalKeyframe && (this.finalKeyframe = a), this.removedTransforms?.length && this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i)
            }), this.resolveNoneKeyframes()
        }
    }
    e.s(["DOMKeyframesResolver", () => T], 636056);
    var b = e.i(960125);
    let M = [...i.dimensionValueTypes, d.color, o.complex],
        S = e => M.find((0, b.testValueType)(e));
    e.s(["findValueType", () => S], 946974)
}, 984776, e => {
    "use strict";
    let {
        schedule: t
    } = (0, e.i(817967).createRenderBatcher)(queueMicrotask, !1);
    e.s(["microtask", () => t])
}, 965836, e => {
    "use strict";

    function t(e, t) {
        return e?.[t] ?? e?.default ?? e
    }
    e.s(["getValueTransition", () => t])
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
        h = 2,
        u = .005,
        m = .5;
    var c = e.i(348367);

    function d(e, t) {
        return e * Math.sqrt(1 - t * t)
    }
    let p = ["duration", "bounce"],
        f = ["stiffness", "damping", "mass"];

    function y(e, t) {
        return t.some(t => void 0 !== e[t])
    }

    function v(e = .3, a = .3) {
        let r, g = "object" != typeof e ? {
                visualDuration: e,
                keyframes: [0, 1],
                bounce: a
            } : e,
            {
                restSpeed: T,
                restDelta: b
            } = g,
            M = g.keyframes[0],
            S = g.keyframes[g.keyframes.length - 1],
            w = {
                done: !1,
                value: M
            },
            {
                stiffness: k,
                damping: x,
                mass: A,
                duration: V,
                velocity: O,
                isResolvedFromDuration: D
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
                            (0, c.warning)(e <= (0, t.secondsToMilliseconds)(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                            let l = 1 - s;
                            l = (0, i.clamp)(.05, 1, l), e = (0, i.clamp)(.01, 10, (0, t.millisecondsToSeconds)(e)), l < 1 ? (r = t => {
                                let i = t * l,
                                    s = i * e;
                                return .001 - (i - n) / d(t, l) * Math.exp(-s)
                            }, o = t => {
                                let i = t * l * e,
                                    s = Math.pow(l, 2) * Math.pow(t, 2) * e,
                                    a = Math.exp(-i),
                                    o = d(Math.pow(t, 2), l);
                                return (i * n + n - s) * a * (-r(t) + .001 > 0 ? -1 : 1) / o
                            }) : (r = t => -.001 + Math.exp(-t * e) * ((t - n) * e + 1), o = t => e * e * (n - t) * Math.exp(-t * e));
                            let h = function(e, t, i) {
                                let s = i;
                                for (let i = 1; i < 12; i++) s -= e(s) / t(s);
                                return s
                            }(r, o, 5 / e);
                            if (e = (0, t.secondsToMilliseconds)(e), isNaN(h)) return {
                                stiffness: 100,
                                damping: 10,
                                duration: e
                            };
                            {
                                let t = Math.pow(h, 2) * a;
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
                ...g,
                velocity: -(0, t.millisecondsToSeconds)(g.velocity || 0)
            }),
            F = O || 0,
            I = x / (2 * Math.sqrt(k * A)),
            K = S - M,
            E = (0, t.millisecondsToSeconds)(Math.sqrt(k / A)),
            R = 5 > Math.abs(K);
        if (T || (T = R ? l : h), b || (b = R ? u : m), I < 1) {
            let e = d(E, I);
            r = t => S - Math.exp(-I * E * t) * ((F + I * E * K) / e * Math.sin(e * t) + K * Math.cos(e * t))
        } else if (1 === I) r = e => S - Math.exp(-E * e) * (K + (F + E * K) * e);
        else {
            let e = E * Math.sqrt(I * I - 1);
            r = t => {
                let i = Math.exp(-I * E * t),
                    s = Math.min(e * t, 300);
                return S - i * ((F + I * E * K) * Math.sinh(s) + e * K * Math.cosh(s)) / e
            }
        }
        let C = {
            calculatedDuration: D && V || null,
            next: e => {
                let i = r(e);
                if (D) w.done = e >= V;
                else {
                    let s = 0 === e ? F : 0;
                    I < 1 && (s = 0 === e ? (0, t.secondsToMilliseconds)(F) : o(r, e, i));
                    let n = Math.abs(S - i) <= b;
                    w.done = Math.abs(s) <= T && n
                }
                return w.value = w.done ? S : i, w
            },
            toString: () => {
                let e = Math.min(n(C), 2e4),
                    t = s(t => C.next(e * t).value, e, 30);
                return e + "ms " + t
            },
            toTransition: () => {}
        };
        return C
    }
    v.applyToOptions = e => {
        let i = a(e, 100, v);
        return e.ease = i.ease, e.duration = (0, t.secondsToMilliseconds)(i.duration), e.type = "keyframes", e
    }, e.s(["spring", () => v], 798520)
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
        min: h,
        max: u,
        restDelta: m = .5,
        restSpeed: c
    }) {
        let d, p, f = e[0],
            y = {
                done: !1,
                value: f
            },
            v = n * s,
            g = f + v,
            T = void 0 === l ? g : l(g);
        T !== g && (v = T - f);
        let b = e => -v * Math.exp(-e / a),
            M = e => T + b(e),
            S = e => {
                let t = b(e),
                    i = M(e);
                y.done = Math.abs(t) <= m, y.value = y.done ? T : i
            },
            w = e => {
                let s;
                if (s = y.value, void 0 !== h && s < h || void 0 !== u && s > u) {
                    var n;
                    d = e, p = (0, t.spring)({
                        keyframes: [y.value, (n = y.value, void 0 === h ? u : void 0 === u || Math.abs(h - n) < Math.abs(u - n) ? h : u)],
                        velocity: (0, i.calcGeneratorVelocity)(M, e, y.value),
                        damping: r,
                        stiffness: o,
                        restDelta: m,
                        restSpeed: c
                    })
                }
            };
        return w(0), {
            calculatedDuration: null,
            next: e => {
                let t = !1;
                return (p || void 0 !== d || (t = !0, S(e), w(e)), void 0 !== d && e >= d) ? p.next(e - d) : (t || S(e), y)
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
}, 363960, 228696, 386183, 118744, 994415, 858449, 733468, 791332, e => {
    "use strict";
    e.i(252495);
    var t = e.i(640746),
        i = e.i(483032),
        s = e.i(667327),
        n = e.i(924140),
        a = e.i(840289),
        r = e.i(405082),
        o = e.i(840722),
        l = e.i(264653),
        h = e.i(529363),
        u = e.i(520085),
        m = e.i(348367),
        c = e.i(175602),
        d = e.i(989873);
    let p = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        f = e => t => 1 - e(1 - t),
        y = (0, d.cubicBezier)(.33, 1.53, .69, .99),
        v = f(y),
        g = p(v);
    e.s(["backIn", () => v, "backInOut", () => g, "backOut", () => y], 228696);
    let T = e => (e *= 2) < 1 ? .5 * v(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)));
    e.s(["anticipate", () => T], 386183);
    let b = e => 1 - Math.sin(Math.acos(e)),
        M = f(b),
        S = p(b);
    e.s(["circIn", () => b, "circInOut", () => S, "circOut", () => M], 118744);
    let w = e => Array.isArray(e) && "number" == typeof e[0];
    e.s(["isBezierDefinition", () => w], 994415);
    let k = {
            linear: c.noop,
            easeIn: h.easeIn,
            easeInOut: h.easeInOut,
            easeOut: h.easeOut,
            circIn: b,
            circInOut: S,
            circOut: M,
            backIn: v,
            backInOut: g,
            backOut: y,
            anticipate: T
        },
        x = e => {
            if (w(e)) {
                (0, m.invariant)(4 === e.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
                let [t, i, s, n] = e;
                return (0, d.cubicBezier)(t, i, s, n)
            }
            return "string" == typeof e ? ((0, m.invariant)(void 0 !== k[e], `Invalid easing type '${e}'`, "invalid-easing-type"), k[e]) : e
        };
    var A = e.i(279126),
        V = e.i(605244);

    function O({
        duration: e = 300,
        keyframes: t,
        times: i,
        ease: s = "easeInOut"
    }) {
        var n;
        let a = (0, u.isEasingArray)(s) ? s.map(x) : x(s),
            r = {
                done: !1,
                value: t[0]
            },
            o = (n = i && i.length === t.length ? i : (0, V.defaultOffset)(t), n.map(t => t * e)),
            l = (0, A.interpolate)(o, t, {
                ease: Array.isArray(a) ? a : t.map(() => a || h.easeInOut).splice(0, t.length - 1)
            });
        return {
            calculatedDuration: e,
            next: t => (r.value = l(t), r.done = t >= e, r)
        }
    }
    var D = e.i(213581);
    let F = e => null !== e;

    function I(e, {
        repeat: t,
        repeatType: i = "loop"
    }, s, n = 1) {
        let a = e.filter(F),
            r = n < 0 || t && "loop" !== i && t % 2 == 1 ? 0 : a.length - 1;
        return r && void 0 !== s ? s : a[r]
    }
    e.s(["getFinalKeyframe", () => I], 858449);
    var K = e.i(798520);
    let E = {
        decay: l.inertia,
        inertia: l.inertia,
        tween: O,
        keyframes: O,
        spring: K.spring
    };

    function R(e) {
        "string" == typeof e.type && (e.type = E[e.type])
    }
    e.s(["replaceTransitionType", () => R], 733468);
    class C {
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
    e.s(["WithPromise", () => C], 791332);
    let P = e => e / 100;
    class N extends C {
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
            R(e);
            let {
                type: i = O,
                repeat: s = 0,
                repeatDelay: n = 0,
                repeatType: a,
                velocity: o = 0
            } = e, {
                keyframes: l
            } = e, h = i || O;
            h !== O && "number" != typeof l[0] && (this.mixKeyframes = (0, t.pipe)(P, (0, r.mix)(l[0], l[1])), l = [0, 100]);
            let u = h({
                ...e,
                keyframes: l
            });
            "mirror" === a && (this.mirroredGenerator = h({
                ...e,
                keyframes: [...l].reverse(),
                velocity: -o
            })), null === u.calculatedDuration && (u.calculatedDuration = (0, D.calcGeneratorDuration)(u));
            let {
                calculatedDuration: m
            } = u;
            this.calculatedDuration = m, this.resolvedDuration = m + n, this.totalDuration = this.resolvedDuration * (s + 1) - n, this.generator = u
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
                calculatedDuration: h
            } = this;
            if (null === this.startTime) return s.next(0);
            let {
                delay: u = 0,
                keyframes: m,
                repeat: c,
                repeatType: d,
                repeatDelay: p,
                type: f,
                onUpdate: y,
                finalKeyframe: v
            } = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - n / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
            let g = this.currentTime - u * (this.playbackSpeed >= 0 ? 1 : -1),
                T = this.playbackSpeed >= 0 ? g < 0 : g > n;
            this.currentTime = Math.max(g, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = n);
            let b = this.currentTime,
                M = s;
            if (c) {
                let e = Math.min(this.currentTime, n) / o,
                    t = Math.floor(e),
                    s = e % 1;
                !s && e >= 1 && (s = 1), 1 === s && t--, (t = Math.min(t, c + 1)) % 2 && ("reverse" === d ? (s = 1 - s, p && (s -= p / o)) : "mirror" === d && (M = r)), b = (0, i.clamp)(0, 1, s) * o
            }
            let S = T ? {
                done: !1,
                value: m[0]
            } : M.next(b);
            a && (S.value = a(S.value));
            let {
                done: w
            } = S;
            T || null === h || (w = this.playbackSpeed >= 0 ? this.currentTime >= n : this.currentTime <= 0);
            let k = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
            return k && f !== l.inertia && (S.value = I(m, this.options, v, this.speed)), y && y(S.value), k && this.finish(), S
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
    e.s(["JSAnimation", () => N], 363960)
}, 640248, 32806, 699834, e => {
    "use strict";
    let t;

    function i(e, t, i) {
        t.startsWith("--") ? e.style.setProperty(t, i) : e.style[t] = i
    }
    e.s(["setStyle", () => i], 640248);
    var s, n = e.i(840289),
        a = e.i(924091),
        r = e.i(994415),
        o = e.i(338212);
    let l = {},
        h = (s = () => {
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
    e.s(["supportsLinearEasing", () => h], 32806);
    var u = e.i(682580);
    let m = ([e, t, i, s]) => `cubic-bezier(${e}, ${t}, ${i}, ${s})`,
        c = {
            linear: "linear",
            ease: "ease",
            easeIn: "ease-in",
            easeOut: "ease-out",
            easeInOut: "ease-in-out",
            circIn: m([0, .65, .55, 1]),
            circOut: m([.55, 0, 1, .45]),
            backIn: m([.31, .01, .66, -.59]),
            backOut: m([.33, 1.53, .69, .99])
        };

    function d(e, t, i, {
        delay: s = 0,
        duration: o = 300,
        repeat: l = 0,
        repeatType: p = "loop",
        ease: f = "easeOut",
        times: y
    } = {}, v) {
        let g = {
            [t]: i
        };
        y && (g.offset = y);
        let T = function e(t, i) {
            if (t) return "function" == typeof t ? h() ? (0, u.generateLinearEasing)(t, i) : "ease-out" : (0, r.isBezierDefinition)(t) ? m(t) : Array.isArray(t) ? t.map(t => e(t, i) || c.easeOut) : c[t]
        }(f, o);
        Array.isArray(T) && (g.easing = T), a.statsBuffer.value && n.activeAnimations.waapi++;
        let b = {
            delay: s,
            duration: o,
            easing: Array.isArray(T) ? "linear" : T,
            fill: "both",
            iterations: l + 1,
            direction: "reverse" === p ? "alternate" : "normal"
        };
        v && (b.pseudoElement = v);
        let M = e.animate(g, b);
        return a.statsBuffer.value && M.finished.finally(() => {
            n.activeAnimations.waapi--
        }), M
    }
    e.s(["startWaapiAnimation", () => d], 699834)
}, 161, e => {
    "use strict";

    function t(e) {
        return "function" == typeof e && "applyToOptions" in e
    }
    e.s(["isGenerator", () => t])
}, 341052, e => {
    "use strict";
    var t = e.i(954912),
        i = e.i(175602),
        s = e.i(924140),
        n = e.i(363960),
        a = e.i(858449),
        r = e.i(883582),
        o = e.i(667327),
        l = e.i(348367),
        h = e.i(640248),
        u = e.i(815965),
        m = e.i(791332),
        c = e.i(699834),
        d = e.i(32806),
        p = e.i(161);
    class f extends m.WithPromise {
        constructor(e) {
            if (super(), this.finishedTime = null, this.isStopped = !1, !e) return;
            const {
                element: t,
                name: i,
                keyframes: s,
                pseudoElement: n,
                allowFlatten: r = !1,
                finalKeyframe: o,
                onComplete: u
            } = e;
            this.isPseudoElement = !!n, this.allowFlatten = r, this.options = e, (0, l.invariant)("string" != typeof e.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
            const m = function({
                type: e,
                ...t
            }) {
                return (0, p.isGenerator)(e) && (0, d.supportsLinearEasing)() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t)
            }(e);
            this.animation = (0, c.startWaapiAnimation)(t, i, s, m, n), !1 === m.autoplay && this.animation.pause(), this.animation.onfinish = () => {
                if (this.finishedTime = this.time, !n) {
                    let e = (0, a.getFinalKeyframe)(s, this.options, o, this.speed);
                    this.updateMotionValue ? this.updateMotionValue(e) : (0, h.setStyle)(t, i, e), this.animation.cancel()
                }
                u?.(), this.notifyFinished()
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
            return (0, o.millisecondsToSeconds)(Number(e))
        }
        get iterationDuration() {
            let {
                delay: e = 0
            } = this.options || {};
            return this.duration + (0, o.millisecondsToSeconds)(e)
        }
        get time() {
            return (0, o.millisecondsToSeconds)(Number(this.animation.currentTime) || 0)
        }
        set time(e) {
            this.finishedTime = null, this.animation.currentTime = (0, o.secondsToMilliseconds)(e)
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
            }), this.animation.onfinish = null, e && (0, u.supportsScrollTimeline)()) ? (this.animation.timeline = e, i.noop) : t(this)
        }
    }
    var y = e.i(733468),
        v = e.i(386183),
        g = e.i(228696),
        T = e.i(118744);
    let b = {
        anticipate: v.anticipate,
        backInOut: g.backInOut,
        circInOut: T.circInOut
    };
    class M extends f {
        constructor(e) {
            ! function(e) {
                "string" == typeof e.ease && e.ease in b && (e.ease = b[e.ease])
            }(e), (0, y.replaceTransitionType)(e), super(e), e.startTime && (this.startTime = e.startTime), this.options = e
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
            let l = new n.JSAnimation({
                    ...r,
                    autoplay: !1
                }),
                h = (0, o.secondsToMilliseconds)(this.finishedTime ?? this.time);
            t.setWithVelocity(l.sample(h - 10).value, l.sample(h).value, 10), l.stop()
        }
    }
    var S = e.i(377149);
    let w = (e, t) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (S.complex.test(e) || "0" === e) && !e.startsWith("url("));
    var k = e.i(392296),
        x = m,
        A = e.i(338212);
    let V = new Set(["opacity", "clipPath", "filter", "transform"]),
        O = (0, A.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class D extends x.WithPromise {
        constructor({
            autoplay: e = !0,
            delay: t = 0,
            type: i = "keyframes",
            repeat: n = 0,
            repeatDelay: a = 0,
            repeatType: o = "loop",
            keyframes: l,
            name: h,
            motionValue: u,
            element: m,
            ...c
        }) {
            super(), this.stop = () => {
                this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
            }, this.createdAt = s.time.now();
            const d = {
                    autoplay: e,
                    delay: t,
                    type: i,
                    repeat: n,
                    repeatDelay: a,
                    repeatType: o,
                    name: h,
                    motionValue: u,
                    element: m,
                    ...c
                },
                p = m?.KeyframeResolver || r.KeyframeResolver;
            this.keyframeResolver = new p(l, (e, t, i) => this.onKeyframesResolved(e, t, d, !i), h, u, m), this.keyframeResolver?.scheduleResolve()
        }
        onKeyframesResolved(e, r, o, h) {
            this.keyframeResolver = void 0;
            let {
                name: u,
                type: m,
                velocity: c,
                delay: d,
                isHandoff: f,
                onUpdate: y
            } = o;
            this.resolvedAt = s.time.now(), ! function(e, t, i, s) {
                let n = e[0];
                if (null === n) return !1;
                if ("display" === t || "visibility" === t) return !0;
                let a = e[e.length - 1],
                    r = w(n, t),
                    o = w(a, t);
                return (0, l.warning)(r === o, `You are trying to animate ${t} from "${n}" to "${a}". "${r?a:n}" is not an animatable value.`, "value-not-animatable"), !!r && !!o && (function(e) {
                    let t = e[0];
                    if (1 === e.length) return !0;
                    for (let i = 0; i < e.length; i++)
                        if (e[i] !== t) return !0
                }(e) || ("spring" === i || (0, p.isGenerator)(i)) && s)
            }(e, u, m, c) && ((t.MotionGlobalConfig.instantAnimations || !d) && y?.((0, a.getFinalKeyframe)(e, o, r)), e[0] = e[e.length - 1], (0, k.makeAnimationInstant)(o), o.repeat = 0);
            let v = {
                    startTime: h ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: r,
                    ...o,
                    keyframes: e
                },
                g = !f && function(e) {
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
                    return O() && i && V.has(i) && ("transform" !== i || !l) && !o && !s && "mirror" !== n && 0 !== a && "inertia" !== r
                }(v) ? new M({
                    ...v,
                    element: v.motionValue.owner.current
                }) : new n.JSAnimation(v);
            g.finished.then(() => this.notifyFinished()).catch(i.noop), this.pendingTimeline && (this.stopTimeline = g.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = g
        }
        get finished() {
            return this._animation ? this.animation.finished : this._finished
        }
        then(e, t) {
            return this.finished.finally(e).then(() => {})
        }
        get animation() {
            return this._animation || (this.keyframeResolver?.resume(), (0, r.flushKeyframeResolvers)()), this._animation
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
    e.s(["AsyncMotionValueAnimation", () => D], 341052)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0148d3d2-2e18-5241-9d00-a8008a21b371")
    } catch (e) {}
}();
//# debugId=0148d3d2-2e18-5241-9d00-a8008a21b371