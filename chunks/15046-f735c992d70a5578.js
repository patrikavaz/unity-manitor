try {
    let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
        t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "891ed444-a3dc-49ec-80a7-1657dcb9c4d2", e._sentryDebugIdIdentifier = "sentry-dbid-891ed444-a3dc-49ec-80a7-1657dcb9c4d2")
} catch (e) {}(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [15046], {
        85: (e, t, n) => {
            e.exports = n(9593).Symbol
        },
        4137: (e, t, n) => {
            var r = n(85),
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
        8472: e => {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        9593: (e, t, n) => {
            var r = n(39360),
                o = "object" == typeof self && self && self.Object === Object && self;
            e.exports = r || o || Function("return this")()
        },
        19160: (e, t, n) => {
            var r = n(85),
                o = n(4137),
                c = n(31958),
                a = r ? r.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? o(e) : c(e)
            }
        },
        23712: (e, t, n) => {
            var r = n(78361),
                o = function() {
                    var e = /[^.]+$/.exec(r && r.keys && r.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }();
            e.exports = function(e) {
                return !!o && o in e
            }
        },
        24956: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorageInstance", {
                enumerable: !0,
                get: function() {
                    return r
                }
            });
            let r = (0, n(64190).createAsyncLocalStorage)()
        },
        31958: e => {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        },
        33637: e => {
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
        36143: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => c
            });
            var r = n(53163),
                o = n(36309);

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
        36223: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return o
                }
            });
            let r = n(54994)._(n(91511));

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
        36309: (e, t, n) => {
            "use strict";
            n.d(t, {
                l: () => c
            });
            var r = n(74247);
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
        39340: (e, t, n) => {
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
            }), n(34496)
        },
        39360: (e, t, n) => {
            e.exports = "object" == typeof n.g && n.g && n.g.Object === Object && n.g
        },
        41796: (e, t, n) => {
            var r = n(19160),
                o = n(67887);
            e.exports = function(e) {
                if (!o(e)) return !1;
                var t = r(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        },
        42898: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => o.a
            });
            var r = n(36223),
                o = n.n(r)
        },
        55368: (e, t, n) => {
            var r = n(78939),
                o = n(76592);
            e.exports = function(e, t) {
                var n = o(e, t);
                return r(n) ? n : void 0
            }
        },
        64190: (e, t) => {
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
        64234: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "workAsyncStorage", {
                enumerable: !0,
                get: function() {
                    return r.workAsyncStorageInstance
                }
            });
            let r = n(24956)
        },
        67887: e => {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        72280: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => o.a
            });
            var r = n(67269),
                o = n.n(r),
                c = {};
            for (let e in r) "default" !== e && (c[e] = () => r[e]);
            n.d(t, c)
        },
        72357: function(e) {
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
        76592: e => {
            e.exports = function(e, t) {
                return null == e ? void 0 : e[t]
            }
        },
        78361: (e, t, n) => {
            e.exports = n(9593)["__core-js_shared__"]
        },
        78939: (e, t, n) => {
            var r = n(41796),
                o = n(23712),
                c = n(67887),
                a = n(33637),
                l = /^\[object .+?Constructor\]$/,
                u = Object.prototype,
                i = Function.prototype.toString,
                s = u.hasOwnProperty,
                f = RegExp("^" + i.call(s).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!c(e) || o(e)) && (r(e) ? f : l).test(a(e))
            }
        },
        79248: (e, t, n) => {
            var r = n(19160),
                o = n(8472);
            e.exports = function(e) {
                return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
            }
        },
        80441: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n(53163),
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
        87585: (e, t, n) => {
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
            }), n(32475), n(31114), n(64234), n(74399)
        },
        90269: (e, t, n) => {
            e.exports = n(55368)(n(9593), "Map")
        },
        91511: (e, t, n) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let r = n(32475),
                o = n(53163),
                c = n(39340);

            function a(e) {
                return {
                    default: e && "default" in e ? e.default : e
                }
            }
            n(87585);
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
        97557: e => {
            e.exports = Array.isArray
        }
    }
]);