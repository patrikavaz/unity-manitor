(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 591336, e => {
    "use strict";
    var t, r = e.i(757249);
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
                    b(o instanceof g ? e instanceof Error ? e : Error(`Request error while attempting to reach is ${n.url}`, {
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
    var v, w, C, R, q, E = e.i(542241),
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
    var A = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : e.g;
    let x = (e = {}) => {
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
    class j {
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
                this.reason || (this.reason = new j(e), t(this.reason))
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
    x.Cancel = j, x.CancelToken = S, x.isCancel = e => !(!e || !e?.__CANCEL__);
    var _ = (e, t, r) => ("GET" === r.method || "HEAD" === r.method) && (e.isNetworkError || !1);

    function D(e) {
        return 100 * Math.pow(2, e) + 100 * Math.random()
    }
    let F = (e = {}) => {
        var t;
        let r, n, s;
        return r = (t = {
            shouldRetry: _,
            ...e
        }).maxRetries || 5, n = t.retryDelay || D, s = t.shouldRetry, {
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
    F.shouldRetry = _;
    var P = e.i(516165),
        M = e.i(159862),
        k = e.i(282519),
        V = e.i(187636);

    function U() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = (0, k.popScheduler)(e);
        return (0, V.from)(e, r)
    }
    var N = e.i(827540),
        L = e.i(806298),
        z = (0, e.i(949918).createErrorClass)(function(e) {
            return function() {
                e(this), this.name = "EmptyError", this.message = "no elements in sequence"
            }
        });

    function H(e, t) {
        var r = "object" == typeof t;
        return new Promise(function(n, s) {
            var i, o = !1;
            e.subscribe({
                next: function(e) {
                    i = e, o = !0
                },
                error: s,
                complete: function() {
                    o ? n(i) : r ? n(t.defaultValue) : s(new z)
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
    var K = e.i(544287);

    function Q(e, t) {
        var r = (0, N.isFunction)(e) ? e : function() {
                return e
            },
            n = function(e) {
                return e.error(r())
            };
        return new P.Observable(t ? function(e) {
            return t.schedule(n, 0, e)
        } : n)
    }
    var X = e.i(79357),
        Z = new(e.i(745491)).AsyncScheduler(X.AsyncAction),
        ee = (e.i(597961), e.i(448971));

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
                    r ? n(t.defaultValue) : s(new z)
                }
            });
            e.subscribe(i)
        })
    }
    var ea = e.i(583796),
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
        var r = (0, k.popResultSelector)(e);
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
        em = e.i(655886);
    let ey = e => crypto.getRandomValues(new Uint8Array(e)),
        eb = /\r\n|[\n\r\u2028\u2029]/;

    function ev(e, t) {
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
    class ew extends Error {
        response;
        statusCode = 400;
        responseBody;
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
        details;
        constructor(e) {
            const t = eR(e);
            super(t.message), Object.assign(this, t)
        }
    }

    function eR(e, t) {
        var r, n, s;
        let i = e.body,
            o = {
                response: e,
                statusCode: e.statusCode,
                responseBody: (r = i, -1 !== (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") ? JSON.stringify(r, null, 2) : r),
                message: "",
                details: void 0
            };
        if (!(0, ea.isRecord)(i)) return o.message = eI(e, i), o;
        let a = i.error;
        if ("string" == typeof a && "string" == typeof i.message) return o.message = `${a} - ${i.message}`, o;
        if ("object" != typeof a || null === a) return "string" == typeof a ? o.message = a : "string" == typeof i.message ? o.message = i.message : o.message = eI(e, i), o;
        if ("type" in (n = a) && "mutationError" === n.type && "description" in n && "string" == typeof n.description || "type" in (s = a) && "actionError" === s.type && "description" in s && "string" == typeof s.description) {
            let e = a.items || [],
                t = e.slice(0, 5).map(e => e.error?.description).filter(Boolean),
                r = t.length ? `:
- ${t.join(`
- `)}` : "";
            return e.length > 5 && (r += `
...and ${e.length-5} more`), o.message = `${a.description}${r}`, o.details = i.error, o
        }
        return eq(a) ? (o.message = eE(a, t?.options?.query?.tag), o.details = i.error) : "description" in a && "string" == typeof a.description ? (o.message = a.description, o.details = a) : o.message = eI(e, i), o
    }

    function eq(e) {
        return (0, ea.isRecord)(e) && "queryParseError" === e.type && "string" == typeof e.query && "number" == typeof e.start && "number" == typeof e.end
    }

    function eE(e, t) {
        let {
            query: r,
            start: n,
            end: s,
            description: i
        } = e;
        if (!r || typeof n > "u") return `GROQ query parse error: ${i}`;
        let o = t ? `

Tag: ${t}` : "";
        return `GROQ query parse error:
${function(e,t,r){let n=e.split(eb),{start:s,end:i,markerLines:o}=function(e,t){let r={...e.start},n={...r,...e.end},s=r.line??-1,i=r.column??0,o=n.line,a=n.column,u=Math.max(s-3,0),c=Math.min(t.length,o+3);-1===s&&(u=0),-1===o&&(c=t.length);let l=o-s,h={};if(l)for(let e=0;e<=l;e++){let r=e+s;if(i)if(0===e){let e=t[r-1].length;h[r]=[i,e-i+1]}else if(e===l)h[r]=[0,a];else{let n=t[r-e].length;h[r]=[0,n]}else h[r]=!0}else i===a?i?h[s]=[i,0]:h[s]=!0:h[s]=[i,a-i];return{start:u,end:c,markerLines:h}}({start:ev(t.start,n),end:t.end?ev(t.end,n):void 0},n),a=`
        $ {
            i
        }
        `.length;return e.split(eb,i).slice(s,i).map((e,t)=>{let n=s+1+t,i=`
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
        `)}(r,{start:n,end:s},i)}${o}`
    }

    function eI(e, t) {
        var r;
        let n = "string" == typeof t ? ` (${(r=t).length>100?`${r.slice(0,100)}\u2026`:r})` : "",
            s = e.statusMessage ? ` ${e.statusMessage}` : "";
        return `${e.method}-request to ${e.url} resulted in HTTP ${e.statusCode}${s}${n}`
    }
    class e$ extends Error {
        projectId;
        addOriginUrl;
        constructor({
            projectId: e
        }) {
            super("CorsOriginError"), this.name = "CorsOriginError", this.projectId = e;
            const t = new URL(`https://sanity.io/manage/project/${e}/api`);
            if ("u" > typeof location) {
                const {
                    origin: e
                } = location;
                t.searchParams.set("cors", "add"), t.searchParams.set("origin", e), this.addOriginUrl = t, this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${t}`
            } else this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: ${t}`
        }
    }
    let eT = {
        onResponse: (e, t) => {
            if (e.statusCode >= 500) throw new eC(e);
            if (e.statusCode >= 400) throw new ew(e, t);
            return e
        }
    };

    function eO(e, t = {}) {
        return ((e = [], t = b) => (function e(t, r) {
            let n = [],
                s = l.reduce((e, t) => (e[t] = e[t] || [], e), {
                    processOptions: [i],
                    validateOptions: [u]
                });

            function o(e) {
                let t, n = c.reduce((e, t) => {
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
                    i = function(e, t, ...r) {
                        let n = "onError" === e,
                            i = t;
                        for (let t = 0; t < s[e].length && (i = (0, s[e][t])(i, ...r), !n || i); t++);
                        return i
                    },
                    o = i("processOptions", e);
                i("validateOptions", o);
                let a = {
                        options: o,
                        channels: n,
                        applyMiddleware: i
                    },
                    u = n.request.subscribe(e => {
                        t = r(e, (t, r) => ((e, t, r) => {
                            let s = e,
                                o = t;
                            if (!s) try {
                                o = i("onResponse", t, r)
                            } catch (e) {
                                o = null, s = e
                            }(s = s && i("onError", s, r)) ? n.error.publish(s) : o && n.response.publish(o)
                        })(t, r, e))
                    });
                n.abort.subscribe(() => {
                    u(), t && t.abort()
                });
                let l = i("onReturn", n, a);
                return l === n && n.request.publish(a), l
            }
            return o.use = function(e) {
                if (!e) throw Error("Tried to add middleware that resolved to falsey value");
                if ("function" == typeof e) throw Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
                if (e.onReturn && s.onReturn.length > 0) throw Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
                return l.forEach(t => {
                    e[t] && s[t].push(e[t])
                }), n.push(e), o
            }, o.clone = () => e(n, r), t.forEach(o.use), o
        })(e, t))([F({
            shouldRetry: eA
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
        }, eT, function(e = {}) {
            let t = e.implementation || A.Observable;
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

    function eA(e, t, r) {
        if (0 === r.maxRetries) return !1;
        let n = "GET" === r.method || "HEAD" === r.method,
            s = (r.uri || r.url).startsWith("/data/query"),
            i = e.response && (429 === e.response.statusCode || 502 === e.response.statusCode || 503 === e.response.statusCode);
        return (!!n || !!s) && !!i || F.shouldRetry(e, t, r)
    }

    function ex(e) {
        return "https://www.sanity.io/help/" + e
    }
    let ej = ["image", "file"],
        eS = ["before", "after", "replace"],
        e_ = e => {
            if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(e)) throw Error("Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters")
        },
        eD = (e, t) => {
            if (null === t || "object" != typeof t || Array.isArray(t)) throw Error(`${e}() takes an object of properties`)
        },
        eF = (e, t) => {
            if ("string" != typeof t || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(t) || t.includes("..")) throw Error(`${e}(): "${t}" is not a valid document ID`)
        },
        eP = (e, t) => {
            if (!t._id) throw Error(`${e}() requires that the document contains an ID ("_id" property)`);
            eF(e, t._id)
        },
        eM = (e, t) => {
            if (!t._type) throw Error(`\`${e}()\` requires that the document contains a type (\`_type\` property)`);
            var r = t._type;
            if ("string" != typeof r) throw Error(`\`${e}()\`: \`${r}\` is not a valid document type`)
        },
        ek = e => {
            if (!e.dataset) throw Error("`dataset` must be provided to perform queries");
            return e.dataset || ""
        },
        eV = e => {
            if ("string" != typeof e || !/^[a-z0-9._-]{1,75}$/i.test(e)) throw Error("Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long.");
            return e
        },
        eU = e => {
            if (!e["~experimental_resource"]) throw Error("`resource` must be provided to perform resource queries");
            let {
                type: t,
                id: r
            } = e["~experimental_resource"];
            switch (t) {
                case "dataset":
                    if (2 !== r.split(".").length) throw Error('Dataset resource ID must be in the format "project.dataset"');
                    return;
                case "dashboard":
                case "media-library":
                case "canvas":
                    return;
                default:
                    throw Error(`Unsupported resource type: ${t.toString()}`)
            }
        },
        eN = (e, t) => {
            if (t["~experimental_resource"]) throw Error(`\`${e}\` does not support resource-based operations`)
        },
        eL = e => {
            var t;
            let r, n;
            return t = (...t) => console.warn(e.join(" "), ...t), r = !1, (...e) => (r || (n = t(...e), r = !0), n)
        },
        ez = eL(["Because you set `withCredentials` to true, we will override your `useCdn`", "setting to be false since (cookie-based) credentials are never set on the CDN"]),
        eH = eL(["Since you haven't set a value for `useCdn`, we will deliver content using our", "global, edge-cached API-CDN. If you wish to have content delivered faster, set", "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."]),
        eW = eL(["The Sanity client is configured with the `perspective` set to `drafts` or `previewDrafts`, which doesn't support the API-CDN.", "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."]),
        eB = eL(["The `previewDrafts` perspective has been renamed to  `drafts` and will be removed in a future API version"]),
        eG = eL(["You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.", `See ${ex("js-client-browser-token")} for more information and how to hide this warning.`]),
        eY = eL(["You have configured Sanity client to use a token, but also provided `withCredentials: true`.", "This is no longer supported - only token will be used - remove `withCredentials: true`."]),
        eJ = eL(["Using the Sanity client without specifying an API version is deprecated.", `See ${ex("js-client-api-version")}`]),
        eK = (eL(["The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."]), eL(["You have called `createVersion()` with a defined `document`. The recommended approach is to provide a `baseId` and `releaseId` instead."])),
        eQ = {
            apiHost: "https://api.sanity.io",
            apiVersion: "1",
            useProjectHostname: !0,
            stega: {
                enabled: !1
            }
        },
        eX = ["localhost", "127.0.0.1", "0.0.0.0"];

    function eZ(e) {
        if (Array.isArray(e) && e.length > 1 && e.includes("raw")) throw TypeError('Invalid API perspective value: "raw". The raw-perspective can not be combined with other perspectives')
    }
    let e0 = (e, t) => {
        let r, n = {
            ...t,
            ...e,
            stega: {
                ..."boolean" == typeof t.stega ? {
                    enabled: t.stega
                } : t.stega || eQ.stega,
                ..."boolean" == typeof e.stega ? {
                    enabled: e.stega
                } : e.stega || {}
            }
        };
        n.apiVersion || eJ();
        let s = {
                ...eQ,
                ...n
            },
            i = s.useProjectHostname && !s["~experimental_resource"];
        if (typeof Promise > "u") {
            let e = ex("js-client-promise-polyfill");
            throw Error(`No native Promise-implementation found, polyfill needed - see ${e}`)
        }
        if (i && !s.projectId) throw Error("Configuration must contain `projectId`");
        if (s["~experimental_resource"] && eU(s), "u" > typeof s.perspective && eZ(s.perspective), "encodeSourceMap" in s) throw Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?");
        if ("encodeSourceMapAtPath" in s) throw Error("It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?");
        if ("boolean" != typeof s.stega.enabled) throw Error(`stega.enabled must be a boolean, received ${s.stega.enabled}`);
        if (s.stega.enabled && void 0 === s.stega.studioUrl) throw Error("stega.studioUrl must be defined when stega.enabled is true");
        if (s.stega.enabled && "string" != typeof s.stega.studioUrl && "function" != typeof s.stega.studioUrl) throw Error(`stega.studioUrl must be a string or a function, received ${s.stega.studioUrl}`);
        let o = "u" > typeof window && window.location && window.location.hostname,
            a = o && (r = window.location.hostname, -1 !== eX.indexOf(r)),
            u = !!s.token;
        s.withCredentials && u && (eY(), s.withCredentials = !1), o && a && u && !0 !== s.ignoreBrowserTokenWarning ? eG() : typeof s.useCdn > "u" && eH(), i && (e => {
                if (!/^[-a-z0-9]+$/i.test(e)) throw Error("`projectId` can only contain only a-z, 0-9 and dashes")
            })(s.projectId), s.dataset && e_(s.dataset), "requestTagPrefix" in s && (s.requestTagPrefix = s.requestTagPrefix ? eV(s.requestTagPrefix).replace(/\.+$/, "") : void 0), s.apiVersion = `${s.apiVersion}`.replace(/^v/, ""), s.isDefaultApi = s.apiHost === eQ.apiHost, !0 === s.useCdn && s.withCredentials && ez(), s.useCdn = !1 !== s.useCdn && !s.withCredentials,
            function(e) {
                if ("1" === e || "X" === e) return;
                let t = new Date(e);
                if (!(/^\d{4}-\d{2}-\d{2}$/.test(e) && t instanceof Date && t.getTime() > 0)) throw Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`")
            }(s.apiVersion);
        let c = s.apiHost.split("://", 2),
            l = c[0],
            h = c[1],
            d = s.isDefaultApi ? "apicdn.sanity.io" : h;
        return i ? (s.url = `${l}://${s.projectId}.${h}/v${s.apiVersion}`, s.cdnUrl = `${l}://${s.projectId}.${d}/v${s.apiVersion}`) : (s.url = `${s.apiHost}/v${s.apiVersion}`, s.cdnUrl = s.url), s
    };
    class e1 extends Error {
        name = "ConnectionFailedError"
    }
    class e3 extends Error {
        name = "DisconnectError";
        reason;
        constructor(e, t, r = {}) {
            super(e, r), this.reason = t
        }
    }
    class e6 extends Error {
        name = "ChannelError";
        data;
        constructor(e, t) {
            super(e), this.data = t
        }
    }
    class e9 extends Error {
        name = "MessageError";
        data;
        constructor(e, t, r = {}) {
            super(e, r), this.data = t
        }
    }
    class e2 extends Error {
        name = "MessageParseError"
    }
    let e5 = ["channelError", "disconnect"];

    function e4(e, t) {
        return (0, M.defer)(() => {
            let t = e();
            return t && (t instanceof P.Observable || (0, N.isFunction)(t.lift) && (0, N.isFunction)(t.subscribe)) ? t : U(t)
        }).pipe((0, L.mergeMap)(e => {
            var r, n;
            return r = e, n = t, new P.Observable(e => {
                let t = n.includes("open"),
                    s = n.includes("reconnect");

                function i(t) {
                    if ("data" in t) {
                        let [r, n] = e8(t);
                        e.error(r ? new e2("Unable to parse EventSource error message", {
                            cause: n
                        }) : new e9((n?.data).message, n));
                        return
                    }
                    r.readyState === r.CLOSED ? e.error(new e1("EventSource connection failed")) : s && e.next({
                        type: "reconnect"
                    })
                }

                function o() {
                    e.next({
                        type: "open"
                    })
                }

                function a(t) {
                    let [n, s] = e8(t);
                    if (n) return void e.error(new e2("Unable to parse EventSource message", {
                        cause: n
                    }));
                    if ("channelError" === t.type) {
                        var i, o;
                        let t, n = new URL(r.url).searchParams.get("tag");
                        e.error(new e6((i = s?.data, o = n, (t = i.error) ? eq(t) ? eE(t, o) : t.description ? t.description : "string" == typeof t ? t : JSON.stringify(t, null, 2) : i.message || "Unknown listener error"), s.data));
                        return
                    }
                    "disconnect" === t.type ? e.error(new e3(`Server disconnected client: ${s.data?.reason||"unknown error"}`)) : e.next({
                        type: t.type,
                        id: t.lastEventId,
                        ...s.data ? {
                            data: s.data
                        } : {}
                    })
                }
                r.addEventListener("error", i), t && r.addEventListener("open", o);
                let u = [...new Set([...e5, ...n])].filter(e => "error" !== e && "open" !== e && "reconnect" !== e);
                return u.forEach(e => r.addEventListener(e, a)), () => {
                    r.removeEventListener("error", i), t && r.removeEventListener("open", o), u.forEach(e => r.removeEventListener(e, a)), r.close()
                }
            })
        }))
    }

    function e8(e) {
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

    function e7(e) {
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
    class te {
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
                if (-1 === eS.indexOf(e)) {
                    let e = eS.map(e => `"${e}"`).join(", ");
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
                ...e7(this.selection),
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
    class tt extends te {
        #a;
        constructor(e, t, r) {
            super(e, t), this.#a = r
        }
        clone() {
            return new tt(this.selection, {
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
    class tr extends te {
        #a;
        constructor(e, t, r) {
            super(e, t), this.#a = r
        }
        clone() {
            return new tr(this.selection, {
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
    let tn = {
        returnDocuments: !1
    };
    class ts {
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
            return eD(t, e), eP(t, e), this._add({
                [t]: e
            })
        }
        createOrReplace(e) {
            let t = "createOrReplace";
            return eD(t, e), eP(t, e), this._add({
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
    class ti extends ts {
        #a;
        constructor(e, t, r) {
            super(e, r), this.#a = t
        }
        clone() {
            return new ti([...this.operations], this.#a, this.trxId)
        }
        commit(e) {
            if (!this.#a) throw Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
            return this.#a.mutate(this.serialize(), Object.assign({
                transactionId: this.trxId
            }, tn, e || {}))
        }
        patch(e, t) {
            let r = "function" == typeof t,
                n = "string" != typeof e && e instanceof tr,
                s = "object" == typeof e && ("query" in e || "id" in e);
            if (n) return this._add({
                patch: e.serialize()
            });
            if (r) {
                let r = t(new tr(e, {}, this.#a));
                if (!(r instanceof tr)) throw Error("function passed to `patch()` must return the patch");
                return this._add({
                    patch: r.serialize()
                })
            }
            if (s) {
                let r = new tr(e, t || {}, this.#a);
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
    class to extends ts {
        #a;
        constructor(e, t, r) {
            super(e, r), this.#a = t
        }
        clone() {
            return new to([...this.operations], this.#a, this.trxId)
        }
        commit(e) {
            if (!this.#a) throw Error("No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method");
            return this.#a.mutate(this.serialize(), Object.assign({
                transactionId: this.trxId
            }, tn, e || {}))
        }
        patch(e, t) {
            let r = "function" == typeof t;
            if ("string" != typeof e && e instanceof tt) return this._add({
                patch: e.serialize()
            });
            if (r) {
                let r = t(new tt(e, {}, this.#a));
                if (!(r instanceof tt)) throw Error("function passed to `patch()` must return the patch");
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
    let ta = ({
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
        tu = e => "response" === e.type,
        tc = e => e.body;

    function tl(t, r, n, s, i = {}, o = {}) {
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
            p = tE(t, r, "query", {
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
        }((0, V.from)(e.A(662006).then(function(e) {
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

    function th(e, t, r, n = {}) {
        let s = {
            uri: tx(e, "doc", (() => {
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
        return tO(e, t, s).pipe((0, eg.filter)(tu), (0, es.map)(e => {
            let t = e.body.documents;
            return t ? n.includeAllVersions ? t : t[0] : n.includeAllVersions ? [] : void 0
        }))
    }

    function td(e, t, r, n = {}) {
        let s = {
            uri: tx(e, "doc", r.join(",")),
            json: !0,
            tag: n.tag,
            signal: n.signal
        };
        return tO(e, t, s).pipe((0, eg.filter)(tu), (0, es.map)(e => {
            let t, n, s = (t = e.body.documents || [], n = e => e._id, t.reduce((e, t) => (e[n(t)] = t, e), Object.create(null)));
            return r.map(e => s[e] || null)
        }))
    }

    function tp(e, t, r, n = {}) {
        return tE(e, t, "query", {
            query: "*[sanity::partOfRelease($releaseId)]",
            params: {
                releaseId: r
            }
        }, n)
    }

    function tf(e, t, r, n) {
        return eP("createIfNotExists", r), tI(e, t, r, "createIfNotExists", n)
    }

    function tg(e, t, r, n) {
        return eP("createOrReplace", r), tI(e, t, r, "createOrReplace", n)
    }

    function tm(e, t, r, n, s) {
        return eP("createVersion", r), eM("createVersion", r), eK(), tq(e, t, {
            actionType: "sanity.action.document.version.create",
            publishedId: n,
            document: r
        }, s)
    }

    function ty(e, t, r, n, s, i, o) {
        if (!n) throw Error("`createVersion()` requires `baseId` when no `document` is provided");
        if (!r) throw Error("`createVersion()` requires `publishedId` when `baseId` is provided");
        return eF("createVersion", n), eF("createVersion", r), tq(e, t, {
            actionType: "sanity.action.document.version.create",
            publishedId: r,
            baseId: n,
            versionId: s ? (0, em.getVersionId)(r, s) : (0, em.getDraftId)(r),
            ifBaseRevisionId: i
        }, o)
    }

    function tb(e, t, r, n) {
        return tE(e, t, "mutate", {
            mutations: [{
                delete: e7(r)
            }]
        }, n)
    }

    function tv(e, t, r, n = !1, s) {
        return tq(e, t, {
            actionType: "sanity.action.document.version.discard",
            versionId: r,
            purge: n
        }, s)
    }

    function tw(e, t, r, n) {
        return eP("replaceVersion", r), eM("replaceVersion", r), tq(e, t, {
            actionType: "sanity.action.document.version.replace",
            document: r
        }, n)
    }

    function tC(e, t, r, n, s) {
        return tq(e, t, {
            actionType: "sanity.action.document.version.unpublish",
            versionId: r,
            publishedId: n
        }, s)
    }

    function tR(e, t, r, n) {
        let s;
        return tE(e, t, "mutate", {
            mutations: Array.isArray(s = r instanceof tr || r instanceof tt ? {
                patch: r.serialize()
            } : r instanceof ti || r instanceof to ? r.serialize() : r) ? s : [s],
            transactionId: n && n.transactionId || void 0
        }, n)
    }

    function tq(e, t, r, n) {
        let s = Array.isArray(r) ? r : [r],
            i = n && n.transactionId || void 0;
        return tE(e, t, "actions", {
            actions: s,
            transactionId: i,
            skipCrossDatasetReferenceValidation: n && n.skipCrossDatasetReferenceValidation || void 0,
            dryRun: n && n.dryRun || void 0
        }, n)
    }

    function tE(e, t, r, n, s = {}) {
        let i = "mutate" === r,
            o = "actions" === r,
            a = i || o ? "" : ta(n),
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
                uri: tx(e, r, c),
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
        return tO(e, t, b).pipe((0, eg.filter)(tu), (0, es.map)(tc), (0, es.map)(e => {
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

    function tI(e, t, r, n, s = {}) {
        return tE(e, t, "mutate", {
            mutations: [{
                [n]: r
            }]
        }, Object.assign({
            returnFirst: !0,
            returnDocuments: !0
        }, s))
    }
    let t$ = e => void 0 !== e.config().dataset && void 0 !== e.config().projectId || void 0 !== e.config()["~experimental_resource"],
        tT = (e, t) => t$(e) && t.startsWith(tx(e, "query"));

    function tO(e, t, r) {
        var n;
        let s = r.url || r.uri,
            i = e.config(),
            o = typeof r.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(r.method || "GET") >= 0 && (s.startsWith("/data/") || tT(e, s) || t$(e) && s.startsWith(tx(e, "mutate")) || t$(e) && s.startsWith(tx(e, "doc", "")) || t$(e) && s.startsWith(tx(e, "listen")) || t$(e) && s.startsWith(tx(e, "history", ""))) : r.canUseCdn,
            a = (r.useCdn ?? i.useCdn) && o,
            u = r.tag && i.requestTagPrefix ? [i.requestTagPrefix, r.tag].join(".") : r.tag || i.requestTagPrefix;
        if (u && null !== r.tag && (r.query = {
                tag: eV(u),
                ...r.query
            }), ["GET", "HEAD", "POST"].indexOf(r.method || "GET") >= 0 && tT(e, s)) {
            let e = r.resultSourceMap ?? i.resultSourceMap;
            void 0 !== e && !1 !== e && (r.query = {
                resultSourceMap: e,
                ...r.query
            });
            let t = r.perspective || i.perspective;
            "u" > typeof t && ("previewDrafts" === t && eB(), eZ(t), r.query = {
                perspective: Array.isArray(t) ? t.join(",") : t,
                ...r.query
            }, (Array.isArray(t) && t.length > 0 || "previewDrafts" === t || "drafts" === t) && a && (a = !1, eW())), r.lastLiveEventId && (r.query = {
                ...r.query,
                lastLiveEventId: r.lastLiveEventId
            }), !1 === r.returnQuery && (r.query = {
                returnQuery: "false",
                ...r.query
            }), a && "noStale" == r.cacheMode && (r.query = {
                cacheMode: "noStale",
                ...r.query
            })
        }
        let c = function(e, t = {}) {
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
            }(i, Object.assign({}, r, {
                url: tj(e, s, a)
            })),
            l = new P.Observable(e => t(c, i.requester).subscribe(e));
        return r.signal ? l.pipe((n = r.signal, e => new P.Observable(t => {
            let r = () => t.error(function(e) {
                if (tS) return new DOMException(e?.reason ?? "The operation was aborted.", "AbortError");
                let t = Error(e?.reason ?? "The operation was aborted.");
                return t.name = "AbortError", t
            }(n));
            if (n && n.aborted) return void r();
            let s = e.subscribe(t);
            return n.addEventListener("abort", r), () => {
                n.removeEventListener("abort", r), s.unsubscribe()
            }
        }))) : l
    }

    function tA(e, t, r) {
        return tO(e, t, r).pipe((0, eg.filter)(e => "response" === e.type), (0, es.map)(e => e.body))
    }

    function tx(e, t, r) {
        let n = e.config();
        if (n["~experimental_resource"]) {
            eU(n);
            let e = t_(n),
                s = void 0 !== r ? `${t}/${r}` : t;
            return `${e}/${s}`.replace(/\/($|\?)/, "$1")
        }
        let s = ek(n),
            i = `/${t}/${s}`;
        return `/data${void 0!==r?`${i}/${r}`:i}`.replace(/\/($|\?)/, "$1")
    }

    function tj(e, t, r = !1) {
        let {
            url: n,
            cdnUrl: s
        } = e.config();
        return `${r?s:n}/${t.replace(/^\//,"")}`
    }
    let tS = !!globalThis.DOMException,
        t_ = e => {
            if (!e["~experimental_resource"]) throw Error("`resource` must be provided to perform resource queries");
            let {
                type: t,
                id: r
            } = e["~experimental_resource"];
            switch (t) {
                case "dataset": {
                    let e = r.split(".");
                    if (2 !== e.length) throw Error('Dataset ID must be in the format "project.dataset"');
                    return `/projects/${e[0]}/datasets/${e[1]}`
                }
                case "canvas":
                    return `/canvases/${r}`;
                case "media-library":
                    return `/media-libraries/${r}`;
                case "dashboard":
                    return `/dashboards/${r}`;
                default:
                    throw Error(`Unsupported resource type: ${t.toString()}`)
            }
        };

    function tD(e, t, r) {
        let n = ek(e.config());
        return tA(e, t, {
            method: "POST",
            uri: `/agent/action/generate/${n}`,
            body: r
        })
    }

    function tF(e, t, r) {
        let n = ek(e.config());
        return tA(e, t, {
            method: "POST",
            uri: `/agent/action/transform/${n}`,
            body: r
        })
    }

    function tP(e, t, r) {
        let n = ek(e.config());
        return tA(e, t, {
            method: "POST",
            uri: `/agent/action/translate/${n}`,
            body: r
        })
    }
    class tM {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        generate(e) {
            return tD(this.#a, this.#u, e)
        }
        transform(e) {
            return tF(this.#a, this.#u, e)
        }
        translate(e) {
            return tP(this.#a, this.#u, e)
        }
    }
    class tk {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        generate(e) {
            return H(tD(this.#a, this.#u, e))
        }
        transform(e) {
            return H(tF(this.#a, this.#u, e))
        }
        translate(e) {
            return H(tP(this.#a, this.#u, e))
        }
        prompt(e) {
            var t, r;
            let n;
            return H((t = this.#a, r = this.#u, n = ek(t.config()), tA(t, r, {
                method: "POST",
                uri: `/agent/action/prompt/${n}`,
                body: e
            })))
        }
        patch(e) {
            var t, r;
            let n;
            return H((t = this.#a, r = this.#u, n = ek(t.config()), tA(t, r, {
                method: "POST",
                uri: `/agent/action/patch/${n}`,
                body: e
            })))
        }
    }
    class tV {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        upload(e, t, r) {
            return tN(this.#a, this.#u, e, t, r)
        }
    }
    class tU {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        upload(e, t, r) {
            return H(tN(this.#a, this.#u, e, t, r).pipe((0, eg.filter)(e => "response" === e.type), (0, es.map)(e => e.body.document)))
        }
    }

    function tN(e, t, r, n, s = {}) {
        var i, o;
        if (-1 === ej.indexOf(r)) throw Error(`Invalid asset type: ${r}. Must be one of ${ej.join(", ")}`);
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
            y = {
                label: h,
                title: d,
                description: p,
                filename: g,
                meta: a,
                creditLine: f
            };
        return m && (y.sourceId = m.id, y.sourceName = m.name, y.sourceUrl = m.url), tO(e, t, {
            tag: l,
            method: "POST",
            timeout: c.timeout || 0,
            uri: function(e, t) {
                let r = "image" === t ? "images" : "files";
                if (e["~experimental_resource"]) {
                    let {
                        type: t,
                        id: n
                    } = e["~experimental_resource"];
                    switch (t) {
                        case "dataset":
                            throw Error("Assets are not supported for dataset resources, yet. Configure the client with `{projectId: <projectId>, dataset: <datasetId>}` instead.");
                        case "canvas":
                            return `/canvases/${n}/assets/${r}`;
                        case "media-library":
                            return `/media-libraries/${n}/upload`;
                        case "dashboard":
                            return `/dashboards/${n}/assets/${r}`;
                        default:
                            throw Error(`Unsupported resource type: ${t.toString()}`)
                    }
                }
                let n = ek(e);
                return `assets/${r}/${n}`
            }(u, r),
            headers: c.contentType ? {
                "Content-Type": c.contentType
            } : {},
            query: y,
            body: n
        })
    }
    let tL = (0, M.defer)(() => e.A(440574)).pipe((0, es.map)(({
        default: e
    }) => e), (0, W.shareReplay)(1));

    function tz() {
        return function(e) {
            return e.pipe(J((e, t) => {
                var r;
                return e instanceof e1 ? function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return (0, K.mergeAll)(1)((0, V.from)(e, (0, k.popScheduler)(e)))
                }(U({
                    type: "reconnect"
                }), (void 0 === r && (r = Z), new P.Observable(function(e) {
                    var t = 1e3;
                    t < 0 && (t = 0);
                    var n = 0;
                    return r.schedule(function() {
                        e.closed || (e.next(n++), e.complete())
                    }, t)
                })).pipe((0, L.mergeMap)(() => t))) : Q(() => e)
            }))
        }
    }
    let tH = ["includePreviousRevision", "includeResult", "includeMutations", "includeAllVersions", "visibility", "effectFormat", "tag"],
        tW = {
            includeResult: !0
        };

    function tB(e, t, r = {}) {
        let {
            url: n,
            token: s,
            withCredentials: i,
            requestTagPrefix: o,
            headers: a
        } = this.config(), u = r.tag && o ? [o, r.tag].join(".") : r.tag, c = {
            ...Object.keys(tW).concat(Object.keys(r)).reduce((e, t) => (e[t] = typeof r[t] > "u" ? tW[t] : r[t], e), {}),
            tag: u
        }, l = ta({
            query: e,
            params: t,
            options: {
                tag: u,
                ...tH.reduce((e, t) => (typeof c[t] > "u" || (e[t] = c[t]), e), {})
            }
        }), h = `${n}${tx(this,"listen",l)}`;
        if (h.length > 14800) return Q(() => Error("Query too large for listener"));
        let d = c.events ? c.events : ["mutation"],
            p = {};
        return i && (p.withCredentials = !0), (s || a) && (p.headers = {}, s && (p.headers.Authorization = `Bearer ${s}`), a && Object.assign(p.headers, a)), e4(() => (typeof EventSource > "u" || p.headers ? tL : U(EventSource)).pipe((0, es.map)(e => new e(h, p))), d).pipe(tz(), (0, eg.filter)(e => d.includes(e.type)), (0, es.map)(e => ({
            type: e.type,
            ..."data" in e ? e.data : {}
        })))
    }
    let tG = "2021-03-25";
    class tY {
        #a;
        constructor(e) {
            this.#a = e
        }
        events({
            includeDrafts: e = !1,
            tag: t
        } = {}) {
            var r, n, s, i;
            eN("live", this.#a.config());
            let {
                projectId: o,
                apiVersion: a,
                token: u,
                withCredentials: c,
                requestTagPrefix: l,
                headers: h
            } = this.#a.config(), d = a.replace(/^v/, "");
            if ("X" !== d && d < tG) throw Error(`The live events API requires API version ${tG} or later. The current API version is ${d}. Please update your API version to use this feature.`);
            if (e && !u && !c) throw Error("The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role.");
            let p = tx(this.#a, "live/events"),
                f = new URL(this.#a.getUrl(p, !1)),
                g = t && l ? [l, t].join(".") : t;
            g && f.searchParams.set("tag", g), e && f.searchParams.set("includeDrafts", "true");
            let m = {};
            e && c && (m.withCredentials = !0), (e && u || h) && (m.headers = {}, e && u && (m.headers.Authorization = `Bearer ${u}`), h && Object.assign(m.headers, h));
            let y = `${f.href}::${JSON.stringify(m)}`,
                b = tJ.get(y);
            if (b) return b;
            let v = e4(() => (typeof EventSource > "u" || m.headers ? tL : U(EventSource)).pipe((0, es.map)(e => new e(f.href, m))), ["message", "restart", "welcome", "reconnect", "goaway"]),
                w = (n = f, s = {
                    method: "OPTIONS",
                    mode: "cors",
                    credentials: m.withCredentials ? "include" : "omit",
                    headers: m.headers
                }, new P.Observable(e => {
                    let t = new AbortController,
                        r = t.signal;
                    return fetch(n, {
                        ...s,
                        signal: t.signal
                    }).then(t => {
                        e.next(t), e.complete()
                    }, t => {
                        r.aborted || e.error(t)
                    }), () => t.abort()
                })).pipe(J(() => {
                    throw new e$({
                        projectId: o
                    })
                })),
                C = v.pipe(tz(), (0, L.mergeMap)(e => "reconnect" === e.type ? w.pipe((0, L.mergeMap)(() => U(e))) : U(e)), J(e => w.pipe((0, L.mergeMap)(() => {
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
                })).pipe(et(() => tJ.delete(y)), (i = "function" == typeof(r = {
                    predicate: e => "welcome" === e.type
                }) ? {
                    predicate: r,
                    ...void 0
                } : r, e => {
                    var t, r;
                    let n, s = !1,
                        {
                            predicate: o,
                            ...a
                        } = i,
                        u = e.pipe((t = e => {
                            i.predicate(e) && (s = !0, n = e)
                        }, (r = (0, N.isFunction)(t) ? {
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
                        }), (0, er.share)(a)),
                        c = new P.Observable(e => {
                            s && e.next(n), e.complete()
                        });
                    return (0, en.merge)(u, c)
                }));
            return tJ.set(y, C), C
        }
    }
    let tJ = new Map;
    class tK {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        create(e, t) {
            return tX(this.#a, this.#u, "PUT", e, t)
        }
        edit(e, t) {
            return tX(this.#a, this.#u, "PATCH", e, t)
        }
        delete(e) {
            return tX(this.#a, this.#u, "DELETE", e)
        }
        list() {
            eN("dataset", this.#a.config());
            let e = this.#a.config(),
                t = e.projectId,
                r = "/datasets";
            return !1 === e.useProjectHostname && (r = `/projects/${t}/datasets`), tA(this.#a, this.#u, {
                uri: r,
                tag: null
            })
        }
    }
    class tQ {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        create(e, t) {
            return eN("dataset", this.#a.config()), H(tX(this.#a, this.#u, "PUT", e, t))
        }
        edit(e, t) {
            return eN("dataset", this.#a.config()), H(tX(this.#a, this.#u, "PATCH", e, t))
        }
        delete(e) {
            return eN("dataset", this.#a.config()), H(tX(this.#a, this.#u, "DELETE", e))
        }
        list() {
            eN("dataset", this.#a.config());
            let e = this.#a.config(),
                t = e.projectId,
                r = "/datasets";
            return !1 === e.useProjectHostname && (r = `/projects/${t}/datasets`), H(tA(this.#a, this.#u, {
                uri: r,
                tag: null
            }))
        }
    }

    function tX(e, t, r, n, s) {
        return eN("dataset", e.config()), e_(n), tA(e, t, {
            method: r,
            uri: `/datasets/${n}`,
            body: s,
            tag: null
        })
    }
    class tZ {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        getPlaybackInfo(e, t = {}) {
            var r, n;
            let s = this.#a.config()["~experimental_resource"]?.id,
                {
                    instanceId: i,
                    libraryId: o
                } = function(e) {
                    let t = "object" == typeof e && "_ref" in e ? e._ref : e,
                        r = t1.exec(t);
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
                a = o || s;
            if (!a) throw Error("Could not determine Media Library ID - you need to provide a valid Media Library ID in the client config or a Media Library GDR");
            let u = (r = i, n = a, `/media-libraries/${n}/video/${r}/playback-info`),
                c = function(e) {
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
            return tA(this.#a, this.#u, {
                method: "GET",
                uri: u,
                query: c
            })
        }
    }
    class t0 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        getPlaybackInfo(e, t = {}) {
            return H(new tZ(this.#a.observable, this.#u).getPlaybackInfo(e, t))
        }
    }
    let t1 = /^media-library:(ml[^:]+):([^:]+)$/;
    class t3 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        list(e) {
            let t = {};
            return e?.includeMembers === !1 && (t.includeMembers = "false"), e?.organizationId && (t.organizationId = e.organizationId), tA(this.#a, this.#u, {
                uri: "/projects",
                query: t
            })
        }
        getById(e) {
            return tA(this.#a, this.#u, {
                uri: `/projects/${e}`
            })
        }
    }
    class t6 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        list(e) {
            let t = {};
            return e?.includeMembers === !1 && (t.includeMembers = "false"), e?.organizationId && (t.organizationId = e.organizationId), H(tA(this.#a, this.#u, {
                uri: "/projects",
                query: t
            }))
        }
        getById(e) {
            return H(tA(this.#a, this.#u, {
                uri: `/projects/${e}`
            }))
        }
    }
    let t9 = ((e, t = 21) => {
            var r;
            let n, s;
            return r = t, s = -~(1.6 * (n = (2 << Math.log(e.length - 1) / Math.LN2) - 1) * r / e.length), (t = r) => {
                let i = "";
                for (;;) {
                    let r = ey(s),
                        o = 0 | s;
                    for (; o--;)
                        if ((i += e[r[o] & n] || "").length === t) return i
                }
            }
        })("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", 8),
        t2 = (e, t) => t ? (0, em.getVersionId)(e, t) : (0, em.getDraftId)(e);

    function t5(e, {
        releaseId: t,
        publishedId: r,
        document: n
    }) {
        if (r && n._id) {
            let e = t2(r, t);
            return ((e, t) => {
                if (t._id && t._id !== e) throw Error(`The provided document ID (\`${t._id}\`) does not match the generated version ID (\`${e}\`)`)
            })(e, n), e
        }
        if (n._id) {
            let r = (0, em.isDraftId)(n._id),
                s = (0, em.isVersionId)(n._id);
            if (!r && !s) throw Error(`\`${e}()\` requires a document with an \`_id\` that is a version or draft ID`);
            if (t) {
                if (r) throw Error(`\`${e}()\` was called with a document ID (\`${n._id}\`) that is a draft ID, but a release ID (\`${t}\`) was also provided.`);
                let s = (0, em.getVersionFromId)(n._id);
                if (s !== t) throw Error(`\`${e}()\` was called with a document ID (\`${n._id}\`) that is a version ID, but the release ID (\`${t}\`) does not match the document's version ID (\`${s}\`).`)
            }
            return n._id
        }
        if (r) return t2(r, t);
        throw Error(`\`${e}()\` requires either a publishedId or a document with an \`_id\``)
    }
    let t4 = (e, t) => {
        let [r, n, s] = ((e, t) => {
            if ("object" == typeof e && null !== e && ("releaseId" in e || "metadata" in e)) {
                let {
                    releaseId: r = t9(),
                    metadata: n = {}
                } = e;
                return [r, n, t]
            }
            return [t9(), {}, e]
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
    class t8 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        get({
            releaseId: e
        }, t) {
            return th(this.#a, this.#u, `_.releases.${e}`, t)
        }
        create(e, t) {
            let {
                action: r,
                options: n
            } = t4(e, t), {
                releaseId: s,
                metadata: i
            } = r;
            return tq(this.#a, this.#u, r, n).pipe((0, es.map)(e => ({
                ...e,
                releaseId: s,
                metadata: i
            })))
        }
        edit({
            releaseId: e,
            patch: t
        }, r) {
            return tq(this.#a, this.#u, {
                actionType: "sanity.action.release.edit",
                releaseId: e,
                patch: t
            }, r)
        }
        publish({
            releaseId: e
        }, t) {
            return tq(this.#a, this.#u, {
                actionType: "sanity.action.release.publish",
                releaseId: e
            }, t)
        }
        archive({
            releaseId: e
        }, t) {
            return tq(this.#a, this.#u, {
                actionType: "sanity.action.release.archive",
                releaseId: e
            }, t)
        }
        unarchive({
            releaseId: e
        }, t) {
            return tq(this.#a, this.#u, {
                actionType: "sanity.action.release.unarchive",
                releaseId: e
            }, t)
        }
        schedule({
            releaseId: e,
            publishAt: t
        }, r) {
            return tq(this.#a, this.#u, {
                actionType: "sanity.action.release.schedule",
                releaseId: e,
                publishAt: t
            }, r)
        }
        unschedule({
            releaseId: e
        }, t) {
            return tq(this.#a, this.#u, {
                actionType: "sanity.action.release.unschedule",
                releaseId: e
            }, t)
        }
        delete({
            releaseId: e
        }, t) {
            return tq(this.#a, this.#u, {
                actionType: "sanity.action.release.delete",
                releaseId: e
            }, t)
        }
        fetchDocuments({
            releaseId: e
        }, t) {
            return tp(this.#a, this.#u, e, t)
        }
    }
    class t7 {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        get({
            releaseId: e
        }, t) {
            return H(th(this.#a, this.#u, `_.releases.${e}`, t))
        }
        async create(e, t) {
            let {
                action: r,
                options: n
            } = t4(e, t), {
                releaseId: s,
                metadata: i
            } = r;
            return {
                ...await H(tq(this.#a, this.#u, r, n)),
                releaseId: s,
                metadata: i
            }
        }
        edit({
            releaseId: e,
            patch: t
        }, r) {
            return H(tq(this.#a, this.#u, {
                actionType: "sanity.action.release.edit",
                releaseId: e,
                patch: t
            }, r))
        }
        publish({
            releaseId: e
        }, t) {
            return H(tq(this.#a, this.#u, {
                actionType: "sanity.action.release.publish",
                releaseId: e
            }, t))
        }
        archive({
            releaseId: e
        }, t) {
            return H(tq(this.#a, this.#u, {
                actionType: "sanity.action.release.archive",
                releaseId: e
            }, t))
        }
        unarchive({
            releaseId: e
        }, t) {
            return H(tq(this.#a, this.#u, {
                actionType: "sanity.action.release.unarchive",
                releaseId: e
            }, t))
        }
        schedule({
            releaseId: e,
            publishAt: t
        }, r) {
            return H(tq(this.#a, this.#u, {
                actionType: "sanity.action.release.schedule",
                releaseId: e,
                publishAt: t
            }, r))
        }
        unschedule({
            releaseId: e
        }, t) {
            return H(tq(this.#a, this.#u, {
                actionType: "sanity.action.release.unschedule",
                releaseId: e
            }, t))
        }
        delete({
            releaseId: e
        }, t) {
            return H(tq(this.#a, this.#u, {
                actionType: "sanity.action.release.delete",
                releaseId: e
            }, t))
        }
        fetchDocuments({
            releaseId: e
        }, t) {
            return H(tp(this.#a, this.#u, e, t))
        }
    }
    class re {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        getById(e) {
            return tA(this.#a, this.#u, {
                uri: `/users/${e}`
            })
        }
    }
    class rt {
        #a;
        #u;
        constructor(e, t) {
            this.#a = e, this.#u = t
        }
        getById(e) {
            return H(tA(this.#a, this.#u, {
                uri: `/users/${e}`
            }))
        }
    }
    class rr {
        assets;
        datasets;
        live;
        mediaLibrary;
        projects;
        users;
        agent;
        releases;
        #c;
        #u;
        listen = tB;
        constructor(e, t = eQ) {
            this.config(t), this.#u = e, this.assets = new tV(this, this.#u), this.datasets = new tK(this, this.#u), this.live = new tY(this), this.mediaLibrary = {
                video: new tZ(this, this.#u)
            }, this.projects = new t3(this, this.#u), this.users = new re(this, this.#u), this.agent = {
                action: new tM(this, this.#u)
            }, this.releases = new t8(this, this.#u)
        }
        clone() {
            return new rr(this.#u, this.config())
        }
        config(e) {
            if (void 0 === e) return {
                ...this.#c
            };
            if (this.#c && !1 === this.#c.allowReconfigure) throw Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
            return this.#c = e0(e, this.#c || {}), this
        }
        withConfig(e) {
            let t = this.config();
            return new rr(this.#u, {
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
            return tl(this, this.#u, this.#c.stega, e, t, r)
        }
        getDocument(e, t) {
            if (t?.includeAllVersions === !0) return th(this, this.#u, e, {
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
            return th(this, this.#u, e, r)
        }
        getDocuments(e, t) {
            return td(this, this.#u, e, t)
        }
        create(e, t) {
            return tI(this, this.#u, e, "create", t)
        }
        createIfNotExists(e, t) {
            return tf(this, this.#u, e, t)
        }
        createOrReplace(e, t) {
            return tg(this, this.#u, e, t)
        }
        createVersion({
            document: e,
            publishedId: t,
            releaseId: r,
            baseId: n,
            ifBaseRevisionId: s
        }, i) {
            if (!e) return ty(this, this.#u, t, n, r, s, i);
            let o = t5("createVersion", {
                    document: e,
                    publishedId: t,
                    releaseId: r
                }),
                a = {
                    ...e,
                    _id: o
                },
                u = t || (0, em.getPublishedId)(e._id);
            return tm(this, this.#u, a, u, i)
        }
        delete(e, t) {
            return tb(this, this.#u, e, t)
        }
        discardVersion({
            releaseId: e,
            publishedId: t
        }, r, n) {
            let s = t2(t, e);
            return tv(this, this.#u, s, r, n)
        }
        replaceVersion({
            document: e,
            publishedId: t,
            releaseId: r
        }, n) {
            let s = t5("replaceVersion", {
                    document: e,
                    publishedId: t,
                    releaseId: r
                }),
                i = {
                    ...e,
                    _id: s
                };
            return tw(this, this.#u, i, n)
        }
        unpublishVersion({
            releaseId: e,
            publishedId: t
        }, r) {
            let n = (0, em.getVersionId)(t, e);
            return tC(this, this.#u, n, t, r)
        }
        mutate(e, t) {
            return tR(this, this.#u, e, t)
        }
        patch(e, t) {
            return new tt(e, t, this)
        }
        transaction(e) {
            return new to(e, this)
        }
        action(e, t) {
            return tq(this, this.#u, e, t)
        }
        request(e) {
            return tA(this, this.#u, e)
        }
        getUrl(e, t) {
            return tj(this, e, t)
        }
        getDataUrl(e, t) {
            return tx(this, e, t)
        }
    }
    class rn {
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
        #u;
        listen = tB;
        constructor(e, t = eQ) {
            this.config(t), this.#u = e, this.assets = new tU(this, this.#u), this.datasets = new tQ(this, this.#u), this.live = new tY(this), this.mediaLibrary = {
                video: new t0(this, this.#u)
            }, this.projects = new t6(this, this.#u), this.users = new rt(this, this.#u), this.agent = {
                action: new tk(this, this.#u)
            }, this.releases = new t7(this, this.#u), this.observable = new rr(e, t)
        }
        clone() {
            return new rn(this.#u, this.config())
        }
        config(e) {
            if (void 0 === e) return {
                ...this.#c
            };
            if (this.#c && !1 === this.#c.allowReconfigure) throw Error("Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client");
            return this.observable && this.observable.config(e), this.#c = e0(e, this.#c || {}), this
        }
        withConfig(e) {
            let t = this.config();
            return new rn(this.#u, {
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
            return H(tl(this, this.#u, this.#c.stega, e, t, r))
        }
        getDocument(e, t) {
            if (t?.includeAllVersions === !0) return H(th(this, this.#u, e, {
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
            return H(th(this, this.#u, e, r))
        }
        getDocuments(e, t) {
            return H(td(this, this.#u, e, t))
        }
        create(e, t) {
            return H(tI(this, this.#u, e, "create", t))
        }
        createIfNotExists(e, t) {
            return H(tf(this, this.#u, e, t))
        }
        createOrReplace(e, t) {
            return H(tg(this, this.#u, e, t))
        }
        createVersion({
            document: e,
            publishedId: t,
            releaseId: r,
            baseId: n,
            ifBaseRevisionId: s
        }, i) {
            if (!e) return eo(ty(this, this.#u, t, n, r, s, i));
            let o = t5("createVersion", {
                    document: e,
                    publishedId: t,
                    releaseId: r
                }),
                a = {
                    ...e,
                    _id: o
                },
                u = t || (0, em.getPublishedId)(e._id);
            return eo(tm(this, this.#u, a, u, i))
        }
        delete(e, t) {
            return H(tb(this, this.#u, e, t))
        }
        discardVersion({
            releaseId: e,
            publishedId: t
        }, r, n) {
            let s = t2(t, e);
            return H(tv(this, this.#u, s, r, n))
        }
        replaceVersion({
            document: e,
            publishedId: t,
            releaseId: r
        }, n) {
            let s = t5("replaceVersion", {
                    document: e,
                    publishedId: t,
                    releaseId: r
                }),
                i = {
                    ...e,
                    _id: s
                };
            return eo(tw(this, this.#u, i, n))
        }
        unpublishVersion({
            releaseId: e,
            publishedId: t
        }, r) {
            let n = (0, em.getVersionId)(t, e);
            return H(tC(this, this.#u, n, t, r))
        }
        mutate(e, t) {
            return H(tR(this, this.#u, e, t))
        }
        patch(e, t) {
            return new tr(e, t, this)
        }
        transaction(e) {
            return new ti(e, this)
        }
        action(e, t) {
            return H(tq(this, this.#u, e, t))
        }
        request(e) {
            return H(tA(this, this.#u, e))
        }
        dataRequest(e, t, r) {
            return H(tE(this, this.#u, e, t, r))
        }
        getUrl(e, t) {
            return tj(this, e, t)
        }
        getDataUrl(e, t) {
            return tx(this, e, t)
        }
    }
    let rs = {
            requester: eO(t = []),
            createClient: e => {
                let r = eO(t, {
                    ignoreWarnings: e.ignoreWarnings
                });
                return new rn((t, n) => (n || r)({
                    maxRedirects: 0,
                    maxRetries: e.maxRetries,
                    retryDelay: e.retryDelay,
                    ...t
                }), e)
            }
        },
        ri = (rs.requester, rs.createClient),
        ro = r.default.env.SANITY_STUDIO_URL || "https://studio.hexagon.unity.com",
        ra = ri({
            projectId: r.default.env.SANITY_STUDIO_PROJECT_ID || "fuvbjjlp",
            dataset: r.default.env.SANITY_STUDIO_DATASET || "production",
            apiVersion: "2023-10-12",
            useCdn: !1,
            perspective: "published",
            requestTagPrefix: "hexagon-web",
            stega: {
                studioUrl: ro
            }
        }),
        ru = ra.withConfig({
            token: r.default.env.SANITY_STUDIO_TOKEN || "skbmHHM41x7T83M45rdoQ5eDnIZvmSMtvNLDWgtqaMVk7iqH2LROZuyD9CfiQEWyi8W04C9ImPHWWK3q19ERi5XWv0L1GP2s4u1p3sUTbjuDdpmVWr3ZsI8vGIbwZRn43SWI9ZYeYzzNBHk2DknFUXEfxpLGSZsNwiv24EcAFisqkG7gVso6",
            useCdn: !0,
            perspective: "published"
        });
    ra.withConfig({
        token: r.default.env.SANITY_STUDIO_REVALIDATION_TOKEN,
        useCdn: !1
    }), ra.withConfig({
        useCdn: !1,
        token: r.default.env.SANITY_WRITE_TOKEN,
        perspective: "raw"
    }), e.s(["cdnClient", 0, ru], 591336)
}]);
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c1409ab6-9755-5968-88a0-37c98904f460")
    } catch (e) {}
}();
//# debugId=c1409ab6-9755-5968-88a0-37c98904f460