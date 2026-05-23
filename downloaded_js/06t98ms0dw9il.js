(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 368244, 309674, e => {
    "use strict";
    var t = e.i(474610);
    let n = {
            current: null
        },
        i = {
            current: !1
        };
    e.s(["hasReducedMotionListener", 0, i, "prefersReducedMotion", 0, n], 309674), e.s(["initPrefersReducedMotion", 0, function() {
        if (i.current = !0, t.isBrowser)
            if (window.matchMedia) {
                let e = window.matchMedia("(prefers-reduced-motion)"),
                    t = () => n.current = e.matches;
                e.addEventListener("change", t), t()
            } else n.current = !1
    }], 368244)
}, 955429, e => {
    "use strict";
    var t = e.i(3931),
        n = e.i(368244),
        i = e.i(309674);
    e.s(["useReducedMotion", 0, function() {
        i.hasReducedMotionListener.current || (0, n.initPrefersReducedMotion)();
        let [e] = (0, t.useState)(i.prefersReducedMotion.current);
        return e
    }])
}, 954912, e => {
    "use strict";
    e.s(["MotionGlobalConfig", 0, {}])
}, 175602, e => {
    "use strict";
    e.s(["noop", 0, e => e])
}, 347248, 680124, 817967, e => {
    "use strict";
    var t = e.i(175602),
        n = e.i(954912);
    let i = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
        r = {
            value: null,
            addProjectionMetrics: null
        };

    function s(e, t) {
        let s = !1,
            a = !0,
            o = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            },
            l = () => s = !0,
            u = i.reduce((e, n) => (e[n] = function(e, t) {
                let n = new Set,
                    i = new Set,
                    s = !1,
                    a = !1,
                    o = new WeakSet,
                    l = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    u = 0;

                function c(t) {
                    o.has(t) && (d.schedule(t), e()), u++, t(l)
                }
                let d = {
                    schedule: (e, t = !1, r = !1) => {
                        let a = r && s ? n : i;
                        return t && o.add(e), a.has(e) || a.add(e), e
                    },
                    cancel: e => {
                        i.delete(e), o.delete(e)
                    },
                    process: e => {
                        if (l = e, s) {
                            a = !0;
                            return
                        }
                        s = !0, [n, i] = [i, n], n.forEach(c), t && r.value && r.value.frameloop[t].push(u), u = 0, n.clear(), s = !1, a && (a = !1, d.process(e))
                    }
                };
                return d
            }(l, t ? n : void 0), e), {}),
            {
                setup: c,
                read: d,
                resolveKeyframes: h,
                preUpdate: p,
                update: m,
                preRender: f,
                render: v,
                postRender: g
            } = u,
            b = () => {
                let i = n.MotionGlobalConfig.useManualTiming ? o.timestamp : performance.now();
                s = !1, n.MotionGlobalConfig.useManualTiming || (o.delta = a ? 1e3 / 60 : Math.max(Math.min(i - o.timestamp, 40), 1)), o.timestamp = i, o.isProcessing = !0, c.process(o), d.process(o), h.process(o), p.process(o), m.process(o), f.process(o), v.process(o), g.process(o), o.isProcessing = !1, s && t && (a = !1, e(b))
            };
        return {
            schedule: i.reduce((t, n) => {
                let i = u[n];
                return t[n] = (t, n = !1, r = !1) => (!s && (s = !0, a = !0, o.isProcessing || e(b)), i.schedule(t, n, r)), t
            }, {}),
            cancel: e => {
                for (let t = 0; t < i.length; t++) u[i[t]].cancel(e)
            },
            state: o,
            steps: u
        }
    }
    e.s(["statsBuffer", 0, r], 680124), e.s(["createRenderBatcher", 0, s], 817967);
    let {
        schedule: a,
        cancel: o,
        state: l,
        steps: u
    } = s("u" > typeof requestAnimationFrame ? requestAnimationFrame : t.noop, !0);
    e.s(["cancelFrame", 0, o, "frame", 0, a, "frameData", 0, l, "frameSteps", 0, u], 347248)
}, 133639, e => {
    "use strict";
    e.s(["addUniqueItem", 0, function(e, t) {
        -1 === e.indexOf(t) && e.push(t)
    }, "removeItem", 0, function(e, t) {
        let n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
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
        notify(e, t, n) {
            let i = this.subscriptions.length;
            if (i)
                if (1 === i) this.subscriptions[0](e, t, n);
                else
                    for (let r = 0; r < i; r++) {
                        let i = this.subscriptions[r];
                        i && i(e, t, n)
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
    var n = e.i(954912),
        i = e.i(347248);

    function r() {
        t = void 0
    }
    let s = {
        now: () => (void 0 === t && s.set(i.frameData.isProcessing || n.MotionGlobalConfig.useManualTiming ? i.frameData.timestamp : performance.now()), t),
        set: e => {
            t = e, queueMicrotask(r)
        }
    };
    e.s(["time", 0, s])
}, 134026, e => {
    "use strict";
    var t = e.i(470180),
        n = e.i(795153),
        i = e.i(924140),
        r = e.i(347248);
    let s = {
        current: void 0
    };
    class a {
        constructor(e, t = {}) {
            this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = e => {
                let t = i.time.now();
                if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
                    for (let e of this.dependents) e.dirty()
            }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner
        }
        setCurrent(e) {
            this.current = e, this.updatedAt = i.time.now(), null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
        }
        setPrevFrameValue(e = this.current) {
            this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
        }
        onChange(e) {
            return this.on("change", e)
        }
        on(e, n) {
            this.events[e] || (this.events[e] = new t.SubscriptionManager);
            let i = this.events[e].add(n);
            return "change" === e ? () => {
                i(), r.frame.read(() => {
                    this.events.change.getSize() || this.stop()
                })
            } : i
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
        setWithVelocity(e, t, n) {
            this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n
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
            return s.current && s.current.push(this), this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            let e = i.time.now();
            if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
            let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return (0, n.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
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
    e.s(["collectMotionValues", 0, s, "motionValue", 0, function(e, t) {
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
    let n = t(() => void 0 !== window.ScrollTimeline);
    e.s(["supportsScrollTimeline", 0, n], 815965)
}, 747113, e => {
    "use strict";
    e.s(["progress", 0, (e, t, n) => {
        let i = t - e;
        return 0 === i ? 1 : (n - e) / i
    }])
}, 640746, e => {
    "use strict";
    let t = (e, t) => n => t(e(n));
    e.s(["pipe", 0, (...e) => e.reduce(t)])
}, 377149, 801935, 267754, 201221, 192573, 168826, e => {
    "use strict";
    var t = e.i(483032),
        n = e.i(960851);
    let i = e => Math.round(1e5 * e) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    e.s(["floatRegex", 0, r], 801935);
    let s = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        a = (e, t) => n => !!("string" == typeof n && s.test(n) && n.startsWith(e) || t && null != n && Object.prototype.hasOwnProperty.call(n, t)),
        o = (e, t, n) => i => {
            if ("string" != typeof i) return i;
            let [s, a, o, l] = i.match(r);
            return {
                [e]: parseFloat(s),
                [t]: parseFloat(a),
                [n]: parseFloat(o),
                alpha: void 0 !== l ? parseFloat(l) : 1
            }
        },
        l = {
            ...n.number,
            transform: e => Math.round((0, t.clamp)(0, 255, e))
        },
        u = {
            test: a("rgb", "red"),
            parse: o("red", "green", "blue"),
            transform: ({
                red: e,
                green: t,
                blue: r,
                alpha: s = 1
            }) => "rgba(" + l.transform(e) + ", " + l.transform(t) + ", " + l.transform(r) + ", " + i(n.alpha.transform(s)) + ")"
        };
    e.s(["rgba", 0, u], 267754);
    let c = {
        test: a("#"),
        parse: function(e) {
            let t = "",
                n = "",
                i = "",
                r = "";
            return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), i = e.substring(5, 7), r = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), i = e.substring(3, 4), r = e.substring(4, 5), t += t, n += n, i += i, r += r), {
                red: parseInt(t, 16),
                green: parseInt(n, 16),
                blue: parseInt(i, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1
            }
        },
        transform: u.transform
    };
    e.s(["hex", 0, c], 201221);
    var d = e.i(21365);
    let h = {
        test: a("hsl", "hue"),
        parse: o("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: r,
            alpha: s = 1
        }) => "hsla(" + Math.round(e) + ", " + d.percent.transform(i(t)) + ", " + d.percent.transform(i(r)) + ", " + i(n.alpha.transform(s)) + ")"
    };
    e.s(["hsla", 0, h], 192573);
    let p = {
        test: e => u.test(e) || c.test(e) || h.test(e),
        parse: e => u.test(e) ? u.parse(e) : h.test(e) ? h.parse(e) : c.parse(e),
        transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? u.transform(e) : h.transform(e),
        getAnimatableNone: e => {
            let t = p.parse(e);
            return t.alpha = 0, p.transform(t)
        }
    };
    e.s(["color", 0, p], 168826);
    let m = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        f = "number",
        v = "color",
        g = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

    function b(e) {
        let t = e.toString(),
            n = [],
            i = {
                color: [],
                number: [],
                var: []
            },
            r = [],
            s = 0,
            a = t.replace(g, e => (p.test(e) ? (i.color.push(s), r.push(v), n.push(p.parse(e))) : e.startsWith("var(") ? (i.var.push(s), r.push("var"), n.push(e)) : (i.number.push(s), r.push(f), n.push(parseFloat(e))), ++s, "${}")).split("${}");
        return {
            values: n,
            split: a,
            indexes: i,
            types: r
        }
    }

    function y(e) {
        return b(e).values
    }

    function A(e) {
        let {
            split: t,
            types: n
        } = b(e), r = t.length;
        return e => {
            let s = "";
            for (let a = 0; a < r; a++)
                if (s += t[a], void 0 !== e[a]) {
                    let t = n[a];
                    t === f ? s += i(e[a]) : t === v ? s += p.transform(e[a]) : s += e[a]
                } return s
        }
    }
    let w = e => "number" == typeof e ? 0 : p.test(e) ? p.getAnimatableNone(e) : e;
    e.s(["analyseComplexValue", 0, b, "complex", 0, {
        test: function(e) {
            return isNaN(e) && "string" == typeof e && (e.match(r)?.length || 0) + (e.match(m)?.length || 0) > 0
        },
        parse: y,
        createTransformer: A,
        getAnimatableNone: function(e) {
            let t = y(e);
            return A(e)(t.map(w))
        }
    }], 377149)
}, 472656, 826738, e => {
    "use strict";

    function t(e, t, n) {
        return (n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6) ? e + (t - e) * 6 * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
    }
    e.s(["hslaToRgba", 0, function({
        hue: e,
        saturation: n,
        lightness: i,
        alpha: r
    }) {
        e /= 360, i /= 100;
        let s = 0,
            a = 0,
            o = 0;
        if (n /= 100) {
            let r = i < .5 ? i * (1 + n) : i + n - i * n,
                l = 2 * i - r;
            s = t(l, r, e + 1 / 3), a = t(l, r, e), o = t(l, r, e - 1 / 3)
        } else s = a = o = i;
        return {
            red: Math.round(255 * s),
            green: Math.round(255 * a),
            blue: Math.round(255 * o),
            alpha: r
        }
    }], 472656), e.s(["mixImmediate", 0, function(e, t) {
        return n => n > 0 ? t : e
    }], 826738)
}, 647480, e => {
    "use strict";
    e.s(["mixNumber", 0, (e, t, n) => e + (t - e) * n])
}, 405082, e => {
    "use strict";
    var t = e.i(640746),
        n = e.i(348367),
        i = e.i(242210),
        r = e.i(168826),
        s = e.i(377149),
        a = e.i(201221),
        o = e.i(192573),
        l = e.i(472656),
        u = e.i(267754),
        c = e.i(826738),
        d = e.i(647480);
    let h = (e, t, n) => {
            let i = e * e,
                r = n * (t * t - i) + i;
            return r < 0 ? 0 : Math.sqrt(r)
        },
        p = [a.hex, u.rgba, o.hsla];

    function m(e) {
        let t = p.find(t => t.test(e));
        if ((0, n.warning)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
        let i = t.parse(e);
        return t === o.hsla && (i = (0, l.hslaToRgba)(i)), i
    }
    let f = (e, t) => {
            let n = m(e),
                i = m(t);
            if (!n || !i) return (0, c.mixImmediate)(e, t);
            let r = {
                ...n
            };
            return e => (r.red = h(n.red, i.red, e), r.green = h(n.green, i.green, e), r.blue = h(n.blue, i.blue, e), r.alpha = (0, d.mixNumber)(n.alpha, i.alpha, e), u.rgba.transform(r))
        },
        v = new Set(["none", "hidden"]);

    function g(e, t) {
        return n => (0, d.mixNumber)(e, t, n)
    }

    function b(e) {
        return "number" == typeof e ? g : "string" == typeof e ? (0, i.isCSSVariableToken)(e) ? c.mixImmediate : r.color.test(e) ? f : w : Array.isArray(e) ? y : "object" == typeof e ? r.color.test(e) ? f : A : c.mixImmediate
    }

    function y(e, t) {
        let n = [...e],
            i = n.length,
            r = e.map((e, n) => b(e)(e, t[n]));
        return e => {
            for (let t = 0; t < i; t++) n[t] = r[t](e);
            return n
        }
    }

    function A(e, t) {
        let n = {
                ...e,
                ...t
            },
            i = {};
        for (let r in n) void 0 !== e[r] && void 0 !== t[r] && (i[r] = b(e[r])(e[r], t[r]));
        return e => {
            for (let t in i) n[t] = i[t](e);
            return n
        }
    }
    let w = (e, i) => {
        let r = s.complex.createTransformer(i),
            a = (0, s.analyseComplexValue)(e),
            o = (0, s.analyseComplexValue)(i);
        if (!(a.indexes.var.length === o.indexes.var.length && a.indexes.color.length === o.indexes.color.length && a.indexes.number.length >= o.indexes.number.length)) return (0, n.warning)(!0, `Complex values '${e}' and '${i}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), (0, c.mixImmediate)(e, i);
        if (v.has(e) && !o.values.length || v.has(i) && !a.values.length) return v.has(e) ? t => t <= 0 ? e : i : t => t >= 1 ? i : e;
        return (0, t.pipe)(y(function(e, t) {
            let n = [],
                i = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let r = 0; r < t.values.length; r++) {
                let s = t.types[r],
                    a = e.indexes[s][i[s]],
                    o = e.values[a] ?? 0;
                n[r] = o, i[s]++
            }
            return n
        }(a, o), o.values), r)
    };
    e.s(["mix", 0, function(e, t, n) {
        return "number" == typeof e && "number" == typeof t && "number" == typeof n ? (0, d.mixNumber)(e, t, n) : b(e)(e, t)
    }], 405082)
}, 279126, e => {
    "use strict";
    var t = e.i(348367),
        n = e.i(483032),
        i = e.i(954912),
        r = e.i(175602),
        s = e.i(640746),
        a = e.i(747113),
        o = e.i(405082);
    e.s(["interpolate", 0, function(e, l, {
        clamp: u = !0,
        ease: c,
        mixer: d
    } = {}) {
        let h = e.length;
        if ((0, t.invariant)(h === l.length, "Both input and output ranges must be the same length", "range-length"), 1 === h) return () => l[0];
        if (2 === h && l[0] === l[1]) return () => l[1];
        let p = e[0] === e[1];
        e[0] > e[h - 1] && (e = [...e].reverse(), l = [...l].reverse());
        let m = function(e, t, n) {
                let a = [],
                    l = n || i.MotionGlobalConfig.mix || o.mix,
                    u = e.length - 1;
                for (let n = 0; n < u; n++) {
                    let i = l(e[n], e[n + 1]);
                    if (t) {
                        let e = Array.isArray(t) ? t[n] || r.noop : t;
                        i = (0, s.pipe)(e, i)
                    }
                    a.push(i)
                }
                return a
            }(l, c, d),
            f = m.length,
            v = t => {
                if (p && t < e[0]) return l[0];
                let n = 0;
                if (f > 1)
                    for (; n < e.length - 2 && !(t < e[n + 1]); n++);
                let i = (0, a.progress)(e[n], e[n + 1], t);
                return m[n](i)
            };
        return u ? t => v((0, n.clamp)(e[0], e[h - 1], t)) : v
    }])
}, 668617, 91649, e => {
    "use strict";
    var t = e.i(747113),
        n = e.i(647480);

    function i(e, i) {
        let r = e[e.length - 1];
        for (let s = 1; s <= i; s++) {
            let a = (0, t.progress)(0, i, s);
            e.push((0, n.mixNumber)(r, 1, a))
        }
    }
    e.s(["fillOffset", 0, i], 91649), e.s(["defaultOffset", 0, function(e) {
        let t = [0];
        return i(t, e.length - 1), t
    }], 668617)
}, 361979, e => {
    "use strict";
    var t = e.i(264250);
    e.s(["isSVGElement", 0, function(e) {
        return (0, t.isObject)(e) && "ownerSVGElement" in e
    }])
}, 245503, e => {
    "use strict";
    var t = e.i(3931),
        n = e.i(587986),
        i = e.i(137927),
        r = e.i(953234);
    e.s(["createDomVisualElement", 0, (e, s) => (0, r.isSVGComponent)(e) ? new i.SVGVisualElement(s) : new n.HTMLVisualElement(s, {
        allowProjection: e !== t.Fragment
    })])
}, 24388, e => {
    "use strict";
    var t = e.i(669430),
        n = e.i(612241);

    function i(e, t, n, r = 0, s = 1) {
        let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t),
            o = e.size,
            l = (o - 1) * r;
        return "function" == typeof n ? n(a, o) : 1 === s ? a * r : l - a * r
    }

    function r(e, s, a = {}) {
        let o = (0, t.resolveVariant)(e, s, "exit" === a.type ? e.presenceContext?.custom : void 0),
            {
                transition: l = e.getDefaultTransition() || {}
            } = o || {};
        a.transitionOverride && (l = a.transitionOverride);
        let u = o ? () => Promise.all((0, n.animateTarget)(e, o, a)) : () => Promise.resolve(),
            c = e.variantChildren && e.variantChildren.size ? (t = 0) => {
                let {
                    delayChildren: n = 0,
                    staggerChildren: o,
                    staggerDirection: u
                } = l;
                return function(e, t, n = 0, s = 0, a = 0, o = 1, l) {
                    let u = [];
                    for (let c of e.variantChildren) c.notify("AnimationStart", t), u.push(r(c, t, {
                        ...l,
                        delay: n + ("function" == typeof s ? 0 : s) + i(e.variantChildren, c, s, a, o)
                    }).then(() => c.notify("AnimationComplete", t)));
                    return Promise.all(u)
                }(e, s, t, n, o, u, a)
            } : () => Promise.resolve(),
            {
                when: d
            } = l;
        if (!d) return Promise.all([u(), c(a.delay)]);
        {
            let [e, t] = "beforeChildren" === d ? [u, c] : [c, u];
            return e().then(() => t())
        }
    }
    var s = e.i(838024),
        a = e.i(29762);

    function o(e, t) {
        if (!Array.isArray(t)) return !1;
        let n = t.length;
        if (n !== e.length) return !1;
        for (let i = 0; i < n; i++)
            if (t[i] !== e[i]) return !1;
        return !0
    }
    var l = e.i(593383),
        u = e.i(541762);
    let c = u.variantProps.length,
        d = [...u.variantPriorityOrder].reverse(),
        h = u.variantPriorityOrder.length;

    function p(e = !1) {
        return {
            isActive: e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }

    function m() {
        return {
            animate: p(!0),
            whileInView: p(),
            whileHover: p(),
            whileTap: p(),
            whileDrag: p(),
            whileFocus: p(),
            exit: p()
        }
    }
    e.s(["createAnimationState", 0, function(e) {
        let p = i => Promise.all(i.map(({
                animation: i,
                options: s
            }) => (function(e, i, s = {}) {
                let a;
                if (e.notify("AnimationStart", i), Array.isArray(i)) a = Promise.all(i.map(t => r(e, t, s)));
                else if ("string" == typeof i) a = r(e, i, s);
                else {
                    let r = "function" == typeof i ? (0, t.resolveVariant)(e, i, s.custom) : i;
                    a = Promise.all((0, n.animateTarget)(e, r, s))
                }
                return a.then(() => {
                    e.notify("AnimationComplete", i)
                })
            })(e, i, s))),
            f = m(),
            v = !0,
            g = n => (i, r) => {
                let s = (0, t.resolveVariant)(e, r, "exit" === n ? e.presenceContext?.custom : void 0);
                if (s) {
                    let {
                        transition: e,
                        transitionEnd: t,
                        ...n
                    } = s;
                    i = {
                        ...i,
                        ...n,
                        ...t
                    }
                }
                return i
            };

        function b(n) {
            let {
                props: r
            } = e, m = function e(t) {
                if (!t) return;
                if (!t.isControllingVariants) {
                    let n = t.parent && e(t.parent) || {};
                    return void 0 !== t.props.initial && (n.initial = t.props.initial), n
                }
                let n = {};
                for (let e = 0; e < c; e++) {
                    let i = u.variantProps[e],
                        r = t.props[i];
                    ((0, l.isVariantLabel)(r) || !1 === r) && (n[i] = r)
                }
                return n
            }(e.parent) || {}, b = [], y = new Set, A = {}, w = 1 / 0;
            for (let u = 0; u < h; u++) {
                var S, E;
                let c = d[u],
                    h = f[c],
                    p = void 0 !== r[c] ? r[c] : m[c],
                    x = (0, l.isVariantLabel)(p),
                    P = c === n ? h.isActive : null;
                !1 === P && (w = u);
                let V = p === m[c] && p !== r[c] && x;
                if (V && v && e.manuallyAnimateOnMount && (V = !1), h.protectedKeys = {
                        ...A
                    }, !h.isActive && null === P || !p && !h.prevProp || (0, s.isAnimationControls)(p) || "boolean" == typeof p) continue;
                let C = (S = h.prevProp, "string" == typeof(E = p) ? E !== S : !!Array.isArray(E) && !o(E, S)),
                    T = C || c === n && h.isActive && !V && x || u > w && x,
                    M = !1,
                    F = Array.isArray(p) ? p : [p],
                    I = F.reduce(g(c), {});
                !1 === P && (I = {});
                let {
                    prevResolvedValues: L = {}
                } = h, O = {
                    ...L,
                    ...I
                }, N = t => {
                    T = !0, y.has(t) && (M = !0, y.delete(t)), h.needsAnimating[t] = !0;
                    let n = e.getValue(t);
                    n && (n.liveStyle = !1)
                };
                for (let e in O) {
                    let t = I[e],
                        n = L[e];
                    if (!A.hasOwnProperty(e))((0, a.isKeyframesTarget)(t) && (0, a.isKeyframesTarget)(n) ? o(t, n) : t === n) ? void 0 !== t && y.has(e) ? N(e) : h.protectedKeys[e] = !0 : null != t ? N(e) : y.add(e)
                }
                h.prevProp = p, h.prevResolvedValues = I, h.isActive && (A = {
                    ...A,
                    ...I
                }), v && e.blockInitialAnimation && (T = !1);
                let R = V && C,
                    G = !R || M;
                T && G && b.push(...F.map(n => {
                    let r = {
                        type: c
                    };
                    if ("string" == typeof n && v && !R && e.manuallyAnimateOnMount && e.parent) {
                        let {
                            parent: s
                        } = e, a = (0, t.resolveVariant)(s, n);
                        if (s.enteringChildren && a) {
                            let {
                                delayChildren: t
                            } = a.transition || {};
                            r.delay = i(s.enteringChildren, e, t)
                        }
                    }
                    return {
                        animation: n,
                        options: r
                    }
                }))
            }
            if (y.size) {
                let n = {};
                if ("boolean" != typeof r.initial) {
                    let i = (0, t.resolveVariant)(e, Array.isArray(r.initial) ? r.initial[0] : r.initial);
                    i && i.transition && (n.transition = i.transition)
                }
                y.forEach(t => {
                    let i = e.getBaseTarget(t),
                        r = e.getValue(t);
                    r && (r.liveStyle = !0), n[t] = i ?? null
                }), b.push({
                    animation: n
                })
            }
            let x = !!b.length;
            return v && (!1 === r.initial || r.initial === r.animate) && !e.manuallyAnimateOnMount && (x = !1), v = !1, x ? p(b) : Promise.resolve()
        }
        return {
            animateChanges: b,
            setActive: function(t, n) {
                if (f[t].isActive === n) return Promise.resolve();
                e.variantChildren?.forEach(e => e.animationState?.setActive(t, n)), f[t].isActive = n;
                let i = b(t);
                for (let e in f) f[e].protectedKeys = {};
                return i
            },
            setAnimateFunction: function(t) {
                p = t(e)
            },
            getState: () => f,
            reset: () => {
                f = m()
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
        n = e.i(24388),
        i = e.i(141932);
    class r extends i.Feature {
        constructor(e) {
            super(e), e.animationState || (e.animationState = (0, n.createAnimationState)(e))
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
    var s = i;
    let a = 0;
    class o extends s.Feature {
        constructor() {
            super(...arguments), this.id = a++
        }
        update() {
            if (!this.node.presenceContext) return;
            let {
                isPresent: e,
                onExitComplete: t
            } = this.node.presenceContext, {
                isPresent: n
            } = this.node.prevPresenceContext || {};
            if (!this.node.animationState || e === n) return;
            let i = this.node.animationState.setActive("exit", !e);
            t && !e && i.then(() => {
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
            Feature: r
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
    e.s(["addDomEvent", 0, function(e, t, n, i = {
        passive: !0
    }) {
        return e.addEventListener(t, n, i), () => e.removeEventListener(t, n)
    }])
}, 291989, 414161, e => {
    "use strict";
    let t = e => "mouse" === e.pointerType ? "number" != typeof e.button || e.button <= 0 : !1 !== e.isPrimary;

    function n(e) {
        return {
            point: {
                x: e.pageX,
                y: e.pageY
            }
        }
    }
    e.s(["isPrimaryPointer", 0, t], 414161), e.s(["addPointerInfo", 0, e => i => t(i) && e(i, n(i)), "extractEventInfo", 0, n], 291989)
}, 994216, 664356, e => {
    "use strict";
    var t = e.i(210681),
        n = e.i(369710);

    function i(e, t) {
        let i = (0, n.resolveElements)(e),
            r = new AbortController;
        return [i, {
            passive: !0,
            ...t,
            signal: r.signal
        }, () => r.abort()]
    }

    function r(e) {
        return !("touch" === e.pointerType || (0, t.isDragActive)())
    }
    e.s(["setupGesture", 0, i], 664356), e.s(["hover", 0, function(e, t, n = {}) {
        let [s, a, o] = i(e, n), l = e => {
            if (!r(e)) return;
            let {
                target: n
            } = e, i = t(n, e);
            if ("function" != typeof i || !n) return;
            let s = e => {
                r(e) && (i(e), n.removeEventListener("pointerleave", s))
            };
            n.addEventListener("pointerleave", s, a)
        };
        return s.forEach(e => {
            e.addEventListener("pointerenter", l, a)
        }), o
    }], 994216)
}, 174821, e => {
    "use strict";
    var t = e.i(994216),
        n = e.i(347248),
        i = e.i(291989),
        r = e.i(141932);

    function s(e, t, r) {
        let {
            props: s
        } = e;
        e.animationState && s.whileHover && e.animationState.setActive("whileHover", "Start" === r);
        let a = s["onHover" + r];
        a && n.frame.postRender(() => a(t, (0, i.extractEventInfo)(t)))
    }
    class a extends r.Feature {
        mount() {
            let {
                current: e
            } = this.node;
            e && (this.unmount = (0, t.hover)(e, (e, t) => (s(this.node, t, "Start"), e => s(this.node, e, "End"))))
        }
        unmount() {}
    }
    e.s(["HoverGesture", 0, a])
}, 780584, e => {
    "use strict";
    var t = e.i(174821),
        n = e.i(640746),
        i = e.i(958351),
        r = e.i(141932);
    class s extends r.Feature {
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
            this.unmount = (0, n.pipe)((0, i.addDomEvent)(this.node.current, "focus", () => this.onFocus()), (0, i.addDomEvent)(this.node.current, "blur", () => this.onBlur()))
        }
        unmount() {}
    }
    var a = e.i(812064),
        o = e.i(210681);
    let l = (e, t) => !!t && (e === t || l(e, t.parentElement));
    var u = e.i(414161),
        c = e.i(664356);
    let d = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        h = new WeakSet;

    function p(e) {
        return t => {
            "Enter" === t.key && e(t)
        }
    }

    function m(e, t) {
        e.dispatchEvent(new PointerEvent("pointer" + t, {
            isPrimary: !0,
            bubbles: !0
        }))
    }

    function f(e) {
        return (0, u.isPrimaryPointer)(e) && !(0, o.isDragActive)()
    }
    var v = e.i(347248),
        g = e.i(291989),
        b = r;

    function y(e, t, n) {
        let {
            props: i
        } = e;
        if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
        e.animationState && i.whileTap && e.animationState.setActive("whileTap", "Start" === n);
        let r = i["onTap" + ("End" === n ? "" : n)];
        r && v.frame.postRender(() => r(t, (0, g.extractEventInfo)(t)))
    }
    class A extends b.Feature {
        mount() {
            let {
                current: e
            } = this.node;
            e && (this.unmount = function(e, t, n = {}) {
                let [i, r, s] = (0, c.setupGesture)(e, n), o = e => {
                    let i = e.currentTarget;
                    if (!f(e)) return;
                    h.add(i);
                    let s = t(i, e),
                        a = (e, t) => {
                            window.removeEventListener("pointerup", o), window.removeEventListener("pointercancel", u), h.has(i) && h.delete(i), f(e) && "function" == typeof s && s(e, {
                                success: t
                            })
                        },
                        o = e => {
                            a(e, i === window || i === document || n.useGlobalTarget || l(i, e.target))
                        },
                        u = e => {
                            a(e, !1)
                        };
                    window.addEventListener("pointerup", o, r), window.addEventListener("pointercancel", u, r)
                };
                return i.forEach(e => {
                    ((n.useGlobalTarget ? window : e).addEventListener("pointerdown", o, r), (0, a.isHTMLElement)(e)) && (e.addEventListener("focus", e => ((e, t) => {
                        let n = e.currentTarget;
                        if (!n) return;
                        let i = p(() => {
                            if (h.has(n)) return;
                            m(n, "down");
                            let e = p(() => {
                                m(n, "up")
                            });
                            n.addEventListener("keyup", e, t), n.addEventListener("blur", () => m(n, "cancel"), t)
                        });
                        n.addEventListener("keydown", i, t), n.addEventListener("blur", () => n.removeEventListener("keydown", i), t)
                    })(e, r)), d.has(e.tagName) || -1 !== e.tabIndex || e.hasAttribute("tabindex") || (e.tabIndex = 0))
                }), s
            }(e, (e, t) => (y(this.node, t, "Start"), (e, {
                success: t
            }) => y(this.node, e, t ? "End" : "Cancel")), {
                useGlobalTarget: this.node.props.globalTapTarget
            }))
        }
        unmount() {}
    }
    var w = r;
    let S = new WeakMap,
        E = new WeakMap,
        x = e => {
            let t = S.get(e.target);
            t && t(e)
        },
        P = e => {
            e.forEach(x)
        },
        V = {
            some: 0,
            all: 1
        };
    class C extends w.Feature {
        constructor() {
            super(...arguments), this.hasEnteredView = !1, this.isInView = !1
        }
        startObserver() {
            var e;
            let t;
            this.unmount();
            let {
                viewport: n = {}
            } = this.node.getProps(), {
                root: i,
                margin: r,
                amount: s = "some",
                once: a
            } = n, o = {
                root: i ? i.current : void 0,
                rootMargin: r,
                threshold: "number" == typeof s ? s : V[s]
            }, l = e => {
                let {
                    isIntersecting: t
                } = e;
                if (this.isInView === t || (this.isInView = t, a && !t && this.hasEnteredView)) return;
                t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                let {
                    onViewportEnter: n,
                    onViewportLeave: i
                } = this.node.getProps(), r = t ? n : i;
                r && r(e)
            };
            return e = this.node.current, t = function({
                root: e,
                ...t
            }) {
                let n = e || document;
                E.has(n) || E.set(n, {});
                let i = E.get(n),
                    r = JSON.stringify(t);
                return i[r] || (i[r] = new IntersectionObserver(P, {
                    root: e,
                    ...t
                })), i[r]
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
                return n => e[n] !== t[n]
            }(e, t)) && this.startObserver()
        }
        unmount() {}
    }
    let T = {
        inView: {
            Feature: C
        },
        tap: {
            Feature: A
        },
        focus: {
            Feature: s
        },
        hover: {
            Feature: t.HoverGesture
        }
    };
    e.s(["gestureAnimations", 0, T], 780584)
}, 637165, 511611, e => {
    "use strict";
    var t = e.i(361979);
    e.s(["isSVGSVGElement", 0, function(e) {
        return (0, t.isSVGElement)(e) && "svg" === e.tagName
    }], 637165);
    var n = e.i(538305),
        i = e.i(134026),
        r = e.i(349168);
    e.s(["animateSingleValue", 0, function(e, t, s) {
        let a = (0, n.isMotionValue)(e) ? e : (0, i.motionValue)(e);
        return a.start((0, r.animateMotionValue)("", a, t, s)), a.animation
    }], 511611)
}, 72607, e => {
    "use strict";
    var t = e.i(245503),
        n = e.i(53645),
        i = e.i(133862),
        r = e.i(566993),
        s = e.i(780584),
        a = e.i(871726);
    let o = {
            ...i.animations,
            ...s.gestureAnimations,
            ...r.drag,
            ...a.layout
        },
        l = (0, n.createMotionProxy)(o, t.createDomVisualElement);
    e.s(["motion", 0, l], 72607)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5e37df2c-5525-5a6a-91e2-1d917d68a2ea")
    } catch (e) {}
}();
//# debugId=5e37df2c-5525-5a6a-91e2-1d917d68a2ea