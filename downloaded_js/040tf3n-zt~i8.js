(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 382053, e => {
    "use strict";
    let t = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
        i = new Set([...t, "pathRotation"]);
    e.s(["transformPropOrder", 0, t, "transformProps", 0, i])
}, 508983, e => {
    "use strict";
    e.s(["clamp", 0, (e, t, i) => i > t ? t : i < e ? e : i])
}, 162158, 243392, 613140, 439327, 752934, 561497, 87436, 53768, e => {
    "use strict";
    var t = e.i(508983);
    let i = {
            test: e => "number" == typeof e,
            parse: parseFloat,
            transform: e => e
        },
        s = {
            ...i,
            transform: e => (0, t.clamp)(0, 1, e)
        },
        n = {
            ...i,
            default: 1
        };
    e.s(["alpha", 0, s, "number", 0, i, "scale", 0, n], 243392);
    let r = e => Math.round(1e5 * e) / 1e5,
        a = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
    e.s(["floatRegex", 0, a], 613140);
    let o = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
        l = (e, t) => i => !!("string" == typeof i && o.test(i) && i.startsWith(e) || t && null != i && Object.prototype.hasOwnProperty.call(i, t)),
        u = (e, t, i) => s => {
            if ("string" != typeof s) return s;
            let [n, r, o, l] = s.match(a);
            return {
                [e]: parseFloat(n),
                [t]: parseFloat(r),
                [i]: parseFloat(o),
                alpha: void 0 !== l ? parseFloat(l) : 1
            }
        },
        h = {
            ...i,
            transform: e => Math.round((0, t.clamp)(0, 255, e))
        },
        c = {
            test: l("rgb", "red"),
            parse: u("red", "green", "blue"),
            transform: ({
                red: e,
                green: t,
                blue: i,
                alpha: n = 1
            }) => "rgba(" + h.transform(e) + ", " + h.transform(t) + ", " + h.transform(i) + ", " + r(s.transform(n)) + ")"
        };
    e.s(["rgba", 0, c], 439327);
    let d = {
        test: l("#"),
        parse: function(e) {
            let t = "",
                i = "",
                s = "",
                n = "";
            return e.length > 5 ? (t = e.substring(1, 3), i = e.substring(3, 5), s = e.substring(5, 7), n = e.substring(7, 9)) : (t = e.substring(1, 2), i = e.substring(2, 3), s = e.substring(3, 4), n = e.substring(4, 5), t += t, i += i, s += s, n += n), {
                red: parseInt(t, 16),
                green: parseInt(i, 16),
                blue: parseInt(s, 16),
                alpha: n ? parseInt(n, 16) / 255 : 1
            }
        },
        transform: c.transform
    };
    e.s(["hex", 0, d], 752934);
    let p = e => ({
            test: t => "string" == typeof t && t.endsWith(e) && 1 === t.split(" ").length,
            parse: parseFloat,
            transform: t => `${t}${e}`
        }),
        m = p("deg"),
        f = p("%"),
        v = p("px"),
        g = p("vh"),
        y = p("vw"),
        b = {
            ...f,
            parse: e => f.parse(e) / 100,
            transform: e => f.transform(100 * e)
        };
    e.s(["degrees", 0, m, "percent", 0, f, "progressPercentage", 0, b, "px", 0, v, "vh", 0, g, "vw", 0, y], 561497);
    let x = {
        test: l("hsl", "hue"),
        parse: u("hue", "saturation", "lightness"),
        transform: ({
            hue: e,
            saturation: t,
            lightness: i,
            alpha: n = 1
        }) => "hsla(" + Math.round(e) + ", " + f.transform(r(t)) + ", " + f.transform(r(i)) + ", " + r(s.transform(n)) + ")"
    };
    e.s(["hsla", 0, x], 87436);
    let T = {
        test: e => c.test(e) || d.test(e) || x.test(e),
        parse: e => c.test(e) ? c.parse(e) : x.test(e) ? x.parse(e) : d.parse(e),
        transform: e => "string" == typeof e ? e : e.hasOwnProperty("red") ? c.transform(e) : x.transform(e),
        getAnimatableNone: e => {
            let t = T.parse(e);
            return t.alpha = 0, T.transform(t)
        }
    };
    e.s(["color", 0, T], 162158);
    let V = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
        S = "number",
        w = "color",
        M = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;

    function A(e) {
        let t = e.toString(),
            i = [],
            s = {
                color: [],
                number: [],
                var: []
            },
            n = [],
            r = 0,
            a = t.replace(M, e => (T.test(e) ? (s.color.push(r), n.push(w), i.push(T.parse(e))) : e.startsWith("var(") ? (s.var.push(r), n.push("var"), i.push(e)) : (s.number.push(r), n.push(S), i.push(parseFloat(e))), ++r, "${}")).split("${}");
        return {
            values: i,
            split: a,
            indexes: s,
            types: n
        }
    }

    function C({
        split: e,
        types: t
    }) {
        let i = e.length;
        return s => {
            let n = "";
            for (let a = 0; a < i; a++)
                if (n += e[a], void 0 !== s[a]) {
                    let e = t[a];
                    e === S ? n += r(s[a]) : e === w ? n += T.transform(s[a]) : n += s[a]
                } return n
        }
    }
    e.s(["analyseComplexValue", 0, A, "complex", 0, {
        test: function(e) {
            return isNaN(e) && "string" == typeof e && (e.match(a)?.length || 0) + (e.match(V)?.length || 0) > 0
        },
        parse: function(e) {
            return A(e).values
        },
        createTransformer: function(e) {
            return C(A(e))
        },
        getAnimatableNone: function(e) {
            let t = A(e);
            return C(t)(t.values.map((e, i) => ((e, t) => "number" == typeof e ? t?.trim().endsWith("/") ? e : 0 : "number" == typeof e ? 0 : T.test(e) ? T.getAnimatableNone(e) : e)(e, t.split[i])))
        }
    }], 53768)
}, 685319, 325144, 900162, 426445, e => {
    "use strict";
    var t = e.i(162158),
        i = e.i(53768),
        s = e.i(613140);
    let n = new Set(["brightness", "contrast", "saturate", "opacity"]);

    function r(e) {
        let [t, i] = e.slice(0, -1).split("(");
        if ("drop-shadow" === t) return e;
        let [r] = i.match(s.floatRegex) || [];
        if (!r) return e;
        let a = i.replace(r, ""),
            o = +!!n.has(t);
        return r !== i && (o *= 100), t + "(" + o + a + ")"
    }
    let a = /\b([a-z-]*)\(.*?\)/gu,
        o = {
            ...i.complex,
            getAnimatableNone: e => {
                let t = e.match(a);
                return t ? t.map(r).join(" ") : e
            }
        };
    e.s(["filter", 0, o], 325144);
    let l = {
        ...i.complex,
        getAnimatableNone: e => {
            let t = i.complex.parse(e);
            return i.complex.createTransformer(e)(t.map(e => "number" == typeof e ? 0 : "object" == typeof e ? {
                ...e,
                alpha: 1
            } : e))
        }
    };
    e.s(["mask", 0, l], 900162);
    var u = e.i(243392);
    let h = {
        ...u.number,
        transform: Math.round
    };
    var c = e.i(561497);
    let d = {
            rotate: c.degrees,
            pathRotation: c.degrees,
            rotateX: c.degrees,
            rotateY: c.degrees,
            rotateZ: c.degrees,
            scale: u.scale,
            scaleX: u.scale,
            scaleY: u.scale,
            scaleZ: u.scale,
            skew: c.degrees,
            skewX: c.degrees,
            skewY: c.degrees,
            distance: c.px,
            translateX: c.px,
            translateY: c.px,
            translateZ: c.px,
            x: c.px,
            y: c.px,
            z: c.px,
            perspective: c.px,
            transformPerspective: c.px,
            opacity: u.alpha,
            originX: c.progressPercentage,
            originY: c.progressPercentage,
            originZ: c.px
        },
        p = {
            borderWidth: c.px,
            borderTopWidth: c.px,
            borderRightWidth: c.px,
            borderBottomWidth: c.px,
            borderLeftWidth: c.px,
            borderRadius: c.px,
            borderTopLeftRadius: c.px,
            borderTopRightRadius: c.px,
            borderBottomRightRadius: c.px,
            borderBottomLeftRadius: c.px,
            width: c.px,
            maxWidth: c.px,
            height: c.px,
            maxHeight: c.px,
            top: c.px,
            right: c.px,
            bottom: c.px,
            left: c.px,
            inset: c.px,
            insetBlock: c.px,
            insetBlockStart: c.px,
            insetBlockEnd: c.px,
            insetInline: c.px,
            insetInlineStart: c.px,
            insetInlineEnd: c.px,
            padding: c.px,
            paddingTop: c.px,
            paddingRight: c.px,
            paddingBottom: c.px,
            paddingLeft: c.px,
            paddingBlock: c.px,
            paddingBlockStart: c.px,
            paddingBlockEnd: c.px,
            paddingInline: c.px,
            paddingInlineStart: c.px,
            paddingInlineEnd: c.px,
            margin: c.px,
            marginTop: c.px,
            marginRight: c.px,
            marginBottom: c.px,
            marginLeft: c.px,
            marginBlock: c.px,
            marginBlockStart: c.px,
            marginBlockEnd: c.px,
            marginInline: c.px,
            marginInlineStart: c.px,
            marginInlineEnd: c.px,
            fontSize: c.px,
            backgroundPositionX: c.px,
            backgroundPositionY: c.px,
            ...d,
            zIndex: h,
            fillOpacity: u.alpha,
            strokeOpacity: u.alpha,
            numOctaves: h
        };
    e.s(["numberValueTypes", 0, p], 426445);
    let m = {
        ...p,
        color: t.color,
        backgroundColor: t.color,
        outlineColor: t.color,
        fill: t.color,
        stroke: t.color,
        borderColor: t.color,
        borderTopColor: t.color,
        borderRightColor: t.color,
        borderBottomColor: t.color,
        borderLeftColor: t.color,
        filter: o,
        WebkitFilter: o,
        mask: l,
        WebkitMask: l
    };
    e.s(["getDefaultValueType", 0, e => m[e]], 685319)
}, 301219, e => {
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
}, 140926, e => {
    "use strict";
    e.s(["isMotionValue", 0, e => !!(e && e.getVelocity)])
}, 470442, e => {
    "use strict";
    let t = new Set(["width", "height", "top", "left", "right", "bottom", ...e.i(382053).transformPropOrder]);
    e.s(["positionalKeys", 0, t])
}, 991053, 219387, e => {
    "use strict";
    var t = e.i(243392),
        i = e.i(561497);
    let s = e => t => t.test(e);
    e.s(["testValueType", 0, s], 219387);
    let n = [t.number, i.px, i.percent, i.degrees, i.vw, i.vh, {
        test: e => "auto" === e,
        parse: e => e
    }];
    e.s(["dimensionValueTypes", 0, n, "findDimensionValueType", 0, e => n.find(s(e))], 991053)
}, 725542, e => {
    "use strict";
    e.i(203217).default, e.s(["invariant", 0, () => {}, "warning", 0, () => {}], 725542)
}, 423796, e => {
    "use strict";
    e.s(["isNumericalString", 0, e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)])
}, 133071, e => {
    "use strict";
    let t = e => t => "string" == typeof t && t.startsWith(e),
        i = t("--"),
        s = t("var(--"),
        n = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
    e.s(["containsCSSVariable", 0, function(e) {
        return "string" == typeof e && e.split("/*")[0].includes("var(--")
    }, "isCSSVariableName", 0, i, "isCSSVariableToken", 0, e => !!s(e) && n.test(e.split("/*")[0].trim())])
}, 62843, e => {
    "use strict";
    var t = e.i(725542),
        i = e.i(423796),
        s = e.i(133071);
    let n = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
    e.s(["getVariableValue", 0, function e(r, a, o = 1) {
        (0, t.invariant)(o <= 4, `Max CSS variable fallback depth detected in property "${r}". This may indicate a circular fallback dependency.`, "max-css-var-depth");
        let [l, u] = function(e) {
            let t = n.exec(e);
            if (!t) return [, ];
            let [, i, s, r] = t;
            return [`--${i??s}`, r]
        }(r);
        if (!l) return;
        let h = window.getComputedStyle(a).getPropertyValue(l);
        if (h) {
            let e = h.trim();
            return (0, i.isNumericalString)(e) ? parseFloat(e) : e
        }
        return (0, s.isCSSVariableToken)(u) ? e(u, a, o + 1) : u
    }])
}, 824995, 104024, e => {
    "use strict";
    e.s(["fillWildcards", 0, function(e) {
        for (let t = 1; t < e.length; t++) e[t] ?? (e[t] = e[t - 1])
    }], 824995);
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
        let r = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
        if (r) i = o, n = r;
        else {
            let t = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
            i = s, n = t
        }
        if (!n) return l(t);
        let a = i[t],
            u = n[1].split(",").map(h);
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
    }], 104024)
}, 788761, e => {
    "use strict";
    var t = e.i(104024),
        i = e.i(382053),
        s = e.i(243392),
        n = e.i(561497);
    let r = new Set(["x", "y", "z"]),
        a = i.transformPropOrder.filter(e => !r.has(e)),
        o = {
            width: ({
                x: e
            }, {
                paddingLeft: t = "0",
                paddingRight: i = "0",
                boxSizing: s
            }) => {
                let n = e.max - e.min;
                return "border-box" === s ? n : n - parseFloat(t) - parseFloat(i)
            },
            height: ({
                y: e
            }, {
                paddingTop: t = "0",
                paddingBottom: i = "0",
                boxSizing: s
            }) => {
                let n = e.max - e.min;
                return "border-box" === s ? n : n - parseFloat(t) - parseFloat(i)
            },
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
                transform: i
            }) => (0, t.parseValueFromTransform)(i, "x"),
            y: (e, {
                transform: i
            }) => (0, t.parseValueFromTransform)(i, "y")
        };
    o.translateX = o.x, o.translateY = o.y, e.s(["isNumOrPxType", 0, e => e === s.number || e === n.px, "positionalValues", 0, o, "removeNonTranslationalTransform", 0, function(e) {
        let t = [];
        return a.forEach(i => {
            let s = e.getValue(i);
            void 0 !== s && (t.push([i, s.get()]), s.set(+!!i.startsWith("scale")))
        }), t
    }])
}, 120194, e => {
    "use strict";
    e.s(["noop", 0, e => e])
}, 719372, e => {
    "use strict";
    e.s(["MotionGlobalConfig", 0, {}])
}, 683669, e => {
    "use strict";
    var t = e.i(719372);
    let i = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
    e.s(["createRenderBatcher", 0, function(e, s) {
        let n = !1,
            r = !0,
            a = {
                delta: 0,
                timestamp: 0,
                isProcessing: !1
            },
            o = () => n = !0,
            l = i.reduce((e, t) => (e[t] = function(e) {
                let t = new Set,
                    i = new Set,
                    s = !1,
                    n = !1,
                    r = new WeakSet,
                    a = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    };

                function o(t) {
                    r.has(t) && (l.schedule(t), e()), t(a)
                }
                let l = {
                    schedule: (e, n = !1, a = !1) => {
                        let o = a && s ? t : i;
                        return n && r.add(e), o.add(e), e
                    },
                    cancel: e => {
                        i.delete(e), r.delete(e)
                    },
                    process: e => {
                        if (a = e, s) {
                            n = !0;
                            return
                        }
                        s = !0;
                        let r = t;
                        t = i, i = r, t.forEach(o), t.clear(), s = !1, n && (n = !1, l.process(e))
                    }
                };
                return l
            }(o), e), {}),
            {
                setup: u,
                read: h,
                resolveKeyframes: c,
                preUpdate: d,
                update: p,
                preRender: m,
                render: f,
                postRender: v
            } = l,
            g = () => {
                let i = t.MotionGlobalConfig.useManualTiming,
                    o = i ? a.timestamp : performance.now();
                n = !1, i || (a.delta = r ? 1e3 / 60 : Math.max(Math.min(o - a.timestamp, 40), 1)), a.timestamp = o, a.isProcessing = !0, u.process(a), h.process(a), c.process(a), d.process(a), p.process(a), m.process(a), f.process(a), v.process(a), a.isProcessing = !1, n && s && (r = !1, e(g))
            };
        return {
            schedule: i.reduce((t, i) => {
                let s = l[i];
                return t[i] = (t, i = !1, o = !1) => (!n && (n = !0, r = !0, a.isProcessing || e(g)), s.schedule(t, i, o)), t
            }, {}),
            cancel: e => {
                for (let t = 0; t < i.length; t++) l[i[t]].cancel(e)
            },
            state: a,
            steps: l
        }
    }], 683669)
}, 672357, e => {
    "use strict";
    var t = e.i(120194);
    let {
        schedule: i,
        cancel: s,
        state: n,
        steps: r
    } = (0, e.i(683669).createRenderBatcher)("u" > typeof requestAnimationFrame ? requestAnimationFrame : t.noop, !0);
    e.s(["cancelFrame", 0, s, "frame", 0, i, "frameData", 0, n, "frameSteps", 0, r])
}, 433040, e => {
    "use strict";
    var t = e.i(824995),
        i = e.i(788761),
        s = e.i(672357);
    let n = new Set,
        r = !1,
        a = !1,
        o = !1;

    function l() {
        if (a) {
            let e = Array.from(n).filter(e => e.needsMeasurement),
                t = new Set(e.map(e => e.element)),
                s = new Map;
            t.forEach(e => {
                let t = (0, i.removeNonTranslationalTransform)(e);
                t.length && (s.set(e, t), e.render())
            }), e.forEach(e => e.measureInitialState()), t.forEach(e => {
                e.render();
                let t = s.get(e);
                t && t.forEach(([t, i]) => {
                    e.getValue(t)?.set(i)
                })
            }), e.forEach(e => e.measureEndState()), e.forEach(e => {
                void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
            })
        }
        a = !1, r = !1, n.forEach(e => e.complete(o)), n.clear()
    }

    function u() {
        n.forEach(e => {
            e.readKeyframes(), e.needsMeasurement && (a = !0)
        })
    }
    e.s(["KeyframeResolver", 0, class {
        constructor(e, t, i, s, n, r = !1) {
            this.state = "pending", this.isAsync = !1, this.needsMeasurement = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = i, this.motionValue = s, this.element = n, this.isAsync = r
        }
        scheduleResolve() {
            this.state = "scheduled", this.isAsync ? (n.add(this), r || (r = !0, s.frame.read(u), s.frame.resolveKeyframes(l))) : (this.readKeyframes(), this.complete())
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
                    r = e[e.length - 1];
                if (void 0 !== t) e[0] = t;
                else if (s && i) {
                    let t = s.readValue(i, r);
                    null != t && (e[0] = t)
                }
                void 0 === e[0] && (e[0] = r), n && void 0 === t && n.set(e[0])
            }(0, t.fillWildcards)(e)
        }
        setFinalKeyframe() {}
        measureInitialState() {}
        renderEndStyles() {}
        measureEndState() {}
        complete(e = !1) {
            this.state = "complete", this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e), n.delete(this)
        }
        cancel() {
            "scheduled" === this.state && (n.delete(this), this.state = "pending")
        }
        resume() {
            "pending" === this.state && this.scheduleResolve()
        }
    }, "flushKeyframeResolvers", 0, function() {
        o = !0, u(), l(), o = !1
    }])
}, 432182, 874864, 56237, e => {
    "use strict";
    var t = e.i(470442),
        i = e.i(991053),
        s = e.i(62843),
        n = e.i(133071),
        r = e.i(433040);
    let a = e => /^0[^.\s]+$/u.test(e);
    e.s(["isZeroValueString", 0, a], 874864);
    var o = e.i(53768),
        l = e.i(325144),
        u = e.i(900162),
        h = e.i(685319);
    let c = new Set([l.filter, u.mask]);

    function d(e, t) {
        let i = (0, h.getDefaultValueType)(e);
        return c.has(i) || (i = o.complex), i.getAnimatableNone ? i.getAnimatableNone(t) : void 0
    }
    e.s(["getAnimatableNone", 0, d], 56237);
    let p = new Set(["auto", "none", "0"]);
    var m = e.i(788761);
    class f extends r.KeyframeResolver {
        constructor(e, t, i, s, n) {
            super(e, t, i, s, n, !0)
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
                if ("string" == typeof i && (i = i.trim(), (0, n.isCSSVariableToken)(i))) {
                    let n = (0, s.getVariableValue)(i, r.current);
                    void 0 !== n && (e[t] = n), t === e.length - 1 && (this.finalKeyframe = i)
                }
            }
            if (this.resolveNoneKeyframes(), !t.positionalKeys.has(a) || 2 !== e.length) return;
            let [o, l] = e, u = (0, i.findDimensionValueType)(o), h = (0, i.findDimensionValueType)(l);
            if ((0, n.containsCSSVariable)(o) !== (0, n.containsCSSVariable)(l) && m.positionalValues[a]) {
                this.needsMeasurement = !0;
                return
            }
            if (u !== h)
                if ((0, m.isNumOrPxType)(u) && (0, m.isNumOrPxType)(h))
                    for (let t = 0; t < e.length; t++) {
                        let i = e[t];
                        "string" == typeof i && (e[t] = parseFloat(i))
                    } else m.positionalValues[a] && (this.needsMeasurement = !0)
        }
        resolveNoneKeyframes() {
            let {
                unresolvedKeyframes: e,
                name: t
            } = this, i = [];
            for (let t = 0; t < e.length; t++) {
                var s;
                (null === e[t] || ("number" == typeof(s = e[t]) ? 0 === s : null === s || "none" === s || "0" === s || a(s))) && i.push(t)
            }
            i.length && function(e, t, i) {
                let s, n = 0;
                for (; n < e.length && !s;) {
                    let t = e[n];
                    "string" == typeof t && !p.has(t) && (0, o.analyseComplexValue)(t).values.length && (s = e[n]), n++
                }
                if (s && i)
                    for (let n of t) e[n] = d(i, s)
            }(e, i, t)
        }
        measureInitialState() {
            let {
                element: e,
                unresolvedKeyframes: t,
                name: i
            } = this;
            if (!e || !e.current) return;
            "height" === i && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = m.positionalValues[i](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
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
                r = i[n];
            i[n] = m.positionalValues[t](e.measureViewportBox(), window.getComputedStyle(e.current)), null !== r && void 0 === this.finalKeyframe && (this.finalKeyframe = r), this.removedTransforms?.length && this.removedTransforms.forEach(([t, i]) => {
                e.getValue(t).set(i)
            }), this.resolveNoneKeyframes()
        }
    }
    e.s(["DOMKeyframesResolver", 0, f], 432182)
}, 633836, e => {
    "use strict";
    e.s(["millisecondsToSeconds", 0, e => e / 1e3, "secondsToMilliseconds", 0, e => 1e3 * e])
}, 810246, 926935, e => {
    "use strict";

    function t(e, t) {
        -1 === e.indexOf(t) && e.push(t)
    }

    function i(e, t) {
        let i = e.indexOf(t);
        i > -1 && e.splice(i, 1)
    }
    e.s(["addUniqueItem", 0, t, "removeItem", 0, i], 926935), e.s(["SubscriptionManager", 0, class {
        constructor() {
            this.subscriptions = []
        }
        add(e) {
            return t(this.subscriptions, e), () => i(this.subscriptions, e)
        }
        notify(e, t, i) {
            let s = this.subscriptions.length;
            if (s)
                if (1 === s) this.subscriptions[0](e, t, i);
                else
                    for (let n = 0; n < s; n++) {
                        let s = this.subscriptions[n];
                        s && s(e, t, i)
                    }
        }
        getSize() {
            return this.subscriptions.length
        }
        clear() {
            this.subscriptions.length = 0
        }
    }], 810246)
}, 913777, e => {
    "use strict";
    e.s(["setStyle", 0, function(e, t, i) {
        t.startsWith("--") ? e.style.setProperty(t, i) : e.style[t] = i
    }], 913777)
}, 823928, 761866, 448216, e => {
    "use strict";

    function t(e) {
        let t;
        return () => (void 0 === t && (t = e()), t)
    }
    e.s(["memo", 0, t], 761866);
    let i = {};

    function s(e, s) {
        let n = t(e);
        return () => i[s] ?? n()
    }
    e.s(["memoSupports", 0, s], 448216);
    let n = s(() => void 0 !== window.ScrollTimeline, "scrollTimeline"),
        r = s(() => void 0 !== window.ViewTimeline, "viewTimeline");
    e.s(["supportsScrollTimeline", 0, n, "supportsViewTimeline", 0, r], 823928)
}, 367141, e => {
    "use strict";
    let t = e => null !== e;
    e.s(["getFinalKeyframe", 0, function(e, {
        repeat: i,
        repeatType: s = "loop"
    }, n, r = 1) {
        let a = e.filter(t),
            o = r < 0 || i && "loop" !== s && i % 2 == 1 ? 0 : a.length - 1;
        return o && void 0 !== n ? n : a[o]
    }])
}, 684075, e => {
    "use strict";
    e.s(["WithPromise", 0, class {
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
    }])
}, 210514, e => {
    "use strict";
    e.s(["isBezierDefinition", 0, e => Array.isArray(e) && "number" == typeof e[0]])
}, 825763, e => {
    "use strict";
    let t = (0, e.i(448216).memoSupports)(() => {
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
    }, "linearEasing");
    e.s(["supportsLinearEasing", 0, t])
}, 626122, e => {
    "use strict";
    e.s(["generateLinearEasing", 0, (e, t, i = 10) => {
        let s = "",
            n = Math.max(Math.round(t / i), 2);
        for (let t = 0; t < n; t++) s += Math.round(1e4 * e(t / (n - 1))) / 1e4 + ", ";
        return `linear(${s.substring(0,s.length-2)})`
    }])
}, 693660, 855397, e => {
    "use strict";
    var t = e.i(725542),
        i = e.i(633836),
        s = e.i(120194),
        n = e.i(913777),
        r = e.i(823928),
        a = e.i(367141),
        o = e.i(684075),
        l = e.i(210514),
        u = e.i(825763),
        h = e.i(626122);
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

    function p(e) {
        return "function" == typeof e && "applyToOptions" in e
    }
    e.s(["isGenerator", 0, p], 855397);
    class m extends o.WithPromise {
        constructor(e) {
            if (super(), this.finishedTime = null, this.isStopped = !1, this.manualStartTime = null, !e) return;
            const {
                element: i,
                name: s,
                keyframes: r,
                pseudoElement: o,
                allowFlatten: m = !1,
                finalKeyframe: f,
                onComplete: v
            } = e;
            this.isPseudoElement = !!o, this.allowFlatten = m, this.options = e, (0, t.invariant)("string" != typeof e.type, 'Mini animate() doesn\'t support "type" as a string.', "mini-spring");
            const g = function({
                type: e,
                ...t
            }) {
                return p(e) && (0, u.supportsLinearEasing)() ? e.applyToOptions(t) : (t.duration ?? (t.duration = 300), t.ease ?? (t.ease = "easeOut"), t)
            }(e);
            this.animation = function(e, t, i, {
                delay: s = 0,
                duration: n = 300,
                repeat: r = 0,
                repeatType: a = "loop",
                ease: o = "easeOut",
                times: p
            } = {}, m) {
                let f = {
                    [t]: i
                };
                p && (f.offset = p);
                let v = function e(t, i) {
                    if (t) return "function" == typeof t ? (0, u.supportsLinearEasing)() ? (0, h.generateLinearEasing)(t, i) : "ease-out" : (0, l.isBezierDefinition)(t) ? c(t) : Array.isArray(t) ? t.map(t => e(t, i) || d.easeOut) : d[t]
                }(o, n);
                Array.isArray(v) && (f.easing = v);
                let g = {
                    delay: s,
                    duration: n,
                    easing: Array.isArray(v) ? "linear" : v,
                    fill: "both",
                    iterations: r + 1,
                    direction: "reverse" === a ? "alternate" : "normal"
                };
                return m && (g.pseudoElement = m), e.animate(f, g)
            }(i, s, r, g, o), !1 === g.autoplay && this.animation.pause(), this.animation.onfinish = () => {
                if (this.finishedTime = this.time, !o) {
                    let e = (0, a.getFinalKeyframe)(r, this.options, f, this.speed);
                    this.updateMotionValue && this.updateMotionValue(e), (0, n.setStyle)(i, s, e), this.animation.cancel()
                }
                v?.(), this.notifyFinished()
            }
        }
        play() {
            this.isStopped || (this.manualStartTime = null, this.animation.play(), "finished" === this.state && this.updateFinished())
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
            let e = this.options?.element;
            !this.isPseudoElement && e?.isConnected && this.animation.commitStyles?.()
        }
        get duration() {
            let e = this.animation.effect?.getComputedTiming?.().duration || 0;
            return (0, i.millisecondsToSeconds)(Number(e))
        }
        get iterationDuration() {
            let {
                delay: e = 0
            } = this.options || {};
            return this.duration + (0, i.millisecondsToSeconds)(e)
        }
        get time() {
            return (0, i.millisecondsToSeconds)(Number(this.animation.currentTime) || 0)
        }
        set time(e) {
            let t = null !== this.finishedTime;
            this.manualStartTime = null, this.finishedTime = null, this.animation.currentTime = (0, i.secondsToMilliseconds)(e), t && this.animation.pause()
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
            return this.manualStartTime ?? Number(this.animation.startTime)
        }
        set startTime(e) {
            this.manualStartTime = this.animation.startTime = e
        }
        attachTimeline({
            timeline: e,
            rangeStart: t,
            rangeEnd: i,
            observe: n
        }) {
            return (this.allowFlatten && this.animation.effect?.updateTiming({
                easing: "linear"
            }), this.animation.onfinish = null, e && (0, r.supportsScrollTimeline)()) ? (this.animation.timeline = e, t && (this.animation.rangeStart = t), i && (this.animation.rangeEnd = i), s.noop) : n(this)
        }
    }
    e.s(["NativeAnimation", 0, m], 693660)
}, 901608, e => {
    "use strict";
    let t = new Set(["opacity", "clipPath", "filter", "transform"]);
    e.s(["acceleratedValues", 0, t])
}, 328744, e => {
    "use strict";
    let {
        schedule: t,
        cancel: i
    } = (0, e.i(683669).createRenderBatcher)(queueMicrotask, !1);
    e.s(["cancelMicrotask", 0, i, "microtask", 0, t])
}, 655408, e => {
    "use strict";
    let t;
    var i = e.i(719372),
        s = e.i(672357);

    function n() {
        t = void 0
    }
    let r = {
        now: () => (void 0 === t && r.set(s.frameData.isProcessing || i.MotionGlobalConfig.useManualTiming ? s.frameData.timestamp : performance.now()), t),
        set: e => {
            t = e, queueMicrotask(n)
        }
    };
    e.s(["time", 0, r])
}, 398361, e => {
    "use strict";
    e.s(["velocityPerSecond", 0, (e, t) => t ? 1e3 / t * e : 0])
}, 706221, e => {
    "use strict";
    var t = e.i(810246),
        i = e.i(398361),
        s = e.i(655408),
        n = e.i(672357);
    let r = {
        current: void 0
    };
    class a {
        constructor(e, t = {}) {
            this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = e => {
                let t = s.time.now();
                if (this.updatedAt !== t && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(e), this.current !== this.prev && (this.events.change?.notify(this.current), this.dependents))
                    for (let e of this.dependents) e.dirty()
            }, this.hasAnimated = !1, this.setCurrent(e), this.owner = t.owner
        }
        setCurrent(e) {
            this.current = e, this.updatedAt = s.time.now(), null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = !isNaN(parseFloat(this.current)))
        }
        setPrevFrameValue(e = this.current) {
            this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
        }
        onChange(e) {
            return this.on("change", e)
        }
        on(e, i) {
            this.events[e] || (this.events[e] = new t.SubscriptionManager);
            let s = this.events[e].add(i);
            return "change" === e ? () => {
                s(), n.frame.read(() => {
                    this.events.change.getSize() || this.stop()
                })
            } : s
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
            return r.current && r.current.push(this), this.current
        }
        getPrevious() {
            return this.prev
        }
        getVelocity() {
            let e = s.time.now();
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
    e.s(["collectMotionValues", 0, r, "motionValue", 0, function(e, t) {
        return new a(e, t)
    }])
}, 938669, 368623, e => {
    "use strict";
    var t = e.i(162158),
        i = e.i(53768),
        s = e.i(991053),
        n = e.i(219387);
    let r = [...s.dimensionValueTypes, t.color, i.complex];
    e.s(["findValueType", 0, e => r.find((0, n.testValueType)(e))], 938669);
    let a = new WeakMap;
    e.s(["visualElementStore", 0, a], 368623)
}, 819673, e => {
    "use strict";
    e.s(["isAnimationControls", 0, function(e) {
        return null !== e && "object" == typeof e && "function" == typeof e.start
    }])
}, 653425, 250760, e => {
    "use strict";
    e.s(["isVariantLabel", 0, function(e) {
        return "string" == typeof e || Array.isArray(e)
    }], 653425);
    let t = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
        i = ["initial", ...t];
    e.s(["variantPriorityOrder", 0, t, "variantProps", 0, i], 250760)
}, 587377, 81107, e => {
    "use strict";
    var t = e.i(819673),
        i = e.i(653425),
        s = e.i(250760);

    function n(e) {
        return (0, t.isAnimationControls)(e.animate) || s.variantProps.some(t => (0, i.isVariantLabel)(e[t]))
    }
    e.s(["isControllingVariants", 0, n, "isVariantNode", 0, function(e) {
        return !!(n(e) || e.variants)
    }], 587377);
    var r = e.i(706221),
        a = e.i(140926);
    e.s(["updateMotionValuesFromProps", 0, function(e, t, i) {
        for (let s in t) {
            let n = t[s],
                o = i[s];
            if ((0, a.isMotionValue)(n)) e.addValue(s, n);
            else if ((0, a.isMotionValue)(o)) e.addValue(s, (0, r.motionValue)(n, {
                owner: e
            }));
            else if (o !== n)
                if (e.hasValue(s)) {
                    let t = e.getValue(s);
                    !0 === t.liveStyle ? t.jump(n) : t.hasAnimated || t.set(n)
                } else {
                    let t = e.getStaticValue(s);
                    e.addValue(s, (0, r.motionValue)(void 0 !== t ? t : n, {
                        owner: e
                    }))
                }
        }
        for (let s in i) void 0 === t[s] && e.removeValue(s);
        return t
    }], 81107)
}, 923792, e => {
    "use strict";

    function t(e) {
        let t = [{}, {}];
        return e?.values.forEach((e, i) => {
            t[0][i] = e.get(), t[1][i] = e.getVelocity()
        }), t
    }
    e.s(["resolveVariantFromProps", 0, function(e, i, s, n) {
        if ("function" == typeof i) {
            let [r, a] = t(n);
            i = i(void 0 !== s ? s : e.custom, r, a)
        }
        if ("string" == typeof i && (i = e.variants && e.variants[i]), "function" == typeof i) {
            let [r, a] = t(n);
            i = i(void 0 !== s ? s : e.custom, r, a)
        }
        return i
    }])
}, 763994, 453311, e => {
    "use strict";
    var t = e.i(140926),
        i = e.i(432182);
    e.i(203217);
    var s = e.i(633836),
        n = e.i(423796),
        r = e.i(874864),
        a = e.i(810246),
        o = e.i(433040),
        l = e.i(693660),
        u = e.i(901608),
        h = e.i(328744),
        c = e.i(655408),
        d = e.i(301219),
        p = e.i(706221),
        m = e.i(53768),
        f = e.i(56237),
        v = e.i(938669),
        g = e.i(368623),
        y = e.i(587377),
        b = e.i(382053),
        x = e.i(81107),
        T = e.i(494004),
        V = e.i(923792),
        S = e.i(876009),
        w = e.i(672357);
    let M = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
        A = {};
    class C {
        scrapeMotionValuesFromProps(e, t, i) {
            return {}
        }
        constructor({
            parent: e,
            props: i,
            presenceContext: s,
            reducedMotionConfig: n,
            skipAnimations: r,
            blockInitialAnimation: a,
            visualState: l
        }, u = {}) {
            this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.shouldSkipAnimations = !1, this.values = new Map, this.KeyframeResolver = o.KeyframeResolver, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.hasBeenMounted = !1, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
            }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                let e = c.time.now();
                this.renderScheduledAt < e && (this.renderScheduledAt = e, w.frame.render(this.render, !1, !0))
            };
            const {
                latestValues: h,
                renderState: d
            } = l;
            this.latestValues = h, this.baseTarget = {
                ...h
            }, this.initialValues = i.initial ? {
                ...h
            } : {}, this.renderState = d, this.parent = e, this.props = i, this.presenceContext = s, this.depth = e ? e.depth + 1 : 0, this.reducedMotionConfig = n, this.skipAnimationsConfig = r, this.options = u, this.blockInitialAnimation = !!a, this.isControllingVariants = (0, y.isControllingVariants)(i), this.isVariantNode = (0, y.isVariantNode)(i), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(e && e.current);
            const {
                willChange: p,
                ...m
            } = this.scrapeMotionValuesFromProps(i, {}, this);
            for (const e in m) {
                const i = m[e];
                void 0 !== h[e] && (0, t.isMotionValue)(i) && i.set(h[e])
            }
        }
        mount(e) {
            if (this.hasBeenMounted)
                for (let e in this.initialValues) this.values.get(e)?.jump(this.initialValues[e]), this.latestValues[e] = this.initialValues[e];
            this.current = e, g.visualElementStore.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((e, t) => this.bindToMotionValue(t, e)), "never" === this.reducedMotionConfig ? this.shouldReduceMotion = !1 : "always" === this.reducedMotionConfig ? this.shouldReduceMotion = !0 : (S.hasReducedMotionListener.current || (0, T.initPrefersReducedMotion)(), this.shouldReduceMotion = S.prefersReducedMotion.current), this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1, this.parent?.addChild(this), this.update(this.props, this.presenceContext), this.hasBeenMounted = !0
        }
        unmount() {
            for (let e in this.projection && this.projection.unmount(), (0, w.cancelFrame)(this.notifyUpdate), (0, w.cancelFrame)(this.render), this.valueSubscriptions.forEach(e => e()), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent?.removeChild(this), this.events) this.events[e].clear();
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
        bindToMotionValue(e, t) {
            let i;
            if (this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)(), t.accelerate && u.acceleratedValues.has(e) && this.current instanceof HTMLElement) {
                let {
                    factory: i,
                    keyframes: n,
                    times: r,
                    ease: a,
                    duration: o
                } = t.accelerate, u = new l.NativeAnimation({
                    element: this.current,
                    name: e,
                    keyframes: n,
                    times: r,
                    ease: a,
                    duration: (0, s.secondsToMilliseconds)(o)
                }), h = i(u);
                this.valueSubscriptions.set(e, () => {
                    h(), u.cancel()
                });
                return
            }
            let n = b.transformProps.has(e);
            n && this.onBindTransform && this.onBindTransform();
            let r = t.on("change", t => {
                this.latestValues[e] = t, this.props.onUpdate && w.frame.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0), this.scheduleRender()
            });
            "u" > typeof window && window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, () => {
                r(), i && i()
            })
        }
        sortNodePosition(e) {
            return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
        }
        updateFeatures() {
            let e = "animation";
            for (e in A) {
                let t = A[e];
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
            return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, d.createBox)()
        }
        getStaticValue(e) {
            return this.latestValues[e]
        }
        setStaticValue(e, t) {
            this.latestValues[e] = t
        }
        update(e, t) {
            (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
            for (let t = 0; t < M.length; t++) {
                let i = M[t];
                this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](), delete this.propEventSubscriptions[i]);
                let s = e["on" + i];
                s && (this.propEventSubscriptions[i] = this.on(i, s))
            }
            this.prevMotionValues = (0, x.updateMotionValuesFromProps)(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
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
            return void 0 === i && void 0 !== t && (i = (0, p.motionValue)(null === t ? void 0 : t, {
                owner: this
            }), this.addValue(e, i)), i
        }
        readValue(e, i) {
            let s = void 0 === this.latestValues[e] && this.current ? this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
            return null != s && ("string" == typeof s && ((0, n.isNumericalString)(s) || (0, r.isZeroValueString)(s)) ? s = parseFloat(s) : !(0, v.findValueType)(s) && m.complex.test(i) && (s = (0, f.getAnimatableNone)(e, i)), this.setBaseTarget(e, (0, t.isMotionValue)(s) ? s.get() : s)), (0, t.isMotionValue)(s) ? s.get() : s
        }
        setBaseTarget(e, t) {
            this.baseTarget[e] = t
        }
        getBaseTarget(e) {
            let i, {
                initial: s
            } = this.props;
            if ("string" == typeof s || "object" == typeof s) {
                let t = (0, V.resolveVariantFromProps)(this.props, s, this.presenceContext?.custom);
                t && (i = t[e])
            }
            if (s && void 0 !== i) return i;
            let n = this.getBaseTargetFromProps(this.props, e);
            return void 0 === n || (0, t.isMotionValue)(n) ? void 0 !== this.initialValues[e] && void 0 === i ? void 0 : this.baseTarget[e] : n
        }
        on(e, t) {
            return this.events[e] || (this.events[e] = new a.SubscriptionManager), this.events[e].add(t)
        }
        notify(e, ...t) {
            this.events[e] && this.events[e].notify(...t)
        }
        scheduleRenderMicrotask() {
            h.microtask.render(this.render)
        }
    }
    e.s(["VisualElement", 0, C, "getFeatureDefinitions", 0, function() {
        return A
    }, "setFeatureDefinitions", 0, function(e) {
        A = e
    }], 453311), e.s(["DOMVisualElement", 0, class extends C {
        constructor() {
            super(...arguments), this.KeyframeResolver = i.DOMKeyframesResolver
        }
        sortInstanceNodePosition(e, t) {
            return 2 & e.compareDocumentPosition(t) ? 1 : -1
        }
        getBaseTargetFromProps(e, t) {
            let i = e.style;
            return i ? i[t] : void 0
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
            (0, t.isMotionValue)(e) && (this.childSubscription = e.on("change", e => {
                this.current && (this.current.textContent = `${e}`)
            }))
        }
    }], 763994)
}, 565764, e => {
    "use strict";
    e.s(["camelToDash", 0, function(e) {
        return e.replace(/([A-Z])/g, e => `-${e.toLowerCase()}`)
    }])
}, 734225, 493559, 38355, 997214, 4739, 958292, e => {
    "use strict";
    let t = (e, t) => t && "number" == typeof e ? t.transform(e) : e;
    var i = e.i(426445),
        s = e.i(382053),
        n = e.i(133071);
    let r = {
            x: "translateX",
            y: "translateY",
            z: "translateZ",
            transformPerspective: "perspective"
        },
        a = s.transformPropOrder.length;

    function o(e, o, l) {
        let {
            style: u,
            vars: h,
            transformOrigin: c
        } = e, d = !1, p = !1;
        for (let e in o) {
            let r = o[e];
            if (s.transformProps.has(e)) {
                d = !0;
                continue
            }
            if ((0, n.isCSSVariableName)(e)) {
                h[e] = r;
                continue
            } {
                let s = t(r, i.numberValueTypes[e]);
                e.startsWith("origin") ? (p = !0, c[e] = s) : u[e] = s
            }
        }
        if (!o.transform && (d || l ? u.transform = function(e, n, o) {
                let l = "",
                    u = !0;
                for (let h = 0; h < a; h++) {
                    let a = s.transformPropOrder[h],
                        c = e[a];
                    if (void 0 === c) continue;
                    let d = !0;
                    if ("number" == typeof c) d = c === +!!a.startsWith("scale");
                    else {
                        let e = parseFloat(c);
                        d = a.startsWith("scale") ? 1 === e : 0 === e
                    }
                    if (!d || o) {
                        let e = t(c, i.numberValueTypes[a]);
                        if (!d) {
                            u = !1;
                            let t = r[a] || a;
                            l += `${t}(${e}) `
                        }
                        o && (n[a] = e)
                    }
                }
                let h = e.pathRotation;
                return h && (u = !1, l += `rotate(${t(h,i.numberValueTypes.pathRotation)}) `), l = l.trim(), o ? l = o(n, u ? "" : l) : u && (l = "none"), l
            }(o, e.transform, l) : u.transform && (u.transform = "none")), p) {
            let {
                originX: e = "50%",
                originY: t = "50%",
                originZ: i = 0
            } = c;
            u.transformOrigin = `${e} ${t} ${i}`
        }
    }
    e.s(["buildHTMLStyles", 0, o], 493559);
    let l = {
            offset: "stroke-dashoffset",
            array: "stroke-dasharray"
        },
        u = {
            offset: "strokeDashoffset",
            array: "strokeDasharray"
        },
        h = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
    e.s(["buildSVGAttrs", 0, function(e, {
        attrX: t,
        attrY: i,
        attrScale: s,
        pathLength: n,
        pathSpacing: r = 1,
        pathOffset: a = 0,
        ...c
    }, d, p, m) {
        if (o(e, c, p), d) {
            e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
            return
        }
        e.attrs = e.style, e.style = {};
        let {
            attrs: f,
            style: v
        } = e;
        for (let e of (f.transform && (v.transform = f.transform, delete f.transform), (v.transform || f.transformOrigin) && (v.transformOrigin = f.transformOrigin ?? "50% 50%", delete f.transformOrigin), v.transform && (v.transformBox = m?.transformBox ?? "fill-box", delete f.transformBox), h)) void 0 !== f[e] && (v[e] = f[e], delete f[e]);
        void 0 !== t && (f.x = t), void 0 !== i && (f.y = i), void 0 !== s && (f.scale = s), void 0 !== n && function(e, t, i = 1, s = 0, n = !0) {
            e.pathLength = 1;
            let r = n ? l : u;
            e[r.offset] = `${-s}`, e[r.array] = `${t} ${i}`
        }(f, n, r, a, !1)
    }], 734225);
    let c = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
    e.s(["camelCaseAttributes", 0, c], 38355), e.s(["isSVGTag", 0, e => "string" == typeof e && "svg" === e.toLowerCase()], 997214);
    var d = e.i(565764);

    function p(e, {
        style: t,
        vars: i
    }, s, n) {
        let r, a = e.style;
        for (r in t) a[r] = t[r];
        for (r in n?.applyProjectionStyles(a, s), i) a.setProperty(r, i[r])
    }
    e.s(["renderHTML", 0, p], 4739), e.s(["renderSVG", 0, function(e, t, i, s) {
        for (let i in p(e, t, void 0, s), t.attrs) e.setAttribute(c.has(i) ? i : (0, d.camelToDash)(i), t.attrs[i])
    }], 958292)
}, 58198, 398583, e => {
    "use strict";
    e.s(["cornerRadiusProps", 0, ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"]], 58198);
    var t = e.i(561497);

    function i(e, t) {
        return t.max === t.min ? 0 : e / (t.max - t.min) * 100
    }
    let s = {
        correct: (e, s) => {
            if (!s.target) return e;
            if ("string" == typeof e)
                if (!t.px.test(e)) return e;
                else e = parseFloat(e);
            let n = i(e, s.target.x),
                r = i(e, s.target.y);
            return `${n}% ${r}%`
        }
    };
    e.s(["correctBorderRadius", 0, s], 398583)
}, 327745, e => {
    "use strict";
    e.s(["mixNumber", 0, (e, t, i) => e + (t - e) * i])
}, 4075, e => {
    "use strict";
    e.i(133071);
    var t = e.i(58198),
        i = e.i(398583),
        s = e.i(53768),
        n = e.i(327745);
    let r = {
        borderRadius: {
            ...i.correctBorderRadius,
            applyTo: [...t.cornerRadiusProps]
        },
        borderTopLeftRadius: i.correctBorderRadius,
        borderTopRightRadius: i.correctBorderRadius,
        borderBottomLeftRadius: i.correctBorderRadius,
        borderBottomRightRadius: i.correctBorderRadius,
        boxShadow: {
            correct: (e, {
                treeScale: t,
                projectionDelta: i
            }) => {
                let r = s.complex.parse(e);
                if (r.length > 5) return e;
                let a = s.complex.createTransformer(e),
                    o = +("number" != typeof r[0]),
                    l = i.x.scale * t.x,
                    u = i.y.scale * t.y;
                r[0 + o] /= l, r[1 + o] /= u;
                let h = (0, n.mixNumber)(l, u, .5);
                return "number" == typeof r[2 + o] && (r[2 + o] /= h), "number" == typeof r[3 + o] && (r[3 + o] /= h), a(r)
            }
        }
    };
    e.s(["scaleCorrectors", 0, r], 4075)
}, 565274, 880925, 268162, 185747, e => {
    "use strict";
    var t = e.i(382053),
        i = e.i(685319),
        s = e.i(301219),
        n = e.i(763994),
        r = e.i(565764),
        a = e.i(734225),
        o = e.i(38355),
        l = e.i(997214),
        u = e.i(958292),
        h = e.i(140926),
        c = e.i(4075);

    function d(e, {
        layout: i,
        layoutId: s
    }) {
        return t.transformProps.has(e) || e.startsWith("origin") || (i || void 0 !== s) && (!!c.scaleCorrectors[e] || "opacity" === e)
    }

    function p(e, t, i) {
        let s = e.style,
            n = t?.style,
            r = {};
        if (!s) return r;
        for (let t in s)((0, h.isMotionValue)(s[t]) || n && (0, h.isMotionValue)(n[t]) || d(t, e) || i?.getValue(t)?.liveStyle !== void 0) && (r[t] = s[t]);
        return r
    }

    function m(e, i, s) {
        let n = p(e, i, s);
        for (let s in e)((0, h.isMotionValue)(e[s]) || (0, h.isMotionValue)(i[s])) && (n[-1 !== t.transformPropOrder.indexOf(s) ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s] = e[s]);
        return n
    }
    e.s(["isForcedMotionValue", 0, d], 880925), e.s(["scrapeMotionValuesFromProps", 0, p], 268162), e.s(["scrapeMotionValuesFromProps", 0, m], 185747);
    class f extends n.DOMVisualElement {
        constructor() {
            super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = s.createBox
        }
        getBaseTargetFromProps(e, t) {
            return e[t]
        }
        readValueFromInstance(e, s) {
            if (t.transformProps.has(s)) {
                let e = (0, i.getDefaultValueType)(s);
                return e && e.default || 0
            }
            return s = o.camelCaseAttributes.has(s) ? s : (0, r.camelToDash)(s), e.getAttribute(s)
        }
        scrapeMotionValuesFromProps(e, t, i) {
            return m(e, t, i)
        }
        build(e, t, i) {
            (0, a.buildSVGAttrs)(e, t, this.isSVGTag, i.transformTemplate, i.style)
        }
        renderInstance(e, t, i, s) {
            (0, u.renderSVG)(e, t, i, s)
        }
        mount(e) {
            this.isSVGTag = (0, l.isSVGTag)(e.tagName), super.mount(e)
        }
    }
    e.s(["SVGVisualElement", 0, f], 565274)
}, 627722, e => {
    "use strict";
    e.s(["convertBoundingBoxToBox", 0, function({
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
    }])
}, 123457, 414449, 987826, e => {
    "use strict";
    var t = e.i(627722),
        i = e.i(327745);

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

    function r(e) {
        return n(e) || a(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
    }

    function a(e) {
        var t, i;
        return (t = e.x) && "0%" !== t || (i = e.y) && "0%" !== i
    }

    function o(e, t, i) {
        return i + t * (e - i)
    }

    function l(e, t, i, s, n) {
        return void 0 !== n && (e = o(e, n, s)), o(e, i, s) + t
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

    function c(e, t) {
        e.min += t, e.max += t
    }

    function d(e, t, s, n, r = .5) {
        let a = (0, i.mixNumber)(e.min, e.max, r);
        u(e, t, s, a, n)
    }

    function p(e, t) {
        return "string" == typeof e ? parseFloat(e) / 100 * (t.max - t.min) : e
    }

    function m(e, t, i) {
        let s = i ?? e;
        d(e.x, p(t.x, s.x), t.scaleX, t.scale, t.originX), d(e.y, p(t.y, s.y), t.scaleY, t.scale, t.originY)
    }

    function f(e, i) {
        return (0, t.convertBoundingBoxToBox)((0, t.transformBoxPoints)(e.getBoundingClientRect(), i))
    }
    e.s(["has2DTranslate", 0, a, "hasScale", 0, n, "hasTransform", 0, r], 414449), e.s(["applyBoxDelta", 0, h, "applyTreeDeltas", 0, function(e, t, i, s = !1) {
        let n, a, o = i.length;
        if (o) {
            t.x = t.y = 1;
            for (let l = 0; l < o; l++) {
                a = (n = i[l]).projectionDelta;
                let {
                    visualElement: o
                } = n.options;
                (!o || !o.props.style || "contents" !== o.props.style.display) && (s && n.options.layoutScroll && n.scroll && n !== n.root && (c(e.x, -n.scroll.offset.x), c(e.y, -n.scroll.offset.y)), a && (t.x *= a.x.scale, t.y *= a.y.scale, h(e, a)), s && r(n.latestValues) && m(e, n.latestValues, n.layout?.layoutBox))
            }
            t.x < 1.0000000000001 && t.x > .999999999999 && (t.x = 1), t.y < 1.0000000000001 && t.y > .999999999999 && (t.y = 1)
        }
    }, "scalePoint", 0, o, "transformBox", 0, m, "translateAxis", 0, c], 987826), e.s(["measurePageBox", 0, function(e, t, i) {
        let s = f(e, i),
            {
                scroll: n
            } = t;
        return n && (c(s.x, n.offset.x), c(s.y, n.offset.y)), s
    }, "measureViewportBox", 0, f], 123457)
}, 296305, 777074, 737328, e => {
    "use strict";
    var t = e.i(565274),
        i = e.i(133071),
        s = e.i(382053),
        n = e.i(104024),
        r = e.i(123457),
        a = e.i(763994),
        o = e.i(493559),
        l = e.i(4739),
        u = e.i(268162);
    class h extends a.DOMVisualElement {
        constructor() {
            super(...arguments), this.type = "html", this.renderInstance = l.renderHTML
        }
        readValueFromInstance(e, t) {
            if (s.transformProps.has(t)) return this.projection?.isProjecting ? (0, n.defaultTransformValue)(t) : (0, n.readTransformValue)(e, t);
            {
                let s = window.getComputedStyle(e),
                    n = ((0, i.isCSSVariableName)(t) ? s.getPropertyValue(t) : s[t]) || 0;
                return "string" == typeof n ? n.trim() : n
            }
        }
        measureInstanceViewportBox(e, {
            transformPagePoint: t
        }) {
            return (0, r.measureViewportBox)(e, t)
        }
        build(e, t, i) {
            (0, o.buildHTMLStyles)(e, t, i.transformTemplate)
        }
        scrapeMotionValuesFromProps(e, t, i) {
            return (0, u.scrapeMotionValuesFromProps)(e, t, i)
        }
    }
    e.s(["HTMLVisualElement", 0, h], 777074);
    var c = e.i(499531);
    let d = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

    function p(e) {
        if ("string" != typeof e || e.includes("-"));
        else if (d.indexOf(e) > -1 || /[A-Z]/u.test(e)) return !0;
        return !1
    }
    e.s(["isSVGComponent", 0, p], 737328), e.s(["createDomVisualElement", 0, (e, i) => i.isSVG ?? p(e) ? new t.SVGVisualElement(i) : new h(i, {
        allowProjection: e !== c.Fragment
    })], 296305)
}, 182526, e => {
    "use strict";
    let t = "data-" + (0, e.i(565764).camelToDash)("framerAppearId");
    e.s(["optimizedAppearDataAttribute", 0, t])
}, 792075, e => {
    "use strict";
    e.s(["Feature", 0, class {
        constructor(e) {
            this.isMounted = !1, this.node = e
        }
        update() {}
    }])
}, 488342, e => {
    "use strict";
    var t = e.i(923792);
    e.s(["resolveVariant", 0, function(e, i, s) {
        let n = e.getProps();
        return (0, t.resolveVariantFromProps)(n, i, void 0 !== s ? s : n.custom, e)
    }])
}, 989445, 168185, e => {
    "use strict";

    function t(e, t) {
        if (e?.inherit && t) {
            let {
                inherit: i,
                ...s
            } = e;
            return {
                ...t,
                ...s
            }
        }
        return e
    }
    e.s(["resolveTransition", 0, t], 168185), e.s(["getValueTransition", 0, function(e, i) {
        let s = e?.[i] ?? e?.default ?? e;
        return s !== e ? t(s, e) : s
    }], 989445)
}, 142555, 694933, e => {
    "use strict";
    var t = e.i(706221),
        i = e.i(488342);
    let s = e => Array.isArray(e);
    e.s(["isKeyframesTarget", 0, s], 694933), e.s(["setTarget", 0, function(e, n) {
        let {
            transitionEnd: r = {},
            transition: a = {},
            ...o
        } = (0, i.resolveVariant)(e, n) || {};
        for (let i in o = {
                ...o,
                ...r
            }) {
            var l;
            let n = s(l = o[i]) ? l[l.length - 1] || 0 : l;
            e.hasValue(i) ? e.getValue(i).set(n) : e.addValue(i, (0, t.motionValue)(n))
        }
    }], 142555)
}, 707051, e => {
    "use strict";
    var t = e.i(719372),
        i = e.i(140926);
    e.s(["addValueToWillChange", 0, function(e, s) {
        let n = e.getValue("willChange");
        if ((0, i.isMotionValue)(n) && n.add) return n.add(s);
        if (!n && t.MotionGlobalConfig.WillChange) {
            let i = new t.MotionGlobalConfig.WillChange("auto");
            e.addValue("willChange", i), i.add(s)
        }
    }], 707051)
}, 576243, e => {
    "use strict";
    var t = e.i(182526);
    e.s(["getOptimisedAppearId", 0, function(e) {
        return e.props[t.optimizedAppearDataAttribute]
    }])
}, 815645, e => {
    "use strict";
    e.s(["pipe", 0, (...e) => e.reduce((e, t) => i => t(e(i)))])
}, 680958, 440329, e => {
    "use strict";

    function t(e, t, i) {
        return (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6) ? e + (t - e) * 6 * i : i < .5 ? t : i < 2 / 3 ? e + (t - e) * (2 / 3 - i) * 6 : e
    }
    e.s(["hslaToRgba", 0, function({
        hue: e,
        saturation: i,
        lightness: s,
        alpha: n
    }) {
        e /= 360, s /= 100;
        let r = 0,
            a = 0,
            o = 0;
        if (i /= 100) {
            let n = s < .5 ? s * (1 + i) : s + i - s * i,
                l = 2 * s - n;
            r = t(l, n, e + 1 / 3), a = t(l, n, e), o = t(l, n, e - 1 / 3)
        } else r = a = o = s;
        return {
            red: Math.round(255 * r),
            green: Math.round(255 * a),
            blue: Math.round(255 * o),
            alpha: n
        }
    }], 680958), e.s(["mixImmediate", 0, function(e, t) {
        return i => i > 0 ? t : e
    }], 440329)
}, 899290, e => {
    "use strict";
    var t = e.i(815645),
        i = e.i(725542),
        s = e.i(133071),
        n = e.i(162158),
        r = e.i(53768),
        a = e.i(752934),
        o = e.i(87436),
        l = e.i(680958),
        u = e.i(439327),
        h = e.i(440329),
        c = e.i(327745);
    let d = (e, t, i) => {
            let s = e * e,
                n = i * (t * t - s) + s;
            return n < 0 ? 0 : Math.sqrt(n)
        },
        p = [a.hex, u.rgba, o.hsla];

    function m(e) {
        let t = p.find(t => t.test(e));
        if ((0, i.warning)(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !t) return !1;
        let s = t.parse(e);
        return t === o.hsla && (s = (0, l.hslaToRgba)(s)), s
    }
    let f = (e, t) => {
            let i = m(e),
                s = m(t);
            if (!i || !s) return (0, h.mixImmediate)(e, t);
            let n = {
                ...i
            };
            return e => (n.red = d(i.red, s.red, e), n.green = d(i.green, s.green, e), n.blue = d(i.blue, s.blue, e), n.alpha = (0, c.mixNumber)(i.alpha, s.alpha, e), u.rgba.transform(n))
        },
        v = new Set(["none", "hidden"]);

    function g(e, t) {
        return i => (0, c.mixNumber)(e, t, i)
    }

    function y(e) {
        return "number" == typeof e ? g : "string" == typeof e ? (0, s.isCSSVariableToken)(e) ? h.mixImmediate : n.color.test(e) ? f : T : Array.isArray(e) ? b : "object" == typeof e ? n.color.test(e) ? f : x : h.mixImmediate
    }

    function b(e, t) {
        let i = [...e],
            s = i.length,
            n = e.map((e, i) => y(e)(e, t[i]));
        return e => {
            for (let t = 0; t < s; t++) i[t] = n[t](e);
            return i
        }
    }

    function x(e, t) {
        let i = {
                ...e,
                ...t
            },
            s = {};
        for (let n in i) void 0 !== e[n] && void 0 !== t[n] && (s[n] = y(e[n])(e[n], t[n]));
        return e => {
            for (let t in s) i[t] = s[t](e);
            return i
        }
    }
    let T = (e, s) => {
        let n = r.complex.createTransformer(s),
            a = (0, r.analyseComplexValue)(e),
            o = (0, r.analyseComplexValue)(s);
        if (!(a.indexes.var.length === o.indexes.var.length && a.indexes.color.length === o.indexes.color.length && a.indexes.number.length >= o.indexes.number.length)) return (0, i.warning)(!0, `Complex values '${e}' and '${s}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), (0, h.mixImmediate)(e, s);
        if (v.has(e) && !o.values.length || v.has(s) && !a.values.length) return v.has(e) ? t => t <= 0 ? e : s : t => t >= 1 ? s : e;
        return (0, t.pipe)(b(function(e, t) {
            let i = [],
                s = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let n = 0; n < t.values.length; n++) {
                let r = t.types[n],
                    a = e.indexes[r][s[r]],
                    o = e.values[a] ?? 0;
                i[n] = o, s[r]++
            }
            return i
        }(a, o), o.values), n)
    };
    e.s(["mix", 0, function(e, t, i) {
        return "number" == typeof e && "number" == typeof t && "number" == typeof i ? (0, c.mixNumber)(e, t, i) : y(e)(e, t)
    }], 899290)
}, 988876, e => {
    "use strict";
    var t = e.i(655408),
        i = e.i(672357);
    e.s(["frameloopDriver", 0, e => {
        let s = ({
            timestamp: t
        }) => e(t);
        return {
            start: (e = !0) => i.frame.update(s, e),
            stop: () => (0, i.cancelFrame)(s),
            now: () => i.frameData.isProcessing ? i.frameData.timestamp : t.time.now()
        }
    }])
}, 102710, 659337, 10875, e => {
    "use strict";
    var t = e.i(633836),
        i = e.i(508983),
        s = e.i(725542),
        n = e.i(626122);

    function r(e) {
        let t = 0,
            i = e.next(t);
        for (; !i.done && t < 2e4;) t += 50, i = e.next(t);
        return t >= 2e4 ? 1 / 0 : t
    }

    function a(e, i = 100, s) {
        let n = s({
                ...e,
                keyframes: [0, i]
            }),
            o = Math.min(r(n), 2e4);
        return {
            type: "keyframes",
            ease: e => n.next(o * e).value / i,
            duration: (0, t.millisecondsToSeconds)(o)
        }
    }
    e.s(["calcGeneratorDuration", 0, r, "maxGeneratorDuration", 0, 2e4], 659337), e.s(["createGeneratorEasing", 0, a], 10875);
    let o = .01,
        l = 2,
        u = .005,
        h = .5;

    function c(e, t) {
        return e * Math.sqrt(1 - t * t)
    }
    let d = ["duration", "bounce"],
        p = ["stiffness", "damping", "mass"];

    function m(e, t) {
        return t.some(t => void 0 !== e[t])
    }

    function f(e = .3, a = .3) {
        let v, g, y, b, x, T, V = "object" != typeof e ? {
                visualDuration: e,
                keyframes: [0, 1],
                bounce: a
            } : e,
            {
                restSpeed: S,
                restDelta: w
            } = V,
            M = V.keyframes[0],
            A = V.keyframes[V.keyframes.length - 1],
            C = {
                done: !1,
                value: M
            },
            {
                stiffness: k,
                damping: P,
                mass: E,
                duration: F,
                velocity: O,
                isResolvedFromDuration: R
            } = function(e) {
                let n = {
                    velocity: 0,
                    stiffness: 100,
                    damping: 10,
                    mass: 1,
                    isResolvedFromDuration: !1,
                    ...e
                };
                if (!m(e, p) && m(e, d))
                    if (n.velocity = 0, e.visualDuration) {
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
                        let r = function({
                            duration: e = 800,
                            bounce: n = .3,
                            velocity: r = 0,
                            mass: a = 1
                        }) {
                            let o, l;
                            (0, s.warning)(e <= (0, t.secondsToMilliseconds)(10), "Spring duration must be 10 seconds or less", "spring-duration-limit");
                            let u = 1 - n;
                            u = (0, i.clamp)(.05, 1, u), e = (0, i.clamp)(.01, 10, (0, t.millisecondsToSeconds)(e)), u < 1 ? (o = t => {
                                let i = t * u,
                                    s = i * e;
                                return .001 - (i - r) / c(t, u) * Math.exp(-s)
                            }, l = t => {
                                let i = t * u * e,
                                    s = Math.pow(u, 2) * Math.pow(t, 2) * e,
                                    n = Math.exp(-i),
                                    a = c(Math.pow(t, 2), u);
                                return (i * r + r - s) * n * (-o(t) + .001 > 0 ? -1 : 1) / a
                            }) : (o = t => -.001 + Math.exp(-t * e) * ((t - r) * e + 1), l = t => e * e * (r - t) * Math.exp(-t * e));
                            let h = function(e, t, i) {
                                let s = i;
                                for (let i = 1; i < 12; i++) s -= e(s) / t(s);
                                return s
                            }(o, l, 5 / e);
                            if (e = (0, t.secondsToMilliseconds)(e), isNaN(h)) return {
                                stiffness: 100,
                                damping: 10,
                                duration: e
                            };
                            {
                                let t = Math.pow(h, 2) * a;
                                return {
                                    stiffness: t,
                                    damping: 2 * u * Math.sqrt(a * t),
                                    duration: e
                                }
                            }
                        }({
                            ...e,
                            velocity: 0
                        });
                        (n = {
                            ...n,
                            ...r,
                            mass: 1
                        }).isResolvedFromDuration = !0
                    } return n
            }({
                ...V,
                velocity: -(0, t.millisecondsToSeconds)(V.velocity || 0)
            }),
            I = O || 0,
            B = P / (2 * Math.sqrt(k * E)),
            D = A - M,
            N = (0, t.millisecondsToSeconds)(Math.sqrt(k / E)),
            L = 5 > Math.abs(D);
        if (S || (S = L ? o : l), w || (w = L ? u : h), B < 1) y = c(N, B), b = (I + B * N * D) / y, v = e => A - Math.exp(-B * N * e) * (b * Math.sin(y * e) + D * Math.cos(y * e)), x = B * N * b + D * y, T = B * N * D - b * y, g = e => Math.exp(-B * N * e) * (x * Math.sin(y * e) + T * Math.cos(y * e));
        else if (1 === B) {
            v = e => A - Math.exp(-N * e) * (D + (I + N * D) * e);
            let e = I + N * D;
            g = t => Math.exp(-N * t) * (N * e * t - I)
        } else {
            let e = N * Math.sqrt(B * B - 1);
            v = t => {
                let i = Math.exp(-B * N * t),
                    s = Math.min(e * t, 300);
                return A - i * ((I + B * N * D) * Math.sinh(s) + e * D * Math.cosh(s)) / e
            };
            let t = (I + B * N * D) / e,
                i = B * N * t - D * e,
                s = B * N * D - t * e;
            g = t => {
                let n = Math.exp(-B * N * t),
                    r = Math.min(e * t, 300);
                return n * (i * Math.sinh(r) + s * Math.cosh(r))
            }
        }
        let K = {
            calculatedDuration: R && F || null,
            velocity: e => (0, t.secondsToMilliseconds)(g(e)),
            next: e => {
                if (!R && B < 1) {
                    let i = Math.exp(-B * N * e),
                        s = Math.sin(y * e),
                        n = Math.cos(y * e),
                        r = A - i * (b * s + D * n);
                    return C.done = Math.abs((0, t.secondsToMilliseconds)(i * (x * s + T * n))) <= S && Math.abs(A - r) <= w, C.value = C.done ? A : r, C
                }
                let i = v(e);
                return R ? C.done = e >= F : C.done = Math.abs((0, t.secondsToMilliseconds)(g(e))) <= S && Math.abs(A - i) <= w, C.value = C.done ? A : i, C
            },
            toString: () => {
                let e = Math.min(r(K), 2e4),
                    t = (0, n.generateLinearEasing)(t => K.next(e * t).value, e, 30);
                return e + "ms " + t
            },
            toTransition: () => {}
        };
        return K
    }
    f.applyToOptions = e => {
        let i = a(e, 100, f);
        return e.ease = i.ease, e.duration = (0, t.secondsToMilliseconds)(i.duration), e.type = "keyframes", e
    }, e.s(["spring", 0, f], 102710)
}, 962290, 615768, 764350, 515745, 577182, 991388, 623016, 403981, 509, e => {
    "use strict";
    var t = e.i(102710),
        i = e.i(398361);

    function s(e, t, s) {
        let n = Math.max(t - 5, 0);
        return (0, i.velocityPerSecond)(s - e(n), t - n)
    }
    e.s(["getGeneratorVelocity", 0, s], 615768), e.s(["inertia", 0, function({
        keyframes: e,
        velocity: i = 0,
        power: n = .8,
        timeConstant: r = 325,
        bounceDamping: a = 10,
        bounceStiffness: o = 500,
        modifyTarget: l,
        min: u,
        max: h,
        restDelta: c = .5,
        restSpeed: d
    }) {
        let p, m, f = e[0],
            v = {
                done: !1,
                value: f
            },
            g = n * i,
            y = f + g,
            b = void 0 === l ? y : l(y);
        b !== y && (g = b - f);
        let x = e => -g * Math.exp(-e / r),
            T = e => b + x(e),
            V = e => {
                let t = x(e),
                    i = T(e);
                v.done = Math.abs(t) <= c, v.value = v.done ? b : i
            },
            S = e => {
                let i;
                if (i = v.value, void 0 !== u && i < u || void 0 !== h && i > h) {
                    var n;
                    p = e, m = (0, t.spring)({
                        keyframes: [v.value, (n = v.value, void 0 === u ? h : void 0 === h || Math.abs(u - n) < Math.abs(h - n) ? u : h)],
                        velocity: s(T, e, v.value),
                        damping: a,
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
                return (m || void 0 !== p || (t = !0, V(e), S(e)), void 0 !== p && e >= p) ? m.next(e - p) : (t || V(e), v)
            }
        }
    }], 962290);
    var n = e.i(120194);
    let r = (e, t, i) => (((1 - 3 * i + 3 * t) * e + (3 * i - 6 * t)) * e + 3 * t) * e;

    function a(e, t, i, s) {
        return e === t && i === s ? n.noop : n => 0 === n || 1 === n ? n : r(function(e, t, i, s, n) {
            let a, o, l = 0;
            do(a = r(o = t + (i - t) / 2, s, n) - e) > 0 ? i = o : t = o; while (Math.abs(a) > 1e-7 && ++l < 12) return o
        }(n, 0, 1, e, i), t, s)
    }
    e.s(["cubicBezier", 0, a], 764350);
    let o = a(.42, 0, 1, 1),
        l = a(0, 0, .58, 1),
        u = a(.42, 0, .58, 1);
    e.s(["easeIn", 0, o, "easeInOut", 0, u, "easeOut", 0, l], 515745), e.s(["isEasingArray", 0, e => Array.isArray(e) && "number" != typeof e[0]], 577182);
    let h = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
        c = e => t => 1 - e(1 - t);
    e.s(["reverseEasing", 0, c], 991388);
    let d = a(.33, 1.53, .69, .99),
        p = c(d),
        m = h(p);
    e.s(["backIn", 0, p, "backInOut", 0, m, "backOut", 0, d], 623016), e.s(["anticipate", 0, e => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * p(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))], 403981);
    let f = e => 1 - Math.sin(Math.acos(e)),
        v = c(f),
        g = h(f);
    e.s(["circIn", 0, f, "circInOut", 0, g, "circOut", 0, v], 509)
}, 111339, e => {
    "use strict";
    var t = e.i(725542),
        i = e.i(120194),
        s = e.i(403981),
        n = e.i(623016),
        r = e.i(509),
        a = e.i(764350),
        o = e.i(515745),
        l = e.i(210514);
    let u = {
        linear: i.noop,
        easeIn: o.easeIn,
        easeInOut: o.easeInOut,
        easeOut: o.easeOut,
        circIn: r.circIn,
        circInOut: r.circInOut,
        circOut: r.circOut,
        backIn: n.backIn,
        backInOut: n.backInOut,
        backOut: n.backOut,
        anticipate: s.anticipate
    };
    e.s(["easingDefinitionToFunction", 0, e => {
        if ((0, l.isBezierDefinition)(e)) {
            (0, t.invariant)(4 === e.length, "Cubic bezier arrays must contain four numerical values.", "cubic-bezier-length");
            let [i, s, n, r] = e;
            return (0, a.cubicBezier)(i, s, n, r)
        }
        return "string" == typeof e ? ((0, t.invariant)(void 0 !== u[e], `Invalid easing type '${e}'`, "invalid-easing-type"), u[e]) : e
    }])
}, 470934, e => {
    "use strict";
    e.s(["progress", 0, (e, t, i) => {
        let s = t - e;
        return s ? (i - e) / s : 1
    }])
}, 226056, 302461, 973626, e => {
    "use strict";
    var t = e.i(725542),
        i = e.i(508983),
        s = e.i(719372),
        n = e.i(120194),
        r = e.i(815645),
        a = e.i(470934),
        o = e.i(899290);
    e.s(["interpolate", 0, function(e, l, {
        clamp: u = !0,
        ease: h,
        mixer: c
    } = {}) {
        let d = e.length;
        if ((0, t.invariant)(d === l.length, "Both input and output ranges must be the same length", "range-length"), 1 === d) return () => l[0];
        if (2 === d && l[0] === l[1]) return () => l[1];
        let p = e[0] === e[1];
        e[0] > e[d - 1] && (e = [...e].reverse(), l = [...l].reverse());
        let m = function(e, t, i) {
                let a = [],
                    l = i || s.MotionGlobalConfig.mix || o.mix,
                    u = e.length - 1;
                for (let i = 0; i < u; i++) {
                    let s = l(e[i], e[i + 1]);
                    if (t) {
                        let e = Array.isArray(t) ? t[i] || n.noop : t;
                        s = (0, r.pipe)(e, s)
                    }
                    a.push(s)
                }
                return a
            }(l, h, c),
            f = m.length,
            v = t => {
                if (p && t < e[0]) return l[0];
                let i = 0;
                if (f > 1)
                    for (; i < e.length - 2 && !(t < e[i + 1]); i++);
                let s = (0, a.progress)(e[i], e[i + 1], t);
                return m[i](s)
            };
        return u ? t => v((0, i.clamp)(e[0], e[d - 1], t)) : v
    }], 226056);
    var l = e.i(327745);

    function u(e, t) {
        let i = e[e.length - 1];
        for (let s = 1; s <= t; s++) {
            let n = (0, a.progress)(0, t, s);
            e.push((0, l.mixNumber)(i, 1, n))
        }
    }
    e.s(["fillOffset", 0, u], 302461), e.s(["defaultOffset", 0, function(e) {
        let t = [0];
        return u(t, e.length - 1), t
    }], 973626)
}, 660195, e => {
    "use strict";
    var t = e.i(515745),
        i = e.i(577182),
        s = e.i(111339),
        n = e.i(226056),
        r = e.i(973626);
    e.s(["keyframes", 0, function({
        duration: e = 300,
        keyframes: a,
        times: o,
        ease: l = "easeInOut"
    }) {
        var u;
        let h = (0, i.isEasingArray)(l) ? l.map(s.easingDefinitionToFunction) : (0, s.easingDefinitionToFunction)(l),
            c = {
                done: !1,
                value: a[0]
            },
            d = (u = o && o.length === a.length ? o : (0, r.defaultOffset)(a), u.map(t => t * e)),
            p = (0, n.interpolate)(d, a, {
                ease: Array.isArray(h) ? h : a.map(() => h || t.easeInOut).splice(0, a.length - 1)
            });
        return {
            calculatedDuration: e,
            next: t => (c.value = p(t), c.done = t >= e, c)
        }
    }], 660195)
}, 662305, e => {
    "use strict";
    var t = e.i(962290),
        i = e.i(660195),
        s = e.i(102710);
    let n = {
        decay: t.inertia,
        inertia: t.inertia,
        tween: i.keyframes,
        keyframes: i.keyframes,
        spring: s.spring
    };
    e.s(["replaceTransitionType", 0, function(e) {
        "string" == typeof e.type && (e.type = n[e.type])
    }])
}, 678923, e => {
    "use strict";
    var t = e.i(815645),
        i = e.i(508983),
        s = e.i(633836),
        n = e.i(655408),
        r = e.i(899290),
        a = e.i(988876),
        o = e.i(962290),
        l = e.i(660195),
        u = e.i(659337),
        h = e.i(615768),
        c = e.i(367141),
        d = e.i(662305),
        p = e.i(684075);
    let m = e => e / 100;
    class f extends p.WithPromise {
        constructor(e) {
            super(), this.state = "idle", this.startTime = null, this.isStopped = !1, this.currentTime = 0, this.holdTime = null, this.playbackSpeed = 1, this.delayState = {
                done: !1,
                value: void 0
            }, this.stop = () => {
                let {
                    motionValue: e
                } = this.options;
                e && e.updatedAt !== n.time.now() && this.tick(n.time.now()), this.isStopped = !0, "idle" !== this.state && (this.teardown(), this.options.onStop?.())
            }, this.options = e, this.initAnimation(), this.play(), !1 === e.autoplay && this.pause()
        }
        initAnimation() {
            let {
                options: e
            } = this;
            (0, d.replaceTransitionType)(e);
            let {
                type: i = l.keyframes,
                repeat: s = 0,
                repeatDelay: n = 0,
                repeatType: a,
                velocity: o = 0
            } = e, {
                keyframes: h
            } = e, c = i || l.keyframes;
            c !== l.keyframes && "number" != typeof h[0] && (this.mixKeyframes = (0, t.pipe)(m, (0, r.mix)(h[0], h[1])), h = [0, 100]);
            let p = c({
                ...e,
                keyframes: h
            });
            "mirror" === a && (this.mirroredGenerator = c({
                ...e,
                keyframes: [...h].reverse(),
                velocity: -o
            })), null === p.calculatedDuration && (p.calculatedDuration = (0, u.calcGeneratorDuration)(p));
            let {
                calculatedDuration: f
            } = p;
            this.calculatedDuration = f, this.resolvedDuration = f + n, this.totalDuration = this.resolvedDuration * (s + 1) - n, this.generator = p
        }
        updateTime(e) {
            let t = Math.round(e - this.startTime) * this.playbackSpeed;
            null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = t
        }
        tick(e, t = !1) {
            let s, {
                generator: n,
                totalDuration: r,
                mixKeyframes: a,
                mirroredGenerator: l,
                resolvedDuration: u,
                calculatedDuration: h
            } = this;
            if (null === this.startTime) return n.next(0);
            let {
                delay: d = 0,
                keyframes: p,
                repeat: m,
                repeatType: f,
                repeatDelay: v,
                type: g,
                onUpdate: y,
                finalKeyframe: b
            } = this.options;
            this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - r / this.speed, this.startTime)), t ? this.currentTime = e : this.updateTime(e);
            let x = this.currentTime - d * (this.playbackSpeed >= 0 ? 1 : -1),
                T = this.playbackSpeed >= 0 ? x < 0 : x > r;
            this.currentTime = Math.max(x, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = r);
            let V = this.currentTime,
                S = n;
            if (m) {
                let e = Math.min(this.currentTime, r) / u,
                    t = Math.floor(e),
                    s = e % 1;
                !s && e >= 1 && (s = 1), 1 === s && t--, (t = Math.min(t, m + 1)) % 2 && ("reverse" === f ? (s = 1 - s, v && (s -= v / u)) : "mirror" === f && (S = l)), V = (0, i.clamp)(0, 1, s) * u
            }
            T ? (this.delayState.value = p[0], s = this.delayState) : s = S.next(V), a && !T && (s.value = a(s.value));
            let {
                done: w
            } = s;
            T || null === h || (w = this.playbackSpeed >= 0 ? this.currentTime >= r : this.currentTime <= 0);
            let M = null === this.holdTime && ("finished" === this.state || "running" === this.state && w);
            return M && g !== o.inertia && (s.value = (0, c.getFinalKeyframe)(p, this.options, b, this.speed)), y && y(s.value), M && this.finish(), s
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
            e = (0, s.secondsToMilliseconds)(e), this.currentTime = e, null === this.startTime || null !== this.holdTime || 0 === this.playbackSpeed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.playbackSpeed), this.driver ? this.driver.start(!1) : (this.startTime = 0, this.state = "paused", this.holdTime = e, this.tick(e))
        }
        getGeneratorVelocity() {
            let e = this.currentTime;
            if (e <= 0) return this.options.velocity || 0;
            if (this.generator.velocity) return this.generator.velocity(e);
            let t = this.generator.next(e).value;
            return (0, h.getGeneratorVelocity)(e => this.generator.next(e).value, e, t)
        }
        get speed() {
            return this.playbackSpeed
        }
        set speed(e) {
            let t = this.playbackSpeed !== e;
            t && this.driver && this.updateTime(n.time.now()), this.playbackSpeed = e, t && this.driver && (this.time = (0, s.millisecondsToSeconds)(this.currentTime))
        }
        play() {
            if (this.isStopped) return;
            let {
                driver: e = a.frameloopDriver,
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
            this.state = "idle", this.stopDriver(), this.startTime = this.holdTime = null
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
    e.s(["JSAnimation", 0, f])
}, 240998, 414116, 152367, e => {
    "use strict";
    var t = e.i(508983),
        i = e.i(655408),
        s = e.i(913777),
        n = e.i(678923),
        r = e.i(693660),
        a = e.i(662305),
        o = e.i(509),
        l = e.i(623016);
    let u = {
        anticipate: e.i(403981).anticipate,
        backInOut: l.backInOut,
        circInOut: o.circInOut
    };
    class h extends r.NativeAnimation {
        constructor(e) {
            ! function(e) {
                "string" == typeof e.ease && e.ease in u && (e.ease = u[e.ease])
            }(e), (0, a.replaceTransitionType)(e), super(e), void 0 !== e.startTime && !1 !== e.autoplay && (this.startTime = e.startTime), this.options = e
        }
        updateMotionValue(e) {
            let {
                motionValue: r,
                onUpdate: a,
                onComplete: o,
                element: l,
                ...u
            } = this.options;
            if (!r) return;
            if (void 0 !== e) return void r.set(e);
            let h = new n.JSAnimation({
                    ...u,
                    autoplay: !1
                }),
                c = Math.max(10, i.time.now() - this.startTime),
                d = (0, t.clamp)(0, 10, c - 10),
                p = h.sample(c).value,
                {
                    name: m
                } = this.options;
            l && m && (0, s.setStyle)(l, m, p), r.setWithVelocity(h.sample(Math.max(0, c - d)).value, p, d), h.stop()
        }
    }
    e.s(["NativeAnimationExtended", 0, h], 240998);
    var c = e.i(725542),
        d = e.i(855397),
        p = e.i(53768);
    let m = (e, t) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (p.complex.test(e) || "0" === e) && !e.startsWith("url("));
    e.s(["canAnimate", 0, function(e, t, i, s) {
        let n = e[0];
        if (null === n) return !1;
        if ("display" === t || "visibility" === t) return !0;
        let r = e[e.length - 1],
            a = m(n, t),
            o = m(r, t);
        return (0, c.warning)(a === o, `You are trying to animate ${t} from "${n}" to "${r}". "${a?r:n}" is not an animatable value.`, "value-not-animatable"), !!a && !!o && (function(e) {
            let t = e[0];
            if (1 === e.length) return !0;
            for (let i = 0; i < e.length; i++)
                if (e[i] !== t) return !0
        }(e) || ("spring" === i || (0, d.isGenerator)(i)) && s)
    }], 414116), e.s(["makeAnimationInstant", 0, function(e) {
        e.duration = 0, e.type = "keyframes"
    }], 152367)
}, 332297, e => {
    "use strict";
    var t = e.i(719372),
        i = e.i(120194),
        s = e.i(655408),
        n = e.i(678923),
        r = e.i(367141),
        a = e.i(433040),
        o = e.i(240998),
        l = e.i(414116),
        u = e.i(152367),
        h = e.i(684075),
        c = e.i(761866),
        d = e.i(901608);
    let p = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/,
        m = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"]),
        f = (0, c.memo)(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
    class v extends h.WithPromise {
        constructor({
            autoplay: e = !0,
            delay: t = 0,
            type: i = "keyframes",
            repeat: n = 0,
            repeatDelay: r = 0,
            repeatType: o = "loop",
            keyframes: l,
            name: u,
            motionValue: h,
            element: c,
            ...d
        }) {
            super(), this.stop = () => {
                this._animation && (this._animation.stop(), this.stopTimeline?.()), this.keyframeResolver?.cancel()
            }, this.createdAt = s.time.now();
            const p = {
                    autoplay: e,
                    delay: t,
                    type: i,
                    repeat: n,
                    repeatDelay: r,
                    repeatType: o,
                    name: u,
                    motionValue: h,
                    element: c,
                    ...d
                },
                m = c?.KeyframeResolver || a.KeyframeResolver;
            this.keyframeResolver = new m(l, (e, t, i) => this.onKeyframesResolved(e, t, p, !i), u, h, c), this.keyframeResolver?.scheduleResolve()
        }
        onKeyframesResolved(e, a, h, c) {
            let v;
            this.keyframeResolver = void 0;
            let {
                name: g,
                type: y,
                velocity: b,
                delay: x,
                isHandoff: T,
                onUpdate: V
            } = h;
            this.resolvedAt = s.time.now();
            let S = !0;
            (0, l.canAnimate)(e, g, y, b) || (S = !1, (t.MotionGlobalConfig.instantAnimations || !x) && V?.((0, r.getFinalKeyframe)(e, h, a)), e[0] = e[e.length - 1], (0, u.makeAnimationInstant)(h), h.repeat = 0);
            let w = {
                    startTime: c ? this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt : void 0,
                    finalKeyframe: a,
                    ...h,
                    keyframes: e
                },
                M = S && !T && function(e) {
                    let {
                        motionValue: t,
                        name: i,
                        repeatDelay: s,
                        repeatType: n,
                        damping: r,
                        type: a,
                        keyframes: o
                    } = e;
                    if (!(t?.owner?.current instanceof HTMLElement)) return !1;
                    let {
                        onUpdate: l,
                        transformTemplate: u
                    } = t.owner.getProps();
                    return f() && i && (d.acceleratedValues.has(i) || m.has(i) && function(e) {
                        for (let t = 0; t < e.length; t++)
                            if ("string" == typeof e[t] && p.test(e[t])) return !0;
                        return !1
                    }(o)) && ("transform" !== i || !u) && !l && !s && "mirror" !== n && 0 !== r && "inertia" !== a
                }(w),
                A = w.motionValue?.owner?.current;
            if (M) try {
                v = new o.NativeAnimationExtended({
                    ...w,
                    element: A
                })
            } catch {
                v = new n.JSAnimation(w)
            } else v = new n.JSAnimation(w);
            v.finished.then(() => {
                this.notifyFinished()
            }).catch(i.noop), this.pendingTimeline && (this.stopTimeline = v.attachTimeline(this.pendingTimeline), this.pendingTimeline = void 0), this._animation = v
        }
        get finished() {
            return this._animation ? this.animation.finished : this._finished
        }
        then(e, t) {
            return this.finished.finally(e).then(() => {})
        }
        get animation() {
            return this._animation || (this.keyframeResolver?.resume(), (0, a.flushKeyframeResolvers)()), this._animation
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
    e.s(["AsyncMotionValueAnimation", 0, v], 332297)
}, 899565, e => {
    "use strict";
    var t = e.i(633836),
        i = e.i(719372),
        s = e.i(332297),
        n = e.i(678923),
        r = e.i(989445),
        a = e.i(152367),
        o = e.i(382053);
    let l = {
            type: "spring",
            stiffness: 500,
            damping: 25,
            restSpeed: 10
        },
        u = {
            type: "keyframes",
            duration: .8
        },
        h = {
            type: "keyframes",
            ease: [.25, .1, .35, 1],
            duration: .3
        };
    var c = e.i(367141);
    let d = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
    var p = e.i(672357);
    e.s(["animateMotionValue", 0, (e, m, f, v = {}, g, y) => b => {
        let x = (0, r.getValueTransition)(v, e) || {},
            T = x.delay || v.delay || 0,
            {
                elapsed: V = 0
            } = v;
        V -= (0, t.secondsToMilliseconds)(T);
        let S = {
            keyframes: Array.isArray(f) ? f : [null, f],
            ease: "easeOut",
            velocity: m.getVelocity(),
            ...x,
            delay: -V,
            onUpdate: e => {
                m.set(e), x.onUpdate && x.onUpdate(e)
            },
            onComplete: () => {
                b(), x.onComplete && x.onComplete()
            },
            name: e,
            motionValue: m,
            element: y ? void 0 : g
        };
        ! function(e) {
            for (let t in e)
                if (!d.has(t)) return !0;
            return !1
        }(x) && Object.assign(S, ((e, {
            keyframes: t
        }) => t.length > 2 ? u : o.transformProps.has(e) ? e.startsWith("scale") ? {
            type: "spring",
            stiffness: 550,
            damping: 0 === t[1] ? 2 * Math.sqrt(550) : 30,
            restSpeed: 10
        } : l : h)(e, S)), S.duration && (S.duration = (0, t.secondsToMilliseconds)(S.duration)), S.repeatDelay && (S.repeatDelay = (0, t.secondsToMilliseconds)(S.repeatDelay)), void 0 !== S.from && (S.keyframes[0] = S.from);
        let w = !1;
        if (!1 !== S.type && (0 !== S.duration || S.repeatDelay) || ((0, a.makeAnimationInstant)(S), 0 === S.delay && (w = !0)), (i.MotionGlobalConfig.instantAnimations || i.MotionGlobalConfig.skipAnimations || g?.shouldSkipAnimations || x.skipAnimations) && (w = !0, (0, a.makeAnimationInstant)(S), S.delay = 0), S.allowFlatten = !x.type && !x.ease, w && !y && void 0 !== m.get()) {
            let e = (0, c.getFinalKeyframe)(S.keyframes, x);
            if (void 0 !== e) return void p.frame.update(() => {
                S.onUpdate(e), S.onComplete()
            })
        }
        return x.isSync ? new n.JSAnimation(S) : new s.AsyncMotionValueAnimation(S)
    }], 899565)
}, 702907, 530754, 454146, e => {
    "use strict";
    var t = e.i(488342),
        i = e.i(989445),
        s = e.i(168185),
        n = e.i(470442),
        r = e.i(142555),
        a = e.i(707051),
        o = e.i(576243),
        l = e.i(899565),
        u = e.i(672357);

    function h(e, t, {
        delay: c = 0,
        transitionOverride: d,
        type: p
    } = {}) {
        let {
            transition: m,
            transitionEnd: f,
            ...v
        } = t, g = e.getDefaultTransition();
        m = m ? (0, s.resolveTransition)(m, g) : g;
        let y = m?.reduceMotion,
            b = m?.skipAnimations;
        d && (m = d);
        let x = [],
            T = p && e.animationState && e.animationState.getState()[p],
            V = m?.path;
        for (let t in V && V.animateVisualElement(e, v, m, c, x), v) {
            let s = e.getValue(t, e.latestValues[t] ?? null),
                r = v[t];
            if (void 0 === r || T && function({
                    protectedKeys: e,
                    needsAnimating: t
                }, i) {
                    let s = e.hasOwnProperty(i) && !0 !== t[i];
                    return t[i] = !1, s
                }(T, t)) continue;
            let h = {
                delay: c,
                ...(0, i.getValueTransition)(m || {}, t)
            };
            b && (h.skipAnimations = !0);
            let d = s.get();
            if (void 0 !== d && !s.isAnimating() && !Array.isArray(r) && r === d && !h.velocity) {
                u.frame.update(() => s.set(r));
                continue
            }
            let p = !1;
            if (window.MotionHandoffAnimation) {
                let i = (0, o.getOptimisedAppearId)(e);
                if (i) {
                    let e = window.MotionHandoffAnimation(i, t, u.frame);
                    null !== e && (h.startTime = e, p = !0)
                }
            }(0, a.addValueToWillChange)(e, t);
            let f = y ?? e.shouldReduceMotion;
            s.start((0, l.animateMotionValue)(t, s, r, f && n.positionalKeys.has(t) ? {
                type: !1
            } : h, e, p));
            let g = s.animation;
            g && x.push(g)
        }
        if (f) {
            let t = () => u.frame.update(() => {
                f && (0, r.setTarget)(e, f)
            });
            x.length ? Promise.all(x).then(t) : t()
        }
        return x
    }

    function c(e, t, i, s = 0, n = 1) {
        let r = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t),
            a = e.size,
            o = (a - 1) * s;
        return "function" == typeof i ? i(r, a) : 1 === n ? r * s : o - r * s
    }

    function d(e, i, s = {}) {
        let n = (0, t.resolveVariant)(e, i, "exit" === s.type ? e.presenceContext?.custom : void 0),
            {
                transition: r = e.getDefaultTransition() || {}
            } = n || {};
        s.transitionOverride && (r = s.transitionOverride);
        let a = n ? () => Promise.all(h(e, n, s)) : () => Promise.resolve(),
            o = e.variantChildren && e.variantChildren.size ? (t = 0) => {
                let {
                    delayChildren: n = 0,
                    staggerChildren: a,
                    staggerDirection: o
                } = r;
                return function(e, t, i = 0, s = 0, n = 0, r = 1, a) {
                    let o = [];
                    for (let l of e.variantChildren) l.notify("AnimationStart", t), o.push(d(l, t, {
                        ...a,
                        delay: i + ("function" == typeof s ? 0 : s) + c(e.variantChildren, l, s, n, r)
                    }).then(() => l.notify("AnimationComplete", t)));
                    return Promise.all(o)
                }(e, i, t, n, a, o, s)
            } : () => Promise.resolve(),
            {
                when: l
            } = r;
        if (!l) return Promise.all([a(), o(s.delay)]);
        {
            let [e, t] = "beforeChildren" === l ? [a, o] : [o, a];
            return e().then(() => t())
        }
    }
    e.s(["animateTarget", 0, h], 530754), e.s(["calcChildStagger", 0, c], 454146), e.s(["animateVisualElement", 0, function(e, i, s = {}) {
        let n;
        if (e.notify("AnimationStart", i), Array.isArray(i)) n = Promise.all(i.map(t => d(e, t, s)));
        else if ("string" == typeof i) n = d(e, i, s);
        else {
            let r = "function" == typeof i ? (0, t.resolveVariant)(e, i, s.custom) : i;
            n = Promise.all(h(e, r, s))
        }
        return n.then(() => {
            e.notify("AnimationComplete", i)
        })
    }], 702907)
}, 272781, e => {
    "use strict";
    var t = e.i(653425),
        i = e.i(250760);
    let s = i.variantProps.length;
    e.s(["getVariantContext", 0, function e(n) {
        if (!n) return;
        if (!n.isControllingVariants) {
            let t = n.parent && e(n.parent) || {};
            return void 0 !== n.props.initial && (t.initial = n.props.initial), t
        }
        let r = {};
        for (let e = 0; e < s; e++) {
            let s = i.variantProps[e],
                a = n.props[s];
            ((0, t.isVariantLabel)(a) || !1 === a) && (r[s] = a)
        }
        return r
    }])
}, 263422, e => {
    "use strict";
    var t = e.i(792075),
        i = e.i(702907),
        s = e.i(454146),
        n = e.i(272781),
        r = e.i(819673),
        a = e.i(694933),
        o = e.i(653425),
        l = e.i(488342);

    function u(e, t) {
        if (!Array.isArray(t)) return !1;
        let i = t.length;
        if (i !== e.length) return !1;
        for (let s = 0; s < i; s++)
            if (t[s] !== e[s]) return !1;
        return !0
    }
    var h = e.i(250760);
    let c = [...h.variantPriorityOrder].reverse(),
        d = h.variantPriorityOrder.length;

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
    class f extends t.Feature {
        constructor(e) {
            super(e), e.animationState || (e.animationState = function(e) {
                let t = t => Promise.all(t.map(({
                        animation: t,
                        options: s
                    }) => (0, i.animateVisualElement)(e, t, s))),
                    h = m(),
                    p = !0,
                    f = !1,
                    v = t => (i, s) => {
                        let n = (0, l.resolveVariant)(e, s, "exit" === t ? e.presenceContext?.custom : void 0);
                        if (n) {
                            let {
                                transition: e,
                                transitionEnd: t,
                                ...s
                            } = n;
                            i = {
                                ...i,
                                ...s,
                                ...t
                            }
                        }
                        return i
                    };

                function g(i) {
                    let {
                        props: m
                    } = e, g = (0, n.getVariantContext)(e.parent) || {}, y = [], b = new Set, x = {}, T = 1 / 0;
                    for (let t = 0; t < d; t++) {
                        var V, S;
                        let n = c[t],
                            d = h[n],
                            w = void 0 !== m[n] ? m[n] : g[n],
                            M = (0, o.isVariantLabel)(w),
                            A = n === i ? d.isActive : null;
                        !1 === A && (T = t);
                        let C = w === g[n] && w !== m[n] && M;
                        if (C && (p || f) && e.manuallyAnimateOnMount && (C = !1), d.protectedKeys = {
                                ...x
                            }, !d.isActive && null === A || !w && !d.prevProp || (0, r.isAnimationControls)(w) || "boolean" == typeof w) continue;
                        if ("exit" === n && d.isActive && !0 !== A) {
                            d.prevResolvedValues && (x = {
                                ...x,
                                ...d.prevResolvedValues
                            });
                            continue
                        }
                        let k = (V = d.prevProp, "string" == typeof(S = w) ? S !== V : !!Array.isArray(S) && !u(S, V)),
                            P = k || n === i && d.isActive && !C && M || t > T && M,
                            E = !1,
                            F = Array.isArray(w) ? w : [w],
                            O = F.reduce(v(n), {});
                        !1 === A && (O = {});
                        let {
                            prevResolvedValues: R = {}
                        } = d, I = {
                            ...R,
                            ...O
                        }, B = t => {
                            P = !0, b.has(t) && (E = !0, b.delete(t)), d.needsAnimating[t] = !0;
                            let i = e.getValue(t);
                            i && (i.liveStyle = !1)
                        };
                        for (let e in I) {
                            let t = O[e],
                                i = R[e];
                            if (!x.hasOwnProperty(e))((0, a.isKeyframesTarget)(t) && (0, a.isKeyframesTarget)(i) ? !u(t, i) || k : t !== i) ? null != t ? B(e) : b.add(e) : void 0 !== t && b.has(e) ? B(e) : d.protectedKeys[e] = !0
                        }
                        d.prevProp = w, d.prevResolvedValues = O, d.isActive && (x = {
                            ...x,
                            ...O
                        }), (p || f) && e.blockInitialAnimation && (P = !1);
                        let D = C && k,
                            N = !D || E;
                        P && N && y.push(...F.map(t => {
                            let i = {
                                type: n
                            };
                            if ("string" == typeof t && (p || f) && !D && e.manuallyAnimateOnMount && e.parent) {
                                let {
                                    parent: n
                                } = e, r = (0, l.resolveVariant)(n, t);
                                if (n.enteringChildren && r) {
                                    let {
                                        delayChildren: t
                                    } = r.transition || {};
                                    i.delay = (0, s.calcChildStagger)(n.enteringChildren, e, t)
                                }
                            }
                            return {
                                animation: t,
                                options: i
                            }
                        }))
                    }
                    if (b.size) {
                        let t = {};
                        if ("boolean" != typeof m.initial) {
                            let i = (0, l.resolveVariant)(e, Array.isArray(m.initial) ? m.initial[0] : m.initial);
                            i && i.transition && (t.transition = i.transition)
                        }
                        b.forEach(i => {
                            let s = e.getBaseTarget(i),
                                n = e.getValue(i);
                            n && (n.liveStyle = !0), t[i] = s ?? null
                        }), y.push({
                            animation: t
                        })
                    }
                    let w = !!y.length;
                    return p && (!1 === m.initial || m.initial === m.animate) && !e.manuallyAnimateOnMount && (w = !1), p = !1, f = !1, w ? t(y) : Promise.resolve()
                }
                return {
                    animateChanges: g,
                    setActive: function(t, i) {
                        if (h[t].isActive === i) return Promise.resolve();
                        e.variantChildren?.forEach(e => e.animationState?.setActive(t, i)), h[t].isActive = i;
                        let s = g(t);
                        for (let e in h) h[e].protectedKeys = {};
                        return s
                    },
                    setAnimateFunction: function(i) {
                        t = i(e)
                    },
                    getState: () => h,
                    reset: () => {
                        h = m(), f = !0
                    }
                }
            }(e))
        }
        updateAnimationControlsSubscription() {
            let {
                animate: e
            } = this.node.getProps();
            (0, r.isAnimationControls)(e) && (this.unmountControls = e.subscribe(this.node))
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
    var v = t;
    let g = 0;
    class y extends v.Feature {
        constructor() {
            super(...arguments), this.id = g++, this.isExitComplete = !1
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
            if (e && !1 === i) {
                if (this.isExitComplete) {
                    let {
                        initial: e,
                        custom: t
                    } = this.node.getProps();
                    if ("string" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e)) {
                        let i = (0, l.resolveVariant)(this.node, e, t);
                        if (i) {
                            let {
                                transition: e,
                                transitionEnd: t,
                                ...s
                            } = i;
                            for (let e in s) this.node.getValue(e)?.jump(s[e])
                        }
                    }
                    this.node.animationState.reset(), this.node.animationState.animateChanges()
                } else this.node.animationState.setActive("exit", !1);
                this.isExitComplete = !1;
                return
            }
            let s = this.node.animationState.setActive("exit", !e);
            t && !e && s.then(() => {
                this.isExitComplete = !0, t(this.id)
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
            Feature: f
        },
        exit: {
            Feature: y
        }
    }], 263422)
}, 342288, e => {
    "use strict";
    e.s(["addDomEvent", 0, function(e, t, i, s = {
        passive: !0
    }) {
        return e.addEventListener(t, i, s), () => e.removeEventListener(t, i, s)
    }])
}, 628453, e => {
    "use strict";
    let t = {
        x: !1,
        y: !1
    };
    e.s(["isDragActive", 0, function() {
        return t.x || t.y
    }, "isDragging", 0, t])
}, 825465, e => {
    "use strict";
    e.s(["isObject", 0, e => "object" == typeof e && null !== e])
}, 674153, e => {
    "use strict";
    let t = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]),
        i = new Set(["INPUT", "SELECT", "TEXTAREA"]);
    e.s(["isElementKeyboardAccessible", 0, function(e) {
        return t.has(e.tagName) || !0 === e.isContentEditable
    }, "isElementTextInput", 0, function(e) {
        return i.has(e.tagName) || !0 === e.isContentEditable
    }])
}, 201110, 914712, e => {
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
    e.s(["isPrimaryPointer", 0, t], 914712), e.s(["addPointerInfo", 0, e => s => t(s) && e(s, i(s)), "extractEventInfo", 0, i], 201110)
}, 535873, 292168, e => {
    "use strict";
    var t = e.i(628453),
        i = e.i(513038);

    function s(e, t) {
        let s = (0, i.resolveElements)(e),
            n = new AbortController;
        return [s, {
            passive: !0,
            ...t,
            signal: n.signal
        }, () => n.abort()]
    }
    e.s(["setupGesture", 0, s], 292168), e.s(["hover", 0, function(e, i, n = {}) {
        let [r, a, o] = s(e, n);
        return r.forEach(e => {
            let s, n = !1,
                r = !1,
                o = t => {
                    s && (s(t), s = void 0), e.removeEventListener("pointerleave", u)
                },
                l = e => {
                    n = !1, window.removeEventListener("pointerup", l), window.removeEventListener("pointercancel", l), r && (r = !1, o(e))
                },
                u = e => {
                    if ("touch" !== e.pointerType) {
                        if (n) {
                            r = !0;
                            return
                        }
                        o(e)
                    }
                };
            e.addEventListener("pointerenter", n => {
                if ("touch" === n.pointerType || (0, t.isDragActive)()) return;
                r = !1;
                let o = i(e, n);
                "function" == typeof o && (s = o, e.addEventListener("pointerleave", u, a))
            }, a), e.addEventListener("pointerdown", () => {
                n = !0, window.addEventListener("pointerup", l, a), window.addEventListener("pointercancel", l, a)
            }, a)
        }), o
    }], 535873)
}, 779407, e => {
    "use strict";
    var t = e.i(792075),
        i = e.i(535873),
        s = e.i(672357),
        n = e.i(201110);

    function r(e, t, i) {
        let {
            props: r
        } = e;
        e.animationState && r.whileHover && e.animationState.setActive("whileHover", "Start" === i);
        let a = r["onHover" + i];
        a && s.frame.postRender(() => a(t, (0, n.extractEventInfo)(t)))
    }
    class a extends t.Feature {
        mount() {
            let {
                current: e
            } = this.node;
            e && (this.unmount = (0, i.hover)(e, (e, t) => (r(this.node, t, "Start"), e => r(this.node, e, "End"))))
        }
        unmount() {}
    }
    e.s(["HoverGesture", 0, a])
}, 871207, e => {
    "use strict";
    var t = e.i(792075),
        i = e.i(342288),
        s = e.i(815645);
    class n extends t.Feature {
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
            this.unmount = (0, s.pipe)((0, i.addDomEvent)(this.node.current, "focus", () => this.onFocus()), (0, i.addDomEvent)(this.node.current, "blur", () => this.onBlur()))
        }
        unmount() {}
    }
    e.s(["FocusGesture", 0, n])
}, 335029, e => {
    "use strict";
    var t = e.i(825465);
    e.s(["isHTMLElement", 0, function(e) {
        return (0, t.isObject)(e) && "offsetHeight" in e && !("ownerSVGElement" in e)
    }])
}, 863780, e => {
    "use strict";
    let t = (e, i) => !!i && (e === i || t(e, i.parentElement));
    e.s(["isNodeOrChild", 0, t])
}, 159313, e => {
    "use strict";
    var t = e.i(779407),
        i = e.i(871207),
        s = e.i(792075),
        n = e.i(335029),
        r = e.i(628453),
        a = e.i(863780),
        o = e.i(914712),
        l = e.i(292168),
        u = e.i(674153);
    let h = new WeakSet;

    function c(e) {
        return t => {
            "Enter" === t.key && e(t)
        }
    }

    function d(e, t) {
        e.dispatchEvent(new PointerEvent("pointer" + t, {
            isPrimary: !0,
            bubbles: !0
        }))
    }

    function p(e) {
        return (0, o.isPrimaryPointer)(e) && !(0, r.isDragActive)()
    }
    let m = new WeakSet;
    var f = e.i(672357),
        v = e.i(201110);

    function g(e, t, i) {
        let {
            props: s
        } = e;
        if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
        e.animationState && s.whileTap && e.animationState.setActive("whileTap", "Start" === i);
        let n = s["onTap" + ("End" === i ? "" : i)];
        n && f.frame.postRender(() => n(t, (0, v.extractEventInfo)(t)))
    }
    class y extends s.Feature {
        mount() {
            let {
                current: e
            } = this.node;
            if (!e) return;
            let {
                globalTapTarget: t,
                propagate: i
            } = this.node.props;
            this.unmount = function(e, t, i = {}) {
                let [s, r, o] = (0, l.setupGesture)(e, i), f = e => {
                    let s = e.currentTarget;
                    if (!p(e) || m.has(e)) return;
                    h.add(s), i.stopPropagation && m.add(e);
                    let n = t(s, e),
                        o = {
                            ...r,
                            capture: !0
                        },
                        l = (e, t) => {
                            window.removeEventListener("pointerup", u, o), window.removeEventListener("pointercancel", c, o), h.has(s) && h.delete(s), p(e) && "function" == typeof n && n(e, {
                                success: t
                            })
                        },
                        u = e => {
                            l(e, s === window || s === document || i.useGlobalTarget || (0, a.isNodeOrChild)(s, e.target))
                        },
                        c = e => {
                            l(e, !1)
                        };
                    window.addEventListener("pointerup", u, o), window.addEventListener("pointercancel", c, o)
                };
                return s.forEach(e => {
                    (i.useGlobalTarget ? window : e).addEventListener("pointerdown", f, r), (0, n.isHTMLElement)(e) && (e.addEventListener("focus", e => ((e, t) => {
                        let i = e.currentTarget;
                        if (!i) return;
                        let s = c(() => {
                            if (h.has(i)) return;
                            d(i, "down");
                            let e = c(() => {
                                d(i, "up")
                            });
                            i.addEventListener("keyup", e, t), i.addEventListener("blur", () => d(i, "cancel"), t)
                        });
                        i.addEventListener("keydown", s, t), i.addEventListener("blur", () => i.removeEventListener("keydown", s), t)
                    })(e, r)), (0, u.isElementKeyboardAccessible)(e) || e.hasAttribute("tabindex") || (e.tabIndex = 0))
                }), o
            }(e, (e, t) => (g(this.node, t, "Start"), (e, {
                success: t
            }) => g(this.node, e, t ? "End" : "Cancel")), {
                useGlobalTarget: t,
                stopPropagation: i?.tap === !1
            })
        }
        unmount() {}
    }
    var b = s;
    let x = new WeakMap,
        T = new WeakMap,
        V = e => {
            let t = x.get(e.target);
            t && t(e)
        },
        S = e => {
            e.forEach(V)
        },
        w = {
            some: 0,
            all: 1
        };
    class M extends b.Feature {
        constructor() {
            super(...arguments), this.hasEnteredView = !1, this.isInView = !1
        }
        startObserver() {
            var e;
            let t;
            this.stopObserver?.();
            let {
                viewport: i = {}
            } = this.node.getProps(), {
                root: s,
                margin: n,
                amount: r = "some",
                once: a
            } = i, o = {
                root: s ? s.current : void 0,
                rootMargin: n,
                threshold: "number" == typeof r ? r : w[r]
            }, l = e => {
                let {
                    isIntersecting: t
                } = e;
                if (this.isInView === t || (this.isInView = t, a && !t && this.hasEnteredView)) return;
                t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                let {
                    onViewportEnter: i,
                    onViewportLeave: s
                } = this.node.getProps(), n = t ? i : s;
                n && n(e)
            };
            this.stopObserver = (e = this.node.current, t = function({
                root: e,
                ...t
            }) {
                let i = e || document;
                T.has(i) || T.set(i, {});
                let s = T.get(i),
                    n = JSON.stringify(t);
                return s[n] || (s[n] = new IntersectionObserver(S, {
                    root: e,
                    ...t
                })), s[n]
            }(o), x.set(e, l), t.observe(e), () => {
                x.delete(e), t.unobserve(e)
            })
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
        unmount() {
            this.stopObserver?.(), this.hasEnteredView = !1, this.isInView = !1
        }
    }
    let A = {
        inView: {
            Feature: M
        },
        tap: {
            Feature: y
        },
        focus: {
            Feature: i.FocusGesture
        },
        hover: {
            Feature: t.HoverGesture
        }
    };
    e.s(["gestureAnimations", 0, A], 159313)
}]);