(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 686049, t => {
    "use strict";
    var e = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 8290,
            4: 8291,
            5: 8288,
            6: 65279,
            7: 8289,
            8: 119155,
            9: 119156,
            a: 119157,
            b: 119158,
            c: 119159,
            d: 119160,
            e: 119161,
            f: 119162
        },
        r = {
            0: 8203,
            1: 8204,
            2: 8205,
            3: 65279
        },
        n = {
            0: String.fromCodePoint(r[0]),
            1: String.fromCodePoint(r[1]),
            2: String.fromCodePoint(r[2]),
            3: String.fromCodePoint(r[3])
        },
        o = [, , , , ].fill(String.fromCodePoint(r[0])).join("");
    Object.fromEntries(Object.entries(n).map(t => [t[1], +t[0]])), Object.fromEntries(Object.entries(e).map(t => t.reverse()));
    var i = `${Object.values(e).map(t=>`\\u{${t.toString(16)}}`).join("")}`,
        a = RegExp(`[${i}]{4,}`, "gu");
    t.s(["isRecord", 0, function(t) {
        return "object" == typeof t && null !== t && !Array.isArray(t)
    }, "stegaClean", 0, function(t) {
        var e, r;
        return t && JSON.parse({
            cleaned: (e = JSON.stringify(t)).replace(a, ""),
            encoded: (null == (r = e.match(a)) ? void 0 : r[0]) || ""
        }.cleaned)
    }, "y", 0, function(t, e, r = "auto") {
        return !0 === r || "auto" === r && (!(!Number.isNaN(Number(t)) || /[a-z]/i.test(t) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t)) && Date.parse(t) || function(t) {
            try {
                new URL(t, t.startsWith("/") ? "https://acme.com" : void 0)
            } catch {
                return !1
            }
            return !0
        }(t)) ? t : `${t}${function(t){let e=JSON.stringify(t),r=new TextEncoder().encode(e),i="";for(let t=0;t<r.length;t++){let e=r[t];i+=n[e>>6&3]+n[e>>4&3]+n[e>>2&3]+n[3&e]}return o+i}(e)}`
    }])
}, 477846, (t, e, r) => {
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
        var o = [
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
            i = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
            a = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
            s = ["format"],
            l = function() {
                function l(t, r) {
                    this.options = void 0, this.options = t ? e({}, t.options || {}, r || {}) : e({}, r || {})
                }
                var u = l.prototype;
                return u.withOptions = function(r) {
                    var n = r.baseUrl || this.options.baseUrl,
                        i = {
                            baseUrl: n
                        };
                    for (var a in r) r.hasOwnProperty(a) && (i[function(e) {
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
                            }(o); !(r = n()).done;) {
                            var i = r.value,
                                a = i[0],
                                s = i[1];
                            if (e === a || e === s) return a
                        }
                        return e
                    }(a)] = r[a]);
                    return new l(this, e({
                        baseUrl: n
                    }, i))
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
                    if (-1 === i.indexOf(t)) throw Error('Invalid fit mode "' + t + '"');
                    return this.withOptions({
                        fit: t
                    })
                }, u.crop = function(t) {
                    if (-1 === a.indexOf(t)) throw Error('Invalid crop mode "' + t + '"');
                    return this.withOptions({
                        crop: t
                    })
                }, u.saturation = function(t) {
                    return this.withOptions({
                        saturation: t
                    })
                }, u.auto = function(t) {
                    if (-1 === s.indexOf(t)) throw Error('Invalid auto mode "' + t + '"');
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
                        var i = e({}, t || {}),
                            a = i.source;
                        delete i.source;
                        var s = function(t) {
                            var r, o;
                            if (!t) return null;
                            if ("string" == typeof t && (o = t, /^https?:\/\//.test("" + o))) r = {
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
                        }(a);
                        if (!s) {
                            if (a && "object" == typeof a && null !== a && a._upload && (!a.asset || !a.asset._ref)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                            throw Error("Unable to resolve image URL from source (" + JSON.stringify(a) + ")")
                        }
                        var l = function(t) {
                                var e = t.split("-"),
                                    n = e[1],
                                    o = e[2],
                                    i = e[3];
                                if (!n || !o || !i) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                var a = o.split("x"),
                                    s = a[0],
                                    l = a[1],
                                    u = +s,
                                    f = +l;
                                if (!(isFinite(u) && isFinite(f))) throw Error("Malformed asset _ref '" + t + "'. Expected an id like \"" + r + '".');
                                return {
                                    id: n,
                                    width: u,
                                    height: f,
                                    format: i
                                }
                            }(s.asset._ref || s.asset._id || ""),
                            u = Math.round(s.crop.left * l.width),
                            f = Math.round(s.crop.top * l.height),
                            c = {
                                left: u,
                                top: f,
                                width: Math.round(l.width - s.crop.right * l.width - u),
                                height: Math.round(l.height - s.crop.bottom * l.height - f)
                            },
                            h = s.hotspot.height * l.height / 2,
                            p = s.hotspot.width * l.width / 2,
                            d = s.hotspot.x * l.width,
                            g = s.hotspot.y * l.height;
                        return i.rect || i.focalPoint || i.ignoreImageParams || i.crop || (i = e({}, i, function(t, e) {
                                var r, n = e.width,
                                    o = e.height;
                                if (!(n && o)) return {
                                    width: n,
                                    height: o,
                                    rect: t.crop
                                };
                                var i = t.crop,
                                    a = t.hotspot,
                                    s = n / o;
                                if (i.width / i.height > s) {
                                    var l = Math.round(i.height),
                                        u = Math.round(l * s),
                                        f = Math.max(0, Math.round(i.top)),
                                        c = Math.max(0, Math.round(Math.round((a.right - a.left) / 2 + a.left) - u / 2));
                                    c < i.left ? c = i.left : c + u > i.left + i.width && (c = i.left + i.width - u), r = {
                                        left: c,
                                        top: f,
                                        width: u,
                                        height: l
                                    }
                                } else {
                                    var h = i.width,
                                        p = Math.round(h / s),
                                        d = Math.max(0, Math.round(i.left)),
                                        g = Math.max(0, Math.round(Math.round((a.bottom - a.top) / 2 + a.top) - p / 2));
                                    g < i.top ? g = i.top : g + p > i.top + i.height && (g = i.top + i.height - p), r = {
                                        left: d,
                                        top: g,
                                        width: h,
                                        height: p
                                    }
                                }
                                return {
                                    width: n,
                                    height: o,
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
                            }, i))),
                            function(t) {
                                var e = (t.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                                    r = t.vanityName ? "/" + t.vanityName : "",
                                    n = t.asset.id + "-" + t.asset.width + "x" + t.asset.height + "." + t.asset.format + r,
                                    i = e + "/images/" + t.projectId + "/" + t.dataset + "/" + n,
                                    a = [];
                                if (t.rect) {
                                    var s = t.rect,
                                        l = s.left,
                                        u = s.top,
                                        f = s.width,
                                        c = s.height;
                                    (0 !== l || 0 !== u || c !== t.asset.height || f !== t.asset.width) && a.push("rect=" + l + "," + u + "," + f + "," + c)
                                }
                                t.bg && a.push("bg=" + t.bg), t.focalPoint && (a.push("fp-x=" + t.focalPoint.x), a.push("fp-y=" + t.focalPoint.y));
                                var h = [t.flipHorizontal && "h", t.flipVertical && "v"].filter(Boolean).join("");
                                return (h && a.push("flip=" + h), o.forEach(function(e) {
                                    var r = e[0],
                                        n = e[1];
                                    void 0 !== t[r] ? a.push(n + "=" + encodeURIComponent(t[r])) : void 0 !== t[n] && a.push(n + "=" + encodeURIComponent(t[n]))
                                }), 0 === a.length) ? i : i + "?" + a.join("&")
                            }(e({}, i, {
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
                    o = e.dataset;
                return new l(null, {
                    baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: n,
                    dataset: o
                })
            }
            if (t && "clientConfig" in t && "object" == typeof t.clientConfig) {
                var i = t.clientConfig,
                    a = i.apiHost,
                    s = i.projectId,
                    u = i.dataset;
                return new l(null, {
                    baseUrl: (a || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: s,
                    dataset: u
                })
            }
            return new l(null, t || {})
        }
    }()
}, 779712, t => {
    "use strict";
    var e = t.i(591336);
    let r = (0, t.i(477846).default)(e.cdnClient);
    t.s(["urlForImage", 0, t => t ? r.image(t) : null])
}, 124576, t => {
    "use strict";
    t.i(913836);
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
        root: o,
        margin: i,
        amount: a,
        once: s = !1,
        initial: l = !1
    } = {}) {
        let [u, f] = (0, e.useState)(l);
        return (0, e.useEffect)(() => {
            if (!t.current || s && u) return;
            let e = {
                root: o && o.current || void 0,
                margin: i,
                amount: a
            };
            return function(t, e, {
                root: o,
                margin: i,
                amount: a = "some"
            } = {}) {
                let s = (0, r.resolveElements)(t),
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
                        root: o,
                        rootMargin: i,
                        threshold: "number" == typeof a ? a : n[a]
                    });
                return s.forEach(t => u.observe(t)), () => u.disconnect()
            }(t.current, () => (f(!0), s ? void 0 : () => f(!1)), e)
        }, [o, t, i, s, a]), u
    }], 131581)
}, 417245, 843678, 304776, t => {
    "use strict";
    var e = t.i(328744),
        r = t.i(823928),
        n = t.i(706221),
        o = t.i(725542),
        i = t.i(409781),
        a = t.i(120194),
        s = t.i(672357);

    function l(t, e) {
        let r, n = () => {
            let {
                currentTime: n
            } = e, o = (null === n ? 0 : n.value) / 100;
            r !== o && t(o), r = o
        };
        return s.frame.preUpdate(n, !0), () => (0, s.cancelFrame)(n)
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
        let o = r[e],
            {
                length: i,
                position: a
            } = d[e],
            s = o.current,
            l = r.time;
        o.current = Math.abs(t[`scroll${a}`]), o.scrollLength = t[`scroll${i}`] - t[`client${i}`], o.offset.length = 0, o.offset[0] = 0, o.offset[1] = o.scrollLength, o.progress = (0, c.progress)(0, o.scrollLength, o.current);
        let u = n - l;
        o.velocity = u > 50 ? 0 : (0, h.velocityPerSecond)(o.current - s, u)
    }
    var m = t.i(226056),
        y = t.i(973626),
        v = t.i(508983),
        w = t.i(335029);
    let b = {
        start: 0,
        center: .5,
        end: 1
    };

    function O(t, e, r = 0) {
        let n = 0;
        if (t in b && (t = b[t]), "string" == typeof t) {
            let e = parseFloat(t);
            t.endsWith("px") ? n = e : t.endsWith("%") ? t = e / 100 : t.endsWith("vw") ? n = e / 100 * document.documentElement.clientWidth : t.endsWith("vh") ? n = e / 100 * document.documentElement.clientHeight : t = e
        }
        return "number" == typeof t && (n = e * t), r + n
    }
    let x = [0, 0],
        A = [
            [0, 0],
            [1, 1]
        ],
        E = {
            x: 0,
            y: 0
        },
        S = new WeakMap,
        j = new WeakMap,
        M = new WeakMap,
        _ = new WeakMap,
        I = new WeakMap,
        P = t => t === document.scrollingElement ? window : t;

    function C(t, {
        container: e = document.scrollingElement,
        trackContentSize: r = !1,
        ...n
    } = {}) {
        if (!e) return a.noop;
        let o = M.get(e);
        o || (o = new Set, M.set(e, o));
        let i = function(t, e, r, n = {}) {
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
                            target: o = t,
                            axis: i = "y"
                        } = r, a = "y" === i ? "height" : "width", s = o !== t ? function(t, e) {
                            let r = {
                                    x: 0,
                                    y: 0
                                },
                                n = t;
                            for (; n && n !== e;)
                                if ((0, w.isHTMLElement)(n)) r.x += n.offsetLeft, r.y += n.offsetTop, n = n.offsetParent;
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
                                let o = null,
                                    i = n.parentNode;
                                for (; !o;) "svg" === i.tagName && (o = i), i = n.parentNode;
                                n = o
                            } else break;
                            return r
                        }(o, t) : E, l = o === t ? {
                            width: t.scrollWidth,
                            height: t.scrollHeight
                        } : "getBBox" in o && "svg" !== o.tagName ? o.getBBox() : {
                            width: o.clientWidth,
                            height: o.clientHeight
                        }, u = {
                            width: t.clientWidth,
                            height: t.clientHeight
                        };
                        e[i].offset.length = 0;
                        let f = !e[i].interpolate,
                            c = n.length;
                        for (let t = 0; t < c; t++) {
                            let r = function(t, e, r, n) {
                                let o = Array.isArray(t) ? t : x,
                                    i = 0;
                                return "number" == typeof t ? o = [t, t] : "string" == typeof t && (o = (t = t.trim()).includes(" ") ? t.split(" ") : [t, b[t] ? t : "0"]), (i = O(o[0], r, n)) - O(o[1], e)
                            }(n[t], u[a], l[a], s[i]);
                            f || r === e[i].interpolatorOffsets[t] || (f = !0), e[i].offset[t] = r
                        }
                        f && (e[i].interpolate = (0, m.interpolate)(e[i].offset, (0, y.defaultOffset)(n), {
                            clamp: !1
                        }), e[i].interpolatorOffsets = [...e[i].offset]), e[i].progress = (0, v.clamp)(0, 1, e[i].interpolate(e[i].current))
                    }(t, r, n)
                },
                notify: () => e(r)
            }
        }(e, t, {
            time: 0,
            x: p(),
            y: p()
        }, n);
        if (o.add(i), !S.has(e)) {
            let t = () => {
                    for (let t of o) t.measure(s.frameData.timestamp);
                    s.frame.preUpdate(r)
                },
                r = () => {
                    for (let t of o) t.notify()
                },
                n = () => s.frame.read(t);
            S.set(e, n);
            let i = P(e);
            window.addEventListener("resize", n), e !== document.documentElement && j.set(e, (0, f.resize)(e, n)), i.addEventListener("scroll", n), n()
        }
        if (r && !I.has(e)) {
            let t = S.get(e),
                r = {
                    width: e.scrollWidth,
                    height: e.scrollHeight
                };
            _.set(e, r);
            let n = s.frame.read(() => {
                let n = e.scrollWidth,
                    o = e.scrollHeight;
                (r.width !== n || r.height !== o) && (t(), r.width = n, r.height = o)
            }, !0);
            I.set(e, n)
        }
        let l = S.get(e);
        return s.frame.read(l, !1, !0), () => {
            (0, s.cancelFrame)(l);
            let t = M.get(e);
            if (!t || (t.delete(i), t.size)) return;
            let r = S.get(e);
            S.delete(e), r && (P(e).removeEventListener("scroll", r), j.get(e)?.(), window.removeEventListener("resize", r));
            let n = I.get(e);
            n && ((0, s.cancelFrame)(n), I.delete(e)), _.delete(e)
        }
    }
    let T = [
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
        W = {
            start: 0,
            end: 1
        };

    function L(t) {
        if (!t) return {
            rangeStart: "contain 0%",
            rangeEnd: "contain 100%"
        };
        for (let [e, r] of T)
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
                                    let r = W[e[0]],
                                        n = W[e[1]];
                                    if (void 0 !== r && void 0 !== n) return [r, n]
                                }(r);
                                if (!t) return;
                                e.push(t)
                            } return e
                    }(t);
                    if (!r) return !1;
                    for (let t = 0; t < 2; t++) {
                        let n = r[t],
                            o = e[t];
                        if (n[0] !== o[0] || n[1] !== o[1]) return !1
                    }
                    return !0
                }(t, e)) return {
                rangeStart: `${r} 0%`,
                rangeEnd: `${r} 100%`
            }
    }
    let k = new Map;

    function H(t) {
        let e = {
                value: 0
            },
            r = C(r => {
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
        let o = k.get(e);
        o || (o = new Map, k.set(e, o));
        let i = r.target ?? "self",
            a = o.get(i);
        a || (a = {}, o.set(i, a));
        let s = n + (r.offset ?? []).join(",");
        return a[s] || (r.target && u(r.target) ? L(r.offset) ? a[s] = new ViewTimeline({
            subject: r.target,
            axis: n
        }) : a[s] = H({
            container: e,
            ...r
        }) : u() ? a[s] = new ScrollTimeline({
            source: e,
            axis: n
        }) : a[s] = H({
            container: e,
            ...r
        })), a[s]
    }

    function V(t, {
        axis: e = "y",
        container: r = document.scrollingElement,
        ...n
    } = {}) {
        let o, i, s;
        if (!r) return a.noop;
        let f = {
            axis: e,
            container: r,
            ...n
        };
        return "function" == typeof t ? function(t, e) {
            return 2 === t.length || e && (e.target || e.offset) ? C(r => {
                t(r[e.axis].progress, r)
            }, e) : l(t, R(e))
        }(t, f) : (o = R(f), i = f.target ? L(f.offset) : void 0, s = f.target ? u(f.target) && !!i : u(), t.attachTimeline({
            timeline: s ? o : void 0,
            ...i && s && {
                rangeStart: i.rangeStart,
                rangeEnd: i.rangeEnd
            },
            observe: t => (t.pause(), l(e => {
                t.time = t.iterationDuration * e
            }, o))
        }))
    }
    var N = t.i(416007),
        U = t.i(809018);
    let z = () => ({
            scrollX: (0, n.motionValue)(0),
            scrollY: (0, n.motionValue)(0),
            scrollXProgress: (0, n.motionValue)(0),
            scrollYProgress: (0, n.motionValue)(0)
        }),
        $ = t => !!t && !t.current;

    function B(t, r, n, o) {
        return {
            factory: i => {
                let a, s = () => {
                    $(n) || $(o) ? e.microtask.read(s) : a = V(i, {
                        ...r,
                        axis: t,
                        container: n?.current || void 0,
                        target: o?.current || void 0
                    })
                };
                return e.microtask.read(s), () => {
                    (0, e.cancelMicrotask)(s), a?.()
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
        ...a
    } = {}) {
        var s;
        let l = (0, N.useConstant)(z);
        s = a.offset, !("u" < typeof window) && (n ? (0, r.supportsViewTimeline)() && !!L(s) : (0, r.supportsScrollTimeline)()) && (l.scrollXProgress.accelerate = B("x", a, t, n), l.scrollYProgress.accelerate = B("y", a, t, n));
        let u = (0, i.useRef)(null),
            f = (0, i.useRef)(!1),
            c = (0, i.useCallback)(() => (u.current = V((t, {
                x: e,
                y: r
            }) => {
                l.scrollX.set(e.current), l.scrollXProgress.set(e.progress), l.scrollY.set(r.current), l.scrollYProgress.set(r.progress)
            }, {
                ...a,
                container: t?.current || void 0,
                target: n?.current || void 0
            }), () => {
                u.current?.()
            }), [t, n, JSON.stringify(a.offset)]);
        return (0, U.useIsomorphicLayoutEffect)(() => {
            if (f.current = !1, !($(t) || $(n))) return c();
            f.current = !0
        }, [c]), (0, i.useEffect)(() => {
            let r;
            if (!f.current) return;
            let i = () => {
                let e = $(t),
                    i = $(n);
                (0, o.invariant)(!e, "Container ref is defined but not hydrated", "use-scroll-ref"), (0, o.invariant)(!i, "Target ref is defined but not hydrated", "use-scroll-ref"), e || i || (r = c())
            };
            return e.microtask.read(i), () => {
                (0, e.cancelMicrotask)(i), r?.()
            }
        }, [c]), l
    }], 417245);
    var F = t.i(481522);

    function Y(t) {
        let e = (0, N.useConstant)(() => (0, n.motionValue)(t)),
            {
                isStatic: r
            } = (0, i.useContext)(F.MotionConfigContext);
        if (r) {
            let [, r] = (0, i.useState)(t);
            (0, i.useEffect)(() => e.on("change", r), [])
        }
        return e
    }

    function X(t, e) {
        let r = Y(e()),
            n = () => r.set(e());
        return n(), (0, U.useIsomorphicLayoutEffect)(() => {
            let e = () => s.frame.preRender(n, !1, !0),
                r = t.map(t => t.on("change", e));
            return () => {
                r.forEach(t => t()), (0, s.cancelFrame)(n)
            }
        }), r
    }
    t.s(["useMotionValue", 0, Y], 843678);

    function D(t, e) {
        let r = (0, N.useConstant)(() => []);
        return X(t, () => {
            r.length = 0;
            let n = t.length;
            for (let e = 0; e < n; e++) r[e] = t[e].get();
            return e(r)
        })
    }
    t.s(["useTransform", 0, function t(e, r, o, i) {
        if ("function" == typeof e) {
            let t;
            return n.collectMotionValues.current = [], e(), t = X(n.collectMotionValues.current, e), n.collectMotionValues.current = void 0, t
        }
        if (void 0 !== o && !Array.isArray(o) && "function" != typeof r) {
            var a = e,
                s = r,
                l = o,
                u = i;
            let n = (0, N.useConstant)(() => Object.keys(l)),
                f = (0, N.useConstant)(() => ({}));
            for (let e of n) f[e] = t(a, s, l[e], u);
            return f
        }
        let f = "function" == typeof r ? r : function(...t) {
                let e = !Array.isArray(t[0]),
                    r = e ? 0 : -1,
                    n = t[0 + r],
                    o = t[1 + r],
                    i = t[2 + r],
                    a = t[3 + r],
                    s = (0, m.interpolate)(o, i, a);
                return e ? s(n) : s
            }(r, o, i),
            c = Array.isArray(e) ? D(e, f) : D([e], ([t]) => f(t)),
            h = Array.isArray(e) ? void 0 : e.accelerate;
        return h && !h.isTransformed && "function" != typeof r && Array.isArray(o) && i?.clamp !== !1 && (c.accelerate = {
            ...h,
            times: r,
            keyframes: o,
            isTransformed: !0,
            ...i?.ease ? {
                ease: i.ease
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
                var o = t.split(/[\/\&\?=#\.\s]/g);
                for (r = 0; r < o.length; ++r)
                    if (/^[^#\&\?]{11}$/.test(o[r])) return o[r]
            }
        }
        return null
    }
}, 824627, t => {
    "use strict";
    var e = function(t, r) {
            return (e = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            })(t, r)
        },
        r = function() {
            return (r = Object.assign || function(t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var o in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                return t
            }).apply(this, arguments)
        };

    function n(t) {
        var e = "function" == typeof Symbol && Symbol.iterator,
            r = e && t[e],
            n = 0;
        if (r) return r.call(t);
        if (t && "number" == typeof t.length) return {
            next: function() {
                return t && n >= t.length && (t = void 0), {
                    value: t && t[n++],
                    done: !t
                }
            }
        };
        throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function o(t) {
        return this instanceof o ? (this.v = t, this) : new o(t)
    }
    "function" == typeof SuppressedError && SuppressedError, t.s(["__assign", () => r, "__asyncGenerator", 0, function(t, e, r) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var n, i = r.apply(t, e || []),
            a = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), s("next"), s("throw"), s("return", function(t) {
            return function(e) {
                return Promise.resolve(e).then(t, f)
            }
        }), n[Symbol.asyncIterator] = function() {
            return this
        }, n;

        function s(t, e) {
            i[t] && (n[t] = function(e) {
                return new Promise(function(r, n) {
                    a.push([t, e, r, n]) > 1 || l(t, e)
                })
            }, e && (n[t] = e(n[t])))
        }

        function l(t, e) {
            try {
                var r;
                (r = i[t](e)).value instanceof o ? Promise.resolve(r.value.v).then(u, f) : c(a[0][2], r)
            } catch (t) {
                c(a[0][3], t)
            }
        }

        function u(t) {
            l("next", t)
        }

        function f(t) {
            l("throw", t)
        }

        function c(t, e) {
            t(e), a.shift(), a.length && l(a[0][0], a[0][1])
        }
    }, "__asyncValues", 0, function(t) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var e, r = t[Symbol.asyncIterator];
        return r ? r.call(t) : (t = n(t), e = {}, o("next"), o("throw"), o("return"), e[Symbol.asyncIterator] = function() {
            return this
        }, e);

        function o(r) {
            e[r] = t[r] && function(e) {
                return new Promise(function(n, o) {
                    var i, a, s;
                    i = n, a = o, s = (e = t[r](e)).done, Promise.resolve(e.value).then(function(t) {
                        i({
                            value: t,
                            done: s
                        })
                    }, a)
                })
            }
        }
    }, "__await", 0, o, "__awaiter", 0, function(t, e, r, n) {
        return new(r || (r = Promise))(function(o, i) {
            function a(t) {
                try {
                    l(n.next(t))
                } catch (t) {
                    i(t)
                }
            }

            function s(t) {
                try {
                    l(n.throw(t))
                } catch (t) {
                    i(t)
                }
            }

            function l(t) {
                var e;
                t.done ? o(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                    t(e)
                })).then(a, s)
            }
            l((n = n.apply(t, e || [])).next())
        })
    }, "__extends", 0, function(t, r) {
        if ("function" != typeof r && null !== r) throw TypeError("Class extends value " + String(r) + " is not a constructor or null");

        function n() {
            this.constructor = t
        }
        e(t, r), t.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
    }, "__generator", 0, function(t, e) {
        var r, n, o, i = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = s(0), a.throw = s(1), a.return = s(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function s(s) {
            return function(l) {
                var u = [s, l];
                if (r) throw TypeError("Generator is already executing.");
                for (; a && (a = 0, u[0] && (i = 0)), i;) try {
                    if (r = 1, n && (o = 2 & u[0] ? n.return : u[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, u[1])).done) return o;
                    switch (n = 0, o && (u = [2 & u[0], o.value]), u[0]) {
                        case 0:
                        case 1:
                            o = u;
                            break;
                        case 4:
                            return i.label++, {
                                value: u[1],
                                done: !1
                            };
                        case 5:
                            i.label++, n = u[1], u = [0];
                            continue;
                        case 7:
                            u = i.ops.pop(), i.trys.pop();
                            continue;
                        default:
                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                i = 0;
                                continue
                            }
                            if (3 === u[0] && (!o || u[1] > o[0] && u[1] < o[3])) {
                                i.label = u[1];
                                break
                            }
                            if (6 === u[0] && i.label < o[1]) {
                                i.label = o[1], o = u;
                                break
                            }
                            if (o && i.label < o[2]) {
                                i.label = o[2], i.ops.push(u);
                                break
                            }
                            o[2] && i.ops.pop(), i.trys.pop();
                            continue
                    }
                    u = e.call(t, i)
                } catch (t) {
                    u = [6, t], n = 0
                } finally {
                    r = o = 0
                }
                if (5 & u[0]) throw u[1];
                return {
                    value: u[0] ? u[1] : void 0,
                    done: !0
                }
            }
        }
    }, "__read", 0, function(t, e) {
        var r = "function" == typeof Symbol && t[Symbol.iterator];
        if (!r) return t;
        var n, o, i = r.call(t),
            a = [];
        try {
            for (;
                (void 0 === e || e-- > 0) && !(n = i.next()).done;) a.push(n.value)
        } catch (t) {
            o = {
                error: t
            }
        } finally {
            try {
                n && !n.done && (r = i.return) && r.call(i)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    }, "__rest", 0, function(t, e) {
        var r = {};
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
        if (null != t && "function" == typeof Object.getOwnPropertySymbols)
            for (var o = 0, n = Object.getOwnPropertySymbols(t); o < n.length; o++) 0 > e.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(t, n[o]) && (r[n[o]] = t[n[o]]);
        return r
    }, "__spreadArray", 0, function(t, e, r) {
        if (r || 2 == arguments.length)
            for (var n, o = 0, i = e.length; o < i; o++) !n && o in e || (n || (n = Array.prototype.slice.call(e, 0, o)), n[o] = e[o]);
        return t.concat(n || Array.prototype.slice.call(e))
    }, "__values", 0, n])
}, 430215, t => {
    "use strict";
    var e = t.i(409781);
    t.s(["default", 0, t => {
        let [r, n] = (0, e.useState)(!1);
        return (0, e.useEffect)(() => {
            let e = window.matchMedia(t);
            e.matches !== r && n(e.matches);
            let o = () => n(e.matches);
            return window.addEventListener("resize", o), () => window.removeEventListener("resize", o)
        }, [r, t]), r
    }])
}]);