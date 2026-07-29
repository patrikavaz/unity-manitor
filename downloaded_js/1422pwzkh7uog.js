(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 591336, e => {
    "use strict";
    var t, r = e.i(203217);
    let n = !(typeof navigator > "u") && "ReactNative" === navigator.product,
        s = {
            timeout: n ? 6e4 : 12e4
        },
        i = function(e) {
            let t = {
                ...s,
                ..."string" == typeof e ? {
                    url: e
                } : e
            };
            if (t.timeout = function e(t) {
                    if (!1 === t || 0 === t) return !1;
                    if (t.connect || t.socket) return t;
                    let r = Number(t);
                    return isNaN(r) ? e(s.timeout) : {
                        connect: r,
                        socket: r
                    }
                }(t.timeout), t.query) {
                let {
                    url: e,
                    searchParams: r
                } = function(e) {
                    let t = e.indexOf("?");
                    if (-1 === t) return {
                        url: e,
                        searchParams: new URLSearchParams
                    };
                    let r = e.slice(0, t),
                        s = e.slice(t + 1);
                    if (!n) return {
                        url: r,
                        searchParams: new URLSearchParams(s)
                    };
                    if ("function" != typeof decodeURIComponent) throw Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
                    let i = new URLSearchParams;
                    for (let e of s.split("&")) {
                        let [t, r] = e.split("=");
                        t && i.append(o(t), o(r || ""))
                    }
                    return {
                        url: r,
                        searchParams: i
                    }
                }(t.url);
                for (let [n, s] of Object.entries(t.query)) {
                    if (void 0 !== s)
                        if (Array.isArray(s))
                            for (let e of s) r.append(n, e);
                        else r.append(n, s);
                    let i = r.toString();
                    i && (t.url = `${e}?${i}`)
                }
            }
            return t.method = t.body && !t.method ? "POST" : (t.method || "GET").toUpperCase(), t
        };

    function o(e) {
        return decodeURIComponent(e.replace(/\+/g, " "))
    }
    let a = /^https?:\/\//i,
        u = function(e) {
            if (!a.test(e.url)) throw Error(`"${e.url}" is not a valid URL`)
        },
        c = ["request", "response", "progress", "error", "abort"],
        l = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
    var h, d, p, f = (h = function() {
        if (p) return d;
        p = 1;
        var e = function(e) {
            return e.replace(/^\s+|\s+$/g, "")
        };
        return d = function(t) {
            if (!t) return {};
            for (var r = Object.create(null), n = e(t).split("\n"), s = 0; s < n.length; s++) {
                var i, o = n[s],
                    a = o.indexOf(":"),
                    u = e(o.slice(0, a)).toLowerCase(),
                    c = e(o.slice(a + 1));
                typeof r[u] > "u" ? r[u] = c : (i = r[u], "[object Array]" === Object.prototype.toString.call(i)) ? r[u].push(c) : r[u] = [r[u], c]
            }
            return r
        }
    }()) && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
    class g {
        onabort;
        onerror;
        onreadystatechange;
        ontimeout;
        readyState = 0;
        response;
        responseText = "";
        responseType = "";
        status;
        statusText;
        withCredentials;
        #e;
        #t;
        #r;
        #n = {};
        #s;
        #i = {};
        #o;
        open(e, t, r) {
            this.#e = e, this.#t = t, this.#r = "", this.readyState = 1, this.onreadystatechange?.(), this.#s = void 0
        }
        abort() {
            this.#s && this.#s.abort()
        }
        getAllResponseHeaders() {
            return this.#r
        }
        setRequestHeader(e, t) {
            this.#n[e] = t
        }
        setInit(e, t = !0) {
            this.#i = e, this.#o = t
        }
        send(e) {
            let t = "arraybuffer" !== this.responseType,
                r = {
                    ...this.#i,
                    method: this.#e,
                    headers: this.#n,
                    body: e
                };
            "function" == typeof AbortController && this.#o && (this.#s = new AbortController, "u" > typeof EventTarget && this.#s.signal instanceof EventTarget && (r.signal = this.#s.signal)), "u" > typeof document && (r.credentials = this.withCredentials ? "include" : "omit"), fetch(this.#t, r).then(e => (e.headers.forEach((e, t) => {
                this.#r += `${t}: ${e}\r
`
            }), this.status = e.status, this.statusText = e.statusText, this.readyState = 3, this.onreadystatechange?.(), t ? e.text() : e.arrayBuffer())).then(e => {
                "string" == typeof e ? this.responseText = e : this.response = e, this.readyState = 4, this.onreadystatechange?.()
            }).catch(e => {
                "AbortError" !== e.name ? this.onerror?.(e) : this.onabort?.()
            })
        }
    }
    let m = "function" == typeof XMLHttpRequest ? "xhr" : "fetch",
        y = "xhr" === m ? XMLHttpRequest : g,
        b = (e, t) => {
            let r = e.options,
                n = e.applyMiddleware("finalizeOptions", r),
                s = {},
                i = e.applyMiddleware("interceptRequest", void 0, {
                    adapter: m,
                    context: e
                });
            if (i) {
                let e = setTimeout(t, 0, null, i);
                return {
                    abort: () => clearTimeout(e)
                }
            }
            let o = new y;
            o instanceof g && "object" == typeof n.fetch && o.setInit(n.fetch, n.useAbortSignal ?? !0);
            let a = n.headers,
                u = n.timeout,
                c = !1,
                l = !1,
                h = !1;
            if (o.onerror = e => {
                    b(o instanceof g ? e instanceof Error ? e : Error(`Request error while attempting to reach ${n.url}`, {
                        cause: e
                    }) : Error(`Request error while attempting to reach is ${n.url}${e.lengthComputable?`(${e.loaded} of ${e.total} bytes transferred)`:""}`))
                }, o.ontimeout = e => {
                    b(Error(`Request timeout while attempting to reach ${n.url}${e.lengthComputable?`(${e.loaded} of ${e.total} bytes transferred)`:""}`))
                }, o.onabort = () => {
                    p(!0), c = !0
                }, o.onreadystatechange = function() {
                    u && (p(), s.socket = setTimeout(() => d("ESOCKETTIMEDOUT"), u.socket)), !c && o && 4 === o.readyState && 0 !== o.status && function() {
                        if (!(c || l || h)) {
                            if (0 === o.status) return b(Error("Unknown XHR error"));
                            p(), l = !0, t(null, {
                                body: o.response || ("" === o.responseType || "text" === o.responseType ? o.responseText : ""),
                                url: n.url,
                                method: n.method,
                                headers: f(o.getAllResponseHeaders()),
                                statusCode: o.status,
                                statusMessage: o.statusText
                            })
                        }
                    }()
                }, o.open(n.method, n.url, !0), o.withCredentials = !!n.withCredentials, a && o.setRequestHeader)
                for (let e in a) a.hasOwnProperty(e) && o.setRequestHeader(e, a[e]);
            return n.rawBody && (o.responseType = "arraybuffer"), e.applyMiddleware("onRequest", {
                options: n,
                adapter: m,
                request: o,
                context: e
            }), o.send(n.body || null), u && (s.connect = setTimeout(() => d("ETIMEDOUT"), u.connect)), {
                abort: function() {
                    c = !0, o && o.abort()
                }
            };

            function d(t) {
                h = !0, o.abort();
                let r = Error("ESOCKETTIMEDOUT" === t ? `Socket timed out on request to ${n.url}` : `Connection timed out on request to ${n.url}`);
                r.code = t, e.channels.error.publish(r)
            }

            function p(e) {
                (e || c || o && o.readyState >= 2 && s.connect) && clearTimeout(s.connect), s.socket && clearTimeout(s.socket)
            }

            function b(e) {
                if (l) return;
                p(!0), l = !0, o = null;
                let r = e || Error(`Network error while attempting to reach ${n.url}`);
                r.isNetworkError = !0, r.request = n, t(r)
            }
        };
    var v, w, C, R, q, E = e.i(23167),
        I = {
            exports: {}
        };
    q || (q = 1, function(e, t) {
        let n;
        t.formatArgs = function(t) {
            if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
            let r = "color: " + this.color;
            t.splice(1, 0, r, "color: inherit");
            let n = 0,
                s = 0;
            t[0].replace(/%[a-zA-Z%]/g, e => {
                "%%" !== e && (n++, "%c" === e && (s = n))
            }), t.splice(s, 0, r)
        }, t.save = function(e) {
            try {
                e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
            } catch {}
        }, t.load = function() {
            let e;
            try {
                e = t.storage.getItem("debug") || t.storage.getItem("DEBUG")
            } catch {}
            return !e && "u" > typeof r.default && "env" in r.default && (e = r.default.env.DEBUG), e
        }, t.useColors = function() {
            let e;
            return "u" > typeof window && !!window.process && ("renderer" === window.process.type || !!window.process.__nwjs) || !("u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("u" > typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "u" > typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "u" > typeof navigator && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || "u" > typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
        }, t.storage = function() {
            try {
                return localStorage
            } catch {}
        }(), n = !1, t.destroy = () => {
            n || (n = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
        }, t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {}), e.exports = (R ? C : (R = 1, C = function(e) {
            function t(e) {
                let n, s, i, o = null;

                function a(...e) {
                    if (!a.enabled) return;
                    let r = Number(new Date);
                    a.diff = r - (n || r), a.prev = n, a.curr = r, n = r, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                    let s = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, n) => {
                        if ("%%" === r) return "%";
                        s++;
                        let i = t.formatters[n];
                        if ("function" == typeof i) {
                            let t = e[s];
                            r = i.call(a, t), e.splice(s, 1), s--
                        }
                        return r
                    }), t.formatArgs.call(a, e), (a.log || t.log).apply(a, e)
                }
                return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = r, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
                    enumerable: !0,
                    configurable: !1,
                    get: () => null !== o ? o : (s !== t.namespaces && (s = t.namespaces, i = t.enabled(e)), i),
                    set: e => {
                        o = e
                    }
                }), "function" == typeof t.init && t.init(a), a
            }

            function r(e, r) {
                let n = t(this.namespace + (typeof r > "u" ? ":" : r) + e);
                return n.log = this.log, n
            }

            function n(e, t) {
                let r = 0,
                    n = 0,
                    s = -1,
                    i = 0;
                for (; r < e.length;)
                    if (n < t.length && (t[n] === e[r] || "*" === t[n])) "*" === t[n] ? (s = n, i = r) : r++, n++;
                    else {
                        if (-1 === s) return !1;
                        n = s + 1, r = ++i
                    } for (; n < t.length && "*" === t[n];) n++;
                return n === t.length
            }
            return t.debug = t, t.default = t, t.coerce = function(e) {
                return e instanceof Error ? e.stack || e.message : e
            }, t.disable = function() {
                let e = [...t.names, ...t.skips.map(e => "-" + e)].join(",");
                return t.enable(""), e
            }, t.enable = function(e) {
                for (let r of (t.save(e), t.namespaces = e, t.names = [], t.skips = [], ("string" == typeof e ? e : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean))) "-" === r[0] ? t.skips.push(r.slice(1)) : t.names.push(r)
            }, t.enabled = function(e) {
                for (let r of t.skips)
                    if (n(e, r)) return !1;
                for (let r of t.names)
                    if (n(e, r)) return !0;
                return !1
            }, t.humanize = function() {
                if (w) return v;
                w = 1;

                function e(e, t, r, n) {
                    return Math.round(e / r) + " " + n + (t >= 1.5 * r ? "s" : "")
                }
                return v = function(t, r) {
                    r = r || {};
                    var n, s, i = typeof t;
                    if ("string" === i && t.length > 0) {
                        var o = t;
                        if (!((o = String(o)).length > 100)) {
                            var a = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);
                            if (a) {
                                var u = parseFloat(a[1]);
                                switch ((a[2] || "ms").toLowerCase()) {
                                    case "years":
                                    case "year":
                                    case "yrs":
                                    case "yr":
                                    case "y":
                                        return 315576e5 * u;
                                    case "weeks":
                                    case "week":
                                    case "w":
                                        return 6048e5 * u;
                                    case "days":
                                    case "day":
                                    case "d":
                                        return 864e5 * u;
                                    case "hours":
                                    case "hour":
                                    case "hrs":
                                    case "hr":
                                    case "h":
                                        return 36e5 * u;
                                    case "minutes":
                                    case "minute":
                                    case "mins":
                                    case "min":
                                    case "m":
                                        return 6e4 * u;
                                    case "seconds":
                                    case "second":
                                    case "secs":
                                    case "sec":
                                    case "s":
                                        return 1e3 * u;
                                    case "milliseconds":
                                    case "millisecond":
                                    case "msecs":
                                    case "msec":
                                    case "ms":
                                        return u
                                }
                            }
                        }
                        return
                    }
                    if ("number" === i && isFinite(t)) return r.long ? (s = Math.abs(t)) >= 864e5 ? e(t, s, 864e5, "day") : s >= 36e5 ? e(t, s, 36e5, "hour") : s >= 6e4 ? e(t, s, 6e4, "minute") : s >= 1e3 ? e(t, s, 1e3, "second") : t + " ms" : (n = Math.abs(t)) >= 864e5 ? Math.round(t / 864e5) + "d" : n >= 36e5 ? Math.round(t / 36e5) + "h" : n >= 6e4 ? Math.round(t / 6e4) + "m" : n >= 1e3 ? Math.round(t / 1e3) + "s" : t + "ms";
                    throw Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t))
                }
            }(), t.destroy = function() {
                console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
            }, Object.keys(e).forEach(r => {
                t[r] = e[r]
            }), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
                let r = 0;
                for (let t = 0; t < e.length; t++) r = (r << 5) - r + e.charCodeAt(t) | 0;
                return t.colors[Math.abs(r) % t.colors.length]
            }, t.enable(t.load()), t
        }))(t);
        let {
            formatters: s
        } = e.exports;
        s.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }
    }(I, I.exports)), I.exports, Object.prototype.hasOwnProperty;
    let $ = typeof E.Buffer > "u" ? () => !1 : e => E.Buffer.isBuffer(e);

    function T(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    let O = ["boolean", "string", "number"];
    var j = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : e.g;
    let A = (e = {}) => {
        let t = e.implementation || Promise;
        if (!t) throw Error("`Promise` is not available in global scope, and no implementation was passed");
        return {
            onReturn: (r, n) => new t((t, s) => {
                let i = n.options.cancelToken;
                i && i.promise.then(e => {
                    r.abort.publish(e), s(e)
                }), r.error.subscribe(s), r.response.subscribe(r => {
                    t(e.onlyBody ? r.body : r)
                }), setTimeout(() => {
                    try {
                        r.request.publish(n)
                    } catch (e) {
                        s(e)
                    }
                }, 0)
            })
        }
    };
    class x {
        __CANCEL__ = !0;
        message;
        constructor(e) {
            this.message = e
        }
        toString() {
            return "Cancel" + (this.message ? `: ${this.message}` : "")
        }
    }
    class S {
        promise;
        reason;
        constructor(e) {
            if ("function" != typeof e) throw TypeError("executor must be a function.");
            let t = null;
            this.promise = new Promise(e => {
                t = e
            }), e(e => {
                this.reason || (this.reason = new x(e), t(this.reason))
            })
        }
        static source = () => {
            let e;
            return {
                token: new S(t => {
                    e = t
                }),
                cancel: e
            }
        }
    }
    A.Cancel = x, A.CancelToken = S, A.isCancel = e => !(!e || !e?.__CANCEL__);
    var D = (e, t, r) => ("GET" === r.method || "HEAD" === r.method) && (e.isNetworkError || !1);

    function F(e) {
        return 100 * Math.pow(2, e) + 100 * Math.random()
    }
    let _ = (e = {}) => {
        var t;
        let r, n, s;
        return r = (t = {
            shouldRetry: D,
            ...e
        }).maxRetries || 5, n = t.retryDelay || F, s = t.shouldRetry, {
            onError: (e, t) => {
                var i;
                let o = t.options,
                    a = o.maxRetries || r,
                    u = o.retryDelay || n,
                    c = o.shouldRetry || s,
                    l = o.attemptNumber || 0;
                if (null !== (i = o.body) && "object" == typeof i && "function" == typeof i.pipe || !c(e, l, o) || l >= a) return e;
                let h = Object.assign({}, t, {
                    options: Object.assign({}, o, {
                        attemptNumber: l + 1
                    })
                });
                return setTimeout(() => t.channels.request.publish(h), u(l)), null
            }
        }
    };
    _.shouldRetry = D;
    var P = e.i(516165),
        M = e.i(159862),
        k = e.i(827540),
        U = e.i(282519),
        V = e.i(187636);

    function L() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = (0, U.popScheduler)(e);
        return (0, V.from)(e, r)
    }
    var N = e.i(806298),
        H = (0, e.i(949918).createErrorClass)(function(e) {
            return function() {
                e(this), this.name = "EmptyError", this.message = "no elements in sequence"
            }
        });

    function z(e, t) {
        var r = "object" == typeof t;
        return new Promise(function(n, s) {
            var i, o = !1;
            e.subscribe({
                next: function(e) {
                    i = e, o = !0
                },
                error: s,
                complete: function() {
                    o ? n(i) : r ? n(t.defaultValue) : s(new H)
                }
            })
        })
    }
    var W = e.i(30214),
        B = e.i(633482),
        G = e.i(7560),
        Y = e.i(866312);

    function J(e) {
        return (0, Y.operate)(function(t, r) {
            var n, s = null,
                i = !1;
            s = t.subscribe((0, G.createOperatorSubscriber)(r, void 0, void 0, function(o) {
                n = (0, B.innerFrom)(e(o, J(e)(t))), s ? (s.unsubscribe(), s = null, n.subscribe(r)) : i = !0
            })), i && (s.unsubscribe(), s = null, n.subscribe(r))
        })
    }
    var K = e.i(544287),
        Q = e.i(79357),
        X = new(e.i(745491)).AsyncScheduler(Q.AsyncAction);

    function Z(e, t) {
        var r = (0, k.isFunction)(e) ? e : function() {
                return e
            },
            n = function(e) {
                return e.error(r())
            };
        return new P.Observable(t ? function(e) {
            return t.schedule(n, 0, e)
        } : n)
    }
    e.i(597961);
    var ee = e.i(448971);

    function et(e) {
        return (0, Y.operate)(function(t, r) {
            try {
                t.subscribe(r)
            } finally {
                r.add(e)
            }
        })
    }
    var er = e.i(134671),
        en = e.i(178480),
        es = e.i(913186),
        ei = e.i(521879);

    function eo(e, t) {
        var r = "object" == typeof t;
        return new Promise(function(n, s) {
            var i = new ei.SafeSubscriber({
                next: function(e) {
                    n(e), i.unsubscribe()
                },
                error: s,
                complete: function() {
                    r ? n(t.defaultValue) : s(new H)
                }
            });
            e.subscribe(i)
        })
    }
    var ea = e.i(686049),
        eu = e.i(824627),
        ec = e.i(168);

    function el(e, t, r) {
        e ? (0, ec.executeSchedule)(r, e, t) : t()
    }
    var eh = Array.isArray,
        ed = e.i(591607),
        ep = e.i(913072);

    function ef() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = (0, U.popResultSelector)(e);
        return r ? (0, ep.pipe)(ef.apply(void 0, (0, eu.__spreadArray)([], (0, eu.__read)(e))), (0, ed.mapOneOrManyArgs)(r)) : (0, Y.operate)(function(t, r) {
            var n, s;
            (n = (0, eu.__spreadArray)([t], (0, eu.__read)(1 === e.length && eh(e[0]) ? e[0] : e)), void 0 === s && (s = ee.identity), function(e) {
                el(void 0, function() {
                    for (var t = n.length, r = Array(t), i = t, o = t, a = function(t) {
                            el(void 0, function() {
                                var a = (0, V.from)(n[t], void 0),
                                    u = !1;
                                a.subscribe((0, G.createOperatorSubscriber)(e, function(n) {
                                    r[t] = n, !u && (u = !0, o--), o || e.next(s(r.slice()))
                                }, function() {
                                    --i || e.complete()
                                }))
                            }, e)
                        }, u = 0; u < t; u++) a(u)
                }, e)
            })(r)
        })
    }
    var eg = e.i(80205),
        em = e.i(262940),
        ey = e.i(132367);
    let eb = e => crypto.getRandomValues(new Uint8Array(e)),
        ev = /\r\n|[\n\r\u2028\u2029]/;

    function ew(e, t) {
        let r = 0;
        for (let n = 0; n < t.length; n++) {
            let s = t[n].length + 1;
            if (r + s > e) return {
                line: n + 1,
                column: e - r
            };
            r += s
        }
        return {
            line: t.length,
            column: t[t.length - 1]?.length ?? 0
        }
    }
    class eC extends Error {
        response;
        statusCode = 400;
        responseBody;
        traceId;
        details;
        constructor(e, t) {
            const r = eq(e, t);
            super(r.message), Object.assign(this, r)
        }
    }
    class eR extends Error {
        response;
        statusCode = 500;
        responseBody;
        traceId;
        details;
        constructor(e) {
            const t = eq(e);
            super(t.message), Object.assign(this, t)
        }
    }

    function eq(e, t) {
        var r, n, s;
        let i = e.body,
            o = {
                response: e,
                statusCode: e.statusCode,
                responseBody: (r = i, -1 !== (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") ? JSON.stringify(r, null, 2) : r),
                traceId: function(e) {
                    let t = e?.headers?.traceparent;
                    if (t) return t.split("-")[1]
                }(e),
                message: "",
                details: void 0
            };
        if (!(0, ea.isRecord)(i)) return o.message = `${e$(e,i)}${eT(o.traceId)}`, o;
        let a = i.error;
        if ("string" == typeof a && "string" == typeof i.message) return o.message = `${a} - ${i.message}${eT(o.traceId)}`, o;
        if ("object" != typeof a || null === a) return "string" == typeof a ? o.message = `${a}${eT(o.traceId)}` : "string" == typeof i.message ? o.message = `${i.message}${eT(o.traceId)}` : o.message = `${e$(e,i)}${eT(o.traceId)}`, o;
        if ("type" in (n = a) && "mutationError" === n.type && "description" in n && "string" == typeof n.description || "type" in (s = a) && "actionError" === s.type && "description" in s && "string" == typeof s.description) {
            let e = a.items || [],
                t = e.slice(0, 5).map(e => e.error?.description).filter(Boolean),
                r = t.length ? `:
- ${t.join(`
- `)}` : "";
            return e.length > 5 && (r += `
...and ${e.length-5} more`), o.message = `${a.description}${eT(o.traceId)}${r}`, o.details = i.error, o
        }
        return eE(a) ? (o.message = eI(a, t?.options?.query?.tag, o.traceId), o.details = i.error) : "description" in a && "string" == typeof a.description ? (o.message = `${a.description}${eT(o.traceId)}`, o.details = a) : o.message = `${e$(e,i)}${eT(o.traceId)}`, o
    }

    function eE(e) {
        return (0, ea.isRecord)(e) && "queryParseError" === e.type && "string" == typeof e.query && "number" == typeof e.start && "number" == typeof e.end
    }

    function eI(e, t, r) {
        let {
            query: n,
            start: s,
            end: i,
            description: o
        } = e, a = r ? `
(traceId: ${r})` : "";
        if (!n || typeof s > "u") return `GROQ query parse error: ${o}${a}`;
        let u = t ? `

Tag: ${t}` : "";
        return `GROQ query parse error:
${function(e,t,r){let n=e.split(ev),{start:s,end:i,markerLines:o}=function(e,t){let r={...e.start},n={...r,...e.end},s=r.line??-1,i=r.column??0,o=n.line,a=n.column,u=Math.max(s-3,0),c=Math.min(t.length,o+3);-1===s&&(u=0),-1===o&&(c=t.length);let l=o-s,h={};if(l)for(let e=0;e<=l;e++){let r=e+s;if(i)if(0===e){let e=t[r-1].length;h[r]=[i,e-i+1]}else if(e===l)h[r]=[0,a];else{let n=t[r-e].length;h[r]=[0,n]}else h[r]=!0}else i===a?i?h[s]=[i,0]:h[s]=!0:h[s]=[i,a-i];return{start:u,end:c,markerLines:h}}({start:ew(t.start,n),end:t.end?ew(t.end,n):void 0},n),a=`
        $ {
            i
        }
        `.length;return e.split(ev,i).slice(s,i).map((e,t)=>{let n=s+1+t,i=`
        $ {
            ` ${n}`.slice(-a)
        } | `,u=o[n],c=!o[n+1];if(!u)return`
        $ {
            i
        }
        $ {
            e.length > 0 ? ` ${e}` : ""
        }
        `;let l="";if(Array.isArray(u)){let t=e.slice(0,Math.max(u[0]-1,0)).replace(/[^\t]/g," "),n=u[1]||1;l=`
        `+i.replace(/\d/g," ")+" "+t+"^".repeat(n),c&&r&&(l+=" "+r)}return">"+i+(e.length>0?`
        $ {
            e
        }
        `:"")+l}).join(`
        `)}(n,{start:s,end:i},o)}${u}${a}`
    }

    function e$(e, t) {
        var r;
        let n = "string" == typeof t ? ` (${(r=t).length>100?`${r.slice(0,100)}\u2026`:r})` : "",
            s = e.statusMessage ? ` ${e.statusMessage}` : "";
        return `${e.method}-request to ${e.url} resulted in HTTP ${e.statusCode}${s}${n}`
    }

    function eT(e) {
        return e ? ` (traceId: ${e})` : ""
    }
    class eO extends Error {
        projectId;
        addOriginUrl;
        constructor({
            projectId: e,
            credentials: t
        } = {}) {
            if (super("CorsOriginError"), this.name = "CorsOriginError", this.projectId = e, e && "u" > typeof location) {
                const r = new URL(`https://sanity.io/manage/project/${e}/api`),
                    {
                        origin: n
                    } = location;
                r.searchParams.set("cors", "add"), r.searchParams.set("origin", n), t && r.searchParams.set("credentials", ""), this.addOriginUrl = r, this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${r}`
            } else e ? this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: https://sanity.io/manage/project/${e}/api` : this.message = "The current origin is not allowed to connect to the Live Content API."
        }
    }
    let ej = {
        onResponse: (e, t) => {
            if (e.statusCode >= 500) throw new eR(e);
            if (e.statusCode >= 400) throw new eC(e, t);
            return e
        }
    };

    function eA(e, t = {}) {
        return ((e = [], t = b) => (function e(t, r) {
            let n = [],
                s = l.reduce((e, t) => (e[t] = e[t] || [], e), {
                    processOptions: [i],
                    validateOptions: [u]
                });

            function o(e) {
                let t, n = "object" == typeof e && e.callSiteStack ? e.callSiteStack : void 0,
                    i = n ? void 0 : Error(),
                    o = c.reduce((e, t) => {
                        let r, n;
                        return e[t] = (r = Object.create(null), n = 0, {
                            publish: function(e) {
                                for (let t in r) r[t](e)
                            },
                            subscribe: function(e) {
                                let t = n++;
                                return r[t] = e,
                                    function() {
                                        delete r[t]
                                    }
                            }
                        }), e
                    }, {}),
                    a = function(e, t, ...r) {
                        let n = "onError" === e,
                            i = t;
                        for (let t = 0; t < s[e].length && (i = (0, s[e][t])(i, ...r), !n || i); t++);
                        return i
                    },
                    u = a("processOptions", e);
                a("validateOptions", u);
                let l = {
                        options: u,
                        channels: o,
                        applyMiddleware: a
                    },
                    h = o.request.subscribe(e => {
                        t = r(e, (t, r) => ((e, t, r) => {
                            let s = e,
                                u = t;
                            if (!s) try {
                                u = a("onResponse", t, r)
                            } catch (e) {
                                u = null, s = e
                            }
                            if (s = s && a("onError", s, r)) {
                                if (s instanceof Error) {
                                    let e = n?.stack || i?.stack;
                                    if ("string" == typeof e) {
                                        let t = e.split("\n").slice(n ? 1 : 2);
                                        t.length > 0 && (s.stack += "\n" + t.join("\n"))
                                    }
                                }
                                o.error.publish(s)
                            } else u && o.response.publish(u)
                        })(t, r, e))
                    });
                o.abort.subscribe(() => {
                    h(), t && t.abort()
                });
                let d = a("onReturn", o, l);
                return d === o && o.request.publish(l), d
            }
            return o.use = function(e) {
                if (!e) throw Error("Tried to add middleware that resolved to falsey value");
                if ("function" == typeof e) throw Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
                if (e.onReturn && s.onReturn.length > 0) throw Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
                return l.forEach(t => {
                    e[t] && s[t].push(e[t])
                }), n.push(e), o
            }, o.clone = () => e(n, r), t.forEach(o.use), o
        })(e, t))([_({
            shouldRetry: ex
        }), ...e, function(e = {}) {
            let t = {},
                r = t => void 0 !== e.ignoreWarnings && (Array.isArray(e.ignoreWarnings) ? e.ignoreWarnings : [e.ignoreWarnings]).some(e => "string" == typeof e ? t.includes(e) : e instanceof RegExp && e.test(t));
            return {
                onResponse: e => {
                    let n = e.headers["x-sanity-warning"];
                    for (let e of Array.isArray(n) ? n : [n]) !e || t[e] || r(e) || (t[e] = !0, console.warn(e));
                    return e
                }
            }
        }(t), {
            processOptions: e => {
                let t = e.body;
                return !t || "function" == typeof t.pipe || $(t) || -1 === O.indexOf(typeof t) && !Array.isArray(t) && ! function(e) {
                    if (!1 === T(e)) return !1;
                    let t = e.constructor;
                    if (void 0 === t) return !0;
                    let r = t.prototype;
                    return !1 !== T(r) && !1 !== r.hasOwnProperty("isPrototypeOf")
                }(t) ? e : Object.assign({}, e, {
                    body: JSON.stringify(e.body),
                    headers: Object.assign({}, e.headers, {
                        "Content-Type": "application/json"
                    })
                })
            }
        }, {
            onResponse: e => {
                let t = e.headers["content-type"] || "",
                    r = -1 !== t.indexOf("application/json");
                return e.body && t && r ? Object.assign({}, e, {
                    body: function(e) {
                        try {
                            return JSON.parse(e)
                        } catch (e) {
                            throw e.message = `Failed to parsed response body as JSON: ${e.message}`, e
                        }
                    }(e.body)
                }) : e
            },
            processOptions: e => Object.assign({}, e, {
                headers: Object.assign({
                    Accept: "application/json"
                }, e.headers)
            })
        }, {
            onRequest: e => {
                if ("xhr" !== e.adapter) return;
                let t = e.request,
                    r = e.context;

                function n(e) {
                    return t => {
                        let n = t.lengthComputable ? t.loaded / t.total * 100 : -1;
                        r.channels.progress.publish({
                            stage: e,
                            percent: n,
                            total: t.total,
                            loaded: t.loaded,
                            lengthComputable: t.lengthComputable
                        })
                    }
                }
                "upload" in t && "onprogress" in t.upload && (t.upload.onprogress = n("upload")), "onprogress" in t && (t.onprogress = n("download"))
            }
        }, ej, function(e = {}) {
            let t = e.implementation || j.Observable;
            if (!t) throw Error("`Observable` is not available in global scope, and no implementation was passed");
            return {
                onReturn: (e, r) => new t(t => (e.error.subscribe(e => t.error(e)), e.progress.subscribe(e => t.next(Object.assign({
                    type: "progress"
                }, e))), e.response.subscribe(e => {
                    t.next(Object.assign({
                        type: "response"
                    }, e)), t.complete()
                }), e.request.publish(r), () => e.abort.publish()))
            }
        }({
            implementation: P.Observable
        })])
    }

    function ex(e, t, r) {
        if (0 === r.maxRetries) return !1;
        let n = "GET" === r.method || "HEAD" === r.method,
            s = (r.uri || r.url).startsWith("/data/query"),
            i = e.response && (429 === e.response.statusCode || 502 === e.response.statusCode || 503 === e.response.statusCode);
        return (!!n || !!s) && !!i || _.shouldRetry(e, t, r)
    }

    function eS(e) {
        return "https://www.sanity.io/help/" + e
    }
    let eD = ["image", "file"],
        eF = ["before", "after", "replace"],
        e_ = e => {
            if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(e)) throw Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters")
        },
        eP = (e, t) => {
            if (null === t || "object" != typeof t || Array.isArray(t)) throw Error(`${e}() takes an object of properties`)
        },
        eM = (e, t) => {
            if ("string" != typeof t || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(t) || t.includes("..")) throw Error(`${e}(): "${t}" is not a valid document ID`)
        },
        ek = (e, t) => {
            if (!t._id) throw Error(`${e}() requires that the document contains an ID ("_id" property)`);
            eM(e, t._id)
        },
        eU = (e, t) => {
            if (!t._type) throw Error(`\`${e}()\` requires that the document contains a type (\`_type\` property)`);
            var r = t._type;
            if ("string" != typeof r) throw Error(`\`${e}()\`: \`${r}\` is not a valid document type`)
        },
        eV = e => {
            if (e.dataset) return e.dataset;
            let t = e.resource;
            if (t && "dataset" === t.type) {
                let e = t.id.split(".");
                if (2 !== e.length) throw Error('Dataset resource ID must be in the format "project.dataset"');
                return e[1]
            }
            throw Error("`dataset` must be provided to perform queries")
        },
        eL = e => {
            if ("string" != typeof e || !/^[a-z0-9._-]{1,75}$/i.test(e)) throw Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
            return e
        },
        eN = e => {
            let t = e.resource;
            if (!t) throw Error("`resource` must be provided to perform resource queries");
            let {
                type: r,
                id: n
            } = t;
            switch (r) {
                case "dataset":
                    if (2 !== n.split(".").length) throw Error('Dataset resource ID must be in the format "project.dataset"');
                    return;
                case "dashboard":
                case "media-library":
                case "canvas":
                    return;
                default:
                    throw Error(`Unsupported resource type: ${r.toString()}`)
            }
        },
        eH = (e, t) => {
            if (t.resource) throw Error(`\`${e}\` does not support resource-based operations`)
        },
        ez = e => {
            var t;
            let r, n;
            return t = (...t) => console.warn(e.join(" "), ...t), r = !1, (...e) => (r || (n = t(...e), r = !0), n)
        },
        eW = ez(["Because you set `withCredentials` to true, we will override your `useCdn`", "setting to be false since (cookie-based) credentials are never set on the CDN"]),
        eB = ez(["Since you haven't set a value for `useCdn`, we will deliver content using our", "global, edge-cached API-CDN. If you wish to have content delivered faster, set", "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."]),
        eG = ez(["The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.", "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."]),
        eY = ez(["The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"]),
        eJ = ez(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", `See ${eS("js-client-browser-token")} for more information and how to hide this warning.`]),
        eK = ez(["You have configured Sanity client to use a token, but also provided `withCredentials: true`.", "This is no longer supported - only token will be used - remove `withCredentials: true`."]),
        eQ = ez(["Using the Sanity client without specifying an API version is deprecated.", `See ${eS("js-client-api-version")}`]),
        eX = (ez(["The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."]), ez(["You have called `createVersion()` with a defined `document`. The recommended approach is to provide a `baseId` and `releaseId` instead."])),
        eZ = ez(["The `~experimental_resource` configuration property has been renamed to `resource`.", "Please update your client configuration to use `resource` instead. Support for `~experimental_resource` will be removed in a future version."]),
        e0 = {
            apiHost: "https://api.sanity.io",
            apiVersion: "1",
            useProjectHostname: !0,
            stega: {
                enabled: !1
            }
        },
        e1 = ["localhost", "127.0.0.1", "0.0.0.0"];

    function e3(e) {
        if (Array.isArray(e) && e.length > 1 && e.includes("raw")) throw TypeError('Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives')
    }
    let e6 = (e, t) => {
        let r, n = {
            ...t,
            ...e,
            stega: {
                ..."boolean" == typeof t.stega ? {
                    enabled: t.stega
                } : t.stega || e0.stega,
                ..."boolean" == typeof e.stega ? {
                    enabled: e.stega
                } : e.stega || {}
            }
        };
        n.apiVersion || eQ();
        let s = {
            ...e0,
            ...n
        };
        s["~experimental_resource"] && !s.resource && (eZ(), s.resource = s["~experimental_resource"]);
        let i = s.resource,
            o = s.useProjectHostname && !i;
        if (typeof Promise > "u") {
            let e = eS("js-client-promise-polyfill");
            throw Error(`No native Promise-implementation found, polyfill needed - see ${e}`)
        }
        if (o && !s.projectId) throw Error("Configuration must contain `projectId`");
        if (i && eN(s), "u" > typeof s.perspective && e3(s.perspective), "encodeSourceMap" in s) throw Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?");
        if ("encodeSourceMapAtPath" in s) throw Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?");
        if ("boolean" != typeof s.stega.enabled) throw Error(`stega.enabled must be a boolean, received ${s.stega.enabled}`);
        if (s.stega.enabled && void 0 === s.stega.studioUrl) throw Error("stega.studioUrl must be defined when stega.enabled is true");
        if (s.stega.enabled && "string" != typeof s.stega.studioUrl && "function" != typeof s.stega.studioUrl) throw Error(`stega.studioUrl must be a string or a function, received ${s.stega.studioUrl}`);
        let a = "u" > typeof window && window.location && window.location.hostname,
            u = a && (r = window.location.hostname, -1 !== e1.indexOf(r)),
            c = !!s.token;
        s.withCredentials && c && (eK(), s.withCredentials = !1), a && u && c && !0 !== s.ignoreBrowserTokenWarning ? eJ() : typeof s.useCdn > "u" && eB(), o && (e => {
                if (!/^[-a-z0-9]+$/i.test(e)) throw Error("`projectId` can only contain only a-z, 0-9 and dashes")
            })(s.projectId), s.dataset && e_(s.dataset), "requestTagPrefix" in s && (s.requestTagPrefix = s.requestTagPrefix ? eL(s.requestTagPrefix).replace(/\.+$/, "") : void 0), s.apiVersion = `${s.apiVersion}`.replace(/^v/, ""), s.isDefaultApi = s.apiHost === e0.apiHost, !0 === s.useCdn && s.withCredentials && eW(), s.useCdn = !1 !== s.useCdn && !s.withCredentials,
            function(e) {
                if ("1" === e || "X" === e) return;
                let t = new Date(e);
                if (!(/^\d{4}-\d{2}-\d{2}$/.test(e) && t instanceof Date && t.getTime() > 0)) throw Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`")
            }(s.apiVersion);
        let l = s.apiHost.split("://", 2),
            h = l[0],
            d = l[1],
            p = s.isDefaultApi ? "apicdn.sanity.io" : d;
        return o ? (s.url = `${h}://${s.projectId}.${d}/v${s.apiVersion}`, s.cdnUrl = `${h}://${s.projectId}.${p}/v${s.apiVersion}`) : (s.url = `${s.apiHost}/v${s.apiVersion}`, s.cdnUrl = s.url), s
    };
    class e9 extends Error {
        name = "ConnectionFailedError";
        status;
        constructor(e, t = {}) {
            const {
                status: r,
                ...n
            } = t;
            super(e, n), this.status = r
        }
    }
    class e2 extends Error {
        name = "DisconnectError";
        reason;
        constructor(e, t, r = {}) {
            super(e, r), this.reason = t
        }
    }
    class e4 extends Error {
        name = "ChannelError";
        data;
        constructor(e, t) {
            super(e), this.data = t
        }
    }
    class e5 extends Error {
        name = "MessageError";
        data;
        constructor(e, t, r = {}) {
            super(e, r), this.data = t
        }
    }
    class e8 extends Error {
        name = "MessageParseError"
    }
    let e7 = ["channelError", "disconnect"];

    function te(e, t) {
        return (0, M.defer)(() => {
            let t = e();
            return t && (t instanceof P.Observable || (0, k.isFunction)(t.lift) && (0, k.isFunction)(t.subscribe)) ? t : L(t)
        }).pipe((0, N.mergeMap)(e => {
            var r, n;
            return r = e, n = t, new P.Observable(e => {
                let t = n.includes("open"),
                    s = n.includes("reconnect");

                function i(t) {
                    if ("data" in t) {
                        let [r, n] = tt(t);
                        e.error(r ? new e8("Unable to parse EventSource error message", {
                            cause: n
                        }) : new e5((n?.data).message, n));
                        return
                    }
                    let n = t.status,
                        i = "number" == typeof n ? n : void 0;
                    void 0 !== i ? e.error(new e9("EventSource connection failed", {
                        status: i
                    })) : r.readyState === r.CLOSED ? e.error(new e9("EventSource connection failed")) : s && e.next({
                        type: "reconnect"
                    })
                }

                function o() {
                    e.next({
                        type: "open"
                    })
                }

                function a(t) {
                    let [n, s] = tt(t);
                    if (n) return void e.error(new e8("Unable to parse EventSource message", {
                        cause: n
                    }));
                    if ("channelError" === t.type) {
                        var i, o;
                        let t, n = new URL(r.url).searchParams.get("tag");
                        e.error(new e4((i = s?.data, o = n, (t = i.error) ? eE(t) ? eI(t, o) : t.description ? t.description : "string" == typeof t ? t : JSON.stringify(t, null, 2) : i.message || "Unknown listener error"), s.data));
                        return
                    }
                    "disconnect" === t.type ? e.error(new e2(`Server disconnected client: ${s.data?.reason||"unknown error"}`)) : e.next({
                        type: t.type,
                        id: t.lastEventId,
                        ...s.data ? {
                            data: s.data
                        } : {}
                    })
                }
                r.addEventListener("error", i), t && r.addEventListener("open", o);
                let u = [...new Set([...e7, ...n])].filter(e => "error" !== e && "open" !== e && "reconnect" !== e);
                return u.forEach(e => r.addEventListener(e, a)), () => {
                    r.removeEventListener("error", i), t && r.removeEventListener("open", o), u.forEach(e => r.removeEventListener(e, a)), r.close()
                }
            })
        }))
    }

    function tt(e) {
        try {
            let t = "string" == typeof e.data && JSON.parse(e.data);
            return [null, {
                type: e.type,
                id: e.lastEventId,
                ...! function(e) {
                    for (let t in e) return !1;
                    return !0
                }(t) ? {
                    data: t
                } : {}
            }]
        } catch (e) {
            return [e, null]
        }
    }

    function tr(e) {
        if ("string" == typeof e) return {
            id: e
        };
        if (Array.isArray(e)) return {
            query: "*[_id in $ids]",
            params: {
                ids: e
            }
        };
        if ("object" == typeof e && null !== e && "query" in e && "string" == typeof e.query) return "params" in e && "object" == typeof e.params && null !== e.params ? {
            query: e.query,
            params: e.params
        } : {
            query: e.query
        };
        let t = ["* Document ID (<docId>)", "* Array of document IDs", "* Object containing `query`"].join(`
`);
        throw Error(`Unknown selection - must be one of:

${t}`)
    }
    class tn {
        selection;
        operations;
        constructor(e, t = {}) {
            this.selection = e, this.operations = t
        }
        set(e) {
            return this._assign("set", e)
        }
        setIfMissing(e) {
            return this._assign("setIfMissing", e)
        }
        diffMatchPatch(e) {
            return eP("diffMatchPatch", e), this._assign("diffMatchPatch", e)
        }
        unset(e) {
            if (!Array.isArray(e)) throw Error("unset(attrs) takes an array of attributes to unset, non-array given");
            return this.operations = Object.assign({}, this.operations, {
                unset: e
            }), this
        }
        inc(e) {
            return this._assign("inc", e)
        }
        dec(e) {
            return this._assign("dec", e)
        }
        insert(e, t, r) {
            return ((e, t, r) => {
                let n = "insert(at, selector, items)";
                if (-1 === eF.indexOf(e)) {
                    let e = eF.map(e => `"${e}"`).join(", ");
                    throw Error(`${n} takes an "at"-argument which is one of: ${e}`)
                }
                if ("string" != typeof t) throw Error(`${n} takes a "selector"-argument which must be a string`);
                if (!Array.isArray(r)) throw Error(`${n} takes an "items"-argument which must be an array`)
            })(e, t, r), this._assign("insert", {
                [e]: t,
                items: r
            })
        }
        append(e, t) {
            return this.insert("after", `${e}[-1]`, t)
        }
        prepend(e, t) {
            return this.insert("before", `${e}[0]`, t)
        }
        splice(e, t, r, n) {
            let s = t < 0 ? t - 1 : t,
                i = typeof r > "u" || -1 === r ? -1 : Math.max(0, t + r),
                o = `${e}[${s}:${s<0&&i>=0?"":i}]`;
            return this.insert("replace", o, n || [])
        }
        ifRevisionId(e) {
            return this.operations.ifRevisionID = e, this
        }
        serialize() {
            return {
                ...tr(this.selection),
                ...this.operations
            }
        }
        toJSON() {
            return this.serialize()
        }
        reset() {
            return this.operations = {}, this
        }
        _assign(e, t, r = !0) {
            return eP(e, t), this.operations = Object.assign({}, this.operations, {
                [e]: Object.assign({}, r && this.operations[e] || {}, t)
            }), this
        }
        _set(e, t) {
            return this._assign(e, t, !1)
        }
    }
    class ts extends tn {
        #a;
        constructor(e, t, r) {
            super(e, t), this.#a = r
        }
        clone() {
            return new ts(this.selection, {
                ...this.operations
            }, this.#a)
        }
        commit(e) {
            if (!this.#a) throw Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
            let t = Object.assign({
                returnFirst: "string" == typeof this.selection,
                returnDocuments: !0
            }, e);
            return this.#a.mutate({
                patch: this.serialize()
            }, t)
        }
    }
    class ti extends tn {
        #a;
        constructor(e, t, r) {
            super(e, t), this.#a = r
        }
        clone() {
            return new ti(this.selection, {
                ...this.operations
            }, this.#a)
        }
        commit(e) {
            if (!this.#a) throw Error("No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method");
            let t = Object.assign({
                returnFirst: "string" == typeof this.selection,
                returnDocuments: !0
            }, e);
            return this.#a.mutate({
                patch: this.serialize()
            }, t)
        }
    }
    let to = {
        returnDocuments: !1
    };
    class ta {
        operations;
        trxId;
        constructor(e = [], t) {
            this.operations = e, this.trxId = t
        }
        create(e) {
            return eP("create", e), this._add({
                create: e
            })
        }
        createIfNotExists(e) {
            let t = "createIfNotExists";
            return eP(t, e), ek(t, e), this._add({
                [t]: e
            })
        }
        createOrReplace(e) {
            let t = "createOrReplace";
            return eP(t, e), ek(t, e), this._add({
                [t]: e
            })
        }
        delete(e) {
            return eM("delete", e), this._add({
                delete: {
                    id: e
                }
            })
        }
        transactionId(e) {
            return e ? (this.trxId = e, this) : this.trxId
        }
        serialize() {
            return [...this.operations]
        }
        toJSON() {
            return this.serialize()
        }
        reset() {
            return this.operations = [], this
        }
        _add(e) {
            return this.operations.push(e), this
        }
    }
    class tu extends ta {
        #a;
        constructor(e, t, r) {
            super(e, r), this.#a = t
        }
        clone() {
            return new tu([...this.operations], this.#a, this.trxId)
        }
        commit(e) {
            if (!this.#a) throw Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
            return this.#a.mutate(this.serialize(), Object.assign({
                transactionId: this.trxId
            }, to, e || {}))
        }
        patch(e, t) {
            let r = "function" == typeof t,
                n = "string" != typeof e && e instanceof ti,
                s = "object" == typeof e && ("query" in e || "id" in e);
            if (n) return this._add({
                patch: e.serialize()
            });
            if (r) {
                let r = t(new ti(e, {}, this.#a));
                if (!(r instanceof ti)) throw Error("function passed to `patch()` must return the patch");
                return this._add({
                    patch: r.serialize()
                })
            }
            if (s) {
                let r = new ti(e, t || {}, this.#a);
                return this._add({
                    patch: r.serialize()
                })
            }
            return this._add({
                patch: {
                    id: e,
                    ...t
                }
            })
        }
    }
    class tc extends ta {
        #a;
        constructor(e, t, r) {
            super(e, r), this.#a = t
        }
        clone() {
            return new tc([...this.operations], this.#a, this.trxId)
        }
        commit(e) {
            if (!this.#a) throw Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
            return this.#a.mutate(this.serialize(), Object.assign({
                transactionId: this.trxId
            }, to, e || {}))
        }
        patch(e, t) {
            let r = "function" == typeof t;
            if ("string" != typeof e && e instanceof ts) return this._add({
                patch: e.serialize()
            });
            if (r) {
                let r = t(new ts(e, {}, this.#a));
                if (!(r instanceof ts)) throw Error("function passed to `patch()` must return the patch");
                return this._add({
                    patch: r.serialize()
                })
            }
            return this._add({
                patch: {
                    id: e,
                    ...t
                }
            })
        }
    }
    let tl = ({
            query: e,
            params: t = {},
            options: r = {}
        }) => {
            let n = new URLSearchParams,
                {
                    tag: s,
                    includeMutations: i,
                    returnQuery: o,
                    ...a
                } = r;
            for (let [r, i] of(s && n.append("tag", s), n.append("query", e), Object.entries(t))) void 0 !== i && n.append(`$${r}`, JSON.stringify(i));
            for (let [e, t] of Object.entries(a)) t && n.append(e, `${t}`);
            return !1 === o && n.append("returnQuery", "false"), !1 === i && n.append("includeMutations", "false"), `?${n}`
        },
        th = e => "response" === e.type,
        td = e => e.body;

    function tp(t, r, n, s, i = {}, o = {}) {
        let a = "stega" in o ? {
                ...n || {},
                ..."boolean" == typeof o.stega ? {
                    enabled: o.stega
                } : o.stega || {}
            } : n,
            u = a.enabled ? (0, ea.stegaClean)(i) : i,
            c = !1 === o.filterResponse ? e => e : e => e.result,
            {
                cache: l,
                next: h,
                ...d
            } = {
                useAbortSignal: "u" > typeof o.signal,
                resultSourceMap: a.enabled ? "withKeyArraySelector" : o.resultSourceMap,
                ...o,
                returnQuery: !1 === o.filterResponse && !1 !== o.returnQuery
            },
            p = tO(t, r, "query", {
                query: s,
                params: u
            }, "u" > typeof l || "u" > typeof h ? {
                ...d,
                fetch: {
                    cache: l,
                    next: h
                }
            } : d);
        return a.enabled ? p.pipe(function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return ef.apply(void 0, (0, eu.__spreadArray)([], (0, eu.__read)(e)))
        }((0, V.from)(e.A(70909).then(function(e) {
            return e.stegaEncodeSourceMap$1
        }).then(({
            stegaEncodeSourceMap: e
        }) => e))), (0, es.map)(([e, t]) => {
            let r = t(e.result, e.resultSourceMap, a);
            return c({
                ...e,
                result: r
            })
        })) : p.pipe((0, es.map)(c))
    }

    function tf(e, t, r, n = {}) {
        let s = {
            uri: tF(e, "doc", (() => {
                if (!n.releaseId) return r;
                let e = (0, ey.getVersionFromId)(r);
                if (!e) {
                    if ((0, ey.isDraftId)(r)) throw Error(`The document ID (\`${r}\`) is a draft, but \`options.releaseId\` is set as \`${n.releaseId}\``);
                    return (0, ey.getVersionId)(r, n.releaseId)
                }
                if (e !== n.releaseId) throw Error(`The document ID (\`${r}\`) is already a version of \`${e}\` release, but this does not match the provided \`options.releaseId\` (\`${n.releaseId}\`)`);
                return r
            })()),
            json: !0,
            tag: n.tag,
            signal: n.signal,
            query: void 0 !== n.includeAllVersions ? {
                includeAllVersions: n.includeAllVersions
            } : void 0
        };
        return tS(e, t, s).pipe((0, eg.filter)(th), (0, es.map)(e => {
            let t = e.body.documents;
            return t ? n.includeAllVersions ? t : t[0] : n.includeAllVersions ? [] : void 0
        }))
    }

    function tg(e, t, r, n = {}) {
        let s = {
            uri: tF(e, "doc", r.join(",")),
            json: !0,
            tag: n.tag,
            signal: n.signal
        };
        return tS(e, t, s).pipe((0, eg.filter)(th), (0, es.map)(e => {
            let t, n, s = (t = e.body.documents || [], n = e => e._id, t.reduce((e, t) => (e[n(t)] = t, e), Object.create(null)));
            return r.map(e => s[e] || null)
        }))
    }

    function tm(e, t, r, n = {}) {
        if (0 === r.length) return L(new Set);
        let s = [];
        for (let e = 0; e < r.length; e += 100) s.push(r.slice(e, e + 100));
        return (0, V.from)(s).pipe((0, em.concatMap)(r => tS(e, t, {
            uri: tF(e, "doc", r.map(encodeURIComponent).join(",")),
            tag: n.tag,
            signal: n.signal,
            query: {
                excludeContent: !0
            }
        }).pipe((0, eg.filter)(th), (0, es.map)(e => {
            let t = new Set;
            for (let r of e.body.omitted || []) "existence" === r.reason && t.add(r.id);
            return new Set(r.filter(e => !t.has(e)))
        }))), function(e, t) {
            var r;
            return (0, Y.operate)((r = arguments.length >= 2, function(n, s) {
                var i = r,
                    o = t,
                    a = 0;
                n.subscribe((0, G.createOperatorSubscriber)(s, function(t) {
                    var r = a++;
                    o = i ? e(o, t, r) : (i = !0, t)
                }, function() {
                    i && s.next(o), s.complete()
                }))
            }))
        }((e, t) => {
            for (let r of t) e.add(r);
            return e
        }, new Set))
    }

    function ty(e, t, r, n = {}) {
        return tO(e, t, "query", {
            query: "*[sanity::partOfRelease($releaseId)]",
            params: {
                releaseId: r
            }
        }, n)
    }

    function tb(e, t, r, n) {
        return ek("createIfNotExists", r), tj(e, t, r, "createIfNotExists", n)
    }

    function tv(e, t, r, n) {
        return ek("createOrReplace", r), tj(e, t, r, "createOrReplace", n)
    }

    function tw(e, t, r, n, s) {
        return ek("createVersion", r), eU("createVersion", r), eX(), tT(e, t, {
            actionType: "sanity.action.document.version.create",
            publishedId: n,
            document: r
        }, s)
    }

    function tC(e, t, r, n, s, i, o) {
        if (!n) throw Error("`createVersion()` requires `baseId` when no `document` is provided");
        if (!r) throw Error("`createVersion()` requires `publishedId` when `baseId` is provided");
        return eM("createVersion", n), eM("createVersion", r), tT(e, t, {
            actionType: "sanity.action.document.version.create",
            publishedId: r,
            baseId: n,
            versionId: s ? (0, ey.getVersionId)(r, s) : (0, ey.getDraftId)(r),
            ifBaseRevisionId: i
        }, o)
    }

    function tR(e, t, r, n) {
        return tO(e, t, "mutate", {
            mutations: [{
                delete: tr(r)
            }]
        }, n)
    }

    function tq(e, t, r, n = !1, s) {
        return tT(e, t, {
            actionType: "sanity.action.document.version.discard",
            versionId: r,
            purge: n
        }, s)
    }

    function tE(e, t, r, n) {
        return ek("replaceVersion", r), eU("replaceVersion", r), tT(e, t, {
            actionType: "sanity.action.document.version.replace",
            document: r
        }, n)
    }

    function tI(e, t, r, n, s) {
        return tT(e, t, {
            actionType: "sanity.action.document.version.unpublish",
            versionId: r,
            publishedId: n
        }, s)
    }

    function t$(e, t, r, n) {
        let s;
        return tO(e, t, "mutate", {
            mutations: Array.isArray(s = r instanceof ti || r instanceof ts ? {
                patch: r.serialize()
            } : r instanceof tu || r instanceof tc ? r.serialize() : r) ? s : [s],
            transactionId: n && n.transactionId || void 0
        }, n)
    }

    function tT(e, t, r, n) {
        let s = Array.isArray(r) ? r : [r],
            i = n && n.transactionId || void 0;
        return tO(e, t, "actions", {
            actions: s,
            transactionId: i,
            skipCrossDatasetReferenceValidation: n && n.skipCrossDatasetReferenceValidation || void 0,
            dryRun: n && n.dryRun || void 0
        }, n)
    }

    function tO(e, t, r, n, s = {}) {
        let i = "mutate" === r,
            o = "actions" === r,
            a = i || o ? "" : tl(n),
            u = !i && !o && a.length < 11264,
            c = u ? a : "",
            l = s.returnFirst,
            {
                timeout: h,
                token: d,
                tag: p,
                headers: f,
                returnQuery: g,
                lastLiveEventId: m,
                cacheMode: y
            } = s,
            b = {
                method: u ? "GET" : "POST",
                uri: tF(e, r, c),
                json: !0,
                body: u ? void 0 : n,
                query: i && ((e = {}) => {
                    let t;
                    return {
                        dryRun: e.dryRun,
                        returnIds: !0,
                        returnDocuments: (t = e.returnDocuments, !1 === t ? void 0 : !!(typeof t > "u") || t),
                        visibility: e.visibility || "sync",
                        autoGenerateArrayKeys: e.autoGenerateArrayKeys,
                        skipCrossDatasetReferenceValidation: e.skipCrossDatasetReferenceValidation
                    }
                })(s),
                timeout: h,
                headers: f,
                token: d,
                tag: p,
                returnQuery: g,
                perspective: s.perspective,
                resultSourceMap: s.resultSourceMap,
                lastLiveEventId: Array.isArray(m) ? m[0] : m,
                cacheMode: y,
                canUseCdn: "query" === r,
                signal: s.signal,
                fetch: s.fetch,
                useAbortSignal: s.useAbortSignal,
                useCdn: s.useCdn
            };
        return tS(e, t, b).pipe((0, eg.filter)(th), (0, es.map)(td), (0, es.map)(e => {
            if (!i) return e;
            let t = e.results || [];
            if (s.returnDocuments) return l ? t[0] && t[0].document : t.map(e => e.document);
            let r = l ? t[0] && t[0].id : t.map(e => e.id);
            return {
                transactionId: e.transactionId,
                results: t,
                [l ? "documentId" : "documentIds"]: r
            }
        }))
    }

    function tj(e, t, r, n, s = {}) {
        return tO(e, t, "mutate", {
            mutations: [{
                [n]: r
            }]
        }, Object.assign({
            returnFirst: !0,
            returnDocuments: !0
        }, s))
    }
    let tA = e => {
            let t = e.config();
            return void 0 !== t.dataset && void 0 !== t.projectId || void 0 !== t.resource
        },
        tx = (e, t) => tA(e) && t.startsWith(tF(e, "query"));

    function tS(e, t, r) {
        var n;
        let s = Error(),
            i = r.url || r.uri,
            o = e.config(),
            a = typeof r.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(r.method || "GET") >= 0 && (i.startsWith("/data/") || tx(e, i) || tA(e) && i.startsWith(tF(e, "mutate")) || tA(e) && i.startsWith(tF(e, "doc", "")) || tA(e) && i.startsWith(tF(e, "listen")) || tA(e) && i.startsWith(tF(e, "history", ""))) : r.canUseCdn,
            u = (r.useCdn ?? o.useCdn) && a,
            c = r.tag && o.requestTagPrefix ? [o.requestTagPrefix, r.tag].join(".") : r.tag || o.requestTagPrefix;
        if (c && null !== r.tag && (r.query = {
                tag: eL(c),
                ...r.query
            }), ["GET", "HEAD", "POST"].indexOf(r.method || "GET") >= 0 && tx(e, i)) {
            let e = r.resultSourceMap ?? o.resultSourceMap;
            void 0 !== e && !1 !== e && (r.query = {
                resultSourceMap: e,
                ...r.query
            });
            let t = r.perspective || o.perspective;
            "u" > typeof t && ("previewDrafts" === t && eY(), e3(t), r.query = {
                perspective: Array.isArray(t) ? t.join(",") : t,
                ...r.query
            }, (Array.isArray(t) && t.length > 0 || "previewDrafts" === t || "drafts" === t) && u && (u = !1, eG())), r.lastLiveEventId && (r.query = {
                ...r.query,
                lastLiveEventId: r.lastLiveEventId
            }), !1 === r.returnQuery && (r.query = {
                returnQuery: "false",
                ...r.query
            }), u && "noStale" == r.cacheMode && (r.query = {
                cacheMode: "noStale",
                ...r.query
            })
        }
        let l = function(e, t = {}) {
                let r = {};
                e.headers && Object.assign(r, e.headers);
                let n = t.token || e.token;
                n && (r.Authorization = `Bearer ${n}`), t.useGlobalApi || e.useProjectHostname || !e.projectId || (r["X-Sanity-Project-ID"] = e.projectId);
                let s = !!(typeof t.withCredentials > "u" ? e.withCredentials : t.withCredentials),
                    i = typeof t.timeout > "u" ? e.timeout : t.timeout;
                return Object.assign({}, t, {
                    headers: Object.assign({}, r, t.headers || {}),
                    timeout: typeof i > "u" ? 3e5 : i,
                    proxy: t.proxy || e.proxy,
                    json: !0,
                    withCredentials: s,
                    fetch: "object" == typeof t.fetch && "object" == typeof e.fetch ? {
                        ...e.fetch,
                        ...t.fetch
                    } : t.fetch || e.fetch
                })
            }(o, Object.assign({}, r, {
                url: t_(e, i, u),
                callSiteStack: s
            })),
            h = new P.Observable(e => t(l, o.requester).subscribe(e));
        return r.signal ? h.pipe((n = r.signal, e => new P.Observable(t => {
            let r = () => t.error(function(e) {
                if (tP) return new DOMException(e?.reason ?? "The operation was aborted.", "AbortError");
                let t = Error(e?.reason ?? "The operation was aborted.");
                return t.name = "AbortError", t
            }(n));
            if (n && n.aborted) return void r();
            let s = e.subscribe(t);
            return n.addEventListener("abort", r), () => {
                n.removeEventListener("abort", r), s.unsubscribe()
            }
        }))) : h
    }

    function tD(e, t, r) {
        return tS(e, t, r).pipe((0, eg.filter)(e => "response" === e.type), (0, es.map)(e => e.body))
    }

    function tF(e, t, r) {
        let n = e.config();
        if (n.resource) {
            eN(n);
            let e = tM(n),
                s = void 0 !== r ? `${t}/${r}` : t;
            return `${e}/${s}`.replace(/\/($|\?)/, "$1")
        }
        let s = eV(n),
            i = `/${t}/${s}`;
        return `/data${void 0!==r?`${i}/${r}`:i}`.replace(/\/($|\?)/, "$1")
    }

    function t_(e, t, r = !1) {
        let {
            url: n,
            cdnUrl: s
        } = e.config();
        return `${r?s:n}/${t.replace(/^\//,"")}`
    }
    let tP = !!globalThis.DOMException,
        tM = e => {
            let t = e.resource;
            if (!t) throw Error("`resource` must be provided to perform resource queries");
            let {
                type: r,
                id: n
            } = t;
            switch (r) {
                case "dataset": {
                    let e = n.split(".");
                    if (2 !== e.length) throw Error('Dataset ID must be in the format "project.dataset"');
                    return `/projects/${e[0]}/datasets/${e[1]}`
                }
                case "canvas":
                    return `/canvases/${n}`;
                case "media-library":
                    return `/media-libraries/${n}`;
                case "dashboard":
                    return `/dashboards/${n}`;
                default:
                    throw Error(`Unsupported resource type: ${r.toString()}`)
            }
        };

    function tk(e, t, r) {
        let n = eV(e.config());
        return tD(e, t, {
            method: "POST",
            uri: `/agent/action/generate/${n}`,
            body: r
        })
    }

    function tU(e, t, r) {
        let n = eV(e.config());
        return tD(e, t, {
            method: "POST",
            uri: `/agent/action/transform/${n}`,
            body: r
        })
    }

    function tV(e, t, r) {
        let n = eV(e.config());
        return tD(e, t, {
            method: "POST",
            uri: `/agent/action/translate/${n}`,
            body: r
        })
    }
    class tL {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        generate(e) {
            return tk(this.#a, this.#u, e)
        }
        transform(e) {
            return tU(this.#a, this.#u, e)
        }
        translate(e) {
            return tV(this.#a, this.#u, e)
        }
    }
    class tN {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        generate(e) {
            return z(tk(this.#a, this.#u, e))
        }
        transform(e) {
            return z(tU(this.#a, this.#u, e))
        }
        translate(e) {
            return z(tV(this.#a, this.#u, e))
        }
        prompt(e) {
            var t, r;
            let n;
            return z((t = this.#a, r = this.#u, n = eV(t.config()), tD(t, r, {
                method: "POST",
                uri: `/agent/action/prompt/${n}`,
                body: e
            })))
        }
        patch(e) {
            var t, r;
            let n;
            return z((t = this.#a, r = this.#u, n = eV(t.config()), tD(t, r, {
                method: "POST",
                uri: `/agent/action/patch/${n}`,
                body: e
            })))
        }
    }
    class tH {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        upload(e, t, r) {
            return tW(this.#a, this.#u, e, t, r)
        }
    }
    class tz {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        upload(e, t, r) {
            return z(tW(this.#a, this.#u, e, t, r).pipe((0, eg.filter)(e => "response" === e.type), (0, es.map)(e => e.body.document)))
        }
    }

    function tW(e, t, r, n, s = {}) {
        var i, o;
        if (-1 === eD.indexOf(r)) throw Error(`Invalid asset type: ${r}. Must be one of ${eD.join(", ")}`);
        let a = s.extract || void 0;
        a && !a.length && (a = ["none"]);
        let u = e.config(),
            c = (i = s, o = n, !(typeof File > "u") && o instanceof File ? Object.assign({
                filename: !1 === i.preserveFilename ? void 0 : o.name,
                contentType: o.type
            }, i) : i),
            {
                tag: l,
                label: h,
                title: d,
                description: p,
                creditLine: f,
                filename: g,
                source: m
            } = c,
            y = u.resource?.type === "media-library",
            b = y ? {
                title: d,
                filename: g
            } : {
                label: h,
                title: d,
                description: p,
                filename: g,
                meta: a,
                creditLine: f
            };
        return m && !y && (b.sourceId = m.id, b.sourceName = m.name, b.sourceUrl = m.url), tS(e, t, {
            tag: l,
            method: "POST",
            timeout: c.timeout || 0,
            uri: function(e, t) {
                let r = "image" === t ? "images" : "files",
                    n = e.resource;
                if (n) {
                    let {
                        type: e,
                        id: t
                    } = n;
                    switch (e) {
                        case "dataset":
                            throw Error("Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead.");
                        case "canvas":
                            return `/canvases/${t}/assets/${r}`;
                        case "media-library":
                            return `/media-libraries/${t}/upload`;
                        case "dashboard":
                            return `/dashboards/${t}/assets/${r}`;
                        default:
                            throw Error(`Unsupported resource type: ${e.toString()}`)
                    }
                }
                let s = eV(e);
                return `assets/${r}/${s}`
            }(u, r),
            headers: c.contentType ? {
                "Content-Type": c.contentType
            } : {},
            query: b,
            body: n
        })
    }
    let tB = (0, M.defer)(() => e.A(440574)).pipe((0, es.map)(({
            default: e
        }) => e), (0, W.shareReplay)(1)),
        tG = new Set([408, 429]);

    function tY() {
        return function(e) {
            return e.pipe(J((e, t) => {
                var r;
                return e instanceof e9 && ("number" != typeof e.status || e.status < 400 || e.status >= 500 || tG.has(e.status)) ? function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return (0, K.mergeAll)(1)((0, V.from)(e, (0, U.popScheduler)(e)))
                }(L({
                    type: "reconnect"
                }), (void 0 === r && (r = X), new P.Observable(function(e) {
                    var t = 1e3;
                    t < 0 && (t = 0);
                    var n = 0;
                    return r.schedule(function() {
                        e.closed || (e.next(n++), e.complete())
                    }, t)
                })).pipe((0, N.mergeMap)(() => t))) : Z(() => e)
            }))
        }
    }
    let tJ = ["includePreviousRevision", "includeResult", "includeMutations", "includeAllVersions", "visibility", "effectFormat", "enableResume", "tag"],
        tK = {
            includeResult: !0
        };

    function tQ(e, t, r = {}) {
        let {
            url: n,
            token: s,
            withCredentials: i,
            requestTagPrefix: o,
            headers: a
        } = this.config(), u = r.tag && o ? [o, r.tag].join(".") : r.tag, c = {
            ...Object.keys(tK).concat(Object.keys(r)).reduce((e, t) => (e[t] = typeof r[t] > "u" ? tK[t] : r[t], e), {}),
            tag: u
        }, l = tl({
            query: e,
            params: t,
            options: {
                tag: u,
                ...tJ.reduce((e, t) => (typeof c[t] > "u" || (e[t] = c[t]), e), {})
            }
        }), h = `${n}${tF(this,"listen",l)}`;
        if (h.length > 14800) return Z(() => Error("Query too large for listener"));
        let d = c.events ? c.events : ["mutation"],
            p = {};
        return i && (p.withCredentials = !0), (s || a) && (p.headers = {}, s && (p.headers.Authorization = `Bearer ${s}`), a && Object.assign(p.headers, a)), te(() => (typeof EventSource > "u" || p.headers ? tB : L(EventSource)).pipe((0, es.map)(e => new e(h, p))), d).pipe(tY(), (0, eg.filter)(e => d.includes(e.type)), (0, es.map)(e => ({
            type: e.type,
            ..."data" in e ? e.data : {}
        })))
    }
    let tX = "2021-03-25";
    class tZ {
        #a;
        constructor(e) {
            this.#a = e
        }
        events({
            includeDrafts: e = !1,
            tag: t,
            waitFor: r
        } = {}) {
            var n, s, i, o, a;
            let {
                projectId: u,
                apiVersion: c,
                token: l,
                withCredentials: h,
                requestTagPrefix: d,
                headers: p
            } = this.#a.config(), f = c.replace(/^v/, "");
            if ("X" !== f && f < tX) throw Error(`The live events API requires API version ${tX} or later. The current API version is ${f}. Please update your API version to use this feature.`);
            if (e && !l && !h) throw Error("The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role.");
            let g = tF(this.#a, "live/events"),
                m = new URL(this.#a.getUrl(g, !1)),
                y = t && d ? [d, t].join(".") : t;
            y && m.searchParams.set("tag", y), e && m.searchParams.set("includeDrafts", "true"), r && m.searchParams.set("waitFor", r);
            let b = {};
            e && h && (b.withCredentials = !0), (e && l || p) && (b.headers = {}, e && l && (b.headers.Authorization = `Bearer ${l}`), p && Object.assign(b.headers, p));
            let v = `${m.href}::${JSON.stringify(b)}`,
                w = t0.get(v);
            if (w) return w;
            let C = te(() => (typeof EventSource > "u" || b.headers ? tB : L(EventSource)).pipe((0, es.map)(e => new e(m.href, b))), ["message", "restart", "welcome", "reconnect", "goaway"]),
                R = (s = new URL(this.#a.getUrl("/check/cors", !1)), i = u, o = !0 === b.withCredentials, new P.Observable(e => {
                    let t = new AbortController,
                        {
                            signal: r
                        } = t;
                    return fetch(s, {
                        method: "GET",
                        mode: "cors",
                        credentials: "omit",
                        signal: r
                    }).then(e => {
                        if (!(r.aborted || !e.ok)) return e.json()
                    }).then(t => {
                        if (!r.aborted) {
                            if (o && t?.result?.withCredentials === !1) return void e.error(new eO({
                                projectId: i,
                                credentials: !0
                            }));
                            if (t?.result?.allowed === !1) return void e.error(new eO({
                                projectId: i,
                                credentials: o
                            }));
                            e.next(), e.complete()
                        }
                    }).catch(() => {
                        r.aborted || e.closed || (e.next(), e.complete())
                    }), () => t.abort()
                })),
                q = C.pipe(tY(), (0, N.mergeMap)(e => "reconnect" === e.type ? R.pipe((0, N.mergeMap)(() => L(e))) : L(e)), J(e => e instanceof eO ? Z(() => e) : R.pipe((0, N.mergeMap)(() => {
                    throw e
                }))), (0, es.map)(e => {
                    if ("message" === e.type) {
                        let {
                            data: t,
                            ...r
                        } = e;
                        return {
                            ...r,
                            tags: t.tags
                        }
                    }
                    return e
                })).pipe(et(() => t0.delete(v)), (a = "function" == typeof(n = {
                    predicate: e => "welcome" === e.type
                }) ? {
                    predicate: n,
                    ...void 0
                } : n, e => {
                    var t, r;
                    let n, s = !1,
                        {
                            predicate: i,
                            ...o
                        } = a,
                        u = e.pipe((t = e => {
                            a.predicate(e) && (s = !0, n = e)
                        }, (r = (0, k.isFunction)(t) ? {
                            next: t,
                            error: void 0,
                            complete: void 0
                        } : t) ? (0, Y.operate)(function(e, t) {
                            null == (n = r.subscribe) || n.call(r);
                            var n, s = !0;
                            e.subscribe((0, G.createOperatorSubscriber)(t, function(e) {
                                var n;
                                null == (n = r.next) || n.call(r, e), t.next(e)
                            }, function() {
                                var e;
                                s = !1, null == (e = r.complete) || e.call(r), t.complete()
                            }, function(e) {
                                var n;
                                s = !1, null == (n = r.error) || n.call(r, e), t.error(e)
                            }, function() {
                                var e, t;
                                s && (null == (e = r.unsubscribe) || e.call(r)), null == (t = r.finalize) || t.call(r)
                            }))
                        }) : ee.identity), et(() => {
                            s = !1, n = void 0
                        }), (0, er.share)(o)),
                        c = new P.Observable(e => {
                            s && e.next(n), e.complete()
                        });
                    return (0, en.merge)(u, c)
                }));
            return t0.set(v, q), q
        }
    }
    let t0 = new Map;
    class t1 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        create(e, t) {
            return t9(this.#a, this.#u, "PUT", e, t)
        }
        edit(e, t) {
            return t9(this.#a, this.#u, "PATCH", e, t)
        }
        delete(e) {
            return t9(this.#a, this.#u, "DELETE", e)
        }
        list() {
            eH("dataset", this.#a.config());
            let e = this.#a.config(),
                t = e.projectId,
                r = "/datasets";
            return !1 === e.useProjectHostname && (r = `/projects/${t}/datasets`), tD(this.#a, this.#u, {
                uri: r,
                tag: null
            })
        }
        getEmbeddingsSettings(e) {
            return eH("dataset", this.#a.config()), e_(e), tD(this.#a, this.#u, {
                uri: t6(this.#a, e),
                tag: null
            })
        }
        editEmbeddingsSettings(e, t) {
            return eH("dataset", this.#a.config()), e_(e), tD(this.#a, this.#u, {
                method: "PUT",
                uri: t6(this.#a, e),
                body: t,
                tag: null
            })
        }
    }
    class t3 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        create(e, t) {
            return eH("dataset", this.#a.config()), z(t9(this.#a, this.#u, "PUT", e, t))
        }
        edit(e, t) {
            return eH("dataset", this.#a.config()), z(t9(this.#a, this.#u, "PATCH", e, t))
        }
        delete(e) {
            return eH("dataset", this.#a.config()), z(t9(this.#a, this.#u, "DELETE", e))
        }
        list() {
            eH("dataset", this.#a.config());
            let e = this.#a.config(),
                t = e.projectId,
                r = "/datasets";
            return !1 === e.useProjectHostname && (r = `/projects/${t}/datasets`), z(tD(this.#a, this.#u, {
                uri: r,
                tag: null
            }))
        }
        getEmbeddingsSettings(e) {
            return eH("dataset", this.#a.config()), e_(e), z(tD(this.#a, this.#u, {
                uri: t6(this.#a, e),
                tag: null
            }))
        }
        editEmbeddingsSettings(e, t) {
            return eH("dataset", this.#a.config()), e_(e), z(tD(this.#a, this.#u, {
                method: "PUT",
                uri: t6(this.#a, e),
                body: t,
                tag: null
            }))
        }
    }

    function t6(e, t) {
        let r = e.config();
        return !1 === r.useProjectHostname ? `/projects/${r.projectId}/datasets/${t}/settings/embeddings` : `/datasets/${t}/settings/embeddings`
    }

    function t9(e, t, r, n, s) {
        return eH("dataset", e.config()), e_(n), tD(e, t, {
            method: r,
            uri: `/datasets/${n}`,
            body: s,
            tag: null
        })
    }
    class t2 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        getPlaybackInfo(e, t = {}) {
            var r, n;
            let s = this.#a.config(),
                i = (s.resource || s["~experimental_resource"])?.id,
                {
                    instanceId: o,
                    libraryId: a
                } = function(e) {
                    let t = "object" == typeof e && "_ref" in e ? e._ref : e,
                        r = t5.exec(t);
                    if (r) {
                        let [, e, t] = r;
                        return {
                            libraryId: e,
                            instanceId: t
                        }
                    }
                    if ("string" == typeof e && e.startsWith("video-")) return {
                        instanceId: e
                    };
                    throw Error(`Invalid video asset instance identifier "${t}": must be a valid video instance id or a Global Dataset Reference (GDR) to the video asset in the Media Library`)
                }(e),
                u = a || i;
            if (!u) throw Error("Could not determine Media Library ID - you need to provide a valid Media Library ID in the client config or a Media Library GDR");
            let c = (r = o, n = u, `/media-libraries/${n}/video/${r}/playback-info`),
                l = function(e) {
                    let t = {};
                    if (e.transformations) {
                        let {
                            thumbnail: r,
                            animated: n,
                            storyboard: s
                        } = e.transformations;
                        r && (r.width && (t.thumbnailWidth = r.width), r.height && (t.thumbnailHeight = r.height), void 0 !== r.time && (t.thumbnailTime = r.time), r.fit && (t.thumbnailFit = r.fit), r.format && (t.thumbnailFormat = r.format)), n && (n.width && (t.animatedWidth = n.width), n.height && (t.animatedHeight = n.height), void 0 !== n.start && (t.animatedStart = n.start), void 0 !== n.end && (t.animatedEnd = n.end), n.fps && (t.animatedFps = n.fps), n.format && (t.animatedFormat = n.format)), s && s.format && (t.storyboardFormat = s.format)
                    }
                    return e.expiration && (t.expiration = e.expiration), t
                }(t);
            return tD(this.#a, this.#u, {
                method: "GET",
                uri: c,
                query: l
            })
        }
    }
    class t4 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        getPlaybackInfo(e, t = {}) {
            return z(new t2(this.#a.observable, this.#u).getPlaybackInfo(e, t))
        }
    }
    let t5 = /^media-library:(ml[^:]+):([^:]+)$/;
    class t8 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        list(e) {
            let t = {};
            return e?.includeMembers === !1 && (t.includeMembers = "false"), e?.includeFeatures === !1 && (t.includeFeatures = "false"), e?.organizationId && (t.organizationId = e.organizationId), e?.onlyExplicitMembership && (t.onlyExplicitMembership = "true"), tD(this.#a, this.#u, {
                uri: "/projects",
                query: t
            })
        }
        getById(e) {
            return tD(this.#a, this.#u, {
                uri: `/projects/${e}`
            })
        }
    }
    class t7 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        list(e) {
            let t = {};
            return e?.includeMembers === !1 && (t.includeMembers = "false"), e?.includeFeatures === !1 && (t.includeFeatures = "false"), e?.organizationId && (t.organizationId = e.organizationId), e?.onlyExplicitMembership && (t.onlyExplicitMembership = "true"), z(tD(this.#a, this.#u, {
                uri: "/projects",
                query: t
            }))
        }
        getById(e) {
            return z(tD(this.#a, this.#u, {
                uri: `/projects/${e}`
            }))
        }
    }
    let re = ((e, t = 21) => {
            var r;
            let n, s;
            return r = t, s = -~(1.6 * (n = (2 << Math.log(e.length - 1) / Math.LN2) - 1) * r / e.length), (t = r) => {
                let i = "";
                for (;;) {
                    let r = eb(s),
                        o = 0 | s;
                    for (; o--;)
                        if ((i += e[r[o] & n] || "").length === t) return i
                }
            }
        })("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 8),
        rt = (e, t) => t ? (0, ey.getVersionId)(e, t) : (0, ey.getDraftId)(e);

    function rr(e, {
        releaseId: t,
        publishedId: r,
        document: n
    }) {
        if (r && n._id) {
            let e = rt(r, t);
            return ((e, t) => {
                if (t._id && t._id !== e) throw Error(`The provided document ID (\`${t._id}\`) does not match the generated version ID (\`${e}\`)`)
            })(e, n), e
        }
        if (n._id) {
            let r = (0, ey.isDraftId)(n._id),
                s = (0, ey.isVersionId)(n._id);
            if (!r && !s) throw Error(`\`${e}()\` requires a document with an \`_id\` that is a version or draft ID`);
            if (t) {
                if (r) throw Error(`\`${e}()\` was called with a document ID (\`${n._id}\`) that is a draft ID, but a release ID (\`${t}\`) was also provided.`);
                let s = (0, ey.getVersionFromId)(n._id);
                if (s !== t) throw Error(`\`${e}()\` was called with a document ID (\`${n._id}\`) that is a version ID, but the release ID (\`${t}\`) does not match the document's version ID (\`${s}\`).`)
            }
            return n._id
        }
        if (r) return rt(r, t);
        throw Error(`\`${e}()\` requires either a publishedId or a document with an \`_id\``)
    }
    let rn = (e, t) => {
        let [r, n, s] = ((e, t) => {
            if ("object" == typeof e && null !== e && ("releaseId" in e || "metadata" in e)) {
                let {
                    releaseId: r = re(),
                    metadata: n = {}
                } = e;
                return [r, n, t]
            }
            return [re(), {}, e]
        })(e, t);
        return {
            action: {
                actionType: "sanity.action.release.create",
                releaseId: r,
                metadata: {
                    ...n,
                    releaseType: n.releaseType || "undecided"
                }
            },
            options: s
        }
    };
    class rs {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        get({
            releaseId: e
        }, t) {
            return tf(this.#a, this.#u, `_.releases.${e}`, t)
        }
        create(e, t) {
            let {
                action: r,
                options: n
            } = rn(e, t), {
                releaseId: s,
                metadata: i
            } = r;
            return tT(this.#a, this.#u, r, n).pipe((0, es.map)(e => ({
                ...e,
                releaseId: s,
                metadata: i
            })))
        }
        edit({
            releaseId: e,
            patch: t
        }, r) {
            return tT(this.#a, this.#u, {
                actionType: "sanity.action.release.edit",
                releaseId: e,
                patch: t
            }, r)
        }
        publish({
            releaseId: e
        }, t) {
            return tT(this.#a, this.#u, {
                actionType: "sanity.action.release.publish",
                releaseId: e
            }, t)
        }
        archive({
            releaseId: e
        }, t) {
            return tT(this.#a, this.#u, {
                actionType: "sanity.action.release.archive",
                releaseId: e
            }, t)
        }
        unarchive({
            releaseId: e
        }, t) {
            return tT(this.#a, this.#u, {
                actionType: "sanity.action.release.unarchive",
                releaseId: e
            }, t)
        }
        schedule({
            releaseId: e,
            publishAt: t
        }, r) {
            return tT(this.#a, this.#u, {
                actionType: "sanity.action.release.schedule",
                releaseId: e,
                publishAt: t
            }, r)
        }
        unschedule({
            releaseId: e
        }, t) {
            return tT(this.#a, this.#u, {
                actionType: "sanity.action.release.unschedule",
                releaseId: e
            }, t)
        }
        delete({
            releaseId: e
        }, t) {
            return tT(this.#a, this.#u, {
                actionType: "sanity.action.release.delete",
                releaseId: e
            }, t)
        }
        fetchDocuments({
            releaseId: e
        }, t) {
            return ty(this.#a, this.#u, e, t)
        }
    }
    class ri {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        get({
            releaseId: e
        }, t) {
            return z(tf(this.#a, this.#u, `_.releases.${e}`, t))
        }
        async create(e, t) {
            let {
                action: r,
                options: n
            } = rn(e, t), {
                releaseId: s,
                metadata: i
            } = r;
            return {
                ...await z(tT(this.#a, this.#u, r, n)),
                releaseId: s,
                metadata: i
            }
        }
        edit({
            releaseId: e,
            patch: t
        }, r) {
            return z(tT(this.#a, this.#u, {
                actionType: "sanity.action.release.edit",
                releaseId: e,
                patch: t
            }, r))
        }
        publish({
            releaseId: e
        }, t) {
            return z(tT(this.#a, this.#u, {
                actionType: "sanity.action.release.publish",
                releaseId: e
            }, t))
        }
        archive({
            releaseId: e
        }, t) {
            return z(tT(this.#a, this.#u, {
                actionType: "sanity.action.release.archive",
                releaseId: e
            }, t))
        }
        unarchive({
            releaseId: e
        }, t) {
            return z(tT(this.#a, this.#u, {
                actionType: "sanity.action.release.unarchive",
                releaseId: e
            }, t))
        }
        schedule({
            releaseId: e,
            publishAt: t
        }, r) {
            return z(tT(this.#a, this.#u, {
                actionType: "sanity.action.release.schedule",
                releaseId: e,
                publishAt: t
            }, r))
        }
        unschedule({
            releaseId: e
        }, t) {
            return z(tT(this.#a, this.#u, {
                actionType: "sanity.action.release.unschedule",
                releaseId: e
            }, t))
        }
        delete({
            releaseId: e
        }, t) {
            return z(tT(this.#a, this.#u, {
                actionType: "sanity.action.release.delete",
                releaseId: e
            }, t))
        }
        fetchDocuments({
            releaseId: e
        }, t) {
            return z(ty(this.#a, this.#u, e, t))
        }
    }
    class ro {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        getById(e) {
            return tD(this.#a, this.#u, {
                uri: `/users/${e}`
            })
        }
    }
    class ra {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        getById(e) {
            return z(tD(this.#a, this.#u, {
                uri: `/users/${e}`
            }))
        }
    }
    class ru {
        assets;
        datasets;
        live;
        mediaLibrary;
        projects;
        users;
        agent;
        releases;
        #c;
        #l;
        #u;
        listen = tQ;
        constructor(e, t = e0) {
            this.config(t), this.#l = e;
            const r = t._requestHandler;
            this.#u = r ? (() => {
                let n;
                return (s, i) => (n || (n = new rc(e, {
                    ...t,
                    _requestHandler: void 0
                })), r(s, t => e(t, i), n))
            })() : e, this.assets = new tH(this, this.#u), this.datasets = new t1(this, this.#u), this.live = new tZ(this), this.mediaLibrary = {
                video: new t2(this, this.#u)
            }, this.projects = new t8(this, this.#u), this.users = new ro(this, this.#u), this.agent = {
                action: new tL(this, this.#u)
            }, this.releases = new rs(this, this.#u)
        }
        clone() {
            return new ru(this.#l, this.config())
        }
        config(e) {
            if (void 0 === e) return {
                ...this.#c
            };
            if (this.#c && !1 === this.#c.allowReconfigure) throw Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
            return this.#c = e6(e, this.#c || {}), this
        }
        withConfig(e) {
            let t = this.config();
            return new ru(this.#l, {
                ...t,
                ...e,
                stega: {
                    ...t.stega || {},
                    ..."boolean" == typeof e?.stega ? {
                        enabled: e.stega
                    } : e?.stega || {}
                }
            })
        }
        fetch(e, t, r) {
            return tp(this, this.#u, this.#c.stega, e, t, r)
        }
        getDocument(e, t) {
            if (t?.includeAllVersions === !0) return tf(this, this.#u, e, {
                ...t,
                includeAllVersions: !0
            });
            let r = {
                signal: t?.signal,
                tag: t?.tag,
                releaseId: t?.releaseId,
                ...t && "includeAllVersions" in t ? {
                    includeAllVersions: !1
                } : {}
            };
            return tf(this, this.#u, e, r)
        }
        getDocuments(e, t) {
            return tg(this, this.#u, e, t)
        }
        documentsExists(e, t) {
            return tm(this, this.#u, e, t)
        }
        create(e, t) {
            return tj(this, this.#u, e, "create", t)
        }
        createIfNotExists(e, t) {
            return tb(this, this.#u, e, t)
        }
        createOrReplace(e, t) {
            return tv(this, this.#u, e, t)
        }
        createVersion({
            document: e,
            publishedId: t,
            releaseId: r,
            baseId: n,
            ifBaseRevisionId: s
        }, i) {
            if (!e) return tC(this, this.#u, t, n, r, s, i);
            let o = rr("createVersion", {
                    document: e,
                    publishedId: t,
                    releaseId: r
                }),
                a = {
                    ...e,
                    _id: o
                },
                u = t || (0, ey.getPublishedId)(e._id);
            return tw(this, this.#u, a, u, i)
        }
        delete(e, t) {
            return tR(this, this.#u, e, t)
        }
        discardVersion({
            releaseId: e,
            publishedId: t
        }, r, n) {
            let s = rt(t, e);
            return tq(this, this.#u, s, r, n)
        }
        replaceVersion({
            document: e,
            publishedId: t,
            releaseId: r
        }, n) {
            let s = rr("replaceVersion", {
                    document: e,
                    publishedId: t,
                    releaseId: r
                }),
                i = {
                    ...e,
                    _id: s
                };
            return tE(this, this.#u, i, n)
        }
        unpublishVersion({
            releaseId: e,
            publishedId: t
        }, r) {
            let n = (0, ey.getVersionId)(t, e);
            return tI(this, this.#u, n, t, r)
        }
        mutate(e, t) {
            return t$(this, this.#u, e, t)
        }
        patch(e, t) {
            return new ts(e, t, this)
        }
        transaction(e) {
            return new tc(e, this)
        }
        action(e, t) {
            return tT(this, this.#u, e, t)
        }
        request(e) {
            return tD(this, this.#u, e)
        }
        getUrl(e, t) {
            return t_(this, e, t)
        }
        getDataUrl(e, t) {
            return tF(this, e, t)
        }
    }
    class rc {
        assets;
        datasets;
        live;
        mediaLibrary;
        projects;
        users;
        agent;
        releases;
        observable;
        #c;
        #l;
        #u;
        listen = tQ;
        constructor(e, t = e0) {
            this.config(t), this.#l = e;
            const r = t._requestHandler;
            this.#u = r ? (() => {
                let n;
                return (s, i) => (n || (n = new rc(e, {
                    ...t,
                    _requestHandler: void 0
                })), r(s, t => e(t, i), n))
            })() : e, this.assets = new tz(this, this.#u), this.datasets = new t3(this, this.#u), this.live = new tZ(this), this.mediaLibrary = {
                video: new t4(this, this.#u)
            }, this.projects = new t7(this, this.#u), this.users = new ra(this, this.#u), this.agent = {
                action: new tN(this, this.#u)
            }, this.releases = new ri(this, this.#u), this.observable = new ru(e, t)
        }
        clone() {
            return new rc(this.#l, this.config())
        }
        config(e) {
            if (void 0 === e) return {
                ...this.#c
            };
            if (this.#c && !1 === this.#c.allowReconfigure) throw Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
            return this.observable && this.observable.config(e), this.#c = e6(e, this.#c || {}), this
        }
        withConfig(e) {
            let t = this.config();
            return new rc(this.#l, {
                ...t,
                ...e,
                stega: {
                    ...t.stega || {},
                    ..."boolean" == typeof e?.stega ? {
                        enabled: e.stega
                    } : e?.stega || {}
                }
            })
        }
        fetch(e, t, r) {
            return z(tp(this, this.#u, this.#c.stega, e, t, r))
        }
        getDocument(e, t) {
            if (t?.includeAllVersions === !0) return z(tf(this, this.#u, e, {
                ...t,
                includeAllVersions: !0
            }));
            let r = {
                signal: t?.signal,
                tag: t?.tag,
                releaseId: t?.releaseId,
                ...t && "includeAllVersions" in t ? {
                    includeAllVersions: !1
                } : {}
            };
            return z(tf(this, this.#u, e, r))
        }
        getDocuments(e, t) {
            return z(tg(this, this.#u, e, t))
        }
        documentsExists(e, t) {
            return z(tm(this, this.#u, e, t))
        }
        create(e, t) {
            return z(tj(this, this.#u, e, "create", t))
        }
        createIfNotExists(e, t) {
            return z(tb(this, this.#u, e, t))
        }
        createOrReplace(e, t) {
            return z(tv(this, this.#u, e, t))
        }
        createVersion({
            document: e,
            publishedId: t,
            releaseId: r,
            baseId: n,
            ifBaseRevisionId: s
        }, i) {
            if (!e) return eo(tC(this, this.#u, t, n, r, s, i));
            let o = rr("createVersion", {
                    document: e,
                    publishedId: t,
                    releaseId: r
                }),
                a = {
                    ...e,
                    _id: o
                },
                u = t || (0, ey.getPublishedId)(e._id);
            return eo(tw(this, this.#u, a, u, i))
        }
        delete(e, t) {
            return z(tR(this, this.#u, e, t))
        }
        discardVersion({
            releaseId: e,
            publishedId: t
        }, r, n) {
            let s = rt(t, e);
            return z(tq(this, this.#u, s, r, n))
        }
        replaceVersion({
            document: e,
            publishedId: t,
            releaseId: r
        }, n) {
            let s = rr("replaceVersion", {
                    document: e,
                    publishedId: t,
                    releaseId: r
                }),
                i = {
                    ...e,
                    _id: s
                };
            return eo(tE(this, this.#u, i, n))
        }
        unpublishVersion({
            releaseId: e,
            publishedId: t
        }, r) {
            let n = (0, ey.getVersionId)(t, e);
            return z(tI(this, this.#u, n, t, r))
        }
        mutate(e, t) {
            return z(t$(this, this.#u, e, t))
        }
        patch(e, t) {
            return new ti(e, t, this)
        }
        transaction(e) {
            return new tu(e, this)
        }
        action(e, t) {
            return z(tT(this, this.#u, e, t))
        }
        request(e) {
            return z(tD(this, this.#u, e))
        }
        dataRequest(e, t, r) {
            return z(tO(this, this.#u, e, t, r))
        }
        getUrl(e, t) {
            return t_(this, e, t)
        }
        getDataUrl(e, t) {
            return tF(this, e, t)
        }
    }
    let rl = {
            requester: eA(t = []),
            createClient: e => {
                let r = eA(t, {
                    ignoreWarnings: e.ignoreWarnings
                });
                return new rc((t, n) => (n || r)({
                    maxRedirects: 0,
                    maxRetries: e.maxRetries,
                    retryDelay: e.retryDelay,
                    lineage: e.lineage,
                    ...t
                }), e)
            }
        },
        rh = (rl.requester, rl.createClient),
        rd = r.default.env.SANITY_STUDIO_URL || "https://studio.hexagon.unity.com",
        rp = rh({
            projectId: r.default.env.SANITY_STUDIO_PROJECT_ID || "fuvbjjlp",
            dataset: r.default.env.SANITY_STUDIO_DATASET || "production",
            apiVersion: "2023-10-12",
            useCdn: !1,
            perspective: "published",
            requestTagPrefix: "hexagon-web",
            stega: {
                studioUrl: rd
            }
        }),
        rf = rp.withConfig({
            token: r.default.env.SANITY_STUDIO_TOKEN || "skbmHHM41x7T83M45rdoQ5eDnIZvmSMtvNLDWgtqaMVk7iqH2LROZuyD9CfiQEWyi8W04C9ImPHWWK3q19ERi5XWv0L1GP2s4u1p3sUTbjuDdpmVWr3ZsI8vGIbwZRn43SWI9ZYeYzzNBHk2DknFUXEfxpLGSZsNwiv24EcAFisqkG7gVso6",
            useCdn: !0,
            perspective: "published"
        });
    rp.withConfig({
        token: r.default.env.SANITY_STUDIO_REVALIDATION_TOKEN,
        useCdn: !1
    }), rp.withConfig({
        useCdn: !1,
        token: r.default.env.SANITY_WRITE_TOKEN,
        perspective: "raw"
    }), e.s(["cdnClient", 0, rf], 591336)
}]);