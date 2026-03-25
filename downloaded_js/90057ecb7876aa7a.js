(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 846107, (e, t, r) => {
    var n = {
            229: function(e) {
                var t, r, n, o = e.exports = {};

                function u() {
                    throw Error("setTimeout has not been defined")
                }

                function i() {
                    throw Error("clearTimeout has not been defined")
                }
                try {
                    t = "function" == typeof setTimeout ? setTimeout : u
                } catch (e) {
                    t = u
                }
                try {
                    r = "function" == typeof clearTimeout ? clearTimeout : i
                } catch (e) {
                    r = i
                }

                function a(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === u || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                    try {
                        return t(e, 0)
                    } catch (r) {
                        try {
                            return t.call(null, e, 0)
                        } catch (r) {
                            return t.call(this, e, 0)
                        }
                    }
                }
                var s = [],
                    l = !1,
                    c = -1;

                function f() {
                    l && n && (l = !1, n.length ? s = n.concat(s) : c = -1, s.length && d())
                }

                function d() {
                    if (!l) {
                        var e = a(f);
                        l = !0;
                        for (var t = s.length; t;) {
                            for (n = s, s = []; ++c < t;) n && n[c].run();
                            c = -1, t = s.length
                        }
                        n = null, l = !1,
                            function(e) {
                                if (r === clearTimeout) return clearTimeout(e);
                                if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                                try {
                                    r(e)
                                } catch (t) {
                                    try {
                                        return r.call(null, e)
                                    } catch (t) {
                                        return r.call(this, e)
                                    }
                                }
                            }(e)
                    }
                }

                function p(e, t) {
                    this.fun = e, this.array = t
                }

                function y() {}
                o.nextTick = function(e) {
                    var t = Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                    s.push(new p(e, t)), 1 !== s.length || l || a(d)
                }, p.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, o.title = "browser", o.browser = !0, o.env = {}, o.argv = [], o.version = "", o.versions = {}, o.on = y, o.addListener = y, o.once = y, o.off = y, o.removeListener = y, o.removeAllListeners = y, o.emit = y, o.prependListener = y, o.prependOnceListener = y, o.listeners = function(e) {
                    return []
                }, o.binding = function(e) {
                    throw Error("process.binding is not supported")
                }, o.cwd = function() {
                    return "/"
                }, o.chdir = function(e) {
                    throw Error("process.chdir is not supported")
                }, o.umask = function() {
                    return 0
                }
            }
        },
        o = {};

    function u(e) {
        var t = o[e];
        if (void 0 !== t) return t.exports;
        var r = o[e] = {
                exports: {}
            },
            i = !0;
        try {
            n[e](r, r.exports, u), i = !1
        } finally {
            i && delete o[e]
        }
        return r.exports
    }
    u.ab = "/ROOT/node_modules/.pnpm/next@16.1.6_@babel+core@7.28.4_@opentelemetry+api@1.9.0_@playwright+test@1.56.1_babel-p_4370f5b0d45b75973a01e9090de7e541/node_modules/next/dist/compiled/process/", t.exports = u(229)
}, 252495, (e, t, r) => {
    "use strict";
    var n, o;
    t.exports = (null == (n = e.g.process) ? void 0 : n.env) && "object" == typeof(null == (o = e.g.process) ? void 0 : o.env) ? e.g.process : e.r(846107)
}, 711980, (e, t, r) => {
    "use strict";
    var n = e.i(252495),
        o = Symbol.for("react.transitional.element"),
        u = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        a = Symbol.for("react.strict_mode"),
        s = Symbol.for("react.profiler"),
        l = Symbol.for("react.consumer"),
        c = Symbol.for("react.context"),
        f = Symbol.for("react.forward_ref"),
        d = Symbol.for("react.suspense"),
        p = Symbol.for("react.memo"),
        y = Symbol.for("react.lazy"),
        h = Symbol.for("react.activity"),
        m = Symbol.for("react.view_transition"),
        b = Symbol.iterator,
        g = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        _ = Object.assign,
        v = {};

    function j(e, t, r) {
        this.props = e, this.context = t, this.refs = v, this.updater = r || g
    }

    function E() {}

    function S(e, t, r) {
        this.props = e, this.context = t, this.refs = v, this.updater = r || g
    }
    j.prototype.isReactComponent = {}, j.prototype.setState = function(e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, t, "setState")
    }, j.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, E.prototype = j.prototype;
    var O = S.prototype = new E;
    O.constructor = S, _(O, j.prototype), O.isPureReactComponent = !0;
    var w = Array.isArray;

    function x() {}
    var P = {
            H: null,
            A: null,
            T: null,
            S: null
        },
        T = Object.prototype.hasOwnProperty;

    function C(e, t, r) {
        var n = r.ref;
        return {
            $$typeof: o,
            type: e,
            key: t,
            ref: void 0 !== n ? n : null,
            props: r
        }
    }

    function I(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
    }
    var R = /\/+/g;

    function A(e, t) {
        var r, n;
        return "object" == typeof e && null !== e && null != e.key ? (r = "" + e.key, n = {
            "=": "=0",
            ":": "=2"
        }, "$" + r.replace(/[=:]/g, function(e) {
            return n[e]
        })) : t.toString(36)
    }

    function M(e, t, r) {
        if (null == e) return e;
        var n = [],
            i = 0;
        return ! function e(t, r, n, i, a) {
            var s, l, c, f = typeof t;
            ("undefined" === f || "boolean" === f) && (t = null);
            var d = !1;
            if (null === t) d = !0;
            else switch (f) {
                case "bigint":
                case "string":
                case "number":
                    d = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                        case o:
                        case u:
                            d = !0;
                            break;
                        case y:
                            return e((d = t._init)(t._payload), r, n, i, a)
                    }
            }
            if (d) return a = a(t), d = "" === i ? "." + A(t, 0) : i, w(a) ? (n = "", null != d && (n = d.replace(R, "$&/") + "/"), e(a, r, n, "", function(e) {
                return e
            })) : null != a && (I(a) && (s = a, l = n + (null == a.key || t && t.key === a.key ? "" : ("" + a.key).replace(R, "$&/") + "/") + d, a = C(s.type, l, s.props)), r.push(a)), 1;
            d = 0;
            var p = "" === i ? "." : i + ":";
            if (w(t))
                for (var h = 0; h < t.length; h++) f = p + A(i = t[h], h), d += e(i, r, n, f, a);
            else if ("function" == typeof(h = null === (c = t) || "object" != typeof c ? null : "function" == typeof(c = b && c[b] || c["@@iterator"]) ? c : null))
                for (t = h.call(t), h = 0; !(i = t.next()).done;) f = p + A(i = i.value, h++), d += e(i, r, n, f, a);
            else if ("object" === f) {
                if ("function" == typeof t.then) return e(function(e) {
                    switch (e.status) {
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                        default:
                            switch ("string" == typeof e.status ? e.then(x, x) : (e.status = "pending", e.then(function(t) {
                                    "pending" === e.status && (e.status = "fulfilled", e.value = t)
                                }, function(t) {
                                    "pending" === e.status && (e.status = "rejected", e.reason = t)
                                })), e.status) {
                                case "fulfilled":
                                    return e.value;
                                case "rejected":
                                    throw e.reason
                            }
                    }
                    throw e
                }(t), r, n, i, a);
                throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === (r = String(t)) ? "object with keys {" + Object.keys(t).join(", ") + "}" : r) + "). If you meant to render a collection of children, use an array instead.")
            }
            return d
        }(e, n, "", "", function(e) {
            return t.call(r, e, i++)
        }), n
    }

    function k(e) {
        if (-1 === e._status) {
            var t = e._result;
            (t = t()).then(function(t) {
                (0 === e._status || -1 === e._status) && (e._status = 1, e._result = t)
            }, function(t) {
                (0 === e._status || -1 === e._status) && (e._status = 2, e._result = t)
            }), -1 === e._status && (e._status = 0, e._result = t)
        }
        if (1 === e._status) return e._result.default;
        throw e._result
    }
    var $ = "function" == typeof reportError ? reportError : function(e) {
        if ("object" == typeof window && "function" == typeof window.ErrorEvent) {
            var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" == typeof e && null !== e && "string" == typeof e.message ? String(e.message) : String(e),
                error: e
            });
            if (!window.dispatchEvent(t)) return
        } else if ("object" == typeof n.default && "function" == typeof n.default.emit) return void n.default.emit("uncaughtException", e);
        console.error(e)
    };

    function H(e) {
        var t = P.T,
            r = {};
        r.types = null !== t ? t.types : null, P.T = r;
        try {
            var n = e(),
                o = P.S;
            null !== o && o(r, n), "object" == typeof n && null !== n && "function" == typeof n.then && n.then(x, $)
        } catch (e) {
            $(e)
        } finally {
            null !== t && null !== r.types && (t.types = r.types), P.T = t
        }
    }

    function L(e) {
        var t = P.T;
        if (null !== t) {
            var r = t.types;
            null === r ? t.types = [e] : -1 === r.indexOf(e) && r.push(e)
        } else H(L.bind(null, e))
    }
    r.Activity = h, r.Children = {
        map: M,
        forEach: function(e, t, r) {
            M(e, function() {
                t.apply(this, arguments)
            }, r)
        },
        count: function(e) {
            var t = 0;
            return M(e, function() {
                t++
            }), t
        },
        toArray: function(e) {
            return M(e, function(e) {
                return e
            }) || []
        },
        only: function(e) {
            if (!I(e)) throw Error("React.Children.only expected to receive a single React element child.");
            return e
        }
    }, r.Component = j, r.Fragment = i, r.Profiler = s, r.PureComponent = S, r.StrictMode = a, r.Suspense = d, r.ViewTransition = m, r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = P, r.__COMPILER_RUNTIME = {
        __proto__: null,
        c: function(e) {
            return P.H.useMemoCache(e)
        }
    }, r.addTransitionType = L, r.cache = function(e) {
        return function() {
            return e.apply(null, arguments)
        }
    }, r.cacheSignal = function() {
        return null
    }, r.cloneElement = function(e, t, r) {
        if (null == e) throw Error("The argument must be a React element, but you passed " + e + ".");
        var n = _({}, e.props),
            o = e.key;
        if (null != t)
            for (u in void 0 !== t.key && (o = "" + t.key), t) T.call(t, u) && "key" !== u && "__self" !== u && "__source" !== u && ("ref" !== u || void 0 !== t.ref) && (n[u] = t[u]);
        var u = arguments.length - 2;
        if (1 === u) n.children = r;
        else if (1 < u) {
            for (var i = Array(u), a = 0; a < u; a++) i[a] = arguments[a + 2];
            n.children = i
        }
        return C(e.type, o, n)
    }, r.createContext = function(e) {
        return (e = {
            $$typeof: c,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        }).Provider = e, e.Consumer = {
            $$typeof: l,
            _context: e
        }, e
    }, r.createElement = function(e, t, r) {
        var n, o = {},
            u = null;
        if (null != t)
            for (n in void 0 !== t.key && (u = "" + t.key), t) T.call(t, n) && "key" !== n && "__self" !== n && "__source" !== n && (o[n] = t[n]);
        var i = arguments.length - 2;
        if (1 === i) o.children = r;
        else if (1 < i) {
            for (var a = Array(i), s = 0; s < i; s++) a[s] = arguments[s + 2];
            o.children = a
        }
        if (e && e.defaultProps)
            for (n in i = e.defaultProps) void 0 === o[n] && (o[n] = i[n]);
        return C(e, u, o)
    }, r.createRef = function() {
        return {
            current: null
        }
    }, r.forwardRef = function(e) {
        return {
            $$typeof: f,
            render: e
        }
    }, r.isValidElement = I, r.lazy = function(e) {
        return {
            $$typeof: y,
            _payload: {
                _status: -1,
                _result: e
            },
            _init: k
        }
    }, r.memo = function(e, t) {
        return {
            $$typeof: p,
            type: e,
            compare: void 0 === t ? null : t
        }
    }, r.startTransition = H, r.unstable_useCacheRefresh = function() {
        return P.H.useCacheRefresh()
    }, r.use = function(e) {
        return P.H.use(e)
    }, r.useActionState = function(e, t, r) {
        return P.H.useActionState(e, t, r)
    }, r.useCallback = function(e, t) {
        return P.H.useCallback(e, t)
    }, r.useContext = function(e) {
        return P.H.useContext(e)
    }, r.useDebugValue = function() {}, r.useDeferredValue = function(e, t) {
        return P.H.useDeferredValue(e, t)
    }, r.useEffect = function(e, t) {
        return P.H.useEffect(e, t)
    }, r.useEffectEvent = function(e) {
        return P.H.useEffectEvent(e)
    }, r.useId = function() {
        return P.H.useId()
    }, r.useImperativeHandle = function(e, t, r) {
        return P.H.useImperativeHandle(e, t, r)
    }, r.useInsertionEffect = function(e, t) {
        return P.H.useInsertionEffect(e, t)
    }, r.useLayoutEffect = function(e, t) {
        return P.H.useLayoutEffect(e, t)
    }, r.useMemo = function(e, t) {
        return P.H.useMemo(e, t)
    }, r.useOptimistic = function(e, t) {
        return P.H.useOptimistic(e, t)
    }, r.useReducer = function(e, t, r) {
        return P.H.useReducer(e, t, r)
    }, r.useRef = function(e) {
        return P.H.useRef(e)
    }, r.useState = function(e) {
        return P.H.useState(e)
    }, r.useSyncExternalStore = function(e, t, r) {
        return P.H.useSyncExternalStore(e, t, r)
    }, r.useTransition = function() {
        return P.H.useTransition()
    }, r.version = "19.3.0-canary-f93b9fd4-20251217"
}, 107579, (e, t, r) => {
    "use strict";
    t.exports = e.r(711980)
}, 103035, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "RouterContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(481258)._(e.r(107579)).default.createContext(null)
}, 514413, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        DecodeError: function() {
            return b
        },
        MiddlewareNotFoundError: function() {
            return j
        },
        MissingStaticPage: function() {
            return v
        },
        NormalizeError: function() {
            return g
        },
        PageNotFoundError: function() {
            return _
        },
        SP: function() {
            return h
        },
        ST: function() {
            return m
        },
        WEB_VITALS: function() {
            return u
        },
        execOnce: function() {
            return i
        },
        getDisplayName: function() {
            return f
        },
        getLocationOrigin: function() {
            return l
        },
        getURL: function() {
            return c
        },
        isAbsoluteUrl: function() {
            return s
        },
        isResSent: function() {
            return d
        },
        loadGetInitialProps: function() {
            return y
        },
        normalizeRepeatedSlashes: function() {
            return p
        },
        stringifyError: function() {
            return E
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let u = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function i(e) {
        let t, r = !1;
        return (...n) => (r || (r = !0, t = e(...n)), t)
    }
    let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        s = e => a.test(e);

    function l() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function c() {
        let {
            href: e
        } = window.location, t = l();
        return e.substring(t.length)
    }

    function f(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function d(e) {
        return e.finished || e.headersSent
    }

    function p(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function y(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await y(t.Component, t.ctx)
        } : {};
        let n = await e.getInitialProps(t);
        if (r && d(r)) return n;
        if (!n) throw Object.defineProperty(Error(`"${f(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return n
    }
    let h = "u" > typeof performance,
        m = h && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class b extends Error {}
    class g extends Error {}
    class _ extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class v extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class j extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function E(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 938727, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        assign: function() {
            return s
        },
        searchParamsToUrlQuery: function() {
            return u
        },
        urlQueryToSearchParams: function() {
            return a
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });

    function u(e) {
        let t = {};
        for (let [r, n] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
        }
        return t
    }

    function i(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function a(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e))
            if (Array.isArray(n))
                for (let e of n) t.append(r, i(e));
            else t.set(r, i(n));
        return t
    }

    function s(e, ...t) {
        for (let r of t) {
            for (let t of r.keys()) e.delete(t);
            for (let [t, n] of r.entries()) e.append(t, n)
        }
        return e
    }
}, 375677, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function() {
            return a
        },
        formatWithValidation: function() {
            return l
        },
        urlObjectKeys: function() {
            return s
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let u = e.r(744066)._(e.r(938727)),
        i = /https?|ftp|gopher|file/;

    function a(e) {
        let {
            auth: t,
            hostname: r
        } = e, n = e.protocol || "", o = e.pathname || "", a = e.hash || "", s = e.query || "", l = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? l = t + e.host : r && (l = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (l += ":" + e.port)), s && "object" == typeof s && (s = String(u.urlQueryToSearchParams(s)));
        let c = e.search || s && `?${s}` || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || i.test(n)) && !1 !== l ? (l = "//" + (l || ""), o && "/" !== o[0] && (o = "/" + o)) : l || (l = ""), a && "#" !== a[0] && (a = "#" + a), c && "?" !== c[0] && (c = "?" + c), o = o.replace(/[?#]/g, encodeURIComponent), c = c.replace("#", "%23"), `${n}${l}${o}${c}${a}`
    }
    let s = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function l(e) {
        return a(e)
    }
}, 800298, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return u
        }
    });
    let n = e.r(514413),
        o = e.r(883364);

    function u(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, n.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, o.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 906042, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "HeadManagerContext", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e.r(481258)._(e.r(107579)).default.createContext({})
}, 802615, (e, t, r) => {
    "use strict";

    function n(e) {
        return e.split("/").map(e => encodeURIComponent(e)).join("/")
    }
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return n
        }
    })
}, 853695, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "setAttributesFromProps", {
        enumerable: !0,
        get: function() {
            return i
        }
    });
    let n = {
            acceptCharset: "accept-charset",
            className: "class",
            htmlFor: "for",
            httpEquiv: "http-equiv",
            noModule: "noModule"
        },
        o = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"];

    function u(e) {
        return ["async", "defer", "noModule"].includes(e)
    }

    function i(e, t) {
        for (let [r, i] of Object.entries(t)) {
            if (!t.hasOwnProperty(r) || o.includes(r) || void 0 === i) continue;
            let a = n[r] || r.toLowerCase();
            "SCRIPT" === e.tagName && u(a) ? e[a] = !!i : e.setAttribute(a, String(i)), (!1 === i || "SCRIPT" === e.tagName && u(a) && (!i || "false" === i)) && (e.setAttribute(a, ""), e.removeAttribute(a))
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 887053, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        cancelIdleCallback: function() {
            return i
        },
        requestIdleCallback: function() {
            return u
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let u = "u" > typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            let t = Date.now();
            return self.setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        },
        i = "u" > typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 127044, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return _
        },
        handleClientScriptLoad: function() {
            return m
        },
        initScriptLoader: function() {
            return b
        }
    };
    for (var o in n) Object.defineProperty(r, o, {
        enumerable: !0,
        get: n[o]
    });
    let u = e.r(481258),
        i = e.r(744066),
        a = e.r(853712),
        s = u._(e.r(206276)),
        l = i._(e.r(107579)),
        c = e.r(906042),
        f = e.r(853695),
        d = e.r(887053),
        p = new Map,
        y = new Set,
        h = e => {
            let {
                src: t,
                id: r,
                onLoad: n = () => {},
                onReady: o = null,
                dangerouslySetInnerHTML: u,
                children: i = "",
                strategy: a = "afterInteractive",
                onError: l,
                stylesheets: c
            } = e, d = r || t;
            if (d && y.has(d)) return;
            if (p.has(t)) {
                y.add(d), p.get(t).then(n, l);
                return
            }
            let h = () => {
                    o && o(), y.add(d)
                },
                m = document.createElement("script"),
                b = new Promise((e, t) => {
                    m.addEventListener("load", function(t) {
                        e(), n && n.call(this, t), h()
                    }), m.addEventListener("error", function(e) {
                        t(e)
                    })
                }).catch(function(e) {
                    l && l(e)
                });
            u ? (m.innerHTML = u.__html || "", h()) : i ? (m.textContent = "string" == typeof i ? i : Array.isArray(i) ? i.join("") : "", h()) : t && (m.src = t, p.set(t, b)), (0, f.setAttributesFromProps)(m, e), "worker" === a && m.setAttribute("type", "text/partytown"), m.setAttribute("data-nscript", a), c && (e => {
                if (s.default.preinit) return e.forEach(e => {
                    s.default.preinit(e, {
                        as: "style"
                    })
                });
                if ("u" > typeof window) {
                    let t = document.head;
                    e.forEach(e => {
                        let r = document.createElement("link");
                        r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
                    })
                }
            })(c), document.body.appendChild(m)
        };

    function m(e) {
        let {
            strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
            (0, d.requestIdleCallback)(() => h(e))
        }) : h(e)
    }

    function b(e) {
        e.forEach(m), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
            let t = e.id || e.getAttribute("src");
            y.add(t)
        })
    }

    function g(e) {
        let {
            id: t,
            src: r = "",
            onLoad: n = () => {},
            onReady: o = null,
            strategy: u = "afterInteractive",
            onError: i,
            stylesheets: f,
            ...p
        } = e, {
            updateScripts: m,
            scripts: b,
            getIsSsr: g,
            appDir: _,
            nonce: v
        } = (0, l.useContext)(c.HeadManagerContext);
        v = p.nonce || v;
        let j = (0, l.useRef)(!1);
        (0, l.useEffect)(() => {
            let e = t || r;
            j.current || (o && e && y.has(e) && o(), j.current = !0)
        }, [o, t, r]);
        let E = (0, l.useRef)(!1);
        if ((0, l.useEffect)(() => {
                if (!E.current) {
                    if ("afterInteractive" === u) h(e);
                    else "lazyOnload" === u && ("complete" === document.readyState ? (0, d.requestIdleCallback)(() => h(e)) : window.addEventListener("load", () => {
                        (0, d.requestIdleCallback)(() => h(e))
                    }));
                    E.current = !0
                }
            }, [e, u]), ("beforeInteractive" === u || "worker" === u) && (m ? (b[u] = (b[u] || []).concat([{
                id: t,
                src: r,
                onLoad: n,
                onReady: o,
                onError: i,
                ...p,
                nonce: v
            }]), m(b)) : g && g() ? y.add(t || r) : g && !g() && h({
                ...e,
                nonce: v
            })), _) {
            if (f && f.forEach(e => {
                    s.default.preinit(e, {
                        as: "style"
                    })
                }), "beforeInteractive" === u)
                if (!r) return p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html, delete p.dangerouslySetInnerHTML), (0, a.jsx)("script", {
                    nonce: v,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...p,id:t}])})`
                    }
                });
                else return s.default.preload(r, p.integrity ? {
                    as: "script",
                    integrity: p.integrity,
                    nonce: v,
                    crossOrigin: p.crossOrigin
                } : {
                    as: "script",
                    nonce: v,
                    crossOrigin: p.crossOrigin
                }), (0, a.jsx)("script", {
                    nonce: v,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([r,{...p,id:t}])})`
                    }
                });
            "afterInteractive" === u && r && s.default.preload(r, p.integrity ? {
                as: "script",
                integrity: p.integrity,
                nonce: v,
                crossOrigin: p.crossOrigin
            } : {
                as: "script",
                nonce: v,
                crossOrigin: p.crossOrigin
            })
        }
        return null
    }
    Object.defineProperty(g, "__nextScript", {
        value: !0
    });
    let _ = g;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 593210, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let n = e.r(853712),
        o = e.r(525343),
        u = {
            fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
            height: "100vh",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
        },
        i = {
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "28px",
            margin: "0 8px"
        },
        a = function({
            error: e
        }) {
            let t = e?.digest;
            return (0, n.jsxs)("html", {
                id: "__next_error__",
                children: [(0, n.jsx)("head", {}), (0, n.jsxs)("body", {
                    children: [(0, n.jsx)(o.HandleISRError, {
                        error: e
                    }), (0, n.jsx)("div", {
                        style: u,
                        children: (0, n.jsxs)("div", {
                            children: [(0, n.jsxs)("h2", {
                                style: i,
                                children: ["Application error: a ", t ? "server" : "client", "-side exception has occurred while loading ", window.location.hostname, " (see the", " ", t ? "server logs" : "browser console", " for more information)."]
                            }), t ? (0, n.jsx)("p", {
                                style: i,
                                children: `Digest: ${t}`
                            }) : null]
                        })
                    })]
                })]
            })
        };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "217f84e7-ee89-5931-81f4-428844f4f031")
    } catch (e) {}
}();
//# debugId=217f84e7-ee89-5931-81f4-428844f4f031