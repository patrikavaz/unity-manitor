(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 812064, 264250, e => {
    "use strict";

    function t(e) {
        return "object" == typeof e && null !== e
    }

    function r(e) {
        return t(e) && "offsetHeight" in e
    }
    e.s(["isObject", () => t], 264250), e.s(["isHTMLElement", () => r], 812064)
}, 108830, e => {
    "use strict";
    var t = e.i(145158),
        r = e.i(58214);

    function n(e = !0) {
        let o = (0, t.useContext)(r.PresenceContext);
        if (null === o) return [!0, null];
        let {
            isPresent: a,
            onExitComplete: l,
            register: i
        } = o, u = (0, t.useId)();
        (0, t.useEffect)(() => {
            if (e) return i(u)
        }, [e]);
        let c = (0, t.useCallback)(() => e && l && l(u), [u, l, e]);
        return !a && l ? [!1, c] : [!0]
    }
    e.s(["usePresence", () => n])
}, 937971, (e, t, r) => {
    "use strict";

    function n(e) {
        return !(null != e && !e) && {
            name: "NEXT_LOCALE",
            maxAge: 31536e3,
            sameSite: "lax",
            ..."object" == typeof e && e
        }
    }

    function o(e) {
        return "object" == typeof e ? e : {
            mode: e || "always"
        }
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.receiveLocaleCookie = n, r.receiveLocalePrefixConfig = o, r.receiveRoutingConfig = function(e) {
        var t, r;
        return {
            ...e,
            localePrefix: o(e.localePrefix),
            localeCookie: n(e.localeCookie),
            localeDetection: null == (t = e.localeDetection) || t,
            alternateLinks: null == (r = e.alternateLinks) || r
        }
    }
}, 117116, (e, t, r) => {
    "use strict";
    var n = e.i(757249);

    function o(e) {
        let t;
        return ("object" == typeof e ? null == e.host && null == e.hostname : !/^[a-z]+:/i.test(e)) && (null == (t = "object" == typeof e ? e.pathname : e) || !!t.startsWith("/"))
    }

    function a(e, t) {
        let r;
        return "string" == typeof e ? r = l(t, e) : (r = {
            ...e
        }, e.pathname && (r.pathname = l(t, e.pathname))), r
    }

    function l(e, t) {
        let r = e;
        return /^\/(\?.*)?$/.test(t) && (t = t.slice(1)), r += t
    }

    function i(e, t) {
        return t === e || t.startsWith("".concat(e, "/"))
    }

    function u(e) {
        let t = function() {
            try {
                return "true" === n.default.env._next_intl_trailing_slash
            } catch (e) {
                return !1
            }
        }();
        if ("/" !== e) {
            let r = e.endsWith("/");
            t && !r ? e += "/" : !t && r && (e = e.slice(0, -1))
        }
        return e
    }

    function c(e) {
        return "/" + e
    }

    function s(e) {
        let t = e.replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "?(.*)").replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)").replace(/\[([^\]]+)\]/g, "([^/]+)");
        return new RegExp("^".concat(t, "$"))
    }

    function f(e) {
        return e.includes("[[...")
    }

    function d(e) {
        return e.includes("[...")
    }

    function p(e) {
        return e.includes("[")
    }

    function h(e, t) {
        let r = e.split("/"),
            n = t.split("/"),
            o = Math.max(r.length, n.length);
        for (let e = 0; e < o; e++) {
            let t = r[e],
                o = n[e];
            if (!t && o) return -1;
            if (t && !o) return 1;
            if (t || o) {
                if (!p(t) && p(o)) return -1;
                if (p(t) && !p(o)) return 1;
                if (!d(t) && d(o)) return -1;
                if (d(t) && !d(o)) return 1;
                if (!f(t) && f(o)) return -1;
                if (f(t) && !f(o)) return 1
            }
        }
        return 0
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.getLocaleAsPrefix = c, r.getLocalePrefix = function(e, t) {
        var r;
        return "never" !== t.mode && (null == (r = t.prefixes) ? void 0 : r[e]) || c(e)
    }, r.getSortedPathnames = function(e) {
        return e.sort(h)
    }, r.hasPathnamePrefixed = i, r.isLocalizableHref = o, r.localizeHref = function(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
            n = arguments.length > 3 ? arguments[3] : void 0,
            l = arguments.length > 4 ? arguments[4] : void 0;
        if (!o(e)) return e;
        let u = i(l, n);
        return (t !== r || u) && null != l ? a(e, l) : e
    }, r.matchesPathname = function(e, t) {
        let r = u(e),
            n = u(t);
        return s(r).test(n)
    }, r.normalizeTrailingSlash = u, r.prefixHref = a, r.prefixPathname = l, r.templateToRegex = s, r.unprefixPathname = function(e, t) {
        return e.replace(new RegExp("^".concat(t)), "") || "/"
    }
}, 887672, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(117116);

    function o(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e)) Array.isArray(n) ? n.forEach(e => {
            t.append(r, String(e))
        }) : t.set(r, String(n));
        return "?" + t.toString()
    }
    r.applyPathnamePrefix = function(e, t, r, o, a) {
        let l, {
            mode: i
        } = r.localePrefix;
        if (void 0 !== a) l = a;
        else if (n.isLocalizableHref(e)) {
            if ("always" === i) l = !0;
            else if ("as-needed" === i) {
                let e = r.defaultLocale;
                if (r.domains) {
                    let t = r.domains.find(e => e.domain === o);
                    t && (e = t.defaultLocale)
                }
                l = e !== t
            }
        }
        return l ? n.prefixPathname(n.getLocalePrefix(t, r.localePrefix), e) : e
    }, r.compileLocalizedPathname = function(e) {
        let {
            pathname: t,
            locale: r,
            params: a,
            pathnames: l,
            query: i
        } = e;

        function u(e) {
            let t = l[e];
            return t || (t = e), t
        }

        function c(e) {
            let t = "string" == typeof e ? e : e[r];
            return a && Object.entries(a).forEach(e => {
                let r, n, [o, a] = e;
                Array.isArray(a) ? (r = "(\\[)?\\[...".concat(o, "\\](\\])?"), n = a.map(e => String(e)).join("/")) : (r = "\\[".concat(o, "\\]"), n = String(a)), t = t.replace(RegExp(r, "g"), n)
            }), t = t.replace(/\[\[\.\.\..+\]\]/g, ""), t = n.normalizeTrailingSlash(t), i && (t += o(i)), t
        }
        if ("string" == typeof t) return c(u(t));
        {
            let {
                pathname: e,
                ...r
            } = t;
            return {
                ...r,
                pathname: c(u(e))
            }
        }
    }, r.getBasePath = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.pathname;
        return "/" === e ? t : t.replace(e, "")
    }, r.getRoute = function(e, t, r) {
        let o = n.getSortedPathnames(Object.keys(r)),
            a = decodeURI(t);
        for (let t of o) {
            let o = r[t];
            if ("string" == typeof o) {
                if (n.matchesPathname(o, a)) return t
            } else if (n.matchesPathname(o[e], a)) return t
        }
        return t
    }, r.normalizeNameOrNameWithParams = function(e) {
        return "string" == typeof e ? {
            pathname: e
        } : e
    }, r.serializeSearchParams = o
}, 675272, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(887672);
    r.default = function(e, t, r, o) {
        if (!e || o === r || null == o || !t) return;
        let a = n.getBasePath(t),
            {
                name: l,
                ...i
            } = e;
        i.path || (i.path = "" !== a ? a : "/");
        let u = "".concat(l, "=").concat(o, ";");
        for (let [e, t] of Object.entries(i)) u += "".concat("maxAge" === e ? "max-age" : e), "boolean" != typeof t && (u += "=" + t), u += ";";
        document.cookie = u
    }
}, 893834, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(956874),
        o = e.r(382055),
        a = e.r(634853),
        l = e.r(145158),
        i = e.r(834576),
        u = e.r(675272);

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var s = c(o),
        f = c(l);
    r.default = l.forwardRef(function(e, t) {
        let {
            defaultLocale: r,
            href: o,
            locale: c,
            localeCookie: d,
            onClick: p,
            prefetch: h,
            unprefixed: m,
            ...y
        } = e, g = i.default(), P = null != c && c !== g, v = c || g, b = function() {
            let [e, t] = l.useState();
            return l.useEffect(() => {
                t(window.location.host)
            }, []), e
        }(), x = b && m && (m.domains[b] === v || !Object.keys(m.domains).includes(b) && g === r && !c) ? m.pathname : o, _ = a.usePathname();
        return P && (h = !1), f.default.createElement(s.default, n.extends({
            ref: t,
            href: x,
            hrefLang: P ? c : void 0,
            onClick: function(e) {
                u.default(d, _, g, c), p && p(e)
            },
            prefetch: h
        }, y))
    })
}, 480963, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(956874),
        o = e.r(634853),
        a = e.r(145158),
        l = e.r(834576),
        i = e.r(117116),
        u = e.r(893834),
        c = a && a.__esModule ? a : {
            default: a
        };
    let s = a.forwardRef(function(e, t) {
        let {
            href: r,
            locale: s,
            localeCookie: f,
            localePrefixMode: d,
            prefix: p,
            ...h
        } = e, m = o.usePathname(), y = l.default(), g = s !== y, [P, v] = a.useState(() => i.isLocalizableHref(r) && ("never" !== d || g) ? i.prefixHref(r, p) : r);
        return a.useEffect(() => {
            m && v(i.localizeHref(r, s, y, m, p))
        }, [y, r, s, m, p]), c.default.createElement(u.default, n.extends({
            ref: t,
            href: P,
            locale: s,
            localeCookie: f
        }, h))
    });
    s.displayName = "ClientLink", r.default = s
}, 38378, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(956874),
        o = e.r(145158),
        a = e.r(834576),
        l = e.r(117116),
        i = e.r(480963),
        u = o && o.__esModule ? o : {
            default: o
        };
    let c = o.forwardRef(function(e, t) {
        let {
            locale: r,
            localePrefix: o,
            ...c
        } = e, s = a.default(), f = r || s, d = l.getLocalePrefix(f, o);
        return u.default.createElement(i.default, n.extends({
            ref: t,
            locale: f,
            localePrefixMode: o.mode,
            prefix: d
        }, c))
    });
    c.displayName = "ClientLink", r.default = c
}, 84442, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(634853),
        o = e.r(117116);

    function a(e) {
        return function(t) {
            let r = o.getLocalePrefix(t.locale, t.localePrefix),
                n = "never" !== t.localePrefix.mode && o.isLocalizableHref(t.pathname) ? o.prefixPathname(r, t.pathname) : t.pathname;
            for (var a = arguments.length, l = Array(a > 1 ? a - 1 : 0), i = 1; i < a; i++) l[i - 1] = arguments[i];
            return e(n, ...l)
        }
    }
    let l = a(n.redirect);
    r.basePermanentRedirect = a(n.permanentRedirect), r.baseRedirect = l
}, 768564, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(834576),
        o = e.r(84442);

    function a(e) {
        return function(t) {
            let r;
            try {
                r = n.default()
            } catch (e) {
                throw e
            }
            for (var o = arguments.length, a = Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++) a[l - 1] = arguments[l];
            return e({
                ...t,
                locale: r
            }, ...a)
        }
    }
    let l = a(o.baseRedirect);
    r.clientPermanentRedirect = a(o.basePermanentRedirect), r.clientRedirect = l
}, 63626, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(634853),
        o = e.r(145158),
        a = e.r(834576),
        l = e.r(117116);
    r.default = function(e) {
        let t = n.usePathname(),
            r = a.default();
        return o.useMemo(() => {
            if (!t) return t;
            let n = t,
                o = l.getLocalePrefix(r, e.localePrefix);
            if (l.hasPathnamePrefixed(o, t)) n = l.unprefixPathname(t, o);
            else if ("as-needed" === e.localePrefix.mode && e.localePrefix.prefixes) {
                let e = l.getLocaleAsPrefix(r);
                l.hasPathnamePrefixed(e, t) && (n = l.unprefixPathname(t, e))
            }
            return n
        }, [e.localePrefix, r, t])
    }
}, 408491, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(634853),
        o = e.r(145158),
        a = e.r(834576),
        l = e.r(117116),
        i = e.r(675272),
        u = e.r(887672);
    r.default = function(e, t) {
        let r = n.useRouter(),
            c = a.default(),
            s = n.usePathname();
        return o.useMemo(() => {
            function n(r) {
                return function(n, o) {
                    let a, f, d, p, {
                        locale: h,
                        ...m
                    } = o || {};
                    i.default(t, s, c, h);
                    let y = [(a = window.location.pathname, (f = u.getBasePath(s)) && (a = a.replace(f, "")), d = h || c, p = l.getLocalePrefix(d, e), l.localizeHref(n, d, c, a, p))];
                    return Object.keys(m).length > 0 && y.push(m), r(...y)
                }
            }
            return {
                ...r,
                push: n(r.push),
                replace: n(r.replace),
                prefetch: n(r.prefetch)
            }
        }, [c, t, e, s, r])
    }
}, 784439, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(956874),
        o = e.r(145158),
        a = e.r(937971),
        l = e.r(38378),
        i = e.r(768564),
        u = e.r(63626),
        c = e.r(408491),
        s = o && o.__esModule ? o : {
            default: o
        };
    r.default = function(e) {
        let t = a.receiveLocalePrefixConfig(null == e ? void 0 : e.localePrefix),
            r = a.receiveLocaleCookie(null == e ? void 0 : e.localeCookie),
            f = o.forwardRef(function(e, o) {
                return s.default.createElement(l.default, n.extends({
                    ref: o,
                    localeCookie: r,
                    localePrefix: t
                }, e))
            });
        return f.displayName = "Link", {
            Link: f,
            redirect: function(e) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                return i.clientRedirect({
                    pathname: e,
                    localePrefix: t
                }, ...n)
            },
            permanentRedirect: function(e) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                return i.clientPermanentRedirect({
                    pathname: e,
                    localePrefix: t
                }, ...n)
            },
            usePathname: function() {
                return u.default({
                    localePrefix: t,
                    defaultLocale: null == e ? void 0 : e.defaultLocale
                })
            },
            useRouter: function() {
                return c.default(t, r)
            }
        }
    }
}, 663371, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(956874),
        o = e.r(145158),
        a = e.r(834576),
        l = e.r(937971),
        i = e.r(887672),
        u = e.r(38378),
        c = e.r(768564),
        s = e.r(63626),
        f = e.r(408491),
        d = o && o.__esModule ? o : {
            default: o
        };
    r.default = function(e) {
        let t = l.receiveRoutingConfig(e),
            r = l.receiveLocaleCookie(e.localeCookie);

        function p() {
            let e = a.default();
            if (!t.locales.includes(e)) throw Error(void 0);
            return e
        }
        let h = o.forwardRef(function(e, o) {
            let {
                href: a,
                locale: l,
                ...c
            } = e, s = p(), f = l || s;
            return d.default.createElement(u.default, n.extends({
                ref: o,
                href: i.compileLocalizedPathname({
                    locale: f,
                    pathname: a,
                    params: "object" == typeof a ? a.params : void 0,
                    pathnames: t.pathnames
                }),
                locale: l,
                localeCookie: r,
                localePrefix: t.localePrefix
            }, c))
        });

        function m(e) {
            let {
                href: r,
                locale: n
            } = e;
            return i.compileLocalizedPathname({
                ...i.normalizeNameOrNameWithParams(r),
                locale: n,
                pathnames: t.pathnames
            })
        }
        return h.displayName = "Link", {
            Link: h,
            redirect: function(e) {
                let r = m({
                    href: e,
                    locale: p()
                });
                for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                return c.clientRedirect({
                    pathname: r,
                    localePrefix: t.localePrefix
                }, ...o)
            },
            permanentRedirect: function(e) {
                let r = m({
                    href: e,
                    locale: p()
                });
                for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) o[a - 1] = arguments[a];
                return c.clientPermanentRedirect({
                    pathname: r,
                    localePrefix: t.localePrefix
                }, ...o)
            },
            usePathname: function() {
                let e = s.default(t),
                    r = p();
                return o.useMemo(() => e ? i.getRoute(r, e, t.pathnames) : e, [r, e])
            },
            useRouter: function() {
                let e = f.default(t.localePrefix, r),
                    n = p();
                return o.useMemo(() => ({
                    ...e,
                    push(t) {
                        for (var r, o = arguments.length, a = Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++) a[l - 1] = arguments[l];
                        let i = m({
                            href: t,
                            locale: (null == (r = a[0]) ? void 0 : r.locale) || n
                        });
                        return e.push(i, ...a)
                    },
                    replace(t) {
                        for (var r, o = arguments.length, a = Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++) a[l - 1] = arguments[l];
                        let i = m({
                            href: t,
                            locale: (null == (r = a[0]) ? void 0 : r.locale) || n
                        });
                        return e.replace(i, ...a)
                    },
                    prefetch(t) {
                        for (var r, o = arguments.length, a = Array(o > 1 ? o - 1 : 0), l = 1; l < o; l++) a[l - 1] = arguments[l];
                        let i = m({
                            href: t,
                            locale: (null == (r = a[0]) ? void 0 : r.locale) || n
                        });
                        return e.prefetch(i, ...a)
                    }
                }), [e, n])
            },
            getPathname: m
        }
    }
}, 219781, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(956874),
        o = e.r(634853),
        a = e.r(145158),
        l = e.r(937971),
        i = e.r(117116),
        u = e.r(893834),
        c = e.r(887672),
        s = a && a.__esModule ? a : {
            default: a
        };
    r.default = function(e, t) {
        let r = l.receiveRoutingConfig(t || {}),
            f = r.pathnames,
            d = "as-needed" === r.localePrefix.mode && r.domains || void 0,
            p = a.forwardRef(function(t, o) {
                let l, c, {
                    href: p,
                    locale: m,
                    ...y
                } = t;
                "object" == typeof p ? (l = p.pathname, c = p.params) : l = p;
                let g = i.isLocalizableHref(p),
                    P = e(),
                    v = P instanceof Promise ? a.use(P) : P,
                    b = g ? h({
                        locale: m || v,
                        href: null == f ? l : {
                            pathname: l,
                            params: c
                        }
                    }, null != m || d || void 0) : l;
                return s.default.createElement(u.default, n.extends({
                    ref: o,
                    defaultLocale: r.defaultLocale,
                    href: "object" == typeof p ? {
                        ...p,
                        pathname: b
                    } : b,
                    locale: m,
                    localeCookie: r.localeCookie,
                    unprefixed: d && g ? {
                        domains: r.domains.reduce((e, t) => (e[t.domain] = t.defaultLocale, e), {}),
                        pathname: h({
                            locale: v,
                            href: null == f ? l : {
                                pathname: l,
                                params: c
                            }
                        }, !1)
                    } : void 0
                }, y))
            });

        function h(e, t) {
            let n, {
                href: o,
                locale: a
            } = e;
            return null == f ? "object" == typeof o ? (n = o.pathname, o.query && (n += c.serializeSearchParams(o.query))) : n = o : n = c.compileLocalizedPathname({
                locale: a,
                ...c.normalizeNameOrNameWithParams(o),
                pathnames: r.pathnames
            }), c.applyPathnamePrefix(n, a, r, e.domain, t)
        }

        function m(e) {
            return function(t) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                return e(h(t, t.domain ? void 0 : d), ...n)
            }
        }
        return {
            config: r,
            Link: p,
            redirect: m(o.redirect),
            permanentRedirect: m(o.permanentRedirect),
            getPathname: h
        }
    }
}, 270119, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(634853),
        o = e.r(145158),
        a = e.r(834576),
        l = e.r(219781),
        i = e.r(675272),
        u = e.r(887672),
        c = e.r(63626);
    r.default = function(e) {
        function t() {
            return a.default()
        }
        let {
            Link: r,
            config: s,
            getPathname: f,
            ...d
        } = l.default(t, e);
        return {
            ...d,
            Link: r,
            usePathname: function() {
                let e = c.default(s),
                    r = t();
                return o.useMemo(() => e && s.pathnames ? u.getRoute(r, e, s.pathnames) : e, [r, e])
            },
            useRouter: function() {
                let e = n.useRouter(),
                    r = t(),
                    a = n.usePathname();
                return o.useMemo(() => {
                    function t(e) {
                        return function(t, n) {
                            let {
                                locale: o,
                                ...l
                            } = n || {}, u = [f({
                                href: t,
                                locale: o || r,
                                domain: window.location.host
                            })];
                            Object.keys(l).length > 0 && u.push(l), e(...u), i.default(s.localeCookie, a, r, o)
                        }
                    }
                    return {
                        ...e,
                        push: t(e.push),
                        replace: t(e.replace),
                        prefetch: t(e.prefetch)
                    }
                }, [r, a, e])
            },
            getPathname: f
        }
    }
}, 394741, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(784439),
        o = e.r(663371),
        a = e.r(270119);
    r.createSharedPathnamesNavigation = n.default, r.createLocalizedPathnamesNavigation = o.default, r.createNavigation = a.default
}, 794999, (e, t, r) => {
    "use strict";
    t.exports = e.r(394741)
}, 7075, e => {
    "use strict";
    var t = e.i(794999),
        r = e.i(31588);
    let {
        Link: n,
        redirect: o,
        usePathname: a,
        useRouter: l
    } = (0, t.createNavigation)({
        locales: r.locales,
        localePrefix: r.localePrefix,
        defaultLocale: r.defaultLocale
    });
    e.s(["Link", 0, n, "usePathname", 0, a])
}, 825610, e => {
    "use strict";
    e.s(["trackingLocation", 0, {
        headerNavigationItem: "HeaderNavigationItem",
        headerSecondaryAction: "HeaderSecondaryAction",
        headerAction: "HeaderAction",
        headerDropdownMenuSectionAction: "HeaderDropdownMenuSectionAction",
        headerLogo: "HeaderLogo",
        headerNavigationLink: "HeaderNavigationLink",
        headerDropdownLink: "HeaderDropdownLink",
        headerMobileAction: "HeaderMobileAction",
        headerMobileSecondaryAction: "HeaderMobileSecondaryAction",
        headerMobilePanelLink: "HeaderMobilePanelLink",
        headerMobilePanelAction: "HeaderMobilePanelAction",
        headerMobilePanelListing: "HeaderMobilePanelListing",
        productFeatureCard: "ProductFeatureCard",
        productCardAction: "ProductCardAction",
        productCardFooterAction: "ProductCardFooterAction",
        pricingCardAction: "PricingCardAction",
        accordionAction: "AccordionAction",
        alertAction: "AlertAction",
        announcementBannerAction: "AnnouncementBannerAction",
        comparisonTableAction: "ComparisonTableAction",
        contentOverviewBack: "ContentOverviewBack",
        contentHeaderBack: "ContentHeaderBack",
        deluxeAnnouncementBannerAction: "DeluxeAnnouncementBannerAction",
        eventCardAction: "EventCardAction",
        featuredEventCardAction: "FeaturedEventCardAction",
        featureListAction: "FeatureListAction",
        fullWidthBlockAction: "FullWidthBlockAction",
        heroAction: "HeroAction",
        cardsAction: "CardsAction",
        uniteCard: "UniteCard",
        uniteCardSubscription: "UniteCardSubscription",
        uniteCards: "UniteCards",
        uniteCardsFilter: "UniteCardsFilter",
        uniteCardsAction: "UniteCardsAction",
        legalPageHeroAction: "LegalPageHeroAction",
        quickLinksAction: "QuickLinksAction",
        sectionTitleAction: "SectionTitleAction",
        spotlightAction: "SpotlightAction",
        bentoBoxCardAction: "BentoBoxCardAction"
    }])
}, 956874, (e, t, r) => {
    "use strict";

    function n() {
        return (n = Object.assign.bind()).apply(null, arguments)
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.extends = n
}, 422076, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.HEADER_LOCALE_NAME = "X-NEXT-INTL-LOCALE", r.LOCALE_SEGMENT_NAME = "locale"
}, 834576, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(634853),
        o = e.r(781086),
        a = e.r(422076);
    r.default = function() {
        let e, t = n.useParams();
        try {
            e = o.useLocale()
        } catch (r) {
            if ("string" != typeof(null == t ? void 0 : t[a.LOCALE_SEGMENT_NAME])) throw r;
            e = t[a.LOCALE_SEGMENT_NAME]
        }
        return e
    }
}, 925905, (e, t, r) => {
    "use strict";

    function n(e) {
        return () => {
            throw Error("`".concat(e, "` is not supported in Client Components."))
        }
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    let o = n("getFormatter"),
        a = n("getNow"),
        l = n("getTimeZone"),
        i = n("getMessages"),
        u = n("getLocale"),
        c = n("getTranslations"),
        s = n("unstable_setRequestLocale"),
        f = n("setRequestLocale");
    r.getFormatter = o, r.getLocale = u, r.getMessages = i, r.getNow = a, r.getRequestConfig = function() {
        return n("getRequestConfig")
    }, r.getTimeZone = l, r.getTranslations = c, r.setRequestLocale = f, r.unstable_setRequestLocale = s
}, 416699, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(925905);
    r.getFormatter = n.getFormatter, r.getLocale = n.getLocale, r.getMessages = n.getMessages, r.getNow = n.getNow, r.getRequestConfig = n.getRequestConfig, r.getTimeZone = n.getTimeZone, r.getTranslations = n.getTranslations, r.setRequestLocale = n.setRequestLocale, r.unstable_setRequestLocale = n.unstable_setRequestLocale
}, 92447, (e, t, r) => {
    "use strict";
    t.exports = e.r(416699)
}, 31588, e => {
    "use strict";
    var t = e.i(634853),
        r = e.i(92447);
    let n = ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"],
        o = {
            en: "en",
            fr: "fr",
            es: "es",
            de: "de",
            pt: "pt",
            ru: "ru",
            cn: "zh",
            ja: "ja",
            kr: "ko"
        };
    (0, r.getRequestConfig)(async ({
        requestLocale: e
    }) => {
        let r = await e;
        return n.includes(r) || (0, t.notFound)(), {
            locale: r,
            messages: {}
        }
    }), e.s(["defaultLocale", 0, "en", "localePrefix", 0, "as-needed", "localeToIETFTag", 0, o, "locales", 0, n, "oneTrustLocaleOverrides", 0, o])
}, 824627, e => {
    "use strict";
    var t = function(e, r) {
        return (t = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(e, t) {
            e.__proto__ = t
        } || function(e, t) {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        })(e, r)
    };

    function r(e, r) {
        if ("function" != typeof r && null !== r) throw TypeError("Class extends value " + String(r) + " is not a constructor or null");

        function n() {
            this.constructor = e
        }
        t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
    }
    var n = function() {
        return (n = Object.assign || function(e) {
            for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
        }).apply(this, arguments)
    };

    function o(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r
    }

    function a(e, t, r, n) {
        return new(r || (r = Promise))(function(o, a) {
            function l(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    a(e)
                }
            }

            function i(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    a(e)
                }
            }

            function u(e) {
                var t;
                e.done ? o(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(l, i)
            }
            u((n = n.apply(e, t || [])).next())
        })
    }

    function l(e, t) {
        var r, n, o, a = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            },
            l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return l.next = i(0), l.throw = i(1), l.return = i(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
            return this
        }), l;

        function i(i) {
            return function(u) {
                var c = [i, u];
                if (r) throw TypeError("Generator is already executing.");
                for (; l && (l = 0, c[0] && (a = 0)), a;) try {
                    if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                    switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                        case 0:
                        case 1:
                            o = c;
                            break;
                        case 4:
                            return a.label++, {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            a.label++, n = c[1], c = [0];
                            continue;
                        case 7:
                            c = a.ops.pop(), a.trys.pop();
                            continue;
                        default:
                            if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                a = 0;
                                continue
                            }
                            if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                a.label = c[1];
                                break
                            }
                            if (6 === c[0] && a.label < o[1]) {
                                a.label = o[1], o = c;
                                break
                            }
                            if (o && a.label < o[2]) {
                                a.label = o[2], a.ops.push(c);
                                break
                            }
                            o[2] && a.ops.pop(), a.trys.pop();
                            continue
                    }
                    c = t.call(e, a)
                } catch (e) {
                    c = [6, e], n = 0
                } finally {
                    r = o = 0
                }
                if (5 & c[0]) throw c[1];
                return {
                    value: c[0] ? c[1] : void 0,
                    done: !0
                }
            }
        }
    }

    function i(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
            r = t && e[t],
            n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
            next: function() {
                return e && n >= e.length && (e = void 0), {
                    value: e && e[n++],
                    done: !e
                }
            }
        };
        throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }

    function u(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, a = r.call(e),
            l = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = a.next()).done;) l.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = a.return) && r.call(a)
            } finally {
                if (o) throw o.error
            }
        }
        return l
    }

    function c(e, t, r) {
        if (r || 2 == arguments.length)
            for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
    }

    function s(e) {
        return this instanceof s ? (this.v = e, this) : new s(e)
    }

    function f(e, t, r) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var n, o = r.apply(e, t || []),
            a = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", function(e) {
            return function(t) {
                return Promise.resolve(t).then(e, c)
            }
        }), n[Symbol.asyncIterator] = function() {
            return this
        }, n;

        function l(e, t) {
            o[e] && (n[e] = function(t) {
                return new Promise(function(r, n) {
                    a.push([e, t, r, n]) > 1 || i(e, t)
                })
            }, t && (n[e] = t(n[e])))
        }

        function i(e, t) {
            try {
                var r;
                (r = o[e](t)).value instanceof s ? Promise.resolve(r.value.v).then(u, c) : f(a[0][2], r)
            } catch (e) {
                f(a[0][3], e)
            }
        }

        function u(e) {
            i("next", e)
        }

        function c(e) {
            i("throw", e)
        }

        function f(e, t) {
            e(t), a.shift(), a.length && i(a[0][0], a[0][1])
        }
    }

    function d(e) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = i(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
            return this
        }, t);

        function n(r) {
            t[r] = e[r] && function(t) {
                return new Promise(function(n, o) {
                    var a, l, i;
                    a = n, l = o, i = (t = e[r](t)).done, Promise.resolve(t.value).then(function(e) {
                        a({
                            value: e,
                            done: i
                        })
                    }, l)
                })
            }
        }
    }
    "function" == typeof SuppressedError && SuppressedError, e.s(["__assign", () => n, "__asyncGenerator", () => f, "__asyncValues", () => d, "__await", () => s, "__awaiter", () => a, "__extends", () => r, "__generator", () => l, "__read", () => u, "__rest", () => o, "__spreadArray", () => c, "__values", () => i])
}, 271839, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(411378);

    function o({
        reason: e,
        children: t
    }) {
        if ("u" < typeof window) throw Object.defineProperty(new n.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return t
    }
}, 601833, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(615167),
        o = e.r(813298),
        a = e.r(842349),
        l = e.r(986264),
        i = e.r(876667);

    function u({
        moduleIds: e
    }) {
        if ("u" > typeof window) return null;
        let t = a.workAsyncStorage.getStore();
        if (void 0 === t) return null;
        let r = [];
        if (t.reactLoadableManifest && e) {
            let n = t.reactLoadableManifest;
            for (let t of e) {
                if (!n[t]) continue;
                let e = n[t].files;
                r.push(...e)
            }
        }
        if (0 === r.length) return null;
        let u = (0, i.getDeploymentIdQueryOrEmptyString)();
        return (0, n.jsx)(n.Fragment, {
            children: r.map(e => {
                let r = `${t.assetPrefix}/_next/${(0,l.encodeURIPath)(e)}${u}`;
                return e.endsWith(".css") ? (0, n.jsx)("link", {
                    precedence: "dynamic",
                    href: r,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce
                }, e) : ((0, o.preload)(r, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce
                }), null)
            })
        })
    }
}, 229742, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return c
        }
    });
    let n = e.r(615167),
        o = e.r(145158),
        a = e.r(271839),
        l = e.r(601833);

    function i(e) {
        return {
            default: e && "default" in e ? e.default : e
        }
    }
    let u = {
            loader: () => Promise.resolve(i(() => null)),
            loading: null,
            ssr: !0
        },
        c = function(e) {
            let t = {
                    ...u,
                    ...e
                },
                r = (0, o.lazy)(() => t.loader().then(i)),
                c = t.loading;

            function s(e) {
                let i = c ? (0, n.jsx)(c, {
                        isLoading: !0,
                        pastDelay: !0,
                        error: null
                    }) : null,
                    u = !t.ssr || !!t.loading,
                    s = u ? o.Suspense : o.Fragment,
                    f = t.ssr ? (0, n.jsxs)(n.Fragment, {
                        children: ["u" < typeof window ? (0, n.jsx)(l.PreloadChunks, {
                            moduleIds: t.modules
                        }) : null, (0, n.jsx)(r, {
                            ...e
                        })]
                    }) : (0, n.jsx)(a.BailoutToCSR, {
                        reason: "next/dynamic",
                        children: (0, n.jsx)(r, {
                            ...e
                        })
                    });
                return (0, n.jsx)(s, {
                    ...u ? {
                        fallback: i
                    } : {},
                    children: f
                })
            }
            return s.displayName = "LoadableComponent", s
        }
}, 614909, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(481258)._(e.r(229742));

    function o(e, t) {
        let r = {};
        "function" == typeof e && (r.loader = e);
        let o = {
            ...r,
            ...t
        };
        return (0, n.default)({
            ...o,
            modules: o.loadableGenerated?.modules
        })
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 73585, e => {
    "use strict";
    e.i(757249);
    var t = e.i(615167),
        r = e.i(145158),
        n = e.i(454895),
        o = e.i(480826),
        a = e.i(857982),
        l = e.i(58214),
        i = e.i(812064),
        u = r,
        c = e.i(8265);

    function s(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
    }
    class f extends u.Component {
        getSnapshotBeforeUpdate(e) {
            let t = this.props.childRef.current;
            if (t && e.isPresent && !this.props.isPresent) {
                let e = t.offsetParent,
                    r = (0, i.isHTMLElement)(e) && e.offsetWidth || 0,
                    n = this.props.sizeRef.current;
                n.height = t.offsetHeight || 0, n.width = t.offsetWidth || 0, n.top = t.offsetTop, n.left = t.offsetLeft, n.right = r - n.width - n.left
            }
            return null
        }
        componentDidUpdate() {}
        render() {
            return this.props.children
        }
    }

    function d({
        children: e,
        isPresent: n,
        anchorX: o,
        root: a
    }) {
        let l = (0, u.useId)(),
            i = (0, u.useRef)(null),
            d = (0, u.useRef)({
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                right: 0
            }),
            {
                nonce: p
            } = (0, u.useContext)(c.MotionConfigContext),
            h = function(...e) {
                return r.useCallback(function(...e) {
                    return t => {
                        let r = !1,
                            n = e.map(e => {
                                let n = s(e, t);
                                return r || "function" != typeof n || (r = !0), n
                            });
                        if (r) return () => {
                            for (let t = 0; t < n.length; t++) {
                                let r = n[t];
                                "function" == typeof r ? r() : s(e[t], null)
                            }
                        }
                    }
                }(...e), e)
            }(i, e?.ref);
        return (0, u.useInsertionEffect)(() => {
            let {
                width: e,
                height: t,
                top: r,
                left: u,
                right: c
            } = d.current;
            if (n || !i.current || !e || !t) return;
            let s = "left" === o ? `left: ${u}` : `right: ${c}`;
            i.current.dataset.motionPopId = l;
            let f = document.createElement("style");
            p && (f.nonce = p);
            let h = a ?? document.head;
            return h.appendChild(f), f.sheet && f.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${t}px !important;
            ${s}px !important;
            top: ${r}px !important;
          }
        `), () => {
                h.contains(f) && h.removeChild(f)
            }
        }, [n]), (0, t.jsx)(f, {
            isPresent: n,
            childRef: i,
            sizeRef: d,
            children: u.cloneElement(e, {
                ref: h
            })
        })
    }
    let p = ({
        children: e,
        initial: n,
        isPresent: a,
        onExitComplete: i,
        custom: u,
        presenceAffectsLayout: c,
        mode: s,
        anchorX: f,
        root: p
    }) => {
        let m = (0, o.useConstant)(h),
            y = (0, r.useId)(),
            g = !0,
            P = (0, r.useMemo)(() => (g = !1, {
                id: y,
                initial: n,
                isPresent: a,
                custom: u,
                onExitComplete: e => {
                    for (let t of (m.set(e, !0), m.values()))
                        if (!t) return;
                    i && i()
                },
                register: e => (m.set(e, !1), () => m.delete(e))
            }), [a, m, i]);
        return c && g && (P = {
            ...P
        }), (0, r.useMemo)(() => {
            m.forEach((e, t) => m.set(t, !1))
        }, [a]), r.useEffect(() => {
            a || m.size || !i || i()
        }, [a]), "popLayout" === s && (e = (0, t.jsx)(d, {
            isPresent: a,
            anchorX: f,
            root: p,
            children: e
        })), (0, t.jsx)(l.PresenceContext.Provider, {
            value: P,
            children: e
        })
    };

    function h() {
        return new Map
    }
    var m = e.i(108830);
    let y = e => e.key || "";

    function g(e) {
        let t = [];
        return r.Children.forEach(e, e => {
            (0, r.isValidElement)(e) && t.push(e)
        }), t
    }
    let P = ({
        children: e,
        custom: l,
        initial: i = !0,
        onExitComplete: u,
        presenceAffectsLayout: c = !0,
        mode: s = "sync",
        propagate: f = !1,
        anchorX: d = "left",
        root: h
    }) => {
        let [P, v] = (0, m.usePresence)(f), b = (0, r.useMemo)(() => g(e), [e]), x = f && !P ? [] : b.map(y), _ = (0, r.useRef)(!0), L = (0, r.useRef)(b), A = (0, o.useConstant)(() => new Map), [C, j] = (0, r.useState)(b), [O, w] = (0, r.useState)(b);
        (0, a.useIsomorphicLayoutEffect)(() => {
            _.current = !1, L.current = b;
            for (let e = 0; e < O.length; e++) {
                let t = y(O[e]);
                x.includes(t) ? A.delete(t) : !0 !== A.get(t) && A.set(t, !1)
            }
        }, [O, x.length, x.join("-")]);
        let M = [];
        if (b !== C) {
            let e = [...b];
            for (let t = 0; t < O.length; t++) {
                let r = O[t],
                    n = y(r);
                x.includes(n) || (e.splice(t, 0, r), M.push(r))
            }
            return "wait" === s && M.length && (e = M), w(g(e)), j(b), null
        }
        let {
            forceRender: R
        } = (0, r.useContext)(n.LayoutGroupContext);
        return (0, t.jsx)(t.Fragment, {
            children: O.map(e => {
                let r = y(e),
                    n = (!f || !!P) && (b === O || x.includes(r));
                return (0, t.jsx)(p, {
                    isPresent: n,
                    initial: (!_.current || !!i) && void 0,
                    custom: l,
                    presenceAffectsLayout: c,
                    mode: s,
                    root: h,
                    onExitComplete: n ? void 0 : () => {
                        if (!A.has(r)) return;
                        A.set(r, !0);
                        let e = !0;
                        A.forEach(t => {
                            t || (e = !1)
                        }), e && (R?.(), w(L.current), f && v?.(), u && u())
                    },
                    anchorX: d,
                    children: e
                }, r)
            })
        })
    };
    e.s(["AnimatePresence", () => P], 73585)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "949d6ee3-bfd2-51c2-b771-ed1bf986055a")
    } catch (e) {}
}();
//# debugId=949d6ee3-bfd2-51c2-b771-ed1bf986055a