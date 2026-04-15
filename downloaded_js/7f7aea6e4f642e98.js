(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 14452, e => {
    "use strict";
    var t = e.i(615167),
        i = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        className: n = "",
        tag: r = "div"
    }) => {
        let s = (0, i.default)("loco-text-heading-sm mb-4", n);
        return (0, t.jsx)(r, {
            className: s,
            children: e
        })
    }], 14452)
}, 430215, e => {
    "use strict";
    var t = e.i(145158);
    e.s(["default", 0, e => {
        let [i, n] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            let t = window.matchMedia(e);
            t.matches !== i && n(t.matches);
            let r = () => n(t.matches);
            return window.addEventListener("resize", r), () => window.removeEventListener("resize", r)
        }, [i, e]), i
    }])
}, 751004, e => {
    "use strict";
    var t = e.i(145158),
        i = e.i(657287),
        n = e.i(998554);

    function r() {
        n.hasReducedMotionListener.current || (0, i.initPrefersReducedMotion)();
        let [e] = (0, t.useState)(n.prefersReducedMotion.current);
        return e
    }
    e.s(["useReducedMotion", () => r])
}, 657287, 998554, e => {
    "use strict";
    var t = e.i(646745);
    let i = {
            current: null
        },
        n = {
            current: !1
        };

    function r() {
        if (n.current = !0, t.isBrowser)
            if (window.matchMedia) {
                let e = window.matchMedia("(prefers-reduced-motion)"),
                    t = () => i.current = e.matches;
                e.addEventListener("change", t), t()
            } else i.current = !1
    }
    e.s(["hasReducedMotionListener", () => n, "prefersReducedMotion", () => i], 998554), e.s(["initPrefersReducedMotion", () => r], 657287)
}, 954912, e => {
    "use strict";
    let t = {};
    e.s(["MotionGlobalConfig", () => t])
}, 175602, e => {
    "use strict";
    let t = e => e;
    e.s(["noop", () => t])
}, 347248, 680124, 817967, e => {
    "use strict";
    var t = e.i(175602),
        i = e.i(954912);
    let n = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
        r = {
            value: null,
            addProjectionMetrics: null
        };

    function s(e, t) {
        let s = !1,
            a = !0,
            l = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            },
            o = () => s = !0,
            u = n.reduce((e, i) => (e[i] = function(e, t) {
                let i = new Set,
                    n = new Set,
                    s = !1,
                    a = !1,
                    l = new WeakSet,
                    o = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    u = 0;

                function c(t) {
                    l.has(t) && (d.schedule(t), e()), u++, t(o)
                }
                let d = {
                    schedule: (e, t = !1, r = !1) => {
                        let a = r && s ? i : n;
                        return t && l.add(e), a.has(e) || a.add(e), e
                    },
                    cancel: e => {
                        n.delete(e), l.delete(e)
                    },
                    process: e => {
                        if (o = e, s) {
                            a = !0;
                            return
                        }
                        s = !0, [i, n] = [n, i], i.forEach(c), t && r.value && r.value.frameloop[t].push(u), u = 0, i.clear(), s = !1, a && (a = !1, d.process(e))
                    }
                };
                return d
            }(o, t ? i : void 0), e), {}),
            {
                setup: c,
                read: d,
                resolveKeyframes: h,
                preUpdate: p,
                update: m,
                preRender: f,
                render: g,
                postRender: v
            } = u,
            y = () => {
                let n = i.MotionGlobalConfig.useManualTiming ? l.timestamp : performance.now();
                s = !1, i.MotionGlobalConfig.useManualTiming || (l.delta = a ? 1e3 / 60 : Math.max(Math.min(n - l.timestamp, 40), 1)), l.timestamp = n, l.isProcessing = !0, c.process(l), d.process(l), h.process(l), p.process(l), m.process(l), f.process(l), g.process(l), v.process(l), l.isProcessing = !1, s && t && (a = !1, e(y))
            };
        return {
            schedule: n.reduce((t, i) => {
                let n = u[i];
                return t[i] = (t, i = !1, r = !1) => (!s && (s = !0, a = !0, l.isProcessing || e(y)), n.schedule(t, i, r)), t
            }, {}),
            cancel: e => {
                for (let t = 0; t < n.length; t++) u[n[t]].cancel(e)
            },
            state: l,
            steps: u
        }
    }
    e.s(["statsBuffer", () => r], 680124), e.s(["createRenderBatcher", () => s], 817967);
    let {
        schedule: a,
        cancel: l,
        state: o,
        steps: u
    } = s("u" > typeof requestAnimationFrame ? requestAnimationFrame : t.noop, !0);
    e.s(["cancelFrame", () => l, "frame", () => a, "frameData", () => o, "frameSteps", () => u], 347248)
}, 133639, e => {
    "use strict";

    function t(e, t) {
        -1 === e.indexOf(t) && e.push(t)
    }

    function i(e, t) {
        let i = e.indexOf(t);
        i > -1 && e.splice(i, 1)
    }
    e.s(["addUniqueItem", () => t, "removeItem", () => i])
}, 470180, e => {
    "use strict";
    var t = e.i(133639);
    class i {
        constructor() {
            this.subscriptions = []
        }
        add(e) {
            return (0, t.addUniqueItem)(this.subscriptions, e), () => (0, t.removeItem)(this.subscriptions, e)
        }
        notify(e, t, i) {
            let n = this.subscriptions.length;
            if (n)
                if (1 === n) this.subscriptions[0](e, t, i);
                else
                    for (let r = 0; r < n; r++) {
                        let n = this.subscriptions[r];
                        n && n(e, t, i)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    }
    e.s(["SubscriptionManager", () => i])
}, 795153, e => {
    "use strict";

    function t(e, t) {
        return t ? 1e3 / t * e : 0
    }
    e.s(["velocityPerSecond", () => t])
}, 924140, e => {
    "use strict";
    let t;
    var i = e.i(954912),
        n = e.i(347248);

    function r() {
        t = void 0
    }
    let s = {
        now: () => (void 0 === t && s.set(n.frameData.isProcessing || i.MotionGlobalConfig.useManualTiming ? n.frameData.timestamp : performance.now()), t),
        set: e => {
            t = e, queueMicrotask(r)
        }
    };
    e.s(["time", () => s])
}, 134026, e => {
    "use strict";
    var t = e.i(470180),
        i = e.i(795153),
        n = e.i(924140),
        r = e.i(347248);
    let s = {
        current: void 0
    };
    class a {
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
        on(e, i) {
            this.events[e] || (this.events[e] = new t.SubscriptionManager);
            let n = this.events[e].add(i);
            return "change" === e ? () => {
                n(), r.frame.read(() => {
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
        setWithVelocity(e, t, i) {
            this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - i
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
            let e = n.time.now();
            if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
            let t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
            return (0, i.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
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

    function l(e, t) {
        return new a(e, t)
    }
    e.s(["collectMotionValues", () => s, "motionValue", () => l])
}, 348367, e => {
    "use strict";
    let t = () => {},
        i = () => {};
    e.s(["invariant", () => i, "warning", () => t])
}, 815965, 338212, e => {
    "use strict";

    function t(e) {
        let t;
        return () => (void 0 === t && (t = e()), t)
    }
    e.s(["memo", () => t], 338212);
    let i = t(() => void 0 !== window.ScrollTimeline);
    e.s(["supportsScrollTimeline", () => i], 815965)
}, 747113, e => {
    "use strict";
    let t = (e, t, i) => {
        let n = t - e;
        return 0 === n ? 1 : (i - e) / n
    };
    e.s(["progress", () => t])
}, 640746, e => {
    "use strict";
    let t = (e, t) => i => t(e(i)),
        i = (...e) => e.reduce(t);
    e.s(["pipe", () => i])
}, 377149, 801935, 267754, 201221, 192573, 168826, e => {
    "use strict";
    var t = e.i(483032),
        i = e.i(960851);
    let n = e => Math.round(1e5 * e) / 1e5,
        r = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    e.s(["floatRegex", () => r], 801935);
    let s = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        a = (e, t) => i => !!("string" == typeof i && s.test(i) && i.startsWith(e) || t && null != i && Object.prototype.hasOwnProperty.call(i, t)),
        l = (e, t, i) => n => {
            if ("string" != typeof n) return n;
            let [s, a, l, o] = n.match(r);
            return {
                [e]: parseFloat(s),
                [t]: parseFloat(a),
                [i]: parseFloat(l),
                alpha: void 0 !== o ? parseFloat(o) : 1
            }
        },
        o = {
            ...i.number,
            transform: e => Math.round((0, t.clamp)(0, 255, e))
        },
        u = {
            test: a("rgb", "red"),
            parse: l("red", "green", "blue"),
            transform: ({
                red: e,
                green: t,
                blue: r,
                alpha: s = 1
            }) => "rgba(" + o.transform(e) + ", " + o.transform(t) + ", " + o.transform(r) + ", " + n(i.alpha.transform(s)) + ")"
        };
    e.s(["rgba", () => u], 267754);
    let c = {
        test: a("#"),
        parse: function(e) {
            let t = "",
                i = "",
                n = "",
                r = "";
            return e.length > 5 ? (t = e.substring(1, 3), i = e.substring(3, 5), n = e.substring(5, 7), r = e.substring(7, 9)) : (t = e.substring(1, 2), i = e.substring(2, 3), n = e.substring(3, 4), r = e.substring(4, 5), t += t, i += i, n += n, r += r), {
                red: parseInt(t, 16),
                green: parseInt(i, 16),
                blue: parseInt(n, 16),
                alpha: r ? parseInt(r, 16) / 255 : 1
            }
        },
        transform: u.transform
    };
    e.s(["hex", () => c], 201221);
    var d = e.i(21365);
    let h = {
        test: a("hsl", "hue"),
        parse: l("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: r,
            alpha: s = 1
        }) => "hsla(" + Math.round(e) + ", " + d.percent.transform(n(t)) + ", " + d.percent.transform(n(r)) + ", " + n(i.alpha.transform(s)) + ")"
    };
    e.s(["hsla", () => h], 192573);
    let p = {
        test: e => u.test(e) || c.test(e) || h.test(e),
        parse: e => u.test(e) ? u.parse(e) : h.test(e) ? h.parse(e) : c.parse(e),
        transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? u.transform(e) : h.transform(e),
        getAnimatableNone: e => {
            let t = p.parse(e);
            return t.alpha = 0, p.transform(t)
        }
    };
    e.s(["color", () => p], 168826);
    let m = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        f = "number",
        g = "color",
        v = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

    function y(e) {
        let t = e.toString(),
            i = [],
            n = {
                color: [],
                number: [],
                var: []
            },
            r = [],
            s = 0,
            a = t.replace(v, e => (p.test(e) ? (n.color.push(s), r.push(g), i.push(p.parse(e))) : e.startsWith("var(") ? (n.var.push(s), r.push("var"), i.push(e)) : (n.number.push(s), r.push(f), i.push(parseFloat(e))), ++s, "${}")).split("${}");
        return {
            values: i,
            split: a,
            indexes: n,
            types: r
        }
    }

    function x(e) {
        return y(e).values
    }

    function b(e) {
        let {
            split: t,
            types: i
        } = y(e), r = t.length;
        return e => {
            let s = "";
            for (let a = 0; a < r; a++)
                if (s += t[a], void 0 !== e[a]) {
                    let t = i[a];
                    t === f ? s += n(e[a]) : t === g ? s += p.transform(e[a]) : s += e[a]
                } return s
        }
    }
    let w = e => "number" == typeof e ? 0 : p.test(e) ? p.getAnimatableNone(e) : e,
        A = {
            test: function(e) {
                return isNaN(e) && "string" == typeof e && (e.match(r)?.length || 0) + (e.match(m)?.length || 0) > 0
            },
            parse: x,
            createTransformer: b,
            getAnimatableNone: function(e) {
                let t = x(e);
                return b(e)(t.map(w))
            }
        };
    e.s(["analyseComplexValue", () => y, "complex", () => A], 377149)
}, 472656, 826738, e => {
    "use strict";

    function t(e, t, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? e + (t - e) * 6 * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
    }

    function i({
        hue: e,
        saturation: i,
        lightness: n,
        alpha: r
    }) {
        e /= 360, n /= 100;
        let s = 0,
            a = 0,
            l = 0;
        if (i /= 100) {
            let r = n < .5 ? n * (1 + i) : n + i - n * i,
                o = 2 * n - r;
            s = t(o, r, e + 1 / 3), a = t(o, r, e), l = t(o, r, e - 1 / 3)
        } else s = a = l = n;
        return {
            red: Math.round(255 * s),
            green: Math.round(255 * a),
            blue: Math.round(255 * l),
            alpha: r
        }
    }

    function n(e, t) {
        return i => i > 0 ? t : e
    }
    e.s(["hslaToRgba", () => i], 472656), e.s(["mixImmediate", () => n], 826738)
}, 647480, e => {
    "use strict";
    let t = (e, t, i) => e + (t - e) * i;
    e.s(["mixNumber", () => t])
}, 728189, e => {
    "use strict";
    var t = e.i(640746),
        i = e.i(348367),
        n = e.i(242210),
        r = e.i(168826),
        s = e.i(377149),
        a = e.i(201221),
        l = e.i(192573),
        o = e.i(472656),
        u = e.i(267754),
        c = e.i(826738),
        d = e.i(647480);
    let h = (e, t, i) => {
            let n = e * e,
                r = i * (t * t - n) + n;
            return r < 0 ? 0 : Math.sqrt(r)
        },
        p = [a.hex, u.rgba, l.hsla];

    function m(e) {
        let t = p.find(t => t.test(e));
        if ((0, i.warning)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
        let n = t.parse(e);
        return t === l.hsla && (n = (0, o.hslaToRgba)(n)), n
    }
    let f = (e, t) => {
            let i = m(e),
                n = m(t);
            if (!i || !n) return (0, c.mixImmediate)(e, t);
            let r = {
                ...i
            };
            return e => (r.red = h(i.red, n.red, e), r.green = h(i.green, n.green, e), r.blue = h(i.blue, n.blue, e), r.alpha = (0, d.mixNumber)(i.alpha, n.alpha, e), u.rgba.transform(r))
        },
        g = new Set(["none", "hidden"]);

    function v(e, t) {
        return i => (0, d.mixNumber)(e, t, i)
    }

    function y(e) {
        return "number" == typeof e ? v : "string" == typeof e ? (0, n.isCSSVariableToken)(e) ? c.mixImmediate : r.color.test(e) ? f : w : Array.isArray(e) ? x : "object" == typeof e ? r.color.test(e) ? f : b : c.mixImmediate
    }

    function x(e, t) {
        let i = [...e],
            n = i.length,
            r = e.map((e, i) => y(e)(e, t[i]));
        return e => {
            for (let t = 0; t < n; t++) i[t] = r[t](e);
            return i
        }
    }

    function b(e, t) {
        let i = {
                ...e,
                ...t
            },
            n = {};
        for (let r in i) void 0 !== e[r] && void 0 !== t[r] && (n[r] = y(e[r])(e[r], t[r]));
        return e => {
            for (let t in n) i[t] = n[t](e);
            return i
        }
    }
    let w = (e, n) => {
        let r = s.complex.createTransformer(n),
            a = (0, s.analyseComplexValue)(e),
            l = (0, s.analyseComplexValue)(n);
        if (!(a.indexes.var.length === l.indexes.var.length && a.indexes.color.length === l.indexes.color.length && a.indexes.number.length >= l.indexes.number.length)) return (0, i.warning)(!0, `Complex values '${e}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), (0, c.mixImmediate)(e, n);
        if (g.has(e) && !l.values.length || g.has(n) && !a.values.length) return g.has(e) ? t => t <= 0 ? e : n : t => t >= 1 ? n : e;
        return (0, t.pipe)(x(function(e, t) {
            let i = [],
                n = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let r = 0; r < t.values.length; r++) {
                let s = t.types[r],
                    a = e.indexes[s][n[s]],
                    l = e.values[a] ?? 0;
                i[r] = l, n[s]++
            }
            return i
        }(a, l), l.values), r)
    };

    function A(e, t, i) {
        return "number" == typeof e && "number" == typeof t && "number" == typeof i ? (0, d.mixNumber)(e, t, i) : y(e)(e, t)
    }
    e.s(["mix", () => A], 728189)
}, 279126, e => {
    "use strict";
    var t = e.i(348367),
        i = e.i(483032),
        n = e.i(954912),
        r = e.i(175602),
        s = e.i(640746),
        a = e.i(747113),
        l = e.i(728189);

    function o(e, u, {
        clamp: c = !0,
        ease: d,
        mixer: h
    } = {}) {
        let p = e.length;
        if ((0, t.invariant)(p === u.length, "Both input and output ranges must be the same length", "range-length"), 1 === p) return () => u[0];
        if (2 === p && u[0] === u[1]) return () => u[1];
        let m = e[0] === e[1];
        e[0] > e[p - 1] && (e = [...e].reverse(), u = [...u].reverse());
        let f = function(e, t, i) {
                let a = [],
                    o = i || n.MotionGlobalConfig.mix || l.mix,
                    u = e.length - 1;
                for (let i = 0; i < u; i++) {
                    let n = o(e[i], e[i + 1]);
                    if (t) {
                        let e = Array.isArray(t) ? t[i] || r.noop : t;
                        n = (0, s.pipe)(e, n)
                    }
                    a.push(n)
                }
                return a
            }(u, d, h),
            g = f.length,
            v = t => {
                if (m && t < e[0]) return u[0];
                let i = 0;
                if (g > 1)
                    for (; i < e.length - 2 && !(t < e[i + 1]); i++);
                let n = (0, a.progress)(e[i], e[i + 1], t);
                return f[i](n)
            };
        return c ? t => v((0, i.clamp)(e[0], e[p - 1], t)) : v
    }
    e.s(["interpolate", () => o])
}, 668617, 91649, e => {
    "use strict";
    var t = e.i(747113),
        i = e.i(647480);

    function n(e, n) {
        let r = e[e.length - 1];
        for (let s = 1; s <= n; s++) {
            let a = (0, t.progress)(0, n, s);
            e.push((0, i.mixNumber)(r, 1, a))
        }
    }

    function r(e) {
        let t = [0];
        return n(t, e.length - 1), t
    }
    e.s(["fillOffset", () => n], 91649), e.s(["defaultOffset", () => r], 668617)
}, 361979, e => {
    "use strict";
    var t = e.i(264250);

    function i(e) {
        return (0, t.isObject)(e) && "ownerSVGElement" in e
    }
    e.s(["isSVGElement", () => i])
}, 637165, 114559, e => {
    "use strict";
    var t = e.i(361979);

    function i(e) {
        return (0, t.isSVGElement)(e) && "svg" === e.tagName
    }
    e.s(["isSVGSVGElement", () => i], 637165);
    var n = e.i(538305),
        r = e.i(134026),
        s = e.i(719625);

    function a(e, t, i) {
        let a = (0, n.isMotionValue)(e) ? e : (0, r.motionValue)(e);
        return a.start((0, s.animateMotionValue)("", a, t, i)), a.animation
    }
    e.s(["animateSingleValue", () => a], 114559)
}, 511716, e => {
    "use strict";
    var t = e.i(145158),
        i = e.i(399842),
        n = e.i(470097),
        r = e.i(494126);
    let s = (e, s) => (0, r.isSVGComponent)(e) ? new n.SVGVisualElement(s) : new i.HTMLVisualElement(s, {
        allowProjection: e !== t.Fragment
    });
    e.s(["createDomVisualElement", () => s])
}, 95517, e => {
    "use strict";
    var t = e.i(123456),
        i = e.i(75681);

    function n(e, t, i, r = 0, s = 1) {
        let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t),
            l = e.size,
            o = (l - 1) * r;
        return "function" == typeof i ? i(a, l) : 1 === s ? a * r : o - a * r
    }

    function r(e, s, a = {}) {
        let l = (0, t.resolveVariant)(e, s, "exit" === a.type ? e.presenceContext?.custom : void 0),
            {
                transition: o = e.getDefaultTransition() || {}
            } = l || {};
        a.transitionOverride && (o = a.transitionOverride);
        let u = l ? () => Promise.all((0, i.animateTarget)(e, l, a)) : () => Promise.resolve(),
            c = e.variantChildren && e.variantChildren.size ? (t = 0) => {
                let {
                    delayChildren: i = 0,
                    staggerChildren: l,
                    staggerDirection: u
                } = o;
                return function(e, t, i = 0, s = 0, a = 0, l = 1, o) {
                    let u = [];
                    for (let c of e.variantChildren) c.notify("AnimationStart", t), u.push(r(c, t, {
                        ...o,
                        delay: i + ("function" == typeof s ? 0 : s) + n(e.variantChildren, c, s, a, l)
                    }).then(() => c.notify("AnimationComplete", t)));
                    return Promise.all(u)
                }(e, s, t, i, l, u, a)
            } : () => Promise.resolve(),
            {
                when: d
            } = o;
        if (!d) return Promise.all([u(), c(a.delay)]);
        {
            let [e, t] = "beforeChildren" === d ? [u, c] : [c, u];
            return e().then(() => t())
        }
    }
    var s = e.i(682275),
        a = e.i(972171);

    function l(e, t) {
        if (!Array.isArray(t)) return !1;
        let i = t.length;
        if (i !== e.length) return !1;
        for (let n = 0; n < i; n++)
            if (t[n] !== e[n]) return !1;
        return !0
    }
    var o = e.i(430483),
        u = e.i(351380);
    let c = u.variantProps.length,
        d = [...u.variantPriorityOrder].reverse(),
        h = u.variantPriorityOrder.length;

    function p(e) {
        let p = n => Promise.all(n.map(({
                animation: n,
                options: s
            }) => (function(e, n, s = {}) {
                let a;
                if (e.notify("AnimationStart", n), Array.isArray(n)) a = Promise.all(n.map(t => r(e, t, s)));
                else if ("string" == typeof n) a = r(e, n, s);
                else {
                    let r = "function" == typeof n ? (0, t.resolveVariant)(e, n, s.custom) : n;
                    a = Promise.all((0, i.animateTarget)(e, r, s))
                }
                return a.then(() => {
                    e.notify("AnimationComplete", n)
                })
            })(e, n, s))),
            m = f(),
            g = !0,
            v = i => (n, r) => {
                let s = (0, t.resolveVariant)(e, r, "exit" === i ? e.presenceContext?.custom : void 0);
                if (s) {
                    let {
                        transition: e,
                        transitionEnd: t,
                        ...i
                    } = s;
                    n = {
                        ...n,
                        ...i,
                        ...t
                    }
                }
                return n
            };

        function y(i) {
            let {
                props: r
            } = e, f = function e(t) {
                if (!t) return;
                if (!t.isControllingVariants) {
                    let i = t.parent && e(t.parent) || {};
                    return void 0 !== t.props.initial && (i.initial = t.props.initial), i
                }
                let i = {};
                for (let e = 0; e < c; e++) {
                    let n = u.variantProps[e],
                        r = t.props[n];
                    ((0, o.isVariantLabel)(r) || !1 === r) && (i[n] = r)
                }
                return i
            }(e.parent) || {}, y = [], x = new Set, b = {}, w = 1 / 0;
            for (let u = 0; u < h; u++) {
                var A, E;
                let c = d[u],
                    h = m[c],
                    p = void 0 !== r[c] ? r[c] : f[c],
                    S = (0, o.isVariantLabel)(p),
                    P = c === i ? h.isActive : null;
                !1 === P && (w = u);
                let j = p === f[c] && p !== r[c] && S;
                if (j && g && e.manuallyAnimateOnMount && (j = !1), h.protectedKeys = {
                        ...b
                    }, !h.isActive && null === P || !p && !h.prevProp || (0, s.isAnimationControls)(p) || "boolean" == typeof p) continue;
                let N = (A = h.prevProp, "string" == typeof(E = p) ? E !== A : !!Array.isArray(E) && !l(E, A)),
                    V = N || c === i && h.isActive && !j && S || u > w && S,
                    C = !1,
                    T = Array.isArray(p) ? p : [p],
                    M = T.reduce(v(c), {});
                !1 === P && (M = {});
                let {
                    prevResolvedValues: k = {}
                } = h, F = {
                    ...k,
                    ...M
                }, L = t => {
                    V = !0, x.has(t) && (C = !0, x.delete(t)), h.needsAnimating[t] = !0;
                    let i = e.getValue(t);
                    i && (i.liveStyle = !1)
                };
                for (let e in F) {
                    let t = M[e],
                        i = k[e];
                    if (!b.hasOwnProperty(e))((0, a.isKeyframesTarget)(t) && (0, a.isKeyframesTarget)(i) ? l(t, i) : t === i) ? void 0 !== t && x.has(e) ? L(e) : h.protectedKeys[e] = !0 : null != t ? L(e) : x.add(e)
                }
                h.prevProp = p, h.prevResolvedValues = M, h.isActive && (b = {
                    ...b,
                    ...M
                }), g && e.blockInitialAnimation && (V = !1);
                let I = j && N,
                    R = !I || C;
                V && R && y.push(...T.map(i => {
                    let r = {
                        type: c
                    };
                    if ("string" == typeof i && g && !I && e.manuallyAnimateOnMount && e.parent) {
                        let {
                            parent: s
                        } = e, a = (0, t.resolveVariant)(s, i);
                        if (s.enteringChildren && a) {
                            let {
                                delayChildren: t
                            } = a.transition || {};
                            r.delay = n(s.enteringChildren, e, t)
                        }
                    }
                    return {
                        animation: i,
                        options: r
                    }
                }))
            }
            if (x.size) {
                let i = {};
                if ("boolean" != typeof r.initial) {
                    let n = (0, t.resolveVariant)(e, Array.isArray(r.initial) ? r.initial[0] : r.initial);
                    n && n.transition && (i.transition = n.transition)
                }
                x.forEach(t => {
                    let n = e.getBaseTarget(t),
                        r = e.getValue(t);
                    r && (r.liveStyle = !0), i[t] = n ?? null
                }), y.push({
                    animation: i
                })
            }
            let S = !!y.length;
            return g && (!1 === r.initial || r.initial === r.animate) && !e.manuallyAnimateOnMount && (S = !1), g = !1, S ? p(y) : Promise.resolve()
        }
        return {
            animateChanges: y,
            setActive: function(t, i) {
                if (m[t].isActive === i) return Promise.resolve();
                e.variantChildren?.forEach(e => e.animationState?.setActive(t, i)), m[t].isActive = i;
                let n = y(t);
                for (let e in m) m[e].protectedKeys = {};
                return n
            },
            setAnimateFunction: function(t) {
                p = t(e)
            },
            getState: () => m,
            reset: () => {
                m = f()
            }
        }
    }

    function m(e = !1) {
        return {
            isActive: e,
            protectedKeys: {},
            needsAnimating: {},
            prevResolvedValues: {}
        }
    }

    function f() {
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
    e.s(["createAnimationState", () => p], 95517)
}, 15310, e => {
    "use strict";
    class t {
        constructor(e) {
            this.isMounted = !1, this.node = e
        }
        update() {}
    }
    e.s(["Feature", () => t])
}, 841739, e => {
    "use strict";
    var t = e.i(682275),
        i = e.i(95517),
        n = e.i(15310);
    class r extends n.Feature {
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
    var s = n;
    let a = 0;
    class l extends s.Feature {
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
    let o = {
        animation: {
            Feature: r
        },
        exit: {
            Feature: l
        }
    };
    e.s(["animations", () => o], 841739)
}, 210681, e => {
    "use strict";
    let t = {
        x: !1,
        y: !1
    };

    function i() {
        return t.x || t.y
    }
    e.s(["isDragActive", () => i, "isDragging", () => t])
}, 151153, e => {
    "use strict";

    function t(e, i, n, r = {
        passive: !0
    }) {
        return e.addEventListener(i, n, r), () => e.removeEventListener(i, n)
    }
    e.s(["addDomEvent", () => t])
}, 829645, 414161, e => {
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
    e.s(["isPrimaryPointer", () => t], 414161);
    let n = e => n => t(n) && e(n, i(n));
    e.s(["addPointerInfo", () => n, "extractEventInfo", () => i], 829645)
}, 994216, 664356, e => {
    "use strict";
    var t = e.i(210681),
        i = e.i(369710);

    function n(e, t) {
        let n = (0, i.resolveElements)(e),
            r = new AbortController;
        return [n, {
            passive: !0,
            ...t,
            signal: r.signal
        }, () => r.abort()]
    }

    function r(e) {
        return !("touch" === e.pointerType || (0, t.isDragActive)())
    }

    function s(e, t, i = {}) {
        let [a, l, o] = n(e, i), u = e => {
            if (!r(e)) return;
            let {
                target: i
            } = e, n = t(i, e);
            if ("function" != typeof n || !i) return;
            let s = e => {
                r(e) && (n(e), i.removeEventListener("pointerleave", s))
            };
            i.addEventListener("pointerleave", s, l)
        };
        return a.forEach(e => {
            e.addEventListener("pointerenter", u, l)
        }), o
    }
    e.s(["setupGesture", () => n], 664356), e.s(["hover", () => s], 994216)
}, 798239, e => {
    "use strict";
    var t = e.i(994216),
        i = e.i(347248),
        n = e.i(829645),
        r = e.i(15310);

    function s(e, t, r) {
        let {
            props: s
        } = e;
        e.animationState && s.whileHover && e.animationState.setActive("whileHover", "Start" === r);
        let a = s["onHover" + r];
        a && i.frame.postRender(() => a(t, (0, n.extractEventInfo)(t)))
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
    e.s(["HoverGesture", () => a])
}, 411253, e => {
    "use strict";
    var t = e.i(798239),
        i = e.i(640746),
        n = e.i(151153),
        r = e.i(15310);
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
            this.unmount = (0, i.pipe)((0, n.addDomEvent)(this.node.current, "focus", () => this.onFocus()), (0, n.addDomEvent)(this.node.current, "blur", () => this.onBlur()))
        }
        unmount() {}
    }
    var a = e.i(812064),
        l = e.i(210681);
    let o = (e, t) => !!t && (e === t || o(e, t.parentElement));
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
        return (0, u.isPrimaryPointer)(e) && !(0, l.isDragActive)()
    }
    var g = e.i(347248),
        v = e.i(829645),
        y = r;

    function x(e, t, i) {
        let {
            props: n
        } = e;
        if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
        e.animationState && n.whileTap && e.animationState.setActive("whileTap", "Start" === i);
        let r = n["onTap" + ("End" === i ? "" : i)];
        r && g.frame.postRender(() => r(t, (0, v.extractEventInfo)(t)))
    }
    class b extends y.Feature {
        mount() {
            let {
                current: e
            } = this.node;
            e && (this.unmount = function(e, t, i = {}) {
                let [n, r, s] = (0, c.setupGesture)(e, i), l = e => {
                    let n = e.currentTarget;
                    if (!f(e)) return;
                    h.add(n);
                    let s = t(n, e),
                        a = (e, t) => {
                            window.removeEventListener("pointerup", l), window.removeEventListener("pointercancel", u), h.has(n) && h.delete(n), f(e) && "function" == typeof s && s(e, {
                                success: t
                            })
                        },
                        l = e => {
                            a(e, n === window || n === document || i.useGlobalTarget || o(n, e.target))
                        },
                        u = e => {
                            a(e, !1)
                        };
                    window.addEventListener("pointerup", l, r), window.addEventListener("pointercancel", u, r)
                };
                return n.forEach(e => {
                    ((i.useGlobalTarget ? window : e).addEventListener("pointerdown", l, r), (0, a.isHTMLElement)(e)) && (e.addEventListener("focus", e => ((e, t) => {
                        let i = e.currentTarget;
                        if (!i) return;
                        let n = p(() => {
                            if (h.has(i)) return;
                            m(i, "down");
                            let e = p(() => {
                                m(i, "up")
                            });
                            i.addEventListener("keyup", e, t), i.addEventListener("blur", () => m(i, "cancel"), t)
                        });
                        i.addEventListener("keydown", n, t), i.addEventListener("blur", () => i.removeEventListener("keydown", n), t)
                    })(e, r)), d.has(e.tagName) || -1 !== e.tabIndex || e.hasAttribute("tabindex") || (e.tabIndex = 0))
                }), s
            }(e, (e, t) => (x(this.node, t, "Start"), (e, {
                success: t
            }) => x(this.node, e, t ? "End" : "Cancel")), {
                useGlobalTarget: this.node.props.globalTapTarget
            }))
        }
        unmount() {}
    }
    var w = r;
    let A = new WeakMap,
        E = new WeakMap,
        S = e => {
            let t = A.get(e.target);
            t && t(e)
        },
        P = e => {
            e.forEach(S)
        },
        j = {
            some: 0,
            all: 1
        };
    class N extends w.Feature {
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
                margin: r,
                amount: s = "some",
                once: a
            } = i, l = {
                root: n ? n.current : void 0,
                rootMargin: r,
                threshold: "number" == typeof s ? s : j[s]
            }, o = e => {
                let {
                    isIntersecting: t
                } = e;
                if (this.isInView === t || (this.isInView = t, a && !t && this.hasEnteredView)) return;
                t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                let {
                    onViewportEnter: i,
                    onViewportLeave: n
                } = this.node.getProps(), r = t ? i : n;
                r && r(e)
            };
            return e = this.node.current, t = function({
                root: e,
                ...t
            }) {
                let i = e || document;
                E.has(i) || E.set(i, {});
                let n = E.get(i),
                    r = JSON.stringify(t);
                return n[r] || (n[r] = new IntersectionObserver(P, {
                    root: e,
                    ...t
                })), n[r]
            }(l), A.set(e, o), t.observe(e), () => {
                A.delete(e), t.unobserve(e)
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
    let V = {
        inView: {
            Feature: N
        },
        tap: {
            Feature: b
        },
        focus: {
            Feature: s
        },
        hover: {
            Feature: t.HoverGesture
        }
    };
    e.s(["gestureAnimations", () => V], 411253)
}, 447452, 667900, 2062, 979701, e => {
    "use strict";
    var t = e.i(615167),
        i = e.i(145158),
        n = e.i(722978),
        r = e.i(675078),
        s = e.i(825610),
        a = e.i(387660);
    let l = ({
        children: e,
        tag: i = "div",
        className: r = ""
    }) => {
        let s = (0, n.default)("loco-caption-lg-semibold mb-4", r);
        return (0, t.jsx)(i, {
            className: s,
            children: e
        })
    };
    e.s(["default", 0, l], 667900);
    var o = e.i(749583);
    let u = ({
        children: e,
        className: i = "",
        orientation: r = "horizontal"
    }) => {
        let s = (0, n.default)("flex gap-2 flex-wrap", {
            "flex-col items-start": "vertical" === r
        }, i);
        return (0, t.jsx)("div", {
            className: s,
            children: e
        })
    };
    e.s(["default", 0, u], 2062);
    var c = e.i(14452),
        d = e.i(954936),
        h = e.i(511716),
        p = e.i(395055),
        m = e.i(841739),
        f = e.i(77851),
        g = e.i(411253),
        v = e.i(592877);
    let y = {
            ...m.animations,
            ...g.gestureAnimations,
            ...f.drag,
            ...v.layout
        },
        x = (0, p.createMotionProxy)(y, h.createDomVisualElement);
    e.s(["motion", () => x], 979701);
    let b = ({
        features: e,
        transitionTime: n = 8500
    }) => {
        let [r, s] = (0, i.useState)(0), a = (0, i.useRef)(null), l = (0, i.useRef)(null), [u, c] = (0, i.useState)(!1), [d, h] = (0, i.useState)(!1), p = (0, i.useRef)(null);
        (0, i.useEffect)(() => {
            e.forEach(e => {
                e.icon && (new window.Image().src = e.icon, new window.Image().src = e.icon)
            })
        }, [e]), (0, i.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                c(e.intersectionRatio >= .8)
            }, {
                threshold: [0, .8, 1]
            });
            return l.current && e.observe(l.current), () => e.disconnect()
        }, []), (0, i.useEffect)(() => (a.current && clearTimeout(a.current), u && !d && (a.current = setTimeout(() => {
            s(t => (t + 1) % e.length)
        }, n)), () => {
            a.current && clearTimeout(a.current)
        }), [r, e.length, n, u, d]);
        let m = (0, i.useCallback)(t => {
                let i = t === r;
                s(t), h(!0);
                let a = e[t];
                a?.onCardClick && setTimeout(() => {
                    a.onCardClick?.(i)
                }, 0), p.current && clearTimeout(p.current), p.current = setTimeout(() => {
                    h(!1)
                }, n)
            }, [r, e, n]),
            f = (0, i.useCallback)((e, t) => {
                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), m(t))
            }, [m]);
        return (0, i.useEffect)(() => () => {
            p.current && clearTimeout(p.current)
        }, []), (0, t.jsx)("div", {
            ref: l,
            className: "relative inline-flex w-full flex-col items-start justify-start gap-2 self-stretch px-5 pb-6 md:px-5 md:pb-6 lg:px-0 lg:pb-0 xl:px-20",
            children: e.map((e, i) => {
                let n = i === r;
                return (0, t.jsxs)("div", {
                    "data-mobile": "true",
                    "data-show-image": n ? "true" : "false",
                    "data-state": n ? "selected" : "inactive",
                    role: "button",
                    tabIndex: 0,
                    className: `cursor-pointer self-stretch overflow-hidden rounded-lg bg-white ${n?`${e.icon?"lg:pl-36":"lg:pl-10"} p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_2px_12px_3px_rgba(0,0,0,0.04)] lg:py-8 lg:pr-10`:"p-6 lg:px-10 lg:py-6"} flex lg:inline-flex lg:items-start ${n?"flex-col":"items-center"} relative justify-start gap-2 transition-all duration-500 ease-out`,
                    onClick: () => m(i),
                    onKeyDown: e => f(e, i),
                    children: [e.icon && n && (0, t.jsx)(x.div, {
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
                    }), e.icon && n && (0, t.jsx)(x.div, {
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
                        children: [n && (0, t.jsx)(x.div, {
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
                            children: (0, t.jsx)(x.div, {
                                animate: {
                                    color: n ? "#000000" : "#374151"
                                },
                                transition: {
                                    type: "spring",
                                    duration: .3,
                                    bounce: .1
                                },
                                className: "flex-1 justify-center text-base leading-tight font-medium md:text-[20px] md:leading-[24px]",
                                children: e.title || "Untitled"
                            })
                        }), n && (0, t.jsx)(x.div, {
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
                        }), n && (0, t.jsx)(x.div, {
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
                }, i)
            })
        })
    };
    var w = e.i(783078),
        A = e.i(430215),
        E = e.i(224601),
        S = e.i(822736),
        P = e.i(751004),
        j = e.i(614909),
        N = e.i(186114);
    let V = (0, j.default)(() => e.A(969945), {
        loadableGenerated: {
            modules: [170438]
        },
        ssr: !1
    });
    e.s(["default", 0, ({
        actions: e = [],
        aspectRatio: h,
        backgroundImage: p = !1,
        description: m,
        eyebrow: f,
        image: g,
        mediaPosition: v = "right",
        size: y = "default",
        title: x,
        youtubeVideo: j,
        brandfolderVideo: C,
        videoInline: T = !1,
        buttonLabel: M = "Play Video",
        blockKey: k,
        blockedMessage: F,
        consentButtonLabel: L,
        featureList: I,
        variant: R = "default"
    }) => {
        let O = (0, A.default)(`(max-width: ${w.default.Large}px)`),
            D = (0, i.useRef)(null),
            [G, B] = (0, i.useState)(!1),
            U = (0, S.useInView)(D, {
                once: !0
            }),
            $ = (0, P.useReducedMotion)(),
            z = (0, i.useRef)({
                total: 0,
                progress: 0
            }),
            W = I && I.length > 0,
            K = !W && j?.url;
        (0, i.useEffect)(() => {
            T || B(!1)
        }, [U]);
        let _ = () => {
                B(!0)
            },
            q = (0, n.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": G && !$ && U && C?.src
            }),
            H = (0, n.default)("relative", {
                "py-10 lg:py-24": "gdc2026" === R,
                "lg:py-14": W,
                "lg:py-24": !W && "default" === y && (!h || "16:9" === h) && "gdc2026" !== R,
                "lg:py-80": !W && "large" === y && (!h || "16:9" === h),
                "lg:py-40": !W && "large" === y && "1:1" === h,
                "dark bg-gray-900 overflow-hidden": p,
                "bg-gray-100 dark:bg-black": !p && W,
                "bg-white dark:bg-black": !p && !W
            }),
            X = (0, n.default)("grid grid-flow-row grid-cols-12 place-items-center gap-4", {
                "p-4": "gdc2026" === R,
                "lg:grid-flow-col": !0,
                "lg:container": !h || "16:9" === h
            }),
            J = (0, n.default)("font-nohemi! text-gray-900 dark:text-gray-100 whitespace-pre-line", {
                "loco-text-heading-md!": "gdc2026" === R
            }),
            Y = (0, n.default)("relative w-full rounded-lg", {
                "aspect-square": "1:1" === h,
                "aspect-video": "16:9" === h,
                "overflow-hidden": !j?.url
            }),
            Q = (0, n.default)("relative col-span-12 flex h-full flex-col w-full items-center lg:items-start", {
                "lg:col-span-8": "gdc2026" === R,
                "lg:col-span-6": "gdc2026" !== R,
                "lg:col-start-1": "left" === v,
                "lg:col-start-5": "right" === v && "gdc2026" === R,
                "lg:col-start-7": "right" === v && "gdc2026" !== R,
                "order-first": !W || !O,
                "order-last": W && O
            }),
            Z = (0, n.default)("relative col-span-12 px-5 text-center lg:pb-0 lg:text-left", {
                "lg:col-span-4": "gdc2026" === R,
                "lg:col-span-5": "gdc2026" !== R,
                "pb-6": !(W && O),
                "py-6": W && O,
                "lg:col-start-9": "left" === v && "gdc2026" === R,
                "lg:col-start-8": "left" === v && "gdc2026" !== R && (!h || "16:9" === h),
                "lg:col-start-1": "right" === v && (!h || "16:9" === h),
                "lg:col-start-2": "right" === v && "1:1" === h,
                "order-first": W && O
            }),
            ee = e => {
                let t = z.current.progress / z.current.total * 100 || 0;
                (0, a.pushVideoEvent)({
                    name: e,
                    videoDuration: z.current.total,
                    videoProgress: Number(t)
                })
            };
        return (0, t.jsxs)("section", {
            className: H,
            children: [p && (0, t.jsx)(r.default, {
                src: g.src,
                alt: g.alt,
                fill: !0,
                className: "blur-2xl brightness-[0.2]"
            }), (0, t.jsxs)("div", {
                className: X,
                ref: D,
                children: [W ? (0, t.jsx)("div", {
                    className: Q,
                    children: (0, t.jsx)(b, {
                        features: I
                    })
                }) : K ? (0, t.jsx)("div", {
                    className: Q,
                    children: (0, t.jsx)("div", {
                        className: Y,
                        children: (0, t.jsx)(E.default, {
                            url: j?.url || "",
                            title: j?.title ?? "",
                            blockedMessage: F,
                            consentButtonLabel: L
                        })
                    })
                }) : (0, t.jsxs)("div", {
                    className: Q,
                    children: [(0, t.jsxs)("div", {
                        className: Y,
                        children: [U && !$ && C?.src && (0, t.jsx)(V, {
                            url: C.src,
                            playing: G,
                            loop: !!T,
                            muted: T,
                            playsinline: T,
                            width: "100%",
                            height: "100%",
                            onDuration: e => z.current.total = e,
                            onProgress: e => {
                                z.current.progress = 10 * e.played
                            },
                            className: "absolute top-0 left-0 [&>video]:object-cover",
                            onReady: () => {
                                T && B(!0)
                            },
                            controls: !T,
                            onPlay: () => ee("video_play"),
                            onPause: () => ee("video_pause"),
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        }), g.src && (0, t.jsxs)("div", {
                            className: q,
                            onClick: _,
                            children: [C?.src && !T && (0, t.jsx)(N.default, {
                                handleIsPlaying: _,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: M,
                                "data-link-location": k || s.trackingLocation.fullWidthBlockAction,
                                "data-link-id": `${k||s.trackingLocation.fullWidthBlockAction}-video-play`
                            }), (0, t.jsx)(r.default, {
                                src: g.src,
                                alt: g.alt,
                                placeholder: "blur",
                                blurDataURL: g.placeholder,
                                fill: !0
                            })]
                        })]
                    }), g.caption && (0, t.jsx)("div", {
                        className: "loco-text-body-sm-medium z-10 mt-3 mb-6 text-gray-600 lg:mb-3",
                        children: g.caption
                    })]
                }), (0, t.jsxs)("div", {
                    className: Z,
                    children: [f && (0, t.jsx)(l, {
                        className: "text-gray-900 dark:text-gray-100",
                        children: f
                    }), (0, t.jsx)(c.default, {
                        tag: "h2",
                        className: J,
                        children: x
                    }), (0, t.jsx)(d.default, {
                        className: "mb-10 text-gray-900 dark:text-gray-100",
                        children: m
                    }), (0, t.jsx)(u, {
                        className: "justify-center lg:justify-normal",
                        children: e.length > 0 && e.map((e, i) => (0, t.jsx)(o.default, {
                            variant: 0 === i ? "primary" : "secondary",
                            outlined: 0 === i,
                            size: O ? "small" : "medium",
                            rounded: !0,
                            hasArrow: !0,
                            href: e.href,
                            target: e.target,
                            "data-link-location": k ?? s.trackingLocation.fullWidthBlockAction,
                            "data-link-id": `${k??s.trackingLocation.fullWidthBlockAction}-action-${i}`,
                            children: e.label
                        }, `full-width-block-action-${i}`))
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
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "eacee51d-01dd-5f29-b2ab-c2cce555044a")
    } catch (e) {}
}();
//# debugId=eacee51d-01dd-5f29-b2ab-c2cce555044a