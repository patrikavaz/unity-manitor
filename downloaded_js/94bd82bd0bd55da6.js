(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 987559, (e, t, r) => {
    t.exports = e.r(884022)
}, 722978, e => {
    "use strict";

    function t() {
        for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
            var r, n, l = "";
            if ("string" == typeof t || "number" == typeof t) l += t;
            else if ("object" == typeof t)
                if (Array.isArray(t))
                    for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (l && (l += " "), l += n);
                else
                    for (r in t) t[r] && (l && (l += " "), l += r);
            return l
        }(e)) && (n && (n += " "), n += t);
        return n
    }
    e.s(["clsx", () => t, "default", 0, t])
}, 117033, (e, t, r) => {
    "use strict";

    function n() {
        return (n = Object.assign.bind()).apply(null, arguments)
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.extends = n
}, 970319, (e, t, r) => {
    "use strict";

    function n(e) {
        return !(null != e && !e) && {
            name: "NEXT_LOCALE",
            maxAge: 31536e3,
            sameSite: "lax",
            ..."object" == typeof e && e
        }
    }

    function l(e) {
        return "object" == typeof e ? e : {
            mode: e || "always"
        }
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.receiveLocaleCookie = n, r.receiveLocalePrefixConfig = l, r.receiveRoutingConfig = function(e) {
        var t, r;
        return {
            ...e,
            localePrefix: l(e.localePrefix),
            localeCookie: n(e.localeCookie),
            localeDetection: null == (t = e.localeDetection) || t,
            alternateLinks: null == (r = e.alternateLinks) || r
        }
    }
}, 537692, (e, t, r) => {
    "use strict";
    r.IntlContext = e.r(107579).createContext(void 0)
}, 425351, (e, t, r) => {
    "use strict";
    var n = e.r(107579),
        l = e.r(537692);

    function i() {
        let e = n.useContext(l.IntlContext);
        if (!e) throw Error(void 0);
        return e
    }
    r.useIntlContext = i, r.useLocale = function() {
        return i().locale
    }
}, 755401, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(425351);
    e.r(107579), e.r(537692), r.useLocale = n.useLocale
}, 169017, (e, t, r) => {
    "use strict";
    t.exports = e.r(755401)
}, 235736, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.HEADER_LOCALE_NAME = "X-NEXT-INTL-LOCALE", r.LOCALE_SEGMENT_NAME = "locale"
}, 349646, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(987559),
        l = e.r(169017),
        i = e.r(235736);
    r.default = function() {
        let e, t = n.useParams();
        try {
            e = l.useLocale()
        } catch (r) {
            if ("string" != typeof(null == t ? void 0 : t[i.LOCALE_SEGMENT_NAME])) throw r;
            e = t[i.LOCALE_SEGMENT_NAME]
        }
        return e
    }
}, 469844, (e, t, r) => {
    "use strict";
    var n = e.i(252495);

    function l(e) {
        let t;
        return ("object" == typeof e ? null == e.host && null == e.hostname : !/^[a-z]+:/i.test(e)) && (null == (t = "object" == typeof e ? e.pathname : e) || !!t.startsWith("/"))
    }

    function i(e, t) {
        let r;
        return "string" == typeof e ? r = a(t, e) : (r = {
            ...e
        }, e.pathname && (r.pathname = a(t, e.pathname))), r
    }

    function a(e, t) {
        let r = e;
        return /^\/(\?.*)?$/.test(t) && (t = t.slice(1)), r += t
    }

    function o(e, t) {
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

    function s(e) {
        return "/" + e
    }

    function c(e) {
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

    function m(e, t) {
        let r = e.split("/"),
            n = t.split("/"),
            l = Math.max(r.length, n.length);
        for (let e = 0; e < l; e++) {
            let t = r[e],
                l = n[e];
            if (!t && l) return -1;
            if (t && !l) return 1;
            if (t || l) {
                if (!p(t) && p(l)) return -1;
                if (p(t) && !p(l)) return 1;
                if (!d(t) && d(l)) return -1;
                if (d(t) && !d(l)) return 1;
                if (!f(t) && f(l)) return -1;
                if (f(t) && !f(l)) return 1
            }
        }
        return 0
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.getLocaleAsPrefix = s, r.getLocalePrefix = function(e, t) {
        var r;
        return "never" !== t.mode && (null == (r = t.prefixes) ? void 0 : r[e]) || s(e)
    }, r.getSortedPathnames = function(e) {
        return e.sort(m)
    }, r.hasPathnamePrefixed = o, r.isLocalizableHref = l, r.localizeHref = function(e, t) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
            n = arguments.length > 3 ? arguments[3] : void 0,
            a = arguments.length > 4 ? arguments[4] : void 0;
        if (!l(e)) return e;
        let u = o(a, n);
        return (t !== r || u) && null != a ? i(e, a) : e
    }, r.matchesPathname = function(e, t) {
        let r = u(e),
            n = u(t);
        return c(r).test(n)
    }, r.normalizeTrailingSlash = u, r.prefixHref = i, r.prefixPathname = a, r.templateToRegex = c, r.unprefixPathname = function(e, t) {
        return e.replace(new RegExp("^".concat(t)), "") || "/"
    }
}, 971814, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(107579);

    function l(e, t) {
        let r = (0, n.useRef)(null),
            l = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = l.current;
                t && (l.current = null, t())
            } else e && (r.current = i(e, n)), t && (l.current = i(t, n))
        }, [e, t])
    }

    function i(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        };
        {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 737446, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 933845, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return y
        },
        useLinkStatus: function() {
            return b
        }
    };
    for (var l in n) Object.defineProperty(r, l, {
        enumerable: !0,
        get: n[l]
    });
    let i = e.r(744066),
        a = e.r(853712),
        o = i._(e.r(107579)),
        u = e.r(375677),
        s = e.r(444501),
        c = e.r(971814),
        f = e.r(514413),
        d = e.r(79464);
    e.r(569733);
    let p = e.r(571670),
        m = e.r(800298),
        h = e.r(611500);

    function g(e) {
        return "string" == typeof e ? e : (0, u.formatUrl)(e)
    }

    function y(t) {
        var r;
        let n, l, i, [u, y] = (0, o.useOptimistic)(p.IDLE_LINK_STATUS),
            b = (0, o.useRef)(null),
            {
                href: x,
                as: _,
                children: P,
                prefetch: j = null,
                passHref: k,
                replace: w,
                shallow: O,
                scroll: C,
                onClick: E,
                onMouseEnter: L,
                onTouchStart: R,
                legacyBehavior: S = !1,
                onNavigate: M,
                ref: I,
                unstable_dynamicOnHover: A,
                ...N
            } = t;
        n = P, S && ("string" == typeof n || "number" == typeof n) && (n = (0, a.jsx)("a", {
            children: n
        }));
        let z = o.default.useContext(s.AppRouterContext),
            T = !1 !== j,
            $ = !1 !== j ? null === (r = j) || "auto" === r ? h.FetchStrategy.PPR : h.FetchStrategy.Full : h.FetchStrategy.PPR,
            {
                href: D,
                as: B
            } = o.default.useMemo(() => {
                let e = g(x);
                return {
                    href: e,
                    as: _ ? g(_) : e
                }
            }, [x, _]);
        if (S) {
            if (n?.$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            l = o.default.Children.only(n)
        }
        let U = S ? l && "object" == typeof l && l.ref : I,
            F = o.default.useCallback(e => (null !== z && (b.current = (0, p.mountLinkInstance)(e, D, z, $, T, y)), () => {
                b.current && ((0, p.unmountLinkForCurrentNavigation)(b.current), b.current = null), (0, p.unmountPrefetchableInstance)(e)
            }), [T, D, z, $, y]),
            H = {
                ref: (0, c.useMergedRef)(F, U),
                onClick(t) {
                    S || "function" != typeof E || E(t), S && l.props && "function" == typeof l.props.onClick && l.props.onClick(t), !z || t.defaultPrevented || function(t, r, n, l, i, a, u) {
                        if ("u" > typeof window) {
                            let s, {
                                nodeName: c
                            } = t.currentTarget;
                            if ("A" === c.toUpperCase() && ((s = t.currentTarget.getAttribute("target")) && "_self" !== s || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, m.isLocalURL)(r)) {
                                i && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), u) {
                                let e = !1;
                                if (u({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: f
                            } = e.r(662859);
                            o.default.startTransition(() => {
                                f(n || r, i ? "replace" : "push", a ?? !0, l.current)
                            })
                        }
                    }(t, D, B, b, w, C, M)
                },
                onMouseEnter(e) {
                    S || "function" != typeof L || L(e), S && l.props && "function" == typeof l.props.onMouseEnter && l.props.onMouseEnter(e), z && T && (0, p.onNavigationIntent)(e.currentTarget, !0 === A)
                },
                onTouchStart: function(e) {
                    S || "function" != typeof R || R(e), S && l.props && "function" == typeof l.props.onTouchStart && l.props.onTouchStart(e), z && T && (0, p.onNavigationIntent)(e.currentTarget, !0 === A)
                }
            };
        return (0, f.isAbsoluteUrl)(B) ? H.href = B : S && !k && ("a" !== l.type || "href" in l.props) || (H.href = (0, d.addBasePath)(B)), i = S ? o.default.cloneElement(l, H) : (0, a.jsx)("a", {
            ...N,
            ...H,
            children: n
        }), (0, a.jsx)(v.Provider, {
            value: u,
            children: i
        })
    }
    e.r(737446);
    let v = (0, o.createContext)(p.IDLE_LINK_STATUS),
        b = () => (0, o.useContext)(v);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 28332, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(469844);

    function l(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e)) Array.isArray(n) ? n.forEach(e => {
            t.append(r, String(e))
        }) : t.set(r, String(n));
        return "?" + t.toString()
    }
    r.applyPathnamePrefix = function(e, t, r, l, i) {
        let a, {
            mode: o
        } = r.localePrefix;
        if (void 0 !== i) a = i;
        else if (n.isLocalizableHref(e)) {
            if ("always" === o) a = !0;
            else if ("as-needed" === o) {
                let e = r.defaultLocale;
                if (r.domains) {
                    let t = r.domains.find(e => e.domain === l);
                    t && (e = t.defaultLocale)
                }
                a = e !== t
            }
        }
        return a ? n.prefixPathname(n.getLocalePrefix(t, r.localePrefix), e) : e
    }, r.compileLocalizedPathname = function(e) {
        let {
            pathname: t,
            locale: r,
            params: i,
            pathnames: a,
            query: o
        } = e;

        function u(e) {
            let t = a[e];
            return t || (t = e), t
        }

        function s(e) {
            let t = "string" == typeof e ? e : e[r];
            return i && Object.entries(i).forEach(e => {
                let r, n, [l, i] = e;
                Array.isArray(i) ? (r = "(\\[)?\\[...".concat(l, "\\](\\])?"), n = i.map(e => String(e)).join("/")) : (r = "\\[".concat(l, "\\]"), n = String(i)), t = t.replace(RegExp(r, "g"), n)
            }), t = t.replace(/\[\[\.\.\..+\]\]/g, ""), t = n.normalizeTrailingSlash(t), o && (t += l(o)), t
        }
        if ("string" == typeof t) return s(u(t));
        {
            let {
                pathname: e,
                ...r
            } = t;
            return {
                ...r,
                pathname: s(u(e))
            }
        }
    }, r.getBasePath = function(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window.location.pathname;
        return "/" === e ? t : t.replace(e, "")
    }, r.getRoute = function(e, t, r) {
        let l = n.getSortedPathnames(Object.keys(r)),
            i = decodeURI(t);
        for (let t of l) {
            let l = r[t];
            if ("string" == typeof l) {
                if (n.matchesPathname(l, i)) return t
            } else if (n.matchesPathname(l[e], i)) return t
        }
        return t
    }, r.normalizeNameOrNameWithParams = function(e) {
        return "string" == typeof e ? {
            pathname: e
        } : e
    }, r.serializeSearchParams = l
}, 462840, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(28332);
    r.default = function(e, t, r, l) {
        if (!e || l === r || null == l || !t) return;
        let i = n.getBasePath(t),
            {
                name: a,
                ...o
            } = e;
        o.path || (o.path = "" !== i ? i : "/");
        let u = "".concat(a, "=").concat(l, ";");
        for (let [e, t] of Object.entries(o)) u += "".concat("maxAge" === e ? "max-age" : e), "boolean" != typeof t && (u += "=" + t), u += ";";
        document.cookie = u
    }
}, 470420, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(117033),
        l = e.r(933845),
        i = e.r(987559),
        a = e.r(107579),
        o = e.r(349646),
        u = e.r(462840);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var c = s(l),
        f = s(a);
    r.default = a.forwardRef(function(e, t) {
        let {
            defaultLocale: r,
            href: l,
            locale: s,
            localeCookie: d,
            onClick: p,
            prefetch: m,
            unprefixed: h,
            ...g
        } = e, y = o.default(), v = null != s && s !== y, b = s || y, x = function() {
            let [e, t] = a.useState();
            return a.useEffect(() => {
                t(window.location.host)
            }, []), e
        }(), _ = x && h && (h.domains[x] === b || !Object.keys(h.domains).includes(x) && y === r && !s) ? h.pathname : l, P = i.usePathname();
        return v && (m = !1), f.default.createElement(c.default, n.extends({
            ref: t,
            href: _,
            hrefLang: v ? s : void 0,
            onClick: function(e) {
                u.default(d, P, y, s), p && p(e)
            },
            prefetch: m
        }, g))
    })
}, 841191, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(117033),
        l = e.r(987559),
        i = e.r(107579),
        a = e.r(349646),
        o = e.r(469844),
        u = e.r(470420),
        s = i && i.__esModule ? i : {
            default: i
        };
    let c = i.forwardRef(function(e, t) {
        let {
            href: r,
            locale: c,
            localeCookie: f,
            localePrefixMode: d,
            prefix: p,
            ...m
        } = e, h = l.usePathname(), g = a.default(), y = c !== g, [v, b] = i.useState(() => o.isLocalizableHref(r) && ("never" !== d || y) ? o.prefixHref(r, p) : r);
        return i.useEffect(() => {
            h && b(o.localizeHref(r, c, g, h, p))
        }, [g, r, c, h, p]), s.default.createElement(u.default, n.extends({
            ref: t,
            href: v,
            locale: c,
            localeCookie: f
        }, m))
    });
    c.displayName = "ClientLink", r.default = c
}, 445086, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(117033),
        l = e.r(107579),
        i = e.r(349646),
        a = e.r(469844),
        o = e.r(841191),
        u = l && l.__esModule ? l : {
            default: l
        };
    let s = l.forwardRef(function(e, t) {
        let {
            locale: r,
            localePrefix: l,
            ...s
        } = e, c = i.default(), f = r || c, d = a.getLocalePrefix(f, l);
        return u.default.createElement(o.default, n.extends({
            ref: t,
            locale: f,
            localePrefixMode: l.mode,
            prefix: d
        }, s))
    });
    s.displayName = "ClientLink", r.default = s
}, 162164, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(987559),
        l = e.r(469844);

    function i(e) {
        return function(t) {
            let r = l.getLocalePrefix(t.locale, t.localePrefix),
                n = "never" !== t.localePrefix.mode && l.isLocalizableHref(t.pathname) ? l.prefixPathname(r, t.pathname) : t.pathname;
            for (var i = arguments.length, a = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++) a[o - 1] = arguments[o];
            return e(n, ...a)
        }
    }
    let a = i(n.redirect);
    r.basePermanentRedirect = i(n.permanentRedirect), r.baseRedirect = a
}, 984471, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(349646),
        l = e.r(162164);

    function i(e) {
        return function(t) {
            let r;
            try {
                r = n.default()
            } catch (e) {
                throw e
            }
            for (var l = arguments.length, i = Array(l > 1 ? l - 1 : 0), a = 1; a < l; a++) i[a - 1] = arguments[a];
            return e({
                ...t,
                locale: r
            }, ...i)
        }
    }
    let a = i(l.baseRedirect);
    r.clientPermanentRedirect = i(l.basePermanentRedirect), r.clientRedirect = a
}, 744025, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(987559),
        l = e.r(107579),
        i = e.r(349646),
        a = e.r(469844);
    r.default = function(e) {
        let t = n.usePathname(),
            r = i.default();
        return l.useMemo(() => {
            if (!t) return t;
            let n = t,
                l = a.getLocalePrefix(r, e.localePrefix);
            if (a.hasPathnamePrefixed(l, t)) n = a.unprefixPathname(t, l);
            else if ("as-needed" === e.localePrefix.mode && e.localePrefix.prefixes) {
                let e = a.getLocaleAsPrefix(r);
                a.hasPathnamePrefixed(e, t) && (n = a.unprefixPathname(t, e))
            }
            return n
        }, [e.localePrefix, r, t])
    }
}, 131758, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(987559),
        l = e.r(107579),
        i = e.r(349646),
        a = e.r(469844),
        o = e.r(462840),
        u = e.r(28332);
    r.default = function(e, t) {
        let r = n.useRouter(),
            s = i.default(),
            c = n.usePathname();
        return l.useMemo(() => {
            function n(r) {
                return function(n, l) {
                    let i, f, d, p, {
                        locale: m,
                        ...h
                    } = l || {};
                    o.default(t, c, s, m);
                    let g = [(i = window.location.pathname, (f = u.getBasePath(c)) && (i = i.replace(f, "")), d = m || s, p = a.getLocalePrefix(d, e), a.localizeHref(n, d, s, i, p))];
                    return Object.keys(h).length > 0 && g.push(h), r(...g)
                }
            }
            return {
                ...r,
                push: n(r.push),
                replace: n(r.replace),
                prefetch: n(r.prefetch)
            }
        }, [s, t, e, c, r])
    }
}, 557074, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(117033),
        l = e.r(107579),
        i = e.r(970319),
        a = e.r(445086),
        o = e.r(984471),
        u = e.r(744025),
        s = e.r(131758),
        c = l && l.__esModule ? l : {
            default: l
        };
    r.default = function(e) {
        let t = i.receiveLocalePrefixConfig(null == e ? void 0 : e.localePrefix),
            r = i.receiveLocaleCookie(null == e ? void 0 : e.localeCookie),
            f = l.forwardRef(function(e, l) {
                return c.default.createElement(a.default, n.extends({
                    ref: l,
                    localeCookie: r,
                    localePrefix: t
                }, e))
            });
        return f.displayName = "Link", {
            Link: f,
            redirect: function(e) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++) n[l - 1] = arguments[l];
                return o.clientRedirect({
                    pathname: e,
                    localePrefix: t
                }, ...n)
            },
            permanentRedirect: function(e) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++) n[l - 1] = arguments[l];
                return o.clientPermanentRedirect({
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
                return s.default(t, r)
            }
        }
    }
}, 241613, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(117033),
        l = e.r(107579),
        i = e.r(349646),
        a = e.r(970319),
        o = e.r(28332),
        u = e.r(445086),
        s = e.r(984471),
        c = e.r(744025),
        f = e.r(131758),
        d = l && l.__esModule ? l : {
            default: l
        };
    r.default = function(e) {
        let t = a.receiveRoutingConfig(e),
            r = a.receiveLocaleCookie(e.localeCookie);

        function p() {
            let e = i.default();
            if (!t.locales.includes(e)) throw Error(void 0);
            return e
        }
        let m = l.forwardRef(function(e, l) {
            let {
                href: i,
                locale: a,
                ...s
            } = e, c = p(), f = a || c;
            return d.default.createElement(u.default, n.extends({
                ref: l,
                href: o.compileLocalizedPathname({
                    locale: f,
                    pathname: i,
                    params: "object" == typeof i ? i.params : void 0,
                    pathnames: t.pathnames
                }),
                locale: a,
                localeCookie: r,
                localePrefix: t.localePrefix
            }, s))
        });

        function h(e) {
            let {
                href: r,
                locale: n
            } = e;
            return o.compileLocalizedPathname({
                ...o.normalizeNameOrNameWithParams(r),
                locale: n,
                pathnames: t.pathnames
            })
        }
        return m.displayName = "Link", {
            Link: m,
            redirect: function(e) {
                let r = h({
                    href: e,
                    locale: p()
                });
                for (var n = arguments.length, l = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) l[i - 1] = arguments[i];
                return s.clientRedirect({
                    pathname: r,
                    localePrefix: t.localePrefix
                }, ...l)
            },
            permanentRedirect: function(e) {
                let r = h({
                    href: e,
                    locale: p()
                });
                for (var n = arguments.length, l = Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) l[i - 1] = arguments[i];
                return s.clientPermanentRedirect({
                    pathname: r,
                    localePrefix: t.localePrefix
                }, ...l)
            },
            usePathname: function() {
                let e = c.default(t),
                    r = p();
                return l.useMemo(() => e ? o.getRoute(r, e, t.pathnames) : e, [r, e])
            },
            useRouter: function() {
                let e = f.default(t.localePrefix, r),
                    n = p();
                return l.useMemo(() => ({
                    ...e,
                    push(t) {
                        for (var r, l = arguments.length, i = Array(l > 1 ? l - 1 : 0), a = 1; a < l; a++) i[a - 1] = arguments[a];
                        let o = h({
                            href: t,
                            locale: (null == (r = i[0]) ? void 0 : r.locale) || n
                        });
                        return e.push(o, ...i)
                    },
                    replace(t) {
                        for (var r, l = arguments.length, i = Array(l > 1 ? l - 1 : 0), a = 1; a < l; a++) i[a - 1] = arguments[a];
                        let o = h({
                            href: t,
                            locale: (null == (r = i[0]) ? void 0 : r.locale) || n
                        });
                        return e.replace(o, ...i)
                    },
                    prefetch(t) {
                        for (var r, l = arguments.length, i = Array(l > 1 ? l - 1 : 0), a = 1; a < l; a++) i[a - 1] = arguments[a];
                        let o = h({
                            href: t,
                            locale: (null == (r = i[0]) ? void 0 : r.locale) || n
                        });
                        return e.prefetch(o, ...i)
                    }
                }), [e, n])
            },
            getPathname: h
        }
    }
}, 321625, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(117033),
        l = e.r(987559),
        i = e.r(107579),
        a = e.r(970319),
        o = e.r(469844),
        u = e.r(470420),
        s = e.r(28332),
        c = i && i.__esModule ? i : {
            default: i
        };
    r.default = function(e, t) {
        let r = a.receiveRoutingConfig(t || {}),
            f = r.pathnames,
            d = "as-needed" === r.localePrefix.mode && r.domains || void 0,
            p = i.forwardRef(function(t, l) {
                let a, s, {
                    href: p,
                    locale: h,
                    ...g
                } = t;
                "object" == typeof p ? (a = p.pathname, s = p.params) : a = p;
                let y = o.isLocalizableHref(p),
                    v = e(),
                    b = v instanceof Promise ? i.use(v) : v,
                    x = y ? m({
                        locale: h || b,
                        href: null == f ? a : {
                            pathname: a,
                            params: s
                        }
                    }, null != h || d || void 0) : a;
                return c.default.createElement(u.default, n.extends({
                    ref: l,
                    defaultLocale: r.defaultLocale,
                    href: "object" == typeof p ? {
                        ...p,
                        pathname: x
                    } : x,
                    locale: h,
                    localeCookie: r.localeCookie,
                    unprefixed: d && y ? {
                        domains: r.domains.reduce((e, t) => (e[t.domain] = t.defaultLocale, e), {}),
                        pathname: m({
                            locale: b,
                            href: null == f ? a : {
                                pathname: a,
                                params: s
                            }
                        }, !1)
                    } : void 0
                }, g))
            });

        function m(e, t) {
            let n, {
                href: l,
                locale: i
            } = e;
            return null == f ? "object" == typeof l ? (n = l.pathname, l.query && (n += s.serializeSearchParams(l.query))) : n = l : n = s.compileLocalizedPathname({
                locale: i,
                ...s.normalizeNameOrNameWithParams(l),
                pathnames: r.pathnames
            }), s.applyPathnamePrefix(n, i, r, e.domain, t)
        }

        function h(e) {
            return function(t) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++) n[l - 1] = arguments[l];
                return e(m(t, t.domain ? void 0 : d), ...n)
            }
        }
        return {
            config: r,
            Link: p,
            redirect: h(l.redirect),
            permanentRedirect: h(l.permanentRedirect),
            getPathname: m
        }
    }
}, 522450, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(987559),
        l = e.r(107579),
        i = e.r(349646),
        a = e.r(321625),
        o = e.r(462840),
        u = e.r(28332),
        s = e.r(744025);
    r.default = function(e) {
        function t() {
            return i.default()
        }
        let {
            Link: r,
            config: c,
            getPathname: f,
            ...d
        } = a.default(t, e);
        return {
            ...d,
            Link: r,
            usePathname: function() {
                let e = s.default(c),
                    r = t();
                return l.useMemo(() => e && c.pathnames ? u.getRoute(r, e, c.pathnames) : e, [r, e])
            },
            useRouter: function() {
                let e = n.useRouter(),
                    r = t(),
                    i = n.usePathname();
                return l.useMemo(() => {
                    function t(e) {
                        return function(t, n) {
                            let {
                                locale: l,
                                ...a
                            } = n || {}, u = [f({
                                href: t,
                                locale: l || r,
                                domain: window.location.host
                            })];
                            Object.keys(a).length > 0 && u.push(a), e(...u), o.default(c.localeCookie, i, r, l)
                        }
                    }
                    return {
                        ...e,
                        push: t(e.push),
                        replace: t(e.replace),
                        prefetch: t(e.prefetch)
                    }
                }, [r, i, e])
            },
            getPathname: f
        }
    }
}, 918771, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(557074),
        l = e.r(241613),
        i = e.r(522450);
    r.createSharedPathnamesNavigation = n.default, r.createLocalizedPathnamesNavigation = l.default, r.createNavigation = i.default
}, 607586, (e, t, r) => {
    "use strict";
    t.exports = e.r(918771)
}, 278466, e => {
    "use strict";
    var t = e.i(607586);
    let r = ["en", "fr", "es", "de", "pt", "ru", "cn", "ja", "kr"],
        {
            Link: n,
            redirect: l,
            usePathname: i,
            useRouter: a
        } = (0, t.createNavigation)({
            locales: r,
            localePrefix: "as-needed",
            defaultLocale: "en"
        });
    e.s(["Link", 0, n, "locales", 0, r])
}, 749583, 939115, e => {
    "use strict";
    var t = e.i(853712),
        r = e.i(107579),
        n = e.i(278466),
        l = e.i(722978),
        i = e.i(449144),
        a = e.i(804553),
        o = e.i(835207),
        u = e.i(372737),
        s = e.i(336480),
        c = e.i(629779);
    let f = ({
        className: e = ""
    }) => (0, t.jsx)("svg", {
        width: "11",
        height: "11",
        viewBox: "0 0 11 11",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: e,
        children: (0, t.jsx)("path", {
            d: "M5.48038 10.3679L4.45623 9.35369L7.5237 6.28622H0.0712891V4.80469H7.5237L4.45623 1.74219L5.48038 0.723011L10.3028 5.54545L5.48038 10.3679Z"
        })
    });
    e.s(["ArrowIcon", 0, f], 939115);
    let d = (0, r.forwardRef)(function({
        children: e,
        active: r = !1,
        disabled: d = !1,
        variant: p = "primary",
        size: m = "medium",
        className: h = "",
        hasArrow: g = !1,
        href: y = "",
        rounded: v = !1,
        outlined: b = !1,
        tabIndex: x,
        tag: _ = "button",
        localePrefix: P,
        locale: j,
        prefetch: k,
        onPress: w,
        ...O
    }, C) {
        let E = (0, c.useObjectRef)(C),
            {
                buttonProps: L
            } = (0, i.useButton)({
                children: e,
                active: r,
                disabled: d,
                variant: p,
                size: m,
                className: h,
                hasArrow: g,
                rounded: v,
                outlined: b,
                tabIndex: x,
                elementType: y ? "a" : _,
                onPress: w,
                ...O
            }, E),
            {
                hoverProps: R,
                isHovered: S
            } = (0, a.useHover)({
                isDisabled: !1
            }),
            {
                pressProps: M
            } = (0, o.usePress)({
                onPress: w,
                isDisabled: d
            }),
            {
                isFocusVisible: I,
                focusProps: A
            } = (0, u.useFocusRing)(),
            N = (0, l.clsx)("cursor-pointer inline-block items-center outline-hidden overflow-x-hidden", {
                "btn-disabled": d
            }, {
                primary: "btn-primary",
                secondary: "btn-secondary"
            } [p], {
                small: "btn-sm caption-xs-bold px-3 py-2",
                medium: "btn-md caption-sm-bold px-3 py-2.5",
                large: "btn-lg caption-bold px-4 py-3.5",
                "x-large": "btn-xl caption-bold py-5 px-3"
            } [m], {
                "inline-flex": y
            }, {
                "rounded-full": v
            }, {
                "rounded-xs": !v
            }, {
                "btn-outlined border-solid border-2": b
            }, {
                "btn-arrow": g
            }, {
                hovered: S || r
            }, {
                "focused a11y-ring ": I
            }, h),
            z = (0, l.clsx)("btn-label transition-spacing flex duration-300 ease-in-out", {
                "btn-disabled": d
            }),
            T = (0, l.clsx)("right-arrow", "dark:fill-white", {
                "fill-black": "secondary" === p && !d,
                "fill-blue": "secondary" !== p && !d,
                "btn-disabled": d
            }),
            $ = "string" == typeof e ? e : "";
        return (delete L.onClick, y) ? (0, t.jsx)(n.Link, {
            locale: j,
            lang: j,
            ...(0, s.mergeProps)(L, R, A),
            ref: E,
            className: N,
            href: y,
            tabIndex: x,
            ...$ && {
                "aria-label": $
            },
            role: "button",
            localePrefix: P,
            prefetch: k,
            children: (0, t.jsxs)("div", {
                className: "btn-content flex items-center align-middle transition-transform duration-300",
                children: [g && (0, t.jsx)(f, {
                    className: "left-arrow fill-white dark:fill-black"
                }), (0, t.jsx)("span", {
                    className: z,
                    children: e
                }), g && (0, t.jsx)(f, {
                    className: T
                })]
            })
        }) : (0, t.jsx)(_, {
            ...(0, s.mergeProps)(L, R, A, M),
            ref: E,
            className: N,
            ...$ && {
                "aria-label": $
            },
            tabIndex: x,
            children: (0, t.jsxs)("div", {
                className: "btn-content flex items-center align-middle transition-transform duration-300",
                children: [g && (0, t.jsx)(f, {
                    className: "left-arrow fill-white dark:fill-black"
                }), (0, t.jsx)("span", {
                    className: z,
                    children: e
                }), g && (0, t.jsx)(f, {
                    className: T
                })]
            })
        })
    });
    e.s(["default", 0, d], 749583)
}, 923689, e => {
    "use strict";
    var t = e.i(107579);

    function r(e, r, n) {
        let [l, i] = (0, t.useState)(e || r), a = (0, t.useRef)(void 0 !== e), o = void 0 !== e;
        (0, t.useEffect)(() => {
            a.current, a.current = o
        }, [o]);
        let u = o ? e : l,
            s = (0, t.useCallback)((e, ...t) => {
                let r = (e, ...t) => {
                    n && !Object.is(u, e) && n(e, ...t), o || (u = e)
                };
                "function" == typeof e ? i((n, ...l) => {
                    let i = e(o ? u : n, ...l);
                    return (r(i, ...t), o) ? n : i
                }) : (o || i(e), r(e, ...t))
            }, [o, u, n]);
        return [u, s]
    }
    e.s(["useControlledState", () => r])
}, 780457, (e, t, r) => {
    "use strict";

    function n({
        widthInt: e,
        heightInt: t,
        blurWidth: r,
        blurHeight: n,
        blurDataURL: l,
        objectFit: i
    }) {
        let a = r ? 40 * r : e,
            o = n ? 40 * n : t,
            u = a && o ? `viewBox='0 0 ${a} ${o}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u?"none":"contain"===i?"xMidYMid":"cover"===i?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${l}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 601715, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        VALID_LOADERS: function() {
            return i
        },
        imageConfigDefault: function() {
            return a
        }
    };
    for (var l in n) Object.defineProperty(r, l, {
        enumerable: !0,
        get: n[l]
    });
    let i = ["default", "imgix", "cloudinary", "akamai", "custom"],
        a = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumRedirects: 3,
            maximumResponseBody: 5e7,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1
        }
}, 590173, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "getImgProps", {
        enumerable: !0,
        get: function() {
            return s
        }
    }), e.r(569733);
    let n = e.r(543411),
        l = e.r(780457),
        i = e.r(601715),
        a = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function o(e) {
        return void 0 !== e.default
    }

    function u(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function s({
        src: e,
        sizes: t,
        unoptimized: r = !1,
        priority: s = !1,
        preload: c = !1,
        loading: f,
        className: d,
        quality: p,
        width: m,
        height: h,
        fill: g = !1,
        style: y,
        overrideSrc: v,
        onLoad: b,
        onLoadingComplete: x,
        placeholder: _ = "empty",
        blurDataURL: P,
        fetchPriority: j,
        decoding: k = "async",
        layout: w,
        objectFit: O,
        objectPosition: C,
        lazyBoundary: E,
        lazyRoot: L,
        ...R
    }, S) {
        var M;
        let I, A, N, {
                imgConf: z,
                showAltText: T,
                blurComplete: $,
                defaultLoader: D
            } = S,
            B = z || i.imageConfigDefault;
        if ("allSizes" in B) I = B;
        else {
            let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
                t = B.deviceSizes.sort((e, t) => e - t),
                r = B.qualities?.sort((e, t) => e - t);
            I = {
                ...B,
                allSizes: e,
                deviceSizes: t,
                qualities: r
            }
        }
        if (void 0 === D) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let U = R.loader || D;
        delete R.loader, delete R.srcSet;
        let F = "__next_img_default" in U;
        if (F) {
            if ("custom" === I.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = U;
            U = t => {
                let {
                    config: r,
                    ...n
                } = t;
                return e(n)
            }
        }
        if (w) {
            "fill" === w && (g = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            } [w];
            e && (y = {
                ...y,
                ...e
            });
            let r = {
                responsive: "100vw",
                fill: "100vw"
            } [w];
            r && !t && (t = r)
        }
        let H = "",
            q = u(m),
            W = u(h);
        if ((M = e) && "object" == typeof M && (o(M) || void 0 !== M.src)) {
            let t = o(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (A = t.blurWidth, N = t.blurHeight, P = P || t.blurDataURL, H = t.src, !g)
                if (q || W) {
                    if (q && !W) {
                        let e = q / t.width;
                        W = Math.round(t.height * e)
                    } else if (!q && W) {
                        let e = W / t.height;
                        q = Math.round(t.width * e)
                    }
                } else q = t.width, W = t.height
        }
        let G = !s && !c && ("lazy" === f || void 0 === f);
        (!(e = "string" == typeof e ? e : H) || e.startsWith("data:") || e.startsWith("blob:")) && (r = !0, G = !1), I.unoptimized && (r = !0), F && !I.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (r = !0);
        let X = u(p),
            K = Object.assign(g ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: O,
                objectPosition: C
            } : {}, T ? {} : {
                color: "transparent"
            }, y),
            V = $ || "empty" === _ ? null : "blur" === _ ? `url("data:image/svg+xml;charset=utf-8,${(0,l.getImageBlurSvg)({widthInt:q,heightInt:W,blurWidth:A,blurHeight:N,blurDataURL:P||"",objectFit:K.objectFit})}")` : `url("${_}")`,
            J = a.includes(K.objectFit) ? "fill" === K.objectFit ? "100% 100%" : "cover" : K.objectFit,
            Q = V ? {
                backgroundSize: J,
                backgroundPosition: K.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: V
            } : {},
            Y = function({
                config: e,
                src: t,
                unoptimized: r,
                width: l,
                quality: i,
                sizes: a,
                loader: o
            }) {
                if (r) {
                    let e = (0, n.getDeploymentId)();
                    if (t.startsWith("/") && !t.startsWith("//") && e) {
                        let r = t.includes("?") ? "&" : "?";
                        t = `${t}${r}dpl=${e}`
                    }
                    return {
                        src: t,
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let {
                    widths: u,
                    kind: s
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, r, n) {
                    if (n) {
                        let r = /(^|\s)(1?\d?\d)vw/g,
                            l = [];
                        for (let e; e = r.exec(n);) l.push(parseInt(e[2]));
                        if (l.length) {
                            let r = .01 * Math.min(...l);
                            return {
                                widths: t.filter(t => t >= e[0] * r),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof r ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([r, 2 * r].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, l, a), c = u.length - 1;
                return {
                    sizes: a || "w" !== s ? a : "100vw",
                    srcSet: u.map((r, n) => `${o({config:e,src:t,quality:i,width:r})} ${"w"===s?r:n+1}${s}`).join(", "),
                    src: o({
                        config: e,
                        src: t,
                        quality: i,
                        width: u[c]
                    })
                }
            }({
                config: I,
                src: e,
                unoptimized: r,
                width: q,
                quality: X,
                sizes: t,
                loader: U
            }),
            Z = G ? "lazy" : f;
        return {
            props: {
                ...R,
                loading: Z,
                fetchPriority: j,
                width: q,
                height: W,
                decoding: k,
                className: d,
                style: {
                    ...K,
                    ...Q
                },
                sizes: Y.sizes,
                srcSet: Y.srcSet,
                src: v || Y.src
            },
            meta: {
                unoptimized: r,
                preload: c || s,
                placeholder: _,
                fill: g
            }
        }
    }
}, 143907, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(107579),
        l = "u" < typeof window,
        i = l ? () => {} : n.useLayoutEffect,
        a = l ? () => {} : n.useEffect;

    function o(e) {
        let {
            headManager: t,
            reduceComponentsToState: r
        } = e;

        function o() {
            if (t && t.mountedInstances) {
                let e = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(r(e))
            }
        }
        return l && (t?.mountedInstances?.add(e.children), o()), i(() => (t?.mountedInstances?.add(e.children), () => {
            t?.mountedInstances?.delete(e.children)
        })), i(() => (t && (t._pendingUpdate = o), () => {
            t && (t._pendingUpdate = o)
        })), a(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 849918, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return h
        },
        defaultHead: function() {
            return f
        }
    };
    for (var l in n) Object.defineProperty(r, l, {
        enumerable: !0,
        get: n[l]
    });
    let i = e.r(481258),
        a = e.r(744066),
        o = e.r(853712),
        u = a._(e.r(107579)),
        s = i._(e.r(143907)),
        c = e.r(906042);

    function f() {
        return [(0, o.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, o.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function d(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === u.default.Fragment ? e.concat(u.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(569733);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function m(e) {
        let t, r, n, l;
        return e.reduce(d, []).reverse().concat(f().reverse()).filter((t = new Set, r = new Set, n = new Set, l = {}, e => {
            let i = !0,
                a = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                a = !0;
                let r = e.key.slice(e.key.indexOf("$") + 1);
                t.has(r) ? i = !1 : t.add(r)
            }
            switch (e.type) {
                case "title":
                case "base":
                    r.has(e.type) ? i = !1 : r.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, r = p.length; t < r; t++) {
                        let r = p[t];
                        if (e.props.hasOwnProperty(r))
                            if ("charSet" === r) n.has(r) ? i = !1 : n.add(r);
                            else {
                                let t = e.props[r],
                                    n = l[r] || new Set;
                                ("name" !== r || !a) && n.has(t) ? i = !1 : (n.add(t), l[r] = n)
                            }
                    }
            }
            return i
        })).reverse().map((e, t) => {
            let r = e.key || t;
            return u.default.cloneElement(e, {
                key: r
            })
        })
    }
    let h = function({
        children: e
    }) {
        let t = (0, u.useContext)(c.HeadManagerContext);
        return (0, o.jsx)(s.default, {
            reduceComponentsToState: m,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 587247, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = e.r(481258)._(e.r(107579)),
        l = e.r(601715),
        i = n.default.createContext(l.imageConfigDefault)
}, 191461, (e, t, r) => {
    "use strict";

    function n(e, t) {
        let r = e || 75;
        return t?.qualities?.length ? t.qualities.reduce((e, t) => Math.abs(t - r) < Math.abs(e - r) ? t : e, 0) : r
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 849384, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(191461),
        l = e.r(543411);

    function i({
        config: e,
        src: t,
        width: r,
        quality: i
    }) {
        if (t.startsWith("/") && t.includes("?") && e.localPatterns?.length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let a = (0, n.findClosestQuality)(i, e),
            o = (0, l.getDeploymentId)();
        return `${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${a}${t.startsWith("/")&&o?`&dpl=${o}`:""}`
    }
    i.__next_img_default = !0;
    let a = i
}, 316519, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "Image", {
        enumerable: !0,
        get: function() {
            return x
        }
    });
    let n = e.r(481258),
        l = e.r(744066),
        i = e.r(853712),
        a = l._(e.r(107579)),
        o = n._(e.r(206276)),
        u = n._(e.r(849918)),
        s = e.r(590173),
        c = e.r(601715),
        f = e.r(587247);
    e.r(569733);
    let d = e.r(103035),
        p = n._(e.r(849384)),
        m = e.r(971814),
        h = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1
        };

    function g(e, t, r, n, l, i, a) {
        let o = e?.src;
        e && e["data-loaded-src"] !== o && (e["data-loaded-src"] = o, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && l(!0), r?.current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let n = !1,
                        l = !1;
                    r.current({
                        ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => n,
                        isPropagationStopped: () => l,
                        persist: () => {},
                        preventDefault: () => {
                            n = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            l = !0, t.stopPropagation()
                        }
                    })
                }
                n?.current && n.current(e)
            }
        }))
    }

    function y(e) {
        return a.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let v = (0, a.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: r,
        height: n,
        width: l,
        decoding: o,
        className: u,
        style: s,
        fetchPriority: c,
        placeholder: f,
        loading: d,
        unoptimized: p,
        fill: h,
        onLoadRef: v,
        onLoadingCompleteRef: b,
        setBlurComplete: x,
        setShowAltText: _,
        sizesInput: P,
        onLoad: j,
        onError: k,
        ...w
    }, O) => {
        let C = (0, a.useCallback)(e => {
                e && (k && (e.src = e.src), e.complete && g(e, f, v, b, x, p, P))
            }, [e, f, v, b, x, k, p, P]),
            E = (0, m.useMergedRef)(O, C);
        return (0, i.jsx)("img", {
            ...w,
            ...y(c),
            loading: d,
            width: l,
            height: n,
            decoding: o,
            "data-nimg": h ? "fill" : "1",
            className: u,
            style: s,
            sizes: r,
            srcSet: t,
            src: e,
            ref: E,
            onLoad: e => {
                g(e.currentTarget, f, v, b, x, p, P)
            },
            onError: e => {
                _(!0), "empty" !== f && x(!0), k && k(e)
            }
        })
    });

    function b({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let r = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...y(t.fetchPriority)
        };
        return e && o.default.preload ? (o.default.preload(t.src, r), null) : (0, i.jsx)(u.default, {
            children: (0, i.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...r
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let x = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(d.RouterContext),
            n = (0, a.useContext)(f.ImageConfigContext),
            l = (0, a.useMemo)(() => {
                let e = h || n || c.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    r = e.deviceSizes.sort((e, t) => e - t),
                    l = e.qualities?.sort((e, t) => e - t);
                return {
                    ...e,
                    allSizes: t,
                    deviceSizes: r,
                    qualities: l,
                    localPatterns: "u" < typeof window ? n?.localPatterns : e.localPatterns
                }
            }, [n]),
            {
                onLoad: o,
                onLoadingComplete: u
            } = e,
            m = (0, a.useRef)(o);
        (0, a.useEffect)(() => {
            m.current = o
        }, [o]);
        let g = (0, a.useRef)(u);
        (0, a.useEffect)(() => {
            g.current = u
        }, [u]);
        let [y, x] = (0, a.useState)(!1), [_, P] = (0, a.useState)(!1), {
            props: j,
            meta: k
        } = (0, s.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: l,
            blurComplete: y,
            showAltText: _
        });
        return (0, i.jsxs)(i.Fragment, {
            children: [(0, i.jsx)(v, {
                ...j,
                unoptimized: k.unoptimized,
                placeholder: k.placeholder,
                fill: k.fill,
                onLoadRef: m,
                onLoadingCompleteRef: g,
                setBlurComplete: x,
                setShowAltText: P,
                sizesInput: e.sizes,
                ref: t
            }), k.preload ? (0, i.jsx)(b, {
                isAppRouter: !r,
                imgAttributes: j
            }) : null]
        })
    });
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 352115, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return c
        },
        getImageProps: function() {
            return s
        }
    };
    for (var l in n) Object.defineProperty(r, l, {
        enumerable: !0,
        get: n[l]
    });
    let i = e.r(481258),
        a = e.r(590173),
        o = e.r(316519),
        u = i._(e.r(849384));

    function s(e) {
        let {
            props: t
        } = (0, a.getImgProps)(e, {
            defaultLoader: u.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !1
            }
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return {
            props: t
        }
    }
    let c = o.Image
}, 993358, (e, t, r) => {
    t.exports = e.r(352115)
}, 658734, e => {
    "use strict";
    var t = e.i(107579),
        r = e.i(923689);

    function n(e) {
        let [n, l] = (0, r.useControlledState)(e.isOpen, e.defaultOpen || !1, e.onOpenChange), i = (0, t.useCallback)(() => {
            l(!0)
        }, [l]), a = (0, t.useCallback)(() => {
            l(!1)
        }, [l]), o = (0, t.useCallback)(() => {
            l(!n)
        }, [l, n]);
        return {
            isOpen: n,
            setOpen: l,
            open: i,
            close: a,
            toggle: o
        }
    }
    e.s(["useOverlayTriggerState", () => n])
}, 654816, e => {
    "use strict";
    var t = e.i(853712);

    function r(e) {
        return "span" === e._type && "text" in e && "string" == typeof e.text && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every(e => "string" == typeof e))
    }

    function n(e) {
        return "string" == typeof e._type && "@" !== e._type[0] && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every(e => "string" == typeof e._key)) && "children" in e && Array.isArray(e.children) && e.children.every(e => "object" == typeof e && "_type" in e)
    }

    function l(e) {
        return n(e) && "listItem" in e && "string" == typeof e.listItem && (typeof e.level > "u" || "number" == typeof e.level)
    }

    function i(e) {
        return "@list" === e._type
    }

    function a(e) {
        return "@span" === e._type
    }

    function o(e) {
        return "@text" === e._type
    }
    let u = ["strong", "em", "code", "underline", "strike-through"];

    function s(e, t, n) {
        if (!r(e) || !e.marks || !e.marks.length) return [];
        let l = e.marks.slice(),
            i = {};
        return l.forEach(e => {
            i[e] = 1;
            for (let l = t + 1; l < n.length; l++) {
                let t = n[l];
                if (t && r(t) && Array.isArray(t.marks) && -1 !== t.marks.indexOf(e)) i[e]++;
                else break
            }
        }), l.sort((e, t) => (function(e, t, r) {
            let n = e[t],
                l = e[r];
            if (n !== l) return l - n;
            let i = u.indexOf(t),
                a = u.indexOf(r);
            return i !== a ? i - a : t.localeCompare(r)
        })(i, e, t))
    }

    function c(e, t, r) {
        return {
            _type: "@list",
            _key: `${e._key||`${t}`}-parent`,
            mode: r,
            level: e.level || 1,
            listItem: e.listItem,
            children: [e]
        }
    }

    function f(e, t) {
        let n = t.level || 1,
            l = t.listItem || "normal",
            a = "string" == typeof t.listItem;
        if (i(e) && (e.level || 1) === n && a && (e.listItem || "normal") === l) return e;
        if (!("children" in e)) return;
        let o = e.children[e.children.length - 1];
        return o && !r(o) ? f(o, t) : void 0
    }
    var d = e.i(107579);
    let p = {
            textDecoration: "underline"
        },
        m = (e, t) => `[@portabletext/react] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
        h = e => m(`block type "${e}"`, "types");

    function g(e) {
        console.warn(e)
    }
    let y = {
            display: "none"
        },
        v = {
            types: {},
            block: {
                normal: ({
                    children: e
                }) => (0, t.jsx)("p", {
                    children: e
                }),
                blockquote: ({
                    children: e
                }) => (0, t.jsx)("blockquote", {
                    children: e
                }),
                h1: ({
                    children: e
                }) => (0, t.jsx)("h1", {
                    children: e
                }),
                h2: ({
                    children: e
                }) => (0, t.jsx)("h2", {
                    children: e
                }),
                h3: ({
                    children: e
                }) => (0, t.jsx)("h3", {
                    children: e
                }),
                h4: ({
                    children: e
                }) => (0, t.jsx)("h4", {
                    children: e
                }),
                h5: ({
                    children: e
                }) => (0, t.jsx)("h5", {
                    children: e
                }),
                h6: ({
                    children: e
                }) => (0, t.jsx)("h6", {
                    children: e
                })
            },
            marks: {
                em: ({
                    children: e
                }) => (0, t.jsx)("em", {
                    children: e
                }),
                strong: ({
                    children: e
                }) => (0, t.jsx)("strong", {
                    children: e
                }),
                code: ({
                    children: e
                }) => (0, t.jsx)("code", {
                    children: e
                }),
                underline: ({
                    children: e
                }) => (0, t.jsx)("span", {
                    style: p,
                    children: e
                }),
                "strike-through": ({
                    children: e
                }) => (0, t.jsx)("del", {
                    children: e
                }),
                link: ({
                    children: e,
                    value: r
                }) => (0, t.jsx)("a", {
                    href: null == r ? void 0 : r.href,
                    children: e
                })
            },
            list: {
                number: ({
                    children: e
                }) => (0, t.jsx)("ol", {
                    children: e
                }),
                bullet: ({
                    children: e
                }) => (0, t.jsx)("ul", {
                    children: e
                })
            },
            listItem: ({
                children: e
            }) => (0, t.jsx)("li", {
                children: e
            }),
            hardBreak: () => (0, t.jsx)("br", {}),
            unknownType: ({
                value: e,
                isInline: r
            }) => {
                let n = h(e._type);
                return r ? (0, t.jsx)("span", {
                    style: y,
                    children: n
                }) : (0, t.jsx)("div", {
                    style: y,
                    children: n
                })
            },
            unknownMark: ({
                markType: e,
                children: r
            }) => (0, t.jsx)("span", {
                className: `unknown__pt__mark__${e}`,
                children: r
            }),
            unknownList: ({
                children: e
            }) => (0, t.jsx)("ul", {
                children: e
            }),
            unknownListItem: ({
                children: e
            }) => (0, t.jsx)("li", {
                children: e
            }),
            unknownBlockStyle: ({
                children: e
            }) => (0, t.jsx)("p", {
                children: e
            })
        };

    function b(e, t, r) {
        let n = t[r],
            l = e[r];
        return "function" == typeof n || n && "function" == typeof l ? n : n ? {
            ...l,
            ...n
        } : l
    }

    function x({
        value: e,
        components: r,
        listNestingMode: n,
        onMissingComponent: i = g
    }) {
        let a = i || j,
            o = function(e, t) {
                let r, n = [];
                for (let o = 0; o < e.length; o++) {
                    let u = e[o];
                    if (u) {
                        var i, a;
                        if (!l(u)) {
                            n.push(u), r = void 0;
                            continue
                        }
                        if (!r) {
                            r = c(u, o, t), n.push(r);
                            continue
                        }
                        if (i = u, a = r, (i.level || 1) === a.level && i.listItem === a.listItem) {
                            r.children.push(u);
                            continue
                        }
                        if ((u.level || 1) > r.level) {
                            let e = c(u, o, t);
                            if ("html" === t) {
                                let t = r.children[r.children.length - 1],
                                    n = {
                                        ...t,
                                        children: [...t.children, e]
                                    };
                                r.children[r.children.length - 1] = n
                            } else r.children.push(e);
                            r = e;
                            continue
                        }
                        if ((u.level || 1) < r.level) {
                            let e = n[n.length - 1],
                                l = e && f(e, u);
                            if (l) {
                                (r = l).children.push(u);
                                continue
                            }
                            r = c(u, o, t), n.push(r);
                            continue
                        }
                        if (u.listItem !== r.listItem) {
                            let e = n[n.length - 1],
                                l = e && f(e, {
                                    level: u.level || 1
                                });
                            if (l && l.listItem === u.listItem) {
                                (r = l).children.push(u);
                                continue
                            }
                            r = c(u, o, t), n.push(r);
                            continue
                        }
                        console.warn("Unknown state encountered for block", u), n.push(u)
                    }
                }
                return n
            }(Array.isArray(e) ? e : [e], n || "html"),
            u = (0, d.useMemo)(() => r ? function(e, t) {
                let {
                    block: r,
                    list: n,
                    listItem: l,
                    marks: i,
                    types: a,
                    ...o
                } = t;
                return {
                    ...e,
                    block: b(e, t, "block"),
                    list: b(e, t, "list"),
                    listItem: b(e, t, "listItem"),
                    marks: b(e, t, "marks"),
                    types: b(e, t, "types"),
                    ...o
                }
            }(v, r) : v, [r]),
            s = (0, d.useMemo)(() => _(u, a), [u, a]),
            p = o.map((e, t) => s({
                node: e,
                index: t,
                isInline: !1,
                renderNode: s
            }));
        return (0, t.jsx)(t.Fragment, {
            children: p
        })
    }
    let _ = (e, r) => function u(s) {
        var c, f, d, p, g, y, v, b;
        let x, _, {
                node: j,
                index: k,
                isInline: w
            } = s,
            O = j._key || `node-${k}`;
        return i(j) ? function(n, l, i) {
            let a = n.children.map((e, t) => u({
                    node: e._key ? e : {
                        ...e,
                        _key: `li-${l}-${t}`
                    },
                    index: t,
                    isInline: !1
                })),
                o = e.list,
                s = ("function" == typeof o ? o : o[n.listItem]) || e.unknownList;
            if (s === e.unknownList) {
                let e = n.listItem || "bullet";
                r(m(`list style "${e}"`, "list"), {
                    nodeType: "listStyle",
                    type: e
                })
            }
            return (0, t.jsx)(s, {
                value: n,
                index: l,
                isInline: !1,
                renderNode: u,
                children: a
            }, i)
        }(j, k, O) : l(j) ? function(n, l, i) {
            let a = P({
                    node: n,
                    index: l,
                    isInline: !1,
                    renderNode: u
                }),
                o = e.listItem,
                s = ("function" == typeof o ? o : o[n.listItem]) || e.unknownListItem;
            if (s === e.unknownListItem) {
                let e = n.listItem || "bullet";
                r(m(`list item style "${e}"`, "listItem"), {
                    type: e,
                    nodeType: "listItemStyle"
                })
            }
            let c = a.children;
            if (n.style && "normal" !== n.style) {
                let {
                    listItem: e,
                    ...t
                } = n;
                c = u({
                    node: t,
                    index: l,
                    isInline: !1
                })
            }
            return (0, t.jsx)(s, {
                value: n,
                index: l,
                isInline: !1,
                renderNode: u,
                children: c
            }, i)
        }(j, k, O) : a(j) ? function(n, l, i) {
            let {
                markDef: s,
                markType: c,
                markKey: f
            } = n, d = e.marks[c] || e.unknownMark, p = n.children.map((e, t) => u({
                node: e,
                index: t,
                isInline: !0
            }));
            return d === e.unknownMark && r(m(`mark type "${c}"`, "marks"), {
                nodeType: "mark",
                type: c
            }), (0, t.jsx)(d, {
                text: function e(t) {
                    let r = "";
                    return t.children.forEach(t => {
                        o(t) ? r += t.text : a(t) && (r += e(t))
                    }), r
                }(n),
                value: s,
                markType: c,
                markKey: f,
                renderNode: u,
                children: p
            }, i)
        }(j, 0, O) : j._type in e.types ? (c = j, f = k, d = O, p = w, (x = e.types[c._type]) ? (0, t.jsx)(x, {
            value: c,
            isInline: p,
            index: f,
            renderNode: u
        }, d) : null) : n(j) ? function(n, l, i, a) {
            let {
                _key: o,
                ...s
            } = P({
                node: n,
                index: l,
                isInline: a,
                renderNode: u
            }), c = s.node.style || "normal", f = ("function" == typeof e.block ? e.block : e.block[c]) || e.unknownBlockStyle;
            return f === e.unknownBlockStyle && r(m(`block style "${c}"`, "block"), {
                nodeType: "blockStyle",
                type: c
            }), (0, t.jsx)(f, {
                ...s,
                value: s.node,
                renderNode: u
            }, i)
        }(j, k, O, w) : o(j) ? function(r, n) {
            if (r.text === `
`) {
                let r = e.hardBreak;
                return r ? (0, t.jsx)(r, {}, n) : `
`
            }
            return r.text
        }(j, O) : (g = j, y = k, v = O, b = w, r(h(g._type), {
            nodeType: "block",
            type: g._type
        }), _ = e.unknownType, (0, t.jsx)(_, {
            value: g,
            isInline: b,
            index: y,
            renderNode: u
        }, v))
    };

    function P(e) {
        let {
            node: t,
            index: n,
            isInline: l,
            renderNode: i
        } = e, a = (function(e) {
            var t;
            let {
                children: n
            } = e, l = e.markDefs ?? [];
            if (!n || !n.length) return [];
            let i = n.map(s),
                a = {
                    _type: "@span",
                    children: [],
                    markType: "<unknown>"
                },
                o = [a];
            for (let e = 0; e < n.length; e++) {
                let a = n[e];
                if (!a) continue;
                let u = i[e] || [],
                    s = 1;
                if (o.length > 1)
                    for (; s < o.length; s++) {
                        let e = (null == (t = o[s]) ? void 0 : t.markKey) || "",
                            r = u.indexOf(e);
                        if (-1 === r) break;
                        u.splice(r, 1)
                    }
                let c = (o = o.slice(0, s))[o.length - 1];
                if (c) {
                    for (let e of u) {
                        let t = null == l ? void 0 : l.find(t => t._key === e),
                            r = t ? t._type : e,
                            n = {
                                _type: "@span",
                                _key: a._key,
                                children: [],
                                markDef: t,
                                markType: r,
                                markKey: e
                            };
                        c.children.push(n), o.push(n), c = n
                    }
                    if (r(a)) {
                        let e = a.text.split(`
`);
                        for (let t = e.length; t-- > 1;) e.splice(t, 0, `
`);
                        c.children = c.children.concat(e.map(e => ({
                            _type: "@text",
                            text: e
                        })))
                    } else c.children = c.children.concat(a)
                }
            }
            return a.children
        })(t).map((e, t) => i({
            node: e,
            isInline: !0,
            index: t,
            renderNode: i
        }));
        return {
            _key: t._key || `block-${n}`,
            children: a,
            index: n,
            isInline: l,
            node: t
        }
    }

    function j() {}
    e.s(["PortableText", () => x], 654816)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a53820bb-533c-5777-9c81-9f7d79f08c4d")
    } catch (e) {}
}();
//# debugId=a53820bb-533c-5777-9c81-9f7d79f08c4d