(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 186114, e => {
    "use strict";
    var t = e.i(615167);
    e.s(["default", 0, ({
        className: e,
        handleIsPlaying: r,
        label: i,
        ...s
    }) => (0, t.jsx)("div", {
        className: e,
        children: (0, t.jsx)("button", {
            className: "transition-bg bg-blue hover:bg-blue-dark flex h-20 w-20 transform items-center justify-center rounded-full duration-300",
            onClick: r,
            type: "button",
            "aria-label": i,
            ...s,
            children: (0, t.jsx)("span", {
                className: "block h-6 w-6",
                children: (0, t.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    fill: "none",
                    viewBox: "0 0 20 20",
                    children: (0, t.jsx)("path", {
                        fill: "#fff",
                        stroke: "#fff",
                        d: "M17.95 9.998v.004a.429.429 0 0 1-.207.37l-.004.001L6.483 17.26a.45.45 0 0 1-.456.009l-.002-.001a.44.44 0 0 1-.164-.16l-.69.404.69-.405a.44.44 0 0 1-.061-.221V3.116a.439.439 0 0 1 .225-.382l.002-.001a.45.45 0 0 1 .455.008L17.74 9.627l.003.003a.429.429 0 0 1 .208.368Z"
                    })
                })
            })
        })
    })])
}, 430215, e => {
    "use strict";
    var t = e.i(145158);
    e.s(["default", 0, e => {
        let [r, i] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            let t = window.matchMedia(e);
            t.matches !== r && i(t.matches);
            let s = () => i(t.matches);
            return window.addEventListener("resize", s), () => window.removeEventListener("resize", s)
        }, [r, e]), r
    }])
}, 751004, e => {
    "use strict";
    var t = e.i(145158),
        r = e.i(494589),
        i = e.i(998554);

    function s() {
        i.hasReducedMotionListener.current || (0, r.initPrefersReducedMotion)();
        let [e] = (0, t.useState)(i.prefersReducedMotion.current);
        return e
    }
    e.s(["useReducedMotion", () => s])
}, 494589, 998554, e => {
    "use strict";
    var t = e.i(646745);
    let r = {
            current: null
        },
        i = {
            current: !1
        };

    function s() {
        if (i.current = !0, t.isBrowser)
            if (window.matchMedia) {
                let e = window.matchMedia("(prefers-reduced-motion)"),
                    t = () => r.current = e.matches;
                e.addEventListener("change", t), t()
            } else r.current = !1
    }
    e.s(["hasReducedMotionListener", () => i, "prefersReducedMotion", () => r], 998554), e.s(["initPrefersReducedMotion", () => s], 494589)
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
        r = e.i(954912);
    let i = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"],
        s = {
            value: null,
            addProjectionMetrics: null
        };

    function a(e, t) {
        let a = !1,
            n = !0,
            l = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            },
            o = () => a = !0,
            c = i.reduce((e, r) => (e[r] = function(e, t) {
                let r = new Set,
                    i = new Set,
                    a = !1,
                    n = !1,
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
                    schedule: (e, t = !1, s = !1) => {
                        let n = s && a ? r : i;
                        return t && l.add(e), n.has(e) || n.add(e), e
                    },
                    cancel: e => {
                        i.delete(e), l.delete(e)
                    },
                    process: e => {
                        if (o = e, a) {
                            n = !0;
                            return
                        }
                        a = !0, [r, i] = [i, r], r.forEach(u), t && s.value && s.value.frameloop[t].push(c), c = 0, r.clear(), a = !1, n && (n = !1, d.process(e))
                    }
                };
                return d
            }(o, t ? r : void 0), e), {}),
            {
                setup: u,
                read: d,
                resolveKeyframes: h,
                preUpdate: f,
                update: p,
                preRender: m,
                render: g,
                postRender: x
            } = c,
            v = () => {
                let i = r.MotionGlobalConfig.useManualTiming ? l.timestamp : performance.now();
                a = !1, r.MotionGlobalConfig.useManualTiming || (l.delta = n ? 1e3 / 60 : Math.max(Math.min(i - l.timestamp, 40), 1)), l.timestamp = i, l.isProcessing = !0, u.process(l), d.process(l), h.process(l), f.process(l), p.process(l), m.process(l), g.process(l), x.process(l), l.isProcessing = !1, a && t && (n = !1, e(v))
            };
        return {
            schedule: i.reduce((t, r) => {
                let i = c[r];
                return t[r] = (t, r = !1, s = !1) => (!a && (a = !0, n = !0, l.isProcessing || e(v)), i.schedule(t, r, s)), t
            }, {}),
            cancel: e => {
                for (let t = 0; t < i.length; t++) c[i[t]].cancel(e)
            },
            state: l,
            steps: c
        }
    }
    e.s(["statsBuffer", () => s], 680124), e.s(["createRenderBatcher", () => a], 817967);
    let {
        schedule: n,
        cancel: l,
        state: o,
        steps: c
    } = a("u" > typeof requestAnimationFrame ? requestAnimationFrame : t.noop, !0);
    e.s(["cancelFrame", () => l, "frame", () => n, "frameData", () => o, "frameSteps", () => c], 347248)
}, 133639, e => {
    "use strict";

    function t(e, t) {
        -1 === e.indexOf(t) && e.push(t)
    }

    function r(e, t) {
        let r = e.indexOf(t);
        r > -1 && e.splice(r, 1)
    }
    e.s(["addUniqueItem", () => t, "removeItem", () => r])
}, 470180, e => {
    "use strict";
    var t = e.i(133639);
    class r {
        constructor() {
            this.subscriptions = []
        }
        add(e) {
            return (0, t.addUniqueItem)(this.subscriptions, e), () => (0, t.removeItem)(this.subscriptions, e)
        }
        notify(e, t, r) {
            let i = this.subscriptions.length;
            if (i)
                if (1 === i) this.subscriptions[0](e, t, r);
                else
                    for (let s = 0; s < i; s++) {
                        let i = this.subscriptions[s];
                        i && i(e, t, r)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    }
    e.s(["SubscriptionManager", () => r])
}, 795153, e => {
    "use strict";

    function t(e, t) {
        return t ? 1e3 / t * e : 0
    }
    e.s(["velocityPerSecond", () => t])
}, 924140, e => {
    "use strict";
    let t;
    var r = e.i(954912),
        i = e.i(347248);

    function s() {
        t = void 0
    }
    let a = {
        now: () => (void 0 === t && a.set(i.frameData.isProcessing || r.MotionGlobalConfig.useManualTiming ? i.frameData.timestamp : performance.now()), t),
        set: e => {
            t = e, queueMicrotask(s)
        }
    };
    e.s(["time", () => a])
}, 134026, e => {
    "use strict";
    var t = e.i(470180),
        r = e.i(795153),
        i = e.i(924140),
        s = e.i(347248);
    let a = {
        current: void 0
    };
    class n {
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
        on(e, r) {
            this.events[e] || (this.events[e] = new t.SubscriptionManager);
            let i = this.events[e].add(r);
            return "change" === e ? () => {
                i(), s.frame.read(() => {
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
            return a.current && a.current.push(this), this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            let e = i.time.now();
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

    function l(e, t) {
        return new n(e, t)
    }
    e.s(["collectMotionValues", () => a, "motionValue", () => l])
}, 348367, e => {
    "use strict";
    let t = () => {},
        r = () => {};
    e.s(["invariant", () => r, "warning", () => t])
}, 815965, 338212, e => {
    "use strict";

    function t(e) {
        let t;
        return () => (void 0 === t && (t = e()), t)
    }
    e.s(["memo", () => t], 338212);
    let r = t(() => void 0 !== window.ScrollTimeline);
    e.s(["supportsScrollTimeline", () => r], 815965)
}, 747113, e => {
    "use strict";
    let t = (e, t, r) => {
        let i = t - e;
        return 0 === i ? 1 : (r - e) / i
    };
    e.s(["progress", () => t])
}, 640746, e => {
    "use strict";
    let t = (e, t) => r => t(e(r)),
        r = (...e) => e.reduce(t);
    e.s(["pipe", () => r])
}, 377149, 801935, 267754, 201221, 192573, 168826, e => {
    "use strict";
    var t = e.i(483032),
        r = e.i(960851);
    let i = e => Math.round(1e5 * e) / 1e5,
        s = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    e.s(["floatRegex", () => s], 801935);
    let a = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        n = (e, t) => r => !!("string" == typeof r && a.test(r) && r.startsWith(e) || t && null != r && Object.prototype.hasOwnProperty.call(r, t)),
        l = (e, t, r) => i => {
            if ("string" != typeof i) return i;
            let [a, n, l, o] = i.match(s);
            return {
                [e]: parseFloat(a),
                [t]: parseFloat(n),
                [r]: parseFloat(l),
                alpha: void 0 !== o ? parseFloat(o) : 1
            }
        },
        o = {
            ...r.number,
            transform: e => Math.round((0, t.clamp)(0, 255, e))
        },
        c = {
            test: n("rgb", "red"),
            parse: l("red", "green", "blue"),
            transform: ({
                red: e,
                green: t,
                blue: s,
                alpha: a = 1
            }) => "rgba(" + o.transform(e) + ", " + o.transform(t) + ", " + o.transform(s) + ", " + i(r.alpha.transform(a)) + ")"
        };
    e.s(["rgba", () => c], 267754);
    let u = {
        test: n("#"),
        parse: function(e) {
            let t = "",
                r = "",
                i = "",
                s = "";
            return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), i = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), i = e.substring(3, 4), s = e.substring(4, 5), t += t, r += r, i += i, s += s), {
                red: parseInt(t, 16),
                green: parseInt(r, 16),
                blue: parseInt(i, 16),
                alpha: s ? parseInt(s, 16) / 255 : 1
            }
        },
        transform: c.transform
    };
    e.s(["hex", () => u], 201221);
    var d = e.i(21365);
    let h = {
        test: n("hsl", "hue"),
        parse: l("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: s,
            alpha: a = 1
        }) => "hsla(" + Math.round(e) + ", " + d.percent.transform(i(t)) + ", " + d.percent.transform(i(s)) + ", " + i(r.alpha.transform(a)) + ")"
    };
    e.s(["hsla", () => h], 192573);
    let f = {
        test: e => c.test(e) || u.test(e) || h.test(e),
        parse: e => c.test(e) ? c.parse(e) : h.test(e) ? h.parse(e) : u.parse(e),
        transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? c.transform(e) : h.transform(e),
        getAnimatableNone: e => {
            let t = f.parse(e);
            return t.alpha = 0, f.transform(t)
        }
    };
    e.s(["color", () => f], 168826);
    let p = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        m = "number",
        g = "color",
        x = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

    function v(e) {
        let t = e.toString(),
            r = [],
            i = {
                color: [],
                number: [],
                var: []
            },
            s = [],
            a = 0,
            n = t.replace(x, e => (f.test(e) ? (i.color.push(a), s.push(g), r.push(f.parse(e))) : e.startsWith("var(") ? (i.var.push(a), s.push("var"), r.push(e)) : (i.number.push(a), s.push(m), r.push(parseFloat(e))), ++a, "${}")).split("${}");
        return {
            values: r,
            split: n,
            indexes: i,
            types: s
        }
    }

    function b(e) {
        return v(e).values
    }

    function y(e) {
        let {
            split: t,
            types: r
        } = v(e), s = t.length;
        return e => {
            let a = "";
            for (let n = 0; n < s; n++)
                if (a += t[n], void 0 !== e[n]) {
                    let t = r[n];
                    t === m ? a += i(e[n]) : t === g ? a += f.transform(e[n]) : a += e[n]
                } return a
        }
    }
    let j = e => "number" == typeof e ? 0 : f.test(e) ? f.getAnimatableNone(e) : e,
        k = {
            test: function(e) {
                return isNaN(e) && "string" == typeof e && (e.match(s)?.length || 0) + (e.match(p)?.length || 0) > 0
            },
            parse: b,
            createTransformer: y,
            getAnimatableNone: function(e) {
                let t = b(e);
                return y(e)(t.map(j))
            }
        };
    e.s(["analyseComplexValue", () => v, "complex", () => k], 377149)
}, 472656, 826738, e => {
    "use strict";

    function t(e, t, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? e + (t - e) * 6 * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
    }

    function r({
        hue: e,
        saturation: r,
        lightness: i,
        alpha: s
    }) {
        e /= 360, i /= 100;
        let a = 0,
            n = 0,
            l = 0;
        if (r /= 100) {
            let s = i < .5 ? i * (1 + r) : i + r - i * r,
                o = 2 * i - s;
            a = t(o, s, e + 1 / 3), n = t(o, s, e), l = t(o, s, e - 1 / 3)
        } else a = n = l = i;
        return {
            red: Math.round(255 * a),
            green: Math.round(255 * n),
            blue: Math.round(255 * l),
            alpha: s
        }
    }

    function i(e, t) {
        return r => r > 0 ? t : e
    }
    e.s(["hslaToRgba", () => r], 472656), e.s(["mixImmediate", () => i], 826738)
}, 647480, e => {
    "use strict";
    let t = (e, t, r) => e + (t - e) * r;
    e.s(["mixNumber", () => t])
}, 405082, e => {
    "use strict";
    var t = e.i(640746),
        r = e.i(348367),
        i = e.i(242210),
        s = e.i(168826),
        a = e.i(377149),
        n = e.i(201221),
        l = e.i(192573),
        o = e.i(472656),
        c = e.i(267754),
        u = e.i(826738),
        d = e.i(647480);
    let h = (e, t, r) => {
            let i = e * e,
                s = r * (t * t - i) + i;
            return s < 0 ? 0 : Math.sqrt(s)
        },
        f = [n.hex, c.rgba, l.hsla];

    function p(e) {
        let t = f.find(t => t.test(e));
        if ((0, r.warning)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
        let i = t.parse(e);
        return t === l.hsla && (i = (0, o.hslaToRgba)(i)), i
    }
    let m = (e, t) => {
            let r = p(e),
                i = p(t);
            if (!r || !i) return (0, u.mixImmediate)(e, t);
            let s = {
                ...r
            };
            return e => (s.red = h(r.red, i.red, e), s.green = h(r.green, i.green, e), s.blue = h(r.blue, i.blue, e), s.alpha = (0, d.mixNumber)(r.alpha, i.alpha, e), c.rgba.transform(s))
        },
        g = new Set(["none", "hidden"]);

    function x(e, t) {
        return r => (0, d.mixNumber)(e, t, r)
    }

    function v(e) {
        return "number" == typeof e ? x : "string" == typeof e ? (0, i.isCSSVariableToken)(e) ? u.mixImmediate : s.color.test(e) ? m : j : Array.isArray(e) ? b : "object" == typeof e ? s.color.test(e) ? m : y : u.mixImmediate
    }

    function b(e, t) {
        let r = [...e],
            i = r.length,
            s = e.map((e, r) => v(e)(e, t[r]));
        return e => {
            for (let t = 0; t < i; t++) r[t] = s[t](e);
            return r
        }
    }

    function y(e, t) {
        let r = {
                ...e,
                ...t
            },
            i = {};
        for (let s in r) void 0 !== e[s] && void 0 !== t[s] && (i[s] = v(e[s])(e[s], t[s]));
        return e => {
            for (let t in i) r[t] = i[t](e);
            return r
        }
    }
    let j = (e, i) => {
        let s = a.complex.createTransformer(i),
            n = (0, a.analyseComplexValue)(e),
            l = (0, a.analyseComplexValue)(i);
        if (!(n.indexes.var.length === l.indexes.var.length && n.indexes.color.length === l.indexes.color.length && n.indexes.number.length >= l.indexes.number.length)) return (0, r.warning)(!0, `Complex values '${e}' and '${i}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), (0, u.mixImmediate)(e, i);
        if (g.has(e) && !l.values.length || g.has(i) && !n.values.length) return g.has(e) ? t => t <= 0 ? e : i : t => t >= 1 ? i : e;
        return (0, t.pipe)(b(function(e, t) {
            let r = [],
                i = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let s = 0; s < t.values.length; s++) {
                let a = t.types[s],
                    n = e.indexes[a][i[a]],
                    l = e.values[n] ?? 0;
                r[s] = l, i[a]++
            }
            return r
        }(n, l), l.values), s)
    };

    function k(e, t, r) {
        return "number" == typeof e && "number" == typeof t && "number" == typeof r ? (0, d.mixNumber)(e, t, r) : v(e)(e, t)
    }
    e.s(["mix", () => k], 405082)
}, 279126, e => {
    "use strict";
    var t = e.i(348367),
        r = e.i(483032),
        i = e.i(954912),
        s = e.i(175602),
        a = e.i(640746),
        n = e.i(747113),
        l = e.i(405082);

    function o(e, c, {
        clamp: u = !0,
        ease: d,
        mixer: h
    } = {}) {
        let f = e.length;
        if ((0, t.invariant)(f === c.length, "Both input and output ranges must be the same length", "range-length"), 1 === f) return () => c[0];
        if (2 === f && c[0] === c[1]) return () => c[1];
        let p = e[0] === e[1];
        e[0] > e[f - 1] && (e = [...e].reverse(), c = [...c].reverse());
        let m = function(e, t, r) {
                let n = [],
                    o = r || i.MotionGlobalConfig.mix || l.mix,
                    c = e.length - 1;
                for (let r = 0; r < c; r++) {
                    let i = o(e[r], e[r + 1]);
                    if (t) {
                        let e = Array.isArray(t) ? t[r] || s.noop : t;
                        i = (0, a.pipe)(e, i)
                    }
                    n.push(i)
                }
                return n
            }(c, d, h),
            g = m.length,
            x = t => {
                if (p && t < e[0]) return c[0];
                let r = 0;
                if (g > 1)
                    for (; r < e.length - 2 && !(t < e[r + 1]); r++);
                let i = (0, n.progress)(e[r], e[r + 1], t);
                return m[r](i)
            };
        return u ? t => x((0, r.clamp)(e[0], e[f - 1], t)) : x
    }
    e.s(["interpolate", () => o])
}, 668617, 91649, e => {
    "use strict";
    var t = e.i(747113),
        r = e.i(647480);

    function i(e, i) {
        let s = e[e.length - 1];
        for (let a = 1; a <= i; a++) {
            let n = (0, t.progress)(0, i, a);
            e.push((0, r.mixNumber)(s, 1, n))
        }
    }

    function s(e) {
        let t = [0];
        return i(t, e.length - 1), t
    }
    e.s(["fillOffset", () => i], 91649), e.s(["defaultOffset", () => s], 668617)
}, 361979, e => {
    "use strict";
    var t = e.i(264250);

    function r(e) {
        return (0, t.isObject)(e) && "ownerSVGElement" in e
    }
    e.s(["isSVGElement", () => r])
}, 789924, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(145158),
        i = e.i(278466),
        s = e.i(722978),
        a = e.i(749583),
        n = e.i(998569);
    let l = ({
            title: e,
            titleTag: l,
            description: o,
            action: c,
            fullWidth: u
        }) => {
            let [d, h] = (0, r.useState)(!1), f = "relative block border-t border-solid border-gray-200 dark:border-gray-700", p = (0, t.jsxs)("div", {
                className: (0, s.default)("grid gap-4 pt-2 pb-8 md:grid-cols-3", {
                    "md:grid-cols-[2fr_1fr_auto]": u
                }),
                children: [(0, t.jsx)(l || "h2", {
                    className: "loco-text-heading-xs",
                    children: e
                }), (0, t.jsx)("div", {
                    children: (0, t.jsx)("p", {
                        className: "loco-text-body-sm opacity-70",
                        children: o
                    })
                }), c && c?.label && (0, t.jsx)("div", {
                    className: "shrink-0 text-right",
                    children: (0, t.jsx)(a.default, {
                        tag: "span",
                        outlined: !0,
                        rounded: !0,
                        hasArrow: !0,
                        active: d,
                        children: c.label
                    })
                }), c && !c?.label && (0, t.jsx)("div", {
                    className: "flex shrink-0 justify-end text-right",
                    children: (0, t.jsx)(n.default, {
                        variant: "primary"
                    })
                })]
            });
            return c ? (0, t.jsx)(i.Link, {
                href: c.href,
                target: c.target,
                title: c.label,
                onMouseOver: () => {
                    h(!0)
                },
                onMouseLeave: () => {
                    h(!1)
                },
                className: f,
                children: p
            }) : (0, t.jsx)("div", {
                className: f,
                children: p
            })
        },
        o = ({
            theme: e = "light",
            fullWidth: r = !1,
            features: i = []
        }) => {
            let a = (0, s.default)({
                dark: "dark" === e
            });
            return (0, t.jsx)("section", {
                className: a,
                children: (0, t.jsx)("div", {
                    className: "relative px-4 py-16 lg:pt-6 lg:pb-16 dark:bg-black",
                    children: (0, t.jsx)("div", {
                        className: "mx-auto max-w-[1800px] md:grid md:grid-cols-12 md:gap-2",
                        children: i && (0, t.jsx)("div", {
                            className: (0, s.default)("col-start-1 col-end-13 row-start-3 lg:col-end-13", {
                                "lg:col-start-4": !r
                            }),
                            children: (0, t.jsx)("div", {
                                className: "lg:grid lg:grid-cols-8 lg:gap-2",
                                children: (0, t.jsx)("div", {
                                    className: "lg:col-start-1 lg:col-end-9",
                                    children: i.map((e, i) => (0, t.jsx)(l, {
                                        fullWidth: r,
                                        titleTag: "p",
                                        ...e
                                    }, `feature-list-${i}`))
                                })
                            })
                        })
                    })
                })
            })
        };
    e.s(["default", 0, ({
        theme: e,
        features: r,
        isHidden: i,
        featuresBlog: s,
        fullWidth: a
    }) => {
        let n;
        n = r?.map(e => ({
            title: e?.title || "",
            description: e?.description || "",
            action: e?.action ? {
                label: e.action.title || "",
                href: e.action.link?.linkReference?.href.current || "",
                target: e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self"
            } : null
        })) || [];
        let l = (e, t) => e?.length > t ? `${e.substring(0,t)}...` : e;
        return n?.length === 0 && (n = s?.map(e => ({
            title: e?.title || "",
            description: l(e?.seo?.teaserText, 250) || l(e?.seo?.description, 250) || "",
            action: e?.pageUrl?.link?.href?.current ? {
                label: "",
                href: e?.pageUrl?.link?.href?.current || "",
                target: e?.pageUrl?.link?.target === "_blank" ? "_blank" : "_self"
            } : null
        })) || []), (0, t.jsx)(t.Fragment, {
            children: !i && (0, t.jsx)(o, {
                theme: "dark" === e ? "dark" : "light",
                features: n,
                fullWidth: a
            })
        })
    }], 789924)
}, 14452, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(722978);
    e.s(["default", 0, ({
        children: e,
        className: i = "",
        tag: s = "div"
    }) => {
        let a = (0, r.default)("loco-text-heading-sm mb-4", i);
        return (0, t.jsx)(s, {
            className: a,
            children: e
        })
    }], 14452)
}, 979701, e => {
    "use strict";
    var t = e.i(511716),
        r = e.i(395055),
        i = e.i(841739),
        s = e.i(77851),
        a = e.i(411253),
        n = e.i(592877);
    let l = {
            ...i.animations,
            ...a.gestureAnimations,
            ...s.drag,
            ...n.layout
        },
        o = (0, r.createMotionProxy)(l, t.createDomVisualElement);
    e.s(["motion", () => o], 979701)
}, 447452, 667900, 2062, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(145158),
        i = e.i(722978),
        s = e.i(675078),
        a = e.i(825610),
        n = e.i(387660);
    let l = ({
        children: e,
        tag: r = "div",
        className: s = ""
    }) => {
        let a = (0, i.default)("loco-caption-lg-semibold mb-4", s);
        return (0, t.jsx)(r, {
            className: a,
            children: e
        })
    };
    e.s(["default", 0, l], 667900);
    var o = e.i(749583);
    let c = ({
        children: e,
        className: r = "",
        orientation: s = "horizontal"
    }) => {
        let a = (0, i.default)("flex gap-2 flex-wrap", {
            "flex-col items-start": "vertical" === s
        }, r);
        return (0, t.jsx)("div", {
            className: a,
            children: e
        })
    };
    e.s(["default", 0, c], 2062);
    var u = e.i(14452),
        d = e.i(954936),
        h = e.i(979701);
    let f = ({
        features: e,
        transitionTime: i = 8500
    }) => {
        let [s, a] = (0, r.useState)(0), n = (0, r.useRef)(null), l = (0, r.useRef)(null), [c, u] = (0, r.useState)(!1), [d, f] = (0, r.useState)(!1), p = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
            e.forEach(e => {
                e.icon && (new window.Image().src = e.icon, new window.Image().src = e.icon)
            })
        }, [e]), (0, r.useEffect)(() => {
            let e = new IntersectionObserver(([e]) => {
                u(e.intersectionRatio >= .8)
            }, {
                threshold: [0, .8, 1]
            });
            return l.current && e.observe(l.current), () => e.disconnect()
        }, []), (0, r.useEffect)(() => (n.current && clearTimeout(n.current), c && !d && (n.current = setTimeout(() => {
            a(t => (t + 1) % e.length)
        }, i)), () => {
            n.current && clearTimeout(n.current)
        }), [s, e.length, i, c, d]);
        let m = (0, r.useCallback)(t => {
                let r = t === s;
                a(t), f(!0);
                let n = e[t];
                n?.onCardClick && setTimeout(() => {
                    n.onCardClick?.(r)
                }, 0), p.current && clearTimeout(p.current), p.current = setTimeout(() => {
                    f(!1)
                }, i)
            }, [s, e, i]),
            g = (0, r.useCallback)((e, t) => {
                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), m(t))
            }, [m]);
        return (0, r.useEffect)(() => () => {
            p.current && clearTimeout(p.current)
        }, []), (0, t.jsx)("div", {
            ref: l,
            className: "relative inline-flex w-full flex-col items-start justify-start gap-2 self-stretch px-5 pb-6 md:px-5 md:pb-6 lg:px-0 lg:pb-0 xl:px-20",
            children: e.map((e, r) => {
                let i = r === s;
                return (0, t.jsxs)("div", {
                    "data-mobile": "true",
                    "data-show-image": i ? "true" : "false",
                    "data-state": i ? "selected" : "inactive",
                    role: "button",
                    tabIndex: 0,
                    className: `cursor-pointer self-stretch overflow-hidden rounded-lg bg-white ${i?`${e.icon?"lg:pl-36":"lg:pl-10"} p-6 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.04),0px_2px_12px_3px_rgba(0,0,0,0.04)] lg:py-8 lg:pr-10`:"p-6 lg:px-10 lg:py-6"} flex lg:inline-flex lg:items-start ${i?"flex-col":"items-center"} relative justify-start gap-2 transition-all duration-500 ease-out`,
                    onClick: () => m(r),
                    onKeyDown: e => g(e, r),
                    children: [e.icon && i && (0, t.jsx)(h.motion.div, {
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
                    }), e.icon && i && (0, t.jsx)(h.motion.div, {
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
                        children: [i && (0, t.jsx)(h.motion.div, {
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
                            children: (0, t.jsx)(h.motion.div, {
                                animate: {
                                    color: i ? "#000000" : "#374151"
                                },
                                transition: {
                                    type: "spring",
                                    duration: .3,
                                    bounce: .1
                                },
                                className: "flex-1 justify-center text-base leading-tight font-medium md:text-[20px] md:leading-[24px]",
                                children: e.title || "Untitled"
                            })
                        }), i && (0, t.jsx)(h.motion.div, {
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
                        }), i && (0, t.jsx)(h.motion.div, {
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
                }, r)
            })
        })
    };
    var p = e.i(783078),
        m = e.i(430215),
        g = e.i(224601),
        x = e.i(822736),
        v = e.i(751004),
        b = e.i(614909),
        y = e.i(186114);
    let j = (0, b.default)(() => e.A(969945), {
        loadableGenerated: {
            modules: [170438]
        },
        ssr: !1
    });
    e.s(["default", 0, ({
        actions: e = [],
        aspectRatio: h,
        backgroundImage: b = !1,
        description: k,
        eyebrow: w,
        image: N,
        mediaPosition: M = "right",
        size: A = "default",
        title: C,
        youtubeVideo: R,
        brandfolderVideo: S,
        videoInline: P = !1,
        buttonLabel: _ = "Play Video",
        blockKey: V,
        blockedMessage: L,
        consentButtonLabel: T,
        featureList: E,
        variant: F = "default"
    }) => {
        let I = (0, m.default)(`(max-width: ${p.default.Large}px)`),
            $ = (0, r.useRef)(null),
            [U, B] = (0, r.useState)(!1),
            O = (0, x.useInView)($, {
                once: !0
            }),
            z = (0, v.useReducedMotion)(),
            D = (0, r.useRef)({
                total: 0,
                progress: 0
            }),
            q = E && E.length > 0,
            W = !q && R?.url;
        (0, r.useEffect)(() => {
            P || B(!1)
        }, [O]);
        let G = () => {
                B(!0)
            },
            K = (0, i.default)("top-0 left-0 h-full w-full absolute z-10 transition-opacity duration-500 object-cover", {
                "opacity-0 pointer-events-none": U && !z && O && S?.src
            }),
            H = (0, i.default)("relative", {
                "py-10 lg:py-24": "gdc2026" === F,
                "lg:py-14": q,
                "lg:py-24": !q && "default" === A && (!h || "16:9" === h) && "gdc2026" !== F,
                "lg:py-80": !q && "large" === A && (!h || "16:9" === h),
                "lg:py-40": !q && "large" === A && "1:1" === h,
                "dark bg-gray-900 overflow-hidden": b,
                "bg-gray-100 dark:bg-black": !b && q,
                "bg-white dark:bg-black": !b && !q
            }),
            Z = (0, i.default)("grid grid-flow-row grid-cols-12 place-items-center gap-4", {
                "p-4": "gdc2026" === F,
                "lg:grid-flow-col": !0,
                "lg:container": !h || "16:9" === h
            }),
            J = (0, i.default)("font-nohemi! text-gray-900 dark:text-gray-100 whitespace-pre-line", {
                "loco-text-heading-md!": "gdc2026" === F
            }),
            Q = (0, i.default)("relative w-full rounded-lg", {
                "aspect-square": "1:1" === h,
                "aspect-video": "16:9" === h,
                "overflow-hidden": !R?.url
            }),
            X = (0, i.default)("relative col-span-12 flex h-full flex-col w-full items-center lg:items-start", {
                "lg:col-span-8": "gdc2026" === F,
                "lg:col-span-6": "gdc2026" !== F,
                "lg:col-start-1": "left" === M,
                "lg:col-start-5": "right" === M && "gdc2026" === F,
                "lg:col-start-7": "right" === M && "gdc2026" !== F,
                "order-first": !q || !I,
                "order-last": q && I
            }),
            Y = (0, i.default)("relative col-span-12 px-5 text-center lg:pb-0 lg:text-left", {
                "lg:col-span-4": "gdc2026" === F,
                "lg:col-span-5": "gdc2026" !== F,
                "pb-6": !(q && I),
                "py-6": q && I,
                "lg:col-start-9": "left" === M && "gdc2026" === F,
                "lg:col-start-8": "left" === M && "gdc2026" !== F && (!h || "16:9" === h),
                "lg:col-start-1": "right" === M && (!h || "16:9" === h),
                "lg:col-start-2": "right" === M && "1:1" === h,
                "order-first": q && I
            }),
            ee = e => {
                let t = D.current.progress / D.current.total * 100 || 0;
                (0, n.pushVideoEvent)({
                    name: e,
                    videoDuration: D.current.total,
                    videoProgress: Number(t)
                })
            };
        return (0, t.jsxs)("section", {
            className: H,
            children: [b && (0, t.jsx)(s.default, {
                src: N.src,
                alt: N.alt,
                fill: !0,
                className: "blur-2xl brightness-[0.2]"
            }), (0, t.jsxs)("div", {
                className: Z,
                ref: $,
                children: [q ? (0, t.jsx)("div", {
                    className: X,
                    children: (0, t.jsx)(f, {
                        features: E
                    })
                }) : W ? (0, t.jsx)("div", {
                    className: X,
                    children: (0, t.jsx)("div", {
                        className: Q,
                        children: (0, t.jsx)(g.default, {
                            url: R?.url || "",
                            title: R?.title ?? "",
                            blockedMessage: L,
                            consentButtonLabel: T
                        })
                    })
                }) : (0, t.jsxs)("div", {
                    className: X,
                    children: [(0, t.jsxs)("div", {
                        className: Q,
                        children: [O && !z && S?.src && (0, t.jsx)(j, {
                            url: S.src,
                            playing: U,
                            loop: !!P,
                            muted: P,
                            playsinline: P,
                            width: "100%",
                            height: "100%",
                            onDuration: e => D.current.total = e,
                            onProgress: e => {
                                D.current.progress = 10 * e.played
                            },
                            className: "absolute top-0 left-0 [&>video]:object-cover",
                            onReady: () => {
                                P && B(!0)
                            },
                            controls: !P,
                            onPlay: () => ee("video_play"),
                            onPause: () => ee("video_pause"),
                            config: {
                                hlsOptions: {
                                    maxMaxBufferLength: 1,
                                    startLevel: 1
                                }
                            }
                        }), N.src && (0, t.jsxs)("div", {
                            className: K,
                            onClick: G,
                            children: [S?.src && !P && (0, t.jsx)(y.default, {
                                handleIsPlaying: G,
                                className: "absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2",
                                label: _,
                                "data-link-location": V || a.trackingLocation.fullWidthBlockAction,
                                "data-link-id": `${V||a.trackingLocation.fullWidthBlockAction}-video-play`
                            }), (0, t.jsx)(s.default, {
                                src: N.src,
                                alt: N.alt,
                                placeholder: "blur",
                                blurDataURL: N.placeholder,
                                fill: !0
                            })]
                        })]
                    }), N.caption && (0, t.jsx)("div", {
                        className: "loco-text-body-sm-medium z-10 mt-3 mb-6 text-gray-600 lg:mb-3",
                        children: N.caption
                    })]
                }), (0, t.jsxs)("div", {
                    className: Y,
                    children: [w && (0, t.jsx)(l, {
                        className: "text-gray-900 dark:text-gray-100",
                        children: w
                    }), (0, t.jsx)(u.default, {
                        tag: "h2",
                        className: J,
                        children: C
                    }), (0, t.jsx)(d.default, {
                        className: "mb-10 text-gray-900 dark:text-gray-100",
                        children: k
                    }), (0, t.jsx)(c, {
                        className: "justify-center lg:justify-normal",
                        children: e.length > 0 && e.map((e, r) => (0, t.jsx)(o.default, {
                            variant: 0 === r ? "primary" : "secondary",
                            outlined: 0 === r,
                            size: I ? "small" : "medium",
                            rounded: !0,
                            hasArrow: !0,
                            href: e.href,
                            target: e.target,
                            "data-link-location": V ?? a.trackingLocation.fullWidthBlockAction,
                            "data-link-id": `${V??a.trackingLocation.fullWidthBlockAction}-action-${r}`,
                            children: e.label
                        }, `full-width-block-action-${r}`))
                    })]
                })]
            })]
        })
    }], 447452)
}, 649042, e => {
    "use strict";
    var t = e.i(615167),
        r = e.i(145158),
        i = e.i(78389),
        s = e.i(447452),
        a = e.i(775041),
        n = e.i(779712),
        l = e.i(869324);
    e.s(["default", 0, ({
        actions: e,
        backgroundImage: o,
        description: c,
        eyebrow: u,
        image: d,
        mediaAspectRatio: h,
        mediaPosition: f,
        size: p,
        variant: m,
        title: g,
        theme: x,
        youtubeVideo: v,
        brandfolderVideo: b,
        buttonLabel: y,
        videoInline: j,
        blockKey: k,
        isHidden: w,
        consent: N,
        featureList: M,
        productCategoryFilter: A
    }) => {
        let [C] = (0, r.useContext)(a.FiltersContext);
        if (C.categories && C.categories.length > 0 && 1 === C.categories.findIndex(({
                _id: e
            }) => e === C.selectedCategory) && null != C.selectedSubcategory) return null;
        let {
            subcategories: R,
            productCatalogItems: S
        } = C.categories.find(({
            _id: e
        }) => e === C.selectedCategory) || {}, P = null != C.selectedSubcategory ? (R || []).find(({
            _id: e
        }) => e === C.selectedSubcategory) : null, _ = !A || A.categories?.find(e => e._id === C.selectedCategory) != null && (null == P || !A.subcategories || A.subcategories.some(({
            _id: e
        }) => e === C.selectedSubcategory)), V = e?.map(({
            title: e,
            link: t
        }) => {
            let r = t?.linkReference?.target === "_blank" ? "_blank" : "_self";
            return {
                label: e,
                href: t?.linkReference?.href.current || "/",
                target: r
            }
        }), L = M?.map((e, t) => {
            let r;
            return {
                eyebrow: e.eyebrow || "",
                title: e.title || "",
                description: e.description || "",
                action: e.action ? (r = e.action.link?.linkReference?.target === "_blank" ? "_blank" : "_self", {
                    label: e.action.title || "",
                    href: e.action.link?.linkReference?.href.current || "#",
                    target: r
                }) : {
                    label: "",
                    href: "#"
                },
                icon: e.icon?.asset?.url || "",
                onCardClick: e => ((e, t) => {
                    if (!t && M?.[e]) {
                        let t = M[e];
                        (0, l.default)({
                            event: "userEvent",
                            event_name: "navigation_click",
                            properties: {
                                navigation_click_text: t.title || "",
                                link_type: "feature list item",
                                form_name: t.title || "",
                                form_id: `list-item-${e}`,
                                block_title: g
                            }
                        })
                    }
                })(t, e)
            }
        });
        return (0, t.jsx)(t.Fragment, {
            children: !w && _ && (0, t.jsx)("section", {
                className: "dark" === x ? "dark" : "",
                children: (0, t.jsx)(s.default, {
                    actions: V,
                    aspectRatio: "16:9" === h ? "16:9" : "1:1" === h ? "1:1" : void 0,
                    backgroundImage: o,
                    description: (0, t.jsx)(i.PortableText, {
                        value: c
                    }),
                    eyebrow: u,
                    image: {
                        src: (0, n.urlForImage)(d?.file?.asset?.url || "")?.auto("format")?.url() || "",
                        placeholder: d?.file?.asset.metadata?.lqip || "",
                        alt: d?.alt || "",
                        caption: d?.caption || ""
                    },
                    mediaPosition: "right" === f ? "right" : "left" === f ? "left" : void 0,
                    size: "large" === p ? "large" : "default" === p ? "default" : void 0,
                    variant: "gdc2026" === m ? "gdc2026" : "default" === m ? "default" : void 0,
                    title: g,
                    youtubeVideo: v,
                    brandfolderVideo: {
                        src: b?.muxHLSURL || ""
                    },
                    videoInline: j,
                    buttonLabel: y,
                    blockKey: k,
                    blockedMessage: N?.blockedMessage,
                    consentButtonLabel: N?.consentButtonLabel || "",
                    featureList: L
                })
            })
        })
    }], 649042)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "debc5c0a-cd17-5d16-ae53-1999d394951d")
    } catch (e) {}
}();
//# debugId=debc5c0a-cd17-5d16-ae53-1999d394951d