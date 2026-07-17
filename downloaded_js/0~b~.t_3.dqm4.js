(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 193863, (e, t, r) => {
    e.e, t.exports = function(e, t) {
        if (void 0 == t && (t = {
                fuzzy: !0
            }), /youtu\.?be/.test(e)) {
            var r, n = [/youtu\.be\/([^#\&\?]{11})/, /\?v=([^#\&\?]{11})/, /\&v=([^#\&\?]{11})/, /embed\/([^#\&\?]{11})/, /\/v\/([^#\&\?]{11})/];
            for (r = 0; r < n.length; ++r)
                if (n[r].test(e)) return n[r].exec(e)[1];
            if (t.fuzzy) {
                var s = e.split(/[\/\&\?=#\.\s]/g);
                for (r = 0; r < s.length; ++r)
                    if (/^[^#\&\?]{11}$/.test(s[r])) return s[r]
            }
        }
        return null
    }
}, 430215, e => {
    "use strict";
    var t = e.i(999721);
    e.s(["default", 0, e => {
        let [r, n] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            let t = window.matchMedia(e);
            t.matches !== r && n(t.matches);
            let s = () => n(t.matches);
            return window.addEventListener("resize", s), () => window.removeEventListener("resize", s)
        }, [r, e]), r
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
        r = e.i(954912);
    let n = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
        s = {
            value: null,
            addProjectionMetrics: null
        };

    function i(e, t) {
        let i = !1,
            o = !0,
            a = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            },
            l = () => i = !0,
            u = n.reduce((e, r) => (e[r] = function(e, t) {
                let r = new Set,
                    n = new Set,
                    i = !1,
                    o = !1,
                    a = new WeakSet,
                    l = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    u = 0;

                function c(t) {
                    a.has(t) && (f.schedule(t), e()), u++, t(l)
                }
                let f = {
                    schedule: (e, t = !1, s = !1) => {
                        let o = s && i ? r : n;
                        return t && a.add(e), o.has(e) || o.add(e), e
                    },
                    cancel: e => {
                        n.delete(e), a.delete(e)
                    },
                    process: e => {
                        if (l = e, i) {
                            o = !0;
                            return
                        }
                        i = !0, [r, n] = [n, r], r.forEach(c), t && s.value && s.value.frameloop[t].push(u), u = 0, r.clear(), i = !1, o && (o = !1, f.process(e))
                    }
                };
                return f
            }(l, t ? r : void 0), e), {}),
            {
                setup: c,
                read: f,
                resolveKeyframes: h,
                preUpdate: d,
                update: p,
                preRender: m,
                render: g,
                postRender: v
            } = u,
            y = () => {
                let n = r.MotionGlobalConfig.useManualTiming ? a.timestamp : performance.now();
                i = !1, r.MotionGlobalConfig.useManualTiming || (a.delta = o ? 1e3 / 60 : Math.max(Math.min(n - a.timestamp, 40), 1)), a.timestamp = n, a.isProcessing = !0, c.process(a), f.process(a), h.process(a), d.process(a), p.process(a), m.process(a), g.process(a), v.process(a), a.isProcessing = !1, i && t && (o = !1, e(y))
            };
        return {
            schedule: n.reduce((t, r) => {
                let n = u[r];
                return t[r] = (t, r = !1, s = !1) => (!i && (i = !0, o = !0, a.isProcessing || e(y)), n.schedule(t, r, s)), t
            }, {}),
            cancel: e => {
                for (let t = 0; t < n.length; t++) u[n[t]].cancel(e)
            },
            state: a,
            steps: u
        }
    }
    e.s(["statsBuffer", 0, s], 680124), e.s(["createRenderBatcher", 0, i], 817967);
    let {
        schedule: o,
        cancel: a,
        state: l,
        steps: u
    } = i("u" > typeof requestAnimationFrame ? requestAnimationFrame : t.noop, !0);
    e.s(["cancelFrame", 0, a, "frame", 0, o, "frameData", 0, l, "frameSteps", 0, u], 347248)
}, 133639, e => {
    "use strict";
    e.s(["addUniqueItem", 0, function(e, t) {
        -1 === e.indexOf(t) && e.push(t)
    }, "removeItem", 0, function(e, t) {
        let r = e.indexOf(t);
        r > -1 && e.splice(r, 1)
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
        notify(e, t, r) {
            let n = this.subscriptions.length;
            if (n)
                if (1 === n) this.subscriptions[0](e, t, r);
                else
                    for (let s = 0; s < n; s++) {
                        let n = this.subscriptions[s];
                        n && n(e, t, r)
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
    var r = e.i(954912),
        n = e.i(347248);

    function s() {
        t = void 0
    }
    let i = {
        now: () => (void 0 === t && i.set(n.frameData.isProcessing || r.MotionGlobalConfig.useManualTiming ? n.frameData.timestamp : performance.now()), t),
        set: e => {
            t = e, queueMicrotask(s)
        }
    };
    e.s(["time", 0, i])
}, 134026, e => {
    "use strict";
    var t = e.i(470180),
        r = e.i(795153),
        n = e.i(924140),
        s = e.i(347248);
    let i = {
        current: void 0
    };
    class o {
        constructor(e, t = {}) {
            this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = e => {
                let t = n.time.now();
                if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
                    for (let e of this.dependents) e.dirty()
            }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner
        }
        setCurrent(e) {
            this.current = e, this.updatedAt = n.time.now(), null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
        }
        setPrevFrameValue(e = this.current) {
            this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
        }
        onChange(e) {
            return this.on("change", e)
        }
        on(e, r) {
            this.events[e] || (this.events[e] = new t.SubscriptionManager);
            let n = this.events[e].add(r);
            return "change" === e ? () => {
                n(), s.frame.read(() => {
                    this.events.change.getSize() || this.stop()
                })
            } : n
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
        setWithVelocity(e, t, r) {
            this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - r
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
            return i.current && i.current.push(this), this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            let e = n.time.now();
            if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
            let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return (0, r.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
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
    e.s(["collectMotionValues", 0, i, "motionValue", 0, function(e, t) {
        return new o(e, t)
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
    let r = t(() => void 0 !== window.ScrollTimeline);
    e.s(["supportsScrollTimeline", 0, r], 815965)
}, 747113, e => {
    "use strict";
    e.s(["progress", 0, (e, t, r) => {
        let n = t - e;
        return 0 === n ? 1 : (r - e) / n
    }])
}, 640746, e => {
    "use strict";
    let t = (e, t) => r => t(e(r));
    e.s(["pipe", 0, (...e) => e.reduce(t)])
}, 168826, 801935, 267754, 201221, 192573, 377149, 472656, 826738, e => {
    "use strict";
    var t = e.i(483032),
        r = e.i(960851);
    let n = e => Math.round(1e5 * e) / 1e5,
        s = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    e.s(["floatRegex", 0, s], 801935);
    let i = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        o = (e, t) => r => !!("string" == typeof r && i.test(r) && r.startsWith(e) || t && null != r && Object.prototype.hasOwnProperty.call(r, t)),
        a = (e, t, r) => n => {
            if ("string" != typeof n) return n;
            let [i, o, a, l] = n.match(s);
            return {
                [e]: parseFloat(i),
                [t]: parseFloat(o),
                [r]: parseFloat(a),
                alpha: void 0 !== l ? parseFloat(l) : 1
            }
        },
        l = {
            ...r.number,
            transform: e => Math.round((0, t.clamp)(0, 255, e))
        },
        u = {
            test: o("rgb", "red"),
            parse: a("red", "green", "blue"),
            transform: ({
                red: e,
                green: t,
                blue: s,
                alpha: i = 1
            }) => "rgba(" + l.transform(e) + ", " + l.transform(t) + ", " + l.transform(s) + ", " + n(r.alpha.transform(i)) + ")"
        };
    e.s(["rgba", 0, u], 267754);
    let c = {
        test: o("#"),
        parse: function(e) {
            let t = "",
                r = "",
                n = "",
                s = "";
            return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), s = e.substring(4, 5), t += t, r += r, n += n, s += s), {
                red: parseInt(t, 16),
                green: parseInt(r, 16),
                blue: parseInt(n, 16),
                alpha: s ? parseInt(s, 16) / 255 : 1
            }
        },
        transform: u.transform
    };
    e.s(["hex", 0, c], 201221);
    var f = e.i(21365);
    let h = {
        test: o("hsl", "hue"),
        parse: a("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: s,
            alpha: i = 1
        }) => "hsla(" + Math.round(e) + ", " + f.percent.transform(n(t)) + ", " + f.percent.transform(n(s)) + ", " + n(r.alpha.transform(i)) + ")"
    };
    e.s(["hsla", 0, h], 192573);
    let d = {
        test: e => u.test(e) || c.test(e) || h.test(e),
        parse: e => u.test(e) ? u.parse(e) : h.test(e) ? h.parse(e) : c.parse(e),
        transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? u.transform(e) : h.transform(e),
        getAnimatableNone: e => {
            let t = d.parse(e);
            return t.alpha = 0, d.transform(t)
        }
    };
    e.s(["color", 0, d], 168826);
    let p = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        m = "number",
        g = "color",
        v = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

    function y(e) {
        let t = e.toString(),
            r = [],
            n = {
                color: [],
                number: [],
                var: []
            },
            s = [],
            i = 0,
            o = t.replace(v, e => (d.test(e) ? (n.color.push(i), s.push(g), r.push(d.parse(e))) : e.startsWith("var(") ? (n.var.push(i), s.push("var"), r.push(e)) : (n.number.push(i), s.push(m), r.push(parseFloat(e))), ++i, "${}")).split("${}");
        return {
            values: r,
            split: o,
            indexes: n,
            types: s
        }
    }

    function b(e) {
        return y(e).values
    }

    function w(e) {
        let {
            split: t,
            types: r
        } = y(e), s = t.length;
        return e => {
            let i = "";
            for (let o = 0; o < s; o++)
                if (i += t[o], void 0 !== e[o]) {
                    let t = r[o];
                    t === m ? i += n(e[o]) : t === g ? i += d.transform(e[o]) : i += e[o]
                } return i
        }
    }
    let x = e => "number" == typeof e ? 0 : d.test(e) ? d.getAnimatableNone(e) : e;

    function E(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
    }
    e.s(["analyseComplexValue", 0, y, "complex", 0, {
        test: function(e) {
            return isNaN(e) && "string" == typeof e && (e.match(s)?.length || 0) + (e.match(p)?.length || 0) > 0
        },
        parse: b,
        createTransformer: w,
        getAnimatableNone: function(e) {
            let t = b(e);
            return w(e)(t.map(x))
        }
    }], 377149), e.s(["hslaToRgba", 0, function({
        hue: e,
        saturation: t,
        lightness: r,
        alpha: n
    }) {
        e /= 360, r /= 100;
        let s = 0,
            i = 0,
            o = 0;
        if (t /= 100) {
            let n = r < .5 ? r * (1 + t) : r + t - r * t,
                a = 2 * r - n;
            s = E(a, n, e + 1 / 3), i = E(a, n, e), o = E(a, n, e - 1 / 3)
        } else s = i = o = r;
        return {
            red: Math.round(255 * s),
            green: Math.round(255 * i),
            blue: Math.round(255 * o),
            alpha: n
        }
    }], 472656), e.s(["mixImmediate", 0, function(e, t) {
        return r => r > 0 ? t : e
    }], 826738)
}, 647480, e => {
    "use strict";
    e.s(["mixNumber", 0, (e, t, r) => e + (t - e) * r])
}, 405082, e => {
    "use strict";
    var t = e.i(640746),
        r = e.i(348367),
        n = e.i(242210),
        s = e.i(168826),
        i = e.i(377149),
        o = e.i(201221),
        a = e.i(192573),
        l = e.i(472656),
        u = e.i(267754),
        c = e.i(826738),
        f = e.i(647480);
    let h = (e, t, r) => {
            let n = e * e,
                s = r * (t * t - n) + n;
            return s < 0 ? 0 : Math.sqrt(s)
        },
        d = [o.hex, u.rgba, a.hsla];

    function p(e) {
        let t = d.find(t => t.test(e));
        if ((0, r.warning)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
        let n = t.parse(e);
        return t === a.hsla && (n = (0, l.hslaToRgba)(n)), n
    }
    let m = (e, t) => {
            let r = p(e),
                n = p(t);
            if (!r || !n) return (0, c.mixImmediate)(e, t);
            let s = {
                ...r
            };
            return e => (s.red = h(r.red, n.red, e), s.green = h(r.green, n.green, e), s.blue = h(r.blue, n.blue, e), s.alpha = (0, f.mixNumber)(r.alpha, n.alpha, e), u.rgba.transform(s))
        },
        g = new Set(["none", "hidden"]);

    function v(e, t) {
        return r => (0, f.mixNumber)(e, t, r)
    }

    function y(e) {
        return "number" == typeof e ? v : "string" == typeof e ? (0, n.isCSSVariableToken)(e) ? c.mixImmediate : s.color.test(e) ? m : x : Array.isArray(e) ? b : "object" == typeof e ? s.color.test(e) ? m : w : c.mixImmediate
    }

    function b(e, t) {
        let r = [...e],
            n = r.length,
            s = e.map((e, r) => y(e)(e, t[r]));
        return e => {
            for (let t = 0; t < n; t++) r[t] = s[t](e);
            return r
        }
    }

    function w(e, t) {
        let r = {
                ...e,
                ...t
            },
            n = {};
        for (let s in r) void 0 !== e[s] && void 0 !== t[s] && (n[s] = y(e[s])(e[s], t[s]));
        return e => {
            for (let t in n) r[t] = n[t](e);
            return r
        }
    }
    let x = (e, n) => {
        let s = i.complex.createTransformer(n),
            o = (0, i.analyseComplexValue)(e),
            a = (0, i.analyseComplexValue)(n);
        if (!(o.indexes.var.length === a.indexes.var.length && o.indexes.color.length === a.indexes.color.length && o.indexes.number.length >= a.indexes.number.length)) return (0, r.warning)(!0, `Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), (0, c.mixImmediate)(e, n);
        if (g.has(e) && !a.values.length || g.has(n) && !o.values.length) return g.has(e) ? t => t <= 0 ? e : n : t => t >= 1 ? n : e;
        return (0, t.pipe)(b(function(e, t) {
            let r = [],
                n = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let s = 0; s < t.values.length; s++) {
                let i = t.types[s],
                    o = e.indexes[i][n[i]],
                    a = e.values[o] ?? 0;
                r[s] = a, n[i]++
            }
            return r
        }(o, a), a.values), s)
    };
    e.s(["mix", 0, function(e, t, r) {
        return "number" == typeof e && "number" == typeof t && "number" == typeof r ? (0, f.mixNumber)(e, t, r) : y(e)(e, t)
    }], 405082)
}, 279126, e => {
    "use strict";
    var t = e.i(348367),
        r = e.i(483032),
        n = e.i(954912),
        s = e.i(175602),
        i = e.i(640746),
        o = e.i(747113),
        a = e.i(405082);
    e.s(["interpolate", 0, function(e, l, {
        clamp: u = !0,
        ease: c,
        mixer: f
    } = {}) {
        let h = e.length;
        if ((0, t.invariant)(h === l.length, "Both input and output ranges must be the same length", "range-length"), 1 === h) return () => l[0];
        if (2 === h && l[0] === l[1]) return () => l[1];
        let d = e[0] === e[1];
        e[0] > e[h - 1] && (e = [...e].reverse(), l = [...l].reverse());
        let p = function(e, t, r) {
                let o = [],
                    l = r || n.MotionGlobalConfig.mix || a.mix,
                    u = e.length - 1;
                for (let r = 0; r < u; r++) {
                    let n = l(e[r], e[r + 1]);
                    if (t) {
                        let e = Array.isArray(t) ? t[r] || s.noop : t;
                        n = (0, i.pipe)(e, n)
                    }
                    o.push(n)
                }
                return o
            }(l, c, f),
            m = p.length,
            g = t => {
                if (d && t < e[0]) return l[0];
                let r = 0;
                if (m > 1)
                    for (; r < e.length - 2 && !(t < e[r + 1]); r++);
                let n = (0, o.progress)(e[r], e[r + 1], t);
                return p[r](n)
            };
        return u ? t => g((0, r.clamp)(e[0], e[h - 1], t)) : g
    }])
}, 668617, 91649, e => {
    "use strict";
    var t = e.i(747113),
        r = e.i(647480);

    function n(e, n) {
        let s = e[e.length - 1];
        for (let i = 1; i <= n; i++) {
            let o = (0, t.progress)(0, n, i);
            e.push((0, r.mixNumber)(s, 1, o))
        }
    }
    e.s(["fillOffset", 0, n], 91649), e.s(["defaultOffset", 0, function(e) {
        let t = [0];
        return n(t, e.length - 1), t
    }], 668617)
}, 361979, e => {
    "use strict";
    var t = e.i(264250);
    e.s(["isSVGElement", 0, function(e) {
        return (0, t.isObject)(e) && "ownerSVGElement" in e
    }])
}, 376936, 997413, 192207, e => {
    "use strict";
    let t, r;
    var n = e.i(134026),
        s = e.i(348367),
        i = e.i(999721),
        o = e.i(175602),
        a = e.i(347248);

    function l(e, t) {
        let r, n = () => {
            let {
                currentTime: n
            } = t, s = (null === n ? 0 : n.value) / 100;
            r !== s && e(s), r = s
        };
        return a.frame.preUpdate(n, !0), () => (0, a.cancelFrame)(n)
    }
    var u = e.i(815965),
        c = e.i(361979),
        f = e.i(369710);
    let h = new WeakMap,
        d = (e, t, r) => (n, s) => s && s[0] ? s[0][e + "Size"] : (0, c.isSVGElement)(n) && "getBBox" in n ? n.getBBox()[t] : n[r],
        p = d("inline", "width", "offsetWidth"),
        m = d("block", "height", "offsetHeight");

    function g({
        target: e,
        borderBoxSize: t
    }) {
        h.get(e)?.forEach(r => {
            r(e, {
                get width() {
                    return p(e, t)
                },
                get height() {
                    return m(e, t)
                }
            })
        })
    }

    function v(e) {
        e.forEach(g)
    }
    let y = new Set;
    var b = e.i(747113),
        w = e.i(795153);
    let x = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }),
        E = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };

    function A(e, t, r, n) {
        let s = r[t],
            {
                length: i,
                position: o
            } = E[t],
            a = s.current,
            l = r.time;
        s.current = e[`scroll${o}`], s.scrollLength = e[`scroll${i}`] - e[`client${i}`], s.offset.length = 0, s.offset[0] = 0, s.offset[1] = s.scrollLength, s.progress = (0, b.progress)(0, s.scrollLength, s.current);
        let u = n - l;
        s.velocity = u > 50 ? 0 : (0, w.velocityPerSecond)(s.current - a, u)
    }
    e.i(621757);
    var M = e.i(279126),
        S = e.i(668617),
        V = e.i(483032),
        C = e.i(812064);
    let P = {
        start: 0,
        center: .5,
        end: 1
    };

    function L(e, t, r = 0) {
        let n = 0;
        if (e in P && (e = P[e]), "string" == typeof e) {
            let t = parseFloat(e);
            e.endsWith("px") ? n = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? n = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = t / 100 * document.documentElement.clientHeight : e = t
        }
        return "number" == typeof e && (n = t * e), r + n
    }
    let T = [0, 0],
        F = [
            [0, 0],
            [1, 1]
        ],
        N = {
            x: 0,
            y: 0
        },
        W = new WeakMap,
        O = new WeakMap,
        z = new WeakMap,
        B = e => e === document.scrollingElement ? window : e;

    function k(e, {
        container: n = document.scrollingElement,
        ...s
    } = {}) {
        if (!n) return o.noop;
        let i = z.get(n);
        i || (i = new Set, z.set(n, i));
        let l = function(e, t, r, n = {}) {
            return {
                measure: t => {
                    ! function(e, t = e, r) {
                        if (r.x.targetOffset = 0, r.y.targetOffset = 0, t !== e) {
                            let n = t;
                            for (; n && n !== e;) r.x.targetOffset += n.offsetLeft, r.y.targetOffset += n.offsetTop, n = n.offsetParent
                        }
                        r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, r.x.containerLength = e.clientWidth, r.y.containerLength = e.clientHeight
                    }(e, n.target, r), A(e, "x", r, t), A(e, "y", r, t), r.time = t, (n.offset || n.target) && function(e, t, r) {
                        let {
                            offset: n = F
                        } = r, {
                            target: s = e,
                            axis: i = "y"
                        } = r, o = "y" === i ? "height" : "width", a = s !== e ? function(e, t) {
                            let r = {
                                    x: 0,
                                    y: 0
                                },
                                n = e;
                            for (; n && n !== t;)
                                if ((0, C.isHTMLElement)(n)) r.x += n.offsetLeft, r.y += n.offsetTop, n = n.offsetParent;
                                else if ("svg" === n.tagName) {
                                let e = n.getBoundingClientRect(),
                                    t = (n = n.parentElement).getBoundingClientRect();
                                r.x += e.left - t.left, r.y += e.top - t.top
                            } else if (n instanceof SVGGraphicsElement) {
                                let {
                                    x: e,
                                    y: t
                                } = n.getBBox();
                                r.x += e, r.y += t;
                                let s = null,
                                    i = n.parentNode;
                                for (; !s;) "svg" === i.tagName && (s = i), i = n.parentNode;
                                n = s
                            } else break;
                            return r
                        }(s, e) : N, l = s === e ? {
                            width: e.scrollWidth,
                            height: e.scrollHeight
                        } : "getBBox" in s && "svg" !== s.tagName ? s.getBBox() : {
                            width: s.clientWidth,
                            height: s.clientHeight
                        }, u = {
                            width: e.clientWidth,
                            height: e.clientHeight
                        };
                        t[i].offset.length = 0;
                        let c = !t[i].interpolate,
                            f = n.length;
                        for (let e = 0; e < f; e++) {
                            let r = function(e, t, r, n) {
                                let s = Array.isArray(e) ? e : T,
                                    i = 0;
                                return "number" == typeof e ? s = [e, e] : "string" == typeof e && (s = (e = e.trim()).includes(" ") ? e.split(" ") : [e, P[e] ? e : "0"]), (i = L(s[0], r, n)) - L(s[1], t)
                            }(n[e], u[o], l[o], a[i]);
                            c || r === t[i].interpolatorOffsets[e] || (c = !0), t[i].offset[e] = r
                        }
                        c && (t[i].interpolate = (0, M.interpolate)(t[i].offset, (0, S.defaultOffset)(n), {
                            clamp: !1
                        }), t[i].interpolatorOffsets = [...t[i].offset]), t[i].progress = (0, V.clamp)(0, 1, t[i].interpolate(t[i].current))
                    }(e, r, n)
                },
                notify: () => t(r)
            }
        }(n, e, {
            time: 0,
            x: x(),
            y: x()
        }, s);
        if (i.add(l), !W.has(n)) {
            let e, s = () => {
                    for (let e of i) e.measure(a.frameData.timestamp);
                    a.frame.preUpdate(o)
                },
                o = () => {
                    for (let e of i) e.notify()
                },
                l = () => a.frame.read(s);
            W.set(n, l);
            let u = B(n);
            window.addEventListener("resize", l, {
                passive: !0
            }), n !== document.documentElement && O.set(n, "function" == typeof n ? (y.add(n), r || (r = () => {
                let e = {
                    get width() {
                        return window.innerWidth
                    },
                    get height() {
                        return window.innerHeight
                    }
                };
                y.forEach(t => t(e))
            }, window.addEventListener("resize", r)), () => {
                y.delete(n), y.size || "function" != typeof r || (window.removeEventListener("resize", r), r = void 0)
            }) : (!t && "u" > typeof ResizeObserver && (t = new ResizeObserver(v)), (e = (0, f.resolveElements)(n)).forEach(e => {
                let r = h.get(e);
                r || (r = new Set, h.set(e, r)), r.add(l), t?.observe(e)
            }), () => {
                e.forEach(e => {
                    let r = h.get(e);
                    r?.delete(l), r?.size || t?.unobserve(e)
                })
            })), u.addEventListener("scroll", l, {
                passive: !0
            }), l()
        }
        let u = W.get(n);
        return a.frame.read(u, !1, !0), () => {
            (0, a.cancelFrame)(u);
            let e = z.get(n);
            if (!e || (e.delete(l), e.size)) return;
            let t = W.get(n);
            W.delete(n), t && (B(n).removeEventListener("scroll", t), O.get(n)?.(), window.removeEventListener("resize", t))
        }
    }
    let I = new Map;

    function R({
        source: e,
        container: t,
        ...r
    }) {
        var n;
        let s, i, {
            axis: o
        } = r;
        e && (t = e);
        let a = I.get(t) ?? new Map;
        I.set(t, a);
        let l = r.target ?? "self",
            c = a.get(l) ?? {},
            f = o + (r.offset ?? []).join(",");
        return c[f] || (c[f] = !r.target && (0, u.supportsScrollTimeline)() ? new ScrollTimeline({
            source: t,
            axis: o
        }) : (n = {
            container: t,
            ...r
        }, s = {
            value: 0
        }, i = k(e => {
            s.value = 100 * e[n.axis].progress
        }, n), {
            currentTime: s,
            cancel: i
        })), c[f]
    }
    var U = e.i(165780),
        H = e.i(148473);
    let G = () => ({
            scrollX: (0, n.motionValue)(0),
            scrollY: (0, n.motionValue)(0),
            scrollXProgress: (0, n.motionValue)(0),
            scrollYProgress: (0, n.motionValue)(0)
        }),
        $ = e => !!e && !e.current;
    e.s(["useScroll", 0, function({
        container: e,
        target: t,
        ...r
    } = {}) {
        let n = (0, U.useConstant)(G),
            a = (0, i.useRef)(null),
            u = (0, i.useRef)(!1),
            c = (0, i.useCallback)(() => (a.current = function(e, {
                axis: t = "y",
                container: r = document.scrollingElement,
                ...n
            } = {}) {
                var s, i;
                let a;
                if (!r) return o.noop;
                let u = {
                    axis: t,
                    container: r,
                    ...n
                };
                return "function" == typeof e ? (s = e, i = u, 2 === s.length ? k(e => {
                    s(e[i.axis].progress, e)
                }, i) : l(s, R(i))) : (a = R(u), e.attachTimeline({
                    timeline: u.target ? void 0 : a,
                    observe: e => (e.pause(), l(t => {
                        e.time = e.iterationDuration * t
                    }, a))
                }))
            }((e, {
                x: t,
                y: r
            }) => {
                n.scrollX.set(t.current), n.scrollXProgress.set(t.progress), n.scrollY.set(r.current), n.scrollYProgress.set(r.progress)
            }, {
                ...r,
                container: e?.current || void 0,
                target: t?.current || void 0
            }), () => {
                a.current?.()
            }), [e, t, JSON.stringify(r.offset)]);
        return (0, H.useIsomorphicLayoutEffect)(() => {
            if (u.current = !1, !($(e) || $(t))) return c();
            u.current = !0
        }, [c]), (0, i.useEffect)(() => u.current ? ((0, s.invariant)(!$(e), "Container ref is defined but not hydrated", "use-scroll-ref"), (0, s.invariant)(!$(t), "Target ref is defined but not hydrated", "use-scroll-ref"), c()) : void 0, [c]), n
    }], 376936);
    var q = e.i(339967);

    function j(e) {
        let t = (0, U.useConstant)(() => (0, n.motionValue)(e)),
            {
                isStatic: r
            } = (0, i.useContext)(q.MotionConfigContext);
        if (r) {
            let [, r] = (0, i.useState)(e);
            (0, i.useEffect)(() => t.on("change", r), [])
        }
        return t
    }

    function D(e, t) {
        let r = j(t()),
            n = () => r.set(t());
        return n(), (0, H.useIsomorphicLayoutEffect)(() => {
            let t = () => a.frame.preRender(n, !1, !0),
                r = e.map(e => e.on("change", t));
            return () => {
                r.forEach(e => e()), (0, a.cancelFrame)(n)
            }
        }), r
    }

    function X(e, t) {
        let r = (0, U.useConstant)(() => []);
        return D(e, () => {
            r.length = 0;
            let n = e.length;
            for (let t = 0; t < n; t++) r[t] = e[t].get();
            return t(r)
        })
    }
    e.s(["useMotionValue", 0, j], 997413), e.s(["useTransform", 0, function(e, t, r, s) {
        if ("function" == typeof e) {
            let t;
            return n.collectMotionValues.current = [], e(), t = D(n.collectMotionValues.current, e), n.collectMotionValues.current = void 0, t
        }
        let i = "function" == typeof t ? t : function(...e) {
            let t = !Array.isArray(e[0]),
                r = t ? 0 : -1,
                n = e[0 + r],
                s = e[1 + r],
                i = e[2 + r],
                o = e[3 + r],
                a = (0, M.interpolate)(s, i, o);
            return t ? a(n) : a
        }(t, r, s);
        return Array.isArray(e) ? X(e, i) : X([e], ([e]) => i(e))
    }], 192207)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ecd5a6b3-d535-50a1-a107-0ab714161420")
    } catch (e) {}
}();
//# debugId=ecd5a6b3-d535-50a1-a107-0ab714161420