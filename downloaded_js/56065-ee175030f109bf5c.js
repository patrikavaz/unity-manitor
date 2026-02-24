! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
        e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                if (null != r)
                    for (var n in r) r.hasOwnProperty(n) && (e[n] = r[n])
            }
            return e
        }({}, e._sentryModuleMetadata[(new e.Error).stack], {
            "_sentryBundlerPluginAppKey:hexagon-web": !0
        })
    } catch (e) {}
}();
"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [56065], {
        3482: (e, t, r) => {
            r.d(t, {
                G: () => n
            });

            function n(e) {
                return "object" == typeof e && null !== e
            }
        },
        13328: (e, t, r) => {
            r.d(t, {
                G: () => f
            });
            var n = r(53076),
                i = r(32672),
                o = r(77704),
                s = r(23017),
                a = r(17686);

            function l(e, t) {
                let r = (0, a.d)(t()),
                    n = () => r.set(t());
                return n(), (0, s.E)(() => {
                    let t = () => o.Gt.preRender(n, !1, !0),
                        r = e.map(e => e.on("change", t));
                    return () => {
                        r.forEach(e => e()), (0, o.WG)(n)
                    }
                }), r
            }
            var u = r(11161);

            function f(e, t, r, i) {
                if ("function" == typeof e) {
                    u.bt.current = [], e();
                    let t = l(u.bt.current, e);
                    return u.bt.current = void 0, t
                }
                let o = "function" == typeof t ? t : function(...e) {
                    let t = !Array.isArray(e[0]),
                        r = t ? 0 : -1,
                        i = e[0 + r],
                        o = e[1 + r],
                        s = e[2 + r],
                        a = e[3 + r],
                        l = (0, n.G)(o, s, a);
                    return t ? l(i) : l
                }(t, r, i);
                return Array.isArray(e) ? c(e, o) : c([e], ([e]) => o(e))
            }

            function c(e, t) {
                let r = (0, i.M)(() => []);
                return l(e, () => {
                    r.length = 0;
                    let n = e.length;
                    for (let t = 0; t < n; t++) r[t] = e[t].get();
                    return t(r)
                })
            }
        },
        17686: (e, t, r) => {
            r.d(t, {
                d: () => a
            });
            var n = r(11161),
                i = r(88491),
                o = r(54423),
                s = r(32672);

            function a(e) {
                let t = (0, s.M)(() => (0, n.OQ)(e)),
                    {
                        isStatic: r
                    } = (0, i.useContext)(o.Q);
                if (r) {
                    let [, r] = (0, i.useState)(e);
                    (0, i.useEffect)(() => t.on("change", r), [])
                }
                return t
            }
        },
        30944: (e, t, r) => {
            r.d(t, {
                s: () => i
            });
            var n = r(3482);

            function i(e) {
                return (0, n.G)(e) && "offsetHeight" in e
            }
        },
        56329: (e, t, r) => {
            function n(e) {
                var t = e.toString(16);
                return 1 === t.length ? "0" + t : t
            }

            function i(e) {
                return "#" + e.map(n).join("")
            }

            function o(e, t, r) {
                for (var n = 0; n < r.length; n++)
                    if (function(e, t, r) {
                            var n, i, o, a, l, u;
                            switch (r.length) {
                                case 3:
                                    if (n = e, i = t, o = r, 255 !== n[i + 3] || n[i] === o[0] && n[i + 1] === o[1] && n[i + 2] === o[2]) return !0;
                                    break;
                                case 4:
                                    if (a = e, l = t, u = r, a[l + 3] && u[3] ? a[l] === u[0] && a[l + 1] === u[1] && a[l + 2] === u[2] && a[l + 3] === u[3] : a[l + 3] === u[3]) return !0;
                                    break;
                                case 5:
                                    if (function(e, t, r) {
                                            var n = r[0],
                                                i = r[1],
                                                o = r[2],
                                                a = r[3],
                                                l = r[4],
                                                u = e[t + 3],
                                                f = s(u, a, l);
                                            return a ? !!(!u && f || s(e[t], n, l) && s(e[t + 1], i, l) && s(e[t + 2], o, l) && f) : f
                                        }(e, t, r)) return !0;
                                    break;
                                default:
                                    return !1
                            }
                        }(e, t, r[n])) return !0;
                return !1
            }

            function s(e, t, r) {
                return e >= t - r && e <= t + r
            }

            function a(e, t, r) {
                for (var n = {}, i = r.dominantDivider || 24, s = r.ignoredColor, a = r.step, l = [0, 0, 0, 0, 0], u = 0; u < t; u += a) {
                    var f = e[u],
                        c = e[u + 1],
                        d = e[u + 2],
                        h = e[u + 3];
                    if (!(s && o(e, u, s))) {
                        var g = Math.round(f / i) + "," + Math.round(c / i) + "," + Math.round(d / i);
                        n[g] ? n[g] = [n[g][0] + f * h, n[g][1] + c * h, n[g][2] + d * h, n[g][3] + h, n[g][4] + 1] : n[g] = [f * h, c * h, d * h, h, 1], l[4] < n[g][4] && (l = n[g])
                    }
                }
                var v = l[0],
                    p = l[1],
                    m = l[2],
                    y = l[3],
                    w = l[4];
                return y ? [Math.round(v / y), Math.round(p / y), Math.round(m / y), Math.round(y / w)] : r.defaultColor
            }

            function l(e, t, r) {
                for (var n = 0, i = 0, s = 0, a = 0, l = 0, u = r.ignoredColor, f = r.step, c = 0; c < t; c += f) {
                    var d = e[c + 3],
                        h = e[c] * d,
                        g = e[c + 1] * d,
                        v = e[c + 2] * d;
                    !(u && o(e, c, u)) && (n += h, i += g, s += v, a += d, l++)
                }
                return a ? [Math.round(n / a), Math.round(i / a), Math.round(s / a), Math.round(a / l)] : r.defaultColor
            }

            function u(e, t, r) {
                for (var n = 0, i = 0, s = 0, a = 0, l = 0, u = r.ignoredColor, f = r.step, c = 0; c < t; c += f) {
                    var d = e[c],
                        h = e[c + 1],
                        g = e[c + 2],
                        v = e[c + 3];
                    !(u && o(e, c, u)) && (n += d * d * v, i += h * h * v, s += g * g * v, a += v, l++)
                }
                return a ? [Math.round(Math.sqrt(n / a)), Math.round(Math.sqrt(i / a)), Math.round(Math.sqrt(s / a)), Math.round(a / l)] : r.defaultColor
            }

            function f(e) {
                return c(e, "defaultColor", [0, 0, 0, 0])
            }

            function c(e, t, r) {
                return void 0 === e[t] ? r : e[t]
            }

            function d(e) {
                var t, r, n;
                return (t = e, "undefined" != typeof HTMLCanvasElement && t instanceof HTMLCanvasElement) ? "canvas" : (r = e, g && r instanceof OffscreenCanvas) ? "offscreencanvas" : v(e) ? "videoframe" : (n = e, "undefined" != typeof ImageBitmap && n instanceof ImageBitmap) ? "imagebitmap" : e.src
            }

            function h(e) {
                return "undefined" != typeof HTMLImageElement && e instanceof HTMLImageElement
            }
            r.d(t, {
                D: () => w
            });
            var g = "undefined" != typeof OffscreenCanvas;

            function v(e) {
                return "undefined" != typeof VideoFrame && e instanceof VideoFrame
            }
            var p = "undefined" == typeof window;

            function m(e) {
                return Error("FastAverageColor: " + e)
            }

            function y(e, t) {
                t || console.error(e)
            }
            var w = function() {
                function e() {
                    this.canvas = null, this.ctx = null
                }
                return e.prototype.getColorAsync = function(e, t) {
                    if (!e) return Promise.reject(m("call .getColorAsync() without resource"));
                    if ("string" == typeof e) {
                        if ("undefined" == typeof Image) return Promise.reject(m("resource as string is not supported in this environment"));
                        var r = new Image;
                        return r.crossOrigin = t && t.crossOrigin || "", r.src = e, this.bindImageEvents(r, t)
                    }
                    if (h(e) && !e.complete) return this.bindImageEvents(e, t);
                    var n = this.getColor(e, t);
                    return n.error ? Promise.reject(n.error) : Promise.resolve(n)
                }, e.prototype.getColor = function(e, t) {
                    var r, n, i, o, s, a, l, u, w = f(t = t || {});
                    if (!e) {
                        var E = m("call .getColor() without resource");
                        return y(E, t.silent), this.prepareResult(w, E)
                    }
                    var b = (r = function(e) {
                        if (h(e)) {
                            var t, r = e.naturalWidth,
                                n = e.naturalHeight;
                            return e.naturalWidth || -1 === e.src.search(/\.svg(\?|$)/i) || (r = n = 100), {
                                width: r,
                                height: n
                            }
                        }
                        return (t = e, "undefined" != typeof HTMLVideoElement && t instanceof HTMLVideoElement) ? {
                            width: e.videoWidth,
                            height: e.videoHeight
                        } : v(e) ? {
                            width: e.codedWidth,
                            height: e.codedHeight
                        } : {
                            width: e.width,
                            height: e.height
                        }
                    }(e), i = c(n = t, "left", 0), o = c(n, "top", 0), s = c(n, "width", r.width), a = c(n, "height", r.height), l = s, u = a, "precision" === n.mode || (s > a ? u = Math.round((l = 100) / (s / a)) : l = Math.round((u = 100) / (a / s)), (l > s || u > a || l < 10 || u < 10) && (l = s, u = a)), {
                        srcLeft: i,
                        srcTop: o,
                        srcWidth: s,
                        srcHeight: a,
                        destWidth: l,
                        destHeight: u
                    });
                    if (!b.srcWidth || !b.srcHeight || !b.destWidth || !b.destHeight) {
                        var E = m('incorrect sizes for resource "'.concat(d(e), '"'));
                        return y(E, t.silent), this.prepareResult(w, E)
                    }
                    if (!this.canvas && (this.canvas = p ? g ? new OffscreenCanvas(1, 1) : null : document.createElement("canvas"), !this.canvas)) {
                        var E = m("OffscreenCanvas is not supported in this browser");
                        return y(E, t.silent), this.prepareResult(w, E)
                    }
                    if (!this.ctx) {
                        if (this.ctx = this.canvas.getContext("2d", {
                                willReadFrequently: !0
                            }), !this.ctx) {
                            var E = m("Canvas Context 2D is not supported in this browser");
                            return y(E, t.silent), this.prepareResult(w)
                        }
                        this.ctx.imageSmoothingEnabled = !1
                    }
                    this.canvas.width = b.destWidth, this.canvas.height = b.destHeight;
                    try {
                        this.ctx.clearRect(0, 0, b.destWidth, b.destHeight), this.ctx.drawImage(e, b.srcLeft, b.srcTop, b.srcWidth, b.srcHeight, 0, 0, b.destWidth, b.destHeight);
                        var M = this.ctx.getImageData(0, 0, b.destWidth, b.destHeight).data;
                        return this.prepareResult(this.getColorFromArray4(M, t))
                    } catch (r) {
                        var E = m("security error (CORS) for resource ".concat(d(e), ".\nDetails: https://developer.mozilla.org/en/docs/Web/HTML/CORS_enabled_image"));
                        return y(E, t.silent), t.silent || console.error(r), this.prepareResult(w, E)
                    }
                }, e.prototype.getColorFromArray4 = function(e, t) {
                    t = t || {};
                    var r, n, i = e.length,
                        o = f(t);
                    if (i < 4) return o;
                    var s = 4 * (t.step || 1);
                    switch (t.algorithm || "sqrt") {
                        case "simple":
                            r = l;
                            break;
                        case "sqrt":
                            r = u;
                            break;
                        case "dominant":
                            r = a;
                            break;
                        default:
                            throw m("".concat(t.algorithm, " is unknown algorithm"))
                    }
                    return r(e, i - i % 4, {
                        defaultColor: o,
                        ignoredColor: (n = t.ignoredColor) ? Array.isArray(n[0]) ? n : [n] : [],
                        step: s,
                        dominantDivider: t.dominantDivider
                    })
                }, e.prototype.prepareResult = function(e, t) {
                    var r = e.slice(0, 3),
                        n = [e[0], e[1], e[2], e[3] / 255],
                        o = (299 * e[0] + 587 * e[1] + 114 * e[2]) / 1e3 < 128;
                    return {
                        value: [e[0], e[1], e[2], e[3]],
                        rgb: "rgb(" + r.join(",") + ")",
                        rgba: "rgba(" + n.join(",") + ")",
                        hex: i(r),
                        hexa: i(e),
                        isDark: o,
                        isLight: !o,
                        error: t
                    }
                }, e.prototype.destroy = function() {
                    this.canvas && (this.canvas.width = 1, this.canvas.height = 1, this.canvas = null), this.ctx = null
                }, e.prototype.bindImageEvents = function(e, t) {
                    var r = this;
                    return new Promise(function(n, i) {
                        var o = function() {
                                l();
                                var o = r.getColor(e, t);
                                o.error ? i(o.error) : n(o)
                            },
                            s = function() {
                                l(), i(m('Error loading image "'.concat(e.src, '"')))
                            },
                            a = function() {
                                l(), i(m('Image "'.concat(e.src, '" loading aborted')))
                            },
                            l = function() {
                                e.removeEventListener("load", o), e.removeEventListener("error", s), e.removeEventListener("abort", a)
                            };
                        e.addEventListener("load", o), e.addEventListener("error", s), e.addEventListener("abort", a)
                    })
                }, e
            }()
        },
        81359: (e, t, r) => {
            r.d(t, {
                I: () => s
            });
            var n = r(88491),
                i = r(8886),
                o = r(73573);

            function s() {
                o.r.current || (0, i.U)();
                let [e] = (0, n.useState)(o.O.current);
                return e
            }
        },
        86593: (e, t, r) => {
            r.d(t, {
                xQ: () => o
            });
            var n = r(88491),
                i = r(91734);

            function o(e = !0) {
                let t = (0, n.useContext)(i.t);
                if (null === t) return [!0, null];
                let {
                    isPresent: r,
                    onExitComplete: s,
                    register: a
                } = t, l = (0, n.useId)();
                (0, n.useEffect)(() => {
                    if (e) return a(l)
                }, [e]);
                let u = (0, n.useCallback)(() => e && s && s(l), [l, s, e]);
                return !r && s ? [!1, u] : [!0]
            }
        },
        87121: (e, t, r) => {
            r.d(t, {
                Uu: () => i,
                rL: () => o,
                hJ: () => s
            });
            var n = r(20564);
            let i = (0, n.G)("div", void 0),
                o = (0, n.G)("p", void 0),
                s = (0, n.G)("span", void 0)
        },
        92217: (e, t, r) => {
            r.d(t, {
                L: () => i
            });
            var n = r(88491);

            function i(e, t, r) {
                (0, n.useInsertionEffect)(() => e.on(t, r), [e, t, r])
            }
        },
        94720: (e, t, r) => {
            let n, i;
            r.d(t, {
                L: () => V
            });
            var o = r(11161),
                s = r(99829),
                a = r(88491),
                l = r(66440),
                u = r(77704);

            function f(e, t) {
                let r, n = () => {
                    let {
                        currentTime: n
                    } = t, i = (null === n ? 0 : n.value) / 100;
                    r !== i && e(i), r = i
                };
                return u.Gt.preUpdate(n, !0), () => (0, u.WG)(n)
            }
            var c = r(13045),
                d = r(93655),
                h = r(37635);
            let g = new WeakMap,
                v = (e, t, r) => (n, i) => i && i[0] ? i[0][e + "Size"] : (0, d.x)(n) && "getBBox" in n ? n.getBBox()[t] : n[r],
                p = v("inline", "width", "offsetWidth"),
                m = v("block", "height", "offsetHeight");

            function y({
                target: e,
                borderBoxSize: t
            }) {
                g.get(e)?.forEach(r => {
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

            function w(e) {
                e.forEach(y)
            }
            let E = new Set;
            var b = r(58173),
                M = r(39614);
            let C = () => ({
                    current: 0,
                    offset: [],
                    progress: 0,
                    scrollLength: 0,
                    targetOffset: 0,
                    targetLength: 0,
                    containerLength: 0,
                    velocity: 0
                }),
                x = {
                    x: {
                        length: "Width",
                        position: "Left"
                    },
                    y: {
                        length: "Height",
                        position: "Top"
                    }
                };

            function L(e, t, r, n) {
                let i = r[t],
                    {
                        length: o,
                        position: s
                    } = x[t],
                    a = i.current,
                    l = r.time;
                i.current = e[`scroll${s}`], i.scrollLength = e[`scroll${o}`] - e[`client${o}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = (0, b.q)(0, i.scrollLength, i.current);
                let u = n - l;
                i.velocity = u > 50 ? 0 : (0, M.f)(i.current - a, u)
            }
            var W = r(53076),
                H = r(58216),
                O = r(77379),
                k = r(30944);
            let G = {
                start: 0,
                center: .5,
                end: 1
            };

            function R(e, t, r = 0) {
                let n = 0;
                if (e in G && (e = G[e]), "string" == typeof e) {
                    let t = parseFloat(e);
                    e.endsWith("px") ? n = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? n = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? n = t / 100 * document.documentElement.clientHeight : e = t
                }
                return "number" == typeof e && (n = t * e), r + n
            }
            let T = [0, 0],
                A = {
                    All: [
                        [0, 0],
                        [1, 1]
                    ]
                },
                B = {
                    x: 0,
                    y: 0
                },
                I = new WeakMap,
                P = new WeakMap,
                S = new WeakMap,
                z = e => e === document.scrollingElement ? window : e;

            function _(e, {
                container: t = document.scrollingElement,
                ...r
            } = {}) {
                if (!t) return l.l;
                let o = S.get(t);
                o || (o = new Set, S.set(t, o));
                let s = function(e, t, r, n = {}) {
                    return {
                        measure: t => {
                            ! function(e, t = e, r) {
                                if (r.x.targetOffset = 0, r.y.targetOffset = 0, t !== e) {
                                    let n = t;
                                    for (; n && n !== e;) r.x.targetOffset += n.offsetLeft, r.y.targetOffset += n.offsetTop, n = n.offsetParent
                                }
                                r.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, r.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, r.x.containerLength = e.clientWidth, r.y.containerLength = e.clientHeight
                            }(e, n.target, r), L(e, "x", r, t), L(e, "y", r, t), r.time = t, (n.offset || n.target) && function(e, t, r) {
                                let {
                                    offset: n = A.All
                                } = r, {
                                    target: i = e,
                                    axis: o = "y"
                                } = r, s = "y" === o ? "height" : "width", a = i !== e ? function(e, t) {
                                    let r = {
                                            x: 0,
                                            y: 0
                                        },
                                        n = e;
                                    for (; n && n !== t;)
                                        if ((0, k.s)(n)) r.x += n.offsetLeft, r.y += n.offsetTop, n = n.offsetParent;
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
                                        let i = null,
                                            o = n.parentNode;
                                        for (; !i;) "svg" === o.tagName && (i = o), o = n.parentNode;
                                        n = i
                                    } else break;
                                    return r
                                }(i, e) : B, l = i === e ? {
                                    width: e.scrollWidth,
                                    height: e.scrollHeight
                                } : "getBBox" in i && "svg" !== i.tagName ? i.getBBox() : {
                                    width: i.clientWidth,
                                    height: i.clientHeight
                                }, u = {
                                    width: e.clientWidth,
                                    height: e.clientHeight
                                };
                                t[o].offset.length = 0;
                                let f = !t[o].interpolate,
                                    c = n.length;
                                for (let e = 0; e < c; e++) {
                                    let r = function(e, t, r, n) {
                                        let i = Array.isArray(e) ? e : T,
                                            o = 0;
                                        return "number" == typeof e ? i = [e, e] : "string" == typeof e && (i = (e = e.trim()).includes(" ") ? e.split(" ") : [e, G[e] ? e : "0"]), (o = R(i[0], r, n)) - R(i[1], t)
                                    }(n[e], u[s], l[s], a[o]);
                                    f || r === t[o].interpolatorOffsets[e] || (f = !0), t[o].offset[e] = r
                                }
                                f && (t[o].interpolate = (0, W.G)(t[o].offset, (0, H.Z)(n), {
                                    clamp: !1
                                }), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = (0, O.q)(0, 1, t[o].interpolate(t[o].current))
                            }(e, r, n)
                        },
                        notify: () => t(r)
                    }
                }(t, e, {
                    time: 0,
                    x: C(),
                    y: C()
                }, r);
                if (o.add(s), !I.has(t)) {
                    let e = () => {
                            for (let e of o) e.measure(u.uv.timestamp);
                            u.Gt.preUpdate(r)
                        },
                        r = () => {
                            for (let e of o) e.notify()
                        },
                        s = () => u.Gt.read(e);
                    I.set(t, s);
                    let a = z(t);
                    window.addEventListener("resize", s, {
                        passive: !0
                    }), t !== document.documentElement && P.set(t, "function" == typeof t ? (E.add(t), i || (i = () => {
                        let e = {
                            get width() {
                                return window.innerWidth
                            },
                            get height() {
                                return window.innerHeight
                            }
                        };
                        E.forEach(t => t(e))
                    }, window.addEventListener("resize", i)), () => {
                        E.delete(t), E.size || "function" != typeof i || (window.removeEventListener("resize", i), i = void 0)
                    }) : function(e, t) {
                        n || "undefined" != typeof ResizeObserver && (n = new ResizeObserver(w));
                        let r = (0, h.K)(e);
                        return r.forEach(e => {
                            let r = g.get(e);
                            r || (r = new Set, g.set(e, r)), r.add(t), n?.observe(e)
                        }), () => {
                            r.forEach(e => {
                                let r = g.get(e);
                                r?.delete(t), r?.size || n?.unobserve(e)
                            })
                        }
                    }(t, s)), a.addEventListener("scroll", s, {
                        passive: !0
                    }), s()
                }
                let a = I.get(t);
                return u.Gt.read(a, !1, !0), () => {
                    (0, u.WG)(a);
                    let e = S.get(t);
                    if (!e || (e.delete(s), e.size)) return;
                    let r = I.get(t);
                    I.delete(t), r && (z(t).removeEventListener("scroll", r), P.get(t)?.(), window.removeEventListener("resize", r))
                }
            }
            let D = new Map;

            function j({
                source: e,
                container: t,
                ...r
            }) {
                let {
                    axis: n
                } = r;
                e && (t = e);
                let i = D.get(t) ?? new Map;
                D.set(t, i);
                let o = r.target ?? "self",
                    s = i.get(o) ?? {},
                    a = n + (r.offset ?? []).join(",");
                return s[a] || (s[a] = !r.target && (0, c.J)() ? new ScrollTimeline({
                    source: t,
                    axis: n
                }) : function(e) {
                    let t = {
                            value: 0
                        },
                        r = _(r => {
                            t.value = 100 * r[e.axis].progress
                        }, e);
                    return {
                        currentTime: t,
                        cancel: r
                    }
                }({
                    container: t,
                    ...r
                })), s[a]
            }
            var q = r(32672),
                N = r(23017);
            let F = () => ({
                    scrollX: (0, o.OQ)(0),
                    scrollY: (0, o.OQ)(0),
                    scrollXProgress: (0, o.OQ)(0),
                    scrollYProgress: (0, o.OQ)(0)
                }),
                Q = e => !!e && !e.current;

            function V({
                container: e,
                target: t,
                ...r
            } = {}) {
                let n = (0, q.M)(F),
                    i = (0, a.useRef)(null),
                    o = (0, a.useRef)(!1),
                    u = (0, a.useCallback)(() => (i.current = function(e, {
                        axis: t = "y",
                        container: r = document.scrollingElement,
                        ...n
                    } = {}) {
                        var i, o;
                        if (!r) return l.l;
                        let s = {
                            axis: t,
                            container: r,
                            ...n
                        };
                        return "function" == typeof e ? (i = e, o = s, 2 === i.length ? _(e => {
                            i(e[o.axis].progress, e)
                        }, o) : f(i, j(o))) : function(e, t) {
                            let r = j(t);
                            return e.attachTimeline({
                                timeline: t.target ? void 0 : r,
                                observe: e => (e.pause(), f(t => {
                                    e.time = e.iterationDuration * t
                                }, r))
                            })
                        }(e, s)
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
                        i.current?.()
                    }), [e, t, JSON.stringify(r.offset)]);
                return (0, N.E)(() => {
                    if (o.current = !1, !(Q(e) || Q(t))) return u();
                    o.current = !0
                }, [u]), (0, a.useEffect)(() => o.current ? ((0, s.V)(!Q(e), "Container ref is defined but not hydrated", "use-scroll-ref"), (0, s.V)(!Q(t), "Target ref is defined but not hydrated", "use-scroll-ref"), u()) : void 0, [u]), n
            }
        },
        95581: (e, t, r) => {
            r.d(t, {
                P: () => f
            });
            var n = r(24378),
                i = r(42681),
                o = r(68567),
                s = r(19907),
                a = r(22182),
                l = r(32917);
            let u = {
                    ...o.W,
                    ...a.n,
                    ...s.$,
                    ...l.Z
                },
                f = (0, i.H)(u, n.J)
        }
    }
]);