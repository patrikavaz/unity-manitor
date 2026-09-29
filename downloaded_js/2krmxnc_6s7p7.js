(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 591336, e => {
    "use strict";
    var t, r = e.i(913836);
    let n = !(typeof navigator > "u") && "ReactNative" === navigator.product,
        i = {
            timeout: n ? 6e4 : 12e4
        },
        s = function(e) {
            let t = {
                ...i,
                ..."string" == typeof e ? {
                    url: e
                } : e
            };
            if (t.timeout = function e(t) {
                    if (!1 === t || 0 === t) return !1;
                    if (t.connect || t.socket) return t;
                    let r = Number(t);
                    return isNaN(r) ? e(i.timeout) : {
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
                        i = e.slice(t + 1);
                    if (!n) return {
                        url: r,
                        searchParams: new URLSearchParams(i)
                    };
                    if ("function" != typeof decodeURIComponent) throw Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");
                    let s = new URLSearchParams;
                    for (let e of i.split("&")) {
                        let [t, r] = e.split("=");
                        t && s.append(o(t), o(r || ""))
                    }
                    return {
                        url: r,
                        searchParams: s
                    }
                }(t.url);
                for (let [n, i] of Object.entries(t.query)) {
                    if (void 0 !== i)
                        if (Array.isArray(i))
                            for (let e of i) r.append(n, e);
                        else r.append(n, i);
                    let s = r.toString();
                    s && (t.url = `${e}?${s}`)
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
            for (var r = Object.create(null), n = e(t).split("\n"), i = 0; i < n.length; i++) {
                var s, o = n[i],
                    a = o.indexOf(":"),
                    u = e(o.slice(0, a)).toLowerCase(),
                    c = e(o.slice(a + 1));
                typeof r[u] > "u" ? r[u] = c : (s = r[u], "[object Array]" === Object.prototype.toString.call(s)) ? r[u].push(c) : r[u] = [r[u], c]
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
        #i;
        #s = {};
        #o;
        open(e, t, r) {
            this.#e = e, this.#t = t, this.#r = "", this.readyState = 1, this.onreadystatechange?.(), this.#i = void 0
        }
        abort() {
            this.#i && this.#i.abort()
        }
        getAllResponseHeaders() {
            return this.#r
        }
        setRequestHeader(e, t) {
            this.#n[e] = t
        }
        setInit(e, t = !0) {
            this.#s = e, this.#o = t
        }
        send(e) {
            let t = "arraybuffer" !== this.responseType,
                r = {
                    ...this.#s,
                    method: this.#e,
                    headers: this.#n,
                    body: e
                };
            "function" == typeof AbortController && this.#o && (this.#i = new AbortController, "u" > typeof EventTarget && this.#i.signal instanceof EventTarget && (r.signal = this.#i.signal)), "u" > typeof document && (r.credentials = this.withCredentials ? "include" : "omit"), fetch(this.#t, r).then(e => (e.headers.forEach((e, t) => {
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
                i = {},
                s = e.applyMiddleware("interceptRequest", void 0, {
                    adapter: m,
                    context: e
                });
            if (s) {
                let e = setTimeout(t, 0, null, s);
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
                    u && (p(), i.socket = setTimeout(() => d("ESOCKETTIMEDOUT"), u.socket)), !c && o && 4 === o.readyState && 0 !== o.status && function() {
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
            }), o.send(n.body || null), u && (i.connect = setTimeout(() => d("ETIMEDOUT"), u.connect)), {
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
                (e || c || o && o.readyState >= 2 && i.connect) && clearTimeout(i.connect), i.socket && clearTimeout(i.socket)
            }

            function b(e) {
                if (l) return;
                p(!0), l = !0, o = null;
                let r = e || Error(`Network error while attempting to reach ${n.url}`);
                r.isNetworkError = !0, r.request = n, t(r)
            }
        };
    var w, v, C, R, q, I = e.i(501718),
        E = {
            exports: {}
        };
    q || (q = 1, function(e, t) {
        let n;
        t.formatArgs = function(t) {
            if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
            let r = "color: " + this.color;
            t.splice(1, 0, r, "color: inherit");
            let n = 0,
                i = 0;
            t[0].replace(/%[a-zA-Z%]/g, e => {
                "%%" !== e && (n++, "%c" === e && (i = n))
            }), t.splice(i, 0, r)
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
                let n, i, s, o = null;

                function a(...e) {
                    if (!a.enabled) return;
                    let r = Number(new Date);
                    a.diff = r - (n || r), a.prev = n, a.curr = r, n = r, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                    let i = 0;
                    e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, n) => {
                        if ("%%" === r) return "%";
                        i++;
                        let s = t.formatters[n];
                        if ("function" == typeof s) {
                            let t = e[i];
                            r = s.call(a, t), e.splice(i, 1), i--
                        }
                        return r
                    }), t.formatArgs.call(a, e), (a.log || t.log).apply(a, e)
                }
                return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = r, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
                    enumerable: !0,
                    configurable: !1,
                    get: () => null !== o ? o : (i !== t.namespaces && (i = t.namespaces, s = t.enabled(e)), s),
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
                    i = -1,
                    s = 0;
                for (; r < e.length;)
                    if (n < t.length && (t[n] === e[r] || "*" === t[n])) "*" === t[n] ? (i = n, s = r) : r++, n++;
                    else {
                        if (-1 === i) return !1;
                        n = i + 1, r = ++s
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
                if (v) return w;
                v = 1;

                function e(e, t, r, n) {
                    return Math.round(e / r) + " " + n + (t >= 1.5 * r ? "s" : "")
                }
                return w = function(t, r) {
                    r = r || {};
                    var n, i, s = typeof t;
                    if ("string" === s && t.length > 0) {
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
                    if ("number" === s && isFinite(t)) return r.long ? (i = Math.abs(t)) >= 864e5 ? e(t, i, 864e5, "day") : i >= 36e5 ? e(t, i, 36e5, "hour") : i >= 6e4 ? e(t, i, 6e4, "minute") : i >= 1e3 ? e(t, i, 1e3, "second") : t + " ms" : (n = Math.abs(t)) >= 864e5 ? Math.round(t / 864e5) + "d" : n >= 36e5 ? Math.round(t / 36e5) + "h" : n >= 6e4 ? Math.round(t / 6e4) + "m" : n >= 1e3 ? Math.round(t / 1e3) + "s" : t + "ms";
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
            formatters: i
        } = e.exports;
        i.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }
    }(E, E.exports)), E.exports, Object.prototype.hasOwnProperty;
    let $ = typeof I.Buffer > "u" ? () => !1 : e => I.Buffer.isBuffer(e);

    function O(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    let A = ["boolean", "string", "number"];
    var x = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : e.g;
    let j = (e = {}) => {
        let t = e.implementation || Promise;
        if (!t) throw Error("`Promise` is not available in global scope, and no implementation was passed");
        return {
            onReturn: (r, n) => new t((t, i) => {
                let s = n.options.cancelToken;
                s && s.promise.then(e => {
                    r.abort.publish(e), i(e)
                }), r.error.subscribe(i), r.response.subscribe(r => {
                    t(e.onlyBody ? r.body : r)
                }), setTimeout(() => {
                    try {
                        r.request.publish(n)
                    } catch (e) {
                        i(e)
                    }
                }, 0)
            })
        }
    };
    class T {
        __CANCEL__ = !0;
        message;
        constructor(e) {
            this.message = e
        }
        toString() {
            return "Cancel" + (this.message ? `: ${this.message}` : "")
        }
    }
    j.Cancel = T, j.CancelToken = class e {
        promise;
        reason;
        constructor(e) {
            if ("function" != typeof e) throw TypeError("executor must be a function.");
            let t = null;
            this.promise = new Promise(e => {
                t = e
            }), e(e => {
                this.reason || (this.reason = new T(e), t(this.reason))
            })
        }
        static source = () => {
            let t;
            return {
                token: new e(e => {
                    t = e
                }),
                cancel: t
            }
        }
    }, j.isCancel = e => !(!e || !e?.__CANCEL__);
    var S = (e, t, r) => ("GET" === r.method || "HEAD" === r.method) && (e.isNetworkError || !1);

    function _(e) {
        return 100 * Math.pow(2, e) + 100 * Math.random()
    }
    let P = (e = {}) => {
        var t;
        let r, n, i;
        return r = (t = {
            shouldRetry: S,
            ...e
        }).maxRetries || 5, n = t.retryDelay || _, i = t.shouldRetry, {
            onError: (e, t) => {
                var s;
                let o = t.options,
                    a = o.maxRetries || r,
                    u = o.retryDelay || n,
                    c = o.shouldRetry || i,
                    l = o.attemptNumber || 0;
                if (null !== (s = o.body) && "object" == typeof s && "function" == typeof s.pipe || !c(e, l, o) || l >= a) return e;
                let h = Object.assign({}, t, {
                    options: Object.assign({}, o, {
                        attemptNumber: l + 1
                    })
                });
                return setTimeout(() => t.channels.request.publish(h), u(l)), null
            }
        }
    };
    P.shouldRetry = S;
    var D = e.i(516165),
        F = e.i(159862),
        M = e.i(827540),
        k = e.i(282519),
        U = e.i(187636);

    function V() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = (0, k.popScheduler)(e);
        return (0, U.from)(e, r)
    }
    var N = e.i(806298),
        H = (0, e.i(949918).createErrorClass)(function(e) {
            return function() {
                e(this), this.name = "EmptyError", this.message = "no elements in sequence"
            }
        });

    function L(e, t) {
        var r = "object" == typeof t;
        return new Promise(function(n, i) {
            var s, o = !1;
            e.subscribe({
                next: function(e) {
                    s = e, o = !0
                },
                error: i,
                complete: function() {
                    o ? n(s) : r ? n(t.defaultValue) : i(new H)
                }
            })
        })
    }
    var z = e.i(30214),
        W = e.i(633482),
        B = e.i(7560),
        G = e.i(866312);

    function Y(e) {
        return (0, G.operate)(function(t, r) {
            var n, i = null,
                s = !1;
            i = t.subscribe((0, B.createOperatorSubscriber)(r, void 0, void 0, function(o) {
                n = (0, W.innerFrom)(e(o, Y(e)(t))), i ? (i.unsubscribe(), i = null, n.subscribe(r)) : s = !0
            })), s && (i.unsubscribe(), i = null, n.subscribe(r))
        })
    }
    var J = e.i(544287),
        Q = e.i(79357),
        K = new(e.i(745491)).AsyncScheduler(Q.AsyncAction);

    function X(e, t) {
        var r = (0, M.isFunction)(e) ? e : function() {
                return e
            },
            n = function(e) {
                return e.error(r())
            };
        return new D.Observable(t ? function(e) {
            return t.schedule(n, 0, e)
        } : n)
    }
    e.i(597961);
    var Z = e.i(448971);

    function ee(e) {
        return (0, G.operate)(function(t, r) {
            try {
                t.subscribe(r)
            } finally {
                r.add(e)
            }
        })
    }
    var et = e.i(134671),
        er = e.i(178480),
        en = e.i(913186),
        ei = e.i(521879);

    function es(e, t) {
        var r = "object" == typeof t;
        return new Promise(function(n, i) {
            var s = new ei.SafeSubscriber({
                next: function(e) {
                    n(e), s.unsubscribe()
                },
                error: i,
                complete: function() {
                    r ? n(t.defaultValue) : i(new H)
                }
            });
            e.subscribe(s)
        })
    }
    var eo = e.i(686049),
        ea = e.i(824627),
        eu = e.i(168);

    function ec(e, t, r) {
        e ? (0, eu.executeSchedule)(r, e, t) : t()
    }
    var el = Array.isArray,
        eh = e.i(591607),
        ed = e.i(913072);

    function ep() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = (0, k.popResultSelector)(e);
        return r ? (0, ed.pipe)(ep.apply(void 0, (0, ea.__spreadArray)([], (0, ea.__read)(e))), (0, eh.mapOneOrManyArgs)(r)) : (0, G.operate)(function(t, r) {
            var n, i;
            (n = (0, ea.__spreadArray)([t], (0, ea.__read)(1 === e.length && el(e[0]) ? e[0] : e)), void 0 === i && (i = Z.identity), function(e) {
                ec(void 0, function() {
                    for (var t = n.length, r = Array(t), s = t, o = t, a = function(t) {
                            ec(void 0, function() {
                                var a = (0, U.from)(n[t], void 0),
                                    u = !1;
                                a.subscribe((0, B.createOperatorSubscriber)(e, function(n) {
                                    r[t] = n, !u && (u = !0, o--), o || e.next(i(r.slice()))
                                }, function() {
                                    --s || e.complete()
                                }))
                            }, e)
                        }, u = 0; u < t; u++) a(u)
                }, e)
            })(r)
        })
    }
    var ef = e.i(80205),
        eg = e.i(262940),
        em = e.i(132367);
    let ey = e => crypto.getRandomValues(new Uint8Array(e)),
        eb = /\r\n|[\n\r\u2028\u2029]/;

    function ew(e, t) {
        let r = 0;
        for (let n = 0; n < t.length; n++) {
            let i = t[n].length + 1;
            if (r + i > e) return {
                line: n + 1,
                column: e - r
            };
            r += i
        }
        return {
            line: t.length,
            column: t[t.length - 1]?.length ?? 0
        }
    }
    class ev extends Error {
        response;
        statusCode = 400;
        responseBody;
        traceId;
        details;
        constructor(e, t) {
            const r = eR(e, t);
            super(r.message), Object.assign(this, r)
        }
    }
    class eC extends Error {
        response;
        statusCode = 500;
        responseBody;
        traceId;
        details;
        constructor(e) {
            const t = eR(e);
            super(t.message), Object.assign(this, t)
        }
    }

    function eR(e, t) {
        var r, n, i;
        let s = e.body,
            o = {
                response: e,
                statusCode: e.statusCode,
                responseBody: (r = s, -1 !== (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") ? JSON.stringify(r, null, 2) : r),
                traceId: function(e) {
                    let t = e?.headers?.traceparent;
                    if (t) return t.split("-")[1]
                }(e),
                message: "",
                details: void 0
            };
        if (!(0, eo.isRecord)(s)) return o.message = `${eE(e,s)}${e$(o.traceId)}`, o;
        let a = s.error;
        if ("string" == typeof a && "string" == typeof s.message) return o.message = `${a} - ${s.message}${e$(o.traceId)}`, o;
        if ("object" != typeof a || null === a) return "string" == typeof a ? o.message = `${a}${e$(o.traceId)}` : "string" == typeof s.message ? o.message = `${s.message}${e$(o.traceId)}` : o.message = `${eE(e,s)}${e$(o.traceId)}`, o;
        if ("type" in (n = a) && "mutationError" === n.type && "description" in n && "string" == typeof n.description || "type" in (i = a) && "actionError" === i.type && "description" in i && "string" == typeof i.description) {
            let e = a.items || [],
                t = e.slice(0, 5).map(e => e.error?.description).filter(Boolean),
                r = t.length ? `:
- ${t.join(`
- `)}` : "";
            return e.length > 5 && (r += `
...and ${e.length-5} more`), o.message = `${a.description}${e$(o.traceId)}${r}`, o.details = s.error, o
        }
        return eq(a) ? (o.message = eI(a, t?.options?.query?.tag, o.traceId), o.details = s.error) : "description" in a && "string" == typeof a.description ? (o.message = `${a.description}${e$(o.traceId)}`, o.details = a) : o.message = `${eE(e,s)}${e$(o.traceId)}`, o
    }

    function eq(e) {
        return (0, eo.isRecord)(e) && "queryParseError" === e.type && "string" == typeof e.query && "number" == typeof e.start && "number" == typeof e.end
    }

    function eI(e, t, r) {
        let {
            query: n,
            start: i,
            end: s,
            description: o
        } = e, a = r ? `
(traceId: ${r})` : "";
        if (!n || typeof i > "u") return `GROQ query parse error: ${o}${a}`;
        let u = t ? `

Tag: ${t}` : "";
        return `GROQ query parse error:
${function(e,t,r){let n=e.split(eb),{start:i,end:s,markerLines:o}=function(e,t){let r={...e.start},n={...r,...e.end},i=r.line??-1,s=r.column??0,o=n.line,a=n.column,u=Math.max(i-3,0),c=Math.min(t.length,o+3);-1===i&&(u=0),-1===o&&(c=t.length);let l=o-i,h={};if(l)for(let e=0;e<=l;e++){let r=e+i;if(s)if(0===e){let e=t[r-1].length;h[r]=[s,e-s+1]}else if(e===l)h[r]=[0,a];else{let n=t[r-e].length;h[r]=[0,n]}else h[r]=!0}else s===a?s?h[i]=[s,0]:h[i]=!0:h[i]=[s,a-s];return{start:u,end:c,markerLines:h}}({start:ew(t.start,n),end:t.end?ew(t.end,n):void 0},n),a=`
        $ {
            s
        }
        `.length;return e.split(eb,s).slice(i,s).map((e,t)=>{let n=i+1+t,s=`
        $ {
            ` ${n}`.slice(-a)
        } | `,u=o[n],c=!o[n+1];if(!u)return`
        $ {
            s
        }
        $ {
            e.length > 0 ? ` ${e}` : ""
        }
        `;let l="";if(Array.isArray(u)){let t=e.slice(0,Math.max(u[0]-1,0)).replace(/[^\t]/g," "),n=u[1]||1;l=[`
        `,s.replace(/\d/g," ")," ",t,"^".repeat(n)].join(""),c&&r&&(l+=" "+r)}return[">",s,e.length>0?`
        $ {
            e
        }
        `:"",l].join("")}).join(`
        `)}(n,{start:i,end:s},o)}${u}${a}`
    }

    function eE(e, t) {
        var r;
        let n = "string" == typeof t ? ` (${(r=t).length>100?`${r.slice(0,100)}\u2026`:r})` : "",
            i = e.statusMessage ? ` ${e.statusMessage}` : "";
        return `${e.method}-request to ${e.url} resulted in HTTP ${e.statusCode}${i}${n}`
    }

    function e$(e) {
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
    let eA = {
        onResponse: (e, t) => {
            if (e.statusCode >= 500) throw new eC(e);
            if (e.statusCode >= 400) throw new ev(e, t);
            return e
        }
    };

    function ex(e, t = {}) {
        return ((e = [], t = b) => (function e(t, r) {
            let n = [],
                i = l.reduce((e, t) => (e[t] = e[t] || [], e), {
                    processOptions: [s],
                    validateOptions: [u]
                });

            function o(e) {
                let t, n = "object" == typeof e && e.callSiteStack ? e.callSiteStack : void 0,
                    s = n ? void 0 : Error(),
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
                            s = t;
                        for (let t = 0; t < i[e].length && (s = (0, i[e][t])(s, ...r), !n || s); t++);
                        return s
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
                            let i = e,
                                u = t;
                            if (!i) try {
                                u = a("onResponse", t, r)
                            } catch (e) {
                                u = null, i = e
                            }
                            if (i = i && a("onError", i, r)) {
                                if (i instanceof Error) {
                                    let e = n?.stack || s?.stack;
                                    if ("string" == typeof e) {
                                        let t = e.split("\n").slice(n ? 1 : 2);
                                        t.length > 0 && (i.stack += "\n" + t.join("\n"))
                                    }
                                }
                                o.error.publish(i)
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
                if (e.onReturn && i.onReturn.length > 0) throw Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
                return l.forEach(t => {
                    e[t] && i[t].push(e[t])
                }), n.push(e), o
            }, o.clone = () => e(n, r), t.forEach(o.use), o
        })(e, t))([P({
            shouldRetry: ej
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
                return !t || "function" == typeof t.pipe || $(t) || -1 === A.indexOf(typeof t) && !Array.isArray(t) && ! function(e) {
                    if (!1 === O(e)) return !1;
                    let t = e.constructor;
                    if (void 0 === t) return !0;
                    let r = t.prototype;
                    return !1 !== O(r) && !1 !== r.hasOwnProperty("isPrototypeOf")
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
        }, eA, function(e = {}) {
            let t = e.implementation || x.Observable;
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
            implementation: D.Observable
        })])
    }

    function ej(e, t, r) {
        if (0 === r.maxRetries) return !1;
        let n = "GET" === r.method || "HEAD" === r.method,
            i = (r.uri || r.url).startsWith("/data/query"),
            s = e.response && (429 === e.response.statusCode || 502 === e.response.statusCode || 503 === e.response.statusCode);
        return (!!n || !!i) && !!s || P.shouldRetry(e, t, r)
    }

    function eT(e) {
        return "https://www.sanity.io/help/" + e
    }
    let eS = ["image", "file"],
        e_ = ["before", "after", "replace"],
        eP = e => {
            if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(e)) throw Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters")
        },
        eD = (e, t) => {
            if (null === t || "object" != typeof t || Array.isArray(t)) throw Error(`${e}() takes an object of properties`)
        },
        eF = (e, t) => {
            if ("string" != typeof t || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(t) || t.includes("..")) throw Error(`${e}(): "${t}" is not a valid document ID`)
        },
        eM = (e, t) => {
            if (!t._id) throw Error(`${e}() requires that the document contains an ID ("_id" property)`);
            eF(e, t._id)
        },
        ek = (e, t) => {
            if (!t._type) throw Error(`\`${e}()\` requires that the document contains a type (\`_type\` property)`);
            var r = t._type;
            if ("string" != typeof r) throw Error(`\`${e}()\`: \`${r}\` is not a valid document type`)
        },
        eU = e => {
            if (e.dataset) return e.dataset;
            let t = e.resource;
            if (t && "dataset" === t.type) {
                let e = t.id.split(".");
                if (2 !== e.length) throw Error('Dataset resource ID must be in the format "project.dataset"');
                return e[1]
            }
            throw Error("`dataset` must be provided to perform queries")
        },
        eV = e => {
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
        eL = e => {
            var t;
            let r, n;
            return t = (...t) => console.warn(e.join(" "), ...t), r = !1, (...e) => (r || (n = t(...e), r = !0), n)
        },
        ez = eL(["Because you set `withCredentials` to true, we will override your `useCdn`", "setting to be false since (cookie-based) credentials are never set on the CDN"]),
        eW = eL(["Since you haven't set a value for `useCdn`, we will deliver content using our", "global, edge-cached API-CDN. If you wish to have content delivered faster, set", "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."]),
        eB = eL(["The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.", "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."]),
        eG = eL(["The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"]),
        eY = eL(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", `See ${eT("js-client-browser-token")} for more information and how to hide this warning.`]),
        eJ = eL(["You have configured Sanity client to use a token, but also provided `withCredentials: true`.", "This is no longer supported - only token will be used - remove `withCredentials: true`."]),
        eQ = eL(["Using the Sanity client without specifying an API version is deprecated.", `See ${eT("js-client-api-version")}`]),
        eK = (eL(["The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."]), eL(["You have called `createVersion()` with a defined `document`. The recommended approach is to provide a `baseId` and `releaseId` instead."])),
        eX = eL(["The `~experimental_resource` configuration property has been renamed to `resource`.", "Please update your client configuration to use `resource` instead. Support for `~experimental_resource` will be removed in a future version."]),
        eZ = {
            apiHost: "https://api.sanity.io",
            apiVersion: "1",
            useProjectHostname: !0,
            stega: {
                enabled: !1
            }
        },
        e0 = ["localhost", "127.0.0.1", "0.0.0.0"];

    function e1(e) {
        if (Array.isArray(e) && e.length > 1 && e.includes("raw")) throw TypeError('Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives')
    }
    let e3 = (e, t) => {
        let r, n = {
            ...t,
            ...e,
            stega: {
                ..."boolean" == typeof t.stega ? {
                    enabled: t.stega
                } : t.stega || eZ.stega,
                ..."boolean" == typeof e.stega ? {
                    enabled: e.stega
                } : e.stega || {}
            }
        };
        n.apiVersion || eQ();
        let i = {
            ...eZ,
            ...n
        };
        i["~experimental_resource"] && !i.resource && (eX(), i.resource = i["~experimental_resource"]);
        let s = i.resource,
            o = i.useProjectHostname && !s;
        if (typeof Promise > "u") {
            let e = eT("js-client-promise-polyfill");
            throw Error(`No native Promise-implementation found, polyfill needed - see ${e}`)
        }
        if (o && !i.projectId) throw Error("Configuration must contain `projectId`");
        if (s && eN(i), "u" > typeof i.perspective && e1(i.perspective), "encodeSourceMap" in i) throw Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?");
        if ("encodeSourceMapAtPath" in i) throw Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?");
        if ("boolean" != typeof i.stega.enabled) throw Error(`stega.enabled must be a boolean, received ${i.stega.enabled}`);
        if (i.stega.enabled && void 0 === i.stega.studioUrl) throw Error("stega.studioUrl must be defined when stega.enabled is true");
        if (i.stega.enabled && "string" != typeof i.stega.studioUrl && "function" != typeof i.stega.studioUrl) throw Error(`stega.studioUrl must be a string or a function, received ${i.stega.studioUrl}`);
        let a = "u" > typeof window && window.location && window.location.hostname,
            u = a && (r = window.location.hostname, -1 !== e0.indexOf(r)),
            c = !!i.token;
        i.withCredentials && c && (eJ(), i.withCredentials = !1), a && u && c && !0 !== i.ignoreBrowserTokenWarning ? eY() : typeof i.useCdn > "u" && eW(), o && (e => {
                if (!/^[-a-z0-9]+$/i.test(e)) throw Error("`projectId` can only contain only a-z, 0-9 and dashes")
            })(i.projectId), i.dataset && eP(i.dataset), "requestTagPrefix" in i && (i.requestTagPrefix = i.requestTagPrefix ? eV(i.requestTagPrefix).replace(/\.+$/, "") : void 0), i.apiVersion = `${i.apiVersion}`.replace(/^v/, ""), i.isDefaultApi = i.apiHost === eZ.apiHost, !0 === i.useCdn && i.withCredentials && ez(), i.useCdn = !1 !== i.useCdn && !i.withCredentials,
            function(e) {
                if ("1" === e || "X" === e) return;
                let t = new Date(e);
                if (!(/^\d{4}-\d{2}-\d{2}$/.test(e) && t instanceof Date && t.getTime() > 0)) throw Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`")
            }(i.apiVersion);
        let l = i.apiHost.split("://", 2),
            h = l[0],
            d = l[1],
            p = i.isDefaultApi ? "apicdn.sanity.io" : d;
        return o ? (i.url = `${h}://${i.projectId}.${d}/v${i.apiVersion}`, i.cdnUrl = `${h}://${i.projectId}.${p}/v${i.apiVersion}`) : (i.url = `${i.apiHost}/v${i.apiVersion}`, i.cdnUrl = i.url), i
    };
    class e6 extends Error {
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
    class e9 extends Error {
        name = "DisconnectError";
        reason;
        constructor(e, t, r = {}) {
            super(e, r), this.reason = t
        }
    }
    class e2 extends Error {
        name = "ChannelError";
        data;
        constructor(e, t) {
            super(e), this.data = t
        }
    }
    class e4 extends Error {
        name = "MessageError";
        data;
        constructor(e, t, r = {}) {
            super(e, r), this.data = t
        }
    }
    class e5 extends Error {
        name = "MessageParseError"
    }
    let e8 = ["channelError", "disconnect"];

    function e7(e, t) {
        return (0, F.defer)(() => {
            let t = e();
            return t && (t instanceof D.Observable || (0, M.isFunction)(t.lift) && (0, M.isFunction)(t.subscribe)) ? t : V(t)
        }).pipe((0, N.mergeMap)(e => {
            var r, n;
            return r = e, n = t, new D.Observable(e => {
                let t = n.includes("open"),
                    i = n.includes("reconnect");

                function s(t) {
                    if ("data" in t) {
                        let [r, n] = te(t);
                        e.error(r ? new e5("Unable to parse EventSource error message", {
                            cause: n
                        }) : new e4((n?.data).message, n));
                        return
                    }
                    let n = t.status,
                        s = "number" == typeof n ? n : void 0;
                    void 0 !== s ? e.error(new e6("EventSource connection failed", {
                        status: s
                    })) : r.readyState === r.CLOSED ? e.error(new e6("EventSource connection failed")) : i && e.next({
                        type: "reconnect"
                    })
                }

                function o() {
                    e.next({
                        type: "open"
                    })
                }

                function a(t) {
                    let [n, i] = te(t);
                    if (n) return void e.error(new e5("Unable to parse EventSource message", {
                        cause: n
                    }));
                    if ("channelError" === t.type) {
                        var s, o;
                        let t, n = new URL(r.url).searchParams.get("tag");
                        e.error(new e2((s = i?.data, o = n, (t = s.error) ? eq(t) ? eI(t, o) : t.description ? t.description : "string" == typeof t ? t : JSON.stringify(t, null, 2) : s.message || "Unknown listener error"), i.data));
                        return
                    }
                    "disconnect" === t.type ? e.error(new e9(`Server disconnected client: ${i.data?.reason||"unknown error"}`)) : e.next({
                        type: t.type,
                        id: t.lastEventId,
                        ...i.data ? {
                            data: i.data
                        } : {}
                    })
                }
                r.addEventListener("error", s), t && r.addEventListener("open", o);
                let u = [...new Set([...e8, ...n])].filter(e => "error" !== e && "open" !== e && "reconnect" !== e);
                return u.forEach(e => r.addEventListener(e, a)), () => {
                    r.removeEventListener("error", s), t && r.removeEventListener("open", o), u.forEach(e => r.removeEventListener(e, a)), r.close()
                }
            })
        }))
    }

    function te(e) {
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

    function tt(e) {
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
    class tr {
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
            return eD("diffMatchPatch", e), this._assign("diffMatchPatch", e)
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
                if (-1 === e_.indexOf(e)) {
                    let e = e_.map(e => `"${e}"`).join(", ");
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
            let i = t < 0 ? t - 1 : t,
                s = typeof r > "u" || -1 === r ? -1 : Math.max(0, t + r),
                o = `${e}[${i}:${i<0&&s>=0?"":s}]`;
            return this.insert("replace", o, n || [])
        }
        ifRevisionId(e) {
            return this.operations.ifRevisionID = e, this
        }
        serialize() {
            return {
                ...tt(this.selection),
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
            return eD(e, t), this.operations = Object.assign({}, this.operations, {
                [e]: Object.assign({}, r && this.operations[e] || {}, t)
            }), this
        }
        _set(e, t) {
            return this._assign(e, t, !1)
        }
    }
    class tn extends tr {
        #a;
        constructor(e, t, r) {
            super(e, t), this.#a = r
        }
        clone() {
            return new tn(this.selection, {
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
    class ti extends tr {
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
    let ts = {
        returnDocuments: !1
    };
    class to {
        operations;
        trxId;
        constructor(e = [], t) {
            this.operations = e, this.trxId = t
        }
        create(e) {
            return eD("create", e), this._add({
                create: e
            })
        }
        createIfNotExists(e) {
            let t = "createIfNotExists";
            return eD(t, e), eM(t, e), this._add({
                [t]: e
            })
        }
        createOrReplace(e) {
            let t = "createOrReplace";
            return eD(t, e), eM(t, e), this._add({
                [t]: e
            })
        }
        delete(e) {
            return eF("delete", e), this._add({
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
    class ta extends to {
        #a;
        constructor(e, t, r) {
            super(e, r), this.#a = t
        }
        clone() {
            return new ta([...this.operations], this.#a, this.trxId)
        }
        commit(e) {
            if (!this.#a) throw Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
            return this.#a.mutate(this.serialize(), Object.assign({
                transactionId: this.trxId
            }, ts, e || {}))
        }
        patch(e, t) {
            let r = "function" == typeof t,
                n = "string" != typeof e && e instanceof ti,
                i = "object" == typeof e && ("query" in e || "id" in e);
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
            if (i) {
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
    class tu extends to {
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
            }, ts, e || {}))
        }
        patch(e, t) {
            let r = "function" == typeof t;
            if ("string" != typeof e && e instanceof tn) return this._add({
                patch: e.serialize()
            });
            if (r) {
                let r = t(new tn(e, {}, this.#a));
                if (!(r instanceof tn)) throw Error("function passed to `patch()` must return the patch");
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
    let tc = ({
            query: e,
            params: t = {},
            options: r = {}
        }) => {
            let n = new URLSearchParams,
                {
                    tag: i,
                    includeMutations: s,
                    returnQuery: o,
                    ...a
                } = r;
            for (let [r, s] of(i && n.append("tag", i), n.append("query", e), Object.entries(t))) void 0 !== s && n.append(`$${r}`, JSON.stringify(s));
            for (let [e, t] of Object.entries(a)) t && n.append(e, `${t}`);
            return !1 === o && n.append("returnQuery", "false"), !1 === s && n.append("includeMutations", "false"), `?${n}`
        },
        tl = e => "response" === e.type,
        th = e => e.body;

    function td(t, r, n, i, s = {}, o = {}) {
        let a = "stega" in o ? {
                ...n || {},
                ..."boolean" == typeof o.stega ? {
                    enabled: o.stega
                } : o.stega || {}
            } : n,
            u = a.enabled ? (0, eo.stegaClean)(s) : s,
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
                query: i,
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
            return ep.apply(void 0, (0, ea.__spreadArray)([], (0, ea.__read)(e)))
        }((0, U.from)(e.A(70909).then(function(e) {
            return e.stegaEncodeSourceMap$1
        }).then(({
            stegaEncodeSourceMap: e
        }) => e))), (0, en.map)(([e, t]) => {
            let r = t(e.result, e.resultSourceMap, a);
            return c({
                ...e,
                result: r
            })
        })) : p.pipe((0, en.map)(c))
    }

    function tp(e, t, r, n = {}) {
        let i = {
            uri: t_(e, "doc", (() => {
                if (!n.releaseId) return r;
                let e = (0, em.getVersionFromId)(r);
                if (!e) {
                    if ((0, em.isDraftId)(r)) throw Error(`The document ID (\`${r}\`) is a draft, but \`options.releaseId\` is set as \`${n.releaseId}\``);
                    return (0, em.getVersionId)(r, n.releaseId)
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
        return tT(e, t, i).pipe((0, ef.filter)(tl), (0, en.map)(e => {
            let t = e.body.documents;
            return t ? n.includeAllVersions ? t : t[0] : n.includeAllVersions ? [] : void 0
        }))
    }

    function tf(e, t, r, n = {}) {
        let i = {
            uri: t_(e, "doc", r.join(",")),
            json: !0,
            tag: n.tag,
            signal: n.signal
        };
        return tT(e, t, i).pipe((0, ef.filter)(tl), (0, en.map)(e => {
            let t, n, i = (t = e.body.documents || [], n = e => e._id, t.reduce((e, t) => (e[n(t)] = t, e), Object.create(null)));
            return r.map(e => i[e] || null)
        }))
    }

    function tg(e, t, r, n = {}) {
        if (0 === r.length) return V(new Set);
        let i = [];
        for (let e = 0; e < r.length; e += 100) i.push(r.slice(e, e + 100));
        return (0, U.from)(i).pipe((0, eg.concatMap)(r => tT(e, t, {
            uri: t_(e, "doc", r.map(encodeURIComponent).join(",")),
            tag: n.tag,
            signal: n.signal,
            query: {
                excludeContent: !0
            }
        }).pipe((0, ef.filter)(tl), (0, en.map)(e => {
            let t = new Set;
            for (let r of e.body.omitted || []) "existence" === r.reason && t.add(r.id);
            return new Set(r.filter(e => !t.has(e)))
        }))), function(e, t) {
            var r;
            return (0, G.operate)((r = arguments.length >= 2, function(n, i) {
                var s = r,
                    o = t,
                    a = 0;
                n.subscribe((0, B.createOperatorSubscriber)(i, function(t) {
                    var r = a++;
                    o = s ? e(o, t, r) : (s = !0, t)
                }, function() {
                    s && i.next(o), i.complete()
                }))
            }))
        }((e, t) => {
            for (let r of t) e.add(r);
            return e
        }, new Set))
    }

    function tm(e, t, r, n = {}) {
        return tO(e, t, "query", {
            query: "*[sanity::partOfRelease($releaseId)]",
            params: {
                releaseId: r
            }
        }, n)
    }

    function ty(e, t, r, n) {
        return eM("createIfNotExists", r), tA(e, t, r, "createIfNotExists", n)
    }

    function tb(e, t, r, n) {
        return eM("createOrReplace", r), tA(e, t, r, "createOrReplace", n)
    }

    function tw(e, t, r, n, i) {
        return eM("createVersion", r), ek("createVersion", r), eK(), t$(e, t, {
            actionType: "sanity.action.document.version.create",
            publishedId: n,
            document: r
        }, i)
    }

    function tv(e, t, r, n, i, s, o) {
        if (!n) throw Error("`createVersion()` requires `baseId` when no `document` is provided");
        if (!r) throw Error("`createVersion()` requires `publishedId` when `baseId` is provided");
        return eF("createVersion", n), eF("createVersion", r), t$(e, t, {
            actionType: "sanity.action.document.version.create",
            publishedId: r,
            baseId: n,
            versionId: i ? (0, em.getVersionId)(r, i) : (0, em.getDraftId)(r),
            ifBaseRevisionId: s
        }, o)
    }

    function tC(e, t, r, n) {
        return tO(e, t, "mutate", {
            mutations: [{
                delete: tt(r)
            }]
        }, n)
    }

    function tR(e, t, r, n = !1, i) {
        return t$(e, t, {
            actionType: "sanity.action.document.version.discard",
            versionId: r,
            purge: n
        }, i)
    }

    function tq(e, t, r, n) {
        return eM("replaceVersion", r), ek("replaceVersion", r), t$(e, t, {
            actionType: "sanity.action.document.version.replace",
            document: r
        }, n)
    }

    function tI(e, t, r, n, i) {
        return t$(e, t, {
            actionType: "sanity.action.document.version.unpublish",
            versionId: r,
            publishedId: n
        }, i)
    }

    function tE(e, t, r, n) {
        let i;
        return tO(e, t, "mutate", {
            mutations: Array.isArray(i = r instanceof ti || r instanceof tn ? {
                patch: r.serialize()
            } : r instanceof ta || r instanceof tu ? r.serialize() : r) ? i : [i],
            transactionId: n && n.transactionId || void 0
        }, n)
    }

    function t$(e, t, r, n) {
        let i = Array.isArray(r) ? r : [r],
            s = n && n.transactionId || void 0;
        return tO(e, t, "actions", {
            actions: i,
            transactionId: s,
            skipCrossDatasetReferenceValidation: n && n.skipCrossDatasetReferenceValidation || void 0,
            dryRun: n && n.dryRun || void 0
        }, n)
    }

    function tO(e, t, r, n, i = {}) {
        let s = "mutate" === r,
            o = "actions" === r,
            a = s || o ? "" : tc(n),
            u = !s && !o && a.length < 11264,
            c = u ? a : "",
            l = i.returnFirst,
            {
                timeout: h,
                token: d,
                tag: p,
                headers: f,
                returnQuery: g,
                lastLiveEventId: m,
                cacheMode: y
            } = i,
            b = {
                method: u ? "GET" : "POST",
                uri: t_(e, r, c),
                json: !0,
                body: u ? void 0 : n,
                query: s && ((e = {}) => {
                    let t;
                    return {
                        dryRun: e.dryRun,
                        returnIds: !0,
                        returnDocuments: (t = e.returnDocuments, !1 === t ? void 0 : !!(typeof t > "u") || t),
                        visibility: e.visibility || "sync",
                        autoGenerateArrayKeys: e.autoGenerateArrayKeys,
                        skipCrossDatasetReferenceValidation: e.skipCrossDatasetReferenceValidation
                    }
                })(i),
                timeout: h,
                headers: f,
                token: d,
                tag: p,
                returnQuery: g,
                perspective: i.perspective,
                resultSourceMap: i.resultSourceMap,
                lastLiveEventId: Array.isArray(m) ? m[0] : m,
                cacheMode: y,
                canUseCdn: "query" === r,
                signal: i.signal,
                fetch: i.fetch,
                useAbortSignal: i.useAbortSignal,
                useCdn: i.useCdn
            };
        return tT(e, t, b).pipe((0, ef.filter)(tl), (0, en.map)(th), (0, en.map)(e => {
            if (!s) return e;
            let t = e.results || [];
            if (i.returnDocuments) return l ? t[0] && t[0].document : t.map(e => e.document);
            let r = l ? t[0] && t[0].id : t.map(e => e.id);
            return {
                transactionId: e.transactionId,
                results: t,
                [l ? "documentId" : "documentIds"]: r
            }
        }))
    }

    function tA(e, t, r, n, i = {}) {
        return tO(e, t, "mutate", {
            mutations: [{
                [n]: r
            }]
        }, Object.assign({
            returnFirst: !0,
            returnDocuments: !0
        }, i))
    }
    let tx = e => {
            let t = e.config();
            return void 0 !== t.dataset && void 0 !== t.projectId || void 0 !== t.resource
        },
        tj = (e, t) => tx(e) && t.startsWith(t_(e, "query"));

    function tT(e, t, r) {
        var n;
        let i = Error(),
            s = r.url || r.uri,
            o = e.config(),
            a = typeof r.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(r.method || "GET") >= 0 && (s.startsWith("/data/") || tj(e, s) || tx(e) && s.startsWith(t_(e, "mutate")) || tx(e) && s.startsWith(t_(e, "doc", "")) || tx(e) && s.startsWith(t_(e, "listen")) || tx(e) && s.startsWith(t_(e, "history", ""))) : r.canUseCdn,
            u = (r.useCdn ?? o.useCdn) && a,
            c = r.tag && o.requestTagPrefix ? [o.requestTagPrefix, r.tag].join(".") : r.tag || o.requestTagPrefix;
        if (c && null !== r.tag && (r.query = {
                tag: eV(c),
                ...r.query
            }), ["GET", "HEAD", "POST"].indexOf(r.method || "GET") >= 0 && tj(e, s)) {
            let e = r.resultSourceMap ?? o.resultSourceMap;
            void 0 !== e && !1 !== e && (r.query = {
                resultSourceMap: e,
                ...r.query
            });
            let t = r.perspective || o.perspective;
            "u" > typeof t && ("previewDrafts" === t && eG(), e1(t), r.query = {
                perspective: Array.isArray(t) ? t.join(",") : t,
                ...r.query
            }, (Array.isArray(t) && t.length > 0 || "previewDrafts" === t || "drafts" === t) && u && (u = !1, eB())), r.lastLiveEventId && (r.query = {
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
                let i = !!(typeof t.withCredentials > "u" ? e.withCredentials : t.withCredentials),
                    s = typeof t.timeout > "u" ? e.timeout : t.timeout;
                return Object.assign({}, t, {
                    headers: Object.assign({}, r, t.headers || {}),
                    timeout: typeof s > "u" ? 3e5 : s,
                    proxy: t.proxy || e.proxy,
                    json: !0,
                    withCredentials: i,
                    fetch: "object" == typeof t.fetch && "object" == typeof e.fetch ? {
                        ...e.fetch,
                        ...t.fetch
                    } : t.fetch || e.fetch
                })
            }(o, Object.assign({}, r, {
                url: tP(e, s, u),
                callSiteStack: i
            })),
            h = new D.Observable(e => t(l, o.requester).subscribe(e));
        return r.signal ? h.pipe((n = r.signal, e => new D.Observable(t => {
            let r = () => t.error(function(e) {
                if (tD) return new DOMException(e?.reason ?? "The operation was aborted.", "AbortError");
                let t = Error(e?.reason ?? "The operation was aborted.");
                return t.name = "AbortError", t
            }(n));
            if (n && n.aborted) return void r();
            let i = e.subscribe(t);
            return n.addEventListener("abort", r), () => {
                n.removeEventListener("abort", r), i.unsubscribe()
            }
        }))) : h
    }

    function tS(e, t, r) {
        return tT(e, t, r).pipe((0, ef.filter)(e => "response" === e.type), (0, en.map)(e => e.body))
    }

    function t_(e, t, r) {
        let n = e.config();
        if (n.resource) {
            eN(n);
            let e = tF(n),
                i = void 0 !== r ? `${t}/${r}` : t;
            return `${e}/${i}`.replace(/\/($|\?)/, "$1")
        }
        let i = eU(n),
            s = `/${t}/${i}`;
        return `/data${void 0!==r?`${s}/${r}`:s}`.replace(/\/($|\?)/, "$1")
    }

    function tP(e, t, r = !1) {
        let {
            url: n,
            cdnUrl: i
        } = e.config();
        return `${r?i:n}/${t.replace(/^\//,"")}`
    }
    let tD = !!globalThis.DOMException,
        tF = e => {
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

    function tM(e, t, r) {
        let n = eU(e.config());
        return tS(e, t, {
            method: "POST",
            uri: `/agent/action/generate/${n}`,
            body: r
        })
    }

    function tk(e, t, r) {
        let n = eU(e.config());
        return tS(e, t, {
            method: "POST",
            uri: `/agent/action/transform/${n}`,
            body: r
        })
    }

    function tU(e, t, r) {
        let n = eU(e.config());
        return tS(e, t, {
            method: "POST",
            uri: `/agent/action/translate/${n}`,
            body: r
        })
    }
    class tV {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        generate(e) {
            return tM(this.#a, this.#u, e)
        }
        transform(e) {
            return tk(this.#a, this.#u, e)
        }
        translate(e) {
            return tU(this.#a, this.#u, e)
        }
    }
    class tN {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        generate(e) {
            return L(tM(this.#a, this.#u, e))
        }
        transform(e) {
            return L(tk(this.#a, this.#u, e))
        }
        translate(e) {
            return L(tU(this.#a, this.#u, e))
        }
        prompt(e) {
            var t, r;
            let n;
            return L((t = this.#a, r = this.#u, n = eU(t.config()), tS(t, r, {
                method: "POST",
                uri: `/agent/action/prompt/${n}`,
                body: e
            })))
        }
        patch(e) {
            var t, r;
            let n;
            return L((t = this.#a, r = this.#u, n = eU(t.config()), tS(t, r, {
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
            return tz(this.#a, this.#u, e, t, r)
        }
    }
    class tL {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        upload(e, t, r) {
            return L(tz(this.#a, this.#u, e, t, r).pipe((0, ef.filter)(e => "response" === e.type), (0, en.map)(e => e.body.document)))
        }
    }

    function tz(e, t, r, n, i = {}) {
        var s, o;
        if (-1 === eS.indexOf(r)) throw Error(`Invalid asset type: ${r}. Must be one of ${eS.join(", ")}`);
        let a = i.extract || void 0;
        a && !a.length && (a = ["none"]);
        let u = e.config(),
            c = (s = i, o = n, !(typeof File > "u") && o instanceof File ? Object.assign({
                filename: !1 === s.preserveFilename ? void 0 : o.name,
                contentType: o.type
            }, s) : s),
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
        return m && !y && (b.sourceId = m.id, b.sourceName = m.name, b.sourceUrl = m.url), tT(e, t, {
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
                let i = eU(e);
                return `assets/${r}/${i}`
            }(u, r),
            headers: c.contentType ? {
                "Content-Type": c.contentType
            } : {},
            query: b,
            body: n
        })
    }
    let tW = (0, F.defer)(() => e.A(440574)).pipe((0, en.map)(({
            default: e
        }) => e), (0, z.shareReplay)(1)),
        tB = new Set([408, 429]);

    function tG() {
        return function(e) {
            return e.pipe(Y((e, t) => {
                var r;
                return e instanceof e6 && ("number" != typeof e.status || e.status < 400 || e.status >= 500 || tB.has(e.status)) ? function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return (0, J.mergeAll)(1)((0, U.from)(e, (0, k.popScheduler)(e)))
                }(V({
                    type: "reconnect"
                }), (void 0 === r && (r = K), new D.Observable(function(e) {
                    var t = 1e3;
                    t < 0 && (t = 0);
                    var n = 0;
                    return r.schedule(function() {
                        e.closed || (e.next(n++), e.complete())
                    }, t)
                })).pipe((0, N.mergeMap)(() => t))) : X(() => e)
            }))
        }
    }
    let tY = ["includePreviousRevision", "includeResult", "includeMutations", "includeAllVersions", "visibility", "effectFormat", "enableResume", "tag"],
        tJ = {
            includeResult: !0
        };

    function tQ(e, t, r = {}) {
        let {
            url: n,
            token: i,
            withCredentials: s,
            requestTagPrefix: o,
            headers: a
        } = this.config(), u = r.tag && o ? [o, r.tag].join(".") : r.tag, c = {
            ...Object.keys(tJ).concat(Object.keys(r)).reduce((e, t) => (e[t] = typeof r[t] > "u" ? tJ[t] : r[t], e), {}),
            tag: u
        }, l = tc({
            query: e,
            params: t,
            options: {
                tag: u,
                ...tY.reduce((e, t) => (typeof c[t] > "u" || (e[t] = c[t]), e), {})
            }
        }), h = `${n}${t_(this,"listen",l)}`;
        if (h.length > 14800) return X(() => Error("Query too large for listener"));
        let d = c.events ? c.events : ["mutation"],
            p = {};
        return s && (p.withCredentials = !0), (i || a) && (p.headers = {}, i && (p.headers.Authorization = `Bearer ${i}`), a && Object.assign(p.headers, a)), e7(() => (typeof EventSource > "u" || p.headers ? tW : V(EventSource)).pipe((0, en.map)(e => new e(h, p))), d).pipe(tG(), (0, ef.filter)(e => d.includes(e.type)), (0, en.map)(e => ({
            type: e.type,
            ..."data" in e ? e.data : {}
        })))
    }
    let tK = "2021-03-25";
    class tX {
        #a;
        constructor(e) {
            this.#a = e
        }
        events({
            includeDrafts: e = !1,
            tag: t,
            waitFor: r
        } = {}) {
            var n, i, s, o, a;
            let {
                projectId: u,
                apiVersion: c,
                token: l,
                withCredentials: h,
                requestTagPrefix: d,
                headers: p
            } = this.#a.config(), f = c.replace(/^v/, "");
            if ("X" !== f && f < tK) throw Error(`The live events API requires API version ${tK} or later. The current API version is ${f}. Please update your API version to use this feature.`);
            if (e && !l && !h) throw Error("The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role.");
            let g = t_(this.#a, "live/events"),
                m = new URL(this.#a.getUrl(g, !1)),
                y = t && d ? [d, t].join(".") : t;
            y && m.searchParams.set("tag", y), e && m.searchParams.set("includeDrafts", "true"), r && m.searchParams.set("waitFor", r);
            let b = {};
            e && h && (b.withCredentials = !0), (e && l || p) && (b.headers = {}, e && l && (b.headers.Authorization = `Bearer ${l}`), p && Object.assign(b.headers, p));
            let w = `${m.href}::${JSON.stringify(b)}`,
                v = tZ.get(w);
            if (v) return v;
            let C = e7(() => (typeof EventSource > "u" || b.headers ? tW : V(EventSource)).pipe((0, en.map)(e => new e(m.href, b))), ["message", "restart", "welcome", "reconnect", "goaway"]),
                R = (i = new URL(this.#a.getUrl("/check/cors", !1)), s = u, o = !0 === b.withCredentials, new D.Observable(e => {
                    let t = new AbortController,
                        {
                            signal: r
                        } = t;
                    return fetch(i, {
                        method: "GET",
                        mode: "cors",
                        credentials: "omit",
                        signal: r
                    }).then(e => {
                        if (!(r.aborted || !e.ok)) return e.json()
                    }).then(t => {
                        if (!r.aborted) {
                            if (o && t?.result?.withCredentials === !1) return void e.error(new eO({
                                projectId: s,
                                credentials: !0
                            }));
                            if (t?.result?.allowed === !1) return void e.error(new eO({
                                projectId: s,
                                credentials: o
                            }));
                            e.next(), e.complete()
                        }
                    }).catch(() => {
                        r.aborted || e.closed || (e.next(), e.complete())
                    }), () => t.abort()
                })),
                q = C.pipe(tG(), (0, N.mergeMap)(e => "reconnect" === e.type ? R.pipe((0, N.mergeMap)(() => V(e))) : V(e)), Y(e => e instanceof eO ? X(() => e) : R.pipe((0, N.mergeMap)(() => {
                    throw e
                }))), (0, en.map)(e => {
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
                })).pipe(ee(() => tZ.delete(w)), (a = "function" == typeof(n = {
                    predicate: e => "welcome" === e.type
                }) ? {
                    predicate: n,
                    ...void 0
                } : n, e => {
                    var t, r;
                    let n, i = !1,
                        {
                            predicate: s,
                            ...o
                        } = a,
                        u = e.pipe((t = e => {
                            a.predicate(e) && (i = !0, n = e)
                        }, (r = (0, M.isFunction)(t) ? {
                            next: t,
                            error: void 0,
                            complete: void 0
                        } : t) ? (0, G.operate)(function(e, t) {
                            null == (n = r.subscribe) || n.call(r);
                            var n, i = !0;
                            e.subscribe((0, B.createOperatorSubscriber)(t, function(e) {
                                var n;
                                null == (n = r.next) || n.call(r, e), t.next(e)
                            }, function() {
                                var e;
                                i = !1, null == (e = r.complete) || e.call(r), t.complete()
                            }, function(e) {
                                var n;
                                i = !1, null == (n = r.error) || n.call(r, e), t.error(e)
                            }, function() {
                                var e, t;
                                i && (null == (e = r.unsubscribe) || e.call(r)), null == (t = r.finalize) || t.call(r)
                            }))
                        }) : Z.identity), ee(() => {
                            i = !1, n = void 0
                        }), (0, et.share)(o)),
                        c = new D.Observable(e => {
                            i && e.next(n), e.complete()
                        });
                    return (0, er.merge)(u, c)
                }));
            return tZ.set(w, q), q
        }
    }
    let tZ = new Map;
    class t0 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        create(e, t) {
            return t6(this.#a, this.#u, "PUT", e, t)
        }
        edit(e, t) {
            return t6(this.#a, this.#u, "PATCH", e, t)
        }
        delete(e) {
            return t6(this.#a, this.#u, "DELETE", e)
        }
        list() {
            eH("dataset", this.#a.config());
            let e = this.#a.config(),
                t = e.projectId,
                r = "/datasets";
            return !1 === e.useProjectHostname && (r = `/projects/${t}/datasets`), tS(this.#a, this.#u, {
                uri: r,
                tag: null
            })
        }
        getEmbeddingsSettings(e) {
            return eH("dataset", this.#a.config()), eP(e), tS(this.#a, this.#u, {
                uri: t3(this.#a, e),
                tag: null
            })
        }
        editEmbeddingsSettings(e, t) {
            return eH("dataset", this.#a.config()), eP(e), tS(this.#a, this.#u, {
                method: "PUT",
                uri: t3(this.#a, e),
                body: t,
                tag: null
            })
        }
    }
    class t1 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        create(e, t) {
            return eH("dataset", this.#a.config()), L(t6(this.#a, this.#u, "PUT", e, t))
        }
        edit(e, t) {
            return eH("dataset", this.#a.config()), L(t6(this.#a, this.#u, "PATCH", e, t))
        }
        delete(e) {
            return eH("dataset", this.#a.config()), L(t6(this.#a, this.#u, "DELETE", e))
        }
        list() {
            eH("dataset", this.#a.config());
            let e = this.#a.config(),
                t = e.projectId,
                r = "/datasets";
            return !1 === e.useProjectHostname && (r = `/projects/${t}/datasets`), L(tS(this.#a, this.#u, {
                uri: r,
                tag: null
            }))
        }
        getEmbeddingsSettings(e) {
            return eH("dataset", this.#a.config()), eP(e), L(tS(this.#a, this.#u, {
                uri: t3(this.#a, e),
                tag: null
            }))
        }
        editEmbeddingsSettings(e, t) {
            return eH("dataset", this.#a.config()), eP(e), L(tS(this.#a, this.#u, {
                method: "PUT",
                uri: t3(this.#a, e),
                body: t,
                tag: null
            }))
        }
    }

    function t3(e, t) {
        let r = e.config();
        return !1 === r.useProjectHostname ? `/projects/${r.projectId}/datasets/${t}/settings/embeddings` : `/datasets/${t}/settings/embeddings`
    }

    function t6(e, t, r, n, i) {
        return eH("dataset", e.config()), eP(n), tS(e, t, {
            method: r,
            uri: `/datasets/${n}`,
            body: i,
            tag: null
        })
    }
    class t9 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        getPlaybackInfo(e, t = {}) {
            var r, n;
            let i = this.#a.config(),
                s = (i.resource || i["~experimental_resource"])?.id,
                {
                    instanceId: o,
                    libraryId: a
                } = function(e) {
                    let t = "object" == typeof e && "_ref" in e ? e._ref : e,
                        r = t4.exec(t);
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
                u = a || s;
            if (!u) throw Error("Could not determine Media Library ID - you need to provide a valid Media Library ID in the client config or a Media Library GDR");
            let c = (r = o, n = u, `/media-libraries/${n}/video/${r}/playback-info`),
                l = function(e) {
                    let t = {};
                    if (e.transformations) {
                        let {
                            thumbnail: r,
                            animated: n,
                            storyboard: i
                        } = e.transformations;
                        r && (r.width && (t.thumbnailWidth = r.width), r.height && (t.thumbnailHeight = r.height), void 0 !== r.time && (t.thumbnailTime = r.time), r.fit && (t.thumbnailFit = r.fit), r.format && (t.thumbnailFormat = r.format)), n && (n.width && (t.animatedWidth = n.width), n.height && (t.animatedHeight = n.height), void 0 !== n.start && (t.animatedStart = n.start), void 0 !== n.end && (t.animatedEnd = n.end), n.fps && (t.animatedFps = n.fps), n.format && (t.animatedFormat = n.format)), i && i.format && (t.storyboardFormat = i.format)
                    }
                    return e.expiration && (t.expiration = e.expiration), t
                }(t);
            return tS(this.#a, this.#u, {
                method: "GET",
                uri: c,
                query: l
            })
        }
    }
    class t2 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        getPlaybackInfo(e, t = {}) {
            return L(new t9(this.#a.observable, this.#u).getPlaybackInfo(e, t))
        }
    }
    let t4 = /^media-library:(ml[^:]+):([^:]+)$/;
    class t5 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        list(e) {
            let t = {};
            return e?.includeMembers === !1 && (t.includeMembers = "false"), e?.includeFeatures === !1 && (t.includeFeatures = "false"), e?.organizationId && (t.organizationId = e.organizationId), e?.onlyExplicitMembership && (t.onlyExplicitMembership = "true"), tS(this.#a, this.#u, {
                uri: "/projects",
                query: t
            })
        }
        getById(e) {
            return tS(this.#a, this.#u, {
                uri: `/projects/${e}`
            })
        }
    }
    class t8 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        list(e) {
            let t = {};
            return e?.includeMembers === !1 && (t.includeMembers = "false"), e?.includeFeatures === !1 && (t.includeFeatures = "false"), e?.organizationId && (t.organizationId = e.organizationId), e?.onlyExplicitMembership && (t.onlyExplicitMembership = "true"), L(tS(this.#a, this.#u, {
                uri: "/projects",
                query: t
            }))
        }
        getById(e) {
            return L(tS(this.#a, this.#u, {
                uri: `/projects/${e}`
            }))
        }
    }
    let t7 = ((e, t = 21) => {
            var r;
            let n, i;
            return r = t, i = -~(1.6 * (n = (2 << Math.log(e.length - 1) / Math.LN2) - 1) * r / e.length), (t = r) => {
                let s = "";
                for (;;) {
                    let r = ey(i),
                        o = 0 | i;
                    for (; o--;)
                        if ((s += e[r[o] & n] || "").length === t) return s
                }
            }
        })("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 8),
        re = (e, t) => t ? (0, em.getVersionId)(e, t) : (0, em.getDraftId)(e);

    function rt(e, {
        releaseId: t,
        publishedId: r,
        document: n
    }) {
        if (r && n._id) {
            let e = re(r, t);
            return ((e, t) => {
                if (t._id && t._id !== e) throw Error(`The provided document ID (\`${t._id}\`) does not match the generated version ID (\`${e}\`)`)
            })(e, n), e
        }
        if (n._id) {
            let r = (0, em.isDraftId)(n._id),
                i = (0, em.isVersionId)(n._id);
            if (!r && !i) throw Error(`\`${e}()\` requires a document with an \`_id\` that is a version or draft ID`);
            if (t) {
                if (r) throw Error(`\`${e}()\` was called with a document ID (\`${n._id}\`) that is a draft ID, but a release ID (\`${t}\`) was also provided.`);
                let i = (0, em.getVersionFromId)(n._id);
                if (i !== t) throw Error(`\`${e}()\` was called with a document ID (\`${n._id}\`) that is a version ID, but the release ID (\`${t}\`) does not match the document's version ID (\`${i}\`).`)
            }
            return n._id
        }
        if (r) return re(r, t);
        throw Error(`\`${e}()\` requires either a publishedId or a document with an \`_id\``)
    }
    let rr = (e, t) => {
        let [r, n, i] = ((e, t) => {
            if ("object" == typeof e && null !== e && ("releaseId" in e || "metadata" in e)) {
                let {
                    releaseId: r = t7(),
                    metadata: n = {}
                } = e;
                return [r, n, t]
            }
            return [t7(), {}, e]
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
            options: i
        }
    };
    class rn {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        get({
            releaseId: e
        }, t) {
            return tp(this.#a, this.#u, `_.releases.${e}`, t)
        }
        create(e, t) {
            let {
                action: r,
                options: n
            } = rr(e, t), {
                releaseId: i,
                metadata: s
            } = r;
            return t$(this.#a, this.#u, r, n).pipe((0, en.map)(e => ({
                ...e,
                releaseId: i,
                metadata: s
            })))
        }
        edit({
            releaseId: e,
            patch: t
        }, r) {
            return t$(this.#a, this.#u, {
                actionType: "sanity.action.release.edit",
                releaseId: e,
                patch: t
            }, r)
        }
        publish({
            releaseId: e
        }, t) {
            return t$(this.#a, this.#u, {
                actionType: "sanity.action.release.publish",
                releaseId: e
            }, t)
        }
        archive({
            releaseId: e
        }, t) {
            return t$(this.#a, this.#u, {
                actionType: "sanity.action.release.archive",
                releaseId: e
            }, t)
        }
        unarchive({
            releaseId: e
        }, t) {
            return t$(this.#a, this.#u, {
                actionType: "sanity.action.release.unarchive",
                releaseId: e
            }, t)
        }
        schedule({
            releaseId: e,
            publishAt: t
        }, r) {
            return t$(this.#a, this.#u, {
                actionType: "sanity.action.release.schedule",
                releaseId: e,
                publishAt: t
            }, r)
        }
        unschedule({
            releaseId: e
        }, t) {
            return t$(this.#a, this.#u, {
                actionType: "sanity.action.release.unschedule",
                releaseId: e
            }, t)
        }
        delete({
            releaseId: e
        }, t) {
            return t$(this.#a, this.#u, {
                actionType: "sanity.action.release.delete",
                releaseId: e
            }, t)
        }
        fetchDocuments({
            releaseId: e
        }, t) {
            return tm(this.#a, this.#u, e, t)
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
            return L(tp(this.#a, this.#u, `_.releases.${e}`, t))
        }
        async create(e, t) {
            let {
                action: r,
                options: n
            } = rr(e, t), {
                releaseId: i,
                metadata: s
            } = r;
            return {
                ...await L(t$(this.#a, this.#u, r, n)),
                releaseId: i,
                metadata: s
            }
        }
        edit({
            releaseId: e,
            patch: t
        }, r) {
            return L(t$(this.#a, this.#u, {
                actionType: "sanity.action.release.edit",
                releaseId: e,
                patch: t
            }, r))
        }
        publish({
            releaseId: e
        }, t) {
            return L(t$(this.#a, this.#u, {
                actionType: "sanity.action.release.publish",
                releaseId: e
            }, t))
        }
        archive({
            releaseId: e
        }, t) {
            return L(t$(this.#a, this.#u, {
                actionType: "sanity.action.release.archive",
                releaseId: e
            }, t))
        }
        unarchive({
            releaseId: e
        }, t) {
            return L(t$(this.#a, this.#u, {
                actionType: "sanity.action.release.unarchive",
                releaseId: e
            }, t))
        }
        schedule({
            releaseId: e,
            publishAt: t
        }, r) {
            return L(t$(this.#a, this.#u, {
                actionType: "sanity.action.release.schedule",
                releaseId: e,
                publishAt: t
            }, r))
        }
        unschedule({
            releaseId: e
        }, t) {
            return L(t$(this.#a, this.#u, {
                actionType: "sanity.action.release.unschedule",
                releaseId: e
            }, t))
        }
        delete({
            releaseId: e
        }, t) {
            return L(t$(this.#a, this.#u, {
                actionType: "sanity.action.release.delete",
                releaseId: e
            }, t))
        }
        fetchDocuments({
            releaseId: e
        }, t) {
            return L(tm(this.#a, this.#u, e, t))
        }
    }
    class rs {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        getById(e) {
            return tS(this.#a, this.#u, {
                uri: `/users/${e}`
            })
        }
    }
    class ro {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        getById(e) {
            return L(tS(this.#a, this.#u, {
                uri: `/users/${e}`
            }))
        }
    }
    class ra {
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
        constructor(e, t = eZ) {
            this.config(t), this.#l = e;
            const r = t._requestHandler;
            this.#u = r ? (() => {
                let n;
                return (i, s) => (n || (n = new ru(e, {
                    ...t,
                    _requestHandler: void 0
                })), r(i, t => e(t, s), n))
            })() : e, this.assets = new tH(this, this.#u), this.datasets = new t0(this, this.#u), this.live = new tX(this), this.mediaLibrary = {
                video: new t9(this, this.#u)
            }, this.projects = new t5(this, this.#u), this.users = new rs(this, this.#u), this.agent = {
                action: new tV(this, this.#u)
            }, this.releases = new rn(this, this.#u)
        }
        clone() {
            return new ra(this.#l, this.config())
        }
        config(e) {
            if (void 0 === e) return {
                ...this.#c
            };
            if (this.#c && !1 === this.#c.allowReconfigure) throw Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
            return this.#c = e3(e, this.#c || {}), this
        }
        withConfig(e) {
            let t = this.config();
            return new ra(this.#l, {
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
            return td(this, this.#u, this.#c.stega, e, t, r)
        }
        getDocument(e, t) {
            if (t?.includeAllVersions === !0) return tp(this, this.#u, e, {
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
            return tp(this, this.#u, e, r)
        }
        getDocuments(e, t) {
            return tf(this, this.#u, e, t)
        }
        documentsExists(e, t) {
            return tg(this, this.#u, e, t)
        }
        create(e, t) {
            return tA(this, this.#u, e, "create", t)
        }
        createIfNotExists(e, t) {
            return ty(this, this.#u, e, t)
        }
        createOrReplace(e, t) {
            return tb(this, this.#u, e, t)
        }
        createVersion({
            document: e,
            publishedId: t,
            releaseId: r,
            baseId: n,
            ifBaseRevisionId: i
        }, s) {
            if (!e) return tv(this, this.#u, t, n, r, i, s);
            let o = rt("createVersion", {
                    document: e,
                    publishedId: t,
                    releaseId: r
                }),
                a = {
                    ...e,
                    _id: o
                },
                u = t || (0, em.getPublishedId)(e._id);
            return tw(this, this.#u, a, u, s)
        }
        delete(e, t) {
            return tC(this, this.#u, e, t)
        }
        discardVersion({
            releaseId: e,
            publishedId: t
        }, r, n) {
            let i = re(t, e);
            return tR(this, this.#u, i, r, n)
        }
        replaceVersion({
            document: e,
            publishedId: t,
            releaseId: r
        }, n) {
            let i = rt("replaceVersion", {
                    document: e,
                    publishedId: t,
                    releaseId: r
                }),
                s = {
                    ...e,
                    _id: i
                };
            return tq(this, this.#u, s, n)
        }
        unpublishVersion({
            releaseId: e,
            publishedId: t
        }, r) {
            let n = (0, em.getVersionId)(t, e);
            return tI(this, this.#u, n, t, r)
        }
        mutate(e, t) {
            return tE(this, this.#u, e, t)
        }
        patch(e, t) {
            return new tn(e, t, this)
        }
        transaction(e) {
            return new tu(e, this)
        }
        action(e, t) {
            return t$(this, this.#u, e, t)
        }
        request(e) {
            return tS(this, this.#u, e)
        }
        getUrl(e, t) {
            return tP(this, e, t)
        }
        getDataUrl(e, t) {
            return t_(this, e, t)
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
        observable;
        #c;
        #l;
        #u;
        listen = tQ;
        constructor(e, t = eZ) {
            this.config(t), this.#l = e;
            const r = t._requestHandler;
            this.#u = r ? (() => {
                let n;
                return (i, s) => (n || (n = new ru(e, {
                    ...t,
                    _requestHandler: void 0
                })), r(i, t => e(t, s), n))
            })() : e, this.assets = new tL(this, this.#u), this.datasets = new t1(this, this.#u), this.live = new tX(this), this.mediaLibrary = {
                video: new t2(this, this.#u)
            }, this.projects = new t8(this, this.#u), this.users = new ro(this, this.#u), this.agent = {
                action: new tN(this, this.#u)
            }, this.releases = new ri(this, this.#u), this.observable = new ra(e, t)
        }
        clone() {
            return new ru(this.#l, this.config())
        }
        config(e) {
            if (void 0 === e) return {
                ...this.#c
            };
            if (this.#c && !1 === this.#c.allowReconfigure) throw Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
            return this.observable && this.observable.config(e), this.#c = e3(e, this.#c || {}), this
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
            return L(td(this, this.#u, this.#c.stega, e, t, r))
        }
        getDocument(e, t) {
            if (t?.includeAllVersions === !0) return L(tp(this, this.#u, e, {
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
            return L(tp(this, this.#u, e, r))
        }
        getDocuments(e, t) {
            return L(tf(this, this.#u, e, t))
        }
        documentsExists(e, t) {
            return L(tg(this, this.#u, e, t))
        }
        create(e, t) {
            return L(tA(this, this.#u, e, "create", t))
        }
        createIfNotExists(e, t) {
            return L(ty(this, this.#u, e, t))
        }
        createOrReplace(e, t) {
            return L(tb(this, this.#u, e, t))
        }
        createVersion({
            document: e,
            publishedId: t,
            releaseId: r,
            baseId: n,
            ifBaseRevisionId: i
        }, s) {
            if (!e) return es(tv(this, this.#u, t, n, r, i, s));
            let o = rt("createVersion", {
                    document: e,
                    publishedId: t,
                    releaseId: r
                }),
                a = {
                    ...e,
                    _id: o
                },
                u = t || (0, em.getPublishedId)(e._id);
            return es(tw(this, this.#u, a, u, s))
        }
        delete(e, t) {
            return L(tC(this, this.#u, e, t))
        }
        discardVersion({
            releaseId: e,
            publishedId: t
        }, r, n) {
            let i = re(t, e);
            return L(tR(this, this.#u, i, r, n))
        }
        replaceVersion({
            document: e,
            publishedId: t,
            releaseId: r
        }, n) {
            let i = rt("replaceVersion", {
                    document: e,
                    publishedId: t,
                    releaseId: r
                }),
                s = {
                    ...e,
                    _id: i
                };
            return es(tq(this, this.#u, s, n))
        }
        unpublishVersion({
            releaseId: e,
            publishedId: t
        }, r) {
            let n = (0, em.getVersionId)(t, e);
            return L(tI(this, this.#u, n, t, r))
        }
        mutate(e, t) {
            return L(tE(this, this.#u, e, t))
        }
        patch(e, t) {
            return new ti(e, t, this)
        }
        transaction(e) {
            return new ta(e, this)
        }
        action(e, t) {
            return L(t$(this, this.#u, e, t))
        }
        request(e) {
            return L(tS(this, this.#u, e))
        }
        dataRequest(e, t, r) {
            return L(tO(this, this.#u, e, t, r))
        }
        getUrl(e, t) {
            return tP(this, e, t)
        }
        getDataUrl(e, t) {
            return t_(this, e, t)
        }
    }
    let rc = {
            requester: ex(t = []),
            createClient: e => {
                let r = ex(t, {
                    ignoreWarnings: e.ignoreWarnings
                });
                return new ru((t, n) => (n || r)({
                    maxRedirects: 0,
                    maxRetries: e.maxRetries,
                    retryDelay: e.retryDelay,
                    lineage: e.lineage,
                    ...t
                }), e)
            }
        },
        rl = (rc.requester, rc.createClient),
        rh = r.default.env.SANITY_STUDIO_URL || "https://studio.hexagon.unity.com",
        rd = rl({
            projectId: r.default.env.SANITY_STUDIO_PROJECT_ID || "fuvbjjlp",
            dataset: r.default.env.SANITY_STUDIO_DATASET || "production",
            apiVersion: "2023-10-12",
            useCdn: !1,
            perspective: "published",
            requestTagPrefix: "hexagon-web",
            stega: {
                studioUrl: rh
            }
        }),
        rp = rd.withConfig({
            token: r.default.env.SANITY_STUDIO_TOKEN || "skbmHHM41x7T83M45rdoQ5eDnIZvmSMtvNLDWgtqaMVk7iqH2LROZuyD9CfiQEWyi8W04C9ImPHWWK3q19ERi5XWv0L1GP2s4u1p3sUTbjuDdpmVWr3ZsI8vGIbwZRn43SWI9ZYeYzzNBHk2DknFUXEfxpLGSZsNwiv24EcAFisqkG7gVso6",
            useCdn: !0,
            perspective: "published"
        });
    rd.withConfig({
        token: r.default.env.SANITY_STUDIO_REVALIDATION_TOKEN,
        useCdn: !1
    }), rd.withConfig({
        useCdn: !1,
        token: r.default.env.SANITY_WRITE_TOKEN,
        perspective: "raw"
    }), e.s(["cdnClient", 0, rp], 591336)
}, 477846, (e, t, r) => {
    e.e, t.exports = function() {
        function e(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
            return n
        }

        function t() {
            return (t = Object.assign.bind()).apply(null, arguments)
        }
        var r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

        function n(e) {
            return ("image-" + e.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1")
        }
        var i = [
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
            s = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
            o = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
            a = ["format"],
            u = function() {
                function u(e, r) {
                    this.options = void 0, this.options = e ? t({}, e.options || {}, r || {}) : t({}, r || {})
                }
                var c = u.prototype;
                return c.withOptions = function(r) {
                    var n = r.baseUrl || this.options.baseUrl,
                        s = {
                            baseUrl: n
                        };
                    for (var o in r) r.hasOwnProperty(o) && (s[function(t) {
                        for (var r, n = function(t) {
                                var r = "u" > typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                                if (r) return (r = r.call(t)).next.bind(r);
                                if (Array.isArray(t) || (r = function(t) {
                                        if (t) {
                                            if ("string" == typeof t) return e(t, void 0);
                                            var r = ({}).toString.call(t).slice(8, -1);
                                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? e(t, void 0) : void 0
                                        }
                                    }(t))) {
                                    r && (t = r);
                                    var n = 0;
                                    return function() {
                                        return n >= t.length ? {
                                            done: !0
                                        } : {
                                            done: !1,
                                            value: t[n++]
                                        }
                                    }
                                }
                                throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                            }(i); !(r = n()).done;) {
                            var s = r.value,
                                o = s[0],
                                a = s[1];
                            if (t === o || t === a) return o
                        }
                        return t
                    }(o)] = r[o]);
                    return new u(this, t({
                        baseUrl: n
                    }, s))
                }, c.image = function(e) {
                    return this.withOptions({
                        source: e
                    })
                }, c.dataset = function(e) {
                    return this.withOptions({
                        dataset: e
                    })
                }, c.projectId = function(e) {
                    return this.withOptions({
                        projectId: e
                    })
                }, c.bg = function(e) {
                    return this.withOptions({
                        bg: e
                    })
                }, c.dpr = function(e) {
                    return this.withOptions(e && 1 !== e ? {
                        dpr: e
                    } : {})
                }, c.width = function(e) {
                    return this.withOptions({
                        width: e
                    })
                }, c.height = function(e) {
                    return this.withOptions({
                        height: e
                    })
                }, c.focalPoint = function(e, t) {
                    return this.withOptions({
                        focalPoint: {
                            x: e,
                            y: t
                        }
                    })
                }, c.maxWidth = function(e) {
                    return this.withOptions({
                        maxWidth: e
                    })
                }, c.minWidth = function(e) {
                    return this.withOptions({
                        minWidth: e
                    })
                }, c.maxHeight = function(e) {
                    return this.withOptions({
                        maxHeight: e
                    })
                }, c.minHeight = function(e) {
                    return this.withOptions({
                        minHeight: e
                    })
                }, c.size = function(e, t) {
                    return this.withOptions({
                        width: e,
                        height: t
                    })
                }, c.blur = function(e) {
                    return this.withOptions({
                        blur: e
                    })
                }, c.sharpen = function(e) {
                    return this.withOptions({
                        sharpen: e
                    })
                }, c.rect = function(e, t, r, n) {
                    return this.withOptions({
                        rect: {
                            left: e,
                            top: t,
                            width: r,
                            height: n
                        }
                    })
                }, c.format = function(e) {
                    return this.withOptions({
                        format: e
                    })
                }, c.invert = function(e) {
                    return this.withOptions({
                        invert: e
                    })
                }, c.orientation = function(e) {
                    return this.withOptions({
                        orientation: e
                    })
                }, c.quality = function(e) {
                    return this.withOptions({
                        quality: e
                    })
                }, c.forceDownload = function(e) {
                    return this.withOptions({
                        download: e
                    })
                }, c.flipHorizontal = function() {
                    return this.withOptions({
                        flipHorizontal: !0
                    })
                }, c.flipVertical = function() {
                    return this.withOptions({
                        flipVertical: !0
                    })
                }, c.ignoreImageParams = function() {
                    return this.withOptions({
                        ignoreImageParams: !0
                    })
                }, c.fit = function(e) {
                    if (-1 === s.indexOf(e)) throw Error('Invalid fit mode "' + e + '"');
                    return this.withOptions({
                        fit: e
                    })
                }, c.crop = function(e) {
                    if (-1 === o.indexOf(e)) throw Error('Invalid crop mode "' + e + '"');
                    return this.withOptions({
                        crop: e
                    })
                }, c.saturation = function(e) {
                    return this.withOptions({
                        saturation: e
                    })
                }, c.auto = function(e) {
                    if (-1 === a.indexOf(e)) throw Error('Invalid auto mode "' + e + '"');
                    return this.withOptions({
                        auto: e
                    })
                }, c.pad = function(e) {
                    return this.withOptions({
                        pad: e
                    })
                }, c.vanityName = function(e) {
                    return this.withOptions({
                        vanityName: e
                    })
                }, c.frame = function(e) {
                    if (1 !== e) throw Error('Invalid frame value "' + e + '"');
                    return this.withOptions({
                        frame: e
                    })
                }, c.url = function() {
                    return function(e) {
                        var s = t({}, e || {}),
                            o = s.source;
                        delete s.source;
                        var a = function(e) {
                            var r, i;
                            if (!e) return null;
                            if ("string" == typeof e && (i = e, /^https?:\/\//.test("" + i))) r = {
                                asset: {
                                    _ref: n(e)
                                }
                            };
                            else if ("string" == typeof e) r = {
                                asset: {
                                    _ref: e
                                }
                            };
                            else if (e && "string" == typeof e._ref) r = {
                                asset: e
                            };
                            else if (e && "string" == typeof e._id) r = {
                                asset: {
                                    _ref: e._id || ""
                                }
                            };
                            else if (e && e.asset && "string" == typeof e.asset.url) r = {
                                asset: {
                                    _ref: n(e.asset.url)
                                }
                            };
                            else {
                                if ("object" != typeof e.asset) return null;
                                r = t({}, e)
                            }
                            return e.crop && (r.crop = e.crop), e.hotspot && (r.hotspot = e.hotspot),
                                function(e) {
                                    if (e.crop && e.hotspot) return e;
                                    var r = t({}, e);
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
                        }(o);
                        if (!a) {
                            if (o && "object" == typeof o && null !== o && o._upload && (!o.asset || !o.asset._ref)) return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8HwQACfsD/QNViZkAAAAASUVORK5CYII=";
                            throw Error("Unable to resolve image URL from source (" + JSON.stringify(o) + ")")
                        }
                        var u = function(e) {
                                var t = e.split("-"),
                                    n = t[1],
                                    i = t[2],
                                    s = t[3];
                                if (!n || !i || !s) throw Error("Malformed asset _ref '" + e + "'. Expected an id like \"" + r + '".');
                                var o = i.split("x"),
                                    a = o[0],
                                    u = o[1],
                                    c = +a,
                                    l = +u;
                                if (!(isFinite(c) && isFinite(l))) throw Error("Malformed asset _ref '" + e + "'. Expected an id like \"" + r + '".');
                                return {
                                    id: n,
                                    width: c,
                                    height: l,
                                    format: s
                                }
                            }(a.asset._ref || a.asset._id || ""),
                            c = Math.round(a.crop.left * u.width),
                            l = Math.round(a.crop.top * u.height),
                            h = {
                                left: c,
                                top: l,
                                width: Math.round(u.width - a.crop.right * u.width - c),
                                height: Math.round(u.height - a.crop.bottom * u.height - l)
                            },
                            d = a.hotspot.height * u.height / 2,
                            p = a.hotspot.width * u.width / 2,
                            f = a.hotspot.x * u.width,
                            g = a.hotspot.y * u.height;
                        return s.rect || s.focalPoint || s.ignoreImageParams || s.crop || (s = t({}, s, function(e, t) {
                                var r, n = t.width,
                                    i = t.height;
                                if (!(n && i)) return {
                                    width: n,
                                    height: i,
                                    rect: e.crop
                                };
                                var s = e.crop,
                                    o = e.hotspot,
                                    a = n / i;
                                if (s.width / s.height > a) {
                                    var u = Math.round(s.height),
                                        c = Math.round(u * a),
                                        l = Math.max(0, Math.round(s.top)),
                                        h = Math.max(0, Math.round(Math.round((o.right - o.left) / 2 + o.left) - c / 2));
                                    h < s.left ? h = s.left : h + c > s.left + s.width && (h = s.left + s.width - c), r = {
                                        left: h,
                                        top: l,
                                        width: c,
                                        height: u
                                    }
                                } else {
                                    var d = s.width,
                                        p = Math.round(d / a),
                                        f = Math.max(0, Math.round(s.left)),
                                        g = Math.max(0, Math.round(Math.round((o.bottom - o.top) / 2 + o.top) - p / 2));
                                    g < s.top ? g = s.top : g + p > s.top + s.height && (g = s.top + s.height - p), r = {
                                        left: f,
                                        top: g,
                                        width: d,
                                        height: p
                                    }
                                }
                                return {
                                    width: n,
                                    height: i,
                                    rect: r
                                }
                            }({
                                crop: h,
                                hotspot: {
                                    left: f - p,
                                    top: g - d,
                                    right: f + p,
                                    bottom: g + d
                                }
                            }, s))),
                            function(e) {
                                var t = (e.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
                                    r = e.vanityName ? "/" + e.vanityName : "",
                                    n = e.asset.id + "-" + e.asset.width + "x" + e.asset.height + "." + e.asset.format + r,
                                    s = t + "/images/" + e.projectId + "/" + e.dataset + "/" + n,
                                    o = [];
                                if (e.rect) {
                                    var a = e.rect,
                                        u = a.left,
                                        c = a.top,
                                        l = a.width,
                                        h = a.height;
                                    (0 !== u || 0 !== c || h !== e.asset.height || l !== e.asset.width) && o.push("rect=" + u + "," + c + "," + l + "," + h)
                                }
                                e.bg && o.push("bg=" + e.bg), e.focalPoint && (o.push("fp-x=" + e.focalPoint.x), o.push("fp-y=" + e.focalPoint.y));
                                var d = [e.flipHorizontal && "h", e.flipVertical && "v"].filter(Boolean).join("");
                                return (d && o.push("flip=" + d), i.forEach(function(t) {
                                    var r = t[0],
                                        n = t[1];
                                    void 0 !== e[r] ? o.push(n + "=" + encodeURIComponent(e[r])) : void 0 !== e[n] && o.push(n + "=" + encodeURIComponent(e[n]))
                                }), 0 === o.length) ? s : s + "?" + o.join("&")
                            }(t({}, s, {
                                asset: u
                            }))
                    }(this.options)
                }, c.toString = function() {
                    return this.url()
                }, u
            }();
        return function(e) {
            if (e && "config" in e && "function" == typeof e.config) {
                var t = e.config(),
                    r = t.apiHost,
                    n = t.projectId,
                    i = t.dataset;
                return new u(null, {
                    baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: n,
                    dataset: i
                })
            }
            if (e && "clientConfig" in e && "object" == typeof e.clientConfig) {
                var s = e.clientConfig,
                    o = s.apiHost,
                    a = s.projectId,
                    c = s.dataset;
                return new u(null, {
                    baseUrl: (o || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
                    projectId: a,
                    dataset: c
                })
            }
            return new u(null, e || {})
        }
    }()
}, 779712, e => {
    "use strict";
    var t = e.i(591336);
    let r = (0, e.i(477846).default)(t.cdnClient);
    e.s(["urlForImage", 0, e => e ? r.image(e) : null])
}]);