(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 368244, 309674, e => {
    "use strict";
    var t = e.i(474610);
    let s = {
            current: null
        },
        r = {
            current: !1
        };
    e.s(["hasReducedMotionListener", 0, r, "prefersReducedMotion", 0, s], 309674), e.s(["initPrefersReducedMotion", 0, function() {
        if (r.current = !0, t.isBrowser)
            if (window.matchMedia) {
                let e = window.matchMedia("(prefers-reduced-motion)"),
                    t = () => s.current = e.matches;
                e.addEventListener("change", t), t()
            } else s.current = !1
    }], 368244)
}, 954912, e => {
    "use strict";
    e.s(["MotionGlobalConfig", 0, {}])
}, 175602, e => {
    "use strict";
    e.s(["noop", 0, e => e])
}, 347248, 680124, 817967, e => {
    "use strict";
    var t = e.i(175602),
        s = e.i(954912);
    let r = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
        i = {
            value: null,
            addProjectionMetrics: null
        };

    function n(e, t) {
        let n = !1,
            a = !0,
            l = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            },
            o = () => n = !0,
            c = r.reduce((e, s) => (e[s] = function(e, t) {
                let s = new Set,
                    r = new Set,
                    n = !1,
                    a = !1,
                    l = new WeakSet,
                    o = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    c = 0;

                function u(t) {
                    l.has(t) && (d.schedule(t), e()), c++, t(o)
                }
                let d = {
                    schedule: (e, t = !1, i = !1) => {
                        let a = i && n ? s : r;
                        return t && l.add(e), a.has(e) || a.add(e), e
                    },
                    cancel: e => {
                        r.delete(e), l.delete(e)
                    },
                    process: e => {
                        if (o = e, n) {
                            a = !0;
                            return
                        }
                        n = !0, [s, r] = [r, s], s.forEach(u), t && i.value && i.value.frameloop[t].push(c), c = 0, s.clear(), n = !1, a && (a = !1, d.process(e))
                    }
                };
                return d
            }(o, t ? s : void 0), e), {}),
            {
                setup: u,
                read: d,
                resolveKeyframes: p,
                preUpdate: h,
                update: f,
                preRender: m,
                render: g,
                postRender: x
            } = c,
            v = () => {
                let r = s.MotionGlobalConfig.useManualTiming ? l.timestamp : performance.now();
                n = !1, s.MotionGlobalConfig.useManualTiming || (l.delta = a ? 1e3 / 60 : Math.max(Math.min(r - l.timestamp, 40), 1)), l.timestamp = r, l.isProcessing = !0, u.process(l), d.process(l), p.process(l), h.process(l), f.process(l), m.process(l), g.process(l), x.process(l), l.isProcessing = !1, n && t && (a = !1, e(v))
            };
        return {
            schedule: r.reduce((t, s) => {
                let r = c[s];
                return t[s] = (t, s = !1, i = !1) => (!n && (n = !0, a = !0, l.isProcessing || e(v)), r.schedule(t, s, i)), t
            }, {}),
            cancel: e => {
                for (let t = 0; t < r.length; t++) c[r[t]].cancel(e)
            },
            state: l,
            steps: c
        }
    }
    e.s(["statsBuffer", 0, i], 680124), e.s(["createRenderBatcher", 0, n], 817967);
    let {
        schedule: a,
        cancel: l,
        state: o,
        steps: c
    } = n("u" > typeof requestAnimationFrame ? requestAnimationFrame : t.noop, !0);
    e.s(["cancelFrame", 0, l, "frame", 0, a, "frameData", 0, o, "frameSteps", 0, c], 347248)
}, 133639, e => {
    "use strict";
    e.s(["addUniqueItem", 0, function(e, t) {
        -1 === e.indexOf(t) && e.push(t)
    }, "removeItem", 0, function(e, t) {
        let s = e.indexOf(t);
        s > -1 && e.splice(s, 1)
    }])
}, 470180, e => {
    "use strict";
    var t = e.i(133639);
    e.s(["SubscriptionManager", 0, class {
        constructor() {
            this.subscriptions = []
        }
        add(e) {
            return (0, t.addUniqueItem)(this.subscriptions, e), () => (0, t.removeItem)(this.subscriptions, e)
        }
        notify(e, t, s) {
            let r = this.subscriptions.length;
            if (r)
                if (1 === r) this.subscriptions[0](e, t, s);
                else
                    for (let i = 0; i < r; i++) {
                        let r = this.subscriptions[i];
                        r && r(e, t, s)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    }])
}, 795153, e => {
    "use strict";
    e.s(["velocityPerSecond", 0, function(e, t) {
        return t ? 1e3 / t * e : 0
    }])
}, 924140, e => {
    "use strict";
    let t;
    var s = e.i(954912),
        r = e.i(347248);

    function i() {
        t = void 0
    }
    let n = {
        now: () => (void 0 === t && n.set(r.frameData.isProcessing || s.MotionGlobalConfig.useManualTiming ? r.frameData.timestamp : performance.now()), t),
        set: e => {
            t = e, queueMicrotask(i)
        }
    };
    e.s(["time", 0, n])
}, 134026, e => {
    "use strict";
    var t = e.i(470180),
        s = e.i(795153),
        r = e.i(924140),
        i = e.i(347248);
    let n = {
        current: void 0
    };
    class a {
        constructor(e, t = {}) {
            this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = e => {
                let t = r.time.now();
                if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
                    for (let e of this.dependents) e.dirty()
            }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner
        }
        setCurrent(e) {
            this.current = e, this.updatedAt = r.time.now(), null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
        }
        setPrevFrameValue(e = this.current) {
            this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
        }
        onChange(e) {
            return this.on("change", e)
        }
        on(e, s) {
            this.events[e] || (this.events[e] = new t.SubscriptionManager);
            let r = this.events[e].add(s);
            return "change" === e ? () => {
                r(), i.frame.read(() => {
                    this.events.change.getSize() || this.stop()
                })
            } : r
        }
        clearListeners() {
            for (let e in this.events) this.events[e].clear()
        }
        attach(e, t) {
            this.passiveEffect = e, this.stopPassiveEffect = t
        }
        set(e) {
            this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e)
        }
        setWithVelocity(e, t, s) {
            this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - s
        }
        jump(e, t = !0) {
            this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
        dirty() {
            this.events.change?.notify(this.current)
        }
        addDependent(e) {
            this.dependents || (this.dependents = new Set), this.dependents.add(e)
        }
        removeDependent(e) {
            this.dependents && this.dependents.delete(e)
        }
        get() {
            return n.current && n.current.push(this), this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            let e = r.time.now();
            if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
            let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return (0, s.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
        }
        start(e) {
            return this.stop(), new Promise(t => {
                this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
            }).then(() => {
                this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
            })
        }
        stop() {
            this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
        }
        isAnimating() {
            return !!this.animation
        }
        clearAnimation() {
            delete this.animation
        }
        destroy() {
            this.dependents?.clear(), this.events.destroy?.notify(), this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
        }
    }
    e.s(["collectMotionValues", 0, n, "motionValue", 0, function(e, t) {
        return new a(e, t)
    }])
}, 348367, e => {
    "use strict";
    e.s(["invariant", 0, () => {}, "warning", 0, () => {}])
}, 815965, 338212, e => {
    "use strict";

    function t(e) {
        let t;
        return () => (void 0 === t && (t = e()), t)
    }
    e.s(["memo", 0, t], 338212);
    let s = t(() => void 0 !== window.ScrollTimeline);
    e.s(["supportsScrollTimeline", 0, s], 815965)
}, 747113, e => {
    "use strict";
    e.s(["progress", 0, (e, t, s) => {
        let r = t - e;
        return 0 === r ? 1 : (s - e) / r
    }])
}, 640746, e => {
    "use strict";
    let t = (e, t) => s => t(e(s));
    e.s(["pipe", 0, (...e) => e.reduce(t)])
}, 377149, 801935, 267754, 201221, 192573, 168826, e => {
    "use strict";
    var t = e.i(483032),
        s = e.i(960851);
    let r = e => Math.round(1e5 * e) / 1e5,
        i = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    e.s(["floatRegex", 0, i], 801935);
    let n = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        a = (e, t) => s => !!("string" == typeof s && n.test(s) && s.startsWith(e) || t && null != s && Object.prototype.hasOwnProperty.call(s, t)),
        l = (e, t, s) => r => {
            if ("string" != typeof r) return r;
            let [n, a, l, o] = r.match(i);
            return {
                [e]: parseFloat(n),
                [t]: parseFloat(a),
                [s]: parseFloat(l),
                alpha: void 0 !== o ? parseFloat(o) : 1
            }
        },
        o = {
            ...s.number,
            transform: e => Math.round((0, t.clamp)(0, 255, e))
        },
        c = {
            test: a("rgb", "red"),
            parse: l("red", "green", "blue"),
            transform: ({
                red: e,
                green: t,
                blue: i,
                alpha: n = 1
            }) => "rgba(" + o.transform(e) + ", " + o.transform(t) + ", " + o.transform(i) + ", " + r(s.alpha.transform(n)) + ")"
        };
    e.s(["rgba", 0, c], 267754);
    let u = {
        test: a("#"),
        parse: function(e) {
            let t = "",
                s = "",
                r = "",
                i = "";
            return e.length > 5 ? (t = e.substring(1, 3), s = e.substring(3, 5), r = e.substring(5, 7), i = e.substring(7, 9)) : (t = e.substring(1, 2), s = e.substring(2, 3), r = e.substring(3, 4), i = e.substring(4, 5), t += t, s += s, r += r, i += i), {
                red: parseInt(t, 16),
                green: parseInt(s, 16),
                blue: parseInt(r, 16),
                alpha: i ? parseInt(i, 16) / 255 : 1
            }
        },
        transform: c.transform
    };
    e.s(["hex", 0, u], 201221);
    var d = e.i(21365);
    let p = {
        test: a("hsl", "hue"),
        parse: l("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: i,
            alpha: n = 1
        }) => "hsla(" + Math.round(e) + ", " + d.percent.transform(r(t)) + ", " + d.percent.transform(r(i)) + ", " + r(s.alpha.transform(n)) + ")"
    };
    e.s(["hsla", 0, p], 192573);
    let h = {
        test: e => c.test(e) || u.test(e) || p.test(e),
        parse: e => c.test(e) ? c.parse(e) : p.test(e) ? p.parse(e) : u.parse(e),
        transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? c.transform(e) : p.transform(e),
        getAnimatableNone: e => {
            let t = h.parse(e);
            return t.alpha = 0, h.transform(t)
        }
    };
    e.s(["color", 0, h], 168826);
    let f = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        m = "number",
        g = "color",
        x = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

    function v(e) {
        let t = e.toString(),
            s = [],
            r = {
                color: [],
                number: [],
                var: []
            },
            i = [],
            n = 0,
            a = t.replace(x, e => (h.test(e) ? (r.color.push(n), i.push(g), s.push(h.parse(e))) : e.startsWith("var(") ? (r.var.push(n), i.push("var"), s.push(e)) : (r.number.push(n), i.push(m), s.push(parseFloat(e))), ++n, "${}")).split("${}");
        return {
            values: s,
            split: a,
            indexes: r,
            types: i
        }
    }

    function y(e) {
        return v(e).values
    }

    function b(e) {
        let {
            split: t,
            types: s
        } = v(e), i = t.length;
        return e => {
            let n = "";
            for (let a = 0; a < i; a++)
                if (n += t[a], void 0 !== e[a]) {
                    let t = s[a];
                    t === m ? n += r(e[a]) : t === g ? n += h.transform(e[a]) : n += e[a]
                } return n
        }
    }
    let w = e => "number" == typeof e ? 0 : h.test(e) ? h.getAnimatableNone(e) : e;
    e.s(["analyseComplexValue", 0, v, "complex", 0, {
        test: function(e) {
            return isNaN(e) && "string" == typeof e && (e.match(i)?.length || 0) + (e.match(f)?.length || 0) > 0
        },
        parse: y,
        createTransformer: b,
        getAnimatableNone: function(e) {
            let t = y(e);
            return b(e)(t.map(w))
        }
    }], 377149)
}, 472656, 826738, e => {
    "use strict";

    function t(e, t, s) {
        return (s < 0 && (s += 1), s > 1 && (s -= 1), s < 1 / 6) ? e + (t - e) * 6 * s : s < .5 ? t : s < 2 / 3 ? e + (t - e) * (2 / 3 - s) * 6 : e
    }
    e.s(["hslaToRgba", 0, function({
        hue: e,
        saturation: s,
        lightness: r,
        alpha: i
    }) {
        e /= 360, r /= 100;
        let n = 0,
            a = 0,
            l = 0;
        if (s /= 100) {
            let i = r < .5 ? r * (1 + s) : r + s - r * s,
                o = 2 * r - i;
            n = t(o, i, e + 1 / 3), a = t(o, i, e), l = t(o, i, e - 1 / 3)
        } else n = a = l = r;
        return {
            red: Math.round(255 * n),
            green: Math.round(255 * a),
            blue: Math.round(255 * l),
            alpha: i
        }
    }], 472656), e.s(["mixImmediate", 0, function(e, t) {
        return s => s > 0 ? t : e
    }], 826738)
}, 647480, e => {
    "use strict";
    e.s(["mixNumber", 0, (e, t, s) => e + (t - e) * s])
}, 405082, e => {
    "use strict";
    var t = e.i(640746),
        s = e.i(348367),
        r = e.i(242210),
        i = e.i(168826),
        n = e.i(377149),
        a = e.i(201221),
        l = e.i(192573),
        o = e.i(472656),
        c = e.i(267754),
        u = e.i(826738),
        d = e.i(647480);
    let p = (e, t, s) => {
            let r = e * e,
                i = s * (t * t - r) + r;
            return i < 0 ? 0 : Math.sqrt(i)
        },
        h = [a.hex, c.rgba, l.hsla];

    function f(e) {
        let t = h.find(t => t.test(e));
        if ((0, s.warning)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
        let r = t.parse(e);
        return t === l.hsla && (r = (0, o.hslaToRgba)(r)), r
    }
    let m = (e, t) => {
            let s = f(e),
                r = f(t);
            if (!s || !r) return (0, u.mixImmediate)(e, t);
            let i = {
                ...s
            };
            return e => (i.red = p(s.red, r.red, e), i.green = p(s.green, r.green, e), i.blue = p(s.blue, r.blue, e), i.alpha = (0, d.mixNumber)(s.alpha, r.alpha, e), c.rgba.transform(i))
        },
        g = new Set(["none", "hidden"]);

    function x(e, t) {
        return s => (0, d.mixNumber)(e, t, s)
    }

    function v(e) {
        return "number" == typeof e ? x : "string" == typeof e ? (0, r.isCSSVariableToken)(e) ? u.mixImmediate : i.color.test(e) ? m : w : Array.isArray(e) ? y : "object" == typeof e ? i.color.test(e) ? m : b : u.mixImmediate
    }

    function y(e, t) {
        let s = [...e],
            r = s.length,
            i = e.map((e, s) => v(e)(e, t[s]));
        return e => {
            for (let t = 0; t < r; t++) s[t] = i[t](e);
            return s
        }
    }

    function b(e, t) {
        let s = {
                ...e,
                ...t
            },
            r = {};
        for (let i in s) void 0 !== e[i] && void 0 !== t[i] && (r[i] = v(e[i])(e[i], t[i]));
        return e => {
            for (let t in r) s[t] = r[t](e);
            return s
        }
    }
    let w = (e, r) => {
        let i = n.complex.createTransformer(r),
            a = (0, n.analyseComplexValue)(e),
            l = (0, n.analyseComplexValue)(r);
        if (!(a.indexes.var.length === l.indexes.var.length && a.indexes.color.length === l.indexes.color.length && a.indexes.number.length >= l.indexes.number.length)) return (0, s.warning)(!0, `Complex values '${e}' and '${r}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), (0, u.mixImmediate)(e, r);
        if (g.has(e) && !l.values.length || g.has(r) && !a.values.length) return g.has(e) ? t => t <= 0 ? e : r : t => t >= 1 ? r : e;
        return (0, t.pipe)(y(function(e, t) {
            let s = [],
                r = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let i = 0; i < t.values.length; i++) {
                let n = t.types[i],
                    a = e.indexes[n][r[n]],
                    l = e.values[a] ?? 0;
                s[i] = l, r[n]++
            }
            return s
        }(a, l), l.values), i)
    };
    e.s(["mix", 0, function(e, t, s) {
        return "number" == typeof e && "number" == typeof t && "number" == typeof s ? (0, d.mixNumber)(e, t, s) : v(e)(e, t)
    }], 405082)
}, 279126, e => {
    "use strict";
    var t = e.i(348367),
        s = e.i(483032),
        r = e.i(954912),
        i = e.i(175602),
        n = e.i(640746),
        a = e.i(747113),
        l = e.i(405082);
    e.s(["interpolate", 0, function(e, o, {
        clamp: c = !0,
        ease: u,
        mixer: d
    } = {}) {
        let p = e.length;
        if ((0, t.invariant)(p === o.length, "Both input and output ranges must be the same length", "range-length"), 1 === p) return () => o[0];
        if (2 === p && o[0] === o[1]) return () => o[1];
        let h = e[0] === e[1];
        e[0] > e[p - 1] && (e = [...e].reverse(), o = [...o].reverse());
        let f = function(e, t, s) {
                let a = [],
                    o = s || r.MotionGlobalConfig.mix || l.mix,
                    c = e.length - 1;
                for (let s = 0; s < c; s++) {
                    let r = o(e[s], e[s + 1]);
                    if (t) {
                        let e = Array.isArray(t) ? t[s] || i.noop : t;
                        r = (0, n.pipe)(e, r)
                    }
                    a.push(r)
                }
                return a
            }(o, u, d),
            m = f.length,
            g = t => {
                if (h && t < e[0]) return o[0];
                let s = 0;
                if (m > 1)
                    for (; s < e.length - 2 && !(t < e[s + 1]); s++);
                let r = (0, a.progress)(e[s], e[s + 1], t);
                return f[s](r)
            };
        return c ? t => g((0, s.clamp)(e[0], e[p - 1], t)) : g
    }])
}, 668617, 91649, e => {
    "use strict";
    var t = e.i(747113),
        s = e.i(647480);

    function r(e, r) {
        let i = e[e.length - 1];
        for (let n = 1; n <= r; n++) {
            let a = (0, t.progress)(0, r, n);
            e.push((0, s.mixNumber)(i, 1, a))
        }
    }
    e.s(["fillOffset", 0, r], 91649), e.s(["defaultOffset", 0, function(e) {
        let t = [0];
        return r(t, e.length - 1), t
    }], 668617)
}, 361979, e => {
    "use strict";
    var t = e.i(264250);
    e.s(["isSVGElement", 0, function(e) {
        return (0, t.isObject)(e) && "ownerSVGElement" in e
    }])
}, 72607, e => {
    "use strict";
    var t = e.i(245503),
        s = e.i(53645),
        r = e.i(133862),
        i = e.i(566993),
        n = e.i(780584),
        a = e.i(871726);
    let l = {
            ...r.animations,
            ...n.gestureAnimations,
            ...i.drag,
            ...a.layout
        },
        o = (0, s.createMotionProxy)(l, t.createDomVisualElement);
    e.s(["motion", 0, o], 72607)
}, 14452, e => {
    "use strict";
    var t = e.i(500783),
        s = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        className: r = "",
        tag: i = "div"
    }) => {
        let n = (0, s.default)("loco-text-heading-sm mb-4", r);
        return (0, t.jsx)(i, {
            className: n,
            children: e
        })
    }], 14452)
}, 447452, 667900, 2062, e => {
    "use strict";
    var t = e.i(500783),
        s = e.i(3931),
        r = e.i(722978),
        i = e.i(655105),
        n = e.i(825610),
        a = e.i(387660);
    let l = ({
        children: e,
        tag: s = "div",
        className: i = ""
    }) => {
        let n = (0, r.default)("loco-caption-lg-semibold mb-4", i);
        return (0, t.jsx)(s, {
            className: n,
            children: e
        })
    };
    e.s(["default", 0, l], 667900);
    var o = e.i(749583);
    let c = ({
        children: e,
        className: s = "",
        orientation: i = "horizontal"
    }) => {
        let n = (0, r.default)("flex gap-2 flex-wrap", {
            "flex-col items-start": "vertical" === i
        }, s);
        return (0, t.jsx)("div", {
            className: n,
            children: e
        })
    };
    e.s(["default", 0, c], 2062);
    var u = e.i(14452),
        d = e.i(805518),
        p = e.i(72607);
    let h = ({
        features: e,
        transitionTime: r = 8500
    }) => {
        let [i, n] = (0, s.useState)(0), a = (0, s.useRef)(null), l = (0, s.useRef)(null), [c, u] = (0, s.useState)(!1), [d, h] = (0, s.useState)(!1), f = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
            e.forEach(e => {
                e.icon && (new window.Image().src = e.icon, new window.Image().src = e.icon)
            })
        }, [e]), (0, s.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                u(e.intersectionRatio >= .8)
            }, {
                threshold: [0, .8, 1]
            });
            return l.current && e.observe(l.current), () => e.disconnect()
        }, []), (0, s.useEffect)(() => (a.current && clearTimeout(a.current), c && !d && (a.current = setTimeout(() => {
            n(t => (t + 1) % e.length)
        }, r)), () => {
            a.current && clearTimeout(a.current)
        }), [i, e.length, r, c, d]);
        let m = (0, s.useCallback)(t => {
                let s = t === i;
                n(t), h(!0);
                let a = e[t];
                a?.onCardClick && setTimeout(() => {
                    a.onCardClick?.(s)
                }, 0), f.current && clearTimeout(f.current), f.current = setTimeout(() => {
                    h(!1)
                }, r)
            }, [i, e, r]),
            g = (0, s.useCallback)((e, t) => {
                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), m(t))
            }, [m]);
        return (0, s.useEffect)(() => () => {
            f.current && clearTimeout(f.current)
        }, []), (0, t.jsx)("div", {
            ref: l,
            className: "relative inline-flex w-full flex-col items-start justify-start gap-2 self-stretch px-5 pb-6 md:px-5 md:pb-6 lg:px-0 lg:pb-0 xl:px-20",
            children: e.map((e, s) => {
                let r = s === i;
                return (0, t.jsxs)("div", {
                    "data-mobile": "true",
                    "data-show-image": r ? "true" : "false",
                    "data-state": r ? "selected" : "inactive",
                    role: "button",
                    tabIndex: 0,
                    className: `cursor-pointer self-stretch overflow-hidden rounded-lg bg-white ${r?`${e.icon?"lg:pl-36":"lg:pl-10"} p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_2px_12px_3px_rgba(0,0,0,0.04)] lg:py-8 lg:pr-10`:"p-6 lg:px-10 lg:py-6"} flex lg:inline-flex lg:items-start ${r?"flex-col":"items-center"} relative justify-start gap-2 transition-all duration-500 ease-out`,
                    onClick: () => m(s),
                    onKeyDown: e => g(e, s),
                    children: [e.icon && r && (0, t.jsx)(p.motion.div, {
                        initial: {
                            opacity: 0,
                            scale: .8
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            type: "spring",
                            duration: .2,
                            bounce: .1,
                            delay: 0
                        },
                        className: "inline-flex h-14 w-14 items-center justify-start gap-2.5 lg:hidden",
                        children: (0, t.jsx)("div", {
                            className: "flex flex-1 items-center justify-center gap-2.5 self-stretch",
                            children: (0, t.jsx)("img", {
                                className: "flex-1 self-stretch",
                                src: e.icon || "https://placehold.co/57x57",
                                alt: e.title || "Feature icon",
                                width: 57,
                                height: 57,
                                loading: "eager",
                                style: {
                                    objectFit: "cover",
                                    imageRendering: "auto"
                                }
                            })
                        })
                    }), e.icon && r && (0, t.jsx)(p.motion.div, {
                        initial: {
                            opacity: 0,
                            x: -10
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            type: "spring",
                            duration: .5,
                            bounce: .1,
                            delay: .1
                        },
                        className: "pointer-events-none absolute inset-y-0 left-[-38px] hidden lg:flex",
                        children: (0, t.jsx)("div", {
                            className: "flex h-full items-center justify-start py-8",
                            children: (0, t.jsx)("img", {
                                className: "max-h-full w-auto object-contain",
                                src: e.icon || "",
                                alt: e.title || "Feature icon",
                                loading: "eager",
                                style: {
                                    imageRendering: "auto"
                                }
                            })
                        })
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col items-start justify-start gap-[9px] self-stretch lg:inline-flex lg:max-w-[304px] lg:flex-1 lg:flex-col",
                        children: [r && (0, t.jsx)(p.motion.div, {
                            initial: {
                                opacity: 0,
                                y: -.5
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                type: "spring",
                                duration: .3,
                                bounce: .1
                            },
                            className: "inline-flex w-64 items-center justify-center",
                            children: (0, t.jsx)("div", {
                                className: "flex-1 justify-center text-[10px] leading-[16px] font-medium tracking-[1px] text-gray-700 uppercase md:text-[12px] md:leading-[21px] md:tracking-[1.2px]",
                                children: e.eyebrow || ""
                            })
                        }), (0, t.jsx)("div", {
                            className: "inline-flex items-center justify-center self-stretch",
                            children: (0, t.jsx)(p.motion.div, {
                                animate: {
                                    color: r ? "#000000" : "#374151"
                                },
                                transition: {
                                    type: "spring",
                                    duration: .3,
                                    bounce: .1
                                },
                                className: "flex-1 justify-center text-base leading-tight font-medium md:text-[20px] md:leading-[24px]",
                                children: e.title || "Untitled"
                            })
                        }), r && (0, t.jsx)(p.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 1
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                type: "spring",
                                duration: .3,
                                bounce: .1
                            },
                            className: "justify-start self-stretch text-xs font-normal text-gray-700 md:text-[14px] md:leading-[21px]",
                            children: e.description || ""
                        }), r && (0, t.jsx)(p.motion.div, {
                            initial: {
                                opacity: 0,
                                y: 1
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            transition: {
                                type: "spring",
                                duration: .3,
                                bounce: .1
                            },
                            className: "flex flex-col items-start justify-start self-stretch pt-3",
                            children: (0, t.jsx)(o.default, {
                                href: e.action?.href || "#",
                                target: e.action?.target,
                                variant: "primary",
                                size: "small",
                                rounded: !0,
                                hasArrow: !0,
                                children: e.action?.label || "Learn More"
                            })
                        })]
                    })]
                }, s)
            })
        })
    };
    var f = e.i(783078),
        m = e.i(430215),
        g = e.i(224601),
        x = e.i(153348),
        v = e.i(955429),
        y = e.i(828083),
        b = e.i(186114);
    let w = (0, y.default)(() => e.A(410979), {
        loadableGenerated: {
            modules: [942019]
        },
        ssr: !1
    });
    e.s(["default", 0, ({
        actions: e = [],
        aspectRatio: p,
        backgroundImage: y = !1,
        description: j,
        eyebrow: N,
        image: k,
        mediaPosition: A = "right",
        size: M = "default",
        title: P,
        youtubeVideo: C,
        brandfolderVideo: S,
        videoInline: V = !1,
        buttonLabel: T = "Play Video",
        blockKey: E,
        blockedMessage: F,
        consentButtonLabel: R,
        featureList: I,
        variant: L = "default"
    }) => {
        let $ = (0, m.default)(`(max-width: ${f.default.Large}px)`),
            B = (0, s.useRef)(null),
            [O, U] = (0, s.useState)(!1),
            D = (0, x.useInView)(B, {
                once: !0
            }),
            _ = (0, v.useReducedMotion)(),
            q = (0, s.useRef)({
                total: 0,
                progress: 0
            }),
            z = I && I.length > 0,
            G = !z && C?.url;
        (0, s.useEffect)(() => {
            V || U(!1)
        }, [D]);
        let W = () => {
                U(!0)
            },
            K = (0, r.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": O && !_ && D && S?.src
            }),
            H = (0, r.default)("relative", {
                "py-10 lg:py-24": "gdc2026" === L,
                "lg:py-14": z,
                "lg:py-24": !z && "default" === M && (!p || "16:9" === p) && "gdc2026" !== L,
                "lg:py-80": !z && "large" === M && (!p || "16:9" === p),
                "lg:py-40": !z && "large" === M && "1:1" === p,
                "dark bg-gray-900 overflow-hidden": y,
                "bg-gray-100 dark:bg-black": !y && z,
                "bg-white dark:bg-black": !y && !z
            }),
            J = (0, r.default)("grid grid-flow-row grid-cols-12 place-items-center gap-4", {
                "p-4": "gdc2026" === L,
                "lg:grid-flow-col": !0,
                "lg:container": !p || "16:9" === p
            }),
            Q = (0, r.default)("font-nohemi! text-gray-900 dark:text-gray-100 whitespace-pre-line", {
                "loco-text-heading-md!": "gdc2026" === L
            }),
            X = (0, r.default)("relative w-full rounded-lg", {
                "aspect-square": "1:1" === p,
                "aspect-video": "16:9" === p,
                "overflow-hidden": !C?.url
            }),
            Y = (0, r.default)("relative col-span-12 flex h-full flex-col w-full items-center lg:items-start", {
                "lg:col-span-8": "gdc2026" === L,
                "lg:col-span-6": "gdc2026" !== L,
                "lg:col-start-1": "left" === A,
                "lg:col-start-5": "right" === A && "gdc2026" === L,
                "lg:col-start-7": "right" === A && "gdc2026" !== L,
                "order-first": !z || !$,
                "order-last": z && $
            }),
            Z = (0, r.default)("relative col-span-12 px-5 text-center lg:pb-0 lg:text-left", {
                "lg:col-span-4": "gdc2026" === L,
                "lg:col-span-5": "gdc2026" !== L,
                "pb-6": !(z && $),
                "py-6": z && $,
                "lg:col-start-9": "left" === A && "gdc2026" === L,
                "lg:col-start-8": "left" === A && "gdc2026" !== L && (!p || "16:9" === p),
                "lg:col-start-1": "right" === A && (!p || "16:9" === p),
                "lg:col-start-2": "right" === A && "1:1" === p,
                "order-first": z && $
            }),
            ee = e => {
                let t = q.current.progress / q.current.total * 100 || 0;
                (0, a.pushVideoEvent)({
                    name: e,
                    videoDuration: q.current.total,
                    videoProgress: Number(t)
                })
            };
        return (0, t.jsxs)("section", {
            className: H,
            children: [y && (0, t.jsx)(i.default, {
                src: k.src,
                alt: k.alt,
                fill: !0,
                className: "blur-2xl brightness-[0.2]"
            }), (0, t.jsxs)("div", {
                className: J,
                ref: B,
                children: [z ? (0, t.jsx)("div", {
                    className: Y,
                    children: (0, t.jsx)(h, {
                        features: I
                    })
                }) : G ? (0, t.jsx)("div", {
                    className: Y,
                    children: (0, t.jsx)("div", {
                        className: X,
                        children: (0, t.jsx)(g.default, {
                            url: C?.url || "",
                            title: C?.title ?? "",
                            blockedMessage: F,
                            consentButtonLabel: R
                        })
                    })
                }) : (0, t.jsxs)("div", {
                    className: Y,
                    children: [(0, t.jsxs)("div", {
                        className: X,
                        children: [D && !_ && S?.src && (0, t.jsx)(w, {
                            url: S.src,
                            playing: O,
                            loop: !!V,
                            muted: V,
                            playsinline: V,
                            width: "100%",
                            height: "100%",
                            onDuration: e => q.current.total = e,
                            onProgress: e => {
                                q.current.progress = 10 * e.played
                            },
                            className: "absolute top-0 left-0 [&>video]:object-cover",
                            onReady: () => {
                                V && U(!0)
                            },
                            controls: !V,
                            onPlay: () => ee("video_play"),
                            onPause: () => ee("video_pause"),
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        }), k.src && (0, t.jsxs)("div", {
                            className: K,
                            onClick: W,
                            children: [S?.src && !V && (0, t.jsx)(b.default, {
                                handleIsPlaying: W,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: T,
                                "data-link-location": E || n.trackingLocation.fullWidthBlockAction,
                                "data-link-id": `${E||n.trackingLocation.fullWidthBlockAction}-video-play`
                            }), (0, t.jsx)(i.default, {
                                src: k.src,
                                alt: k.alt,
                                placeholder: "blur",
                                blurDataURL: k.placeholder,
                                fill: !0
                            })]
                        })]
                    }), k.caption && (0, t.jsx)("div", {
                        className: "loco-text-body-sm-medium z-10 mt-3 mb-6 text-gray-600 lg:mb-3",
                        children: k.caption
                    })]
                }), (0, t.jsxs)("div", {
                    className: Z,
                    children: [N && (0, t.jsx)(l, {
                        className: "text-gray-900 dark:text-gray-100",
                        children: N
                    }), (0, t.jsx)(u.default, {
                        tag: "h2",
                        className: Q,
                        children: P
                    }), (0, t.jsx)(d.default, {
                        className: "mb-10 text-gray-900 dark:text-gray-100",
                        children: j
                    }), (0, t.jsx)(c, {
                        className: "justify-center lg:justify-normal",
                        children: e.length > 0 && e.map((e, s) => (0, t.jsx)(o.default, {
                            variant: 0 === s ? "primary" : "secondary",
                            outlined: 0 === s,
                            size: $ ? "small" : "medium",
                            rounded: !0,
                            hasArrow: !0,
                            href: e.href,
                            target: e.target,
                            "data-link-location": E ?? n.trackingLocation.fullWidthBlockAction,
                            "data-link-id": `${E??n.trackingLocation.fullWidthBlockAction}-action-${s}`,
                            children: e.label
                        }, `full-width-block-action-${s}`))
                    })]
                })]
            })]
        })
    }], 447452)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d9861ff5-3690-5f46-9e58-2232943a905d")
    } catch (e) {}
}();
//# debugId=d9861ff5-3690-5f46-9e58-2232943a905d