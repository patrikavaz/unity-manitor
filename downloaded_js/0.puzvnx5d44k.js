(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 824627, e => {
    "use strict";
    var t = function(e, r) {
            return (t = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(e, t) {
                e.__proto__ = t
            } || function(e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            })(e, r)
        },
        r = function() {
            return (r = Object.assign || function(e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }).apply(this, arguments)
        };

    function n(e) {
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

    function o(e) {
        return this instanceof o ? (this.v = e, this) : new o(e)
    }
    "function" == typeof SuppressedError && SuppressedError, e.s(["__assign", () => r, "__asyncGenerator", 0, function(e, t, r) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var n, l = r.apply(e, t || []),
            a = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", function(e) {
            return function(t) {
                return Promise.resolve(t).then(e, f)
            }
        }), n[Symbol.asyncIterator] = function() {
            return this
        }, n;

        function i(e, t) {
            l[e] && (n[e] = function(t) {
                return new Promise(function(r, n) {
                    a.push([e, t, r, n]) > 1 || u(e, t)
                })
            }, t && (n[e] = t(n[e])))
        }

        function u(e, t) {
            try {
                var r;
                (r = l[e](t)).value instanceof o ? Promise.resolve(r.value.v).then(c, f) : s(a[0][2], r)
            } catch (e) {
                s(a[0][3], e)
            }
        }

        function c(e) {
            u("next", e)
        }

        function f(e) {
            u("throw", e)
        }

        function s(e, t) {
            e(t), a.shift(), a.length && u(a[0][0], a[0][1])
        }
    }, "__asyncValues", 0, function(e) {
        if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = n(e), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
            return this
        }, t);

        function o(r) {
            t[r] = e[r] && function(t) {
                return new Promise(function(n, o) {
                    var l, a, i;
                    l = n, a = o, i = (t = e[r](t)).done, Promise.resolve(t.value).then(function(e) {
                        l({
                            value: e,
                            done: i
                        })
                    }, a)
                })
            }
        }
    }, "__await", 0, o, "__awaiter", 0, function(e, t, r, n) {
        return new(r || (r = Promise))(function(o, l) {
            function a(e) {
                try {
                    u(n.next(e))
                } catch (e) {
                    l(e)
                }
            }

            function i(e) {
                try {
                    u(n.throw(e))
                } catch (e) {
                    l(e)
                }
            }

            function u(e) {
                var t;
                e.done ? o(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                    e(t)
                })).then(a, i)
            }
            u((n = n.apply(e, t || [])).next())
        })
    }, "__extends", 0, function(e, r) {
        if ("function" != typeof r && null !== r) throw TypeError("Class extends value " + String(r) + " is not a constructor or null");

        function n() {
            this.constructor = e
        }
        t(e, r), e.prototype = null === r ? Object.create(r) : (n.prototype = r.prototype, new n)
    }, "__generator", 0, function(e, t) {
        var r, n, o, l = {
                label: 0,
                sent: function() {
                    if (1 & o[0]) throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            },
            a = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return a.next = i(0), a.throw = i(1), a.return = i(2), "function" == typeof Symbol && (a[Symbol.iterator] = function() {
            return this
        }), a;

        function i(i) {
            return function(u) {
                var c = [i, u];
                if (r) throw TypeError("Generator is already executing.");
                for (; a && (a = 0, c[0] && (l = 0)), l;) try {
                    if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                    switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                        case 0:
                        case 1:
                            o = c;
                            break;
                        case 4:
                            return l.label++, {
                                value: c[1],
                                done: !1
                            };
                        case 5:
                            l.label++, n = c[1], c = [0];
                            continue;
                        case 7:
                            c = l.ops.pop(), l.trys.pop();
                            continue;
                        default:
                            if (!(o = (o = l.trys).length > 0 && o[o.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                l = 0;
                                continue
                            }
                            if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                                l.label = c[1];
                                break
                            }
                            if (6 === c[0] && l.label < o[1]) {
                                l.label = o[1], o = c;
                                break
                            }
                            if (o && l.label < o[2]) {
                                l.label = o[2], l.ops.push(c);
                                break
                            }
                            o[2] && l.ops.pop(), l.trys.pop();
                            continue
                    }
                    c = t.call(e, l)
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
    }, "__read", 0, function(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, l = r.call(e),
            a = [];
        try {
            for (;
                (void 0 === t || t-- > 0) && !(n = l.next()).done;) a.push(n.value)
        } catch (e) {
            o = {
                error: e
            }
        } finally {
            try {
                n && !n.done && (r = l.return) && r.call(l)
            } finally {
                if (o) throw o.error
            }
        }
        return a
    }, "__rest", 0, function(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && 0 > t.indexOf(n) && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++) 0 > t.indexOf(n[o]) && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
        return r
    }, "__spreadArray", 0, function(e, t, r) {
        if (r || 2 == arguments.length)
            for (var n, o = 0, l = t.length; o < l; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
    }, "__values", 0, n])
}, 430907, (e, t, r) => {
    t.exports = e.r(460337)
}, 722978, e => {
    "use strict";

    function t() {
        for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = function e(t) {
            var r, n, o = "";
            if ("string" == typeof t || "number" == typeof t) o += t;
            else if ("object" == typeof t)
                if (Array.isArray(t))
                    for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += " "), o += n);
                else
                    for (r in t) t[r] && (o && (o += " "), o += r);
            return o
        }(e)) && (n && (n += " "), n += t);
        return n
    }
    e.s(["clsx", 0, t, "default", 0, t])
}, 508671, (e, t, r) => {
    "use strict";

    function n() {
        return (n = Object.assign.bind()).apply(null, arguments)
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.extends = n
}, 308991, (e, t, r) => {
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
}, 654017, (e, t, r) => {
    "use strict";
    r.IntlContext = e.r(3931).createContext(void 0)
}, 485481, (e, t, r) => {
    "use strict";
    var n = e.r(3931),
        o = e.r(654017);

    function l() {
        let e = n.useContext(o.IntlContext);
        if (!e) throw Error(void 0);
        return e
    }
    r.useIntlContext = l, r.useLocale = function() {
        return l().locale
    }
}, 609533, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(485481);
    e.r(3931), e.r(654017), r.useLocale = n.useLocale
}, 299940, (e, t, r) => {
    "use strict";
    t.exports = e.r(609533)
}, 50800, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), r.HEADER_LOCALE_NAME = "X-NEXT-INTL-LOCALE", r.LOCALE_SEGMENT_NAME = "locale"
}, 167890, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(430907),
        o = e.r(299940),
        l = e.r(50800);
    r.default = function() {
        let e, t = n.useParams();
        try {
            e = o.useLocale()
        } catch (r) {
            if ("string" != typeof(null == t ? void 0 : t[l.LOCALE_SEGMENT_NAME])) throw r;
            e = t[l.LOCALE_SEGMENT_NAME]
        }
        return e
    }
}, 939881, (e, t, r) => {
    "use strict";
    var n = e.i(788727);

    function o(e) {
        let t;
        return ("object" == typeof e ? null == e.host && null == e.hostname : !/^[a-z]+:/i.test(e)) && (null == (t = "object" == typeof e ? e.pathname : e) || !!t.startsWith("/"))
    }

    function l(e, t) {
        let r;
        return "string" == typeof e ? r = a(t, e) : (r = {
            ...e
        }, e.pathname && (r.pathname = a(t, e.pathname))), r
    }

    function a(e, t) {
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

    function f(e) {
        let t = e.replace(/\[\[(\.\.\.[^\]]+)\]\]/g, "?(.*)").replace(/\[(\.\.\.[^\]]+)\]/g, "(.+)").replace(/\[([^\]]+)\]/g, "([^/]+)");
        return new RegExp("^".concat(t, "$"))
    }

    function s(e) {
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
                if (!s(t) && s(o)) return -1;
                if (s(t) && !s(o)) return 1
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
            a = arguments.length > 4 ? arguments[4] : void 0;
        if (!o(e)) return e;
        let u = i(a, n);
        return (t !== r || u) && null != a ? l(e, a) : e
    }, r.matchesPathname = function(e, t) {
        let r = u(e),
            n = u(t);
        return f(r).test(n)
    }, r.normalizeTrailingSlash = u, r.prefixHref = l, r.prefixPathname = a, r.templateToRegex = f, r.unprefixPathname = function(e, t) {
        return e.replace(new RegExp("^".concat(t)), "") || "/"
    }
}, 169085, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let n = e.r(3931);

    function o(e, t) {
        let r = (0, n.useRef)(null),
            o = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = o.current;
                t && (o.current = null, t())
            } else e && (r.current = l(e, n)), t && (o.current = l(t, n))
        }, [e, t])
    }

    function l(e, t) {
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
}, 885847, (e, t, r) => {
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
}, 133601, (e, t, r) => {
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
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let l = e.r(744066),
        a = e.r(500783),
        i = l._(e.r(3931)),
        u = e.r(481385),
        c = e.r(49548),
        f = e.r(169085),
        s = e.r(165748),
        d = e.r(712499);
    e.r(692846);
    let p = e.r(346954),
        h = e.r(427034),
        v = e.r(791456),
        m = e.r(980127);

    function y(t) {
        var r, n;
        let o, l, y, [b, E] = (0, i.useOptimistic)(h.IDLE_LINK_STATUS),
            _ = (0, i.useRef)(null),
            {
                href: N,
                as: P,
                children: x,
                prefetch: w = null,
                passHref: R,
                replace: L,
                shallow: T,
                scroll: S,
                onClick: O,
                onMouseEnter: C,
                onTouchStart: k,
                legacyBehavior: M = !1,
                onNavigate: A,
                transitionTypes: j,
                ref: F,
                unstable_dynamicOnHover: I,
                ...D
            } = t;
        o = x, M && ("string" == typeof o || "number" == typeof o) && (o = (0, a.jsx)("a", {
            children: o
        }));
        let z = i.default.useContext(c.AppRouterContext),
            K = !1 !== w,
            W = !1 !== w ? null === (n = w) || "auto" === n ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR,
            H = "string" == typeof(r = P || N) ? r : (0, u.formatUrl)(r);
        if (M) {
            if (o?.$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            l = i.default.Children.only(o)
        }
        let U = M ? l && "object" == typeof l && l.ref : F,
            B = i.default.useCallback(e => (null !== z && (_.current = (0, h.mountLinkInstance)(e, H, z, W, K, E)), () => {
                _.current && ((0, h.unmountLinkForCurrentNavigation)(_.current), _.current = null), (0, h.unmountPrefetchableInstance)(e)
            }), [K, H, z, W, E]),
            G = {
                ref: (0, f.useMergedRef)(B, U),
                onClick(t) {
                    M || "function" != typeof O || O(t), M && l.props && "function" == typeof l.props.onClick && l.props.onClick(t), !z || t.defaultPrevented || function(t, r, n, o, l, a, u) {
                        if ("u" > typeof window) {
                            let c, {
                                nodeName: f
                            } = t.currentTarget;
                            if ("A" === f.toUpperCase() && ((c = t.currentTarget.getAttribute("target")) && "_self" !== c || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, v.isLocalURL)(r)) {
                                o && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), a) {
                                let e = !1;
                                if (a({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: s
                            } = e.r(256998);
                            i.default.startTransition(() => {
                                s(r, o ? "replace" : "push", !1 === l ? p.ScrollBehavior.NoScroll : p.ScrollBehavior.Default, n.current, u)
                            })
                        }
                    }(t, H, _, L, S, A, j)
                },
                onMouseEnter(e) {
                    M || "function" != typeof C || C(e), M && l.props && "function" == typeof l.props.onMouseEnter && l.props.onMouseEnter(e), z && K && (0, h.onNavigationIntent)(e.currentTarget, !0 === I)
                },
                onTouchStart: function(e) {
                    M || "function" != typeof k || k(e), M && l.props && "function" == typeof l.props.onTouchStart && l.props.onTouchStart(e), z && K && (0, h.onNavigationIntent)(e.currentTarget, !0 === I)
                }
            };
        return (0, s.isAbsoluteUrl)(H) ? G.href = H : M && !R && ("a" !== l.type || "href" in l.props) || (G.href = (0, d.addBasePath)(H)), y = M ? i.default.cloneElement(l, G) : (0, a.jsx)("a", {
            ...D,
            ...G,
            children: o
        }), (0, a.jsx)(g.Provider, {
            value: b,
            children: y
        })
    }
    e.r(885847);
    let g = (0, i.createContext)(h.IDLE_LINK_STATUS),
        b = () => (0, i.useContext)(g);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 541329, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(939881);

    function o(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e)) Array.isArray(n) ? n.forEach(e => {
            t.append(r, String(e))
        }) : t.set(r, String(n));
        return "?" + t.toString()
    }
    r.applyPathnamePrefix = function(e, t, r, o, l) {
        let a, {
            mode: i
        } = r.localePrefix;
        if (void 0 !== l) a = l;
        else if (n.isLocalizableHref(e)) {
            if ("always" === i) a = !0;
            else if ("as-needed" === i) {
                let e = r.defaultLocale;
                if (r.domains) {
                    let t = r.domains.find(e => e.domain === o);
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
            params: l,
            pathnames: a,
            query: i
        } = e;

        function u(e) {
            let t = a[e];
            return t || (t = e), t
        }

        function c(e) {
            let t = "string" == typeof e ? e : e[r];
            return l && Object.entries(l).forEach(e => {
                let r, n, [o, l] = e;
                Array.isArray(l) ? (r = "(\\[)?\\[...".concat(o, "\\](\\])?"), n = l.map(e => String(e)).join("/")) : (r = "\\[".concat(o, "\\]"), n = String(l)), t = t.replace(RegExp(r, "g"), n)
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
            l = decodeURI(t);
        for (let t of o) {
            let o = r[t];
            if ("string" == typeof o) {
                if (n.matchesPathname(o, l)) return t
            } else if (n.matchesPathname(o[e], l)) return t
        }
        return t
    }, r.normalizeNameOrNameWithParams = function(e) {
        return "string" == typeof e ? {
            pathname: e
        } : e
    }, r.serializeSearchParams = o
}, 728215, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(541329);
    r.default = function(e, t, r, o) {
        if (!e || o === r || null == o || !t) return;
        let l = n.getBasePath(t),
            {
                name: a,
                ...i
            } = e;
        i.path || (i.path = "" !== l ? l : "/");
        let u = "".concat(a, "=").concat(o, ";");
        for (let [e, t] of Object.entries(i)) u += "".concat("maxAge" === e ? "max-age" : e), "boolean" != typeof t && (u += "=" + t), u += ";";
        document.cookie = u
    }
}, 55851, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(508671),
        o = e.r(133601),
        l = e.r(430907),
        a = e.r(3931),
        i = e.r(167890),
        u = e.r(728215);

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var f = c(o),
        s = c(a);
    r.default = a.forwardRef(function(e, t) {
        let {
            defaultLocale: r,
            href: o,
            locale: c,
            localeCookie: d,
            onClick: p,
            prefetch: h,
            unprefixed: v,
            ...m
        } = e, y = i.default(), g = null != c && c !== y, b = c || y, E = function() {
            let [e, t] = a.useState();
            return a.useEffect(() => {
                t(window.location.host)
            }, []), e
        }(), _ = E && v && (v.domains[E] === b || !Object.keys(v.domains).includes(E) && y === r && !c) ? v.pathname : o, N = l.usePathname();
        return g && (h = !1), s.default.createElement(f.default, n.extends({
            ref: t,
            href: _,
            hrefLang: g ? c : void 0,
            onClick: function(e) {
                u.default(d, N, y, c), p && p(e)
            },
            prefetch: h
        }, m))
    })
}, 488401, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(508671),
        o = e.r(430907),
        l = e.r(3931),
        a = e.r(167890),
        i = e.r(939881),
        u = e.r(55851),
        c = l && l.__esModule ? l : {
            default: l
        };
    let f = l.forwardRef(function(e, t) {
        let {
            href: r,
            locale: f,
            localeCookie: s,
            localePrefixMode: d,
            prefix: p,
            ...h
        } = e, v = o.usePathname(), m = a.default(), y = f !== m, [g, b] = l.useState(() => i.isLocalizableHref(r) && ("never" !== d || y) ? i.prefixHref(r, p) : r);
        return l.useEffect(() => {
            v && b(i.localizeHref(r, f, m, v, p))
        }, [m, r, f, v, p]), c.default.createElement(u.default, n.extends({
            ref: t,
            href: g,
            locale: f,
            localeCookie: s
        }, h))
    });
    f.displayName = "ClientLink", r.default = f
}, 64837, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(508671),
        o = e.r(3931),
        l = e.r(167890),
        a = e.r(939881),
        i = e.r(488401),
        u = o && o.__esModule ? o : {
            default: o
        };
    let c = o.forwardRef(function(e, t) {
        let {
            locale: r,
            localePrefix: o,
            ...c
        } = e, f = l.default(), s = r || f, d = a.getLocalePrefix(s, o);
        return u.default.createElement(i.default, n.extends({
            ref: t,
            locale: s,
            localePrefixMode: o.mode,
            prefix: d
        }, c))
    });
    c.displayName = "ClientLink", r.default = c
}, 502419, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(430907),
        o = e.r(939881);

    function l(e) {
        return function(t) {
            let r = o.getLocalePrefix(t.locale, t.localePrefix),
                n = "never" !== t.localePrefix.mode && o.isLocalizableHref(t.pathname) ? o.prefixPathname(r, t.pathname) : t.pathname;
            for (var l = arguments.length, a = Array(l > 1 ? l - 1 : 0), i = 1; i < l; i++) a[i - 1] = arguments[i];
            return e(n, ...a)
        }
    }
    let a = l(n.redirect);
    r.basePermanentRedirect = l(n.permanentRedirect), r.baseRedirect = a
}, 276516, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(167890),
        o = e.r(502419);

    function l(e) {
        return function(t) {
            let r;
            try {
                r = n.default()
            } catch (e) {
                throw e
            }
            for (var o = arguments.length, l = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) l[a - 1] = arguments[a];
            return e({
                ...t,
                locale: r
            }, ...l)
        }
    }
    let a = l(o.baseRedirect);
    r.clientPermanentRedirect = l(o.basePermanentRedirect), r.clientRedirect = a
}, 617984, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(430907),
        o = e.r(3931),
        l = e.r(167890),
        a = e.r(939881);
    r.default = function(e) {
        let t = n.usePathname(),
            r = l.default();
        return o.useMemo(() => {
            if (!t) return t;
            let n = t,
                o = a.getLocalePrefix(r, e.localePrefix);
            if (a.hasPathnamePrefixed(o, t)) n = a.unprefixPathname(t, o);
            else if ("as-needed" === e.localePrefix.mode && e.localePrefix.prefixes) {
                let e = a.getLocaleAsPrefix(r);
                a.hasPathnamePrefixed(e, t) && (n = a.unprefixPathname(t, e))
            }
            return n
        }, [e.localePrefix, r, t])
    }
}, 989969, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(430907),
        o = e.r(3931),
        l = e.r(167890),
        a = e.r(939881),
        i = e.r(728215),
        u = e.r(541329);
    r.default = function(e, t) {
        let r = n.useRouter(),
            c = l.default(),
            f = n.usePathname();
        return o.useMemo(() => {
            function n(r) {
                return function(n, o) {
                    let l, s, d, p, {
                        locale: h,
                        ...v
                    } = o || {};
                    i.default(t, f, c, h);
                    let m = [(l = window.location.pathname, (s = u.getBasePath(f)) && (l = l.replace(s, "")), d = h || c, p = a.getLocalePrefix(d, e), a.localizeHref(n, d, c, l, p))];
                    return Object.keys(v).length > 0 && m.push(v), r(...m)
                }
            }
            return {
                ...r,
                push: n(r.push),
                replace: n(r.replace),
                prefetch: n(r.prefetch)
            }
        }, [c, t, e, f, r])
    }
}, 360893, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(508671),
        o = e.r(3931),
        l = e.r(308991),
        a = e.r(64837),
        i = e.r(276516),
        u = e.r(617984),
        c = e.r(989969),
        f = o && o.__esModule ? o : {
            default: o
        };
    r.default = function(e) {
        let t = l.receiveLocalePrefixConfig(null == e ? void 0 : e.localePrefix),
            r = l.receiveLocaleCookie(null == e ? void 0 : e.localeCookie),
            s = o.forwardRef(function(e, o) {
                return f.default.createElement(a.default, n.extends({
                    ref: o,
                    localeCookie: r,
                    localePrefix: t
                }, e))
            });
        return s.displayName = "Link", {
            Link: s,
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
}, 190352, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(508671),
        o = e.r(3931),
        l = e.r(167890),
        a = e.r(308991),
        i = e.r(541329),
        u = e.r(64837),
        c = e.r(276516),
        f = e.r(617984),
        s = e.r(989969),
        d = o && o.__esModule ? o : {
            default: o
        };
    r.default = function(e) {
        let t = a.receiveRoutingConfig(e),
            r = a.receiveLocaleCookie(e.localeCookie);

        function p() {
            let e = l.default();
            if (!t.locales.includes(e)) throw Error(void 0);
            return e
        }
        let h = o.forwardRef(function(e, o) {
            let {
                href: l,
                locale: a,
                ...c
            } = e, f = p(), s = a || f;
            return d.default.createElement(u.default, n.extends({
                ref: o,
                href: i.compileLocalizedPathname({
                    locale: s,
                    pathname: l,
                    params: "object" == typeof l ? l.params : void 0,
                    pathnames: t.pathnames
                }),
                locale: a,
                localeCookie: r,
                localePrefix: t.localePrefix
            }, c))
        });

        function v(e) {
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
                let r = v({
                    href: e,
                    locale: p()
                });
                for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) o[l - 1] = arguments[l];
                return c.clientRedirect({
                    pathname: r,
                    localePrefix: t.localePrefix
                }, ...o)
            },
            permanentRedirect: function(e) {
                let r = v({
                    href: e,
                    locale: p()
                });
                for (var n = arguments.length, o = Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++) o[l - 1] = arguments[l];
                return c.clientPermanentRedirect({
                    pathname: r,
                    localePrefix: t.localePrefix
                }, ...o)
            },
            usePathname: function() {
                let e = f.default(t),
                    r = p();
                return o.useMemo(() => e ? i.getRoute(r, e, t.pathnames) : e, [r, e])
            },
            useRouter: function() {
                let e = s.default(t.localePrefix, r),
                    n = p();
                return o.useMemo(() => ({
                    ...e,
                    push(t) {
                        for (var r, o = arguments.length, l = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) l[a - 1] = arguments[a];
                        let i = v({
                            href: t,
                            locale: (null == (r = l[0]) ? void 0 : r.locale) || n
                        });
                        return e.push(i, ...l)
                    },
                    replace(t) {
                        for (var r, o = arguments.length, l = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) l[a - 1] = arguments[a];
                        let i = v({
                            href: t,
                            locale: (null == (r = l[0]) ? void 0 : r.locale) || n
                        });
                        return e.replace(i, ...l)
                    },
                    prefetch(t) {
                        for (var r, o = arguments.length, l = Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++) l[a - 1] = arguments[a];
                        let i = v({
                            href: t,
                            locale: (null == (r = l[0]) ? void 0 : r.locale) || n
                        });
                        return e.prefetch(i, ...l)
                    }
                }), [e, n])
            },
            getPathname: v
        }
    }
}, 524336, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(508671),
        o = e.r(430907),
        l = e.r(3931),
        a = e.r(308991),
        i = e.r(939881),
        u = e.r(55851),
        c = e.r(541329),
        f = l && l.__esModule ? l : {
            default: l
        };
    r.default = function(e, t) {
        let r = a.receiveRoutingConfig(t || {}),
            s = r.pathnames,
            d = "as-needed" === r.localePrefix.mode && r.domains || void 0,
            p = l.forwardRef(function(t, o) {
                let a, c, {
                    href: p,
                    locale: v,
                    ...m
                } = t;
                "object" == typeof p ? (a = p.pathname, c = p.params) : a = p;
                let y = i.isLocalizableHref(p),
                    g = e(),
                    b = g instanceof Promise ? l.use(g) : g,
                    E = y ? h({
                        locale: v || b,
                        href: null == s ? a : {
                            pathname: a,
                            params: c
                        }
                    }, null != v || d || void 0) : a;
                return f.default.createElement(u.default, n.extends({
                    ref: o,
                    defaultLocale: r.defaultLocale,
                    href: "object" == typeof p ? {
                        ...p,
                        pathname: E
                    } : E,
                    locale: v,
                    localeCookie: r.localeCookie,
                    unprefixed: d && y ? {
                        domains: r.domains.reduce((e, t) => (e[t.domain] = t.defaultLocale, e), {}),
                        pathname: h({
                            locale: b,
                            href: null == s ? a : {
                                pathname: a,
                                params: c
                            }
                        }, !1)
                    } : void 0
                }, m))
            });

        function h(e, t) {
            let n, {
                href: o,
                locale: l
            } = e;
            return null == s ? "object" == typeof o ? (n = o.pathname, o.query && (n += c.serializeSearchParams(o.query))) : n = o : n = c.compileLocalizedPathname({
                locale: l,
                ...c.normalizeNameOrNameWithParams(o),
                pathnames: r.pathnames
            }), c.applyPathnamePrefix(n, l, r, e.domain, t)
        }

        function v(e) {
            return function(t) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                return e(h(t, t.domain ? void 0 : d), ...n)
            }
        }
        return {
            config: r,
            Link: p,
            redirect: v(o.redirect),
            permanentRedirect: v(o.permanentRedirect),
            getPathname: h
        }
    }
}, 573457, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(430907),
        o = e.r(3931),
        l = e.r(167890),
        a = e.r(524336),
        i = e.r(728215),
        u = e.r(541329),
        c = e.r(617984);
    r.default = function(e) {
        function t() {
            return l.default()
        }
        let {
            Link: r,
            config: f,
            getPathname: s,
            ...d
        } = a.default(t, e);
        return {
            ...d,
            Link: r,
            usePathname: function() {
                let e = c.default(f),
                    r = t();
                return o.useMemo(() => e && f.pathnames ? u.getRoute(r, e, f.pathnames) : e, [r, e])
            },
            useRouter: function() {
                let e = n.useRouter(),
                    r = t(),
                    l = n.usePathname();
                return o.useMemo(() => {
                    function t(e) {
                        return function(t, n) {
                            let {
                                locale: o,
                                ...a
                            } = n || {}, u = [s({
                                href: t,
                                locale: o || r,
                                domain: window.location.host
                            })];
                            Object.keys(a).length > 0 && u.push(a), e(...u), i.default(f.localeCookie, l, r, o)
                        }
                    }
                    return {
                        ...e,
                        push: t(e.push),
                        replace: t(e.replace),
                        prefetch: t(e.prefetch)
                    }
                }, [r, l, e])
            },
            getPathname: s
        }
    }
}, 70606, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = e.r(360893),
        o = e.r(190352),
        l = e.r(573457);
    r.createSharedPathnamesNavigation = n.default, r.createLocalizedPathnamesNavigation = o.default, r.createNavigation = l.default
}, 917675, (e, t, r) => {
    "use strict";
    t.exports = e.r(70606)
}, 102893, e => {
    "use strict";
    var t = e.i(901317),
        r = e.i(237483),
        n = e.i(3873),
        o = e.i(465994),
        l = e.i(681115),
        a = e.i(39908);
    class i {
        get currentNode() {
            return this._currentNode
        }
        set currentNode(e) {
            if (!(0, n.nodeContains)(this.root, e)) throw Error("Cannot set currentNode to a node that is not contained by the root node.");
            let t = [],
                r = e,
                o = e;
            for (this._currentNode = e; r && r !== this.root;)
                if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                    let e = r,
                        n = this._doc.createTreeWalker(e, this.whatToShow, {
                            acceptNode: this._acceptNode
                        });
                    t.push(n), n.currentNode = o, this._currentSetFor.add(n), r = o = e.host
                } else r = r.parentNode;
            let l = this._doc.createTreeWalker(this.root, this.whatToShow, {
                acceptNode: this._acceptNode
            });
            t.push(l), l.currentNode = o, this._currentSetFor.add(l), this._walkerStack = t
        }
        get doc() {
            return this._doc
        }
        firstChild() {
            let e = this.currentNode,
                t = this.nextNode();
            return (0, n.nodeContains)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
        }
        lastChild() {
            let e = this._walkerStack[0].lastChild();
            return e && (this.currentNode = e), e
        }
        nextNode() {
            let e = this._walkerStack[0].nextNode();
            if (e) {
                if (e.shadowRoot) {
                    var t;
                    let r;
                    if ("function" == typeof this.filter ? r = this.filter(e) : (null == (t = this.filter) ? void 0 : t.acceptNode) && (r = this.filter.acceptNode(e)), r === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
                    let n = this.nextNode();
                    return n && (this.currentNode = n), n
                }
                return e && (this.currentNode = e), e
            }
            if (!(this._walkerStack.length > 1)) return null;
            {
                this._walkerStack.shift();
                let e = this.nextNode();
                return e && (this.currentNode = e), e
            }
        }
        previousNode() {
            let e = this._walkerStack[0];
            if (e.currentNode === e.root) {
                if (this._currentSetFor.has(e) && (this._currentSetFor.delete(e), this._walkerStack.length > 1)) {
                    this._walkerStack.shift();
                    let e = this.previousNode();
                    return e && (this.currentNode = e), e
                }
                return null
            }
            let t = e.previousNode();
            if (t) {
                if (t.shadowRoot) {
                    var r;
                    let e;
                    if ("function" == typeof this.filter ? e = this.filter(t) : (null == (r = this.filter) ? void 0 : r.acceptNode) && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
                    let n = this.lastChild();
                    return n && (this.currentNode = n), n
                }
                return t && (this.currentNode = t), t
            }
            if (!(this._walkerStack.length > 1)) return null;
            {
                this._walkerStack.shift();
                let e = this.previousNode();
                return e && (this.currentNode = e), e
            }
        }
        nextSibling() {
            return null
        }
        previousSibling() {
            return null
        }
        parentNode() {
            return null
        }
        constructor(e, t, r, n) {
            this._walkerStack = [], this._currentSetFor = new Set, this._acceptNode = e => {
                if (e.nodeType === Node.ELEMENT_NODE) {
                    var t;
                    let r = e.shadowRoot;
                    if (r) {
                        let e = this._doc.createTreeWalker(r, this.whatToShow, {
                            acceptNode: this._acceptNode
                        });
                        return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT
                    }
                    if ("function" == typeof this.filter) return this.filter(e);
                    if (null == (t = this.filter) ? void 0 : t.acceptNode) return this.filter.acceptNode(e);
                    if (null === this.filter) return NodeFilter.FILTER_ACCEPT
                }
                return NodeFilter.FILTER_SKIP
            }, this._doc = e, this.root = t, this.filter = null != n ? n : null, this.whatToShow = null != r ? r : NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, r, this._acceptNode));
            const o = t.shadowRoot;
            if (o) {
                const e = this._doc.createTreeWalker(o, this.whatToShow, {
                    acceptNode: this._acceptNode
                });
                this._walkerStack.unshift(e)
            }
        }
    }
    var u = e.i(427651),
        c = e.i(743456),
        f = e.i(3931);
    let s = f.default.createContext(null),
        d = "react-aria-focus-scope-restore",
        p = null;

    function h(e) {
        return e[0].parentElement
    }

    function v(e) {
        let t = L.getTreeNode(p);
        for (; t && t.scopeRef !== e;) {
            if (t.contain) return !1;
            t = t.parent
        }
        return !0
    }

    function m(e, t) {
        return !!e && !!t && t.some(t => t.contains(e))
    }

    function y(e, t = null) {
        if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
        for (let {
                scopeRef: r
            }
            of L.traverse(L.getTreeNode(t)))
            if (r && m(e, r.current)) return !0;
        return !1
    }

    function g(e, t) {
        var r;
        let n = null == (r = L.getTreeNode(t)) ? void 0 : r.parent;
        for (; n;) {
            if (n.scopeRef === e) return !0;
            n = n.parent
        }
        return !1
    }

    function b(e, t = !1) {
        if (null == e || t) {
            if (null != e) try {
                e.focus()
            } catch {}
        } else try {
            (0, c.focusSafely)(e)
        } catch {}
    }

    function E(e, t = !0) {
        let r = e[0].previousElementSibling,
            n = h(e),
            o = x(n, {
                tabbable: t
            }, e);
        o.currentNode = r;
        let l = o.nextNode();
        return t && !l && ((o = x(n = h(e), {
            tabbable: !1
        }, e)).currentNode = r, l = o.nextNode()), l
    }

    function _(e, t = !0) {
        b(E(e, t))
    }

    function N(e) {
        let t = L.getTreeNode(p);
        for (; t && t.scopeRef !== e;) {
            if (t.nodeToRestore) return !1;
            t = t.parent
        }
        return (null == t ? void 0 : t.scopeRef) === e
    }

    function P(e) {
        e.dispatchEvent(new CustomEvent(d, {
            bubbles: !0,
            cancelable: !0
        })) && b(e)
    }

    function x(e, r, n) {
        var o, u, c;
        let f = (null == r ? void 0 : r.tabbable) ? l.isTabbable : l.isFocusable,
            s = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
            d = (0, t.getOwnerDocument)(s),
            p = (o = e || d, u = NodeFilter.SHOW_ELEMENT, c = {
                acceptNode(e) {
                    var o;
                    return (null == r || null == (o = r.from) ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : f(e) && function e(r, n) {
                        return "#comment" !== r.nodeName && function(e) {
                            let r = (0, t.getOwnerWindow)(e);
                            if (!(e instanceof r.HTMLElement) && !(e instanceof r.SVGElement)) return !1;
                            let {
                                display: n,
                                visibility: o
                            } = e.style, l = "none" !== n && "hidden" !== o && "collapse" !== o;
                            if (l) {
                                let {
                                    getComputedStyle: t
                                } = e.ownerDocument.defaultView, {
                                    display: r,
                                    visibility: n
                                } = t(e);
                                l = "none" !== r && "hidden" !== n && "collapse" !== n
                            }
                            return l
                        }(r) && !r.hasAttribute("hidden") && !r.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== r.nodeName || !n || "SUMMARY" === n.nodeName || r.hasAttribute("open")) && (!r.parentElement || e(r.parentElement, r))
                    }(e) && (!n || m(e, n)) && (!(null == r ? void 0 : r.accept) || r.accept(e)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                }
            }, (0, a.shadowDOM)() ? new i(d, o, u, c) : d.createTreeWalker(o, u, c));
        return (null == r ? void 0 : r.from) && (p.currentNode = r.from), p
    }
    class w {
        get size() {
            return this.fastMap.size
        }
        getTreeNode(e) {
            return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
            let n = this.fastMap.get(null != t ? t : null);
            if (!n) return;
            let o = new R({
                scopeRef: e
            });
            n.addChild(o), o.parent = n, this.fastMap.set(e, o), r && (o.nodeToRestore = r)
        }
        addNode(e) {
            this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
            if (null === e) return;
            let t = this.fastMap.get(e);
            if (!t) return;
            let r = t.parent;
            for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && m(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
            let n = t.children;
            r && (r.removeChild(t), n.size > 0 && n.forEach(e => r && r.addChild(e))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
            if (null != e.scopeRef && (yield e), e.children.size > 0)
                for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
            var e, t;
            let r = new w;
            for (let n of this.traverse()) r.addTreeNode(n.scopeRef, null != (t = null == (e = n.parent) ? void 0 : e.scopeRef) ? t : null, n.nodeToRestore);
            return r
        }
        constructor() {
            this.fastMap = new Map, this.root = new R({
                scopeRef: null
            }), this.fastMap.set(null, this.root)
        }
    }
    class R {
        addChild(e) {
            this.children.add(e), e.parent = this
        }
        removeChild(e) {
            this.children.delete(e), e.parent = void 0
        }
        constructor(e) {
            this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
    }
    let L = new w;
    e.s(["FocusScope", 0, function(e) {
        var l, a, i, c, w, T, S, O, C, k;
        let M, A, j, F, {
                children: I,
                contain: D,
                restoreFocus: z,
                autoFocus: K
            } = e,
            W = (0, f.useRef)(null),
            H = (0, f.useRef)(null),
            U = (0, f.useRef)([]),
            {
                parentNode: B
            } = (0, f.useContext)(s) || {},
            G = (0, f.useMemo)(() => new R({
                scopeRef: U
            }), [U]);
        (0, r.useLayoutEffect)(() => {
            let e = B || L.root;
            if (L.getTreeNode(e.scopeRef) && p && !g(p, e.scopeRef)) {
                let t = L.getTreeNode(p);
                t && (e = t)
            }
            e.addChild(G), L.addNode(G)
        }, [G, B]), (0, r.useLayoutEffect)(() => {
            let e = L.getTreeNode(U);
            e && (e.contain = !!D)
        }, [D]), (0, r.useLayoutEffect)(() => {
            var e;
            let t = null == (e = W.current) ? void 0 : e.nextSibling,
                r = [],
                n = e => e.stopPropagation();
            for (; t && t !== H.current;) r.push(t), t.addEventListener(d, n), t = t.nextSibling;
            return U.current = r, () => {
                for (let e of r) e.removeEventListener(d, n)
            }
        }, [I]), l = U, a = z, i = D, (0, r.useLayoutEffect)(() => {
            if (a || i) return;
            let e = l.current,
                r = (0, t.getOwnerDocument)(e ? e[0] : void 0),
                o = e => {
                    let t = (0, n.getEventTarget)(e);
                    m(t, l.current) ? p = l : y(t) || (p = null)
                };
            return r.addEventListener("focusin", o, !1), null == e || e.forEach(e => e.addEventListener("focusin", o, !1)), () => {
                r.removeEventListener("focusin", o, !1), null == e || e.forEach(e => e.removeEventListener("focusin", o, !1))
            }
        }, [l, a, i]), c = U, w = D, M = (0, f.useRef)(void 0), A = (0, f.useRef)(void 0), (0, r.useLayoutEffect)(() => {
            let e = c.current;
            if (!w) {
                A.current && (cancelAnimationFrame(A.current), A.current = void 0);
                return
            }
            let r = (0, t.getOwnerDocument)(e ? e[0] : void 0),
                l = e => {
                    if ("Tab" !== e.key || e.altKey || e.ctrlKey || e.metaKey || !v(c) || e.isComposing) return;
                    let t = (0, n.getActiveElement)(r),
                        o = c.current;
                    if (!o || !m(t, o)) return;
                    let l = x(h(o), {
                        tabbable: !0
                    }, o);
                    if (!t) return;
                    l.currentNode = t;
                    let a = e.shiftKey ? l.previousNode() : l.nextNode();
                    a || (l.currentNode = e.shiftKey ? o[o.length - 1].nextElementSibling : o[0].previousElementSibling, a = e.shiftKey ? l.previousNode() : l.nextNode()), e.preventDefault(), a && b(a, !0)
                },
                a = e => {
                    (!p || g(p, c)) && m((0, n.getEventTarget)(e), c.current) ? (p = c, M.current = (0, n.getEventTarget)(e)) : v(c) && !y((0, n.getEventTarget)(e), c) ? M.current ? M.current.focus() : p && p.current && _(p.current) : v(c) && (M.current = (0, n.getEventTarget)(e))
                },
                i = e => {
                    A.current && cancelAnimationFrame(A.current), A.current = requestAnimationFrame(() => {
                        let t = (0, u.getInteractionModality)(),
                            l = ("virtual" === t || null === t) && (0, o.isAndroid)() && (0, o.isChrome)(),
                            a = (0, n.getActiveElement)(r);
                        if (!l && a && v(c) && !y(a, c)) {
                            p = c;
                            let t = (0, n.getEventTarget)(e);
                            if (t && t.isConnected) {
                                var i;
                                M.current = t, null == (i = M.current) || i.focus()
                            } else p.current && _(p.current)
                        }
                    })
                };
            return r.addEventListener("keydown", l, !1), r.addEventListener("focusin", a, !1), null == e || e.forEach(e => e.addEventListener("focusin", a, !1)), null == e || e.forEach(e => e.addEventListener("focusout", i, !1)), () => {
                r.removeEventListener("keydown", l, !1), r.removeEventListener("focusin", a, !1), null == e || e.forEach(e => e.removeEventListener("focusin", a, !1)), null == e || e.forEach(e => e.removeEventListener("focusout", i, !1))
            }
        }, [c, w]), (0, r.useLayoutEffect)(() => () => {
            A.current && cancelAnimationFrame(A.current)
        }, [A]), T = U, S = z, O = D, j = (0, f.useRef)("u" > typeof document ? (0, n.getActiveElement)((0, t.getOwnerDocument)(T.current ? T.current[0] : void 0)) : null), (0, r.useLayoutEffect)(() => {
            let e = T.current,
                r = (0, t.getOwnerDocument)(e ? e[0] : void 0);
            if (!S || O) return;
            let o = () => {
                (!p || g(p, T)) && m((0, n.getActiveElement)(r), T.current) && (p = T)
            };
            return r.addEventListener("focusin", o, !1), null == e || e.forEach(e => e.addEventListener("focusin", o, !1)), () => {
                r.removeEventListener("focusin", o, !1), null == e || e.forEach(e => e.removeEventListener("focusin", o, !1))
            }
        }, [T, O]), (0, r.useLayoutEffect)(() => {
            let e = (0, t.getOwnerDocument)(T.current ? T.current[0] : void 0);
            if (!S) return;
            let r = t => {
                if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !v(T) || t.isComposing) return;
                let r = e.activeElement;
                if (!y(r, T) || !N(T)) return;
                let n = L.getTreeNode(T);
                if (!n) return;
                let o = n.nodeToRestore,
                    l = x(e.body, {
                        tabbable: !0
                    });
                l.currentNode = r;
                let a = t.shiftKey ? l.previousNode() : l.nextNode();
                if (o && o.isConnected && o !== e.body || (o = void 0, n.nodeToRestore = void 0), (!a || !y(a, T)) && o) {
                    l.currentNode = o;
                    do a = t.shiftKey ? l.previousNode() : l.nextNode(); while (y(a, T))(t.preventDefault(), t.stopPropagation(), a) ? b(a, !0): y(o) ? b(o, !0) : r.blur()
                }
            };
            return O || e.addEventListener("keydown", r, !0), () => {
                O || e.removeEventListener("keydown", r, !0)
            }
        }, [T, S, O]), (0, r.useLayoutEffect)(() => {
            var e;
            let r = (0, t.getOwnerDocument)(T.current ? T.current[0] : void 0);
            if (!S) return;
            let o = L.getTreeNode(T);
            if (o) return o.nodeToRestore = null != (e = j.current) ? e : void 0, () => {
                let e = L.getTreeNode(T);
                if (!e) return;
                let t = e.nodeToRestore,
                    o = (0, n.getActiveElement)(r);
                if (S && t && (o && y(o, T) || o === r.body && N(T))) {
                    let e = L.clone();
                    requestAnimationFrame(() => {
                        if (r.activeElement === r.body) {
                            let t = e.getTreeNode(T);
                            for (; t;) {
                                if (t.nodeToRestore && t.nodeToRestore.isConnected) return void P(t.nodeToRestore);
                                t = t.parent
                            }
                            for (t = e.getTreeNode(T); t;) {
                                if (t.scopeRef && t.scopeRef.current && L.getTreeNode(t.scopeRef)) return void P(E(t.scopeRef.current, !0));
                                t = t.parent
                            }
                        }
                    })
                }
            }
        }, [T, S]), C = U, k = K, F = f.default.useRef(k), (0, f.useEffect)(() => {
            if (F.current) {
                p = C;
                let e = (0, t.getOwnerDocument)(C.current ? C.current[0] : void 0);
                !m((0, n.getActiveElement)(e), p.current) && C.current && _(C.current)
            }
            F.current = !1
        }, [C]), (0, f.useEffect)(() => {
            let e = (0, n.getActiveElement)((0, t.getOwnerDocument)(U.current ? U.current[0] : void 0)),
                r = null;
            if (m(e, U.current)) {
                for (let t of L.traverse()) t.scopeRef && m(e, t.scopeRef.current) && (r = t);
                r === L.getTreeNode(U) && (p = r.scopeRef)
            }
        }, [U]), (0, r.useLayoutEffect)(() => () => {
            var e, t, r;
            let n = null != (r = null == (t = L.getTreeNode(U)) || null == (e = t.parent) ? void 0 : e.scopeRef) ? r : null;
            (U === p || g(U, p)) && (!n || L.getTreeNode(n)) && (p = n), L.removeTreeNode(U)
        }, [U]);
        let X = (0, f.useMemo)(() => {
                var e;
                return e = U, {
                    focusNext(r = {}) {
                        var o;
                        let l = e.current,
                            {
                                from: a,
                                tabbable: i,
                                wrap: u,
                                accept: c
                            } = r,
                            f = a || (0, n.getActiveElement)((0, t.getOwnerDocument)(null != (o = l[0]) ? o : void 0)),
                            s = l[0].previousElementSibling,
                            d = x(h(l), {
                                tabbable: i,
                                accept: c
                            }, l);
                        d.currentNode = m(f, l) ? f : s;
                        let p = d.nextNode();
                        return !p && u && (d.currentNode = s, p = d.nextNode()), p && b(p, !0), p
                    },
                    focusPrevious(r = {}) {
                        var o;
                        let l = e.current,
                            {
                                from: a,
                                tabbable: i,
                                wrap: u,
                                accept: c
                            } = r,
                            f = a || (0, n.getActiveElement)((0, t.getOwnerDocument)(null != (o = l[0]) ? o : void 0)),
                            s = l[l.length - 1].nextElementSibling,
                            d = x(h(l), {
                                tabbable: i,
                                accept: c
                            }, l);
                        d.currentNode = m(f, l) ? f : s;
                        let p = d.previousNode();
                        return !p && u && (d.currentNode = s, p = d.previousNode()), p && b(p, !0), p
                    },
                    focusFirst(t = {}) {
                        let r = e.current,
                            {
                                tabbable: n,
                                accept: o
                            } = t,
                            l = x(h(r), {
                                tabbable: n,
                                accept: o
                            }, r);
                        l.currentNode = r[0].previousElementSibling;
                        let a = l.nextNode();
                        return a && b(a, !0), a
                    },
                    focusLast(t = {}) {
                        let r = e.current,
                            {
                                tabbable: n,
                                accept: o
                            } = t,
                            l = x(h(r), {
                                tabbable: n,
                                accept: o
                            }, r);
                        l.currentNode = r[r.length - 1].nextElementSibling;
                        let a = l.previousNode();
                        return a && b(a, !0), a
                    }
                }
            }, []),
            q = (0, f.useMemo)(() => ({
                focusManager: X,
                parentNode: G
            }), [G, X]);
        return f.default.createElement(s.Provider, {
            value: q
        }, f.default.createElement("span", {
            "data-focus-scope-start": !0,
            hidden: !0,
            ref: W
        }), I, f.default.createElement("span", {
            "data-focus-scope-end": !0,
            hidden: !0,
            ref: H
        }))
    }, "getFocusableTreeWalker", 0, x, "isElementInChildOfActiveScope", 0, function(e) {
        return y(e, p)
    }], 102893)
}, 242671, e => {
    "use strict";
    e.s(["isScrollable", 0, function(e, t) {
        if (!e) return !1;
        let r = window.getComputedStyle(e),
            n = /(auto|scroll)/.test(r.overflow + r.overflowX + r.overflowY);
        return n && t && (n = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), n
    }])
}, 430860, e => {
    "use strict";
    var t = e.i(242671);
    e.s(["getScrollParent", 0, function(e, r) {
        let n = e;
        for ((0, t.isScrollable)(n, r) && (n = n.parentElement); n && !(0, t.isScrollable)(n, r);) n = n.parentElement;
        return n || document.scrollingElement || document.documentElement
    }])
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8d82fac7-ac27-534b-b992-f08c98d8aa18")
    } catch (e) {}
}();
//# debugId=8d82fac7-ac27-534b-b992-f08c98d8aa18