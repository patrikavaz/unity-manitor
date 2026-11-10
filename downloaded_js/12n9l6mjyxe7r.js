;
! function() {
    try {
        var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof global ? global : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && ((e._debugIds || (e._debugIds = {}))[n] = "4f05cb9a-e721-d6ed-b09a-a2c1d7b35751")
    } catch (e) {}
}();
(() => {
    "use strict";
    (globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 223585, e => {
        var t = e.i(627055),
            r = e.i(516830),
            n = e.i(81052),
            i = r["use".trim()],
            o = e.i(353508);

        function s(e) {
            let t;
            return ("object" == typeof e ? null == e.host && null == e.hostname : !/^[a-z]+:/i.test(e)) && (null == (t = "object" == typeof e ? e.pathname : e) || !!t.startsWith("/"))
        }

        function h(e, t) {
            return e.replace(RegExp(`^${t}`), "") || "/"
        }

        function a(e, t) {
            return t === e || t.startsWith(`${e}/`)
        }

        function l(e, t, r) {
            return "string" == typeof e ? e : e[t] || r
        }

        function u(e) {
            let t = function() {
                    try {
                        return "true" === o.default.env._next_intl_trailing_slash
                    } catch {
                        return !1
                    }
                }(),
                [r, ...n] = e.split("#"),
                i = n.join("#"),
                s = r;
            if ("/" !== s) {
                let e = s.endsWith("/");
                t && !e ? s += "/" : !t && e && (s = s.slice(0, -1))
            }
            return i && (s += "#" + i), s
        }

        function c(e, t) {
            let r, n = u(e),
                i = u(t);
            return (r = n.replace(/\/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?").replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "(?:/(.*))?").replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)").replace(/\[([^\]]+)\]/g, "([^/]+)"), RegExp(`^${r}$`)).test(i)
        }

        function f(e, t) {
            return "never" !== t.mode && t.prefixes?.[e] || "/" + e
        }

        function p(e) {
            return e.includes("[[...")
        }

        function m(e) {
            return e.includes("[...")
        }

        function g(e) {
            return e.includes("[")
        }

        function b(e, t) {
            let r = e.split("/"),
                n = t.split("/"),
                i = Math.max(r.length, n.length);
            for (let e = 0; e < i; e++) {
                let t = r[e],
                    i = n[e];
                if (!t && i) return -1;
                if (t && !i) return 1;
                if (t || i) {
                    if (!g(t) && g(i)) return -1;
                    if (g(t) && !g(i)) return 1;
                    if (!m(t) && m(i)) return -1;
                    if (m(t) && !m(i)) return 1;
                    if (!p(t) && p(i)) return -1;
                    if (p(t) && !p(i)) return 1
                }
            }
            return 0
        }
        var d = e.i(491902);

        function E(e) {
            let t = new URLSearchParams;
            for (let [r, n] of Object.entries(e)) Array.isArray(n) ? n.forEach(e => {
                t.append(r, String(e))
            }) : t.set(r, String(n));
            return "?" + t.toString()
        }

        function y(e, t, r, n) {
            if (!e || n === r || null == n || !t) return;
            let i = function(e, t = window.location.pathname) {
                    return "/" === e ? t : t.replace(e, "")
                }(t),
                {
                    name: o,
                    ...s
                } = e;
            s.path || (s.path = "" !== i ? i : "/");
            let h = `${o}=${n};`;
            for (let [e, t] of Object.entries(s)) h += `${"maxAge"===e?"max-age":e}`, "boolean" != typeof t && (h += "=" + t), h += ";";
            document.cookie = h
        }
        var H = e.i(230452),
            B = (0, r.forwardRef)(function({
                href: e,
                locale: r,
                localeCookie: i,
                onClick: o,
                prefetch: s,
                ...h
            }, a) {
                let l = (0, n.X)(),
                    u = null != r && r !== l,
                    c = (0, t.usePathname)();
                return u && (s = !1), (0, H.jsx)(d.default, {
                    ref: a,
                    href: e,
                    hrefLang: u ? r : void 0,
                    onClick: function(e) {
                        y(i, c, l, r), o && o(e)
                    },
                    prefetch: s,
                    ...h
                })
            });
        e.s(["f", 0, function(e) {
            let {
                Link: o,
                config: p,
                getPathname: m,
                ...g
            } = function(e, n) {
                var o, h, a;
                let c = {
                        ...o = n || {},
                        localePrefix: "object" == typeof(a = o.localePrefix) ? a : {
                            mode: a || "always"
                        },
                        localeCookie: !!((h = o.localeCookie) ?? 1) && {
                            name: "NEXT_LOCALE",
                            sameSite: "lax",
                            ..."object" == typeof h && h
                        },
                        localeDetection: o.localeDetection ?? !0,
                        alternateLinks: o.alternateLinks ?? !0
                    },
                    p = c.pathnames,
                    m = (0, r.forwardRef)(function({
                        href: t,
                        locale: r,
                        ...n
                    }, o) {
                        let h, a;
                        "object" == typeof t ? (h = t.pathname, a = t.params) : h = t;
                        let l = s(t),
                            u = e(),
                            f = "function" == typeof u.then ? i(u) : u,
                            m = l ? g({
                                locale: r || f,
                                href: null == p ? h : {
                                    pathname: h,
                                    params: a
                                },
                                forcePrefix: null != r || void 0
                            }) : h;
                        return (0, H.jsx)(B, {
                            ref: o,
                            href: "object" == typeof t ? {
                                ...t,
                                pathname: m
                            } : m,
                            locale: r,
                            localeCookie: c.localeCookie,
                            ...n
                        })
                    });

                function g(e) {
                    let t, {
                        forcePrefix: r,
                        href: n,
                        locale: i
                    } = e;
                    return null == p ? "object" == typeof n ? (t = n.pathname, n.query && (t += E(n.query))) : t = n : t = function({
                            pathname: e,
                            locale: t,
                            params: r,
                            pathnames: n,
                            query: i
                        }) {
                            function o(e) {
                                let o, s = n[e];
                                return s ? (o = l(s, t, e), r && Object.entries(r).forEach(([e, t]) => {
                                    let r, n;
                                    Array.isArray(t) ? (r = `(\\[)?\\[...${e}\\](\\])?`, n = t.map(e => String(e)).join("/")) : (r = `\\[${e}\\]`, n = String(t)), o = o.replace(RegExp(r, "g"), n)
                                }), o = new URL(o = o.replace(/\[\[\.\.\..+\]\]/g, ""), "http://l").pathname) : o = e, o = u(o), i && (o += E(i)), o
                            }
                            if ("string" == typeof e) return o(e);
                            {
                                let {
                                    pathname: t,
                                    ...r
                                } = e;
                                return {
                                    ...r,
                                    pathname: o(t)
                                }
                            }
                        }({
                            locale: i,
                            ..."string" == typeof n ? {
                                pathname: n
                            } : n,
                            pathnames: c.pathnames
                        }),
                        function(e, t, r, n) {
                            var i, o;
                            let h, a, {
                                mode: l
                            } = r.localePrefix;
                            if (void 0 !== n) h = n;
                            else if (s(e)) {
                                let e = r.domains?.find(e => e.locales.includes(t)),
                                    n = e?.localePrefix || l;
                                "always" === n ? h = !0 : "as-needed" === n && (h = e ? t !== e.defaultLocale : t !== r.defaultLocale)
                            }
                            return h ? (i = f(t, r.localePrefix), o = e, a = i, /^\/(\?.*)?$/.test(o) && (o = o.slice(1)), a += o) : e
                        }(t, i, c, r)
                }

                function b(e) {
                    return function(t, ...r) {
                        return e(g(t), ...r)
                    }
                }
                return {
                    config: c,
                    Link: m,
                    redirect: b(t.redirect),
                    permanentRedirect: b(t.permanentRedirect),
                    getPathname: g
                }
            }(n.X, e);
            return {
                ...g,
                Link: o,
                usePathname: function() {
                    let e, i, o = (e = (0, t.usePathname)(), i = (0, n.X)(), (0, r.useMemo)(() => {
                            if (!e) return e;
                            let t = e,
                                r = f(i, p.localePrefix);
                            if (a(r, e)) t = h(e, r);
                            else if ("never" !== p.localePrefix.mode && p.localePrefix.prefixes) {
                                let r = "/" + i;
                                a(r, e) && (t = h(e, r))
                            }
                            return t
                        }, [p.localePrefix, i, e])),
                        s = (0, n.X)();
                    return (0, r.useMemo)(() => o && p.pathnames ? function(e, t, r) {
                        let n = Object.keys(r).sort(b),
                            i = decodeURI(t);
                        for (let t of n) {
                            let n = r[t];
                            if ("string" == typeof n) {
                                if (c(n, i)) return t
                            } else if (c(l(n, e, t), i)) return t
                        }
                        return t
                    }(s, o, p.pathnames) : o, [s, o])
                },
                useRouter: function() {
                    let e = (0, t.useRouter)(),
                        i = (0, n.X)(),
                        o = (0, t.usePathname)();
                    return (0, r.useMemo)(() => {
                        function t(e) {
                            return function(t, r) {
                                let {
                                    locale: n,
                                    ...s
                                } = r || {}, h = [m({
                                    href: t,
                                    locale: n || i,
                                    forcePrefix: null != n || void 0
                                })];
                                Object.keys(s).length > 0 && h.push(s), y(p.localeCookie, o, i, n), e(...h)
                            }
                        }
                        return {
                            ...e,
                            push: t(e.push),
                            replace: t(e.replace),
                            prefetch: t(e.prefetch)
                        }
                    }, [i, o, e])
                },
                getPathname: m
            }
        }], 223585)
    }, 491902, (e, t, r) => {
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = {
            default: function() {
                return d
            },
            useLinkStatus: function() {
                return y
            }
        };
        for (var i in n) Object.defineProperty(r, i, {
            enumerable: !0,
            get: n[i]
        });
        let o = e.r(56421),
            s = e.r(230452),
            h = o._(e.r(516830)),
            a = e.r(108694),
            l = e.r(608205),
            u = e.r(300828),
            c = e.r(251359),
            f = e.r(478489),
            p = e.r(587094),
            m = e.r(196365),
            g = e.r(301243),
            b = e.r(407667);

        function d(t) {
            var r;
            let n, i, o, [d, y] = (0, h.useOptimistic)(m.IDLE_LINK_STATUS),
                H = (0, h.useRef)(null),
                {
                    href: B,
                    as: T,
                    children: P,
                    prefetch: S = null,
                    passHref: A,
                    replace: I,
                    shallow: _,
                    scroll: L,
                    onClick: N,
                    onMouseEnter: v,
                    onTouchStart: R,
                    legacyBehavior: C = !1,
                    onNavigate: M,
                    transitionTypes: O,
                    ref: w,
                    unstable_dynamicOnHover: U,
                    ...D
                } = t;
            n = P, C && ("string" == typeof n || "number" == typeof n) && (n = (0, s.jsx)("a", {
                children: n
            }));
            let F = h.default.useContext(l.AppRouterContext),
                k = !1 !== S,
                G = !1 === S ? "none" : !0 === S ? "full" : "auto",
                x = "none" !== G ? "auto" === G ? b.FetchStrategy.PPR : b.FetchStrategy.Full : b.FetchStrategy.PPR,
                j = "string" == typeof(r = T || B) ? r : (0, a.formatUrl)(r);
            if (C) {
                if (n?.$$typeof === Symbol.for("react.lazy")) throw Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag.");
                i = h.default.Children.only(n)
            }
            let $ = C ? i && "object" == typeof i && i.ref : w,
                K, V = h.default.useCallback(e => (null !== F && (H.current = (0, m.mountLinkInstance)(e, j, F, x, k, y, K)), () => {
                    H.current && ((0, m.unmountLinkForCurrentNavigation)(H.current), H.current = null), (0, m.unmountPrefetchableInstance)(e)
                }), [k, j, F, x, y, K]),
                X = {
                    ref: (0, u.useMergedRef)(V, $),
                    onClick(t) {
                        C || "function" != typeof N || N(t), C && i.props && "function" == typeof i.props.onClick && i.props.onClick(t), !F || t.defaultPrevented || function(t, r, n, i, o, s, h, a = "none") {
                            if ("u" > typeof window) {
                                let l, {
                                    nodeName: u
                                } = t.currentTarget;
                                if ("A" === u.toUpperCase() && ((l = t.currentTarget.getAttribute("target")) && "_self" !== l || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                                if (!(0, g.isLocalURL)(r)) {
                                    i && (t.preventDefault(), location.replace(r));
                                    return
                                }
                                if (t.preventDefault(), s) {
                                    let e = !1;
                                    if (s({
                                            preventDefault: () => {
                                                e = !0
                                            }
                                        }), e) return
                                }
                                let {
                                    navigate: c
                                } = e.r(603457);
                                c(r, i ? "replace" : "push", !1 === o ? p.ScrollBehavior.NoScroll : p.ScrollBehavior.Default, n.current, h, a)
                            }
                        }(t, j, H, I, L, M, O, G)
                    },
                    onMouseEnter(e) {
                        C || "function" != typeof v || v(e), C && i.props && "function" == typeof i.props.onMouseEnter && i.props.onMouseEnter(e), F && k && (0, m.onNavigationIntent)(e.currentTarget, !0 === U)
                    },
                    onTouchStart: function(e) {
                        C || "function" != typeof R || R(e), C && i.props && "function" == typeof i.props.onTouchStart && i.props.onTouchStart(e), F && k && (0, m.onNavigationIntent)(e.currentTarget, !0 === U)
                    }
                };
            return (0, c.isAbsoluteUrl)(j) ? X.href = j : C && !A && ("a" !== i.type || "href" in i.props) || (X.href = (0, f.addBasePath)(j)), o = C ? h.default.cloneElement(i, X) : (0, s.jsx)("a", {
                ...D,
                ...X,
                children: n
            }), (0, s.jsx)(E.Provider, {
                value: d,
                children: o
            })
        }
        let E = (0, h.createContext)(m.IDLE_LINK_STATUS),
            y = () => (0, h.useContext)(E);
        ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
            value: !0
        }), Object.assign(r.default, r), t.exports = r.default)
    }, 108694, (e, t, r) => {
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = {
            formatUrl: function() {
                return h
            },
            formatWithValidation: function() {
                return l
            },
            urlObjectKeys: function() {
                return a
            }
        };
        for (var i in n) Object.defineProperty(r, i, {
            enumerable: !0,
            get: n[i]
        });
        let o = e.r(56421)._(e.r(8582)),
            s = /https?|ftp|gopher|file/;

        function h(e) {
            let {
                auth: t,
                hostname: r
            } = e, n = e.protocol || "", i = e.pathname || "", h = e.hash || "", a = e.query || "", l = !1;
            t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? l = t + e.host : r && (l = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (l += ":" + e.port)), a && "object" == typeof a && (a = String(o.urlQueryToSearchParams(a)));
            let u = e.search || a && `?${a}` || "";
            return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || s.test(n)) && !1 !== l ? (l = "//" + (l || ""), i && "/" !== i[0] && (i = "/" + i)) : l || (l = ""), h && "#" !== h[0] && (h = "#" + h), u && "?" !== u[0] && (u = "?" + u), i = i.replace(/[?#]/g, encodeURIComponent), u = u.replace("#", "%23"), `${n}${l}${i}${u}${h}`
        }
        let a = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

        function l(e) {
            return h(e)
        }
    }, 301243, (e, t, r) => {
        Object.defineProperty(r, "__esModule", {
            value: !0
        }), Object.defineProperty(r, "isLocalURL", {
            enumerable: !0,
            get: function() {
                return o
            }
        });
        let n = e.r(251359),
            i = e.r(392109);

        function o(e) {
            if (!(0, n.isAbsoluteUrl)(e)) return !0;
            try {
                let t = (0, n.getLocationOrigin)(),
                    r = new URL(e, t);
                return r.origin === t && (0, i.hasBasePath)(r.pathname)
            } catch (e) {
                return !1
            }
        }
    }, 251359, (e, t, r) => {
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var n = {
            DecodeError: function() {
                return d
            },
            MiddlewareNotFoundError: function() {
                return B
            },
            MissingStaticPage: function() {
                return H
            },
            NormalizeError: function() {
                return E
            },
            PageNotFoundError: function() {
                return y
            },
            SP: function() {
                return g
            },
            ST: function() {
                return b
            },
            WEB_VITALS: function() {
                return o
            },
            execOnce: function() {
                return s
            },
            getDisplayName: function() {
                return c
            },
            getLocationOrigin: function() {
                return l
            },
            getURL: function() {
                return u
            },
            isAbsoluteUrl: function() {
                return a
            },
            isResSent: function() {
                return f
            },
            loadGetInitialProps: function() {
                return m
            },
            normalizeRepeatedSlashes: function() {
                return p
            },
            stringifyError: function() {
                return T
            }
        };
        for (var i in n) Object.defineProperty(r, i, {
            enumerable: !0,
            get: n[i]
        });
        let o = ["CLS", "FCP", "INP", "LCP", "TTFB"];

        function s(e) {
            let t, r = !1;
            return (...n) => (r || (r = !0, t = e(...n)), t)
        }
        let h = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
            a = e => {
                let t = e.charCodeAt(0);
                return !!(t >= 65 && t <= 90 || t >= 97 && t <= 122) && h.test(e)
            };

        function l() {
            let {
                protocol: e,
                hostname: t,
                port: r
            } = window.location;
            return `${e}//${t}${r?":"+r:""}`
        }

        function u() {
            let {
                href: e
            } = window.location, t = l();
            return e.substring(t.length)
        }

        function c(e) {
            return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
        }

        function f(e) {
            return e.finished || e.headersSent
        }

        function p(e) {
            let t = e.split("?");
            return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
        }
        async function m(e, t) {
            let r = t.res || t.ctx && t.ctx.res;
            if (!e.getInitialProps) return t.ctx && t.Component ? {
                pageProps: await m(t.Component, t.ctx)
            } : {};
            let n = await e.getInitialProps(t);
            if (r && f(r)) return n;
            if (!n) throw Error(`"${c(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`);
            return n
        }
        let g = "u" > typeof performance,
            b = g && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
        class d extends Error {}
        class E extends Error {}
        class y extends Error {
            constructor(e) {
                super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
            }
        }
        class H extends Error {
            constructor(e, t) {
                super(), this.message = `Failed to load static file for page: ${e} ${t}`
            }
        }
        class B extends Error {
            constructor() {
                super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
            }
        }

        function T(e) {
            return JSON.stringify({
                message: e.message,
                stack: e.stack
            })
        }
    }, 81052, e => {
        var t, r, n = e.i(516830);

        function i(e, t) {
            let r = t && t.cache ? t.cache : l,
                n = t && t.serializer ? t.serializer : h;
            return (t && t.strategy ? t.strategy : function(e, t) {
                var r, n;
                let i = 1 === e.length ? o : s;
                return r = t.cache.create(), n = t.serializer, i.bind(this, e, r, n)
            })(e, {
                cache: r,
                serializer: n
            })
        }

        function o(e, t, r, n) {
            let i = null == n || "number" == typeof n || "boolean" == typeof n ? n : r(n),
                o = t.get(i);
            return void 0 === o && (o = e.call(this, n), t.set(i, o)), o
        }

        function s(e, t, r) {
            let n = Array.prototype.slice.call(arguments, 3),
                i = r(n),
                o = t.get(i);
            return void 0 === o && (o = e.apply(this, n), t.set(i, o)), o
        }
        let h = function() {
            return JSON.stringify(arguments)
        };
        var a = class {
            constructor() {
                this.cache = Object.create(null)
            }
            get(e) {
                return this.cache[e]
            }
            set(e, t) {
                this.cache[e] = t
            }
        };
        let l = {
                create: function() {
                    return new a
                }
            },
            u = {
                variadic: function(e, t) {
                    var r, n;
                    return r = t.cache.create(), n = t.serializer, s.bind(this, e, r, n)
                },
                monadic: function(e, t) {
                    var r, n;
                    return r = t.cache.create(), n = t.serializer, o.bind(this, e, r, n)
                }
            };
        var c = ((t = c || {}).MISSING_MESSAGE = "MISSING_MESSAGE", t.MISSING_FORMAT = "MISSING_FORMAT", t.ENVIRONMENT_FALLBACK = "ENVIRONMENT_FALLBACK", t.INSUFFICIENT_PATH = "INSUFFICIENT_PATH", t.INVALID_MESSAGE = "INVALID_MESSAGE", t.INVALID_KEY = "INVALID_KEY", t.FORMATTING_ERROR = "FORMATTING_ERROR", t);

        function f(e, t) {
            var r, n;
            return r = (...t) => new e(...t), n = t, i(r, {
                cache: {
                    create: () => ({
                        get: e => n[e],
                        set(e, t) {
                            n[e] = t
                        }
                    })
                },
                strategy: u.variadic
            })
        }
        let p = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g,
            m = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i,
            g = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
            b = /^(@+)?(\+|#+)?[rs]?$/g,
            d = /(\*)(0+)|(#+)(0+)|(0+)/g,
            E = /^(0+)$/;

        function y(e) {
            let t = {};
            return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(b, function(e, r, n) {
                return "string" != typeof n ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === n ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof n ? n.length : 0)), ""
            }), t
        }

        function H(e) {
            switch (e) {
                case "sign-auto":
                    return {
                        signDisplay: "auto"
                    };
                case "sign-accounting":
                case "()":
                    return {
                        currencySign: "accounting"
                    };
                case "sign-always":
                case "+!":
                    return {
                        signDisplay: "always"
                    };
                case "sign-accounting-always":
                case "()!":
                    return {
                        signDisplay: "always", currencySign: "accounting"
                    };
                case "sign-except-zero":
                case "+?":
                    return {
                        signDisplay: "exceptZero"
                    };
                case "sign-accounting-except-zero":
                case "()?":
                    return {
                        signDisplay: "exceptZero", currencySign: "accounting"
                    };
                case "sign-never":
                case "+_":
                    return {
                        signDisplay: "never"
                    }
            }
        }

        function B(e) {
            let t = H(e);
            return t || {}
        }
        let T = ((r = {})[r.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", r[r.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", r[r.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", r[r.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", r[r.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", r[r.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", r[r.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", r[r.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", r[r.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", r[r.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", r[r.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", r[r.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", r[r.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", r[r.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", r[r.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", r[r.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", r[r.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", r[r.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", r[r.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", r[r.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", r[r.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", r[r.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", r[r.INVALID_TAG = 23] = "INVALID_TAG", r[r.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", r[r.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", r[r.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", r);

        function P(e) {
            return !!(e && "object" == typeof e && 0 === e.type)
        }

        function S(e) {
            return !!(e && "object" == typeof e && 1 === e.type)
        }
        let A = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
            I = {
                "001": ["H", "h"],
                419: ["h", "H", "hB", "hb"],
                AC: ["H", "h", "hb", "hB"],
                AD: ["H", "hB"],
                AE: ["h", "hB", "hb", "H"],
                AF: ["H", "hb", "hB", "h"],
                AG: ["h", "hb", "H", "hB"],
                AI: ["H", "h", "hb", "hB"],
                AL: ["h", "H", "hB"],
                AM: ["H", "hB"],
                AO: ["H", "hB"],
                AR: ["h", "H", "hB", "hb"],
                AS: ["h", "H"],
                AT: ["H", "hB"],
                AU: ["h", "hb", "H", "hB"],
                AW: ["H", "hB"],
                AX: ["H"],
                AZ: ["H", "hB", "h"],
                BA: ["H", "hB", "h"],
                BB: ["h", "hb", "H", "hB"],
                BD: ["h", "hB", "H"],
                BE: ["H", "hB"],
                BF: ["H", "hB"],
                BG: ["H", "hB", "h"],
                BH: ["h", "hB", "hb", "H"],
                BI: ["H", "h"],
                BJ: ["H", "hB"],
                BL: ["H", "hB"],
                BM: ["h", "hb", "H", "hB"],
                BN: ["hb", "hB", "h", "H"],
                BO: ["h", "H", "hB", "hb"],
                BQ: ["H"],
                BR: ["H", "hB"],
                BS: ["h", "hb", "H", "hB"],
                BT: ["h", "H"],
                BW: ["H", "h", "hb", "hB"],
                BY: ["H", "h"],
                BZ: ["H", "h", "hb", "hB"],
                CA: ["h", "hb", "H", "hB"],
                CC: ["H", "h", "hb", "hB"],
                CD: ["hB", "H"],
                CF: ["H", "h", "hB"],
                CG: ["H", "hB"],
                CH: ["H", "hB", "h"],
                CI: ["H", "hB"],
                CK: ["H", "h", "hb", "hB"],
                CL: ["h", "H", "hB", "hb"],
                CM: ["H", "h", "hB"],
                CN: ["H", "hB", "hb", "h"],
                CO: ["h", "H", "hB", "hb"],
                CP: ["H"],
                CR: ["h", "H", "hB", "hb"],
                CU: ["h", "H", "hB", "hb"],
                CV: ["H", "hB"],
                CW: ["H", "hB"],
                CX: ["H", "h", "hb", "hB"],
                CY: ["h", "H", "hb", "hB"],
                CZ: ["H"],
                DE: ["H", "hB"],
                DG: ["H", "h", "hb", "hB"],
                DJ: ["h", "H"],
                DK: ["H"],
                DM: ["h", "hb", "H", "hB"],
                DO: ["h", "H", "hB", "hb"],
                DZ: ["h", "hB", "hb", "H"],
                EA: ["H", "h", "hB", "hb"],
                EC: ["h", "H", "hB", "hb"],
                EE: ["H", "hB"],
                EG: ["h", "hB", "hb", "H"],
                EH: ["h", "hB", "hb", "H"],
                ER: ["h", "H"],
                ES: ["H", "hB", "h", "hb"],
                ET: ["hB", "hb", "h", "H"],
                FI: ["H"],
                FJ: ["h", "hb", "H", "hB"],
                FK: ["H", "h", "hb", "hB"],
                FM: ["h", "hb", "H", "hB"],
                FO: ["H", "h"],
                FR: ["H", "hB"],
                GA: ["H", "hB"],
                GB: ["H", "h", "hb", "hB"],
                GD: ["h", "hb", "H", "hB"],
                GE: ["H", "hB", "h"],
                GF: ["H", "hB"],
                GG: ["H", "h", "hb", "hB"],
                GH: ["h", "H"],
                GI: ["H", "h", "hb", "hB"],
                GL: ["H", "h"],
                GM: ["h", "hb", "H", "hB"],
                GN: ["H", "hB"],
                GP: ["H", "hB"],
                GQ: ["H", "hB", "h", "hb"],
                GR: ["h", "H", "hb", "hB"],
                GS: ["H", "h", "hb", "hB"],
                GT: ["h", "H", "hB", "hb"],
                GU: ["h", "hb", "H", "hB"],
                GW: ["H", "hB"],
                GY: ["h", "hb", "H", "hB"],
                HK: ["h", "hB", "hb", "H"],
                HN: ["h", "H", "hB", "hb"],
                HR: ["H", "hB"],
                HU: ["H", "h"],
                IC: ["H", "h", "hB", "hb"],
                ID: ["H"],
                IE: ["H", "h", "hb", "hB"],
                IL: ["H", "hB"],
                IM: ["H", "h", "hb", "hB"],
                IN: ["h", "H"],
                IO: ["H", "h", "hb", "hB"],
                IQ: ["h", "hB", "hb", "H"],
                IR: ["hB", "H"],
                IS: ["H"],
                IT: ["H", "hB"],
                JE: ["H", "h", "hb", "hB"],
                JM: ["h", "hb", "H", "hB"],
                JO: ["h", "hB", "hb", "H"],
                JP: ["H", "K", "h"],
                KE: ["hB", "hb", "H", "h"],
                KG: ["H", "h", "hB", "hb"],
                KH: ["hB", "h", "H", "hb"],
                KI: ["h", "hb", "H", "hB"],
                KM: ["H", "h", "hB", "hb"],
                KN: ["h", "hb", "H", "hB"],
                KP: ["h", "H", "hB", "hb"],
                KR: ["h", "H", "hB", "hb"],
                KW: ["h", "hB", "hb", "H"],
                KY: ["h", "hb", "H", "hB"],
                KZ: ["H", "hB"],
                LA: ["H", "hb", "hB", "h"],
                LB: ["h", "hB", "hb", "H"],
                LC: ["h", "hb", "H", "hB"],
                LI: ["H", "hB", "h"],
                LK: ["H", "h", "hB", "hb"],
                LR: ["h", "hb", "H", "hB"],
                LS: ["h", "H"],
                LT: ["H", "h", "hb", "hB"],
                LU: ["H", "h", "hB"],
                LV: ["H", "hB", "hb", "h"],
                LY: ["h", "hB", "hb", "H"],
                MA: ["H", "h", "hB", "hb"],
                MC: ["H", "hB"],
                MD: ["H", "hB"],
                ME: ["H", "hB", "h"],
                MF: ["H", "hB"],
                MG: ["H", "h"],
                MH: ["h", "hb", "H", "hB"],
                MK: ["H", "h", "hb", "hB"],
                ML: ["H"],
                MM: ["hB", "hb", "H", "h"],
                MN: ["H", "h", "hb", "hB"],
                MO: ["h", "hB", "hb", "H"],
                MP: ["h", "hb", "H", "hB"],
                MQ: ["H", "hB"],
                MR: ["h", "hB", "hb", "H"],
                MS: ["H", "h", "hb", "hB"],
                MT: ["H", "h"],
                MU: ["H", "h"],
                MV: ["H", "h"],
                MW: ["h", "hb", "H", "hB"],
                MX: ["h", "H", "hB", "hb"],
                MY: ["hb", "hB", "h", "H"],
                MZ: ["H", "hB"],
                NA: ["h", "H", "hB", "hb"],
                NC: ["H", "hB"],
                NE: ["H"],
                NF: ["H", "h", "hb", "hB"],
                NG: ["H", "h", "hb", "hB"],
                NI: ["h", "H", "hB", "hb"],
                NL: ["H", "hB"],
                NO: ["H", "h"],
                NP: ["H", "h", "hB"],
                NR: ["H", "h", "hb", "hB"],
                NU: ["H", "h", "hb", "hB"],
                NZ: ["h", "hb", "H", "hB"],
                OM: ["h", "hB", "hb", "H"],
                PA: ["h", "H", "hB", "hb"],
                PE: ["h", "H", "hB", "hb"],
                PF: ["H", "h", "hB"],
                PG: ["h", "H"],
                PH: ["h", "hB", "hb", "H"],
                PK: ["h", "hB", "H"],
                PL: ["H", "h"],
                PM: ["H", "hB"],
                PN: ["H", "h", "hb", "hB"],
                PR: ["h", "H", "hB", "hb"],
                PS: ["h", "hB", "hb", "H"],
                PT: ["H", "hB"],
                PW: ["h", "H"],
                PY: ["h", "H", "hB", "hb"],
                QA: ["h", "hB", "hb", "H"],
                RE: ["H", "hB"],
                RO: ["H", "hB"],
                RS: ["H", "hB", "h"],
                RU: ["H"],
                RW: ["H", "h"],
                SA: ["h", "hB", "hb", "H"],
                SB: ["h", "hb", "H", "hB"],
                SC: ["H", "h", "hB"],
                SD: ["h", "hB", "hb", "H"],
                SE: ["H"],
                SG: ["h", "hb", "H", "hB"],
                SH: ["H", "h", "hb", "hB"],
                SI: ["H", "hB"],
                SJ: ["H"],
                SK: ["H"],
                SL: ["h", "hb", "H", "hB"],
                SM: ["H", "h", "hB"],
                SN: ["H", "h", "hB"],
                SO: ["h", "H"],
                SR: ["H", "hB"],
                SS: ["h", "hb", "H", "hB"],
                ST: ["H", "hB"],
                SV: ["h", "H", "hB", "hb"],
                SX: ["H", "h", "hb", "hB"],
                SY: ["h", "hB", "hb", "H"],
                SZ: ["h", "hb", "H", "hB"],
                TA: ["H", "h", "hb", "hB"],
                TC: ["h", "hb", "H", "hB"],
                TD: ["h", "H", "hB"],
                TF: ["H", "h", "hB"],
                TG: ["H", "hB"],
                TH: ["H", "h"],
                TJ: ["H", "h"],
                TL: ["H", "hB", "hb", "h"],
                TM: ["H", "h"],
                TN: ["h", "hB", "hb", "H"],
                TO: ["h", "H"],
                TR: ["H", "hB"],
                TT: ["h", "hb", "H", "hB"],
                TW: ["hB", "hb", "h", "H"],
                TZ: ["hB", "hb", "H", "h"],
                UA: ["H", "hB", "h"],
                UG: ["hB", "hb", "H", "h"],
                UM: ["h", "hb", "H", "hB"],
                US: ["h", "hb", "H", "hB"],
                UY: ["h", "H", "hB", "hb"],
                UZ: ["H", "hB", "h"],
                VA: ["H", "h", "hB"],
                VC: ["h", "hb", "H", "hB"],
                VE: ["h", "H", "hB", "hb"],
                VG: ["h", "hb", "H", "hB"],
                VI: ["h", "hb", "H", "hB"],
                VN: ["H", "h"],
                VU: ["h", "H"],
                WF: ["H", "hB"],
                WS: ["h", "H"],
                XK: ["H", "hB", "h"],
                YE: ["h", "hB", "hb", "H"],
                YT: ["H", "hB"],
                ZA: ["H", "h", "hb", "hB"],
                ZM: ["h", "hb", "H", "hB"],
                ZW: ["H", "h"],
                "af-ZA": ["H", "h", "hB", "hb"],
                "ar-001": ["h", "hB", "hb", "H"],
                "ca-ES": ["H", "h", "hB"],
                "en-001": ["h", "hb", "H", "hB"],
                "en-HK": ["h", "hb", "H", "hB"],
                "en-IL": ["H", "h", "hb", "hB"],
                "en-MY": ["h", "hb", "H", "hB"],
                "es-BR": ["H", "h", "hB", "hb"],
                "es-ES": ["H", "h", "hB", "hb"],
                "es-GQ": ["H", "h", "hB", "hb"],
                "fr-CA": ["H", "h", "hB"],
                "gl-ES": ["H", "h", "hB"],
                "gu-IN": ["hB", "hb", "h", "H"],
                "hi-IN": ["hB", "h", "H"],
                "it-CH": ["H", "h", "hB"],
                "it-IT": ["H", "h", "hB"],
                "kn-IN": ["hB", "h", "H"],
                "ku-SY": ["H", "hB"],
                "ml-IN": ["hB", "h", "H"],
                "mr-IN": ["hB", "hb", "h", "H"],
                "pa-IN": ["hB", "hb", "h", "H"],
                "ta-IN": ["hB", "h", "hb", "H"],
                "te-IN": ["hB", "h", "H"],
                "zu-ZA": ["H", "hB", "hb", "h"]
            },
            _ = RegExp(`^${A.source}*`),
            L = RegExp(`${A.source}*$`);

        function N(e, t) {
            return {
                start: e,
                end: t
            }
        }
        let v = !!Object.fromEntries,
            R = !!String.prototype.trimStart,
            C = !!String.prototype.trimEnd,
            M = v ? Object.fromEntries : function(e) {
                let t = {};
                for (let [r, n] of e) t[r] = n;
                return t
            },
            O = R ? function(e) {
                return e.trimStart()
            } : function(e) {
                return e.replace(_, "")
            },
            w = C ? function(e) {
                return e.trimEnd()
            } : function(e) {
                return e.replace(L, "")
            },
            U = RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        var D = class {
            constructor(e, t = {}) {
                this.message = e, this.position = {
                    offset: 0,
                    line: 1,
                    column: 1
                }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
            }
            parse() {
                if (0 !== this.offset()) throw Error("parser can only be used once");
                if (this.message.length > 0) {
                    let e = this.message.charCodeAt(0);
                    if (35 !== e && 39 !== e && 60 !== e && 123 !== e && 125 !== e) {
                        let e = function(e) {
                            if (0 === e.length) return null;
                            let t = 1,
                                r = 1;
                            for (let n = 0; n < e.length;) {
                                let i = e.charCodeAt(n);
                                switch (i) {
                                    case 35:
                                    case 39:
                                    case 60:
                                    case 123:
                                    case 125:
                                        return null
                                }
                                if (10 === i) t++, r = 1, n++;
                                else if (r++, i >= 55296 && i <= 56319 && n + 1 < e.length) {
                                    let t = e.charCodeAt(n + 1);
                                    n += t >= 56320 && t <= 57343 ? 2 : 1
                                } else n++
                            }
                            return {
                                offset: e.length,
                                line: t,
                                column: r
                            }
                        }(this.message);
                        if (e) {
                            let t = this.clonePosition();
                            return this.position = e, {
                                val: [{
                                    type: 0,
                                    value: this.message,
                                    location: N(t, this.clonePosition())
                                }],
                                err: null
                            }
                        }
                    }
                }
                return this.parseMessage(0, "", !1)
            }
            parseMessage(e, t, r) {
                let n = [];
                for (; !this.isEOF();) {
                    let i = this.char();
                    if (123 === i) {
                        let t = this.parseArgument(e, r);
                        if (t.err) return t;
                        n.push(t.val)
                    } else if (125 === i && e > 0) break;
                    else if (35 === i && ("plural" === t || "selectordinal" === t)) {
                        let e = this.clonePosition();
                        this.bump(), n.push({
                            type: 7,
                            location: N(e, this.clonePosition())
                        })
                    } else if (60 !== i || this.ignoreTag || 47 !== this.peek())
                        if (60 === i && !this.ignoreTag && F(this.peek() || 0)) {
                            let r = this.parseTag(e, t);
                            if (r.err) return r;
                            n.push(r.val)
                        } else {
                            let r = this.parseLiteral(e, t);
                            if (r.err) return r;
                            n.push(r.val)
                        }
                    else if (!r) return this.error(26, N(this.clonePosition(), this.clonePosition()));
                    else break
                }
                return {
                    val: n,
                    err: null
                }
            }
            parseTag(e, t) {
                let r = this.clonePosition();
                this.bump();
                let n = this.parseTagName();
                if (this.bumpSpace(), this.bumpIf("/>")) return {
                    val: {
                        type: 0,
                        value: `<${n}/>`,
                        location: N(r, this.clonePosition())
                    },
                    err: null
                };
                if (!this.bumpIf(">")) return this.error(23, N(r, this.clonePosition()));
                {
                    let i = this.parseMessage(e + 1, t, !0);
                    if (i.err) return i;
                    let o = i.val,
                        s = this.clonePosition();
                    if (!this.bumpIf("</")) return this.error(27, N(r, this.clonePosition()));
                    {
                        if (this.isEOF() || !F(this.char())) return this.error(23, N(s, this.clonePosition()));
                        let e = this.clonePosition();
                        return n !== this.parseTagName() ? this.error(26, N(e, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">")) ? {
                            val: {
                                type: 8,
                                value: n,
                                children: o,
                                location: N(r, this.clonePosition())
                            },
                            err: null
                        } : this.error(23, N(s, this.clonePosition()))
                    }
                }
            }
            parseTagName() {
                var e;
                let t = this.offset();
                for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
                return this.message.slice(t, this.offset())
            }
            parseLiteral(e, t) {
                let r = this.clonePosition(),
                    n = "";
                for (;;) {
                    let r = this.tryParseQuote(t);
                    if (r) {
                        n += r;
                        continue
                    }
                    let i = this.tryParseUnquoted(e, t);
                    if (i) {
                        n += i;
                        continue
                    }
                    let o = this.tryParseLeftAngleBracket();
                    if (o) {
                        n += o;
                        continue
                    }
                    break
                }
                return {
                    val: {
                        type: 0,
                        value: n,
                        location: N(r, this.clonePosition())
                    },
                    err: null
                }
            }
            tryParseLeftAngleBracket() {
                var e;
                return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (F(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<")
            }
            tryParseQuote(e) {
                if (this.isEOF() || 39 !== this.char()) return null;
                switch (this.peek()) {
                    case 39:
                        return this.bump(), this.bump(), "'";
                    case 123:
                    case 60:
                    case 62:
                    case 125:
                        break;
                    case 35:
                        if ("plural" === e || "selectordinal" === e) break;
                        return null;
                    default:
                        return null
                }
                this.bump();
                let t = [this.char()];
                for (this.bump(); !this.isEOF();) {
                    let e = this.char();
                    if (39 === e)
                        if (39 === this.peek()) t.push(39), this.bump();
                        else {
                            this.bump();
                            break
                        }
                    else t.push(e);
                    this.bump()
                }
                return String.fromCodePoint(...t)
            }
            tryParseUnquoted(e, t) {
                if (this.isEOF()) return null;
                let r = this.char();
                return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), String.fromCodePoint(r))
            }
            parseArgument(e, t) {
                let r = this.clonePosition();
                if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(1, N(r, this.clonePosition()));
                if (125 === this.char()) return this.bump(), this.error(2, N(r, this.clonePosition()));
                let n = this.parseIdentifierIfPossible().value;
                if (!n) return this.error(3, N(r, this.clonePosition()));
                if (this.bumpSpace(), this.isEOF()) return this.error(1, N(r, this.clonePosition()));
                switch (this.char()) {
                    case 125:
                        return this.bump(), {
                            val: {
                                type: 1,
                                value: n,
                                location: N(r, this.clonePosition())
                            },
                            err: null
                        };
                    case 44:
                        if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(1, N(r, this.clonePosition()));
                        return this.parseArgumentOptions(e, t, n, r);
                    default:
                        return this.error(3, N(r, this.clonePosition()))
                }
            }
            parseIdentifierIfPossible() {
                var e;
                let t = this.clonePosition(),
                    r = this.offset(),
                    n = (e = this.message, U.lastIndex = r, U.exec(e)[1] ?? ""),
                    i = r + n.length;
                return this.bumpTo(i), {
                    value: n,
                    location: N(t, this.clonePosition())
                }
            }
            parseArgumentOptions(e, t, r, n) {
                let i = this.clonePosition(),
                    o = this.parseIdentifierIfPossible().value,
                    s = this.clonePosition();
                switch (o) {
                    case "":
                        return this.error(4, N(i, s));
                    case "number":
                    case "date":
                    case "time": {
                        this.bumpSpace();
                        let e = null;
                        if (this.bumpIf(",")) {
                            this.bumpSpace();
                            let t = this.clonePosition(),
                                r = this.parseSimpleArgStyleIfPossible();
                            if (r.err) return r;
                            let n = w(r.val);
                            if (0 === n.length) return this.error(6, N(this.clonePosition(), this.clonePosition()));
                            e = {
                                style: n,
                                styleLocation: N(t, this.clonePosition())
                            }
                        }
                        let t = this.tryParseArgumentClose(n);
                        if (t.err) return t;
                        let i = N(n, this.clonePosition());
                        if (e && e.style.startsWith("::")) {
                            let t = O(e.style.slice(2));
                            if ("number" === o) {
                                let n = this.parseNumberSkeletonFromString(t, e.styleLocation);
                                if (n.err) return n;
                                return {
                                    val: {
                                        type: 2,
                                        value: r,
                                        location: i,
                                        style: n.val
                                    },
                                    err: null
                                }
                            } {
                                let n;
                                if (0 === t.length) return this.error(10, i);
                                let s = t;
                                return this.locale && (s = function(e, t) {
                                    let r = "";
                                    for (let n = 0; n < e.length; n++) {
                                        let i = e.charAt(n);
                                        if ("j" === i) {
                                            let o = 0;
                                            for (; n + 1 < e.length && e.charAt(n + 1) === i;) o++, n++;
                                            let s = 1 + (1 & o),
                                                h = o < 2 ? 1 : 3 + (o >> 1),
                                                a = function(e) {
                                                    let t, r = e.hourCycle;
                                                    if (void 0 === r && e.hourCycles && e.hourCycles.length && (r = e.hourCycles[0]), r) switch (r) {
                                                        case "h24":
                                                            return "k";
                                                        case "h23":
                                                            return "H";
                                                        case "h12":
                                                            return "h";
                                                        case "h11":
                                                            return "K";
                                                        default:
                                                            throw Error("Invalid hourCycle")
                                                    }
                                                    let n = e.language;
                                                    return "root" !== n && (t = e.maximize().region), (I[t || ""] || I[n || ""] || I[`${n}-001`] || I["001"])[0]
                                                }(t);
                                            for (("H" == a || "k" == a) && (h = 0); h-- > 0;) r += "a";
                                            for (; s-- > 0;) r = a + r
                                        } else "J" === i ? r += "H" : r += i
                                    }
                                    return r
                                }(t, this.locale)), {
                                    val: {
                                        type: "date" === o ? 3 : 4,
                                        value: r,
                                        location: i,
                                        style: {
                                            type: 1,
                                            pattern: s,
                                            location: e.styleLocation,
                                            parsedOptions: this.shouldParseSkeletons ? (n = {}, s.replace(p, e => {
                                                let t = e.length;
                                                switch (e[0]) {
                                                    case "G":
                                                        n.era = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                                        break;
                                                    case "y":
                                                        n.year = 2 === t ? "2-digit" : "numeric";
                                                        break;
                                                    case "Y":
                                                    case "u":
                                                    case "U":
                                                    case "r":
                                                        throw RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
                                                    case "q":
                                                    case "Q":
                                                        throw RangeError("`q/Q` (quarter) patterns are not supported");
                                                    case "M":
                                                    case "L":
                                                        n.month = ["numeric", "2-digit", "short", "long", "narrow"][t - 1];
                                                        break;
                                                    case "w":
                                                    case "W":
                                                        throw RangeError("`w/W` (week) patterns are not supported");
                                                    case "d":
                                                        n.day = ["numeric", "2-digit"][t - 1];
                                                        break;
                                                    case "D":
                                                    case "F":
                                                    case "g":
                                                        throw RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
                                                    case "E":
                                                        n.weekday = 4 === t ? "long" : 5 === t ? "narrow" : "short";
                                                        break;
                                                    case "e":
                                                        if (t < 4) throw RangeError("`e..eee` (weekday) patterns are not supported");
                                                        n.weekday = ["short", "long", "narrow", "short"][t - 3];
                                                        break;
                                                    case "c":
                                                        if (t < 4) throw RangeError("`c..ccc` (weekday) patterns are not supported");
                                                        n.weekday = ["short", "long", "narrow", "short"][t - 3];
                                                        break;
                                                    case "a":
                                                        n.hour12 = !0;
                                                        break;
                                                    case "b":
                                                    case "B":
                                                        throw RangeError("`b/B` (period) patterns are not supported, use `a` instead");
                                                    case "h":
                                                        n.hourCycle = "h12", n.hour = ["numeric", "2-digit"][t - 1];
                                                        break;
                                                    case "H":
                                                        n.hourCycle = "h23", n.hour = ["numeric", "2-digit"][t - 1];
                                                        break;
                                                    case "K":
                                                        n.hourCycle = "h11", n.hour = ["numeric", "2-digit"][t - 1];
                                                        break;
                                                    case "k":
                                                        n.hourCycle = "h24", n.hour = ["numeric", "2-digit"][t - 1];
                                                        break;
                                                    case "j":
                                                    case "J":
                                                    case "C":
                                                        throw RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
                                                    case "m":
                                                        n.minute = ["numeric", "2-digit"][t - 1];
                                                        break;
                                                    case "s":
                                                        n.second = ["numeric", "2-digit"][t - 1];
                                                        break;
                                                    case "S":
                                                    case "A":
                                                        throw RangeError("`S/A` (second) patterns are not supported, use `s` instead");
                                                    case "z":
                                                        n.timeZoneName = t < 4 ? "short" : "long";
                                                        break;
                                                    case "Z":
                                                    case "O":
                                                    case "v":
                                                    case "V":
                                                    case "X":
                                                    case "x":
                                                        throw RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
                                                }
                                                return ""
                                            }), n) : {}
                                        }
                                    },
                                    err: null
                                }
                            }
                        }
                        return {
                            val: {
                                type: "number" === o ? 2 : "date" === o ? 3 : 4,
                                value: r,
                                location: i,
                                style: e?.style ?? null
                            },
                            err: null
                        }
                    }
                    case "plural":
                    case "selectordinal":
                    case "select": {
                        let i = this.clonePosition();
                        if (this.bumpSpace(), !this.bumpIf(",")) return this.error(12, N(i, {
                            ...i
                        }));
                        this.bumpSpace();
                        let s = this.parseIdentifierIfPossible(),
                            h = 0;
                        if ("select" !== o && "offset" === s.value) {
                            if (!this.bumpIf(":")) return this.error(13, N(this.clonePosition(), this.clonePosition()));
                            this.bumpSpace();
                            let e = this.tryParseDecimalInteger(13, 14);
                            if (e.err) return e;
                            this.bumpSpace(), s = this.parseIdentifierIfPossible(), h = e.val
                        }
                        let a = this.tryParsePluralOrSelectOptions(e, o, t, s);
                        if (a.err) return a;
                        let l = this.tryParseArgumentClose(n);
                        if (l.err) return l;
                        let u = N(n, this.clonePosition());
                        if ("select" === o) return {
                            val: {
                                type: 5,
                                value: r,
                                options: M(a.val),
                                location: u
                            },
                            err: null
                        };
                        return {
                            val: {
                                type: 6,
                                value: r,
                                options: M(a.val),
                                offset: h,
                                pluralType: "plural" === o ? "cardinal" : "ordinal",
                                location: u
                            },
                            err: null
                        }
                    }
                    default:
                        return this.error(5, N(i, s))
                }
            }
            tryParseArgumentClose(e) {
                return this.isEOF() || 125 !== this.char() ? this.error(1, N(e, this.clonePosition())) : (this.bump(), {
                    val: !0,
                    err: null
                })
            }
            parseSimpleArgStyleIfPossible() {
                let e = 0,
                    t = this.clonePosition();
                for (; !this.isEOF();) switch (this.char()) {
                    case 39: {
                        this.bump();
                        let e = this.clonePosition();
                        if (!this.bumpUntil("'")) return this.error(11, N(e, this.clonePosition()));
                        this.bump();
                        break
                    }
                    case 123:
                        e += 1, this.bump();
                        break;
                    case 125:
                        if (!(e > 0)) return {
                            val: this.message.slice(t.offset, this.offset()),
                            err: null
                        };
                        e -= 1;
                        break;
                    default:
                        this.bump()
                }
                return {
                    val: this.message.slice(t.offset, this.offset()),
                    err: null
                }
            }
            parseNumberSkeletonFromString(e, t) {
                let r = [];
                try {
                    r = function(e) {
                        if (0 === e.length) throw Error("Number skeleton cannot be empty");
                        let t = e.split(m).filter(e => e.length > 0),
                            r = [];
                        for (let e of t) {
                            let t = e.split("/");
                            if (0 === t.length) throw Error("Invalid number skeleton");
                            let [n, ...i] = t;
                            for (let e of i)
                                if (0 === e.length) throw Error("Invalid number skeleton");
                            r.push({
                                stem: n,
                                options: i
                            })
                        }
                        return r
                    }(e)
                } catch {
                    return this.error(7, t)
                }
                return {
                    val: {
                        type: 0,
                        tokens: r,
                        location: t,
                        parsedOptions: this.shouldParseSkeletons ? function(e) {
                            let t = {};
                            for (let r of e) {
                                switch (r.stem) {
                                    case "percent":
                                    case "%":
                                        t.style = "percent";
                                        continue;
                                    case "%x100":
                                        t.style = "percent", t.scale = 100;
                                        continue;
                                    case "currency":
                                        t.style = "currency", t.currency = r.options[0];
                                        continue;
                                    case "group-off":
                                    case ",_":
                                        t.useGrouping = !1;
                                        continue;
                                    case "precision-integer":
                                    case ".":
                                        t.maximumFractionDigits = 0;
                                        continue;
                                    case "measure-unit":
                                    case "unit":
                                        t.style = "unit", t.unit = r.options[0].replace(/^(.*?)-/, "");
                                        continue;
                                    case "compact-short":
                                    case "K":
                                        t.notation = "compact", t.compactDisplay = "short";
                                        continue;
                                    case "compact-long":
                                    case "KK":
                                        t.notation = "compact", t.compactDisplay = "long";
                                        continue;
                                    case "scientific":
                                        t = {
                                            ...t,
                                            notation: "scientific",
                                            ...r.options.reduce((e, t) => ({
                                                ...e,
                                                ...B(t)
                                            }), {})
                                        };
                                        continue;
                                    case "engineering":
                                        t = {
                                            ...t,
                                            notation: "engineering",
                                            ...r.options.reduce((e, t) => ({
                                                ...e,
                                                ...B(t)
                                            }), {})
                                        };
                                        continue;
                                    case "notation-simple":
                                        t.notation = "standard";
                                        continue;
                                    case "unit-width-narrow":
                                        t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
                                        continue;
                                    case "unit-width-short":
                                        t.currencyDisplay = "code", t.unitDisplay = "short";
                                        continue;
                                    case "unit-width-full-name":
                                        t.currencyDisplay = "name", t.unitDisplay = "long";
                                        continue;
                                    case "unit-width-iso-code":
                                        t.currencyDisplay = "symbol";
                                        continue;
                                    case "scale":
                                        t.scale = parseFloat(r.options[0]);
                                        continue;
                                    case "rounding-mode-floor":
                                        t.roundingMode = "floor";
                                        continue;
                                    case "rounding-mode-ceiling":
                                        t.roundingMode = "ceil";
                                        continue;
                                    case "rounding-mode-down":
                                        t.roundingMode = "trunc";
                                        continue;
                                    case "rounding-mode-up":
                                        t.roundingMode = "expand";
                                        continue;
                                    case "rounding-mode-half-even":
                                        t.roundingMode = "halfEven";
                                        continue;
                                    case "rounding-mode-half-down":
                                        t.roundingMode = "halfTrunc";
                                        continue;
                                    case "rounding-mode-half-up":
                                        t.roundingMode = "halfExpand";
                                        continue;
                                    case "integer-width":
                                        if (r.options.length > 1) throw RangeError("integer-width stems only accept a single optional option");
                                        r.options[0].replace(d, function(e, r, n, i, o, s) {
                                            if (r) t.minimumIntegerDigits = n.length;
                                            else if (i && o) throw Error("We currently do not support maximum integer digits");
                                            else if (s) throw Error("We currently do not support exact integer digits");
                                            return ""
                                        });
                                        continue
                                }
                                if (E.test(r.stem)) {
                                    t.minimumIntegerDigits = r.stem.length;
                                    continue
                                }
                                if (g.test(r.stem)) {
                                    if (r.options.length > 1) throw RangeError("Fraction-precision stems only accept a single optional option");
                                    r.stem.replace(g, function(e, r, n, i, o, s) {
                                        return "*" === n ? t.minimumFractionDigits = r.length : i && "#" === i[0] ? t.maximumFractionDigits = i.length : o && s ? (t.minimumFractionDigits = o.length, t.maximumFractionDigits = o.length + s.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
                                    });
                                    let e = r.options[0];
                                    "w" === e ? t = {
                                        ...t,
                                        trailingZeroDisplay: "stripIfInteger"
                                    } : e && (t = {
                                        ...t,
                                        ...y(e)
                                    });
                                    continue
                                }
                                if (b.test(r.stem)) {
                                    t = {
                                        ...t,
                                        ...y(r.stem)
                                    };
                                    continue
                                }
                                let e = H(r.stem);
                                e && (t = {
                                    ...t,
                                    ...e
                                });
                                let n = function(e) {
                                    let t;
                                    if ("E" === e[0] && "E" === e[1] ? (t = {
                                            notation: "engineering"
                                        }, e = e.slice(2)) : "E" === e[0] && (t = {
                                            notation: "scientific"
                                        }, e = e.slice(1)), t) {
                                        let r = e.slice(0, 2);
                                        if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !E.test(e)) throw Error("Malformed concise eng/scientific notation");
                                        t.minimumIntegerDigits = e.length
                                    }
                                    return t
                                }(r.stem);
                                n && (t = {
                                    ...t,
                                    ...n
                                })
                            }
                            return t
                        }(r) : {}
                    },
                    err: null
                }
            }
            tryParsePluralOrSelectOptions(e, t, r, n) {
                let i = !1,
                    o = [],
                    s = new Set,
                    {
                        value: h,
                        location: a
                    } = n;
                for (;;) {
                    if (0 === h.length) {
                        let e = this.clonePosition();
                        if ("select" !== t && this.bumpIf("=")) {
                            let t = this.tryParseDecimalInteger(16, 19);
                            if (t.err) return t;
                            a = N(e, this.clonePosition()), h = this.message.slice(e.offset, this.offset())
                        } else break
                    }
                    if (s.has(h)) return this.error("select" === t ? 21 : 20, a);
                    "other" === h && (i = !0), this.bumpSpace();
                    let n = this.clonePosition();
                    if (!this.bumpIf("{")) return this.error("select" === t ? 17 : 18, N(this.clonePosition(), this.clonePosition()));
                    let l = this.parseMessage(e + 1, t, r);
                    if (l.err) return l;
                    let u = this.tryParseArgumentClose(n);
                    if (u.err) return u;
                    o.push([h, {
                        value: l.val,
                        location: N(n, this.clonePosition())
                    }]), s.add(h), this.bumpSpace(), {
                        value: h,
                        location: a
                    } = this.parseIdentifierIfPossible()
                }
                return 0 === o.length ? this.error("select" === t ? 15 : 16, N(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !i ? this.error(22, N(this.clonePosition(), this.clonePosition())) : {
                    val: o,
                    err: null
                }
            }
            tryParseDecimalInteger(e, t) {
                let r = 1,
                    n = this.clonePosition();
                this.bumpIf("+") || this.bumpIf("-") && (r = -1);
                let i = !1,
                    o = 0;
                for (; !this.isEOF();) {
                    let e = this.char();
                    if (e >= 48 && e <= 57) i = !0, o = 10 * o + (e - 48), this.bump();
                    else break
                }
                let s = N(n, this.clonePosition());
                return i ? Number.isSafeInteger(o *= r) ? {
                    val: o,
                    err: null
                } : this.error(t, s) : this.error(e, s)
            }
            offset() {
                return this.position.offset
            }
            isEOF() {
                return this.offset() === this.message.length
            }
            clonePosition() {
                return {
                    offset: this.position.offset,
                    line: this.position.line,
                    column: this.position.column
                }
            }
            char() {
                let e = this.position.offset;
                if (e >= this.message.length) throw Error("out of bound");
                let t = this.message.codePointAt(e);
                if (void 0 === t) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
                return t
            }
            error(e, t) {
                return {
                    val: null,
                    err: {
                        kind: e,
                        message: this.message,
                        location: t
                    }
                }
            }
            bump() {
                if (this.isEOF()) return;
                let e = this.char();
                10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
            }
            bumpIf(e) {
                if (this.message.startsWith(e, this.offset())) {
                    for (let t = 0; t < e.length; t++) this.bump();
                    return !0
                }
                return !1
            }
            bumpUntil(e) {
                let t = this.offset(),
                    r = this.message.indexOf(e, t);
                return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
            }
            bumpTo(e) {
                if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
                for (e = Math.min(e, this.message.length);;) {
                    let t = this.offset();
                    if (t === e) break;
                    if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
                    if (this.bump(), this.isEOF()) break
                }
            }
            bumpSpace() {
                for (var e; !this.isEOF() && ((e = this.char()) >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e);) this.bump()
            }
            peek() {
                if (this.isEOF()) return null;
                let e = this.char(),
                    t = this.offset();
                return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null
            }
        };

        function F(e) {
            return e >= 97 && e <= 122 || e >= 65 && e <= 90
        }

        function k(e, t = {}) {
            let r = new D(e, t = {
                shouldParseSkeletons: !0,
                requiresOtherClause: !0,
                ...t
            }).parse();
            if (r.err) {
                let e = SyntaxError(T[r.err.kind]);
                throw e.location = r.err.location, e.originalMessage = r.err.message, e
            }
            return t?.captureLocation || function e(t) {
                t.forEach(t => {
                    if (delete t.location, 5 === t.type || 6 === t.type)
                        for (let r in t.options) delete t.options[r].location, e(t.options[r].value);
                    else 2 === t.type && P(t.style) || (3 === t.type || 4 === t.type) && S(t.style) ? delete t.style.location : 8 === t.type && e(t.children)
                })
            }(r.val), r.val
        }
        var G = class extends Error {
                constructor(e, t, r) {
                    super(e), this.code = t, this.originalMessage = r
                }
                toString() {
                    return `[formatjs Error: ${this.code}] ${this.message}`
                }
            },
            x = class extends G {
                constructor(e, t, r, n) {
                    super(`Invalid values for "${e}": "${t}". Options are "${Object.keys(r).join('", "')}"`, "INVALID_VALUE", n)
                }
            },
            j = class extends G {
                constructor(e, t, r) {
                    super(`Value for "${e}" must be of type ${t}`, "INVALID_VALUE", r)
                }
            },
            $ = class extends G {
                constructor(e, t) {
                    super(`The intl string context variable "${e}" was not provided to the string "${t}"`, "MISSING_VALUE", t)
                }
            };

        function K(e) {
            return {
                create: () => ({
                    get: t => e[t],
                    set(t, r) {
                        e[t] = r
                    }
                })
            }
        }

        function V(e) {
            return function(...e) {
                return e.filter(Boolean).join(".")
            }(e.namespace, e.key)
        }

        function X(e) {
            console.error(e)
        }(class e {
            constructor(t, r = e.defaultLocale, n, o) {
                var s;
                if (this.formatterCache = {
                        number: {},
                        dateTime: {},
                        pluralRules: {}
                    }, this.format = e => {
                        let t = this.formatToParts(e);
                        if (1 === t.length) return t[0].value;
                        let r = t.reduce((e, t) => (e.length && 0 === t.type && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e), []);
                        return r.length <= 1 ? r[0] || "" : r
                    }, this.formatToParts = e => (function e(t, r, n, i, o, s, h) {
                        if (1 === t.length && 0 === t[0].type) return [{
                            type: 0,
                            value: t[0].value
                        }];
                        let a = [];
                        for (let l of t) {
                            if (0 === l.type) {
                                a.push({
                                    type: 0,
                                    value: l.value
                                });
                                continue
                            }
                            if (7 === l.type) {
                                "number" == typeof s && a.push({
                                    type: 0,
                                    value: n.getNumberFormat(r).format(s)
                                });
                                continue
                            }
                            let {
                                value: t
                            } = l;
                            if (!(o && t in o)) throw new $(t, h);
                            let u = o[t];
                            if (1 === l.type) {
                                u && "string" != typeof u && "number" != typeof u && "bigint" != typeof u || (u = "string" == typeof u || "number" == typeof u || "bigint" == typeof u ? String(u) : ""), a.push({
                                    type: +("string" != typeof u),
                                    value: u
                                });
                                continue
                            }
                            if (3 === l.type) {
                                let e = "string" == typeof l.style ? i.date[l.style] : S(l.style) ? l.style.parsedOptions : void 0;
                                a.push({
                                    type: 0,
                                    value: n.getDateTimeFormat(r, e).format(u)
                                });
                                continue
                            }
                            if (4 === l.type) {
                                let e = "string" == typeof l.style ? i.time[l.style] : S(l.style) ? l.style.parsedOptions : i.time.medium;
                                a.push({
                                    type: 0,
                                    value: n.getDateTimeFormat(r, e).format(u)
                                });
                                continue
                            }
                            if (2 === l.type) {
                                let e = "string" == typeof l.style ? i.number[l.style] : P(l.style) ? l.style.parsedOptions : void 0;
                                if (e && e.scale) {
                                    let t = e.scale || 1;
                                    if ("bigint" == typeof u) {
                                        if (!Number.isInteger(t)) throw TypeError(`Cannot apply fractional scale ${t} to bigint value. Scale must be an integer when formatting bigint.`);
                                        u *= BigInt(t)
                                    } else u *= t
                                }
                                a.push({
                                    type: 0,
                                    value: n.getNumberFormat(r, e).format(u)
                                });
                                continue
                            }
                            if (8 === l.type) {
                                let {
                                    children: t,
                                    value: u
                                } = l, c = o[u];
                                if ("function" != typeof c) throw new j(u, "function", h);
                                let f = c(e(t, r, n, i, o, s).map(e => e.value));
                                Array.isArray(f) || (f = [f]), a.push(...f.map(e => ({
                                    type: +("string" != typeof e),
                                    value: e
                                })))
                            }
                            if (5 === l.type) {
                                let t = u,
                                    s = (Object.prototype.hasOwnProperty.call(l.options, t) ? l.options[t] : void 0) || l.options.other;
                                if (!s) throw new x(l.value, u, Object.keys(l.options), h);
                                a.push(...e(s.value, r, n, i, o));
                                continue
                            }
                            if (6 === l.type) {
                                let t = `=${u}`,
                                    s = Object.prototype.hasOwnProperty.call(l.options, t) ? l.options[t] : void 0;
                                if (!s) {
                                    if (!Intl.PluralRules) throw new G(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, "MISSING_INTL_API", h);
                                    let e = "bigint" == typeof u ? Number(u) : u,
                                        t = n.getPluralRules(r, {
                                            type: l.pluralType
                                        }).select(e - (l.offset || 0));
                                    s = (Object.prototype.hasOwnProperty.call(l.options, t) ? l.options[t] : void 0) || l.options.other
                                }
                                if (!s) throw new x(l.value, u, Object.keys(l.options), h);
                                let c = "bigint" == typeof u ? Number(u) : u;
                                a.push(...e(s.value, r, n, i, o, c - (l.offset || 0)));
                                continue
                            }
                        }
                        return a.length < 2 ? a : a.reduce((e, t) => {
                            let r = e[e.length - 1];
                            return r && 0 === r.type && 0 === t.type ? r.value += t.value : e.push(t), e
                        }, [])
                    })(this.ast, this.locales, this.formatters, this.formats, e, void 0, this.message), this.resolvedOptions = () => ({
                        locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0]
                    }), this.getAst = () => this.ast, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
                    if (this.message = t, !e.__parse) throw TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
                    let {
                        ...r
                    } = o || {};
                    this.ast = e.__parse(t, {
                        ...r,
                        locale: this.resolvedLocale
                    })
                } else this.ast = t;
                if (!Array.isArray(this.ast)) throw TypeError("A message must be provided as a String or AST.");
                this.formats = (s = e.formats, n ? Object.keys(s).reduce((e, t) => {
                    var r, i;
                    return e[t] = (r = s[t], (i = n[t]) ? {
                        ...r,
                        ...i,
                        ...Object.keys(r).reduce((e, t) => (e[t] = {
                            ...r[t],
                            ...i[t]
                        }, e), {})
                    } : r), e
                }, {
                    ...s
                }) : s), this.formatters = o && o.formatters || function(e = {
                    number: {},
                    dateTime: {},
                    pluralRules: {}
                }) {
                    return {
                        getNumberFormat: i((...e) => new Intl.NumberFormat(...e), {
                            cache: K(e.number),
                            strategy: u.variadic
                        }),
                        getDateTimeFormat: i((...e) => new Intl.DateTimeFormat(...e), {
                            cache: K(e.dateTime),
                            strategy: u.variadic
                        }),
                        getPluralRules: i((...e) => new Intl.PluralRules(...e), {
                            cache: K(e.pluralRules),
                            strategy: u.variadic
                        })
                    }
                }(this.formatterCache)
            }
            static {
                this.memoizedDefaultLocale = null
            }
            static get defaultLocale() {
                return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale
            }
            static {
                this.resolveLocale = e => {
                    if (void 0 === Intl.Locale) return;
                    let t = Intl.NumberFormat.supportedLocalesOf(e);
                    return new Intl.Locale(t.length > 0 ? t[0] : "string" == typeof e ? e : e[0])
                }
            }
            static {
                this.__parse = k
            }
            static {
                this.formats = {
                    number: {
                        integer: {
                            maximumFractionDigits: 0
                        },
                        currency: {
                            style: "currency"
                        },
                        percent: {
                            style: "percent"
                        }
                    },
                    date: {
                        short: {
                            month: "numeric",
                            day: "numeric",
                            year: "2-digit"
                        },
                        medium: {
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        },
                        long: {
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        },
                        full: {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric"
                        }
                    },
                    time: {
                        short: {
                            hour: "numeric",
                            minute: "numeric"
                        },
                        medium: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric"
                        },
                        long: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        },
                        full: {
                            hour: "numeric",
                            minute: "numeric",
                            second: "numeric",
                            timeZoneName: "short"
                        }
                    }
                }
            }
        });
        var Z = e.i(230452);
        let Y = (0, n.createContext)(void 0);
        e.s(["R", 0, function({
            children: e,
            formats: t,
            getMessageFallback: r,
            locale: i,
            messages: o,
            now: s,
            onError: h,
            timeZone: a
        }) {
            let l = (0, n.useContext)(Y),
                u = (0, n.useMemo)(() => l?.cache || {
                    dateTime: {},
                    number: {},
                    message: {},
                    relativeTime: {},
                    pluralRules: {},
                    list: {},
                    displayNames: {}
                }, [i, l?.cache]),
                c = (0, n.useMemo)(() => l?.formatters || {
                    getDateTimeFormat: f(Intl.DateTimeFormat, u.dateTime),
                    getNumberFormat: f(Intl.NumberFormat, u.number),
                    getPluralRules: f(Intl.PluralRules, u.pluralRules),
                    getRelativeTimeFormat: f(Intl.RelativeTimeFormat, u.relativeTime),
                    getListFormat: f(Intl.ListFormat, u.list),
                    getDisplayNames: f(Intl.DisplayNames, u.displayNames)
                }, [u, l?.formatters]),
                p = (0, n.useMemo)(() => ({
                    ... function({
                        formats: e,
                        getMessageFallback: t,
                        messages: r,
                        onError: n,
                        ...i
                    }) {
                        return {
                            ...i,
                            formats: e || void 0,
                            messages: r || void 0,
                            onError: n || X,
                            getMessageFallback: t || V
                        }
                    }({
                        locale: i,
                        formats: void 0 === t ? l?.formats : t,
                        getMessageFallback: r || l?.getMessageFallback,
                        messages: void 0 === o ? l?.messages : o,
                        now: s || l?.now,
                        onError: h || l?.onError,
                        timeZone: a || l?.timeZone
                    }),
                    formatters: c,
                    cache: u
                }), [u, t, c, r, i, o, s, h, l, a]);
            return (0, Z.jsx)(Y.Provider, {
                value: p,
                children: e
            })
        }, "X", 0, function() {
            return function() {
                let e = (0, n.useContext)(Y);
                if (!e) throw Error(void 0);
                return e
            }().locale
        }], 81052)
    }, 847764, e => {
        var t = e.i(491902),
            r = e.i(516830);
        e.s(["f", 0, function(e) {
            return function(n) {
                if ("string" == typeof n.href && n.href.startsWith("//")) {
                    let {
                        locale: e,
                        ...i
                    } = n;
                    return (0, r.createElement)(t.default, i)
                }
                return (0, r.createElement)(e, n)
            }
        }])
    }])
})();

//# debugId=4f05cb9a-e721-d6ed-b09a-a2c1d7b35751