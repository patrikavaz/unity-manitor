try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9779be39-fd73-4fe1-9859-678edb73d863", e._sentryDebugIdIdentifier = "sentry-dbid-9779be39-fd73-4fe1-9859-678edb73d863")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [93177], {
        2308: (e, t, n) => {
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
            }), n(44648)
        },
        3557: (e, t, n) => {
            e.exports = n(98125)["__core-js_shared__"]
        },
        7034: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => o.a
            });
            var r = n(10087),
                o = n.n(r)
        },
        10087: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(66430)._(n(59823));

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
        15967: (e, t, n) => {
            var r = n(34384),
                o = n(79300),
                c = n(99939),
                a = n(95145),
                l = /^\[object .+?Constructor\]$/,
                u = Object.prototype,
                i = Function.prototype.toString,
                s = u.hasOwnProperty,
                f = RegExp("^" + i.call(s).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!c(e) || o(e)) && (r(e) ? f : l).test(a(e))
            }
        },
        18996: (e, t, n) => {
            e.exports = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
        },
        27076: (e, t, n) => {
            var r = n(15967),
                o = n(85316);
            e.exports = function(e, t) {
                var n = o(e, t);
                return r(n) ? n : void 0
            }
        },
        30434: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return r.workAsyncStorageInstance
                }
            });
            let r = n(71740)
        },
        30580: (e, t, n) => {
            var r = n(66393),
                o = n(63197),
                c = n(54226),
                a = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? o(e) : c(e)
            }
        },
        34078: (e, t) => {
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
        34384: (e, t, n) => {
            var r = n(30580),
                o = n(99939);
            e.exports = function(e) {
                if (!o(e)) return !1;
                var t = r(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        },
        34529: function(e) {
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
        36677: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => a
            });
            var r = n(7787),
                o = n(55123);
            let c = {
                some: 0,
                all: 1
            };

            function a(e, {
                root: t,
                margin: n,
                amount: l,
                once: u = !1,
                initial: i = !1
            } = {}) {
                let [s, f] = (0, r.useState)(i);
                return (0, r.useEffect)(() => {
                    if (!e.current || u && s) return;
                    let r = {
                        root: t && t.current || void 0,
                        margin: n,
                        amount: l
                    };
                    return function(e, t, {
                        root: n,
                        margin: r,
                        amount: a = "some"
                    } = {}) {
                        let l = (0, o.K)(e),
                            u = new WeakMap,
                            i = new IntersectionObserver(e => {
                                e.forEach(e => {
                                    let n = u.get(e.target);
                                    if (!!n !== e.isIntersecting)
                                        if (e.isIntersecting) {
                                            let n = t(e.target, e);
                                            "function" == typeof n ? u.set(e.target, n) : i.unobserve(e.target)
                                        } else "function" == typeof n && (n(e), u.delete(e.target))
                                })
                            }, {
                                root: n,
                                rootMargin: r,
                                threshold: "number" == typeof a ? a : c[a]
                            });
                        return l.forEach(e => i.observe(e)), () => i.disconnect()
                    }(e.current, () => (f(!0), u ? void 0 : () => f(!1)), r)
                }, [t, e, n, u, l]), s
            }
        },
        49072: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o.a
            });
            var r = n(26381),
                o = n.n(r),
                c = {};
            for (let e in r) "default" !== e && (c[e] = () => r[e]);
            n.d(t, c)
        },
        51972: (e, t, n) => {
            var r = n(30580),
                o = n(90220);
            e.exports = function(e) {
                return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
            }
        },
        54226: e => {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        },
        58473: (e, t, n) => {
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
            }), n(73723), n(23626), n(30434), n(47543)
        },
        59823: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = n(73723),
                o = n(7787),
                c = n(2308);

            function a(e) {
                return {
                    default: e && "default" in e ? e.default : e
                }
            }
            n(58473);
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
        63197: (e, t, n) => {
            var r = n(66393),
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
        66393: (e, t, n) => {
            e.exports = n(98125).Symbol
        },
        69404: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n(7787),
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
        71740: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorageInstance", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = (0, n(34078).createAsyncLocalStorage)()
        },
        79300: (e, t, n) => {
            var r = n(3557),
                o = function() {
                    var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }();
            e.exports = function(e) {
                return !!o && o in e
            }
        },
        85316: e => {
            e.exports = function(e, t) {
                return null == e ? void 0 : e[t]
            }
        },
        86633: e => {
            e.exports = Array.isArray
        },
        90220: e => {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        95145: e => {
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
        97497: (e, t, n) => {
            e.exports = n(27076)(n(98125), "Map")
        },
        98125: (e, t, n) => {
            var r = n(18996),
                o = "object" == typeof self && self && self.Object === Object && self;
            e.exports = r || o || Function("return this")()
        },
        99939: e => {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        }
    }
]);