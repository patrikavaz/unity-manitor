try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c96ddf3a-30c5-4e87-ad59-ba0f214a31a1", e._sentryDebugIdIdentifier = "sentry-dbid-c96ddf3a-30c5-4e87-ad59-ba0f214a31a1")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [39854], {
        1792: (e, t, n) => {
            var r = n(34120),
                o = n(41928);
            e.exports = function(e) {
                return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
            }
        },
        3032: (e, t, n) => {
            var r = n(86027),
                o = n(71168);
            e.exports = function(e, t) {
                var n = o(e, t);
                return r(n) ? n : void 0
            }
        },
        11053: (e, t, n) => {
            e.exports = n(3032)(n(16073), "Map")
        },
        11614: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    reason: t,
                    children: n
                } = e;
                return n
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "BailoutToCSR", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(70506)
        },
        15621: e => {
            e.exports = Array.isArray
        },
        16073: (e, t, n) => {
            var r = n(80592),
                o = "object" == typeof self && self && self.Object === Object && self;
            e.exports = r || o || Function("return this")()
        },
        17957: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => c
            });
            var r = n(45079);
            let o = {
                some: 0,
                all: 1
            };

            function c(e, t, {
                root: n,
                margin: a,
                amount: l = "some"
            } = {}) {
                let u = (0, r.K)(e),
                    i = new WeakMap,
                    s = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let n = i.get(e.target);
                            if (!!n !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let n = t(e.target, e);
                                    "function" == typeof n ? i.set(e.target, n) : s.unobserve(e.target)
                                } else "function" == typeof n && (n(e), i.delete(e.target))
                        })
                    }, {
                        root: n,
                        rootMargin: a,
                        threshold: "number" == typeof l ? l : o[l]
                    });
                return u.forEach(e => s.observe(e)), () => s.disconnect()
            }
        },
        18736: (e, t, n) => {
            var r = n(27497),
                o = function() {
                    var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }();
            e.exports = function(e) {
                return !!o && o in e
            }
        },
        24565: e => {
            var t = Function.prototype.toString;
            e.exports = function(e) {
                if (null != e) {
                    try {
                        return t.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }
        },
        27497: (e, t, n) => {
            e.exports = n(16073)["__core-js_shared__"]
        },
        34120: (e, t, n) => {
            var r = n(34213),
                o = n(92153),
                c = n(98662),
                a = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? o(e) : c(e)
            }
        },
        34213: (e, t, n) => {
            e.exports = n(16073).Symbol
        },
        38293: function(e) {
            e.exports = function(e, t) {
                if (void 0 == t && (t = {
                        fuzzy: !0
                    }), /youtu\.?be/.test(e)) {
                    var n, r = [/youtu\.be\/([^#\&\?]{11})/, /\?v=([^#\&\?]{11})/, /\&v=([^#\&\?]{11})/, /embed\/([^#\&\?]{11})/, /\/v\/([^#\&\?]{11})/];
                    for (n = 0; n < r.length; ++n)
                        if (r[n].test(e)) return r[n].exec(e)[1];
                    if (t.fuzzy) {
                        var o = e.split(/[\/\&\?=#\.\s]/g);
                        for (n = 0; n < o.length; ++n)
                            if (/^[^#\&\?]{11}$/.test(o[n])) return o[n]
                    }
                }
                return null
            }
        },
        39105: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = n(68325),
                o = n(90337),
                c = n(11614);

            function a(e) {
                return {
                    default: e && "default" in e ? e.default : e
                }
            }
            n(74291);
            let l = {
                    loader: () => Promise.resolve(a(() => null)),
                    loading: null,
                    ssr: !0
                },
                u = function(e) {
                    let t = {
                            ...l,
                            ...e
                        },
                        n = (0, o.lazy)(() => t.loader().then(a)),
                        u = t.loading;

                    function i(e) {
                        let a = u ? (0, r.jsx)(u, {
                                isLoading: !0,
                                pastDelay: !0,
                                error: null
                            }) : null,
                            l = !t.ssr || !!t.loading,
                            i = l ? o.Suspense : o.Fragment,
                            s = t.ssr ? (0, r.jsxs)(r.Fragment, {
                                children: [null, (0, r.jsx)(n, {
                                    ...e
                                })]
                            }) : (0, r.jsx)(c.BailoutToCSR, {
                                reason: "next/dynamic",
                                children: (0, r.jsx)(n, {
                                    ...e
                                })
                            });
                        return (0, r.jsx)(i, {
                            ...l ? {
                                fallback: a
                            } : {},
                            children: s
                        })
                    }
                    return i.displayName = "LoadableComponent", i
                }
        },
        41928: e => {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        49494: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o.a
            });
            var r = n(10295),
                o = n.n(r),
                c = {};
            for (let e in r) "default" !== e && (c[e] = () => r[e]);
            n.d(t, c)
        },
        54175: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => c
            });
            var r = n(90337),
                o = n(17957);

            function c(e, {
                root: t,
                margin: n,
                amount: a,
                once: l = !1,
                initial: u = !1
            } = {}) {
                let [i, s] = (0, r.useState)(u);
                return (0, r.useEffect)(() => {
                    if (!e.current || l && i) return;
                    let r = {
                        root: t && t.current || void 0,
                        margin: n,
                        amount: a
                    };
                    return (0, o.l)(e.current, () => (s(!0), l ? void 0 : () => s(!1)), r)
                }, [t, e, n, l, a]), i
            }
        },
        58966: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorageInstance", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = (0, n(72040).createAsyncLocalStorage)()
        },
        71168: e => {
            e.exports = function(e, t) {
                return null == e ? void 0 : e[t]
            }
        },
        72040: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), ! function(e, t) {
                for (var n in t) Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
            }(t, {
                bindSnapshot: function() {
                    return a
                },
                createAsyncLocalStorage: function() {
                    return c
                },
                createSnapshot: function() {
                    return l
                }
            });
            let n = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
                value: "E504",
                enumerable: !1,
                configurable: !0
            });
            class r {
                disable() {
                    throw n
                }
                getStore() {}
                run() {
                    throw n
                }
                exit() {
                    throw n
                }
                enterWith() {
                    throw n
                }
                static bind(e) {
                    return e
                }
            }
            let o = "undefined" != typeof globalThis && globalThis.AsyncLocalStorage;

            function c() {
                return o ? new o : new r
            }

            function a(e) {
                return o ? o.bind(e) : r.bind(e)
            }

            function l() {
                return o ? o.snapshot() : function(e, ...t) {
                    return e(...t)
                }
            }
        },
        74291: (e, t, n) => {
            "use strict";

            function r(e) {
                let {
                    moduleIds: t
                } = e;
                return null
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "PreloadChunks", {
                enumerable: !0,
                get: function() {
                    return r
                }
            }), n(68325), n(93796), n(87284), n(89921)
        },
        80592: (e, t, n) => {
            e.exports = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
        },
        82488: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => o.a
            });
            var r = n(84161),
                o = n.n(r)
        },
        84161: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(80482)._(n(39105));

            function o(e, t) {
                var n;
                let o = {};
                "function" == typeof e && (o.loader = e);
                let c = {
                    ...o,
                    ...t
                };
                return (0, r.default)({
                    ...c,
                    modules: null == (n = c.loadableGenerated) ? void 0 : n.modules
                })
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        84671: e => {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        86027: (e, t, n) => {
            var r = n(87892),
                o = n(18736),
                c = n(84671),
                a = n(24565),
                l = /^\[object .+?Constructor\]$/,
                u = Object.prototype,
                i = Function.prototype.toString,
                s = u.hasOwnProperty,
                f = RegExp("^" + i.call(s).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!c(e) || o(e)) && (r(e) ? f : l).test(a(e))
            }
        },
        87284: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return r.workAsyncStorageInstance
                }
            });
            let r = n(58966)
        },
        87892: (e, t, n) => {
            var r = n(34120),
                o = n(84671);
            e.exports = function(e) {
                if (!o(e)) return !1;
                var t = r(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        },
        92153: (e, t, n) => {
            var r = n(34213),
                o = Object.prototype,
                c = o.hasOwnProperty,
                a = o.toString,
                l = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                var t = c.call(e, l),
                    n = e[l];
                try {
                    e[l] = void 0;
                    var r = !0
                } catch (e) {}
                var o = a.call(e);
                return r && (t ? e[l] = n : delete e[l]), o
            }
        },
        92329: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n(90337),
                o = function() {
                    return (o = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e
                    }).apply(this, arguments)
                },
                c = r.forwardRef(function(e, t) {
                    var n = r.useState(!1),
                        c = n[0],
                        a = n[1],
                        l = r.useState(!1),
                        u = l[0],
                        i = l[1],
                        s = encodeURIComponent(e.id),
                        f = "string" == typeof e.playlistCoverId ? encodeURIComponent(e.playlistCoverId) : null,
                        d = e.title,
                        p = e.poster || "hqdefault",
                        b = "&".concat(e.params) || 0,
                        y = e.muted ? "&mute=1" : "",
                        g = e.announce || "Watch",
                        m = e.webp ? "webp" : "jpg",
                        v = e.webp ? "vi_webp" : "vi",
                        h = e.thumbnail || (e.playlist ? "https://i.ytimg.com/".concat(v, "/").concat(f, "/").concat(p, ".").concat(m) : "https://i.ytimg.com/".concat(v, "/").concat(s, "/").concat(p, ".").concat(m)),
                        j = e.noCookie ? "https://www.youtube-nocookie.com" : "https://www.youtube.com";
                    j = e.cookie ? "https://www.youtube.com" : "https://www.youtube-nocookie.com";
                    var w = e.playlist ? "".concat(j, "/embed/videoseries?autoplay=1").concat(y, "&list=").concat(s).concat(b) : "".concat(j, "/embed/").concat(s, "?autoplay=1&state=1").concat(y).concat(b),
                        _ = e.activatedClass || "lyt-activated",
                        O = e.adNetwork || !1,
                        x = e.aspectHeight || 9,
                        k = e.aspectWidth || 16,
                        E = e.iframeClass || "",
                        S = e.playerClass || "lty-playbtn",
                        P = e.wrapperClass || "yt-lite",
                        C = e.onIframeAdded || function() {},
                        I = e.rel ? "prefetch" : "preload",
                        F = e.containerElement || "article";
                    return r.useEffect(function() {
                        u && C()
                    }, [u]), r.createElement(r.Fragment, null, r.createElement("link", {
                        rel: I,
                        href: h,
                        as: "image"
                    }), r.createElement(r.Fragment, null, c && r.createElement(r.Fragment, null, r.createElement("link", {
                        rel: "preconnect",
                        href: j
                    }), r.createElement("link", {
                        rel: "preconnect",
                        href: "https://www.google.com"
                    }), O && r.createElement(r.Fragment, null, r.createElement("link", {
                        rel: "preconnect",
                        href: "https://static.doubleclick.net"
                    }), r.createElement("link", {
                        rel: "preconnect",
                        href: "https://googleads.g.doubleclick.net"
                    })))), r.createElement(F, {
                        onPointerOver: function() {
                            c || a(!0)
                        },
                        onClick: function() {
                            u || i(!0)
                        },
                        className: "".concat(P, " ").concat(u ? _ : ""),
                        "data-title": d,
                        style: o({
                            backgroundImage: "url(".concat(h, ")")
                        }, {
                            "--aspect-ratio": "".concat(x / k * 100, "%")
                        })
                    }, r.createElement("button", {
                        type: "button",
                        className: S,
                        "aria-label": "".concat(g, " ").concat(d)
                    }), u && r.createElement("iframe", {
                        ref: t,
                        className: E,
                        title: d,
                        width: "560",
                        height: "315",
                        frameBorder: "0",
                        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: !0,
                        src: w
                    })))
                })
        },
        98662: e => {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        }
    }
]);