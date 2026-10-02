;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "8261aa65-df9e-4145-800b-ca9b3a720d04")
    } catch (e) {}
}();
(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 477846, (t, e, r) => {
    t.e, e.exports = function() {
        function t(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
            return n
        }

        function e() {
            return (e = Object.assign.bind()).apply(null, arguments)
        }
        var r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

        function n(t) {
            return ("image-" + t.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1")
        }
        var i = [
                ["width", "w"],
                ["height", "h"],
                ["format", "fm"],
                ["download", "dl"],
                ["blur", "blur"],
                ["sharpen", "sharp"],
                ["invert", "invert"],
                ["orientation", "or"],
                ["minHeight", "min-h"],
                ["maxHeight", "max-h"],
                ["minWidth", "min-w"],
                ["maxWidth", "max-w"],
                ["quality", "q"],
                ["fit", "fit"],
                ["crop", "crop"],
                ["saturation", "sat"],
                ["auto", "auto"],
                ["dpr", "dpr"],
                ["pad", "pad"],
                ["frame", "frame"]
            ],
            o = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
            s = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
            a = ["format"],
            l = function() {
                function l(t, r) {
                    this.options = void 0, this.options = t ? e({}, t.options || {}, r || {}) : e({}, r || {})
                }
                var u = l.prototype;
                return u.withOptions = function(r) {
                    var n = r.baseUrl || this.options.baseUrl,
                        o = {
                            baseUrl: n
                        };
                    for (var s in r) r.hasOwnProperty(s) && (o[function(e) {
                        for (var r, n = function(e) {
                                var r = "u" > typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                                if (r) return (r = r.call(e)).next.bind(r);
                                if (Array.isArray(e) || (r = function(e) {
                                        if (e) {
                                            if ("string" == typeof e) return t(e, void 0);
                                            var r = ({}).toString.call(e).slice(8, -1);
                                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(e, void 0) : void 0
                                        }
                                    }(e))) {
                                    r && (e = r);
                                    var n = 0;
                                    return function() {
                                        return n >= e.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: e[n++]
                                        }
                                    }
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(i); !(r = n()).done;) {
                            var o = r.value,
                                s = o[0],
                                a = o[1];
                            if (e === s || e === a) return s
                        }
                        return e
                    }(s)] = r[s]);
                    return new l(this, e({
                        baseUrl: n
                    }, o))
                }, u.image = function(t) {
                    return this.withOptions({
                        source: t
                    })
                }, u.dataset = function(t) {
                    return this.withOptions({
                        dataset: t
                    })
                }, u.projectId = function(t) {
                    return this.withOptions({
                        projectId: t
                    })
                }, u.bg = function(t) {
                    return this.withOptions({
                        bg: t
                    })
                }, u.dpr = function(t) {
                    return this.withOptions(t && 1 !== t ? {
                        dpr: t
                    } : {})
                }, u.width = function(t) {
                    return this.withOptions({
                        width: t
                    })
                }, u.height = function(t) {
                    return this.withOptions({
                        height: t
                    })
                }, u.focalPoint = function(t, e) {
                    return this.withOptions({
                        focalPoint: {
                            x: t,
                            y: e
                        }
                    })
                }, u.maxWidth = function(t) {
                    return this.withOptions({
                        maxWidth: t
                    })
                }, u.minWidth = function(t) {
                    return this.withOptions({
                        minWidth: t
                    })
                }, u.maxHeight = function(t) {
                    return this.withOptions({
                        maxHeight: t
                    })
                }, u.minHeight = function(t) {
                    return this.withOptions({
                        minHeight: t
                    })
                }, u.size = function(t, e) {
                    return this.withOptions({
                        width: t,
                        height: e
                    })
                }, u.blur = function(t) {
                    return this.withOptions({
                        blur: t
                    })
                }, u.sharpen = function(t) {
                    return this.withOptions({
                        sharpen: t
                    })
                }, u.rect = function(t, e, r, n) {
                    return this.withOptions({
                        rect: {
                            left: t,
                            top: e,
                            width: r,
                            height: n
                        }
                    })
                }, u.format = function(t) {
                    return this.withOptions({
                        format: t
                    })
                }, u.invert = function(t) {
                    return this.withOptions({
                        invert: t
                    })
                }, u.orientation = function(t) {
                    return this.withOptions({
                        orientation: t
                    })
                }, u.quality = function(t) {
                    return this.withOptions({
                        quality: t
                    })
                }, u.forceDownload = function(t) {
                    return this.withOptions({
                        download: t
                    })
                }, u.flipHorizontal = function() {
                    return this.withOptions({
                        flipHorizontal: !0
                    })
                }, u.flipVertical = function() {
                    return this.withOptions({
                        flipVertical: !0
                    })
                }, u.ignoreImageParams = function() {
                    return this.withOptions({
                        ignoreImageParams: !0
                    })
                }, u.fit = function(t) {
                    if (-1 === o.indexOf(t)) throw Error('Invalid fit mode "' + t + '"');
                    return this.withOptions({
                        fit: t
                    })
                }, u.crop = function(t) {
                    if (-1 === s.indexOf(t)) throw Error('Invalid crop mode "' + t + '"');
                    return this.withOptions({
                        crop: t
                    })
                }, u.saturation = function(t) {
                    return this.withOptions({
                        saturation: t
                    })
                }, u.auto = function(t) {
                    if (-1 === a.indexOf(t)) throw Error('Invalid auto mode "' + t + '"');
                    return this.withOptions({
                        auto: t
                    })
                }, u.pad = function(t) {
                    return this.withOptions({
                        pad: t
                    })
                }, u.vanityName = function(t) {
                    return this.withOptions({
                        vanityName: t
                    })
                }, u.frame = function(t) {
                    if (1 !== t) throw Error('Invalid frame value "' + t + '"');
                    return this.withOptions({
                        frame: t
                    })
                }, u.url = function() {
                    return function(t) {
                        var o = e({}, t || {}),
                            s = o.source;
                        delete o.source;
                        var a = function(t) {
                            var r, i;
                            if (!t) return null;
                            if ("string" == typeof t && (i = t, /^https?:\/\//.test("" + i))) r = {
                                asset: {
                                    _ref: n(t)
                                }
                            };
                            else if ("string" == typeof t) r = {
                                asset: {
                                    _ref: t
                                }
                            };
                            else if (t && "string" == typeof t._ref) r = {
                                asset: t
                            };
                            else if (t && "string" == typeof t._id) r = {
                                asset: {
                                    _ref: t._id || ""
                                }
                            };
                            else if (t && t.asset && "string" == typeof t.asset.url) r = {
                                asset: {
                                    _ref: n(t.asset.url)
                                }
                            };
                            else {
                                if ("object" != typeof t.asset) return null;
                                r = e({}, t)
                            }
                            return t.crop && (r.crop = t.crop), t.hotspot && (r.hotspot = t.hotspot),
                                function(t) {
                                    if (t.crop && t.hotspot) return t;
                                    var r = e({}, t);
                                    return r.crop || (r.crop = {
                                        left: 0,
                                        top: 0,
                                        bottom: 0,
                                        right: 0
                                    }), r.hotspot || (r.hotspot = {
                                        x: .5,
                                        y: .5,
                                        height: 1,
                                        width: 1
                                    }), r
                                }(r)
                        }(s);
                        if (!a) {
                            if (s && "object" == typeof s && null !== s && s._upload && (!s.asset || !s.asset._ref)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                            throw Error("Unable to resolve image URL from source (" + JSON.stringify(s) + ")")
                        }
                        var l = function(t) {
                                var e = t.split("-"),
                                    n = e[1],
                                    i = e[2],
                                    o = e[3];
                                if (!n || !i || !o) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                var s = i.split("x"),
                                    a = s[0],
                                    l = s[1],
                                    u = +a,
                                    f = +l;
                                if (!(isFinite(u) && isFinite(f))) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                return {
                                    id: n,
                                    width: u,
                                    height: f,
                                    format: o
                                }
                            }(a.asset._ref || a.asset._id || ""),
                            u = Math.round(a.crop.left * l.width),
                            f = Math.round(a.crop.top * l.height),
                            c = {
                                left: u,
                                top: f,
                                width: Math.round(l.width - a.crop.right * l.width - u),
                                height: Math.round(l.height - a.crop.bottom * l.height - f)
                            },
                            h = a.hotspot.height * l.height / 2,
                            p = a.hotspot.width * l.width / 2,
                            d = a.hotspot.x * l.width,
                            g = a.hotspot.y * l.height;
                        return o.rect || o.focalPoint || o.ignoreImageParams || o.crop || (o = e({}, o, function(t, e) {
                                var r, n = e.width,
                                    i = e.height;
                                if (!(n && i)) return {
                                    width: n,
                                    height: i,
                                    rect: t.crop
                                };
                                var o = t.crop,
                                    s = t.hotspot,
                                    a = n / i;
                                if (o.width / o.height > a) {
                                    var l = Math.round(o.height),
                                        u = Math.round(l * a),
                                        f = Math.max(0, Math.round(o.top)),
                                        c = Math.max(0, Math.round(Math.round((s.right - s.left) / 2 + s.left) - u / 2));
                                    c < o.left ? c = o.left : c + u > o.left + o.width && (c = o.left + o.width - u), r = {
                                        left: c,
                                        top: f,
                                        width: u,
                                        height: l
                                    }
                                } else {
                                    var h = o.width,
                                        p = Math.round(h / a),
                                        d = Math.max(0, Math.round(o.left)),
                                        g = Math.max(0, Math.round(Math.round((s.bottom - s.top) / 2 + s.top) - p / 2));
                                    g < o.top ? g = o.top : g + p > o.top + o.height && (g = o.top + o.height - p), r = {
                                        left: d,
                                        top: g,
                                        width: h,
                                        height: p
                                    }
                                }
                                return {
                                    width: n,
                                    height: i,
                                    rect: r
                                }
                            }({
                                crop: c,
                                hotspot: {
                                    left: d - p,
                                    top: g - h,
                                    right: d + p,
                                    bottom: g + h
                                }
                            }, o))),
                            function(t) {
                                var e = (t.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                                    r = t.vanityName ? "/" + t.vanityName : "",
                                    n = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format + r,
                                    o = e + "/images/" + t.projectId + "/" + t.dataset + "/" + n,
                                    s = [];
                                if (t.rect) {
                                    var a = t.rect,
                                        l = a.left,
                                        u = a.top,
                                        f = a.width,
                                        c = a.height;
                                    (0 !== l || 0 !== u || c !== t.asset.height || f !== t.asset.width) && s.push("rect=" + l + "," + u + "," + f + "," + c)
                                }
                                t.bg && s.push("bg=" + t.bg), t.focalPoint && (s.push("fp-x=" + t.focalPoint.x), s.push("fp-y=" + t.focalPoint.y));
                                var h = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                                return (h && s.push("flip=" + h), i.forEach(function(e) {
                                    var r = e[0],
                                        n = e[1];
                                    void 0 !== t[r] ? s.push(n + "=" + encodeURIComponent(t[r])) : void 0 !== t[n] && s.push(n + "=" + encodeURIComponent(t[n]))
                                }), 0 === s.length) ? o : o + "?" + s.join("&")
                            }(e({}, o, {
                                asset: l
                            }))
                    }(this.options)
                }, u.toString = function() {
                    return this.url()
                }, l
            }();
        return function(t) {
            if (t && "config" in t && "function" == typeof t.config) {
                var e = t.config(),
                    r = e.apiHost,
                    n = e.projectId,
                    i = e.dataset;
                return new l(null, {
                    baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: n,
                    dataset: i
                })
            }
            if (t && "clientConfig" in t && "object" == typeof t.clientConfig) {
                var o = t.clientConfig,
                    s = o.apiHost,
                    a = o.projectId,
                    u = o.dataset;
                return new l(null, {
                    baseUrl: (s || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: a,
                    dataset: u
                })
            }
            return new l(null, t || {})
        }
    }()
}, 779712, t => {
    "use strict";
    var e = t.i(913836);
    let r = (0, t.i(477846).default)({
        projectId: e.default.env.SANITY_STUDIO_PROJECT_ID || "fuvbjjlp",
        dataset: e.default.env.SANITY_STUDIO_DATASET || "production"
    });
    t.s(["urlForImage", 0, t => t ? r.image(t) : null])
}, 124576, t => {
    "use strict";
    var e = t.i(876009),
        r = t.i(494004),
        n = t.i(409781);
    t.s(["useReducedMotion", 0, function() {
        e.hasReducedMotionListener.current || (0, r.initPrefersReducedMotion)();
        let [t] = (0, n.useState)(e.prefersReducedMotion.current);
        return t
    }])
}, 131581, t => {
    "use strict";
    var e = t.i(409781),
        r = t.i(513038);
    let n = {
        some: 0,
        all: 1
    };
    t.s(["useInView", 0, function(t, {
        root: i,
        margin: o,
        amount: s,
        once: a = !1,
        initial: l = !1
    } = {}) {
        let [u, f] = (0, e.useState)(l);
        return (0, e.useEffect)(() => {
            if (!t.current || a && u) return;
            let e = {
                root: i && i.current || void 0,
                margin: o,
                amount: s
            };
            return function(t, e, {
                root: i,
                margin: o,
                amount: s = "some"
            } = {}) {
                let a = (0, r.resolveElements)(t),
                    l = new WeakMap,
                    u = new IntersectionObserver(t => {
                        t.forEach(t => {
                            let r = l.get(t.target);
                            if (!!r !== t.isIntersecting)
                                if (t.isIntersecting) {
                                    let r = e(t.target, t);
                                    "function" == typeof r ? l.set(t.target, r) : u.unobserve(t.target)
                                } else "function" == typeof r && (r(t), l.delete(t.target))
                        })
                    }, {
                        root: i,
                        rootMargin: o,
                        threshold: "number" == typeof s ? s : n[s]
                    });
                return a.forEach(t => u.observe(t)), () => u.disconnect()
            }(t.current, () => (f(!0), a ? void 0 : () => f(!1)), e)
        }, [i, t, o, a, s]), u
    }], 131581)
}, 417245, 843678, 304776, t => {
    "use strict";
    var e = t.i(328744),
        r = t.i(823928),
        n = t.i(706221),
        i = t.i(725542),
        o = t.i(409781),
        s = t.i(120194),
        a = t.i(672357);

    function l(t, e) {
        let r, n = () => {
            let {
                currentTime: n
            } = e, i = (null === n ? 0 : n.value) / 100;
            r !== i && t(i), r = i
        };
        return a.frame.preUpdate(n, !0), () => (0, a.cancelFrame)(n)
    }

    function u(t) {
        return !("u" < typeof window) && (t ? (0, r.supportsViewTimeline)() : (0, r.supportsScrollTimeline)())
    }
    var f = t.i(270736),
        c = t.i(470934),
        h = t.i(398361);
    let p = () => ({
            current: 0,
            offset: [],
            progress: 0,
            scrollLength: 0,
            targetOffset: 0,
            targetLength: 0,
            containerLength: 0,
            velocity: 0
        }),
        d = {
            x: {
                length: "Width",
                position: "Left"
            },
            y: {
                length: "Height",
                position: "Top"
            }
        };

    function g(t, e, r, n) {
        let i = r[e],
            {
                length: o,
                position: s
            } = d[e],
            a = i.current,
            l = r.time;
        i.current = Math.abs(t[`scroll${s}`]), i.scrollLength = t[`scroll${o}`] - t[`client${o}`], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = (0, c.progress)(0, i.scrollLength, i.current);
        let u = n - l;
        i.velocity = u > 50 ? 0 : (0, h.velocityPerSecond)(i.current - a, u)
    }
    var m = t.i(226056),
        v = t.i(973626),
        w = t.i(508983),
        y = t.i(335029);
    let b = {
        start: 0,
        center: .5,
        end: 1
    };

    function x(t, e, r = 0) {
        let n = 0;
        if (t in b && (t = b[t]), "string" == typeof t) {
            let e = parseFloat(t);
            t.endsWith("px") ? n = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? n = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? n = e / 100 * document.documentElement.clientHeight : t = e
        }
        return "number" == typeof t && (n = e * t), r + n
    }
    let O = [0, 0],
        A = [
            [0, 0],
            [1, 1]
        ],
        E = {
            x: 0,
            y: 0
        },
        S = new WeakMap,
        M = new WeakMap,
        I = new WeakMap,
        C = new WeakMap,
        T = new WeakMap,
        W = t => t === document.scrollingElement ? window : t;

    function V(t, {
        container: e = document.scrollingElement,
        trackContentSize: r = !1,
        ...n
    } = {}) {
        if (!e) return s.noop;
        let i = I.get(e);
        i || (i = new Set, I.set(e, i));
        let o = function(t, e, r, n = {}) {
            return {
                measure: e => {
                    ! function(t, e = t, r) {
                        if (r.x.targetOffset = 0, r.y.targetOffset = 0, e !== t) {
                            let n = e;
                            for (; n && n !== t;) r.x.targetOffset += n.offsetLeft, r.y.targetOffset += n.offsetTop, n = n.offsetParent
                        }
                        r.x.targetLength = e === t ? e.scrollWidth : e.clientWidth, r.y.targetLength = e === t ? e.scrollHeight : e.clientHeight, r.x.containerLength = t.clientWidth, r.y.containerLength = t.clientHeight
                    }(t, n.target, r), g(t, "x", r, e), g(t, "y", r, e), r.time = e, (n.offset || n.target) && function(t, e, r) {
                        let {
                            offset: n = A
                        } = r, {
                            target: i = t,
                            axis: o = "y"
                        } = r, s = "y" === o ? "height" : "width", a = i !== t ? function(t, e) {
                            let r = {
                                    x: 0,
                                    y: 0
                                },
                                n = t;
                            for (; n && n !== e;)
                                if ((0, y.isHTMLElement)(n)) r.x += n.offsetLeft, r.y += n.offsetTop, n = n.offsetParent;
                                else if ("svg" === n.tagName) {
                                let t = n.getBoundingClientRect(),
                                    e = (n = n.parentElement).getBoundingClientRect();
                                r.x += t.left - e.left, r.y += t.top - e.top
                            } else if (n instanceof SVGGraphicsElement) {
                                let {
                                    x: t,
                                    y: e
                                } = n.getBBox();
                                r.x += t, r.y += e;
                                let i = null,
                                    o = n.parentNode;
                                for (; !i;) "svg" === o.tagName && (i = o), o = n.parentNode;
                                n = i
                            } else break;
                            return r
                        }(i, t) : E, l = i === t ? {
                            width: t.scrollWidth,
                            height: t.scrollHeight
                        } : "getBBox" in i && "svg" !== i.tagName ? i.getBBox() : {
                            width: i.clientWidth,
                            height: i.clientHeight
                        }, u = {
                            width: t.clientWidth,
                            height: t.clientHeight
                        };
                        e[o].offset.length = 0;
                        let f = !e[o].interpolate,
                            c = n.length;
                        for (let t = 0; t < c; t++) {
                            let r = function(t, e, r, n) {
                                let i = Array.isArray(t) ? t : O,
                                    o = 0;
                                return "number" == typeof t ? i = [t, t] : "string" == typeof t && (i = (t = t.trim()).includes(" ") ? t.split(" ") : [t, b[t] ? t : "0"]), (o = x(i[0], r, n)) - x(i[1], e)
                            }(n[t], u[s], l[s], a[o]);
                            f || r === e[o].interpolatorOffsets[t] || (f = !0), e[o].offset[t] = r
                        }
                        f && (e[o].interpolate = (0, m.interpolate)(e[o].offset, (0, v.defaultOffset)(n), {
                            clamp: !1
                        }), e[o].interpolatorOffsets = [...e[o].offset]), e[o].progress = (0, w.clamp)(0, 1, e[o].interpolate(e[o].current))
                    }(t, r, n)
                },
                notify: () => e(r)
            }
        }(e, t, {
            time: 0,
            x: p(),
            y: p()
        }, n);
        if (i.add(o), !S.has(e)) {
            let t = () => {
                    for (let t of i) t.measure(a.frameData.timestamp);
                    a.frame.preUpdate(r)
                },
                r = () => {
                    for (let t of i) t.notify()
                },
                n = () => a.frame.read(t);
            S.set(e, n);
            let o = W(e);
            window.addEventListener("resize", n), e !== document.documentElement && M.set(e, (0, f.resize)(e, n)), o.addEventListener("scroll", n), n()
        }
        if (r && !T.has(e)) {
            let t = S.get(e),
                r = {
                    width: e.scrollWidth,
                    height: e.scrollHeight
                };
            C.set(e, r);
            let n = a.frame.read(() => {
                let n = e.scrollWidth,
                    i = e.scrollHeight;
                (r.width !== n || r.height !== i) && (t(), r.width = n, r.height = i)
            }, !0);
            T.set(e, n)
        }
        let l = S.get(e);
        return a.frame.read(l, !1, !0), () => {
            (0, a.cancelFrame)(l);
            let t = I.get(e);
            if (!t || (t.delete(o), t.size)) return;
            let r = S.get(e);
            S.delete(e), r && (W(e).removeEventListener("scroll", r), M.get(e)?.(), window.removeEventListener("resize", r));
            let n = T.get(e);
            n && ((0, a.cancelFrame)(n), T.delete(e)), C.delete(e)
        }
    }
    let j = [
            [
                [
                    [0, 1],
                    [1, 1]
                ], "entry"
            ],
            [
                [
                    [0, 0],
                    [1, 0]
                ], "exit"
            ],
            [
                [
                    [1, 0],
                    [0, 1]
                ], "cover"
            ],
            [A, "contain"]
        ],
        H = {
            start: 0,
            end: 1
        };

    function L(t) {
        if (!t) return {
            rangeStart: "contain 0%",
            rangeEnd: "contain 100%"
        };
        for (let [e, r] of j)
            if (function(t, e) {
                    let r = function(t) {
                        if (2 !== t.length) return;
                        let e = [];
                        for (let r of t)
                            if (Array.isArray(r)) e.push(r);
                            else {
                                if ("string" != typeof r) return;
                                let t = function(t) {
                                    let e = t.trim().split(/\s+/);
                                    if (2 !== e.length) return;
                                    let r = H[e[0]],
                                        n = H[e[1]];
                                    if (void 0 !== r && void 0 !== n) return [r, n]
                                }(r);
                                if (!t) return;
                                e.push(t)
                            } return e
                    }(t);
                    if (!r) return !1;
                    for (let t = 0; t < 2; t++) {
                        let n = r[t],
                            i = e[t];
                        if (n[0] !== i[0] || n[1] !== i[1]) return !1
                    }
                    return !0
                }(t, e)) return {
                rangeStart: `${r} 0%`,
                rangeEnd: `${r} 100%`
            }
    }
    let k = new Map;

    function P(t) {
        let e = {
                value: 0
            },
            r = V(r => {
                e.value = 100 * r[t.axis].progress
            }, t);
        return {
            currentTime: e,
            cancel: r
        }
    }

    function R({
        source: t,
        container: e,
        ...r
    }) {
        let {
            axis: n
        } = r;
        t && (e = t);
        let i = k.get(e);
        i || (i = new Map, k.set(e, i));
        let o = r.target ?? "self",
            s = i.get(o);
        s || (s = {}, i.set(o, s));
        let a = n + (r.offset ?? []).join(",");
        return s[a] || (r.target && u(r.target) ? L(r.offset) ? s[a] = new ViewTimeline({
            subject: r.target,
            axis: n
        }) : s[a] = P({
            container: e,
            ...r
        }) : u() ? s[a] = new ScrollTimeline({
            source: e,
            axis: n
        }) : s[a] = P({
            container: e,
            ...r
        })), s[a]
    }

    function z(t, {
        axis: e = "y",
        container: r = document.scrollingElement,
        ...n
    } = {}) {
        let i, o, a;
        if (!r) return s.noop;
        let f = {
            axis: e,
            container: r,
            ...n
        };
        return "function" == typeof t ? function(t, e) {
            return 2 === t.length || e && (e.target || e.offset) ? V(r => {
                t(r[e.axis].progress, r)
            }, e) : l(t, R(e))
        }(t, f) : (i = R(f), o = f.target ? L(f.offset) : void 0, a = f.target ? u(f.target) && !!o : u(), t.attachTimeline({
            timeline: a ? i : void 0,
            ...o && a && {
                rangeStart: o.rangeStart,
                rangeEnd: o.rangeEnd
            },
            observe: t => (t.pause(), l(e => {
                t.time = t.iterationDuration * e
            }, i))
        }))
    }
    var U = t.i(416007),
        N = t.i(809018);
    let B = () => ({
            scrollX: (0, n.motionValue)(0),
            scrollY: (0, n.motionValue)(0),
            scrollXProgress: (0, n.motionValue)(0),
            scrollYProgress: (0, n.motionValue)(0)
        }),
        _ = t => !!t && !t.current;

    function $(t, r, n, i) {
        return {
            factory: o => {
                let s, a = () => {
                    _(n) || _(i) ? e.microtask.read(a) : s = z(o, {
                        ...r,
                        axis: t,
                        container: n?.current || void 0,
                        target: i?.current || void 0
                    })
                };
                return e.microtask.read(a), () => {
                    (0, e.cancelMicrotask)(a), s?.()
                }
            },
            times: [0, 1],
            keyframes: [0, 1],
            ease: t => t,
            duration: 1
        }
    }
    t.s(["useScroll", 0, function({
        container: t,
        target: n,
        ...s
    } = {}) {
        var a;
        let l = (0, U.useConstant)(B);
        a = s.offset, !("u" < typeof window) && (n ? (0, r.supportsViewTimeline)() && !!L(a) : (0, r.supportsScrollTimeline)()) && (l.scrollXProgress.accelerate = $("x", s, t, n), l.scrollYProgress.accelerate = $("y", s, t, n));
        let u = (0, o.useRef)(null),
            f = (0, o.useRef)(!1),
            c = (0, o.useCallback)(() => (u.current = z((t, {
                x: e,
                y: r
            }) => {
                l.scrollX.set(e.current), l.scrollXProgress.set(e.progress), l.scrollY.set(r.current), l.scrollYProgress.set(r.progress)
            }, {
                ...s,
                container: t?.current || void 0,
                target: n?.current || void 0
            }), () => {
                u.current?.()
            }), [t, n, JSON.stringify(s.offset)]);
        return (0, N.useIsomorphicLayoutEffect)(() => {
            if (f.current = !1, !(_(t) || _(n))) return c();
            f.current = !0
        }, [c]), (0, o.useEffect)(() => {
            let r;
            if (!f.current) return;
            let o = () => {
                let e = _(t),
                    o = _(n);
                (0, i.invariant)(!e, "Container ref is defined but not hydrated", "use-scroll-ref"), (0, i.invariant)(!o, "Target ref is defined but not hydrated", "use-scroll-ref"), e || o || (r = c())
            };
            return e.microtask.read(o), () => {
                (0, e.cancelMicrotask)(o), r?.()
            }
        }, [c]), l
    }], 417245);
    var F = t.i(481522);

    function Y(t) {
        let e = (0, U.useConstant)(() => (0, n.motionValue)(t)),
            {
                isStatic: r
            } = (0, o.useContext)(F.MotionConfigContext);
        if (r) {
            let [, r] = (0, o.useState)(t);
            (0, o.useEffect)(() => e.on("change", r), [])
        }
        return e
    }

    function q(t, e) {
        let r = Y(e()),
            n = () => r.set(e());
        return n(), (0, N.useIsomorphicLayoutEffect)(() => {
            let e = () => a.frame.preRender(n, !1, !0),
                r = t.map(t => t.on("change", e));
            return () => {
                r.forEach(t => t()), (0, a.cancelFrame)(n)
            }
        }), r
    }
    t.s(["useMotionValue", 0, Y], 843678);

    function D(t, e) {
        let r = (0, U.useConstant)(() => []);
        return q(t, () => {
            r.length = 0;
            let n = t.length;
            for (let e = 0; e < n; e++) r[e] = t[e].get();
            return e(r)
        })
    }
    t.s(["useTransform", 0, function t(e, r, i, o) {
        if ("function" == typeof e) {
            let t;
            return n.collectMotionValues.current = [], e(), t = q(n.collectMotionValues.current, e), n.collectMotionValues.current = void 0, t
        }
        if (void 0 !== i && !Array.isArray(i) && "function" != typeof r) {
            var s = e,
                a = r,
                l = i,
                u = o;
            let n = (0, U.useConstant)(() => Object.keys(l)),
                f = (0, U.useConstant)(() => ({}));
            for (let e of n) f[e] = t(s, a, l[e], u);
            return f
        }
        let f = "function" == typeof r ? r : function(...t) {
                let e = !Array.isArray(t[0]),
                    r = e ? 0 : -1,
                    n = t[0 + r],
                    i = t[1 + r],
                    o = t[2 + r],
                    s = t[3 + r],
                    a = (0, m.interpolate)(i, o, s);
                return e ? a(n) : a
            }(r, i, o),
            c = Array.isArray(e) ? D(e, f) : D([e], ([t]) => f(t)),
            h = Array.isArray(e) ? void 0 : e.accelerate;
        return h && !h.isTransformed && "function" != typeof r && Array.isArray(i) && o?.clamp !== !1 && (c.accelerate = {
            ...h,
            times: r,
            keyframes: i,
            isTransformed: !0,
            ...o?.ease ? {
                ease: o.ease
            } : {}
        }), c
    }], 304776)
}, 193863, (t, e, r) => {
    t.e, e.exports = function(t, e) {
        if (void 0 == e && (e = {
                fuzzy: !0
            }), /youtu\.?be/.test(t)) {
            var r, n = [/youtu\.be\/([^#\&\?]{11})/, /\?v=([^#\&\?]{11})/, /\&v=([^#\&\?]{11})/, /embed\/([^#\&\?]{11})/, /\/v\/([^#\&\?]{11})/];
            for (r = 0; r < n.length; ++r)
                if (n[r].test(t)) return n[r].exec(t)[1];
            if (e.fuzzy) {
                var i = t.split(/[\/\&\?=#\.\s]/g);
                for (r = 0; r < i.length; ++r)
                    if (/^[^#\&\?]{11}$/.test(i[r])) return i[r]
            }
        }
        return null
    }
}, 973626, 302461, t => {
    "use strict";
    var e = t.i(470934),
        r = t.i(327745);

    function n(t, n) {
        let i = t[t.length - 1];
        for (let o = 1; o <= n; o++) {
            let s = (0, e.progress)(0, n, o);
            t.push((0, r.mixNumber)(i, 1, s))
        }
    }
    t.s(["fillOffset", 0, n], 302461), t.s(["defaultOffset", 0, function(t) {
        let e = [0];
        return n(e, t.length - 1), e
    }], 973626)
}, 270736, t => {
    "use strict";
    let e, r;
    var n = t.i(256650),
        i = t.i(513038);
    let o = new WeakMap,
        s = (t, e, r) => (i, o) => o && o[0] ? o[0][t + "Size"] : (0, n.isSVGElement)(i) && "getBBox" in i ? i.getBBox()[e] : i[r],
        a = s("inline", "width", "offsetWidth"),
        l = s("block", "height", "offsetHeight");

    function u({
        target: t,
        borderBoxSize: e
    }) {
        o.get(t)?.forEach(r => {
            r(t, {
                get width() {
                    return a(t, e)
                },
                get height() {
                    return l(t, e)
                }
            })
        })
    }

    function f(t) {
        t.forEach(u)
    }
    let c = new Set;
    t.s(["resize", 0, function(t, n) {
        let s;
        return "function" == typeof t ? (c.add(t), r || (r = () => {
            let t = {
                get width() {
                    return window.innerWidth
                },
                get height() {
                    return window.innerHeight
                }
            };
            c.forEach(e => e(t))
        }, window.addEventListener("resize", r)), () => {
            c.delete(t), c.size || "function" != typeof r || (window.removeEventListener("resize", r), r = void 0)
        }) : (!e && "u" > typeof ResizeObserver && (e = new ResizeObserver(f)), (s = (0, i.resolveElements)(t)).forEach(t => {
            let r = o.get(t);
            r || (r = new Set, o.set(t, r)), r.add(n), e?.observe(t)
        }), () => {
            s.forEach(t => {
                let r = o.get(t);
                r?.delete(n), r?.size || e?.unobserve(t)
            })
        })
    }], 270736)
}, 226056, t => {
    "use strict";
    var e = t.i(725542),
        r = t.i(508983),
        n = t.i(719372),
        i = t.i(120194),
        o = t.i(815645),
        s = t.i(470934),
        a = t.i(899290);
    t.s(["interpolate", 0, function(t, l, {
        clamp: u = !0,
        ease: f,
        mixer: c
    } = {}) {
        let h = t.length;
        if ((0, e.invariant)(h === l.length, "Both input and output ranges must be the same length", "range-length"), 1 === h) return () => l[0];
        if (2 === h && l[0] === l[1]) return () => l[1];
        let p = t[0] === t[1];
        t[0] > t[h - 1] && (t = [...t].reverse(), l = [...l].reverse());
        let d = function(t, e, r) {
                let s = [],
                    l = r || n.MotionGlobalConfig.mix || a.mix,
                    u = t.length - 1;
                for (let r = 0; r < u; r++) {
                    let n = l(t[r], t[r + 1]);
                    if (e) {
                        let t = Array.isArray(e) ? e[r] || i.noop : e;
                        n = (0, o.pipe)(t, n)
                    }
                    s.push(n)
                }
                return s
            }(l, f, c),
            g = d.length,
            m = e => {
                if (p && e < t[0]) return l[0];
                let r = 0;
                if (g > 1)
                    for (; r < t.length - 2 && !(e < t[r + 1]); r++);
                let n = (0, s.progress)(t[r], t[r + 1], e);
                return d[r](n)
            };
        return u ? e => m((0, r.clamp)(t[0], t[h - 1], e)) : m
    }])
}, 256650, t => {
    "use strict";
    var e = t.i(825465);
    t.s(["isSVGElement", 0, function(t) {
        return (0, e.isObject)(t) && "ownerSVGElement" in t
    }])
}, 513038, t => {
    "use strict";
    t.s(["resolveElements", 0, function(t, e, r) {
        if (null == t) return [];
        if (t instanceof EventTarget) return [t];
        if ("string" == typeof t) {
            let n = document;
            e && (n = e.current);
            let i = r?.[t] ?? n.querySelectorAll(t);
            return i ? Array.from(i) : []
        }
        return Array.from(t).filter(t => null != t)
    }])
}, 815645, 899290, t => {
    "use strict";
    let e = (...t) => t.reduce((t, e) => r => e(t(r)));
    t.s(["pipe", 0, e], 815645);
    var r = t.i(725542),
        n = t.i(133071),
        i = t.i(162158),
        o = t.i(53768),
        s = t.i(752934),
        a = t.i(87436);

    function l(t, e, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? t + (e - t) * 6 * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
    }
    var u = t.i(439327);

    function f(t, e) {
        return r => r > 0 ? e : t
    }
    var c = t.i(327745);
    let h = (t, e, r) => {
            let n = t * t,
                i = r * (e * e - n) + n;
            return i < 0 ? 0 : Math.sqrt(i)
        },
        p = [s.hex, u.rgba, a.hsla];

    function d(t) {
        let e = p.find(e => e.test(t));
        if ((0, r.warning)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`, "color-not-animatable"), !e) return !1;
        let n = e.parse(t);
        return e === a.hsla && (n = function({
            hue: t,
            saturation: e,
            lightness: r,
            alpha: n
        }) {
            t /= 360, r /= 100;
            let i = 0,
                o = 0,
                s = 0;
            if (e /= 100) {
                let n = r < .5 ? r * (1 + e) : r + e - r * e,
                    a = 2 * r - n;
                i = l(a, n, t + 1 / 3), o = l(a, n, t), s = l(a, n, t - 1 / 3)
            } else i = o = s = r;
            return {
                red: Math.round(255 * i),
                green: Math.round(255 * o),
                blue: Math.round(255 * s),
                alpha: n
            }
        }(n)), n
    }
    let g = (t, e) => {
            let r = d(t),
                n = d(e);
            if (!r || !n) return f(t, e);
            let i = {
                ...r
            };
            return t => (i.red = h(r.red, n.red, t), i.green = h(r.green, n.green, t), i.blue = h(r.blue, n.blue, t), i.alpha = (0, c.mixNumber)(r.alpha, n.alpha, t), u.rgba.transform(i))
        },
        m = new Set(["none", "hidden"]);

    function v(t, e) {
        return r => (0, c.mixNumber)(t, e, r)
    }

    function w(t) {
        return "number" == typeof t ? v : "string" == typeof t ? (0, n.isCSSVariableToken)(t) ? f : i.color.test(t) ? g : x : Array.isArray(t) ? y : "object" == typeof t ? i.color.test(t) ? g : b : f
    }

    function y(t, e) {
        let r = [...t],
            n = r.length,
            i = t.map((t, r) => w(t)(t, e[r]));
        return t => {
            for (let e = 0; e < n; e++) r[e] = i[e](t);
            return r
        }
    }

    function b(t, e) {
        let r = {
                ...t,
                ...e
            },
            n = {};
        for (let i in r) void 0 !== t[i] && void 0 !== e[i] && (n[i] = w(t[i])(t[i], e[i]));
        return t => {
            for (let e in n) r[e] = n[e](t);
            return r
        }
    }
    let x = (t, n) => {
        let i = o.complex.createTransformer(n),
            s = (0, o.analyseComplexValue)(t),
            a = (0, o.analyseComplexValue)(n);
        if (!(s.indexes.var.length === a.indexes.var.length && s.indexes.color.length === a.indexes.color.length && s.indexes.number.length >= a.indexes.number.length)) return (0, r.warning)(!0, `Complex values '${t}' and '${n}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`, "complex-values-different"), f(t, n);
        if (m.has(t) && !a.values.length || m.has(n) && !s.values.length) return m.has(t) ? e => e <= 0 ? t : n : e => e >= 1 ? n : t;
        return e(y(function(t, e) {
            let r = [],
                n = {
                    color: 0,
                    var: 0,
                    number: 0
                };
            for (let i = 0; i < e.values.length; i++) {
                let o = e.types[i],
                    s = t.indexes[o][n[o]],
                    a = t.values[s] ?? 0;
                r[i] = a, n[o]++
            }
            return r
        }(s, a), a.values), i)
    };
    t.s(["mix", 0, function(t, e, r) {
        return "number" == typeof t && "number" == typeof e && "number" == typeof r ? (0, c.mixNumber)(t, e, r) : w(t)(t, e)
    }], 899290)
}, 470934, t => {
    "use strict";
    t.s(["progress", 0, (t, e, r) => {
        let n = e - t;
        return n ? (r - t) / n : 1
    }])
}, 590553, t => {
    "use strict";
    var e = t.i(803258),
        r = t.i(409781);
    t.s(["useToggleState", 0, function(t = {}) {
        let {
            isReadOnly: n
        } = t, [i, o] = (0, e.useControlledState)(t.isSelected, t.defaultSelected || !1, t.onChange), [s] = (0, r.useState)(i);
        return {
            isSelected: i,
            defaultSelected: t.defaultSelected ?? s,
            setSelected: function(t) {
                n || o(t)
            },
            toggle: function() {
                n || o(!i)
            }
        }
    }])
}, 430215, t => {
    "use strict";
    var e = t.i(409781);
    t.s(["default", 0, t => {
        let [r, n] = (0, e.useState)(!1);
        return (0, e.useEffect)(() => {
            let e = window.matchMedia(t);
            e.matches !== r && n(e.matches);
            let i = () => n(e.matches);
            return window.addEventListener("resize", i), () => window.removeEventListener("resize", i)
        }, [r, t]), r
    }])
}]);

//# debugId=8261aa65-df9e-4145-800b-ca9b3a720d04